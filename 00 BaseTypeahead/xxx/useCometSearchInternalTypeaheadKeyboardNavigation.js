__d("useCometSearchInternalTypeaheadKeyboardNavigation", ["React", 
	"cometSearchTypeaheadBaseKeyboardNavigationUtils", "useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a() {
		var a = b("useCometSearchInternalTypeaheadState")(),
			c = a.activeEntries;
		a = a.highlightedEntry;
		var d = a != null ? a.getKey() : null;
		a = g.useCallback(function (a) {
			return b("cometSearchTypeaheadBaseKeyboardNavigationUtils").moveDown(c, d, function (b) {
				a(b, "keyboard")
			})
		}, [d, c]);
		var e = g.useCallback(function (a) {
			return b("cometSearchTypeaheadBaseKeyboardNavigationUtils").moveUp(c, d, function (b) {
				a(b, "keyboard")
			})
		}, [d, c]);
		return {
			onKeyboardDownArrow: a,
			onKeyboardUpArrow: e
		}
	}
}), null);