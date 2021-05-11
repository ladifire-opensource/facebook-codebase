__d("InsightsTableHeaderCell.react", ["cx", "joinClasses", "react"], (function(a, b, c, d, e, f, g) {
	var h, i = h || b("react");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = function() {
				c.props.onSortChange && c.props.onSortChange("click", {
					value: c.props.sortKey
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props.activeSortKey != null,
				c = !!this.props.sortKey && this.props.activeSortKey === this.props.sortKey,
				d = c && this.props.order === "desc";
			a = "_5k3-" + (a ? " _5k3_" : "") + (c ? " _5k40" : "") + (d ? " _5k41" : "");
			d = c ? i.jsx("i", {
				className: "_5k42",
				children: this.props.order
			}) : null;
			c = i.jsx("span", {
				className: b("joinClasses")("_5k43", this.props.labelClass),
				children: this.props.children
			});
			return i.jsx("th", {
				className: b("joinClasses")(a, this.props.className),
				onClick: this.$1,
				children: i.jsxs("span", {
					className: "_5k44",
					children: [d, c]
				})
			})
		};
		return c
	}(i.Component);
	e.exports = a
}), null);