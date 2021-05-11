__d("CandelaGridLines.react", ["CandelaConstants", "CandelaPureRenderMixin", 
	"CandelaResizeScalesMixin", "CandelaTheme", "React", "ReactART",
	 "createReactClass_DEPRECATED", "getObjectValues", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("ReactART").Group,
		i = b("ReactART").Path,
		j = b("ReactART").Shape;
	a = b("immutable").Map;
	var k = b("CandelaConstants").Placement,
		l = b("CandelaConstants").PseudoClass,
		m = b("CandelaConstants").Visibility;
	d = b("createReactClass_DEPRECATED")({
		displayName: "CandelaGridLines",
		mixins: [b("CandelaPureRenderMixin"), b("CandelaResizeScalesMixin")],
		contextTypes: {
			series: (c = b("prop-types")).instanceOf(a),
			scales: c.object,
			theme: c.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			height: c.number.isRequired,
			invert: c.bool,
			placement: c.oneOf(b("getObjectValues")(k)),
			plotX: c.string,
			plotY: c.string,
			width: c.number.isRequired,
			x: c.number.isRequired,
			y: c.number.isRequired
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
		_renderHorizontal: function() {
			var a = this.props,
				b = a.placement,
				c = a.width,
				d = a.x;
			a = this.props.plotY;
			var e = this.context.theme,
				f = this.scales;
			if (a) {
				var k = f[a];
				f = 'gridline[orientation="horizontal"][placement="' + b + '"]';
				k.props.steps.size === 1 && (f += l.ONLY_CHILD);
				a = e.getStyle(f);
				var m = a.strokeWidth / 2,
					n = new i();
				b = this._getSteps(f, k);
				if (b.length === 0) return null;
				b.forEach(function(a) {
					n.moveTo(d, k.convert(a) - m).line(c - m, 0)
				});
				return g.jsx(h, {
					children: g.jsx(j, {
						d: n,
						stroke: a.stroke,
						strokeWidth: a.strokeWidth
					})
				})
			}
			return null
		},
		_renderVertical: function() {
			var a = this.props,
				b = a.height,
				c = a.placement,
				d = a.y;
			a = this.props.plotX;
			var e = this.context.theme,
				f = this.scales;
			if (a) {
				var h = f[a];
				f = 'gridline[orientation="vertical"][placement="' + c + '"]';
				h.props.steps.size === 1 && (f += l.ONLY_CHILD);
				a = e.getStyle(f);
				var k = a.strokeWidth / 2,
					m = new i();
				c = this._getSteps(f, h);
				c.forEach(function(a) {
					m.moveTo(h.convert(a) - k, d).line(0, b - k)
				});
				return c.length === 0 ? null : g.jsx(j, {
					d: m,
					stroke: a.stroke,
					strokeWidth: a.strokeWidth
				})
			}
			return null
		},
		_getSteps: function(a, b) {
			var c = this.context.theme;
			b = b.props.steps.toArray();
			var d = [];
			b.forEach(function(b, e, f) {
				var g;
				e === 0 ? g = c.getStyle(a + l.FIRST_CHILD) : e === f.length - 1 ? g = c.getStyle(a + l.LAST_CHILD) : g = c.getStyle(a);
				g.visibility === m.VISIBLE && d.push(b)
			});
			return d
		},
		render: function() {
			return g.jsxs(h, {
				children: [this._renderHorizontal(), this._renderVertical()]
			})
		}
	});
	e.exports = d
}), null);