__d("CometInitializeNotificationToast.react", ["CometRelay", "React", "requireDeferred", 
	"useHideNotificationsToasts", "useToasterStateManager"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("requireDeferred")("CometSetupNotificationStoreSubscription");

	function a() {
		var a = b("useHideNotificationsToasts")(),
			c = b("useToasterStateManager")(),
			d = g.useRef(null),
			e = g.useState(null),
			f = e[0],
			i = e[1],
			j = b("CometRelay").useRelayEnvironment();
		g.useEffect(function () {
			var a, b = !1;
			h.onReady(function (e) {
				b || (a = e(c, j), d.current = a, i(!0))
			});
			return function () {
				a != null && (a.disposable.dispose(), a = null, b = !0)
			}
		}, [c, j]);
		g.useEffect(function () {
			d.current != null && a != null && d.current.setFilter(a);
			return function () {
				d.current != null && a != null && d.current.setFilter(null)
			}
		}, [a, f]);
		return null
	}
}), null);