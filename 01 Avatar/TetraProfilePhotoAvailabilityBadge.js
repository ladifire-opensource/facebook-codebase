__d("TetraProfilePhotoAvailabilityBadge.react", ["CometBadge.react", 
	"CometPressableChildrenWithOverlay.react", "CometPressableOverlay.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.pressed;
		a = a.size;
		return g.jsx("div", {
			className: " stjgntxs ni8dbmo4 j83agx80 spb7xbtv bkmhp75w emlxlaya s45kfl79",
			children: g.jsx(b("CometPressableChildrenWithOverlay.react"), {
				overlay: g.jsx(b("CometPressableOverlay.react"), {
					pressed: c,
					radius: "50%"
				}),
				children: g.jsx(b("CometBadge.react"), {
					color: "green",
					isProfileBadge: !0,
					size: a
				})
			})
		})
	}
}), null);