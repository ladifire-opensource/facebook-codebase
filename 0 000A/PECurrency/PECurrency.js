//https://www.facebook.com/jobs_composer/?job_opening_create_surface=PAGE&page_id=451090751993359&referer_mechanism=page_composer_header&source=page_composer

__d("PECurrency", ["PECurrencyConfig", "intlNumUtils"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("PECurrencyConfig").currency_map_for_cc,
		h = b("PECurrencyConfig").currency_map_for_render,
		i = 100;

	function j(a) {
		var b = 0;
		a = a;
		while (a > 1) b++, a /= 10;
		return b
	}

	function k(a, b, c) {
		var d = h[a].symbol,
			e = h[a].format || "{symbol}{amount}";
		c === !0 && d != a && (e.indexOf("{symbol}") >= e.indexOf("{amount}") ? e += " (" + a + ") " : e += " " + a);
		return e.replace("{symbol}", d).replace("{amount}", String(b))
	}

	function a(a, c, d) {
		d = babelHelpers["extends"]({
			showCurrencyCode: !1,
			showDecimals: !0,
			showSymbol: !0,
			stripZeros: !1,
			thousandSeparator: !1
		}, d);
		var e = s(a) || i;
		c = c / e;
		e = d.showDecimals ? j(e) : 0;
		d.stripZeros || (c = b("intlNumUtils").formatNumber(c, e));
		d.thousandSeparator && (typeof c === "string" && (c = b("intlNumUtils").parseNumber(c)), c = b("intlNumUtils").formatNumberWithThousandDelimiters(Number(c), e));
		!d.showSymbol ? e = d.showCurrencyCode ? c + " " + a : String(c) : (typeof c === "number" && (c = "" + c), e = k(a, c, d.showCurrencyCode));
		return e
	}

	function c(a, c, d) {
		d = babelHelpers["extends"]({
			showCurrencyCode: !1,
			showDecimals: !0,
			showSymbol: !0,
			stripZeros: !1,
			thousandSeparator: !1
		}, d);
		var e = s(a) || 0;
		c = c / i;
		e = d.showDecimals ? j(e) : 0;
		d.stripZeros || (c = b("intlNumUtils").formatNumber(c, e));
		d.thousandSeparator && (typeof c === "string" && (c = b("intlNumUtils").parseNumber(c)), c = b("intlNumUtils").formatNumberWithThousandDelimiters(Number(c), e));
		!d.showSymbol ? e = d.showCurrencyCode ? c + " " + a : String(c) : (typeof c === "number" && (c = "" + c), e = k(a, c, d.showCurrencyCode));
		return e
	}

	function d(a, b, c, d, e) {
		b = l(a, b, !0, c, d, e);
		switch (a) {
			case "AUD":
				return "A" + b;
			case "CAD":
				return "C" + b;
			case "HKD":
				return "HK" + b;
			case "SGD":
				return "S" + b;
			case "COP":
				return "COP" + b;
			default:
				return b
		}
	}

	function f(a, b, c, d, e) {
		b = m(a, b, !0, c, d, e);
		switch (a) {
			case "AUD":
				return "A" + b;
			case "CAD":
				return "C" + b;
			case "HKD":
				return "HK" + b;
			case "SGD":
				return "S" + b;
			case "COP":
				return "COP" + b;
			default:
				return b
		}
	}

	function l(a, c, d, e, f, g) {
		d = d != null ? d : !0;
		e = e != null ? e : !1;
		f = f != null ? f : !1;
		g = g != null ? g : !1;
		var h = s(a) || i,
			l = Math.abs(c) / h;
		h = j(h);
		f || (l = b("intlNumUtils").formatNumber(l, h));
		g && (typeof l === "string" && (l = b("intlNumUtils").parseNumber(l)), l = b("intlNumUtils").formatNumberWithThousandDelimiters(Number(l), f ? 0 : h));
		!d ? g = e ? l + " " + a : String(l) : (typeof l === "number" && (l = "" + l), g = k(a, l, e));
		c < 0 && (g = "-" + g);
		return g
	}

	function m(a, c, d, e, f, g) {
		d = d != null ? d : !0;
		e = e != null ? e : !1;
		f = f != null ? f : !1;
		g = g != null ? g : !1;
		var h = s(a) || 0,
			l = Math.abs(c) / i;
		h = j(h);
		f || (l = b("intlNumUtils").formatNumber(l, h));
		g && (typeof l === "string" && (l = b("intlNumUtils").parseNumber(l)), l = b("intlNumUtils").formatNumberWithThousandDelimiters(Number(l), f ? 0 : h));
		!d ? g = e ? l + " " + a : String(l) : (typeof l === "number" && (l = "" + l), g = k(a, l, e));
		c < 0 && (g = "-" + g);
		return g
	}

	function n(a, b, c, d, e) {
		return l(a.currency, a.amount, b, c, d, e)
	}

	function o(a, b, c, d, e) {
		return m(a.currency, a.amount, b, c, d, e)
	}

	function p(a) {
		a = t(a);
		return a != null ? Object.keys(a) : []
	}

	function q(a) {
		return !h[a] ? null : h[a].screen_name
	}

	function r(a) {
		return !h[a] ? null : h[a].symbol
	}

	function s(a) {
		return !h[a] ? null : h[a].offset
	}

	function t(a) {
		switch (a) {
			case 2:
				return g;
			case 1:
				return h;
			default:
				return null
		}
	}
	e.exports = {
		DEFAULT_AMOUNT_OFFSET: i,
		formatAmount: m,
		formatAmountWithOffset: l,
		formatAmountWithExtendedSymbol: f,
		formatAmountWithExtendedSymbolAndOffset: d,
		formatAmountX: c,
		formatAmountXWithOffset: a,
		formatCurrencyAmount: o,
		formatCurrencyAmountWithOffset: n,
		formatRawAmount: k,
		getAllCurrencies: p,
		getCurrencyScreenName: q,
		getCurrencySymbol: r,
		getCurrencyOffset: s,
		getMaxSubDenomLength: j
	}
}), null);