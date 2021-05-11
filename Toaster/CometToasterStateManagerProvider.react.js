__d("CometToasterStateManagerProvider.react", ["CometToasterStateManager", 
	"CometToasterStateManagerContext.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("CometToasterStateManager").getInstance();

	function a(a) {
		a = a.children;
		return g.jsx(b("CometToasterStateManagerContext.react").Provider, {
			value: h,
			children: a
		})
	}
}), null);