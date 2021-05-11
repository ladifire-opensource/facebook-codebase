__d("CandelaYAxis.react", ["CandelaAxisMixin", "CandelaCategoryScale", "CandelaConstants", "CandelaPureRenderMixin", "React", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaConstants").Alignment,
		i = b("CandelaConstants").Orientation;
	a = b("createReactClass_DEPRECATED")({
		displayName: "YAxis",
		mixins: [b("CandelaAxisMixin")(i.VERTICAL), b("CandelaPureRenderMixin")],
		propTypes: {
			alignment: b("prop-types").oneOf([h.LEFT, h.RIGHT]).isRequired
		},
		getDefaultProps: function() {
			return {
				alignment: h.LEFT
			}
		},
		renderTitle: function(a, b, c) {
			if (b.visibility === "hidden") return null;
			b = babelHelpers["extends"]({}, b);
			var d = this.props,
				e = d.height,
				f = d.width,
				i = d.x;
			d = d.y;
			b.top = .5 * e + d;
			b.content = c;
			this.props.alignment === h.LEFT ? (b.left = i + f - b.width - b.marginRight, b.right = b.left + b.width, b.paddingLeft = 0) : (b.left = i + b.marginLeft, b.right = b.left + b.width, b.paddingRight = 0);
			return g.createElement(a, b)
		},
		renderMarks: function(a, b, c, d, e) {
			var f = this;
			if (b.visibility === "hidden") return null;
			var g = babelHelpers["extends"]({}, b),
				i = {};
			b = this.props;
			var j = b.alignment,
				k = b.scale,
				l = b.width;
			b = b.x;
			var m = g.strokeLinecap === "butt" ? 0 : g.strokeWidth / 2,
				n = g.width ? g.width -= m * 2 : 0;
			j === h.LEFT ? (i.left = b + l - m - n - g.marginRight, i.right = i.left + n, g.paddingLeft = 0) : (i.left = b + m + g.marginLeft, i.right = i.left + n, g.paddingRight = 0);
			i.width = l;
			var o = k.props.steps.toArray();
			return o.map(function(b, h) {
				return f._renderMark(b, o[h + 1], a, i, g, c, d, e)
			})
		},
		renderRule: function(a, b) {
			if (b.visibility === "hidden") return null;
			b = babelHelpers["extends"]({}, b);
			var c = this.props,
				d = c.height,
				e = c.width,
				f = c.x;
			c = c.y;
			var i = b.strokeWidth / 2;
			b.top = c + i + b.marginTop;
			b.height = d - b.strokeWidth - b.marginTop - b.marginBottom;
			b.bottom = b.top + b.height;
			b.width && (b.width -= b.strokeWidth);
			this.props.alignment === h.LEFT ? b.left = f + e - i - b.width - b.marginRight : b.left = f + i + b.marginLeft;
			b.right = b.left + b.width;
			return g.createElement(a, b)
		},
		_renderMark: function(a, c, d, e, f, h, j, k) {
			k = k(a);
			if (!k) return null;
			f = babelHelpers["extends"]({}, f);
			e = babelHelpers["extends"]({}, e);
			var l = this.props,
				m = l.height,
				n = l.scale;
			l = l.y;
			var o = f.strokeWidth / 2,
				p = n.props.output.first(),
				q = n.props.output.last();
			e.top = n.convert(a);
			c != null ? e.height = n.convert(c) - e.top : n instanceof b("CandelaCategoryScale") ? p === q ? e.height = 0 : e.height = p < q ? n.props.outputStepInterval : -n.props.outputStepInterval : e.height = p < q ? l + m - e.top : l - e.top;
			e.top = Math.min(l + m - o, Math.max(o, e.top || 0));
			e.bottom = e.top;
			e.orientation = i.VERTICAL;
			return g.createElement(d, babelHelpers["extends"]({}, e, {
				content: k,
				hoverStyle: h,
				key: a,
				proximityStyle: j,
				style: f
			}))
		}
	});
	e.exports = a
}), null);