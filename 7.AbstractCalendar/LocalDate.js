__d("LocalDate", ["invariant", "DateConsts", "DateTime", "Instant", 
	"PeriodUnit", "SharedDateUtils", "Timezone"], (function (a, b, c, d, e, f, g) {
	"use strict";
	a = function () {
		function a(a, b, c) {
			this.year = a, this.month = b, this.day = c
		}
		a.apply = function (b) {
			return new a(b.year, b.month, b.day)
		};
		a.create = function (b, c, d) {
			return new a(b, c, d)
		};
		a.today = function (c) {
			return a.fromDateTime(b("DateTime").now(c))
		};
		var c = a.prototype;
		c.equals = function (a) {
			return this.year === a.year && this.month === a.month && this.day === a.day
		};
		c.hashCode = function () {
			return (this.year * 12 + this.month) * 30 + this.day
		};
		c.compare = function (a) {
			var b;
			b = this.year - a.year;
			if (b) return b;
			b = this.month - a.month;
			if (b) return b;
			b = this.day - a.day;
			return b
		};
		c.isBefore = function (a) {
			return this.compare(a) < 0
		};
		c.isAfter = function (a) {
			return this.compare(a) > 0
		};
		c.isBeforeOrEqual = function (a) {
			return this.compare(a) <= 0
		};
		c.isAfterOrEqual = function (a) {
			return this.compare(a) >= 0
		};
		c.min = function (a) {
			return this.isBefore(a) ? this : a
		};
		c.max = function (a) {
			return this.isBefore(a) ? a : this
		};
		c.getDayOfYear = function () {
			var a = this.toInstant(b("Timezone").UTC) - this.startOfYear().toInstant(b("Timezone").UTC);
			return Math.round(a / b("PeriodUnit").getApproximateDuration(b("PeriodUnit").day))
		};
		c.getDayOfMonth = function () {
			return this.day
		};
		c.getDayOfWeek = function () {
			return this.toUTCDate().getUTCDay()
		};
		c.getMonth = function () {
			return this.month
		};
		c.getYear = function () {
			return this.year
		};
		c.$1 = function (b) {
			var c = this.toUTCDate();
			c.setUTCFullYear(b.year != null ? b.year : c.getUTCFullYear(), b.month != null ? b.month - 1 : c.getUTCMonth(), b.day != null ? b.day : c.getUTCDate());
			return a.fromUTCDate(c)
		};
		c.set = function (a) {
			a.year == null || b("Instant").wholeYearRangeInYears.since <= a.year && a.year < b("Instant").wholeYearRangeInYears.until || g(0, 1638);
			a.month == null || 1 <= a.month && a.month <= 12 || g(0, 1639);
			a.day == null || 1 <= a.day && a.day <= 31 || g(0, 1640);
			return this.$1(a)
		};
		c.add = function (a) {
			var c = this;
			if (a.month || a.year) {
				var d = c.month + (a.month || 0) + (a.year || 0) * 12;
				c = c.$1({
					month: d
				});
				b("SharedDateUtils").divide(c.month, 12)[1] !== b("SharedDateUtils").divide(d, 12)[1] && (c = c.$1({
					day: 0
				}))
			}
			a.week && (c = c.$1({
				day: c.getDayOfMonth() + 7 * a.week
			}));
			a.day && (c = c.$1({
				day: c.day + a.day
			}));
			return c
		};
		c.subtract = function (a) {
			var b = {};
			Object.keys(a).forEach(function (c) {
				return b[c] = -a[c]
			});
			return this.add(b)
		};
		c.daysBetween = function (a) {
			var c = this;
			c = c.toInstant(b("Timezone").UTC) - a.toInstant(b("Timezone").UTC);
			return Math.abs(c / b("DateConsts").SEC_PER_DAY)
		};
		c.addYears = function (a) {
			return this.add({
				year: a
			})
		};
		c.addMonths = function (a) {
			return this.add({
				month: a
			})
		};
		c.addWeeks = function (a) {
			return this.add({
				week: a
			})
		};
		c.addDays = function (a) {
			return this.add({
				day: a
			})
		};
		c.subtractYears = function (a) {
			return this.subtract({
				year: a
			})
		};
		c.subtractMonths = function (a) {
			return this.subtract({
				month: a
			})
		};
		c.subtractWeeks = function (a) {
			return this.subtract({
				week: a
			})
		};
		c.subtractDays = function (a) {
			return this.subtract({
				day: a
			})
		};
		c.startOfYear = function () {
			return this.floor(b("PeriodUnit").year)
		};
		c.startOfMonth = function () {
			return this.floor(b("PeriodUnit").month)
		};
		c.startOfWeek = function () {
			return this.floor(b("PeriodUnit").week)
		};
		c.floor = function (a) {
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
				default:
					g(0, 1641, a)
			}
		};
		c.ceil = function (a) {
			var b = this.floor(a);
			if (this.equals(b)) return b;
			else {
				var c = {};
				c[a] = 1;
				return b.add(c)
			}
		};
		c.format = function (a, c) {
			return b("Instant").format(this.toInstant(b("Timezone").UTC), a, c)
		};
		c.toString = function () {
			return this.toISOString()
		};
		c.toISOString = function () {
			return this.format("Y-m-d", {
				skipPatternLocalization: !0
			})
		};
		a.fromISOString = function (b) {
			var c = /^(\d+)-(\d+)-(\d+)/;
			c = c.exec(b);
			c != null || g(0, 18351, b, typeof b);
			c[0];
			b = c[1];
			var d = c[2];
			c = c[3];
			return a.create(+b, +d, +c)
		};
		c.toUTCDate = function () {
			return new Date(b("DateConsts").MS_PER_SEC * this.toInstant(b("Timezone").UTC))
		};
		a.fromUTCDate = function (b) {
			return a.create(b.getUTCFullYear(), b.getUTCMonth() + 1, b.getUTCDate())
		};
		c.toInstant = function (a) {
			var c = Date.UTC(this.year, this.month - 1, this.day) / b("DateConsts").MS_PER_SEC;
			return b("Instant").getParallel(c, a)
		};
		a.fromInstant = function (c, d) {
			c = c + b("Instant").getOffset(c, d);
			return a.fromUTCDate(new Date(b("DateConsts").MS_PER_SEC * c))
		};
		c.toDateTime = function (a) {
			return b("DateTime").create(this.toInstant(a), a)
		};
		a.fromDateTime = function (b) {
			b = b.getFields();
			return a.create(b.year, b.month, b.day)
		};
		c.toFBDate = function (a) {
			return b("DateTime").fromLegacyArgs(b("DateConsts").MS_PER_SEC * this.toInstant(a), a)
		};
		a.fromFBDate = function (b) {
			return a.create(b.getYear(), b.getMonth(), b.getDayOfMonth())
		};
		c.toDaysSinceEpoch = function () {
			var a = this.toInstant(b("Timezone").UTC);
			return Math.floor(a / b("PeriodUnit").getApproximateDuration(b("PeriodUnit").day))
		};
		a.fromDaysSinceEpoch = function (c) {
			return a.fromUTCDate(new Date(c * b("DateConsts").MS_PER_DAY))
		};
		c.toJSON = function () {
			return this.toISOString()
		};
		c.fromJSON = function (b) {
			return a.fromISOString(b)
		};
		c.toTimestampInMilliseconds = function (a) {
			return this.toInstant(a) * b("DateConsts").MS_PER_SEC
		};
		a.fromTimestampInMilliseconds = function (c, d) {
			return a.fromInstant(c / b("DateConsts").MS_PER_SEC, d)
		};
		return a
	}();
	e.exports = a
}), null);