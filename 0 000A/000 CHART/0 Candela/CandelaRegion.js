__d("CandelaRegion", [], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a(a, b, c, d, e, f, g, h) {
			this.$1 = g, this.$2 = d, this.$3 = e, this.$4 = a, this.$5 = b, this.$6 = f, this.$7 = c, this.$8 = h
		}
		var b = a.prototype;
		b.getBoundingRect = function() {
			return this.$7
		};
		b.getHoverCursor = function() {
			return this.$2
		};
		b.getHoverThreshold = function() {
			return this.$3
		};
		b.getID = function() {
			return this.$4
		};
		b.getUID = function() {
			return this.$5
		};
		b.getProximityThreshold = function() {
			return this.$6
		};
		b.hasFill = function() {
			return this.$1
		};
		b.hasStroke = function() {
			return this.$8
		};
		b.getShapeRect = function() {
			throw new Error("Not implemented")
		};
		b.hoverTest = function(a, b) {
			throw new Error("Not implemented")
		};
		b.proximityTest = function(a, b) {
			throw new Error("Not implemented")
		};
		return a
	}();
	e.exports = a
}), null);