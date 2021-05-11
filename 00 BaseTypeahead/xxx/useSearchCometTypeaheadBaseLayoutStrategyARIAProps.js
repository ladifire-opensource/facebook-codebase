__d("useSearchCometTypeaheadBaseLayoutStrategyARIAProps", ["React",
 "useCometSearchInternalTypeaheadFetch", "useCometUniqueID"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.activeEntries,
			d = a.helperText,
			e = a.highlightedEntry,
			f = a.inputLabel,
			h = f === void 0 ? "" : f,
			i = a.isOpened,
			j = a.viewLabel,
			k = b("useCometUniqueID")();
		f = b("useCometSearchInternalTypeaheadFetch")();
		var l = f.isLoading,
			m = b("useCometUniqueID")();
		return g.useMemo(function () {
			var a = e != null ? {
					"aria-activedescendant": e.getKey()
				} : {},
				b = i ? {
					"aria-controls": k
				} : null,
				f = d != null && String(d).length > 0 ? {
					"aria-describedby": m
				} : null;
			return {
				ariaDescribedByProps: {
					id: m
				},
				ariaInputProps: babelHelpers["extends"]({}, a, b, f, {
					"aria-autocomplete": "list",
					"aria-expanded": c.length > 0 && i,
					"aria-label": h,
					role: "combobox"
				}),
				ariaViewProps: {
					"aria-busy": l,
					"aria-label": j,
					id: k,
					role: "listbox"
				}
			}
		}, [c.length, m, d, e, h, l, i, k, j])
	}
}), null);