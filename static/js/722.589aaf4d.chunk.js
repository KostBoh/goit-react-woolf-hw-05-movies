"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[722],{510:function(e,t,r){r.d(t,{Z:function(){return p}});r(791);var n=r(689),a=r(87),i="MovieList_movieList__uFrOZ",c="MovieList_movieItem__qe2ZM",u="MovieList_movieLink__kzavH",o="MovieList_movieTitle__RhENm",s=r(184),p=function(e){var t=e.movies,r=(0,n.TH)();return(0,s.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,n=e.title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:r},className:u,children:(0,s.jsx)("p",{className:o,children:n})})},t)}))})}},722:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(439),a=r(854),i=r(510),c=r(791),u="SearchForm_searchForm__NsJpF",o="SearchForm_input__HOxJo",s="SearchForm_button__UXY06",p=r(184),l=function(e){var t=e.onSubmit,r=(0,c.useState)(""),a=(0,n.Z)(r,2),i=a[0],l=a[1];return(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(i),l("")},className:u,children:[(0,p.jsx)("input",{value:i,onChange:function(e){l(e.target.value)},type:"text",autoFocus:!0,className:o}),(0,p.jsx)("button",{type:"submit",className:s,children:"Search"})]})},h=r(87),v=r(753),m=function(){var e=(0,h.lr)(),t=(0,n.Z)(e,2),r=t[0],u=t[1],o=(0,c.useState)([]),s=(0,n.Z)(o,2),m=s[0],f=s[1],d=(0,c.useState)(!1),I=(0,n.Z)(d,2),y=I[0],Z=I[1],j=(0,c.useState)(""),J=(0,n.Z)(j,2),Y=J[0],g=J[1];return(0,c.useEffect)((function(){var e=r.get("movie");e&&(0,v.z1)(e).then(f).catch((function(e){var t=e.message;return g(t)})).finally((function(){Z(!1)}))}),[r]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{onSubmit:function(e){u({movie:e})}}),y&&(0,p.jsx)(a.Z,{}),(0,p.jsx)(i.Z,{movies:m}),Y&&(0,p.jsx)("h2",{children:"Something went wrong..."})]})}},753:function(e,t,r){r.d(t,{zv:function(){return p},TP:function(){return s},tx:function(){return l},Df:function(){return u},z1:function(){return o}});var n=r(861),a=r(757),i=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day",{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie",{params:{include_adult:!1,language:"en-US",page:1,query:t},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{id:e.id,title:e.title}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t),{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",{id:(n=r.data).id,title:n.title,overview:n.overview,releaseDate:n.release_date,posterPath:n.poster_path,backdropPath:n.backdrop_path,genres:n.genres.map((function(e){return e.name})).join(", "),runtime:n.runtime,voteAverage:n.vote_average,voteCount:n.vote_count,tagline:n.tagline,homepage:n.homepage,status:n.status});case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}var n}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/credits"),{params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",r.data.cast.map((function(e){return{id:e.id,name:e.name,character:e.character,profilePath:e.profile_path}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/reviews"),{params:{language:"en-US",page:1},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTE5OWQyNzIzOTBjYTJhMDU0ZTk5MTBmOGU5ZGVjYyIsInN1YiI6IjY2MzIwYTdiMzU4ZGE3MDEyNDU0MjQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05W8GlYUN0AfXErAyeK8vkcPYyMXGFAW9v-mZKKs944"}});case 3:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=722.589aaf4d.chunk.js.map