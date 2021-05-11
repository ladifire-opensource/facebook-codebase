__d("SpectrumYAxis", ["React", "ReactART", "SpectrumBaseStyleSheet", "SpectrumUtilities"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Group,
		i = a.Path,
		j = a.Shape,
		k = a.Text;
	c = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		c.getGutter = function(a, c, d, e) {
			a = e.tickFormatMaxLength != null ? e.tickFormatMaxLength : 45;
			d = c.yAxis.fontSize / b("SpectrumBaseStyleSheet").yAxis.fontSize;
			a = a * d;
			e = {
				bottom: 20,
				left: a,
				top: 20
			};
			c.yAxis.showRightTicks && (e.right = a);
			return e
		};
		c.getTickCount = function(a) {
			var c = a.theme;
			a = b("SpectrumUtilities").getOuterRange(a.scaleY);
			return Math.round(Math.abs(a[0] - a[1]) / c.yAxis.distanceBetweenTicks)
		};
		c.getAdjustedScaleY = function(a) {
			var b = a.scaleY;
			return !b.nice ? b.copy() : b.copy().nice(c.getTickCount(a))
		};
		var d = c.prototype;
		d.shouldComponentUpdate = function(a) {
			return this.props.scaleY !== a.scaleY
		};
		d.render = function() {
			var a = this.props.theme,
				d = a.yAxis,
				e = a.yAxis.labelColor,
				f = a.yAxis.lineColor,
				l = a.yAxis.baseLineColor || f,
				m = this.props.scaleY,
				n = c.getTickCount(this.props),
				o = 0,
				p = a.yAxis.tickPadding || 5,
				q = b("SpectrumUtilities").getOuterRange(this.props.scaleX),
				r = q == null ? 0 : q[0],
				s = q[q.length - 1],
				t = q == null ? 5 : q[q.length - 1] - r;
			q = m.ticks ? m.ticks(n) : m.domain();
			var u = m.tickFormat ? m.tickFormat(q) : String;

			function v(a, b) {
				a.moveTo(r - o, Math.round(m(b)) + .5).line(t + o + o, 0)
			}

			function w(b, c) {
				if (b === 0 && this.props.hideBaseLine) return null;
				var f = [g.jsx(k, {
					alignment: "right",
					fill: e,
					font: d,
					x: r - o - p,
					y: m(b) - d.fontSize / 2,
					children: u(b)
				}, "left" + c)];
				a.yAxis.showRightTicks && f.push(g.jsx(k, {
					alignment: "left",
					fill: e,
					font: d,
					x: s + p,
					y: m(b) - d.fontSize / 2,
					children: u(b)
				}, "right" + c));
				return f
			}
			var x = i(),
				y = i();
			q.forEach(function(a, b) {
				a === 0 ? this.props.hideBaseLine || v(y, a) : v(x, a)
			}, this);
			return g.jsxs(h, {
				children: [g.jsx(j, {
					d: x,
					stroke: f
				}), g.jsx(j, {
					d: y,
					stroke: l
				}), q.map(w, this)]
			})
		};
		return c
	}(g.Component);
	e.exports = c
}), null);