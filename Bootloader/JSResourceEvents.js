__d("JSResourceEvents", ["performanceAbsoluteNow"], (function (a, b, c, d, e, f) {
	f.notify = a;
	f.getEvents = j;
	f.getAllModuleEvents = c;
	var g, h = 50,
		i = new Map();

	function a(a, c, d) {
		a = a;
		c = (c = c) != null ? c : "";
		var f = i.get(a);
		f || i.set(a, f = new Map());
		a = f.get(c);
		a || f.set(c, a = new Map());
		f = a.get(d);
		f || a.set(d, f = [0, []]);
		f[1][f[0]++ % h] = (g || (g = b("performanceAbsoluteNow")))()
	}

	function j(a, b, c) {
		var d = i.get(a);
		if (!d) return [];
		var f = [];
		for (var d = d, g = Array.isArray(d), h = 0, d = g ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var j;
			if (g) {
				if (h >= d.length) break;
				j = d[h++]
			} else {
				h = d.next();
				if (h.done) break;
				j = h.value
			}
			j = j;
			var k = j[0];
			j = j[1];
			for (var j = j, l = Array.isArray(j), m = 0, j = l ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var n;
				if (l) {
					if (m >= j.length) break;
					n = j[m++]
				} else {
					m = j.next();
					if (m.done) break;
					n = m.value
				}
				n = n;
				var o = n[0];
				n = n[1];
				for (var n = n[1], p = Array.isArray(n), q = 0, n = p ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var r;
					if (p) {
						if (q >= n.length) break;
						r = n[q++]
					} else {
						q = n.next();
						if (q.done) break;
						r = q.value
					}
					r = r;
					r >= b && r <= c && f.push({
						module: a,
						ref: k || null,
						type: o,
						time: r
					})
				}
			}
		}
		return f.sort(function (a, b) {
			return a.time - b.time
		})
	}

	function c(a, b) {
		var c = new Map();
		for (var d = i.keys(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var g;
			if (e) {
				if (f >= d.length) break;
				g = d[f++]
			} else {
				f = d.next();
				if (f.done) break;
				g = f.value
			}
			g = g;
			var h = j(g, a, b);
			h.length && c.set(g, h)
		}
		return c
	}
}), null);