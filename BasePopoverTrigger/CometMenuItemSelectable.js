__d("CometMenuItemSelectable.react", ["ix", 
	"CometMenuItemBase.react", 
	"CometMenuItemIcon.react", "CometToggle.react", "React", "TetraIcon.react", "fbicon", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");

	function i(a, c) {
		return !a ? null : c ? h.jsx(b("TetraIcon.react"), {
			color: "highlight",
			icon: b("fbicon")._(g("498146"), 20)
		}) : h.jsx(b("TetraIcon.react"), {
			color: "secondary",
			icon: b("fbicon")._(g("477820"), 20)
		})
	}

	function a(a, c) {
		a.aux;
		var d = a.icon,
			e = a.iconColor,
			f = a.iconStyle,
			g = a.isSelected,
			j = babelHelpers.objectWithoutPropertiesLoose(a, ["aux", "icon", "iconColor", "iconStyle", "isSelected"]);
		if (d) return h.jsx(b("CometMenuItemBase.react"), babelHelpers["extends"]({}, j, {
			"aria-checked": g,
			aux: a.aux != null ? a.aux(g) : i(g, !0),
			iconNode: h.jsx(b("CometMenuItemIcon.react"), {
				icon: d,
				iconColor: e,
				use: f
			}),
			ref: c
		}));
		else {
			d = a.aux != null ? a.aux(g) : i(g, !1);
			return h.jsx(b("CometMenuItemBase.react"), babelHelpers["extends"]({}, j, {
				"aria-checked": g,
				aux: d ? h.jsx("div", {
					className: "irj2b8pg ew0dbk1b",
					children: d
				}) : void 0,
				ref: c
			}))
		}
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);