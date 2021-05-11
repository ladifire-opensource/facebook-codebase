__d("SpectrumXAxis", ["React", "ReactART", "SpectrumBaseStyleSheet", "SpectrumConstants", "SpectrumUtilities", "getObjectValues", "keyMirror", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Group,
		i = a.Path,
		j = a.Shape,
		k = a.Text,
		l = b("keyMirror")({
			VERTICAL: null,
			HORIZONTAL: null
		});
	c = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		c.getGutter = function(a, c, d, e) {
			e = d.tickFormatMaxLength || 0;
			d = c.xAxis.fontSize / b("SpectrumBaseStyleSheet").xAxis.fontSize;
			e = e * d;
			a.secondaryTicks && (e = e * 2);
			d = {
				middle: 25,
				left: e,
				right: e
			};
			e = a.location === "top" ? "top" : "bottom";
			c = c.xAxis.minLabelGutter || 0;
			d[e] = Math.max(c, a.secondaryTicks ? 45 : 20);
			return d
		};
		var d = c.prototype;
		d.shouldComponentUpdate = function(a) {
			return this.props.scaleX !== a.scaleX
		};
		d.render = function() {
			var a = this.props.alignToGutter,
				c = this.props.theme,
				d = c.xAxis,
				e = c.xAxis.labelColor,
				f = c.xAxis.axisLineColor,
				m = c.xAxis.lineColor,
				n = this.props.scaleX,
				o = this.props.ticks || b("SpectrumConstants").xAxis.defaultTickCount,
				p = b("SpectrumConstants").xAxis.defaultTickSize,
				q = c.xAxis.tickPadding || b("SpectrumConstants").xAxis.defaultTickPadding,
				r = null,
				s = null,
				t = this.props.labelOrientation,
				u = c.xAxis.minLabelGutter || 0,
				v = Math.max(u, this.props.secondaryTicks ? 45 : 20),
				w = 0;
			t === l.VERTICAL && (w = -90);
			u = b("SpectrumUtilities").getOuterRange(this.props.scaleY);
			var x = u[1];
			u = u[0];
			var y = this.props.location,
				z = y === "top" ? x : u;
			(y === "top" || x > u) && (p = -p, q = -q);
			var A = b("SpectrumUtilities").getOuterRange(n);
			if (A) {
				x = Math.abs(A[1] - A[0]);
				var B = d.fontSize * 3.25;
				typeof o === "number" && o > x / B && (o = Math.floor(x / B))
			}
			s == null && (s = n.tickFormat ? n.tickFormat(o) : String);
			r == null ? u = n.ticks ? n.ticks(o) : n.domain() : u = r;
			var C;
			this.props.secondaryTicks && n.secondaryTicks ? (C = n.secondaryTicks(o), (!C.length || n(C[0]) > A[0] + B * 3) && C.unshift(n.domain()[0])) : C = null;
			x = this.props.disableLines;
			var D = !!s.bucketTicks || s.bucketTicks !== !1 && !!n.rangeBand,
				E = C && s.primary || s,
				F = C && s.secondary || s,
				G = n.rangeBand ? n.rangeBand() : 0,
				H = new i();

			function I(a, b, c) {
				function d(a) {
					return a < A[0] || a > A[A.length - 1] ? !1 : !0
				}
				if (D) {
					if (b === 0 && c.length > 1) {
						var e = n(c[b + 1]);
						if (n(a) + G == e) {
							e = n(a) + .5;
							d(e) && H.moveTo(e, z).line(0, p)
						}
					} else if (b > 0) {
						c = n(c[b - 1]);
						e = (c + G + n(a)) / 2 - .5;
						d(e) && H.moveTo(e, z).line(0, p)
					}
				} else H.moveTo(n(a), z).line(0, p)
			}

			function J() {
				if (!G) return null;
				H.moveTo(A[A.length - 1] - .5 + G, z).line(0, p)
			}

			function K(a, b, c) {
				function f(b) {
					return +b == +a
				}
				var h = n(a);
				D && (h += G * .5);
				h += N();
				if (C && C.some(f)) return null;
				h = Math.max(n.tickFormatMaxLength || 0, h);
				if (h > A[A.length - 1]) return null;
				f = O(!0);
				y === "top" && (f *= -1);
				return g.jsx(k, {
					alignment: c,
					fill: e,
					font: d,
					rotation: w,
					x: h,
					y: z + f,
					children: E(a)
				}, b)
			}

			function L() {
				if (t === l.HORIZONTAL) return "center";
				else if (y === "top") return "left";
				else return "right"
			}

			function M() {
				if (t === l.HORIZONTAL) return "left";
				else if (y === "top") return "right";
				else return "left"
			}

			function N() {
				return t === l.VERTICAL ? -.5 * d.fontSize : 0
			}

			function O(b) {
				var e = Math.abs(p),
					f = Math.abs(q),
					g = v - e,
					h = C ? 3 : 2;
				g = g / h;
				if (t === l.VERTICAL)
					if (b) return e + f;
					else return v - f;
				else if (b)
					if (a) {
						b = c.gutter.middle;
						b -= d.fontSize * 2 + e;
						b /= 2;
						return e + f + b
					} else {
						f = y === "top" ? d.fontSize / h : -1 * (h - 1) * d.fontSize / h;
						return e + g + f
					}
				else {
					b = y === "top" ? 2 * d.fontSize / h : -1 * d.fontSize / h;
					return e + g * 2 + b
				}
			}

			function P(a) {
				a = n(a) + .5;
				if (a < A[0]) return;
				var b = Math.abs(p);
				b = v - b;
				b = b / 3;
				b = Math.ceil(b * 2 / 4);
				var c = y === "top" ? -2 : 2;
				H.moveTo(a, z);
				for (var a = 0; a < b; a++) H.move(0, c).line(0, c)
			}

			function Q(a, b, c) {
				var f = F(a).toUpperCase(),
					h = O(!1);
				y === "top" && (h *= -1);
				return g.jsx(k, {
					alignment: c,
					fill: e,
					font: d,
					rotation: w,
					x: n(a) + Math.abs(q * 2) + N(),
					y: z + h,
					children: f
				}, b)
			}
			r = null;
			x || (u.forEach(I), C && C.forEach(P), J(), r = g.jsx(j, {
				d: H,
				stroke: m
			}));
			o = i().moveTo(A[0], z + .5).lineTo(A[1], z + .5);
			var R = L();
			s = u.map(function(a, b) {
				return K(a, b, R)
			}, u);
			var S = M();
			x = C ? C.map(function(a, b) {
				return Q(a, b, S)
			}, C) : null;
			return g.jsxs(h, {
				children: [c.xAxis.baseline ? g.jsx(j, {
					d: o,
					stroke: f
				}) : null, r, s, x]
			})
		};
		return c
	}(g.Component);
	c.propTypes = {
		alignToGutter: b("prop-types").bool,
		location: b("prop-types").oneOf(["top", "bottom"]),
		labelOrientation: b("prop-types").oneOf(b("getObjectValues")(l))
	};
	c.defaultProps = {
		labelOrientation: l.HORIZONTAL,
		location: "bottom"
	};
	c.Orientation = l;
	e.exports = c
}), null);