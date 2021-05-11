__d("CandelaScaleBuilder", ["CandelaScaleUtils"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function() {
		function a(a) {
			this.$6 = a
		}
		var c = a.prototype;
		c.extendInput = function(a, b) {
			this.$3 = a;
			this.$5 = b || a;
			return this
		};
		c.from = function(a) {
			this.$4 = a;
			return this
		};
		c.minStepInterval = function(a) {
			this.$7 = a;
			return this
		};
		c.normalizedOutputWhenNoExtent = function(a) {
			this.$9 = a;
			return this
		};
		c.origin = function(a) {
			this.$10 = a;
			return this
		};
		c.output = function(a) {
			this.$11 = a;
			return this
		};
		c.roundInput = function() {
			this.$12 = !0;
			return this
		};
		c.niceStepOnly = function() {
			this.$8 = !0;
			return this
		};
		c.roundOutput = function() {
			this.$13 = !0;
			return this
		};
		c.stepCountHint = function(a) {
			this.$16 = a;
			return this
		};
		c.stepIntervalHint = function(a) {
			this.$17 = a;
			return this
		};
		c.steps = function(a) {
			this.$18 = a;
			return this
		};
		c.setTitle = function(a) {
			this.$19 = a;
			return this
		};
		c.to = function(a) {
			this.$20 = a;
			return this
		};
		c.getFrom = function() {
			return this.$4
		};
		c.getSeriesNames = function() {
			return this.$14
		};
		c.getTitle = function() {
			return this.$19
		};
		c.getTo = function() {
			return this.$20
		};
		c.getNormalizedOutputWhenNoExtent = function() {
			return this.$9
		};
		c.data = function(a) {
			this.$1 = a;
			return this
		};
		c.auxiliaryData = function(a) {
			this.$2 = a;
			return this
		};
		c.schema = function(a) {
			this.$15 = a;
			return this
		};
		c.seriesNames = function(a) {
			this.$14 = a;
			return this
		};
		c.build = function() {
			if (!this.$6) throw new Error("`minmaxStrategy` must be provided");
			return b("CandelaScaleUtils").createScale(this.$1, this.$2, this.$14, this.$15, this.$6, this.$8, this.$12, this.$13, this.$16, this.$17, this.$4, this.$20, this.$18, this.$3, this.$5, this.$7, this.$9, this.$10, this.$11)
		};
		return a
	}();
	e.exports = a
}), null);