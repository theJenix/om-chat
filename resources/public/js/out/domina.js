// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_13838 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_13839 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_13840 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_13839,table_section_wrapper_13839,opt_wrapper_13838,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_13840,table_section_wrapper_13839,cell_wrapper_13840,opt_wrapper_13838,table_section_wrapper_13839,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_13839]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3431__auto__ = div.firstChild;if(cljs.core.truth_(and__3431__auto__))
{return div.firstChild.childNodes;
} else
{return and__3431__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__13845 = cljs.core.seq.call(null,tbody);var chunk__13846 = null;var count__13847 = 0;var i__13848 = 0;while(true){
if((i__13848 < count__13847))
{var child = cljs.core._nth.call(null,chunk__13846,i__13848);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__13849 = seq__13845;
var G__13850 = chunk__13846;
var G__13851 = count__13847;
var G__13852 = (i__13848 + 1);
seq__13845 = G__13849;
chunk__13846 = G__13850;
count__13847 = G__13851;
i__13848 = G__13852;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13845);if(temp__4092__auto__)
{var seq__13845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13845__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__13845__$1);{
var G__13853 = cljs.core.chunk_rest.call(null,seq__13845__$1);
var G__13854 = c__4191__auto__;
var G__13855 = cljs.core.count.call(null,c__4191__auto__);
var G__13856 = 0;
seq__13845 = G__13853;
chunk__13846 = G__13854;
count__13847 = G__13855;
i__13848 = G__13856;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__13845__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__13857 = cljs.core.next.call(null,seq__13845__$1);
var G__13858 = null;
var G__13859 = 0;
var G__13860 = 0;
seq__13845 = G__13857;
chunk__13846 = G__13858;
count__13847 = G__13859;
i__13848 = G__13860;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__13862 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__13862,0,null);var start_wrap = cljs.core.nth.call(null,vec__13862,1,null);var end_wrap = cljs.core.nth.call(null,vec__13862,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__13863 = wrapper.lastChild;
var G__13864 = (level - 1);
wrapper = G__13863;
level = G__13864;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3431__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3431__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj13866 = {};return obj13866;
})();
domina.nodes = (function nodes(content){if((function (){var and__3431__auto__ = content;if(and__3431__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3431__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4070__auto__ = (((content == null))?null:content);return (function (){var or__3443__auto__ = (domina.nodes[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.nodes["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3431__auto__ = nodeseq;if(and__3431__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3431__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4070__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3443__auto__ = (domina.single_node[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (domina.single_node["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3431__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3431__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3431__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__13867){
var mesg = cljs.core.seq(arglist__13867);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13868){
var mesg = cljs.core.seq(arglist__13868);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__13869){
var contents = cljs.core.seq(arglist__13869);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__13870_SHARP_){return p1__13870_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__13871_SHARP_,p2__13872_SHARP_){return goog.dom.insertChildAt(p1__13871_SHARP_,p2__13872_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__13874_SHARP_,p2__13873_SHARP_){return goog.dom.insertSiblingBefore(p2__13873_SHARP_,p1__13874_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__13876_SHARP_,p2__13875_SHARP_){return goog.dom.insertSiblingAfter(p2__13875_SHARP_,p1__13876_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__13878_SHARP_,p2__13877_SHARP_){return goog.dom.replaceNode(p2__13877_SHARP_,p1__13878_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__13883_13887 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13884_13888 = null;var count__13885_13889 = 0;var i__13886_13890 = 0;while(true){
if((i__13886_13890 < count__13885_13889))
{var n_13891 = cljs.core._nth.call(null,chunk__13884_13888,i__13886_13890);goog.style.setStyle(n_13891,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13892 = seq__13883_13887;
var G__13893 = chunk__13884_13888;
var G__13894 = count__13885_13889;
var G__13895 = (i__13886_13890 + 1);
seq__13883_13887 = G__13892;
chunk__13884_13888 = G__13893;
count__13885_13889 = G__13894;
i__13886_13890 = G__13895;
continue;
}
} else
{var temp__4092__auto___13896 = cljs.core.seq.call(null,seq__13883_13887);if(temp__4092__auto___13896)
{var seq__13883_13897__$1 = temp__4092__auto___13896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13883_13897__$1))
{var c__4191__auto___13898 = cljs.core.chunk_first.call(null,seq__13883_13897__$1);{
var G__13899 = cljs.core.chunk_rest.call(null,seq__13883_13897__$1);
var G__13900 = c__4191__auto___13898;
var G__13901 = cljs.core.count.call(null,c__4191__auto___13898);
var G__13902 = 0;
seq__13883_13887 = G__13899;
chunk__13884_13888 = G__13900;
count__13885_13889 = G__13901;
i__13886_13890 = G__13902;
continue;
}
} else
{var n_13903 = cljs.core.first.call(null,seq__13883_13897__$1);goog.style.setStyle(n_13903,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13904 = cljs.core.next.call(null,seq__13883_13897__$1);
var G__13905 = null;
var G__13906 = 0;
var G__13907 = 0;
seq__13883_13887 = G__13904;
chunk__13884_13888 = G__13905;
count__13885_13889 = G__13906;
i__13886_13890 = G__13907;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13908){
var content = cljs.core.first(arglist__13908);
arglist__13908 = cljs.core.next(arglist__13908);
var name = cljs.core.first(arglist__13908);
var value = cljs.core.rest(arglist__13908);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__13913_13917 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13914_13918 = null;var count__13915_13919 = 0;var i__13916_13920 = 0;while(true){
if((i__13916_13920 < count__13915_13919))
{var n_13921 = cljs.core._nth.call(null,chunk__13914_13918,i__13916_13920);n_13921.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13922 = seq__13913_13917;
var G__13923 = chunk__13914_13918;
var G__13924 = count__13915_13919;
var G__13925 = (i__13916_13920 + 1);
seq__13913_13917 = G__13922;
chunk__13914_13918 = G__13923;
count__13915_13919 = G__13924;
i__13916_13920 = G__13925;
continue;
}
} else
{var temp__4092__auto___13926 = cljs.core.seq.call(null,seq__13913_13917);if(temp__4092__auto___13926)
{var seq__13913_13927__$1 = temp__4092__auto___13926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13913_13927__$1))
{var c__4191__auto___13928 = cljs.core.chunk_first.call(null,seq__13913_13927__$1);{
var G__13929 = cljs.core.chunk_rest.call(null,seq__13913_13927__$1);
var G__13930 = c__4191__auto___13928;
var G__13931 = cljs.core.count.call(null,c__4191__auto___13928);
var G__13932 = 0;
seq__13913_13917 = G__13929;
chunk__13914_13918 = G__13930;
count__13915_13919 = G__13931;
i__13916_13920 = G__13932;
continue;
}
} else
{var n_13933 = cljs.core.first.call(null,seq__13913_13927__$1);n_13933.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13934 = cljs.core.next.call(null,seq__13913_13927__$1);
var G__13935 = null;
var G__13936 = 0;
var G__13937 = 0;
seq__13913_13917 = G__13934;
chunk__13914_13918 = G__13935;
count__13915_13919 = G__13936;
i__13916_13920 = G__13937;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13938){
var content = cljs.core.first(arglist__13938);
arglist__13938 = cljs.core.next(arglist__13938);
var name = cljs.core.first(arglist__13938);
var value = cljs.core.rest(arglist__13938);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__13943_13947 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13944_13948 = null;var count__13945_13949 = 0;var i__13946_13950 = 0;while(true){
if((i__13946_13950 < count__13945_13949))
{var n_13951 = cljs.core._nth.call(null,chunk__13944_13948,i__13946_13950);n_13951.removeAttribute(cljs.core.name.call(null,name));
{
var G__13952 = seq__13943_13947;
var G__13953 = chunk__13944_13948;
var G__13954 = count__13945_13949;
var G__13955 = (i__13946_13950 + 1);
seq__13943_13947 = G__13952;
chunk__13944_13948 = G__13953;
count__13945_13949 = G__13954;
i__13946_13950 = G__13955;
continue;
}
} else
{var temp__4092__auto___13956 = cljs.core.seq.call(null,seq__13943_13947);if(temp__4092__auto___13956)
{var seq__13943_13957__$1 = temp__4092__auto___13956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13943_13957__$1))
{var c__4191__auto___13958 = cljs.core.chunk_first.call(null,seq__13943_13957__$1);{
var G__13959 = cljs.core.chunk_rest.call(null,seq__13943_13957__$1);
var G__13960 = c__4191__auto___13958;
var G__13961 = cljs.core.count.call(null,c__4191__auto___13958);
var G__13962 = 0;
seq__13943_13947 = G__13959;
chunk__13944_13948 = G__13960;
count__13945_13949 = G__13961;
i__13946_13950 = G__13962;
continue;
}
} else
{var n_13963 = cljs.core.first.call(null,seq__13943_13957__$1);n_13963.removeAttribute(cljs.core.name.call(null,name));
{
var G__13964 = cljs.core.next.call(null,seq__13943_13957__$1);
var G__13965 = null;
var G__13966 = 0;
var G__13967 = 0;
seq__13943_13947 = G__13964;
chunk__13944_13948 = G__13965;
count__13945_13949 = G__13966;
i__13946_13950 = G__13967;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__13969 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__13969,0,null);var v = cljs.core.nth.call(null,vec__13969,1,null);if(cljs.core.truth_((function (){var and__3431__auto__ = k;if(cljs.core.truth_(and__3431__auto__))
{return v;
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__13970_SHARP_){var attr = attrs__$1.item(p1__13970_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__13977_13983 = cljs.core.seq.call(null,styles);var chunk__13978_13984 = null;var count__13979_13985 = 0;var i__13980_13986 = 0;while(true){
if((i__13980_13986 < count__13979_13985))
{var vec__13981_13987 = cljs.core._nth.call(null,chunk__13978_13984,i__13980_13986);var name_13988 = cljs.core.nth.call(null,vec__13981_13987,0,null);var value_13989 = cljs.core.nth.call(null,vec__13981_13987,1,null);domina.set_style_BANG_.call(null,content,name_13988,value_13989);
{
var G__13990 = seq__13977_13983;
var G__13991 = chunk__13978_13984;
var G__13992 = count__13979_13985;
var G__13993 = (i__13980_13986 + 1);
seq__13977_13983 = G__13990;
chunk__13978_13984 = G__13991;
count__13979_13985 = G__13992;
i__13980_13986 = G__13993;
continue;
}
} else
{var temp__4092__auto___13994 = cljs.core.seq.call(null,seq__13977_13983);if(temp__4092__auto___13994)
{var seq__13977_13995__$1 = temp__4092__auto___13994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13977_13995__$1))
{var c__4191__auto___13996 = cljs.core.chunk_first.call(null,seq__13977_13995__$1);{
var G__13997 = cljs.core.chunk_rest.call(null,seq__13977_13995__$1);
var G__13998 = c__4191__auto___13996;
var G__13999 = cljs.core.count.call(null,c__4191__auto___13996);
var G__14000 = 0;
seq__13977_13983 = G__13997;
chunk__13978_13984 = G__13998;
count__13979_13985 = G__13999;
i__13980_13986 = G__14000;
continue;
}
} else
{var vec__13982_14001 = cljs.core.first.call(null,seq__13977_13995__$1);var name_14002 = cljs.core.nth.call(null,vec__13982_14001,0,null);var value_14003 = cljs.core.nth.call(null,vec__13982_14001,1,null);domina.set_style_BANG_.call(null,content,name_14002,value_14003);
{
var G__14004 = cljs.core.next.call(null,seq__13977_13995__$1);
var G__14005 = null;
var G__14006 = 0;
var G__14007 = 0;
seq__13977_13983 = G__14004;
chunk__13978_13984 = G__14005;
count__13979_13985 = G__14006;
i__13980_13986 = G__14007;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__14014_14020 = cljs.core.seq.call(null,attrs);var chunk__14015_14021 = null;var count__14016_14022 = 0;var i__14017_14023 = 0;while(true){
if((i__14017_14023 < count__14016_14022))
{var vec__14018_14024 = cljs.core._nth.call(null,chunk__14015_14021,i__14017_14023);var name_14025 = cljs.core.nth.call(null,vec__14018_14024,0,null);var value_14026 = cljs.core.nth.call(null,vec__14018_14024,1,null);domina.set_attr_BANG_.call(null,content,name_14025,value_14026);
{
var G__14027 = seq__14014_14020;
var G__14028 = chunk__14015_14021;
var G__14029 = count__14016_14022;
var G__14030 = (i__14017_14023 + 1);
seq__14014_14020 = G__14027;
chunk__14015_14021 = G__14028;
count__14016_14022 = G__14029;
i__14017_14023 = G__14030;
continue;
}
} else
{var temp__4092__auto___14031 = cljs.core.seq.call(null,seq__14014_14020);if(temp__4092__auto___14031)
{var seq__14014_14032__$1 = temp__4092__auto___14031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14014_14032__$1))
{var c__4191__auto___14033 = cljs.core.chunk_first.call(null,seq__14014_14032__$1);{
var G__14034 = cljs.core.chunk_rest.call(null,seq__14014_14032__$1);
var G__14035 = c__4191__auto___14033;
var G__14036 = cljs.core.count.call(null,c__4191__auto___14033);
var G__14037 = 0;
seq__14014_14020 = G__14034;
chunk__14015_14021 = G__14035;
count__14016_14022 = G__14036;
i__14017_14023 = G__14037;
continue;
}
} else
{var vec__14019_14038 = cljs.core.first.call(null,seq__14014_14032__$1);var name_14039 = cljs.core.nth.call(null,vec__14019_14038,0,null);var value_14040 = cljs.core.nth.call(null,vec__14019_14038,1,null);domina.set_attr_BANG_.call(null,content,name_14039,value_14040);
{
var G__14041 = cljs.core.next.call(null,seq__14014_14032__$1);
var G__14042 = null;
var G__14043 = 0;
var G__14044 = 0;
seq__14014_14020 = G__14041;
chunk__14015_14021 = G__14042;
count__14016_14022 = G__14043;
i__14017_14023 = G__14044;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__14049_14053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14050_14054 = null;var count__14051_14055 = 0;var i__14052_14056 = 0;while(true){
if((i__14052_14056 < count__14051_14055))
{var node_14057 = cljs.core._nth.call(null,chunk__14050_14054,i__14052_14056);goog.dom.classes.add(node_14057,class$);
{
var G__14058 = seq__14049_14053;
var G__14059 = chunk__14050_14054;
var G__14060 = count__14051_14055;
var G__14061 = (i__14052_14056 + 1);
seq__14049_14053 = G__14058;
chunk__14050_14054 = G__14059;
count__14051_14055 = G__14060;
i__14052_14056 = G__14061;
continue;
}
} else
{var temp__4092__auto___14062 = cljs.core.seq.call(null,seq__14049_14053);if(temp__4092__auto___14062)
{var seq__14049_14063__$1 = temp__4092__auto___14062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14049_14063__$1))
{var c__4191__auto___14064 = cljs.core.chunk_first.call(null,seq__14049_14063__$1);{
var G__14065 = cljs.core.chunk_rest.call(null,seq__14049_14063__$1);
var G__14066 = c__4191__auto___14064;
var G__14067 = cljs.core.count.call(null,c__4191__auto___14064);
var G__14068 = 0;
seq__14049_14053 = G__14065;
chunk__14050_14054 = G__14066;
count__14051_14055 = G__14067;
i__14052_14056 = G__14068;
continue;
}
} else
{var node_14069 = cljs.core.first.call(null,seq__14049_14063__$1);goog.dom.classes.add(node_14069,class$);
{
var G__14070 = cljs.core.next.call(null,seq__14049_14063__$1);
var G__14071 = null;
var G__14072 = 0;
var G__14073 = 0;
seq__14049_14053 = G__14070;
chunk__14050_14054 = G__14071;
count__14051_14055 = G__14072;
i__14052_14056 = G__14073;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__14078_14082 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14079_14083 = null;var count__14080_14084 = 0;var i__14081_14085 = 0;while(true){
if((i__14081_14085 < count__14080_14084))
{var node_14086 = cljs.core._nth.call(null,chunk__14079_14083,i__14081_14085);goog.dom.classes.remove(node_14086,class$);
{
var G__14087 = seq__14078_14082;
var G__14088 = chunk__14079_14083;
var G__14089 = count__14080_14084;
var G__14090 = (i__14081_14085 + 1);
seq__14078_14082 = G__14087;
chunk__14079_14083 = G__14088;
count__14080_14084 = G__14089;
i__14081_14085 = G__14090;
continue;
}
} else
{var temp__4092__auto___14091 = cljs.core.seq.call(null,seq__14078_14082);if(temp__4092__auto___14091)
{var seq__14078_14092__$1 = temp__4092__auto___14091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14078_14092__$1))
{var c__4191__auto___14093 = cljs.core.chunk_first.call(null,seq__14078_14092__$1);{
var G__14094 = cljs.core.chunk_rest.call(null,seq__14078_14092__$1);
var G__14095 = c__4191__auto___14093;
var G__14096 = cljs.core.count.call(null,c__4191__auto___14093);
var G__14097 = 0;
seq__14078_14082 = G__14094;
chunk__14079_14083 = G__14095;
count__14080_14084 = G__14096;
i__14081_14085 = G__14097;
continue;
}
} else
{var node_14098 = cljs.core.first.call(null,seq__14078_14092__$1);goog.dom.classes.remove(node_14098,class$);
{
var G__14099 = cljs.core.next.call(null,seq__14078_14092__$1);
var G__14100 = null;
var G__14101 = 0;
var G__14102 = 0;
seq__14078_14082 = G__14099;
chunk__14079_14083 = G__14100;
count__14080_14084 = G__14101;
i__14081_14085 = G__14102;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__14107_14111 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14108_14112 = null;var count__14109_14113 = 0;var i__14110_14114 = 0;while(true){
if((i__14110_14114 < count__14109_14113))
{var node_14115 = cljs.core._nth.call(null,chunk__14108_14112,i__14110_14114);goog.dom.classes.toggle(node_14115,class$);
{
var G__14116 = seq__14107_14111;
var G__14117 = chunk__14108_14112;
var G__14118 = count__14109_14113;
var G__14119 = (i__14110_14114 + 1);
seq__14107_14111 = G__14116;
chunk__14108_14112 = G__14117;
count__14109_14113 = G__14118;
i__14110_14114 = G__14119;
continue;
}
} else
{var temp__4092__auto___14120 = cljs.core.seq.call(null,seq__14107_14111);if(temp__4092__auto___14120)
{var seq__14107_14121__$1 = temp__4092__auto___14120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14107_14121__$1))
{var c__4191__auto___14122 = cljs.core.chunk_first.call(null,seq__14107_14121__$1);{
var G__14123 = cljs.core.chunk_rest.call(null,seq__14107_14121__$1);
var G__14124 = c__4191__auto___14122;
var G__14125 = cljs.core.count.call(null,c__4191__auto___14122);
var G__14126 = 0;
seq__14107_14111 = G__14123;
chunk__14108_14112 = G__14124;
count__14109_14113 = G__14125;
i__14110_14114 = G__14126;
continue;
}
} else
{var node_14127 = cljs.core.first.call(null,seq__14107_14121__$1);goog.dom.classes.toggle(node_14127,class$);
{
var G__14128 = cljs.core.next.call(null,seq__14107_14121__$1);
var G__14129 = null;
var G__14130 = 0;
var G__14131 = 0;
seq__14107_14111 = G__14128;
chunk__14108_14112 = G__14129;
count__14109_14113 = G__14130;
i__14110_14114 = G__14131;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_14140__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__14136_14141 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14137_14142 = null;var count__14138_14143 = 0;var i__14139_14144 = 0;while(true){
if((i__14139_14144 < count__14138_14143))
{var node_14145 = cljs.core._nth.call(null,chunk__14137_14142,i__14139_14144);goog.dom.classes.set(node_14145,classes_14140__$1);
{
var G__14146 = seq__14136_14141;
var G__14147 = chunk__14137_14142;
var G__14148 = count__14138_14143;
var G__14149 = (i__14139_14144 + 1);
seq__14136_14141 = G__14146;
chunk__14137_14142 = G__14147;
count__14138_14143 = G__14148;
i__14139_14144 = G__14149;
continue;
}
} else
{var temp__4092__auto___14150 = cljs.core.seq.call(null,seq__14136_14141);if(temp__4092__auto___14150)
{var seq__14136_14151__$1 = temp__4092__auto___14150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14136_14151__$1))
{var c__4191__auto___14152 = cljs.core.chunk_first.call(null,seq__14136_14151__$1);{
var G__14153 = cljs.core.chunk_rest.call(null,seq__14136_14151__$1);
var G__14154 = c__4191__auto___14152;
var G__14155 = cljs.core.count.call(null,c__4191__auto___14152);
var G__14156 = 0;
seq__14136_14141 = G__14153;
chunk__14137_14142 = G__14154;
count__14138_14143 = G__14155;
i__14139_14144 = G__14156;
continue;
}
} else
{var node_14157 = cljs.core.first.call(null,seq__14136_14151__$1);goog.dom.classes.set(node_14157,classes_14140__$1);
{
var G__14158 = cljs.core.next.call(null,seq__14136_14151__$1);
var G__14159 = null;
var G__14160 = 0;
var G__14161 = 0;
seq__14136_14141 = G__14158;
chunk__14137_14142 = G__14159;
count__14138_14143 = G__14160;
i__14139_14144 = G__14161;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__14166_14170 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14167_14171 = null;var count__14168_14172 = 0;var i__14169_14173 = 0;while(true){
if((i__14169_14173 < count__14168_14172))
{var node_14174 = cljs.core._nth.call(null,chunk__14167_14171,i__14169_14173);goog.dom.setTextContent(node_14174,value);
{
var G__14175 = seq__14166_14170;
var G__14176 = chunk__14167_14171;
var G__14177 = count__14168_14172;
var G__14178 = (i__14169_14173 + 1);
seq__14166_14170 = G__14175;
chunk__14167_14171 = G__14176;
count__14168_14172 = G__14177;
i__14169_14173 = G__14178;
continue;
}
} else
{var temp__4092__auto___14179 = cljs.core.seq.call(null,seq__14166_14170);if(temp__4092__auto___14179)
{var seq__14166_14180__$1 = temp__4092__auto___14179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14166_14180__$1))
{var c__4191__auto___14181 = cljs.core.chunk_first.call(null,seq__14166_14180__$1);{
var G__14182 = cljs.core.chunk_rest.call(null,seq__14166_14180__$1);
var G__14183 = c__4191__auto___14181;
var G__14184 = cljs.core.count.call(null,c__4191__auto___14181);
var G__14185 = 0;
seq__14166_14170 = G__14182;
chunk__14167_14171 = G__14183;
count__14168_14172 = G__14184;
i__14169_14173 = G__14185;
continue;
}
} else
{var node_14186 = cljs.core.first.call(null,seq__14166_14180__$1);goog.dom.setTextContent(node_14186,value);
{
var G__14187 = cljs.core.next.call(null,seq__14166_14180__$1);
var G__14188 = null;
var G__14189 = 0;
var G__14190 = 0;
seq__14166_14170 = G__14187;
chunk__14167_14171 = G__14188;
count__14168_14172 = G__14189;
i__14169_14173 = G__14190;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__14195_14199 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14196_14200 = null;var count__14197_14201 = 0;var i__14198_14202 = 0;while(true){
if((i__14198_14202 < count__14197_14201))
{var node_14203 = cljs.core._nth.call(null,chunk__14196_14200,i__14198_14202);goog.dom.forms.setValue(node_14203,value);
{
var G__14204 = seq__14195_14199;
var G__14205 = chunk__14196_14200;
var G__14206 = count__14197_14201;
var G__14207 = (i__14198_14202 + 1);
seq__14195_14199 = G__14204;
chunk__14196_14200 = G__14205;
count__14197_14201 = G__14206;
i__14198_14202 = G__14207;
continue;
}
} else
{var temp__4092__auto___14208 = cljs.core.seq.call(null,seq__14195_14199);if(temp__4092__auto___14208)
{var seq__14195_14209__$1 = temp__4092__auto___14208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14195_14209__$1))
{var c__4191__auto___14210 = cljs.core.chunk_first.call(null,seq__14195_14209__$1);{
var G__14211 = cljs.core.chunk_rest.call(null,seq__14195_14209__$1);
var G__14212 = c__4191__auto___14210;
var G__14213 = cljs.core.count.call(null,c__4191__auto___14210);
var G__14214 = 0;
seq__14195_14199 = G__14211;
chunk__14196_14200 = G__14212;
count__14197_14201 = G__14213;
i__14198_14202 = G__14214;
continue;
}
} else
{var node_14215 = cljs.core.first.call(null,seq__14195_14209__$1);goog.dom.forms.setValue(node_14215,value);
{
var G__14216 = cljs.core.next.call(null,seq__14195_14209__$1);
var G__14217 = null;
var G__14218 = 0;
var G__14219 = 0;
seq__14195_14199 = G__14216;
chunk__14196_14200 = G__14217;
count__14197_14201 = G__14218;
i__14198_14202 = G__14219;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3431__auto__ = allows_inner_html_QMARK_;if(and__3431__auto__)
{var and__3431__auto____$1 = (function (){var or__3443__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3431__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
})()))
{var value_14230 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__14226_14231 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14227_14232 = null;var count__14228_14233 = 0;var i__14229_14234 = 0;while(true){
if((i__14229_14234 < count__14228_14233))
{var node_14235 = cljs.core._nth.call(null,chunk__14227_14232,i__14229_14234);node_14235.innerHTML = value_14230;
{
var G__14236 = seq__14226_14231;
var G__14237 = chunk__14227_14232;
var G__14238 = count__14228_14233;
var G__14239 = (i__14229_14234 + 1);
seq__14226_14231 = G__14236;
chunk__14227_14232 = G__14237;
count__14228_14233 = G__14238;
i__14229_14234 = G__14239;
continue;
}
} else
{var temp__4092__auto___14240 = cljs.core.seq.call(null,seq__14226_14231);if(temp__4092__auto___14240)
{var seq__14226_14241__$1 = temp__4092__auto___14240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14226_14241__$1))
{var c__4191__auto___14242 = cljs.core.chunk_first.call(null,seq__14226_14241__$1);{
var G__14243 = cljs.core.chunk_rest.call(null,seq__14226_14241__$1);
var G__14244 = c__4191__auto___14242;
var G__14245 = cljs.core.count.call(null,c__4191__auto___14242);
var G__14246 = 0;
seq__14226_14231 = G__14243;
chunk__14227_14232 = G__14244;
count__14228_14233 = G__14245;
i__14229_14234 = G__14246;
continue;
}
} else
{var node_14247 = cljs.core.first.call(null,seq__14226_14241__$1);node_14247.innerHTML = value_14230;
{
var G__14248 = cljs.core.next.call(null,seq__14226_14241__$1);
var G__14249 = null;
var G__14250 = 0;
var G__14251 = 0;
seq__14226_14231 = G__14248;
chunk__14227_14232 = G__14249;
count__14228_14233 = G__14250;
i__14229_14234 = G__14251;
continue;
}
}
} else
{}
}
break;
}
}catch (e14225){if((e14225 instanceof Error))
{var e_14252 = e14225;domina.replace_children_BANG_.call(null,content,value_14230);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14225;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3431__auto__ = bubble;if(cljs.core.truth_(and__3431__auto__))
{return (value == null);
} else
{return and__3431__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3443__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__14259_14263 = cljs.core.seq.call(null,children);var chunk__14260_14264 = null;var count__14261_14265 = 0;var i__14262_14266 = 0;while(true){
if((i__14262_14266 < count__14261_14265))
{var child_14267 = cljs.core._nth.call(null,chunk__14260_14264,i__14262_14266);frag.appendChild(child_14267);
{
var G__14268 = seq__14259_14263;
var G__14269 = chunk__14260_14264;
var G__14270 = count__14261_14265;
var G__14271 = (i__14262_14266 + 1);
seq__14259_14263 = G__14268;
chunk__14260_14264 = G__14269;
count__14261_14265 = G__14270;
i__14262_14266 = G__14271;
continue;
}
} else
{var temp__4092__auto___14272 = cljs.core.seq.call(null,seq__14259_14263);if(temp__4092__auto___14272)
{var seq__14259_14273__$1 = temp__4092__auto___14272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14259_14273__$1))
{var c__4191__auto___14274 = cljs.core.chunk_first.call(null,seq__14259_14273__$1);{
var G__14275 = cljs.core.chunk_rest.call(null,seq__14259_14273__$1);
var G__14276 = c__4191__auto___14274;
var G__14277 = cljs.core.count.call(null,c__4191__auto___14274);
var G__14278 = 0;
seq__14259_14263 = G__14275;
chunk__14260_14264 = G__14276;
count__14261_14265 = G__14277;
i__14262_14266 = G__14278;
continue;
}
} else
{var child_14279 = cljs.core.first.call(null,seq__14259_14273__$1);frag.appendChild(child_14279);
{
var G__14280 = cljs.core.next.call(null,seq__14259_14273__$1);
var G__14281 = null;
var G__14282 = 0;
var G__14283 = 0;
seq__14259_14263 = G__14280;
chunk__14260_14264 = G__14281;
count__14261_14265 = G__14282;
i__14262_14266 = G__14283;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14253_SHARP_,p2__14254_SHARP_){return f.call(null,p1__14253_SHARP_,p2__14254_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3431__auto__ = obj;if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3431__auto____$1)
{return obj.length;
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__14285 = list_thing;if(G__14285)
{var bit__4093__auto__ = (G__14285.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__14285.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14285);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14285);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__14286 = content;if(G__14286)
{var bit__4093__auto__ = (G__14286.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__14286.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14286.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14286);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14286);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__14287 = content;if(G__14287)
{var bit__4093__auto__ = (G__14287.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__14287.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14287.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14287);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14287);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map