__d("JobsCometComposerSalaryHelpers", ["fbt", "PECurrency"], (function(a, b, c, d, e, f, g) {
	"use strict";
	f.formatCurrency = h;
	f.formatWageText = a;

	function h(a, c) {
		return a == null ? "" : b("PECurrency").formatAmountX(c, a * 100, {
			showDecimals: !0,
			stripZeros: !0,
			thousandSeparator: !0
		}).replace(".00", "")
	}

	function a(a) {
		var b = Boolean(a == null ? void 0 : a.amount),
			c = Boolean(a == null ? void 0 : a.amountMax);
		b = b && c && (a == null ? void 0 : a.amount) !== (a == null ? void 0 : a.amountMax);
		if (b) return j(a);
		else return i(a)
	}

	function i(a) {
		var b = a == null ? void 0 : a.type,
			c = a == null ? void 0 : a.currency;
		a = Boolean(a == null ? void 0 : a.amount) ? a == null ? void 0 : a.amount : a == null ? void 0 : a.amountMax;
		if (Boolean(b) && Boolean(a) && Boolean(c)) switch (b) {
			case "HOURLY":
				return g._("{minPrice}\/gi\u1edd", [g._param("minPrice", h(Number(a) / 100, c))]);
			case "DAILY":
				return g._("{minPrice}\/ng\u00e0y", [g._param("minPrice", h(Number(a) / 100, c))]);
			case "WEEKLY":
				return g._("{minPrice}\/tu\u1ea7n", [g._param("minPrice", h(Number(a) / 100, c))]);
			case "MONTHLY":
				return g._("{minPrice}\/th\u00e1ng", [g._param("minPrice", h(Number(a) / 100, c))]);
			case "ANNUALLY":
				return g._("{minPrice}\/n\u0103m", [g._param("minPrice", h(Number(a) / 100, c))])
		}
	}

	function j(a) {
		var b = a == null ? void 0 : a.type,
			c = a == null ? void 0 : a.currency;
		if (Boolean(b) && Boolean(c)) {
			var d = a == null ? void 0 : a.amount;
			a = a == null ? void 0 : a.amountMax;
			switch (b) {
				case "HOURLY":
					return g._("{minWage} - {maxWage}\/gi\u1edd", [g._param("minWage", h(Number(d) / 100, c)), g._param("maxWage", h(Number(a) / 100, c))]);
				case "DAILY":
					return g._("{minWage} - {maxWage}\/ng\u00e0y", [g._param("minWage", h(Number(d) / 100, c)), g._param("maxWage", h(Number(a) / 100, c))]);
				case "WEEKLY":
					return g._("{minWage} - {maxWage}\/tu\u1ea7n", [g._param("minWage", h(Number(d) / 100, c)), g._param("maxWage", h(Number(a) / 100, c))]);
				case "MONTHLY":
					return g._("{minWage} - {maxWage}\/th\u00e1ng", [g._param("minWage", h(Number(d) / 100, c)), g._param("maxWage", h(Number(a) / 100, c))]);
				case "ANNUALLY":
					return g._("{minWage} - {maxWage}\/n\u0103m", [g._param("minWage", h(Number(d) / 100, c)), g._param("maxWage", h(Number(a) / 100, c))])
			}
		}
	}
}), null);