__d("CandelaGuideLine.react", ["CandelaConstants", "CandelaStyles", "CandelaUtils", "React", "ReactART"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Path,
		i = b("ReactART").Shape,
		j = b("CandelaUtils").art.drawDashedPath;
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = this.props,
				b = a.bottom,
				c = a.left,
				d = a.right,
				e = a.stroke,
				f = a.strokeDasharray,
				k = a.strokeLinecap,
				l = a.strokeWidth;
			a = a.top;
			if (c === d && a === b) return g.jsx(i, {});
			var m = h();
			f ? j(m, f, {
				x: c,
				y: a
			}, {
				x: d,
				y: b
			}) : m.moveTo(c, a).lineTo(d, b);
			return g.jsx(i, {
				d: m,
				stroke: e,
				strokeCap: k,
				strokeWidth: l
			})
		};
		return b
	}(g.Component);
	e.exports = a;
	a.propTypes = b("CandelaStyles").getPropTypes((c = b("CandelaConstants")).Style.BOTTOM, c.Style.LEFT, c.Style.RIGHT, c.Style.STROKE, c.Style.STROKE_DASHARRAY, c.Style.STROKE_LINECAP, c.Style.STROKE_WIDTH, c.Style.TOP);
	a.className = "line"
}), null);