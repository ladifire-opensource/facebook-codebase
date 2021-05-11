__d("VideoPlayerSurface.react", ["React"], (function(a, b, c, d, e, f) {
	"use strict";
	a = b("React");
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			return this.props.children != null ? this.props.children : null
		};
		return b
	}(a.PureComponent);
	e.exports = c
}), null);