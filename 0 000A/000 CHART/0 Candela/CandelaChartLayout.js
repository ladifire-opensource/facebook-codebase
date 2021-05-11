__d("CandelaChartLayout.react", ["CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractiveRect.react", "CandelaPanel.react", "CandelaPureRenderMixin", "CandelaTheme", "React", "createReactClass_DEPRECATED", "getObjectValues", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	c = (a = b("CandelaConstants")).Attribute;
	d = a.Placement;
	var h = a.ShapeType;
	f = a.Style;
	b("CandelaGlobalThemeRegistry").register({
		type: h.PLOT_AREA,
		attributes: [c.PLACEMENT],
		styles: [f.BACKGROUND, f.BORDER, f.PADDING]
	});
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaChartLayout",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			theme: (a = b("prop-types")).instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			height: a.number.isRequired,
			bottomXAxis: a.element,
			leftYAxis: a.element,
			plotArea: a.element.isRequired,
			placement: a.oneOf(b("getObjectValues")(d)),
			rightYAxis: a.element,
			topXAxis: a.element,
			width: a.number.isRequired,
			x: a.number.isRequired,
			y: a.number.isRequired
		},
		getDefaultProps: function() {
			return {
				height: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		_handleShapeEvent: function(a, b) {
			b.target = a
		},
		_renderBottomPanel: function() {
			var a = this.props,
				c = a.bottomXAxis,
				d = a.leftYAxis;
			a = a.rightYAxis;
			var e = {};
			if (c) {
				d && (e.paddingLeft = d.props.width);
				a && (e.paddingRight = a.props.width);
				return g.jsx(b("CandelaPanel.react"), {
					center: c,
					height: c.props.height,
					style: e
				})
			}
			return null
		},
		_renderCenterPanel: function() {
			var a = this.props,
				c = a.placement;
			a = a.plotArea;
			var d = this.context.theme;
			d = d.getStyle('plotarea[placement="' + c + '"]');
			c = {
				shapeType: h.PLOT_AREA,
				style: d
			};
			c = this._handleShapeEvent.bind(this, c);
			return g.jsxs(b("CandelaPanel.react"), {
				style: d,
				children: [g.jsx(b("CandelaInteractiveRect.react"), {
					onShapeEnter: c,
					onShapeLeave: c
				}), a]
			})
		},
		_renderTopPanel: function() {
			var a = this.props,
				c = a.leftYAxis,
				d = a.rightYAxis;
			a = a.topXAxis;
			var e = {};
			if (a) {
				c && (e.paddingLeft = c.props.width);
				d && (e.paddingRight = d.props.width);
				return g.jsx(b("CandelaPanel.react"), {
					center: a,
					height: a.props.height,
					style: e
				})
			}
			return null
		},
		render: function() {
			var a = this.props,
				c = a.height,
				d = a.leftYAxis,
				e = a.rightYAxis,
				f = a.width,
				h = a.x;
			a = a.y;
			var i = this._renderBottomPanel(),
				j = this._renderCenterPanel(),
				k = this._renderTopPanel();
			return g.jsx(b("CandelaPanel.react"), {
				height: c,
				width: f,
				x: h,
				y: a,
				bottom: i,
				left: d,
				center: j,
				right: e,
				top: k
			})
		}
	});
	e.exports = c
}), null);