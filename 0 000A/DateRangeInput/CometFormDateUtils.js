__d("CometFormDateUtils", ["DateConsts"], (function(a, b, c, d, e, f) {
	"use strict";
	f.getDateTimeFromDateAndTime = a;
	f.getDateTimeString = g;
	f.getDateFromDateTimeString = h;
	f.getNullableDateFromDateTimeString = c;
	f.getDateTimeStringFromDate = i;
	f.getNullableDateTimeStringFromDate = d;

	function a(a, b) {
		return h({
			date: a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getYear(),
			time: b
		})
	}

	function g(a) {
		return (a == null ? void 0 : a.date) == null || (a == null ? void 0 : a.time) == null ? null : {
			date: a.date,
			time: a.time
		}
	}

	function h(a) {
		var c, d = a.date;
		a = a.time;
		var e = Math.floor(a / (c = b("DateConsts")).SEC_PER_HOUR),
			f = Math.floor(a / c.SEC_PER_MIN % c.MIN_PER_HOUR);
		a = a % c.SEC_PER_MIN;
		return new Date(d + " " + e + ":" + f + ":" + a)
	}

	function c(a) {
		a = g(a);
		if (a != null) return h(a);
		else return null
	}

	function i(a) {
		return {
			date: a.getMonth() + 1 + "/" + a.getDate() + "/" + a.getFullYear(),
			time: a.getHours() * b("DateConsts").SEC_PER_HOUR + a.getMinutes() * b("DateConsts").SEC_PER_MIN
		}
	}

	function d(a) {
		return a == null ? {
			date: null,
			time: null
		} : i(a)
	}
}), null);