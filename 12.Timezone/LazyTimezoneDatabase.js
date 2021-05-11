__d("LazyTimezoneDatabase", ["invariant", "Instant",
 "TimezoneRulesModuleParser", 
 "compareString", "nullthrows"], (function (a, b, c, d, e, f, g) {
	"use strict";
	a = function () {
		function a() {
			this.rulesModule = {
				zones: [],
				ruleSets: [],
				version: "0",
				fromYear: b("Instant").wholeYearRangeInYears.until
			}, this.zones = new Map(), this.ruleSets = new Map()
		}
		var c = a.prototype;
		c.registerRulesModule = function (a) {
			if (a.fromYear < this.rulesModule.fromYear || b("compareString")(this.rulesModule.version, a.version) < 0 && this.rulesModule.fromYear === a.fromYear) {
				this.rulesModule = a;
				this.zones.clear();
				this.ruleSets.clear();
				return !0
			} else return !1
		};
		c.getZone = function (a) {
			this.zones.has(a) || this.zones.set(a, this.$1(a));
			return b("nullthrows")(this.zones.get(a))
		};
		c.getRuleSet = function (a) {
			this.ruleSets.has(a) || this.ruleSets.set(a, this.$2(a));
			return b("nullthrows")(this.ruleSets.get(a))
		};
		c.hasZone = function (a) {
			return 0 <= a && a < this.rulesModule.zones.length
		};
		c.getTerminalZone = function (a) {
			a = this.getZone(a);
			return typeof a.linkTo === "number" ? this.getZone(a.linkTo) : a
		};
		c.getZoneCount = function () {
			return this.rulesModule.zones.length
		};
		c.$1 = function (a) {
			0 <= a && a < this.rulesModule.zones.length || g(0, 5776, a);
			a = b("TimezoneRulesModuleParser").parseZone(this.rulesModule.zones[a], a);
			if (a.records)
				for (var c = a.records, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
					var f;
					if (d) {
						if (e >= c.length) break;
						f = c[e++]
					} else {
						e = c.next();
						if (e.done) break;
						f = e.value
					}
					f = f;
					f.ruleSetID != null && f.ruleSetID !== 0 && this.getRuleSet(f.ruleSetID)
				} else this.getZone(b("nullthrows")(a.linkTo));
			return a
		};
		c.$2 = function (a) {
			a < this.rulesModule.ruleSets.length || g(0, 5777, a);
			return b("TimezoneRulesModuleParser").parseRuleSet(this.rulesModule.ruleSets[a], a)
		};
		return a
	}();
	e.exports = a
}), null);