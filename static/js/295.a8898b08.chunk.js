"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295,76,168],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});r(791);var n="Cast_castList__ARoWn",a="Cast_castItem__-Jcfe",s="Cast_castImage__d8bQP",i="Cast_castName__-i08u",c="Cast_castCharacter__Rliw1",o=r(184),u=function(e){var t=e.cast;return t?(0,o.jsx)("ul",{className:n,children:t.map((function(e){var t=e.id,r=e.name,n=e.character,u=e.profilePath;return(0,o.jsxs)("li",{className:a,children:[u&&(0,o.jsx)("img",{src:"".concat("http://image.tmdb.org/t/p/w185").concat(u),alt:r,className:s}),(0,o.jsx)("h4",{className:i,children:r}),(0,o.jsxs)("h4",{className:c,children:["Character: ",n]})]},t)}))}):null}},854:function(e,t,r){r(791);var n=r(184);t.Z=function(){return(0,n.jsx)("div",{children:"Loader..."})}},168:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});r(791);var n="Reviews_reviews__n3fdK",a="Reviews_reviewItem__ax7Fo",s="Reviews_author__CqYAZ",i="Reviews_content__13k0w",c=r(184),o=function(e){var t=e.reviews;return t&&t.length?(0,c.jsx)("div",{className:n,children:(0,c.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,c.jsxs)("li",{className:a,children:[(0,c.jsx)("h4",{className:s,children:r}),(0,c.jsx)("p",{className:i,children:n})]},t)}))})}):null}},295:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(683),a=r(439),s=r(791),i=r(689),c=r(87),o=r(76),u=r(854),l="MovieInfo_container__MNRAo",h="MovieInfo_poster__haZsf",v="MovieInfo_info__z1mCF",d="MovieInfo_title__oNnRW",f="MovieInfo_overview__yDlwF",p="MovieInfo_userScore__so8-+",m="MovieInfo_genres__SMFEJ",j="MovieInfo_additionalInfo__1eqYM",I=r(184),_=function(e){var t=e.id,r=e.title,n=e.posterPath,a=e.overview,s=e.voteAverage,o=e.onFetchDetails,u=e.genres,_=(0,i.TH)();return(0,I.jsxs)("div",{className:l,children:[(0,I.jsx)("img",{className:h,src:"".concat("https://image.tmdb.org/t/p/w300").concat(n),alt:r}),(0,I.jsxs)("div",{className:v,children:[(0,I.jsx)("h2",{className:d,children:r}),(0,I.jsx)("h4",{className:f,children:"Overview"}),(0,I.jsx)("p",{className:f,children:a}),(0,I.jsx)("h4",{className:p,children:"User score:"}),(0,I.jsx)("p",{className:p,children:s}),(0,I.jsx)("h4",{className:m,children:"Genres:"}),(0,I.jsx)("p",{className:m,children:u}),(0,I.jsx)("hr",{}),(0,I.jsxs)("div",{className:j,children:[(0,I.jsx)("h4",{children:"Additional information"}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:(0,I.jsx)(c.rU,{to:"/movies/".concat(t,"/cast"),state:{from:_.pathname},onClick:function(){return o("Cast")},children:"Casts"})}),(0,I.jsx)("li",{children:(0,I.jsx)(c.rU,{to:"/movies/".concat(t,"/reviews"),state:{from:_.pathname},onClick:function(){return o("Reviews")},children:"Reviews"})})]})]})]})]})},x=r(168),y=r(753),N="MovieDetails_goBackLink__p4MLL",Z=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)(null),r=(0,a.Z)(t,2),l=r[0],h=r[1],v=(0,s.useState)(null),d=(0,a.Z)(v,2),f=d[0],p=d[1],m=(0,s.useState)(null),j=(0,a.Z)(m,2),Z=j[0],g=j[1],w=(0,s.useState)(!1),M=(0,a.Z)(w,2),J=M[0],Y=M[1],U=(0,s.useState)(""),z=(0,a.Z)(U,2),G=z[0],C=z[1],T=(0,i.TH)(),O=(0,i.s0)();(0,s.useEffect)((function(){Y(!0),(0,y.TP)(e).then(h).catch((function(e){var t=e.message;return C(t)})).finally((function(){return Y(!1)}))}),[e]);return(0,I.jsxs)("div",{className:"styles.container",children:[J&&(0,I.jsx)(u.Z,{}),l&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(c.rU,{onClick:function(){O(-1)},className:N,children:"Go Back"}),(0,I.jsx)(_,(0,n.Z)((0,n.Z)({},l),{},{onFetchDetails:function(t){p(t),Y(!0),"Cast"===t?(0,y.zv)(e).then(g).catch((function(e){var t=e.message;return C(t)})).finally((function(){return Y(!1)})):"Reviews"===t&&(0,y.tx)(e).then(g).catch((function(e){var t=e.message;return C(t)})).finally((function(){return Y(!1)}))}})),(0,I.jsx)("hr",{}),(0,I.jsx)(i.j3,{}),T.pathname.includes("cast")&&"Cast"===f&&!Z&&(0,I.jsx)(u.Z,{}),T.pathname.includes("cast")&&"Cast"===f&&Z&&(0,I.jsx)(o.default,{cast:Z}),T.pathname.includes("reviews")&&"Reviews"===f&&!Z&&(0,I.jsx)(u.Z,{}),T.pathname.includes("reviews")&&"Reviews"===f&&Z&&(0,I.jsx)(x.default,{reviews:Z})]}),G&&(0,I.jsx)("h2",{children:"Something went wrong..."})]})}},753:function(e,t,r){r.d(t,{zv:function(){return l},TP:function(){return u},tx:function(){return h},Df:function(){return c},z1:function(){return o}});var n=r(861),a=r(757),s=r.n(a),i=r(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/trending/movie/day",{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/search/movie",{params:{include_adult:!1,language:"en-US",page:1,query:t},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{id:e.id,title:e.title}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t),{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",{id:(n=r.data).id,title:n.title,overview:n.overview,releaseDate:n.release_date,posterPath:n.poster_path,backdropPath:n.backdrop_path,genres:n.genres.map((function(e){return e.name})).join(", "),runtime:n.runtime,voteAverage:n.vote_average,voteCount:n.vote_count,tagline:n.tagline,homepage:n.homepage,status:n.status});case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}var n}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/credits"),{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",r.data.cast.map((function(e){return{id:e.id,name:e.name,character:e.character,profilePath:e.profile_path}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/movie/".concat(t,"/reviews"),{params:{language:"en-US",page:1},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=295.a8898b08.chunk.js.map