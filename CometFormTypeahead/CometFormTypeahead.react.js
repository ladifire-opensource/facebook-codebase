__d("CometFormTypeahead.react", ["CometFormTypeaheadLayoutContextualStrategy.react", "CometSearchTypeaheadBaseInputFormStrategy.react", "CometSearchTypeaheadBaseTextViewItem.react", "CometTypeahead.react", "React", "useCometSearchTypeaheadBaseListViewStrategy"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.viewStrategyRenderer;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["viewStrategyRenderer"]);
		c = (c = c) != null ? c : b("useCometSearchTypeaheadBaseListViewStrategy")({
			viewItemStrategyRenderer: b("CometSearchTypeaheadBaseTextViewItem.react")
		});
		return g.jsx(b("CometTypeahead.react"), babelHelpers["extends"]({}, a, {
			inputStrategyRenderer: b("CometSearchTypeaheadBaseInputFormStrategy.react"),
			layoutStrategyRenderer: b("CometFormTypeaheadLayoutContextualStrategy.react"),
			viewStrategyRenderer: c
		}))
	}
}), null);