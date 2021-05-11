__d("CandelaAnimationManager", ["cancelAnimationFrame", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a() {
			this.animations = new Set(), this.started = !1, this.tickCallback = this.tick.bind(this), this.timerId = null, this.delayTimerIds = []
		}
		var c = a.prototype;
		c.delayRegister = function(a, b) {
			var c = this;
			b = setTimeout(function() {
				c.register(a)
			}, b);
			this.delayTimerIds.push(b)
		};
		c.destroy = function() {
			this.stop(), this.delayTimerIds.forEach(function(a) {
				clearTimeout(a)
			})
		};
		c.register = function(a) {
			this.animations.add(a), this.started && !this.timerId && this.start()
		};
		c.start = function() {
			this.started = !0, this.timerId = b("requestAnimationFrame")(this.tickCallback)
		};
		c.stop = function() {
			this.started = !1, b("cancelAnimationFrame")(this.timerId), this.timerId = null
		};
		c.tick = function() {
			var a = this.animations;
			a.forEach(function(a) {
				a.call()
			});
			a.size ? this.timerId = b("requestAnimationFrame")(this.tickCallback) : this.timerId = null
		};
		c.unregister = function(a) {
			return this.animations["delete"](a)
		};
		return a
	}();
	e.exports = a
}), null);