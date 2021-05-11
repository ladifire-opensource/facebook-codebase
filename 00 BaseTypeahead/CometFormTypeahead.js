__d("CometFormTypeahead.react", ["BaseTypeahead.react",
 "CometFormTypeaheadLayoutContextualStrategy.react", 
 "CometSearchTypeaheadBaseTextViewItem.react", 
 "CometTypeaheadInputFormStrategy.react", "React",
  "useCometSearchTypeaheadBaseListViewStrategy"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.viewStrategyRenderer;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["viewStrategyRenderer"]);
		c = (c = c) != null ? c : b("useCometSearchTypeaheadBaseListViewStrategy")({
			viewItemStrategyRenderer: b("CometSearchTypeaheadBaseTextViewItem.react")
		});
		return g.jsx(b("BaseTypeahead.react"), babelHelpers["extends"]({}, a, {
			inputStrategyRenderer: b("CometTypeaheadInputFormStrategy.react"),
			layoutStrategyRenderer: b("CometFormTypeaheadLayoutContextualStrategy.react"),
			viewStrategyRenderer: c
		}))
	}
}), null);