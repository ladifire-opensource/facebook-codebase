__d("useCometSearchTypeaheadBaseDataSourceFetch", ["React", "recoverableViolation",
 "useCometSearchTypeaheadBaseDataSourceFetchResolver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = g.useState(null),
			d = c[0],
			e = c[1];
		c = b("useCometSearchTypeaheadBaseDataSourceFetchResolver")(a, d);
		a = c[0].isLoading;
		var f = g.useCallback(function (a, b) {
			b === void 0 && (b = "all"), e({
				requestParams: a,
				source: b
			})
		}, []);
		c = g.useCallback(function (a) {
			if (d == null) {
				b("recoverableViolation")("Refetch cannot be called with undefined `fetchParams`", "search");
				return
			}
			var c = d.requestParams,
				e = c.loggingEventTrace;
			c = babelHelpers.objectWithoutPropertiesLoose(c, ["loggingEventTrace"]);
			e = babelHelpers["extends"]({
				loggingEventTrace: babelHelpers["extends"]({}, e, {
					sequenceID: String(Date.now())
				})
			}, c);
			f(e, a)
		}, [f, d]);
		return [{
			isLoading: a,
			source: (a = d == null ? void 0 : d.source) != null ? a : "all"
		}, f, c]
	}
}), null);