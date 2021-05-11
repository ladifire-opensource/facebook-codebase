__d("CandelaGaps.react", ["CandelaCategoryScale", "CandelaConstants", "CandelaPlatformConstants", "CandelaPureRenderMixin", "CandelaResizeScalesMixin", "CandelaScale", "CandelaTheme", "React", "ReactART", "Rectangle.art", "createReactClass_DEPRECATED", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaPlatformConstants").GAPS_DASH_FILL,
		i = b("ReactART").Group;
	a = b("immutable").Map;
	c = b("immutable").OrderedSet;
	d = b("immutable").Set;
	var j = b("CandelaScale").getExtentValue,
		k = b("CandelaConstants").MissingDataCondition,
		l = b("CandelaConstants").ShapeType,
		m = b("CandelaConstants").PseudoClass,
		n = b("createReactClass_DEPRECATED")({
			displayName: "CandelaGaps",
			mixins: [b("CandelaPureRenderMixin"), b("CandelaResizeScalesMixin")],
			contextTypes: {
				data: (f = b("prop-types")).instanceOf(c),
				scales: f.object,
				schema: f.instanceOf(a),
				theme: f.instanceOf(b("CandelaTheme"))
			},
			propTypes: {
				missingDataCondition: f.oneOf(b("getObjectValues")(k)),
				plotX: f.instanceOf(d).isRequired,
				plotY: f.instanceOf(c).isRequired
			},
			statics: {
				hasValidData: function(a, b, c, d, e, f) {
					var g = b[a];
					b = e === k.ANY_SERIES ? d.every.bind(d) : d.some.bind(d);
					return g[c] !== null && b(function(a) {
						return a.every(function(a) {
							var b = g[a] !== null;
							a = f ? f.get(a).intervalOf : null;
							a && (b = b && g[a] !== null);
							return b
						})
					})
				}
			},
			_renderGap: function(a, c, d, e, f, j, k, l, m) {
				return g.jsxs(i, {
					children: [g.jsx(b("Rectangle.art"), {
						fill: a,
						height: c,
						opacity: e,
						width: k,
						x: l,
						y: m
					}), g.jsx(b("Rectangle.art"), {
						fill: f || h,
						height: c,
						opacity: j,
						width: k,
						x: l,
						y: m
					})]
				}, d)
			},
			render: function() {
				var a = this,
					c = this.context,
					d = c.data,
					e = c.schema;
				c = c.theme;
				var f = this.props,
					h = f.height,
					k = f.missingDataCondition,
					o = f.plotX,
					p = f.plotY,
					q = f.y,
					r = this.scales,
					s = c.getStyle(l.GAP),
					t = c.getStyle(l.GAP + m.SECONDARY),
					u = c.getStyle(l.GAP + m.POINT),
					v = c.getStyle(l.GAP + m.SEGMENT),
					w = [],
					x = d.size;
				o.forEach(function(c) {
					var f = r[c],
						g = f.props;
					g = f instanceof b("CandelaCategoryScale") ? Math.round(j(g.output) / g.steps.size / 2) : 0;
					var i, l;
					if (x < 2) return;
					var m = d.toArray(),
						o = 0,
						y = 0;
					while (o < x) {
						while (o < x && !n.hasValidData(o, m, c, p, k, e)) o++;
						if (o !== y) {
							i = y === 0 ? f.convert(m[y][c]) : f.convert(m[y - 1][c]) + g;
							l = o === x ? f.convert(m[o - 1][c]) + g * 2 : f.convert(m[o][c]) + g;
							if (o + 1 < x) {
								var z = !n.hasValidData(o + 1, m, c, p, k);
								l -= z ? u.marginRight : v.marginRight
							}
							if (y - 2 > -1) {
								z = !n.hasValidData(y - 2, m, c, p, k);
								i += z ? u.marginLeft : v.marginLeft
							}
							w.push(a._renderGap(s.fill, h, l + "-" + i + "-gap-beginning", s.opacity, t.fill, t.opacity, l - i, i, q));
							y = o
						} else o++, y++
					}
				});
				return g.jsx(i, {
					children: w
				})
			}
		});
	e.exports = n
}), null);