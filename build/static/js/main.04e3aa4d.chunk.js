(this.webpackJsonpmovieflix=this.webpackJsonpmovieflix||[]).push([[0],{117:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(36),r=c.n(a),i=c(16),o=c(12),l=c(173),j=c(179),d=c(180),u=c(181),b=c(182),h=c(34),p=c(1);function v(e){var t=e.activePageHome,c=e.activePageAbout,n=e.activePageCompleteCatalog,s=e.activePageSettings;return Object(p.jsxs)("aside",{className:h.sideMenu,children:[Object(p.jsxs)("div",{className:h.logo,children:[Object(p.jsx)(l.a,{}),Object(p.jsxs)("h1",{children:["MOVIE",Object(p.jsx)("span",{className:h.flixTitle,children:"FLIX"})]})]}),Object(p.jsxs)("nav",{className:h.menu,children:[Object(p.jsx)("h2",{children:"Menu"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:t?h.active:"",children:Object(p.jsxs)(i.b,{to:"/",children:[Object(p.jsx)(j.a,{})," Home"]})}),Object(p.jsx)("li",{className:c?h.active:"",children:Object(p.jsxs)(i.b,{to:"/",children:[Object(p.jsx)(d.a,{})," About"]})}),Object(p.jsx)("li",{className:n?h.active:"",children:Object(p.jsxs)(i.b,{to:"/",children:[Object(p.jsx)(u.a,{})," Complete catalog"]})})]})]}),Object(p.jsxs)("footer",{children:[Object(p.jsx)("h2",{children:"General"}),Object(p.jsx)("ul",{children:Object(p.jsx)("li",{className:s?h.active:"",children:Object(p.jsxs)(i.b,{to:"/",children:[Object(p.jsx)(b.a,{})," Settings"," "]})})})]})]})}var m=c(7),O=c(15),x=c.n(O),f=c(18),g=c(43),y=c(196),_=c(199),N=c(194),M=(c(117),c(27)),w=c.n(M),k=function(){var e=Object(f.a)(x.a.mark((function e(t,c){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/tv","https://api.themoviedb.org/3/search/movie",n={method:"GET",url:"tv"===t?"https://api.themoviedb.org/3/search/tv":"https://api.themoviedb.org/3/search/movie",params:{language:"en-US",api_key:"0b001cf6e81fdfed426c49bcb1a2de2e",query:c}},e.next=6,w.a.request(n).then((function(e){return e.data})).catch((function(e){console.log(e.message),console.log(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();function S(e){var t=e.open,c=e.setOpen,s=e.typeMedia,a=Object(n.useState)([]),r=Object(m.a)(a,2),o=r[0],l=r[1],j=Object(n.useState)(""),d=Object(m.a)(j,2),u=d[0],b=d[1],h=function(){return c(!1)},v=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(s,u);case 2:t=e.sent,l(t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u&&v()}),[u,s]),Object(p.jsx)(y.a,{keepMounted:!0,open:t,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(p.jsxs)(_.a,{className:"modal-search",children:[Object(p.jsx)(N.a,{className:"input-movie",id:"standard-basic",label:"Movie title",variant:"standard",onChange:function(e){return b(e.target.value)}}),Object(g.isEmpty)(u)?Object(p.jsx)("h3",{children:"Try type something..."}):o.map((function(e){return Object(p.jsx)(i.b,{onClick:h,to:"/details/".concat((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name),"/").concat(e.id,"/").concat(s),className:"movie-title",children:Object(p.jsx)("h3",{children:"tv"===s?null===e||void 0===e?void 0:e.name:null===e||void 0===e?void 0:e.title})},null===e||void 0===e?void 0:e.id)}))]})})}var C=c(20),E=c(188);function A(e){var t=e.typeMedia,c=Object(n.useState)(!1),s=Object(m.a)(c,2),a=s[0],r=s[1];return Object(p.jsxs)("aside",{className:C.sideMenuSearch,children:[Object(p.jsx)("div",{className:C.searchBox,children:Object(p.jsxs)("button",{onClick:function(){return r(!0)},children:[Object(p.jsx)(E.a,{})," Search"]})}),Object(p.jsxs)("div",{className:C.moviesSideBar,children:[Object(p.jsx)("h2",{children:"Favorite movies"}),Object(p.jsxs)("div",{className:C.posterMovies,children:[Object(p.jsxs)("div",{className:C.posterInfo,children:[Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg",alt:"poster"}),Object(p.jsxs)("div",{className:C.infos,children:[Object(p.jsxs)("div",{className:C.nameAndGenres,children:[Object(p.jsx)("h4",{children:"Eternos"}),Object(p.jsx)("p",{children:"Action, Adventure, Fiction"})]}),Object(p.jsx)("div",{className:C.voteMovie,children:Object(p.jsx)("p",{children:"5.5"})})]})]}),Object(p.jsxs)("div",{className:C.posterInfo,children:[Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg",alt:"poster"}),Object(p.jsxs)("div",{className:C.infos,children:[Object(p.jsxs)("div",{className:C.nameAndGenres,children:[Object(p.jsx)("h4",{children:"Eternos"}),Object(p.jsx)("p",{children:"Action, Adventure, Fiction"})]}),Object(p.jsx)("div",{className:C.voteMovie,children:Object(p.jsx)("p",{children:"5.5"})})]})]}),Object(p.jsxs)("div",{className:C.posterInfo,children:[Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w154//mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg",alt:"poster"}),Object(p.jsxs)("div",{className:C.infos,children:[Object(p.jsxs)("div",{className:C.nameAndGenres,children:[Object(p.jsx)("h4",{children:"Eternos"}),Object(p.jsx)("p",{children:"Action, Adventure, Fiction"})]}),Object(p.jsx)("div",{className:C.voteMovie,children:Object(p.jsx)("p",{children:"5.5"})})]})]})]}),Object(p.jsx)(i.b,{className:C.buttonSeeMore,to:"/",children:"See more"})]}),Object(p.jsx)(S,{open:a,setOpen:r,typeMedia:t})]})}var F=c(189),T=c(190);c(137);function I(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),c=t[0],s=t[1];return Object(p.jsx)("button",{onClick:function(){s(!c)},className:"button-favorite",children:c?Object(p.jsx)(F.a,{}):Object(p.jsx)(T.a,{})})}c(138);var U=c(191),L=c(200),B=c(91),G=function(){var e=Object(f.a)(x.a.mark((function e(t,c){var n,s,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/tv/".concat(c),s="https://api.themoviedb.org/3/movie/".concat(c),a={method:"GET",url:"tv"===t?n:s,params:{language:"en-US",api_key:"0b001cf6e81fdfed426c49bcb1a2de2e"}},e.next=6,w.a.request(a).then((function(e){return e.data})).catch((function(e){console.log(e.message),console.log(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();function q(){var e=Object(o.g)(),t=e.id,c=e.typeMedia,s=Object(o.f)(),a=Object(n.useState)(),r=Object(m.a)(a,2),i=r[0],l=r[1],j=Object(n.useState)(!0),d=Object(m.a)(j,2),u=d[0],b=d[1],h=function(){var e=Object(f.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(c,t);case 2:n=e.sent,l(n),b(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){t&&h()}),[t]);return Object(p.jsx)(p.Fragment,{children:u?Object(p.jsx)(L.a,{variant:"rect",width:210,height:118}):Object(p.jsxs)("div",{className:"details-container",children:[Object(p.jsx)("img",{className:"bg-image",src:"https://image.tmdb.org/t/p/w1280/".concat(null===i||void 0===i?void 0:i.backdrop_path),alt:"poster"}),Object(p.jsxs)("div",{className:"details-content",children:[Object(p.jsxs)("div",{className:"extra-contents",children:[Object(p.jsxs)("button",{class:"button-back-home",onClick:function(){return s(-1)},children:[Object(p.jsx)(U.a,{})," Back"]}),Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(i.poster_path),alt:"poster-movie"}),Object(p.jsxs)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(p.jsx)(B.a,{icon:"simple-icons:imdb",color:"#ffdb58",width:"40",height:"40"})," ",Object(p.jsx)("span",{style:{margin:"0 1rem"},children:(null===i||void 0===i?void 0:i.vote_average)<=0?"not exists yet":null===i||void 0===i?void 0:i.vote_average.toFixed(1)})]}),Object(p.jsx)("p",{children:"movies"===c?Object(p.jsxs)(p.Fragment,{children:["Runtime: ",Object(p.jsx)("span",{children:function(e){var t=Math.floor(e/60),c=e%60,n="00".concat(t).slice(-2),s="00".concat(c).slice(-2);return"".concat(n,"h").concat(s)}(null===i||void 0===i?void 0:i.runtime)})]}):Object(p.jsxs)("p",{children:["Episodes: ",Object(p.jsx)("span",{children:null===i||void 0===i?void 0:i.number_of_episodes})," ",Object(p.jsx)("br",{}),"Seasons: ",Object(p.jsx)("span",{children:null===i||void 0===i?void 0:i.number_of_seasons})]})})]}),Object(p.jsxs)("div",{className:"details-texts",children:[Object(p.jsx)("h1",{style:{color:"#FFF"},children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)}),Object(p.jsx)("div",{className:"genres",children:i.genres.map((function(e){return Object(p.jsx)("div",{className:"genre",children:Object(p.jsx)("h4",{children:e.name})},e.id)}))}),Object(p.jsxs)("section",{className:"overview-movie",style:{color:"#FFF"},children:[Object(p.jsx)("h3",{children:"Overview"}),Object(p.jsx)("p",{children:null===i||void 0===i?void 0:i.overview}),Object(p.jsxs)("div",{className:"favorite-movie",children:[Object(p.jsx)(I,{})," Add movie to yours favorite"]})]})]})]})]})})}var z=c(192),P=c(201),Z=c(90),R=c(197);c(139);function H(){var e=s.a.useState(null),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Boolean(c),r=function(){n(null)},o={display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#000"};return Object(p.jsxs)("header",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(P.a,{id:"basic-button","aria-controls":a?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:function(e){n(e.currentTarget)},children:Object(p.jsx)(z.a,{})}),Object(p.jsxs)(Z.a,{id:"basic-menu",anchorEl:c,open:a,onClose:r,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(p.jsx)(R.a,{onClick:r,children:Object(p.jsxs)(i.b,{style:o,to:"/",children:[Object(p.jsx)(j.a,{})," Home"]})}),Object(p.jsx)(R.a,{nClick:r,children:Object(p.jsxs)(i.b,{style:o,to:"/",children:[Object(p.jsx)(d.a,{})," About"]})}),Object(p.jsx)(R.a,{nClick:r,children:Object(p.jsxs)(i.b,{style:o,to:"/",children:[Object(p.jsx)(u.a,{})," Complete catalog"]})}),Object(p.jsx)(R.a,{nClick:r,children:Object(p.jsxs)(i.b,{style:o,to:"/",children:[Object(p.jsx)(b.a,{})," Settings"]})}),Object(p.jsx)(R.a,{nClick:r,children:Object(p.jsxs)(i.b,{style:o,to:"/",children:[Object(p.jsx)(T.a,{})," Favorites"]})})]})]}),Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)(l.a,{}),Object(p.jsxs)("h1",{children:["MOVIE",Object(p.jsx)("span",{className:"flixTitle",children:"FLIX"})]})]})]})}function D(){var e=Object(o.g)().typeMedia;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(H,{}),Object(p.jsxs)("main",{children:[Object(p.jsx)(v,{}),Object(p.jsx)(q,{}),Object(p.jsx)(A,{typeMedia:e})]})]})}c(140),c(141);var V=c(193);c(142);function X(e){var t=e.movie,c=void 0===t?{}:t,s=e.typeMedia,a=Object(n.useState)(!0),r=Object(m.a)(a,2),o=r[0],l=r[1],j=(null===c||void 0===c?void 0:c.title)||(null===c||void 0===c?void 0:c.name);return j=j.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g,""),Object(n.useEffect)((function(){Object(g.isEmpty)(c)||l(!1)}),[c]),Object(p.jsx)("div",{className:"item",children:o?Object(p.jsx)(L.a,{variant:"rect",width:"100%",height:"60%"}):Object(p.jsxs)(i.b,{to:"/details/".concat(j,"/").concat(c.id,"/").concat(s),className:"poster",children:[Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+c.poster_path,alt:"movie poster"}),Object(p.jsx)("div",{className:"info",children:Object(p.jsx)("h3",{children:"Click for more details"})})]})})}var J=function(){var e=Object(f.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/tv/airing_today","https://api.themoviedb.org/3/movie/now_playing",c={method:"GET",url:"tv"===t?"https://api.themoviedb.org/3/tv/airing_today":"https://api.themoviedb.org/3/movie/now_playing",params:{language:"en-US",api_key:"0b001cf6e81fdfed426c49bcb1a2de2e"},headers:{}},e.next=6,w.a.request(c).then((function(e){return e.data})).catch((function(e){console.log(e.message),console.log(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"https://api.themoviedb.org/3/movie/upcoming",params:{language:"en-US",api_key:"0b001cf6e81fdfed426c49bcb1a2de2e"},headers:{}},e.next=3,w.a.request(t).then((function(e){return e.data})).catch((function(e){console.log(e.message),console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(f.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/tv/top_rated","https://api.themoviedb.org/3/movie/top_rated",c={method:"GET",url:"tv"===t?"https://api.themoviedb.org/3/tv/top_rated":"https://api.themoviedb.org/3/movie/top_rated",params:{language:"en-US",api_key:"0b001cf6e81fdfed426c49bcb1a2de2e"},headers:{}},e.next=6,w.a.request(c).then((function(e){return e.data})).catch((function(e){console.log(e.message),console.log(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(f.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/tv/popular","https://api.themoviedb.org/3/movie/popular",c={method:"GET",url:"tv"===t?"https://api.themoviedb.org/3/tv/popular":"https://api.themoviedb.org/3/movie/popular",params:{language:"en-US",api_key:"0b001cf6e81fdfed426c49bcb1a2de2e"},headers:{}},e.next=6,w.a.request(c).then((function(e){return e.data})).catch((function(e){console.log(e.message),console.log(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function W(e){var t=e.movieUrlApi,c=e.movieCategory,s=e.typeMedia,a=Object(n.useState)([]),r=Object(m.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(!0),j=Object(m.a)(l,2),d=j[0],u=j[1],b=Object(n.useRef)(null),h=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="now-playing"===e.t0?3:"upcoming"===e.t0?6:"top-rated"===e.t0?9:"popular"===e.t0?12:15;break;case 3:return e.next=5,J(s);case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,Q();case 8:return e.abrupt("return",e.sent);case 9:return e.next=11,K(s);case 11:return e.abrupt("return",e.sent);case 12:return e.next=14,Y(s);case 14:return e.abrupt("return",e.sent);case 15:return e.abrupt("break",16);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,h();case 3:t=e.sent,o(null===t||void 0===t?void 0:t.results),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){v()}),[s]);var O=function(e){e.preventDefault(),b.current.scrollLeft-=800},y=function(e){e.preventDefault(),b.current.scrollLeft+=800};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"header-carousel",children:[Object(p.jsx)("h1",{style:{color:"white",margin:"1rem"},children:c}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsxs)("button",{onClick:O,children:[Object(p.jsx)(U.a,{})," "]}),Object(p.jsx)("button",{onClick:y,children:Object(p.jsx)(V.a,{})})]})]}),Object(p.jsxs)("div",{className:"carousel-container",children:[Object(p.jsxs)("button",{onClick:O,children:[Object(p.jsx)(U.a,{})," "]}),Object(p.jsx)("div",{className:"carousel",ref:b,children:d||Object(g.isEmpty)(i)?Object(p.jsx)(L.a,{variant:"rect",width:"100%",height:"60%"}):i.map((function(e){return Object(p.jsx)(X,{typeMedia:s,movie:e},e.id)}))}),Object(p.jsx)("button",{onClick:y,children:Object(p.jsx)(V.a,{})})]})]})}function $(e){var t=e.typeMedia,c=void 0===t?"movies":t,s=Object(n.useState)(!1),a=Object(m.a)(s,2),r=a[0],o=a[1];return Object(p.jsxs)("main",{className:"catalog-container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"filtro",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(i.b,{to:"/tv",children:Object(p.jsx)(P.a,{variant:"tv"===c?"contained":"outlined",children:"TV Series"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(i.b,{to:"/movies",children:Object(p.jsx)(P.a,{variant:"tv"===c?"outlined":"contained",children:"Movies"})})})]})}),Object(p.jsx)("div",{className:"searchBox",children:Object(p.jsxs)("button",{onClick:function(){return o(!0)},children:[Object(p.jsx)(E.a,{})," Search"]})})]}),Object(p.jsxs)("div",{className:"carousels-container",children:[Object(p.jsx)(W,{movieUrlApi:"popular",typeMedia:c,movieCategory:"movies"===c?"Popular Movies":"Popular Tv Shows"}),Object(p.jsx)(W,{movieUrlApi:"now-playing",typeMedia:c,movieCategory:"movies"===c?"Movies now playing":"Tv Shows airing today"}),"movies"===c?Object(p.jsx)(W,{movieUrlApi:"upcoming",typeMedia:c,movieCategory:"Movies upcoming"}):null,Object(p.jsx)(W,{movieUrlApi:"top-rated",typeMedia:c,movieCategory:"movies"===c?"Top rated Movies":"Top rated Tv Shows"})]}),Object(p.jsx)(S,{open:r,setOpen:o,typeMedia:c})]})}function ee(){var e=Object(o.g)().typeMedia;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(H,{}),Object(p.jsxs)("main",{children:[Object(p.jsx)(v,{activePageHome:!0}),Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)($,{typeMedia:e})}),Object(p.jsx)(A,{typeMedia:e})]})]})}var te=function(){return Object(p.jsx)(i.a,{basename:"",children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",element:Object(p.jsx)(ee,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/:typeMedia",element:Object(p.jsx)(ee,{})}),Object(p.jsx)(o.a,{exact:!0,path:"/details/:movieName/:id/:typeMedia",element:Object(p.jsx)(D,{})})]})})};c(143);r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(te,{})}),document.getElementById("root"))},20:function(e,t,c){e.exports={sideMenuSearch:"style_sideMenuSearch__Yb8f9",searchBox:"style_searchBox__48RIB",moviesSideBar:"style_moviesSideBar__fBzZL",posterMovies:"style_posterMovies__EdTLQ",posterInfo:"style_posterInfo__XlCNc",nameAndGenres:"style_nameAndGenres__1ppLd",voteMovie:"style_voteMovie__2IMoh",buttonSeeMore:"style_buttonSeeMore__1HrNm"}},34:function(e,t,c){e.exports={sideMenu:"style_sideMenu__3yjZ4",logo:"style_logo__n12Q8",flixTitle:"style_flixTitle__EuZn1",menu:"style_menu__X1g57",active:"style_active__VAK3j"}}},[[144,1,2]]]);
//# sourceMappingURL=main.04e3aa4d.chunk.js.map