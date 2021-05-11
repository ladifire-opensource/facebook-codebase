__d("CandelaUtils", ["invariant", "CandelaConstants", "React", "ReactART", "immutable", "isEmpty", "CandelaScaleUtils"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = b("ReactART").Path,
		k = b("ReactART").Shape,
		l = b("immutable").Set,
		m = b("CandelaConstants").RE.IDENT_RE,
		n = {
			toLoopingIterator: function(a) {
				var b = 0;
				return function() {
					b === a.length && (b = 0);
					return a[b++]
				}
			}
		};
	f.arrays = n;
	var o = {
		drawBorder: function(a, b, c, d, e) {
			switch (b) {
				case "dashed":
					o.drawDashedPath(a, [c * 3], d, e);
					break;
				case "dotted":
					o.drawDashedPath(a, [c], d, e);
					break;
				case "solid":
					a.moveTo(d.x, d.y).lineTo(e.x, e.y);
					break
			}
		},
		drawDashedPath: function(a, c, d, e) {
			a instanceof j || g(0, 4228);
			if ((h || (h = b("isEmpty")))(c)) return;
			var f = function(a, b, c) {
					if (a < b) return Math.min(a + c, b);
					else return Math.max(a - c, b)
				},
				i = d.x;
			d = d.y;
			var k = e.x;
			e = e.y;
			a.moveTo(i, d);
			c = n.toLoopingIterator(c);
			while (i !== k || d !== e) {
				var l = c();
				i = f(i, k, l);
				d = f(d, e, l);
				a.lineTo(i, d);
				l = c();
				i = f(i, k, l);
				d = f(d, e, l);
				a.moveTo(i, d);
				if (isNaN(i) || isNaN(d)) return
			}
		},
		createShape: function(a, b, c) {
			var d = new j();
			a.forEach(function(a, b) {
				b === 0 ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y)
			});
			b && d.close();
			return i.jsx(k, babelHelpers["extends"]({
				d: d
			}, c))
		}
	};
	f.art = o;
	var p = {
		getClassNamesFromDataRow: function(a) {
			a = a != null ? a.$meta || a._meta : null;
			return a ? p.getClassNamesFromInputString(a.className) : l()
		},
		getClassNamesFromInputString: function(a) {
			return a ? l(a.match(m)) : l()
		},
		classNamesToSelector: function(a) {
			return a.size ? "." + a.toArray().sort().join(".") : ""
		},
		computeHighlightPseudoClass: function(a, c, d) {
			if (!a || !a.size) return b("CandelaConstants").PseudoClass.NONE;
			a = a.some(function(a) {
				var b = a.dependentSeriesName;
				a = a.independentSeriesValue;
				return (a == null || a === d) && (b == null || b === c)
			});
			return a ? b("CandelaConstants").PseudoClass.HIGHLIGHTED : b("CandelaConstants").PseudoClass.MUTED
		},
		getSeriesValue: function(a, b) {
			return a[b] && a[b].value ? a[b].value : null
		}
	};
	f.data = p;
	a = {
		toHandlerName: function(a) {
			return "on" + a[0] + a.slice(1).toLowerCase().replace(/_[a-z]/g, function(a) {
				return a[1].toUpperCase()
			})
		}
	};
	f.events = a;
	c = {
		throttle: function(a, b) {
			var c = null,
				d = 0,
				e = function() {
					d = Date.now(), c = null, a()
				},
				f = function f() {
					var g = Date.now(),
						h = b - (g - d);
					h <= 0 || h > b ? (c && f.reset(), d = g, a()) : c || (c = setTimeout(e, h))
				};
			f.reset = function() {
				clearTimeout(c), c = null
			};
			return f
		},
		crossPlatformCopy: function() {
			var a = {};
			for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
			for (var e = 0; e < c.length; e++)
				for (var f in c[e]) Object.prototype.hasOwnProperty.call(c[e], f) && (a[f] = c[e][f]);
			return a
		}
	};
	f.functions = c;
	d = {
		findDistanceToSegment: function(a, b, c) {
			function d(a) {
				return a * a
			}

			function e(a, b) {
				return d(a.x - b.x) + d(a.y - b.y)
			}

			function f(a, b, c) {
				var d = e(b, c);
				if (d === 0) return e(a, b);
				d = ((a.x - b.x) * (c.x - b.x) + (a.y - b.y) * (c.y - b.y)) / d;
				if (d < 0) return e(a, b);
				return d > 1 ? e(a, c) : e(a, {
					x: b.x + d * (c.x - b.x),
					y: b.y + d * (c.y - b.y)
				})
			}
			return Math.sqrt(f(a, b, c))
		},
		sign: function(a) {
			a = +a;
			return a === 0 || isNaN(a) ? a : a > 0 ? 1 : -1
		}
	};
	f.math = d;
	f.scales = b("CandelaScaleUtils");
	var q = {
		subtract: function(a, b, c) {
			return q.setOp(a, b, function(a, b, c) {
				return !b.has(c)
			}, c)
		},
		intersection: function(a, b, c) {
			return q.setOp(a, b, function(a, b, c) {
				return b.has(c)
			}, c)
		},
		setOp: function(a, b, c, d) {
			var e = [],
				f = new Set(),
				g = new Set();
			if (d) {
				var h = d;
				a.forEach(function(a) {
					return f.add(h(a))
				});
				b.forEach(function(a) {
					return g.add(h(a))
				})
			} else f = new Set(a), g = new Set(b);
			a.forEach(function(a) {
				c(f, g, d ? d(a) : a) && e.push(a)
			});
			return e
		}
	};
	f.sets = q
}), null);