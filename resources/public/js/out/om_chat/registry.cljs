(ns om-chat.registry
    (:require [om-chat.utils :refer [or-else find-first]]))

(def component-registry (atom []))

(defn register-component [name main]
  (swap! component-registry #(conj % {:name name :main main})))

(defn register-component-missing [main-missing]
  (register-component :missing main-missing))

(defn find-component [name]
  (-> (find-first
        (fn [e] (:name e) name)
          @component-registry)
        (:main)
        (or-else (when-not (= :missing name) (find-component :missing)))))

