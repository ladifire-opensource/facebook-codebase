__d("SpectrumFlag", ["cx", "React", "SpectrumAnimationLayer"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = 20,
		j = 100;
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a, c = this.props.height ? this.props.height : j,
				d = {
					height: c
				};
			this.props.placement == "bottom" ? a = h.jsx(b("SpectrumAnimationLayer"), {
				opacity: .9,
				x: Math.round(this.props.x - i),
				y: Math.round(this.props.y),
				children: h.jsx("div", {
					className: "_57qv _57qw",
					children: h.jsx("div", {
						style: d,
						className: "_57qx",
						children: h.jsxs("div", {
							className: "_57qy",
							children: [h.jsx("div", {
								className: "_57qz",
								children: h.jsx("i", {
									className: "_57q-"
								})
							}), h.jsx("div", {
								className: "_57q_",
								children: this.props.children
							})]
						})
					})
				})
			}) : a = h.jsx(b("SpectrumAnimationLayer"), {
				opacity: .9,
				x: Math.round(this.props.x - i),
				y: Math.round(this.props.y - c),
				children: h.jsx("div", {
					className: "_57qv _57r0",
					children: h.jsx("div", {
						style: d,
						className: "_57qx",
						children: h.jsxs("div", {
							className: "_57qy",
							children: [h.jsx("div", {
								className: "_57q_",
								children: this.props.children
							}), h.jsx("div", {
								className: "_57qz",
								children: h.jsx("i", {
									className: "_57r1"
								})
							})]
						})
					})
				})
			});
			return a
		};
		return c
	}(h.Component);
	e.exports = a
}), null);