(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8283:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return an}});var i=e(1383),r=e(6829),o=e(9836),a=e(1571);function s(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var d,c,u,h=e(9499),l=e(7294),m=e(5893),f=r.Z.canvas(d||(d=(0,i.Z)(["\n  width: 100%;\n  height: 100vh;\n  background: transparent;\n"]))),p=function(){var n=(0,l.useRef)(null);return(0,l.useEffect)((function(){for(var t,e=n.current,i=e.getContext("2d"),r=[],o=function(){function n(t,e,i,r,o){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(0,h.Z)(this,"index",void 0),(0,h.Z)(this,"x",void 0),(0,h.Z)(this,"y",void 0),(0,h.Z)(this,"speed",void 0),(0,h.Z)(this,"length",void 0),this.index=t,this.x=e,this.y=i,this.speed=r,this.length=o}var t,e,r;return t=n,(e=[{key:"draw",value:function(){i.beginPath(),i.strokeStyle="#dfdfdf",i.moveTo(this.x,this.y),i.lineTo(this.x,this.y+this.length),i.stroke(),i.closePath()}}])&&s(t.prototype,e),r&&s(t,r),n}(),a=0;a<200;a++){var d=Math.random()*e.width,c=Math.random()*e.height,u=2*Math.random()+1,l=5*Math.random()+2;r.push(new o(a,d,c,u,l))}return function n(){i.clearRect(0,0,e.width,e.height),r.forEach((function(n){n.y+=n.speed,n.y>e.height&&(n.y=0,n.x=Math.random()*e.width,n.speed=6*Math.random()+1,n.length=5*Math.random()+2),n.draw()})),t=requestAnimationFrame(n)}(),function(){cancelAnimationFrame(t)}}),[]),(0,m.jsx)(f,{ref:n,width:1e3,height:400})},g=r.Z.div(c||(c=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n"]))),x=r.Z.div(u||(u=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  background-image: url('/images/view.jpg');\n  background-size: cover;\n  background-position: bottom;\n  background-repeat: no-repeat;\n"]))),v=function(){var n=(0,l.useState)(!0);n[0],n[1];return(0,m.jsxs)(x,{children:[(0,m.jsx)(g,{}),(0,m.jsx)(p,{})]})},w=e(2587);var b=e(2937);function Z(n){return function(n){if(Array.isArray(n))return(0,w.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,b.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k,y,j,z,E,S,T=e(917),_=(0,T.F4)(k||(k=(0,i.Z)(["\n  0% { transform: translateY(-10vh); }\n  100% { transform: translateY(100vh); }\n"]))),F=(0,T.F4)(y||(y=(0,i.Z)(["\n  0%, 100% { transform: rotate(-3deg); }\n  50% { transform: rotate(3deg); }\n"]))),M=r.Z.div(j||(j=(0,i.Z)(["\n  position: fixed;\n  width: 10px;\n  height: 10px;\n  background-color: pink;\n  opacity: 0.5;\n  border-radius: 50%;\n  pointer-events: none;\n  animation: "," 10s linear, "," 4s ease-in-out infinite;\n"])),_,F),A=function(){var n=(0,l.useState)([]),t=n[0],e=n[1];return(0,l.useEffect)((function(){var n=setInterval((function(){var n={id:Math.random(),style:{left:"".concat(100*Math.random(),"vw")}};e((function(t){return[].concat(Z(t),[n])}))}),300);return function(){return clearInterval(n)}}),[]),(0,m.jsx)(m.Fragment,{children:t.map((function(n){return(0,m.jsx)(M,{style:n.style},n.id)}))})},C=r.Z.div(z||(z=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.7);\n  position: absolute;\n"]))),N=r.Z.div(E||(E=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  background-image: url('images/lightView.jpeg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: rgba(255,255,255,0.9);\n"]))),P=(r.Z.video(S||(S=(0,i.Z)(["\noverflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  scale:4.5;\n  @media (min-width:420px){\n  scale: 4;\n      }\n      @media (min-width: 768px) {\n  scale: 3;\n      }\n      @media (min-width: 992px) {\n  scale: 2;\n      }\n      @media (min-width: 1400px) {\n  scale: 1.2;\n      }\n"]))),function(){var n=(0,l.useState)(!0);n[0],n[1];return(0,m.jsxs)(N,{children:[(0,m.jsx)(A,{}),(0,m.jsx)(C,{})]})}),I=e(5697),O=e.n(I);const R=n=>{const{color:t,size:e,...i}=n;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:t,...i},l.createElement("path",{d:"M11.29,11.46a1,1,0,0,0,1.42,0l3-3A1,1,0,1,0,14.29,7L12,9.34,9.71,7A1,1,0,1,0,8.29,8.46Zm3,1.08L12,14.84l-2.29-2.3A1,1,0,0,0,8.29,14l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z"}))};R.propTypes={color:O().string,size:O().oneOfType([O().string,O().number])},R.defaultProps={color:"currentColor",size:"24"};var J,L,X,Y,q,B,V,D,G=R,H=(0,T.F4)(J||(J=(0,i.Z)(["\n  50% {\n    opacity: 0;\n  }\n"]))),K=(0,T.F4)(L||(L=(0,i.Z)(["\n    0% {\n        bottom:5rem;\n    }\n    50%{\n        bottom:6rem;\n    }\n    100%{\n        bottom:5rem;\n    }\n"]))),Q=r.Z.div(X||(X=(0,i.Z)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5rem;\n  position: relative;\n"]))),U=r.Z.div(Y||(Y=(0,i.Z)(["\n  height: 15rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n"]))),W=r.Z.p(q||(q=(0,i.Z)(["\n  height: 3rem;\n  /* font-size: 2.3rem; */\n  font-size: 1.5rem;\n  white-space: pre;\n  display: flex;\n  align-items: end;\n  .cursor {\n    display: inline-block;\n    width: 2px;\n    height: 1em;\n    background-color: var(--text-color);\n    margin-left: 2px;\n    animation: "," 1s step-start infinite;\n  }\n  @media (min-width: 420px) {\n    font-size: 1.5rem;\n  }\n  @media (min-width: 768px) {\n    font-size: 2rem;\n  }\n  @media (min-width: 992px) {\n    font-size: 2.3rem;\n  }\n  @media (min-width: 1400px) {\n    font-size: 2.5rem;\n  }\n"])),H),$=r.Z.span(B||(B=(0,i.Z)(["\n  font-size: 2.5rem;\n  color: var(--selected-text-color);\n  @media (min-width: 420px) {\n    font-size: 2.5rem;\n  }\n  @media (min-width: 768px) {\n    font-size: 3rem;\n  }\n  @media (min-width: 992px) {\n    font-size: 3.3rem;\n  }\n  @media (min-width: 1400px) {\n    font-size: 3.5rem;\n  }\n"]))),nn=(0,r.Z)(G)(V||(V=(0,i.Z)(["\n  position: absolute;\n  bottom: 4rem;\n  width: 4rem;\n  height: 5rem;\n  color: var(--selected-text-color);\n  animation: "," 2s infinite;\n  @media (min-width: 420px) {\n    width: 4rem;\n    height: 4rem;\n  }\n  @media (min-width: 768px) {\n    width: 5rem;\n    height: 5rem;\n  }\n"])),K),tn=function(n){var t=n.text;return(0,m.jsxs)(Q,{children:[(0,m.jsxs)(U,{children:[(0,m.jsx)(W,{children:"I can turn ideas into reality"}),(0,m.jsxs)(W,{children:["with ",(0,m.jsx)($,{children:t}),(0,m.jsx)("span",{className:"cursor"})]})]}),(0,m.jsx)(nn,{})]})},en=function(){var n=["JavaScript","TypeScript","NextJs","React"],t=(0,l.useState)(""),e=t[0],i=t[1],r=(0,l.useState)(n[0].split("")),o=r[0],a=r[1],s=(0,l.useState)(0),d=s[0],c=s[1],u=(0,l.useState)(!1),h=u[0],f=u[1];(0,l.useEffect)((function(){var n=setTimeout((function(){!h&&o.length>0?i((function(n){var t=n+o.shift();return o.length||setTimeout((function(){f(!0)}),1e3),t})):h&&e.length>0&&i((function(n){return n.slice(0,-1)})),h&&0===e.length&&p()}),h?50:100);return function(){return clearTimeout(n)}}),[e,o,h,n,d]);var p=function(){var t=(d+1)%n.length;c(t),a(n[t].split("")),f(!1)};return(0,m.jsx)(tn,{text:e})},rn=r.Z.div(D||(D=(0,i.Z)(["\n  width: 100%;\n"]))),on=function(){var n=(0,a.F)().theme;return(0,m.jsxs)(rn,{children:["dark"===n?(0,m.jsx)(v,{}):(0,m.jsx)(P,{}),(0,m.jsx)(en,{}),(0,m.jsx)(o.Z,{title:"asdasd",Component:(0,m.jsx)("div",{children:"asdasdasd"})})]})};function an(){return(0,m.jsx)(on,{})}},9836:function(n,t,e){"use strict";e.d(t,{Z:function(){return f}});var i,r,o,a=e(1571),s=e(1383),d=e(917),c=e(6829),u=(0,d.F4)(i||(i=(0,s.Z)(["\n    0% { background-position: 0% 50%; }\n    15% { background-position: 50% 50%; }\n    30% { background-position: 75% 50%; }\n    45% { background-position: 100% 50%; }\n    60% { background-position: 75% 50%; }\n    75% { background-position: 50% 50%; }\n    88% { background-position: 25% 50%; }\n    100% { background-position: 0% 50%; }\n"]))),h=c.Z.section(r||(r=(0,s.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n"]))),l=c.Z.h3(o||(o=(0,s.Z)(["\n  width: 100%;\n  text-align: center;\n  border-bottom: 0.5px solid var(--text-color-disabled);\n  font-size: 1.875rem;\n  font-weight: 500;\n  padding: 2rem;\n  margin-bottom: 30px;\n  background: ",";\n  background-size: 200% 200%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: "," 5s linear infinite;\n"])),(function(n){return"dark"===n.theme?"linear-gradient(45deg, #f9f295, #e0aa3e, #b88a44, #f9f295)":"linear-gradient(45deg, #009473, #FA7268, #008080, #009473)"}),u),m=e(5893),f=function(n){var t=n.title,e=n.Component,i=(0,a.F)().theme;return(0,m.jsxs)(h,{children:[(0,m.jsx)(l,{theme:i,children:t}),e]})}},8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(8283)}])}},function(n){n.O(0,[774,888,179],(function(){return t=8312,n(n.s=t);var t}));var t=n.O();_N_E=t}]);