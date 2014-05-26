// Compiled by ClojureScript 0.0-2173
goog.provide('om_chat.chat');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs_http.client');
goog.require('om_chat.registry');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('cljs_http.client');
goog.require('om_chat.registry');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
om_chat.chat.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"messages","messages",551810238),cljs.core.PersistentVector.EMPTY], null));
om_chat.chat.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
om_chat.chat.json_xhr = (function json_xhr(p__9611){var map__9613 = p__9611;var map__9613__$1 = ((cljs.core.seq_QMARK_.call(null,map__9613))?cljs.core.apply.call(null,cljs.core.hash_map,map__9613):map__9613);var on_complete = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__9613__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,(function (e){return on_complete.call(null,cljs.core.doall.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(xhr.getResponseText()),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)));
}));
return xhr.send(url,om_chat.chat.meths.call(null,method),(cljs.core.truth_(data)?JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,data)):null),{"Content-Type": "application/json"});
});
om_chat.chat.refresh_messages = (function refresh_messages(app,first){return om_chat.chat.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),(cljs.core.truth_(first)?"msg":"msg_long"),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (e){return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"messages","messages",551810238),(function (_){return e;
}),refresh_messages.call(null,app,false));
})], null));
});
om_chat.chat.send_message = (function send_message(msg){return om_chat.chat.json_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),"msg",new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),msg], null),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (){return cljs.core.List.EMPTY;
})], null));
});
om_chat.chat.component_main = (function component_main(app,owner){if(typeof om_chat.chat.t9618 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_chat.chat.t9618 = (function (owner,app,component_main,meta9619){
this.owner = owner;
this.app = app;
this.component_main = component_main;
this.meta9619 = meta9619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_chat.chat.t9618.cljs$lang$type = true;
om_chat.chat.t9618.cljs$lang$ctorStr = "om-chat.chat/t9618";
om_chat.chat.t9618.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"om-chat.chat/t9618");
});
om_chat.chat.t9618.prototype.om$core$IRenderState$ = true;
om_chat.chat.t9618.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Messages!"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,(function (p1__9614_SHARP_){return React.DOM.li(null,p1__9614_SHARP_);
}),new cljs.core.Keyword(null,"messages","messages",551810238).cljs$core$IFn$_invoke$arity$1(self__.app))),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){var val = e.target.value;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"msg","msg",1014012659),val);
}), "value": new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(state), "type": "text"}),React.DOM.button({"onClick": (function (e){om_chat.chat.send_message.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"msg","msg",1014012659)));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"msg","msg",1014012659),"");
})},"Send Message")));
});
om_chat.chat.t9618.prototype.om$core$IWillMount$ = true;
om_chat.chat.t9618.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om_chat.chat.refresh_messages.call(null,self__.app,true);
});
om_chat.chat.t9618.prototype.om$core$IInitState$ = true;
om_chat.chat.t9618.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),""], null);
});
om_chat.chat.t9618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9620){var self__ = this;
var _9620__$1 = this;return self__.meta9619;
});
om_chat.chat.t9618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9620,meta9619__$1){var self__ = this;
var _9620__$1 = this;return (new om_chat.chat.t9618(self__.owner,self__.app,self__.component_main,meta9619__$1));
});
om_chat.chat.__GT_t9618 = (function __GT_t9618(owner__$1,app__$1,component_main__$1,meta9619){return (new om_chat.chat.t9618(owner__$1,app__$1,component_main__$1,meta9619));
});
}
return (new om_chat.chat.t9618(owner,app,component_main,null));
});
om_chat.registry.register_component.call(null,"om-chat.chat",(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[om_chat.chat.component_main,om_chat.chat.app_state],null)));

//# sourceMappingURL=chat.js.map