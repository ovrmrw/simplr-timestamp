webpackJsonp([1,4],{"+brR":function(t,e,n){"use strict";function _(t){return i["ɵvid"](0,[(t()(),i["ɵted"](null,["\n    "])),(t()(),i["ɵeld"](0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,n){var _=!0,r=t.component;if("click"===e){_=!1!==r.localTimestamp()&&_}return _},null,null)),(t()(),i["ɵted"](null,["local timestamp"])),(t()(),i["ɵted"](null,["\n    "])),(t()(),i["ɵeld"](0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,n){var _=!0,r=t.component;if("click"===e){_=!1!==r.serverTimestamp()&&_}return _},null,null)),(t()(),i["ɵted"](null,["server timestamp"])),(t()(),i["ɵted"](null,["\n    "])),(t()(),i["ɵeld"](0,null,null,1,"button",[],null,[[null,"click"]],function(t,e,n){var _=!0,r=t.component;if("click"===e){_=!1!==r.bothTimestamp()&&_}return _},null,null)),(t()(),i["ɵted"](null,["both timestamp"])),(t()(),i["ɵted"](null,["\n    "])),(t()(),i["ɵeld"](0,null,null,3,"pre",[],null,null,null,null,null)),(t()(),i["ɵted"](null,["",""])),i["ɵpid"](65536,s.f,[i.ChangeDetectorRef]),i["ɵpid"](0,s.g,[]),(t()(),i["ɵted"](null,["\n  "]))],null,function(t,e){var n=e.component;t(e,11,0,i["ɵunv"](e,11,0,i["ɵnov"](e,13).transform(i["ɵunv"](e,11,0,i["ɵnov"](e,12).transform(n.state$)))))})}function r(t){return i["ɵvid"](0,[(t()(),i["ɵeld"](0,null,null,1,"app-timestamp-container",[],null,null,null,_,c)),i["ɵdid"](24576,null,0,o.a,[l.a,u.a],null,null)],null,null)}var i=n("3j3K"),o=n("6TXe"),s=n("2Je8"),l=n("NPiC"),u=n("KdyG");n.d(e,"b",function(){return c}),e.a=_;var a=[],c=i["ɵcrt"]({encapsulation:2,styles:a,data:{}});i["ɵccf"]("app-timestamp-container",o.a,r,{},{},[])},"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},0:function(t,e,n){t.exports=n("x35b")},"1A80":function(t,e,n){"use strict";function _(t){return o["ɵvid"](0,[(t()(),o["ɵeld"](0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),o["ɵted"](null,["\n  ","\n"])),(t()(),o["ɵted"](null,["\n"])),(t()(),o["ɵeld"](0,null,null,1,"app-timestamp-container",[],null,null,null,s.a,s.b)),o["ɵdid"](24576,null,0,l.a,[u.a,a.a],null,null)],null,function(t,e){t(e,1,0,e.component.title)})}function r(t){return o["ɵvid"](0,[(t()(),o["ɵeld"](0,null,null,1,"app-root",[],null,null,null,_,h)),o["ɵdid"](24576,null,0,c.a,[],null,null)],null,null)}var i=n("Ni5f"),o=n("3j3K"),s=n("+brR"),l=n("6TXe"),u=n("NPiC"),a=n("KdyG"),c=n("YWx4");n.d(e,"a",function(){return f});var p=[i.a],h=o["ɵcrt"]({encapsulation:0,styles:p,data:{}}),f=o["ɵccf"]("app-root",c.a,r,{},{},[])},"6TXe":function(t,e,n){"use strict";var _=n("WWmu"),r=n("KdyG");n.d(e,"a",function(){return i});var i=function(){function t(t,e){this.state$=t,this.service=e}return t.prototype.localTimestamp=function(){this.service.getLocalTimestamp()},t.prototype.serverTimestamp=function(){this.service.getServerTimestamp()},t.prototype.bothTimestamp=function(){this.service.getBothTimestamp()},t.ctorParameters=function(){return[{type:_.State},{type:r.a}]},t}()},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var _=function(){function t(){}return t}()},KdyG:function(t,e,n){"use strict";var _=n("Lak2"),r=(n.n(_),n("rCTf")),i=(n.n(r),n("+pb+")),o=(n.n(i),n("iod1")),s=(n.n(o),n("rpT9"));n.d(e,"a",function(){return c});var l=this&&this.__assign||Object.assign||function(t){for(var e,n=1,_=arguments.length;n<_;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},u=function(t){return function(e){return l({},e,{local:t})}},a=function(t){return function(e){return function(n){var _=e,r=t?e-n.local:n.timelag;return l({},n,{server:_,timelag:r})}}},c=function(){function t(t,e){this.simplr=t,this.nict=e}return t.prototype.getLocalTimestamp=function(){return this.simplr.dispatch("timestamp",this.nict.requestLocalTimestamp().map(u)).map(function(t){return t.action})},t.prototype.getServerTimestamp=function(t){return void 0===t&&(t=!1),this.simplr.dispatch("timestamp",this.nict.requestServerTimestamp().map(a(t))).map(function(t){return t.action})},t.prototype.getBothTimestamp=function(){return r.Observable.zip(this.getLocalTimestamp(),this.getServerTimestamp(!0))},t.ctorParameters=function(){return[{type:_.Simplr},{type:s.a}]},t}()},Ni5f:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var _=[""]},YWx4:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var _=function(){function t(){this.title="app works!"}return t}()},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return _});var _={production:!0}},kke6:function(t,e,n){"use strict";var _=n("3j3K"),r=n("Iksp"),i=n("2Je8"),o=n("Qbdm"),s=n("NVOs"),l=n("Fzro"),u=n("cPow"),a=n("uf2u"),c=n("BpW2"),p=(n.n(c),n("MjDH")),h=n("cnKp"),f=n("osFu"),d=n("rpT9"),m=n("KdyG"),b=n("1A80"),y=n("yk6K"),S=(n.n(y),n("lhFV")),g=n("oi6x"),I=n("2iB7"),E=n("NPiC"),T=n("Zcpd"),O=n("gpu+"),D=(n.n(O),n("ajpn"));n.n(D);n.d(e,"a",function(){return N});var R=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function _(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(_.prototype=n.prototype,new _)}}(),A=function(t){function e(e){return t.call(this,e,[b.a],[b.a])||this}return R(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_15",{get:function(){return null==this.__LOCALE_ID_15&&(this.__LOCALE_ID_15=_["ɵn"](this.parent.get(_.LOCALE_ID,null))),this.__LOCALE_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_16",{get:function(){return null==this.__NgLocalization_16&&(this.__NgLocalization_16=new i.a(this._LOCALE_ID_15)),this.__NgLocalization_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_17",{get:function(){return null==this.__Compiler_17&&(this.__Compiler_17=new _.Compiler),this.__Compiler_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_18",{get:function(){return null==this.__APP_ID_18&&(this.__APP_ID_18=_["ɵg"]()),this.__APP_ID_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_19",{get:function(){return null==this.__IterableDiffers_19&&(this.__IterableDiffers_19=_["ɵl"]()),this.__IterableDiffers_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_20",{get:function(){return null==this.__KeyValueDiffers_20&&(this.__KeyValueDiffers_20=_["ɵm"]()),this.__KeyValueDiffers_20},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_21",{get:function(){return null==this.__DomSanitizer_21&&(this.__DomSanitizer_21=new o.b(this.parent.get(o.c))),this.__DomSanitizer_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_22",{get:function(){return null==this.__Sanitizer_22&&(this.__Sanitizer_22=this._DomSanitizer_21),this.__Sanitizer_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_23",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_23&&(this.__HAMMER_GESTURE_CONFIG_23=new o.d),this.__HAMMER_GESTURE_CONFIG_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_24",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_24&&(this.__EVENT_MANAGER_PLUGINS_24=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_23)]),this.__EVENT_MANAGER_PLUGINS_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_25",{get:function(){return null==this.__EventManager_25&&(this.__EventManager_25=new o.h(this._EVENT_MANAGER_PLUGINS_24,this.parent.get(_.NgZone))),this.__EventManager_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomSharedStylesHost_26",{get:function(){return null==this.__ɵDomSharedStylesHost_26&&(this.__ɵDomSharedStylesHost_26=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomRendererFactory2_27",{get:function(){return null==this.__ɵDomRendererFactory2_27&&(this.__ɵDomRendererFactory2_27=new o.j(this._EventManager_25,this._ɵDomSharedStylesHost_26)),this.__ɵDomRendererFactory2_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RendererFactory2_28",{get:function(){return null==this.__RendererFactory2_28&&(this.__RendererFactory2_28=this._ɵDomRendererFactory2_27),this.__RendererFactory2_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵSharedStylesHost_29",{get:function(){return null==this.__ɵSharedStylesHost_29&&(this.__ɵSharedStylesHost_29=this._ɵDomSharedStylesHost_26),this.__ɵSharedStylesHost_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Testability_30",{get:function(){return null==this.__Testability_30&&(this.__Testability_30=new _.Testability(this.parent.get(_.NgZone))),this.__Testability_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Meta_31",{get:function(){return null==this.__Meta_31&&(this.__Meta_31=new o.k(this.parent.get(o.c))),this.__Meta_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_32",{get:function(){return null==this.__Title_32&&(this.__Title_32=new o.l(this.parent.get(o.c))),this.__Title_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_33",{get:function(){return null==this.__ɵi_33&&(this.__ɵi_33=new s.a),this.__ɵi_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_34",{get:function(){return null==this.__BrowserXhr_34&&(this.__BrowserXhr_34=new l.a),this.__BrowserXhr_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_35",{get:function(){return null==this.__ResponseOptions_35&&(this.__ResponseOptions_35=new l.b),this.__ResponseOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_36",{get:function(){return null==this.__XSRFStrategy_36&&(this.__XSRFStrategy_36=l.c()),this.__XSRFStrategy_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_37",{get:function(){return null==this.__XHRBackend_37&&(this.__XHRBackend_37=new l.d(this._BrowserXhr_34,this._ResponseOptions_35,this._XSRFStrategy_36)),this.__XHRBackend_37},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_38",{get:function(){return null==this.__RequestOptions_38&&(this.__RequestOptions_38=new l.e),this.__RequestOptions_38},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_39",{get:function(){return null==this.__Http_39&&(this.__Http_39=l.f(this._XHRBackend_37,this._RequestOptions_38)),this.__Http_39},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_REDUX_DEVTOOLS_EXTENSION_40",{get:function(){return null==this.__REDUX_DEVTOOLS_EXTENSION_40&&(this.__REDUX_DEVTOOLS_EXTENSION_40=a.a()),this.__REDUX_DEVTOOLS_EXTENSION_40},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DevtoolsExtension_41",{get:function(){return null==this.__DevtoolsExtension_41&&(this.__DevtoolsExtension_41=new p.a(this._REDUX_DEVTOOLS_EXTENSION_40)),this.__DevtoolsExtension_41},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DevtoolsDispatcher_42",{get:function(){return null==this.__DevtoolsDispatcher_42&&(this.__DevtoolsDispatcher_42=new h.a),this.__DevtoolsDispatcher_42},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Dispatcher_43",{get:function(){return null==this.__Dispatcher_43&&(this.__Dispatcher_43=new f.a),this.__Dispatcher_43},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_INITIAL_REDUCER_45",{get:function(){return null==this.__INITIAL_REDUCER_45&&(this.__INITIAL_REDUCER_45=u.a(this.__INITIAL_REDUCER_44)),this.__INITIAL_REDUCER_45},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Reducer_46",{get:function(){return null==this.__Reducer_46&&(this.__Reducer_46=a.b(this._DevtoolsDispatcher_42,this._INITIAL_REDUCER_45)),this.__Reducer_46},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_INITIAL_STATE_48",{get:function(){return null==this.__INITIAL_STATE_48&&(this.__INITIAL_STATE_48=u.b(this.__INITIAL_STATE_47,this._INITIAL_REDUCER_45)),this.__INITIAL_STATE_48},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_STORE_DEVTOOLS_CONFIG_50",{get:function(){return null==this.__STORE_DEVTOOLS_CONFIG_50&&(this.__STORE_DEVTOOLS_CONFIG_50=a.c(this._INITIAL_OPTIONS_49)),this.__STORE_DEVTOOLS_CONFIG_50},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_StoreDevtools_51",{get:function(){return null==this.__StoreDevtools_51&&(this.__StoreDevtools_51=new h.b(this._DevtoolsDispatcher_42,this._Dispatcher_43,this._Reducer_46,this._DevtoolsExtension_41,this._INITIAL_STATE_48,this._STORE_DEVTOOLS_CONFIG_50)),this.__StoreDevtools_51},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_State_52",{get:function(){return null==this.__State_52&&(this.__State_52=a.d(this._StoreDevtools_51)),this.__State_52},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Store_53",{get:function(){return null==this.__Store_53&&(this.__Store_53=u.c(this._Dispatcher_43,this._Reducer_46,this._State_52)),this.__Store_53},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Adapter_54",{get:function(){return null==this.__Adapter_54&&(this.__Adapter_54=y.createAdapterForNgrxStore(this._Store_53)),this.__Adapter_54},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Simplr_55",{get:function(){return null==this.__Simplr_55&&(this.__Simplr_55=y.createSimplr(this._Adapter_54)),this.__Simplr_55},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NictService_56",{get:function(){return null==this.__NictService_56&&(this.__NictService_56=new d.a(this._Http_39)),this.__NictService_56},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_TimestampService_57",{get:function(){return null==this.__TimestampService_57&&(this.__TimestampService_57=new m.a(this._Simplr_55,this._NictService_56)),this.__TimestampService_57},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[_["ɵo"],o.n(this.parent.get(o.o,null),this.parent.get(_.NgProbeToken,null))],this._ApplicationInitStatus_3=new _.ApplicationInitStatus(this._APP_INITIALIZER_2),this._ɵf_4=new _["ɵf"](this.parent.get(_.NgZone),this.parent.get(_["ɵConsole"]),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new _.ApplicationModule(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new s.b,this._FormsModule_9=new s.c,this._HttpModule_10=new l.g,this._StoreModule_11=new u.d,this._StoreDevtoolsModule_12=new a.e,this._SimplrModule_13=new c.SimplrModule,this._AppModule_14=new r.a,this.__INITIAL_REDUCER_44=S.a,this.__INITIAL_STATE_47={timestamp:{local:0,server:0,timelag:0}},this._INITIAL_OPTIONS_49={},this._AppModule_14},e.prototype.getInternal=function(t,e){return t===i.b?this._CommonModule_0:t===_.ErrorHandler?this._ErrorHandler_1:t===_.APP_INITIALIZER?this._APP_INITIALIZER_2:t===_.ApplicationInitStatus?this._ApplicationInitStatus_3:t===_["ɵf"]?this._ɵf_4:t===_.ApplicationRef?this._ApplicationRef_5:t===_.ApplicationModule?this._ApplicationModule_6:t===o.p?this._BrowserModule_7:t===s.b?this._ɵba_8:t===s.c?this._FormsModule_9:t===l.g?this._HttpModule_10:t===u.d?this._StoreModule_11:t===a.e?this._StoreDevtoolsModule_12:t===c.SimplrModule?this._SimplrModule_13:t===r.a?this._AppModule_14:t===_.LOCALE_ID?this._LOCALE_ID_15:t===i.c?this._NgLocalization_16:t===_.Compiler?this._Compiler_17:t===_.APP_ID?this._APP_ID_18:t===_.IterableDiffers?this._IterableDiffers_19:t===_.KeyValueDiffers?this._KeyValueDiffers_20:t===o.q?this._DomSanitizer_21:t===_.Sanitizer?this._Sanitizer_22:t===o.r?this._HAMMER_GESTURE_CONFIG_23:t===o.s?this._EVENT_MANAGER_PLUGINS_24:t===o.h?this._EventManager_25:t===o.i?this._ɵDomSharedStylesHost_26:t===o.j?this._ɵDomRendererFactory2_27:t===_.RendererFactory2?this._RendererFactory2_28:t===o.t?this._ɵSharedStylesHost_29:t===_.Testability?this._Testability_30:t===o.k?this._Meta_31:t===o.l?this._Title_32:t===s.a?this._ɵi_33:t===l.a?this._BrowserXhr_34:t===l.h?this._ResponseOptions_35:t===l.i?this._XSRFStrategy_36:t===l.d?this._XHRBackend_37:t===l.j?this._RequestOptions_38:t===l.k?this._Http_39:t===p.b?this._REDUX_DEVTOOLS_EXTENSION_40:t===p.a?this._DevtoolsExtension_41:t===h.a?this._DevtoolsDispatcher_42:t===f.a?this._Dispatcher_43:t===u.e?this.__INITIAL_REDUCER_44:t===u.f?this._INITIAL_REDUCER_45:t===g.a?this._Reducer_46:t===u.g?this.__INITIAL_STATE_47:t===u.h?this._INITIAL_STATE_48:t===I.a?this._INITIAL_OPTIONS_49:t===I.b?this._STORE_DEVTOOLS_CONFIG_50:t===h.b?this._StoreDevtools_51:t===E.a?this._State_52:t===T.a?this._Store_53:t===O.Adapter?this._Adapter_54:t===D.Simplr?this._Simplr_55:t===d.a?this._NictService_56:t===m.a?this._TimestampService_57:e},e.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_26&&this._ɵDomSharedStylesHost_26.ngOnDestroy()},e}(_["ɵNgModuleInjector"]),N=new _.NgModuleFactory(A,r.a)},lhFV:function(t,e,n){"use strict";function _(t,e){return l(t,e)}var r=n("WWmu"),i=n("Lak2");n.n(i);e.a=_;var o=new i.Wrapper,s=o.mergeReducersIntoWrappedReducers({timestamp:null}),l=n.i(r.combineReducers)(s)},rpT9:function(t,e,n){"use strict";var _=n("Fzro"),r=n("rCTf"),i=(n.n(r),n("1APj")),o=(n.n(i),n("+pb+"));n.n(o);n.d(e,"a",function(){return s});var s=function(){function t(t){this.http=t}return t.prototype.requestLocalTimestamp=function(){return r.Observable.of((new Date).getTime())},t.prototype.requestServerTimestamp=function(){return this.http.get("https://ntp-a1.nict.go.jp/cgi-bin/json").map(function(t){return t.json()}).map(function(t){return 1e3*t.st})},t.ctorParameters=function(){return[{type:_.k}]},t}()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var _=n("3j3K"),r=n("kZql"),i=n("Qbdm"),o=n("kke6");r.a.production&&n.i(_.enableProdMode)(),n.i(i.a)().bootstrapModuleFactory(o.a)}},[0]);