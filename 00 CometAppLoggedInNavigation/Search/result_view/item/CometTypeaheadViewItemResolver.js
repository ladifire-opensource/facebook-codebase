__d("CometTypeaheadViewItemResolver.react", ["CometTypeaheadKeywordViewItem.react", "React"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	b("React");

	function a(a) {
		var c = a.children,
			d = a.entry,
			e = a.entryMappings;
		a = a.fallbackViewItem;
		a = a === void 0 ? b("CometTypeaheadKeywordViewItem.react") : a;
		e = e.find(function(a) {
			a = a.resolver;
			return a(d)
		});
		if (e) {
			var f = e.viewItem;
			e = e.viewItemProps;
			return c(f, e)
		}
		return c(a)
	}
}), null);