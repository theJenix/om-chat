(ns om-chat.chat
    (:require-macros [cljs.core.async.macros :refer [go alt!]])
    (:require [goog.events :as events]
              [cljs.core.async :refer [put! <! >! chan timeout]]
              [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [cljs-http.client :as http]
              [om-chat.registry :as reg])
   (:import [goog.net XhrIo]
             goog.net.EventType
             [goog.events EventType]))

(def app-state
  (atom {:messages []}))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn json-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (on-complete (doall (js->clj (.parse js/JSON (.getResponseText xhr)) :keywordize-keys true)))))
    (. xhr
      (send url (meths method) (when data (-> data (clj->js) (JSON/stringify)))
        #js {"Content-Type" "application/json"}))))

(defn refresh-messages [app first]
  (json-xhr
    {:method :get
     :url (if first "msg" "msg_long")
     :on-complete (fn [e] (om/transact! app :messages (fn [_] e) (refresh-messages app false)))}))

;;  (js/setTimeout #(refresh-messages app) 10000))
(defn send-message [msg]
  (json-xhr
    {:method :post
     :url "msg"
     :data {:msg msg}
     :on-complete #()}
  ))

(defn component-main [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:msg ""})
    om/IWillMount
    (will-mount [_] (refresh-messages app true))
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
        (dom/h1 nil "Messages!")
        (apply dom/ul nil
            (map #(dom/li nil %) (:messages app)))
        (dom/div nil
            (dom/input #js {:type "text" :value (:msg state)
                            :onChange (fn [e] (let [val (.. e -target -value)] (om/set-state! owner :msg val)))})
            (dom/button #js {:onClick (fn [e] (send-message (om/get-state owner :msg)) (om/set-state! owner :msg ""))} "Send Message"))))))

(reg/register-component "om-chat.chat" (vector component-main app-state))
