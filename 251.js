if (self.CavalryLogger) { CavalryLogger.start_js(["haGgZ"]); }

__d("AdsCampaignSuggestedVideoPositionValidator",["errorCode","errorDesc","AdsAbstractValidator","AdsAPIAccountPaths","AdsAPICampaignPaths","AdsError","AdsErrorsCTAStrings","adsAccountGK","adsPlacementAPISpecReaderIsActiveFacebookPosition","expandPaths"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getDependencies=function(){return{account:b("expandPaths")([b("AdsAPIAccountPaths").CAPABILITIES]),campaign:b("expandPaths")([]),eligibilityInfo:null}};d.shouldValidate=function(a){a=a.eligibilityInfo;return!a?!1:b("adsPlacementAPISpecReaderIsActiveFacebookPosition")(a.spec,"suggested_video")};d.validate=function(a){var c=a.account;a=a.eligibilityInfo;if(!a)return[];var d=[];a=a.spec;a=b("adsPlacementAPISpecReaderIsActiveFacebookPosition")(a,"feed");!a&&!b("adsAccountGK")._(c,"22zZifJEL")&&d.push(new(b("AdsError"))(2490116,h._(function(a,b){return a._("\u0110\u1ec3 s\u1eed d\u1ee5ng B\u1ea3ng tin video tr\u00ean Facebook, h\u00e3y ch\u1ecdn v\u1ecb tr\u00ed qu\u1ea3ng c\u00e1o l\u00e0 B\u1ea3ng tin Facebook.")},{}),{cta:b("AdsErrorsCTAStrings").ADD_FACEBOOK_NEWS_FEED_CTA,level:b("AdsError").Level.WARN,path:b("AdsAPICampaignPaths").TARGETING.FACEBOOK_POSITIONS}));return d};return c}(b("AdsAbstractValidator"));c=new a();e.exports=c}),null);
__d("GeoPrivateBaseSwitch.react",["GeoPrivateAccessibleInput.react","GeoPrivateInteractiveFrame.react","GeoPrivateMakeComponent","GeoPrivateMultiElementLayoutContextReset.react","Locale","React","stylex","useBoolean","useGeoTheme"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("Locale").isRTL();function a(a){var c=a["data-testid"];c=a.describedBy;var d=a.display,e=a.htmlForTargetId,f=a.isDisabled;f=f===void 0?!1:f;var i=a.labelledBy,k=a.onChange;a=a.value;var m=b("useBoolean")(!1),o=m.value,p=m.setTrue,q=m.setFalse;m=b("useBoolean")(!1);var r=m.value,s=m.setTrue,t=m.setFalse;m=b("useBoolean")(!1);var u=m.value,v=m.setTrue;m=m.setFalse;var w=h.useCallback(function(a){return k(a.target.checked,a)},[k]),x=h.useCallback(function(){t(),q()},[q,t]);return h.jsxs("div",{className:(g||(g=b("stylex")))([j.root,d==="block"&&j.block]),children:[h.jsx(b("GeoPrivateAccessibleInput.react"),{"aria-checked":a,"aria-describedby":c,"aria-labelledby":i,checked:a,"data-testid":void 0,disabled:f,id:e,onBlur:m,onChange:w,onFocus:v,onMouseDown:p,onMouseLeave:x,onMouseOver:s,onMouseUp:q,role:"switch",type:"checkbox",value:a}),h.jsx(b("GeoPrivateMultiElementLayoutContextReset.react"),{children:h.jsx(b("GeoPrivateInteractiveFrame.react"),{context:"rounded",isDisabled:f,isFocused:u,isHovered:r,xstyle:l({value:a,isDisabled:f,isFocused:u||r,isActive:o}),children:h.jsx("div",{className:g(n({value:a,isDisabled:f}))})})})]})}var j={root:{display:"rxo4gu2c",position:"s7wjoji2",transform:"juldah21"},block:{display:"jrkk970q"}},k={root:{width:"hqtdqcfc",paddingTop:"tw7zjgjt",paddingEnd:"lgk6zq6e",paddingBottom:"bgjk5fyr",paddingStart:"c2az68ws",transitionProperty:"r2k1z9su"}};function l(a){var c=a.value,d=a.isDisabled,e=a.isFocused;a=a.isActive;var f=b("useGeoTheme")(),g=f.selectInteractiveColorPalette;f=f.selectTransition;return[c&&g({color:"selected",isFocused:e,isActive:a,isDisabled:d}),f({duration:"fast",timing:"soft"}),k.root]}var m={root:{width:"b606nk03",height:"akrhewu5",transitionProperty:"ewjpjwkg",transform:"gsm1y17v"},notChecked:{backgroundColor:"na6hpys5"},disabled:{backgroundColor:"e0fjl1zo"},checkedLTR:{transform:"gc9nzk2x"},checkedRTL:{transform:"snvvlpwb"}};function n(a){var c=a.value;a=a.isDisabled;var d=b("useGeoTheme")(),e=d.selectBorderRadius,f=d.selectInteractiveColorPalette;d=d.selectTransition;return[m.root,e({context:"rounded"}),d({duration:"fast",timing:"soft"}),c&&f({color:"primary"}),!c&&m.notChecked,a&&m.disabled,c&&(i?m.checkedRTL:m.checkedLTR)]}c=b("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateBaseSwitch",a);e.exports=c}),null);