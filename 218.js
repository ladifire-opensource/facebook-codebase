if (self.CavalryLogger) { CavalryLogger.start_js(["hOqzU"]); }

__d("FluxHooks",["FluxContainerSubscriptions","React","shallowEqual","useSubscriptionValue"],(function(a,b,c,d,e,f){"use strict";d=b("React");var g=d.useCallback,h=d.useEffect,i=d.useRef,j=d.useState;function a(a,c){var d=g(function(d){var e=c(a);return d!=null&&b("shallowEqual")(d,e)?d:e},[a,c]),e=g(function(b){var c=a.addListener(b);return function(){return c.remove()}},[a]);return b("useSubscriptionValue")({getCurrentValue:d,subscribe:e})}function c(a,c,d){var e=g(function(c){var d=a(c);return c!=null&&b("shallowEqual")(c,d)?c:d},d),f=g(function(a){if(c.length===0)return function(){};var d=new(b("FluxContainerSubscriptions"))("useCalculateState");d.setStores(c);d.addListener(a);return function(){return d.reset()}},c);d=j(function(){return e()});var k=d[0],l=d[1];d=function(){l(e)};var m=i(d);m.current=d;var n=j(function(){return e}),o=n[0];n=n[1];o!==e&&(n(function(){return e}),d());h(function(){var a=!1,b=function(){a||m.current()},c=f(b);m.current();return function(){a=!0,c()}},[m,f]);return[k,l]}e.exports={useFluxStore:a,useCalculateState:c}}),null);