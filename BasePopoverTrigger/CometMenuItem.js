__d("CometMenuItem.react", ["CometBadge.react",
	"CometMenuItemBase.react", "CometMenuItemIcon.react", 
	"React", "TetraTextPairing.react"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.auxItem,
			e = a.icon,
			f = a.iconCssSelectorId,
			h = a.iconStyle;
		h = h === void 0 ? "normal" : h;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["auxItem", "icon", "iconCssSelectorId", "iconStyle"]);
		var i = null;
		d != null && (i = d.type === "text" ? g.jsx(b("TetraTextPairing.react"), {
			level: 3,
			meta: d.auxText
		}) : g.jsx(b("CometBadge.react"), {
			color: d.color
		}));
		return g.jsx(b("CometMenuItemBase.react"), babelHelpers["extends"]({}, a, {
			alignCenter: !0,
			aux: i,
			iconNode: e != null ? g.jsx(b("CometMenuItemIcon.react"), {
				disabled: a.disabled,
				icon: e,
				iconCssSelectorId: f,
				use: h
			}) : null,
			ref: c
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);