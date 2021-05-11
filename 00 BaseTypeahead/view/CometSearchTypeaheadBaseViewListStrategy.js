__d("CometSearchTypeaheadBaseViewListStrategy.react", [
	"CometSearchTypeaheadBaseViewList.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entries;
		a.extraViewProps;
		var d = a.highlightedEntry;
		a.onAbandonTypeahead_DO_NOT_USE;
		var e = a.viewItemStrategyRenderer,
			f = babelHelpers.objectWithoutPropertiesLoose(a, ["entries", "extraViewProps", "highlightedEntry", "onAbandonTypeahead_DO_NOT_USE", "viewItemStrategyRenderer"]);
		return g.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
			entries: c,
			highlightedEntry: d,
			testid: void 0,
			children: function (a, b) {
				return g.createElement(e, babelHelpers["extends"]({}, f, {
					entry: a,
					isActive: b,
					key: a.getKey()
				}))
			}
		})
	}
}), null);