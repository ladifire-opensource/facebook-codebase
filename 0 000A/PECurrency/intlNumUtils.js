__d("intlNumUtils", ["FbtHooks", "NumberFormatConsts", "escapeRegex"], (function(a, b, c, d, e, f) {
	var g, h = 3;
	f = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
	var i = {};

	function j(a) {
		i[a] || (i[a] = new RegExp(a, "i"));
		return i[a]
	}
	var k = j(f.reduce(function(a, c, d) {
		return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")"
	}, ""));

	function l(a, c, d, e, f, g, i) {
		d === void 0 && (d = "");
		e === void 0 && (e = ".");
		f === void 0 && (f = 0);
		g === void 0 && (g = {
			primaryGroupSize: h,
			secondaryGroupSize: h
		});
		var k = g.primaryGroupSize || h;
		g = g.secondaryGroupSize || k;
		i = i && i.digits;
		var l;
		c == null ? l = a.toString() : typeof a === "string" ? l = r(a, c) : l = p(a, c);
		a = l.split(".");
		c = a[0];
		l = a[1];
		if (Math.abs(parseInt(c, 10)).toString().length >= f) {
			a = "$1" + d + "$2$3";
			f = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
			k = c.replace(j(f), a);
			if (k != c) {
				c = k;
				f = "(\\d)(\\d{" + (g - 0) + "})(" + b("escapeRegex")(d) + ")";
				g = j(f);
				while ((k = c.replace(g, a)) != c) c = k
			}
		}
		i != null && (c = m(c, i), l = l && m(l, i));
		d = c;
		l && (d += e + l);
		return d
	}

	function m(a, b) {
		var c = "";
		for (var d = 0; d < a.length; ++d) {
			var e = b[a.charCodeAt(d) - 48];
			c += e !== void 0 ? e : a[d]
		}
		return c
	}

	function a(a, c) {
		var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
		return l(a, c, "", d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
	}

	function n(a, c) {
		var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
		return l(a, c, d.numberDelimiter, d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
	}

	function o(a) {
		return a && Math.floor(Math.log10(Math.abs(a)))
	}

	function c(a, b, c) {
		var d = o(a),
			e = a;
		d < c && (e = a * Math.pow(10, -d + c));
		a = Math.pow(10, o(e) - c + 1);
		e = Math.round(e / a) * a;
		if (d < c) {
			e /= Math.pow(10, -d + c);
			if (b == null) return n(e, c - d - 1)
		}
		return n(e, b)
	}

	function p(a, b) {
		b = b == null ? 0 : b;
		var c = Math.pow(10, b);
		a = a;
		a = Math.round(a * c) / c;
		a += "";
		if (!b) return a;
		if (a.indexOf("e-") !== -1) return a;
		c = a.indexOf(".");
		var d;
		c == -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
		for (var b = 0, c = d; b < c; b++) a += "0";
		return a
	}
	var q = function(a, b) {
		a = a;
		for (var c = 0; c < b; c++) a += "0";
		return a
	};

	function r(a, b) {
		var c = a.indexOf("."),
			d = c === -1 ? a : a.slice(0, c);
		a = c === -1 ? "" : a.slice(c + 1);
		return b != null ? d + "." + q(a.slice(0, b), b - a.length) : d
	}

	function s(a, c, d) {
		d === void 0 && (d = "");
		var e = u(),
			f = a;
		e && (f = a.split("").map(function(a) {
			return e[a] || a
		}).join("").trim());
		f = f.replace(/^[^\d]*\-/, "\x02");
		f = f.replace(k, "");
		a = b("escapeRegex")(c);
		c = b("escapeRegex")(d);
		d = j("^[^\\d]*\\d.*" + a + ".*\\d[^\\d]*$");
		if (!d.test(f)) {
			d = j("(^[^\\d]*)" + a + "(\\d*[^\\d]*$)");
			if (d.test(f)) {
				f = f.replace(d, "$1\x01$2");
				return t(f)
			}
			d = j("^[^\\d]*[\\d " + b("escapeRegex")(c) + "]*[^\\d]*$");
			d.test(f) || (f = "");
			return t(f)
		}
		d = j("(^[^\\d]*[\\d " + c + "]*)" + a + "(\\d*[^\\d]*$)");
		f = d.test(f) ? f.replace(d, "$1\x01$2") : "";
		return t(f)
	}

	function t(a) {
		a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
		var b = Number(a);
		return a === "" || isNaN(b) ? null : b
	}

	function u() {
		var a = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale),
			c = {};
		a = a.numberingSystemData && a.numberingSystemData.digits;
		if (a == null) return null;
		for (var d = 0; d < a.length; d++) c[a.charAt(d)] = d.toString();
		return c
	}

	function d(a) {
		var c = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
		return s(a, c.decimalSeparator || ".", c.numberDelimiter)
	}
	var v = {
		formatNumber: a,
		formatNumberRaw: l,
		formatNumberWithThousandDelimiters: n,
		formatNumberWithLimitedSigFig: c,
		parseNumber: d,
		parseNumberRaw: s,
		truncateLongNumber: r,
		getFloatString: function(a, b, c) {
			a = String(a);
			a = a.split(".");
			b = v.getIntegerString(a[0], b);
			return a.length === 1 ? b : b + c + a[1]
		},
		getIntegerString: function(a, b) {
			b = b;
			b === "" && (b = ",");
			a = String(a);
			var c = /(\d+)(\d{3})/;
			while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
			return a
		}
	};
	e.exports = v
}), null);