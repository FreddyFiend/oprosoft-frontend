(()=>{var e={1773:(e,t,o)=>{"use strict";o(5363),o(71);var r=o(8880),n=o(2277),a=o(3673);function i(e,t,o,r,n,i){const s=(0,a.up)("router-view"),l=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a.Wm)(l)],64)}var s=o(7957),l=o.n(s);const c=e=>((0,a.dD)("data-v-8aee0a34"),e=e(),(0,a.Cn)(),e),d={class:"q-pa-md footer row bg-blue-grey-9 justify-around items-center"},u={class:"logo-area column col-md-2 col-sm-3 col-xs-12 gt-xs"},p={class:"logo col-6 column justify-center items-center"},f=c((()=>(0,a._)("h6",null,"About Us",-1))),h=c((()=>(0,a._)("hr",{width:"100%"},null,-1))),m={class:"links"},v=(0,a.uE)('<div class="logo-area column col-md-3 col-sm-4 col-xs-12 justify-center items-center" data-v-8aee0a34><div class="logo col-1" data-v-8aee0a34><img src="'+l()+'" width="100px" alt="" srcset="" data-v-8aee0a34></div><h6 data-v-8aee0a34>OPROSOFT</h6><p class="col" data-v-8aee0a34> Oprosoft features a user experience designed for maximum productivity and ease of use by User-friendly design, Automated workflows, Intuitive navigation, Groupware integration , Raising Technology platforms since 2004. </p><hr width="100%" data-v-8aee0a34><p data-v-8aee0a34>Copyright Oprosoft InfoTech - All Rights Reserved</p></div>',1),g={class:"logo-area column justify-center items-center col-md-2 col-sm-3 col-xs-12"},b={class:"logo col-6"},y=c((()=>(0,a._)("h6",null,"Contact Us",-1))),w={class:"q-pa-md contactus"},_={class:"text-white q-gutter-md"};function C(e,t,o,r,n,i){const s=(0,a.up)("q-icon");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",u,[(0,a._)("div",p,[f,h,(0,a._)("ul",m,[(0,a._)("li",{onClick:t[0]||(t[0]=e=>this.$router.push("/"))},"Home"),(0,a._)("li",{onClick:t[1]||(t[1]=e=>this.$router.push("services"))},"Services"),(0,a._)("li",{onClick:t[2]||(t[2]=e=>this.$router.push("about"))},"About"),(0,a._)("li",{onClick:t[3]||(t[3]=e=>this.$router.push("contact"))},"Contact")])])]),v,(0,a._)("div",g,[(0,a._)("div",b,[y,(0,a._)("div",w,[(0,a._)("div",_,[(0,a.Wm)(s,{name:"facebook",size:"xl"}),(0,a.Wm)(s,{name:"whatsapp",size:"xl"}),(0,a.Wm)(s,{name:"email",size:"xl"})])])])])])}const k={name:"Footer"};var x=o(4260),O=o(4554),P=o(7518),j=o.n(P);const A=(0,x.Z)(k,[["render",C],["__scopeId","data-v-8aee0a34"]]),E=A;j()(k,"components",{QIcon:O.Z});const T=(0,a.aZ)({name:"App",components:{Footer:E}}),S=(0,x.Z)(T,[["render",i]]),F=S;var q=o(7083),N=o(9582);const L=[{path:"/",component:()=>Promise.all([o.e(736),o.e(418)]).then(o.bind(o,2418)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(242)]).then(o.bind(o,1242))}]},{path:"/services",component:()=>Promise.all([o.e(736),o.e(418)]).then(o.bind(o,2418)),children:[{path:"",component:()=>o.e(824).then(o.bind(o,3824))}]},{path:"/contact",component:()=>Promise.all([o.e(736),o.e(418)]).then(o.bind(o,2418)),children:[{path:"",component:()=>o.e(351).then(o.bind(o,8351))}]},{path:"/about",component:()=>Promise.all([o.e(736),o.e(418)]).then(o.bind(o,2418)),children:[{path:"",component:()=>o.e(615).then(o.bind(o,2615))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(193)]).then(o.bind(o,2193))}],$=L,B=(0,q.BC)((function(){const e=N.r5,t=(0,N.p7)({scrollBehavior:()=>({left:0,top:0}),routes:$,history:e("")});return t}));async function D(e,t){const o="function"===typeof B?await B({}):B,r=e(F);return r.use(n.Z,t),{app:r,router:o}}const I={config:{}},R="";async function U({app:e,router:t},o){let r=!1;const n=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},a=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let l=0;!1===r&&l<o.length;l++)try{await o[l]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:R})}catch(s){return s&&s.url?void a(s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&(e.use(t),e.mount("#q-app"))}D(r.ri,I).then((e=>Promise.all([Promise.resolve().then(o.bind(o,5474))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));U(e,o)}))))},5474:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s,api:()=>i});var r=o(7083),n=o(52),a=o.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},7957:(e,t,o)=>{e.exports=o.p+"img/logogrey.b81569f2.png"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,(()=>{var e=[];o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,n,a]=e[d],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{193:"ee479a47",242:"5678062d",351:"adac53f4",418:"5ac4026d",615:"7582ddac",824:"35ed2069"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"3ada1e4d",242:"74616ae5",351:"3a710408",418:"b478ad2d",615:"c788e8db",736:"5a1490d6",824:"a28e3a43"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="oprosoft-frontend:";o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var p=(t,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=r=>new Promise(((n,a)=>{var i=o.miniCssF(r),s=o.p+i;if(t(i,s))return n();e(r,s,n,a)})),n={143:0};o.f.miniCss=(e,t)=>{var o={242:1,351:1,418:1,615:1,824:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=a);var i=o.p+o.u(t),s=new Error,l=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var d=l(o)}for(t&&t(r);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return o.O(d)},r=self["webpackChunkoprosoft_frontend"]=self["webpackChunkoprosoft_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(1773)));r=o.O(r)})();