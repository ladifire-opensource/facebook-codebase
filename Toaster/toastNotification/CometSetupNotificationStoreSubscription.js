__d("CometSetupNotificationStoreSubscription", ["CometNotificationsReceiveSubscription", 
	"CometRelay", "JSResource", "React", "WebPixelRatio", "promiseDone", "relay-runtime",
	"requireDeferred", "CometSetupNotificationStoreSubscriptionNewNotification_data.graphql",
	 "CometSetupNotificationStoreSubscriptionNewNotificationQuery.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = b("React"),
		j = b("requireDeferred")("Banzai"),
		k = b("JSResource")("CometToastNotification.react").__setRef("CometSetupNotificationStoreSubscription"),
		l = {
			data: g !== void 0 ? g : g = b("CometSetupNotificationStoreSubscriptionNewNotification_data.graphql")
		};
	h !== void 0 ? h : h = b("CometSetupNotificationStoreSubscriptionNewNotificationQuery.graphql");
	var m = "notif_beeper_drop";

	// TODO: a = useToasterStateManager()
	function a(a, c) {
		var d = l.data;
		if (d == null) return;
		d = b("relay-runtime").getFragment(d);
		var e = {
				input: {
					client_subscription_id: "notifications:receive:subscription"
				},
				scale: b("WebPixelRatio").get()
			},
			f = b("relay-runtime").createOperationDescriptor(b("relay-runtime").getRequest(b("CometNotificationsReceiveSubscription").NotificationsReceiveSubscription), e);
		d = c.lookup(b("relay-runtime").createReaderSelector(d, "client:root:viewer", e, f.request));
		var g;
		e = function (a) {
			g = a
		};
		var h = {};
		f = c.subscribe(d, function (c) {
			if (c.isMissingData) return;
			c = c.data;
			var d = c.actor,
				e = c.new_notification;
			if (d == null || e == null) return;
			c = a.getState();
			e.seen_state !== "UNSEEN_AND_UNREAD" && e.notif_id in h && ((c = c[h[e.notif_id]]) == null ? void 0 : c.shown) !== !0 && (a["delete"](h[e.notif_id]), delete h[e.notif_id]);
			b("promiseDone")(k.load().then(function (b) {
				if (g !== !0 && e.seen_state === "UNSEEN_AND_UNREAD" && h[e.notif_id] == null) {
					var c = a.push(i.jsx(b, {
						actor: d,
						notification: e,
						onCloseClick: function () {
							return a.expire(c)
						}
					}), 5e3);
					h[e.notif_id] = c
				} else j.onReady(function (a) {
					var b = e.notif_id,
						c = e.notif_type;
					a.post(m, {
						notification_data: {
							alert_id: b,
							logger_context: "beeper",
							notif_type: c,
							user_id: d == null ? void 0 : d.id
						},
						ref: "www_tab"
					})
				})
			}))
		});
		return {
			disposable: f,
			setFilter: e
		}
	}
}), null);