__d("CometSettingsDropdownHeader.react", ["fbt", "CometRelay", "React", 
	"TetraListCell.react", "XCometMeControllerRouteBuilder", "gkx", 
	"useTopNavigationLogging", "CometSettingsDropdownHeader_viewer.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = b("XCometMeControllerRouteBuilder").buildURL({});

	function a(a) {
		var c, d, e, f = a.onClick,
			k = a.selected;
		a = a.viewer;
		a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometSettingsDropdownHeader_viewer.graphql"), a);
		c = a == null ? void 0 : (c = a.actor) == null ? void 0 : c.name;
		d = a == null ? void 0 : (d = a.actor) == null ? void 0 : (d = d.settings_dropdown_profile_picture) == null ? void 0 : d.uri;
		var l = b("useTopNavigationLogging").useSettingsItemLoggingCallbacks("profile", 0, !1),
			m = l[0];
		l = l[1];
		e = ((a == null ? void 0 : (e = a.actor) == null ? void 0 : (e = e.profileSwitcherEligibleProfiles) == null ? void 0 : e.count) || 0) > 0;
		e = /*b("gkx")("1663500")*/false && e;
		var n = e ? 36 : 60;
		return c == null ? null : i.jsx(b("TetraListCell.react"), {
			addOnPrimary: d == null ? void 0 : {
				shape: "circle",
				size: n,
				source: {
					height: n,
					uri: d,
					width: n
				},
				type: "profile-photo"
			},
			addOnPrimaryVerticalAlign: "center",
			addOnSecondary: k != null && e ? {
				on: k,
				type: "radio"
			} : null,
			addOnSecondaryVerticalAlign: "center",
			body: (a == null ? void 0 : (d = a.actor) == null ? void 0 : d.should_use_page_rename) === !0 ? g._("Xem Trang c\u1ee7a b\u1ea1n") : g._("Xem trang c\u00e1 nh\u00e2n c\u1ee7a b\u1ea1n"),
			emphasized: !0,
			headline: c,
			level: e ? 4 : 3,
			linkProps: {
				routeTarget: "self",
				url: j
			},
			onPress: function(a) {
				f && f(a), m()
			},
			ref: l
		})
	}
}), null);