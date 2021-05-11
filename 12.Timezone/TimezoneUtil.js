__d("TimezoneUtil", ["BinarySearch", "DateConsts"], (function (a, b, c, d, e, f) {
	"use strict";
	f.constantOffsetTransitions = a;
	f.extractTimezoneTransitions = c;
	f.determineTimezoneID = g;
	f.getDefaultExtractionOptions = h;
	f.namesModuleIsSane = d;

	function a(a) {
		return [{
			start: b("DateConsts")["private"].instantRange.since,
			offset: a
		}, {
			start: b("DateConsts")["private"].instantRange.until,
			offset: NaN
		}]
	}

	function c(a, c) {
		c === void 0 && (c = h());
		var d = [],
			e = a(c.start);
		d.push({
			start: c.start,
			offset: e
		});
		var f = function (f) {
			var g = f + c.step,
				h = a(g);
			if (e !== h) {
				f = b("BinarySearch").leastUpperBound(function (b) {
					return a(b) === h
				}, 1, f, g, function (a, b) {
					return a - b
				});
				f < c.end && d.push({
					start: f,
					offset: h
				})
			}
			e = h
		};
		for (var g = c.start; g < c.end; g += c.step) f(g);
		d.push({
			start: c.end,
			offset: NaN
		});
		return d
	}

	function g(a, b) {
		if (a.timezone != null) return a.timezone;
		else {
			var c = a.instant != null && b(a.instant);
			a = a[String(c)];
			return a ? g(a, b) : void 0
		}
	}

	function h() {
		return {
			start: new Date("2004-01-01").valueOf() / b("DateConsts").MS_PER_SEC,
			end: new Date("2107-01-01").valueOf() / b("DateConsts").MS_PER_SEC,
			step: 30 * b("DateConsts").SEC_PER_DAY
		}
	}

	function d(a) {
		return a.zoneNames["1"] === "America/Los_Angeles" && a.zoneNames["141"] === "Africa/Johannesburg" && a.zoneNames["464"] === "WET"
	}
}), null);