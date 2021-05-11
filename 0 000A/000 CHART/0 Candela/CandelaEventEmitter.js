__d("CandelaEventEmitter", ["EventEmitter"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = function() {
		function a(a) {
			this.$1 = !0, Object.assign(this, a)
		}
		var b = a.prototype;
		b.stopPropagation = function() {
			this.$1 = !1
		};
		b.shouldContinue = function() {
			return this.$1
		};
		return a
	}();
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.addListenerToRegion = function(b, c, d, e) {
			var f = this;
			return a.prototype.addListener.call(this, b, function(a) {
				a.region.getID() === c && d.call(f, a)
			}, e || null)
		};
		c.emitAndReturnEvent = function(a, b) {
			b = new g(b);
			this.emit(a, b);
			return b
		};
		return b
	}(b("EventEmitter"));
	e.exports = a
}), null);