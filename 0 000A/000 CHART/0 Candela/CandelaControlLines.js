__d("CandelaControlLines.react", ["CandelaConstants", "CandelaTheme", "CandelaUtils", "React", "ReactART", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("ReactART").Path,
		j = b("ReactART").Shape,
		k = b("CandelaConstants").Orientation,
		l = b("CandelaUtils").art.drawDashedPath;
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = this.props,
				b = a.height,
				c = a.orientation,
				d = a.style,
				e = a.values,
				f = a.variableName,
				m = a.width,
				n = a.x,
				o = a.y;
			a = this.context;
			var p = a.scales;
			a = a.theme;
			a = babelHelpers["extends"]({}, a.getStyle("controlline:" + c), d);
			if (a.visibility !== "visible") return null;
			var q = a.opacity,
				r = a.stroke,
				s = a.strokeDasharray,
				t = a.strokeLinecap,
				u = a.strokeWidth,
				v = c === k.HORIZONTAL ? p[f].set("output", [o + b, o]) : p[f].set("output", [n, n + m]),
				w = [];
			e.forEach(function(a, d) {
				var e, f, h, p;
				c === k.HORIZONTAL ? (e = n, h = p = v.convert(a), f = n + m) : (e = f = v.convert(a), h = o, p = o + b);
				a = i();
				s ? l(a, s, {
					x: e,
					y: h
				}, {
					x: f,
					y: p
				}) : a.moveTo(e, h).lineTo(f, p);
				w.push(g.jsx(j, {
					d: a,
					opacity: q,
					stroke: r,
					strokeCap: t,
					strokeWidth: u
				}, c + "-controlline-" + d))
			});
			return g.jsx(h, {
				children: w
			})
		};
		return b
	}(g.Component);
	a.contextTypes = {
		scales: (c = b("prop-types")).object,
		theme: c.instanceOf(b("CandelaTheme"))
	};
	a.propTypes = {
		height: c.number,
		width: c.number,
		orientation: c.oneOf([k.HORIZONTAL, k.VERTICAL]).isRequired,
		style: c.object,
		variableName: c.string.isRequired,
		values: c.arrayOf(c.any).isRequired
	};
	a.defaultProps = {
		orientation: k.HORIZONTAL
	};
	e.exports = a
}), null);