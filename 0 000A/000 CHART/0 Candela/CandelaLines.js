__d("CandelaLines.react", ["CandelaCategoryScale", "CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractivePath.react", "CandelaPureRenderMixin", "CandelaResizeScalesMixin", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
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
		type: m.LINE,
		attributes: [f.PLACEMENT, f.SERIES],
		pseudoClasses: [l.GREATER_THAN, l.HIGHLIGHTED, l.HOVER, l.LESS_THAN, l.MUTED, l.PROXIMITY],
		styles: [n.OPACITY, n.STROKE, n.STROKE_DASHARRAY, n.STROKE_WIDTH, n.Z_INDEX]
	});
	f = b("createReactClass_DEPRECATED")({
		displayName: "CandelaLines",
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
				h = {},
				i = [],
				k = {},
				l, m = g[e],
				n = m instanceof b("CandelaCategoryScale") ? Math.round(m.props.outputStepInterval / 2) : 0;
			a.forEach(function(c, o) {
				var p = a[o + 1],
					q = s(p),
					t = l != null && !l.equals(q),
					u = m.convert(c[e]) + n;
				f.forEach(function(f) {
					var l = c[e] === null,
						m = f.size > 1 && (l || f.some(function(a) {
							return c[a] === null
						}));
					if (l || m) {
						f.forEach(function(a) {
							return h[a] = null
						});
						return
					}
					var n = 0;
					f.forEach(function(f) {
						if (c[f] === void 0) return;
						if (c[f] === null) {
							h[f] = null;
							return
						}
						if (p) {
							var l = r(d, f, p[e]);
							l = j([l])
						} else l = j();
						var m = k[f] != null && !k[f].equals(l);
						if (!h[f]) {
							var s = {
								classNames: q,
								points: [],
								pseudoClasses: l,
								seriesName: f
							};
							h[f] = s;
							i.push(s)
						}
						s = g[f];
						var v = s instanceof b("CandelaCategoryScale") ? Math.round(s.props.outputStepInterval / 2) : 0;
						n += c[f];
						s = {
							x: u,
							y: s.convert(n) + v
						};
						h[f].points.push(s);
						if (o !== a.length - 1 && (t || m)) {
							v = {
								classNames: q,
								points: [s],
								pseudoClasses: l,
								seriesName: f
							};
							h[f] = v;
							i.push(v)
						}
						k[f] = l
					})
				});
				l = q
			});
			return i
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
		_renderLines: function(a, c, d, e) {
			var f = this,
				i = this.context,
				k = i.schema,
				n = i.theme;
			i = this.props;
			var p = i.placement;
			i = i.threshold;
			var r = i ? t(i.get("className")) : j(),
				s = 0;
			i = a.map(function(a, c) {
				var h = a.classNames,
					i = a.seriesName,
					j = a.points;
				a = a.pseudoClasses;
				a = a.add(e);
				var l = t(k.get(i).className);
				h = q(h.union(l).union(r));
				l = k.get(i).comparisonFor || k.get(i).intervalOf || i;
				h = m.DATA + ">" + m.LINE + h + ('[series="' + l + '"]') + ('[placement="' + p + '"]') + a.join("");
				l = n.getHoverStyle(h);
				a = n.getProximityStyle(h);
				h = n.getStyle(h);
				if (h.visibility === o.HIDDEN) return null;
				var u = h.zIndex;
				if (j.length === 1) {
					var v = j[0];
					j = [{
						x: v.x - h.strokeWidth,
						y: v.y
					}, {
						x: v.x + h.strokeWidth,
						y: v.y
					}]
				}
				s = Math.max(s, h.strokeWidth);
				var w, x;
				if (d) {
					v = {
						shapeType: m.LINE,
						style: h
					};
					var y = babelHelpers["extends"]({}, v, {
						style: l
					});
					w = f._handleShapeEvent.bind(f, i, v);
					x = f._handleShapeEvent.bind(f, i, y)
				}
				v = g.jsx(b("CandelaInteractivePath.react"), {
					addHitRegion: d,
					hoverStyle: l,
					onShapeClick: x,
					onShapeDown: x,
					onShapeEnter: w,
					onShapeLeave: x,
					onShapeUp: x,
					points: j,
					proximityStyle: a,
					regionID: i + "-line",
					style: h
				}, i + "-line-" + c);
				return {
					component: v,
					zIndex: u
				}
			}, this);
			a = i.sort(function(a) {
				return a ? a.zIndex : 0
			}).map(function(a) {
				return a ? a.component : null
			});
			switch (e) {
				case l.NONE:
					c.height += s;
					c.y -= s / 2;
					break;
				case l.GREATER_THAN:
					c.height += s / 2;
					c.y -= s / 2;
					break;
				case l.LESS_THAN:
					c.height += s / 2;
					break
			}
			return g.jsx(h, babelHelpers["extends"]({}, c, {
				children: a
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
					children: [this._renderLines(a, e, !0, l.GREATER_THAN), this._renderLines(a, d, !1, l.LESS_THAN)]
				})
			} else return this._renderLines(a, {
				height: c,
				width: f,
				x: h,
				y: b
			}, !0, l.NONE)
		}
	});
	e.exports = f
}), null);