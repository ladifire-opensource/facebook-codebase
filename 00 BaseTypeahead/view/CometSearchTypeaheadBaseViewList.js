__d("CometSearchTypeaheadBaseViewList.react", ["React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var b = a.children,
			c = a.entries,
			d = a.highlightedEntry;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "entries", "highlightedEntry"]);
		var e = d != null ? d.getKey() : null;
		return c != null && c.length > 0 ? g.jsx("ul", {
			className: "buofh1pr cbu4d94t j83agx80",
			"data-testid": void 0,
			role: "presentation",
			children: c.map(function (a, c) {
				var d = e === a.getKey();
				return b(a, d, c)
			})
		}) : null
	}
}), null);