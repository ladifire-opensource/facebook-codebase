__d("CometToastNotification.react", ["fbt", "CometNotificationsListItem.react", 
	"CometNotificationsUpdateSeenStateMutation", 
	"CometToastCard.react", "requireDeferred", 
	"CometRelay", "React", "recoverableViolation", 
	"CometToastNotification_actor.graphql", 
	"CometToastNotification_notification.graphql"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j = b("requireDeferred")("Banzai"),
		k = b("CometNotificationsUpdateSeenStateMutation").CometNotificationsUpdateSeenStateMutation,
		l = b("React"),
		m = "notif_beeper_dismiss",
		n = "comet_toast",
		o = "beeper",
		p = "MAIN_SURFACE",
		q = "MARK_SEEN";

	function a(a) {
		var c, d = b("CometRelay").useRelayEnvironment(),
			e = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometToastNotification_actor.graphql"), a.actor),
			f = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometToastNotification_notification.graphql"), a.notification),
			r = f == null ? void 0 : f.id,
			s = f == null ? void 0 : f.seen_state,
			t = l.useCallback(function () {
				if (r == null || s !== "UNSEEN_AND_UNREAD") return;
				k(d, {
					environment: p,
					input: {
						environment: p,
						is_comet: !0,
						last_notif_sync_time: 0,
						notif_ids: [r],
						source: n,
						update_type: q
					}
				}, {
					onError: function (a) {
						b("recoverableViolation")("Mark as seen mutation failed with an error: ", "Notifications", {
							error: a
						})
					},
					onSuccess: function () {}
				})
			}, [r, d, s]);
		if (f == null) {
			b("recoverableViolation")("Comet Toast should have non-null notification", "Notifications");
			return null
		}
		var u = a.onCloseClick;
		a = g._("Th\u00f4ng b\u00e1o m\u1edbi");
		var v = e == null ? void 0 : e.id,
			w = f.notif_id;
		c = (c = f.body) == null ? void 0 : c.text;
		c = w == null || c == null ? null : {
			id: w,
			text: c
		};
		return l.jsx(b("CometToastCard.react"), {
			accessibilityAnnouncement: c,
			content: l.jsx(b("CometNotificationsListItem.react"), {
				actor: e,
				loggerContext: o,
				notification: f,
				onClick: u
			}),
			headline: a,
			onCloseClick: function () {
				u(), w != null && v != null && j.onReady(function (a) {
					a.post(m, {
						notification_data: {
							alert_id: w,
							logger_context: o,
							user_id: v
						},
						ref: "www_tab"
					})
				})
			},
			onMouseEnter: t
		})
	}
}), null);