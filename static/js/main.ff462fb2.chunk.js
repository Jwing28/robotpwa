(this.webpackJsonprobotapp=this.webpackJsonprobotapp||[]).push([[0],{17:function(e,t,r){e.exports=r(32)},29:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(4),c=r.n(a),s=r(5),i=r(2),l=r(13),u=r(14),b=function(e){var t=e.onChange;return o.a.createElement("input",{className:"",onChange:t,type:"search",placeholder:"search robots"})},p=function(e){var t=e.email,r=e.id,n=e.name;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},d=function(e){return e.robots.map((function(e){return o.a.createElement(p,Object.assign({key:e.id},e))}))},h=r(8),E=r.n(h),f=r(15),g=(r(29),function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},t)}),m=(r(30),Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"});try{Object(f.a)(E.a.mark((function t(){var r,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,e({type:"REQUEST_ROBOTS_SUCCESS",payload:n});case 7:case"end":return t.stop()}}),t)})))()}catch(t){e({type:"REQUEST_ROBOTS_FAILURE",payload:t})}}))}}}))((function(e){var t=e.isPending,r=e.onRequestRobots,a=e.onSearchChange,c=e.robots,s=e.searchField;Object(n.useEffect)((function(){r()}),[]);var i=c.filter((function(e){return e.name.toLocaleLowerCase().includes(s.toLowerCase())}));return o.a.createElement("div",{className:"App tc"},t?o.a.createElement("h1",null,"Loading..."):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"title f2"},"Robo Friends"),o.a.createElement(b,{onChange:function(e){a(e.target.value)}}),o.a.createElement("div",{className:"spacer"}),o.a.createElement(g,null,!!e.robots.length&&o.a.createElement(d,{robots:i}))))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=r(16);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(O.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={searchField:""},j={isPending:!1,robots:[],error:""},w=Object(i.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILURE":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return y({},e,{searchField:t.payload});default:return e}}}),S=(r(31),Object(l.createLogger)()),P=Object(i.d)(w,Object(i.a)(u.a,S));c.a.render(o.a.createElement(s.a,{store:P},o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ff462fb2.chunk.js.map