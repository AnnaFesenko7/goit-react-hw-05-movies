"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[192],{192:function(t,n,e){e.r(n);var r=e(885),c=e(791),o=e(504),u=e(237),i=e(184);n.default=function(){var t=(0,c.useState)(null),n=(0,r.Z)(t,2),e=n[0],a=n[1],s=(0,c.useState)(null),f=(0,r.Z)(s,2),h=f[0],d=f[1];return(0,c.useEffect)((function(){u.jc().then(a).catch(d)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),e&&(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))}),(0,i.jsx)("hr",{}),h&&(0,i.jsx)("strong",{children:h})]})}},237:function(t,n,e){e.d(n,{On:function(){return s},PW:function(){return a},hI:function(){return i},jc:function(){return o},r4:function(){return u}});var r="07bdf4dcb84de665a189c3d6f4d9143e",c="https://api.themoviedb.org/3";function o(){return f("".concat(c).concat("/trending/movie/day","?api_key=").concat(r)).then((function(t){if(0===t.total_pages)throw Error(t.statusText);return t})).then((function(t){return t.results}))}function u(t){return f("".concat(c,"/movie/").concat(t,"?api_key=").concat(r))}function i(t){return f("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(r)).then((function(t){return t.cast}))}function a(t){return f("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(r)).then((function(t){return t.results}))}function s(t){return f("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(t)).then((function(t){if(0===t.total_pages)throw Error(t.statusText);return t})).then((function(t){return t.results}))}function f(t){return fetch(t).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()}))}}}]);
//# sourceMappingURL=192.571b5130.chunk.js.map