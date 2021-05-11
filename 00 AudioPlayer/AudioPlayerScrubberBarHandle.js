__d("AudioPlayerScrubberBarHandle.react", ["cssVar", "React"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = {
		color: "#4080ff"
	};
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			return h.jsx("g", {
				transform: this.props.translate,
				onMouseDown: this.props.onMouseDown,
				children: h.jsx("ellipse", {
					cx: this.props.radius,
					cy: this.props.radius,
					rx: this.props.radius,
					ry: this.props.radius,
					fill: this.props.color
				})
			})
		};
		return b
	}(h.PureComponent);
	e.exports = c;
	c.defaultProps = a
}), null);