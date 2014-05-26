// Compiled by ClojureScript 0.0-2173
goog.provide('om_chat.utils');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('cljs.reader');
goog.require('cljs.reader');
om_chat.utils.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
om_chat.utils.find_first = (function find_first(pred,coll){while(true){
if(cljs.core.seq.call(null,coll))
{var item = cljs.core.first.call(null,coll);if(cljs.core.truth_(pred.call(null,item)))
{return item;
} else
{{
var G__9598 = pred;
var G__9599 = cljs.core.rest.call(null,coll);
pred = G__9598;
coll = G__9599;
continue;
}
}
} else
{return null;
}
break;
}
});
om_chat.utils.or_else = (function or_else(val,default$){if(cljs.core.truth_(val))
{return val;
} else
{return default$;
}
});

//# sourceMappingURL=utils.js.map