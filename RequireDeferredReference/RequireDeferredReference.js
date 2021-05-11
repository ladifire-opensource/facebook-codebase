__d("RequireDeferredReference", ["Promise", "Bootloader", "emptyFunction", "ifRequireable", "ifRequired", "performanceNow", "promiseDone", "requireCond", "requireWeak", "cr:696703"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = function (a) {
		return a
	};
	a = function () {
		function a(a) {
			this.$1 = a
		}
		var c = a.prototype;
		c.getModuleId = function () {
			var a = this.$1;
			return a
		};
		c.getModuleIdAsRef = function () {
			return this.$1
		};
		c.__setRef = function (a) {
			this.$2 = a;
			return this
		};
		c.preload = function () {};
		c.getModuleIfRequired = function () {
			return b("ifRequired").call(null, this.$1, h)
		};
		c.getModuleIfRequireable = function () {
			return b("ifRequireable").call(null, this.$1, h)
		};
		c.load = function () {
			var a = this,
				c = b("ifRequireable")("InteractionTracingMetrics", function (c) {
					return c.currentInteractionLogger().addRequireDeferred(a.getModuleId(), (g || (g = b("performanceNow")))())
				});
			return new(b("Promise"))(function (d) {
				b("requireWeak").call(null, a.getModuleId(), function (a) {
					if (c) {
						var e = !1;
						c((g || (g = b("performanceNow")))(), e)
					}
					d(a)
				})
			})
		};
		c.loadImmediately = function (a) {
			var c, d = !1,
				e = !1;

			function f(b) {
				if (d || e) return;
				d = !0;
				a(b)
			}
			var g = b("Bootloader").loadModules.call(b("Bootloader"), [this.getModuleId()], f, (c = this.$2) != null ? c : "RequireDeferredReference.loadImmediately()");
			b("requireWeak").call(null, this.getModuleId(), function (a) {
				f(a)
			});
			return {
				remove: function () {
					e || (e = !0, g.remove())
				}
			}
		};
		c.onReadyImmediately = function (a) {
			var c = this,
				d = !1,
				e = (g || (g = b("performanceNow")))(),
				f = b("ifRequireable")("InteractionTracingMetrics", function (a) {
					return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), e)
				}),
				h = this.getModuleIfRequireable();
			if (h != null) {
				if (f) {
					var i = !0;
					f(e, i)
				}
				a(h)
			} else {
				var j = !1;
				if (b("cr:696703")) {
					var k = b("cr:696703").getCurrentPriorityLevel();
					this.loadImmediately(function () {
						for (var c = arguments.length, e = new Array(c), h = 0; h < c; h++) e[h] = arguments[h];
						b("cr:696703").runWithPriority(k, function () {
							f && f((g || (g = b("performanceNow")))(), j), d || a.apply(void 0, e)
						})
					})
				} else this.loadImmediately(function () {
					f && f((g || (g = b("performanceNow")))(), j), d || a.apply(void 0, arguments)
				})
			}
			return {
				remove: function () {
					d = !0
				}
			}
		};
		c.onReady = function (a) {
			var c = this,
				d = !1,
				e = this.getModuleIfRequireable(),
				f = e != null ? b("Promise").resolve(e) : this.load();
			if (e != null) {
				var h = (g || (g = b("performanceNow")))();
				e = b("ifRequireable")("InteractionTracingMetrics", function (a) {
					return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), h)
				});
				if (e) {
					var i = !0;
					e(h, i)
				}
			}
			b("promiseDone")(f, function () {
				d || a.apply(void 0, arguments)
			});
			return {
				remove: function () {
					d = !0
				}
			}
		};
		return a
	}();
	e.exports = a
}), null);