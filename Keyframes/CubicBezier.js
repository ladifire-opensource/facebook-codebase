__d("CubicBezier", [], (function(a, b, c, d, e, f) {
	var g = .005;
	a = function() {
		function a(a, b) {
			this.cx = 3 * a[0], this.bx = 3 * (b[0] - a[0]) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * a[1], this.by = 3 * (b[1] - a[1]) - this.cy, this.ay = 1 - this.cy - this.by
		}
		var b = a.prototype;
		b.sampleCurveX = function(a) {
			return ((this.ax * a + this.bx) * a + this.cx) * a
		};
		b.solve = function(a) {
			a = this.solveCurveX(a);
			return ((this.ay * a + this.by) * a + this.cy) * a
		};
		b.solveCurveX = function(a) {
			var b, c, d, e;
			for (d = a, c = 0; c < 8; c++) {
				e = this.sampleCurveX(d) - a;
				if (Math.abs(e) < g) return d;
				b = (3 * this.ax * d + 2 * this.bx) * d + this.cx;
				if (Math.abs(b) < 1e-6) break;
				d -= e / b
			}
			b = 0;
			c = 1;
			d = a;
			if (d < b) return b;
			if (d > c) return c;
			while (b < c) {
				e = this.sampleCurveX(d);
				if (Math.abs(e - a) < g) return d;
				a > e ? b = d : c = d;
				d = (c - b) / 2 + b
			}
			return d
		};
		return a
	}();
	e.exports = a
}), null);