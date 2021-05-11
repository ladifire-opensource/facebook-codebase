__d("ProfileCometAppSectionPhotoCurationMenu.react", ["fbt", 
	"CometMenu.react", "CometMenuItem.react", "CometRelay", "React", 
	"ProfileCometAppSectionPhotoCurationMenu_actionsRenderer.graphql"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c = a.actionsRenderer;
		a.onClose;
		a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("ProfileCometAppSectionPhotoCurationMenu_actionsRenderer.graphql"), c);
		c = a.activity_log_url;
		return c === null ? null : i.jsx(b("CometMenu.react"), {
			withArrow: !1,
			children: i.jsx(b("CometMenuItem.react"), {
				href: c,
				primaryText: g._("Xem \u1ea3nh b\u1ecb \u1ea9n kh\u1ecfi d\u00f2ng th\u1eddi gian")
			})
		})
	}
}), null);