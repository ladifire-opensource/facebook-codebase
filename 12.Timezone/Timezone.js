__d("Timezone", ["invariant", "DateConsts", "EnvironmentTimezoneDecisionTree", 
	"FormatExtractionTimezoneTransitionProvider", "TimezoneUtil", "gkx", 
	"memoize", "nullthrows", "warning", "RulesTimezoneTransitionProvider",
	 "TimezoneRulesFrom2009", "TimezoneNamesData"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.setupTimezone = l;
	f.overrideTransitions = m;
	f.setupTimezoneWithPHPTransitions = a;
	f.setFallbackOffset = c;
	f.registerRulesModule = n;
	f.registerNamesModule = o;
	f.registerDefaultNamesAndRulesModules = d;
	f.getTransitions = p;
	f.computeTransitions = q;
	f.toggleTransitionProvider = r;
	f.isTransitionProviderEnabled = e;
	f.getEnvironmentTimezoneIDFromTree = t;
	f.getName = u;
	f.getExactName = v;
	f.getByName = w;
	f.getByNameOrNull = x;
	f.getGeographicTimezoneCount = y;
	f.clampTimestamp = z;
	var h = {
			constantOffsets: {},
			namesModule: void 0,
			overrideTransitions: {},
			providerEnabled: {
				override: !0,
				builtin: !0,
				rules: !1,
				formatExtraction: !0,
				environmentExtraction: !0,
				constantOffset: !0
			},
			rulesProvider: void 0,
			timezoneIDsByName: void 0,
			transitionsByTimezoneID: {}
		},
		i = 1e4,
		j = function (a) {
			return new Date(1e3 * a).getTimezoneOffset() * -60
		},
		k = 0;
	f.UTC = k;
	a = 1;
	f.PST8PDT = a;

	function l(a, b) {
		m(a, b)
	}

	function m(a, b) {
		h.overrideTransitions[a] = b, delete h.transitionsByTimezoneID[a]
	}

	function a(a, c) {
		c = c.map(function (a) {
			return {
				start: typeof a.ts === "number" ? a.ts : NaN,
				offset: typeof a.offset === "number" ? a.offset : NaN
			}
		});
		c.push({
			start: b("DateConsts")["private"].instantRange.until,
			offset: NaN
		});
		l(a, c)
	}

	function c(a, b) {
		h.constantOffsets[a] = b
	}

	function n(a, b) {
		h.rulesProvider = a;
		a = a.tzDatabase.registerRulesModule(b);
		a && (h.transitionsByTimezoneID = {})
	}

	function o(a) {
		(!h.namesModule || h.namesModule.version < a.version) && (b("warning")(b("TimezoneUtil").namesModuleIsSane(a), "Attemping to register a names module that incorrectly enumerates existing timezones. Check that you are using the TimezoneNamesData module."), h.namesModule = a, h.timezoneIDsByName = void 0)
	}

	function d() {
		n(b("RulesTimezoneTransitionProvider"), b("TimezoneRulesFrom2009")), o(b("TimezoneNamesData")), r("rules", !0)
	}

	function p(a) {
		h.transitionsByTimezoneID[a] || (h.transitionsByTimezoneID[a] = q(a));
		return h.transitionsByTimezoneID[a]
	}

	function q(a) {
		if (h.overrideTransitions[a]) return h.overrideTransitions[a];
		if (a === k) return b("TimezoneUtil").constantOffsetTransitions(0);
		var c = h.rulesProvider;
		if (h.providerEnabled.rules && c && c.tzDatabase.hasZone(a)) return c.generateTransitions(a);
		if (h.providerEnabled.formatExtraction) {
			c = b("FormatExtractionTimezoneTransitionProvider").extractOrNull(a);
			if (c) return c
		}
		if (h.providerEnabled.environmentExtraction && (a == s() || a === i)) return b("TimezoneUtil").extractTimezoneTransitions(j);
		if (h.providerEnabled.constantOffset && Object.prototype.hasOwnProperty.call(h.constantOffsets, a)) {
			b("warning")(!1, "Timezone %s is configured with a constant offset. This is error prone, and support for it will be removed in the near future.", a);
			return b("TimezoneUtil").constantOffsetTransitions(h.constantOffsets[a])
		}
		g(0, 1059, a)
	}

	function r(a, b, c) {
		c === void 0 && (c = !0), a === "rules" || a === "formatExtraction" || a === "environmentExtraction" || a === "constantOffset" || g(0, 1060, a), h.providerEnabled[a] = b, c && (h.transitionsByTimezoneID = {})
	}

	function e(a) {
		return h.providerEnabled[a]
	}
	var s = b("memoize")(function () {
		if (!b("gkx")("1111356")) return t();
		var a = "";
		Intl != null && Intl.DateTimeFormat() != null && Intl.DateTimeFormat().resolvedOptions() != null && (a = Intl.DateTimeFormat().resolvedOptions().timeZone || "");
		var c;
		h.namesModule && a !== "" && (c = x(a));
		c == null && (c = t());
		return c
	});
	f.getEnvironmentTimezoneID = s;

	function t() {
		return b("TimezoneUtil").determineTimezoneID(b("EnvironmentTimezoneDecisionTree"), j) || i
	}

	function u(a) {
		return a === i ? "Environment/Local" : v(a)
	}

	function v(a) {
		var b = A.getNamesModule("Timezone.getName");
		return b.zoneNames[String(a)]
	}

	function w(a) {
		return b("nullthrows")(x(a), "Did not find id for timezone " + a)
	}

	function x(a) {
		if (!h.timezoneIDsByName) {
			A.getNamesModule("Timezone.getByName");
			var b = {};
			for (var c = A.computeTimezoneIDs(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
				var g = u(f);
				b[g] = f
			}
			h.timezoneIDsByName = b
		}
		return h.timezoneIDsByName[a]
	}

	function y() {
		var a = h.rulesProvider;
		a && a.tzDatabase.getZoneCount() || h.namesModule || g(0, 1061);
		return a && a.tzDatabase.getZoneCount() || Object.keys(A.getNamesModule().zoneNames).length
	}

	function z(a, c) {
		c = p(c);
		c = c[c.length - 1];
		c = c.start;
		return Math.min(a, c - 1, b("DateConsts")["private"].instantRange.until - 1)
	}
	var A = {
		state: h,
		localTimezoneID: i,
		computeTimezoneIDs: function () {
			var a = new Set(),
				b = y();
			for (var c = 0; c < b; c++) a.add(c);
			a.add(i);
			return a
		},
		getNamesModule: function (a) {
			a === void 0 && (a = "Timezone.getNamesModule");
			h.namesModule || g(0, 1062, a);
			return b("nullthrows")(h.namesModule)
		}
	};
	f["private"] = A;
	c(a, -7 * b("DateConsts").SEC_PER_HOUR)
}), null);