__d("CandelaPolygonRegion", ["CandelaRegion", "CandelaUtils"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("CandelaUtils").math.findDistanceToSegment,
		h = function(b) {
			babelHelpers.inheritsLoose(a, b);

			function a(a, c, d, e, f, g, h, i, j) {
				a = b.call(this, a, c, d, e, f, g, h, i) || this;
				a.$CandelaPolygonRegion1 = j;
				return a
			}
			var c = a.prototype;
			c.getShapeRect = function() {
				var a = Math.max(b.prototype.getHoverThreshold.call(this), b.prototype.getProximityThreshold.call(this)),
					c = b.prototype.getBoundingRect.call(this),
					d = c.x,
					e = c.y,
					f = c.height;
				c = c.width;
				return {
					x: d + a,
					y: e + a,
					height: f - 2 * a,
					width: c - 2 * a
				}
			};
			c.hoverTest = function(a, b) {
				return this.hasFill() && this.$CandelaPolygonRegion2(a, b) ? !0 : this.$CandelaPolygonRegion3(a, b) <= this.getHoverThreshold()
			};
			c.proximityTest = function(a, b) {
				a = this.$CandelaPolygonRegion3(a, b);
				return a <= this.getProximityThreshold()
			};
			c.$CandelaPolygonRegion3 = function(a, b) {
				return this.$CandelaPolygonRegion1.filter(function(c) {
					return a >= c.x && a <= c.x2 && b >= c.y && b <= c.y2
				}).reduce(function(c, d) {
					d = d.points;
					return Math.min(c, g({
						x: a,
						y: b
					}, d[0], d[1]))
				}, Infinity)
			};
			c.$CandelaPolygonRegion2 = function(a, b) {
				var c = this,
					d = this.$CandelaPolygonRegion1,
					e = 0,
					f = d[0].points[0],
					g = d[d.length - 1].points[1],
					h = {
						x: a,
						y: b
					},
					i = [];
				d.forEach(function(a) {
					var b, d;
					a.points[0].y > a.points[1].y ? (b = a.points[0], d = a.points[1]) : (b = a.points[1], d = a.points[0]);
					c.$CandelaPolygonRegion4(h, b, d) && (++e, i.push(a))
				});
				this.hasFill() && (f.x !== g.x || f.y !== g.y) && (f.y > g.y ? (a = g, b = f) : (a = f, b = g), this.$CandelaPolygonRegion4(h, b, a) && ++e);
				return (e & 1) === 1
			};
			c.$CandelaPolygonRegion4 = function(a, b, c) {
				var d = Infinity,
					e = Infinity;
				if (a.y < c.y || a.y > b.y) return !1;
				else if (a.x > Math.max(b.x, c.x)) return !1;
				else if (a.x <= Math.min(b.x, c.x)) return !0;
				else {
					b.x !== c.x && (d = (c.y - b.y) / (c.x - b.x));
					b.x !== a.x && (e = (a.y - b.y) / (a.x - b.x));
					return d > e
				}
			};
			return a
		}(b("CandelaRegion"));
	e.exports = h;
	a = function() {
		function a() {
			this.$1 = !1, this.$2 = "", this.$3 = "", this.$4 = "", this.$5 = 0, this.$7 = 0, this.$8 = !1
		}
		var b = a.prototype;
		b.fill = function() {
			this.$1 = !0;
			return this
		};
		b.id = function(a) {
			this.$2 = a;
			return this
		};
		b.uid = function(a) {
			this.$3 = a;
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
		b.points = function(a) {
			this.$6 = a;
			return this
		};
		b.proximityThreshold = function(a) {
			this.$7 = a;
			return this
		};
		b.stroke = function() {
			this.$8 = !0;
			return this
		};
		b.build = function() {
			var a = this,
				b = [],
				c = Infinity,
				d = Infinity,
				e = -Infinity,
				f = -Infinity;
			this.$6.forEach(function(g, h, i) {
				i = i[h + 1];
				var j, k, l;
				if (i) {
					h = Math.min(g.x, i.x);
					j = Math.min(g.y, i.y);
					k = Math.max(g.x, i.x);
					l = Math.max(g.y, i.y);
					var m = Math.max(a.$5, a.$7);
					h -= m;
					k += m;
					j -= m;
					l += m;
					c = Math.min(h, c);
					d = Math.min(j, d);
					e = Math.max(k, e);
					f = Math.max(l, f);
					b.push({
						height: l - j,
						points: [g, i],
						x: h,
						y: j,
						x2: k,
						y2: l,
						width: k - h
					})
				}
			});
			var g = {
				height: f - d,
				width: e - c,
				x: c,
				y: d
			};
			return new h(this.$2, this.$3, g, this.$4, this.$5, this.$7, this.$1, this.$8, b)
		};
		return a
	}();
	h.Builder = a
}), null);