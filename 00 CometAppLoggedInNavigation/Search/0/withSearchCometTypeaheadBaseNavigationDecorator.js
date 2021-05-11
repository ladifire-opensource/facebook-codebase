__d("withSearchCometTypeaheadBaseNavigationDecorator", ["React", "useCometSearchTypeaheadBaseInputRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.forwardRef(function (c, d) {
			var e = c.onPressEntry,
				f = c.onSelectFreeformQuery;
			c = babelHelpers.objectWithoutPropertiesLoose(c, ["onPressEntry", "onSelectFreeformQuery"]);
			d = b("useCometSearchTypeaheadBaseInputRefs")(d);
			var h = d.composedRef,
				i = d.inputRef;
			d = g.useCallback(function (a) {
				i.current && i.current.blur(), e && e(a)
			}, [i, e]);
			var j = g.useCallback(function (a) {
				i.current && i.current.blur(), f && f(a)
			}, [i, f]);
			return g.jsx(a, babelHelpers["extends"]({}, c, {
				onPressEntry: d,
				onSelectFreeformQuery: j,
				ref: h
			}))
		})
	}
}), null);