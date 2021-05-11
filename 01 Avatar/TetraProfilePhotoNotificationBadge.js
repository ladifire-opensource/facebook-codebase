__d("TetraProfilePhotoNotificationBadge.react", [
	"CometBadge.react", "React", "TetraText.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a.number;
		return g.jsx(b("CometBadge.react"), {
			color: "red",
			isProfileBadge: !0,
			size: 18,
			wide: a > 9 ? "wide" : "normal",
			children: g.jsx("div", {
				className: "k4urcfbm g0qnabr5 taijpn5t datstx6m j83agx80 bp9cbjyn",
				children: g.jsx(b("TetraText.react"), {
					color: "white",
					type: "body4",
					children: a > 9 ? "9+" : a
				})
			})
		})
	}
}), null);