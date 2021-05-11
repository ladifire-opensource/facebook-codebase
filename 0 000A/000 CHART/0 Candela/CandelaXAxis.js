__d("CandelaXAxis.react", ["CandelaAxisMixin", "CandelaCategoryScale", "CandelaConstants", "CandelaPureRenderMixin", "React", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaConstants").Alignment,
		i = b("CandelaConstants").Orientation;
	a = b("createReactClass_DEPRECATED")({
		displayName: "XAxis",
		mixins: [b("CandelaAxisMixin")(i.HORIZONTAL), b("CandelaPureRenderMixin")],
		propTypes: {
			alignment: b("prop-types").oneOf([h.BOTTOM, h.TOP]).isRequired
		},
		getDefaultProps: function() {
			return {
				alignment: h.BOTTOM
			}
		},
		renderTitle: function(a, b, c) {
			if (b.visibility === "hidden") return null;
			var d = this.props,
				e = d.height,
				f = d.width,
				i = d.x;
			d = d.y;
			b = babelHelpers["extends"]({}, b);
			b.left = i + f * .5;
			b.content = c;
			this.props.alignment === h.TOP ? (b.bottom = d + e - b.marginBottom, b.top = b.bottom - b.height, b.paddingTop = 0) : (b.top = d + b.marginTop, b.bottom = b.top + b.height, b.paddingBottom = 0);
			return g.createElement(a, b)
		},
		renderMarks: function(a, b, c, d, e) {
			var f = this;
			if (b.visibility === "hidden") return null;
			var g = babelHelpers["extends"]({}, b),
				i = {};
			b = this.props;
			var j = b.alignment,
				k = b.height,
				l = b.scale;
			b = b.y;
			var m = g.strokeLinecap === "butt" ? 0 : g.strokeWidth / 2,
				n = g.height ? g.height - m * 2 : 0;
			j === h.TOP ? (i.top = b + k - m - n - g.marginBottom, i.bottom = i.top + n, g.paddingTop = 0) : (i.top = b + m + g.marginTop, i.bottom = i.top + n, g.paddingBottom = 0);
			i.height = k;
			var o = l.props.steps.toArray();
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
			b.left = f + i + b.marginLeft;
			b.width = e - b.strokeWidth - b.marginLeft - b.marginRight;
			b.right = b.left + b.width;
			b.height && (b.height -= b.strokeWidth);
			this.props.alignment === h.TOP ? b.top = c + d - i - b.height - b.marginBottom : b.top = c + i + b.marginTop;
			b.bottom = b.top + b.height;
			return g.createElement(a, b)
		},
		_renderMark: function(a, c, d, e, f, h, j, k) {
			j = k(a);
			if (!j) return null;
			k = babelHelpers["extends"]({}, f);
			f = babelHelpers["extends"]({}, e);
			e = this.props;
			var l = e.scale,
				m = e.width;
			e = e.x;
			var n = k.strokeWidth / 2,
				o = l.props.output.first(),
				p = l.props.output.last();
			f.left = l.convert(a);
			c != null ? f.width = l.convert(c) - f.left : l instanceof b("CandelaCategoryScale") ? o === p ? f.width = 0 : f.width = o < p ? l.props.outputStepInterval : -l.props.outputStepInterval : f.width = o < p ? e + m - f.left : e - f.left;
			f.left = Math.min(e + m - n, Math.max(n, f.left || 0));
			f.right = f.left;
			f.orientation = i.HORIZONTAL;
			return g.createElement(d, babelHelpers["extends"]({}, f, {
				content: j,
				hoverStyle: h,
				key: a,
				proximityStyle: h,
				style: k
			}))
		}
	});
	e.exports = a
}), null);