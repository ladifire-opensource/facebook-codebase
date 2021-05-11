__d("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.forwardRef(function (b, c) {
			var d = b.onChange,
				e = b.onPressEntry,
				f = b.shouldQueryStringUpdateFromSelectedEntryOnClick;
			f = f === void 0 ? !1 : f;
			b = babelHelpers.objectWithoutPropertiesLoose(b, ["onChange", "onPressEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick"]);
			var h = g.useCallback(function (a) {
				var b = a.getRawData();
				b = b.type;
				var c = a.getMetaData();
				c = c.markers;
				b = b === "recent" && c.has("entity") || c.has("direct_nav");
				d(b ? "" : a.getLabel());
				e && e(a)
			}, [d, e]);
			return g.jsx(a, babelHelpers["extends"]({}, b, {
				onChange: d,
				onPressEntry: h,
				ref: c,
				shouldQueryStringUpdateFromSelectedEntryOnClick: f
			}))
		})
	}
}), null);