__d("CandelaPathRegionBuilder", ["CandelaEllipseRegion", "CandelaPolygonRegion"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a() {
			this.$1 = null, this.$8 = {
				x: 0,
				y: 0
			}, this.$7 = []
		}
		var c = a.prototype;
		c.fill = function() {
			this.$2 = !0;
			return this
		};
		c.hoverCursor = function(a) {
			this.$3 = a;
			return this
		};
		c.hoverThreshold = function(a) {
			this.$4 = a;
			return this
		};
		c.id = function(a) {
			this.$5 = a;
			return this
		};
		c.uid = function(a) {
			this.$6 = a;
			return this
		};
		c.proximityThreshold = function(a) {
			this.$9 = a;
			return this
		};
		c.stroke = function() {
			this.$10 = !0;
			return this
		};
		c.build = function() {
			var a = this,
				c = [];
			this.$7.map(function(d) {
				var e;
				d instanceof g ? e = new(b("CandelaPolygonRegion").Builder)().hoverCursor(a.$3).hoverThreshold(a.$4).id(a.$5).uid(a.$6).points(d.getPoints()).proximityThreshold(a.$9) : d instanceof i && (e = new(b("CandelaEllipseRegion").Builder)().center(d.center()).hoverCursor(a.$3).hoverThreshold(a.$4).id(a.$5).innerRadiusRatio(d.innerRadiusRatio()).uid(a.$6).proximityThreshold(a.$9).radiusX(d.radiusX()).radiusY(d.radiusY()).rotation(d.rotation()).startAngle(d.startAngle()).endAngle(d.endAngle()));
				e && (a.$2 && e.fill(), a.$10 && e.stroke(), c.push(e.build()))
			});
			return c
		};
		c.arc = function(a, b, c, d, e, f) {
			throw new Error("Path2D.arc not implemented!")
		};
		c.arcTo = function(a, b, c, d, e) {
			throw new Error("Path2D.arcTo not implemented!")
		};
		c.bezierCurveTo = function(a, b, c, d, e, f) {
			throw new Error("Path2D.bezierCurveTo not implemented!")
		};
		c.close = function() {
			this.$1 && this.$1.close()
		};
		c.ellipse = function(a, b, c, d, e, f, g, h) {
			this.$1 = null, this.$7.push(new i({
				x: a,
				y: b
			}, c, d, h, 0, f, g))
		};
		c.line = function(a, b) {
			this.lineTo(this.$8.x + a, this.$8.y + b)
		};
		c.lineTo = function(a, b) {
			this.$1 == null && (this.$1 = new g(this.$8.x, this.$8.y), this.$7.push(this.$1)), this.$1 instanceof g && this.$1.lineTo(a, b), this.$8 = {
				x: a,
				y: b
			}
		};
		c.move = function(a, b) {
			this.$8.x += a, this.$8.y += b
		};
		c.moveTo = function(a, b) {
			this.$8 = {
				x: a,
				y: b
			}
		};
		c.quadraticCurveTo = function(a, b, c, d) {
			throw new Error("Path2D.quadraticCurveTo not implemented!")
		};
		c.rect = function(a, b, c, d) {
			this.$1 = null, this.$7.push(new h(a, b, c, d))
		};
		return a
	}();
	e.exports = a;
	c = function() {
		function a() {
			this.$1 = []
		}
		var b = a.prototype;
		b.addPoint = function(a, b) {
			this.$1.push({
				x: a,
				y: b
			})
		};
		b.close = function() {
			var a = this.getPoints(),
				b = a[0];
			a = a[a.length - 1];
			(b.x !== a.x || b.y !== a.y) && this.lineTo(b.x, b.y)
		};
		b.getPoints = function() {
			return this.$1
		};
		b.lineTo = function(a, b) {
			this.addPoint(a, b)
		};
		return a
	}();
	var g = function(b) {
			babelHelpers.inheritsLoose(a, b);

			function a(a, c) {
				var d;
				d = b.call(this) || this;
				d.addPoint(a, c);
				return d
			}
			return a
		}(c),
		h = function(b) {
			babelHelpers.inheritsLoose(a, b);

			function a(a, c, d, e) {
				var f;
				f = b.call(this) || this;
				var h = new g(a, c);
				h.lineTo(a + e, c);
				h.lineTo(a + e, c + d);
				h.close();
				return f
			}
			return a
		}(c),
		i = function() {
			function a(a, b, c, d, e, f, g) {
				this.$1 = a, this.$2 = b, this.$3 = c, this.$4 = d, this.$5 = e, this.$6 = f, this.$7 = g
			}
			var b = a.prototype;
			b.center = function() {
				return this.$1
			};
			b.radiusX = function() {
				return this.$2
			};
			b.radiusY = function() {
				return this.$3
			};
			b.innerRadiusRatio = function() {
				return this.$4
			};
			b.rotation = function() {
				return this.$5
			};
			b.startAngle = function() {
				return this.$6
			};
			b.endAngle = function() {
				return this.$7
			};
			return a
		}()
}), null);