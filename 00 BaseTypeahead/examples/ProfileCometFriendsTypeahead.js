__d("ProfileCometFriendsTypeahead.react", ["CometFormTypeahead.react", 
	"ProfileCometTypeaheadEntityViewItem.react", "React", "emptyFunction", 
	"useCometSearchTypeaheadBaseListViewStrategy", "useCometTypeaheadBaseStateQueryString", 
	"useProfileCometFriendsDataSource"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.includeGender;
		c = c === void 0 ? !1 : c;
		var d = a.isDisabled;
		d = d === void 0 ? !1 : d;
		var e = a.label,
			f = a.onChange,
			h = f === void 0 ? b("emptyFunction") : f;
		f = a.onPressEntry;
		var i = a.placeholder;
		i = i === void 0 ? "" : i;
		var j = a.queryString;
		j = j === void 0 ? "" : j;
		a = a.testid;
		a = b("useCometTypeaheadBaseStateQueryString")(j);
		j = a[0];
		var k = a[1];
		a = b("useProfileCometFriendsDataSource")({
			includeGender: c,
			limit: 10
		});
		c = g.useCallback(function (a) {
			k(a), h && h(a)
		}, [h, k]);
		var l = b("useCometSearchTypeaheadBaseListViewStrategy")({
			viewItemStrategyRenderer: b("ProfileCometTypeaheadEntityViewItem.react")
		});
		return g.jsx(b("CometFormTypeahead.react"), {
			dataSource: a,
			isDisabled: d,
			label: e,
			onChange: c,
			onPressEntry: f,
			placeholder: i,
			queryString: j,
			testid: void 0,
			viewStrategyRenderer: l
		})
	}
}), null);