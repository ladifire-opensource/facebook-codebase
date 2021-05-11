__d("CandelaAxis.react", ["CandelaAxisBucketMark.react", "CandelaAxisMark.react", "CandelaAxisRule.react", "CandelaAxisTitle.react", "CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaPureRenderMixin", "CandelaTheme", "CandelaXAxis.react", "CandelaYAxis.react", "React", "createReactClass_DEPRECATED", "immutable", "getObjectValues", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = (a = b("CandelaConstants")).Alignment;
	c = a.Attribute;
	var i = a.Orientation;
	d = a.Placement;
	f = a.PseudoClass;
	var j = a.ShapeType;
	a = a.Style;
	var k = b("immutable").Map;
	b("CandelaGlobalThemeRegistry").register({
		type: j.AXIS,
		attributes: [c.ALIGNMENT, c.ORIENTATION],
		styles: [a.HEIGHT, a.WIDTH],
		children: [{
			type: j.AXIS_BUCKETMARK,
			element: b("CandelaAxisBucketMark.react"),
			pseudoClasses: [f.HOVER, f.PRIMARY, f.PROXIMITY, f.SECONDARY],
			styles: [a.COLOR, a.CONTENT, a.FONT, a.HEIGHT, a.LEFT, a.MARGIN, a.MAX_WIDTH, a.PADDING, a.STROKE_DASHARRAY, a.STROKE_LINECAP, a.STROKE_WIDTH, a.STROKE, a.TEXT_ALIGN, a.TEXT_OVERFLOW, a.TOP, a.TRANSFORM, a.WHITE_SPACE, a.WIDTH]
		}, {
			type: j.AXIS_MARK,
			element: b("CandelaAxisMark.react"),
			pseudoClasses: [f.HOVER, f.PRIMARY, f.PROXIMITY, f.SECONDARY],
			styles: [a.COLOR, a.CONTENT, a.FONT, a.HEIGHT, a.LEFT, a.MARGIN, a.MAX_WIDTH, a.PADDING, a.STROKE_DASHARRAY, a.STROKE_LINECAP, a.STROKE_WIDTH, a.STROKE, a.TEXT_ALIGN, a.TEXT_OVERFLOW, a.TOP, a.TRANSFORM, a.WHITE_SPACE, a.WIDTH]
		}, {
			type: j.AXIS_RULE,
			element: b("CandelaAxisRule.react")
		}, {
			type: j.AXIS_TITLE,
			element: b("CandelaAxisTitle.react")
		}]
	});
	f = b("createReactClass_DEPRECATED")({
		displayName: "CandelaAxis",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			series: (c = b("prop-types")).instanceOf(k),
			scales: c.object,
			theme: c.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			alignment: c.oneOf(b("getObjectValues")(h)),
			height: c.number.isRequired,
			invert: c.bool,
			markFormatterFactory: c.func.isRequired,
			orientation: c.oneOf(b("getObjectValues")(i)),
			placement: c.oneOf(b("getObjectValues")(d)),
			plot: c.string.isRequired,
			subMarkFormatterFactory: c.func.isRequired,
			title: c.string,
			width: c.number.isRequired,
			x: c.number.isRequired,
			y: c.number.isRequired
		},
		getDefaultProps: function() {
			return {
				height: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		render: function() {
			var a = this.context.scales,
				c = this.props,
				d = c.alignment,
				e = c.height,
				f = c.invert,
				j = c.markFormatterFactory,
				k = c.orientation,
				l = c.placement,
				m = c.plot,
				n = c.subMarkFormatterFactory,
				o = c.title,
				p = c.width,
				q = c.x;
			c = c.y;
			d || k ? d === h.TOP || d === h.BOTTOM || k === i.HORIZONTAL ? k = b("CandelaXAxis.react") : k = b("CandelaYAxis.react") : k = p > e ? b("CandelaXAxis.react") : b("CandelaYAxis.react");
			var r;
			k === b("CandelaXAxis.react") ? r = f ? [q + p, q] : [q, q + p] : r = f ? [c, c + e] : [c + e, c];
			f = a[m].set("output", r);
			return g.createElement(k, {
				alignment: d,
				height: e,
				markFormatterFactory: j,
				placement: l,
				plot: m,
				scale: f,
				subMarkFormatterFactory: n,
				title: o,
				width: p,
				x: q,
				y: c
			})
		}
	});
	e.exports = f
}), null);