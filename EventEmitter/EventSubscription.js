__d("EventSubscription", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = function (a) {
		var b = this;
		this.remove = function () {
			b.subscriber && (b.subscriber.removeSubscription(b), b.subscriber = null)
		};
		this.subscriber = a
	};
	e.exports = a
}), null);