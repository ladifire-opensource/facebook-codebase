__d("CandelaAxisTitle.react", ["CandelaConstants", "CandelaStyles", "React", "ReactART"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Text;
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = this.props,
				b = a.fontFamily,
				c = a.fontSize,
				d = a.fontStyle,
				e = a.fontWeight,
				f = a.paddingBottom,
				i = a.paddingLeft,
				j = a.paddingRight;
			a = a.paddingTop;
			var k = this.props,
				l = k.color,
				m = k.content,
				n = k.left,
				o = k.rotation,
				p = k.textAlign;
			k = k.top;
			if (!m) return null;
			n += i - j;
			k += a - f;
			return g.jsx(h, {
				alignment: p,
				fill: l,
				font: {
					fontFamily: b,
					fontSize: c,
					fontStyle: d,
					fontWeight: e
				},
				rotation: o,
				x: n,
				y: k,
				children: m
			})
		};
		return b
	}(g.Component);
	e.exports = a;
	a.propTypes = b("CandelaStyles").getPropTypes((c = b("CandelaConstants")).Style.COLOR, c.Style.CONTENT, c.Style.FONT, c.Style.LEFT, c.Style.MARGIN, c.Style.PADDING, c.Style.TEXT_ALIGN, c.Style.TOP, c.Style.TRANSFORM)
}), null);