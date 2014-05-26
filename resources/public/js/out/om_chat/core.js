// Compiled by ClojureScript 0.0-2173
goog.provide('om_chat.core');
goog.require('cljs.core');
goog.require('om_chat.utils');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om_chat.chat');
goog.require('cljs_http.client');
goog.require('om_chat.registry');
goog.require('domina.xpath');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('domina.xpath');
goog.require('cljs_http.client');
goog.require('domina');
goog.require('domina');
goog.require('om_chat.registry');
goog.require('om.dom');
goog.require('om_chat.chat');
goog.require('om_chat.utils');
goog.require('cljs.core.async');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
om_chat.core.component_missing = (function component_missing(class$){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[(function (app,owner){if(typeof om_chat.core.t9565 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_chat.core.t9565 = (function (owner,app,class$,component_missing,meta9566){
this.owner = owner;
this.app = app;
this.class$ = class$;
this.component_missing = component_missing;
this.meta9566 = meta9566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_chat.core.t9565.cljs$lang$type = true;
om_chat.core.t9565.cljs$lang$ctorStr = "om-chat.core/t9565";
om_chat.core.t9565.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-chat.core/t9565");
});
om_chat.core.t9565.prototype.om$core$IRender$ = true;
om_chat.core.t9565.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,[cljs.core.str("Component missing: "),cljs.core.str(self__.class$)].join('')));
});
om_chat.core.t9565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9567){var self__ = this;
var _9567__$1 = this;return self__.meta9566;
});
om_chat.core.t9565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9567,meta9566__$1){var self__ = this;
var _9567__$1 = this;return (new om_chat.core.t9565(self__.owner,self__.app,self__.class$,self__.component_missing,meta9566__$1));
});
om_chat.core.__GT_t9565 = (function __GT_t9565(owner__$1,app__$1,class$__$1,component_missing__$1,meta9566){return (new om_chat.core.t9565(owner__$1,app__$1,class$__$1,component_missing__$1,meta9566));
});
}
return (new om_chat.core.t9565(owner,app,class$,component_missing,null));
}),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)],null));
});
om_chat.core.components = domina.xpath.xpath.call(null,"//*[@component-class]");
var seq__9568_9572 = cljs.core.seq.call(null,domina.nodes.call(null,om_chat.core.components));var chunk__9569_9573 = null;var count__9570_9574 = 0;var i__9571_9575 = 0;while(true){
if((i__9571_9575 < count__9570_9574))
{var c_9576 = cljs.core._nth.call(null,chunk__9569_9573,i__9571_9575);var class_9577 = domina.attr.call(null,c_9576,new cljs.core.Keyword(null,"component-class","component-class",3392232474));var class_main_9578 = om_chat.utils.or_else.call(null,om_chat.registry.find_component.call(null,class_9577),om_chat.core.component_missing.call(null,class_9577));cljs.core.prn.call(null,"Attaching ",class_9577," to ",c_9576);
om.core.root.call(null,class_main_9578.call(null,0),class_main_9578.call(null,1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),c_9576], null));
{
var G__9579 = seq__9568_9572;
var G__9580 = chunk__9569_9573;
var G__9581 = count__9570_9574;
var G__9582 = (i__9571_9575 + 1);
seq__9568_9572 = G__9579;
chunk__9569_9573 = G__9580;
count__9570_9574 = G__9581;
i__9571_9575 = G__9582;
continue;
}
} else
{var temp__4092__auto___9583 = cljs.core.seq.call(null,seq__9568_9572);if(temp__4092__auto___9583)
{var seq__9568_9584__$1 = temp__4092__auto___9583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9568_9584__$1))
{var c__4191__auto___9585 = cljs.core.chunk_first.call(null,seq__9568_9584__$1);{
var G__9586 = cljs.core.chunk_rest.call(null,seq__9568_9584__$1);
var G__9587 = c__4191__auto___9585;
var G__9588 = cljs.core.count.call(null,c__4191__auto___9585);
var G__9589 = 0;
seq__9568_9572 = G__9586;
chunk__9569_9573 = G__9587;
count__9570_9574 = G__9588;
i__9571_9575 = G__9589;
continue;
}
} else
{var c_9590 = cljs.core.first.call(null,seq__9568_9584__$1);var class_9591 = domina.attr.call(null,c_9590,new cljs.core.Keyword(null,"component-class","component-class",3392232474));var class_main_9592 = om_chat.utils.or_else.call(null,om_chat.registry.find_component.call(null,class_9591),om_chat.core.component_missing.call(null,class_9591));cljs.core.prn.call(null,"Attaching ",class_9591," to ",c_9590);
om.core.root.call(null,class_main_9592.call(null,0),class_main_9592.call(null,1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),c_9590], null));
{
var G__9593 = cljs.core.next.call(null,seq__9568_9584__$1);
var G__9594 = null;
var G__9595 = 0;
var G__9596 = 0;
seq__9568_9572 = G__9593;
chunk__9569_9573 = G__9594;
count__9570_9574 = G__9595;
i__9571_9575 = G__9596;
continue;
}
}
} else
{}
}
break;
}

//# sourceMappingURL=core.js.map