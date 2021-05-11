__d("useCometSearchTypeaheadBaseListViewStrategy", [
	"CometSearchTypeaheadBaseViewListStrategy.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.extraViewProps,
			d = a.nullstateContent,
			e = a.viewItemStrategyRenderer;
		a = a.viewListStrategyRenderer;
		var f = a === void 0 ? b("CometSearchTypeaheadBaseViewListStrategy.react") : a;
		return g.useCallback(function (a) {
			var b = a.queryString;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["queryString"]);
			return b.length === 0 && d != null ? d : g.jsx(f, babelHelpers["extends"]({}, a, {
				extraViewProps: c,
				queryString: b,
				viewItemStrategyRenderer: e
			}))
		}, [c, d, e])
	}
}), null);