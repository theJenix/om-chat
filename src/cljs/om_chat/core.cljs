(ns om-chat.core
    (:require-macros [cljs.core.async.macros :refer [go alt!]])
    (:require [goog.events :as events]
              [cljs.core.async :refer [put! <! >! chan timeout]]
              [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [cljs-http.client :as http]
              [domina.xpath :as dx]
              [domina :as d]
              [om-chat.utils :refer [guid or-else]]
              [om-chat.chat :as chat]
              [om-chat.registry :as reg]))

;; Lets you do (prn "stuff") to the console
(enable-console-print!)
(defn component-missing [class]
  (vector 
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div nil
            (dom/h1 nil (str "Component missing: " class))))))
    (atom [])))

(def components (dx/xpath "//*[@component-class]"))
(doseq [c (d/nodes components)]
  (let [class (d/attr c :component-class)
        class-main (-> (reg/find-component class)
                       (or-else (component-missing class)))]
    (prn "Attaching " class " to " c)
    (om/root (class-main 0) (class-main 1) {:target c})))


