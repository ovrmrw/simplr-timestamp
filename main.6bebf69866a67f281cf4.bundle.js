webpackJsonp([1,4],{"+brR":function(t,e,n){"use strict";function r(t){return _["ɵvid"](0,[(t()(),_["ɵted"](null,["\n    "])),(t()(),_["ɵeld"](0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,n){var r=!0,i=t.component;if("click"===e){r=!1!==i.localTimestamp()&&r}return r},null,null)),(t()(),_["ɵted"](null,["local timestamp"])),(t()(),_["ɵted"](null,["\n    "])),(t()(),_["ɵeld"](0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,n){var r=!0,i=t.component;if("click"===e){r=!1!==i.serverTimestamp()&&r}return r},null,null)),(t()(),_["ɵted"](null,["server timestamp"])),(t()(),_["ɵted"](null,["\n    "])),(t()(),_["ɵeld"](0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,n){var r=!0,i=t.component;if("click"===e){r=!1!==i.bothTimestamp()&&r}return r},null,null)),(t()(),_["ɵted"](null,["both timestamp"])),(t()(),_["ɵted"](null,["\n    "])),(t()(),_["ɵeld"](0,null,null,3,"pre",[],null,null,null,null,null)),(t()(),_["ɵted"](null,["",""])),_["ɵpid"](65536,s.f,[_.ChangeDetectorRef]),_["ɵpid"](0,s.g,[]),(t()(),_["ɵted"](null,["\n  "]))],null,function(t,e){var n=e.component;t(e,11,0,_["ɵunv"](e,11,0,_["ɵnov"](e,13).transform(_["ɵunv"](e,11,0,_["ɵnov"](e,12).transform(n.state$)))))})}function i(t){return _["ɵvid"](0,[(t()(),_["ɵeld"](0,null,null,1,"app-timestamp-container",[],null,null,null,r,c)),_["ɵdid"](24576,null,0,o.a,[l.a,u.a],null,null)],null,null)}var _=n("3j3K"),o=n("6TXe"),s=n("2Je8"),l=n("NPiC"),u=n("KdyG");n.d(e,"b",function(){return c}),e.a=r;var a=[],c=_["ɵcrt"]({encapsulation:2,styles:a,data:{}});_["ɵccf"]("app-timestamp-container",o.a,i,{},{},[])},"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},0:function(t,e,n){t.exports=n("x35b")},"1A80":function(t,e,n){"use strict";function r(t){return o["ɵvid"](0,[(t()(),o["ɵeld"](0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),o["ɵted"](null,["\n  ","\n"])),(t()(),o["ɵted"](null,["\n"])),(t()(),o["ɵeld"](0,null,null,1,"app-timestamp-container",[],null,null,null,s.a,s.b)),o["ɵdid"](24576,null,0,l.a,[u.a,a.a],null,null)],null,function(t,e){t(e,1,0,e.component.title)})}function i(t){return o["ɵvid"](0,[(t()(),o["ɵeld"](0,null,null,1,"app-root",[],null,null,null,r,h)),o["ɵdid"](24576,null,0,c.a,[],null,null)],null,null)}var _=n("Ni5f"),o=n("3j3K"),s=n("+brR"),l=n("6TXe"),u=n("NPiC"),a=n("KdyG"),c=n("YWx4");n.d(e,"a",function(){return f});var p=[_.a],h=o["ɵcrt"]({encapsulation:0,styles:p,data:{}}),f=o["ɵccf"]("app-root",c.a,i,{},{},[])},"6TXe":function(t,e,n){"use strict";var r=n("WWmu"),i=n("KdyG");n.d(e,"a",function(){return _});var _=function(){function t(t,e){this.state$=t,this.service=e}return t.prototype.localTimestamp=function(){this.service.getLocalTimestamp()},t.prototype.serverTimestamp=function(){this.service.getServerTimestamp()},t.prototype.bothTimestamp=function(){var t=this;this.service.getLocalTimestamp().then(function(){return t.service.getServerTimestamp(!0)})},t.ctorParameters=function(){return[{type:r.State},{type:i.a}]},t}()},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t}()},KdyG:function(t,e,n){"use strict";var r=n("Lak2"),i=(n.n(r),n("rpT9"));n.d(e,"a",function(){return u});var _=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,_){function o(t){try{l(r.next(t))}catch(t){_(t)}}function s(t){try{l(r.throw(t))}catch(t){_(t)}}function l(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}l((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,_&&(o=_[2&n[0]?"return":n[0]?"throw":"next"])&&!(o=o.call(_,n[1])).done)return o;switch(_=0,o&&(n=[0,o.value]),n[0]){case 0:case 1:o=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,_=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){s.label=n[1];break}if(6===n[0]&&s.label<o[1]){s.label=o[1],o=n;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(n);break}o[2]&&s.ops.pop(),s.trys.pop();continue}n=e.call(t,s)}catch(t){n=[6,t],_=0}finally{i=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,_,o,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return{next:n(0),throw:n(1),return:n(2)}},s=function(t){return{local:(new Date).getTime()}},l=function(t){return function(e){return function(n){return{server:e,timelag:t?e-n.local:n.timelag}}}},u=function(){function t(t,e){this.simplr=t,this.nictService=e}return t.prototype.getLocalTimestamp=function(){return _(this,void 0,void 0,function(){var t;return o(this,function(e){switch(e.label){case 0:return[4,this.simplr.dispatch("timestamp",s).toPromise()];case 1:return t=e.sent(),[2,t.action]}})})},t.prototype.getServerTimestamp=function(t){return void 0===t&&(t=!1),_(this,void 0,void 0,function(){var e;return o(this,function(n){switch(n.label){case 0:return[4,this.simplr.dispatch("timestamp",this.nictService.requestServerTimestamp().map(l(t))).toPromise()];case 1:return e=n.sent(),[2,e.action]}})})},t.ctorParameters=function(){return[{type:r.Simplr},{type:i.a}]},t}()},Ni5f:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=[""]},YWx4:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.title="app works!"}return t}()},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},kke6:function(t,e,n){"use strict";var r=n("3j3K"),i=n("Iksp"),_=n("2Je8"),o=n("Qbdm"),s=n("NVOs"),l=n("Fzro"),u=n("cPow"),a=n("uf2u"),c=n("MjDH"),p=n("cnKp"),h=n("osFu"),f=n("4K63"),d=(n.n(f),n("ajpn")),b=(n.n(d),n("rpT9")),m=n("KdyG"),y=n("1A80"),S=n("lhFV"),g=n("oi6x"),I=n("2iB7"),E=n("NPiC"),T=n("Zcpd"),O=n("gpu+");n.n(O);n.d(e,"a",function(){return R});var D=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=function(t){function e(e){return t.call(this,e,[y.a],[y.a])||this}return D(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_14",{get:function(){return null==this.__LOCALE_ID_14&&(this.__LOCALE_ID_14=r["ɵn"](this.parent.get(r.LOCALE_ID,null))),this.__LOCALE_ID_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_15",{get:function(){return null==this.__NgLocalization_15&&(this.__NgLocalization_15=new _.a(this._LOCALE_ID_14)),this.__NgLocalization_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_16",{get:function(){return null==this.__Compiler_16&&(this.__Compiler_16=new r.Compiler),this.__Compiler_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_17",{get:function(){return null==this.__APP_ID_17&&(this.__APP_ID_17=r["ɵg"]()),this.__APP_ID_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_18",{get:function(){return null==this.__IterableDiffers_18&&(this.__IterableDiffers_18=r["ɵl"]()),this.__IterableDiffers_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_19",{get:function(){return null==this.__KeyValueDiffers_19&&(this.__KeyValueDiffers_19=r["ɵm"]()),this.__KeyValueDiffers_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_20",{get:function(){return null==this.__DomSanitizer_20&&(this.__DomSanitizer_20=new o.b(this.parent.get(o.c))),this.__DomSanitizer_20},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_21",{get:function(){return null==this.__Sanitizer_21&&(this.__Sanitizer_21=this._DomSanitizer_20),this.__Sanitizer_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_22",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_22&&(this.__HAMMER_GESTURE_CONFIG_22=new o.d),this.__HAMMER_GESTURE_CONFIG_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_23",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_23&&(this.__EVENT_MANAGER_PLUGINS_23=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_22)]),this.__EVENT_MANAGER_PLUGINS_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_24",{get:function(){return null==this.__EventManager_24&&(this.__EventManager_24=new o.h(this._EVENT_MANAGER_PLUGINS_23,this.parent.get(r.NgZone))),this.__EventManager_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomSharedStylesHost_25",{get:function(){return null==this.__ɵDomSharedStylesHost_25&&(this.__ɵDomSharedStylesHost_25=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomRendererFactory2_26",{get:function(){return null==this.__ɵDomRendererFactory2_26&&(this.__ɵDomRendererFactory2_26=new o.j(this._EventManager_24,this._ɵDomSharedStylesHost_25)),this.__ɵDomRendererFactory2_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RendererFactory2_27",{get:function(){return null==this.__RendererFactory2_27&&(this.__RendererFactory2_27=this._ɵDomRendererFactory2_26),this.__RendererFactory2_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵSharedStylesHost_28",{get:function(){return null==this.__ɵSharedStylesHost_28&&(this.__ɵSharedStylesHost_28=this._ɵDomSharedStylesHost_25),this.__ɵSharedStylesHost_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Testability_29",{get:function(){return null==this.__Testability_29&&(this.__Testability_29=new r.Testability(this.parent.get(r.NgZone))),this.__Testability_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Meta_30",{get:function(){return null==this.__Meta_30&&(this.__Meta_30=new o.k(this.parent.get(o.c))),this.__Meta_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_31",{get:function(){return null==this.__Title_31&&(this.__Title_31=new o.l(this.parent.get(o.c))),this.__Title_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_32",{get:function(){return null==this.__ɵi_32&&(this.__ɵi_32=new s.a),this.__ɵi_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_33",{get:function(){return null==this.__BrowserXhr_33&&(this.__BrowserXhr_33=new l.a),this.__BrowserXhr_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_34",{get:function(){return null==this.__ResponseOptions_34&&(this.__ResponseOptions_34=new l.b),this.__ResponseOptions_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_35",{get:function(){return null==this.__XSRFStrategy_35&&(this.__XSRFStrategy_35=l.c()),this.__XSRFStrategy_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_36",{get:function(){return null==this.__XHRBackend_36&&(this.__XHRBackend_36=new l.d(this._BrowserXhr_33,this._ResponseOptions_34,this._XSRFStrategy_35)),this.__XHRBackend_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_37",{get:function(){return null==this.__RequestOptions_37&&(this.__RequestOptions_37=new l.e),this.__RequestOptions_37},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_38",{get:function(){return null==this.__Http_38&&(this.__Http_38=l.f(this._XHRBackend_36,this._RequestOptions_37)),this.__Http_38},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_REDUX_DEVTOOLS_EXTENSION_39",{get:function(){return null==this.__REDUX_DEVTOOLS_EXTENSION_39&&(this.__REDUX_DEVTOOLS_EXTENSION_39=a.a()),this.__REDUX_DEVTOOLS_EXTENSION_39},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DevtoolsExtension_40",{get:function(){return null==this.__DevtoolsExtension_40&&(this.__DevtoolsExtension_40=new c.a(this._REDUX_DEVTOOLS_EXTENSION_39)),this.__DevtoolsExtension_40},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DevtoolsDispatcher_41",{get:function(){return null==this.__DevtoolsDispatcher_41&&(this.__DevtoolsDispatcher_41=new p.a),this.__DevtoolsDispatcher_41},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Dispatcher_42",{get:function(){return null==this.__Dispatcher_42&&(this.__Dispatcher_42=new h.a),this.__Dispatcher_42},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_INITIAL_REDUCER_44",{get:function(){return null==this.__INITIAL_REDUCER_44&&(this.__INITIAL_REDUCER_44=u.a(this.__INITIAL_REDUCER_43)),this.__INITIAL_REDUCER_44},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Reducer_45",{get:function(){return null==this.__Reducer_45&&(this.__Reducer_45=a.b(this._DevtoolsDispatcher_41,this._INITIAL_REDUCER_44)),this.__Reducer_45},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_INITIAL_STATE_47",{get:function(){return null==this.__INITIAL_STATE_47&&(this.__INITIAL_STATE_47=u.b(this.__INITIAL_STATE_46,this._INITIAL_REDUCER_44)),this.__INITIAL_STATE_47},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_STORE_DEVTOOLS_CONFIG_49",{get:function(){return null==this.__STORE_DEVTOOLS_CONFIG_49&&(this.__STORE_DEVTOOLS_CONFIG_49=a.c(this._INITIAL_OPTIONS_48)),this.__STORE_DEVTOOLS_CONFIG_49},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_StoreDevtools_50",{get:function(){return null==this.__StoreDevtools_50&&(this.__StoreDevtools_50=new p.b(this._DevtoolsDispatcher_41,this._Dispatcher_42,this._Reducer_45,this._DevtoolsExtension_40,this._INITIAL_STATE_47,this._STORE_DEVTOOLS_CONFIG_49)),this.__StoreDevtools_50},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_State_51",{get:function(){return null==this.__State_51&&(this.__State_51=a.d(this._StoreDevtools_50)),this.__State_51},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Store_52",{get:function(){return null==this.__Store_52&&(this.__Store_52=u.c(this._Dispatcher_42,this._Reducer_45,this._State_51)),this.__Store_52},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Adapter_53",{get:function(){return null==this.__Adapter_53&&(this.__Adapter_53=new f.AdapterForNgrxStore(this._Store_52)),this.__Adapter_53},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Simplr_54",{get:function(){return null==this.__Simplr_54&&(this.__Simplr_54=new d.Simplr(this._Adapter_53)),this.__Simplr_54},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NictService_55",{get:function(){return null==this.__NictService_55&&(this.__NictService_55=new b.a(this._Http_38)),this.__NictService_55},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_TimestampService_56",{get:function(){return null==this.__TimestampService_56&&(this.__TimestampService_56=new m.a(this._Simplr_54,this._NictService_55)),this.__TimestampService_56},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new _.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[r["ɵo"],o.n(this.parent.get(o.o,null),this.parent.get(r.NgProbeToken,null))],this._ApplicationInitStatus_3=new r.ApplicationInitStatus(this._APP_INITIALIZER_2),this._ɵf_4=new r["ɵf"](this.parent.get(r.NgZone),this.parent.get(r["ɵConsole"]),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new r.ApplicationModule(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new s.b,this._FormsModule_9=new s.c,this._HttpModule_10=new l.g,this._StoreModule_11=new u.d,this._StoreDevtoolsModule_12=new a.e,this._AppModule_13=new i.a,this.__INITIAL_REDUCER_43=S.a,this.__INITIAL_STATE_46={timestamp:{local:0,server:0,timelag:0}},this._INITIAL_OPTIONS_48={},this._AppModule_13},e.prototype.getInternal=function(t,e){return t===_.b?this._CommonModule_0:t===r.ErrorHandler?this._ErrorHandler_1:t===r.APP_INITIALIZER?this._APP_INITIALIZER_2:t===r.ApplicationInitStatus?this._ApplicationInitStatus_3:t===r["ɵf"]?this._ɵf_4:t===r.ApplicationRef?this._ApplicationRef_5:t===r.ApplicationModule?this._ApplicationModule_6:t===o.p?this._BrowserModule_7:t===s.b?this._ɵba_8:t===s.c?this._FormsModule_9:t===l.g?this._HttpModule_10:t===u.d?this._StoreModule_11:t===a.e?this._StoreDevtoolsModule_12:t===i.a?this._AppModule_13:t===r.LOCALE_ID?this._LOCALE_ID_14:t===_.c?this._NgLocalization_15:t===r.Compiler?this._Compiler_16:t===r.APP_ID?this._APP_ID_17:t===r.IterableDiffers?this._IterableDiffers_18:t===r.KeyValueDiffers?this._KeyValueDiffers_19:t===o.q?this._DomSanitizer_20:t===r.Sanitizer?this._Sanitizer_21:t===o.r?this._HAMMER_GESTURE_CONFIG_22:t===o.s?this._EVENT_MANAGER_PLUGINS_23:t===o.h?this._EventManager_24:t===o.i?this._ɵDomSharedStylesHost_25:t===o.j?this._ɵDomRendererFactory2_26:t===r.RendererFactory2?this._RendererFactory2_27:t===o.t?this._ɵSharedStylesHost_28:t===r.Testability?this._Testability_29:t===o.k?this._Meta_30:t===o.l?this._Title_31:t===s.a?this._ɵi_32:t===l.a?this._BrowserXhr_33:t===l.h?this._ResponseOptions_34:t===l.i?this._XSRFStrategy_35:t===l.d?this._XHRBackend_36:t===l.j?this._RequestOptions_37:t===l.k?this._Http_38:t===c.b?this._REDUX_DEVTOOLS_EXTENSION_39:t===c.a?this._DevtoolsExtension_40:t===p.a?this._DevtoolsDispatcher_41:t===h.a?this._Dispatcher_42:t===u.e?this.__INITIAL_REDUCER_43:t===u.f?this._INITIAL_REDUCER_44:t===g.a?this._Reducer_45:t===u.g?this.__INITIAL_STATE_46:t===u.h?this._INITIAL_STATE_47:t===I.a?this._INITIAL_OPTIONS_48:t===I.b?this._STORE_DEVTOOLS_CONFIG_49:t===p.b?this._StoreDevtools_50:t===E.a?this._State_51:t===T.a?this._Store_52:t===O.Adapter?this._Adapter_53:t===d.Simplr?this._Simplr_54:t===b.a?this._NictService_55:t===m.a?this._TimestampService_56:e},e.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_25&&this._ɵDomSharedStylesHost_25.ngOnDestroy()},e}(r["ɵNgModuleInjector"]),R=new r.NgModuleFactory(v,i.a)},lhFV:function(t,e,n){"use strict";function r(t,e){return l(t,e)}var i=n("WWmu"),_=n("Lak2"),o=(n.n(_),n("yuCB"));e.a=r;var s=new _.Wrapper,l=n.i(i.combineReducers)({timestamp:s.wrapReducerForSimplr("timestamp",o.a)})},rpT9:function(t,e,n){"use strict";var r=n("Fzro");n.d(e,"a",function(){return i});var i=function(){function t(t){this.http=t}return t.prototype.requestServerTimestamp=function(){return this.http.get("https://ntp-a1.nict.go.jp/cgi-bin/json").map(function(t){return t.json()}).map(function(t){return 1e3*t.st})},t.ctorParameters=function(){return[{type:r.k}]},t}()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3j3K"),i=n("kZql"),_=n("Qbdm"),o=n("kke6");i.a.production&&n.i(r.enableProdMode)(),n.i(_.a)().bootstrapModuleFactory(o.a)},yuCB:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){return e.type,t}}},[0]);