__d("CandelaGapGridLines.react", ["CandelaCategoryScale", "CandelaConstants", "CandelaGaps.react", "CandelaPureRenderMixin", "CandelaResizeScalesMixin", "CandelaScale", "CandelaTheme", "React", "ReactART", "createReactClass_DEPRECATED", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = b("ReactART").Group,
		j = b("ReactART").Path,
		k = b("ReactART").Shape;
	a = b("immutable").Map;
	c = b("immutable").OrderedSet;
	d = b("immutable").Set;
	var l = b("CandelaScale").getExtentValue;
	f = b("CandelaConstants").MissingDataCondition;
	var m = b("CandelaConstants").ShapeType,
		n = b("CandelaConstants").PseudoClass;
	a = b("createReactClass_DEPRECATED")({
		displayName: "CandelaGapGridLines",
		mixins: [b("CandelaPureRenderMixin"), b("CandelaResizeScalesMixin")],
		contextTypes: {
			data: (g = b("prop-types")).instanceOf(c),
			scales: g.object,
			schema: g.instanceOf(a),
			theme: g.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			missingDataCondition: g.oneOf(b("getObjectValues")(f)),
			plotX: g.instanceOf(d).isRequired,
			plotY: g.instanceOf(c).isRequired
		},
		_renderGap: function(a, b, c, d, e, f, g, l, m) {
			var n = new j();
			n.move(l, m + a - f * .5);
			n.line(g, 0);
			return h.jsx(i, {
				children: h.jsx(k, {
					d: n,
					opacity: c,
					stroke: d,
					strokeLinecap: e,
					strokeWidth: f
				})
			}, b)
		},
		render: function() {
			var a = this,
				c = this.context,
				d = c.data,
				e = c.schema;
			c = c.theme;
			var f = this.props,
				g = f.height,
				j = f.missingDataCondition,
				k = f.plotX,
				o = f.plotY,
				p = f.y,
				q = this.scales,
				r = c.getStyle(m.GAP),
				s = c.getStyle(m.GAP + n.POINT),
				t = c.getStyle(m.GAP + n.SEGMENT),
				u = [],
				v = d.size;
			k.forEach(function(c) {
				var f = q[c],
					h = f.props;
				h = f instanceof b("CandelaCategoryScale") ? Math.round(l(h.output) / h.steps.size / 2) : 0;
				var i, k;
				if (v < 2) return;
				var m = d.toArray(),
					n = 0,
					w = 0;
				while (n < v) {
					while (n < v && !b("CandelaGaps.react").hasValidData(n, m, c, o, j, e)) n++;
					if (n !== w) {
						i = w === 0 ? f.convert(m[w][c]) : f.convert(m[w - 1][c]) + h;
						k = n === v ? f.convert(m[n - 1][c]) + h * 2 : f.convert(m[n][c]) + h;
						if (n + 1 < v) {
							var x = !b("CandelaGaps.react").hasValidData(n + 1, m, c, o, j);
							k -= x ? s.marginRight : t.marginRight
						}
						if (w - 2 > -1) {
							x = !b("CandelaGaps.react").hasValidData(w - 2, m, c, o, j);
							i += x ? s.marginLeft : t.marginLeft
						}
						u.push(a._renderGap(g, k + "-" + i + "-gap-beginning", r.opacity, r.stroke, r.strokeLinecap, r.strokeWidth, k - i, i, p));
						w = n
					} else n++, w++
				}
			});
			return h.jsx(i, {
				children: u
			})
		}
	});
	e.exports = a
}), null);