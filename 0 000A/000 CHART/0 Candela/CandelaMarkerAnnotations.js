__d("CandelaMarkerAnnotations.react", ["invariant", "CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractivePoint.react", "CandelaPureRenderMixin", "CandelaResizeScalesMixin", "CandelaTheme", "CandelaUtils", "React", "ReactART", "ReactFragment", "createReactClass_DEPRECATED", "immutable", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React");
	c = (a = b("CandelaConstants")).Attribute;
	d = a.Placement;
	f = a.PseudoClass;
	var j = a.ShapeType;
	a = a.Style;
	var k = (h = b("immutable")).List,
		l = h.Map,
		m = h.OrderedSet,
		n = h.Set,
		o = b("ReactART").Group;
	h = b("CandelaUtils").data;
	var p = h.classNamesToSelector,
		q = h.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: j.MARKER_ANNOTATION,
		attributes: [c.PLACEMENT],
		pseudoClasses: [f.ACTIVE, f.HOVER],
		styles: [a.FILL, a.OPACITY, a.RADIUS, a.STROKE, a.STROKE_WIDTH]
	});
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaMarkerAnnotations",
		mixins: [b("CandelaPureRenderMixin"), b("CandelaResizeScalesMixin")],
		contextTypes: {
			data: (h = b("prop-types")).instanceOf(m),
			scales: h.object,
			schema: h.instanceOf(l),
			theme: h.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			annotations: h.instanceOf(k).isRequired,
			markerElement: h.func.isRequired,
			placement: h.oneOf([d.BOTTOM, d.TOP]),
			plotX: h.string.isRequired,
			plotY: h.instanceOf(m).isRequired
		},
		getDefaultProps: function() {
			return {
				markerElement: b("CandelaInteractivePoint.react")
			}
		},
		_renderMarker: function(a, b, c, d, e) {
			var f = this.props,
				g = f.markerElement,
				h = f.placement;
			f = f.plotY;
			var k = this.context,
				l = k.schema;
			k = k.theme;
			var m = 0;
			f.every(function(a) {
				m = 0;
				var b = !1;
				a.every(function(a) {
					m += d[a];
					b = a === c;
					return !b
				});
				return !b
			});
			f = this.scales[c];
			f = f.convert(m);
			l = q(l.get(c).className);
			l = "annotation>annotationmarker" + p(l) + ("[series=" + c + "]") + ("[placement=" + h + "]");
			h = k.getHoverStyle(l);
			k = k.getStyle(l);
			return i.createElement(g, {
				hoverStyle: h,
				key: a,
				style: k,
				x: b,
				y: f,
				onShapeEnter: function(a) {
					a === void 0 && (a = {}), a.target = {
						shapeType: j.MARKER_ANNOTATION
					}, a.data = e
				},
				onShapeLeave: function(a) {
					a === void 0 && (a = {}), a.target = {
						shapeType: j.MARKER_ANNOTATION
					}, a.data = e
				}
			})
		},
		render: function() {
			var a = this,
				c = this.props,
				d = c.annotations,
				e = c.plotX;
			c = c.plotY;
			var f = this.context.data,
				h = this.scales[e],
				j = {},
				k = c.flatten();
			d.forEach(function(b, c) {
				var d, i = b.dependentVariableName,
					l = b.variableName,
					m = b.value;
				if (i && !k.contains(i)) return;
				e === l || g(0, 2269);
				var o = f.findEntry(function(a) {
					return a[l] === m
				});
				o || g(0, 2270);
				var p = o[0],
					q = h.convert(m);
				o = i ? n([i]) : k;
				i = a.scales[l];
				var r = (d = {}, d[l] = {
					index: c,
					scale: i,
					value: b.value
				}, d);
				o.forEach(function(b) {
					var c = "annotation-marker-" + l + "-" + q + "-" + b + "-" + p[b];
					j[c] = a._renderMarker(c, q, b, p, r)
				})
			});
			return i.jsx(o, {
				children: b("ReactFragment").create(j)
			})
		}
	});
	e.exports = c
}), null);