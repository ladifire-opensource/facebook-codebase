__d("CandelaEllipseRegion", ["CandelaRegion", "mod"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = function(c) {
		babelHelpers.inheritsLoose(a, c);

		function a(a, b, d, e, f, g, h, i, j, k, l, m, n, o, p) {
			f = c.call(this, f, g, m, d, e, h, b, n) || this;
			f.$CandelaEllipseRegion1 = a;
			f.$CandelaEllipseRegion2 = i;
			f.$CandelaEllipseRegion3 = j;
			f.$CandelaEllipseRegion4 = k;
			f.$CandelaEllipseRegion5 = l;
			f.$CandelaEllipseRegion6 = o;
			f.$CandelaEllipseRegion7 = p;
			return f
		}
		var d = a.prototype;
		d.$CandelaEllipseRegion8 = function() {
			return this.hasFill() ? this.$CandelaEllipseRegion4 : 1
		};
		d.$CandelaEllipseRegion9 = function(a) {
			return a * this.$CandelaEllipseRegion8()
		};
		d.hoverTest = function(b, c) {
			return a.isPointInEllipse({
				x: b,
				y: c
			}, this.$CandelaEllipseRegion1, this.$CandelaEllipseRegion2 + this.getHoverThreshold(), this.$CandelaEllipseRegion3 + this.getHoverThreshold(), this.$CandelaEllipseRegion5, this.$CandelaEllipseRegion6, this.$CandelaEllipseRegion7) && !a.isPointInEllipse({
				x: b,
				y: c
			}, this.$CandelaEllipseRegion1, this.$CandelaEllipseRegion9(this.$CandelaEllipseRegion2) - this.getHoverThreshold(), this.$CandelaEllipseRegion9(this.$CandelaEllipseRegion3) - this.getHoverThreshold(), this.$CandelaEllipseRegion5, this.$CandelaEllipseRegion6, this.$CandelaEllipseRegion7)
		};
		d.proximityTest = function(b, c) {
			return a.isPointInEllipse({
				x: b,
				y: c
			}, this.$CandelaEllipseRegion1, this.$CandelaEllipseRegion2 + this.getProximityThreshold(), this.$CandelaEllipseRegion3 + this.getProximityThreshold(), this.$CandelaEllipseRegion5, this.$CandelaEllipseRegion6, this.$CandelaEllipseRegion7) && !a.isPointInEllipse({
				x: b,
				y: c
			}, this.$CandelaEllipseRegion1, this.$CandelaEllipseRegion9(this.$CandelaEllipseRegion2) - this.getProximityThreshold(), this.$CandelaEllipseRegion9(this.$CandelaEllipseRegion3) - this.getProximityThreshold(), this.$CandelaEllipseRegion5, this.$CandelaEllipseRegion6, this.$CandelaEllipseRegion7)
		};
		d.getShapeRect = function() {
			var a = Math.max(c.prototype.getHoverThreshold.call(this), c.prototype.getProximityThreshold.call(this)),
				b = c.prototype.getBoundingRect.call(this),
				d = b.x,
				e = b.y,
				f = b.height;
			b = b.width;
			return {
				x: d + .5 * a,
				y: e + .5 * a,
				height: f - a,
				width: b - a
			}
		};
		a.isPointInEllipse = function(a, c, d, e, f, g, h) {
			var i = Math.cos(f);
			f = Math.sin(f);
			var j = a.x - c.x;
			a = a.y - c.y;
			c = Math.pow(i * j + f * a, 2) / Math.pow(d, 2);
			d = Math.pow(f * j - i * a, 2) / Math.pow(e, 2);
			f = !0;
			if (g != null && h != null) {
				i = b("mod")(Math.atan2(-a, j), 2 * Math.PI);
				e = b("mod")(i - g, 2 * Math.PI);
				a = b("mod")(h - g, 2 * Math.PI);
				f = e >= a
			}
			return c + d <= 1 && f
		};
		return a
	}(b("CandelaRegion"));
	e.exports = g;
	a = function() {
		function a() {
			this.$3 = !1, this.$6 = "", this.$14 = "", this.$4 = "", this.$5 = 0, this.$8 = 0, this.$13 = !1, this.$12 = null, this.$2 = null, this.$7 = 0
		}
		var b = a.prototype;
		b.build = function() {
			var a = this,
				b = Math.max(this.$5, this.$8),
				c = 0,
				d = 0,
				e = 0,
				f = function(b) {
					return a.$1.x + a.$9 * Math.cos(b) * Math.cos(a.$11) - a.$10 * Math.sin(b) * Math.sin(a.$11)
				},
				h = function(b) {
					return a.$1.y + a.$10 * Math.sin(b) * Math.cos(a.$11) + a.$9 * Math.cos(b) * Math.sin(a.$11)
				},
				i = Math.atan(-this.$10 * Math.tan(this.$11) / this.$9),
				j = i - Math.PI;
			c = f(i);
			e = f(j);
			i = Math.atan(this.$10 * (1 / Math.tan(this.$11)) / this.$9);
			j = i - Math.PI;
			d = h(i);
			f = h(j);
			i = {
				height: d - f + b,
				width: c - e + b,
				x: e - .5 * b,
				y: f - .5 * b
			};
			return new g(this.$1, this.$3, this.$4, this.$5, this.$6, this.$14, this.$8, this.$9, this.$10, this.$7, this.$11, i, this.$13, this.$12, this.$2)
		};
		b.center = function(a) {
			this.$1 = a;
			return this
		};
		b.endAngle = function(a) {
			this.$2 = a;
			return this
		};
		b.fill = function() {
			this.$3 = !0;
			return this
		};
		b.hoverCursor = function(a) {
			this.$4 = a;
			return this
		};
		b.hoverThreshold = function(a) {
			this.$5 = a;
			return this
		};
		b.id = function(a) {
			this.$6 = a;
			return this
		};
		b.innerRadiusRatio = function(a) {
			this.$7 = a;
			return this
		};
		b.uid = function(a) {
			this.$14 = a;
			return this
		};
		b.proximityThreshold = function(a) {
			this.$8 = a;
			return this
		};
		b.radiusX = function(a) {
			this.$9 = a;
			return this
		};
		b.radiusY = function(a) {
			this.$10 = a;
			return this
		};
		b.rotation = function(a) {
			this.$11 = a;
			return this
		};
		b.startAngle = function(a) {
			this.$12 = a;
			return this
		};
		b.stroke = function() {
			this.$13 = !0;
			return this
		};
		return a
	}();
	g.Builder = a
}), null);