__d("CandelaStructs", ["invariant", "CandelaConstants", "immutable"], (function(a, b, c, d, e, f, g) {
	"use strict";
	a = b("immutable").Record;
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			return a.call(this, b) || this
		}
		return b
	}(a({
		className: "",
		flushToThreshold: !1,
		value: 0
	}));
	f.Threshold = c;
	d = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			return a.call(this, b) || this
		}
		return b
	}(a({
		className: "",
		label: "",
		placement: b("CandelaConstants").Placement.NONE,
		seriesName: "",
		value: 0
	}));
	f.Reference = d;
	e = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			b.dependentSeriesName != null || b.independentSeriesValue != null || g(0, 5580);
			return a.call(this, b) || this
		}
		return b
	}(a({
		dependentSeriesName: null,
		independentSeriesValue: null,
		placement: b("CandelaConstants").Placement.NONE
	}));
	f.Highlight = e;
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b(b) {
			return a.call(this, b) || this
		}
		return b
	}(a({
		className: "",
		placement: b("CandelaConstants").Placement.NONE,
		independentEndValue: 0,
		independentSeriesName: "",
		independentStartValue: 0
	}));
	f.Zone = c
}), null);