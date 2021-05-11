__d("MarketplaceSearchAddressTypeahead.react", ["CometRelay", 
	"CometSearchTypeaheadBaseLayoutContextualStrategy.react", "CometTypeahead.react",
	 "MarketplaceSearchAddressTypeahead.config", 
	 "MarketplaceSearchAddressTypeaheadCometFormTextInputStrategy.react",
	  "MarketplaceSearchAddressTypeaheadDataSource", "MarketplaceSearchAddressTypeaheadViewItem.react",
	   "React", "emptyFunction", "useCometSearchTypeaheadBaseListViewStrategy"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("MarketplaceSearchAddressTypeahead.config").view.renderLimit,
		h = b("React");

	function a(a) {
		var c = a.onBlur;
		c = c === void 0 ? b("emptyFunction") : c;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["onBlur"]);
		var d = b("CometRelay").useRelayEnvironment(),
			e = h.useMemo(function () {
				return new(b("MarketplaceSearchAddressTypeaheadDataSource"))({
					limit: g,
					relayEnvironment: d
				})
			}, [d]),
			f = b("useCometSearchTypeaheadBaseListViewStrategy")({
				viewItemStrategyRenderer: b("MarketplaceSearchAddressTypeaheadViewItem.react")
			});
		return h.jsx(b("CometTypeahead.react"), {
			dataSource: e,
			inputStrategyRenderer: b("MarketplaceSearchAddressTypeaheadCometFormTextInputStrategy.react"),
			layoutStrategyRenderer: b("CometSearchTypeaheadBaseLayoutContextualStrategy.react"),
			onBlur: c,
			onChange: a.onChange,
			onFocus: a.onFocus,
			onPressEntry: a.onPressEntry,
			placeholder: a.placeholder,
			queryString: a.queryString,
			viewStrategyRenderer: f
		})
	}
}), null);