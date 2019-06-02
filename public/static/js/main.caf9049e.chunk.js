(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(24),c=n.n(r),s=(n(58),n(51)),m=n(16),i=(n(59),n(43)),o=n.n(i),u=n(39),h=n(25),g=n(15),E=n.n(g),d=n(14);function f(){return l.a.createElement("div",{className:"row center-align grey-text",style:{margin:"1rem 0",fontSize:"1.1rem"}},l.a.createElement("span",{className:"col s12 m4",style:{marginBottom:"1rem"}},l.a.createElement("span",{className:"green-text",style:{marginRight:".4rem"}},"\u2588",""),"= Launch Success"),l.a.createElement("span",{className:"col s12 m4",style:{marginBottom:"1rem"}},l.a.createElement("span",{className:"red-text",style:{marginRight:".4rem"}},"\u2588",""),"= Launch Fail"),l.a.createElement("span",{className:"col s12 m4",style:{marginBottom:"1rem"}},l.a.createElement("span",{className:"blue-text",style:{marginRight:".4rem"}},"\u2588",""),"= Status unavailable"))}var b=n(44),v=n(45),p=n.n(v),_=n(46);function y(){var e=Object(h.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      mission_name\n      launch_date_local\n      launch_site {\n        site_name_long\n      }\n      launch_success\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n      details\n      links {\n        wikipedia\n        mission_patch_small\n      }\n    }\n  }\n"]);return y=function(){return e},e}var k=E()(y());function N(e){var a=e.id,n=l.a.createElement(d.Button,{waves:"light",small:!0,className:"grey darken-2 hoverable"},"Details");return l.a.createElement(d.Modal,{trigger:n,options:{preventScrolling:!1},className:"grey lighten-2",style:{maxHeight:"85%"},actions:l.a.createElement("div",{className:"center-align"},l.a.createElement(d.Button,{className:"grey",waves:"light",modal:"close"},"Close"))},l.a.createElement(m.b,{query:k,variables:{flight_number:a}},function(e){var a=e.loading,n=e.error,t=e.data;if(a)return l.a.createElement("div",{className:"center-align"},l.a.createElement(d.Preloader,{size:"small"}));if(n)return console.log(n),l.a.createElement("h5",null,"Error fetching data");var r=t.launch,c=r.mission_name,s=r.launch_date_local,m=r.launch_site.site_name_long,i=r.launch_success,o=r.rocket,u=o.rocket_name,h=o.rocket_type,g=r.details,E=r.links,f=E.wikipedia,b=E.mission_patch_small;return l.a.createElement("div",null,l.a.createElement("h5",null,l.a.createElement("b",null,"Mission: "),c),l.a.createElement("b",null,"Launch date: "),l.a.createElement(p.a,{format:"MMM DD, YYYY"},s),l.a.createElement("br",null),l.a.createElement("b",null,"Launch site:")," ",m,l.a.createElement("br",null),l.a.createElement("b",null,"Launch:")," ",null===i?"unavailable":i?"successful":"failed",l.a.createElement("br",null),l.a.createElement("b",null,"Rocket name:")," ",u,l.a.createElement("br",null),l.a.createElement("b",null,"Rocket type:")," ",h,l.a.createElement("br",null),l.a.createElement("b",null,"Details:")," ",g||"unavailable",l.a.createElement("br",null),l.a.createElement("a",{className:"truncate",href:f,target:"blank"},f),l.a.createElement("br",null),b?l.a.createElement("div",{className:"center-align"},l.a.createElement(_.LazyLoadImage,{className:"responsive-img",src:b,alt:"Mission patch"})):null)}))}function w(e){var a=e.launches,n=e.onLoadMore;return l.a.createElement("div",null,a.map(function(e,t){var r=e.flight_number,c=e.mission_name,s=e.launch_year,m=e.launch_success;return l.a.createElement("div",{key:r,className:"grey darken-3 grey-text text-lighten-4 row valign-wrapper"},l.a.createElement("div",{className:"col m9 s8"},l.a.createElement("h5",{style:{marginTop:"1.5rem"}},"Mission:"," ",null===m?l.a.createElement("span",{className:"blue-text"},c):l.a.createElement("span",{className:m?"green-text":"red-text"},c)),l.a.createElement("h6",{style:{marginBottom:"1.5rem"}},"Year: ",s)),l.a.createElement("div",{className:"col m3 s4"},l.a.createElement(N,{id:r})),t===a.length-3&&l.a.createElement(b.a,{onEnter:n,fireOnRapidScroll:!0,bottomOffset:"-600px"}))}))}function x(){var e=Object(h.a)(["\n  query LaunchesQuery($limit: Int!, $offset: Int!) {\n    launches(limit: $limit, offset: $offset) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n    }\n  }\n"]);return x=function(){return e},e}var L=E()(x());function M(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"black white-text center-align"},"Launches"),l.a.createElement(f,null),l.a.createElement("h6",{className:"center-align"},l.a.createElement("a",{href:"https://github.com/mmackovic024/spacex-stats.git",target:"_blank",rel:"noopener noreferrer"},"Code on GitHub")),l.a.createElement("br",null),l.a.createElement(m.b,{query:L,variables:{limit:10,offset:0}},function(e){var a=e.loading,n=e.error,t=e.data,r=e.fetchMore;return a?l.a.createElement("div",{className:"center-align"},l.a.createElement(d.Preloader,{size:"small"})):(n&&console.log(n),l.a.createElement(w,{launches:t.launches||[],onLoadMore:function(){return r({variables:{offset:t.launches.length},updateQuery:function(e,a){var n=a.fetchMoreResult;return n?{__typename:"Launch",launches:[].concat(Object(u.a)(e.launches),Object(u.a)(n.launches))}:e}})}}))}))}var B=new s.a({uri:"/graphql"});var R=function(){return l.a.createElement(m.a,{client:B},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:o.a,alt:"SpaceX",style:{width:350,display:"block",margin:"auto"}}),l.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,a,n){e.exports=n.p+"static/media/logo.ab10d000.png"},53:function(e,a,n){e.exports=n(115)},58:function(e,a,n){},59:function(e,a,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.caf9049e.chunk.js.map