__d("SpectrumLines", ["Circle.art", "ReactART", "SpectrumDataVisualization", "SpectrumGuide.react", "SpectrumUtilities", "createReactClass_DEPRECATED", "d3-old/scale/ordinal", "prop-types", "react"], (function(a, b, c, d, e, f) {
	var g, h = g || b("react"),
		i = b("ReactART").Path,
		j = b("ReactART").Group,
		k = b("ReactART").ClippingRectangle,
		l = b("ReactART").Shape,
		m = b("SpectrumUtilities").forEachVector,
		n = b("SpectrumUtilities").compose,
		o = b("SpectrumUtilities").findEdges,
		p = 2,
		q = b("createReactClass_DEPRECATED")({
			displayName: "SpectrumLines",
			mixins: [b("SpectrumDataVisualization").Mixin],
			propTypes: {
				useClosestXAxisTooltip: b("prop-types").bool
			},
			statics: {
				getExtentY: function(a) {
					var c = b("SpectrumDataVisualization").getDefaultExtentY(a);
					if (a.nonZeroMinimum === "allowed") return c;
					c[0] = Math.min(c[0], 0);
					return c
				},
				getExtentX: function(a) {
					return b("SpectrumDataVisualization").getDefaultExtentX(a)
				},
				getMarkerRadius: function(a) {
					return a.highlightWidths[0] + p
				},
				getGutter: function(a, b) {
					a = q.getMarkerRadius(b.lines);
					return {
						bottom: a,
						left: a,
						right: a,
						top: a
					}
				}
			},
			getDefaultProps: function() {
				return {
					useClosestXAxisTooltip: !1
				}
			},
			handleEvent: function(a) {
				var c = null;
				if (a.type === "mousemove") c = this.props.onRequestFocus;
				else if (a.type === "click") c = this.props.onClick;
				else return;
				if (this.props.ignoreMouseEvents) return;
				var d = this.findEdges(a.x, a.y);
				d.right < a.hitRegionRight && (a.hitRegionRight = d.right);
				d.left > a.hitRegionLeft && (a.hitRegionLeft = d.left);
				d.bottom < a.hitRegionBottom && (a.hitRegionBottom = d.bottom);
				d.top > a.hitRegionTop && (a.hitRegionTop = d.top);
				if (d.bestDatum.valueX != null && (this.props.useClosestXAxisTooltip || d.bestDistanceToPoint < 20)) {
					var e = this.props.titles,
						f = b("SpectrumDataVisualization").getScaleX(this.props),
						g = f.rangeBand ? f.rangeBand() : 0;
					f = {
						rect: {
							left: f(d.bestDatum.valueX),
							right: f(d.bestDatum.valueX) + g,
							top: this.props.scaleY(d.bestDatum.valueY),
							bottom: this.props.scaleY(d.bestDatum.valueY)
						},
						target: this,
						title: e && e[d.lineIndex] || "",
						lineIndex: d.lineIndex
					};
					f = babelHelpers["extends"]({}, f, d.bestDatum);
					c && c(f);
					a.stopPropagation()
				} else c && c(null)
			},
			findEdges: function(a, c) {
				var d = b("SpectrumDataVisualization").getValueXAccessor(this.props),
					e = b("SpectrumDataVisualization").getValueYAccessor(this.props),
					f = b("SpectrumDataVisualization").getScaleX(this.props),
					g = this.props.scaleY,
					h = this.props.partialValue || function() {},
					i = function(a, c) {
						return b("SpectrumDataVisualization").getX(f, d(a, c))
					},
					j = n(g, e),
					k = this.props.data,
					l = null,
					p = {},
					q = null;

				function r(a, b) {
					return {
						dataPoint: a,
						index: b,
						isPartial: h(a, b),
						valueX: d(a, b),
						valueY: e(a, b)
					}
				}

				function s(b) {
					function d(d, e) {
						function f(d, f, g, h) {
							var k = i(d, f),
								m = j(d, f),
								n = i(g, h),
								o = j(g, h),
								s = b(k, m, n, o);
							s && (l = e, s == 1 || s == 3 ? (p = r(d, f), k -= a, m -= c, q = Math.sqrt(k * k + m * m)) : (p = r(g, h), n -= a, o -= c, q = Math.sqrt(n * n + o * o)))
						}
						m(d, f)
					}
					k.forEach(d)
				}
				g = o(a, c, s);
				g.lineIndex = l;
				g.bestDatum = p;
				g.bestDistanceToPoint = q;
				return g
			},
			shouldComponentUpdate: function(a) {
				return this.hasDataChanged(a) || this.hasFocusChanged(a) || this.hasDimensionsChanged(a)
			},
			hasHighlightDetailsChanged: function(a, b) {
				return a.valueX !== b.valueX || a.valueY !== b.valueY || a.lineIndex !== b.lineIndex
			},
			render: function() {
				if (!this.props.data.length) return h.jsx(j, {});
				var a = b("SpectrumDataVisualization").getValueXAccessor(this.props),
					c = b("SpectrumDataVisualization").getValueYAccessor(this.props),
					d = this.props.partialValue || function() {},
					e = b("SpectrumDataVisualization").getScaleX(this.props),
					f = this.props.scaleY,
					g = function(c, d) {
						return b("SpectrumDataVisualization").getX(e, a(c, d))
					},
					m = n(f, c);
				f = this.props.data;
				if (!Array.isArray(f) || !Array.isArray(f[0])) throw new Error("Invalid data shape provided to SpectrumLines. A two dimensional array was expected.");
				var o = this.uid,
					r = this.props.theme.lines,
					s = f.some(function(a) {
						return a.some(function(b, c) {
							return c > 0 && Math.abs(g(b, c) - g(a[c - 1], c - 1)) < q.getMarkerRadius(r)
						})
					});
				s && (r.markers = !1);
				var t = r.colors.copy ? r.colors : b("d3-old/scale/ordinal")().range(r.colors),
					u = r.widths.copy ? r.widths : b("d3-old/scale/ordinal")().range(r.widths),
					v = this.props.focus;
				v && v.target != null && v.target !== this && (v = null);
				var w = r.highlightWidths.copy ? r.highlightWidths : b("d3-old/scale/ordinal")().range(r.highlightWidths),
					x;
				r.markerWidths ? x = r.markerWidths.copy ? r.markerWidths : b("d3-old/scale/ordinal")().range(r.markerWidths) : x = u;

				function y(b, e) {
					var f = b.map(function(a, b) {
							var d = null;
							c(a, b) != null && (d = m(a, b));
							return [g(a, b), d]
						}),
						k = !1;
					v && (v.lineIndex === e ? k = !0 : v.target == null && (k = b.some(function(d, b) {
						return v.valueX == a(d, b) && v.valueY == c(d, b)
					})));
					var n = t(o + e);
					v && !k && (n = r.fadeOutColor);

					function p(a, b) {
						return b <= 0 ? null : s(a[b], a[b - 1])
					}

					function q(a, b) {
						return b >= a.length - 1 ? null : s(a[b], a[b + 1])
					}

					function s(a, b) {
						if (a[1] == null || b[1] == null) return null;
						var c = (a[0] + b[0]) * .5;
						a = (a[1] + b[1]) * .5;
						return [c, a]
					}
					k = i();
					var w = i();
					for (var x = 0; x < f.length; x++) {
						var y = p(f, x),
							z = q(f, x),
							A = d(b[x], x) ? k : w,
							B = [];
						y && B.push(y);
						B.push(f[x]);
						z && B.push(z);
						for (var y = 0; y < B.length; y++) {
							z = B[y];
							y === 0 ? A.moveTo(z[0], z[1]) : A.lineTo(z[0], z[1])
						}
					}
					return h.jsxs(j, {
						children: [h.jsx(l, {
							d: w,
							stroke: n,
							strokeWidth: u(o + e)
						}), h.jsx(l, {
							d: k,
							stroke: n,
							strokeWidth: u(o + e),
							strokeDash: r.partialStrokeDashes
						})]
					}, e)
				}

				function z(d, f) {
					function i(d, i) {
						var k = b("SpectrumUtilities").getOuterRange(e);
						if (g(d, i) < k[0] || g(d, i) > k[1]) return;
						k = a(d, i);
						var l = c(d, i);
						if (k == null || l == null) return null;
						l = v && v.valueX + "" == k + "" && v.valueY + "" == l + "";
						if (!l && !r.markers) return null;
						var n = l ? w(o + i) : x(o + i);
						if (!n) return null;
						var q = t(o + f),
							s = r.markerColor;
						v && v.lineIndex != f && (q = r.fadeOutColor);
						this.props.focus && this.props.focus.target !== this && (q = s = r.fadeOutColor);
						l = l && this.props.showGuide ? h.jsx(b("SpectrumGuide.react"), {
							scaleX: this.props.scaleX,
							scaleY: this.props.scaleY,
							theme: this.props.theme,
							x: k
						}) : null;
						return h.jsxs(j, {
							children: [l, h.jsx(b("Circle.art"), {
								radius: p,
								stroke: q,
								strokeWidth: n * 2,
								x: g(d, i),
								y: m(d, i)
							}), h.jsx(b("Circle.art"), {
								radius: p,
								fill: s,
								x: g(d, i),
								y: m(d, i)
							})]
						}, i)
					}
					return d.map(i, this)
				}
				s = b("SpectrumDataVisualization").getClippingRectangleDimensions(this.props);
				return h.jsxs(j, {
					children: [h.jsx(k, {
						x: s.x,
						y: 0,
						width: s.width,
						height: this.props.height,
						children: f.map(y)
					}), f.map(z, this)]
				})
			}
		});
	e.exports = q
}), null);