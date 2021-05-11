__d("CandelaZones.react", ["CandelaConstants", "CandelaGlobalThemeRegistry", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "Rectangle.art", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	c = (a = b("CandelaConstants")).Attribute;
	d = a.Placement;
	var h = a.PseudoClass,
		i = a.ShapeType;
	f = a.Style;
	b("immutable").Set;
	var j = b("ReactART").Group;
	b("CandelaStructs").Zone;
	a = b("CandelaUtils").data;
	var k = a.classNamesToSelector,
		l = a.getClassNamesFromInputString;
	b("CandelaGlobalThemeRegistry").register({
		type: i.ZONE,
		attributes: [c.PLACEMENT],
		parentType: i.ANNOTATION,
		pseudoClasses: [h.SECONDARY],
		styles: [f.FILL, f.OPACITY, f.STROKE, f.STROKE_DASHARRAY, f.STROKE_WIDTH]
	});
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this.props,
				c = a.height,
				d = a.placement,
				e = a.y;
			a = a.zones;
			var f = this.context.theme,
				m = this.$1(),
				n = i.ZONE + '[placement="' + d + '"]',
				o = 0;
			a = a.map(function(a) {
				var i = a.className,
					p = a.independentEndValue,
					q = a.independentSeriesName,
					r = a.independentStartValue;
				i = l(i);
				if (d && a.placement && a.placement !== d) return null;
				a = n + k(i);
				i = f.getStyle(a);
				a = f.getStyle(a + h.SECONDARY);
				var s = i.fill;
				i = i.opacity;
				var t = m[q];
				r = t.convert(r);
				t = t.convert(p);
				p = t - r;
				t = q + "-zone-" + o++;
				q = s !== a.fill ? g.jsx(b("Rectangle.art"), {
					fill: a.fill,
					height: c,
					opacity: a.opacity,
					width: p,
					x: r,
					y: e
				}) : null;
				return g.jsxs(j, {
					children: [g.jsx(b("Rectangle.art"), {
						fill: s,
						height: c,
						opacity: i,
						width: p,
						x: r,
						y: e
					}), q]
				}, t)
			});
			return g.jsx(j, {
				children: a
			})
		};
		d.$1 = function() {
			var a = this.props,
				b = a.width,
				c = a.x;
			a = a.zones;
			var d = this.context.scales,
				e = {};
			a.forEach(function(a) {
				a = a.independentSeriesName;
				e[a] || (e[a] = d[a].set("output", [c, c + b]))
			});
			return e
		};
		return c
	}(g.PureComponent);
	a.contextTypes = {
		scales: b("prop-types").object,
		theme: b("prop-types").instanceOf(b("CandelaTheme"))
	};
	a.defaultProps = {
		placement: d.NONE
	};
	e.exports = a
}), null);