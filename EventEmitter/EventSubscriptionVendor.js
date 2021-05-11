__d("EventSubscriptionVendor", ["invariant"], (function (a, b, c, d, e, f, g) {
	"use strict";
	a = function () {
		function a() {
			this.$1 = {}
		}
		var b = a.prototype;
		b.addSubscription = function (a, b) {
			b.subscriber === this || g(0, 2828);
			this.$1[a] || (this.$1[a] = []);
			var c = this.$1[a].length;
			this.$1[a].push(b);
			b.eventType = a;
			b.key = c;
			return b
		};
		b.removeAllSubscriptions = function (a) {
			a === void 0 ? this.$1 = {} : delete this.$1[a]
		};
		b.removeSubscription = function (a) {
			var b = a.eventType;
			a = a.key;
			b = this.$1[b];
			b && delete b[a]
		};
		b.getSubscriptionsForType = function (a) {
			return this.$1[a]
		};
		return a
	}();
	e.exports = a
}), null);