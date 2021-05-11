__d("CometSeparatorMenuItem.react", ["CometMenuItemBaseRoleContext", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			separator: {
				borderTop: "l6v480f0",
				marginTop: "aahdfvyu",
				marginEnd: "wkznzc2l",
				marginBottom: "tvmbv18p",
				marginStart: "dhix69tm"
			}
		};

	function a(a, c) {
		a = a.xstyle;
		var d = h.useContext(b("CometMenuItemBaseRoleContext"));
		return h.jsx("div", {
			className: (g || (g = b("stylex")))([i.separator, a]),
			ref: c,
			role: d === "menuitem" ? "separator" : "presentation"
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);