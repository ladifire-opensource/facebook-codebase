__d("ClientConsistency", ["ClientConsistencyEventEmitter", "SiteData", "requireWeak"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("SiteData").client_revision,
		h = !1,
		i = null,
		j = {},
		k = new Set(),
		l = new Set(),
		m = function (a) {
			j = {};
			var c = Object.keys(a).sort().reverse(),
				d = function () {
					if (f) {
						if (g >= e.length) return "break";
						h = e[g++]
					} else {
						g = e.next();
						if (g.done) return "break";
						h = g.value
					}
					var c = h,
						d = Number(c);
					c = (c = a[d]) != null ? c : [];
					if (c.length === 0) {
						n(d);
						return "break"
					}
					c.forEach(function (a) {
						var c;
						j[a] = Math.max((c = j[a]) != null ? c : 0, d);
						if (l.has(a)) return;
						l.add(a);
						b("requireWeak").call(null, a, function () {
							if (!j[a]) return;
							n(j[a])
						})
					})
				};
			for (var e = c, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var h;
				c = d();
				if (c === "break") break
			}
		},
		n = function (a) {
			a === 2 && b("ClientConsistencyEventEmitter").emit("softRefresh"), a === 3 && b("ClientConsistencyEventEmitter").emit("hardRefresh")
		},
		o = function (a) {
			var b = a.actions;
			a = a.rev;
			if (a === g) return;
			i = b;
			b != null && m(b)
		};
	a = {
		init: function () {
			if (h) return;
			b("ClientConsistencyEventEmitter").addListener("newEntry", function (a) {
				o(a)
			});
			h = !0
		},
		addAdditionalRevision: function (a) {
			if (a === g) return;
			k.add(a)
		},
		getAdditionalRevisions: function () {
			return k
		},
		hasPendingClientActions: function () {
			return i != null && Object.keys(i).length > 0
		}
	};
	e.exports = a
}), null);