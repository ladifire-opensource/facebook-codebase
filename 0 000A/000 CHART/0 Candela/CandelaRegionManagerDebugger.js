__d("CandelaRegionManagerDebugger.react", ["CandelaPlatformConstants", "CandelaRegionManager", "React", "ReactART", "Rectangle.art", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaPlatformConstants").DEFAULT_FONT_FAMILY,
		i = b("ReactART").Group,
		j = b("ReactART").Text;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				regions: new Map()
			}, c.$1 = function() {
				var a = c.context.regionManager;
				a = a.getRegions();
				c.setState({
					regions: a
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			var a = this,
				b = this.context.regionManager;
			b.addListener(function() {
				return a.$1()
			});
			this.$1()
		};
		d.render = function() {
			var a = this.state.regions,
				c = [];
			a.forEach(function(a, d) {
				a.forEach(function(a, e) {
					var f = a.getBoundingRect();
					c.push(g.jsxs(i, {
						children: [g.jsx(b("Rectangle.art"), babelHelpers["extends"]({
							stroke: "purple"
						}, f), d + "-debug-rect-" + e), g.jsx(j, {
							alignment: "right",
							x: f.x + f.width,
							y: f.y + f.height,
							fill: "purple",
							font: {
								fontSize: 11,
								fontFamily: h
							},
							children: a.getUID()
						}, d + "-debug-text-" + e)]
					}, d + "-debug-group-" + e))
				})
			});
			return g.jsx(i, {
				children: c.length ? c : null
			})
		};
		return c
	}(g.Component);
	a.contextTypes = {
		regionManager: b("prop-types").instanceOf(b("CandelaRegionManager"))
	};
	e.exports = a
}), null);