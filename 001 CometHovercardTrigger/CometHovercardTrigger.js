__d("CometHovercardTrigger.react", ["React", 
	"relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react", 
	"useBaseHovercardTrigger"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.popoverEntryPoint,
			d = a.popoverOtherProps,
			e = a.popoverProps;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["popoverEntryPoint", "popoverOtherProps", "popoverProps"]);
		a = b("useBaseHovercardTrigger")(a);
		var f = a[0],
			h = a[1];
		a = g.useMemo(function () {
			return d != null ? babelHelpers["extends"]({}, d, {
				onClose: h
			}) : {
				onClose: h
			}
		}, [h, d]);
		return f(g.jsx(b("relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react"), {
			entryPoint: c,
			entryPointParams: e,
			props: a
		}))
	}
}), null);