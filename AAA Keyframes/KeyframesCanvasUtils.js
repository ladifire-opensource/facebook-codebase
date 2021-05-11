__d("KeyframesCanvasUtils", ["invariant", "KeyframesSchema"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("KeyframesSchema").StrokeLineCap,
		i = b("KeyframesSchema").CommandType;
	f = ["miter", "round", "bevel"];

	function a(a) {
		return "rgba(" + Math.floor(a.red) + "," + Math.floor(a.green) + "," + Math.floor(a.blue) + "," + Math.floor(a.alpha) / 255 + ")"
	}

	function c(a) {
		switch (a) {
			case h.Square:
				return "square";
			case h.Round:
				return "round";
			case h.Butt:
			default:
				return "butt"
		}
	}

	function d(a, b) {
		a.beginPath();
		for (var b = b, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var e;
			if (c) {
				if (d >= b.length) break;
				e = b[d++]
			} else {
				d = b.next();
				if (d.done) break;
				e = d.value
			}
			e = e;
			switch (e.type) {
				case i.MoveTo:
					a.moveTo(e.point.x, e.point.y);
					break;
				case i.CubicTo:
					e.control1 && e.control2 || g(0, 2935);
					a.bezierCurveTo(e.control1.x, e.control1.y, e.control2.x, e.control2.y, e.point.x, e.point.y);
					break;
				case i.QuadTo:
					e.control1 || g(0, 2936);
					a.quadraticCurveTo(e.control1.x, e.control1.y, e.point.x, e.point.y);
					break;
				case i.LineTo:
					a.lineTo(e.point.x, e.point.y);
					break;
				default:
					throw new Error("Unrecognized path command " + e.type)
			}
		}
	}
	e.exports = {
		drawPath: d,
		getCanvasStyle: a,
		getCanvasLineCap: c,
		LINE_JOINS: f
	}
}), null);