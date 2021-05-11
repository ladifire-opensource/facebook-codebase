__d("CandelaPanel.react", ["invariant", "CandelaConstants", "CandelaPureRenderMixin", "CandelaStyles", "CandelaUtils", "React", "ReactART", "Rectangle.art", "createReactClass_DEPRECATED", "isEmpty", "memoize", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = b("ReactART").Group,
		k = b("ReactART").Path,
		l = b("ReactART").Shape,
		m = b("CandelaConstants").Style,
		n = b("CandelaUtils").art.drawBorder,
		o = b("memoize")(function() {
			return b("CandelaStyles").getDefaultValues(m.BACKGROUND, m.BORDER, m.PADDING).toJS()
		});

	function p(a, c) {
		var d = {};
		if (!c || a.style !== c.style) {
			d.style = babelHelpers["extends"]({}, o());
			if (!(h || (h = b("isEmpty")))(a.style)) {
				var e = Object.assign.apply(Object, [{}].concat(Object.keys(a.style).map(function(c) {
					return b("CandelaStyles").get(c).normalize(a.style[c])
				})));
				Object.keys(e).forEach(function(a) {
					var b = e[a];
					b != null && (d.style[a] = b)
				})
			}
		}
		return d
	}
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaPanel",
		mixins: [b("CandelaPureRenderMixin")],
		propTypes: {
			x: (a = b("prop-types")).number.isRequired,
			y: a.number.isRequired,
			height: a.oneOfType([a.number, a.string]).isRequired,
			width: a.oneOfType([a.number, a.string]).isRequired,
			top: a.element,
			bottom: a.element,
			left: a.element,
			right: a.element,
			center: a.oneOfType([a.array, a.element, a.object]),
			scales: a.object,
			series: a.object,
			style: a.shape(b("CandelaStyles").getPropTypes(m.BACKGROUND, m.BORDER, m.PADDING))
		},
		getDefaultProps: function() {
			return {
				height: 0,
				width: 0,
				x: 0,
				y: 0
			}
		},
		getInitialState: function() {
			return p(this.props)
		},
		UNSAFE_componentWillReceiveProps: function(a) {
			this.setState(p(a, this.props))
		},
		_computeChildDimensions: function() {
			var a = this.props,
				b = a.height,
				c = a.width,
				d = a.x;
			a = a.y;
			var e = this.state.style,
				f = e.borderBottomWidth,
				h = e.borderLeftWidth,
				i = e.borderRightWidth,
				j = e.borderTopWidth,
				k = e.paddingBottom,
				l = e.paddingLeft,
				m = e.paddingRight;
			e = e.paddingTop;
			typeof b === "number" || g(0, 4087);
			typeof c === "number" || g(0, 4088);
			b -= f + j + k + e;
			c -= h + i + l + m;
			d += h + l;
			a += j + e;
			return {
				height: b,
				width: c,
				x: d,
				y: a
			}
		},
		_renderRegions: function() {
			var a = this._computeChildDimensions(),
				b = {},
				c = this.props,
				d = c.top,
				e = c.bottom,
				f = c.left,
				h = c.right,
				k = c.scales;
			c = c.series;
			var l = this.props.center,
				m = {},
				n, o = {},
				p = {},
				q = {},
				r = a.x,
				s = r + a.width,
				t = a.y,
				u = t + a.height,
				v;
			d && (q.width = a.width, q.x = r, q.y = t, typeof d.props.height === "number" ? t += d.props.height : (v = parseFloat(d.props.height), q.height = v / 100 * a.height, t += q.height), d.props.scales || (q.scales = k), d.props.series || (q.series = c), b.top = i.cloneElement(d, q));
			e && (m.width = a.width, m.x = r, typeof e.props.height === "number" ? u -= e.props.height : (v = parseFloat(e.props.height), m.height = v / 100 * a.height, u -= m.height), e.props.scales || (m.scales = k), e.props.series || (m.series = c), m.y = u, b.bottom = i.cloneElement(e, m));
			f && (o.height = u - t, o.x = r, o.y = t, typeof f.props.width === "number" ? r += f.props.width : (v = parseFloat(f.props.width), o.width = v / 100 * a.width, r += o.width), f.props.scales || (o.scales = k), f.props.series || (o.series = c), b.left = i.cloneElement(f, o));
			h && (p.height = u - t, p.y = t, typeof h.props.width === "number" ? s -= h.props.width : (v = parseFloat(h.props.width), p.width = v / 100 * a.width, s -= p.width), h.props.scales || (p.scales = k), h.props.series || (p.series = c), p.x = s, b.right = i.cloneElement(h, p));
			d = this.props.children;
			d && (l && g(0, 4089), l = d);
			l && (n = {
				height: u - t,
				width: s - r,
				x: r,
				y: t
			}, b.center = i.Children.map(l, function(a) {
				return !a ? null : i.cloneElement(a, n)
			}), b.center = i.jsx(j, {
				children: b.center
			}));
			return i.jsxs(j, {
				children: [b.center, b.left, b.right, b.top, b.bottom]
			})
		},
		render: function() {
			var a = this.props,
				c = a.height,
				d = a.x,
				e = a.y;
			a = a.width;
			var f = this.state.style,
				h = f.backgroundColor,
				m = f.borderBottomColor,
				o = f.borderBottomStyle,
				p = f.borderBottomWidth,
				q = f.borderLeftColor,
				r = f.borderLeftStyle,
				s = f.borderLeftWidth,
				t = f.borderRightColor,
				u = f.borderRightStyle,
				v = f.borderRightWidth,
				w = f.borderTopColor,
				x = f.borderTopStyle;
			f = f.borderTopWidth;
			typeof c === "number" || g(0, 4087);
			typeof a === "number" || g(0, 4088);
			var y;
			h && (y = i.jsx(b("Rectangle.art"), {
				fill: h,
				height: c,
				width: a,
				x: d,
				y: e
			}));
			h = [];
			var z, A, B;
			f && (z = k(), A = {
				x: d,
				y: e + f / 2
			}, B = {
				x: d + a,
				y: e + f / 2
			}, n(z, x, f, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: w,
				strokeCap: "butt",
				strokeWidth: f
			}, "borderTop")));
			v && (z = k(), A = {
				x: d + a - v / 2,
				y: e
			}, B = {
				x: d + a - v / 2,
				y: e + c
			}, n(z, u, v, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: t,
				strokeCap: "butt",
				strokeWidth: v
			}, "borderRight")));
			p && (z = k(), A = {
				x: d,
				y: e + c - p / 2
			}, B = {
				x: d + a,
				y: e + c - p / 2
			}, n(z, o, p, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: m,
				strokeCap: "butt",
				strokeWidth: p
			}, "borderBottom")));
			s && (z = k(), A = {
				x: d + p / 2,
				y: e
			}, B = {
				x: d + p / 2,
				y: e + c
			}, n(z, r, s, A, B), h.push(i.jsx(l, {
				d: z,
				stroke: q,
				strokeCap: "butt",
				strokeWidth: s
			}, "borderLeft")));
			return i.jsxs(j, {
				children: [y, h, this._renderRegions()]
			})
		}
	});
	e.exports = c
}), null);