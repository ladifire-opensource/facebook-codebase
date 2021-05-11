__d("CandelaAxisMixin", ["CandelaCategoryScale", "CandelaConstants", "CandelaScale", "CandelaTheme", "CandelaUtils", "React", "ReactART", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("immutable").Map,
		j = b("immutable").OrderedSet,
		k = b("CandelaConstants").Placement,
		l = b("CandelaConstants").PseudoClass;
	a = b("CandelaUtils").data;
	var m = a.classNamesToSelector,
		n = a.getClassNamesFromInputString;
	c = function(a) {
		var c;
		return {
			contextTypes: {
				schema: (c = b("prop-types")).instanceOf(i),
				theme: c.instanceOf(b("CandelaTheme"))
			},
			propTypes: {
				height: c.number.isRequired,
				markFormatterFactory: c.func.isRequired,
				placement: c.oneOf(b("getObjectValues")(k)),
				plot: c.string.isRequired,
				scale: c.instanceOf(b("CandelaScale")).isRequired,
				subMarkFormatterFactory: c.func.isRequired,
				title: c.string,
				width: c.number.isRequired,
				x: c.number.isRequired,
				y: c.number.isRequired
			},
			getDefaultProps: function() {
				return {
					height: 0,
					primaryMarks: j(),
					secondaryMarks: j(),
					width: 0,
					x: 0,
					y: 0
				}
			},
			render: function() {
				var c = this.props,
					d = c.alignment,
					e = c.markFormatterFactory,
					f = c.placement,
					i = c.plot,
					j = c.scale,
					k = c.subMarkFormatterFactory;
				c = c.title;
				var o = this.context,
					p = o.schema;
				o = o.theme;
				p = n(p.get(i).className);
				p = "axis" + m(p) + ('[series="' + i + '"]') + ('[alignment="' + d + '"]') + ('[orientation="' + a + '"]');
				i = j instanceof b("CandelaCategoryScale") ? "axisbucketmark" : "axismark";
				var q = p + ">" + i + l.PRIMARY;
				q = this.renderMarks(o.getElement(i), o.getStyle(q), o.getHoverStyle(q), o.getProximityStyle(q), e(j, a, f, d));
				e = p + ">" + i + l.SECONDARY;
				i = this.renderMarks(o.getElement(i), o.getStyle(e), o.getHoverStyle(e), o.getProximityStyle(e), k(j, a, f, d));
				e = this.renderRule(o.getElement("axisrule"), o.getStyle(p + ">axisrule"), c);
				k = c ? this.renderTitle(o.getElement("axistitle"), o.getStyle(p + ">axistitle"), c) : null;
				return g.jsxs(h, {
					children: [e, q, i, k]
				})
			}
		}
	};
	e.exports = c
}), null);