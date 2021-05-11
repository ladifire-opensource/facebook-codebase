__d("CometNotificationsDropdownMenu.react", ["ix", "fbt", "CometMenu.react", "CometMenuItem.react", "CometNotificationsMarkReadMutation", "CometNotificationsMarkUnreadMutation", "CometRelay", "React", "fbicon", "CometNotificationsDropdownMenu_notification.graphql"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = "MAIN_SURFACE",
		l = "unknown";

	function a(a) {
		var c = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometNotificationsDropdownMenu_notification.graphql"), a.notification),
			d = a.onClose,
			e = c == null ? void 0 : c.id,
			f = c == null ? void 0 : c.notif_id,
			m = c == null ? void 0 : c.notif_type,
			n = b("CometRelay").useRelayEnvironment(),
			o = c == null ? void 0 : c.seen_state;
		a = j.useCallback(function() {
			e != null && b("CometNotificationsMarkUnreadMutation")(n, {
				input: {
					environment: k,
					is_comet: !0,
					notif_id: e,
					source: l
				}
			}, o), d()
		}, [n, e, d, o]);
		var p = j.useCallback(function() {
			e != null && b("CometNotificationsMarkReadMutation")(n, {
				input: {
					environment: k,
					is_comet: !0,
					notif_id: e,
					source: l
				}
			}, o), d()
		}, [n, e, d, o]);
		if (c == null) return null;
		p = o === "SEEN_BUT_UNREAD" || o === "UNSEEN_AND_UNREAD" ? {
			onClick: p,
			primaryText: h._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0111\u00e3 \u0111\u1ecdc")
		} : o === "SEEN_AND_READ" ? {
			onClick: a,
			primaryText: h._("\u0110\u00e1nh d\u1ea5u l\u00e0 ch\u01b0a \u0111\u1ecdc")
		} : null;
		c = (a = c == null ? void 0 : (a = c.notif_option_sets) == null ? void 0 : (c = a.edges[0]) == null ? void 0 : (a = c.node) == null ? void 0 : (c = a.notif_options) == null ? void 0 : c.edges) != null ? a : [];
		a = c.map(function(a) {
			a = a == null ? void 0 : a.node;
			var c = a == null ? void 0 : a.notif_option_renderer;
			return c == null ? null : j.jsx(b("CometRelay").MatchContainer, {
				match: c,
				props: {
					notifType: m,
					notificationId: e,
					notificationNotifId: f,
					testid: "NotificationsDropdownMenuOption"
				}
			}, a == null ? void 0 : a.id)
		}).filter(Boolean);
		return j.jsxs(b("CometMenu.react"), {
			withArrow: !0,
			children: [p != null ? j.jsx(b("CometMenuItem.react"), babelHelpers["extends"]({
				icon: b("fbicon")._(g("477820"), 20),
				testid: void 0
			}, p)) : null, a]
		})
	}
}), null);