function IS(s,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in s)){const c=Object.getOwnPropertyDescriptor(r,l);c&&Object.defineProperty(s,l,c.get?c:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function zS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var bd={exports:{}},Yo={};var iv;function FS(){if(iv)return Yo;iv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=e,Yo.jsx=i,Yo.jsxs=i,Yo}var av;function BS(){return av||(av=1,bd.exports=FS()),bd.exports}var L=BS(),Ed={exports:{}},ht={};var rv;function HS(){if(rv)return ht;rv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function x(O,Q,Ee){this.props=O,this.context=Q,this.refs=S,this.updater=Ee||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=x.prototype;function H(O,Q,Ee){this.props=O,this.context=Q,this.refs=S,this.updater=Ee||E}var w=H.prototype=new I;w.constructor=H,C(w,x.prototype),w.isPureReactComponent=!0;var F=Array.isArray;function P(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(O,Q,Ee){var Pe=Ee.ref;return{$$typeof:s,type:O,key:Q,ref:Pe!==void 0?Pe:null,props:Ee}}function X(O,Q){return D(O.type,Q,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function K(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ee){return Q[Ee]})}var ge=/\/+/g;function ie(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?K(""+O.key):Q.toString(36)}function Y(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(P,P):(O.status="pending",O.then(function(Q){O.status==="pending"&&(O.status="fulfilled",O.value=Q)},function(Q){O.status==="pending"&&(O.status="rejected",O.reason=Q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,Q,Ee,Pe,Ve){var ee=typeof O;(ee==="undefined"||ee==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(ee){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case s:case e:Me=!0;break;case v:return Me=O._init,B(Me(O._payload),Q,Ee,Pe,Ve)}}if(Me)return Ve=Ve(O),Me=Pe===""?"."+ie(O,0):Pe,F(Ve)?(Ee="",Me!=null&&(Ee=Me.replace(ge,"$&/")+"/"),B(Ve,Q,Ee,"",function(Qe){return Qe})):Ve!=null&&(G(Ve)&&(Ve=X(Ve,Ee+(Ve.key==null||O&&O.key===Ve.key?"":(""+Ve.key).replace(ge,"$&/")+"/")+Me)),Q.push(Ve)),1;Me=0;var Ae=Pe===""?".":Pe+":";if(F(O))for(var He=0;He<O.length;He++)Pe=O[He],ee=Ae+ie(Pe,He),Me+=B(Pe,Q,Ee,ee,Ve);else if(He=M(O),typeof He=="function")for(O=He.call(O),He=0;!(Pe=O.next()).done;)Pe=Pe.value,ee=Ae+ie(Pe,He++),Me+=B(Pe,Q,Ee,ee,Ve);else if(ee==="object"){if(typeof O.then=="function")return B(Y(O),Q,Ee,Pe,Ve);throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Me}function V(O,Q,Ee){if(O==null)return O;var Pe=[],Ve=0;return B(O,Pe,"","",function(ee){return Q.call(Ee,ee,Ve++)}),Pe}function ae(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(Ee){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ee)},function(Ee){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ee)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var pe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Ue={map:V,forEach:function(O,Q,Ee){V(O,function(){Q.apply(this,arguments)},Ee)},count:function(O){var Q=0;return V(O,function(){Q++}),Q},toArray:function(O){return V(O,function(Q){return Q})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ht.Activity=_,ht.Children=Ue,ht.Component=x,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=H,ht.StrictMode=r,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ht.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ht.cache=function(O){return function(){return O.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(O,Q,Ee){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Pe=C({},O.props),Ve=O.key;if(Q!=null)for(ee in Q.key!==void 0&&(Ve=""+Q.key),Q)!T.call(Q,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&Q.ref===void 0||(Pe[ee]=Q[ee]);var ee=arguments.length-2;if(ee===1)Pe.children=Ee;else if(1<ee){for(var Me=Array(ee),Ae=0;Ae<ee;Ae++)Me[Ae]=arguments[Ae+2];Pe.children=Me}return D(O.type,Ve,Pe)},ht.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ht.createElement=function(O,Q,Ee){var Pe,Ve={},ee=null;if(Q!=null)for(Pe in Q.key!==void 0&&(ee=""+Q.key),Q)T.call(Q,Pe)&&Pe!=="key"&&Pe!=="__self"&&Pe!=="__source"&&(Ve[Pe]=Q[Pe]);var Me=arguments.length-2;if(Me===1)Ve.children=Ee;else if(1<Me){for(var Ae=Array(Me),He=0;He<Me;He++)Ae[He]=arguments[He+2];Ve.children=Ae}if(O&&O.defaultProps)for(Pe in Me=O.defaultProps,Me)Ve[Pe]===void 0&&(Ve[Pe]=Me[Pe]);return D(O,ee,Ve)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:p,render:O}},ht.isValidElement=G,ht.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ae}},ht.memo=function(O,Q){return{$$typeof:h,type:O,compare:Q===void 0?null:Q}},ht.startTransition=function(O){var Q=z.T,Ee={};z.T=Ee;try{var Pe=O(),Ve=z.S;Ve!==null&&Ve(Ee,Pe),typeof Pe=="object"&&Pe!==null&&typeof Pe.then=="function"&&Pe.then(P,pe)}catch(ee){pe(ee)}finally{Q!==null&&Ee.types!==null&&(Q.types=Ee.types),z.T=Q}},ht.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ht.use=function(O){return z.H.use(O)},ht.useActionState=function(O,Q,Ee){return z.H.useActionState(O,Q,Ee)},ht.useCallback=function(O,Q){return z.H.useCallback(O,Q)},ht.useContext=function(O){return z.H.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O,Q){return z.H.useDeferredValue(O,Q)},ht.useEffect=function(O,Q){return z.H.useEffect(O,Q)},ht.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ht.useId=function(){return z.H.useId()},ht.useImperativeHandle=function(O,Q,Ee){return z.H.useImperativeHandle(O,Q,Ee)},ht.useInsertionEffect=function(O,Q){return z.H.useInsertionEffect(O,Q)},ht.useLayoutEffect=function(O,Q){return z.H.useLayoutEffect(O,Q)},ht.useMemo=function(O,Q){return z.H.useMemo(O,Q)},ht.useOptimistic=function(O,Q){return z.H.useOptimistic(O,Q)},ht.useReducer=function(O,Q,Ee){return z.H.useReducer(O,Q,Ee)},ht.useRef=function(O){return z.H.useRef(O)},ht.useState=function(O){return z.H.useState(O)},ht.useSyncExternalStore=function(O,Q,Ee){return z.H.useSyncExternalStore(O,Q,Ee)},ht.useTransition=function(){return z.H.useTransition()},ht.version="19.2.0",ht}var sv;function np(){return sv||(sv=1,Ed.exports=HS()),Ed.exports}var Re=np();const GS=zS(Re),VS=IS({__proto__:null,default:GS},[Re]);var Td={exports:{}},jo={},Ad={exports:{}},Rd={};var ov;function kS(){return ov||(ov=1,(function(s){function e(B,V){var ae=B.length;B.push(V);e:for(;0<ae;){var pe=ae-1>>>1,Ue=B[pe];if(0<l(Ue,V))B[pe]=V,B[ae]=Ue,ae=pe;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var V=B[0],ae=B.pop();if(ae!==V){B[0]=ae;e:for(var pe=0,Ue=B.length,O=Ue>>>1;pe<O;){var Q=2*(pe+1)-1,Ee=B[Q],Pe=Q+1,Ve=B[Pe];if(0>l(Ee,ae))Pe<Ue&&0>l(Ve,Ee)?(B[pe]=Ve,B[Pe]=ae,pe=Pe):(B[pe]=Ee,B[Q]=ae,pe=Q);else if(Pe<Ue&&0>l(Ve,ae))B[pe]=Ve,B[Pe]=ae,pe=Pe;else break e}}return V}function l(B,V){var ae=B.sortIndex-V.sortIndex;return ae!==0?ae:B.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],h=[],v=1,_=null,g=3,M=!1,E=!1,C=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var V=i(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=B)r(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(h)}}function F(B){if(C=!1,w(B),!E)if(i(m)!==null)E=!0,P||(P=!0,K());else{var V=i(h);V!==null&&Y(F,V.startTime-B)}}var P=!1,z=-1,T=5,D=-1;function X(){return S?!0:!(s.unstable_now()-D<T)}function G(){if(S=!1,P){var B=s.unstable_now();D=B;var V=!0;try{e:{E=!1,C&&(C=!1,I(z),z=-1),M=!0;var ae=g;try{t:{for(w(B),_=i(m);_!==null&&!(_.expirationTime>B&&X());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,g=_.priorityLevel;var Ue=pe(_.expirationTime<=B);if(B=s.unstable_now(),typeof Ue=="function"){_.callback=Ue,w(B),V=!0;break t}_===i(m)&&r(m),w(B)}else r(m);_=i(m)}if(_!==null)V=!0;else{var O=i(h);O!==null&&Y(F,O.startTime-B),V=!1}}break e}finally{_=null,g=ae,M=!1}V=void 0}}finally{V?K():P=!1}}}var K;if(typeof H=="function")K=function(){H(G)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ie=ge.port2;ge.port1.onmessage=G,K=function(){ie.postMessage(null)}}else K=function(){x(G,0)};function Y(B,V){z=x(function(){B(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(B){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var ae=g;g=V;try{return B()}finally{g=ae}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=g;g=B;try{return V()}finally{g=ae}},s.unstable_scheduleCallback=function(B,V,ae){var pe=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?pe+ae:pe):ae=pe,B){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=ae+Ue,B={id:v++,callback:V,priorityLevel:B,startTime:ae,expirationTime:Ue,sortIndex:-1},ae>pe?(B.sortIndex=ae,e(h,B),i(m)===null&&B===i(h)&&(C?(I(z),z=-1):C=!0,Y(F,ae-pe))):(B.sortIndex=Ue,e(m,B),E||M||(E=!0,P||(P=!0,K()))),B},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(B){var V=g;return function(){var ae=g;g=V;try{return B.apply(this,arguments)}finally{g=ae}}}})(Rd)),Rd}var lv;function XS(){return lv||(lv=1,Ad.exports=kS()),Ad.exports}var Cd={exports:{}},Wn={};var cv;function WS(){if(cv)return Wn;cv=1;var s=np();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,v)},Wn.flushSync=function(m){var h=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=v,r.d.f()}},Wn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Wn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Wn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Wn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Wn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Wn.requestFormReset=function(m){r.d.r(m)},Wn.unstable_batchedUpdates=function(m,h){return m(h)},Wn.useFormState=function(m,h,v){return f.H.useFormState(m,h,v)},Wn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Wn.version="19.2.0",Wn}var uv;function P_(){if(uv)return Cd.exports;uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cd.exports=WS(),Cd.exports}var fv;function qS(){if(fv)return jo;fv=1;var s=XS(),e=np(),i=P_();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=d;break}if(R===o){y=!0,o=u,a=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===a){y=!0,a=d,o=u;break}if(R===o){y=!0,o=d,a=u;break}R=R.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),H=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case F:return"Suspense";case P:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case H:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ie(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ie(t(n))}catch{}}return null}var Y=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},pe=[],Ue=-1;function O(t){return{current:t}}function Q(t){0>Ue||(t.current=pe[Ue],pe[Ue]=null,Ue--)}function Ee(t,n){Ue++,pe[Ue]=t.current,t.current=n}var Pe=O(null),Ve=O(null),ee=O(null),Me=O(null);function Ae(t,n){switch(Ee(ee,n),Ee(Ve,t),Ee(Pe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?A0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=A0(n),t=R0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Pe),Ee(Pe,t)}function He(){Q(Pe),Q(Ve),Q(ee)}function Qe(t){t.memoizedState!==null&&Ee(Me,t);var n=Pe.current,a=R0(n,t.type);n!==a&&(Ee(Ve,t),Ee(Pe,a))}function Ye(t){Ve.current===t&&(Q(Pe),Q(Ve)),Me.current===t&&(Q(Me),ko._currentValue=ae)}var Et,ut;function _t(t){if(Et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+ut}var xt=!1;function dt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(me){var de=me}Reflect.construct(t,[],we)}else{try{we.call()}catch(me){de=me}t.call(we.prototype)}}else{try{throw Error()}catch(me){de=me}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(me){if(me&&de&&typeof me.stack=="string")return[me.stack,de.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var k=y.split(`
`),le=R.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===le.length)for(o=k.length-1,u=le.length-1;1<=o&&0<=u&&k[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==le[u]){var be=`
`+k[o].replace(" at new "," at ");return t.displayName&&be.includes("<anonymous>")&&(be=be.replace("<anonymous>",t.displayName)),be}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_t(a):""}function Bt(t,n){switch(t.tag){case 26:case 27:case 5:return _t(t.type);case 16:return _t("Lazy");case 13:return t.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return _t("Activity");default:return""}}function jt(t){try{var n="",a=null;do n+=Bt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Qt=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,St=s.unstable_cancelCallback,Ht=s.unstable_shouldYield,j=s.unstable_requestPaint,Ut=s.unstable_now,Pt=s.unstable_getCurrentPriorityLevel,N=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,Z=s.unstable_NormalPriority,ce=s.unstable_LowPriority,ve=s.unstable_IdlePriority,Oe=s.log,Ge=s.unstable_setDisableYieldValue,xe=null,_e=null;function ze(t){if(typeof Oe=="function"&&Ge(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(xe,t)}catch{}}var We=Math.clz32?Math.clz32:De,he=Math.log,ye=Math.LN2;function De(t){return t>>>=0,t===0?32:31-(he(t)/ye|0)|0}var Ie=256,ne=262144,U=4194304;function J(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ue(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?u=J(o):(y&=R,y!==0?u=J(y):a||(a=R&~t,a!==0&&(u=J(a))))):(R=o&~d,R!==0?u=J(R):y!==0?u=J(y):a||(a=o&~t,a!==0&&(u=J(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Se(){var t=U;return U<<=1,(U&62914560)===0&&(U=4194304),t}function Be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ne(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function it(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,k=t.expirationTimes,le=t.hiddenUpdates;for(a=y&~a;0<a;){var be=31-We(a),we=1<<be;R[be]=0,k[be]=-1;var de=le[be];if(de!==null)for(le[be]=null,be=0;be<de.length;be++){var me=de[be];me!==null&&(me.lane&=-536870913)}a&=~we}o!==0&&ft(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function ft(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-We(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function kt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-We(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function It(t,n){var a=n&-n;return a=(a&42)!==0?1:cn(a),(a&(t.suspendedLanes|n))!==0?0:a}function cn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fe(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:K0(t.type))}function bt(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var At=Math.random().toString(36).slice(2),mt="__reactFiber$"+At,et="__reactProps$"+At,st="__reactContainer$"+At,ot="__reactEvents$"+At,Zt="__reactListeners$"+At,un="__reactHandles$"+At,Tn="__reactResources$"+At,di="__reactMarker$"+At;function ti(t){delete t[mt],delete t[et],delete t[ot],delete t[Zt],delete t[un]}function ni(t){var n=t[mt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[st]||a[mt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=O0(t);t!==null;){if(a=t[mt])return a;t=O0(t)}return n}t=a,a=t.parentNode}return null}function ii(t){if(t=t[mt]||t[st]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ti(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ai(t){var n=t[Tn];return n||(n=t[Tn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[di]=!0}var Ki=new Set,A={};function q(t,n){fe(t,n),fe(t+"Capture",n)}function fe(t,n){for(A[t]=n,t=0;t<n.length;t++)Ki.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Xe={};function je(t){return Qt.call(Xe,t)?!0:Qt.call(se,t)?!1:re.test(t)?Xe[t]=!0:(se[t]=!0,!1)}function ke(t,n,a){if(je(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=gt(t)?"checked":"value";t._valueTracker=nt(t,n,""+t[n])}}function gn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=gt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function fn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $t=/[\n"\\]/g;function en(t){return t.replace($t,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ze(t,n,a,o,u,d,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Rt(t,y,at(n)):a!=null?Rt(t,y,at(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+at(R):t.removeAttribute("name")}function Xn(t,n,a,o,u,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Wt(t)}function Rt(t,n,a){n==="number"&&fn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ln(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function hi(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Hi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Y(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||tn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Gi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&vn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&vn(t,d,n[d])}function Jt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ba=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yr(t){return Ba.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function da(){}var xu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,Jr=null;function Tp(t){var n=ii(t);if(n&&(t=n.stateNode)){var a=t[et]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+en(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[et]||null;if(!u)throw Error(r(90));Ze(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&gn(o)}break e;case"textarea":hi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ln(t,!!a.multiple,n,!1)}}}var Su=!1;function Ap(t,n,a){if(Su)return t(n,a);Su=!0;try{var o=t(n);return o}finally{if(Su=!1,(Qr!==null||Jr!==null)&&(ac(),Qr&&(n=Qr,t=Jr,Jr=Qr=null,Tp(n),t)))for(n=0;n<t.length;n++)Tp(t[n])}}function ro(t,n){var a=t.stateNode;if(a===null)return null;var o=a[et]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(ha)try{var so={};Object.defineProperty(so,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Mu=!1}var Ha=null,bu=null,_l=null;function Rp(){if(_l)return _l;var t,n=bu,a=n.length,o,u="value"in Ha?Ha.value:Ha.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return _l=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Cp(){return!1}function ai(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=ai(Sr),oo=_({},Sr,{view:0,detail:0}),Ox=ai(oo),Eu,Tu,lo,Ml=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Eu=t.screenX-lo.screenX,Tu=t.screenY-lo.screenY):Tu=Eu=0,lo=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),wp=ai(Ml),Px=_({},Ml,{dataTransfer:0}),Ix=ai(Px),zx=_({},oo,{relatedTarget:0}),Au=ai(zx),Fx=_({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=ai(Fx),Hx=_({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gx=ai(Hx),Vx=_({},Sr,{data:0}),Dp=ai(Vx),kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Wx[t])?!!n[t]:!1}function Ru(){return qx}var Yx=_({},oo,{key:function(t){if(t.key){var n=kx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jx=ai(Yx),Zx=_({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=ai(Zx),Kx=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Qx=ai(Kx),Jx=_({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$x=ai(Jx),ey=_({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=ai(ey),ny=_({},Sr,{newState:0,oldState:0}),iy=ai(ny),ay=[9,13,27,32],Cu=ha&&"CompositionEvent"in window,co=null;ha&&"documentMode"in document&&(co=document.documentMode);var ry=ha&&"TextEvent"in window&&!co,Lp=ha&&(!Cu||co&&8<co&&11>=co),Np=" ",Op=!1;function Pp(t,n){switch(t){case"keyup":return ay.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function sy(t,n){switch(t){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Op=!0,Np);case"textInput":return t=n.data,t===Np&&Op?null:t;default:return null}}function oy(t,n){if($r)return t==="compositionend"||!Cu&&Pp(t,n)?(t=Rp(),_l=bu=Ha=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ly[t.type]:n==="textarea"}function Fp(t,n,a,o){Qr?Jr?Jr.push(o):Jr=[o]:Qr=o,n=fc(n,"onChange"),0<n.length&&(a=new Sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var uo=null,fo=null;function cy(t){y0(t,0)}function bl(t){var n=Ti(t);if(gn(n))return t}function Bp(t,n){if(t==="change")return n}var Hp=!1;if(ha){var wu;if(ha){var Du="oninput"in document;if(!Du){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Du=typeof Gp.oninput=="function"}wu=Du}else wu=!1;Hp=wu&&(!document.documentMode||9<document.documentMode)}function Vp(){uo&&(uo.detachEvent("onpropertychange",kp),fo=uo=null)}function kp(t){if(t.propertyName==="value"&&bl(fo)){var n=[];Fp(n,fo,t,yu(t)),Ap(cy,n)}}function uy(t,n,a){t==="focusin"?(Vp(),uo=n,fo=a,uo.attachEvent("onpropertychange",kp)):t==="focusout"&&Vp()}function fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(fo)}function dy(t,n){if(t==="click")return bl(n)}function hy(t,n){if(t==="input"||t==="change")return bl(n)}function py(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var mi=typeof Object.is=="function"?Object.is:py;function ho(t,n){if(mi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qt.call(n,u)||!mi(t[u],n[u]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wp(t,n){var a=Xp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=fn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=fn(t.document)}return n}function Uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var my=ha&&"documentMode"in document&&11>=document.documentMode,es=null,Lu=null,po=null,Nu=!1;function jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nu||es==null||es!==fn(o)||(o=es,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=fc(Lu,"onSelect"),0<o.length&&(n=new Sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=es)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ts={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},Ou={},Zp={};ha&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function br(t){if(Ou[t])return Ou[t];if(!ts[t])return t;var n=ts[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zp)return Ou[t]=n[a];return t}var Kp=br("animationend"),Qp=br("animationiteration"),Jp=br("animationstart"),gy=br("transitionrun"),vy=br("transitionstart"),_y=br("transitioncancel"),$p=br("transitionend"),em=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Vi(t,n){em.set(t,n),q(n,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ri=[],ns=0,Iu=0;function Tl(){for(var t=ns,n=Iu=ns=0;n<t;){var a=Ri[n];Ri[n++]=null;var o=Ri[n];Ri[n++]=null;var u=Ri[n];Ri[n++]=null;var d=Ri[n];if(Ri[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&tm(a,u,d)}}function Al(t,n,a,o){Ri[ns++]=t,Ri[ns++]=n,Ri[ns++]=a,Ri[ns++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,a,o){return Al(t,n,a,o),Rl(t)}function Er(t,n){return Al(t,null,null,n),Rl(t)}function tm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-We(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Rl(t){if(50<Io)throw Io=0,Yf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var is={};function xy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(t,n,a,o){return new xy(t,n,a,o)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,n){var a=t.alternate;return a===null?(a=gi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Fu(t)&&(y=1);else if(typeof t=="string")y=ES(t,a,Pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=gi(31,a,n,u),t.elementType=D,t.lanes=d,t;case C:return Tr(a.children,u,d,n);case S:y=8,u|=24;break;case x:return t=gi(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case F:return t=gi(13,a,n,u),t.elementType=F,t.lanes=d,t;case P:return t=gi(19,a,n,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:y=10;break e;case I:y=9;break e;case w:y=11;break e;case z:y=14;break e;case T:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=gi(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Tr(t,n,a,o){return t=gi(7,t,o,n),t.lanes=a,t}function Bu(t,n,a){return t=gi(6,t,null,n),t.lanes=a,t}function im(t){var n=gi(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,a){return n=gi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var am=new WeakMap;function Ci(t,n){if(typeof t=="object"&&t!==null){var a=am.get(t);return a!==void 0?a:(n={value:t,source:n,stack:jt(n)},am.set(t,n),n)}return{value:t,source:n,stack:jt(n)}}var as=[],rs=0,wl=null,mo=0,wi=[],Di=0,Ga=null,Ji=1,$i="";function ma(t,n){as[rs++]=mo,as[rs++]=wl,wl=t,mo=n}function rm(t,n,a){wi[Di++]=Ji,wi[Di++]=$i,wi[Di++]=Ga,Ga=t;var o=Ji;t=$i;var u=32-We(o)-1;o&=~(1<<u),a+=1;var d=32-We(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Ji=1<<32-We(n)+u|a<<u|o,$i=d+t}else Ji=1<<d|a<<u|o,$i=t}function Gu(t){t.return!==null&&(ma(t,1),rm(t,1,0))}function Vu(t){for(;t===wl;)wl=as[--rs],as[rs]=null,mo=as[--rs],as[rs]=null;for(;t===Ga;)Ga=wi[--Di],wi[Di]=null,$i=wi[--Di],wi[Di]=null,Ji=wi[--Di],wi[Di]=null}function sm(t,n){wi[Di++]=Ji,wi[Di++]=$i,wi[Di++]=Ga,Ji=n.id,$i=n.overflow,Ga=t}var Fn=null,hn=null,zt=!1,Va=null,Ui=!1,ku=Error(r(519));function ka(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(Ci(n,t)),ku}function om(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mt]=t,n[et]=o,a){case"dialog":wt("cancel",n),wt("close",n);break;case"iframe":case"object":case"embed":wt("load",n);break;case"video":case"audio":for(a=0;a<Fo.length;a++)wt(Fo[a],n);break;case"source":wt("error",n);break;case"img":case"image":case"link":wt("error",n),wt("load",n);break;case"details":wt("toggle",n);break;case"input":wt("invalid",n),Xn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":wt("invalid",n);break;case"textarea":wt("invalid",n),Hi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||E0(n.textContent,a)?(o.popover!=null&&(wt("beforetoggle",n),wt("toggle",n)),o.onScroll!=null&&wt("scroll",n),o.onScrollEnd!=null&&wt("scrollend",n),o.onClick!=null&&(n.onclick=da),n=!0):n=!1,n||ka(t,!0)}function lm(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Fn=Fn.return}}function ss(t){if(t!==Fn)return!1;if(!zt)return lm(t),zt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ld(t.type,t.memoizedProps)),a=!a),a&&hn&&ka(t),lm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));hn=N0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));hn=N0(t)}else n===27?(n=hn,ir(t.type)?(t=hd,hd=null,hn=t):hn=n):hn=Fn?Ni(t.stateNode.nextSibling):null;return!0}function Ar(){hn=Fn=null,zt=!1}function Xu(){var t=Va;return t!==null&&(li===null?li=t:li.push.apply(li,t),Va=null),t}function go(t){Va===null?Va=[t]:Va.push(t)}var Wu=O(null),Rr=null,ga=null;function Xa(t,n,a){Ee(Wu,n._currentValue),n._currentValue=a}function va(t){t._currentValue=Wu.current,Q(Wu)}function qu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Yu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=u;for(var k=0;k<n.length;k++)if(R.context===n[k]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),qu(d.return,a,t),o||(y=null);break e}d=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),qu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function os(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=u.type;mi(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ko):t=[ko])}u=u.return}t!==null&&Yu(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Rr=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Bn(t){return cm(Rr,t)}function Ul(t,n){return Rr===null&&Cr(t),cm(t,n)}function cm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ga===null){if(t===null)throw Error(r(308));ga=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ga=ga.next=n;return a}var yy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Sy=s.unstable_scheduleCallback,My=s.unstable_NormalPriority,An={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new yy,data:new Map,refCount:0}}function vo(t){t.refCount--,t.refCount===0&&Sy(My,function(){t.controller.abort()})}var _o=null,Zu=0,ls=0,cs=null;function by(t,n){if(_o===null){var a=_o=[];Zu=0,ls=$f(),cs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(um,um),n}function um(){if(--Zu===0&&_o!==null){cs!==null&&(cs.status="fulfilled");var t=_o;_o=null,ls=0,cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ey(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=B.S;B.S=function(t,n){jg=Ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&by(t,n),fm!==null&&fm(t,n)};var wr=O(null);function Ku(){var t=wr.current;return t!==null?t:dn.pooledCache}function Ll(t,n){n===null?Ee(wr,wr.current):Ee(wr,n.pool)}function dm(){var t=Ku();return t===null?null:{parent:An._currentValue,pool:t}}var us=Error(r(460)),Qu=Error(r(474)),Nl=Error(r(542)),Ol={then:function(){}};function hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(da,da),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t;default:if(typeof n.status=="string")n.then(da,da);else{if(t=dn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gm(t),t}throw Ur=n,us}}function Dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,us):a}}var Ur=null;function mm(){if(Ur===null)throw Error(r(459));var t=Ur;return Ur=null,t}function gm(t){if(t===us||t===Nl)throw Error(r(483))}var fs=null,xo=0;function Pl(t){var n=xo;return xo+=1,fs===null&&(fs=[]),pm(fs,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Il(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function vm(t){function n($,W){if(t){var oe=$.deletions;oe===null?($.deletions=[W],$.flags|=16):oe.push(W)}}function a($,W){if(!t)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=pa($,W),$.index=0,$.sibling=null,$}function d($,W,oe){return $.index=oe,t?(oe=$.alternate,oe!==null?(oe=oe.index,oe<W?($.flags|=67108866,W):oe):($.flags|=67108866,W)):($.flags|=1048576,W)}function y($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,W,oe,Te){return W===null||W.tag!==6?(W=Bu(oe,$.mode,Te),W.return=$,W):(W=u(W,oe),W.return=$,W)}function k($,W,oe,Te){var rt=oe.type;return rt===C?be($,W,oe.props.children,Te,oe.key):W!==null&&(W.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Dr(rt)===W.type)?(W=u(W,oe.props),yo(W,oe),W.return=$,W):(W=Cl(oe.type,oe.key,oe.props,null,$.mode,Te),yo(W,oe),W.return=$,W)}function le($,W,oe,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==oe.containerInfo||W.stateNode.implementation!==oe.implementation?(W=Hu(oe,$.mode,Te),W.return=$,W):(W=u(W,oe.children||[]),W.return=$,W)}function be($,W,oe,Te,rt){return W===null||W.tag!==7?(W=Tr(oe,$.mode,Te,rt),W.return=$,W):(W=u(W,oe),W.return=$,W)}function we($,W,oe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Bu(""+W,$.mode,oe),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return oe=Cl(W.type,W.key,W.props,null,$.mode,oe),yo(oe,W),oe.return=$,oe;case E:return W=Hu(W,$.mode,oe),W.return=$,W;case T:return W=Dr(W),we($,W,oe)}if(Y(W)||K(W))return W=Tr(W,$.mode,oe,null),W.return=$,W;if(typeof W.then=="function")return we($,Pl(W),oe);if(W.$$typeof===H)return we($,Ul($,W),oe);Il($,W)}return null}function de($,W,oe,Te){var rt=W!==null?W.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return rt!==null?null:R($,W,""+oe,Te);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return oe.key===rt?k($,W,oe,Te):null;case E:return oe.key===rt?le($,W,oe,Te):null;case T:return oe=Dr(oe),de($,W,oe,Te)}if(Y(oe)||K(oe))return rt!==null?null:be($,W,oe,Te,null);if(typeof oe.then=="function")return de($,W,Pl(oe),Te);if(oe.$$typeof===H)return de($,W,Ul($,oe),Te);Il($,oe)}return null}function me($,W,oe,Te,rt){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return $=$.get(oe)||null,R(W,$,""+Te,rt);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case M:return $=$.get(Te.key===null?oe:Te.key)||null,k(W,$,Te,rt);case E:return $=$.get(Te.key===null?oe:Te.key)||null,le(W,$,Te,rt);case T:return Te=Dr(Te),me($,W,oe,Te,rt)}if(Y(Te)||K(Te))return $=$.get(oe)||null,be(W,$,Te,rt,null);if(typeof Te.then=="function")return me($,W,oe,Pl(Te),rt);if(Te.$$typeof===H)return me($,W,oe,Ul(W,Te),rt);Il(W,Te)}return null}function $e($,W,oe,Te){for(var rt=null,qt=null,tt=W,yt=W=0,Nt=null;tt!==null&&yt<oe.length;yt++){tt.index>yt?(Nt=tt,tt=null):Nt=tt.sibling;var Yt=de($,tt,oe[yt],Te);if(Yt===null){tt===null&&(tt=Nt);break}t&&tt&&Yt.alternate===null&&n($,tt),W=d(Yt,W,yt),qt===null?rt=Yt:qt.sibling=Yt,qt=Yt,tt=Nt}if(yt===oe.length)return a($,tt),zt&&ma($,yt),rt;if(tt===null){for(;yt<oe.length;yt++)tt=we($,oe[yt],Te),tt!==null&&(W=d(tt,W,yt),qt===null?rt=tt:qt.sibling=tt,qt=tt);return zt&&ma($,yt),rt}for(tt=o(tt);yt<oe.length;yt++)Nt=me(tt,$,yt,oe[yt],Te),Nt!==null&&(t&&Nt.alternate!==null&&tt.delete(Nt.key===null?yt:Nt.key),W=d(Nt,W,yt),qt===null?rt=Nt:qt.sibling=Nt,qt=Nt);return t&&tt.forEach(function(lr){return n($,lr)}),zt&&ma($,yt),rt}function lt($,W,oe,Te){if(oe==null)throw Error(r(151));for(var rt=null,qt=null,tt=W,yt=W=0,Nt=null,Yt=oe.next();tt!==null&&!Yt.done;yt++,Yt=oe.next()){tt.index>yt?(Nt=tt,tt=null):Nt=tt.sibling;var lr=de($,tt,Yt.value,Te);if(lr===null){tt===null&&(tt=Nt);break}t&&tt&&lr.alternate===null&&n($,tt),W=d(lr,W,yt),qt===null?rt=lr:qt.sibling=lr,qt=lr,tt=Nt}if(Yt.done)return a($,tt),zt&&ma($,yt),rt;if(tt===null){for(;!Yt.done;yt++,Yt=oe.next())Yt=we($,Yt.value,Te),Yt!==null&&(W=d(Yt,W,yt),qt===null?rt=Yt:qt.sibling=Yt,qt=Yt);return zt&&ma($,yt),rt}for(tt=o(tt);!Yt.done;yt++,Yt=oe.next())Yt=me(tt,$,yt,Yt.value,Te),Yt!==null&&(t&&Yt.alternate!==null&&tt.delete(Yt.key===null?yt:Yt.key),W=d(Yt,W,yt),qt===null?rt=Yt:qt.sibling=Yt,qt=Yt);return t&&tt.forEach(function(PS){return n($,PS)}),zt&&ma($,yt),rt}function ln($,W,oe,Te){if(typeof oe=="object"&&oe!==null&&oe.type===C&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:e:{for(var rt=oe.key;W!==null;){if(W.key===rt){if(rt=oe.type,rt===C){if(W.tag===7){a($,W.sibling),Te=u(W,oe.props.children),Te.return=$,$=Te;break e}}else if(W.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===T&&Dr(rt)===W.type){a($,W.sibling),Te=u(W,oe.props),yo(Te,oe),Te.return=$,$=Te;break e}a($,W);break}else n($,W);W=W.sibling}oe.type===C?(Te=Tr(oe.props.children,$.mode,Te,oe.key),Te.return=$,$=Te):(Te=Cl(oe.type,oe.key,oe.props,null,$.mode,Te),yo(Te,oe),Te.return=$,$=Te)}return y($);case E:e:{for(rt=oe.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===oe.containerInfo&&W.stateNode.implementation===oe.implementation){a($,W.sibling),Te=u(W,oe.children||[]),Te.return=$,$=Te;break e}else{a($,W);break}else n($,W);W=W.sibling}Te=Hu(oe,$.mode,Te),Te.return=$,$=Te}return y($);case T:return oe=Dr(oe),ln($,W,oe,Te)}if(Y(oe))return $e($,W,oe,Te);if(K(oe)){if(rt=K(oe),typeof rt!="function")throw Error(r(150));return oe=rt.call(oe),lt($,W,oe,Te)}if(typeof oe.then=="function")return ln($,W,Pl(oe),Te);if(oe.$$typeof===H)return ln($,W,Ul($,oe),Te);Il($,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,W!==null&&W.tag===6?(a($,W.sibling),Te=u(W,oe),Te.return=$,$=Te):(a($,W),Te=Bu(oe,$.mode,Te),Te.return=$,$=Te),y($)):a($,W)}return function($,W,oe,Te){try{xo=0;var rt=ln($,W,oe,Te);return fs=null,rt}catch(tt){if(tt===us||tt===Nl)throw tt;var qt=gi(29,tt,null,$.mode);return qt.lanes=Te,qt.return=$,qt}finally{}}}var Lr=vm(!0),_m=vm(!1),Wa=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Kt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(t),tm(t,null,a),n}return Al(t,o,n,a),Rl(t)}function So(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kt(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function Mo(){if(tf){var t=cs;if(t!==null)throw t}}function bo(t,n,a,o){tf=!1;var u=t.updateQueue;Wa=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var k=R,le=k.next;k.next=null,y===null?d=le:y.next=le,y=k;var be=t.alternate;be!==null&&(be=be.updateQueue,R=be.lastBaseUpdate,R!==y&&(R===null?be.firstBaseUpdate=le:R.next=le,be.lastBaseUpdate=k))}if(d!==null){var we=u.baseState;y=0,be=le=k=null,R=d;do{var de=R.lane&-536870913,me=de!==R.lane;if(me?(Lt&de)===de:(o&de)===de){de!==0&&de===ls&&(tf=!0),be!==null&&(be=be.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var $e=t,lt=R;de=n;var ln=a;switch(lt.tag){case 1:if($e=lt.payload,typeof $e=="function"){we=$e.call(ln,we,de);break e}we=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=lt.payload,de=typeof $e=="function"?$e.call(ln,we,de):$e,de==null)break e;we=_({},we,de);break e;case 2:Wa=!0}}de=R.callback,de!==null&&(t.flags|=64,me&&(t.flags|=8192),me=u.callbacks,me===null?u.callbacks=[de]:me.push(de))}else me={lane:de,tag:R.tag,payload:R.payload,callback:R.callback,next:null},be===null?(le=be=me,k=we):be=be.next=me,y|=de;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;me=R,R=me.next,me.next=null,u.lastBaseUpdate=me,u.shared.pending=null}}while(!0);be===null&&(k=we),u.baseState=k,u.firstBaseUpdate=le,u.lastBaseUpdate=be,d===null&&(u.shared.lanes=0),Ja|=y,t.lanes=y,t.memoizedState=we}}function xm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ym(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xm(a[t],n)}var ds=O(null),zl=O(0);function Sm(t,n){t=Aa,Ee(zl,t),Ee(ds,n),Aa=t|n.baseLanes}function nf(){Ee(zl,Aa),Ee(ds,ds.current)}function af(){Aa=zl.current,Q(ds),Q(zl)}var vi=O(null),Li=null;function ja(t){var n=t.alternate;Ee(bn,bn.current&1),Ee(vi,t),Li===null&&(n===null||ds.current!==null||n.memoizedState!==null)&&(Li=t)}function rf(t){Ee(bn,bn.current),Ee(vi,t),Li===null&&(Li=t)}function Mm(t){t.tag===22?(Ee(bn,bn.current),Ee(vi,t),Li===null&&(Li=t)):Za()}function Za(){Ee(bn,bn.current),Ee(vi,vi.current)}function _i(t){Q(vi),Li===t&&(Li=null),Q(bn)}var bn=O(0);function Fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _a=0,vt=null,sn=null,Rn=null,Bl=!1,hs=!1,Nr=!1,Hl=0,Eo=0,ps=null,Ty=0;function yn(){throw Error(r(321))}function sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!mi(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,d){return _a=d,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?rg:Mf,Nr=!1,d=a(o,u),Nr=!1,hs&&(d=Em(n,a,o,u)),bm(t),d}function bm(t){B.H=Ro;var n=sn!==null&&sn.next!==null;if(_a=0,Rn=sn=vt=null,Bl=!1,Eo=0,ps=null,n)throw Error(r(300));t===null||Cn||(t=t.dependencies,t!==null&&Dl(t)&&(Cn=!0))}function Em(t,n,a,o){vt=t;var u=0;do{if(hs&&(ps=null),Eo=0,hs=!1,25<=u)throw Error(r(301));if(u+=1,Rn=sn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=sg,d=n(a,o)}while(hs);return d}function Ay(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?To(n):n,t=t.useState()[0],(sn!==null?sn.memoizedState:null)!==t&&(vt.flags|=1024),n}function lf(){var t=Hl!==0;return Hl=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Bl=!1}_a=0,Rn=sn=vt=null,hs=!1,Eo=Hl=0,ps=null}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?vt.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function En(){if(sn===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var n=Rn===null?vt.memoizedState:Rn.next;if(n!==null)Rn=n,sn=t;else{if(t===null)throw vt.alternate===null?Error(r(467)):Error(r(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},Rn===null?vt.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(t){var n=Eo;return Eo+=1,ps===null&&(ps=[]),t=pm(ps,t,n),n=vt,(Rn===null?n.memoizedState:Rn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?rg:Mf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return To(t);if(t.$$typeof===H)return Bn(t)}throw Error(r(438,String(t)))}function ff(t){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=En();return df(n,sn,t)}function df(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var R=y=null,k=null,le=n,be=!1;do{var we=le.lane&-536870913;if(we!==le.lane?(Lt&we)===we:(_a&we)===we){var de=le.revertLane;if(de===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),we===ls&&(be=!0);else if((_a&de)===de){le=le.next,de===ls&&(be=!0);continue}else we={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},k===null?(R=k=we,y=d):k=k.next=we,vt.lanes|=de,Ja|=de;we=le.action,Nr&&a(d,we),d=le.hasEagerState?le.eagerState:a(d,we)}else de={lane:we,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},k===null?(R=k=de,y=d):k=k.next=de,vt.lanes|=we,Ja|=we;le=le.next}while(le!==null&&le!==n);if(k===null?y=d:k.next=R,!mi(d,t.memoizedState)&&(Cn=!0,be&&(a=cs,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=En(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);mi(d,n.memoizedState)||(Cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Tm(t,n,a){var o=vt,u=En(),d=zt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!mi((sn||u).memoizedState,a);if(y&&(u.memoizedState=a,Cn=!0),u=u.queue,gf(Cm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||Rn!==null&&Rn.memoizedState.tag&1){if(o.flags|=2048,ms(9,{destroy:void 0},Rm.bind(null,o,u,a,n),null),dn===null)throw Error(r(349));d||(_a&127)!==0||Am(o,n,a)}return a}function Am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=Gl(),vt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rm(t,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Dm(t)}function Cm(t,n,a){return a(function(){wm(n)&&Dm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!mi(t,a)}catch{return!0}}function Dm(t){var n=Er(t,2);n!==null&&ci(n,t,2)}function pf(t){var n=Kn();if(typeof t=="function"){var a=t;if(t=a(),Nr){ze(!0);try{a()}finally{ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function Um(t,n,a,o){return t.baseState=a,df(t,sn,typeof o=="function"?o:xa)}function Ry(t,n,a,o,u){if(ql(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Lm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Lm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=B.T,y={};B.T=y;try{var R=a(u,o),k=B.S;k!==null&&k(y,R),Nm(t,n,R)}catch(le){mf(t,n,le)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=a(u,o),Nm(t,n,d)}catch(le){mf(t,n,le)}}function Nm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Om(t,n,o)},function(o){return mf(t,n,o)}):Om(t,n,a)}function Om(t,n,a){n.status="fulfilled",n.value=a,Pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Lm(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==o)}t.action=null}function Pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function zm(t,n){if(zt){var a=dn.formState;if(a!==null){e:{var o=vt;if(zt){if(hn){t:{for(var u=hn,d=Ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ni(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){hn=Ni(u.nextSibling),o=u.data==="F!";break e}}ka(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=ng.bind(null,vt,o),o.dispatch=a,o=pf(!1),d=Sf.bind(null,vt,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ry.bind(null,vt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Fm(t){var n=En();return Bm(n,sn,t)}function Bm(t,n,a){if(n=df(t,n,Im)[0],t=kl(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=To(n)}catch(y){throw y===us?Nl:y}else o=n;n=En();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,ms(9,{destroy:void 0},Cy.bind(null,u,a),null)),[o,d,t]}function Cy(t,n){t.action=n}function Hm(t){var n=En(),a=sn;if(a!==null)return Bm(n,a,t);En(),n=n.memoizedState,a=En();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ms(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=vt.updateQueue,n===null&&(n=Gl(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Gm(){return En().memoizedState}function Xl(t,n,a,o){var u=Kn();vt.flags|=t,u.memoizedState=ms(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(t,n,a,o){var u=En();o=o===void 0?null:o;var d=u.memoizedState.inst;sn!==null&&o!==null&&sf(o,sn.memoizedState.deps)?u.memoizedState=ms(n,d,a,o):(vt.flags|=t,u.memoizedState=ms(1|n,d,a,o))}function Vm(t,n){Xl(8390656,8,t,n)}function gf(t,n){Wl(2048,8,t,n)}function wy(t){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=Gl(),vt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function km(t){var n=En().memoizedState;return wy({ref:n,nextImpl:t}),function(){if((Kt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xm(t,n){return Wl(4,2,t,n)}function Wm(t,n){return Wl(4,4,t,n)}function qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ym(t,n,a){a=a!=null?a.concat([t]):null,Wl(4,4,qm.bind(null,n,t),a)}function vf(){}function jm(t,n){var a=En();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Zm(t,n){var a=En();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=t(),Nr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o}function _f(t,n,a){return a===void 0||(_a&1073741824)!==0&&(Lt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Kg(),vt.lanes|=t,Ja|=t,a)}function Km(t,n,a,o){return mi(a,n)?a:ds.current!==null?(t=_f(t,a,o),mi(t,n)||(Cn=!0),t):(_a&42)===0||(_a&1073741824)!==0&&(Lt&261930)===0?(Cn=!0,t.memoizedState=a):(t=Kg(),vt.lanes|=t,Ja|=t,n)}function Qm(t,n,a,o,u){var d=V.p;V.p=d!==0&&8>d?d:8;var y=B.T,R={};B.T=R,Sf(t,!1,n,a);try{var k=u(),le=B.S;if(le!==null&&le(R,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var be=Ey(k,o);Ao(t,n,be,Si(t))}else Ao(t,n,o,Si(t))}catch(we){Ao(t,n,{then:function(){},status:"rejected",reason:we},Si())}finally{V.p=d,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function Dy(){}function xf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Jm(t).queue;Qm(t,u,n,ae,a===null?Dy:function(){return $m(t),a(o)})}function Jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $m(t){var n=Jm(t);n.next===null&&(n=t.alternate.memoizedState),Ao(t,n.next.queue,{},Si())}function yf(){return Bn(ko)}function eg(){return En().memoizedState}function tg(){return En().memoizedState}function Uy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Si();t=qa(a);var o=Ya(n,t,a);o!==null&&(ci(o,n,a),So(o,n,a)),n={cache:ju()},t.payload=n;return}n=n.return}}function Ly(t,n,a){var o=Si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?ig(n,a):(a=zu(t,n,a,o),a!==null&&(ci(a,t,o),ag(a,n,o)))}function ng(t,n,a){var o=Si();Ao(t,n,a,o)}function Ao(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))ig(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,R=d(y,a);if(u.hasEagerState=!0,u.eagerState=R,mi(R,y))return Al(t,n,u,0),dn===null&&Tl(),!1}catch{}finally{}if(a=zu(t,n,u,o),a!==null)return ci(a,t,o),ag(a,n,o),!0}return!1}function Sf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(r(479))}else n=zu(t,a,o,2),n!==null&&ci(n,t,2)}function ql(t){var n=t.alternate;return t===vt||n!==null&&n===vt}function ig(t,n){hs=Bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ag(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,kt(t,a)}}var Ro={readContext:Bn,use:Vl,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useLayoutEffect:yn,useInsertionEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useSyncExternalStore:yn,useId:yn,useHostTransitionStatus:yn,useFormState:yn,useActionState:yn,useOptimistic:yn,useMemoCache:yn,useCacheRefresh:yn};Ro.useEffectEvent=yn;var rg={readContext:Bn,use:Vl,useCallback:function(t,n){return Kn().memoizedState=[t,n===void 0?null:n],t},useContext:Bn,useEffect:Vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=Kn();n=n===void 0?null:n;var o=t();if(Nr){ze(!0);try{t()}finally{ze(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Nr){ze(!0);try{a(n)}finally{ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ly.bind(null,vt,t),[o.memoizedState,t]},useRef:function(t){var n=Kn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=ng.bind(null,vt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(t,n){var a=Kn();return _f(a,t,n)},useTransition:function(){var t=pf(!1);return t=Qm.bind(null,vt,t.queue,!0,!1),Kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=vt,u=Kn();if(zt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),dn===null)throw Error(r(349));(Lt&127)!==0||Am(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Vm(Cm.bind(null,o,d,t),[t]),o.flags|=2048,ms(9,{destroy:void 0},Rm.bind(null,o,d,a,n),null),a},useId:function(){var t=Kn(),n=dn.identifierPrefix;if(zt){var a=$i,o=Ji;a=(o&~(1<<32-We(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ty++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=Kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,vt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Kn().memoizedState=Uy.bind(null,vt)},useEffectEvent:function(t){var n=Kn(),a={impl:t};return n.memoizedState=a,function(){if((Kt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:Bn,use:Vl,useCallback:jm,useContext:Bn,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:kl,useRef:Gm,useState:function(){return kl(xa)},useDebugValue:vf,useDeferredValue:function(t,n){var a=En();return Km(a,sn.memoizedState,t,n)},useTransition:function(){var t=kl(xa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:To(t),n]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:yf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=En();return Um(a,sn,t,n)},useMemoCache:ff,useCacheRefresh:tg};Mf.useEffectEvent=km;var sg={readContext:Bn,use:Vl,useCallback:jm,useContext:Bn,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:hf,useRef:Gm,useState:function(){return hf(xa)},useDebugValue:vf,useDeferredValue:function(t,n){var a=En();return sn===null?_f(a,t,n):Km(a,sn.memoizedState,t,n)},useTransition:function(){var t=hf(xa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:To(t),n]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:yf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=En();return sn!==null?Um(a,sn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:tg};sg.useEffectEvent=km;function bf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Si(),u=qa(o);u.payload=n,a!=null&&(u.callback=a),n=Ya(t,u,o),n!==null&&(ci(n,t,o),So(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Si(),u=qa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ya(t,u,o),n!==null&&(ci(n,t,o),So(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Si(),o=qa(a);o.tag=2,n!=null&&(o.callback=n),n=Ya(t,o,a),n!==null&&(ci(n,t,a),So(n,t,a))}};function og(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!ho(a,o)||!ho(u,d):!0}function lg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function cg(t){El(t)}function ug(t){console.error(t)}function fg(t){El(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function dg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function hg(t){return t=qa(t),t.tag=3,t}function pg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){dg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){dg(n,a,o),typeof u!="function"&&($a===null?$a=new Set([this]):$a.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ny(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&os(n,a,u,!0),a=vi.current,a!==null){switch(a.tag){case 31:case 13:return Li===null?rc():a.alternate===null&&Sn===0&&(Sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(t,o,u)),!1}throw Error(r(435,a.tag))}return Kf(t,o,u),rc(),!1}if(zt)return n=vi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(r(422),{cause:o}),go(Ci(t,a)))):(o!==ku&&(n=Error(r(423),{cause:o}),go(Ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ci(o,a),u=Tf(t.stateNode,o,u),ef(t,u),Sn!==4&&(Sn=2)),!1;var d=Error(r(520),{cause:o});if(d=Ci(d,a),Po===null?Po=[d]:Po.push(d),Sn!==4&&(Sn=2),n===null)return!0;o=Ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&($a===null||!$a.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=hg(u),pg(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(r(461)),Cn=!1;function Hn(t,n,a,o){n.child=t===null?_m(n,null,a,o):Lr(n,t.child,a,o)}function mg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Cr(n),o=of(t,n,a,y,d,u),R=lf(),t!==null&&!Cn?(cf(t,n,u),ya(t,n,u)):(zt&&R&&Gu(n),n.flags|=1,Hn(t,n,o,u),n.child)}function gg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Fu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,vg(t,n,d,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(y,o)&&t.ref===n.ref)return ya(t,n,u)}return n.flags|=1,t=pa(d,o),t.ref=n.ref,t.return=n,n.child=t}function vg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ho(d,o)&&t.ref===n.ref)if(Cn=!1,n.pendingProps=o=d,Of(t,u))(t.flags&131072)!==0&&(Cn=!0);else return n.lanes=t.lanes,ya(t,n,u)}return Rf(t,n,a,o,u)}function _g(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return xg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,d!==null?d.cachePool:null),d!==null?Sm(n,d):nf(),Mm(n);else return o=n.lanes=536870912,xg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ll(n,d.cachePool),Sm(n,d),Za(),n.memoizedState=null):(t!==null&&Ll(n,null),nf(),Za());return Hn(t,n,u,a),n.child}function Co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xg(t,n,a,o,u){var d=Ku();return d=d===null?null:{parent:An._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ll(n,null),nf(),Mm(n),t!==null&&os(t,n,o,!0),n.childLanes=u,null}function jl(t,n){return n=Kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function yg(t,n,a){return Lr(n,t.child,null,a),t=jl(n,n.pendingProps),t.flags|=2,_i(n),n.memoizedState=null,t}function Oy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(zt){if(o.mode==="hidden")return t=jl(n,o),n.lanes=536870912,Co(null,t);if(rf(n),(t=hn)?(t=L0(t,Ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Fn=n,hn=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return jl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=yg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Cn||os(t,n,a,!1),u=(a&t.childLanes)!==0,Cn||u){if(o=dn,o!==null&&(y=It(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,Er(t,y),ci(o,t,y),Af;rc(),n=yg(t,n,a)}else t=d.treeContext,hn=Ni(y.nextSibling),Fn=n,zt=!0,Va=null,Ui=!1,t!==null&&sm(n,t),n=jl(n,o),n.flags|=4096;return n}return t=pa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rf(t,n,a,o,u){return Cr(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!Cn?(cf(t,n,u),ya(t,n,u)):(zt&&o&&Gu(n),n.flags|=1,Hn(t,n,a,u),n.child)}function Sg(t,n,a,o,u,d){return Cr(n),n.updateQueue=null,a=Em(n,o,a,u),bm(t),o=lf(),t!==null&&!Cn?(cf(t,n,d),ya(t,n,d)):(zt&&o&&Gu(n),n.flags|=1,Hn(t,n,a,d),n.child)}function Mg(t,n,a,o,u){if(Cr(n),n.stateNode===null){var d=is,y=a.contextType;typeof y=="object"&&y!==null&&(d=Bn(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ju(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?Bn(y):is,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(bf(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Ef.enqueueReplaceState(d,d.state,null),bo(n,o,d,u),Mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,k=Or(a,R);d.props=k;var le=d.context,be=a.contextType;y=is,typeof be=="object"&&be!==null&&(y=Bn(be));var we=a.getDerivedStateFromProps;be=typeof we=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,be||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||le!==y)&&lg(n,d,o,y),Wa=!1;var de=n.memoizedState;d.state=de,bo(n,o,d,u),Mo(),le=n.memoizedState,R||de!==le||Wa?(typeof we=="function"&&(bf(n,a,we,o),le=n.memoizedState),(k=Wa||og(n,a,k,o,de,le,y))?(be||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=y,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,$u(t,n),y=n.memoizedProps,be=Or(a,y),d.props=be,we=n.pendingProps,de=d.context,le=a.contextType,k=is,typeof le=="object"&&le!==null&&(k=Bn(le)),R=a.getDerivedStateFromProps,(le=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==we||de!==k)&&lg(n,d,o,k),Wa=!1,de=n.memoizedState,d.state=de,bo(n,o,d,u),Mo();var me=n.memoizedState;y!==we||de!==me||Wa||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof R=="function"&&(bf(n,a,R,o),me=n.memoizedState),(be=Wa||og(n,a,be,o,de,me,k)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,me,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,me,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=me),d.props=o,d.state=me,d.context=k,o=be):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Zl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Lr(n,t.child,null,u),n.child=Lr(n,null,a,u)):Hn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ya(t,n,u),t}function bg(t,n,a,o){return Ar(),n.flags|=256,Hn(t,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:dm()}}function Df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=yi),t}function Eg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(zt){if(u?ja(n):Za(),(t=hn)?(t=L0(t,Ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ga!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,Fn=n,hn=null)):t=null,t===null)throw ka(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Za(),u=n.mode,R=Kl({mode:"hidden",children:R},u),o=Tr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=wf(a),o.childLanes=Df(t,y,a),n.memoizedState=Cf,Co(null,o)):(ja(n),Uf(n,R))}var k=t.memoizedState;if(k!==null&&(R=k.dehydrated,R!==null)){if(d)n.flags&256?(ja(n),n.flags&=-257,n=Lf(t,n,a)):n.memoizedState!==null?(Za(),n.child=t.child,n.flags|=128,n=null):(Za(),R=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),R=Tr(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Lr(n,t.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Df(t,y,a),n.memoizedState=Cf,n=Co(null,o));else if(ja(n),dd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var le=y.dgst;y=le,o=Error(r(419)),o.stack="",o.digest=y,go({value:o,source:null,stack:null}),n=Lf(t,n,a)}else if(Cn||os(t,n,a,!1),y=(a&t.childLanes)!==0,Cn||y){if(y=dn,y!==null&&(o=It(y,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,Er(t,o),ci(y,t,o),Af;fd(R)||rc(),n=Lf(t,n,a)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,hn=Ni(R.nextSibling),Fn=n,zt=!0,Va=null,Ui=!1,t!==null&&sm(n,t),n=Uf(n,o.children),n.flags|=4096);return n}return u?(Za(),R=o.fallback,u=n.mode,k=t.child,le=k.sibling,o=pa(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,le!==null?R=pa(le,R):(R=Tr(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Co(null,o),o=n.child,R=t.child.memoizedState,R===null?R=wf(a):(u=R.cachePool,u!==null?(k=An._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=dm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Df(t,y,a),n.memoizedState=Cf,Co(t.child,o)):(ja(n),a=t.child,t=a.sibling,a=pa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Uf(t,n){return n=Kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Kl(t,n){return t=gi(22,t,null,n),t.lanes=0,t}function Lf(t,n,a){return Lr(n,t.child,null,a),t=Uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Tg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),qu(t.return,n,a)}function Nf(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function Ag(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=bn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,Ee(bn,y),Hn(t,n,o,a),o=zt?mo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,a,n);else if(t.tag===19)Tg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Fl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Nf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Fl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Nf(n,!0,a,null,d,o);break;case"together":Nf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=pa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=pa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function Py(t,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Xa(n,An,t.memoizedState.cache),Ar();break;case 27:case 5:Qe(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Eg(t,n,a):(ja(n),t=ya(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(os(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ag(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ee(bn,bn.current),o)break;return null;case 22:return n.lanes=0,_g(t,n,a,n.pendingProps);case 24:Xa(n,An,t.memoizedState.cache)}return ya(t,n,a)}function Rg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Cn=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return Cn=!1,Py(t,n,a);Cn=(t.flags&131072)!==0}else Cn=!1,zt&&(n.flags&1048576)!==0&&rm(n,mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Dr(n.elementType),n.type=t,typeof t=="function")Fu(t)?(o=Or(t,o),n.tag=1,n=Mg(null,n,t,o,a)):(n.tag=0,n=Rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=mg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=gg(null,n,t,o,a);break e}}throw n=ie(t)||t,Error(r(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Or(o,n.pendingProps),Mg(t,n,o,u,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,$u(t,n),bo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Xa(n,An,o),o!==d.cache&&Yu(n,[An],a,!0),Mo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=bg(t,n,o,a);break e}else if(o!==u){u=Ci(Error(r(424)),n),go(u),n=bg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(hn=Ni(t.firstChild),Fn=n,zt=!0,Va=null,Ui=!0,a=_m(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ar(),o===u){n=ya(t,n,a);break e}Hn(t,n,o,a)}n=n.child}return n;case 26:return Zl(t,n),t===null?(a=F0(n.type,null,n.pendingProps,null))?n.memoizedState=a:zt||(a=n.type,t=n.pendingProps,o=dc(ee.current).createElement(a),o[mt]=n,o[et]=t,Gn(o,a,t),mn(o),n.stateNode=o):n.memoizedState=F0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qe(n),t===null&&zt&&(o=n.stateNode=P0(n.type,n.pendingProps,ee.current),Fn=n,Ui=!0,u=hn,ir(n.type)?(hd=u,hn=Ni(o.firstChild)):hn=u),Hn(t,n,n.pendingProps.children,a),Zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&zt&&((u=o=hn)&&(o=fS(o,n.type,n.pendingProps,Ui),o!==null?(n.stateNode=o,Fn=n,hn=Ni(o.firstChild),Ui=!1,u=!0):u=!1),u||ka(n)),Qe(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,ld(u,d)?o=null:y!==null&&ld(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,Ay,null,null,a),ko._currentValue=u),Zl(t,n),Hn(t,n,o,a),n.child;case 6:return t===null&&zt&&((t=a=hn)&&(a=dS(a,n.pendingProps,Ui),a!==null?(n.stateNode=a,Fn=n,hn=null,t=!0):t=!1),t||ka(n)),null;case 13:return Eg(t,n,a);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Lr(n,null,o,a):Hn(t,n,o,a),n.child;case 11:return mg(t,n,n.type,n.pendingProps,a);case 7:return Hn(t,n,n.pendingProps,a),n.child;case 8:return Hn(t,n,n.pendingProps.children,a),n.child;case 12:return Hn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Xa(n,n.type,o.value),Hn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Cr(n),u=Bn(u),o=o(u),n.flags|=1,Hn(t,n,o,a),n.child;case 14:return gg(t,n,n.type,n.pendingProps,a);case 15:return vg(t,n,n.type,n.pendingProps,a);case 19:return Ag(t,n,a);case 31:return Oy(t,n,a);case 22:return _g(t,n,a,n.pendingProps);case 24:return Cr(n),o=Bn(An),t===null?(u=Ku(),u===null&&(u=dn,d=ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ju(n),Xa(n,An,u)):((t.lanes&a)!==0&&($u(t,n),bo(n,null,null,a),Mo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Xa(n,An,o)):(o=d.cache,Xa(n,An,o),o!==u.cache&&Yu(n,[An],a,!0))),Hn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Sa(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(e0())t.flags|=8192;else throw Ur=Ol,Qu}else t.flags&=-16777217}function Cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!k0(n))if(e0())t.flags|=8192;else throw Ur=Ol,Qu}function Ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Se():536870912,t.lanes|=n,xs|=n)}function wo(t,n){if(!zt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function pn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Iy(t,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(n),null;case 1:return pn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),va(An),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ss(n)?Sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),pn(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Sa(n),d!==null?(pn(n),Cg(n,d)):(pn(n),Pf(n,u,null,o,a))):d?d!==t.memoizedState?(Sa(n),pn(n),Cg(n,d)):(pn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Sa(n),pn(n),Pf(n,u,t,o,a)),null;case 27:if(Ye(n),a=ee.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return pn(n),null}t=Pe.current,ss(n)?om(n):(t=P0(u,o,a),n.stateNode=t,Sa(n))}return pn(n),null;case 5:if(Ye(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return pn(n),null}if(d=Pe.current,ss(n))om(n);else{var y=dc(ee.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[mt]=n,d[et]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Gn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Sa(n)}}return pn(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ee.current,ss(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||E0(t.nodeValue,a)),t||ka(n,!0)}else t=dc(t).createTextNode(o),t[mt]=n,n.stateNode=t}return pn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ss(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[mt]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),t=!1}else a=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(_i(n),n):(_i(n),null);if((n.flags&128)!==0)throw Error(r(558))}return pn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ss(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[mt]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;pn(n),u=!1}else u=Xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(_i(n),n):(_i(n),null)}return _i(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),pn(n),null);case 4:return He(),t===null&&id(n.stateNode.containerInfo),pn(n),null;case 10:return va(n.type),pn(n),null;case 19:if(Q(bn),o=n.memoizedState,o===null)return pn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)wo(o,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Fl(t),d!==null){for(n.flags|=128,wo(o,!1),t=d.updateQueue,n.updateQueue=t,Ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return Ee(bn,bn.current&1|2),zt&&ma(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ut()>nc&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Fl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ql(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!zt)return pn(n),null}else 2*Ut()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ut(),t.sibling=null,a=bn.current,Ee(bn,u?a&1|2:a&1),zt&&ma(n,o.treeForkCount),t):(pn(n),null);case 22:case 23:return _i(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(pn(n),n.subtreeFlags&6&&(n.flags|=8192)):pn(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(An),pn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function zy(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return va(An),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ye(n),null;case 31:if(n.memoizedState!==null){if(_i(n),n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(_i(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(bn),null;case 4:return He(),null;case 10:return va(n.type),null;case 22:case 23:return _i(n),af(),t!==null&&Q(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return va(An),null;case 25:return null;default:return null}}function wg(t,n){switch(Vu(n),n.tag){case 3:va(An),He();break;case 26:case 27:case 5:Ye(n);break;case 4:He();break;case 31:n.memoizedState!==null&&_i(n);break;case 13:_i(n);break;case 19:Q(bn);break;case 10:va(n.type);break;case 22:case 23:_i(n),af(),t!==null&&Q(wr);break;case 24:va(An)}}function Do(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){an(n,n.return,R)}}function Ka(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var k=a,le=R;try{le()}catch(be){an(u,k,be)}}}o=o.next}while(o!==d)}}catch(be){an(n,n.return,be)}}function Dg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ym(n,a)}catch(o){an(t,t.return,o)}}}function Ug(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){an(t,n,o)}}function Uo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){an(t,n,u)}}function ea(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){an(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){an(t,n,u)}else a.current=null}function Lg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){an(t,t.return,u)}}function If(t,n,a){try{var o=t.stateNode;rS(o,t.type,a,n),o[et]=n}catch(u){an(t,t.return,u)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ir(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ir(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=da));else if(o!==4&&(o===27&&ir(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ff(t,n,a),t=t.sibling;t!==null;)Ff(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ir(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function Og(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Gn(n,o,a),n[mt]=t,n[et]=a}catch(d){an(t,t.return,d)}}var Ma=!1,wn=!1,Bf=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,In=null;function Fy(t,n){if(t=t.containerInfo,sd=xc,t=Yp(t),Uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,R=-1,k=-1,le=0,be=0,we=t,de=null;t:for(;;){for(var me;we!==a||u!==0&&we.nodeType!==3||(R=y+u),we!==d||o!==0&&we.nodeType!==3||(k=y+o),we.nodeType===3&&(y+=we.nodeValue.length),(me=we.firstChild)!==null;)de=we,we=me;for(;;){if(we===t)break t;if(de===a&&++le===u&&(R=y),de===d&&++be===o&&(k=y),(me=we.nextSibling)!==null)break;we=de,de=we.parentNode}we=me}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:t,selectionRange:a},xc=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var $e=Or(a.type,u);t=o.getSnapshotBeforeUpdate($e,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(lt){an(a,a.return,lt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ud(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function Ig(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(t,a),o&4&&Do(5,a);break;case 1:if(Ea(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){an(a,a.return,y)}else{var u=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){an(a,a.return,y)}}o&64&&Dg(a),o&512&&Uo(a,a.return);break;case 3:if(Ea(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(t,n)}catch(y){an(a,a.return,y)}}break;case 27:n===null&&o&4&&Og(a);case 26:case 5:Ea(t,a),n===null&&o&4&&Lg(a),o&512&&Uo(a,a.return);break;case 12:Ea(t,a);break;case 31:Ea(t,a),o&4&&Bg(t,a);break;case 13:Ea(t,a),o&4&&Hg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Yy.bind(null,a),hS(t,a))));break;case 22:if(o=a.memoizedState!==null||Ma,!o){n=n!==null&&n.memoizedState!==null||wn,u=Ma;var d=wn;Ma=o,(wn=n)&&!d?Ta(t,a,(a.subtreeFlags&8772)!==0):Ea(t,a),Ma=u,wn=d}break;case 30:break;default:Ea(t,a)}}function zg(t){var n=t.alternate;n!==null&&(t.alternate=null,zg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ti(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _n=null,ri=!1;function ba(t,n,a){for(a=a.child;a!==null;)Fg(t,n,a),a=a.sibling}function Fg(t,n,a){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(xe,a)}catch{}switch(a.tag){case 26:wn||ea(a,n),ba(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:wn||ea(a,n);var o=_n,u=ri;ir(a.type)&&(_n=a.stateNode,ri=!1),ba(t,n,a),Ho(a.stateNode),_n=o,ri=u;break;case 5:wn||ea(a,n);case 6:if(o=_n,u=ri,_n=null,ba(t,n,a),_n=o,ri=u,_n!==null)if(ri)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(a.stateNode)}catch(d){an(a,n,d)}else try{_n.removeChild(a.stateNode)}catch(d){an(a,n,d)}break;case 18:_n!==null&&(ri?(t=_n,D0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Rs(t)):D0(_n,a.stateNode));break;case 4:o=_n,u=ri,_n=a.stateNode.containerInfo,ri=!0,ba(t,n,a),_n=o,ri=u;break;case 0:case 11:case 14:case 15:Ka(2,a,n),wn||Ka(4,a,n),ba(t,n,a);break;case 1:wn||(ea(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ug(a,n,o)),ba(t,n,a);break;case 21:ba(t,n,a);break;case 22:wn=(o=wn)||a.memoizedState!==null,ba(t,n,a),wn=o;break;default:ba(t,n,a)}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rs(t)}catch(a){an(n,n.return,a)}}}function Hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rs(t)}catch(a){an(n,n.return,a)}}function By(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Pg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Pg),n;default:throw Error(r(435,t.tag))}}function $l(t,n){var a=By(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=jy.bind(null,t,o);o.then(u,u)}})}function si(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(ir(R.type)){_n=R.stateNode,ri=!1;break e}break;case 5:_n=R.stateNode,ri=!1;break e;case 3:case 4:_n=R.stateNode.containerInfo,ri=!0;break e}R=R.return}if(_n===null)throw Error(r(160));Fg(d,y,u),_n=null,ri=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Gg(n,t),n=n.sibling}var ki=null;function Gg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(n,t),oi(t),o&4&&(Ka(3,t,t.return),Do(3,t),Ka(5,t,t.return));break;case 1:si(n,t),oi(t),o&512&&(wn||a===null||ea(a,a.return)),o&64&&Ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ki;if(si(n,t),oi(t),o&512&&(wn||a===null||ea(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[di]||d[mt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Gn(d,o,a),d[mt]=t,mn(d),o=d;break e;case"link":var y=G0("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}d=u.createElement(o),Gn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=G0("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}d=u.createElement(o),Gn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[mt]=t,mn(d),o=d}t.stateNode=o}else V0(u,t.type,t.stateNode);else t.stateNode=H0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?V0(u,t.type,t.stateNode):H0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,a.memoizedProps)}break;case 27:si(n,t),oi(t),o&512&&(wn||a===null||ea(a,a.return)),a!==null&&o&4&&If(t,t.memoizedProps,a.memoizedProps);break;case 5:if(si(n,t),oi(t),o&512&&(wn||a===null||ea(a,a.return)),t.flags&32){u=t.stateNode;try{pi(u,"")}catch($e){an(t,t.return,$e)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Bf=!0);break;case 6:if(si(n,t),oi(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch($e){an(t,t.return,$e)}}break;case 3:if(mc=null,u=ki,ki=hc(n.containerInfo),si(n,t),ki=u,oi(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Rs(n.containerInfo)}catch($e){an(t,t.return,$e)}Bf&&(Bf=!1,Vg(t));break;case 4:o=ki,ki=hc(t.stateNode.containerInfo),si(n,t),oi(t),ki=o;break;case 12:si(n,t),oi(t);break;case 31:si(n,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:si(n,t),oi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=Ut()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,le=Ma,be=wn;if(Ma=le||u,wn=be||k,si(n,t),wn=be,Ma=le,oi(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||Ma||wn||Pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=k.stateNode;var we=k.memoizedProps.style,de=we!=null&&we.hasOwnProperty("display")?we.display:null;R.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch($e){an(k,k.return,$e)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch($e){an(k,k.return,$e)}}}else if(n.tag===18){if(a===null){k=n;try{var me=k.stateNode;u?U0(me,!0):U0(k.stateNode,!1)}catch($e){an(k,k.return,$e)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:si(n,t),oi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:si(n,t),oi(t)}}function oi(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=zf(t);Jl(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(pi(y,""),a.flags&=-33);var R=zf(t);Jl(t,R,y);break;case 3:case 4:var k=a.stateNode.containerInfo,le=zf(t);Ff(t,le,k);break;default:throw Error(r(161))}}catch(be){an(t,t.return,be)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Vg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ig(t,n.alternate,n),n=n.sibling}function Pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ka(4,n,n.return),Pr(n);break;case 1:ea(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ug(n,n.return,a),Pr(n);break;case 27:Ho(n.stateNode);case 26:case 5:ea(n,n.return),Pr(n);break;case 22:n.memoizedState===null&&Pr(n);break;case 30:Pr(n);break;default:Pr(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ta(u,d,a),Do(4,d);break;case 1:if(Ta(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){an(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)xm(k[u],R)}catch(le){an(o,o.return,le)}}a&&y&64&&Dg(d),Uo(d,d.return);break;case 27:Og(d);case 26:case 5:Ta(u,d,a),a&&o===null&&y&4&&Lg(d),Uo(d,d.return);break;case 12:Ta(u,d,a);break;case 31:Ta(u,d,a),a&&y&4&&Bg(u,d);break;case 13:Ta(u,d,a),a&&y&4&&Hg(u,d);break;case 22:d.memoizedState===null&&Ta(u,d,a),Uo(d,d.return);break;case 30:break;default:Ta(u,d,a)}n=n.sibling}}function Hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&vo(a))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t))}function Xi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)kg(t,n,a,o),n=n.sibling}function kg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(t,n,a,o),u&2048&&Do(9,n);break;case 1:Xi(t,n,a,o);break;case 3:Xi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t)));break;case 12:if(u&2048){Xi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){an(n,n.return,k)}}else Xi(t,n,a,o);break;case 31:Xi(t,n,a,o);break;case 13:Xi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Xi(t,n,a,o):Lo(t,n):d._visibility&2?Xi(t,n,a,o):(d._visibility|=2,gs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(y,n);break;case 24:Xi(t,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Xi(t,n,a,o)}}function gs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,R=a,k=o,le=y.flags;switch(y.tag){case 0:case 11:case 15:gs(d,y,R,k,u),Do(8,y);break;case 23:break;case 22:var be=y.stateNode;y.memoizedState!==null?be._visibility&2?gs(d,y,R,k,u):Lo(d,y):(be._visibility|=2,gs(d,y,R,k,u)),u&&le&2048&&Hf(y.alternate,y);break;case 24:gs(d,y,R,k,u),u&&le&2048&&Gf(y.alternate,y);break;default:gs(d,y,R,k,u)}n=n.sibling}}function Lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Gf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var No=8192;function vs(t,n,a){if(t.subtreeFlags&No)for(t=t.child;t!==null;)Xg(t,n,a),t=t.sibling}function Xg(t,n,a){switch(t.tag){case 26:vs(t,n,a),t.flags&No&&t.memoizedState!==null&&TS(a,ki,t.memoizedState,t.memoizedProps);break;case 5:vs(t,n,a);break;case 3:case 4:var o=ki;ki=hc(t.stateNode.containerInfo),vs(t,n,a),ki=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,vs(t,n,a),No=o):vs(t,n,a));break;default:vs(t,n,a)}}function Wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Yg(o,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qg(t),t=t.sibling}function qg(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&Ka(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):Oo(t);break;default:Oo(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,Yg(o,t)}Wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ka(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function Yg(t,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:Ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,In=o;else e:for(a=t;In!==null;){o=In;var u=o.sibling,d=o.return;if(zg(o),o===a){In=null;break e}if(u!==null){u.return=d,In=u;break e}In=d}}}var Hy={getCacheForType:function(t){var n=Bn(An),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Bn(An).controller.signal}},Gy=typeof WeakMap=="function"?WeakMap:Map,Kt=0,dn=null,Ct=null,Lt=0,nn=0,xi=null,Qa=!1,_s=!1,Vf=!1,Aa=0,Sn=0,Ja=0,Ir=0,kf=0,yi=0,xs=0,Po=null,li=null,Xf=!1,tc=0,jg=0,nc=1/0,ic=null,$a=null,Nn=0,er=null,ys=null,Ra=0,Wf=0,qf=null,Zg=null,Io=0,Yf=null;function Si(){return(Kt&2)!==0&&Lt!==0?Lt&-Lt:B.T!==null?$f():Tt()}function Kg(){if(yi===0)if((Lt&536870912)===0||zt){var t=ne;ne<<=1,(ne&3932160)===0&&(ne=262144),yi=t}else yi=536870912;return t=vi.current,t!==null&&(t.flags|=32),yi}function ci(t,n,a){(t===dn&&(nn===2||nn===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),tr(t,Lt,yi,!1)),Ne(t,a),((Kt&2)===0||t!==dn)&&(t===dn&&((Kt&2)===0&&(Ir|=a),Sn===4&&tr(t,Lt,yi,!1)),ta(t))}function Qg(t,n,a){if((Kt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?Xy(t,n):Zf(t,n,!0),d=o;do{if(u===0){_s&&!o&&tr(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Vy(a)){u=Zf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Po;var k=R.current.memoizedState.isDehydrated;if(k&&(Ss(R,y).flags|=256),y=Zf(R,y,!1),y!==2){if(Vf&&!k){R.errorRecoveryDisabledLanes|=d,Ir|=d,u=4;break e}d=li,li=u,d!==null&&(li===null?li=d:li.push.apply(li,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Ss(t,0),tr(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:tr(o,n,yi,!Qa);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=tc+300-Ut(),10<u)){if(tr(o,n,yi,!Qa),ue(o,0,!0)!==0)break e;Ra=n,o.timeoutHandle=C0(Jg.bind(null,o,a,li,ic,Xf,n,yi,Ir,xs,Qa,d,"Throttled",-0,0),u);break e}Jg(o,a,li,ic,Xf,n,yi,Ir,xs,Qa,d,null,-0,0)}}break}while(!0);ta(t)}function Jg(t,n,a,o,u,d,y,R,k,le,be,we,de,me){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Xg(n,d,we);var $e=(d&62914560)===d?tc-Ut():(d&4194048)===d?jg-Ut():0;if($e=AS(we,$e),$e!==null){Ra=d,t.cancelPendingCommit=$e(s0.bind(null,t,n,d,a,o,u,y,R,k,be,we,null,de,me)),tr(t,d,y,!le);return}}s0(t,n,d,a,o,u,y,R,k)}function Vy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!mi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tr(t,n,a,o){n&=~kf,n&=~Ir,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-We(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&ft(t,a,n)}function ac(){return(Kt&6)===0?(zo(0),!1):!0}function jf(){if(Ct!==null){if(nn===0)var t=Ct.return;else t=Ct,ga=Rr=null,uf(t),fs=null,xo=0,t=Ct;for(;t!==null;)wg(t.alternate,t),t=t.return;Ct=null}}function Ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,lS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ra=0,jf(),dn=t,Ct=a=pa(t.current,null),Lt=n,nn=0,xi=null,Qa=!1,_s=Ce(t,n),Vf=!1,xs=yi=kf=Ir=Ja=Sn=0,li=Po=null,Xf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-We(o),d=1<<u;n|=t[u],o&=~d}return Aa=n,Tl(),a}function $g(t,n){vt=null,B.H=Ro,n===us||n===Nl?(n=mm(),nn=3):n===Qu?(n=mm(),nn=4):nn=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,xi=n,Ct===null&&(Sn=1,Yl(t,Ci(n,t.current)))}function e0(){var t=vi.current;return t===null?!0:(Lt&4194048)===Lt?Li===null:(Lt&62914560)===Lt||(Lt&536870912)!==0?t===Li:!1}function t0(){var t=B.H;return B.H=Ro,t===null?Ro:t}function n0(){var t=B.A;return B.A=Hy,t}function rc(){Sn=4,Qa||(Lt&4194048)!==Lt&&vi.current!==null||(_s=!0),(Ja&134217727)===0&&(Ir&134217727)===0||dn===null||tr(dn,Lt,yi,!1)}function Zf(t,n,a){var o=Kt;Kt|=2;var u=t0(),d=n0();(dn!==t||Lt!==n)&&(ic=null,Ss(t,n)),n=!1;var y=Sn;e:do try{if(nn!==0&&Ct!==null){var R=Ct,k=xi;switch(nn){case 8:jf(),y=6;break e;case 3:case 2:case 9:case 6:vi.current===null&&(n=!0);var le=nn;if(nn=0,xi=null,Ms(t,R,k,le),a&&_s){y=0;break e}break;default:le=nn,nn=0,xi=null,Ms(t,R,k,le)}}ky(),y=Sn;break}catch(be){$g(t,be)}while(!0);return n&&t.shellSuspendCounter++,ga=Rr=null,Kt=o,B.H=u,B.A=d,Ct===null&&(dn=null,Lt=0,Tl()),y}function ky(){for(;Ct!==null;)i0(Ct)}function Xy(t,n){var a=Kt;Kt|=2;var o=t0(),u=n0();dn!==t||Lt!==n?(ic=null,nc=Ut()+500,Ss(t,n)):_s=Ce(t,n);e:do try{if(nn!==0&&Ct!==null){n=Ct;var d=xi;t:switch(nn){case 1:nn=0,xi=null,Ms(t,n,d,1);break;case 2:case 9:if(hm(d)){nn=0,xi=null,a0(n);break}n=function(){nn!==2&&nn!==9||dn!==t||(nn=7),ta(t)},d.then(n,n);break e;case 3:nn=7;break e;case 4:nn=5;break e;case 7:hm(d)?(nn=0,xi=null,a0(n)):(nn=0,xi=null,Ms(t,n,d,7));break;case 5:var y=null;switch(Ct.tag){case 26:y=Ct.memoizedState;case 5:case 27:var R=Ct;if(y?k0(y):R.stateNode.complete){nn=0,xi=null;var k=R.sibling;if(k!==null)Ct=k;else{var le=R.return;le!==null?(Ct=le,sc(le)):Ct=null}break t}}nn=0,xi=null,Ms(t,n,d,5);break;case 6:nn=0,xi=null,Ms(t,n,d,6);break;case 8:jf(),Sn=6;break e;default:throw Error(r(462))}}Wy();break}catch(be){$g(t,be)}while(!0);return ga=Rr=null,B.H=o,B.A=u,Kt=a,Ct!==null?0:(dn=null,Lt=0,Tl(),Sn)}function Wy(){for(;Ct!==null&&!Ht();)i0(Ct)}function i0(t){var n=Rg(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?sc(t):Ct=n}function a0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Sg(a,n,n.pendingProps,n.type,void 0,Lt);break;case 11:n=Sg(a,n,n.pendingProps,n.type.render,n.ref,Lt);break;case 5:uf(n);default:wg(a,n),n=Ct=nm(n,Aa),n=Rg(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?sc(t):Ct=n}function Ms(t,n,a,o){ga=Rr=null,uf(n),fs=null,xo=0;var u=n.return;try{if(Ny(t,u,n,a,Lt)){Sn=1,Yl(t,Ci(a,t.current)),Ct=null;return}}catch(d){if(u!==null)throw Ct=u,d;Sn=1,Yl(t,Ci(a,t.current)),Ct=null;return}n.flags&32768?(zt||o===1?t=!0:_s||(Lt&536870912)!==0?t=!1:(Qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=vi.current,o!==null&&o.tag===13&&(o.flags|=16384))),r0(n,t)):sc(n)}function sc(t){var n=t;do{if((n.flags&32768)!==0){r0(n,Qa);return}t=n.return;var a=Iy(n.alternate,n,Aa);if(a!==null){Ct=a;return}if(n=n.sibling,n!==null){Ct=n;return}Ct=n=t}while(n!==null);Sn===0&&(Sn=5)}function r0(t,n){do{var a=zy(t.alternate,t);if(a!==null){a.flags&=32767,Ct=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ct=t;return}Ct=t=a}while(t!==null);Sn=6,Ct=null}function s0(t,n,a,o,u,d,y,R,k){t.cancelPendingCommit=null;do oc();while(Nn!==0);if((Kt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Iu,it(t,a,d,y,R,k),t===dn&&(Ct=dn=null,Lt=0),ys=n,er=t,Ra=a,Wf=d,qf=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Zy(Z,function(){return f0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=V.p,V.p=2,y=Kt,Kt|=4;try{Fy(t,n,a)}finally{Kt=y,V.p=u,B.T=o}}Nn=1,o0(),l0(),c0()}}function o0(){if(Nn===1){Nn=0;var t=er,n=ys,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=V.p;V.p=2;var u=Kt;Kt|=4;try{Gg(n,t);var d=od,y=Yp(t.containerInfo),R=d.focusedElem,k=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&qp(R.ownerDocument.documentElement,R)){if(k!==null&&Uu(R)){var le=k.start,be=k.end;if(be===void 0&&(be=le),"selectionStart"in R)R.selectionStart=le,R.selectionEnd=Math.min(be,R.value.length);else{var we=R.ownerDocument||document,de=we&&we.defaultView||window;if(de.getSelection){var me=de.getSelection(),$e=R.textContent.length,lt=Math.min(k.start,$e),ln=k.end===void 0?lt:Math.min(k.end,$e);!me.extend&&lt>ln&&(y=ln,ln=lt,lt=y);var $=Wp(R,lt),W=Wp(R,ln);if($&&W&&(me.rangeCount!==1||me.anchorNode!==$.node||me.anchorOffset!==$.offset||me.focusNode!==W.node||me.focusOffset!==W.offset)){var oe=we.createRange();oe.setStart($.node,$.offset),me.removeAllRanges(),lt>ln?(me.addRange(oe),me.extend(W.node,W.offset)):(oe.setEnd(W.node,W.offset),me.addRange(oe))}}}}for(we=[],me=R;me=me.parentNode;)me.nodeType===1&&we.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<we.length;R++){var Te=we[R];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}xc=!!sd,od=sd=null}finally{Kt=u,V.p=o,B.T=a}}t.current=n,Nn=2}}function l0(){if(Nn===2){Nn=0;var t=er,n=ys,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=V.p;V.p=2;var u=Kt;Kt|=4;try{Ig(t,n.alternate,n)}finally{Kt=u,V.p=o,B.T=a}}Nn=3}}function c0(){if(Nn===4||Nn===3){Nn=0,j();var t=er,n=ys,a=Ra,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Nn=5:(Nn=0,ys=er=null,u0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&($a=null),Fe(a),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(xe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=V.p,V.p=2,B.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];d(R.value,{componentStack:R.stack})}}finally{B.T=n,V.p=u}}(Ra&3)!==0&&oc(),ta(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Yf?Io++:(Io=0,Yf=t):Io=0,zo(0)}}function u0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,vo(n)))}function oc(){return o0(),l0(),c0(),f0()}function f0(){if(Nn!==5)return!1;var t=er,n=Wf;Wf=0;var a=Fe(Ra),o=B.T,u=V.p;try{V.p=32>a?32:a,B.T=null,a=qf,qf=null;var d=er,y=Ra;if(Nn=0,ys=er=null,Ra=0,(Kt&6)!==0)throw Error(r(331));var R=Kt;if(Kt|=4,qg(d.current),kg(d,d.current,y,a),Kt=R,zo(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(xe,d)}catch{}return!0}finally{V.p=u,B.T=o,u0(t,n)}}function d0(t,n,a){n=Ci(a,n),n=Tf(t.stateNode,n,2),t=Ya(t,n,2),t!==null&&(Ne(t,2),ta(t))}function an(t,n,a){if(t.tag===3)d0(t,t,a);else for(;n!==null;){if(n.tag===3){d0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&($a===null||!$a.has(o))){t=Ci(a,t),a=hg(2),o=Ya(n,a,2),o!==null&&(pg(a,o,n,t),Ne(o,2),ta(o));break}}n=n.return}}function Kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Gy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),t=qy.bind(null,t,n,a),n.then(t,t))}function qy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,dn===t&&(Lt&a)===a&&(Sn===4||Sn===3&&(Lt&62914560)===Lt&&300>Ut()-tc?(Kt&2)===0&&Ss(t,0):kf|=a,xs===Lt&&(xs=0)),ta(t)}function h0(t,n){n===0&&(n=Se()),t=Er(t,n),t!==null&&(Ne(t,n),ta(t))}function Yy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),h0(t,a)}function jy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),h0(t,a)}function Zy(t,n){return Vt(t,n)}var lc=null,bs=null,Qf=!1,cc=!1,Jf=!1,nr=0;function ta(t){t!==bs&&t.next===null&&(bs===null?lc=bs=t:bs=bs.next=t),cc=!0,Qf||(Qf=!0,Qy())}function zo(t,n){if(!Jf&&cc){Jf=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-We(42|t)+1)-1,d&=u&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,v0(o,d))}else d=Lt,d=ue(o,o===dn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ce(o,d)||(a=!0,v0(o,d));o=o.next}while(a);Jf=!1}}function Ky(){p0()}function p0(){cc=Qf=!1;var t=0;nr!==0&&oS()&&(t=nr);for(var n=Ut(),a=null,o=lc;o!==null;){var u=o.next,d=m0(o,n);d===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(bs=a)):(a=o,(t!==0||(d&3)!==0)&&(cc=!0)),o=u}Nn!==0&&Nn!==5||zo(t),nr!==0&&(nr=0)}function m0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-We(d),R=1<<y,k=u[y];k===-1?((R&a)===0||(R&o)!==0)&&(u[y]=Le(R,n)):k<=n&&(t.expiredLanes|=R),d&=~R}if(n=dn,a=Lt,a=ue(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(nn===2||nn===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&St(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&St(o),Fe(a)){case 2:case 8:a=b;break;case 32:a=Z;break;case 268435456:a=ve;break;default:a=Z}return o=g0.bind(null,t),a=Vt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&St(o),t.callbackPriority=2,t.callbackNode=null,2}function g0(t,n){if(Nn!==0&&Nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=Lt;return o=ue(t,t===dn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Qg(t,o,n),m0(t,Ut()),t.callbackNode!=null&&t.callbackNode===a?g0.bind(null,t):null)}function v0(t,n){if(oc())return null;Qg(t,n,!0)}function Qy(){cS(function(){(Kt&6)!==0?Vt(N,Ky):p0()})}function $f(){if(nr===0){var t=ls;t===0&&(t=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),nr=t}return nr}function _0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yr(""+t)}function x0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Jy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=_0((u[et]||null).action),y=o.submitter;y&&(n=(n=y[et]||null)?_0(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var R=new Sl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(nr!==0){var k=y?x0(u,y):new FormData(u);xf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(R.preventDefault(),k=y?x0(u,y):new FormData(u),xf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],$y=td.toLowerCase(),eS=td[0].toUpperCase()+td.slice(1);Vi($y,"on"+eS)}Vi(Kp,"onAnimationEnd"),Vi(Qp,"onAnimationIteration"),Vi(Jp,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(gy,"onTransitionRun"),Vi(vy,"onTransitionStart"),Vi(_y,"onTransitionCancel"),Vi($p,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function y0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],k=R.instance,le=R.currentTarget;if(R=R.listener,k!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(be){El(be)}u.currentTarget=null,d=k}else for(y=0;y<o.length;y++){if(R=o[y],k=R.instance,le=R.currentTarget,R=R.listener,k!==d&&u.isPropagationStopped())break e;d=R,u.currentTarget=le;try{d(u)}catch(be){El(be)}u.currentTarget=null,d=k}}}}function wt(t,n){var a=n[ot];a===void 0&&(a=n[ot]=new Set);var o=t+"__bubble";a.has(o)||(S0(n,t,2,!1),a.add(o))}function nd(t,n,a){var o=0;n&&(o|=4),S0(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[uc]){t[uc]=!0,Ki.forEach(function(a){a!=="selectionchange"&&(tS.has(a)||nd(a,!1,t),nd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,nd("selectionchange",!1,n))}}function S0(t,n,a,o){switch(K0(n)){case 2:var u=wS;break;case 8:u=DS;break;default:u=_d}a=u.bind(null,n,a,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ad(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=ni(R),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){o=d=y;continue e}R=R.parentNode}}o=o.return}Ap(function(){var le=d,be=yu(a),we=[];e:{var de=em.get(t);if(de!==void 0){var me=Sl,$e=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":me=jx;break;case"focusin":$e="focus",me=Au;break;case"focusout":$e="blur",me=Au;break;case"beforeblur":case"afterblur":me=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=Qx;break;case Kp:case Qp:case Jp:me=Bx;break;case $p:me=$x;break;case"scroll":case"scrollend":me=Ox;break;case"wheel":me=ty;break;case"copy":case"cut":case"paste":me=Gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Up;break;case"toggle":case"beforetoggle":me=iy}var lt=(n&4)!==0,ln=!lt&&(t==="scroll"||t==="scrollend"),$=lt?de!==null?de+"Capture":null:de;lt=[];for(var W=le,oe;W!==null;){var Te=W;if(oe=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||oe===null||$===null||(Te=ro(W,$),Te!=null&&lt.push(Bo(W,Te,oe))),ln)break;W=W.return}0<lt.length&&(de=new me(de,$e,null,a,be),we.push({event:de,listeners:lt}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",me=t==="mouseout"||t==="pointerout",de&&a!==xu&&($e=a.relatedTarget||a.fromElement)&&(ni($e)||$e[st]))break e;if((me||de)&&(de=be.window===be?be:(de=be.ownerDocument)?de.defaultView||de.parentWindow:window,me?($e=a.relatedTarget||a.toElement,me=le,$e=$e?ni($e):null,$e!==null&&(ln=c($e),lt=$e.tag,$e!==ln||lt!==5&&lt!==27&&lt!==6)&&($e=null)):(me=null,$e=le),me!==$e)){if(lt=wp,Te="onMouseLeave",$="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(lt=Up,Te="onPointerLeave",$="onPointerEnter",W="pointer"),ln=me==null?de:Ti(me),oe=$e==null?de:Ti($e),de=new lt(Te,W+"leave",me,a,be),de.target=ln,de.relatedTarget=oe,Te=null,ni(be)===le&&(lt=new lt($,W+"enter",$e,a,be),lt.target=oe,lt.relatedTarget=ln,Te=lt),ln=Te,me&&$e)t:{for(lt=nS,$=me,W=$e,oe=0,Te=$;Te;Te=lt(Te))oe++;Te=0;for(var rt=W;rt;rt=lt(rt))Te++;for(;0<oe-Te;)$=lt($),oe--;for(;0<Te-oe;)W=lt(W),Te--;for(;oe--;){if($===W||W!==null&&$===W.alternate){lt=$;break t}$=lt($),W=lt(W)}lt=null}else lt=null;me!==null&&M0(we,de,me,lt,!1),$e!==null&&ln!==null&&M0(we,ln,$e,lt,!0)}}e:{if(de=le?Ti(le):window,me=de.nodeName&&de.nodeName.toLowerCase(),me==="select"||me==="input"&&de.type==="file")var qt=Bp;else if(zp(de))if(Hp)qt=hy;else{qt=fy;var tt=uy}else me=de.nodeName,!me||me.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?le&&Jt(le.elementType)&&(qt=Bp):qt=dy;if(qt&&(qt=qt(t,le))){Fp(we,qt,a,be);break e}tt&&tt(t,de,le),t==="focusout"&&le&&de.type==="number"&&le.memoizedProps.value!=null&&Rt(de,"number",de.value)}switch(tt=le?Ti(le):window,t){case"focusin":(zp(tt)||tt.contentEditable==="true")&&(es=tt,Lu=le,po=null);break;case"focusout":po=Lu=es=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,jp(we,a,be);break;case"selectionchange":if(my)break;case"keydown":case"keyup":jp(we,a,be)}var yt;if(Cu)e:{switch(t){case"compositionstart":var Nt="onCompositionStart";break e;case"compositionend":Nt="onCompositionEnd";break e;case"compositionupdate":Nt="onCompositionUpdate";break e}Nt=void 0}else $r?Pp(t,a)&&(Nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Nt="onCompositionStart");Nt&&(Lp&&a.locale!=="ko"&&($r||Nt!=="onCompositionStart"?Nt==="onCompositionEnd"&&$r&&(yt=Rp()):(Ha=be,bu="value"in Ha?Ha.value:Ha.textContent,$r=!0)),tt=fc(le,Nt),0<tt.length&&(Nt=new Dp(Nt,t,null,a,be),we.push({event:Nt,listeners:tt}),yt?Nt.data=yt:(yt=Ip(a),yt!==null&&(Nt.data=yt)))),(yt=ry?sy(t,a):oy(t,a))&&(Nt=fc(le,"onBeforeInput"),0<Nt.length&&(tt=new Dp("onBeforeInput","beforeinput",null,a,be),we.push({event:tt,listeners:Nt}),tt.data=yt)),Jy(we,t,le,a,be)}y0(we,n)})}function Bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ro(t,a),u!=null&&o.unshift(Bo(t,u,d)),u=ro(t,n),u!=null&&o.push(Bo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function nS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function M0(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var R=a,k=R.alternate,le=R.stateNode;if(R=R.tag,k!==null&&k===o)break;R!==5&&R!==26&&R!==27||le===null||(k=le,u?(le=ro(a,d),le!=null&&y.unshift(Bo(a,le,k))):u||(le=ro(a,d),le!=null&&y.push(Bo(a,le,k)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var iS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function b0(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(aS,"")}function E0(t,n){return n=b0(n),b0(t)===n}function on(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pi(t,""+o);break;case"className":Je(t,"class",o);break;case"tabIndex":Je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,a,o);break;case"style":Gi(t,o,d);break;case"data":if(n!=="object"){Je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&on(t,n,"name",u.name,u,null),on(t,n,"formEncType",u.formEncType,u,null),on(t,n,"formMethod",u.formMethod,u,null),on(t,n,"formTarget",u.formTarget,u,null)):(on(t,n,"encType",u.encType,u,null),on(t,n,"method",u.method,u,null),on(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=da);break;case"onScroll":o!=null&&wt("scroll",t);break;case"onScrollEnd":o!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=yr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":wt("beforetoggle",t),wt("toggle",t),ke(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qi.get(a)||a,ke(t,a,o))}}function rd(t,n,a,o,u,d){switch(a){case"style":Gi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pi(t,o):(typeof o=="number"||typeof o=="bigint")&&pi(t,""+o);break;case"onScroll":o!=null&&wt("scroll",t);break;case"onScrollEnd":o!=null&&wt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[et]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ke(t,a,o)}}}function Gn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:on(t,n,d,y,a,null)}}u&&on(t,n,"srcSet",a.srcSet,a,null),o&&on(t,n,"src",a.src,a,null);return;case"input":wt("invalid",t);var R=d=y=u=null,k=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var be=a[o];if(be!=null)switch(o){case"name":u=be;break;case"type":y=be;break;case"checked":k=be;break;case"defaultChecked":le=be;break;case"value":d=be;break;case"defaultValue":R=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(r(137,n));break;default:on(t,n,o,be,a,null)}}Xn(t,d,R,k,le,y,u,!1);return;case"select":wt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:on(t,n,u,R,a,null)}n=d,a=y,t.multiple=!!o,n!=null?Ln(t,!!o,n,!1):a!=null&&Ln(t,!!o,a,!0);return;case"textarea":wt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:on(t,n,y,R,a,null)}Hi(t,o,u,d);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:on(t,n,k,o,a,null)}return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(o=0;o<Fo.length;o++)wt(Fo[o],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:on(t,n,le,o,a,null)}return;default:if(Jt(n)){for(be in a)a.hasOwnProperty(be)&&(o=a[be],o!==void 0&&rd(t,n,be,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&on(t,n,R,o,a,null))}function rS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,R=null,k=null,le=null,be=null;for(me in a){var we=a[me];if(a.hasOwnProperty(me)&&we!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":k=we;default:o.hasOwnProperty(me)||on(t,n,me,null,o,we)}}for(var de in o){var me=o[de];if(we=a[de],o.hasOwnProperty(de)&&(me!=null||we!=null))switch(de){case"type":d=me;break;case"name":u=me;break;case"checked":le=me;break;case"defaultChecked":be=me;break;case"value":y=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:me!==we&&on(t,n,de,me,o,we)}}Ze(t,y,R,k,le,be,d,u);return;case"select":me=y=R=de=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":me=k;default:o.hasOwnProperty(d)||on(t,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":de=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==k&&on(t,n,u,d,o,k)}n=R,a=y,o=me,de!=null?Ln(t,!!a,de,!1):!!o!=!!a&&(n!=null?Ln(t,!!a,n,!0):Ln(t,!!a,a?[]:"",!1));return;case"textarea":me=de=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:on(t,n,R,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":de=u;break;case"defaultValue":me=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&on(t,n,y,u,o,d)}hi(t,de,me);return;case"option":for(var $e in a)if(de=a[$e],a.hasOwnProperty($e)&&de!=null&&!o.hasOwnProperty($e))switch($e){case"selected":t.selected=!1;break;default:on(t,n,$e,null,o,de)}for(k in o)if(de=o[k],me=a[k],o.hasOwnProperty(k)&&de!==me&&(de!=null||me!=null))switch(k){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:on(t,n,k,de,o,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in a)de=a[lt],a.hasOwnProperty(lt)&&de!=null&&!o.hasOwnProperty(lt)&&on(t,n,lt,null,o,de);for(le in o)if(de=o[le],me=a[le],o.hasOwnProperty(le)&&de!==me&&(de!=null||me!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:on(t,n,le,de,o,me)}return;default:if(Jt(n)){for(var ln in a)de=a[ln],a.hasOwnProperty(ln)&&de!==void 0&&!o.hasOwnProperty(ln)&&rd(t,n,ln,void 0,o,de);for(be in o)de=o[be],me=a[be],!o.hasOwnProperty(be)||de===me||de===void 0&&me===void 0||rd(t,n,be,de,o,me);return}}for(var $ in a)de=a[$],a.hasOwnProperty($)&&de!=null&&!o.hasOwnProperty($)&&on(t,n,$,null,o,de);for(we in o)de=o[we],me=a[we],!o.hasOwnProperty(we)||de===me||de==null&&me==null||on(t,n,we,de,o,me)}function T0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,R=u.duration;if(d&&R&&T0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],le=k.startTime;if(le>R)break;var be=k.transferSize,we=k.initiatorType;be&&T0(we)&&(k=k.responseEnd,y+=be*(k<R?1:(R-le)/(k-le)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,od=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function A0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function oS(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(uS)}:C0;function uS(t){setTimeout(function(){throw t})}function ir(t){return t==="head"}function D0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Rs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ho(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ho(a);for(var d=a.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[di]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Ho(t.ownerDocument.body);a=u}while(a);Rs(n)}function U0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),ti(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function fS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[di])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ni(t.nextSibling),t===null)break}return null}function dS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ni(t.nextSibling),t===null))return null;return t}function L0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ni(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ni(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function N0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ni(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function O0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function P0(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ti(t)}var Oi=new Map,I0=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=V.d;V.d={f:pS,r:mS,D:gS,C:vS,L:_S,m:xS,X:SS,S:yS,M:MS};function pS(){var t=Ca.f(),n=ac();return t||n}function mS(t){var n=ii(t);n!==null&&n.tag===5&&n.type==="form"?$m(n):Ca.r(t)}var Es=typeof document>"u"?null:document;function z0(t,n,a){var o=Es;if(o&&typeof n=="string"&&n){var u=en(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),I0.has(u)||(I0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Gn(n,"link",t),mn(n),o.head.appendChild(n)))}}function gS(t){Ca.D(t),z0("dns-prefetch",t,null)}function vS(t,n){Ca.C(t,n),z0("preconnect",t,n)}function _S(t,n,a){Ca.L(t,n,a);var o=Es;if(o&&t&&n){var u='link[rel="preload"][as="'+en(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+en(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+en(a.imageSizes)+'"]')):u+='[href="'+en(t)+'"]';var d=u;switch(n){case"style":d=Ts(t);break;case"script":d=As(t)}Oi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Oi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(d))||n==="script"&&o.querySelector(Vo(d))||(n=o.createElement("link"),Gn(n,"link",t),mn(n),o.head.appendChild(n)))}}function xS(t,n){Ca.m(t,n);var a=Es;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+en(o)+'"][href="'+en(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=As(t)}if(!Oi.has(d)&&(t=_({rel:"modulepreload",href:t},n),Oi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vo(d)))return}o=a.createElement("link"),Gn(o,"link",t),mn(o),a.head.appendChild(o)}}}function yS(t,n,a){Ca.S(t,n,a);var o=Es;if(o&&t){var u=Ai(o).hoistableStyles,d=Ts(t);n=n||"default";var y=u.get(d);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(Go(d)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Oi.get(d))&&pd(t,a);var k=y=o.createElement("link");mn(k),Gn(k,"link",t),k._p=new Promise(function(le,be){k.onload=le,k.onerror=be}),k.addEventListener("load",function(){R.loading|=1}),k.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(d,y)}}}function SS(t,n){Ca.X(t,n);var a=Es;if(a&&t){var o=Ai(a).hoistableScripts,u=As(t),d=o.get(u);d||(d=a.querySelector(Vo(u)),d||(t=_({src:t,async:!0},n),(n=Oi.get(u))&&md(t,n),d=a.createElement("script"),mn(d),Gn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function MS(t,n){Ca.M(t,n);var a=Es;if(a&&t){var o=Ai(a).hoistableScripts,u=As(t),d=o.get(u);d||(d=a.querySelector(Vo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=Oi.get(u))&&md(t,n),d=a.createElement("script"),mn(d),Gn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function F0(t,n,a,o){var u=(u=ee.current)?hc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ts(a.href),a=Ai(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ts(a.href);var d=Ai(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(Go(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Oi.set(t,a),d||bS(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=As(a),a=Ai(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ts(t){return'href="'+en(t)+'"'}function Go(t){return'link[rel="stylesheet"]['+t+"]"}function B0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function bS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Gn(n,"link",a),mn(n),t.head.appendChild(n))}function As(t){return'[src="'+en(t)+'"]'}function Vo(t){return"script[async]"+t}function H0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+en(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mn(o),Gn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ts(a.href);var d=t.querySelector(Go(u));if(d)return n.state.loading|=4,n.instance=d,mn(d),d;o=B0(a),(u=Oi.get(u))&&pd(o,u),d=(t.ownerDocument||t).createElement("link"),mn(d);var y=d;return y._p=new Promise(function(R,k){y.onload=R,y.onerror=k}),Gn(d,"link",o),n.state.loading|=4,pc(d,a.precedence,t),n.instance=d;case"script":return d=As(a.src),(u=t.querySelector(Vo(d)))?(n.instance=u,mn(u),u):(o=a,(u=Oi.get(d))&&(o=_({},a),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),mn(u),Gn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function G0(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[di]||d[mt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(d):o.set(y,[d])}}return o}function V0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ES(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function k0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function TS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ts(o.href),d=n.querySelector(Go(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,mn(d);return}d=n.ownerDocument||n,o=B0(o),(u=Oi.get(u))&&pd(o,u),d=d.createElement("link"),mn(d);var y=d;y._p=new Promise(function(R,k){y.onload=R,y.onerror=k}),Gn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function AS(t,n){return t.stylesheets&&t.count===0&&_c(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*sS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function _c(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,n.forEach(RS,t),vc=null,gc.call(t))}function RS(t,n){if(!(n.state.loading&4)){var a=vc.get(t);if(a)var o=a.get(null);else{a=new Map,vc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ko={$$typeof:H,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function CS(t,n,a,o,u,d,y,R,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.hiddenUpdates=Be(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function X0(t,n,a,o,u,d,y,R,k,le,be,we){return t=new CS(t,n,a,y,k,le,be,we,R),n=1,d===!0&&(n|=24),d=gi(3,null,null,n),t.current=d,d.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ju(d),t}function W0(t){return t?(t=is,t):is}function q0(t,n,a,o,u,d){u=W0(u),o.context===null?o.context=u:o.pendingContext=u,o=qa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ya(t,o,n),a!==null&&(ci(a,t,n),So(a,t,n))}function Y0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vd(t,n){Y0(t,n),(t=t.alternate)&&Y0(t,n)}function j0(t){if(t.tag===13||t.tag===31){var n=Er(t,67108864);n!==null&&ci(n,t,67108864),vd(t,67108864)}}function Z0(t){if(t.tag===13||t.tag===31){var n=Si();n=cn(n);var a=Er(t,n);a!==null&&ci(a,t,n),vd(t,n)}}var xc=!0;function wS(t,n,a,o){var u=B.T;B.T=null;var d=V.p;try{V.p=2,_d(t,n,a,o)}finally{V.p=d,B.T=u}}function DS(t,n,a,o){var u=B.T;B.T=null;var d=V.p;try{V.p=8,_d(t,n,a,o)}finally{V.p=d,B.T=u}}function _d(t,n,a,o){if(xc){var u=xd(o);if(u===null)ad(t,n,o,yc,a),Q0(t,o);else if(LS(u,t,n,a,o))o.stopPropagation();else if(Q0(t,o),n&4&&-1<US.indexOf(t)){for(;u!==null;){var d=ii(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=J(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var k=1<<31-We(y);R.entanglements[1]|=k,y&=~k}ta(d),(Kt&6)===0&&(nc=Ut()+500,zo(0))}}break;case 31:case 13:R=Er(d,2),R!==null&&ci(R,d,2),ac(),vd(d,2)}if(d=xd(o),d===null&&ad(t,n,o,yc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ad(t,n,o,null,a)}}function xd(t){return t=yu(t),yd(t)}var yc=null;function yd(t){if(yc=null,t=ni(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function K0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pt()){case N:return 2;case b:return 8;case Z:case ce:return 32;case ve:return 268435456;default:return 32}default:return 32}}var Sd=!1,ar=null,rr=null,sr=null,Xo=new Map,Wo=new Map,or=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(t,n){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function qo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ii(n),n!==null&&j0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function LS(t,n,a,o,u){switch(n){case"focusin":return ar=qo(ar,t,n,a,o,u),!0;case"dragenter":return rr=qo(rr,t,n,a,o,u),!0;case"mouseover":return sr=qo(sr,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Xo.set(d,qo(Xo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Wo.set(d,qo(Wo.get(d)||null,t,n,a,o,u)),!0}return!1}function J0(t){var n=ni(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,bt(t.priority,function(){Z0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,bt(t.priority,function(){Z0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=xd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);xu=o,a.target.dispatchEvent(o),xu=null}else return n=ii(a),n!==null&&j0(n),t.blockedOn=a,!1;n.shift()}return!0}function $0(t,n,a){Sc(t)&&a.delete(n)}function NS(){Sd=!1,ar!==null&&Sc(ar)&&(ar=null),rr!==null&&Sc(rr)&&(rr=null),sr!==null&&Sc(sr)&&(sr=null),Xo.forEach($0),Wo.forEach($0)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Sd||(Sd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,NS)))}var bc=null;function ev(t){bc!==t&&(bc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yd(o||a)===null)continue;break}var d=ii(a);d!==null&&(t.splice(n,3),n-=3,xf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Rs(t){function n(k){return Mc(k,t)}ar!==null&&Mc(ar,t),rr!==null&&Mc(rr,t),sr!==null&&Mc(sr,t),Xo.forEach(n),Wo.forEach(n);for(var a=0;a<or.length;a++){var o=or[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<or.length&&(a=or[0],a.blockedOn===null);)J0(a),a.blockedOn===null&&or.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[et]||null;if(typeof d=="function")y||ev(a);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[et]||null)R=y.formAction;else if(yd(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),ev(a)}}}function tv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(t){this._internalRoot=t}Ec.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Si();q0(a,o,t,n,null,null)},Ec.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;q0(t.current,2,null,t,null,null),ac(),n[st]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<or.length&&n!==0&&n<or[a].priority;a++);or.splice(a,0,t),a===0&&J0(t)}};var nv=e.version;if(nv!=="19.2.0")throw Error(r(527,nv,"19.2.0"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var OS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{xe=Tc.inject(OS),_e=Tc}catch{}}return jo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=cg,d=ug,y=fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=X0(t,1,!1,null,null,a,o,null,u,d,y,tv),t[st]=n.current,id(t),new Md(n)},jo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=cg,y=ug,R=fg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=X0(t,1,!0,n,a??null,o,u,k,d,y,R,tv),n.context=W0(null),a=n.current,o=Si(),o=cn(o),u=qa(o),u.callback=null,Ya(a,u,o),a=o,n.current.lanes=a,Ne(n,a),ta(n),t[st]=n.current,id(t),new Ec(n)},jo.version="19.2.0",jo}var dv;function YS(){if(dv)return Td.exports;dv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Td.exports=qS(),Td.exports}var jS=YS();P_();function ll(){return ll=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},ll.apply(this,arguments)}var gr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(gr||(gr={}));const hv="popstate";function ZS(s){s===void 0&&(s={});function e(r,l){let{pathname:c,search:f,hash:p}=r.location;return ch("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:I_(l)}return QS(e,i,null,s)}function Un(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ip(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KS(){return Math.random().toString(36).substr(2,8)}function pv(s,e){return{usr:s.state,key:s.key,idx:e}}function ch(s,e,i,r){return i===void 0&&(i=null),ll({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?eo(e):e,{state:i,key:e&&e.key||r||KS()})}function I_(s){let{pathname:e="/",search:i="",hash:r=""}=s;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function eo(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substr(i),s=s.substr(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function QS(s,e,i,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,p=gr.Pop,m=null,h=v();h==null&&(h=0,f.replaceState(ll({},f.state,{idx:h}),""));function v(){return(f.state||{idx:null}).idx}function _(){p=gr.Pop;let S=v(),x=S==null?null:S-h;h=S,m&&m({action:p,location:C.location,delta:x})}function g(S,x){p=gr.Push;let I=ch(C.location,S,x);h=v()+1;let H=pv(I,h),w=C.createHref(I);try{f.pushState(H,"",w)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;l.location.assign(w)}c&&m&&m({action:p,location:C.location,delta:1})}function M(S,x){p=gr.Replace;let I=ch(C.location,S,x);h=v();let H=pv(I,h),w=C.createHref(I);f.replaceState(H,"",w),c&&m&&m({action:p,location:C.location,delta:0})}function E(S){let x=l.location.origin!=="null"?l.location.origin:l.location.href,I=typeof S=="string"?S:I_(S);return I=I.replace(/ $/,"%20"),Un(x,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,x)}let C={get action(){return p},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(hv,_),m=S,()=>{l.removeEventListener(hv,_),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:M,go(S){return f.go(S)}};return C}var mv;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(mv||(mv={}));function JS(s,e,i){return i===void 0&&(i="/"),$S(s,e,i)}function $S(s,e,i,r){let l=typeof e=="string"?eo(e):e,c=B_(l.pathname||"/",i);if(c==null)return null;let f=z_(s);eM(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=dM(c);p=cM(f[m],h)}return p}function z_(s,e,i,r){e===void 0&&(e=[]),i===void 0&&(i=[]),r===void 0&&(r="");let l=(c,f,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(Un(m.relativePath.startsWith(r),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(r.length));let h=qr([r,m.relativePath]),v=i.concat(m);c.children&&c.children.length>0&&(Un(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),z_(c.children,e,v,h)),!(c.path==null&&!c.index)&&e.push({path:h,score:oM(h,c.index),routesMeta:v})};return s.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let m of F_(c.path))l(c,f,m)}),e}function F_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=F_(r.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function eM(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:lM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const tM=/^:[\w-]+$/,nM=3,iM=2,aM=1,rM=10,sM=-2,gv=s=>s==="*";function oM(s,e){let i=s.split("/"),r=i.length;return i.some(gv)&&(r+=sM),e&&(r+=iM),i.filter(l=>!gv(l)).reduce((l,c)=>l+(tM.test(c)?nM:c===""?aM:rM),r)}function lM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function cM(s,e,i){let{routesMeta:r}=s,l={},c="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",_=uM({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v),g=m.route;if(!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:qr([c,_.pathname]),pathnameBase:vM(qr([c,_.pathnameBase])),route:g}),_.pathnameBase!=="/"&&(c=qr([c,_.pathnameBase]))}return f}function uM(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=fM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,v,_)=>{let{paramName:g,isOptional:M}=v;if(g==="*"){let C=p[_]||"";f=c.slice(0,c.length-C.length).replace(/(.)\/+$/,"$1")}const E=p[_];return M&&!E?h[g]=void 0:h[g]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:s}}function fM(s,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),ip(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function dM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ip(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function B_(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}const hM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pM=s=>hM.test(s);function mM(s,e){e===void 0&&(e="/");let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?eo(s):s,c;if(i)if(pM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),ip(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+i))}i.startsWith("/")?c=vv(i.substring(1),"/"):c=vv(i,e)}else c=e;return{pathname:c,search:_M(r),hash:xM(l)}}function vv(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function wd(s,e,i,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function H_(s,e){let i=gM(s);return e?i.map((r,l)=>l===i.length-1?r.pathname:r.pathnameBase):i.map(r=>r.pathnameBase)}function G_(s,e,i,r){r===void 0&&(r=!1);let l;typeof s=="string"?l=eo(s):(l=ll({},s),Un(!l.pathname||!l.pathname.includes("?"),wd("?","pathname","search",l)),Un(!l.pathname||!l.pathname.includes("#"),wd("#","pathname","hash",l)),Un(!l.search||!l.search.includes("#"),wd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),_-=1;l.pathname=g.join("/")}p=_>=0?e[_]:"/"}let m=mM(l,p),h=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}const qr=s=>s.join("/").replace(/\/\/+/g,"/"),vM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),_M=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,xM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function yM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const V_=["post","put","patch","delete"];new Set(V_);const SM=["get",...V_];new Set(SM);function cl(){return cl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},cl.apply(this,arguments)}const ap=Re.createContext(null),MM=Re.createContext(null),hl=Re.createContext(null),hu=Re.createContext(null),xr=Re.createContext({outlet:null,matches:[],isDataRoute:!1}),k_=Re.createContext(null);function pl(){return Re.useContext(hu)!=null}function rp(){return pl()||Un(!1),Re.useContext(hu).location}function X_(s){Re.useContext(hl).static||Re.useLayoutEffect(s)}function sp(){let{isDataRoute:s}=Re.useContext(xr);return s?IM():bM()}function bM(){pl()||Un(!1);let s=Re.useContext(ap),{basename:e,future:i,navigator:r}=Re.useContext(hl),{matches:l}=Re.useContext(xr),{pathname:c}=rp(),f=JSON.stringify(H_(l,i.v7_relativeSplatPath)),p=Re.useRef(!1);return X_(()=>{p.current=!0}),Re.useCallback(function(h,v){if(v===void 0&&(v={}),!p.current)return;if(typeof h=="number"){r.go(h);return}let _=G_(h,JSON.parse(f),c,v.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:qr([e,_.pathname])),(v.replace?r.replace:r.push)(_,v.state,v)},[e,r,f,c,s])}function EM(){let{matches:s}=Re.useContext(xr),e=s[s.length-1];return e?e.params:{}}function TM(s,e){return AM(s,e)}function AM(s,e,i,r){pl()||Un(!1);let{navigator:l}=Re.useContext(hl),{matches:c}=Re.useContext(xr),f=c[c.length-1],p=f?f.params:{};f&&f.pathname;let m=f?f.pathnameBase:"/";f&&f.route;let h=rp(),v;if(e){var _;let S=typeof e=="string"?eo(e):e;m==="/"||(_=S.pathname)!=null&&_.startsWith(m)||Un(!1),v=S}else v=h;let g=v.pathname||"/",M=g;if(m!=="/"){let S=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=JS(s,{pathname:M}),C=UM(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},p,S.params),pathname:qr([m,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:qr([m,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),c,i,r);return e&&C?Re.createElement(hu.Provider,{value:{location:cl({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:gr.Pop}},C):C}function RM(){let s=PM(),e=yM(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Re.createElement(Re.Fragment,null,Re.createElement("h2",null,"Unexpected Application Error!"),Re.createElement("h3",{style:{fontStyle:"italic"}},e),i?Re.createElement("pre",{style:l},i):null,null)}const CM=Re.createElement(RM,null);class wM extends Re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?Re.createElement(xr.Provider,{value:this.props.routeContext},Re.createElement(k_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function DM(s){let{routeContext:e,match:i,children:r}=s,l=Re.useContext(ap);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),Re.createElement(xr.Provider,{value:e},r)}function UM(s,e,i,r){var l;if(e===void 0&&(e=[]),i===void 0&&(i=null),r===void 0&&(r=null),s==null){var c;if(!i)return null;if(i.errors)s=i.matches;else if((c=r)!=null&&c.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let f=s,p=(l=i)==null?void 0:l.errors;if(p!=null){let v=f.findIndex(_=>_.route.id&&p?.[_.route.id]!==void 0);v>=0||Un(!1),f=f.slice(0,Math.min(f.length,v+1))}let m=!1,h=-1;if(i&&r&&r.v7_partialHydration)for(let v=0;v<f.length;v++){let _=f[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=v),_.route.id){let{loaderData:g,errors:M}=i,E=_.route.loader&&g[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){m=!0,h>=0?f=f.slice(0,h+1):f=[f[0]];break}}}return f.reduceRight((v,_,g)=>{let M,E=!1,C=null,S=null;i&&(M=p&&_.route.id?p[_.route.id]:void 0,C=_.route.errorElement||CM,m&&(h<0&&g===0?(zM("route-fallback"),E=!0,S=null):h===g&&(E=!0,S=_.route.hydrateFallbackElement||null)));let x=e.concat(f.slice(0,g+1)),I=()=>{let H;return M?H=C:E?H=S:_.route.Component?H=Re.createElement(_.route.Component,null):_.route.element?H=_.route.element:H=v,Re.createElement(DM,{match:_,routeContext:{outlet:v,matches:x,isDataRoute:i!=null},children:H})};return i&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?Re.createElement(wM,{location:i.location,revalidation:i.revalidation,component:C,error:M,children:I(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):I()},null)}var W_=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(W_||{}),q_=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(q_||{});function LM(s){let e=Re.useContext(ap);return e||Un(!1),e}function NM(s){let e=Re.useContext(MM);return e||Un(!1),e}function OM(s){let e=Re.useContext(xr);return e||Un(!1),e}function Y_(s){let e=OM(),i=e.matches[e.matches.length-1];return i.route.id||Un(!1),i.route.id}function PM(){var s;let e=Re.useContext(k_),i=NM(),r=Y_();return e!==void 0?e:(s=i.errors)==null?void 0:s[r]}function IM(){let{router:s}=LM(W_.UseNavigateStable),e=Y_(q_.UseNavigateStable),i=Re.useRef(!1);return X_(()=>{i.current=!0}),Re.useCallback(function(l,c){c===void 0&&(c={}),i.current&&(typeof l=="number"?s.navigate(l):s.navigate(l,cl({fromRouteId:e},c)))},[s,e])}const _v={};function zM(s,e,i){_v[s]||(_v[s]=!0)}function FM(s,e){s?.v7_startTransition,s?.v7_relativeSplatPath}function BM(s){let{to:e,replace:i,state:r,relative:l}=s;pl()||Un(!1);let{future:c,static:f}=Re.useContext(hl),{matches:p}=Re.useContext(xr),{pathname:m}=rp(),h=sp(),v=G_(e,H_(p,c.v7_relativeSplatPath),m,l==="path"),_=JSON.stringify(v);return Re.useEffect(()=>h(JSON.parse(_),{replace:i,state:r,relative:l}),[h,_,l,i,r]),null}function Vs(s){Un(!1)}function HM(s){let{basename:e="/",children:i=null,location:r,navigationType:l=gr.Pop,navigator:c,static:f=!1,future:p}=s;pl()&&Un(!1);let m=e.replace(/^\/*/,"/"),h=Re.useMemo(()=>({basename:m,navigator:c,static:f,future:cl({v7_relativeSplatPath:!1},p)}),[m,p,c,f]);typeof r=="string"&&(r=eo(r));let{pathname:v="/",search:_="",hash:g="",state:M=null,key:E="default"}=r,C=Re.useMemo(()=>{let S=B_(v,m);return S==null?null:{location:{pathname:S,search:_,hash:g,state:M,key:E},navigationType:l}},[m,v,_,g,M,E,l]);return C==null?null:Re.createElement(hl.Provider,{value:h},Re.createElement(hu.Provider,{children:i,value:C}))}function GM(s){let{children:e,location:i}=s;return TM(uh(e),i)}new Promise(()=>{});function uh(s,e){e===void 0&&(e=[]);let i=[];return Re.Children.forEach(s,(r,l)=>{if(!Re.isValidElement(r))return;let c=[...e,l];if(r.type===Re.Fragment){i.push.apply(i,uh(r.props.children,c));return}r.type!==Vs&&Un(!1),!r.props.index||!r.props.children||Un(!1);let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=uh(r.props.children,c)),i.push(f)}),i}const VM="6";try{window.__reactRouterVersion=VM}catch{}const kM="startTransition",xv=VS[kM];function XM(s){let{basename:e,children:i,future:r,window:l}=s,c=Re.useRef();c.current==null&&(c.current=ZS({window:l,v5Compat:!0}));let f=c.current,[p,m]=Re.useState({action:f.action,location:f.location}),{v7_startTransition:h}=r||{},v=Re.useCallback(_=>{h&&xv?xv(()=>m(_)):m(_)},[m,h]);return Re.useLayoutEffect(()=>f.listen(v),[f,v]),Re.useEffect(()=>FM(r),[r]),Re.createElement(HM,{basename:e,children:i,location:p.location,navigationType:p.action,navigator:f,future:r})}var yv;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(yv||(yv={}));var Sv;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Sv||(Sv={}));function WM({onKeyDrive:s}){const e=Re.useRef(null),i=Re.useRef(null);return Re.useEffect(()=>{const r=e.current,l=i.current;if(!r||!l)return;const c=r.getContext("2d"),f=l.getContext("2d"),p=document.documentElement;let m=window.innerWidth,h=window.innerHeight;const v=30,_=40;let g=0,M=0,E=0,C=new Float32Array(0);const S=new Float32Array(1500),x=new Float32Array(1500),I=new Float32Array(1500),H=36*Math.PI/180,w=Math.sin(H),F=Math.cos(H);let P=1e3,z=0,T=0,D=0,X=0,G=0,K=1,ge=1,ie=0,Y=0;const B=-.46,V=.82,ae=.34,pe=1.4;function Ue(){const he=Math.ceil(Math.max(p.scrollHeight,h)/v)+_+40;he*E!==C.length&&(C=new Float32Array(he*E))}function O(){const he=Math.min(2,window.devicePixelRatio||1);m=window.innerWidth,h=window.innerHeight,[r,l].forEach(ye=>{ye.width=Math.round(m*he),ye.height=Math.round(h*he)}),c.setTransform(he,0,0,he,0,0),f.setTransform(he,0,0,he,0,0),g=Math.ceil(m/v),M=g+2,E=g*3+6,P=1.5*Math.max(h,600),Ue()}O(),window.addEventListener("resize",O);function Q(he){z=m/2,T=P*F,D=he+h/2+P*w}function Ee(he,ye,De){const Ie=ye-T,ne=De-D,U=-Ie*F-ne*w,J=Ie*w-ne*F;ge=U,K=P/U,X=m/2+(he-z)*K,G=h/2-J*K}function Pe(he,ye){const De=(he-m/2)/P,Ie=-(ye-h/2)/P;let ne=w*Ie-F;const U=-F*Ie-w;ne>-.05&&(ne=-.05);const J=-T/ne;ie=z+J*De,Y=D+J*U}let Ve=window.scrollY;Q(Ve),Pe(m*.7,h*.45);let ee=ie,Me=Y,Ae=Math.PI,He=0;const Qe={w:0,a:0,s:0,d:0};window.__driveCar=function(he,ye){Qe.hasOwnProperty(he)&&(Qe[he]=ye?1:0,ye&&s&&s())};const Ye=[];let Et=null;const ut=1800,_t=120;let xt="#5b46d6",dt="#0b8f6a",Bt="#5a5675",jt=[212,86,15],Qt=0,Vt=performance.now(),St=1,Ht=0;const j=[38,34,64],Ut=[26,23,38];function Pt(he){const ye=/^#([0-9a-f]{6})$/i.exec(he);if(ye)return[parseInt(ye[1].slice(0,2),16),parseInt(ye[1].slice(2,4),16),parseInt(ye[1].slice(4,6),16)];const De=/rgba?\((\d+)[ ,]+(\d+)[ ,]+(\d+)/.exec(he);return De?[+De[1],+De[2],+De[3]]:[212,86,15]}function N(he,ye){return`rgb(${Math.round(Math.min(255,he[0]*ye))},${Math.round(Math.min(255,he[1]*ye))},${Math.round(Math.min(255,he[2]*ye))})`}function b(){const he=getComputedStyle(p);xt=he.getPropertyValue("--accent2").trim()||xt,dt=he.getPropertyValue("--trail").trim()||dt,Bt=he.getPropertyValue("--muted").trim()||Bt,jt=Pt(he.getPropertyValue("--accent").trim())}b();function Z(he,ye,De,Ie,ne,U,J,ue,Ce){const Le=[[1,0,0,[[ye,De,ne],[ye,Ie,ne],[ye,Ie,U],[ye,De,U]]],[-1,0,0,[[he,Ie,ne],[he,De,ne],[he,De,U],[he,Ie,U]]],[0,1,0,[[ye,Ie,ne],[he,Ie,ne],[he,Ie,U],[ye,Ie,U]]],[0,-1,0,[[he,De,ne],[ye,De,ne],[ye,De,U],[he,De,U]]],[0,0,1,[[he,De,U],[ye,De,U],[ye,Ie,U],[he,Ie,U]]]];for(let Se=0;Se<Le.length;Se++){const Be=Le[Se],Ne=Be[3],it=[],ft=[];let kt=0,It=0,cn=0;for(let At=0;At<4;At++){const mt=ee+(St*Ne[At][0]-Ht*Ne[At][1])*pe,et=Me+(Ht*Ne[At][0]+St*Ne[At][1])*pe,st=Ne[At][2]*pe;kt+=mt,It+=st,cn+=et,Ee(mt,st,et),it.push(X),ft.push(G)}kt/=4,It/=4,cn/=4;const Fe=St*Be[0]-Ht*Be[1],Tt=Ht*Be[0]+St*Be[1],bt=Be[2];Fe*(z-kt)+bt*(T-It)+Tt*(D-cn)<=0||(Ce?f.fillStyle=ue:f.fillStyle=N(Be[2]?J:ue,(.5+.5*Math.max(0,Fe*B+bt*V+Tt*ae))*1.05),f.beginPath(),f.moveTo(it[0],ft[0]),f.lineTo(it[1],ft[1]),f.lineTo(it[2],ft[2]),f.lineTo(it[3],ft[3]),f.closePath(),f.fill(),f.stroke())}}function ce(he,ye,De){f.beginPath();for(let Ie=0;Ie<he.length;Ie++)Ee(ee+(St*he[Ie][0]-Ht*he[Ie][1])*pe+ye,0,Me+(Ht*he[Ie][0]+St*he[Ie][1])*pe+De),Ie?f.lineTo(X,G):f.moveTo(X,G);f.closePath(),f.fill()}function ve(){St=Math.cos(Ae),Ht=Math.sin(Ae),f.globalAlpha=1,f.fillStyle="rgba(255, 229, 138, 0.13)",ce([[23,-7],[23,7],[115,28],[115,-28]],0,0),f.fillStyle="rgba(0, 0, 0, 0.26)",ce([[-26,-14],[26,-14],[26,14],[-26,14]],4,5),f.lineWidth=1,f.lineJoin="round",f.strokeStyle="rgba(0, 0, 0, 0.35)",Ee(ee,8*pe,Me);const he=ge,ye=[];[[-14,-1],[-14,1],[14,-1],[14,1]].forEach(De=>{const Ie=De[0],ne=De[1]*12.5;Ee(ee+(St*Ie-Ht*ne)*pe,4*pe,Me+(Ht*Ie+St*ne)*pe);const U=[Ie-5.5,Ie+5.5,De[1]>0?10:-15,De[1]>0?15:-10,0,9];ge>he?Z(U[0],U[1],U[2],U[3],U[4],U[5],Ut,Ut,!1):ye.push(U)}),Z(-22,22,-11,11,4,14,jt,jt,!1),Z(22,23.5,-9,-4,7,11,null,"#ffe58a",!0),Z(22,23.5,4,9,7,11,null,"#ffe58a",!0),Z(-23.5,-22,-9.5,-5,7,10,null,"#ff4b4b",!0),Z(-23.5,-22,5,9.5,7,10,null,"#ff4b4b",!0),Z(-10,10,-8.5,8.5,14,23,[jt[0]*.85,jt[1]*.85,jt[2]*.85],j,!1),ye.forEach(De=>{Z(De[0],De[1],De[2],De[3],De[4],De[5],Ut,Ut,!1)})}let Oe=null;function Ge(he){Oe=requestAnimationFrame(Ge);const ye=Math.min(48,he-Vt);if(Vt=he,document.hidden)return;const De=ye/16.667;let Ie=window.scrollY;Qt++%40===0&&b(),Q(Ie),Me+=Ie-Ve,Ve=Ie;const ne=Qe.w-Qe.s,U=Qe.d-Qe.a;if(ne>0?He+=.16*De:ne<0?He-=(He>0?.3:.1)*De:He*=Math.pow(.97,De),He=Math.max(-2.8,Math.min(7.5,He)),Ae+=U*.05*De*Math.max(-1,Math.min(1,He/3)),ee+=Math.cos(Ae)*He*De,Me+=Math.sin(Ae)*He*De,Math.abs(He)>.3){const et=Math.min(170,h*.28),st=window.scrollY,ot=p.scrollHeight-h,Zt=Math.sin(Ae)*He;Ee(ee,0,Me);const un=G,Tn=K;Zt>0&&un>h-et&&st<ot-1?window.scrollBy({top:(un-(h-et))/Tn*.5,left:0,behavior:"instant"}):Zt<0&&un<et&&st>0&&window.scrollBy({top:(un-et)/Tn*.5,left:0,behavior:"instant"}),Ie=window.scrollY,Ve=Ie,Q(Ie)}const J=16;Pe(m/2,J);const ue=Y;Pe(m/2,h-J);const Le=Math.max(ue,Math.min(Y,Me)),Se=(m/2-J)/(P/(T*F-(Le-D)*w)),Be=Math.max(z-Se,Math.min(z+Se,ee));(Be!==ee||Le!==Me)&&(He*=.92),ee=Be,Me=Le;const Ne=Math.cos(Ae),it=Math.sin(Ae);for(Math.abs(He)>.4?(!Et||Math.hypot(ee-Et.x,Me-Et.z)>4)&&(Ye.push({t:he,cx:ee-Ne*14*pe,cz:Me-it*14*pe,lx:ee-(Ne*14-it*12.5)*pe,lz:Me-(it*14+Ne*12.5)*pe,rx:ee-(Ne*14+it*12.5)*pe,rz:Me-(it*14-Ne*12.5)*pe,s:!Et}),Et={x:ee,z:Me}):Et=null;Ye.length&&he-Ye[0].t>ut;)Ye.shift();Ye.length>_t&&Ye.splice(0,Ye.length-_t),f.clearRect(0,0,m,h),f.lineCap="round",f.strokeStyle=dt;for(let et=1;et<Ye.length;et++){const st=Ye[et],ot=Ye[et-1];if(st.s)continue;const Zt=1-(he-st.t)/ut;Ee(ot.cx,0,ot.cz);const un=X,Tn=G;Ee(st.cx,0,st.cz);const di=X,ti=G,ni=K;Tn<-30&&ti<-30||Tn>h+30&&ti>h+30||(f.globalAlpha=.14*Zt,f.lineWidth=24*ni,f.beginPath(),f.moveTo(un,Tn),f.lineTo(di,ti),f.stroke(),f.globalAlpha=.75*Zt,f.lineWidth=2.4*ni,f.beginPath(),Ee(ot.lx,0,ot.lz),f.moveTo(X,G),Ee(st.lx,0,st.lz),f.lineTo(X,G),Ee(ot.rx,0,ot.rz),f.moveTo(X,G),Ee(st.rx,0,st.rz),f.lineTo(X,G),f.stroke())}f.globalAlpha=1,c.clearRect(0,0,m,h),Pe(m/2,-40);const ft=Y;Pe(m/2,h+40);const kt=Y,It=90+Math.abs(He)*9,cn=It*It;let Fe=0;const Tt=Math.max(-_,Math.floor(ft/v)-1),bt=Math.ceil(kt/v)+1;c.fillStyle=Bt;for(let et=Tt;et<=bt;et++){const st=et*v,ot=st-D,Zt=T*F-ot*w;if(Zt<80)continue;const un=P/Zt,Tn=h/2-(-T*w-ot*F)*un;if(Tn<-30||Tn>h+50)continue;const di=(et+_)*E;if(di+E>C.length)break;const ti=Math.max(0,Math.floor((z+(-30-m/2)/un)/v)+M),ni=Math.min(E-1,Math.ceil((z+(m+30-m/2)/un)/v)+M);c.globalAlpha=.3*Math.max(.35,Math.min(1.2,un));const ii=Math.max(1.4,2*un);for(let Ti=ti;Ti<=ni;Ti++){const Ai=(Ti-M)*v,mn=di+Ti;let Ki=C[mn]*.955;const A=Ai-ee,q=st-Me,fe=A*A+q*q;let re=Ai,se=st;if(fe<cn){const Xe=Math.sqrt(fe)||1,je=1-Xe/It;je>Ki&&(Ki=je);const ke=je*je*16;re+=A/Xe*ke,se+=q/Xe*ke}Ki<.03?(C[mn]=0,c.fillRect(m/2+(Ai-z)*un-ii/2,Tn-ii/2,ii,ii)):(C[mn]=Ki,Fe<S.length&&(S[Fe]=re,x[Fe]=se,I[Fe]=Ki,Fe++))}}for(let et=0;et<Fe;et++){const st=I[et];Ee(S[et],st*st*16,x[et]);const ot=(2+st*3.5)*K;c.globalAlpha=Math.min(1,.3+st*.8),c.fillStyle=st>.5?dt:xt,c.fillRect(X-ot/2,G-ot/2,ot,ot)}c.globalAlpha=1,ve(),Ee(ee,9*pe,Me);const At=X,mt=G;if(Qt%2===0){const et=document.querySelectorAll(".spot"),st=document.querySelectorAll(".ch");et.forEach(ot=>{const Zt=ot.getBoundingClientRect(),un=Zt.width>0&&At>=Zt.left&&At<=Zt.right&&mt>=Zt.top&&mt<=Zt.bottom;un&&(ot.style.setProperty("--mx",`${At-Zt.left}px`),ot.style.setProperty("--my",`${mt-Zt.top}px`)),ot.classList.toggle("lit",un)}),st.forEach(ot=>{const Zt=ot.getBoundingClientRect(),un=Math.hypot(At-(Zt.left+Zt.width/2),mt-(Zt.top+Zt.height/2));ot.classList.toggle("pop",un<48)})}}Oe=requestAnimationFrame(Ge);function xe(he){return he&&(he.tagName==="INPUT"||he.tagName==="TEXTAREA"||he.tagName==="SELECT"||he.isContentEditable)}function _e(he){if(he.ctrlKey||he.metaKey||he.altKey||xe(he.target))return;const ye=he.key.toLowerCase();let De=null;(ye==="w"||ye==="arrowup")&&(De="w"),(ye==="a"||ye==="arrowleft")&&(De="a"),(ye==="s"||ye==="arrowdown")&&(De="s"),(ye==="d"||ye==="arrowright")&&(De="d"),De&&(Qe[De]=1,s&&s())}function ze(he){const ye=he.key.toLowerCase();let De=null;(ye==="w"||ye==="arrowup")&&(De="w"),(ye==="a"||ye==="arrowleft")&&(De="a"),(ye==="s"||ye==="arrowdown")&&(De="s"),(ye==="d"||ye==="arrowright")&&(De="d"),De&&(Qe[De]=0)}function We(){Qe.w=Qe.a=Qe.s=Qe.d=0}return window.addEventListener("keydown",_e),window.addEventListener("keyup",ze),window.addEventListener("blur",We),()=>{cancelAnimationFrame(Oe),window.removeEventListener("resize",O),window.removeEventListener("keydown",_e),window.removeEventListener("keyup",ze),window.removeEventListener("blur",We),delete window.__driveCar}},[s]),L.jsxs(L.Fragment,{children:[L.jsx("canvas",{id:"field",ref:e,"aria-hidden":"true"}),L.jsx("canvas",{id:"lines",ref:i,"aria-hidden":"true"})]})}function qM({isDriving:s}){const[e,i]=Re.useState(!0);Re.useEffect(()=>{const c=setTimeout(()=>{i(!1)},7e3);return()=>clearTimeout(c)},[]),Re.useEffect(()=>{if(s){const c=setTimeout(()=>{i(!1)},1500);return()=>clearTimeout(c)}},[s]);const r=c=>{window.__driveCar&&window.__driveCar(c,!0)},l=c=>{window.__driveCar&&window.__driveCar(c,!1)};return L.jsxs(L.Fragment,{children:[L.jsxs("div",{className:`car-hud-right ${e?"":"hidden"}`,"aria-live":"polite",children:[L.jsxs("span",{className:"keys",children:[L.jsx("kbd",{children:"W"}),L.jsx("kbd",{children:"A"}),L.jsx("kbd",{children:"S"}),L.jsx("kbd",{children:"D"})]}),L.jsx("span",{children:"drive car"}),L.jsx("button",{type:"button",className:"hud-close",onClick:()=>i(!1),"aria-label":"Dismiss controls hint",children:"×"})]}),L.jsxs("div",{className:"dpad","aria-label":"Drive controls",children:[L.jsx("button",{type:"button",className:"w",onPointerDown:c=>{c.preventDefault(),r("w")},onPointerUp:()=>l("w"),onPointerLeave:()=>l("w"),"aria-label":"Forward",children:"W"}),L.jsx("button",{type:"button",className:"a",onPointerDown:c=>{c.preventDefault(),r("a")},onPointerUp:()=>l("a"),onPointerLeave:()=>l("a"),"aria-label":"Steer left",children:"A"}),L.jsx("button",{type:"button",className:"s",onPointerDown:c=>{c.preventDefault(),r("s")},onPointerUp:()=>l("s"),onPointerLeave:()=>l("s"),"aria-label":"Brake or reverse",children:"S"}),L.jsx("button",{type:"button",className:"d",onPointerDown:c=>{c.preventDefault(),r("d")},onPointerUp:()=>l("d"),onPointerLeave:()=>l("d"),"aria-label":"Steer right",children:"D"})]})]})}const Mv=[{id:"tonto",role:"Co-founder, Gameplay Programmer & Designer",company:"Tonto Studio",location:"Tashkent, Uzbekistan",period:"2025 – Present",status:"Active Studio",highlights:["Desire Lines — Leading gameplay programming for the studio's primary PC release heading to Steam.","Unity 6 Systems & Physics — Built realistic arcade vehicle physics, custom suspension raycasts, and modular movement systems.","Custom Shaders — Wrote HLSL/Shader Graph pipelines for PSX/retro aesthetics, procedural vertex wobble, and dynamic outlines.","Game Design & Ideation — Led design sprints on co-op puzzle mechanics, tactile camera systems, and player feedback loops.","Studio Operations — Architected studio web platforms and prepared IT Park Uzbekistan residency application materials."]},{id:"freelance-systems",role:"Independent Gameplay & Web Systems Developer",company:"Self-Employed / Open Source",location:"Remote",period:"2024 – Present",status:"Ongoing",highlights:["Engineered full-stack interactive web experiences combining React, Three.js, and Django REST Framework.","Authored custom WebGL/Canvas visualizers and real-time multiplayer duel prototypes.","Maintains open-source game tools, shader snippets, and responsive developer utilities."]}],bv=[{id:"gamefest-2026",title:"Best Game Design Nomination",event:"Gamefest 26",team:"Team All Hail Uncle Bao",period:"February 2026",badge:"Top 3 Finalist",badgeType:"accent",description:"48-hour game jam prototype centered on synchronous echoes and temporal rewind mechanics.",details:["Designed and coded core character movement and time-rewind ghost recording loops at 60Hz.","Authored custom dissolve and retro post-processing shaders that caught the judges' attention.","Earned an official nomination for Best Game Design among 150+ competitors."]},{id:"jam-35lvl",title:"Independence Mechanic Jam",event:"35 LVL Jam",team:"Two-Person Duo",period:"January 2026",badge:"Completed",badgeType:"trail",description:"Rapid three-day indie game sprint focusing on inventive mechanics without relying on external art assets.",details:["Acted as primary gameplay programmer, implementing custom shaders to carry the entire visual look.","Engineered responsive controls and level pacing within a strict 72-hour timeframe."]},{id:"ai-xakaton",title:"Umummilliy AI Xakaton — Qashqadaryo",event:"National AI Hackathon",team:"Team of 5 Engineers",period:"2026",badge:"Hackathon",badgeType:"trail",description:"State-wide hackathon challenge focusing on AI-assisted anomaly detection in economic transactions.",details:["Built the Shadow Economy Radar frontend dashboard and integrated real-time anomaly flagging endpoints.","Collaborated closely with data scientists to turn complex ML model outputs into intuitive visual alerts."]}];function YM(){const[s,e]=Re.useState("work"),[i,r]=Re.useState({tonto:!0,"gamefest-2026":!0}),l=c=>{r(f=>({...f,[c]:!f[c]}))};return L.jsxs("div",{className:"exp-wrapper spot",children:[L.jsxs("div",{className:"exp-nav-tabs",children:[L.jsxs("button",{type:"button",className:`exp-nav-btn ${s==="work"?"active":""}`,onClick:()=>e("work"),children:["Work Experience (",Mv.length,")"]}),L.jsxs("button",{type:"button",className:`exp-nav-btn ${s==="competitions"?"active":""}`,onClick:()=>e("competitions"),children:["Competitions & Hackathons (",bv.length,")"]})]}),s==="work"&&L.jsx("div",{className:"exp-list",children:Mv.map(c=>{const f=!!i[c.id];return L.jsxs("div",{className:`exp-item ${f?"open":""}`,children:[L.jsxs("button",{type:"button",className:"exp-header-btn",onClick:()=>l(c.id),"aria-expanded":f,children:[L.jsxs("div",{className:"exp-title-group",children:[L.jsxs("h3",{children:[L.jsx("span",{children:c.role}),L.jsx("span",{className:"exp-badge",children:c.period})]}),L.jsxs("div",{className:"exp-org",children:[c.company," · ",c.location]})]}),L.jsx("span",{className:"exp-chevron",children:"▾"})]}),f&&L.jsx("div",{className:"exp-content",children:L.jsx("ul",{children:c.highlights.map((p,m)=>L.jsx("li",{children:p},m))})})]},c.id)})}),s==="competitions"&&L.jsx("div",{className:"exp-list",children:bv.map(c=>{const f=!!i[c.id];return L.jsxs("div",{className:`exp-item ${f?"open":""}`,children:[L.jsxs("button",{type:"button",className:"exp-header-btn",onClick:()=>l(c.id),"aria-expanded":f,children:[L.jsxs("div",{className:"exp-title-group",children:[L.jsxs("h3",{children:[L.jsx("span",{children:c.title}),L.jsx("span",{className:`exp-badge ${c.badgeType==="accent"?"accent":""}`,children:c.badge})]}),L.jsxs("div",{className:"exp-org",children:[c.event," · ",c.team," · ",c.period]})]}),L.jsx("span",{className:"exp-chevron",children:"▾"})]}),f&&L.jsxs("div",{className:"exp-content",children:[L.jsx("p",{children:c.description}),L.jsx("ul",{children:c.details.map((p,m)=>L.jsx("li",{children:p},m))})]})]},c.id)})})]})}const jM=[{category:"Game Engines & Graphics",skills:["Unity 6","C#","Godot","HLSL / Shaders","Shader Graph","URP","Cinemachine","Netcode","Raycast Physics"]},{category:"Web & Backend Systems",skills:["React","Vite","Python","Django REST","PostgreSQL","SQLite","Tailwind CSS","REST APIs"]},{category:"Workflow & DevOps",skills:["Git","GitHub","Docker","Linux","Cloudflare","Post-Processing"]}];function ZM(){return L.jsx("div",{className:"toolbox-grid",children:jM.map((s,e)=>L.jsxs("div",{className:"toolbox-group spot",children:[L.jsx("h4",{children:s.category}),L.jsx("div",{className:"chips",children:s.skills.map((i,r)=>L.jsx("span",{className:"chip",children:i},r))})]},e))})}const Ev=[{id:"desire-lines",title:"Desire Lines",tag:"Unity · PC",category:"game",status:"Upcoming",statusClass:"hi",isFeature:!0,widthClass:"",desc:"A PSX-style driving roguelite with custom retro shaders, realistic vehicle suspension physics, and procedural mountain highways."},{id:"zakovat-live",title:"Zakovat Live",tag:"React · Django",category:"web",status:"Completed",statusClass:"",isFeature:!1,widthClass:"",desc:"A real-time party quiz platform. Players type free-text answers and see each other's guesses live with WebSocket scoring."},{id:"jam-35lvl",title:"35 LVL entry",tag:"Unity · Jam",category:"game",status:"3 days",statusClass:"mute",isFeature:!1,widthClass:"",desc:"A jam game built on the 'Independence Mechanic' theme, relying entirely on custom shaders rather than traditional 3D models."},{id:"shadow-radar",title:"Shadow Economy Radar",tag:"AI · Hackathon",category:"web",status:"Hackathon",statusClass:"mute",isFeature:!1,widthClass:"w3",desc:"An AI monitoring platform that flags informal economic activities, built in three days for the Umummilliy AI Xakaton in Qashqadaryo."},{id:"car-chase",title:"Arcade Car Chase",tag:"Unity · Physics",category:"game",status:"Prototype",statusClass:"mute",isFeature:!1,widthClass:"w3",desc:"A top-down chase game in Unity 6 featuring sphere-based arcade physics, dynamic chaser AI, and a manual gearbox system."},{id:"arena-shooter",title:"Arena Shooter",tag:"WebGL · 3D Engine",category:"game",status:"Prototype",statusClass:"mute",isFeature:!1,widthClass:"",desc:"A custom 3D perspective renderer with grappling hook momentum physics that preserve velocity during aerial swinging."},{id:"trivia-duel",title:"Trivia Duel Mode",tag:"Unity · Netcode",category:"game",status:"Feature",statusClass:"mute",isFeature:!1,widthClass:"",desc:"Multiplayer duels for a mobile trivia title featuring synchronized lobbies, turn-based matchmaking, and speed scoring."},{id:"pixel-chefs",title:"Pixel Chefs",tag:"HTML · WebGL",category:"game",status:"Prototype",statusClass:"mute",isFeature:!1,widthClass:"",desc:"A pixel-art kitchen time-management game with cook timers, combo scoring multipliers, and interactive utensil upgrades."},{id:"cs2-generator",title:"CS2 Highlight Generator",tag:"Python · Cloud GPU",category:"tool",status:"In progress",statusClass:"mute",isFeature:!1,widthClass:"w3",desc:"A local clip generator for CS2 demo files. Parsing, job queue, and dashboard run locally while heavy encoding offloads to GPU."},{id:"shelf-chef",title:"ShelfChef",tag:"Django REST · PostgreSQL",category:"web",status:"Backend done",statusClass:"mute",isFeature:!1,widthClass:"w3",desc:"A recipe and pantry management API with secure auth and intelligent recipe matching based on available ingredients at home."},{id:"scrolls",title:"Scrolls",tag:"React · Web",category:"web",status:"Planning",statusClass:"mute",isFeature:!1,widthClass:"w6",desc:"A reel-style platform for exploring curated artworks, featuring biographical context, artist following, and short architectural reflections."}];function KM(){const[s,e]=Re.useState("all"),i=Ev.filter(r=>s==="all"?!0:r.category===s);return L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[L.jsxs("div",{className:"filters",role:"group","aria-label":"Filter projects",children:[L.jsxs("button",{type:"button",className:s==="all"?"active":"",onClick:()=>e("all"),"aria-pressed":s==="all",children:["All (",Ev.length,")"]}),L.jsx("button",{type:"button",className:s==="game"?"active":"",onClick:()=>e("game"),"aria-pressed":s==="game",children:"Games"}),L.jsx("button",{type:"button",className:s==="web"?"active":"",onClick:()=>e("web"),"aria-pressed":s==="web",children:"Web Systems"}),L.jsx("button",{type:"button",className:s==="tool"?"active":"",onClick:()=>e("tool"),"aria-pressed":s==="tool",children:"Tools"})]}),L.jsx("div",{className:"bento",children:i.map(r=>{let l="p spot";return r.isFeature&&(l+=" feature"),r.widthClass&&(l+=` ${r.widthClass}`),L.jsxs("article",{className:l,children:[L.jsxs("div",{className:"meta",children:[L.jsx("span",{className:"label",children:r.tag}),L.jsx("span",{className:`status ${r.statusClass}`,children:r.status})]}),L.jsx("h3",{children:r.title}),L.jsx("p",{children:r.desc})]},r.id)})})]})}const j_="https://api.claive.uz",Z_=[{id:1,title:"Weekend Volleyball Session",caption:"Sunset match at the outdoor sand court with friends.",image_url:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80",tag:"Volleyball",date_taken:"26 09 14"},{id:2,title:"Corner Cafe & Espresso",caption:"Cortado & fresh journal notes before a game jam weekend.",image_url:"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",tag:"Coffee",date_taken:"26 08 22"},{id:3,title:"Golden Hour Serve",caption:"Chasing rallies under the evening glow.",image_url:"https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=1200&q=80",tag:"Volleyball",date_taken:"26 07 30"},{id:4,title:"Quiet Drip & Sketchbook",caption:"Testing ideas away from screens.",image_url:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",tag:"Coffee",date_taken:"26 06 18"},{id:5,title:"Evening Stroll in Tashkent",caption:"Catching the breeze after a long sprint.",image_url:"https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",tag:"City",date_taken:"26 05 12"},{id:6,title:"Warm Brew & Rain",caption:"Window seat watching the storm roll past.",image_url:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",tag:"Coffee",date_taken:"26 04 05"}];async function QM(){try{const s=await fetch(`${j_}/api/photos/`);if(!s.ok)throw new Error("HTTP error "+s.status);const e=await s.json();if(Array.isArray(e)&&e.length>0)return e}catch(s){console.info("Using default off-duty photos collection:",s.message)}return Z_}function JM(){const[s,e]=Re.useState(Z_),[i,r]=Re.useState("all"),[l,c]=Re.useState(null);Re.useEffect(()=>{let h=!0;async function v(){const _=await QM();h&&_&&_.length>0&&e(_)}return v(),()=>{h=!1}},[]);const f=async h=>{const v=h.target.files&&h.target.files[0];if(!v)return;const _=new Date,g=S=>("0"+S).slice(-2),M=`'${g(_.getFullYear()%100)} ${g(_.getMonth()+1)} ${g(_.getDate())}`,E=URL.createObjectURL(v),C={id:Date.now(),title:v.name.replace(/\.[^/.]+$/,"").replace(/[-_]/g," "),caption:"Added from photo roll",image_url:E,tag:"Moments",date_taken:M};e(S=>[C,...S]);try{const S=new FormData;S.append("title",C.title),S.append("caption",C.caption),S.append("image",v),S.append("tag","Moments"),S.append("date_taken",M),await fetch(`${j_}/api/photos/`,{method:"POST",body:S})}catch(S){console.warn("Backend unavailable, photo preview saved in browser session:",S)}},p=["all","Volleyball","Coffee","City"],m=s.filter(h=>i==="all"?!0:(h.tag||"").toLowerCase()===i.toLowerCase());return L.jsxs("div",{className:"gallery-container",children:[L.jsxs("div",{className:"gallery-header-row",children:[L.jsx("div",{className:"gallery-tags",children:p.map(h=>L.jsx("button",{type:"button",className:`gallery-tag-btn ${i===h?"active":""}`,onClick:()=>r(h),children:h==="all"?"All Moments":h},h))}),L.jsxs("label",{className:"add-photo-btn",title:"Upload a photo to your gallery",children:[L.jsx("span",{children:"+ Add photo"}),L.jsx("input",{type:"file",accept:"image/*",onChange:f,"aria-label":"Upload a photo to the gallery"})]})]}),L.jsx("div",{className:"gallery-grid",children:m.map(h=>L.jsx("div",{className:"photo-card spot",style:{backgroundImage:`url(${h.image_url||h.image})`},onClick:()=>c(h),role:"button",tabIndex:0,onKeyDown:v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),c(h))},children:L.jsxs("div",{className:"photo-overlay",children:[L.jsxs("div",{className:"photo-top-bar",children:[L.jsx("span",{className:"photo-tag-badge",children:h.tag||"Life"}),h.date_taken&&L.jsx("span",{className:"photo-stamp",children:h.date_taken})]}),L.jsxs("div",{className:"photo-bottom",children:[L.jsx("span",{className:"photo-title",children:h.title}),h.caption&&L.jsx("span",{className:"photo-caption",children:h.caption})]})]})},h.id))}),l&&L.jsx("div",{className:"lightbox-modal",onClick:()=>c(null),role:"dialog","aria-modal":"true",children:L.jsxs("div",{className:"lightbox-content",onClick:h=>h.stopPropagation(),children:[L.jsx("img",{src:l.image_url||l.image,alt:l.title,className:"lightbox-img"}),L.jsxs("div",{className:"lightbox-info",children:[L.jsxs("div",{children:[L.jsx("h3",{style:{margin:0,fontSize:"20px"},children:l.title}),L.jsx("p",{style:{margin:"4px 0 0",color:"var(--muted)",fontSize:"14px"},children:l.caption})]}),L.jsx("button",{type:"button",className:"kbtn",onClick:()=>c(null),children:"Close (Esc)"})]})]})})]})}const K_=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();const $M=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const eb=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase());const Tv=s=>{const e=eb(s);return e.charAt(0).toUpperCase()+e.slice(1)};var Dd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tb=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},nb=Re.createContext({}),ib=()=>Re.useContext(nb),ab=Re.forwardRef(({color:s,size:e,strokeWidth:i,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...p},m)=>{const{size:h=24,strokeWidth:v=2,absoluteStrokeWidth:_=!1,color:g="currentColor",className:M=""}=ib()??{},E=r??_?Number(i??v)*24/Number(e??h):i??v;return Re.createElement("svg",{ref:m,...Dd,width:e??h??Dd.width,height:e??h??Dd.height,stroke:s??g,strokeWidth:E,className:K_("lucide",M,l),...!c&&!tb(p)&&{"aria-hidden":"true"},...p},[...f.map(([C,S])=>Re.createElement(C,S)),...Array.isArray(c)?c:[c]])});const Bi=(s,e)=>{const i=Re.forwardRef(({className:r,...l},c)=>Re.createElement(ab,{ref:c,iconNode:e,className:K_(`lucide-${$M(Tv(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Tv(s),i};const rb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],sb=Bi("arrow-left",rb);const ob=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],lb=Bi("arrow-up-right",ob);const cb=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],ub=Bi("calendar",cb);const fb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],db=Bi("check",fb);const hb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],pb=Bi("clock",hb);const mb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],gb=Bi("mail",mb);const vb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],_b=Bi("moon",vb);const xb=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],yb=Bi("pen-line",xb);const Sb=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Mb=Bi("share-2",Sb);const bb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Eb=Bi("sparkles",bb);const Tb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Ab=Bi("sun",Tb);const Rb=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Cb=Bi("tag",Rb);function wb(){return L.jsxs("div",{className:"contact-box spot",children:[L.jsx("span",{className:"label",children:"Get in Touch"}),L.jsx("h2",{children:"Let's make something that feels good to play."}),L.jsx("p",{style:{color:"var(--muted)",margin:0,fontSize:"17px"},children:"Based in Tashkent, Uzbekistan. Open to gameplay engineering, 3D graphics, and systems collaborations."}),L.jsxs("div",{className:"contact-actions",children:[L.jsxs("a",{href:"mailto:abbosjabborov12@gmail.com",className:"email-btn","aria-label":"Send email to Abbos Jabborov",children:[L.jsx(gb,{size:18}),L.jsx("span",{children:"Email me (abbosjabborov12@gmail.com)"})]}),L.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"social-link-btn","aria-label":"Open GitHub Profile",children:[L.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:L.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),L.jsx("span",{children:"GitHub"})]}),L.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"social-link-btn","aria-label":"Open LinkedIn Profile",children:[L.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:L.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),L.jsx("span",{children:"LinkedIn"})]})]})]})}function Db({isOpen:s,onClose:e,onToggleTheme:i}){const[r,l]=Re.useState(""),[c,f]=Re.useState(0),p=Re.useRef(null),h=[{label:"About Me",target:"#about",type:"jump"},{label:"Experience & Competitions",target:"#experience",type:"jump"},{label:"Technical Toolbox",target:"#toolbox",type:"jump"},{label:"Selected Work & Projects",target:"#projects",type:"jump"},{label:"Off Duty Photo Gallery",target:"#photos",type:"jump"},{label:"Contact & Email",target:"#contact",type:"jump"},{label:"Toggle Light / Dark Theme",target:"theme",type:"action"}].filter(g=>g.label.toLowerCase().includes(r.toLowerCase()));Re.useEffect(()=>{s&&(l(""),f(0),setTimeout(()=>p.current?.focus(),50))},[s]);const v=g=>{if(e(),g.target==="theme")i();else{const M=document.querySelector(g.target);M&&M.scrollIntoView({behavior:"smooth"})}},_=g=>{g.key==="Escape"?e():g.key==="ArrowDown"?(g.preventDefault(),f(M=>Math.min(h.length-1,M+1))):g.key==="ArrowUp"?(g.preventDefault(),f(M=>Math.max(0,M-1))):g.key==="Enter"&&h[c]&&(g.preventDefault(),v(h[c]))};return s?L.jsx("div",{className:"pal-backdrop",onClick:e,role:"dialog","aria-modal":"true",children:L.jsxs("div",{className:"pal-box",onClick:g=>g.stopPropagation(),children:[L.jsx("input",{ref:p,type:"text",value:r,onChange:g=>{l(g.target.value),f(0)},onKeyDown:_,placeholder:"Jump to a section or toggle theme...","aria-label":"Command search"}),L.jsx("ul",{children:h.length===0?L.jsx("li",{style:{padding:"12px",color:"var(--muted)",fontSize:"14px"},children:"No matching commands."}):h.map((g,M)=>L.jsx("li",{children:L.jsxs("button",{type:"button","aria-selected":M===c,onClick:()=>v(g),onMouseEnter:()=>f(M),children:[L.jsx("span",{children:g.label}),L.jsx("small",{children:g.type==="jump"?"jump":"toggle"})]})},g.label))})]})}):null}function Ub(){const[s,e]=Re.useState("dark"),[i,r]=Re.useState(!1),[l,c]=Re.useState(!1);Re.useEffect(()=>{document.documentElement.setAttribute("data-theme",s)},[s]);const f=()=>{e(m=>m==="dark"?"light":"dark")};Re.useEffect(()=>{const m=h=>{(h.ctrlKey||h.metaKey)&&h.key.toLowerCase()==="k"&&(h.preventDefault(),r(v=>!v))};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]);const p=["Unity 6","C#","Gameplay Systems","Shaders & HLSL","Game Design","Cinemachine","Django REST","React","Docker","Git","Game Jams","Volleyball","Photography"];return L.jsxs("div",{className:"portfolio-container",children:[L.jsx(WM,{onKeyDrive:()=>c(!0)}),L.jsx(qM,{isDriving:l}),L.jsx(Db,{isOpen:i,onClose:()=>r(!1),onToggleTheme:f}),L.jsxs("div",{className:"wrap",children:[L.jsx("header",{children:L.jsxs("nav",{className:"site-nav","aria-label":"Main Navigation",children:[L.jsxs("a",{href:"#hero",className:"mark",children:[L.jsx("span",{className:"pulse-dot"}),L.jsx("span",{children:"Claive"})]}),L.jsxs("ul",{children:[L.jsx("li",{children:L.jsx("a",{href:"#about",children:"About"})}),L.jsx("li",{children:L.jsx("a",{href:"#experience",children:"Experience"})}),L.jsx("li",{children:L.jsx("a",{href:"#toolbox",children:"Toolbox"})}),L.jsx("li",{children:L.jsx("a",{href:"#projects",children:"Projects"})}),L.jsx("li",{children:L.jsx("a",{href:"#photos",children:"Photos"})}),L.jsx("li",{children:L.jsx("a",{href:"#contact",children:"Contact"})})]}),L.jsxs("div",{className:"nav-actions",children:[L.jsxs("button",{type:"button",className:"kbtn",onClick:()=>r(!0),"aria-label":"Open command menu",children:[L.jsx("span",{children:"Jump"}),L.jsx("kbd",{children:"Ctrl K"})]}),L.jsx("button",{type:"button",className:"theme-toggle-btn",onClick:f,"aria-label":"Toggle light/dark theme",title:`Switch to ${s==="dark"?"light":"dark"} mode`,children:s==="dark"?L.jsx(Ab,{size:16}):L.jsx(_b,{size:16})})]})]})}),L.jsxs("section",{className:"hero",id:"hero",children:[L.jsxs("h1",{"aria-label":"Abbos Jabborov",children:["Abbos".split("").map((m,h)=>L.jsx("span",{className:"ch",children:m},`a-${h}`)),L.jsx("br",{}),"Jabborov".split("").map((m,h)=>L.jsx("span",{className:"ch",children:m},`j-${h}`))]}),L.jsx("p",{className:"role",children:"Unity developer and 3C game designer"}),L.jsxs("div",{className:"actions-row",children:[L.jsxs("a",{className:"mag",href:"#projects",children:[L.jsx("span",{children:"See the work"}),L.jsx(lb,{size:18})]}),L.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"social-pill",children:"GitHub ↗"}),L.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"social-pill",children:"LinkedIn ↗"})]})]}),L.jsx("div",{className:"marquee","aria-hidden":"true",children:L.jsx("div",{className:"track",children:p.concat(p).map((m,h)=>L.jsx("span",{children:m},h))})}),L.jsxs("section",{id:"about",children:[L.jsxs("header",{children:[L.jsx("span",{className:"label",children:"About"}),L.jsx("h2",{children:"Programmer who designs, designer who programs"})]}),L.jsxs("div",{className:"about-card spot",children:[L.jsx("p",{children:"I work across gameplay programming, game design, and the technical side of indie game production. Most days that means writing responsive movement and vehicle mechanics in Unity, then tuning the feel until every input gives back satisfying momentum."}),L.jsx("p",{className:"highlight",children:"I appreciate cozy, warm, and minimal design, and I lean on custom shaders to give projects a distinct aesthetic—retro outlines, vertex CRT warps, and tactile post-processing. When stepping away from the screen, you can find me playing volleyball, hunting down good espresso, or snapping quiet city frames."})]})]}),L.jsxs("section",{id:"experience",children:[L.jsxs("header",{children:[L.jsx("span",{className:"label",children:"Journey"}),L.jsx("h2",{children:"Experience & Competitions"})]}),L.jsx(YM,{})]}),L.jsxs("section",{id:"toolbox",children:[L.jsxs("header",{children:[L.jsx("span",{className:"label",children:"Skills & Stack"}),L.jsx("h2",{children:"Technical Toolbox"})]}),L.jsx(ZM,{})]}),L.jsxs("section",{id:"projects",children:[L.jsxs("header",{children:[L.jsx("span",{className:"label",children:"Selected Work"}),L.jsx("h2",{children:"Projects & Prototypes"})]}),L.jsx(KM,{})]}),L.jsxs("section",{id:"photos",children:[L.jsxs("header",{children:[L.jsx("span",{className:"label",children:"Off Duty"}),L.jsx("h2",{children:"Moments Outside the Screen"})]}),L.jsx("p",{style:{color:"var(--muted)",margin:"-12px 0 0",fontSize:"16px"},children:"Life away from code: volleyball games with friends, quiet coffee shops, and everyday frames."}),L.jsx(JM,{})]}),L.jsx("section",{id:"contact",children:L.jsx(wb,{})}),L.jsxs("footer",{className:"site-footer",children:[L.jsx("span",{className:"label",children:"Claive · Abbos Jabborov"}),L.jsx("button",{type:"button",className:"scroll-top-btn",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to Top ↑"})]})]})]})}const op="185",Lb=0,Av=1,Nb=2,Jc=1,Ob=2,il=3,_r=0,fi=1,ra=2,Pa=0,Ys=1,Xs=2,Rv=3,Cv=4,Pb=5,Vr=100,Ib=101,zb=102,Fb=103,Bb=104,Hb=200,Gb=201,Vb=202,kb=203,fh=204,dh=205,Xb=206,Wb=207,qb=208,Yb=209,jb=210,Zb=211,Kb=212,Qb=213,Jb=214,hh=0,ph=1,mh=2,Ks=3,gh=4,vh=5,_h=6,xh=7,Q_=0,$b=1,eE=2,la=0,J_=1,$_=2,ex=3,tx=4,nx=5,ix=6,ax=7,rx=300,Yr=301,Qs=302,Ud=303,Ld=304,pu=306,yh=1e3,Oa=1001,Sh=1002,Vn=1003,tE=1004,Ac=1005,jn=1006,Nd=1007,Xr=1008,Fi=1009,sx=1010,ox=1011,ul=1012,lp=1013,ua=1014,sa=1015,za=1016,cp=1017,up=1018,fl=1020,lx=35902,cx=35899,ux=1021,fx=1022,Zi=1023,Fa=1026,Wr=1027,dx=1028,fp=1029,jr=1030,dp=1031,hp=1033,$c=33776,eu=33777,tu=33778,nu=33779,Mh=35840,bh=35841,Eh=35842,Th=35843,Ah=36196,Rh=37492,Ch=37496,wh=37488,Dh=37489,au=37490,Uh=37491,Lh=37808,Nh=37809,Oh=37810,Ph=37811,Ih=37812,zh=37813,Fh=37814,Bh=37815,Hh=37816,Gh=37817,Vh=37818,kh=37819,Xh=37820,Wh=37821,qh=36492,Yh=36494,jh=36495,Zh=36283,Kh=36284,ru=36285,Qh=36286,nE=3200,wv=0,iE=1,mr="",Ii="srgb",su="srgb-linear",ou="linear",rn="srgb",Cs=7680,Dv=519,aE=512,rE=513,sE=514,pp=515,oE=516,lE=517,mp=518,cE=519,Uv=35044,Lv=35048,Nv="300 es",oa=2e3,lu=2001;function uE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fE(){const s=cu("canvas");return s.style.display="block",s}const Ov={};function Pv(...s){const e="THREE."+s.shift();console.log(e,...s)}function hx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=hx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Gt(...s){s=hx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function js(...s){const e=s.join(" ");e in Ov||(Ov[e]=!0,ct(...s))}function dE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const hE={[hh]:ph,[mh]:_h,[gh]:xh,[Ks]:vh,[ph]:hh,[_h]:mh,[xh]:gh,[vh]:Ks};class Kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iv=1234567;const rl=Math.PI/180,dl=180/Math.PI;function to(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[i&63|128]+qn[i>>8&255]+"-"+qn[i>>16&255]+qn[i>>24&255]+qn[r&255]+qn[r>>8&255]+qn[r>>16&255]+qn[r>>24&255]).toLowerCase()}function Ot(s,e,i){return Math.max(e,Math.min(i,s))}function gp(s,e){return(s%e+e)%e}function pE(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function mE(s,e,i){return s!==e?(i-s)/(e-s):0}function sl(s,e,i){return(1-i)*s+i*e}function gE(s,e,i,r){return sl(s,e,1-Math.exp(-i*r))}function vE(s,e=1){return e-Math.abs(gp(s,e*2)-e)}function _E(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function xE(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function yE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function SE(s,e){return s+Math.random()*(e-s)}function ME(s){return s*(.5-Math.random())}function bE(s){s!==void 0&&(Iv=s);let e=Iv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EE(s){return s*rl}function TE(s){return s*dl}function AE(s){return(s&s-1)===0&&s!==0}function RE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function CE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wE(s,e,i,r,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),h=c((e+r)/2),v=f((e+r)/2),_=c((e-r)/2),g=f((e-r)/2),M=c((r-e)/2),E=f((r-e)/2);switch(l){case"XYX":s.set(p*v,m*_,m*g,p*h);break;case"YZY":s.set(m*g,p*v,m*_,p*h);break;case"ZXZ":s.set(m*_,m*g,p*v,p*h);break;case"XZX":s.set(p*v,m*E,m*M,p*h);break;case"YXY":s.set(m*M,p*v,m*E,p*h);break;case"ZYZ":s.set(m*E,m*M,p*v,p*h);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ks(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zo={DEG2RAD:rl,RAD2DEG:dl,generateUUID:to,clamp:Ot,euclideanModulo:gp,mapLinear:pE,inverseLerp:mE,lerp:sl,damp:gE,pingpong:vE,smoothstep:_E,smootherstep:xE,randInt:yE,randFloat:SE,randFloatSpread:ME,seededRandom:bE,degToRad:EE,radToDeg:TE,isPowerOfTwo:AE,ceilPowerOfTwo:RE,floorPowerOfTwo:CE,setQuaternionFromProperEuler:wE,normalize:Qn,denormalize:ks},yp=class yp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ot(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yp.prototype.isVector2=!0;let Xt=yp;class no{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,p){let m=r[l+0],h=r[l+1],v=r[l+2],_=r[l+3],g=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(_!==C||m!==g||h!==M||v!==E){let S=m*g+h*M+v*E+_*C;S<0&&(g=-g,M=-M,E=-E,C=-C,S=-S);let x=1-p;if(S<.9995){const I=Math.acos(S),H=Math.sin(I);x=Math.sin(x*I)/H,p=Math.sin(p*I)/H,m=m*x+g*p,h=h*x+M*p,v=v*x+E*p,_=_*x+C*p}else{m=m*x+g*p,h=h*x+M*p,v=v*x+E*p,_=_*x+C*p;const I=1/Math.sqrt(m*m+h*h+v*v+_*_);m*=I,h*=I,v*=I,_*=I}}e[i]=m,e[i+1]=h,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],_=c[f],g=c[f+1],M=c[f+2],E=c[f+3];return e[i]=p*E+v*_+m*M-h*g,e[i+1]=m*E+v*g+h*_-p*M,e[i+2]=h*E+v*M+p*g-m*_,e[i+3]=v*E-p*_-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),_=p(c/2),g=m(r/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*v*_+h*M*E,this._y=h*M*_-g*v*E,this._z=h*v*E+g*M*_,this._w=h*v*_-g*M*E;break;case"YXZ":this._x=g*v*_+h*M*E,this._y=h*M*_-g*v*E,this._z=h*v*E-g*M*_,this._w=h*v*_+g*M*E;break;case"ZXY":this._x=g*v*_-h*M*E,this._y=h*M*_+g*v*E,this._z=h*v*E+g*M*_,this._w=h*v*_-g*M*E;break;case"ZYX":this._x=g*v*_-h*M*E,this._y=h*M*_+g*v*E,this._z=h*v*E-g*M*_,this._w=h*v*_+g*M*E;break;case"YZX":this._x=g*v*_+h*M*E,this._y=h*M*_+g*v*E,this._z=h*v*E-g*M*_,this._w=h*v*_-g*M*E;break;case"XZY":this._x=g*v*_-h*M*E,this._y=h*M*_-g*v*E,this._z=h*v*E+g*M*_,this._w=h*v*_+g*M*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],v=i[6],_=i[10],g=r+p+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(r>p&&r>_){const M=2*Math.sqrt(1+r-p-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>_){const M=2*Math.sqrt(1+p-r-_);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+f*p+l*h-c*m,this._y=l*v+f*m+c*p-r*h,this._z=c*v+f*h+r*m-l*p,this._w=f*v-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sp=class Sp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(zv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(zv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*r),v=2*(p*i-c*l),_=2*(c*r-f*i);return this.x=i+m*h+f*_-p*v,this.y=r+m*v+p*h-c*_,this.z=l+m*_+c*v-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this.z=Ot(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this.z=Ot(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-r*m,this.z=r*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ot(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sp.prototype.isVector3=!0;let te=Sp;const Od=new te,zv=new no,Mp=class Mp{constructor(e,i,r,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h)}set(e,i,r,l,c,f,p,m,h){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],v=r[4],_=r[7],g=r[2],M=r[5],E=r[8],C=l[0],S=l[3],x=l[6],I=l[1],H=l[4],w=l[7],F=l[2],P=l[5],z=l[8];return c[0]=f*C+p*I+m*F,c[3]=f*S+p*H+m*P,c[6]=f*x+p*w+m*z,c[1]=h*C+v*I+_*F,c[4]=h*S+v*H+_*P,c[7]=h*x+v*w+_*z,c[2]=g*C+M*I+E*F,c[5]=g*S+M*H+E*P,c[8]=g*x+M*w+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8];return i*f*v-i*p*h-r*c*v+r*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],_=v*f-p*h,g=p*m-v*c,M=h*c-f*m,E=i*_+r*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(l*h-v*r)*C,e[2]=(p*r-l*f)*C,e[3]=g*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(r*m-h*i)*C,e[8]=(f*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mp.prototype.isMatrix3=!0;let pt=Mp;const Pd=new pt,Fv=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bv=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const s={enabled:!0,workingColorSpace:su,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===rn&&(l.r=Ia(l.r),l.g=Ia(l.g),l.b=Ia(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===rn&&(l.r=Zs(l.r),l.g=Zs(l.g),l.b=Zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===mr?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[su]:{primaries:e,whitePoint:r,transfer:ou,toXYZ:Fv,fromXYZ:Bv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ii},outputColorSpaceConfig:{drawingBufferColorSpace:Ii}},[Ii]:{primaries:e,whitePoint:r,transfer:rn,toXYZ:Fv,fromXYZ:Bv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ii}}}),s}const Ft=DE();function Ia(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class UE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ws===void 0&&(ws=cu("canvas")),ws.width=e.width,ws.height=e.height;const l=ws.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ws}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ia(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ia(i[r]/255)*255):i[r]=Ia(i[r]);return{data:i,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LE=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Id(l[f].image)):c.push(Id(l[f]))}else c=Id(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?UE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let NE=0;const zd=new te;class Zn extends Kr{constructor(e=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,r=Oa,l=Oa,c=jn,f=Xr,p=Zi,m=Fi,h=Zn.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=to(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=rx;Zn.DEFAULT_ANISOTROPY=1;const bp=class bp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],v=m[4],_=m[8],g=m[1],M=m[5],E=m[9],C=m[2],S=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(E+S)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(h+1)/2,w=(M+1)/2,F=(x+1)/2,P=(v+g)/4,z=(_+C)/4,T=(E+S)/4;return H>w&&H>F?H<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(H),l=P/r,c=z/r):w>F?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=P/l,c=T/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=z/c,l=T/c),this.set(r,l,c,i),this}let I=Math.sqrt((S-E)*(S-E)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(_-C)/I,this.z=(g-v)/I,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this.z=Ot(this.z,e.z,i.z),this.w=Ot(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this.z=Ot(this.z,e,i),this.w=Ot(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bp.prototype.isVector4=!0;let Mn=bp;class OE extends Kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Mn(0,0,e,i),this.scissorTest=!1,this.viewport=new Mn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Zn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ca extends OE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class px extends Zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PE extends Zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,r,l,c,f,p,m,h,v,_,g,M,E,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,p,m,h,v,_,g,M,E,C,S)}set(e,i,r,l,c,f,p,m,h,v,_,g,M,E,C,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=h,x[6]=v,x[10]=_,x[14]=g,x[3]=M,x[7]=E,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ds.setFromMatrixColumn(e,0).length(),c=1/Ds.setFromMatrixColumn(e,1).length(),f=1/Ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=f*v,M=f*_,E=p*v,C=p*_;i[0]=m*v,i[4]=-m*_,i[8]=h,i[1]=M+E*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=E+M*h,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,M=m*_,E=h*v,C=h*_;i[0]=g+C*p,i[4]=E*p-M,i[8]=f*h,i[1]=f*_,i[5]=f*v,i[9]=-p,i[2]=M*p-E,i[6]=C+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,M=m*_,E=h*v,C=h*_;i[0]=g-C*p,i[4]=-f*_,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*v,i[9]=C-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,M=f*_,E=p*v,C=p*_;i[0]=m*v,i[4]=E*h-M,i[8]=g*h+C,i[1]=m*_,i[5]=C*h+g,i[9]=M*h-E,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*h,E=p*m,C=p*h;i[0]=m*v,i[4]=C-g*_,i[8]=E*_+M,i[1]=_,i[5]=f*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*_+E,i[10]=g-C*_}else if(e.order==="XZY"){const g=f*m,M=f*h,E=p*m,C=p*h;i[0]=m*v,i[4]=-_,i[8]=h*v,i[1]=g*_+C,i[5]=f*v,i[9]=M*_-E,i[2]=E*_-M,i[6]=p*v,i[10]=C*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IE,e,zE)}lookAt(e,i,r){const l=this.elements;return Mi.subVectors(e,i),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),cr.crossVectors(r,Mi),cr.lengthSq()===0&&(Math.abs(r.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),cr.crossVectors(r,Mi)),cr.normalize(),Rc.crossVectors(Mi,cr),l[0]=cr.x,l[4]=Rc.x,l[8]=Mi.x,l[1]=cr.y,l[5]=Rc.y,l[9]=Mi.y,l[2]=cr.z,l[6]=Rc.z,l[10]=Mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],v=r[1],_=r[5],g=r[9],M=r[13],E=r[2],C=r[6],S=r[10],x=r[14],I=r[3],H=r[7],w=r[11],F=r[15],P=l[0],z=l[4],T=l[8],D=l[12],X=l[1],G=l[5],K=l[9],ge=l[13],ie=l[2],Y=l[6],B=l[10],V=l[14],ae=l[3],pe=l[7],Ue=l[11],O=l[15];return c[0]=f*P+p*X+m*ie+h*ae,c[4]=f*z+p*G+m*Y+h*pe,c[8]=f*T+p*K+m*B+h*Ue,c[12]=f*D+p*ge+m*V+h*O,c[1]=v*P+_*X+g*ie+M*ae,c[5]=v*z+_*G+g*Y+M*pe,c[9]=v*T+_*K+g*B+M*Ue,c[13]=v*D+_*ge+g*V+M*O,c[2]=E*P+C*X+S*ie+x*ae,c[6]=E*z+C*G+S*Y+x*pe,c[10]=E*T+C*K+S*B+x*Ue,c[14]=E*D+C*ge+S*V+x*O,c[3]=I*P+H*X+w*ie+F*ae,c[7]=I*z+H*G+w*Y+F*pe,c[11]=I*T+H*K+w*B+F*Ue,c[15]=I*D+H*ge+w*V+F*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],v=e[2],_=e[6],g=e[10],M=e[14],E=e[3],C=e[7],S=e[11],x=e[15],I=m*M-h*g,H=p*M-h*_,w=p*g-m*_,F=f*M-h*v,P=f*g-m*v,z=f*_-p*v;return i*(C*I-S*H+x*w)-r*(E*I-S*F+x*P)+l*(E*H-C*F+x*z)-c*(E*w-C*P+S*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],h=e[6],v=e[10];return i*(f*v-p*h)-r*(c*v-p*m)+l*(c*h-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],v=e[8],_=e[9],g=e[10],M=e[11],E=e[12],C=e[13],S=e[14],x=e[15],I=i*p-r*f,H=i*m-l*f,w=i*h-c*f,F=r*m-l*p,P=r*h-c*p,z=l*h-c*m,T=v*C-_*E,D=v*S-g*E,X=v*x-M*E,G=_*S-g*C,K=_*x-M*C,ge=g*x-M*S,ie=I*ge-H*K+w*G+F*X-P*D+z*T;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ie;return e[0]=(p*ge-m*K+h*G)*Y,e[1]=(l*K-r*ge-c*G)*Y,e[2]=(C*z-S*P+x*F)*Y,e[3]=(g*P-_*z-M*F)*Y,e[4]=(m*X-f*ge-h*D)*Y,e[5]=(i*ge-l*X+c*D)*Y,e[6]=(S*w-E*z-x*H)*Y,e[7]=(v*z-g*w+M*H)*Y,e[8]=(f*K-p*X+h*T)*Y,e[9]=(r*X-i*K-c*T)*Y,e[10]=(E*P-C*w+x*I)*Y,e[11]=(_*w-v*P-M*I)*Y,e[12]=(p*D-f*G-m*T)*Y,e[13]=(i*G-r*D+l*T)*Y,e[14]=(C*H-E*F-S*I)*Y,e[15]=(v*F-_*H+g*I)*Y,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,p=e.y,m=e.z,h=c*f,v=c*p;return this.set(h*f+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*f,0,h*m-l*p,v*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,v=f+f,_=p+p,g=c*h,M=c*v,E=c*_,C=f*v,S=f*_,x=p*_,I=m*h,H=m*v,w=m*_,F=r.x,P=r.y,z=r.z;return l[0]=(1-(C+x))*F,l[1]=(M+w)*F,l[2]=(E-H)*F,l[3]=0,l[4]=(M-w)*P,l[5]=(1-(g+x))*P,l[6]=(S+I)*P,l[7]=0,l[8]=(E+H)*z,l[9]=(S-I)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let f=Ds.set(l[0],l[1],l[2]).length();const p=Ds.set(l[4],l[5],l[6]).length(),m=Ds.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Wi.copy(this);const h=1/f,v=1/p,_=1/m;return Wi.elements[0]*=h,Wi.elements[1]*=h,Wi.elements[2]*=h,Wi.elements[4]*=v,Wi.elements[5]*=v,Wi.elements[6]*=v,Wi.elements[8]*=_,Wi.elements[9]*=_,Wi.elements[10]*=_,i.setFromRotationMatrix(Wi),r.x=f,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,f,p=oa,m=!1){const h=this.elements,v=2*c/(i-e),_=2*c/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(p===oa)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===lu)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,f,p=oa,m=!1){const h=this.elements,v=2/(i-e),_=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(p===oa)E=-2/(f-c),C=-(f+c)/(f-c);else if(p===lu)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};du.prototype.isMatrix4=!0;let xn=du;const Ds=new te,Wi=new xn,IE=new te(0,0,0),zE=new te(1,1,1),cr=new te,Rc=new te,Mi=new te,Hv=new xn,Gv=new no;class Zr{constructor(e=0,i=0,r=0,l=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],v=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ot(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Gv.setFromEuler(this),this.setFromQuaternion(Gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FE=0;const Vv=new te,Us=new no,wa=new xn,Cc=new te,Ko=new te,BE=new te,HE=new no,kv=new te(1,0,0),Xv=new te(0,1,0),Wv=new te(0,0,1),qv={type:"added"},GE={type:"removed"},Ls={type:"childadded",child:null},Fd={type:"childremoved",child:null};class $n extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new te,i=new Zr,r=new no,l=new te(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new pt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(kv,e)}rotateY(e){return this.rotateOnAxis(Xv,e)}rotateZ(e){return this.rotateOnAxis(Wv,e)}translateOnAxis(e,i){return Vv.copy(e).applyQuaternion(this.quaternion),this.position.add(Vv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(kv,e)}translateY(e){return this.translateOnAxis(Xv,e)}translateZ(e){return this.translateOnAxis(Wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Cc.copy(e):Cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(Ko,Cc,this.up):wa.lookAt(Cc,Ko,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),Us.setFromRotationMatrix(wa),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(GE),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,BE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,HE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),v=f(e.images),_=f(e.shapes),g=f(e.skeletons),M=f(e.animations),E=f(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}$n.DEFAULT_UP=new te(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ws extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VE={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),x=this._getHandJoint(h,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,E=.005;h.inputState.pinching&&g>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(VE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ws;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Hd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Dt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ft.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ft.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ft.workingColorSpace){if(e=gp(e,1),i=Ot(i,0,1),r=Ot(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Hd(f,c,e+1/3),this.g=Hd(f,c,e),this.b=Hd(f,c,e-1/3)}return Ft.colorSpaceToWorking(this,l),this}setStyle(e,i=Ii){function r(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ii){const r=mx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ii){return Ft.workingToColorSpace(Yn.copy(this),e),Math.round(Ot(Yn.r*255,0,255))*65536+Math.round(Ot(Yn.g*255,0,255))*256+Math.round(Ot(Yn.b*255,0,255))}getHexString(e=Ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ft.workingColorSpace){Ft.workingToColorSpace(Yn.copy(this),i);const r=Yn.r,l=Yn.g,c=Yn.b,f=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const v=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=v<=.5?_/(f+p):_/(2-f-p),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,i=Ft.workingColorSpace){return Ft.workingToColorSpace(Yn.copy(this),i),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=Ii){Ft.workingToColorSpace(Yn.copy(this),e);const i=Yn.r,r=Yn.g,l=Yn.b;return e!==Ii?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+i,ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ur),e.getHSL(wc);const r=sl(ur.h,wc.h,i),l=sl(ur.s,wc.s,i),c=sl(ur.l,wc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Dt;Dt.NAMES=mx;class kE extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qi=new te,Da=new te,Gd=new te,Ua=new te,Ns=new te,Os=new te,Yv=new te,Vd=new te,kd=new te,Xd=new te,Wd=new Mn,qd=new Mn,Yd=new Mn;class ji{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),qi.subVectors(e,i),l.cross(qi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){qi.subVectors(l,i),Da.subVectors(r,i),Gd.subVectors(e,i);const f=qi.dot(qi),p=qi.dot(Da),m=qi.dot(Gd),h=Da.dot(Da),v=Da.dot(Gd),_=f*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,M=(h*m-p*v)*g,E=(f*v-p*m)*g;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,r,l,c,f,p,m){return this.getBarycoord(e,i,r,l,Ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ua.x),m.addScaledVector(f,Ua.y),m.addScaledVector(p,Ua.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Wd.setScalar(0),qd.setScalar(0),Yd.setScalar(0),Wd.fromBufferAttribute(e,i),qd.fromBufferAttribute(e,r),Yd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Wd,c.x),f.addScaledVector(qd,c.y),f.addScaledVector(Yd,c.z),f}static isFrontFacing(e,i,r,l){return qi.subVectors(r,i),Da.subVectors(e,i),qi.cross(Da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),qi.cross(Da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ji.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return ji.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,p;Ns.subVectors(l,r),Os.subVectors(c,r),Vd.subVectors(e,r);const m=Ns.dot(Vd),h=Os.dot(Vd);if(m<=0&&h<=0)return i.copy(r);kd.subVectors(e,l);const v=Ns.dot(kd),_=Os.dot(kd);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*h;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(Ns,f);Xd.subVectors(e,c);const M=Ns.dot(Xd),E=Os.dot(Xd);if(E>=0&&M<=E)return i.copy(c);const C=M*h-m*E;if(C<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(r).addScaledVector(Os,p);const S=v*E-M*_;if(S<=0&&_-v>=0&&M-E>=0)return Yv.subVectors(c,l),p=(_-v)/(_-v+(M-E)),i.copy(l).addScaledVector(Yv,p);const x=1/(S+C+g);return f=C*x,p=g*x,i.copy(r).addScaledVector(Ns,f).addScaledVector(Os,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ml{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Yi):Yi.fromBufferAttribute(c,f),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Dc.copy(r.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Uc.subVectors(this.max,Qo),Ps.subVectors(e.a,Qo),Is.subVectors(e.b,Qo),zs.subVectors(e.c,Qo),fr.subVectors(Is,Ps),dr.subVectors(zs,Is),zr.subVectors(Ps,zs);let i=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-zr.z,zr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,zr.z,0,-zr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-zr.y,zr.x,0];return!jd(i,Ps,Is,zs,Uc)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,Ps,Is,zs,Uc))?!1:(Lc.crossVectors(fr,dr),i=[Lc.x,Lc.y,Lc.z],jd(i,Ps,Is,zs,Uc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const La=[new te,new te,new te,new te,new te,new te,new te,new te],Yi=new te,Dc=new ml,Ps=new te,Is=new te,zs=new te,fr=new te,dr=new te,zr=new te,Qo=new te,Uc=new te,Lc=new te,Fr=new te;function jd(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Fr.fromArray(s,c);const p=l.x*Math.abs(Fr.x)+l.y*Math.abs(Fr.y)+l.z*Math.abs(Fr.z),m=e.dot(Fr),h=i.dot(Fr),v=r.dot(Fr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const Dn=new te,Nc=new Xt;let XE=0;class ui extends Kr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Uv,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(e),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ks(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ks(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ks(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ks(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ks(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),l=Qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gx extends ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class vx extends ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class kn extends ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}const WE=new ml,Jo=new te,Zd=new te;class gl{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):WE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Jo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Zd)),this.expandByPoint(Jo.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qE=0;const Pi=new xn,Kd=new $n,Fs=new te,bi=new ml,$o=new ml,zn=new te;class ei extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uE(e)?vx:gx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,i,r){return Pi.makeTranslation(e,i,r),this.applyMatrix4(Pi),this}scale(e,i,r){return Pi.makeScale(e,i,r),this.applyMatrix4(Pi),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new kn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];bi.setFromBufferAttribute(c),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(zn.addVectors(bi.min,$o.min),bi.expandByPoint(zn),zn.addVectors(bi.max,$o.max),bi.expandByPoint(zn)):(bi.expandByPoint($o.min),bi.expandByPoint($o.max))}bi.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)zn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(zn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)zn.fromBufferAttribute(p,h),m&&(Fs.fromBufferAttribute(e,h),zn.add(Fs)),l=Math.max(l,r.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new ui(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new te,m[T]=new te;const h=new te,v=new te,_=new te,g=new Xt,M=new Xt,E=new Xt,C=new te,S=new te;function x(T,D,X){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,X),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,X),v.sub(h),_.sub(h),M.sub(g),E.sub(g);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(G),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(G),p[T].add(C),p[D].add(C),p[X].add(C),m[T].add(S),m[D].add(S),m[X].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,D=I.length;T<D;++T){const X=I[T],G=X.start,K=X.count;for(let ge=G,ie=G+K;ge<ie;ge+=3)x(e.getX(ge+0),e.getX(ge+1),e.getX(ge+2))}const H=new te,w=new te,F=new te,P=new te;function z(T){F.fromBufferAttribute(l,T),P.copy(F);const D=p[T];H.copy(D),H.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(P,D);const G=w.dot(m[T])<0?-1:1;f.setXYZW(T,H.x,H.y,H.z,G)}for(let T=0,D=I.length;T<D;++T){const X=I[T],G=X.start,K=X.count;for(let ge=G,ie=G+K;ge<ie;ge+=3)z(e.getX(ge+0)),z(e.getX(ge+1)),z(e.getX(ge+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new te,c=new te,f=new te,p=new te,m=new te,h=new te,v=new te,_=new te;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),p.add(v),m.add(v),h.add(v),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)zn.fromBufferAttribute(e,i),zn.normalize(),e.setXYZ(i,zn.x,zn.y,zn.z)}toNonIndexed(){function e(p,m){const h=p.array,v=p.itemSize,_=p.normalized,g=new h.constructor(m.length*v);let M=0,E=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let x=0;x<v;x++)g[E++]=h[M++]}return new ui(g,v,_)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ei,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,_=h.length;v<_;v++){const g=h[v],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let _=0,g=h.length;_<g;_++){const M=h[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=e.morphAttributes;for(const h in c){const v=[],_=c[h];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,v=f.length;h<v;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let YE=0;class io extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=to(),this.name="",this.type="Material",this.blending=Ys,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=dh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==_r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fh&&(r.blendSrc=this.blendSrc),this.blendDst!==dh&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Na=new te,Qd=new te,Oc=new te,hr=new te,Jd=new te,Pc=new te,$d=new te;class mu{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Qd.copy(e).add(i).multiplyScalar(.5),Oc.copy(i).sub(e).normalize(),hr.copy(this.origin).sub(Qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Oc),p=hr.dot(this.direction),m=-hr.dot(Oc),h=hr.lengthSq(),v=Math.abs(1-f*f);let _,g,M,E;if(v>0)if(_=f*m-p,g=f*p-m,E=c*v,_>=0)if(g>=-E)if(g<=E){const C=1/v;_*=C,g*=C,M=_*(_+f*g+2*p)+g*(f*_+g+2*m)+h}else g=c,_=Math.max(0,-(f*g+p)),M=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(f*g+p)),M=-_*_+g*(g+2*m)+h;else g<=-E?(_=Math.max(0,-(-f*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+h):g<=E?(_=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(_=Math.max(0,-(f*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+h);else g=f>0?-c:c,_=Math.max(0,-(f*g+p)),M=-_*_+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qd).addScaledVector(Oc,g),M}intersectSphere(e,i){Na.subVectors(e.center,this.origin);const r=Na.dot(this.direction),l=Na.dot(Na)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,p,m;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(p=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,r,l,c){Jd.subVectors(i,e),Pc.subVectors(r,e),$d.crossVectors(Jd,Pc);let f=this.direction.dot($d),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;hr.subVectors(this.origin,e);const m=p*this.direction.dot(Pc.crossVectors(hr,Pc));if(m<0)return null;const h=p*this.direction.dot(Jd.cross(hr));if(h<0||m+h>f)return null;const v=-p*hr.dot($d);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qs extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jv=new xn,Br=new mu,Ic=new gl,Zv=new te,zc=new te,Fc=new te,Bc=new te,eh=new te,Hc=new te,Kv=new te,Gc=new te;class Ei extends $n{constructor(e=new ei,i=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Hc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],_=c[m];v!==0&&(eh.fromBufferAttribute(_,e),f?Hc.addScaledVector(eh,v):Hc.addScaledVector(eh.sub(i),v))}i.add(Hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(Ic.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Ic,Zv)===null||Br.origin.distanceToSquared(Zv)>(e.far-e.near)**2))&&(jv.copy(c).invert(),Br.copy(e.ray).applyMatrix4(jv),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const S=g[E],x=f[S.materialIndex],I=Math.max(S.start,M.start),H=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let w=I,F=H;w<F;w+=3){const P=p.getX(w),z=p.getX(w+1),T=p.getX(w+2);l=Vc(this,x,e,r,h,v,_,P,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=E,x=C;S<x;S+=3){const I=p.getX(S),H=p.getX(S+1),w=p.getX(S+2);l=Vc(this,f,e,r,h,v,_,I,H,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const S=g[E],x=f[S.materialIndex],I=Math.max(S.start,M.start),H=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=I,F=H;w<F;w+=3){const P=w,z=w+1,T=w+2;l=Vc(this,x,e,r,h,v,_,P,z,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=E,x=C;S<x;S+=3){const I=S,H=S+1,w=S+2;l=Vc(this,f,e,r,h,v,_,I,H,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function jE(s,e,i,r,l,c,f,p){let m;if(e.side===fi?m=r.intersectTriangle(f,c,l,!0,p):m=r.intersectTriangle(l,c,f,e.side===_r,p),m===null)return null;Gc.copy(p),Gc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Gc);return h<i.near||h>i.far?null:{distance:h,point:Gc.clone(),object:s}}function Vc(s,e,i,r,l,c,f,p,m,h){s.getVertexPosition(p,zc),s.getVertexPosition(m,Fc),s.getVertexPosition(h,Bc);const v=jE(s,e,i,r,zc,Fc,Bc,Kv);if(v){const _=new te;ji.getBarycoord(Kv,zc,Fc,Bc,_),l&&(v.uv=ji.getInterpolatedAttribute(l,p,m,h,_,new Xt)),c&&(v.uv1=ji.getInterpolatedAttribute(c,p,m,h,_,new Xt)),f&&(v.normal=ji.getInterpolatedAttribute(f,p,m,h,_,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new te,materialIndex:0};ji.getNormal(zc,Fc,Bc,g.normal),v.face=g,v.barycoord=_}return v}class ZE extends Zn{constructor(e=null,i=1,r=1,l,c,f,p,m,h=Vn,v=Vn,_,g){super(null,f,p,m,h,v,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=new te,KE=new te,QE=new pt;class Gr{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=th.subVectors(r,i).cross(KE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(th),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||QE.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new gl,JE=new Xt(.5,.5),kc=new te;class _x{constructor(e=new Gr,i=new Gr,r=new Gr,l=new Gr,c=new Gr,f=new Gr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa,r=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],v=c[4],_=c[5],g=c[6],M=c[7],E=c[8],C=c[9],S=c[10],x=c[11],I=c[12],H=c[13],w=c[14],F=c[15];if(l[0].setComponents(h-f,M-v,x-E,F-I).normalize(),l[1].setComponents(h+f,M+v,x+E,F+I).normalize(),l[2].setComponents(h+p,M+_,x+C,F+H).normalize(),l[3].setComponents(h-p,M-_,x-C,F-H).normalize(),r)l[4].setComponents(m,g,S,w).normalize(),l[5].setComponents(h-m,M-g,x-S,F-w).normalize();else if(l[4].setComponents(h-m,M-g,x-S,F-w).normalize(),i===oa)l[5].setComponents(h+m,M+g,x+S,F+w).normalize();else if(i===lu)l[5].setComponents(m,g,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=JE.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xx extends io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new te,fu=new te,Qv=new xn,el=new mu,Xc=new gl,nh=new te,Jv=new te;class $E extends $n{constructor(e=new ei,i=new xx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new kn(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xc.copy(r.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,e.ray.intersectsSphere(Xc)===!1)return;Qv.copy(l).invert(),el.copy(e.ray).applyMatrix4(Qv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const M=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let C=M,S=E-1;C<S;C+=h){const x=v.getX(C),I=v.getX(C+1),H=Wc(this,e,el,m,x,I,C);H&&i.push(H)}if(this.isLineLoop){const C=v.getX(E-1),S=v.getX(M),x=Wc(this,e,el,m,C,S,E-1);x&&i.push(x)}}else{const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let C=M,S=E-1;C<S;C+=h){const x=Wc(this,e,el,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Wc(this,e,el,m,E-1,M,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Wc(s,e,i,r,l,c,f){const p=s.geometry.attributes.position;if(uu.fromBufferAttribute(p,l),fu.fromBufferAttribute(p,c),i.distanceSqToSegment(uu,fu,nh,Jv)>r)return;nh.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(nh);if(!(h<e.near||h>e.far))return{distance:h,point:Jv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const $v=new te,e_=new te;class e1 extends $E{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)$v.fromBufferAttribute(i,l),e_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+$v.distanceTo(e_);e.setAttribute("lineDistance",new kn(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yx extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const t_=new xn,Jh=new mu,qc=new gl,Yc=new te;class t1 extends $n{constructor(e=new ei,i=new yx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qc.copy(r.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,e.ray.intersectsSphere(qc)===!1)return;t_.copy(l).invert(),Jh.copy(e.ray).applyMatrix4(t_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,_=r.attributes.position;if(h!==null){const g=Math.max(0,f.start),M=Math.min(h.count,f.start+f.count);for(let E=g,C=M;E<C;E++){const S=h.getX(E);Yc.fromBufferAttribute(_,S),n_(Yc,S,m,l,e,i,this)}}else{const g=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let E=g,C=M;E<C;E++)Yc.fromBufferAttribute(_,E),n_(Yc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function n_(s,e,i,r,l,c,f){const p=Jh.distanceSqToPoint(s);if(p<i){const m=new te;Jh.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Sx extends Zn{constructor(e=[],i=Yr,r,l,c,f,p,m,h,v){super(e,i,r,l,c,f,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n1 extends Zn{constructor(e,i,r,l,c,f,p,m,h){super(e,i,r,l,c,f,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Zn{constructor(e,i,r=ua,l,c,f,p=Vn,m=Vn,h,v=Fa,_=1){if(v!==Fa&&v!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,f,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class i1 extends Js{constructor(e,i=ua,r=Yr,l,c,f=Vn,p=Vn,m,h=Fa){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,c,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mx extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends ei{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],v=[],_=[];let g=0,M=0;E("z","y","x",-1,-1,r,i,e,f,c,0),E("z","y","x",1,-1,r,i,-e,f,c,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(_,2));function E(C,S,x,I,H,w,F,P,z,T,D){const X=w/z,G=F/T,K=w/2,ge=F/2,ie=P/2,Y=z+1,B=T+1;let V=0,ae=0;const pe=new te;for(let Ue=0;Ue<B;Ue++){const O=Ue*G-ge;for(let Q=0;Q<Y;Q++){const Ee=Q*X-K;pe[C]=Ee*I,pe[S]=O*H,pe[x]=ie,h.push(pe.x,pe.y,pe.z),pe[C]=0,pe[S]=0,pe[x]=P>0?1:-1,v.push(pe.x,pe.y,pe.z),_.push(Q/z),_.push(1-Ue/T),V+=1}}for(let Ue=0;Ue<T;Ue++)for(let O=0;O<z;O++){const Q=g+O+Y*Ue,Ee=g+O+Y*(Ue+1),Pe=g+(O+1)+Y*(Ue+1),Ve=g+(O+1)+Y*Ue;m.push(Q,Ee,Ve),m.push(Ee,Pe,Ve),ae+=6}p.addGroup(M,ae,D),M+=ae,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gu extends ei{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,_=e/p,g=i/m,M=[],E=[],C=[],S=[];for(let x=0;x<v;x++){const I=x*g-f;for(let H=0;H<h;H++){const w=H*_-c;E.push(w,-I,0),C.push(0,0,1),S.push(H/p),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<p;I++){const H=I+h*x,w=I+h*(x+1),F=I+1+h*(x+1),P=I+1+h*x;M.push(H,w,P),M.push(w,F,P)}this.setIndex(M),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(C,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class xp extends ei{constructor(e=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const p=[],m=[],h=[],v=[];let _=e;const g=(i-e)/l,M=new te,E=new Xt;for(let C=0;C<=l;C++){for(let S=0;S<=r;S++){const x=c+S/r*f;M.x=_*Math.cos(x),M.y=_*Math.sin(x),m.push(M.x,M.y,M.z),h.push(0,0,1),E.x=(M.x/i+1)/2,E.y=(M.y/i+1)/2,v.push(E.x,E.y)}_+=g}for(let C=0;C<l;C++){const S=C*(r+1);for(let x=0;x<r;x++){const I=x+S,H=I,w=I+r+1,F=I+r+2,P=I+1;p.push(H,w,P),p.push(w,F,P)}}this.setIndex(p),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(h,3)),this.setAttribute("uv",new kn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ol extends ei{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+p,Math.PI);let h=0;const v=[],_=new te,g=new te,M=[],E=[],C=[],S=[];for(let x=0;x<=r;x++){const I=[],H=x/r,w=f+H*p,F=e*Math.cos(w),P=Math.sqrt(e*e-F*F);let z=0;x===0&&f===0?z=.5/i:x===r&&m===Math.PI&&(z=-.5/i);for(let T=0;T<=i;T++){const D=T/i,X=l+D*c;_.x=-P*Math.cos(X),_.y=F,_.z=P*Math.sin(X),E.push(_.x,_.y,_.z),g.copy(_).normalize(),C.push(g.x,g.y,g.z),S.push(D+z,1-H),I.push(h++)}v.push(I)}for(let x=0;x<r;x++)for(let I=0;I<i;I++){const H=v[x][I+1],w=v[x][I],F=v[x+1][I],P=v[x+1][I+1];(x!==0||f>0)&&M.push(H,w,P),(x!==r-1||m<Math.PI)&&M.push(w,F,P)}this.setIndex(M),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(C,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function $s(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(i_(l))l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(i_(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Jn(s){const e={};for(let i=0;i<s.length;i++){const r=$s(s[i]);for(const l in r)e[l]=r[l]}return e}function i_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function a1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function bx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const r1={clone:$s,merge:Jn};var s1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=a1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Dt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Xt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new te().fromArray(l.value);break;case"v4":this.uniforms[r].value=new Mn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new pt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new xn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class l1 extends fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c1 extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u1 extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jc=new te,Zc=new no,na=new te;class Ex extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jc,Zc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Zc,na.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(jc,Zc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jc,Zc,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new te,a_=new Xt,r_=new Xt;class zi extends Ex{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,i){return this.getViewBounds(e,a_,r_),i.subVectors(r_,a_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(rl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Tx extends Ex{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Bs=-90,Hs=1;class f1 extends $n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new zi(Bs,Hs,e,i);l.layers=this.layers,this.add(l);const c=new zi(Bs,Hs,e,i);c.layers=this.layers,this.add(c);const f=new zi(Bs,Hs,e,i);f.layers=this.layers,this.add(f);const p=new zi(Bs,Hs,e,i);p.layers=this.layers,this.add(p);const m=new zi(Bs,Hs,e,i);m.layers=this.layers,this.add(m);const h=new zi(Bs,Hs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class d1 extends zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const s_=new xn;class h1{constructor(e,i,r=0,l=1/0){this.ray=new mu(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new _p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Gt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return s_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s_),this}intersectObject(e,i=!0,r=[]){return $h(e,this,r,i),r.sort(o_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)$h(e[l],this,r,i);return r.sort(o_),r}}function o_(s,e){return s.distance-e.distance}function $h(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,p=c.length;f<p;f++)$h(c[f],e,i,!0)}}const Ep=class Ep{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Ep.prototype.isMatrix2=!0;let l_=Ep;function c_(s,e,i,r){const l=p1(r);switch(i){case ux:return s*e;case dx:return s*e/l.components*l.byteLength;case fp:return s*e/l.components*l.byteLength;case jr:return s*e*2/l.components*l.byteLength;case dp:return s*e*2/l.components*l.byteLength;case fx:return s*e*3/l.components*l.byteLength;case Zi:return s*e*4/l.components*l.byteLength;case hp:return s*e*4/l.components*l.byteLength;case $c:case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bh:case Th:return Math.max(s,16)*Math.max(e,8)/4;case Mh:case Eh:return Math.max(s,8)*Math.max(e,8)/2;case Ah:case Rh:case wh:case Dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ch:case au:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qh:case Yh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ru:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function p1(s){switch(s){case Fi:case sx:return{byteLength:1,components:1};case ul:case ox:case za:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case ua:case lp:case sa:return{byteLength:4,components:1};case lx:case cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);function Ax(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function m1(s){const e=new WeakMap;function i(p,m){const h=p.array,v=p.usage,_=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const v=m.array,_=m.updateRanges;if(s.bindBuffer(h,p),_.length===0)s.bufferSubData(h,0,v);else{_.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<_.length;M++){const E=_[g],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];s.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var g1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
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
#endif`,_1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M1=`#ifdef USE_AOMAP
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
#endif`,b1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E1=`#ifdef USE_BATCHING
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
#endif`,T1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w1=`#ifdef USE_IRIDESCENCE
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
#endif`,D1=`#ifdef USE_BUMPMAP
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
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B1=`#define PI 3.141592653589793
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
} // validated`,H1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iT=`#ifdef USE_GRADIENTMAP
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
}`,aT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hT=`PhysicalMaterial material;
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
#endif`,pT=`uniform sampler2D dfgLUT;
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
}`,mT=`
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
#endif`,gT=`#if defined( RE_IndirectDiffuse )
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_T=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ET=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AT=`#if defined( USE_POINTS_UV )
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
#endif`,RT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`#ifdef USE_MORPHTARGETS
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
#endif`,NT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BT=`#ifdef USE_NORMALMAP
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
#endif`,HT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tA=`float getShadowMask() {
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
}`,nA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iA=`#ifdef USE_SKINNING
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
#endif`,aA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,sA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uA=`#ifdef USE_TRANSMISSION
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
#endif`,fA=`#ifdef USE_TRANSMISSION
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
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
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
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
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
}`,bA=`#if DEPTH_PACKING == 3200
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
}`,EA=`#define DISTANCE
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
}`,TA=`#define DISTANCE
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`uniform float scale;
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
}`,wA=`uniform vec3 diffuse;
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
}`,DA=`#include <common>
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
}`,UA=`uniform vec3 diffuse;
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
}`,LA=`#define LAMBERT
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
}`,NA=`#define LAMBERT
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
}`,OA=`#define MATCAP
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
}`,PA=`#define MATCAP
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
}`,IA=`#define NORMAL
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
}`,zA=`#define NORMAL
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
}`,FA=`#define PHONG
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
}`,BA=`#define PHONG
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
}`,HA=`#define STANDARD
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
}`,GA=`#define STANDARD
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
}`,VA=`#define TOON
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
}`,kA=`#define TOON
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
}`,XA=`uniform float size;
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
}`,WA=`uniform vec3 diffuse;
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
}`,qA=`#include <common>
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
}`,YA=`uniform vec3 color;
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
}`,jA=`uniform float rotation;
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
}`,ZA=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:g1,alphahash_pars_fragment:v1,alphamap_fragment:_1,alphamap_pars_fragment:x1,alphatest_fragment:y1,alphatest_pars_fragment:S1,aomap_fragment:M1,aomap_pars_fragment:b1,batching_pars_vertex:E1,batching_vertex:T1,begin_vertex:A1,beginnormal_vertex:R1,bsdfs:C1,iridescence_fragment:w1,bumpmap_pars_fragment:D1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:L1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:O1,color_fragment:P1,color_pars_fragment:I1,color_pars_vertex:z1,color_vertex:F1,common:B1,cube_uv_reflection_fragment:H1,defaultnormal_vertex:G1,displacementmap_pars_vertex:V1,displacementmap_vertex:k1,emissivemap_fragment:X1,emissivemap_pars_fragment:W1,colorspace_fragment:q1,colorspace_pars_fragment:Y1,envmap_fragment:j1,envmap_common_pars_fragment:Z1,envmap_pars_fragment:K1,envmap_pars_vertex:Q1,envmap_physical_pars_fragment:lT,envmap_vertex:J1,fog_vertex:$1,fog_pars_vertex:eT,fog_fragment:tT,fog_pars_fragment:nT,gradientmap_pars_fragment:iT,lightmap_pars_fragment:aT,lights_lambert_fragment:rT,lights_lambert_pars_fragment:sT,lights_pars_begin:oT,lights_toon_fragment:cT,lights_toon_pars_fragment:uT,lights_phong_fragment:fT,lights_phong_pars_fragment:dT,lights_physical_fragment:hT,lights_physical_pars_fragment:pT,lights_fragment_begin:mT,lights_fragment_maps:gT,lights_fragment_end:vT,lightprobes_pars_fragment:_T,logdepthbuf_fragment:xT,logdepthbuf_pars_fragment:yT,logdepthbuf_pars_vertex:ST,logdepthbuf_vertex:MT,map_fragment:bT,map_pars_fragment:ET,map_particle_fragment:TT,map_particle_pars_fragment:AT,metalnessmap_fragment:RT,metalnessmap_pars_fragment:CT,morphinstance_vertex:wT,morphcolor_vertex:DT,morphnormal_vertex:UT,morphtarget_pars_vertex:LT,morphtarget_vertex:NT,normal_fragment_begin:OT,normal_fragment_maps:PT,normal_pars_fragment:IT,normal_pars_vertex:zT,normal_vertex:FT,normalmap_pars_fragment:BT,clearcoat_normal_fragment_begin:HT,clearcoat_normal_fragment_maps:GT,clearcoat_pars_fragment:VT,iridescence_pars_fragment:kT,opaque_fragment:XT,packing:WT,premultiplied_alpha_fragment:qT,project_vertex:YT,dithering_fragment:jT,dithering_pars_fragment:ZT,roughnessmap_fragment:KT,roughnessmap_pars_fragment:QT,shadowmap_pars_fragment:JT,shadowmap_pars_vertex:$T,shadowmap_vertex:eA,shadowmask_pars_fragment:tA,skinbase_vertex:nA,skinning_pars_vertex:iA,skinning_vertex:aA,skinnormal_vertex:rA,specularmap_fragment:sA,specularmap_pars_fragment:oA,tonemapping_fragment:lA,tonemapping_pars_fragment:cA,transmission_fragment:uA,transmission_pars_fragment:fA,uv_pars_fragment:dA,uv_pars_vertex:hA,uv_vertex:pA,worldpos_vertex:mA,background_vert:gA,background_frag:vA,backgroundCube_vert:_A,backgroundCube_frag:xA,cube_vert:yA,cube_frag:SA,depth_vert:MA,depth_frag:bA,distance_vert:EA,distance_frag:TA,equirect_vert:AA,equirect_frag:RA,linedashed_vert:CA,linedashed_frag:wA,meshbasic_vert:DA,meshbasic_frag:UA,meshlambert_vert:LA,meshlambert_frag:NA,meshmatcap_vert:OA,meshmatcap_frag:PA,meshnormal_vert:IA,meshnormal_frag:zA,meshphong_vert:FA,meshphong_frag:BA,meshphysical_vert:HA,meshphysical_frag:GA,meshtoon_vert:VA,meshtoon_frag:kA,points_vert:XA,points_frag:WA,shadow_vert:qA,shadow_frag:YA,sprite_vert:jA,sprite_frag:ZA},qe={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},aa={basic:{uniforms:Jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Jn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Jn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Jn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Jn([qe.points,qe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Jn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Jn([qe.common,qe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Jn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Jn([qe.sprite,qe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Jn([qe.common,qe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Jn([qe.lights,qe.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};aa.physical={uniforms:Jn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Kc={r:0,b:0,g:0},KA=new xn,Rx=new pt;Rx.set(-1,0,0,0,1,0,0,0,1);function QA(s,e,i,r,l,c){const f=new Dt(0);let p=l===!0?0:1,m,h,v=null,_=0,g=null;function M(I){let H=I.isScene===!0?I.background:null;if(H&&H.isTexture){const w=I.backgroundBlurriness>0;H=e.get(H,w)}return H}function E(I){let H=!1;const w=M(I);w===null?S(f,p):w&&w.isColor&&(S(w,1),H=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(I,H){const w=M(H);w&&(w.isCubeTexture||w.mapping===pu)?(h===void 0&&(h=new Ei(new vl(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:$s(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KA.makeRotationFromEuler(H.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Rx),h.material.toneMapped=Ft.getTransfer(w.colorSpace)!==rn,(v!==w||_!==w.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=w,_=w.version,g=s.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Ei(new gu(2,2),new fa({name:"BackgroundMaterial",uniforms:$s(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Ft.getTransfer(w.colorSpace)!==rn,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||_!==w.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=w,_=w.version,g=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function S(I,H){I.getRGB(Kc,bx(s)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,H,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,H=1){f.set(I),p=H,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,S(f,p)},render:E,addToRenderList:C,dispose:x}}function JA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function p(G,K,ge,ie,Y){let B=!1;const V=_(G,ie,ge,K);c!==V&&(c=V,h(c.object)),B=M(G,ie,ge,Y),B&&E(G,ie,ge,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,w(G,K,ge,ie),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function _(G,K,ge,ie){const Y=ie.wireframe===!0;let B=r[K.id];B===void 0&&(B={},r[K.id]=B);const V=G.isInstancedMesh===!0?G.id:0;let ae=B[V];ae===void 0&&(ae={},B[V]=ae);let pe=ae[ge.id];pe===void 0&&(pe={},ae[ge.id]=pe);let Ue=pe[Y];return Ue===void 0&&(Ue=g(m()),pe[Y]=Ue),Ue}function g(G){const K=[],ge=[],ie=[];for(let Y=0;Y<i;Y++)K[Y]=0,ge[Y]=0,ie[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ge,attributeDivisors:ie,object:G,attributes:{},index:null}}function M(G,K,ge,ie){const Y=c.attributes,B=K.attributes;let V=0;const ae=ge.getAttributes();for(const pe in ae)if(ae[pe].location>=0){const O=Y[pe];let Q=B[pe];if(Q===void 0&&(pe==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),pe==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;V++}return c.attributesNum!==V||c.index!==ie}function E(G,K,ge,ie){const Y={},B=K.attributes;let V=0;const ae=ge.getAttributes();for(const pe in ae)if(ae[pe].location>=0){let O=B[pe];O===void 0&&(pe==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),pe==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),Y[pe]=Q,V++}c.attributes=Y,c.attributesNum=V,c.index=ie}function C(){const G=c.newAttributes;for(let K=0,ge=G.length;K<ge;K++)G[K]=0}function S(G){x(G,0)}function x(G,K){const ge=c.newAttributes,ie=c.enabledAttributes,Y=c.attributeDivisors;ge[G]=1,ie[G]===0&&(s.enableVertexAttribArray(G),ie[G]=1),Y[G]!==K&&(s.vertexAttribDivisor(G,K),Y[G]=K)}function I(){const G=c.newAttributes,K=c.enabledAttributes;for(let ge=0,ie=K.length;ge<ie;ge++)K[ge]!==G[ge]&&(s.disableVertexAttribArray(ge),K[ge]=0)}function H(G,K,ge,ie,Y,B,V){V===!0?s.vertexAttribIPointer(G,K,ge,Y,B):s.vertexAttribPointer(G,K,ge,ie,Y,B)}function w(G,K,ge,ie){C();const Y=ie.attributes,B=ge.getAttributes(),V=K.defaultAttributeValues;for(const ae in B){const pe=B[ae];if(pe.location>=0){let Ue=Y[ae];if(Ue===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(Ue=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(Ue=G.instanceColor)),Ue!==void 0){const O=Ue.normalized,Q=Ue.itemSize,Ee=e.get(Ue);if(Ee===void 0)continue;const Pe=Ee.buffer,Ve=Ee.type,ee=Ee.bytesPerElement,Me=Ve===s.INT||Ve===s.UNSIGNED_INT||Ue.gpuType===lp;if(Ue.isInterleavedBufferAttribute){const Ae=Ue.data,He=Ae.stride,Qe=Ue.offset;if(Ae.isInstancedInterleavedBuffer){for(let Ye=0;Ye<pe.locationSize;Ye++)x(pe.location+Ye,Ae.meshPerAttribute);G.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ye=0;Ye<pe.locationSize;Ye++)S(pe.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Ye=0;Ye<pe.locationSize;Ye++)H(pe.location+Ye,Q/pe.locationSize,Ve,O,He*ee,(Qe+Q/pe.locationSize*Ye)*ee,Me)}else{if(Ue.isInstancedBufferAttribute){for(let Ae=0;Ae<pe.locationSize;Ae++)x(pe.location+Ae,Ue.meshPerAttribute);G.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Ae=0;Ae<pe.locationSize;Ae++)S(pe.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Ae=0;Ae<pe.locationSize;Ae++)H(pe.location+Ae,Q/pe.locationSize,Ve,O,Q*ee,Q/pe.locationSize*Ae*ee,Me)}}else if(V!==void 0){const O=V[ae];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(pe.location,O);break;case 3:s.vertexAttrib3fv(pe.location,O);break;case 4:s.vertexAttrib4fv(pe.location,O);break;default:s.vertexAttrib1fv(pe.location,O)}}}}I()}function F(){D();for(const G in r){const K=r[G];for(const ge in K){const ie=K[ge];for(const Y in ie){const B=ie[Y];for(const V in B)v(B[V].object),delete B[V];delete ie[Y]}}delete r[G]}}function P(G){if(r[G.id]===void 0)return;const K=r[G.id];for(const ge in K){const ie=K[ge];for(const Y in ie){const B=ie[Y];for(const V in B)v(B[V].object),delete B[V];delete ie[Y]}}delete r[G.id]}function z(G){for(const K in r){const ge=r[K];for(const ie in ge){const Y=ge[ie];if(Y[G.id]===void 0)continue;const B=Y[G.id];for(const V in B)v(B[V].object),delete B[V];delete Y[G.id]}}}function T(G){for(const K in r){const ge=r[K],ie=G.isInstancedMesh===!0?G.id:0,Y=ge[ie];if(Y!==void 0){for(const B in Y){const V=Y[B];for(const ae in V)v(V[ae].object),delete V[ae];delete Y[B]}delete ge[ie],Object.keys(ge).length===0&&delete r[K]}}}function D(){X(),f=!0,c!==l&&(c=l,h(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:X,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:I}}function $A(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function f(m,h,v){v!==0&&(s.drawArraysInstanced(r,m,h,v),i.update(h,r,v))}function p(m,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,v);let g=0;for(let M=0;M<v;M++)g+=h[M];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function e2(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Zi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Fi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!T)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(ct("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),H=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:H,maxFragmentUniforms:w,maxSamples:F,samples:P}}function t2(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Gr,p=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||l;return l=g,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,M){const E=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||c&&!S)c?v(null):h();else{const I=c?0:r,H=I*4;let w=x.clippingState||null;m.value=w,w=v(E,g,H,M);for(let F=0;F!==H;++F)w[F]=i[F];x.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,E){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=m.value,E!==!0||S===null){const x=M+C*4,I=g.matrixWorldInverse;p.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let H=0,w=M;H!==C;++H,w+=4)f.copy(_[H]).applyMatrix4(I,p),f.normal.toArray(S,w),S[w+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const vr=4,u_=[.125,.215,.35,.446,.526,.582],kr=20,n2=256,tl=new Tx,f_=new Dt;let ih=null,ah=0,rh=0,sh=!1;const i2=new te;class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:p=i2}=c;ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,ah,rh),this._renderer.xr.enabled=sh,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Yr||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:za,format:Zi,colorSpace:su,depthBuffer:!1},l=h_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a2(c)),this._blurMaterial=s2(c,e,i),this._ggxMaterial=r2(c,e,i)}return l}_compileMaterial(e){const i=new Ei(new ei,e);this._renderer.compile(i,tl)}_sceneToCubeUV(e,i,r,l,c){const m=new zi(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(f_),_.toneMapping=la,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ei(new vl,new qs({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let x=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,x=!0):(S.color.copy(f_),x=!0);for(let H=0;H<6;H++){const w=H%3;w===0?(m.up.set(0,h[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[H],c.y,c.z)):w===1?(m.up.set(0,0,h[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[H],c.z)):(m.up.set(0,h[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[H]));const F=this._cubeSize;Gs(l,w*F,H>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=M,_.autoClear=g,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Yr||e.mapping===Qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Gs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,tl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),g=0+h*1.25,M=_*g,{_lodMax:E}=this,C=this._sizeLods[r],S=3*C*(r>E-vr?r-E+vr:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Gs(c,S,x,3*C,2*C),l.setRenderTarget(c),l.render(p,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Gs(e,S,x,3*C,2*C),l.setRenderTarget(e),l.render(p,tl)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*kr-1),C=c/E,S=isFinite(c)?1+Math.floor(v*C):kr;S>kr&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${kr}`);const x=[];let I=0;for(let z=0;z<kr;++z){const T=z/C,D=Math.exp(-T*T/2);x.push(D),z===0?I+=D:z<S&&(I+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/I;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:H}=this;g.dTheta.value=E,g.mipInt.value=H-r;const w=this._sizeLods[l],F=3*w*(l>H-vr?l-H+vr:0),P=4*(this._cubeSize-w);Gs(i,F,P,3*w,2*w),m.setRenderTarget(i),m.render(_,tl)}}function a2(s){const e=[],i=[],r=[];let l=s;const c=s-vr+1+u_.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>s-vr?m=u_[f-s+vr-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,_=1+h,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,C=3,S=2,x=1,I=new Float32Array(C*E*M),H=new Float32Array(S*E*M),w=new Float32Array(x*E*M);for(let P=0;P<M;P++){const z=P%3*2/3-1,T=P>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];I.set(D,C*E*P),H.set(g,S*E*P);const X=[P,P,P,P,P,P];w.set(X,x*E*P)}const F=new ei;F.setAttribute("position",new ui(I,C)),F.setAttribute("uv",new ui(H,S)),F.setAttribute("faceIndex",new ui(w,x)),r.push(new Ei(F,null)),l>vr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function h_(s,e,i){const r=new ca(s,e,i);return r.texture.mapping=pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function r2(s,e,i){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function s2(s,e,i){const r=new Float32Array(kr),l=new te(0,1,0);return new fa({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function p_(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function m_(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}class Cx extends ca{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Sx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new vl(5,5,5),c=new fa({name:"CubemapFromEquirect",uniforms:$s(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:fi,blending:Pa});c.uniforms.tEquirect.value=i;const f=new Ei(l,c),p=i.minFilter;return i.minFilter===Xr&&(i.minFilter=jn),new f1(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function o2(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ud||M===Ld)if(e.has(g)){const E=e.get(g).texture;return p(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new Cx(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,E=M===Ud||M===Ld,C=M===Yr||M===Qs;if(E||C){let S=i.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new d_(s)),S=E?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const I=g.image;return E&&I&&I.height>0||C&&I&&m(I)?(r===null&&(r=new d_(s)),S=E?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,M){return M===Ud?g.mapping=Yr:M===Ld&&(g.mapping=Qs),g}function m(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function h(g){const M=g.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function l2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&js("WebGLRenderer: "+r+" extension not supported."),l}}}function c2(s,e,i,r){const l={},c=new WeakMap;function f(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(_){const g=[],M=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const I=M.array;C=M.version;for(let H=0,w=I.length;H<w;H+=3){const F=I[H+0],P=I[H+1],z=I[H+2];g.push(F,P,P,z,z,F)}}else{const I=E.array;C=E.version;for(let H=0,w=I.length/3-1;H<w;H+=3){const F=H+0,P=H+1,z=H+2;g.push(F,P,P,z,z,F)}}const S=new(E.count>=65535?vx:gx)(g,1);S.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function v(_){const g=c.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:v}}function u2(s,e,i){let r;function l(_){r=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,g){s.drawElements(r,g,c,_*f),i.update(g,r,1)}function h(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,_*f,M),i.update(g,r,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,_,0,M);let C=0;for(let S=0;S<M;S++)C+=g[S];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v}function f2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Gt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function d2(s,e,i){const r=new WeakMap,l=new Mn;function c(f,p,m){const h=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let X=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",X)};var M=X;g!==void 0&&g.texture.dispose();const E=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let w=0;E===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let F=p.attributes.position.count*w,P=1;F>e.maxTextureSize&&(P=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*P*4*_),T=new px(z,F,P,_);T.type=sa,T.needsUpdate=!0;const D=w*4;for(let G=0;G<_;G++){const K=x[G],ge=I[G],ie=H[G],Y=F*P*4*G;for(let B=0;B<K.count;B++){const V=B*D;E===!0&&(l.fromBufferAttribute(K,B),z[Y+V+0]=l.x,z[Y+V+1]=l.y,z[Y+V+2]=l.z,z[Y+V+3]=0),C===!0&&(l.fromBufferAttribute(ge,B),z[Y+V+4]=l.x,z[Y+V+5]=l.y,z[Y+V+6]=l.z,z[Y+V+7]=0),S===!0&&(l.fromBufferAttribute(ie,B),z[Y+V+8]=l.x,z[Y+V+9]=l.y,z[Y+V+10]=l.z,z[Y+V+11]=ie.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new Xt(F,P)},r.set(p,g),p.addEventListener("dispose",X)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const C=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function h2(s,e,i,r,l){let c=new WeakMap;function f(h){const v=l.render.frame,_=h.geometry,g=e.get(h,_);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const p2={[J_]:"LINEAR_TONE_MAPPING",[$_]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[tx]:"ACES_FILMIC_TONE_MAPPING",[ix]:"AGX_TONE_MAPPING",[ax]:"NEUTRAL_TONE_MAPPING",[nx]:"CUSTOM_TONE_MAPPING"};function m2(s,e,i,r,l,c){const f=new ca(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Js(e,i):void 0}),p=new ca(e,i,{type:za,depthBuffer:!1,stencilBuffer:!1}),m=new ei;m.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new kn([0,2,0,0,2,0],2));const h=new l1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ei(m,h),_=new Tx(-1,1,1,-1,0,1);let g=null,M=null,E=!1,C,S=null,x=[],I=!1;this.setSize=function(H,w){f.setSize(H,w),p.setSize(H,w);for(let F=0;F<x.length;F++){const P=x[F];P.setSize&&P.setSize(H,w)}},this.setEffects=function(H){x=H,I=x.length>0&&x[0].isRenderPass===!0;const w=f.width,F=f.height;for(let P=0;P<x.length;P++){const z=x[P];z.setSize&&z.setSize(w,F)}},this.begin=function(H,w){if(E||H.toneMapping===la&&x.length===0)return!1;if(S=w,w!==null){const F=w.width,P=w.height;(f.width!==F||f.height!==P)&&this.setSize(F,P)}return I===!1&&H.setRenderTarget(f),C=H.toneMapping,H.toneMapping=la,!0},this.hasRenderPass=function(){return I},this.end=function(H,w){H.toneMapping=C,E=!0;let F=f,P=p;for(let z=0;z<x.length;z++){const T=x[z];if(T.enabled!==!1&&(T.render(H,P,F,w),T.needsSwap!==!1)){const D=F;F=P,P=D}}if(g!==H.outputColorSpace||M!==H.toneMapping){g=H.outputColorSpace,M=H.toneMapping,h.defines={},Ft.getTransfer(g)===rn&&(h.defines.SRGB_TRANSFER="");const z=p2[M];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=F.texture,H.setRenderTarget(S),H.render(v,_),S=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),h.dispose()}}const wx=new Zn,ep=new Js(1,1),Dx=new px,Ux=new PE,Lx=new Sx,g_=[],v_=[],__=new Float32Array(16),x_=new Float32Array(9),y_=new Float32Array(4);function ao(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=g_[l];if(c===void 0&&(c=new Float32Array(l),g_[l]=c),e!==0){r.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,s[f].toArray(c,p)}return c}function On(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Pn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function _u(s,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function g2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function v2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;s.uniform2fv(this.addr,e),Pn(i,e)}}function _2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;s.uniform3fv(this.addr,e),Pn(i,e)}}function x2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;s.uniform4fv(this.addr,e),Pn(i,e)}}function y2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;y_.set(r),s.uniformMatrix2fv(this.addr,!1,y_),Pn(i,r)}}function S2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;x_.set(r),s.uniformMatrix3fv(this.addr,!1,x_),Pn(i,r)}}function M2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(On(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,r))return;__.set(r),s.uniformMatrix4fv(this.addr,!1,__),Pn(i,r)}}function b2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function E2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;s.uniform2iv(this.addr,e),Pn(i,e)}}function T2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;s.uniform3iv(this.addr,e),Pn(i,e)}}function A2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;s.uniform4iv(this.addr,e),Pn(i,e)}}function R2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function C2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;s.uniform2uiv(this.addr,e),Pn(i,e)}}function w2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;s.uniform3uiv(this.addr,e),Pn(i,e)}}function D2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;s.uniform4uiv(this.addr,e),Pn(i,e)}}function U2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?mp:pp,c=ep):c=wx,i.setTexture2D(e||c,l)}function L2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ux,l)}function N2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Lx,l)}function O2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Dx,l)}function P2(s){switch(s){case 5126:return g2;case 35664:return v2;case 35665:return _2;case 35666:return x2;case 35674:return y2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return b2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return A2;case 5125:return R2;case 36294:return C2;case 36295:return w2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return O2}}function I2(s,e){s.uniform1fv(this.addr,e)}function z2(s,e){const i=ao(e,this.size,2);s.uniform2fv(this.addr,i)}function F2(s,e){const i=ao(e,this.size,3);s.uniform3fv(this.addr,i)}function B2(s,e){const i=ao(e,this.size,4);s.uniform4fv(this.addr,i)}function H2(s,e){const i=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function G2(s,e){const i=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function V2(s,e){const i=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function k2(s,e){s.uniform1iv(this.addr,e)}function X2(s,e){s.uniform2iv(this.addr,e)}function W2(s,e){s.uniform3iv(this.addr,e)}function q2(s,e){s.uniform4iv(this.addr,e)}function Y2(s,e){s.uniform1uiv(this.addr,e)}function j2(s,e){s.uniform2uiv(this.addr,e)}function Z2(s,e){s.uniform3uiv(this.addr,e)}function K2(s,e){s.uniform4uiv(this.addr,e)}function Q2(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=ep:f=wx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function J2(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Ux,c[f])}function $2(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Lx,c[f])}function eR(s,e,i){const r=this.cache,l=e.length,c=_u(i,l);On(r,c)||(s.uniform1iv(this.addr,c),Pn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Dx,c[f])}function tR(s){switch(s){case 5126:return I2;case 35664:return z2;case 35665:return F2;case 35666:return B2;case 35674:return H2;case 35675:return G2;case 35676:return V2;case 5124:case 35670:return k2;case 35667:case 35671:return X2;case 35668:case 35672:return W2;case 35669:case 35673:return q2;case 5125:return Y2;case 36294:return j2;case 36295:return Z2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return J2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return eR}}class nR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=P2(i.type)}}class iR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tR(i.type)}}class aR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function S_(s,e){s.seq.push(e),s.map[e.id]=e}function rR(s,e,i){const r=s.name,l=r.length;for(oh.lastIndex=0;;){const c=oh.exec(r),f=oh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){S_(i,h===void 0?new nR(p,s,e):new iR(p,s,e));break}else{let _=i.map[p];_===void 0&&(_=new aR(p),S_(i,_)),i=_}}}class iu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);rR(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function M_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const sR=37297;let oR=0;function lR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;r.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const b_=new pt;function cR(s){Ft._getMatrix(b_,Ft.workingColorSpace,s);const e=`mat3( ${b_.elements.map(i=>i.toFixed(4))} )`;switch(Ft.getTransfer(s)){case ou:return[e,"LinearTransferOETF"];case rn:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function E_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+lR(s.getShaderSource(e),p)}else return c}function uR(s,e){const i=cR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const fR={[J_]:"Linear",[$_]:"Reinhard",[ex]:"Cineon",[tx]:"ACESFilmic",[ix]:"AgX",[ax]:"Neutral",[nx]:"Custom"};function dR(s,e){const i=fR[e];return i===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Qc=new te;function hR(){Ft.getLuminanceCoefficients(Qc);const s=Qc.x.toFixed(4),e=Qc.y.toFixed(4),i=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function mR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function gR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:p}}return i}function al(s){return s!==""}function T_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vR=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(s){return s.replace(vR,xR)}const _R=new Map;function xR(s,e){let i=Mt[e];if(i===void 0){const r=_R.get(e);if(r!==void 0)i=Mt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tp(i)}const yR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(s){return s.replace(yR,SR)}function SR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function C_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const MR={[Jc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function bR(s){return MR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ER={[Yr]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[pu]:"ENVMAP_TYPE_CUBE_UV"};function TR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ER[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const AR={[Qs]:"ENVMAP_MODE_REFRACTION"};function RR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":AR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CR={[Q_]:"ENVMAP_BLENDING_MULTIPLY",[$b]:"ENVMAP_BLENDING_MIX",[eE]:"ENVMAP_BLENDING_ADD"};function wR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":CR[s.combine]||"ENVMAP_BLENDING_NONE"}function DR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function UR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=bR(i),h=TR(i),v=RR(i),_=wR(i),g=DR(i),M=pR(i),E=mR(c),C=l.createProgram();let S,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),x.length>0&&(x+=`
`)):(S=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?Mt.tonemapping_pars_fragment:"",i.toneMapping!==la?dR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,uR("linearToOutputTexel",i.outputColorSpace),hR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),f=tp(f),f=T_(f,i),f=A_(f,i),p=tp(p),p=T_(p,i),p=A_(p,i),f=R_(f),p=R_(p),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===Nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=I+S+f,w=I+x+p,F=M_(l,l.VERTEX_SHADER,H),P=M_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,F),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(G){if(s.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",ge=l.getShaderInfoLog(F)||"",ie=l.getShaderInfoLog(P)||"",Y=K.trim(),B=ge.trim(),V=ie.trim();let ae=!0,pe=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,F,P);else{const Ue=E_(l,F,"vertex"),O=E_(l,P,"fragment");Gt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+Ue+`
`+O)}else Y!==""?ct("WebGLProgram: Program Info Log:",Y):(B===""||V==="")&&(pe=!1);pe&&(G.diagnostics={runnable:ae,programLog:Y,vertexShader:{log:B,prefix:S},fragmentShader:{log:V,prefix:x}})}l.deleteShader(F),l.deleteShader(P),T=new iu(l,C),D=gR(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(C,sR)),X},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=P,this}let LR=0;class NR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new OR(e),i.set(e,r)),r}}class OR{constructor(e){this.id=LR++,this.code=e,this.usedTimes=0}}function PR(s){return s===jr||s===au||s===ru}function IR(s,e,i,r,l,c){const f=new _p,p=new NR,m=new Set,h=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,D,X,G,K,ge){const ie=G.fog,Y=K.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ae=e.get(T.envMap||B,V),pe=ae&&ae.mapping===pu?ae.image.height:null,Ue=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const O=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=O!==void 0?O.length:0;let Ee=0;Y.morphAttributes.position!==void 0&&(Ee=1),Y.morphAttributes.normal!==void 0&&(Ee=2),Y.morphAttributes.color!==void 0&&(Ee=3);let Pe,Ve,ee,Me;if(Ue){const Ne=aa[Ue];Pe=Ne.vertexShader,Ve=Ne.fragmentShader}else{Pe=T.vertexShader,Ve=T.fragmentShader;const Ne=p.getVertexShaderStage(T),it=p.getFragmentShaderStage(T);p.update(T,Ne,it),ee=Ne.id,Me=it.id}const Ae=s.getRenderTarget(),He=s.state.buffers.depth.getReversed(),Qe=K.isInstancedMesh===!0,Ye=K.isBatchedMesh===!0,Et=!!T.map,ut=!!T.matcap,_t=!!ae,xt=!!T.aoMap,dt=!!T.lightMap,Bt=!!T.bumpMap&&T.wireframe===!1,jt=!!T.normalMap,Qt=!!T.displacementMap,Vt=!!T.emissiveMap,St=!!T.metalnessMap,Ht=!!T.roughnessMap,j=T.anisotropy>0,Ut=T.clearcoat>0,Pt=T.dispersion>0,N=T.iridescence>0,b=T.sheen>0,Z=T.transmission>0,ce=j&&!!T.anisotropyMap,ve=Ut&&!!T.clearcoatMap,Oe=Ut&&!!T.clearcoatNormalMap,Ge=Ut&&!!T.clearcoatRoughnessMap,xe=N&&!!T.iridescenceMap,_e=N&&!!T.iridescenceThicknessMap,ze=b&&!!T.sheenColorMap,We=b&&!!T.sheenRoughnessMap,he=!!T.specularMap,ye=!!T.specularColorMap,De=!!T.specularIntensityMap,Ie=Z&&!!T.transmissionMap,ne=Z&&!!T.thicknessMap,U=!!T.gradientMap,J=!!T.alphaMap,ue=T.alphaTest>0,Ce=!!T.alphaHash,Le=!!T.extensions;let Se=la;T.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Be={shaderID:Ue,shaderType:T.type,shaderName:T.name,vertexShader:Pe,fragmentShader:Ve,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ye,batchingColor:Ye&&K._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&K.instanceColor!==null,instancingMorph:Qe&&K.morphTexture!==null,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Et,matcap:ut,envMap:_t,envMapMode:_t&&ae.mapping,envMapCubeUVHeight:pe,aoMap:xt,lightMap:dt,bumpMap:Bt,normalMap:jt,displacementMap:Qt,emissiveMap:Vt,normalMapObjectSpace:jt&&T.normalMapType===iE,normalMapTangentSpace:jt&&T.normalMapType===wv,packedNormalMap:jt&&T.normalMapType===wv&&PR(T.normalMap.format),metalnessMap:St,roughnessMap:Ht,anisotropy:j,anisotropyMap:ce,clearcoat:Ut,clearcoatMap:ve,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Ge,dispersion:Pt,iridescence:N,iridescenceMap:xe,iridescenceThicknessMap:_e,sheen:b,sheenColorMap:ze,sheenRoughnessMap:We,specularMap:he,specularColorMap:ye,specularIntensityMap:De,transmission:Z,transmissionMap:Ie,thicknessMap:ne,gradientMap:U,opaque:T.transparent===!1&&T.blending===Ys&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:ue,alphaHash:Ce,combine:T.combine,mapUv:Et&&E(T.map.channel),aoMapUv:xt&&E(T.aoMap.channel),lightMapUv:dt&&E(T.lightMap.channel),bumpMapUv:Bt&&E(T.bumpMap.channel),normalMapUv:jt&&E(T.normalMap.channel),displacementMapUv:Qt&&E(T.displacementMap.channel),emissiveMapUv:Vt&&E(T.emissiveMap.channel),metalnessMapUv:St&&E(T.metalnessMap.channel),roughnessMapUv:Ht&&E(T.roughnessMap.channel),anisotropyMapUv:ce&&E(T.anisotropyMap.channel),clearcoatMapUv:ve&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:We&&E(T.sheenRoughnessMap.channel),specularMapUv:he&&E(T.specularMap.channel),specularColorMapUv:ye&&E(T.specularColorMap.channel),specularIntensityMapUv:De&&E(T.specularIntensityMap.channel),transmissionMapUv:Ie&&E(T.transmissionMap.channel),thicknessMapUv:ne&&E(T.thicknessMap.channel),alphaMapUv:J&&E(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(jt||j),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Y.attributes.uv&&(Et||J),fog:!!ie,useFog:T.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ee,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ge.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:Et&&T.map.isVideoTexture===!0&&Ft.getTransfer(T.map.colorSpace)===rn,decodeVideoTextureEmissive:Vt&&T.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(T.emissiveMap.colorSpace)===rn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ra,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Be.vertexUv1s=m.has(1),Be.vertexUv2s=m.has(2),Be.vertexUv3s=m.has(3),m.clear(),Be}function S(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)D.push(X),D.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(x(D,T),I(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function x(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function I(T,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),D.packedNormalMap&&f.enable(22),D.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),D.numLightProbeGrids>0&&f.enable(22),D.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function H(T){const D=M[T.type];let X;if(D){const G=aa[D];X=r1.clone(G.uniforms)}else X=T.uniforms;return X}function w(T,D){let X=v.get(D);return X!==void 0?++X.usedTimes:(X=new UR(s,D,T,l),h.push(X),v.set(D,X)),X}function F(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:H,acquireProgram:w,releaseProgram:F,releaseShaderCache:P,programs:h,dispose:z}}function zR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function FR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function w_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function D_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,E,C,S,x){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:M,material:E,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:x},s[e]=I):(I.id=g.id,I.object=g,I.geometry=M,I.material=E,I.materialVariant=f(g),I.groupOrder=C,I.renderOrder=g.renderOrder,I.z=S,I.group=x),e++,I}function m(g,M,E,C,S,x){const I=p(g,M,E,C,S,x);E.transmission>0?r.push(I):E.transparent===!0?l.push(I):i.push(I)}function h(g,M,E,C,S,x){const I=p(g,M,E,C,S,x);E.transmission>0?r.unshift(I):E.transparent===!0?l.unshift(I):i.unshift(I)}function v(g,M,E){i.length>1&&i.sort(g||FR),r.length>1&&r.sort(M||w_),l.length>1&&l.sort(M||w_),E&&(i.reverse(),r.reverse(),l.reverse())}function _(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:_,sort:v}}function BR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new D_,s.set(r,[f])):l>=c.length?(f=new D_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function HR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new Dt};break;case"SpotLight":i={position:new te,direction:new te,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=i,i}}}function GR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let VR=0;function kR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function XR(s){const e=new HR,i=GR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const l=new te,c=new xn,f=new xn;function p(h){let v=0,_=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,C=0,S=0,x=0,I=0,H=0,w=0,F=0,P=0,z=0;h.sort(kR);for(let D=0,X=h.length;D<X;D++){const G=h[D],K=G.color,ge=G.intensity,ie=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===jr?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=K.r*ge,_+=K.g*ge,g+=K.b*ge;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],ge);z++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,ae=i.get(G);ae.shadowIntensity=V.intensity,ae.shadowBias=V.bias,ae.shadowNormalBias=V.normalBias,ae.shadowRadius=V.radius,ae.shadowMapSize=V.mapSize,r.directionalShadow[M]=ae,r.directionalShadowMap[M]=Y,r.directionalShadowMatrix[M]=G.shadow.matrix,I++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(K).multiplyScalar(ge),B.distance=ie,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[C]=B;const V=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,V.updateMatrices(G),G.castShadow&&P++),r.spotLightMatrix[C]=V.matrix,G.castShadow){const ae=i.get(G);ae.shadowIntensity=V.intensity,ae.shadowBias=V.bias,ae.shadowNormalBias=V.normalBias,ae.shadowRadius=V.radius,ae.shadowMapSize=V.mapSize,r.spotShadow[C]=ae,r.spotShadowMap[C]=Y,w++}C++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(K).multiplyScalar(ge),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const V=G.shadow,ae=i.get(G);ae.shadowIntensity=V.intensity,ae.shadowBias=V.bias,ae.shadowNormalBias=V.normalBias,ae.shadowRadius=V.radius,ae.shadowMapSize=V.mapSize,ae.shadowCameraNear=V.camera.near,ae.shadowCameraFar=V.camera.far,r.pointShadow[E]=ae,r.pointShadowMap[E]=Y,r.pointShadowMatrix[E]=G.shadow.matrix,H++}r.point[E]=B,E++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(ge),B.groundColor.copy(G.groundColor).multiplyScalar(ge),r.hemi[x]=B,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==I||T.numPointShadows!==H||T.numSpotShadows!==w||T.numSpotMaps!==F||T.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=w+F-P,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=I,T.numPointShadows=H,T.numSpotShadows=w,T.numSpotMaps=F,T.numLightProbes=z,r.version=VR++)}function m(h,v){let _=0,g=0,M=0,E=0,C=0;const S=v.matrixWorldInverse;for(let x=0,I=h.length;x<I;x++){const H=h[x];if(H.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),_++}else if(H.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(H.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(S),f.identity(),c.copy(H.matrixWorld),c.premultiply(S),f.extractRotation(c),w.halfWidth.set(H.width*.5,0,0),w.halfHeight.set(0,H.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(H.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(S),g++}else if(H.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(H.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:r}}function U_(s){const e=new XR(s),i=[],r=[],l=[];function c(g){_.camera=g,i.length=0,r.length=0,l.length=0}function f(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function v(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:v,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function WR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new U_(s),e.set(l,[p])):c>=f.length?(p=new U_(s),f.push(p)):p=f[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const qR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
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
}`,jR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],ZR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],L_=new xn,nl=new te,lh=new te;function KR(s,e,i){let r=new _x;const l=new Xt,c=new Xt,f=new Mn,p=new c1,m=new u1,h={},v=i.maxTextureSize,_={[_r]:fi,[fi]:_r,[ra]:ra},g=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:qR,fragmentShader:YR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new ei;E.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ei(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let x=this.type;this.render=function(P,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===Ob&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const D=s.getRenderTarget(),X=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Pa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ge=x!==this.type;ge&&z.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(Y=>Y.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,Y=P.length;ie<Y;ie++){const B=P[ie],V=B.shadow;if(V===void 0){ct("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const ae=V.getFrameExtents();l.multiply(ae),c.copy(V.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ae.x),l.x=c.x*ae.x,V.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ae.y),l.y=c.y*ae.y,V.mapSize.y=c.y));const pe=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=pe,V.map===null||ge===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===il){if(B.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ca(l.x,l.y,{format:jr,type:za,minFilter:jn,magFilter:jn,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new Js(l.x,l.y,sa),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Fa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn}else B.isPointLight?(V.map=new Cx(l.x),V.map.depthTexture=new i1(l.x,ua)):(V.map=new ca(l.x,l.y),V.map.depthTexture=new Js(l.x,l.y,ua)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Fa,this.type===Jc?(V.map.depthTexture.compareFunction=pe?mp:pp,V.map.depthTexture.minFilter=jn,V.map.depthTexture.magFilter=jn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Vn,V.map.depthTexture.magFilter=Vn);V.camera.updateProjectionMatrix()}const Ue=V.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Ue;O++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,O),s.clear();else{O===0&&(s.setRenderTarget(V.map),s.clear());const Q=V.getViewport(O);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),K.viewport(f)}if(B.isPointLight){const Q=V.camera,Ee=V.matrix,Pe=B.distance||Q.far;Pe!==Q.far&&(Q.far=Pe,Q.updateProjectionMatrix()),nl.setFromMatrixPosition(B.matrixWorld),Q.position.copy(nl),lh.copy(Q.position),lh.add(jR[O]),Q.up.copy(ZR[O]),Q.lookAt(lh),Q.updateMatrixWorld(),Ee.makeTranslation(-nl.x,-nl.y,-nl.z),L_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(L_,Q.coordinateSystem,Q.reversedDepth)}else V.updateMatrices(B);r=V.getFrustum(),w(z,T,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===il&&I(V,T),V.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(D,X,G)};function I(P,z){const T=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ca(l.x,l.y,{format:jr,type:za})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(z,null,T,g,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(z,null,T,M,C,null)}function H(P,z,T,D){let X=null;const G=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)X=G;else if(X=T.isPointLight===!0?m:p,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=X.uuid,ge=z.uuid;let ie=h[K];ie===void 0&&(ie={},h[K]=ie);let Y=ie[ge];Y===void 0&&(Y=X.clone(),ie[ge]=Y,z.addEventListener("dispose",F)),X=Y}if(X.visible=z.visible,X.wireframe=z.wireframe,D===il?X.side=z.shadowSide!==null?z.shadowSide:z.side:X.side=z.shadowSide!==null?z.shadowSide:_[z.side],X.alphaMap=z.alphaMap,X.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,X.map=z.map,X.clipShadows=z.clipShadows,X.clippingPlanes=z.clippingPlanes,X.clipIntersection=z.clipIntersection,X.displacementMap=z.displacementMap,X.displacementScale=z.displacementScale,X.displacementBias=z.displacementBias,X.wireframeLinewidth=z.wireframeLinewidth,X.linewidth=z.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const K=s.properties.get(X);K.light=T}return X}function w(P,z,T,D,X){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===il)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ge=e.update(P),ie=P.material;if(Array.isArray(ie)){const Y=ge.groups;for(let B=0,V=Y.length;B<V;B++){const ae=Y[B],pe=ie[ae.materialIndex];if(pe&&pe.visible){const Ue=H(P,pe,D,X);P.onBeforeShadow(s,P,z,T,ge,Ue,ae),s.renderBufferDirect(T,null,ge,Ue,P,ae),P.onAfterShadow(s,P,z,T,ge,Ue,ae)}}}else if(ie.visible){const Y=H(P,ie,D,X);P.onBeforeShadow(s,P,z,T,ge,Y,null),s.renderBufferDirect(T,null,ge,Y,P,null),P.onAfterShadow(s,P,z,T,ge,Y,null)}}const K=P.children;for(let ge=0,ie=K.length;ge<ie;ge++)w(K[ge],z,T,D,X)}function F(P){P.target.removeEventListener("dispose",F);for(const T in h){const D=h[T],X=P.target.uuid;X in D&&(D[X].dispose(),delete D[X])}}}function QR(s,e){function i(){let U=!1;const J=new Mn;let ue=null;const Ce=new Mn(0,0,0,0);return{setMask:function(Le){ue!==Le&&!U&&(s.colorMask(Le,Le,Le,Le),ue=Le)},setLocked:function(Le){U=Le},setClear:function(Le,Se,Be,Ne,it){it===!0&&(Le*=Ne,Se*=Ne,Be*=Ne),J.set(Le,Se,Be,Ne),Ce.equals(J)===!1&&(s.clearColor(Le,Se,Be,Ne),Ce.copy(J))},reset:function(){U=!1,ue=null,Ce.set(-1,0,0,0)}}}function r(){let U=!1,J=!1,ue=null,Ce=null,Le=null;return{setReversed:function(Se){if(J!==Se){const Be=e.get("EXT_clip_control");Se?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),J=Se;const Ne=Le;Le=null,this.setClear(Ne)}},getReversed:function(){return J},setTest:function(Se){Se?Ae(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(Se){ue!==Se&&!U&&(s.depthMask(Se),ue=Se)},setFunc:function(Se){if(J&&(Se=hE[Se]),Ce!==Se){switch(Se){case hh:s.depthFunc(s.NEVER);break;case ph:s.depthFunc(s.ALWAYS);break;case mh:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case gh:s.depthFunc(s.EQUAL);break;case vh:s.depthFunc(s.GEQUAL);break;case _h:s.depthFunc(s.GREATER);break;case xh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=Se}},setLocked:function(Se){U=Se},setClear:function(Se){Le!==Se&&(Le=Se,J&&(Se=1-Se),s.clearDepth(Se))},reset:function(){U=!1,ue=null,Ce=null,Le=null,J=!1}}}function l(){let U=!1,J=null,ue=null,Ce=null,Le=null,Se=null,Be=null,Ne=null,it=null;return{setTest:function(ft){U||(ft?Ae(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(ft){J!==ft&&!U&&(s.stencilMask(ft),J=ft)},setFunc:function(ft,kt,It){(ue!==ft||Ce!==kt||Le!==It)&&(s.stencilFunc(ft,kt,It),ue=ft,Ce=kt,Le=It)},setOp:function(ft,kt,It){(Se!==ft||Be!==kt||Ne!==It)&&(s.stencilOp(ft,kt,It),Se=ft,Be=kt,Ne=It)},setLocked:function(ft){U=ft},setClear:function(ft){it!==ft&&(s.clearStencil(ft),it=ft)},reset:function(){U=!1,J=null,ue=null,Ce=null,Le=null,Se=null,Be=null,Ne=null,it=null}}}const c=new i,f=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},_={},g={},M=new WeakMap,E=[],C=null,S=!1,x=null,I=null,H=null,w=null,F=null,P=null,z=null,T=new Dt(0,0,0),D=0,X=!1,G=null,K=null,ge=null,ie=null,Y=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ae=0;const pe=s.getParameter(s.VERSION);pe.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(pe)[1]),V=ae>=1):pe.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),V=ae>=2);let Ue=null,O={};const Q=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Pe=new Mn().fromArray(Q),Ve=new Mn().fromArray(Ee);function ee(U,J,ue,Ce){const Le=new Uint8Array(4),Se=s.createTexture();s.bindTexture(U,Se),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<ue;Be++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(J+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Se}const Me={};Me[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ae(s.DEPTH_TEST),f.setFunc(Ks),Bt(!1),jt(Av),Ae(s.CULL_FACE),xt(Pa);function Ae(U){v[U]!==!0&&(s.enable(U),v[U]=!0)}function He(U){v[U]!==!1&&(s.disable(U),v[U]=!1)}function Qe(U,J){return g[U]!==J?(s.bindFramebuffer(U,J),g[U]=J,U===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=J),U===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Ye(U,J){let ue=E,Ce=!1;if(U){ue=M.get(J),ue===void 0&&(ue=[],M.set(J,ue));const Le=U.textures;if(ue.length!==Le.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Be=Le.length;Se<Be;Se++)ue[Se]=s.COLOR_ATTACHMENT0+Se;ue.length=Le.length,Ce=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(ue)}function Et(U){return C!==U?(s.useProgram(U),C=U,!0):!1}const ut={[Vr]:s.FUNC_ADD,[Ib]:s.FUNC_SUBTRACT,[zb]:s.FUNC_REVERSE_SUBTRACT};ut[Fb]=s.MIN,ut[Bb]=s.MAX;const _t={[Hb]:s.ZERO,[Gb]:s.ONE,[Vb]:s.SRC_COLOR,[fh]:s.SRC_ALPHA,[jb]:s.SRC_ALPHA_SATURATE,[qb]:s.DST_COLOR,[Xb]:s.DST_ALPHA,[kb]:s.ONE_MINUS_SRC_COLOR,[dh]:s.ONE_MINUS_SRC_ALPHA,[Yb]:s.ONE_MINUS_DST_COLOR,[Wb]:s.ONE_MINUS_DST_ALPHA,[Zb]:s.CONSTANT_COLOR,[Kb]:s.ONE_MINUS_CONSTANT_COLOR,[Qb]:s.CONSTANT_ALPHA,[Jb]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(U,J,ue,Ce,Le,Se,Be,Ne,it,ft){if(U===Pa){S===!0&&(He(s.BLEND),S=!1);return}if(S===!1&&(Ae(s.BLEND),S=!0),U!==Pb){if(U!==x||ft!==X){if((I!==Vr||F!==Vr)&&(s.blendEquation(s.FUNC_ADD),I=Vr,F=Vr),ft)switch(U){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xs:s.blendFunc(s.ONE,s.ONE);break;case Rv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Rv:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cv:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",U);break}H=null,w=null,P=null,z=null,T.set(0,0,0),D=0,x=U,X=ft}return}Le=Le||J,Se=Se||ue,Be=Be||Ce,(J!==I||Le!==F)&&(s.blendEquationSeparate(ut[J],ut[Le]),I=J,F=Le),(ue!==H||Ce!==w||Se!==P||Be!==z)&&(s.blendFuncSeparate(_t[ue],_t[Ce],_t[Se],_t[Be]),H=ue,w=Ce,P=Se,z=Be),(Ne.equals(T)===!1||it!==D)&&(s.blendColor(Ne.r,Ne.g,Ne.b,it),T.copy(Ne),D=it),x=U,X=!1}function dt(U,J){U.side===ra?He(s.CULL_FACE):Ae(s.CULL_FACE);let ue=U.side===fi;J&&(ue=!ue),Bt(ue),U.blending===Ys&&U.transparent===!1?xt(Pa):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),f.setFunc(U.depthFunc),f.setTest(U.depthTest),f.setMask(U.depthWrite),c.setMask(U.colorWrite);const Ce=U.stencilWrite;p.setTest(Ce),Ce&&(p.setMask(U.stencilWriteMask),p.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),p.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(U){G!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),G=U)}function jt(U){U!==Lb?(Ae(s.CULL_FACE),U!==K&&(U===Av?s.cullFace(s.BACK):U===Nb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),K=U}function Qt(U){U!==ge&&(V&&s.lineWidth(U),ge=U)}function Vt(U,J,ue){U?(Ae(s.POLYGON_OFFSET_FILL),(ie!==J||Y!==ue)&&(ie=J,Y=ue,f.getReversed()&&(J=-J),s.polygonOffset(J,ue))):He(s.POLYGON_OFFSET_FILL)}function St(U){U?Ae(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function Ht(U){U===void 0&&(U=s.TEXTURE0+B-1),Ue!==U&&(s.activeTexture(U),Ue=U)}function j(U,J,ue){ue===void 0&&(Ue===null?ue=s.TEXTURE0+B-1:ue=Ue);let Ce=O[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},O[ue]=Ce),(Ce.type!==U||Ce.texture!==J)&&(Ue!==ue&&(s.activeTexture(ue),Ue=ue),s.bindTexture(U,J||Me[U]),Ce.type=U,Ce.texture=J)}function Ut(){const U=O[Ue];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Pt(){try{s.compressedTexImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function b(){try{s.texSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Z(){try{s.texSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Oe(){try{s.texStorage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function Ge(){try{s.texStorage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function xe(){try{s.texImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function _e(){try{s.texImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function ze(U){return _[U]!==void 0?_[U]:s.getParameter(U)}function We(U,J){_[U]!==J&&(s.pixelStorei(U,J),_[U]=J)}function he(U){Pe.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Pe.copy(U))}function ye(U){Ve.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ve.copy(U))}function De(U,J){let ue=h.get(J);ue===void 0&&(ue=new WeakMap,h.set(J,ue));let Ce=ue.get(U);Ce===void 0&&(Ce=s.getUniformBlockIndex(J,U.name),ue.set(U,Ce))}function Ie(U,J){const Ce=h.get(J).get(U);m.get(J)!==Ce&&(s.uniformBlockBinding(J,Ce,U.__bindingPointIndex),m.set(J,Ce))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},Ue=null,O={},g={},M=new WeakMap,E=[],C=null,S=!1,x=null,I=null,H=null,w=null,F=null,P=null,z=null,T=new Dt(0,0,0),D=0,X=!1,G=null,K=null,ge=null,ie=null,Y=null,Pe.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Ae,disable:He,bindFramebuffer:Qe,drawBuffers:Ye,useProgram:Et,setBlending:xt,setMaterial:dt,setFlipSided:Bt,setCullFace:jt,setLineWidth:Qt,setPolygonOffset:Vt,setScissorTest:St,activeTexture:Ht,bindTexture:j,unbindTexture:Ut,compressedTexImage2D:Pt,compressedTexImage3D:N,texImage2D:xe,texImage3D:_e,pixelStorei:We,getParameter:ze,updateUBOMapping:De,uniformBlockBinding:Ie,texStorage2D:Oe,texStorage3D:Ge,texSubImage2D:b,texSubImage3D:Z,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:he,viewport:ye,reset:ne}}function JR(s,e,i,r,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(N,b){return E?new OffscreenCanvas(N,b):cu("canvas")}function S(N,b,Z){let ce=1;const ve=Pt(N);if((ve.width>Z||ve.height>Z)&&(ce=Z/Math.max(ve.width,ve.height)),ce<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Oe=Math.floor(ce*ve.width),Ge=Math.floor(ce*ve.height);g===void 0&&(g=C(Oe,Ge));const xe=b?C(Oe,Ge):g;return xe.width=Oe,xe.height=Ge,xe.getContext("2d").drawImage(N,0,0,Oe,Ge),ct("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Oe+"x"+Ge+")."),xe}else return"data"in N&&ct("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function x(N){return N.generateMipmaps}function I(N){s.generateMipmap(N)}function H(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(N,b,Z,ce,ve,Oe=!1){if(N!==null){if(s[N]!==void 0)return s[N];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ge;ce&&(Ge=e.get("EXT_texture_norm16"),Ge||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=b;if(b===s.RED&&(Z===s.FLOAT&&(xe=s.R32F),Z===s.HALF_FLOAT&&(xe=s.R16F),Z===s.UNSIGNED_BYTE&&(xe=s.R8),Z===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.R16_EXT),Z===s.SHORT&&Ge&&(xe=Ge.R16_SNORM_EXT)),b===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(xe=s.R8UI),Z===s.UNSIGNED_SHORT&&(xe=s.R16UI),Z===s.UNSIGNED_INT&&(xe=s.R32UI),Z===s.BYTE&&(xe=s.R8I),Z===s.SHORT&&(xe=s.R16I),Z===s.INT&&(xe=s.R32I)),b===s.RG&&(Z===s.FLOAT&&(xe=s.RG32F),Z===s.HALF_FLOAT&&(xe=s.RG16F),Z===s.UNSIGNED_BYTE&&(xe=s.RG8),Z===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.RG16_EXT),Z===s.SHORT&&Ge&&(xe=Ge.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(xe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(xe=s.RG16UI),Z===s.UNSIGNED_INT&&(xe=s.RG32UI),Z===s.BYTE&&(xe=s.RG8I),Z===s.SHORT&&(xe=s.RG16I),Z===s.INT&&(xe=s.RG32I)),b===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),Z===s.UNSIGNED_INT&&(xe=s.RGB32UI),Z===s.BYTE&&(xe=s.RGB8I),Z===s.SHORT&&(xe=s.RGB16I),Z===s.INT&&(xe=s.RGB32I)),b===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(xe=s.RGBA32UI),Z===s.BYTE&&(xe=s.RGBA8I),Z===s.SHORT&&(xe=s.RGBA16I),Z===s.INT&&(xe=s.RGBA32I)),b===s.RGB&&(Z===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.RGB16_EXT),Z===s.SHORT&&Ge&&(xe=Ge.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),b===s.RGBA){const _e=Oe?ou:Ft.getTransfer(ve);Z===s.FLOAT&&(xe=s.RGBA32F),Z===s.HALF_FLOAT&&(xe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(xe=_e===rn?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Ge&&(xe=Ge.RGBA16_EXT),Z===s.SHORT&&Ge&&(xe=Ge.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function F(N,b){let Z;return N?b===null||b===ua||b===fl?Z=s.DEPTH24_STENCIL8:b===sa?Z=s.DEPTH32F_STENCIL8:b===ul&&(Z=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ua||b===fl?Z=s.DEPTH_COMPONENT24:b===sa?Z=s.DEPTH_COMPONENT32F:b===ul&&(Z=s.DEPTH_COMPONENT16),Z}function P(N,b){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Vn&&N.minFilter!==jn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),D(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&_.delete(b)}function T(N){const b=N.target;b.removeEventListener("dispose",T),G(b)}function D(N){const b=r.get(N);if(b.__webglInit===void 0)return;const Z=N.source,ce=M.get(Z);if(ce){const ve=ce[b.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&X(N),Object.keys(ce).length===0&&M.delete(Z)}r.remove(N)}function X(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const Z=N.source,ce=M.get(Z);delete ce[b.__cacheKey],f.memory.textures--}function G(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let ve=0;ve<b.__webglFramebuffer[ce].length;ve++)s.deleteFramebuffer(b.__webglFramebuffer[ce][ve]);else s.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)s.deleteFramebuffer(b.__webglFramebuffer[ce]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=N.textures;for(let ce=0,ve=Z.length;ce<ve;ce++){const Oe=r.get(Z[ce]);Oe.__webglTexture&&(s.deleteTexture(Oe.__webglTexture),f.memory.textures--),r.remove(Z[ce])}r.remove(N)}let K=0;function ge(){K=0}function ie(){return K}function Y(N){K=N}function B(){const N=K;return N>=l.maxTextures&&ct("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),K+=1,N}function V(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ae(N,b){const Z=r.get(N);if(N.isVideoTexture&&j(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const ce=N.image;if(ce===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Z,N,b);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+b)}function pe(N,b){const Z=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){He(Z,N,b);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+b)}function Ue(N,b){const Z=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){He(Z,N,b);return}i.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+b)}function O(N,b){const Z=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){Qe(Z,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+b)}const Q={[yh]:s.REPEAT,[Oa]:s.CLAMP_TO_EDGE,[Sh]:s.MIRRORED_REPEAT},Ee={[Vn]:s.NEAREST,[tE]:s.NEAREST_MIPMAP_NEAREST,[Ac]:s.NEAREST_MIPMAP_LINEAR,[jn]:s.LINEAR,[Nd]:s.LINEAR_MIPMAP_NEAREST,[Xr]:s.LINEAR_MIPMAP_LINEAR},Pe={[aE]:s.NEVER,[cE]:s.ALWAYS,[rE]:s.LESS,[pp]:s.LEQUAL,[sE]:s.EQUAL,[mp]:s.GEQUAL,[oE]:s.GREATER,[lE]:s.NOTEQUAL};function Ve(N,b){if(b.type===sa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===jn||b.magFilter===Nd||b.magFilter===Ac||b.magFilter===Xr||b.minFilter===jn||b.minFilter===Nd||b.minFilter===Ac||b.minFilter===Xr)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Q[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Q[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Q[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Ee[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Ee[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vn||b.minFilter!==Ac&&b.minFilter!==Xr||b.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ee(N,b){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const ce=b.source;let ve=M.get(ce);ve===void 0&&(ve={},M.set(ce,ve));const Oe=V(b);if(Oe!==N.__cacheKey){ve[Oe]===void 0&&(ve[Oe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ve[Oe].usedTimes++;const Ge=ve[N.__cacheKey];Ge!==void 0&&(ve[N.__cacheKey].usedTimes--,Ge.usedTimes===0&&X(b)),N.__cacheKey=Oe,N.__webglTexture=ve[Oe].texture}return Z}function Me(N,b,Z){return Math.floor(Math.floor(N/Z)/b)}function Ae(N,b,Z,ce){const Oe=N.updateRanges;if(Oe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Z,ce,b.data);else{Oe.sort((We,he)=>We.start-he.start);let Ge=0;for(let We=1;We<Oe.length;We++){const he=Oe[Ge],ye=Oe[We],De=he.start+he.count,Ie=Me(ye.start,b.width,4),ne=Me(he.start,b.width,4);ye.start<=De+1&&Ie===ne&&Me(ye.start+ye.count-1,b.width,4)===Ie?he.count=Math.max(he.count,ye.start+ye.count-he.start):(++Ge,Oe[Ge]=ye)}Oe.length=Ge+1;const xe=i.getParameter(s.UNPACK_ROW_LENGTH),_e=i.getParameter(s.UNPACK_SKIP_PIXELS),ze=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let We=0,he=Oe.length;We<he;We++){const ye=Oe[We],De=Math.floor(ye.start/4),Ie=Math.ceil(ye.count/4),ne=De%b.width,U=Math.floor(De/b.width),J=Ie,ue=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(s.UNPACK_SKIP_ROWS,U),i.texSubImage2D(s.TEXTURE_2D,0,ne,U,J,ue,Z,ce,b.data)}N.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,xe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function He(N,b,Z){let ce=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=s.TEXTURE_3D);const ve=ee(N,b),Oe=b.source;i.bindTexture(ce,N.__webglTexture,s.TEXTURE0+Z);const Ge=r.get(Oe);if(Oe.version!==Ge.__version||ve===!0){if(i.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ue=Ft.getPrimaries(Ft.workingColorSpace),Ce=b.colorSpace===mr?null:Ft.getPrimaries(b.colorSpace),Le=b.colorSpace===mr||ue===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let _e=S(b.image,!1,l.maxTextureSize);_e=Ut(b,_e);const ze=c.convert(b.format,b.colorSpace),We=c.convert(b.type);let he=w(b.internalFormat,ze,We,b.normalized,b.colorSpace,b.isVideoTexture);Ve(ce,b);let ye;const De=b.mipmaps,Ie=b.isVideoTexture!==!0,ne=Ge.__version===void 0||ve===!0,U=Oe.dataReady,J=P(b,_e);if(b.isDepthTexture)he=F(b.format===Wr,b.type),ne&&(Ie?i.texStorage2D(s.TEXTURE_2D,1,he,_e.width,_e.height):i.texImage2D(s.TEXTURE_2D,0,he,_e.width,_e.height,0,ze,We,null));else if(b.isDataTexture)if(De.length>0){Ie&&ne&&i.texStorage2D(s.TEXTURE_2D,J,he,De[0].width,De[0].height);for(let ue=0,Ce=De.length;ue<Ce;ue++)ye=De[ue],Ie?U&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,ze,We,ye.data):i.texImage2D(s.TEXTURE_2D,ue,he,ye.width,ye.height,0,ze,We,ye.data);b.generateMipmaps=!1}else Ie?(ne&&i.texStorage2D(s.TEXTURE_2D,J,he,_e.width,_e.height),U&&Ae(b,_e,ze,We)):i.texImage2D(s.TEXTURE_2D,0,he,_e.width,_e.height,0,ze,We,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ie&&ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,J,he,De[0].width,De[0].height,_e.depth);for(let ue=0,Ce=De.length;ue<Ce;ue++)if(ye=De[ue],b.format!==Zi)if(ze!==null)if(Ie){if(U)if(b.layerUpdates.size>0){const Le=c_(ye.width,ye.height,b.format,b.type);for(const Se of b.layerUpdates){const Be=ye.data.subarray(Se*Le/ye.data.BYTES_PER_ELEMENT,(Se+1)*Le/ye.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Se,ye.width,ye.height,1,ze,Be)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,_e.depth,ze,ye.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,he,ye.width,ye.height,_e.depth,0,ye.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,_e.depth,ze,We,ye.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ue,he,ye.width,ye.height,_e.depth,0,ze,We,ye.data)}else{Ie&&ne&&i.texStorage2D(s.TEXTURE_2D,J,he,De[0].width,De[0].height);for(let ue=0,Ce=De.length;ue<Ce;ue++)ye=De[ue],b.format!==Zi?ze!==null?Ie?U&&i.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,ze,ye.data):i.compressedTexImage2D(s.TEXTURE_2D,ue,he,ye.width,ye.height,0,ye.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,ze,We,ye.data):i.texImage2D(s.TEXTURE_2D,ue,he,ye.width,ye.height,0,ze,We,ye.data)}else if(b.isDataArrayTexture)if(Ie){if(ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,J,he,_e.width,_e.height,_e.depth),U)if(b.layerUpdates.size>0){const ue=c_(_e.width,_e.height,b.format,b.type);for(const Ce of b.layerUpdates){const Le=_e.data.subarray(Ce*ue/_e.data.BYTES_PER_ELEMENT,(Ce+1)*ue/_e.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,_e.width,_e.height,1,ze,We,Le)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ze,We,_e.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,he,_e.width,_e.height,_e.depth,0,ze,We,_e.data);else if(b.isData3DTexture)Ie?(ne&&i.texStorage3D(s.TEXTURE_3D,J,he,_e.width,_e.height,_e.depth),U&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ze,We,_e.data)):i.texImage3D(s.TEXTURE_3D,0,he,_e.width,_e.height,_e.depth,0,ze,We,_e.data);else if(b.isFramebufferTexture){if(ne)if(Ie)i.texStorage2D(s.TEXTURE_2D,J,he,_e.width,_e.height);else{let ue=_e.width,Ce=_e.height;for(let Le=0;Le<J;Le++)i.texImage2D(s.TEXTURE_2D,Le,he,ue,Ce,0,ze,We,null),ue>>=1,Ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ue=s.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),_e.parentNode!==ue){ue.appendChild(_e),_.add(b),ue.onpaint=Ce=>{const Le=Ce.changedElements;for(const Se of _)Le.includes(Se.image)&&(Se.needsUpdate=!0)},ue.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Le=s.RGBA,Se=s.RGBA,Be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Le,Se,Be,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ie&&ne){const ue=Pt(De[0]);i.texStorage2D(s.TEXTURE_2D,J,he,ue.width,ue.height)}for(let ue=0,Ce=De.length;ue<Ce;ue++)ye=De[ue],Ie?U&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze,We,ye):i.texImage2D(s.TEXTURE_2D,ue,he,ze,We,ye);b.generateMipmaps=!1}else if(Ie){if(ne){const ue=Pt(_e);i.texStorage2D(s.TEXTURE_2D,J,he,ue.width,ue.height)}U&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,We,_e)}else i.texImage2D(s.TEXTURE_2D,0,he,ze,We,_e);x(b)&&I(ce),Ge.__version=Oe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Qe(N,b,Z){if(b.image.length!==6)return;const ce=ee(N,b),ve=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Z);const Oe=r.get(ve);if(ve.version!==Oe.__version||ce===!0){i.activeTexture(s.TEXTURE0+Z);const Ge=Ft.getPrimaries(Ft.workingColorSpace),xe=b.colorSpace===mr?null:Ft.getPrimaries(b.colorSpace),_e=b.colorSpace===mr||Ge===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ze=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,he=[];for(let Se=0;Se<6;Se++)!ze&&!We?he[Se]=S(b.image[Se],!0,l.maxCubemapSize):he[Se]=We?b.image[Se].image:b.image[Se],he[Se]=Ut(b,he[Se]);const ye=he[0],De=c.convert(b.format,b.colorSpace),Ie=c.convert(b.type),ne=w(b.internalFormat,De,Ie,b.normalized,b.colorSpace),U=b.isVideoTexture!==!0,J=Oe.__version===void 0||ce===!0,ue=ve.dataReady;let Ce=P(b,ye);Ve(s.TEXTURE_CUBE_MAP,b);let Le;if(ze){U&&J&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ne,ye.width,ye.height);for(let Se=0;Se<6;Se++){Le=he[Se].mipmaps;for(let Be=0;Be<Le.length;Be++){const Ne=Le[Be];b.format!==Zi?De!==null?U?ue&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,Ne.width,Ne.height,De,Ne.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,ne,Ne.width,Ne.height,0,Ne.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,Ne.width,Ne.height,De,Ie,Ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,ne,Ne.width,Ne.height,0,De,Ie,Ne.data)}}}else{if(Le=b.mipmaps,U&&J){Le.length>0&&Ce++;const Se=Pt(he[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ne,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(We){U?ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,he[Se].width,he[Se].height,De,Ie,he[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ne,he[Se].width,he[Se].height,0,De,Ie,he[Se].data);for(let Be=0;Be<Le.length;Be++){const it=Le[Be].image[Se].image;U?ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,it.width,it.height,De,Ie,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,ne,it.width,it.height,0,De,Ie,it.data)}}else{U?ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,De,Ie,he[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ne,De,Ie,he[Se]);for(let Be=0;Be<Le.length;Be++){const Ne=Le[Be];U?ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,De,Ie,Ne.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,ne,De,Ie,Ne.image[Se])}}}x(b)&&I(s.TEXTURE_CUBE_MAP),Oe.__version=ve.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ye(N,b,Z,ce,ve,Oe){const Ge=c.convert(Z.format,Z.colorSpace),xe=c.convert(Z.type),_e=w(Z.internalFormat,Ge,xe,Z.normalized,Z.colorSpace),ze=r.get(b),We=r.get(Z);if(We.__renderTarget=b,!ze.__hasExternalTextures){const he=Math.max(1,b.width>>Oe),ye=Math.max(1,b.height>>Oe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?i.texImage3D(ve,Oe,_e,he,ye,b.depth,0,Ge,xe,null):i.texImage2D(ve,Oe,_e,he,ye,0,Ge,xe,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ht(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,ve,We.__webglTexture,0,St(b)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,ve,We.__webglTexture,Oe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(N,b,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const ce=b.depthTexture,ve=ce&&ce.isDepthTexture?ce.type:null,Oe=F(b.stencilBuffer,ve),Ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ht(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(b),Oe,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(b),Oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,N)}else{const ce=b.textures;for(let ve=0;ve<ce.length;ve++){const Oe=ce[ve],Ge=c.convert(Oe.format,Oe.colorSpace),xe=c.convert(Oe.type),_e=w(Oe.internalFormat,Ge,xe,Oe.normalized,Oe.colorSpace);Ht(b)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(b),_e,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(b),_e,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_e,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(N,b,Z){const ce=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=r.get(b.depthTexture);if(ve.__renderTarget=b,(!ve.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),ve.__webglTexture===void 0){ve.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,b.depthTexture);const ze=c.convert(b.depthTexture.format),We=c.convert(b.depthTexture.type);let he;b.depthTexture.format===Fa?he=s.DEPTH_COMPONENT24:b.depthTexture.format===Wr&&(he=s.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,b.width,b.height,0,ze,We,null)}}else ae(b.depthTexture,0);const Oe=ve.__webglTexture,Ge=St(b),xe=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,_e=b.depthTexture.format===Wr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Fa)Ht(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,xe,Oe,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,_e,xe,Oe,0);else if(b.depthTexture.format===Wr)Ht(b)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,xe,Oe,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,_e,xe,Oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(N){const b=r.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ce=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){const ve=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",ve)};ce.addEventListener("dispose",ve),b.__depthDisposeCallback=ve}b.__boundDepthTexture=ce}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let ce=0;ce<6;ce++)ut(b.__webglFramebuffer[ce],N,ce);else{const ce=N.texture.mipmaps;ce&&ce.length>0?ut(b.__webglFramebuffer[0],N,0):ut(b.__webglFramebuffer,N,0)}else if(Z){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=s.createRenderbuffer(),Et(b.__webglDepthbuffer[ce],N,!1);else{const ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=b.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,Oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Oe)}}else{const ce=N.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Et(b.__webglDepthbuffer,N,!1);else{const ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Oe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(N,b,Z){const ce=r.get(N);b!==void 0&&Ye(ce.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&_t(N)}function dt(N){const b=N.texture,Z=r.get(N),ce=r.get(b);N.addEventListener("dispose",T);const ve=N.textures,Oe=N.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=b.version,f.memory.textures++),Oe){Z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[xe]=[];for(let _e=0;_e<b.mipmaps.length;_e++)Z.__webglFramebuffer[xe][_e]=s.createFramebuffer()}else Z.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)Z.__webglFramebuffer[xe]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let xe=0,_e=ve.length;xe<_e;xe++){const ze=r.get(ve[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&Ht(N)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let xe=0;xe<ve.length;xe++){const _e=ve[xe];Z.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[xe]);const ze=c.convert(_e.format,_e.colorSpace),We=c.convert(_e.type),he=w(_e.internalFormat,ze,We,_e.normalized,_e.colorSpace,N.isXRRenderTarget===!0),ye=St(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,he,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Z.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(Z.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Oe){i.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,b);for(let xe=0;xe<6;xe++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)Ye(Z.__webglFramebuffer[xe][_e],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,_e);else Ye(Z.__webglFramebuffer[xe],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);x(b)&&I(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ge){for(let xe=0,_e=ve.length;xe<_e;xe++){const ze=ve[xe],We=r.get(ze);let he=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(he=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(he,We.__webglTexture),Ve(he,ze),Ye(Z.__webglFramebuffer,N,ze,s.COLOR_ATTACHMENT0+xe,he,0),x(ze)&&I(he)}i.unbindTexture()}else{let xe=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(xe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(xe,ce.__webglTexture),Ve(xe,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)Ye(Z.__webglFramebuffer[_e],N,b,s.COLOR_ATTACHMENT0,xe,_e);else Ye(Z.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,xe,0);x(b)&&I(xe),i.unbindTexture()}N.depthBuffer&&_t(N)}function Bt(N){const b=N.textures;for(let Z=0,ce=b.length;Z<ce;Z++){const ve=b[Z];if(x(ve)){const Oe=H(N),Ge=r.get(ve).__webglTexture;i.bindTexture(Oe,Ge),I(Oe),i.unbindTexture()}}}const jt=[],Qt=[];function Vt(N){if(N.samples>0){if(Ht(N)===!1){const b=N.textures,Z=N.width,ce=N.height;let ve=s.COLOR_BUFFER_BIT;const Oe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(N),xe=b.length>1;if(xe)for(let ze=0;ze<b.length;ze++)i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const _e=N.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ze=0;ze<b.length;ze++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);const We=r.get(b[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,Z,ce,0,0,Z,ce,ve,s.NEAREST),m===!0&&(jt.length=0,Qt.length=0,jt.push(s.COLOR_ATTACHMENT0+ze),N.depthBuffer&&N.resolveDepthBuffer===!1&&(jt.push(Oe),Qt.push(Oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let ze=0;ze<b.length;ze++){i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);const We=r.get(b[ze]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,We,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function St(N){return Math.min(l.maxSamples,N.samples)}function Ht(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(N){const b=f.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function Ut(N,b){const Z=N.colorSpace,ce=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==su&&Z!==mr&&(Ft.getTransfer(Z)===rn?(ce!==Zi||ve!==Fi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",Z)),b}function Pt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=ge,this.getTextureUnits=ie,this.setTextureUnits=Y,this.setTexture2D=ae,this.setTexture2DArray=pe,this.setTexture3D=Ue,this.setTextureCube=O,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $R(s,e){function i(r,l=mr){let c;const f=Ft.getTransfer(l);if(r===Fi)return s.UNSIGNED_BYTE;if(r===cp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===up)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===cx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===sx)return s.BYTE;if(r===ox)return s.SHORT;if(r===ul)return s.UNSIGNED_SHORT;if(r===lp)return s.INT;if(r===ua)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===za)return s.HALF_FLOAT;if(r===ux)return s.ALPHA;if(r===fx)return s.RGB;if(r===Zi)return s.RGBA;if(r===Fa)return s.DEPTH_COMPONENT;if(r===Wr)return s.DEPTH_STENCIL;if(r===dx)return s.RED;if(r===fp)return s.RED_INTEGER;if(r===jr)return s.RG;if(r===dp)return s.RG_INTEGER;if(r===hp)return s.RGBA_INTEGER;if(r===$c||r===eu||r===tu||r===nu)if(f===rn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mh||r===bh||r===Eh||r===Th)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===au||r===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ah||r===Rh)return f===rn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ch)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===wh)return c.COMPRESSED_R11_EAC;if(r===Dh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===au)return c.COMPRESSED_RG11_EAC;if(r===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph||r===Ih||r===zh||r===Fh||r===Bh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Lh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ph)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qh||r===Yh||r===jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===qh)return f===rn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zh||r===Kh||r===ru||r===Qh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Zh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ru)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const e3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t3=`
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

}`;class n3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Mx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new fa({vertexShader:e3,fragmentShader:t3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new gu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i3 extends Kr{constructor(e,i){super();const r=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,v=null,_=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",S=new n3,x={},I=i.getContextAttributes();let H=null,w=null;const F=[],P=[],z=new Xt;let T=null;const D=new zi;D.viewport=new Mn;const X=new zi;X.viewport=new Mn;const G=[D,X],K=new d1;let ge=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let Me=F[ee];return Me===void 0&&(Me=new Bd,F[ee]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ee){let Me=F[ee];return Me===void 0&&(Me=new Bd,F[ee]=Me),Me.getGripSpace()},this.getHand=function(ee){let Me=F[ee];return Me===void 0&&(Me=new Bd,F[ee]=Me),Me.getHandSpace()};function Y(ee){const Me=P.indexOf(ee.inputSource);if(Me===-1)return;const Ae=F[Me];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,h||f),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",V);for(let ee=0;ee<F.length;ee++){const Me=P[ee];Me!==null&&(P[ee]=null,F[ee].disconnect(Me))}ge=null,ie=null,S.reset();for(const ee in x)delete x[ee];e.setRenderTarget(H),M=null,g=null,_=null,l=null,w=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",B),l.addEventListener("inputsourceschange",V),I.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,He=null,Qe=null;I.depth&&(Qe=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=I.stencil?Wr:Fa,He=I.stencil?fl:ua);const Ye={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Ye),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new ca(g.textureWidth,g.textureHeight,{format:Zi,type:Fi,depthTexture:new Js(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ae={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new ca(M.framebufferWidth,M.framebufferHeight,{format:Zi,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Ve.setContext(l),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(ee){for(let Me=0;Me<ee.removed.length;Me++){const Ae=ee.removed[Me],He=P.indexOf(Ae);He>=0&&(P[He]=null,F[He].disconnect(Ae))}for(let Me=0;Me<ee.added.length;Me++){const Ae=ee.added[Me];let He=P.indexOf(Ae);if(He===-1){for(let Ye=0;Ye<F.length;Ye++)if(Ye>=P.length){P.push(Ae),He=Ye;break}else if(P[Ye]===null){P[Ye]=Ae,He=Ye;break}if(He===-1)break}const Qe=F[He];Qe&&Qe.connect(Ae)}}const ae=new te,pe=new te;function Ue(ee,Me,Ae){ae.setFromMatrixPosition(Me.matrixWorld),pe.setFromMatrixPosition(Ae.matrixWorld);const He=ae.distanceTo(pe),Qe=Me.projectionMatrix.elements,Ye=Ae.projectionMatrix.elements,Et=Qe[14]/(Qe[10]-1),ut=Qe[14]/(Qe[10]+1),_t=(Qe[9]+1)/Qe[5],xt=(Qe[9]-1)/Qe[5],dt=(Qe[8]-1)/Qe[0],Bt=(Ye[8]+1)/Ye[0],jt=Et*dt,Qt=Et*Bt,Vt=He/(-dt+Bt),St=Vt*-dt;if(Me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(St),ee.translateZ(Vt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Qe[10]===-1)ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const Ht=Et+Vt,j=ut+Vt,Ut=jt-St,Pt=Qt+(He-St),N=_t*ut/j*Ht,b=xt*ut/j*Ht;ee.projectionMatrix.makePerspective(Ut,Pt,N,b,Ht,j),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function O(ee,Me){Me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(Me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let Me=ee.near,Ae=ee.far;S.texture!==null&&(S.depthNear>0&&(Me=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),K.near=X.near=D.near=Me,K.far=X.far=D.far=Ae,(ge!==K.near||ie!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ge=K.near,ie=K.far),K.layers.mask=ee.layers.mask|6,D.layers.mask=K.layers.mask&-5,X.layers.mask=K.layers.mask&-3;const He=ee.parent,Qe=K.cameras;O(K,He);for(let Ye=0;Ye<Qe.length;Ye++)O(Qe[Ye],He);Qe.length===2?Ue(K,D,X):K.projectionMatrix.copy(D.projectionMatrix),Q(ee,K,He)};function Q(ee,Me,Ae){Ae===null?ee.matrix.copy(Me.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(Me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(Me.projectionMatrix),ee.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=dl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ee){m=ee,g!==null&&(g.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ee){return x[ee]};let Ee=null;function Pe(ee,Me){if(v=Me.getViewerPose(h||f),E=Me,v!==null){const Ae=v.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let He=!1;Ae.length!==K.cameras.length&&(K.cameras.length=0,He=!0);for(let ut=0;ut<Ae.length;ut++){const _t=Ae[ut];let xt=null;if(M!==null)xt=M.getViewport(_t);else{const Bt=_.getViewSubImage(g,_t);xt=Bt.viewport,ut===0&&(e.setRenderTargetTextures(w,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(w))}let dt=G[ut];dt===void 0&&(dt=new zi,dt.layers.enable(ut),dt.viewport=new Mn,G[ut]=dt),dt.matrix.fromArray(_t.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(_t.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),ut===0&&(K.matrix.copy(dt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),He===!0&&K.cameras.push(dt)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ut=_.getDepthInformation(Ae[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,l.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<Ae.length;ut++){const _t=Ae[ut].camera;if(_t){let xt=x[_t];xt||(xt=new Mx,x[_t]=xt);const dt=_.getCameraImage(_t);xt.sourceTexture=dt}}}}for(let Ae=0;Ae<F.length;Ae++){const He=P[Ae],Qe=F[Ae];He!==null&&Qe!==void 0&&Qe.update(He,Me,h||f)}Ee&&Ee(ee,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),E=null}const Ve=new Ax;Ve.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){Ee=ee},this.dispose=function(){}}}const a3=new xn,Nx=new pt;Nx.set(-1,0,0,0,1,0,0,0,1);function r3(s,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,bx(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,I,H,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(S,x):x.isMeshLambertMaterial?(c(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),v(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(S,x),g(S,x),x.isMeshPhysicalMaterial&&M(S,x,w)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),C(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&p(S,x)):x.isPointsMaterial?m(S,x,I,H):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===fi&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===fi&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),H=I.envMap,w=I.envMapRotation;H&&(S.envMap.value=H,S.envMapRotation.value.setFromMatrix4(a3.makeRotationFromEuler(w)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Nx),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function p(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,I,H){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=H*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fi&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function s3(s,e,i,r){let l={},c={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,F){const P=F.program;r.uniformBlockBinding(w,P)}function h(w,F){let P=l[w.id];P===void 0&&(S(w),P=v(w),l[w.id]=P,w.addEventListener("dispose",I));const z=F.program;r.updateUBOMapping(w,z);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function v(w){const F=_();w.__bindingPointIndex=F;const P=s.createBuffer(),z=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,P),P}function _(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const F=l[w.id],P=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let T=0,D=P.length;T<D;T++){const X=P[T];if(Array.isArray(X))for(let G=0,K=X.length;G<K;G++)M(X[G],T,G,z);else M(X,T,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,F,P,z){if(C(w,F,P,z)===!0){const T=w.__offset,D=w.value;if(Array.isArray(D)){let X=0;for(let G=0;G<D.length;G++){const K=D[G],ge=x(K);E(K,w.__data,X),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(X+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(D,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,w.__data)}}function E(w,F,P){typeof w=="number"||typeof w=="boolean"?F[0]=w:w.isMatrix3?(F[0]=w.elements[0],F[1]=w.elements[1],F[2]=w.elements[2],F[3]=0,F[4]=w.elements[3],F[5]=w.elements[4],F[6]=w.elements[5],F[7]=0,F[8]=w.elements[6],F[9]=w.elements[7],F[10]=w.elements[8],F[11]=0):ArrayBuffer.isView(w)?F.set(new w.constructor(w.buffer,w.byteOffset,F.length)):w.toArray(F,P)}function C(w,F,P,z){const T=w.value,D=F+"_"+P;if(z[D]===void 0)return typeof T=="number"||typeof T=="boolean"?z[D]=T:ArrayBuffer.isView(T)?z[D]=T.slice():z[D]=T.clone(),!0;{const X=z[D];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return z[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function S(w){const F=w.uniforms;let P=0;const z=16;for(let D=0,X=F.length;D<X;D++){const G=Array.isArray(F[D])?F[D]:[F[D]];for(let K=0,ge=G.length;K<ge;K++){const ie=G[K],Y=Array.isArray(ie.value)?ie.value:[ie.value];for(let B=0,V=Y.length;B<V;B++){const ae=Y[B],pe=x(ae),Ue=P%z,O=Ue%pe.boundary,Q=Ue+O;P+=O,Q!==0&&z-Q<pe.storage&&(P+=z-Q),ie.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=P,P+=pe.storage}}}const T=P%z;return T>0&&(P+=z-T),w.__size=P,w.__cache={},this}function x(w){const F={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(F.boundary=4,F.storage=4):w.isVector2?(F.boundary=8,F.storage=8):w.isVector3||w.isColor?(F.boundary=16,F.storage=12):w.isVector4?(F.boundary=16,F.storage=16):w.isMatrix3?(F.boundary=48,F.storage=48):w.isMatrix4?(F.boundary=64,F.storage=64):w.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(F.boundary=16,F.storage=w.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",w),F}function I(w){const F=w.target;F.removeEventListener("dispose",I);const P=f.indexOf(F.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function H(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:h,dispose:H}}const o3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function l3(){return ia===null&&(ia=new ZE(o3,16,16,jr,za),ia.name="DFG_LUT",ia.minFilter=jn,ia.magFilter=jn,ia.wrapS=Oa,ia.wrapT=Oa,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class c3{constructor(e={}){const{canvas:i=fE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Fi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const C=M,S=new Set([hp,dp,fp]),x=new Set([Fi,ua,ul,fl,cp,up]),I=new Uint32Array(4),H=new Int32Array(4),w=new te;let F=null,P=null;const z=[],T=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,K=null,ge=null,ie=null,Y=null;this._outputColorSpace=Ii;let B=0,V=0,ae=null,pe=-1,Ue=null;const O=new Mn,Q=new Mn;let Ee=null;const Pe=new Dt(0);let Ve=0,ee=i.width,Me=i.height,Ae=1,He=null,Qe=null;const Ye=new Mn(0,0,ee,Me),Et=new Mn(0,0,ee,Me);let ut=!1;const _t=new _x;let xt=!1,dt=!1;const Bt=new xn,jt=new te,Qt=new Mn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Ht(){return ae===null?Ae:1}let j=r;function Ut(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${op}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",ft,!1),i.addEventListener("webglcontextcreationerror",kt,!1),j===null){const q="webgl2";if(j=Ut(q,A),j===null)throw Ut(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Gt("WebGLRenderer: "+A.message),A}let Pt,N,b,Z,ce,ve,Oe,Ge,xe,_e,ze,We,he,ye,De,Ie,ne,U,J,ue,Ce,Le,Se;function Be(){Pt=new l2(j),Pt.init(),Ce=new $R(j,Pt),N=new e2(j,Pt,e,Ce),b=new QR(j,Pt),N.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),ge=j.createFramebuffer(),ie=j.createFramebuffer(),Y=j.createFramebuffer(),Z=new f2(j),ce=new zR,ve=new JR(j,Pt,b,ce,N,Ce,Z),Oe=new o2(X),Ge=new m1(j),Le=new JA(j,Ge),xe=new c2(j,Ge,Z,Le),_e=new h2(j,xe,Ge,Le,Z),U=new d2(j,N,ve),De=new t2(ce),ze=new IR(X,Oe,Pt,N,Le,De),We=new r3(X,ce),he=new BR,ye=new WR(Pt),ne=new QA(X,Oe,b,_e,E,m),Ie=new KR(X,_e,N),Se=new s3(j,Z,N,b),J=new $A(j,Pt,Z),ue=new u2(j,Pt,Z),Z.programs=ze.programs,X.capabilities=N,X.extensions=Pt,X.properties=ce,X.renderLists=he,X.shadowMap=Ie,X.state=b,X.info=Z}Be(),C!==Fi&&(D=new m2(C,i.width,i.height,p,l,c));const Ne=new i3(X,j);this.xr=Ne,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=Pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(A){A!==void 0&&(Ae=A,this.setSize(ee,Me,!1))},this.getSize=function(A){return A.set(ee,Me)},this.setSize=function(A,q,fe=!0){if(Ne.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,Me=q,i.width=Math.floor(A*Ae),i.height=Math.floor(q*Ae),fe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(ee*Ae,Me*Ae).floor()},this.setDrawingBufferSize=function(A,q,fe){ee=A,Me=q,Ae=fe,i.width=Math.floor(A*fe),i.height=Math.floor(q*fe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===Fi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(Ye)},this.setViewport=function(A,q,fe,re){A.isVector4?Ye.set(A.x,A.y,A.z,A.w):Ye.set(A,q,fe,re),b.viewport(O.copy(Ye).multiplyScalar(Ae).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,q,fe,re){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,q,fe,re),b.scissor(Q.copy(Et).multiplyScalar(Ae).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){b.setScissorTest(ut=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){Qe=A},this.getClearColor=function(A){return A.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,fe=!0){let re=0;if(A){let se=!1;if(ae!==null){const Xe=ae.texture.format;se=S.has(Xe)}if(se){const Xe=ae.texture.type,je=x.has(Xe),ke=ne.getClearColor(),Je=ne.getClearAlpha(),Ke=ke.r,at=ke.g,gt=ke.b;je?(I[0]=Ke,I[1]=at,I[2]=gt,I[3]=Je,j.clearBufferuiv(j.COLOR,0,I)):(H[0]=Ke,H[1]=at,H[2]=gt,H[3]=Je,j.clearBufferiv(j.COLOR,0,H))}else re|=j.COLOR_BUFFER_BIT}q&&(re|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(re|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&j.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",ft,!1),i.removeEventListener("webglcontextcreationerror",kt,!1),ne.dispose(),he.dispose(),ye.dispose(),ce.dispose(),Oe.dispose(),_e.dispose(),Le.dispose(),Se.dispose(),ze.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",mt),Ne.removeEventListener("sessionend",et),st.stop()};function it(A){A.preventDefault(),Pv("WebGLRenderer: Context Lost."),G=!0}function ft(){Pv("WebGLRenderer: Context Restored."),G=!1;const A=Z.autoReset,q=Ie.enabled,fe=Ie.autoUpdate,re=Ie.needsUpdate,se=Ie.type;Be(),Z.autoReset=A,Ie.enabled=q,Ie.autoUpdate=fe,Ie.needsUpdate=re,Ie.type=se}function kt(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function It(A){const q=A.target;q.removeEventListener("dispose",It),cn(q)}function cn(A){Fe(A),ce.remove(A)}function Fe(A){const q=ce.get(A).programs;q!==void 0&&(q.forEach(function(fe){ze.releaseProgram(fe)}),A.isShaderMaterial&&ze.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,fe,re,se,Xe){q===null&&(q=Vt);const je=se.isMesh&&se.matrixWorld.determinantAffine()<0,ke=Ai(A,q,fe,re,se);b.setMaterial(re,je);let Je=fe.index,Ke=1;if(re.wireframe===!0){if(Je=xe.getWireframeAttribute(fe),Je===void 0)return;Ke=2}const at=fe.drawRange,gt=fe.attributes.position;let nt=at.start*Ke,Wt=(at.start+at.count)*Ke;Xe!==null&&(nt=Math.max(nt,Xe.start*Ke),Wt=Math.min(Wt,(Xe.start+Xe.count)*Ke)),Je!==null?(nt=Math.max(nt,0),Wt=Math.min(Wt,Je.count)):gt!=null&&(nt=Math.max(nt,0),Wt=Math.min(Wt,gt.count));const gn=Wt-nt;if(gn<0||gn===1/0)return;Le.setup(se,re,ke,fe,Je);let fn,$t=J;if(Je!==null&&(fn=Ge.get(Je),$t=ue,$t.setIndex(fn)),se.isMesh)re.wireframe===!0?(b.setLineWidth(re.wireframeLinewidth*Ht()),$t.setMode(j.LINES)):$t.setMode(j.TRIANGLES);else if(se.isLine){let en=re.linewidth;en===void 0&&(en=1),b.setLineWidth(en*Ht()),se.isLineSegments?$t.setMode(j.LINES):se.isLineLoop?$t.setMode(j.LINE_LOOP):$t.setMode(j.LINE_STRIP)}else se.isPoints?$t.setMode(j.POINTS):se.isSprite&&$t.setMode(j.TRIANGLES);if(se.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))$t.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const en=se._multiDrawStarts,Ze=se._multiDrawCounts,Xn=se._multiDrawCount,Rt=Je?Ge.get(Je).bytesPerElement:1,Ln=ce.get(re).currentProgram.getUniforms();for(let hi=0;hi<Xn;hi++)Ln.setValue(j,"_gl_DrawID",hi),$t.render(en[hi]/Rt,Ze[hi])}else if(se.isInstancedMesh)$t.renderInstances(nt,gn,se.count);else if(fe.isInstancedBufferGeometry){const en=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ze=Math.min(fe.instanceCount,en);$t.renderInstances(nt,gn,Ze)}else $t.render(nt,gn)};function Tt(A,q,fe){A.transparent===!0&&A.side===ra&&A.forceSinglePass===!1?(A.side=fi,A.needsUpdate=!0,ti(A,q,fe),A.side=_r,A.needsUpdate=!0,ti(A,q,fe),A.side=ra):ti(A,q,fe)}this.compile=function(A,q,fe=null){fe===null&&(fe=A),P=ye.get(fe),P.init(q),T.push(P),fe.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),A!==fe&&A.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights();const re=new Set;return A.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Xe=se.material;if(Xe)if(Array.isArray(Xe))for(let je=0;je<Xe.length;je++){const ke=Xe[je];Tt(ke,fe,se),re.add(ke)}else Tt(Xe,fe,se),re.add(Xe)}),P=T.pop(),re},this.compileAsync=function(A,q,fe=null){const re=this.compile(A,q,fe);return new Promise(se=>{function Xe(){if(re.forEach(function(je){ce.get(je).currentProgram.isReady()&&re.delete(je)}),re.size===0){se(A);return}setTimeout(Xe,10)}Pt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let bt=null;function At(A){bt&&bt(A)}function mt(){st.stop()}function et(){st.start()}const st=new Ax;st.setAnimationLoop(At),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(A){bt=A,Ne.setAnimationLoop(A),A===null?st.stop():st.start()},Ne.addEventListener("sessionstart",mt),Ne.addEventListener("sessionend",et),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(A,q);const fe=Ne.enabled===!0&&Ne.isPresenting===!0,re=D!==null&&(ae===null||fe)&&D.begin(X,ae);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(q),q=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,q,ae),P=ye.get(A,T.length),P.init(q),P.state.textureUnits=ve.getTextureUnits(),T.push(P),Bt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),_t.setFromProjectionMatrix(Bt,oa,q.reversedDepth),dt=this.localClippingEnabled,xt=De.init(this.clippingPlanes,dt),F=he.get(A,z.length),F.init(),z.push(F),Ne.enabled===!0&&Ne.isPresenting===!0){const je=X.xr.getDepthSensingMesh();je!==null&&ot(je,q,-1/0,X.sortObjects)}ot(A,q,0,X.sortObjects),F.finish(),X.sortObjects===!0&&F.sort(He,Qe,q.reversedDepth),St=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,St&&ne.addToRenderList(F,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&De.beginShadows();const se=P.state.shadowsArray;if(Ie.render(se,A,q),xt===!0&&De.endShadows(),(re&&D.hasRenderPass())===!1){const je=F.opaque,ke=F.transmissive;if(P.setupLights(),q.isArrayCamera){const Je=q.cameras;if(ke.length>0)for(let Ke=0,at=Je.length;Ke<at;Ke++){const gt=Je[Ke];un(je,ke,A,gt)}St&&ne.render(A);for(let Ke=0,at=Je.length;Ke<at;Ke++){const gt=Je[Ke];Zt(F,A,gt,gt.viewport)}}else ke.length>0&&un(je,ke,A,q),St&&ne.render(A),Zt(F,A,q)}ae!==null&&V===0&&(ve.updateMultisampleRenderTarget(ae),ve.updateRenderTargetMipmap(ae)),re&&D.end(X),A.isScene===!0&&A.onAfterRender(X,A,q),Le.resetDefaultState(),pe=-1,Ue=null,T.pop(),T.length>0?(P=T[T.length-1],ve.setTextureUnits(P.state.textureUnits),xt===!0&&De.setGlobalState(X.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?F=z[z.length-1]:F=null,K!==null&&K.renderEnd()};function ot(A,q,fe,re){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_t.intersectsSprite(A)){re&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Bt);const je=_e.update(A),ke=A.material;ke.visible&&F.push(A,je,ke,fe,Qt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_t.intersectsObject(A))){const je=_e.update(A),ke=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Qt.copy(je.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Bt)),Array.isArray(ke)){const Je=je.groups;for(let Ke=0,at=Je.length;Ke<at;Ke++){const gt=Je[Ke],nt=ke[gt.materialIndex];nt&&nt.visible&&F.push(A,je,nt,fe,Qt.z,gt)}}else ke.visible&&F.push(A,je,ke,fe,Qt.z,null)}}const Xe=A.children;for(let je=0,ke=Xe.length;je<ke;je++)ot(Xe[je],q,fe,re)}function Zt(A,q,fe,re){const{opaque:se,transmissive:Xe,transparent:je}=A;P.setupLightsView(fe),xt===!0&&De.setGlobalState(X.clippingPlanes,fe),re&&b.viewport(O.copy(re)),se.length>0&&Tn(se,q,fe),Xe.length>0&&Tn(Xe,q,fe),je.length>0&&Tn(je,q,fe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function un(A,q,fe,re){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const nt=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new ca(1,1,{generateMipmaps:!0,type:nt?za:Fi,minFilter:Xr,samples:Math.max(4,N.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const Xe=P.state.transmissionRenderTarget[re.id],je=re.viewport||O;Xe.setSize(je.z*X.transmissionResolutionScale,je.w*X.transmissionResolutionScale);const ke=X.getRenderTarget(),Je=X.getActiveCubeFace(),Ke=X.getActiveMipmapLevel();X.setRenderTarget(Xe),X.getClearColor(Pe),Ve=X.getClearAlpha(),Ve<1&&X.setClearColor(16777215,.5),X.clear(),St&&ne.render(fe);const at=X.toneMapping;X.toneMapping=la;const gt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),xt===!0&&De.setGlobalState(X.clippingPlanes,re),Tn(A,fe,re),ve.updateMultisampleRenderTarget(Xe),ve.updateRenderTargetMipmap(Xe),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Wt=0,gn=q.length;Wt<gn;Wt++){const fn=q[Wt],{object:$t,geometry:en,material:Ze,group:Xn}=fn;if(Ze.side===ra&&$t.layers.test(re.layers)){const Rt=Ze.side;Ze.side=fi,Ze.needsUpdate=!0,di($t,fe,re,en,Ze,Xn),Ze.side=Rt,Ze.needsUpdate=!0,nt=!0}}nt===!0&&(ve.updateMultisampleRenderTarget(Xe),ve.updateRenderTargetMipmap(Xe))}X.setRenderTarget(ke,Je,Ke),X.setClearColor(Pe,Ve),gt!==void 0&&(re.viewport=gt),X.toneMapping=at}function Tn(A,q,fe){const re=q.isScene===!0?q.overrideMaterial:null;for(let se=0,Xe=A.length;se<Xe;se++){const je=A[se],{object:ke,geometry:Je,group:Ke}=je;let at=je.material;at.allowOverride===!0&&re!==null&&(at=re),ke.layers.test(fe.layers)&&di(ke,q,fe,Je,at,Ke)}}function di(A,q,fe,re,se,Xe){A.onBeforeRender(X,q,fe,re,se,Xe),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(X,q,fe,re,A,Xe),se.transparent===!0&&se.side===ra&&se.forceSinglePass===!1?(se.side=fi,se.needsUpdate=!0,X.renderBufferDirect(fe,q,re,se,A,Xe),se.side=_r,se.needsUpdate=!0,X.renderBufferDirect(fe,q,re,se,A,Xe),se.side=ra):X.renderBufferDirect(fe,q,re,se,A,Xe),A.onAfterRender(X,q,fe,re,se,Xe)}function ti(A,q,fe){q.isScene!==!0&&(q=Vt);const re=ce.get(A),se=P.state.lights,Xe=P.state.shadowsArray,je=se.state.version,ke=ze.getParameters(A,se.state,Xe,q,fe,P.state.lightProbeGridArray),Je=ze.getProgramCacheKey(ke);let Ke=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,re.fog=q.fog;const at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Oe.get(A.envMap||re.environment,at),re.envMapRotation=re.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",It),Ke=new Map,re.programs=Ke);let gt=Ke.get(Je);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===je)return ii(A,ke),gt}else ke.uniforms=ze.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,fe,ke),A.onBeforeCompile(ke,X),gt=ze.acquireProgram(ke,Je),Ke.set(Je,gt),re.uniforms=ke.uniforms;const nt=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=De.uniform),ii(A,ke),re.needsLights=Ki(A),re.lightsStateVersion=je,re.needsLights&&(nt.ambientLightColor.value=se.state.ambient,nt.lightProbe.value=se.state.probe,nt.directionalLights.value=se.state.directional,nt.directionalLightShadows.value=se.state.directionalShadow,nt.spotLights.value=se.state.spot,nt.spotLightShadows.value=se.state.spotShadow,nt.rectAreaLights.value=se.state.rectArea,nt.ltc_1.value=se.state.rectAreaLTC1,nt.ltc_2.value=se.state.rectAreaLTC2,nt.pointLights.value=se.state.point,nt.pointLightShadows.value=se.state.pointShadow,nt.hemisphereLights.value=se.state.hemi,nt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,nt.spotLightMatrix.value=se.state.spotLightMatrix,nt.spotLightMap.value=se.state.spotLightMap,nt.pointShadowMatrix.value=se.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=gt,re.uniformsList=null,gt}function ni(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=iu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ii(A,q){const fe=ce.get(A);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function Ti(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let fe=0,re=A.length;fe<re;fe++){const se=A[fe];if(se.texture!==null&&se.boundingBox.containsPoint(w))return se}return null}function Ai(A,q,fe,re,se){q.isScene!==!0&&(q=Vt),ve.resetTextureUnits();const Xe=q.fog,je=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?q.environment:null,ke=ae===null?X.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ft.workingColorSpace,Je=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ke=Oe.get(re.envMap||je,Je),at=re.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,gt=!!fe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),nt=!!fe.morphAttributes.position,Wt=!!fe.morphAttributes.normal,gn=!!fe.morphAttributes.color;let fn=la;re.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(fn=X.toneMapping);const $t=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,en=$t!==void 0?$t.length:0,Ze=ce.get(re),Xn=P.state.lights;if(xt===!0&&(dt===!0||A!==Ue)){const Jt=A===Ue&&re.id===pe;De.setState(re,A,Jt)}let Rt=!1;re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Xn.state.version||Ze.outputColorSpace!==ke||se.isBatchedMesh&&Ze.batching===!1||!se.isBatchedMesh&&Ze.batching===!0||se.isBatchedMesh&&Ze.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ze.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ze.instancing===!1||!se.isInstancedMesh&&Ze.instancing===!0||se.isSkinnedMesh&&Ze.skinning===!1||!se.isSkinnedMesh&&Ze.skinning===!0||se.isInstancedMesh&&Ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ze.instancingMorph===!1&&se.morphTexture!==null||Ze.envMap!==Ke||re.fog===!0&&Ze.fog!==Xe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==De.numPlanes||Ze.numIntersection!==De.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==gt||Ze.morphTargets!==nt||Ze.morphNormals!==Wt||Ze.morphColors!==gn||Ze.toneMapping!==fn||Ze.morphTargetsCount!==en||!!Ze.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Rt=!0):(Rt=!0,Ze.__version=re.version);let Ln=Ze.currentProgram;Rt===!0&&(Ln=ti(re,q,se),K&&re.isNodeMaterial&&K.onUpdateProgram(re,Ln,Ze));let hi=!1,Hi=!1,pi=!1;const tn=Ln.getUniforms(),vn=Ze.uniforms;if(b.useProgram(Ln.program)&&(hi=!0,Hi=!0,pi=!0),re.id!==pe&&(pe=re.id,Hi=!0),Ze.needsLights){const Jt=Ti(P.state.lightProbeGridArray,se);Ze.lightProbeGrid!==Jt&&(Ze.lightProbeGrid=Jt,Hi=!0)}if(hi||Ue!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),tn.setValue(j,"projectionMatrix",A.projectionMatrix),tn.setValue(j,"viewMatrix",A.matrixWorldInverse);const Qi=tn.map.cameraPosition;Qi!==void 0&&Qi.setValue(j,jt.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&tn.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&tn.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),Ue!==A&&(Ue=A,Hi=!0,pi=!0)}if(Ze.needsLights&&(Xn.state.directionalShadowMap.length>0&&tn.setValue(j,"directionalShadowMap",Xn.state.directionalShadowMap,ve),Xn.state.spotShadowMap.length>0&&tn.setValue(j,"spotShadowMap",Xn.state.spotShadowMap,ve),Xn.state.pointShadowMap.length>0&&tn.setValue(j,"pointShadowMap",Xn.state.pointShadowMap,ve)),se.isSkinnedMesh){tn.setOptional(j,se,"bindMatrix"),tn.setOptional(j,se,"bindMatrixInverse");const Jt=se.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),tn.setValue(j,"boneTexture",Jt.boneTexture,ve))}se.isBatchedMesh&&(tn.setOptional(j,se,"batchingTexture"),tn.setValue(j,"batchingTexture",se._matricesTexture,ve),tn.setOptional(j,se,"batchingIdTexture"),tn.setValue(j,"batchingIdTexture",se._indirectTexture,ve),tn.setOptional(j,se,"batchingColorTexture"),se._colorsTexture!==null&&tn.setValue(j,"batchingColorTexture",se._colorsTexture,ve));const Gi=fe.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&U.update(se,fe,Ln),(Hi||Ze.receiveShadow!==se.receiveShadow)&&(Ze.receiveShadow=se.receiveShadow,tn.setValue(j,"receiveShadow",se.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&q.environment!==null&&(vn.envMapIntensity.value=q.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=l3()),Hi){if(tn.setValue(j,"toneMappingExposure",X.toneMappingExposure),Ze.needsLights&&mn(vn,pi),Xe&&re.fog===!0&&We.refreshFogUniforms(vn,Xe),We.refreshMaterialUniforms(vn,re,Ae,Me,P.state.transmissionRenderTarget[A.id]),Ze.needsLights&&Ze.lightProbeGrid){const Jt=Ze.lightProbeGrid;vn.probesSH.value=Jt.texture,vn.probesMin.value.copy(Jt.boundingBox.min),vn.probesMax.value.copy(Jt.boundingBox.max),vn.probesResolution.value.copy(Jt.resolution)}iu.upload(j,ni(Ze),vn,ve)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(iu.upload(j,ni(Ze),vn,ve),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&tn.setValue(j,"center",se.center),tn.setValue(j,"modelViewMatrix",se.modelViewMatrix),tn.setValue(j,"normalMatrix",se.normalMatrix),tn.setValue(j,"modelMatrix",se.matrixWorld),re.uniformsGroups!==void 0){const Jt=re.uniformsGroups;for(let Qi=0,Ba=Jt.length;Qi<Ba;Qi++){const yr=Jt[Qi];Se.update(yr,Ln),Se.bind(yr,Ln)}}return Ln}function mn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ki(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(A,q,fe){const re=ce.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ce.get(A.texture).__webglTexture=q,ce.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:fe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const fe=ce.get(A);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,fe=0){ae=A,B=q,V=fe;let re=null,se=!1,Xe=!1;if(A){const ke=ce.get(A);if(ke.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(j.FRAMEBUFFER,ke.__webglFramebuffer),O.copy(A.viewport),Q.copy(A.scissor),Ee=A.scissorTest,b.viewport(O),b.scissor(Q),b.setScissorTest(Ee),pe=-1;return}else if(ke.__webglFramebuffer===void 0)ve.setupRenderTarget(A);else if(ke.__hasExternalTextures)ve.rebindTextures(A,ce.get(A.texture).__webglTexture,ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const at=A.depthTexture;if(ke.__boundDepthTexture!==at){if(at!==null&&ce.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Xe=!0);const Ke=ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[q])?re=Ke[q][fe]:re=Ke[q],se=!0):A.samples>0&&ve.useMultisampledRTT(A)===!1?re=ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?re=Ke[fe]:re=Ke,O.copy(A.viewport),Q.copy(A.scissor),Ee=A.scissorTest}else O.copy(Ye).multiplyScalar(Ae).floor(),Q.copy(Et).multiplyScalar(Ae).floor(),Ee=ut;if(fe!==0&&(re=ge),b.bindFramebuffer(j.FRAMEBUFFER,re)&&b.drawBuffers(A,re),b.viewport(O),b.scissor(Q),b.setScissorTest(Ee),se){const ke=ce.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,fe)}else if(Xe){const ke=q;for(let Je=0;Je<A.textures.length;Je++){const Ke=ce.get(A.textures[Je]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Je,Ke.__webglTexture,fe,ke)}}else if(A!==null&&fe!==0){const ke=ce.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ke.__webglTexture,fe)}pe=-1},this.readRenderTargetPixels=function(A,q,fe,re,se,Xe,je,ke=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je){b.bindFramebuffer(j.FRAMEBUFFER,Je);try{const Ke=A.textures[ke],at=Ke.format,gt=Ke.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ke),!N.textureFormatReadable(at)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(gt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-re&&fe>=0&&fe<=A.height-se&&j.readPixels(q,fe,re,se,Ce.convert(at),Ce.convert(gt),Xe)}finally{const Ke=ae!==null?ce.get(ae).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,fe,re,se,Xe,je,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je)if(q>=0&&q<=A.width-re&&fe>=0&&fe<=A.height-se){b.bindFramebuffer(j.FRAMEBUFFER,Je);const Ke=A.textures[ke],at=Ke.format,gt=Ke.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+ke),!N.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,nt),j.bufferData(j.PIXEL_PACK_BUFFER,Xe.byteLength,j.STREAM_READ),j.readPixels(q,fe,re,se,Ce.convert(at),Ce.convert(gt),0);const Wt=ae!==null?ce.get(ae).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,Wt);const gn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await dE(j,gn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,nt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Xe),j.deleteBuffer(nt),j.deleteSync(gn),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,fe=0){const re=Math.pow(2,-fe),se=Math.floor(A.image.width*re),Xe=Math.floor(A.image.height*re),je=q!==null?q.x:0,ke=q!==null?q.y:0;ve.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,fe,0,0,je,ke,se,Xe),b.unbindTexture()},this.copyTextureToTexture=function(A,q,fe=null,re=null,se=0,Xe=0){let je,ke,Je,Ke,at,gt,nt,Wt,gn;const fn=A.isCompressedTexture?A.mipmaps[Xe]:A.image;if(fe!==null)je=fe.max.x-fe.min.x,ke=fe.max.y-fe.min.y,Je=fe.isBox3?fe.max.z-fe.min.z:1,Ke=fe.min.x,at=fe.min.y,gt=fe.isBox3?fe.min.z:0;else{const vn=Math.pow(2,-se);je=Math.floor(fn.width*vn),ke=Math.floor(fn.height*vn),A.isDataArrayTexture?Je=fn.depth:A.isData3DTexture?Je=Math.floor(fn.depth*vn):Je=1,Ke=0,at=0,gt=0}re!==null?(nt=re.x,Wt=re.y,gn=re.z):(nt=0,Wt=0,gn=0);const $t=Ce.convert(q.format),en=Ce.convert(q.type);let Ze;q.isData3DTexture?(ve.setTexture3D(q,0),Ze=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ve.setTexture2DArray(q,0),Ze=j.TEXTURE_2D_ARRAY):(ve.setTexture2D(q,0),Ze=j.TEXTURE_2D),b.activeTexture(j.TEXTURE0),b.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Xn=b.getParameter(j.UNPACK_ROW_LENGTH),Rt=b.getParameter(j.UNPACK_IMAGE_HEIGHT),Ln=b.getParameter(j.UNPACK_SKIP_PIXELS),hi=b.getParameter(j.UNPACK_SKIP_ROWS),Hi=b.getParameter(j.UNPACK_SKIP_IMAGES);b.pixelStorei(j.UNPACK_ROW_LENGTH,fn.width),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,fn.height),b.pixelStorei(j.UNPACK_SKIP_PIXELS,Ke),b.pixelStorei(j.UNPACK_SKIP_ROWS,at),b.pixelStorei(j.UNPACK_SKIP_IMAGES,gt);const pi=A.isDataArrayTexture||A.isData3DTexture,tn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const vn=ce.get(A),Gi=ce.get(q),Jt=ce.get(vn.__renderTarget),Qi=ce.get(Gi.__renderTarget);b.bindFramebuffer(j.READ_FRAMEBUFFER,Jt.__webglFramebuffer),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let Ba=0;Ba<Je;Ba++)pi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ce.get(A).__webglTexture,se,gt+Ba),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ce.get(q).__webglTexture,Xe,gn+Ba)),j.blitFramebuffer(Ke,at,je,ke,nt,Wt,je,ke,j.DEPTH_BUFFER_BIT,j.NEAREST);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(se!==0||A.isRenderTargetTexture||ce.has(A)){const vn=ce.get(A),Gi=ce.get(q);b.bindFramebuffer(j.READ_FRAMEBUFFER,ie),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,Y);for(let Jt=0;Jt<Je;Jt++)pi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,vn.__webglTexture,se,gt+Jt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,vn.__webglTexture,se),tn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Gi.__webglTexture,Xe,gn+Jt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Gi.__webglTexture,Xe),se!==0?j.blitFramebuffer(Ke,at,je,ke,nt,Wt,je,ke,j.COLOR_BUFFER_BIT,j.NEAREST):tn?j.copyTexSubImage3D(Ze,Xe,nt,Wt,gn+Jt,Ke,at,je,ke):j.copyTexSubImage2D(Ze,Xe,nt,Wt,Ke,at,je,ke);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else tn?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Ze,Xe,nt,Wt,gn,je,ke,Je,$t,en,fn.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Ze,Xe,nt,Wt,gn,je,ke,Je,$t,fn.data):j.texSubImage3D(Ze,Xe,nt,Wt,gn,je,ke,Je,$t,en,fn):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Xe,nt,Wt,je,ke,$t,en,fn.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Xe,nt,Wt,fn.width,fn.height,$t,fn.data):j.texSubImage2D(j.TEXTURE_2D,Xe,nt,Wt,je,ke,$t,en,fn);b.pixelStorei(j.UNPACK_ROW_LENGTH,Xn),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Rt),b.pixelStorei(j.UNPACK_SKIP_PIXELS,Ln),b.pixelStorei(j.UNPACK_SKIP_ROWS,hi),b.pixelStorei(j.UNPACK_SKIP_IMAGES,Hi),Xe===0&&q.generateMipmaps&&j.generateMipmap(Ze),b.unbindTexture()},this.initRenderTarget=function(A){ce.get(A).__webglFramebuffer===void 0&&ve.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ve.setTextureCube(A,0):A.isData3DTexture?ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ve.setTexture2DArray(A,0):ve.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){B=0,V=0,ae=null,b.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ft._getUnpackColorSpace()}}const u3=[{id:"gamefest-2026",slug:"gamefest-2026",title:"Gamefest 2026 Experience & Post-Mortem",subtitle:"48 hours, zero sleep, three game prototypes, and an unforgettable community vibe.",author:"Abbos Jabborov",tags:["GameDev","Gamefest","Hackathon","Retrospective"],reading_time:"4 min read",published_at:"February 18, 2026",cover_url:"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",content:`
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
`}],N_={nodes:[{id:"core-claive",label:"Abbos Jabborov",subtitle:"Personal Knowledge Graph & Nexus",category:"CORE",node_type:"STORY",slug:"about-claive",color:"#a855f7",size:14,isHub:!0},{id:"hub-projects",label:"Projects",subtitle:"Software systems, tools & libraries",category:"PROJECT",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#38bdf8",size:10,isHub:!0},{id:"node-scrolls",label:"Scrolls",subtitle:"Interactive Markdown reader & canvas workspace",category:"PROJECT",node_type:"EXTERNAL",url:"https://scrolls.claive.uz",color:"#38bdf8",size:6},{id:"node-game-engine",label:"Custom C++ Engine",subtitle:"Vulkan/OpenGL 3D rendering pipeline",category:"PROJECT",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#38bdf8",size:6},{id:"node-notes-wall",label:"Whisper Notes",subtitle:"Interactive message board & guest reflections",category:"PROJECT",node_type:"EXTERNAL",url:"https://claive.uz/notes",color:"#38bdf8",size:5},{id:"node-ai-research",label:"AI & Neural Graphs",subtitle:"Agentic coding systems & vector embeddings",category:"PROJECT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#38bdf8",size:5},{id:"hub-writing",label:"Writing & Notes",subtitle:"Reflections, post-mortems & digital garden",category:"STORY",node_type:"STORY",slug:"gamefest-2026",color:"#ec4899",size:10,isHub:!0},{id:"node-gamefest",label:"Gamefest 2026",subtitle:"48-hour game jam experience, shaders & post-mortem",category:"STORY",node_type:"STORY",slug:"gamefest-2026",color:"#ec4899",size:7},{id:"node-architecture",label:"Neural UI Design",subtitle:"Spatial interfaces and 3D constellation architectures",category:"STORY",node_type:"STORY",slug:"architecture-notes-2026",color:"#ec4899",size:6},{id:"node-obsidian-vault",label:"Digital Garden",subtitle:"Interlinked second-brain notes and evergreen thoughts",category:"STORY",node_type:"STORY",slug:"architecture-notes-2026",color:"#ec4899",size:5},{id:"node-bio",label:"About Claive",subtitle:"Biography, technical stack & background story",category:"STORY",node_type:"STORY",slug:"about-claive",color:"#ec4899",size:6},{id:"hub-games",label:"Game Vault",subtitle:"Indie releases, jam prototypes & game physics",category:"GAME",node_type:"EXTERNAL",url:"https://store.steampowered.com",color:"#fbbf24",size:10,isHub:!0},{id:"node-games-vault",label:"Indie Game Vault",subtitle:"Steam releases, jam prototypes & playable builds",category:"GAME",node_type:"EXTERNAL",url:"https://store.steampowered.com",color:"#fbbf24",size:7},{id:"node-retro-arcade",label:"Retro Arcade",subtitle:"Browser-based pixel mini-games and physics toys",category:"GAME",node_type:"EXTERNAL",url:"https://claive.uz/games",color:"#fbbf24",size:5},{id:"node-steam-library",label:"Steam Library",subtitle:"Curated game collection and play history",category:"GAME",node_type:"EXTERNAL",url:"https://steamcommunity.com",color:"#fbbf24",size:5},{id:"node-game-jam-2025",label:"Game Jam Archive",subtitle:"Past jam submissions and experimental prototypes",category:"GAME",node_type:"STORY",slug:"gamefest-2026",color:"#fbbf24",size:5},{id:"hub-experiments",label:"Creative Lab",subtitle:"Real-time shaders, audio synthesizers & canvas toys",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:10,isHub:!0},{id:"node-shader-lab",label:"Shader Lab",subtitle:"Procedural HLSL / GLSL visual experiments",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:6},{id:"node-creative-code",label:"Generative Canvas",subtitle:"Algorithmic geometry and mathematical art",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:5},{id:"node-soundscape",label:"Soundtrack Synapse",subtitle:"Curated ambient game soundtracks & coding flow",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://open.spotify.com",color:"#34d399",size:5},{id:"node-spatial-audio",label:"Spatial Web Audio",subtitle:"Positional 3D binaural synthesizer engine",category:"EXPERIMENT",node_type:"EXTERNAL",url:"https://claive.uz",color:"#34d399",size:5},{id:"hub-socials",label:"Social Nexus",subtitle:"Direct channels, social profiles & contact",category:"SOCIAL",node_type:"EXTERNAL",url:"https://www.linkedin.com/in/abbos-jabborov",color:"#60a5fa",size:10,isHub:!0},{id:"node-linkedin",label:"LinkedIn",subtitle:"Professional profile, connections & career milestones",category:"SOCIAL",node_type:"EXTERNAL",url:"https://www.linkedin.com/in/abbos-jabborov",color:"#60a5fa",size:6},{id:"node-github",label:"GitHub",subtitle:"Open-source repositories, engines & experiments",category:"SOCIAL",node_type:"EXTERNAL",url:"https://github.com/AbbosJabborov",color:"#60a5fa",size:6},{id:"node-telegram",label:"Telegram",subtitle:"Direct messaging & project updates channel",category:"SOCIAL",node_type:"EXTERNAL",url:"https://t.me/claive",color:"#60a5fa",size:5},{id:"node-twitter",label:"Twitter / X",subtitle:"Tech thoughts, game clips & release announcements",category:"SOCIAL",node_type:"EXTERNAL",url:"https://x.com",color:"#60a5fa",size:5},{id:"node-resume",label:"Resume & CV",subtitle:"Experience timeline and engineering achievements",category:"SOCIAL",node_type:"STORY",slug:"about-claive",color:"#60a5fa",size:5},{id:"node-contact",label:"Get in Touch",subtitle:"Collaborations, freelance & contract opportunities",category:"SOCIAL",node_type:"EXTERNAL",url:"mailto:contact@claive.uz",color:"#60a5fa",size:5}],links:[{source:"core-claive",target:"hub-projects"},{source:"core-claive",target:"hub-writing"},{source:"core-claive",target:"hub-games"},{source:"core-claive",target:"hub-experiments"},{source:"core-claive",target:"hub-socials"},{source:"hub-projects",target:"node-scrolls"},{source:"hub-projects",target:"node-game-engine"},{source:"hub-projects",target:"node-notes-wall"},{source:"hub-projects",target:"node-ai-research"},{source:"hub-writing",target:"node-gamefest"},{source:"hub-writing",target:"node-architecture"},{source:"hub-writing",target:"node-obsidian-vault"},{source:"hub-writing",target:"node-bio"},{source:"hub-games",target:"node-games-vault"},{source:"hub-games",target:"node-retro-arcade"},{source:"hub-games",target:"node-steam-library"},{source:"hub-games",target:"node-game-jam-2025"},{source:"hub-experiments",target:"node-shader-lab"},{source:"hub-experiments",target:"node-creative-code"},{source:"hub-experiments",target:"node-soundscape"},{source:"hub-experiments",target:"node-spatial-audio"},{source:"hub-socials",target:"node-linkedin"},{source:"hub-socials",target:"node-github"},{source:"hub-socials",target:"node-telegram"},{source:"hub-socials",target:"node-twitter"},{source:"hub-socials",target:"node-resume"},{source:"hub-socials",target:"node-contact"},{source:"node-gamefest",target:"hub-games"},{source:"node-gamefest",target:"node-shader-lab"},{source:"node-scrolls",target:"node-obsidian-vault"},{source:"node-scrolls",target:"node-notes-wall"},{source:"node-game-engine",target:"node-shader-lab"},{source:"node-game-engine",target:"node-games-vault"},{source:"node-architecture",target:"node-ai-research"},{source:"node-architecture",target:"node-creative-code"},{source:"node-soundscape",target:"node-spatial-audio"},{source:"node-github",target:"hub-projects"},{source:"node-github",target:"node-game-engine"},{source:"node-bio",target:"node-resume"},{source:"node-bio",target:"core-claive"},{source:"node-retro-arcade",target:"node-creative-code"}]};function f3({onHoverNode:s=()=>{}}){const e=Re.useRef(null),i=Re.useRef(null),r=Re.useRef(null),l=sp(),c=Re.useRef(null),f=Re.useRef(null),p=Re.useRef(null),m=Re.useRef([]),h=Re.useRef(null),v=Re.useRef(null),_=Re.useRef(!1),g=Re.useRef(null),M=Re.useRef(null),[E,C]=Re.useState(!0),S=Re.useRef(Date.now()),x=Re.useRef(new te(0,0,1)),I=Re.useRef(!1),H=Re.useRef({lon:0,lat:5,targetLon:0,targetLat:5,fov:65,targetFov:65,isDragging:!1,startX:0,startY:0,startLon:0,startLat:0,startPinchDist:0,startFov:65}),w=Re.useCallback(()=>{if(!g.current)try{const D=window.AudioContext||window.webkitAudioContext;if(!D)return;const X=new D;g.current=X;const G=X.createOscillator(),K=X.createOscillator(),ge=X.createGain(),ie=X.createBiquadFilter();G.type="sine",G.frequency.setValueAtTime(55,X.currentTime),K.type="triangle",K.frequency.setValueAtTime(110,X.currentTime),ie.type="lowpass",ie.frequency.setValueAtTime(220,X.currentTime),ge.gain.setValueAtTime(.012,X.currentTime),G.connect(ie),K.connect(ie),ie.connect(ge),ge.connect(X.destination),G.start(),K.start(),M.current={osc1:G,osc2:K,gain:ge,filter:ie}}catch{}},[]),F=Re.useCallback((D=440,X="sine",G=.08,K=0,ge=.04)=>{if(E){w();try{const ie=g.current;if(!ie)return;ie.state==="suspended"&&ie.resume();const Y=ie.createOscillator(),B=ie.createGain();if(Y.type=X,Y.frequency.setValueAtTime(D,ie.currentTime),B.gain.setValueAtTime(ge,ie.currentTime),B.gain.exponentialRampToValueAtTime(1e-4,ie.currentTime+G),ie.createStereoPanner){const V=ie.createStereoPanner();V.pan.setValueAtTime(Math.max(-1,Math.min(1,K)),ie.currentTime),Y.connect(B),B.connect(V),V.connect(ie.destination)}else Y.connect(B),B.connect(ie.destination);Y.start(),Y.stop(ie.currentTime+G)}catch{}}},[E,w]),P=Re.useCallback(()=>{if(E){w();try{const D=g.current;if(!D)return;D.state==="suspended"&&D.resume();const X=D.createOscillator(),G=D.createGain();X.type="sawtooth",X.frequency.setValueAtTime(220,D.currentTime),X.frequency.exponentialRampToValueAtTime(880,D.currentTime+.6),G.gain.setValueAtTime(.06,D.currentTime),G.gain.exponentialRampToValueAtTime(1e-4,D.currentTime+.65),X.connect(G),G.connect(D.destination),X.start(),X.stop(D.currentTime+.65)}catch{}}},[E,w]),z=Re.useCallback((D,X,G)=>new te(D*Math.sin(X)*Math.cos(G),D*Math.cos(X),D*Math.sin(X)*Math.sin(G)),[]);Re.useEffect(()=>{const D=e.current,X=i.current;if(!D||!X)return;const G=D.clientWidth,K=D.clientHeight,ge=new kE;c.current=ge;const ie=new zi(65,G/K,1,3e3);ie.position.set(0,0,.01),f.current=ie;const Y=new c3({alpha:!0,antialias:!0,powerPreference:"high-performance"});Y.setSize(G,K),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.current=Y,D.innerHTML="",D.appendChild(Y.domElement);const B=new Ws;ge.add(B);const ae=(()=>{const ne=document.createElement("canvas");ne.width=64,ne.height=64;const U=ne.getContext("2d"),J=U.createRadialGradient(32,32,0,32,32,30);J.addColorStop(0,"rgba(255, 255, 255, 1)"),J.addColorStop(.2,"rgba(255, 255, 255, 0.95)"),J.addColorStop(.5,"rgba(220, 240, 255, 0.5)"),J.addColorStop(.8,"rgba(100, 200, 255, 0.15)"),J.addColorStop(1,"rgba(0, 0, 0, 0)"),U.fillStyle=J,U.fillRect(0,0,64,64);const ue=new n1(ne);return ue.needsUpdate=!0,ue})(),pe=750,Ue=new Float32Array(pe*3),O=new Float32Array(pe*3),Q=new Float32Array(pe),Ee=[new Dt(16317180),new Dt(9684477),new Dt(12891645),new Dt(7268279)];for(let ne=0;ne<pe;ne++){const U=ne*3,J=900+Math.random()*800,ue=Math.acos(1-2*Math.random()),Ce=Math.random()*Math.PI*2,Le=z(J,ue,Ce);Ue[U]=Le.x,Ue[U+1]=Le.y,Ue[U+2]=Le.z;const Se=Ee[Math.floor(Math.random()*Ee.length)];O[U]=Se.r,O[U+1]=Se.g,O[U+2]=Se.b,Q[ne]=Math.random()*Math.PI*2}const Pe=new ei;Pe.setAttribute("position",new ui(Ue,3)),Pe.setAttribute("color",new ui(O,3));const Ve=new yx({vertexColors:!0,size:2.2,map:ae,transparent:!0,opacity:.65,blending:Xs,depthWrite:!1}),ee=new t1(Pe,Ve);B.add(ee);const Me=N_.nodes,Ae=N_.links,He=280,Qe=new Map,Ye=new Map;Me.forEach(ne=>{Ye.set(ne.id,new Set)}),Ae.forEach(ne=>{Ye.has(ne.source)&&Ye.has(ne.target)&&(Ye.get(ne.source).add(ne.target),Ye.get(ne.target).add(ne.source))});const Et={"core-claive":{phi:Math.PI*.5,theta:0},"hub-projects":{phi:Math.PI*.38,theta:Math.PI*.45},"hub-writing":{phi:Math.PI*.35,theta:Math.PI*1.15},"hub-games":{phi:Math.PI*.65,theta:Math.PI*.8},"hub-experiments":{phi:Math.PI*.68,theta:Math.PI*1.6},"hub-socials":{phi:Math.PI*.32,theta:Math.PI*1.85}},ut=[],_t=[],xt=new ol(20,8,8),dt=new qs({visible:!1});X.innerHTML="",Me.forEach((ne,U)=>{let J,ue;if(Et[ne.id])J=Et[ne.id].phi,ue=Et[ne.id].theta;else{let At={phi:Math.PI*.5,theta:Math.PI*.5};for(const[st,ot]of Object.entries(Et))if(Ye.get(ne.id)?.has(st)){At=ot;break}const mt=U%4*(Math.PI*.5),et=.14+U%3*.05;J=Math.max(.15,Math.min(Math.PI-.15,At.phi+Math.sin(mt)*et)),ue=At.theta+Math.cos(mt)*et*1.5}const Ce=z(He,J,ue),Le=700+Math.random()*500,Se=z(Le,Math.random()*Math.PI,Math.random()*Math.PI*2),Be=new Dt(ne.color||"#38bdf8"),Ne=new Ws;Ne.position.copy(Se);const it=ne.isHub?ne.id==="core-claive"?9:7:ne.size?ne.size*.75:4.5,ft=new ol(it,16,16),kt=new qs({color:Be,transparent:!0,opacity:0}),It=new Ei(ft,kt);Ne.add(It);let cn=null;if(ne.isHub){const At=new xp(it*1.35,it*1.85,32),mt=new qs({color:Be,side:ra,transparent:!0,opacity:0,blending:Xs});cn=new Ei(At,mt),cn.lookAt(0,0,0),Ne.add(cn)}const Fe=new Ei(xt,dt);Fe.userData={nodeData:ne,nodeGroup:Ne,coreMesh:It,haloMesh:cn,originalColor:Be},Ne.add(Fe),_t.push(Fe),B.add(Ne);const Tt=document.createElement("div");Tt.className="obsidian-node-label",Tt.textContent=ne.label,Tt.dataset.nodeId=ne.id,Tt.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        transform: translate3d(-50%, -50%, 0);
        pointer-events: none;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        font-size: ${ne.isHub?ne.id==="core-claive"?"14px":"12px":"11px"};
        font-weight: ${ne.isHub?"700":"500"};
        color: #f1f5f9;
        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.95), 0 0 10px ${ne.color||"#38bdf8"}44;
        opacity: 0;
        transition: opacity 0.25s ease, transform 0.15s ease, color 0.2s ease;
        white-space: nowrap;
        user-select: none;
        letter-spacing: 0.02em;
        z-index: 10;
      `,X.appendChild(Tt);const bt={id:ne.id,data:ne,pos:Se.clone(),targetPos:Ce.clone(),basePos:Ce.clone(),phi:J,theta:ue,group:Ne,coreMesh:It,haloMesh:cn,hitMesh:Fe,labelEl:Tt,color:Be,isHub:!!ne.isHub};Qe.set(ne.id,bt),ut.push(bt)}),m.current=_t;const Bt=[];Ae.forEach(ne=>{const U=Qe.get(ne.source),J=Qe.get(ne.target);U&&J&&Bt.push({source:U,target:J,sourceId:ne.source,targetId:ne.target})});const jt=new Float32Array(Bt.length*6),Qt=new Float32Array(Bt.length*6);for(let ne=0;ne<Bt.length;ne++){const U=ne*6;for(let J=0;J<2;J++)Qt[U+J*3]=.22,Qt[U+J*3+1]=.28,Qt[U+J*3+2]=.38}const Vt=new ei;Vt.setAttribute("position",new ui(jt,3).setUsage(Lv)),Vt.setAttribute("color",new ui(Qt,3).setUsage(Lv));const St=new xx({vertexColors:!0,transparent:!0,opacity:0,blending:Xs,linewidth:1.2}),Ht=new e1(Vt,St);B.add(Ht);const j=55,Ut=[],Pt=new ol(1,8,8);for(let ne=0;ne<j;ne++){const U=Bt[Math.floor(Math.random()*Bt.length)];if(!U)continue;const J=U.source.color.clone().lerp(U.target.color,Math.random());J.addScalar(.35);const ue=new qs({color:J,transparent:!0,opacity:.95,blending:Xs}),Ce=new Ei(Pt,ue);Ce.position.copy(U.source.pos),B.add(Ce),Ut.push({mesh:Ce,edge:U,progress:Math.random(),speed:.0035+Math.random()*.0055,wobbleOffset:Math.random()*10,baseScale:.8+Math.random()*.5})}const N=new h1,b=new Xt,Z=ne=>ne.touches&&ne.touches.length>0?{x:ne.touches[0].clientX,y:ne.touches[0].clientY}:{x:ne.clientX,y:ne.clientY},ce=(ne,U)=>{S.current=Date.now();const J=D.getBoundingClientRect();b.x=(ne-J.left)/J.width*2-1,b.y=-((U-J.top)/J.height)*2+1,N.setFromCamera(b,ie),x.current.copy(N.ray.direction).multiplyScalar(He),I.current=!0;const ue=N.intersectObjects(m.current,!1);if(ue.length>0){const Ce=ue[0].object,Le=Ce.userData.nodeData,Se=Ce.userData.nodeGroup;if(h.current!==Ce){h.current=Ce,v.current=Le.id,D.style.cursor="pointer";const kt=[440,554.37,659.25,880,987.77],It=kt[Math.abs(Le.label.length)%kt.length];F(Le.isHub?It*1.25:It,"sine",.09,b.x,.05)}const Be=new te;Se.getWorldPosition(Be);const Ne=Be.clone().project(ie),it=(Ne.x+1)/2*J.width+J.left,ft=(-Ne.y+1)/2*J.height+J.top;s({node:Le,screenX:it,screenY:ft,isVisible:Ne.z<1})}else h.current&&(h.current=null,v.current=null,D.style.cursor="grab",s(null))},ve=ne=>{S.current=Date.now(),w();const U=Z(ne),J=H.current;if(J.isDragging=!0,J.startX=U.x,J.startY=U.y,J.startLon=J.targetLon,J.startLat=J.targetLat,ne.touches&&ne.touches.length===2){const ue=ne.touches[0].clientX-ne.touches[1].clientX,Ce=ne.touches[0].clientY-ne.touches[1].clientY;J.startPinchDist=Math.hypot(ue,Ce),J.startFov=J.targetFov}D.style.cursor="grabbing"},Oe=ne=>{const U=Z(ne),J=H.current;if(J.isDragging){if(S.current=Date.now(),ne.touches&&ne.touches.length===2&&J.startPinchDist>0){const Le=ne.touches[0].clientX-ne.touches[1].clientX,Se=ne.touches[0].clientY-ne.touches[1].clientY,Be=Math.hypot(Le,Se),Ne=J.startPinchDist/Math.max(1,Be);J.targetFov=Math.max(35,Math.min(85,J.startFov*Ne));return}const ue=(U.x-J.startX)*.085,Ce=(U.y-J.startY)*.085;J.targetLon=J.startLon-ue,J.targetLat=Math.max(-80,Math.min(80,J.startLat+Ce))}else ce(U.x,U.y)},Ge=ne=>{ne.preventDefault(),S.current=Date.now();const U=H.current;U.targetFov=Math.max(35,Math.min(85,U.targetFov+ne.deltaY*.04))},xe=ne=>{if(_.current)return;_.current=!0,P(),r.current&&(r.current.style.opacity="1");const U=ie.position.clone(),J=ne.pos.clone().multiplyScalar(.92),ue=ie.fov,Ce=performance.now(),Le=650,Se=Be=>{const Ne=Be-Ce,it=Math.min(1,Ne/Le),ft=Math.pow(it,3);if(ie.position.lerpVectors(U,J,ft),ie.fov=Zo.lerp(ue,115,ft),ie.updateProjectionMatrix(),it<1)requestAnimationFrame(Se);else{const kt=ne.data;kt.node_type==="STORY"&&kt.slug?l(`/story/${kt.slug}`):kt.url&&(window.open(kt.url,"_blank","noopener,noreferrer"),setTimeout(()=>{ie.position.set(0,0,.01),ie.fov=H.current.fov,ie.updateProjectionMatrix(),r.current&&(r.current.style.opacity="0"),_.current=!1},300))}};requestAnimationFrame(Se)},_e=ne=>{S.current=Date.now();const U=Z(ne),J=H.current,ue=Math.hypot(U.x-J.startX,U.y-J.startY);if(J.isDragging=!1,J.startPinchDist=0,ue<5&&h.current&&!_.current){const Ce=Qe.get(h.current.userData.nodeData.id);Ce&&xe(Ce)}D.style.cursor=h.current?"pointer":"grab"},ze=ne=>ne.preventDefault();D.addEventListener("mousedown",ve),window.addEventListener("mousemove",Oe),window.addEventListener("mouseup",_e),D.addEventListener("wheel",Ge,{passive:!1}),D.addEventListener("contextmenu",ze),D.addEventListener("touchstart",ve,{passive:!0}),window.addEventListener("touchmove",Oe,{passive:!0}),window.addEventListener("touchend",_e);const We=()=>{if(!D||!Y||!ie)return;const ne=D.clientWidth,U=D.clientHeight;ie.aspect=ne/U,ie.updateProjectionMatrix(),Y.setSize(ne,U)};window.addEventListener("resize",We);let he;const ye=performance.now(),De=2200,Ie=()=>{he=requestAnimationFrame(Ie);const ne=performance.now(),U=(ne-ye)*.001,J=H.current,ue=Math.min(1,(ne-ye)/De),Ce=1-Math.pow(1-ue,3),Le=(Date.now()-S.current)/1e3,Se=Zo.clamp(1+Math.max(0,Le-2)*.35,1,4.5);if(!J.isDragging&&!_.current&&(J.targetLon+=.012*(1+(Se-1)*.2)),!_.current){J.lon+=(J.targetLon-J.lon)*.045,J.lat+=(J.targetLat-J.lat)*.045,J.fov+=(J.targetFov-J.fov)*.055,ie.fov=J.fov,ie.updateProjectionMatrix();const Fe=Zo.degToRad(90-J.lat),Tt=Zo.degToRad(J.lon),bt=500*Math.sin(Fe)*Math.cos(Tt),At=500*Math.cos(Fe),mt=500*Math.sin(Fe)*Math.sin(Tt);ie.lookAt(bt,At,mt)}const Be=x.current,Ne=I.current&&!J.isDragging;ut.forEach((Fe,Tt)=>{const bt=Fe.basePos;Fe.pos.lerpVectors(Fe.pos,bt,Ce*.08+.02);const At=(2.2+Math.sin(Tt*1.3)*1.2)*Se,mt=(1.5+Tt%3*.3)*(1+(Se-1)*.3),et=Math.sin(U*mt+Tt*.7)*At,st=He+et,ot=z(st,Fe.phi,Fe.theta);if(Ne&&ue>=.8){const Zt=ot.distanceTo(Be);if(Zt<130){const un=(130-Zt)/130*18,Tn=Be.clone().sub(ot).normalize();ot.add(Tn.multiplyScalar(un))}}Fe.pos.lerp(ot,.1),Fe.group.position.copy(Fe.pos),ue<1&&(Fe.coreMesh.material.opacity=Ce*.95,Fe.haloMesh&&(Fe.haloMesh.material.opacity=Ce*.5)),Fe.haloMesh&&(Fe.haloMesh.rotation.z+=.01*(1+(Se-1)*.2))}),ue<1?(St.opacity=Ce*.45,Ve.opacity=Ce*.65):Ve.opacity=.55+Math.sin(U*1.5)*.12,Ut.forEach(Fe=>{Fe.progress+=Fe.speed*(1+(Se-1)*.2),Fe.progress>1&&(Fe.progress=0),Fe.mesh.position.lerpVectors(Fe.edge.source.pos,Fe.edge.target.pos,Fe.progress),Fe.mesh.position.y+=Math.sin(U*3+Fe.wobbleOffset)*1.2;const Tt=(.7+Math.sin(Fe.progress*Math.PI)*.75)*Fe.baseScale;Fe.mesh.scale.set(Tt,Tt,Tt)});const it=v.current,ft=it?Ye.get(it):null,kt=D.getBoundingClientRect();ut.forEach(Fe=>{const Tt=Fe.id===it,bt=ft?.has(Fe.id),At=!it||Tt||bt,mt=Tt?1.55:bt?1.25:it?.75:1+Math.sin(U*2+Fe.phi)*(.04*Se);Fe.group.scale.lerp(new te(mt,mt,mt),.2);const et=Tt?1:bt?.95:it?.15:.88;if(Fe.coreMesh.material.opacity=Zo.lerp(Fe.coreMesh.material.opacity,et,.15),Fe.haloMesh&&(Fe.haloMesh.material.opacity=Tt?.9:At?.5:.08),Fe.labelEl&&ue>.6){const st=new te;Fe.group.getWorldPosition(st);const ot=st.clone().project(ie);if(ot.z<1&&ot.x>-1.1&&ot.x<1.1&&ot.y>-1.1&&ot.y<1.1){const Zt=(ot.x+1)/2*kt.width,un=(-ot.y+1)/2*kt.height+(Fe.isHub?16:13);Fe.labelEl.style.transform=`translate3d(${Zt}px, ${un}px, 0) translate3d(-50%, 0, 0)`,Fe.labelEl.style.display="block",Tt?(Fe.labelEl.style.opacity="1",Fe.labelEl.style.color="#ffffff",Fe.labelEl.style.fontWeight="700"):bt?(Fe.labelEl.style.opacity="0.95",Fe.labelEl.style.color="#e2e8f0",Fe.labelEl.style.fontWeight="600"):it?(Fe.labelEl.style.opacity="0.05",Fe.labelEl.style.color="#64748b"):(Fe.labelEl.style.opacity=Fe.isHub?"0.9":"0.45",Fe.labelEl.style.color=Fe.isHub?"#ffffff":"#cbd5e1")}else Fe.labelEl.style.display="none"}});const It=Vt.attributes.position.array,cn=Vt.attributes.color.array;Bt.forEach((Fe,Tt)=>{const bt=Tt*6;It[bt]=Fe.source.pos.x,It[bt+1]=Fe.source.pos.y,It[bt+2]=Fe.source.pos.z,It[bt+3]=Fe.target.pos.x,It[bt+4]=Fe.target.pos.y,It[bt+5]=Fe.target.pos.z;const At=it&&(Fe.sourceId===it||Fe.targetId===it),mt=!!it;for(let et=0;et<2;et++){const st=et===0?Fe.source.color:Fe.target.color;if(At)cn[bt+et*3]=st.r*1.3,cn[bt+et*3+1]=st.g*1.3,cn[bt+et*3+2]=st.b*1.3;else if(mt)cn[bt+et*3]=.05,cn[bt+et*3+1]=.06,cn[bt+et*3+2]=.09;else{const ot=.24+Math.sin(U*2+Tt)*(.05*Se);cn[bt+et*3]=ot,cn[bt+et*3+1]=ot*1.25,cn[bt+et*3+2]=ot*1.6}}}),Vt.attributes.position.needsUpdate=!0,Vt.attributes.color.needsUpdate=!0,Y.render(ge,ie)};return Ie(),()=>{cancelAnimationFrame(he),window.removeEventListener("resize",We),D.removeEventListener("mousedown",ve),window.removeEventListener("mousemove",Oe),window.removeEventListener("mouseup",_e),D.removeEventListener("wheel",Ge),D.removeEventListener("contextmenu",ze),D.removeEventListener("touchstart",ve),window.removeEventListener("touchmove",Oe),window.removeEventListener("touchend",_e),Vt.dispose(),St.dispose(),Y.domElement&&Y.domElement.parentNode&&Y.domElement.parentNode.removeChild(Y.domElement),Y.dispose()}},[z,l,s,F,P,w]);const T=()=>{S.current=Date.now();const D=H.current;D.targetLon=0,D.targetLat=5,D.targetFov=65,F(520,"sine",.08,0,.05)};return L.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"},children:[L.jsx("div",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",cursor:"grab",userSelect:"none",zIndex:1}}),L.jsx("div",{ref:i,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"hidden",zIndex:5}}),L.jsx("div",{ref:r,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",opacity:0,background:"radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.25) 50%, rgba(3, 5, 10, 0.8) 100%)",boxShadow:"inset 0 0 100px rgba(0, 240, 255, 0.4)",transition:"opacity 0.45s ease-out",zIndex:50}}),L.jsxs("div",{style:{position:"fixed",bottom:"16px",left:"20px",display:"flex",alignItems:"center",gap:"12px",zIndex:20,background:"rgba(10, 16, 28, 0.75)",backdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.08)",padding:"6px 14px",borderRadius:"999px",fontSize:"12px",color:"#94a3b8",userSelect:"none"},children:[L.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[L.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#a855f7"}}),L.jsx("span",{children:"24 Notes • 5 Clusters • 360° Celestial Sphere"})]}),L.jsx("span",{style:{color:"rgba(255, 255, 255, 0.15)"},children:"|"}),L.jsx("button",{onClick:T,title:"Reset 360° look direction to center",style:{background:"transparent",border:"none",color:"#38bdf8",cursor:"pointer",fontSize:"12px",padding:0},children:"Reset View"}),L.jsx("span",{style:{color:"rgba(255, 255, 255, 0.15)"},children:"|"}),L.jsx("button",{onClick:()=>C(D=>!D),title:E?"Mute audio chimes":"Enable audio chimes",style:{background:"transparent",border:"none",color:E?"#34d399":"#64748b",cursor:"pointer",fontSize:"12px",padding:0},children:E?"Audio On":"Audio Off"})]})]})}function d3({hoverInfo:s}){if(!s||!s.node||!s.isVisible)return null;const{node:e,screenX:i,screenY:r}=s;return L.jsxs("div",{style:{position:"fixed",left:`${i+16}px`,top:`${r-14}px`,pointerEvents:"none",zIndex:50,transform:"translate3d(0, 0, 0)",display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(5, 8, 16, 0.8)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"6px",padding:"5px 12px",color:"#ffffff",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.6)",whiteSpace:"nowrap",fontSize:"13px",fontWeight:"500",letterSpacing:"0.02em"},children:[L.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:e.color||"#00f0ff",boxShadow:`0 0 8px ${e.color||"#00f0ff"}`}}),L.jsx("span",{style:{color:"#f8fafc"},children:e.label}),L.jsx("span",{style:{color:"#64748b",fontSize:"11px"},children:"➔"})]})}function h3(){const[s,e]=Re.useState(null);return L.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden",backgroundColor:"#060913"},children:[L.jsx(f3,{onHoverNode:e}),L.jsx(d3,{hoverInfo:s})]})}function O_(){const{slug:s}=EM(),e=sp(),[i,r]=Re.useState(null),[l,c]=Re.useState(!0),[f,p]=Re.useState(0),[m,h]=Re.useState(!1);Re.useEffect(()=>{const g=u3.find(M=>M.slug===s||M.id===s);g?(r(g),c(!1)):fetch(`/api/stories/${s}/`).then(M=>{if(M.ok)return M.json();throw new Error("Not found")}).then(M=>{r(M),c(!1)}).catch(()=>{r(null),c(!1)}),window.scrollTo(0,0)},[s]),Re.useEffect(()=>{const g=()=>{const M=document.documentElement.scrollHeight-window.innerHeight;M>0&&p(window.scrollY/M*100)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const v=()=>{navigator.clipboard.writeText(window.location.href),h(!0),setTimeout(()=>h(!1),2e3)},_=g=>{if(!g)return null;const M=g.split(`
`),E=[];let C=!1,S=[];return M.forEach((x,I)=>{if(x.trim().startsWith("```")){C?(E.push(L.jsx("pre",{style:{background:"#0d131f",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",padding:"16px 20px",overflowX:"auto",fontSize:"13px",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",color:"#7dd3fc",margin:"24px 0",lineHeight:"1.6"},children:L.jsx("code",{children:S.join(`
`)})},`code-${I}`)),S=[],C=!1):C=!0;return}if(C){S.push(x);return}if(x.startsWith("# "))E.push(L.jsx("h1",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:"800",color:"#ffffff",letterSpacing:"-0.02em",margin:"32px 0 16px 0",lineHeight:"1.2"},children:x.replace("# ","")},I));else if(x.startsWith("## "))E.push(L.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",color:"#f8fafc",letterSpacing:"-0.01em",margin:"36px 0 14px 0",lineHeight:"1.3"},children:x.replace("## ","")},I));else if(x.startsWith("### "))E.push(L.jsx("h3",{style:{fontSize:"18px",fontWeight:"600",color:"#e2e8f0",margin:"24px 0 10px 0"},children:x.replace("### ","")},I));else if(x.startsWith("> "))E.push(L.jsx("blockquote",{style:{borderLeft:"3px solid #ec4899",background:"rgba(236, 72, 153, 0.08)",padding:"14px 20px",borderRadius:"0 8px 8px 0",margin:"24px 0",fontStyle:"italic",color:"#f1f5f9",fontSize:"16px",lineHeight:"1.6"},children:x.replace("> ","").replace(/"/g,"")},I));else if(x.match(/^!\[(.*?)\]\((.*?)\)/)){const H=x.match(/^!\[(.*?)\]\((.*?)\)/),w=H[1],F=H[2];E.push(L.jsxs("figure",{style:{margin:"32px 0"},children:[L.jsx("img",{src:F,alt:w,style:{width:"100%",maxHeight:"520px",objectFit:"cover",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 12px 35px rgba(0, 0, 0, 0.4)"}}),w&&L.jsx("figcaption",{style:{textAlign:"center",fontSize:"12px",color:"#94a3b8",marginTop:"8px",fontStyle:"italic"},children:w})]},I))}else x.trim()==="---"?E.push(L.jsx("hr",{style:{border:"none",borderTop:"1px solid rgba(255, 255, 255, 0.1)",margin:"36px 0"}},I)):x.trim().startsWith("- ")||x.trim().startsWith("1. ")||x.trim().startsWith("2. ")||x.trim().startsWith("3. ")?E.push(L.jsx("li",{style:{fontSize:"16px",lineHeight:"1.8",color:"#cbd5e1",marginLeft:"24px",marginBottom:"6px"},children:x.replace(/^-\s|^\d+\.\s/,"")},I)):x.trim().length>0&&E.push(L.jsx("p",{style:{fontSize:"16px",lineHeight:"1.8",color:"#cbd5e1",margin:"0 0 18px 0",fontWeight:"400"},children:x},I))}),E};return l?L.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#080c16",color:"#00f0ff",fontSize:"16px",gap:"12px"},children:[L.jsx(Eb,{className:"animate-spin"}),L.jsx("span",{children:"Loading Story from Nexus..."})]}):i?L.jsxs("div",{style:{minHeight:"100vh",background:"#080c16",color:"#e2e8f0",position:"relative"},children:[L.jsx("div",{style:{position:"fixed",top:0,left:0,height:"3px",width:`${f}%`,background:"linear-gradient(90deg, #ec4899, #00f0ff)",zIndex:100,transition:"width 0.1s ease-out"}}),L.jsxs("header",{style:{position:"sticky",top:0,zIndex:40,background:"rgba(8, 12, 22, 0.85)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",padding:"14px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[L.jsxs("button",{onClick:()=>e("/"),style:{display:"flex",alignItems:"center",gap:"8px",background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#cbd5e1",padding:"6px 14px",borderRadius:"999px",fontSize:"13px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:g=>{g.currentTarget.style.borderColor="#00f0ff",g.currentTarget.style.color="#00f0ff"},onMouseLeave:g=>{g.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",g.currentTarget.style.color="#cbd5e1"},children:[L.jsx(sb,{size:15}),L.jsx("span",{children:"Neural Sphere"})]}),L.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[L.jsxs("button",{onClick:v,title:"Share story link",style:{display:"flex",alignItems:"center",gap:"6px",background:"transparent",border:"1px solid rgba(255, 255, 255, 0.12)",color:"#94a3b8",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",cursor:"pointer"},children:[m?L.jsx(db,{size:13,color:"#22c55e"}):L.jsx(Mb,{size:13}),L.jsx("span",{children:m?"Link Copied":"Share"})]}),L.jsxs("a",{href:"/admin/games/story/",target:"_blank",rel:"noopener noreferrer",title:"Open Story in Django Admin Editor",style:{display:"flex",alignItems:"center",gap:"5px",background:"rgba(236, 72, 153, 0.15)",border:"1px solid rgba(236, 72, 153, 0.35)",color:"#f472b6",padding:"6px 12px",borderRadius:"999px",fontSize:"12px",fontWeight:"600",textDecoration:"none"},children:[L.jsx(yb,{size:13}),L.jsx("span",{children:"Admin Edit"})]})]})]}),L.jsxs("main",{style:{maxWidth:"760px",margin:"0 auto",padding:"40px 20px 100px 20px"},children:[i.cover_url&&L.jsx("div",{style:{marginBottom:"36px",borderRadius:"16px",overflow:"hidden",border:"1px solid rgba(255, 255, 255, 0.1)",maxHeight:"420px"},children:L.jsx("img",{src:i.cover_url,alt:i.title,style:{width:"100%",height:"100%",maxHeight:"420px",objectFit:"cover",display:"block"}})}),L.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",fontSize:"12px",color:"#94a3b8",marginBottom:"16px"},children:[i.published_at&&L.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[L.jsx(ub,{size:13}),i.published_at]}),i.reading_time&&L.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[L.jsx(pb,{size:13}),i.reading_time]}),i.author&&L.jsxs("span",{style:{background:"rgba(0, 240, 255, 0.1)",color:"#00f0ff",padding:"2px 8px",borderRadius:"4px",fontWeight:"500"},children:["By ",i.author]})]}),L.jsx("h1",{style:{fontSize:"clamp(32px, 5vw, 48px)",fontWeight:"800",color:"#ffffff",letterSpacing:"-0.03em",lineHeight:"1.15",margin:"0 0 16px 0"},children:i.title}),i.subtitle&&L.jsx("p",{style:{fontSize:"18px",lineHeight:"1.5",color:"#94a3b8",marginBottom:"32px",fontWeight:"400"},children:i.subtitle}),L.jsx("hr",{style:{border:"none",borderTop:"1px solid rgba(255, 255, 255, 0.1)",marginBottom:"36px"}}),L.jsx("article",{style:{fontSize:"16px",color:"#cbd5e1"},children:_(i.content)}),i.tags&&L.jsx("div",{style:{marginTop:"48px",paddingTop:"24px",borderTop:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",flexWrap:"wrap",gap:"8px"},children:(Array.isArray(i.tags)?i.tags:String(i.tags).split(",")).map((g,M)=>L.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"11px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",padding:"4px 10px",borderRadius:"999px",color:"#94a3b8"},children:[L.jsx(Cb,{size:11}),String(g).trim()]},M))}),L.jsxs("div",{style:{marginTop:"60px",textAlign:"center",padding:"32px",background:"rgba(13, 19, 33, 0.6)",border:"1px solid rgba(0, 240, 255, 0.2)",borderRadius:"16px"},children:[L.jsx("h3",{style:{fontSize:"18px",fontWeight:"700",color:"#ffffff",marginBottom:"8px"},children:"Ready to explore other constellation nodes?"}),L.jsx("p",{style:{fontSize:"13px",color:"#64748b",marginBottom:"20px"},children:"Return to the 3D neural nexus to explore games, tools, and social links."}),L.jsx("button",{onClick:()=>e("/"),style:{background:"linear-gradient(90deg, #00f0ff, #38bdf8)",color:"#080c16",fontWeight:"700",fontSize:"14px",padding:"10px 24px",borderRadius:"999px",border:"none",cursor:"pointer",boxShadow:"0 0 20px rgba(0, 240, 255, 0.4)"},children:"Return to 3D Neural Nexus ➔"})]})]})]}):L.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#080c16",color:"#e2e8f0",textAlign:"center",padding:"24px"},children:[L.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"8px"},children:"Story Node Not Found"}),L.jsx("p",{style:{color:"#64748b",marginBottom:"24px"},children:"The requested memory node is either unindexed or has been relocated."}),L.jsx("button",{onClick:()=>e("/"),style:{background:"#00f0ff",color:"#080c16",padding:"10px 20px",borderRadius:"999px",fontWeight:"600",border:"none",cursor:"pointer"},children:"Return to Neural Sphere"})]})}function p3(){return L.jsx(XM,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:L.jsxs(GM,{children:[L.jsx(Vs,{path:"/",element:L.jsx(Ub,{})}),L.jsx(Vs,{path:"/sphere",element:L.jsx(h3,{})}),L.jsx(Vs,{path:"/story/:slug",element:L.jsx(O_,{})}),L.jsx(Vs,{path:"/post/:slug",element:L.jsx(O_,{})}),L.jsx(Vs,{path:"*",element:L.jsx(BM,{to:"/",replace:!0})})]})})}jS.createRoot(document.getElementById("root")).render(L.jsx(Re.StrictMode,{children:L.jsx(p3,{})}));
