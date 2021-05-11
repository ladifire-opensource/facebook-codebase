__d("CometVisibilityUserActivityMonitor", ["Visibility"], (function (a, b, c, d, e, f) {
	"use strict";
	a = {
		isUserActive: function () {
			return b("Visibility").isHidden() === !1
		},
		subscribe: function (a) {
			var c, d = (c = b("Visibility")).addListener(c.HIDDEN, function () {
					return a && a(!1)
				}),
				e = c.addListener(c.VISIBLE, function () {
					return a && a(!0)
				});
			return function () {
				d && d.remove(), e && e.remove()
			}
		}
	};
	e.exports = a
}), null);