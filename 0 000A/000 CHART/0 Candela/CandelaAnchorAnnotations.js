__d("CandelaAnchorAnnotations.react", ["CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaHexAnchorAnnotation.react", "CandelaPureRenderMixin", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	c = (a = b("CandelaConstants")).Attribute;
	d = a.Placement;
	var h = a.PseudoClass,
		i = a.ShapeType;
	f = a.Style;
	a = b("immutable").List;
	var j = b("ReactART").Group,
		k = b("CandelaUtils").data,
		l = k.classNamesToSelector,
		m = k.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: i.ANCHOR_ANNOTATION,
		attributes: [c.PLACEMENT],
		pseudoClasses: [h.ACTIVE, h.DRAG, h.HOVER],
		styles: [f.FILL, f.OPACITY, f.RADIUS, f.STROKE, f.STROKE_DASHARRAY, f.STROKE_WIDTH]
	});
	var n = b("CandelaHexAnchorAnnotation.react");
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaAnchorAnnotations",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			scales: (k = b("prop-types")).object,
			theme: k.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			annotations: k.instanceOf(a).isRequired,
			placement: k.oneOf([d.BOTTOM, d.TOP]).isRequired,
			selectedIndex: k.number
		},
		UNSAFE_componentWillReceiveProps: function(a) {
			a = a.selectedIndex;
			a != null && this.setState({
				activeIndex: a
			})
		},
		getInitialState: function() {
			return {
				activeIndex: this.props.selectedIndex,
				dragIndex: null,
				dragX: null,
				hoverIndex: -1
			}
		},
		_handleShapeClick: function(a, b, c, d) {
			var e = a[b].index;
			this.state.activeIndex === e ? (a[b].active = !1, this.setState({
				activeIndex: -1,
				hoverIndex: e
			})) : (a[b].active = !0, this.setState({
				activeIndex: e,
				hoverIndex: -1
			}));
			this._handleShapeEvent(a, c, d)
		},
		_handleShapeDrag: function(a) {
			var b = this.props,
				c = b.x;
			b = b.width;
			a = Math.min(Math.max(c, a.x), c + b);
			this.setState({
				dragX: a
			})
		},
		_handleShapeDragEnd: function() {
			this.setState({
				dragIndex: null,
				dragX: null
			})
		},
		_handleShapeDragStart: function(a) {
			this.setState({
				dragIndex: a
			})
		},
		_handleShapeEnter: function(a, b, c, d) {
			this.setState({
				hoverIndex: a[b].index
			}), this._handleShapeEvent(a, c, d)
		},
		_handleShapeLeave: function(a, b, c, d) {
			this.setState({
				hoverIndex: -1
			}), this._handleShapeEvent(a, c, d)
		},
		_handleShapeEvent: function(a, b, c) {
			c.target = b, c.data = babelHelpers["extends"]({}, a, c.data)
		},
		_resizeScales: function() {
			var a = this.props,
				b = a.annotations,
				c = a.width,
				d = a.x,
				e = this.context.scales,
				f = {};
			b.forEach(function(a) {
				a = a.variableName;
				f[a] = e[a].set("output", [d, d + c])
			});
			return f
		},
		render: function() {
			var a = this,
				b = this.props,
				c = b.annotations,
				d = b.height,
				e = b.placement,
				f = b.y,
				k = this.context.theme;
			b = this.state;
			var o = b.activeIndex,
				p = b.dragIndex,
				q = b.dragX,
				r = b.hoverIndex,
				s = this._resizeScales(),
				t = i.ANNOTATION + ">" + i.ANCHOR_ANNOTATION + ('[placement="' + e + '"]'),
				u;
			b = c.map(function(b) {
				var c = b.draggable,
					j = b.index,
					v = b.variableName,
					w = b.value,
					x = b.className,
					y = b.element || n,
					z = m(x);
				if (e && b.placement && b.placement !== e) return null;
				var A = s[v];
				w = A.convert(w);
				var B = o === j,
					C = r === j || p === j;
				c = t + (c ? '[draggable="true"]' : "") + l(z);
				B && (c += h.ACTIVE);
				if (j === p && q != null) {
					c += h.DRAG;
					z = k.getHoverStyle(c + h.REFERENCE);
					u = g.createElement(y, {
						activeStyle: z,
						center: {
							x: q,
							y: f + d / 2
						},
						hoverStyle: z,
						isActive: B,
						isHovered: C,
						style: z,
						value: b.value
					})
				}
				z = k.getHoverStyle(c);
				c = p === j ? z : k.getStyle(c);
				var D = {};
				D[v] = {
					index: j,
					scale: A,
					value: b.value
				};
				A = {
					style: c,
					shapeType: i.ANCHOR_ANNOTATION
				};
				var E = babelHelpers["extends"]({}, A, {
					style: z
				});
				return g.createElement(y, {
					activeStyle: z,
					center: {
						x: w,
						y: f + d / 2
					},
					className: x,
					hoverStyle: z,
					isActive: B,
					isHovered: C,
					key: v + "-annotation-anchor-" + j,
					onShapeClick: a._handleShapeClick.bind(a, D, v, E),
					onShapeDrag: a._handleShapeDrag,
					onShapeDragEnd: a._handleShapeDragEnd,
					onShapeDragStart: a._handleShapeDragStart.bind(a, j),
					onShapeEnter: a._handleShapeEnter.bind(a, D, v, A),
					onShapeLeave: a._handleShapeLeave.bind(a, D, v, E),
					regionID: v + "-annotation-anchor-or-line-" + j,
					style: c,
					value: b.value
				})
			});
			return g.jsxs(j, {
				children: [b, u]
			})
		}
	});
	e.exports = c
}), null);