"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,a,c=n(439),u=n(791),o=n(689),i=n(168),s=n(444),p=s.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 0 20px;\n"]))),l=s.ZP.p(a||(a=(0,i.Z)(["\n  padding-left: 20px;\n"]))),f=n(851),v=n(184),h=function(){var t=(0,o.UO)().movieID,e=(0,u.useState)([]),n=(0,c.Z)(e,2),r=n[0],a=n[1];return(0,u.useEffect)((function(){(0,f.r7)(t).then((function(t){return a(t.results)}))}),[t]),r.length<1?"We don't have any reviews for this movie.":(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p,{children:r.map((function(t){var e=t.author,n=t.content,r=t.id;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("h5",{children:["Author: ",e]}),(0,v.jsx)(l,{children:n})]},r)}))})})}},851:function(t,e,n){n.d(e,{Xd:function(){return p},l7:function(){return s},r7:function(){return f},uV:function(){return l},wr:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(243),o="3969575b7b3cc6462971102333f767aa",i=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 3:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(o,"&include_adult=false&language=en-US&page=1"));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o));case 3:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.a232f2fc.chunk.js.map