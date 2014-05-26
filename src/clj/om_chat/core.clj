(ns om-chat.core
    (:require [compojure.handler :as handler]
              [compojure.route :as route]
              [compojure.core :refer [GET POST defroutes]]
              [ring.util.response :as resp]
              [ring.middleware.json :refer [wrap-json-params]]
              [ring.middleware.keyword-params :refer [wrap-keyword-params]]
              [cheshire.core :as json]
              [clojure.java.io :as io]
              [ring.middleware.reload :as reload]
              [org.httpkit.server :as hs]))

(def messages (atom []))

(def channel-hub (atom {}))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defn notify-all [msgs]
  (let [_ (println msgs)]
  (doseq [channel (keys @channel-hub)]
    (let [_ (println channel)]
    (hs/send! channel (json-response msgs))))))

(defn add-message [msg]
  (if msg
      (json-response {:status :ok :resp (notify-all (swap! messages #(conj % msg)))})
      (json-response {:status :failed :msg msg})))

(defn async-handler [req]
  (hs/with-channel req channel
    (swap! channel-hub assoc channel req)
    (hs/on-close channel (fn [status]
                        (swap! channel-hub dissoc channel)))))

(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html"))

  (GET "/msg" req (json-response @messages))
  (GET "/msg_long" [] async-handler)

  (POST "/msg" {params :params}
    (println params)
    (add-message (params :msg)))

  (POST "/test" req (json-response
                     {:message "Doing something something important..."}))

  (route/resources "/")
  (route/not-found "Page not found"))

(defn mywrap-request-logging [handler]
  (fn [{:keys [request-method uri] :as req}]
    (let [body (slurp (:body req))
          _ (println (format "Processing %s %s" (.toUpperCase (name request-method)) uri))
          _ (println (format "\t Body: %s" body))
          resp (handler (assoc req :body (java.io.ByteArrayInputStream. (.getBytes body))))]
      (println (format "Response %s" resp))
      resp)))

(defn in-dev? [args] true) ;; TODO read a config variable from command line, env, or file?

(def app
  (-> #'app-routes
      (handler/api)
      (wrap-json-params)))
;;      (mywrap-request-logging)))

(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [handler (if (in-dev? args)
                  (reload/wrap-reload app) ;; only reload when dev
                  (app))]
    (hs/run-server handler {:port 3000})))


