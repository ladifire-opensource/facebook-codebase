__d("useCometConfirmationDialog", ["CometCardedDialogLoadingState.react", "React", "requireDeferred", "useCometDeferredDialog"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("requireDeferred")("CometConfirmationDialogImpl.react");

	function i() {
		return g.jsx(b("CometCardedDialogLoadingState.react"), {})
	}

	function a() {
		var a = g.useRef(null),
			c = b("useCometDeferredDialog")(h, i),
			d = c[0];
		c = g.useCallback(function (a, b, c) {
			c === void 0 && (c = function () {}), d(a, function (a) {
				a ? b() : c()
			})
		}, [d]);
		return [c, a]
	}
}), null);