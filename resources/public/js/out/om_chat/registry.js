// Compiled by ClojureScript 0.0-2173
goog.provide('om_chat.registry');
goog.require('cljs.core');
goog.require('om_chat.utils');
goog.require('om_chat.utils');
om_chat.registry.component_registry = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
om_chat.registry.register_component = (function register_component(name,main){return cljs.core.swap_BANG_.call(null,om_chat.registry.component_registry,(function (p1__9600_SHARP_){return cljs.core.conj.call(null,p1__9600_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"main","main",1017248043),main], null));
}));
});
om_chat.registry.register_component_missing = (function register_component_missing(main_missing){return om_chat.registry.register_component.call(null,new cljs.core.Keyword(null,"missing","missing",2083353816),main_missing);
});
om_chat.registry.find_component = (function find_component(name){return om_chat.utils.or_else.call(null,new cljs.core.Keyword(null,"main","main",1017248043).cljs$core$IFn$_invoke$arity$1(om_chat.utils.find_first.call(null,(function (e){new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(e);
return name;
}),cljs.core.deref.call(null,om_chat.registry.component_registry))),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"missing","missing",2083353816),name))?null:find_component.call(null,new cljs.core.Keyword(null,"missing","missing",2083353816))));
});

//# sourceMappingURL=registry.js.map