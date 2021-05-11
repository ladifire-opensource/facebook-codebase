__d("CandelaLineAnnotations.react", ["CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractivePath.react", "CandelaPureRenderMixin", "CandelaTheme", "CandelaUtils", "React", "ReactART", "clamp", "createReactClass_DEPRECATED", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	c = (a = b("CandelaConstants")).Attribute;
	var h = a.Placement,
		i = a.PseudoClass,
		j = a.ShapeType;
	d = a.Style;
	f = b("immutable").List;
	var k = b("ReactART").Group,
		l = b("ReactART").Path,
		m = b("ReactART").Shape;
	a = b("CandelaUtils").data;
	var n = a.classNamesToSelector,
		o = a.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: j.LINE_ANNOTATION,
		attributes: [c.DRAGGABLE, c.PLACEMENT],
		parentType: j.ANNOTATION,
		pseudoClasses: [i.ACTIVE, i.DRAG, i.HOVER, i.PROXIMITY, i.REFERENCE],
		styles: [d.OPACITY, d.STROKE, d.STROKE_DASHARRAY, d.STROKE_WIDTH]
	});
	c = b("createReactClass_DEPRECATED")({
		displayName: "LineAnnotations",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			scales: (a = b("prop-types")).object,
			theme: a.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			annotations: a.instanceOf(f).isRequired,
			hoverThreshold: a.number,
			placement: a.oneOf(b("getObjectValues")(h)),
			selectedIndex: a.number
		},
		getDefaultProps: function() {
			return {
				hoverThreshold: 5,
				placement: h.NONE
			}
		},
		getInitialState: function() {
			return {
				dragIndex: null,
				dragX: null
			}
		},
		_handleShapeDrag: function(a, c, d, e) {
			var f = this.props,
				g = f.x;
			f = f.width;
			g = b("clamp")(e.x, g, g + f);
			c.value = c.scale.invert(g);
			e.target = d;
			e.data = babelHelpers["extends"]({}, e.data, (f = {}, f[a] = c, f));
			this.setState({
				dragX: g
			})
		},
		_handleShapeDragEnd: function(a, c, d, e) {
			var f = this.props,
				g = f.x;
			f = f.width;
			g = b("clamp")(e.x, g, g + f);
			c.value = c.scale.invert(g);
			e.target = d;
			e.data = babelHelpers["extends"]({}, e.data, (f = {}, f[a] = c, f));
			this.setState({
				dragIndex: null,
				dragX: null
			})
		},
		_handleShapeDragStart: function(a, b, c, d) {
			d.target = c;
			d.data = babelHelpers["extends"]({}, d.data, (c = {}, c[a] = b, c));
			this.setState({
				dragIndex: b.index
			})
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
				f[a] || (f[a] = e[a].set("output", [d, d + c]))
			});
			return f
		},
		render: function() {
			var a = this,
				c = this.props,
				d = c.annotations,
				e = c.height,
				f = c.hoverThreshold,
				h = c.placement,
				p = c.selectedIndex,
				q = c.y,
				r = this.context.theme;
			c = this.state;
			var s = c.dragIndex,
				t = c.dragX,
				u = this._resizeScales(),
				v = j.ANNOTATION + ">" + j.LINE_ANNOTATION + ('[placement="' + h + '"]'),
				w;
			c = d.map(function(c) {
				var d = c.draggable,
					k = c.index,
					x = c.variableName,
					y = c.value,
					z = c.className;
				z = o(z);
				if (h && c.placement && c.placement !== h) return null;
				c = v + (d ? '[draggable="true"]' : "") + n(z);
				k === p && (c += i.ACTIVE);
				if (k === s && t != null) {
					c += i.DRAG;
					z = r.getHoverStyle(c + i.REFERENCE);
					var A = z.opacity,
						B = z.stroke,
						C = z.strokeDasharray,
						D = z.strokeLinecap;
					z = z.strokeWidth;
					var E = l().moveTo(t, q).lineTo(t, q + e);
					w = g.jsx(m, {
						d: E,
						opacity: A,
						stroke: B,
						strokeCap: D,
						strokeDash: C,
						strokeWidth: z
					})
				}
				E = u[x];
				A = E.convert(y);
				B = [{
					x: A,
					y: q
				}, {
					x: A,
					y: q + e
				}];
				D = r.getHoverStyle(c);
				C = s === k ? D : r.getStyle(c);
				z = {
					active: k === p,
					index: k,
					scale: E,
					value: y
				};
				A = {
					shapeType: j.LINE_ANNOTATION,
					style: D
				};
				var F, G, H;
				d && (F = a._handleShapeDrag.bind(a, x, z, A), G = a._handleShapeDragEnd.bind(a, x, z, A), H = a._handleShapeDragStart.bind(a, x, z, A));
				return g.jsx(b("CandelaInteractivePath.react"), {
					hoverStyle: D,
					hoverThreshold: f,
					onShapeDrag: F,
					onShapeDragEnd: G,
					onShapeDragStart: H,
					points: B,
					regionID: x + "-annotation-anchor-or-line-" + k,
					style: C
				}, x + "-annotation-line-" + k)
			});
			return g.jsxs(k, {
				children: [c, w]
			})
		}
	});
	e.exports = c
}), null);