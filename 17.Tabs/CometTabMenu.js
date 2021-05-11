__d("CometTabMenu.react", ["CometMenu.react",
 "CometMenuItemSelectable.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.menuItems;
		a = a.menuSize;
		return g.jsx(b("CometMenu.react"), {
			size: a,
			children: c.map(function (a, c) {
				var d = a.badge,
					e = a.disabled,
					f = a.icon,
					h = a.label,
					i = a.linkProps,
					j = a.onHoverIn,
					k = a.onHoverOut,
					l = a.onPress,
					m = a.onPressIn;
				a = a.selected;
				return g.jsx(b("CometMenuItemSelectable.react"), {
					badge: d,
					disabled: e,
					href: (d = i == null ? void 0 : i.url) != null ? d : void 0,
					icon: f,
					isSelected: (e = a) != null ? e : !1,
					onClick: l,
					onHoverIn: j,
					onHoverOut: k,
					onPressIn: m,
					primaryText: h,
					role: "menuitemradio",
					routeTarget: i == null ? void 0 : i.routeTarget,
					target: i == null ? void 0 : i.target,
					testid: void 0
				}, c)
			})
		})
	}
}), null);