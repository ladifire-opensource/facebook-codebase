__d("CandelaChartSurface.react", ["invariant", 
	"CandelaConstants", "CandelaGlobalThemeRegistry", 
	"CandelaInteractiveRect.react", "CandelaPureRenderMixin", 
	"CandelaSurface.react", "CandelaTheme", "React", 
	"createReactClass_DEPRECATED", "immutable", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = b("immutable").Map;
	c = b("immutable").OrderedSet;
	d = b("immutable").Set;
	var i = (f = b("CandelaConstants")).Event,
		j = f.EventSource,
		k = f.ShapeType;
	f = f.Style;
	b("CandelaGlobalThemeRegistry").register({
		type: k.CHART,
		styles: [f.BACKGROUND, f.BORDER, f.PADDING]
	});
	d = b("createReactClass_DEPRECATED")({
		displayName: "CandelaChartSurface",
		mixins: [b("CandelaPureRenderMixin")],
		propTypes: {
			auxiliaryData: (f = b("prop-types")).instanceOf(c),
			data: f.instanceOf(c).isRequired,
			debug: f.object,
			height: f.number,
			interactive: f.bool,
			longPressPreventDefault: f.bool,
			longPressSlop: f.number,
			longPressTimeout: f.number,
			onClick: f.func,
			onDrag: f.func,
			onDragEnd: f.func,
			onDragStart: f.func,
			onLongPress: f.func,
			onMouseDown: f.func,
			onMouseEnter: f.func,
			onMouseLeave: f.func,
			onMouseMove: f.func,
			onMouseOut: f.func,
			onMouseOver: f.func,
			onMouseUp: f.func,
			onTouchEnd: f.func,
			onTouchMove: f.func,
			onTouchStart: f.func,
			scales: f.instanceOf(d).isRequired,
			schema: f.instanceOf(a).isRequired,
			theme: f.instanceOf(b("CandelaTheme")).isRequired,
			width: f.number
		},
		childContextTypes: {
			data: f.instanceOf(c),
			schema: f.instanceOf(a),
			scales: f.object,
			theme: f.instanceOf(b("CandelaTheme"))
		},
		getChildContext: function() {
			var a = this.props,
				b = a.auxiliaryData,
				c = a.data,
				d = a.scales,
				e = a.schema;
			a = a.theme;
			var f = {};
			d.forEach(function(a) {
				var d = a.schema(e).data(c).auxiliaryData(b).build();
				a.getSeriesNames().forEach(function(a) {
					f[a] = d
				})
			});
			return {
				data: c,
				scales: f,
				schema: e,
				theme: a
			}
		},
		_fireEvent: function(a, b) {
			var c = this.props["on" + a];
			if (!c) return;
			var d = b.target,
				e = b.region;
			e && (d = babelHelpers["extends"]({}, d, e.getShapeRect()));
			c(babelHelpers["extends"]({}, b.originalEvent, {
				data: b.data || {},
				target: d,
				theme: this.props.theme,
				type: a.toLowerCase(),
				x: b.x,
				y: b.y
			}))
		},
		_handleChartEvent: function(a, b) {
			b.target = a
		},
		_handleShapeEvent: function(a) {
			if (!a.target) return;
			if (a.source === j.TOUCH) switch (a.type) {
				case i.SHAPE_DOWN:
					this._fireEvent("TouchStart", a);
					break;
				case i.SHAPE_HOVER:
					this._fireEvent("TouchMove", a);
					break;
				case i.SHAPE_LONG_PRESS:
					this._fireEvent("LongPress", a);
					break;
				case i.SHAPE_UP:
					this._fireEvent("TouchEnd", a);
					break;
				case i.SHAPE_ENTER:
					this._fireEvent("TouchEnter", a);
					break;
				case i.SHAPE_LEAVE:
					this._fireEvent("TouchLeave", a);
					break
			} else switch (a.type) {
				case i.SHAPE_CLICK:
					this._fireEvent("Click", a);
					break;
				case i.SHAPE_DOWN:
					this._fireEvent("MouseDown", a);
					break;
				case i.SHAPE_DRAG:
					this._fireEvent("Drag", a);
					break;
				case i.SHAPE_DRAG_END:
					this._fireEvent("DragEnd", a);
					break;
				case i.SHAPE_DRAG_START:
					this._fireEvent("DragStart", a);
					break;
				case i.SHAPE_ENTER:
					this._fireEvent("MouseEnter", a);
					break;
				case i.SHAPE_HOVER:
					this._fireEvent("MouseMove", a);
					this._fireEvent("MouseOver", a);
					break;
				case i.SHAPE_LEAVE:
					this._fireEvent("MouseLeave", a);
					this._fireEvent("MouseOut", a);
					break;
				case i.SHAPE_UP:
					this._fireEvent("MouseUp", a);
					break
			}
		},
		render: function() {
			var a = this.props,
				c = a.anchorRect,
				d = a.children,
				e = a.debug,
				f = a.dragPreventDefault,
				i = a.height,
				j = a.interactive,
				l = a.longPressPreventDefault,
				m = a.longPressSlop,
				n = a.longPressTimeout,
				o = a.theme;
			a = a.width;
			i !== void 0 || g(0, 3596);
			a !== void 0 || g(0, 3597);
			o = o.getStyle(k.CHART);
			var p = {
				shapeType: k.CHART,
				style: o
			};
			p = this._handleChartEvent.bind(this, p);
			return h.jsxs(b("CandelaSurface.react"), {
				anchorRect: c,
				debug: e,
				dragPreventDefault: f,
				height: i,
				interactive: j,
				longPressPreventDefault: l,
				longPressSlop: m,
				longPressTimeout: n,
				onShapeEvent: this._handleShapeEvent,
				style: o,
				width: a,
				children: [h.jsx(b("CandelaInteractiveRect.react"), {
					onShapeDown: p,
					onShapeEnter: p,
					onShapeLeave: p,
					onShapeUp: p
				}), d]
			})
		}
	});
	e.exports = d
}), null);