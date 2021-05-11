__d("formatNumber", ["fbt", "intlNumUtils"], (function(a, b, c, d, e, f, g) {
	"use strict";

	function a(a, c) {
		return b("intlNumUtils").formatNumber(a, c)
	}

	function h(a, c) {
		c = g._({
			"*": "{number}+"
		}, [g._param("number", b("intlNumUtils").formatNumberWithThousandDelimiters(a, c), [0, a])]);
		return c.toString()
	}

	function i(a, c) {
		c = g._({
			"*": "\u003C{number}"
		}, [g._param("number", b("intlNumUtils").formatNumberWithThousandDelimiters(a, c), [0, a])]);
		return c.toString()
	}

	function c(a, c, d) {
		return a > c ? h(c, d) : b("intlNumUtils").formatNumberWithThousandDelimiters(a, d)
	}

	function d(a, c, d) {
		return a < c ? i(c, d) : b("intlNumUtils").formatNumberWithThousandDelimiters(a, d)
	}
	a.withThousandDelimiters = b("intlNumUtils").formatNumberWithThousandDelimiters;
	a.withMaxLimit = c;
	a.withMinLimit = d;
	e.exports = a
}), null);