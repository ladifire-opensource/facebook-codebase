__d("CometSettingsBadge.react", ["CometBadge.react", "CometRelay", "React", "CometSettingsBadgeQuery.graphql"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function a(a) {
		a = a.isActive;
		var c = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("CometSettingsBadgeQuery.graphql"), {}),
			d = h.useState(!1),
			e = d[0];
		d = d[1];
		a && !e && d(!0);
		if (e) return null;
		d = Boolean(c == null ? void 0 : (a = c.viewer) == null ? void 0 : a.device_switchable_account_has_notification);
		return d === !1 ? null : h.jsx(b("CometBadge.react"), {
			border: "white",
			color: "red",
			isProfileBadge: !0,
			size: 10
		})
	}
}), null);