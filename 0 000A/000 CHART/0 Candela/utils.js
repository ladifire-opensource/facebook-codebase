__d("CandelaCategoryScale", ["CandelaScale"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			return a.call(this, babelHelpers["extends"]({
				strategy: "category"
			}, b)) || this
		}
		return b
	}(b("CandelaScale"));
	e.exports = a
}), null);
__d("CandelaNumberScale", ["CandelaScale"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			b = babelHelpers["extends"]({
				strategy: "numeric"
			}, b);
			return a.call(this, b) || this
		}
		return b
	}(b("CandelaScale"));
	e.exports = a
}), null);
__d("CandelaCurrencyScale", ["CandelaNumberScale"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			var c;
			c = a.call(this, b) || this;
			c.currencyCode = b.currencyCode;
			return c
		}
		return b
	}(b("CandelaNumberScale"));
	e.exports = a
}), null);
__d("CandelaPercentageScale", ["CandelaNumberScale"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		return b
	}(b("CandelaNumberScale"));
	e.exports = a
}), null);
__d("CandelaTimeScale", ["CandelaNumberScale"], (function(a, b, c, d, e, f) {
	"use strict";
	a = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			b = a.call(this, babelHelpers["extends"]({
				strategy: "time"
			}, b)) || this;
			b.timezoneID = b.strategy.props.timezoneID;
			return b
		}
		return b
	}(b("CandelaNumberScale"));
	e.exports = a
}), null);