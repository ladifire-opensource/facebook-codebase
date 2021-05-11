__d("CandelaGuideUtils", ["CandelaCategoryScale", "CandelaConstants", "CandelaScale", "immutable"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("CandelaConstants").GuideXValueAlignment,
		h = b("immutable").Set,
		i = b("CandelaScale").getExtentValue;

	function j(a, b, c, d) {
		var e = [],
			f = Infinity,
			g = Infinity,
			h;
		b.forEach(function(b, e) {
			if (b < c || b > d) return;
			var i = Math.round(Math.abs(a - b));
			i < f && (f = i, g = e, h = b)
		});
		e.push({
			diff: f,
			index: g,
			x: h
		});
		return e
	}

	function k(a, b, c, d) {
		c = [];
		d = Infinity;
		for (var e = 0; e < b.length; e++)
			if (b[e] > a) {
				d = e - 1;
				break
			} else if (b[e] === a) {
			d = e;
			break
		}
		c.push({
			diff: Math.round(Math.abs(a - b[d])),
			index: d,
			x: b[d]
		});
		return c
	}

	function l(a, b, c, d) {
		c = [];
		d = Infinity;
		for (var e = 0; e < b.length; e++)
			if (b[e] >= a) {
				d = e;
				break
			} c.push({
			diff: Math.round(Math.abs(a - b[d])),
			index: d,
			x: b[d]
		});
		return c
	}

	function m(a) {
		var b = Infinity,
			c;
		a.forEach(function(a) {
			b > a.diff && (b = a.diff, c = a.x)
		});
		return a.filter(function(a) {
			return a.x === c
		})
	}
	a = {
		getHits: function(a, b, c, d, e) {
			var f;
			switch (e) {
				case g.LESS:
					f = k;
					break;
				case g.GREATER:
					f = l;
					break;
				default:
					f = j;
					break
			}
			return m(f(a, b, c, d))
		},
		createActiveCacheKey: function(a) {
			return a.map(function(a) {
				return a.index
			}).join(".")
		},
		createActiveSeries: function(a, b) {
			a = a.reduce(function(a, c) {
				var d = a.minCoord;
				a = a.minDiff;
				var e = Math.round(Math.abs(b - c.y));
				e < a && (d = c, a = e);
				return {
					minCoord: d,
					minDiff: a
				}
			}, {
				minCoord: null,
				minDiff: Number.MAX_SAFE_INTEGER
			});
			a = a.minCoord;
			return a ? a.series : null
		},
		getCoordsAndEventData: function(a, c, d, e, f, g, j) {
			var k = {},
				l = g[e],
				m = l instanceof b("CandelaCategoryScale") ? i(l.props.output) / l.props.steps.size : 0,
				n = Math.round(m / 2);
			k[e] = {
				scale: l
			};
			var o = c(l),
				p = [];
			d.forEach(function(c) {
				var d = a[c.index];
				k[e].value = d[e];
				f.forEach(function(a) {
					if (d[e] === void 0 || d[e] === null && !j || a.some(function(a) {
							return d[a] === void 0 || d[a] === null && !j
						})) return;
					var c = 0;
					a.forEach(function(f) {
						var h = g[f],
							j = h instanceof b("CandelaCategoryScale") ? i(h.props.output) / h.props.steps.size : 0;
						j = Math.round(j / 2);
						k[f] = {
							scale: h
						};
						k[f].value = d[f];
						d[e] != null && a.every(function(a) {
							return d[a] != null
						}) && (c += d[f], p.push({
							content: o(d[e]),
							data: d,
							series: f,
							x: l.convert(d[e]) + n,
							y: h.convert(c) + j
						}))
					})
				})
			});
			return {
				coords: h(p),
				eventData: k
			}
		}
	};
	e.exports = a
}), null);