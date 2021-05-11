__d("AudioPlayerControlButton.react", ["cx", "Image.react", "Link.react", "React"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				onHover: !1
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.render = function() {
			var a = this,
				c = this.props.imageOnHoverURI ? this.props.imageOnHoverURI : this.props.imageURI;
			return h.jsx(b("Link.react"), {
				onClick: this.props.onClick,
				children: h.jsx(b("Image.react"), {
					className: "_2jjr",
					src: this.state.onHover ? c : this.props.imageURI,
					onMouseOver: function() {
						a.setState({
							onHover: !0
						})
					},
					onMouseOut: function() {
						a.setState({
							onHover: !1
						})
					}
				})
			})
		};
		return c
	}(h.Component);
	e.exports = a
}), null);