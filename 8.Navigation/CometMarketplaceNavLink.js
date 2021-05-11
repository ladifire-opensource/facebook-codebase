__d("CometMarketplaceNavLink.react", ["React", "TetraAccessoryListCell.react",
 "TetraText.react", "emptyFunction"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.icon,
			d = a.isActive,
			e = a.onClick;
		e = e === void 0 ? b("emptyFunction") : e;
		var f = a.preventLocalNavigation;
		f = f === void 0 ? !1 : f;
		var h = a.title;
		a = a.url;
		return g.jsx(b("TetraAccessoryListCell.react"), {
			addOnPrimary: {
				color: d ? "blue" : "gray",
				icon: c,
				size: 36,
				type: "contained-icon"
			},
			headline: g.jsx(b("TetraText.react"), {
				type: "headline4",
				children: h
			}),
			linkProps: {
				preventLocalNavigation: f,
				url: a
			},
			onPress: e,
			selected: d
		})
	}
}), null);