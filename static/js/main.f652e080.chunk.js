(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{13:function(e,t,s){},44:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(14),c=s.n(i),r=s(4),o=s.n(r),m=s(15),l=s(16),d=s(17),j=s(20),v=s(19),u=s(18),b=s.n(u),h=(s(13),s(44),s(0));var p=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie_data",children:[Object(h.jsx)("h3",{className:"movie_title",children:s}),Object(h.jsx)("h5",{className:"movie_year",children:t}),Object(h.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"geners_gener",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie_summary",children:[a.slice(0,140),"..."]})]})]})},O=(s(46),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader_wrap",children:Object(h.jsxs)("div",{className:"loader",children:[Object(h.jsx)("div",{className:"dot"}),Object(h.jsx)("div",{className:"dot"}),Object(h.jsx)("div",{className:"dot"})]})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));c.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.f652e080.chunk.js.map