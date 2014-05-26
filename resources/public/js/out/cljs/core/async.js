// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11098 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11098 = (function (f,fn_handler,meta11099){
this.f = f;
this.fn_handler = fn_handler;
this.meta11099 = meta11099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11098.cljs$lang$type = true;
cljs.core.async.t11098.cljs$lang$ctorStr = "cljs.core.async/t11098";
cljs.core.async.t11098.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11098");
});
cljs.core.async.t11098.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11100){var self__ = this;
var _11100__$1 = this;return self__.meta11099;
});
cljs.core.async.t11098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11100,meta11099__$1){var self__ = this;
var _11100__$1 = this;return (new cljs.core.async.t11098(self__.f,self__.fn_handler,meta11099__$1));
});
cljs.core.async.__GT_t11098 = (function __GT_t11098(f__$1,fn_handler__$1,meta11099){return (new cljs.core.async.t11098(f__$1,fn_handler__$1,meta11099));
});
}
return (new cljs.core.async.t11098(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11102 = buff;if(G__11102)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11102.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11102.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11102);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11102);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11103 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11103);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11103);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11104 = n;var x_11105 = 0;while(true){
if((x_11105 < n__4291__auto___11104))
{(a[x_11105] = 0);
{
var G__11106 = (x_11105 + 1);
x_11105 = G__11106;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11107 = (i + 1);
i = G__11107;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11111 = (function (flag,alt_flag,meta11112){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11112 = meta11112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11111.cljs$lang$type = true;
cljs.core.async.t11111.cljs$lang$ctorStr = "cljs.core.async/t11111";
cljs.core.async.t11111.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11111");
});
cljs.core.async.t11111.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11113){var self__ = this;
var _11113__$1 = this;return self__.meta11112;
});
cljs.core.async.t11111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11113,meta11112__$1){var self__ = this;
var _11113__$1 = this;return (new cljs.core.async.t11111(self__.flag,self__.alt_flag,meta11112__$1));
});
cljs.core.async.__GT_t11111 = (function __GT_t11111(flag__$1,alt_flag__$1,meta11112){return (new cljs.core.async.t11111(flag__$1,alt_flag__$1,meta11112));
});
}
return (new cljs.core.async.t11111(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11117 = (function (cb,flag,alt_handler,meta11118){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11118 = meta11118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11117.cljs$lang$type = true;
cljs.core.async.t11117.cljs$lang$ctorStr = "cljs.core.async/t11117";
cljs.core.async.t11117.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11117");
});
cljs.core.async.t11117.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11119){var self__ = this;
var _11119__$1 = this;return self__.meta11118;
});
cljs.core.async.t11117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11119,meta11118__$1){var self__ = this;
var _11119__$1 = this;return (new cljs.core.async.t11117(self__.cb,self__.flag,self__.alt_handler,meta11118__$1));
});
cljs.core.async.__GT_t11117 = (function __GT_t11117(cb__$1,flag__$1,alt_handler__$1,meta11118){return (new cljs.core.async.t11117(cb__$1,flag__$1,alt_handler__$1,meta11118));
});
}
return (new cljs.core.async.t11117(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11120_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11120_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11121_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11121_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11122 = (i + 1);
i = G__11122;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11123){var map__11125 = p__11123;var map__11125__$1 = ((cljs.core.seq_QMARK_.call(null,map__11125))?cljs.core.apply.call(null,cljs.core.hash_map,map__11125):map__11125);var opts = map__11125__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11123 = null;if (arguments.length > 1) {
  p__11123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11123);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11126){
var ports = cljs.core.first(arglist__11126);
var p__11123 = cljs.core.rest(arglist__11126);
return alts_BANG___delegate(ports,p__11123);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11134 = (function (ch,f,map_LT_,meta11135){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11135 = meta11135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11134.cljs$lang$type = true;
cljs.core.async.t11134.cljs$lang$ctorStr = "cljs.core.async/t11134";
cljs.core.async.t11134.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11134");
});
cljs.core.async.t11134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11137 = (function (fn1,_,meta11135,ch,f,map_LT_,meta11138){
this.fn1 = fn1;
this._ = _;
this.meta11135 = meta11135;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11138 = meta11138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11137.cljs$lang$type = true;
cljs.core.async.t11137.cljs$lang$ctorStr = "cljs.core.async/t11137";
cljs.core.async.t11137.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11137");
});
cljs.core.async.t11137.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11137.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11127_SHARP_){return f1.call(null,(((p1__11127_SHARP_ == null))?null:self__.f.call(null,p1__11127_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11139){var self__ = this;
var _11139__$1 = this;return self__.meta11138;
});
cljs.core.async.t11137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11139,meta11138__$1){var self__ = this;
var _11139__$1 = this;return (new cljs.core.async.t11137(self__.fn1,self__._,self__.meta11135,self__.ch,self__.f,self__.map_LT_,meta11138__$1));
});
cljs.core.async.__GT_t11137 = (function __GT_t11137(fn1__$1,___$2,meta11135__$1,ch__$2,f__$2,map_LT___$2,meta11138){return (new cljs.core.async.t11137(fn1__$1,___$2,meta11135__$1,ch__$2,f__$2,map_LT___$2,meta11138));
});
}
return (new cljs.core.async.t11137(fn1,___$1,self__.meta11135,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11134.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11136){var self__ = this;
var _11136__$1 = this;return self__.meta11135;
});
cljs.core.async.t11134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11136,meta11135__$1){var self__ = this;
var _11136__$1 = this;return (new cljs.core.async.t11134(self__.ch,self__.f,self__.map_LT_,meta11135__$1));
});
cljs.core.async.__GT_t11134 = (function __GT_t11134(ch__$1,f__$1,map_LT___$1,meta11135){return (new cljs.core.async.t11134(ch__$1,f__$1,map_LT___$1,meta11135));
});
}
return (new cljs.core.async.t11134(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11143 = (function (ch,f,map_GT_,meta11144){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11144 = meta11144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11143.cljs$lang$type = true;
cljs.core.async.t11143.cljs$lang$ctorStr = "cljs.core.async/t11143";
cljs.core.async.t11143.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11143");
});
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11145){var self__ = this;
var _11145__$1 = this;return self__.meta11144;
});
cljs.core.async.t11143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11145,meta11144__$1){var self__ = this;
var _11145__$1 = this;return (new cljs.core.async.t11143(self__.ch,self__.f,self__.map_GT_,meta11144__$1));
});
cljs.core.async.__GT_t11143 = (function __GT_t11143(ch__$1,f__$1,map_GT___$1,meta11144){return (new cljs.core.async.t11143(ch__$1,f__$1,map_GT___$1,meta11144));
});
}
return (new cljs.core.async.t11143(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11149 = (function (ch,p,filter_GT_,meta11150){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11150 = meta11150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11149.cljs$lang$type = true;
cljs.core.async.t11149.cljs$lang$ctorStr = "cljs.core.async/t11149";
cljs.core.async.t11149.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11149");
});
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11151){var self__ = this;
var _11151__$1 = this;return self__.meta11150;
});
cljs.core.async.t11149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11151,meta11150__$1){var self__ = this;
var _11151__$1 = this;return (new cljs.core.async.t11149(self__.ch,self__.p,self__.filter_GT_,meta11150__$1));
});
cljs.core.async.__GT_t11149 = (function __GT_t11149(ch__$1,p__$1,filter_GT___$1,meta11150){return (new cljs.core.async.t11149(ch__$1,p__$1,filter_GT___$1,meta11150));
});
}
return (new cljs.core.async.t11149(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6207__auto___11234 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_11213){var state_val_11214 = (state_11213[1]);if((state_val_11214 === 1))
{var state_11213__$1 = state_11213;var statearr_11215_11235 = state_11213__$1;(statearr_11215_11235[2] = null);
(statearr_11215_11235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 2))
{var state_11213__$1 = state_11213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11213__$1,4,ch);
} else
{if((state_val_11214 === 3))
{var inst_11211 = (state_11213[2]);var state_11213__$1 = state_11213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11213__$1,inst_11211);
} else
{if((state_val_11214 === 4))
{var inst_11195 = (state_11213[7]);var inst_11195__$1 = (state_11213[2]);var inst_11196 = (inst_11195__$1 == null);var state_11213__$1 = (function (){var statearr_11216 = state_11213;(statearr_11216[7] = inst_11195__$1);
return statearr_11216;
})();if(cljs.core.truth_(inst_11196))
{var statearr_11217_11236 = state_11213__$1;(statearr_11217_11236[1] = 5);
} else
{var statearr_11218_11237 = state_11213__$1;(statearr_11218_11237[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 5))
{var inst_11198 = cljs.core.async.close_BANG_.call(null,out);var state_11213__$1 = state_11213;var statearr_11219_11238 = state_11213__$1;(statearr_11219_11238[2] = inst_11198);
(statearr_11219_11238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 6))
{var inst_11195 = (state_11213[7]);var inst_11200 = p.call(null,inst_11195);var state_11213__$1 = state_11213;if(cljs.core.truth_(inst_11200))
{var statearr_11220_11239 = state_11213__$1;(statearr_11220_11239[1] = 8);
} else
{var statearr_11221_11240 = state_11213__$1;(statearr_11221_11240[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 7))
{var inst_11209 = (state_11213[2]);var state_11213__$1 = state_11213;var statearr_11222_11241 = state_11213__$1;(statearr_11222_11241[2] = inst_11209);
(statearr_11222_11241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 8))
{var inst_11195 = (state_11213[7]);var state_11213__$1 = state_11213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11213__$1,11,out,inst_11195);
} else
{if((state_val_11214 === 9))
{var state_11213__$1 = state_11213;var statearr_11223_11242 = state_11213__$1;(statearr_11223_11242[2] = null);
(statearr_11223_11242[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 10))
{var inst_11206 = (state_11213[2]);var state_11213__$1 = (function (){var statearr_11224 = state_11213;(statearr_11224[8] = inst_11206);
return statearr_11224;
})();var statearr_11225_11243 = state_11213__$1;(statearr_11225_11243[2] = null);
(statearr_11225_11243[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11214 === 11))
{var inst_11203 = (state_11213[2]);var state_11213__$1 = state_11213;var statearr_11226_11244 = state_11213__$1;(statearr_11226_11244[2] = inst_11203);
(statearr_11226_11244[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_11230 = [null,null,null,null,null,null,null,null,null];(statearr_11230[0] = state_machine__6193__auto__);
(statearr_11230[1] = 1);
return statearr_11230;
});
var state_machine__6193__auto____1 = (function (state_11213){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_11213);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e11231){if((e11231 instanceof Object))
{var ex__6196__auto__ = e11231;var statearr_11232_11245 = state_11213;(statearr_11232_11245[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11246 = state_11213;
state_11213 = G__11246;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_11213){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_11213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_11233 = f__6208__auto__.call(null);(statearr_11233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___11234);
return statearr_11233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6207__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_11412){var state_val_11413 = (state_11412[1]);if((state_val_11413 === 1))
{var state_11412__$1 = state_11412;var statearr_11414_11455 = state_11412__$1;(statearr_11414_11455[2] = null);
(statearr_11414_11455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 2))
{var state_11412__$1 = state_11412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11412__$1,4,in$);
} else
{if((state_val_11413 === 3))
{var inst_11410 = (state_11412[2]);var state_11412__$1 = state_11412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11412__$1,inst_11410);
} else
{if((state_val_11413 === 4))
{var inst_11353 = (state_11412[7]);var inst_11353__$1 = (state_11412[2]);var inst_11354 = (inst_11353__$1 == null);var state_11412__$1 = (function (){var statearr_11415 = state_11412;(statearr_11415[7] = inst_11353__$1);
return statearr_11415;
})();if(cljs.core.truth_(inst_11354))
{var statearr_11416_11456 = state_11412__$1;(statearr_11416_11456[1] = 5);
} else
{var statearr_11417_11457 = state_11412__$1;(statearr_11417_11457[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 5))
{var inst_11356 = cljs.core.async.close_BANG_.call(null,out);var state_11412__$1 = state_11412;var statearr_11418_11458 = state_11412__$1;(statearr_11418_11458[2] = inst_11356);
(statearr_11418_11458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 6))
{var inst_11353 = (state_11412[7]);var inst_11362 = f.call(null,inst_11353);var inst_11363 = cljs.core.seq.call(null,inst_11362);var inst_11364 = inst_11363;var inst_11365 = null;var inst_11366 = 0;var inst_11367 = 0;var state_11412__$1 = (function (){var statearr_11419 = state_11412;(statearr_11419[8] = inst_11367);
(statearr_11419[9] = inst_11366);
(statearr_11419[10] = inst_11365);
(statearr_11419[11] = inst_11364);
return statearr_11419;
})();var statearr_11420_11459 = state_11412__$1;(statearr_11420_11459[2] = null);
(statearr_11420_11459[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 7))
{var inst_11408 = (state_11412[2]);var state_11412__$1 = state_11412;var statearr_11421_11460 = state_11412__$1;(statearr_11421_11460[2] = inst_11408);
(statearr_11421_11460[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 8))
{var inst_11367 = (state_11412[8]);var inst_11366 = (state_11412[9]);var inst_11369 = (inst_11367 < inst_11366);var inst_11370 = inst_11369;var state_11412__$1 = state_11412;if(cljs.core.truth_(inst_11370))
{var statearr_11422_11461 = state_11412__$1;(statearr_11422_11461[1] = 10);
} else
{var statearr_11423_11462 = state_11412__$1;(statearr_11423_11462[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 9))
{var inst_11400 = (state_11412[2]);var inst_11401 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11412__$1 = (function (){var statearr_11424 = state_11412;(statearr_11424[12] = inst_11400);
return statearr_11424;
})();if(cljs.core.truth_(inst_11401))
{var statearr_11425_11463 = state_11412__$1;(statearr_11425_11463[1] = 21);
} else
{var statearr_11426_11464 = state_11412__$1;(statearr_11426_11464[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 10))
{var inst_11367 = (state_11412[8]);var inst_11365 = (state_11412[10]);var inst_11372 = cljs.core._nth.call(null,inst_11365,inst_11367);var state_11412__$1 = state_11412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11412__$1,13,out,inst_11372);
} else
{if((state_val_11413 === 11))
{var inst_11378 = (state_11412[13]);var inst_11364 = (state_11412[11]);var inst_11378__$1 = cljs.core.seq.call(null,inst_11364);var state_11412__$1 = (function (){var statearr_11430 = state_11412;(statearr_11430[13] = inst_11378__$1);
return statearr_11430;
})();if(inst_11378__$1)
{var statearr_11431_11465 = state_11412__$1;(statearr_11431_11465[1] = 14);
} else
{var statearr_11432_11466 = state_11412__$1;(statearr_11432_11466[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 12))
{var inst_11398 = (state_11412[2]);var state_11412__$1 = state_11412;var statearr_11433_11467 = state_11412__$1;(statearr_11433_11467[2] = inst_11398);
(statearr_11433_11467[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 13))
{var inst_11367 = (state_11412[8]);var inst_11366 = (state_11412[9]);var inst_11365 = (state_11412[10]);var inst_11364 = (state_11412[11]);var inst_11374 = (state_11412[2]);var inst_11375 = (inst_11367 + 1);var tmp11427 = inst_11366;var tmp11428 = inst_11365;var tmp11429 = inst_11364;var inst_11364__$1 = tmp11429;var inst_11365__$1 = tmp11428;var inst_11366__$1 = tmp11427;var inst_11367__$1 = inst_11375;var state_11412__$1 = (function (){var statearr_11434 = state_11412;(statearr_11434[14] = inst_11374);
(statearr_11434[8] = inst_11367__$1);
(statearr_11434[9] = inst_11366__$1);
(statearr_11434[10] = inst_11365__$1);
(statearr_11434[11] = inst_11364__$1);
return statearr_11434;
})();var statearr_11435_11468 = state_11412__$1;(statearr_11435_11468[2] = null);
(statearr_11435_11468[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 14))
{var inst_11378 = (state_11412[13]);var inst_11380 = cljs.core.chunked_seq_QMARK_.call(null,inst_11378);var state_11412__$1 = state_11412;if(inst_11380)
{var statearr_11436_11469 = state_11412__$1;(statearr_11436_11469[1] = 17);
} else
{var statearr_11437_11470 = state_11412__$1;(statearr_11437_11470[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 15))
{var state_11412__$1 = state_11412;var statearr_11438_11471 = state_11412__$1;(statearr_11438_11471[2] = null);
(statearr_11438_11471[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 16))
{var inst_11396 = (state_11412[2]);var state_11412__$1 = state_11412;var statearr_11439_11472 = state_11412__$1;(statearr_11439_11472[2] = inst_11396);
(statearr_11439_11472[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 17))
{var inst_11378 = (state_11412[13]);var inst_11382 = cljs.core.chunk_first.call(null,inst_11378);var inst_11383 = cljs.core.chunk_rest.call(null,inst_11378);var inst_11384 = cljs.core.count.call(null,inst_11382);var inst_11364 = inst_11383;var inst_11365 = inst_11382;var inst_11366 = inst_11384;var inst_11367 = 0;var state_11412__$1 = (function (){var statearr_11440 = state_11412;(statearr_11440[8] = inst_11367);
(statearr_11440[9] = inst_11366);
(statearr_11440[10] = inst_11365);
(statearr_11440[11] = inst_11364);
return statearr_11440;
})();var statearr_11441_11473 = state_11412__$1;(statearr_11441_11473[2] = null);
(statearr_11441_11473[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 18))
{var inst_11378 = (state_11412[13]);var inst_11387 = cljs.core.first.call(null,inst_11378);var state_11412__$1 = state_11412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11412__$1,20,out,inst_11387);
} else
{if((state_val_11413 === 19))
{var inst_11393 = (state_11412[2]);var state_11412__$1 = state_11412;var statearr_11442_11474 = state_11412__$1;(statearr_11442_11474[2] = inst_11393);
(statearr_11442_11474[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 20))
{var inst_11378 = (state_11412[13]);var inst_11389 = (state_11412[2]);var inst_11390 = cljs.core.next.call(null,inst_11378);var inst_11364 = inst_11390;var inst_11365 = null;var inst_11366 = 0;var inst_11367 = 0;var state_11412__$1 = (function (){var statearr_11443 = state_11412;(statearr_11443[15] = inst_11389);
(statearr_11443[8] = inst_11367);
(statearr_11443[9] = inst_11366);
(statearr_11443[10] = inst_11365);
(statearr_11443[11] = inst_11364);
return statearr_11443;
})();var statearr_11444_11475 = state_11412__$1;(statearr_11444_11475[2] = null);
(statearr_11444_11475[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 21))
{var state_11412__$1 = state_11412;var statearr_11445_11476 = state_11412__$1;(statearr_11445_11476[2] = null);
(statearr_11445_11476[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 22))
{var state_11412__$1 = state_11412;var statearr_11446_11477 = state_11412__$1;(statearr_11446_11477[2] = null);
(statearr_11446_11477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11413 === 23))
{var inst_11406 = (state_11412[2]);var state_11412__$1 = state_11412;var statearr_11447_11478 = state_11412__$1;(statearr_11447_11478[2] = inst_11406);
(statearr_11447_11478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_11451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11451[0] = state_machine__6193__auto__);
(statearr_11451[1] = 1);
return statearr_11451;
});
var state_machine__6193__auto____1 = (function (state_11412){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_11412);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e11452){if((e11452 instanceof Object))
{var ex__6196__auto__ = e11452;var statearr_11453_11479 = state_11412;(statearr_11453_11479[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11480 = state_11412;
state_11412 = G__11480;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_11412){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_11412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_11454 = f__6208__auto__.call(null);(statearr_11454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto__);
return statearr_11454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return c__6207__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6207__auto___11575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_11551){var state_val_11552 = (state_11551[1]);if((state_val_11552 === 1))
{var state_11551__$1 = state_11551;var statearr_11553_11576 = state_11551__$1;(statearr_11553_11576[2] = null);
(statearr_11553_11576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 2))
{var state_11551__$1 = state_11551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11551__$1,4,from);
} else
{if((state_val_11552 === 3))
{var inst_11549 = (state_11551[2]);var state_11551__$1 = state_11551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11551__$1,inst_11549);
} else
{if((state_val_11552 === 4))
{var inst_11530 = (state_11551[7]);var inst_11530__$1 = (state_11551[2]);var inst_11531 = (inst_11530__$1 == null);var state_11551__$1 = (function (){var statearr_11554 = state_11551;(statearr_11554[7] = inst_11530__$1);
return statearr_11554;
})();if(cljs.core.truth_(inst_11531))
{var statearr_11555_11577 = state_11551__$1;(statearr_11555_11577[1] = 5);
} else
{var statearr_11556_11578 = state_11551__$1;(statearr_11556_11578[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 5))
{var state_11551__$1 = state_11551;if(cljs.core.truth_(close_QMARK_))
{var statearr_11557_11579 = state_11551__$1;(statearr_11557_11579[1] = 8);
} else
{var statearr_11558_11580 = state_11551__$1;(statearr_11558_11580[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 6))
{var inst_11530 = (state_11551[7]);var state_11551__$1 = state_11551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11551__$1,11,to,inst_11530);
} else
{if((state_val_11552 === 7))
{var inst_11547 = (state_11551[2]);var state_11551__$1 = state_11551;var statearr_11559_11581 = state_11551__$1;(statearr_11559_11581[2] = inst_11547);
(statearr_11559_11581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 8))
{var inst_11534 = cljs.core.async.close_BANG_.call(null,to);var state_11551__$1 = state_11551;var statearr_11560_11582 = state_11551__$1;(statearr_11560_11582[2] = inst_11534);
(statearr_11560_11582[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 9))
{var state_11551__$1 = state_11551;var statearr_11561_11583 = state_11551__$1;(statearr_11561_11583[2] = null);
(statearr_11561_11583[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 10))
{var inst_11537 = (state_11551[2]);var state_11551__$1 = state_11551;var statearr_11562_11584 = state_11551__$1;(statearr_11562_11584[2] = inst_11537);
(statearr_11562_11584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 11))
{var inst_11540 = (state_11551[2]);var state_11551__$1 = state_11551;if(cljs.core.truth_(inst_11540))
{var statearr_11563_11585 = state_11551__$1;(statearr_11563_11585[1] = 12);
} else
{var statearr_11564_11586 = state_11551__$1;(statearr_11564_11586[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 12))
{var state_11551__$1 = state_11551;var statearr_11565_11587 = state_11551__$1;(statearr_11565_11587[2] = null);
(statearr_11565_11587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 13))
{var state_11551__$1 = state_11551;var statearr_11566_11588 = state_11551__$1;(statearr_11566_11588[2] = null);
(statearr_11566_11588[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11552 === 14))
{var inst_11545 = (state_11551[2]);var state_11551__$1 = state_11551;var statearr_11567_11589 = state_11551__$1;(statearr_11567_11589[2] = inst_11545);
(statearr_11567_11589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_11571 = [null,null,null,null,null,null,null,null];(statearr_11571[0] = state_machine__6193__auto__);
(statearr_11571[1] = 1);
return statearr_11571;
});
var state_machine__6193__auto____1 = (function (state_11551){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_11551);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e11572){if((e11572 instanceof Object))
{var ex__6196__auto__ = e11572;var statearr_11573_11590 = state_11551;(statearr_11573_11590[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11591 = state_11551;
state_11551 = G__11591;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_11551){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_11551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_11574 = f__6208__auto__.call(null);(statearr_11574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___11575);
return statearr_11574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6207__auto___11692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_11667){var state_val_11668 = (state_11667[1]);if((state_val_11668 === 1))
{var state_11667__$1 = state_11667;var statearr_11669_11693 = state_11667__$1;(statearr_11669_11693[2] = null);
(statearr_11669_11693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 2))
{var state_11667__$1 = state_11667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11667__$1,4,ch);
} else
{if((state_val_11668 === 3))
{var inst_11665 = (state_11667[2]);var state_11667__$1 = state_11667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11667__$1,inst_11665);
} else
{if((state_val_11668 === 4))
{var inst_11644 = (state_11667[7]);var inst_11644__$1 = (state_11667[2]);var inst_11645 = (inst_11644__$1 == null);var state_11667__$1 = (function (){var statearr_11670 = state_11667;(statearr_11670[7] = inst_11644__$1);
return statearr_11670;
})();if(cljs.core.truth_(inst_11645))
{var statearr_11671_11694 = state_11667__$1;(statearr_11671_11694[1] = 5);
} else
{var statearr_11672_11695 = state_11667__$1;(statearr_11672_11695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 5))
{var inst_11647 = cljs.core.async.close_BANG_.call(null,tc);var inst_11648 = cljs.core.async.close_BANG_.call(null,fc);var state_11667__$1 = (function (){var statearr_11673 = state_11667;(statearr_11673[8] = inst_11647);
return statearr_11673;
})();var statearr_11674_11696 = state_11667__$1;(statearr_11674_11696[2] = inst_11648);
(statearr_11674_11696[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 6))
{var inst_11644 = (state_11667[7]);var inst_11650 = p.call(null,inst_11644);var state_11667__$1 = state_11667;if(cljs.core.truth_(inst_11650))
{var statearr_11675_11697 = state_11667__$1;(statearr_11675_11697[1] = 9);
} else
{var statearr_11676_11698 = state_11667__$1;(statearr_11676_11698[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 7))
{var inst_11663 = (state_11667[2]);var state_11667__$1 = state_11667;var statearr_11677_11699 = state_11667__$1;(statearr_11677_11699[2] = inst_11663);
(statearr_11677_11699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 8))
{var inst_11656 = (state_11667[2]);var state_11667__$1 = state_11667;if(cljs.core.truth_(inst_11656))
{var statearr_11678_11700 = state_11667__$1;(statearr_11678_11700[1] = 12);
} else
{var statearr_11679_11701 = state_11667__$1;(statearr_11679_11701[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 9))
{var state_11667__$1 = state_11667;var statearr_11680_11702 = state_11667__$1;(statearr_11680_11702[2] = tc);
(statearr_11680_11702[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 10))
{var state_11667__$1 = state_11667;var statearr_11681_11703 = state_11667__$1;(statearr_11681_11703[2] = fc);
(statearr_11681_11703[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 11))
{var inst_11644 = (state_11667[7]);var inst_11654 = (state_11667[2]);var state_11667__$1 = state_11667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11667__$1,8,inst_11654,inst_11644);
} else
{if((state_val_11668 === 12))
{var state_11667__$1 = state_11667;var statearr_11682_11704 = state_11667__$1;(statearr_11682_11704[2] = null);
(statearr_11682_11704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 13))
{var state_11667__$1 = state_11667;var statearr_11683_11705 = state_11667__$1;(statearr_11683_11705[2] = null);
(statearr_11683_11705[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11668 === 14))
{var inst_11661 = (state_11667[2]);var state_11667__$1 = state_11667;var statearr_11684_11706 = state_11667__$1;(statearr_11684_11706[2] = inst_11661);
(statearr_11684_11706[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_11688 = [null,null,null,null,null,null,null,null,null];(statearr_11688[0] = state_machine__6193__auto__);
(statearr_11688[1] = 1);
return statearr_11688;
});
var state_machine__6193__auto____1 = (function (state_11667){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_11667);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e11689){if((e11689 instanceof Object))
{var ex__6196__auto__ = e11689;var statearr_11690_11707 = state_11667;(statearr_11690_11707[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11708 = state_11667;
state_11667 = G__11708;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_11667){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_11667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_11691 = f__6208__auto__.call(null);(statearr_11691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___11692);
return statearr_11691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6207__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_11755){var state_val_11756 = (state_11755[1]);if((state_val_11756 === 7))
{var inst_11751 = (state_11755[2]);var state_11755__$1 = state_11755;var statearr_11757_11773 = state_11755__$1;(statearr_11757_11773[2] = inst_11751);
(statearr_11757_11773[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 6))
{var inst_11741 = (state_11755[7]);var inst_11744 = (state_11755[8]);var inst_11748 = f.call(null,inst_11741,inst_11744);var inst_11741__$1 = inst_11748;var state_11755__$1 = (function (){var statearr_11758 = state_11755;(statearr_11758[7] = inst_11741__$1);
return statearr_11758;
})();var statearr_11759_11774 = state_11755__$1;(statearr_11759_11774[2] = null);
(statearr_11759_11774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 5))
{var inst_11741 = (state_11755[7]);var state_11755__$1 = state_11755;var statearr_11760_11775 = state_11755__$1;(statearr_11760_11775[2] = inst_11741);
(statearr_11760_11775[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 4))
{var inst_11744 = (state_11755[8]);var inst_11744__$1 = (state_11755[2]);var inst_11745 = (inst_11744__$1 == null);var state_11755__$1 = (function (){var statearr_11761 = state_11755;(statearr_11761[8] = inst_11744__$1);
return statearr_11761;
})();if(cljs.core.truth_(inst_11745))
{var statearr_11762_11776 = state_11755__$1;(statearr_11762_11776[1] = 5);
} else
{var statearr_11763_11777 = state_11755__$1;(statearr_11763_11777[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11756 === 3))
{var inst_11753 = (state_11755[2]);var state_11755__$1 = state_11755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11755__$1,inst_11753);
} else
{if((state_val_11756 === 2))
{var state_11755__$1 = state_11755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11755__$1,4,ch);
} else
{if((state_val_11756 === 1))
{var inst_11741 = init;var state_11755__$1 = (function (){var statearr_11764 = state_11755;(statearr_11764[7] = inst_11741);
return statearr_11764;
})();var statearr_11765_11778 = state_11755__$1;(statearr_11765_11778[2] = null);
(statearr_11765_11778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_11769 = [null,null,null,null,null,null,null,null,null];(statearr_11769[0] = state_machine__6193__auto__);
(statearr_11769[1] = 1);
return statearr_11769;
});
var state_machine__6193__auto____1 = (function (state_11755){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_11755);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e11770){if((e11770 instanceof Object))
{var ex__6196__auto__ = e11770;var statearr_11771_11779 = state_11755;(statearr_11771_11779[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11780 = state_11755;
state_11755 = G__11780;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_11755){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_11755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_11772 = f__6208__auto__.call(null);(statearr_11772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto__);
return statearr_11772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return c__6207__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6207__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_11854){var state_val_11855 = (state_11854[1]);if((state_val_11855 === 1))
{var inst_11830 = cljs.core.seq.call(null,coll);var inst_11831 = inst_11830;var state_11854__$1 = (function (){var statearr_11856 = state_11854;(statearr_11856[7] = inst_11831);
return statearr_11856;
})();var statearr_11857_11879 = state_11854__$1;(statearr_11857_11879[2] = null);
(statearr_11857_11879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 2))
{var inst_11831 = (state_11854[7]);var state_11854__$1 = state_11854;if(cljs.core.truth_(inst_11831))
{var statearr_11858_11880 = state_11854__$1;(statearr_11858_11880[1] = 4);
} else
{var statearr_11859_11881 = state_11854__$1;(statearr_11859_11881[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 3))
{var inst_11852 = (state_11854[2]);var state_11854__$1 = state_11854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11854__$1,inst_11852);
} else
{if((state_val_11855 === 4))
{var inst_11831 = (state_11854[7]);var inst_11834 = cljs.core.first.call(null,inst_11831);var state_11854__$1 = state_11854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11854__$1,7,ch,inst_11834);
} else
{if((state_val_11855 === 5))
{var inst_11831 = (state_11854[7]);var state_11854__$1 = state_11854;var statearr_11860_11882 = state_11854__$1;(statearr_11860_11882[2] = inst_11831);
(statearr_11860_11882[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 6))
{var inst_11839 = (state_11854[2]);var state_11854__$1 = state_11854;if(cljs.core.truth_(inst_11839))
{var statearr_11861_11883 = state_11854__$1;(statearr_11861_11883[1] = 8);
} else
{var statearr_11862_11884 = state_11854__$1;(statearr_11862_11884[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 7))
{var inst_11836 = (state_11854[2]);var state_11854__$1 = state_11854;var statearr_11863_11885 = state_11854__$1;(statearr_11863_11885[2] = inst_11836);
(statearr_11863_11885[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 8))
{var inst_11831 = (state_11854[7]);var inst_11841 = cljs.core.next.call(null,inst_11831);var inst_11831__$1 = inst_11841;var state_11854__$1 = (function (){var statearr_11864 = state_11854;(statearr_11864[7] = inst_11831__$1);
return statearr_11864;
})();var statearr_11865_11886 = state_11854__$1;(statearr_11865_11886[2] = null);
(statearr_11865_11886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 9))
{var state_11854__$1 = state_11854;if(cljs.core.truth_(close_QMARK_))
{var statearr_11866_11887 = state_11854__$1;(statearr_11866_11887[1] = 11);
} else
{var statearr_11867_11888 = state_11854__$1;(statearr_11867_11888[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 10))
{var inst_11850 = (state_11854[2]);var state_11854__$1 = state_11854;var statearr_11868_11889 = state_11854__$1;(statearr_11868_11889[2] = inst_11850);
(statearr_11868_11889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 11))
{var inst_11845 = cljs.core.async.close_BANG_.call(null,ch);var state_11854__$1 = state_11854;var statearr_11869_11890 = state_11854__$1;(statearr_11869_11890[2] = inst_11845);
(statearr_11869_11890[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 12))
{var state_11854__$1 = state_11854;var statearr_11870_11891 = state_11854__$1;(statearr_11870_11891[2] = null);
(statearr_11870_11891[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11855 === 13))
{var inst_11848 = (state_11854[2]);var state_11854__$1 = state_11854;var statearr_11871_11892 = state_11854__$1;(statearr_11871_11892[2] = inst_11848);
(statearr_11871_11892[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_11875 = [null,null,null,null,null,null,null,null];(statearr_11875[0] = state_machine__6193__auto__);
(statearr_11875[1] = 1);
return statearr_11875;
});
var state_machine__6193__auto____1 = (function (state_11854){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_11854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e11876){if((e11876 instanceof Object))
{var ex__6196__auto__ = e11876;var statearr_11877_11893 = state_11854;(statearr_11877_11893[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11854);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11894 = state_11854;
state_11854 = G__11894;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_11854){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_11854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_11878 = f__6208__auto__.call(null);(statearr_11878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto__);
return statearr_11878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return c__6207__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11896 = {};return obj11896;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11898 = {};return obj11898;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12120 = (function (cs,ch,mult,meta12121){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12121 = meta12121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12120.cljs$lang$type = true;
cljs.core.async.t12120.cljs$lang$ctorStr = "cljs.core.async/t12120";
cljs.core.async.t12120.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12120");
});})(cs))
;
cljs.core.async.t12120.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12120.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12120.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12120.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12120.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12122){var self__ = this;
var _12122__$1 = this;return self__.meta12121;
});})(cs))
;
cljs.core.async.t12120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12122,meta12121__$1){var self__ = this;
var _12122__$1 = this;return (new cljs.core.async.t12120(self__.cs,self__.ch,self__.mult,meta12121__$1));
});})(cs))
;
cljs.core.async.__GT_t12120 = ((function (cs){
return (function __GT_t12120(cs__$1,ch__$1,mult__$1,meta12121){return (new cljs.core.async.t12120(cs__$1,ch__$1,mult__$1,meta12121));
});})(cs))
;
}
return (new cljs.core.async.t12120(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6207__auto___12341 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_12253){var state_val_12254 = (state_12253[1]);if((state_val_12254 === 32))
{var inst_12196 = (state_12253[7]);var inst_12193 = (state_12253[8]);var inst_12195 = (state_12253[9]);var inst_12194 = (state_12253[10]);var inst_12208 = (state_12253[2]);var inst_12209 = (inst_12196 + 1);var tmp12255 = inst_12193;var tmp12256 = inst_12195;var tmp12257 = inst_12194;var inst_12193__$1 = tmp12255;var inst_12194__$1 = tmp12257;var inst_12195__$1 = tmp12256;var inst_12196__$1 = inst_12209;var state_12253__$1 = (function (){var statearr_12258 = state_12253;(statearr_12258[11] = inst_12208);
(statearr_12258[7] = inst_12196__$1);
(statearr_12258[8] = inst_12193__$1);
(statearr_12258[9] = inst_12195__$1);
(statearr_12258[10] = inst_12194__$1);
return statearr_12258;
})();var statearr_12259_12342 = state_12253__$1;(statearr_12259_12342[2] = null);
(statearr_12259_12342[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 1))
{var state_12253__$1 = state_12253;var statearr_12260_12343 = state_12253__$1;(statearr_12260_12343[2] = null);
(statearr_12260_12343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 33))
{var inst_12212 = (state_12253[12]);var inst_12214 = cljs.core.chunked_seq_QMARK_.call(null,inst_12212);var state_12253__$1 = state_12253;if(inst_12214)
{var statearr_12261_12344 = state_12253__$1;(statearr_12261_12344[1] = 36);
} else
{var statearr_12262_12345 = state_12253__$1;(statearr_12262_12345[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 2))
{var state_12253__$1 = state_12253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12253__$1,4,ch);
} else
{if((state_val_12254 === 34))
{var state_12253__$1 = state_12253;var statearr_12263_12346 = state_12253__$1;(statearr_12263_12346[2] = null);
(statearr_12263_12346[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 3))
{var inst_12251 = (state_12253[2]);var state_12253__$1 = state_12253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12253__$1,inst_12251);
} else
{if((state_val_12254 === 35))
{var inst_12235 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12264_12347 = state_12253__$1;(statearr_12264_12347[2] = inst_12235);
(statearr_12264_12347[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 4))
{var inst_12125 = (state_12253[13]);var inst_12125__$1 = (state_12253[2]);var inst_12126 = (inst_12125__$1 == null);var state_12253__$1 = (function (){var statearr_12265 = state_12253;(statearr_12265[13] = inst_12125__$1);
return statearr_12265;
})();if(cljs.core.truth_(inst_12126))
{var statearr_12266_12348 = state_12253__$1;(statearr_12266_12348[1] = 5);
} else
{var statearr_12267_12349 = state_12253__$1;(statearr_12267_12349[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 36))
{var inst_12212 = (state_12253[12]);var inst_12216 = cljs.core.chunk_first.call(null,inst_12212);var inst_12217 = cljs.core.chunk_rest.call(null,inst_12212);var inst_12218 = cljs.core.count.call(null,inst_12216);var inst_12193 = inst_12217;var inst_12194 = inst_12216;var inst_12195 = inst_12218;var inst_12196 = 0;var state_12253__$1 = (function (){var statearr_12268 = state_12253;(statearr_12268[7] = inst_12196);
(statearr_12268[8] = inst_12193);
(statearr_12268[9] = inst_12195);
(statearr_12268[10] = inst_12194);
return statearr_12268;
})();var statearr_12269_12350 = state_12253__$1;(statearr_12269_12350[2] = null);
(statearr_12269_12350[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 5))
{var inst_12132 = cljs.core.deref.call(null,cs);var inst_12133 = cljs.core.seq.call(null,inst_12132);var inst_12134 = inst_12133;var inst_12135 = null;var inst_12136 = 0;var inst_12137 = 0;var state_12253__$1 = (function (){var statearr_12270 = state_12253;(statearr_12270[14] = inst_12137);
(statearr_12270[15] = inst_12136);
(statearr_12270[16] = inst_12135);
(statearr_12270[17] = inst_12134);
return statearr_12270;
})();var statearr_12271_12351 = state_12253__$1;(statearr_12271_12351[2] = null);
(statearr_12271_12351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 37))
{var inst_12221 = (state_12253[18]);var inst_12212 = (state_12253[12]);var inst_12125 = (state_12253[13]);var inst_12221__$1 = cljs.core.first.call(null,inst_12212);var inst_12222 = cljs.core.async.put_BANG_.call(null,inst_12221__$1,inst_12125,done);var state_12253__$1 = (function (){var statearr_12272 = state_12253;(statearr_12272[18] = inst_12221__$1);
return statearr_12272;
})();if(cljs.core.truth_(inst_12222))
{var statearr_12273_12352 = state_12253__$1;(statearr_12273_12352[1] = 39);
} else
{var statearr_12274_12353 = state_12253__$1;(statearr_12274_12353[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 6))
{var inst_12185 = (state_12253[19]);var inst_12184 = cljs.core.deref.call(null,cs);var inst_12185__$1 = cljs.core.keys.call(null,inst_12184);var inst_12186 = cljs.core.count.call(null,inst_12185__$1);var inst_12187 = cljs.core.reset_BANG_.call(null,dctr,inst_12186);var inst_12192 = cljs.core.seq.call(null,inst_12185__$1);var inst_12193 = inst_12192;var inst_12194 = null;var inst_12195 = 0;var inst_12196 = 0;var state_12253__$1 = (function (){var statearr_12275 = state_12253;(statearr_12275[20] = inst_12187);
(statearr_12275[19] = inst_12185__$1);
(statearr_12275[7] = inst_12196);
(statearr_12275[8] = inst_12193);
(statearr_12275[9] = inst_12195);
(statearr_12275[10] = inst_12194);
return statearr_12275;
})();var statearr_12276_12354 = state_12253__$1;(statearr_12276_12354[2] = null);
(statearr_12276_12354[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 38))
{var inst_12232 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12277_12355 = state_12253__$1;(statearr_12277_12355[2] = inst_12232);
(statearr_12277_12355[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 7))
{var inst_12249 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12278_12356 = state_12253__$1;(statearr_12278_12356[2] = inst_12249);
(statearr_12278_12356[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 39))
{var state_12253__$1 = state_12253;var statearr_12279_12357 = state_12253__$1;(statearr_12279_12357[2] = null);
(statearr_12279_12357[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 8))
{var inst_12137 = (state_12253[14]);var inst_12136 = (state_12253[15]);var inst_12139 = (inst_12137 < inst_12136);var inst_12140 = inst_12139;var state_12253__$1 = state_12253;if(cljs.core.truth_(inst_12140))
{var statearr_12280_12358 = state_12253__$1;(statearr_12280_12358[1] = 10);
} else
{var statearr_12281_12359 = state_12253__$1;(statearr_12281_12359[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 40))
{var inst_12221 = (state_12253[18]);var inst_12225 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12226 = cljs.core.async.untap_STAR_.call(null,m,inst_12221);var state_12253__$1 = (function (){var statearr_12282 = state_12253;(statearr_12282[21] = inst_12225);
return statearr_12282;
})();var statearr_12283_12360 = state_12253__$1;(statearr_12283_12360[2] = inst_12226);
(statearr_12283_12360[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 9))
{var inst_12182 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12284_12361 = state_12253__$1;(statearr_12284_12361[2] = inst_12182);
(statearr_12284_12361[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 41))
{var inst_12212 = (state_12253[12]);var inst_12228 = (state_12253[2]);var inst_12229 = cljs.core.next.call(null,inst_12212);var inst_12193 = inst_12229;var inst_12194 = null;var inst_12195 = 0;var inst_12196 = 0;var state_12253__$1 = (function (){var statearr_12285 = state_12253;(statearr_12285[22] = inst_12228);
(statearr_12285[7] = inst_12196);
(statearr_12285[8] = inst_12193);
(statearr_12285[9] = inst_12195);
(statearr_12285[10] = inst_12194);
return statearr_12285;
})();var statearr_12286_12362 = state_12253__$1;(statearr_12286_12362[2] = null);
(statearr_12286_12362[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 10))
{var inst_12137 = (state_12253[14]);var inst_12135 = (state_12253[16]);var inst_12143 = cljs.core._nth.call(null,inst_12135,inst_12137);var inst_12144 = cljs.core.nth.call(null,inst_12143,0,null);var inst_12145 = cljs.core.nth.call(null,inst_12143,1,null);var state_12253__$1 = (function (){var statearr_12287 = state_12253;(statearr_12287[23] = inst_12144);
return statearr_12287;
})();if(cljs.core.truth_(inst_12145))
{var statearr_12288_12363 = state_12253__$1;(statearr_12288_12363[1] = 13);
} else
{var statearr_12289_12364 = state_12253__$1;(statearr_12289_12364[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 42))
{var state_12253__$1 = state_12253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12253__$1,45,dchan);
} else
{if((state_val_12254 === 11))
{var inst_12154 = (state_12253[24]);var inst_12134 = (state_12253[17]);var inst_12154__$1 = cljs.core.seq.call(null,inst_12134);var state_12253__$1 = (function (){var statearr_12290 = state_12253;(statearr_12290[24] = inst_12154__$1);
return statearr_12290;
})();if(inst_12154__$1)
{var statearr_12291_12365 = state_12253__$1;(statearr_12291_12365[1] = 16);
} else
{var statearr_12292_12366 = state_12253__$1;(statearr_12292_12366[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 43))
{var state_12253__$1 = state_12253;var statearr_12293_12367 = state_12253__$1;(statearr_12293_12367[2] = null);
(statearr_12293_12367[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 12))
{var inst_12180 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12294_12368 = state_12253__$1;(statearr_12294_12368[2] = inst_12180);
(statearr_12294_12368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 44))
{var inst_12246 = (state_12253[2]);var state_12253__$1 = (function (){var statearr_12295 = state_12253;(statearr_12295[25] = inst_12246);
return statearr_12295;
})();var statearr_12296_12369 = state_12253__$1;(statearr_12296_12369[2] = null);
(statearr_12296_12369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 13))
{var inst_12144 = (state_12253[23]);var inst_12147 = cljs.core.async.close_BANG_.call(null,inst_12144);var state_12253__$1 = state_12253;var statearr_12297_12370 = state_12253__$1;(statearr_12297_12370[2] = inst_12147);
(statearr_12297_12370[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 45))
{var inst_12243 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12301_12371 = state_12253__$1;(statearr_12301_12371[2] = inst_12243);
(statearr_12301_12371[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 14))
{var state_12253__$1 = state_12253;var statearr_12302_12372 = state_12253__$1;(statearr_12302_12372[2] = null);
(statearr_12302_12372[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 15))
{var inst_12137 = (state_12253[14]);var inst_12136 = (state_12253[15]);var inst_12135 = (state_12253[16]);var inst_12134 = (state_12253[17]);var inst_12150 = (state_12253[2]);var inst_12151 = (inst_12137 + 1);var tmp12298 = inst_12136;var tmp12299 = inst_12135;var tmp12300 = inst_12134;var inst_12134__$1 = tmp12300;var inst_12135__$1 = tmp12299;var inst_12136__$1 = tmp12298;var inst_12137__$1 = inst_12151;var state_12253__$1 = (function (){var statearr_12303 = state_12253;(statearr_12303[26] = inst_12150);
(statearr_12303[14] = inst_12137__$1);
(statearr_12303[15] = inst_12136__$1);
(statearr_12303[16] = inst_12135__$1);
(statearr_12303[17] = inst_12134__$1);
return statearr_12303;
})();var statearr_12304_12373 = state_12253__$1;(statearr_12304_12373[2] = null);
(statearr_12304_12373[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 16))
{var inst_12154 = (state_12253[24]);var inst_12156 = cljs.core.chunked_seq_QMARK_.call(null,inst_12154);var state_12253__$1 = state_12253;if(inst_12156)
{var statearr_12305_12374 = state_12253__$1;(statearr_12305_12374[1] = 19);
} else
{var statearr_12306_12375 = state_12253__$1;(statearr_12306_12375[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 17))
{var state_12253__$1 = state_12253;var statearr_12307_12376 = state_12253__$1;(statearr_12307_12376[2] = null);
(statearr_12307_12376[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 18))
{var inst_12178 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12308_12377 = state_12253__$1;(statearr_12308_12377[2] = inst_12178);
(statearr_12308_12377[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 19))
{var inst_12154 = (state_12253[24]);var inst_12158 = cljs.core.chunk_first.call(null,inst_12154);var inst_12159 = cljs.core.chunk_rest.call(null,inst_12154);var inst_12160 = cljs.core.count.call(null,inst_12158);var inst_12134 = inst_12159;var inst_12135 = inst_12158;var inst_12136 = inst_12160;var inst_12137 = 0;var state_12253__$1 = (function (){var statearr_12309 = state_12253;(statearr_12309[14] = inst_12137);
(statearr_12309[15] = inst_12136);
(statearr_12309[16] = inst_12135);
(statearr_12309[17] = inst_12134);
return statearr_12309;
})();var statearr_12310_12378 = state_12253__$1;(statearr_12310_12378[2] = null);
(statearr_12310_12378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 20))
{var inst_12154 = (state_12253[24]);var inst_12164 = cljs.core.first.call(null,inst_12154);var inst_12165 = cljs.core.nth.call(null,inst_12164,0,null);var inst_12166 = cljs.core.nth.call(null,inst_12164,1,null);var state_12253__$1 = (function (){var statearr_12311 = state_12253;(statearr_12311[27] = inst_12165);
return statearr_12311;
})();if(cljs.core.truth_(inst_12166))
{var statearr_12312_12379 = state_12253__$1;(statearr_12312_12379[1] = 22);
} else
{var statearr_12313_12380 = state_12253__$1;(statearr_12313_12380[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 21))
{var inst_12175 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12314_12381 = state_12253__$1;(statearr_12314_12381[2] = inst_12175);
(statearr_12314_12381[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 22))
{var inst_12165 = (state_12253[27]);var inst_12168 = cljs.core.async.close_BANG_.call(null,inst_12165);var state_12253__$1 = state_12253;var statearr_12315_12382 = state_12253__$1;(statearr_12315_12382[2] = inst_12168);
(statearr_12315_12382[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 23))
{var state_12253__$1 = state_12253;var statearr_12316_12383 = state_12253__$1;(statearr_12316_12383[2] = null);
(statearr_12316_12383[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 24))
{var inst_12154 = (state_12253[24]);var inst_12171 = (state_12253[2]);var inst_12172 = cljs.core.next.call(null,inst_12154);var inst_12134 = inst_12172;var inst_12135 = null;var inst_12136 = 0;var inst_12137 = 0;var state_12253__$1 = (function (){var statearr_12317 = state_12253;(statearr_12317[14] = inst_12137);
(statearr_12317[15] = inst_12136);
(statearr_12317[16] = inst_12135);
(statearr_12317[17] = inst_12134);
(statearr_12317[28] = inst_12171);
return statearr_12317;
})();var statearr_12318_12384 = state_12253__$1;(statearr_12318_12384[2] = null);
(statearr_12318_12384[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 25))
{var inst_12196 = (state_12253[7]);var inst_12195 = (state_12253[9]);var inst_12198 = (inst_12196 < inst_12195);var inst_12199 = inst_12198;var state_12253__$1 = state_12253;if(cljs.core.truth_(inst_12199))
{var statearr_12319_12385 = state_12253__$1;(statearr_12319_12385[1] = 27);
} else
{var statearr_12320_12386 = state_12253__$1;(statearr_12320_12386[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 26))
{var inst_12185 = (state_12253[19]);var inst_12239 = (state_12253[2]);var inst_12240 = cljs.core.seq.call(null,inst_12185);var state_12253__$1 = (function (){var statearr_12321 = state_12253;(statearr_12321[29] = inst_12239);
return statearr_12321;
})();if(inst_12240)
{var statearr_12322_12387 = state_12253__$1;(statearr_12322_12387[1] = 42);
} else
{var statearr_12323_12388 = state_12253__$1;(statearr_12323_12388[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 27))
{var inst_12196 = (state_12253[7]);var inst_12194 = (state_12253[10]);var inst_12125 = (state_12253[13]);var inst_12201 = (state_12253[30]);var inst_12201__$1 = cljs.core._nth.call(null,inst_12194,inst_12196);var inst_12202 = cljs.core.async.put_BANG_.call(null,inst_12201__$1,inst_12125,done);var state_12253__$1 = (function (){var statearr_12324 = state_12253;(statearr_12324[30] = inst_12201__$1);
return statearr_12324;
})();if(cljs.core.truth_(inst_12202))
{var statearr_12325_12389 = state_12253__$1;(statearr_12325_12389[1] = 30);
} else
{var statearr_12326_12390 = state_12253__$1;(statearr_12326_12390[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 28))
{var inst_12193 = (state_12253[8]);var inst_12212 = (state_12253[12]);var inst_12212__$1 = cljs.core.seq.call(null,inst_12193);var state_12253__$1 = (function (){var statearr_12327 = state_12253;(statearr_12327[12] = inst_12212__$1);
return statearr_12327;
})();if(inst_12212__$1)
{var statearr_12328_12391 = state_12253__$1;(statearr_12328_12391[1] = 33);
} else
{var statearr_12329_12392 = state_12253__$1;(statearr_12329_12392[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 29))
{var inst_12237 = (state_12253[2]);var state_12253__$1 = state_12253;var statearr_12330_12393 = state_12253__$1;(statearr_12330_12393[2] = inst_12237);
(statearr_12330_12393[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 30))
{var state_12253__$1 = state_12253;var statearr_12331_12394 = state_12253__$1;(statearr_12331_12394[2] = null);
(statearr_12331_12394[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12254 === 31))
{var inst_12201 = (state_12253[30]);var inst_12205 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12206 = cljs.core.async.untap_STAR_.call(null,m,inst_12201);var state_12253__$1 = (function (){var statearr_12332 = state_12253;(statearr_12332[31] = inst_12205);
return statearr_12332;
})();var statearr_12333_12395 = state_12253__$1;(statearr_12333_12395[2] = inst_12206);
(statearr_12333_12395[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_12337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12337[0] = state_machine__6193__auto__);
(statearr_12337[1] = 1);
return statearr_12337;
});
var state_machine__6193__auto____1 = (function (state_12253){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_12253);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e12338){if((e12338 instanceof Object))
{var ex__6196__auto__ = e12338;var statearr_12339_12396 = state_12253;(statearr_12339_12396[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12253);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12397 = state_12253;
state_12253 = G__12397;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_12253){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_12253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_12340 = f__6208__auto__.call(null);(statearr_12340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___12341);
return statearr_12340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12399 = {};return obj12399;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12519 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12520){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12520 = meta12520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12519.cljs$lang$type = true;
cljs.core.async.t12519.cljs$lang$ctorStr = "cljs.core.async/t12519";
cljs.core.async.t12519.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12519");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12519.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12521){var self__ = this;
var _12521__$1 = this;return self__.meta12520;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12521,meta12520__$1){var self__ = this;
var _12521__$1 = this;return (new cljs.core.async.t12519(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12520__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12519 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12519(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12520){return (new cljs.core.async.t12519(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12520));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12519(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6207__auto___12638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_12591){var state_val_12592 = (state_12591[1]);if((state_val_12592 === 1))
{var inst_12525 = (state_12591[7]);var inst_12525__$1 = calc_state.call(null);var inst_12526 = cljs.core.seq_QMARK_.call(null,inst_12525__$1);var state_12591__$1 = (function (){var statearr_12593 = state_12591;(statearr_12593[7] = inst_12525__$1);
return statearr_12593;
})();if(inst_12526)
{var statearr_12594_12639 = state_12591__$1;(statearr_12594_12639[1] = 2);
} else
{var statearr_12595_12640 = state_12591__$1;(statearr_12595_12640[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 2))
{var inst_12525 = (state_12591[7]);var inst_12528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12525);var state_12591__$1 = state_12591;var statearr_12596_12641 = state_12591__$1;(statearr_12596_12641[2] = inst_12528);
(statearr_12596_12641[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 3))
{var inst_12525 = (state_12591[7]);var state_12591__$1 = state_12591;var statearr_12597_12642 = state_12591__$1;(statearr_12597_12642[2] = inst_12525);
(statearr_12597_12642[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 4))
{var inst_12525 = (state_12591[7]);var inst_12531 = (state_12591[2]);var inst_12532 = cljs.core.get.call(null,inst_12531,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12533 = cljs.core.get.call(null,inst_12531,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12534 = cljs.core.get.call(null,inst_12531,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12535 = inst_12525;var state_12591__$1 = (function (){var statearr_12598 = state_12591;(statearr_12598[8] = inst_12534);
(statearr_12598[9] = inst_12535);
(statearr_12598[10] = inst_12533);
(statearr_12598[11] = inst_12532);
return statearr_12598;
})();var statearr_12599_12643 = state_12591__$1;(statearr_12599_12643[2] = null);
(statearr_12599_12643[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 5))
{var inst_12535 = (state_12591[9]);var inst_12538 = cljs.core.seq_QMARK_.call(null,inst_12535);var state_12591__$1 = state_12591;if(inst_12538)
{var statearr_12600_12644 = state_12591__$1;(statearr_12600_12644[1] = 7);
} else
{var statearr_12601_12645 = state_12591__$1;(statearr_12601_12645[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 6))
{var inst_12589 = (state_12591[2]);var state_12591__$1 = state_12591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12591__$1,inst_12589);
} else
{if((state_val_12592 === 7))
{var inst_12535 = (state_12591[9]);var inst_12540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12535);var state_12591__$1 = state_12591;var statearr_12602_12646 = state_12591__$1;(statearr_12602_12646[2] = inst_12540);
(statearr_12602_12646[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 8))
{var inst_12535 = (state_12591[9]);var state_12591__$1 = state_12591;var statearr_12603_12647 = state_12591__$1;(statearr_12603_12647[2] = inst_12535);
(statearr_12603_12647[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 9))
{var inst_12543 = (state_12591[12]);var inst_12543__$1 = (state_12591[2]);var inst_12544 = cljs.core.get.call(null,inst_12543__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12545 = cljs.core.get.call(null,inst_12543__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12546 = cljs.core.get.call(null,inst_12543__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12591__$1 = (function (){var statearr_12604 = state_12591;(statearr_12604[13] = inst_12545);
(statearr_12604[14] = inst_12546);
(statearr_12604[12] = inst_12543__$1);
return statearr_12604;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12591__$1,10,inst_12544);
} else
{if((state_val_12592 === 10))
{var inst_12550 = (state_12591[15]);var inst_12551 = (state_12591[16]);var inst_12549 = (state_12591[2]);var inst_12550__$1 = cljs.core.nth.call(null,inst_12549,0,null);var inst_12551__$1 = cljs.core.nth.call(null,inst_12549,1,null);var inst_12552 = (inst_12550__$1 == null);var inst_12553 = cljs.core._EQ_.call(null,inst_12551__$1,change);var inst_12554 = (inst_12552) || (inst_12553);var state_12591__$1 = (function (){var statearr_12605 = state_12591;(statearr_12605[15] = inst_12550__$1);
(statearr_12605[16] = inst_12551__$1);
return statearr_12605;
})();if(cljs.core.truth_(inst_12554))
{var statearr_12606_12648 = state_12591__$1;(statearr_12606_12648[1] = 11);
} else
{var statearr_12607_12649 = state_12591__$1;(statearr_12607_12649[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 11))
{var inst_12550 = (state_12591[15]);var inst_12556 = (inst_12550 == null);var state_12591__$1 = state_12591;if(cljs.core.truth_(inst_12556))
{var statearr_12608_12650 = state_12591__$1;(statearr_12608_12650[1] = 14);
} else
{var statearr_12609_12651 = state_12591__$1;(statearr_12609_12651[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 12))
{var inst_12546 = (state_12591[14]);var inst_12551 = (state_12591[16]);var inst_12565 = (state_12591[17]);var inst_12565__$1 = inst_12546.call(null,inst_12551);var state_12591__$1 = (function (){var statearr_12610 = state_12591;(statearr_12610[17] = inst_12565__$1);
return statearr_12610;
})();if(cljs.core.truth_(inst_12565__$1))
{var statearr_12611_12652 = state_12591__$1;(statearr_12611_12652[1] = 17);
} else
{var statearr_12612_12653 = state_12591__$1;(statearr_12612_12653[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 13))
{var inst_12587 = (state_12591[2]);var state_12591__$1 = state_12591;var statearr_12613_12654 = state_12591__$1;(statearr_12613_12654[2] = inst_12587);
(statearr_12613_12654[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 14))
{var inst_12551 = (state_12591[16]);var inst_12558 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12551);var state_12591__$1 = state_12591;var statearr_12614_12655 = state_12591__$1;(statearr_12614_12655[2] = inst_12558);
(statearr_12614_12655[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 15))
{var state_12591__$1 = state_12591;var statearr_12615_12656 = state_12591__$1;(statearr_12615_12656[2] = null);
(statearr_12615_12656[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 16))
{var inst_12561 = (state_12591[2]);var inst_12562 = calc_state.call(null);var inst_12535 = inst_12562;var state_12591__$1 = (function (){var statearr_12616 = state_12591;(statearr_12616[9] = inst_12535);
(statearr_12616[18] = inst_12561);
return statearr_12616;
})();var statearr_12617_12657 = state_12591__$1;(statearr_12617_12657[2] = null);
(statearr_12617_12657[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 17))
{var inst_12565 = (state_12591[17]);var state_12591__$1 = state_12591;var statearr_12618_12658 = state_12591__$1;(statearr_12618_12658[2] = inst_12565);
(statearr_12618_12658[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 18))
{var inst_12545 = (state_12591[13]);var inst_12546 = (state_12591[14]);var inst_12551 = (state_12591[16]);var inst_12568 = cljs.core.empty_QMARK_.call(null,inst_12546);var inst_12569 = inst_12545.call(null,inst_12551);var inst_12570 = cljs.core.not.call(null,inst_12569);var inst_12571 = (inst_12568) && (inst_12570);var state_12591__$1 = state_12591;var statearr_12619_12659 = state_12591__$1;(statearr_12619_12659[2] = inst_12571);
(statearr_12619_12659[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 19))
{var inst_12573 = (state_12591[2]);var state_12591__$1 = state_12591;if(cljs.core.truth_(inst_12573))
{var statearr_12620_12660 = state_12591__$1;(statearr_12620_12660[1] = 20);
} else
{var statearr_12621_12661 = state_12591__$1;(statearr_12621_12661[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 20))
{var inst_12550 = (state_12591[15]);var state_12591__$1 = state_12591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12591__$1,23,out,inst_12550);
} else
{if((state_val_12592 === 21))
{var inst_12543 = (state_12591[12]);var inst_12535 = inst_12543;var state_12591__$1 = (function (){var statearr_12622 = state_12591;(statearr_12622[9] = inst_12535);
return statearr_12622;
})();var statearr_12623_12662 = state_12591__$1;(statearr_12623_12662[2] = null);
(statearr_12623_12662[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 22))
{var inst_12585 = (state_12591[2]);var state_12591__$1 = state_12591;var statearr_12624_12663 = state_12591__$1;(statearr_12624_12663[2] = inst_12585);
(statearr_12624_12663[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 23))
{var inst_12576 = (state_12591[2]);var state_12591__$1 = state_12591;if(cljs.core.truth_(inst_12576))
{var statearr_12625_12664 = state_12591__$1;(statearr_12625_12664[1] = 24);
} else
{var statearr_12626_12665 = state_12591__$1;(statearr_12626_12665[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 24))
{var inst_12543 = (state_12591[12]);var inst_12535 = inst_12543;var state_12591__$1 = (function (){var statearr_12627 = state_12591;(statearr_12627[9] = inst_12535);
return statearr_12627;
})();var statearr_12628_12666 = state_12591__$1;(statearr_12628_12666[2] = null);
(statearr_12628_12666[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 25))
{var state_12591__$1 = state_12591;var statearr_12629_12667 = state_12591__$1;(statearr_12629_12667[2] = null);
(statearr_12629_12667[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12592 === 26))
{var inst_12581 = (state_12591[2]);var state_12591__$1 = state_12591;var statearr_12630_12668 = state_12591__$1;(statearr_12630_12668[2] = inst_12581);
(statearr_12630_12668[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_12634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12634[0] = state_machine__6193__auto__);
(statearr_12634[1] = 1);
return statearr_12634;
});
var state_machine__6193__auto____1 = (function (state_12591){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_12591);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e12635){if((e12635 instanceof Object))
{var ex__6196__auto__ = e12635;var statearr_12636_12669 = state_12591;(statearr_12636_12669[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12670 = state_12591;
state_12591 = G__12670;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_12591){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_12591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_12637 = f__6208__auto__.call(null);(statearr_12637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___12638);
return statearr_12637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12672 = {};return obj12672;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__12673_SHARP_){if(cljs.core.truth_(p1__12673_SHARP_.call(null,topic)))
{return p1__12673_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12673_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12788 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12788 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12789){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12789 = meta12789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12788.cljs$lang$type = true;
cljs.core.async.t12788.cljs$lang$ctorStr = "cljs.core.async/t12788";
cljs.core.async.t12788.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12788");
});})(mults,ensure_mult))
;
cljs.core.async.t12788.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12788.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12788.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12788.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12788.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12790){var self__ = this;
var _12790__$1 = this;return self__.meta12789;
});})(mults,ensure_mult))
;
cljs.core.async.t12788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12790,meta12789__$1){var self__ = this;
var _12790__$1 = this;return (new cljs.core.async.t12788(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12789__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12788 = ((function (mults,ensure_mult){
return (function __GT_t12788(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12789){return (new cljs.core.async.t12788(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12789));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12788(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6207__auto___12902 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_12858){var state_val_12859 = (state_12858[1]);if((state_val_12859 === 1))
{var state_12858__$1 = state_12858;var statearr_12860_12903 = state_12858__$1;(statearr_12860_12903[2] = null);
(statearr_12860_12903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 2))
{var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12858__$1,4,ch);
} else
{if((state_val_12859 === 3))
{var inst_12856 = (state_12858[2]);var state_12858__$1 = state_12858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12858__$1,inst_12856);
} else
{if((state_val_12859 === 4))
{var inst_12793 = (state_12858[7]);var inst_12793__$1 = (state_12858[2]);var inst_12794 = (inst_12793__$1 == null);var state_12858__$1 = (function (){var statearr_12861 = state_12858;(statearr_12861[7] = inst_12793__$1);
return statearr_12861;
})();if(cljs.core.truth_(inst_12794))
{var statearr_12862_12904 = state_12858__$1;(statearr_12862_12904[1] = 5);
} else
{var statearr_12863_12905 = state_12858__$1;(statearr_12863_12905[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 5))
{var inst_12800 = cljs.core.deref.call(null,mults);var inst_12801 = cljs.core.vals.call(null,inst_12800);var inst_12802 = cljs.core.seq.call(null,inst_12801);var inst_12803 = inst_12802;var inst_12804 = null;var inst_12805 = 0;var inst_12806 = 0;var state_12858__$1 = (function (){var statearr_12864 = state_12858;(statearr_12864[8] = inst_12803);
(statearr_12864[9] = inst_12805);
(statearr_12864[10] = inst_12804);
(statearr_12864[11] = inst_12806);
return statearr_12864;
})();var statearr_12865_12906 = state_12858__$1;(statearr_12865_12906[2] = null);
(statearr_12865_12906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 6))
{var inst_12793 = (state_12858[7]);var inst_12841 = (state_12858[12]);var inst_12841__$1 = topic_fn.call(null,inst_12793);var inst_12842 = cljs.core.deref.call(null,mults);var inst_12843 = cljs.core.get.call(null,inst_12842,inst_12841__$1);var inst_12844 = cljs.core.async.muxch_STAR_.call(null,inst_12843);var state_12858__$1 = (function (){var statearr_12866 = state_12858;(statearr_12866[12] = inst_12841__$1);
return statearr_12866;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12858__$1,19,inst_12844,inst_12793);
} else
{if((state_val_12859 === 7))
{var inst_12854 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12867_12907 = state_12858__$1;(statearr_12867_12907[2] = inst_12854);
(statearr_12867_12907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 8))
{var inst_12805 = (state_12858[9]);var inst_12806 = (state_12858[11]);var inst_12808 = (inst_12806 < inst_12805);var inst_12809 = inst_12808;var state_12858__$1 = state_12858;if(cljs.core.truth_(inst_12809))
{var statearr_12871_12908 = state_12858__$1;(statearr_12871_12908[1] = 10);
} else
{var statearr_12872_12909 = state_12858__$1;(statearr_12872_12909[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 9))
{var inst_12839 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12873_12910 = state_12858__$1;(statearr_12873_12910[2] = inst_12839);
(statearr_12873_12910[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 10))
{var inst_12803 = (state_12858[8]);var inst_12805 = (state_12858[9]);var inst_12804 = (state_12858[10]);var inst_12806 = (state_12858[11]);var inst_12811 = cljs.core._nth.call(null,inst_12804,inst_12806);var inst_12812 = cljs.core.async.muxch_STAR_.call(null,inst_12811);var inst_12813 = cljs.core.async.close_BANG_.call(null,inst_12812);var inst_12814 = (inst_12806 + 1);var tmp12868 = inst_12803;var tmp12869 = inst_12805;var tmp12870 = inst_12804;var inst_12803__$1 = tmp12868;var inst_12804__$1 = tmp12870;var inst_12805__$1 = tmp12869;var inst_12806__$1 = inst_12814;var state_12858__$1 = (function (){var statearr_12874 = state_12858;(statearr_12874[8] = inst_12803__$1);
(statearr_12874[9] = inst_12805__$1);
(statearr_12874[10] = inst_12804__$1);
(statearr_12874[11] = inst_12806__$1);
(statearr_12874[13] = inst_12813);
return statearr_12874;
})();var statearr_12875_12911 = state_12858__$1;(statearr_12875_12911[2] = null);
(statearr_12875_12911[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 11))
{var inst_12803 = (state_12858[8]);var inst_12817 = (state_12858[14]);var inst_12817__$1 = cljs.core.seq.call(null,inst_12803);var state_12858__$1 = (function (){var statearr_12876 = state_12858;(statearr_12876[14] = inst_12817__$1);
return statearr_12876;
})();if(inst_12817__$1)
{var statearr_12877_12912 = state_12858__$1;(statearr_12877_12912[1] = 13);
} else
{var statearr_12878_12913 = state_12858__$1;(statearr_12878_12913[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 12))
{var inst_12837 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12879_12914 = state_12858__$1;(statearr_12879_12914[2] = inst_12837);
(statearr_12879_12914[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 13))
{var inst_12817 = (state_12858[14]);var inst_12819 = cljs.core.chunked_seq_QMARK_.call(null,inst_12817);var state_12858__$1 = state_12858;if(inst_12819)
{var statearr_12880_12915 = state_12858__$1;(statearr_12880_12915[1] = 16);
} else
{var statearr_12881_12916 = state_12858__$1;(statearr_12881_12916[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 14))
{var state_12858__$1 = state_12858;var statearr_12882_12917 = state_12858__$1;(statearr_12882_12917[2] = null);
(statearr_12882_12917[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 15))
{var inst_12835 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12883_12918 = state_12858__$1;(statearr_12883_12918[2] = inst_12835);
(statearr_12883_12918[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 16))
{var inst_12817 = (state_12858[14]);var inst_12821 = cljs.core.chunk_first.call(null,inst_12817);var inst_12822 = cljs.core.chunk_rest.call(null,inst_12817);var inst_12823 = cljs.core.count.call(null,inst_12821);var inst_12803 = inst_12822;var inst_12804 = inst_12821;var inst_12805 = inst_12823;var inst_12806 = 0;var state_12858__$1 = (function (){var statearr_12884 = state_12858;(statearr_12884[8] = inst_12803);
(statearr_12884[9] = inst_12805);
(statearr_12884[10] = inst_12804);
(statearr_12884[11] = inst_12806);
return statearr_12884;
})();var statearr_12885_12919 = state_12858__$1;(statearr_12885_12919[2] = null);
(statearr_12885_12919[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 17))
{var inst_12817 = (state_12858[14]);var inst_12826 = cljs.core.first.call(null,inst_12817);var inst_12827 = cljs.core.async.muxch_STAR_.call(null,inst_12826);var inst_12828 = cljs.core.async.close_BANG_.call(null,inst_12827);var inst_12829 = cljs.core.next.call(null,inst_12817);var inst_12803 = inst_12829;var inst_12804 = null;var inst_12805 = 0;var inst_12806 = 0;var state_12858__$1 = (function (){var statearr_12886 = state_12858;(statearr_12886[8] = inst_12803);
(statearr_12886[9] = inst_12805);
(statearr_12886[10] = inst_12804);
(statearr_12886[11] = inst_12806);
(statearr_12886[15] = inst_12828);
return statearr_12886;
})();var statearr_12887_12920 = state_12858__$1;(statearr_12887_12920[2] = null);
(statearr_12887_12920[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 18))
{var inst_12832 = (state_12858[2]);var state_12858__$1 = state_12858;var statearr_12888_12921 = state_12858__$1;(statearr_12888_12921[2] = inst_12832);
(statearr_12888_12921[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 19))
{var inst_12846 = (state_12858[2]);var state_12858__$1 = state_12858;if(cljs.core.truth_(inst_12846))
{var statearr_12889_12922 = state_12858__$1;(statearr_12889_12922[1] = 20);
} else
{var statearr_12890_12923 = state_12858__$1;(statearr_12890_12923[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 20))
{var state_12858__$1 = state_12858;var statearr_12891_12924 = state_12858__$1;(statearr_12891_12924[2] = null);
(statearr_12891_12924[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 21))
{var inst_12841 = (state_12858[12]);var inst_12849 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12841);var state_12858__$1 = state_12858;var statearr_12892_12925 = state_12858__$1;(statearr_12892_12925[2] = inst_12849);
(statearr_12892_12925[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12859 === 22))
{var inst_12851 = (state_12858[2]);var state_12858__$1 = (function (){var statearr_12893 = state_12858;(statearr_12893[16] = inst_12851);
return statearr_12893;
})();var statearr_12894_12926 = state_12858__$1;(statearr_12894_12926[2] = null);
(statearr_12894_12926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_12898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12898[0] = state_machine__6193__auto__);
(statearr_12898[1] = 1);
return statearr_12898;
});
var state_machine__6193__auto____1 = (function (state_12858){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_12858);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e12899){if((e12899 instanceof Object))
{var ex__6196__auto__ = e12899;var statearr_12900_12927 = state_12858;(statearr_12900_12927[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12928 = state_12858;
state_12858 = G__12928;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_12858){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_12858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_12901 = f__6208__auto__.call(null);(statearr_12901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___12902);
return statearr_12901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6207__auto___13065 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_13035){var state_val_13036 = (state_13035[1]);if((state_val_13036 === 1))
{var state_13035__$1 = state_13035;var statearr_13037_13066 = state_13035__$1;(statearr_13037_13066[2] = null);
(statearr_13037_13066[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 2))
{var inst_12998 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12999 = 0;var state_13035__$1 = (function (){var statearr_13038 = state_13035;(statearr_13038[7] = inst_12998);
(statearr_13038[8] = inst_12999);
return statearr_13038;
})();var statearr_13039_13067 = state_13035__$1;(statearr_13039_13067[2] = null);
(statearr_13039_13067[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 3))
{var inst_13033 = (state_13035[2]);var state_13035__$1 = state_13035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13035__$1,inst_13033);
} else
{if((state_val_13036 === 4))
{var inst_12999 = (state_13035[8]);var inst_13001 = (inst_12999 < cnt);var state_13035__$1 = state_13035;if(cljs.core.truth_(inst_13001))
{var statearr_13040_13068 = state_13035__$1;(statearr_13040_13068[1] = 6);
} else
{var statearr_13041_13069 = state_13035__$1;(statearr_13041_13069[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 5))
{var inst_13019 = (state_13035[2]);var state_13035__$1 = (function (){var statearr_13042 = state_13035;(statearr_13042[9] = inst_13019);
return statearr_13042;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13035__$1,12,dchan);
} else
{if((state_val_13036 === 6))
{var state_13035__$1 = state_13035;var statearr_13043_13070 = state_13035__$1;(statearr_13043_13070[2] = null);
(statearr_13043_13070[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 7))
{var state_13035__$1 = state_13035;var statearr_13044_13071 = state_13035__$1;(statearr_13044_13071[2] = null);
(statearr_13044_13071[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 8))
{var inst_13017 = (state_13035[2]);var state_13035__$1 = state_13035;var statearr_13045_13072 = state_13035__$1;(statearr_13045_13072[2] = inst_13017);
(statearr_13045_13072[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 9))
{var inst_12999 = (state_13035[8]);var inst_13012 = (state_13035[2]);var inst_13013 = (inst_12999 + 1);var inst_12999__$1 = inst_13013;var state_13035__$1 = (function (){var statearr_13046 = state_13035;(statearr_13046[10] = inst_13012);
(statearr_13046[8] = inst_12999__$1);
return statearr_13046;
})();var statearr_13047_13073 = state_13035__$1;(statearr_13047_13073[2] = null);
(statearr_13047_13073[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 10))
{var inst_13003 = (state_13035[2]);var inst_13004 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13035__$1 = (function (){var statearr_13048 = state_13035;(statearr_13048[11] = inst_13003);
return statearr_13048;
})();var statearr_13049_13074 = state_13035__$1;(statearr_13049_13074[2] = inst_13004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13035__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 11))
{var inst_12999 = (state_13035[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13035,10,Object,null,9);var inst_13008 = chs__$1.call(null,inst_12999);var inst_13009 = done.call(null,inst_12999);var inst_13010 = cljs.core.async.take_BANG_.call(null,inst_13008,inst_13009);var state_13035__$1 = state_13035;var statearr_13050_13075 = state_13035__$1;(statearr_13050_13075[2] = inst_13010);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13035__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 12))
{var inst_13021 = (state_13035[12]);var inst_13021__$1 = (state_13035[2]);var inst_13022 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13021__$1);var state_13035__$1 = (function (){var statearr_13051 = state_13035;(statearr_13051[12] = inst_13021__$1);
return statearr_13051;
})();if(cljs.core.truth_(inst_13022))
{var statearr_13052_13076 = state_13035__$1;(statearr_13052_13076[1] = 13);
} else
{var statearr_13053_13077 = state_13035__$1;(statearr_13053_13077[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 13))
{var inst_13024 = cljs.core.async.close_BANG_.call(null,out);var state_13035__$1 = state_13035;var statearr_13054_13078 = state_13035__$1;(statearr_13054_13078[2] = inst_13024);
(statearr_13054_13078[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 14))
{var inst_13021 = (state_13035[12]);var inst_13026 = cljs.core.apply.call(null,f,inst_13021);var state_13035__$1 = state_13035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13035__$1,16,out,inst_13026);
} else
{if((state_val_13036 === 15))
{var inst_13031 = (state_13035[2]);var state_13035__$1 = state_13035;var statearr_13055_13079 = state_13035__$1;(statearr_13055_13079[2] = inst_13031);
(statearr_13055_13079[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13036 === 16))
{var inst_13028 = (state_13035[2]);var state_13035__$1 = (function (){var statearr_13056 = state_13035;(statearr_13056[13] = inst_13028);
return statearr_13056;
})();var statearr_13057_13080 = state_13035__$1;(statearr_13057_13080[2] = null);
(statearr_13057_13080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_13061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13061[0] = state_machine__6193__auto__);
(statearr_13061[1] = 1);
return statearr_13061;
});
var state_machine__6193__auto____1 = (function (state_13035){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_13035);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e13062){if((e13062 instanceof Object))
{var ex__6196__auto__ = e13062;var statearr_13063_13081 = state_13035;(statearr_13063_13081[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13082 = state_13035;
state_13035 = G__13082;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_13035){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_13035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_13064 = f__6208__auto__.call(null);(statearr_13064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___13065);
return statearr_13064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6207__auto___13190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_13166){var state_val_13167 = (state_13166[1]);if((state_val_13167 === 1))
{var inst_13137 = cljs.core.vec.call(null,chs);var inst_13138 = inst_13137;var state_13166__$1 = (function (){var statearr_13168 = state_13166;(statearr_13168[7] = inst_13138);
return statearr_13168;
})();var statearr_13169_13191 = state_13166__$1;(statearr_13169_13191[2] = null);
(statearr_13169_13191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13167 === 2))
{var inst_13138 = (state_13166[7]);var inst_13140 = cljs.core.count.call(null,inst_13138);var inst_13141 = (inst_13140 > 0);var state_13166__$1 = state_13166;if(cljs.core.truth_(inst_13141))
{var statearr_13170_13192 = state_13166__$1;(statearr_13170_13192[1] = 4);
} else
{var statearr_13171_13193 = state_13166__$1;(statearr_13171_13193[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13167 === 3))
{var inst_13164 = (state_13166[2]);var state_13166__$1 = state_13166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13166__$1,inst_13164);
} else
{if((state_val_13167 === 4))
{var inst_13138 = (state_13166[7]);var state_13166__$1 = state_13166;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13166__$1,7,inst_13138);
} else
{if((state_val_13167 === 5))
{var inst_13160 = cljs.core.async.close_BANG_.call(null,out);var state_13166__$1 = state_13166;var statearr_13172_13194 = state_13166__$1;(statearr_13172_13194[2] = inst_13160);
(statearr_13172_13194[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13167 === 6))
{var inst_13162 = (state_13166[2]);var state_13166__$1 = state_13166;var statearr_13173_13195 = state_13166__$1;(statearr_13173_13195[2] = inst_13162);
(statearr_13173_13195[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13167 === 7))
{var inst_13146 = (state_13166[8]);var inst_13145 = (state_13166[9]);var inst_13145__$1 = (state_13166[2]);var inst_13146__$1 = cljs.core.nth.call(null,inst_13145__$1,0,null);var inst_13147 = cljs.core.nth.call(null,inst_13145__$1,1,null);var inst_13148 = (inst_13146__$1 == null);var state_13166__$1 = (function (){var statearr_13174 = state_13166;(statearr_13174[10] = inst_13147);
(statearr_13174[8] = inst_13146__$1);
(statearr_13174[9] = inst_13145__$1);
return statearr_13174;
})();if(cljs.core.truth_(inst_13148))
{var statearr_13175_13196 = state_13166__$1;(statearr_13175_13196[1] = 8);
} else
{var statearr_13176_13197 = state_13166__$1;(statearr_13176_13197[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13167 === 8))
{var inst_13147 = (state_13166[10]);var inst_13146 = (state_13166[8]);var inst_13145 = (state_13166[9]);var inst_13138 = (state_13166[7]);var inst_13150 = (function (){var c = inst_13147;var v = inst_13146;var vec__13143 = inst_13145;var cs = inst_13138;return ((function (c,v,vec__13143,cs,inst_13147,inst_13146,inst_13145,inst_13138,state_val_13167){
return (function (p1__13083_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13083_SHARP_);
});
;})(c,v,vec__13143,cs,inst_13147,inst_13146,inst_13145,inst_13138,state_val_13167))
})();var inst_13151 = cljs.core.filterv.call(null,inst_13150,inst_13138);var inst_13138__$1 = inst_13151;var state_13166__$1 = (function (){var statearr_13177 = state_13166;(statearr_13177[7] = inst_13138__$1);
return statearr_13177;
})();var statearr_13178_13198 = state_13166__$1;(statearr_13178_13198[2] = null);
(statearr_13178_13198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13167 === 9))
{var inst_13146 = (state_13166[8]);var state_13166__$1 = state_13166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13166__$1,11,out,inst_13146);
} else
{if((state_val_13167 === 10))
{var inst_13158 = (state_13166[2]);var state_13166__$1 = state_13166;var statearr_13180_13199 = state_13166__$1;(statearr_13180_13199[2] = inst_13158);
(statearr_13180_13199[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13167 === 11))
{var inst_13138 = (state_13166[7]);var inst_13155 = (state_13166[2]);var tmp13179 = inst_13138;var inst_13138__$1 = tmp13179;var state_13166__$1 = (function (){var statearr_13181 = state_13166;(statearr_13181[11] = inst_13155);
(statearr_13181[7] = inst_13138__$1);
return statearr_13181;
})();var statearr_13182_13200 = state_13166__$1;(statearr_13182_13200[2] = null);
(statearr_13182_13200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_13186 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13186[0] = state_machine__6193__auto__);
(statearr_13186[1] = 1);
return statearr_13186;
});
var state_machine__6193__auto____1 = (function (state_13166){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_13166);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e13187){if((e13187 instanceof Object))
{var ex__6196__auto__ = e13187;var statearr_13188_13201 = state_13166;(statearr_13188_13201[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13202 = state_13166;
state_13166 = G__13202;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_13166){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_13166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_13189 = f__6208__auto__.call(null);(statearr_13189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___13190);
return statearr_13189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6207__auto___13295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_13272){var state_val_13273 = (state_13272[1]);if((state_val_13273 === 1))
{var inst_13249 = 0;var state_13272__$1 = (function (){var statearr_13274 = state_13272;(statearr_13274[7] = inst_13249);
return statearr_13274;
})();var statearr_13275_13296 = state_13272__$1;(statearr_13275_13296[2] = null);
(statearr_13275_13296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13273 === 2))
{var inst_13249 = (state_13272[7]);var inst_13251 = (inst_13249 < n);var state_13272__$1 = state_13272;if(cljs.core.truth_(inst_13251))
{var statearr_13276_13297 = state_13272__$1;(statearr_13276_13297[1] = 4);
} else
{var statearr_13277_13298 = state_13272__$1;(statearr_13277_13298[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13273 === 3))
{var inst_13269 = (state_13272[2]);var inst_13270 = cljs.core.async.close_BANG_.call(null,out);var state_13272__$1 = (function (){var statearr_13278 = state_13272;(statearr_13278[8] = inst_13269);
return statearr_13278;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13272__$1,inst_13270);
} else
{if((state_val_13273 === 4))
{var state_13272__$1 = state_13272;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13272__$1,7,ch);
} else
{if((state_val_13273 === 5))
{var state_13272__$1 = state_13272;var statearr_13279_13299 = state_13272__$1;(statearr_13279_13299[2] = null);
(statearr_13279_13299[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13273 === 6))
{var inst_13267 = (state_13272[2]);var state_13272__$1 = state_13272;var statearr_13280_13300 = state_13272__$1;(statearr_13280_13300[2] = inst_13267);
(statearr_13280_13300[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13273 === 7))
{var inst_13254 = (state_13272[9]);var inst_13254__$1 = (state_13272[2]);var inst_13255 = (inst_13254__$1 == null);var inst_13256 = cljs.core.not.call(null,inst_13255);var state_13272__$1 = (function (){var statearr_13281 = state_13272;(statearr_13281[9] = inst_13254__$1);
return statearr_13281;
})();if(inst_13256)
{var statearr_13282_13301 = state_13272__$1;(statearr_13282_13301[1] = 8);
} else
{var statearr_13283_13302 = state_13272__$1;(statearr_13283_13302[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13273 === 8))
{var inst_13254 = (state_13272[9]);var state_13272__$1 = state_13272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13272__$1,11,out,inst_13254);
} else
{if((state_val_13273 === 9))
{var state_13272__$1 = state_13272;var statearr_13284_13303 = state_13272__$1;(statearr_13284_13303[2] = null);
(statearr_13284_13303[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13273 === 10))
{var inst_13264 = (state_13272[2]);var state_13272__$1 = state_13272;var statearr_13285_13304 = state_13272__$1;(statearr_13285_13304[2] = inst_13264);
(statearr_13285_13304[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13273 === 11))
{var inst_13249 = (state_13272[7]);var inst_13259 = (state_13272[2]);var inst_13260 = (inst_13249 + 1);var inst_13249__$1 = inst_13260;var state_13272__$1 = (function (){var statearr_13286 = state_13272;(statearr_13286[7] = inst_13249__$1);
(statearr_13286[10] = inst_13259);
return statearr_13286;
})();var statearr_13287_13305 = state_13272__$1;(statearr_13287_13305[2] = null);
(statearr_13287_13305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_13291 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13291[0] = state_machine__6193__auto__);
(statearr_13291[1] = 1);
return statearr_13291;
});
var state_machine__6193__auto____1 = (function (state_13272){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_13272);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e13292){if((e13292 instanceof Object))
{var ex__6196__auto__ = e13292;var statearr_13293_13306 = state_13272;(statearr_13293_13306[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13272);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13307 = state_13272;
state_13272 = G__13307;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_13272){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_13272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_13294 = f__6208__auto__.call(null);(statearr_13294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___13295);
return statearr_13294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6207__auto___13404 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_13379){var state_val_13380 = (state_13379[1]);if((state_val_13380 === 1))
{var inst_13356 = null;var state_13379__$1 = (function (){var statearr_13381 = state_13379;(statearr_13381[7] = inst_13356);
return statearr_13381;
})();var statearr_13382_13405 = state_13379__$1;(statearr_13382_13405[2] = null);
(statearr_13382_13405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13380 === 2))
{var state_13379__$1 = state_13379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13379__$1,4,ch);
} else
{if((state_val_13380 === 3))
{var inst_13376 = (state_13379[2]);var inst_13377 = cljs.core.async.close_BANG_.call(null,out);var state_13379__$1 = (function (){var statearr_13383 = state_13379;(statearr_13383[8] = inst_13376);
return statearr_13383;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13379__$1,inst_13377);
} else
{if((state_val_13380 === 4))
{var inst_13359 = (state_13379[9]);var inst_13359__$1 = (state_13379[2]);var inst_13360 = (inst_13359__$1 == null);var inst_13361 = cljs.core.not.call(null,inst_13360);var state_13379__$1 = (function (){var statearr_13384 = state_13379;(statearr_13384[9] = inst_13359__$1);
return statearr_13384;
})();if(inst_13361)
{var statearr_13385_13406 = state_13379__$1;(statearr_13385_13406[1] = 5);
} else
{var statearr_13386_13407 = state_13379__$1;(statearr_13386_13407[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13380 === 5))
{var inst_13359 = (state_13379[9]);var inst_13356 = (state_13379[7]);var inst_13363 = cljs.core._EQ_.call(null,inst_13359,inst_13356);var state_13379__$1 = state_13379;if(inst_13363)
{var statearr_13387_13408 = state_13379__$1;(statearr_13387_13408[1] = 8);
} else
{var statearr_13388_13409 = state_13379__$1;(statearr_13388_13409[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13380 === 6))
{var state_13379__$1 = state_13379;var statearr_13390_13410 = state_13379__$1;(statearr_13390_13410[2] = null);
(statearr_13390_13410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13380 === 7))
{var inst_13374 = (state_13379[2]);var state_13379__$1 = state_13379;var statearr_13391_13411 = state_13379__$1;(statearr_13391_13411[2] = inst_13374);
(statearr_13391_13411[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13380 === 8))
{var inst_13356 = (state_13379[7]);var tmp13389 = inst_13356;var inst_13356__$1 = tmp13389;var state_13379__$1 = (function (){var statearr_13392 = state_13379;(statearr_13392[7] = inst_13356__$1);
return statearr_13392;
})();var statearr_13393_13412 = state_13379__$1;(statearr_13393_13412[2] = null);
(statearr_13393_13412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13380 === 9))
{var inst_13359 = (state_13379[9]);var state_13379__$1 = state_13379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13379__$1,11,out,inst_13359);
} else
{if((state_val_13380 === 10))
{var inst_13371 = (state_13379[2]);var state_13379__$1 = state_13379;var statearr_13394_13413 = state_13379__$1;(statearr_13394_13413[2] = inst_13371);
(statearr_13394_13413[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13380 === 11))
{var inst_13359 = (state_13379[9]);var inst_13368 = (state_13379[2]);var inst_13356 = inst_13359;var state_13379__$1 = (function (){var statearr_13395 = state_13379;(statearr_13395[10] = inst_13368);
(statearr_13395[7] = inst_13356);
return statearr_13395;
})();var statearr_13396_13414 = state_13379__$1;(statearr_13396_13414[2] = null);
(statearr_13396_13414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_13400 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13400[0] = state_machine__6193__auto__);
(statearr_13400[1] = 1);
return statearr_13400;
});
var state_machine__6193__auto____1 = (function (state_13379){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_13379);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e13401){if((e13401 instanceof Object))
{var ex__6196__auto__ = e13401;var statearr_13402_13415 = state_13379;(statearr_13402_13415[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13401;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13416 = state_13379;
state_13379 = G__13416;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_13379){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_13379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_13403 = f__6208__auto__.call(null);(statearr_13403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___13404);
return statearr_13403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6207__auto___13551 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_13521){var state_val_13522 = (state_13521[1]);if((state_val_13522 === 1))
{var inst_13484 = (new Array(n));var inst_13485 = inst_13484;var inst_13486 = 0;var state_13521__$1 = (function (){var statearr_13523 = state_13521;(statearr_13523[7] = inst_13485);
(statearr_13523[8] = inst_13486);
return statearr_13523;
})();var statearr_13524_13552 = state_13521__$1;(statearr_13524_13552[2] = null);
(statearr_13524_13552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 2))
{var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13521__$1,4,ch);
} else
{if((state_val_13522 === 3))
{var inst_13519 = (state_13521[2]);var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13521__$1,inst_13519);
} else
{if((state_val_13522 === 4))
{var inst_13489 = (state_13521[9]);var inst_13489__$1 = (state_13521[2]);var inst_13490 = (inst_13489__$1 == null);var inst_13491 = cljs.core.not.call(null,inst_13490);var state_13521__$1 = (function (){var statearr_13525 = state_13521;(statearr_13525[9] = inst_13489__$1);
return statearr_13525;
})();if(inst_13491)
{var statearr_13526_13553 = state_13521__$1;(statearr_13526_13553[1] = 5);
} else
{var statearr_13527_13554 = state_13521__$1;(statearr_13527_13554[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 5))
{var inst_13489 = (state_13521[9]);var inst_13485 = (state_13521[7]);var inst_13486 = (state_13521[8]);var inst_13494 = (state_13521[10]);var inst_13493 = (inst_13485[inst_13486] = inst_13489);var inst_13494__$1 = (inst_13486 + 1);var inst_13495 = (inst_13494__$1 < n);var state_13521__$1 = (function (){var statearr_13528 = state_13521;(statearr_13528[10] = inst_13494__$1);
(statearr_13528[11] = inst_13493);
return statearr_13528;
})();if(cljs.core.truth_(inst_13495))
{var statearr_13529_13555 = state_13521__$1;(statearr_13529_13555[1] = 8);
} else
{var statearr_13530_13556 = state_13521__$1;(statearr_13530_13556[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 6))
{var inst_13486 = (state_13521[8]);var inst_13507 = (inst_13486 > 0);var state_13521__$1 = state_13521;if(cljs.core.truth_(inst_13507))
{var statearr_13532_13557 = state_13521__$1;(statearr_13532_13557[1] = 12);
} else
{var statearr_13533_13558 = state_13521__$1;(statearr_13533_13558[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 7))
{var inst_13517 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13534_13559 = state_13521__$1;(statearr_13534_13559[2] = inst_13517);
(statearr_13534_13559[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 8))
{var inst_13485 = (state_13521[7]);var inst_13494 = (state_13521[10]);var tmp13531 = inst_13485;var inst_13485__$1 = tmp13531;var inst_13486 = inst_13494;var state_13521__$1 = (function (){var statearr_13535 = state_13521;(statearr_13535[7] = inst_13485__$1);
(statearr_13535[8] = inst_13486);
return statearr_13535;
})();var statearr_13536_13560 = state_13521__$1;(statearr_13536_13560[2] = null);
(statearr_13536_13560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 9))
{var inst_13485 = (state_13521[7]);var inst_13499 = cljs.core.vec.call(null,inst_13485);var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13521__$1,11,out,inst_13499);
} else
{if((state_val_13522 === 10))
{var inst_13505 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13537_13561 = state_13521__$1;(statearr_13537_13561[2] = inst_13505);
(statearr_13537_13561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 11))
{var inst_13501 = (state_13521[2]);var inst_13502 = (new Array(n));var inst_13485 = inst_13502;var inst_13486 = 0;var state_13521__$1 = (function (){var statearr_13538 = state_13521;(statearr_13538[7] = inst_13485);
(statearr_13538[8] = inst_13486);
(statearr_13538[12] = inst_13501);
return statearr_13538;
})();var statearr_13539_13562 = state_13521__$1;(statearr_13539_13562[2] = null);
(statearr_13539_13562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 12))
{var inst_13485 = (state_13521[7]);var inst_13509 = cljs.core.vec.call(null,inst_13485);var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13521__$1,15,out,inst_13509);
} else
{if((state_val_13522 === 13))
{var state_13521__$1 = state_13521;var statearr_13540_13563 = state_13521__$1;(statearr_13540_13563[2] = null);
(statearr_13540_13563[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 14))
{var inst_13514 = (state_13521[2]);var inst_13515 = cljs.core.async.close_BANG_.call(null,out);var state_13521__$1 = (function (){var statearr_13541 = state_13521;(statearr_13541[13] = inst_13514);
return statearr_13541;
})();var statearr_13542_13564 = state_13521__$1;(statearr_13542_13564[2] = inst_13515);
(statearr_13542_13564[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 15))
{var inst_13511 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13543_13565 = state_13521__$1;(statearr_13543_13565[2] = inst_13511);
(statearr_13543_13565[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_13547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13547[0] = state_machine__6193__auto__);
(statearr_13547[1] = 1);
return statearr_13547;
});
var state_machine__6193__auto____1 = (function (state_13521){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_13521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e13548){if((e13548 instanceof Object))
{var ex__6196__auto__ = e13548;var statearr_13549_13566 = state_13521;(statearr_13549_13566[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13567 = state_13521;
state_13521 = G__13567;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_13521){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_13521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_13550 = f__6208__auto__.call(null);(statearr_13550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___13551);
return statearr_13550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6207__auto___13710 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_13680){var state_val_13681 = (state_13680[1]);if((state_val_13681 === 1))
{var inst_13639 = [];var inst_13640 = inst_13639;var inst_13641 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13680__$1 = (function (){var statearr_13682 = state_13680;(statearr_13682[7] = inst_13641);
(statearr_13682[8] = inst_13640);
return statearr_13682;
})();var statearr_13683_13711 = state_13680__$1;(statearr_13683_13711[2] = null);
(statearr_13683_13711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 2))
{var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13680__$1,4,ch);
} else
{if((state_val_13681 === 3))
{var inst_13678 = (state_13680[2]);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13680__$1,inst_13678);
} else
{if((state_val_13681 === 4))
{var inst_13644 = (state_13680[9]);var inst_13644__$1 = (state_13680[2]);var inst_13645 = (inst_13644__$1 == null);var inst_13646 = cljs.core.not.call(null,inst_13645);var state_13680__$1 = (function (){var statearr_13684 = state_13680;(statearr_13684[9] = inst_13644__$1);
return statearr_13684;
})();if(inst_13646)
{var statearr_13685_13712 = state_13680__$1;(statearr_13685_13712[1] = 5);
} else
{var statearr_13686_13713 = state_13680__$1;(statearr_13686_13713[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 5))
{var inst_13644 = (state_13680[9]);var inst_13641 = (state_13680[7]);var inst_13648 = (state_13680[10]);var inst_13648__$1 = f.call(null,inst_13644);var inst_13649 = cljs.core._EQ_.call(null,inst_13648__$1,inst_13641);var inst_13650 = cljs.core.keyword_identical_QMARK_.call(null,inst_13641,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13651 = (inst_13649) || (inst_13650);var state_13680__$1 = (function (){var statearr_13687 = state_13680;(statearr_13687[10] = inst_13648__$1);
return statearr_13687;
})();if(cljs.core.truth_(inst_13651))
{var statearr_13688_13714 = state_13680__$1;(statearr_13688_13714[1] = 8);
} else
{var statearr_13689_13715 = state_13680__$1;(statearr_13689_13715[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 6))
{var inst_13640 = (state_13680[8]);var inst_13665 = inst_13640.length;var inst_13666 = (inst_13665 > 0);var state_13680__$1 = state_13680;if(cljs.core.truth_(inst_13666))
{var statearr_13691_13716 = state_13680__$1;(statearr_13691_13716[1] = 12);
} else
{var statearr_13692_13717 = state_13680__$1;(statearr_13692_13717[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 7))
{var inst_13676 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13693_13718 = state_13680__$1;(statearr_13693_13718[2] = inst_13676);
(statearr_13693_13718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 8))
{var inst_13644 = (state_13680[9]);var inst_13640 = (state_13680[8]);var inst_13648 = (state_13680[10]);var inst_13653 = inst_13640.push(inst_13644);var tmp13690 = inst_13640;var inst_13640__$1 = tmp13690;var inst_13641 = inst_13648;var state_13680__$1 = (function (){var statearr_13694 = state_13680;(statearr_13694[7] = inst_13641);
(statearr_13694[8] = inst_13640__$1);
(statearr_13694[11] = inst_13653);
return statearr_13694;
})();var statearr_13695_13719 = state_13680__$1;(statearr_13695_13719[2] = null);
(statearr_13695_13719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 9))
{var inst_13640 = (state_13680[8]);var inst_13656 = cljs.core.vec.call(null,inst_13640);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13680__$1,11,out,inst_13656);
} else
{if((state_val_13681 === 10))
{var inst_13663 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13696_13720 = state_13680__$1;(statearr_13696_13720[2] = inst_13663);
(statearr_13696_13720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 11))
{var inst_13644 = (state_13680[9]);var inst_13648 = (state_13680[10]);var inst_13658 = (state_13680[2]);var inst_13659 = [];var inst_13660 = inst_13659.push(inst_13644);var inst_13640 = inst_13659;var inst_13641 = inst_13648;var state_13680__$1 = (function (){var statearr_13697 = state_13680;(statearr_13697[7] = inst_13641);
(statearr_13697[8] = inst_13640);
(statearr_13697[12] = inst_13658);
(statearr_13697[13] = inst_13660);
return statearr_13697;
})();var statearr_13698_13721 = state_13680__$1;(statearr_13698_13721[2] = null);
(statearr_13698_13721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 12))
{var inst_13640 = (state_13680[8]);var inst_13668 = cljs.core.vec.call(null,inst_13640);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13680__$1,15,out,inst_13668);
} else
{if((state_val_13681 === 13))
{var state_13680__$1 = state_13680;var statearr_13699_13722 = state_13680__$1;(statearr_13699_13722[2] = null);
(statearr_13699_13722[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 14))
{var inst_13673 = (state_13680[2]);var inst_13674 = cljs.core.async.close_BANG_.call(null,out);var state_13680__$1 = (function (){var statearr_13700 = state_13680;(statearr_13700[14] = inst_13673);
return statearr_13700;
})();var statearr_13701_13723 = state_13680__$1;(statearr_13701_13723[2] = inst_13674);
(statearr_13701_13723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 15))
{var inst_13670 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13702_13724 = state_13680__$1;(statearr_13702_13724[2] = inst_13670);
(statearr_13702_13724[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_13706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13706[0] = state_machine__6193__auto__);
(statearr_13706[1] = 1);
return statearr_13706;
});
var state_machine__6193__auto____1 = (function (state_13680){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_13680);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e13707){if((e13707 instanceof Object))
{var ex__6196__auto__ = e13707;var statearr_13708_13725 = state_13680;(statearr_13708_13725[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13726 = state_13680;
state_13680 = G__13726;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_13680){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_13680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_13709 = f__6208__auto__.call(null);(statearr_13709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___13710);
return statearr_13709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map