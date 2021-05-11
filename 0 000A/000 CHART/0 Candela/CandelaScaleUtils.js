__d("CandelaScaleUtils", ["invariant", "CandelaCategoryScale", "CandelaConstants", "CandelaCurrencyScale", "CandelaDurationScale", "CandelaNumberScale", "CandelaPercentageScale", "CandelaTimeScale", "DateTime", "immutable", "distinctArray", "forEachObject"], (function(a, b, c, d, e, f, g) {
	"use strict";
	f.calculateMinDataInterval = j;
	f.validateType = l;
	f.validateTimezone = m;
	f.createScale = a;
	var h, i = b("immutable").OrderedSet;

	function j(a, c) {
		var d = {};
		a.forEach(function(a) {
			c.forEach(function(b) {
				if (a[b] == null) return;
				d[b] || (d[b] = []);
				d[b].push(a[b])
			})
		});
		var e = Number.POSITIVE_INFINITY;
		b("forEachObject")(d, function(a) {
			e = (h || (h = b("distinctArray")))(a).sort().reduce(function(a, b, c, d) {
				return c === 0 ? a : Math.min(a, Math.abs(d[c] - d[c - 1]))
			}, e)
		});
		return e === Number.POSITIVE_INFINITY ? null : e
	}

	function k(a, b, c) {
		var d;
		b = c.every(function(b) {
			var c = a.get(b);
			c.currencyCode || g(0, 5873, b);
			d || (d = c.currencyCode);
			return c.currencyCode === d
		});
		return b ? d : null
	}

	function l(a, b) {
		var c, d, e = null;
		for (c = 0; c < b.length; c++) {
			d = b[c];
			d = a.get(d).type;
			if (!e) e = d;
			else if (e !== d) return null
		}
		return e
	}

	function m(a, b, c) {
		var d = null;
		c = c.every(function(c) {
			var e = null,
				f = a.get(c),
				g;
			f.timezoneID !== void 0 ? (g = !0, e = f.timezoneID) : g = b.every(function(a) {
				if (!a[c]) return !0;
				var b = a[c].timezoneID === e || e === null;
				e = a[c].timezoneID;
				return b
			});
			f = g && (d === e || d === null);
			d = e;
			return f
		});
		return c ? d : null
	}

	function a(a, c, d, e, f, h, n, o, p, q, r, s, t, u, v, w, x, y, z) {
		p == null && q == null && (q = w || q || 80, w = w || 60);
		r == null || s == null || r <= s || g(0, 5874);
		var A = l(e, d);
		if (!A) throw new Error("All series within a desired scale must be the same type!");
		switch (A) {
			case b("CandelaConstants").ScaleType.CATEGORY:
				if (d.length > 1) throw new Error("Can NOT group `category` scales together!");
				return new(b("CandelaCategoryScale"))({
					firstPadding: u,
					input: a.map(function(a) {
						return a[d[0]]
					}).filter(function(a) {
						return a != null
					}),
					lastPadding: v,
					roundOutput: o
				});
			case b("CandelaConstants").ScaleType.CURRENCY:
			case b("CandelaConstants").ScaleType.NUMBER:
			case b("CandelaConstants").ScaleType.PERCENTAGE:
			case b("CandelaConstants").ScaleType.TIME:
			case b("CandelaConstants").ScaleType.DURATION:
				f = f(c ? a.concat(c) : a, d);
				c = r == null ? f.min : r;
				r = s == null ? f.max : s;
				p == null && (f = j(a, d), f && (p = Math.round((r - c) / f)));
				if (A === b("CandelaConstants").ScaleType.CURRENCY) {
					s = k(e, a, d);
					if (s == null) throw new Error("All series with a desired scale must use the same currencyCode!");
					return new(b("CandelaCurrencyScale"))({
						currencyCode: s,
						firstPadding: u,
						input: i([c, r]),
						lastPadding: v,
						niceStepOnly: h,
						normalizedOutputWhenNoExtent: x,
						origin: y,
						output: z,
						roundInput: n,
						roundOutput: o,
						stepCountHint: p,
						stepIntervalHint: q,
						steps: t
					})
				}
				if (A === b("CandelaConstants").ScaleType.TIME) {
					f = m(e, a, d);
					if (f == null) throw new Error("All series with a desired scale must be in the same timezone!");
					return new(b("CandelaTimeScale"))({
						firstPadding: u,
						input: i([new(b("DateTime"))(c, f), new(b("DateTime"))(r, f)]),
						lastPadding: v,
						minStepInterval: w,
						niceStepOnly: h,
						normalizedOutputWhenNoExtent: x,
						origin: y,
						output: z,
						roundInput: n,
						roundOutput: o,
						stepCountHint: p,
						stepIntervalHint: q,
						steps: t,
						timezoneID: f
					})
				}
				if (A === b("CandelaConstants").ScaleType.PERCENTAGE) return new(b("CandelaPercentageScale"))({
					firstPadding: u,
					input: i([c, r]),
					lastPadding: v,
					niceStepOnly: h,
					normalizedOutputWhenNoExtent: x,
					origin: y,
					output: z,
					roundInput: n,
					roundOutput: o,
					stepCountHint: p,
					stepIntervalHint: q,
					steps: t
				});
				return A === b("CandelaConstants").ScaleType.DURATION ? new(b("CandelaDurationScale"))({
					firstPadding: u,
					input: i([c, r]),
					lastPadding: v,
					niceStepOnly: h,
					normalizedOutputWhenNoExtent: x,
					origin: y,
					output: z,
					roundInput: n,
					roundOutput: o,
					stepCountHint: p,
					stepIntervalHint: q,
					steps: t
				}) : new(b("CandelaNumberScale"))({
					firstPadding: u,
					input: i([c, r]),
					lastPadding: v,
					niceStepOnly: h,
					normalizedOutputWhenNoExtent: x,
					origin: y,
					output: z,
					roundInput: n,
					roundOutput: o,
					stepCountHint: p,
					stepIntervalHint: q,
					steps: t
				});
			default:
				throw new Error("Provide either " + Object.values(b("CandelaConstants").ScaleType).join(", ") + ".")
		}
	}
}), null);