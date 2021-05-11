__d("CandelaPoints.react", ["invariant", "CandelaCategoryScale", "CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractivePoint.react", "CandelaPureRenderMixin", "CandelaResizeScalesMixin", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "forEachObject", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	c = (a = b("CandelaConstants")).Attribute;
	var i = a.Placement,
		j = a.PseudoClass,
		k = a.ShapeType;
	d = a.Style;
	var l = a.Visibility,
		m = b("ReactART").Group;
	f = b("immutable").Map;
	var n = b("immutable").Set;
	a = b("immutable").OrderedSet;
	var o = b("CandelaStructs").Threshold,
		p = b("CandelaUtils").data,
		q = p.classNamesToSelector,
		r = p.computeHighlightPseudoClass,
		s = p.getClassNamesFromDataRow,
		t = p.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: k.POINT,
		attributes: [c.PLACEMENT, c.SERIES],
		pseudoClasses: [j.EQUAL_TO, j.DENSE, j.GREATER_THAN, j.HIGHLIGHTED, j.HOVER, j.LESS_THAN, j.MUTED, j.PROXIMITY],
		styles: [d.FILL, d.OPACITY, d.STROKE, d.STROKE_WIDTH]
	});
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaPoints",
		mixins: [b("CandelaPureRenderMixin"), b("CandelaResizeScalesMixin")],
		contextTypes: {
			data: (p = b("prop-types")).instanceOf(a),
			scales: p.object,
			schema: p.instanceOf(f),
			theme: p.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			height: p.number,
			highlights: p.instanceOf(n),
			minDensityThreshold: p.number,
			placement: p.oneOf(b("getObjectValues")(i)),
			plotX: p.string.isRequired,
			plotY: p.instanceOf(a).isRequired,
			plotSize: p.string,
			threshold: p.instanceOf(o),
			width: p.number,
			x: p.number.isRequired,
			y: p.number.isRequired
		},
		getDefaultProps: function() {
			return {
				height: 0,
				highlights: n(),
				placement: i.NONE,
				width: 0,
				x: 0,
				y: 0
			}
		},
		_createPaths: function(a) {
			var c = this.props,
				d = c.highlights,
				e = c.plotX,
				f = c.plotY,
				g = this.scales,
				h = {},
				i = {},
				j = {},
				k = g[e],
				l = k instanceof b("CandelaCategoryScale") ? Math.round(k.props.outputStepInterval / 2) : 0;
			a.forEach(function(a) {
				var c = s(a),
					m = k.convert(a[e]) + l;
				f.forEach(function(f) {
					var k = a[e] === null,
						l = f.size > 1 && (k || f.some(function(b) {
							return a[b] === null
						}));
					if (k || l) return;
					var o = 0;
					f.forEach(function(f) {
						if (a[f] == null) return;
						i[f] || (i[f] = []);
						var k = g[f],
							l = k instanceof b("CandelaCategoryScale") ? Math.round(k.props.outputStepInterval / 2) : 0;
						o += a[f];
						var p = r(d, f, a[e]);
						p = n([p]);
						p = {
							pseudoClasses: p,
							x: m,
							y: k.convert(o) + l
						};
						i[f].push({
							classNames: c,
							point: p,
							row: a
						});
						j[f] != null && (h[f] == null && (h[f] = Infinity), h[f] = Math.min(h[f], Math.abs(m - j[f])));
						j[f] = m
					})
				})
			});
			return {
				minDensities: h,
				paths: i
			}
		},
		_handleShapeEvent: function(a, b, c, d) {
			var e = this.props,
				f = e.plotSize;
			e = e.plotX;
			var g = this.scales,
				h = g[e],
				i = g[b],
				j = {};
			j[e] = {
				scale: h,
				value: a[e]
			};
			j[b] = {
				scale: i,
				value: a[b]
			};
			f && a[f] != null && (j[f] = {
				scale: g[f],
				value: a[f]
			});
			d.target = c;
			d.data = babelHelpers["extends"]({}, d.data, j)
		},
		render: function() {
			var a = this,
				c = this.context,
				d = c.data,
				e = c.schema,
				f = c.theme;
			c = this.props;
			var i = c.minDensityThreshold,
				o = c.placement,
				p = c.plotSize,
				r = c.threshold;
			c = this._createPaths(d);
			var s = c.minDensities;
			d = c.paths;
			var u = [];
			b("forEachObject")(d, function(c, d) {
				var m = j.NONE;
				i != null && s[d] < i && (m = j.DENSE);
				var v = k.POINT + ('[series="' + d + '"]') + ('[placement="' + o + '"]') + m;
				m = f.getStyle(v);
				if (m.visibility !== l.VISIBLE) return;
				var w = t(e.get(d).className);
				c.forEach(function(c, e) {
					var i = c.classNames,
						l = c.point;
					c = c.row;
					var m = c[d],
						o = j.NONE;
					if (r) {
						var s = r.get("value");
						m > s ? o = j.GREATER_THAN : m === s ? o = j.EQUAL_TO : o = j.LESS_THAN
					}
					m = l.pseudoClasses.add(o);
					s = r ? t(r.get("className")) : n();
					o = i.union(w).union(s);
					i = v + q(o) + m.join("");
					s = f.getHoverStyle(i);
					o = f.getProximityStyle(i);
					m = f.getStyle(i);
					i = {
						shapeType: k.POINT,
						style: m
					};
					var x = babelHelpers["extends"]({}, i, {
						style: s
					});
					i = a._handleShapeEvent.bind(a, c, d, i);
					x = a._handleShapeEvent.bind(a, c, d, x);
					var y;
					if (p && c[p] != null) {
						var z = a.context.scales[p];
						z.props.output || g(0, 4556);
						y = Math.sqrt(z.convert(c[p]) / Math.PI);
						z.props.roundOutput && (y = Math.round(y * 2) / 2)
					}
					u.push(h.createElement(b("CandelaInteractivePoint.react"), babelHelpers["extends"]({}, l, {
						hoverStyle: s,
						key: d + "-point-" + e,
						onShapeClick: x,
						onShapeDown: x,
						onShapeEnter: i,
						onShapeLeave: x,
						onShapeUp: x,
						proximityStyle: o,
						radius: y,
						regionID: d + "-point" + e,
						style: m
					})))
				})
			});
			return h.jsx(m, {
				children: u
			})
		}
	});
	e.exports = c
}), null);