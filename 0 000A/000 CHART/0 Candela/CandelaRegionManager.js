__d("CandelaRegionManager", ["invariant", "CandelaPathRegionBuilder", "EventEmitter"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = "CHANGE";
	a = function() {
		function a() {
			this.$1 = new(b("EventEmitter"))(), this.$2 = new Map()
		}
		var c = a.prototype;
		c.addHitRegion = function(a) {
			a.id.length || g(0, 6012);
			var c = new(b("CandelaPathRegionBuilder"))();
			a.commands.forEach(function(a) {
				var b = a.name;
				a = a.args;
				c[b].apply(c, a)
			});
			c.id(a.id).uid(a.uid).hoverThreshold(a.hoverThreshold || 0).proximityThreshold(a.proximityThreshold || 0).hoverCursor(a.hoverCursor || "default");
			a.fill && c.fill();
			a.stroke && c.stroke();
			var d = c.build();
			this.$2.set(a.uid, d);
			this.$1.emit(h)
		};
		c.addListener = function(a) {
			return this.$1.addListener(h, a)
		};
		c.clearHitRegions = function() {
			this.$2.size && (this.$2 = new Map())
		};
		c.getRegions = function() {
			return this.$2
		};
		c.getSize = function() {
			return this.$2.size
		};
		c.removeHitRegion = function(a) {
			this.$2["delete"](a), this.$1.emit(h)
		};
		c.query = function(a, b) {
			var c = this.$3(a, b),
				d = c.filter(function(c) {
					return c.hoverTest(a, b)
				});
			c = c.filter(function(c) {
				return c.proximityTest(a, b)
			});
			return {
				hover: d,
				proximity: c
			}
		};
		c.$3 = function(a, b) {
			var c = [],
				d = this.$2.values(),
				e;
			while (e = d.next().value) e.forEach(function(d) {
				var e = d.getBoundingRect();
				a >= e.x && a <= e.x + e.width && b >= e.y && b <= e.y + e.height && c.push(d)
			});
			return c.reverse()
		};
		return a
	}();
	e.exports = a
}), null);