__d("BootloaderEventsManager", ["CallbackDependencyManager", "performanceAbsoluteNow"], (function (a, b, c, d, e, f) {
	var g;
	a = function () {
		"use strict";

		function a() {
			this.$1 = new(b("CallbackDependencyManager"))(), this.$2 = new Map()
		}
		var c = a.prototype;
		c.rsrcDone = function (a) {
			return a
		};
		c.bootload = function (a) {
			return "bl:" + a.join(",")
		};
		c.tierOne = function (a) {
			return "t1:" + a
		};
		c.tierTwoStart = function (a) {
			return "t2s:" + a
		};
		c.tierTwo = function (a) {
			return "t2:" + a
		};
		c.tierThreeStart = function (a) {
			return "t3s:" + a
		};
		c.tierThree = function (a) {
			return "t3:" + a
		};
		c.beDone = function (a) {
			return "beDone:" + a
		};
		c.notify = function (a) {
			this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()), this.$1.satisfyPersistentDependency(a)
		};
		c.getEventTime = function (a) {
			return this.$2.get(a)
		};
		c.registerCallback = function (a, b) {
			this.$1.registerCallback(a, b)
		};
		return a
	}();
	e.exports = a
}), null);