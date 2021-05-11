__d("SpectrumStackedAreas", ["CSSBackgroundPattern.art", "React", "ReactART", 
	"SpectrumDataVisualization", "SpectrumUtilities", "createReactClass_DEPRECATED", "d3-old/scale/ordinal"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Path,
		i = a.Group,
		j = a.ClippingRectangle,
		k = a.Shape,
		l = b("SpectrumUtilities").forEachVector,
		m = b("SpectrumUtilities").findEdges,
		n = 4,
		o = n * 2;

	function p(a) {
		return a.y0
	}

	function q(a) {
		return a.y == null ? null : a.y + a.y0
	}
	var r = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumStackedAreas",
		mixins: [b("SpectrumDataVisualization").Mixin],
		statics: {
			getExtentY: function(a) {
				var b = r.getStackedData(a);
				a = a.base;
				a = a == null ? Math.min.apply(null, b[0].map(p)) : a == "bottom" ? Math.min.apply(null, b[0].map(q)) : a;
				b = Math.max.apply(null, b[b.length - 1].map(q));
				return [a, b]
			},
			getStackedData: function(a) {
				var c = b("SpectrumDataVisualization").getValueXAccessor(a),
					d = b("SpectrumDataVisualization").getValueYAccessor(a),
					e = a.partialValue || function() {
						return !1
					},
					f = a.data.map(function(a) {
						return a.map(function(b, a) {
							return {
								x: c(b, a),
								y: d(b, a),
								y0: 0,
								isPartial: e(b, a)
							}
						})
					});
				a = a.offset || f[0].map(function(a) {
					return 0
				});
				var g = f.map(function() {
					return []
				});
				for (var h = 0; h < f[0].length; ++h) {
					var i = a[h];
					for (var j = 0; j < f.length; ++j) {
						var k = f[j][h];
						g[j][h] = babelHelpers["extends"]({}, k, {
							y0: i
						});
						i += k.y
					}
				}
				return g
			},
			getGutter: function(a, b) {
				a = b.areas.hoverBubbleStrokeWidth + n;
				return {
					bottom: a,
					left: a,
					right: a,
					top: a
				}
			}
		},
		getTotalYGivenX: function(a) {
			var b = r.getStackedData(this.props);
			b = b[b.length - 1];
			for (var c = 0; c < b.length; ++c)
				if (b[c].x === a) return q(b[c])
		},
		getOffsetX: function() {
			var a = b("SpectrumDataVisualization").getScaleX(this.props);
			return a.rangeBand ? a.rangeBand() / 2 : 0
		},
		formatDatum: function(a, c) {
			var d = this.props.titles,
				e = b("SpectrumDataVisualization").getScaleX(this.props),
				f = e.rangeBand ? e.rangeBand() : 0;
			e = {
				areaIndex: c,
				rect: {
					left: e(a.valueX),
					right: e(a.valueX) + f,
					top: a.top,
					bottom: a.bottom
				},
				target: this,
				title: d && d[c] || "",
				total: this.getTotalYGivenX(a.valueX),
				valueX: a.valueX,
				valueY: a.valueY,
				isPartial: a.isPartial
			};
			return e
		},
		handleEvent: function(a) {
			if (a.type != "mousemove") return;
			if (this.props.ignoreMouseEvents) return;
			var c = b("SpectrumDataVisualization").getScaleX(this.props);
			c = b("SpectrumUtilities").getOuterRange(c);
			if (a.x < c[0] || a.x > c[1]) return;
			c = this.findEdges(a.x, a.y);
			c.right < a.hitRegionRight && (a.hitRegionRight = c.right);
			c.left > a.hitRegionLeft && (a.hitRegionLeft = c.left);
			c.bottom < a.hitRegionBottom && (a.hitRegionBottom = c.bottom);
			c.top > a.hitRegionTop && (a.hitRegionTop = c.top);
			if (c.bestDatum.valueX != null && c.bestDatum.valueY != null) {
				c.bestDatum.isPartial = c.isPartial;
				var d = this.formatDatum(c.bestDatum, c.areaIndex);
				d.allData = c.allData.map(this.formatDatum, this);
				this.props.onRequestFocus && this.props.onRequestFocus(d);
				a.stopPropagation()
			}
		},
		findEdges: function(a, c) {
			var d = b("SpectrumDataVisualization").getScaleX(this.props),
				e = this.props.scaleY,
				f = r.getStackedData(this.props),
				g = null,
				h = {},
				i = [];

			function j(a) {
				return {
					bottom: e(a.y0),
					isPartial: a.isPartial,
					top: e(a.y0 + a.y),
					valueX: a.x,
					valueY: a.y
				}
			}

			function k(a) {
				function c(c, f) {
					function k(c, k, l, m) {
						k = b("SpectrumDataVisualization").getX(d, c.x);
						m = b("SpectrumDataVisualization").getX(d, l.x);
						var n = e(c.y0),
							o = e(l.y0),
							p = a(k, n, m, o);
						(p == 1 || p == 2 || p && f === 0) && (g = f, p == 1 || p == 3 ? (h = j(c), i[f] = h) : (h = j(l), i[f] = h));
						n = e(c.y0 + c.y);
						o = e(l.y0 + l.y);
						p = a(k, n, m, o);
						(p == 3 || p == 4) && (c.y || l.y) && (g = f, p == 3 ? (h = j(c), i[f] = h) : (h = j(l), i[f] = h))
					}
					l(c, k)
				}
				f.forEach(c)
			}
			a = m(a, c, k);
			a.areaIndex = g;
			a.bestDatum = h;
			a.top = h.top;
			a.bottom = h.bottom;
			a.allData = i;
			return a
		},
		shouldComponentUpdate: function(a) {
			return this.hasDataChanged(a) || this.hasFocusChanged(a) || this.hasDimensionsChanged(a)
		},
		hasHighlightDetailsChanged: function(a, b) {
			a = a.rect;
			b = b.rect;
			return a.left !== b.left || a.right !== b.right || a.top !== b.top || a.bottom !== b.bottom
		},
		getPartialBoxPath: function(a) {
			var c = b("SpectrumDataVisualization").getScaleX(this.props),
				d = this.props.scaleY,
				e = a.map(function(a, e) {
					e = null;
					var f = null;
					a.y != null && (e = d(a.y + a.y0), f = d(a.y0));
					return [b("SpectrumDataVisualization").getX(c, a.x), f, e]
				});

			function f(a, b) {
				return b <= 0 ? null : i(a[b], a[b - 1])
			}

			function g(a, b) {
				return b >= a.length - 1 ? null : i(a[b], a[b + 1])
			}

			function i(a, b) {
				if (a[1] == null || b[1] == null) return null;
				var c = (a[0] + b[0]) * .5,
					d = (a[1] + b[1]) * .5;
				a = (a[2] + b[2]) * .5;
				return [c, d, a]
			}
			var j = h();
			for (var k = 0; k < e.length; k++)
				if (a[k].isPartial) {
					var l = f(e, k),
						m = g(e, k),
						n = l ? l : e[k];
					j.moveTo(n[0], n[1]);
					var o;
					l && (o = e[k][0] - l[0], j.line(o, e[k][1] - l[1]));
					m ? (n = m[0] - e[k][0], j.line(n, m[1] - e[k][1]), j.line(0, m[2] - m[1]), j.line(-n, e[k][2] - m[2])) : j.line(0, e[k][2] - e[k][1]);
					l ? j.line(-o, l[2] - e[k][2]) : j.line(0, e[k][1] - e[k][2]);
					j.close()
				} return j
		},
		render: function() {
			var a = r.getStackedData(this.props),
				c = b("SpectrumDataVisualization").getScaleX(this.props),
				d = this.props.scaleY,
				e = this.props.offset || "zero",
				f = this.props.height,
				l = this.props.width,
				m = this.props.focus;
			m && m.target !== this && (m = null);
			var p = this.props.theme.areas,
				q = b("d3-old/scale/ordinal")().range(p.colors),
				s = this.getPartialBoxPath;

			function t(e, j) {
				var m = j < a.length - 1 ? .5 : 0,
					n = s(e);
				n = g.jsx(k, {
					d: n,
					fill: new(b("CSSBackgroundPattern.art"))(p.partialOverlayClass),
					x: 0,
					y: 0,
					width: l,
					height: f
				});
				var o = function(a) {
						return d(e[a].y0)
					},
					r = function(a) {
						return d(e[a].y0 + e[a].y) - m
					},
					t = function(a) {
						return b("SpectrumDataVisualization").getX(c, e[a].x)
					},
					u = h(),
					v = function(b, a) {
						var c;
						u.moveTo(t(b), r(b));
						for (c = b + 1; c < a; c++) u.lineTo(t(c), r(c));
						for (c = a - 1; c >= b; c--) u.lineTo(t(c), o(c));
						u.close()
					},
					w;
				for (var x = 0; x < e.length; x = w + 1) {
					for (w = x; w < e.length && e[w].y != null; w++);
					x + 1 < w && v(x, w)
				}
				return g.jsxs(i, {
					children: [g.jsx(k, {
						d: u,
						fill: q(j)
					}), n]
				}, j)
			}

			function u() {
				if (!m) return null;
				if (!p.hover) return null;
				var a = Math.round(m.rect.left),
					b = Math.round(m.rect.right),
					c = Math.round(m.rect.top),
					f = Math.round(m.rect.bottom),
					j = d.range();
				j = Math.round(Math.max(j[0], j[1]));
				var l = d.domain();
				l = Math.round(Math.min(l[0], l[1])) > 0 && e == "zero";
				var q = Math.round((a + b) / 2),
					r = h().moveTo((a + b) / 2, c).lineTo((a + b) / 2, f),
					s = h();
				(f != j || l) && (s = h().moveTo(a, j).lineTo(b, j));
				f - c > 8 || l ? (a = h().moveTo(q, c - n).arc(0, o, n).arc(0, -o, n).close(), b = h().moveTo(q, f - n).arc(0, o, n).arc(0, -o, n).close()) : (a = h().moveTo(q - n, c).arc(o, 0, n).lineTo(q + n, f).arc(-o, 0, n).close(), b = h());
				l && (b = h());
				return g.jsxs(i, {
					children: [g.jsx(k, {
						d: s,
						stroke: p.hover,
						strokeWidth: p.hoverBubbleStrokeWidth
					}), g.jsx(k, {
						d: r,
						stroke: p.hover,
						strokeWidth: p.hoveBarStrokeWidth
					}), g.jsx(k, {
						d: a,
						stroke: p.hover,
						fill: p.hoverFill,
						strokeWidth: p.hoverBubbleStrokeWidth
					}), g.jsx(k, {
						d: b,
						stroke: p.hover,
						fill: p.hoverFill,
						strokeWidth: p.hoverBubbleStrokeWidth
					})]
				})
			}
			var v = b("SpectrumDataVisualization").getClippingRectangleDimensions(this.props);
			return g.jsxs(i, {
				children: [g.jsx(j, {
					x: v.x,
					y: v.y,
					width: v.width,
					height: v.height,
					children: a.map(t)
				}), u()]
			})
		}
	});
	e.exports = r
}), null);