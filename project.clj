(defproject om-chat "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.reader "0.8.2"]
                 ;; CLJ
                 [ring/ring-core "1.2.0"]
                 [ring/ring-devel "1.2.0"]
                 [ring/ring-json "0.3.1"]
                 [compojure "1.1.6"]
                 [cheshire "5.2.0"]
                 [http-kit "2.1.16"] 
                 ;; CLJS
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [cljs-http "0.1.9"]
                 [domina "1.0.2"]
                 [secretary "1.1.0"]
                 [om "0.5.3"]]

  :main om-chat.core

  :plugins [[lein-cljsbuild "1.0.2"]
            [lein-ring "0.8.7"]
            [lein-pdo "0.1.1"]]

;;  :aliases {"dev" ["pdo" "cljsbuild" "auto" "dev," "ring" "server-headless"]}
  :aliases {"dev" ["pdo" "cljsbuild" "auto" "dev," "run"]}

  :ring {:handler om-chat.core/app
         :init    om-chat.core/init}

  :source-paths ["src/clj"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/gen/om_chat.js"
                                   :output-dir "resources/public/js/gen"
                                   :optimizations :none
                                   :source-map true
                                   :externs ["react/externs/react.js"]}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {
                                   :output-to "resources/public/js/gen/om_chat.js"
                                   :source-map "resources/public/js/gen/om_chat.js.map"
                                   :optimizations :advanced
                                   :pretty-print false
                                   :output-wrapper false
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]
                                   :closure-warnings
                                   {:non-standard-jsdoc :off}}}]})
