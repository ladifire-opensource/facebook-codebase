__d("CometSearchEventEmitterContext", ["CometSearchRecentSearchEntryAddedEventDefault", 
	"CometSearchRecentSearchEntryRemovedEventDefault", "React", 
	"SearchCometGlobalTypeaheadFocusEventDefault",
	 "SearchCometScopedTypeaheadFocusEventDefault"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a() {
		return g.createContext(babelHelpers["extends"]({}, b("SearchCometGlobalTypeaheadFocusEventDefault")(), b("SearchCometScopedTypeaheadFocusEventDefault")(), b("CometSearchRecentSearchEntryAddedEventDefault")(), b("CometSearchRecentSearchEntryRemovedEventDefault")()))
	}
	c = a();
	e.exports = c
}), null);