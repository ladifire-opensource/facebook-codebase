__d("useCometLazyDialog", ["CometDialogContext", "CometSuspendedDialogImpl.react", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react");

	function a(a, c) {
		var d = h.useRef(null),
			e = h.useContext(b("CometDialogContext")),
			f = h.useCallback(function(d, f) {
				var g = b("lazyLoadComponent")(a);
				e(b("CometSuspendedDialogImpl.react"), {
					dialog: g,
					dialogProps: d,
					fallback: c
				}, f)
			}, [e, a, c]),
			g = h.useCallback(function() {
				a.preload()
			}, [a]);
		return [f, d, g]
	}
}), null);