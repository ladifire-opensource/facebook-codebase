__d("CandelaPureRenderMixin", ["shallowEqual"], (function(a, b, c, d, e, f) {
	"use strict";
	a = {
		shouldComponentUpdate: function(a, c, d) {
			return !b("shallowEqual")(this.props, a) || !b("shallowEqual")(this.state, c) || !b("shallowEqual")(this.context, d)
		}
	};
	e.exports = a
}), null);