__d("EventEmitterWithHolding", [], (function (a, b, c, d, e, f) {
	"use strict";
	a = function () {
		function a(a, b) {
			this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0
		}
		var b = a.prototype;
		b.addListener = function (a, b, c) {
			return this.$2.addListener(a, b, c)
		};
		b.once = function (a, b, c) {
			return this.$2.once(a, b, c)
		};
		b.addRetroactiveListener = function (a, b, c) {
			var d = this.$2.addListener(a, b, c),
				e = this.$5;
			e.push(!1);
			this.$4++;
			this.$3.emitToListener(a, b, c);
			this.$4--;
			e[e.length - 1] && d.remove();
			e.pop();
			return d
		};
		b.removeAllListeners = function (a) {
			this.$2.removeAllListeners(a)
		};
		b.removeCurrentListener = function () {
			if (this.$4) {
				var a = this.$5;
				a[a.length - 1] = !0
			} else this.$2.removeCurrentListener()
		};
		b.listeners = function (a) {
			return this.$2.listeners(a)
		};
		b.emit = function (a) {
			var b;
			for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
			(b = this.$2).emit.apply(b, [a].concat(d))
		};
		b.emitAndHold = function (a) {
			var b, c;
			for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
			this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
			(c = this.$2).emit.apply(c, [a].concat(e));
			this.$1 = null
		};
		b.releaseCurrentEvent = function () {
			this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent()
		};
		b.releaseHeldEventType = function (a) {
			this.$3.releaseEventType(a)
		};
		return a
	}();
	e.exports = a
}), null);