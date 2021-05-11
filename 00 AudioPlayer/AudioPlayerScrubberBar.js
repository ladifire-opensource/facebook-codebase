__d("AudioPlayerScrubberBar.react", ["cssVar", "cx", "React"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = {
		backgroundColor: "#90949c",
		barHeight: 2,
		cornerRadius: 0,
		lapsedColor: "#56A1EB"
	};
	c = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = (this.props.height - this.props.barHeight) / 2;
			return i.jsxs("svg", {
				className: "_3z8e",
				height: this.props.height,
				viewBox: "0 0 " + this.props.width + " " + this.props.height,
				width: this.props.width,
				children: [i.jsxs("g", {
					onMouseDown: this.props.onMouseDown,
					children: [i.jsx("rect", {
						x: 0,
						y: 0,
						width: this.props.width,
						height: this.props.height,
						opacity: "0",
						rx: this.props.cornerRadius,
						ry: this.props.cornerRadius
					}), i.jsx("rect", {
						x: 0,
						y: a,
						width: this.props.width,
						height: this.props.barHeight,
						fill: this.props.theme === "LIGHT" ? "#FFFFFF" : this.props.backgroundColor,
						rx: this.props.cornerRadius,
						ry: this.props.cornerRadius
					}), i.jsx("rect", {
						x: 0,
						y: a,
						width: this.props.translate,
						height: this.props.barHeight,
						fill: this.props.lapsedColor,
						rx: this.props.cornerRadius,
						ry: this.props.cornerRadius
					})]
				}), this.props.children]
			})
		};
		return b
	}(i.PureComponent);
	e.exports = c;
	c.defaultProps = a
}), null);