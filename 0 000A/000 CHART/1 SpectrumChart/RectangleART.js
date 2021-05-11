__d("Rectangle.art", ["ReactART", "prop-types", "react"], (function(a, b, c, d, e, f) {
	var g, h = g || b("react"),
		i = b("ReactART").Shape,
		j = b("ReactART").Path;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = this.props.width,
				b = this.props.height,
				c = this.props.radius ? this.props.radius : 0,
				d = this.props.radiusTopLeft ? this.props.radiusTopLeft : c,
				e = this.props.radiusTopRight ? this.props.radiusTopRight : c,
				f = this.props.radiusBottomRight ? this.props.radiusBottomRight : c;
			c = this.props.radiusBottomLeft ? this.props.radiusBottomLeft : c;
			var g = j();
			a < 0 && (g.move(a, 0), a = -a);
			b < 0 && (g.move(0, b), b = -b);
			d < 0 && (d = 0);
			e < 0 && (e = 0);
			f < 0 && (f = 0);
			c < 0 && (c = 0);
			d + e > a && (d = 0, e = 0);
			c + f > a && (c = 0, f = 0);
			d + c > b && (d = 0, c = 0);
			e + f > b && (e = 0, f = 0);
			g.move(0, d);
			d > 0 && g.arc(d, -d);
			g.line(a - (e + d), 0);
			e > 0 && g.arc(e, e);
			g.line(0, b - (e + f));
			f > 0 && g.arc(-f, f);
			g.line(-a + (f + c), 0);
			c > 0 && g.arc(-c, -c);
			g.line(0, -b + (c + d));
			return h.jsx(i, babelHelpers["extends"]({}, this.props, {
				d: g
			}))
		};
		return b
	}(h.Component);
	a.propTypes = {
		width: b("prop-types").number.isRequired,
		height: b("prop-types").number.isRequired,
		radius: b("prop-types").number,
		radiusTopLeft: b("prop-types").number,
		radiusTopRight: b("prop-types").number,
		radiusBottomRight: b("prop-types").number,
		radiusBottomLeft: b("prop-types").number
	};
	e.exports = a
}), null);