__d("SpectrumComparableColumns", ["ReactART", "Rectangle.art", "SpectrumDataVisualization", "SpectrumUtilities", "createReactClass_DEPRECATED", "d3-old/scale/ordinal", "react"], (function(a, b, c, d, e, f) {
	var g, h = g || b("react"),
		i = b("ReactART").Path,
		j = b("ReactART").Group,
		k = b("ReactART").Shape,
		l = b("ReactART").Text,
		m = b("SpectrumUtilities").compose,
		n = 3,
		o = 60;
	a = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumComparableColumns",
		mixins: [b("SpectrumDataVisualization").Mixin],
		statics: {
			getExtentY: function(a) {
				a = b("SpectrumDataVisualization").getExtentHelper(a, b("SpectrumDataVisualization").getValueYAccessor(a));
				a[0] = Math.min(0, a[0]);
				return a
			},
			getGutter: function() {
				return {
					top: 20
				}
			}
		},
		handleEvent: function(a) {
			a.type == "mouseleave" && this.props.onHighlightColumn && this.props.onHighlightColumn(-1);
			if (a.type === "mousemove" || a.type === "click") {
				if (!this.props.data.length) return;
				var c = this.props.scaleY.range(),
					d = Math.min(c[0], c[1]);
				c = Math.max(c[0], c[1]);
				if (a.y < d || a.y > c) {
					this.props.onRequestFocus && this.props.onRequestFocus(null);
					return
				}
				d = b("SpectrumDataVisualization").getValueXAccessor(this.props);
				c = b("SpectrumDataVisualization").getValueYAccessor(this.props);
				var e = this.props.scaleX,
					f = this.props.scaleY,
					g = m(e, d),
					h = m(f, c);
				f = f(0);
				e = e.rangeBand ? e.rangeBand() : 1;
				var i = this.props.data[this.props.data.length - 1];
				for (var j = 0, k = i.length; j < k; j++) {
					var l = i[j],
						n = g(l, j),
						o = h(l, j);
					if (a.x >= n && a.x < n + e) {
						var p = this.props.titles;
						n = {
							rect: {
								left: n,
								right: n + e,
								top: o,
								bottom: f
							},
							target: this,
							label: this.props.label,
							title: p && p[this.props.data.length - 1],
							barIndex: j,
							valueX: d(l, j),
							valueY: c(l, j)
						};
						this.props.data.length > 1 && (n.comparisonValueY = c(this.props.data[0][j], j), n.comparisonTitle = p && p[0]);
						if (n.valueY == null && n.comparisonValueY == null) return;
						if (a.type === "click" && this.props.onClick) {
							a.stopPropagation();
							this.props.onClick(n);
							return
						}
						this.props.onHighlightColumn && this.props.onHighlightColumn(n.barIndex);
						this.props.onRequestFocus && this.props.onRequestFocus(n);
						a.stopPropagation();
						return
					}
				}
				this.props.onRequestFocus && this.props.onRequestFocus(null)
			}
		},
		shouldComponentUpdate: function(a) {
			return this.hasDataChanged(a) || this.hasFocusChanged(a) || this.hasDimensionsChanged(a)
		},
		hasHighlightDetailsChanged: function(a, b) {
			return a.barIndex !== b.barIndex
		},
		render: function() {
			if (!this.props.data.length) return h.jsx(j, {});
			var a = b("SpectrumDataVisualization").getValueXAccessor(this.props),
				c = b("SpectrumDataVisualization").getValueYAccessor(this.props),
				d = this.props.scaleX,
				e = this.props.scaleY,
				f = m(d, a),
				g = m(e, c),
				p = d.rangeBand ? d.rangeBand() : 1,
				q = this.props.theme.columns,
				r = e(0),
				s = p * q.innerMargin,
				t = r > e(1),
				u = this.props.data,
				v = this.uid,
				w = q.colors.copy ? q.colors : b("d3-old/scale/ordinal")().range(q.colors),
				x;

			function y(c, d, e) {
				if (a(d, e) == null) return;
				var i = Math.round(f(d, e) + s * c),
					j = g(d, e),
					k = Math.round(p);
				if (c) {
					d = i - Math.round(f(d, e));
					k = Math.round(p - d * 2)
				}
				return h.jsx(b("Rectangle.art"), {
					width: k,
					height: j - r,
					y: r,
					x: i,
					radiusTopLeft: t ? n : 0,
					radiusTopRight: t ? n : 0,
					radiusBottomLeft: t ? 0 : n,
					radiusBottomRight: t ? 0 : n,
					fill: w(v + c)
				}, "bar" + e)
			}

			function z(a, b) {
				var c = [];
				for (var d = 0; d < a.length; d++) c.push(y(b, a[d], d));
				return c
			}

			function A(a, b) {
				x = i();
				y(b, a[E.barIndex], E.barIndex);
				return h.jsx(k, {
					d: x,
					fill: w(v + b)
				}, b)
			}
			var B = e.tickFormat();

			function C(b, d) {
				var g = c(b, d);
				if (g == null) return null;

				function i(a) {
					return c(a[d], d)
				}
				var j = q.fontSize + q.labelMargin * 2;
				b = Math.round(f(b, d) + p / 2);
				var a = q.outerLabelColor,
					k = p * (1 + s);
				if (k < o) return;
				var m, n;
				u.length > 1 && (m = e(Math.max.apply(null, u[1].filter(function(a) {
					return a !== null
				}).map(i))), k = e(Math.max.apply(null, u[0].filter(function(a) {
					return a !== null
				}).map(i))), n = Math.abs(m - k));
				n > j ? k = m : k = e(Math.max.apply(null, u.map(i)));
				t ? k -= q.fontSize + q.labelMargin : k += q.labelMargin;
				return h.jsx(l, {
					alignment: "center",
					fill: a,
					font: q,
					x: b,
					y: k,
					children: B(g)
				}, d)
			}

			function D(a, b) {
				return a.map(C)
			}
			d = null;
			var E = this.props.focus;
			if (E && E.target == this && q.fadeOutOpacity !== 1) {
				var F = u[u.length - 1];
				d = h.jsxs(j, {
					children: [u.map(A), C(F[E.barIndex], E.barIndex)]
				})
			}
			A = E ? q.fadeOutOpacity : 1;
			return h.jsxs(j, {
				children: [h.jsxs(j, {
					opacity: A,
					children: [u.map(z), this.props.hideLabels ? null : D(u[u.length - 1], u.length - 1)]
				}), d]
			})
		}
	});
	e.exports = a
}), null);