__d("SpectrumVerticalLines", ["React", "ReactART", "SpectrumConstants", "SpectrumUtilities"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("ReactART").Path,
		j = b("ReactART").Shape;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.shouldComponentUpdate = function(a) {
			return this.props.scaleY !== a.scaleY || this.props.scaleX !== a.scaleX
		};
		d.render = function() {
			var a = this.props.theme;
			a = [a.xAxis.lineColor, a.xAxis.lineColor];
			var c = this.props.scaleX,
				d = this.props.ticks || b("SpectrumConstants").vlines.defaultLineCount,
				e = null,
				f = b("SpectrumUtilities").getOuterRange(this.props.scaleY),
				k = f[1],
				l = f[0];
			e == null ? f = c.ticks ? c.ticks(d) : c.domain() : f = e;
			var m = new i(),
				n = new i();

			function o(a, b, d) {
				(b % 4 ? n : m).moveTo(c(a), k).line(0, l - k)
			}
			f.forEach(o);
			return g.jsxs(h, {
				children: [g.jsx(j, {
					d: m,
					stroke: a[0],
					opacity: .5
				}), g.jsx(j, {
					d: n,
					stroke: a[1],
					opacity: .25
				})]
			})
		};
		return c
	}(g.Component);
	e.exports = a
}), null);