__d("JSResourceReference", ["Promise", "JSResourceEvents", "PromiseAnnotate", "ifRequireable", "ifRequired"], (function (a, b, c, d, e, f) {
	var g = function (a) {
			return a
		},
		h = [],
		i = null;

	function j(a) {
		i ? a(i) : h.push(a)
	}
	var k = "JSResource: unknown caller";
	a = function () {
		a.setBootloader = function (a) {
			i = a;
			for (var a = 0; a < h.length; a++) {
				var b = h[a];
				b(i)
			}
			h = []
		};

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
		c.load = function () {
			var a = this;
			b("JSResourceEvents").notify(this.$1, this.$2, "LOADED");
			var c = new(b("Promise"))(function (b) {
				j(function (c) {
					return c.loadModules([a.getModuleId()], b, (c = a.$2) != null ? c : k)
				})
			});
			b("PromiseAnnotate").setDisplayName(c, "Bootload(" + this.getModuleId() + ")");
			return c
		};
		c.preload = function () {
			var a = this;
			j(function (b) {
				return b.preloadModules([a.getModuleId()], void 0, (b = a.$2) != null ? b : k)
			})
		};
		c.equals = function (a) {
			return this === a || this.$1 == a.$1
		};
		c.getModuleIfRequireable = function () {
			b("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
			return b("ifRequireable").call(null, this.$1, g)
		};
		c.getModuleIfRequired = function () {
			b("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
			return b("ifRequired").call(null, this.$1, g)
		};
		c.__setRef = function (a) {
			this.$2 = a;
			b("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
			return this
		};
		a.loadAll = function (a, c) {
			var d = {},
				e = !1;
			for (var f = a, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var i;
				if (g) {
					if (h >= f.length) break;
					i = f[h++]
				} else {
					h = f.next();
					if (h.done) break;
					i = h.value
				}
				i = i;
				var k = i.$2;
				k && (e = !0, d[k] = !0);
				b("JSResourceEvents").notify(i.$1, k, "LOADED")
			}
			j(function (b) {
				return b.loadModules(a.map(function (a) {
					return a.getModuleId()
				}), c, e ? Object.keys(d).join(":") : "JSResource: unknown caller")
			})
		};
		return a
	}();
	e.exports = a
}), null);