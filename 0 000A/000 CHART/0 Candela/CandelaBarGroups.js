__d("CandelaBarGroups.react", ["CandelaCategoryScale", "CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaInteractiveRect.react", "CandelaPureRenderMixin", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = (a = b("CandelaUtils")).data.classNamesToSelector,
		j = a.data.computeHighlightPseudoClass,
		k = a.data.getClassNamesFromDataRow,
		l = a.data.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: (c = b("CandelaConstants")).ShapeType.BAR_GROUP,
		attributes: [c.Attribute.ALIGNMENT, c.Attribute.SERIES],
		pseudoClasses: [c.PseudoClass.HIGHLIGHTED, c.PseudoClass.HOVER, c.PseudoClass.MUTED, c.PseudoClass.PROXIMITY],
		styles: [c.Style.FILL, c.Style.MARGIN, c.Style.MAX_HEIGHT, c.Style.MAX_WIDTH, c.Style.OPACITY, c.Style.PADDING, c.Style.STROKE, c.Style.STROKE_DASHARRAY, c.Style.STROKE_WIDTH]
	});
	a = b("createReactClass_DEPRECATED")({
		displayName: "CandelaBarGroups",
		mixins: [b("CandelaPureRenderMixin")],
		contextTypes: {
			data: (d = b("prop-types")).instanceOf((f = b("immutable")).OrderedSet),
			scales: d.object,
			schema: d.instanceOf(f.Map),
			theme: d.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			alignment: d.oneOf(b("getObjectValues")(c.Alignment)),
			getBarGroupRegionID: d.func,
			groupBy: d.string.isRequired,
			height: d.number.isRequired,
			hiddenSeries: d.instanceOf(f.Set),
			highlights: d.instanceOf(f.Set),
			hoverThreshold: d.number,
			order: d.instanceOf(f.OrderedSet).isRequired,
			overlap: d.bool,
			placement: d.string,
			proximityThreshold: d.number,
			width: d.number.isRequired,
			x: d.number.isRequired,
			y: d.number.isRequired
		},
		getDefaultProps: function() {
			return {
				alignment: b("CandelaConstants").Alignment.BOTTOM,
				height: 0,
				highlights: b("immutable").Set(),
				hoverThreshold: 0,
				proximityThreshold: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		_computeContentRect: function(a, c) {
			var d = this.props.alignment;
			a = babelHelpers["extends"]({}, a);
			d === b("CandelaConstants").Alignment.LEFT || d === b("CandelaConstants").Alignment.RIGHT ? (a.y += c.paddingTop, a.height -= c.paddingTop + c.paddingBottom) : (a.x += c.paddingLeft, a.width -= c.paddingLeft + c.paddingRight);
			return a
		},
		_computeInterval: function(a) {
			var c = this.context.data,
				d = this.props.groupBy;
			if (a instanceof b("CandelaCategoryScale")) return a.props.outputStepInterval;
			if (c.size < 2) return 0;
			var e = a.convert(c.first()[d]);
			a = a.convert(c.last()[d]);
			d = Math.abs(a - e);
			return d / (c.size - 1)
		},
		_computeRect: function(a, c, d, e) {
			var f = this.props.alignment,
				g = this.props,
				h = g.height,
				i = g.width,
				j = g.x;
			g = g.y;
			var k = 0;
			e = c.convert(e);
			c instanceof b("CandelaCategoryScale") || (e -= a / 2);
			f === b("CandelaConstants").Alignment.LEFT || f === b("CandelaConstants").Alignment.RIGHT ? (h = a - d.marginBottom - d.marginTop, d.maxHeight && d.maxHeight < h && (k = (h - d.maxHeight) / 2, h = d.maxHeight), g = e + k + d.marginTop) : (i = a - d.marginLeft - d.marginRight, d.maxWidth && d.maxWidth < i && (k = (i - d.maxWidth) / 2, i = d.maxWidth), j = e + k + d.marginLeft);
			return {
				height: h,
				width: i,
				x: j,
				y: g
			}
		},
		_handleShapeEvent: function(a, b, c) {
			c.target = b, c.data = babelHelpers["extends"]({}, c.data, a)
		},
		_resizeScales: function() {
			var a = this.context.scales,
				c = this.props,
				d = c.alignment,
				e = c.groupBy,
				f = c.height,
				g = c.order,
				h = c.width,
				i = c.x;
			c = c.y;
			var j = {};
			f = c + f;
			var k = i;
			i = i + h;
			h = c;
			var l = b("immutable").OrderedSet(d === b("CandelaConstants").Alignment.RIGHT ? [i, k] : [k, i]),
				m = b("immutable").OrderedSet(d === b("CandelaConstants").Alignment.BOTTOM ? [f, h] : [h, f]);
			d === b("CandelaConstants").Alignment.LEFT || d === b("CandelaConstants").Alignment.RIGHT ? (j[e] = a[e].set("output", m), g.forEach(function(b) {
				b.forEach(function(b) {
					j[b] = a[b].set("output", l)
				})
			})) : (j[e] = a[e].set("output", l), g.forEach(function(b) {
				b.forEach(function(b) {
					j[b] = a[b].set("output", m)
				})
			}));
			return j
		},
		_renderBarGroup: function(a, c, d, e, f) {
			var h = this.context.theme,
				i = this.props,
				j = i.alignment,
				k = i.enter,
				l = i.exit,
				m = i.getBarGroupRegionID,
				n = i.groupBy,
				o = i.hiddenSeries,
				p = i.hoverThreshold,
				q = i.order,
				r = i.overlap,
				s = i.proximityThreshold;
			i = i.update;
			if (!d.height || !d.width) return null;
			var t = h.getHoverStyle(e);
			h = h.getProximityStyle(e);
			e = q.filter(function(a) {
				return o == null || a.some(function(a) {
					return !o.has(a)
				})
			});
			q = {
				alignment: j,
				overlap: r,
				seriesOrder: e,
				shapeType: b("CandelaConstants").ShapeType.BAR_GROUP,
				style: f
			};
			j = babelHelpers["extends"]({}, q, {
				style: t
			});
			r = this._handleShapeEvent.bind(this, a, q);
			e = this._handleShapeEvent.bind(this, a, j);
			q = a[n];
			j = q.scale;
			a = q.value;
			q = m ? m(j, n, a) : "";
			return g.createElement(b("CandelaInteractiveRect.react"), babelHelpers["extends"]({}, d, {
				enter: k,
				exit: l,
				hoverStyle: t,
				hoverThreshold: p,
				key: n + "-bargroup-" + c,
				onShapeClick: e,
				onShapeDown: e,
				onShapeEnter: r,
				onShapeHover: e,
				onShapeLeave: e,
				onShapeLongPress: e,
				onShapeUp: e,
				proximityStyle: h,
				proximityThreshold: s,
				regionID: q,
				style: f,
				update: i
			}))
		},
		render: function() {
			var a = this,
				b = this._getBarGroupsAndBarGroupStructs(),
				c = b.barGroups,
				d = b.barGroupStructs;
			b = g.Children.map(this.props.children, function(b) {
				return g.cloneElement(b, babelHelpers["extends"]({}, a.props, {
					barGroupStructs: d
				}))
			});
			return g.jsxs(h, {
				children: [c, b]
			})
		},
		_getBarGroupsAndBarGroupStructs: function() {
			var a = this,
				c = this.context,
				d = c.data,
				e = c.schema,
				f = c.theme;
			c = this.props;
			var g = c.alignment,
				h = c.groupBy,
				m = c.highlights,
				n = c.order,
				o = c.placement,
				p = [],
				q = [],
				r = this._resizeScales(),
				s = r[h],
				t = this._computeInterval(s);
			d.toIndexedSeq().forEach(function(c, d) {
				var u, v = c[h],
					w = b("CandelaConstants").PseudoClass.NONE;
				m && (w = j(m, null, v));
				var x = k(c),
					y = l(e.get(h).className);
				y = b("CandelaConstants").ShapeType.BAR_GROUP + i(x.union(y)) + ('[series="' + h + '"]') + ('[alignment="' + g + '"]') + w;
				w = f.getStyle(y);
				var z = (u = {}, u[h] = {
					placement: o,
					scale: s,
					value: v
				}, u);
				n.forEach(function(a) {
					a.forEach(function(a) {
						z[a] = {
							placement: o,
							scale: r[a],
							value: c[a]
						}
					})
				});
				u = a._computeRect(t, s, w, v);
				v = a._renderBarGroup(z, d, u, y, w);
				p.push(v);
				d = a._computeContentRect(u, w);
				q.push({
					classNames: x,
					data: z,
					rect: d
				})
			});
			return {
				barGroups: p,
				barGroupStructs: q
			}
		}
	});
	c = a;
	e.exports = c
}), null);