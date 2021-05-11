__d("SpectrumTooltip", ["cx", "PointerEventElement.react", "React", "ReactDOM", 
	"SpectrumAnimationLayer", "prop-types"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = 200,
		j = 10,
		k = 15;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				width: 0
			}, d.calculateCardWidth = function() {
				var a = b("ReactDOM").findDOMNode(d.refs.card).offsetWidth;
				d.setState({
					width: a
				});
				d.props.onCalculateWidth && d.props.onCalculateWidth(a)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentDidUpdate = function(a) {
			var b = this.props.x !== this.props.x,
				c = this.props.y !== this.props.y;
			a = this.props.x != a.x || this.props.y != a.y;
			a && !b && !c && this.calculateCardWidth()
		};
		d.componentDidMount = function() {
			this.calculateCardWidth()
		};
		d.render = function() {
			var a = "_51i4" + (this.props.flip ? " _5k2_" : ""),
				c = this.props.x - j;
			this.props.flip && (c = c - this.state.width - k);
			return h.jsx(b("SpectrumAnimationLayer"), {
				opacity: .9,
				x: Math.round(c),
				y: Math.round(this.props.y - i / 2),
				height: i,
				zIndex: this.props.zIndex,
				children: h.jsx(b("PointerEventElement.react"), {
					className: a,
					children: h.jsxs("div", {
						className: "_5c7e _51i5",
						ref: "card",
						children: [h.jsx("div", {
							className: "_5l1x",
							children: this.props.children
						}), h.jsx("i", {
							className: "_5sx3"
						})]
					})
				})
			})
		};
		return c
	}(h.Component);
	a.propTypes = {
		flip: b("prop-types").bool,
		onCalculateWidth: b("prop-types").func
	};
	e.exports = a
}), null);