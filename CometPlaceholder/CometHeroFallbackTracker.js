__d("CometHeroFallbackTracker.react", [
	"CometHeroInteractionContext", 
	"CometHeroInteractionIDContext",
	 "React", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.uuid,
			d = g.useContext(b("CometHeroInteractionContext").Context),
			e = g.useContext(b("CometHeroInteractionIDContext"));
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			if (e != null) {
				d.registerPlaceholder(e, c, d.pageletStack);
				return function () {
					d.removePlaceholder(e, c)
				}
			}
		}, [d, e, c]);
		return null
	}
}), null);