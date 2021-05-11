__d("ProfileCometHubsTypeahead.react", ["CometFormTypeahead.react", "CometRelay", 
	"ProfileCometHubsTypeaheadDataSource", "ProfileCometTypeaheadEntityViewItem.react", 
	"React", "useCometSearchTypeaheadBaseListViewStrategy"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.allowCustom,
			d = c === void 0 ? !1 : c;
		c = a.isDisabled;
		c = c === void 0 ? !1 : c;
		var e = a.label,
			f = a.onChange,
			h = a.placeholder,
			i = a.section,
			j = a.testid,
			k = a.value,
			l = b("CometRelay").useRelayEnvironment();
		j = g.useMemo(function () {
			return new(b("ProfileCometHubsTypeaheadDataSource"))({
				limit: 10,
				relayEnvironment: l,
				section: i
			})
		}, [l, i]);
		var m = g.useCallback(function (a) {
			a !== k.name && f({
				id: "",
				name: a
			})
		}, [f, k.name]);
		a = g.useCallback(function (a) {
			f((a = a.getRawData()) != null ? a : {
				id: "",
				name: ""
			})
		}, [f]);
		var n = g.useCallback(function () {
				!d && k.id === "" && m("")
			}, [d, m, k.id]),
			o = b("useCometSearchTypeaheadBaseListViewStrategy")({
				viewItemStrategyRenderer: b("ProfileCometTypeaheadEntityViewItem.react")
			});
		return g.jsx(b("CometFormTypeahead.react"), {
			dataSource: j,
			isDisabled: c,
			label: e,
			onBlur: n,
			onChange: m,
			onPressEntry: a,
			placeholder: h || "",
			queryString: (j = k.name) != null ? j : "",
			testid: void 0,
			viewStrategyRenderer: o
		})
	}
	c = g.memo(a);
	e.exports = c
}), null);