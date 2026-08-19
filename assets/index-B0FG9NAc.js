function Ty(s,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in s)){const c=Object.getOwnPropertyDescriptor(r,l);c&&Object.defineProperty(s,l,c.get?c:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ay(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var xd={exports:{}},Go={};var e_;function Ry(){if(e_)return Go;e_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var t_;function Cy(){return t_||(t_=1,xd.exports=Ry()),xd.exports}var Ie=Cy(),Sd={exports:{}},ct={};var n_;function wy(){if(n_)return ct;n_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function b(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function v(U,K,Re){this.props=U,this.context=K,this.refs=S,this.updater=Re||E}v.prototype.isReactComponent={},v.prototype.setState=function(U,K){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,K,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=v.prototype;function I(U,K,Re){this.props=U,this.context=K,this.refs=S,this.updater=Re||E}var w=I.prototype=new O;w.constructor=I,C(w,v.prototype),w.isPureReactComponent=!0;var N=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(U,K,Re){var we=Re.ref;return{$$typeof:s,type:U,key:K,ref:we!==void 0?we:null,props:Re}}function Z(U,K){return P(U.type,K,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function J(U){var K={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Re){return K[Re]})}var de=/\/+/g;function me(U,K){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):K.toString(36)}function $(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(K){U.status==="pending"&&(U.status="fulfilled",U.value=K)},function(K){U.status==="pending"&&(U.status="rejected",U.reason=K)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function B(U,K,Re,we,Be){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(se){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case s:case e:xe=!0;break;case x:return xe=U._init,B(xe(U._payload),K,Re,we,Be)}}if(xe)return Be=Be(U),xe=we===""?"."+me(U,0):we,N(Be)?(Re="",xe!=null&&(Re=xe.replace(de,"$&/")+"/"),B(Be,K,Re,"",function(at){return at})):Be!=null&&(k(Be)&&(Be=Z(Be,Re+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(de,"$&/")+"/")+xe)),K.push(Be)),1;xe=0;var Se=we===""?".":we+":";if(N(U))for(var Ve=0;Ve<U.length;Ve++)we=U[Ve],se=Se+me(we,Ve),xe+=B(we,K,Re,se,Be);else if(Ve=b(U),typeof Ve=="function")for(U=Ve.call(U),Ve=0;!(we=U.next()).done;)we=we.value,se=Se+me(we,Ve++),xe+=B(we,K,Re,se,Be);else if(se==="object"){if(typeof U.then=="function")return B($(U),K,Re,we,Be);throw K=String(U),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return xe}function G(U,K,Re){if(U==null)return U;var we=[],Be=0;return B(U,we,"","",function(se){return K.call(Re,se,Be++)}),we}function te(U){if(U._status===-1){var K=U._result;K=K(),K.then(function(Re){(U._status===0||U._status===-1)&&(U._status=1,U._result=Re)},function(Re){(U._status===0||U._status===-1)&&(U._status=2,U._result=Re)}),U._status===-1&&(U._status=0,U._result=K)}if(U._status===1)return U._result.default;throw U._result}var _e=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Ae={map:G,forEach:function(U,K,Re){G(U,function(){K.apply(this,arguments)},Re)},count:function(U){var K=0;return G(U,function(){K++}),K},toArray:function(U){return G(U,function(K){return K})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ct.Activity=_,ct.Children=Ae,ct.Component=v,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=I,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ct.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},ct.cache=function(U){return function(){return U.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(U,K,Re){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var we=C({},U.props),Be=U.key;if(K!=null)for(se in K.key!==void 0&&(Be=""+K.key),K)!T.call(K,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&K.ref===void 0||(we[se]=K[se]);var se=arguments.length-2;if(se===1)we.children=Re;else if(1<se){for(var xe=Array(se),Se=0;Se<se;Se++)xe[Se]=arguments[Se+2];we.children=xe}return P(U.type,Be,we)},ct.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ct.createElement=function(U,K,Re){var we,Be={},se=null;if(K!=null)for(we in K.key!==void 0&&(se=""+K.key),K)T.call(K,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Be[we]=K[we]);var xe=arguments.length-2;if(xe===1)Be.children=Re;else if(1<xe){for(var Se=Array(xe),Ve=0;Ve<xe;Ve++)Se[Ve]=arguments[Ve+2];Be.children=Se}if(U&&U.defaultProps)for(we in xe=U.defaultProps,xe)Be[we]===void 0&&(Be[we]=xe[we]);return P(U,se,Be)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:p,render:U}},ct.isValidElement=k,ct.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:te}},ct.memo=function(U,K){return{$$typeof:h,type:U,compare:K===void 0?null:K}},ct.startTransition=function(U){var K=z.T,Re={};z.T=Re;try{var we=U(),Be=z.S;Be!==null&&Be(Re,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(L,_e)}catch(se){_e(se)}finally{K!==null&&Re.types!==null&&(K.types=Re.types),z.T=K}},ct.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ct.use=function(U){return z.H.use(U)},ct.useActionState=function(U,K,Re){return z.H.useActionState(U,K,Re)},ct.useCallback=function(U,K){return z.H.useCallback(U,K)},ct.useContext=function(U){return z.H.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U,K){return z.H.useDeferredValue(U,K)},ct.useEffect=function(U,K){return z.H.useEffect(U,K)},ct.useEffectEvent=function(U){return z.H.useEffectEvent(U)},ct.useId=function(){return z.H.useId()},ct.useImperativeHandle=function(U,K,Re){return z.H.useImperativeHandle(U,K,Re)},ct.useInsertionEffect=function(U,K){return z.H.useInsertionEffect(U,K)},ct.useLayoutEffect=function(U,K){return z.H.useLayoutEffect(U,K)},ct.useMemo=function(U,K){return z.H.useMemo(U,K)},ct.useOptimistic=function(U,K){return z.H.useOptimistic(U,K)},ct.useReducer=function(U,K,Re){return z.H.useReducer(U,K,Re)},ct.useRef=function(U){return z.H.useRef(U)},ct.useState=function(U){return z.H.useState(U)},ct.useSyncExternalStore=function(U,K,Re){return z.H.useSyncExternalStore(U,K,Re)},ct.useTransition=function(){return z.H.useTransition()},ct.version="19.2.0",ct}var i_;function jh(){return i_||(i_=1,Sd.exports=wy()),Sd.exports}var Le=jh();const Dy=Ay(Le),Uy=Ty({__proto__:null,default:Dy},[Le]);var yd={exports:{}},Vo={},Md={exports:{}},bd={};var a_;function Ly(){return a_||(a_=1,(function(s){function e(B,G){var te=B.length;B.push(G);e:for(;0<te;){var _e=te-1>>>1,Ae=B[_e];if(0<l(Ae,G))B[_e]=G,B[te]=Ae,te=_e;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],te=B.pop();if(te!==G){B[0]=te;e:for(var _e=0,Ae=B.length,U=Ae>>>1;_e<U;){var K=2*(_e+1)-1,Re=B[K],we=K+1,Be=B[we];if(0>l(Re,te))we<Ae&&0>l(Be,Re)?(B[_e]=Be,B[we]=te,_e=we):(B[_e]=Re,B[K]=te,_e=K);else if(we<Ae&&0>l(Be,te))B[_e]=Be,B[we]=te,_e=we;else break e}}return G}function l(B,G){var te=B.sortIndex-G.sortIndex;return te!==0?te:B.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,_=null,g=3,b=!1,E=!1,C=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var G=i(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function N(B){if(C=!1,w(B),!E)if(i(m)!==null)E=!0,L||(L=!0,J());else{var G=i(h);G!==null&&$(N,G.startTime-B)}}var L=!1,z=-1,T=5,P=-1;function Z(){return S?!0:!(s.unstable_now()-P<T)}function k(){if(S=!1,L){var B=s.unstable_now();P=B;var G=!0;try{e:{E=!1,C&&(C=!1,O(z),z=-1),b=!0;var te=g;try{t:{for(w(B),_=i(m);_!==null&&!(_.expirationTime>B&&Z());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,g=_.priorityLevel;var Ae=_e(_.expirationTime<=B);if(B=s.unstable_now(),typeof Ae=="function"){_.callback=Ae,w(B),G=!0;break t}_===i(m)&&r(m),w(B)}else r(m);_=i(m)}if(_!==null)G=!0;else{var U=i(h);U!==null&&$(N,U.startTime-B),G=!1}}break e}finally{_=null,g=te,b=!1}G=void 0}}finally{G?J():L=!1}}}var J;if(typeof I=="function")J=function(){I(k)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,me=de.port2;de.port1.onmessage=k,J=function(){me.postMessage(null)}}else J=function(){v(k,0)};function $(B,G){z=v(function(){B(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var te=g;g=G;try{return B()}finally{g=te}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=g;g=B;try{return G()}finally{g=te}},s.unstable_scheduleCallback=function(B,G,te){var _e=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?_e+te:_e):te=_e,B){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=te+Ae,B={id:x++,callback:G,priorityLevel:B,startTime:te,expirationTime:Ae,sortIndex:-1},te>_e?(B.sortIndex=te,e(h,B),i(m)===null&&B===i(h)&&(C?(O(z),z=-1):C=!0,$(N,te-_e))):(B.sortIndex=Ae,e(m,B),E||b||(E=!0,L||(L=!0,J()))),B},s.unstable_shouldYield=Z,s.unstable_wrapCallback=function(B){var G=g;return function(){var te=g;g=G;try{return B.apply(this,arguments)}finally{g=te}}}})(bd)),bd}var r_;function Ny(){return r_||(r_=1,Md.exports=Ly()),Md.exports}var Ed={exports:{}},Nn={};var s_;function Oy(){if(s_)return Nn;s_=1;var s=jh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:x}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},Nn.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},Nn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:b}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Nn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,h){return m(h)},Nn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.0",Nn}var o_;function Rv(){if(o_)return Ed.exports;o_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=Oy(),Ed.exports}var l_;function Py(){if(l_)return Vo;l_=1;var s=Ny(),e=jh(),i=Rv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=f;break}if(R===o){y=!0,o=u,a=f;break}R=R.sibling}if(!y){for(R=f.child;R;){if(R===a){y=!0,a=f,o=u;break}if(R===o){y=!0,o=f,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var $=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},_e=[],Ae=-1;function U(t){return{current:t}}function K(t){0>Ae||(t.current=_e[Ae],_e[Ae]=null,Ae--)}function Re(t,n){Ae++,_e[Ae]=t.current,t.current=n}var we=U(null),Be=U(null),se=U(null),xe=U(null);function Se(t,n){switch(Re(se,n),Re(Be,t),Re(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b0(n),t=E0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(we),Re(we,t)}function Ve(){K(we),K(Be),K(se)}function at(t){t.memoizedState!==null&&Re(xe,t);var n=we.current,a=E0(n,t.type);n!==a&&(Re(Be,t),Re(we,a))}function $e(t){Be.current===t&&(K(we),K(Be)),xe.current===t&&(K(xe),zo._currentValue=te)}var Wt,lt;function pt(t){if(Wt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+lt}var mt=!1;function gt(t,n){if(!t||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(fe){var le=fe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(fe){le=fe}t.call(Me.prototype)}}else{try{throw Error()}catch(fe){le=fe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],R=f[1];if(y&&R){var H=y.split(`
`),ie=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ie.length)for(o=H.length-1,u=ie.length-1;1<=o&&0<=u&&H[o]!==ie[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ie[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ie[u]){var he=`
`+H[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pt(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return pt(t.type);case 16:return pt("Lazy");case 13:return t.child!==n&&n!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return pt("Activity");default:return""}}function Kt(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qt=Object.prototype.hasOwnProperty,an=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,pe=s.unstable_shouldYield,F=s.unstable_requestPaint,Ce=s.unstable_now,Ye=s.unstable_getCurrentPriorityLevel,D=s.unstable_ImmediatePriority,M=s.unstable_UserBlockingPriority,Y=s.unstable_NormalPriority,ee=s.unstable_LowPriority,V=s.unstable_IdlePriority,ye=s.log,be=s.unstable_setDisableYieldValue,ce=null,ue=null;function Ee(t){if(typeof ye=="function"&&be(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(ce,t)}catch{}}var Ne=Math.clz32?Math.clz32:je,De=Math.log,Oe=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(De(t)/Oe|0)|0}var tt=256,ot=262144,W=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ue(o):(y&=R,y!==0?u=Ue(y):a||(a=R&~t,a!==0&&(u=Ue(a))))):(R=o&~f,R!==0?u=Ue(R):y!==0?u=Ue(y):a||(a=o&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $t(t,n,a,o,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ie=t.hiddenUpdates;for(a=y&~a;0<a;){var he=31-Ne(a),Me=1<<he;R[he]=0,H[he]=-1;var le=ie[he];if(le!==null)for(ie[he]=null,he=0;he<le.length;he++){var fe=le[he];fe!==null&&(fe.lane&=-536870913)}a&=~Me}o!==0&&Pt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function Pt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ne(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Qn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ne(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:Qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function js(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Y0(t.type))}function Xr(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Oi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Oi,Tn="__reactProps$"+Oi,Gn="__reactContainer$"+Oi,fr="__reactEvents$"+Oi,hl="__reactListeners$"+Oi,pl="__reactHandles$"+Oi,dr="__reactResources$"+Oi,Ta="__reactMarker$"+Oi;function Aa(t){delete t[fn],delete t[Tn],delete t[fr],delete t[hl],delete t[pl]}function Qi(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=U0(t);t!==null;){if(a=t[fn])return a;t=U0(t)}return n}t=a,a=t.parentNode}return null}function Ji(t){if(t=t[fn]||t[Gn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function hr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[dr];return n||(n=t[dr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Ta]=!0}var ml=new Set,A={};function q(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)ml.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Fe={};function Xe(t){return Qt.call(Fe,t)?!0:Qt.call(re,t)?!1:ae.test(t)?Fe[t]=!0:(re[t]=!0,!1)}function ze(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ft(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var It=/[\n"\\]/g;function zt(t){return t.replace(It,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,a,o,u,f,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+nt(n)):t.value!==""+nt(n)&&(t.value=""+nt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?vt(t,y,nt(n)):a!=null?vt(t,y,nt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+nt(R):t.removeAttribute("name")}function Ln(t,n,a,o,u,f,y,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ct(t);return}a=a!=null?""+nt(a):"",n=n!=null?""+nt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Ct(t)}function vt(t,n,a){n==="number"&&qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+nt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function jn(t,n,a){if(n!=null&&(n=""+nt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+nt(a):""}function Ei(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if($(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=nt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ct(t)}function $n(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Bt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&tn(t,f,n[f])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pr(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wr=null,qr=null;function Mp(t){var n=Ji(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(r(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&en(o)}break e;case"textarea":jn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var _u=!1;function bp(t,n,a){if(_u)return t(n,a);_u=!0;try{var o=t(n);return o}finally{if(_u=!1,(Wr!==null||qr!==null)&&(nc(),Wr&&(n=Wr,t=qr,qr=Wr=null,Mp(n),t)))for(n=0;n<t.length;n++)Mp(t[n])}}function $s(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if($i)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){vu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{vu=!1}var wa=null,xu=null,gl=null;function Ep(){if(gl)return gl;var t,n=xu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Tp(){return!1}function Vn(t){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:Tp,this.isPropagationStopped=Tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Vn(mr),to=_({},mr,{view:0,detail:0}),bx=Vn(to),Su,yu,no,Sl=_({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Su=t.screenX-no.screenX,yu=t.screenY-no.screenY):yu=Su=0,no=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),Ap=Vn(Sl),Ex=_({},Sl,{dataTransfer:0}),Tx=Vn(Ex),Ax=_({},to,{relatedTarget:0}),Mu=Vn(Ax),Rx=_({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=Vn(Rx),wx=_({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dx=Vn(wx),Ux=_({},mr,{data:0}),Rp=Vn(Ux),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ox[t])?!!n[t]:!1}function bu(){return Px}var Ix=_({},to,{key:function(t){if(t.key){var n=Lx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zx=Vn(Ix),Bx=_({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Vn(Bx),Fx=_({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Hx=Vn(Fx),Gx=_({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=Vn(Gx),kx=_({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=Vn(kx),Wx=_({},mr,{newState:0,oldState:0}),qx=Vn(Wx),Yx=[9,13,27,32],Eu=$i&&"CompositionEvent"in window,io=null;$i&&"documentMode"in document&&(io=document.documentMode);var Zx=$i&&"TextEvent"in window&&!io,wp=$i&&(!Eu||io&&8<io&&11>=io),Dp=" ",Up=!1;function Lp(t,n){switch(t){case"keyup":return Yx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function Kx(t,n){switch(t){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return t=n.data,t===Dp&&Up?null:t;default:return null}}function Qx(t,n){if(Yr)return t==="compositionend"||!Eu&&Lp(t,n)?(t=Ep(),gl=xu=wa=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wp&&n.locale!=="ko"?null:n.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Jx[t.type]:n==="textarea"}function Pp(t,n,a,o){Wr?qr?qr.push(o):qr=[o]:Wr=o,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ao=null,ro=null;function jx(t){_0(t,0)}function yl(t){var n=hr(t);if(en(n))return t}function Ip(t,n){if(t==="change")return n}var zp=!1;if($i){var Tu;if($i){var Au="oninput"in document;if(!Au){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Au=typeof Bp.oninput=="function"}Tu=Au}else Tu=!1;zp=Tu&&(!document.documentMode||9<document.documentMode)}function Fp(){ao&&(ao.detachEvent("onpropertychange",Hp),ro=ao=null)}function Hp(t){if(t.propertyName==="value"&&yl(ro)){var n=[];Pp(n,ro,t,gu(t)),bp(jx,n)}}function $x(t,n,a){t==="focusin"?(Fp(),ao=n,ro=a,ao.attachEvent("onpropertychange",Hp)):t==="focusout"&&Fp()}function eS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(ro)}function tS(t,n){if(t==="click")return yl(n)}function nS(t,n){if(t==="input"||t==="change")return yl(n)}function iS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:iS;function so(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,n){var a=Gp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qt(t.document)}return n}function Ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var aS=$i&&"documentMode"in document&&11>=document.documentMode,Zr=null,Cu=null,oo=null,wu=!1;function Wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Zr==null||Zr!==qt(o)||(o=Zr,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=cc(Cu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Zr)))}function gr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Kr={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Du={},qp={};$i&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function _r(t){if(Du[t])return Du[t];if(!Kr[t])return t;var n=Kr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Du[t]=n[a];return t}var Yp=_r("animationend"),Zp=_r("animationiteration"),Kp=_r("animationstart"),rS=_r("transitionrun"),sS=_r("transitionstart"),oS=_r("transitioncancel"),Qp=_r("transitionend"),Jp=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Ai(t,n){Jp.set(t,n),q(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],Qr=0,Lu=0;function bl(){for(var t=Qr,n=Lu=Qr=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&jp(a,u,f)}}function El(t,n,a,o){fi[Qr++]=t,fi[Qr++]=n,fi[Qr++]=a,fi[Qr++]=o,Lu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Nu(t,n,a,o){return El(t,n,a,o),Tl(t)}function vr(t,n){return El(t,null,null,n),Tl(t)}function jp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ne(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Tl(t){if(50<Do)throw Do=0,kf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Jr={};function lS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,o){return new lS(t,n,a,o)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $p(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,f){var y=0;if(o=t,typeof t=="function")Ou(t)&&(y=1);else if(typeof t=="string")y=hy(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=ti(31,a,n,u),t.elementType=P,t.lanes=f,t;case C:return xr(a.children,u,f,n);case S:y=8,u|=24;break;case v:return t=ti(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case N:return t=ti(13,a,n,u),t.elementType=N,t.lanes=f,t;case L:return t=ti(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:y=10;break e;case O:y=9;break e;case w:y=11;break e;case z:y=14;break e;case T:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ti(y,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function xr(t,n,a,o){return t=ti(7,t,o,n),t.lanes=a,t}function Pu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function em(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function Iu(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var tm=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=tm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Kt(n)},tm.set(t,n),n)}return{value:t,source:n,stack:Kt(n)}}var jr=[],$r=0,Rl=null,lo=0,hi=[],pi=0,Da=null,Ii=1,zi="";function ta(t,n){jr[$r++]=lo,jr[$r++]=Rl,Rl=t,lo=n}function nm(t,n,a){hi[pi++]=Ii,hi[pi++]=zi,hi[pi++]=Da,Da=t;var o=Ii;t=zi;var u=32-Ne(o)-1;o&=~(1<<u),a+=1;var f=32-Ne(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ii=1<<32-Ne(n)+u|a<<u|o,zi=f+t}else Ii=1<<f|a<<u|o,zi=t}function zu(t){t.return!==null&&(ta(t,1),nm(t,1,0))}function Bu(t){for(;t===Rl;)Rl=jr[--$r],jr[$r]=null,lo=jr[--$r],jr[$r]=null;for(;t===Da;)Da=hi[--pi],hi[pi]=null,zi=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null}function im(t,n){hi[pi++]=Ii,hi[pi++]=zi,hi[pi++]=Da,Ii=n.id,zi=n.overflow,Da=t}var An=null,Jt=null,Et=!1,Ua=null,mi=!1,Fu=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(di(n,t)),Fu}function am(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[Tn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)St(Lo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||y0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||La(t,!0)}function rm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:An=An.return}}function es(t){if(t!==An)return!1;if(!Et)return rm(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&Jt&&La(t),rm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=D0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=D0(t)}else n===27?(n=Jt,qa(t.type)?(t=cd,cd=null,Jt=t):Jt=n):Jt=An?_i(t.stateNode.nextSibling):null;return!0}function Sr(){Jt=An=null,Et=!1}function Hu(){var t=Ua;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Ua=null),t}function co(t){Ua===null?Ua=[t]:Ua.push(t)}var Gu=U(null),yr=null,na=null;function Na(t,n,a){Re(Gu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Gu.current,K(Gu)}function Vu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Vu(f.return,a,t),o||(y=null);break e}f=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Vu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ts(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;ei(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===xe.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Mr(t){yr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return sm(yr,t)}function wl(t,n){return yr===null&&Mr(t),sm(t,n)}function sm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(r(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var cS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},uS=s.unstable_scheduleCallback,fS=s.unstable_NormalPriority,hn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new cS,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&uS(fS,function(){t.controller.abort()})}var fo=null,Wu=0,ns=0,is=null;function dS(t,n){if(fo===null){var a=fo=[];Wu=0,ns=Kf(),is={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(om,om),n}function om(){if(--Wu===0&&fo!==null){is!==null&&(is.status="fulfilled");var t=fo;fo=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function hS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lm=B.S;B.S=function(t,n){Wg=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dS(t,n),lm!==null&&lm(t,n)};var br=U(null);function qu(){var t=br.current;return t!==null?t:Yt.pooledCache}function Dl(t,n){n===null?Re(br,br.current):Re(br,n.pool)}function cm(){var t=qu();return t===null?null:{parent:hn._currentValue,pool:t}}var as=Error(r(460)),Yu=Error(r(474)),Ul=Error(r(542)),Ll={then:function(){}};function um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hm(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hm(t),t}throw Tr=n,as}}function Er(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tr=a,as):a}}var Tr=null;function dm(){if(Tr===null)throw Error(r(459));var t=Tr;return Tr=null,t}function hm(t){if(t===as||t===Ul)throw Error(r(483))}var rs=null,ho=0;function Nl(t){var n=ho;return ho+=1,rs===null&&(rs=[]),fm(rs,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function pm(t){function n(Q,X){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[X],Q.flags|=16):ne.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ea(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<X?(Q.flags|=67108866,X):ne):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function y(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,X,ne,ve){return X===null||X.tag!==6?(X=Pu(ne,Q.mode,ve),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function H(Q,X,ne,ve){var it=ne.type;return it===C?he(Q,X,ne.props.children,ve,ne.key):X!==null&&(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===T&&Er(it)===X.type)?(X=u(X,ne.props),po(X,ne),X.return=Q,X):(X=Al(ne.type,ne.key,ne.props,null,Q.mode,ve),po(X,ne),X.return=Q,X)}function ie(Q,X,ne,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Iu(ne,Q.mode,ve),X.return=Q,X):(X=u(X,ne.children||[]),X.return=Q,X)}function he(Q,X,ne,ve,it){return X===null||X.tag!==7?(X=xr(ne,Q.mode,ve,it),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function Me(Q,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Pu(""+X,Q.mode,ne),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case b:return ne=Al(X.type,X.key,X.props,null,Q.mode,ne),po(ne,X),ne.return=Q,ne;case E:return X=Iu(X,Q.mode,ne),X.return=Q,X;case T:return X=Er(X),Me(Q,X,ne)}if($(X)||J(X))return X=xr(X,Q.mode,ne,null),X.return=Q,X;if(typeof X.then=="function")return Me(Q,Nl(X),ne);if(X.$$typeof===I)return Me(Q,wl(Q,X),ne);Ol(Q,X)}return null}function le(Q,X,ne,ve){var it=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return it!==null?null:R(Q,X,""+ne,ve);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case b:return ne.key===it?H(Q,X,ne,ve):null;case E:return ne.key===it?ie(Q,X,ne,ve):null;case T:return ne=Er(ne),le(Q,X,ne,ve)}if($(ne)||J(ne))return it!==null?null:he(Q,X,ne,ve,null);if(typeof ne.then=="function")return le(Q,X,Nl(ne),ve);if(ne.$$typeof===I)return le(Q,X,wl(Q,ne),ve);Ol(Q,ne)}return null}function fe(Q,X,ne,ve,it){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Q=Q.get(ne)||null,R(X,Q,""+ve,it);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return Q=Q.get(ve.key===null?ne:ve.key)||null,H(X,Q,ve,it);case E:return Q=Q.get(ve.key===null?ne:ve.key)||null,ie(X,Q,ve,it);case T:return ve=Er(ve),fe(Q,X,ne,ve,it)}if($(ve)||J(ve))return Q=Q.get(ne)||null,he(X,Q,ve,it,null);if(typeof ve.then=="function")return fe(Q,X,ne,Nl(ve),it);if(ve.$$typeof===I)return fe(Q,X,ne,wl(X,ve),it);Ol(X,ve)}return null}function Ke(Q,X,ne,ve){for(var it=null,wt=null,Je=X,ht=X=0,Mt=null;Je!==null&&ht<ne.length;ht++){Je.index>ht?(Mt=Je,Je=null):Mt=Je.sibling;var Dt=le(Q,Je,ne[ht],ve);if(Dt===null){Je===null&&(Je=Mt);break}t&&Je&&Dt.alternate===null&&n(Q,Je),X=f(Dt,X,ht),wt===null?it=Dt:wt.sibling=Dt,wt=Dt,Je=Mt}if(ht===ne.length)return a(Q,Je),Et&&ta(Q,ht),it;if(Je===null){for(;ht<ne.length;ht++)Je=Me(Q,ne[ht],ve),Je!==null&&(X=f(Je,X,ht),wt===null?it=Je:wt.sibling=Je,wt=Je);return Et&&ta(Q,ht),it}for(Je=o(Je);ht<ne.length;ht++)Mt=fe(Je,Q,ht,ne[ht],ve),Mt!==null&&(t&&Mt.alternate!==null&&Je.delete(Mt.key===null?ht:Mt.key),X=f(Mt,X,ht),wt===null?it=Mt:wt.sibling=Mt,wt=Mt);return t&&Je.forEach(function(Ja){return n(Q,Ja)}),Et&&ta(Q,ht),it}function rt(Q,X,ne,ve){if(ne==null)throw Error(r(151));for(var it=null,wt=null,Je=X,ht=X=0,Mt=null,Dt=ne.next();Je!==null&&!Dt.done;ht++,Dt=ne.next()){Je.index>ht?(Mt=Je,Je=null):Mt=Je.sibling;var Ja=le(Q,Je,Dt.value,ve);if(Ja===null){Je===null&&(Je=Mt);break}t&&Je&&Ja.alternate===null&&n(Q,Je),X=f(Ja,X,ht),wt===null?it=Ja:wt.sibling=Ja,wt=Ja,Je=Mt}if(Dt.done)return a(Q,Je),Et&&ta(Q,ht),it;if(Je===null){for(;!Dt.done;ht++,Dt=ne.next())Dt=Me(Q,Dt.value,ve),Dt!==null&&(X=f(Dt,X,ht),wt===null?it=Dt:wt.sibling=Dt,wt=Dt);return Et&&ta(Q,ht),it}for(Je=o(Je);!Dt.done;ht++,Dt=ne.next())Dt=fe(Je,Q,ht,Dt.value,ve),Dt!==null&&(t&&Dt.alternate!==null&&Je.delete(Dt.key===null?ht:Dt.key),X=f(Dt,X,ht),wt===null?it=Dt:wt.sibling=Dt,wt=Dt);return t&&Je.forEach(function(Ey){return n(Q,Ey)}),Et&&ta(Q,ht),it}function Xt(Q,X,ne,ve){if(typeof ne=="object"&&ne!==null&&ne.type===C&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case b:e:{for(var it=ne.key;X!==null;){if(X.key===it){if(it=ne.type,it===C){if(X.tag===7){a(Q,X.sibling),ve=u(X,ne.props.children),ve.return=Q,Q=ve;break e}}else if(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===T&&Er(it)===X.type){a(Q,X.sibling),ve=u(X,ne.props),po(ve,ne),ve.return=Q,Q=ve;break e}a(Q,X);break}else n(Q,X);X=X.sibling}ne.type===C?(ve=xr(ne.props.children,Q.mode,ve,ne.key),ve.return=Q,Q=ve):(ve=Al(ne.type,ne.key,ne.props,null,Q.mode,ve),po(ve,ne),ve.return=Q,Q=ve)}return y(Q);case E:e:{for(it=ne.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(Q,X.sibling),ve=u(X,ne.children||[]),ve.return=Q,Q=ve;break e}else{a(Q,X);break}else n(Q,X);X=X.sibling}ve=Iu(ne,Q.mode,ve),ve.return=Q,Q=ve}return y(Q);case T:return ne=Er(ne),Xt(Q,X,ne,ve)}if($(ne))return Ke(Q,X,ne,ve);if(J(ne)){if(it=J(ne),typeof it!="function")throw Error(r(150));return ne=it.call(ne),rt(Q,X,ne,ve)}if(typeof ne.then=="function")return Xt(Q,X,Nl(ne),ve);if(ne.$$typeof===I)return Xt(Q,X,wl(Q,ne),ve);Ol(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(a(Q,X.sibling),ve=u(X,ne),ve.return=Q,Q=ve):(a(Q,X),ve=Pu(ne,Q.mode,ve),ve.return=Q,Q=ve),y(Q)):a(Q,X)}return function(Q,X,ne,ve){try{ho=0;var it=Xt(Q,X,ne,ve);return rs=null,it}catch(Je){if(Je===as||Je===Ul)throw Je;var wt=ti(29,Je,null,Q.mode);return wt.lanes=ve,wt.return=Q,wt}finally{}}}var Ar=pm(!0),mm=pm(!1),Oa=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),jp(t,null,a),n}return El(t,o,n,a),Tl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ju=!1;function go(){if(Ju){var t=is;if(t!==null)throw t}}function _o(t,n,a,o){Ju=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,ie=H.next;H.next=null,y===null?f=ie:y.next=ie,y=H;var he=t.alternate;he!==null&&(he=he.updateQueue,R=he.lastBaseUpdate,R!==y&&(R===null?he.firstBaseUpdate=ie:R.next=ie,he.lastBaseUpdate=H))}if(f!==null){var Me=u.baseState;y=0,he=ie=H=null,R=f;do{var le=R.lane&-536870913,fe=le!==R.lane;if(fe?(yt&le)===le:(o&le)===le){le!==0&&le===ns&&(Ju=!0),he!==null&&(he=he.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ke=t,rt=R;le=n;var Xt=a;switch(rt.tag){case 1:if(Ke=rt.payload,typeof Ke=="function"){Me=Ke.call(Xt,Me,le);break e}Me=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=rt.payload,le=typeof Ke=="function"?Ke.call(Xt,Me,le):Ke,le==null)break e;Me=_({},Me,le);break e;case 2:Oa=!0}}le=R.callback,le!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},he===null?(ie=he=fe,H=Me):he=he.next=fe,y|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);he===null&&(H=Me),u.baseState=H,u.firstBaseUpdate=ie,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),Ga|=y,t.lanes=y,t.memoizedState=Me}}function gm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function _m(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)gm(a[t],n)}var ss=U(null),Pl=U(0);function vm(t,n){t=da,Re(Pl,t),Re(ss,n),da=t|n.baseLanes}function ju(){Re(Pl,da),Re(ss,ss.current)}function $u(){da=Pl.current,K(ss),K(Pl)}var ni=U(null),gi=null;function za(t){var n=t.alternate;Re(cn,cn.current&1),Re(ni,t),gi===null&&(n===null||ss.current!==null||n.memoizedState!==null)&&(gi=t)}function ef(t){Re(cn,cn.current),Re(ni,t),gi===null&&(gi=t)}function xm(t){t.tag===22?(Re(cn,cn.current),Re(ni,t),gi===null&&(gi=t)):Ba()}function Ba(){Re(cn,cn.current),Re(ni,ni.current)}function ii(t){K(ni),gi===t&&(gi=null),K(cn)}var cn=U(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,dt=null,Vt=null,pn=null,zl=!1,os=!1,Rr=!1,Bl=0,vo=0,ls=null,pS=0;function rn(){throw Error(r(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,f){return aa=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?ng:vf,Rr=!1,f=a(o,u),Rr=!1,os&&(f=ym(n,a,o,u)),Sm(t),f}function Sm(t){B.H=yo;var n=Vt!==null&&Vt.next!==null;if(aa=0,pn=Vt=dt=null,zl=!1,vo=0,ls=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&Cl(t)&&(mn=!0))}function ym(t,n,a,o){dt=t;var u=0;do{if(os&&(ls=null),vo=0,os=!1,25<=u)throw Error(r(301));if(u+=1,pn=Vt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=ig,f=n(a,o)}while(os);return f}function mS(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(dt.flags|=1024),n}function af(){var t=Bl!==0;return Bl=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}aa=0,pn=Vt=dt=null,os=!1,vo=Bl=0,ls=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?dt.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Vt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=pn===null?dt.memoizedState:pn.next;if(n!==null)pn=n,Vt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},pn===null?dt.memoizedState=pn=t:pn=pn.next=t}return pn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=vo;return vo+=1,ls===null&&(ls=[]),t=fm(ls,t,n),n=dt,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?ng:vf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===I)return Rn(t)}throw Error(r(438,String(t)))}function of(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Z;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=un();return lf(n,Vt,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=y=null,H=null,ie=n,he=!1;do{var Me=ie.lane&-536870913;if(Me!==ie.lane?(yt&Me)===Me:(aa&Me)===Me){var le=ie.revertLane;if(le===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),Me===ns&&(he=!0);else if((aa&le)===le){ie=ie.next,le===ns&&(he=!0);continue}else Me={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=Me,y=f):H=H.next=Me,dt.lanes|=le,Ga|=le;Me=ie.action,Rr&&a(f,Me),f=ie.hasEagerState?ie.eagerState:a(f,Me)}else le={lane:Me,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},H===null?(R=H=le,y=f):H=H.next=le,dt.lanes|=Me,Ga|=Me;ie=ie.next}while(ie!==null&&ie!==n);if(H===null?y=f:H.next=R,!ei(f,t.memoizedState)&&(mn=!0,he&&(a=is,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);ei(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Mm(t,n,a){var o=dt,u=un(),f=Et;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!ei((Vt||u).memoizedState,a);if(y&&(u.memoizedState=a,mn=!0),u=u.queue,df(Tm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,cs(9,{destroy:void 0},Em.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));f||(aa&127)!==0||bm(o,n,a)}return a}function bm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Fl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Em(t,n,a,o){n.value=a,n.getSnapshot=o,Am(n)&&Rm(t)}function Tm(t,n,a){return a(function(){Am(n)&&Rm(t)})}function Am(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function Rm(t){var n=vr(t,2);n!==null&&Yn(n,t,2)}function uf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Rr){Ee(!0);try{a()}finally{Ee(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function Cm(t,n,a,o){return t.baseState=a,lf(t,Vt,typeof o=="function"?o:ra)}function gS(t,n,a,o,u){if(Xl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,wm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=B.T,y={};B.T=y;try{var R=a(u,o),H=B.S;H!==null&&H(y,R),Dm(t,n,R)}catch(ie){ff(t,n,ie)}finally{f!==null&&y.types!==null&&(f.types=y.types),B.T=f}}else try{f=a(u,o),Dm(t,n,f)}catch(ie){ff(t,n,ie)}}function Dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Um(t,n,o)},function(o){return ff(t,n,o)}):Um(t,n,a)}function Um(t,n,a){n.status="fulfilled",n.value=a,Lm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,wm(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Lm(n),n=n.next;while(n!==o)}t.action=null}function Lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Nm(t,n){return n}function Om(t,n){if(Et){var a=Yt.formState;if(a!==null){e:{var o=dt;if(Et){if(Jt){t:{for(var u=Jt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Jt=_i(u.nextSibling),o=u.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:n},a.queue=o,a=$m.bind(null,dt,o),o.dispatch=a,o=uf(!1),f=_f.bind(null,dt,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=gS.bind(null,dt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Pm(t){var n=un();return Im(n,Vt,t)}function Im(t,n,a){if(n=lf(t,n,Nm)[0],t=Gl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(y){throw y===as?Ul:y}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,cs(9,{destroy:void 0},_S.bind(null,u,a),null)),[o,f,t]}function _S(t,n){t.action=n}function zm(t){var n=un(),a=Vt;if(a!==null)return Im(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function cs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Fl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bm(){return un().memoizedState}function Vl(t,n,a,o){var u=Bn();dt.flags|=t,u.memoizedState=cs(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Vt!==null&&o!==null&&tf(o,Vt.memoizedState.deps)?u.memoizedState=cs(n,f,a,o):(dt.flags|=t,u.memoizedState=cs(1|n,f,a,o))}function Fm(t,n){Vl(8390656,8,t,n)}function df(t,n){kl(2048,8,t,n)}function vS(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Fl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hm(t){var n=un().memoizedState;return vS({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Gm(t,n){return kl(4,2,t,n)}function Vm(t,n){return kl(4,4,t,n)}function km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xm(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,km.bind(null,n,t),a)}function hf(){}function Wm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function qm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),Rr){Ee(!0);try{t()}finally{Ee(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Yg(),dt.lanes|=t,Ga|=t,a)}function Ym(t,n,a,o){return ei(a,n)?a:ss.current!==null?(t=pf(t,a,o),ei(t,n)||(mn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(yt&261930)===0?(mn=!0,t.memoizedState=a):(t=Yg(),dt.lanes|=t,Ga|=t,n)}function Zm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var y=B.T,R={};B.T=R,_f(t,!1,n,a);try{var H=u(),ie=B.S;if(ie!==null&&ie(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=hS(H,o);So(t,n,he,si(t))}else So(t,n,o,si(t))}catch(Me){So(t,n,{then:function(){},status:"rejected",reason:Me},si())}finally{G.p=f,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function xS(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Km(t).queue;Zm(t,u,n,te,a===null?xS:function(){return Qm(t),a(o)})}function Km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qm(t){var n=Km(t);n.next===null&&(n=t.alternate.memoizedState),So(t,n.next.queue,{},si())}function gf(){return Rn(zo)}function Jm(){return un().memoizedState}function jm(){return un().memoizedState}function SS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Pa(a);var o=Ia(n,t,a);o!==null&&(Yn(o,n,a),mo(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function yS(t,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?eg(n,a):(a=Nu(t,n,a,o),a!==null&&(Yn(a,t,o),tg(a,n,o)))}function $m(t,n,a){var o=si();So(t,n,a,o)}function So(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))eg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,R=f(y,a);if(u.hasEagerState=!0,u.eagerState=R,ei(R,y))return El(t,n,u,0),Yt===null&&bl(),!1}catch{}finally{}if(a=Nu(t,n,u,o),a!==null)return Yn(a,t,o),tg(a,n,o),!0}return!1}function _f(t,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(r(479))}else n=Nu(t,a,o,2),n!==null&&Yn(n,t,2)}function Xl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function eg(t,n){os=zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function tg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}var yo={readContext:Rn,use:Hl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};yo.useEffectEvent=rn;var ng={readContext:Rn,use:Hl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Fm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(Rr){Ee(!0);try{t()}finally{Ee(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(Rr){Ee(!0);try{a(n)}finally{Ee(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=yS.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=$m.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Bn();return pf(a,t,n)},useTransition:function(){var t=uf(!1);return t=Zm.bind(null,dt,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Bn();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(yt&127)!==0||bm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Fm(Tm.bind(null,o,f,t),[t]),o.flags|=2048,cs(9,{destroy:void 0},Em.bind(null,o,f,a,n),null),a},useId:function(){var t=Bn(),n=Yt.identifierPrefix;if(Et){var a=zi,o=Ii;a=(o&~(1<<32-Ne(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=pS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Om,useActionState:Om,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_f.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return Bn().memoizedState=SS.bind(null,dt)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:Rn,use:Hl,useCallback:Wm,useContext:Rn,useEffect:df,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Gl,useRef:Bm,useState:function(){return Gl(ra)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return Ym(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Gl(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Mm,useId:Jm,useHostTransitionStatus:gf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=un();return Cm(a,Vt,t,n)},useMemoCache:of,useCacheRefresh:jm};vf.useEffectEvent=Hm;var ig={readContext:Rn,use:Hl,useCallback:Wm,useContext:Rn,useEffect:df,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:cf,useRef:Bm,useState:function(){return cf(ra)},useDebugValue:hf,useDeferredValue:function(t,n){var a=un();return Vt===null?pf(a,t,n):Ym(a,Vt.memoizedState,t,n)},useTransition:function(){var t=cf(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Mm,useId:Jm,useHostTransitionStatus:gf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=un();return Vt!==null?Cm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:jm};ig.useEffectEvent=Hm;function xf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=si(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,o),n!==null&&(Yn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=si(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,o),n!==null&&(Yn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(t,o,a),n!==null&&(Yn(n,t,a),mo(n,t,a))}};function ag(t,n,a,o,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!so(a,o)||!so(u,f):!0}function rg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Sf.enqueueReplaceState(n,n.state,null)}function Cr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function sg(t){Ml(t)}function og(t){console.error(t)}function lg(t){Ml(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function ug(t){return t=Pa(t),t.tag=3,t}function fg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){cg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){cg(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function MS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ts(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?ic():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),qf(t,o,u)),!1}throw Error(r(435,a.tag))}return qf(t,o,u),ic(),!1}if(Et)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(t=Error(r(422),{cause:o}),co(di(t,a)))):(o!==Fu&&(n=Error(r(423),{cause:o}),co(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=yf(t.stateNode,o,u),Qu(t,u),sn!==4&&(sn=2)),!1;var f=Error(r(520),{cause:o});if(f=di(f,a),wo===null?wo=[f]:wo.push(f),sn!==4&&(sn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yf(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ug(u),fg(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Mf=Error(r(461)),mn=!1;function Cn(t,n,a,o){n.child=t===null?mm(n,null,a,o):Ar(n,t.child,a,o)}function dg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Mr(n),o=nf(t,n,a,y,f,u),R=af(),t!==null&&!mn?(rf(t,n,u),sa(t,n,u)):(Et&&R&&zu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function hg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,pg(t,n,f,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Df(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(y,o)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=ea(f,o),t.ref=n.ref,t.return=n,n.child=t}function pg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(so(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Df(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return bf(t,n,a,o,u)}function mg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return gg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?vm(n,f):ju(),xm(n);else return o=n.lanes=536870912,gg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Dl(n,f.cachePool),vm(n,f),Ba(),n.memoizedState=null):(t!==null&&Dl(n,null),ju(),Ba());return Cn(t,n,u,a),n.child}function Mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gg(t,n,a,o,u){var f=qu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Dl(n,null),ju(),xm(n),t!==null&&ts(t,n,o,!0),n.childLanes=u,null}function ql(t,n){return n=Zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function _g(t,n,a){return Ar(n,t.child,null,a),t=ql(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function bS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=ql(n,o),n.lanes=536870912,Mo(null,t);if(ef(n),(t=Jt)?(t=w0(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=em(t),a.return=n,n.child=a,An=n,Jt=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return ql(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=_g(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(mn||ts(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Yt,o!==null&&(y=Jn(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,vr(t,y),Yn(o,t,y),Mf;ic(),n=_g(t,n,a)}else t=f.treeContext,Jt=_i(y.nextSibling),An=n,Et=!0,Ua=null,mi=!1,t!==null&&im(n,t),n=ql(n,o),n.flags|=4096;return n}return t=ea(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bf(t,n,a,o,u){return Mr(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!mn?(rf(t,n,u),sa(t,n,u)):(Et&&o&&zu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function vg(t,n,a,o,u,f){return Mr(n),n.updateQueue=null,a=ym(n,o,a,u),Sm(t),o=af(),t!==null&&!mn?(rf(t,n,f),sa(t,n,f)):(Et&&o&&zu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function xg(t,n,a,o,u){if(Mr(n),n.stateNode===null){var f=Jr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Rn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Zu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Rn(y):Jr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(xf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Sf.enqueueReplaceState(f,f.state,null),_o(n,o,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Cr(a,R);f.props=H;var ie=f.context,he=a.contextType;y=Jr,typeof he=="object"&&he!==null&&(y=Rn(he));var Me=a.getDerivedStateFromProps;he=typeof Me=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ie!==y)&&rg(n,f,o,y),Oa=!1;var le=n.memoizedState;f.state=le,_o(n,o,f,u),go(),ie=n.memoizedState,R||le!==ie||Oa?(typeof Me=="function"&&(xf(n,a,Me,o),ie=n.memoizedState),(H=Oa||ag(n,a,H,o,le,ie,y))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=y,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(t,n),y=n.memoizedProps,he=Cr(a,y),f.props=he,Me=n.pendingProps,le=f.context,ie=a.contextType,H=Jr,typeof ie=="object"&&ie!==null&&(H=Rn(ie)),R=a.getDerivedStateFromProps,(ie=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Me||le!==H)&&rg(n,f,o,H),Oa=!1,le=n.memoizedState,f.state=le,_o(n,o,f,u),go();var fe=n.memoizedState;y!==Me||le!==fe||Oa||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof R=="function"&&(xf(n,a,R,o),fe=n.memoizedState),(he=Oa||ag(n,a,he,o,le,fe,H)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=H,o=he):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Yl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ar(n,t.child,null,u),n.child=Ar(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=sa(t,n,u),t}function Sg(t,n,a,o){return Sr(),n.flags|=256,Cn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:cm()}}function Af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function yg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?za(n):Ba(),(t=Jt)?(t=w0(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=em(t),a.return=n,n.child=a,An=n,Jt=null)):t=null,t===null)throw La(n);return ld(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ba(),u=n.mode,R=Zl({mode:"hidden",children:R},u),o=xr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,y,a),n.memoizedState=Ef,Mo(null,o)):(za(n),Rf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=Cf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),R=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),R=xr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ar(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,y,a),n.memoizedState=Ef,n=Mo(null,o));else if(za(n),ld(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ie=y.dgst;y=ie,o=Error(r(419)),o.stack="",o.digest=y,co({value:o,source:null,stack:null}),n=Cf(t,n,a)}else if(mn||ts(t,n,a,!1),y=(a&t.childLanes)!==0,mn||y){if(y=Yt,y!==null&&(o=Jn(y,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,vr(t,o),Yn(y,t,o),Mf;od(R)||ic(),n=Cf(t,n,a)}else od(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Jt=_i(R.nextSibling),An=n,Et=!0,Ua=null,mi=!1,t!==null&&im(n,t),n=Rf(n,o.children),n.flags|=4096);return n}return u?(Ba(),R=o.fallback,u=n.mode,H=t.child,ie=H.sibling,o=ea(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ie!==null?R=ea(ie,R):(R=xr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Mo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Tf(a):(u=R.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=cm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Af(t,y,a),n.memoizedState=Ef,Mo(t.child,o)):(za(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Rf(t,n){return n=Zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Zl(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function Cf(t,n,a){return Ar(n,t.child,null,a),t=Rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vu(t.return,n,a)}function wf(t,n,a,o,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function bg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=cn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,Re(cn,y),Cn(t,n,o,a),o=Et?lo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,a,n);else if(t.tag===19)Mg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Il(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wf(n,!0,a,null,f,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function ES(t,n,a){switch(n.tag){case 3:Se(n,n.stateNode.containerInfo),Na(n,hn,t.memoizedState.cache),Sr();break;case 27:case 5:at(n);break;case 4:Se(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?yg(t,n,a):(za(n),t=sa(t,n,a),t!==null?t.sibling:null);za(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ts(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return bg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Re(cn,cn.current),o)break;return null;case 22:return n.lanes=0,mg(t,n,a,n.pendingProps);case 24:Na(n,hn,t.memoizedState.cache)}return sa(t,n,a)}function Eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Df(t,a)&&(n.flags&128)===0)return mn=!1,ES(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Et&&(n.flags&1048576)!==0&&nm(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")Ou(t)?(o=Cr(t,o),n.tag=1,n=xg(null,n,t,o,a)):(n.tag=0,n=bf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=dg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=hg(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Cr(o,n.pendingProps),xg(t,n,o,u,a);case 3:e:{if(Se(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(t,n),_o(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Na(n,hn,o),o!==f.cache&&ku(n,[hn],a,!0),go(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Sg(t,n,o,a);break e}else if(o!==u){u=di(Error(r(424)),n),co(u),n=Sg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=_i(t.firstChild),An=n,Et=!0,Ua=null,mi=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Sr(),o===u){n=sa(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=P0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=uc(se.current).createElement(a),o[fn]=n,o[Tn]=t,wn(o,a,t),dn(o),n.stateNode=o):n.memoizedState=P0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&Et&&(o=n.stateNode=L0(n.type,n.pendingProps,se.current),An=n,mi=!0,u=Jt,qa(n.type)?(cd=u,Jt=_i(o.firstChild)):Jt=u),Cn(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Jt)&&(o=ey(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,An=n,Jt=_i(o.firstChild),mi=!1,u=!0):u=!1),u||La(n)),at(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,ad(u,f)?o=null:y!==null&&ad(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,mS,null,null,a),zo._currentValue=u),Yl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=Jt)&&(a=ty(a,n.pendingProps,mi),a!==null?(n.stateNode=a,An=n,Jt=null,t=!0):t=!1),t||La(n)),null;case 13:return yg(t,n,a);case 4:return Se(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ar(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return dg(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Mr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return hg(t,n,n.type,n.pendingProps,a);case 15:return pg(t,n,n.type,n.pendingProps,a);case 19:return bg(t,n,a);case 31:return bS(t,n,a);case 22:return mg(t,n,a,n.pendingProps);case 24:return Mr(n),o=Rn(hn),t===null?(u=qu(),u===null&&(u=Yt,f=Xu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Zu(n),Na(n,hn,u)):((t.lanes&a)!==0&&(Ku(t,n),_o(n,null,null,a),go()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,hn,o)):(o=f.cache,Na(n,hn,o),o!==u.cache&&ku(n,[hn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function oa(t){t.flags|=4}function Uf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw Tr=Ll,Yu}else t.flags&=-16777217}function Tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H0(n))if(Jg())t.flags|=8192;else throw Tr=Ll,Yu}function Kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,hs|=n)}function bo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function TS(t,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(hn),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(es(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(oa(n),f!==null?(jt(n),Tg(n,f)):(jt(n),Uf(n,u,null,o,a))):f?f!==t.memoizedState?(oa(n),jt(n),Tg(n,f)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&oa(n),jt(n),Uf(n,u,t,o,a)),null;case 27:if($e(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}t=we.current,es(n)?am(n):(t=L0(u,o,a),n.stateNode=t,oa(n))}return jt(n),null;case 5:if($e(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(f=we.current,es(n))am(n);else{var y=uc(se.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[fn]=n,f[Tn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&oa(n)}}return jt(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=se.current,es(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y0(t.nodeValue,a)),t||La(n,!0)}else t=uc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=es(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=n}else Sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=es(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[fn]=n}else Sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),jt(n),null);case 4:return Ve(),t===null&&$f(n.stateNode.containerInfo),jt(n),null;case 10:return ia(n.type),jt(n),null;case 19:if(K(cn),o=n.memoizedState,o===null)return jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Il(t),f!==null){for(n.flags|=128,bo(o,!1),t=f.updateQueue,n.updateQueue=t,Kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$p(a,t),a=a.sibling;return Re(cn,cn.current&1|2),Et&&ta(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ce()>ec&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Kl(n,t),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Et)return jt(n),null}else 2*Ce()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,a=cn.current,Re(cn,u?a&1|2:a&1),Et&&ta(n,o.treeForkCount),t):(jt(n),null);case 22:case 23:return ii(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(hn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function AS(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(hn),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(r(340));Sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Sr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(cn),null;case 4:return Ve(),null;case 10:return ia(n.type),null;case 22:case 23:return ii(n),$u(),t!==null&&K(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(hn),null;case 25:return null;default:return null}}function Ag(t,n){switch(Bu(n),n.tag){case 3:ia(hn),Ve();break;case 26:case 27:case 5:$e(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:K(cn);break;case 10:ia(n.type);break;case 22:case 23:ii(n),$u(),t!==null&&K(br);break;case 24:ia(hn)}}function Eo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Ht(n,n.return,R)}}function Fa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var H=a,ie=R;try{ie()}catch(he){Ht(u,H,he)}}}o=o.next}while(o!==f)}}catch(he){Ht(n,n.return,he)}}function Rg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{_m(n,a)}catch(o){Ht(t,t.return,o)}}}function Cg(t,n,a){a.props=Cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function wg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Lf(t,n,a){try{var o=t.stateNode;ZS(o,t.type,a,n),o[Tn]=n}catch(u){Ht(t,t.return,u)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Of(t,n,a),t=t.sibling;t!==null;)Of(t,n,a),t=t.sibling}function Ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ql(t,n,a),t=t.sibling;t!==null;)Ql(t,n,a),t=t.sibling}function Ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[fn]=t,n[Tn]=a}catch(f){Ht(t,t.return,f)}}var la=!1,gn=!1,Pf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,bn=null;function RS(t,n){if(t=t.containerInfo,nd=_c,t=Xp(t),Ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,R=-1,H=-1,ie=0,he=0,Me=t,le=null;t:for(;;){for(var fe;Me!==a||u!==0&&Me.nodeType!==3||(R=y+u),Me!==f||o!==0&&Me.nodeType!==3||(H=y+o),Me.nodeType===3&&(y+=Me.nodeValue.length),(fe=Me.firstChild)!==null;)le=Me,Me=fe;for(;;){if(Me===t)break t;if(le===a&&++ie===u&&(R=y),le===f&&++he===o&&(H=y),(fe=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=fe}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},_c=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ke=Cr(a.type,u);t=o.getSnapshotBeforeUpdate(Ke,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Ht(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function Ng(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),o&4&&Eo(5,a);break;case 1:if(ua(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Ht(a,a.return,y)}else{var u=Cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ht(a,a.return,y)}}o&64&&Rg(a),o&512&&To(a,a.return);break;case 3:if(ua(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_m(t,n)}catch(y){Ht(a,a.return,y)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:ua(t,a),n===null&&o&4&&wg(a),o&512&&To(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),o&4&&Ig(t,a);break;case 13:ua(t,a),o&4&&zg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=IS.bind(null,a),ny(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||gn,u=la;var f=gn;la=o,(gn=n)&&!f?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),la=u,gn=f}break;case 30:break;default:ua(t,a)}}function Og(t){var n=t.alternate;n!==null&&(t.alternate=null,Og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Aa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,kn=!1;function ca(t,n,a){for(a=a.child;a!==null;)Pg(t,n,a),a=a.sibling}function Pg(t,n,a){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:gn||Bi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Bi(a,n);var o=nn,u=kn;qa(a.type)&&(nn=a.stateNode,kn=!1),ca(t,n,a),Oo(a.stateNode),nn=o,kn=u;break;case 5:gn||Bi(a,n);case 6:if(o=nn,u=kn,nn=null,ca(t,n,a),nn=o,kn=u,nn!==null)if(kn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{nn.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:nn!==null&&(kn?(t=nn,R0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ys(t)):R0(nn,a.stateNode));break;case 4:o=nn,u=kn,nn=a.stateNode.containerInfo,kn=!0,ca(t,n,a),nn=o,kn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),gn||Fa(4,a,n),ca(t,n,a);break;case 1:gn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Cg(a,n,o)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ca(t,n,a),gn=o;break;default:ca(t,n,a)}}function Ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ys(t)}catch(a){Ht(n,n.return,a)}}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ys(t)}catch(a){Ht(n,n.return,a)}}function CS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lg),n;default:throw Error(r(435,t.tag))}}function Jl(t,n){var a=CS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=zS.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){nn=R.stateNode,kn=!1;break e}break;case 5:nn=R.stateNode,kn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if(nn===null)throw Error(r(160));Pg(f,y,u),nn=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,t),n=n.sibling}var Ri=null;function Bg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Fa(3,t,t.return),Eo(3,t),Fa(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(gn||a===null||Bi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Xn(n,t),Wn(t),o&512&&(gn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ta]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[fn]=t,dn(f),o=f;break e;case"link":var y=B0("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(f=y[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=B0("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(f=y[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[fn]=t,dn(f),o=f}t.stateNode=o}else F0(u,t.type,t.stateNode);else t.stateNode=z0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?F0(u,t.type,t.stateNode):z0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Lf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(gn||a===null||Bi(a,a.return)),a!==null&&o&4&&Lf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(gn||a===null||Bi(a,a.return)),t.flags&32){u=t.stateNode;try{$n(u,"")}catch(Ke){Ht(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Lf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ke){Ht(t,t.return,Ke)}}break;case 3:if(hc=null,u=Ri,Ri=fc(n.containerInfo),Xn(n,t),Ri=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ys(n.containerInfo)}catch(Ke){Ht(t,t.return,Ke)}Pf&&(Pf=!1,Fg(t));break;case 4:o=Ri,Ri=fc(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ri=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=Ce()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ie=la,he=gn;if(la=ie||u,gn=he||H,Xn(n,t),gn=he,la=ie,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||la||gn||wr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=H.stateNode;var Me=H.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ke){Ht(H,H.return,Ke)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Ke){Ht(H,H.return,Ke)}}}else if(n.tag===18){if(a===null){H=n;try{var fe=H.stateNode;u?C0(fe,!0):C0(H.stateNode,!1)}catch(Ke){Ht(H,H.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Nf(t);Ql(t,f,u);break;case 5:var y=a.stateNode;a.flags&32&&($n(y,""),a.flags&=-33);var R=Nf(t);Ql(t,R,y);break;case 3:case 4:var H=a.stateNode.containerInfo,ie=Nf(t);Of(t,ie,H);break;default:throw Error(r(161))}}catch(he){Ht(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(t,n.alternate,n),n=n.sibling}function wr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),wr(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Cg(n,n.return,a),wr(n);break;case 27:Oo(n.stateNode);case 26:case 5:Bi(n,n.return),wr(n);break;case 22:n.memoizedState===null&&wr(n);break;case 30:wr(n);break;default:wr(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Eo(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){Ht(o,o.return,ie)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)gm(H[u],R)}catch(ie){Ht(o,o.return,ie)}}a&&y&64&&Rg(f),To(f,f.return);break;case 27:Ug(f);case 26:case 5:fa(u,f,a),a&&o===null&&y&4&&wg(f),To(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&y&4&&Ig(u,f);break;case 13:fa(u,f,a),a&&y&4&&zg(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),To(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function If(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function zf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hg(t,n,a,o),n=n.sibling}function Hg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&Eo(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,R=f.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Ht(n,n.return,H)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,o):Ao(t,n):f._visibility&2?Ci(t,n,a,o):(f._visibility|=2,us(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(y,n);break;case 24:Ci(t,n,a,o),u&2048&&zf(n.alternate,n);break;default:Ci(t,n,a,o)}}function us(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,R=a,H=o,ie=y.flags;switch(y.tag){case 0:case 11:case 15:us(f,y,R,H,u),Eo(8,y);break;case 23:break;case 22:var he=y.stateNode;y.memoizedState!==null?he._visibility&2?us(f,y,R,H,u):Ao(f,y):(he._visibility|=2,us(f,y,R,H,u)),u&&ie&2048&&If(y.alternate,y);break;case 24:us(f,y,R,H,u),u&&ie&2048&&zf(y.alternate,y);break;default:us(f,y,R,H,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&If(o.alternate,o);break;case 24:Ao(a,o),u&2048&&zf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function fs(t,n,a){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)Gg(t,n,a),t=t.sibling}function Gg(t,n,a){switch(t.tag){case 26:fs(t,n,a),t.flags&Ro&&t.memoizedState!==null&&py(a,Ri,t.memoizedState,t.memoizedProps);break;case 5:fs(t,n,a);break;case 3:case 4:var o=Ri;Ri=fc(t.stateNode.containerInfo),fs(t,n,a),Ri=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,fs(t,n,a),Ro=o):fs(t,n,a));break;default:fs(t,n,a)}}function Vg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Xg(o,t)}Vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,jl(t)):Co(t);break;default:Co(t)}}function jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Xg(o,t)}Vg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}t=t.sibling}}function Xg(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,f=o.return;if(Og(o),o===a){bn=null;break e}if(u!==null){u.return=f,bn=u;break e}bn=f}}}var wS={getCacheForType:function(t){var n=Rn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(hn).controller.signal}},DS=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Yt=null,xt=null,yt=0,Ft=0,ai=null,Ha=!1,ds=!1,Bf=!1,da=0,sn=0,Ga=0,Dr=0,Ff=0,ri=0,hs=0,wo=null,qn=null,Hf=!1,$l=0,Wg=0,ec=1/0,tc=null,Va=null,Sn=0,ka=null,ps=null,ha=0,Gf=0,Vf=null,qg=null,Do=0,kf=null;function si(){return(Lt&2)!==0&&yt!==0?yt&-yt:B.T!==null?Kf():js()}function Yg(){if(ri===0)if((yt&536870912)===0||Et){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),ri=t}else ri=536870912;return t=ni.current,t!==null&&(t.flags|=32),ri}function Yn(t,n,a){(t===Yt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ms(t,0),Xa(t,yt,ri,!1)),We(t,a),((Lt&2)===0||t!==Yt)&&(t===Yt&&((Lt&2)===0&&(Dr|=a),sn===4&&Xa(t,yt,ri,!1)),Fi(t))}function Zg(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=o?NS(t,n):Wf(t,n,!0),f=o;do{if(u===0){ds&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!US(a)){u=Wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=wo;var H=R.current.memoizedState.isDehydrated;if(H&&(ms(R,y).flags|=256),y=Wf(R,y,!1),y!==2){if(Bf&&!H){R.errorRecoveryDisabledLanes|=f,Dr|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){ms(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ri,!Ha);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=$l+300-Ce(),10<u)){if(Xa(o,n,ri,!Ha),ge(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=T0(Kg.bind(null,o,a,qn,tc,Hf,n,ri,Dr,hs,Ha,f,"Throttled",-0,0),u);break e}Kg(o,a,qn,tc,Hf,n,ri,Dr,hs,Ha,f,null,-0,0)}}break}while(!0);Fi(t)}function Kg(t,n,a,o,u,f,y,R,H,ie,he,Me,le,fe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Gg(n,f,Me);var Ke=(f&62914560)===f?$l-Ce():(f&4194048)===f?Wg-Ce():0;if(Ke=my(Me,Ke),Ke!==null){ha=f,t.cancelPendingCommit=Ke(i0.bind(null,t,n,f,a,o,u,y,R,H,he,Me,null,le,fe)),Xa(t,f,y,!ie);return}}i0(t,n,f,a,o,u,y,R,H)}function US(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~Ff,n&=~Dr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ne(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Pt(t,a,n)}function nc(){return(Lt&6)===0?(Uo(0),!1):!0}function Xf(){if(xt!==null){if(Ft===0)var t=xt.return;else t=xt,na=yr=null,sf(t),rs=null,ho=0,t=xt;for(;t!==null;)Ag(t.alternate,t),t=t.return;xt=null}}function ms(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,JS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,Xf(),Yt=t,xt=a=ea(t.current,null),yt=n,Ft=0,ai=null,Ha=!1,ds=Pe(t,n),Bf=!1,hs=ri=Ff=Dr=Ga=sn=0,qn=wo=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ne(o),f=1<<u;n|=t[u],o&=~f}return da=n,bl(),a}function Qg(t,n){dt=null,B.H=yo,n===as||n===Ul?(n=dm(),Ft=3):n===Yu?(n=dm(),Ft=4):Ft=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,xt===null&&(sn=1,Wl(t,di(n,t.current)))}function Jg(){var t=ni.current;return t===null?!0:(yt&4194048)===yt?gi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===gi:!1}function jg(){var t=B.H;return B.H=yo,t===null?yo:t}function $g(){var t=B.A;return B.A=wS,t}function ic(){sn=4,Ha||(yt&4194048)!==yt&&ni.current!==null||(ds=!0),(Ga&134217727)===0&&(Dr&134217727)===0||Yt===null||Xa(Yt,yt,ri,!1)}function Wf(t,n,a){var o=Lt;Lt|=2;var u=jg(),f=$g();(Yt!==t||yt!==n)&&(tc=null,ms(t,n)),n=!1;var y=sn;e:do try{if(Ft!==0&&xt!==null){var R=xt,H=ai;switch(Ft){case 8:Xf(),y=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var ie=Ft;if(Ft=0,ai=null,gs(t,R,H,ie),a&&ds){y=0;break e}break;default:ie=Ft,Ft=0,ai=null,gs(t,R,H,ie)}}LS(),y=sn;break}catch(he){Qg(t,he)}while(!0);return n&&t.shellSuspendCounter++,na=yr=null,Lt=o,B.H=u,B.A=f,xt===null&&(Yt=null,yt=0,bl()),y}function LS(){for(;xt!==null;)e0(xt)}function NS(t,n){var a=Lt;Lt|=2;var o=jg(),u=$g();Yt!==t||yt!==n?(tc=null,ec=Ce()+500,ms(t,n)):ds=Pe(t,n);e:do try{if(Ft!==0&&xt!==null){n=xt;var f=ai;t:switch(Ft){case 1:Ft=0,ai=null,gs(t,n,f,1);break;case 2:case 9:if(um(f)){Ft=0,ai=null,t0(n);break}n=function(){Ft!==2&&Ft!==9||Yt!==t||(Ft=7),Fi(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:um(f)?(Ft=0,ai=null,t0(n)):(Ft=0,ai=null,gs(t,n,f,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var R=xt;if(y?H0(y):R.stateNode.complete){Ft=0,ai=null;var H=R.sibling;if(H!==null)xt=H;else{var ie=R.return;ie!==null?(xt=ie,ac(ie)):xt=null}break t}}Ft=0,ai=null,gs(t,n,f,5);break;case 6:Ft=0,ai=null,gs(t,n,f,6);break;case 8:Xf(),sn=6;break e;default:throw Error(r(462))}}OS();break}catch(he){Qg(t,he)}while(!0);return na=yr=null,B.H=o,B.A=u,Lt=a,xt!==null?0:(Yt=null,yt=0,bl(),sn)}function OS(){for(;xt!==null&&!pe();)e0(xt)}function e0(t){var n=Eg(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?ac(t):xt=n}function t0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:sf(n);default:Ag(a,n),n=xt=$p(n,da),n=Eg(a,n,da)}t.memoizedProps=t.pendingProps,n===null?ac(t):xt=n}function gs(t,n,a,o){na=yr=null,sf(n),rs=null,ho=0;var u=n.return;try{if(MS(t,u,n,a,yt)){sn=1,Wl(t,di(a,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;sn=1,Wl(t,di(a,t.current)),xt=null;return}n.flags&32768?(Et||o===1?t=!0:ds||(yt&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),n0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){n0(n,Ha);return}t=n.return;var a=TS(n.alternate,n,da);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);sn===0&&(sn=5)}function n0(t,n){do{var a=AS(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);sn=6,xt=null}function i0(t,n,a,o,u,f,y,R,H){t.cancelPendingCommit=null;do rc();while(Sn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Lu,$t(t,a,f,y,R,H),t===Yt&&(xt=Yt=null,yt=0),ps=n,ka=t,ha=a,Gf=f,Vf=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,BS(Y,function(){return l0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=G.p,G.p=2,y=Lt,Lt|=4;try{RS(t,n,a)}finally{Lt=y,G.p=u,B.T=o}}Sn=1,a0(),r0(),s0()}}function a0(){if(Sn===1){Sn=0;var t=ka,n=ps,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{Bg(n,t);var f=id,y=Xp(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(y!==R&&R&&R.ownerDocument&&kp(R.ownerDocument.documentElement,R)){if(H!==null&&Ru(R)){var ie=H.start,he=H.end;if(he===void 0&&(he=ie),"selectionStart"in R)R.selectionStart=ie,R.selectionEnd=Math.min(he,R.value.length);else{var Me=R.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var fe=le.getSelection(),Ke=R.textContent.length,rt=Math.min(H.start,Ke),Xt=H.end===void 0?rt:Math.min(H.end,Ke);!fe.extend&&rt>Xt&&(y=Xt,Xt=rt,rt=y);var Q=Vp(R,rt),X=Vp(R,Xt);if(Q&&X&&(fe.rangeCount!==1||fe.anchorNode!==Q.node||fe.anchorOffset!==Q.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var ne=Me.createRange();ne.setStart(Q.node,Q.offset),fe.removeAllRanges(),rt>Xt?(fe.addRange(ne),fe.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),fe.addRange(ne))}}}}for(Me=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&Me.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var ve=Me[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}_c=!!nd,id=nd=null}finally{Lt=u,G.p=o,B.T=a}}t.current=n,Sn=2}}function r0(){if(Sn===2){Sn=0;var t=ka,n=ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Lt;Lt|=4;try{Ng(t,n.alternate,n)}finally{Lt=u,G.p=o,B.T=a}}Sn=3}}function s0(){if(Sn===4||Sn===3){Sn=0,F();var t=ka,n=ps,a=ha,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,ps=ka=null,o0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Js(a),n=n.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];f(R.value,{componentStack:R.stack})}}finally{B.T=n,G.p=u}}(ha&3)!==0&&rc(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===kf?Do++:(Do=0,kf=t):Do=0,Uo(0)}}function o0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function rc(){return a0(),r0(),s0(),l0()}function l0(){if(Sn!==5)return!1;var t=ka,n=Gf;Gf=0;var a=Js(ha),o=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=Vf,Vf=null;var f=ka,y=ha;if(Sn=0,ps=ka=null,ha=0,(Lt&6)!==0)throw Error(r(331));var R=Lt;if(Lt|=4,kg(f.current),Hg(f,f.current,y,a),Lt=R,Uo(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{G.p=u,B.T=o,o0(t,n)}}function c0(t,n,a){n=di(a,n),n=yf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(We(t,2),Fi(t))}function Ht(t,n,a){if(t.tag===3)c0(t,t,a);else for(;n!==null;){if(n.tag===3){c0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=di(a,t),a=ug(2),o=Ia(n,a,2),o!==null&&(fg(a,o,n,t),We(o,2),Fi(o));break}}n=n.return}}function qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new DS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),t=PS.bind(null,t,n,a),n.then(t,t))}function PS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(yt&a)===a&&(sn===4||sn===3&&(yt&62914560)===yt&&300>Ce()-$l?(Lt&2)===0&&ms(t,0):Ff|=a,hs===yt&&(hs=0)),Fi(t)}function u0(t,n){n===0&&(n=Te()),t=vr(t,n),t!==null&&(We(t,n),Fi(t))}function IS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),u0(t,a)}function zS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),u0(t,a)}function BS(t,n){return an(t,n)}var sc=null,_s=null,Yf=!1,oc=!1,Zf=!1,Wa=0;function Fi(t){t!==_s&&t.next===null&&(_s===null?sc=_s=t:_s=_s.next=t),oc=!0,Yf||(Yf=!0,HS())}function Uo(t,n){if(!Zf&&oc){Zf=!0;do for(var a=!1,o=sc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ne(42|t)+1)-1,f&=u&~(y&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,p0(o,f))}else f=yt,f=ge(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Pe(o,f)||(a=!0,p0(o,f));o=o.next}while(a);Zf=!1}}function FS(){f0()}function f0(){oc=Yf=!1;var t=0;Wa!==0&&QS()&&(t=Wa);for(var n=Ce(),a=null,o=sc;o!==null;){var u=o.next,f=d0(o,n);f===0?(o.next=null,a===null?sc=u:a.next=u,u===null&&(_s=a)):(a=o,(t!==0||(f&3)!==0)&&(oc=!0)),o=u}Sn!==0&&Sn!==5||Uo(t),Wa!==0&&(Wa=0)}function d0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Ne(f),R=1<<y,H=u[y];H===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Ge(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=Yt,a=yt,a=ge(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Js(a)){case 2:case 8:a=M;break;case 32:a=Y;break;case 268435456:a=V;break;default:a=Y}return o=h0.bind(null,t),a=an(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function h0(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var o=yt;return o=ge(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Zg(t,o,n),d0(t,Ce()),t.callbackNode!=null&&t.callbackNode===a?h0.bind(null,t):null)}function p0(t,n){if(rc())return null;Zg(t,n,!0)}function HS(){jS(function(){(Lt&6)!==0?an(D,FS):f0()})}function Kf(){if(Wa===0){var t=ns;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Wa=t}return Wa}function m0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pr(""+t)}function g0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function GS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=m0((u[Tn]||null).action),y=o.submitter;y&&(n=(n=y[Tn]||null)?m0(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var R=new xl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var H=y?g0(u,y):new FormData(u);mf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=y?g0(u,y):new FormData(u),mf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Qf=0;Qf<Uu.length;Qf++){var Jf=Uu[Qf],VS=Jf.toLowerCase(),kS=Jf[0].toUpperCase()+Jf.slice(1);Ai(VS,"on"+kS)}Ai(Yp,"onAnimationEnd"),Ai(Zp,"onAnimationIteration"),Ai(Kp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(rS,"onTransitionRun"),Ai(sS,"onTransitionStart"),Ai(oS,"onTransitionCancel"),Ai(Qp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function _0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],H=R.instance,ie=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(he){Ml(he)}u.currentTarget=null,f=H}else for(y=0;y<o.length;y++){if(R=o[y],H=R.instance,ie=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ie;try{f(u)}catch(he){Ml(he)}u.currentTarget=null,f=H}}}}function St(t,n){var a=n[fr];a===void 0&&(a=n[fr]=new Set);var o=t+"__bubble";a.has(o)||(v0(n,t,2,!1),a.add(o))}function jf(t,n,a){var o=0;n&&(o|=4),v0(a,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[lc]){t[lc]=!0,ml.forEach(function(a){a!=="selectionchange"&&(XS.has(a)||jf(a,!1,t),jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,jf("selectionchange",!1,n))}}function v0(t,n,a,o){switch(Y0(n)){case 2:var u=vy;break;case 8:u=xy;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ed(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Qi(R),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=f=y;continue e}R=R.parentNode}}o=o.return}bp(function(){var ie=f,he=gu(a),Me=[];e:{var le=Jp.get(t);if(le!==void 0){var fe=xl,Ke=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":fe=zx;break;case"focusin":Ke="focus",fe=Mu;break;case"focusout":Ke="blur",fe=Mu;break;case"beforeblur":case"afterblur":fe=Mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Hx;break;case Yp:case Zp:case Kp:fe=Cx;break;case Qp:fe=Vx;break;case"scroll":case"scrollend":fe=bx;break;case"wheel":fe=Xx;break;case"copy":case"cut":case"paste":fe=Dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Cp;break;case"toggle":case"beforetoggle":fe=qx}var rt=(n&4)!==0,Xt=!rt&&(t==="scroll"||t==="scrollend"),Q=rt?le!==null?le+"Capture":null:le;rt=[];for(var X=ie,ne;X!==null;){var ve=X;if(ne=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ne===null||Q===null||(ve=$s(X,Q),ve!=null&&rt.push(No(X,ve,ne))),Xt)break;X=X.return}0<rt.length&&(le=new fe(le,Ke,null,a,he),Me.push({event:le,listeners:rt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",le&&a!==mu&&(Ke=a.relatedTarget||a.fromElement)&&(Qi(Ke)||Ke[Gn]))break e;if((fe||le)&&(le=he.window===he?he:(le=he.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(Ke=a.relatedTarget||a.toElement,fe=ie,Ke=Ke?Qi(Ke):null,Ke!==null&&(Xt=c(Ke),rt=Ke.tag,Ke!==Xt||rt!==5&&rt!==27&&rt!==6)&&(Ke=null)):(fe=null,Ke=ie),fe!==Ke)){if(rt=Ap,ve="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(rt=Cp,ve="onPointerLeave",Q="onPointerEnter",X="pointer"),Xt=fe==null?le:hr(fe),ne=Ke==null?le:hr(Ke),le=new rt(ve,X+"leave",fe,a,he),le.target=Xt,le.relatedTarget=ne,ve=null,Qi(he)===ie&&(rt=new rt(Q,X+"enter",Ke,a,he),rt.target=ne,rt.relatedTarget=Xt,ve=rt),Xt=ve,fe&&Ke)t:{for(rt=WS,Q=fe,X=Ke,ne=0,ve=Q;ve;ve=rt(ve))ne++;ve=0;for(var it=X;it;it=rt(it))ve++;for(;0<ne-ve;)Q=rt(Q),ne--;for(;0<ve-ne;)X=rt(X),ve--;for(;ne--;){if(Q===X||X!==null&&Q===X.alternate){rt=Q;break t}Q=rt(Q),X=rt(X)}rt=null}else rt=null;fe!==null&&x0(Me,le,fe,rt,!1),Ke!==null&&Xt!==null&&x0(Me,Xt,Ke,rt,!0)}}e:{if(le=ie?hr(ie):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var wt=Ip;else if(Op(le))if(zp)wt=nS;else{wt=eS;var Je=$x}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ie&&Nt(ie.elementType)&&(wt=Ip):wt=tS;if(wt&&(wt=wt(t,ie))){Pp(Me,wt,a,he);break e}Je&&Je(t,le,ie),t==="focusout"&&ie&&le.type==="number"&&ie.memoizedProps.value!=null&&vt(le,"number",le.value)}switch(Je=ie?hr(ie):window,t){case"focusin":(Op(Je)||Je.contentEditable==="true")&&(Zr=Je,Cu=ie,oo=null);break;case"focusout":oo=Cu=Zr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Wp(Me,a,he);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":Wp(Me,a,he)}var ht;if(Eu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Yr?Lp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(wp&&a.locale!=="ko"&&(Yr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Yr&&(ht=Ep()):(wa=he,xu="value"in wa?wa.value:wa.textContent,Yr=!0)),Je=cc(ie,Mt),0<Je.length&&(Mt=new Rp(Mt,t,null,a,he),Me.push({event:Mt,listeners:Je}),ht?Mt.data=ht:(ht=Np(a),ht!==null&&(Mt.data=ht)))),(ht=Zx?Kx(t,a):Qx(t,a))&&(Mt=cc(ie,"onBeforeInput"),0<Mt.length&&(Je=new Rp("onBeforeInput","beforeinput",null,a,he),Me.push({event:Je,listeners:Mt}),Je.data=ht)),GS(Me,t,ie,a,he)}_0(Me,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$s(t,a),u!=null&&o.unshift(No(t,u,f)),u=$s(t,n),u!=null&&o.push(No(t,u,f))),t.tag===3)return o;t=t.return}return[]}function WS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function x0(t,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var R=a,H=R.alternate,ie=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ie===null||(H=ie,u?(ie=$s(a,f),ie!=null&&y.unshift(No(a,ie,H))):u||(ie=$s(a,f),ie!=null&&y.push(No(a,ie,H)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var qS=/\r\n?/g,YS=/\u0000|\uFFFD/g;function S0(t){return(typeof t=="string"?t:""+t).replace(qS,`
`).replace(YS,"")}function y0(t,n){return n=S0(n),S0(t)===n}function kt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||$n(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&$n(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,o);break;case"style":Ti(t,o,f);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=pr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ji);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=pr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,ze(t,a,o))}}function td(t,n,a,o,u,f){switch(a){case"style":Ti(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?$n(t,o):(typeof o=="number"||typeof o=="bigint")&&$n(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,f,y,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var R=f=y=u=null,H=null,ie=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":y=he;break;case"checked":H=he;break;case"defaultChecked":ie=he;break;case"value":f=he;break;case"defaultValue":R=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:kt(t,n,o,he,a,null)}}Ln(t,f,R,H,ie,y,u,!1);return;case"select":St("invalid",t),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:kt(t,n,u,R,a,null)}n=f,a=y,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":St("invalid",t),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:kt(t,n,y,R,a,null)}Ei(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(t,n,H,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)St(Lo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(o=a[ie],o!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(t,n,ie,o,a,null)}return;default:if(Nt(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&td(t,n,he,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&kt(t,n,R,o,a,null))}function ZS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,R=null,H=null,ie=null,he=null;for(fe in a){var Me=a[fe];if(a.hasOwnProperty(fe)&&Me!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":H=Me;default:o.hasOwnProperty(fe)||kt(t,n,fe,null,o,Me)}}for(var le in o){var fe=o[le];if(Me=a[le],o.hasOwnProperty(le)&&(fe!=null||Me!=null))switch(le){case"type":f=fe;break;case"name":u=fe;break;case"checked":ie=fe;break;case"defaultChecked":he=fe;break;case"value":y=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==Me&&kt(t,n,le,fe,o,Me)}}ke(t,y,R,H,ie,he,f,u);return;case"select":fe=y=R=le=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":fe=H;default:o.hasOwnProperty(f)||kt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":le=f;break;case"defaultValue":R=f;break;case"multiple":y=f;default:f!==H&&kt(t,n,u,f,o,H)}n=R,a=y,o=fe,le!=null?xn(t,!!a,le,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":fe=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:kt(t,n,R,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":le=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&kt(t,n,y,u,o,f)}jn(t,le,fe);return;case"option":for(var Ke in a)if(le=a[Ke],a.hasOwnProperty(Ke)&&le!=null&&!o.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:kt(t,n,Ke,null,o,le)}for(H in o)if(le=o[H],fe=a[H],o.hasOwnProperty(H)&&le!==fe&&(le!=null||fe!=null))switch(H){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:kt(t,n,H,le,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)le=a[rt],a.hasOwnProperty(rt)&&le!=null&&!o.hasOwnProperty(rt)&&kt(t,n,rt,null,o,le);for(ie in o)if(le=o[ie],fe=a[ie],o.hasOwnProperty(ie)&&le!==fe&&(le!=null||fe!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:kt(t,n,ie,le,o,fe)}return;default:if(Nt(n)){for(var Xt in a)le=a[Xt],a.hasOwnProperty(Xt)&&le!==void 0&&!o.hasOwnProperty(Xt)&&td(t,n,Xt,void 0,o,le);for(he in o)le=o[he],fe=a[he],!o.hasOwnProperty(he)||le===fe||le===void 0&&fe===void 0||td(t,n,he,le,o,fe);return}}for(var Q in a)le=a[Q],a.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&kt(t,n,Q,null,o,le);for(Me in o)le=o[Me],fe=a[Me],!o.hasOwnProperty(Me)||le===fe||le==null&&fe==null||kt(t,n,Me,le,o,fe)}function M0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,R=u.duration;if(f&&R&&M0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ie=H.startTime;if(ie>R)break;var he=H.transferSize,Me=H.initiatorType;he&&M0(Me)&&(H=H.responseEnd,y+=he*(H<R?1:(R-ie)/(H-ie)))}if(--o,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function b0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function QS(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,JS=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(t){return A0.resolve(null).then(t).catch($S)}:T0;function $S(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function R0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ys(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,R=f.nodeName;f[Ta]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Oo(t.ownerDocument.body);a=u}while(a);ys(n)}function C0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),Aa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ey(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ta])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function ty(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function w0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$?"||t.data==="$~"}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ny(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var cd=null;function D0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function L0(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Aa(t)}var vi=new Map,N0=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=G.d;G.d={f:iy,r:ay,D:ry,C:sy,L:oy,m:ly,X:uy,S:cy,M:fy};function iy(){var t=pa.f(),n=nc();return t||n}function ay(t){var n=Ji(t);n!==null&&n.tag===5&&n.type==="form"?Qm(n):pa.r(t)}var vs=typeof document>"u"?null:document;function O0(t,n,a){var o=vs;if(o&&typeof n=="string"&&n){var u=zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),N0.has(u)||(N0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),dn(n),o.head.appendChild(n)))}}function ry(t){pa.D(t),O0("dns-prefetch",t,null)}function sy(t,n){pa.C(t,n),O0("preconnect",t,n)}function oy(t,n,a){pa.L(t,n,a);var o=vs;if(o&&t&&n){var u='link[rel="preload"][as="'+zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+zt(a.imageSizes)+'"]')):u+='[href="'+zt(t)+'"]';var f=u;switch(n){case"style":f=xs(t);break;case"script":f=Ss(t)}vi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),wn(n,"link",t),dn(n),o.head.appendChild(n)))}}function ly(t,n){pa.m(t,n);var a=vs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zt(o)+'"][href="'+zt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ss(t)}if(!vi.has(f)&&(t=_({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),wn(o,"link",t),dn(o),a.head.appendChild(o)}}}function cy(t,n,a){pa.S(t,n,a);var o=vs;if(o&&t){var u=Ra(o).hoistableStyles,f=xs(t);n=n||"default";var y=u.get(f);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Po(f)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&ud(t,a);var H=y=o.createElement("link");dn(H),wn(H,"link",t),H._p=new Promise(function(ie,he){H.onload=ie,H.onerror=he}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(f,y)}}}function uy(t,n){pa.X(t,n);var a=vs;if(a&&t){var o=Ra(a).hoistableScripts,u=Ss(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=_({src:t,async:!0},n),(n=vi.get(u))&&fd(t,n),f=a.createElement("script"),dn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function fy(t,n){pa.M(t,n);var a=vs;if(a&&t){var o=Ra(a).hoistableScripts,u=Ss(t),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&fd(t,n),f=a.createElement("script"),dn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function P0(t,n,a,o){var u=(u=se.current)?fc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xs(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xs(a.href);var f=Ra(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(Po(t)))&&!f._p&&(y.instance=f,y.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||dy(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ss(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function xs(t){return'href="'+zt(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function I0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function dy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),dn(n),t.head.appendChild(n))}function Ss(t){return'[src="'+zt(t)+'"]'}function Io(t){return"script[async]"+t}function z0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+zt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),wn(o,"style",u),dc(o,a.precedence,t),n.instance=o;case"stylesheet":u=xs(a.href);var f=t.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,dn(f),f;o=I0(a),(u=vi.get(u))&&ud(o,u),f=(t.ownerDocument||t).createElement("link"),dn(f);var y=f;return y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),wn(f,"link",o),n.state.loading|=4,dc(f,a.precedence,t),n.instance=f;case"script":return f=Ss(a.src),(u=t.querySelector(Io(f)))?(n.instance=u,dn(u),u):(o=a,(u=vi.get(f))&&(o=_({},a),fd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,t));return n.instance}function dc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function B0(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ta]||f[fn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(f):o.set(y,[f])}}return o}function F0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function H0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function py(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xs(o.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,dn(f);return}f=n.ownerDocument||n,o=I0(o),(u=vi.get(u))&&ud(o,u),f=f.createElement("link"),dn(f);var y=f;y._p=new Promise(function(R,H){y.onload=R,y.onerror=H}),wn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dd=0;function my(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&dd===0&&(dd=62500*KS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>dd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(gy,t),mc=null,pc.call(t))}function gy(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var o=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:I,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function _y(t,n,a,o,u,f,y,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function G0(t,n,a,o,u,f,y,R,H,ie,he,Me){return t=new _y(t,n,a,y,H,ie,he,Me,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Zu(f),t}function V0(t){return t?(t=Jr,t):Jr}function k0(t,n,a,o,u,f){u=V0(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ia(t,o,n),a!==null&&(Yn(a,t,n),mo(a,t,n))}function X0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){X0(t,n),(t=t.alternate)&&X0(t,n)}function W0(t){if(t.tag===13||t.tag===31){var n=vr(t,67108864);n!==null&&Yn(n,t,67108864),hd(t,67108864)}}function q0(t){if(t.tag===13||t.tag===31){var n=si();n=Qs(n);var a=vr(t,n);a!==null&&Yn(a,t,n),hd(t,n)}}var _c=!0;function vy(t,n,a,o){var u=B.T;B.T=null;var f=G.p;try{G.p=2,pd(t,n,a,o)}finally{G.p=f,B.T=u}}function xy(t,n,a,o){var u=B.T;B.T=null;var f=G.p;try{G.p=8,pd(t,n,a,o)}finally{G.p=f,B.T=u}}function pd(t,n,a,o){if(_c){var u=md(o);if(u===null)ed(t,n,o,vc,a),Z0(t,o);else if(yy(u,t,n,a,o))o.stopPropagation();else if(Z0(t,o),n&4&&-1<Sy.indexOf(t)){for(;u!==null;){var f=Ji(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ue(f.pendingLanes);if(y!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var H=1<<31-Ne(y);R.entanglements[1]|=H,y&=~H}Fi(f),(Lt&6)===0&&(ec=Ce()+500,Uo(0))}}break;case 31:case 13:R=vr(f,2),R!==null&&Yn(R,f,2),nc(),hd(f,2)}if(f=md(o),f===null&&ed(t,n,o,vc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ed(t,n,o,null,a)}}function md(t){return t=gu(t),gd(t)}var vc=null;function gd(t){if(vc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function Y0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ye()){case D:return 2;case M:return 8;case Y:case ee:return 32;case V:return 268435456;default:return 32}default:return 32}}var _d=!1,Ya=null,Za=null,Ka=null,Bo=new Map,Fo=new Map,Qa=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(t,n){switch(t){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ji(n),n!==null&&W0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function yy(t,n,a,o,u){switch(n){case"focusin":return Ya=Ho(Ya,t,n,a,o,u),!0;case"dragenter":return Za=Ho(Za,t,n,a,o,u),!0;case"mouseover":return Ka=Ho(Ka,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Bo.set(f,Ho(Bo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,Ho(Fo.get(f)||null,t,n,a,o,u)),!0}return!1}function K0(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){q0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){q0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=Ji(a),n!==null&&W0(n),t.blockedOn=a,!1;n.shift()}return!0}function Q0(t,n,a){xc(t)&&a.delete(n)}function My(){_d=!1,Ya!==null&&xc(Ya)&&(Ya=null),Za!==null&&xc(Za)&&(Za=null),Ka!==null&&xc(Ka)&&(Ka=null),Bo.forEach(Q0),Fo.forEach(Q0)}function Sc(t,n){t.blockedOn===n&&(t.blockedOn=null,_d||(_d=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,My)))}var yc=null;function J0(t){yc!==t&&(yc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){yc===t&&(yc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var f=Ji(a);f!==null&&(t.splice(n,3),n-=3,mf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ys(t){function n(H){return Sc(H,t)}Ya!==null&&Sc(Ya,t),Za!==null&&Sc(Za,t),Ka!==null&&Sc(Ka,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)K0(a),a.blockedOn===null&&Qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Tn]||null;if(typeof f=="function")y||J0(a);else if(y){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Tn]||null)R=y.formAction;else if(gd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),J0(a)}}}function j0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function vd(t){this._internalRoot=t}Mc.prototype.render=vd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=si();k0(a,o,t,n,null,null)},Mc.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;k0(t.current,2,null,t,null,null),nc(),n[Gn]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=js();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,t),a===0&&K0(t)}};var $0=e.version;if($0!=="19.2.0")throw Error(r(527,$0,"19.2.0"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var by={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{ce=bc.inject(by),ue=bc}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=sg,f=og,y=lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=G0(t,1,!1,null,null,a,o,null,u,f,y,j0),t[Gn]=n.current,$f(t),new vd(n)},Vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=sg,y=og,R=lg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=G0(t,1,!0,n,a??null,o,u,H,f,y,R,j0),n.context=V0(null),a=n.current,o=si(),o=Qs(o),u=Pa(o),u.callback=null,Ia(a,u,o),a=o,n.current.lanes=a,We(n,a),Fi(n),t[Gn]=n.current,$f(t),new Mc(n)},Vo.version="19.2.0",Vo}var c_;function Iy(){if(c_)return yd.exports;c_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yd.exports=Py(),yd.exports}var zy=Iy();Rv();function il(){return il=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},il.apply(this,arguments)}var sr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(sr||(sr={}));const u_="popstate";function By(s){s===void 0&&(s={});function e(r,l){let{pathname:c,search:d,hash:p}=r.location;return sh("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Cv(l)}return Hy(e,i,null,s)}function vn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function $h(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fy(){return Math.random().toString(36).substr(2,8)}function f_(s,e){return{usr:s.state,key:s.key,idx:e}}function sh(s,e,i,r){return i===void 0&&(i=null),il({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?qs(e):e,{state:i,key:e&&e.key||r||Fy()})}function Cv(s){let{pathname:e="/",search:i="",hash:r=""}=s;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function qs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substr(i),s=s.substr(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function Hy(s,e,i,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:c=!1}=r,d=l.history,p=sr.Pop,m=null,h=x();h==null&&(h=0,d.replaceState(il({},d.state,{idx:h}),""));function x(){return(d.state||{idx:null}).idx}function _(){p=sr.Pop;let S=x(),v=S==null?null:S-h;h=S,m&&m({action:p,location:C.location,delta:v})}function g(S,v){p=sr.Push;let O=sh(C.location,S,v);h=x()+1;let I=f_(O,h),w=C.createHref(O);try{d.pushState(I,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(w)}c&&m&&m({action:p,location:C.location,delta:1})}function b(S,v){p=sr.Replace;let O=sh(C.location,S,v);h=x();let I=f_(O,h),w=C.createHref(O);d.replaceState(I,"",w),c&&m&&m({action:p,location:C.location,delta:0})}function E(S){let v=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof S=="string"?S:Cv(S);return O=O.replace(/ $/,"%20"),vn(v,"No window.location.(origin|href) available to create URL for href: "+O),new URL(O,v)}let C={get action(){return p},get location(){return s(l,d)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(u_,_),m=S,()=>{l.removeEventListener(u_,_),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let v=E(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:b,go(S){return d.go(S)}};return C}var d_;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(d_||(d_={}));function Gy(s,e,i){return i===void 0&&(i="/"),Vy(s,e,i)}function Vy(s,e,i,r){let l=typeof e=="string"?qs(e):e,c=Uv(l.pathname||"/",i);if(c==null)return null;let d=wv(s);ky(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let h=tM(c);p=jy(d[m],h)}return p}function wv(s,e,i,r){e===void 0&&(e=[]),i===void 0&&(i=[]),r===void 0&&(r="");let l=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(vn(m.relativePath.startsWith(r),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(r.length));let h=Fr([r,m.relativePath]),x=i.concat(m);c.children&&c.children.length>0&&(vn(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),wv(c.children,e,x,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:Qy(h,c.index),routesMeta:x})};return s.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let m of Dv(c.path))l(c,d,m)}),e}function Dv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let d=Dv(r.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...d),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function ky(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Jy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const Xy=/^:[\w-]+$/,Wy=3,qy=2,Yy=1,Zy=10,Ky=-2,h_=s=>s==="*";function Qy(s,e){let i=s.split("/"),r=i.length;return i.some(h_)&&(r+=Ky),e&&(r+=qy),i.filter(l=>!h_(l)).reduce((l,c)=>l+(Xy.test(c)?Wy:c===""?Yy:Zy),r)}function Jy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function jy(s,e,i){let{routesMeta:r}=s,l={},c="/",d=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,x=c==="/"?e:e.slice(c.length)||"/",_=$y({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},x),g=m.route;if(!_)return null;Object.assign(l,_.params),d.push({params:l,pathname:Fr([c,_.pathname]),pathnameBase:sM(Fr([c,_.pathnameBase])),route:g}),_.pathnameBase!=="/"&&(c=Fr([c,_.pathnameBase]))}return d}function $y(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=eM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,x,_)=>{let{paramName:g,isOptional:b}=x;if(g==="*"){let C=p[_]||"";d=c.slice(0,c.length-C.length).replace(/(.)\/+$/,"$1")}const E=p[_];return b&&!E?h[g]=void 0:h[g]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:d,pattern:s}}function eM(s,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),$h(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function tM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $h(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Uv(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}const nM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iM=s=>nM.test(s);function aM(s,e){e===void 0&&(e="/");let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?qs(s):s,c;if(i)if(iM(i))c=i;else{if(i.includes("//")){let d=i;i=i.replace(/\/\/+/g,"/"),$h(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+i))}i.startsWith("/")?c=p_(i.substring(1),"/"):c=p_(i,e)}else c=e;return{pathname:c,search:oM(r),hash:lM(l)}}function p_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Td(s,e,i,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Lv(s,e){let i=rM(s);return e?i.map((r,l)=>l===i.length-1?r.pathname:r.pathnameBase):i.map(r=>r.pathnameBase)}function Nv(s,e,i,r){r===void 0&&(r=!1);let l;typeof s=="string"?l=qs(s):(l=il({},s),vn(!l.pathname||!l.pathname.includes("?"),Td("?","pathname","search",l)),vn(!l.pathname||!l.pathname.includes("#"),Td("#","pathname","hash",l)),vn(!l.search||!l.search.includes("#"),Td("#","search","hash",l)));let c=s===""||l.pathname==="",d=c?"/":l.pathname,p;if(d==null)p=i;else{let _=e.length-1;if(!r&&d.startsWith("..")){let g=d.split("/");for(;g[0]==="..";)g.shift(),_-=1;l.pathname=g.join("/")}p=_>=0?e[_]:"/"}let m=aM(l,p),h=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||x)&&(m.pathname+="/"),m}const Fr=s=>s.join("/").replace(/\/\/+/g,"/"),sM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),oM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,lM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function cM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Ov=["post","put","patch","delete"];new Set(Ov);const uM=["get",...Ov];new Set(uM);function al(){return al=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},al.apply(this,arguments)}const ep=Le.createContext(null),fM=Le.createContext(null),ll=Le.createContext(null),cu=Le.createContext(null),cr=Le.createContext({outlet:null,matches:[],isDataRoute:!1}),Pv=Le.createContext(null);function cl(){return Le.useContext(cu)!=null}function tp(){return cl()||vn(!1),Le.useContext(cu).location}function Iv(s){Le.useContext(ll).static||Le.useLayoutEffect(s)}function np(){let{isDataRoute:s}=Le.useContext(cr);return s?TM():dM()}function dM(){cl()||vn(!1);let s=Le.useContext(ep),{basename:e,future:i,navigator:r}=Le.useContext(ll),{matches:l}=Le.useContext(cr),{pathname:c}=tp(),d=JSON.stringify(Lv(l,i.v7_relativeSplatPath)),p=Le.useRef(!1);return Iv(()=>{p.current=!0}),Le.useCallback(function(h,x){if(x===void 0&&(x={}),!p.current)return;if(typeof h=="number"){r.go(h);return}let _=Nv(h,JSON.parse(d),c,x.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Fr([e,_.pathname])),(x.replace?r.replace:r.push)(_,x.state,x)},[e,r,d,c,s])}function hM(){let{matches:s}=Le.useContext(cr),e=s[s.length-1];return e?e.params:{}}function pM(s,e){return mM(s,e)}function mM(s,e,i,r){cl()||vn(!1);let{navigator:l}=Le.useContext(ll),{matches:c}=Le.useContext(cr),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let h=tp(),x;if(e){var _;let S=typeof e=="string"?qs(e):e;m==="/"||(_=S.pathname)!=null&&_.startsWith(m)||vn(!1),x=S}else x=h;let g=x.pathname||"/",b=g;if(m!=="/"){let S=m.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=Gy(s,{pathname:b}),C=SM(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},p,S.params),pathname:Fr([m,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Fr([m,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),c,i,r);return e&&C?Le.createElement(cu.Provider,{value:{location:al({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:sr.Pop}},C):C}function gM(){let s=EM(),e=cM(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Le.createElement(Le.Fragment,null,Le.createElement("h2",null,"Unexpected Application Error!"),Le.createElement("h3",{style:{fontStyle:"italic"}},e),i?Le.createElement("pre",{style:l},i):null,null)}const _M=Le.createElement(gM,null);class vM extends Le.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?Le.createElement(cr.Provider,{value:this.props.routeContext},Le.createElement(Pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xM(s){let{routeContext:e,match:i,children:r}=s,l=Le.useContext(ep);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),Le.createElement(cr.Provider,{value:e},r)}function SM(s,e,i,r){var l;if(e===void 0&&(e=[]),i===void 0&&(i=null),r===void 0&&(r=null),s==null){var c;if(!i)return null;if(i.errors)s=i.matches;else if((c=r)!=null&&c.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let d=s,p=(l=i)==null?void 0:l.errors;if(p!=null){let x=d.findIndex(_=>_.route.id&&p?.[_.route.id]!==void 0);x>=0||vn(!1),d=d.slice(0,Math.min(d.length,x+1))}let m=!1,h=-1;if(i&&r&&r.v7_partialHydration)for(let x=0;x<d.length;x++){let _=d[x];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=x),_.route.id){let{loaderData:g,errors:b}=i,E=_.route.loader&&g[_.route.id]===void 0&&(!b||b[_.route.id]===void 0);if(_.route.lazy||E){m=!0,h>=0?d=d.slice(0,h+1):d=[d[0]];break}}}return d.reduceRight((x,_,g)=>{let b,E=!1,C=null,S=null;i&&(b=p&&_.route.id?p[_.route.id]:void 0,C=_.route.errorElement||_M,m&&(h<0&&g===0?(AM("route-fallback"),E=!0,S=null):h===g&&(E=!0,S=_.route.hydrateFallbackElement||null)));let v=e.concat(d.slice(0,g+1)),O=()=>{let I;return b?I=C:E?I=S:_.route.Component?I=Le.createElement(_.route.Component,null):_.route.element?I=_.route.element:I=x,Le.createElement(xM,{match:_,routeContext:{outlet:x,matches:v,isDataRoute:i!=null},children:I})};return i&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?Le.createElement(vM,{location:i.location,revalidation:i.revalidation,component:C,error:b,children:O(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):O()},null)}var zv=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(zv||{}),Bv=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Bv||{});function yM(s){let e=Le.useContext(ep);return e||vn(!1),e}function MM(s){let e=Le.useContext(fM);return e||vn(!1),e}function bM(s){let e=Le.useContext(cr);return e||vn(!1),e}function Fv(s){let e=bM(),i=e.matches[e.matches.length-1];return i.route.id||vn(!1),i.route.id}function EM(){var s;let e=Le.useContext(Pv),i=MM(),r=Fv();return e!==void 0?e:(s=i.errors)==null?void 0:s[r]}function TM(){let{router:s}=yM(zv.UseNavigateStable),e=Fv(Bv.UseNavigateStable),i=Le.useRef(!1);return Iv(()=>{i.current=!0}),Le.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?s.navigate(l):s.navigate(l,al({fromRouteId:e},c)))},[s,e])}const m_={};function AM(s,e,i){m_[s]||(m_[s]=!0)}function RM(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function CM(s){let{to:e,replace:i,state:r,relative:l}=s;cl()||vn(!1);let{future:c,static:d}=Le.useContext(ll),{matches:p}=Le.useContext(cr),{pathname:m}=tp(),h=np(),x=Nv(e,Lv(p,c.v7_relativeSplatPath),m,l==="path"),_=JSON.stringify(x);return Le.useEffect(()=>h(JSON.parse(_),{replace:i,state:r,relative:l}),[h,_,l,i,r]),null}function Qo(s){vn(!1)}function wM(s){let{basename:e="/",children:i=null,location:r,navigationType:l=sr.Pop,navigator:c,static:d=!1,future:p}=s;cl()&&vn(!1);let m=e.replace(/^\/*/,"/"),h=Le.useMemo(()=>({basename:m,navigator:c,static:d,future:al({v7_relativeSplatPath:!1},p)}),[m,p,c,d]);typeof r=="string"&&(r=qs(r));let{pathname:x="/",search:_="",hash:g="",state:b=null,key:E="default"}=r,C=Le.useMemo(()=>{let S=Uv(x,m);return S==null?null:{location:{pathname:S,search:_,hash:g,state:b,key:E},navigationType:l}},[m,x,_,g,b,E,l]);return C==null?null:Le.createElement(ll.Provider,{value:h},Le.createElement(cu.Provider,{children:i,value:C}))}function DM(s){let{children:e,location:i}=s;return pM(oh(e),i)}new Promise(()=>{});function oh(s,e){e===void 0&&(e=[]);let i=[];return Le.Children.forEach(s,(r,l)=>{if(!Le.isValidElement(r))return;let c=[...e,l];if(r.type===Le.Fragment){i.push.apply(i,oh(r.props.children,c));return}r.type!==Qo&&vn(!1),!r.props.index||!r.props.children||vn(!1);let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=oh(r.props.children,c)),i.push(d)}),i}const UM="6";try{window.__reactRouterVersion=UM}catch{}const LM="startTransition",g_=Uy[LM];function NM(s){let{basename:e,children:i,future:r,window:l}=s,c=Le.useRef();c.current==null&&(c.current=By({window:l,v5Compat:!0}));let d=c.current,[p,m]=Le.useState({action:d.action,location:d.location}),{v7_startTransition:h}=r||{},x=Le.useCallback(_=>{h&&g_?g_(()=>m(_)):m(_)},[m,h]);return Le.useLayoutEffect(()=>d.listen(x),[d,x]),Le.useEffect(()=>RM(r),[r]),Le.createElement(wM,{basename:e,children:i,location:p.location,navigationType:p.action,navigator:d,future:r})}var __;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(__||(__={}));var v_;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(v_||(v_={}));const ip="185",OM=0,x_=1,PM=2,Zc=1,IM=2,Jo=3,lr=0,Zn=1,ki=2,ya=0,Fs=1,$o=2,S_=3,y_=4,zM=5,Pr=100,BM=101,FM=102,HM=103,GM=104,VM=200,kM=201,XM=202,WM=203,lh=204,ch=205,qM=206,YM=207,ZM=208,KM=209,QM=210,JM=211,jM=212,$M=213,eb=214,uh=0,fh=1,dh=2,Vs=3,hh=4,ph=5,mh=6,gh=7,Hv=0,tb=1,nb=2,qi=0,Gv=1,Vv=2,kv=3,Xv=4,Wv=5,qv=6,Yv=7,Zv=300,Hr=301,ks=302,Ad=303,Rd=304,uu=306,_h=1e3,Sa=1001,vh=1002,Dn=1003,ib=1004,Ec=1005,In=1006,Cd=1007,zr=1008,Mi=1009,Kv=1010,Qv=1011,rl=1012,ap=1013,Zi=1014,Xi=1015,ba=1016,rp=1017,sp=1018,sl=1020,Jv=35902,jv=35899,$v=1021,ex=1022,Ni=1023,Ea=1026,Br=1027,tx=1028,op=1029,Gr=1030,lp=1031,cp=1033,Kc=33776,Qc=33777,Jc=33778,jc=33779,xh=35840,Sh=35841,yh=35842,Mh=35843,bh=36196,Eh=37492,Th=37496,Ah=37488,Rh=37489,eu=37490,Ch=37491,wh=37808,Dh=37809,Uh=37810,Lh=37811,Nh=37812,Oh=37813,Ph=37814,Ih=37815,zh=37816,Bh=37817,Fh=37818,Hh=37819,Gh=37820,Vh=37821,kh=36492,Xh=36494,Wh=36495,qh=36283,Yh=36284,tu=36285,Zh=36286,ab=3200,M_=0,rb=1,rr="",Si="srgb",nu="srgb-linear",iu="linear",Gt="srgb",Ms=7680,b_=519,sb=512,ob=513,lb=514,up=515,cb=516,ub=517,fp=518,fb=519,E_=35044,T_=35048,A_="300 es",Wi=2e3,au=2001;function db(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hb(){const s=ru("canvas");return s.style.display="block",s}const R_={};function C_(...s){const e="THREE."+s.shift();console.log(e,...s)}function nx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=nx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function At(...s){s=nx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Hs(...s){const e=s.join(" ");e in R_||(R_[e]=!0,st(...s))}function pb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const mb={[uh]:fh,[dh]:mh,[hh]:gh,[Vs]:ph,[fh]:uh,[mh]:dh,[gh]:hh,[ph]:Vs};class kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let w_=1234567;const el=Math.PI/180,ol=180/Math.PI;function Ys(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function bt(s,e,i){return Math.max(e,Math.min(i,s))}function dp(s,e){return(s%e+e)%e}function gb(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function _b(s,e,i){return s!==e?(i-s)/(e-s):0}function tl(s,e,i){return(1-i)*s+i*e}function vb(s,e,i,r){return tl(s,e,1-Math.exp(-i*r))}function xb(s,e=1){return e-Math.abs(dp(s,e*2)-e)}function Sb(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function yb(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Mb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bb(s,e){return s+Math.random()*(e-s)}function Eb(s){return s*(.5-Math.random())}function Tb(s){s!==void 0&&(w_=s);let e=w_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ab(s){return s*el}function Rb(s){return s*ol}function Cb(s){return(s&s-1)===0&&s!==0}function wb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Db(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ub(s,e,i,r,l){const c=Math.cos,d=Math.sin,p=c(i/2),m=d(i/2),h=c((e+r)/2),x=d((e+r)/2),_=c((e-r)/2),g=d((e-r)/2),b=c((r-e)/2),E=d((r-e)/2);switch(l){case"XYX":s.set(p*x,m*_,m*g,p*h);break;case"YZY":s.set(m*g,p*x,m*_,p*h);break;case"ZXZ":s.set(m*_,m*g,p*x,p*h);break;case"XZX":s.set(p*x,m*E,m*b,p*h);break;case"YXY":s.set(m*b,p*x,m*E,p*h);break;case"ZYZ":s.set(m*E,m*b,p*x,p*h);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Is(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wd={DEG2RAD:el,RAD2DEG:ol,generateUUID:Ys,clamp:bt,euclideanModulo:dp,mapLinear:gb,inverseLerp:_b,lerp:tl,damp:vb,pingpong:xb,smoothstep:Sb,smootherstep:yb,randInt:Mb,randFloat:bb,randFloatSpread:Eb,seededRandom:Tb,degToRad:Ab,radToDeg:Rb,isPowerOfTwo:Cb,ceilPowerOfTwo:wb,floorPowerOfTwo:Db,setQuaternionFromProperEuler:Ub,normalize:Fn,denormalize:Is},_p=class _p{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_p.prototype.isVector2=!0;let Rt=_p;class Zs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],x=r[l+2],_=r[l+3],g=c[d+0],b=c[d+1],E=c[d+2],C=c[d+3];if(_!==C||m!==g||h!==b||x!==E){let S=m*g+h*b+x*E+_*C;S<0&&(g=-g,b=-b,E=-E,C=-C,S=-S);let v=1-p;if(S<.9995){const O=Math.acos(S),I=Math.sin(O);v=Math.sin(v*O)/I,p=Math.sin(p*O)/I,m=m*v+g*p,h=h*v+b*p,x=x*v+E*p,_=_*v+C*p}else{m=m*v+g*p,h=h*v+b*p,x=x*v+E*p,_=_*v+C*p;const O=1/Math.sqrt(m*m+h*h+x*x+_*_);m*=O,h*=O,x*=O,_*=O}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],x=r[l+3],_=c[d],g=c[d+1],b=c[d+2],E=c[d+3];return e[i]=p*E+x*_+m*b-h*g,e[i+1]=m*E+x*g+h*_-p*b,e[i+2]=h*E+x*b+p*g-m*_,e[i+3]=x*E-p*_-m*g-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(l/2),_=p(c/2),g=m(r/2),b=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=g*x*_+h*b*E,this._y=h*b*_-g*x*E,this._z=h*x*E+g*b*_,this._w=h*x*_-g*b*E;break;case"YXZ":this._x=g*x*_+h*b*E,this._y=h*b*_-g*x*E,this._z=h*x*E-g*b*_,this._w=h*x*_+g*b*E;break;case"ZXY":this._x=g*x*_-h*b*E,this._y=h*b*_+g*x*E,this._z=h*x*E+g*b*_,this._w=h*x*_-g*b*E;break;case"ZYX":this._x=g*x*_-h*b*E,this._y=h*b*_+g*x*E,this._z=h*x*E-g*b*_,this._w=h*x*_+g*b*E;break;case"YZX":this._x=g*x*_+h*b*E,this._y=h*b*_+g*x*E,this._z=h*x*E-g*b*_,this._w=h*x*_-g*b*E;break;case"XZY":this._x=g*x*_-h*b*E,this._y=h*b*_-g*x*E,this._z=h*x*E+g*b*_,this._w=h*x*_+g*b*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],_=i[10],g=r+p+_;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-h)*b,this._z=(d-l)*b}else if(r>p&&r>_){const b=2*Math.sqrt(1+r-p-_);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+h)/b}else if(p>_){const b=2*Math.sqrt(1+p-r-_);this._w=(c-h)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+_-r-p);this._w=(d-l)/b,this._x=(c+h)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-r*h,this._z=c*x+d*h+r*m-l*p,this._w=d*x-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vp=class vp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(D_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(D_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),x=2*(p*i-c*l),_=2*(c*r-d*i);return this.x=i+m*h+d*_-p*x,this.y=r+m*x+p*h-c*_,this.z=l+m*_+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;let j=vp;const Dd=new j,D_=new Zs,xp=class xp{constructor(e,i,r,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],_=r[7],g=r[2],b=r[5],E=r[8],C=l[0],S=l[3],v=l[6],O=l[1],I=l[4],w=l[7],N=l[2],L=l[5],z=l[8];return c[0]=d*C+p*O+m*N,c[3]=d*S+p*I+m*L,c[6]=d*v+p*w+m*z,c[1]=h*C+x*O+_*N,c[4]=h*S+x*I+_*L,c[7]=h*v+x*w+_*z,c[2]=g*C+b*O+E*N,c[5]=g*S+b*I+E*L,c[8]=g*v+b*w+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-r*c*x+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],_=x*d-p*h,g=p*m-x*c,b=h*c-d*m,E=i*_+r*g+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(l*h-x*r)*C,e[2]=(p*r-l*d)*C,e[3]=g*C,e[4]=(x*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=b*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ud.makeScale(e,i)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ud.makeRotation(-e)),this}translate(e,i){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ud.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xp.prototype.isMatrix3=!0;let ut=xp;const Ud=new ut,U_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const s={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Gt&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=Gs(l.r),l.g=Gs(l.g),l.b=Gs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[nu]:{primaries:e,whitePoint:r,transfer:iu,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const Tt=Lb();function Ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class Nb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{bs===void 0&&(bs=ru("canvas")),bs.width=e.width,bs.height=e.height;const l=bs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=bs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ma(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ma(i[r]/255)*255):i[r]=Ma(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ob=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Ld(l[d].image)):c.push(Ld(l[d]))}else c=Ld(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Pb=0;const Nd=new j;class zn extends kr{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=Sa,l=Sa,c=In,d=zr,p=Ni,m=Mi,h=zn.DEFAULT_ANISOTROPY,x=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=Ys(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _h:e.x=e.x-Math.floor(e.x);break;case Sa:e.x=e.x<0?0:1;break;case vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _h:e.y=e.y-Math.floor(e.y);break;case Sa:e.y=e.y<0?0:1;break;case vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Zv;zn.DEFAULT_ANISOTROPY=1;const Sp=class Sp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],x=m[4],_=m[8],g=m[1],b=m[5],E=m[9],C=m[2],S=m[6],v=m[10];if(Math.abs(x-g)<.01&&Math.abs(_-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+C)<.1&&Math.abs(E+S)<.1&&Math.abs(h+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,w=(b+1)/2,N=(v+1)/2,L=(x+g)/4,z=(_+C)/4,T=(E+S)/4;return I>w&&I>N?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=L/r,c=z/r):w>N?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=L/l,c=T/l):N<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),r=z/c,l=T/c),this.set(r,l,c,i),this}let O=Math.sqrt((S-E)*(S-E)+(_-C)*(_-C)+(g-x)*(g-x));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(_-C)/O,this.z=(g-x)/O,this.w=Math.acos((h+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sp.prototype.isVector4=!0;let on=Sp;class Ib extends kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new zn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Ib{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ix extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zb extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(e,i,r,l,c,d,p,m,h,x,_,g,b,E,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,x,_,g,b,E,C,S)}set(e,i,r,l,c,d,p,m,h,x,_,g,b,E,C,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=x,v[10]=_,v[14]=g,v[3]=b,v[7]=E,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Es.setFromMatrixColumn(e,0).length(),c=1/Es.setFromMatrixColumn(e,1).length(),d=1/Es.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=d*x,b=d*_,E=p*x,C=p*_;i[0]=m*x,i[4]=-m*_,i[8]=h,i[1]=b+E*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=E+b*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*x,b=m*_,E=h*x,C=h*_;i[0]=g+C*p,i[4]=E*p-b,i[8]=d*h,i[1]=d*_,i[5]=d*x,i[9]=-p,i[2]=b*p-E,i[6]=C+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*x,b=m*_,E=h*x,C=h*_;i[0]=g-C*p,i[4]=-d*_,i[8]=E+b*p,i[1]=b+E*p,i[5]=d*x,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*x,b=d*_,E=p*x,C=p*_;i[0]=m*x,i[4]=E*h-b,i[8]=g*h+C,i[1]=m*_,i[5]=C*h+g,i[9]=b*h-E,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,b=d*h,E=p*m,C=p*h;i[0]=m*x,i[4]=C-g*_,i[8]=E*_+b,i[1]=_,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=b*_+E,i[10]=g-C*_}else if(e.order==="XZY"){const g=d*m,b=d*h,E=p*m,C=p*h;i[0]=m*x,i[4]=-_,i[8]=h*x,i[1]=g*_+C,i[5]=d*x,i[9]=b*_-E,i[2]=E*_-b,i[6]=p*x,i[10]=C*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bb,e,Fb)}lookAt(e,i,r){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ja.crossVectors(r,oi),ja.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ja.crossVectors(r,oi)),ja.normalize(),Tc.crossVectors(oi,ja),l[0]=ja.x,l[4]=Tc.x,l[8]=oi.x,l[1]=ja.y,l[5]=Tc.y,l[9]=oi.y,l[2]=ja.z,l[6]=Tc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],_=r[5],g=r[9],b=r[13],E=r[2],C=r[6],S=r[10],v=r[14],O=r[3],I=r[7],w=r[11],N=r[15],L=l[0],z=l[4],T=l[8],P=l[12],Z=l[1],k=l[5],J=l[9],de=l[13],me=l[2],$=l[6],B=l[10],G=l[14],te=l[3],_e=l[7],Ae=l[11],U=l[15];return c[0]=d*L+p*Z+m*me+h*te,c[4]=d*z+p*k+m*$+h*_e,c[8]=d*T+p*J+m*B+h*Ae,c[12]=d*P+p*de+m*G+h*U,c[1]=x*L+_*Z+g*me+b*te,c[5]=x*z+_*k+g*$+b*_e,c[9]=x*T+_*J+g*B+b*Ae,c[13]=x*P+_*de+g*G+b*U,c[2]=E*L+C*Z+S*me+v*te,c[6]=E*z+C*k+S*$+v*_e,c[10]=E*T+C*J+S*B+v*Ae,c[14]=E*P+C*de+S*G+v*U,c[3]=O*L+I*Z+w*me+N*te,c[7]=O*z+I*k+w*$+N*_e,c[11]=O*T+I*J+w*B+N*Ae,c[15]=O*P+I*de+w*G+N*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],_=e[6],g=e[10],b=e[14],E=e[3],C=e[7],S=e[11],v=e[15],O=m*b-h*g,I=p*b-h*_,w=p*g-m*_,N=d*b-h*x,L=d*g-m*x,z=d*_-p*x;return i*(C*O-S*I+v*w)-r*(E*O-S*N+v*L)+l*(E*I-C*N+v*z)-c*(E*w-C*L+S*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],x=e[10];return i*(d*x-p*h)-r*(c*x-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],_=e[9],g=e[10],b=e[11],E=e[12],C=e[13],S=e[14],v=e[15],O=i*p-r*d,I=i*m-l*d,w=i*h-c*d,N=r*m-l*p,L=r*h-c*p,z=l*h-c*m,T=x*C-_*E,P=x*S-g*E,Z=x*v-b*E,k=_*S-g*C,J=_*v-b*C,de=g*v-b*S,me=O*de-I*J+w*k+N*Z-L*P+z*T;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/me;return e[0]=(p*de-m*J+h*k)*$,e[1]=(l*J-r*de-c*k)*$,e[2]=(C*z-S*L+v*N)*$,e[3]=(g*L-_*z-b*N)*$,e[4]=(m*Z-d*de-h*P)*$,e[5]=(i*de-l*Z+c*P)*$,e[6]=(S*w-E*z-v*I)*$,e[7]=(x*z-g*w+b*I)*$,e[8]=(d*J-p*Z+h*T)*$,e[9]=(r*Z-i*J-c*T)*$,e[10]=(E*L-C*w+v*O)*$,e[11]=(_*w-x*L-b*O)*$,e[12]=(p*P-d*k-m*T)*$,e[13]=(i*k-r*P+l*T)*$,e[14]=(C*I-E*N-S*O)*$,e[15]=(x*N-_*I+g*O)*$,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,x=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+r,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,_=p+p,g=c*h,b=c*x,E=c*_,C=d*x,S=d*_,v=p*_,O=m*h,I=m*x,w=m*_,N=r.x,L=r.y,z=r.z;return l[0]=(1-(C+v))*N,l[1]=(b+w)*N,l[2]=(E-I)*N,l[3]=0,l[4]=(b-w)*L,l[5]=(1-(g+v))*L,l[6]=(S+O)*L,l[7]=0,l[8]=(E+I)*z,l[9]=(S-O)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=Es.set(l[0],l[1],l[2]).length();const p=Es.set(l[4],l[5],l[6]).length(),m=Es.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const h=1/d,x=1/p,_=1/m;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,i.setFromRotationMatrix(wi),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=Wi,m=!1){const h=this.elements,x=2*c/(i-e),_=2*c/(r-l),g=(i+e)/(i-e),b=(r+l)/(r-l);let E,C;if(m)E=c/(d-c),C=d*c/(d-c);else if(p===Wi)E=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===au)E=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=Wi,m=!1){const h=this.elements,x=2/(i-e),_=2/(r-l),g=-(i+e)/(i-e),b=-(r+l)/(r-l);let E,C;if(m)E=1/(d-c),C=d/(d-c);else if(p===Wi)E=-2/(d-c),C=-(d+c)/(d-c);else if(p===au)E=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};lu.prototype.isMatrix4=!0;let ln=lu;const Es=new j,wi=new ln,Bb=new j(0,0,0),Fb=new j(1,1,1),ja=new j,Tc=new j,oi=new j,N_=new ln,O_=new Zs;class Vr{constructor(e=0,i=0,r=0,l=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],_=l[2],g=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return O_.setFromEuler(this),this.setFromQuaternion(O_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hb=0;const P_=new j,Ts=new Zs,ma=new ln,Ac=new j,ko=new j,Gb=new j,Vb=new Zs,I_=new j(1,0,0),z_=new j(0,1,0),B_=new j(0,0,1),F_={type:"added"},kb={type:"removed"},As={type:"childadded",child:null},Od={type:"childremoved",child:null};class Kn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new j,i=new Vr,r=new Zs,l=new j(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new ut}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(I_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(B_,e)}translateOnAxis(e,i){return P_.copy(e).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(I_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(B_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ac.copy(e):Ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(ko,Ac,this.up):ma.lookAt(Ac,ko,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(ma),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(F_),As.child=e,this.dispatchEvent(As),As.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kb),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(F_),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),_=d(e.shapes),g=d(e.skeletons),b=d(e.animations),E=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new j(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zs extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),v=this._getHandJoint(h,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const x=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=x.position.distanceTo(_.position),b=.02,E=.005;h.inputState.pinching&&g>b+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=b-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new zs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Id(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ut{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=dp(e,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Id(d,c,e+1/3),this.g=Id(d,c,e),this.b=Id(d,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=ax[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Tt.workingToColorSpace(Pn.copy(this),e),Math.round(bt(Pn.r*255,0,255))*65536+Math.round(bt(Pn.g*255,0,255))*256+Math.round(bt(Pn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const _=d-p;switch(h=x<=.5?_/(d+p):_/(2-d-p),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Si){Tt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(Rc);const r=tl($a.h,Rc.h,i),l=tl($a.s,Rc.s,i),c=tl($a.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Ut;Ut.NAMES=ax;class Wb extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new j,ga=new j,zd=new j,_a=new j,Rs=new j,Cs=new j,H_=new j,Bd=new j,Fd=new j,Hd=new j,Gd=new on,Vd=new on,kd=new on;class Li{constructor(e=new j,i=new j,r=new j){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Di.subVectors(l,i),ga.subVectors(r,i),zd.subVectors(e,i);const d=Di.dot(Di),p=Di.dot(ga),m=Di.dot(zd),h=ga.dot(ga),x=ga.dot(zd),_=d*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,b=(h*m-p*x)*g,E=(d*x-p*m)*g;return c.set(1-b-E,E,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(d,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Gd,c.x),d.addScaledVector(Vd,c.y),d.addScaledVector(kd,c.z),d}static isFrontFacing(e,i,r,l){return Di.subVectors(r,i),ga.subVectors(e,i),Di.cross(ga).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Di.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Rs.subVectors(l,r),Cs.subVectors(c,r),Bd.subVectors(e,r);const m=Rs.dot(Bd),h=Cs.dot(Bd);if(m<=0&&h<=0)return i.copy(r);Fd.subVectors(e,l);const x=Rs.dot(Fd),_=Cs.dot(Fd);if(x>=0&&_<=x)return i.copy(l);const g=m*_-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Rs,d);Hd.subVectors(e,c);const b=Rs.dot(Hd),E=Cs.dot(Hd);if(E>=0&&b<=E)return i.copy(c);const C=b*h-m*E;if(C<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(r).addScaledVector(Cs,p);const S=x*E-b*_;if(S<=0&&_-x>=0&&b-E>=0)return H_.subVectors(c,l),p=(_-x)/(_-x+(b-E)),i.copy(l).addScaledVector(H_,p);const v=1/(S+C+g);return d=C*v,p=g*v,i.copy(r).addScaledVector(Rs,d).addScaledVector(Cs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ul{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cc.copy(r.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),wc.subVectors(this.max,Xo),ws.subVectors(e.a,Xo),Ds.subVectors(e.b,Xo),Us.subVectors(e.c,Xo),er.subVectors(Ds,ws),tr.subVectors(Us,Ds),Ur.subVectors(ws,Us);let i=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Ur.z,Ur.y,er.z,0,-er.x,tr.z,0,-tr.x,Ur.z,0,-Ur.x,-er.y,er.x,0,-tr.y,tr.x,0,-Ur.y,Ur.x,0];return!Xd(i,ws,Ds,Us,wc)||(i=[1,0,0,0,1,0,0,0,1],!Xd(i,ws,Ds,Us,wc))?!1:(Dc.crossVectors(er,tr),i=[Dc.x,Dc.y,Dc.z],Xd(i,ws,Ds,Us,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new j,new j,new j,new j,new j,new j,new j,new j],Ui=new j,Cc=new ul,ws=new j,Ds=new j,Us=new j,er=new j,tr=new j,Ur=new j,Xo=new j,wc=new j,Dc=new j,Lr=new j;function Xd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Lr.fromArray(s,c);const p=l.x*Math.abs(Lr.x)+l.y*Math.abs(Lr.y)+l.z*Math.abs(Lr.z),m=e.dot(Lr),h=i.dot(Lr),x=r.dot(Lr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const _n=new j,Uc=new Rt;let qb=0;class bi extends kr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=E_,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Is(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Is(i,this.array)),i}setX(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Is(i,this.array)),i}setY(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Is(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Is(i,this.array)),i}setW(e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==E_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class rx extends bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class sx extends bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Un extends bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const Yb=new ul,Wo=new j,Wd=new j;class fu{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Yb.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Wo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Wd)),this.expandByPoint(Wo.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Zb=0;const xi=new ln,qd=new Kn,Ls=new j,li=new ul,qo=new ul,En=new j;class ui extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(db(e)?sx:rx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];qo.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(li.min,qo.min),li.expandByPoint(En),En.addVectors(li.max,qo.max),li.expandByPoint(En)):(li.expandByPoint(qo.min),li.expandByPoint(qo.max))}li.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)En.fromBufferAttribute(p,h),m&&(Ls.fromBufferAttribute(e,h),En.add(Ls)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new bi(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new j,m[T]=new j;const h=new j,x=new j,_=new j,g=new Rt,b=new Rt,E=new Rt,C=new j,S=new j;function v(T,P,Z){h.fromBufferAttribute(r,T),x.fromBufferAttribute(r,P),_.fromBufferAttribute(r,Z),g.fromBufferAttribute(c,T),b.fromBufferAttribute(c,P),E.fromBufferAttribute(c,Z),x.sub(h),_.sub(h),b.sub(g),E.sub(g);const k=1/(b.x*E.y-E.x*b.y);isFinite(k)&&(C.copy(x).multiplyScalar(E.y).addScaledVector(_,-b.y).multiplyScalar(k),S.copy(_).multiplyScalar(b.x).addScaledVector(x,-E.x).multiplyScalar(k),p[T].add(C),p[P].add(C),p[Z].add(C),m[T].add(S),m[P].add(S),m[Z].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,P=O.length;T<P;++T){const Z=O[T],k=Z.start,J=Z.count;for(let de=k,me=k+J;de<me;de+=3)v(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const I=new j,w=new j,N=new j,L=new j;function z(T){N.fromBufferAttribute(l,T),L.copy(N);const P=p[T];I.copy(P),I.sub(N.multiplyScalar(N.dot(P))).normalize(),w.crossVectors(L,P);const k=w.dot(m[T])<0?-1:1;d.setXYZW(T,I.x,I.y,I.z,k)}for(let T=0,P=O.length;T<P;++T){const Z=O[T],k=Z.start,J=Z.count;for(let de=k,me=k+J;de<me;de+=3)z(e.getX(de+0)),z(e.getX(de+1)),z(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,b=r.count;g<b;g++)r.setXYZ(g,0,0,0);const l=new j,c=new j,d=new j,p=new j,m=new j,h=new j,x=new j,_=new j;if(e)for(let g=0,b=e.count;g<b;g+=3){const E=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),p.add(x),m.add(x),h.add(x),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,b=i.count;g<b;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,_=p.normalized,g=new h.constructor(m.length*x);let b=0,E=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?b=m[C]*p.data.stride+p.offset:b=m[C]*x;for(let v=0;v<x;v++)g[E++]=h[b++]}return new bi(g,x,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ui,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,_=h.length;x<_;x++){const g=h[x],b=e(g,r);m.push(b)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let _=0,g=h.length;_<g;_++){const b=h[_];x.push(b.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],_=c[h];for(let g=0,b=_.length;g<b;g++)x.push(_[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Kb=0;class fl extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=Fs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==lh&&(r.blendSrc=this.blendSrc),this.blendDst!==ch&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==b_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new j,Yd=new j,Lc=new j,nr=new j,Zd=new j,Nc=new j,Kd=new j;class mp{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yd.copy(e).add(i).multiplyScalar(.5),Lc.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(Yd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Lc),p=nr.dot(this.direction),m=-nr.dot(Lc),h=nr.lengthSq(),x=Math.abs(1-d*d);let _,g,b,E;if(x>0)if(_=d*m-p,g=d*p-m,E=c*x,_>=0)if(g>=-E)if(g<=E){const C=1/x;_*=C,g*=C,b=_*(_+d*g+2*p)+g*(d*_+g+2*m)+h}else g=c,_=Math.max(0,-(d*g+p)),b=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(d*g+p)),b=-_*_+g*(g+2*m)+h;else g<=-E?(_=Math.max(0,-(-d*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),b=-_*_+g*(g+2*m)+h):g<=E?(_=0,g=Math.min(Math.max(-c,-m),c),b=g*(g+2*m)+h):(_=Math.max(0,-(d*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),b=-_*_+g*(g+2*m)+h);else g=d>0?-c:c,_=Math.max(0,-(d*g+p)),b=-_*_+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Yd).addScaledVector(Lc,g),b}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const r=xa.dot(this.direction),l=xa.dot(xa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(p=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,r,l,c){Zd.subVectors(i,e),Nc.subVectors(r,e),Kd.crossVectors(Zd,Nc);let d=this.direction.dot(Kd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;nr.subVectors(this.origin,e);const m=p*this.direction.dot(Nc.crossVectors(nr,Nc));if(m<0)return null;const h=p*this.direction.dot(Zd.cross(nr));if(h<0||m+h>d)return null;const x=-p*nr.dot(Kd);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bs extends fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=Hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const G_=new ln,Nr=new mp,Oc=new fu,V_=new j,Pc=new j,Ic=new j,zc=new j,Qd=new j,Bc=new j,k_=new j,Fc=new j;class ci extends Kn{constructor(e=new ui,i=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],_=c[m];x!==0&&(Qd.fromBufferAttribute(_,e),d?Bc.addScaledVector(Qd,x):Bc.addScaledVector(Qd.sub(i),x))}i.add(Bc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Nr.copy(e.ray).recast(e.near),!(Oc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Oc,V_)===null||Nr.origin.distanceToSquared(V_)>(e.far-e.near)**2))&&(G_.copy(c).invert(),Nr.copy(e.ray).applyMatrix4(G_),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,g=c.groups,b=c.drawRange;if(p!==null)if(Array.isArray(d))for(let E=0,C=g.length;E<C;E++){const S=g[E],v=d[S.materialIndex],O=Math.max(S.start,b.start),I=Math.min(p.count,Math.min(S.start+S.count,b.start+b.count));for(let w=O,N=I;w<N;w+=3){const L=p.getX(w),z=p.getX(w+1),T=p.getX(w+2);l=Hc(this,v,e,r,h,x,_,L,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let S=E,v=C;S<v;S+=3){const O=p.getX(S),I=p.getX(S+1),w=p.getX(S+2);l=Hc(this,d,e,r,h,x,_,O,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,C=g.length;E<C;E++){const S=g[E],v=d[S.materialIndex],O=Math.max(S.start,b.start),I=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let w=O,N=I;w<N;w+=3){const L=w,z=w+1,T=w+2;l=Hc(this,v,e,r,h,x,_,L,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let S=E,v=C;S<v;S+=3){const O=S,I=S+1,w=S+2;l=Hc(this,d,e,r,h,x,_,O,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Qb(s,e,i,r,l,c,d,p){let m;if(e.side===Zn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===lr,p),m===null)return null;Fc.copy(p),Fc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Fc);return h<i.near||h>i.far?null:{distance:h,point:Fc.clone(),object:s}}function Hc(s,e,i,r,l,c,d,p,m,h){s.getVertexPosition(p,Pc),s.getVertexPosition(m,Ic),s.getVertexPosition(h,zc);const x=Qb(s,e,i,r,Pc,Ic,zc,k_);if(x){const _=new j;Li.getBarycoord(k_,Pc,Ic,zc,_),l&&(x.uv=Li.getInterpolatedAttribute(l,p,m,h,_,new Rt)),c&&(x.uv1=Li.getInterpolatedAttribute(c,p,m,h,_,new Rt)),d&&(x.normal=Li.getInterpolatedAttribute(d,p,m,h,_,new j),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new j,materialIndex:0};Li.getNormal(Pc,Ic,zc,g.normal),x.face=g,x.barycoord=_}return x}class Jb extends zn{constructor(e=null,i=1,r=1,l,c,d,p,m,h=Dn,x=Dn,_,g){super(null,d,p,m,h,x,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jd=new j,jb=new j,$b=new ut;class ar{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Jd.subVectors(r,i).cross(jb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Jd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$b.getNormalMatrix(e),l=this.coplanarPoint(Jd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new fu,eE=new Rt(.5,.5),Gc=new j;class ox{constructor(e=new ar,i=new ar,r=new ar,l=new ar,c=new ar,d=new ar){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Wi,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],_=c[5],g=c[6],b=c[7],E=c[8],C=c[9],S=c[10],v=c[11],O=c[12],I=c[13],w=c[14],N=c[15];if(l[0].setComponents(h-d,b-x,v-E,N-O).normalize(),l[1].setComponents(h+d,b+x,v+E,N+O).normalize(),l[2].setComponents(h+p,b+_,v+C,N+I).normalize(),l[3].setComponents(h-p,b-_,v-C,N-I).normalize(),r)l[4].setComponents(m,g,S,w).normalize(),l[5].setComponents(h-m,b-g,v-S,N-w).normalize();else if(l[4].setComponents(h-m,b-g,v-S,N-w).normalize(),i===Wi)l[5].setComponents(h+m,b+g,v+S,N+w).normalize();else if(i===au)l[5].setComponents(m,g,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const i=eE.distanceTo(e.center);return Or.radius=.7071067811865476+i,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lx extends fl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new j,ou=new j,X_=new ln,Yo=new mp,Vc=new fu,jd=new j,W_=new j;class tE extends Kn{constructor(e=new ui,i=new lx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=su.distanceTo(ou);e.setAttribute("lineDistance",new Un(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,e.ray.intersectsSphere(Vc)===!1)return;X_.copy(l).invert(),Yo.copy(e.ray).applyMatrix4(X_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const b=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let C=b,S=E-1;C<S;C+=h){const v=x.getX(C),O=x.getX(C+1),I=kc(this,e,Yo,m,v,O,C);I&&i.push(I)}if(this.isLineLoop){const C=x.getX(E-1),S=x.getX(b),v=kc(this,e,Yo,m,C,S,E-1);v&&i.push(v)}}else{const b=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let C=b,S=E-1;C<S;C+=h){const v=kc(this,e,Yo,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=kc(this,e,Yo,m,E-1,b,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function kc(s,e,i,r,l,c,d){const p=s.geometry.attributes.position;if(su.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),i.distanceSqToSegment(su,ou,jd,W_)>r)return;jd.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(jd);if(!(h<e.near||h>e.far))return{distance:h,point:W_.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const q_=new j,Y_=new j;class nE extends tE{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)q_.fromBufferAttribute(i,l),Y_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+q_.distanceTo(Y_);e.setAttribute("lineDistance",new Un(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cx extends zn{constructor(e=[],i=Hr,r,l,c,d,p,m,h,x){super(e,i,r,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iE extends zn{constructor(e,i,r,l,c,d,p,m,h){super(e,i,r,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xs extends zn{constructor(e,i,r=Zi,l,c,d,p=Dn,m=Dn,h,x=Ea,_=1){if(x!==Ea&&x!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class aE extends Xs{constructor(e,i=Zi,r=Hr,l,c,d=Dn,p=Dn,m,h=Ea){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,i,r,l,c,d,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ux extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends ui{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],_=[];let g=0,b=0;E("z","y","x",-1,-1,r,i,e,d,c,0),E("z","y","x",1,-1,r,i,-e,d,c,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Un(h,3)),this.setAttribute("normal",new Un(x,3)),this.setAttribute("uv",new Un(_,2));function E(C,S,v,O,I,w,N,L,z,T,P){const Z=w/z,k=N/T,J=w/2,de=N/2,me=L/2,$=z+1,B=T+1;let G=0,te=0;const _e=new j;for(let Ae=0;Ae<B;Ae++){const U=Ae*k-de;for(let K=0;K<$;K++){const Re=K*Z-J;_e[C]=Re*O,_e[S]=U*I,_e[v]=me,h.push(_e.x,_e.y,_e.z),_e[C]=0,_e[S]=0,_e[v]=L>0?1:-1,x.push(_e.x,_e.y,_e.z),_.push(K/z),_.push(1-Ae/T),G+=1}}for(let Ae=0;Ae<T;Ae++)for(let U=0;U<z;U++){const K=g+U+$*Ae,Re=g+U+$*(Ae+1),we=g+(U+1)+$*(Ae+1),Be=g+(U+1)+$*Ae;m.push(K,Re,Be),m.push(Re,we,Be),te+=6}p.addGroup(b,te,P),b+=te,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,x=m+1,_=e/p,g=i/m,b=[],E=[],C=[],S=[];for(let v=0;v<x;v++){const O=v*g-d;for(let I=0;I<h;I++){const w=I*_-c;E.push(w,-O,0),C.push(0,0,1),S.push(I/p),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<p;O++){const I=O+h*v,w=O+h*(v+1),N=O+1+h*(v+1),L=O+1+h*v;b.push(I,w,L),b.push(w,N,L)}this.setIndex(b),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(C,3)),this.setAttribute("uv",new Un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}class gp extends ui{constructor(e=.5,i=1,r=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:d},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],h=[],x=[];let _=e;const g=(i-e)/l,b=new j,E=new Rt;for(let C=0;C<=l;C++){for(let S=0;S<=r;S++){const v=c+S/r*d;b.x=_*Math.cos(v),b.y=_*Math.sin(v),m.push(b.x,b.y,b.z),h.push(0,0,1),E.x=(b.x/i+1)/2,E.y=(b.y/i+1)/2,x.push(E.x,E.y)}_+=g}for(let C=0;C<l;C++){const S=C*(r+1);for(let v=0;v<r;v++){const O=v+S,I=O,w=O+r+1,N=O+r+2,L=O+1;p.push(I,w,L),p.push(w,N,L)}}this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(h,3)),this.setAttribute("uv",new Un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nl extends ui{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+p,Math.PI);let h=0;const x=[],_=new j,g=new j,b=[],E=[],C=[],S=[];for(let v=0;v<=r;v++){const O=[],I=v/r,w=d+I*p,N=e*Math.cos(w),L=Math.sqrt(e*e-N*N);let z=0;v===0&&d===0?z=.5/i:v===r&&m===Math.PI&&(z=-.5/i);for(let T=0;T<=i;T++){const P=T/i,Z=l+P*c;_.x=-L*Math.cos(Z),_.y=N,_.z=L*Math.sin(Z),E.push(_.x,_.y,_.z),g.copy(_).normalize(),C.push(g.x,g.y,g.z),S.push(P+z,1-I),O.push(h++)}x.push(O)}for(let v=0;v<r;v++)for(let O=0;O<i;O++){const I=x[v][O+1],w=x[v][O],N=x[v+1][O],L=x[v+1][O+1];(v!==0||d>0)&&b.push(I,w,L),(v!==r-1||m<Math.PI)&&b.push(w,N,L)}this.setIndex(b),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(C,3)),this.setAttribute("uv",new Un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ws(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(Z_(l))l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(Z_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Hn(s){const e={};for(let i=0;i<s.length;i++){const r=Ws(s[i]);for(const l in r)e[l]=r[l]}return e}function Z_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function rE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function fx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const sE={clone:Ws,merge:Hn};var oE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=rE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(l.value);break;case"v2":this.uniforms[r].value=new Rt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new j().fromArray(l.value);break;case"v4":this.uniforms[r].value=new on().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(l.value);break;case"m4":this.uniforms[r].value=new ln().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class cE extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uE extends fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fE extends fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xc=new j,Wc=new Zs,Hi=new j;class dx extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,Wc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Xc,Wc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Wc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new j,K_=new Rt,Q_=new Rt;class yi extends dx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,K_,Q_),i.subVectors(Q_,K_)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(el*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class hx extends dx{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ns=-90,Os=1;class dE extends Kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(Ns,Os,e,i);l.layers=this.layers,this.add(l);const c=new yi(Ns,Os,e,i);c.layers=this.layers,this.add(c);const d=new yi(Ns,Os,e,i);d.layers=this.layers,this.add(d);const p=new yi(Ns,Os,e,i);p.layers=this.layers,this.add(p);const m=new yi(Ns,Os,e,i);m.layers=this.layers,this.add(m);const h=new yi(Ns,Os,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(_,g,b),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class hE extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const J_=new ln;class pE{constructor(e,i,r=0,l=1/0){this.ray=new mp(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):At("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return J_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(J_),this}intersectObject(e,i=!0,r=[]){return Kh(e,this,r,i),r.sort(j_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Kh(e[l],this,r,i);return r.sort(j_),r}}function j_(s,e){return s.distance-e.distance}function Kh(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,p=c.length;d<p;d++)Kh(c[d],e,i,!0)}}let mE=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,st("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}};const yp=class yp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};yp.prototype.isMatrix2=!0;let $_=yp;function ev(s,e,i,r){const l=gE(r);switch(i){case $v:return s*e;case tx:return s*e/l.components*l.byteLength;case op:return s*e/l.components*l.byteLength;case Gr:return s*e*2/l.components*l.byteLength;case lp:return s*e*2/l.components*l.byteLength;case ex:return s*e*3/l.components*l.byteLength;case Ni:return s*e*4/l.components*l.byteLength;case cp:return s*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jc:case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Mh:return Math.max(s,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(s,8)*Math.max(e,8)/2;case bh:case Eh:case Ah:case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Th:case eu:case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kh:case Xh:case Wh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qh:case Yh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tu:case Zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gE(s){switch(s){case Mi:case Kv:return{byteLength:1,components:1};case rl:case Qv:case ba:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case Zi:case ap:case Xi:return{byteLength:4,components:1};case Jv:case jv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);function px(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function _E(s){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,_=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,x),p.onUploadCallback();let b;if(h instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=s.SHORT;else if(h instanceof Uint32Array)b=s.UNSIGNED_INT;else if(h instanceof Int32Array)b=s.INT;else if(h instanceof Int8Array)b=s.BYTE;else if(h instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const x=m.array,_=m.updateRanges;if(s.bindBuffer(h,p),_.length===0)s.bufferSubData(h,0,x);else{_.sort((b,E)=>b.start-E.start);let g=0;for(let b=1;b<_.length;b++){const E=_[g],C=_[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,_[g]=C)}_.length=g+1;for(let b=0,E=_.length;b<E;b++){const C=_[b];s.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var vE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xE=`#ifdef USE_ALPHAHASH
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
#endif`,SE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EE=`#ifdef USE_AOMAP
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
#endif`,TE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AE=`#ifdef USE_BATCHING
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
#endif`,RE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UE=`#ifdef USE_IRIDESCENCE
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
#endif`,LE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,GE=`#define PI 3.141592653589793
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
} // validated`,VE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kE=`vec3 transformedNormal = objectNormal;
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
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZE="gl_FragColor = linearToOutputTexel( gl_FragColor );",KE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rT=`#ifdef USE_GRADIENTMAP
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
}`,sT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
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
#endif`,gT=`uniform sampler2D dfgLUT;
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
}`,_T=`
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
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
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ST=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CT=`#if defined( USE_POINTS_UV )
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
#endif`,wT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`#ifdef USE_MORPHTARGETS
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
#endif`,PT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,GT=`#ifdef USE_NORMALMAP
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
#endif`,VT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i1=`float getShadowMask() {
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
}`,a1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
}`,A1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,O1=`#define LAMBERT
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
}`,P1=`#define LAMBERT
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
}`,I1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,B1=`#define NORMAL
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
}`,F1=`#define NORMAL
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
}`,H1=`#define PHONG
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
}`,G1=`#define PHONG
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
}`,V1=`#define STANDARD
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
}`,k1=`#define STANDARD
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
}`,X1=`#define TOON
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
}`,W1=`#define TOON
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
}`,q1=`uniform float size;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Z1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,Q1=`uniform float rotation;
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
}`,J1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:vE,alphahash_pars_fragment:xE,alphamap_fragment:SE,alphamap_pars_fragment:yE,alphatest_fragment:ME,alphatest_pars_fragment:bE,aomap_fragment:EE,aomap_pars_fragment:TE,batching_pars_vertex:AE,batching_vertex:RE,begin_vertex:CE,beginnormal_vertex:wE,bsdfs:DE,iridescence_fragment:UE,bumpmap_pars_fragment:LE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:IE,color_fragment:zE,color_pars_fragment:BE,color_pars_vertex:FE,color_vertex:HE,common:GE,cube_uv_reflection_fragment:VE,defaultnormal_vertex:kE,displacementmap_pars_vertex:XE,displacementmap_vertex:WE,emissivemap_fragment:qE,emissivemap_pars_fragment:YE,colorspace_fragment:ZE,colorspace_pars_fragment:KE,envmap_fragment:QE,envmap_common_pars_fragment:JE,envmap_pars_fragment:jE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:uT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:aT,gradientmap_pars_fragment:rT,lightmap_pars_fragment:sT,lights_lambert_fragment:oT,lights_lambert_pars_fragment:lT,lights_pars_begin:cT,lights_toon_fragment:fT,lights_toon_pars_fragment:dT,lights_phong_fragment:hT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:gT,lights_fragment_begin:_T,lights_fragment_maps:vT,lights_fragment_end:xT,lightprobes_pars_fragment:ST,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:MT,logdepthbuf_pars_vertex:bT,logdepthbuf_vertex:ET,map_fragment:TT,map_pars_fragment:AT,map_particle_fragment:RT,map_particle_pars_fragment:CT,metalnessmap_fragment:wT,metalnessmap_pars_fragment:DT,morphinstance_vertex:UT,morphcolor_vertex:LT,morphnormal_vertex:NT,morphtarget_pars_vertex:OT,morphtarget_vertex:PT,normal_fragment_begin:IT,normal_fragment_maps:zT,normal_pars_fragment:BT,normal_pars_vertex:FT,normal_vertex:HT,normalmap_pars_fragment:GT,clearcoat_normal_fragment_begin:VT,clearcoat_normal_fragment_maps:kT,clearcoat_pars_fragment:XT,iridescence_pars_fragment:WT,opaque_fragment:qT,packing:YT,premultiplied_alpha_fragment:ZT,project_vertex:KT,dithering_fragment:QT,dithering_pars_fragment:JT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:$T,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:t1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:a1,skinning_pars_vertex:r1,skinning_vertex:s1,skinnormal_vertex:o1,specularmap_fragment:l1,specularmap_pars_fragment:c1,tonemapping_fragment:u1,tonemapping_pars_fragment:f1,transmission_fragment:d1,transmission_pars_fragment:h1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:g1,worldpos_vertex:_1,background_vert:v1,background_frag:x1,backgroundCube_vert:S1,backgroundCube_frag:y1,cube_vert:M1,cube_frag:b1,depth_vert:E1,depth_frag:T1,distance_vert:A1,distance_frag:R1,equirect_vert:C1,equirect_frag:w1,linedashed_vert:D1,linedashed_frag:U1,meshbasic_vert:L1,meshbasic_frag:N1,meshlambert_vert:O1,meshlambert_frag:P1,meshmatcap_vert:I1,meshmatcap_frag:z1,meshnormal_vert:B1,meshnormal_frag:F1,meshphong_vert:H1,meshphong_frag:G1,meshphysical_vert:V1,meshphysical_frag:k1,meshtoon_vert:X1,meshtoon_frag:W1,points_vert:q1,points_frag:Y1,shadow_vert:Z1,shadow_frag:K1,sprite_vert:Q1,sprite_frag:J1},He={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Vi={basic:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Hn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Hn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Hn([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Hn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Hn([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Hn([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Hn([He.common,He.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Hn([He.lights,He.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Vi.physical={uniforms:Hn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const qc={r:0,b:0,g:0},j1=new ln,mx=new ut;mx.set(-1,0,0,0,1,0,0,0,1);function $1(s,e,i,r,l,c){const d=new Ut(0);let p=l===!0?0:1,m,h,x=null,_=0,g=null;function b(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const w=O.backgroundBlurriness>0;I=e.get(I,w)}return I}function E(O){let I=!1;const w=b(O);w===null?S(d,p):w&&w.isColor&&(S(w,1),I=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(O,I){const w=b(I);w&&(w.isCubeTexture||w.mapping===uu)?(h===void 0&&(h=new ci(new dl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ws(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(mx),h.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Gt,(x!==w||_!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=w,_=w.version,g=s.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new ci(new du(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ws(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(w.colorSpace)!==Gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(x!==w||_!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=w,_=w.version,g=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function S(O,I){O.getRGB(qc,fx(s)),i.buffers.color.setClear(qc.r,qc.g,qc.b,I,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,I=1){d.set(O),p=I,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,S(d,p)},render:E,addToRenderList:C,dispose:v}}function eA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(k,J,de,me,$){let B=!1;const G=_(k,me,de,J);c!==G&&(c=G,h(c.object)),B=b(k,me,de,$),B&&E(k,me,de,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,w(k,J,de,me),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return s.createVertexArray()}function h(k){return s.bindVertexArray(k)}function x(k){return s.deleteVertexArray(k)}function _(k,J,de,me){const $=me.wireframe===!0;let B=r[J.id];B===void 0&&(B={},r[J.id]=B);const G=k.isInstancedMesh===!0?k.id:0;let te=B[G];te===void 0&&(te={},B[G]=te);let _e=te[de.id];_e===void 0&&(_e={},te[de.id]=_e);let Ae=_e[$];return Ae===void 0&&(Ae=g(m()),_e[$]=Ae),Ae}function g(k){const J=[],de=[],me=[];for(let $=0;$<i;$++)J[$]=0,de[$]=0,me[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:de,attributeDivisors:me,object:k,attributes:{},index:null}}function b(k,J,de,me){const $=c.attributes,B=J.attributes;let G=0;const te=de.getAttributes();for(const _e in te)if(te[_e].location>=0){const U=$[_e];let K=B[_e];if(K===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),U===void 0||U.attribute!==K||K&&U.data!==K.data)return!0;G++}return c.attributesNum!==G||c.index!==me}function E(k,J,de,me){const $={},B=J.attributes;let G=0;const te=de.getAttributes();for(const _e in te)if(te[_e].location>=0){let U=B[_e];U===void 0&&(_e==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),_e==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const K={};K.attribute=U,U&&U.data&&(K.data=U.data),$[_e]=K,G++}c.attributes=$,c.attributesNum=G,c.index=me}function C(){const k=c.newAttributes;for(let J=0,de=k.length;J<de;J++)k[J]=0}function S(k){v(k,0)}function v(k,J){const de=c.newAttributes,me=c.enabledAttributes,$=c.attributeDivisors;de[k]=1,me[k]===0&&(s.enableVertexAttribArray(k),me[k]=1),$[k]!==J&&(s.vertexAttribDivisor(k,J),$[k]=J)}function O(){const k=c.newAttributes,J=c.enabledAttributes;for(let de=0,me=J.length;de<me;de++)J[de]!==k[de]&&(s.disableVertexAttribArray(de),J[de]=0)}function I(k,J,de,me,$,B,G){G===!0?s.vertexAttribIPointer(k,J,de,$,B):s.vertexAttribPointer(k,J,de,me,$,B)}function w(k,J,de,me){C();const $=me.attributes,B=de.getAttributes(),G=J.defaultAttributeValues;for(const te in B){const _e=B[te];if(_e.location>=0){let Ae=$[te];if(Ae===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),Ae!==void 0){const U=Ae.normalized,K=Ae.itemSize,Re=e.get(Ae);if(Re===void 0)continue;const we=Re.buffer,Be=Re.type,se=Re.bytesPerElement,xe=Be===s.INT||Be===s.UNSIGNED_INT||Ae.gpuType===ap;if(Ae.isInterleavedBufferAttribute){const Se=Ae.data,Ve=Se.stride,at=Ae.offset;if(Se.isInstancedInterleavedBuffer){for(let $e=0;$e<_e.locationSize;$e++)v(_e.location+$e,Se.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let $e=0;$e<_e.locationSize;$e++)S(_e.location+$e);s.bindBuffer(s.ARRAY_BUFFER,we);for(let $e=0;$e<_e.locationSize;$e++)I(_e.location+$e,K/_e.locationSize,Be,U,Ve*se,(at+K/_e.locationSize*$e)*se,xe)}else{if(Ae.isInstancedBufferAttribute){for(let Se=0;Se<_e.locationSize;Se++)v(_e.location+Se,Ae.meshPerAttribute);k.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Se=0;Se<_e.locationSize;Se++)S(_e.location+Se);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Se=0;Se<_e.locationSize;Se++)I(_e.location+Se,K/_e.locationSize,Be,U,K*se,K/_e.locationSize*Se*se,xe)}}else if(G!==void 0){const U=G[te];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(_e.location,U);break;case 3:s.vertexAttrib3fv(_e.location,U);break;case 4:s.vertexAttrib4fv(_e.location,U);break;default:s.vertexAttrib1fv(_e.location,U)}}}}O()}function N(){P();for(const k in r){const J=r[k];for(const de in J){const me=J[de];for(const $ in me){const B=me[$];for(const G in B)x(B[G].object),delete B[G];delete me[$]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const J=r[k.id];for(const de in J){const me=J[de];for(const $ in me){const B=me[$];for(const G in B)x(B[G].object),delete B[G];delete me[$]}}delete r[k.id]}function z(k){for(const J in r){const de=r[J];for(const me in de){const $=de[me];if($[k.id]===void 0)continue;const B=$[k.id];for(const G in B)x(B[G].object),delete B[G];delete $[k.id]}}}function T(k){for(const J in r){const de=r[J],me=k.isInstancedMesh===!0?k.id:0,$=de[me];if($!==void 0){for(const B in $){const G=$[B];for(const te in G)x(G[te].object),delete G[te];delete $[B]}delete de[me],Object.keys(de).length===0&&delete r[J]}}}function P(){Z(),d=!0,c!==l&&(c=l,h(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:Z,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:O}}function tA(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,x){x!==0&&(s.drawArraysInstanced(r,m,h,x),i.update(h,r,x))}function p(m,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,x);let g=0;for(let b=0;b<x;b++)g+=h[b];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function nA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ni&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Mi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!T)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(st("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:w,maxSamples:N,samples:L}}function iA(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new ar,p=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const b=_.length!==0||g||r!==0||l;return l=g,r=_.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=x(_,g,0)},this.setState=function(_,g,b){const E=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?x(null):h();else{const O=c?0:r,I=O*4;let w=v.clippingState||null;m.value=w,w=x(E,g,I,b);for(let N=0;N!==I;++N)w[N]=i[N];v.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,g,b,E){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=m.value,E!==!0||S===null){const v=b+C*4,O=g.matrixWorldInverse;p.getNormalMatrix(O),(S===null||S.length<v)&&(S=new Float32Array(v));for(let I=0,w=b;I!==C;++I,w+=4)d.copy(_[I]).applyMatrix4(O,p),d.normal.toArray(S,w),S[w+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const or=4,tv=[.125,.215,.35,.446,.526,.582],Ir=20,aA=256,Zo=new hx,nv=new Ut;let $d=null,eh=0,th=0,nh=!1;const rA=new j;class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=rA}=c;$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hr||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:ba,format:Ni,colorSpace:nu,depthBuffer:!1},l=av(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sA(c)),this._blurMaterial=lA(c,e,i),this._ggxMaterial=oA(c,e,i)}return l}_compileMaterial(e){const i=new ci(new ui,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,r,l,c){const m=new yi(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,b=_.toneMapping;_.getClearColor(nv),_.toneMapping=qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new dl,new Bs({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let v=!1;const O=e.background;O?O.isColor&&(S.color.copy(O),e.background=null,v=!0):(S.color.copy(nv),v=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[I],c.y,c.z)):w===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[I]));const N=this._cubeSize;Ps(l,w*N,I>2?N:0,N,N),_.setRenderTarget(l),v&&_.render(C,m),_.render(e,m)}_.toneMapping=b,_.autoClear=g,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Hr||e.mapping===ks;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Ps(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-x*x),g=0+h*1.25,b=_*g,{_lodMax:E}=this,C=this._sizeLods[r],S=3*C*(r>E-or?r-E+or:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-i,Ps(c,S,v,3*C,2*C),l.setRenderTarget(c),l.render(p,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ps(e,S,v,3*C,2*C),l.setRenderTarget(e),l.render(p,Zo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,b=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ir-1),C=c/E,S=isFinite(c)?1+Math.floor(x*C):Ir;S>Ir&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ir}`);const v=[];let O=0;for(let z=0;z<Ir;++z){const T=z/C,P=Math.exp(-T*T/2);v.push(P),z===0?O+=P:z<S&&(O+=2*P)}for(let z=0;z<v.length;z++)v[z]=v[z]/O;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:I}=this;g.dTheta.value=E,g.mipInt.value=I-r;const w=this._sizeLods[l],N=3*w*(l>I-or?l-I+or:0),L=4*(this._cubeSize-w);Ps(i,N,L,3*w,2*w),m.setRenderTarget(i),m.render(_,Zo)}}function sA(s){const e=[],i=[],r=[];let l=s;const c=s-or+1+tv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-or?m=tv[d-s+or-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,_=1+h,g=[x,x,_,x,_,_,x,x,_,_,x,_],b=6,E=6,C=3,S=2,v=1,O=new Float32Array(C*E*b),I=new Float32Array(S*E*b),w=new Float32Array(v*E*b);for(let L=0;L<b;L++){const z=L%3*2/3-1,T=L>2?0:-1,P=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];O.set(P,C*E*L),I.set(g,S*E*L);const Z=[L,L,L,L,L,L];w.set(Z,v*E*L)}const N=new ui;N.setAttribute("position",new bi(O,C)),N.setAttribute("uv",new bi(I,S)),N.setAttribute("faceIndex",new bi(w,v)),r.push(new ci(N,null)),l>or&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function av(s,e,i){const r=new Yi(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ps(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function oA(s,e,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function lA(s,e,i){const r=new Float32Array(Ir),l=new j(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function rv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function sv(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class gx extends Yi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new cx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new dl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:ya});c.uniforms.tEquirect.value=i;const d=new ci(l,c),p=i.minFilter;return i.minFilter===zr&&(i.minFilter=In),new dE(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function cA(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,b=!1){return g==null?null:b?d(g):c(g)}function c(g){if(g&&g.isTexture){const b=g.mapping;if(b===Ad||b===Rd)if(e.has(g)){const E=e.get(g).texture;return p(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new gx(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const b=g.mapping,E=b===Ad||b===Rd,C=b===Hr||b===ks;if(E||C){let S=i.get(g);const v=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new iv(s)),S=E?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const O=g.image;return E&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new iv(s)),S=E?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",x),S.texture):null}}}return g}function p(g,b){return b===Ad?g.mapping=Hr:b===Rd&&(g.mapping=ks),g}function m(g){let b=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&b++;return b===E}function h(g){const b=g.target;b.removeEventListener("dispose",h);const E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function x(g){const b=g.target;b.removeEventListener("dispose",x);const E=i.get(b);E!==void 0&&(i.delete(b),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function uA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Hs("WebGLRenderer: "+r+" extension not supported."),l}}}function fA(s,e,i,r){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete l[g.id];const b=c.get(g);b&&(e.remove(b),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const b in g)e.update(g[b],s.ARRAY_BUFFER)}function h(_){const g=[],b=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(b!==null){const O=b.array;C=b.version;for(let I=0,w=O.length;I<w;I+=3){const N=O[I+0],L=O[I+1],z=O[I+2];g.push(N,L,L,z,z,N)}}else{const O=E.array;C=E.version;for(let I=0,w=O.length/3-1;I<w;I+=3){const N=I+0,L=I+1,z=I+2;g.push(N,L,L,z,z,N)}}const S=new(E.count>=65535?sx:rx)(g,1);S.version=C;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function x(_){const g=c.get(_);if(g){const b=_.index;b!==null&&g.version<b.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:x}}function dA(s,e,i){let r;function l(_){r=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function m(_,g){s.drawElements(r,g,c,_*d),i.update(g,r,1)}function h(_,g,b){b!==0&&(s.drawElementsInstanced(r,g,c,_*d,b),i.update(g,r,b))}function x(_,g,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,_,0,b);let C=0;for(let S=0;S<b;S++)C+=g[S];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x}function hA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pA(s,e,i){const r=new WeakMap,l=new on;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=x!==void 0?x.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let Z=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",Z)};var b=Z;g!==void 0&&g.texture.dispose();const E=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],I=p.morphAttributes.color||[];let w=0;E===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let N=p.attributes.position.count*w,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const z=new Float32Array(N*L*4*_),T=new ix(z,N,L,_);T.type=Xi,T.needsUpdate=!0;const P=w*4;for(let k=0;k<_;k++){const J=v[k],de=O[k],me=I[k],$=N*L*4*k;for(let B=0;B<J.count;B++){const G=B*P;E===!0&&(l.fromBufferAttribute(J,B),z[$+G+0]=l.x,z[$+G+1]=l.y,z[$+G+2]=l.z,z[$+G+3]=0),C===!0&&(l.fromBufferAttribute(de,B),z[$+G+4]=l.x,z[$+G+5]=l.y,z[$+G+6]=l.z,z[$+G+7]=0),S===!0&&(l.fromBufferAttribute(me,B),z[$+G+8]=l.x,z[$+G+9]=l.y,z[$+G+10]=l.z,z[$+G+11]=me.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new Rt(N,L)},r.set(p,g),p.addEventListener("dispose",Z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const C=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function mA(s,e,i,r,l){let c=new WeakMap;function d(h){const x=l.render.frame,_=h.geometry,g=e.get(h,_);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==x&&(b.update(),c.set(b,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const gA={[Gv]:"LINEAR_TONE_MAPPING",[Vv]:"REINHARD_TONE_MAPPING",[kv]:"CINEON_TONE_MAPPING",[Xv]:"ACES_FILMIC_TONE_MAPPING",[qv]:"AGX_TONE_MAPPING",[Yv]:"NEUTRAL_TONE_MAPPING",[Wv]:"CUSTOM_TONE_MAPPING"};function _A(s,e,i,r,l,c){const d=new Yi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Xs(e,i):void 0}),p=new Yi(e,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),m=new ui;m.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Un([0,2,0,0,2,0],2));const h=new cE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new ci(m,h),_=new hx(-1,1,1,-1,0,1);let g=null,b=null,E=!1,C,S=null,v=[],O=!1;this.setSize=function(I,w){d.setSize(I,w),p.setSize(I,w);for(let N=0;N<v.length;N++){const L=v[N];L.setSize&&L.setSize(I,w)}},this.setEffects=function(I){v=I,O=v.length>0&&v[0].isRenderPass===!0;const w=d.width,N=d.height;for(let L=0;L<v.length;L++){const z=v[L];z.setSize&&z.setSize(w,N)}},this.begin=function(I,w){if(E||I.toneMapping===qi&&v.length===0)return!1;if(S=w,w!==null){const N=w.width,L=w.height;(d.width!==N||d.height!==L)&&this.setSize(N,L)}return O===!1&&I.setRenderTarget(d),C=I.toneMapping,I.toneMapping=qi,!0},this.hasRenderPass=function(){return O},this.end=function(I,w){I.toneMapping=C,E=!0;let N=d,L=p;for(let z=0;z<v.length;z++){const T=v[z];if(T.enabled!==!1&&(T.render(I,L,N,w),T.needsSwap!==!1)){const P=N;N=L,L=P}}if(g!==I.outputColorSpace||b!==I.toneMapping){g=I.outputColorSpace,b=I.toneMapping,h.defines={},Tt.getTransfer(g)===Gt&&(h.defines.SRGB_TRANSFER="");const z=gA[b];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=N.texture,I.setRenderTarget(S),I.render(x,_),S=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const _x=new zn,Qh=new Xs(1,1),vx=new ix,xx=new zb,Sx=new cx,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Ks(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function yn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function pu(s,e){let i=lv[e];i===void 0&&(i=new Int32Array(e),lv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function vA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function xA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2fv(this.addr,e),Mn(i,e)}}function SA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;s.uniform3fv(this.addr,e),Mn(i,e)}}function yA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4fv(this.addr,e),Mn(i,e)}}function MA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;fv.set(r),s.uniformMatrix2fv(this.addr,!1,fv),Mn(i,r)}}function bA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;uv.set(r),s.uniformMatrix3fv(this.addr,!1,uv),Mn(i,r)}}function EA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,r))return;cv.set(r),s.uniformMatrix4fv(this.addr,!1,cv),Mn(i,r)}}function TA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2iv(this.addr,e),Mn(i,e)}}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3iv(this.addr,e),Mn(i,e)}}function CA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4iv(this.addr,e),Mn(i,e)}}function wA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function DA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;s.uniform2uiv(this.addr,e),Mn(i,e)}}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;s.uniform3uiv(this.addr,e),Mn(i,e)}}function LA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;s.uniform4uiv(this.addr,e),Mn(i,e)}}function NA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Qh.compareFunction=i.isReversedDepthBuffer()?fp:up,c=Qh):c=_x,i.setTexture2D(e||c,l)}function OA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||xx,l)}function PA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Sx,l)}function IA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||vx,l)}function zA(s){switch(s){case 5126:return vA;case 35664:return xA;case 35665:return SA;case 35666:return yA;case 35674:return MA;case 35675:return bA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return wA;case 36294:return DA;case 36295:return UA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return IA}}function BA(s,e){s.uniform1fv(this.addr,e)}function FA(s,e){const i=Ks(e,this.size,2);s.uniform2fv(this.addr,i)}function HA(s,e){const i=Ks(e,this.size,3);s.uniform3fv(this.addr,i)}function GA(s,e){const i=Ks(e,this.size,4);s.uniform4fv(this.addr,i)}function VA(s,e){const i=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function kA(s,e){const i=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function XA(s,e){const i=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function WA(s,e){s.uniform1iv(this.addr,e)}function qA(s,e){s.uniform2iv(this.addr,e)}function YA(s,e){s.uniform3iv(this.addr,e)}function ZA(s,e){s.uniform4iv(this.addr,e)}function KA(s,e){s.uniform1uiv(this.addr,e)}function QA(s,e){s.uniform2uiv(this.addr,e)}function JA(s,e){s.uniform3uiv(this.addr,e)}function jA(s,e){s.uniform4uiv(this.addr,e)}function $A(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Qh:d=_x;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function eR(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||xx,c[d])}function tR(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Sx,c[d])}function nR(s,e,i){const r=this.cache,l=e.length,c=pu(i,l);yn(r,c)||(s.uniform1iv(this.addr,c),Mn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||vx,c[d])}function iR(s){switch(s){case 5126:return BA;case 35664:return FA;case 35665:return HA;case 35666:return GA;case 35674:return VA;case 35675:return kA;case 35676:return XA;case 5124:case 35670:return WA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return ZA;case 5125:return KA;case 36294:return QA;case 36295:return JA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return tR;case 36289:case 36303:case 36311:case 36292:return nR}}class aR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=zA(i.type)}}class rR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iR(i.type)}}class sR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function dv(s,e){s.seq.push(e),s.map[e.id]=e}function oR(s,e,i){const r=s.name,l=r.length;for(ih.lastIndex=0;;){const c=ih.exec(r),d=ih.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){dv(i,h===void 0?new aR(p,s,e):new rR(p,s,e));break}else{let _=i.map[p];_===void 0&&(_=new sR(p),dv(i,_)),i=_}}}class $c{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);oR(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function hv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const lR=37297;let cR=0;function uR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const pv=new ut;function fR(s){Tt._getMatrix(pv,Tt.workingColorSpace,s);const e=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case iu:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+uR(s.getShaderSource(e),p)}else return c}function dR(s,e){const i=fR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const hR={[Gv]:"Linear",[Vv]:"Reinhard",[kv]:"Cineon",[Xv]:"ACESFilmic",[qv]:"AgX",[Yv]:"Neutral",[Wv]:"Custom"};function pR(s,e){const i=hR[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new j;function mR(){Tt.getLuminanceCoefficients(Yc);const s=Yc.x.toFixed(4),e=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function _R(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function vR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function jo(s){return s!==""}function gv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _v(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(s){return s.replace(xR,yR)}const SR=new Map;function yR(s,e){let i=_t[e];if(i===void 0){const r=SR.get(e);if(r!==void 0)i=_t[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Jh(i)}const MR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(s){return s.replace(MR,bR)}function bR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const ER={[Zc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function TR(s){return ER[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AR={[Hr]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function RR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":AR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const CR={[ks]:"ENVMAP_MODE_REFRACTION"};function wR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":CR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DR={[Hv]:"ENVMAP_BLENDING_MULTIPLY",[tb]:"ENVMAP_BLENDING_MIX",[nb]:"ENVMAP_BLENDING_ADD"};function UR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DR[s.combine]||"ENVMAP_BLENDING_NONE"}function LR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function NR(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=TR(i),h=RR(i),x=wR(i),_=UR(i),g=LR(i),b=gR(i),E=_R(c),C=l.createProgram();let S,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(jo).join(`
`),v.length>0&&(v+=`
`)):(S=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),v=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?_t.tonemapping_pars_fragment:"",i.toneMapping!==qi?pR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,dR("linearToOutputTexel",i.outputColorSpace),mR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),d=Jh(d),d=gv(d,i),d=_v(d,i),p=Jh(p),p=gv(p,i),p=_v(p,i),d=vv(d),p=vv(p),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=O+S+d,w=O+v+p,N=hv(l,l.VERTEX_SHADER,I),L=hv(l,l.FRAGMENT_SHADER,w);l.attachShader(C,N),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(k){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",de=l.getShaderInfoLog(N)||"",me=l.getShaderInfoLog(L)||"",$=J.trim(),B=de.trim(),G=me.trim();let te=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,N,L);else{const Ae=mv(l,N,"vertex"),U=mv(l,L,"fragment");At("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+Ae+`
`+U)}else $!==""?st("WebGLProgram: Program Info Log:",$):(B===""||G==="")&&(_e=!1);_e&&(k.diagnostics={runnable:te,programLog:$,vertexShader:{log:B,prefix:S},fragmentShader:{log:G,prefix:v}})}l.deleteShader(N),l.deleteShader(L),T=new $c(l,C),P=vR(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(C,lR)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=L,this}let OR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new IR(e),i.set(e,r)),r}}class IR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function zR(s){return s===Gr||s===eu||s===tu}function BR(s,e,i,r,l,c){const d=new pp,p=new PR,m=new Set,h=[],x=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,P,Z,k,J,de){const me=k.fog,$=J.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||B,G),_e=te&&te.mapping===uu?te.image.height:null,Ae=b[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,K=U!==void 0?U.length:0;let Re=0;$.morphAttributes.position!==void 0&&(Re=1),$.morphAttributes.normal!==void 0&&(Re=2),$.morphAttributes.color!==void 0&&(Re=3);let we,Be,se,xe;if(Ae){const We=Vi[Ae];we=We.vertexShader,Be=We.fragmentShader}else{we=T.vertexShader,Be=T.fragmentShader;const We=p.getVertexShaderStage(T),$t=p.getFragmentShaderStage(T);p.update(T,We,$t),se=We.id,xe=$t.id}const Se=s.getRenderTarget(),Ve=s.state.buffers.depth.getReversed(),at=J.isInstancedMesh===!0,$e=J.isBatchedMesh===!0,Wt=!!T.map,lt=!!T.matcap,pt=!!te,mt=!!T.aoMap,gt=!!T.lightMap,Zt=!!T.bumpMap&&T.wireframe===!1,Kt=!!T.normalMap,Qt=!!T.displacementMap,an=!!T.emissiveMap,Ot=!!T.metalnessMap,pe=!!T.roughnessMap,F=T.anisotropy>0,Ce=T.clearcoat>0,Ye=T.dispersion>0,D=T.iridescence>0,M=T.sheen>0,Y=T.transmission>0,ee=F&&!!T.anisotropyMap,V=Ce&&!!T.clearcoatMap,ye=Ce&&!!T.clearcoatNormalMap,be=Ce&&!!T.clearcoatRoughnessMap,ce=D&&!!T.iridescenceMap,ue=D&&!!T.iridescenceThicknessMap,Ee=M&&!!T.sheenColorMap,Ne=M&&!!T.sheenRoughnessMap,De=!!T.specularMap,Oe=!!T.specularColorMap,je=!!T.specularIntensityMap,tt=Y&&!!T.transmissionMap,ot=Y&&!!T.thicknessMap,W=!!T.gradientMap,Ue=!!T.alphaMap,ge=T.alphaTest>0,Pe=!!T.alphaHash,Ge=!!T.extensions;let Te=qi;T.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Qe={shaderID:Ae,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:Be,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:$e,batchingColor:$e&&J._colorsTexture!==null,instancing:at,instancingColor:at&&J.instanceColor!==null,instancingMorph:at&&J.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:lt,envMap:pt,envMapMode:pt&&te.mapping,envMapCubeUVHeight:_e,aoMap:mt,lightMap:gt,bumpMap:Zt,normalMap:Kt,displacementMap:Qt,emissiveMap:an,normalMapObjectSpace:Kt&&T.normalMapType===rb,normalMapTangentSpace:Kt&&T.normalMapType===M_,packedNormalMap:Kt&&T.normalMapType===M_&&zR(T.normalMap.format),metalnessMap:Ot,roughnessMap:pe,anisotropy:F,anisotropyMap:ee,clearcoat:Ce,clearcoatMap:V,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:Ye,iridescence:D,iridescenceMap:ce,iridescenceThicknessMap:ue,sheen:M,sheenColorMap:Ee,sheenRoughnessMap:Ne,specularMap:De,specularColorMap:Oe,specularIntensityMap:je,transmission:Y,transmissionMap:tt,thicknessMap:ot,gradientMap:W,opaque:T.transparent===!1&&T.blending===Fs&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ge,alphaHash:Pe,combine:T.combine,mapUv:Wt&&E(T.map.channel),aoMapUv:mt&&E(T.aoMap.channel),lightMapUv:gt&&E(T.lightMap.channel),bumpMapUv:Zt&&E(T.bumpMap.channel),normalMapUv:Kt&&E(T.normalMap.channel),displacementMapUv:Qt&&E(T.displacementMap.channel),emissiveMapUv:an&&E(T.emissiveMap.channel),metalnessMapUv:Ot&&E(T.metalnessMap.channel),roughnessMapUv:pe&&E(T.roughnessMap.channel),anisotropyMapUv:ee&&E(T.anisotropyMap.channel),clearcoatMapUv:V&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:ye&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&E(T.sheenRoughnessMap.channel),specularMapUv:De&&E(T.specularMap.channel),specularColorMapUv:Oe&&E(T.specularColorMap.channel),specularIntensityMapUv:je&&E(T.specularIntensityMap.channel),transmissionMapUv:tt&&E(T.transmissionMap.channel),thicknessMapUv:ot&&E(T.thicknessMap.channel),alphaMapUv:Ue&&E(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Kt||F),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!$.attributes.uv&&(Wt||Ue),fog:!!me,useFog:T.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&Kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ve,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Re,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Gt,decodeVideoTextureEmissive:an&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ki,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function S(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)P.push(Z),P.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(v(P,T),O(P,T),P.push(s.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function v(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function O(T,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),P.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function I(T){const P=b[T.type];let Z;if(P){const k=Vi[P];Z=sE.clone(k.uniforms)}else Z=T.uniforms;return Z}function w(T,P){let Z=x.get(P);return Z!==void 0?++Z.usedTimes:(Z=new NR(s,P,T,l),h.push(Z),x.set(P,Z)),Z}function N(T){if(--T.usedTimes===0){const P=h.indexOf(T);h[P]=h[h.length-1],h.pop(),x.delete(T.cacheKey),T.destroy()}}function L(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:I,acquireProgram:w,releaseProgram:N,releaseShaderCache:L,programs:h,dispose:z}}function FR(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function HR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function p(g,b,E,C,S,v){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:b,material:E,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:v},s[e]=O):(O.id=g.id,O.object=g,O.geometry=b,O.material=E,O.materialVariant=d(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=S,O.group=v),e++,O}function m(g,b,E,C,S,v){const O=p(g,b,E,C,S,v);E.transmission>0?r.push(O):E.transparent===!0?l.push(O):i.push(O)}function h(g,b,E,C,S,v){const O=p(g,b,E,C,S,v);E.transmission>0?r.unshift(O):E.transparent===!0?l.unshift(O):i.unshift(O)}function x(g,b,E){i.length>1&&i.sort(g||HR),r.length>1&&r.sort(b||Sv),l.length>1&&l.sort(b||Sv),E&&(i.reverse(),r.reverse(),l.reverse())}function _(){for(let g=e,b=s.length;g<b;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:_,sort:x}}function GR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new yv,s.set(r,[d])):l>=c.length?(d=new yv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function VR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new Ut};break;case"SpotLight":i={position:new j,direction:new j,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=i,i}}}function kR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let XR=0;function WR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qR(s){const e=new VR,i=kR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new j);const l=new j,c=new ln,d=new ln;function p(h){let x=0,_=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let b=0,E=0,C=0,S=0,v=0,O=0,I=0,w=0,N=0,L=0,z=0;h.sort(WR);for(let P=0,Z=h.length;P<Z;P++){const k=h[P],J=k.color,de=k.intensity,me=k.distance;let $=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Gr?$=k.shadow.map.texture:$=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=J.r*de,_+=J.g*de,g+=J.b*de;else if(k.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],de);z++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,r.directionalShadow[b]=te,r.directionalShadowMap[b]=$,r.directionalShadowMatrix[b]=k.shadow.matrix,O++}r.directional[b]=B,b++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(J).multiplyScalar(de),B.distance=me,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,r.spot[C]=B;const G=k.shadow;if(k.map&&(r.spotLightMap[N]=k.map,N++,G.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[C]=G.matrix,k.castShadow){const te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,r.spotShadow[C]=te,r.spotShadowMap[C]=$,w++}C++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(J).multiplyScalar(de),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=B,S++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const G=k.shadow,te=i.get(k);te.shadowIntensity=G.intensity,te.shadowBias=G.bias,te.shadowNormalBias=G.normalBias,te.shadowRadius=G.radius,te.shadowMapSize=G.mapSize,te.shadowCameraNear=G.camera.near,te.shadowCameraFar=G.camera.far,r.pointShadow[E]=te,r.pointShadowMap[E]=$,r.pointShadowMatrix[E]=k.shadow.matrix,I++}r.point[E]=B,E++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(de),B.groundColor.copy(k.groundColor).multiplyScalar(de),r.hemi[v]=B,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==b||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==v||T.numDirectionalShadows!==O||T.numPointShadows!==I||T.numSpotShadows!==w||T.numSpotMaps!==N||T.numLightProbes!==z)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=S,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=w+N-L,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=z,T.directionalLength=b,T.pointLength=E,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=v,T.numDirectionalShadows=O,T.numPointShadows=I,T.numSpotShadows=w,T.numSpotMaps=N,T.numLightProbes=z,r.version=XR++)}function m(h,x){let _=0,g=0,b=0,E=0,C=0;const S=x.matrixWorldInverse;for(let v=0,O=h.length;v<O;v++){const I=h[v];if(I.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),_++}else if(I.isSpotLight){const w=r.spot[b];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),b++}else if(I.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),d.identity(),c.copy(I.matrixWorld),c.premultiply(S),d.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),E++}else if(I.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),g++}else if(I.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function Mv(s){const e=new qR(s),i=[],r=[],l=[];function c(g){_.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function x(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:x,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function YR(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new Mv(s),e.set(l,[p])):c>=d.length?(p=new Mv(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const ZR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KR=`uniform sampler2D shadow_pass;
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
}`,QR=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],JR=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],bv=new ln,Ko=new j,ah=new j;function jR(s,e,i){let r=new ox;const l=new Rt,c=new Rt,d=new on,p=new uE,m=new fE,h={},x=i.maxTextureSize,_={[lr]:Zn,[Zn]:lr,[ki]:ki},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:ZR,fragmentShader:KR}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const E=new ui;E.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ci(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zc;let v=this.type;this.render=function(L,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===IM&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zc);const P=s.getRenderTarget(),Z=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ya),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const de=v!==this.type;de&&z.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach($=>$.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,$=L.length;me<$;me++){const B=L[me],G=B.shadow;if(G===void 0){st("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const te=G.getFrameExtents();l.multiply(te),c.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/te.x),l.x=c.x*te.x,G.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/te.y),l.y=c.y*te.y,G.mapSize.y=c.y));const _e=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=_e,G.map===null||de===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Jo){if(B.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yi(l.x,l.y,{format:Gr,type:ba,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Xs(l.x,l.y,Xi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ea,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else B.isPointLight?(G.map=new gx(l.x),G.map.depthTexture=new aE(l.x,Zi)):(G.map=new Yi(l.x,l.y),G.map.depthTexture=new Xs(l.x,l.y,Zi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ea,this.type===Zc?(G.map.depthTexture.compareFunction=_e?fp:up,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn);G.camera.updateProjectionMatrix()}const Ae=G.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Ae;U++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,U),s.clear();else{U===0&&(s.setRenderTarget(G.map),s.clear());const K=G.getViewport(U);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),J.viewport(d)}if(B.isPointLight){const K=G.camera,Re=G.matrix,we=B.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),Ko.setFromMatrixPosition(B.matrixWorld),K.position.copy(Ko),ah.copy(K.position),ah.add(QR[U]),K.up.copy(JR[U]),K.lookAt(ah),K.updateMatrixWorld(),Re.makeTranslation(-Ko.x,-Ko.y,-Ko.z),bv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bv,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(B);r=G.getFrustum(),w(z,T,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Jo&&O(G,T),G.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(P,Z,k)};function O(L,z){const T=e.update(C);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yi(l.x,l.y,{format:Gr,type:ba})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(z,null,T,g,C,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value=L.mapSize,b.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(z,null,T,b,C,null)}function I(L,z,T,P){let Z=null;const k=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)Z=k;else if(Z=T.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=Z.uuid,de=z.uuid;let me=h[J];me===void 0&&(me={},h[J]=me);let $=me[de];$===void 0&&($=Z.clone(),me[de]=$,z.addEventListener("dispose",N)),Z=$}if(Z.visible=z.visible,Z.wireframe=z.wireframe,P===Jo?Z.side=z.shadowSide!==null?z.shadowSide:z.side:Z.side=z.shadowSide!==null?z.shadowSide:_[z.side],Z.alphaMap=z.alphaMap,Z.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Z.map=z.map,Z.clipShadows=z.clipShadows,Z.clippingPlanes=z.clippingPlanes,Z.clipIntersection=z.clipIntersection,Z.displacementMap=z.displacementMap,Z.displacementScale=z.displacementScale,Z.displacementBias=z.displacementBias,Z.wireframeLinewidth=z.wireframeLinewidth,Z.linewidth=z.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const J=s.properties.get(Z);J.light=T}return Z}function w(L,z,T,P,Z){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Z===Jo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const de=e.update(L),me=L.material;if(Array.isArray(me)){const $=de.groups;for(let B=0,G=$.length;B<G;B++){const te=$[B],_e=me[te.materialIndex];if(_e&&_e.visible){const Ae=I(L,_e,P,Z);L.onBeforeShadow(s,L,z,T,de,Ae,te),s.renderBufferDirect(T,null,de,Ae,L,te),L.onAfterShadow(s,L,z,T,de,Ae,te)}}}else if(me.visible){const $=I(L,me,P,Z);L.onBeforeShadow(s,L,z,T,de,$,null),s.renderBufferDirect(T,null,de,$,L,null),L.onAfterShadow(s,L,z,T,de,$,null)}}const J=L.children;for(let de=0,me=J.length;de<me;de++)w(J[de],z,T,P,Z)}function N(L){L.target.removeEventListener("dispose",N);for(const T in h){const P=h[T],Z=L.target.uuid;Z in P&&(P[Z].dispose(),delete P[Z])}}}function $R(s,e){function i(){let W=!1;const Ue=new on;let ge=null;const Pe=new on(0,0,0,0);return{setMask:function(Ge){ge!==Ge&&!W&&(s.colorMask(Ge,Ge,Ge,Ge),ge=Ge)},setLocked:function(Ge){W=Ge},setClear:function(Ge,Te,Qe,We,$t){$t===!0&&(Ge*=We,Te*=We,Qe*=We),Ue.set(Ge,Te,Qe,We),Pe.equals(Ue)===!1&&(s.clearColor(Ge,Te,Qe,We),Pe.copy(Ue))},reset:function(){W=!1,ge=null,Pe.set(-1,0,0,0)}}}function r(){let W=!1,Ue=!1,ge=null,Pe=null,Ge=null;return{setReversed:function(Te){if(Ue!==Te){const Qe=e.get("EXT_clip_control");Te?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ue=Te;const We=Ge;Ge=null,this.setClear(We)}},getReversed:function(){return Ue},setTest:function(Te){Te?Se(s.DEPTH_TEST):Ve(s.DEPTH_TEST)},setMask:function(Te){ge!==Te&&!W&&(s.depthMask(Te),ge=Te)},setFunc:function(Te){if(Ue&&(Te=mb[Te]),Pe!==Te){switch(Te){case uh:s.depthFunc(s.NEVER);break;case fh:s.depthFunc(s.ALWAYS);break;case dh:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case hh:s.depthFunc(s.EQUAL);break;case ph:s.depthFunc(s.GEQUAL);break;case mh:s.depthFunc(s.GREATER);break;case gh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Te}},setLocked:function(Te){W=Te},setClear:function(Te){Ge!==Te&&(Ge=Te,Ue&&(Te=1-Te),s.clearDepth(Te))},reset:function(){W=!1,ge=null,Pe=null,Ge=null,Ue=!1}}}function l(){let W=!1,Ue=null,ge=null,Pe=null,Ge=null,Te=null,Qe=null,We=null,$t=null;return{setTest:function(Pt){W||(Pt?Se(s.STENCIL_TEST):Ve(s.STENCIL_TEST))},setMask:function(Pt){Ue!==Pt&&!W&&(s.stencilMask(Pt),Ue=Pt)},setFunc:function(Pt,Qn,Jn){(ge!==Pt||Pe!==Qn||Ge!==Jn)&&(s.stencilFunc(Pt,Qn,Jn),ge=Pt,Pe=Qn,Ge=Jn)},setOp:function(Pt,Qn,Jn){(Te!==Pt||Qe!==Qn||We!==Jn)&&(s.stencilOp(Pt,Qn,Jn),Te=Pt,Qe=Qn,We=Jn)},setLocked:function(Pt){W=Pt},setClear:function(Pt){$t!==Pt&&(s.clearStencil(Pt),$t=Pt)},reset:function(){W=!1,Ue=null,ge=null,Pe=null,Ge=null,Te=null,Qe=null,We=null,$t=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let x={},_={},g={},b=new WeakMap,E=[],C=null,S=!1,v=null,O=null,I=null,w=null,N=null,L=null,z=null,T=new Ut(0,0,0),P=0,Z=!1,k=null,J=null,de=null,me=null,$=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(_e)[1]),G=te>=1):_e.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),G=te>=2);let Ae=null,U={};const K=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),we=new on().fromArray(K),Be=new on().fromArray(Re);function se(W,Ue,ge,Pe){const Ge=new Uint8Array(4),Te=s.createTexture();s.bindTexture(W,Te),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ge;Qe++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ge):s.texImage2D(Ue+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ge);return Te}const xe={};xe[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Se(s.DEPTH_TEST),d.setFunc(Vs),Zt(!1),Kt(x_),Se(s.CULL_FACE),mt(ya);function Se(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function Ve(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function at(W,Ue){return g[W]!==Ue?(s.bindFramebuffer(W,Ue),g[W]=Ue,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ue),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function $e(W,Ue){let ge=E,Pe=!1;if(W){ge=b.get(Ue),ge===void 0&&(ge=[],b.set(Ue,ge));const Ge=W.textures;if(ge.length!==Ge.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Qe=Ge.length;Te<Qe;Te++)ge[Te]=s.COLOR_ATTACHMENT0+Te;ge.length=Ge.length,Pe=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(ge)}function Wt(W){return C!==W?(s.useProgram(W),C=W,!0):!1}const lt={[Pr]:s.FUNC_ADD,[BM]:s.FUNC_SUBTRACT,[FM]:s.FUNC_REVERSE_SUBTRACT};lt[HM]=s.MIN,lt[GM]=s.MAX;const pt={[VM]:s.ZERO,[kM]:s.ONE,[XM]:s.SRC_COLOR,[lh]:s.SRC_ALPHA,[QM]:s.SRC_ALPHA_SATURATE,[ZM]:s.DST_COLOR,[qM]:s.DST_ALPHA,[WM]:s.ONE_MINUS_SRC_COLOR,[ch]:s.ONE_MINUS_SRC_ALPHA,[KM]:s.ONE_MINUS_DST_COLOR,[YM]:s.ONE_MINUS_DST_ALPHA,[JM]:s.CONSTANT_COLOR,[jM]:s.ONE_MINUS_CONSTANT_COLOR,[$M]:s.CONSTANT_ALPHA,[eb]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(W,Ue,ge,Pe,Ge,Te,Qe,We,$t,Pt){if(W===ya){S===!0&&(Ve(s.BLEND),S=!1);return}if(S===!1&&(Se(s.BLEND),S=!0),W!==zM){if(W!==v||Pt!==Z){if((O!==Pr||N!==Pr)&&(s.blendEquation(s.FUNC_ADD),O=Pr,N=Pr),Pt)switch(W){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.ONE,s.ONE);break;case S_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case y_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",W);break}else switch(W){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case S_:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y_:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",W);break}I=null,w=null,L=null,z=null,T.set(0,0,0),P=0,v=W,Z=Pt}return}Ge=Ge||Ue,Te=Te||ge,Qe=Qe||Pe,(Ue!==O||Ge!==N)&&(s.blendEquationSeparate(lt[Ue],lt[Ge]),O=Ue,N=Ge),(ge!==I||Pe!==w||Te!==L||Qe!==z)&&(s.blendFuncSeparate(pt[ge],pt[Pe],pt[Te],pt[Qe]),I=ge,w=Pe,L=Te,z=Qe),(We.equals(T)===!1||$t!==P)&&(s.blendColor(We.r,We.g,We.b,$t),T.copy(We),P=$t),v=W,Z=!1}function gt(W,Ue){W.side===ki?Ve(s.CULL_FACE):Se(s.CULL_FACE);let ge=W.side===Zn;Ue&&(ge=!ge),Zt(ge),W.blending===Fs&&W.transparent===!1?mt(ya):mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pe=W.stencilWrite;p.setTest(Pe),Pe&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),an(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(W){k!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),k=W)}function Kt(W){W!==OM?(Se(s.CULL_FACE),W!==J&&(W===x_?s.cullFace(s.BACK):W===PM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ve(s.CULL_FACE),J=W}function Qt(W){W!==de&&(G&&s.lineWidth(W),de=W)}function an(W,Ue,ge){W?(Se(s.POLYGON_OFFSET_FILL),(me!==Ue||$!==ge)&&(me=Ue,$=ge,d.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,ge))):Ve(s.POLYGON_OFFSET_FILL)}function Ot(W){W?Se(s.SCISSOR_TEST):Ve(s.SCISSOR_TEST)}function pe(W){W===void 0&&(W=s.TEXTURE0+B-1),Ae!==W&&(s.activeTexture(W),Ae=W)}function F(W,Ue,ge){ge===void 0&&(Ae===null?ge=s.TEXTURE0+B-1:ge=Ae);let Pe=U[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},U[ge]=Pe),(Pe.type!==W||Pe.texture!==Ue)&&(Ae!==ge&&(s.activeTexture(ge),Ae=ge),s.bindTexture(W,Ue||xe[W]),Pe.type=W,Pe.texture=Ue)}function Ce(){const W=U[Ae];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ye(){try{s.compressedTexImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function M(){try{s.texSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function Y(){try{s.texSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function V(){try{s.compressedTexSubImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ye(){try{s.texStorage2D(...arguments)}catch(W){At("WebGLState:",W)}}function be(){try{s.texStorage3D(...arguments)}catch(W){At("WebGLState:",W)}}function ce(){try{s.texImage2D(...arguments)}catch(W){At("WebGLState:",W)}}function ue(){try{s.texImage3D(...arguments)}catch(W){At("WebGLState:",W)}}function Ee(W){return _[W]!==void 0?_[W]:s.getParameter(W)}function Ne(W,Ue){_[W]!==Ue&&(s.pixelStorei(W,Ue),_[W]=Ue)}function De(W){we.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),we.copy(W))}function Oe(W){Be.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Be.copy(W))}function je(W,Ue){let ge=h.get(Ue);ge===void 0&&(ge=new WeakMap,h.set(Ue,ge));let Pe=ge.get(W);Pe===void 0&&(Pe=s.getUniformBlockIndex(Ue,W.name),ge.set(W,Pe))}function tt(W,Ue){const Pe=h.get(Ue).get(W);m.get(Ue)!==Pe&&(s.uniformBlockBinding(Ue,Pe,W.__bindingPointIndex),m.set(Ue,Pe))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},_={},Ae=null,U={},g={},b=new WeakMap,E=[],C=null,S=!1,v=null,O=null,I=null,w=null,N=null,L=null,z=null,T=new Ut(0,0,0),P=0,Z=!1,k=null,J=null,de=null,me=null,$=null,we.set(0,0,s.canvas.width,s.canvas.height),Be.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Se,disable:Ve,bindFramebuffer:at,drawBuffers:$e,useProgram:Wt,setBlending:mt,setMaterial:gt,setFlipSided:Zt,setCullFace:Kt,setLineWidth:Qt,setPolygonOffset:an,setScissorTest:Ot,activeTexture:pe,bindTexture:F,unbindTexture:Ce,compressedTexImage2D:Ye,compressedTexImage3D:D,texImage2D:ce,texImage3D:ue,pixelStorei:Ne,getParameter:Ee,updateUBOMapping:je,uniformBlockBinding:tt,texStorage2D:ye,texStorage3D:be,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:ee,compressedTexSubImage3D:V,scissor:De,viewport:Oe,reset:ot}}function e2(s,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,x=new WeakMap,_=new Set;let g;const b=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,M){return E?new OffscreenCanvas(D,M):ru("canvas")}function S(D,M,Y){let ee=1;const V=Ye(D);if((V.width>Y||V.height>Y)&&(ee=Y/Math.max(V.width,V.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ye=Math.floor(ee*V.width),be=Math.floor(ee*V.height);g===void 0&&(g=C(ye,be));const ce=M?C(ye,be):g;return ce.width=ye,ce.height=be,ce.getContext("2d").drawImage(D,0,0,ye,be),st("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+ye+"x"+be+")."),ce}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),D;return D}function v(D){return D.generateMipmaps}function O(D){s.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(D,M,Y,ee,V,ye=!1){if(D!==null){if(s[D]!==void 0)return s[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let be;ee&&(be=e.get("EXT_texture_norm16"),be||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=M;if(M===s.RED&&(Y===s.FLOAT&&(ce=s.R32F),Y===s.HALF_FLOAT&&(ce=s.R16F),Y===s.UNSIGNED_BYTE&&(ce=s.R8),Y===s.UNSIGNED_SHORT&&be&&(ce=be.R16_EXT),Y===s.SHORT&&be&&(ce=be.R16_SNORM_EXT)),M===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.R8UI),Y===s.UNSIGNED_SHORT&&(ce=s.R16UI),Y===s.UNSIGNED_INT&&(ce=s.R32UI),Y===s.BYTE&&(ce=s.R8I),Y===s.SHORT&&(ce=s.R16I),Y===s.INT&&(ce=s.R32I)),M===s.RG&&(Y===s.FLOAT&&(ce=s.RG32F),Y===s.HALF_FLOAT&&(ce=s.RG16F),Y===s.UNSIGNED_BYTE&&(ce=s.RG8),Y===s.UNSIGNED_SHORT&&be&&(ce=be.RG16_EXT),Y===s.SHORT&&be&&(ce=be.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ce=s.RG16UI),Y===s.UNSIGNED_INT&&(ce=s.RG32UI),Y===s.BYTE&&(ce=s.RG8I),Y===s.SHORT&&(ce=s.RG16I),Y===s.INT&&(ce=s.RG32I)),M===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),Y===s.UNSIGNED_INT&&(ce=s.RGB32UI),Y===s.BYTE&&(ce=s.RGB8I),Y===s.SHORT&&(ce=s.RGB16I),Y===s.INT&&(ce=s.RGB32I)),M===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ce=s.RGBA32UI),Y===s.BYTE&&(ce=s.RGBA8I),Y===s.SHORT&&(ce=s.RGBA16I),Y===s.INT&&(ce=s.RGBA32I)),M===s.RGB&&(Y===s.UNSIGNED_SHORT&&be&&(ce=be.RGB16_EXT),Y===s.SHORT&&be&&(ce=be.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),M===s.RGBA){const ue=ye?iu:Tt.getTransfer(V);Y===s.FLOAT&&(ce=s.RGBA32F),Y===s.HALF_FLOAT&&(ce=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ce=ue===Gt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&be&&(ce=be.RGBA16_EXT),Y===s.SHORT&&be&&(ce=be.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function N(D,M){let Y;return D?M===null||M===Zi||M===sl?Y=s.DEPTH24_STENCIL8:M===Xi?Y=s.DEPTH32F_STENCIL8:M===rl&&(Y=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===sl?Y=s.DEPTH_COMPONENT24:M===Xi?Y=s.DEPTH_COMPONENT32F:M===rl&&(Y=s.DEPTH_COMPONENT16),Y}function L(D,M){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==Dn&&D.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function z(D){const M=D.target;M.removeEventListener("dispose",z),P(M),M.isVideoTexture&&x.delete(M),M.isHTMLTexture&&_.delete(M)}function T(D){const M=D.target;M.removeEventListener("dispose",T),k(M)}function P(D){const M=r.get(D);if(M.__webglInit===void 0)return;const Y=D.source,ee=b.get(Y);if(ee){const V=ee[M.__cacheKey];V.usedTimes--,V.usedTimes===0&&Z(D),Object.keys(ee).length===0&&b.delete(Y)}r.remove(D)}function Z(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const Y=D.source,ee=b.get(Y);delete ee[M.__cacheKey],d.memory.textures--}function k(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let V=0;V<M.__webglFramebuffer[ee].length;V++)s.deleteFramebuffer(M.__webglFramebuffer[ee][V]);else s.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)s.deleteFramebuffer(M.__webglFramebuffer[ee]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=D.textures;for(let ee=0,V=Y.length;ee<V;ee++){const ye=r.get(Y[ee]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),d.memory.textures--),r.remove(Y[ee])}r.remove(D)}let J=0;function de(){J=0}function me(){return J}function $(D){J=D}function B(){const D=J;return D>=l.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),J+=1,D}function G(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function te(D,M){const Y=r.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const ee=D.image;if(ee===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(Y,D,M);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+M)}function _e(D,M){const Y=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Ve(Y,D,M);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+M)}function Ae(D,M){const Y=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Ve(Y,D,M);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+M)}function U(D,M){const Y=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){at(Y,D,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+M)}const K={[_h]:s.REPEAT,[Sa]:s.CLAMP_TO_EDGE,[vh]:s.MIRRORED_REPEAT},Re={[Dn]:s.NEAREST,[ib]:s.NEAREST_MIPMAP_NEAREST,[Ec]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[Cd]:s.LINEAR_MIPMAP_NEAREST,[zr]:s.LINEAR_MIPMAP_LINEAR},we={[sb]:s.NEVER,[fb]:s.ALWAYS,[ob]:s.LESS,[up]:s.LEQUAL,[lb]:s.EQUAL,[fp]:s.GEQUAL,[cb]:s.GREATER,[ub]:s.NOTEQUAL};function Be(D,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===Cd||M.magFilter===Ec||M.magFilter===zr||M.minFilter===In||M.minFilter===Cd||M.minFilter===Ec||M.minFilter===zr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,K[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Re[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Re[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==Ec&&M.minFilter!==zr||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function se(D,M){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",z));const ee=M.source;let V=b.get(ee);V===void 0&&(V={},b.set(ee,V));const ye=G(M);if(ye!==D.__cacheKey){V[ye]===void 0&&(V[ye]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),V[ye].usedTimes++;const be=V[D.__cacheKey];be!==void 0&&(V[D.__cacheKey].usedTimes--,be.usedTimes===0&&Z(M)),D.__cacheKey=ye,D.__webglTexture=V[ye].texture}return Y}function xe(D,M,Y){return Math.floor(Math.floor(D/Y)/M)}function Se(D,M,Y,ee){const ye=D.updateRanges;if(ye.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Y,ee,M.data);else{ye.sort((Ne,De)=>Ne.start-De.start);let be=0;for(let Ne=1;Ne<ye.length;Ne++){const De=ye[be],Oe=ye[Ne],je=De.start+De.count,tt=xe(Oe.start,M.width,4),ot=xe(De.start,M.width,4);Oe.start<=je+1&&tt===ot&&xe(Oe.start+Oe.count-1,M.width,4)===tt?De.count=Math.max(De.count,Oe.start+Oe.count-De.start):(++be,ye[be]=Oe)}ye.length=be+1;const ce=i.getParameter(s.UNPACK_ROW_LENGTH),ue=i.getParameter(s.UNPACK_SKIP_PIXELS),Ee=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ne=0,De=ye.length;Ne<De;Ne++){const Oe=ye[Ne],je=Math.floor(Oe.start/4),tt=Math.ceil(Oe.count/4),ot=je%M.width,W=Math.floor(je/M.width),Ue=tt,ge=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,ot,W,Ue,ge,Y,ee,M.data)}D.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ce),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function Ve(D,M,Y){let ee=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=s.TEXTURE_3D);const V=se(D,M),ye=M.source;i.bindTexture(ee,D.__webglTexture,s.TEXTURE0+Y);const be=r.get(ye);if(ye.version!==be.__version||V===!0){if(i.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ge=Tt.getPrimaries(Tt.workingColorSpace),Pe=M.colorSpace===rr?null:Tt.getPrimaries(M.colorSpace),Ge=M.colorSpace===rr||ge===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ue=S(M.image,!1,l.maxTextureSize);ue=Ce(M,ue);const Ee=c.convert(M.format,M.colorSpace),Ne=c.convert(M.type);let De=w(M.internalFormat,Ee,Ne,M.normalized,M.colorSpace,M.isVideoTexture);Be(ee,M);let Oe;const je=M.mipmaps,tt=M.isVideoTexture!==!0,ot=be.__version===void 0||V===!0,W=ye.dataReady,Ue=L(M,ue);if(M.isDepthTexture)De=N(M.format===Br,M.type),ot&&(tt?i.texStorage2D(s.TEXTURE_2D,1,De,ue.width,ue.height):i.texImage2D(s.TEXTURE_2D,0,De,ue.width,ue.height,0,Ee,Ne,null));else if(M.isDataTexture)if(je.length>0){tt&&ot&&i.texStorage2D(s.TEXTURE_2D,Ue,De,je[0].width,je[0].height);for(let ge=0,Pe=je.length;ge<Pe;ge++)Oe=je[ge],tt?W&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,Ee,Ne,Oe.data):i.texImage2D(s.TEXTURE_2D,ge,De,Oe.width,Oe.height,0,Ee,Ne,Oe.data);M.generateMipmaps=!1}else tt?(ot&&i.texStorage2D(s.TEXTURE_2D,Ue,De,ue.width,ue.height),W&&Se(M,ue,Ee,Ne)):i.texImage2D(s.TEXTURE_2D,0,De,ue.width,ue.height,0,Ee,Ne,ue.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,De,je[0].width,je[0].height,ue.depth);for(let ge=0,Pe=je.length;ge<Pe;ge++)if(Oe=je[ge],M.format!==Ni)if(Ee!==null)if(tt){if(W)if(M.layerUpdates.size>0){const Ge=ev(Oe.width,Oe.height,M.format,M.type);for(const Te of M.layerUpdates){const Qe=Oe.data.subarray(Te*Ge/Oe.data.BYTES_PER_ELEMENT,(Te+1)*Ge/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Te,Oe.width,Oe.height,1,Ee,Qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Oe.width,Oe.height,ue.depth,Ee,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,De,Oe.width,Oe.height,ue.depth,0,Oe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Oe.width,Oe.height,ue.depth,Ee,Ne,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ge,De,Oe.width,Oe.height,ue.depth,0,Ee,Ne,Oe.data)}else{tt&&ot&&i.texStorage2D(s.TEXTURE_2D,Ue,De,je[0].width,je[0].height);for(let ge=0,Pe=je.length;ge<Pe;ge++)Oe=je[ge],M.format!==Ni?Ee!==null?tt?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,Ee,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,ge,De,Oe.width,Oe.height,0,Oe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?W&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,Ee,Ne,Oe.data):i.texImage2D(s.TEXTURE_2D,ge,De,Oe.width,Oe.height,0,Ee,Ne,Oe.data)}else if(M.isDataArrayTexture)if(tt){if(ot&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,De,ue.width,ue.height,ue.depth),W)if(M.layerUpdates.size>0){const ge=ev(ue.width,ue.height,M.format,M.type);for(const Pe of M.layerUpdates){const Ge=ue.data.subarray(Pe*ge/ue.data.BYTES_PER_ELEMENT,(Pe+1)*ge/ue.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,ue.width,ue.height,1,Ee,Ne,Ge)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ne,ue.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,Ee,Ne,ue.data);else if(M.isData3DTexture)tt?(ot&&i.texStorage3D(s.TEXTURE_3D,Ue,De,ue.width,ue.height,ue.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ne,ue.data)):i.texImage3D(s.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,Ee,Ne,ue.data);else if(M.isFramebufferTexture){if(ot)if(tt)i.texStorage2D(s.TEXTURE_2D,Ue,De,ue.width,ue.height);else{let ge=ue.width,Pe=ue.height;for(let Ge=0;Ge<Ue;Ge++)i.texImage2D(s.TEXTURE_2D,Ge,De,ge,Pe,0,Ee,Ne,null),ge>>=1,Pe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ue.parentNode!==ge){ge.appendChild(ue),_.add(M),ge.onpaint=Pe=>{const Ge=Pe.changedElements;for(const Te of _)Ge.includes(Te.image)&&(Te.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ue);else{const Ge=s.RGBA,Te=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ge,Te,Qe,ue)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if(tt&&ot){const ge=Ye(je[0]);i.texStorage2D(s.TEXTURE_2D,Ue,De,ge.width,ge.height)}for(let ge=0,Pe=je.length;ge<Pe;ge++)Oe=je[ge],tt?W&&i.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ee,Ne,Oe):i.texImage2D(s.TEXTURE_2D,ge,De,Ee,Ne,Oe);M.generateMipmaps=!1}else if(tt){if(ot){const ge=Ye(ue);i.texStorage2D(s.TEXTURE_2D,Ue,De,ge.width,ge.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Ne,ue)}else i.texImage2D(s.TEXTURE_2D,0,De,Ee,Ne,ue);v(M)&&O(ee),be.__version=ye.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function at(D,M,Y){if(M.image.length!==6)return;const ee=se(D,M),V=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Y);const ye=r.get(V);if(V.version!==ye.__version||ee===!0){i.activeTexture(s.TEXTURE0+Y);const be=Tt.getPrimaries(Tt.workingColorSpace),ce=M.colorSpace===rr?null:Tt.getPrimaries(M.colorSpace),ue=M.colorSpace===rr||be===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,De=[];for(let Te=0;Te<6;Te++)!Ee&&!Ne?De[Te]=S(M.image[Te],!0,l.maxCubemapSize):De[Te]=Ne?M.image[Te].image:M.image[Te],De[Te]=Ce(M,De[Te]);const Oe=De[0],je=c.convert(M.format,M.colorSpace),tt=c.convert(M.type),ot=w(M.internalFormat,je,tt,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,Ue=ye.__version===void 0||ee===!0,ge=V.dataReady;let Pe=L(M,Oe);Be(s.TEXTURE_CUBE_MAP,M);let Ge;if(Ee){W&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ot,Oe.width,Oe.height);for(let Te=0;Te<6;Te++){Ge=De[Te].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const We=Ge[Qe];M.format!==Ni?je!==null?W?ge&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,We.width,We.height,je,We.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,ot,We.width,We.height,0,We.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,We.width,We.height,je,tt,We.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,ot,We.width,We.height,0,je,tt,We.data)}}}else{if(Ge=M.mipmaps,W&&Ue){Ge.length>0&&Pe++;const Te=Ye(De[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ot,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ne){W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,De[Te].width,De[Te].height,je,tt,De[Te].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ot,De[Te].width,De[Te].height,0,je,tt,De[Te].data);for(let Qe=0;Qe<Ge.length;Qe++){const $t=Ge[Qe].image[Te].image;W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,$t.width,$t.height,je,tt,$t.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,ot,$t.width,$t.height,0,je,tt,$t.data)}}else{W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,je,tt,De[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ot,je,tt,De[Te]);for(let Qe=0;Qe<Ge.length;Qe++){const We=Ge[Qe];W?ge&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,je,tt,We.image[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,ot,je,tt,We.image[Te])}}}v(M)&&O(s.TEXTURE_CUBE_MAP),ye.__version=V.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function $e(D,M,Y,ee,V,ye){const be=c.convert(Y.format,Y.colorSpace),ce=c.convert(Y.type),ue=w(Y.internalFormat,be,ce,Y.normalized,Y.colorSpace),Ee=r.get(M),Ne=r.get(Y);if(Ne.__renderTarget=M,!Ee.__hasExternalTextures){const De=Math.max(1,M.width>>ye),Oe=Math.max(1,M.height>>ye);V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?i.texImage3D(V,ye,ue,De,Oe,M.depth,0,be,ce,null):i.texImage2D(V,ye,ue,De,Oe,0,be,ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),pe(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,V,Ne.__webglTexture,0,Ot(M)):(V===s.TEXTURE_2D||V>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,V,Ne.__webglTexture,ye),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(D,M,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const ee=M.depthTexture,V=ee&&ee.isDepthTexture?ee.type:null,ye=N(M.stencilBuffer,V),be=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pe(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(M),ye,M.width,M.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(M),ye,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ye,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,D)}else{const ee=M.textures;for(let V=0;V<ee.length;V++){const ye=ee[V],be=c.convert(ye.format,ye.colorSpace),ce=c.convert(ye.type),ue=w(ye.internalFormat,be,ce,ye.normalized,ye.colorSpace);pe(M)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(M),ue,M.width,M.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(M),ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(D,M,Y){const ee=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const V=r.get(M.depthTexture);if(V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee){if(V.__webglInit===void 0&&(V.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),V.__webglTexture===void 0){V.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Be(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ee=c.convert(M.depthTexture.format),Ne=c.convert(M.depthTexture.type);let De;M.depthTexture.format===Ea?De=s.DEPTH_COMPONENT24:M.depthTexture.format===Br&&(De=s.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,De,M.width,M.height,0,Ee,Ne,null)}}else te(M.depthTexture,0);const ye=V.__webglTexture,be=Ot(M),ce=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,ue=M.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ea)pe(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ce,ye,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ue,ce,ye,0);else if(M.depthTexture.format===Br)pe(M)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ce,ye,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ue,ce,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(D){const M=r.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const V=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",V)};ee.addEventListener("dispose",V),M.__depthDisposeCallback=V}M.__boundDepthTexture=ee}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let ee=0;ee<6;ee++)lt(M.__webglFramebuffer[ee],D,ee);else{const ee=D.texture.mipmaps;ee&&ee.length>0?lt(M.__webglFramebuffer[0],D,0):lt(M.__webglFramebuffer,D,0)}else if(Y){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=s.createRenderbuffer(),Wt(M.__webglDepthbuffer[ee],D,!1);else{const V=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=M.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,ye)}}else{const ee=D.texture.mipmaps;if(ee&&ee.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Wt(M.__webglDepthbuffer,D,!1);else{const V=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,ye)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(D,M,Y){const ee=r.get(D);M!==void 0&&$e(ee.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&pt(D)}function gt(D){const M=D.texture,Y=r.get(D),ee=r.get(M);D.addEventListener("dispose",T);const V=D.textures,ye=D.isWebGLCubeRenderTarget===!0,be=V.length>1;if(be||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=M.version,d.memory.textures++),ye){Y.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ce]=[];for(let ue=0;ue<M.mipmaps.length;ue++)Y.__webglFramebuffer[ce][ue]=s.createFramebuffer()}else Y.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)Y.__webglFramebuffer[ce]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(be)for(let ce=0,ue=V.length;ce<ue;ce++){const Ee=r.get(V[ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&pe(D)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ce=0;ce<V.length;ce++){const ue=V[ce];Y.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);const Ee=c.convert(ue.format,ue.colorSpace),Ne=c.convert(ue.type),De=w(ue.internalFormat,Ee,Ne,ue.normalized,ue.colorSpace,D.isXRRenderTarget===!0),Oe=Ot(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,De,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Wt(Y.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Be(s.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)$e(Y.__webglFramebuffer[ce][ue],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else $e(Y.__webglFramebuffer[ce],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(M)&&O(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(be){for(let ce=0,ue=V.length;ce<ue;ce++){const Ee=V[ce],Ne=r.get(Ee);let De=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,Ne.__webglTexture),Be(De,Ee),$e(Y.__webglFramebuffer,D,Ee,s.COLOR_ATTACHMENT0+ce,De,0),v(Ee)&&O(De)}i.unbindTexture()}else{let ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ce,ee.__webglTexture),Be(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)$e(Y.__webglFramebuffer[ue],D,M,s.COLOR_ATTACHMENT0,ce,ue);else $e(Y.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,ce,0);v(M)&&O(ce),i.unbindTexture()}D.depthBuffer&&pt(D)}function Zt(D){const M=D.textures;for(let Y=0,ee=M.length;Y<ee;Y++){const V=M[Y];if(v(V)){const ye=I(D),be=r.get(V).__webglTexture;i.bindTexture(ye,be),O(ye),i.unbindTexture()}}}const Kt=[],Qt=[];function an(D){if(D.samples>0){if(pe(D)===!1){const M=D.textures,Y=D.width,ee=D.height;let V=s.COLOR_BUFFER_BIT;const ye=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=r.get(D),ce=M.length>1;if(ce)for(let Ee=0;Ee<M.length;Ee++)i.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ue=D.texture.mipmaps;ue&&ue.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(V|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(V|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const Ne=r.get(M[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,V,s.NEAREST),m===!0&&(Kt.length=0,Qt.length=0,Kt.push(s.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Kt.push(ye),Qt.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let Ee=0;Ee<M.length;Ee++){i.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,be.__webglColorRenderbuffer[Ee]);const Ne=r.get(M[Ee]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ne,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ot(D){return Math.min(l.maxSamples,D.samples)}function pe(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(D){const M=d.render.frame;x.get(D)!==M&&(x.set(D,M),D.update())}function Ce(D,M){const Y=D.colorSpace,ee=D.format,V=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==nu&&Y!==rr&&(Tt.getTransfer(Y)===Gt?(ee!==Ni||V!==Mi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",Y)),M}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=de,this.getTextureUnits=me,this.setTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=_e,this.setTexture3D=Ae,this.setTextureCube=U,this.rebindTextures=mt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function t2(s,e){function i(r,l=rr){let c;const d=Tt.getTransfer(l);if(r===Mi)return s.UNSIGNED_BYTE;if(r===rp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Jv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===jv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Kv)return s.BYTE;if(r===Qv)return s.SHORT;if(r===rl)return s.UNSIGNED_SHORT;if(r===ap)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===ba)return s.HALF_FLOAT;if(r===$v)return s.ALPHA;if(r===ex)return s.RGB;if(r===Ni)return s.RGBA;if(r===Ea)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===tx)return s.RED;if(r===op)return s.RED_INTEGER;if(r===Gr)return s.RG;if(r===lp)return s.RG_INTEGER;if(r===cp)return s.RGBA_INTEGER;if(r===Kc||r===Qc||r===Jc||r===jc)if(d===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===Sh||r===yh||r===Mh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===xh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bh||r===Eh||r===Th||r===Ah||r===Rh||r===eu||r===Ch)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===bh||r===Eh)return d===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Th)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ah)return c.COMPRESSED_R11_EAC;if(r===Rh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===eu)return c.COMPRESSED_RG11_EAC;if(r===Ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Ih||r===zh||r===Bh||r===Fh||r===Hh||r===Gh||r===Vh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===wh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Oh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ph)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ih)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kh||r===Xh||r===Wh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===kh)return d===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qh||r===Yh||r===tu||r===Zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===qh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Yh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const n2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i2=`
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

}`;class a2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new ux(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ki({vertexShader:n2,fragmentShader:i2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r2 extends kr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,_=null,g=null,b=null,E=null;const C=typeof XRWebGLBinding<"u",S=new a2,v={},O=i.getContextAttributes();let I=null,w=null;const N=[],L=[],z=new Rt;let T=null;const P=new yi;P.viewport=new on;const Z=new yi;Z.viewport=new on;const k=[P,Z],J=new hE;let de=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=N[se];return xe===void 0&&(xe=new Pd,N[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=N[se];return xe===void 0&&(xe=new Pd,N[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=N[se];return xe===void 0&&(xe=new Pd,N[se]=xe),xe.getHandSpace()};function $(se){const xe=L.indexOf(se.inputSource);if(xe===-1)return;const Se=N[xe];Se!==void 0&&(Se.update(se.inputSource,se.frame,h||d),Se.dispatchEvent({type:se.type,data:se.inputSource}))}function B(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let se=0;se<N.length;se++){const xe=L[se];xe!==null&&(L[se]=null,N[se].disconnect(xe))}de=null,me=null,S.reset();for(const se in v)delete v[se];e.setRenderTarget(I),b=null,g=null,_=null,l=null,w=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ve=null,at=null;O.depth&&(at=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=O.stencil?Br:Ea,Ve=O.stencil?sl:Zi);const $e={colorFormat:i.RGBA8,depthFormat:at,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer($e),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Yi(g.textureWidth,g.textureHeight,{format:Ni,type:Mi,depthTexture:new Xs(g.textureWidth,g.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Se={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),w=new Yi(b.framebufferWidth,b.framebufferHeight,{format:Ni,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Be.setContext(l),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(se){for(let xe=0;xe<se.removed.length;xe++){const Se=se.removed[xe],Ve=L.indexOf(Se);Ve>=0&&(L[Ve]=null,N[Ve].disconnect(Se))}for(let xe=0;xe<se.added.length;xe++){const Se=se.added[xe];let Ve=L.indexOf(Se);if(Ve===-1){for(let $e=0;$e<N.length;$e++)if($e>=L.length){L.push(Se),Ve=$e;break}else if(L[$e]===null){L[$e]=Se,Ve=$e;break}if(Ve===-1)break}const at=N[Ve];at&&at.connect(Se)}}const te=new j,_e=new j;function Ae(se,xe,Se){te.setFromMatrixPosition(xe.matrixWorld),_e.setFromMatrixPosition(Se.matrixWorld);const Ve=te.distanceTo(_e),at=xe.projectionMatrix.elements,$e=Se.projectionMatrix.elements,Wt=at[14]/(at[10]-1),lt=at[14]/(at[10]+1),pt=(at[9]+1)/at[5],mt=(at[9]-1)/at[5],gt=(at[8]-1)/at[0],Zt=($e[8]+1)/$e[0],Kt=Wt*gt,Qt=Wt*Zt,an=Ve/(-gt+Zt),Ot=an*-gt;if(xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ot),se.translateZ(an),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),at[10]===-1)se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const pe=Wt+an,F=lt+an,Ce=Kt-Ot,Ye=Qt+(Ve-Ot),D=pt*lt/F*pe,M=mt*lt/F*pe;se.projectionMatrix.makePerspective(Ce,Ye,D,M,pe,F),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let xe=se.near,Se=se.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),J.near=Z.near=P.near=xe,J.far=Z.far=P.far=Se,(de!==J.near||me!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),de=J.near,me=J.far),J.layers.mask=se.layers.mask|6,P.layers.mask=J.layers.mask&-5,Z.layers.mask=J.layers.mask&-3;const Ve=se.parent,at=J.cameras;U(J,Ve);for(let $e=0;$e<at.length;$e++)U(at[$e],Ve);at.length===2?Ae(J,P,Z):J.projectionMatrix.copy(P.projectionMatrix),K(se,J,Ve)};function K(se,xe,Se){Se===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(Se.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=ol*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&b===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(se){return v[se]};let Re=null;function we(se,xe){if(x=xe.getViewerPose(h||d),E=xe,x!==null){const Se=x.views;b!==null&&(e.setRenderTargetFramebuffer(w,b.framebuffer),e.setRenderTarget(w));let Ve=!1;Se.length!==J.cameras.length&&(J.cameras.length=0,Ve=!0);for(let lt=0;lt<Se.length;lt++){const pt=Se[lt];let mt=null;if(b!==null)mt=b.getViewport(pt);else{const Zt=_.getViewSubImage(g,pt);mt=Zt.viewport,lt===0&&(e.setRenderTargetTextures(w,Zt.colorTexture,Zt.depthStencilTexture),e.setRenderTarget(w))}let gt=k[lt];gt===void 0&&(gt=new yi,gt.layers.enable(lt),gt.viewport=new on,k[lt]=gt),gt.matrix.fromArray(pt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(pt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(mt.x,mt.y,mt.width,mt.height),lt===0&&(J.matrix.copy(gt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ve===!0&&J.cameras.push(gt)}const at=l.enabledFeatures;if(at&&at.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const lt=_.getDepthInformation(Se[0]);lt&&lt.isValid&&lt.texture&&S.init(lt,l.renderState)}if(at&&at.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let lt=0;lt<Se.length;lt++){const pt=Se[lt].camera;if(pt){let mt=v[pt];mt||(mt=new ux,v[pt]=mt);const gt=_.getCameraImage(pt);mt.sourceTexture=gt}}}}for(let Se=0;Se<N.length;Se++){const Ve=L[Se],at=N[Se];Ve!==null&&at!==void 0&&at.update(Ve,xe,h||d)}Re&&Re(se,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Be=new px;Be.setAnimationLoop(we),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const s2=new ln,yx=new ut;yx.set(-1,0,0,0,1,0,0,0,1);function o2(s,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,fx(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,O,I,w){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(S,v):v.isMeshLambertMaterial?(c(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),x(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(S,v),g(S,v),v.isMeshPhysicalMaterial&&b(S,v,w)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),C(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&p(S,v)):v.isPointsMaterial?m(S,v,O,I):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Zn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Zn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const O=e.get(v),I=O.envMap,w=O.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(s2.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(yx),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function p(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,O,I){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*O,S.scale.value=I*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function x(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,O){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const O=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function l2(s,e,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const L=N.program;r.uniformBlockBinding(w,L)}function h(w,N){let L=l[w.id];L===void 0&&(S(w),L=x(w),l[w.id]=L,w.addEventListener("dispose",O));const z=N.program;r.updateUBOMapping(w,z);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function x(w){const N=_();w.__bindingPointIndex=N;const L=s.createBuffer(),z=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,z,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function _(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=l[w.id],L=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let T=0,P=L.length;T<P;T++){const Z=L[T];if(Array.isArray(Z))for(let k=0,J=Z.length;k<J;k++)b(Z[k],T,k,z);else b(Z,T,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(w,N,L,z){if(C(w,N,L,z)===!0){const T=w.__offset,P=w.value;if(Array.isArray(P)){let Z=0;for(let k=0;k<P.length;k++){const J=P[k],de=v(J);E(J,w.__data,Z),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(Z+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(P,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function E(w,N,L){typeof w=="number"||typeof w=="boolean"?N[0]=w:w.isMatrix3?(N[0]=w.elements[0],N[1]=w.elements[1],N[2]=w.elements[2],N[3]=0,N[4]=w.elements[3],N[5]=w.elements[4],N[6]=w.elements[5],N[7]=0,N[8]=w.elements[6],N[9]=w.elements[7],N[10]=w.elements[8],N[11]=0):ArrayBuffer.isView(w)?N.set(new w.constructor(w.buffer,w.byteOffset,N.length)):w.toArray(N,L)}function C(w,N,L,z){const T=w.value,P=N+"_"+L;if(z[P]===void 0)return typeof T=="number"||typeof T=="boolean"?z[P]=T:ArrayBuffer.isView(T)?z[P]=T.slice():z[P]=T.clone(),!0;{const Z=z[P];if(typeof T=="number"||typeof T=="boolean"){if(Z!==T)return z[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(Z.equals(T)===!1)return Z.copy(T),!0}}return!1}function S(w){const N=w.uniforms;let L=0;const z=16;for(let P=0,Z=N.length;P<Z;P++){const k=Array.isArray(N[P])?N[P]:[N[P]];for(let J=0,de=k.length;J<de;J++){const me=k[J],$=Array.isArray(me.value)?me.value:[me.value];for(let B=0,G=$.length;B<G;B++){const te=$[B],_e=v(te),Ae=L%z,U=Ae%_e.boundary,K=Ae+U;L+=U,K!==0&&z-K<_e.storage&&(L+=z-K),me.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=L,L+=_e.storage}}}const T=L%z;return T>0&&(L+=z-T),w.__size=L,w.__cache={},this}function v(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):st("WebGLRenderer: Unsupported uniform value type.",w),N}function O(w){const N=w.target;N.removeEventListener("dispose",O);const L=d.indexOf(N.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function I(){for(const w in l)s.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:h,dispose:I}}const c2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function u2(){return Gi===null&&(Gi=new Jb(c2,16,16,Gr,ba),Gi.name="DFG_LUT",Gi.minFilter=In,Gi.magFilter=In,Gi.wrapS=Sa,Gi.wrapT=Sa,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class f2{constructor(e={}){const{canvas:i=hb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:b=Mi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const C=b,S=new Set([cp,lp,op]),v=new Set([Mi,Zi,rl,sl,rp,sp]),O=new Uint32Array(4),I=new Int32Array(4),w=new j;let N=null,L=null;const z=[],T=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let k=!1,J=null,de=null,me=null,$=null;this._outputColorSpace=Si;let B=0,G=0,te=null,_e=-1,Ae=null;const U=new on,K=new on;let Re=null;const we=new Ut(0);let Be=0,se=i.width,xe=i.height,Se=1,Ve=null,at=null;const $e=new on(0,0,se,xe),Wt=new on(0,0,se,xe);let lt=!1;const pt=new ox;let mt=!1,gt=!1;const Zt=new ln,Kt=new j,Qt=new on,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function pe(){return te===null?Se:1}let F=r;function Ce(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),F===null){const q="webgl2";if(F=Ce(q,A),F===null)throw Ce(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let Ye,D,M,Y,ee,V,ye,be,ce,ue,Ee,Ne,De,Oe,je,tt,ot,W,Ue,ge,Pe,Ge,Te;function Qe(){Ye=new uA(F),Ye.init(),Pe=new t2(F,Ye),D=new nA(F,Ye,e,Pe),M=new $R(F,Ye),D.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),de=F.createFramebuffer(),me=F.createFramebuffer(),$=F.createFramebuffer(),Y=new hA(F),ee=new FR,V=new e2(F,Ye,M,ee,D,Pe,Y),ye=new cA(Z),be=new _E(F),Ge=new eA(F,be),ce=new fA(F,be,Y,Ge),ue=new mA(F,ce,be,Ge,Y),W=new pA(F,D,V),je=new iA(ee),Ee=new BR(Z,ye,Ye,D,Ge,je),Ne=new o2(Z,ee),De=new GR,Oe=new YR(Ye),ot=new $1(Z,ye,M,ue,E,m),tt=new jR(Z,ue,D),Te=new l2(F,Y,D,M),Ue=new tA(F,Ye,Y),ge=new dA(F,Ye,Y),Y.programs=Ee.programs,Z.capabilities=D,Z.extensions=Ye,Z.properties=ee,Z.renderLists=De,Z.shadowMap=tt,Z.state=M,Z.info=Y}Qe(),C!==Mi&&(P=new _A(C,i.width,i.height,p,l,c));const We=new r2(Z,F);this.xr=We,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(A){A!==void 0&&(Se=A,this.setSize(se,xe,!1))},this.getSize=function(A){return A.set(se,xe)},this.setSize=function(A,q,oe=!0){if(We.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,xe=q,i.width=Math.floor(A*Se),i.height=Math.floor(q*Se),oe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(se*Se,xe*Se).floor()},this.setDrawingBufferSize=function(A,q,oe){se=A,xe=q,Se=oe,i.width=Math.floor(A*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===Mi){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,q,oe,ae){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,q,oe,ae),M.viewport(U.copy($e).multiplyScalar(Se).round())},this.getScissor=function(A){return A.copy(Wt)},this.setScissor=function(A,q,oe,ae){A.isVector4?Wt.set(A.x,A.y,A.z,A.w):Wt.set(A,q,oe,ae),M.scissor(K.copy(Wt).multiplyScalar(Se).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){M.setScissorTest(lt=A)},this.setOpaqueSort=function(A){Ve=A},this.setTransparentSort=function(A){at=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let ae=0;if(A){let re=!1;if(te!==null){const Fe=te.texture.format;re=S.has(Fe)}if(re){const Fe=te.texture.type,Xe=v.has(Fe),ze=ot.getClearColor(),Ze=ot.getClearAlpha(),qe=ze.r,nt=ze.g,ft=ze.b;Xe?(O[0]=qe,O[1]=nt,O[2]=ft,O[3]=Ze,F.clearBufferuiv(F.COLOR,0,O)):(I[0]=qe,I[1]=nt,I[2]=ft,I[3]=Ze,F.clearBufferiv(F.COLOR,0,I))}else ae|=F.COLOR_BUFFER_BIT}q&&(ae|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),ot.dispose(),De.dispose(),Oe.dispose(),ee.dispose(),ye.dispose(),ue.dispose(),Ge.dispose(),Te.dispose(),Ee.dispose(),We.dispose(),We.removeEventListener("sessionstart",fn),We.removeEventListener("sessionend",Tn),Gn.stop()};function $t(A){A.preventDefault(),C_("WebGLRenderer: Context Lost."),k=!0}function Pt(){C_("WebGLRenderer: Context Restored."),k=!1;const A=Y.autoReset,q=tt.enabled,oe=tt.autoUpdate,ae=tt.needsUpdate,re=tt.type;Qe(),Y.autoReset=A,tt.enabled=q,tt.autoUpdate=oe,tt.needsUpdate=ae,tt.type=re}function Qn(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jn(A){const q=A.target;q.removeEventListener("dispose",Jn),Qs(q)}function Qs(A){Js(A),ee.remove(A)}function Js(A){const q=ee.get(A).programs;q!==void 0&&(q.forEach(function(oe){Ee.releaseProgram(oe)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,ae,re,Fe){q===null&&(q=an);const Xe=re.isMesh&&re.matrixWorld.determinantAffine()<0,ze=Ra(A,q,oe,ae,re);M.setMaterial(ae,Xe);let Ze=oe.index,qe=1;if(ae.wireframe===!0){if(Ze=ce.getWireframeAttribute(oe),Ze===void 0)return;qe=2}const nt=oe.drawRange,ft=oe.attributes.position;let et=nt.start*qe,Ct=(nt.start+nt.count)*qe;Fe!==null&&(et=Math.max(et,Fe.start*qe),Ct=Math.min(Ct,(Fe.start+Fe.count)*qe)),Ze!==null?(et=Math.max(et,0),Ct=Math.min(Ct,Ze.count)):ft!=null&&(et=Math.max(et,0),Ct=Math.min(Ct,ft.count));const en=Ct-et;if(en<0||en===1/0)return;Ge.setup(re,ae,ze,oe,Ze);let qt,It=Ue;if(Ze!==null&&(qt=be.get(Ze),It=ge,It.setIndex(qt)),re.isMesh)ae.wireframe===!0?(M.setLineWidth(ae.wireframeLinewidth*pe()),It.setMode(F.LINES)):It.setMode(F.TRIANGLES);else if(re.isLine){let zt=ae.linewidth;zt===void 0&&(zt=1),M.setLineWidth(zt*pe()),re.isLineSegments?It.setMode(F.LINES):re.isLineLoop?It.setMode(F.LINE_LOOP):It.setMode(F.LINE_STRIP)}else re.isPoints?It.setMode(F.POINTS):re.isSprite&&It.setMode(F.TRIANGLES);if(re.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))It.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const zt=re._multiDrawStarts,ke=re._multiDrawCounts,Ln=re._multiDrawCount,vt=Ze?be.get(Ze).bytesPerElement:1,xn=ee.get(ae).currentProgram.getUniforms();for(let jn=0;jn<Ln;jn++)xn.setValue(F,"_gl_DrawID",jn),It.render(zt[jn]/vt,ke[jn])}else if(re.isInstancedMesh)It.renderInstances(et,en,re.count);else if(oe.isInstancedBufferGeometry){const zt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ke=Math.min(oe.instanceCount,zt);It.renderInstances(et,en,ke)}else It.render(et,en)};function js(A,q,oe){A.transparent===!0&&A.side===ki&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Aa(A,q,oe),A.side=lr,A.needsUpdate=!0,Aa(A,q,oe),A.side=ki):Aa(A,q,oe)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),L=Oe.get(oe),L.init(q),T.push(L),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),L.setupLights();const ae=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Fe=re.material;if(Fe)if(Array.isArray(Fe))for(let Xe=0;Xe<Fe.length;Xe++){const ze=Fe[Xe];js(ze,oe,re),ae.add(ze)}else js(Fe,oe,re),ae.add(Fe)}),L=T.pop(),ae},this.compileAsync=function(A,q,oe=null){const ae=this.compile(A,q,oe);return new Promise(re=>{function Fe(){if(ae.forEach(function(Xe){ee.get(Xe).currentProgram.isReady()&&ae.delete(Xe)}),ae.size===0){re(A);return}setTimeout(Fe,10)}Ye.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Xr=null;function Oi(A){Xr&&Xr(A)}function fn(){Gn.stop()}function Tn(){Gn.start()}const Gn=new px;Gn.setAnimationLoop(Oi),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){Xr=A,We.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},We.addEventListener("sessionstart",fn),We.addEventListener("sessionend",Tn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;J!==null&&J.renderStart(A,q);const oe=We.enabled===!0&&We.isPresenting===!0,ae=P!==null&&(te===null||oe)&&P.begin(Z,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(q),q=We.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,q,te),L=Oe.get(A,T.length),L.init(q),L.state.textureUnits=V.getTextureUnits(),T.push(L),Zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),pt.setFromProjectionMatrix(Zt,Wi,q.reversedDepth),gt=this.localClippingEnabled,mt=je.init(this.clippingPlanes,gt),N=De.get(A,z.length),N.init(),z.push(N),We.enabled===!0&&We.isPresenting===!0){const Xe=Z.xr.getDepthSensingMesh();Xe!==null&&fr(Xe,q,-1/0,Z.sortObjects)}fr(A,q,0,Z.sortObjects),N.finish(),Z.sortObjects===!0&&N.sort(Ve,at,q.reversedDepth),Ot=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ot&&ot.addToRenderList(N,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&je.beginShadows();const re=L.state.shadowsArray;if(tt.render(re,A,q),mt===!0&&je.endShadows(),(ae&&P.hasRenderPass())===!1){const Xe=N.opaque,ze=N.transmissive;if(L.setupLights(),q.isArrayCamera){const Ze=q.cameras;if(ze.length>0)for(let qe=0,nt=Ze.length;qe<nt;qe++){const ft=Ze[qe];pl(Xe,ze,A,ft)}Ot&&ot.render(A);for(let qe=0,nt=Ze.length;qe<nt;qe++){const ft=Ze[qe];hl(N,A,ft,ft.viewport)}}else ze.length>0&&pl(Xe,ze,A,q),Ot&&ot.render(A),hl(N,A,q)}te!==null&&G===0&&(V.updateMultisampleRenderTarget(te),V.updateRenderTargetMipmap(te)),ae&&P.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,q),Ge.resetDefaultState(),_e=-1,Ae=null,T.pop(),T.length>0?(L=T[T.length-1],V.setTextureUnits(L.state.textureUnits),mt===!0&&je.setGlobalState(Z.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?N=z[z.length-1]:N=null,J!==null&&J.renderEnd()};function fr(A,q,oe,ae){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||pt.intersectsSprite(A)){ae&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Zt);const Xe=ue.update(A),ze=A.material;ze.visible&&N.push(A,Xe,ze,oe,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||pt.intersectsObject(A))){const Xe=ue.update(A),ze=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Qt.copy(Xe.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Zt)),Array.isArray(ze)){const Ze=Xe.groups;for(let qe=0,nt=Ze.length;qe<nt;qe++){const ft=Ze[qe],et=ze[ft.materialIndex];et&&et.visible&&N.push(A,Xe,et,oe,Qt.z,ft)}}else ze.visible&&N.push(A,Xe,ze,oe,Qt.z,null)}}const Fe=A.children;for(let Xe=0,ze=Fe.length;Xe<ze;Xe++)fr(Fe[Xe],q,oe,ae)}function hl(A,q,oe,ae){const{opaque:re,transmissive:Fe,transparent:Xe}=A;L.setupLightsView(oe),mt===!0&&je.setGlobalState(Z.clippingPlanes,oe),ae&&M.viewport(U.copy(ae)),re.length>0&&dr(re,q,oe),Fe.length>0&&dr(Fe,q,oe),Xe.length>0&&dr(Xe,q,oe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function pl(A,q,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const et=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new Yi(1,1,{generateMipmaps:!0,type:et?ba:Mi,minFilter:zr,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[ae.id],Xe=ae.viewport||U;Fe.setSize(Xe.z*Z.transmissionResolutionScale,Xe.w*Z.transmissionResolutionScale);const ze=Z.getRenderTarget(),Ze=Z.getActiveCubeFace(),qe=Z.getActiveMipmapLevel();Z.setRenderTarget(Fe),Z.getClearColor(we),Be=Z.getClearAlpha(),Be<1&&Z.setClearColor(16777215,.5),Z.clear(),Ot&&ot.render(oe);const nt=Z.toneMapping;Z.toneMapping=qi;const ft=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),mt===!0&&je.setGlobalState(Z.clippingPlanes,ae),dr(A,oe,ae),V.updateMultisampleRenderTarget(Fe),V.updateRenderTargetMipmap(Fe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ct=0,en=q.length;Ct<en;Ct++){const qt=q[Ct],{object:It,geometry:zt,material:ke,group:Ln}=qt;if(ke.side===ki&&It.layers.test(ae.layers)){const vt=ke.side;ke.side=Zn,ke.needsUpdate=!0,Ta(It,oe,ae,zt,ke,Ln),ke.side=vt,ke.needsUpdate=!0,et=!0}}et===!0&&(V.updateMultisampleRenderTarget(Fe),V.updateRenderTargetMipmap(Fe))}Z.setRenderTarget(ze,Ze,qe),Z.setClearColor(we,Be),ft!==void 0&&(ae.viewport=ft),Z.toneMapping=nt}function dr(A,q,oe){const ae=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Fe=A.length;re<Fe;re++){const Xe=A[re],{object:ze,geometry:Ze,group:qe}=Xe;let nt=Xe.material;nt.allowOverride===!0&&ae!==null&&(nt=ae),ze.layers.test(oe.layers)&&Ta(ze,q,oe,Ze,nt,qe)}}function Ta(A,q,oe,ae,re,Fe){A.onBeforeRender(Z,q,oe,ae,re,Fe),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(Z,q,oe,ae,A,Fe),re.transparent===!0&&re.side===ki&&re.forceSinglePass===!1?(re.side=Zn,re.needsUpdate=!0,Z.renderBufferDirect(oe,q,ae,re,A,Fe),re.side=lr,re.needsUpdate=!0,Z.renderBufferDirect(oe,q,ae,re,A,Fe),re.side=ki):Z.renderBufferDirect(oe,q,ae,re,A,Fe),A.onAfterRender(Z,q,oe,ae,re,Fe)}function Aa(A,q,oe){q.isScene!==!0&&(q=an);const ae=ee.get(A),re=L.state.lights,Fe=L.state.shadowsArray,Xe=re.state.version,ze=Ee.getParameters(A,re.state,Fe,q,oe,L.state.lightProbeGridArray),Ze=Ee.getProgramCacheKey(ze);let qe=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ae.fog=q.fog;const nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=ye.get(A.envMap||ae.environment,nt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",Jn),qe=new Map,ae.programs=qe);let ft=qe.get(Ze);if(ft!==void 0){if(ae.currentProgram===ft&&ae.lightsStateVersion===Xe)return Ji(A,ze),ft}else ze.uniforms=Ee.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,oe,ze),A.onBeforeCompile(ze,Z),ft=Ee.acquireProgram(ze,Ze),qe.set(Ze,ft),ae.uniforms=ze.uniforms;const et=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=je.uniform),Ji(A,ze),ae.needsLights=ml(A),ae.lightsStateVersion=Xe,ae.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=ft,ae.uniformsList=null,ft}function Qi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=$c.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Ji(A,q){const oe=ee.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function hr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ae=A.length;oe<ae;oe++){const re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function Ra(A,q,oe,ae,re){q.isScene!==!0&&(q=an),V.resetTextureUnits();const Fe=q.fog,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?q.environment:null,ze=te===null?Z.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Tt.workingColorSpace,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,qe=ye.get(ae.envMap||Xe,Ze),nt=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!oe.morphAttributes.position,Ct=!!oe.morphAttributes.normal,en=!!oe.morphAttributes.color;let qt=qi;ae.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qt=Z.toneMapping);const It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=It!==void 0?It.length:0,ke=ee.get(ae),Ln=L.state.lights;if(mt===!0&&(gt===!0||A!==Ae)){const Nt=A===Ae&&ae.id===_e;je.setState(ae,A,Nt)}let vt=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ln.state.version||ke.outputColorSpace!==ze||re.isBatchedMesh&&ke.batching===!1||!re.isBatchedMesh&&ke.batching===!0||re.isBatchedMesh&&ke.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&ke.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&ke.instancing===!1||!re.isInstancedMesh&&ke.instancing===!0||re.isSkinnedMesh&&ke.skinning===!1||!re.isSkinnedMesh&&ke.skinning===!0||re.isInstancedMesh&&ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&ke.instancingMorph===!1&&re.morphTexture!==null||ke.envMap!==qe||ae.fog===!0&&ke.fog!==Fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==je.numPlanes||ke.numIntersection!==je.numIntersection)||ke.vertexAlphas!==nt||ke.vertexTangents!==ft||ke.morphTargets!==et||ke.morphNormals!==Ct||ke.morphColors!==en||ke.toneMapping!==qt||ke.morphTargetsCount!==zt||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,ke.__version=ae.version);let xn=ke.currentProgram;vt===!0&&(xn=Aa(ae,q,re),J&&ae.isNodeMaterial&&J.onUpdateProgram(ae,xn,ke));let jn=!1,Ei=!1,$n=!1;const Bt=xn.getUniforms(),tn=ke.uniforms;if(M.useProgram(xn.program)&&(jn=!0,Ei=!0,$n=!0),ae.id!==_e&&(_e=ae.id,Ei=!0),ke.needsLights){const Nt=hr(L.state.lightProbeGridArray,re);ke.lightProbeGrid!==Nt&&(ke.lightProbeGrid=Nt,Ei=!0)}if(jn||Ae!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(F,"projectionMatrix",A.projectionMatrix),Bt.setValue(F,"viewMatrix",A.matrixWorldInverse);const Pi=Bt.map.cameraPosition;Pi!==void 0&&Pi.setValue(F,Kt.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Bt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),Ae!==A&&(Ae=A,Ei=!0,$n=!0)}if(ke.needsLights&&(Ln.state.directionalShadowMap.length>0&&Bt.setValue(F,"directionalShadowMap",Ln.state.directionalShadowMap,V),Ln.state.spotShadowMap.length>0&&Bt.setValue(F,"spotShadowMap",Ln.state.spotShadowMap,V),Ln.state.pointShadowMap.length>0&&Bt.setValue(F,"pointShadowMap",Ln.state.pointShadowMap,V)),re.isSkinnedMesh){Bt.setOptional(F,re,"bindMatrix"),Bt.setOptional(F,re,"bindMatrixInverse");const Nt=re.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Bt.setValue(F,"boneTexture",Nt.boneTexture,V))}re.isBatchedMesh&&(Bt.setOptional(F,re,"batchingTexture"),Bt.setValue(F,"batchingTexture",re._matricesTexture,V),Bt.setOptional(F,re,"batchingIdTexture"),Bt.setValue(F,"batchingIdTexture",re._indirectTexture,V),Bt.setOptional(F,re,"batchingColorTexture"),re._colorsTexture!==null&&Bt.setValue(F,"batchingColorTexture",re._colorsTexture,V));const Ti=oe.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&W.update(re,oe,xn),(Ei||ke.receiveShadow!==re.receiveShadow)&&(ke.receiveShadow=re.receiveShadow,Bt.setValue(F,"receiveShadow",re.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=u2()),Ei){if(Bt.setValue(F,"toneMappingExposure",Z.toneMappingExposure),ke.needsLights&&dn(tn,$n),Fe&&ae.fog===!0&&Ne.refreshFogUniforms(tn,Fe),Ne.refreshMaterialUniforms(tn,ae,Se,xe,L.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Nt=ke.lightProbeGrid;tn.probesSH.value=Nt.texture,tn.probesMin.value.copy(Nt.boundingBox.min),tn.probesMax.value.copy(Nt.boundingBox.max),tn.probesResolution.value.copy(Nt.resolution)}$c.upload(F,Qi(ke),tn,V)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&($c.upload(F,Qi(ke),tn,V),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(F,"center",re.center),Bt.setValue(F,"modelViewMatrix",re.modelViewMatrix),Bt.setValue(F,"normalMatrix",re.normalMatrix),Bt.setValue(F,"modelMatrix",re.matrixWorld),ae.uniformsGroups!==void 0){const Nt=ae.uniformsGroups;for(let Pi=0,Ca=Nt.length;Pi<Ca;Pi++){const pr=Nt[Pi];Te.update(pr,xn),Te.bind(pr,xn)}}return xn}function dn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function ml(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,q,oe){const ae=ee.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=q,ee.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const oe=ee.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,oe=0){te=A,B=q,G=oe;let ae=null,re=!1,Fe=!1;if(A){const ze=ee.get(A);if(ze.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,ze.__webglFramebuffer),U.copy(A.viewport),K.copy(A.scissor),Re=A.scissorTest,M.viewport(U),M.scissor(K),M.setScissorTest(Re),_e=-1;return}else if(ze.__webglFramebuffer===void 0)V.setupRenderTarget(A);else if(ze.__hasExternalTextures)V.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const nt=A.depthTexture;if(ze.__boundDepthTexture!==nt){if(nt!==null&&ee.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Fe=!0);const qe=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?ae=qe[q][oe]:ae=qe[q],re=!0):A.samples>0&&V.useMultisampledRTT(A)===!1?ae=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[oe]:ae=qe,U.copy(A.viewport),K.copy(A.scissor),Re=A.scissorTest}else U.copy($e).multiplyScalar(Se).floor(),K.copy(Wt).multiplyScalar(Se).floor(),Re=lt;if(oe!==0&&(ae=de),M.bindFramebuffer(F.FRAMEBUFFER,ae)&&M.drawBuffers(A,ae),M.viewport(U),M.scissor(K),M.setScissorTest(Re),re){const ze=ee.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,oe)}else if(Fe){const ze=q;for(let Ze=0;Ze<A.textures.length;Ze++){const qe=ee.get(A.textures[Ze]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ze,qe.__webglTexture,oe,ze)}}else if(A!==null&&oe!==0){const ze=ee.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ze.__webglTexture,oe)}_e=-1},this.readRenderTargetPixels=function(A,q,oe,ae,re,Fe,Xe,ze=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){M.bindFramebuffer(F.FRAMEBUFFER,Ze);try{const qe=A.textures[ze],nt=qe.format,ft=qe.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),!D.textureFormatReadable(nt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ft)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ae&&oe>=0&&oe<=A.height-re&&F.readPixels(q,oe,ae,re,Pe.convert(nt),Pe.convert(ft),Fe)}finally{const qe=te!==null?ee.get(te).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,ae,re,Fe,Xe,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze)if(q>=0&&q<=A.width-ae&&oe>=0&&oe<=A.height-re){M.bindFramebuffer(F.FRAMEBUFFER,Ze);const qe=A.textures[ze],nt=qe.format,ft=qe.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ze),!D.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.bufferData(F.PIXEL_PACK_BUFFER,Fe.byteLength,F.STREAM_READ),F.readPixels(q,oe,ae,re,Pe.convert(nt),Pe.convert(ft),0);const Ct=te!==null?ee.get(te).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Ct);const en=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pb(F,en,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Fe),F.deleteBuffer(et),F.deleteSync(en),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(A.image.width*ae),Fe=Math.floor(A.image.height*ae),Xe=q!==null?q.x:0,ze=q!==null?q.y:0;V.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,oe,0,0,Xe,ze,re,Fe),M.unbindTexture()},this.copyTextureToTexture=function(A,q,oe=null,ae=null,re=0,Fe=0){let Xe,ze,Ze,qe,nt,ft,et,Ct,en;const qt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(oe!==null)Xe=oe.max.x-oe.min.x,ze=oe.max.y-oe.min.y,Ze=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,nt=oe.min.y,ft=oe.isBox3?oe.min.z:0;else{const tn=Math.pow(2,-re);Xe=Math.floor(qt.width*tn),ze=Math.floor(qt.height*tn),A.isDataArrayTexture?Ze=qt.depth:A.isData3DTexture?Ze=Math.floor(qt.depth*tn):Ze=1,qe=0,nt=0,ft=0}ae!==null?(et=ae.x,Ct=ae.y,en=ae.z):(et=0,Ct=0,en=0);const It=Pe.convert(q.format),zt=Pe.convert(q.type);let ke;q.isData3DTexture?(V.setTexture3D(q,0),ke=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(V.setTexture2DArray(q,0),ke=F.TEXTURE_2D_ARRAY):(V.setTexture2D(q,0),ke=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Ln=M.getParameter(F.UNPACK_ROW_LENGTH),vt=M.getParameter(F.UNPACK_IMAGE_HEIGHT),xn=M.getParameter(F.UNPACK_SKIP_PIXELS),jn=M.getParameter(F.UNPACK_SKIP_ROWS),Ei=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,qt.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(F.UNPACK_SKIP_ROWS,nt),M.pixelStorei(F.UNPACK_SKIP_IMAGES,ft);const $n=A.isDataArrayTexture||A.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const tn=ee.get(A),Ti=ee.get(q),Nt=ee.get(tn.__renderTarget),Pi=ee.get(Ti.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,Nt.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ca=0;Ca<Ze;Ca++)$n&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,re,ft+Ca),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ee.get(q).__webglTexture,Fe,en+Ca)),F.blitFramebuffer(qe,nt,Xe,ze,et,Ct,Xe,ze,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||ee.has(A)){const tn=ee.get(A),Ti=ee.get(q);M.bindFramebuffer(F.READ_FRAMEBUFFER,me),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,$);for(let Nt=0;Nt<Ze;Nt++)$n?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,re,ft+Nt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,re),Bt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ti.__webglTexture,Fe,en+Nt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ti.__webglTexture,Fe),re!==0?F.blitFramebuffer(qe,nt,Xe,ze,et,Ct,Xe,ze,F.COLOR_BUFFER_BIT,F.NEAREST):Bt?F.copyTexSubImage3D(ke,Fe,et,Ct,en+Nt,qe,nt,Xe,ze):F.copyTexSubImage2D(ke,Fe,et,Ct,qe,nt,Xe,ze);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(ke,Fe,et,Ct,en,Xe,ze,Ze,It,zt,qt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,Fe,et,Ct,en,Xe,ze,Ze,It,qt.data):F.texSubImage3D(ke,Fe,et,Ct,en,Xe,ze,Ze,It,zt,qt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Fe,et,Ct,Xe,ze,It,zt,qt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Fe,et,Ct,qt.width,qt.height,It,qt.data):F.texSubImage2D(F.TEXTURE_2D,Fe,et,Ct,Xe,ze,It,zt,qt);M.pixelStorei(F.UNPACK_ROW_LENGTH,Ln),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt),M.pixelStorei(F.UNPACK_SKIP_PIXELS,xn),M.pixelStorei(F.UNPACK_SKIP_ROWS,jn),M.pixelStorei(F.UNPACK_SKIP_IMAGES,Ei),Fe===0&&q.generateMipmaps&&F.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&V.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){B=0,G=0,te=null,M.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const d2=[{id:"gamefest-2026",slug:"gamefest-2026",title:"Gamefest 2026 Experience & Post-Mortem",subtitle:"48 hours, zero sleep, three game prototypes, and an unforgettable community vibe.",author:"Abbos Jabborov",tags:["GameDev","Gamefest","Hackathon","Retrospective"],reading_time:"4 min read",published_at:"February 18, 2026",cover_url:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",content:`
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
`}],Ev={nodes:[{id:"core-claive",label:"Abbos Jabborov",subtitle:"Personal Knowledge Graph & Nexus",category:"CORE",node_type:"STORY",slug:"about-claive",color:"#a855f7",size:14,isHub:!0},{id:"hub-projects",label:"Projects",subtitle:"Software systems, tools & libraries",category:"PROJECT",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#38bdf8",size:10,isHub:!0},{id:"node-scrolls",label:"Scrolls",subtitle:"Interactive Markdown reader & canvas workspace",category:"PROJECT",node_type:"EXTERNAL",url:"https://scrolls.claive.uz",color:"#38bdf8",size:6},{id:"node-game-engine",label:"Custom C++ Engine",subtitle:"Vulkan/OpenGL 3D rendering pipeline",category:"PROJECT",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#38bdf8",size:6},{id:"node-notes-wall",label:"Whisper Notes",subtitle:"Interactive message board & guest reflections",category:"PROJECT",node_type:"EXTERNAL",url:"https://claive.uz/notes",color:"#38bdf8",size:5},{id:"node-ai-research",label:"AI & Neural Graphs",subtitle:"Agentic coding systems & vector embeddings",category:"PROJECT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#38bdf8",size:5},{id:"hub-writing",label:"Writing & Notes",subtitle:"Reflections, post-mortems & digital garden",category:"STORY",node_type:"STORY",slug:"gamefest-2026",color:"#ec4899",size:10,isHub:!0},{id:"node-gamefest",label:"Gamefest 2026",subtitle:"48-hour game jam experience, shaders & post-mortem",category:"STORY",node_type:"STORY",slug:"gamefest-2026",color:"#ec4899",size:7},{id:"node-architecture",label:"Neural UI Design",subtitle:"Spatial interfaces and 3D constellation architectures",category:"STORY",node_type:"STORY",slug:"architecture-notes-2026",color:"#ec4899",size:6},{id:"node-obsidian-vault",label:"Digital Garden",subtitle:"Interlinked second-brain notes and evergreen thoughts",category:"STORY",node_type:"STORY",slug:"architecture-notes-2026",color:"#ec4899",size:5},{id:"node-bio",label:"About Claive",subtitle:"Biography, technical stack & background story",category:"STORY",node_type:"STORY",slug:"about-claive",color:"#ec4899",size:6},{id:"hub-games",label:"Game Vault",subtitle:"Indie releases, jam prototypes & game physics",category:"GAME",node_type:"EXTERNAL",url:"https://store.steampowered.com",color:"#fbbf24",size:10,isHub:!0},{id:"node-games-vault",label:"Indie Game Vault",subtitle:"Steam releases, jam prototypes & playable builds",category:"GAME",node_type:"EXTERNAL",url:"https://store.steampowered.com",color:"#fbbf24",size:7},{id:"node-retro-arcade",label:"Retro Arcade",subtitle:"Browser-based pixel mini-games and physics toys",category:"GAME",node_type:"EXTERNAL",url:"https://claive.uz/games",color:"#fbbf24",size:5},{id:"node-steam-library",label:"Steam Library",subtitle:"Curated game collection and play history",category:"GAME",node_type:"EXTERNAL",url:"https://steamcommunity.com",color:"#fbbf24",size:5},{id:"node-game-jam-2025",label:"Game Jam Archive",subtitle:"Past jam submissions and experimental prototypes",category:"GAME",node_type:"STORY",slug:"gamefest-2026",color:"#fbbf24",size:5},{id:"hub-experiments",label:"Creative Lab",subtitle:"Real-time shaders, audio synthesizers & canvas toys",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:10,isHub:!0},{id:"node-shader-lab",label:"Shader Lab",subtitle:"Procedural HLSL / GLSL visual experiments",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:6},{id:"node-creative-code",label:"Generative Canvas",subtitle:"Algorithmic geometry and mathematical art",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:5},{id:"node-soundscape",label:"Soundtrack Synapse",subtitle:"Curated ambient game soundtracks & coding flow",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://open.spotify.com",color:"#34d399",size:5},{id:"node-spatial-audio",label:"Spatial Web Audio",subtitle:"Positional 3D binaural synthesizer engine",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:5},{id:"hub-socials",label:"Social Nexus",subtitle:"Direct channels, social profiles & contact",category:"SOCIAL",node_type:"EXTERNAL",url:"https://www.linkedin.com/in/abbos-jabborov",color:"#60a5fa",size:10,isHub:!0},{id:"node-linkedin",label:"LinkedIn",subtitle:"Professional profile, connections & career milestones",category:"SOCIAL",node_type:"EXTERNAL",url:"https://www.linkedin.com/in/abbos-jabborov",color:"#60a5fa",size:6},{id:"node-github",label:"GitHub",subtitle:"Open-source repositories, engines & experiments",category:"SOCIAL",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#60a5fa",size:6},{id:"node-telegram",label:"Telegram",subtitle:"Direct messaging & project updates channel",category:"SOCIAL",node_type:"EXTERNAL",url:"https://t.me/claive",color:"#60a5fa",size:5},{id:"node-twitter",label:"Twitter / X",subtitle:"Tech thoughts, game clips & release announcements",category:"SOCIAL",node_type:"EXTERNAL",url:"https://x.com",color:"#60a5fa",size:5},{id:"node-resume",label:"Resume & CV",subtitle:"Experience timeline and engineering achievements",category:"SOCIAL",node_type:"STORY",slug:"about-claive",color:"#60a5fa",size:5},{id:"node-contact",label:"Get in Touch",subtitle:"Collaborations, freelance & contract opportunities",category:"SOCIAL",node_type:"EXTERNAL",url:"mailto:contact@claive.uz",color:"#60a5fa",size:5}],links:[{source:"core-claive",target:"hub-projects"},{source:"core-claive",target:"hub-writing"},{source:"core-claive",target:"hub-games"},{source:"core-claive",target:"hub-experiments"},{source:"core-claive",target:"hub-socials"},{source:"hub-projects",target:"node-scrolls"},{source:"hub-projects",target:"node-game-engine"},{source:"hub-projects",target:"node-notes-wall"},{source:"hub-projects",target:"node-ai-research"},{source:"hub-writing",target:"node-gamefest"},{source:"hub-writing",target:"node-architecture"},{source:"hub-writing",target:"node-obsidian-vault"},{source:"hub-writing",target:"node-bio"},{source:"hub-games",target:"node-games-vault"},{source:"hub-games",target:"node-retro-arcade"},{source:"hub-games",target:"node-steam-library"},{source:"hub-games",target:"node-game-jam-2025"},{source:"hub-experiments",target:"node-shader-lab"},{source:"hub-experiments",target:"node-creative-code"},{source:"hub-experiments",target:"node-soundscape"},{source:"hub-experiments",target:"node-spatial-audio"},{source:"hub-socials",target:"node-linkedin"},{source:"hub-socials",target:"node-github"},{source:"hub-socials",target:"node-telegram"},{source:"hub-socials",target:"node-twitter"},{source:"hub-socials",target:"node-resume"},{source:"hub-socials",target:"node-contact"},{source:"node-gamefest",target:"hub-games"},{source:"node-gamefest",target:"node-shader-lab"},{source:"node-scrolls",target:"node-obsidian-vault"},{source:"node-scrolls",target:"node-notes-wall"},{source:"node-game-engine",target:"node-shader-lab"},{source:"node-game-engine",target:"node-games-vault"},{source:"node-architecture",target:"node-ai-research"},{source:"node-architecture",target:"node-creative-code"},{source:"node-soundscape",target:"node-spatial-audio"},{source:"node-github",target:"hub-projects"},{source:"node-github",target:"node-game-engine"},{source:"node-bio",target:"node-resume"},{source:"node-bio",target:"core-claive"},{source:"node-retro-arcade",target:"node-creative-code"}]};function h2({onHoverNode:s=()=>{}}){const e=Le.useRef(null),i=Le.useRef(null),r=np(),l=Le.useRef(null),c=Le.useRef(null),d=Le.useRef(null),p=Le.useRef(null),m=Le.useRef(null),h=Le.useRef(null),x=Le.useRef(null),[_,g]=Le.useState(!0),b=Le.useRef({lon:20,lat:18,targetLon:20,targetLat:18,distance:380,targetDistance:380,panX:0,panY:0,targetPanX:0,targetPanY:0,isDraggingCamera:!1,isPanning:!1,isDraggingNode:!1,startX:0,startY:0,startLon:0,startLat:0,startPanX:0,startPanY:0}),E=Le.useCallback((S=440,v="sine",O=.08)=>{if(_)try{x.current||(x.current=new(window.AudioContext||window.webkitAudioContext));const I=x.current;I.state==="suspended"&&I.resume();const w=I.createOscillator(),N=I.createGain();w.type=v,w.frequency.setValueAtTime(S,I.currentTime),N.gain.setValueAtTime(.04,I.currentTime),N.gain.exponentialRampToValueAtTime(1e-4,I.currentTime+O),w.connect(N),N.connect(I.destination),w.start(),w.stop(I.currentTime+O)}catch{}},[_]);Le.useEffect(()=>{const S=e.current,v=i.current;if(!S||!v)return;const O=S.clientWidth,I=S.clientHeight,w=new Wb;l.current=w;const N=new yi(52,O/I,1,4e3);N.position.set(0,60,380),c.current=N;const L=new f2({alpha:!0,antialias:!0,powerPreference:"high-performance"});L.setSize(O,I),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.current=L,S.innerHTML="",S.appendChild(L.domElement);const z=new zs;w.add(z),(()=>{const pe=document.createElement("canvas");pe.width=128,pe.height=128;const F=pe.getContext("2d"),Ce=F.createRadialGradient(64,64,0,64,64,60);Ce.addColorStop(0,"rgba(255, 255, 255, 1)"),Ce.addColorStop(.3,"rgba(255, 255, 255, 0.95)"),Ce.addColorStop(.65,"rgba(255, 255, 255, 0.35)"),Ce.addColorStop(1,"rgba(255, 255, 255, 0)"),F.fillStyle=Ce,F.fillRect(0,0,128,128);const Ye=new iE(pe);return Ye.needsUpdate=!0,Ye})();const P=Ev.nodes,Z=Ev.links,k=new Map,J=new Map;P.forEach(pe=>{J.set(pe.id,new Set)}),Z.forEach(pe=>{J.has(pe.source)&&J.has(pe.target)&&(J.get(pe.source).add(pe.target),J.get(pe.target).add(pe.source))});const de={"core-claive":new j(0,0,0),"hub-projects":new j(-190,85,55),"hub-writing":new j(180,110,-40),"hub-games":new j(165,-100,95),"hub-experiments":new j(-175,-95,-80),"hub-socials":new j(0,175,120)},me=[],$=[],B=new nl(22,8,8),G=new Bs({visible:!1});v.innerHTML="",P.forEach((pe,F)=>{let Ce;if(de[pe.id])Ce=de[pe.id].clone();else{let Ee=new j(0,0,0);for(const[je,tt]of Object.entries(de))if(J.get(pe.id)?.has(je)){Ee=tt;break}const Ne=F/P.length*Math.PI*2,De=70+F%5*18,Oe=Math.sin(F*1.8)*55;Ce=new j(Ee.x+Math.cos(Ne)*De+(Math.random()-.5)*25,Ee.y+Oe+(Math.random()-.5)*25,Ee.z+Math.sin(Ne)*De+(Math.random()-.5)*25)}const Ye=new Ut(pe.color||"#38bdf8"),D=new zs;D.position.copy(Ce);const M=pe.isHub?pe.id==="core-claive"?11:8.5:pe.size?pe.size*.9:5.5,Y=new nl(M,16,16),ee=new Bs({color:Ye,transparent:!0,opacity:.95}),V=new ci(Y,ee);D.add(V);let ye=null;if(pe.isHub){const Ee=new gp(M*1.35,M*1.85,32),Ne=new Bs({color:Ye,side:ki,transparent:!0,opacity:.5,blending:$o});ye=new ci(Ee,Ne),D.add(ye)}const be=new ci(B,G);be.userData={nodeData:pe,nodeGroup:D,coreMesh:V,haloMesh:ye,originalColor:Ye},D.add(be),$.push(be),z.add(D);const ce=document.createElement("div");ce.className="obsidian-node-label",ce.textContent=pe.label,ce.dataset.nodeId=pe.id,ce.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(-50%, -50%, 0);
        pointer-events: none;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        font-size: ${pe.isHub?pe.id==="core-claive"?"14px":"12px":"11px"};
        font-weight: ${pe.isHub?"700":"500"};
        color: #f1f5f9;
        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.9), 0 0 10px ${pe.color||"#38bdf8"}44;
        opacity: ${pe.isHub?"0.85":"0.4"};
        transition: opacity 0.2s ease, transform 0.15s ease, color 0.2s ease;
        white-space: nowrap;
        user-select: none;
        letter-spacing: 0.02em;
        z-index: 10;
      `,v.appendChild(ce);const ue={id:pe.id,data:pe,pos:Ce.clone(),velocity:new j((Math.random()-.5)*.05,(Math.random()-.5)*.05,(Math.random()-.5)*.05),group:D,coreMesh:V,haloMesh:ye,hitMesh:be,labelEl:ce,color:Ye,isHub:!!pe.isHub};k.set(pe.id,ue),me.push(ue)}),interactiveNodesRef.current=$;const te=[];Z.forEach(pe=>{const F=k.get(pe.source),Ce=k.get(pe.target);F&&Ce&&te.push({source:F,target:Ce,sourceId:pe.source,targetId:pe.target,restLength:F.isHub||Ce.isHub?100:75})});const _e=new Float32Array(te.length*6),Ae=new Float32Array(te.length*6);for(let pe=0;pe<te.length;pe++){const F=pe*6;for(let Ce=0;Ce<2;Ce++)Ae[F+Ce*3]=.22,Ae[F+Ce*3+1]=.28,Ae[F+Ce*3+2]=.38}const U=new ui;U.setAttribute("position",new bi(_e,3).setUsage(T_)),U.setAttribute("color",new bi(Ae,3).setUsage(T_));const K=new lx({vertexColors:!0,transparent:!0,opacity:.45,blending:$o,linewidth:1.2}),Re=new nE(U,K);z.add(Re);const we=28,Be=[],se=new nl(2.4,8,8);for(let pe=0;pe<we;pe++){const F=te[Math.floor(Math.random()*te.length)];if(!F)continue;const Ce=F.source.color.clone().lerp(F.target.color,.5),Ye=new Bs({color:Ce,transparent:!0,opacity:.85,blending:$o}),D=new ci(se,Ye);D.position.copy(F.source.pos),z.add(D),Be.push({mesh:D,edge:F,progress:Math.random(),speed:.005+Math.random()*.007})}const xe=new pE,Se=new Rt,Ve=new ar,at=new j,$e=pe=>pe.touches&&pe.touches.length>0?{x:pe.touches[0].clientX,y:pe.touches[0].clientY}:{x:pe.clientX,y:pe.clientY},Wt=(pe,F)=>{const Ce=S.getBoundingClientRect();Se.x=(pe-Ce.left)/Ce.width*2-1,Se.y=-((F-Ce.top)/Ce.height)*2+1,xe.setFromCamera(Se,N);const Ye=xe.intersectObjects(interactiveNodesRef.current,!1);if(Ye.length>0){const D=Ye[0].object,M=D.userData.nodeData,Y=D.userData.nodeGroup;p.current!==D&&(p.current=D,m.current=M.id,S.style.cursor="pointer",E(M.isHub?620:520,"sine",.06));const ee=new j;Y.getWorldPosition(ee);const V=ee.clone().project(N),ye=(V.x+1)/2*Ce.width+Ce.left,be=(-V.y+1)/2*Ce.height+Ce.top;s({node:M,screenX:ye,screenY:be,isVisible:V.z<1})}else p.current&&(p.current=null,m.current=null,S.style.cursor="grab",s(null))},lt=pe=>{const F=$e(pe),Ce=S.getBoundingClientRect();Se.x=(F.x-Ce.left)/Ce.width*2-1,Se.y=-((F.y-Ce.top)/Ce.height)*2+1,xe.setFromCamera(Se,N);const Ye=xe.intersectObjects(interactiveNodesRef.current,!1),D=b.current;if(D.startX=F.x,D.startY=F.y,Ye.length>0&&pe.button===0&&!pe.shiftKey){const M=Ye[0].object,Y=k.get(M.userData.nodeData.id);h.current=Y,D.isDraggingNode=!0,D.isDraggingCamera=!1,Ve.setFromNormalAndCoplanarPoint(N.getWorldDirection(new j).negate(),Y.pos),S.style.cursor="grabbing",E(480,"triangle",.08)}else D.isDraggingCamera=!0,D.isDraggingNode=!1,D.isPanning=pe.button===2||pe.shiftKey,D.startLon=D.targetLon,D.startLat=D.targetLat,D.startPanX=D.targetPanX,D.startPanY=D.targetPanY,S.style.cursor=D.isPanning?"move":"grabbing"},pt=pe=>{const F=$e(pe),Ce=b.current,Ye=S.getBoundingClientRect();if(Se.x=(F.x-Ye.left)/Ye.width*2-1,Se.y=-((F.y-Ye.top)/Ye.height)*2+1,Ce.isDraggingNode&&h.current)xe.setFromCamera(Se,N),xe.ray.intersectPlane(Ve,at)&&(h.current.pos.copy(at),h.current.velocity.set(0,0,0));else if(Ce.isDraggingCamera){const D=F.x-Ce.startX,M=F.y-Ce.startY;Ce.isPanning?(Ce.targetPanX=Ce.startPanX-D*.45,Ce.targetPanY=Ce.startPanY+M*.45):(Ce.targetLon=Ce.startLon+D*.4,Ce.targetLat=Math.max(-80,Math.min(80,Ce.startLat-M*.4)))}else Wt(F.x,F.y)},mt=pe=>{const F=$e(pe),Ce=b.current,Ye=Ce.isDraggingNode,D=Math.hypot(F.x-Ce.startX,F.y-Ce.startY);if(Ce.isDraggingCamera=!1,Ce.isDraggingNode=!1,Ce.isPanning=!1,Ye&&D<5&&h.current){const M=h.current.data;E(750,"sine",.12),M.node_type==="STORY"&&M.slug?r(`/story/${M.slug}`):M.url&&window.open(M.url,"_blank","noopener,noreferrer")}h.current=null,S.style.cursor=p.current?"pointer":"grab"},gt=pe=>{pe.preventDefault();const F=b.current;F.targetDistance=Math.max(160,Math.min(750,F.targetDistance+pe.deltaY*.55))},Zt=pe=>pe.preventDefault();S.addEventListener("mousedown",lt),window.addEventListener("mousemove",pt),window.addEventListener("mouseup",mt),S.addEventListener("wheel",gt,{passive:!1}),S.addEventListener("contextmenu",Zt),S.addEventListener("touchstart",lt,{passive:!0}),window.addEventListener("touchmove",pt,{passive:!0}),window.addEventListener("touchend",mt);const Kt=()=>{if(!S||!L||!N)return;const pe=S.clientWidth,F=S.clientHeight;N.aspect=pe/F,N.updateProjectionMatrix(),L.setSize(pe,F)};window.addEventListener("resize",Kt);let Qt;const an=new mE,Ot=()=>{Qt=requestAnimationFrame(Ot),an.getElapsedTime();const pe=b.current;!pe.isDraggingCamera&&!pe.isDraggingNode&&(pe.targetLon+=.035),pe.lon+=(pe.targetLon-pe.lon)*.08,pe.lat+=(pe.targetLat-pe.lat)*.08,pe.distance+=(pe.targetDistance-pe.distance)*.1,pe.panX+=(pe.targetPanX-pe.panX)*.1,pe.panY+=(pe.targetPanY-pe.panY)*.1;const F=wd.degToRad(90-pe.lat),Ce=wd.degToRad(pe.lon);N.position.x=pe.distance*Math.sin(F)*Math.sin(Ce)+pe.panX,N.position.y=pe.distance*Math.cos(F)+pe.panY,N.position.z=pe.distance*Math.sin(F)*Math.cos(Ce),N.lookAt(pe.panX,pe.panY,0),te.forEach(V=>{const ye=V.target.pos.clone().sub(V.source.pos),ce=(ye.length()||1)-V.restLength,ue=ye.normalize().multiplyScalar(ce*.0032);V.source!==h.current&&V.source.velocity.add(ue),V.target!==h.current&&V.target.velocity.sub(ue)});for(let V=0;V<me.length;V++)for(let ye=V+1;ye<me.length;ye++){const be=me[V],ce=me[ye],ue=ce.pos.clone().sub(be.pos),Ee=ue.length()||1;if(Ee<220){const Ne=(220-Ee)*.0019,De=ue.normalize().multiplyScalar(Ne);be!==h.current&&be.velocity.sub(De),ce!==h.current&&ce.velocity.add(De)}}me.forEach(V=>{if(V!==h.current){const ye=V.pos.clone().multiplyScalar(-6e-4);V.velocity.add(ye),V.velocity.multiplyScalar(.92),V.pos.add(V.velocity)}V.group.position.copy(V.pos),V.haloMesh&&(V.haloMesh.lookAt(N.position),V.haloMesh.rotation.z+=.01)}),Be.forEach(V=>{V.progress+=V.speed,V.progress>1&&(V.progress=0),V.mesh.position.lerpVectors(V.edge.source.pos,V.edge.target.pos,V.progress);const ye=.8+Math.sin(V.progress*Math.PI)*.6;V.mesh.scale.set(ye,ye,ye)});const Ye=m.current,D=Ye?J.get(Ye):null,M=S.getBoundingClientRect();me.forEach(V=>{const ye=V.id===Ye,be=D?.has(V.id),ce=!Ye||ye||be,ue=ye?1.5:be?1.2:Ye?.7:1;V.group.scale.lerp(new j(ue,ue,ue),.2);const Ee=ye?1:be?.95:Ye?.15:.88;if(V.coreMesh.material.opacity=wd.lerp(V.coreMesh.material.opacity,Ee,.15),V.haloMesh&&(V.haloMesh.material.opacity=ye?.85:ce?.5:.08),V.labelEl){const Ne=new j;V.group.getWorldPosition(Ne);const De=Ne.clone().project(N);if(De.z<1){const Oe=(De.x+1)/2*M.width,je=(-De.y+1)/2*M.height+(V.isHub?18:14);V.labelEl.style.transform=`translate3d(${Oe}px, ${je}px, 0) translate3d(-50%, 0, 0)`,V.labelEl.style.display="block",ye?(V.labelEl.style.opacity="1",V.labelEl.style.color="#ffffff",V.labelEl.style.fontWeight="700"):be?(V.labelEl.style.opacity="0.95",V.labelEl.style.color="#e2e8f0",V.labelEl.style.fontWeight="600"):Ye?(V.labelEl.style.opacity="0.05",V.labelEl.style.color="#64748b"):(V.labelEl.style.opacity=V.isHub?"0.85":"0.38",V.labelEl.style.color=V.isHub?"#ffffff":"#cbd5e1")}else V.labelEl.style.display="none"}});const Y=U.attributes.position.array,ee=U.attributes.color.array;te.forEach((V,ye)=>{const be=ye*6;Y[be]=V.source.pos.x,Y[be+1]=V.source.pos.y,Y[be+2]=V.source.pos.z,Y[be+3]=V.target.pos.x,Y[be+4]=V.target.pos.y,Y[be+5]=V.target.pos.z;const ce=Ye&&(V.sourceId===Ye||V.targetId===Ye),ue=!!Ye;for(let Ee=0;Ee<2;Ee++){const Ne=Ee===0?V.source.color:V.target.color;ce?(ee[be+Ee*3]=Ne.r*1.3,ee[be+Ee*3+1]=Ne.g*1.3,ee[be+Ee*3+2]=Ne.b*1.3):ue?(ee[be+Ee*3]=.05,ee[be+Ee*3+1]=.06,ee[be+Ee*3+2]=.09):(ee[be+Ee*3]=.24,ee[be+Ee*3+1]=.3,ee[be+Ee*3+2]=.4)}}),U.attributes.position.needsUpdate=!0,U.attributes.color.needsUpdate=!0,L.render(w,N)};return Ot(),()=>{cancelAnimationFrame(Qt),window.removeEventListener("resize",Kt),S.removeEventListener("mousedown",lt),window.removeEventListener("mousemove",pt),window.removeEventListener("mouseup",mt),S.removeEventListener("wheel",gt),S.removeEventListener("contextmenu",Zt),S.removeEventListener("touchstart",lt),window.removeEventListener("touchmove",pt),window.removeEventListener("touchend",mt),U.dispose(),K.dispose(),L.domElement&&L.domElement.parentNode&&L.domElement.parentNode.removeChild(L.domElement),L.dispose()}},[r,s,E]);const C=()=>{const S=b.current;S.targetLon=20,S.targetLat=18,S.targetDistance=380,S.targetPanX=0,S.targetPanY=0,E(520,"sine",.08)};return Ie.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[Ie.jsx("div",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",cursor:"grab",userSelect:"none",zIndex:1}}),Ie.jsx("div",{ref:i,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"hidden",zIndex:5}}),Ie.jsxs("div",{style:{position:"fixed",bottom:"16px",left:"20px",display:"flex",alignItems:"center",gap:"12px",zIndex:20,background:"rgba(10, 16, 28, 0.75)",backdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.08)",padding:"6px 14px",borderRadius:"999px",fontSize:"12px",color:"#94a3b8",userSelect:"none"},children:[Ie.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[Ie.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#a855f7"}}),Ie.jsx("span",{children:"24 Notes • 5 Clusters"})]}),Ie.jsx("span",{style:{color:"rgba(255, 255, 255, 0.15)"},children:"|"}),Ie.jsx("button",{onClick:C,title:"Reset 3D camera to center",style:{background:"transparent",border:"none",color:"#38bdf8",cursor:"pointer",fontSize:"12px",padding:0},children:"Reset View"}),Ie.jsx("span",{style:{color:"rgba(255, 255, 255, 0.15)"},children:"|"}),Ie.jsx("button",{onClick:()=>g(S=>!S),title:_?"Mute audio chimes":"Enable audio chimes",style:{background:"transparent",border:"none",color:_?"#34d399":"#64748b",cursor:"pointer",fontSize:"12px",padding:0},children:_?"Audio On":"Audio Off"})]})]})}function p2({hoverInfo:s}){if(!s||!s.node||!s.isVisible)return null;const{node:e,screenX:i,screenY:r}=s;return Ie.jsxs("div",{style:{position:"fixed",left:`${i+16}px`,top:`${r-14}px`,pointerEvents:"none",zIndex:50,transform:"translate3d(0, 0, 0)",display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(5, 8, 16, 0.8)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"6px",padding:"5px 12px",color:"#ffffff",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.6)",whiteSpace:"nowrap",fontSize:"13px",fontWeight:"500",letterSpacing:"0.02em"},children:[Ie.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:e.color||"#00f0ff",boxShadow:`0 0 8px ${e.color||"#00f0ff"}`}}),Ie.jsx("span",{style:{color:"#f8fafc"},children:e.label}),Ie.jsx("span",{style:{color:"#64748b",fontSize:"11px"},children:"➔"})]})}function m2(){const[s,e]=Le.useState(null);return Ie.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",backgroundColor:"#060913"},children:[Ie.jsx(h2,{onHoverNode:e}),Ie.jsx(p2,{hoverInfo:s})]})}const Mx=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();const g2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const _2=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase());const Tv=s=>{const e=_2(s);return e.charAt(0).toUpperCase()+e.slice(1)};var rh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const v2=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},x2=Le.createContext({}),S2=()=>Le.useContext(x2),y2=Le.forwardRef(({color:s,size:e,strokeWidth:i,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...p},m)=>{const{size:h=24,strokeWidth:x=2,absoluteStrokeWidth:_=!1,color:g="currentColor",className:b=""}=S2()??{},E=r??_?Number(i??x)*24/Number(e??h):i??x;return Le.createElement("svg",{ref:m,...rh,width:e??h??rh.width,height:e??h??rh.height,stroke:s??g,strokeWidth:E,className:Mx("lucide",b,l),...!c&&!v2(p)&&{"aria-hidden":"true"},...p},[...d.map(([C,S])=>Le.createElement(C,S)),...Array.isArray(c)?c:[c]])});const ur=(s,e)=>{const i=Le.forwardRef(({className:r,...l},c)=>Le.createElement(y2,{ref:c,iconNode:e,className:Mx(`lucide-${g2(Tv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Tv(s),i};const M2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],b2=ur("arrow-left",M2);const E2=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],T2=ur("calendar",E2);const A2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],R2=ur("check",A2);const C2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],w2=ur("clock",C2);const D2=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],U2=ur("pen-line",D2);const L2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],N2=ur("share-2",L2);const O2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],P2=ur("sparkles",O2);const I2=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],z2=ur("tag",I2);function Av(){const{slug:s}=hM(),e=np(),[i,r]=Le.useState(null),[l,c]=Le.useState(!0),[d,p]=Le.useState(0),[m,h]=Le.useState(!1);Le.useEffect(()=>{const g=d2.find(b=>b.slug===s||b.id===s);g?(r(g),c(!1)):fetch(`/api/stories/${s}/`).then(b=>{if(b.ok)return b.json();throw new Error("Not found")}).then(b=>{r(b),c(!1)}).catch(()=>{r(null),c(!1)}),window.scrollTo(0,0)},[s]),Le.useEffect(()=>{const g=()=>{const b=document.documentElement.scrollHeight-window.innerHeight;b>0&&p(window.scrollY/b*100)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const x=()=>{navigator.clipboard.writeText(window.location.href),h(!0),setTimeout(()=>h(!1),2e3)},_=g=>{if(!g)return null;const b=g.split(`
`),E=[];let C=!1,S=[];return b.forEach((v,O)=>{if(v.trim().startsWith("```")){C?(E.push(Ie.jsx("pre",{style:{background:"#0d131f",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",padding:"16px 20px",overflowX:"auto",fontSize:"13px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",color:"#7dd3fc",margin:"24px 0",lineHeight:"1.6"},children:Ie.jsx("code",{children:S.join(`
`)})},`code-${O}`)),S=[],C=!1):C=!0;return}if(C){S.push(v);return}if(v.startsWith("# "))E.push(Ie.jsx("h1",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:"800",color:"#ffffff",letterSpacing:"-0.02em",margin:"32px 0 16px 0",lineHeight:"1.2"},children:v.replace("# ","")},O));else if(v.startsWith("## "))E.push(Ie.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",color:"#f8fafc",letterSpacing:"-0.01em",margin:"36px 0 14px 0",lineHeight:"1.3"},children:v.replace("## ","")},O));else if(v.startsWith("### "))E.push(Ie.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#e2e8f0",margin:"24px 0 10px 0"},children:v.replace("### ","")},O));else if(v.startsWith("> "))E.push(Ie.jsx("blockquote",{style:{borderLeft:"3px solid #ec4899",background:"rgba(236, 72, 153, 0.08)",padding:"14px 20px",borderRadius:"0 8px 8px 0",margin:"24px 0",fontStyle:"italic",color:"#f1f5f9",fontSize:"16px",lineHeight:"1.6"},children:v.replace("> ","").replace(/"/g,"")},O));else if(v.match(/^!\[(.*?)\]\((.*?)\)/)){const I=v.match(/^!\[(.*?)\]\((.*?)\)/),w=I[1],N=I[2];E.push(Ie.jsxs("figure",{style:{margin:"32px 0"},children:[Ie.jsx("img",{src:N,alt:w,style:{width:"100%",maxHeight:"520px",objectFit:"cover",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 12px 35px rgba(0, 0, 0, 0.4)"}}),w&&Ie.jsx("figcaption",{style:{textAlign:"center",fontSize:"12px",color:"#94a3b8",marginTop:"8px",fontStyle:"italic"},children:w})]},O))}else v.trim()==="---"?E.push(Ie.jsx("hr",{style:{border:"none",borderTop:"1px solid rgba(255, 255, 255, 0.1)",margin:"36px 0"}},O)):v.trim().startsWith("- ")||v.trim().startsWith("1. ")||v.trim().startsWith("2. ")||v.trim().startsWith("3. ")?E.push(Ie.jsx("li",{style:{fontSize:"16px",lineHeight:"1.8",color:"#cbd5e1",marginLeft:"24px",marginBottom:"6px"},children:v.replace(/^-\s|^\d+\.\s/,"")},O)):v.trim().length>0&&E.push(Ie.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",color:"#cbd5e1",margin:"0 0 18px 0",fontWeight:"400"},children:v},O))}),E};return l?Ie.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#080c16",color:"#00f0ff",fontSize:"16px",gap:"12px"},children:[Ie.jsx(P2,{className:"animate-spin"}),Ie.jsx("span",{children:"Loading Story from Nexus..."})]}):i?Ie.jsxs("div",{style:{minHeight:"100vh",background:"#080c16",color:"#e2e8f0",position:"relative"},children:[Ie.jsx("div",{style:{position:"fixed",top:0,left:0,height:"3px",width:`${d}%`,background:"linear-gradient(90deg, #ec4899, #00f0ff)",zIndex:100,transition:"width 0.1s ease-out"}}),Ie.jsxs("header",{style:{position:"sticky",top:0,zIndex:40,background:"rgba(8, 12, 22, 0.85)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Ie.jsxs("button",{onClick:()=>e("/"),style:{display:"flex",alignItems:"center",gap:"8px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#cbd5e1",padding:"6px 14px",borderRadius:"999px",fontSize:"13px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.borderColor="#00f0ff",g.currentTarget.style.color="#00f0ff"},onMouseLeave:g=>{g.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",g.currentTarget.style.color="#cbd5e1"},children:[Ie.jsx(b2,{size:15}),Ie.jsx("span",{children:"Neural Sphere"})]}),Ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[Ie.jsxs("button",{onClick:x,title:"Share story link",style:{display:"flex",alignItems:"center",gap:"6px",background:"transparent",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#94a3b8",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",cursor:"pointer"},children:[m?Ie.jsx(R2,{size:13,color:"#22c55e"}):Ie.jsx(N2,{size:13}),Ie.jsx("span",{children:m?"Link Copied":"Share"})]}),Ie.jsxs("a",{href:"/admin/games/story/",target:"_blank",rel:"noopener noreferrer",title:"Open Story in Django Admin Editor",style:{display:"flex",alignItems:"center",gap:"5px",background:"rgba(236, 72, 153, 0.15)",border:"1px solid rgba(236, 72, 153, 0.35)",color:"#f472b6",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",fontWeight:"600",textDecoration:"none"},children:[Ie.jsx(U2,{size:13}),Ie.jsx("span",{children:"Admin Edit"})]})]})]}),Ie.jsxs("main",{style:{maxWidth:"760px",margin:"0 auto",padding:"40px 20px 100px 20px"},children:[i.cover_url&&Ie.jsx("div",{style:{marginBottom:"36px",borderRadius:"16px",overflow:"hidden",border:"1px solid rgba(255, 255, 255, 0.1)",maxHeight:"420px"},children:Ie.jsx("img",{src:i.cover_url,alt:i.title,style:{width:"100%",height:"100%",maxHeight:"420px",objectFit:"cover",display:"block"}})}),Ie.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",fontSize:"12px",color:"#94a3b8",marginBottom:"16px"},children:[i.published_at&&Ie.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[Ie.jsx(T2,{size:13}),i.published_at]}),i.reading_time&&Ie.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[Ie.jsx(w2,{size:13}),i.reading_time]}),i.author&&Ie.jsxs("span",{style:{background:"rgba(0, 240, 255, 0.1)",color:"#00f0ff",padding:"2px 8px",borderRadius:"4px",fontWeight:"500"},children:["By ",i.author]})]}),Ie.jsx("h1",{style:{fontSize:"clamp(32px, 5vw, 48px)",fontWeight:"800",color:"#ffffff",letterSpacing:"-0.03em",lineHeight:"1.15",margin:"0 0 16px 0"},children:i.title}),i.subtitle&&Ie.jsx("p",{style:{fontSize:"18px",lineHeight:"1.5",color:"#94a3b8",marginBottom:"32px",fontWeight:"400"},children:i.subtitle}),Ie.jsx("hr",{style:{border:"none",borderTop:"1px solid rgba(255, 255, 255, 0.1)",marginBottom:"36px"}}),Ie.jsx("article",{style:{fontSize:"16px",color:"#cbd5e1"},children:_(i.content)}),i.tags&&Ie.jsx("div",{style:{marginTop:"48px",paddingTop:"24px",borderTop:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",flexWrap:"wrap",gap:"8px"},children:(Array.isArray(i.tags)?i.tags:String(i.tags).split(",")).map((g,b)=>Ie.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"11px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",padding:"4px 10px",borderRadius:"999px",color:"#94a3b8"},children:[Ie.jsx(z2,{size:11}),String(g).trim()]},b))}),Ie.jsxs("div",{style:{marginTop:"60px",textAlign:"center",padding:"32px",background:"rgba(13, 19, 33, 0.6)",border:"1px solid rgba(0, 240, 255, 0.2)",borderRadius:"16px"},children:[Ie.jsx("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#ffffff",marginBottom:"8px"},children:"Ready to explore other constellation nodes?"}),Ie.jsx("p",{style:{fontSize:"13px",color:"#64748b",marginBottom:"20px"},children:"Return to the 3D neural nexus to explore games, tools, and social links."}),Ie.jsx("button",{onClick:()=>e("/"),style:{background:"linear-gradient(90deg, #00f0ff, #38bdf8)",color:"#080c16",fontWeight:"700",fontSize:"14px",padding:"10px 24px",borderRadius:"999px",border:"none",cursor:"pointer",boxShadow:"0 0 20px rgba(0, 240, 255, 0.4)"},children:"Return to 3D Neural Nexus ➔"})]})]})]}):Ie.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#080c16",color:"#e2e8f0",textAlign:"center",padding:"24px"},children:[Ie.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"8px"},children:"Story Node Not Found"}),Ie.jsx("p",{style:{color:"#64748b",marginBottom:"24px"},children:"The requested memory node is either unindexed or has been relocated."}),Ie.jsx("button",{onClick:()=>e("/"),style:{background:"#00f0ff",color:"#080c16",padding:"10px 20px",borderRadius:"999px",fontWeight:"600",border:"none",cursor:"pointer"},children:"Return to Neural Sphere"})]})}function B2(){return Ie.jsx(NM,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:Ie.jsxs(DM,{children:[Ie.jsx(Qo,{path:"/",element:Ie.jsx(m2,{})}),Ie.jsx(Qo,{path:"/story/:slug",element:Ie.jsx(Av,{})}),Ie.jsx(Qo,{path:"/post/:slug",element:Ie.jsx(Av,{})}),Ie.jsx(Qo,{path:"*",element:Ie.jsx(CM,{to:"/",replace:!0})})]})})}zy.createRoot(document.getElementById("root")).render(Ie.jsx(Le.StrictMode,{children:Ie.jsx(B2,{})}));
