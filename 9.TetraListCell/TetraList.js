__d("TetraList.react", ["CometFocusGroup.react", "React", "focusScopeQueries", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			root: {
				marginBottom: "b20td4e0",
				marginTop: "muag1w35"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.items,
			e = a.keyNavOrientation,
			f = a.role,
			j = typeof c === "function" ? ((a = d) != null ? a : []).map(function(a, b) {
				return c({
					item: a,
					props: {
						key: (a = a.key) != null ? a : b
					}
				})
			}) : c;
		return e != null ? h.jsx(b("CometFocusGroup.react"), {
			orientation: e,
			role: f,
			tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
			children: function(a) {
				return h.jsx("div", {
					className: (g || (g = b("stylex")))(a, i.root),
					role: (a = f) != null ? a : void 0,
					children: j
				})
			}
		}) : h.jsx("div", {
			className: (g || (g = b("stylex")))(i.root),
			children: j
		})
	}
}), null);