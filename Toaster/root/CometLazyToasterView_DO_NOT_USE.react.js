__d("CometLazyToasterView_DO_NOT_USE.react", ["CometPlaceholder.react", 
	"React", "deferredLoadComponent", "requireDeferred", "useToasterStateManager"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");
	c = b("requireDeferred")("CometToasterView_DO_NOT_USE.react");
	var h = b("deferredLoadComponent")(c);

	function i(a) {
		return Object.keys(a).length > 0
	}

	function a(a) {
		var c = a.maxVisible;
		c = c === void 0 ? 1 : c;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["maxVisible"]);
		var d = b("useToasterStateManager")(),
			e = g.useState(function () {
				return i(d.getState())
			}),
			f = e[0],
			j = e[1];
		g.useEffect(function () {
			var a = d.addListener(function () {
				a.remove(), j(!0)
			});
			return a.remove
		}, [d]);
		return f ? g.jsx(b("CometPlaceholder.react"), {
			fallback: null,
			children: g.jsx(h, babelHelpers["extends"]({
				loadImmediately: !0,
				maxVisible: c
			}, a))
		}) : null
	}
}), null);