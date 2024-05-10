(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5068:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Y}});var i=t(1383),r=t(6829),o=t(1571);function a(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var s,h,d,c,u,l=t(9499),m=t(7294),f=t(5893),p=r.Z.canvas(s||(s=(0,i.Z)(["\n  width: 100%;\n  height: 100vh;\n  background: transparent;\n"]))),g=function(){var n=(0,m.useRef)(null);return(0,m.useEffect)((function(){for(var e,t=n.current,i=t.getContext("2d"),r=[],o=function(){function n(e,t,i,r,o){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(0,l.Z)(this,"index",void 0),(0,l.Z)(this,"x",void 0),(0,l.Z)(this,"y",void 0),(0,l.Z)(this,"speed",void 0),(0,l.Z)(this,"length",void 0),this.index=e,this.x=t,this.y=i,this.speed=r,this.length=o}var e,t,r;return e=n,(t=[{key:"draw",value:function(){i.beginPath(),i.strokeStyle="#dfdfdf",i.moveTo(this.x,this.y),i.lineTo(this.x,this.y+this.length),i.stroke(),i.closePath()}}])&&a(e.prototype,t),r&&a(e,r),n}(),s=0;s<200;s++){var h=Math.random()*t.width,d=Math.random()*t.height,c=2*Math.random()+1,u=5*Math.random()+2;r.push(new o(s,h,d,c,u))}return function n(){i.clearRect(0,0,t.width,t.height),r.forEach((function(n){n.y+=n.speed,n.y>t.height&&(n.y=0,n.x=Math.random()*t.width,n.speed=6*Math.random()+1,n.length=5*Math.random()+2),n.draw()})),e=requestAnimationFrame(n)}(),function(){cancelAnimationFrame(e)}}),[]),(0,f.jsx)(p,{ref:n,width:1e3,height:400})},x=r.Z.div(h||(h=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n"]))),v=r.Z.div(d||(d=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  background-image: url('/images/view.jpg');\n  background-size: cover;\n  background-position: bottom;\n  background-repeat: no-repeat;\n"]))),w=function(){var n=(0,m.useState)(!0);n[0],n[1];return(0,f.jsxs)(v,{children:[(0,f.jsx)(x,{}),(0,f.jsx)(g,{})]})},b=r.Z.div(c||(c=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.4);\n  position: absolute;\n"]))),Z=r.Z.div(u||(u=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  background-image: url('/images/lightView.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]))),j=function(){var n=(0,m.useState)(!0);n[0],n[1];return(0,f.jsx)(Z,{children:(0,f.jsx)(b,{})})},k=t(5697),y=t.n(k);const z=n=>{const{color:e,size:t,...i}=n;return m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:e,...i},m.createElement("path",{d:"M11.29,11.46a1,1,0,0,0,1.42,0l3-3A1,1,0,1,0,14.29,7L12,9.34,9.71,7A1,1,0,1,0,8.29,8.46Zm3,1.08L12,14.84l-2.29-2.3A1,1,0,0,0,8.29,14l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z"}))};z.propTypes={color:y().string,size:y().oneOfType([y().string,y().number])},z.defaultProps={color:"currentColor",size:"24"};var _,E,T,S,M,N,P,A,C,F=z,O=t(917),R=(0,O.F4)(_||(_=(0,i.Z)(["\n  50% {\n    opacity: 0;\n  }\n"]))),J=(0,O.F4)(E||(E=(0,i.Z)(["\n    0% {\n        bottom:5rem;\n    }\n    50%{\n        bottom:6rem;\n    }\n    100%{\n        bottom:5rem;\n    }\n"]))),L=r.Z.div(T||(T=(0,i.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n  position: relative;\n"]))),X=r.Z.div(S||(S=(0,i.Z)(["\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n"]))),q=r.Z.p(M||(M=(0,i.Z)(["\n  height: 3rem;\n  /* font-size: 2.3rem; */\n  font-size: 1.5rem;\n  white-space: pre;\n  display: flex;\n  align-items: end;\n  .cursor {\n    display: inline-block;\n    width: 2px;\n    height: 1em;\n    background-color: var(--text-color);\n    margin-left: 2px;\n    animation: "," 1s step-start infinite;\n  }\n  @media (min-width: 420px) {\n    font-size: 1.5rem;\n  }\n  @media (min-width: 768px) {\n    font-size: 2rem;\n  }\n  @media (min-width: 992px) {\n    font-size: 2.3rem;\n  }\n  @media (min-width: 1400px) {\n    font-size: 2.5rem;\n  }\n"])),R),B=r.Z.span(N||(N=(0,i.Z)(["\n  font-size: 2.5rem;\n  color: var(--selected-text-color);\n  @media (min-width: 420px) {\n    font-size: 2.5rem;\n  }\n  @media (min-width: 768px) {\n    font-size: 3rem;\n  }\n  @media (min-width: 992px) {\n    font-size: 3.3rem;\n  }\n  @media (min-width: 1400px) {\n    font-size: 3.5rem;\n  }\n"]))),H=(0,r.Z)(F)(P||(P=(0,i.Z)(["\n  position: absolute;\n  bottom: 4rem;\n  width: 4rem;\n  height: 5rem;\n  color: var(--selected-text-color);\n  animation: "," 2s infinite;\n  @media (min-width: 420px) {\n    width: 4rem;\n    height: 4rem;\n  }\n  @media (min-width: 768px) {\n    width: 5rem;\n    height: 5rem;\n  }\n"])),J),I=function(n){var e=n.text;return(0,f.jsxs)(L,{children:[(0,f.jsxs)(X,{children:[(0,f.jsx)(q,{children:"I can turn ideas into reality"}),(0,f.jsxs)(q,{children:["with ",(0,f.jsx)(B,{children:e}),(0,f.jsx)("span",{className:"cursor"})]})]}),(0,f.jsx)(H,{})]})},V=function(){var n=["JavaScript","TypeScript","NextJs","React"],e=(0,m.useState)(""),t=e[0],i=e[1],r=(0,m.useState)(n[0].split("")),o=r[0],a=r[1],s=(0,m.useState)(0),h=s[0],d=s[1],c=(0,m.useState)(!1),u=c[0],l=c[1];(0,m.useEffect)((function(){var n=setTimeout((function(){!u&&o.length>0?i((function(n){var e=n+o.shift();return o.length||setTimeout((function(){l(!0)}),1e3),e})):u&&t.length>0&&i((function(n){return n.slice(0,-1)})),u&&0===t.length&&p()}),u?50:100);return function(){return clearTimeout(n)}}),[t,o,u,n,h]);var p=function(){var e=(h+1)%n.length;d(e),a(n[e].split("")),l(!1)};return(0,f.jsx)(I,{text:t})},W=t(4694),D=t(5327),G=t(5787),K=r.Z.div(A||(A=(0,i.Z)(["\n  width: 100%;\n"]))),Q=r.Z.div(C||(C=(0,i.Z)(["\n  width:100%;\n  background-color: rgba(255,255,255,.1);\n  backdrop-filter: blur(.3rem);\n  border: .5px solid rgba(255,255,255,.1);\n  box-shadow: 0 1rem 2rem 0 rgba( 0, 0, 0, 0.2 );\n  padding: 1rem 2rem;\n  border-radius: 1rem;\n"]))),U=function(){var n=(0,o.F)().theme;return(0,f.jsxs)(K,{children:["dark"===n?(0,f.jsx)(w,{}):(0,f.jsx)(j,{}),(0,f.jsx)(V,{}),(0,f.jsxs)(Q,{children:[(0,f.jsx)(G.j1,{children:"Hello, Web!"}),(0,f.jsx)(W.Z,{text:D.w_.intro})]})]})};function Y(){return(0,f.jsx)(U,{})}},8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5068)}])}},function(n){n.O(0,[816,777,774,888,179],(function(){return e=8312,n(n.s=e);var e}));var e=n.O();_N_E=e}]);