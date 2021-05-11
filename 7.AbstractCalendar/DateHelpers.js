__d("DateHelpers", ["range"], (function (a, b, c, d, e, f) {
	f.getISOWeekNumber = a;
	f.isLeapYear = h;
	f.isValidDate = c;

	function a(a) {
		var b = a.getDayOfWeek();
		b === 0 && (b = 7);
		b = Math.floor((a.getDayOfYear() - b + 11) / 7);
		b < 1 ? b = g(a.subtractYears(1)) : b > g(a) && (b = 1);
		return b
	}

	function g(a) {
		var b = a.getYear();
		a = a.startOfYear();
		a = a.getDayOfWeek();
		return a === 4 || a === 3 && h(b) ? 53 : 52
	}

	function h(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function c(a, c, d) {
		switch (c) {
			case 2:
				return h(d) ? b("range")(1, 30).includes(a) : b("range")(1, 29).includes(a);
			case 4:
			case 6:
			case 9:
			case 11:
				return b("range")(1, 31).includes(a);
			default:
				return b("range")(1, 32).includes(a)
		}
	}
}), null);