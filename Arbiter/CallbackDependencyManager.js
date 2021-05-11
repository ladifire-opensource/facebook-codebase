__d("CallbackDependencyManager", ["ErrorGuard"], (function (a, b, c, d, e, f) {
	var g;
	a = function () {
		"use strict";

		function a() {
			this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
		}
		var c = a.prototype;
		c.$5 = function (a, b) {
			var c = 0,
				d = new Set();
			for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
			for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				if (e) {
					if (f >= b.length) break;
					d = b[f++]
				} else {
					f = b.next();
					if (f.done) break;
					d = f.value
				}
				d = d;
				if (this.$4.get(d)) continue;
				c++;
				var g = this.$1.get(d);
				g === void 0 && (g = new Map(), this.$1.set(d, g));
				g.set(a, (g.get(a) || 0) + 1)
			}
			return c
		};
		c.$6 = function (a) {
			a = this.$1.get(a);
			if (!a) return;
			for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var f;
				if (d) {
					if (e >= c.length) break;
					f = c[e++]
				} else {
					e = c.next();
					if (e.done) break;
					f = e.value
				}
				f = f;
				var h = f[0];
				f = f[1] - 1;
				a.set(h, f);
				f <= 0 && a["delete"](h);
				f = this.$2.get(h);
				if (f !== void 0) {
					f.$7--;
					if (f.$7 <= 0) {
						f = f.$8;
						this.$2["delete"](h);
						(g || (g = b("ErrorGuard"))).applyWithGuard(f, null, [])
					}
				}
			}
		};
		c.addDependenciesToExistingCallback = function (a, b) {
			var c = this.$2.get(a);
			if (!c) return null;
			b = this.$5(a, b);
			c.$7 += b;
			return a
		};
		c.isPersistentDependencySatisfied = function (a) {
			return !!this.$4.get(a)
		};
		c.satisfyPersistentDependency = function (a) {
			this.$4.set(a, 1), this.$6(a)
		};
		c.satisfyNonPersistentDependency = function (a) {
			var b = this.$4.get(a) === 1;
			b || this.$4.set(a, 1);
			this.$6(a);
			b || this.$4["delete"](a)
		};
		c.registerCallback = function (a, c) {
			var d = this.$3;
			this.$3++;
			c = this.$5(d, c);
			if (c === 0) {
				(g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
				return null
			}
			this.$2.set(d, {
				$8: a,
				$7: c
			});
			return d
		};
		return a
	}();
	e.exports = a
}), null);