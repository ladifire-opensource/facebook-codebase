__d("observeIntersection", ["invariant", "ErrorGuard", "IntersectionObserver"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i = typeof WeakMap === "function",
		j = {
			__noRoot: !0
		},
		k = i ? new WeakMap() : new Map();

	function l(a) {
		var b = a.threshold;
		if (Array.isArray(b)) {
			var c = {};
			b.forEach(function (a) {
				c[String(a)] = !0
			});
			b = Object.keys(c).sort()
		}
		var d = babelHelpers["extends"]({}, a, {
				threshold: b
			}),
			e = {};
		Object.keys(d).sort().forEach(function (a) {
			e[a] = d[a]
		});
		return JSON.stringify(e)
	}

	function a(a, c, d) {
		d === void 0 && (d = {});
		var e = l({
				rootMargin: d.rootMargin,
				threshold: d.threshold
			}),
			f = d.root || j,
			m = k.get(f);
		m == null && (m = {}, k.set(f, m));
		var n = m[e];
		if (n == null) {
			d = new(b("IntersectionObserver"))(function (a) {
				a.forEach(function (a) {
					n != null || g(0, 2439);
					var c = n.targetToCallbacksMap.get(a.target);
					c && c.length > 0 && c.forEach(function (c) {
						(h || (h = b("ErrorGuard"))).applyWithGuard(c, null, [a], {
							name: "observeIntersection"
						})
					})
				})
			}, d);
			n = {
				intersectionObserver: d,
				referenceCount: 0,
				targetToCallbacksMap: i ? new WeakMap() : new Map()
			};
			m[e] = n
		}
		d = n.targetToCallbacksMap.get(a);
		d == null && (n.intersectionObserver.observe(a), n.referenceCount += 1, d = [], n.targetToCallbacksMap.set(a, d));
		d.push(c);
		var o = !1;
		return {
			remove: function () {
				if (o) return;
				var b = n.targetToCallbacksMap.get(a);
				b != null || g(0, 2440);
				if (b.length === 1) n.intersectionObserver.unobserve(a), n.targetToCallbacksMap["delete"](a), n.referenceCount -= 1, a = null;
				else {
					var d = b.indexOf(c);
					d !== -1 || g(0, 2441);
					b.splice(d, 1)
				}
				n.referenceCount === 0 && (m != null || g(0, 2442), delete m[e], Object.keys(m).length === 0 && k["delete"](f));
				o = !0
			}
		}
	}
	e.exports = a
}), null);