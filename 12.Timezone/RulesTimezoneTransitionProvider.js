__d("RulesTimezoneTransitionProvider", ["DateConsts", "LazyTimezoneDatabase", "TimezoneDatabaseUtil"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = [1860, 2100];
	a = function () {
		function a() {
			this.tzDatabase = new(b("LazyTimezoneDatabase"))()
		}
		var c = a.prototype;
		c.generateTransitions = function (a) {
			var c = this,
				d = [Math.max(this.tzDatabase.rulesModule.fromYear, g[0]), g[1]];
			d = [Date.UTC(d[0], 1 - 1, 1) / b("DateConsts").MS_PER_SEC, Date.UTC(d[1], 1 - 1, 1) / b("DateConsts").MS_PER_SEC];
			return b("TimezoneDatabaseUtil").generateTransitions(this.tzDatabase.getTerminalZone(a), function (a) {
				return c.tzDatabase.getRuleSet(a)
			}, d)
		};
		return a
	}();
	c = new a();
	e.exports = c
}), null);