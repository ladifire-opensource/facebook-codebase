__d("CometTypeahead.react", ["CometHeroInteractionContextPassthrough.react", "CometSearchInternalTypeahead.react", "CometSearchInternalTypeaheadFetchProvider", "CometSearchInternalTypeaheadStateProvider", "React", "emptyFunction"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.dataSource,
			e = a.dataSourceFetchConfigParams,
			f = a.decorators,
			h = f === void 0 ? [] : f;
		f = a.label;
		var i = a.placeholder,
			j = a.onBackspace;
		j = j === void 0 ? b("emptyFunction") : j;
		var k = a.onBlur;
		k = k === void 0 ? b("emptyFunction") : k;
		var l = a.onEnter;
		l = l === void 0 ? b("emptyFunction") : l;
		var m = a.onEscape;
		m = m === void 0 ? b("emptyFunction") : m;
		var n = a.onFetchEntries_DO_NOT_USE,
			o = a.onFocus;
		o = o === void 0 ? b("emptyFunction") : o;
		var p = a.onOpen,
			q = a.onChange,
			r = a.onClose,
			s = a.onPressEntry,
			t = a.shouldQueryStringUpdateFromSelectedEntryOnClick,
			u = t === void 0 ? !0 : t;
		t = babelHelpers.objectWithoutPropertiesLoose(a, ["dataSource", "dataSourceFetchConfigParams", "decorators", "label", "placeholder", "onBackspace", "onBlur", "onEnter", "onEscape", "onFetchEntries_DO_NOT_USE", "onFocus", "onOpen", "onChange", "onClose", "onPressEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick"]);
		a = g.useMemo(function () {
			var a = b("CometSearchInternalTypeahead.react");
			h.forEach(function (b) {
				var c = b.decorate;
				b = b.params;
				a = c(a, b)
			});
			return a
		}, [h]);
		var v = g.useCallback(function (a) {
			u && q(a.getLabel()), s && s(a)
		}, [q, s, u]);
		f = f == null && i != null ? i : f;
		var w = t.traceProvider;
		return g.jsx(b("CometHeroInteractionContextPassthrough.react"), {
			clear: !0,
			children: g.jsx(b("CometSearchInternalTypeaheadStateProvider"), {
				onClose: r,
				onOpen: p,
				children: g.jsx(b("CometSearchInternalTypeaheadFetchProvider"), {
					dataSource: d,
					dataSourceFetchConfigParams: e,
					onFetchEntries_DO_NOT_USE: n,
					traceProvider: w,
					children: g.jsx(a, babelHelpers["extends"]({}, t, {
						label: f,
						onBackspace: j,
						onBlur: k,
						onChange: q,
						onDownArrow: b("emptyFunction"),
						onEnter: l,
						onEscape: m,
						onFocus: o,
						onHighlightEntry: b("emptyFunction"),
						onPressEntry: v,
						onShiftTab: b("emptyFunction"),
						onTab: b("emptyFunction"),
						onUpArrow: b("emptyFunction"),
						placeholder: i,
						ref: c
					}))
				})
			})
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);