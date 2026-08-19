function Uy(s,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in s)){const c=Object.getOwnPropertyDescriptor(r,l);c&&Object.defineProperty(s,l,c.get?c:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ly(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bd={exports:{}},Wo={};var i_;function Ny(){if(i_)return Wo;i_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=e,Wo.jsx=i,Wo.jsxs=i,Wo}var a_;function Oy(){return a_||(a_=1,bd.exports=Ny()),bd.exports}var Ne=Oy(),Ed={exports:{}},ot={};var r_;function Py(){if(r_)return ot;r_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(L,J,Te){this.props=L,this.context=J,this.refs=y,this.updater=Te||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,J){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,J,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function N(){}N.prototype=x.prototype;function F(L,J,Te){this.props=L,this.context=J,this.refs=y,this.updater=Te||E}var w=F.prototype=new N;w.constructor=F,C(w,x.prototype),w.isPureReactComponent=!0;var B=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(L,J,Te){var De=Te.ref;return{$$typeof:s,type:L,key:J,ref:De!==void 0?De:null,props:Te}}function k(L,J){return D(L.type,J,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function Z(L){var J={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Te){return J[Te]})}var me=/\/+/g;function ne(L,J){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):J.toString(36)}function Y(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(O,O):(L.status="pending",L.then(function(J){L.status==="pending"&&(L.status="fulfilled",L.value=J)},function(J){L.status==="pending"&&(L.status="rejected",L.reason=J)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,J,Te,De,Fe){var se=typeof L;(se==="undefined"||se==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case s:case e:Me=!0;break;case v:return Me=L._init,P(Me(L._payload),J,Te,De,Fe)}}if(Me)return Fe=Fe(L),Me=De===""?"."+ne(L,0):De,B(Fe)?(Te="",Me!=null&&(Te=Me.replace(me,"$&/")+"/"),P(Fe,J,Te,"",function(it){return it})):Fe!=null&&(V(Fe)&&(Fe=k(Fe,Te+(Fe.key==null||L&&L.key===Fe.key?"":(""+Fe.key).replace(me,"$&/")+"/")+Me)),J.push(Fe)),1;Me=0;var Ee=De===""?".":De+":";if(B(L))for(var Xe=0;Xe<L.length;Xe++)De=L[Xe],se=Ee+ne(De,Xe),Me+=P(De,J,Te,se,Fe);else if(Xe=M(L),typeof Xe=="function")for(L=Xe.call(L),Xe=0;!(De=L.next()).done;)De=De.value,se=Ee+ne(De,Xe++),Me+=P(De,J,Te,se,Fe);else if(se==="object"){if(typeof L.then=="function")return P(Y(L),J,Te,De,Fe);throw J=String(L),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Me}function G(L,J,Te){if(L==null)return L;var De=[],Fe=0;return P(L,De,"","",function(se){return J.call(Te,se,Fe++)}),De}function ee(L){if(L._status===-1){var J=L._result;J=J(),J.then(function(Te){(L._status===0||L._status===-1)&&(L._status=1,L._result=Te)},function(Te){(L._status===0||L._status===-1)&&(L._status=2,L._result=Te)}),L._status===-1&&(L._status=0,L._result=J)}if(L._status===1)return L._result.default;throw L._result}var xe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Ae={map:G,forEach:function(L,J,Te){G(L,function(){J.apply(this,arguments)},Te)},count:function(L){var J=0;return G(L,function(){J++}),J},toArray:function(L){return G(L,function(J){return J})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ot.Activity=_,ot.Children=Ae,ot.Component=x,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=F,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},ot.cache=function(L){return function(){return L.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(L,J,Te){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var De=C({},L.props),Fe=L.key;if(J!=null)for(se in J.key!==void 0&&(Fe=""+J.key),J)!T.call(J,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&J.ref===void 0||(De[se]=J[se]);var se=arguments.length-2;if(se===1)De.children=Te;else if(1<se){for(var Me=Array(se),Ee=0;Ee<se;Ee++)Me[Ee]=arguments[Ee+2];De.children=Me}return D(L.type,Fe,De)},ot.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ot.createElement=function(L,J,Te){var De,Fe={},se=null;if(J!=null)for(De in J.key!==void 0&&(se=""+J.key),J)T.call(J,De)&&De!=="key"&&De!=="__self"&&De!=="__source"&&(Fe[De]=J[De]);var Me=arguments.length-2;if(Me===1)Fe.children=Te;else if(1<Me){for(var Ee=Array(Me),Xe=0;Xe<Me;Xe++)Ee[Xe]=arguments[Xe+2];Fe.children=Ee}if(L&&L.defaultProps)for(De in Me=L.defaultProps,Me)Fe[De]===void 0&&(Fe[De]=Me[De]);return D(L,se,Fe)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(L){return{$$typeof:p,render:L}},ot.isValidElement=V,ot.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ee}},ot.memo=function(L,J){return{$$typeof:h,type:L,compare:J===void 0?null:J}},ot.startTransition=function(L){var J=z.T,Te={};z.T=Te;try{var De=L(),Fe=z.S;Fe!==null&&Fe(Te,De),typeof De=="object"&&De!==null&&typeof De.then=="function"&&De.then(O,xe)}catch(se){xe(se)}finally{J!==null&&Te.types!==null&&(J.types=Te.types),z.T=J}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(L){return z.H.use(L)},ot.useActionState=function(L,J,Te){return z.H.useActionState(L,J,Te)},ot.useCallback=function(L,J){return z.H.useCallback(L,J)},ot.useContext=function(L){return z.H.useContext(L)},ot.useDebugValue=function(){},ot.useDeferredValue=function(L,J){return z.H.useDeferredValue(L,J)},ot.useEffect=function(L,J){return z.H.useEffect(L,J)},ot.useEffectEvent=function(L){return z.H.useEffectEvent(L)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(L,J,Te){return z.H.useImperativeHandle(L,J,Te)},ot.useInsertionEffect=function(L,J){return z.H.useInsertionEffect(L,J)},ot.useLayoutEffect=function(L,J){return z.H.useLayoutEffect(L,J)},ot.useMemo=function(L,J){return z.H.useMemo(L,J)},ot.useOptimistic=function(L,J){return z.H.useOptimistic(L,J)},ot.useReducer=function(L,J,Te){return z.H.useReducer(L,J,Te)},ot.useRef=function(L){return z.H.useRef(L)},ot.useState=function(L){return z.H.useState(L)},ot.useSyncExternalStore=function(L,J,Te){return z.H.useSyncExternalStore(L,J,Te)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.0",ot}var s_;function np(){return s_||(s_=1,Ed.exports=Py()),Ed.exports}var Re=np();const Iy=Ly(Re),zy=Uy({__proto__:null,default:Iy},[Re]);var Td={exports:{}},qo={},Ad={exports:{}},Rd={};var o_;function By(){return o_||(o_=1,(function(s){function e(P,G){var ee=P.length;P.push(G);e:for(;0<ee;){var xe=ee-1>>>1,Ae=P[xe];if(0<l(Ae,G))P[xe]=G,P[ee]=Ae,ee=xe;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var G=P[0],ee=P.pop();if(ee!==G){P[0]=ee;e:for(var xe=0,Ae=P.length,L=Ae>>>1;xe<L;){var J=2*(xe+1)-1,Te=P[J],De=J+1,Fe=P[De];if(0>l(Te,ee))De<Ae&&0>l(Fe,Te)?(P[xe]=Fe,P[De]=ee,xe=De):(P[xe]=Te,P[J]=ee,xe=J);else if(De<Ae&&0>l(Fe,ee))P[xe]=Fe,P[De]=ee,xe=De;else break e}}return G}function l(P,G){var ee=P.sortIndex-G.sortIndex;return ee!==0?ee:P.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,_=null,g=3,M=!1,E=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var G=i(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=P)r(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function B(P){if(C=!1,w(P),!E)if(i(m)!==null)E=!0,O||(O=!0,Z());else{var G=i(h);G!==null&&Y(B,G.startTime-P)}}var O=!1,z=-1,T=5,D=-1;function k(){return y?!0:!(s.unstable_now()-D<T)}function V(){if(y=!1,O){var P=s.unstable_now();D=P;var G=!0;try{e:{E=!1,C&&(C=!1,N(z),z=-1),M=!0;var ee=g;try{t:{for(w(P),_=i(m);_!==null&&!(_.expirationTime>P&&k());){var xe=_.callback;if(typeof xe=="function"){_.callback=null,g=_.priorityLevel;var Ae=xe(_.expirationTime<=P);if(P=s.unstable_now(),typeof Ae=="function"){_.callback=Ae,w(P),G=!0;break t}_===i(m)&&r(m),w(P)}else r(m);_=i(m)}if(_!==null)G=!0;else{var L=i(h);L!==null&&Y(B,L.startTime-P),G=!1}}break e}finally{_=null,g=ee,M=!1}G=void 0}}finally{G?Z():O=!1}}}var Z;if(typeof F=="function")Z=function(){F(V)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ne=me.port2;me.port1.onmessage=V,Z=function(){ne.postMessage(null)}}else Z=function(){x(V,0)};function Y(P,G){z=x(function(){P(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(P){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ee=g;g=G;try{return P()}finally{g=ee}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ee=g;g=P;try{return G()}finally{g=ee}},s.unstable_scheduleCallback=function(P,G,ee){var xe=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?xe+ee:xe):ee=xe,P){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=ee+Ae,P={id:v++,callback:G,priorityLevel:P,startTime:ee,expirationTime:Ae,sortIndex:-1},ee>xe?(P.sortIndex=ee,e(h,P),i(m)===null&&P===i(h)&&(C?(N(z),z=-1):C=!0,Y(B,ee-xe))):(P.sortIndex=Ae,e(m,P),E||M||(E=!0,O||(O=!0,Z()))),P},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(P){var G=g;return function(){var ee=g;g=G;try{return P.apply(this,arguments)}finally{g=ee}}}})(Rd)),Rd}var l_;function Fy(){return l_||(l_=1,Ad.exports=By()),Ad.exports}var Cd={exports:{}},Vn={};var c_;function Hy(){if(c_)return Vn;c_=1;var s=np();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Vn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},Vn.flushSync=function(m){var h=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=v,r.d.f()}},Vn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Vn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Vn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Vn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Vn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Vn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Vn.requestFormReset=function(m){r.d.r(m)},Vn.unstable_batchedUpdates=function(m,h){return m(h)},Vn.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Vn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Vn.version="19.2.0",Vn}var u_;function Lv(){if(u_)return Cd.exports;u_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cd.exports=Hy(),Cd.exports}var f_;function Gy(){if(f_)return qo;f_=1;var s=Fy(),e=np(),i=Lv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=f;break}if(R===o){S=!0,o=u,a=f;break}R=R.sibling}if(!S){for(R=f.child;R;){if(R===a){S=!0,a=f,o=u;break}if(R===o){S=!0,o=f,a=u;break}R=R.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),F=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ne(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ne(t(n))}catch{}}return null}var Y=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},xe=[],Ae=-1;function L(t){return{current:t}}function J(t){0>Ae||(t.current=xe[Ae],xe[Ae]=null,Ae--)}function Te(t,n){Ae++,xe[Ae]=t.current,t.current=n}var De=L(null),Fe=L(null),se=L(null),Me=L(null);function Ee(t,n){switch(Te(se,n),Te(Fe,t),Te(De,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?A0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=A0(n),t=R0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(De),Te(De,t)}function Xe(){J(De),J(Fe),J(se)}function it(t){t.memoizedState!==null&&Te(Me,t);var n=De.current,a=R0(n,t.type);n!==a&&(Te(Fe,t),Te(De,a))}function Qe(t){Fe.current===t&&(J(De),J(Fe)),Me.current===t&&(J(Me),Go._currentValue=ee)}var Ft,ct;function mt(t){if(Ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ft=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+t+ct}var _t=!1;function pt(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var ue=de}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(de){ue=de}t.call(ye.prototype)}}else{try{throw Error()}catch(de){ue=de}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&ue&&typeof de.stack=="string")return[de.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],R=f[1];if(S&&R){var H=S.split(`
`),ie=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var ve=`
`+H[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function Ht(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return mt("Activity");default:return""}}function cn(t){try{var n="",a=null;do n+=Ht(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var $t=Object.prototype.hasOwnProperty,Gt=s.unstable_scheduleCallback,Vt=s.unstable_cancelCallback,un=s.unstable_shouldYield,W=s.unstable_requestPaint,zt=s.unstable_now,Ut=s.unstable_getCurrentPriorityLevel,U=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,K=s.unstable_NormalPriority,oe=s.unstable_LowPriority,he=s.unstable_IdlePriority,Ce=s.log,Oe=s.unstable_setDisableYieldValue,ge=null,pe=null;function Ue(t){if(typeof Ce=="function"&&Oe(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(ge,t)}catch{}}var ke=Math.clz32?Math.clz32:je,Ie=Math.log,Pe=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Ie(t)/Pe|0)|0}var $e=256,fe=262144,I=4194304;function j(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function le(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=j(o):(S&=R,S!==0?u=j(S):a||(a=R&~t,a!==0&&(u=j(a))))):(R=o&~f,R!==0?u=j(R):S!==0?u=j(S):a||(a=o&~t,a!==0&&(u=j(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function be(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function we(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _e(){var t=I;return I<<=1,(I&62914560)===0&&(I=4194304),t}function He(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Le(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function st(t,n,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=S&~a;0<a;){var ve=31-ke(a),ye=1<<ve;R[ve]=0,H[ve]=-1;var ue=ie[ve];if(ue!==null)for(ie[ve]=null,ve=0;ve<ue.length;ve++){var de=ue[ve];de!==null&&(de.lane&=-536870913)}a&=~ye}o!==0&&gt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function gt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function en(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ke(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function tn(t,n){var a=n&-n;return a=(a&42)!==0?1:xn(a),(a&(t.suspendedLanes|n))!==0?0:a}function xn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ze(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nt(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Q0(t.type))}function wt(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var fn=Math.random().toString(36).slice(2),At="__reactFiber$"+fn,vt="__reactProps$"+fn,sn="__reactContainer$"+fn,rn="__reactEvents$"+fn,ta="__reactListeners$"+fn,La="__reactHandles$"+fn,na="__reactResources$"+fn,Na="__reactMarker$"+fn;function Oa(t){delete t[At],delete t[vt],delete t[rn],delete t[ta],delete t[La]}function ia(t){var n=t[At];if(n)return n;for(var a=t.parentNode;a;){if(n=a[sn]||a[At]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=O0(t);t!==null;){if(a=t[At])return a;t=O0(t)}return n}t=a,a=t.parentNode}return null}function aa(t){if(t=t[At]||t[sn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Pa(t){var n=t[na];return n||(n=t[na]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mn(t){t[Na]=!0}var _l=new Set,A={};function q(t,n){ce(t,n),ce(t+"Capture",n)}function ce(t,n){for(A[t]=n,t=0;t<n.length;t++)_l.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ge={};function qe(t){return $t.call(Ge,t)?!0:$t.call(re,t)?!1:ae.test(t)?Ge[t]=!0:(re[t]=!0,!1)}function Be(t,n,a){if(qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ye(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ot(t){if(!t._valueTracker){var n=ut(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function dn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function nn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xt=/[\n"\\]/g;function Wt(t){return t.replace(Xt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(t,n,a,o,u,f,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?xt(t,S,tt(n)):a!=null?xt(t,S,tt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+tt(R):t.removeAttribute("name")}function Gn(t,n,a,o,u,f,S,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ot(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ot(t)}function xt(t,n,a){n==="number"&&nn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function si(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function Di(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Y(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ot(t)}function oi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||qt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ui(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&hn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&hn(t,f,n[f])}function kt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ia=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xr(t){return Ia.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ra(){}var xu=null;function Su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,Jr=null;function Tp(t){var n=aa(t);if(n&&(t=n.stateNode)){var a=t[vt]||null;e:switch(t=n.stateNode,n.type){case"input":if(We(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[vt]||null;if(!u)throw Error(r(90));We(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&dn(o)}break e;case"textarea":si(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&wn(t,!!a.multiple,n,!1)}}}var yu=!1;function Ap(t,n,a){if(yu)return t(n,a);yu=!0;try{var o=t(n);return o}finally{if(yu=!1,(Qr!==null||Jr!==null)&&(ac(),Qr&&(n=Qr,t=Jr,Jr=Qr=null,Tp(n),t)))for(n=0;n<t.length;n++)Tp(t[n])}}function io(t,n){var a=t.stateNode;if(a===null)return null;var o=a[vt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(sa)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Mu=!1}var za=null,bu=null,vl=null;function Rp(){if(vl)return vl;var t,n=bu,a=n.length,o,u="value"in za?za.value:za.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return vl=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Cp(){return!1}function jn(t){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sl:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=jn(Sr),ro=_({},Sr,{view:0,detail:0}),wx=jn(ro),Eu,Tu,so,Ml=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Eu=t.screenX-so.screenX,Tu=t.screenY-so.screenY):Tu=Eu=0,so=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),wp=jn(Ml),Dx=_({},Ml,{dataTransfer:0}),Ux=jn(Dx),Lx=_({},ro,{relatedTarget:0}),Au=jn(Lx),Nx=_({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=jn(Nx),Px=_({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ix=jn(Px),zx=_({},Sr,{data:0}),Dp=jn(zx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hx[t])?!!n[t]:!1}function Ru(){return Gx}var Vx=_({},ro,{key:function(t){if(t.key){var n=Bx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kx=jn(Vx),Xx=_({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=jn(Xx),Wx=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),qx=jn(Wx),Yx=_({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=jn(Yx),Kx=_({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=jn(Kx),Jx=_({},Sr,{newState:0,oldState:0}),jx=jn(Jx),$x=[9,13,27,32],Cu=sa&&"CompositionEvent"in window,oo=null;sa&&"documentMode"in document&&(oo=document.documentMode);var eS=sa&&"TextEvent"in window&&!oo,Lp=sa&&(!Cu||oo&&8<oo&&11>=oo),Np=" ",Op=!1;function Pp(t,n){switch(t){case"keyup":return $x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function tS(t,n){switch(t){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Op=!0,Np);case"textInput":return t=n.data,t===Np&&Op?null:t;default:return null}}function nS(t,n){if(jr)return t==="compositionend"||!Cu&&Pp(t,n)?(t=Rp(),vl=bu=za=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iS[t.type]:n==="textarea"}function Bp(t,n,a,o){Qr?Jr?Jr.push(o):Jr=[o]:Qr=o,n=fc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var lo=null,co=null;function aS(t){S0(t,0)}function bl(t){var n=vr(t);if(dn(n))return t}function Fp(t,n){if(t==="change")return n}var Hp=!1;if(sa){var wu;if(sa){var Du="oninput"in document;if(!Du){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Du=typeof Gp.oninput=="function"}wu=Du}else wu=!1;Hp=wu&&(!document.documentMode||9<document.documentMode)}function Vp(){lo&&(lo.detachEvent("onpropertychange",kp),co=lo=null)}function kp(t){if(t.propertyName==="value"&&bl(co)){var n=[];Bp(n,co,t,Su(t)),Ap(aS,n)}}function rS(t,n,a){t==="focusin"?(Vp(),lo=n,co=a,lo.attachEvent("onpropertychange",kp)):t==="focusout"&&Vp()}function sS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(co)}function oS(t,n){if(t==="click")return bl(n)}function lS(t,n){if(t==="input"||t==="change")return bl(n)}function cS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var li=typeof Object.is=="function"?Object.is:cS;function uo(t,n){if(li(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!$t.call(n,u)||!li(t[u],n[u]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,n){var a=Xp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nn(t.document)}return n}function Uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var uS=sa&&"documentMode"in document&&11>=document.documentMode,$r=null,Lu=null,fo=null,Nu=!1;function Zp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||$r==null||$r!==nn(o)||(o=$r,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=fc(Lu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=$r)))}function yr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var es={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},Ou={},Kp={};sa&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Mr(t){if(Ou[t])return Ou[t];if(!es[t])return t;var n=es[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kp)return Ou[t]=n[a];return t}var Qp=Mr("animationend"),Jp=Mr("animationiteration"),jp=Mr("animationstart"),fS=Mr("transitionrun"),dS=Mr("transitionstart"),hS=Mr("transitioncancel"),$p=Mr("transitionend"),em=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Li(t,n){em.set(t,n),q(n,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],ts=0,Iu=0;function Tl(){for(var t=ts,n=Iu=ts=0;n<t;){var a=vi[n];vi[n++]=null;var o=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var f=vi[n];if(vi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&tm(a,u,f)}}function Al(t,n,a,o){vi[ts++]=t,vi[ts++]=n,vi[ts++]=a,vi[ts++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,a,o){return Al(t,n,a,o),Rl(t)}function br(t,n){return Al(t,null,null,n),Rl(t)}function tm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ke(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Rl(t){if(50<Oo)throw Oo=0,Yf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ns={};function pS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,o){return new pS(t,n,a,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,f){var S=0;if(o=t,typeof t=="function")Bu(t)&&(S=1);else if(typeof t=="string")S=xy(t,a,De.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ci(31,a,n,u),t.elementType=D,t.lanes=f,t;case C:return Er(a.children,u,f,n);case y:S=8,u|=24;break;case x:return t=ci(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case B:return t=ci(13,a,n,u),t.elementType=B,t.lanes=f,t;case O:return t=ci(19,a,n,u),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:S=10;break e;case N:S=9;break e;case w:S=11;break e;case z:S=14;break e;case T:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ci(S,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Er(t,n,a,o){return t=ci(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function im(t){var n=ci(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var am=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=am.get(t);return a!==void 0?a:(n={value:t,source:n,stack:cn(n)},am.set(t,n),n)}return{value:t,source:n,stack:cn(n)}}var is=[],as=0,wl=null,ho=0,Si=[],yi=0,Ba=null,Gi=1,Vi="";function la(t,n){is[as++]=ho,is[as++]=wl,wl=t,ho=n}function rm(t,n,a){Si[yi++]=Gi,Si[yi++]=Vi,Si[yi++]=Ba,Ba=t;var o=Gi;t=Vi;var u=32-ke(o)-1;o&=~(1<<u),a+=1;var f=32-ke(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Gi=1<<32-ke(n)+u|a<<u|o,Vi=f+t}else Gi=1<<f|a<<u|o,Vi=t}function Gu(t){t.return!==null&&(la(t,1),rm(t,1,0))}function Vu(t){for(;t===wl;)wl=is[--as],is[as]=null,ho=is[--as],is[as]=null;for(;t===Ba;)Ba=Si[--yi],Si[yi]=null,Vi=Si[--yi],Si[yi]=null,Gi=Si[--yi],Si[yi]=null}function sm(t,n){Si[yi++]=Gi,Si[yi++]=Vi,Si[yi++]=Ba,Gi=n.id,Vi=n.overflow,Ba=t}var Pn=null,on=null,Rt=!1,Fa=null,Mi=!1,ku=Error(r(519));function Ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(xi(n,t)),ku}function om(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[At]=t,n[vt]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)yt(Io[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Di(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||E0(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=ra),n=!0):n=!1,n||Ha(t,!0)}function lm(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Pn=Pn.return}}function rs(t){if(t!==Pn)return!1;if(!Rt)return lm(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ld(t.type,t.memoizedProps)),a=!a),a&&on&&Ha(t),lm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=N0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=N0(t)}else n===27?(n=on,er(t.type)?(t=hd,hd=null,on=t):on=n):on=Pn?Ei(t.stateNode.nextSibling):null;return!0}function Tr(){on=Pn=null,Rt=!1}function Xu(){var t=Fa;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Fa=null),t}function po(t){Fa===null?Fa=[t]:Fa.push(t)}var Wu=L(null),Ar=null,ca=null;function Ga(t,n,a){Te(Wu,n._currentValue),n._currentValue=a}function ua(t){t._currentValue=Wu.current,J(Wu)}function qu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Yu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),qu(f.return,a,t),o||(S=null);break e}f=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),qu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ss(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=u.type;li(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}u=u.return}t!==null&&Yu(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Ar=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return cm(Ar,t)}function Ul(t,n){return Ar===null&&Rr(t),cm(t,n)}function cm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(r(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var mS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gS=s.unstable_scheduleCallback,_S=s.unstable_NormalPriority,bn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new mS,data:new Map,refCount:0}}function mo(t){t.refCount--,t.refCount===0&&gS(_S,function(){t.controller.abort()})}var go=null,Ku=0,os=0,ls=null;function vS(t,n){if(go===null){var a=go=[];Ku=0,os=$f(),ls={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ku++,n.then(um,um),n}function um(){if(--Ku===0&&go!==null){ls!==null&&(ls.status="fulfilled");var t=go;go=null,os=0,ls=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=P.S;P.S=function(t,n){Zg=zt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vS(t,n),fm!==null&&fm(t,n)};var Cr=L(null);function Qu(){var t=Cr.current;return t!==null?t:an.pooledCache}function Ll(t,n){n===null?Te(Cr,Cr.current):Te(Cr,n.pool)}function dm(){var t=Qu();return t===null?null:{parent:bn._currentValue,pool:t}}var cs=Error(r(460)),Ju=Error(r(474)),Nl=Error(r(542)),Ol={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ra,ra),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t;default:if(typeof n.status=="string")n.then(ra,ra);else{if(t=an,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t}throw Dr=n,cs}}function wr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,cs):a}}var Dr=null;function mm(){if(Dr===null)throw Error(r(459));var t=Dr;return Dr=null,t}function gm(t){if(t===cs||t===Nl)throw Error(r(483))}var us=null,_o=0;function Pl(t){var n=_o;return _o+=1,us===null&&(us=[]),pm(us,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Il(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _m(t){function n(Q,X){if(t){var te=Q.deletions;te===null?(Q.deletions=[X],Q.flags|=16):te.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=oa(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,te){return Q.index=te,t?(te=Q.alternate,te!==null?(te=te.index,te<X?(Q.flags|=67108866,X):te):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,te,Se){return X===null||X.tag!==6?(X=Fu(te,Q.mode,Se),X.return=Q,X):(X=u(X,te),X.return=Q,X)}function H(Q,X,te,Se){var nt=te.type;return nt===C?ve(Q,X,te.props.children,Se,te.key):X!==null&&(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&wr(nt)===X.type)?(X=u(X,te.props),vo(X,te),X.return=Q,X):(X=Cl(te.type,te.key,te.props,null,Q.mode,Se),vo(X,te),X.return=Q,X)}function ie(Q,X,te,Se){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Hu(te,Q.mode,Se),X.return=Q,X):(X=u(X,te.children||[]),X.return=Q,X)}function ve(Q,X,te,Se,nt){return X===null||X.tag!==7?(X=Er(te,Q.mode,Se,nt),X.return=Q,X):(X=u(X,te),X.return=Q,X)}function ye(Q,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Fu(""+X,Q.mode,te),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return te=Cl(X.type,X.key,X.props,null,Q.mode,te),vo(te,X),te.return=Q,te;case E:return X=Hu(X,Q.mode,te),X.return=Q,X;case T:return X=wr(X),ye(Q,X,te)}if(Y(X)||Z(X))return X=Er(X,Q.mode,te,null),X.return=Q,X;if(typeof X.then=="function")return ye(Q,Pl(X),te);if(X.$$typeof===F)return ye(Q,Ul(Q,X),te);Il(Q,X)}return null}function ue(Q,X,te,Se){var nt=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return nt!==null?null:R(Q,X,""+te,Se);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===nt?H(Q,X,te,Se):null;case E:return te.key===nt?ie(Q,X,te,Se):null;case T:return te=wr(te),ue(Q,X,te,Se)}if(Y(te)||Z(te))return nt!==null?null:ve(Q,X,te,Se,null);if(typeof te.then=="function")return ue(Q,X,Pl(te),Se);if(te.$$typeof===F)return ue(Q,X,Ul(Q,te),Se);Il(Q,te)}return null}function de(Q,X,te,Se,nt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(te)||null,R(X,Q,""+Se,nt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case M:return Q=Q.get(Se.key===null?te:Se.key)||null,H(X,Q,Se,nt);case E:return Q=Q.get(Se.key===null?te:Se.key)||null,ie(X,Q,Se,nt);case T:return Se=wr(Se),de(Q,X,te,Se,nt)}if(Y(Se)||Z(Se))return Q=Q.get(te)||null,ve(X,Q,Se,nt,null);if(typeof Se.then=="function")return de(Q,X,te,Pl(Se),nt);if(Se.$$typeof===F)return de(Q,X,te,Ul(X,Se),nt);Il(X,Se)}return null}function Ke(Q,X,te,Se){for(var nt=null,Pt=null,Je=X,dt=X=0,Et=null;Je!==null&&dt<te.length;dt++){Je.index>dt?(Et=Je,Je=null):Et=Je.sibling;var It=ue(Q,Je,te[dt],Se);if(It===null){Je===null&&(Je=Et);break}t&&Je&&It.alternate===null&&n(Q,Je),X=f(It,X,dt),Pt===null?nt=It:Pt.sibling=It,Pt=It,Je=Et}if(dt===te.length)return a(Q,Je),Rt&&la(Q,dt),nt;if(Je===null){for(;dt<te.length;dt++)Je=ye(Q,te[dt],Se),Je!==null&&(X=f(Je,X,dt),Pt===null?nt=Je:Pt.sibling=Je,Pt=Je);return Rt&&la(Q,dt),nt}for(Je=o(Je);dt<te.length;dt++)Et=de(Je,Q,dt,te[dt],Se),Et!==null&&(t&&Et.alternate!==null&&Je.delete(Et.key===null?dt:Et.key),X=f(Et,X,dt),Pt===null?nt=Et:Pt.sibling=Et,Pt=Et);return t&&Je.forEach(function(rr){return n(Q,rr)}),Rt&&la(Q,dt),nt}function at(Q,X,te,Se){if(te==null)throw Error(r(151));for(var nt=null,Pt=null,Je=X,dt=X=0,Et=null,It=te.next();Je!==null&&!It.done;dt++,It=te.next()){Je.index>dt?(Et=Je,Je=null):Et=Je.sibling;var rr=ue(Q,Je,It.value,Se);if(rr===null){Je===null&&(Je=Et);break}t&&Je&&rr.alternate===null&&n(Q,Je),X=f(rr,X,dt),Pt===null?nt=rr:Pt.sibling=rr,Pt=rr,Je=Et}if(It.done)return a(Q,Je),Rt&&la(Q,dt),nt;if(Je===null){for(;!It.done;dt++,It=te.next())It=ye(Q,It.value,Se),It!==null&&(X=f(It,X,dt),Pt===null?nt=It:Pt.sibling=It,Pt=It);return Rt&&la(Q,dt),nt}for(Je=o(Je);!It.done;dt++,It=te.next())It=de(Je,Q,dt,It.value,Se),It!==null&&(t&&It.alternate!==null&&Je.delete(It.key===null?dt:It.key),X=f(It,X,dt),Pt===null?nt=It:Pt.sibling=It,Pt=It);return t&&Je.forEach(function(Dy){return n(Q,Dy)}),Rt&&la(Q,dt),nt}function jt(Q,X,te,Se){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var nt=te.key;X!==null;){if(X.key===nt){if(nt=te.type,nt===C){if(X.tag===7){a(Q,X.sibling),Se=u(X,te.props.children),Se.return=Q,Q=Se;break e}}else if(X.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&wr(nt)===X.type){a(Q,X.sibling),Se=u(X,te.props),vo(Se,te),Se.return=Q,Q=Se;break e}a(Q,X);break}else n(Q,X);X=X.sibling}te.type===C?(Se=Er(te.props.children,Q.mode,Se,te.key),Se.return=Q,Q=Se):(Se=Cl(te.type,te.key,te.props,null,Q.mode,Se),vo(Se,te),Se.return=Q,Q=Se)}return S(Q);case E:e:{for(nt=te.key;X!==null;){if(X.key===nt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(Q,X.sibling),Se=u(X,te.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,X);break}else n(Q,X);X=X.sibling}Se=Hu(te,Q.mode,Se),Se.return=Q,Q=Se}return S(Q);case T:return te=wr(te),jt(Q,X,te,Se)}if(Y(te))return Ke(Q,X,te,Se);if(Z(te)){if(nt=Z(te),typeof nt!="function")throw Error(r(150));return te=nt.call(te),at(Q,X,te,Se)}if(typeof te.then=="function")return jt(Q,X,Pl(te),Se);if(te.$$typeof===F)return jt(Q,X,Ul(Q,te),Se);Il(Q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(Q,X.sibling),Se=u(X,te),Se.return=Q,Q=Se):(a(Q,X),Se=Fu(te,Q.mode,Se),Se.return=Q,Q=Se),S(Q)):a(Q,X)}return function(Q,X,te,Se){try{_o=0;var nt=jt(Q,X,te,Se);return us=null,nt}catch(Je){if(Je===cs||Je===Nl)throw Je;var Pt=ci(29,Je,null,Q.mode);return Pt.lanes=Se,Pt.return=Q,Pt}finally{}}}var Ur=_m(!0),vm=_m(!1),Va=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(t),tm(t,null,a),n}return Al(t,o,n,a),Rl(t)}function xo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,en(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function So(){if(tf){var t=ls;if(t!==null)throw t}}function yo(t,n,a,o){tf=!1;var u=t.updateQueue;Va=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ie=H.next;H.next=null,S===null?f=ie:S.next=ie,S=H;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==S&&(R===null?ve.firstBaseUpdate=ie:R.next=ie,ve.lastBaseUpdate=H))}if(f!==null){var ye=u.baseState;S=0,ve=ie=H=null,R=f;do{var ue=R.lane&-536870913,de=ue!==R.lane;if(de?(bt&ue)===ue:(o&ue)===ue){ue!==0&&ue===os&&(tf=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ke=t,at=R;ue=n;var jt=a;switch(at.tag){case 1:if(Ke=at.payload,typeof Ke=="function"){ye=Ke.call(jt,ye,ue);break e}ye=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=at.payload,ue=typeof Ke=="function"?Ke.call(jt,ye,ue):Ke,ue==null)break e;ye=_({},ye,ue);break e;case 2:Va=!0}}ue=R.callback,ue!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ue]:de.push(ue))}else de={lane:ue,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(ie=ve=de,H=ye):ve=ve.next=de,S|=ue;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);ve===null&&(H=ye),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),Ka|=S,t.lanes=S,t.memoizedState=ye}}function xm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xm(a[t],n)}var fs=L(null),zl=L(0);function ym(t,n){t=xa,Te(zl,t),Te(fs,n),xa=t|n.baseLanes}function nf(){Te(zl,xa),Te(fs,fs.current)}function af(){xa=zl.current,J(fs),J(zl)}var ui=L(null),bi=null;function Wa(t){var n=t.alternate;Te(Sn,Sn.current&1),Te(ui,t),bi===null&&(n===null||fs.current!==null||n.memoizedState!==null)&&(bi=t)}function rf(t){Te(Sn,Sn.current),Te(ui,t),bi===null&&(bi=t)}function Mm(t){t.tag===22?(Te(Sn,Sn.current),Te(ui,t),bi===null&&(bi=t)):qa()}function qa(){Te(Sn,Sn.current),Te(ui,ui.current)}function fi(t){J(ui),bi===t&&(bi=null),J(Sn)}var Sn=L(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,ft=null,Qt=null,En=null,Fl=!1,ds=!1,Lr=!1,Hl=0,Mo=0,hs=null,SS=0;function gn(){throw Error(r(321))}function sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!li(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,f){return fa=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?rg:Mf,Lr=!1,f=a(o,u),Lr=!1,ds&&(f=Em(n,a,o,u)),bm(t),f}function bm(t){P.H=To;var n=Qt!==null&&Qt.next!==null;if(fa=0,En=Qt=ft=null,Fl=!1,Mo=0,hs=null,n)throw Error(r(300));t===null||Tn||(t=t.dependencies,t!==null&&Dl(t)&&(Tn=!0))}function Em(t,n,a,o){ft=t;var u=0;do{if(ds&&(hs=null),Mo=0,ds=!1,25<=u)throw Error(r(301));if(u+=1,En=Qt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=sg,f=n(a,o)}while(ds);return f}function yS(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?bo(n):n,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(ft.flags|=1024),n}function lf(){var t=Hl!==0;return Hl=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}fa=0,En=Qt=ft=null,ds=!1,Mo=Hl=0,hs=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?ft.memoizedState=En=t:En=En.next=t,En}function yn(){if(Qt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var n=En===null?ft.memoizedState:En.next;if(n!==null)En=n,Qt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},En===null?ft.memoizedState=En=t:En=En.next=t}return En}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(t){var n=Mo;return Mo+=1,hs===null&&(hs=[]),t=pm(hs,t,n),n=ft,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?rg:Mf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bo(t);if(t.$$typeof===F)return In(t)}throw Error(r(438,String(t)))}function ff(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=k;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=yn();return df(n,Qt,t)}function df(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=S=null,H=null,ie=n,ve=!1;do{var ye=ie.lane&-536870913;if(ye!==ie.lane?(bt&ye)===ye:(fa&ye)===ye){var ue=ie.revertLane;if(ue===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),ye===os&&(ve=!0);else if((fa&ue)===ue){ie=ie.next,ue===os&&(ve=!0);continue}else ye={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=ye,S=f):H=H.next=ye,ft.lanes|=ue,Ka|=ue;ye=ie.action,Lr&&a(f,ye),f=ie.hasEagerState?ie.eagerState:a(f,ye)}else ue={lane:ye,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=ue,S=f):H=H.next=ue,ft.lanes|=ye,Ka|=ye;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?S=f:H.next=R,!li(f,t.memoizedState)&&(Tn=!0,ve&&(a=ls,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=yn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);li(f,n.memoizedState)||(Tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Tm(t,n,a){var o=ft,u=yn(),f=Rt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!li((Qt||u).memoizedState,a);if(S&&(u.memoizedState=a,Tn=!0),u=u.queue,gf(Cm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||En!==null&&En.memoizedState.tag&1){if(o.flags|=2048,ps(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),an===null)throw Error(r(349));f||(fa&127)!==0||Am(o,n,a)}return a}function Am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Gl(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rm(t,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(t)}function Cm(t,n,a){return a(function(){wm(n)&&Dm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!li(t,a)}catch{return!0}}function Dm(t){var n=br(t,2);n!==null&&ii(n,t,2)}function pf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Lr){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Um(t,n,a,o){return t.baseState=a,df(t,Qt,typeof o=="function"?o:da)}function MS(t,n,a,o,u){if(ql(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Lm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var R=a(u,o),H=P.S;H!==null&&H(S,R),Nm(t,n,R)}catch(ie){mf(t,n,ie)}finally{f!==null&&S.types!==null&&(f.types=S.types),P.T=f}}else try{f=a(u,o),Nm(t,n,f)}catch(ie){mf(t,n,ie)}}function Nm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(t,n,o)},function(o){return mf(t,n,o)}):Om(t,n,a)}function Om(t,n,a){n.status="fulfilled",n.value=a,Pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Lm(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}t.action=null}function Pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function zm(t,n){if(Rt){var a=an.formState;if(a!==null){e:{var o=ft;if(Rt){if(on){t:{for(var u=on,f=Mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){on=Ei(u.nextSibling),o=u.data==="F!";break e}}Ha(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=ng.bind(null,ft,o),o.dispatch=a,o=pf(!1),f=yf.bind(null,ft,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=MS.bind(null,ft,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Bm(t){var n=yn();return Fm(n,Qt,t)}function Fm(t,n,a){if(n=df(t,n,Im)[0],t=kl(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(S){throw S===cs?Nl:S}else o=n;n=yn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,ps(9,{destroy:void 0},bS.bind(null,u,a),null)),[o,f,t]}function bS(t,n){t.action=n}function Hm(t){var n=yn(),a=Qt;if(a!==null)return Fm(n,a,t);yn(),n=n.memoizedState,a=yn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ps(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Gl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Gm(){return yn().memoizedState}function Xl(t,n,a,o){var u=Yn();ft.flags|=t,u.memoizedState=ps(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(t,n,a,o){var u=yn();o=o===void 0?null:o;var f=u.memoizedState.inst;Qt!==null&&o!==null&&sf(o,Qt.memoizedState.deps)?u.memoizedState=ps(n,f,a,o):(ft.flags|=t,u.memoizedState=ps(1|n,f,a,o))}function Vm(t,n){Xl(8390656,8,t,n)}function gf(t,n){Wl(2048,8,t,n)}function ES(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Gl(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function km(t){var n=yn().memoizedState;return ES({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xm(t,n){return Wl(4,2,t,n)}function Wm(t,n){return Wl(4,4,t,n)}function qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ym(t,n,a){a=a!=null?a.concat([t]):null,Wl(4,4,qm.bind(null,n,t),a)}function _f(){}function Zm(t,n){var a=yn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Km(t,n){var a=yn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=t(),Lr){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o}function vf(t,n,a){return a===void 0||(fa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Qg(),ft.lanes|=t,Ka|=t,a)}function Qm(t,n,a,o){return li(a,n)?a:fs.current!==null?(t=vf(t,a,o),li(t,n)||(Tn=!0),t):(fa&42)===0||(fa&1073741824)!==0&&(bt&261930)===0?(Tn=!0,t.memoizedState=a):(t=Qg(),ft.lanes|=t,Ka|=t,n)}function Jm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var S=P.T,R={};P.T=R,yf(t,!1,n,a);try{var H=u(),ie=P.S;if(ie!==null&&ie(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ve=xS(H,o);Eo(t,n,ve,pi(t))}else Eo(t,n,o,pi(t))}catch(ye){Eo(t,n,{then:function(){},status:"rejected",reason:ye},pi())}finally{G.p=f,S!==null&&R.types!==null&&(S.types=R.types),P.T=S}}function TS(){}function xf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=jm(t).queue;Jm(t,u,n,ee,a===null?TS:function(){return $m(t),a(o)})}function jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $m(t){var n=jm(t);n.next===null&&(n=t.alternate.memoizedState),Eo(t,n.next.queue,{},pi())}function Sf(){return In(Go)}function eg(){return yn().memoizedState}function tg(){return yn().memoizedState}function AS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();t=ka(a);var o=Xa(n,t,a);o!==null&&(ii(o,n,a),xo(o,n,a)),n={cache:Zu()},t.payload=n;return}n=n.return}}function RS(t,n,a){var o=pi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?ig(n,a):(a=zu(t,n,a,o),a!==null&&(ii(a,t,o),ag(a,n,o)))}function ng(t,n,a){var o=pi();Eo(t,n,a,o)}function Eo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))ig(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,R=f(S,a);if(u.hasEagerState=!0,u.eagerState=R,li(R,S))return Al(t,n,u,0),an===null&&Tl(),!1}catch{}finally{}if(a=zu(t,n,u,o),a!==null)return ii(a,t,o),ag(a,n,o),!0}return!1}function yf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(r(479))}else n=zu(t,a,o,2),n!==null&&ii(n,t,2)}function ql(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function ig(t,n){ds=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ag(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,en(t,a)}}var To={readContext:In,use:Vl,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};To.useEffectEvent=gn;var rg={readContext:In,use:Vl,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:Vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var o=t();if(Lr){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(Lr){Ue(!0);try{a(n)}finally{Ue(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=RS.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=ng.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(t,n){var a=Yn();return vf(a,t,n)},useTransition:function(){var t=pf(!1);return t=Jm.bind(null,ft,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,u=Yn();if(Rt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),an===null)throw Error(r(349));(bt&127)!==0||Am(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Vm(Cm.bind(null,o,f,t),[t]),o.flags|=2048,ps(9,{destroy:void 0},Rm.bind(null,o,f,a,n),null),a},useId:function(){var t=Yn(),n=an.identifierPrefix;if(Rt){var a=Vi,o=Gi;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=SS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Sf,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Yn().memoizedState=AS.bind(null,ft)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:In,use:Vl,useCallback:Zm,useContext:In,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:kl,useRef:Gm,useState:function(){return kl(da)},useDebugValue:_f,useDeferredValue:function(t,n){var a=yn();return Qm(a,Qt.memoizedState,t,n)},useTransition:function(){var t=kl(da)[0],n=yn().memoizedState;return[typeof t=="boolean"?t:bo(t),n]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:Sf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,n){var a=yn();return Um(a,Qt,t,n)},useMemoCache:ff,useCacheRefresh:tg};Mf.useEffectEvent=km;var sg={readContext:In,use:Vl,useCallback:Zm,useContext:In,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:hf,useRef:Gm,useState:function(){return hf(da)},useDebugValue:_f,useDeferredValue:function(t,n){var a=yn();return Qt===null?vf(a,t,n):Qm(a,Qt.memoizedState,t,n)},useTransition:function(){var t=hf(da)[0],n=yn().memoizedState;return[typeof t=="boolean"?t:bo(t),n]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:Sf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=yn();return Qt!==null?Um(a,Qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:tg};sg.useEffectEvent=km;function bf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=pi(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&(ii(n,t,o),xo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=pi(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&(ii(n,t,o),xo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=pi(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(t,o,a),n!==null&&(ii(n,t,a),xo(n,t,a))}};function og(t,n,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function lg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Nr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function cg(t){El(t)}function ug(t){console.error(t)}function fg(t){El(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function dg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function hg(t){return t=ka(t),t.tag=3,t}function pg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){dg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){dg(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function CS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ss(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 31:case 13:return bi===null?rc():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(t,o,u)),!1}throw Error(r(435,a.tag))}return Qf(t,o,u),rc(),!1}if(Rt)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(r(422),{cause:o}),po(xi(t,a)))):(o!==ku&&(n=Error(r(423),{cause:o}),po(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,a),u=Tf(t.stateNode,o,u),ef(t,u),_n!==4&&(_n=2)),!1;var f=Error(r(520),{cause:o});if(f=xi(f,a),No===null?No=[f]:No.push(f),_n!==4&&(_n=2),n===null)return!0;o=xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qa===null||!Qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=hg(u),pg(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(r(461)),Tn=!1;function zn(t,n,a,o){n.child=t===null?vm(n,null,a,o):Ur(n,t.child,a,o)}function mg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Rr(n),o=of(t,n,a,S,f,u),R=lf(),t!==null&&!Tn?(cf(t,n,u),ha(t,n,u)):(Rt&&R&&Gu(n),n.flags|=1,zn(t,n,o,u),n.child)}function gg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,_g(t,n,f,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Of(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(S,o)&&t.ref===n.ref)return ha(t,n,u)}return n.flags|=1,t=oa(f,o),t.ref=n.ref,t.return=n,n.child=t}function _g(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(uo(f,o)&&t.ref===n.ref)if(Tn=!1,n.pendingProps=o=f,Of(t,u))(t.flags&131072)!==0&&(Tn=!0);else return n.lanes=t.lanes,ha(t,n,u)}return Rf(t,n,a,o,u)}function vg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return xg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?ym(n,f):nf(),Mm(n);else return o=n.lanes=536870912,xg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ll(n,f.cachePool),ym(n,f),qa(),n.memoizedState=null):(t!==null&&Ll(n,null),nf(),qa());return zn(t,n,u,a),n.child}function Ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(t,n,a,o,u){var f=Qu();return f=f===null?null:{parent:bn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ll(n,null),nf(),Mm(n),t!==null&&ss(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Sg(t,n,a){return Ur(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,fi(n),n.memoizedState=null,t}function wS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,Ao(null,t);if(rf(n),(t=on)?(t=L0(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Pn=n,on=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return Zl(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=Sg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Tn||ss(t,n,a,!1),u=(a&t.childLanes)!==0,Tn||u){if(o=an,o!==null&&(S=tn(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,br(t,S),ii(o,t,S),Af;rc(),n=Sg(t,n,a)}else t=f.treeContext,on=Ei(S.nextSibling),Pn=n,Rt=!0,Fa=null,Mi=!1,t!==null&&sm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=oa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rf(t,n,a,o,u){return Rr(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!Tn?(cf(t,n,u),ha(t,n,u)):(Rt&&o&&Gu(n),n.flags|=1,zn(t,n,a,u),n.child)}function yg(t,n,a,o,u,f){return Rr(n),n.updateQueue=null,a=Em(n,o,a,u),bm(t),o=lf(),t!==null&&!Tn?(cf(t,n,f),ha(t,n,f)):(Rt&&o&&Gu(n),n.flags|=1,zn(t,n,a,f),n.child)}function Mg(t,n,a,o,u){if(Rr(n),n.stateNode===null){var f=ns,S=a.contextType;typeof S=="object"&&S!==null&&(f=In(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ju(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?In(S):ns,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(bf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ef.enqueueReplaceState(f,f.state,null),yo(n,o,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Nr(a,R);f.props=H;var ie=f.context,ve=a.contextType;S=ns,typeof ve=="object"&&ve!==null&&(S=In(ve));var ye=a.getDerivedStateFromProps;ve=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ie!==S)&&lg(n,f,o,S),Va=!1;var ue=n.memoizedState;f.state=ue,yo(n,o,f,u),So(),ie=n.memoizedState,R||ue!==ie||Va?(typeof ye=="function"&&(bf(n,a,ye,o),ie=n.memoizedState),(H=Va||og(n,a,H,o,ue,ie,S))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=S,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,$u(t,n),S=n.memoizedProps,ve=Nr(a,S),f.props=ve,ye=n.pendingProps,ue=f.context,ie=a.contextType,H=ns,typeof ie=="object"&&ie!==null&&(H=In(ie)),R=a.getDerivedStateFromProps,(ie=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==ye||ue!==H)&&lg(n,f,o,H),Va=!1,ue=n.memoizedState,f.state=ue,yo(n,o,f,u),So();var de=n.memoizedState;S!==ye||ue!==de||Va||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof R=="function"&&(bf(n,a,R,o),de=n.memoizedState),(ve=Va||og(n,a,ve,o,ue,de,H)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,de,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,de,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=de),f.props=o,f.state=de,f.context=H,o=ve):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Kl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ur(n,t.child,null,u),n.child=Ur(n,null,a,u)):zn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ha(t,n,u),t}function bg(t,n,a,o){return Tr(),n.flags|=256,zn(t,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:dm()}}function Df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=hi),t}function Eg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?Wa(n):qa(),(t=on)?(t=L0(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Pn=n,on=null)):t=null,t===null)throw Ha(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(qa(),u=n.mode,R=Ql({mode:"hidden",children:R},u),o=Er(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=wf(a),o.childLanes=Df(t,S,a),n.memoizedState=Cf,Ao(null,o)):(Wa(n),Uf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Wa(n),n.flags&=-257,n=Lf(t,n,a)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,n=null):(qa(),R=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),R=Er(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ur(n,t.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Df(t,S,a),n.memoizedState=Cf,n=Ao(null,o));else if(Wa(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ie=S.dgst;S=ie,o=Error(r(419)),o.stack="",o.digest=S,po({value:o,source:null,stack:null}),n=Lf(t,n,a)}else if(Tn||ss(t,n,a,!1),S=(a&t.childLanes)!==0,Tn||S){if(S=an,S!==null&&(o=tn(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,br(t,o),ii(S,t,o),Af;fd(R)||rc(),n=Lf(t,n,a)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,on=Ei(R.nextSibling),Pn=n,Rt=!0,Fa=null,Mi=!1,t!==null&&sm(n,t),n=Uf(n,o.children),n.flags|=4096);return n}return u?(qa(),R=o.fallback,u=n.mode,H=t.child,ie=H.sibling,o=oa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?R=oa(ie,R):(R=Er(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=t.child.memoizedState,R===null?R=wf(a):(u=R.cachePool,u!==null?(H=bn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=dm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Df(t,S,a),n.memoizedState=Cf,Ao(t.child,o)):(Wa(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Uf(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=ci(22,t,null,n),t.lanes=0,t}function Lf(t,n,a){return Ur(n,t.child,null,a),t=Uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Tg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),qu(t.return,n,a)}function Nf(t,n,a,o,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function Ag(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=Sn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,Te(Sn,S),zn(t,n,o,a),o=Rt?ho:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,a,n);else if(t.tag===19)Tg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Nf(n,!0,a,null,f,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ss(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function DS(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ga(n,bn,t.memoizedState.cache),Tr();break;case 27:case 5:it(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Eg(t,n,a):(Wa(n),t=ha(t,n,a),t!==null?t.sibling:null);Wa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ss(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Te(Sn,Sn.current),o)break;return null;case 22:return n.lanes=0,vg(t,n,a,n.pendingProps);case 24:Ga(n,bn,t.memoizedState.cache)}return ha(t,n,a)}function Rg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Tn=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return Tn=!1,DS(t,n,a);Tn=(t.flags&131072)!==0}else Tn=!1,Rt&&(n.flags&1048576)!==0&&rm(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=wr(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=Nr(t,o),n.tag=1,n=Mg(null,n,t,o,a)):(n.tag=0,n=Rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=mg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=gg(null,n,t,o,a);break e}}throw n=ne(t)||t,Error(r(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Nr(o,n.pendingProps),Mg(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,$u(t,n),yo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ga(n,bn,o),o!==f.cache&&Yu(n,[bn],a,!0),So(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bg(t,n,o,a);break e}else if(o!==u){u=xi(Error(r(424)),n),po(u),n=bg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Ei(t.firstChild),Pn=n,Rt=!0,Fa=null,Mi=!0,a=vm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Tr(),o===u){n=ha(t,n,a);break e}zn(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=B0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,o=dc(se.current).createElement(a),o[At]=n,o[vt]=t,Bn(o,a,t),Mn(o),n.stateNode=o):n.memoizedState=B0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Rt&&(o=n.stateNode=P0(n.type,n.pendingProps,se.current),Pn=n,Mi=!0,u=on,er(n.type)?(hd=u,on=Ei(o.firstChild)):on=u),zn(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=o=on)&&(o=sy(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Pn=n,on=Ei(o.firstChild),Mi=!1,u=!0):u=!1),u||Ha(n)),it(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,ld(u,f)?o=null:S!==null&&ld(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,yS,null,null,a),Go._currentValue=u),Kl(t,n),zn(t,n,o,a),n.child;case 6:return t===null&&Rt&&((t=a=on)&&(a=oy(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Pn=n,on=null,t=!0):t=!1),t||Ha(n)),null;case 13:return Eg(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ur(n,null,o,a):zn(t,n,o,a),n.child;case 11:return mg(t,n,n.type,n.pendingProps,a);case 7:return zn(t,n,n.pendingProps,a),n.child;case 8:return zn(t,n,n.pendingProps.children,a),n.child;case 12:return zn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),zn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rr(n),u=In(u),o=o(u),n.flags|=1,zn(t,n,o,a),n.child;case 14:return gg(t,n,n.type,n.pendingProps,a);case 15:return _g(t,n,n.type,n.pendingProps,a);case 19:return Ag(t,n,a);case 31:return wS(t,n,a);case 22:return vg(t,n,a,n.pendingProps);case 24:return Rr(n),o=In(bn),t===null?(u=Qu(),u===null&&(u=an,f=Zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ju(n),Ga(n,bn,u)):((t.lanes&a)!==0&&($u(t,n),yo(n,null,null,a),So()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,bn,o)):(o=f.cache,Ga(n,bn,o),o!==u.cache&&Yu(n,[bn],a,!0))),zn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function pa(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(e0())t.flags|=8192;else throw Dr=Ol,Ju}else t.flags&=-16777217}function Cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k0(n))if(e0())t.flags|=8192;else throw Dr=Ol,Ju}function Jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_e():536870912,t.lanes|=n,vs|=n)}function Ro(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function US(t,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ua(bn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(rs(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),ln(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(pa(n),f!==null?(ln(n),Cg(n,f)):(ln(n),Pf(n,u,null,o,a))):f?f!==t.memoizedState?(pa(n),ln(n),Cg(n,f)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&pa(n),ln(n),Pf(n,u,t,o,a)),null;case 27:if(Qe(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ln(n),null}t=De.current,rs(n)?om(n):(t=P0(u,o,a),n.stateNode=t,pa(n))}return ln(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return ln(n),null}if(f=De.current,rs(n))om(n);else{var S=dc(se.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[At]=n,f[vt]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(Bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&pa(n)}}return ln(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,rs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[At]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||E0(t.nodeValue,a)),t||Ha(n,!0)}else t=dc(t).createTextNode(o),t[At]=n,n.stateNode=t}return ln(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=rs(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[At]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else a=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ln(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=rs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[At]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),u=!1}else u=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),ln(n),null);case 4:return Xe(),t===null&&id(n.stateNode.containerInfo),ln(n),null;case 10:return ua(n.type),ln(n),null;case 19:if(J(Sn),o=n.memoizedState,o===null)return ln(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ro(o,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Bl(t),f!==null){for(n.flags|=128,Ro(o,!1),t=f.updateQueue,n.updateQueue=t,Jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return Te(Sn,Sn.current&1|2),Rt&&la(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&zt()>nc&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(t=Bl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Jl(n,t),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Rt)return ln(n),null}else 2*zt()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=zt(),t.sibling=null,a=Sn.current,Te(Sn,u?a&1|2:a&1),Rt&&la(n,o.treeForkCount),t):(ln(n),null);case 22:case 23:return fi(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(Cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(bn),ln(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function LS(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ua(bn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(r(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(Sn),null;case 4:return Xe(),null;case 10:return ua(n.type),null;case 22:case 23:return fi(n),af(),t!==null&&J(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ua(bn),null;case 25:return null;default:return null}}function wg(t,n){switch(Vu(n),n.tag){case 3:ua(bn),Xe();break;case 26:case 27:case 5:Qe(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:J(Sn);break;case 10:ua(n.type);break;case 22:case 23:fi(n),af(),t!==null&&J(Cr);break;case 24:ua(bn)}}function Co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Zt(n,n.return,R)}}function Ya(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var H=a,ie=R;try{ie()}catch(ve){Zt(u,H,ve)}}}o=o.next}while(o!==f)}}catch(ve){Zt(n,n.return,ve)}}function Dg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sm(n,a)}catch(o){Zt(t,t.return,o)}}}function Ug(t,n,a){a.props=Nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Zt(t,n,o)}}function wo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Zt(t,n,u)}}function ki(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Zt(t,n,u)}else a.current=null}function Lg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Zt(t,t.return,u)}}function If(t,n,a){try{var o=t.stateNode;ey(o,t.type,a,n),o[vt]=n}catch(u){Zt(t,t.return,u)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ra));else if(o!==4&&(o===27&&er(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,a),t=t.sibling;t!==null;)Bf(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&er(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function Og(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[At]=t,n[vt]=a}catch(f){Zt(t,t.return,f)}}var ma=!1,An=!1,Ff=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function NS(t,n){if(t=t.containerInfo,sd=xc,t=Yp(t),Uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,R=-1,H=-1,ie=0,ve=0,ye=t,ue=null;t:for(;;){for(var de;ye!==a||u!==0&&ye.nodeType!==3||(R=S+u),ye!==f||o!==0&&ye.nodeType!==3||(H=S+o),ye.nodeType===3&&(S+=ye.nodeValue.length),(de=ye.firstChild)!==null;)ue=ye,ye=de;for(;;){if(ye===t)break t;if(ue===a&&++ie===u&&(R=S),ue===f&&++ve===o&&(H=S),(de=ye.nextSibling)!==null)break;ye=ue,ue=ye.parentNode}ye=de}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:t,selectionRange:a},xc=!1,Nn=n;Nn!==null;)if(n=Nn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Nn=t;else for(;Nn!==null;){switch(n=Nn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ke=Nr(a.type,u);t=o.getSnapshotBeforeUpdate(Ke,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Zt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ud(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Nn=t;break}Nn=n.return}}function Ig(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),o&4&&Co(5,a);break;case 1:if(_a(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Zt(a,a.return,S)}else{var u=Nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Zt(a,a.return,S)}}o&64&&Dg(a),o&512&&wo(a,a.return);break;case 3:if(_a(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sm(t,n)}catch(S){Zt(a,a.return,S)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:_a(t,a),n===null&&o&4&&Lg(a),o&512&&wo(a,a.return);break;case 12:_a(t,a);break;case 31:_a(t,a),o&4&&Fg(t,a);break;case 13:_a(t,a),o&4&&Hg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=VS.bind(null,a),ly(t,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){n=n!==null&&n.memoizedState!==null||An,u=ma;var f=An;ma=o,(An=n)&&!f?va(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),ma=u,An=f}break;case 30:break;default:_a(t,a)}}function zg(t){var n=t.alternate;n!==null&&(t.alternate=null,zg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Oa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pn=null,$n=!1;function ga(t,n,a){for(a=a.child;a!==null;)Bg(t,n,a),a=a.sibling}function Bg(t,n,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:An||ki(a,n),ga(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:An||ki(a,n);var o=pn,u=$n;er(a.type)&&(pn=a.stateNode,$n=!1),ga(t,n,a),Bo(a.stateNode),pn=o,$n=u;break;case 5:An||ki(a,n);case 6:if(o=pn,u=$n,pn=null,ga(t,n,a),pn=o,$n=u,pn!==null)if($n)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(a.stateNode)}catch(f){Zt(a,n,f)}else try{pn.removeChild(a.stateNode)}catch(f){Zt(a,n,f)}break;case 18:pn!==null&&($n?(t=pn,D0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),As(t)):D0(pn,a.stateNode));break;case 4:o=pn,u=$n,pn=a.stateNode.containerInfo,$n=!0,ga(t,n,a),pn=o,$n=u;break;case 0:case 11:case 14:case 15:Ya(2,a,n),An||Ya(4,a,n),ga(t,n,a);break;case 1:An||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,n,o)),ga(t,n,a);break;case 21:ga(t,n,a);break;case 22:An=(o=An)||a.memoizedState!==null,ga(t,n,a),An=o;break;default:ga(t,n,a)}}function Fg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{As(t)}catch(a){Zt(n,n.return,a)}}}function Hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{As(t)}catch(a){Zt(n,n.return,a)}}function OS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Pg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Pg),n;default:throw Error(r(435,t.tag))}}function $l(t,n){var a=OS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=kS.bind(null,t,o);o.then(u,u)}})}function ei(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(er(R.type)){pn=R.stateNode,$n=!1;break e}break;case 5:pn=R.stateNode,$n=!1;break e;case 3:case 4:pn=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(pn===null)throw Error(r(160));Bg(f,S,u),pn=null,$n=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,t),n=n.sibling}var Ni=null;function Gg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ei(n,t),ti(t),o&4&&(Ya(3,t,t.return),Co(3,t),Ya(5,t,t.return));break;case 1:ei(n,t),ti(t),o&512&&(An||a===null||ki(a,a.return)),o&64&&ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ni;if(ei(n,t),ti(t),o&512&&(An||a===null||ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Na]||f[At]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Bn(f,o,a),f[At]=t,Mn(f),o=f;break e;case"link":var S=G0("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(f=S[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=G0("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(f=S[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}f=u.createElement(o),Bn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[At]=t,Mn(f),o=f}t.stateNode=o}else V0(u,t.type,t.stateNode);else t.stateNode=H0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?V0(u,t.type,t.stateNode):H0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,a.memoizedProps)}break;case 27:ei(n,t),ti(t),o&512&&(An||a===null||ki(a,a.return)),a!==null&&o&4&&If(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ei(n,t),ti(t),o&512&&(An||a===null||ki(a,a.return)),t.flags&32){u=t.stateNode;try{oi(u,"")}catch(Ke){Zt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(ei(n,t),ti(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ke){Zt(t,t.return,Ke)}}break;case 3:if(mc=null,u=Ni,Ni=hc(n.containerInfo),ei(n,t),Ni=u,ti(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{As(n.containerInfo)}catch(Ke){Zt(t,t.return,Ke)}Ff&&(Ff=!1,Vg(t));break;case 4:o=Ni,Ni=hc(t.stateNode.containerInfo),ei(n,t),ti(t),Ni=o;break;case 12:ei(n,t),ti(t);break;case 31:ei(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:ei(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=zt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=ma,ve=An;if(ma=ie||u,An=ve||H,ei(n,t),An=ve,ma=ie,ti(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ma||An||Or(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=H.stateNode;var ye=H.memoizedProps.style,ue=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Ke){Zt(H,H.return,Ke)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ke){Zt(H,H.return,Ke)}}}else if(n.tag===18){if(a===null){H=n;try{var de=H.stateNode;u?U0(de,!0):U0(H.stateNode,!1)}catch(Ke){Zt(H,H.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:ei(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:ei(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=zf(t);jl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(oi(S,""),a.flags&=-33);var R=zf(t);jl(t,R,S);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=zf(t);Bf(t,ie,H);break;default:throw Error(r(161))}}catch(ve){Zt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Vg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ig(t,n.alternate,n),n=n.sibling}function Or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Or(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ug(n,n.return,a),Or(n);break;case 27:Bo(n.stateNode);case 26:case 5:ki(n,n.return),Or(n);break;case 22:n.memoizedState===null&&Or(n);break;case 30:Or(n);break;default:Or(n)}t=t.sibling}}function va(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:va(u,f,a),Co(4,f);break;case 1:if(va(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Zt(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)xm(H[u],R)}catch(ie){Zt(o,o.return,ie)}}a&&S&64&&Dg(f),wo(f,f.return);break;case 27:Og(f);case 26:case 5:va(u,f,a),a&&o===null&&S&4&&Lg(f),wo(f,f.return);break;case 12:va(u,f,a);break;case 31:va(u,f,a),a&&S&4&&Fg(u,f);break;case 13:va(u,f,a),a&&S&4&&Hg(u,f);break;case 22:f.memoizedState===null&&va(u,f,a),wo(f,f.return);break;case 30:break;default:va(u,f,a)}n=n.sibling}}function Hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&mo(a))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t))}function Oi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(t,n,a,o),n=n.sibling}function kg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,a,o),u&2048&&Co(9,n);break;case 1:Oi(t,n,a,o);break;case 3:Oi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t)));break;case 12:if(u&2048){Oi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,R=f.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Zt(n,n.return,H)}}else Oi(t,n,a,o);break;case 31:Oi(t,n,a,o);break;case 13:Oi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Oi(t,n,a,o):Do(t,n):f._visibility&2?Oi(t,n,a,o):(f._visibility|=2,ms(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Oi(t,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Oi(t,n,a,o)}}function ms(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,R=a,H=o,ie=S.flags;switch(S.tag){case 0:case 11:case 15:ms(f,S,R,H,u),Co(8,S);break;case 23:break;case 22:var ve=S.stateNode;S.memoizedState!==null?ve._visibility&2?ms(f,S,R,H,u):Do(f,S):(ve._visibility|=2,ms(f,S,R,H,u)),u&&ie&2048&&Hf(S.alternate,S);break;case 24:ms(f,S,R,H,u),u&&ie&2048&&Gf(S.alternate,S);break;default:ms(f,S,R,H,u)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Do(a,o),u&2048&&Gf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function gs(t,n,a){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)Xg(t,n,a),t=t.sibling}function Xg(t,n,a){switch(t.tag){case 26:gs(t,n,a),t.flags&Uo&&t.memoizedState!==null&&Sy(a,Ni,t.memoizedState,t.memoizedProps);break;case 5:gs(t,n,a);break;case 3:case 4:var o=Ni;Ni=hc(t.stateNode.containerInfo),gs(t,n,a),Ni=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,gs(t,n,a),Uo=o):gs(t,n,a));break;default:gs(t,n,a)}}function Wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,Yg(o,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qg(t),t=t.sibling}function qg(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Ya(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):Lo(t);break;default:Lo(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,Yg(o,t)}Wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function Yg(t,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Nn=o;else e:for(a=t;Nn!==null;){o=Nn;var u=o.sibling,f=o.return;if(zg(o),o===a){Nn=null;break e}if(u!==null){u.return=f,Nn=u;break e}Nn=f}}}var PS={getCacheForType:function(t){var n=In(bn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return In(bn).controller.signal}},IS=typeof WeakMap=="function"?WeakMap:Map,Bt=0,an=null,St=null,bt=0,Yt=0,di=null,Za=!1,_s=!1,Vf=!1,xa=0,_n=0,Ka=0,Pr=0,kf=0,hi=0,vs=0,No=null,ni=null,Xf=!1,tc=0,Zg=0,nc=1/0,ic=null,Qa=null,Dn=0,Ja=null,xs=null,Sa=0,Wf=0,qf=null,Kg=null,Oo=0,Yf=null;function pi(){return(Bt&2)!==0&&bt!==0?bt&-bt:P.T!==null?$f():Nt()}function Qg(){if(hi===0)if((bt&536870912)===0||Rt){var t=fe;fe<<=1,(fe&3932160)===0&&(fe=262144),hi=t}else hi=536870912;return t=ui.current,t!==null&&(t.flags|=32),hi}function ii(t,n,a){(t===an&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),ja(t,bt,hi,!1)),Le(t,a),((Bt&2)===0||t!==an)&&(t===an&&((Bt&2)===0&&(Pr|=a),_n===4&&ja(t,bt,hi,!1)),Xi(t))}function Jg(t,n,a){if((Bt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||be(t,n),u=o?FS(t,n):Kf(t,n,!0),f=o;do{if(u===0){_s&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!zS(a)){u=Kf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;u=No;var H=R.current.memoizedState.isDehydrated;if(H&&(Ss(R,S).flags|=256),S=Kf(R,S,!1),S!==2){if(Vf&&!H){R.errorRecoveryDisabledLanes|=f,Pr|=f,u=4;break e}f=ni,ni=u,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Ss(t,0),ja(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,hi,!Za);break e;case 2:ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=tc+300-zt(),10<u)){if(ja(o,n,hi,!Za),le(o,0,!0)!==0)break e;Sa=n,o.timeoutHandle=C0(jg.bind(null,o,a,ni,ic,Xf,n,hi,Pr,vs,Za,f,"Throttled",-0,0),u);break e}jg(o,a,ni,ic,Xf,n,hi,Pr,vs,Za,f,null,-0,0)}}break}while(!0);Xi(t)}function jg(t,n,a,o,u,f,S,R,H,ie,ve,ye,ue,de){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},Xg(n,f,ye);var Ke=(f&62914560)===f?tc-zt():(f&4194048)===f?Zg-zt():0;if(Ke=yy(ye,Ke),Ke!==null){Sa=f,t.cancelPendingCommit=Ke(s0.bind(null,t,n,f,a,o,u,S,R,H,ve,ye,null,ue,de)),ja(t,f,S,!ie);return}}s0(t,n,f,a,o,u,S,R,H)}function zS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!li(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~kf,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ke(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&gt(t,a,n)}function ac(){return(Bt&6)===0?(Po(0),!1):!0}function Zf(){if(St!==null){if(Yt===0)var t=St.return;else t=St,ca=Ar=null,uf(t),us=null,_o=0,t=St;for(;t!==null;)wg(t.alternate,t),t=t.return;St=null}}function Ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Sa=0,Zf(),an=t,St=a=oa(t.current,null),bt=n,Yt=0,di=null,Za=!1,_s=be(t,n),Vf=!1,vs=hi=kf=Pr=Ka=_n=0,ni=No=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ke(o),f=1<<u;n|=t[u],o&=~f}return xa=n,Tl(),a}function $g(t,n){ft=null,P.H=To,n===cs||n===Nl?(n=mm(),Yt=3):n===Ju?(n=mm(),Yt=4):Yt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,St===null&&(_n=1,Yl(t,xi(n,t.current)))}function e0(){var t=ui.current;return t===null?!0:(bt&4194048)===bt?bi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===bi:!1}function t0(){var t=P.H;return P.H=To,t===null?To:t}function n0(){var t=P.A;return P.A=PS,t}function rc(){_n=4,Za||(bt&4194048)!==bt&&ui.current!==null||(_s=!0),(Ka&134217727)===0&&(Pr&134217727)===0||an===null||ja(an,bt,hi,!1)}function Kf(t,n,a){var o=Bt;Bt|=2;var u=t0(),f=n0();(an!==t||bt!==n)&&(ic=null,Ss(t,n)),n=!1;var S=_n;e:do try{if(Yt!==0&&St!==null){var R=St,H=di;switch(Yt){case 8:Zf(),S=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var ie=Yt;if(Yt=0,di=null,ys(t,R,H,ie),a&&_s){S=0;break e}break;default:ie=Yt,Yt=0,di=null,ys(t,R,H,ie)}}BS(),S=_n;break}catch(ve){$g(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ca=Ar=null,Bt=o,P.H=u,P.A=f,St===null&&(an=null,bt=0,Tl()),S}function BS(){for(;St!==null;)i0(St)}function FS(t,n){var a=Bt;Bt|=2;var o=t0(),u=n0();an!==t||bt!==n?(ic=null,nc=zt()+500,Ss(t,n)):_s=be(t,n);e:do try{if(Yt!==0&&St!==null){n=St;var f=di;t:switch(Yt){case 1:Yt=0,di=null,ys(t,n,f,1);break;case 2:case 9:if(hm(f)){Yt=0,di=null,a0(n);break}n=function(){Yt!==2&&Yt!==9||an!==t||(Yt=7),Xi(t)},f.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:hm(f)?(Yt=0,di=null,a0(n)):(Yt=0,di=null,ys(t,n,f,7));break;case 5:var S=null;switch(St.tag){case 26:S=St.memoizedState;case 5:case 27:var R=St;if(S?k0(S):R.stateNode.complete){Yt=0,di=null;var H=R.sibling;if(H!==null)St=H;else{var ie=R.return;ie!==null?(St=ie,sc(ie)):St=null}break t}}Yt=0,di=null,ys(t,n,f,5);break;case 6:Yt=0,di=null,ys(t,n,f,6);break;case 8:Zf(),_n=6;break e;default:throw Error(r(462))}}HS();break}catch(ve){$g(t,ve)}while(!0);return ca=Ar=null,P.H=o,P.A=u,Bt=a,St!==null?0:(an=null,bt=0,Tl(),_n)}function HS(){for(;St!==null&&!un();)i0(St)}function i0(t){var n=Rg(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?sc(t):St=n}function a0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=yg(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=yg(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:uf(n);default:wg(a,n),n=St=nm(n,xa),n=Rg(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?sc(t):St=n}function ys(t,n,a,o){ca=Ar=null,uf(n),us=null,_o=0;var u=n.return;try{if(CS(t,u,n,a,bt)){_n=1,Yl(t,xi(a,t.current)),St=null;return}}catch(f){if(u!==null)throw St=u,f;_n=1,Yl(t,xi(a,t.current)),St=null;return}n.flags&32768?(Rt||o===1?t=!0:_s||(bt&536870912)!==0?t=!1:(Za=t=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),r0(n,t)):sc(n)}function sc(t){var n=t;do{if((n.flags&32768)!==0){r0(n,Za);return}t=n.return;var a=US(n.alternate,n,xa);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);_n===0&&(_n=5)}function r0(t,n){do{var a=LS(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);_n=6,St=null}function s0(t,n,a,o,u,f,S,R,H){t.cancelPendingCommit=null;do oc();while(Dn!==0);if((Bt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Iu,st(t,a,f,S,R,H),t===an&&(St=an=null,bt=0),xs=n,Ja=t,Sa=a,Wf=f,qf=u,Kg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,XS(K,function(){return f0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=G.p,G.p=2,S=Bt,Bt|=4;try{NS(t,n,a)}finally{Bt=S,G.p=u,P.T=o}}Dn=1,o0(),l0(),c0()}}function o0(){if(Dn===1){Dn=0;var t=Ja,n=xs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Bt;Bt|=4;try{Gg(n,t);var f=od,S=Yp(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(S!==R&&R&&R.ownerDocument&&qp(R.ownerDocument.documentElement,R)){if(H!==null&&Uu(R)){var ie=H.start,ve=H.end;if(ve===void 0&&(ve=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(ve,R.value.length);else{var ye=R.ownerDocument||document,ue=ye&&ye.defaultView||window;if(ue.getSelection){var de=ue.getSelection(),Ke=R.textContent.length,at=Math.min(H.start,Ke),jt=H.end===void 0?at:Math.min(H.end,Ke);!de.extend&&at>jt&&(S=jt,jt=at,at=S);var Q=Wp(R,at),X=Wp(R,jt);if(Q&&X&&(de.rangeCount!==1||de.anchorNode!==Q.node||de.anchorOffset!==Q.offset||de.focusNode!==X.node||de.focusOffset!==X.offset)){var te=ye.createRange();te.setStart(Q.node,Q.offset),de.removeAllRanges(),at>jt?(de.addRange(te),de.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),de.addRange(te))}}}}for(ye=[],de=R;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}xc=!!sd,od=sd=null}finally{Bt=u,G.p=o,P.T=a}}t.current=n,Dn=2}}function l0(){if(Dn===2){Dn=0;var t=Ja,n=xs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Bt;Bt|=4;try{Ig(t,n.alternate,n)}finally{Bt=u,G.p=o,P.T=a}}Dn=3}}function c0(){if(Dn===4||Dn===3){Dn=0,W();var t=Ja,n=xs,a=Sa,o=Kg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dn=5:(Dn=0,xs=Ja=null,u0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Qa=null),ze(a),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=G.p,G.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var R=o[S];f(R.value,{componentStack:R.stack})}}finally{P.T=n,G.p=u}}(Sa&3)!==0&&oc(),Xi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Yf?Oo++:(Oo=0,Yf=t):Oo=0,Po(0)}}function u0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,mo(n)))}function oc(){return o0(),l0(),c0(),f0()}function f0(){if(Dn!==5)return!1;var t=Ja,n=Wf;Wf=0;var a=ze(Sa),o=P.T,u=G.p;try{G.p=32>a?32:a,P.T=null,a=qf,qf=null;var f=Ja,S=Sa;if(Dn=0,xs=Ja=null,Sa=0,(Bt&6)!==0)throw Error(r(331));var R=Bt;if(Bt|=4,qg(f.current),kg(f,f.current,S,a),Bt=R,Po(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(ge,f)}catch{}return!0}finally{G.p=u,P.T=o,u0(t,n)}}function d0(t,n,a){n=xi(a,n),n=Tf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(Le(t,2),Xi(t))}function Zt(t,n,a){if(t.tag===3)d0(t,t,a);else for(;n!==null;){if(n.tag===3){d0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){t=xi(a,t),a=hg(2),o=Xa(n,a,2),o!==null&&(pg(a,o,n,t),Le(o,2),Xi(o));break}}n=n.return}}function Qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new IS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),t=GS.bind(null,t,n,a),n.then(t,t))}function GS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,an===t&&(bt&a)===a&&(_n===4||_n===3&&(bt&62914560)===bt&&300>zt()-tc?(Bt&2)===0&&Ss(t,0):kf|=a,vs===bt&&(vs=0)),Xi(t)}function h0(t,n){n===0&&(n=_e()),t=br(t,n),t!==null&&(Le(t,n),Xi(t))}function VS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),h0(t,a)}function kS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),h0(t,a)}function XS(t,n){return Gt(t,n)}var lc=null,Ms=null,Jf=!1,cc=!1,jf=!1,$a=0;function Xi(t){t!==Ms&&t.next===null&&(Ms===null?lc=Ms=t:Ms=Ms.next=t),cc=!0,Jf||(Jf=!0,qS())}function Po(t,n){if(!jf&&cc){jf=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-ke(42|t)+1)-1,f&=u&~(S&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_0(o,f))}else f=bt,f=le(o,o===an?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||be(o,f)||(a=!0,_0(o,f));o=o.next}while(a);jf=!1}}function WS(){p0()}function p0(){cc=Jf=!1;var t=0;$a!==0&&ny()&&(t=$a);for(var n=zt(),a=null,o=lc;o!==null;){var u=o.next,f=m0(o,n);f===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(Ms=a)):(a=o,(t!==0||(f&3)!==0)&&(cc=!0)),o=u}Dn!==0&&Dn!==5||Po(t),$a!==0&&($a=0)}function m0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-ke(f),R=1<<S,H=u[S];H===-1?((R&a)===0||(R&o)!==0)&&(u[S]=we(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=an,a=bt,a=le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Vt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||be(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Vt(o),ze(a)){case 2:case 8:a=b;break;case 32:a=K;break;case 268435456:a=he;break;default:a=K}return o=g0.bind(null,t),a=Gt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Vt(o),t.callbackPriority=2,t.callbackNode=null,2}function g0(t,n){if(Dn!==0&&Dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=bt;return o=le(t,t===an?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Jg(t,o,n),m0(t,zt()),t.callbackNode!=null&&t.callbackNode===a?g0.bind(null,t):null)}function _0(t,n){if(oc())return null;Jg(t,n,!0)}function qS(){ay(function(){(Bt&6)!==0?Gt(U,WS):p0()})}function $f(){if($a===0){var t=os;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),$a=t}return $a}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xr(""+t)}function x0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function YS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=v0((u[vt]||null).action),S=o.submitter;S&&(n=(n=S[vt]||null)?v0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var R=new yl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var H=S?x0(u,S):new FormData(u);xf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=S?x0(u,S):new FormData(u),xf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],ZS=td.toLowerCase(),KS=td[0].toUpperCase()+td.slice(1);Li(ZS,"on"+KS)}Li(Qp,"onAnimationEnd"),Li(Jp,"onAnimationIteration"),Li(jp,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(fS,"onTransitionRun"),Li(dS,"onTransitionStart"),Li(hS,"onTransitionCancel"),Li($p,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function S0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],H=R.instance,ie=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(ve){El(ve)}u.currentTarget=null,f=H}else for(S=0;S<o.length;S++){if(R=o[S],H=R.instance,ie=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(ve){El(ve)}u.currentTarget=null,f=H}}}}function yt(t,n){var a=n[rn];a===void 0&&(a=n[rn]=new Set);var o=t+"__bubble";a.has(o)||(y0(n,t,2,!1),a.add(o))}function nd(t,n,a){var o=0;n&&(o|=4),y0(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[uc]){t[uc]=!0,_l.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||nd(a,!1,t),nd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,nd("selectionchange",!1,n))}}function y0(t,n,a,o){switch(Q0(n)){case 2:var u=Ey;break;case 8:u=Ty;break;default:u=vd}a=u.bind(null,n,a,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ad(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=ia(R),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=f=S;continue e}R=R.parentNode}}o=o.return}Ap(function(){var ie=f,ve=Su(a),ye=[];e:{var ue=em.get(t);if(ue!==void 0){var de=yl,Ke=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":de=kx;break;case"focusin":Ke="focus",de=Au;break;case"focusout":Ke="blur",de=Au;break;case"beforeblur":case"afterblur":de=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=qx;break;case Qp:case Jp:case jp:de=Ox;break;case $p:de=Zx;break;case"scroll":case"scrollend":de=wx;break;case"wheel":de=Qx;break;case"copy":case"cut":case"paste":de=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Up;break;case"toggle":case"beforetoggle":de=jx}var at=(n&4)!==0,jt=!at&&(t==="scroll"||t==="scrollend"),Q=at?ue!==null?ue+"Capture":null:ue;at=[];for(var X=ie,te;X!==null;){var Se=X;if(te=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||te===null||Q===null||(Se=io(X,Q),Se!=null&&at.push(zo(X,Se,te))),jt)break;X=X.return}0<at.length&&(ue=new de(ue,Ke,null,a,ve),ye.push({event:ue,listeners:at}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ue&&a!==xu&&(Ke=a.relatedTarget||a.fromElement)&&(ia(Ke)||Ke[sn]))break e;if((de||ue)&&(ue=ve.window===ve?ve:(ue=ve.ownerDocument)?ue.defaultView||ue.parentWindow:window,de?(Ke=a.relatedTarget||a.toElement,de=ie,Ke=Ke?ia(Ke):null,Ke!==null&&(jt=c(Ke),at=Ke.tag,Ke!==jt||at!==5&&at!==27&&at!==6)&&(Ke=null)):(de=null,Ke=ie),de!==Ke)){if(at=wp,Se="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(at=Up,Se="onPointerLeave",Q="onPointerEnter",X="pointer"),jt=de==null?ue:vr(de),te=Ke==null?ue:vr(Ke),ue=new at(Se,X+"leave",de,a,ve),ue.target=jt,ue.relatedTarget=te,Se=null,ia(ve)===ie&&(at=new at(Q,X+"enter",Ke,a,ve),at.target=te,at.relatedTarget=jt,Se=at),jt=Se,de&&Ke)t:{for(at=JS,Q=de,X=Ke,te=0,Se=Q;Se;Se=at(Se))te++;Se=0;for(var nt=X;nt;nt=at(nt))Se++;for(;0<te-Se;)Q=at(Q),te--;for(;0<Se-te;)X=at(X),Se--;for(;te--;){if(Q===X||X!==null&&Q===X.alternate){at=Q;break t}Q=at(Q),X=at(X)}at=null}else at=null;de!==null&&M0(ye,ue,de,at,!1),Ke!==null&&jt!==null&&M0(ye,jt,Ke,at,!0)}}e:{if(ue=ie?vr(ie):window,de=ue.nodeName&&ue.nodeName.toLowerCase(),de==="select"||de==="input"&&ue.type==="file")var Pt=Fp;else if(zp(ue))if(Hp)Pt=lS;else{Pt=sS;var Je=rS}else de=ue.nodeName,!de||de.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?ie&&kt(ie.elementType)&&(Pt=Fp):Pt=oS;if(Pt&&(Pt=Pt(t,ie))){Bp(ye,Pt,a,ve);break e}Je&&Je(t,ue,ie),t==="focusout"&&ie&&ue.type==="number"&&ie.memoizedProps.value!=null&&xt(ue,"number",ue.value)}switch(Je=ie?vr(ie):window,t){case"focusin":(zp(Je)||Je.contentEditable==="true")&&($r=Je,Lu=ie,fo=null);break;case"focusout":fo=Lu=$r=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Zp(ye,a,ve);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":Zp(ye,a,ve)}var dt;if(Cu)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else jr?Pp(t,a)&&(Et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(Lp&&a.locale!=="ko"&&(jr||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&jr&&(dt=Rp()):(za=ve,bu="value"in za?za.value:za.textContent,jr=!0)),Je=fc(ie,Et),0<Je.length&&(Et=new Dp(Et,t,null,a,ve),ye.push({event:Et,listeners:Je}),dt?Et.data=dt:(dt=Ip(a),dt!==null&&(Et.data=dt)))),(dt=eS?tS(t,a):nS(t,a))&&(Et=fc(ie,"onBeforeInput"),0<Et.length&&(Je=new Dp("onBeforeInput","beforeinput",null,a,ve),ye.push({event:Je,listeners:Et}),Je.data=dt)),YS(ye,t,ie,a,ve)}S0(ye,n)})}function zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(t,a),u!=null&&o.unshift(zo(t,u,f)),u=io(t,n),u!=null&&o.push(zo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function JS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M0(t,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var R=a,H=R.alternate,ie=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ie===null||(H=ie,u?(ie=io(a,f),ie!=null&&S.unshift(zo(a,ie,H))):u||(ie=io(a,f),ie!=null&&S.push(zo(a,ie,H)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var jS=/\r\n?/g,$S=/\u0000|\uFFFD/g;function b0(t){return(typeof t=="string"?t:""+t).replace(jS,`
`).replace($S,"")}function E0(t,n){return n=b0(n),b0(t)===n}function Jt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||oi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&oi(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,o);break;case"style":Ui(t,o,f);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Jt(t,n,"name",u.name,u,null),Jt(t,n,"formEncType",u.formEncType,u,null),Jt(t,n,"formMethod",u.formMethod,u,null),Jt(t,n,"formTarget",u.formTarget,u,null)):(Jt(t,n,"encType",u.encType,u,null),Jt(t,n,"method",u.method,u,null),Jt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ra);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hi.get(a)||a,Be(t,a,o))}}function rd(t,n,a,o,u,f){switch(a){case"style":Ui(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?oi(t,o):(typeof o=="number"||typeof o=="bigint")&&oi(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function Bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Jt(t,n,f,S,a,null)}}u&&Jt(t,n,"srcSet",a.srcSet,a,null),o&&Jt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var R=f=S=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":S=ve;break;case"checked":H=ve;break;case"defaultChecked":ie=ve;break;case"value":f=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Jt(t,n,o,ve,a,null)}}Gn(t,f,R,H,ie,S,u,!1);return;case"select":yt("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Jt(t,n,u,R,a,null)}n=f,a=S,t.multiple=!!o,n!=null?wn(t,!!o,n,!1):a!=null&&wn(t,!!o,a,!0);return;case"textarea":yt("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Jt(t,n,S,R,a,null)}Di(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Jt(t,n,H,o,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)yt(Io[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Jt(t,n,ie,o,a,null)}return;default:if(kt(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&rd(t,n,ve,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Jt(t,n,R,o,a,null))}function ey(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,R=null,H=null,ie=null,ve=null;for(de in a){var ye=a[de];if(a.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":H=ye;default:o.hasOwnProperty(de)||Jt(t,n,de,null,o,ye)}}for(var ue in o){var de=o[ue];if(ye=a[ue],o.hasOwnProperty(ue)&&(de!=null||ye!=null))switch(ue){case"type":f=de;break;case"name":u=de;break;case"checked":ie=de;break;case"defaultChecked":ve=de;break;case"value":S=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==ye&&Jt(t,n,ue,de,o,ye)}}We(t,S,R,H,ie,ve,f,u);return;case"select":de=S=R=ue=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":de=H;default:o.hasOwnProperty(f)||Jt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ue=f;break;case"defaultValue":R=f;break;case"multiple":S=f;default:f!==H&&Jt(t,n,u,f,o,H)}n=R,a=S,o=de,ue!=null?wn(t,!!a,ue,!1):!!o!=!!a&&(n!=null?wn(t,!!a,n,!0):wn(t,!!a,a?[]:"",!1));return;case"textarea":de=ue=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Jt(t,n,R,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":ue=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Jt(t,n,S,u,o,f)}si(t,ue,de);return;case"option":for(var Ke in a)if(ue=a[Ke],a.hasOwnProperty(Ke)&&ue!=null&&!o.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Jt(t,n,Ke,null,o,ue)}for(H in o)if(ue=o[H],de=a[H],o.hasOwnProperty(H)&&ue!==de&&(ue!=null||de!=null))switch(H){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Jt(t,n,H,ue,o,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)ue=a[at],a.hasOwnProperty(at)&&ue!=null&&!o.hasOwnProperty(at)&&Jt(t,n,at,null,o,ue);for(ie in o)if(ue=o[ie],de=a[ie],o.hasOwnProperty(ie)&&ue!==de&&(ue!=null||de!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Jt(t,n,ie,ue,o,de)}return;default:if(kt(n)){for(var jt in a)ue=a[jt],a.hasOwnProperty(jt)&&ue!==void 0&&!o.hasOwnProperty(jt)&&rd(t,n,jt,void 0,o,ue);for(ve in o)ue=o[ve],de=a[ve],!o.hasOwnProperty(ve)||ue===de||ue===void 0&&de===void 0||rd(t,n,ve,ue,o,de);return}}for(var Q in a)ue=a[Q],a.hasOwnProperty(Q)&&ue!=null&&!o.hasOwnProperty(Q)&&Jt(t,n,Q,null,o,ue);for(ye in o)ue=o[ye],de=a[ye],!o.hasOwnProperty(ye)||ue===de||ue==null&&de==null||Jt(t,n,ye,ue,o,de)}function T0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ty(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,R=u.duration;if(f&&R&&T0(S)){for(S=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>R)break;var ve=H.transferSize,ye=H.initiatorType;ve&&T0(ye)&&(H=H.responseEnd,S+=ve*(H<R?1:(R-ie)/(H-ie)))}if(--o,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,od=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function A0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function ny(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(ry)}:C0;function ry(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function D0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),As(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,R=f.nodeName;f[Na]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Bo(t.ownerDocument.body);a=u}while(a);As(n)}function U0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function oy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function L0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ly(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function N0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function O0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function P0(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oa(t)}var Ti=new Map,I0=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ya=G.d;G.d={f:cy,r:uy,D:fy,C:dy,L:hy,m:py,X:gy,S:my,M:_y};function cy(){var t=ya.f(),n=ac();return t||n}function uy(t){var n=aa(t);n!==null&&n.tag===5&&n.type==="form"?$m(n):ya.r(t)}var bs=typeof document>"u"?null:document;function z0(t,n,a){var o=bs;if(o&&typeof n=="string"&&n){var u=Wt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),I0.has(u)||(I0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",t),Mn(n),o.head.appendChild(n)))}}function fy(t){ya.D(t),z0("dns-prefetch",t,null)}function dy(t,n){ya.C(t,n),z0("preconnect",t,n)}function hy(t,n,a){ya.L(t,n,a);var o=bs;if(o&&t&&n){var u='link[rel="preload"][as="'+Wt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Wt(a.imageSizes)+'"]')):u+='[href="'+Wt(t)+'"]';var f=u;switch(n){case"style":f=Es(t);break;case"script":f=Ts(t)}Ti.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),Bn(n,"link",t),Mn(n),o.head.appendChild(n)))}}function py(t,n){ya.m(t,n);var a=bs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Wt(o)+'"][href="'+Wt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ts(t)}if(!Ti.has(f)&&(t=_({rel:"modulepreload",href:t},n),Ti.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(f)))return}o=a.createElement("link"),Bn(o,"link",t),Mn(o),a.head.appendChild(o)}}}function my(t,n,a){ya.S(t,n,a);var o=bs;if(o&&t){var u=Pa(o).hoistableStyles,f=Es(t);n=n||"default";var S=u.get(f);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Fo(f)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(f))&&pd(t,a);var H=S=o.createElement("link");Mn(H),Bn(H,"link",t),H._p=new Promise(function(ie,ve){H.onload=ie,H.onerror=ve}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(f,S)}}}function gy(t,n){ya.X(t,n);var a=bs;if(a&&t){var o=Pa(a).hoistableScripts,u=Ts(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=_({src:t,async:!0},n),(n=Ti.get(u))&&md(t,n),f=a.createElement("script"),Mn(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(t,n){ya.M(t,n);var a=bs;if(a&&t){var o=Pa(a).hoistableScripts,u=Ts(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&md(t,n),f=a.createElement("script"),Mn(f),Bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function B0(t,n,a,o){var u=(u=se.current)?hc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Es(a.href),a=Pa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Es(a.href);var f=Pa(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(Fo(t)))&&!f._p&&(S.instance=f,S.state.loading=5),Ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,a),f||vy(u,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ts(a),a=Pa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Es(t){return'href="'+Wt(t)+'"'}function Fo(t){return'link[rel="stylesheet"]['+t+"]"}function F0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),Mn(n),t.head.appendChild(n))}function Ts(t){return'[src="'+Wt(t)+'"]'}function Ho(t){return"script[async]"+t}function H0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(o)return n.instance=o,Mn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Mn(o),Bn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Es(a.href);var f=t.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,Mn(f),f;o=F0(a),(u=Ti.get(u))&&pd(o,u),f=(t.ownerDocument||t).createElement("link"),Mn(f);var S=f;return S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),Bn(f,"link",o),n.state.loading|=4,pc(f,a.precedence,t),n.instance=f;case"script":return f=Ts(a.src),(u=t.querySelector(Ho(f)))?(n.instance=u,Mn(u),u):(o=a,(u=Ti.get(f))&&(o=_({},a),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Mn(u),Bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function G0(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Na]||f[At]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var R=o.get(S);R?R.push(f):o.set(S,[f])}}return o}function V0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Sy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Es(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Mn(f);return}f=n.ownerDocument||n,o=F0(o),(u=Ti.get(u))&&pd(o,u),f=f.createElement("link"),Mn(f);var S=f;S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),Bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function yy(t,n){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*ty());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,n.forEach(My,t),_c=null,gc.call(t))}function My(t,n){if(!(n.state.loading&4)){var a=_c.get(t);if(a)var o=a.get(null);else{a=new Map,_c.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Go={$$typeof:F,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function by(t,n,a,o,u,f,S,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=He(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=He(0),this.hiddenUpdates=He(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function X0(t,n,a,o,u,f,S,R,H,ie,ve,ye){return t=new by(t,n,a,S,H,ie,ve,ye,R),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),t.current=f,f.stateNode=t,n=Zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ju(f),t}function W0(t){return t?(t=ns,t):ns}function q0(t,n,a,o,u,f){u=W0(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Xa(t,o,n),a!==null&&(ii(a,t,n),xo(a,t,n))}function Y0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function _d(t,n){Y0(t,n),(t=t.alternate)&&Y0(t,n)}function Z0(t){if(t.tag===13||t.tag===31){var n=br(t,67108864);n!==null&&ii(n,t,67108864),_d(t,67108864)}}function K0(t){if(t.tag===13||t.tag===31){var n=pi();n=xn(n);var a=br(t,n);a!==null&&ii(a,t,n),_d(t,n)}}var xc=!0;function Ey(t,n,a,o){var u=P.T;P.T=null;var f=G.p;try{G.p=2,vd(t,n,a,o)}finally{G.p=f,P.T=u}}function Ty(t,n,a,o){var u=P.T;P.T=null;var f=G.p;try{G.p=8,vd(t,n,a,o)}finally{G.p=f,P.T=u}}function vd(t,n,a,o){if(xc){var u=xd(o);if(u===null)ad(t,n,o,Sc,a),J0(t,o);else if(Ry(u,t,n,a,o))o.stopPropagation();else if(J0(t,o),n&4&&-1<Ay.indexOf(t)){for(;u!==null;){var f=aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=j(f.pendingLanes);if(S!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var H=1<<31-ke(S);R.entanglements[1]|=H,S&=~H}Xi(f),(Bt&6)===0&&(nc=zt()+500,Po(0))}}break;case 31:case 13:R=br(f,2),R!==null&&ii(R,f,2),ac(),_d(f,2)}if(f=xd(o),f===null&&ad(t,n,o,Sc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ad(t,n,o,null,a)}}function xd(t){return t=Su(t),Sd(t)}var Sc=null;function Sd(t){if(Sc=null,t=ia(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function Q0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case U:return 2;case b:return 8;case K:case oe:return 32;case he:return 268435456;default:return 32}default:return 32}}var yd=!1,tr=null,nr=null,ir=null,Vo=new Map,ko=new Map,ar=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J0(t,n){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=aa(n),n!==null&&Z0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ry(t,n,a,o,u){switch(n){case"focusin":return tr=Xo(tr,t,n,a,o,u),!0;case"dragenter":return nr=Xo(nr,t,n,a,o,u),!0;case"mouseover":return ir=Xo(ir,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Xo(ko.get(f)||null,t,n,a,o,u)),!0}return!1}function j0(t){var n=ia(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,wt(t.priority,function(){K0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,wt(t.priority,function(){K0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=xd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);xu=o,a.target.dispatchEvent(o),xu=null}else return n=aa(a),n!==null&&Z0(n),t.blockedOn=a,!1;n.shift()}return!0}function $0(t,n,a){yc(t)&&a.delete(n)}function Cy(){yd=!1,tr!==null&&yc(tr)&&(tr=null),nr!==null&&yc(nr)&&(nr=null),ir!==null&&yc(ir)&&(ir=null),Vo.forEach($0),ko.forEach($0)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,yd||(yd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Cy)))}var bc=null;function e_(t){bc!==t&&(bc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Sd(o||a)===null)continue;break}var f=aa(a);f!==null&&(t.splice(n,3),n-=3,xf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function As(t){function n(H){return Mc(H,t)}tr!==null&&Mc(tr,t),nr!==null&&Mc(nr,t),ir!==null&&Mc(ir,t),Vo.forEach(n),ko.forEach(n);for(var a=0;a<ar.length;a++){var o=ar[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)j0(a),a.blockedOn===null&&ar.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[vt]||null;if(typeof f=="function")S||e_(a);else if(S){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[vt]||null)R=S.formAction;else if(Sd(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),e_(a)}}}function t_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(t){this._internalRoot=t}Ec.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=pi();q0(a,o,t,n,null,null)},Ec.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;q0(t.current,2,null,t,null,null),ac(),n[sn]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=Nt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ar.length&&n!==0&&n<ar[a].priority;a++);ar.splice(a,0,t),a===0&&j0(t)}};var n_=e.version;if(n_!=="19.2.0")throw Error(r(527,n_,"19.2.0"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var wy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{ge=Tc.inject(wy),pe=Tc}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=cg,f=ug,S=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=X0(t,1,!1,null,null,a,o,null,u,f,S,t_),t[sn]=n.current,id(t),new Md(n)},qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=cg,S=ug,R=fg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=X0(t,1,!0,n,a??null,o,u,H,f,S,R,t_),n.context=W0(null),a=n.current,o=pi(),o=xn(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,Le(n,a),Xi(n),t[sn]=n.current,id(t),new Ec(n)},qo.version="19.2.0",qo}var d_;function Vy(){if(d_)return Td.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Td.exports=Gy(),Td.exports}var ky=Vy();Lv();function ol(){return ol=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},ol.apply(this,arguments)}var hr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(hr||(hr={}));const h_="popstate";function Xy(s){s===void 0&&(s={});function e(r,l){let{pathname:c,search:d,hash:p}=r.location;return ch("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Nv(l)}return qy(e,i,null,s)}function Cn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ip(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Wy(){return Math.random().toString(36).substr(2,8)}function p_(s,e){return{usr:s.state,key:s.key,idx:e}}function ch(s,e,i,r){return i===void 0&&(i=null),ol({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?js(e):e,{state:i,key:e&&e.key||r||Wy()})}function Nv(s){let{pathname:e="/",search:i="",hash:r=""}=s;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function js(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substr(i),s=s.substr(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function qy(s,e,i,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:c=!1}=r,d=l.history,p=hr.Pop,m=null,h=v();h==null&&(h=0,d.replaceState(ol({},d.state,{idx:h}),""));function v(){return(d.state||{idx:null}).idx}function _(){p=hr.Pop;let y=v(),x=y==null?null:y-h;h=y,m&&m({action:p,location:C.location,delta:x})}function g(y,x){p=hr.Push;let N=ch(C.location,y,x);h=v()+1;let F=p_(N,h),w=C.createHref(N);try{d.pushState(F,"",w)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(w)}c&&m&&m({action:p,location:C.location,delta:1})}function M(y,x){p=hr.Replace;let N=ch(C.location,y,x);h=v();let F=p_(N,h),w=C.createHref(N);d.replaceState(F,"",w),c&&m&&m({action:p,location:C.location,delta:0})}function E(y){let x=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof y=="string"?y:Nv(y);return N=N.replace(/ $/,"%20"),Cn(x,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,x)}let C={get action(){return p},get location(){return s(l,d)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(h_,_),m=y,()=>{l.removeEventListener(h_,_),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:M,go(y){return d.go(y)}};return C}var m_;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(m_||(m_={}));function Yy(s,e,i){return i===void 0&&(i="/"),Zy(s,e,i)}function Zy(s,e,i,r){let l=typeof e=="string"?js(e):e,c=Iv(l.pathname||"/",i);if(c==null)return null;let d=Ov(s);Ky(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let h=oM(c);p=aM(d[m],h)}return p}function Ov(s,e,i,r){e===void 0&&(e=[]),i===void 0&&(i=[]),r===void 0&&(r="");let l=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(Cn(m.relativePath.startsWith(r),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(r.length));let h=Wr([r,m.relativePath]),v=i.concat(m);c.children&&c.children.length>0&&(Cn(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Ov(c.children,e,v,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:nM(h,c.index),routesMeta:v})};return s.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let m of Pv(c.path))l(c,d,m)}),e}function Pv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let d=Pv(r.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...d),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function Ky(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:iM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const Qy=/^:[\w-]+$/,Jy=3,jy=2,$y=1,eM=10,tM=-2,g_=s=>s==="*";function nM(s,e){let i=s.split("/"),r=i.length;return i.some(g_)&&(r+=tM),e&&(r+=jy),i.filter(l=>!g_(l)).reduce((l,c)=>l+(Qy.test(c)?Jy:c===""?$y:eM),r)}function iM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function aM(s,e,i){let{routesMeta:r}=s,l={},c="/",d=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",_=rM({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v),g=m.route;if(!_)return null;Object.assign(l,_.params),d.push({params:l,pathname:Wr([c,_.pathname]),pathnameBase:dM(Wr([c,_.pathnameBase])),route:g}),_.pathnameBase!=="/"&&(c=Wr([c,_.pathnameBase]))}return d}function rM(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=sM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,v,_)=>{let{paramName:g,isOptional:M}=v;if(g==="*"){let C=p[_]||"";d=c.slice(0,c.length-C.length).replace(/(.)\/+$/,"$1")}const E=p[_];return M&&!E?h[g]=void 0:h[g]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:d,pattern:s}}function sM(s,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),ip(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function oM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ip(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Iv(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}const lM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cM=s=>lM.test(s);function uM(s,e){e===void 0&&(e="/");let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?js(s):s,c;if(i)if(cM(i))c=i;else{if(i.includes("//")){let d=i;i=i.replace(/\/\/+/g,"/"),ip(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+i))}i.startsWith("/")?c=__(i.substring(1),"/"):c=__(i,e)}else c=e;return{pathname:c,search:hM(r),hash:pM(l)}}function __(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function wd(s,e,i,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function zv(s,e){let i=fM(s);return e?i.map((r,l)=>l===i.length-1?r.pathname:r.pathnameBase):i.map(r=>r.pathnameBase)}function Bv(s,e,i,r){r===void 0&&(r=!1);let l;typeof s=="string"?l=js(s):(l=ol({},s),Cn(!l.pathname||!l.pathname.includes("?"),wd("?","pathname","search",l)),Cn(!l.pathname||!l.pathname.includes("#"),wd("#","pathname","hash",l)),Cn(!l.search||!l.search.includes("#"),wd("#","search","hash",l)));let c=s===""||l.pathname==="",d=c?"/":l.pathname,p;if(d==null)p=i;else{let _=e.length-1;if(!r&&d.startsWith("..")){let g=d.split("/");for(;g[0]==="..";)g.shift(),_-=1;l.pathname=g.join("/")}p=_>=0?e[_]:"/"}let m=uM(l,p),h=d&&d!=="/"&&d.endsWith("/"),v=(c||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}const Wr=s=>s.join("/").replace(/\/\/+/g,"/"),dM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),hM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,pM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function mM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Fv=["post","put","patch","delete"];new Set(Fv);const gM=["get",...Fv];new Set(gM);function ll(){return ll=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},ll.apply(this,arguments)}const ap=Re.createContext(null),_M=Re.createContext(null),dl=Re.createContext(null),hu=Re.createContext(null),gr=Re.createContext({outlet:null,matches:[],isDataRoute:!1}),Hv=Re.createContext(null);function hl(){return Re.useContext(hu)!=null}function rp(){return hl()||Cn(!1),Re.useContext(hu).location}function Gv(s){Re.useContext(dl).static||Re.useLayoutEffect(s)}function sp(){let{isDataRoute:s}=Re.useContext(gr);return s?UM():vM()}function vM(){hl()||Cn(!1);let s=Re.useContext(ap),{basename:e,future:i,navigator:r}=Re.useContext(dl),{matches:l}=Re.useContext(gr),{pathname:c}=rp(),d=JSON.stringify(zv(l,i.v7_relativeSplatPath)),p=Re.useRef(!1);return Gv(()=>{p.current=!0}),Re.useCallback(function(h,v){if(v===void 0&&(v={}),!p.current)return;if(typeof h=="number"){r.go(h);return}let _=Bv(h,JSON.parse(d),c,v.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Wr([e,_.pathname])),(v.replace?r.replace:r.push)(_,v.state,v)},[e,r,d,c,s])}function xM(){let{matches:s}=Re.useContext(gr),e=s[s.length-1];return e?e.params:{}}function SM(s,e){return yM(s,e)}function yM(s,e,i,r){hl()||Cn(!1);let{navigator:l}=Re.useContext(dl),{matches:c}=Re.useContext(gr),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let h=rp(),v;if(e){var _;let y=typeof e=="string"?js(e):e;m==="/"||(_=y.pathname)!=null&&_.startsWith(m)||Cn(!1),v=y}else v=h;let g=v.pathname||"/",M=g;if(m!=="/"){let y=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=Yy(s,{pathname:M}),C=AM(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},p,y.params),pathname:Wr([m,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?m:Wr([m,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),c,i,r);return e&&C?Re.createElement(hu.Provider,{value:{location:ll({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:hr.Pop}},C):C}function MM(){let s=DM(),e=mM(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Re.createElement(Re.Fragment,null,Re.createElement("h2",null,"Unexpected Application Error!"),Re.createElement("h3",{style:{fontStyle:"italic"}},e),i?Re.createElement("pre",{style:l},i):null,null)}const bM=Re.createElement(MM,null);class EM extends Re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?Re.createElement(gr.Provider,{value:this.props.routeContext},Re.createElement(Hv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TM(s){let{routeContext:e,match:i,children:r}=s,l=Re.useContext(ap);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),Re.createElement(gr.Provider,{value:e},r)}function AM(s,e,i,r){var l;if(e===void 0&&(e=[]),i===void 0&&(i=null),r===void 0&&(r=null),s==null){var c;if(!i)return null;if(i.errors)s=i.matches;else if((c=r)!=null&&c.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let d=s,p=(l=i)==null?void 0:l.errors;if(p!=null){let v=d.findIndex(_=>_.route.id&&p?.[_.route.id]!==void 0);v>=0||Cn(!1),d=d.slice(0,Math.min(d.length,v+1))}let m=!1,h=-1;if(i&&r&&r.v7_partialHydration)for(let v=0;v<d.length;v++){let _=d[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=v),_.route.id){let{loaderData:g,errors:M}=i,E=_.route.loader&&g[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){m=!0,h>=0?d=d.slice(0,h+1):d=[d[0]];break}}}return d.reduceRight((v,_,g)=>{let M,E=!1,C=null,y=null;i&&(M=p&&_.route.id?p[_.route.id]:void 0,C=_.route.errorElement||bM,m&&(h<0&&g===0?(LM("route-fallback"),E=!0,y=null):h===g&&(E=!0,y=_.route.hydrateFallbackElement||null)));let x=e.concat(d.slice(0,g+1)),N=()=>{let F;return M?F=C:E?F=y:_.route.Component?F=Re.createElement(_.route.Component,null):_.route.element?F=_.route.element:F=v,Re.createElement(TM,{match:_,routeContext:{outlet:v,matches:x,isDataRoute:i!=null},children:F})};return i&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?Re.createElement(EM,{location:i.location,revalidation:i.revalidation,component:C,error:M,children:N(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):N()},null)}var Vv=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Vv||{}),kv=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(kv||{});function RM(s){let e=Re.useContext(ap);return e||Cn(!1),e}function CM(s){let e=Re.useContext(_M);return e||Cn(!1),e}function wM(s){let e=Re.useContext(gr);return e||Cn(!1),e}function Xv(s){let e=wM(),i=e.matches[e.matches.length-1];return i.route.id||Cn(!1),i.route.id}function DM(){var s;let e=Re.useContext(Hv),i=CM(),r=Xv();return e!==void 0?e:(s=i.errors)==null?void 0:s[r]}function UM(){let{router:s}=RM(Vv.UseNavigateStable),e=Xv(kv.UseNavigateStable),i=Re.useRef(!1);return Gv(()=>{i.current=!0}),Re.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?s.navigate(l):s.navigate(l,ll({fromRouteId:e},c)))},[s,e])}const v_={};function LM(s,e,i){v_[s]||(v_[s]=!0)}function NM(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function OM(s){let{to:e,replace:i,state:r,relative:l}=s;hl()||Cn(!1);let{future:c,static:d}=Re.useContext(dl),{matches:p}=Re.useContext(gr),{pathname:m}=rp(),h=sp(),v=Bv(e,zv(p,c.v7_relativeSplatPath),m,l==="path"),_=JSON.stringify(v);return Re.useEffect(()=>h(JSON.parse(_),{replace:i,state:r,relative:l}),[h,_,l,i,r]),null}function tl(s){Cn(!1)}function PM(s){let{basename:e="/",children:i=null,location:r,navigationType:l=hr.Pop,navigator:c,static:d=!1,future:p}=s;hl()&&Cn(!1);let m=e.replace(/^\/*/,"/"),h=Re.useMemo(()=>({basename:m,navigator:c,static:d,future:ll({v7_relativeSplatPath:!1},p)}),[m,p,c,d]);typeof r=="string"&&(r=js(r));let{pathname:v="/",search:_="",hash:g="",state:M=null,key:E="default"}=r,C=Re.useMemo(()=>{let y=Iv(v,m);return y==null?null:{location:{pathname:y,search:_,hash:g,state:M,key:E},navigationType:l}},[m,v,_,g,M,E,l]);return C==null?null:Re.createElement(dl.Provider,{value:h},Re.createElement(hu.Provider,{children:i,value:C}))}function IM(s){let{children:e,location:i}=s;return SM(uh(e),i)}new Promise(()=>{});function uh(s,e){e===void 0&&(e=[]);let i=[];return Re.Children.forEach(s,(r,l)=>{if(!Re.isValidElement(r))return;let c=[...e,l];if(r.type===Re.Fragment){i.push.apply(i,uh(r.props.children,c));return}r.type!==tl&&Cn(!1),!r.props.index||!r.props.children||Cn(!1);let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=uh(r.props.children,c)),i.push(d)}),i}const zM="6";try{window.__reactRouterVersion=zM}catch{}const BM="startTransition",x_=zy[BM];function FM(s){let{basename:e,children:i,future:r,window:l}=s,c=Re.useRef();c.current==null&&(c.current=Xy({window:l,v5Compat:!0}));let d=c.current,[p,m]=Re.useState({action:d.action,location:d.location}),{v7_startTransition:h}=r||{},v=Re.useCallback(_=>{h&&x_?x_(()=>m(_)):m(_)},[m,h]);return Re.useLayoutEffect(()=>d.listen(v),[d,v]),Re.useEffect(()=>NM(r),[r]),Re.createElement(PM,{basename:e,children:i,location:p.location,navigationType:p.action,navigator:d,future:r})}var S_;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(S_||(S_={}));var y_;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(y_||(y_={}));const op="185",HM=0,M_=1,GM=2,jc=1,VM=2,nl=3,mr=0,ri=1,Zi=2,Ca=0,Ws=1,Vs=2,b_=3,E_=4,kM=5,Gr=100,XM=101,WM=102,qM=103,YM=104,ZM=200,KM=201,QM=202,JM=203,fh=204,dh=205,jM=206,$M=207,eb=208,tb=209,nb=210,ib=211,ab=212,rb=213,sb=214,hh=0,ph=1,mh=2,Zs=3,gh=4,_h=5,vh=6,xh=7,Wv=0,ob=1,lb=2,Ji=0,qv=1,Yv=2,Zv=3,Kv=4,Qv=5,Jv=6,jv=7,$v=300,qr=301,Ks=302,Dd=303,Ud=304,pu=306,Sh=1e3,Ra=1001,yh=1002,Fn=1003,cb=1004,Ac=1005,Wn=1006,Ld=1007,kr=1008,wi=1009,ex=1010,tx=1011,cl=1012,lp=1013,$i=1014,Ki=1015,Da=1016,cp=1017,up=1018,ul=1020,nx=35902,ix=35899,ax=1021,rx=1022,Fi=1023,Ua=1026,Xr=1027,sx=1028,fp=1029,Yr=1030,dp=1031,hp=1033,$c=33776,eu=33777,tu=33778,nu=33779,Mh=35840,bh=35841,Eh=35842,Th=35843,Ah=36196,Rh=37492,Ch=37496,wh=37488,Dh=37489,au=37490,Uh=37491,Lh=37808,Nh=37809,Oh=37810,Ph=37811,Ih=37812,zh=37813,Bh=37814,Fh=37815,Hh=37816,Gh=37817,Vh=37818,kh=37819,Xh=37820,Wh=37821,qh=36492,Yh=36494,Zh=36495,Kh=36283,Qh=36284,ru=36285,Jh=36286,ub=3200,T_=0,fb=1,dr="",Ri="srgb",su="srgb-linear",ou="linear",Kt="srgb",Rs=7680,A_=519,db=512,hb=513,pb=514,pp=515,mb=516,gb=517,mp=518,_b=519,R_=35044,C_=35048,w_="300 es",Qi=2e3,lu=2001;function vb(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xb(){const s=cu("canvas");return s.style.display="block",s}const D_={};function U_(...s){const e="THREE."+s.shift();console.log(e,...s)}function ox(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=ox(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Dt(...s){s=ox(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function qs(...s){const e=s.join(" ");e in D_||(D_[e]=!0,rt(...s))}function Sb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const yb={[hh]:ph,[mh]:vh,[gh]:xh,[Zs]:_h,[ph]:hh,[vh]:mh,[xh]:gh,[_h]:Zs};class Kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L_=1234567;const al=Math.PI/180,fl=180/Math.PI;function $s(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function Tt(s,e,i){return Math.max(e,Math.min(i,s))}function gp(s,e){return(s%e+e)%e}function Mb(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function bb(s,e,i){return s!==e?(i-s)/(e-s):0}function rl(s,e,i){return(1-i)*s+i*e}function Eb(s,e,i,r){return rl(s,e,1-Math.exp(-i*r))}function Tb(s,e=1){return e-Math.abs(gp(s,e*2)-e)}function Ab(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function Rb(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Cb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wb(s,e){return s+Math.random()*(e-s)}function Db(s){return s*(.5-Math.random())}function Ub(s){s!==void 0&&(L_=s);let e=L_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lb(s){return s*al}function Nb(s){return s*fl}function Ob(s){return(s&s-1)===0&&s!==0}function Pb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ib(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zb(s,e,i,r,l){const c=Math.cos,d=Math.sin,p=c(i/2),m=d(i/2),h=c((e+r)/2),v=d((e+r)/2),_=c((e-r)/2),g=d((e-r)/2),M=c((r-e)/2),E=d((r-e)/2);switch(l){case"XYX":s.set(p*v,m*_,m*g,p*h);break;case"YZY":s.set(m*g,p*v,m*_,p*h);break;case"ZXZ":s.set(m*_,m*g,p*v,p*h);break;case"XZX":s.set(p*v,m*E,m*M,p*h);break;case"YXY":s.set(m*M,p*v,m*E,p*h);break;case"ZYZ":s.set(m*E,m*M,p*v,p*h);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Gs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yo={DEG2RAD:al,RAD2DEG:fl,generateUUID:$s,clamp:Tt,euclideanModulo:gp,mapLinear:Mb,inverseLerp:bb,lerp:rl,damp:Eb,pingpong:Tb,smoothstep:Ab,smootherstep:Rb,randInt:Cb,randFloat:wb,randFloatSpread:Db,seededRandom:Ub,degToRad:Lb,radToDeg:Nb,isPowerOfTwo:Ob,ceilPowerOfTwo:Pb,floorPowerOfTwo:Ib,setQuaternionFromProperEuler:zb,normalize:Zn,denormalize:Gs},Sp=class Sp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sp.prototype.isVector2=!0;let Lt=Sp;class eo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],v=r[l+2],_=r[l+3],g=c[d+0],M=c[d+1],E=c[d+2],C=c[d+3];if(_!==C||m!==g||h!==M||v!==E){let y=m*g+h*M+v*E+_*C;y<0&&(g=-g,M=-M,E=-E,C=-C,y=-y);let x=1-p;if(y<.9995){const N=Math.acos(y),F=Math.sin(N);x=Math.sin(x*N)/F,p=Math.sin(p*N)/F,m=m*x+g*p,h=h*x+M*p,v=v*x+E*p,_=_*x+C*p}else{m=m*x+g*p,h=h*x+M*p,v=v*x+E*p,_=_*x+C*p;const N=1/Math.sqrt(m*m+h*h+v*v+_*_);m*=N,h*=N,v*=N,_*=N}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],_=c[d],g=c[d+1],M=c[d+2],E=c[d+3];return e[i]=p*E+v*_+m*M-h*g,e[i+1]=m*E+v*g+h*_-p*M,e[i+2]=h*E+v*M+p*g-m*_,e[i+3]=v*E-p*_-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),_=p(c/2),g=m(r/2),M=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=g*v*_+h*M*E,this._y=h*M*_-g*v*E,this._z=h*v*E+g*M*_,this._w=h*v*_-g*M*E;break;case"YXZ":this._x=g*v*_+h*M*E,this._y=h*M*_-g*v*E,this._z=h*v*E-g*M*_,this._w=h*v*_+g*M*E;break;case"ZXY":this._x=g*v*_-h*M*E,this._y=h*M*_+g*v*E,this._z=h*v*E+g*M*_,this._w=h*v*_-g*M*E;break;case"ZYX":this._x=g*v*_-h*M*E,this._y=h*M*_+g*v*E,this._z=h*v*E-g*M*_,this._w=h*v*_+g*M*E;break;case"YZX":this._x=g*v*_+h*M*E,this._y=h*M*_+g*v*E,this._z=h*v*E-g*M*_,this._w=h*v*_-g*M*E;break;case"XZY":this._x=g*v*_-h*M*E,this._y=h*M*_-g*v*E,this._z=h*v*E+g*M*_,this._w=h*v*_+g*M*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],_=i[10],g=r+p+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(r>p&&r>_){const M=2*Math.sqrt(1+r-p-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>_){const M=2*Math.sqrt(1+p-r-_);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-r*h,this._z=c*v+d*h+r*m-l*p,this._w=d*v-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yp=class yp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(N_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(N_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),v=2*(p*i-c*l),_=2*(c*r-d*i);return this.x=i+m*h+d*_-p*v,this.y=r+m*v+p*h-c*_,this.z=l+m*_+c*v-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yp.prototype.isVector3=!0;let $=yp;const Nd=new $,N_=new eo,Mp=class Mp{constructor(e,i,r,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],v=r[4],_=r[7],g=r[2],M=r[5],E=r[8],C=l[0],y=l[3],x=l[6],N=l[1],F=l[4],w=l[7],B=l[2],O=l[5],z=l[8];return c[0]=d*C+p*N+m*B,c[3]=d*y+p*F+m*O,c[6]=d*x+p*w+m*z,c[1]=h*C+v*N+_*B,c[4]=h*y+v*F+_*O,c[7]=h*x+v*w+_*z,c[2]=g*C+M*N+E*B,c[5]=g*y+M*F+E*O,c[8]=g*x+M*w+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*d*v-i*p*h-r*c*v+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],_=v*d-p*h,g=p*m-v*c,M=h*c-d*m,E=i*_+r*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(l*h-v*r)*C,e[2]=(p*r-l*d)*C,e[3]=g*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Od.makeScale(e,i)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mp.prototype.isMatrix3=!0;let lt=Mp;const Od=new lt,O_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bb(){const s={enabled:!0,workingColorSpace:su,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Kt&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Kt&&(l.r=Ys(l.r),l.g=Ys(l.g),l.b=Ys(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===dr?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[su]:{primaries:e,whitePoint:r,transfer:ou,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),s}const Ct=Bb();function wa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class Fb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Cs===void 0&&(Cs=cu("canvas")),Cs.width=e.width,Cs.height=e.height;const l=Cs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Cs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=wa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(wa(i[r]/255)*255):i[r]=wa(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hb=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Pd(l[d].image)):c.push(Pd(l[d]))}else c=Pd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Pd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Gb=0;const Id=new $;class qn extends Kr{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Ra,l=Ra,c=Wn,d=kr,p=Fi,m=wi,h=qn.DEFAULT_ANISOTROPY,v=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=$s(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case Ra:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case Ra:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=$v;qn.DEFAULT_ANISOTROPY=1;const bp=class bp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],v=m[4],_=m[8],g=m[1],M=m[5],E=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(E+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(h+1)/2,w=(M+1)/2,B=(x+1)/2,O=(v+g)/4,z=(_+C)/4,T=(E+y)/4;return F>w&&F>B?F<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(F),l=O/r,c=z/r):w>B?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=O/l,c=T/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=z/c,l=T/c),this.set(r,l,c,i),this}let N=Math.sqrt((y-E)*(y-E)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(_-C)/N,this.z=(g-v)/N,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bp.prototype.isVector4=!0;let vn=bp;class Vb extends Kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new qn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Vb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class lx extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kb extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,r,l,c,d,p,m,h,v,_,g,M,E,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,v,_,g,M,E,C,y)}set(e,i,r,l,c,d,p,m,h,v,_,g,M,E,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=v,x[10]=_,x[14]=g,x[3]=M,x[7]=E,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ws.setFromMatrixColumn(e,0).length(),c=1/ws.setFromMatrixColumn(e,1).length(),d=1/ws.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=d*v,M=d*_,E=p*v,C=p*_;i[0]=m*v,i[4]=-m*_,i[8]=h,i[1]=M+E*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=E+M*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*v,M=m*_,E=h*v,C=h*_;i[0]=g+C*p,i[4]=E*p-M,i[8]=d*h,i[1]=d*_,i[5]=d*v,i[9]=-p,i[2]=M*p-E,i[6]=C+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*v,M=m*_,E=h*v,C=h*_;i[0]=g-C*p,i[4]=-d*_,i[8]=E+M*p,i[1]=M+E*p,i[5]=d*v,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*v,M=d*_,E=p*v,C=p*_;i[0]=m*v,i[4]=E*h-M,i[8]=g*h+C,i[1]=m*_,i[5]=C*h+g,i[9]=M*h-E,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*h,E=p*m,C=p*h;i[0]=m*v,i[4]=C-g*_,i[8]=E*_+M,i[1]=_,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*_+E,i[10]=g-C*_}else if(e.order==="XZY"){const g=d*m,M=d*h,E=p*m,C=p*h;i[0]=m*v,i[4]=-_,i[8]=h*v,i[1]=g*_+C,i[5]=d*v,i[9]=M*_-E,i[2]=E*_-M,i[6]=p*v,i[10]=C*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xb,e,Wb)}lookAt(e,i,r){const l=this.elements;return mi.subVectors(e,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),sr.crossVectors(r,mi),sr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),sr.crossVectors(r,mi)),sr.normalize(),Rc.crossVectors(mi,sr),l[0]=sr.x,l[4]=Rc.x,l[8]=mi.x,l[1]=sr.y,l[5]=Rc.y,l[9]=mi.y,l[2]=sr.z,l[6]=Rc.z,l[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],v=r[1],_=r[5],g=r[9],M=r[13],E=r[2],C=r[6],y=r[10],x=r[14],N=r[3],F=r[7],w=r[11],B=r[15],O=l[0],z=l[4],T=l[8],D=l[12],k=l[1],V=l[5],Z=l[9],me=l[13],ne=l[2],Y=l[6],P=l[10],G=l[14],ee=l[3],xe=l[7],Ae=l[11],L=l[15];return c[0]=d*O+p*k+m*ne+h*ee,c[4]=d*z+p*V+m*Y+h*xe,c[8]=d*T+p*Z+m*P+h*Ae,c[12]=d*D+p*me+m*G+h*L,c[1]=v*O+_*k+g*ne+M*ee,c[5]=v*z+_*V+g*Y+M*xe,c[9]=v*T+_*Z+g*P+M*Ae,c[13]=v*D+_*me+g*G+M*L,c[2]=E*O+C*k+y*ne+x*ee,c[6]=E*z+C*V+y*Y+x*xe,c[10]=E*T+C*Z+y*P+x*Ae,c[14]=E*D+C*me+y*G+x*L,c[3]=N*O+F*k+w*ne+B*ee,c[7]=N*z+F*V+w*Y+B*xe,c[11]=N*T+F*Z+w*P+B*Ae,c[15]=N*D+F*me+w*G+B*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],v=e[2],_=e[6],g=e[10],M=e[14],E=e[3],C=e[7],y=e[11],x=e[15],N=m*M-h*g,F=p*M-h*_,w=p*g-m*_,B=d*M-h*v,O=d*g-m*v,z=d*_-p*v;return i*(C*N-y*F+x*w)-r*(E*N-y*B+x*O)+l*(E*F-C*B+x*z)-c*(E*w-C*O+y*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return i*(d*v-p*h)-r*(c*v-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],v=e[8],_=e[9],g=e[10],M=e[11],E=e[12],C=e[13],y=e[14],x=e[15],N=i*p-r*d,F=i*m-l*d,w=i*h-c*d,B=r*m-l*p,O=r*h-c*p,z=l*h-c*m,T=v*C-_*E,D=v*y-g*E,k=v*x-M*E,V=_*y-g*C,Z=_*x-M*C,me=g*x-M*y,ne=N*me-F*Z+w*V+B*k-O*D+z*T;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ne;return e[0]=(p*me-m*Z+h*V)*Y,e[1]=(l*Z-r*me-c*V)*Y,e[2]=(C*z-y*O+x*B)*Y,e[3]=(g*O-_*z-M*B)*Y,e[4]=(m*k-d*me-h*D)*Y,e[5]=(i*me-l*k+c*D)*Y,e[6]=(y*w-E*z-x*F)*Y,e[7]=(v*z-g*w+M*F)*Y,e[8]=(d*Z-p*k+h*T)*Y,e[9]=(r*k-i*Z-c*T)*Y,e[10]=(E*O-C*w+x*N)*Y,e[11]=(_*w-v*O-M*N)*Y,e[12]=(p*D-d*V-m*T)*Y,e[13]=(i*V-r*D+l*T)*Y,e[14]=(C*F-E*B-y*N)*Y,e[15]=(v*B-_*F+g*N)*Y,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,v=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,_=p+p,g=c*h,M=c*v,E=c*_,C=d*v,y=d*_,x=p*_,N=m*h,F=m*v,w=m*_,B=r.x,O=r.y,z=r.z;return l[0]=(1-(C+x))*B,l[1]=(M+w)*B,l[2]=(E-F)*B,l[3]=0,l[4]=(M-w)*O,l[5]=(1-(g+x))*O,l[6]=(y+N)*O,l[7]=0,l[8]=(E+F)*z,l[9]=(y-N)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=ws.set(l[0],l[1],l[2]).length();const p=ws.set(l[4],l[5],l[6]).length(),m=ws.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Pi.copy(this);const h=1/d,v=1/p,_=1/m;return Pi.elements[0]*=h,Pi.elements[1]*=h,Pi.elements[2]*=h,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,i.setFromRotationMatrix(Pi),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=Qi,m=!1){const h=this.elements,v=2*c/(i-e),_=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let E,C;if(m)E=c/(d-c),C=d*c/(d-c);else if(p===Qi)E=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===lu)E=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=Qi,m=!1){const h=this.elements,v=2/(i-e),_=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,C;if(m)E=1/(d-c),C=d/(d-c);else if(p===Qi)E=-2/(d-c),C=-(d+c)/(d-c);else if(p===lu)E=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};du.prototype.isMatrix4=!0;let mn=du;const ws=new $,Pi=new mn,Xb=new $(0,0,0),Wb=new $(1,1,1),sr=new $,Rc=new $,mi=new $,I_=new mn,z_=new eo;class Zr{constructor(e=0,i=0,r=0,l=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return I_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(I_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return z_.setFromEuler(this),this.setFromQuaternion(z_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qb=0;const B_=new $,Ds=new eo,Ma=new mn,Cc=new $,Zo=new $,Yb=new $,Zb=new eo,F_=new $(1,0,0),H_=new $(0,1,0),G_=new $(0,0,1),V_={type:"added"},Kb={type:"removed"},Us={type:"childadded",child:null},zd={type:"childremoved",child:null};class Qn extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new $,i=new Zr,r=new eo,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new lt}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ds.setFromAxisAngle(e,i),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,i){return Ds.setFromAxisAngle(e,i),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(F_,e)}rotateY(e){return this.rotateOnAxis(H_,e)}rotateZ(e){return this.rotateOnAxis(G_,e)}translateOnAxis(e,i){return B_.copy(e).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(F_,e)}translateY(e){return this.translateOnAxis(H_,e)}translateZ(e){return this.translateOnAxis(G_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Cc.copy(e):Cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Zo,Cc,this.up):Ma.lookAt(Cc,Zo,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Ds.setFromRotationMatrix(Ma),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V_),Us.child=e,this.dispatchEvent(Us),Us.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Kb),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V_),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Zb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),v=d(e.images),_=d(e.shapes),g=d(e.skeletons),M=d(e.animations),E=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new $(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ks extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(h,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,E=.005;h.inputState.pinching&&g>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Fd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Mt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ct.workingColorSpace){if(e=gp(e,1),i=Tt(i,0,1),r=Tt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Fd(d,c,e+1/3),this.g=Fd(d,c,e),this.b=Fd(d,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=Ri){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ri){const r=cx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Ct.workingToColorSpace(Xn.copy(this),e),Math.round(Tt(Xn.r*255,0,255))*65536+Math.round(Tt(Xn.g*255,0,255))*256+Math.round(Tt(Xn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Xn.copy(this),i);const r=Xn.r,l=Xn.g,c=Xn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const _=d-p;switch(h=v<=.5?_/(d+p):_/(2-d-p),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Ri){Ct.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,r=Xn.g,l=Xn.b;return e!==Ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(or),this.setHSL(or.h+e,or.s+i,or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(or),e.getHSL(wc);const r=rl(or.h,wc.h,i),l=rl(or.s,wc.s,i),c=rl(or.l,wc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Mt;Mt.NAMES=cx;class Jb extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new $,ba=new $,Hd=new $,Ea=new $,Ls=new $,Ns=new $,k_=new $,Gd=new $,Vd=new $,kd=new $,Xd=new vn,Wd=new vn,qd=new vn;class Bi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ii.subVectors(l,i),ba.subVectors(r,i),Hd.subVectors(e,i);const d=Ii.dot(Ii),p=Ii.dot(ba),m=Ii.dot(Hd),h=ba.dot(ba),v=ba.dot(Hd),_=d*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,M=(h*m-p*v)*g,E=(d*v-p*m)*g;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(d,Ea.y),m.addScaledVector(p,Ea.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Xd.setScalar(0),Wd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,r),qd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Xd,c.x),d.addScaledVector(Wd,c.y),d.addScaledVector(qd,c.z),d}static isFrontFacing(e,i,r,l){return Ii.subVectors(r,i),ba.subVectors(e,i),Ii.cross(ba).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ii.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Ls.subVectors(l,r),Ns.subVectors(c,r),Gd.subVectors(e,r);const m=Ls.dot(Gd),h=Ns.dot(Gd);if(m<=0&&h<=0)return i.copy(r);Vd.subVectors(e,l);const v=Ls.dot(Vd),_=Ns.dot(Vd);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Ls,d);kd.subVectors(e,c);const M=Ls.dot(kd),E=Ns.dot(kd);if(E>=0&&M<=E)return i.copy(c);const C=M*h-m*E;if(C<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(r).addScaledVector(Ns,p);const y=v*E-M*_;if(y<=0&&_-v>=0&&M-E>=0)return k_.subVectors(c,l),p=(_-v)/(_-v+(M-E)),i.copy(l).addScaledVector(k_,p);const x=1/(y+C+g);return d=C*x,p=g*x,i.copy(r).addScaledVector(Ls,d).addScaledVector(Ns,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(c,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Dc.copy(r.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Uc.subVectors(this.max,Ko),Os.subVectors(e.a,Ko),Ps.subVectors(e.b,Ko),Is.subVectors(e.c,Ko),lr.subVectors(Ps,Os),cr.subVectors(Is,Ps),Ir.subVectors(Os,Is);let i=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Ir.z,Ir.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Ir.z,0,-Ir.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Ir.y,Ir.x,0];return!Yd(i,Os,Ps,Is,Uc)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,Os,Ps,Is,Uc))?!1:(Lc.crossVectors(lr,cr),i=[Lc.x,Lc.y,Lc.z],Yd(i,Os,Ps,Is,Uc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ta=[new $,new $,new $,new $,new $,new $,new $,new $],zi=new $,Dc=new pl,Os=new $,Ps=new $,Is=new $,lr=new $,cr=new $,Ir=new $,Ko=new $,Uc=new $,Lc=new $,zr=new $;function Yd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){zr.fromArray(s,c);const p=l.x*Math.abs(zr.x)+l.y*Math.abs(zr.y)+l.z*Math.abs(zr.z),m=e.dot(zr),h=i.dot(zr),v=r.dot(zr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const Rn=new $,Nc=new Lt;let jb=0;class ai extends Kr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=R_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(e),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix3(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Gs(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Gs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Gs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Gs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Gs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ux extends ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class fx extends ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Hn extends ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}const $b=new pl,Qo=new $,Zd=new $;class ml{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):$b.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const i=Qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Qo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(Zd)),this.expandByPoint(Qo.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eE=0;const Ai=new mn,Kd=new Qn,zs=new $,gi=new pl,Jo=new pl,On=new $;class Jn extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vb(e)?fx:ux)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new lt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Jo.setFromBufferAttribute(p),this.morphTargetsRelative?(On.addVectors(gi.min,Jo.min),gi.expandByPoint(On),On.addVectors(gi.max,Jo.max),gi.expandByPoint(On)):(gi.expandByPoint(Jo.min),gi.expandByPoint(Jo.max))}gi.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)On.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(On));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)On.fromBufferAttribute(p,h),m&&(zs.fromBufferAttribute(e,h),On.add(zs)),l=Math.max(l,r.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new ai(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new $,m[T]=new $;const h=new $,v=new $,_=new $,g=new Lt,M=new Lt,E=new Lt,C=new $,y=new $;function x(T,D,k){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,k),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,k),v.sub(h),_.sub(h),M.sub(g),E.sub(g);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(V),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(V),p[T].add(C),p[D].add(C),p[k].add(C),m[T].add(y),m[D].add(y),m[k].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let T=0,D=N.length;T<D;++T){const k=N[T],V=k.start,Z=k.count;for(let me=V,ne=V+Z;me<ne;me+=3)x(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const F=new $,w=new $,B=new $,O=new $;function z(T){B.fromBufferAttribute(l,T),O.copy(B);const D=p[T];F.copy(D),F.sub(B.multiplyScalar(B.dot(D))).normalize(),w.crossVectors(O,D);const V=w.dot(m[T])<0?-1:1;d.setXYZW(T,F.x,F.y,F.z,V)}for(let T=0,D=N.length;T<D;++T){const k=N[T],V=k.start,Z=k.count;for(let me=V,ne=V+Z;me<ne;me+=3)z(e.getX(me+0)),z(e.getX(me+1)),z(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new $,c=new $,d=new $,p=new $,m=new $,h=new $,v=new $,_=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),p.add(v),m.add(v),h.add(v),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),_.subVectors(l,c),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)On.fromBufferAttribute(e,i),On.normalize(),e.setXYZ(i,On.x,On.y,On.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,_=p.normalized,g=new h.constructor(m.length*v);let M=0,E=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let x=0;x<v;x++)g[E++]=h[M++]}return new ai(g,v,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,_=h.length;v<_;v++){const g=h[v],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let _=0,g=h.length;_<g;_++){const M=h[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],_=c[h];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,v=d.length;h<v;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tE=0;class to extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Ws,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fh&&(r.blendSrc=this.blendSrc),this.blendDst!==dh&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Aa=new $,Qd=new $,Oc=new $,ur=new $,Jd=new $,Pc=new $,jd=new $;class mu{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Qd.copy(e).add(i).multiplyScalar(.5),Oc.copy(i).sub(e).normalize(),ur.copy(this.origin).sub(Qd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Oc),p=ur.dot(this.direction),m=-ur.dot(Oc),h=ur.lengthSq(),v=Math.abs(1-d*d);let _,g,M,E;if(v>0)if(_=d*m-p,g=d*p-m,E=c*v,_>=0)if(g>=-E)if(g<=E){const C=1/v;_*=C,g*=C,M=_*(_+d*g+2*p)+g*(d*_+g+2*m)+h}else g=c,_=Math.max(0,-(d*g+p)),M=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(d*g+p)),M=-_*_+g*(g+2*m)+h;else g<=-E?(_=Math.max(0,-(-d*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+h):g<=E?(_=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(_=Math.max(0,-(d*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+h);else g=d>0?-c:c,_=Math.max(0,-(d*g+p)),M=-_*_+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qd).addScaledVector(Oc,g),M}intersectSphere(e,i){Aa.subVectors(e.center,this.origin);const r=Aa.dot(this.direction),l=Aa.dot(Aa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(p=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,i,r,l,c){Jd.subVectors(i,e),Pc.subVectors(r,e),jd.crossVectors(Jd,Pc);let d=this.direction.dot(jd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ur.subVectors(this.origin,e);const m=p*this.direction.dot(Pc.crossVectors(ur,Pc));if(m<0)return null;const h=p*this.direction.dot(Jd.cross(ur));if(h<0||m+h>d)return null;const v=-p*ur.dot(jd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xs extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const X_=new mn,Br=new mu,Ic=new ml,W_=new $,zc=new $,Bc=new $,Fc=new $,$d=new $,Hc=new $,q_=new $,Gc=new $;class _i extends Qn{constructor(e=new Jn,i=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Hc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],_=c[m];v!==0&&($d.fromBufferAttribute(_,e),d?Hc.addScaledVector($d,v):Hc.addScaledVector($d.sub(i),v))}i.add(Hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(Ic.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Ic,W_)===null||Br.origin.distanceToSquared(W_)>(e.far-e.near)**2))&&(X_.copy(c).invert(),Br.copy(e.ray).applyMatrix4(X_),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let E=0,C=g.length;E<C;E++){const y=g[E],x=d[y.materialIndex],N=Math.max(y.start,M.start),F=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let w=N,B=F;w<B;w+=3){const O=p.getX(w),z=p.getX(w+1),T=p.getX(w+2);l=Vc(this,x,e,r,h,v,_,O,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=E,x=C;y<x;y+=3){const N=p.getX(y),F=p.getX(y+1),w=p.getX(y+2);l=Vc(this,d,e,r,h,v,_,N,F,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,C=g.length;E<C;E++){const y=g[E],x=d[y.materialIndex],N=Math.max(y.start,M.start),F=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=N,B=F;w<B;w+=3){const O=w,z=w+1,T=w+2;l=Vc(this,x,e,r,h,v,_,O,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=E,x=C;y<x;y+=3){const N=y,F=y+1,w=y+2;l=Vc(this,d,e,r,h,v,_,N,F,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function nE(s,e,i,r,l,c,d,p){let m;if(e.side===ri?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===mr,p),m===null)return null;Gc.copy(p),Gc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Gc);return h<i.near||h>i.far?null:{distance:h,point:Gc.clone(),object:s}}function Vc(s,e,i,r,l,c,d,p,m,h){s.getVertexPosition(p,zc),s.getVertexPosition(m,Bc),s.getVertexPosition(h,Fc);const v=nE(s,e,i,r,zc,Bc,Fc,q_);if(v){const _=new $;Bi.getBarycoord(q_,zc,Bc,Fc,_),l&&(v.uv=Bi.getInterpolatedAttribute(l,p,m,h,_,new Lt)),c&&(v.uv1=Bi.getInterpolatedAttribute(c,p,m,h,_,new Lt)),d&&(v.normal=Bi.getInterpolatedAttribute(d,p,m,h,_,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};Bi.getNormal(zc,Bc,Fc,g.normal),v.face=g,v.barycoord=_}return v}class iE extends qn{constructor(e=null,i=1,r=1,l,c,d,p,m,h=Fn,v=Fn,_,g){super(null,d,p,m,h,v,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new $,aE=new $,rE=new lt;class Hr{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=eh.subVectors(r,i).cross(aE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(eh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||rE.getNormalMatrix(e),l=this.coplanarPoint(eh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new ml,sE=new Lt(.5,.5),kc=new $;class dx{constructor(e=new Hr,i=new Hr,r=new Hr,l=new Hr,c=new Hr,d=new Hr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],_=c[5],g=c[6],M=c[7],E=c[8],C=c[9],y=c[10],x=c[11],N=c[12],F=c[13],w=c[14],B=c[15];if(l[0].setComponents(h-d,M-v,x-E,B-N).normalize(),l[1].setComponents(h+d,M+v,x+E,B+N).normalize(),l[2].setComponents(h+p,M+_,x+C,B+F).normalize(),l[3].setComponents(h-p,M-_,x-C,B-F).normalize(),r)l[4].setComponents(m,g,y,w).normalize(),l[5].setComponents(h-m,M-g,x-y,B-w).normalize();else if(l[4].setComponents(h-m,M-g,x-y,B-w).normalize(),i===Qi)l[5].setComponents(h+m,M+g,x+y,B+w).normalize();else if(i===lu)l[5].setComponents(m,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const i=sE.distanceTo(e.center);return Fr.radius=.7071067811865476+i,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hx extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new $,fu=new $,Y_=new mn,jo=new mu,Xc=new ml,th=new $,Z_=new $;class oE extends Qn{constructor(e=new Jn,i=new hx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new Hn(r,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,e.ray.intersectsSphere(Xc)===!1)return;Y_.copy(l).invert(),jo.copy(e.ray).applyMatrix4(Y_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let C=M,y=E-1;C<y;C+=h){const x=v.getX(C),N=v.getX(C+1),F=Wc(this,e,jo,m,x,N,C);F&&i.push(F)}if(this.isLineLoop){const C=v.getX(E-1),y=v.getX(M),x=Wc(this,e,jo,m,C,y,E-1);x&&i.push(x)}}else{const M=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let C=M,y=E-1;C<y;C+=h){const x=Wc(this,e,jo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Wc(this,e,jo,m,E-1,M,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Wc(s,e,i,r,l,c,d){const p=s.geometry.attributes.position;if(uu.fromBufferAttribute(p,l),fu.fromBufferAttribute(p,c),i.distanceSqToSegment(uu,fu,th,Z_)>r)return;th.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(th);if(!(h<e.near||h>e.far))return{distance:h,point:Z_.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const K_=new $,Q_=new $;class lE extends oE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)K_.fromBufferAttribute(i,l),Q_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+K_.distanceTo(Q_);e.setAttribute("lineDistance",new Hn(r,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class px extends to{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const J_=new mn,jh=new mu,qc=new ml,Yc=new $;class cE extends Qn{constructor(e=new Jn,i=new px){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qc.copy(r.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,e.ray.intersectsSphere(qc)===!1)return;J_.copy(l).invert(),jh.copy(e.ray).applyMatrix4(J_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,_=r.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let E=g,C=M;E<C;E++){const y=h.getX(E);Yc.fromBufferAttribute(_,y),j_(Yc,y,m,l,e,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let E=g,C=M;E<C;E++)Yc.fromBufferAttribute(_,E),j_(Yc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function j_(s,e,i,r,l,c,d){const p=jh.distanceSqToPoint(s);if(p<i){const m=new $;jh.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class mx extends qn{constructor(e=[],i=qr,r,l,c,d,p,m,h,v){super(e,i,r,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uE extends qn{constructor(e,i,r,l,c,d,p,m,h){super(e,i,r,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends qn{constructor(e,i,r=$i,l,c,d,p=Fn,m=Fn,h,v=Ua,_=1){if(v!==Ua&&v!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,d,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fE extends Qs{constructor(e,i=$i,r=qr,l,c,d=Fn,p=Fn,m,h=Ua){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,c,d,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gl extends Jn{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],_=[];let g=0,M=0;E("z","y","x",-1,-1,r,i,e,d,c,0),E("z","y","x",1,-1,r,i,-e,d,c,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(v,3)),this.setAttribute("uv",new Hn(_,2));function E(C,y,x,N,F,w,B,O,z,T,D){const k=w/z,V=B/T,Z=w/2,me=B/2,ne=O/2,Y=z+1,P=T+1;let G=0,ee=0;const xe=new $;for(let Ae=0;Ae<P;Ae++){const L=Ae*V-me;for(let J=0;J<Y;J++){const Te=J*k-Z;xe[C]=Te*N,xe[y]=L*F,xe[x]=ne,h.push(xe.x,xe.y,xe.z),xe[C]=0,xe[y]=0,xe[x]=O>0?1:-1,v.push(xe.x,xe.y,xe.z),_.push(J/z),_.push(1-Ae/T),G+=1}}for(let Ae=0;Ae<T;Ae++)for(let L=0;L<z;L++){const J=g+L+Y*Ae,Te=g+L+Y*(Ae+1),De=g+(L+1)+Y*(Ae+1),Fe=g+(L+1)+Y*Ae;m.push(J,Te,Fe),m.push(Te,De,Fe),ee+=6}p.addGroup(M,ee,D),M+=ee,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gu extends Jn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,_=e/p,g=i/m,M=[],E=[],C=[],y=[];for(let x=0;x<v;x++){const N=x*g-d;for(let F=0;F<h;F++){const w=F*_-c;E.push(w,-N,0),C.push(0,0,1),y.push(F/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<p;N++){const F=N+h*x,w=N+h*(x+1),B=N+1+h*(x+1),O=N+1+h*x;M.push(F,w,O),M.push(w,B,O)}this.setIndex(M),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class xp extends Jn{constructor(e=.5,i=1,r=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],h=[],v=[];let _=e;const g=(i-e)/l,M=new $,E=new Lt;for(let C=0;C<=l;C++){for(let y=0;y<=r;y++){const x=c+y/r*d;M.x=_*Math.cos(x),M.y=_*Math.sin(x),m.push(M.x,M.y,M.z),h.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,v.push(E.x,E.y)}_+=g}for(let C=0;C<l;C++){const y=C*(r+1);for(let x=0;x<r;x++){const N=x+y,F=N,w=N+r+1,B=N+r+2,O=N+1;p.push(F,w,O),p.push(w,B,O)}}this.setIndex(p),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(h,3)),this.setAttribute("uv",new Hn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sl extends Jn{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+p,Math.PI);let h=0;const v=[],_=new $,g=new $,M=[],E=[],C=[],y=[];for(let x=0;x<=r;x++){const N=[],F=x/r,w=d+F*p,B=e*Math.cos(w),O=Math.sqrt(e*e-B*B);let z=0;x===0&&d===0?z=.5/i:x===r&&m===Math.PI&&(z=-.5/i);for(let T=0;T<=i;T++){const D=T/i,k=l+D*c;_.x=-O*Math.cos(k),_.y=B,_.z=O*Math.sin(k),E.push(_.x,_.y,_.z),g.copy(_).normalize(),C.push(g.x,g.y,g.z),y.push(D+z,1-F),N.push(h++)}v.push(N)}for(let x=0;x<r;x++)for(let N=0;N<i;N++){const F=v[x][N+1],w=v[x][N],B=v[x+1][N],O=v[x+1][N+1];(x!==0||d>0)&&M.push(F,w,O),(x!==r-1||m<Math.PI)&&M.push(w,B,O)}this.setIndex(M),this.setAttribute("position",new Hn(E,3)),this.setAttribute("normal",new Hn(C,3)),this.setAttribute("uv",new Hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Js(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if($_(l))l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if($_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Kn(s){const e={};for(let i=0;i<s.length;i++){const r=Js(s[i]);for(const l in r)e[l]=r[l]}return e}function $_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function dE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function _x(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const hE={clone:Js,merge:Kn};var pE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pE,this.fragmentShader=mE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=dE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Lt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new $().fromArray(l.value);break;case"v4":this.uniforms[r].value=new vn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new mn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gE extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _E extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vE extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zc=new $,Kc=new eo,Wi=new $;class vx extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zc,Kc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Kc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Zc,Kc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Kc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new $,ev=new Lt,tv=new Lt;class Ci extends vx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=fl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,i){return this.getViewBounds(e,ev,tv),i.subVectors(tv,ev)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(al*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class xx extends vx{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Bs=-90,Fs=1;class xE extends Qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Bs,Fs,e,i);l.layers=this.layers,this.add(l);const c=new Ci(Bs,Fs,e,i);c.layers=this.layers,this.add(c);const d=new Ci(Bs,Fs,e,i);d.layers=this.layers,this.add(d);const p=new Ci(Bs,Fs,e,i);p.layers=this.layers,this.add(p);const m=new Ci(Bs,Fs,e,i);m.layers=this.layers,this.add(m);const h=new Ci(Bs,Fs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class SE extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nv=new mn;class yE{constructor(e,i,r=0,l=1/0){this.ray=new mu(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Dt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return nv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nv),this}intersectObject(e,i=!0,r=[]){return $h(e,this,r,i),r.sort(iv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)$h(e[l],this,r,i);return r.sort(iv),r}}function iv(s,e){return s.distance-e.distance}function $h(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,p=c.length;d<p;d++)$h(c[d],e,i,!0)}}const Ep=class Ep{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Ep.prototype.isMatrix2=!0;let av=Ep;function rv(s,e,i,r){const l=ME(r);switch(i){case ax:return s*e;case sx:return s*e/l.components*l.byteLength;case fp:return s*e/l.components*l.byteLength;case Yr:return s*e*2/l.components*l.byteLength;case dp:return s*e*2/l.components*l.byteLength;case rx:return s*e*3/l.components*l.byteLength;case Fi:return s*e*4/l.components*l.byteLength;case hp:return s*e*4/l.components*l.byteLength;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bh:case Th:return Math.max(s,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(s,8)*Math.max(e,8)/2;case Ah:case Rh:case wh:case Dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ch:case au:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qh:case Yh:case Zh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kh:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ru:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ME(s){switch(s){case wi:case ex:return{byteLength:1,components:1};case cl:case tx:case Da:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case $i:case lp:case Ki:return{byteLength:4,components:1};case nx:case ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);function Sx(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function bE(s){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,_=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const v=m.array,_=m.updateRanges;if(s.bindBuffer(h,p),_.length===0)s.bufferSubData(h,0,v);else{_.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<_.length;M++){const E=_[g],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];s.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var EE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eT="gl_FragColor = linearToOutputTexel( gl_FragColor );",tT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ET=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,RT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,YT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$T=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:EE,alphahash_pars_fragment:TE,alphamap_fragment:AE,alphamap_pars_fragment:RE,alphatest_fragment:CE,alphatest_pars_fragment:wE,aomap_fragment:DE,aomap_pars_fragment:UE,batching_pars_vertex:LE,batching_vertex:NE,begin_vertex:OE,beginnormal_vertex:PE,bsdfs:IE,iridescence_fragment:zE,bumpmap_pars_fragment:BE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:VE,color_fragment:kE,color_pars_fragment:XE,color_pars_vertex:WE,color_vertex:qE,common:YE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:KE,displacementmap_pars_vertex:QE,displacementmap_vertex:JE,emissivemap_fragment:jE,emissivemap_pars_fragment:$E,colorspace_fragment:eT,colorspace_pars_fragment:tT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:aT,envmap_pars_vertex:rT,envmap_physical_pars_fragment:gT,envmap_vertex:sT,fog_vertex:oT,fog_pars_vertex:lT,fog_fragment:cT,fog_pars_fragment:uT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:dT,lights_lambert_fragment:hT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:_T,lights_toon_pars_fragment:vT,lights_phong_fragment:xT,lights_phong_pars_fragment:ST,lights_physical_fragment:yT,lights_physical_pars_fragment:MT,lights_fragment_begin:bT,lights_fragment_maps:ET,lights_fragment_end:TT,lightprobes_pars_fragment:AT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:wT,logdepthbuf_vertex:DT,map_fragment:UT,map_pars_fragment:LT,map_particle_fragment:NT,map_particle_pars_fragment:OT,metalnessmap_fragment:PT,metalnessmap_pars_fragment:IT,morphinstance_vertex:zT,morphcolor_vertex:BT,morphnormal_vertex:FT,morphtarget_pars_vertex:HT,morphtarget_vertex:GT,normal_fragment_begin:VT,normal_fragment_maps:kT,normal_pars_fragment:XT,normal_pars_vertex:WT,normal_vertex:qT,normalmap_pars_fragment:YT,clearcoat_normal_fragment_begin:ZT,clearcoat_normal_fragment_maps:KT,clearcoat_pars_fragment:QT,iridescence_pars_fragment:JT,opaque_fragment:jT,packing:$T,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:h1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:_1,transmission_fragment:v1,transmission_pars_fragment:x1,uv_pars_fragment:S1,uv_pars_vertex:y1,uv_vertex:M1,worldpos_vertex:b1,background_vert:E1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:w1,depth_vert:D1,depth_frag:U1,distance_vert:L1,distance_frag:N1,equirect_vert:O1,equirect_frag:P1,linedashed_vert:I1,linedashed_frag:z1,meshbasic_vert:B1,meshbasic_frag:F1,meshlambert_vert:H1,meshlambert_frag:G1,meshmatcap_vert:V1,meshmatcap_frag:k1,meshnormal_vert:X1,meshnormal_frag:W1,meshphong_vert:q1,meshphong_frag:Y1,meshphysical_vert:Z1,meshphysical_frag:K1,meshtoon_vert:Q1,meshtoon_frag:J1,points_vert:j1,points_frag:$1,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},Ve={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Yi={basic:{uniforms:Kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Kn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Kn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Kn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Kn([Ve.points,Ve.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Kn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Kn([Ve.common,Ve.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Kn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Kn([Ve.sprite,Ve.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Kn([Ve.common,Ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Kn([Ve.lights,Ve.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Yi.physical={uniforms:Kn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Qc={r:0,b:0,g:0},aA=new mn,yx=new lt;yx.set(-1,0,0,0,1,0,0,0,1);function rA(s,e,i,r,l,c){const d=new Mt(0);let p=l===!0?0:1,m,h,v=null,_=0,g=null;function M(N){let F=N.isScene===!0?N.background:null;if(F&&F.isTexture){const w=N.backgroundBlurriness>0;F=e.get(F,w)}return F}function E(N){let F=!1;const w=M(N);w===null?y(d,p):w&&w.isColor&&(y(w,1),F=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(N,F){const w=M(F);w&&(w.isCubeTexture||w.mapping===pu)?(h===void 0&&(h=new _i(new gl(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Js(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(aA.makeRotationFromEuler(F.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(yx),h.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Kt,(v!==w||_!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=w,_=w.version,g=s.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new _i(new gu(2,2),new ea({name:"BackgroundMaterial",uniforms:Js(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||_!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=w,_=w.version,g=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,F){N.getRGB(Qc,_x(s)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,F,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,F=1){d.set(N),p=F,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,y(d,p)},render:E,addToRenderList:C,dispose:x}}function sA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(V,Z,me,ne,Y){let P=!1;const G=_(V,ne,me,Z);c!==G&&(c=G,h(c.object)),P=M(V,ne,me,Y),P&&E(V,ne,me,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,w(V,Z,me,ne),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function v(V){return s.deleteVertexArray(V)}function _(V,Z,me,ne){const Y=ne.wireframe===!0;let P=r[Z.id];P===void 0&&(P={},r[Z.id]=P);const G=V.isInstancedMesh===!0?V.id:0;let ee=P[G];ee===void 0&&(ee={},P[G]=ee);let xe=ee[me.id];xe===void 0&&(xe={},ee[me.id]=xe);let Ae=xe[Y];return Ae===void 0&&(Ae=g(m()),xe[Y]=Ae),Ae}function g(V){const Z=[],me=[],ne=[];for(let Y=0;Y<i;Y++)Z[Y]=0,me[Y]=0,ne[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:me,attributeDivisors:ne,object:V,attributes:{},index:null}}function M(V,Z,me,ne){const Y=c.attributes,P=Z.attributes;let G=0;const ee=me.getAttributes();for(const xe in ee)if(ee[xe].location>=0){const L=Y[xe];let J=P[xe];if(J===void 0&&(xe==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),xe==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),L===void 0||L.attribute!==J||J&&L.data!==J.data)return!0;G++}return c.attributesNum!==G||c.index!==ne}function E(V,Z,me,ne){const Y={},P=Z.attributes;let G=0;const ee=me.getAttributes();for(const xe in ee)if(ee[xe].location>=0){let L=P[xe];L===void 0&&(xe==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),xe==="instanceColor"&&V.instanceColor&&(L=V.instanceColor));const J={};J.attribute=L,L&&L.data&&(J.data=L.data),Y[xe]=J,G++}c.attributes=Y,c.attributesNum=G,c.index=ne}function C(){const V=c.newAttributes;for(let Z=0,me=V.length;Z<me;Z++)V[Z]=0}function y(V){x(V,0)}function x(V,Z){const me=c.newAttributes,ne=c.enabledAttributes,Y=c.attributeDivisors;me[V]=1,ne[V]===0&&(s.enableVertexAttribArray(V),ne[V]=1),Y[V]!==Z&&(s.vertexAttribDivisor(V,Z),Y[V]=Z)}function N(){const V=c.newAttributes,Z=c.enabledAttributes;for(let me=0,ne=Z.length;me<ne;me++)Z[me]!==V[me]&&(s.disableVertexAttribArray(me),Z[me]=0)}function F(V,Z,me,ne,Y,P,G){G===!0?s.vertexAttribIPointer(V,Z,me,Y,P):s.vertexAttribPointer(V,Z,me,ne,Y,P)}function w(V,Z,me,ne){C();const Y=ne.attributes,P=me.getAttributes(),G=Z.defaultAttributeValues;for(const ee in P){const xe=P[ee];if(xe.location>=0){let Ae=Y[ee];if(Ae===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(Ae=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(Ae=V.instanceColor)),Ae!==void 0){const L=Ae.normalized,J=Ae.itemSize,Te=e.get(Ae);if(Te===void 0)continue;const De=Te.buffer,Fe=Te.type,se=Te.bytesPerElement,Me=Fe===s.INT||Fe===s.UNSIGNED_INT||Ae.gpuType===lp;if(Ae.isInterleavedBufferAttribute){const Ee=Ae.data,Xe=Ee.stride,it=Ae.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<xe.locationSize;Qe++)x(xe.location+Qe,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<xe.locationSize;Qe++)y(xe.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Qe=0;Qe<xe.locationSize;Qe++)F(xe.location+Qe,J/xe.locationSize,Fe,L,Xe*se,(it+J/xe.locationSize*Qe)*se,Me)}else{if(Ae.isInstancedBufferAttribute){for(let Ee=0;Ee<xe.locationSize;Ee++)x(xe.location+Ee,Ae.meshPerAttribute);V.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ee=0;Ee<xe.locationSize;Ee++)y(xe.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ee=0;Ee<xe.locationSize;Ee++)F(xe.location+Ee,J/xe.locationSize,Fe,L,J*se,J/xe.locationSize*Ee*se,Me)}}else if(G!==void 0){const L=G[ee];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(xe.location,L);break;case 3:s.vertexAttrib3fv(xe.location,L);break;case 4:s.vertexAttrib4fv(xe.location,L);break;default:s.vertexAttrib1fv(xe.location,L)}}}}N()}function B(){D();for(const V in r){const Z=r[V];for(const me in Z){const ne=Z[me];for(const Y in ne){const P=ne[Y];for(const G in P)v(P[G].object),delete P[G];delete ne[Y]}}delete r[V]}}function O(V){if(r[V.id]===void 0)return;const Z=r[V.id];for(const me in Z){const ne=Z[me];for(const Y in ne){const P=ne[Y];for(const G in P)v(P[G].object),delete P[G];delete ne[Y]}}delete r[V.id]}function z(V){for(const Z in r){const me=r[Z];for(const ne in me){const Y=me[ne];if(Y[V.id]===void 0)continue;const P=Y[V.id];for(const G in P)v(P[G].object),delete P[G];delete Y[V.id]}}}function T(V){for(const Z in r){const me=r[Z],ne=V.isInstancedMesh===!0?V.id:0,Y=me[ne];if(Y!==void 0){for(const P in Y){const G=Y[P];for(const ee in G)v(G[ee].object),delete G[ee];delete Y[P]}delete me[ne],Object.keys(me).length===0&&delete r[Z]}}}function D(){k(),d=!0,c!==l&&(c=l,h(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:k,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:N}}function oA(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,v){v!==0&&(s.drawArraysInstanced(r,m,h,v),i.update(h,r,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,v);let g=0;for(let M=0;M<v;M++)g+=h[M];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function lA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Fi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==wi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ki&&!T)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(rt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:w,maxSamples:B,samples:O}}function cA(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Hr,p=new lt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||l;return l=g,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,M){const E=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||c&&!y)c?v(null):h();else{const N=c?0:r,F=N*4;let w=x.clippingState||null;m.value=w,w=v(E,g,F,M);for(let B=0;B!==F;++B)w[B]=i[B];x.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,E){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,E!==!0||y===null){const x=M+C*4,N=g.matrixWorldInverse;p.getNormalMatrix(N),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,w=M;F!==C;++F,w+=4)d.copy(_[F]).applyMatrix4(N,p),d.normal.toArray(y,w),y[w+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const pr=4,sv=[.125,.215,.35,.446,.526,.582],Vr=20,uA=256,$o=new xx,ov=new Mt;let nh=null,ih=0,ah=0,rh=!1;const fA=new $;class lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=fA}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===qr||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Da,format:Fi,colorSpace:su,depthBuffer:!1},l=cv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dA(c)),this._blurMaterial=pA(c,e,i),this._ggxMaterial=hA(c,e,i)}return l}_compileMaterial(e){const i=new _i(new Jn,e);this._renderer.compile(i,$o)}_sceneToCubeUV(e,i,r,l,c){const m=new Ci(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(ov),_.toneMapping=Ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new gl,new Xs({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,x=!0):(y.color.copy(ov),x=!0);for(let F=0;F<6;F++){const w=F%3;w===0?(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[F],c.y,c.z)):w===1?(m.up.set(0,0,h[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[F],c.z)):(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[F]));const B=this._cubeSize;Hs(l,w*B,F>2?B:0,B,B),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=M,_.autoClear=g,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===qr||e.mapping===Ks;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Hs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,$o)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),g=0+h*1.25,M=_*g,{_lodMax:E}=this,C=this._sizeLods[r],y=3*C*(r>E-pr?r-E+pr:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Hs(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(p,$o),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Hs(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(p,$o)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),C=c/E,y=isFinite(c)?1+Math.floor(v*C):Vr;y>Vr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vr}`);const x=[];let N=0;for(let z=0;z<Vr;++z){const T=z/C,D=Math.exp(-T*T/2);x.push(D),z===0?N+=D:z<y&&(N+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/N;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:F}=this;g.dTheta.value=E,g.mipInt.value=F-r;const w=this._sizeLods[l],B=3*w*(l>F-pr?l-F+pr:0),O=4*(this._cubeSize-w);Hs(i,B,O,3*w,2*w),m.setRenderTarget(i),m.render(_,$o)}}function dA(s){const e=[],i=[],r=[];let l=s;const c=s-pr+1+sv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-pr?m=sv[d-s+pr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,_=1+h,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,C=3,y=2,x=1,N=new Float32Array(C*E*M),F=new Float32Array(y*E*M),w=new Float32Array(x*E*M);for(let O=0;O<M;O++){const z=O%3*2/3-1,T=O>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];N.set(D,C*E*O),F.set(g,y*E*O);const k=[O,O,O,O,O,O];w.set(k,x*E*O)}const B=new Jn;B.setAttribute("position",new ai(N,C)),B.setAttribute("uv",new ai(F,y)),B.setAttribute("faceIndex",new ai(w,x)),r.push(new _i(B,null)),l>pr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function cv(s,e,i){const r=new ji(s,e,i);return r.texture.mapping=pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function hA(s,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function pA(s,e,i){const r=new Float32Array(Vr),l=new $(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function uv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function fv(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mx extends ji{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new mx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new gl(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:Ca});c.uniforms.tEquirect.value=i;const d=new _i(l,c),p=i.minFilter;return i.minFilter===kr&&(i.minFilter=Wn),new xE(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function mA(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Dd||M===Ud)if(e.has(g)){const E=e.get(g).texture;return p(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new Mx(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,E=M===Dd||M===Ud,C=M===qr||M===Ks;if(E||C){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new lv(s)),y=E?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const N=g.image;return E&&N&&N.height>0||C&&N&&m(N)?(r===null&&(r=new lv(s)),y=E?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function p(g,M){return M===Dd?g.mapping=qr:M===Ud&&(g.mapping=Ks),g}function m(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function h(g){const M=g.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function gA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&qs("WebGLRenderer: "+r+" extension not supported."),l}}}function _A(s,e,i,r){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(_){const g=[],M=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const N=M.array;C=M.version;for(let F=0,w=N.length;F<w;F+=3){const B=N[F+0],O=N[F+1],z=N[F+2];g.push(B,O,O,z,z,B)}}else{const N=E.array;C=E.version;for(let F=0,w=N.length/3-1;F<w;F+=3){const B=F+0,O=F+1,z=F+2;g.push(B,O,O,z,z,B)}}const y=new(E.count>=65535?fx:ux)(g,1);y.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,y)}function v(_){const g=c.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:v}}function vA(s,e,i){let r;function l(_){r=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function m(_,g){s.drawElements(r,g,c,_*d),i.update(g,r,1)}function h(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,_*d,M),i.update(g,r,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,_,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function xA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Dt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function SA(s,e,i){const r=new WeakMap,l=new vn;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let k=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",k)};var M=k;g!==void 0&&g.texture.dispose();const E=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let w=0;E===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let B=p.attributes.position.count*w,O=1;B>e.maxTextureSize&&(O=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*O*4*_),T=new lx(z,B,O,_);T.type=Ki,T.needsUpdate=!0;const D=w*4;for(let V=0;V<_;V++){const Z=x[V],me=N[V],ne=F[V],Y=B*O*4*V;for(let P=0;P<Z.count;P++){const G=P*D;E===!0&&(l.fromBufferAttribute(Z,P),z[Y+G+0]=l.x,z[Y+G+1]=l.y,z[Y+G+2]=l.z,z[Y+G+3]=0),C===!0&&(l.fromBufferAttribute(me,P),z[Y+G+4]=l.x,z[Y+G+5]=l.y,z[Y+G+6]=l.z,z[Y+G+7]=0),y===!0&&(l.fromBufferAttribute(ne,P),z[Y+G+8]=l.x,z[Y+G+9]=l.y,z[Y+G+10]=l.z,z[Y+G+11]=ne.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new Lt(B,O)},r.set(p,g),p.addEventListener("dispose",k)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const C=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function yA(s,e,i,r,l){let c=new WeakMap;function d(h){const v=l.render.frame,_=h.geometry,g=e.get(h,_);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const MA={[qv]:"LINEAR_TONE_MAPPING",[Yv]:"REINHARD_TONE_MAPPING",[Zv]:"CINEON_TONE_MAPPING",[Kv]:"ACES_FILMIC_TONE_MAPPING",[Jv]:"AGX_TONE_MAPPING",[jv]:"NEUTRAL_TONE_MAPPING",[Qv]:"CUSTOM_TONE_MAPPING"};function bA(s,e,i,r,l,c){const d=new ji(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Qs(e,i):void 0}),p=new ji(e,i,{type:Da,depthBuffer:!1,stencilBuffer:!1}),m=new Jn;m.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const h=new gE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new _i(m,h),_=new xx(-1,1,1,-1,0,1);let g=null,M=null,E=!1,C,y=null,x=[],N=!1;this.setSize=function(F,w){d.setSize(F,w),p.setSize(F,w);for(let B=0;B<x.length;B++){const O=x[B];O.setSize&&O.setSize(F,w)}},this.setEffects=function(F){x=F,N=x.length>0&&x[0].isRenderPass===!0;const w=d.width,B=d.height;for(let O=0;O<x.length;O++){const z=x[O];z.setSize&&z.setSize(w,B)}},this.begin=function(F,w){if(E||F.toneMapping===Ji&&x.length===0)return!1;if(y=w,w!==null){const B=w.width,O=w.height;(d.width!==B||d.height!==O)&&this.setSize(B,O)}return N===!1&&F.setRenderTarget(d),C=F.toneMapping,F.toneMapping=Ji,!0},this.hasRenderPass=function(){return N},this.end=function(F,w){F.toneMapping=C,E=!0;let B=d,O=p;for(let z=0;z<x.length;z++){const T=x[z];if(T.enabled!==!1&&(T.render(F,O,B,w),T.needsSwap!==!1)){const D=B;B=O,O=D}}if(g!==F.outputColorSpace||M!==F.toneMapping){g=F.outputColorSpace,M=F.toneMapping,h.defines={},Ct.getTransfer(g)===Kt&&(h.defines.SRGB_TRANSFER="");const z=MA[M];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=B.texture,F.setRenderTarget(y),F.render(v,_),y=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const bx=new qn,ep=new Qs(1,1),Ex=new lx,Tx=new kb,Ax=new mx,dv=[],hv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function no(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=dv[l];if(c===void 0&&(c=new Float32Array(l),dv[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function Un(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Ln(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function vu(s,e){let i=hv[e];i===void 0&&(i=new Int32Array(e),hv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function EA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function TA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;s.uniform2fv(this.addr,e),Ln(i,e)}}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Un(i,e))return;s.uniform3fv(this.addr,e),Ln(i,e)}}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;s.uniform4fv(this.addr,e),Ln(i,e)}}function CA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Un(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,r))return;gv.set(r),s.uniformMatrix2fv(this.addr,!1,gv),Ln(i,r)}}function wA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Un(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,r))return;mv.set(r),s.uniformMatrix3fv(this.addr,!1,mv),Ln(i,r)}}function DA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Un(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,r))return;pv.set(r),s.uniformMatrix4fv(this.addr,!1,pv),Ln(i,r)}}function UA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function LA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;s.uniform2iv(this.addr,e),Ln(i,e)}}function NA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;s.uniform3iv(this.addr,e),Ln(i,e)}}function OA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;s.uniform4iv(this.addr,e),Ln(i,e)}}function PA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function IA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;s.uniform2uiv(this.addr,e),Ln(i,e)}}function zA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;s.uniform3uiv(this.addr,e),Ln(i,e)}}function BA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;s.uniform4uiv(this.addr,e),Ln(i,e)}}function FA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?mp:pp,c=ep):c=bx,i.setTexture2D(e||c,l)}function HA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Tx,l)}function GA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ax,l)}function VA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Ex,l)}function kA(s){switch(s){case 5126:return EA;case 35664:return TA;case 35665:return AA;case 35666:return RA;case 35674:return CA;case 35675:return wA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return LA;case 35668:case 35672:return NA;case 35669:case 35673:return OA;case 5125:return PA;case 36294:return IA;case 36295:return zA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return VA}}function XA(s,e){s.uniform1fv(this.addr,e)}function WA(s,e){const i=no(e,this.size,2);s.uniform2fv(this.addr,i)}function qA(s,e){const i=no(e,this.size,3);s.uniform3fv(this.addr,i)}function YA(s,e){const i=no(e,this.size,4);s.uniform4fv(this.addr,i)}function ZA(s,e){const i=no(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function KA(s,e){const i=no(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function QA(s,e){const i=no(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function JA(s,e){s.uniform1iv(this.addr,e)}function jA(s,e){s.uniform2iv(this.addr,e)}function $A(s,e){s.uniform3iv(this.addr,e)}function eR(s,e){s.uniform4iv(this.addr,e)}function tR(s,e){s.uniform1uiv(this.addr,e)}function nR(s,e){s.uniform2uiv(this.addr,e)}function iR(s,e){s.uniform3uiv(this.addr,e)}function aR(s,e){s.uniform4uiv(this.addr,e)}function rR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=ep:d=bx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function sR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Tx,c[d])}function oR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Ax,c[d])}function lR(s,e,i){const r=this.cache,l=e.length,c=vu(i,l);Un(r,c)||(s.uniform1iv(this.addr,c),Ln(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Ex,c[d])}function cR(s){switch(s){case 5126:return XA;case 35664:return WA;case 35665:return qA;case 35666:return YA;case 35674:return ZA;case 35675:return KA;case 35676:return QA;case 5124:case 35670:return JA;case 35667:case 35671:return jA;case 35668:case 35672:return $A;case 35669:case 35673:return eR;case 5125:return tR;case 36294:return nR;case 36295:return iR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return lR}}class uR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=kA(i.type)}}class fR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cR(i.type)}}class dR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function _v(s,e){s.seq.push(e),s.map[e.id]=e}function hR(s,e,i){const r=s.name,l=r.length;for(sh.lastIndex=0;;){const c=sh.exec(r),d=sh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){_v(i,h===void 0?new uR(p,s,e):new fR(p,s,e));break}else{let _=i.map[p];_===void 0&&(_=new dR(p),_v(i,_)),i=_}}}class iu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);hR(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function vv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const pR=37297;let mR=0;function gR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const xv=new lt;function _R(s){Ct._getMatrix(xv,Ct.workingColorSpace,s);const e=`mat3( ${xv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(s)){case ou:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+gR(s.getShaderSource(e),p)}else return c}function vR(s,e){const i=_R(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const xR={[qv]:"Linear",[Yv]:"Reinhard",[Zv]:"Cineon",[Kv]:"ACESFilmic",[Jv]:"AgX",[jv]:"Neutral",[Qv]:"Custom"};function SR(s,e){const i=xR[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new $;function yR(){Ct.getLuminanceCoefficients(Jc);const s=Jc.x.toFixed(4),e=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function bR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function ER(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function il(s){return s!==""}function yv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TR=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(s){return s.replace(TR,RR)}const AR=new Map;function RR(s,e){let i=ht[e];if(i===void 0){const r=AR.get(e);if(r!==void 0)i=ht[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tp(i)}const CR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bv(s){return s.replace(CR,wR)}function wR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ev(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DR={[jc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function UR(s){return DR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LR={[qr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function NR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":LR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const OR={[Ks]:"ENVMAP_MODE_REFRACTION"};function PR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":OR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IR={[Wv]:"ENVMAP_BLENDING_MULTIPLY",[ob]:"ENVMAP_BLENDING_MIX",[lb]:"ENVMAP_BLENDING_ADD"};function zR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":IR[s.combine]||"ENVMAP_BLENDING_NONE"}function BR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function FR(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=UR(i),h=NR(i),v=PR(i),_=zR(i),g=BR(i),M=MR(i),E=bR(c),C=l.createProgram();let y,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(il).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(il).join(`
`),x.length>0&&(x+=`
`)):(y=[Ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),x=[Ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ji?"#define TONE_MAPPING":"",i.toneMapping!==Ji?ht.tonemapping_pars_fragment:"",i.toneMapping!==Ji?SR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,vR("linearToOutputTexel",i.outputColorSpace),yR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),d=tp(d),d=yv(d,i),d=Mv(d,i),p=tp(p),p=yv(p,i),p=Mv(p,i),d=bv(d),p=bv(p),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=N+y+d,w=N+x+p,B=vv(l,l.VERTEX_SHADER,F),O=vv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,B),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(V){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",me=l.getShaderInfoLog(B)||"",ne=l.getShaderInfoLog(O)||"",Y=Z.trim(),P=me.trim(),G=ne.trim();let ee=!0,xe=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,B,O);else{const Ae=Sv(l,B,"vertex"),L=Sv(l,O,"fragment");Dt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Y+`
`+Ae+`
`+L)}else Y!==""?rt("WebGLProgram: Program Info Log:",Y):(P===""||G==="")&&(xe=!1);xe&&(V.diagnostics={runnable:ee,programLog:Y,vertexShader:{log:P,prefix:y},fragmentShader:{log:G,prefix:x}})}l.deleteShader(B),l.deleteShader(O),T=new iu(l,C),D=ER(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(C,pR)),k},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=O,this}let HR=0;class GR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new VR(e),i.set(e,r)),r}}class VR{constructor(e){this.id=HR++,this.code=e,this.usedTimes=0}}function kR(s){return s===Yr||s===au||s===ru}function XR(s,e,i,r,l,c){const d=new vp,p=new GR,m=new Set,h=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,D,k,V,Z,me){const ne=V.fog,Y=Z.geometry,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||P,G),xe=ee&&ee.mapping===pu?ee.image.height:null,Ae=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const L=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=L!==void 0?L.length:0;let Te=0;Y.morphAttributes.position!==void 0&&(Te=1),Y.morphAttributes.normal!==void 0&&(Te=2),Y.morphAttributes.color!==void 0&&(Te=3);let De,Fe,se,Me;if(Ae){const Le=Yi[Ae];De=Le.vertexShader,Fe=Le.fragmentShader}else{De=T.vertexShader,Fe=T.fragmentShader;const Le=p.getVertexShaderStage(T),st=p.getFragmentShaderStage(T);p.update(T,Le,st),se=Le.id,Me=st.id}const Ee=s.getRenderTarget(),Xe=s.state.buffers.depth.getReversed(),it=Z.isInstancedMesh===!0,Qe=Z.isBatchedMesh===!0,Ft=!!T.map,ct=!!T.matcap,mt=!!ee,_t=!!T.aoMap,pt=!!T.lightMap,Ht=!!T.bumpMap&&T.wireframe===!1,cn=!!T.normalMap,$t=!!T.displacementMap,Gt=!!T.emissiveMap,Vt=!!T.metalnessMap,un=!!T.roughnessMap,W=T.anisotropy>0,zt=T.clearcoat>0,Ut=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,K=T.transmission>0,oe=W&&!!T.anisotropyMap,he=zt&&!!T.clearcoatMap,Ce=zt&&!!T.clearcoatNormalMap,Oe=zt&&!!T.clearcoatRoughnessMap,ge=U&&!!T.iridescenceMap,pe=U&&!!T.iridescenceThicknessMap,Ue=b&&!!T.sheenColorMap,ke=b&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,Pe=!!T.specularColorMap,je=!!T.specularIntensityMap,$e=K&&!!T.transmissionMap,fe=K&&!!T.thicknessMap,I=!!T.gradientMap,j=!!T.alphaMap,le=T.alphaTest>0,be=!!T.alphaHash,we=!!T.extensions;let _e=Ji;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(_e=s.toneMapping);const He={shaderID:Ae,shaderType:T.type,shaderName:T.name,vertexShader:De,fragmentShader:Fe,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&Z._colorsTexture!==null,instancing:it,instancingColor:it&&Z.instanceColor!==null,instancingMorph:it&&Z.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ft,matcap:ct,envMap:mt,envMapMode:mt&&ee.mapping,envMapCubeUVHeight:xe,aoMap:_t,lightMap:pt,bumpMap:Ht,normalMap:cn,displacementMap:$t,emissiveMap:Gt,normalMapObjectSpace:cn&&T.normalMapType===fb,normalMapTangentSpace:cn&&T.normalMapType===T_,packedNormalMap:cn&&T.normalMapType===T_&&kR(T.normalMap.format),metalnessMap:Vt,roughnessMap:un,anisotropy:W,anisotropyMap:oe,clearcoat:zt,clearcoatMap:he,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Oe,dispersion:Ut,iridescence:U,iridescenceMap:ge,iridescenceThicknessMap:pe,sheen:b,sheenColorMap:Ue,sheenRoughnessMap:ke,specularMap:Ie,specularColorMap:Pe,specularIntensityMap:je,transmission:K,transmissionMap:$e,thicknessMap:fe,gradientMap:I,opaque:T.transparent===!1&&T.blending===Ws&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:le,alphaHash:be,combine:T.combine,mapUv:Ft&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:pt&&E(T.lightMap.channel),bumpMapUv:Ht&&E(T.bumpMap.channel),normalMapUv:cn&&E(T.normalMap.channel),displacementMapUv:$t&&E(T.displacementMap.channel),emissiveMapUv:Gt&&E(T.emissiveMap.channel),metalnessMapUv:Vt&&E(T.metalnessMap.channel),roughnessMapUv:un&&E(T.roughnessMap.channel),anisotropyMapUv:oe&&E(T.anisotropyMap.channel),clearcoatMapUv:he&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(T.sheenRoughnessMap.channel),specularMapUv:Ie&&E(T.specularMap.channel),specularColorMapUv:Pe&&E(T.specularColorMap.channel),specularIntensityMapUv:je&&E(T.specularIntensityMap.channel),transmissionMapUv:$e&&E(T.transmissionMap.channel),thicknessMapUv:fe&&E(T.thicknessMap.channel),alphaMapUv:j&&E(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(cn||W),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(Ft||j),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&cn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Xe,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Te,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ft&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Kt,decodeVideoTextureEmissive:Gt&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===Kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zi,flipSided:T.side===ri,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function y(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)D.push(k),D.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(x(D,T),N(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function x(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function N(T,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function F(T){const D=M[T.type];let k;if(D){const V=Yi[D];k=hE.clone(V.uniforms)}else k=T.uniforms;return k}function w(T,D){let k=v.get(D);return k!==void 0?++k.usedTimes:(k=new FR(s,D,T,l),h.push(k),v.set(D,k)),k}function B(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function O(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:F,acquireProgram:w,releaseProgram:B,releaseShaderCache:O,programs:h,dispose:z}}function WR(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function qR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Av(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,E,C,y,x){let N=s[e];return N===void 0?(N={id:g.id,object:g,geometry:M,material:E,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:x},s[e]=N):(N.id=g.id,N.object=g,N.geometry=M,N.material=E,N.materialVariant=d(g),N.groupOrder=C,N.renderOrder=g.renderOrder,N.z=y,N.group=x),e++,N}function m(g,M,E,C,y,x){const N=p(g,M,E,C,y,x);E.transmission>0?r.push(N):E.transparent===!0?l.push(N):i.push(N)}function h(g,M,E,C,y,x){const N=p(g,M,E,C,y,x);E.transmission>0?r.unshift(N):E.transparent===!0?l.unshift(N):i.unshift(N)}function v(g,M,E){i.length>1&&i.sort(g||qR),r.length>1&&r.sort(M||Tv),l.length>1&&l.sort(M||Tv),E&&(i.reverse(),r.reverse(),l.reverse())}function _(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:_,sort:v}}function YR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Av,s.set(r,[d])):l>=c.length?(d=new Av,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function ZR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Mt};break;case"SpotLight":i={position:new $,direction:new $,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":i={color:new Mt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=i,i}}}function KR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let QR=0;function JR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jR(s){const e=new ZR,i=KR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new $);const l=new $,c=new mn,d=new mn;function p(h){let v=0,_=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,C=0,y=0,x=0,N=0,F=0,w=0,B=0,O=0,z=0;h.sort(JR);for(let D=0,k=h.length;D<k;D++){const V=h[D],Z=V.color,me=V.intensity,ne=V.distance;let Y=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Yr?Y=V.shadow.map.texture:Y=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=Z.r*me,_+=Z.g*me,g+=Z.b*me;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],me);z++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.directionalShadow[M]=ee,r.directionalShadowMap[M]=Y,r.directionalShadowMatrix[M]=V.shadow.matrix,N++}r.directional[M]=P,M++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(Z).multiplyScalar(me),P.distance=ne,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[C]=P;const G=V.shadow;if(V.map&&(r.spotLightMap[B]=V.map,B++,G.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[C]=G.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.spotShadow[C]=ee,r.spotShadowMap[C]=Y,w++}C++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(Z).multiplyScalar(me),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=P,y++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const G=V.shadow,ee=i.get(V);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,r.pointShadow[E]=ee,r.pointShadowMap[E]=Y,r.pointShadowMatrix[E]=V.shadow.matrix,F++}r.point[E]=P,E++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(me),P.groundColor.copy(V.groundColor).multiplyScalar(me),r.hemi[x]=P,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==N||T.numPointShadows!==F||T.numSpotShadows!==w||T.numSpotMaps!==B||T.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=w+B-O,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=N,T.numPointShadows=F,T.numSpotShadows=w,T.numSpotMaps=B,T.numLightProbes=z,r.version=QR++)}function m(h,v){let _=0,g=0,M=0,E=0,C=0;const y=v.matrixWorldInverse;for(let x=0,N=h.length;x<N;x++){const F=h[x];if(F.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),_++}else if(F.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(F.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(y),d.identity(),c.copy(F.matrixWorld),c.premultiply(y),d.extractRotation(c),w.halfWidth.set(F.width*.5,0,0),w.halfHeight.set(0,F.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),E++}else if(F.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(y),g++}else if(F.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(F.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:r}}function Rv(s){const e=new jR(s),i=[],r=[],l=[];function c(g){_.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:v,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function $R(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new Rv(s),e.set(l,[p])):c>=d.length?(p=new Rv(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const e2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,n2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],i2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Cv=new mn,el=new $,oh=new $;function a2(s,e,i){let r=new dx;const l=new Lt,c=new Lt,d=new vn,p=new _E,m=new vE,h={},v=i.maxTextureSize,_={[mr]:ri,[ri]:mr,[Zi]:Zi},g=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:e2,fragmentShader:t2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new _i(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let x=this.type;this.render=function(O,z,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===VM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const D=s.getRenderTarget(),k=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Ca),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const me=x!==this.type;me&&z.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(Y=>Y.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,Y=O.length;ne<Y;ne++){const P=O[ne],G=P.shadow;if(G===void 0){rt("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();l.multiply(ee),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y));const xe=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=xe,G.map===null||me===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===nl){if(P.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ji(l.x,l.y,{format:Yr,type:Da,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new Qs(l.x,l.y,Ki),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=Ua,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn}else P.isPointLight?(G.map=new Mx(l.x),G.map.depthTexture=new fE(l.x,$i)):(G.map=new ji(l.x,l.y),G.map.depthTexture=new Qs(l.x,l.y,$i)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=Ua,this.type===jc?(G.map.depthTexture.compareFunction=xe?mp:pp,G.map.depthTexture.minFilter=Wn,G.map.depthTexture.magFilter=Wn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Fn,G.map.depthTexture.magFilter=Fn);G.camera.updateProjectionMatrix()}const Ae=G.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Ae;L++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,L),s.clear();else{L===0&&(s.setRenderTarget(G.map),s.clear());const J=G.getViewport(L);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Z.viewport(d)}if(P.isPointLight){const J=G.camera,Te=G.matrix,De=P.distance||J.far;De!==J.far&&(J.far=De,J.updateProjectionMatrix()),el.setFromMatrixPosition(P.matrixWorld),J.position.copy(el),oh.copy(J.position),oh.add(n2[L]),J.up.copy(i2[L]),J.lookAt(oh),J.updateMatrixWorld(),Te.makeTranslation(-el.x,-el.y,-el.z),Cv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cv,J.coordinateSystem,J.reversedDepth)}else G.updateMatrices(P);r=G.getFrustum(),w(z,T,G.camera,P,this.type)}G.isPointLightShadow!==!0&&this.type===nl&&N(G,T),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(D,k,V)};function N(O,z){const T=e.update(C);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ji(l.x,l.y,{format:Yr,type:Da})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(z,null,T,g,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(z,null,T,M,C,null)}function F(O,z,T,D){let k=null;const V=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)k=V;else if(k=T.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=k.uuid,me=z.uuid;let ne=h[Z];ne===void 0&&(ne={},h[Z]=ne);let Y=ne[me];Y===void 0&&(Y=k.clone(),ne[me]=Y,z.addEventListener("dispose",B)),k=Y}if(k.visible=z.visible,k.wireframe=z.wireframe,D===nl?k.side=z.shadowSide!==null?z.shadowSide:z.side:k.side=z.shadowSide!==null?z.shadowSide:_[z.side],k.alphaMap=z.alphaMap,k.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,k.map=z.map,k.clipShadows=z.clipShadows,k.clippingPlanes=z.clippingPlanes,k.clipIntersection=z.clipIntersection,k.displacementMap=z.displacementMap,k.displacementScale=z.displacementScale,k.displacementBias=z.displacementBias,k.wireframeLinewidth=z.wireframeLinewidth,k.linewidth=z.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Z=s.properties.get(k);Z.light=T}return k}function w(O,z,T,D,k){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&k===nl)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const me=e.update(O),ne=O.material;if(Array.isArray(ne)){const Y=me.groups;for(let P=0,G=Y.length;P<G;P++){const ee=Y[P],xe=ne[ee.materialIndex];if(xe&&xe.visible){const Ae=F(O,xe,D,k);O.onBeforeShadow(s,O,z,T,me,Ae,ee),s.renderBufferDirect(T,null,me,Ae,O,ee),O.onAfterShadow(s,O,z,T,me,Ae,ee)}}}else if(ne.visible){const Y=F(O,ne,D,k);O.onBeforeShadow(s,O,z,T,me,Y,null),s.renderBufferDirect(T,null,me,Y,O,null),O.onAfterShadow(s,O,z,T,me,Y,null)}}const Z=O.children;for(let me=0,ne=Z.length;me<ne;me++)w(Z[me],z,T,D,k)}function B(O){O.target.removeEventListener("dispose",B);for(const T in h){const D=h[T],k=O.target.uuid;k in D&&(D[k].dispose(),delete D[k])}}}function r2(s,e){function i(){let I=!1;const j=new vn;let le=null;const be=new vn(0,0,0,0);return{setMask:function(we){le!==we&&!I&&(s.colorMask(we,we,we,we),le=we)},setLocked:function(we){I=we},setClear:function(we,_e,He,Le,st){st===!0&&(we*=Le,_e*=Le,He*=Le),j.set(we,_e,He,Le),be.equals(j)===!1&&(s.clearColor(we,_e,He,Le),be.copy(j))},reset:function(){I=!1,le=null,be.set(-1,0,0,0)}}}function r(){let I=!1,j=!1,le=null,be=null,we=null;return{setReversed:function(_e){if(j!==_e){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),j=_e;const Le=we;we=null,this.setClear(Le)}},getReversed:function(){return j},setTest:function(_e){_e?Ee(s.DEPTH_TEST):Xe(s.DEPTH_TEST)},setMask:function(_e){le!==_e&&!I&&(s.depthMask(_e),le=_e)},setFunc:function(_e){if(j&&(_e=yb[_e]),be!==_e){switch(_e){case hh:s.depthFunc(s.NEVER);break;case ph:s.depthFunc(s.ALWAYS);break;case mh:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case gh:s.depthFunc(s.EQUAL);break;case _h:s.depthFunc(s.GEQUAL);break;case vh:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=_e}},setLocked:function(_e){I=_e},setClear:function(_e){we!==_e&&(we=_e,j&&(_e=1-_e),s.clearDepth(_e))},reset:function(){I=!1,le=null,be=null,we=null,j=!1}}}function l(){let I=!1,j=null,le=null,be=null,we=null,_e=null,He=null,Le=null,st=null;return{setTest:function(gt){I||(gt?Ee(s.STENCIL_TEST):Xe(s.STENCIL_TEST))},setMask:function(gt){j!==gt&&!I&&(s.stencilMask(gt),j=gt)},setFunc:function(gt,en,tn){(le!==gt||be!==en||we!==tn)&&(s.stencilFunc(gt,en,tn),le=gt,be=en,we=tn)},setOp:function(gt,en,tn){(_e!==gt||He!==en||Le!==tn)&&(s.stencilOp(gt,en,tn),_e=gt,He=en,Le=tn)},setLocked:function(gt){I=gt},setClear:function(gt){st!==gt&&(s.clearStencil(gt),st=gt)},reset:function(){I=!1,j=null,le=null,be=null,we=null,_e=null,He=null,Le=null,st=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},_={},g={},M=new WeakMap,E=[],C=null,y=!1,x=null,N=null,F=null,w=null,B=null,O=null,z=null,T=new Mt(0,0,0),D=0,k=!1,V=null,Z=null,me=null,ne=null,Y=null;const P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const xe=s.getParameter(s.VERSION);xe.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(xe)[1]),G=ee>=1):xe.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),G=ee>=2);let Ae=null,L={};const J=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),De=new vn().fromArray(J),Fe=new vn().fromArray(Te);function se(I,j,le,be){const we=new Uint8Array(4),_e=s.createTexture();s.bindTexture(I,_e),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<le;He++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(j+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return _e}const Me={};Me[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ee(s.DEPTH_TEST),d.setFunc(Zs),Ht(!1),cn(M_),Ee(s.CULL_FACE),_t(Ca);function Ee(I){v[I]!==!0&&(s.enable(I),v[I]=!0)}function Xe(I){v[I]!==!1&&(s.disable(I),v[I]=!1)}function it(I,j){return g[I]!==j?(s.bindFramebuffer(I,j),g[I]=j,I===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=j),I===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Qe(I,j){let le=E,be=!1;if(I){le=M.get(j),le===void 0&&(le=[],M.set(j,le));const we=I.textures;if(le.length!==we.length||le[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,He=we.length;_e<He;_e++)le[_e]=s.COLOR_ATTACHMENT0+_e;le.length=we.length,be=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,be=!0);be&&s.drawBuffers(le)}function Ft(I){return C!==I?(s.useProgram(I),C=I,!0):!1}const ct={[Gr]:s.FUNC_ADD,[XM]:s.FUNC_SUBTRACT,[WM]:s.FUNC_REVERSE_SUBTRACT};ct[qM]=s.MIN,ct[YM]=s.MAX;const mt={[ZM]:s.ZERO,[KM]:s.ONE,[QM]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[nb]:s.SRC_ALPHA_SATURATE,[eb]:s.DST_COLOR,[jM]:s.DST_ALPHA,[JM]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[tb]:s.ONE_MINUS_DST_COLOR,[$M]:s.ONE_MINUS_DST_ALPHA,[ib]:s.CONSTANT_COLOR,[ab]:s.ONE_MINUS_CONSTANT_COLOR,[rb]:s.CONSTANT_ALPHA,[sb]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(I,j,le,be,we,_e,He,Le,st,gt){if(I===Ca){y===!0&&(Xe(s.BLEND),y=!1);return}if(y===!1&&(Ee(s.BLEND),y=!0),I!==kM){if(I!==x||gt!==k){if((N!==Gr||B!==Gr)&&(s.blendEquation(s.FUNC_ADD),N=Gr,B=Gr),gt)switch(I){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.ONE,s.ONE);break;case b_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case E_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",I);break}else switch(I){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case b_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",I);break}F=null,w=null,O=null,z=null,T.set(0,0,0),D=0,x=I,k=gt}return}we=we||j,_e=_e||le,He=He||be,(j!==N||we!==B)&&(s.blendEquationSeparate(ct[j],ct[we]),N=j,B=we),(le!==F||be!==w||_e!==O||He!==z)&&(s.blendFuncSeparate(mt[le],mt[be],mt[_e],mt[He]),F=le,w=be,O=_e,z=He),(Le.equals(T)===!1||st!==D)&&(s.blendColor(Le.r,Le.g,Le.b,st),T.copy(Le),D=st),x=I,k=!1}function pt(I,j){I.side===Zi?Xe(s.CULL_FACE):Ee(s.CULL_FACE);let le=I.side===ri;j&&(le=!le),Ht(le),I.blending===Ws&&I.transparent===!1?_t(Ca):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),d.setFunc(I.depthFunc),d.setTest(I.depthTest),d.setMask(I.depthWrite),c.setMask(I.colorWrite);const be=I.stencilWrite;p.setTest(be),be&&(p.setMask(I.stencilWriteMask),p.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),p.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(I){V!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),V=I)}function cn(I){I!==HM?(Ee(s.CULL_FACE),I!==Z&&(I===M_?s.cullFace(s.BACK):I===GM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xe(s.CULL_FACE),Z=I}function $t(I){I!==me&&(G&&s.lineWidth(I),me=I)}function Gt(I,j,le){I?(Ee(s.POLYGON_OFFSET_FILL),(ne!==j||Y!==le)&&(ne=j,Y=le,d.getReversed()&&(j=-j),s.polygonOffset(j,le))):Xe(s.POLYGON_OFFSET_FILL)}function Vt(I){I?Ee(s.SCISSOR_TEST):Xe(s.SCISSOR_TEST)}function un(I){I===void 0&&(I=s.TEXTURE0+P-1),Ae!==I&&(s.activeTexture(I),Ae=I)}function W(I,j,le){le===void 0&&(Ae===null?le=s.TEXTURE0+P-1:le=Ae);let be=L[le];be===void 0&&(be={type:void 0,texture:void 0},L[le]=be),(be.type!==I||be.texture!==j)&&(Ae!==le&&(s.activeTexture(le),Ae=le),s.bindTexture(I,j||Me[I]),be.type=I,be.texture=j)}function zt(){const I=L[Ae];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ut(){try{s.compressedTexImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function b(){try{s.texSubImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function K(){try{s.texSubImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function Ce(){try{s.texStorage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function Oe(){try{s.texStorage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function ge(){try{s.texImage2D(...arguments)}catch(I){Dt("WebGLState:",I)}}function pe(){try{s.texImage3D(...arguments)}catch(I){Dt("WebGLState:",I)}}function Ue(I){return _[I]!==void 0?_[I]:s.getParameter(I)}function ke(I,j){_[I]!==j&&(s.pixelStorei(I,j),_[I]=j)}function Ie(I){De.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function Pe(I){Fe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function je(I,j){let le=h.get(j);le===void 0&&(le=new WeakMap,h.set(j,le));let be=le.get(I);be===void 0&&(be=s.getUniformBlockIndex(j,I.name),le.set(I,be))}function $e(I,j){const be=h.get(j).get(I);m.get(j)!==be&&(s.uniformBlockBinding(j,be,I.__bindingPointIndex),m.set(j,be))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},Ae=null,L={},g={},M=new WeakMap,E=[],C=null,y=!1,x=null,N=null,F=null,w=null,B=null,O=null,z=null,T=new Mt(0,0,0),D=0,k=!1,V=null,Z=null,me=null,ne=null,Y=null,De.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ee,disable:Xe,bindFramebuffer:it,drawBuffers:Qe,useProgram:Ft,setBlending:_t,setMaterial:pt,setFlipSided:Ht,setCullFace:cn,setLineWidth:$t,setPolygonOffset:Gt,setScissorTest:Vt,activeTexture:un,bindTexture:W,unbindTexture:zt,compressedTexImage2D:Ut,compressedTexImage3D:U,texImage2D:ge,texImage3D:pe,pixelStorei:ke,getParameter:Ue,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Ce,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Ie,viewport:Pe,reset:fe}}function s2(s,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,b){return E?new OffscreenCanvas(U,b):cu("canvas")}function y(U,b,K){let oe=1;const he=Ut(U);if((he.width>K||he.height>K)&&(oe=K/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ce=Math.floor(oe*he.width),Oe=Math.floor(oe*he.height);g===void 0&&(g=C(Ce,Oe));const ge=b?C(Ce,Oe):g;return ge.width=Ce,ge.height=Oe,ge.getContext("2d").drawImage(U,0,0,Ce,Oe),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ce+"x"+Oe+")."),ge}else return"data"in U&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function x(U){return U.generateMipmaps}function N(U){s.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,b,K,oe,he,Ce=!1){if(U!==null){if(s[U]!==void 0)return s[U];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Oe;oe&&(Oe=e.get("EXT_texture_norm16"),Oe||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=b;if(b===s.RED&&(K===s.FLOAT&&(ge=s.R32F),K===s.HALF_FLOAT&&(ge=s.R16F),K===s.UNSIGNED_BYTE&&(ge=s.R8),K===s.UNSIGNED_SHORT&&Oe&&(ge=Oe.R16_EXT),K===s.SHORT&&Oe&&(ge=Oe.R16_SNORM_EXT)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.R8UI),K===s.UNSIGNED_SHORT&&(ge=s.R16UI),K===s.UNSIGNED_INT&&(ge=s.R32UI),K===s.BYTE&&(ge=s.R8I),K===s.SHORT&&(ge=s.R16I),K===s.INT&&(ge=s.R32I)),b===s.RG&&(K===s.FLOAT&&(ge=s.RG32F),K===s.HALF_FLOAT&&(ge=s.RG16F),K===s.UNSIGNED_BYTE&&(ge=s.RG8),K===s.UNSIGNED_SHORT&&Oe&&(ge=Oe.RG16_EXT),K===s.SHORT&&Oe&&(ge=Oe.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RG8UI),K===s.UNSIGNED_SHORT&&(ge=s.RG16UI),K===s.UNSIGNED_INT&&(ge=s.RG32UI),K===s.BYTE&&(ge=s.RG8I),K===s.SHORT&&(ge=s.RG16I),K===s.INT&&(ge=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),K===s.UNSIGNED_INT&&(ge=s.RGB32UI),K===s.BYTE&&(ge=s.RGB8I),K===s.SHORT&&(ge=s.RGB16I),K===s.INT&&(ge=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),K===s.UNSIGNED_INT&&(ge=s.RGBA32UI),K===s.BYTE&&(ge=s.RGBA8I),K===s.SHORT&&(ge=s.RGBA16I),K===s.INT&&(ge=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGB16_EXT),K===s.SHORT&&Oe&&(ge=Oe.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),b===s.RGBA){const pe=Ce?ou:Ct.getTransfer(he);K===s.FLOAT&&(ge=s.RGBA32F),K===s.HALF_FLOAT&&(ge=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ge=pe===Kt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGBA16_EXT),K===s.SHORT&&Oe&&(ge=Oe.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function B(U,b){let K;return U?b===null||b===$i||b===ul?K=s.DEPTH24_STENCIL8:b===Ki?K=s.DEPTH32F_STENCIL8:b===cl&&(K=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===ul?K=s.DEPTH_COMPONENT24:b===Ki?K=s.DEPTH_COMPONENT32F:b===cl&&(K=s.DEPTH_COMPONENT16),K}function O(U,b){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function z(U){const b=U.target;b.removeEventListener("dispose",z),D(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&_.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),V(b)}function D(U){const b=r.get(U);if(b.__webglInit===void 0)return;const K=U.source,oe=M.get(K);if(oe){const he=oe[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(U),Object.keys(oe).length===0&&M.delete(K)}r.remove(U)}function k(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const K=U.source,oe=M.get(K);delete oe[b.__cacheKey],d.memory.textures--}function V(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let he=0;he<b.__webglFramebuffer[oe].length;he++)s.deleteFramebuffer(b.__webglFramebuffer[oe][he]);else s.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)s.deleteFramebuffer(b.__webglFramebuffer[oe]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=U.textures;for(let oe=0,he=K.length;oe<he;oe++){const Ce=r.get(K[oe]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),d.memory.textures--),r.remove(K[oe])}r.remove(U)}let Z=0;function me(){Z=0}function ne(){return Z}function Y(U){Z=U}function P(){const U=Z;return U>=l.maxTextures&&rt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),Z+=1,U}function G(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ee(U,b){const K=r.get(U);if(U.isVideoTexture&&W(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const oe=U.image;if(oe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(K,U,b);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function xe(U,b){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Xe(K,U,b);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function Ae(U,b){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Xe(K,U,b);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function L(U,b){const K=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){it(K,U,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const J={[Sh]:s.REPEAT,[Ra]:s.CLAMP_TO_EDGE,[yh]:s.MIRRORED_REPEAT},Te={[Fn]:s.NEAREST,[cb]:s.NEAREST_MIPMAP_NEAREST,[Ac]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[Ld]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},De={[db]:s.NEVER,[_b]:s.ALWAYS,[hb]:s.LESS,[pp]:s.LEQUAL,[pb]:s.EQUAL,[mp]:s.GEQUAL,[mb]:s.GREATER,[gb]:s.NOTEQUAL};function Fe(U,b){if(b.type===Ki&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===Ld||b.magFilter===Ac||b.magFilter===kr||b.minFilter===Wn||b.minFilter===Ld||b.minFilter===Ac||b.minFilter===kr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,J[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,J[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,J[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Te[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Te[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,De[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fn||b.minFilter!==Ac&&b.minFilter!==kr||b.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function se(U,b){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",z));const oe=b.source;let he=M.get(oe);he===void 0&&(he={},M.set(oe,he));const Ce=G(b);if(Ce!==U.__cacheKey){he[Ce]===void 0&&(he[Ce]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),he[Ce].usedTimes++;const Oe=he[U.__cacheKey];Oe!==void 0&&(he[U.__cacheKey].usedTimes--,Oe.usedTimes===0&&k(b)),U.__cacheKey=Ce,U.__webglTexture=he[Ce].texture}return K}function Me(U,b,K){return Math.floor(Math.floor(U/K)/b)}function Ee(U,b,K,oe){const Ce=U.updateRanges;if(Ce.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,oe,b.data);else{Ce.sort((ke,Ie)=>ke.start-Ie.start);let Oe=0;for(let ke=1;ke<Ce.length;ke++){const Ie=Ce[Oe],Pe=Ce[ke],je=Ie.start+Ie.count,$e=Me(Pe.start,b.width,4),fe=Me(Ie.start,b.width,4);Pe.start<=je+1&&$e===fe&&Me(Pe.start+Pe.count-1,b.width,4)===$e?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++Oe,Ce[Oe]=Pe)}Ce.length=Oe+1;const ge=i.getParameter(s.UNPACK_ROW_LENGTH),pe=i.getParameter(s.UNPACK_SKIP_PIXELS),Ue=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ke=0,Ie=Ce.length;ke<Ie;ke++){const Pe=Ce[ke],je=Math.floor(Pe.start/4),$e=Math.ceil(Pe.count/4),fe=je%b.width,I=Math.floor(je/b.width),j=$e,le=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(s.UNPACK_SKIP_ROWS,I),i.texSubImage2D(s.TEXTURE_2D,0,fe,I,j,le,K,oe,b.data)}U.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ge),i.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function Xe(U,b,K){let oe=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=s.TEXTURE_3D);const he=se(U,b),Ce=b.source;i.bindTexture(oe,U.__webglTexture,s.TEXTURE0+K);const Oe=r.get(Ce);if(Ce.version!==Oe.__version||he===!0){if(i.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const le=Ct.getPrimaries(Ct.workingColorSpace),be=b.colorSpace===dr?null:Ct.getPrimaries(b.colorSpace),we=b.colorSpace===dr||le===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let pe=y(b.image,!1,l.maxTextureSize);pe=zt(b,pe);const Ue=c.convert(b.format,b.colorSpace),ke=c.convert(b.type);let Ie=w(b.internalFormat,Ue,ke,b.normalized,b.colorSpace,b.isVideoTexture);Fe(oe,b);let Pe;const je=b.mipmaps,$e=b.isVideoTexture!==!0,fe=Oe.__version===void 0||he===!0,I=Ce.dataReady,j=O(b,pe);if(b.isDepthTexture)Ie=B(b.format===Xr,b.type),fe&&($e?i.texStorage2D(s.TEXTURE_2D,1,Ie,pe.width,pe.height):i.texImage2D(s.TEXTURE_2D,0,Ie,pe.width,pe.height,0,Ue,ke,null));else if(b.isDataTexture)if(je.length>0){$e&&fe&&i.texStorage2D(s.TEXTURE_2D,j,Ie,je[0].width,je[0].height);for(let le=0,be=je.length;le<be;le++)Pe=je[le],$e?I&&i.texSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,Ue,ke,Pe.data):i.texImage2D(s.TEXTURE_2D,le,Ie,Pe.width,Pe.height,0,Ue,ke,Pe.data);b.generateMipmaps=!1}else $e?(fe&&i.texStorage2D(s.TEXTURE_2D,j,Ie,pe.width,pe.height),I&&Ee(b,pe,Ue,ke)):i.texImage2D(s.TEXTURE_2D,0,Ie,pe.width,pe.height,0,Ue,ke,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&fe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,j,Ie,je[0].width,je[0].height,pe.depth);for(let le=0,be=je.length;le<be;le++)if(Pe=je[le],b.format!==Fi)if(Ue!==null)if($e){if(I)if(b.layerUpdates.size>0){const we=rv(Pe.width,Pe.height,b.format,b.type);for(const _e of b.layerUpdates){const He=Pe.data.subarray(_e*we/Pe.data.BYTES_PER_ELEMENT,(_e+1)*we/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,_e,Pe.width,Pe.height,1,Ue,He)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Pe.width,Pe.height,pe.depth,Ue,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Ie,Pe.width,Pe.height,pe.depth,0,Pe.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?I&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Pe.width,Pe.height,pe.depth,Ue,ke,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,le,Ie,Pe.width,Pe.height,pe.depth,0,Ue,ke,Pe.data)}else{$e&&fe&&i.texStorage2D(s.TEXTURE_2D,j,Ie,je[0].width,je[0].height);for(let le=0,be=je.length;le<be;le++)Pe=je[le],b.format!==Fi?Ue!==null?$e?I&&i.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,Ue,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,le,Ie,Pe.width,Pe.height,0,Pe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?I&&i.texSubImage2D(s.TEXTURE_2D,le,0,0,Pe.width,Pe.height,Ue,ke,Pe.data):i.texImage2D(s.TEXTURE_2D,le,Ie,Pe.width,Pe.height,0,Ue,ke,Pe.data)}else if(b.isDataArrayTexture)if($e){if(fe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,j,Ie,pe.width,pe.height,pe.depth),I)if(b.layerUpdates.size>0){const le=rv(pe.width,pe.height,b.format,b.type);for(const be of b.layerUpdates){const we=pe.data.subarray(be*le/pe.data.BYTES_PER_ELEMENT,(be+1)*le/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,pe.width,pe.height,1,Ue,ke,we)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(b.isData3DTexture)$e?(fe&&i.texStorage3D(s.TEXTURE_3D,j,Ie,pe.width,pe.height,pe.depth),I&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,ke,pe.data)):i.texImage3D(s.TEXTURE_3D,0,Ie,pe.width,pe.height,pe.depth,0,Ue,ke,pe.data);else if(b.isFramebufferTexture){if(fe)if($e)i.texStorage2D(s.TEXTURE_2D,j,Ie,pe.width,pe.height);else{let le=pe.width,be=pe.height;for(let we=0;we<j;we++)i.texImage2D(s.TEXTURE_2D,we,Ie,le,be,0,Ue,ke,null),le>>=1,be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const le=s.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),pe.parentNode!==le){le.appendChild(pe),_.add(b),le.onpaint=be=>{const we=be.changedElements;for(const _e of _)we.includes(_e.image)&&(_e.needsUpdate=!0)},le.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pe);else{const we=s.RGBA,_e=s.RGBA,He=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,we,_e,He,pe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if($e&&fe){const le=Ut(je[0]);i.texStorage2D(s.TEXTURE_2D,j,Ie,le.width,le.height)}for(let le=0,be=je.length;le<be;le++)Pe=je[le],$e?I&&i.texSubImage2D(s.TEXTURE_2D,le,0,0,Ue,ke,Pe):i.texImage2D(s.TEXTURE_2D,le,Ie,Ue,ke,Pe);b.generateMipmaps=!1}else if($e){if(fe){const le=Ut(pe);i.texStorage2D(s.TEXTURE_2D,j,Ie,le.width,le.height)}I&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,ke,pe)}else i.texImage2D(s.TEXTURE_2D,0,Ie,Ue,ke,pe);x(b)&&N(oe),Oe.__version=Ce.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function it(U,b,K){if(b.image.length!==6)return;const oe=se(U,b),he=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+K);const Ce=r.get(he);if(he.version!==Ce.__version||oe===!0){i.activeTexture(s.TEXTURE0+K);const Oe=Ct.getPrimaries(Ct.workingColorSpace),ge=b.colorSpace===dr?null:Ct.getPrimaries(b.colorSpace),pe=b.colorSpace===dr||Oe===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,ke=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let _e=0;_e<6;_e++)!Ue&&!ke?Ie[_e]=y(b.image[_e],!0,l.maxCubemapSize):Ie[_e]=ke?b.image[_e].image:b.image[_e],Ie[_e]=zt(b,Ie[_e]);const Pe=Ie[0],je=c.convert(b.format,b.colorSpace),$e=c.convert(b.type),fe=w(b.internalFormat,je,$e,b.normalized,b.colorSpace),I=b.isVideoTexture!==!0,j=Ce.__version===void 0||oe===!0,le=he.dataReady;let be=O(b,Pe);Fe(s.TEXTURE_CUBE_MAP,b);let we;if(Ue){I&&j&&i.texStorage2D(s.TEXTURE_CUBE_MAP,be,fe,Pe.width,Pe.height);for(let _e=0;_e<6;_e++){we=Ie[_e].mipmaps;for(let He=0;He<we.length;He++){const Le=we[He];b.format!==Fi?je!==null?I?le&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,Le.width,Le.height,je,Le.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,fe,Le.width,Le.height,0,Le.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,Le.width,Le.height,je,$e,Le.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,fe,Le.width,Le.height,0,je,$e,Le.data)}}}else{if(we=b.mipmaps,I&&j){we.length>0&&be++;const _e=Ut(Ie[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,be,fe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ke){I?le&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ie[_e].width,Ie[_e].height,je,$e,Ie[_e].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,fe,Ie[_e].width,Ie[_e].height,0,je,$e,Ie[_e].data);for(let He=0;He<we.length;He++){const st=we[He].image[_e].image;I?le&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,st.width,st.height,je,$e,st.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,fe,st.width,st.height,0,je,$e,st.data)}}else{I?le&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je,$e,Ie[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,fe,je,$e,Ie[_e]);for(let He=0;He<we.length;He++){const Le=we[He];I?le&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,je,$e,Le.image[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,fe,je,$e,Le.image[_e])}}}x(b)&&N(s.TEXTURE_CUBE_MAP),Ce.__version=he.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Qe(U,b,K,oe,he,Ce){const Oe=c.convert(K.format,K.colorSpace),ge=c.convert(K.type),pe=w(K.internalFormat,Oe,ge,K.normalized,K.colorSpace),Ue=r.get(b),ke=r.get(K);if(ke.__renderTarget=b,!Ue.__hasExternalTextures){const Ie=Math.max(1,b.width>>Ce),Pe=Math.max(1,b.height>>Ce);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?i.texImage3D(he,Ce,pe,Ie,Pe,b.depth,0,Oe,ge,null):i.texImage2D(he,Ce,pe,Ie,Pe,0,Oe,ge,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),un(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,he,ke.__webglTexture,0,Vt(b)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,he,ke.__webglTexture,Ce),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(U,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const oe=b.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Ce=B(b.stencilBuffer,he),Oe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;un(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(b),Ce,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(b),Ce,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,U)}else{const oe=b.textures;for(let he=0;he<oe.length;he++){const Ce=oe[he],Oe=c.convert(Ce.format,Ce.colorSpace),ge=c.convert(Ce.type),pe=w(Ce.internalFormat,Oe,ge,Ce.normalized,Ce.colorSpace);un(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(b),pe,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(b),pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(U,b,K){const oe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ue=c.convert(b.depthTexture.format),ke=c.convert(b.depthTexture.type);let Ie;b.depthTexture.format===Ua?Ie=s.DEPTH_COMPONENT24:b.depthTexture.format===Xr&&(Ie=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,b.width,b.height,0,Ue,ke,null)}}else ee(b.depthTexture,0);const Ce=he.__webglTexture,Oe=Vt(b),ge=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,pe=b.depthTexture.format===Xr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ua)un(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Ce,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Ce,0);else if(b.depthTexture.format===Xr)un(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,Ce,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(U){const b=r.get(U),K=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=oe}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let oe=0;oe<6;oe++)ct(b.__webglFramebuffer[oe],U,oe);else{const oe=U.texture.mipmaps;oe&&oe.length>0?ct(b.__webglFramebuffer[0],U,0):ct(b.__webglFramebuffer,U,0)}else if(K){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=s.createRenderbuffer(),Ft(b.__webglDepthbuffer[oe],U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ce)}}else{const oe=U.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ft(b.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ce)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(U,b,K){const oe=r.get(U);b!==void 0&&Qe(oe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&mt(U)}function pt(U){const b=U.texture,K=r.get(U),oe=r.get(b);U.addEventListener("dispose",T);const he=U.textures,Ce=U.isWebGLCubeRenderTarget===!0,Oe=he.length>1;if(Oe||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=b.version,d.memory.textures++),Ce){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let pe=0;pe<b.mipmaps.length;pe++)K.__webglFramebuffer[ge][pe]=s.createFramebuffer()}else K.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)K.__webglFramebuffer[ge]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let ge=0,pe=he.length;ge<pe;ge++){const Ue=r.get(he[ge]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&un(U)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const pe=he[ge];K.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const Ue=c.convert(pe.format,pe.colorSpace),ke=c.convert(pe.type),Ie=w(pe.internalFormat,Ue,ke,pe.normalized,pe.colorSpace,U.isXRRenderTarget===!0),Pe=Vt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ie,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(K.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Qe(K.__webglFramebuffer[ge][pe],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,pe);else Qe(K.__webglFramebuffer[ge],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);x(b)&&N(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let ge=0,pe=he.length;ge<pe;ge++){const Ue=he[ge],ke=r.get(Ue);let Ie=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ie,ke.__webglTexture),Fe(Ie,Ue),Qe(K.__webglFramebuffer,U,Ue,s.COLOR_ATTACHMENT0+ge,Ie,0),x(Ue)&&N(Ie)}i.unbindTexture()}else{let ge=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ge,oe.__webglTexture),Fe(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)Qe(K.__webglFramebuffer[pe],U,b,s.COLOR_ATTACHMENT0,ge,pe);else Qe(K.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,ge,0);x(b)&&N(ge),i.unbindTexture()}U.depthBuffer&&mt(U)}function Ht(U){const b=U.textures;for(let K=0,oe=b.length;K<oe;K++){const he=b[K];if(x(he)){const Ce=F(U),Oe=r.get(he).__webglTexture;i.bindTexture(Ce,Oe),N(Ce),i.unbindTexture()}}}const cn=[],$t=[];function Gt(U){if(U.samples>0){if(un(U)===!1){const b=U.textures,K=U.width,oe=U.height;let he=s.COLOR_BUFFER_BIT;const Ce=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(U),ge=b.length>1;if(ge)for(let Ue=0;Ue<b.length;Ue++)i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const pe=U.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ue=0;Ue<b.length;Ue++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ue]);const ke=r.get(b[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,K,oe,0,0,K,oe,he,s.NEAREST),m===!0&&(cn.length=0,$t.length=0,cn.push(s.COLOR_ATTACHMENT0+Ue),U.depthBuffer&&U.resolveDepthBuffer===!1&&(cn.push(Ce),$t.push(Ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,cn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ue=0;Ue<b.length;Ue++){i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ue]);const ke=r.get(b[Ue]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ke,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Vt(U){return Math.min(l.maxSamples,U.samples)}function un(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(U){const b=d.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function zt(U,b){const K=U.colorSpace,oe=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==su&&K!==dr&&(Ct.getTransfer(K)===Kt?(oe!==Fi||he!==wi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",K)),b}function Ut(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=P,this.resetTextureUnits=me,this.getTextureUnits=ne,this.setTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=xe,this.setTexture3D=Ae,this.setTextureCube=L,this.rebindTextures=_t,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=un,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function o2(s,e){function i(r,l=dr){let c;const d=Ct.getTransfer(l);if(r===wi)return s.UNSIGNED_BYTE;if(r===cp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===up)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ix)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ex)return s.BYTE;if(r===tx)return s.SHORT;if(r===cl)return s.UNSIGNED_SHORT;if(r===lp)return s.INT;if(r===$i)return s.UNSIGNED_INT;if(r===Ki)return s.FLOAT;if(r===Da)return s.HALF_FLOAT;if(r===ax)return s.ALPHA;if(r===rx)return s.RGB;if(r===Fi)return s.RGBA;if(r===Ua)return s.DEPTH_COMPONENT;if(r===Xr)return s.DEPTH_STENCIL;if(r===sx)return s.RED;if(r===fp)return s.RED_INTEGER;if(r===Yr)return s.RG;if(r===dp)return s.RG_INTEGER;if(r===hp)return s.RGBA_INTEGER;if(r===$c||r===eu||r===tu||r===nu)if(d===Kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mh||r===bh||r===Eh||r===Th)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===au||r===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ah||r===Rh)return d===Kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ch)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===wh)return c.COMPRESSED_R11_EAC;if(r===Dh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===au)return c.COMPRESSED_RG11_EAC;if(r===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph||r===Ih||r===zh||r===Bh||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Lh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ph)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return d===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qh||r===Yh||r===Zh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===qh)return d===Kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kh||r===Qh||r===ru||r===Jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Kh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ru)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ul?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const l2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new gx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ea({vertexShader:l2,fragmentShader:c2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new gu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f2 extends Kr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,_=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",y=new u2,x={},N=i.getContextAttributes();let F=null,w=null;const B=[],O=[],z=new Lt;let T=null;const D=new Ci;D.viewport=new vn;const k=new Ci;k.viewport=new vn;const V=[D,k],Z=new SE;let me=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Me=B[se];return Me===void 0&&(Me=new Bd,B[se]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(se){let Me=B[se];return Me===void 0&&(Me=new Bd,B[se]=Me),Me.getGripSpace()},this.getHand=function(se){let Me=B[se];return Me===void 0&&(Me=new Bd,B[se]=Me),Me.getHandSpace()};function Y(se){const Me=O.indexOf(se.inputSource);if(Me===-1)return;const Ee=B[Me];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,h||d),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function P(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",G);for(let se=0;se<B.length;se++){const Me=O[se];Me!==null&&(O[se]=null,B[se].disconnect(Me))}me=null,ne=null,y.reset();for(const se in x)delete x[se];e.setRenderTarget(F),M=null,g=null,_=null,l=null,w=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",P),l.addEventListener("inputsourceschange",G),N.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Xe=null,it=null;N.depth&&(it=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=N.stencil?Xr:Ua,Xe=N.stencil?ul:$i);const Qe={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new ji(g.textureWidth,g.textureHeight,{format:Fi,type:wi,depthTexture:new Qs(g.textureWidth,g.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new ji(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Fe.setContext(l),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(se){for(let Me=0;Me<se.removed.length;Me++){const Ee=se.removed[Me],Xe=O.indexOf(Ee);Xe>=0&&(O[Xe]=null,B[Xe].disconnect(Ee))}for(let Me=0;Me<se.added.length;Me++){const Ee=se.added[Me];let Xe=O.indexOf(Ee);if(Xe===-1){for(let Qe=0;Qe<B.length;Qe++)if(Qe>=O.length){O.push(Ee),Xe=Qe;break}else if(O[Qe]===null){O[Qe]=Ee,Xe=Qe;break}if(Xe===-1)break}const it=B[Xe];it&&it.connect(Ee)}}const ee=new $,xe=new $;function Ae(se,Me,Ee){ee.setFromMatrixPosition(Me.matrixWorld),xe.setFromMatrixPosition(Ee.matrixWorld);const Xe=ee.distanceTo(xe),it=Me.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,Ft=it[14]/(it[10]-1),ct=it[14]/(it[10]+1),mt=(it[9]+1)/it[5],_t=(it[9]-1)/it[5],pt=(it[8]-1)/it[0],Ht=(Qe[8]+1)/Qe[0],cn=Ft*pt,$t=Ft*Ht,Gt=Xe/(-pt+Ht),Vt=Gt*-pt;if(Me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Vt),se.translateZ(Gt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),it[10]===-1)se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const un=Ft+Gt,W=ct+Gt,zt=cn-Vt,Ut=$t+(Xe-Vt),U=mt*ct/W*un,b=_t*ct/W*un;se.projectionMatrix.makePerspective(zt,Ut,U,b,un,W),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function L(se,Me){Me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Me=se.near,Ee=se.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),Z.near=k.near=D.near=Me,Z.far=k.far=D.far=Ee,(me!==Z.near||ne!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),me=Z.near,ne=Z.far),Z.layers.mask=se.layers.mask|6,D.layers.mask=Z.layers.mask&-5,k.layers.mask=Z.layers.mask&-3;const Xe=se.parent,it=Z.cameras;L(Z,Xe);for(let Qe=0;Qe<it.length;Qe++)L(it[Qe],Xe);it.length===2?Ae(Z,D,k):Z.projectionMatrix.copy(D.projectionMatrix),J(se,Z,Xe)};function J(se,Me,Ee){Ee===null?se.matrix.copy(Me.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(Me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=fl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(se){return x[se]};let Te=null;function De(se,Me){if(v=Me.getViewerPose(h||d),E=Me,v!==null){const Ee=v.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Xe=!1;Ee.length!==Z.cameras.length&&(Z.cameras.length=0,Xe=!0);for(let ct=0;ct<Ee.length;ct++){const mt=Ee[ct];let _t=null;if(M!==null)_t=M.getViewport(mt);else{const Ht=_.getViewSubImage(g,mt);_t=Ht.viewport,ct===0&&(e.setRenderTargetTextures(w,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(w))}let pt=V[ct];pt===void 0&&(pt=new Ci,pt.layers.enable(ct),pt.viewport=new vn,V[ct]=pt),pt.matrix.fromArray(mt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(mt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(_t.x,_t.y,_t.width,_t.height),ct===0&&(Z.matrix.copy(pt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Xe===!0&&Z.cameras.push(pt)}const it=l.enabledFeatures;if(it&&it.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ct=_.getDepthInformation(Ee[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,l.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ct=0;ct<Ee.length;ct++){const mt=Ee[ct].camera;if(mt){let _t=x[mt];_t||(_t=new gx,x[mt]=_t);const pt=_.getCameraImage(mt);_t.sourceTexture=pt}}}}for(let Ee=0;Ee<B.length;Ee++){const Xe=O[Ee],it=B[Ee];Xe!==null&&it!==void 0&&it.update(Xe,Me,h||d)}Te&&Te(se,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),E=null}const Fe=new Sx;Fe.setAnimationLoop(De),this.setAnimationLoop=function(se){Te=se},this.dispose=function(){}}}const d2=new mn,Rx=new lt;Rx.set(-1,0,0,0,1,0,0,0,1);function h2(s,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,_x(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,N,F,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&M(y,x,w)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,N,F):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ri&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ri&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const N=e.get(x),F=N.envMap,w=N.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(d2.makeRotationFromEuler(w)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Rx),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,N,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*N,y.scale.value=F*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,N){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ri&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const N=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function p2(s,e,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,B){const O=B.program;r.uniformBlockBinding(w,O)}function h(w,B){let O=l[w.id];O===void 0&&(y(w),O=v(w),l[w.id]=O,w.addEventListener("dispose",N));const z=B.program;r.updateUBOMapping(w,z);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function v(w){const B=_();w.__bindingPointIndex=B;const O=s.createBuffer(),z=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,z,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,B,O),O}function _(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const B=l[w.id],O=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,B);for(let T=0,D=O.length;T<D;T++){const k=O[T];if(Array.isArray(k))for(let V=0,Z=k.length;V<Z;V++)M(k[V],T,V,z);else M(k,T,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,B,O,z){if(C(w,B,O,z)===!0){const T=w.__offset,D=w.value;if(Array.isArray(D)){let k=0;for(let V=0;V<D.length;V++){const Z=D[V],me=x(Z);E(Z,w.__data,k),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(k+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(D,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function E(w,B,O){typeof w=="number"||typeof w=="boolean"?B[0]=w:w.isMatrix3?(B[0]=w.elements[0],B[1]=w.elements[1],B[2]=w.elements[2],B[3]=0,B[4]=w.elements[3],B[5]=w.elements[4],B[6]=w.elements[5],B[7]=0,B[8]=w.elements[6],B[9]=w.elements[7],B[10]=w.elements[8],B[11]=0):ArrayBuffer.isView(w)?B.set(new w.constructor(w.buffer,w.byteOffset,B.length)):w.toArray(B,O)}function C(w,B,O,z){const T=w.value,D=B+"_"+O;if(z[D]===void 0)return typeof T=="number"||typeof T=="boolean"?z[D]=T:ArrayBuffer.isView(T)?z[D]=T.slice():z[D]=T.clone(),!0;{const k=z[D];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return z[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function y(w){const B=w.uniforms;let O=0;const z=16;for(let D=0,k=B.length;D<k;D++){const V=Array.isArray(B[D])?B[D]:[B[D]];for(let Z=0,me=V.length;Z<me;Z++){const ne=V[Z],Y=Array.isArray(ne.value)?ne.value:[ne.value];for(let P=0,G=Y.length;P<G;P++){const ee=Y[P],xe=x(ee),Ae=O%z,L=Ae%xe.boundary,J=Ae+L;O+=L,J!==0&&z-J<xe.storage&&(O+=z-J),ne.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=O,O+=xe.storage}}}const T=O%z;return T>0&&(O+=z-T),w.__size=O,w.__cache={},this}function x(w){const B={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(B.boundary=4,B.storage=4):w.isVector2?(B.boundary=8,B.storage=8):w.isVector3||w.isColor?(B.boundary=16,B.storage=12):w.isVector4?(B.boundary=16,B.storage=16):w.isMatrix3?(B.boundary=48,B.storage=48):w.isMatrix4?(B.boundary=64,B.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(B.boundary=16,B.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),B}function N(w){const B=w.target;B.removeEventListener("dispose",N);const O=d.indexOf(B.__bindingPointIndex);d.splice(O,1),s.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function F(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:h,dispose:F}}const m2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function g2(){return qi===null&&(qi=new iE(m2,16,16,Yr,Da),qi.name="DFG_LUT",qi.minFilter=Wn,qi.magFilter=Wn,qi.wrapS=Ra,qi.wrapT=Ra,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class _2{constructor(e={}){const{canvas:i=xb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=wi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const C=M,y=new Set([hp,dp,fp]),x=new Set([wi,$i,cl,ul,cp,up]),N=new Uint32Array(4),F=new Int32Array(4),w=new $;let B=null,O=null;const z=[],T=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let V=!1,Z=null,me=null,ne=null,Y=null;this._outputColorSpace=Ri;let P=0,G=0,ee=null,xe=-1,Ae=null;const L=new vn,J=new vn;let Te=null;const De=new Mt(0);let Fe=0,se=i.width,Me=i.height,Ee=1,Xe=null,it=null;const Qe=new vn(0,0,se,Me),Ft=new vn(0,0,se,Me);let ct=!1;const mt=new dx;let _t=!1,pt=!1;const Ht=new mn,cn=new $,$t=new vn,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function un(){return ee===null?Ee:1}let W=r;function zt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",st,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",en,!1),W===null){const q="webgl2";if(W=zt(q,A),W===null)throw zt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Dt("WebGLRenderer: "+A.message),A}let Ut,U,b,K,oe,he,Ce,Oe,ge,pe,Ue,ke,Ie,Pe,je,$e,fe,I,j,le,be,we,_e;function He(){Ut=new gA(W),Ut.init(),be=new o2(W,Ut),U=new lA(W,Ut,e,be),b=new r2(W,Ut),U.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),me=W.createFramebuffer(),ne=W.createFramebuffer(),Y=W.createFramebuffer(),K=new xA(W),oe=new WR,he=new s2(W,Ut,b,oe,U,be,K),Ce=new mA(k),Oe=new bE(W),we=new sA(W,Oe),ge=new _A(W,Oe,K,we),pe=new yA(W,ge,Oe,we,K),I=new SA(W,U,he),je=new cA(oe),Ue=new XR(k,Ce,Ut,U,we,je),ke=new h2(k,oe),Ie=new YR,Pe=new $R(Ut),fe=new rA(k,Ce,b,pe,E,m),$e=new a2(k,pe,U),_e=new p2(W,K,U,b),j=new oA(W,Ut,K),le=new vA(W,Ut,K),K.programs=Ue.programs,k.capabilities=U,k.extensions=Ut,k.properties=oe,k.renderLists=Ie,k.shadowMap=$e,k.state=b,k.info=K}He(),C!==wi&&(D=new bA(C,i.width,i.height,p,l,c));const Le=new f2(k,W);this.xr=Le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(se,Me,!1))},this.getSize=function(A){return A.set(se,Me)},this.setSize=function(A,q,ce=!0){if(Le.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,Me=q,i.width=Math.floor(A*Ee),i.height=Math.floor(q*Ee),ce===!0&&(i.style.width=A+"px",i.style.height=q+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(se*Ee,Me*Ee).floor()},this.setDrawingBufferSize=function(A,q,ce){se=A,Me=q,Ee=ce,i.width=Math.floor(A*ce),i.height=Math.floor(q*ce),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===wi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,q,ce,ae){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,q,ce,ae),b.viewport(L.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Ft)},this.setScissor=function(A,q,ce,ae){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,q,ce,ae),b.scissor(J.copy(Ft).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){b.setScissorTest(ct=A)},this.setOpaqueSort=function(A){Xe=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ce=!0){let ae=0;if(A){let re=!1;if(ee!==null){const Ge=ee.texture.format;re=y.has(Ge)}if(re){const Ge=ee.texture.type,qe=x.has(Ge),Be=fe.getClearColor(),Ze=fe.getClearAlpha(),Ye=Be.r,tt=Be.g,ut=Be.b;qe?(N[0]=Ye,N[1]=tt,N[2]=ut,N[3]=Ze,W.clearBufferuiv(W.COLOR,0,N)):(F[0]=Ye,F[1]=tt,F[2]=ut,F[3]=Ze,W.clearBufferiv(W.COLOR,0,F))}else ae|=W.COLOR_BUFFER_BIT}q&&(ae|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",st,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",en,!1),fe.dispose(),Ie.dispose(),Pe.dispose(),oe.dispose(),Ce.dispose(),pe.dispose(),we.dispose(),_e.dispose(),Ue.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",At),Le.removeEventListener("sessionend",vt),sn.stop()};function st(A){A.preventDefault(),U_("WebGLRenderer: Context Lost."),V=!0}function gt(){U_("WebGLRenderer: Context Restored."),V=!1;const A=K.autoReset,q=$e.enabled,ce=$e.autoUpdate,ae=$e.needsUpdate,re=$e.type;He(),K.autoReset=A,$e.enabled=q,$e.autoUpdate=ce,$e.needsUpdate=ae,$e.type=re}function en(A){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){const q=A.target;q.removeEventListener("dispose",tn),xn(q)}function xn(A){ze(A),oe.remove(A)}function ze(A){const q=oe.get(A).programs;q!==void 0&&(q.forEach(function(ce){Ue.releaseProgram(ce)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ce,ae,re,Ge){q===null&&(q=Gt);const qe=re.isMesh&&re.matrixWorld.determinantAffine()<0,Be=Pa(A,q,ce,ae,re);b.setMaterial(ae,qe);let Ze=ce.index,Ye=1;if(ae.wireframe===!0){if(Ze=ge.getWireframeAttribute(ce),Ze===void 0)return;Ye=2}const tt=ce.drawRange,ut=ce.attributes.position;let et=tt.start*Ye,Ot=(tt.start+tt.count)*Ye;Ge!==null&&(et=Math.max(et,Ge.start*Ye),Ot=Math.min(Ot,(Ge.start+Ge.count)*Ye)),Ze!==null?(et=Math.max(et,0),Ot=Math.min(Ot,Ze.count)):ut!=null&&(et=Math.max(et,0),Ot=Math.min(Ot,ut.count));const dn=Ot-et;if(dn<0||dn===1/0)return;we.setup(re,ae,Be,ce,Ze);let nn,Xt=j;if(Ze!==null&&(nn=Oe.get(Ze),Xt=le,Xt.setIndex(nn)),re.isMesh)ae.wireframe===!0?(b.setLineWidth(ae.wireframeLinewidth*un()),Xt.setMode(W.LINES)):Xt.setMode(W.TRIANGLES);else if(re.isLine){let Wt=ae.linewidth;Wt===void 0&&(Wt=1),b.setLineWidth(Wt*un()),re.isLineSegments?Xt.setMode(W.LINES):re.isLineLoop?Xt.setMode(W.LINE_LOOP):Xt.setMode(W.LINE_STRIP)}else re.isPoints?Xt.setMode(W.POINTS):re.isSprite&&Xt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Xt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Wt=re._multiDrawStarts,We=re._multiDrawCounts,Gn=re._multiDrawCount,xt=Ze?Oe.get(Ze).bytesPerElement:1,wn=oe.get(ae).currentProgram.getUniforms();for(let si=0;si<Gn;si++)wn.setValue(W,"_gl_DrawID",si),Xt.render(Wt[si]/xt,We[si])}else if(re.isInstancedMesh)Xt.renderInstances(et,dn,re.count);else if(ce.isInstancedBufferGeometry){const Wt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,We=Math.min(ce.instanceCount,Wt);Xt.renderInstances(et,dn,We)}else Xt.render(et,dn)};function Nt(A,q,ce){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=ri,A.needsUpdate=!0,Oa(A,q,ce),A.side=mr,A.needsUpdate=!0,Oa(A,q,ce),A.side=Zi):Oa(A,q,ce)}this.compile=function(A,q,ce=null){ce===null&&(ce=A),O=Pe.get(ce),O.init(q),T.push(O),ce.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(O.pushLight(re),re.castShadow&&O.pushShadow(re))}),A!==ce&&A.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(O.pushLight(re),re.castShadow&&O.pushShadow(re))}),O.setupLights();const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ge=re.material;if(Ge)if(Array.isArray(Ge))for(let qe=0;qe<Ge.length;qe++){const Be=Ge[qe];Nt(Be,ce,re),ae.add(Be)}else Nt(Ge,ce,re),ae.add(Ge)}),O=T.pop(),ae},this.compileAsync=function(A,q,ce=null){const ae=this.compile(A,q,ce);return new Promise(re=>{function Ge(){if(ae.forEach(function(qe){oe.get(qe).currentProgram.isReady()&&ae.delete(qe)}),ae.size===0){re(A);return}setTimeout(Ge,10)}Ut.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let wt=null;function fn(A){wt&&wt(A)}function At(){sn.stop()}function vt(){sn.start()}const sn=new Sx;sn.setAnimationLoop(fn),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(A){wt=A,Le.setAnimationLoop(A),A===null?sn.stop():sn.start()},Le.addEventListener("sessionstart",At),Le.addEventListener("sessionend",vt),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(A,q);const ce=Le.enabled===!0&&Le.isPresenting===!0,ae=D!==null&&(ee===null||ce)&&D.begin(k,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(q),q=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(k,A,q,ee),O=Pe.get(A,T.length),O.init(q),O.state.textureUnits=he.getTextureUnits(),T.push(O),Ht.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),mt.setFromProjectionMatrix(Ht,Qi,q.reversedDepth),pt=this.localClippingEnabled,_t=je.init(this.clippingPlanes,pt),B=Ie.get(A,z.length),B.init(),z.push(B),Le.enabled===!0&&Le.isPresenting===!0){const qe=k.xr.getDepthSensingMesh();qe!==null&&rn(qe,q,-1/0,k.sortObjects)}rn(A,q,0,k.sortObjects),B.finish(),k.sortObjects===!0&&B.sort(Xe,it,q.reversedDepth),Vt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Vt&&fe.addToRenderList(B,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&je.beginShadows();const re=O.state.shadowsArray;if($e.render(re,A,q),_t===!0&&je.endShadows(),(ae&&D.hasRenderPass())===!1){const qe=B.opaque,Be=B.transmissive;if(O.setupLights(),q.isArrayCamera){const Ze=q.cameras;if(Be.length>0)for(let Ye=0,tt=Ze.length;Ye<tt;Ye++){const ut=Ze[Ye];La(qe,Be,A,ut)}Vt&&fe.render(A);for(let Ye=0,tt=Ze.length;Ye<tt;Ye++){const ut=Ze[Ye];ta(B,A,ut,ut.viewport)}}else Be.length>0&&La(qe,Be,A,q),Vt&&fe.render(A),ta(B,A,q)}ee!==null&&G===0&&(he.updateMultisampleRenderTarget(ee),he.updateRenderTargetMipmap(ee)),ae&&D.end(k),A.isScene===!0&&A.onAfterRender(k,A,q),we.resetDefaultState(),xe=-1,Ae=null,T.pop(),T.length>0?(O=T[T.length-1],he.setTextureUnits(O.state.textureUnits),_t===!0&&je.setGlobalState(k.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?B=z[z.length-1]:B=null,Z!==null&&Z.renderEnd()};function rn(A,q,ce,ae){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||mt.intersectsSprite(A)){ae&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);const qe=pe.update(A),Be=A.material;Be.visible&&B.push(A,qe,Be,ce,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||mt.intersectsObject(A))){const qe=pe.update(A),Be=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),$t.copy(qe.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(Be)){const Ze=qe.groups;for(let Ye=0,tt=Ze.length;Ye<tt;Ye++){const ut=Ze[Ye],et=Be[ut.materialIndex];et&&et.visible&&B.push(A,qe,et,ce,$t.z,ut)}}else Be.visible&&B.push(A,qe,Be,ce,$t.z,null)}}const Ge=A.children;for(let qe=0,Be=Ge.length;qe<Be;qe++)rn(Ge[qe],q,ce,ae)}function ta(A,q,ce,ae){const{opaque:re,transmissive:Ge,transparent:qe}=A;O.setupLightsView(ce),_t===!0&&je.setGlobalState(k.clippingPlanes,ce),ae&&b.viewport(L.copy(ae)),re.length>0&&na(re,q,ce),Ge.length>0&&na(Ge,q,ce),qe.length>0&&na(qe,q,ce),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function La(A,q,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ae.id]===void 0){const et=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ae.id]=new ji(1,1,{generateMipmaps:!0,type:et?Da:wi,minFilter:kr,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ge=O.state.transmissionRenderTarget[ae.id],qe=ae.viewport||L;Ge.setSize(qe.z*k.transmissionResolutionScale,qe.w*k.transmissionResolutionScale);const Be=k.getRenderTarget(),Ze=k.getActiveCubeFace(),Ye=k.getActiveMipmapLevel();k.setRenderTarget(Ge),k.getClearColor(De),Fe=k.getClearAlpha(),Fe<1&&k.setClearColor(16777215,.5),k.clear(),Vt&&fe.render(ce);const tt=k.toneMapping;k.toneMapping=Ji;const ut=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),O.setupLightsView(ae),_t===!0&&je.setGlobalState(k.clippingPlanes,ae),na(A,ce,ae),he.updateMultisampleRenderTarget(Ge),he.updateRenderTargetMipmap(Ge),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ot=0,dn=q.length;Ot<dn;Ot++){const nn=q[Ot],{object:Xt,geometry:Wt,material:We,group:Gn}=nn;if(We.side===Zi&&Xt.layers.test(ae.layers)){const xt=We.side;We.side=ri,We.needsUpdate=!0,Na(Xt,ce,ae,Wt,We,Gn),We.side=xt,We.needsUpdate=!0,et=!0}}et===!0&&(he.updateMultisampleRenderTarget(Ge),he.updateRenderTargetMipmap(Ge))}k.setRenderTarget(Be,Ze,Ye),k.setClearColor(De,Fe),ut!==void 0&&(ae.viewport=ut),k.toneMapping=tt}function na(A,q,ce){const ae=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Ge=A.length;re<Ge;re++){const qe=A[re],{object:Be,geometry:Ze,group:Ye}=qe;let tt=qe.material;tt.allowOverride===!0&&ae!==null&&(tt=ae),Be.layers.test(ce.layers)&&Na(Be,q,ce,Ze,tt,Ye)}}function Na(A,q,ce,ae,re,Ge){A.onBeforeRender(k,q,ce,ae,re,Ge),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(k,q,ce,ae,A,Ge),re.transparent===!0&&re.side===Zi&&re.forceSinglePass===!1?(re.side=ri,re.needsUpdate=!0,k.renderBufferDirect(ce,q,ae,re,A,Ge),re.side=mr,re.needsUpdate=!0,k.renderBufferDirect(ce,q,ae,re,A,Ge),re.side=Zi):k.renderBufferDirect(ce,q,ae,re,A,Ge),A.onAfterRender(k,q,ce,ae,re,Ge)}function Oa(A,q,ce){q.isScene!==!0&&(q=Gt);const ae=oe.get(A),re=O.state.lights,Ge=O.state.shadowsArray,qe=re.state.version,Be=Ue.getParameters(A,re.state,Ge,q,ce,O.state.lightProbeGridArray),Ze=Ue.getProgramCacheKey(Be);let Ye=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ae.fog=q.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=Ce.get(A.envMap||ae.environment,tt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Ye===void 0&&(A.addEventListener("dispose",tn),Ye=new Map,ae.programs=Ye);let ut=Ye.get(Ze);if(ut!==void 0){if(ae.currentProgram===ut&&ae.lightsStateVersion===qe)return aa(A,Be),ut}else Be.uniforms=Ue.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,ce,Be),A.onBeforeCompile(Be,k),ut=Ue.acquireProgram(Be,Ze),Ye.set(Ze,ut),ae.uniforms=Be.uniforms;const et=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=je.uniform),aa(A,Be),ae.needsLights=_l(A),ae.lightsStateVersion=qe,ae.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=O.state.lightProbeGridArray.length>0,ae.currentProgram=ut,ae.uniformsList=null,ut}function ia(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=iu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function aa(A,q){const ce=oe.get(A);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function vr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let ce=0,ae=A.length;ce<ae;ce++){const re=A[ce];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function Pa(A,q,ce,ae,re){q.isScene!==!0&&(q=Gt),he.resetTextureUnits();const Ge=q.fog,qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?q.environment:null,Be=ee===null?k.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ct.workingColorSpace,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ye=Ce.get(ae.envMap||qe,Ze),tt=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ut=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!ce.morphAttributes.position,Ot=!!ce.morphAttributes.normal,dn=!!ce.morphAttributes.color;let nn=Ji;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(nn=k.toneMapping);const Xt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Wt=Xt!==void 0?Xt.length:0,We=oe.get(ae),Gn=O.state.lights;if(_t===!0&&(pt===!0||A!==Ae)){const kt=A===Ae&&ae.id===xe;je.setState(ae,A,kt)}let xt=!1;ae.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Gn.state.version||We.outputColorSpace!==Be||re.isBatchedMesh&&We.batching===!1||!re.isBatchedMesh&&We.batching===!0||re.isBatchedMesh&&We.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&We.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&We.instancing===!1||!re.isInstancedMesh&&We.instancing===!0||re.isSkinnedMesh&&We.skinning===!1||!re.isSkinnedMesh&&We.skinning===!0||re.isInstancedMesh&&We.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&We.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&We.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&We.instancingMorph===!1&&re.morphTexture!==null||We.envMap!==Ye||ae.fog===!0&&We.fog!==Ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==je.numPlanes||We.numIntersection!==je.numIntersection)||We.vertexAlphas!==tt||We.vertexTangents!==ut||We.morphTargets!==et||We.morphNormals!==Ot||We.morphColors!==dn||We.toneMapping!==nn||We.morphTargetsCount!==Wt||!!We.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,We.__version=ae.version);let wn=We.currentProgram;xt===!0&&(wn=Oa(ae,q,re),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,wn,We));let si=!1,Di=!1,oi=!1;const qt=wn.getUniforms(),hn=We.uniforms;if(b.useProgram(wn.program)&&(si=!0,Di=!0,oi=!0),ae.id!==xe&&(xe=ae.id,Di=!0),We.needsLights){const kt=vr(O.state.lightProbeGridArray,re);We.lightProbeGrid!==kt&&(We.lightProbeGrid=kt,Di=!0)}if(si||Ae!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),qt.setValue(W,"projectionMatrix",A.projectionMatrix),qt.setValue(W,"viewMatrix",A.matrixWorldInverse);const Hi=qt.map.cameraPosition;Hi!==void 0&&Hi.setValue(W,cn.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&qt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&qt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),Ae!==A&&(Ae=A,Di=!0,oi=!0)}if(We.needsLights&&(Gn.state.directionalShadowMap.length>0&&qt.setValue(W,"directionalShadowMap",Gn.state.directionalShadowMap,he),Gn.state.spotShadowMap.length>0&&qt.setValue(W,"spotShadowMap",Gn.state.spotShadowMap,he),Gn.state.pointShadowMap.length>0&&qt.setValue(W,"pointShadowMap",Gn.state.pointShadowMap,he)),re.isSkinnedMesh){qt.setOptional(W,re,"bindMatrix"),qt.setOptional(W,re,"bindMatrixInverse");const kt=re.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),qt.setValue(W,"boneTexture",kt.boneTexture,he))}re.isBatchedMesh&&(qt.setOptional(W,re,"batchingTexture"),qt.setValue(W,"batchingTexture",re._matricesTexture,he),qt.setOptional(W,re,"batchingIdTexture"),qt.setValue(W,"batchingIdTexture",re._indirectTexture,he),qt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&qt.setValue(W,"batchingColorTexture",re._colorsTexture,he));const Ui=ce.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&I.update(re,ce,wn),(Di||We.receiveShadow!==re.receiveShadow)&&(We.receiveShadow=re.receiveShadow,qt.setValue(W,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&q.environment!==null&&(hn.envMapIntensity.value=q.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=g2()),Di){if(qt.setValue(W,"toneMappingExposure",k.toneMappingExposure),We.needsLights&&Mn(hn,oi),Ge&&ae.fog===!0&&ke.refreshFogUniforms(hn,Ge),ke.refreshMaterialUniforms(hn,ae,Ee,Me,O.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){const kt=We.lightProbeGrid;hn.probesSH.value=kt.texture,hn.probesMin.value.copy(kt.boundingBox.min),hn.probesMax.value.copy(kt.boundingBox.max),hn.probesResolution.value.copy(kt.resolution)}iu.upload(W,ia(We),hn,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(iu.upload(W,ia(We),hn,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&qt.setValue(W,"center",re.center),qt.setValue(W,"modelViewMatrix",re.modelViewMatrix),qt.setValue(W,"normalMatrix",re.normalMatrix),qt.setValue(W,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const kt=ae.uniformsGroups;for(let Hi=0,Ia=kt.length;Hi<Ia;Hi++){const xr=kt[Hi];_e.update(xr,wn),_e.bind(xr,wn)}}return wn}function Mn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function _l(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,q,ce){const ae=oe.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=q,oe.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ce=oe.get(A);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ce=0){ee=A,P=q,G=ce;let ae=null,re=!1,Ge=!1;if(A){const Be=oe.get(A);if(Be.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(W.FRAMEBUFFER,Be.__webglFramebuffer),L.copy(A.viewport),J.copy(A.scissor),Te=A.scissorTest,b.viewport(L),b.scissor(J),b.setScissorTest(Te),xe=-1;return}else if(Be.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Be.__hasExternalTextures)he.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Be.__boundDepthTexture!==tt){if(tt!==null&&oe.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ge=!0);const Ye=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?ae=Ye[q][ce]:ae=Ye[q],re=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ae=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[ce]:ae=Ye,L.copy(A.viewport),J.copy(A.scissor),Te=A.scissorTest}else L.copy(Qe).multiplyScalar(Ee).floor(),J.copy(Ft).multiplyScalar(Ee).floor(),Te=ct;if(ce!==0&&(ae=me),b.bindFramebuffer(W.FRAMEBUFFER,ae)&&b.drawBuffers(A,ae),b.viewport(L),b.scissor(J),b.setScissorTest(Te),re){const Be=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,ce)}else if(Ge){const Be=q;for(let Ze=0;Ze<A.textures.length;Ze++){const Ye=oe.get(A.textures[Ze]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ze,Ye.__webglTexture,ce,Be)}}else if(A!==null&&ce!==0){const Be=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Be.__webglTexture,ce)}xe=-1},this.readRenderTargetPixels=function(A,q,ce,ae,re,Ge,qe,Be=0){if(!(A&&A.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze){b.bindFramebuffer(W.FRAMEBUFFER,Ze);try{const Ye=A.textures[Be],tt=Ye.format,ut=Ye.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!U.textureFormatReadable(tt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ut)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ae&&ce>=0&&ce<=A.height-re&&W.readPixels(q,ce,ae,re,be.convert(tt),be.convert(ut),Ge)}finally{const Ye=ee!==null?oe.get(ee).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(A,q,ce,ae,re,Ge,qe,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze)if(q>=0&&q<=A.width-ae&&ce>=0&&ce<=A.height-re){b.bindFramebuffer(W.FRAMEBUFFER,Ze);const Ye=A.textures[Be],tt=Ye.format,ut=Ye.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!U.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,et),W.bufferData(W.PIXEL_PACK_BUFFER,Ge.byteLength,W.STREAM_READ),W.readPixels(q,ce,ae,re,be.convert(tt),be.convert(ut),0);const Ot=ee!==null?oe.get(ee).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,Ot);const dn=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Sb(W,dn,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,et),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ge),W.deleteBuffer(et),W.deleteSync(dn),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ce=0){const ae=Math.pow(2,-ce),re=Math.floor(A.image.width*ae),Ge=Math.floor(A.image.height*ae),qe=q!==null?q.x:0,Be=q!==null?q.y:0;he.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,qe,Be,re,Ge),b.unbindTexture()},this.copyTextureToTexture=function(A,q,ce=null,ae=null,re=0,Ge=0){let qe,Be,Ze,Ye,tt,ut,et,Ot,dn;const nn=A.isCompressedTexture?A.mipmaps[Ge]:A.image;if(ce!==null)qe=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,Ze=ce.isBox3?ce.max.z-ce.min.z:1,Ye=ce.min.x,tt=ce.min.y,ut=ce.isBox3?ce.min.z:0;else{const hn=Math.pow(2,-re);qe=Math.floor(nn.width*hn),Be=Math.floor(nn.height*hn),A.isDataArrayTexture?Ze=nn.depth:A.isData3DTexture?Ze=Math.floor(nn.depth*hn):Ze=1,Ye=0,tt=0,ut=0}ae!==null?(et=ae.x,Ot=ae.y,dn=ae.z):(et=0,Ot=0,dn=0);const Xt=be.convert(q.format),Wt=be.convert(q.type);let We;q.isData3DTexture?(he.setTexture3D(q,0),We=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),We=W.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),We=W.TEXTURE_2D),b.activeTexture(W.TEXTURE0),b.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Gn=b.getParameter(W.UNPACK_ROW_LENGTH),xt=b.getParameter(W.UNPACK_IMAGE_HEIGHT),wn=b.getParameter(W.UNPACK_SKIP_PIXELS),si=b.getParameter(W.UNPACK_SKIP_ROWS),Di=b.getParameter(W.UNPACK_SKIP_IMAGES);b.pixelStorei(W.UNPACK_ROW_LENGTH,nn.width),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,nn.height),b.pixelStorei(W.UNPACK_SKIP_PIXELS,Ye),b.pixelStorei(W.UNPACK_SKIP_ROWS,tt),b.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);const oi=A.isDataArrayTexture||A.isData3DTexture,qt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const hn=oe.get(A),Ui=oe.get(q),kt=oe.get(hn.__renderTarget),Hi=oe.get(Ui.__renderTarget);b.bindFramebuffer(W.READ_FRAMEBUFFER,kt.__webglFramebuffer),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Ia=0;Ia<Ze;Ia++)oi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,re,ut+Ia),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(q).__webglTexture,Ge,dn+Ia)),W.blitFramebuffer(Ye,tt,qe,Be,et,Ot,qe,Be,W.DEPTH_BUFFER_BIT,W.NEAREST);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||oe.has(A)){const hn=oe.get(A),Ui=oe.get(q);b.bindFramebuffer(W.READ_FRAMEBUFFER,ne),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,Y);for(let kt=0;kt<Ze;kt++)oi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,hn.__webglTexture,re,ut+kt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,hn.__webglTexture,re),qt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ui.__webglTexture,Ge,dn+kt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ui.__webglTexture,Ge),re!==0?W.blitFramebuffer(Ye,tt,qe,Be,et,Ot,qe,Be,W.COLOR_BUFFER_BIT,W.NEAREST):qt?W.copyTexSubImage3D(We,Ge,et,Ot,dn+kt,Ye,tt,qe,Be):W.copyTexSubImage2D(We,Ge,et,Ot,Ye,tt,qe,Be);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else qt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(We,Ge,et,Ot,dn,qe,Be,Ze,Xt,Wt,nn.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(We,Ge,et,Ot,dn,qe,Be,Ze,Xt,nn.data):W.texSubImage3D(We,Ge,et,Ot,dn,qe,Be,Ze,Xt,Wt,nn):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ge,et,Ot,qe,Be,Xt,Wt,nn.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ge,et,Ot,nn.width,nn.height,Xt,nn.data):W.texSubImage2D(W.TEXTURE_2D,Ge,et,Ot,qe,Be,Xt,Wt,nn);b.pixelStorei(W.UNPACK_ROW_LENGTH,Gn),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt),b.pixelStorei(W.UNPACK_SKIP_PIXELS,wn),b.pixelStorei(W.UNPACK_SKIP_ROWS,si),b.pixelStorei(W.UNPACK_SKIP_IMAGES,Di),Ge===0&&q.generateMipmaps&&W.generateMipmap(We),b.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){P=0,G=0,ee=null,b.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const v2=[{id:"gamefest-2026",slug:"gamefest-2026",title:"Gamefest 2026 Experience & Post-Mortem",subtitle:"48 hours, zero sleep, three game prototypes, and an unforgettable community vibe.",author:"Abbos Jabborov",tags:["GameDev","Gamefest","Hackathon","Retrospective"],reading_time:"4 min read",published_at:"February 18, 2026",cover_url:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",content:`
# Gamefest 2026: Into the Neural Simulation

Last weekend was **Gamefest 2026** — one of the most intense, electrifying hackathons and indie gatherings we've experienced yet. Standing in a massive hall filled with game developers, 3D artists, sound designers, and shader wizards, the energy was pure creative fuel.

> "A game isn't just code and pixels; it's a transient consciousness loop between the designer and the player."

---

## 🎮 The Challenge & Concept

The theme announced at midnight was **"Synchronous Echoes"**. We had exactly 48 hours to design, build, polish, and submit a playable game from scratch.

Our idea: a fast-paced cyberpunk 3D runner where your past ghost actions create temporal bridges and obstacles for your future self. Every jump you missed in iteration *N* leaves a digital ripple you can wall-jump from in iteration *N+1*.

![Gamefest Atmosphere](https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80)

---

## ⚡ Technical Highlights

Here are a few things we learned while crunching shaders and gameplay physics:

1. **Custom HLSL / GLSL Dissolve Shaders**: We wrote procedural noise dissolve materials that disintegrate character clones into glowing voxels upon rewind.
2. **Deterministic Physics State Stacks**: Rewinding time required snapshotting player transforms and velocity vectors at 60Hz.
3. **Adaptive Dynamic Synth Audio**: Modulating synth pitch and low-pass cutoff based on player combo velocity made the game feel alive.

\`\`\`javascript
// Temporal Ghost snapshot sampler
function sampleGhostFrame(timeline, currentTick) {
  const frame = timeline.find(f => f.tick === currentTick);
  if (!frame) return null;
  return {
    position: frame.pos.clone(),
    rotation: frame.rot.clone(),
    energyPulse: Math.sin(currentTick * 0.15) * 0.5 + 0.5
  };
}
\`\`\`

---

## 🏆 The Outcome & Community Reaction

When the judging floor opened, over 150 participants tried the demo. Seeing people get hooked trying to beat each other's ghost speedrun times was the ultimate reward.

We ended up taking **Top 3 Best Mechanics** and made friendships with teams from all over the world.

![Team and Victory](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80)

### What's Next?
We are expanding the prototype into a full Steam title with procedural levels, custom boss battles, and full controller support. Stay tuned for the upcoming beta announcement!
`},{id:"architecture-notes-2026",slug:"architecture-notes-2026",title:"Designing Spatial Neural Web Interfaces",subtitle:"Why 2D flat grids are giving way to interactive 3D constellation graphs.",author:"Abbos Jabborov",tags:["WebGL","ThreeJS","Spatial UI","Design"],reading_time:"5 min read",published_at:"January 14, 2026",cover_url:"https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1600&q=80",content:`
# Spatial Neural Web Interfaces: Beyond the Flat DOM

Modern web applications have spent two decades refining rectangular containers, responsive CSS grids, and cards. But our cognitive mental models aren't flat—they are associative graphs of concepts, projects, memories, and connections.

---

## 🌌 The Constellation Paradigm

When you look at human thought, ideas don't exist in tabs or folders. They exist as **nodes in high-dimensional semantic space**. 

By placing the visitor *inside* a sphere of interconnected synapses:
- **Spatial Memory**: Visitors remember where a project is located in 3D direction ("top-right cyan cluster").
- **Organic Exploration**: Hovering excites neighboring nodes through glowing synaptic axons.
- **Continuous Flow**: Rather than harsh page jumps, transitions feel like zooming through memory space.

\`\`\`glsl
// Synaptic glow intensity formula
float pulse = sin(uTime * 3.0 + nodeIndex * 0.4) * 0.5 + 0.5;
vec3 finalColor = mix(baseColor, glowColor, pulse * hoverWeight);
\`\`\`

---

## 🛠️ Performance & 60FPS Optimization
Building this requires:
1. **InstancedMesh rendering** for hundreds of glowing nodes and stardust particles with a single draw call.
2. **Spherical Fibonacci Distribution** to prevent clustering artifacts and give perfect harmonic spacing.
3. **Quaternion Damped Drag Controls** for silky smooth inertia when swiping on both desktop mice and mobile touchscreens.

The future of personal portfolios is not a static resume document—it is an interactive digital universe.
`},{id:"about-claive",slug:"about-claive",title:"About Claive // Developer & Creator",subtitle:"Software engineer, game developer, and creative technologist.",author:"Abbos Jabborov",tags:["About","Bio","Stack","Career"],reading_time:"2 min read",cover_url:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",content:`
# Hello, I'm Abbos (Claive) 👋

I am a software engineer and creative technologist passionate about high-performance web systems, 3D graphics, game engines, and building delightful interactive software.

---

## ⚡ What I Build
- **Full-Stack Web Architectures**: React, Three.js, WebGL, Vite, Python, Django, REST APIs, PostgreSQL.
- **Game Development & Systems**: Unreal Engine, Unity, custom C++ / WebGL engines, procedural gameplay systems.
- **Creative Tools & Spatial Interfaces**: Graph visualizations, real-time audio visualizers, and interactive experiments.

---

## 📬 Connect with Me
- **Website**: [claive.uz](https://claive.uz)
- **GitHub**: [github.com/AbbosJabborov](https://github.com/AbbosJabborov)
- **LinkedIn**: [linkedin.com/in/abbos-jabborov](https://www.linkedin.com)
- **Telegram**: [@claive](https://t.me/claive)
`}],wv={nodes:[{id:"core-claive",label:"Abbos Jabborov",subtitle:"Personal Knowledge Graph & Nexus",category:"CORE",node_type:"STORY",slug:"about-claive",color:"#a855f7",size:14,isHub:!0},{id:"hub-projects",label:"Projects",subtitle:"Software systems, tools & libraries",category:"PROJECT",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#38bdf8",size:10,isHub:!0},{id:"node-scrolls",label:"Scrolls",subtitle:"Interactive Markdown reader & canvas workspace",category:"PROJECT",node_type:"EXTERNAL",url:"https://scrolls.claive.uz",color:"#38bdf8",size:6},{id:"node-game-engine",label:"Custom C++ Engine",subtitle:"Vulkan/OpenGL 3D rendering pipeline",category:"PROJECT",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#38bdf8",size:6},{id:"node-notes-wall",label:"Whisper Notes",subtitle:"Interactive message board & guest reflections",category:"PROJECT",node_type:"EXTERNAL",url:"https://claive.uz/notes",color:"#38bdf8",size:5},{id:"node-ai-research",label:"AI & Neural Graphs",subtitle:"Agentic coding systems & vector embeddings",category:"PROJECT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#38bdf8",size:5},{id:"hub-writing",label:"Writing & Notes",subtitle:"Reflections, post-mortems & digital garden",category:"STORY",node_type:"STORY",slug:"gamefest-2026",color:"#ec4899",size:10,isHub:!0},{id:"node-gamefest",label:"Gamefest 2026",subtitle:"48-hour game jam experience, shaders & post-mortem",category:"STORY",node_type:"STORY",slug:"gamefest-2026",color:"#ec4899",size:7},{id:"node-architecture",label:"Neural UI Design",subtitle:"Spatial interfaces and 3D constellation architectures",category:"STORY",node_type:"STORY",slug:"architecture-notes-2026",color:"#ec4899",size:6},{id:"node-obsidian-vault",label:"Digital Garden",subtitle:"Interlinked second-brain notes and evergreen thoughts",category:"STORY",node_type:"STORY",slug:"architecture-notes-2026",color:"#ec4899",size:5},{id:"node-bio",label:"About Claive",subtitle:"Biography, technical stack & background story",category:"STORY",node_type:"STORY",slug:"about-claive",color:"#ec4899",size:6},{id:"hub-games",label:"Game Vault",subtitle:"Indie releases, jam prototypes & game physics",category:"GAME",node_type:"EXTERNAL",url:"https://store.steampowered.com",color:"#fbbf24",size:10,isHub:!0},{id:"node-games-vault",label:"Indie Game Vault",subtitle:"Steam releases, jam prototypes & playable builds",category:"GAME",node_type:"EXTERNAL",url:"https://store.steampowered.com",color:"#fbbf24",size:7},{id:"node-retro-arcade",label:"Retro Arcade",subtitle:"Browser-based pixel mini-games and physics toys",category:"GAME",node_type:"EXTERNAL",url:"https://claive.uz/games",color:"#fbbf24",size:5},{id:"node-steam-library",label:"Steam Library",subtitle:"Curated game collection and play history",category:"GAME",node_type:"EXTERNAL",url:"https://steamcommunity.com",color:"#fbbf24",size:5},{id:"node-game-jam-2025",label:"Game Jam Archive",subtitle:"Past jam submissions and experimental prototypes",category:"GAME",node_type:"STORY",slug:"gamefest-2026",color:"#fbbf24",size:5},{id:"hub-experiments",label:"Creative Lab",subtitle:"Real-time shaders, audio synthesizers & canvas toys",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:10,isHub:!0},{id:"node-shader-lab",label:"Shader Lab",subtitle:"Procedural HLSL / GLSL visual experiments",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:6},{id:"node-creative-code",label:"Generative Canvas",subtitle:"Algorithmic geometry and mathematical art",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:5},{id:"node-soundscape",label:"Soundtrack Synapse",subtitle:"Curated ambient game soundtracks & coding flow",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://open.spotify.com",color:"#34d399",size:5},{id:"node-spatial-audio",label:"Spatial Web Audio",subtitle:"Positional 3D binaural synthesizer engine",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:5},{id:"hub-socials",label:"Social Nexus",subtitle:"Direct channels, social profiles & contact",category:"SOCIAL",node_type:"EXTERNAL",url:"https://www.linkedin.com/in/abbos-jabborov",color:"#60a5fa",size:10,isHub:!0},{id:"node-linkedin",label:"LinkedIn",subtitle:"Professional profile, connections & career milestones",category:"SOCIAL",node_type:"EXTERNAL",url:"https://www.linkedin.com/in/abbos-jabborov",color:"#60a5fa",size:6},{id:"node-github",label:"GitHub",subtitle:"Open-source repositories, engines & experiments",category:"SOCIAL",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#60a5fa",size:6},{id:"node-telegram",label:"Telegram",subtitle:"Direct messaging & project updates channel",category:"SOCIAL",node_type:"EXTERNAL",url:"https://t.me/claive",color:"#60a5fa",size:5},{id:"node-twitter",label:"Twitter / X",subtitle:"Tech thoughts, game clips & release announcements",category:"SOCIAL",node_type:"EXTERNAL",url:"https://x.com",color:"#60a5fa",size:5},{id:"node-resume",label:"Resume & CV",subtitle:"Experience timeline and engineering achievements",category:"SOCIAL",node_type:"STORY",slug:"about-claive",color:"#60a5fa",size:5},{id:"node-contact",label:"Get in Touch",subtitle:"Collaborations, freelance & contract opportunities",category:"SOCIAL",node_type:"EXTERNAL",url:"mailto:contact@claive.uz",color:"#60a5fa",size:5}],links:[{source:"core-claive",target:"hub-projects"},{source:"core-claive",target:"hub-writing"},{source:"core-claive",target:"hub-games"},{source:"core-claive",target:"hub-experiments"},{source:"core-claive",target:"hub-socials"},{source:"hub-projects",target:"node-scrolls"},{source:"hub-projects",target:"node-game-engine"},{source:"hub-projects",target:"node-notes-wall"},{source:"hub-projects",target:"node-ai-research"},{source:"hub-writing",target:"node-gamefest"},{source:"hub-writing",target:"node-architecture"},{source:"hub-writing",target:"node-obsidian-vault"},{source:"hub-writing",target:"node-bio"},{source:"hub-games",target:"node-games-vault"},{source:"hub-games",target:"node-retro-arcade"},{source:"hub-games",target:"node-steam-library"},{source:"hub-games",target:"node-game-jam-2025"},{source:"hub-experiments",target:"node-shader-lab"},{source:"hub-experiments",target:"node-creative-code"},{source:"hub-experiments",target:"node-soundscape"},{source:"hub-experiments",target:"node-spatial-audio"},{source:"hub-socials",target:"node-linkedin"},{source:"hub-socials",target:"node-github"},{source:"hub-socials",target:"node-telegram"},{source:"hub-socials",target:"node-twitter"},{source:"hub-socials",target:"node-resume"},{source:"hub-socials",target:"node-contact"},{source:"node-gamefest",target:"hub-games"},{source:"node-gamefest",target:"node-shader-lab"},{source:"node-scrolls",target:"node-obsidian-vault"},{source:"node-scrolls",target:"node-notes-wall"},{source:"node-game-engine",target:"node-shader-lab"},{source:"node-game-engine",target:"node-games-vault"},{source:"node-architecture",target:"node-ai-research"},{source:"node-architecture",target:"node-creative-code"},{source:"node-soundscape",target:"node-spatial-audio"},{source:"node-github",target:"hub-projects"},{source:"node-github",target:"node-game-engine"},{source:"node-bio",target:"node-resume"},{source:"node-bio",target:"core-claive"},{source:"node-retro-arcade",target:"node-creative-code"}]};function x2({onHoverNode:s=()=>{}}){const e=Re.useRef(null),i=Re.useRef(null),r=Re.useRef(null),l=sp(),c=Re.useRef(null),d=Re.useRef(null),p=Re.useRef(null),m=Re.useRef([]),h=Re.useRef(null),v=Re.useRef(null),_=Re.useRef(!1),g=Re.useRef(null),M=Re.useRef(null),[E,C]=Re.useState(!0),y=Re.useRef(Date.now()),x=Re.useRef(new $(0,0,1)),N=Re.useRef(!1),F=Re.useRef({lon:0,lat:5,targetLon:0,targetLat:5,fov:65,targetFov:65,isDragging:!1,startX:0,startY:0,startLon:0,startLat:0,startPinchDist:0,startFov:65}),w=Re.useCallback(()=>{if(!g.current)try{const D=window.AudioContext||window.webkitAudioContext;if(!D)return;const k=new D;g.current=k;const V=k.createOscillator(),Z=k.createOscillator(),me=k.createGain(),ne=k.createBiquadFilter();V.type="sine",V.frequency.setValueAtTime(55,k.currentTime),Z.type="triangle",Z.frequency.setValueAtTime(110,k.currentTime),ne.type="lowpass",ne.frequency.setValueAtTime(220,k.currentTime),me.gain.setValueAtTime(.012,k.currentTime),V.connect(ne),Z.connect(ne),ne.connect(me),me.connect(k.destination),V.start(),Z.start(),M.current={osc1:V,osc2:Z,gain:me,filter:ne}}catch{}},[]),B=Re.useCallback((D=440,k="sine",V=.08,Z=0,me=.04)=>{if(E){w();try{const ne=g.current;if(!ne)return;ne.state==="suspended"&&ne.resume();const Y=ne.createOscillator(),P=ne.createGain();if(Y.type=k,Y.frequency.setValueAtTime(D,ne.currentTime),P.gain.setValueAtTime(me,ne.currentTime),P.gain.exponentialRampToValueAtTime(1e-4,ne.currentTime+V),ne.createStereoPanner){const G=ne.createStereoPanner();G.pan.setValueAtTime(Math.max(-1,Math.min(1,Z)),ne.currentTime),Y.connect(P),P.connect(G),G.connect(ne.destination)}else Y.connect(P),P.connect(ne.destination);Y.start(),Y.stop(ne.currentTime+V)}catch{}}},[E,w]),O=Re.useCallback(()=>{if(E){w();try{const D=g.current;if(!D)return;D.state==="suspended"&&D.resume();const k=D.createOscillator(),V=D.createGain();k.type="sawtooth",k.frequency.setValueAtTime(220,D.currentTime),k.frequency.exponentialRampToValueAtTime(880,D.currentTime+.6),V.gain.setValueAtTime(.06,D.currentTime),V.gain.exponentialRampToValueAtTime(1e-4,D.currentTime+.65),k.connect(V),V.connect(D.destination),k.start(),k.stop(D.currentTime+.65)}catch{}}},[E,w]),z=Re.useCallback((D,k,V)=>new $(D*Math.sin(k)*Math.cos(V),D*Math.cos(k),D*Math.sin(k)*Math.sin(V)),[]);Re.useEffect(()=>{const D=e.current,k=i.current;if(!D||!k)return;const V=D.clientWidth,Z=D.clientHeight,me=new Jb;c.current=me;const ne=new Ci(65,V/Z,1,3e3);ne.position.set(0,0,.01),d.current=ne;const Y=new _2({alpha:!0,antialias:!0,powerPreference:"high-performance"});Y.setSize(V,Z),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.current=Y,D.innerHTML="",D.appendChild(Y.domElement);const P=new ks;me.add(P);const ee=(()=>{const fe=document.createElement("canvas");fe.width=64,fe.height=64;const I=fe.getContext("2d"),j=I.createRadialGradient(32,32,0,32,32,30);j.addColorStop(0,"rgba(255, 255, 255, 1)"),j.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),j.addColorStop(.5,"rgba(220, 240, 255, 0.5)"),j.addColorStop(.8,"rgba(100, 200, 255, 0.15)"),j.addColorStop(1,"rgba(0, 0, 0, 0)"),I.fillStyle=j,I.fillRect(0,0,64,64);const le=new uE(fe);return le.needsUpdate=!0,le})(),xe=750,Ae=new Float32Array(xe*3),L=new Float32Array(xe*3),J=new Float32Array(xe),Te=[new Mt(16317180),new Mt(9684477),new Mt(12891645),new Mt(7268279)];for(let fe=0;fe<xe;fe++){const I=fe*3,j=900+Math.random()*800,le=Math.acos(1-2*Math.random()),be=Math.random()*Math.PI*2,we=z(j,le,be);Ae[I]=we.x,Ae[I+1]=we.y,Ae[I+2]=we.z;const _e=Te[Math.floor(Math.random()*Te.length)];L[I]=_e.r,L[I+1]=_e.g,L[I+2]=_e.b,J[fe]=Math.random()*Math.PI*2}const De=new Jn;De.setAttribute("position",new ai(Ae,3)),De.setAttribute("color",new ai(L,3));const Fe=new px({vertexColors:!0,size:2.2,map:ee,transparent:!0,opacity:.65,blending:Vs,depthWrite:!1}),se=new cE(De,Fe);P.add(se);const Me=wv.nodes,Ee=wv.links,Xe=280,it=new Map,Qe=new Map;Me.forEach(fe=>{Qe.set(fe.id,new Set)}),Ee.forEach(fe=>{Qe.has(fe.source)&&Qe.has(fe.target)&&(Qe.get(fe.source).add(fe.target),Qe.get(fe.target).add(fe.source))});const Ft={"core-claive":{phi:Math.PI*.5,theta:0},"hub-projects":{phi:Math.PI*.38,theta:Math.PI*.45},"hub-writing":{phi:Math.PI*.35,theta:Math.PI*1.15},"hub-games":{phi:Math.PI*.65,theta:Math.PI*.8},"hub-experiments":{phi:Math.PI*.68,theta:Math.PI*1.6},"hub-socials":{phi:Math.PI*.32,theta:Math.PI*1.85}},ct=[],mt=[],_t=new sl(20,8,8),pt=new Xs({visible:!1});k.innerHTML="",Me.forEach((fe,I)=>{let j,le;if(Ft[fe.id])j=Ft[fe.id].phi,le=Ft[fe.id].theta;else{let fn={phi:Math.PI*.5,theta:Math.PI*.5};for(const[sn,rn]of Object.entries(Ft))if(Qe.get(fe.id)?.has(sn)){fn=rn;break}const At=I%4*(Math.PI*.5),vt=.14+I%3*.05;j=Math.max(.15,Math.min(Math.PI-.15,fn.phi+Math.sin(At)*vt)),le=fn.theta+Math.cos(At)*vt*1.5}const be=z(Xe,j,le),we=700+Math.random()*500,_e=z(we,Math.random()*Math.PI,Math.random()*Math.PI*2),He=new Mt(fe.color||"#38bdf8"),Le=new ks;Le.position.copy(_e);const st=fe.isHub?fe.id==="core-claive"?9:7:fe.size?fe.size*.75:4.5,gt=new sl(st,16,16),en=new Xs({color:He,transparent:!0,opacity:0}),tn=new _i(gt,en);Le.add(tn);let xn=null;if(fe.isHub){const fn=new xp(st*1.35,st*1.85,32),At=new Xs({color:He,side:Zi,transparent:!0,opacity:0,blending:Vs});xn=new _i(fn,At),xn.lookAt(0,0,0),Le.add(xn)}const ze=new _i(_t,pt);ze.userData={nodeData:fe,nodeGroup:Le,coreMesh:tn,haloMesh:xn,originalColor:He},Le.add(ze),mt.push(ze),P.add(Le);const Nt=document.createElement("div");Nt.className="obsidian-node-label",Nt.textContent=fe.label,Nt.dataset.nodeId=fe.id,Nt.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(-50%, -50%, 0);
        pointer-events: none;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        font-size: ${fe.isHub?fe.id==="core-claive"?"14px":"12px":"11px"};
        font-weight: ${fe.isHub?"700":"500"};
        color: #f1f5f9;
        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.95), 0 0 10px ${fe.color||"#38bdf8"}44;
        opacity: 0;
        transition: opacity 0.25s ease, transform 0.15s ease, color 0.2s ease;
        white-space: nowrap;
        user-select: none;
        letter-spacing: 0.02em;
        z-index: 10;
      `,k.appendChild(Nt);const wt={id:fe.id,data:fe,pos:_e.clone(),targetPos:be.clone(),basePos:be.clone(),phi:j,theta:le,group:Le,coreMesh:tn,haloMesh:xn,hitMesh:ze,labelEl:Nt,color:He,isHub:!!fe.isHub};it.set(fe.id,wt),ct.push(wt)}),m.current=mt;const Ht=[];Ee.forEach(fe=>{const I=it.get(fe.source),j=it.get(fe.target);I&&j&&Ht.push({source:I,target:j,sourceId:fe.source,targetId:fe.target})});const cn=new Float32Array(Ht.length*6),$t=new Float32Array(Ht.length*6);for(let fe=0;fe<Ht.length;fe++){const I=fe*6;for(let j=0;j<2;j++)$t[I+j*3]=.22,$t[I+j*3+1]=.28,$t[I+j*3+2]=.38}const Gt=new Jn;Gt.setAttribute("position",new ai(cn,3).setUsage(C_)),Gt.setAttribute("color",new ai($t,3).setUsage(C_));const Vt=new hx({vertexColors:!0,transparent:!0,opacity:0,blending:Vs,linewidth:1.2}),un=new lE(Gt,Vt);P.add(un);const W=55,zt=[],Ut=new sl(1,8,8);for(let fe=0;fe<W;fe++){const I=Ht[Math.floor(Math.random()*Ht.length)];if(!I)continue;const j=I.source.color.clone().lerp(I.target.color,Math.random());j.addScalar(.35);const le=new Xs({color:j,transparent:!0,opacity:.95,blending:Vs}),be=new _i(Ut,le);be.position.copy(I.source.pos),P.add(be),zt.push({mesh:be,edge:I,progress:Math.random(),speed:.0035+Math.random()*.0055,wobbleOffset:Math.random()*10,baseScale:.8+Math.random()*.5})}const U=new yE,b=new Lt,K=fe=>fe.touches&&fe.touches.length>0?{x:fe.touches[0].clientX,y:fe.touches[0].clientY}:{x:fe.clientX,y:fe.clientY},oe=(fe,I)=>{y.current=Date.now();const j=D.getBoundingClientRect();b.x=(fe-j.left)/j.width*2-1,b.y=-((I-j.top)/j.height)*2+1,U.setFromCamera(b,ne),x.current.copy(U.ray.direction).multiplyScalar(Xe),N.current=!0;const le=U.intersectObjects(m.current,!1);if(le.length>0){const be=le[0].object,we=be.userData.nodeData,_e=be.userData.nodeGroup;if(h.current!==be){h.current=be,v.current=we.id,D.style.cursor="pointer";const en=[440,554.37,659.25,880,987.77],tn=en[Math.abs(we.label.length)%en.length];B(we.isHub?tn*1.25:tn,"sine",.09,b.x,.05)}const He=new $;_e.getWorldPosition(He);const Le=He.clone().project(ne),st=(Le.x+1)/2*j.width+j.left,gt=(-Le.y+1)/2*j.height+j.top;s({node:we,screenX:st,screenY:gt,isVisible:Le.z<1})}else h.current&&(h.current=null,v.current=null,D.style.cursor="grab",s(null))},he=fe=>{y.current=Date.now(),w();const I=K(fe),j=F.current;if(j.isDragging=!0,j.startX=I.x,j.startY=I.y,j.startLon=j.targetLon,j.startLat=j.targetLat,fe.touches&&fe.touches.length===2){const le=fe.touches[0].clientX-fe.touches[1].clientX,be=fe.touches[0].clientY-fe.touches[1].clientY;j.startPinchDist=Math.hypot(le,be),j.startFov=j.targetFov}D.style.cursor="grabbing"},Ce=fe=>{const I=K(fe),j=F.current;if(j.isDragging){if(y.current=Date.now(),fe.touches&&fe.touches.length===2&&j.startPinchDist>0){const we=fe.touches[0].clientX-fe.touches[1].clientX,_e=fe.touches[0].clientY-fe.touches[1].clientY,He=Math.hypot(we,_e),Le=j.startPinchDist/Math.max(1,He);j.targetFov=Math.max(35,Math.min(85,j.startFov*Le));return}const le=(I.x-j.startX)*.085,be=(I.y-j.startY)*.085;j.targetLon=j.startLon-le,j.targetLat=Math.max(-80,Math.min(80,j.startLat+be))}else oe(I.x,I.y)},Oe=fe=>{fe.preventDefault(),y.current=Date.now();const I=F.current;I.targetFov=Math.max(35,Math.min(85,I.targetFov+fe.deltaY*.04))},ge=fe=>{if(_.current)return;_.current=!0,O(),r.current&&(r.current.style.opacity="1");const I=ne.position.clone(),j=fe.pos.clone().multiplyScalar(.92),le=ne.fov,be=performance.now(),we=650,_e=He=>{const Le=He-be,st=Math.min(1,Le/we),gt=Math.pow(st,3);if(ne.position.lerpVectors(I,j,gt),ne.fov=Yo.lerp(le,115,gt),ne.updateProjectionMatrix(),st<1)requestAnimationFrame(_e);else{const en=fe.data;en.node_type==="STORY"&&en.slug?l(`/story/${en.slug}`):en.url&&(window.open(en.url,"_blank","noopener,noreferrer"),setTimeout(()=>{ne.position.set(0,0,.01),ne.fov=F.current.fov,ne.updateProjectionMatrix(),r.current&&(r.current.style.opacity="0"),_.current=!1},300))}};requestAnimationFrame(_e)},pe=fe=>{y.current=Date.now();const I=K(fe),j=F.current,le=Math.hypot(I.x-j.startX,I.y-j.startY);if(j.isDragging=!1,j.startPinchDist=0,le<5&&h.current&&!_.current){const be=it.get(h.current.userData.nodeData.id);be&&ge(be)}D.style.cursor=h.current?"pointer":"grab"},Ue=fe=>fe.preventDefault();D.addEventListener("mousedown",he),window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",pe),D.addEventListener("wheel",Oe,{passive:!1}),D.addEventListener("contextmenu",Ue),D.addEventListener("touchstart",he,{passive:!0}),window.addEventListener("touchmove",Ce,{passive:!0}),window.addEventListener("touchend",pe);const ke=()=>{if(!D||!Y||!ne)return;const fe=D.clientWidth,I=D.clientHeight;ne.aspect=fe/I,ne.updateProjectionMatrix(),Y.setSize(fe,I)};window.addEventListener("resize",ke);let Ie;const Pe=performance.now(),je=2200,$e=()=>{Ie=requestAnimationFrame($e);const fe=performance.now(),I=(fe-Pe)*.001,j=F.current,le=Math.min(1,(fe-Pe)/je),be=1-Math.pow(1-le,3),we=(Date.now()-y.current)/1e3,_e=Yo.clamp(1+Math.max(0,we-2)*.35,1,4.5);if(!j.isDragging&&!_.current&&(j.targetLon+=.012*(1+(_e-1)*.2)),!_.current){j.lon+=(j.targetLon-j.lon)*.045,j.lat+=(j.targetLat-j.lat)*.045,j.fov+=(j.targetFov-j.fov)*.055,ne.fov=j.fov,ne.updateProjectionMatrix();const ze=Yo.degToRad(90-j.lat),Nt=Yo.degToRad(j.lon),wt=500*Math.sin(ze)*Math.cos(Nt),fn=500*Math.cos(ze),At=500*Math.sin(ze)*Math.sin(Nt);ne.lookAt(wt,fn,At)}const He=x.current,Le=N.current&&!j.isDragging;ct.forEach((ze,Nt)=>{const wt=ze.basePos;ze.pos.lerpVectors(ze.pos,wt,be*.08+.02);const fn=(2.2+Math.sin(Nt*1.3)*1.2)*_e,At=(1.5+Nt%3*.3)*(1+(_e-1)*.3),vt=Math.sin(I*At+Nt*.7)*fn,sn=Xe+vt,rn=z(sn,ze.phi,ze.theta);if(Le&&le>=.8){const ta=rn.distanceTo(He);if(ta<130){const La=(130-ta)/130*18,na=He.clone().sub(rn).normalize();rn.add(na.multiplyScalar(La))}}ze.pos.lerp(rn,.1),ze.group.position.copy(ze.pos),le<1&&(ze.coreMesh.material.opacity=be*.95,ze.haloMesh&&(ze.haloMesh.material.opacity=be*.5)),ze.haloMesh&&(ze.haloMesh.rotation.z+=.01*(1+(_e-1)*.2))}),le<1?(Vt.opacity=be*.45,Fe.opacity=be*.65):Fe.opacity=.55+Math.sin(I*1.5)*.12,zt.forEach(ze=>{ze.progress+=ze.speed*(1+(_e-1)*.2),ze.progress>1&&(ze.progress=0),ze.mesh.position.lerpVectors(ze.edge.source.pos,ze.edge.target.pos,ze.progress),ze.mesh.position.y+=Math.sin(I*3+ze.wobbleOffset)*1.2;const Nt=(.7+Math.sin(ze.progress*Math.PI)*.75)*ze.baseScale;ze.mesh.scale.set(Nt,Nt,Nt)});const st=v.current,gt=st?Qe.get(st):null,en=D.getBoundingClientRect();ct.forEach(ze=>{const Nt=ze.id===st,wt=gt?.has(ze.id),fn=!st||Nt||wt,At=Nt?1.55:wt?1.25:st?.75:1+Math.sin(I*2+ze.phi)*(.04*_e);ze.group.scale.lerp(new $(At,At,At),.2);const vt=Nt?1:wt?.95:st?.15:.88;if(ze.coreMesh.material.opacity=Yo.lerp(ze.coreMesh.material.opacity,vt,.15),ze.haloMesh&&(ze.haloMesh.material.opacity=Nt?.9:fn?.5:.08),ze.labelEl&&le>.6){const sn=new $;ze.group.getWorldPosition(sn);const rn=sn.clone().project(ne);if(rn.z<1&&rn.x>-1.1&&rn.x<1.1&&rn.y>-1.1&&rn.y<1.1){const ta=(rn.x+1)/2*en.width,La=(-rn.y+1)/2*en.height+(ze.isHub?16:13);ze.labelEl.style.transform=`translate3d(${ta}px, ${La}px, 0) translate3d(-50%, 0, 0)`,ze.labelEl.style.display="block",Nt?(ze.labelEl.style.opacity="1",ze.labelEl.style.color="#ffffff",ze.labelEl.style.fontWeight="700"):wt?(ze.labelEl.style.opacity="0.95",ze.labelEl.style.color="#e2e8f0",ze.labelEl.style.fontWeight="600"):st?(ze.labelEl.style.opacity="0.05",ze.labelEl.style.color="#64748b"):(ze.labelEl.style.opacity=ze.isHub?"0.9":"0.45",ze.labelEl.style.color=ze.isHub?"#ffffff":"#cbd5e1")}else ze.labelEl.style.display="none"}});const tn=Gt.attributes.position.array,xn=Gt.attributes.color.array;Ht.forEach((ze,Nt)=>{const wt=Nt*6;tn[wt]=ze.source.pos.x,tn[wt+1]=ze.source.pos.y,tn[wt+2]=ze.source.pos.z,tn[wt+3]=ze.target.pos.x,tn[wt+4]=ze.target.pos.y,tn[wt+5]=ze.target.pos.z;const fn=st&&(ze.sourceId===st||ze.targetId===st),At=!!st;for(let vt=0;vt<2;vt++){const sn=vt===0?ze.source.color:ze.target.color;if(fn)xn[wt+vt*3]=sn.r*1.3,xn[wt+vt*3+1]=sn.g*1.3,xn[wt+vt*3+2]=sn.b*1.3;else if(At)xn[wt+vt*3]=.05,xn[wt+vt*3+1]=.06,xn[wt+vt*3+2]=.09;else{const rn=.24+Math.sin(I*2+Nt)*(.05*_e);xn[wt+vt*3]=rn,xn[wt+vt*3+1]=rn*1.25,xn[wt+vt*3+2]=rn*1.6}}}),Gt.attributes.position.needsUpdate=!0,Gt.attributes.color.needsUpdate=!0,Y.render(me,ne)};return $e(),()=>{cancelAnimationFrame(Ie),window.removeEventListener("resize",ke),D.removeEventListener("mousedown",he),window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",pe),D.removeEventListener("wheel",Oe),D.removeEventListener("contextmenu",Ue),D.removeEventListener("touchstart",he),window.removeEventListener("touchmove",Ce),window.removeEventListener("touchend",pe),Gt.dispose(),Vt.dispose(),Y.domElement&&Y.domElement.parentNode&&Y.domElement.parentNode.removeChild(Y.domElement),Y.dispose()}},[z,l,s,B,O,w]);const T=()=>{y.current=Date.now();const D=F.current;D.targetLon=0,D.targetLat=5,D.targetFov=65,B(520,"sine",.08,0,.05)};return Ne.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[Ne.jsx("div",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",cursor:"grab",userSelect:"none",zIndex:1}}),Ne.jsx("div",{ref:i,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"hidden",zIndex:5}}),Ne.jsx("div",{ref:r,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",opacity:0,background:"radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.25) 50%, rgba(3, 5, 10, 0.8) 100%)",boxShadow:"inset 0 0 100px rgba(0, 240, 255, 0.4)",transition:"opacity 0.45s ease-out",zIndex:50}}),Ne.jsxs("div",{style:{position:"fixed",bottom:"16px",left:"20px",display:"flex",alignItems:"center",gap:"12px",zIndex:20,background:"rgba(10, 16, 28, 0.75)",backdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.08)",padding:"6px 14px",borderRadius:"999px",fontSize:"12px",color:"#94a3b8",userSelect:"none"},children:[Ne.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[Ne.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#a855f7"}}),Ne.jsx("span",{children:"24 Notes • 5 Clusters • 360° Celestial Sphere"})]}),Ne.jsx("span",{style:{color:"rgba(255, 255, 255, 0.15)"},children:"|"}),Ne.jsx("button",{onClick:T,title:"Reset 360° look direction to center",style:{background:"transparent",border:"none",color:"#38bdf8",cursor:"pointer",fontSize:"12px",padding:0},children:"Reset View"}),Ne.jsx("span",{style:{color:"rgba(255, 255, 255, 0.15)"},children:"|"}),Ne.jsx("button",{onClick:()=>C(D=>!D),title:E?"Mute audio chimes":"Enable audio chimes",style:{background:"transparent",border:"none",color:E?"#34d399":"#64748b",cursor:"pointer",fontSize:"12px",padding:0},children:E?"Audio On":"Audio Off"})]})]})}function S2({hoverInfo:s}){if(!s||!s.node||!s.isVisible)return null;const{node:e,screenX:i,screenY:r}=s;return Ne.jsxs("div",{style:{position:"fixed",left:`${i+16}px`,top:`${r-14}px`,pointerEvents:"none",zIndex:50,transform:"translate3d(0, 0, 0)",display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(5, 8, 16, 0.8)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"6px",padding:"5px 12px",color:"#ffffff",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.6)",whiteSpace:"nowrap",fontSize:"13px",fontWeight:"500",letterSpacing:"0.02em"},children:[Ne.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:e.color||"#00f0ff",boxShadow:`0 0 8px ${e.color||"#00f0ff"}`}}),Ne.jsx("span",{style:{color:"#f8fafc"},children:e.label}),Ne.jsx("span",{style:{color:"#64748b",fontSize:"11px"},children:"➔"})]})}function y2(){const[s,e]=Re.useState(null);return Ne.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",backgroundColor:"#060913"},children:[Ne.jsx(x2,{onHoverNode:e}),Ne.jsx(S2,{hoverInfo:s})]})}const Cx=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();const M2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const b2=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase());const Dv=s=>{const e=b2(s);return e.charAt(0).toUpperCase()+e.slice(1)};var lh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const E2=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},T2=Re.createContext({}),A2=()=>Re.useContext(T2),R2=Re.forwardRef(({color:s,size:e,strokeWidth:i,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...p},m)=>{const{size:h=24,strokeWidth:v=2,absoluteStrokeWidth:_=!1,color:g="currentColor",className:M=""}=A2()??{},E=r??_?Number(i??v)*24/Number(e??h):i??v;return Re.createElement("svg",{ref:m,...lh,width:e??h??lh.width,height:e??h??lh.height,stroke:s??g,strokeWidth:E,className:Cx("lucide",M,l),...!c&&!E2(p)&&{"aria-hidden":"true"},...p},[...d.map(([C,y])=>Re.createElement(C,y)),...Array.isArray(c)?c:[c]])});const _r=(s,e)=>{const i=Re.forwardRef(({className:r,...l},c)=>Re.createElement(R2,{ref:c,iconNode:e,className:Cx(`lucide-${M2(Dv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Dv(s),i};const C2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],w2=_r("arrow-left",C2);const D2=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],U2=_r("calendar",D2);const L2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],N2=_r("check",L2);const O2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],P2=_r("clock",O2);const I2=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],z2=_r("pen-line",I2);const B2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],F2=_r("share-2",B2);const H2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],G2=_r("sparkles",H2);const V2=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],k2=_r("tag",V2);function Uv(){const{slug:s}=xM(),e=sp(),[i,r]=Re.useState(null),[l,c]=Re.useState(!0),[d,p]=Re.useState(0),[m,h]=Re.useState(!1);Re.useEffect(()=>{const g=v2.find(M=>M.slug===s||M.id===s);g?(r(g),c(!1)):fetch(`/api/stories/${s}/`).then(M=>{if(M.ok)return M.json();throw new Error("Not found")}).then(M=>{r(M),c(!1)}).catch(()=>{r(null),c(!1)}),window.scrollTo(0,0)},[s]),Re.useEffect(()=>{const g=()=>{const M=document.documentElement.scrollHeight-window.innerHeight;M>0&&p(window.scrollY/M*100)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const v=()=>{navigator.clipboard.writeText(window.location.href),h(!0),setTimeout(()=>h(!1),2e3)},_=g=>{if(!g)return null;const M=g.split(`
`),E=[];let C=!1,y=[];return M.forEach((x,N)=>{if(x.trim().startsWith("```")){C?(E.push(Ne.jsx("pre",{style:{background:"#0d131f",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",padding:"16px 20px",overflowX:"auto",fontSize:"13px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",color:"#7dd3fc",margin:"24px 0",lineHeight:"1.6"},children:Ne.jsx("code",{children:y.join(`
`)})},`code-${N}`)),y=[],C=!1):C=!0;return}if(C){y.push(x);return}if(x.startsWith("# "))E.push(Ne.jsx("h1",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:"800",color:"#ffffff",letterSpacing:"-0.02em",margin:"32px 0 16px 0",lineHeight:"1.2"},children:x.replace("# ","")},N));else if(x.startsWith("## "))E.push(Ne.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",color:"#f8fafc",letterSpacing:"-0.01em",margin:"36px 0 14px 0",lineHeight:"1.3"},children:x.replace("## ","")},N));else if(x.startsWith("### "))E.push(Ne.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#e2e8f0",margin:"24px 0 10px 0"},children:x.replace("### ","")},N));else if(x.startsWith("> "))E.push(Ne.jsx("blockquote",{style:{borderLeft:"3px solid #ec4899",background:"rgba(236, 72, 153, 0.08)",padding:"14px 20px",borderRadius:"0 8px 8px 0",margin:"24px 0",fontStyle:"italic",color:"#f1f5f9",fontSize:"16px",lineHeight:"1.6"},children:x.replace("> ","").replace(/"/g,"")},N));else if(x.match(/^!\[(.*?)\]\((.*?)\)/)){const F=x.match(/^!\[(.*?)\]\((.*?)\)/),w=F[1],B=F[2];E.push(Ne.jsxs("figure",{style:{margin:"32px 0"},children:[Ne.jsx("img",{src:B,alt:w,style:{width:"100%",maxHeight:"520px",objectFit:"cover",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 12px 35px rgba(0, 0, 0, 0.4)"}}),w&&Ne.jsx("figcaption",{style:{textAlign:"center",fontSize:"12px",color:"#94a3b8",marginTop:"8px",fontStyle:"italic"},children:w})]},N))}else x.trim()==="---"?E.push(Ne.jsx("hr",{style:{border:"none",borderTop:"1px solid rgba(255, 255, 255, 0.1)",margin:"36px 0"}},N)):x.trim().startsWith("- ")||x.trim().startsWith("1. ")||x.trim().startsWith("2. ")||x.trim().startsWith("3. ")?E.push(Ne.jsx("li",{style:{fontSize:"16px",lineHeight:"1.8",color:"#cbd5e1",marginLeft:"24px",marginBottom:"6px"},children:x.replace(/^-\s|^\d+\.\s/,"")},N)):x.trim().length>0&&E.push(Ne.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",color:"#cbd5e1",margin:"0 0 18px 0",fontWeight:"400"},children:x},N))}),E};return l?Ne.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#080c16",color:"#00f0ff",fontSize:"16px",gap:"12px"},children:[Ne.jsx(G2,{className:"animate-spin"}),Ne.jsx("span",{children:"Loading Story from Nexus..."})]}):i?Ne.jsxs("div",{style:{minHeight:"100vh",background:"#080c16",color:"#e2e8f0",position:"relative"},children:[Ne.jsx("div",{style:{position:"fixed",top:0,left:0,height:"3px",width:`${d}%`,background:"linear-gradient(90deg, #ec4899, #00f0ff)",zIndex:100,transition:"width 0.1s ease-out"}}),Ne.jsxs("header",{style:{position:"sticky",top:0,zIndex:40,background:"rgba(8, 12, 22, 0.85)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Ne.jsxs("button",{onClick:()=>e("/"),style:{display:"flex",alignItems:"center",gap:"8px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#cbd5e1",padding:"6px 14px",borderRadius:"999px",fontSize:"13px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.borderColor="#00f0ff",g.currentTarget.style.color="#00f0ff"},onMouseLeave:g=>{g.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",g.currentTarget.style.color="#cbd5e1"},children:[Ne.jsx(w2,{size:15}),Ne.jsx("span",{children:"Neural Sphere"})]}),Ne.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[Ne.jsxs("button",{onClick:v,title:"Share story link",style:{display:"flex",alignItems:"center",gap:"6px",background:"transparent",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#94a3b8",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",cursor:"pointer"},children:[m?Ne.jsx(N2,{size:13,color:"#22c55e"}):Ne.jsx(F2,{size:13}),Ne.jsx("span",{children:m?"Link Copied":"Share"})]}),Ne.jsxs("a",{href:"/admin/games/story/",target:"_blank",rel:"noopener noreferrer",title:"Open Story in Django Admin Editor",style:{display:"flex",alignItems:"center",gap:"5px",background:"rgba(236, 72, 153, 0.15)",border:"1px solid rgba(236, 72, 153, 0.35)",color:"#f472b6",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",fontWeight:"600",textDecoration:"none"},children:[Ne.jsx(z2,{size:13}),Ne.jsx("span",{children:"Admin Edit"})]})]})]}),Ne.jsxs("main",{style:{maxWidth:"760px",margin:"0 auto",padding:"40px 20px 100px 20px"},children:[i.cover_url&&Ne.jsx("div",{style:{marginBottom:"36px",borderRadius:"16px",overflow:"hidden",border:"1px solid rgba(255, 255, 255, 0.1)",maxHeight:"420px"},children:Ne.jsx("img",{src:i.cover_url,alt:i.title,style:{width:"100%",height:"100%",maxHeight:"420px",objectFit:"cover",display:"block"}})}),Ne.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",fontSize:"12px",color:"#94a3b8",marginBottom:"16px"},children:[i.published_at&&Ne.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[Ne.jsx(U2,{size:13}),i.published_at]}),i.reading_time&&Ne.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[Ne.jsx(P2,{size:13}),i.reading_time]}),i.author&&Ne.jsxs("span",{style:{background:"rgba(0, 240, 255, 0.1)",color:"#00f0ff",padding:"2px 8px",borderRadius:"4px",fontWeight:"500"},children:["By ",i.author]})]}),Ne.jsx("h1",{style:{fontSize:"clamp(32px, 5vw, 48px)",fontWeight:"800",color:"#ffffff",letterSpacing:"-0.03em",lineHeight:"1.15",margin:"0 0 16px 0"},children:i.title}),i.subtitle&&Ne.jsx("p",{style:{fontSize:"18px",lineHeight:"1.5",color:"#94a3b8",marginBottom:"32px",fontWeight:"400"},children:i.subtitle}),Ne.jsx("hr",{style:{border:"none",borderTop:"1px solid rgba(255, 255, 255, 0.1)",marginBottom:"36px"}}),Ne.jsx("article",{style:{fontSize:"16px",color:"#cbd5e1"},children:_(i.content)}),i.tags&&Ne.jsx("div",{style:{marginTop:"48px",paddingTop:"24px",borderTop:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",flexWrap:"wrap",gap:"8px"},children:(Array.isArray(i.tags)?i.tags:String(i.tags).split(",")).map((g,M)=>Ne.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"11px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",padding:"4px 10px",borderRadius:"999px",color:"#94a3b8"},children:[Ne.jsx(k2,{size:11}),String(g).trim()]},M))}),Ne.jsxs("div",{style:{marginTop:"60px",textAlign:"center",padding:"32px",background:"rgba(13, 19, 33, 0.6)",border:"1px solid rgba(0, 240, 255, 0.2)",borderRadius:"16px"},children:[Ne.jsx("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#ffffff",marginBottom:"8px"},children:"Ready to explore other constellation nodes?"}),Ne.jsx("p",{style:{fontSize:"13px",color:"#64748b",marginBottom:"20px"},children:"Return to the 3D neural nexus to explore games, tools, and social links."}),Ne.jsx("button",{onClick:()=>e("/"),style:{background:"linear-gradient(90deg, #00f0ff, #38bdf8)",color:"#080c16",fontWeight:"700",fontSize:"14px",padding:"10px 24px",borderRadius:"999px",border:"none",cursor:"pointer",boxShadow:"0 0 20px rgba(0, 240, 255, 0.4)"},children:"Return to 3D Neural Nexus ➔"})]})]})]}):Ne.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#080c16",color:"#e2e8f0",textAlign:"center",padding:"24px"},children:[Ne.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"8px"},children:"Story Node Not Found"}),Ne.jsx("p",{style:{color:"#64748b",marginBottom:"24px"},children:"The requested memory node is either unindexed or has been relocated."}),Ne.jsx("button",{onClick:()=>e("/"),style:{background:"#00f0ff",color:"#080c16",padding:"10px 20px",borderRadius:"999px",fontWeight:"600",border:"none",cursor:"pointer"},children:"Return to Neural Sphere"})]})}function X2(){return Ne.jsx(FM,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:Ne.jsxs(IM,{children:[Ne.jsx(tl,{path:"/",element:Ne.jsx(y2,{})}),Ne.jsx(tl,{path:"/story/:slug",element:Ne.jsx(Uv,{})}),Ne.jsx(tl,{path:"/post/:slug",element:Ne.jsx(Uv,{})}),Ne.jsx(tl,{path:"*",element:Ne.jsx(OM,{to:"/",replace:!0})})]})})}ky.createRoot(document.getElementById("root")).render(Ne.jsx(Re.StrictMode,{children:Ne.jsx(X2,{})}));
