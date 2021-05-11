__d("SpectrumTooltipDescription", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			return h.jsx("span", babelHelpers["extends"]({}, this.props, {
				className: b("joinClasses")(this.props.className, "_2fp7")
			}))
		};
		return c
	}(h.Component);
	e.exports = a
}), null);