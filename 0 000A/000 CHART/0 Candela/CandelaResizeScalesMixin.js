__d("CandelaResizeScalesMixin", ["invariant", "immutable", "nullthrows"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("immutable").OrderedSet;

	function i(a, b, c, d) {
		typeof a === "string" ? (d[a] && g(0, 5758, a), d[a] = c[a].merge({
			output: b
		})) : d = a.reduce(function(a, d) {
			return i(d, b, c, a)
		}, d);
		return d
	}

	function j(a, b, c, d, e, f, g, j) {
		var k = g;
		g = g + f;
		f = j;
		j = j + a;
		a = {};
		if (c != null) {
			k = h(b ? [g, k] : [k, g]);
			a = i(c, k, e, a)
		}
		if (d != null) {
			g = h(b ? [f, j] : [j, f]);
			a = i(d, g, e, a)
		}
		return a
	}
	a = {
		scales: {},
		UNSAFE_componentWillMount: function() {
			var a = this.props,
				b = a.height,
				c = a.invert,
				d = a.plotX,
				e = a.plotY,
				f = a.width,
				g = a.x;
			a = a.y;
			var h = this.context.scales;
			b = j(b, c, d, e, h, f, g, a);
			this.scales = b
		},
		UNSAFE_componentWillUpdate: function(a, c, d) {
			c = a.height;
			var e = a.invert,
				f = a.plotX,
				g = a.plotY,
				h = a.width,
				i = a.x;
			a = a.y;
			d = b("nullthrows")(d);
			d = d.scales;
			c = j(c, e, f, g, d, h, i, a);
			Object.assign(this.scales, c)
		}
	};
	e.exports = a
}), null);