__d("KeyframesTween", ["invariant", "CubicBezier", "KeyframesPathUtils", "KeyframesSchema"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("KeyframesPathUtils").interpolateCubic,
		i = b("KeyframesPathUtils").interpolateLinear,
		j = b("KeyframesPathUtils").interpolateQuad;
	(d = b("KeyframesSchema")).Color;
	d.ColorAnimation;
	d.ColorArray;
	d.ColorArrayAnimation;
	d.Command;
	var k = d.CommandType;
	d.Path;
	d.PathAnimation;
	d.Point;
	d.PointAnimation;
	d.ScalarAnimation;
	d.ScalarArray;
	d.ScalarArrayAnimation;
	var l = d.TweenType;

	function m(a) {
		return a
	}

	function n(a) {
		return {
			x: a.x(),
			y: a.y()
		}
	}

	function o(a) {
		return {
			red: a.red(),
			green: a.green(),
			blue: a.blue(),
			alpha: a.alpha()
		}
	}

	function p(a) {
		var b = a.valuesLength(),
			c = [];
		for (var d = 0; d < b; d++) c.push(a.values(d));
		return c
	}

	function q(a) {
		var b = a.colorsLength(),
			c = [];
		for (var d = 0; d < b; d++) c.push(o(a.colors(d)));
		return c
	}

	function r(a) {
		var b = a.control1(),
			c = a.control2();
		return {
			type: a.type(),
			point: n(a.point()),
			control1: b ? n(b) : null,
			control2: c ? n(c) : null
		}
	}

	function s(a) {
		var b = [];
		for (var c = 0; c < a.commandsLength(); c++) b.push(r(a.commands(c)));
		return b
	}

	function t(a, b) {
		if (a >= b.keyframes(b.keyframesLength() - 1)) return 1;
		else if (a < b.keyframes(0)) return -1;
		return 0
	}

	function u(a, b) {
		if (t(a, b) !== 0) return null;
		var c = 0,
			d = b.keyframesLength() - 1;
		while (c + 1 < d) {
			var e = Math.floor((d - c) / 2 + c);
			b.keyframes(e) < a ? c = e : d = e
		}
		return c
	}

	function v(a, c, d) {
		var e = c.tweens(d),
			f = e.type();
		if (f === l.Hold) return 0;
		a = (a - c.keyframes(d)) / (c.keyframes(d + 1) - c.keyframes(d));
		switch (f) {
			case l.Linear:
				return a;
			case l.Bezier:
			default:
				return new(b("CubicBezier"))([e.control1().x(), e.control1().y()], [e.control2().x(), e.control2().y()]).solve(a)
		}
	}
	var w = function(a, b, c) {
		return a * (c - b) + b
	};
	f = function(a, b, c) {
		var d = b.valuesLength(),
			e = [];
		for (var f = 0; f < d; f++) e.push(w(a, b.values(f), c.values(f)));
		return e
	};
	var x = function(a, b, c) {
			return {
				x: w(a, b.x(), c.x()),
				y: w(a, b.y(), c.y())
			}
		},
		y = function(a, b, c) {
			return b && c ? x(a, b, c) : null
		},
		z = function(a, b, c) {
			return {
				red: w(a, b.red(), c.red()),
				green: w(a, b.green(), c.green()),
				blue: w(a, b.blue(), c.blue()),
				alpha: w(a, b.alpha(), c.alpha())
			}
		};
	d = function(a, b, c) {
		var d = b.colorsLength(),
			e = [];
		for (var f = 0; f < d; f++) e.push(z(a, b.colors(f), c.colors(f)));
		return e
	};
	var A = function(a, b, c) {
		var d = [];
		for (var e = 0; e < b.commandsLength(); e++) {
			var f = b.commands(e),
				g = c.commands(e);
			d.push({
				type: f.type(),
				point: x(a, f.point(), g.point()),
				control1: y(a, f.control1(), g.control1()),
				control2: y(a, f.control2(), g.control2())
			})
		}
		return d
	};

	function a(a, b, c, d) {
		var e = u(c, d);
		e != null || g(0, 2829);
		c = v(c, d, e);
		switch (c) {
			case 0:
				return b(d.values(e));
			case 1:
				return b(d.values(e + 1));
			default:
				return a(c, d.values(e), d.values(e + 1))
		}
	}
	var B = a.bind(null, w, m),
		C = a.bind(null, f, p),
		D = a.bind(null, x, n),
		E = a.bind(null, z, o),
		F = a.bind(null, d, q),
		G = a.bind(null, A, s);

	function H(a, b, c, d) {
		if (b.keyframesLength()) switch (t(a, b)) {
			case -1:
				return d(b.values(0));
			case 1:
				return d(b.values(b.valuesLength() - 1));
			case 0:
				return c(a, b)
		}
		return d(b.value())
	}
	f = function(a, b) {
		return H(a, b, B, m)
	};
	d = function(a, b) {
		return H(a, b, C, p)
	};
	a = function(a, b) {
		return H(a, b, D, n)
	};
	A = function(a, b) {
		return H(a, b, E, o)
	};
	var I = function(a, b) {
			return H(a, b, F, q)
		},
		J = function(a, b) {
			return H(a, b, G, s)
		};

	function K(a, b, c) {
		return {
			x: i(a, b.x, c.x),
			y: i(a, b.y, c.y)
		}
	}

	function L(a, b, c, d) {
		var e = a * a,
			f = 1 - a,
			g = f * f;
		return {
			x: j(a, e, f, g, b.x, d.x, c.x),
			y: j(a, e, f, g, b.y, d.y, c.y)
		}
	}

	function M(a, b, c, d, e) {
		var f = a * a,
			g = 1 - a,
			i = g * g;
		return {
			x: h(a, f, g, i, b.x, d.x, e.x, c.x),
			y: h(a, f, g, i, b.y, d.y, e.y, c.y)
		}
	}

	function N(a, b, c) {
		a = v(a, b, c);
		b = b.value();
		var d = n(b.commands(c).point());
		b = r(b.commands(c + 1));
		switch (b.type) {
			case k.LineTo:
				return K(a, d, b.point);
			case k.QuadTo:
				b.control1 || g(0, 2830);
				return L(a, d, b.point, b.control1);
			case k.CubicTo:
				b.control1 && b.control2 || g(0, 2831);
				return M(a, d, b.point, b.control1, b.control2);
			default:
				throw new Error("Unrecognized segment type " + b.type)
		}
	}

	function c(a, b) {
		switch (t(a, b)) {
			case -1:
				return n(b.value().commands(0).point());
			case 1:
				var c = b.value();
				return n(c.commands(c.commandsLength() - 1).point());
			default:
				c = u(a, b);
				c != null || g(0, 2832);
				return N(a, b, c)
		}
	}
	a = {
		maybeTweenPoint2: a,
		maybeTweenColor: A,
		maybeTweenColorArray: I,
		maybeTweenScalar: f,
		maybeTweenScalarArray: d,
		maybeTweenPath: J,
		tweenPointOnPath: c
	};
	e.exports = a
}), null);