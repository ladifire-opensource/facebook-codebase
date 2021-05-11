__d("withSearchCometTypeaheadTraceEndReasonDecorator", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.forwardRef(function (b, c) {
			var d = b.onPressEntry,
				e = b.traceProvider;
			b = babelHelpers.objectWithoutPropertiesLoose(b, ["onPressEntry", "traceProvider"]);
			var f = g.useCallback(function (a) {
				e && e.setEndReason("successful_user_action"), d && d(a)
			}, [d, e]);
			return g.jsx(a, babelHelpers["extends"]({}, b, {
				onPressEntry: f,
				ref: c,
				traceProvider: e
			}))
		})
	}
}), null);