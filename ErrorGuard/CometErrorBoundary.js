__d("CometErrorBoundary.react", [
	"CometHeroInteractionContext", "ErrorBoundary.react", "ErrorMetadata", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d, e = g.useContext(b("CometHeroInteractionContext").Context);
		e = e.pageletStack;
		a = babelHelpers["extends"]({}, a);
		a.context = a.context || {};
		d = ((d = a.context) == null ? void 0 : d.metadata) || new(b("ErrorMetadata"))();
		e != null && d.addEntries(["COMET_INFRA", "INTERACTION_PAGELET_STACK", e.join(",")]);
		a.context.metadata = d;
		return g.jsx(b("ErrorBoundary.react"), babelHelpers["extends"]({}, a, {
			fallback: a.fallback,
			ref: c
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);