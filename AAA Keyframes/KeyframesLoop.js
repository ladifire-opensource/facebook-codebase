__d("KeyframesLoop", ["Run", "TimeSlice", "emptyFunction", "gkx", 
	"performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = 1e3,
		i = new Set();

	function j(a) {
		var c = (g || (g = b("performanceNow")))();
		a.callback(Math.min(c - (a.previousTime || c), h));
		a.previousTime = c;
		a.framesRemaining -= 1;
		a.framesRemaining <= 0 && a.cancel()
	}

	function k(a) {
		i.size > 0 && (i.forEach(j), b("requestAnimationFramePolyfill")(k))
	}
	b("gkx")("708253") || b("Run").onLeave(function() {
		i.forEach(function(a) {
			return a.cancel()
		})
	});
	window.addEventListener("focus", function() {
		i.forEach(function(a) {
			return a.previousTime = (g || (g = b("performanceNow")))() - 16.67
		})
	});
	a = function() {
		function a(a) {
			this.framesRemaining = Infinity, this.callback = a, this.previousTime = 0
		}
		var c = a.prototype;
		c.start = function(a) {
			a === void 0 && (a = Infinity), this.framesRemaining = a, this.$1 || (i.size === 0 && b("requestAnimationFramePolyfill")(k), i.add(this), this.previousTime = (g || (g = b("performanceNow")))(), this.$1 = b("TimeSlice").getGuardedContinuation("KeyframesLoop"))
		};
		c.cancel = function() {
			this.$1 && (this.$1(b("emptyFunction")), this.$1 = null, i["delete"](this))
		};
		c.isRunning = function() {
			return !!this.$1
		};
		return a
	}();
	e.exports = a
}), null);