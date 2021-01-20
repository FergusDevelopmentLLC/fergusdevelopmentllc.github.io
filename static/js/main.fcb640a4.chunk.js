(this["webpackJsonpfergusdevelopmentllc-react"]=this["webpackJsonpfergusdevelopmentllc-react"]||[]).push([[0],{100:function(e,t){},102:function(e,t){},128:function(e,t){},130:function(e,t){},143:function(e,t,r){},144:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r(1),s=r.n(a),n=r(79),o=r.n(n),l=r(12),c=r(2),p=function(){var e=Object(c.f)();return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("div",{className:"header-content",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("div",{className:"nav-title",children:"Will Carter: Full Stack Web Developer"}),Object(i.jsx)("div",{className:"nav",children:Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/about"===e.pathname?"/":"/about",children:"/about"===e.pathname?"Portfolio":"About"})})})})]})})})};var u,d=function(){return Object(i.jsxs)("footer",{className:"footer",children:["\xa9 ",(new Date).getFullYear()," Fergus Development LLC"]})},h=r(51),m=r.n(h),b=r(81),j=r(83),g=r(82),f=r.n(g),x=function(e){var t=e.posts,r=void 0===t?[]:t;return Object(i.jsx)("ul",{children:r.map((function(e,t){var r=new Date(e.pubDate);return Object(i.jsxs)("li",{children:[Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:e.url,children:e.title})}),Object(i.jsx)("div",{className:"blog-subtitle",children:Object(i.jsx)("a",{href:e.url,children:e.subtitle})}),Object(i.jsx)("div",{className:"blog-date",children:r.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}),Object(i.jsx)("a",{href:e.url,children:Object(i.jsx)("img",{src:e.imgUrl,alt:e.title})})]},t)}))})},v=function(e){var t=e.portfolioItem,r=t.title,a=t.description,s=t.url,n=t.imageUrl,o=t.links,l=t.btnText;return Object(i.jsxs)("div",{className:"portfolio-item",children:[Object(i.jsx)("h3",{children:r}),Object(i.jsx)("p",{className:"portfolio-desc",dangerouslySetInnerHTML:{__html:a}}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{href:s,children:Object(i.jsx)("img",{className:"portfolio-img",src:n,alt:r})})}),Object(i.jsx)("ul",{children:o.map((function(e,t){return Object(i.jsxs)("li",{children:[e.prefix,Object(i.jsx)("a",{href:e.url,children:e.linkText})]},t)}))}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{className:"btn info",href:s,children:l})})]})},k=r(24),w=[{title:"PolitiPoint.org",description:'PolitiPoint.org is a survey that provides insight into political leanings beyond the traditional "right" and "left" framework.',url:"https://www.politipoint.org/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091201/portfolio/politipoint_egxibf.gif",btnText:"Take the survey!",links:[{prefix:"Back end: Ruby on Rails API - ",url:"https://github.com/FergusDevelopmentLLC/political_fingerprint_api",linkText:"Github repository"},{prefix:"Front end: React/Redux - ",url:"https://github.com/FergusDevelopmentLLC/politipoint_fe",linkText:"Github repository"},{prefix:"Featured library: ",url:"https://www.mapbox.com/",linkText:"Mapbox"},{prefix:"Blog post: ",url:"https://will-carter.medium.com/reacting-redoing-learning-a643cf0a9966",linkText:"Rails API to React/Redux with Hooks"}]},(u={title:"USFS-DST proof of concept",description:'A proof of concept front end focused on Rogue River watershed conservation efforts. This application is the focus of my current work with <a href="https://www.thefreshwatertrust.org/">The Freshwater Trust</a>.',url:"https://www.politipoint.org/"},Object(k.a)(u,"url","http://138.68.23.63:5000/"),Object(k.a)(u,"imageUrl","https://res.cloudinary.com/fergusdev/image/upload/v1611091198/portfolio/dst_800x400_bo8y5o.png"),Object(k.a)(u,"btnText","Demo"),Object(k.a)(u,"links",[{prefix:"Back end: ",url:"http://postgis.net/",linkText:"SQL/PostGIS"},{prefix:"Front end: ",url:"https://reactjs.org/",linkText:"React"},{prefix:"Featured library: ",url:"https://www.mapbox.com/",linkText:"Mapbox"},{prefix:"Featured library: ",url:"https://d3js.org/",linkText:"D3.js"},{prefix:"Blog post: ",url:"https://www.thefreshwatertrust.org/data-visualizing-a-better-future-for-the-rogue/",linkText:"Data Visualizing a Better Future for the Rogue"}]),u),{title:"Hikefinder.net",description:"Hikefinder.net is a resource to find hiking trails across the United States. Contains over 30,000 hiking trails, searchable by city/town or by pinpointing a location on the map.",url:"https://www.hikefinder.net/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091204/portfolio/hikefinder_02_wmjmxb.png",btnText:"Find a trail near you!",links:[{prefix:"Back end: Ruby on Rails API - ",url:"https://github.com/FergusDevelopmentLLC/hiking_project_api",linkText:"Github repository"},{prefix:"Front end - Vanilla JS - ",url:"https://github.com/FergusDevelopmentLLC/hiking_project_fe",linkText:"Github repository"},{prefix:"Featured library: ",url:"https://www.mapbox.com/",linkText:"Mapbox"},{prefix:"Blog post: ",url:"https://will-carter.medium.com/reviving-old-ideas-2f2908189a34",linkText:"Reviving old ideas"}]},{title:"Skillcraft",description:"Skillcraft is an online classroom manager inspired by Google Classroom, written in Ruby on Rails.",url:"http://skillcraft.herokuapp.com/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091197/portfolio/skillcraft_800x400_revhug.png",btnText:"Demo",links:[{prefix:"Ruby on Rails Front and Back end - ",url:"https://github.com/FergusDevelopmentLLC/skillcraft",linkText:"Github repository"},{prefix:"Blog post: ",url:"https://will-carter.medium.com/learning-by-4f5d58192fe6",linkText:"SkillCrafting: Building an Online Learning Platform with Ruby on Rails"}]},{title:"Popular U.S. Names of the Last Century (1910-2016)",description:"This D3.js based map shows occurrences by state over time for a particular name. User interfaces allow for name lookup and a slider shows how the name evolves over time. Based on the top 1000 names for each year. Over 33,000 unique and dynamic names/maps possible.",url:"http://104.236.16.91:8645/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091201/portfolio/names_800x400_v2_dtxvdm.png",btnText:"Map",links:[{prefix:"Back end: ",url:"http://postgis.net/",linkText:"PostGreSQL/PostGIS"},{prefix:"Front end - Vanilla JS - ",url:"https://github.com/FergusDevelopmentLLC/names-map-node",linkText:"Github repository"},{prefix:"Featured library: ",url:"https://nodejs.org",linkText:"Node.js"},{prefix:"Featured library: ",url:"https://www.mapbox.com/",linkText:"D3.js"}]}],O=[{title:"Games Guide",description:"GamesGuide is a demonstration Ruby/Sinatra web application created to keep track of a board game collection. Users can login, add games, comment on games and tag them.",url:"https://gamesguide.herokuapp.com/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091204/portfolio/games_guide_800x400_wcrgcq.png",btnText:"Demo",links:[{prefix:"Sinatra Front and Back end - ",url:"https://github.com/FergusDevelopmentLLC/GameGuide",linkText:"Github repository"},{prefix:"Blog post: ",url:"https://will-carter.medium.com/building-a-games-guide-5c1791524ca5",linkText:"Building a Games Guide"}]},{title:"Starbucks Location Density: 1991-2017",description:"This Leaflet map uses hexbinning to convey Starbucks location density. Hexbins are redrawn to make them appropriate to zoom level.",url:"http://104.236.16.91:8660/starbucks/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091197/portfolio/starbucks_800x400_obkv6p.png",btnText:"Map",links:[{prefix:"Back end: ",url:"http://postgis.net/",linkText:"SQL/PostGIS"},{prefix:"Front end - Vanilla JS - ",url:"https://github.com/FergusDevelopmentLLC/starbucks",linkText:"Github repository"},{prefix:"Featured map library: ",url:"https://leafletjs.com/",linkText:"Leaflet.js"}]},{title:"Top Boy/Girl names of the Last Century (1910-2016)",description:"This D3.js based map shows a different perspective on the names data. The map shows top Boy/Girl name occurrences for each year by state. A Python script processed the raw data from the Social Security Administration.",url:"http://104.236.16.91:8645/top-names",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/top_names_800x400_shyhjy.png",btnText:"Map",links:[{prefix:"Back end: ",url:"http://postgis.net/",linkText:"SQL/PostGIS"},{prefix:"Front end - Vanilla JS - ",url:"https://github.com/FergusDevelopmentLLC/top-names-map",linkText:"Github repository"},{prefix:"Featured library: ",url:"https://d3js.com/",linkText:"d3.js"}]},{title:"U.S. Federal Lands (GeoDev Web Stack)",description:"This project involved building a full web stack from database to front end. Static geojson, PostGRES, and PostGIS queries are compared to deliver large geospatial datasets.",url:"http://104.236.16.91:8641/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/fedlands_700x300_mehqkm.png",btnText:"Map",links:[{prefix:"Back end: ",url:"http://postgis.net/",linkText:"SQL/PostGIS"},{prefix:"Featured library: ",url:"https://vuejs.org/",linkText:"Vue.js"},{prefix:"Featured library: ",url:"http://knexjs.org/",linkText:"Knex.js"},{prefix:"Featured library: ",url:"https://github.com/hapijs/joi",linkText:"Joi.js"},{prefix:"Featured map library: ",url:"https://leafletjs.com/",linkText:"Leaflet.js"}]},{title:"U.S. 2017 Weekly Drought Conditions",description:"This D3.js based map shows drought conditions in the U.S. by week during 2017. The speed of D3.js can seen by cycling through the geospatial data for each week.",url:"http://104.236.16.91:8650/us-weekly-drought-conditions/",imageUrl:"https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/drought_v6_eyyldb.gif",btnText:"Map",links:[{prefix:"Featured library: ",url:"https://www.mapbox.com/",linkText:"D3.js"}]}],y=function(){var e="/"===Object(c.f)().pathname?w:O,t=function(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),null};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(t,{}),e.map((function(e,t){return Object(i.jsx)(v,{portfolioItem:e},t)}))]})},T=function(){var e=Object(c.f)();return Object(i.jsxs)("ul",{className:"pagination",children:[Object(i.jsx)("li",{className:"/"===e.pathname?"page-item hidden":"page-item",children:Object(i.jsxs)(l.b,{className:"page-link","aria-label":"Previous",to:"/page2",children:[Object(i.jsx)("span",{"aria-hidden":"true",children:"\xab"})," ",Object(i.jsx)("span",{className:"sr-only",children:"Prev"})]})}),Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)(l.b,{className:"page-link",to:"/",children:"1"})}),Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)(l.b,{className:"page-link",to:"/page2",children:"2"})}),Object(i.jsx)("li",{className:"/page2"===e.pathname?"page-item hidden":"page-item",children:Object(i.jsxs)(l.b,{className:"page-link","aria-label":"Next",to:"/page2",children:[Object(i.jsx)("span",{className:"sr-only",children:"Next"})," ",Object(i.jsx)("span",{"aria-hidden":"true",children:"\xbb"})]})})]})};var L=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],s=t[1];return Object(a.useEffect)((function(){var e=new f.a,t=function(e,t){var r=e.reduce((function(e,t){var r;if(t["content:encoded"].indexOf("<figure>")>-1){(r={}).title=t.title,r.url=t.link,r.pubDate=t.pubDate;var i=(new DOMParser).parseFromString(t["content:encoded"],"text/html"),a=i.querySelector("p").textContent;a.length<100&&(r.subtitle=a);var s=i.querySelector("figure").querySelector("img");s&&(r.imgUrl=s.src)}return r&&e.push(r),e}),[]);return r.length>t?r.slice(0,t):r};(function(){var r=Object(b.a)(m.a.mark((function r(){var i,a;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return"https://www.politipoint.org/medium",r.next=3,e.parseURL("https://www.politipoint.org/medium");case 3:i=r.sent,a=t(i.items,5),s(a);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}})()()}),[]),Object(i.jsxs)("div",{className:"home",children:[Object(i.jsxs)("main",{className:"main",children:[Object(i.jsx)("h3",{className:"portfolio-header",children:"Portfolio"}),Object(i.jsx)(y,{}),Object(i.jsx)(T,{})]}),Object(i.jsxs)("aside",{className:"left",children:[Object(i.jsx)("h3",{className:"feature-header",children:"Recent blog posts"}),Object(i.jsx)(x,{posts:r}),Object(i.jsx)("div",{className:"blog-more",children:Object(i.jsx)("a",{href:"https://will-carter.medium.com/",children:"More blog posts..."})})]})]})};var S=function(){return Object(i.jsx)("div",{className:"full",children:Object(i.jsxs)("main",{className:"main",children:[Object(i.jsx)("div",{className:"contact-image-wrapper",children:Object(i.jsx)("img",{src:"https://res.cloudinary.com/fergusdev/image/upload/v1611091196/portfolio/will_rjmhex.png",alt:"Will Carter"})}),Object(i.jsxs)("p",{children:[Object(i.jsx)("strong",{children:"WILL CARTER"}),Object(i.jsx)("br",{}),"Denver, CO  80212",Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"mailto:will.carter@fergusllc.com",target:"_top",children:"will.carter@fergusllc.com"})]}),Object(i.jsx)("p",{children:"I am a lifelong learner returning to web development, the work that has given me the most satisfaction and provided me with a voice for creativity. My web development work began at startup, later at a design and development firm and also at a major university. The creativity that surrounds the startup environment resonates with me. More recently, I have focused on data visualization, GIS, and web mapping along with building a reinvigorated modern web development toolset. I bring experience with a wide range of platforms at every level of the stack. I aim to join a team focused on making a positive impact."}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://docs.google.com/document/d/1I22L_9dr1zFLBqXu7N_seAGiUpuDsDszCi4E6okuzr4/edit?usp=sharing",children:"Resume"})}),Object(i.jsxs)("li",{children:["LinkedIn: ",Object(i.jsx)("a",{href:"http://www.linkedin.com/in/williamlcarter",children:"http://www.linkedin.com/in/williamlcarter"})]}),Object(i.jsxs)("li",{children:["Blog: ",Object(i.jsx)("a",{href:"https://will-carter.medium.com/",children:"https://will-carter.medium.com/"})]}),Object(i.jsxs)("li",{children:["Portfolio: ",Object(i.jsx)("a",{href:"https://fergusdevelopmentllc.github.io/",children:"https://fergusdevelopmentllc.github.io/"})]}),Object(i.jsxs)("li",{children:["Github: ",Object(i.jsx)("a",{href:"https://github.com/FergusDevelopmentLLC",children:"https://github.com/FergusDevelopmentLLC"})]}),Object(i.jsxs)("li",{children:["Blocks: ",Object(i.jsx)("a",{href:"https://bl.ocks.org/fergusDevelopmentLLC",children:"https://bl.ocks.org/fergusDevelopmentLLC"})]}),Object(i.jsxs)("li",{children:["Twitter: ",Object(i.jsx)("a",{href:"https://twitter.com/zippyferguson",children:"@zippyferguson"})]})]})]})})},F=function(){return Object(i.jsxs)(l.a,{children:[Object(i.jsx)(p,{}),Object(i.jsxs)(c.c,{children:[Object(i.jsx)(c.a,{exact:!0,path:"/",component:L}),Object(i.jsx)(c.a,{exact:!0,path:"/page2",component:L}),Object(i.jsx)(c.a,{exact:!0,path:"/about",component:S})]}),Object(i.jsx)(d,{})]})};r(143);o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.fcb640a4.chunk.js.map