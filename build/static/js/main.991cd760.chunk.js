(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{267:function(e,t,n){e.exports=n.p+"static/media/logo-black.10c4b048.svg"},268:function(e,t,n){e.exports=n.p+"static/media/logo-white.03bd3ead.svg"},270:function(e,t,n){e.exports=n.p+"static/media/flag-tr.121e8386.svg"},271:function(e,t,n){e.exports=n.p+"static/media/flag-us.aefba3fe.svg"},294:function(e,t,n){e.exports=n(314)},302:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),l=n.n(o),i=(n(302),n(9)),c=n(162),m=n(212),u=n(245),s=n(80),d=n(258),p=n(208),f=n(198),E=n(259);function g(){return a.createElement(f.a,null,a.createElement(p.a,{variant:"body1",color:"text.secondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear()," EST\xdc Software Community"),a.createElement(p.a,{variant:"body2",color:"text.secondary",align:"center"},"estuyazilim.com - made with \u2764\ufe0f - ",a.createElement(E.a,{color:"inherit",href:"https://github.com/ESTUYazilim/estuyazilim.com"},"see github code")),a.createElement(p.a,{variant:"body2",color:"text.secondary",align:"center"},"to contact please refer to ",a.createElement(E.a,{color:"inherit",href:"mailto:mail@estuyazilim.com"},"mail@estuyazilim.com")))}function h(){return a.createElement(m.a,{component:"footer",sx:{py:3,px:2,mt:"auto",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[800]},minHeight:"10vh"}},a.createElement(g,null))}var x=n(266),b=n.n(x),v=n(219);function y(e){return a.createElement(b.a,{sx:{marginX:8}},[{name:"Random Name #1",description:"Probably the most random thing you have ever seen!",img:"../logo.svg"},{name:"Random Name #2",description:"Hello World!",img:"../logo.svg"}].map(function(e,t){return a.createElement(k,{key:t,item:e})}))}function k(e){return a.createElement(v.a,{sx:{minHeight:"75vh",padding:5}},a.createElement("h2",null,e.item.name),a.createElement("p",null,e.item.description))}var C=n(248);function w(e){return a.createElement(m.a,{sx:{display:"flex",alignItems:"center"}},a.createElement(m.a,{sx:{width:"100%",mr:1}},a.createElement(C.a,Object.assign({variant:"determinate"},e))),a.createElement(m.a,{sx:{minWidth:35}},a.createElement(p.a,{variant:"body2",color:"inherit"},"".concat(Math.round(e.value),"%"))))}function S(){var e=a.useState(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.useEffect(function(){var e=setInterval(function(){r(function(e){return e>=50?0:e+2})},200);return function(){clearInterval(e)}},[]),a.createElement(m.a,{sx:{display:"flex",flexDirection:"column",minHeight:"100vh"}},a.createElement(f.a,{component:"header",sx:{mt:4,mb:2}},a.createElement(p.a,{variant:"body1"},"Stay Tuned!"),a.createElement(p.a,{variant:"body2"},"'estuyazilim.com' is currently under construction"),a.createElement(w,{color:"inherit",value:n})),a.createElement(y,{next:function(){},prev:function(){}}))}var O=n(231),z=n(254),T=n(230),j=n(163),D=n(269),F=n.n(D),W=n(260),q=n(237),L=n(253),M=n(250),A=n(267),G=n.n(A),H=n(268),I=n.n(H),P=["About","Team","Projects","Contact"],B=["Profile","Account","Dashboard","Logout"],N=function(e){var t=a.useState(null),n=Object(i.a)(t,2),r=n[0],o=n[1],l=a.useState(null),c=Object(i.a)(l,2),u=c[0],s=c[1],d=e.darkMode?I.a:G.a,E=function(){o(null)},g=function(){s(null)};return a.createElement(O.a,{position:"static",color:"default"},a.createElement(f.a,{maxWidth:"xl"},a.createElement(z.a,{disableGutters:!0},a.createElement(W.a,{alt:"ESC Logo",src:d,sx:{display:{xs:"none",md:"flex"},mr:1,width:84,height:84}}),a.createElement(p.a,{variant:"button",noWrap:!0,component:"a",href:"/",sx:{mr:1,display:{xs:"none",md:"flex"},fontFamily:"monospace",fontWeight:700,color:"inherit",textDecoration:"none"}},"EST\xdc Software Community"),a.createElement(m.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},a.createElement(T.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit"},a.createElement(F.a,null)),a.createElement(j.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(r),onClose:E,sx:{display:{xs:"block",md:"none"}}},P.map(function(e){return a.createElement(M.a,{key:e,onClick:E},a.createElement(p.a,{textAlign:"center"},e))}))),a.createElement(W.a,{alt:"ESC Logo",src:d,sx:{display:{xs:"flex",md:"none"},mr:1,width:84,height:84}}),a.createElement(p.a,{variant:"h5",noWrap:!0,component:"a",href:"",sx:{mr:1,display:{xs:"flex",md:"none"},flexGrow:1,fontFamily:"monospace",fontWeight:700,color:"inherit",textDecoration:"none"}},"EST\xdc Software Community"),a.createElement(m.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}},P.map(function(e){return a.createElement(q.a,{key:e,onClick:E,sx:{my:2,color:"inherit",display:"block"}},e)})),a.createElement(m.a,{sx:{flexGrow:0}},a.createElement(L.a,{title:"Open settings"},a.createElement(T.a,{onClick:function(e){s(e.currentTarget)},sx:{p:0}},a.createElement(W.a,{alt:"User"}))),a.createElement(j.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(u),onClose:g},B.map(function(e){return a.createElement(M.a,{key:e,onClick:g},a.createElement(p.a,{textAlign:"center"},e))}))))))};function R(){return a.createElement(f.a,{component:"section",id:"about"},a.createElement(m.a,{sx:{display:"flex",flexDirection:"column",minHeight:"15vh"}},a.createElement(p.a,{variant:"h2"},"About ESC"),a.createElement(p.a,{variant:"body1"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, magnam animi! Sint, vero numquam? Nihil repellendus ipsa numquam, expedita sit aliquid, laudantium accusamus voluptatem eaque similique eos. Nemo, ipsa consequatur.")))}var J=n(273),U=n.n(J),Y=n(272),V=n.n(Y),X=n(265),K=n(270),Q=n.n(K),Z=n(271),$=n.n(Z);function _(){var e=a.useState(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],o=a.useState(!0),l=Object(i.a)(o,2),p=l[0],f=l[1],E=p?X.a:X.b,g=Object(s.b)({palette:{mode:n?"dark":"light"},locale:E});return a.createElement(d.a,{theme:g},a.createElement(c.b,null),a.createElement(m.a,{sx:{display:"flex",flexDirection:"column"}},a.createElement(N,{darkMode:n}),a.createElement(S,null),a.createElement(R,null),a.createElement(u.a,{sx:{position:"fixed",bottom:function(e){return e.spacing(2)},right:function(e){return e.spacing(2)},backgroundColor:n?"black":"white",":hover":{backgroundColor:n?"gainsboro":"gray"}}},a.createElement(T.a,{onClick:function(){r(!n)}},"dark"===g.palette.mode?a.createElement(V.a,null):a.createElement(U.a,null))),a.createElement(u.a,{sx:{position:"fixed",bottom:function(e){return e.spacing(2)},left:function(e){return e.spacing(2)},backgroundColor:"transparent",":hover":{backgroundColor:"transparent"},boxShadow:"none"}},a.createElement(T.a,{onClick:function(){f(!p)}},p?a.createElement(W.a,{src:$.a}):a.createElement(W.a,{src:Q.a}))),a.createElement(h,null)))}var ee=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,332)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),o(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),ee()}},[[294,3,2]]]);
//# sourceMappingURL=main.991cd760.chunk.js.map