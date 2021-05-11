__d("SubscriptionsHandler", ["invariant"], (function(a, b, c, d, e, f, g) {
	"use strict";

	function h(a) {
		return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose
	}

	function i(a) {
		h(a).call(a)
	}
	a = function() {
		function a() {
			this.$1 = []
		}
		var b = a.prototype;
		b.addSubscriptions = function() {
			for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
			b.every(h) || g(0, 3659);
			this.$1 != null ? this.$1 = this.$1.concat(b) : b.forEach(i)
		};
		b.engage = function() {
			this.$1 == null && (this.$1 = [])
		};
		b.release = function() {
			this.$1 != null && (this.$1.forEach(i), this.$1 = null)
		};
		b.releaseOne = function(a) {
			var b = this.$1;
			if (b == null) return;
			var c = b.indexOf(a);
			c !== -1 && (i(a), b.splice(c, 1), b.length === 0 && (this.$1 = null))
		};
		return a
	}();
	e.exports = a
}), null);