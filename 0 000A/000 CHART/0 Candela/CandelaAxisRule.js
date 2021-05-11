__d("CandelaAxisRule.react", ["CandelaConstants", "CandelaStyles", "React", "Rectangle.art"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.fill,
				d = a.height,
				e = a.left,
				f = a.stroke,
				h = a.strokeLinecap,
				i = a.strokeWidth,
				j = a.top;
			a = a.width;
			return g.jsx(b("Rectangle.art"), {
				fill: c,
				height: d,
				stroke: f,
				strokeCap: h,
				strokeWidth: i,
				width: a,
				x: e,
				y: j
			})
		};
		return c
	}(g.Component);
	e.exports = a;
	a.propTypes = b("CandelaStyles").getPropTypes((c = b("CandelaConstants")).Style.BOTTOM, c.Style.FILL, c.Style.HEIGHT, c.Style.LEFT, c.Style.MARGIN, c.Style.RIGHT, c.Style.STROKE, c.Style.STROKE_LINECAP, c.Style.STROKE_WIDTH, c.Style.TOP, c.Style.WIDTH)
}), null);