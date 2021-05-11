__d("CandelaDoubleCircularPoint.react", ["cssVar", "CandelaConstants", "CandelaStyles", "Circle.art", "React", "ReactART"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("ReactART").Group;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.fill,
				d = a.left,
				e = a.opacity,
				f = a.radius,
				g = a.stroke,
				j = a.strokeWidth;
			a = a.top;
			return !c && !g ? h.jsx(i, {}) : h.jsxs(i, {
				children: [h.jsx(b("Circle.art"), {
					fill: c,
					opacity: e,
					radius: f,
					stroke: g,
					strokeWidth: j,
					x: d,
					y: a
				}), h.jsx(b("Circle.art"), {
					opacity: e,
					radius: f - 1,
					stroke: "#FFFFFF",
					strokeWidth: "1",
					x: d,
					y: a
				})]
			})
		};
		return c
	}(h.Component);
	e.exports = a;
	a.propTypes = b("CandelaStyles").getPropTypes((c = b("CandelaConstants")).Style.FILL, c.Style.OPACITY, c.Style.RADIUS, c.Style.STROKE, c.Style.STROKE_DASHARRAY, c.Style.STROKE_LINECAP, c.Style.STROKE_WIDTH);
	a.className = "point"
}), null);