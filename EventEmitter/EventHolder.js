__d("EventHolder", ["invariant"], (function (a, b, c, d, e, f, g) {
	"use strict";
	a = function () {
		function a() {
			this.$1 = {}, this.$2 = []
		}
		var b = a.prototype;
		b.holdEvent = function (a) {
			this.$1[a] = this.$1[a] || [];
			var b = this.$1[a],
				c = {
					eventType: a,
					index: b.length
				};
			for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
			b.push(e);
			return c
		};
		b.emitToListener = function (a, b, c) {
			var d = this,
				e = this.$1[a];
			if (!e) return;
			e.forEach(function (e, f) {
				if (!e) return;
				d.$2.push({
					eventType: a,
					index: f
				});
				b.apply(c, e);
				d.$2.pop()
			})
		};
		b.releaseCurrentEvent = function () {
			this.$2.length || g(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1])
		};
		b.releaseEvent = function (a) {
			delete this.$1[a.eventType][a.index]
		};
		b.releaseEventType = function (a) {
			this.$1[a] = []
		};
		return a
	}();
	e.exports = a
}), null);