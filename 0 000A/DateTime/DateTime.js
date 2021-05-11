__d("DateTime", ["invariant", "DateConsts", "Instant", "PeriodUnit", "SharedDateUtils", "Timezone", "memoizeWithArgs", "monitorCodeUse", "parseISODate"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("Timezone").getEnvironmentTimezoneID,
		i = b("Timezone").UTC,
		j = function() {
			function a(a, b) {
				this.instant = a, this.timezoneID = b
			}
			var c = a.prototype;
			c["function"] = function(b, c) {
				return new a(b, c)
			};
			a.now = function(c) {
				return a.create(b("Instant").now(), c)
			};
			a.localCreate = function(b) {
				var c = h();
				c || g(0, 6070);
				return a.create(b, c)
			};
			a.localNow = function() {
				return a.localCreate(b("Instant").now())
			};
			a.fromLegacyArgs = function(c, d) {
				c = c;
				if (c && typeof c === "object") {
					if (!(c instanceof Date)) {
						var e;
						((e = c.constructor) == null ? void 0 : e.name) ? e = c.constructor.name: c.constructor ? e = c.constructor.toString() : e = void 0;
						b("monitorCodeUse")("date_time_legacy_valueof_constructor", {
							className: e
						}, {
							forceIncludeStackTrace: !0
						})
					}
					c = l.defaultValue(c)
				}
				if (typeof c === "number") return new a(c / b("DateConsts").MS_PER_SEC, d);
				else if (typeof c === "string") {
					b("monitorCodeUse")("date_time_legacy_string_constructor", {}, {
						forceIncludeStackTrace: !0
					});
					return new a(new Date(c) / b("DateConsts").MS_PER_SEC, d)
				} else g(0, 6071)
			};
			c.getRelative = function(b) {
				return a.create(this.instant, b)
			};
			c.getRelativeInUTC = function() {
				return this.getRelative(i)
			};
			c.getParallel = function(c) {
				var d = this.instant + this.getOffset();
				return c === i ? a.create(d, i) : a.create(b("Instant").getParallel(d, c), c)
			};
			c.getParallelInUTC = function() {
				return this.getParallel(i)
			};
			c.getEquivalentInTimezone = function(b) {
				b = a.create(this.instant, b);
				return b.update(this.getYear(), this.getMonth(), this.getDayOfMonth(), this.getHours(), this.getMinutes(), this.getSeconds())
			};
			c.getEquivalentInUTC = function() {
				return this.getEquivalentInTimezone(0)
			};
			c.equals = function(a) {
				return this.instant === a.instant && this.timezoneID === a.timezoneID
			};
			c.isBefore = function(a) {
				return this.instant < a.instant
			};
			c.isAfter = function(a) {
				return this.instant > a.instant
			};
			c.isSameOrBefore = function(a) {
				return this.isRelativeTo(a) || this.isBefore(a)
			};
			c.isSameOrAfter = function(a) {
				return this.isRelativeTo(a) || this.isAfter(a)
			};
			c.isRelativeTo = function(a) {
				return this.instant === a.instant
			};
			c.parallels = function(a) {
				return this.getParallelInUTC().equals(a.getParallelInUTC())
			};
			c.getFields = function() {
				var a = this.toParallelDate();
				return {
					year: a.getUTCFullYear(),
					month: a.getUTCMonth() + 1,
					day: a.getUTCDate(),
					hour: a.getUTCHours(),
					minute: a.getUTCMinutes(),
					second: a.getUTCSeconds()
				}
			};
			c.getTimezoneID = function() {
				return this.timezoneID
			};
			c.getTimezoneName = function() {
				return b("Timezone").getName(this.getTimezoneID())
			};
			c.getDayOfMonth = function() {
				return this.toParallelDate().getUTCDate()
			};
			c.getDayOfWeek = function() {
				return this.toParallelDate().getUTCDay()
			};
			c.getDayOfYear = function() {
				var a = this.startOfDay().instant - this.startOfYear().instant;
				return Math.round(a / b("DateConsts").SEC_PER_DAY)
			};
			c.getYear = function() {
				return this.toParallelDate().getUTCFullYear()
			};
			c.getHours = function() {
				return this.toParallelDate().getUTCHours()
			};
			c.getMinutes = function() {
				return this.toParallelDate().getUTCMinutes()
			};
			c.getMonth = function() {
				return this.toParallelDate().getUTCMonth() + 1
			};
			c.getSeconds = function() {
				return this.toParallelDate().getUTCSeconds()
			};
			c.getWeekOfYear = function() {
				var a = this.startOfYear();
				a = a.equals(a.startOfWeek()) ? a.subtractDays(b("DateConsts").DAYS_PER_WEEK) : a.startOfWeek();
				a = this.startOfWeek().instant - a.instant;
				return Math.round(a / (b("DateConsts").SEC_PER_DAY * b("DateConsts").DAYS_PER_WEEK))
			};
			c.getOffset = function() {
				return b("Instant").getOffset(this.instant, this.timezoneID)
			};
			c.$1 = function(b) {
				var c = this.toParallelDate();
				c.setUTCFullYear(b.year != null ? b.year : c.getUTCFullYear(), b.month != null ? b.month - 1 : c.getUTCMonth(), b.day != null ? b.day : c.getUTCDate());
				b.hour != null && c.setUTCHours(b.hour);
				b.minute != null && c.setUTCMinutes(b.minute);
				b.second != null && c.setUTCSeconds(b.second);
				return a.fromParallelDate(c, this.timezoneID)
			};
			c.set = function(a) {
				a.year == null || b("Instant").wholeYearRangeInYears.since <= a.year && a.year < b("Instant").wholeYearRangeInYears.until || g(0, 1638);
				a.month == null || 1 <= a.month && a.month <= 12 || g(0, 1639);
				a.day == null || 1 <= a.day && a.day <= 31 || g(0, 1640);
				a.hour == null || a.hour >= 0 && a.hour <= 23 || g(0, 1151);
				a.minute == null || a.minute >= 0 && a.minute <= 59 || g(0, 1152);
				a.second == null || a.second >= 0 && a.second <= 59 || g(0, 1153);
				return this.$1(a)
			};
			c.update = function(a, b, c, d, e, f) {
				return this.set({
					year: a,
					month: b,
					day: c,
					hour: d === null ? void 0 : d,
					minute: e === null ? void 0 : e,
					second: f === null ? void 0 : f
				})
			};
			c.add = function(c) {
				var d = this;
				if (c.month || c.year) {
					var e = d.getMonth() + (c.month || 0) + (c.year || 0) * 12;
					d = d.$1({
						month: e
					});
					b("SharedDateUtils").divide(d.getMonth(), 12)[1] !== b("SharedDateUtils").divide(e, 12)[1] && (d = d.$1({
						day: 0
					}))
				}
				c.week && (d = d.$1({
					day: d.getDayOfMonth() + 7 * c.week
				}));
				c.day && (d = d.$1({
					day: d.getDayOfMonth() + c.day
				}));
				if (c.hour || c.minute || c.second) {
					e = d.toDate();
					c.hour && e.setUTCHours(e.getUTCHours() + c.hour);
					c.minute && e.setUTCMinutes(e.getUTCMinutes() + c.minute);
					c.second && e.setUTCSeconds(e.getUTCSeconds() + c.second);
					d = a.fromDate(e, this.timezoneID)
				}
				return d
			};
			c.subtract = function(a) {
				var b = {};
				Object.keys(a).forEach(function(c) {
					return b[c] = -a[c]
				});
				return this.add(b)
			};
			c.addDuration = function(a) {
				return this.add({
					second: a
				})
			};
			c.subtractDuration = function(a) {
				return this.subtract({
					second: a
				})
			};
			c.addYears = function(a) {
				return this.add({
					year: a
				})
			};
			c.addMonths = function(a) {
				return this.add({
					month: a
				})
			};
			c.addWeeks = function(a) {
				return this.add({
					week: a
				})
			};
			c.addDays = function(a) {
				return this.add({
					day: a
				})
			};
			c.addHours = function(a) {
				return this.add({
					hour: a
				})
			};
			c.addMinutes = function(a) {
				return this.add({
					minute: a
				})
			};
			c.addSeconds = function(a) {
				return this.add({
					second: a
				})
			};
			c.$2 = function(a) {
				var b = this.ceil(a);
				return b.isEqual(this) ? this.addSeconds(1).ceil(a).subtractSeconds(1) : b.subtractSeconds(1)
			};
			c.endOfYear = function() {
				return this.$2(b("PeriodUnit").year)
			};
			c.endOfMonth = function() {
				return this.$2(b("PeriodUnit").month)
			};
			c.endOfWeek = function() {
				return this.$2(b("PeriodUnit").week)
			};
			c.endOfDay = function() {
				return this.$2(b("PeriodUnit").day)
			};
			c.endOfHour = function() {
				return this.$2(b("PeriodUnit").hour)
			};
			c.endOfMinute = function() {
				return this.$2(b("PeriodUnit").minute)
			};
			c.subtractYears = function(a) {
				return this.subtract({
					year: a
				})
			};
			c.subtractMonths = function(a) {
				return this.subtract({
					month: a
				})
			};
			c.subtractWeeks = function(a) {
				return this.subtract({
					week: a
				})
			};
			c.subtractDays = function(a) {
				return this.subtract({
					day: a
				})
			};
			c.subtractHours = function(a) {
				return this.subtract({
					hour: a
				})
			};
			c.subtractMinutes = function(a) {
				return this.subtract({
					minute: a
				})
			};
			c.subtractSeconds = function(a) {
				return this.subtract({
					second: a
				})
			};
			c.startOfYear = function() {
				return this.floor(b("PeriodUnit").year)
			};
			c.startOfMonth = function() {
				return this.floor(b("PeriodUnit").month)
			};
			c.startOfWeek = function() {
				return this.floor(b("PeriodUnit").week)
			};
			c.startOfDay = function() {
				return this.floor(b("PeriodUnit").day)
			};
			c.startOfHour = function() {
				return this.floor(b("PeriodUnit").hour)
			};
			c.startOfMinute = function() {
				return this.floor(b("PeriodUnit").minute)
			};
			c.setYear = function(a) {
				return this.set({
					year: a
				})
			};
			c.setMonth = function(a) {
				return this.set({
					month: a
				})
			};
			c.setDayOfMonth = function(a) {
				return this.set({
					day: a
				})
			};
			c.setHours = function(a) {
				return this.set({
					hour: a
				})
			};
			c.setMinutes = function(a) {
				return this.set({
					minute: a
				})
			};
			c.setSeconds = function(a) {
				return this.set({
					second: a
				})
			};
			c.setDayOfWeek = function(a) {
				a >= 0 && a <= 6 || g(0, 6072);
				return this.addDays(a - this.getDayOfWeek())
			};
			c.setTimezoneID = function(b) {
				return a.create(this.instant, b)
			};
			c.floor = function(a) {
				var c = {
					hour: 0,
					minute: 0,
					second: 0
				};
				switch (a) {
					case b("PeriodUnit").year:
						return this.set(babelHelpers["extends"]({}, c, {
							month: 1,
							day: 1
						}));
					case b("PeriodUnit").month:
						return this.set(babelHelpers["extends"]({}, c, {
							day: 1
						}));
					case b("PeriodUnit").week:
						return this.set(c).subtractDays(this.getDayOfWeek());
					case b("PeriodUnit").day:
						return this.set(c);
					case b("PeriodUnit").hour:
						return this.set({
							minute: 0,
							second: 0
						});
					case b("PeriodUnit").minute:
						return this.set({
							second: 0
						});
					case b("PeriodUnit").second:
						return this;
					default:
						g(0, 5510, a)
				}
			};
			c.ceil = function(a) {
				var b = this.floor(a);
				if (this.equals(b)) return b;
				else {
					var c = {};
					c[a] = 1;
					return b.add(c)
				}
			};
			c.format = function(a, c) {
				var d = this.getParallelInUTC();
				return b("Instant").format(d.instant, a, c)
			};
			c.getUnixTimestamp = function() {
				return this.instant * b("DateConsts").MS_PER_SEC
			};
			c.getUnixTimestampSeconds = function() {
				return this.instant
			};
			c.isEqual = function(a) {
				return this.instant === a.instant
			};
			c.secondsUntil = function(a) {
				return a.instant - this.instant
			};
			c.valueOf = function() {
				return this.instant
			};
			c.toString = function() {
				return this.toISOString()
			};
			c.toISOString = function() {
				var a = this.format("Y-m-dTH:i:s", {
						skipPatternLocalization: !0
					}),
					b = this.getOffset();
				b = (b >= 0 ? "+" : "-") + k(Math.floor(Math.abs(b) / 3600)) + k(Math.abs(b) % 3600 / 60);
				return a + b
			};
			a.createFromISOString = function(a, b) {
				return this.fromISOString(a, b)
			};
			c.toDate = function() {
				return new Date(b("DateConsts").MS_PER_SEC * this.instant)
			};
			a.fromDate = function(c, d) {
				return a.create(Math.floor(c.getTime() / b("DateConsts").MS_PER_SEC), d)
			};
			a.localFromDate = function(c) {
				return a.localCreate(Math.floor(c.getTime() / b("DateConsts").MS_PER_SEC))
			};
			c.toParallelDate = function() {
				return this.getParallelInUTC().toDate()
			};
			a.setupTimezone = function(a, c) {
				c = c.map(function(a) {
					return {
						start: a.ts,
						offset: -b("DateConsts").SEC_PER_MIN * a.offset
					}
				});
				c.push({
					start: b("Instant").range.until,
					offset: c[c.length - 1].offset
				});
				b("Timezone").setupTimezone(a, c)
			};
			a.setupTimezoneFallback = function(a, c) {
				b("Timezone").setFallbackOffset(a, c * b("DateConsts").SEC_PER_HOUR)
			};
			a.fromParallelDate = function(b, c) {
				return a.fromDate(b, i).getParallel(c)
			};
			c.toFBDate = function() {
				return a.fromLegacyArgs(b("DateConsts").MS_PER_SEC * this.instant, this.timezoneID)
			};
			a.fromFBDate = function(b) {
				return a.create(b.getUnixTimestampSeconds(), b.getTimezoneID())
			};
			c.toJSON = function() {
				return {
					instant: b("Instant").toISOString(this.instant),
					timezoneID: this.timezoneID
				}
			};
			c.fromJSON = function(c) {
				return a.create(b("Instant").fromISOString(c.instant), c.timezoneID)
			};
			return a
		}();
	e.exports = j;
	j.create = b("memoizeWithArgs")(a, function(a, b) {
		return a + "__" + b
	}, "DateTime.create");
	j.fromISOString = b("memoizeWithArgs")(c, function(a, b) {
		return a + "__" + b
	}, "DateTime.fromISOString");

	function k(a) {
		return ("0" + a).substr(-2)
	}
	var l = {
		isPrimitive: function(a) {
			return a == null || typeof a === "boolean" || typeof a === "number" || typeof a === "string"
		},
		defaultValue: function(a) {
			if (a instanceof Date) {
				var b = a.toString();
				if (l.isPrimitive(b)) return b
			}
			if (a.valueOf) {
				b = a.valueOf();
				if (l.isPrimitive(b)) return b
			}
			if (a.toString) {
				b = a.toString();
				if (l.isPrimitive(b)) return b
			}
			g(0, 6073)
		}
	};

	function a(a, b) {
		return new j(a, b)
	}

	function c(a, c) {
		return j.fromDate(b("parseISODate")(a), c)
	}
}), null);