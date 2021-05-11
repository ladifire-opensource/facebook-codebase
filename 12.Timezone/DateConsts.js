__d("DateConsts", [], (function (a, b, c, d, e, f) {
	f.getDaysInMonth = a;
	f.getCurrentTimeInSeconds = b;
	var g = 1e3;
	f.MS_PER_SEC = g;
	c = 60;
	f.SEC_PER_MIN = c;
	d = 60;
	f.MIN_PER_HOUR = d;
	e = 24;
	f.HOUR_PER_DAY = e;
	a = 7;
	f.DAYS_PER_WEEK = a;
	b = 12;
	f.MONTHS_PER_YEAR = b;
	b = 1e3;
	f.US_PER_MS = b;
	b = 30.43;
	f.AVG_DAYS_PER_MONTH = b;
	b = 4.333;
	f.AVG_WEEKS_PER_MONTH = b;
	b = 365.242;
	f.AVG_DAYS_PER_YEAR = b;
	var h = c * d;
	f.SEC_PER_HOUR = h;
	h = h * e;
	f.SEC_PER_DAY = h;
	e = h * a;
	f.SEC_PER_WEEK = e;
	e = h * b;
	f.SEC_PER_YEAR = e;
	e = g * c;
	f.MS_PER_MIN = e;
	c = e * d;
	f.MS_PER_HOUR = c;
	e = g * h;
	f.MS_PER_DAY = e;
	d = e * a;
	f.MS_PER_WEEK = d;
	c = e * b;
	f.MS_PER_YEAR = c;
	h = {
		SUNDAY: 0,
		MONDAY: 1,
		TUESDAY: 2,
		WEDNESDAY: 3,
		THURSDAY: 4,
		FRIDAY: 5,
		SATURDAY: 6
	};
	f.DAYS = h;
	Object.freeze(h);

	function a(a, b) {
		return new Date(a, b, 0).getDate()
	}

	function b() {
		return Date.now() / g
	}
	a = {
		instantRange: {
			since: -864e10,
			until: 864e10 + 1
		}
	};
	f["private"] = a
}), null);