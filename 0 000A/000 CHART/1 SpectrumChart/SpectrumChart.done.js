__d("SpectrumChart", ["React", "SpectrumBaseStyleSheet", 
	"SpectrumContextMixin", "SpectrumSurface", "SpectrumTimeScale", 
	"createReactClass_DEPRECATED", "d3-old/scale/linear", "d3-old/scale/ordinal", 
	"emptyFunction", "mergeDeep", "mergeHelpers"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("mergeHelpers").ArrayStrategies;
	a = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumChart",
		mixins: [b("SpectrumContextMixin")],
		getDefaultProps: function() {
			return {
				onMouseMove: b("emptyFunction"),
				onMouseOut: b("emptyFunction")
			}
		},
		getExtentY: function() {
			var a = +Infinity,
				b = -Infinity;
			g.Children.forEach(this.props.children, function(c) {
				if (c && c.type.getExtentY) {
					c = c.type.getExtentY(c.props);
					c && (c[0] < a && (a = c[0]), c[1] > b && (b = c[1]))
				}
			});
			return a == +Infinity && b == -Infinity ? [0, 0] : [a, b]
		},
		getExtentX: function() {
			var a = -Infinity,
				b = Infinity;
			g.Children.forEach(this.props.children, function(c) {
				if (c && c.type.getExtentX) {
					c = c.type.getExtentX(c.props);
					c && (c[1] > a && (a = c[1]), c[0] < b && (b = c[0]))
				}
			});
			return [b, a]
		},
		getDefaultScaleX: function() {
			var a = this.props.domain || this.getExtentX();
			a.copy ? a = a.copy() : a[0] instanceof Date ? a = b("SpectrumTimeScale")().domain(a).interval(b("SpectrumTimeScale").Intervals.Day).clamp(!0) : typeof a[0] === "number" ? a = b("d3-old/scale/linear")().domain(a).clamp(!0) : a = b("d3-old/scale/ordinal")().domain(a);
			return a
		},
		getDefaultScaleY: function() {
			var a = this.getExtentY();
			return b("d3-old/scale/linear")().domain(a).clamp(!0)
		},
		getGutter: function(a, b, c) {
			var d = a.gutter;
			g.Children.forEach(this.props.children, function(e) {
				if (e && e.type.getGutter) {
					e = e.type.getGutter(e.props, a, b, c);
					for (var f in d) e[f] && (d[f] = Math.max(d[f], e[f]))
				}
			});
			return d
		},
		getChildWidthHeight: function(a, b) {
			g.Children.forEach(this.props.children, function(c) {
				if (c && c.type.getWidthHeight) {
					c = c.type.getWidthHeight(c.props, b);
					for (var d in a) c[d] && (a[d] ? a[d] = Math.max(a[d], c[d]) : a[d] = c[d])
				}
			});
			return a
		},
		render: function() {
			var a = b("SpectrumBaseStyleSheet");
			a = b("mergeDeep")(a, this.props.theme, h.Clobber);
			var c = this.props.scaleX || this.getDefaultScaleX(),
				d = this.props.scaleY || this.getDefaultScaleY();
			a.gutter = this.getGutter(a, c, d);
			var e = this.getChildWidthHeight({
					width: this.props.width,
					height: this.props.height
				}, a),
				f = e.width;
			e = e.height;
			var i = a.gutter,
				j = i.top,
				k = f - i.right,
				l = e - i.bottom;
			i = i.left;
			this.props.scaleYHasDomain || d.domain(this.getExtentY()).clamp(!0);
			c.rangeBands ? c.rangeBands([i, k], a.rangeBands.padding, a.rangeBands.outerPadding) : c.rangePoints ? c.rangePoints([i, k]) : c.range([i, k]);
			d.rangePoints ? d.rangePoints([l, j]) : d.range([l, j]);
			return g.jsx(b("SpectrumSurface"), {
				"data-testid": void 0,
				height: e,
				scaleX: c,
				scaleY: d,
				theme: a,
				width: f,
				onRequestFocus: this.props.onRequestFocus,
				onMouseMove: this.props.onMouseMove.bind(null, {
					scaleX: c
				}),
				onMouseOut: this.props.onMouseOut,
				children: this.props.children
			})
		}
	});
	e.exports = a
}), null);