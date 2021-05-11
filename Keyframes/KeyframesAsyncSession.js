__d("KeyframesAsyncSession", ["Promise", "promiseDone", "requireDeferred"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("requireDeferred")("FBKeyframesLoggedSession");
	a = function() {
		function a(c) {
			var d = this;
			this.$3 = function() {
				var c = a.timestamp();
				b("promiseDone")(d.$1, function(a) {
					return a.error(c)
				})
			};
			this.$1 = g.load().then(function(a) {
				return new a(c)
			});
			this.$2 = this.$1.then(function(a) {
				return a.getPerformanceLogIfEnabled()
			})
		}
		a.timestamp = function() {
			return {
				value: Date.now()
			}
		};
		var c = a.prototype;
		c.scheduleDecode = function(c, d) {
			var e = c.then(function() {
					return a.timestamp()
				}),
				f = c.then(function() {
					return d
				}).then(function() {
					return a.timestamp()
				}),
				g = d.then(function(a) {
					return a && a.pluginsLoader != null && a.pluginsLoader.getPluginTable instanceof Function ? a.pluginsLoader.getPluginTable() : []
				});
			c = b("Promise").all([this.$1, e]).then(function(a) {
				var c = a[0];
				a = a[1];
				c = c.startDecode(a);
				return b("Promise").all([c, f, g])
			});
			b("promiseDone")(c, function(a) {
				var b = a[0],
					c = a[1];
				a = a[2];
				return b(c, a)
			}, this.$3)
		};
		c.maybeGetPerformanceLog = function() {
			return this.$2
		};
		return a
	}();
	e.exports = a
}), null);