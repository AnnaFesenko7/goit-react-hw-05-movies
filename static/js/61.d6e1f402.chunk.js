"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[61],{61:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r,c,i=t(885),o=t(791),s=t(504),u=t(871),a=t(237),l=t(168),h=t(31),f=h.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),d=h.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 30px;\n"]))),j=t(184);var p=function(){var n=(0,o.useState)(null),e=(0,i.Z)(n,2),t=e[0],r=e[1],c=(0,u.UO)().movieId,l=(0,u.s0)();return console.log(l),(0,o.useEffect)((function(){a.r4(c).then((function(n){return n})).then(r)}),[c]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("button",{onClick:function(){return l(-1)},children:"Go back"}),t&&(0,j.jsxs)(f,{children:[(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(t.poster_path),alt:t.title}),(0,j.jsxs)(d,{children:[(0,j.jsxs)("h2",{children:[t.original_title,"(",t.release_date.split("-")[0],")"]}),(0,j.jsxs)("p",{children:["User Score: ",10*t.vote_average," %"]}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:t.overview}),(0,j.jsx)("h3",{children:"Genres"}),t.genres.map((function(n){return n.name})).join(" ")]})]}),(0,j.jsx)("hr",{}),(0,j.jsx)("h2",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(s.rU,{to:"cost",replace:!0,children:"Cost"})}),(0,j.jsx)("li",{children:(0,j.jsx)(s.rU,{to:"reviews",replace:!0,children:"Reviews"})})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(u.j3,{})]})}},237:function(n,e,t){t.d(e,{On:function(){return a},PW:function(){return u},hI:function(){return s},jc:function(){return i},r4:function(){return o}});var r="07bdf4dcb84de665a189c3d6f4d9143e",c="https://api.themoviedb.org/3";function i(){return l("".concat(c).concat("/trending/movie/day","?api_key=").concat(r)).then((function(n){return n.results}))}function o(n){return l("".concat(c,"/movie/").concat(n,"?api_key=").concat(r))}function s(n){return l("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.cast}))}function u(n){return l("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.results}))}function a(n){return l("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(n){return n.results}))}function l(n){return fetch(n).then((function(n){if(!n.ok)throw Error(n.statusText);return n.json()}))}}}]);
//# sourceMappingURL=61.d6e1f402.chunk.js.map