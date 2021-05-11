__d("CometHeroInteractionContextPassthrough.react", ["CometHeroInteractionContext", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children;
		a = a.clear;
		var d = g.useContext(b("CometHeroInteractionContext").Context);
		return g.jsx(b("CometHeroInteractionContext").Context.Provider, {
			value: a === !1 ? d : b("CometHeroInteractionContext").DEFAULT_CONTEXT_VALUE,
			children: c
		})
	}
}), null);