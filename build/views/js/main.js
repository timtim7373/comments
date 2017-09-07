
/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x){'use strict';function L(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.4/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function me(a){if(C(a))u(a.objectMaxDepth)&&(Ic.objectMaxDepth=Sb(a.objectMaxDepth)?
a.objectMaxDepth:NaN);else return Ic}function Sb(a){return ba(a)&&0<a}function qa(a){if(null==a||Wa(a))return!1;if(H(a)||F(a)||B&&a instanceof B)return!0;var b="length"in Object(a)&&a.length;return ba(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,e;if(a)if(D(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||qa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,
a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Jc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function Kc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Lc(a){return function(b,d){a(d,b)}}function ne(){return++qb}function Tb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];
if(C(g)||D(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&C(n)?ga(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Ub(n)?a[m]=n.clone():(C(a[m])||(a[m]=H(n)?[]:{}),Tb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Tb(a,va.call(arguments,1),!1)}function oe(a){return Tb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Vb(a,b){return S(Object.create(a),b)}function z(){}function Ya(a){return a}
function la(a){return function(){return a}}function Wb(a){return D(a.toString)&&a.toString!==ma}function w(a){return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function C(a){return null!==a&&"object"===typeof a}function Jc(a){return null!==a&&"object"===typeof a&&!Mc(a)}function F(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ga(a){return"[object Date]"===ma.call(a)}function D(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===
ma.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ha(a){return"boolean"===typeof a}function pe(a){return a&&ba(a.length)&&qe.test(ma.call(a))}function Ub(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function re(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function ra(a,b,d){function c(a,
b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Jc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&(b[f]=e(a[f],c));else for(f in a)ua.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!C(a))return a;var d=g.indexOf(a);if(-1!==d)return h[d];if(Wa(a)||Za(a))throw Fa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Mc(a)),
d=!0);g.push(a);h.push(e);return d?c(a,e,b):e}function f(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));
return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(D(a.cloneNode))return a.cloneNode(!0)}var g=[],h=[];d=Sb(d)?d:NaN;if(b){if(pe(b)||"[object ArrayBuffer]"===ma.call(b))throw Fa("cpta");if(a===b)throw Fa("cpi");H(b)?b.length=
0:q(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);h.push(b);return c(a,b,d)}return e(a,d)}function Xb(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],b[c]))return!1;return!0}}else{if(ga(a))return ga(b)?Xb(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;
if(Za(a)||Za(b)||Wa(a)||Wa(b)||H(b)||ga(b)||Xa(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!D(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!D(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(va.call(b,d))}function bb(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!D(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?
b.apply(a,arguments):b.call(a)}}function Nc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&x.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return ba(b)||(b=b?2:null),JSON.stringify(a,Nc,b)}function Oc(a){return F(a)?JSON.parse(a):a}function Pc(a,b){a=a.replace(se,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return da(d)?b:d}function Yb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Pc(b,c);d*=b-c;a=new Date(a.getTime());
a.setMinutes(a.getMinutes()+d);return a}function xa(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Ia?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function Qc(a){try{return decodeURIComponent(a)}catch(b){}}function Rc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Qc(e),u(e)&&(f=
u(f)?Qc(f):!0,ua.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Zb(a){var b=[];q(a,function(a,c){H(a)?q(a,function(a){b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))}):b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))});return b.length?b.join("&"):""}function db(a){return $(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function $(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,
b?"%20":"+")}function te(a,b){var d,c,e=Ja.length;for(c=0;c<e;++c)if(d=Ja[c]+b,F(d=a.getAttribute(d)))return d;return null}function ue(a,b){var d,c,e={};q(Ja,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ja,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(ve?(e.strictDi=null!==te(d,"strict-di"),b(d,c?[c]:[],e)):x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}
function Sc(a,b,d){C(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===x.document?"document":xa(a);throw Fa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;x&&e.test(x.name)&&(d.debugInfoEnabled=!0,x.name=x.name.replace(e,""));if(x&&!f.test(x.name))return c();x.name=x.name.replace(f,"");ea.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};D(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function we(){x.name="NG_ENABLE_DEBUG_INFO!"+x.name;x.location.reload()}function xe(a){a=ea.element(a).injector();if(!a)throw Fa("test");return a.get("$$testability")}
function Tc(a,b){b=b||"_";return a.replace(ye,function(a,c){return(c?b:"")+a.toLowerCase()})}function ze(){var a;if(!Uc){var b=rb();(na=w(b)?x.jQuery:b?x[b]:void 0)&&na.fn.on?(B=na,S(na.fn,{scope:Na.scope,isolateScope:Na.isolateScope,controller:Na.controller,injector:Na.injector,inheritedData:Na.inheritedData}),a=na.cleanData,na.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=na._data(f,"events"))&&c.$destroy&&na(f).triggerHandler("$destroy");a(b)}):B=W;ea.element=B;Uc=!0}}function fb(a,
b,d){if(!a)throw Fa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);fb(D(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ka(a,b){if("hasOwnProperty"===a)throw Fa("badname",b);}function Vc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&D(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=B(va.call(a,0,e))),c.push(b);return c||a}function V(){return Object.create(null)}function $b(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Wb(a)||H(a)||ga(a)?cb(a):a.toString()}return a}function Ae(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=L("$injector"),c=L("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||L;return b(a,"module",function(){var a={};return function(f,g,h){var k={};if("hasOwnProperty"===f)throw c("badname","module");
g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return v}}function b(a,c,d){d||(d=e);return function(b,e){e&&D(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return v}}if(!g)throw d("nomod",f);var e=[],p=[],r=[],J=a("$injector","invoke","push",p),v={_invokeQueue:e,_configBlocks:p,_runBlocks:r,info:function(a){if(u(a)){if(!C(a))throw c("aobj","value");k=a;return this}return k},requires:g,name:f,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",p),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:J,run:function(a){r.push(a);return this}};h&&J(h);return v})}})}function pa(a,b){if(H(a)){b=
b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(C(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Be(a,b){var d=[];Sb(b)&&(a=ra(a,null,b));return JSON.stringify(a,function(a,b){b=Nc(a,b);if(C(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ce(a){S(a,{errorHandlingConfig:me,bootstrap:Sc,copy:ra,extend:S,merge:oe,equals:sa,element:B,forEach:q,injector:eb,noop:z,bind:bb,toJson:cb,fromJson:Oc,identity:Ya,isUndefined:w,isDefined:u,isString:F,
isFunction:D,isObject:C,isNumber:ba,isElement:Ub,isArray:H,version:De,isDate:ga,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:xe,reloadWithDebugInfo:we,$$minErr:L,$$csp:Ga,$$encodeUriSegment:db,$$encodeUriQuery:$,$$stringify:$b});ac=Ae(x);ac("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ee});a.provider("$compile",Wc).directive({a:Fe,input:Xc,textarea:Xc,form:Ge,script:He,select:Ie,option:Je,ngBind:Ke,ngBindHtml:Le,ngBindTemplate:Me,ngClass:Ne,ngClassEven:Oe,
ngClassOdd:Pe,ngCloak:Qe,ngController:Re,ngForm:Se,ngHide:Te,ngIf:Ue,ngInclude:Ve,ngInit:We,ngNonBindable:Xe,ngPluralize:Ye,ngRepeat:Ze,ngShow:$e,ngStyle:af,ngSwitch:bf,ngSwitchWhen:cf,ngSwitchDefault:df,ngOptions:ef,ngTransclude:ff,ngModel:gf,ngList:hf,ngChange:jf,pattern:Yc,ngPattern:Yc,required:Zc,ngRequired:Zc,minlength:$c,ngMinlength:$c,maxlength:ad,ngMaxlength:ad,ngValue:kf,ngModelOptions:lf}).directive({ngInclude:mf}).directive(vb).directive(bd);a.provider({$anchorScroll:nf,$animate:of,$animateCss:pf,
$$animateJs:qf,$$animateQueue:rf,$$AnimateRunner:sf,$$animateAsyncRun:tf,$browser:uf,$cacheFactory:vf,$controller:wf,$document:xf,$$isDocumentHidden:yf,$exceptionHandler:zf,$filter:cd,$$forceReflow:Af,$interpolate:Bf,$interval:Cf,$http:Df,$httpParamSerializer:Ef,$httpParamSerializerJQLike:Ff,$httpBackend:Gf,$xhrFactory:Hf,$jsonpCallbacks:If,$location:Jf,$log:Kf,$parse:Lf,$rootScope:Mf,$q:Nf,$$q:Of,$sce:Pf,$sceDelegate:Qf,$sniffer:Rf,$templateCache:Sf,$templateRequest:Tf,$$testability:Uf,$timeout:Vf,
$window:Wf,$$rAF:Xf,$$jqLite:Yf,$$Map:Zf,$$cookieReader:$f})}]).info({angularVersion:"1.6.4"})}function gb(a,b){return b.toUpperCase()}function wb(a){return a.replace(ag,gb)}function bc(a){a=a.nodeType;return 1===a||!a||9===a}function dd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(cc.test(a)){d=e.appendChild(b.createElement("div"));c=(bg.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(cg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);
d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function W(a){if(a instanceof W)return a;var b;F(a)&&(a=T(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw dc("nosel");return new W(a)}if(b){b=x.document;var d;a=(d=dg.exec(a))?[b.createElement(d[1])]:(d=dd(a,b))?d.childNodes:[];ec(this,a)}else D(a)?ed(a):ec(this,a)}function fc(a){return a.cloneNode(!0)}function xb(a,b){!b&&bc(a)&&B.cleanData([a]);
a.querySelectorAll&&B.cleanData(a.querySelectorAll("*"))}function fd(a,b,d,c){if(u(c))throw dc("offargs");var e=(c=yb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&$a(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};q(b.split(" "),function(a){g(a);zb[a]&&g(zb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}function gc(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),
fd(a)),delete hb[d],a.ng339=void 0))}function yb(a,b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++eg,d=hb[d]={events:{},data:{},handle:void 0});return d}function hc(a,b,d){if(bc(a)){var c,e=u(d),f=!e&&b&&!C(b),g=!b;a=(a=yb(a,!f))&&a.data;if(e)a[wb(b)]=d;else{if(g)return a;if(f)return a&&a[wb(b)];for(c in b)a[wb(c)]=b[c]}}}function Ab(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Bb(a,b){b&&a.setAttribute&&q(b.split(" "),
function(b){a.setAttribute("class",T((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=T(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",T(d))}}function ec(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=
b}}function gd(a,b){return Db(a,"$"+(b||"ngController")+"Controller")}function Db(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function hd(a){for(xb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Eb(a,b){b||xb(a);var d=a.parentNode;d&&d.removeChild(a)}function fg(a,b){b=b||x;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function ed(a){function b(){x.document.removeEventListener("DOMContentLoaded",
b);x.removeEventListener("load",b);a()}"complete"===x.document.readyState?x.setTimeout(a):(x.document.addEventListener("DOMContentLoaded",b),x.addEventListener("load",b))}function id(a,b){var d=Fb[b.toLowerCase()];return d&&jd[wa(a)]&&d}function gg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||hg;1<g&&(f=pa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function hg(a,b,d){d.call(a,b)}function ig(a,b,d){var c=b.relatedTarget;c&&(c===a||jg.call(a,c))||d.call(a,b)}function Yf(){this.$get=function(){return S(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Cb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ne)():d+":"+a}function kd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function ld(a){a=Function.prototype.toString.call(a).replace(kg,"");return a.match(lg)||a.match(mg)}function ng(a){return(a=ld(a))?"function("+
(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(C(b))q(b,Lc(a));else return a(b,c)}}function c(a,b){Ka(a,"service");if(D(b)||H(b))b=p.instantiate(b);if(!b.$get)throw ya("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(w(c))throw ya("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){fb(w(a)||H(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{F(a)?(c=ac(a),v.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):D(a)?b.push(p.invoke(a)):H(a)?b.push(p.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),ya("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw ya("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var k=0,h=a.length;k<h;k++){var l=a[k];if("string"!==typeof l)throw ya("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(za||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ha(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Gb,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,
b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,la(b),!1)}),constant:d(function(a,b){Ka(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw ya("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return v.invoke(c.$get,c,void 0,a)}),v=J;n.$injectorProvider=
{$get:la(J)};v.modules=p.modules=V();var t=g(a),v=J.get("$injector");v.strictDi=b;q(t,function(a){a&&v.invoke(a)});return v}function nf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;D(c)?c=c():Ub(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
ba(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:ba(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||fg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function og(a){F(a)&&
(a=a.split(" "));var b=V();q(a,function(a){a.length&&(b[a]=!0)});return b}function ia(a){return C(a)?a:{}}function pg(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(J--,0===J)for(;v.length;)try{v.pop()()}catch(b){d.error(b)}}}function f(){Oa=null;h()}function g(){t=I();t=w(t)?null:t;sa(t,G)&&(t=G);M=G=t}function h(){var a=M;g();if(N!==k.url()||a!==t)N=k.url(),M=t,q(K,function(a){a(k.url(),t)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=
!1;var J=0,v=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():v.push(a)};var t,M,N=l.href,A=b.find("base"),Oa=null,I=c.history?function(){try{return m.state}catch(a){}}:z;g();k.url=function(b,d,e){w(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=M===e;if(N===b&&(!c.history||f))return k;var h=N&&Aa(N)===Aa(b);N=b;M=e;!c.history||h&&f?(h||(Oa=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(Oa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());Oa&&(Oa=b);return k}return Oa||l.href.replace(/%27/g,"'")};k.state=function(){return t};var K=[],E=!1,G=null;k.onUrlChange=function(b){if(!E){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);E=!0}K.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(z),!0):!1}}function uf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new pg(a,c,b,d)}]}function vf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(p?p===a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw L("$cacheFactory")("iid",a);var g=0,h=
S({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Sf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Wc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=V();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");
e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&C(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=re("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=V();this.directive=function N(b,d){fb(b,"name");Ka(b,"directive");F(b)?(c(b),fb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);D(h)?h={compile:la(h)}:!h.compile&&h.link&&(h.compile=la(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!F(l)||!/[EACM]/.test(l)))throw fa("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):q(b,Lc(N));return this};this.component=function(a,b){function c(a){function e(b){return D(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:qg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,D(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return u(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return u(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var v=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(v=a,this):v};var t=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,e,n,E,G,y,O,X){function P(){try{if(!--ya)throw ia=void 0,fa("infchng",J);G.$apply(function(){for(var a=[],b=0,c=ia.length;b<c;++b)try{ia[b]()}catch(d){a.push(d)}ia=void 0;if(a.length)throw a;})}finally{ya++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){ta.innerHTML="<span "+b+">";b=ta.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function La(a,
b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof B||(a=B(a));var f=Ma(a,b,a,c,d,e);ca.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw fa("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?B(ha(g,B("<div>").append(a).html())):
c?Na.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ca.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(B(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=H(a)||a instanceof B,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===za&&L(a,r,k);m=jc(a[r],[],l,0===r?d:void 0,e);(f=m.length?W(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ca.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Ma(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function L(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ia)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ia)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=V(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function jc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=wa(a);Y(b,
Ba(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var G=!1,E=!1;k=p[K];l=k.name;m=k.value;k=Ba(l);(n=Ja.test(k))&&(l=l.replace(md,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(G=l,E=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ba(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,id(a,k)&&(c[k]=!0);pa(a,b,m,k,n);Y(b,k,"A",d,e,G,E)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;C(f)&&(f=f.animVal);if(F(f)&&""!==f)for(;a=h.exec(f);)k=Ba(a[2]),Y(b,k,"C",d,e)&&(c[k]=T(a[3])),f=f.substr(a.index+a[0].length);break;case Ia:la(b,a.nodeValue);break;case 8:if(!Fa)break;jb(a,b,c,d,e)}b.sort(ea);return b}function jb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ba(f[1]);Y(b,h,"M",d,e)&&(c[h]=T(f[2]))}}catch(k){}}function nd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function od(a,b,c){return function(d,e,f,g,h){e=nd(e[0],b,c);return a(d,e,f,g,h)}}function kc(a,b,c,d,e,f){var g;return a?ca(b,c,d,e,f):function(){g||(g=ca(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function W(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=od(a,c,d));a.require=y.require;a.directiveName=P;if(E===y||y.$$isolateScope)a=qa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=od(b,c,d));b.require=
y.require;b.directiveName=P;if(E===y||y.$$isolateScope)b=qa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);X&&(e=O);c||(c=X?P.parent():P);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(w(f))throw fa("noslot",d,xa(P));}else return l(a,b,e,c,R)}var p,y,t,v,J,O,N,P;b===f?(g=d,P=d.$$element):(P=B(f),g=new s(P,d));J=e;E?v=e.$new(!0):K&&(J=e.$parent);l&&(N=m,N.$$boundTransclude=l,N.isSlotFilled=function(a){return!!l.$$slots[a]});G&&(O=
ba(P,g,N,G,v,e,E));E&&(ca.$$addScopeInfo(P,v,!0,!(I&&(I===E||I===E.$$originalDirective))),ca.$$addScopeClass(P,!0),v.$$isolateBindings=E.$$isolateBindings,y=na(e,g,v,v.$$isolateBindings,E),y.removeWatches&&v.$on("$destroy",y.removeWatches));for(p in O){y=G[p];t=O[p];var Hb=y.$$bindings.bindToController;if(r){t.bindingInfo=Hb?na(J,g,t.instance,Hb,y):{};var A=t();A!==t.instance&&(t.instance=A,P.data("$"+y.name+"Controller",A),t.bindingInfo.removeWatches&&t.bindingInfo.removeWatches(),t.bindingInfo=
na(J,g,t.instance,Hb,y))}else t.instance=t(),P.data("$"+y.name+"Controller",t.instance),t.bindingInfo=na(J,g,t.instance,Hb,y)}q(G,function(a,b){var c=a.require;a.bindToController&&!H(c)&&C(c)&&S(O[b].instance,U(b,c,P,O))});q(O,function(a){var b=a.instance;if(D(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(D(b.$onInit))try{b.$onInit()}catch(e){c(e)}D(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());D(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(y=h.length;p<y;p++)t=h[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);var R=e;E&&(E.template||null===E.templateUrl)&&(R=v);a&&a(R,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)t=k[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);q(O,function(a){a=a.instance;D(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,G=l.controllerDirectives,E=l.newIsolateScopeDirective,I=l.templateDirective,t=l.nonTlbTranscludeDirective,
J=!1,O=!1,X=l.hasElementTranscludeDirective,v=d.$$element=B(b),y,P,N,A=e,R,u=!1,La=!1,x,z=0,F=a.length;z<F;z++){y=a[z];var Ma=y.$$start,L=y.$$end;Ma&&(v=nd(b,Ma,L));N=void 0;if(p>y.priority)break;if(x=y.scope)y.templateUrl||(C(x)?($("new/isolated scope",E||K,y,v),E=y):$("new/isolated scope",E,y,v)),K=K||y;P=y.name;if(!u&&(y.replace&&(y.templateUrl||y.template)||y.transclude&&!y.$$tlb)){for(x=z+1;u=a[x++];)if(u.transclude&&!u.$$tlb||u.replace&&(u.templateUrl||u.template)){La=!0;break}u=!0}!y.templateUrl&&
y.controller&&(G=G||V(),$("'"+P+"' controller",G[P],y,v),G[P]=y);if(x=y.transclude)if(J=!0,y.$$tlb||($("transclusion",t,y,v),t=y),"element"===x)X=!0,p=y.priority,N=v,v=d.$$element=B(ca.$$createComment(P,d[P])),b=v[0],ka(f,va.call(N,0),b),N[0].$$parentNode=N[0].parentNode,A=kc(La,N,e,p,g&&g.name,{nonTlbTranscludeDirective:t});else{var ja=V();if(C(x)){N=[];var Q=V(),jb=V();q(x,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;ja[b]=null;jb[b]=c});q(v.contents(),function(a){var b=Q[Ba(wa(a))];
b?(jb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):N.push(a)});q(jb,function(a,b){if(!a)throw fa("reqslot",b);});for(var ic in ja)ja[ic]&&(ja[ic]=kc(La,ja[ic],e))}else N=B(fc(b)).contents();v.empty();A=kc(La,N,e,void 0,void 0,{needsNewScope:y.$$isolateScope||y.$$newScope});A.$$slots=ja}if(y.template)if(O=!0,$("template",I,y,v),I=y,x=D(y.template)?y.template(v,d):y.template,x=Ea(x),y.replace){g=y;N=cc.test(x)?pd(ha(y.templateNamespace,T(x))):[];b=N[0];if(1!==N.length||1!==b.nodeType)throw fa("tplrt",P,"");
ka(f,v,b);F={$attr:{}};x=jc(b,[],F);var Y=a.splice(z+1,a.length-(z+1));(E||K)&&aa(x,E,K);a=a.concat(x).concat(Y);da(d,F);F=a.length}else v.html(x);if(y.templateUrl)O=!0,$("template",I,y,v),I=y,y.replace&&(g=y),n=ga(a.splice(z,a.length-z),v,d,f,J&&A,h,k,{controllerDirectives:G,newScopeDirective:K!==y&&K,newIsolateScopeDirective:E,templateDirective:I,nonTlbTranscludeDirective:t}),F=a.length;else if(y.compile)try{R=y.compile(v,d,A);var Z=y.$$originalDirective||y;D(R)?m(null,bb(Z,R),Ma,L):R&&m(bb(Z,R.pre),
bb(Z,R.post),Ma,L)}catch(ea){c(ea,xa(v))}y.terminal&&(n.terminal=!0,p=Math.max(p,y.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=O;n.transclude=A;l.hasElementTranscludeDirective=X;return n}function U(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(H(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=U(a,b[g],c,d);else C(b)&&(e={},q(b,function(b,f){e[f]=U(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=V(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=E(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Vb(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,e,g,h,k,l){if(c===
h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(w(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Vb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,t={isolateScope:null,bindToController:null};C(K.scope)&&(!0===K.bindToController?(t.bindToController=d(K.scope,r,!0),t.isolateScope={}):t.isolateScope=d(K.scope,r,!1));C(K.bindToController)&&(t.bindToController=d(K.bindToController,r,!0));if(t.bindToController&&!K.controller)throw fa("noctrl",
r);m=m.$$bindings=t;C(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function da(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,f,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),t=Vb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),y=D(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,E=r.templateNamespace;b.empty();e(y).then(function(c){var e,G;c=Ea(c);if(r.replace){c=cc.test(c)?pd(ha(E,T(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw fa("tplrt",r.name,y);c={$attr:{}};ka(f,b,e);var I=jc(e,[],c);C(r.scope)&&aa(I,!0);a=I.concat(a);da(d,c)}else e=K,b.html(c);a.unshift(t);n=W(a,e,d,g,b,
r,h,k,l);q(f,function(a,c){a===e&&(f[c]=b[0])});for(p=Ma(b[0].childNodes,g);m.length;){c=m.shift();G=m.shift();var v=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(G!==K){var O=G.className;l.hasElementTranscludeDirective&&r.replace||(I=fc(e));ka(v,B(G),I);La(B(I),O)}G=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,f,G)}}m=null}).catch(function(a){a instanceof Error&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ea(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function la(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=x.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return y.HTML;var c=wa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return y.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return y.RESOURCE_URL}function pa(a,
c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===wa(a))throw fa("selmulti",xa(a));if(m.test(e))throw fa("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=V());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ka(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=x.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function qa(a,b){return S(function(){return a.apply(null,arguments)},
a,b)}function ra(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,xa(d))}}function na(a,c,d,e,f){function g(b,c,e){D(d.$onChanges)&&!Xb(c,e)&&(ia||(a.$$postDigest(P),ia=[]),m||(m={},ia.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,t,y,G;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(F(a)||Ha(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;r=c[m];
F(r)?d[h]=b(r)(a):Ha(r)&&(d[h]=r);l[h]=new Ib(lc,d[h]);k.push(p);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);G=t.literal?sa:Xb;y=t.assign||function(){r=d[h]=t(a);throw fa("nonassign",c[m],m,f.name);};r=d[h]=t(a);p=function(b){G(b,d[h])||(G(b,r)?y(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,t.literal);k.push(p);break;case "<":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);
var E=t.literal,I=d[h]=t(a);l[h]=new Ib(lc,d[h]);p=a.$watch(t,function(a,b){if(b===a){if(b===I||E&&sa(b,I))return;b=I}g(h,a,b);d[h]=a},E);k.push(p);break;case "&":t=c.hasOwnProperty(m)?n(c[m]):z;if(t===z&&p)break;d[h]=function(b){return t(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ca=/^\w/,ta=x.document.createElement("div"),Fa=v,Ga=t,ya=J,ia;s.prototype={$normalize:Ba,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=qd(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=qd(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=id(this.$$element[0],a),g=rd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Tc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=
b=X(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+X(T(g[m]),!0),f=f+(" "+T(g[m+1]));g=T(g[2*l]).split(/\s/);f+=X(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):Ca.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);G.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Da=b.endSymbol(),Ea="{{"===Aa&&"}}"===Da?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Da)},Ja=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ca.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:z;ca.$$addBindingClass=
p?function(a){La(a,"ng-binding")}:z;ca.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:z;ca.$$addScopeClass=p?function(a,b){La(a,b?"ng-isolate-scope":"ng-scope")}:z;ca.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return x.document.createComment(c)};return ca}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ba(a){return a.replace(md,"").replace(rg,gb)}function qd(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g===e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function pd(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ia&&""===d.nodeValue.trim())&&sg.call(a,b,1)}return a}function qg(a,b){if(b&&F(b))return b;if(F(a)){var d=sd.exec(a);if(d)return d[3]}}function wf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ka(b,"controller");C(b)?
S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!C(a.$scope))throw L("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(sd);if(!k)throw td("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Vc(g.$scope,m,!0)||(b?Vc(c,m,!0):void 0);if(!f)throw td("ctrlreg",m);sb(f,m,!0)}if(h)return h=(H(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,
l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(C(a)||D(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function xf(){this.$get=["$window",function(a){return B(a.document)}]}function yf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function zf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function mc(a){return C(a)?ga(a)?a.toISOString():cb(a):a}function Ef(){this.$get=function(){return function(a){if(!a)return"";var b=[];Kc(a,function(a,c){null===a||w(a)||(H(a)?q(a,function(a){b.push($(c)+"="+$(mc(a)))}):b.push($(c)+"="+$(mc(a))))});return b.join("&")}}}function Ff(){this.$get=function(){return function(a){function b(a,e,f){null===a||w(a)||(H(a)?q(a,function(a,c){b(a,e+"["+(C(a)?c:"")+"]")}):C(a)&&!ga(a)?Kc(a,function(a,
c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push($(e)+"="+$(mc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function nc(a,b){if(F(a)){var d=a.replace(tg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ud))||(c=(c=d.match(ug))&&vg[c[0]].test(d));if(c)try{a=Oc(d)}catch(e){throw oc("baddata",a,e);}}}return a}function vd(a){var b=V(),d;F(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):C(a)&&q(a,function(a,
d){var f=Q(d),g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function wd(a){var b;return function(d){b||(b=vd(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function xd(a,b,d,c){if(D(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function Df(){var a=this.defaults={transformResponse:[nc],transformRequest:[function(a){return C(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:pa(pc),put:pa(pc),patch:pa(pc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}
function e(a,b){var c,d={};q(a,function(a,e){D(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=xd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!C(b))throw L("$http")("badreq",b);if(!F(m.valueOf(b.url)))throw L("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=
function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,pa(b))}(b);g.method=ub(g.method);g.paramSerializer=F(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(t,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=xd(b.data,wd(c),void 0,b.transformRequest);w(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(z)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}O&&
(200<=a&&300>a?O.put(R,[a,c,vd(d),e]):O.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?G.resolve:G.reject)({data:a,status:b,headers:wd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,pa(a.headers()),a.statusText)}function t(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var G=k.defer(),y=G.promise,O,X,P=c.headers,s="jsonp"===Q(c.method),R=c.url;s?R=m.getTrustedResourceUrl(R):F(R)||(R=m.valueOf(R));R=r(R,
c.paramSerializer(c.params));s&&(R=J(R,c.jsonpCallbackParam));n.pendingRequests.push(c);y.then(t,t);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=C(c.cache)?c.cache:C(a.cache)?a.cache:v);O&&(X=O.get(R),u(X)?X&&D(X.then)?X.then(K,K):H(X)?p(X[1],X[0],pa(X[2]),X[3]):p(X,200,{},"OK"):O.put(R,y));w(X)&&((X=yd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(P[c.xsrfHeaderName||a.xsrfHeaderName]=X),e(c.method,R,d,l,P,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return y}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw oc("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw oc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var v=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var t=[];q(d,function(a){t.unshift(F(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Hf(){this.$get=function(){return function(){return new x.XMLHttpRequest}}}function Gf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return wg(a,c,a.defer,b,d[0])}]}function wg(a,b,d,c,e){function f(a,
b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,r,J,v){function t(){N&&N();A&&
A.abort()}h=h||a.url();if("jsonp"===Q(e))var M=c.createCallback(h),N=f(h,M,function(a,b){var e=200===a&&c.getResponse(M);u(I)&&d.cancel(I);N=A=null;l(a,e,"",b);c.removeCallback(M)});else{var A=b(e,h);A.open(e,h,!0);q(m,function(a,b){u(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"===Ca(h).protocol?404:0);var e=A.getAllResponseHeaders();u(I)&&d.cancel(I);N=A=null;l(c,b,e,a)};e=
function(){u(I)&&d.cancel(I);N=A=null;l(-1,null,null,"")};A.onerror=e;A.onabort=e;A.ontimeout=e;q(J,function(a,b){A.addEventListener(b,a)});q(v,function(a,b){A.upload.addEventListener(b,a)});p&&(A.withCredentials=!0);if(r)try{A.responseType=r}catch(s){if("json"!==r)throw s;}A.send(w(k)?null:k)}if(0<n)var I=d(t,n);else n&&D(n.then)&&n.then(t)}}function Bf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(f,k,n,p){function M(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);return p&&!u(a)?a:$b(a)}catch(d){c(Da.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var q;k||(k=g(f),q=la(k),q.exp=f,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var A,s,I=0,K=[],E=[];q=f.length;for(var G=[],y=[];I<q;)if(-1!==(A=f.indexOf(a,
I))&&-1!==(s=f.indexOf(b,A+l)))I!==A&&G.push(g(f.substring(I,A))),I=f.substring(A+l,s),K.push(I),E.push(d(I,M)),I=s+m,y.push(G.length),G.push("");else{I!==q&&G.push(g(f.substring(I)));break}n&&1<G.length&&Da.throwNoconcat(f);if(!k||K.length){var O=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&w(a[b]))return;G[y[b]]=a[b]}return G.join("")};return S(function(a){var b=0,d=K.length,e=Array(d);try{for(;b<d;b++)e[b]=E[b](a);return O(e)}catch(g){c(Da.interr(f,g))}},{exp:f,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(E,function(d,e){var f=O(d);D(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function Cf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,r):f(t)}var p=4<arguments.length,r=p?va.call(arguments,4):[],J=b.setInterval,v=b.clearInterval,
t=0,M=u(m)&&!m,q=(M?c:d).defer(),A=q.promise;l=u(l)?l:0;A.$$intervalId=J(function(){M?e.defer(n):a.$evalAsync(n);q.notify(t++);0<l&&t>=l&&(q.resolve(t),v(A.$$intervalId),delete g[A.$$intervalId]);M||a.$apply()},k);g[A.$$intervalId]=q;return A}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(z),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function qc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
db(a[b]);return a.join("/")}function zd(a,b){var d=Ca(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||xg[d.protocol]||null}function Ad(a,b){if(yg.test(a))throw kb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Ca(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Rc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function rc(a,b){return a.slice(0,b.length)===
b}function ka(a,b){if(rc(b,a))return b.substr(a.length)}function Aa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function sc(a,b,d){this.$$html5=!0;d=d||"";zd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!F(d))throw kb("ipthprfx",a,b);Ad(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=ka(a,c))?(g=f,g=d&&u(f=ka(d,f))?b+(ka("/",f)||f):a+g):u(f=ka(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function tc(a,b,d){zd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=ka(d,e),w(f)&&(f=e));Ad(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;rc(f,
e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return Aa(a)===Aa(b)?(this.$$parse(b),!0):!1}}function Bd(a,b,d){this.$$html5=!0;tc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;a===Aa(c)?f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Jb(a){return function(){return this[a]}}function Cd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Jf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};
this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(Ha(a))return b.enabled=a,this;if(C(a)){Ha(a.enabled)&&(b.enabled=a.enabled);Ha(a.requireBase)&&(b.requireBase=a.requireBase);if(Ha(a.rewriteLinks)||F(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=
f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?sc:Bd}else p=Aa(n),m=tc;var r=p.substr(0,Aa(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!==a.which&&2!==a.button){for(var h=B(a.target);"a"!==wa(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!F(e)||!w(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");C(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Ca(e.animVal).href);J.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(n)&&c.url(l.absUrl(),!0);var v=!0;
c.onUrlChange(function(a,b){rc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(v=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(v||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(v||m)v=
!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))})}l.$$replace=!1});return l}]}function Kf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(f){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}var f=za||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function zg(a){return a+""}function Ag(a,
b){return"undefined"!==typeof a?a:b}function Dd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function U(a,b){var d,c,e;switch(a.type){case s.Program:d=!0;q(a.body,function(a){U(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:U(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:U(a.test,b);U(a.alternate,b);U(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:U(a.object,b);a.computed&&U(a.property,b);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=e=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=e?c:[a];break;case s.AssignmentExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=
d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){U(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch);a.computed&&(U(a.key,b),a.key.constant||c.push.apply(c,a.key.toWatch))});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Ed(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Fd(a){return a.type===
s.Identifier||a.type===s.MemberExpression}function Gd(a){if(1===a.body.length&&Fd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Hd(a){this.$filter=a}function Id(a){this.$filter=a}function uc(a,b,d){this.ast=new s(a,d);this.astCompiler=d.csp?new Id(b):new Hd(b)}function vc(a){return D(a.valueOf)?a.valueOf():Bg.call(a)}function Lf(){var a=V(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=
function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=vc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,d.literal)||(h=d(a,void 0,void 0,[b]),k=b&&vc(b));return h},b,c,e)}for(var l=[],m=[],n=0,E=g.length;n<E;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],d.literal)))m[c]=k,l[c]=k&&vc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(a){return d(a)}function h(a,c,d){n=a;D(b)&&b(a,c,d);l(a)&&d.$$postDigest(function(){l(n)&&m()})}var l=d.literal?k:u,m,n;return m=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){function c(d,
e,g,h){g=f&&h?h[0]:a(d,e,g,h);return b(g,d,e)}function d(c,e,g,k){g=f&&k?k[0]:a(c,e,g,k);c=b(g,c,e);return h(g)?c:g}if(!b)return a;var e=a.$$watchDelegate,f=!1,h=a.literal?k:u,l=a.oneTime?d:c;l.literal=a.literal;l.oneTime=a.oneTime;f=!a.inputs;e&&e!==g?(l.$$watchDelegate=e,l.inputs=a.inputs):b.$stateful||(l.$$watchDelegate=g,l.inputs=a.inputs?a.inputs:[a]);return l}var n={csp:Ga().noUnsafeEval,literals:ra(b),isIdentifierStart:D(d)&&d,isIdentifierContinue:D(c)&&c};return function(b,c){var d,f,k;switch(typeof b){case "string":return k=
b=b.trim(),d=a[k],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new wc(n),d=(new uc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?(d.oneTime=!0,d.$$watchDelegate=h):d.inputs&&(d.$$watchDelegate=g),a[k]=d),m(d,c);case "function":return m(b,c);default:return m(z,c)}}}]}function Nf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Jd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Of(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Jd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Jd(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!s&&A.length;){var a=A.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):w(c)?"undefined":"string"!==typeof c?Be(c,void 0):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===s&&0===A.length&&a(g),A.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++s,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{D(c)?k(e,c(b.value)):1===b.status?k(e,b.value):
m(e,b.value)}catch(n){m(e,n)}}}finally{--s,d&&0===s&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,M("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(C(b)||D(b))f=b.then;D(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,D(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new f;m(b,a);return b}function J(a,b,c){var d=null;try{D(c)&&(d=c())}catch(e){return r(e)}return d&&D(d.then)?d.then(function(){return b(a)},r):b(a)}function v(a,b,c,d){var e=new f;k(e,a);return e.then(b,c,d)}function t(a){if(!D(a))throw M("norslvr",a);var b=new f;a(function(a){k(b,a)},function(a){m(b,a)});return b}var M=
L("$q",TypeError),s=0,A=[];S(f.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,u,a)},function(b){return J(b,r,a)},b)}});var u=v;t.prototype=f.prototype;t.defer=c;t.reject=r;t.when=v;t.resolve=u;t.all=function(a){var b=new f,c=0,d=H(a)?
[]:{};q(a,function(a,e){c++;v(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};t.race=function(a){var b=c();q(a,function(a){v(a).then(b.resolve,b.reject)});return b.promise};return t}function Xf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Mf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=L("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=
!0}function l(a){9===za&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(M.$$phase)throw d("inprog",
M.$$phase);M.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function v(){for(;u.length;)try{u.shift()()}catch(a){f(a)}e=null}function t(){null===e&&(e=h.defer(function(){M.$apply(v)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;D(b)||(l.fn=z);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(C(e))if(qa(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ua.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,t=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(C(e))if(qa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,t=b,q,u=[],w,x;n("$digest");h.$$checkUrlChange();this===M&&null!==e&&(h.defer.cancel(e),v());c=null;do{r=!1;q=this;for(p=0;p<s.length;p++){try{x=s[p],l=x.fn,l(x.scope,x.locals)}catch(z){f(z)}c=null}s.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?sa(g,k):da(g)&&da(k)))r=!0,c=a,a.last=a.eq?ra(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>t&&(w=4-t,u[w]||(u[w]=[]),u[w].push({msg:D(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(B){f(B)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||s.length)&&!t--)throw M.$$phase=
null,d("infdig",b,u);}while(r||s.length);for(M.$$phase=null;I<A.length;)try{A[I++]()}catch(F){f(F)}A.length=I=0;h.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===M&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=z;this.$on=this.$watch=this.$watchGroup=function(){return z};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){M.$$phase||s.length||h.defer(function(){s.length&&M.$digest()});s.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){A.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{M.$$phase=null}}catch(b){f(b)}finally{try{M.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);a=g(a);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var M=new m,s=M.$$asyncQueue=[],A=M.$$postDigestQueue=[],u=M.$$applyAsyncQueue=[],I=0;return M}]}function Ee(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Ca(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Cg(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ta("iwcard",a);a=Kd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ta("imatcher");}function Ld(a){var b=[];u(a)&&q(a,function(a){b.push(Cg(a))});return b}function Qf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Ld(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Ld(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?yd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ta("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||w(b)||
""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=Ca(e.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return e;throw ta("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw ta("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Pf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>za)throw ta("iequirks");var c=pa(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(oa,function(a,b){var d=Q(b);c[("parse_as_"+d).replace(xc,gb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(xc,gb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(xc,gb)]=function(b){return g(a,b)}});return c}]}function Rf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||
{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&za)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ga(),transitions:k,animations:l,android:e}}]}function Tf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(h,k){g.totalPendingRequests++;if(!F(h)||w(d.get(h)))h=f.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==nc}):l===nc&&(l=null);return c.get(h,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=Dg("tpload",h,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=
0;return g}]}function Uf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ea.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Kd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+
'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Vf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){D(f)||(l=k,k=f,f=z);var m=va.call(arguments,3),n=u(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[r.$$timeoutId]}n||
a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(z),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Ca(a){za&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):
"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function yd(a){a=F(a)?Ca(a):a;return a.protocol===Md.protocol&&a.host===Md.host}function Wf(){this.$get=la(x)}function Nd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&
(c[l]=b(g.substring(k+1))));return c}}function $f(){this.$get=Nd}function cd(a){function b(d,c){if(C(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Od);b("date",Pd);b("filter",Eg);b("json",Fg);b("limitTo",Gg);b("lowercase",Hg);b("number",Qd);b("orderBy",Rd);b("uppercase",Ig)}function Eg(){return function(a,b,d,c){if(!qa(a)){if(null==a)return a;throw L("filter")("notarray",
a);}c=c||"$";var e;switch(yc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Jg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Jg(a,b,d,c){var e=C(a)&&d in a;!0===b?b=sa:D(b)||(b=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;if(C(b)||C(a)&&!Wb(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!C(f)?Ea(f,a[d],b,d,!1):Ea(f,a,b,d,c)}}function Ea(a,b,d,c,e,
f){var g=yc(a),h=yc(b);if("string"===h&&"!"===b.charAt(0))return!Ea(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Ea(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if(k.charAt&&"$"!==k.charAt(0)&&Ea(a[k],b,d,c,!0))return!0;return f?!1:Ea(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!D(f)&&!w(f)&&(g=k===c,!Ea(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function yc(a){return null===a?"null":typeof a}function Od(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Sd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Sd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Kg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Td))&&(a=a.replace(Td,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===zc;e++);
if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===zc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Ud&&(d=d.splice(0,Ud-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Lg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-
1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Sd(a,b,d,c,e){if(!F(a)&&!ba(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=Kg(h);Lg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=zc+a;d&&(a=a.substr(a.length-b));return e+a}function Y(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Kb(f,b,c,e)}}function mb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Vd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Wd(a){return function(b){var d=Vd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function Ac(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Pd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=Mg.test(c)?Z(c):b(c));ba(c)&&(c=new Date(c));if(!ga(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Ng.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Pc(f,m),c=Yb(c,f,!0));q(h,function(b){k=Og[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Fg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function Gg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(da(b))return a;ba(a)&&(a=a.toString());if(!qa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?Bc(a,d,d+b):0===d?Bc(a,b,a.length):Bc(a,Math.max(0,d+b),d)}}function Bc(a,b,d){return F(a)?a.slice(b,d):va.call(a,b,d)}function Rd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(D(b))d=b;else if(F(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(C(k)&&(k=a.index),C(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!qa(a))throw L("orderBy")("notarray",a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=D(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(D(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Wb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Qa(a){D(a)&&(a={link:a});a.restrict=a.restrict||"AC";return la(a)}function Lb(a,b,d,
c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Xd(this)}function Xd(a){a.$$classCache={};a.$$classCache[Yd]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function Zd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Tc(c,"-"):"";b(a,nb+c,!0===d);b(a,Yd+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){w(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&e(this.$pending,a,h),$d(this.$pending)&&(this.$pending=void 0));Ha(g)?g?(e(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),e(this.$$success,a,h)):(e(this.$error,a,h),e(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=$d(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function $d(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Cc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Ra(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",
function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",l);if(ae[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ga(d))return d;if(F(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Pg.test(d))return new Date(d);
a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ga(a)?d(a)||
void 0:a}Dc(e,f,g,h);Ra(e,f,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Yb(a,r)),a});h.$formatters.push(function(a){if(a&&!ga(a))throw pb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Yb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(u(g.min)||g.ngMin){var v;h.$validators.min=function(a){return!n(a)||w(v)||d(a)>=v};g.$observe("min",function(a){v=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var t;
h.$validators.max=function(a){return!n(a)||w(t)||d(a)<=t};g.$observe("max",function(a){t=p(a);h.$validate()})}}}function Dc(a,b,d,c){(c.$$hasNativeValidators=C(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function be(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Qg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!ba(b))throw pb("numfmt",b);b=b.toString()}return b})}
function Sa(a){u(a)&&!ba(a)&&(a=parseFloat(a));return da(a)?void 0:a}function Ec(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ce(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Ec(a):0,h=e?Ec(b):0,k=f?Ec(d):0,g=Math.max(g,h,k),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function de(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",
d,c);return a(b)}return e}function Fc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){var b=a;H(a)?b=a.map(c).join(" "):C(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,h,k){function l(a,b){var c=[];q(a,function(a){if(0<b||n[a])n[a]=(n[a]||
0)+b,n[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===b){var c=r,c=l(c&&c.split(" "),1);k.$addClass(c)}else c=r,c=l(c&&c.split(" "),-1),k.$removeClass(c);p=a}var n=h.data("$classCounts"),p=!0,r;n||(n=V(),h.data("$classCounts",n));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(k[a],c),function(a){F(a)||(a=c(a));if(p===b){var e=a,f=r&&r.split(" "),g=e&&e.split(" "),e=d(f,g),f=d(g,f),e=l(e,-1),f=l(f,1);k.$addClass(f);k.$removeClass(e)}r=a})}}}]}
function Ob(a,b,d,c,e,f,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;
this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=h;this.$$exceptionHandler=b;Xd(this);Rg(this)}function Rg(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=
b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,z))}return b})}function Gc(a){this.$$options=a}function ee(a,b){q(b,function(b,c){u(a[c])||(a[c]=b)})}function Ta(a,b){a.prop("selected",b);a.attr("selected",b)}var Sg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Ic={objectMaxDepth:5},Q=function(a){return F(a)?a.toLowerCase():
a},ub=function(a){return F(a)?a.toUpperCase():a},za,B,na,va=[].slice,sg=[].splice,Tg=[].push,ma=Object.prototype.toString,Mc=Object.getPrototypeOf,Fa=L("ng"),ea=x.angular||(x.angular={}),ac,qb=0;za=x.document.documentMode;var da=Number.isNaN||function(a){return a!==a};z.$inject=[];Ya.$inject=[];var H=Array.isArray,qe=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,T=function(a){return F(a)?a.trim():a},Kd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ga=function(){if(!u(Ga.rules)){var a=x.document.querySelector("[ng-csp]")||x.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ga.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ga;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ga.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ja.length,
c,e;for(b=0;b<d;++b)if(c=Ja[b],a=x.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},se=/:/g,Ja=["ng-","data-ng-","ng:","x-ng-"],ve=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof x.HTMLScriptElement||b instanceof x.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=
b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(x.document),ye=/[A-Z]/g,Uc=!1,Ia=3,De={full:"1.6.4",major:1,minor:6,dot:4,codeName:"phenomenal-footnote"};W.expando="ng339";var hb=W.cache={},eg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var ag=/-([a-z])/g,Ug=/^-ms-/,zb={mouseleave:"mouseout",mouseenter:"mouseover"},dc=L("jqLite"),dg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
cc=/<|&#?\w+;/,bg=/<([\w:-]+)/,cg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var jg=x.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Na=W.prototype={ready:ed,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Tg,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Fb[Q(a)]=a});var jd={};q("input select option textarea button form details".split(" "),function(a){jd[a]=!0});var rd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern",ngStep:"step"};q({data:hc,removeData:gc,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gc(a[b])}},function(a,b){W[b]=a});q({data:hc,inheritedData:Db,scope:function(a){return B.data(a,"$scope")||Db(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:gd,injector:function(a){return Db(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,d){b=wb(b.replace(Ug,"ms-"));if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ia&&2!==c&&8!==c&&a.getAttribute){var c=Q(b),e=Fb[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Ia?
a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;xb(a,!0);a.innerHTML=b},empty:hd},function(a,b){W.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==hd&&w(2===a.length&&a!==Ab&&a!==gd?b:c)){if(C(b)){for(e=0;e<g;e++)if(a===hc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=
a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:gc,on:function(a,b,d,c){if(u(c))throw dc("onargs");if(bc(a)){c=yb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=gg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));h.push(d)};g--;)b=c[g],zb[b]?(h(zb[b],ig),h(b,void 0,!0)):h(b)}},
off:fd,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;xb(a);q(new W(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},
prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=B(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Eb,detach:function(a){Eb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var e=d;w(e)&&(e=!Ab(a,b));
(e?Cb:Bb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:fc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=yb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===
this.immediatePropagationStopped},stopPropagation:z,type:f,target:a},b.type&&(c=S(c,b)),b=pa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){W.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),u(f)&&(f=B(f))):ec(f,a(this[g],b,c,e));return u(f)?f:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;var Vg=Object.create(null);kd.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return da(a)?Vg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};
var Gb=kd,Zf=[function(){this.$get=[function(){return Gb}]}],lg=/^([^(]+?)=>/,mg=/^[^(]*\(\s*([^)]*)\)/m,Wg=/,/,Xg=/^\s*(_?)(\S+?)\1\s*$/,kg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ya=L("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||ng(a)),ya("strictdi",d);b=ld(a);q(b[1].split(Wg),function(a){a.replace(Xg,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",
!0);return c};var fe=L("$animate"),qf=function(){this.$get=z},rf=function(){var a=new Gb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):H(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=og(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Cb(a,e);f&&Bb(a,f)});a.delete(b)}});b.length=0}return{enabled:z,
on:z,off:z,pin:z,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.set(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},of=["$provide",function(a){var b=this,d=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw fe("notcsel",c);var f=c+"-animation";b.$$registeredAnimations[c.substr(1)]=
f;a.factory(f,d)};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,fe("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var l=d[e];if(1===l.nodeType){e=l;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&
a.end()},enter:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"enter",ia(k))},move:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"move",ia(k))},leave:function(b,d){return a.push(b,"leave",ia(d),function(){b.remove()})},addClass:function(b,d,e){e=ia(e);e.addClass=ib(e.addclass,d);return a.push(b,"addClass",e)},removeClass:function(b,d,e){e=ia(e);e.removeClass=ib(e.removeClass,d);return a.push(b,"removeClass",e)},setClass:function(b,d,
e,k){k=ia(k);k.addClass=ib(k.addClass,d);k.removeClass=ib(k.removeClass,e);return a.push(b,"setClass",k)},animate:function(b,d,e,k,l){l=ia(l);l.from=l.from?S(l.from,d):d;l.to=l.to?S(l.to,e):e;l.tempClasses=ib(l.tempClasses,k||"ng-inline-animate");return a.push(b,"animate",l)}}}]}],tf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},
sf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},
done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:z,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},pf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=ra(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=L("$compile"),lc=new function(){};Wc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===lc};var md=/^((?:x|data)[:\-_])/i,rg=/[:\-_]+(.)/g,td=L("$controller"),
sd=/^(\S+)(\s+as\s+([\w$]+))?$/,Af=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},ud="application/json",pc={"Content-Type":ud+";charset=utf-8"},ug=/^\[|^\{(?!\{)/,vg={"[":/]$/,"{":/}$/},tg=/^\)]\}',?\n/,oc=L("$http"),Da=ea.$interpolateMinErr=L("$interpolate");Da.throwNoconcat=function(a){throw Da("noconcat",a);};Da.interr=function(a,b){return Da("interr",a,b.toString())};var If=function(){this.$get=function(){function a(a){var b=
function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ea.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},Yg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,xg={http:80,https:443,ftp:21},kb=L("$location"),yg=/^\s*[\\/]{2,}/,Zg={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),
url:function(a){if(w(a))return this.$$url;var b=Yg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:Cd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||ba(a))a=a.toString(),this.$$search=Rc(a);else if(C(a))a=ra(a,{}),q(a,function(b,
c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Cd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([Bd,tc,sc],function(a){a.prototype=Object.create(Zg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==sc||!this.$$html5)throw kb("nostate");this.$$state=w(b)?null:b;this.$$urlUpdatedByLocation=
!0;return this}});var Ua=L("$parse"),Bg={}.constructor.prototype.valueOf,Qb=V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var $g={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},wc=function(a){this.options=a};wc.prototype={constructor:wc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],e=Qb[d];Qb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=$g[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Fd(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=ra(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
$locals:{type:s.LocalsExpression}}};Hd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(a,b.$filter);var d="",c;this.stage="assign";if(c=Gd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Ed(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var h=b.nextId();
b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,zg,Ag,Dd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||z;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,
void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,
b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),
k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.computedMember(g,h),k.assign(b,
m),d&&(d.computed=!0,d.name=h)):(e&&1!==e&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):
(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);m=k.member(g.context,
g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();
k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+
b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,
b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,
b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(ba(a))return a.toString();if(!0===a)return"true";if(!1===
a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Id.prototype={compile:function(a){var b=this;U(a,b.$filter);var d,c;if(d=Gd(a))c=this.recurse(d);d=Ed(a.body);var e;d&&(e=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;e.push(d);a.watchId=c}));var f=[];q(a.body,function(a){f.push(b.recurse(a.expression))});
a=0===a.body.length?z:1===a.body.length?f[0]:function(a,b){var c;q(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+
a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return f.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,
e,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),p;if(null!=n.value){p=[];for(var r=0;r<g.length;++r)p.push(g[r](a,c,d,f));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=
this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:
""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:
d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=Dd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);
return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?
{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:
c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]=
{});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,h){var k=a(e,f,g,h),l,m;null!=k&&(l=b(e,f,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};uc.prototype=
{constructor:uc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression);b.constant=a.constant;return b}};var ta=L("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},xc=/_([a-z])/g,Dg=L("$compile"),aa=x.document.createElement("a"),Md=Ca(x.location.href);Nd.$inject=["$document"];
cd.$inject=["$provide"];var Ud=22,Td=".",zc="0";Od.$inject=["$locale"];Qd.$inject=["$locale"];var Og={yyyy:Y("FullYear",4,0,!1,!0),yy:Y("FullYear",2,0,!0,!0),y:Y("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),LLLL:mb("Month",!1,!0),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),
a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Wd(2),w:Wd(1),G:Ac,GG:Ac,GGG:Ac,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ng=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Mg=/^-?\d+$/;Pd.$inject=["$locale"];var Hg=la(Q),Ig=la(ub);Rd.$inject=["$parse"];var Fe=la({restrict:"E",compile:function(a,
b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Fb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ba("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(rd,function(a,b){vb[b]=
function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Sg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ba("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),
za&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Mb={$addControl:z,$$renameControl:function(a,b){a.$name=b},$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z,$setSubmitted:z};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ka(a.$name,"input");this.$$controls.push(a);
a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Zd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ge=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||z}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,f){d.addClass(Va).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):z;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);S(n,Mb)})}}}}}]},Ge=ge(),
Se=ge(!0),Pg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ah=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,bh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Qg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,he=/^(\d{4,})-(\d{2})-(\d{2})$/,ie=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Hc=/^(\d{4,})-W(\d\d)$/,je=/^(\d{4,})-(\d\d)$/,ke=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ae=V();q(["date","datetime-local","month","time","week"],function(a){ae[a]=!0});var le={text:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c)},date:ob("date",he,Nb(he,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ie,Nb(ie,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ke,Nb(ke,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Hc,function(a,b){if(ga(a))return a;
if(F(a)){Hc.lastIndex=0;var d=Hc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Vd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:ob("month",je,Nb(je,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g},d.$observe("min",function(a){g=Sa(a);c.$validate()});
if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h},d.$observe("max",function(a){h=Sa(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||w(k)||ce(b,g||0,k)};d.$observe("step",function(a){k=Sa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||ah.test(d)}},email:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||bh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==T(d.ngTrim);w(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=T(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=T(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Sa(a);da(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Sa(a);da(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Sa(a);da(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=u(d.min);e=u(d.max);f=u(d.step);var s=c.$render;c.$render=m&&u(q.rangeUnderflow)&&
u(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(n)||b>=n},g("min",h));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(p)||b<=p},g("max",k));f&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||w(r)||ce(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,h){var k=de(h,a,"ngTrueValue",d.ngTrueValue,!0),l=de(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:z,button:z,submit:z,reset:z,file:z},Xc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(le[Q(g.type)]||le.text)(e,f,g,h[0],b,a,d,c)}}}}],ch=/^(true|false|\d+)$/,
kf=function(){function a(a,d,c){var e=u(c)?c:9===za?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return ch.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Ke=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=$b(a)})}}}}],Me=["$interpolate",
"$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],Le=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,
function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],jf=la({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ne=Fc("",!0),Pe=Fc("Odd",0),Oe=Fc("Even",1),Qe=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Re=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],bd={},dh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ba("ng-"+a);bd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};dh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ue=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",
e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Ve=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var r=0,q,s,t,w=function(){s&&(s.remove(),s=null);q&&(q.$destroy(),q=
null);t&&(d.leave(t).done(function(a){!1!==a&&(s=null)}),s=t,t=null)};c.$watch(f,function(f){var m=function(a){!1===a||!u(h)||h&&!c.$eval(h)||b()},s=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&s===r){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).done(m)});q=b;t=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||s!==r||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],mf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(dd(e.template,x.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],We=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),hf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!w(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",Yd="ng-invalid",Va="ng-pristine",Rb="ng-dirty",pb=L("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+
"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);D(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){D(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,xa(this.$$element));},$render:z,$isEmpty:function(a){return w(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,
"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=
!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!da(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),
f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(q(k.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(k.$asyncValidators,function(e,g){var k=e(a,b);if(!k||!D(k.then))throw pb("nopromise",k);f(g,void 0);c.push(k.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});
c.length?k.$$q.all(c).then(function(){g(d)},z):g(!0)}function f(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(w(k.$$parserValid))f(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){f(b,null)}),q(k.$asyncValidators,function(a,b){f(b,null)})),f(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?e():g(!1):
g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=w(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),w(a)){this.$$parserValid=!1;break}da(this.$modelValue)&&
(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},
this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");ba(b[a])?b=b[a]:ba(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};Zd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var gf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){h.$setTouched()}var h=f[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,eh=/(\s+|^)default(\s+|$)/;Gc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=S({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=T(d.replace(eh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ee(a,this.$$options));ee(a,Pb.$$options);return new Gc(a)}};Pb=new Gc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var lf=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Xe=Qa({terminal:!0,priority:1E3}),fh=L("ngOptions"),gh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
ef=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&qa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(gh);if(!n)throw fh("iexp",a,xa(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,t=s&&d(s),u=s?function(a,b){return t(c,b)}:function(a){return Pa(a)},
w=function(a,b){return u(a,G(a,b))},A=d(n[2]||n[1]),x=d(n[3]||""),I=d(n[4]||""),K=d(n[8]),E={},G=q?function(a,b){E[q]=b;E[p]=a;return E}:function(a){E[p]=a;return E};return{trackBy:s,getTrackByValue:w,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=G(l,h),l=u(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=I(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=G(d[p],p),r=v(c,q),p=u(r,q),t=A(c,q),E=x(c,q),q=I(c,q),r=new e(p,r,t,E,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return s?ra(a.viewValue):a.viewValue}}}}}var e=x.document.createElement("option"),f=x.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=z},post:function(d,h,k,l){function m(a){var b=(a=A.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=A&&r.readValue();if(A)for(var b=A.items.length-1;0<=b;b--){var c=A.items[b];u(c.group)?Eb(c.element.parentNode):Eb(c.element)}A=z.getOptions();var d={};x&&h.prepend(r.emptyOption);A.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),I.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=I,c=e.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(I);s.$render();s.$isEmpty(a)||(b=r.readValue(),(z.trackBy||v?sa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],v=k.multiple;l=0;for(var t=h.children(),w=t.length;l<w;l++)if(""===t[l].value){r.hasEmptyOption=!0;r.emptyOption=t.eq(l);break}var x=!!r.emptyOption;B(e.cloneNode(!1)).val("?");var A,z=c(k.ngOptions,h,d),I=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};v?(r.writeValue=function(a){var b=a&&a.map(m)||[];A.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=A.selectValueMap[a])&&!a.disabled&&b.push(A.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(H(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=A.selectValueMap[h.val()],c=A.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):x?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=A.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
A.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));x&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(z.getWatchables,
p)}}}}],Ye=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),t=s+l+"-"+n+v,u=ea.noop,x;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,t))});f.$watch(l,function(b){var c=parseFloat(b),e=da(c);e||c in p||(c=a.pluralCat(c-
n));c===x||e&&da(x)||(u(),e=r[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),u=z,k()):u=f.$watch(e,k),x=c)})}}}],Ze=["$parse","$animate","$compile",function(a,b,d){var c=L("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var t,u,w,x,z={$id:Pa};r?t=a(r):(w=function(a,b){return Pa(b)},
x=function(a){return a});return function(a,d,f,g,l){t&&(u=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=d;return t(a,z)});var m=V();a.$watchCollection(n,function(f){var g,n,r=d[0],t,z=V(),B,D,F,C,G,E,H;p&&(a[p]=f);if(qa(f))G=f,n=u||w;else for(H in n=u||x,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);B=G.length;H=Array(B);for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],C=n(D,F,g),m[C])E=m[C],delete m[C],z[C]=E,H[g]=E;else{if(z[C])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,F);H[g]={id:C,
scope:void 0,clone:void 0};z[C]=!0}for(t in m){E=m[t];C=tb(E.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],E=H[g],E.scope){t=r;do t=t.nextSibling;while(t&&t.$$NG_REMOVED);E.clone[0]!==t&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,s,F,v,D,B)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;z[E.id]=E;e(E.scope,g,s,F,v,D,B)});m=
z})}}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Te=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],af=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),bf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;k.length;)a.cancel(k.pop());d=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],cf=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),df=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),hh=L("ngTransclude"),ff=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw hh("orphan",xa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==
Ia||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],He=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ih={$setViewValue:z,$render:z},jh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){h||(h=!0,b.$$postDigest(function(){b.$$destroyed||(h=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}var e=this,f=new Gb;e.selectValueMap={};e.ngModelCtrl=ih;e.multiple=!1;e.unknownOption=B(x.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ta(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ta(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=
function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ta(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=z});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];
c&&Ta(B(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?c:b),Ta(B(a[0].options[a[0].selectedIndex]),!0)):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ka(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),
""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};var g=!1,h=!1;e.registerOption=function(a,b,f,g,h){if(f.$attr.ngValue){var q,s=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");u(s)&&(e.removeOption(q),delete e.selectValueMap[s],d=!0);s=Pa(a);q=a;e.selectValueMap[s]=a;e.addOption(a,b);b.attr("value",s);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(q)&&(e.removeOption(q),d=!0);q=
a;e.addOption(a,b);d&&f&&c()}):h?a.$watch(h,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ie=function(){return{restrict:"E",require:["select",
"?ngModel"],controller:jh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){q(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ta(B(b),c)})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||sa(g,f.$viewValue)||(g=pa(f.$viewValue),f.$render());h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=z},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Je=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;u(d.ngValue)||
(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],Zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw L("ngPattern")("noregexp",f,a,xa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=da(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};x.angular.bootstrap?x.console&&console.log("WARNING: Tried to load angular more than once."):(ze(),Ce(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(function(){ue(x.document,Sc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
/**!
 * AngularJS file upload directives and services. Supports: file upload/drop/paste, resume, cancel/abort,
 * progress, resize, thumbnail, preview, validation and CORS
 * FileAPI Flash shim for old browsers not supporting FormData
 * @author  Danial  <danial.farid@gmail.com>
 * @version 12.2.13
 */

(function () {
  /** @namespace FileAPI.noContentTimeout */

  function patchXHR(fnName, newFn) {
    window.XMLHttpRequest.prototype[fnName] = newFn(window.XMLHttpRequest.prototype[fnName]);
  }

  function redefineProp(xhr, prop, fn) {
    try {
      Object.defineProperty(xhr, prop, {get: fn});
    } catch (e) {/*ignore*/
    }
  }

  if (!window.FileAPI) {
    window.FileAPI = {};
  }

  if (!window.XMLHttpRequest) {
    throw 'AJAX is not supported. XMLHttpRequest is not defined.';
  }

  FileAPI.shouldLoad = !window.FormData || FileAPI.forceLoad;
  if (FileAPI.shouldLoad) {
    var initializeUploadListener = function (xhr) {
      if (!xhr.__listeners) {
        if (!xhr.upload) xhr.upload = {};
        xhr.__listeners = [];
        var origAddEventListener = xhr.upload.addEventListener;
        xhr.upload.addEventListener = function (t, fn) {
          xhr.__listeners[t] = fn;
          if (origAddEventListener) origAddEventListener.apply(this, arguments);
        };
      }
    };

    patchXHR('open', function (orig) {
      return function (m, url, b) {
        initializeUploadListener(this);
        this.__url = url;
        try {
          orig.apply(this, [m, url, b]);
        } catch (e) {
          if (e.message.indexOf('Access is denied') > -1) {
            this.__origError = e;
            orig.apply(this, [m, '_fix_for_ie_crossdomain__', b]);
          }
        }
      };
    });

    patchXHR('getResponseHeader', function (orig) {
      return function (h) {
        return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(h) : (orig == null ? null : orig.apply(this, [h]));
      };
    });

    patchXHR('getAllResponseHeaders', function (orig) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : (orig == null ? null : orig.apply(this));
      };
    });

    patchXHR('abort', function (orig) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : (orig == null ? null : orig.apply(this));
      };
    });

    patchXHR('setRequestHeader', function (orig) {
      return function (header, value) {
        if (header === '__setXHR_') {
          initializeUploadListener(this);
          var val = value(this);
          // fix for angular < 1.2.0
          if (val instanceof Function) {
            val(this);
          }
        } else {
          this.__requestHeaders = this.__requestHeaders || {};
          this.__requestHeaders[header] = value;
          orig.apply(this, arguments);
        }
      };
    });

    patchXHR('send', function (orig) {
      return function () {
        var xhr = this;
        if (arguments[0] && arguments[0].__isFileAPIShim) {
          var formData = arguments[0];
          var config = {
            url: xhr.__url,
            jsonp: false, //removes the callback form param
            cache: true, //removes the ?fileapiXXX in the url
            complete: function (err, fileApiXHR) {
              if (err && angular.isString(err) && err.indexOf('#2174') !== -1) {
                // this error seems to be fine the file is being uploaded properly.
                err = null;
              }
              xhr.__completed = true;
              if (!err && xhr.__listeners.load)
                xhr.__listeners.load({
                  type: 'load',
                  loaded: xhr.__loaded,
                  total: xhr.__total,
                  target: xhr,
                  lengthComputable: true
                });
              if (!err && xhr.__listeners.loadend)
                xhr.__listeners.loadend({
                  type: 'loadend',
                  loaded: xhr.__loaded,
                  total: xhr.__total,
                  target: xhr,
                  lengthComputable: true
                });
              if (err === 'abort' && xhr.__listeners.abort)
                xhr.__listeners.abort({
                  type: 'abort',
                  loaded: xhr.__loaded,
                  total: xhr.__total,
                  target: xhr,
                  lengthComputable: true
                });
              if (fileApiXHR.status !== undefined) redefineProp(xhr, 'status', function () {
                return (fileApiXHR.status === 0 && err && err !== 'abort') ? 500 : fileApiXHR.status;
              });
              if (fileApiXHR.statusText !== undefined) redefineProp(xhr, 'statusText', function () {
                return fileApiXHR.statusText;
              });
              redefineProp(xhr, 'readyState', function () {
                return 4;
              });
              if (fileApiXHR.response !== undefined) redefineProp(xhr, 'response', function () {
                return fileApiXHR.response;
              });
              var resp = fileApiXHR.responseText || (err && fileApiXHR.status === 0 && err !== 'abort' ? err : undefined);
              redefineProp(xhr, 'responseText', function () {
                return resp;
              });
              redefineProp(xhr, 'response', function () {
                return resp;
              });
              if (err) redefineProp(xhr, 'err', function () {
                return err;
              });
              xhr.__fileApiXHR = fileApiXHR;
              if (xhr.onreadystatechange) xhr.onreadystatechange();
              if (xhr.onload) xhr.onload();
            },
            progress: function (e) {
              e.target = xhr;
              if (xhr.__listeners.progress) xhr.__listeners.progress(e);
              xhr.__total = e.total;
              xhr.__loaded = e.loaded;
              if (e.total === e.loaded) {
                // fix flash issue that doesn't call complete if there is no response text from the server
                var _this = this;
                setTimeout(function () {
                  if (!xhr.__completed) {
                    xhr.getAllResponseHeaders = function () {
                    };
                    _this.complete(null, {status: 204, statusText: 'No Content'});
                  }
                }, FileAPI.noContentTimeout || 10000);
              }
            },
            headers: xhr.__requestHeaders
          };
          config.data = {};
          config.files = {};
          for (var i = 0; i < formData.data.length; i++) {
            var item = formData.data[i];
            if (item.val != null && item.val.name != null && item.val.size != null && item.val.type != null) {
              config.files[item.key] = item.val;
            } else {
              config.data[item.key] = item.val;
            }
          }

          setTimeout(function () {
            if (!FileAPI.hasFlash) {
              throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
            }
            xhr.__fileApiXHR = FileAPI.upload(config);
          }, 1);
        } else {
          if (this.__origError) {
            throw this.__origError;
          }
          orig.apply(xhr, arguments);
        }
      };
    });
    window.XMLHttpRequest.__isFileAPIShim = true;
    window.FormData = FormData = function () {
      return {
        append: function (key, val, name) {
          if (val.__isFileAPIBlobShim) {
            val = val.data[0];
          }
          this.data.push({
            key: key,
            val: val,
            name: name
          });
        },
        data: [],
        __isFileAPIShim: true
      };
    };

    window.Blob = Blob = function (b) {
      return {
        data: b,
        __isFileAPIBlobShim: true
      };
    };
  }

})();

(function () {
  /** @namespace FileAPI.forceLoad */
  /** @namespace window.FileAPI.jsUrl */
  /** @namespace window.FileAPI.jsPath */

  function isInputTypeFile(elem) {
    return elem[0].tagName.toLowerCase() === 'input' && elem.attr('type') && elem.attr('type').toLowerCase() === 'file';
  }

  function hasFlash() {
    try {
      var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (fo) return true;
    } catch (e) {
      if (navigator.mimeTypes['application/x-shockwave-flash'] !== undefined) return true;
    }
    return false;
  }

  function getOffset(obj) {
    var left = 0, top = 0;

    if (window.jQuery) {
      return jQuery(obj).offset();
    }

    if (obj.offsetParent) {
      do {
        left += (obj.offsetLeft - obj.scrollLeft);
        top += (obj.offsetTop - obj.scrollTop);
        obj = obj.offsetParent;
      } while (obj);
    }
    return {
      left: left,
      top: top
    };
  }

  if (FileAPI.shouldLoad) {
    FileAPI.hasFlash = hasFlash();

    //load FileAPI
    if (FileAPI.forceLoad) {
      FileAPI.html5 = false;
    }

    if (!FileAPI.upload) {
      var jsUrl, basePath, script = document.createElement('script'), allScripts = document.getElementsByTagName('script'), i, index, src;
      if (window.FileAPI.jsUrl) {
        jsUrl = window.FileAPI.jsUrl;
      } else if (window.FileAPI.jsPath) {
        basePath = window.FileAPI.jsPath;
      } else {
        for (i = 0; i < allScripts.length; i++) {
          src = allScripts[i].src;
          index = src.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/);
          if (index > -1) {
            basePath = src.substring(0, index + 1);
            break;
          }
        }
      }

      if (FileAPI.staticPath == null) FileAPI.staticPath = basePath;
      script.setAttribute('src', jsUrl || basePath + 'FileAPI.min.js');
      document.getElementsByTagName('head')[0].appendChild(script);
    }

    FileAPI.ngfFixIE = function (elem, fileElem, changeFn) {
      if (!hasFlash()) {
        throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
      }
      var fixInputStyle = function () {
        var label = fileElem.parent();
        if (elem.attr('disabled')) {
          if (label) label.removeClass('js-fileapi-wrapper');
        } else {
          if (!fileElem.attr('__ngf_flash_')) {
            fileElem.unbind('change');
            fileElem.unbind('click');
            fileElem.bind('change', function (evt) {
              fileApiChangeFn.apply(this, [evt]);
              changeFn.apply(this, [evt]);
            });
            fileElem.attr('__ngf_flash_', 'true');
          }
          label.addClass('js-fileapi-wrapper');
          if (!isInputTypeFile(elem)) {
            label.css('position', 'absolute')
              .css('top', getOffset(elem[0]).top + 'px').css('left', getOffset(elem[0]).left + 'px')
              .css('width', elem[0].offsetWidth + 'px').css('height', elem[0].offsetHeight + 'px')
              .css('filter', 'alpha(opacity=0)').css('display', elem.css('display'))
              .css('overflow', 'hidden').css('z-index', '900000')
              .css('visibility', 'visible');
            fileElem.css('width', elem[0].offsetWidth + 'px').css('height', elem[0].offsetHeight + 'px')
              .css('position', 'absolute').css('top', '0px').css('left', '0px');
          }
        }
      };

      elem.bind('mouseenter', fixInputStyle);

      var fileApiChangeFn = function (evt) {
        var files = FileAPI.getFiles(evt);
        //just a double check for #233
        for (var i = 0; i < files.length; i++) {
          if (files[i].size === undefined) files[i].size = 0;
          if (files[i].name === undefined) files[i].name = 'file';
          if (files[i].type === undefined) files[i].type = 'undefined';
        }
        if (!evt.target) {
          evt.target = {};
        }
        evt.target.files = files;
        // if evt.target.files is not writable use helper field
        if (evt.target.files !== files) {
          evt.__files_ = files;
        }
        (evt.__files_ || evt.target.files).item = function (i) {
          return (evt.__files_ || evt.target.files)[i] || null;
        };
      };
    };

    FileAPI.disableFileInput = function (elem, disable) {
      if (disable) {
        elem.removeClass('js-fileapi-wrapper');
      } else {
        elem.addClass('js-fileapi-wrapper');
      }
    };
  }
})();

if (!window.FileReader) {
  window.FileReader = function () {
    var _this = this, loadStarted = false;
    this.listeners = {};
    this.addEventListener = function (type, fn) {
      _this.listeners[type] = _this.listeners[type] || [];
      _this.listeners[type].push(fn);
    };
    this.removeEventListener = function (type, fn) {
      if (_this.listeners[type]) _this.listeners[type].splice(_this.listeners[type].indexOf(fn), 1);
    };
    this.dispatchEvent = function (evt) {
      var list = _this.listeners[evt.type];
      if (list) {
        for (var i = 0; i < list.length; i++) {
          list[i].call(_this, evt);
        }
      }
    };
    this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;

    var constructEvent = function (type, evt) {
      var e = {type: type, target: _this, loaded: evt.loaded, total: evt.total, error: evt.error};
      if (evt.result != null) e.target.result = evt.result;
      return e;
    };
    var listener = function (evt) {
      if (!loadStarted) {
        loadStarted = true;
        if (_this.onloadstart) _this.onloadstart(constructEvent('loadstart', evt));
      }
      var e;
      if (evt.type === 'load') {
        if (_this.onloadend) _this.onloadend(constructEvent('loadend', evt));
        e = constructEvent('load', evt);
        if (_this.onload) _this.onload(e);
        _this.dispatchEvent(e);
      } else if (evt.type === 'progress') {
        e = constructEvent('progress', evt);
        if (_this.onprogress) _this.onprogress(e);
        _this.dispatchEvent(e);
      } else {
        e = constructEvent('error', evt);
        if (_this.onerror) _this.onerror(e);
        _this.dispatchEvent(e);
      }
    };
    this.readAsDataURL = function (file) {
      FileAPI.readAsDataURL(file, listener);
    };
    this.readAsText = function (file) {
      FileAPI.readAsText(file, listener);
    };
  };
}
/**!
 * AngularJS file upload directives and services. Supoorts: file upload/drop/paste, resume, cancel/abort,
 * progress, resize, thumbnail, preview, validation and CORS
 * @author  Danial  <danial.farid@gmail.com>
 * @version 12.2.13
 */

if (window.XMLHttpRequest && !(window.FileAPI && FileAPI.shouldLoad)) {
  window.XMLHttpRequest.prototype.setRequestHeader = (function (orig) {
    return function (header, value) {
      if (header === '__setXHR_') {
        var val = value(this);
        // fix for angular < 1.2.0
        if (val instanceof Function) {
          val(this);
        }
      } else {
        orig.apply(this, arguments);
      }
    };
  })(window.XMLHttpRequest.prototype.setRequestHeader);
}

var ngFileUpload = angular.module('ngFileUpload', []);

ngFileUpload.version = '12.2.13';

ngFileUpload.service('UploadBase', ['$http', '$q', '$timeout', function ($http, $q, $timeout) {
  var upload = this;
  upload.promisesCount = 0;

  this.isResumeSupported = function () {
    return window.Blob && window.Blob.prototype.slice;
  };

  var resumeSupported = this.isResumeSupported();

  function sendHttp(config) {
    config.method = config.method || 'POST';
    config.headers = config.headers || {};

    var deferred = config._deferred = config._deferred || $q.defer();
    var promise = deferred.promise;

    function notifyProgress(e) {
      if (deferred.notify) {
        deferred.notify(e);
      }
      if (promise.progressFunc) {
        $timeout(function () {
          promise.progressFunc(e);
        });
      }
    }

    function getNotifyEvent(n) {
      if (config._start != null && resumeSupported) {
        return {
          loaded: n.loaded + config._start,
          total: (config._file && config._file.size) || n.total,
          type: n.type, config: config,
          lengthComputable: true, target: n.target
        };
      } else {
        return n;
      }
    }

    if (!config.disableProgress) {
      config.headers.__setXHR_ = function () {
        return function (xhr) {
          if (!xhr || !xhr.upload || !xhr.upload.addEventListener) return;
          config.__XHR = xhr;
          if (config.xhrFn) config.xhrFn(xhr);
          xhr.upload.addEventListener('progress', function (e) {
            e.config = config;
            notifyProgress(getNotifyEvent(e));
          }, false);
          //fix for firefox not firing upload progress end, also IE8-9
          xhr.upload.addEventListener('load', function (e) {
            if (e.lengthComputable) {
              e.config = config;
              notifyProgress(getNotifyEvent(e));
            }
          }, false);
        };
      };
    }

    function uploadWithAngular() {
      $http(config).then(function (r) {
          if (resumeSupported && config._chunkSize && !config._finished && config._file) {
            var fileSize = config._file && config._file.size || 0;
            notifyProgress({
                loaded: Math.min(config._end, fileSize),
                total: fileSize,
                config: config,
                type: 'progress'
              }
            );
            upload.upload(config, true);
          } else {
            if (config._finished) delete config._finished;
            deferred.resolve(r);
          }
        }, function (e) {
          deferred.reject(e);
        }, function (n) {
          deferred.notify(n);
        }
      );
    }

    if (!resumeSupported) {
      uploadWithAngular();
    } else if (config._chunkSize && config._end && !config._finished) {
      config._start = config._end;
      config._end += config._chunkSize;
      uploadWithAngular();
    } else if (config.resumeSizeUrl) {
      $http.get(config.resumeSizeUrl).then(function (resp) {
        if (config.resumeSizeResponseReader) {
          config._start = config.resumeSizeResponseReader(resp.data);
        } else {
          config._start = parseInt((resp.data.size == null ? resp.data : resp.data.size).toString());
        }
        if (config._chunkSize) {
          config._end = config._start + config._chunkSize;
        }
        uploadWithAngular();
      }, function (e) {
        throw e;
      });
    } else if (config.resumeSize) {
      config.resumeSize().then(function (size) {
        config._start = size;
        if (config._chunkSize) {
          config._end = config._start + config._chunkSize;
        }
        uploadWithAngular();
      }, function (e) {
        throw e;
      });
    } else {
      if (config._chunkSize) {
        config._start = 0;
        config._end = config._start + config._chunkSize;
      }
      uploadWithAngular();
    }


    promise.success = function (fn) {
      promise.then(function (response) {
        fn(response.data, response.status, response.headers, config);
      });
      return promise;
    };

    promise.error = function (fn) {
      promise.then(null, function (response) {
        fn(response.data, response.status, response.headers, config);
      });
      return promise;
    };

    promise.progress = function (fn) {
      promise.progressFunc = fn;
      promise.then(null, null, function (n) {
        fn(n);
      });
      return promise;
    };
    promise.abort = promise.pause = function () {
      if (config.__XHR) {
        $timeout(function () {
          config.__XHR.abort();
        });
      }
      return promise;
    };
    promise.xhr = function (fn) {
      config.xhrFn = (function (origXhrFn) {
        return function () {
          if (origXhrFn) origXhrFn.apply(promise, arguments);
          fn.apply(promise, arguments);
        };
      })(config.xhrFn);
      return promise;
    };

    upload.promisesCount++;
    if (promise['finally'] && promise['finally'] instanceof Function) {
      promise['finally'](function () {
        upload.promisesCount--;
      });
    }
    return promise;
  }

  this.isUploadInProgress = function () {
    return upload.promisesCount > 0;
  };

  this.rename = function (file, name) {
    file.ngfName = name;
    return file;
  };

  this.jsonBlob = function (val) {
    if (val != null && !angular.isString(val)) {
      val = JSON.stringify(val);
    }
    var blob = new window.Blob([val], {type: 'application/json'});
    blob._ngfBlob = true;
    return blob;
  };

  this.json = function (val) {
    return angular.toJson(val);
  };

  function copy(obj) {
    var clone = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = obj[key];
      }
    }
    return clone;
  }

  this.isFile = function (file) {
    return file != null && (file instanceof window.Blob || (file.flashId && file.name && file.size));
  };

  this.upload = function (config, internal) {
    function toResumeFile(file, formData) {
      if (file._ngfBlob) return file;
      config._file = config._file || file;
      if (config._start != null && resumeSupported) {
        if (config._end && config._end >= file.size) {
          config._finished = true;
          config._end = file.size;
        }
        var slice = file.slice(config._start, config._end || file.size);
        slice.name = file.name;
        slice.ngfName = file.ngfName;
        if (config._chunkSize) {
          formData.append('_chunkSize', config._chunkSize);
          formData.append('_currentChunkSize', config._end - config._start);
          formData.append('_chunkNumber', Math.floor(config._start / config._chunkSize));
          formData.append('_totalSize', config._file.size);
        }
        return slice;
      }
      return file;
    }

    function addFieldToFormData(formData, val, key) {
      if (val !== undefined) {
        if (angular.isDate(val)) {
          val = val.toISOString();
        }
        if (angular.isString(val)) {
          formData.append(key, val);
        } else if (upload.isFile(val)) {
          var file = toResumeFile(val, formData);
          var split = key.split(',');
          if (split[1]) {
            file.ngfName = split[1].replace(/^\s+|\s+$/g, '');
            key = split[0];
          }
          config._fileKey = config._fileKey || key;
          formData.append(key, file, file.ngfName || file.name);
        } else {
          if (angular.isObject(val)) {
            if (val.$$ngfCircularDetection) throw 'ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: ' + key;

            val.$$ngfCircularDetection = true;
            try {
              for (var k in val) {
                if (val.hasOwnProperty(k) && k !== '$$ngfCircularDetection') {
                  var objectKey = config.objectKey == null ? '[i]' : config.objectKey;
                  if (val.length && parseInt(k) > -1) {
                    objectKey = config.arrayKey == null ? objectKey : config.arrayKey;
                  }
                  addFieldToFormData(formData, val[k], key + objectKey.replace(/[ik]/g, k));
                }
              }
            } finally {
              delete val.$$ngfCircularDetection;
            }
          } else {
            formData.append(key, val);
          }
        }
      }
    }

    function digestConfig() {
      config._chunkSize = upload.translateScalars(config.resumeChunkSize);
      config._chunkSize = config._chunkSize ? parseInt(config._chunkSize.toString()) : null;

      config.headers = config.headers || {};
      config.headers['Content-Type'] = undefined;
      config.transformRequest = config.transformRequest ?
        (angular.isArray(config.transformRequest) ?
          config.transformRequest : [config.transformRequest]) : [];
      config.transformRequest.push(function (data) {
        var formData = new window.FormData(), key;
        data = data || config.fields || {};
        if (config.file) {
          data.file = config.file;
        }
        for (key in data) {
          if (data.hasOwnProperty(key)) {
            var val = data[key];
            if (config.formDataAppender) {
              config.formDataAppender(formData, key, val);
            } else {
              addFieldToFormData(formData, val, key);
            }
          }
        }

        return formData;
      });
    }

    if (!internal) config = copy(config);
    if (!config._isDigested) {
      config._isDigested = true;
      digestConfig();
    }

    return sendHttp(config);
  };

  this.http = function (config) {
    config = copy(config);
    config.transformRequest = config.transformRequest || function (data) {
        if ((window.ArrayBuffer && data instanceof window.ArrayBuffer) || data instanceof window.Blob) {
          return data;
        }
        return $http.defaults.transformRequest[0].apply(this, arguments);
      };
    config._chunkSize = upload.translateScalars(config.resumeChunkSize);
    config._chunkSize = config._chunkSize ? parseInt(config._chunkSize.toString()) : null;

    return sendHttp(config);
  };

  this.translateScalars = function (str) {
    if (angular.isString(str)) {
      if (str.search(/kb/i) === str.length - 2) {
        return parseFloat(str.substring(0, str.length - 2) * 1024);
      } else if (str.search(/mb/i) === str.length - 2) {
        return parseFloat(str.substring(0, str.length - 2) * 1048576);
      } else if (str.search(/gb/i) === str.length - 2) {
        return parseFloat(str.substring(0, str.length - 2) * 1073741824);
      } else if (str.search(/b/i) === str.length - 1) {
        return parseFloat(str.substring(0, str.length - 1));
      } else if (str.search(/s/i) === str.length - 1) {
        return parseFloat(str.substring(0, str.length - 1));
      } else if (str.search(/m/i) === str.length - 1) {
        return parseFloat(str.substring(0, str.length - 1) * 60);
      } else if (str.search(/h/i) === str.length - 1) {
        return parseFloat(str.substring(0, str.length - 1) * 3600);
      }
    }
    return str;
  };

  this.urlToBlob = function(url) {
    var defer = $q.defer();
    $http({url: url, method: 'get', responseType: 'arraybuffer'}).then(function (resp) {
      var arrayBufferView = new Uint8Array(resp.data);
      var type = resp.headers('content-type') || 'image/WebP';
      var blob = new window.Blob([arrayBufferView], {type: type});
      var matches = url.match(/.*\/(.+?)(\?.*)?$/);
      if (matches.length > 1) {
        blob.name = matches[1];
      }
      defer.resolve(blob);
    }, function (e) {
      defer.reject(e);
    });
    return defer.promise;
  };

  this.setDefaults = function (defaults) {
    this.defaults = defaults || {};
  };

  this.defaults = {};
  this.version = ngFileUpload.version;
}

]);

ngFileUpload.service('Upload', ['$parse', '$timeout', '$compile', '$q', 'UploadExif', function ($parse, $timeout, $compile, $q, UploadExif) {
  var upload = UploadExif;
  upload.getAttrWithDefaults = function (attr, name) {
    if (attr[name] != null) return attr[name];
    var def = upload.defaults[name];
    return (def == null ? def : (angular.isString(def) ? def : JSON.stringify(def)));
  };

  upload.attrGetter = function (name, attr, scope, params) {
    var attrVal = this.getAttrWithDefaults(attr, name);
    if (scope) {
      try {
        if (params) {
          return $parse(attrVal)(scope, params);
        } else {
          return $parse(attrVal)(scope);
        }
      } catch (e) {
        // hangle string value without single qoute
        if (name.search(/min|max|pattern/i)) {
          return attrVal;
        } else {
          throw e;
        }
      }
    } else {
      return attrVal;
    }
  };

  upload.shouldUpdateOn = function (type, attr, scope) {
    var modelOptions = upload.attrGetter('ngfModelOptions', attr, scope);
    if (modelOptions && modelOptions.updateOn) {
      return modelOptions.updateOn.split(' ').indexOf(type) > -1;
    }
    return true;
  };

  upload.emptyPromise = function () {
    var d = $q.defer();
    var args = arguments;
    $timeout(function () {
      d.resolve.apply(d, args);
    });
    return d.promise;
  };

  upload.rejectPromise = function () {
    var d = $q.defer();
    var args = arguments;
    $timeout(function () {
      d.reject.apply(d, args);
    });
    return d.promise;
  };

  upload.happyPromise = function (promise, data) {
    var d = $q.defer();
    promise.then(function (result) {
      d.resolve(result);
    }, function (error) {
      $timeout(function () {
        throw error;
      });
      d.resolve(data);
    });
    return d.promise;
  };

  function applyExifRotations(files, attr, scope) {
    var promises = [upload.emptyPromise()];
    angular.forEach(files, function (f, i) {
      if (f.type.indexOf('image/jpeg') === 0 && upload.attrGetter('ngfFixOrientation', attr, scope, {$file: f})) {
        promises.push(upload.happyPromise(upload.applyExifRotation(f), f).then(function (fixedFile) {
          files.splice(i, 1, fixedFile);
        }));
      }
    });
    return $q.all(promises);
  }

  function resizeFile(files, attr, scope, ngModel) {
    var resizeVal = upload.attrGetter('ngfResize', attr, scope);
    if (!resizeVal || !upload.isResizeSupported() || !files.length) return upload.emptyPromise();
    if (resizeVal instanceof Function) {
      var defer = $q.defer();
      return resizeVal(files).then(function (p) {
        resizeWithParams(p, files, attr, scope, ngModel).then(function (r) {
          defer.resolve(r);
        }, function (e) {
          defer.reject(e);
        });
      }, function (e) {
        defer.reject(e);
      });
    } else {
      return resizeWithParams(resizeVal, files, attr, scope, ngModel);
    }
  }

  function resizeWithParams(params, files, attr, scope, ngModel) {
    var promises = [upload.emptyPromise()];

    function handleFile(f, i) {
      if (f.type.indexOf('image') === 0) {
        if (params.pattern && !upload.validatePattern(f, params.pattern)) return;
        params.resizeIf = function (width, height) {
          return upload.attrGetter('ngfResizeIf', attr, scope,
            {$width: width, $height: height, $file: f});
        };
        var promise = upload.resize(f, params);
        promises.push(promise);
        promise.then(function (resizedFile) {
          files.splice(i, 1, resizedFile);
        }, function (e) {
          f.$error = 'resize';
          (f.$errorMessages = (f.$errorMessages || {})).resize = true;
          f.$errorParam = (e ? (e.message ? e.message : e) + ': ' : '') + (f && f.name);
          ngModel.$ngfValidations.push({name: 'resize', valid: false});
          upload.applyModelValidation(ngModel, files);
        });
      }
    }

    for (var i = 0; i < files.length; i++) {
      handleFile(files[i], i);
    }
    return $q.all(promises);
  }

  upload.updateModel = function (ngModel, attr, scope, fileChange, files, evt, noDelay) {
    function update(files, invalidFiles, newFiles, dupFiles, isSingleModel) {
      attr.$$ngfPrevValidFiles = files;
      attr.$$ngfPrevInvalidFiles = invalidFiles;
      var file = files && files.length ? files[0] : null;
      var invalidFile = invalidFiles && invalidFiles.length ? invalidFiles[0] : null;

      if (ngModel) {
        upload.applyModelValidation(ngModel, files);
        ngModel.$setViewValue(isSingleModel ? file : files);
      }

      if (fileChange) {
        $parse(fileChange)(scope, {
          $files: files,
          $file: file,
          $newFiles: newFiles,
          $duplicateFiles: dupFiles,
          $invalidFiles: invalidFiles,
          $invalidFile: invalidFile,
          $event: evt
        });
      }

      var invalidModel = upload.attrGetter('ngfModelInvalid', attr);
      if (invalidModel) {
        $timeout(function () {
          $parse(invalidModel).assign(scope, isSingleModel ? invalidFile : invalidFiles);
        });
      }
      $timeout(function () {
        // scope apply changes
      });
    }

    var allNewFiles, dupFiles = [], prevValidFiles, prevInvalidFiles,
      invalids = [], valids = [];

    function removeDuplicates() {
      function equals(f1, f2) {
        return f1.name === f2.name && (f1.$ngfOrigSize || f1.size) === (f2.$ngfOrigSize || f2.size) &&
          f1.type === f2.type;
      }

      function isInPrevFiles(f) {
        var j;
        for (j = 0; j < prevValidFiles.length; j++) {
          if (equals(f, prevValidFiles[j])) {
            return true;
          }
        }
        for (j = 0; j < prevInvalidFiles.length; j++) {
          if (equals(f, prevInvalidFiles[j])) {
            return true;
          }
        }
        return false;
      }

      if (files) {
        allNewFiles = [];
        dupFiles = [];
        for (var i = 0; i < files.length; i++) {
          if (isInPrevFiles(files[i])) {
            dupFiles.push(files[i]);
          } else {
            allNewFiles.push(files[i]);
          }
        }
      }
    }

    function toArray(v) {
      return angular.isArray(v) ? v : [v];
    }

    function resizeAndUpdate() {
      function updateModel() {
        $timeout(function () {
          update(keep ? prevValidFiles.concat(valids) : valids,
            keep ? prevInvalidFiles.concat(invalids) : invalids,
            files, dupFiles, isSingleModel);
        }, options && options.debounce ? options.debounce.change || options.debounce : 0);
      }

      var resizingFiles = validateAfterResize ? allNewFiles : valids;
      resizeFile(resizingFiles, attr, scope, ngModel).then(function () {
        if (validateAfterResize) {
          upload.validate(allNewFiles, keep ? prevValidFiles.length : 0, ngModel, attr, scope)
            .then(function (validationResult) {
              valids = validationResult.validsFiles;
              invalids = validationResult.invalidsFiles;
              updateModel();
            });
        } else {
          updateModel();
        }
      }, function () {
        for (var i = 0; i < resizingFiles.length; i++) {
          var f = resizingFiles[i];
          if (f.$error === 'resize') {
            var index = valids.indexOf(f);
            if (index > -1) {
              valids.splice(index, 1);
              invalids.push(f);
            }
            updateModel();
          }
        }
      });
    }

    prevValidFiles = attr.$$ngfPrevValidFiles || [];
    prevInvalidFiles = attr.$$ngfPrevInvalidFiles || [];
    if (ngModel && ngModel.$modelValue) {
      prevValidFiles = toArray(ngModel.$modelValue);
    }

    var keep = upload.attrGetter('ngfKeep', attr, scope);
    allNewFiles = (files || []).slice(0);
    if (keep === 'distinct' || upload.attrGetter('ngfKeepDistinct', attr, scope) === true) {
      removeDuplicates(attr, scope);
    }

    var isSingleModel = !keep && !upload.attrGetter('ngfMultiple', attr, scope) && !upload.attrGetter('multiple', attr);

    if (keep && !allNewFiles.length) return;

    upload.attrGetter('ngfBeforeModelChange', attr, scope, {
      $files: files,
      $file: files && files.length ? files[0] : null,
      $newFiles: allNewFiles,
      $duplicateFiles: dupFiles,
      $event: evt
    });

    var validateAfterResize = upload.attrGetter('ngfValidateAfterResize', attr, scope);

    var options = upload.attrGetter('ngfModelOptions', attr, scope);
    upload.validate(allNewFiles, keep ? prevValidFiles.length : 0, ngModel, attr, scope)
      .then(function (validationResult) {
      if (noDelay) {
        update(allNewFiles, [], files, dupFiles, isSingleModel);
      } else {
        if ((!options || !options.allowInvalid) && !validateAfterResize) {
          valids = validationResult.validFiles;
          invalids = validationResult.invalidFiles;
        } else {
          valids = allNewFiles;
        }
        if (upload.attrGetter('ngfFixOrientation', attr, scope) && upload.isExifSupported()) {
          applyExifRotations(valids, attr, scope).then(function () {
            resizeAndUpdate();
          });
        } else {
          resizeAndUpdate();
        }
      }
    });
  };

  return upload;
}]);

ngFileUpload.directive('ngfSelect', ['$parse', '$timeout', '$compile', 'Upload', function ($parse, $timeout, $compile, Upload) {
  var generatedElems = [];

  function isDelayedClickSupported(ua) {
    // fix for android native browser < 4.4 and safari windows
    var m = ua.match(/Android[^\d]*(\d+)\.(\d+)/);
    if (m && m.length > 2) {
      var v = Upload.defaults.androidFixMinorVersion || 4;
      return parseInt(m[1]) < 4 || (parseInt(m[1]) === v && parseInt(m[2]) < v);
    }

    // safari on windows
    return ua.indexOf('Chrome') === -1 && /.*Windows.*Safari.*/.test(ua);
  }

  function linkFileSelect(scope, elem, attr, ngModel, $parse, $timeout, $compile, upload) {
    /** @namespace attr.ngfSelect */
    /** @namespace attr.ngfChange */
    /** @namespace attr.ngModel */
    /** @namespace attr.ngfModelOptions */
    /** @namespace attr.ngfMultiple */
    /** @namespace attr.ngfCapture */
    /** @namespace attr.ngfValidate */
    /** @namespace attr.ngfKeep */
    var attrGetter = function (name, scope) {
      return upload.attrGetter(name, attr, scope);
    };

    function isInputTypeFile() {
      return elem[0].tagName.toLowerCase() === 'input' && attr.type && attr.type.toLowerCase() === 'file';
    }

    function fileChangeAttr() {
      return attrGetter('ngfChange') || attrGetter('ngfSelect');
    }

    function changeFn(evt) {
      if (upload.shouldUpdateOn('change', attr, scope)) {
        var fileList = evt.__files_ || (evt.target && evt.target.files), files = [];
        /* Handle duplicate call in  IE11 */
        if (!fileList) return;
        for (var i = 0; i < fileList.length; i++) {
          files.push(fileList[i]);
        }
        upload.updateModel(ngModel, attr, scope, fileChangeAttr(),
          files.length ? files : null, evt);
      }
    }

    upload.registerModelChangeValidator(ngModel, attr, scope);

    var unwatches = [];
    if (attrGetter('ngfMultiple')) {
      unwatches.push(scope.$watch(attrGetter('ngfMultiple'), function () {
        fileElem.attr('multiple', attrGetter('ngfMultiple', scope));
      }));
    }
    if (attrGetter('ngfCapture')) {
      unwatches.push(scope.$watch(attrGetter('ngfCapture'), function () {
        fileElem.attr('capture', attrGetter('ngfCapture', scope));
      }));
    }
    if (attrGetter('ngfAccept')) {
      unwatches.push(scope.$watch(attrGetter('ngfAccept'), function () {
        fileElem.attr('accept', attrGetter('ngfAccept', scope));
      }));
    }
    unwatches.push(attr.$observe('accept', function () {
      fileElem.attr('accept', attrGetter('accept'));
    }));
    function bindAttrToFileInput(fileElem, label) {
      function updateId(val) {
        fileElem.attr('id', 'ngf-' + val);
        label.attr('id', 'ngf-label-' + val);
      }

      for (var i = 0; i < elem[0].attributes.length; i++) {
        var attribute = elem[0].attributes[i];
        if (attribute.name !== 'type' && attribute.name !== 'class' && attribute.name !== 'style') {
          if (attribute.name === 'id') {
            updateId(attribute.value);
            unwatches.push(attr.$observe('id', updateId));
          } else {
            fileElem.attr(attribute.name, (!attribute.value && (attribute.name === 'required' ||
            attribute.name === 'multiple')) ? attribute.name : attribute.value);
          }
        }
      }
    }

    function createFileInput() {
      if (isInputTypeFile()) {
        return elem;
      }

      var fileElem = angular.element('<input type="file">');

      var label = angular.element('<label>upload</label>');
      label.css('visibility', 'hidden').css('position', 'absolute').css('overflow', 'hidden')
        .css('width', '0px').css('height', '0px').css('border', 'none')
        .css('margin', '0px').css('padding', '0px').attr('tabindex', '-1');
      bindAttrToFileInput(fileElem, label);

      generatedElems.push({el: elem, ref: label});

      document.body.appendChild(label.append(fileElem)[0]);

      return fileElem;
    }

    function clickHandler(evt) {
      if (elem.attr('disabled')) return false;
      if (attrGetter('ngfSelectDisabled', scope)) return;

      var r = detectSwipe(evt);
      // prevent the click if it is a swipe
      if (r != null) return r;

      resetModel(evt);

      // fix for md when the element is removed from the DOM and added back #460
      try {
        if (!isInputTypeFile() && !document.body.contains(fileElem[0])) {
          generatedElems.push({el: elem, ref: fileElem.parent()});
          document.body.appendChild(fileElem.parent()[0]);
          fileElem.bind('change', changeFn);
        }
      } catch (e) {/*ignore*/
      }

      if (isDelayedClickSupported(navigator.userAgent)) {
        setTimeout(function () {
          fileElem[0].click();
        }, 0);
      } else {
        fileElem[0].click();
      }

      return false;
    }


    var initialTouchStartY = 0;
    var initialTouchStartX = 0;

    function detectSwipe(evt) {
      var touches = evt.changedTouches || (evt.originalEvent && evt.originalEvent.changedTouches);
      if (touches) {
        if (evt.type === 'touchstart') {
          initialTouchStartX = touches[0].clientX;
          initialTouchStartY = touches[0].clientY;
          return true; // don't block event default
        } else {
          // prevent scroll from triggering event
          if (evt.type === 'touchend') {
            var currentX = touches[0].clientX;
            var currentY = touches[0].clientY;
            if ((Math.abs(currentX - initialTouchStartX) > 20) ||
              (Math.abs(currentY - initialTouchStartY) > 20)) {
              evt.stopPropagation();
              evt.preventDefault();
              return false;
            }
          }
          return true;
        }
      }
    }

    var fileElem = elem;

    function resetModel(evt) {
      if (upload.shouldUpdateOn('click', attr, scope) && fileElem.val()) {
        fileElem.val(null);
        upload.updateModel(ngModel, attr, scope, fileChangeAttr(), null, evt, true);
      }
    }

    if (!isInputTypeFile()) {
      fileElem = createFileInput();
    }
    fileElem.bind('change', changeFn);

    if (!isInputTypeFile()) {
      elem.bind('click touchstart touchend', clickHandler);
    } else {
      elem.bind('click', resetModel);
    }

    function ie10SameFileSelectFix(evt) {
      if (fileElem && !fileElem.attr('__ngf_ie10_Fix_')) {
        if (!fileElem[0].parentNode) {
          fileElem = null;
          return;
        }
        evt.preventDefault();
        evt.stopPropagation();
        fileElem.unbind('click');
        var clone = fileElem.clone();
        fileElem.replaceWith(clone);
        fileElem = clone;
        fileElem.attr('__ngf_ie10_Fix_', 'true');
        fileElem.bind('change', changeFn);
        fileElem.bind('click', ie10SameFileSelectFix);
        fileElem[0].click();
        return false;
      } else {
        fileElem.removeAttr('__ngf_ie10_Fix_');
      }
    }

    if (navigator.appVersion.indexOf('MSIE 10') !== -1) {
      fileElem.bind('click', ie10SameFileSelectFix);
    }

    if (ngModel) ngModel.$formatters.push(function (val) {
      if (val == null || val.length === 0) {
        if (fileElem.val()) {
          fileElem.val(null);
        }
      }
      return val;
    });

    scope.$on('$destroy', function () {
      if (!isInputTypeFile()) fileElem.parent().remove();
      angular.forEach(unwatches, function (unwatch) {
        unwatch();
      });
    });

    $timeout(function () {
      for (var i = 0; i < generatedElems.length; i++) {
        var g = generatedElems[i];
        if (!document.body.contains(g.el[0])) {
          generatedElems.splice(i, 1);
          g.ref.remove();
        }
      }
    });

    if (window.FileAPI && window.FileAPI.ngfFixIE) {
      window.FileAPI.ngfFixIE(elem, fileElem, changeFn);
    }
  }

  return {
    restrict: 'AEC',
    require: '?ngModel',
    link: function (scope, elem, attr, ngModel) {
      linkFileSelect(scope, elem, attr, ngModel, $parse, $timeout, $compile, Upload);
    }
  };
}]);

(function () {

  ngFileUpload.service('UploadDataUrl', ['UploadBase', '$timeout', '$q', function (UploadBase, $timeout, $q) {
    var upload = UploadBase;
    upload.base64DataUrl = function (file) {
      if (angular.isArray(file)) {
        var d = $q.defer(), count = 0;
        angular.forEach(file, function (f) {
          upload.dataUrl(f, true)['finally'](function () {
            count++;
            if (count === file.length) {
              var urls = [];
              angular.forEach(file, function (ff) {
                urls.push(ff.$ngfDataUrl);
              });
              d.resolve(urls, file);
            }
          });
        });
        return d.promise;
      } else {
        return upload.dataUrl(file, true);
      }
    };
    upload.dataUrl = function (file, disallowObjectUrl) {
      if (!file) return upload.emptyPromise(file, file);
      if ((disallowObjectUrl && file.$ngfDataUrl != null) || (!disallowObjectUrl && file.$ngfBlobUrl != null)) {
        return upload.emptyPromise(disallowObjectUrl ? file.$ngfDataUrl : file.$ngfBlobUrl, file);
      }
      var p = disallowObjectUrl ? file.$$ngfDataUrlPromise : file.$$ngfBlobUrlPromise;
      if (p) return p;

      var deferred = $q.defer();
      $timeout(function () {
        if (window.FileReader && file &&
          (!window.FileAPI || navigator.userAgent.indexOf('MSIE 8') === -1 || file.size < 20000) &&
          (!window.FileAPI || navigator.userAgent.indexOf('MSIE 9') === -1 || file.size < 4000000)) {
          //prefer URL.createObjectURL for handling refrences to files of all sizes
          //since it doesn´t build a large string in memory
          var URL = window.URL || window.webkitURL;
          if (URL && URL.createObjectURL && !disallowObjectUrl) {
            var url;
            try {
              url = URL.createObjectURL(file);
            } catch (e) {
              $timeout(function () {
                file.$ngfBlobUrl = '';
                deferred.reject();
              });
              return;
            }
            $timeout(function () {
              file.$ngfBlobUrl = url;
              if (url) {
                deferred.resolve(url, file);
                upload.blobUrls = upload.blobUrls || [];
                upload.blobUrlsTotalSize = upload.blobUrlsTotalSize || 0;
                upload.blobUrls.push({url: url, size: file.size});
                upload.blobUrlsTotalSize += file.size || 0;
                var maxMemory = upload.defaults.blobUrlsMaxMemory || 268435456;
                var maxLength = upload.defaults.blobUrlsMaxQueueSize || 200;
                while ((upload.blobUrlsTotalSize > maxMemory || upload.blobUrls.length > maxLength) && upload.blobUrls.length > 1) {
                  var obj = upload.blobUrls.splice(0, 1)[0];
                  URL.revokeObjectURL(obj.url);
                  upload.blobUrlsTotalSize -= obj.size;
                }
              }
            });
          } else {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
              $timeout(function () {
                file.$ngfDataUrl = e.target.result;
                deferred.resolve(e.target.result, file);
                $timeout(function () {
                  delete file.$ngfDataUrl;
                }, 1000);
              });
            };
            fileReader.onerror = function () {
              $timeout(function () {
                file.$ngfDataUrl = '';
                deferred.reject();
              });
            };
            fileReader.readAsDataURL(file);
          }
        } else {
          $timeout(function () {
            file[disallowObjectUrl ? '$ngfDataUrl' : '$ngfBlobUrl'] = '';
            deferred.reject();
          });
        }
      });

      if (disallowObjectUrl) {
        p = file.$$ngfDataUrlPromise = deferred.promise;
      } else {
        p = file.$$ngfBlobUrlPromise = deferred.promise;
      }
      p['finally'](function () {
        delete file[disallowObjectUrl ? '$$ngfDataUrlPromise' : '$$ngfBlobUrlPromise'];
      });
      return p;
    };
    return upload;
  }]);

  function getTagType(el) {
    if (el.tagName.toLowerCase() === 'img') return 'image';
    if (el.tagName.toLowerCase() === 'audio') return 'audio';
    if (el.tagName.toLowerCase() === 'video') return 'video';
    return /./;
  }

  function linkFileDirective(Upload, $timeout, scope, elem, attr, directiveName, resizeParams, isBackground) {
    function constructDataUrl(file) {
      var disallowObjectUrl = Upload.attrGetter('ngfNoObjectUrl', attr, scope);
      Upload.dataUrl(file, disallowObjectUrl)['finally'](function () {
        $timeout(function () {
          var src = (disallowObjectUrl ? file.$ngfDataUrl : file.$ngfBlobUrl) || file.$ngfDataUrl;
          if (isBackground) {
            elem.css('background-image', 'url(\'' + (src || '') + '\')');
          } else {
            elem.attr('src', src);
          }
          if (src) {
            elem.removeClass('ng-hide');
          } else {
            elem.addClass('ng-hide');
          }
        });
      });
    }

    $timeout(function () {
      var unwatch = scope.$watch(attr[directiveName], function (file) {
        var size = resizeParams;
        if (directiveName === 'ngfThumbnail') {
          if (!size) {
            size = {
              width: elem[0].naturalWidth || elem[0].clientWidth,
              height: elem[0].naturalHeight || elem[0].clientHeight
            };
          }
          if (size.width === 0 && window.getComputedStyle) {
            var style = getComputedStyle(elem[0]);
            if (style.width && style.width.indexOf('px') > -1 && style.height && style.height.indexOf('px') > -1) {
              size = {
                width: parseInt(style.width.slice(0, -2)),
                height: parseInt(style.height.slice(0, -2))
              };
            }
          }
        }

        if (angular.isString(file)) {
          elem.removeClass('ng-hide');
          if (isBackground) {
            return elem.css('background-image', 'url(\'' + file + '\')');
          } else {
            return elem.attr('src', file);
          }
        }
        if (file && file.type && file.type.search(getTagType(elem[0])) === 0 &&
          (!isBackground || file.type.indexOf('image') === 0)) {
          if (size && Upload.isResizeSupported()) {
            size.resizeIf = function (width, height) {
              return Upload.attrGetter('ngfResizeIf', attr, scope,
                {$width: width, $height: height, $file: file});
            };
            Upload.resize(file, size).then(
              function (f) {
                constructDataUrl(f);
              }, function (e) {
                throw e;
              }
            );
          } else {
            constructDataUrl(file);
          }
        } else {
          elem.addClass('ng-hide');
        }
      });

      scope.$on('$destroy', function () {
        unwatch();
      });
    });
  }


  /** @namespace attr.ngfSrc */
  /** @namespace attr.ngfNoObjectUrl */
  ngFileUpload.directive('ngfSrc', ['Upload', '$timeout', function (Upload, $timeout) {
    return {
      restrict: 'AE',
      link: function (scope, elem, attr) {
        linkFileDirective(Upload, $timeout, scope, elem, attr, 'ngfSrc',
          Upload.attrGetter('ngfResize', attr, scope), false);
      }
    };
  }]);

  /** @namespace attr.ngfBackground */
  /** @namespace attr.ngfNoObjectUrl */
  ngFileUpload.directive('ngfBackground', ['Upload', '$timeout', function (Upload, $timeout) {
    return {
      restrict: 'AE',
      link: function (scope, elem, attr) {
        linkFileDirective(Upload, $timeout, scope, elem, attr, 'ngfBackground',
          Upload.attrGetter('ngfResize', attr, scope), true);
      }
    };
  }]);

  /** @namespace attr.ngfThumbnail */
  /** @namespace attr.ngfAsBackground */
  /** @namespace attr.ngfSize */
  /** @namespace attr.ngfNoObjectUrl */
  ngFileUpload.directive('ngfThumbnail', ['Upload', '$timeout', function (Upload, $timeout) {
    return {
      restrict: 'AE',
      link: function (scope, elem, attr) {
        var size = Upload.attrGetter('ngfSize', attr, scope);
        linkFileDirective(Upload, $timeout, scope, elem, attr, 'ngfThumbnail', size,
          Upload.attrGetter('ngfAsBackground', attr, scope));
      }
    };
  }]);

  ngFileUpload.config(['$compileProvider', function ($compileProvider) {
    if ($compileProvider.imgSrcSanitizationWhitelist) $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/);
    if ($compileProvider.aHrefSanitizationWhitelist) $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/);
  }]);

  ngFileUpload.filter('ngfDataUrl', ['UploadDataUrl', '$sce', function (UploadDataUrl, $sce) {
    return function (file, disallowObjectUrl, trustedUrl) {
      if (angular.isString(file)) {
        return $sce.trustAsResourceUrl(file);
      }
      var src = file && ((disallowObjectUrl ? file.$ngfDataUrl : file.$ngfBlobUrl) || file.$ngfDataUrl);
      if (file && !src) {
        if (!file.$ngfDataUrlFilterInProgress && angular.isObject(file)) {
          file.$ngfDataUrlFilterInProgress = true;
          UploadDataUrl.dataUrl(file, disallowObjectUrl);
        }
        return '';
      }
      if (file) delete file.$ngfDataUrlFilterInProgress;
      return (file && src ? (trustedUrl ? $sce.trustAsResourceUrl(src) : src) : file) || '';
    };
  }]);

})();

ngFileUpload.service('UploadValidate', ['UploadDataUrl', '$q', '$timeout', function (UploadDataUrl, $q, $timeout) {
  var upload = UploadDataUrl;

  function globStringToRegex(str) {
    var regexp = '', excludes = [];
    if (str.length > 2 && str[0] === '/' && str[str.length - 1] === '/') {
      regexp = str.substring(1, str.length - 1);
    } else {
      var split = str.split(',');
      if (split.length > 1) {
        for (var i = 0; i < split.length; i++) {
          var r = globStringToRegex(split[i]);
          if (r.regexp) {
            regexp += '(' + r.regexp + ')';
            if (i < split.length - 1) {
              regexp += '|';
            }
          } else {
            excludes = excludes.concat(r.excludes);
          }
        }
      } else {
        if (str.indexOf('!') === 0) {
          excludes.push('^((?!' + globStringToRegex(str.substring(1)).regexp + ').)*$');
        } else {
          if (str.indexOf('.') === 0) {
            str = '*' + str;
          }
          regexp = '^' + str.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&') + '$';
          regexp = regexp.replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
        }
      }
    }
    return {regexp: regexp, excludes: excludes};
  }

  upload.validatePattern = function (file, val) {
    if (!val) {
      return true;
    }
    var pattern = globStringToRegex(val), valid = true;
    if (pattern.regexp && pattern.regexp.length) {
      var regexp = new RegExp(pattern.regexp, 'i');
      valid = (file.type != null && regexp.test(file.type)) ||
        (file.name != null && regexp.test(file.name));
    }
    var len = pattern.excludes.length;
    while (len--) {
      var exclude = new RegExp(pattern.excludes[len], 'i');
      valid = valid && (file.type == null || exclude.test(file.type)) &&
        (file.name == null || exclude.test(file.name));
    }
    return valid;
  };

  upload.ratioToFloat = function (val) {
    var r = val.toString(), xIndex = r.search(/[x:]/i);
    if (xIndex > -1) {
      r = parseFloat(r.substring(0, xIndex)) / parseFloat(r.substring(xIndex + 1));
    } else {
      r = parseFloat(r);
    }
    return r;
  };

  upload.registerModelChangeValidator = function (ngModel, attr, scope) {
    if (ngModel) {
      ngModel.$formatters.push(function (files) {
        if (ngModel.$dirty) {
          var filesArray = files;
          if (files && !angular.isArray(files)) {
            filesArray = [files];
          }
          upload.validate(filesArray, 0, ngModel, attr, scope).then(function () {
            upload.applyModelValidation(ngModel, filesArray);
          });
        }
        return files;
      });
    }
  };

  function markModelAsDirty(ngModel, files) {
    if (files != null && !ngModel.$dirty) {
      if (ngModel.$setDirty) {
        ngModel.$setDirty();
      } else {
        ngModel.$dirty = true;
      }
    }
  }

  upload.applyModelValidation = function (ngModel, files) {
    markModelAsDirty(ngModel, files);
    angular.forEach(ngModel.$ngfValidations, function (validation) {
      ngModel.$setValidity(validation.name, validation.valid);
    });
  };

  upload.getValidationAttr = function (attr, scope, name, validationName, file) {
    var dName = 'ngf' + name[0].toUpperCase() + name.substr(1);
    var val = upload.attrGetter(dName, attr, scope, {$file: file});
    if (val == null) {
      val = upload.attrGetter('ngfValidate', attr, scope, {$file: file});
      if (val) {
        var split = (validationName || name).split('.');
        val = val[split[0]];
        if (split.length > 1) {
          val = val && val[split[1]];
        }
      }
    }
    return val;
  };

  upload.validate = function (files, prevLength, ngModel, attr, scope) {
    ngModel = ngModel || {};
    ngModel.$ngfValidations = ngModel.$ngfValidations || [];

    angular.forEach(ngModel.$ngfValidations, function (v) {
      v.valid = true;
    });

    var attrGetter = function (name, params) {
      return upload.attrGetter(name, attr, scope, params);
    };

    var ignoredErrors = (upload.attrGetter('ngfIgnoreInvalid', attr, scope) || '').split(' ');
    var runAllValidation = upload.attrGetter('ngfRunAllValidations', attr, scope);

    if (files == null || files.length === 0) {
      return upload.emptyPromise({'validFiles': files, 'invalidFiles': []});
    }

    files = files.length === undefined ? [files] : files.slice(0);
    var invalidFiles = [];

    function validateSync(name, validationName, fn) {
      if (files) {
        var i = files.length, valid = null;
        while (i--) {
          var file = files[i];
          if (file) {
            var val = upload.getValidationAttr(attr, scope, name, validationName, file);
            if (val != null) {
              if (!fn(file, val, i)) {
                if (ignoredErrors.indexOf(name) === -1) {
                  file.$error = name;
                  (file.$errorMessages = (file.$errorMessages || {}))[name] = true;
                  file.$errorParam = val;
                  if (invalidFiles.indexOf(file) === -1) {
                    invalidFiles.push(file);
                  }
                  if (!runAllValidation) {
                    files.splice(i, 1);
                  }
                  valid = false;
                } else {
                  files.splice(i, 1);
                }
              }
            }
          }
        }
        if (valid !== null) {
          ngModel.$ngfValidations.push({name: name, valid: valid});
        }
      }
    }

    validateSync('pattern', null, upload.validatePattern);
    validateSync('minSize', 'size.min', function (file, val) {
      return file.size + 0.1 >= upload.translateScalars(val);
    });
    validateSync('maxSize', 'size.max', function (file, val) {
      return file.size - 0.1 <= upload.translateScalars(val);
    });
    var totalSize = 0;
    validateSync('maxTotalSize', null, function (file, val) {
      totalSize += file.size;
      if (totalSize > upload.translateScalars(val)) {
        files.splice(0, files.length);
        return false;
      }
      return true;
    });

    validateSync('validateFn', null, function (file, r) {
      return r === true || r === null || r === '';
    });

    if (!files.length) {
      return upload.emptyPromise({'validFiles': [], 'invalidFiles': invalidFiles});
    }

    function validateAsync(name, validationName, type, asyncFn, fn) {
      function resolveResult(defer, file, val) {
        function resolveInternal(fn) {
          if (fn()) {
            if (ignoredErrors.indexOf(name) === -1) {
              file.$error = name;
              (file.$errorMessages = (file.$errorMessages || {}))[name] = true;
              file.$errorParam = val;
              if (invalidFiles.indexOf(file) === -1) {
                invalidFiles.push(file);
              }
              if (!runAllValidation) {
                var i = files.indexOf(file);
                if (i > -1) files.splice(i, 1);
              }
              defer.resolve(false);
            } else {
              var j = files.indexOf(file);
              if (j > -1) files.splice(j, 1);
              defer.resolve(true);
            }
          } else {
            defer.resolve(true);
          }
        }

        if (val != null) {
          asyncFn(file, val).then(function (d) {
            resolveInternal(function () {
              return !fn(d, val);
            });
          }, function () {
            resolveInternal(function () {
              return attrGetter('ngfValidateForce', {$file: file});
            });
          });
        } else {
          defer.resolve(true);
        }
      }

      var promises = [upload.emptyPromise(true)];
      if (files) {
        files = files.length === undefined ? [files] : files;
        angular.forEach(files, function (file) {
          var defer = $q.defer();
          promises.push(defer.promise);
          if (type && (file.type == null || file.type.search(type) !== 0)) {
            defer.resolve(true);
            return;
          }
          if (name === 'dimensions' && upload.attrGetter('ngfDimensions', attr) != null) {
            upload.imageDimensions(file).then(function (d) {
              resolveResult(defer, file,
                attrGetter('ngfDimensions', {$file: file, $width: d.width, $height: d.height}));
            }, function () {
              defer.resolve(false);
            });
          } else if (name === 'duration' && upload.attrGetter('ngfDuration', attr) != null) {
            upload.mediaDuration(file).then(function (d) {
              resolveResult(defer, file,
                attrGetter('ngfDuration', {$file: file, $duration: d}));
            }, function () {
              defer.resolve(false);
            });
          } else {
            resolveResult(defer, file,
              upload.getValidationAttr(attr, scope, name, validationName, file));
          }
        });
      }
      var deffer = $q.defer();
      $q.all(promises).then(function (values) {
        var isValid = true;
        for (var i = 0; i < values.length; i++) {
          if (!values[i]) {
            isValid = false;
            break;
          }
        }
        ngModel.$ngfValidations.push({name: name, valid: isValid});
        deffer.resolve(isValid);
      });
      return deffer.promise;
    }

    var deffer = $q.defer();
    var promises = [];

    promises.push(validateAsync('maxHeight', 'height.max', /image/,
      this.imageDimensions, function (d, val) {
        return d.height <= val;
      }));
    promises.push(validateAsync('minHeight', 'height.min', /image/,
      this.imageDimensions, function (d, val) {
        return d.height >= val;
      }));
    promises.push(validateAsync('maxWidth', 'width.max', /image/,
      this.imageDimensions, function (d, val) {
        return d.width <= val;
      }));
    promises.push(validateAsync('minWidth', 'width.min', /image/,
      this.imageDimensions, function (d, val) {
        return d.width >= val;
      }));
    promises.push(validateAsync('dimensions', null, /image/,
      function (file, val) {
        return upload.emptyPromise(val);
      }, function (r) {
        return r;
      }));
    promises.push(validateAsync('ratio', null, /image/,
      this.imageDimensions, function (d, val) {
        var split = val.toString().split(','), valid = false;
        for (var i = 0; i < split.length; i++) {
          if (Math.abs((d.width / d.height) - upload.ratioToFloat(split[i])) < 0.01) {
            valid = true;
          }
        }
        return valid;
      }));
    promises.push(validateAsync('maxRatio', 'ratio.max', /image/,
      this.imageDimensions, function (d, val) {
        return (d.width / d.height) - upload.ratioToFloat(val) < 0.0001;
      }));
    promises.push(validateAsync('minRatio', 'ratio.min', /image/,
      this.imageDimensions, function (d, val) {
        return (d.width / d.height) - upload.ratioToFloat(val) > -0.0001;
      }));
    promises.push(validateAsync('maxDuration', 'duration.max', /audio|video/,
      this.mediaDuration, function (d, val) {
        return d <= upload.translateScalars(val);
      }));
    promises.push(validateAsync('minDuration', 'duration.min', /audio|video/,
      this.mediaDuration, function (d, val) {
        return d >= upload.translateScalars(val);
      }));
    promises.push(validateAsync('duration', null, /audio|video/,
      function (file, val) {
        return upload.emptyPromise(val);
      }, function (r) {
        return r;
      }));

    promises.push(validateAsync('validateAsyncFn', null, null,
      function (file, val) {
        return val;
      }, function (r) {
        return r === true || r === null || r === '';
      }));

    $q.all(promises).then(function () {

      if (runAllValidation) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (file.$error) {
            files.splice(i--, 1);
          }
        }
      }

      runAllValidation = false;
      validateSync('maxFiles', null, function (file, val, i) {
        return prevLength + i < val;
      });

      deffer.resolve({'validFiles': files, 'invalidFiles': invalidFiles});
    });
    return deffer.promise;
  };

  upload.imageDimensions = function (file) {
    if (file.$ngfWidth && file.$ngfHeight) {
      var d = $q.defer();
      $timeout(function () {
        d.resolve({width: file.$ngfWidth, height: file.$ngfHeight});
      });
      return d.promise;
    }
    if (file.$ngfDimensionPromise) return file.$ngfDimensionPromise;

    var deferred = $q.defer();
    $timeout(function () {
      if (file.type.indexOf('image') !== 0) {
        deferred.reject('not image');
        return;
      }
      upload.dataUrl(file).then(function (dataUrl) {
        var img = angular.element('<img>').attr('src', dataUrl)
          .css('visibility', 'hidden').css('position', 'fixed')
          .css('max-width', 'none !important').css('max-height', 'none !important');

        function success() {
          var width = img[0].naturalWidth || img[0].clientWidth;
          var height = img[0].naturalHeight || img[0].clientHeight;
          img.remove();
          file.$ngfWidth = width;
          file.$ngfHeight = height;
          deferred.resolve({width: width, height: height});
        }

        function error() {
          img.remove();
          deferred.reject('load error');
        }

        img.on('load', success);
        img.on('error', error);

        var secondsCounter = 0;
        function checkLoadErrorInCaseOfNoCallback() {
          $timeout(function () {
            if (img[0].parentNode) {
              if (img[0].clientWidth) {
                success();
              } else if (secondsCounter++ > 10) {
                error();
              } else {
                checkLoadErrorInCaseOfNoCallback();
              }
            }
          }, 1000);
        }

        checkLoadErrorInCaseOfNoCallback();

        angular.element(document.getElementsByTagName('body')[0]).append(img);
      }, function () {
        deferred.reject('load error');
      });
    });

    file.$ngfDimensionPromise = deferred.promise;
    file.$ngfDimensionPromise['finally'](function () {
      delete file.$ngfDimensionPromise;
    });
    return file.$ngfDimensionPromise;
  };

  upload.mediaDuration = function (file) {
    if (file.$ngfDuration) {
      var d = $q.defer();
      $timeout(function () {
        d.resolve(file.$ngfDuration);
      });
      return d.promise;
    }
    if (file.$ngfDurationPromise) return file.$ngfDurationPromise;

    var deferred = $q.defer();
    $timeout(function () {
      if (file.type.indexOf('audio') !== 0 && file.type.indexOf('video') !== 0) {
        deferred.reject('not media');
        return;
      }
      upload.dataUrl(file).then(function (dataUrl) {
        var el = angular.element(file.type.indexOf('audio') === 0 ? '<audio>' : '<video>')
          .attr('src', dataUrl).css('visibility', 'none').css('position', 'fixed');

        function success() {
          var duration = el[0].duration;
          file.$ngfDuration = duration;
          el.remove();
          deferred.resolve(duration);
        }

        function error() {
          el.remove();
          deferred.reject('load error');
        }

        el.on('loadedmetadata', success);
        el.on('error', error);
        var count = 0;

        function checkLoadError() {
          $timeout(function () {
            if (el[0].parentNode) {
              if (el[0].duration) {
                success();
              } else if (count > 10) {
                error();
              } else {
                checkLoadError();
              }
            }
          }, 1000);
        }

        checkLoadError();

        angular.element(document.body).append(el);
      }, function () {
        deferred.reject('load error');
      });
    });

    file.$ngfDurationPromise = deferred.promise;
    file.$ngfDurationPromise['finally'](function () {
      delete file.$ngfDurationPromise;
    });
    return file.$ngfDurationPromise;
  };
  return upload;
}
]);

ngFileUpload.service('UploadResize', ['UploadValidate', '$q', function (UploadValidate, $q) {
  var upload = UploadValidate;

  /**
   * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
   * images to fit into a certain area.
   * Source:  http://stackoverflow.com/a/14731922
   *
   * @param {Number} srcWidth Source area width
   * @param {Number} srcHeight Source area height
   * @param {Number} maxWidth Nestable area maximum available width
   * @param {Number} maxHeight Nestable area maximum available height
   * @return {Object} { width, height }
   */
  var calculateAspectRatioFit = function (srcWidth, srcHeight, maxWidth, maxHeight, centerCrop) {
    var ratio = centerCrop ? Math.max(maxWidth / srcWidth, maxHeight / srcHeight) :
      Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return {
      width: srcWidth * ratio, height: srcHeight * ratio,
      marginX: srcWidth * ratio - maxWidth, marginY: srcHeight * ratio - maxHeight
    };
  };

  // Extracted from https://github.com/romelgomez/angular-firebase-image-upload/blob/master/app/scripts/fileUpload.js#L89
  var resize = function (imagen, width, height, quality, type, ratio, centerCrop, resizeIf) {
    var deferred = $q.defer();
    var canvasElement = document.createElement('canvas');
    var imageElement = document.createElement('img');
    imageElement.setAttribute('style', 'visibility:hidden;position:fixed;z-index:-100000');
    document.body.appendChild(imageElement);

    imageElement.onload = function () {
      var imgWidth = imageElement.width, imgHeight = imageElement.height;
      imageElement.parentNode.removeChild(imageElement);
      if (resizeIf != null && resizeIf(imgWidth, imgHeight) === false) {
        deferred.reject('resizeIf');
        return;
      }
      try {
        if (ratio) {
          var ratioFloat = upload.ratioToFloat(ratio);
          var imgRatio = imgWidth / imgHeight;
          if (imgRatio < ratioFloat) {
            width = imgWidth;
            height = width / ratioFloat;
          } else {
            height = imgHeight;
            width = height * ratioFloat;
          }
        }
        if (!width) {
          width = imgWidth;
        }
        if (!height) {
          height = imgHeight;
        }
        var dimensions = calculateAspectRatioFit(imgWidth, imgHeight, width, height, centerCrop);
        canvasElement.width = Math.min(dimensions.width, width);
        canvasElement.height = Math.min(dimensions.height, height);
        var context = canvasElement.getContext('2d');
        context.drawImage(imageElement,
          Math.min(0, -dimensions.marginX / 2), Math.min(0, -dimensions.marginY / 2),
          dimensions.width, dimensions.height);
        deferred.resolve(canvasElement.toDataURL(type || 'image/WebP', quality || 0.934));
      } catch (e) {
        deferred.reject(e);
      }
    };
    imageElement.onerror = function () {
      imageElement.parentNode.removeChild(imageElement);
      deferred.reject();
    };
    imageElement.src = imagen;
    return deferred.promise;
  };

  upload.dataUrltoBlob = function (dataurl, name, origSize) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    var blob = new window.Blob([u8arr], {type: mime});
    blob.name = name;
    blob.$ngfOrigSize = origSize;
    return blob;
  };

  upload.isResizeSupported = function () {
    var elem = document.createElement('canvas');
    return window.atob && elem.getContext && elem.getContext('2d') && window.Blob;
  };

  if (upload.isResizeSupported()) {
    // add name getter to the blob constructor prototype
    Object.defineProperty(window.Blob.prototype, 'name', {
      get: function () {
        return this.$ngfName;
      },
      set: function (v) {
        this.$ngfName = v;
      },
      configurable: true
    });
  }

  upload.resize = function (file, options) {
    if (file.type.indexOf('image') !== 0) return upload.emptyPromise(file);

    var deferred = $q.defer();
    upload.dataUrl(file, true).then(function (url) {
      resize(url, options.width, options.height, options.quality, options.type || file.type,
        options.ratio, options.centerCrop, options.resizeIf)
        .then(function (dataUrl) {
          if (file.type === 'image/jpeg' && options.restoreExif !== false) {
            try {
              dataUrl = upload.restoreExif(url, dataUrl);
            } catch (e) {
              setTimeout(function () {throw e;}, 1);
            }
          }
          try {
            var blob = upload.dataUrltoBlob(dataUrl, file.name, file.size);
            deferred.resolve(blob);
          } catch (e) {
            deferred.reject(e);
          }
        }, function (r) {
          if (r === 'resizeIf') {
            deferred.resolve(file);
          }
          deferred.reject(r);
        });
    }, function (e) {
      deferred.reject(e);
    });
    return deferred.promise;
  };

  return upload;
}]);

(function () {
  ngFileUpload.directive('ngfDrop', ['$parse', '$timeout', '$window', 'Upload', '$http', '$q',
    function ($parse, $timeout, $window, Upload, $http, $q) {
      return {
        restrict: 'AEC',
        require: '?ngModel',
        link: function (scope, elem, attr, ngModel) {
          linkDrop(scope, elem, attr, ngModel, $parse, $timeout, $window, Upload, $http, $q);
        }
      };
    }]);

  ngFileUpload.directive('ngfNoFileDrop', function () {
    return function (scope, elem) {
      if (dropAvailable()) elem.css('display', 'none');
    };
  });

  ngFileUpload.directive('ngfDropAvailable', ['$parse', '$timeout', 'Upload', function ($parse, $timeout, Upload) {
    return function (scope, elem, attr) {
      if (dropAvailable()) {
        var model = $parse(Upload.attrGetter('ngfDropAvailable', attr));
        $timeout(function () {
          model(scope);
          if (model.assign) {
            model.assign(scope, true);
          }
        });
      }
    };
  }]);

  function linkDrop(scope, elem, attr, ngModel, $parse, $timeout, $window, upload, $http, $q) {
    var available = dropAvailable();

    var attrGetter = function (name, scope, params) {
      return upload.attrGetter(name, attr, scope, params);
    };

    if (attrGetter('dropAvailable')) {
      $timeout(function () {
        if (scope[attrGetter('dropAvailable')]) {
          scope[attrGetter('dropAvailable')].value = available;
        } else {
          scope[attrGetter('dropAvailable')] = available;
        }
      });
    }
    if (!available) {
      if (attrGetter('ngfHideOnDropNotAvailable', scope) === true) {
        elem.css('display', 'none');
      }
      return;
    }

    function isDisabled() {
      return elem.attr('disabled') || attrGetter('ngfDropDisabled', scope);
    }

    if (attrGetter('ngfSelect') == null) {
      upload.registerModelChangeValidator(ngModel, attr, scope);
    }

    var leaveTimeout = null;
    var stopPropagation = $parse(attrGetter('ngfStopPropagation'));
    var dragOverDelay = 1;
    var actualDragOverClass;

    elem[0].addEventListener('dragover', function (evt) {
      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
      evt.preventDefault();
      if (stopPropagation(scope)) evt.stopPropagation();
      // handling dragover events from the Chrome download bar
      if (navigator.userAgent.indexOf('Chrome') > -1) {
        var b = evt.dataTransfer.effectAllowed;
        evt.dataTransfer.dropEffect = ('move' === b || 'linkMove' === b) ? 'move' : 'copy';
      }
      $timeout.cancel(leaveTimeout);
      if (!actualDragOverClass) {
        actualDragOverClass = 'C';
        calculateDragOverClass(scope, attr, evt, function (clazz) {
          actualDragOverClass = clazz;
          elem.addClass(actualDragOverClass);
          attrGetter('ngfDrag', scope, {$isDragging: true, $class: actualDragOverClass, $event: evt});
        });
      }
    }, false);
    elem[0].addEventListener('dragenter', function (evt) {
      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
      evt.preventDefault();
      if (stopPropagation(scope)) evt.stopPropagation();
    }, false);
    elem[0].addEventListener('dragleave', function (evt) {
      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
      evt.preventDefault();
      if (stopPropagation(scope)) evt.stopPropagation();
      leaveTimeout = $timeout(function () {
        if (actualDragOverClass) elem.removeClass(actualDragOverClass);
        actualDragOverClass = null;
        attrGetter('ngfDrag', scope, {$isDragging: false, $event: evt});
      }, dragOverDelay || 100);
    }, false);
    elem[0].addEventListener('drop', function (evt) {
      if (isDisabled() || !upload.shouldUpdateOn('drop', attr, scope)) return;
      evt.preventDefault();
      if (stopPropagation(scope)) evt.stopPropagation();
      if (actualDragOverClass) elem.removeClass(actualDragOverClass);
      actualDragOverClass = null;
      extractFilesAndUpdateModel(evt.dataTransfer, evt, 'dropUrl');
    }, false);
    elem[0].addEventListener('paste', function (evt) {
      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
        attrGetter('ngfEnableFirefoxPaste', scope)) {
        evt.preventDefault();
      }
      if (isDisabled() || !upload.shouldUpdateOn('paste', attr, scope)) return;
      extractFilesAndUpdateModel(evt.clipboardData || evt.originalEvent.clipboardData, evt, 'pasteUrl');
    }, false);

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
      attrGetter('ngfEnableFirefoxPaste', scope)) {
      elem.attr('contenteditable', true);
      elem.on('keypress', function (e) {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
        }
      });
    }

    function extractFilesAndUpdateModel(source, evt, updateOnType) {
      if (!source) return;
      // html needs to be calculated on the same process otherwise the data will be wiped
      // after promise resolve or setTimeout.
      var html;
      try {
        html = source && source.getData && source.getData('text/html');
      } catch (e) {/* Fix IE11 that throw error calling getData */
      }
      extractFiles(source.items, source.files, attrGetter('ngfAllowDir', scope) !== false,
        attrGetter('multiple') || attrGetter('ngfMultiple', scope)).then(function (files) {
        if (files.length) {
          updateModel(files, evt);
        } else {
          extractFilesFromHtml(updateOnType, html).then(function (files) {
            updateModel(files, evt);
          });
        }
      });
    }

    function updateModel(files, evt) {
      upload.updateModel(ngModel, attr, scope, attrGetter('ngfChange') || attrGetter('ngfDrop'), files, evt);
    }

    function extractFilesFromHtml(updateOn, html) {
      if (!upload.shouldUpdateOn(updateOn, attr, scope) || typeof html !== 'string') return upload.rejectPromise([]);
      var urls = [];
      html.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function (m, n, src) {
        urls.push(src);
      });
      var promises = [], files = [];
      if (urls.length) {
        angular.forEach(urls, function (url) {
          promises.push(upload.urlToBlob(url).then(function (blob) {
            files.push(blob);
          }));
        });
        var defer = $q.defer();
        $q.all(promises).then(function () {
          defer.resolve(files);
        }, function (e) {
          defer.reject(e);
        });
        return defer.promise;
      }
      return upload.emptyPromise();
    }

    function calculateDragOverClass(scope, attr, evt, callback) {
      var obj = attrGetter('ngfDragOverClass', scope, {$event: evt}), dClass = 'dragover';
      if (angular.isString(obj)) {
        dClass = obj;
      } else if (obj) {
        if (obj.delay) dragOverDelay = obj.delay;
        if (obj.accept || obj.reject) {
          var items = evt.dataTransfer.items;
          if (items == null || !items.length) {
            dClass = obj.accept;
          } else {
            var pattern = obj.pattern || attrGetter('ngfPattern', scope, {$event: evt});
            var len = items.length;
            while (len--) {
              if (!upload.validatePattern(items[len], pattern)) {
                dClass = obj.reject;
                break;
              } else {
                dClass = obj.accept;
              }
            }
          }
        }
      }
      callback(dClass);
    }

    function extractFiles(items, fileList, allowDir, multiple) {
      var maxFiles = upload.getValidationAttr(attr, scope, 'maxFiles');
      if (maxFiles == null) {
        maxFiles = Number.MAX_VALUE;
      }
      var maxTotalSize = upload.getValidationAttr(attr, scope, 'maxTotalSize');
      if (maxTotalSize == null) {
        maxTotalSize = Number.MAX_VALUE;
      }
      var includeDir = attrGetter('ngfIncludeDir', scope);
      var files = [], totalSize = 0;

      function traverseFileTree(entry, path) {
        var defer = $q.defer();
        if (entry != null) {
          if (entry.isDirectory) {
            var promises = [upload.emptyPromise()];
            if (includeDir) {
              var file = {type: 'directory'};
              file.name = file.path = (path || '') + entry.name;
              files.push(file);
            }
            var dirReader = entry.createReader();
            var entries = [];
            var readEntries = function () {
              dirReader.readEntries(function (results) {
                try {
                  if (!results.length) {
                    angular.forEach(entries.slice(0), function (e) {
                      if (files.length <= maxFiles && totalSize <= maxTotalSize) {
                        promises.push(traverseFileTree(e, (path ? path : '') + entry.name + '/'));
                      }
                    });
                    $q.all(promises).then(function () {
                      defer.resolve();
                    }, function (e) {
                      defer.reject(e);
                    });
                  } else {
                    entries = entries.concat(Array.prototype.slice.call(results || [], 0));
                    readEntries();
                  }
                } catch (e) {
                  defer.reject(e);
                }
              }, function (e) {
                defer.reject(e);
              });
            };
            readEntries();
          } else {
            entry.file(function (file) {
              try {
                file.path = (path ? path : '') + file.name;
                if (includeDir) {
                  file = upload.rename(file, file.path);
                }
                files.push(file);
                totalSize += file.size;
                defer.resolve();
              } catch (e) {
                defer.reject(e);
              }
            }, function (e) {
              defer.reject(e);
            });
          }
        }
        return defer.promise;
      }

      var promises = [upload.emptyPromise()];

      if (items && items.length > 0 && $window.location.protocol !== 'file:') {
        for (var i = 0; i < items.length; i++) {
          if (items[i].webkitGetAsEntry && items[i].webkitGetAsEntry() && items[i].webkitGetAsEntry().isDirectory) {
            var entry = items[i].webkitGetAsEntry();
            if (entry.isDirectory && !allowDir) {
              continue;
            }
            if (entry != null) {
              promises.push(traverseFileTree(entry));
            }
          } else {
            var f = items[i].getAsFile();
            if (f != null) {
              files.push(f);
              totalSize += f.size;
            }
          }
          if (files.length > maxFiles || totalSize > maxTotalSize ||
            (!multiple && files.length > 0)) break;
        }
      } else {
        if (fileList != null) {
          for (var j = 0; j < fileList.length; j++) {
            var file = fileList.item(j);
            if (file.type || file.size > 0) {
              files.push(file);
              totalSize += file.size;
            }
            if (files.length > maxFiles || totalSize > maxTotalSize ||
              (!multiple && files.length > 0)) break;
          }
        }
      }

      var defer = $q.defer();
      $q.all(promises).then(function () {
        if (!multiple && !includeDir && files.length) {
          var i = 0;
          while (files[i] && files[i].type === 'directory') i++;
          defer.resolve([files[i]]);
        } else {
          defer.resolve(files);
        }
      }, function (e) {
        defer.reject(e);
      });

      return defer.promise;
    }
  }

  function dropAvailable() {
    var div = document.createElement('div');
    return ('draggable' in div) && ('ondrop' in div) && !/Edge\/12./i.test(navigator.userAgent);
  }

})();

// customized version of https://github.com/exif-js/exif-js
ngFileUpload.service('UploadExif', ['UploadResize', '$q', function (UploadResize, $q) {
  var upload = UploadResize;

  upload.isExifSupported = function () {
    return window.FileReader && new FileReader().readAsArrayBuffer && upload.isResizeSupported();
  };

  function applyTransform(ctx, orientation, width, height) {
    switch (orientation) {
      case 2:
        return ctx.transform(-1, 0, 0, 1, width, 0);
      case 3:
        return ctx.transform(-1, 0, 0, -1, width, height);
      case 4:
        return ctx.transform(1, 0, 0, -1, 0, height);
      case 5:
        return ctx.transform(0, 1, 1, 0, 0, 0);
      case 6:
        return ctx.transform(0, 1, -1, 0, height, 0);
      case 7:
        return ctx.transform(0, -1, -1, 0, height, width);
      case 8:
        return ctx.transform(0, -1, 1, 0, 0, width);
    }
  }

  upload.readOrientation = function (file) {
    var defer = $q.defer();
    var reader = new FileReader();
    var slicedFile = file.slice ? file.slice(0, 64 * 1024) : file;
    reader.readAsArrayBuffer(slicedFile);
    reader.onerror = function (e) {
      return defer.reject(e);
    };
    reader.onload = function (e) {
      var result = {orientation: 1};
      var view = new DataView(this.result);
      if (view.getUint16(0, false) !== 0xFFD8) return defer.resolve(result);

      var length = view.byteLength,
        offset = 2;
      while (offset < length) {
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xFFE1) {
          if (view.getUint32(offset += 2, false) !== 0x45786966) return defer.resolve(result);

          var little = view.getUint16(offset += 6, false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;
          for (var i = 0; i < tags; i++)
            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
              var orientation = view.getUint16(offset + (i * 12) + 8, little);
              if (orientation >= 2 && orientation <= 8) {
                view.setUint16(offset + (i * 12) + 8, 1, little);
                result.fixedArrayBuffer = e.target.result;
              }
              result.orientation = orientation;
              return defer.resolve(result);
            }
        } else if ((marker & 0xFF00) !== 0xFF00) break;
        else offset += view.getUint16(offset, false);
      }
      return defer.resolve(result);
    };
    return defer.promise;
  };

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  upload.applyExifRotation = function (file) {
    if (file.type.indexOf('image/jpeg') !== 0) {
      return upload.emptyPromise(file);
    }

    var deferred = $q.defer();
    upload.readOrientation(file).then(function (result) {
      if (result.orientation < 2 || result.orientation > 8) {
        return deferred.resolve(file);
      }
      upload.dataUrl(file, true).then(function (url) {
        var canvas = document.createElement('canvas');
        var img = document.createElement('img');

        img.onload = function () {
          try {
            canvas.width = result.orientation > 4 ? img.height : img.width;
            canvas.height = result.orientation > 4 ? img.width : img.height;
            var ctx = canvas.getContext('2d');
            applyTransform(ctx, result.orientation, img.width, img.height);
            ctx.drawImage(img, 0, 0);
            var dataUrl = canvas.toDataURL(file.type || 'image/WebP', 0.934);
            dataUrl = upload.restoreExif(arrayBufferToBase64(result.fixedArrayBuffer), dataUrl);
            var blob = upload.dataUrltoBlob(dataUrl, file.name);
            deferred.resolve(blob);
          } catch (e) {
            return deferred.reject(e);
          }
        };
        img.onerror = function () {
          deferred.reject();
        };
        img.src = url;
      }, function (e) {
        deferred.reject(e);
      });
    }, function (e) {
      deferred.reject(e);
    });
    return deferred.promise;
  };

  upload.restoreExif = function (orig, resized) {
    var ExifRestorer = {};

    ExifRestorer.KEY_STR = 'ABCDEFGHIJKLMNOP' +
      'QRSTUVWXYZabcdef' +
      'ghijklmnopqrstuv' +
      'wxyz0123456789+/' +
      '=';

    ExifRestorer.encode64 = function (input) {
      var output = '',
        chr1, chr2, chr3 = '',
        enc1, enc2, enc3, enc4 = '',
        i = 0;

      do {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output +
          this.KEY_STR.charAt(enc1) +
          this.KEY_STR.charAt(enc2) +
          this.KEY_STR.charAt(enc3) +
          this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
      } while (i < input.length);

      return output;
    };

    ExifRestorer.restore = function (origFileBase64, resizedFileBase64) {
      if (origFileBase64.match('data:image/jpeg;base64,')) {
        origFileBase64 = origFileBase64.replace('data:image/jpeg;base64,', '');
      }

      var rawImage = this.decode64(origFileBase64);
      var segments = this.slice2Segments(rawImage);

      var image = this.exifManipulation(resizedFileBase64, segments);

      return 'data:image/jpeg;base64,' + this.encode64(image);
    };


    ExifRestorer.exifManipulation = function (resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments),
        newImageArray = this.insertExif(resizedFileBase64, exifArray);
      return new Uint8Array(newImageArray);
    };


    ExifRestorer.getExifArray = function (segments) {
      var seg;
      for (var x = 0; x < segments.length; x++) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) //(ff e1)
        {
          return seg;
        }
      }
      return [];
    };


    ExifRestorer.insertExif = function (resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', ''),
        buf = this.decode64(imageData),
        separatePoint = buf.indexOf(255, 3),
        mae = buf.slice(0, separatePoint),
        ato = buf.slice(separatePoint),
        array = mae;

      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    };


    ExifRestorer.slice2Segments = function (rawImageArray) {
      var head = 0,
        segments = [];

      while (1) {
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        }
        else {
          var length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3],
            endPoint = head + length + 2,
            seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }

      return segments;
    };


    ExifRestorer.decode64 = function (input) {
      var chr1, chr2, chr3 = '',
        enc1, enc2, enc3, enc4 = '',
        i = 0,
        buf = [];

      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.log('There were invalid base64 characters in the input text.\n' +
          'Valid base64 characters are A-Z, a-z, 0-9, ' + ', ' / ',and "="\n' +
          'Expect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      do {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        buf.push(chr1);

        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }

        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

      } while (i < input.length);

      return buf;
    };

    return ExifRestorer.restore(orig, resized);  //<= EXIF
  };

  return upload;
}]);


var commentsApp = angular.module('commentsApp', ['ngFileUpload']);
commentsApp.controller("commentsController", function ($scope, Upload, $timeout, $http, $compile) {

    $scope.comment = {
        name: "tima",
        email: "tim@gmail.com",
        url: "my-work.ua",
        text: "my test work !!!",
		date: "",
        parentCommentId: 0,
        nesting: 0,
        files: 3
    };
    $scope.warning = "";

    // Upload files
    $scope.uploadFiles = function (files) {

        var width, height, options;



        if (files.length > 0)
            Upload.imageDimensions(files[0]).then(function(dimensions){
                dimensions.width = 320;
                dimensions.height = 240;
                width = dimensions.width;
                height = dimensions.height;
            });
        Upload.resize(files[0], options).then(function(resizedFile){

        });

        $scope.comment.files = files;

        // console.log(files);
        // console.log(files[0]);

        if (files.length > 0 && (files[0].type === "image/jpeg" || files[0].type === "image/png" || files[0].type === "image/gif")) {
            $timeout(function () {
                if (width > 320 || height > 240)
                    $scope.warning = "image must be no more than 320х240 pixels";
                else uploadFunc();
            }, 500);
        }
        function uploadFunc () {
            $scope.warning = "";
            Upload.upload({
                url: '/api/upload',
                // data: data,
                file: files
            }).then(function (response) {
                $timeout(function () {
                    // $scope.result = response.data;
                    console.log(response);
                    // console.log(response.data);
                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.progress =
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };

    $scope.saveComment = function (comment, commentsForm) {

        if(commentsForm.$valid) {
            console.log($scope.comment);
			$scope.comment.date = new Date();
            $http.post("/", comment).then(function success (response) {
                console.log(response.data);
            });
        }
    };
    $scope.dataFromMySQL = [];

    $scope.childCommentsFromMySQL = [];

    $scope.dataForView = [];

    $scope.childComment = function (commentId, nesting) {
        var parentComment = angular.element(document.querySelector('.c' + commentId));
        var commentForm = angular.element(document.querySelector("div[comment-form]"));
        // var commentForm2 = commentForm.clone();
        parentComment.after(commentForm);
        $scope.comment.parentCommentId = commentId;
        $scope.comment.nesting = nesting + 1;
    };

    $scope.pages = {
        amount: 0,
        currentPage: 1,
        pages: [],

        // Pages counter
        counter: function () {
            $scope.pages.amount = Math.ceil($scope.dataFromMySQL.length / 25);
            for (var i = 0; i < $scope.pages.amount; i++) {
                $scope.pages.pages.push(i+1);
            }
        },

        // Page creating
        pageCreator: function () {
            var i, j, parentComment, childComment,
                row, rowInside, compileFn;
            var start = $scope.pages.currentPage * 25 - 25;
            var end = $scope.pages.currentPage * 25;
            $scope.dataForView = [];

            // Preparing data for main comments
            for (i = start; i<end; i++) {
                if ($scope.dataFromMySQL[i] === undefined) break;
                $scope.dataForView.push($scope.dataFromMySQL[i]);
            }

            // Rendering of child comments
            $timeout(function () {
                for (i = 1; i<$scope.childCommentsFromMySQL.length; i++) {
                    for (j = 0; j<$scope.childCommentsFromMySQL[i].length; j++) {

                        // Search parent comment
                        parentComment = angular.element(document.querySelector('.c' + $scope.childCommentsFromMySQL[i][j].parent_comment_id));

                        // Creating a child comment
                        childComment = angular.element('<tbody>').addClass('c' + $scope.childCommentsFromMySQL[i][j].id + ' nesting' + $scope.childCommentsFromMySQL[i][j].nesting);
                        row = angular.element('<tr>');
                        rowInside = angular.element('<td>').text($scope.childCommentsFromMySQL[i][j].name);
                        row.append(rowInside);
                        rowInside = angular.element('<td>').text($scope.childCommentsFromMySQL[i][j].date);
                        row.append(rowInside);
                        childComment.append(row);
                        row = angular.element('<tr>');
                        rowInside = angular.element('<td>').text($scope.childCommentsFromMySQL[i][j].text);
                        row.append(rowInside);
                        childComment.append(row);
                        row = angular.element('<tr>').text($scope.childCommentsFromMySQL[i][j].email);
                        childComment.append(row);
                        row = angular.element('<tr>');
                        rowInside = angular.element('<td>').append(angular.element('<a>').attr('href', '')
                            .attr('ng-click',`childComment(childCommentsFromMySQL[${i}][${j}].id, childCommentsFromMySQL[${i}][${j}].nesting)`).text('Comment'));
                        row.append(rowInside);
                        childComment.append(row);
                        compileFn = $compile(childComment);
                        compileFn($scope);
                        parentComment.after(childComment);
                    }
                }
            }, 1000);
        }
    };

    // Sorting
    $scope.sortBy = {
        method: "date",
        direction: "ascending",
        sort: function () {
            var temp, i, j;

            // Sorting by date (ascending)
            if ($scope.sortBy.method === "date" && $scope.sortBy.direction === "ascending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if (Date.parse($scope.dataFromMySQL[j].dateISO) - Date.parse($scope.dataFromMySQL[j + 1].dateISO) < 0) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by date (descending)
            if ($scope.sortBy.method === "date" && $scope.sortBy.direction === "descending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if (Date.parse($scope.dataFromMySQL[j].dateISO) - Date.parse($scope.dataFromMySQL[j + 1].dateISO) > 0) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by name (ascending)
            if ($scope.sortBy.method === "name" && $scope.sortBy.direction === "ascending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].name > $scope.dataFromMySQL[j + 1].name) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by name (descending)
            if ($scope.sortBy.method === "name" && $scope.sortBy.direction === "descending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].name < $scope.dataFromMySQL[j + 1].name) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by email (ascending)
            if ($scope.sortBy.method === "email" && $scope.sortBy.direction === "ascending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].email > $scope.dataFromMySQL[j + 1].email) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }

            // Sorting by email (descending)
            if ($scope.sortBy.method === "email" && $scope.sortBy.direction === "descending") {
                for (i = 0; i < $scope.dataFromMySQL.length; i++) {
                    for (j = 0; j < $scope.dataFromMySQL.length - 1; j++) {
                        if ($scope.dataFromMySQL[j].email < $scope.dataFromMySQL[j + 1].email) {
                            temp = $scope.dataFromMySQL[j];
                            $scope.dataFromMySQL[j] = $scope.dataFromMySQL[j + 1];
                            $scope.dataFromMySQL[j + 1] = temp;
                        }
                    }
                }
                $scope.pages.pageCreator();
            }
        }
    };

    // Getting data from Database
    var getDataFromMySQL = function () {
        $http.get("/comments").then(function success (response) {
			var date, nesting;
            var options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
			for (var i = 0; i<response.data.length; i++) {
			    date = Date.parse(response.data[i].date);
			    date = new Date(date);
                date = date.toLocaleString("ru", options);
                response.data[i].dateISO = response.data[i].date;
                response.data[i].date = date;
                if (response.data[i].parent_comment_id === 0) $scope.dataFromMySQL.push(response.data[i]);
                if (response.data[i].parent_comment_id !== 0) {
                    nesting = response.data[i].nesting;
                    if ($scope.childCommentsFromMySQL[nesting] === undefined) $scope.childCommentsFromMySQL[nesting] = [];
                    $scope.childCommentsFromMySQL[nesting].push(response.data[i]);
                }
            }

            $scope.sortBy.sort();
            $scope.pages.counter();
            console.log($scope.dataFromMySQL);
            console.log($scope.childCommentsFromMySQL);
		});
	};
    getDataFromMySQL();
});
commentsApp.directive("commentForm", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["commentForm"]];
        },
        restrict: "A",
        templateUrl: "../templates/commentForm.html",
        transclude: true
    }
});
commentsApp.directive("commentsList", function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["commentsList"]];
        },
        restrict: "A",
        templateUrl: "../templates/commentsList.html",
        transclude: true
    }
});
function initCaptcha(){
    setTimeout(jsCaptcha({
        blockId:'captcha',                                  //block id to include captcha
        maxLength: 5,                                       //max symbols length for generate
        minFontSize: 20,                                    //min fontsize for symbols
        maxFontSize: 40,                                    //max fontsize for symbols
        maxTextShadowOffset: 5,                             //shadow symbols offset
        defaultText: 'Введите текст с картинки',    		//default text for field
        textFontFamily: false,                              //install your own cufon font ['font1', 'font2']
        textLibrary: false,                                 //allow to use own text collection ['1', '3'] or words collection
        textColors: false,                                  //allow to use own colors collection ['#ffffff', '...']
        autoFormValidate: true,                             //stop submit button when field is not filled or error
        submitPassedJsCode: 'alert("Ответ отправлен")',     //allow to use own js code when captcha is passed use "" for text
        successClass: 'success',                            //class for succes action
        errorClass: 'error'                                 //class for error action
    }), 3000);
}

function jsCaptcha(_options){
    var _blockId = _options.blockId;
    var _autoFormValidate = _options.autoFormValidate || false;
    var _maxLength = _options.maxLength < 10 ? _options.maxLength : 10;
    var _minFontSize = _options.minFontSize || 20;
    var _maxFontSize = _options.maxFontSize || 50;
    var _maxTextShadow = _options.maxTextShadowOffset || 0;
    var _defaultText = _options.defaultText || 'please enter text from the image';
    var _fontFamily = _options.textFontFamily || ['Lead Coat'];
    var _library =  _options.textLibrary || [
                                                'a', 'b', 'c', 'd', 'e',
                                                'f', 'g', 'h', 'i', 'j',
                                                'k', 'l', 'm', 'n', 'o',
                                                'p', 'q', 'r', 's', 't',
                                                'u', 'v', 'w', 'x', 'y',
                                                'z', '0', '1', '2', '3',
                                                '4', '5', '6', '7', '8',
                                                '9'
                                            ];
    var _colors =   _options.textColors || [
                                                '#ffffff', '#9cff00', '#d8f5a9', '#6adcea', '#fffc26',
                                                '#ff5a00', '#3e4a81', '#e5a1e6', '#a66ea7', '#01fcff',
                                                '#9e39e5', '#b8ba1a', '#32f29a', '#e7f232', '#24b4ac',
                                                '#93d39b', '#8378d1', '#ee1515', '#b0aa47', '#e6eaff',
                                                '#f9c445', '#eaff00', '#ff7800', '#8ff4cd', '#57babb'
                                            ];
    var _passedJsCode = _options.submitPassedJsCode;
    var _successClass = _options.successClass || 'success';
    var _errorClass = _options.errorClass || 'error';
    _blockId = document.getElementById(_blockId);
    var _holder = document.createElement('div');
    _holder.className = 'captcha-holder';
    var _template = '<div class="captcha-block">';
    _template +=    '   <div class="captcha-text"></div>';
    _template +=    '   <div class="captcha-overlaytext"></div>';
    _template +=    '   <div class="captcha-progress">';
    _template +=    '       <span class="captcha-overlay"></span>';
    _template +=    '   </div>';
    _template +=    '   <ul class="captcha-buttons">';
    _template +=    '       <li><a class="captcha-reload" href="#">reload</a></li>';
    _template +=    '       <li><a class="captcha-info" href="captcha-info">info</a></li>';
    _template +=    '       <li><a class="captcha-help" href="captcha-help">help</a></li>';
    _template +=    '   </ul>';
    _template +=    '   <div id="captcha-info" class="captcha-info-block" style="display:none;">';
    _template +=    '       <a class="close" href="captcha-info">close</a>';
    _template +=    '       <div class="captcha-info-holder">';
    _template +=    '           <p>Для подтверждения введите текст с картинки</p>';
    _template +=    '       </div>';
    _template +=    '   </div>';
    _template +=    '   <div id="captcha-help" class="captcha-info-block captcha-help-block" style="display:none;">';
    _template +=    '       <a class="close" href="captcha-help">close</a>';
    _template +=    '       <div class="captcha-info-holder">';
    _template +=    '           <p>Проверка, что вы не робот</p>';
    _template +=    '       </div>';
    _template +=    '   </div>';
    _template +=    '   <input class="captcha-input" type="text" value="'+_defaultText+'"  />';
    _template +=    '</div>';
    _holder.innerHTML = _template;
    _blockId.appendChild(_holder);
    var _captcha;
    var _overLay;
    var _btnReload;
    var _field;
    var _tags = _holder.getElementsByTagName('*');
    for(var i = 0; i < _tags.length; i++){
        if(_tags[i].className.indexOf('captcha-block') !== -1){
            _template = _tags[i];
        }
        if(_tags[i].className.indexOf('captcha-overlay') !== -1){
            _overLay = _tags[i];
        }
        if(_tags[i].className.indexOf('captcha-reload') !== -1){
            _btnReload = _tags[i];
        }
        if(_tags[i].className.indexOf('captcha-input') !== -1){
            _field = _tags[i];
        }
        if(_tags[i].className.indexOf('captcha-text') !== -1){
            _captcha = _tags[i];
        }
        if(_tags[i].tagName.toLowerCase() == 'a' && _tags[i].href.indexOf('#') == -1){
            _tags[i].onclick = function(){
                var _id = this.href.substring(this.href.lastIndexOf('/') + 1, this.href.length);
                var _infoBlock = document.getElementById(_id);
                if(_infoBlock.offsetWidth == 0){
                    _infoBlock.style.display = 'block';
                }else{
                    _infoBlock.style.display = 'none';
                }
                return false;
            }
        }
    }
    
    if(_autoFormValidate){
        var _form;
        if(_autoFormValidate != 'object'){
            var _node = '.parentNode';
            var _parent = '';
            while(!_form){
                _parent += _node;
                if(eval('_holder'+_parent).tagName.toLowerCase() == 'form'){
                    _form = eval('_holder'+_parent);
                }
                if(eval('_holder'+_parent).tagName.toLowerCase() == 'body'){
                    break;
                }
            }
        }else{
            _form = _autoFormValidate;
        }
    }
    
    var _success;
    var _text = '';
    
    function createCaptcha(){
        _text = '';
        _captcha.innerHTML = '';
        fillClass(_errorClass, _successClass, true);
        var _table = document.createElement('table');
        var _tbody = document.createElement('tbody');
        var _row = document.createElement('tr');
        _captcha.appendChild(_table);
        _table.appendChild(_tbody);
        _tbody.appendChild(_row);
        for(var i = 0; i < _maxLength; i++){
            var _current = parseInt(Math.random() * _library.length);
            var _toUpper = parseInt(Math.random() * 1);
            var _curColor = _colors[parseInt(Math.random() * _colors.length)];
            var _shadowColor = _colors[parseInt(Math.random() * _colors.length)];
            var _shadowSize = parseInt(Math.random() * _maxTextShadow);
            var _fontName = parseInt(Math.random() * _fontFamily.length);
            var _fontSize = parseInt(Math.random() * _maxFontSize);
            if(_fontSize < _minFontSize){_fontSize = _minFontSize;}
            var _newText = document.createElement('td');
            _newText.style.color = _curColor;
            _newText.style.fontSize = _fontSize + 'px';
            _newText.innerHTML = _toUpper == 0 ? _library[_current] : _library[_current].toUpperCase();
            _row.appendChild(_newText);
            Cufon.replace(_newText, {textShadow: eval('_shadowColor+" "+_shadowSize+"px "+_shadowSize+"px"'), fontFamily:_fontFamily[_fontName]});
            _text += _library[_current];
        }
        _field.value = _defaultText;
        _overLay.style.width = 0;
    }
    
    function fillClass(_class1, _class2, _clear){
        _success = false;
        if(_clear){
            _template.className = _template.className.replace(_class1, '');
            _template.className = _template.className.replace(_class2, '');
            return false;
        }
        if(_class1){
            if(_template.className.indexOf(_class1) == -1){
                _template.className += (' ' + _class1);
            }
        }
        if(_class2){
            _template.className = _template.className.replace(_class2, '');
        }
    }
    
    var _fieldVal = _field.value;
    _field.onfocus = function(){
        if(this.value == _fieldVal){
            this.value = '';
        }
    }
    
    _field.onblur = function(){
        if(this.value == ''){
            this.value = _fieldVal;
        }
    }
    
    _field.onkeyup = function(){
        if(_overLay){
            _overLay.style.width = parseInt(this.value.length / _text.length * 100) + '%';
        }
        fillClass(_errorClass, _successClass, true);
        if(this.value.length == _text.length){
            fillClass(_errorClass, _successClass);
        }
        if(_text.toLowerCase() == this.value.toLowerCase()){
            fillClass(_successClass, _errorClass);
            _success = true;
        }
        _field.setAttribute('maxlength', _text.length);
    }
    
    _btnReload.onclick = function(){
        _field.removeAttribute('maxlength');
        createCaptcha();
        return false;
    }
    
    if(_autoFormValidate && _form){
        var _path = _form.getAttribute('rel');
        if(_path){
            _form.removeAttribute('rel');
            _form.setAttribute('action', _path);
        }
        _form.onsubmit = function(){
            if(!_success){
                return false;
            }
            if(_passedJsCode){
                var _bannedVars =   [
                                        '_text', '_current', '_toUpper', '_curColor', '_shadowColor',
                                        '_shadowSize', '_fontName', '_fontSize', '_newText'
                                    ];
                var _failed;
                for(var i = 0; i < _bannedVars.length; i++){
                    if(_passedJsCode.indexOf(_bannedVars[i]) !== -1){
                        _failed = _bannedVars[i];
                        break;
                    }
                }
                if(_failed){
                    alert('failed expression: ' + _failed);
                }else{
                    eval(_passedJsCode);
                }
            }
        }
    }
    createCaptcha();
}

/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.09
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";n=document.createElement("canvas");s.appendChild(n);}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());
Cufon.registerFont({"w":154,"face":{"font-family":"Lead Coat","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"0 0 0 0 0 0 0 0 0 0","ascent":"288","descent":"-72","cap-height":"2","bbox":"0 -320 273 50","underline-thickness":"7.2","underline-position":"-32.4","unicode-range":"U+0020-U+007A"},"glyphs":{" ":{"w":97},"!":{"d":"17,-276v0,0,-2,0,-2,1v0,0,2,0,2,-1xm24,-108v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm40,-139v0,0,-2,0,-2,1v0,0,2,0,2,-1xm7,-203r14,-16r-11,-9v1,-3,9,-8,5,-10r-6,5v2,-5,11,-8,6,-14v3,-5,15,-8,8,-14r-9,10v2,-8,-4,-11,1,-17r-5,4v2,-3,6,-5,5,-11r-3,2r9,-14v-1,3,-4,6,2,5r8,-9v-2,4,-12,10,-1,9r5,-5r-2,4r12,-2v-6,7,3,15,7,7v8,2,-3,5,0,10r9,-7v-4,8,-20,15,-14,23r14,-12v-4,6,-14,11,-9,21v-5,3,2,6,0,12r4,-2r-2,3r7,-3v-6,7,-16,16,-11,22v2,-1,4,-1,6,0v-1,4,-8,8,-4,11r4,-2r-2,11r7,-6v-3,5,-9,7,-9,14r4,-1v-5,5,-7,11,-4,19r11,-9v-4,6,-12,8,-13,17v7,-1,2,5,2,8r4,-2v-1,3,-6,7,-2,8r5,-1r-14,15v5,1,11,1,7,7r5,-3v-4,4,-10,9,0,10r-24,28v2,-6,9,-12,5,-17v-5,3,-9,11,-15,5r0,-7r-6,3v2,-3,8,-6,6,-10v-3,-1,-5,1,-4,4v-1,-6,-8,-3,-10,1v11,-9,3,-24,8,-36r-5,3r3,-7r-6,5r10,-12v-14,-6,0,-12,-4,-21v2,-2,8,-3,4,-5v-3,2,-9,3,-5,7r-4,-2v2,-5,13,-9,9,-14v-4,3,-5,0,-5,-5r0,-2r-4,2v3,-6,18,-12,9,-17xm33,-57v0,0,-2,0,-2,1v0,0,2,0,2,-1xm40,-23v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm47,-40v4,3,3,9,9,5v-4,2,-5,5,-4,9r4,-2v-2,7,-7,14,-16,23v-1,-10,-6,-4,-10,0r1,-10r-10,0r0,-13r-6,2v3,-6,18,-12,9,-18r-9,8v3,-5,9,-10,-1,-11v6,-4,2,-10,5,-14v-6,1,-5,7,-14,11r19,-21v-2,3,-5,5,-5,10r17,-8r-1,3v5,-5,6,4,10,0r-1,3r5,-1r-4,5r9,-2v-3,4,-7,7,-2,11r4,-2","w":73},"\"":{"d":"26,-191v0,0,-2,0,-2,1v0,0,2,0,2,-1xm69,-214r2,-5r-5,3v3,-2,4,-5,3,-8v-2,2,-4,2,-3,-2r-3,2v3,-4,7,-8,1,-11v-3,4,-13,7,-8,13v-7,7,-12,8,-12,19v6,-2,9,-1,12,-6r-14,16r7,-4v-7,7,-13,18,-21,18v2,-4,5,-11,-4,-9r-7,7v2,-6,13,-12,6,-17r-9,7v9,-7,12,-12,9,-16r-4,2v1,-3,6,-6,4,-9r-8,3r2,-5r-7,5v10,-6,12,-12,5,-19r-3,2v7,-6,9,-10,7,-12r-5,2r1,-5r-6,5v7,-2,8,-9,6,-21r-6,5v2,-4,10,-8,6,-12r-3,2v3,-2,4,-7,3,-14r-8,7r17,-20v-1,4,-7,8,-3,11v5,-2,8,-1,14,-5v-4,4,-6,9,-2,14r17,-12r-5,8r11,-8v-3,5,-12,8,-7,15r26,-23v-1,3,-12,10,-2,9r7,-5v-2,3,-5,6,2,5r8,-9v-2,4,-7,7,-3,11r7,-5v-4,2,-5,5,-4,9r6,-4v-3,2,-1,6,0,9r8,-7v-6,7,-7,12,-5,14r10,-7v-3,6,-15,12,-11,17r8,-5v-2,5,-12,13,-8,17r6,-5v-9,8,3,20,-8,25r7,-4v-3,5,-16,11,-7,15r7,-5v-10,9,-6,14,-14,21v2,2,2,5,7,4r-11,12r4,-7v-5,5,-8,-4,-11,0v2,-4,9,-9,2,-12r-12,7v4,-5,10,-10,1,-12v3,-4,11,-9,4,-13","w":113,"k":{"z":121,"y":-13,"x":117,"w":115,"v":-13,"u":121,"t":-10,"s":22,"r":9,"q":36,"p":116,"o":46,"n":8,"m":9,"k":-8,"h":130,"e":32,"c":33,"a":30,"L":-11,".":41}},"$":{"d":"15,-259v9,-6,15,-26,27,-17v8,-3,19,-14,29,-23v-2,-8,-8,1,-12,3v4,-5,14,-16,19,-5r9,-5v-3,6,-12,9,-9,17v7,-3,15,-18,20,-12v-2,-2,-10,2,-9,10r5,-1v-4,6,2,7,5,3v-1,15,11,10,16,2r-21,23r4,3r25,-24v-2,4,-10,8,-6,12v5,-3,7,0,5,5v2,-2,4,-2,5,0v-4,6,5,12,11,14v-3,4,-12,9,-4,12r12,-10v-3,6,-15,14,-5,17r0,5r3,-1v-10,7,5,8,0,15r7,-1v-3,5,-11,9,-5,14r7,-6v-6,8,-14,19,-23,11r-1,3v-5,-7,-12,-4,-16,2r5,-9r-5,2v6,-7,-7,-5,-7,-12r7,3v0,-6,-10,-6,-5,-10r3,3v0,-14,-11,-13,-15,-3r2,3v-3,-1,-10,0,-9,5r5,-3v-2,4,-9,8,-5,11v-3,-2,-5,-2,-4,3v4,-2,7,-7,11,-3v-9,4,-3,17,-12,22v2,5,5,3,8,0v4,13,8,7,19,9r-2,5v5,-3,7,-1,8,5v-4,6,-18,11,-11,18v8,-6,13,-20,26,-13r9,-8v-3,4,-8,6,-9,12r4,-2r-2,6v4,-3,5,-1,7,3v-1,4,-3,8,0,10r5,-2r-2,8r4,-2v-1,3,-6,6,-4,9r4,-2r-2,7r7,-4v-2,5,-10,10,-9,14r4,-1r-2,5r3,-2v-3,4,-7,7,-3,12v5,-3,13,-15,16,-12r-9,8v1,21,-1,19,-7,30v3,4,7,4,11,0v-3,6,-18,12,-9,18r-4,5r7,-5v-3,6,-14,12,-10,17r7,-5v-3,5,-13,11,-10,15v-8,-5,-3,11,-9,6v-11,4,-20,10,-26,19v2,-5,12,-11,8,-16r-26,23v1,5,7,2,11,1r-19,20v2,-5,9,-10,5,-16r-7,5v3,-2,1,-6,0,-9r-12,11r12,-16v-10,1,-3,-13,-12,-14v-1,-7,-8,-1,-11,2v3,-3,6,-6,0,-7r-7,2r2,-5r-3,2v2,-2,0,-6,0,-9r-14,12v8,-7,-3,-9,3,-16r-7,4r2,-6r-5,2r1,-8r-7,1v5,-2,5,-7,0,-15r-3,1r1,-5r-3,2v0,-9,12,-15,5,-19r-7,5r4,-7r-4,2v3,-1,1,-4,0,-6v3,2,5,2,4,-3v-5,4,-3,-4,-7,0v3,-6,15,-12,12,-18v-5,5,-10,2,-15,9r19,-20r0,8v5,0,10,0,12,-3r-2,6r5,-1v-2,4,-2,6,4,5r7,-7r-5,7r5,-2v-6,7,-8,17,-5,30v6,0,-7,3,1,10r26,-24v-6,-6,7,-8,2,-12v-7,0,-8,3,-9,-4v1,-3,9,-6,5,-8r-5,1v2,-3,6,-4,5,-10r-8,5v4,-7,19,-12,14,-22r-12,7r1,-4r-14,2r2,-5v0,0,-12,4,-10,-4v-7,-1,-9,2,-12,5v2,-3,5,-4,5,-9r-7,4r3,-7r-7,3v6,-5,2,-9,-3,-13r-6,2v4,-3,7,-7,4,-13r-5,2v2,-4,12,-11,0,-10r-4,3v2,-2,6,-5,2,-7r-5,4v12,-8,0,-18,7,-27v-3,-5,-7,0,-9,-3v3,-6,19,-14,10,-19v-6,5,-10,-2,-13,5v7,-8,11,-13,12,-24r-7,3v11,-8,14,-14,10,-17r-8,5v4,-5,9,-9,12,-15xm45,-212r5,-2v-3,5,-14,11,-10,16r4,0v-2,4,-10,7,-8,12v7,1,9,-3,13,-5r-4,12v4,-3,7,-1,9,3v5,-7,15,-9,15,-21r-5,2v-1,-7,7,-16,5,-21r-3,2v8,-6,5,-8,2,-17v-12,2,-18,10,-23,19xm89,-96v5,1,-2,18,7,12v-1,4,-3,4,-6,2v1,8,5,6,9,2v-4,6,-17,19,-10,24v8,-7,11,-13,22,-15v-2,-10,-8,-1,-13,3v5,-8,14,-12,17,-22r-4,1v3,-5,14,-13,2,-14v-1,-9,7,-12,5,-17r-5,3v5,-4,4,-6,-4,-6v-5,7,-15,9,-17,19r6,-4xm64,-261v5,-7,23,-12,14,-21v-4,7,-21,12,-14,21xm84,-134v4,9,11,-3,17,-7v-4,-9,-11,3,-17,7xm113,-59v4,9,9,0,14,-4v-4,-9,-9,0,-14,4","w":161},"%":{"d":"127,-240v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm52,-21v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm117,-96r1,-7r-3,2v3,-2,0,-3,-2,-5v-3,3,-12,4,-7,8r-26,29v3,4,7,1,10,-2r-1,5r5,-3v-7,13,-10,26,-21,34r4,2v-2,3,-11,6,-6,9r7,-6v-7,6,-9,11,-7,13r6,-4v-4,3,-8,16,-11,7r-14,12v2,-4,10,-9,4,-13v-4,5,-7,5,-12,0v2,-4,9,-9,3,-13r-7,5r2,-3r-7,3v4,-6,12,-9,14,-17r-4,2v7,-6,4,-13,11,-18r-6,2v8,-13,13,-24,11,-35v4,-6,17,-13,14,-19v-5,5,-7,1,-12,5v4,-6,17,-15,15,-20r-9,6v6,-6,13,-11,13,-19r-4,2v8,-8,4,-13,14,-21v-9,-6,-21,13,-31,17r5,-6v-11,1,-19,10,-26,-2r-10,10v2,-5,9,-11,3,-15r-10,5r3,-5r-7,3v4,-2,5,-5,4,-9r-6,4v2,-2,6,-5,2,-7r-4,2v2,-5,12,-11,4,-14r-10,9r3,-6r-8,4v2,-5,12,-10,8,-14r-5,2r2,-7r-5,3v2,-3,5,-5,5,-10r-5,3v3,-8,17,-16,10,-23r-7,6r2,-14r-7,5v3,-6,12,-12,12,-17v-6,2,-5,-4,-10,1v6,-7,14,-16,8,-22r-7,5v1,-5,8,-12,2,-15v10,-14,18,-19,29,-29r-8,11v7,1,9,-2,12,-5v-2,3,-6,6,-4,10v4,-7,19,-2,21,-10r-1,7r3,-2r-2,4r9,-2r-2,2v6,0,3,6,2,10r3,-2v-2,3,4,4,0,7v7,-2,5,4,8,7r15,-14v-4,7,-13,9,-12,21v3,-1,5,-2,2,-5v1,1,3,1,5,0v-2,3,-5,4,-5,9r7,-6v-4,6,-14,10,-9,19r4,-1r-6,7r6,-2v-2,4,-11,8,-7,12v3,-1,6,-4,5,2r7,-5v-3,5,-12,10,-11,15r7,-3v-2,4,-11,8,-3,10v-3,4,-10,7,-4,11v2,-3,5,-5,9,-2v-4,2,1,5,3,7v3,-4,14,-7,9,-12v5,3,6,-2,4,-6r-7,6v5,-8,19,-16,17,-23r-9,7v4,-6,12,-8,13,-17r-8,5v3,-5,15,-11,11,-16r-11,9v15,-13,21,-21,18,-26r-9,7v7,-6,7,-11,11,-17r-6,3v9,-8,16,-17,7,-12v5,-7,7,-14,14,-14r-3,5r10,-2v-3,1,-1,4,0,6r6,-4r-2,5r10,-8v-2,5,-8,6,-8,13r6,-1r-1,5r3,-2v-3,5,-14,11,-10,16r3,-2r-7,9v6,1,6,-4,9,-6r-17,23r6,-3v-3,5,-14,11,-6,15v-5,3,-1,5,-4,11r9,-7v-9,9,-10,16,-19,24v7,7,-6,8,-4,18r9,-7v-3,9,-14,15,-16,24r5,-2v-6,6,-7,10,-5,12r7,-1r-2,3v10,-2,14,-9,20,-14r-2,6r3,-2v-2,2,0,7,0,10r19,-17r-6,10r10,-3v-5,6,3,9,9,7v0,4,-5,12,3,10r7,-7v-2,3,-5,4,-5,9r9,-7v-3,5,-15,11,-7,16r12,-11v-2,4,-11,9,-7,12r9,-7v-4,5,-16,12,-6,16r-5,5v5,-1,8,-4,9,-9v-2,6,-10,13,-4,18r11,-7r-28,29v7,9,16,-11,24,-15v-7,17,-12,14,-10,24r5,-1v2,11,-27,20,-17,29r19,-17r-2,7r5,-4r-5,10r7,-3v-3,6,-19,14,-10,19r7,-5v-8,12,-17,23,-28,31r7,-10v-9,-1,-11,5,-16,8v1,-2,4,-4,2,-6r-11,5r2,-4r-7,2v2,-4,4,-8,0,-10v-4,1,-2,4,0,7v-5,-7,-9,1,-14,5v2,-4,9,-9,2,-12r-5,2r5,-9r-5,1v3,-4,13,-10,5,-13r-9,6v1,-3,6,-6,2,-8v-3,1,-8,9,-9,5v7,-7,0,-13,9,-19v-3,-3,-11,-2,-10,-9r-8,5v6,-8,13,-12,8,-21r-4,2v2,-3,5,-4,5,-9r-3,2v4,-6,7,-11,5,-16xm26,-197v1,2,4,2,7,2r-2,-3v1,1,3,1,5,0v-3,4,-8,9,2,8r4,-3v-3,6,-16,12,-9,17r12,-10r-3,7v3,-3,9,-4,5,-9v3,-5,12,-7,9,-14v0,4,2,4,5,2v-1,-4,-1,-12,-5,-7r1,-5r-3,1v3,-2,4,-4,3,-8v-4,1,-7,2,-12,7v8,-6,12,-12,11,-19r-4,1v1,-2,7,-6,0,-5v2,-3,9,-7,5,-10r-5,2v3,-4,10,-9,4,-13r-30,25v5,10,12,-3,18,-6v-3,6,-10,8,-11,16r5,-1v-3,2,-4,4,-3,8r9,-7v-10,7,-9,17,-18,24xm141,-89v2,3,4,5,7,2v-3,7,-21,15,-12,21r13,-12v-7,6,-8,10,-6,12r6,-5v-6,7,-8,19,-1,27v12,-4,16,-15,24,-22v-2,-5,-10,0,-5,-11r-9,8v4,-6,11,-9,12,-18v-5,1,-3,-4,-3,-7r-4,2v2,-4,8,-7,6,-11r-4,2v4,-8,-3,-18,-7,-10v-3,-3,-19,10,-15,15r3,-2","w":204},"&":{"d":"44,-266r20,-21v-2,4,-4,8,-1,11v3,-2,6,-10,8,-4r11,-9v-3,4,-6,7,-4,13r14,-13v-2,5,-7,7,-8,13v8,-2,17,-8,25,-6v0,2,-2,6,0,7v7,-10,10,9,16,-3v-3,5,-14,11,-10,16v5,-1,13,-1,8,-6v1,3,4,1,6,0v-2,5,-12,10,-6,14r13,-10v-1,2,-10,8,-2,7r-9,10v5,2,16,5,5,7v-1,8,4,3,8,2v0,2,-4,6,1,5r5,-5v-4,6,-14,11,-6,17r8,-7v-8,7,-11,12,-10,16r7,-2r-11,12r4,0r-16,18v3,-5,-1,-7,2,-11v-8,-1,-9,4,-13,7r8,-9v-11,0,-2,-8,-4,-12r-7,4v3,-4,10,-10,2,-12r-7,3v3,-5,14,-10,7,-16v-3,5,-10,3,-16,2v-3,9,-16,6,-12,14v-9,-5,-9,13,-9,16v-4,-4,-6,1,-3,3r3,-2v-3,2,-1,4,0,7r7,-5v-3,4,-16,13,-1,12r7,-7v-2,4,-11,9,-7,13v-3,-2,-5,-2,-4,3v6,-6,11,11,14,0v1,6,5,2,9,0v-3,5,-15,11,-7,16r14,-12v-3,5,-15,10,-11,15v7,-4,11,0,7,7r5,-3v-7,6,-8,10,-6,12r3,-2r2,7r14,-12v-2,3,-8,6,-4,10r23,-19v-3,6,-18,12,-9,17v3,-4,6,-6,11,-3r10,-10v-2,3,-9,7,-5,10r6,-5r-3,7r7,-5v-3,3,-7,7,-2,10r6,-2v-4,6,-5,12,-4,16r4,-2v0,9,-6,11,-4,16v4,-3,5,1,9,-3v-2,4,-13,9,-9,13r9,-5v-4,6,-13,11,-13,17r4,-1v-1,3,-6,6,-4,10v5,1,6,-3,9,-5v-2,3,-6,5,-5,11r4,-2v-3,3,-1,10,5,8r8,-8v-3,5,-13,12,-8,19r5,-2r-4,7r7,-5v-4,2,-6,10,2,8r7,-6v-4,6,-16,11,-12,19v2,-1,4,-2,2,-5r3,1v-8,7,-11,12,-10,14r3,-2v-1,10,-8,14,-16,16v2,-3,5,-4,6,-8r-4,1v1,-3,3,-5,0,-7r-3,2v-1,-4,-1,-8,-7,-7r2,3v-13,-7,-20,13,-30,18r7,-9v-9,2,-15,4,-22,12r8,-10v-8,-1,-6,11,-14,7r2,-7v-4,3,-7,1,-9,-2v-4,7,-8,10,-16,12v3,-4,8,-9,2,-12r-8,7v1,-2,4,-5,1,-7r-12,10v2,-4,7,-8,2,-11v-5,2,-4,-4,-10,0v1,-2,2,-5,-2,-4r-9,9v4,-6,14,-17,7,-21r-16,14v3,-5,12,-10,11,-16r-5,2v-1,-6,-1,-10,3,-11v-6,-1,-11,-3,-7,-10v-2,2,-4,2,-5,0v4,-2,0,-5,-2,-7r-5,3v5,-4,8,-10,5,-19r-9,6v3,-5,9,-7,9,-15v-5,2,-6,1,-10,6v3,-6,10,-7,10,-16r-9,5v4,-7,19,-13,13,-20r-16,13v3,-8,23,-19,10,-24r-5,3v3,-6,12,-11,11,-17r-13,11v5,-4,10,-18,16,-9v2,-3,-2,-11,-11,-7r16,-18r-7,4v6,-10,21,-15,20,-28r-11,4v3,-5,12,-10,11,-16v-6,-1,-8,2,-11,5v6,-7,7,-12,5,-14r-3,2v3,-6,16,-12,9,-17r-18,15v7,-7,9,-12,7,-14r-5,4v2,-3,12,-10,2,-10r-6,5v6,-9,17,-13,20,-25v-6,1,-13,-6,-9,2r-4,-2v2,-5,13,-9,9,-14r-7,5r16,-17xm49,-85r7,-4v-2,3,-8,6,-4,9r5,-2v-8,7,-13,14,-1,13r-2,-4v8,4,-11,12,0,16v1,-9,10,-2,14,-7r-2,3r7,-2v-3,3,-1,5,4,4r5,-5r-2,5v4,-5,7,-3,9,2r17,-20v1,5,3,4,5,0v-3,-2,-9,-4,-5,-8r-10,5v3,-6,17,-12,8,-18r-6,6v2,-2,0,-5,0,-7v-7,3,-11,-4,-6,-9v-7,0,-8,6,-12,9v3,-5,10,-9,9,-14v-7,-1,-8,4,-12,7v3,-6,12,-12,12,-17v-15,-4,-21,13,-30,19v6,-8,15,-13,19,-23v-7,4,-10,-5,-12,4v-4,-4,-6,1,-3,3v-4,3,-13,14,-4,9v-4,8,-15,14,-10,26xm127,-111v3,9,9,-1,14,-4v-3,-9,-9,1,-14,4xm129,-92v2,8,8,1,12,-2v-2,-7,-5,-5,-12,2","w":181},"'":{"d":"24,-254v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm12,-176r7,-17v-9,7,-3,-11,-10,-5v4,-8,17,-18,15,-24r-7,3v2,-5,12,-10,6,-14r-4,2v2,-1,2,-4,2,-7r-6,0v6,-11,-4,-19,6,-23v-6,0,-6,-2,-2,-5r-7,2v7,-8,12,-21,21,-21r-3,5r5,-2v-2,4,-3,7,1,9r11,-9v-3,6,-13,13,-5,18r14,-12v-8,7,-5,18,-6,25r7,-5v-4,6,-14,13,-5,18v-7,9,5,17,-5,22v3,4,6,-2,9,-3v-2,4,-11,8,-7,12v5,1,5,-3,8,-5v-3,6,-13,12,-12,19r7,-5r-16,17r2,-7r-12,11v2,-5,13,-12,5,-16","w":72},"(":{"d":"36,-262v-1,0,-1,0,-1,1v1,0,1,0,1,-1xm35,14v-7,-1,-4,2,-2,5v2,-1,4,-2,2,-5xm23,-52v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm10,-177v2,-4,11,-9,7,-13r-7,6v3,-5,12,-12,7,-18v-5,-1,-5,3,-8,5v3,-5,13,-11,10,-15r-5,1v4,-4,10,-9,1,-11r-3,1v3,-5,15,-13,12,-17v-5,0,-6,3,-9,5v2,-4,6,-6,8,-10r-6,3v2,-4,15,-13,2,-12r-4,3v12,-10,18,-28,34,-34v-3,4,-10,7,-4,12v9,-5,9,-24,16,-7r7,-5r-5,8r6,-3v-1,4,-2,8,4,7r4,-4v-2,4,-7,5,-6,11r4,-2v1,12,-17,15,-6,24v3,0,9,-5,9,-1r-26,26r2,3r3,-5v-4,14,3,16,-5,21v1,1,3,1,5,0v-3,1,-4,5,-3,12r5,-2v-8,9,-3,11,-9,21v8,1,1,19,4,24r3,-1v-1,3,-9,9,-1,8r5,-5v-3,5,-9,7,-9,14r4,-2v-1,8,-6,16,-2,23r5,-3v-2,9,-8,-1,-10,3v2,2,6,2,5,7r7,-5v-3,4,-14,10,-4,12v-3,1,-3,4,-3,8r9,-3v-4,6,-17,14,-14,19r7,0v-2,4,-8,7,-6,11r13,-7v-3,5,-10,7,-11,15r4,-1v-4,6,-3,8,-2,14r3,-2r-1,7r5,-4v-8,6,-3,11,-7,18r5,-4v-3,6,-16,12,-9,17r11,-8v-3,4,-7,8,0,10r7,-3r-2,5v2,-2,4,-2,5,0v-1,2,-4,5,-2,7r6,-2v0,9,-6,11,-4,16r6,-4v-6,4,-4,9,-6,13v1,-5,-2,-3,-5,-2v1,7,3,9,9,5v-1,2,-10,8,-2,7v2,-1,4,-6,5,-4r-15,14v2,-3,6,-5,6,-10r-10,5v6,-4,7,-7,4,-12r-13,11v0,0,5,-13,-3,-11r3,7v-4,-10,-11,2,-15,5v3,-5,11,-9,9,-15r-4,1r2,-5r-4,2v1,-3,3,-7,0,-9r-12,11v2,-5,10,-10,4,-15r-9,8r3,-8r-5,4v3,-4,10,-10,2,-12r-6,3v7,-6,10,-10,8,-12r-6,2r2,-9r-4,2v2,-2,6,-5,2,-7r-8,7v4,-6,12,-9,10,-21r-5,4v6,-5,4,-11,1,-18v2,-3,10,-6,6,-8v-3,1,-6,4,-9,1v4,-7,23,-16,14,-22r-16,14v4,-7,4,-13,9,-18v-10,-5,1,-20,-2,-26r-5,3v2,-9,8,1,11,-3v-14,-8,0,-21,-9,-26v3,-2,4,-7,3,-14r-10,7v8,-9,11,-13,10,-23r-3,2v1,-3,7,-7,3,-8r-3,1v1,-3,5,-8,1,-10r-5,3v2,-5,11,-10,7,-14","w":78},")":{"d":"21,-259v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm30,-21v1,3,3,1,5,0v-2,-4,-5,-6,-9,-3v2,-5,11,-10,7,-14r-7,3v4,-5,12,-9,7,-17r-3,2r1,-6r-7,2v4,-5,12,-8,6,-15v4,-7,20,-14,14,-21r-20,17v2,-4,11,-9,7,-12r-3,1v3,-5,7,-10,2,-15v3,-6,18,-13,12,-19r-12,10v6,-7,-2,-13,-7,-7v2,-5,12,-10,8,-14v-3,2,-4,0,-8,4v8,-7,11,-12,10,-14v-5,0,-6,3,-9,5v2,-5,13,-9,9,-14r-5,2v4,-4,-3,-14,5,-16r-7,-3v3,-5,16,-10,9,-16r-11,9v2,-4,8,-7,6,-11r-7,6v6,-9,11,-13,8,-26r-3,1v4,-4,6,-8,-2,-9v3,-5,11,-11,2,-13v3,-1,1,-4,0,-6r-4,2v1,-3,7,-8,-1,-7r0,4v-1,-6,-6,-1,-9,1v3,-6,16,-11,9,-17r-14,12v3,-6,17,-13,8,-17r-13,12v5,-8,13,-10,8,-22r-5,3v1,-4,9,-10,5,-12r-7,1r19,-21v-1,4,-7,8,-3,11v4,-4,7,-2,10,2r9,-9v-3,5,-15,13,-12,17v10,0,12,-7,17,-12v-3,4,-7,7,-9,12r8,-5v-3,7,0,19,6,9v-1,3,-5,7,-1,9r12,-11v-3,6,-17,13,-11,19r18,-12v-2,5,-16,11,-7,14v-2,1,-2,3,0,5r3,-7v0,12,-9,17,-3,23r12,-11v-2,3,-8,7,-2,9v-3,4,-10,7,-7,14r7,-5v-3,5,-15,13,-12,17v5,1,6,-3,9,-5v-4,6,-11,9,-12,17v11,0,13,-8,19,-13v-3,5,-10,7,-11,15r4,-2v-1,7,-6,15,-4,21v7,1,7,-5,11,-7v-4,6,-18,14,-6,18v-3,4,-4,7,-3,12r3,-2v-6,6,-7,10,-5,12v2,-1,4,-3,5,0v2,9,-12,12,-5,19r4,-1v-1,3,-6,6,-4,9r5,-2v-3,2,-4,4,-3,8r5,-3v-7,7,-9,12,-7,14r7,-2v-5,7,-2,13,-8,17v9,1,2,17,1,21r5,-1r-3,7r9,-7v-4,6,-12,8,-12,17r6,-4v-7,9,-1,17,-10,23v2,2,4,5,7,2r-2,-4v3,4,7,-3,11,-5v-3,6,-10,8,-11,16r4,-2r-2,5r5,-3v-4,6,-14,12,-14,19r7,-2v-1,3,-7,6,-3,9r8,-7v-3,8,-16,16,-13,23r3,-2v-4,4,-10,8,-15,14v1,-2,5,-6,1,-7r-17,15r7,-8v-6,1,-15,6,-16,-2v2,-3,7,-7,2,-10r-16,14v7,-6,9,-11,7,-13r-5,4v3,-6,15,-12,12,-18v-4,-1,-5,1,-5,4v-7,-5,2,-14,-2,-17r-8,6v7,-11,23,-20,26,-31","w":82},"*":{"d":"45,-261v3,-6,16,-12,9,-17r-12,7v6,-3,10,-16,17,-12v-3,3,-7,5,-2,8r7,-7v-2,2,-2,5,0,9r5,-2v-4,8,4,11,-1,21r3,-2v-1,4,-4,8,-2,11r4,-2v-2,1,-2,3,0,5r9,-5r-2,5r9,-3v-3,2,0,5,1,7r11,-9v-2,5,-11,11,-7,16v4,1,5,-1,5,-4v5,3,4,10,2,16r8,-5r-31,34v4,3,-3,7,2,11r9,-7v-3,6,-11,7,-11,16r9,-2r-2,3r7,-3v-1,3,-9,8,-5,10r9,-7v-3,10,-18,7,-11,16r7,-4r-14,16v1,-3,7,-8,-1,-7r-6,5v3,-7,4,-11,6,-17v-4,0,-8,0,-9,3v-12,-10,-21,11,-30,16v4,-1,5,-4,4,-10v-9,-1,-10,5,-14,8r7,-8r-9,2v3,-6,13,-13,5,-18v-4,3,-6,12,-12,7v4,-6,11,-9,12,-17r-5,3v3,-5,10,-9,9,-14r-5,4v8,-7,6,-15,14,-21v-3,-4,-11,2,-16,2v3,-6,19,-14,10,-19r-19,15v3,-6,18,-12,11,-19r-20,17v7,-6,9,-10,7,-12r-5,2r2,-9r-10,9v6,-8,14,-15,15,-23r-5,4v6,-8,13,-9,21,-18r-9,11v4,-1,5,2,5,5v6,-8,23,-15,21,-24xm64,-212v3,6,7,4,11,0v-3,-6,-7,-4,-11,0xm50,-193v3,8,8,2,13,-2v-3,-5,-6,-4,-13,2","w":113},",":{"d":"28,-35v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm21,2v4,-7,19,-14,12,-21r-14,12v3,-4,9,-7,5,-12r-10,9r10,-13r-5,2v3,-5,13,-10,5,-14r-3,2r5,-16r-7,2v3,-3,6,-6,0,-7r-7,5v7,-11,14,-12,23,-19v-2,4,-6,6,-7,11v3,-5,18,-6,21,3v1,-2,2,-2,3,0r-2,7r13,-10v-4,6,-13,7,-13,17r6,-4v-1,4,-8,8,-4,11v6,-6,5,10,11,2v-4,3,-13,15,-4,10v-2,4,-9,8,-5,11r3,-2v-3,2,-4,5,-3,8r10,-8v-3,5,-15,13,-12,17r4,0v-3,5,-15,11,-7,16r12,-11v-4,7,-17,14,-14,20r9,-7v-8,12,-17,13,-26,22v7,-5,0,-8,3,-12v-10,-1,-10,8,-16,11v3,-6,18,-12,9,-18v-2,2,-4,2,-3,-2r-4,2v2,-4,11,-9,7,-12r-7,3r2,-3r-6,1v4,-6,15,-12,15,-19","w":72},"-":{"d":"28,-120v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm71,-104v1,4,3,6,6,3v-2,-1,-3,-3,-6,-3xm24,-134r0,5r16,-14v-2,5,-10,10,-4,14v5,-4,10,-1,16,6r19,-20v-3,6,-17,12,-8,18r8,-5r-2,5v4,-2,7,-2,8,3v-2,5,-13,11,-9,16v9,-1,12,-7,17,-12v-2,4,-12,10,-3,12v-2,2,-6,5,-2,7r9,-5r-21,22v1,-3,5,-8,1,-10r-10,7v2,-1,2,-3,0,-5r-9,5v2,-3,2,-5,-3,-4v-2,2,-2,6,-5,4v1,-1,4,-1,3,-4r-14,2v6,-2,5,-11,-1,-5r-7,5v9,-8,3,-15,12,-21v-7,-8,-9,9,-20,4v2,-5,9,-10,8,-14v-9,0,-11,8,-16,12v12,-10,16,-17,14,-19r-7,3","w":95},"\u2010":{"d":"28,-120v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm71,-104v1,4,3,6,6,3v-2,-1,-3,-3,-6,-3xm24,-134r0,5r16,-14v-2,5,-10,10,-4,14v5,-4,10,-1,16,6r19,-20v-3,6,-17,12,-8,18r8,-5r-2,5v4,-2,7,-2,8,3v-2,5,-13,11,-9,16v9,-1,12,-7,17,-12v-2,4,-12,10,-3,12v-2,2,-6,5,-2,7r9,-5r-21,22v1,-3,5,-8,1,-10r-10,7v2,-1,2,-3,0,-5r-9,5v2,-3,2,-5,-3,-4v-2,2,-2,6,-5,4v1,-1,4,-1,3,-4r-14,2v6,-2,5,-11,-1,-5r-7,5v9,-8,3,-15,12,-21v-7,-8,-9,9,-20,4v2,-5,9,-10,8,-14v-9,0,-11,8,-16,12v12,-10,16,-17,14,-19r-7,3","w":95},".":{"d":"40,-52v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm26,-42v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm31,-69v3,9,-9,12,-1,17r15,-12v-3,4,-9,11,2,10r9,-9v-2,4,-6,6,-7,11r3,-2v-1,3,-7,8,-3,10r5,-1v-1,3,-9,8,-5,10r5,-1v-2,6,-11,12,-7,17v3,-4,5,1,7,4v-5,9,-14,9,-23,10v1,-5,-2,-3,-5,-2v2,-3,9,-7,5,-10v-4,2,-6,2,-8,-2r-8,7r4,-7v-5,2,-6,-1,-10,4v4,-7,15,-12,10,-23v2,-3,9,-8,0,-7r-9,9v4,-6,15,-12,7,-20","w":62,"k":{"y":40,"w":52,"v":39,"r":-12,"f":-16,"Y":39,"W":57,"V":53,"T":51,"P":-26,"F":-15}},"\/":{"d":"113,-264v6,-5,14,-28,19,-18r7,-3v-3,4,-10,9,-3,12r13,-12v-2,4,-8,10,-1,12r7,-5v-4,5,-12,8,-7,16r12,-9r-12,14r7,-4v-3,5,-12,10,-11,16r7,-6v-3,8,-16,16,-13,23r6,-5v-8,10,-20,18,-15,33r3,-2v-4,6,-14,13,-14,19v4,-1,6,0,9,-3v-4,6,-11,9,-12,17r7,-5v-5,11,-12,20,-21,26v12,7,-12,13,-7,21v3,-1,7,-3,9,0v-3,6,-17,13,-11,19r4,-1v-3,5,-9,6,-9,13r5,-2v-4,6,-12,8,-12,18r4,-2v-2,2,-8,4,-4,7r4,-2v-3,6,-15,12,-11,18r5,-5r-7,12r6,-4v-6,8,-21,18,-13,25r5,-4v-15,16,-21,26,-19,30r7,-5v-5,6,-13,11,-13,19r3,0v-2,3,-9,7,-5,10r8,-7r-22,28v-3,-6,-9,-17,-7,-7v-2,-4,-7,0,-11,0v3,-6,18,-12,9,-18v-6,3,-15,15,-19,13v5,-8,21,-11,15,-24v-5,-1,-5,3,-8,5v7,-8,16,-14,16,-24r-8,5v8,-7,9,-16,16,-23r-5,2v4,-6,12,-8,12,-18r-8,5v4,-5,11,-10,5,-17v8,-6,11,-10,10,-12r-5,4v9,-7,5,-9,10,-18r-8,7v4,-6,12,-8,12,-18r-9,8v12,-11,17,-20,16,-27r-7,6v4,-6,14,-13,14,-19r-7,3r12,-14r-7,3v8,-7,11,-9,11,-19r-6,4v3,-5,15,-11,11,-16r-7,6v3,-6,15,-12,12,-18r-5,4v8,-5,6,-20,14,-26v-7,-1,-8,5,-12,8v5,-7,14,-10,15,-21r-7,4v4,-6,17,-14,14,-19r-5,3v2,-4,9,-7,7,-12r-9,7v10,-9,11,-15,19,-28v-5,1,-2,-3,-1,-5","w":166},"0":{"d":"123,-61v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm35,-262v0,0,-2,0,-2,1v0,0,2,0,2,-1xm12,-139v3,-4,6,-8,3,-14r-3,2v4,-4,6,-9,0,-12v4,-5,3,-10,5,-13r-5,2v4,-5,10,-9,3,-14r-6,5v4,-5,12,-12,3,-17r3,-5r-3,2v3,-6,16,-12,9,-18r-14,12v9,-12,14,-23,16,-40r-4,2v2,-3,7,-4,7,-10r-7,3r28,-28v2,3,5,0,7,-1r-2,5r11,-9v-2,3,-6,6,1,5r7,-7v-5,2,-5,6,-2,9v3,-3,6,-6,13,-5v-3,2,-1,4,0,7r14,-13r-6,8r9,-4v-2,3,-6,5,-5,11v8,0,11,-7,17,-13v-2,3,-5,4,-5,9r3,-2r-1,6r7,-4r-2,4r5,-2v-3,5,3,5,4,10r10,-8v-6,1,-6,7,-3,17v5,0,6,-3,9,-5v-3,5,-15,10,-8,15r14,-12v-2,5,-10,10,-6,14r5,-2v-3,6,-13,13,-5,18v2,-2,4,-8,8,-4v-3,3,-3,6,2,7v-3,4,-10,10,-2,12v5,-1,7,0,11,-3v-4,6,-13,11,-13,17v13,-3,1,11,5,19v-2,3,-7,5,-5,9r7,-3r-2,10r9,-7v-4,7,-21,16,-7,19r-2,9r8,-5v-7,8,-13,13,-13,21r13,-11v-4,6,-17,14,-14,19v3,0,6,-2,8,0v-1,4,-7,10,-3,13r9,-8v-10,7,-6,21,-16,28v5,4,9,-7,14,-9v-3,5,-13,11,-9,18v6,0,7,-5,11,-7v-3,5,-9,6,-9,14r3,-2r-2,6r8,-6v-3,6,-11,7,-11,16r3,-2r-3,7r3,-2r-10,21r9,-7v-9,12,-18,24,-30,33v1,-4,-1,-6,-5,-5r-10,10v3,-5,13,-9,8,-15v-9,8,-19,9,-26,19r7,-10v-10,0,-12,7,-17,12v7,-8,14,-12,9,-23r-15,12v2,-3,6,-6,-1,-5r-7,7r5,-7r-9,4v3,-4,12,-8,6,-13r-16,14v3,-1,1,-3,0,-5r3,2v3,-15,-6,-10,-10,-5v12,-10,-14,-9,-7,-19r-5,1v7,-7,-10,-10,2,-15v-2,-2,-4,-5,-7,-2r3,3v-2,0,-5,-2,-7,0v6,-6,4,-7,4,-14v-8,1,-1,-8,-2,-12r-6,2v2,-2,6,-5,2,-7r-5,2v2,-4,9,-8,5,-11r-5,4v4,-8,22,-16,16,-24v-8,1,-14,5,-18,10r7,-10r-5,1v6,-8,1,-11,9,-17v-10,0,-3,-10,-2,-16xm49,-141r8,-3v-2,3,-6,4,-5,10r7,-5v-2,4,-11,8,-7,12r7,-5v-2,4,-11,8,-7,12r7,-3v-7,6,-9,10,-7,12r7,-6v-7,5,-9,10,-7,16r7,-5v-3,4,-14,11,-3,12v-3,2,-1,6,0,9r5,-4v-3,5,-12,10,-11,16r6,-2v-7,16,11,22,17,9r-2,3v6,-1,9,0,13,-3v-2,3,-6,7,-2,10v6,-4,11,-17,19,-10v2,-1,2,-3,0,-5v4,4,8,-5,12,-7r-2,-4r-10,9v4,-5,8,-15,14,-7r2,-2v-4,-2,-7,-3,-4,-8r-9,6v8,-7,10,-16,13,-24r-11,4v4,-8,22,-16,16,-25r-18,16v2,-5,13,-9,9,-14r-4,2r4,-7r-7,3v8,-7,7,-9,7,-17r-4,2v3,-8,6,-12,8,-18v-12,3,2,-10,-8,-21v2,-4,10,-8,6,-12r-4,2r2,-7r-7,3v2,-5,13,-9,9,-14r-6,2v5,-6,3,-18,-5,-13v3,-2,1,-6,0,-9r-10,9r4,-8r-11,2v2,-2,2,-4,-3,-3r-16,10v2,-4,11,-8,7,-12r-9,7r2,-5v-5,6,-20,10,-16,19r5,-4v-6,7,-2,14,-5,25v4,-2,5,0,9,-4v-2,5,-13,9,-9,14r4,-2v-2,5,-11,11,-7,14r12,-10v-3,6,-17,13,-11,19r7,-5r-3,10r7,-3v-4,6,-11,9,-12,17","w":174},"1":{"d":"24,-203v-1,0,-1,0,-1,1v1,0,1,0,1,-1xm78,-44v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm71,2v4,-8,23,-16,14,-23r-19,17r9,-10r-7,2v3,-6,16,-13,9,-19r-16,14v1,-4,7,-8,3,-11r-7,5v4,-6,15,-12,7,-19r-5,4v2,-4,11,-9,7,-12r-5,3v6,-5,2,-10,8,-14v-12,-4,-1,-19,-1,-23r-9,7v3,-5,14,-10,10,-15r-6,3v8,-11,0,-8,-4,-3v3,-5,14,-11,10,-16v-2,1,-5,3,-6,0r1,-9r-5,4v4,-9,21,-18,16,-26v-5,2,-11,14,-14,7v2,-3,9,-6,5,-9r-5,3v6,-9,2,-23,7,-31v-7,-1,-8,3,-11,6v4,-6,12,-10,7,-18v4,-2,6,-4,2,-7v-2,2,-4,2,-5,0v3,-4,10,-9,3,-12v-6,8,-24,13,-20,23v-7,4,-13,19,-21,12v5,-7,11,-15,7,-21r-9,7v1,-2,3,-5,-2,-4r0,4v-1,-5,-4,-3,-7,0v5,-7,-2,-15,7,-19v-4,-10,-11,8,-14,0v2,-3,6,-3,5,-9r-6,2v6,-9,16,-14,20,-25r-5,4v8,-7,12,-12,11,-14r-6,3r12,-14r-5,2r11,-12r-4,0r23,-26v3,8,10,4,16,-4v-3,4,-10,9,0,9v9,-3,10,8,15,-1r-2,5r6,-2r-2,7r5,-2r-1,5r10,-5v-2,5,-18,13,-7,16r-2,7v2,-1,5,-3,5,1v-7,7,0,10,-3,16v2,-2,4,-4,7,-2v-3,6,-15,12,-12,18r7,-5v-3,5,-9,6,-9,13r10,-3v-1,2,-4,5,-1,7r5,-4v-3,6,-9,8,-10,16r8,-3v-2,5,-14,10,-7,15r7,-5v-2,7,-6,13,-7,18r5,-4r-3,9r3,-2v-2,6,-8,9,-8,18v5,-5,9,-1,13,-8v-3,6,-15,12,-11,18r5,-2v-2,5,-3,11,-2,14r3,-2v-1,4,-7,10,-3,12r8,-6v-10,8,-13,14,-10,17r4,-2r-2,5r5,-3v-3,5,-14,11,-10,16v5,1,5,-4,7,-6v1,4,-5,12,1,11r7,-7v-4,6,-16,13,-13,19r6,-2r-3,7r3,-1v-7,6,1,6,-5,12v10,3,-5,11,4,13r3,-1v-4,2,-10,6,-2,12v-4,1,-4,5,-3,12r8,-7v-10,8,-12,30,-24,18xm71,-211v4,11,10,-1,16,-5v-3,-10,-10,2,-16,5xm63,-237v2,6,4,6,8,2v-2,-5,-4,-5,-8,-2","w":117},"2":{"d":"90,-26v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm17,-198v0,0,-2,0,-2,1v0,0,2,0,2,-1xm35,-257v-4,1,-6,5,-4,10v4,-3,9,-5,4,-10xm57,-289r-5,9r14,-3r-2,1v5,8,9,-3,14,-7r-3,7r7,-3v-2,2,-6,5,-2,7r10,-7r-1,5r10,-3v-2,4,-4,9,0,12v4,-3,8,-7,10,0r11,-11v-9,8,-4,17,-2,25r11,-9v-5,2,-7,7,-7,15v7,0,10,-4,14,-8v-2,4,-6,5,-7,10v5,0,6,-3,9,-5v-2,5,-13,11,-9,16v6,1,-2,-4,3,-5v-3,10,9,10,4,17r12,-2v-3,5,-9,7,-9,14r9,-7v-4,8,-17,12,-12,23v7,1,3,-4,2,-7v2,1,5,7,6,3v-6,10,1,25,-10,32v2,2,6,0,9,0r-4,7r9,-7v-4,7,-16,13,-12,21r8,-6r-21,23v6,7,12,-6,18,-9r-30,32v-2,-3,-5,0,-7,1r4,-5v-7,1,-11,4,-18,10v3,-1,1,-4,0,-6r-10,8r4,-7v-10,11,-34,16,-32,31r4,-1r-2,7r9,-7v-3,5,-9,6,-9,14v3,-1,5,-3,7,0v-3,1,-1,3,0,5r8,-7v-3,3,-3,6,2,7r9,-7r-3,10v12,0,14,-10,21,-15v-5,4,-7,9,-2,14r12,-11v-3,3,-5,6,1,7v8,-4,16,-1,23,0v-1,4,-6,11,2,9r5,-5r-3,7v3,-2,6,-3,5,3r7,-5v-4,6,-11,9,-12,17v7,0,8,-6,12,-9v-3,5,-14,11,-10,16r6,-2v-2,4,-10,9,-6,13v4,-5,7,-1,11,-6v-8,13,-18,15,-29,25v7,-6,9,-10,7,-12v-10,0,-12,8,-18,12v2,-3,8,-6,4,-11v-7,4,-8,-3,-4,-6v-11,1,-13,10,-20,15v1,-3,5,-7,1,-9r-10,9v2,-5,14,-10,7,-15r-18,15v2,-3,6,-4,6,-9r-6,2v3,-2,1,-4,0,-7r-12,10v4,-2,-2,-5,-3,-8r-12,10r2,-7r-11,2v2,-8,-2,-17,-9,-8v-3,-7,-7,0,-10,3v3,-5,13,-10,5,-14r-10,7v2,-5,11,-10,5,-14r-4,2v3,-6,17,-13,11,-19r-11,10v4,-5,5,-9,5,-16r-3,2v1,-5,7,-11,3,-14r-5,4v3,-7,7,-11,5,-16r-6,5v4,-7,17,-11,12,-21r-7,4v3,-4,8,-6,7,-14r-9,7v4,-6,17,-14,12,-23r-7,5r19,-22v-1,3,-7,8,-3,10r26,-20v-2,3,-9,7,-5,10r23,-21v-3,4,-12,10,-2,11r31,-27v-1,-4,-3,-6,-7,-3v-2,-10,15,-16,12,-23v-6,-1,-7,3,-10,5r3,-6r-5,3v3,-5,9,-7,9,-14r-5,3r1,-5r-5,4v2,-4,11,-8,7,-12v-4,-1,-7,1,-8,3v5,-2,5,-5,1,-9r-15,4v1,-1,1,-3,0,-5r-9,7v3,-2,1,-4,0,-7v-7,9,-27,12,-21,28r5,-2v-3,6,-14,10,-7,17v-8,8,-13,17,-22,19v3,-5,14,-11,6,-15r-8,7r2,-4v-7,1,-10,7,-15,11v7,-7,10,-12,9,-14r-5,1r2,-8r-7,3v5,-2,5,-5,1,-9r-5,2v3,-1,5,-4,4,-10r-4,2v2,-4,11,-9,7,-13r-8,7v3,-5,14,-10,10,-15r-4,2v2,-4,6,-5,6,-11v-5,1,-7,2,-12,7v4,-9,21,-16,14,-26r-8,3v14,-16,27,-30,42,-40","w":159},"3":{"d":"35,-249v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm50,-276v-1,0,-1,0,-1,1v1,0,1,0,1,-1xm71,-261v7,11,17,-10,25,-14v-9,-8,-18,10,-25,14xm92,-10v0,0,-2,0,-2,1v0,0,2,0,2,-1xm19,-101v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm117,-73v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm103,-26v0,3,2,3,5,2v1,-3,-3,-2,-5,-2xm19,-188r4,-5r-6,2r2,-6v-5,4,-7,-3,-10,2v8,-7,5,-14,8,-21v-11,0,4,-11,-2,-14v1,3,4,1,6,0v-5,-4,8,-9,-4,-8r21,-23v-6,-7,-14,7,-21,10v3,-4,7,-6,9,-11r-3,1v8,-11,20,-23,33,-24r-2,3v10,0,11,0,19,-3v-2,2,-6,5,-2,7v7,-12,13,-1,21,-9v-2,4,-2,6,4,5r3,-3v-2,3,-4,6,-1,10r8,-7v-1,7,-6,9,-2,16r18,-16v-2,4,-11,9,-7,12r7,-1v-2,0,-2,2,-2,5r3,0v-1,2,-4,5,-1,7r5,-2v-1,2,-3,5,2,4r9,-9v-4,6,-12,8,-13,17r7,-3v3,3,-10,15,0,10v2,4,5,6,9,2v-2,5,-11,10,-7,14r5,-2v-6,8,3,14,7,7v-6,8,-11,11,-7,23r4,1v-8,6,1,15,-7,20v4,2,7,-4,10,-6v-5,8,-22,19,-21,26v7,0,9,-5,13,-8v-4,7,-14,15,-15,22r9,-1v-1,4,-5,10,0,12r9,-7v-3,5,-9,6,-9,14r6,-2v-3,2,-1,4,0,7r5,-2r-4,7r5,-3v-7,7,-3,16,-8,26r7,-4v-4,6,-16,12,-5,16r6,-5v-1,3,-7,6,-5,10r4,0v-4,5,-9,9,-2,9r5,-5v-2,4,-11,8,-3,10v-5,-1,-4,3,-4,7r7,-5r-10,12r5,-2v-4,6,-15,12,-7,18r7,-5r-26,26r0,-5r-12,10r5,-10v-11,0,-13,8,-19,13v1,-2,4,-5,1,-7v-8,1,-15,3,-19,7v3,-4,9,-6,6,-13r-21,19r10,-13v-11,2,-13,-7,-24,-3v4,-8,-2,-6,-6,-3v3,-6,1,-16,-6,-8v4,-2,4,-4,3,-8r-7,3r2,-8r-4,1r0,-7r-7,4v6,-2,8,-7,6,-14r-8,5v7,-6,10,-10,8,-12r-9,2v2,-3,6,-5,5,-11r-4,2r2,-5r-8,7v2,-5,11,-9,6,-14r-3,1v5,-4,5,-11,3,-19r-5,4v2,-3,5,-4,5,-9r-6,5v6,-4,13,-22,17,-12r7,-5r-5,7v11,-2,23,4,22,14r6,-2v-4,2,-5,8,-4,16r7,-4v-8,7,-7,10,-7,18r4,-2r-4,7v8,-1,12,-6,19,-12v-3,4,-8,9,2,8r4,-3r-4,5v6,-4,6,5,11,0v-2,1,-2,3,0,5r29,-26v-3,-8,-9,-1,-14,2v4,-5,12,-9,7,-18r-5,2v4,-3,10,-13,2,-8r3,-7r-3,2v4,-5,0,-8,3,-13r-5,2v1,-1,2,-2,2,-5v-4,1,-6,-1,-4,-4v-7,-1,-9,3,-12,6v1,-3,7,-6,3,-9r-10,7v2,-3,-3,-12,-5,-5v-4,-4,-8,-12,-14,-6v5,-6,5,-10,7,-17r-5,2v2,-4,8,-8,5,-14v-7,-1,-7,5,-11,7v8,-13,16,-11,27,-21r-7,9v4,-2,7,-2,10,1v3,-6,16,-10,12,-17v1,2,3,2,5,0v-1,-6,-5,-4,-10,0v3,-5,14,-11,10,-16r-3,2v1,-3,2,-6,5,-3r0,-6v-2,2,-4,2,-5,0v12,-7,-4,-12,2,-21v-4,2,-5,0,-9,4r2,-4r-6,2v3,-2,1,-4,0,-7r-13,13v2,-3,4,-7,0,-9v-10,9,-26,13,-25,34r7,-1v-8,9,-15,15,-24,21r7,-11r-11,4r2,-4r-7,2v2,-3,3,-6,-3,-5","w":157},"4":{"d":"56,-222v0,0,-2,0,-2,1v0,0,2,0,2,-1xm31,-158v5,-7,23,-13,14,-21v-5,7,-17,9,-14,21xm99,-33v-1,-9,-4,-4,-1,0r1,0xm149,-106v-7,7,5,10,-1,17v3,1,8,-5,9,-1v-5,5,-13,7,-16,15r5,-2v-1,3,-7,7,-3,9v7,1,11,-10,14,-9r-25,23v5,6,-6,7,-2,14r8,-4v-4,6,-11,9,-9,21r7,-5v-4,9,-5,15,-13,23v1,-3,6,-7,2,-9r-16,14v2,-3,10,-8,6,-10r-12,10v5,-9,26,-19,15,-28v-3,3,-12,6,-7,11r-12,12v3,-7,0,-11,-7,-12v1,-5,6,-12,2,-16r-7,3v5,-4,7,-7,7,-12r-5,4v3,-5,10,-9,9,-14r-8,3v3,-4,9,-8,0,-8v-2,-14,-17,-4,-24,3v2,-3,7,-7,2,-10v-5,3,-15,5,-16,-4v-2,1,-2,3,0,5v-6,-2,-11,5,-16,7v3,-4,8,-7,4,-12r-12,11v1,-3,4,-6,2,-9r-15,12v7,-8,11,-13,0,-12r-3,3v2,0,2,-3,2,-6r-4,0v2,-4,7,-8,2,-11r-5,3v3,-3,2,-7,3,-12r-3,2v6,-8,2,-12,2,-21r-4,2v1,-3,6,-6,4,-9r-5,2v3,-6,14,-13,11,-19r-3,0v2,-4,11,-9,7,-12r-4,0v4,-4,7,-8,6,-9r-7,5r12,-14r-7,4r11,-12r-6,1v2,-4,11,-8,7,-12r-7,5v4,-6,16,-11,12,-19r-5,4v10,-8,10,-17,19,-26v-8,-3,8,-9,2,-13r-8,8v13,-14,16,-28,29,-39v-6,-2,-11,7,-16,10v4,-6,12,-8,12,-17r-5,4r23,-28v-1,4,-4,8,-2,12r9,-7v-1,3,-6,6,-4,9r11,-9v-2,3,-5,6,2,5r10,-10v-4,7,-19,14,-12,21r19,-18v-2,4,-9,8,-5,11r3,-2r2,7r12,-10v-2,5,-14,10,-7,15r7,-5r-3,9r7,-4v-5,6,-12,13,-9,17r5,-3v-3,2,-4,7,-3,14r3,-2r-3,7r5,-3v-5,5,-9,9,-2,14v-3,1,-4,4,-3,10r7,-3v-12,11,-9,13,-7,29r9,-7v-4,6,-16,12,-13,18r5,-4v-3,4,-4,8,4,7r4,-3v-4,8,-21,15,-15,24v4,-2,8,-5,2,-7r7,-3r-3,8r7,-3r-13,14v9,-1,6,8,6,15r5,-3v-3,5,-17,12,-5,14r3,9r11,-9v-2,5,-13,9,-9,14r5,-2v-3,4,-7,8,-1,10xm50,-127r7,-5v-5,7,-17,13,-7,21v4,-3,5,-1,7,3r7,-7r-1,4r10,-2v-2,3,-7,7,-2,10r25,-22v-2,-7,-6,0,-9,2v7,-6,9,-11,7,-13v-2,1,-4,3,-5,0v9,-6,2,-11,5,-21r-5,4v1,-3,9,-8,5,-10r-5,1v2,-3,9,-7,5,-10r-9,7v4,-6,14,-9,9,-18r-5,2v1,-3,9,-8,5,-10r-7,1v4,-4,13,-8,5,-12v-3,4,-14,8,-7,12v-4,7,-19,15,-17,21r7,-5v-4,8,-17,16,-14,23r7,-6v-7,10,-18,19,-18,30"},"5":{"d":"47,-270v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm24,-270v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm15,-149v4,2,8,-4,4,-8v-7,-1,-4,3,-2,6v-4,-5,-7,-3,-10,2v7,-6,9,-11,7,-13r-5,4v11,-9,1,-18,8,-28v-3,-7,-8,0,-12,3v3,-5,9,-7,10,-15r-6,5r26,-28v-9,-7,-17,12,-25,16v3,-5,15,-11,11,-16v-6,-1,-8,2,-11,5v2,-3,5,-4,5,-8r-8,3v3,-6,19,-14,10,-19r-5,3v3,-2,4,-5,3,-8r-3,2v3,-4,6,-8,3,-14r-3,1v3,-1,4,-5,3,-12r-10,9v3,-5,14,-11,10,-16r-5,2r14,-16v-1,3,-9,10,0,9r6,-5v-2,3,-6,6,1,5r2,-2r2,6r15,-15v-2,4,-7,8,-3,13v5,-5,8,-5,14,-7v0,6,5,6,7,10r12,-12v-1,2,-4,5,-2,7v12,-3,12,1,18,-5v-4,3,2,7,5,9v7,-7,11,-7,17,-13v-4,5,-2,8,2,11r10,-7v-3,6,-17,13,-8,17r16,-14v1,9,-13,13,-9,18r9,-2v-7,8,-8,5,-9,21v2,-3,4,-5,5,0v-5,4,-6,11,-14,12v2,-2,2,-6,0,-9r-11,9r2,-4v-9,1,-12,8,-17,13v1,-3,12,-10,2,-9r-2,-4r-12,11v1,-3,9,-8,0,-7r-4,3v1,-3,6,-7,2,-8v-11,5,-18,13,-26,21r10,-13v-13,3,-12,15,-15,23r7,-4v-3,6,-15,12,-12,18v9,1,10,-7,15,-10v-2,4,-12,8,-7,13r16,-13v-2,3,-5,4,-5,8r15,-14v-2,4,-7,7,-3,11r10,-4v-1,1,-1,3,0,5r7,-5r-2,5v11,4,14,-10,18,0v-3,4,-6,7,-4,13v7,1,4,-3,2,-6v4,2,7,8,12,6v-1,4,1,6,5,5r-1,12v3,-4,5,1,7,4r10,-11r-12,14r3,0v-1,2,-4,5,-1,7r7,-2v-4,2,-5,7,-4,14v5,-3,8,-1,7,5r4,-2v-3,7,-18,13,-11,20r7,-5v-3,2,-4,5,-3,8v3,-3,4,1,8,-3v-2,5,-12,10,-8,14r5,-4v-2,4,-11,8,-7,12v2,-1,4,-3,5,0v-3,4,-4,10,-3,19r7,-5v-2,3,-6,5,-5,11r5,-4v-7,6,-4,12,-11,16r4,0v-2,4,-11,8,-7,12v6,0,6,-5,10,-7v-9,9,-11,14,-14,24r7,-5r-28,28v2,-3,3,-6,-3,-5r-7,7v6,-6,3,-6,-2,-10r-19,17v3,-4,7,-7,2,-11r-9,7v1,-3,9,-8,0,-7r-7,7v3,-4,6,-8,4,-15r-14,12r3,-7r-7,2v2,-2,9,-8,0,-7r-1,3v-2,-7,-14,-2,-9,-10v-4,-11,-11,-2,-18,3v3,-5,9,-6,9,-14r-11,9v4,-6,12,-8,13,-18r-13,4r4,-10r-5,3r3,-5r-7,3v2,-3,5,-5,5,-10v-2,2,-4,2,-5,0v4,-6,14,-11,13,-18v-11,-2,-8,10,-18,9v3,-5,9,-6,9,-14r-4,2v3,-3,5,-6,2,-10r-7,5r16,-16v-4,8,2,7,5,3v3,7,10,-1,18,-5v-3,4,-11,9,-4,13v2,-2,4,-5,7,-2v-5,4,0,10,5,7v-2,6,-8,12,-7,17r5,-1v-3,3,-6,7,-1,10v3,-3,6,-5,8,0r7,-7v0,15,13,-4,16,7v6,-9,25,-14,18,-26r-4,1v6,-3,7,-7,5,-12r-5,4v6,-2,7,-7,5,-14v-3,3,-5,-1,-9,3v4,-6,14,-10,13,-17r-13,9v4,-6,17,-14,14,-19v-14,3,4,-18,-5,-21v-5,3,-8,9,-15,5v2,-3,5,-6,-2,-5v-1,5,-13,8,-14,2r-24,22v1,-3,7,-6,3,-9r-17,16v2,-3,5,-5,5,-10v-4,1,-6,-1,-7,-4r-13,9v2,-5,13,-11,9,-14v-6,-1,-7,3,-10,5v2,-3,5,-4,5,-9r-10,5v1,-4,10,-9,6,-11xm89,-38v4,-7,21,-12,14,-21v-5,7,-23,12,-14,21xm78,-179v6,11,15,-8,23,-12v-7,-11,-17,8,-23,12xm90,-177v-5,7,-22,12,-13,20v5,-7,22,-12,13,-20xm50,-243v4,9,9,0,14,-4v-3,-9,-9,1,-14,4","w":151},"6":{"d":"96,-40v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm59,-30v7,-9,23,-16,25,-27v-15,2,-18,15,-28,22xm30,-56v8,12,15,-21,26,-10v9,-4,8,1,7,7r8,-4v-3,1,-1,4,0,6r16,-14r-9,10v10,1,19,-7,16,-14v4,-6,18,-13,15,-19r-6,5v8,-4,10,-9,5,-17r-5,3v10,-13,-3,-13,-7,-6v4,-8,20,-16,10,-23v-3,2,-6,3,-3,7v-1,-2,-3,-2,-5,0r1,-4r-7,4v1,-4,8,-8,4,-11v-5,8,-15,6,-21,14v2,-4,7,-8,2,-12v-3,2,-6,6,-11,4v-8,8,-23,19,-14,31v-6,10,3,9,7,5v-3,5,-10,9,-9,14r4,-2xm111,-200v-4,-3,-6,-6,-3,-11r-7,6v8,-7,12,-15,5,-23r-7,9v2,-4,8,-13,-3,-12r-6,5r4,-5v-10,3,-11,-4,-19,3v2,-1,2,-3,0,-5v-5,5,-20,7,-16,14v-12,9,-16,15,-14,17v6,1,8,-3,11,-5v-2,2,-6,5,-2,7r-2,-2v-1,2,-3,3,-3,7r7,-3v-3,6,-14,9,-9,17r9,-5v-2,3,-6,4,-6,10v4,-2,6,0,9,2r12,-12v-4,5,-11,10,-5,16r18,-16v-1,3,-6,7,-2,9v-1,-2,-3,-2,-5,0r3,5v8,-12,11,-4,21,0r14,-14v-8,6,-2,7,0,14r3,-2r-1,4r5,-2r-4,12v6,-2,9,0,12,7r11,-9v-3,6,-19,15,-5,16r-2,7r5,-2v-1,4,-1,6,4,5v-4,4,-6,8,-2,13r7,-6v-3,5,-11,8,-9,14r5,-2v-9,10,4,12,-3,19r10,-8r-13,16r3,0v-3,3,-7,7,-2,10r5,-4v-3,10,-6,19,-1,28v-5,7,-12,13,-9,18v-3,-2,-5,-2,-4,3v6,0,8,-3,13,-7r-34,35v2,-3,6,-7,2,-10v-2,4,-7,3,-12,2r-10,10v1,-3,9,-8,5,-10r-16,13v2,-4,12,-8,7,-13r-12,10v2,-2,6,-5,2,-7v-3,2,-6,7,-9,3v2,-3,4,-6,2,-10r-9,7v3,-2,1,-4,0,-7v-5,3,-7,12,-14,9v2,-5,10,-12,4,-16r-11,9v4,-5,2,-4,0,-9r-7,2v1,-3,6,-7,2,-9r3,2r-1,-7r-16,14v14,-10,3,-26,-2,-37r-3,2r3,-7r-5,3v3,-3,6,-7,5,-15r-3,0v2,-5,4,-10,1,-14r-6,5v7,-6,8,-10,6,-12r-8,7v12,-11,16,-17,14,-19v-4,1,-8,3,-9,-2r21,-23v-7,-7,-14,10,-21,13v2,-3,5,-4,5,-9r-5,2v6,-8,7,-14,3,-18r-8,7v9,-7,10,-20,8,-28r-3,2v3,-4,10,-9,3,-12r-5,3r7,-12v-2,3,-4,5,-7,2v4,-6,12,-8,13,-17r-8,3v5,-10,-4,-12,-8,-5v2,-5,18,-13,7,-16r3,-7r-8,7v2,-6,12,-11,8,-17v-2,1,-4,1,-5,0v3,-5,12,-10,11,-16r-8,3r34,-36v-1,3,-6,7,-2,9r10,-9r-3,7v5,-4,13,-2,15,-9v-1,3,-9,8,0,7r9,-9v-2,4,-12,10,-1,9v2,-3,4,-3,7,0r8,-9v-3,5,-9,8,-5,15r12,-11v-2,3,4,5,0,9v9,1,9,-6,14,-9v-2,3,-6,6,-4,11r6,-2r-2,3r5,-1r-1,5r10,-9v-3,6,-19,14,-10,19r13,-12v-1,3,-9,8,0,7r6,-5v-4,7,-23,16,-14,22r8,-7r-3,5v16,-4,6,2,7,9r4,-1v-12,7,7,13,-2,21v3,5,7,0,10,-2v-7,6,-9,10,-7,12r4,-2v-3,2,-5,5,-4,9r10,-9r-22,23v0,-5,-4,-9,-9,-6v3,-3,7,-7,2,-10"},"7":{"d":"23,-291v-2,4,-2,9,0,13v7,-3,12,-8,17,-13r-7,9v4,-1,12,3,11,-3r-4,2r5,-8v-3,7,4,9,9,6v-4,2,1,6,2,9v4,-1,2,-4,0,-7v6,8,13,1,19,-4r-4,5r11,-3v-3,2,0,3,2,5v4,-2,7,-1,12,-5v-3,2,-1,6,0,9r15,-15r-3,8r7,-2v-2,5,7,16,12,7v2,1,4,2,2,5r9,-2r-6,13r4,0v-7,4,-3,9,-9,13v6,3,13,3,9,9r7,-5v-5,7,-19,15,-7,21v-9,3,-2,14,-11,17v4,5,10,-2,13,-5v-14,13,-20,21,-15,26r6,-4v-4,7,-14,10,-11,20v-1,-3,-3,-1,-5,0v1,3,3,3,5,1r-5,9r7,-3v-10,8,-8,16,-17,24v4,6,9,-3,14,-5v-4,5,-10,9,-13,15r7,-5v-2,5,-12,10,-8,14v5,1,5,-3,8,-5r-13,16r6,-4v-9,9,-12,17,-8,23r3,-2v-2,3,-9,7,-5,10v-1,-2,-3,-2,-5,0v0,5,4,3,7,2v-3,6,-15,13,-7,19v-5,3,-1,6,-5,11r3,-2r-9,10r6,-2v-2,4,-8,7,-6,11r7,-3v-2,4,-12,10,-8,13v5,1,5,-3,8,-5v-8,10,-16,18,-26,23r4,-5v-7,-1,-10,2,-13,5v6,-4,2,-8,-5,-7r-10,10v4,-6,12,-8,12,-17v-7,-1,-8,4,-12,7v4,-4,2,-8,-2,-11v3,3,8,10,7,-1r-7,-2v9,-6,6,-11,7,-19r-9,7v7,-10,20,-17,16,-30v3,-3,5,-11,3,-14r-6,4v8,-9,18,-23,17,-31v-4,0,-6,2,-7,5v3,-6,8,-8,9,-16r-6,3r12,-17r-3,0r7,-12r-7,3v3,-5,9,-6,9,-14r-6,4v2,-1,2,-3,0,-5v7,2,10,-12,9,-19r-5,3v6,-7,15,-12,11,-26r-6,3v3,-6,13,-10,11,-19r3,4v-1,-8,-4,-7,-8,-2v4,-6,11,-9,12,-17r-9,1v4,-1,0,-4,0,-7r-14,13v3,-7,21,-15,12,-21r-28,23r6,-8r-7,2v1,-2,4,-5,1,-7v-3,7,-14,3,-21,5r-1,-5r-14,7v6,-9,-6,-6,-6,-14v-7,0,-7,6,-11,9v3,-5,8,-6,8,-14r-5,4v12,-10,-4,-19,8,-27v-2,-1,-4,-1,-6,0r1,-5r-6,5xm77,-122v2,8,7,2,12,-1v-1,-7,-10,-3,-12,1xm92,-149v3,5,5,4,12,-2v-2,-10,-7,-2,-12,2","w":144},"8":{"d":"44,-270v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm12,-237r3,-6r-6,5v3,-5,14,-11,10,-16r-4,0v2,-4,7,-5,8,-10r-6,3r19,-21r-1,6v8,-2,11,-10,17,-15r-5,8r10,-2r-1,3v9,-4,10,2,13,-3v-2,8,4,6,8,2v14,1,10,1,19,-4v-7,5,0,8,5,11r7,-4r-4,5v4,0,10,-2,13,0r-2,5r5,-3v-2,5,-13,9,-9,14v4,-3,5,-1,7,3r11,-5v-5,5,-7,9,-6,10r7,-1r-3,10r5,-3v-3,5,-13,10,-5,14r14,-12v-3,5,-16,12,-5,15r5,-3v-2,5,-13,9,-9,14v-1,-2,-3,-2,-5,0v4,7,-4,16,7,15r-2,5r7,-3v-5,4,-5,11,-3,19r5,-3v-4,6,-11,9,-12,17r7,-3v-5,8,-22,15,-11,24v-3,3,-3,7,-2,12r7,-2v-2,5,-4,10,0,13r9,-7v-3,7,-21,16,-12,22r12,-10v-6,7,-2,7,-1,17r5,-3v-3,5,-9,6,-9,14r7,-4v-4,7,-21,14,-12,21r10,-9v-2,3,-5,4,-5,9r4,0v-2,4,-10,7,-8,12v6,1,8,-2,11,-5v-2,3,-5,4,-5,9r3,-2v-2,5,-11,12,-7,15r6,-3r-8,9r8,-4v-10,10,-14,26,-30,27r-10,10v2,-5,11,-8,6,-14v-6,7,-10,12,-19,12r0,3v0,-4,-4,-2,-7,-1v4,-3,8,-6,2,-9v-7,4,-14,6,-21,14v4,-3,4,-7,2,-12v-6,0,-12,-1,-14,3r3,-6r-5,3v2,-1,2,-3,0,-5r-9,7v4,-1,5,-5,4,-11r-12,2r2,-7r-6,2r2,-6r-9,6v1,-2,6,-6,2,-7v6,2,6,-5,7,-11v-6,6,-6,-8,-14,-7v3,-2,4,-5,3,-8r-3,1r2,-5r-5,4v3,-6,7,-12,1,-16r-5,4v3,-5,10,-9,9,-15r-5,2v-4,-5,7,-9,3,-12v-5,-1,-5,1,-3,4v-9,-3,1,-10,0,-14v-3,1,-7,7,-9,5v4,-8,21,-16,10,-23r-6,5v3,-5,9,-8,11,-15r-5,2v5,-7,14,-12,14,-21r-3,2v2,-5,14,-11,7,-16v-10,5,-9,-11,-11,-18v2,-3,5,-5,2,-8r-5,3v1,-4,1,-6,-4,-5r-6,5v3,-5,11,-10,10,-15r-5,3v4,-6,10,-14,5,-19r-4,2r2,-5r-3,1r5,-7r-7,4v3,-5,9,-6,8,-14xm47,-174r5,-3v-2,4,-9,7,-7,12v4,-1,9,-1,5,-5v9,0,-6,9,6,7v-1,-9,6,-10,10,-14v-4,1,0,4,0,7v-1,-3,-2,-5,-5,-2r2,9v7,-5,12,-20,21,-13v4,-5,10,-7,12,-14r-4,0v3,-6,15,-11,12,-17r-5,2r2,-7v-4,2,-3,-4,-7,0v4,-5,6,-6,7,-14v-3,1,-5,7,-7,2r2,-2v-4,-1,-9,-2,-6,-7v-8,2,-12,8,-17,12v3,-5,8,-10,0,-12v-3,3,-6,3,-9,0v-4,7,-19,12,-15,21r5,-4v-6,8,-3,16,-5,32r3,1v-2,3,-5,4,-5,9xm40,-94v1,2,4,2,7,2v-8,7,3,9,-2,17v7,1,8,-4,12,-7v-3,7,-18,14,-12,21r11,-8v-4,4,-3,6,0,10v3,-4,6,-4,12,-5r-4,7v9,-1,13,-7,18,-12r-9,10v9,-1,13,-8,19,-12r-2,5v4,-5,12,-7,14,-14r-5,2v1,-4,6,-7,4,-11r-9,4v2,-6,10,-12,9,-18v-5,-1,-7,2,-9,4v3,-5,10,-9,9,-14r-5,2v1,-4,7,-7,5,-11r-5,4v2,-3,-1,-6,-2,-9r-11,9r7,-9v-10,0,-19,11,-26,2v-6,11,-15,21,-26,31","w":150},"9":{"d":"68,-268v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm109,-252v-4,4,-10,7,-6,14v4,-4,14,-9,6,-14xm130,-275v-4,2,-6,6,-7,11r4,-2v-2,4,-11,10,-2,10v-2,1,-2,3,0,5r9,-6r-4,6r4,-1r-4,7r11,-9v-10,8,-14,14,-11,19v6,-5,3,4,11,4v-9,7,-2,13,-5,22r8,-7v-4,6,-14,13,-14,19v3,-1,6,-2,9,0v-2,1,-4,2,-3,6v12,1,7,22,-2,26v5,0,4,7,9,3r-2,7r3,-2v-4,2,-4,6,-3,9r8,-7r-10,12r7,-3v-4,5,-12,10,-3,14v-3,2,-8,10,0,9v-4,3,-10,13,-2,8v3,2,1,6,0,9r3,-2v-4,2,-4,5,-3,9r8,-5v-14,12,-5,18,-8,33r7,-6v-4,7,-17,12,-12,21r3,-1v-1,3,-7,7,-3,10r7,-3v-3,5,-14,11,-11,15r9,-7r-33,35r5,-8v-9,1,-16,5,-21,11v2,-4,12,-8,7,-13r-21,17v1,-3,8,-8,4,-10r-9,6v3,-3,6,-6,-2,-5r-5,5v3,-4,10,-8,3,-11v-7,1,-14,12,-19,3v3,-4,10,-7,4,-11r-18,16v4,-4,10,-7,6,-14v-5,7,-6,2,-11,4v7,-6,-2,-10,0,-16v-9,-1,-9,6,-14,9v2,-4,7,-5,6,-11r-4,2v4,-2,5,-5,4,-9r-6,4v9,-3,-1,-18,9,-21r-2,-5v-5,3,-9,11,-14,5v3,-5,15,-11,11,-16v-7,3,-10,-1,-14,4r33,-35r-9,12r4,0v-3,3,-5,6,0,9v5,-5,10,-5,15,0v-4,7,-19,14,-12,21v5,-4,6,-12,16,-11v-4,9,-21,18,-16,26r25,-19v-8,10,0,9,5,4v-3,3,-5,6,0,8v4,0,2,-3,1,-5v3,4,7,-1,11,-2v-1,2,-4,5,-2,7v15,-13,25,-20,26,-31v7,-4,2,-9,0,-14r-6,5r27,-29v-6,-11,-13,15,-21,5v-10,3,-19,1,-26,12v4,-3,5,-7,4,-12r-14,12r5,-7v-9,4,-11,-2,-17,0v1,-2,1,-4,-2,-3r-9,9v3,-6,16,-12,9,-18r-12,10r5,-6v-10,4,-13,-8,-19,0r3,-7r-3,1v0,-3,4,-8,-2,-7r-5,6v6,-2,7,-7,5,-14r-5,1v2,-4,2,-6,-4,-5r-5,5v2,-4,6,-5,7,-10r-4,2v2,-4,7,-5,6,-11r-4,0v2,-3,8,-6,6,-10v-8,6,-5,-8,-14,-4v2,-4,11,-9,5,-12v5,-8,22,-14,16,-23r-23,20v3,-5,14,-10,7,-16r-4,2r4,-12v-2,0,-4,2,-5,0v7,-2,8,-7,6,-14r-5,3v3,-6,11,-7,11,-17r-4,0v1,-2,6,-6,2,-7r-7,5r14,-15r-3,0r24,-27v-2,4,-6,13,2,11v-3,-4,-1,-5,3,-7v-2,4,-2,6,4,5r3,-3r-3,5v9,-1,12,-8,17,-13v-1,3,-6,6,-4,9r8,-5r-4,5v12,-1,19,0,25,-7v-3,5,-6,11,3,11v-1,2,-4,5,-2,7r10,-5v0,3,10,10,-1,15v6,9,15,-10,22,-14xm44,-181v12,4,-4,20,10,18v-2,4,-2,6,2,8r12,-10r-4,7v3,-5,8,-4,13,-5v-3,1,-1,3,0,5r3,-4r-2,5v15,-2,18,-15,28,-22v-5,-4,-1,-12,0,-18r-5,2v5,-5,9,-10,3,-16r-6,2r8,-10r-3,0v2,-4,4,-8,1,-11r-8,8v3,-5,1,-8,-2,-11r-14,7v2,-1,2,-3,0,-5r-5,3v2,-5,14,-10,7,-15v-12,12,-27,20,-37,34v9,-3,13,-10,19,-15v-5,8,-18,15,-19,24v9,1,9,-6,14,-9r-10,14v4,6,2,10,-5,14xm94,-130v4,9,9,0,14,-4v-4,-9,-9,0,-14,4","w":157},":":{"d":"40,-188v0,2,0,2,2,2v0,-2,0,-2,-2,-2xm26,-167v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm31,-177v-6,-6,-12,5,-14,-6v2,-5,13,-9,9,-14r-7,2r12,-14r-3,7v8,1,13,-1,16,-5r-4,5v16,-4,0,9,7,12r10,-7v0,9,-13,13,-7,20v2,-7,5,3,9,-2v-3,4,-7,7,-3,12r3,-2r-2,7r7,-5v-3,5,-14,11,-10,16r5,-4r-14,16v3,-5,0,-6,-5,-7r-9,7v2,-3,5,-5,5,-10v-12,4,-14,-6,-12,-16v-5,0,-6,3,-9,5xm19,-50v3,-5,12,-10,11,-16r-16,14r19,-21v-1,3,-4,6,-2,9r7,-5r-2,3r6,-2r-4,5r9,-1v-2,2,-2,4,3,3r4,-3v-2,3,-9,7,-5,10v6,-3,8,1,12,-3v-3,5,-18,13,-4,13r-1,6r5,-4r-5,16v5,1,5,-3,8,-5v-10,13,-13,23,-26,33v1,-3,6,-7,2,-9r-5,2v0,-5,-4,-6,-4,-12v-4,1,-9,1,-5,5v-1,-2,-3,-2,-5,0r3,-7r-3,2r2,-6r-6,4v2,-4,7,-5,6,-11r-4,2r4,-12r-6,4v4,-7,3,-11,11,-16v-2,-4,-6,1,-9,2","w":69},";":{"d":"12,-190r19,-22v-1,3,-7,8,-3,10r3,-1r-1,3r6,-2r-3,5v8,-8,13,9,17,0r-3,6r9,-2r-6,14r7,-5v-5,10,-14,7,-13,19v5,1,7,-1,8,-4v-1,2,-4,5,-2,7r4,-1v-2,3,-6,4,-5,10r7,-2r-16,17v1,-3,4,-4,4,-8v-3,6,-15,-1,-18,5r2,-14r-7,4v3,-4,7,-7,2,-11r-11,9v7,-8,5,-8,7,-17v-6,1,-3,-3,-2,-6r-3,2v1,-8,7,-11,3,-19xm9,-44v5,-9,9,-16,19,-24r-7,12v12,-9,17,5,24,-1r-1,3r5,-2v-6,6,-7,10,-5,12r5,-3v-4,8,-23,16,-14,23r17,-16r-2,5r4,-1v-1,16,-8,27,0,38v-3,8,-11,6,-7,12r7,-2r-26,28v0,-3,-9,-8,-2,-5v5,-1,3,-4,0,-7v-3,2,-9,4,-5,8r-6,-3v5,-1,6,-4,2,-10r-5,3v2,-5,13,-9,9,-14r-9,7v4,-6,16,-11,12,-19r-5,4v4,-9,19,-19,17,-27v-8,-1,-10,5,-15,8v2,-5,4,-10,0,-13r-4,2v1,-7,4,-10,2,-14r-4,0v2,-5,13,-9,9,-14v-9,-1,-10,7,-15,10","w":70},"?":{"d":"78,-251v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm10,-237v4,-7,14,-13,13,-22r-9,7r21,-26v2,5,10,-10,10,0v8,-2,13,-8,18,-13r-32,34r4,3r36,-35r-7,9r7,-2r-2,6v10,-1,13,-8,18,-13v-5,4,-5,10,-2,16v9,-1,13,-5,18,-10r-9,12r4,0v-2,2,-6,5,-2,7r5,-4v-1,2,-4,5,-2,7r9,-7r-2,7r3,-1v0,5,-4,1,-6,0r3,8v18,-8,3,16,16,9v-4,6,-17,13,-14,19r7,-4r-25,27v10,6,19,-14,28,-19v-1,2,-5,5,-1,6r6,-1r-1,5r8,-7v-3,6,-16,13,-10,19v5,-3,13,-15,16,-12v-5,7,-20,12,-16,21r7,0v-4,4,-6,9,0,12v-3,5,-10,6,-10,14r6,-4v-2,4,-8,8,-5,14r4,-2r-44,48r0,8r6,-3r-16,17r1,-7r-15,10v3,-5,12,-8,7,-15r-14,12v5,-4,5,-10,2,-16v-7,1,1,-5,-2,-6r-7,5v3,-4,8,-6,7,-14v-3,1,-5,1,-9,3v3,-6,15,-11,12,-17v-9,-1,-10,7,-15,10v4,-7,19,-16,17,-22r-5,1r43,-43v-4,-1,-3,-4,-1,-7r-4,2v8,-9,-2,-29,7,-39r-5,-1v3,3,1,4,-2,5v-7,-3,-5,-6,-7,-12r-31,29v1,5,4,3,7,0v-7,18,-16,22,-28,30v3,-4,9,-8,5,-14v-8,2,-12,7,-17,12v3,-5,10,-9,9,-14v-4,2,-6,0,-11,4v2,-3,6,-5,5,-11r-3,2r1,-2v-6,0,-5,-3,-3,-7r-3,2r10,-14r-4,0v8,-6,1,-9,4,-16v-6,-1,-6,4,-9,6v2,-3,5,-4,5,-9xm50,-245v4,10,11,-2,16,-6v-4,-9,-10,2,-16,6xm59,-47v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm50,-24v-1,0,-1,0,-1,1v1,0,1,0,1,-1xm71,-19v-7,-1,-4,2,-2,5v4,0,4,-2,2,-5xm35,-23v3,-7,12,-11,9,-22r-6,1r11,-12r-5,2r15,-17v-6,15,13,-1,14,15v5,-3,4,3,11,2r-7,9v3,-2,3,-5,0,-9v-5,6,-18,9,-11,18v6,-10,8,-2,16,-8r-4,9r4,-1v-3,5,-6,9,2,10r-2,9r7,-6r-26,28v6,-6,7,-10,5,-12r-5,2v4,-4,2,-7,-2,-10v-4,3,-7,8,-12,3v4,-5,-4,-7,0,-11r-4,0v3,-3,5,-6,0,-8","w":133},"A":{"d":"80,-251v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm120,-219v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm84,-208v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm78,-82v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm91,-289v-1,0,-1,0,-1,1v1,0,1,0,1,-1xm65,-114v4,6,9,-2,13,-4v-3,4,-8,8,-2,11r17,-15v1,15,-24,19,-15,29r27,-25v-7,-6,12,-11,2,-13v2,-5,5,-10,2,-16r-6,4v7,-6,10,-10,8,-13r-10,2v3,-5,11,-10,10,-16v-7,-1,-9,3,-12,6v3,-6,13,-11,12,-17v-11,5,-4,-6,-10,-11v-5,6,-16,6,-14,19r8,-6v-5,8,-15,12,-17,23r6,-4r-6,8r6,-2v-6,6,-13,13,-10,19r10,-8v-3,8,-19,17,-13,23xm15,-36v-3,-1,-2,2,-2,4v3,1,2,-2,2,-4xm80,-240v-2,0,-4,0,-3,2v2,0,4,0,3,-2xm68,-273v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm17,-22v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm139,-26v-2,0,-4,0,-3,2v2,0,4,0,3,-2xm139,-54v-2,0,-4,0,-3,2v2,0,4,0,3,-2xm76,-74v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm103,-136v7,-6,10,-11,8,-13r-9,1v2,-5,13,-11,9,-14v-6,-1,-8,2,-11,5v3,-6,15,-12,11,-17v-10,5,-5,-5,-9,-11v-5,6,-15,7,-13,19r7,-6v-5,8,-14,12,-16,23r5,-4r-5,7r5,-2v-4,6,-13,14,-9,19r9,-7v-7,11,-21,22,-15,31r10,-8v-2,4,-9,8,-3,11r17,-14v-3,11,-11,17,-18,24r4,3r25,-24v-7,-5,12,-10,2,-13v2,-5,6,-9,2,-14xm107,-190v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm74,-234v0,0,-2,0,-2,1v0,0,2,0,2,-1xm120,-257v5,8,10,-8,11,2r5,-3v-3,7,-19,14,-10,20r10,-8v-2,4,-9,9,-5,12r9,-6v-3,7,-19,15,-13,22r22,-20r-16,18r7,-4v-7,8,-5,16,-14,23v5,7,11,-5,16,-7v-12,11,-5,10,-11,20v6,7,11,-5,17,-8v-5,8,-9,12,-8,21v8,0,4,5,2,9r10,-8v-3,6,-17,12,-8,17r9,-5v-6,7,0,9,-4,14r6,-1v-2,5,-13,11,-9,14r9,-1r-2,5r6,-2v-5,2,-7,8,-7,15v5,0,6,-4,9,-6v-4,6,-16,13,-13,19v9,3,12,-14,14,-4v-14,12,-13,15,-1,19r3,-2v-2,3,-4,5,-2,9r-3,0v3,3,4,9,9,6v-2,3,-6,4,-6,10r8,-5v-12,9,-3,16,-6,26r6,-2r-2,18r6,-1r-2,7r3,-2v0,5,-5,12,-1,15r7,-4r-15,17v1,-3,4,-5,4,-10r-13,8v2,-4,7,-8,2,-11r-19,16v2,-4,10,-7,8,-13r-6,0v1,-2,2,-2,2,-5r-5,4r1,-8r-4,2v1,-7,-3,-9,-7,-11v4,-4,5,-8,4,-13v-8,1,2,-9,-7,-9v2,-6,0,-11,-2,-15r-10,4v2,-1,2,-3,0,-5v-5,3,-8,11,-14,9v1,-3,5,-7,-2,-6r-8,7r4,-7v-8,4,-13,1,-18,9v-5,-4,-7,1,-4,4v-4,-3,-10,2,-5,6v-4,-4,-14,5,-12,11v5,-5,7,6,12,1v-4,6,-11,9,-13,17v5,0,6,-3,9,-5r-21,22v2,-4,2,-8,-1,-12r-11,6v2,-3,0,-3,-4,-3r-9,9v3,-7,19,-15,13,-22v-6,7,-11,9,-15,7r2,2r-4,1r5,-9v-4,0,-4,-1,-3,-5r-11,11v11,-12,11,-18,16,-31r-5,3v3,-5,4,-13,-2,-16v11,-9,14,-20,9,-32r4,4v-1,-10,-4,-22,4,-26v-6,-5,12,-15,0,-11r0,-4r-6,4v4,-7,12,-9,13,-19r-4,3r4,-8r-9,8v7,-8,16,-19,9,-26r-9,7v12,-10,16,-18,14,-24r-11,9r15,-16v-5,-1,-6,3,-9,5v4,-6,12,-9,13,-18v-2,2,-5,4,-8,1v3,-6,18,-13,6,-16r4,-13r-6,3v4,-6,16,-12,13,-18r-7,4v1,-3,9,-10,0,-9r-6,5v4,-6,12,-9,13,-18r-7,5v3,-6,18,-13,12,-18v-5,0,-6,3,-9,5v4,-7,11,-10,12,-20r-8,2v7,-5,15,-22,18,-7r10,-8v-2,3,-5,5,-2,8r9,-8v-1,2,-7,6,0,5v3,-4,5,-2,6,3r13,-12r-6,9r6,-1v-4,1,0,4,0,7v8,1,9,-4,13,-7v-3,5,-14,10,-6,14r9,-7v-4,7,-12,9,-13,19r8,-2v-3,4,-8,7,-4,13r7,-6","w":198,"k":{"w":67,"v":55,"j":50,"Y":87,"W":103,"V":90,"U":12,"T":93,"P":-23}},"B":{"d":"63,-187v2,4,6,-1,9,-2r-4,6v7,-1,12,-5,16,-9v-2,5,-10,11,-6,15r17,-15v-5,1,-6,5,-2,13r33,-29v-1,-4,-5,-2,-8,0v2,-4,10,-8,6,-11r3,2v0,-3,1,-7,-3,-6r-6,6v9,-7,4,-30,-6,-34v2,-3,2,-5,-3,-4r2,4v-2,-3,-6,-1,-10,0v3,-2,1,-5,0,-8v-12,16,-39,21,-33,51v-7,5,5,18,-5,21xm59,-103v4,5,11,0,13,-4v-2,4,-8,9,-1,10v-3,4,-14,9,-10,13v4,-1,8,-3,10,0v-3,4,-12,10,-4,13r4,-1v-2,5,-5,11,3,11v12,-6,17,4,19,-6v18,9,37,-9,34,-34r-11,10v3,-6,11,-9,11,-18r-5,4v8,-10,2,-36,-15,-28v4,4,-2,6,-4,9r0,-9v-15,0,-22,8,-29,17v-1,-4,-3,-4,-6,-2v7,6,-6,10,-9,15xm120,-194v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm150,-227v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm90,-28v-1,0,-3,-1,-3,1v1,0,3,1,3,-1xm15,-260v1,-5,7,-12,3,-15r-5,4v3,-7,15,-13,11,-21r-9,6r15,-15r-2,5r11,-3v-2,2,-2,4,3,3r10,-9v-2,4,-8,7,-4,12r11,-10r-5,7v13,-2,15,4,26,-3r-3,3r12,-3r0,3v-8,-3,-4,3,-2,6v5,-6,8,-8,15,-9v-3,1,-1,4,0,6v4,-3,7,-8,12,-3v-1,2,-1,4,0,6r12,-6v-4,2,-4,4,-2,8r9,-8r-4,8v4,-4,10,2,6,0v-3,1,-5,2,-2,5r3,-1v0,5,-1,11,6,9r0,4r11,-9v-2,4,-12,11,-1,10r9,-9v-3,6,-18,13,-9,19r9,-6v-7,10,-5,16,-2,28r5,-2r-9,11v5,1,6,-3,9,-5v-2,5,-13,11,-9,14r6,-4v-3,5,-13,11,-2,12r0,4r5,-4v-3,4,-6,8,-3,13r11,-8v-3,5,-11,9,-10,15v-1,-3,-3,-1,-5,0v5,6,-9,9,2,13v-1,6,-5,10,-10,15v6,-1,3,4,3,7v-2,-3,-2,-9,-6,-5v1,14,8,29,18,18v-3,7,-20,15,-11,20r13,-11v-6,7,-7,13,-5,17r5,-4v-9,9,4,16,-4,24v3,4,8,-4,12,-5v-4,7,-19,13,-12,20r13,-11v-3,6,-15,11,-11,17r6,-4v-5,4,-7,9,-2,14r6,-3v-3,5,-9,7,-10,13r8,-6v-4,8,-23,17,-15,24r11,-9v-3,7,-15,13,-11,20r7,-5r-28,29v1,-4,5,-9,0,-11v-5,10,-21,9,-27,19v2,-4,9,-8,5,-12r-11,10r4,-7r-7,3r2,-3v-12,-2,-15,5,-21,10v4,-4,7,-8,2,-13r-7,6r1,-3r-7,3v1,-3,6,-7,2,-9r-13,9v5,-15,-6,1,-11,-6v-3,8,-10,7,-13,0r-11,10v7,-6,9,-11,7,-13r-7,3v5,-2,7,-11,-2,-9r-5,6v5,-7,2,-12,9,-17v-9,-4,-9,-7,-6,-20r-11,9v5,-8,25,-18,9,-22r-7,2v3,-6,20,-15,6,-17r1,-7r-3,2v3,-4,3,-10,2,-17r-6,4v3,-5,13,-11,4,-15v4,-5,9,-10,3,-15r-7,6v3,-7,16,-16,13,-22r-6,1v0,-3,5,-11,-1,-10r-8,7v4,-6,17,-15,15,-20r-7,3v1,-1,1,-3,0,-5r-8,5v3,-6,10,-8,11,-16r-7,5v4,-8,13,-14,7,-20r-12,9v11,-8,14,-14,10,-18r-5,3v6,-1,8,-7,4,-18r22,-24v-7,-11,-14,15,-21,9r-3,2v1,-3,7,-6,3,-9r-9,7v6,-8,15,-11,9,-22r-9,5v12,-11,17,-18,15,-20v-6,-1,-6,4,-9,6xm135,-42v5,-7,23,-14,14,-22v-5,7,-23,13,-14,22xm122,-251v5,10,12,-4,18,-7v-5,-9,-13,3,-18,7","w":183,"k":{"j":47}},"C":{"d":"82,-261v4,10,12,-3,19,-8v-5,-10,-13,5,-19,8xm32,-269v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm17,-206v10,-7,1,-13,10,-19v-4,-5,-8,4,-12,6v4,-7,16,-13,16,-21v-8,4,-8,-4,-14,2v15,-12,20,-21,15,-27r-5,0v8,9,-3,12,-10,17v2,-4,6,-6,6,-11r-6,4v4,-8,16,-12,14,-23r30,-32r-4,9v11,-1,15,-9,21,-15v-1,4,-8,11,2,9r11,-11v-1,12,8,6,14,2r-4,6r11,-4r-1,7r16,-2v-1,4,-6,10,3,8r11,-11v-4,1,-5,6,-4,13r6,-2v0,3,-4,8,0,9r13,-11v-2,7,-3,9,-9,10v3,10,10,4,17,0v-6,7,-9,7,-10,20r10,-7v-1,3,-4,7,2,6v-10,7,1,20,7,11v-2,5,-9,9,-5,14v-4,7,-22,15,-16,22r21,-15r-2,23v2,-1,5,-3,6,0v-2,8,-12,2,-7,11r3,-2r-13,16r2,-8r-10,0v4,-7,21,-14,12,-21r-27,25v-2,-3,-4,-8,-7,-4v4,-2,4,-5,3,-9v-5,3,-5,-5,-7,-8r-6,6v4,-9,24,-19,15,-27v-7,8,-11,3,-19,10v5,-9,26,-18,17,-27r-19,17v3,-4,11,-8,6,-13r-9,5v3,-8,-14,0,-14,-7r-15,15v3,-5,8,-7,9,-13v-13,3,-17,16,-26,23v2,6,6,-1,9,-3v-9,9,-12,17,-11,22r11,-10v-3,6,-15,12,-11,17v6,1,6,-4,9,-6v-13,12,-18,19,-15,21v13,-8,2,17,15,6v-11,8,-8,14,-9,27r5,-2v-2,4,-5,5,-5,11v2,-1,5,-3,4,2r5,-4v-3,5,-15,14,-5,18v-4,1,-5,3,-4,7r4,-2v1,8,-1,13,-6,15r7,-3v-3,4,-10,9,-3,13r3,-2v-5,5,-3,9,-5,16r8,-6v-3,5,-10,7,-10,15v10,-2,1,11,13,6v-5,7,3,13,13,11r14,-13r-8,11v7,0,9,-3,10,4v15,-5,21,-19,32,-28v-1,-6,-5,-2,-9,0v4,-3,5,-6,4,-10r-4,2v3,-4,6,-9,4,-16v-2,3,-5,5,-8,2v7,-10,16,-10,27,-18v-2,4,-10,8,-6,11r9,-6v-3,2,-1,5,0,8r14,-8v-3,5,-14,10,-10,15v11,3,10,-12,17,-7r-23,24v8,9,17,-11,25,-15v-6,6,0,14,-7,19r2,2v-6,-3,-12,5,-6,10r9,-8v3,9,-4,9,-2,14r8,-6v-2,4,-7,5,-8,11r4,-2v-2,3,-5,5,-5,10r3,-2v-2,6,-11,12,-7,17r5,-2v-3,5,-9,7,-9,14r9,-8r-24,27r2,-8v-7,4,-12,18,-22,13r-13,13v4,-7,20,-13,13,-22r-20,19r11,-14v-8,1,-10,8,-15,12v2,-4,9,-8,2,-10v-12,0,-18,5,-23,12r8,-10v-6,0,-12,1,-12,-5v-9,10,-19,-12,-27,5v3,-5,14,-10,10,-15r-10,4v2,-5,9,-10,2,-13r-17,15r8,-14v-3,-9,5,-15,-10,-11v3,-2,1,-5,0,-8r-3,2v2,-4,4,-8,0,-11r-14,11v8,-8,8,-21,14,-28r-14,11v3,-6,17,-12,11,-17r-5,2v0,-9,7,-15,2,-21r-10,7v7,1,3,-22,12,-24v-2,-4,-7,1,-10,2v5,-5,7,-10,-2,-12v5,-7,16,-9,12,-21v-9,-2,3,15,-10,8v5,-11,3,-18,4,-27r-6,4v1,-4,10,-9,6,-11r-8,3v8,-5,6,-12,8,-21r-8,4v8,-5,11,-11,10,-17r-8,6v8,-6,11,-11,8,-14","w":186,"k":{"z":22,"y":73,"j":75}},"D":{"d":"65,-261v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm111,-259v-8,-1,-4,3,-2,6v3,-1,3,-3,2,-6xm124,-103v3,-7,14,-15,11,-21r-5,2v2,-4,5,-5,5,-11r-4,0v4,-4,7,-9,4,-17v-9,-4,-1,-15,8,-23v-5,-8,-11,4,-17,7v8,-8,10,-19,7,-34r-7,4v4,-7,12,-9,13,-19v-5,-1,-6,3,-9,5v2,-3,6,-5,5,-11v-8,-1,-9,5,-13,8v3,-6,9,-8,9,-16r-7,4v6,-6,8,-12,3,-21r-13,12v6,-5,8,-16,-3,-17r-8,5v6,-5,7,-9,0,-13r-17,15r5,-7v-17,-1,-18,12,-28,18v7,8,-9,11,-4,16r4,-2v-1,4,-6,8,-2,11r7,-5v-2,5,-13,10,-9,15r12,-8v-14,12,-9,19,-14,31r8,-4v-4,6,-12,8,-12,17v11,1,12,-7,18,-11v-4,8,-19,15,-10,23r7,-6v-3,6,-18,13,-9,19r12,-10v-3,5,-14,11,-10,16r6,0v-5,6,-18,14,-4,17r8,-6v-4,6,-19,13,-10,19r7,-6v-2,4,-9,9,-5,12r-4,0v8,1,-3,8,2,9r6,-4v-2,4,-7,5,-6,12r7,-6r-9,12v11,-2,9,18,19,5v5,6,10,10,13,0v4,5,7,7,10,0r6,6r23,-23v-8,-4,10,-12,-3,-13r3,-10xm12,-53v1,-3,5,-6,1,-8v5,4,7,-1,4,-4v3,-5,15,-9,8,-15r-12,9v4,0,5,-5,4,-16v-4,0,-4,2,-2,5v-3,-4,-6,2,-9,4v4,-7,12,-9,13,-19r-4,2v5,-4,-3,-14,4,-16v-4,-2,-7,4,-11,6v3,-6,19,-15,7,-17r2,-8r-8,6v3,-6,15,-11,12,-17v-2,1,-5,3,-6,0v1,-4,7,-10,0,-11v2,-8,6,-16,2,-23r-4,2v7,-9,11,-17,-1,-23v3,-5,14,-11,11,-15v-6,0,-9,4,-14,7v3,-5,12,-11,4,-15r4,2v-4,-17,5,-32,-4,-38v4,0,5,-6,4,-18r-5,4v2,-3,6,-5,5,-11r-5,2v9,-4,10,-10,5,-19r-5,4r20,-21r-4,7v11,-3,23,1,29,2r15,-13r-9,11v7,-3,13,-2,19,-5v-3,3,-6,6,2,5r6,-5r-3,3r6,-1r-2,3v5,0,10,0,12,-3v-3,5,-14,10,-6,15r15,-14v-1,2,-1,4,0,6r14,-11r-6,7r10,-2v-5,5,-7,10,0,14r11,-8v-1,3,-8,9,0,8v1,7,8,1,11,-2r-5,9r3,-1r-1,5r5,-2r-2,2v5,1,5,10,10,6v-2,3,-5,5,-2,8v5,-2,11,-2,13,-6v-3,8,-20,18,-11,25r9,-8v-2,4,2,10,6,6v-2,4,-8,7,-6,11r4,-2v-3,6,-16,13,-7,17r13,-7v-3,6,-15,12,-11,17r3,-2r-2,6r4,-2v-2,5,-10,10,-4,15r6,-4r-2,10v4,-1,4,-3,2,-6v1,3,4,1,6,0v-6,9,-9,17,-8,29r-4,-8v-1,8,7,21,4,9v3,4,8,-4,12,-5v-4,6,-12,8,-12,17r8,-4v-1,3,-8,7,-4,10r6,-4v-7,8,-16,16,-12,25r6,-4r0,9r8,-5v-3,6,-15,13,-12,19v-3,-2,-5,-2,-4,3v6,-3,11,1,14,-5v-2,4,-12,9,-8,13r6,-4v-4,7,-18,14,-8,21r4,-2v-3,6,-15,11,-11,18r3,-3v-3,5,2,7,6,8v-9,8,-12,13,-11,17r7,-5r-15,20r6,-1r-15,17r0,-6r-19,17v1,-3,7,-7,3,-9r-17,15v1,-4,8,-9,4,-11r-9,7v0,-4,0,-5,-2,-10v-4,7,-8,4,-16,6v3,-7,21,-16,12,-22v-6,8,-24,14,-21,24v-3,5,-7,1,-12,4v3,-4,10,-5,10,-12r-4,3v3,-3,1,-5,-4,-4r-19,15r4,-6v-4,0,-9,1,-9,-4r-18,14v4,-7,13,-9,14,-19v-11,0,-13,8,-19,13v2,-4,6,-6,5,-12r-11,3v4,-3,5,-6,4,-10r-4,2v3,-1,1,-4,0,-6v-5,1,-8,3,-13,8v5,-8,19,-16,17,-23r-8,4r4,-12r-8,4v6,-6,4,-9,6,-17","w":196,"k":{"z":59,"s":81,"o":63,"m":-13,"j":50,"d":78,"c":-18,"a":12,"J":38,"A":30,".":38}},"E":{"d":"40,-230v0,0,-2,0,-2,1v0,0,2,0,2,-1xm19,-147r2,-3r-12,5v4,-7,21,-14,12,-21r-8,6v6,-6,8,-11,6,-13r-4,2v4,-3,5,-6,4,-10r-4,2v13,-11,-3,-29,6,-36v-2,-4,-6,1,-9,2v8,-7,2,-20,11,-25v-1,-3,-4,-1,-6,0v2,-4,10,-9,6,-13r-10,7v8,-6,11,-11,8,-13r-4,2r2,-25r-15,10v14,-12,18,-29,32,-40v-2,4,-2,6,4,5r4,-4v-1,3,-6,6,-2,8r11,-9r-2,3v5,-2,11,-2,12,-7v-3,5,-9,9,-2,13r11,-9r-1,3v4,-4,8,-2,13,-5v-3,3,-6,6,2,5v-3,3,-1,5,4,4r9,-9r-4,7r12,-9v-2,2,-6,5,-2,7r6,-3r-2,3r7,-3r-2,3v5,1,9,1,10,-3r-2,5v9,1,13,-3,17,-7v-9,5,1,13,-6,17v4,0,7,1,6,-4v8,2,3,2,2,7v4,-2,10,-2,6,-7v6,3,-8,9,-2,15r5,-4v-8,7,-3,12,-5,21r5,-3v-2,5,-13,10,-9,15r4,0v-5,3,-8,14,-14,9r4,-5r-11,5r2,-5v-5,2,-10,2,-12,-2r-13,13v2,-4,7,-5,8,-11v-8,-1,-10,4,-14,7r6,-7v-7,1,-16,6,-19,-2v-7,10,-22,12,-21,30r4,-2v-4,2,-5,6,-4,10r6,-4v-4,7,-10,12,-4,17r5,-4v-2,5,-11,10,-7,14r4,-2v-3,3,-6,6,0,7r11,-7v-4,1,-4,4,-2,7r10,-5v-4,9,2,9,6,3r1,4r10,-7r-2,3r13,-3v-2,2,0,5,0,7r14,-9v-7,8,2,10,1,19r12,-10v-2,4,-6,8,-2,12r8,-6v-2,4,-12,9,-8,13r10,-5v-3,6,-14,12,-10,17r4,-2v-2,4,-12,9,-8,13v4,-1,8,-4,10,0r-17,19v5,-9,4,-9,1,-17r-22,21v5,-7,12,-10,15,-19v-4,7,-16,14,-21,4v-3,8,-5,4,-9,8r1,-6r-5,2v2,-2,0,-7,0,-10r-27,27v8,6,6,15,0,21r8,-4v-2,4,-10,9,-6,13r7,-2v-4,10,-21,19,-15,29r14,-11r-2,5r7,-5v-4,3,-4,6,2,7r17,-15r-9,13v11,2,11,-8,15,2v2,-8,14,-3,17,-10r-3,12v10,-2,14,-10,20,-15r-9,11v7,2,12,2,17,-2r0,6r4,-2v-8,6,-11,10,-8,13v10,1,11,-7,17,-11v-2,6,-11,12,-7,17v-5,-4,-7,1,-4,4r11,-8v-7,5,-9,12,-7,18r9,-8v-9,8,-12,12,-11,15r6,-2r-4,10r5,-4r-15,17v5,-6,7,-10,4,-13r-13,11v0,-2,2,-6,0,-7r-17,9v1,-4,4,-10,-4,-8r-12,12v2,-4,10,-8,6,-12r-6,4v3,-2,0,-3,-2,-5r-11,5v2,-1,2,-3,0,-5r-13,11r7,-10v-8,3,-12,-3,-17,4r2,-4v-12,-2,-16,5,-21,10r8,-10v-9,1,-14,5,-18,10v4,-3,5,-13,12,-10v1,-5,-4,-4,-8,-4v4,-6,19,-13,10,-19v-6,4,-11,18,-19,14v7,1,2,-5,2,-8r-13,12v4,-6,8,-12,9,-21r-9,7v9,-9,2,-7,9,-24v-6,1,-8,6,-12,9v5,-6,18,-14,4,-17r-4,2v6,-9,20,-17,22,-27v-10,-1,-11,7,-16,10v2,-3,6,-5,6,-10r-4,2r2,-9r-6,4v3,-5,14,-11,10,-16v-7,-1,-8,3,-11,6v6,-8,8,-14,9,-23r-4,0v4,-4,7,-8,2,-13v3,1,5,-1,4,-4v-4,2,-6,0,-10,4v3,-5,14,-11,10,-16","w":159,"k":{"j":74}},"F":{"d":"6,-185v5,-7,16,-12,11,-23v2,-2,8,-4,4,-7v-7,1,-11,5,-15,9r13,-15r-7,4v3,-6,13,-12,5,-17r-8,5v4,-8,22,-15,16,-24r-12,9v7,-4,0,-12,4,-17r-5,4v5,-5,11,-15,1,-19v7,-3,2,-19,8,-23r-4,2v8,-6,10,-17,21,-19v-3,6,-17,12,-10,19r22,-19v-1,3,-7,8,1,7v-2,2,0,5,0,8r17,-11r-1,5v9,-3,9,1,15,-3v-2,2,-6,5,-2,7v4,-8,14,-2,19,-9r-4,5v7,-4,7,3,12,0r0,2v5,-5,9,-3,13,2r11,-7v-2,3,0,9,6,7r4,-4v-3,5,-11,9,-6,15r15,-13v-4,7,-14,13,-9,23v2,-1,5,-3,6,0v-3,5,-9,7,-10,15r8,-3v-2,3,-8,6,-4,9r8,-2v-8,5,-16,26,-22,12v-6,3,-8,-1,-13,3r4,-7v-9,1,-13,8,-19,13v5,-5,10,-10,2,-15v-6,1,-2,5,0,8v-7,-8,-12,2,-17,7v1,-2,10,-8,2,-7r-6,5v2,-3,8,-6,4,-9r-29,26v3,9,10,3,16,0v-4,5,-12,11,0,12v-4,5,-10,9,-6,17v-1,-4,-3,-4,-6,-2v2,4,3,10,8,6v-1,4,-6,8,-2,11r6,-4v-3,6,-17,13,-8,17r19,-17r-2,6v3,-3,5,-1,7,2r10,-10r-4,8v12,2,16,-5,23,-9v-3,5,-7,10,-2,15r10,-8v3,7,7,9,13,10r-2,9v6,-4,5,4,10,0v-4,7,-19,14,-12,21v-3,4,-10,8,-3,12r15,-12v-1,3,-8,7,-4,10r-17,17v7,-13,-4,-18,-10,-8v-5,-5,-8,0,-11,4r-10,-10v-5,3,-11,18,-13,6v-7,1,0,-6,-4,-9v-5,7,-21,12,-17,21v5,1,8,-1,9,-4v-4,3,-4,5,-3,9r13,-11v-3,6,-21,16,-10,19r0,6r-3,-2v6,8,-6,17,2,23r5,-4v-3,6,-16,11,-11,19v-1,-4,-3,-4,-6,-2v0,5,7,4,12,4r-2,11r6,-4r-3,6r6,-4v-4,6,-10,16,-9,21r6,-3r-10,11r7,-4v-7,5,-16,26,-20,12r-10,7r4,-6r-11,4v2,-4,7,-8,3,-13r-9,8v4,-4,0,-12,-6,-12v1,-2,7,-7,0,-6r-10,10v4,-7,21,-14,12,-21r-9,7v7,-11,9,-24,1,-32v2,-5,12,-10,8,-15r-4,2v3,-5,14,-10,6,-15r-8,5r2,-13r-9,8v3,-6,15,-13,7,-18v4,-4,11,-7,4,-11r-11,9v3,-6,16,-15,13,-20r-8,4v2,-8,4,-12,4,-23r-5,3v2,-5,13,-10,9,-15r-8,2v8,-2,-3,-7,2,-11r-3,1v6,-5,8,-12,3,-20xm32,-257v5,-8,23,-12,16,-23v-6,8,-25,13,-16,23xm95,-274v5,10,13,-5,19,-8r-2,-7","w":151,"k":{"w":45,"s":28,"m":19,"j":78,"d":32,"J":128,".":197}},"G":{"d":"51,-267v-7,1,-7,4,-3,8v3,-1,3,-4,3,-8xm23,-225v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm8,-192v3,-6,15,-12,11,-18r-4,2v4,-2,5,-5,4,-9r-6,4v3,-1,1,-4,0,-6v9,5,2,-5,6,-10r-6,4v5,-7,16,-12,8,-21r-4,0v7,-9,16,-17,11,-28r-5,1r42,-41v-2,4,-5,7,-2,11r15,-13v-10,20,6,-1,12,7r9,-9r-2,9v12,1,16,-5,23,-11v-2,4,-6,6,-8,11r12,-9v-3,5,-11,8,-6,15r17,-15r-9,11r7,-2r-2,4r10,-2v-5,7,3,8,8,6v-2,4,-7,5,-6,12v10,1,10,-6,15,-10v-3,7,-18,15,-9,21r9,-8v-2,3,-6,7,2,6v4,-10,4,1,11,0r8,-8v-8,10,-14,23,-6,35r-2,4r6,-2v-2,7,-6,13,-4,17r10,-4v-3,6,-13,11,-12,17r6,-2v-1,2,-7,7,0,6r10,-10r-23,25v8,-8,10,-13,9,-15r-15,13v2,-3,6,-7,-2,-6v-2,3,-4,1,-6,-1v3,-6,21,-14,12,-19r-19,19v0,-6,-5,-6,-10,-4v4,-4,4,-8,0,-12r-6,2v2,-4,10,-8,6,-11r-6,2r4,-17r-5,3v3,-4,6,-7,4,-13r-16,13r2,-3v-15,-1,-23,-1,-23,3v3,-1,1,-3,0,-5v-13,7,-25,14,-30,28r4,-2v-4,5,-12,11,-2,14v-2,4,-12,7,-8,11r6,-2v-2,7,-6,14,-2,21r7,-4v-4,6,-14,13,-3,16v-6,5,1,16,-6,19v2,4,6,-1,9,-2v-8,5,-4,17,-13,23v3,2,8,-1,12,-2v-3,6,-15,11,-12,17r12,-4v-4,4,-8,8,-4,15r8,-6v-8,5,-11,12,-8,18r8,-4v-4,6,-19,13,-10,19r15,-13v-2,4,-10,8,-8,13r8,-6v-3,6,-15,11,-8,17r10,-7v-2,5,-8,10,-6,15v11,-2,7,-9,15,-15v-3,8,-12,14,-7,23r17,-16v-2,3,-10,9,0,8r10,-9v-2,2,-6,5,-2,7v4,-4,7,-4,9,2v5,-10,23,-16,19,-28r-6,1v6,-8,9,-13,6,-15r-3,2v0,-8,4,-12,1,-21v-11,-2,-14,5,-19,9v3,-5,11,-8,6,-15v-11,-1,-11,8,-17,12v4,-4,4,-8,0,-13r-14,7v6,-6,17,-19,10,-25r-13,10v4,-6,16,-13,13,-19v-7,-1,-7,5,-11,7v4,-6,12,-11,5,-17r16,-15r-2,6r11,0r-4,3v15,-5,22,3,33,-5r-4,5v5,-2,9,-4,11,2r14,-13r-8,10r8,-2v-3,2,-1,6,0,9v5,-1,3,-4,0,-6v7,1,4,14,13,4r-2,6r6,-4v-3,5,-15,12,-4,15r4,-1v-3,6,-13,11,-12,17v2,-4,6,-4,10,-2v-2,8,-7,14,-6,19r4,-2v-3,5,-12,11,-4,15r12,-9v-4,7,-19,12,-14,22v6,1,7,-3,10,-5v-2,4,-12,9,-4,11v-3,8,2,21,-9,25v4,4,10,-7,15,-9v-6,8,-18,12,-12,26v-5,-1,-2,7,-3,10r3,-2r-34,32r4,-7v-11,0,-13,8,-19,13v4,-7,22,-14,13,-21r-28,23r5,-10r-7,4r2,-4v-4,2,-8,2,-10,-2v-3,5,-7,10,-12,4v3,-4,5,-7,0,-10r-15,14v2,-3,10,-9,0,-8r-5,6v2,-3,6,-6,1,-8r-7,2v1,-4,8,-8,4,-11v-7,2,-10,0,-15,5r3,-5r-7,4v3,-5,9,-9,5,-15r-17,15v4,-8,21,-16,12,-23v-3,1,-5,6,-8,4v1,-1,5,-1,4,-4v-7,-1,-13,1,-15,5r4,-7r-8,4v3,-6,9,-8,9,-16r-5,4v4,-4,12,-13,-2,-11r-8,7v3,-6,17,-12,11,-17v-5,0,-6,4,-9,6v6,-5,8,-13,6,-23v-8,-1,-9,5,-13,8r7,-11r-10,7v3,-5,10,-7,10,-15r-4,2v0,-6,5,-14,4,-18r-6,2v2,-16,16,-4,14,-21r-12,8v4,-5,8,-10,4,-17r-10,8v11,-10,9,-13,10,-29r-4,4v3,-7,17,-14,10,-21r-12,9v3,-6,17,-12,8,-17r-13,12v2,-5,13,-11,9,-16r-5,4v5,-3,7,-8,7,-17xm130,-46v2,6,5,6,9,2v-2,-5,-5,-7,-9,-2","w":195,"k":{"Y":78,"T":10}},"H":{"d":"114,-275r13,-15r-7,2r22,-22r-3,11v7,-4,15,9,22,0v-1,3,-7,8,1,7r12,-11r-10,11r6,-1r-2,5r4,-2v-3,6,-11,8,-11,17v7,1,8,-3,11,-6v-9,7,-7,16,-15,26v4,5,11,-1,13,-4r-8,11v7,1,8,-5,12,-7v-3,6,-13,11,-12,17r8,-2v-2,4,-7,5,-6,11r6,-4v-2,4,-7,5,-6,11v2,-1,4,-1,6,0v-7,6,-10,10,-8,13r4,-1r-2,14r10,-5v-11,9,-16,15,-12,20r8,-6v-2,5,-13,10,-9,15v6,1,9,-1,11,-4v-4,7,-12,9,-13,19v4,-4,6,-4,7,3r8,-5v-3,6,-13,11,-12,17r6,-2v-12,7,6,19,-6,24r0,4r6,-4v-6,6,-8,10,-6,13v5,1,3,-2,2,-4v11,5,-4,11,-2,20r6,-3r-2,3r8,-1v-4,7,-19,13,-12,22v7,1,8,-5,12,-8v-4,6,-16,13,-13,19r3,-2v-1,3,-4,6,2,5r6,-5v-5,6,-16,14,-4,18r-2,4r8,-4v-4,6,-16,13,-13,19r5,-2v-3,2,-1,6,0,9v3,-1,5,-2,2,-5v7,3,-4,10,-7,15v-3,-8,-12,5,-21,0v3,-4,8,-9,2,-12r-13,12v6,-5,0,-13,4,-19r-6,2v0,-7,9,-10,2,-15v-5,5,-3,-8,-9,-2v4,-5,8,-10,0,-13v2,-1,5,-1,4,-5r-4,2v2,-4,11,-10,7,-13r-5,1r2,-7r-4,2v4,-10,2,-16,11,-22v-3,-5,-10,0,-11,4v4,-5,5,-11,4,-17r-4,2v2,-4,2,-7,-2,-9v3,-4,12,-9,2,-10r2,-5v-5,2,-8,2,-9,-2r-15,9v4,-3,-1,-7,-2,-11r-15,13v2,-3,8,-6,4,-11v-6,5,-11,6,-13,2v-5,6,-14,10,-17,18v9,-2,13,-10,19,-15v-5,9,-18,18,-19,28r9,-2v-7,7,-12,14,-3,13r6,-5v-9,6,-9,14,-10,24r4,-2v-3,4,-5,8,0,11v-4,2,-5,7,-4,13v3,-1,5,1,4,4r6,-4v-3,6,-17,12,-10,18r4,-2r-17,22v1,-3,3,-5,0,-7r-13,11r2,-7r-13,11v3,-7,20,-15,11,-20r-20,18v4,-7,22,-15,13,-22v-5,5,-11,4,-16,11v5,-9,8,-11,9,-24r-6,4v10,-6,2,-17,7,-24v-5,-2,-1,-8,-1,-13r-4,2v3,-5,17,-14,4,-15r0,-7r-8,3v4,-8,24,-16,15,-24r-19,17v5,-7,19,-15,17,-22r-7,3r2,-5r-4,2v2,-5,2,-11,4,-15r-9,7v2,-4,15,-13,5,-16v6,-1,8,-6,4,-13r-6,1v2,-4,11,-10,2,-10v3,-6,6,-12,4,-21v-3,2,-5,2,-6,-2v6,-4,8,-8,4,-13r-4,2v3,-5,14,-12,11,-16v-6,-1,-9,1,-11,4v6,-3,8,-9,6,-16r-12,10v4,-6,12,-8,12,-17r-9,7v2,-5,15,-12,5,-14v1,-3,6,-6,4,-9r-9,7v3,-5,12,-9,7,-17r-4,2v2,-4,7,-5,6,-11r-4,2v7,-5,6,-18,0,-24r-5,4v8,-13,16,-13,27,-26r-9,11r11,-4v2,6,13,9,17,4r0,3r7,-5v-2,4,-11,9,-7,13r3,-2v-2,3,-7,7,-3,10r5,-3v8,16,-14,20,-5,30r9,-7v-3,5,-15,11,-8,16r9,-7v-6,7,-3,15,-12,20v2,4,7,0,11,0v-2,4,-7,5,-6,11r10,-7v-7,7,-11,12,-10,16r7,-5v-3,6,-14,12,-10,17r3,-2v-1,4,-7,8,-3,11v6,0,6,-6,10,-8v-8,7,-13,14,-1,13r7,-7v-1,3,-4,6,-2,9r6,-2v-3,1,-1,4,0,6v5,-6,8,-8,15,-9v-4,4,7,7,9,11v9,-3,6,-16,13,-11r-2,-6v4,4,9,-5,13,-7r-2,-4v8,13,16,-3,24,-9v1,-4,0,-7,-5,-6v-7,7,-10,16,-19,13v1,-4,8,-11,4,-14r-10,5v3,-6,13,-11,12,-17r-4,2r2,-7r-4,2v3,-5,8,-10,4,-17r-6,2v6,-1,8,-8,6,-20r-4,1v4,-4,10,-10,-2,-9xm144,-133v-1,-6,-11,-6,-5,0r5,0","w":183},"I":{"d":"30,-227v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm17,-279r20,-26v-4,1,-4,6,0,13v4,-3,10,-11,11,-1r13,-12v-8,8,-5,18,-13,25v9,7,17,-10,26,-13v-4,6,-12,8,-13,18v7,-1,11,-5,15,-9v-5,8,-15,11,-17,22v14,-2,-3,28,11,22v-6,6,-6,13,-13,19v6,1,8,6,7,14v-4,-1,-14,6,-7,11v2,-3,4,-6,10,-5r-3,5r8,-5v-3,6,-11,10,-8,20r6,-4v-2,4,-8,8,-6,11r6,-3v-3,5,-9,9,-2,13r4,-2v-5,6,-11,11,-8,22r4,0v-7,7,2,17,-7,20v-1,4,1,4,3,2r-1,11r5,-2v-1,4,-7,10,-1,11r9,-7r-19,20v4,1,4,3,2,6r9,-4v-3,4,-7,8,-1,10v-2,3,-11,6,-6,9v2,-3,4,-5,3,1r4,-1v-3,4,-6,7,-4,14r4,-1v-2,5,-13,11,-9,14v2,-2,5,-4,8,-1v-3,6,-3,14,5,11v-2,4,-10,8,-8,13r6,0r-16,18v7,-15,-3,-9,-8,-4v2,-2,6,-5,2,-7v-2,2,-6,9,-7,3r-11,10r7,-11r-4,1v4,-4,5,-11,-3,-10r3,7v-5,-5,-9,-3,-13,2v6,-6,13,-12,6,-21r-6,0v2,-4,12,-9,8,-12r-4,1r2,-3r-8,3v2,-4,7,-5,6,-11r-9,8v3,-6,15,-12,11,-17r-4,2v-4,-5,8,-9,4,-13r-9,8r24,-26v-8,-9,-17,12,-26,16v2,-5,11,-11,7,-15v1,3,4,1,6,0v-1,-3,-3,-3,-6,-1v5,-10,-3,-10,-7,-4v3,-7,22,-17,11,-22v-5,-1,-6,3,-9,5v2,-5,13,-10,9,-15r-13,12v5,-5,9,-17,17,-10v0,-3,-4,-11,-13,-7v3,-6,15,-12,11,-17r-11,4v4,-8,23,-16,14,-24r-7,6v1,-3,6,-8,2,-10r-4,2v4,-6,-1,-8,-5,-4v3,-4,12,-12,0,-11r-4,4v6,-8,14,-16,13,-22r-4,2v1,-4,8,-12,-2,-11v2,-4,11,-7,6,-12r-13,10v4,-6,15,-12,7,-19r-3,2v4,-5,6,-13,5,-16r-9,5r28,-31v-9,-9,-19,14,-28,18v3,-5,9,-7,9,-15r-5,4v3,-7,8,-11,9,-20","w":90,"k":{"T":-16}},"J":{"d":"81,-218v13,-10,4,-34,17,-40v-4,-5,-9,-3,-13,1v10,-8,6,-16,7,-26r-9,4r9,-11r-3,0r16,-18r-2,5r6,-2v-3,2,-1,5,0,8v6,-6,6,10,11,1v-5,-4,-3,-7,2,-10v-1,3,-6,7,-2,9r9,-2v0,5,-5,13,4,11r9,-9v-4,7,-15,12,-15,20v6,-1,10,-4,6,2v1,3,2,6,6,4v-12,7,0,22,-10,27v2,4,7,-1,10,-2v-3,4,-12,10,-4,13r4,-1v-2,6,-11,11,-6,18r7,-5v-3,7,-14,14,-11,20r10,-2v-9,9,-12,14,-12,28v5,-4,8,2,12,0v-3,7,-13,13,-12,20r12,-6v-2,4,-12,10,-8,13r4,-1v-7,8,3,11,1,22v-6,0,2,7,-3,18r9,-9v-5,5,-14,15,-3,20v-3,5,-10,5,-10,13r4,-2v0,5,-5,14,3,13r6,-6v-6,7,-14,12,-9,25v-2,2,-8,4,-4,7r4,-4r-4,11r4,-1r-6,7v3,-1,6,-3,8,0v-3,1,-8,2,-4,5r-22,25v-3,-6,-7,3,-11,5r4,-5v-5,0,-12,1,-12,-4r-10,9v1,-2,5,-6,0,-5r-8,7v2,-3,5,-5,5,-10v-8,-1,-9,5,-13,8v1,-3,8,-7,4,-9r-14,13v3,-6,13,-12,5,-17v-3,8,-10,-3,-13,2r2,-6v-8,4,-12,-7,-17,2r24,-26v-8,-6,-17,12,-25,15r0,-5r3,1v-1,-9,-10,-10,-15,-3v2,-4,6,-5,6,-11v-9,-1,-10,6,-15,9v3,-6,11,-8,11,-17r-7,6v7,-6,10,-11,7,-13v-3,2,-6,0,-11,4v2,-4,8,-5,8,-12r-4,3v2,-4,9,-9,5,-12r-5,2v0,-3,4,-6,0,-7v7,3,4,-4,4,-8r-4,2v5,-1,6,-5,2,-11r-6,4v7,-6,10,-11,8,-13r-8,2v2,-4,10,-8,8,-13r-6,2r19,-20v-2,5,-12,11,-8,16r13,-11v-3,4,-1,6,4,7v3,-3,9,-5,5,-9v2,4,5,-1,8,-2v-4,5,-15,11,-4,15r6,-2v-1,3,-8,7,-4,9v9,-4,9,5,14,-3v-2,4,-6,6,-7,11r6,-4v-4,6,-16,13,-13,19r7,-4v-1,3,-4,6,2,5r8,-7v-7,8,-12,12,-12,22r6,-2v-4,5,2,19,2,8v1,2,3,0,5,0v-3,4,-10,9,-4,13v17,-14,28,-25,28,-48r-5,1v2,-4,9,-8,5,-11r-11,10v5,-7,16,-12,11,-23r-3,2v5,-4,5,-7,1,-12r-7,5v2,-5,13,-10,9,-15r-5,2v1,-8,8,3,11,-2v-2,-4,-4,-8,-8,-3r4,-8r-5,2v2,-4,11,-9,7,-13r-9,7v2,-5,13,-11,9,-14r-6,3v2,-6,1,-14,0,-20r-5,4v2,-4,11,-9,7,-13v-5,-1,-7,1,-9,3v2,-5,13,-11,9,-14r-3,1v3,-6,4,-12,3,-16xm114,-251v5,10,11,-3,17,-6v-5,-10,-11,3,-17,6","w":152},"K":{"d":"30,-262v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm26,-258v0,0,-2,0,-2,1v0,0,2,0,2,-1xm124,-297v6,3,8,-13,15,-6v-4,1,-2,4,0,6r9,-8v-2,3,-7,7,1,6r8,-7v-1,3,-6,6,-4,9r13,-11v-2,4,-6,6,-7,11r7,-2v-4,4,-12,7,-5,11r7,-8r-2,6r6,-2r-2,9r4,-1v-12,13,-19,26,-32,38v5,8,11,-4,17,-7v-5,9,-18,17,-19,26r9,-6v-9,8,-12,19,-18,28r5,-2v0,10,-13,14,-10,22r-2,-3v-3,4,-11,8,-6,14r6,-3v-6,8,-19,13,-13,28v-2,3,-7,3,-6,9v7,1,8,-3,11,-6v-1,2,-4,5,-2,7r4,-1v-4,3,-5,5,-4,9r8,-2v-5,5,-1,7,-4,13r8,-4r-4,10r7,-4v-2,3,-4,5,-2,9r4,-2r-2,6r4,-2r-2,18v6,0,11,0,13,-3v-6,5,-2,8,-4,12r6,-1v-2,1,-2,5,0,11r3,-2v-1,1,-1,3,0,5r4,-1r-4,9r12,-2v-1,4,-3,4,-6,2v1,4,1,8,7,7r-1,10r3,-2v-1,12,-2,11,2,18r11,-9r-7,13r7,-4r-2,4r8,-4r-19,24v-2,-4,-6,2,-7,-3v5,2,9,-4,4,-8r-15,13r6,-9v-8,0,-11,-2,-16,5r4,-5r-5,1v1,-2,7,-6,0,-5r-8,8v4,-6,12,-8,12,-17r-8,0r2,4v-15,-3,3,-13,2,-19v-2,-2,-8,0,-15,9r2,-7v-5,2,-6,0,-11,5v2,-5,13,-9,9,-14v-8,7,-6,-11,-13,-4v3,-5,5,-10,2,-16r-7,1v3,-6,13,-12,5,-17r-7,4v1,-3,4,-6,-2,-5r-8,7v3,-6,17,-12,10,-18r-15,12v2,-5,13,-11,9,-16r-4,0v3,-6,17,-12,8,-17r-24,23r11,-13v-14,3,-25,19,-22,29r9,-6v-7,5,-14,22,-5,30v-8,6,-14,12,-3,11r0,-3v2,4,5,2,8,0v-2,5,-13,9,-9,14r11,-7v-4,7,-16,12,-11,22v0,-8,4,0,7,-4r-13,15v4,-9,-1,-10,-5,-3v-8,-5,-14,-3,-19,3v2,-5,12,-13,4,-16v-6,3,-12,5,-15,10v13,-15,-9,-23,4,-31v-3,-4,-6,2,-9,4v2,-5,13,-10,9,-15r-9,8v3,-7,18,-14,11,-21r-8,6v8,-7,3,-14,2,-24r-5,4v2,-5,12,-12,7,-17r-9,7v3,-5,9,-7,9,-15r-7,6v7,-6,9,-10,7,-13r-4,2v0,-9,11,-12,10,-19v-6,-1,-6,5,-8,8v2,-1,4,-10,-2,-8v3,-2,3,-5,0,-9r-7,6v3,-6,11,-8,11,-17r-6,4r2,-6r-5,4r22,-24v-5,-10,-8,8,-15,2v2,-9,10,-17,0,-20r-7,5v3,-6,15,-12,11,-17r-4,0v9,-6,0,-9,0,-18r-5,4v3,-6,15,-12,11,-17r-8,4v2,-4,12,-9,8,-13r-4,2r2,-8r-6,4r2,-11v-2,2,-4,5,-7,2v8,-11,15,-13,24,-21v-3,-5,-5,-5,-9,-1r1,3v-8,-7,-13,7,-20,11v5,-6,12,-10,7,-20v6,-1,8,-6,6,-13r-7,6r22,-24v-6,16,7,10,13,5v-2,3,-6,8,2,7r7,-7r-22,24r5,-1r-2,5r22,-21v-1,3,-9,9,0,8r8,-8v0,12,-15,13,-9,25r4,-2r-3,5r6,-3v-2,4,-11,9,-7,13r5,-2v-2,5,-13,11,-9,14v3,-2,6,-5,5,2r4,-2v-1,3,-6,6,-4,10r4,-2v-3,3,-6,6,0,7v-5,5,-10,12,-1,15v-4,1,-5,6,-4,13v1,-2,5,-2,11,2v4,-8,20,-14,16,-23r-20,19v18,-18,27,-29,26,-33r-4,2v4,-8,18,-17,15,-24r-5,3v3,-6,13,-10,11,-18r3,0v-3,-10,-1,-17,10,-18xm30,-218v0,6,5,3,9,2v5,-9,27,-17,18,-28xm142,-279v5,12,12,-3,19,-7v-5,-12,-12,3,-19,7xm98,-203v4,9,10,0,15,-4v-4,-9,-10,0,-15,4","w":188,"k":{"z":8,"y":76}},"L":{"d":"15,-264v2,-4,11,-9,7,-13r-4,2v5,-9,0,-7,4,-17r-9,8v6,-6,14,-13,15,-19v3,4,7,-3,11,-5v-2,3,-6,4,-6,9r8,-4v-3,1,-1,4,0,6r9,-8r-4,8v5,4,16,2,15,13v7,-1,6,2,3,5r6,-4v-3,6,-15,12,-7,17r5,-4v-1,4,-6,8,-4,12v6,1,7,-4,10,-6v-3,6,-16,13,-13,18v6,1,8,-2,11,-5v-2,5,-13,10,-9,15v-4,1,-5,3,-4,7v2,-1,6,-7,5,0r8,-5v-4,7,-20,14,-11,20r11,-10v-5,1,-8,8,-9,19r7,-2v-10,7,-1,16,-6,24r8,-2v-7,8,-11,10,-9,21r4,-2v-1,3,-5,6,-3,9r10,-7v-3,6,-11,7,-11,16r11,-5v-4,8,-24,16,-15,24r11,-10v-2,3,-6,5,-6,10r4,-2v-1,3,-6,6,-4,9r10,-5r-15,16v11,1,3,6,9,13v-4,0,-5,3,-4,9r8,-5v-3,7,-14,14,-11,20v7,0,8,-6,13,-9v-4,6,-17,12,-13,19r6,-4v-1,4,-5,7,-3,11v4,-8,16,-2,21,-10v0,6,-2,4,0,13v7,-13,25,0,33,-16v-2,4,-9,8,-5,13r13,-11v-2,3,-8,6,-4,9v4,-2,8,-6,9,0v-3,-3,-5,-1,-4,4v5,1,8,-1,9,-4v-1,2,-4,5,-1,7r4,-2r-3,6r6,-2v-4,2,-4,5,-3,9r5,-1v-2,4,-11,8,-5,11r3,-2v-4,7,-20,14,-11,20r15,-13r-10,11r8,-3v-8,6,-11,20,-24,13v0,-9,-5,-8,-11,-4r-13,13v2,-5,13,-10,9,-15r-16,15r7,-9v-13,0,-20,2,-26,10v4,-5,13,-9,7,-16r-16,15v2,-4,8,-7,6,-12r-12,4v2,-3,2,-5,-3,-4r-10,10v5,-2,8,-12,-1,-10r-6,6v1,-3,6,-7,2,-9v-5,1,-11,2,-13,6v2,-5,9,-12,2,-15r-9,7v2,-3,6,-5,5,-11r-4,2v4,-1,5,-5,4,-11v-1,6,-3,2,-7,5v3,-5,14,-12,3,-14v6,-2,0,-8,6,-10r-4,0r10,-11v-8,1,-8,-8,-13,-1v3,-7,13,-15,5,-21r-7,5v4,-5,13,-11,3,-14v3,-6,17,-11,10,-17r-10,8r0,-6r4,2v-3,-7,-3,-14,0,-20r-7,5v8,-10,5,-16,3,-27r-7,5v3,-6,15,-11,11,-18v4,-7,22,-14,13,-21r-18,17v0,-3,5,-8,1,-9r-9,7v3,-7,16,-14,13,-20r-4,2r2,-12r-7,4v2,-5,13,-11,9,-14v-8,-1,-9,4,-13,7v4,-6,16,-13,13,-19r-4,0v9,-7,-1,-6,0,-16r4,3v-2,-6,-4,-14,-9,-7v7,-7,8,-14,5,-22v4,-1,5,-4,4,-8xm30,-257v2,10,9,0,14,-3v-2,-10,-9,0,-14,3","w":152,"k":{"z":15,"y":75,"v":76,"r":13,"g":35,"f":9,"W":122,"V":107,"T":114,"C":66}},"M":{"d":"30,-257v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm22,-247v1,3,5,3,6,0r-6,0xm37,-122v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm11,-149v3,-7,14,-15,11,-21r-4,0v2,-4,7,-5,6,-11v-6,4,-5,-4,-9,0v4,-2,4,-5,3,-9r-7,5v2,-4,6,-6,7,-11r-3,2v2,-5,13,-11,9,-14r-7,5r3,-8r-11,10v6,-9,17,-12,19,-24v-11,0,-13,8,-19,13v11,-10,8,-23,17,-30v-2,-4,-7,0,-11,0v4,-7,6,-16,5,-22r-9,7v3,-5,15,-11,11,-16v-7,-1,-7,5,-11,7v9,-7,6,-15,15,-22v-1,-2,-3,-2,-6,-2r17,-18v0,4,-4,9,0,11v5,-9,7,-4,15,-6r-2,4v7,1,11,-1,14,-4v-3,6,-16,12,-9,19r22,-17v-3,4,-7,9,0,11r8,-3v-7,6,-10,10,-8,13r12,-6v-5,3,-11,17,0,18v-2,3,-7,4,-6,10r6,-4v-2,5,-6,10,0,13r5,-4v-2,5,-11,11,-7,15r3,-2r-1,4v12,-5,7,4,5,11r8,-6r-21,23v7,7,14,-9,21,-12v-7,6,-2,10,-4,15r7,-3v-5,4,-5,10,-2,16r4,-2v-1,5,-9,11,-5,15v2,-2,5,-2,7,0v-2,3,-8,6,-4,9v7,-5,6,2,4,6r11,-8v-4,7,-12,9,-13,19r4,-2v-4,4,-4,8,3,9r13,-11r-5,9v5,-4,12,-6,7,-14r-3,1v10,-6,13,-13,9,-20r-4,2v2,-5,13,-10,9,-15r-9,8v2,-5,13,-10,9,-15v4,-1,5,-3,4,-7r-4,1v4,-5,8,-10,4,-18r-8,5v4,-7,23,-16,12,-22v1,-3,6,-6,4,-9r-6,2v7,-8,2,-10,11,-11v-1,-5,-4,-4,-8,-2v4,-6,12,-8,12,-17v-6,-1,-6,4,-9,6v9,-13,6,-22,18,-32r0,8r7,-6r2,10r19,-17v-5,6,-10,12,-4,17r14,-12r-3,8v3,-1,7,-3,9,0v-4,3,-4,5,-3,9v16,-3,3,6,3,11r7,-6v-4,3,-4,6,-3,10r7,-4v-1,3,-6,6,-4,9r10,-7v-4,6,-20,15,-6,18v-1,4,-9,12,0,11r6,-5v-4,5,-9,8,-6,17v-5,0,-7,8,0,7r6,-6v-3,6,-20,15,-11,19v-1,2,-6,6,-2,7r3,-1v0,3,-2,7,0,10r8,-5v-2,4,-10,8,-8,13r6,-4v-2,4,-11,9,-7,13r5,-4r-1,6r3,-2v-3,7,-20,15,-11,20r8,-5v-2,5,-6,10,0,13r7,-2v-3,5,-13,7,-10,15v2,-1,5,-3,6,0r-3,7r7,-6v-3,5,-11,9,-10,15r10,-7v-3,6,-16,13,-13,18r7,-3v-1,4,-6,9,-4,13v5,-2,7,-1,12,-6v-9,6,-13,13,-12,20r4,-1v4,5,-5,11,-4,16v7,1,8,-5,12,-7v-7,7,-9,16,-17,22v4,1,5,4,4,9v-8,0,-10,10,0,8v0,-8,3,-3,7,-6r-3,6r5,-2v-2,5,-10,10,-8,16r6,-2r-3,10r3,-2r-15,17v-2,-7,-14,7,-14,-6v-6,4,-10,-2,-6,-6r-7,4v3,-5,10,-11,3,-15r-11,10r4,-8r-9,6v8,-7,9,-13,13,-22v-6,2,-3,-6,-4,-10r-4,2v2,-3,2,-6,-2,-7v2,-3,11,-6,6,-10r-11,10v10,-8,10,-18,18,-26v-3,-8,-7,3,-11,-2v1,-2,10,-8,2,-7r-9,9v12,-11,6,-14,22,-28v-4,-5,-7,1,-11,4v2,-4,6,-9,2,-13r-30,28v1,3,4,3,8,2r-4,16v2,-3,7,-3,4,0v-3,2,-8,4,-4,7r4,-1v-3,5,-13,10,-12,16r4,-2v-2,5,-11,11,-7,15r6,-3v-3,5,-11,11,-4,16v-6,2,-8,6,-6,11r10,-7r-23,24v2,-4,3,-8,-2,-10v-6,5,-15,-3,-18,4r2,-9v-3,1,-5,2,-2,5v-4,-2,-7,4,-11,6v12,-11,17,-17,15,-20v-6,-1,-8,2,-10,5v1,-4,4,-4,2,-9r-5,2r3,-7r-5,1v5,-11,-9,-14,4,-20v-5,-10,-11,3,-17,6v2,-4,11,-9,7,-13r-9,7v3,-7,20,-15,11,-20v2,-2,6,-5,0,-4r-5,6v4,-7,0,-8,1,-15r-10,3v3,-5,14,-11,10,-16v-5,1,-10,3,-13,0v3,-5,14,-10,6,-15r-22,21v8,9,-12,13,-2,20r8,-6v-2,5,-6,8,-6,15r3,-2r-5,11v5,1,6,-3,9,-5v-2,5,-13,10,-9,15r8,-6v-3,3,-10,10,-3,13v-4,1,-4,3,-3,7r9,-5v-4,6,-12,9,-13,18r7,-2v-2,5,-11,11,-7,15v-4,-2,-11,-3,-24,-3r0,-4r-5,4v1,-4,4,-8,2,-12r-8,6v6,-5,6,-9,-2,-11v1,-4,4,-9,-2,-9v2,-4,12,-8,8,-11v-6,3,-8,-1,-13,3v3,-6,10,-8,11,-16v-7,0,-10,3,-13,7v3,-6,10,-8,11,-16r-4,1v1,-3,6,-7,2,-9v-3,2,-5,0,-9,4v3,-6,11,-8,11,-17r-7,5v3,-5,12,-8,7,-14r-11,7v3,-6,10,-8,11,-16r-11,9v3,-6,11,-8,11,-17r-4,2v1,-3,7,-8,0,-7v3,-3,4,-6,2,-8r-5,4v1,-3,7,-6,3,-9r-7,5v4,-7,20,-14,11,-20v-2,1,-4,3,-5,0v1,-4,9,-9,5,-13v-7,-1,-7,5,-11,8xm194,-247v3,8,8,2,13,-2v-3,-9,-8,-2,-13,2","w":245},"N":{"d":"31,-268v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm133,-94v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm142,-199v2,-4,8,-9,6,-13r-6,4v3,-5,12,-9,10,-16r-8,3v2,-4,6,-6,5,-12r-7,6v2,-4,11,-10,2,-11v-1,-6,4,-8,4,-19r-6,2v1,-13,24,-19,17,-29v-9,1,-14,0,-19,5v4,-6,6,-5,12,-7v-3,-8,-7,-4,-12,0r21,-22v-8,10,0,12,-2,20v8,1,9,-5,13,-8v-4,8,2,3,11,6v-2,3,-8,6,-4,10r11,-10v-4,6,-14,10,-9,19r15,-13v-3,7,-14,14,-11,20r13,-11r-17,18v4,1,6,3,4,8r5,-2r-2,5r8,-5v-3,5,-11,9,-10,15r8,-2v-3,6,-18,12,-9,18r11,-9v-3,7,-19,16,-8,21r4,-3v-2,5,-13,10,-9,15r9,-7v-2,4,-7,5,-6,11r6,-2v0,8,-10,12,-4,19r8,-4v-4,7,-16,11,-11,20v7,1,3,-2,1,-5v15,2,-5,12,4,15v-1,3,-6,6,-4,9r8,-4v-2,1,-2,3,0,5v-5,-2,-6,9,-8,13v6,1,7,-3,10,-5v-7,7,-11,13,-10,15r4,-2v-1,3,-6,7,-2,9r10,-7v-4,3,-6,12,-12,7r0,9r8,-3v-2,4,-7,5,-6,11r6,-4v-4,3,-5,5,-4,9r4,-2v-7,9,-6,13,-8,21r10,-6v-4,7,-12,9,-13,19r9,-4v0,6,-6,11,-4,15r4,-2r-4,9r10,-7v-4,6,-11,7,-10,18r10,-7r-37,37v2,-5,6,-11,-4,-9r-8,7v5,-4,7,-9,3,-15r-13,11v2,-4,-3,-8,-10,-7r-5,5v9,-13,18,-16,28,-26v8,1,18,-17,27,-22v-7,-11,-16,9,-24,13r2,4v-3,-2,-5,-5,-8,-2r4,6v-5,-6,-9,-1,-13,3r2,4v-7,-8,-11,2,-16,7v-2,-4,-3,-12,-8,-7v7,-5,4,-10,6,-17r-6,2v8,-13,-3,-11,-7,-5v2,-6,7,-11,3,-17r-11,7v2,-5,17,-13,6,-14v5,-1,3,-5,2,-9r-8,3r6,-11r-6,2v3,-7,20,-15,11,-20r-22,16v3,-5,10,-7,10,-15r-6,2v1,-4,8,-8,4,-11r-11,4v2,-4,9,-8,5,-11r-4,2v3,-6,17,-12,8,-17r-8,6v1,-4,4,-10,-3,-8r-2,2r-2,-6v1,5,4,3,7,0v3,-14,-16,-23,-10,-10v-2,-3,-4,-3,-6,0v2,2,2,4,0,5v-5,-3,-15,6,-7,11r3,-2v-2,4,-8,8,-6,13r10,-7v-6,6,-12,12,-10,26r6,-4v-3,7,-4,14,-11,18v12,2,1,9,9,13r-4,21r4,-2v-6,2,-7,7,-5,16r5,-3v1,10,-2,11,-4,18r4,-2v-4,2,-5,6,-4,10r8,-6r-22,24v1,-3,3,-6,0,-8r-13,12v1,-3,9,-10,0,-9r-6,5r6,-9r-9,4v2,-7,13,-16,5,-21v-4,5,-7,3,-9,-2r-15,13v5,-8,15,-11,17,-22r-8,6v11,-5,6,-19,12,-28v-11,7,-3,-12,-12,-8r2,4r-3,-1v3,-6,17,-13,5,-16v-9,-5,12,-12,2,-16v2,-3,6,-8,-2,-7r-9,9v5,-8,15,-10,13,-24v-6,-1,-2,4,-2,7v-1,-3,-4,-3,-7,-2v2,-6,17,-14,5,-16r0,-15r-9,8v3,-7,16,-14,13,-21r-6,0v2,-4,10,-9,6,-13r-13,11v5,-7,17,-14,17,-22r-6,4r2,-4r-6,2r2,-4r-7,4v4,-7,16,-12,11,-22v-10,2,-3,-6,-2,-11r-4,1v2,-3,8,-6,4,-9r-6,4r6,-9r-9,7v3,-6,10,-8,11,-16r-8,1v2,-4,12,-9,8,-13r-4,0v9,-6,0,-13,4,-20r-6,4r4,-9r-6,1v7,-7,2,-14,10,-18v-3,-4,-7,3,-10,4r21,-22r-6,10v12,0,14,-9,21,-14v-2,3,-8,6,-4,9r4,-2v-3,1,-1,4,0,6r14,-9v-3,4,-10,9,-4,13r17,-15v-2,4,-9,8,-5,11v4,-3,5,0,7,4v-4,-1,-3,2,-3,5v6,-4,10,-1,16,-5v-3,5,-9,6,-9,14r5,-1v-1,3,-7,6,-3,9r7,-6r-2,6r4,-2r-13,15v5,0,6,3,7,7r8,-2v-7,8,0,20,9,15v2,1,4,6,5,2v-4,6,-14,9,-9,18r4,-2r-2,6r11,-4v-4,6,-16,13,-13,19v7,1,8,-3,11,-6r-3,6r7,-4v-2,4,-7,5,-6,11r8,-2v-9,9,-12,15,-6,26v5,1,7,-1,4,-4v6,1,6,2,13,-2v-3,6,-15,12,-7,17r7,-5v-6,6,-8,10,-4,13v6,-9,21,-12,19,-25r-9,6v5,-5,12,-8,7,-17r-7,2v7,-4,10,-9,9,-18xm139,-54r1,8v4,-6,19,-10,12,-18v-4,4,-12,4,-10,14xm152,-39v-5,2,-1,5,1,8v-5,-6,-9,-1,-13,3r2,4v-7,-8,-11,2,-16,7v-2,-4,-3,-12,-8,-7v7,-5,4,-10,6,-17r-6,2v8,-13,-3,-11,-7,-5v2,-6,7,-11,3,-17r-11,7v2,-5,17,-13,6,-14v5,-1,3,-5,2,-9r-8,3r6,-11r-6,2v3,-7,20,-15,11,-20r-22,16v3,-5,10,-7,10,-15r-6,2v1,-4,8,-8,4,-11r-11,4v2,-4,9,-8,5,-11r-4,2v3,-6,17,-12,8,-17r-8,6v1,-4,4,-10,-3,-8r-2,2r-2,-6v1,5,4,3,7,0v3,-14,-16,-23,-10,-10v-2,-3,-4,-3,-6,0v2,2,2,4,0,5v-5,-3,-15,6,-7,11r3,-2v-2,4,-8,8,-6,13r10,-7v-6,6,-12,12,-10,26r6,-4v-3,7,-4,14,-11,18v12,2,1,9,9,13r-4,21r4,-2v-6,2,-7,7,-5,16r5,-3v1,10,-2,11,-4,18r4,-2v-4,2,-5,6,-4,10r8,-6r-22,24v1,-3,3,-6,0,-8r-13,12v1,-3,9,-10,0,-9r-6,5r6,-9r-9,4v2,-7,13,-16,5,-21v-4,5,-7,3,-9,-2r-15,13v5,-8,15,-11,17,-22r-8,6v11,-5,6,-19,12,-28v-11,7,-3,-12,-12,-8r2,4r-3,-1v3,-6,17,-13,5,-16v-9,-5,12,-12,2,-16v2,-3,6,-8,-2,-7r-9,9v5,-8,15,-10,13,-24v-6,-1,-2,4,-2,7v-1,-3,-4,-3,-7,-2v2,-6,17,-14,5,-16r0,-15r-9,8v3,-7,16,-14,13,-21r-6,0v2,-4,10,-9,6,-13r-13,11v5,-7,17,-14,17,-22r-6,4r2,-4r-6,2r2,-4r-7,4v4,-7,16,-12,11,-22v-10,2,-3,-6,-2,-11r-4,1v2,-3,8,-6,4,-9r-6,4r6,-9r-9,7v3,-6,10,-8,11,-16r-8,1v2,-4,12,-9,8,-13r-4,0v9,-6,0,-13,4,-20r-6,4r4,-9r-6,1v7,-7,2,-14,10,-18v-3,-4,-7,3,-10,4r21,-22r-6,10v12,0,14,-9,21,-14v-2,3,-8,6,-4,9r4,-2v-3,1,-1,4,0,6r14,-9v-3,4,-10,9,-4,13r17,-15v-2,4,-9,8,-5,11v4,-3,5,0,7,4v-4,-1,-3,2,-3,5v6,-4,10,-1,16,-5v-3,5,-9,6,-9,14r5,-1v-1,3,-7,6,-3,9r7,-6r-2,6r4,-2r-13,15v5,0,6,3,7,7r8,-2v-7,8,0,20,9,15v2,1,4,6,5,2v-4,6,-14,9,-9,18r4,-2r-2,6r11,-4v-4,6,-16,13,-13,19v7,1,8,-3,11,-6r-3,6r7,-4v-2,4,-7,5,-6,11r8,-2v-9,9,-12,15,-6,26v5,1,7,-1,4,-4v6,1,6,2,13,-2v-3,6,-15,12,-7,17r7,-5v-6,6,-8,10,-4,13v6,-9,21,-12,19,-25r-9,6v5,-5,12,-8,7,-17r-7,2v7,-4,10,-9,9,-18r-6,2v2,-4,8,-9,6,-13r-6,4v3,-5,12,-9,10,-16r-8,3v2,-4,6,-6,5,-12r-7,6v2,-4,11,-10,2,-11v-1,-6,4,-8,4,-19r-6,2v1,-13,24,-19,17,-29v-9,1,-14,0,-19,5v4,-6,6,-5,12,-7v-3,-8,-7,-4,-12,0r21,-22v-8,10,0,12,-2,20v8,1,9,-5,13,-8v-4,8,2,3,11,6v-2,3,-8,6,-4,10r11,-10v-4,6,-14,10,-9,19r15,-13v-3,7,-14,14,-11,20r13,-11r-17,18v4,1,6,3,4,8r5,-2r-2,5r8,-5v-3,5,-11,9,-10,15r8,-2v-3,6,-18,12,-9,18r11,-9v-3,7,-19,16,-8,21r4,-3v-2,5,-13,10,-9,15r9,-7v-2,4,-7,5,-6,11r6,-2v0,8,-10,12,-4,19r8,-4v-4,7,-16,11,-11,20v7,1,3,-2,1,-5v15,2,-5,12,4,15v-1,3,-6,6,-4,9r8,-4v-2,1,-2,3,0,5v-5,-2,-6,9,-8,13v6,1,7,-3,10,-5v-7,7,-11,13,-10,15r4,-2v-1,3,-6,7,-2,9r10,-7v-4,3,-6,12,-12,7r0,9r8,-3v-2,4,-7,5,-6,11r6,-4v-4,3,-5,5,-4,9r4,-2v-7,9,-6,13,-8,21r10,-6v-4,7,-12,9,-13,19r9,-4v0,6,-6,11,-4,15r4,-2r-4,9r10,-7v-4,6,-11,7,-10,18r10,-7r-37,37v2,-5,6,-11,-4,-9r-8,7v5,-4,7,-9,3,-15r-13,11v2,-4,-3,-8,-10,-7r-5,5v9,-13,18,-16,28,-26v8,1,18,-17,27,-22v-7,-11,-16,9,-24,13r2,4xm152,-39v-5,2,-1,5,1,8v-5,-6,-9,-1,-13,3r2,4v-7,-8,-11,2,-16,7v-2,-4,-3,-12,-8,-7v7,-5,4,-10,6,-17r-6,2v8,-13,-3,-11,-7,-5v2,-6,7,-11,3,-17r-11,7v2,-5,17,-13,6,-14v5,-1,3,-5,2,-9r-8,3r6,-11r-6,2v3,-7,20,-15,11,-20r-22,16v3,-5,10,-7,10,-15r-6,2v1,-4,8,-8,4,-11r-11,4v2,-4,9,-8,5,-11r-4,2v3,-6,17,-12,8,-17r-8,6v1,-4,4,-10,-3,-8r-2,2r-2,-6v1,5,4,3,7,0v3,-14,-16,-23,-10,-10v-2,-3,-4,-3,-6,0v2,2,2,4,0,5v-5,-3,-15,6,-7,11r3,-2v-2,4,-8,8,-6,13r10,-7v-6,6,-12,12,-10,26r6,-4v-3,7,-4,14,-11,18v12,2,1,9,9,13r-4,21r4,-2v-6,2,-7,7,-5,16r5,-3v1,10,-2,11,-4,18r4,-2v-4,2,-5,6,-4,10r8,-6r-22,24v1,-3,3,-6,0,-8r-13,12v1,-3,9,-10,0,-9r-6,5r6,-9r-9,4v2,-7,13,-16,5,-21v-4,5,-7,3,-9,-2r-15,13v5,-8,15,-11,17,-22r-8,6v11,-5,6,-19,12,-28v-11,7,-3,-12,-12,-8r2,4r-3,-1v3,-6,17,-13,5,-16v-9,-5,12,-12,2,-16v2,-3,6,-8,-2,-7r-9,9v5,-8,15,-10,13,-24v-6,-1,-2,4,-2,7v-1,-3,-4,-3,-7,-2v2,-6,17,-14,5,-16r0,-15r-9,8v3,-7,16,-14,13,-21r-6,0v2,-4,10,-9,6,-13r-13,11v5,-7,17,-14,17,-22r-6,4r2,-4r-6,2r2,-4r-7,4v4,-7,16,-12,11,-22v-10,2,-3,-6,-2,-11r-4,1v2,-3,8,-6,4,-9r-6,4r6,-9r-9,7v3,-6,10,-8,11,-16r-8,1v2,-4,12,-9,8,-13r-4,0v9,-6,0,-13,4,-20r-6,4r4,-9r-6,1v7,-7,2,-14,10,-18v-3,-4,-7,3,-10,4r21,-22r-6,10v12,0,14,-9,21,-14v-2,3,-8,6,-4,9r4,-2v-3,1,-1,4,0,6r14,-9v-3,4,-10,9,-4,13r17,-15v-2,4,-9,8,-5,11v4,-3,5,0,7,4v-4,-1,-3,2,-3,5v6,-4,10,-1,16,-5v-3,5,-9,6,-9,14r5,-1v-1,3,-7,6,-3,9r7,-6r-2,6r4,-2r-13,15v5,0,6,3,7,7r8,-2v-7,8,0,20,9,15v2,1,4,6,5,2v-4,6,-14,9,-9,18r4,-2r-2,6r11,-4v-4,6,-16,13,-13,19v7,1,8,-3,11,-6r-3,6r7,-4v-2,4,-7,5,-6,11r8,-2v-9,9,-12,15,-6,26v5,1,7,-1,4,-4v6,1,6,2,13,-2v-3,6,-15,12,-7,17r7,-5v-6,6,-8,10,-4,13v6,-9,21,-12,19,-25r-9,6v5,-5,12,-8,7,-17r-7,2v7,-4,10,-9,9,-18r-6,2v2,-4,8,-9,6,-13r-6,4v3,-5,12,-9,10,-16r-8,3v2,-4,6,-6,5,-12r-7,6v2,-4,11,-10,2,-11v-1,-6,4,-8,4,-19r-6,2v1,-13,24,-19,17,-29v-9,1,-14,0,-19,5v4,-6,6,-5,12,-7v-3,-8,-7,-4,-12,0r21,-22v-8,10,0,12,-2,20v8,1,9,-5,13,-8v-4,8,2,3,11,6v-2,3,-8,6,-4,10r11,-10v-4,6,-14,10,-9,19r15,-13v-3,7,-14,14,-11,20r13,-11r-17,18v4,1,6,3,4,8r5,-2r-2,5r8,-5v-3,5,-11,9,-10,15r8,-2v-3,6,-18,12,-9,18r11,-9v-3,7,-19,16,-8,21r4,-3v-2,5,-13,10,-9,15r9,-7v-2,4,-7,5,-6,11r6,-2v0,8,-10,12,-4,19r8,-4v-4,7,-16,11,-11,20v7,1,3,-2,1,-5v15,2,-5,12,4,15v-1,3,-6,6,-4,9r8,-4v-2,1,-2,3,0,5v-5,-2,-6,9,-8,13v6,1,7,-3,10,-5v-7,7,-11,13,-10,15r4,-2v-1,3,-6,7,-2,9r10,-7v-4,3,-6,12,-12,7r0,9r8,-3v-2,4,-7,5,-6,11r6,-4v-4,3,-5,5,-4,9r4,-2v-7,9,-6,13,-8,21r10,-6v-4,7,-12,9,-13,19r9,-4v0,6,-6,11,-4,15r4,-2r-4,9r10,-7v-4,6,-11,7,-10,18r10,-7r-37,37v2,-5,6,-11,-4,-9r-8,7v5,-4,7,-9,3,-15r-13,11v2,-4,-3,-8,-10,-7r-5,5v9,-13,18,-16,28,-26v8,1,18,-17,27,-22v-7,-11,-16,9,-24,13r2,4xm168,-136v4,9,10,0,15,-4v-4,-10,-10,0,-15,4","w":211},"O":{"d":"28,-271v10,-19,24,-20,36,-34v-3,5,-10,9,-9,15v7,-5,13,-18,22,-9r8,-4v-3,1,-1,4,0,6r11,-6v-4,3,2,5,4,7v4,-4,7,-9,13,-5v-1,3,-7,9,1,8v4,-9,13,-2,17,-12v-3,6,-16,14,-7,19v4,-1,2,-4,0,-6v1,2,5,2,11,0r-2,-4v3,2,3,4,2,8r7,-5r-26,27r4,4r32,-30v-3,6,-17,12,-8,17v-3,-2,-5,-5,-8,-2v2,6,7,7,13,4r-3,-4r7,0v0,3,-3,7,2,6r9,-9v-3,5,-12,10,-11,16v3,-3,6,-1,8,2v-5,4,-7,8,0,11r3,-2v-4,3,2,5,4,7v-5,2,-7,12,2,10r7,-8v-7,7,-4,14,-11,19v6,2,8,-1,11,-4v-3,6,-16,13,-13,18r8,-5v-4,4,-8,9,0,11v-4,-1,-9,-5,-11,0v1,8,7,5,13,2r-4,13r7,-6v-3,6,-15,12,-11,17r8,-4r-2,9r9,-7v-3,6,-15,12,-11,17v3,-2,5,-2,5,2v-2,4,-12,8,-7,13r6,-4v-7,7,-1,8,-4,18r5,-4v-2,5,-13,10,-9,15r11,-3v-2,5,-12,9,-7,14r4,-1r-4,12r5,-3v-2,4,-11,9,-7,13r7,-2v-2,16,-18,20,-9,26r8,-6r-8,11v5,1,6,-3,9,-5v-4,7,-17,14,-14,20v8,1,9,-4,13,-7v-2,3,-8,6,-4,9v-12,10,-17,16,-15,18r9,-3r-31,29v1,-5,0,-8,-6,-7v-6,9,-7,2,-16,1v1,2,4,4,2,6v-9,0,-6,-5,-8,-9r-16,15v2,-4,3,-8,1,-12r-14,8r4,-9v-11,-3,-19,5,-23,1r2,-5v-8,4,-11,-9,-17,2v3,-5,14,-10,6,-15v-3,3,-6,11,-11,6v1,-4,9,-12,0,-11r-6,5v2,-4,7,-5,6,-11r-6,0v4,-3,0,-10,0,-15r-5,4v4,-5,9,-9,5,-16r-7,0v6,-7,9,-11,7,-13r-7,1r2,-5r-6,4v3,-4,12,-10,4,-13r17,-17v-1,7,2,4,5,2r-5,-9r-21,18r2,-6r-11,10v3,-6,16,-11,11,-19r-5,4v1,-2,5,-6,1,-7v7,3,5,-4,4,-8v-9,-2,6,-8,0,-11r-5,4r5,-11r-5,4r7,-12v-6,1,-2,-4,-2,-7r-5,3v6,-2,7,-7,5,-14v-1,3,-2,6,-5,4v3,-5,7,-10,3,-17v0,5,-9,3,-5,2v3,-2,6,-4,3,-8v7,5,4,-7,4,-7r-5,4v5,-6,9,-13,0,-17v5,1,8,-3,9,-13r-6,4v2,-4,7,-5,6,-11r-9,7v3,-6,17,-13,5,-16v4,-3,5,-6,4,-10r-4,2r4,-7r-6,3v17,-18,4,-10,-3,-3v7,-9,15,-16,16,-26xm59,-148v-4,1,-4,3,-2,6r4,-2v-2,5,-10,10,-4,15r7,-4v-2,4,-9,8,-5,11v5,-2,6,0,11,-5v-2,5,-13,11,-9,14r3,-1v-6,7,-2,9,-1,16r4,-2v-1,4,-10,9,-6,11r7,-1r-5,16r5,-3r-4,13v4,-5,6,1,8,5r11,-5v-1,3,-4,6,-2,10r9,-7v-3,7,6,7,13,6v3,-6,9,-21,17,-19v3,-6,9,-9,9,-18r-13,9v8,-8,10,-13,10,-24r-6,4v4,-8,14,-16,15,-24r-6,1v4,-2,-5,-8,0,-13r-5,4v3,-6,11,-8,11,-17v-7,-2,-6,6,-11,3v1,-6,9,-13,5,-17r-9,7v3,-8,20,-17,11,-24r-11,8v2,-5,13,-10,9,-15r-9,5v4,-7,20,-14,11,-20r-11,7v4,-6,16,-12,13,-18r-6,4v4,-7,22,-16,13,-22r-22,20r21,-26v-4,-11,-11,10,-13,0r-6,2v4,-3,-2,-5,-4,-8r-13,8r2,-8v-6,2,-10,3,-13,-1r-22,22r17,-19v-16,2,-20,17,-23,28v2,-1,5,-3,4,2r6,-4v-5,8,-18,13,-13,24v-2,3,-8,5,-4,8r11,-2v-11,9,-3,13,-7,26r3,-2v-5,7,2,12,-5,16r2,2xm92,-31v5,-8,23,-13,19,-23v-12,2,-23,11,-19,23","w":189,"k":{"W":37,"O":-13,"L":-15}},"P":{"d":"50,-273v0,2,0,2,2,2v0,-2,0,-2,-2,-2xm26,-266v-8,-1,-4,3,-2,6v4,-1,4,-3,2,-6xm111,-149v0,0,-2,0,-2,1v0,0,2,0,2,-1xm28,-41v4,-4,15,-8,7,-14v-3,4,-12,7,-7,14xm33,-164v-8,-4,-8,1,-15,0v3,-5,13,-9,8,-15r-4,2v1,-5,3,-9,-2,-11v2,-3,10,-7,6,-10r-4,4r2,-7r-7,3v2,-3,5,-5,5,-10r-7,5v8,-7,7,-10,7,-18r-5,3v2,-4,9,-8,5,-11r-5,2v2,-4,11,-9,7,-13r-4,2r2,-8r-4,2v1,-9,8,-14,0,-22r-7,6v4,-6,17,-15,15,-20v-6,0,-11,1,-13,5v9,-7,13,-28,26,-24v-3,1,-1,4,0,6v2,-5,7,-7,15,-6v-3,1,-1,4,0,6r13,-12r-4,8v4,-4,5,1,7,5r7,-7v-1,2,-5,6,-1,7r14,-13r-3,8r7,-2v-3,1,-1,4,0,6r13,-12v-3,5,-7,9,0,12r11,-6v-3,5,-13,11,-5,15v5,-6,8,-9,18,-9v-1,5,1,5,4,3r-2,2v5,3,11,11,7,2v6,1,1,4,4,9r8,-3v-3,3,-3,6,-4,10r4,-1v-5,5,0,9,3,14r11,-9v-4,7,-13,15,-7,20r11,-9v-3,6,-16,11,-11,19r5,-4r-3,11v2,-2,4,-2,3,2r4,-2v-4,2,-5,5,-4,9r10,-7v-4,6,-11,8,-12,16r6,-1v-1,5,-7,12,0,14r-4,17v2,-1,5,-3,6,0v-9,1,-2,8,-8,11v6,1,7,-3,10,-5v-3,6,-10,8,-11,16v3,-3,5,1,9,-3v-3,5,-15,11,-11,16r3,-2v-1,3,-5,7,0,8r6,-4v-7,7,-13,16,-11,22r4,-2v-10,16,-22,20,-35,32r1,-6r-11,0v2,3,2,5,-3,4v2,-3,0,-5,-4,-4r-11,11v2,-4,6,-6,7,-11r-13,9v4,-3,4,-7,0,-11v-3,3,-7,12,-9,4r-26,24v2,7,11,2,13,-2v-2,4,-8,8,-6,11r8,-5v-3,6,-10,8,-11,16r6,-2v-3,6,-17,12,-8,17v2,-2,6,-3,4,-7v5,4,8,-1,11,-4v-4,7,-18,15,-15,22v7,-2,10,-7,15,-11v-4,7,-13,9,-11,22r7,-2v-6,7,-11,17,-20,13r2,4v-2,-4,-5,1,-8,2v4,-4,4,-10,2,-17v-4,6,-9,8,-15,2v2,-3,2,-5,-1,-7r-12,9v7,-6,10,-10,8,-13r-8,4v4,-5,15,-11,4,-15v-1,3,-2,6,-5,4r3,-8r-3,2v3,-6,14,-10,9,-18v5,2,8,-4,4,-8r-10,8v3,-12,2,-20,-2,-21v2,-4,12,-7,8,-11v-4,2,-5,0,-9,4v6,-5,7,-11,5,-17r-4,2v5,-11,6,-12,6,-24r-4,2v8,-7,-6,-8,0,-16r-3,1v4,-7,7,-11,5,-18xm55,-186v5,6,10,-3,15,-6v-2,3,-6,4,-6,9r10,-7v-2,5,-16,12,-7,15v-4,1,-5,3,-4,7v2,-1,4,-3,5,0v-4,5,-9,9,-4,15r8,-2r-4,7v10,0,12,-6,17,-11v-2,4,-10,8,-8,13r12,-9v-1,3,-6,7,-2,9r7,-6r-4,8v16,-4,22,-18,34,-26v-1,-7,-7,-14,2,-18v-6,-3,-3,-10,-2,-17r-10,7v3,-5,13,-10,10,-14r-6,1v2,-7,6,-12,4,-16r-8,6v4,-8,22,-16,13,-23r-13,11v6,-5,-1,-4,-1,-11v-12,3,-15,-1,-23,4r2,-4r-7,2r4,-5v-17,3,-22,17,-32,27v7,1,7,-5,11,-7v-5,8,-17,14,-9,24v9,2,-2,-8,4,-9r0,5r4,-1r-4,10r9,-7","w":179,"k":{"z":9,"y":95,"w":14,"v":59,"s":26,"q":30,"o":39,"m":140,"j":57,"g":29,"e":24,"d":35,"c":26,"a":31,"J":107,"A":68,".":195}},"Q":{"d":"48,-262v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm100,-268v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm59,-31v-6,0,-2,4,0,7v5,-1,3,-4,0,-7xm162,-37v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm100,-105v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm50,-185v5,6,8,3,14,-5r-29,33v10,12,15,-21,28,-13v-8,8,-12,13,-9,15v3,-2,6,-2,9,0v-4,2,-5,5,-4,9v2,-1,4,-3,5,0v-6,4,-7,8,-3,13v-3,5,-9,7,-9,15r3,-2r0,6v5,-1,4,-4,2,-8r2,4r9,-8r-24,26v5,8,11,-4,17,-7r-2,5r4,-1v-9,6,0,10,-4,18r4,-2v-2,9,-10,16,-6,23v4,-4,9,-3,15,-6v-3,6,-18,13,-9,18r14,-12v-1,2,-4,5,-1,7r18,-15v-3,6,-11,8,-11,17v3,-2,6,-2,9,0r-2,-4v6,1,1,4,4,7r28,-28v-5,-10,-11,-3,-17,3v4,-3,5,-6,4,-10v-3,2,-6,6,-9,2v1,-3,4,-6,-2,-5r-6,5v3,-5,14,-10,6,-15v-10,1,-13,8,-18,13v3,-7,15,-12,10,-20v-4,1,-4,-1,-3,-7v-6,0,-3,5,-2,9v-6,-3,-3,-10,-2,-17v5,4,7,-1,4,-4v4,-1,4,-3,3,-7r-7,6r13,-15v4,5,13,10,18,2v-2,7,-13,15,-5,20v7,-10,23,-11,22,-29r-5,3v2,-3,6,-5,5,-11r-9,8v4,-6,14,-12,13,-19r-4,2r2,-6r-4,2r2,-7r-5,3v2,-3,6,-5,5,-11r-4,2r4,-7r-4,2v1,-3,8,-7,4,-10r-7,6r12,-15v-9,0,-4,-5,-9,-9v3,3,5,1,4,-4v-2,1,-4,3,-5,0v3,-6,9,-8,10,-16v-9,1,-13,7,-18,12v3,-5,9,-6,9,-14r-5,2r2,-4r-11,2v2,-2,-1,-4,-2,-6v-19,3,-17,-2,-24,8v0,-4,4,-8,2,-11r-32,29v1,4,4,4,7,2r-5,9r5,-4v-3,6,-14,12,-10,17v5,0,6,-3,9,-5xm26,-242v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm33,-277r26,-24r-2,5v4,3,10,0,19,-9v-1,3,-6,6,-2,8v11,-7,20,5,26,-6v-2,3,-6,4,-6,10v9,-2,14,-9,20,-15v-3,4,-7,7,-9,12v11,0,13,-7,19,-12v-3,5,-13,9,-8,15r11,-8v-2,2,0,6,0,9r6,-4v-1,3,-6,8,-2,10r13,-11v-2,5,-14,11,-4,13v-7,5,0,7,6,9r7,-5v-1,3,-6,6,-4,9r4,-2v-6,15,19,1,4,18v2,3,5,5,9,2v-2,3,-6,5,-5,11v8,0,8,6,14,0v-3,5,-9,7,-9,15r4,-2r-6,8r8,1v-2,3,-8,5,-4,8r6,-4v-7,7,-2,13,-2,18r9,-7v-3,6,-11,8,-11,17r5,-4v-4,8,-23,16,-14,24r22,-20v-3,7,-15,14,-11,22r3,-2v-3,5,-12,9,-7,16r7,-1v-2,4,-9,8,-5,11r9,-7v-3,5,-16,12,-7,16r11,-9v-9,10,-21,18,-8,26v-4,5,-3,5,-5,13r5,-4v-3,5,-13,11,-5,15r11,-10v-2,5,-13,10,-9,15r9,-7v-7,8,-9,13,-13,24v3,-4,6,-4,9,0v-3,6,-10,8,-11,16r4,-1v-5,4,-3,7,2,9v3,-2,5,-6,9,-8r-2,6r7,-6v-6,3,-7,8,-3,15r7,-5v-6,9,-16,15,-20,26v8,0,8,-7,13,-10r-15,19v1,-3,6,-8,2,-9r-9,1v2,-1,0,-3,0,-5v-12,3,-19,10,-26,18v2,-4,6,-6,7,-11r-9,7v3,-1,1,-3,0,-5r-19,17v2,-3,10,-9,0,-8r-5,6v1,-2,6,-6,2,-7r-9,5v1,-1,1,-3,0,-5r-12,9v3,-5,14,-11,6,-15r-20,19v7,-4,9,-11,7,-21r-13,11v1,-2,6,-6,2,-7v-4,1,-7,0,-9,-2r-11,11v4,-2,4,-7,3,-13v-5,1,-5,-1,-3,-4r-10,4v4,-2,5,-5,4,-9r-5,2v2,-3,-1,-7,-2,-10r-8,6v3,-4,8,-8,2,-11r-5,4r2,-6r-8,6v2,-5,13,-10,9,-15r-7,2v3,-9,22,-19,13,-26r-17,15v2,-4,8,-8,4,-13v1,4,3,4,6,1v-4,-8,-8,-1,-13,3v4,-1,4,-6,3,-12r-5,4v2,-4,5,-5,5,-11r-5,3v6,-7,8,-11,5,-14r-3,2v4,-3,4,-6,3,-10r-3,2v2,-12,-4,-16,5,-22v-2,-4,-5,0,-7,2v2,-3,6,-5,5,-11v-3,2,-5,0,-9,4v9,-9,7,-18,7,-32r-10,10v3,-6,14,-12,10,-17r-3,2v3,-5,14,-12,2,-13r3,-15r-5,4r3,-8r-5,4v3,-5,14,-12,11,-16r-15,7v5,-6,24,-12,15,-19r-7,6v4,-2,4,-6,3,-10r-3,3v-2,-8,6,-11,3,-15r-7,3v9,-6,12,-11,11,-13v-2,1,-5,3,-6,0v3,-5,13,-9,8,-16r-6,4v5,-7,14,-12,17,-21xm114,-59v4,9,10,0,15,-4v-3,-9,-10,1,-15,4","w":199,"k":{"V":32}},"R":{"d":"44,-266v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm70,-260v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm111,-126v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm37,-103v0,0,-2,0,-2,1v0,0,2,0,2,-1xm9,-63v4,-7,18,-13,15,-20v-6,-1,-6,4,-9,7r3,-9v-2,2,-4,2,-5,0v1,-4,6,-9,4,-13r-9,8v5,-6,12,-18,10,-23r-7,6v8,-7,8,-10,6,-24r-4,7v1,-13,4,-7,5,-24r-1,2r-4,-7v3,2,5,0,4,-4r-4,2v4,0,5,-6,5,-17v-2,2,-4,2,-5,0v1,-3,6,-6,4,-9r-6,2v2,-5,10,-10,4,-15r-6,4v3,-5,9,-6,8,-15r-4,4v2,-5,8,-11,0,-13v3,1,6,4,9,2v-5,-6,-9,-6,-14,0v3,-6,14,-12,10,-17r-5,4v5,-5,4,-11,5,-21r-9,8v6,-7,15,-14,4,-20v6,-4,4,-18,13,-21v-4,-7,-9,1,-13,4r4,-11r-4,2v6,-7,10,-23,15,-9r3,-3v-1,2,-1,4,0,6v6,-2,14,-10,15,0r9,-7v-1,2,-2,5,2,4r10,-10v-4,1,-2,4,0,6r7,-8r-6,9r15,-1v-3,1,-1,3,0,5r11,-9v-3,3,-6,6,2,5r7,-7r-3,7r9,-7r-6,7r11,-3v-2,5,5,12,10,6v-2,3,-3,6,3,5r4,-4v-2,5,-13,11,-5,15v5,-5,9,-15,16,-7r-2,7v5,-1,8,-2,13,-7v-3,7,-18,13,-11,20r15,-13v-3,5,-8,7,-9,13r4,-2v-1,3,-8,7,-4,9v1,-1,6,-1,4,0v-7,2,3,4,0,10v5,1,8,0,9,-4v-2,5,-10,10,-8,15r4,-2r-2,5r7,-3v-4,5,-4,14,2,18v-7,6,-9,11,-7,15r5,-4v-1,3,-7,7,-3,9r7,-5v-3,6,-11,8,-11,17r9,-4v-4,8,-21,15,-15,24v5,-10,12,-4,19,-11v-9,10,-17,17,-19,28v8,0,8,-7,13,-10v-3,4,-15,13,-5,17v-10,9,-13,16,-21,24v4,7,9,-1,13,-4r-5,9r5,-3v-2,6,1,14,6,9v-3,5,-9,10,0,11v-3,7,-2,9,0,16r6,-3v-3,4,-11,9,-4,13r9,-7v-10,7,-5,10,-7,22r3,-2r-3,9r3,-2v-4,2,-4,5,-3,9r7,-5v-5,7,-12,11,-13,22v3,-2,5,-8,9,-4v-4,3,-11,9,-7,13v6,-1,10,-4,13,-7v-9,8,-15,22,-26,22r2,-4v-5,1,-11,2,-13,6v3,-4,7,-7,2,-11r-9,5r3,-5v-4,0,-8,2,-11,0v0,-7,14,-18,0,-13r-9,9v11,-7,7,-20,17,-28v-3,-2,-8,1,-10,-1v9,1,-3,-12,6,-13v-2,-2,-4,-5,-7,-2v2,-5,10,-10,3,-13v4,-4,11,-7,4,-11r-9,7v3,-11,6,-14,5,-22r-7,4v6,-4,8,-8,4,-13r-19,16v9,-7,-10,-8,0,-14v-11,0,-14,9,-20,14v2,-4,8,-7,6,-11v-7,10,-20,14,-23,28r4,-2v-3,4,-5,7,0,10r3,-3v-3,6,-14,11,-7,17r4,-2v-4,7,-4,13,3,17v-7,5,-9,9,-7,11r4,-2v-4,2,-5,5,-4,9r7,-1v-8,11,-17,15,-27,23v2,-3,5,-5,5,-10r-7,1v5,-3,6,-5,2,-9r-15,13v2,-4,10,-8,6,-11r-10,7v1,-5,8,-11,4,-16r-9,7v3,-4,5,-7,5,-11r-9,2v1,-3,8,-7,4,-9v4,-1,5,-4,4,-8r-4,2v1,-3,6,-6,4,-9r-6,2v6,-5,9,-19,7,-24xm57,-188v1,3,4,1,6,0v-7,5,1,21,-6,26v6,0,1,6,4,10r11,-9r-2,4r6,-2v-3,2,-1,6,0,10r14,-13v-4,2,-4,5,-3,9v18,0,22,-14,31,-22v-2,-6,-2,-12,0,-17r-7,7v7,-8,5,-13,7,-27r-7,7v3,-5,9,-7,9,-15r-7,6v7,-6,10,-11,7,-13v-2,1,-5,3,-6,0r4,-6v-3,1,-5,3,-7,0v1,-2,3,-10,0,-14v-4,5,-8,5,-13,0r-9,9v0,-4,1,-7,-4,-6v2,-2,6,-5,2,-7r-28,24v14,5,-15,25,-2,16v2,5,6,0,10,-1v-5,9,-23,15,-19,27r20,-16xm48,-116v6,11,15,-7,22,-11r-3,-6xm64,-111v3,10,10,1,16,-3v-3,-10,-10,-1,-16,3xm127,-41v5,-4,16,-8,8,-14v-4,4,-11,6,-8,14","w":176,"k":{"z":68,"y":-10}},"S":{"d":"96,-253v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm15,-236v4,-3,4,-6,3,-10r-7,6v4,-8,24,-16,15,-24v-6,-1,-3,3,-2,6v-2,-4,-6,0,-9,1v4,-7,20,-14,11,-20r18,-19v-1,3,-4,7,2,6v2,-3,4,-8,6,-3r20,-15r-5,9v26,-5,26,3,47,-6r-5,9r13,-7v-3,4,-12,10,-4,13r9,-3r-3,5v6,3,19,3,12,11v3,4,7,0,10,-2v-3,5,-14,10,-6,15r13,-11v-3,4,-6,7,-4,13r8,-4v-3,6,-15,12,-11,17r7,-4r-4,7r6,-3v-1,7,-16,2,-7,15v-3,-2,-5,-8,-8,-4v5,5,10,9,15,2r-2,7r4,-2r-4,13v3,-3,5,-1,4,4r5,-4r-23,24v2,-4,5,-8,-3,-7r-3,3v4,-1,0,-4,0,-7r-15,13r9,-11v-3,-4,-10,-5,-9,-13v-10,-1,-2,-4,-4,-11r-9,7v2,-4,10,-8,6,-11v4,4,6,-1,3,-3r-3,1v4,-2,4,-5,3,-9r-5,4r4,-6v-4,1,-7,3,-10,0v2,-1,2,-3,0,-5v-4,2,-12,2,-7,7v-5,-3,-8,5,-9,-5v-4,0,-4,2,-2,5v-14,-10,-21,12,-31,18v5,11,17,-6,22,-10v-5,7,-20,17,-19,23r4,-1v-3,3,-10,10,0,9r6,-5v-2,4,-12,8,-8,12r8,-5v-7,6,-10,11,-8,13r5,-4v-1,2,-1,4,0,6r-3,-2r0,7v10,-4,15,-1,16,6r8,-6v-1,2,-3,5,2,4r7,-8v-2,4,-6,7,-4,11v12,0,14,-9,21,-14v-3,5,-9,7,-9,14v7,0,13,-1,16,-7v-3,5,-8,7,-9,13r7,-6v-3,5,-9,9,-5,15r18,-16r-3,5v6,1,11,0,13,-4v-4,1,-5,6,-4,12r5,-4r-1,7r7,-2v-1,2,-7,7,0,6r9,-9v-4,6,-12,9,-13,18v9,1,10,-6,15,-9v-7,5,-10,10,-8,16r6,-3r-2,7r4,-1v-1,3,-6,6,-4,9r9,-8v-3,5,-12,12,-7,17v2,-1,5,-3,6,0r-4,7r4,-2v-3,4,-11,11,1,10r8,-8v-3,5,-9,7,-9,15r5,-4v-7,7,1,14,-7,19v5,2,8,-1,11,-4r-21,22v7,6,13,-3,17,-7v-4,6,-14,11,-13,18v5,1,6,-3,9,-5v-3,5,-10,9,-9,15r6,-4v-3,5,-10,7,-10,15v2,-1,5,-3,6,0r-24,27v1,-3,3,-5,0,-7v-9,0,-15,9,-24,16v3,-3,5,-6,2,-10r-9,7v2,-5,8,-10,2,-13r-17,15v5,-7,5,-8,2,-13r-15,13r4,-8v-10,2,-15,-2,-21,6v7,-6,11,-11,8,-13v-15,1,-14,3,-22,11v4,-5,9,-10,3,-15r-5,2v4,-6,-3,-11,-9,-7v2,-5,-3,-11,3,-15v-5,1,-8,4,-11,7v3,-4,8,-8,4,-14v-7,1,-2,-5,-2,-8r-6,4v4,-3,0,-10,0,-15v4,-1,5,-3,4,-7r-7,4v1,-4,4,-8,2,-13r-4,1v4,-3,5,-5,4,-9r-8,5r21,-22r0,4v13,-9,26,-18,33,-33v-7,0,-13,0,-15,4v3,-4,10,-9,4,-13r-11,9v5,-8,16,-16,3,-21v-4,4,-8,8,-13,3v2,-2,2,-4,0,-6r-7,6v3,-5,11,-11,0,-12v2,-5,12,-10,6,-14r-19,14v3,-8,22,-18,13,-25v-4,0,-8,0,-9,3v4,-8,0,-13,3,-22r-5,4v5,-9,7,-26,5,-37xm57,-80r4,-1r-4,7r7,-6v-3,7,-19,15,-10,21r9,-8v-3,17,17,14,22,4r-5,9v7,0,9,6,16,2r-2,-3v7,-1,23,-13,20,-21v-3,3,-5,8,-9,4r21,-22v-7,-1,1,-8,-8,-6r2,4v-1,-3,-4,-1,-6,0v3,-5,9,-9,2,-13v-2,2,-4,2,-5,0v8,-5,24,-14,16,-22r-22,17v2,-4,8,-7,4,-12r-6,4v3,-2,1,-4,0,-7r-11,9v3,-4,6,-7,-3,-6r-4,4v3,-3,5,-6,0,-9r-11,9v0,-3,0,-6,-4,-5r2,-4v-15,5,-24,16,-31,29r7,-5v-3,2,-1,4,0,7r4,-2r-2,6r5,-2r-3,6v2,2,8,-1,15,-10v-2,6,-17,14,-8,17","w":176,"k":{"Y":14,"V":23,"T":28}},"T":{"d":"63,-262v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm13,-257v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm63,-120v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm63,-35v-5,1,-3,4,0,7v5,-1,3,-4,0,-7xm103,-264v-5,6,-16,8,-11,18v5,-6,20,-10,11,-18xm103,-275v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm129,-271v0,0,-2,0,-2,1v0,0,2,0,2,-1xm50,-172v1,2,3,2,5,0v0,-5,-1,-9,-5,-5v3,-5,13,-11,5,-15r-5,6r4,-15r-12,9v4,-9,24,-18,15,-26v-2,2,-4,2,-5,0r2,-9r-8,6v3,-6,18,-13,9,-19r-9,7r4,-7r-4,2v3,-1,1,-4,0,-6v-11,3,-14,1,-22,6v1,-3,6,-8,2,-9r-15,13v4,-5,7,-10,2,-15v-9,-3,0,9,-4,5r-1,-3v-2,0,-8,7,-8,3v4,-4,10,-4,9,-13v-5,-3,-9,6,-9,2v3,-3,9,-2,8,-9r-4,2v2,-3,6,-6,1,-8v2,2,4,2,6,0v-2,-8,-11,4,-11,0v4,-4,10,-4,9,-13r-5,4r20,-22r-2,5v5,-5,11,1,15,-1r-2,4r7,-3v-1,2,-1,4,0,6v5,-1,13,-10,15,-2r10,-7r-3,3v11,2,14,-4,19,-9v-1,3,-12,10,-2,9r4,-3r-2,3v4,0,8,0,9,-3v-1,3,-5,7,2,6r6,-6v-2,4,-7,8,2,7r3,-4r-3,6v10,-2,14,-10,20,-15v-2,4,-11,7,-6,12v5,-2,9,-3,15,-10v-2,4,-11,9,-7,13r5,-3v-3,4,-10,9,-3,13r13,-10r-3,6r6,-2v-2,4,-3,7,4,6v-2,4,-14,9,-7,12r7,-2v-4,6,-14,12,-6,19v3,-2,6,-6,9,-2v-7,1,-3,16,-13,11r-10,9v2,-4,12,-10,1,-9r-3,4r3,-6v-8,4,-11,-5,-18,0v-5,8,-21,14,-17,24r6,-1v-3,6,-18,12,-9,18r7,-5v-1,2,-7,6,0,5r9,-9v-4,7,-19,15,-16,22r13,-2v-9,9,-16,18,-4,24v-2,4,-7,5,-6,11v4,-2,7,-9,11,-5v-5,8,-15,12,-18,23v10,1,11,-7,17,-10v-2,3,-5,5,-2,9v-3,5,-14,10,-11,14r3,-1v-3,9,7,8,10,3v-3,7,-16,16,-13,22r13,-11v-4,7,-19,14,-12,21r10,-6v-4,6,-13,9,-8,18v5,1,8,-1,10,-3v-2,5,-17,12,-8,15v-3,3,-6,8,2,7r7,-7v-3,7,-18,13,-11,20r10,-7v-6,8,-4,14,-12,18v5,4,10,-7,15,-9v-3,5,-14,12,-11,16v5,1,6,-3,9,-5v-11,8,-15,15,-11,20r8,-3v-2,9,-8,19,-19,14v-3,9,-7,6,-14,13v3,-7,19,-15,10,-20v-4,1,-2,4,0,7v-3,-3,-6,-5,-10,-1v4,-2,2,-5,0,-8v-3,7,-12,-6,-17,5v7,-7,4,-14,13,-20v-5,-6,-11,4,-17,6v2,-5,10,-10,8,-15r-10,7v3,-5,15,-11,11,-16r-3,2v1,-4,7,-9,3,-11r-3,1v3,-6,15,-13,7,-18r-5,4v-3,-7,0,-13,0,-17v-6,-1,-7,3,-10,5v4,-5,8,-12,15,-5v2,-7,-7,-3,-5,-11r-4,4v2,-4,5,-8,2,-13r-10,7v7,-8,18,-13,12,-24r-4,2v1,-5,6,-10,4,-15v-2,1,-5,3,-6,0v11,-7,2,-22,6,-33r-4,2v3,-1,1,-4,0,-6","w":153,"k":{"z":96,"y":89,"x":100,"w":101,"v":89,"u":90,"s":97,"r":94,"q":95,"p":92,"o":98,"n":90,"m":91,"j":60,"g":90,"e":84,"d":99,"c":85,"a":104,"M":60,"L":109,"J":109,"G":51,"A":94,".":92}},"U":{"d":"26,-240v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm48,-31v-8,-1,-5,2,-2,5v3,1,2,-3,2,-5xm118,-89v3,-6,18,-12,9,-18r-7,5v2,-5,13,-9,9,-14r-7,3v9,-8,-3,-17,5,-22v-4,0,-2,-4,-1,-7r-4,2v4,-5,6,-12,4,-21r-4,2r4,-7r-8,5v10,-9,7,-18,8,-35r-4,2v6,-7,-3,-9,4,-14r-6,3v3,-5,14,-12,11,-16r-9,5r4,-8r-4,3v3,-7,5,-15,4,-26r-12,9v3,-5,10,-7,10,-15r-6,4v9,-9,7,-20,8,-31r-6,3r22,-28v-2,4,-4,9,0,12v2,-3,6,-5,11,-3r-1,6r7,-6v-2,4,-10,9,-4,13r17,-14v-3,6,-17,11,-10,18r4,-1r-2,9r6,-2v-7,5,-10,10,-8,16r8,-5v-2,4,-10,8,-8,13r4,-2v-4,2,0,5,2,7r6,-3v-4,6,-16,12,-13,18r7,-4v-1,3,-8,7,-4,9r8,-3v-2,3,-8,6,-4,9r4,-2r-10,13v6,1,7,-3,10,-5v-3,6,-17,11,-10,18r6,-4v-5,9,0,9,-2,17r8,-5v-2,2,-6,5,-2,7v-9,-5,-3,9,-11,11v5,5,10,3,14,-2v-7,7,-10,13,-9,15r6,-4v-1,4,-10,9,-6,11v4,-1,6,-1,9,-4v-3,6,-11,8,-11,17r4,0v-6,3,-1,9,2,15v-4,4,-10,6,-6,13v-4,6,-14,9,-11,18r19,-16v-2,4,-12,9,-8,13r6,-4v-2,4,-10,8,-8,13r13,-11v-4,8,-19,13,-14,24r11,-6v-4,6,-16,13,-13,19v5,1,7,-2,9,-4v0,9,-12,15,-2,19v-3,4,-10,4,-9,12r5,-3v-8,6,-12,28,-23,18r-12,11v2,-2,6,-5,2,-7r-16,15v1,-3,9,-9,0,-8v-1,4,-3,4,-6,2v2,-4,6,-9,2,-13r-19,17r4,-6v-5,2,-6,0,-11,4r2,-4r-8,0r4,4v-9,-1,5,-15,-11,-9r2,4v-5,-7,-10,1,-15,5r6,-8v-6,-2,-12,-4,-17,0r6,-12v-4,0,-5,-2,-4,-6v-5,3,-2,6,2,9v-8,3,-7,-6,-11,0v3,-4,10,-9,3,-13r-9,8r6,-8v-5,4,-10,0,-6,-5r-7,4r4,-8r-10,8v3,-6,15,-12,11,-17v-9,-1,-9,6,-14,9v4,-6,12,-10,7,-18r-6,3v2,-3,8,-6,4,-9r-4,2v0,-6,6,-11,4,-15r-5,4v4,-5,9,-10,3,-15r-7,4v2,-3,6,-5,5,-11r-5,4v3,-6,15,-12,11,-17v-10,3,-1,-9,-9,-4v4,-2,4,-5,3,-9r-3,2v2,-4,7,-8,3,-13r-5,4v5,-8,7,-18,5,-28r-9,7v9,-9,11,-12,11,-24r-7,4r5,-11r-7,5v10,-9,3,-10,7,-22r-3,2v1,-4,7,-8,3,-11r-5,4r2,-6r-10,8v6,-9,17,-13,19,-25v-4,5,-9,-5,-15,4v7,-6,9,-13,9,-26r-3,2r3,-11r-7,4v6,-7,8,-9,7,-19r-5,4v3,-6,15,-12,7,-17r-7,3v3,-17,16,-16,24,-25v-2,4,-8,7,-6,12r11,-10v-1,2,-5,6,-1,7r9,-7v-8,7,-14,14,-2,13r11,-11v-8,9,-7,22,-18,28v8,6,15,-13,23,-17v-6,5,-9,11,-10,17v3,0,6,0,5,-4v3,2,5,5,8,2v-4,7,-22,15,-13,22r9,-7v-6,6,-8,11,-6,13r7,-6v-2,4,-11,9,-7,13v6,1,7,-4,10,-6v-2,4,-11,8,-6,13v5,0,6,-3,9,-5r-18,20v3,4,10,4,9,11r7,-5r-20,26v9,7,16,-11,24,-15v-4,6,-12,9,-13,18r4,-2v1,8,-12,13,-6,19r2,-4v1,8,5,4,9,0v-2,5,-13,10,-9,15r8,-4v-8,6,-5,13,-12,19v3,2,5,-1,8,-2v-2,4,-10,8,-8,13r4,-2v-3,2,-1,4,0,7r-4,-3v0,9,6,14,12,7v-2,4,-7,5,-6,11v2,-3,4,-5,7,-2v-7,7,-11,13,-1,19v-4,5,-12,6,-12,15r8,-4v-6,6,-8,11,-6,13v8,-1,10,-8,15,-12v-3,5,-13,10,-9,16r-4,-3r4,10r9,-7r-4,5v4,-1,9,-6,12,-2v-5,1,-7,3,-4,7v3,-2,6,-5,5,2v10,1,11,-7,17,-11r-4,8v15,-3,20,-17,30,-25v-5,-5,6,-7,2,-14xm105,-44v6,-9,26,-14,19,-26v-6,9,-26,14,-19,26xm30,-146v2,6,5,6,9,2v-2,-4,-5,-6,-9,-2","w":184},"V":{"d":"15,-275r2,-5v-8,0,-11,5,-15,9v3,-7,16,-14,13,-21v-4,1,-8,3,-10,0r15,-14v-1,3,-4,6,-2,9r15,-13r-5,7r13,-3r-2,7v8,-6,5,10,15,9v-2,3,-8,6,-4,10r5,-3v-2,3,-4,7,-1,10r5,-4v-7,8,0,15,-9,20v3,5,7,3,11,0v-2,5,-2,3,-4,13r10,-3v-3,5,-13,10,-12,16r4,-2v-2,4,-7,8,-2,12r11,-10v-6,9,-8,15,-4,20r6,-3v-2,5,-13,10,-9,15r9,-8v-2,4,-6,5,-6,11r4,-2v-2,3,-6,6,-1,8r3,-2v-1,3,-4,7,2,6v-2,4,-8,5,-8,12r8,-3v-1,3,-7,8,0,7r9,-9v-4,7,-16,11,-11,20r11,-9v-7,6,1,9,-5,15r5,-4v-6,2,-7,8,-5,17r5,-4v-2,4,-9,8,-5,11r4,0v-1,2,-5,5,-3,7r8,-1r-2,5v6,-6,14,-11,19,-18r-6,1v3,-5,13,-10,4,-13v1,-4,-2,-2,-4,-1v1,-3,6,-6,2,-8r-9,8v5,-9,20,-15,16,-26v-2,1,-4,2,-2,5r-3,-1v4,-7,17,-14,14,-21r-9,8v3,-7,20,-15,11,-20r-5,3r2,-6r-11,6v3,-6,16,-12,12,-19r-7,6v8,-6,5,-15,13,-20v-7,-1,-7,5,-11,7v2,-5,13,-10,9,-15r-4,2v4,-2,5,-5,4,-9r-4,2v2,-4,10,-8,6,-11r-9,7v4,-6,16,-14,11,-22r-4,2v3,-5,11,-8,8,-17v-7,-1,-8,5,-12,8r22,-24v-1,4,-7,8,-3,11r7,-6v-1,2,-2,5,2,4r10,-9v-2,3,-8,6,-4,9r11,-9v-2,10,1,26,7,18v3,5,7,-4,11,-6v-4,6,-16,13,-13,19r8,-3v-5,8,-15,11,-17,22r6,0v-4,4,-8,8,-4,14r5,-3r-3,13r11,-10v-13,11,-16,23,-21,41v3,-1,7,-4,6,2r6,-4v-11,9,-16,15,-12,19r8,-6r-13,15v7,1,7,-5,11,-8v-12,11,-18,18,-15,21r6,-2r-4,7r4,-2v-4,4,-8,9,-2,13r8,-5v-4,8,-22,15,-16,24r12,-7v-4,8,-24,16,-15,23r9,-7v-2,9,-8,11,-11,20r8,-3v1,4,-5,11,-19,23v5,8,10,-2,15,-5r-4,8r8,-6v-4,6,-11,8,-12,16r8,-5v-5,9,-28,19,-15,28v5,-2,8,-5,2,-8v5,2,9,2,11,-2v-3,7,-16,14,-13,21r9,-8v-4,6,-16,13,-13,19r10,-4r-17,18v-5,-11,-19,6,-22,-5r-6,4r2,-6v-12,-2,-26,-1,-24,-16r-5,3v4,-6,12,-8,13,-18r-12,7v3,-5,17,-12,8,-16v-6,9,-11,-3,-15,3v2,-5,10,-10,4,-15r-6,4v4,-6,12,-8,13,-18v-9,2,-13,-4,-17,4v9,-4,11,-10,6,-19r-7,4v2,-4,11,-9,7,-13v-10,-1,-11,7,-17,11v3,-6,21,-16,10,-19v2,0,4,-2,3,-5v-4,2,-6,1,-11,5v2,-4,10,-8,8,-13r-4,0v3,-6,18,-12,9,-18r-15,11v2,-4,12,-9,8,-13r-6,2r4,-9r-4,1v2,-2,6,-5,2,-7r-4,2r4,-7r-11,9r17,-19v-3,-7,5,-8,1,-11v-9,1,-13,8,-18,13v-1,-9,13,-13,9,-18r-7,4v3,-6,15,-12,11,-17v-5,-1,-8,1,-9,4v4,-9,25,-18,16,-26r-24,22v3,-3,5,-6,0,-9v6,-5,8,-9,6,-12r-6,3v4,-3,5,-6,4,-10r-7,6v4,-6,12,-10,7,-19v-3,1,-7,4,-6,-2r-7,2v3,-5,12,-9,7,-16r-7,0v3,-6,15,-12,11,-17xm135,-283v3,10,9,1,14,-3v-2,-10,-9,0,-14,3","w":180,"k":{"z":30,"y":23,"w":34,"s":48,"o":57,"m":30,"j":56,"g":48,"f":60,"e":42,"d":57,"c":44,"a":53,"Q":33,"M":69,"L":-9,"J":95,"A":91,".":90}},"W":{"d":"139,-260v-2,0,-4,0,-3,2v2,0,4,0,3,-2xm159,-116v-3,-4,-11,-3,-11,2v2,-5,10,-11,4,-15r-19,16r24,-26v-2,-2,-5,0,-8,0v2,-3,9,-7,3,-10v-7,8,-17,14,-23,23r7,-1v-4,7,-17,14,-14,20v3,-2,5,-5,9,-2v-6,7,-10,16,-9,24v2,-1,4,-3,5,0r-11,13v8,-1,1,9,2,13r11,-9v-4,6,-16,12,-13,18r4,-2v-2,4,-12,11,-2,11v-1,5,-4,9,-4,13r8,-5r-13,15r5,-2r-18,20v1,-4,8,-11,-2,-9r-9,9r7,-9r-11,4v3,-2,5,-3,2,-6v-4,5,-8,7,-11,0r8,2v-1,-10,-7,-6,-13,-2v2,-2,0,-5,0,-7r-4,1v2,-7,-4,-7,-8,-3v4,-2,0,-9,0,-13r-9,7v7,-6,10,-10,8,-13r-4,2v1,-8,10,-20,-2,-20r2,-13r-4,2r4,-9r-8,3v7,-6,11,-11,8,-13r-8,2v7,-6,3,-6,2,-15r-5,2r3,-13r-5,4v6,-8,14,-12,18,-22r-3,2v4,-6,14,-10,9,-19r-26,22v4,-1,5,-5,4,-11r-8,6v1,-12,13,-5,8,-17r-4,0v1,-3,4,-4,4,-9v-4,3,-5,-1,-9,3v4,-5,13,-11,3,-14v4,2,10,7,8,-2v-4,-1,-12,2,-10,-4r-9,8v7,-6,10,-17,19,-21v-2,-10,-12,-5,-19,4r15,-17v-12,0,0,-10,-11,-9r2,-7r-4,2v1,-3,8,-7,4,-9v-2,1,-4,1,-6,0v4,-3,5,-6,4,-10r-6,2v9,-7,1,-14,4,-22r-7,4v4,-6,-1,-9,1,-15r-5,4v3,-6,18,-13,9,-19r-9,2v3,-6,18,-13,9,-18r-9,7v1,-3,7,-8,0,-7r13,-17v-6,14,5,9,11,5r-2,6v4,-5,8,-1,13,-7r-4,7r6,-2r-2,5r9,-7r-22,24r4,4r28,-26v-9,7,-13,15,-12,22r-3,-4r2,10r9,-2v-2,3,-8,6,-4,9r5,-4v-2,4,-6,6,-5,12r4,-2v-2,3,-8,6,-4,9r4,-2r-4,17v5,-5,4,5,8,7v-2,2,-8,4,-4,8r11,-10v-6,8,-15,16,-13,23r9,-3v-3,5,-2,9,-3,15r7,-5v-3,5,-14,12,-11,16v5,1,7,-1,9,-3r-2,13r13,-10v-4,7,-15,13,-15,21v4,-1,9,-3,12,0v-3,5,-14,9,-10,15v6,-2,11,-6,15,0v3,-6,14,-10,9,-17v4,-6,20,-13,11,-19r-16,13v4,-7,15,-11,13,-20r-4,2v5,-9,5,-10,7,-24r-5,3r2,-5r-8,4v7,-10,21,-15,15,-32v-5,2,-6,7,-11,10v4,-6,16,-13,13,-19r-8,6v2,-4,12,-9,8,-13r-8,3v3,-5,9,-7,10,-13r-4,2v1,-3,6,-6,4,-9r-4,2v3,-5,8,-7,7,-15v-5,-1,-7,2,-9,4r20,-24v-4,16,9,-1,13,9r12,-9v-3,4,-5,8,0,11r5,-4v-3,4,-12,10,-4,13r6,-3v-1,3,-6,7,-2,9r9,-2v-4,2,-5,5,-4,9r4,-2v-3,7,4,9,8,4v-2,4,-12,9,-8,13r8,-4v-3,5,-10,7,-10,15r8,-4r-2,8r9,-8v-7,6,-9,11,-7,13r3,-2v-4,6,-10,12,0,15r0,5r4,-1v-3,5,-11,14,-2,17r-2,-6v1,3,4,1,6,0v-3,2,-3,5,0,9r5,-2r-9,9v3,0,3,5,0,12v5,-1,8,-4,11,-8r-24,26v7,9,14,-8,21,-11r-4,7r4,-2r-4,6r7,-2v0,6,-8,11,-5,15v10,-1,21,-12,18,-19v4,-7,18,-13,15,-20r-13,8v10,-6,10,-18,11,-30v-5,0,-6,3,-9,5v8,-7,13,-16,9,-31v6,-9,9,-15,6,-20r-9,7v5,-7,12,-10,14,-20v-5,-1,-6,3,-9,5v2,-5,13,-11,9,-14r-7,5v2,-5,13,-11,9,-14r-9,5v11,-10,13,-18,24,-22v-2,3,-8,6,-4,9v12,-11,17,6,28,4v-1,4,-8,8,-4,11r4,-2v-4,2,-5,5,-4,9r6,-4v-2,4,-8,7,-4,12r9,-8v-9,8,-10,14,-18,24v2,3,6,1,9,0v-2,7,-11,17,-7,22r3,-1v-1,2,-8,8,-2,7r8,-7v-4,7,-22,15,-9,20v-3,4,-15,10,-4,11v-1,4,-6,8,-2,11v-9,-10,-15,0,-22,7r4,6v7,-6,13,-18,20,-7r5,-4v-2,5,-13,10,-9,15r4,-2v-6,7,-5,15,-6,22r8,-6v-3,6,-15,12,-11,17r5,-4v-2,4,-11,10,-7,13v-8,-3,-4,3,-2,6r7,-6v-7,6,-10,10,-7,13r6,-4r-2,6r5,-4v-2,5,-13,10,-9,15r6,-4v-3,1,-1,4,0,6v-5,-4,-7,1,-4,4v-3,3,-11,6,-6,11r4,-2v-3,6,-15,11,-11,17r5,-3r-1,8r9,-8v-3,6,-15,11,-8,17r8,-5r-17,18v6,2,8,11,-1,17v4,1,6,3,3,7r9,-7v-8,13,-17,24,-29,33r4,-8v-7,7,-10,-8,-13,3v-9,-9,-16,-2,-24,5v3,-6,15,-13,12,-18v-10,-1,-12,0,-18,7r2,-4r-6,2v3,-7,20,-15,11,-20r-13,9v3,-6,17,-12,8,-17r-15,13v4,-7,20,-14,11,-20v-2,1,-4,3,-5,0v2,-4,9,-12,-2,-11r-6,5v4,-7,18,-13,15,-20r-7,4v0,-4,6,-10,0,-11r-4,1v1,-3,6,-7,2,-9r-10,8v4,-6,16,-13,13,-19v-9,-1,-9,7,-14,10v7,-7,5,-12,9,-21r-4,2xm96,-80v3,8,8,3,13,-1v-3,-8,-8,-3,-13,1xm111,-159v4,10,14,-3,18,-7r-3,-6xm116,-208v4,9,10,0,15,-4v-4,-10,-10,0,-15,4xm109,-131v4,9,10,0,15,-4v-4,-9,-10,0,-15,4","w":276,"k":{"s":57,"r":39,"o":67,"e":53,"d":67,"a":62,"Q":39,"L":-11,"J":109,"A":101,".":109}},"X":{"d":"41,-220r1,-7v-2,2,-4,2,-3,-2r-6,4v2,-4,6,-5,6,-11r-11,9v3,-6,11,-8,11,-17r-6,2v0,-3,4,-8,-2,-7r-5,5v6,-4,7,-8,5,-13v-5,2,-6,0,-11,4v8,-7,8,-10,8,-17v-5,-1,-8,1,-10,4v3,-8,8,-15,6,-20r-6,3v4,-7,-2,-12,-9,-9r17,-18r-2,5r6,-1v-1,3,-6,8,-2,10r16,-14v-3,5,-12,9,-7,17r17,-12v-3,4,-11,9,-4,13r7,-4v-1,2,-4,2,-3,6r7,-3v-4,6,2,9,6,5v-4,7,-25,11,-15,20v3,-6,9,-4,16,-2v3,10,-9,12,-1,17r5,-5r-2,5r6,-2r-4,11r8,-3v-6,4,-8,8,-4,13r11,-8v-3,6,-15,12,-11,17v23,-6,27,-22,37,-37r-8,5v8,-8,14,-17,11,-27r-5,4r24,-30r-4,7v13,-2,14,1,24,-3v-3,1,-3,15,4,13v-4,1,1,5,2,7r11,-10v-7,7,0,8,-8,16v4,2,7,-4,11,-6v-10,6,-12,25,-22,20v-4,5,-15,10,-7,17v6,-7,11,-10,15,-8v-1,-6,-7,2,-6,-5v4,1,8,3,9,-2r-15,22r8,-4r-11,13r7,-3v-3,5,-14,9,-9,15r5,-4v-3,5,-9,7,-9,14r9,-7v-4,8,-13,13,-14,24r7,-4v-7,11,-15,9,-15,28r6,-5v-3,5,-15,11,-11,16r4,-2v-1,4,-10,10,-6,13r9,-4v-4,2,-2,6,0,10r4,-4v-1,4,-8,9,-4,11v-5,-1,-5,5,-2,9r12,-9v-6,6,-8,10,-6,13v7,0,8,-6,13,-9v-4,7,-18,13,-15,20r5,-3r-3,5r7,-4v-1,4,-9,9,-5,11v7,-4,11,2,7,6r7,-4v-5,5,-5,10,-1,17r4,-2r-4,8v4,-3,6,-3,7,3v-2,2,-9,6,-3,7r12,-7v-3,5,-9,7,-9,15r6,-4v-1,3,-8,7,-4,9r7,-5v-1,2,-4,5,-2,7v-4,-1,-12,9,-5,13v7,-2,0,-3,4,-7v3,3,3,5,1,9v2,-1,5,-3,6,0v-2,4,-8,7,-6,11r4,-2v-4,4,-6,9,4,8r5,-6r-5,9r5,-1v-7,12,-13,9,-22,18r4,-5r-8,0r3,-4r-8,1r2,-5v-4,4,-7,-1,-4,-4v-5,0,-7,0,-3,-3r-8,3v2,-3,6,-5,5,-11v-8,2,-13,8,-18,13v3,-6,8,-8,9,-16r-13,11v5,-6,15,-10,10,-21r-6,2r2,-7r-6,4v2,-4,7,-5,6,-12v-2,1,-5,3,-6,0v4,-7,19,-13,12,-20r-21,15v3,-6,15,-12,11,-17v-7,5,-7,-3,-5,-7r-8,6v2,-4,7,-5,6,-12r-4,2v3,-3,6,-6,-2,-5v2,-4,2,-7,-1,-10v-12,10,-27,26,-26,39r4,-1v-3,5,-13,10,-12,16r8,-6r-26,28v6,9,13,-7,20,-11v-2,5,-13,10,-9,15r9,-8r-20,22v1,-4,3,-8,0,-10v-4,2,-9,13,-11,5r-11,9r2,-5r-12,9v5,-4,13,-13,2,-17r-7,6v3,-6,15,-12,7,-17r-18,15v6,-6,13,-18,15,-24r-12,7v5,-8,20,-18,19,-25r-11,9v5,-7,14,-11,17,-21r-10,8v3,-6,15,-12,11,-17r-5,4v2,-5,16,-12,7,-15v2,-3,11,-6,6,-9r-9,7v4,-8,19,-16,16,-24r-4,2r10,-11v-8,0,-8,6,-13,9v5,-10,16,-14,18,-27v-4,0,-7,2,-11,5v7,-10,15,-10,15,-27r-7,5v7,-6,9,-11,7,-13r-7,6v7,-7,9,-13,7,-15v-3,0,-6,4,-7,0v2,-6,11,-13,3,-17r-7,6v4,-4,9,-18,-2,-18r-13,10r33,-35v-10,-8,-14,16,-27,13xm44,-247v5,-5,17,-9,10,-17v-5,5,-17,9,-10,17xm94,-186v3,8,8,2,13,-2r-2,-8xm105,-162v5,10,13,-5,19,-8v-5,-10,-13,5,-19,8","w":186,"k":{"z":64,"y":61,"r":67,"V":17,"T":24}},"Y":{"d":"37,-220v-5,1,-7,-1,-4,-4v-7,-10,-7,-18,-11,-29r-7,4v4,-1,5,-5,5,-11r-3,2v-2,-7,9,-11,5,-15v-5,5,-7,-1,-9,-6v2,2,5,6,7,2v-1,-4,-3,-7,-9,-6v-1,-13,9,-18,15,-25r-2,7r9,-7r-3,7r11,-4v-3,1,-1,4,0,6v10,1,10,-8,16,-11v-6,7,-14,13,-7,24v5,-2,6,-1,11,-6v-2,5,-13,10,-9,15r7,-2v-4,4,2,13,-4,17v3,-3,11,-5,6,-9v2,1,4,1,6,0v-2,3,-14,12,-4,14v-3,4,-7,6,-9,11v6,0,11,2,18,-3v-3,4,-6,7,-4,13v-3,-2,-5,-2,-4,3r4,-1v-3,4,2,6,6,5v-1,4,-6,8,-2,11r8,-6v-3,6,-11,11,-6,19v4,-1,2,-4,0,-7v6,7,10,-1,15,-6r-2,-3v4,2,6,-1,3,-4v4,-7,12,-11,13,-21r-3,2v1,-2,8,-8,2,-7r-6,5v3,-5,15,-11,11,-16v5,4,7,-1,4,-4r-4,2v3,-6,15,-12,11,-19r-7,6v2,-5,11,-11,7,-15r-4,0v7,-11,16,-10,25,-20v-5,4,-7,9,-3,15r21,-19v-4,7,-16,11,-11,20v6,-6,11,-7,13,-5r-2,8r7,-4v-3,5,-3,13,0,20r6,-3v-4,6,-16,12,-13,18v-4,1,-5,3,-4,7r4,-2v-3,6,-11,8,-11,17r11,-9v-4,7,-18,13,-15,20r6,0v-4,7,-18,13,-15,21r7,-4v-2,3,-6,5,-5,11r9,-7r-15,16r7,-4v-4,6,-10,9,-12,17r9,-7v-2,5,-13,9,-9,14r9,-5v-4,7,-18,13,-15,20r4,-2v-1,2,-10,8,-2,7r6,-5v-5,8,-21,15,-17,24r5,-3r-7,10v5,1,6,-3,9,-5v-4,6,-13,12,-13,18r8,-3v-3,5,-15,11,-11,16v4,0,6,0,3,-3v3,2,5,-1,8,-2v-3,6,-18,13,-9,18v2,-2,4,-2,5,0v-4,2,-6,11,-4,17r11,-10r-16,19r7,-3v-2,4,-11,8,-7,12v9,-1,13,-7,18,-12r-22,23v4,7,9,0,13,-3v-6,6,-1,9,-4,20r4,-4r-2,10r6,-4r-21,22v2,-5,2,-10,-1,-13r-13,11v4,-5,7,-14,-4,-13r-8,7v3,-3,7,-10,0,-9v2,-4,10,-8,6,-11v-6,-1,-11,0,-13,4v2,-4,7,-5,6,-11r-8,5v5,-8,22,-15,13,-25v-5,0,-3,3,-1,5r-12,11v10,-12,5,-23,8,-38r-4,1v6,-6,1,-8,4,-16r-8,5v8,-5,4,-13,12,-18v-2,-3,-6,-1,-10,0v6,-6,9,-11,6,-13r-8,5v2,-5,14,-11,4,-13v7,-6,-3,-21,5,-26v-3,-5,-7,1,-10,3v1,-9,8,-12,9,-19v-9,-1,-10,6,-15,9v4,-2,5,-5,4,-9r-6,4v3,-4,8,-8,4,-13v-6,1,-3,-3,-2,-6v-5,2,-8,0,-4,-7r-3,2v1,-8,3,-19,-6,-19xm105,-174v-4,1,-2,5,0,8v6,-1,2,-5,0,-8xm142,-279v-5,5,-15,8,-7,15v5,-5,15,-8,7,-15xm136,-260v6,11,14,-6,21,-10v-6,-11,-14,6,-21,10","w":174,"k":{"z":53,"y":46,"x":57,"w":57,"v":45,"u":46,"s":82,"r":59,"q":87,"p":57,"o":96,"n":58,"m":59,"j":47,"i":-13,"g":87,"f":60,"e":82,"d":95,"c":83,"a":81,"Q":46,"M":-12,"L":-18,"J":97,"H":-14,"G":38,"A":91,".":95}},"Z":{"d":"96,-201v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm18,-39v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm44,-15v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm22,-31v0,0,-2,0,-2,1v0,0,2,0,2,-1xm46,-262v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm124,-44v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm126,-253v2,10,8,2,13,-2v-4,-5,-6,-5,-13,2xm61,-280v4,9,10,-2,16,-6r-3,-6xm13,-286r17,-19v0,4,2,4,5,2r-4,6v10,-1,13,-8,19,-13v-6,5,-3,9,-8,14v9,-1,14,-7,19,-12v-2,3,-8,6,-4,11v7,-7,13,-6,23,-9v-3,3,-11,7,-4,10v9,-7,11,-7,24,-5r11,-11v-2,5,-6,10,2,11r11,-4v-3,1,-1,4,0,6r9,-7r-2,5v2,-6,10,0,13,-4r-2,6v3,0,6,-4,7,0v-2,3,1,7,6,7v-1,-3,-3,-5,0,-7v1,5,3,7,6,3v-3,5,-16,11,-9,16r10,-6v-2,7,-10,13,-9,20r6,-2r-2,8r7,-4v-3,5,-12,9,-7,15v-4,1,-5,3,-4,7r9,-7v-3,5,-12,9,-7,15v-4,5,-16,11,-13,16r6,-3r-21,23v7,-1,2,8,2,10r4,-2v-4,10,-13,19,-22,29v6,6,4,11,-2,15r5,-2v-9,10,-16,16,-20,30r6,-4v-7,6,-5,11,-11,17r7,-4v-4,7,-15,14,-15,20r4,-1v-4,8,-18,13,-13,23v7,1,4,-2,2,-5v7,5,12,3,16,-4v-2,4,-7,8,-3,13r11,-9v-2,3,-10,9,0,8r11,-12v-2,4,-8,7,-4,12v3,-2,11,-2,6,-6v2,4,9,0,13,0v-1,4,-4,8,3,7r6,-5v-2,3,-10,8,0,7r11,-11v-1,3,-9,9,0,8r8,-8v-2,4,-10,8,-6,11v6,-4,8,1,11,6v-3,5,-13,10,-5,14r14,-13v-5,6,-12,18,-13,24r4,-1r-2,5r6,-2v-4,6,-12,8,-12,17r12,-9r-19,20v0,-4,4,-9,0,-11r-6,2v3,-3,3,-5,-3,-4r2,4v-6,-2,-10,-2,-13,0r2,4v-5,-4,-8,-2,-11,3v2,-8,14,-12,3,-9v-5,-8,-12,7,-18,11v2,-4,9,-8,5,-11v-8,0,-10,9,-20,6v1,-6,-4,-3,-7,-3v2,-1,0,-3,0,-5v-4,3,-6,11,-13,8r20,-23r-3,-3r-30,27v3,-3,6,-6,-2,-5v-1,7,-8,1,-13,0r-11,9v4,-7,22,-15,13,-22r-15,13v3,-4,11,-9,4,-13v-4,2,-7,6,-11,4v1,-3,7,-7,3,-10r-9,8v9,-8,8,-16,8,-28r-4,2v3,-7,15,-14,11,-21v-9,0,-10,8,-15,12v2,-5,14,-11,8,-15v5,-9,19,-20,13,-26v10,-11,12,-17,18,-28r-6,4v9,-7,11,-15,13,-26v10,-10,14,-16,13,-18v-5,-1,-6,3,-9,5v14,-12,19,-19,18,-22r-10,6r18,-24r-5,1v3,-5,9,-6,9,-13r-6,4v7,-7,9,-13,13,-18v-5,-1,-6,3,-9,5v9,-8,9,-15,16,-24v-8,-1,-5,-4,-9,-9v-6,10,-13,4,-20,11r2,-4v-12,-4,-21,9,-24,-1r-8,7r2,-4r-5,2v4,-4,2,-7,-2,-9r-9,2v2,-2,0,-5,0,-8r-10,8v3,-6,13,-10,8,-17v1,3,2,5,5,2v-2,-8,-6,-12,-15,-4v7,-6,5,-15,0,-22xm50,-4v3,-3,6,-6,-2,-5v-1,7,-8,1,-13,0r-11,9v4,-7,22,-15,13,-22r-15,13v3,-4,11,-9,4,-13v-4,2,-7,6,-11,4v1,-3,7,-7,3,-10r-9,8v9,-8,8,-16,8,-28r-4,2v3,-7,15,-14,11,-21v-9,0,-10,8,-15,12v2,-5,14,-11,8,-15v5,-9,19,-20,13,-26v10,-11,12,-17,18,-28r-6,4v9,-7,11,-15,13,-26v10,-10,14,-16,13,-18v-5,-1,-6,3,-9,5v14,-12,19,-19,18,-22r-10,6r18,-24r-5,1v3,-5,9,-6,9,-13r-6,4v7,-7,9,-13,13,-18v-5,-1,-6,3,-9,5v9,-8,9,-15,16,-24v-8,-1,-5,-4,-9,-9v-6,10,-13,4,-20,11r2,-4v-12,-4,-21,9,-24,-1r-8,7r2,-4r-5,2v4,-4,2,-7,-2,-9r-9,2v2,-2,0,-5,0,-8r-10,8v3,-6,13,-10,8,-17v1,3,2,5,5,2v-2,-8,-6,-12,-15,-4v7,-6,5,-15,0,-22r-5,4r17,-19v0,4,2,4,5,2r-4,6v10,-1,13,-8,19,-13v-6,5,-3,9,-8,14v9,-1,14,-7,19,-12v-2,3,-8,6,-4,11v7,-7,13,-6,23,-9v-3,3,-11,7,-4,10v9,-7,11,-7,24,-5r11,-11v-2,5,-6,10,2,11r11,-4v-3,1,-1,4,0,6r9,-7r-2,5v2,-6,10,0,13,-4r-2,6v3,0,6,-4,7,0v-2,3,1,7,6,7v-1,-3,-3,-5,0,-7v1,5,3,7,6,3v-3,5,-16,11,-9,16r10,-6v-2,7,-10,13,-9,20r6,-2r-2,8r7,-4v-3,5,-12,9,-7,15v-4,1,-5,3,-4,7r9,-7v-3,5,-12,9,-7,15v-4,5,-16,11,-13,16r6,-3r-21,23v7,-1,2,8,2,10r4,-2v-4,10,-13,19,-22,29v6,6,4,11,-2,15r5,-2v-9,10,-16,16,-20,30r6,-4v-7,6,-5,11,-11,17r7,-4v-4,7,-15,14,-15,20r4,-1v-4,8,-18,13,-13,23v7,1,4,-2,2,-5v7,5,12,3,16,-4v-2,4,-7,8,-3,13r11,-9v-2,3,-10,9,0,8r11,-12v-2,4,-8,7,-4,12v3,-2,11,-2,6,-6v2,4,9,0,13,0v-1,4,-4,8,3,7r6,-5v-2,3,-10,8,0,7r11,-11v-1,3,-9,9,0,8r8,-8v-2,4,-10,8,-6,11v6,-4,8,1,11,6v-3,5,-13,10,-5,14r14,-13v-5,6,-12,18,-13,24r4,-1r-2,5r6,-2v-4,6,-12,8,-12,17r12,-9r-19,20v0,-4,4,-9,0,-11r-6,2v3,-3,3,-5,-3,-4r2,4v-6,-2,-10,-2,-13,0r2,4v-5,-4,-8,-2,-11,3v2,-8,14,-12,3,-9v-5,-8,-12,7,-18,11v2,-4,9,-8,5,-11v-8,0,-10,9,-20,6v1,-6,-4,-3,-7,-3v2,-1,0,-3,0,-5v-4,3,-6,11,-13,8r20,-23r-3,-3xm50,-4v3,-3,6,-6,-2,-5v-1,7,-8,1,-13,0r-11,9v4,-7,22,-15,13,-22r-15,13v3,-4,11,-9,4,-13v-4,2,-7,6,-11,4v1,-3,7,-7,3,-10r-9,8v9,-8,8,-16,8,-28r-4,2v3,-7,15,-14,11,-21v-9,0,-10,8,-15,12v2,-5,14,-11,8,-15v5,-9,19,-20,13,-26v10,-11,12,-17,18,-28r-6,4v9,-7,11,-15,13,-26v10,-10,14,-16,13,-18v-5,-1,-6,3,-9,5v14,-12,19,-19,18,-22r-10,6r18,-24r-5,1v3,-5,9,-6,9,-13r-6,4v7,-7,9,-13,13,-18v-5,-1,-6,3,-9,5v9,-8,9,-15,16,-24v-8,-1,-5,-4,-9,-9v-6,10,-13,4,-20,11r2,-4v-12,-4,-21,9,-24,-1r-8,7r2,-4r-5,2v4,-4,2,-7,-2,-9r-9,2v2,-2,0,-5,0,-8r-10,8v3,-6,13,-10,8,-17v1,3,2,5,5,2v-2,-8,-6,-12,-15,-4v7,-6,5,-15,0,-22r-5,4r17,-19v0,4,2,4,5,2r-4,6v10,-1,13,-8,19,-13v-6,5,-3,9,-8,14v9,-1,14,-7,19,-12v-2,3,-8,6,-4,11v7,-7,13,-6,23,-9v-3,3,-11,7,-4,10v9,-7,11,-7,24,-5r11,-11v-2,5,-6,10,2,11r11,-4v-3,1,-1,4,0,6r9,-7r-2,5v2,-6,10,0,13,-4r-2,6v3,0,6,-4,7,0v-2,3,1,7,6,7v-1,-3,-3,-5,0,-7v1,5,3,7,6,3v-3,5,-16,11,-9,16r10,-6v-2,7,-10,13,-9,20r6,-2r-2,8r7,-4v-3,5,-12,9,-7,15v-4,1,-5,3,-4,7r9,-7v-3,5,-12,9,-7,15v-4,5,-16,11,-13,16r6,-3r-21,23v7,-1,2,8,2,10r4,-2v-4,10,-13,19,-22,29v6,6,4,11,-2,15r5,-2v-9,10,-16,16,-20,30r6,-4v-7,6,-5,11,-11,17r7,-4v-4,7,-15,14,-15,20r4,-1v-4,8,-18,13,-13,23v7,1,4,-2,2,-5v7,5,12,3,16,-4v-2,4,-7,8,-3,13r11,-9v-2,3,-10,9,0,8r11,-12v-2,4,-8,7,-4,12v3,-2,11,-2,6,-6v2,4,9,0,13,0v-1,4,-4,8,3,7r6,-5v-2,3,-10,8,0,7r11,-11v-1,3,-9,9,0,8r8,-8v-2,4,-10,8,-6,11v6,-4,8,1,11,6v-3,5,-13,10,-5,14r14,-13v-5,6,-12,18,-13,24r4,-1r-2,5r6,-2v-4,6,-12,8,-12,17r12,-9r-19,20v0,-4,4,-9,0,-11r-6,2v3,-3,3,-5,-3,-4r2,4v-6,-2,-10,-2,-13,0r2,4v-5,-4,-8,-2,-11,3v2,-8,14,-12,3,-9v-5,-8,-12,7,-18,11v2,-4,9,-8,5,-11v-8,0,-10,9,-20,6v1,-6,-4,-3,-7,-3v2,-1,0,-3,0,-5v-4,3,-6,11,-13,8r20,-23r-3,-3","w":173,"k":{"z":14,"y":49,"r":11,"j":62,"Z":14,"Y":73,"X":7,"W":15,"V":13,"T":18,"Q":41,"O":41,"M":30,"L":35,"K":18,"I":24,"H":27,"G":33,"F":21,"E":25,"D":24,"C":37}},"a":{"d":"74,-242v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm46,-120v3,6,7,2,11,-2r-3,8r7,-4v-2,13,15,3,24,7v8,-12,22,-15,18,-31v-6,0,-7,5,-11,7v4,-7,18,-13,15,-20r-9,3r4,-7r-6,2v6,-10,-6,-11,-2,-18r-7,1v3,-6,18,-12,9,-18r-13,11v5,-6,12,-10,7,-20v-9,-3,-10,12,-14,7v-3,4,-10,5,-9,13r13,-7v-5,8,-21,16,-19,24v2,-2,5,-2,7,0v-3,5,-14,12,-11,16r6,-1v-4,7,-20,14,-11,20r11,-10xm122,-116v8,7,13,-6,18,-10v-1,5,-9,11,-5,15v-4,1,-5,4,-4,8r5,-4v-3,6,-3,13,0,20r10,-7v-2,3,-8,6,-4,9v-3,-4,-7,3,-11,5v4,3,7,11,13,8v-4,2,-5,5,-4,9v9,0,13,-4,17,-9v-5,7,-17,14,-17,22r4,-2v-9,18,4,11,11,6r-20,26v1,-3,4,-5,4,-10r-4,2v2,-3,0,-3,-4,-3r-9,9v2,-4,7,-8,2,-11r-8,3v3,-5,9,-7,10,-14v-2,1,-5,3,-4,-2r-9,7v4,-7,17,-14,14,-20v-10,-1,-10,8,-16,11v3,-6,12,-11,7,-20v1,4,3,4,6,1v-3,-8,-7,1,-11,-3v0,0,4,-12,-4,-10r-7,8r1,-8v-16,9,-24,-7,-33,4v1,-3,6,-7,2,-9r-17,15v1,-4,10,-9,6,-11v-7,9,-21,12,-20,29r7,-3v-3,5,-9,7,-9,14r7,-5v-4,12,-13,18,-20,26v0,-5,0,-10,-4,-10v6,-2,8,-6,4,-11r-21,19v3,-6,17,-12,8,-17r-5,2v7,-4,9,-9,7,-18r-7,1v3,-5,14,-11,10,-16r-5,3r5,-7r-5,2r17,-18v-7,1,-5,-6,-13,-6v11,-9,7,-13,9,-28r-8,6r13,-15r-7,4v5,-9,16,-12,18,-24v-2,-2,-7,0,-14,7v2,-4,11,-9,7,-13r2,2v1,-3,4,-5,4,-9v-6,-2,-2,7,-6,4r-11,9v12,-11,17,-19,15,-21r-8,2v4,-7,17,-12,13,-20r-3,4v4,-9,-1,-12,7,-17v-3,-5,-9,1,-11,4v6,-4,10,-10,11,-19v-4,2,-5,0,-9,4v3,-6,15,-11,11,-18v7,-5,9,-10,7,-12r-11,8v3,-6,14,-13,11,-19r-3,2v0,-7,5,-8,5,-15r-9,8v4,-6,9,-24,17,-18v5,-4,11,-4,16,-10v-1,2,-4,5,-2,7r13,-10r-7,10r7,-5v-4,5,-6,9,-2,15r8,-6v-3,5,-12,11,-4,15r4,0v-3,5,-11,8,-6,15r4,-6v0,5,-9,15,2,13r11,-11v-3,7,-14,12,-9,20r5,-1v-5,2,-6,5,-2,9r4,-2v-5,4,-8,8,2,9v-7,6,2,9,-2,15r11,-9v-3,6,-14,10,-9,18v6,1,9,-2,11,-5v-3,6,-13,13,-9,20r3,-2v-7,7,-11,14,0,13r8,-7v-7,6,-10,10,-8,13v7,-1,1,3,2,7r8,-6v-3,4,-11,9,-4,13r7,-4v-1,4,-9,10,-5,13v3,-2,3,0,3,4r0,2v4,-3,5,0,6,4xm107,-94v5,10,13,-5,19,-8v-5,-10,-13,5,-19,8","w":158,"k":{"Y":61,"W":39,"V":36,"T":138,"P":28,"\"":118}},"b":{"d":"42,-258v-1,0,-1,0,-1,1v1,0,1,0,1,-1xm37,-181v5,-2,8,0,13,-5v-4,7,-22,15,-13,22r20,-19v-1,3,-7,7,-3,9r10,-9v-1,3,-5,6,-1,8v1,-4,14,2,14,-4r-3,5v13,-1,16,-12,24,-18v-4,6,-11,9,-13,17v6,-8,22,-15,20,-24r-7,5v4,-7,15,-12,15,-20r-8,3r2,-9r-11,9v5,-7,20,-17,18,-23v-9,-1,-11,7,-16,10v3,-5,12,-8,7,-14v-2,2,-4,2,-5,0v0,-4,5,-12,-2,-11v1,-5,-2,-4,-6,-4r-3,4v1,-2,2,-5,-2,-4r-6,6r4,-6v-10,-1,-15,1,-15,6r2,-6v-18,-1,-20,14,-31,20v4,-6,14,-11,13,-18r-23,22v3,2,8,4,4,8r7,-3v3,13,-17,16,-7,23r13,-10v-10,10,-5,13,-11,30xm39,-107v0,3,0,5,3,4r8,-8v-6,8,-15,15,-11,26r9,-7v-10,6,-13,13,-9,20r11,-9v-3,5,-9,6,-8,14r10,-7v-3,6,-15,11,-8,17v6,-1,14,-7,17,0r11,-11v-2,3,-6,6,-4,11v5,-6,14,-3,22,-2v5,-8,21,-13,17,-22v4,2,7,-1,4,-4r-4,2r2,-6r-6,4v4,-2,5,-5,4,-9r-4,2r2,-6r-7,6v3,-5,8,-7,9,-13r-4,2v7,-6,10,-11,8,-13r-6,3r2,-11r-5,4v6,-9,1,-13,3,-22v-4,3,-7,1,-9,-2r-11,11v2,-4,12,-11,0,-9r-9,9v2,-3,6,-6,4,-11r-10,5v4,-5,15,-9,7,-14v-5,6,-9,13,-20,13v-6,8,-23,14,-20,24r4,-2r-2,5r5,-1xm107,-37v2,7,6,0,9,-2v-2,-5,-6,0,-9,2xm8,-273r18,-20r-2,10v15,-1,14,-3,22,-10r-7,9r11,-4v-3,3,-6,6,2,5r5,-5r-3,5v11,-3,11,1,16,-5v0,3,-4,7,-2,9v4,-10,15,-5,21,-11v-1,2,-6,6,-2,7r13,-10v-5,1,-6,6,-2,13v8,1,12,-2,15,-6r-4,9r5,-2v-1,4,-2,7,4,6r8,-7v-3,5,-16,13,-4,14v-1,5,2,3,4,2v-2,4,-7,12,3,11r6,-5v-2,5,-13,9,-9,14r5,-3v-3,4,-10,9,-4,13r8,-4v-4,5,-11,10,-2,13v-10,7,2,16,-9,22v2,3,4,1,7,0r-2,5r7,-5v-3,7,-14,14,-10,20r7,-5v-3,5,-15,11,-11,16r9,-7v-3,6,-16,13,-13,18r4,-1r-2,7r6,-4v-3,5,-10,7,-10,15v8,1,9,-5,13,-8v-1,3,-7,7,-3,10r5,-4v-4,6,-13,11,-4,17r12,-10v-4,9,-17,16,-13,26r10,-3v-3,16,-3,20,-12,27v2,5,5,3,9,0v-3,2,-1,5,0,8r9,-8v-3,6,-16,16,-7,22v-5,-1,-4,2,-4,6r4,-2v-9,11,-14,25,-26,33v8,2,17,-15,26,-20r-28,30v1,-3,6,-8,2,-10r-19,15r8,-9r-11,4v4,-3,-3,-7,-4,-11r-13,11v5,-3,6,-6,2,-10r-11,8v2,-3,4,-7,0,-9r-17,14r6,-7r-15,2v3,-1,1,-4,0,-6v-1,3,-2,5,-5,2v2,-3,-1,-7,-2,-11r-15,6v4,-6,16,-13,13,-19r-11,4v-4,-5,7,-9,3,-13v-5,0,-6,3,-9,5v3,-6,14,-10,9,-18r-3,2v2,-6,11,-12,7,-17v-3,1,-5,3,-7,0v2,-2,2,-4,-2,-3r-8,7v3,-6,13,-11,12,-17r-6,2v2,-5,11,-11,7,-15r-5,2v1,-5,9,-11,5,-15r-5,2v2,-2,6,-5,2,-7r-7,5v3,-7,19,-14,10,-20r-10,7v3,-5,10,-10,9,-16r-4,0v3,-6,16,-14,7,-19v-5,2,3,11,-7,6r2,-9r-6,3v3,-6,20,-14,6,-16v1,-3,5,-9,0,-9v4,0,6,-9,0,-8r-10,9v4,-6,19,-15,6,-20v7,-4,10,-9,7,-15r-5,2r4,-7r-8,5v6,-6,10,-14,9,-20r-9,7v4,-7,11,-9,11,-16r-9,4v2,-4,7,-5,6,-12r-4,2v4,-2,5,-5,4,-9v-4,2,-5,0,-9,4","w":149,"k":{"j":56,"Y":95,"W":90,"V":84,"T":135,"F":81,"\"":25}},"c":{"d":"61,-277v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm74,-54v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm133,-83v5,8,9,-9,16,-2v0,7,-10,-1,-5,8v-4,1,-5,3,-4,7r8,-6v-7,6,-11,10,-8,13r4,-1v-2,3,-5,4,-5,9r9,-8v-5,7,-12,10,-15,19r3,-2v-6,13,-13,15,-23,24r1,-8v-10,0,-16,19,-22,8v3,-4,12,-8,4,-11r-15,13r4,-8v-8,11,-27,-7,-33,6r3,-8r-5,2r4,-9r-6,4v3,-5,9,-8,6,-15r-19,17v3,-6,18,-13,9,-19v-4,4,-8,9,-9,0r-7,6r2,-6r-4,2v8,-11,-4,-19,-9,-9v4,-5,13,-12,3,-15r-3,2v3,-7,17,-14,11,-20v-4,6,-10,5,-15,7r2,-6r-7,6v3,-6,15,-13,12,-19r-5,2r2,-7r-9,7v4,-7,17,-14,14,-20r-4,0v5,-5,7,-9,-1,-11r-4,2v8,-11,2,-26,4,-35r-8,5v2,-4,7,-5,8,-11r-6,4v4,-5,12,-10,6,-17r-6,4v3,-4,11,-15,2,-19v7,-4,1,-7,4,-14r-6,4v2,-4,8,-8,6,-12r-6,4v4,-8,24,-16,15,-24r-18,16v9,-9,17,-16,16,-31r-9,6r35,-41v-2,4,-5,7,-2,11r13,-9v-3,1,-5,2,-2,5r11,-7r-2,2v10,6,20,5,28,-5v-2,4,-11,11,0,9r11,-12v-2,4,-6,6,-7,12r5,-2r-2,3r6,-1r-2,4v3,-1,7,-5,7,0v-3,4,-10,9,-3,12v4,-5,12,-5,20,-3v-3,4,-7,7,-2,11r11,-4v-3,6,-15,12,-11,17v3,-2,6,-5,10,-2v-4,-1,-5,1,-4,5r5,0v-2,4,-3,9,-1,15v5,0,6,-3,9,-5v-9,9,-13,15,-12,20v2,-1,5,-3,4,2r8,-6r-12,13r8,-3v-6,4,-14,22,-17,10v1,3,4,1,6,0v-1,-5,-6,-2,-13,2v4,-7,8,-20,-2,-15v4,-6,-2,-7,-5,-3v1,-6,1,-12,0,-17r-4,2v4,-2,5,-5,4,-9r-4,2r2,-6r-4,2r6,-7v-13,-2,-4,-9,-10,-13v-6,6,-14,19,-18,5r-11,8r3,-6v-4,3,-7,1,-9,-2r-29,31v2,7,7,-1,11,-3v-10,8,-4,16,-13,24v5,1,4,3,5,7r10,-7v-11,9,-15,27,-6,37v-3,4,-13,9,-5,13r3,-2v-1,3,-4,7,2,6v-3,3,-5,7,-4,14r8,-5v-7,6,-10,11,-8,13r4,-2r-2,7r6,-4v-2,5,-13,10,-9,15r5,-2r-4,13r8,-5v-7,7,-10,16,-9,22r5,-2r-2,15r6,-4v-4,7,1,17,7,10r-2,3v8,-4,13,6,19,-3v-4,1,0,4,0,7v10,-2,24,0,20,-11r4,1v-2,3,-6,5,-6,10v12,-7,12,-17,22,-26v-10,-1,2,-7,-1,-11r-6,4v9,-7,6,-14,9,-23r-3,2r11,-13r-2,6r13,-4r-2,9v13,-4,10,8,7,15r6,-4v-1,10,-8,13,-13,19","k":{"z":87,"y":82,"r":71,"g":11,"f":56,"Y":85,"W":74,"T":126,"\"":-8}},"d":{"d":"24,-275v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm41,-203v3,4,9,-6,13,-8v-4,6,-16,12,-8,19v4,-1,4,-3,2,-6v1,3,4,1,6,0v-4,7,-12,9,-13,19v3,-5,8,-2,13,-7v-11,8,-8,12,-12,22v13,2,1,10,4,15r9,-8v-4,7,-18,13,-14,21r3,-3v-2,2,-2,4,0,6r4,-2r-2,13r8,-5v-11,11,-6,18,-6,29r4,-2v-2,4,-13,11,-2,11r-2,6r4,-2r-8,9v5,0,6,5,2,12r4,-4v-3,4,-8,8,-2,11r9,-7v-1,3,-4,6,-2,9r15,-13v-2,4,-8,7,-6,11r8,-4v-3,2,-1,4,0,7r13,-10v-2,2,-6,5,-2,7r9,-7v-2,3,-5,6,2,5v8,-12,31,-20,26,-37r-4,2v2,-4,12,-9,8,-13r-6,0v4,-3,11,-15,6,-20r-8,3v3,-5,14,-12,11,-16v-5,2,-8,4,-5,-2v-6,-5,7,-8,2,-11v-6,-1,-7,3,-10,5v5,-7,16,-10,12,-22r-6,4v1,-5,8,-11,4,-15v2,4,5,0,7,-2v-1,-4,-5,-3,-9,-2r2,-9r-6,4v4,-7,20,-14,11,-21r-11,10v6,-2,8,-11,6,-23v-8,-1,-9,5,-13,8v2,-6,13,-12,9,-17r-9,8v10,-7,13,-13,9,-17r-6,4r2,-8r-5,2r3,-5r-9,3v3,-5,15,-10,8,-16r-19,16v5,-4,8,-8,-2,-9v-4,5,-8,3,-12,0r-12,11v2,-5,12,-10,6,-14v-6,0,-3,3,0,5r-6,-2r-38,34v4,9,10,-2,16,-6r-2,6r4,-3v-6,7,0,17,-7,21xm90,-28v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm120,-37v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm102,-277v-8,-1,-4,3,-2,6v3,-1,3,-3,2,-6xm28,-186v0,1,1,1,2,1v0,-1,-1,-1,-2,-1xm31,-293v-1,3,-7,8,-3,10v6,0,8,-2,13,-5v-2,3,-2,5,3,4r8,-8v-1,3,-6,6,-2,8r11,-2v0,3,-4,6,0,7r15,-13v-1,3,-8,7,-4,9r11,-10v2,9,14,8,17,1r-6,8v6,1,11,0,13,-4v-4,4,-4,6,2,8v3,-6,12,-6,17,-12v-4,6,-12,8,-12,17r6,-4v-2,4,-8,7,-6,11v6,-6,3,11,10,4r-4,-7v5,3,9,12,16,7v-1,4,-1,8,3,9v-3,4,-12,8,-4,11r17,-13v-4,9,-19,18,-17,26v9,-1,13,-8,18,-13v-10,6,-13,13,-9,20r9,-7v-4,6,-14,12,-13,19v11,1,11,-8,17,-12r-9,12v6,1,6,-4,9,-6v-2,6,-13,13,-9,19r5,-4v-3,6,-15,12,-7,17r11,-10r-11,13r7,-3v-3,6,-18,12,-9,18v3,-5,6,-7,8,0r5,-4v-4,6,-16,13,-13,19r8,-4v-2,4,-10,8,-6,11r7,-3v-2,3,-5,5,-5,10r5,-3v-5,6,-5,13,-1,20v-2,4,-10,9,-6,13r6,-4v1,10,-16,21,-4,28r-4,11r8,-3v-3,5,-13,10,-10,14v-6,2,-7,6,-3,11r7,-5r-33,37r3,-10v-8,4,-16,9,-24,17r10,-11v-7,1,-11,6,-17,0v3,-3,1,-5,-4,-4r2,4v-2,-4,-6,1,-9,2v3,-1,1,-4,0,-6r-11,10r4,-6r-15,2v1,-4,4,-4,7,-2r-2,-7r-13,11r2,-6v-9,4,-12,-5,-16,4r1,-4v-17,5,4,-18,-11,-13r-9,9v8,-7,8,-11,7,-22r-3,2v2,-3,6,-5,5,-11r-5,4v2,-3,6,-5,5,-11r-7,5v7,-6,10,-11,7,-13r-5,4v6,-5,8,-12,5,-22v1,4,3,4,6,2v-7,-4,-11,-10,-6,-19r-7,6v5,-7,20,-16,4,-19v2,-2,0,-6,0,-9v1,3,3,1,5,0r-2,-3v7,3,5,-4,4,-8v-14,-1,0,-16,-4,-22v-2,2,-4,2,-5,0v2,-4,9,-8,5,-11r-7,2v5,-1,7,-9,7,-21r-3,2v3,-6,15,-12,7,-17r-13,10v3,-5,9,-7,9,-15r-3,2v1,-4,7,-9,3,-11r-5,4v2,-5,13,-10,9,-15v-5,2,-9,2,-9,-4v6,-1,8,-8,5,-20r-5,3v4,-2,4,-5,3,-9r-5,4v3,-5,9,-8,5,-15r-9,7","w":165,"k":{"r":-14}},"e":{"d":"67,-273v0,0,0,2,1,2v0,0,0,-2,-1,-2xm11,-275r15,-15r-2,7r7,-5v-1,3,-1,6,0,8r11,-6r-1,3v8,-4,13,1,18,-7r-2,4r7,-4v-1,2,-1,4,0,6r-3,-2v-2,12,8,6,11,2v-4,1,0,4,0,7r18,-13r-1,4r11,-2v-1,2,-3,5,2,4r5,-6r-2,7r4,-1v-3,4,-10,9,-4,13r9,-8v-1,3,-5,7,2,6v3,-5,6,-3,8,2r-2,7r7,-4v-8,10,-14,18,-24,21r2,-6v-3,3,-5,1,-7,-2r-10,9v2,-3,10,-8,0,-7v-1,6,-11,-5,-14,6v1,-3,6,-6,4,-10v-5,4,-8,13,-16,8v4,-1,2,-4,0,-6v-9,5,-18,10,-20,22r6,-3v-2,3,-8,6,-4,9r4,-2v-4,9,-24,18,-15,26r13,-11r-4,7r4,-1v-4,2,-5,5,-4,9r4,-2v-6,9,-1,8,-4,26r8,-8v-2,4,-12,9,-8,13v6,1,8,-2,11,-5r-3,7r18,-13v-1,3,-4,6,-2,9v8,-5,16,-2,28,-5r-2,3r15,-1v-3,3,1,12,7,7v-1,5,2,3,4,2r-4,7r4,-2r-4,12v6,1,7,-4,10,-6v-7,5,-8,12,-12,16v2,-3,2,-6,0,-9r-12,12v1,-3,5,-6,1,-8v-6,4,-13,12,-14,0r-8,5r2,-3v-7,4,-12,2,-16,-4r-32,32v4,5,8,5,11,0r-2,14r4,-2v-4,2,-5,6,-4,10r6,-4v-2,4,-7,5,-6,11r4,-2r-4,17r6,-4v-6,5,-6,8,-2,15v11,1,6,4,9,9v4,-2,10,-13,11,-5r17,-15v-3,6,-18,13,-9,18r18,-16v-2,3,-6,6,-4,11r10,-7v4,7,8,9,13,7v-4,7,1,14,5,7v1,1,6,2,2,2r-4,2v3,2,9,2,8,9r9,-5v-10,13,-20,16,-31,27v1,-2,4,-5,1,-7r-11,7v2,-4,12,-9,8,-13v-10,-1,-10,6,-15,10v2,-5,12,-10,7,-15v-6,10,-16,5,-22,15r4,-6v-5,3,-8,0,-11,-4v-5,8,-7,8,-13,8v3,-2,0,-4,-2,-6v4,-3,12,-6,6,-11r-30,26v3,-6,11,-8,11,-17r-7,2v4,-4,-6,-7,-8,-11r-3,2v5,-8,0,-4,3,-20v-3,4,-5,1,-9,5v4,-6,16,-13,6,-18v1,-3,9,-7,5,-9r-4,1r2,-5r-11,9v4,-6,12,-9,13,-18v-5,-1,-7,1,-9,3v8,-10,4,-5,7,-27r-3,3v4,-2,4,-5,3,-9r-3,2r5,-9r-7,3v3,-6,19,-15,7,-18r-11,7v6,-8,14,-15,13,-22r-6,4v6,-8,-1,-13,4,-24r-11,7v3,-5,14,-12,11,-16r-4,1r2,-7r-5,4v2,-3,5,-5,5,-10r-5,4v2,-4,9,-8,5,-11r-7,4v10,-9,2,-14,9,-35v-3,-4,-6,-4,-9,0r7,-11r-3,1v11,-12,-7,-27,7,-37","w":134,"k":{"r":18,"e":-9,"Y":58,"W":36,"V":35,"T":137,"P":20,"\"":126}},"f":{"d":"68,-159v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm15,-70v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm22,-155v-5,2,-5,5,-2,9v6,-2,6,-5,2,-9xm20,-211v-2,-1,-2,1,-2,3v2,1,2,-1,2,-3xm35,-253v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm28,-257v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm67,-279v-2,0,-4,0,-3,2v2,0,4,0,3,-2xm103,-164v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm28,-31v0,0,-2,0,-2,1v0,0,2,0,2,-1xm5,-64v11,-8,8,-14,12,-25v-5,-1,-4,2,-4,6v-11,-2,12,-16,-2,-20r4,-11r-4,1v2,-7,2,-17,7,-22v-10,1,5,-15,-9,-9v3,-6,15,-12,11,-17v-3,3,-6,5,-7,-1v1,-9,3,-11,4,-17r-4,0v9,-10,16,-16,2,-15r2,6v-11,-6,5,-14,-4,-19v2,3,8,10,7,0v-5,-7,-10,0,-15,4v7,-9,22,-19,13,-26r-7,8v4,-11,2,-16,11,-23v-5,-6,-9,3,-14,6v2,-4,11,-9,7,-13r-4,2v-4,-5,8,-9,4,-13v-6,-1,-7,3,-10,5v4,-9,10,-3,15,-5v-1,-3,-3,-5,-7,-4v1,-4,6,-10,2,-13r-7,6r18,-20v-1,3,-6,7,-2,9r11,-6v-3,2,-1,4,0,7r15,-5v-6,4,-8,8,-4,13r17,-15r-2,4r7,-4v-2,3,-6,6,-4,10r12,-10r-4,6r13,-4v-2,1,-2,3,0,5v5,-7,14,-1,18,-10v-7,6,-4,15,6,16v-3,6,-15,12,-7,17r11,-10v-2,4,-12,10,-8,13v8,0,8,-6,13,-9r-16,19v1,-4,5,-8,1,-11v-8,9,-22,-3,-26,9v-1,-3,-3,-1,-5,0r2,-4r-11,4r1,-4v-14,-1,-15,12,-23,17r7,-10v-9,1,-18,10,-15,17v7,1,5,-9,8,0r-2,5r3,-1v-2,4,-9,8,-5,11r7,-6v-3,5,-9,8,-5,15r11,-9v-4,7,-18,13,-15,20r7,-5v-4,7,-21,15,-12,22v5,-4,7,-9,14,-9v-7,6,-10,10,-7,12v6,0,11,-1,13,-5r-2,4r6,-2v-2,3,-3,6,3,5r4,-3v-2,2,-6,5,-2,7r15,-13v-5,4,-7,8,0,11r11,-9v-3,3,-6,6,2,5r7,-7r-9,11v10,0,14,-6,22,-13v-3,6,-18,13,-9,19r9,-8r-4,8r10,-2v-3,5,-5,11,-2,17r5,-4r-14,18v1,-12,-10,-4,-19,-5v-5,9,-15,-7,-22,1r-17,17r17,-18v-12,-5,-17,13,-26,18v1,4,4,4,7,2r-3,11r9,-7v-3,5,-15,11,-11,16r4,-2v-3,2,-1,5,0,8r3,-2v-2,4,-11,9,-7,13r5,-2v-8,8,2,16,-3,28r3,-2v-8,6,1,10,-3,17r3,-2v-1,3,-7,6,-3,9r9,-7r-26,29r9,-13v-8,0,-13,-10,-18,-7v8,-8,3,-8,2,-19r-6,4v11,-8,1,-10,4,-20","w":123,"k":{"f":-9,".":75}},"g":{"d":"114,-251v3,-1,1,-4,0,-6r-12,11r5,-7v-4,3,-7,1,-9,-2r-9,9v2,-3,8,-8,1,-9v-17,-1,-27,6,-35,15v2,-4,10,-8,8,-13v-6,8,-21,13,-21,24v7,1,8,-5,12,-7v-2,6,-19,15,-8,18v-2,3,-6,6,-4,10r4,-3v-5,4,-6,8,-2,12v-4,4,-10,8,0,9v-2,1,-2,3,0,5r4,-1v-4,7,-22,15,-13,22r11,-10v-6,6,-2,7,-4,15r4,-2v-4,5,-5,12,-4,22r12,-9v-4,6,-12,8,-12,17r8,-5v-2,4,-6,6,-8,10r6,-1v-2,4,-8,7,-6,11r8,-6v-3,6,-11,8,-11,17v9,1,10,-6,15,-9v-10,7,-7,16,-15,24v3,2,6,-1,9,-2v-4,1,-5,7,-4,18v19,-6,0,7,6,13v-4,4,-11,7,-4,11r24,-22v-3,5,-8,7,-9,13r7,-2v0,2,0,10,8,9v-2,-3,-5,-5,-2,-9v4,1,8,2,0,2v-2,7,8,1,7,9v5,-5,9,-12,15,-5v8,-13,27,-17,26,-39r-8,5r10,-14v-7,-1,-7,5,-11,7v4,-9,25,-18,16,-26r-16,15v3,-6,16,-14,7,-19r-13,4r2,-2v-6,-5,-10,0,-15,4r2,-6r-7,2v1,-1,1,-3,0,-5r-9,7r1,-9v-6,1,-11,3,-14,7v4,-6,12,-9,13,-18r-6,2v3,-4,10,-10,-2,-9r-5,5v6,-9,17,-13,23,-22r-5,7r11,-5v-3,4,-8,7,-4,12r17,-14v-4,1,-6,6,-6,13v9,0,11,-3,19,-9r-4,5r9,-4v-1,2,-1,4,0,6r9,-6r-1,6r5,-2r-1,5r7,-3v-3,4,-10,9,-4,13r7,-6v2,10,-11,14,-3,21v3,-1,3,-5,7,-6v-2,6,-11,12,-7,17r9,-8v-3,5,-9,7,-9,15r3,-2r-3,9r6,-3v-3,4,-12,9,-3,11v-4,3,-4,5,-3,9r3,-2v-3,4,-7,8,-1,11r5,-4v-3,5,-14,13,-11,17r6,0v-3,4,-11,8,-6,13r4,-2r-33,34v1,-4,7,-9,3,-12v-8,2,-13,8,-18,13r4,-13v-11,1,-15,9,-21,15v2,-3,6,-4,6,-9v-8,-1,-10,3,-13,6v3,-6,15,-12,7,-17r-20,18v6,-4,7,-8,3,-13r-7,2v4,-4,5,-7,4,-9v-10,3,-15,11,-22,17v3,-6,18,-13,9,-19r-15,13v4,-5,11,-10,2,-13v3,-5,15,-10,7,-15r-9,10v2,-4,7,-10,-2,-8r-11,10v4,-7,12,-9,13,-19v-9,-3,-9,12,-15,7v9,-7,12,-13,8,-18r-6,2r2,-6r-9,8v3,-6,18,-13,9,-19r-7,6r2,-6r-4,2v3,-5,9,-7,9,-15r-7,4v6,-7,8,-12,5,-15r-9,6v4,-6,12,-10,7,-19r-5,4v2,-4,9,-8,5,-11r-5,4v1,-4,9,-10,5,-13v-3,2,-4,0,-5,-2v12,-10,-4,-24,7,-32v-2,-1,-2,-2,0,-3r-7,3v2,-5,5,-8,5,-14r-7,5v2,-4,11,-9,7,-13r-3,2r3,-7r-3,2r5,-12r-7,4v4,-6,12,-11,5,-18v-5,-1,-7,2,-9,4v3,-6,14,-10,9,-17v3,3,5,5,4,-2r-7,2v3,-6,14,-13,11,-19r-9,8r14,-19r-3,0v7,-5,12,-22,22,-15r9,-7v-2,3,-6,7,2,6r9,-9v-3,4,-12,11,0,10r11,-10v-3,4,-9,8,-5,14r13,-11v0,4,-6,9,-2,11r9,-7r-4,6v3,-2,7,-4,8,1r9,-7v-1,3,-6,7,-2,9r9,-7v-3,3,-1,5,4,4r-2,-4v5,0,3,4,2,7v2,-1,5,-3,6,0v-2,4,-5,7,-2,11r15,-13v-3,6,-13,11,-12,17v5,0,12,-4,15,0v-3,5,-9,9,-2,13r15,-13v-7,8,-16,17,-13,24r7,-2v-2,6,3,18,-5,20v7,-1,2,5,2,8r7,-4r-26,28v3,-6,9,-8,9,-17r-10,2v1,-8,-7,-15,-4,-28r-9,7v3,-5,17,-12,5,-14v1,-2,3,-5,-2,-4v2,-4,10,-8,6,-11","w":160,"k":{"r":-12,"T":143}},"h":{"d":"109,-240v10,-6,12,-13,7,-20r-7,5v3,-5,8,-7,9,-13r-7,6v3,-6,15,-11,11,-18r-8,5r17,-18v-1,3,-7,8,0,7r8,-7v-4,5,-13,8,-8,16r13,-11v-3,5,-8,7,-9,13v5,1,5,-3,9,-4r-2,4r7,-4v-4,8,-18,14,-14,24r14,-13v-2,3,-5,5,-5,10r8,-6v-3,6,-19,14,-8,17v-1,7,2,3,5,1v-3,5,-10,9,-9,15r8,-2r-2,6r7,-6v-2,5,-13,10,-9,15r5,-3v-7,6,-7,13,-1,20v-3,-1,-6,-6,-8,-2v6,2,6,8,4,15r11,-10v-4,7,-15,13,-15,21v7,1,9,-3,12,-6v-4,1,-2,5,0,8v-2,4,-12,7,-8,11r4,-2v-2,8,-4,0,-8,4v3,9,8,5,13,0v-2,5,-17,14,-5,14r-2,8r6,-4v-4,7,-9,13,-8,20r5,-3v-4,2,-4,5,-3,9r9,-8v-4,6,-16,13,-13,19v2,-1,5,-3,6,0v-1,5,-4,9,-2,15r6,-4v-3,5,-14,10,-10,15r4,-2v-2,4,-7,5,-6,11v3,-1,7,-4,6,2r7,-6v-4,6,-16,14,-4,17r8,-5v-4,7,-20,14,-11,20r-2,7r11,-9r-16,18v0,-2,2,-5,0,-7r-13,11v1,-3,5,-7,1,-9v-4,4,-5,-5,-9,0v5,-5,1,-8,4,-15v-9,1,-12,6,-17,11v11,-6,15,-17,13,-33v-4,1,-4,3,-2,6v-9,-7,18,-16,6,-23r-9,7v9,-5,10,-10,5,-16r-7,6v4,-5,13,-22,3,-28v2,-3,8,-5,4,-8r-5,2v1,-6,9,-15,1,-18v4,-5,12,-6,12,-15v-12,3,-22,12,-23,22v-5,0,-1,-4,0,-7v-8,4,-11,-5,-16,2v3,-4,10,-9,3,-13v-7,7,-16,19,-23,9r-12,11v2,-4,10,-8,6,-11v-6,6,-14,11,-19,18r6,-1v-11,9,-3,11,-6,24r4,-2v-7,7,-2,21,-11,25r4,4v-8,-8,-9,0,-4,4r9,-2v-2,-5,-4,-10,0,-13v-2,9,2,15,-2,20r4,-1v-6,12,-1,21,-4,33r10,-4r-22,22v2,-5,4,-10,0,-13r-6,2r2,-3v-10,2,0,-8,-9,-6v1,-4,2,-8,-2,-9v4,-1,4,-6,3,-13v-5,0,-6,3,-9,5v4,-7,16,-11,11,-20r-12,10r22,-25v-5,-6,-10,3,-15,6v4,-4,4,-10,3,-20v-6,0,-6,5,-10,7v4,-7,13,-15,10,-20r-7,5v3,-6,18,-13,9,-18r-5,2r3,-12r-5,4v3,-6,14,-10,9,-18r-11,9v1,-3,10,-9,2,-8r-8,8v4,-7,17,-13,13,-20r-9,7v3,-6,15,-12,11,-17r-3,2v1,-2,4,-5,1,-7r-5,4v3,-4,9,-12,0,-13v4,-6,16,-13,13,-19v-5,-1,-8,1,-9,4v2,-13,-3,-16,3,-26v-3,-1,-3,-4,-2,-7r-10,3v8,-7,11,-12,10,-14r-3,1v3,-6,18,-12,9,-18r-9,7v2,-2,2,-4,-2,-3r-8,7v4,-7,18,-13,15,-20r-5,3r3,-7r-7,4r20,-23v-7,10,7,14,6,26r9,-7r-4,7r10,-7v-3,6,-14,13,-11,19r9,-8v-3,6,-11,8,-11,17v2,-2,4,-2,3,2r6,-4v-2,4,-11,9,-7,13r7,-2v-5,10,-7,16,-6,24r4,-2r-4,10r8,-6v-3,5,-14,12,-11,16r7,-1v-1,5,-6,11,-4,16r4,-2v-1,4,-4,10,4,8r4,-4r-4,7v5,-2,8,-2,9,2r11,-11r-7,9v11,-3,14,2,18,-5v-4,2,-5,5,-4,9v3,2,8,-1,15,-9r-2,5v4,-1,8,-1,10,2v5,-6,15,-8,16,-18r-11,9v5,-7,19,-15,17,-22r-6,4v5,-12,-2,-22,0,-32r-7,6v9,-7,6,-11,11,-24v-5,2,-8,6,-11,9xm31,-144v4,10,11,-2,17,-5r-2,-8","w":163,"k":{"z":17,"L":104}},"i":{"d":"35,-54v0,2,0,2,2,2v0,-2,0,-2,-2,-2xm24,-240v-8,-1,-4,3,-2,6v4,-1,4,-3,2,-6xm35,-268v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm17,-126v2,4,3,8,7,4v1,-6,-3,-5,-7,-4xm30,-292v0,6,3,6,7,4v-4,3,10,3,2,13r9,-8r-6,12v8,-1,10,-8,15,-12v-4,6,-10,10,-13,17v7,1,7,-5,11,-7v-3,5,-14,12,-11,16r6,-3v-3,5,-15,11,-8,16v7,1,9,-2,12,-5v-4,7,-22,15,-13,22r11,-9v-5,1,-8,7,-8,18r6,-3v-4,7,-22,15,-13,22r13,-12v-4,7,-20,14,-11,21r13,-9v-9,8,-10,14,-8,22r8,-4v-2,4,-7,5,-6,11r9,-7v-3,5,-12,9,-7,15v-4,5,-15,9,-7,14r5,-5v3,5,-9,12,0,14r6,-3v-2,4,-12,9,-8,13r10,-7v-4,6,-12,8,-13,18v9,1,9,-6,14,-9v-4,7,-14,13,-13,20r12,-6v-3,5,-10,7,-10,15v2,-1,5,-3,6,0r-6,9r8,-3v-6,7,-14,13,-8,20r6,0v-3,6,-15,12,-11,17v10,-2,-4,8,7,7r8,-7v-3,5,-13,10,-12,16r8,-5r-8,9r6,-2r-11,13v2,-4,7,-8,-2,-7v-3,6,-5,5,-11,7v2,-3,8,-6,4,-9r-4,2v4,-6,-13,-13,-2,-21v-1,-8,-5,-6,-9,-2v4,-7,20,-14,11,-20r-9,7v4,-5,10,-10,2,-14v2,-4,12,-7,7,-11v-5,5,-8,1,-6,-6r-3,2v6,-7,3,-12,11,-17v-10,1,-5,-4,-9,-11r-9,8v4,-7,11,-9,12,-19v-4,2,-6,2,-11,6v4,-8,17,-18,15,-24v-5,1,-7,1,-11,4v11,-10,2,-28,13,-36v-5,-6,-9,3,-13,6v4,-10,20,-20,15,-29r-13,10v2,-3,5,-4,5,-9r-3,2v2,-3,8,-8,1,-9v6,-13,-4,-17,4,-20v-5,-6,-11,2,-14,5v4,-8,25,-18,12,-24v3,1,8,6,10,2v-6,-8,-15,-8,-21,-2v4,-8,24,-16,15,-24v-4,5,-8,1,-13,7","w":68,"k":{"V":-15,"T":-20}},"j":{"d":"76,-251v3,-6,15,-12,11,-17r-6,4v4,-12,13,-20,21,-28v-3,5,-6,9,0,12r5,-3r-2,4r6,-1v-5,4,-7,9,-2,14r5,-4v-2,6,-11,13,-3,17v1,-6,6,-4,11,-7v-4,7,-18,13,-15,20r6,-2v-3,1,-1,4,0,6v-3,-2,-5,-2,-4,3r9,-1v-11,6,0,20,-9,26v3,2,5,-2,7,-3v-2,4,-6,6,-5,12r3,-2v0,0,-3,8,2,7r6,-5v-4,6,-16,12,-13,18r4,-2v-2,10,2,13,-6,19v1,2,3,2,6,2v-2,3,-8,6,-4,9r7,-4r-3,11r3,-2v-10,11,5,19,-5,24v1,4,3,7,0,10r5,-2v-1,4,-9,9,-5,13r7,-4v-4,5,-10,10,-2,13v-1,4,-9,9,-5,13r5,-4v-3,7,-10,10,-9,21r7,-6v-3,5,-12,11,-11,16v7,1,7,-5,11,-7v-2,6,-15,13,-9,17r-24,20v1,-4,6,-8,2,-11v-4,1,-12,1,-6,5r-7,2v1,-3,6,-7,2,-9r-17,15v2,-3,10,-9,0,-8r-7,8r6,-8r-6,2r2,-3r-9,3v4,-4,10,-7,3,-11r-9,8r4,-6r-8,4v3,-2,1,-6,0,-9v5,1,17,-8,10,-13r-17,16v5,-5,1,-10,4,-16v-8,2,-9,-4,-15,3v2,-3,6,-5,5,-11v-8,-1,-9,5,-13,8v3,-6,20,-15,6,-17v0,-5,7,-9,4,-13r-6,2r2,-11r-7,5v3,-7,14,-16,11,-22v-3,1,-7,3,-6,-3r-7,1r18,-20v-2,4,-3,7,4,6r7,-8v-3,5,-14,8,-9,15r9,-7v-6,6,4,5,2,13r8,-2v-2,4,-12,9,-8,13r4,-2r-2,5r6,-3v-7,7,-2,4,-6,18r4,-4v-1,3,-6,8,-2,9r4,-1v-4,7,-8,13,3,14v-1,4,1,4,4,3v-2,4,-10,8,-4,12r15,-12r-2,3v13,-3,23,-10,30,-22r-4,0v9,-6,0,-11,4,-22r-4,2r2,-6r-5,2v2,-4,11,-9,7,-13r-4,2v3,-9,7,-12,4,-22r-6,1v5,-6,1,-12,4,-20r-8,4v3,-6,13,-11,12,-17r-8,4v9,-9,5,-12,6,-24r-7,4v8,-8,2,-13,5,-23r-8,6v6,-8,18,-11,12,-24r-6,2v5,-17,-4,-24,6,-30v-5,-2,-9,4,-13,6","w":134},"k":{"d":"100,-257v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm31,-168v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm113,-59v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm129,-44v2,3,4,7,7,3v-2,-3,-3,-6,-7,-3xm13,-33v2,-5,13,-10,9,-15r-4,2v4,-5,4,-15,4,-18r-4,1r4,-9r-4,2v6,-7,8,-13,6,-15r-4,2v1,-4,6,-8,2,-11r-7,5v6,-8,10,-12,7,-22v4,-1,5,-3,4,-7v-9,2,-4,-6,-4,-11r-4,2v4,-2,5,-5,4,-9r-4,1v6,-6,-1,-7,4,-17r-4,4v2,-3,8,-6,4,-9r-4,2r4,-7r-4,1r4,-11r-4,2v4,-2,5,-5,4,-9r-7,5v4,-6,16,-12,13,-18r-6,2v3,-6,18,-13,9,-18r-20,18r11,-15v-5,-8,6,-9,-2,-13v4,-5,-2,-14,6,-16v-3,-4,-7,-7,-11,-2v3,-5,12,-9,7,-17v-5,1,-3,-2,-2,-5r-3,1v4,-4,10,-15,5,-20v-4,2,-5,0,-9,4r18,-20v-1,3,-5,7,-1,9r12,-12r-5,12r5,-4v-3,5,-9,8,-5,15r15,-13v-5,4,-7,8,0,11v-3,6,-17,11,-10,17r8,-6v2,12,-10,14,-8,22r8,-2v-4,2,-5,6,-4,10r4,-2v-3,7,-20,15,-11,22r9,-7r-2,5r8,-5v-3,6,-17,11,-10,18r8,-5v-6,6,-15,12,-6,20v8,-6,11,-18,24,-20r0,-4r-6,4v2,-6,17,-15,8,-19v1,2,8,2,9,-4r-5,2v2,-4,10,-9,4,-11v7,-11,18,-18,22,-31r-8,5r24,-30v-2,5,-9,11,-5,16r13,-12v-2,4,-8,7,-4,12r9,-8v4,5,11,9,5,15r8,-6r-18,26r7,-4v-12,10,-18,18,-17,23r6,-4v-7,9,-9,17,-17,24v6,7,-18,13,-11,22r4,-2r-21,26r8,-4v-3,6,-15,12,-11,17v3,-4,6,1,9,3v-2,2,-2,4,0,6r4,-2v-3,5,-11,9,-10,15v12,-1,16,-10,23,-16v-4,6,-11,9,-13,16r5,-2v-3,2,-2,11,4,9r9,-9v-4,7,-20,14,-11,21r15,-13v-3,5,-9,7,-9,14r3,-1v-3,5,-15,11,-7,16r15,-13v-5,5,-7,10,-2,17r5,-2r-1,6r5,-2v-6,7,2,8,-2,15v4,2,13,2,8,7r7,-2r-2,5r4,-1v-6,5,-6,9,0,14r6,-3v-2,5,-9,11,-3,15r8,-2v-3,2,-1,6,0,9r4,-2v-4,9,-19,11,-28,6r2,-8r-6,4v1,-3,3,-7,-3,-6r-11,11v6,-8,17,-17,5,-25v2,-4,3,-7,-4,-6r-3,4r2,-6r-4,2v1,-5,4,-10,-2,-11r-9,8r11,-13r-8,-8v4,-2,5,-5,4,-9v-8,2,-14,6,-18,13r9,-15v-4,-3,-11,-5,-8,-13v-3,1,-3,-1,-3,-4v-2,2,-5,2,-7,0v4,-6,12,-8,13,-18v-5,2,-10,2,-12,-2v-7,9,-17,15,-22,26r6,-2v-5,5,-10,10,-2,15r-2,0v7,10,-8,16,-4,22r11,-9v-4,6,-10,10,-11,18r6,-1v-4,4,-11,10,-8,18r8,-2v-2,3,-8,6,-4,11r-18,17v1,-4,10,-12,0,-11r0,-4r-11,9v3,-7,18,-13,11,-20","w":156,"k":{"z":120,"y":-8,"w":68,"v":-8,"u":-8,"t":88,"s":10,"r":99,"n":-10,"m":-8,"l":73,"k":69,"j":58,"i":67,"h":78,"g":31,"f":90,"d":46,"b":65,"Y":86,"W":85,"V":91,"T":82,"G":80,"F":75,"\"":15}},"l":{"d":"15,-247v6,-8,2,-14,3,-24r-3,1r24,-26r-8,13r10,-7v-3,5,-10,7,-10,15v10,1,11,-7,17,-11v-10,7,-13,12,-9,16r7,-3v-5,8,-3,14,-4,24r10,-9r-15,18v11,0,2,9,5,16r4,-1v-1,3,-6,6,-4,9v-1,-3,-3,-1,-5,0r7,8v-3,-1,-8,-7,-7,1v3,0,6,0,5,4r6,-2v-2,4,-8,7,-6,11r10,-7v-4,8,-24,16,-15,24v3,-2,7,-9,9,-2v-2,4,-12,7,-7,11r7,-2v-2,4,-6,7,-4,11r4,-2v-6,7,3,10,-5,15r5,-2v-9,5,-10,11,-5,17r7,-4v-2,5,-13,10,-9,15r5,-2r-2,6r4,-2v-5,7,-6,10,-5,18r5,-3r-2,7r4,-2v-6,7,-4,9,-6,22r4,-4v-5,6,-1,14,-4,19r6,-2v-3,3,-1,5,4,4r3,-5v4,17,13,1,19,-4v-2,3,-9,7,-2,9r9,-8v-2,4,-6,9,-1,12r9,-8v-1,3,-3,7,3,6r11,-11v-2,3,-5,4,-5,9r5,-2v-2,4,-7,8,-3,13r16,-15v-8,7,-4,15,-13,21v7,7,14,-9,21,-12v-1,3,-8,7,-4,10v-9,-5,-2,6,-6,9r4,-2v-3,1,-1,4,0,6v-7,-3,-15,11,-22,14v5,-4,4,-8,6,-11r-6,2v3,-5,16,-12,7,-16r-26,24v4,-6,15,-10,10,-19v-6,3,-15,20,-19,11v-4,3,-5,0,-7,-4r-9,6v3,-2,1,-4,0,-7v-9,1,-11,10,-19,9r4,-8r-4,2v3,-2,1,-4,0,-7v-8,8,-19,-3,-15,-15r-5,4v4,-2,5,-5,4,-9r-8,3v4,-7,22,-15,13,-22r-11,10v5,-6,9,-17,7,-23r-3,2r3,-13r-5,4v3,-5,9,-14,5,-19r-3,2v4,-2,4,-5,3,-9r-3,2v1,-5,4,-12,3,-15r-7,6r9,-12r-5,3v3,-5,13,-11,5,-16r-12,12v3,-7,21,-16,12,-22r-11,9v2,-4,7,-5,8,-11r-8,5v4,-7,22,-15,13,-22r-13,9v3,-5,9,-7,9,-14r-3,1v4,-1,4,-5,3,-11r-5,4v2,-5,13,-10,9,-15r-4,0v2,-3,8,-6,4,-9r-5,2v4,-9,-2,-15,1,-28r-3,2r3,-9","w":121},"m":{"d":"133,-214v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm11,-181v3,-6,15,-11,11,-18r4,3v-2,-4,0,-14,-6,-11r4,6v-14,-4,-5,-11,-9,-26v4,-7,19,-13,13,-20v-6,6,-11,7,-15,3r5,8v-9,-3,1,-10,-1,-15v1,4,5,-1,7,-2v-3,-3,-6,-9,-11,-5r2,3r-4,-2v5,-6,13,-12,2,-16r0,-4r-8,6v8,-6,11,-21,25,-15r11,-11v-2,4,-10,8,-6,11r7,-6v-1,3,-5,7,2,6r4,-4r-4,7r4,-1v-3,5,-1,8,6,7r7,-7v-3,6,-8,8,-9,16r3,-2r-1,4r7,-4v-5,14,-13,25,-24,34v10,8,11,-16,24,-15r-2,-4v2,4,5,-1,8,-2v-4,8,-12,12,-13,23r13,-4v-5,9,-11,13,-6,24v10,0,6,-6,15,-6v-4,6,-16,11,-9,19r13,-11v-3,5,-13,10,-10,14v6,1,7,-3,10,-5v-4,6,-12,9,-13,18v5,-4,9,-2,10,4v-2,4,-4,8,0,11r13,-11v2,11,-14,14,-13,22v10,-6,2,6,6,7v-1,2,-4,4,-2,6r6,-2v-2,4,-8,8,-4,12r7,-4r-1,7r5,-2v-3,6,-15,12,-7,17r5,-4r-3,6v14,-5,25,-15,25,-30r-9,7v3,-5,9,-6,9,-14r-7,5v4,-6,16,-12,13,-18v2,3,4,0,6,-2v-1,-2,-2,-5,-6,-4v4,6,-2,2,-7,10v6,-7,8,-12,9,-21r-9,8v4,-6,14,-12,13,-19r-8,2v2,1,5,-3,9,-13r-3,2v2,-4,11,-10,2,-11r10,-11v-5,0,-6,3,-9,5v3,-5,20,-15,4,-14r-5,5v3,-7,19,-15,10,-20r-12,11v6,-10,20,-12,18,-30r-11,10v4,-6,11,-9,13,-17r-8,5r23,-23r-4,7v9,-1,13,-8,19,-13r-8,11v7,-3,9,1,13,-4v-2,4,-7,8,-2,12r-3,-3v0,4,-1,10,5,8r7,-8r-5,8r7,-2v-1,4,-7,8,-3,11r5,-4v-2,4,-9,9,-5,12r3,-2v-2,6,-7,-3,-9,2v4,4,9,6,13,1v-2,4,-8,8,-6,11r8,-5v-5,6,-17,16,-6,24r-2,0v9,7,-7,11,-1,19r5,-3v-2,3,-5,6,-2,10v-4,1,-4,3,-3,7r3,-2v-1,4,-5,9,0,10v-4,1,-4,3,-3,7r3,-2r-3,7r5,-1v-3,5,-15,11,-11,16v5,-1,10,-2,13,-5v-3,5,-14,12,-11,16r7,-1r-3,10r5,-3r-7,9v11,10,-9,26,-17,33v7,9,15,-10,22,-14v4,5,-8,10,-2,14r6,-3v-3,5,-15,11,-11,16r7,-2v-1,3,-4,5,-2,8r8,-6v-3,6,-15,12,-11,17r7,-4v-1,5,-9,11,-5,15r5,-4v-2,4,-9,8,-5,11r5,-3v-4,8,-13,14,-7,20r11,-9r-15,20r2,-6r-9,4v4,-3,-2,-5,-4,-7r-7,2r3,-8r-5,4v1,-3,7,-6,3,-9r-9,7v3,-7,20,-15,11,-20r-5,3r2,-10r-6,3v2,-4,11,-9,7,-13r-5,4r2,-6r-7,6v4,-7,11,-11,14,-19v-2,2,-5,2,-7,0r2,-9r-6,4v7,-6,10,-11,7,-13v-5,2,-6,-1,-10,4v8,-8,8,-12,9,-23r-4,2v0,-6,7,-13,5,-16v-4,2,-3,-4,-7,0v2,-4,8,-7,6,-12v-13,7,-28,14,-25,34v-2,2,-5,3,-5,7r4,-2v-4,1,-5,6,-4,13r9,-7v-4,7,-19,15,-16,22v2,-3,4,-5,7,-2v-5,7,-16,12,-11,23r6,-4v-8,8,-8,13,-8,22r6,-4r-13,15r7,-4v-1,3,-6,6,-2,8v-4,-4,-9,7,-13,9v5,-1,6,-5,2,-11r-13,11v1,-4,6,-10,2,-13r-4,2r0,-8r-3,2r0,-7v-6,-1,-9,1,-11,4v3,-7,18,-14,11,-21v-7,3,-11,8,-15,13v7,-7,10,-12,8,-14v-4,4,-6,-2,-10,3v4,-7,23,-16,7,-19v1,-6,-5,-4,-1,-9r-4,0v2,-4,11,-8,5,-11v-11,2,-15,11,-22,17v6,-10,19,-12,17,-30v-17,6,-24,22,-37,32v1,8,8,-2,9,4v-3,1,-1,3,0,5r6,-4r-17,19v12,1,-3,8,2,11v6,-4,8,1,9,7r6,-5r-20,24v1,-4,7,-9,3,-13r-15,13v2,-4,6,-6,8,-11v-4,1,-6,0,-9,3v4,-2,4,-5,3,-9r-3,2r1,-6r-3,2r2,-9r-4,4v2,-5,6,-9,4,-15r-4,2v3,-4,5,-7,0,-10v3,-6,15,-13,7,-18r-7,5v6,-13,5,-20,15,-27v-5,-8,-10,2,-15,5v3,-5,15,-11,7,-16r-5,4r2,-12r-4,2v6,-12,0,-18,4,-38r-4,7r4,-13r-6,4v2,-4,8,-8,6,-13r-6,3r6,-11xm33,-205v3,10,10,1,15,-3v-3,-10,-10,-1,-15,3xm35,-129v2,4,4,9,9,5v-4,3,-5,8,-5,15r9,-5v-7,6,-9,10,-7,12r3,-1r-3,11v13,-3,18,-15,27,-22r-4,-26v-6,-1,-7,3,-10,5v-2,-11,14,-14,7,-20","w":201,"k":{"z":-9,"y":57,"r":-11,"T":138,"F":73,"\"":103}},"n":{"d":"41,-218v0,0,0,2,1,2v0,0,0,-2,-1,-2xm13,-155v9,-6,-1,-19,4,-28r-4,2v3,-2,1,-6,0,-9r-5,4v3,-6,14,-12,10,-17v-3,1,-7,3,-9,0v2,-4,10,-8,6,-11r-7,6v7,-7,10,-13,9,-17r-4,1v1,-3,6,-8,2,-10r-10,7v3,-7,18,-14,12,-20r-9,7v4,-7,21,-15,12,-22r-5,4r2,-8r-8,6v3,-6,11,-8,8,-17r-6,0r11,-13v-1,3,-4,5,-4,10v4,-10,10,2,15,-3r-3,-3v8,5,11,-6,16,-10v-5,7,-4,10,-2,17v10,1,11,-7,17,-11v-3,6,-22,16,-9,19v1,4,3,6,7,3v-6,4,-8,8,-4,13v5,-1,10,-2,13,-5v-3,6,-14,10,-9,18r9,-2v-3,5,-13,11,-5,15r9,-2v-3,6,-15,11,-8,17r16,-13v-4,6,-13,11,-12,19v7,1,9,-3,12,-6v-3,5,-14,14,0,13v-5,3,-1,10,0,15r5,-2r-5,7r9,-2v-3,5,-15,11,-9,15v7,1,9,-7,12,0v-3,4,-10,9,-3,13r13,-7v-3,4,-11,8,-6,14r7,-5v-3,6,-19,14,-7,17r0,5v3,-8,9,-14,17,-18v-5,7,-13,11,-15,20v13,-5,23,-14,28,-28r-4,2v4,-4,0,-13,0,-19r-8,4v9,-4,4,-10,6,-16r-6,1r12,-13r-8,-1v-2,-9,10,-13,6,-17r-4,2v-3,-5,11,-12,0,-13v4,-2,5,-5,4,-9r-8,3v2,-4,10,-8,6,-11r-8,6v4,-5,11,-9,4,-15r-7,6r22,-24v-9,-3,-2,-8,3,-12v8,6,15,-3,19,-7v-3,6,-14,10,-9,17r7,-6v-3,7,-18,14,-11,21r15,-13v-2,5,-13,11,-9,14r4,-1v-2,4,-5,8,-3,14r4,-2v-2,5,-13,10,-9,15r5,-3r-7,9r6,-2v-2,3,-8,6,-4,9v5,-4,3,4,8,0v-2,3,-8,6,-4,10r7,-6v-7,5,-9,10,-7,16r5,-1v-8,8,3,17,-7,22v2,4,6,-1,9,-2v-2,4,-11,9,-7,13r4,0v-3,5,-14,10,-6,14r7,-5v-2,4,-5,5,-5,11r7,-3v-6,7,-7,11,-3,14r7,-5v-4,8,-24,16,-15,24r13,-11v-3,5,-9,7,-9,14r5,-3v-2,4,-9,8,-5,11v7,-4,5,3,7,7v-5,-4,-6,1,-3,4r3,-2v-3,5,-12,10,-6,15r10,-8v-12,11,-17,19,-15,21v10,0,11,-8,17,-12v-3,5,-12,11,-6,16v-2,3,-11,8,-7,10r4,-1r-3,5r4,-2v-4,13,-14,19,-22,28v-1,-2,-3,-2,-5,0v1,-4,2,-7,-4,-6r-9,10v3,-5,14,-12,3,-13v3,-3,8,-6,2,-9r-9,7v4,-2,0,-9,0,-13r-4,2v4,-9,-5,-14,4,-18v-1,-4,-4,-2,-6,0r-1,-8r-17,15v4,-6,17,-15,15,-20v-6,-1,-8,2,-11,5v5,-5,10,-16,9,-20r-13,11v4,-7,22,-16,13,-22r-13,11r4,-6r-8,4v7,-7,10,-13,6,-19v-8,-1,-9,5,-13,8v3,-6,16,-14,7,-19v3,1,6,6,8,2v-1,-4,-4,-5,-9,-4v3,-8,-2,-6,-6,-3v5,-6,0,-19,-6,-17v3,-4,5,-8,2,-13r-7,4v6,-2,8,-8,4,-15v-3,1,-5,2,-3,6v-6,-2,0,-10,0,-15r-3,2v4,-3,-1,-9,-2,-13v-4,5,-17,9,-13,16v-3,-2,-5,0,-4,4r4,-2v-4,7,-12,9,-13,19v8,0,8,-6,13,-9v-7,5,-7,12,-9,20r4,-2v-5,6,7,12,-2,17v0,3,4,8,-2,7r2,-6v-6,2,-8,9,2,8v0,5,-7,9,-4,13v5,1,7,-2,9,-4v-5,6,-12,17,-11,22v10,0,1,-10,7,-13v-2,2,-2,6,-1,10r3,-2v1,6,-10,12,-7,16r4,-1r-4,13v7,-1,0,6,4,9v-4,1,-5,3,-4,7r7,-4v-1,3,-7,7,-3,10r3,-2v-2,4,-9,8,-5,11r5,-4v-6,4,-10,19,-18,15v1,-5,9,-11,5,-15r-14,7v6,-6,3,-9,-4,-12v3,1,8,6,7,-2v-6,1,-4,-3,-3,-6r-4,2v3,-5,16,-12,7,-16r-5,3v3,-5,16,-12,7,-16r-13,5v3,-5,14,-12,2,-13v7,-6,6,-13,6,-20r-4,2v5,-10,1,-36,4,-54xm103,-111v4,-6,22,-12,13,-18v3,-4,14,-9,6,-13v-5,8,-18,8,-17,22v-4,2,-6,5,-2,9xm120,-122v9,10,19,-10,26,-14r-4,-6xm131,-181v-2,9,5,3,9,2v-2,-5,-5,-7,-9,-2","w":165,"k":{"T":140,"\"":125}},"o":{"d":"46,-271v11,-7,16,-25,34,-19v-2,4,-5,7,3,6v4,-4,7,-16,13,-9v-8,5,8,6,2,10v9,1,10,-6,15,-9v-7,6,-10,10,-8,13v9,1,10,-6,15,-9v-2,4,-6,6,-7,11r3,-2v-1,4,-4,10,4,8r4,-4r-4,5v6,0,9,-1,13,-5v-5,7,-18,15,-9,24v3,-9,9,-1,12,-4v-3,5,-10,9,-9,15v6,-2,7,1,12,-4v-3,5,-11,9,-6,15r15,-13v-4,7,-19,14,-12,21v-2,-1,-4,-5,-7,-3v4,6,9,9,15,3v-5,6,-1,12,-8,16v11,5,-4,20,3,28r3,-2v-4,5,-13,12,-3,15r-4,7r7,-2v-5,4,-7,8,0,11v-3,4,-12,8,-6,13r6,-5v-2,10,-4,17,0,24v-4,1,-4,3,-3,7r7,-5v-3,5,-16,12,-6,14r0,4r8,-6v-5,8,-20,16,-17,25v9,-6,9,4,13,-3v-4,6,-10,10,-13,17r4,-1v-2,3,-8,6,-4,9r8,-4r-30,35r-2,-9v-10,2,-14,9,-20,15v1,-3,9,-9,0,-8r-4,4v1,-3,6,-6,2,-8r-13,10v1,-3,6,-8,2,-10v-10,4,-16,-3,-22,4v0,-11,-13,-14,-17,-5v5,-1,6,-6,2,-13r-6,3v5,-2,7,-11,-1,-9r-6,6v2,-3,6,-5,6,-10r-13,10v4,-7,16,-11,11,-20r-11,9v3,-6,10,-12,3,-17r-5,2v3,-2,0,-4,-2,-6v3,-3,9,-4,5,-9v-2,2,-4,2,-3,-2r-6,2v3,-6,11,-8,11,-17r-7,6r4,-9r-6,2v3,-5,8,-10,4,-17r-6,4v2,-5,13,-10,9,-15v-3,1,-5,3,-7,0v3,-5,9,-10,0,-11v5,-7,4,-20,4,-32v-8,-1,3,-3,0,-9r-10,6v4,-7,18,-14,15,-21v-3,0,-5,-1,-9,0v4,-1,5,-6,4,-13r-6,4v4,-5,11,-10,2,-13r-3,2v2,-4,11,-9,7,-13r-6,2r11,-13r-5,2v2,-3,6,-5,5,-11r-11,7v4,-7,20,-13,11,-22r21,-20v0,2,-4,7,1,6v7,-10,12,-14,21,-17v-5,9,-26,18,-17,26xm39,-159r9,-7v-3,5,-9,7,-9,14r9,-5v-3,6,-16,13,-13,18r7,-1r-3,13r3,-2v-7,8,0,11,0,22v-4,1,-4,3,-3,7r5,0v-4,4,-5,9,-3,17r3,-2v-1,3,-4,5,-2,8r4,-3r-4,10r6,-2v-5,1,-4,4,-2,8r6,-3r-2,6v5,-3,9,0,14,2r13,-13r-9,11v7,1,9,-3,12,-6r-4,6r13,-3v-3,1,-1,3,0,5v7,-5,15,-9,18,-18v6,1,3,-3,2,-6r2,2v2,-4,7,-8,3,-13r-5,4r4,-8r-6,4v2,-4,8,-7,6,-11r-4,2v4,-4,5,-8,4,-13r-6,3v2,-5,13,-11,9,-14r-3,1v1,-3,5,-7,1,-9r-5,4v4,-7,20,-14,11,-21r-15,13v4,-6,16,-12,13,-18v-9,-1,-10,6,-15,9v3,-6,10,-8,11,-16r-3,2r2,-13r-10,7v3,-5,11,-9,10,-15r-10,8v4,-7,18,-14,15,-21r-7,2v1,-4,7,-12,3,-14r-3,1v2,-5,17,-14,5,-14r0,-6r-5,9r2,-6r-10,8v17,-16,10,-18,4,-33r4,3r-4,-11v-6,5,-11,5,-13,0r-11,11r7,-9v-13,3,-22,3,-27,0v-5,9,-25,16,-19,26r-2,4r6,-2v-3,7,-14,13,-9,22r3,0v-1,5,-9,11,-5,15v6,1,6,-4,9,-6v-2,6,-11,14,-7,19r5,-2r-3,9r7,-4v-3,5,-8,8,-9,15","w":156,"k":{"r":27,"o":-34,"k":-9,"Y":70,"W":48,"V":41,"T":129,"P":36,"K":-17,"F":27,"\"":21}},"p":{"d":"37,-270v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm37,-270v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm74,-246r7,-9r-5,2v1,-1,1,-3,0,-5r-13,11v1,-3,6,-6,4,-10v-7,8,-12,6,-15,15v-11,-2,-12,13,-4,18v-3,4,-9,6,-6,13v4,0,4,-2,2,-5v8,2,-8,13,-2,15r10,-6v-4,7,-22,16,-13,22r9,-7v-5,7,-1,13,-4,22r8,-5v-5,6,-10,12,-4,20v5,-7,11,3,13,-6v2,3,4,1,7,0v-1,2,-1,4,0,6r8,-6v-3,1,-1,4,0,6r9,-6v-1,3,-6,8,-2,9r43,-40r-4,-6r-19,17v3,-7,20,-15,11,-22r-9,5v4,-5,8,-10,0,-13r-3,3v7,-4,9,-11,7,-21r-7,5v2,-3,5,-5,5,-10r-5,3v1,-3,7,-6,3,-9r-11,7v5,-8,20,-14,11,-24r-7,6r2,-4v-7,3,-13,2,-15,-2xm15,-64v1,-3,7,-7,3,-10r-3,2v2,-6,11,-13,3,-17r-5,4v6,-7,14,-16,7,-22v-3,3,-4,1,-5,-2v6,-3,5,-10,3,-17r-3,2v3,-3,2,-7,3,-12v-12,-2,11,-21,-3,-13v0,-9,5,-12,3,-17r-3,2v4,-12,3,-20,3,-32r-3,2v9,-10,-3,-28,9,-33v-3,-4,-6,-4,-9,0r3,-13r-3,2r2,-8r-4,2v4,-5,10,-10,2,-13v3,1,7,6,9,2v-2,-4,-5,-6,-9,-3v2,-4,9,-9,5,-12r-9,6v3,-5,12,-10,6,-15r-6,4v7,-9,13,-16,22,-18v-1,3,-9,8,-5,10v9,-1,12,-9,18,-14v-2,4,-6,6,-7,11v10,0,13,-8,20,-11r-4,7v4,0,5,2,4,6v7,-2,10,-8,15,-12v-2,4,-8,8,-6,12r9,-8r-3,6v7,1,13,-1,15,-6v2,10,7,5,13,4v-1,7,4,3,7,2v-3,6,-18,13,-9,18r20,-18v-2,4,-9,7,-6,13v16,-4,10,7,4,13r4,0v-3,4,-8,8,-2,11r13,-11v-2,4,-7,5,-6,11r4,-2r-2,13r6,-2r-2,7r7,-3v-2,4,-6,6,-7,11r3,-2v-1,3,-7,6,-3,9v3,-3,5,1,9,-3v-5,7,-14,11,-9,22r9,-6v-4,7,-18,13,-9,20v-2,4,-10,8,-4,11v4,0,4,-2,2,-5v11,5,-9,21,-4,26r8,-6v-4,6,-16,13,-13,19r9,-8r-29,30v2,-5,6,-7,7,-13v-5,6,-6,-1,-11,2r2,3v-2,-2,-10,-2,-8,4r4,-2v-1,4,-4,4,-7,2v2,-3,6,-5,5,-11v-8,-1,-9,4,-13,7r2,-3v-6,3,-13,5,-15,11r4,-9v-17,2,-21,17,-33,25v1,5,5,3,9,2v1,7,-10,12,-7,17v8,1,9,-4,13,-7v-3,5,-14,11,-10,16r4,-2v-1,4,-6,9,-2,12v-4,5,-16,11,-5,14v6,2,-3,-6,5,-4v3,4,-4,9,-4,13r8,-5r-20,22v1,-4,2,-8,-4,-7r-9,9v5,-7,12,-13,5,-19v-5,-1,-7,2,-9,4v3,-5,9,-8,5,-15r-3,2v4,-3,4,-8,3,-17","w":144,"k":{"z":62,"y":13,"s":85,"o":-9,"m":-16,"l":-16,"j":51,"g":60,"f":-18,"d":-15,"c":-22,"b":-18,"a":67,"T":132,".":12,"\"":7}},"q":{"d":"33,-270v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm83,-61v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm76,-127v4,-4,4,-10,13,-9r-2,-4v16,10,23,-15,35,-22v0,-6,-8,-12,-4,-19r-5,4v2,-4,11,-9,7,-13r-6,2v3,-4,12,-10,4,-13r-4,2v3,-5,8,-9,4,-15r-7,6v7,-6,9,-11,7,-13r-7,5v3,-6,13,-12,5,-17r-3,2v2,-4,9,-8,5,-13r22,-22v-1,3,-9,10,0,9r4,-3v-6,8,-12,12,-8,20r6,-6r-2,6r4,-2r-2,6r7,-2v-3,4,-11,10,-1,11r-2,9r3,-2v-2,5,-11,11,-7,15r4,-2v1,9,-5,21,-4,24r7,-3v-2,4,-11,9,-7,12v8,0,8,-6,13,-9v-3,6,-11,8,-11,17r5,-2v-8,9,2,17,-7,22v2,4,7,-1,10,-2v-3,5,-9,7,-10,15r6,0r-2,-3v2,1,4,1,6,0v-6,5,-7,9,-8,16r11,-9v-4,9,-25,18,-16,26r10,-10v-1,6,-9,13,-5,17r8,-4v-7,6,-10,11,-8,13r5,-3v-2,2,2,5,3,7v-4,5,-13,7,-8,15r18,-17v-4,6,-12,9,-13,18r6,-3r-2,6r9,-4r-23,26v1,-4,4,-8,1,-12r-22,19v1,-2,7,-7,0,-6v-4,5,-8,10,-13,4r-13,9v4,-2,-1,-6,-2,-9r-9,7r4,-5v-14,0,-22,4,-33,-4v3,0,7,0,7,-3v-7,1,-17,-2,-20,3v3,-3,3,-6,0,-9r-17,15v4,-6,11,-9,13,-17v-5,-1,-7,2,-9,4v3,-5,13,-11,5,-15r-11,9v1,-4,10,-9,6,-12v-13,3,-1,-2,-4,-12r-4,2r2,-6r-5,3v2,-4,4,-8,2,-13r-8,1v8,-7,7,-13,6,-22r-4,2r4,-9r-4,2r4,-8r-4,2v2,-4,11,-9,7,-13r-3,2r2,-6r-6,3v2,-2,5,-2,4,-6r-7,3v9,-8,8,-14,7,-25r-6,3v5,-6,11,-13,2,-16v1,-3,8,-7,4,-9r-6,3v2,-4,10,-8,6,-11r-7,6v2,-4,11,-9,7,-13r-4,2v7,-11,-4,-16,6,-21v-2,-2,-5,0,-8,0v2,-5,13,-11,9,-14r-5,1v5,-6,1,-12,4,-18r-8,4v4,-6,16,-13,13,-19r-5,4v5,-15,18,-23,27,-34r-3,8v11,-2,20,-7,26,-15v-2,4,-11,8,-6,13v4,-5,12,-1,15,-7v-1,4,-6,8,-2,11v5,-6,10,-13,16,-4r10,-9v-2,3,-8,6,-4,9r11,-9v-5,1,-6,5,-2,11v5,-2,6,0,11,-5v-3,5,-13,10,-5,14r16,-14v-5,4,-7,8,-7,13v6,-7,4,7,13,7r7,-7v-11,9,-16,24,-27,33v10,-9,13,-16,9,-21v-5,7,-10,13,-19,6r-11,11v2,-3,8,-6,4,-11r-9,7r3,-5r-10,3v1,-3,5,-7,1,-9r-14,13v3,-4,10,-9,3,-13v-14,8,-21,23,-33,33v2,3,4,8,7,4v-4,7,-20,14,-13,22r11,-9v-1,3,-8,9,-1,9v-4,1,-5,4,-4,8r7,-6v-2,5,-13,10,-9,15r6,-4r-2,6r5,-4v-3,6,-14,10,-9,18r15,-12v-5,8,-25,18,-9,22r-2,5r9,-7v-5,9,-23,17,-17,26r15,-13v-7,8,-1,12,-7,22r9,-8v-3,6,-15,12,-11,17r4,-2v-3,2,-1,4,1,6r4,-2v-3,6,-15,12,-11,17v8,0,8,-7,13,-10v-3,6,-9,8,-9,17r7,0v-3,1,-5,3,-4,7r6,-3v-7,6,-9,10,-7,12r7,-1v-2,4,-7,5,-6,11v11,2,13,-6,19,-10v-3,6,-11,8,-11,17v10,1,11,-8,17,-11v-1,5,-7,12,1,13v6,-4,9,-13,15,-3v3,-6,6,-6,9,0r21,-21v-5,-6,-15,-9,-21,-4v2,-4,12,-11,4,-13v4,-1,0,-4,0,-7r-7,6r3,-8r-9,6v8,-6,8,-20,-6,-19r4,-7xm103,-126v6,-8,22,-11,17,-23v-12,-1,-15,5,-26,14v-1,7,9,2,9,9","w":167,"k":{"r":-12,"T":138,"\"":71}},"r":{"d":"72,-277v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm35,-59v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm122,-54v-3,-1,-2,4,-2,6v4,-1,4,-3,2,-6xm107,-54v8,-9,5,-19,15,-26v-3,-4,-8,-2,-13,-1v12,-11,17,-19,15,-21v-6,-1,-6,4,-8,6v4,-2,0,-9,0,-13r-9,7v3,-6,16,-10,11,-18v-11,2,5,-9,-7,-9r-6,5v3,-6,18,-13,9,-18r-14,13r3,-6v-12,0,-22,3,-26,-5r-13,13r8,-9v-14,-1,-14,21,-26,16v1,10,6,4,11,0v-9,9,-12,13,-11,24r4,-2v-7,6,-2,7,-4,15r4,-2r-4,11v3,-1,6,-3,8,0v-6,6,-13,11,-8,22r4,-2r-2,6r6,-4v-2,4,-6,5,-6,11r6,-3v-5,5,-10,15,-15,5r-8,8v3,-5,9,-11,2,-15r-16,15v9,-8,5,-11,7,-23r-7,6v3,-7,19,-15,13,-22r-8,6r4,-8r-6,4v1,-6,7,-13,-2,-15v0,-4,8,-12,0,-11r-7,7v4,-7,19,-14,7,-20r-5,4r11,-13r-6,2v6,-5,13,-16,-1,-17v5,0,7,-6,7,-17r-4,2v6,-9,-2,-12,2,-22r-4,2v1,-3,8,-7,4,-9r-7,5v3,-5,8,-7,7,-15r-4,2v3,-4,14,-12,0,-11v2,-4,7,-5,6,-11r-6,2v6,-4,1,-11,4,-18r-4,1v8,-8,0,-11,4,-22r-9,8v14,-9,5,-25,13,-34v-3,-4,-6,2,-9,4v2,-5,14,-14,3,-15v1,-11,11,-14,15,-22v-2,4,-7,10,2,8v3,6,8,4,13,1v-4,-4,1,-6,4,-9v0,4,-4,9,0,11v5,-1,10,-6,16,-11r-6,9v9,-8,24,7,34,-1v8,6,26,-6,20,9v3,-3,5,-1,4,4r7,-6v-3,6,-18,13,-9,18v5,-3,9,-12,15,-7v-3,2,-1,4,0,7r9,-7v-4,8,-21,15,-15,24v2,-3,5,-5,6,0r14,-13v-9,5,-10,11,-5,17r9,-8v-5,6,-12,11,-5,19r4,-2v-2,5,-12,11,-8,14r8,-1r-6,11r3,-2v-3,4,-6,9,-3,15r7,-4v-3,6,-15,12,-11,17r6,-2v1,6,-8,13,-6,16r11,-9v-4,7,-19,15,-14,21r9,-8r-21,22v6,1,3,7,2,12r15,-3v-7,5,-3,19,-11,23v2,5,11,-4,9,5v6,-3,7,1,13,-3r-13,14v2,6,8,12,4,19r9,-6v-4,7,-15,14,-15,20r8,-1v-4,7,-6,11,-4,20r9,-7v-7,6,-9,11,-7,13r7,-6r-20,22v3,-5,2,-9,3,-15v-5,1,-7,0,-7,-5r-11,9r4,-7r-4,2v-6,-19,13,-23,21,-34r-4,-4xm46,-203r4,-2v-5,5,-9,16,2,17v-2,3,-7,3,-6,9r6,-4v-1,3,-8,7,-4,9r4,-1v-3,3,-5,6,0,9r7,0v-2,3,-2,6,0,9r18,-17r-3,6r7,-4r-4,6r6,-2v-3,2,-1,4,0,7r11,-7r-4,6v15,-3,20,-16,30,-24r-2,-12r-5,4v7,-7,5,-9,7,-22v-9,3,-6,-5,-6,-11v9,5,2,-8,10,-9v-2,-4,-7,1,-10,2v4,-7,19,-14,12,-21r-15,11v3,-5,13,-10,5,-14v4,-1,5,-4,4,-8v-9,4,-14,6,-22,13v1,-3,6,-6,4,-9v-4,5,-9,5,-15,2r-11,9v3,-4,6,-7,4,-13v-4,3,-20,4,-13,9v-5,-3,-19,7,-15,15v-7,-3,-9,3,-4,7r4,-1r-2,5r4,-2v-11,8,-6,14,-8,28xm26,-136v6,11,15,-8,22,-12v-6,-11,-15,8,-22,12","w":168,"k":{"w":8,"m":92,"d":25,"W":13,"V":13,"T":145,".":97,"\"":103}},"s":{"d":"15,-264r26,-29v-1,3,-6,8,-2,10r20,-18v-3,5,-9,7,-9,15v10,0,13,-7,20,-10r-3,8v9,-1,13,-8,18,-13r-8,9v8,1,15,-3,15,6v6,-5,9,-12,17,-11v-3,6,-18,12,-9,18r13,-11v-4,0,-5,5,-4,15r5,-2v-2,2,0,6,0,9r13,-11v-5,8,3,14,-5,19v7,6,5,-1,11,2v-2,4,-7,5,-6,11r4,-2r-2,2v5,1,7,4,4,9r3,-2v-1,5,-7,12,-3,15r6,-2v-8,11,-15,13,-25,20v2,-4,7,-5,6,-11r-11,4v7,-8,5,-9,0,-17r-7,6v4,-5,9,-9,5,-17r-4,2v8,-19,-13,-22,-22,-20v1,-3,6,-6,2,-8v-4,2,-8,4,-3,8v-3,-4,-7,1,-10,3v3,-5,9,-9,2,-13r-28,24v1,7,6,1,10,-1v-4,9,-22,18,-13,26r5,-4r-2,11r10,-6v-3,6,-17,12,-8,17r4,-2v-4,6,-8,12,-2,19r7,-4r-1,4r5,-2v-3,3,-5,6,0,9r13,-11v-1,3,-6,6,-4,9v5,-4,6,2,8,6v5,-12,14,1,18,-10v4,3,8,8,13,4v0,5,-9,15,2,13r11,-11v-2,3,-6,4,-6,9r4,-2v-3,2,-1,5,0,8r15,-11v-4,7,-20,14,-11,20r11,-9v-3,6,-11,13,0,15v-2,16,-16,21,-24,31v2,-1,3,-6,2,-13r-8,5v3,-4,13,-8,8,-13v-8,4,-9,-1,-15,6v4,-7,22,-16,13,-22r-13,11v2,-3,5,-5,2,-8r-11,10v2,-3,7,-7,3,-10r-10,8v0,-3,5,-8,1,-9r-11,7v3,-3,5,-7,0,-9r-9,6v4,-5,-2,-9,-9,-8v5,-1,1,-6,0,-9v-6,0,0,10,-6,5r-7,6v6,-7,-3,-5,-2,-13r-7,2v3,-5,13,-11,5,-15r-9,7r4,-7v-8,-1,-11,2,-13,6v6,-7,6,-8,3,-17r-3,2v1,-5,9,-11,5,-15r-4,2r0,-8r-7,6v3,-5,12,-9,7,-15v-5,0,-6,4,-9,6v14,-8,12,-18,4,-26v5,-5,9,-10,2,-15r-6,4v4,-6,16,-13,13,-19xm64,-59v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm20,-92v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm22,-111v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm140,-142v-2,5,-5,9,-5,16r5,-3v-1,4,-9,9,-5,13r9,-6v-4,6,-17,15,-15,20v6,-4,9,6,11,2v-3,6,-11,8,-11,17v6,-6,6,2,11,-4r-9,11r4,0v-7,7,-10,11,-8,13r12,-5v-4,7,-18,13,-15,20r7,-6v-5,4,-12,20,-15,10r-18,16v1,-3,12,-10,2,-9v-3,4,-5,7,-11,7v2,-1,0,-3,0,-5r-9,7v2,-2,0,-6,0,-9v-9,9,-22,-5,-25,7v-6,0,-5,-3,-3,-7r-8,2r4,-6v-8,6,-10,-9,-17,-3v4,-6,-2,-12,-9,-8r2,-9r-7,4v4,-5,10,-11,0,-13v2,-2,0,-7,0,-10r-4,3v2,-4,6,-6,5,-12r-7,6v2,-3,8,-6,4,-9v4,-1,4,-4,3,-8r-9,4v3,-6,15,-11,8,-17r-8,6r21,-24r-6,11r11,-4v-2,4,-10,9,-4,13r10,-7r-4,5r7,-1v-2,5,-13,9,-9,14v6,-3,8,1,13,-3v-2,4,-8,6,-7,13v5,-1,2,3,1,5r6,-4v-1,3,-8,7,-4,9v-3,-2,-9,3,-5,6v2,-3,5,-3,9,-2v-3,6,-1,11,7,8v-2,2,1,5,2,7r15,-11v-2,4,-6,7,-4,13v4,-6,16,-14,21,-5r24,-25v-8,-3,4,-10,-4,-13v2,2,5,6,7,2v-2,-7,-8,-1,-9,-7xm55,-279v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm50,-268v2,3,3,13,7,8v-10,-10,23,-15,11,-24","w":153,"k":{"Y":90,"T":134,"P":43,"\"":8}},"t":{"d":"52,-257v1,-3,4,-6,2,-9v-7,9,-13,5,-23,11v3,-3,5,-6,0,-9r-14,13v2,-5,13,-10,9,-15r-4,2r2,-4v-9,6,-13,-3,-16,4r1,-13v-4,1,-5,-1,-4,-7v-2,1,-4,6,-5,4r22,-21r-4,8v4,-6,10,3,15,0v-3,5,-13,10,-5,14v7,-5,12,-13,20,-17v-3,3,-1,5,4,4r7,-7r-4,6r9,-3r-1,4v9,-2,14,5,17,-4v1,7,10,4,12,0v-3,3,-1,5,4,4r7,-7v-1,3,-7,6,-3,9v4,-10,12,-1,16,-6v-4,3,1,8,2,12r11,-9v-2,3,-5,4,-5,9v6,0,7,-6,11,-8v-4,7,-20,14,-11,21r15,-13v-3,7,-16,14,-13,20r10,-9v-7,9,-14,15,-23,20v2,-5,4,-10,1,-15r-22,21v3,-5,11,-9,6,-15v-9,8,-21,17,-21,28r4,-2v-3,4,-16,13,-1,12v-2,2,-3,5,-3,8r12,-8v-3,6,-12,12,-12,17r4,-1v-4,5,-6,11,-1,16v-4,6,-21,13,-12,18r13,-12v-4,4,-5,7,-4,12r4,-1v-6,6,1,9,-4,14r6,-1v-2,3,-8,7,-6,10r10,-7v-3,5,-11,9,-10,15v-1,-3,-3,-1,-5,0v1,3,2,5,5,2v-1,6,-1,11,3,13r-6,-4r3,9r10,-7v-5,8,-18,15,-19,24r6,-4v-1,4,-8,11,2,9r7,-7v-6,3,-8,8,-6,15r4,-2v-3,6,-18,13,-9,19r13,-13v-7,6,-10,10,-8,13r8,-6v-7,7,-14,14,-4,13r6,-6v-5,8,-19,13,-13,26r9,-7v-3,5,-14,12,-11,16r5,-1r-14,16v2,-6,9,-11,5,-18r-13,11v2,-3,10,-9,0,-8r-5,6v3,-6,13,-12,5,-17r-9,8v2,-6,18,-13,9,-17r2,-3r-7,3v4,-5,9,-9,5,-16v3,2,5,0,4,-4v-6,-1,-7,0,-13,5v4,-6,16,-12,13,-18v-4,3,-5,1,-5,-4v1,-4,5,-9,1,-11r-3,2v1,-3,7,-6,3,-9v-6,0,-7,5,-11,7v6,-7,14,-13,10,-27v6,-5,7,-10,5,-12r-7,4v9,-8,-3,-11,0,-17v2,2,4,2,3,-3v-7,-3,3,-5,2,-11v-5,-1,-7,1,-9,3v4,-7,15,-12,15,-20v-4,2,-7,3,-6,-4r-3,2v-3,-7,5,-13,0,-18v3,2,5,6,7,1v-5,0,-5,-9,-9,-5v4,-1,4,-6,3,-13r-5,4v2,-4,9,-8,5,-11r-7,3v3,-5,12,-9,7,-16r-7,5v3,-6,10,-8,11,-16xm68,-271v3,8,8,2,13,-2r-1,-7","w":143,"k":{"w":58,"m":-9,"d":18,"T":138,".":-22}},"u":{"d":"111,-246v6,-2,7,-5,5,-9r-11,9v4,-7,22,-15,13,-22r-7,4r3,-9r-7,7v2,-6,11,-14,7,-18r-5,4r17,-19r-6,9v9,-5,11,9,16,-2r-1,8r7,-6v-6,4,-8,8,-6,13r8,-6v-7,9,-5,8,-8,23r8,-8v-6,6,-9,13,-4,22v-4,1,-5,4,-4,8r8,-6v-2,5,-13,10,-9,15r4,-2v-2,3,-8,6,-4,10v7,1,7,-5,11,-8v-12,11,-17,18,-15,21v7,1,7,-5,11,-8v-2,4,-8,7,-6,11r8,-3v-9,7,-3,11,-8,18v2,2,4,2,6,0v-2,4,-7,5,-6,11r4,-2v4,8,-9,14,-7,20v4,0,8,0,9,-3v-1,2,-5,6,0,5r6,-5v-3,6,-19,14,-8,18r4,-2v-4,4,-4,8,0,13v-3,4,-8,5,-9,11r9,-7v-5,9,-19,13,-17,26r13,-11v-2,5,-11,11,-7,14r7,-1r-1,5r9,-7v-3,5,-17,12,-8,16r8,-5v-2,4,-15,11,-9,14r7,-3v-9,9,-11,18,-20,26v3,3,7,3,10,0r-22,24r2,-6v-7,2,-11,9,-16,13v2,-4,6,-6,7,-11v-10,2,-15,10,-22,15v7,-6,10,-11,7,-13v-5,3,-7,0,-9,-4r-13,13v2,-3,8,-6,4,-11r-17,6v2,-3,2,-5,-3,-4r-6,5v5,-4,3,-7,-2,-9v2,-4,7,-8,-2,-7r-7,7v5,-5,4,-15,-6,-13r-3,4v0,-2,6,-8,0,-7r-6,5r8,-9r-8,4v2,-5,16,-13,6,-15r2,-4v-6,2,-13,3,-17,7v4,-5,12,-10,5,-16r-3,2v4,-9,25,-18,16,-26r-18,17v3,-6,15,-12,11,-17r-6,2v1,-4,8,-11,-1,-11r-8,7v4,-7,16,-11,11,-20r-3,0v3,-4,3,-9,0,-13v2,-6,13,-14,5,-19r-4,4v3,-2,3,-8,0,-17r-3,2r5,-16r-3,2v4,-5,0,-9,3,-15r-11,7v4,-7,18,-13,15,-20r-7,3v2,-2,0,-6,0,-9v3,2,6,6,5,-1v-4,-5,-7,0,-11,3v3,-6,10,-8,11,-16v-3,1,-5,1,-5,-2r3,-6r-7,4v3,-5,9,-7,9,-15r-7,4v4,-3,4,-5,3,-9r-7,3v2,-4,11,-9,7,-13r-3,2v5,-1,6,-5,2,-11r-8,4v3,-3,8,-4,8,-10r-8,4r21,-22r-4,11r7,-3v-2,2,-2,4,2,3r9,-9v-3,8,-18,16,-11,24r17,-15v-3,7,-16,16,-6,22v-1,4,-5,9,0,11r6,-3v-5,7,-14,13,-9,24r7,-4v-3,5,-12,10,-6,15r10,-8v-5,7,-15,15,-11,22v-5,0,-7,9,0,8r5,-5v-3,4,-10,10,-2,12v-1,5,-9,11,-5,15v7,0,8,-6,13,-9v-10,7,-14,12,-10,16r12,-9v-4,6,-16,13,-13,19r3,-2v-3,2,0,3,2,5r-2,0v5,7,-5,9,-2,15r4,-2v-2,4,-6,6,-5,12r11,-6v-4,7,-18,13,-15,20r7,-2v-3,6,-13,12,-5,17r9,-6v-2,4,-11,9,-7,13r3,-2v-3,2,-1,6,0,10r4,-2v-9,7,-2,9,-4,17r4,-3v-4,3,-5,6,-4,10r6,-2v-5,2,-6,5,-2,9v4,0,4,-2,2,-5v9,7,14,-2,20,-8v-2,4,-8,7,-6,12v5,-7,13,-8,16,0r10,-12v-2,5,-13,11,-5,15v9,-10,23,-16,29,-29r-9,7v4,-6,16,-13,13,-19r-4,2r2,-18r-5,4v2,-4,9,-9,5,-12r-5,2v2,-4,11,-9,7,-12r-4,1r2,-4r-5,3v1,-4,9,-10,5,-13v-5,0,-6,3,-9,5v3,-5,9,-7,9,-15v-6,0,-7,5,-11,7r19,-20r-11,-5v1,-4,7,-10,3,-13r-5,2v3,-6,15,-12,11,-17r-13,11v3,-6,11,-8,11,-17v-8,2,2,-7,-7,-5r-8,8v6,-7,14,-16,11,-21r-3,2r1,-6r-9,8v5,-8,13,-13,15,-24","w":152,"k":{"r":-14,"Y":38,"V":12,"T":141,"P":-9,"\"":-10}},"v":{"d":"81,-100v-2,0,-2,7,0,8r0,-8xm100,-240v4,-7,12,-10,11,-22r-8,5v6,-7,14,-14,6,-23v6,-5,11,-17,20,-10r7,-7v-2,4,-9,8,-5,11r13,-11v-3,5,-13,11,-4,14r4,-1v-6,10,-24,19,-22,29v3,-3,5,-1,4,4v4,-1,3,-4,1,-7v6,-5,10,-13,19,-13v-2,5,-9,-2,-6,7v-1,2,-6,5,-4,7r4,-1r-1,9r5,-4v-5,9,-15,14,-17,26v6,1,6,-4,8,-6r-2,6r6,-4v-12,15,-5,16,-15,24v3,4,6,-2,9,-4v-5,5,-8,11,-9,15v5,0,9,0,11,-3v-4,7,-20,14,-11,20v-2,2,-8,4,-4,7r7,-5v-6,8,-6,11,-13,18v5,-1,8,-2,13,-7v-4,7,-14,13,-13,20v6,1,7,-4,10,-6v-5,8,-19,16,-17,23v7,1,7,-5,11,-7v-5,5,-11,10,-7,20r5,-4v-4,7,-18,14,-11,22r11,-9v-4,7,-13,9,-13,20v4,-4,6,1,11,-5v-6,7,-15,15,-16,22r4,0v-5,4,-9,14,-2,16r5,-3v-4,6,-16,12,-13,18r8,-5v-6,7,-12,13,-20,16v-4,-5,1,-10,-4,-14r-13,7v2,-5,6,-10,-2,-11v1,-5,-2,-4,-6,-4r-3,4r5,-11r-3,2v4,-2,4,-8,3,-15v-3,2,-6,3,-3,7v-9,-1,4,-11,0,-17r-8,6v15,-9,6,-19,-2,-9v10,-12,7,-14,2,-22r-9,7v3,-6,22,-15,9,-18r0,-4r-5,4v2,-4,8,-9,0,-10v7,-10,-9,-14,-2,-26r-4,0v2,-4,11,-8,7,-12v-9,-1,-9,6,-14,9v4,-6,14,-12,13,-19v-7,6,-6,-8,-11,-3r1,-6r-5,4v4,-1,5,-5,4,-11r-4,2v2,-4,10,-9,4,-13r-13,11v3,-7,18,-15,9,-21v2,1,4,5,7,3v-2,-9,-8,-3,-13,0v1,-3,8,-7,4,-10r-7,6v3,-6,12,-10,7,-17r-13,11v3,-5,8,-7,9,-13r-7,6v5,-5,8,-11,5,-21r-10,10v3,-5,9,-7,9,-15r-6,4v3,-6,18,-13,9,-19r-9,6v6,-1,3,-8,2,-13v-8,0,-8,6,-13,9v1,-8,15,-7,9,-15r15,-18v-3,5,-9,9,-6,17v10,-2,15,-10,21,-16v-2,4,-12,10,-4,12r4,-2v-1,6,-8,15,2,15r-4,13r5,-2v-2,3,-1,9,-1,13r3,0v-1,4,-4,8,-2,11r8,-4v-4,5,-7,11,-4,19r6,-3v-4,6,-16,14,-2,16v-4,10,3,8,7,3r-11,13v5,4,10,8,15,2v-2,3,-5,5,-2,9v-4,1,-5,3,-4,7r8,-3v-2,5,-10,11,-6,16r4,-1r-2,7r5,-2v-7,10,6,16,0,22r6,-4v-2,5,-15,13,-3,13r1,6v6,-6,22,-8,17,-19r-11,10v6,-11,25,-19,16,-32v4,-4,14,-8,6,-13r-11,8r13,-15r-6,2v2,-4,12,-9,8,-13r-4,2v4,-2,5,-5,4,-9r-6,3v3,-5,9,-6,8,-15r-6,3v4,-8,22,-18,9,-23v3,-4,12,-8,6,-13v-6,6,-6,-2,-11,4","w":155,"k":{"W":19,"T":143,"K":27,"A":-26,"\"":-8}},"w":{"d":"107,-249v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm42,-107v3,-3,5,-7,0,-9r-9,7v3,-6,16,-14,6,-18r2,-8r-8,6v4,-8,22,-16,13,-23v-5,2,-9,11,-15,6v4,-6,16,-14,2,-16v2,-4,6,-8,2,-12r-7,6v3,-6,11,-8,11,-17v-9,1,-12,3,-19,10v3,-5,10,-7,10,-15r-10,7v3,-6,10,-8,11,-16r-5,1v1,-3,6,-7,4,-10r-12,9v7,-6,13,-14,15,-21r-7,4v8,-7,13,-14,2,-13r-10,9v5,-2,10,-17,-1,-13v3,-4,10,-9,3,-13r-7,6v2,-4,11,-9,7,-13r-7,4v2,-6,10,-14,4,-19r-4,2v3,-2,1,-4,0,-7r4,3v1,-12,-11,-9,-15,-1v1,-3,9,-8,3,-9r21,-21v-7,7,-10,13,-9,15v3,-3,6,-5,11,-2v-2,1,-2,3,0,5v3,-3,5,-7,9,-3v-4,3,5,7,0,13r5,-2v-1,3,-9,8,-1,7r7,-7v-3,5,-9,7,-9,15r5,-2r-2,7r4,-2r-4,10r6,-2v-2,3,-8,6,-4,9r10,-7v-6,8,-14,11,-13,22r7,-4r-2,15v5,-1,11,-2,13,-6v-4,7,-12,9,-13,19r8,-2r-2,5r5,-1v-3,6,-18,12,-9,18v2,-6,9,-3,13,-7v-2,5,-12,9,-7,14v-1,-3,-3,-3,-6,-1v1,5,9,3,11,0r-2,5r6,-4v-5,5,-11,11,-4,17r5,-4v-6,10,7,23,-3,15v-3,15,8,17,16,7v5,-5,13,-9,8,-18v-10,-1,-11,8,-17,11v6,-9,20,-16,21,-26r-4,2r2,-7r-7,5v4,-7,17,-14,14,-20r-7,4v1,-3,7,-7,3,-10r-10,8v4,-7,18,-16,16,-22r-6,1v2,-3,6,-4,6,-10r-7,3v3,-5,9,-7,9,-15r-6,2v3,-5,11,-9,10,-15r-4,2v4,-2,5,-5,4,-9r-4,2v2,-3,6,-6,2,-9r3,3r0,-11r-3,2v1,-4,7,-8,3,-11r-5,4r22,-28r-6,9v0,0,14,1,15,-4r-3,8r9,-2v-4,9,5,3,7,6r7,-4v-3,5,-9,7,-9,15v2,-1,5,-3,6,0r-4,13r6,-4v-3,7,-18,14,-12,20r19,-14v-3,5,-9,7,-9,14v6,0,7,-5,11,-7v-3,7,-14,14,-11,20r3,-2v-2,6,6,13,0,19v6,1,7,-4,10,-6v-6,5,-5,10,-6,15r4,0v-9,6,3,8,-2,15r7,-2v-2,5,-11,12,-1,13v-3,5,-9,10,0,11v0,3,0,5,3,4r6,-6v-4,7,-18,12,-13,22r22,-20v-4,9,-22,16,-13,26v-2,5,-6,9,-4,15v7,-11,19,-12,24,-22r-7,3r11,-13r-4,0v7,-7,10,-11,8,-13r-9,2v8,-6,3,-15,9,-22r-11,9v4,-8,19,-16,16,-24r-7,6v4,-8,16,-14,15,-23v-3,2,-7,4,-8,-1v5,1,17,-8,9,-13r-12,9v8,-6,3,-14,11,-18v-3,-2,-5,-2,-8,0v4,-6,16,-11,9,-19r-5,4v2,-4,5,-5,5,-11r-9,7v3,-6,16,-13,13,-18r-4,1v3,-9,9,-10,16,-14v-1,2,-7,6,0,5r10,-9v-3,6,-10,8,-10,17v2,3,7,-1,14,-8v-7,6,-9,10,-7,13r3,-1r-1,12r7,-5v-2,4,-11,9,-7,13r5,-4v-2,4,-11,9,-7,13r5,0v-3,6,-14,10,-9,17r9,-6v-4,6,-14,11,-9,20r-3,-1r0,9r7,-6v-3,5,-11,9,-10,15r8,-4v-3,6,-15,11,-8,17r8,-6v-3,6,-15,12,-11,17r3,-2r-1,6r4,-2v-8,7,-12,16,-4,20v-6,1,-8,6,-4,15r5,-4v-3,6,-16,13,-10,17v-2,2,-5,2,-3,5r8,-5r-20,22v3,1,6,2,3,5v-7,3,-10,-7,-7,2v11,2,14,-5,19,-9v-10,7,-14,13,-10,17r4,-2r-4,7r10,-5v-3,4,-8,7,-10,12r7,-5v-5,8,-20,16,-18,24r4,0v-3,6,-15,11,-8,17v3,-4,7,-8,10,-2v-6,5,-7,14,-17,15v3,-3,1,-5,-4,-4r-3,4v2,-5,8,-10,2,-13v-6,3,-10,6,-4,11v-5,-1,-7,-3,-4,-8v-5,2,-6,0,-11,4v2,-4,11,-9,7,-13r-5,4v4,-2,5,-5,4,-9r-4,1v2,-5,10,-12,4,-16v-2,2,-5,4,-9,2v0,-3,2,-7,0,-9r-6,1v-1,-6,10,-12,7,-16r-5,2v0,-3,8,-11,0,-10r-6,6v3,-7,20,-15,11,-20v-5,3,-10,7,-14,1v4,-9,19,-17,13,-26r-12,10r4,-6r-8,2v2,-4,12,-9,8,-13v-5,-1,-7,2,-9,4v3,-6,11,-8,11,-17r-6,2v3,-6,17,-12,8,-17r-15,13v4,-1,4,-6,3,-13r-7,4v6,-5,8,-11,2,-18v-10,11,-19,10,-22,29r7,-5v-2,3,-6,5,-5,11r9,-6v-4,6,-17,15,-15,20r6,-3v-4,6,-10,11,-6,20r9,-7v-7,9,-15,12,-12,24r9,-8v-4,6,-16,13,-13,19v5,1,7,-2,9,-4v-3,5,-12,9,-7,15r3,-2v-4,6,-13,12,-13,18r10,-1v-2,3,-6,4,-6,9r6,-4v-13,11,-9,23,-20,32v1,-10,-14,3,-17,-6r-2,2v3,-4,-4,-18,-9,-9v3,-6,4,-18,3,-23v-5,-1,-7,2,-9,4v4,-6,18,-15,9,-22r-7,5v1,-3,3,-5,0,-7v3,2,5,2,4,-3v-12,4,-5,-7,-4,-12r-6,4v6,-6,9,-10,6,-13xm87,-122v2,10,8,2,13,-2v-3,-8,-8,-2,-13,2xm122,-229v4,-6,18,-10,11,-18v-4,6,-20,11,-11,18xm122,-271v4,9,9,0,14,-4r-1,-4v-1,-3,-6,1,-13,8","w":241,"k":{"T":139,"A":-30,"\"":110}},"x":{"d":"113,-258v0,0,-2,0,-2,1v0,0,2,0,2,-1xm26,-57v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm22,-63v4,10,10,0,15,-4v-4,-9,-10,0,-15,4xm37,-246v2,5,5,7,9,2v-1,-4,-5,-3,-9,-2xm31,-257v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm118,-68v0,0,-2,0,-2,1v0,0,2,0,2,-1xm126,-80v-2,-1,-2,1,-2,3v2,1,2,-1,2,-3xm116,-262v-2,0,-2,0,-2,2v2,0,2,0,2,-2xm114,-277v4,-1,4,-4,2,-7xm81,-183v-4,4,-12,8,-5,13v5,-4,12,-7,5,-13xm52,-139v-2,-1,-2,1,-2,3v2,1,2,-1,2,-3xm37,-114v4,-7,22,-16,13,-22r-8,5r19,-21r-4,-1v2,-3,8,-5,4,-8r-4,2v9,-4,3,-18,10,-24v-4,-4,-7,2,-10,4v3,-5,9,-8,6,-15r-15,13v5,-5,7,-9,7,-18r-3,0v1,-4,5,-9,-2,-9r0,-10r-8,2v2,-2,5,-4,4,-9r-7,1r3,-14r-5,4v3,-4,5,-7,0,-10r-6,4v6,-4,1,-17,-5,-13v2,-3,6,-5,5,-11r-9,4v1,-4,10,-9,6,-11r-11,9v4,-7,18,-16,16,-22v-10,0,-12,8,-18,13v0,-2,6,-7,0,-6r-6,6v8,-6,13,-25,26,-15r6,-6r-4,8r9,-8v-5,6,-12,13,-4,19v4,-2,6,-9,12,-6v-4,5,-12,10,0,11v-2,4,-6,5,-6,11v7,-4,11,2,16,-5v-3,5,-10,9,-9,15r6,-2v-3,2,0,3,2,5r5,-3v-2,5,-13,11,-9,14v9,-3,10,7,5,13v7,1,9,-2,12,-5v-5,3,-9,12,0,14v3,-6,16,-7,13,-16v9,-6,12,-10,11,-13r-6,2v4,-6,17,-15,15,-20v-8,0,-8,6,-13,9v4,-7,12,-9,13,-19r-4,2v2,-5,10,-8,8,-14r-4,1v8,-9,16,-18,26,-22r-9,11r5,-2v-2,3,-6,7,2,6r3,-4r-1,6r5,-2r-4,7r8,-4v-6,7,-1,7,0,15v-7,5,-10,9,-8,11r6,-3r-13,14v7,-1,0,3,4,6r7,-6v-5,10,-22,15,-18,28r11,-9v-4,9,-26,19,-15,26r6,-4v-5,8,-21,16,-19,24r4,0v-4,4,-7,8,-2,13v-2,3,-9,6,-5,9r7,-2v-3,6,-15,12,-7,17r14,-13v-4,7,-14,13,-13,21v5,1,8,-1,10,-4v-4,2,0,9,0,13r11,-4v-10,8,-12,18,-19,26v4,5,7,-1,11,-4v-7,6,6,11,2,4v1,3,4,1,6,0v-2,4,-7,5,-6,11r13,-2r-2,4r6,-2v-3,6,-15,11,-8,17r15,-13v-1,2,-4,5,-2,7v-1,-3,-3,-1,-5,0v4,5,-7,8,-2,11v11,-1,-3,8,9,8r-3,14v9,1,9,-6,14,-9v-3,6,-9,8,-9,17r13,-4v-7,4,-11,17,-21,15v5,-8,-5,-9,-16,-13v9,5,13,-3,7,-8v-3,7,-5,-3,-9,2r2,-5r-7,1v3,-6,7,-12,-2,-13v2,-4,4,-8,0,-10v-8,0,-10,6,-15,10v4,-7,20,-14,11,-20r-11,10r9,-12v-3,-14,8,-12,0,-16v-3,-1,-3,1,-2,3v-3,-3,-6,-3,-9,0r4,-11v-2,1,-5,3,-6,0v3,-4,11,-9,4,-13v-4,4,-7,8,-9,0v-6,9,-26,17,-20,28r7,-5v-4,7,-18,13,-15,20r8,-4v-2,3,-6,4,-6,10r6,-4r-25,33v2,3,5,1,8,0v-7,14,-15,16,-24,26v2,-4,9,-8,5,-11v-7,5,-8,-9,-13,0v1,-4,4,-10,-3,-8r-11,11v4,-7,19,-15,16,-22r-11,10v3,-5,8,-8,9,-15r-3,2v7,-7,13,-14,15,-26r-6,1v6,-5,15,-17,15,-25r-6,2v3,-6,15,-12,11,-17","w":158,"k":{"T":131,"\"":22}},"y":{"d":"102,-260r7,-13r-4,0v2,-3,6,-4,6,-10r-6,4r19,-20v-3,5,-1,9,2,13r14,-13v-4,8,-23,16,-14,24v7,-7,13,-17,22,-17v-4,6,-16,11,-9,19r9,-7v-4,6,-14,9,-12,18v-6,9,-20,16,-22,26v8,-2,12,-8,17,-13v-2,2,-6,5,-2,7v-5,-4,-3,4,-3,4v-2,-4,-5,1,-8,2v0,5,7,0,6,5r-8,-3v-1,5,1,8,6,9v-2,2,-10,6,-2,5r7,-7v-4,6,-14,11,-13,19r6,-4v-2,4,-6,6,-7,11r5,-4v-4,7,-19,15,-16,22r3,-2r-2,6r8,-6v-14,10,-12,28,-24,37r5,-1v-2,4,-9,9,-5,13r3,0v-6,6,-12,12,-1,16r-2,6r9,-8r-29,32v7,7,15,-10,22,-13r-4,7r9,-7v-4,6,-14,11,-13,18v3,-1,6,-3,8,0r-4,24r4,-2v-9,7,-1,10,0,21r-19,18r7,-11v-8,-1,-9,4,-13,7v2,-3,6,-4,6,-9v-2,3,-4,5,-7,2v4,-7,12,-9,13,-19r-15,2r2,-5r-6,3v6,-5,10,-16,4,-22v2,1,6,6,7,2v-8,-5,-5,-17,-13,-15v2,-4,10,-8,8,-13r-8,4v4,-6,16,-12,13,-18r-5,2v3,-4,7,-9,1,-12v-3,1,-3,3,-1,6v-3,-4,-6,2,-9,4v10,-8,8,-16,9,-30r-6,2v3,-4,9,-10,6,-17v-4,4,-4,-3,-11,-1v10,-8,-5,-10,0,-17r-6,4v3,-6,16,-12,6,-17v12,-1,12,-19,24,-13v4,-8,20,-14,16,-24r-11,8r15,-17r-4,0v2,-4,7,-5,8,-11r-4,2v3,-6,15,-12,11,-17xm46,-211v-2,-1,-2,1,-2,3v2,1,2,-1,2,-3xm55,-218v-1,0,-1,1,-1,2v1,0,1,-1,1,-2xm67,-238v-7,7,-16,22,1,17v-7,6,-9,10,-7,13r6,-4v-7,8,-19,16,-19,26v1,-10,-4,-11,-9,-6v2,-3,6,-5,5,-11r-3,2r1,-6r-7,2v3,-5,12,-10,6,-15r-13,9r29,-31v-2,6,-11,13,-3,17xm15,-249v3,-5,12,-9,7,-15r-5,2r1,-6r-3,2r2,-11r-9,6v3,-5,9,-8,5,-15r-8,6r19,-21r-4,9v5,-1,7,-1,11,-4v-3,5,-9,9,-5,16r15,-13r-10,10v6,1,7,-3,10,-5v-3,6,-16,12,-6,17v7,1,5,-1,2,-4v9,-1,6,5,15,0v-4,8,-24,16,-15,24r13,-11v-2,4,-10,8,-8,13v9,2,10,-8,12,2r-28,29v3,-7,18,-16,9,-22r-13,11v5,-6,11,-13,0,-15r4,-7","k":{"W":26,"V":25,"T":147,"K":40,"A":-21,"\"":-8}},"z":{"d":"81,-249v2,-5,13,-10,9,-15v-13,3,-11,8,-23,9v1,-1,1,-3,0,-5r-12,7v3,-4,8,-7,4,-13r-17,15v6,-5,2,-8,-5,-9r-11,9v4,-4,6,-8,2,-13r-13,11v4,-9,19,-17,13,-26v-6,3,-14,19,-17,8v3,-4,10,-8,4,-12r-4,6r2,-9r-8,6r17,-21v-3,6,-7,12,-2,17r17,-13v-2,3,-8,6,-4,9r15,-8v-3,2,-1,5,0,8r15,-13v-2,4,-7,5,-8,11v9,-3,19,0,22,-9r-3,9r20,-3r0,3v6,-3,8,1,13,-3v-3,3,-6,6,2,5r2,-4v3,6,7,6,13,2v-1,2,-7,7,0,6r9,-9v-4,6,-17,14,-4,16v-1,3,-7,6,-3,9v6,0,6,-5,10,-7v-6,8,-14,18,-14,26r7,-4v-4,7,-15,14,-15,20v6,1,7,-3,10,-5v-4,9,-19,18,-17,26r6,-4v-5,7,-12,11,-15,20r4,-2v-7,6,-11,11,-8,13r8,-5v-5,10,-23,17,-19,29r6,-3v-5,8,-19,16,-17,24r8,-6v-12,11,-18,20,-16,26r6,-4v-5,7,-14,10,-15,21r4,1v-4,6,-18,11,-9,17v-4,1,-5,6,-4,13r6,-4v-3,6,-15,12,-11,17v10,1,10,-8,16,-11v-2,4,-11,9,-7,13r22,-17v-2,4,-12,11,-4,13v7,-9,15,1,19,-7r5,0v-4,0,-3,4,-2,7v7,-1,13,-11,15,-2v9,-6,12,5,17,-1v-3,4,-12,9,-4,12r11,-9r-5,7r5,-1v-1,4,-7,8,-3,11v3,-3,4,-1,5,2v-7,7,-12,15,-20,16v1,-2,4,-5,2,-7r-11,9v3,-4,7,-8,0,-9r-8,2v2,-1,5,-2,4,-6v-14,0,-15,12,-24,17v3,-5,10,-11,3,-15r-14,13v3,-5,12,-9,7,-15v-1,6,-21,9,-20,2r-11,11v3,-6,15,-12,7,-17r-22,19v1,-3,12,-10,2,-9v-4,-3,-20,-6,-24,-21v-1,1,-2,3,-2,0v3,-4,14,-7,9,-12v-5,-1,-6,3,-9,5v2,-9,12,-10,15,-18r-6,1v3,-5,9,-7,9,-14r-7,5v4,-5,11,-12,7,-17v4,-6,16,-12,13,-18r-7,6v4,-6,16,-11,13,-17r-4,2r24,-26v-3,-7,-7,-1,-11,2v3,-4,11,-8,6,-13v1,3,2,5,5,2r-2,-10r-9,8r17,-19r-6,2v4,-7,19,-13,15,-22r-8,6v9,-7,7,-16,16,-22v-4,-2,-2,-5,1,-8r-7,5r13,-14v-6,-1,-7,3,-10,5v7,-9,12,-7,12,-24","w":139,"k":{"z":72,"y":-10,"r":69,"g":98,"T":153,"I":79,"\"":-14}},"\u00a0":{"w":97}}});

if (window.addEventListener)
    window.addEventListener("load", initCaptcha, false);
else if (window.attachEvent)
    window.attachEvent("onload", initCaptcha);