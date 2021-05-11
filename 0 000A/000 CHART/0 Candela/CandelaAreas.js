__d("CandelaAreas.react", ["CandelaCategoryScale", "CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractivePath.react", "CandelaPureRenderMixin", "CandelaResizeScalesMixin", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").ClippingRectangle,
		i = b("ReactART").Group;
	a = b("immutable").Map;
	c = b("immutable").OrderedSet;
	var j = b("immutable").Set;
	f = (d = b("CandelaConstants")).Attribute;
	var k = d.Placement,
		l = d.PseudoClass,
		m = d.ShapeType,
		n = d.Style,
		o = d.Visibility;
	d = b("CandelaStructs").Threshold;
	var p = b("CandelaUtils").data,
		q = p.classNamesToSelector,
		r = p.computeHighlightPseudoClass,
		s = p.getClassNamesFromDataRow,
		t = p.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: m.AREA,
		attributes: [f.PLACEMENT, f.SERIES],
		pseudoClasses: [l.GREATER_THAN, l.HIGHLIGHTED, l.HOVER, l.LESS_THAN, l.MUTED, l.PROXIMITY],
		styles: [n.FILL, n.OPACITY]
	});
	f = b("createReactClass_DEPRECATED")({
		displayName: "CandelaAreas",
		mixins: [b("CandelaPureRenderMixin"), b("CandelaResizeScalesMixin")],
		contextTypes: {
			data: (p = b("prop-types")).instanceOf(c),
			scales: p.object,
			schema: p.instanceOf(a),
			theme: p.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			height: p.number.isRequired,
			highlights: p.instanceOf(j),
			placement: p.oneOf(b("getObjectValues")(k)),
			plotX: p.string.isRequired,
			plotY: p.instanceOf(c).isRequired,
			threshold: p.instanceOf(d),
			width: p.number.isRequired,
			x: p.number.isRequired,
			y: p.number.isRequired
		},
		getDefaultProps: function() {
			return {
				height: 0,
				placement: k.NONE,
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
				h = this.context.schema,
				i = {},
				k = [],
				l, m = {},
				n = g[e],
				o = n instanceof b("CandelaCategoryScale") ? Math.round(n.props.outputStepInterval / 2) : 0;
			a.forEach(function(c, p) {
				var q = a[p + 1],
					t = s(q),
					u = l != null && !l.equals(t),
					v = n.convert(c[e]) + o;
				f.forEach(function(f) {
					var l = c[e] === null,
						n = f.size > 1 && (l || f.some(function(a) {
							return c[a] === null
						}));
					if (l || n) {
						f.forEach(function(a) {
							return i[a] = null
						});
						return
					}
					var o, s = 0;
					f.forEach(function(f) {
						var l = h.get(f).intervalOf;
						if (l) {
							if (c[f] === null || c[l] === null) {
								i[f] = null;
								return
							} else if (c[f] === void 0 || c[l] === void 0) return
						} else if (c[f] === null) {
							i[f] = null;
							return
						} else if (c[f] === void 0) return;
						if (q) {
							var n = r(d, f, q[e]);
							n = j([n])
						} else n = j();
						var w = m[f] != null && !m[f].equals(n);
						if (!i[f]) {
							var x = {
								classNames: t,
								points: [],
								pseudoClasses: n,
								seriesName: f
							};
							i[f] = x;
							k.push(x)
						}
						x = g[f];
						var y = x instanceof b("CandelaCategoryScale") ? Math.round(x.props.outputStepInterval / 2) : 0;
						o || (o = {
							x: v,
							y: x.convert(x.props.origin) + y
						});
						if (l) {
							if (c[l]) {
								l = {
									x: v,
									y: x.convert(c[l]) + y
								};
								i[f].points.unshift(l);
								if (c[f] === void 0) return
							}
						} else i[f].points.unshift(o);
						s += c[f];
						l = {
							x: v,
							y: x.convert(s) + y
						};
						i[f].points.push(l);
						if (p !== a.length - 1 && (u || w)) {
							x = {
								classNames: t,
								points: [o, l],
								pseudoClasses: n,
								seriesName: f
							};
							i[f] = x;
							k.push(x)
						}
						o = l;
						m[f] = n
					})
				});
				l = t
			});
			return k
		},
		_handleShapeEvent: function(a, b, c) {
			var d = this.props.plotX,
				e = c.x,
				f = c.y,
				g = this.scales,
				h = g[d];
			g = g[a];
			var i = {};
			i[d] = {
				scale: h,
				value: h.invert(e)
			};
			i[a] = {
				scale: g,
				value: g.invert(f)
			};
			c.target = b;
			c.data = babelHelpers["extends"]({}, c.data, i)
		},
		_renderAreas: function(a, c, d, e) {
			var f = this,
				i = this.context,
				k = i.schema,
				l = i.theme;
			i = this.props;
			var n = i.placement;
			i = i.threshold;
			var p = i ? t(i.get("className")) : j(),
				r = 0;
			i = a.map(function(a, c) {
				var h = a.classNames,
					i = a.points,
					j = a.seriesName;
				a = a.pseudoClasses;
				a = a.add(e);
				var s = t(k.get(j).className);
				h = q(h.union(s).union(p));
				s = k.get(j).comparisonFor || k.get(j).intervalOf || j;
				h = m.AREA + h + ('[series="' + s + '"]') + ('[placement="' + n + '"]') + a.join("");
				s = l.getHoverStyle(h);
				a = l.getProximityStyle(h);
				h = l.getStyle(h);
				if (h.visibility === o.HIDDEN) return null;
				r = Math.max(r, h.strokeWidth);
				var u, v;
				if (d) {
					var w = {
							shapeType: m.AREA,
							style: h
						},
						x = babelHelpers["extends"]({}, w, {
							style: s
						});
					u = f._handleShapeEvent.bind(f, j, w);
					v = f._handleShapeEvent.bind(f, j, x)
				}
				return g.jsx(b("CandelaInteractivePath.react"), {
					addHitRegion: d,
					hoverStyle: s,
					onShapeActive: u,
					onShapeClick: v,
					onShapeDown: v,
					onShapeEnter: u,
					onShapeLeave: v,
					onShapeUp: v,
					points: i,
					proximityStyle: a,
					regionID: j + "-area",
					style: h
				}, j + "-area-" + c)
			}, this);
			return g.jsx(h, babelHelpers["extends"]({}, c, {
				children: i
			}))
		},
		render: function() {
			var a = this.context.data,
				b = this.props,
				c = b.height,
				d = b.plotY,
				e = b.threshold,
				f = b.width,
				h = b.x;
			b = b.y;
			a = this._createPaths(a.toArray());
			if (e) {
				d = d.first().first();
				d = this.scales[d].convert(e.get("value"));
				e = {
					height: d - b,
					width: f,
					x: h,
					y: b
				};
				d = {
					height: b + c - d,
					width: f,
					x: h,
					y: d
				};
				return g.jsxs(i, {
					children: [this._renderAreas(a, e, !0, l.GREATER_THAN), this._renderAreas(a, d, !1, l.LESS_THAN)]
				})
			} else return this._renderAreas(a, {
				height: c,
				width: f,
				x: h,
				y: b
			}, !0, l.NONE)
		}
	});
	e.exports = f
}), null);