(ns om-chat.utils
  (:require [cljs.reader :as reader])
  (:import [goog.ui IdGenerator]))

(defn guid []
  (.getNextUniqueId (.getInstance IdGenerator)))

(defn find-first [pred coll]
  (when (seq coll)
    (let [item (first coll)]
      (if (pred item)
        item
        (recur pred (rest coll))))))

(defn or-else [val default]
  (if val val default))

;;(defmacro bind-to "Bind a component to a root node in the HTML tree" [
