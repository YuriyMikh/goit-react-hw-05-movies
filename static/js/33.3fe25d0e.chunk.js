"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,a,o,c,i,s,u=t(439),p=t(791),l=t(689),d=t(87),v=t(851),h=t(168),f=t(444),x=f.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),g=f.ZP.img(a||(a=(0,h.Z)(["\n  width: 250px;\n"]))),m=f.ZP.ul(o||(o=(0,h.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 10px;\n"]))),b=f.ZP.li(c||(c=(0,h.Z)(["\n  padding: 5px ;\n    \n"]))),w=f.ZP.p(i||(i=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),Z=(0,f.ZP)(d.rU)(s||(s=(0,h.Z)(["\n  display: block;\n  max-width: 80px;\n  margin-bottom: 10px;\n  /* border-radius: 8px; */\n  padding: 3px 12px;\n  /* border: 1px solid black; */\n  /* background-color: rgb(255, 170, 170); */\n  &:hover {\n    cursor: pointer;\n    /* background-color: rgb(255, 240, 240); */\n  }\n"]))),j=t(184),k=function(){var e,n=(0,l.UO)().movieID,t=(0,p.useState)(null),r=(0,u.Z)(t,2),a=r[0],o=r[1],c=(0,l.TH)();if((0,p.useEffect)((function(){(0,v.l7)(n).then((function(e){console.log(e);var n=e.title,t=e.poster_path,r=e.vote_average,a=e.overview,c=e.genres;o({photo:"https://image.tmdb.org/t/p/original/".concat(t),title:n,votes:10*r,overview:a,genres:c})}))}),[n]),a){var i=a.photo,s=a.title,h=a.votes,f=a.overview,k=a.genres;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Z,{to:(null===c||void 0===c||null===(e=c.state)||void 0===e?void 0:e.from)||"/",children:"Go back"}),(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{src:i,alt:s}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:s}),(0,j.jsxs)("p",{children:["User score: ",null===h||void 0===h?void 0:h.toFixed(2),"%"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:f}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)(m,{children:null===k||void 0===k?void 0:k.map((function(e){return(0,j.jsx)(b,{children:e.name},e.id)}))})]})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(w,{children:"Additional information"}),(0,j.jsxs)(m,{children:[(0,j.jsx)(b,{children:(0,j.jsx)(d.rU,{state:c.state,to:"cast",children:"Cast"})}),(0,j.jsx)(b,{children:(0,j.jsx)(d.rU,{state:c.state,to:"reviews",children:"Reviews"})})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(l.j3,{})]})}}},851:function(e,n,t){t.d(n,{Xd:function(){return p},l7:function(){return u},r7:function(){return d},uV:function(){return l},wr:function(){return s}});var r=t(861),a=t(757),o=t.n(a),c=t(243),i="3969575b7b3cc6462971102333f767aa",s=function(){var e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat(i,"&include_adult=false&language=en-US&page=1"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.3fe25d0e.chunk.js.map