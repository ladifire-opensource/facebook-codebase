__d("InsightsPager.react", ["cx", "fbt", "XUISpinner.react", "react"], (function(a, b, c, d, e, f, g, h) {
	var i, j = i || b("react");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.onClick = function() {
				c.props.isLoading || c.props.onClick()
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.render = function() {
			var a;
			this.props.isLoading ? a = j.jsx(b("XUISpinner.react"), {
				className: "_vj4",
				color: "white",
				size: "large"
			}) : a = h._("See More");
			return j.jsx("div", {
				className: "_25q1",
				onClick: this.onClick,
				role: "presentation",
				children: a
			})
		};
		return c
	}(j.Component);
	e.exports = a
}), null);