__d("SpectrumPercentageScale", ["NumberFormatConfig", "SpectrumBaseNumberScale", "intlNumUtils"], (function(a, b, c, d, e, f) {
	var g = 3,
		h = 3;

	function i(a) {
		if (a < .01) return j(a);
		a = k(a);
		return b("intlNumUtils").getFloatString(a, b("NumberFormatConfig").numberDelimiter, b("NumberFormatConfig").decimalSeparator) + "%"
	}

	function j(a, c) {
		c === void 0 && (c = h);
		a = l(a, c);
		return b("intlNumUtils").getFloatString(a, b("NumberFormatConfig").numberDelimiter, b("NumberFormatConfig").decimalSeparator) + "%"
	}

	function k(a) {
		return Math.round(a * 100)
	}

	function l(a, b) {
		a = a * 100;
		a = a.toPrecision(b);
		return parseFloat(a)
	}

	function m(a) {
		a = a < .01 ? l(a, h) : k(a);
		return a / 100
	}

	function n(a) {
		a.tickFormat = function() {
			return i
		};
		a.tooltipFormat = function() {
			return function(a, b) {
				return j(a, b)
			}
		};
		a.roundedDecimalFormat = function() {
			return m
		};
		var b = a.copy;
		a.copy = function() {
			return n(b())
		};
		return a
	}
	a = function() {
		return n(b("SpectrumBaseNumberScale")(g))
	};
	c = a;
	e.exports = c
}), null);