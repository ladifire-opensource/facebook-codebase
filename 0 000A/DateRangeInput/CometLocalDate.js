__d("CometLocalDate", ["DateConsts", "formatDate"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = 1e3;
	a = function() {
		function a(a, b, c) {
			a = new Date(a, b, c);
			this.year = a.getFullYear();
			this.month = a.getMonth();
			this.date = a.getDate()
		}
		a.fromDate = function(b) {
			b === void 0 && (b = new Date());
			return new a(b.getFullYear(), b.getMonth(), b.getDate())
		};
		a.fromTimestamp = function(a) {
			return this.fromDate(new Date(a * g))
		};
		var c = a.prototype;
		c.getYear = function() {
			return this.year
		};
		c.getMonth = function() {
			return this.month
		};
		c.getDate = function() {
			return this.date
		};
		c.getDayOfWeekFromMonday = function() {
			return (this.getJSDate().getDay() - 1 + b("DateConsts").DAYS_PER_WEEK) % b("DateConsts").DAYS_PER_WEEK
		};
		c.getNumDaysInThisMonth = function() {
			return new Date(this.year, this.month + 1, 0).getDate()
		};
		c.getNumDaysInPrevMonth = function() {
			return new Date(this.year, this.month, 0).getDate()
		};
		c.getWithDaysAdded = function(b) {
			return new a(this.year, this.month, this.date + b)
		};
		c.getWithWeeksAdded = function(a) {
			return this.getWithDaysAdded(a * b("DateConsts").DAYS_PER_WEEK)
		};
		c.getWithMonthsAdded = function(b) {
			return new a(this.year, this.month + b, this.date)
		};
		c.getWithYearsAdded = function(b) {
			return new a(this.year + b, this.month, this.date)
		};
		c.getJSDate = function() {
			return new Date(this.year, this.month, this.date)
		};
		c.format = function(a, c) {
			return b("formatDate")(this.getJSDate(), a, c)
		};
		c.getHash = function() {
			return this.year * 372 + this.month * 31 + this.date
		};
		c.getNumDaysInThisYear = function() {
			return this.isLeapYear() ? 366 : 365
		};
		c.isLeapYear = function() {
			return this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0
		};
		c.isValid = function() {
			return !isNaN(this.getJSDate().getTime())
		};
		c.isEqual = function(a) {
			return this.compareTo(a) === 0
		};
		c.daysBetween = function(a) {
			a = a.getJSDate() - this.getJSDate();
			return Math.round(Math.abs(a / b("DateConsts").MS_PER_DAY))
		};
		c.compareTo = function(a) {
			var b = this.getJSDate();
			a = a.getJSDate();
			return b > a ? 1 : b < a ? -1 : 0
		};
		return a
	}();
	e.exports = a
}), null);