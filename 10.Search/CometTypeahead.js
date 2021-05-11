__d("CometTypeahead.react", ["CometHeroInteractionContextPassthrough.react", 
	"CometSearchInternalTypeahead.react", "CometSearchInternalTypeaheadFetchProvider",
	 "CometSearchInternalTypeaheadStateProvider", "React", "emptyFunction"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.dataSource,
			e = a.dataSourceFetchConfigParams,
			f = a.decorators,
			h = f === void 0 ? [] : f;
		f = a.emptyEntries_DO_NOT_USE;
		var i = a.label,
			j = a.placeholder,
			k = a.onBackspace;
		k = k === void 0 ? b("emptyFunction") : k;
		var l = a.onBlur;
		l = l === void 0 ? b("emptyFunction") : l;
		var m = a.onEnter;
		m = m === void 0 ? b("emptyFunction") : m;
		var n = a.onEscape;
		n = n === void 0 ? b("emptyFunction") : n;
		var o = a.onFetchEntries_DO_NOT_USE,
			p = a.onFocus;
		p = p === void 0 ? b("emptyFunction") : p;
		var q = a.onOpen,
			r = a.onChange,
			s = a.onClose,
			t = a.onPressEntry,
			u = a.shouldQueryStringUpdateFromSelectedEntryOnClick,
			v = u === void 0 ? !0 : u;
		u = babelHelpers.objectWithoutPropertiesLoose(a, ["dataSource", "dataSourceFetchConfigParams", "decorators", "emptyEntries_DO_NOT_USE", "label", "placeholder", "onBackspace", "onBlur", "onEnter", "onEscape", "onFetchEntries_DO_NOT_USE", "onFocus", "onOpen", "onChange", "onClose", "onPressEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick"]);
		a = g.useMemo(function () {
			var a = b("CometSearchInternalTypeahead.react");
			h.forEach(function (b) {
				var c = b.decorate;
				b = b.params;
				a = c(a, b)
			});
			return a
		}, [h]);
		var w = g.useCallback(function (a) {
			v && r(a.getLabel()), t && t(a)
		}, [r, t, v]);
		i = i == null && j != null ? j : i;
		var x = u.traceProvider;
		return g.jsx(b("CometHeroInteractionContextPassthrough.react"), {
			clear: !0,
			children: g.jsx(b("CometSearchInternalTypeaheadStateProvider"), {
				emptyEntries_DO_NOT_USE: f,
				onClose: s,
				onOpen: q,
				children: g.jsx(b("CometSearchInternalTypeaheadFetchProvider"), {
					dataSource: d,
					dataSourceFetchConfigParams: e,
					onFetchEntries_DO_NOT_USE: o,
					traceProvider: x,
					children: g.jsx(a, babelHelpers["extends"]({}, u, {
						label: i,
						onBackspace: k,
						onBlur: l,
						onChange: r,
						onDownArrow: b("emptyFunction"),
						onEnter: m,
						onEscape: n,
						onFocus: p,
						onHighlightEntry: b("emptyFunction"),
						onPressEntry: w,
						onShiftTab: b("emptyFunction"),
						onTab: b("emptyFunction"),
						onUpArrow: b("emptyFunction"),
						placeholder: j,
						ref: c
					}))
				})
			})
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);