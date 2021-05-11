__d("CometHeroInteractionContext", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("React");
	c = function () {};
	d = {
		consumeBootload: c,
		getRelayProfilerContext: function () {
			return {
				retainQuery: function () {},
				wrapPrepareQueryResource: function (a) {
					return a()
				}
			}
		},
		hold: function () {
			return ""
		},
		logCometHero: c,
		logMetadata: c,
		logPageletVC: c,
		logReactRender: c,
		pageletStack: [],
		registerPlaceholder: c,
		removePlaceholder: c,
		suspenseCallback: c,
		unhold: c
	};
	f.DEFAULT_CONTEXT_VALUE = d;
	e = a.createContext(d);
	f.Context = e
}), null);