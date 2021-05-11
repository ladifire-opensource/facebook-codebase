__d("CometFormDateInputUtils", ["CometLocalDate", "DateFormatConfig"], (function(a, b, c, d, e, f) {
	"use strict";
	f.parseDateToInputValue = a;
	f.parseStringToDate = c;
	var g = b("DateFormatConfig").numericDateOrder,
		h = b("DateFormatConfig").numericDateSeparator;

	function a(a) {
		return a == null ? "" : g.map(function(b) {
			switch (b) {
				case "d":
					return a.getDate();
				case "m":
					return a.getMonth() + 1;
				case "y":
					return a.getYear()
			}
		}).join(h)
	}

	function c(a) {
		if (a == null) return null;
		var c = a.split(/[^0-9]+/).filter(Boolean);
		if (c.length === 3) {
			var d = Number(c[g.indexOf("y")]),
				e = Number(c[g.indexOf("m")]);
			c = Number(c[g.indexOf("d")]);
			return new(b("CometLocalDate"))(d, e - 1, c)
		}
		d = Date.parse(a);
		return !isNaN(d) ? b("CometLocalDate").fromDate(new Date(d)) : null
	}
}), null);