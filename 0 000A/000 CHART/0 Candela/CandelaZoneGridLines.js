__d("CandelaZoneGridLines.react", ["CandelaConstants", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = b("CandelaConstants").Placement;
	var h = b("CandelaConstants").ShapeType;
	b("immutable").Set;
	var i = b("ReactART").Group,
		j = b("ReactART").Path,
		k = b("ReactART").Shape;
	b("CandelaStructs").Zone;
	c = b("CandelaUtils").data;
	var l = c.classNamesToSelector,
		m = c.getClassNamesFromInputString;
	d = function(a) {
		babelHelpers.inheritsLoose(b, a);

		function b() {
			return a.apply(this, arguments) || this
		}
		var c = b.prototype;
		c.render = function() {
			var a = this.props,
				b = a.height,
				c = a.placement,
				d = a.y;
			a = a.zones;
			var e = this.context.theme,
				f = this.$1(),
				n = h.ZONE + '[placement="' + c + '"]',
				o = 0;
			a = a.map(function(a) {
				var h = a.className,
					p = a.independentEndValue,
					q = a.independentSeriesName,
					r = a.independentStartValue;
				h = m(h);
				if (c && a.placement && a.placement !== c) return null;
				a = n + l(h);
				h = e.getStyle(a);
				a = h.opacity;
				var s = h.stroke,
					t = h.strokeLinecap;
				h = h.strokeWidth;
				var u = f[q];
				r = u.convert(r);
				u = u.convert(p);
				p = u - r;
				u = q + "-zone-guide-" + o++;
				q = new j();
				q.move(r, d + b - h * .5);
				q.line(p, 0);
				return g.jsx(i, {
					children: g.jsx(k, {
						d: q,
						opacity: a,
						stroke: s,
						strokeLinecap: t,
						strokeWidth: h
					})
				}, u)
			});
			return g.jsx(i, {
				children: a
			})
		};
		c.$1 = function() {
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
		return b
	}(g.PureComponent);
	d.contextTypes = {
		scales: b("prop-types").object,
		theme: b("prop-types").instanceOf(b("CandelaTheme"))
	};
	d.defaultProps = {
		placement: a.NONE
	};
	e.exports = d
}), null);