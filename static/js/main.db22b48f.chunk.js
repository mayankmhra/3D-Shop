(this["webpackJsonpwobble-transition"]=this["webpackJsonpwobble-transition"]||[]).push([[0],{53:function(e,t,n){e.exports=n(70)},57:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),c=n.n(o),l=n(8);n(57);function i(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-inner"},r.a.createElement("div",{className:"logo"},"CHAIR."),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"discover")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"products")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"solutions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"reach")),r.a.createElement("li",{className:"btn"},r.a.createElement("a",{href:"/"},"order"))))))}var s=n(9),m=n(52),u=n(41),f=n.n(u),h={sections:3,pages:3,zoom:1,top:Object(a.createRef)()},E=["children","offset","factor"],d=Object(a.createContext)(0);function p(e){var t=e.children,n=e.offset,o=e.factor,c=Object(m.a)(e,E),l=function(){var e=h.sections,t=h.pages,n=h.zoom,r=Object(s.g)(),o=r.size,c=r.viewport,l=Object(a.useContext)(d),i=c.width,m=c.height,u=i/n,f=m/n,E=o.width<700,p=u*(E?.2:.1),g=u*(E?.8:.6),b=f*((t-1)/(e-1));return{aspect:o.height/m,viewport:c,offset:l,viewportWidth:i,viewportHeight:m,canvasWidth:u,canvasHeight:f,mobile:E,margin:p,contentMaxWidth:g,sectionHeight:b}}(),i=l.offset,u=l.sectionHeight,p=l.aspect,g=Object(a.useRef)();return n=void 0!==n?n:i,Object(s.e)((function(){var e=g.current.position.y,t=h.top.current/p;g.current.position.y=f()(e,t/h.zoom*o,.1)})),r.a.createElement(d.Provider,{value:n},r.a.createElement("group",Object.assign({},c,{position:[0,-u*n*o,0]}),r.a.createElement("group",{ref:g},t)))}var g=n(51),b=n(36),v=function(e){var t=e.modelPath,n=Object(b.b)(t,!0);return r.a.createElement("primitive",{object:n.scene,dispose:null})},j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ambientLight",{intensity:.3}),r.a.createElement("directionalLight",{position:[10,10,5],intensity:1}),r.a.createElement("directionalLight",{position:[0,10,0],intensity:1.5}),r.a.createElement("spotLight",{intensity:1,position:[1e3,0,0]}))},w=function(e){var t=e.bgColor,n=e.domContent,o=e.children,c=e.modelPath,i=e.positionY,m=Object(a.useRef)();Object(s.e)((function(){return m.current.rotation.y+=.01}));var u=Object(g.a)({threshold:0}),f=Object(l.a)(u,2),h=f[0],E=f[1];return Object(a.useEffect)((function(){E&&(document.body.style.backgroundColor=t)}),[E]),r.a.createElement(p,{factor:1.5,offset:1},r.a.createElement("group",{position:[0,i,0]},r.a.createElement("mesh",{ref:m,position:[0,-35,0]},r.a.createElement(v,{modelPath:c})),r.a.createElement(b.a,{portal:n,fullscreen:!0},r.a.createElement("div",{className:"container",ref:h},o))))};function O(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=function(e){h.top.current=e.target.scrollTop};return Object(a.useEffect)((function(){n({target:t.current})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement(s.a,{colorManagement:!0,camera:{position:[0,0,120],fov:70}},r.a.createElement(j,null),r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(w,{domContent:e,modelPath:"/armchairYellow.gltf",positionY:250,bgColor:"#f15946"},r.a.createElement("h1",{className:"title"},"Yellow")),r.a.createElement(w,{domContent:e,modelPath:"/armchairGreen.gltf",positionY:0,bgColor:"#571ec1"},r.a.createElement("h1",{className:"title"},"Green")),r.a.createElement(w,{domContent:e,modelPath:"/armchairGray.gltf",positionY:-250,bgColor:"#636567"},r.a.createElement("h1",{className:"title"},"Grey")))),r.a.createElement("div",{className:"scrollArea",ref:t,onScroll:n},r.a.createElement("div",{style:{position:"sticky",top:0},ref:e}),r.a.createElement("div",{style:{height:"".concat(100*h.sections,"vh")}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.db22b48f.chunk.js.map