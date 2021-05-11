__d("SpectrumSplit", ["ReactART", "SpectrumUtilities", "react"], (function(a, b, c, d, e, f) {
	var g, h = b("ReactART").Group,
		i = g || (g = b("react"));
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.handleEvent = function(a) {
				var b = c.eventChannel;
				for (var d = b.length; d--;) {
					var e = b[d];
					if (!(e && e.handleEvent)) continue;
					e.handleEvent(a);
					if (a.shouldStop) break
				}
			}, c.getLayout = function() {
				var a = c.props.scaleY,
					b = a.range()[0];
				a = a.range()[1];
				var d = (a + b) * c.props.heightRatio,
					e = (c.props.theme && c.props.theme.gutter.middle || 0) * .5 + c.props.marginMiddle;
				switch (c.props.layout) {
					case "top-middle":
						return [a, d - e];
					case "middle-top":
						return [d - e, a];
					case "bottom-middle":
						return [b, d + e];
					case "middle-bottom":
						return [d + e, b];
					case "top-bottom":
						return [a, b];
					default:
						return [b, a]
				}
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		c.getExtentY = function(a) {
			var b = +Infinity,
				c = -Infinity;
			i.Children.forEach(a.children, function(a) {
				if (a && a.type.getExtentY) {
					a = a.type.getExtentY(a.props);
					if (!a) return;
					a[0] < b && (b = a[0]);
					a[1] > c && (c = a[1])
				}
			});
			return [b, c]
		};
		c.getGutter = function(a, b, c, d) {
			var e = b.gutter;
			i.Children.forEach(a.children, function(a) {
				if (a && a.type.getGutter) {
					a = a.type.getGutter(a.props, b, c, d);
					for (var f in e) a[f] && (e[f] = Math.max(e[f], a[f]))
				}
			});
			return e
		};
		var d = c.prototype;
		d.UNSAFE_componentWillMount = function() {
			this.props.eventChannel && (this.props.eventChannel[this.props.eventIndex] = this), this.eventChannel = []
		};
		d.componentWillUnmount = function() {
			this.props.eventChannel && delete this.props.eventChannel[this.props.eventIndex]
		};
		d.render = function() {
			var a = this,
				d = this.props.scaleY.copy().range(this.getLayout());
			this.props.separateDomain && d.domain(c.getExtentY(this.props));
			var e = i.Children.map(this.props.children, function(c, e) {
				if (!c) return null;
				c.type.isChartLayer;
				e = {
					alignToGutter: !0,
					eventIndex: e,
					eventChannel: a.eventChannel,
					scaleY: d
				};
				return b("SpectrumUtilities").mergeProps(c, a.props, e)
			});
			return i.jsx(h, {
				children: e
			})
		};
		return c
	}(i.Component);
	a.defaultProps = {
		heightRatio: .5,
		marginMiddle: 0
	};
	e.exports = a
}), null);