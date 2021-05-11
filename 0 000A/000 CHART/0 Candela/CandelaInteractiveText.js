__d("CandelaInteractiveText.react", ["invariant", "CandelaConstants", "CandelaInteractiveMixin", "CandelaPlatformConstants", "React", "ReactART", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = (a = b("CandelaConstants")).Alignment,
		j = a.Event,
		k = a.RE,
		l = a.Style,
		m = b("CandelaPlatformConstants").TEXT_REGION_DISABLED,
		n = b("ReactART").Group,
		o = b("ReactART").Text,
		p = "wrapUnit-",
		q = " ",
		r = "textElement",
		s = p + "space",
		t = 10,
		u = 2,
		v = function(a) {
			return a && a.toString()
		};
	d = b("createReactClass_DEPRECATED")({
		displayName: "CandelaInteractiveText",
		mixins: [b("CandelaInteractiveMixin")],
		boundingBoxFillOverride: !0,
		_isCurrentRenderForMeasure: !1,
		_wrapUnits: [],
		propTypes: {
			children: (c = b("prop-types")).oneOfType([c.object, c.string]),
			style: c.object.isRequired,
			x: c.number.isRequired,
			y: c.number.isRequired
		},
		getDefaultProps: function() {
			return {
				style: {},
				x: 0,
				y: 0
			}
		},
		getInitialState: function() {
			return {
				style: this.props.style,
				textToRender: v(this.props.children)
			}
		},
		UNSAFE_componentWillMount: function() {
			this._isCurrentRenderForMeasure = this._shouldMeasureText(this.props)
		},
		UNSAFE_componentWillReceiveProps: function(a) {
			if (!this._isTextChanged(a)) return;
			this._isCurrentRenderForMeasure = this._shouldMeasureText(a);
			!this._isCurrentRenderForMeasure && v(a.children) !== this.state.textToRender && this.setState({
				textToRender: v(a.children)
			})
		},
		componentDidMount: function() {
			this._wrapAndOrTruncateText()
		},
		componentDidUpdate: function() {
			this._wrapAndOrTruncateText()
		},
		_computeWrapUnits: function() {
			var a = v(this.props.children);
			a || g(0, 1212);
			if (this._resolveStyleProp(l.WHITE_SPACE) === "nowrap") return [a];
			else return a.split(k.S_RE)
		},
		_shouldMeasureText: function(a) {
			var b = this._resolveStyleProp(l.MAX_WIDTH, a) != null,
				c = !!a.children && b && this._resolveStyleProp(l.WHITE_SPACE, a) === "normal";
			b = !!a.children && b && this._resolveStyleProp(l.TEXT_OVERFLOW, a) != null && this._resolveStyleProp(l.TEXT_OVERFLOW, a) !== "none";
			return c || b
		},
		_isTextChanged: function(a) {
			return v(a.children) !== v(this.props.children) || this._isStylePropChanged(l.MAX_WIDTH, a) || this._isStylePropChanged(l.WHITE_SPACE, a) || this._isStylePropChanged(l.TEXT_OVERFLOW, a) || this._isStylePropChanged(l.FONT_FAMILY, a) || this._isStylePropChanged(l.FONT_SIZE, a) || this._isStylePropChanged(l.FONT_STYLE, a) || this._isStylePropChanged(l.FONT_WEIGHT, a)
		},
		_isStylePropChanged: function(a, b) {
			return this._resolveStyleProp(a) !== this._resolveStyleProp(a, b)
		},
		_truncationPrefixForWidth: function(a, c, d, e) {
			if (c === "none") return a;
			if (d <= e) return a;
			e = a.length * (e / d) * b("CandelaConstants").TruncationSafetyFactor;
			if (c === "clip") return a.substring(0, e);
			else {
				c === "ellipsis" || g(0, 1213);
				return a.substring(0, e - b("CandelaConstants").Ellipsis.length) + b("CandelaConstants").Ellipsis
			}
		},
		_wrapAndOrTruncateText: function() {
			var a = this;
			if (!this._isCurrentRenderForMeasure) return;
			var b = this._resolveStyleProp(l.MAX_HEIGHT),
				c = this._resolveStyleProp(l.TEXT_OVERFLOW);
			typeof c === "string" || g(0, 1214);
			var d = this._resolveStyleProp(l.MAX_WIDTH);
			typeof d === "number" || g(0, 1214);
			var e = this.refs[s].width,
				f = 0,
				h = "",
				i;
			if (c === "ellipsis" && b != null) {
				typeof b === "number" || g(0, 1214);
				var j = 0;
				this._wrapUnits.forEach(function(b, c) {
					b = a.refs["" + p + c].height;
					j = Math.max(j, b)
				});
				i = Math.floor(b / j)
			}
			var k = 1,
				m = "",
				n = 0;
			this._wrapUnits.forEach(function(b, g) {
				var j = a.refs["" + p + g].width;
				!j && (c === "ellipsis" || c === "clip") && a._resolveStyleProp(l.WHITE_SPACE) === "nowrap" && (j = a._getEstimatedTextWidth(b));
				g === 0 ? i !== void 0 && k === i ? (m = b, n = j) : (f = j, h += a._truncationPrefixForWidth(b, c, j, d)) : i !== void 0 && k === i ? (m += q + b, n += e + j) : f + e + j > d ? (f = j, h += "\n" + a._truncationPrefixForWidth(b, c, j, d), k += 1) : (f += e + j, h += q + b)
			});
			m && (h += this._truncationPrefixForWidth(m, c, n, d));
			this._isCurrentRenderForMeasure = !1;
			this.setState({
				textToRender: h
			})
		},
		_getEstimatedTextWidth: function(a) {
			var b;
			b = (b = parseInt(this._resolveStyleProp(l.FONT_SIZE), 10)) != null ? b : t;
			return a.length * u * (b / t)
		},
		_attachListeners: function() {
			var a = this.props.hoverStyle;
			a && (this._attachSelfListener(j.SHAPE_ENTER, this._handleShapeEnter), this._attachSelfListener(j.SHAPE_LEAVE, this._handleShapeLeave))
		},
		_handleShapeEnter: function(a) {
			this.setState({
				hover: !0
			})
		},
		_handleShapeLeave: function(a) {
			this.setState({
				hover: !1
			})
		},
		_resolveStyleProp: function(a, b) {
			var c = this.state.hover;
			b = b || this.props;
			var d = b.hoverStyle;
			b = b.style;
			if (c && d && d[a] !== void 0) return d[a];
			else return b[a]
		},
		_buildPathImpl: function() {
			if (this._isCurrentRenderForMeasure || m) return;
			var a = this.props.style;
			a = a.textAlign;
			var b = this.refs[r],
				c = b.height,
				d = b.width;
			b = b.y;
			var e = this.refs[r].x;
			a === i.CENTER ? e -= d / 2 : a === i.RIGHT && (e -= d);
			this.addCommand("moveTo", e, b).addCommand("line", d, 0).addCommand("line", 0, c).addCommand("line", -d, 0).addCommand("close")
		},
		render: function() {
			var a = this.props,
				b = a.x;
			a = a.y;
			var c = this._resolveStyleProp(l.COLOR),
				d = this._resolveStyleProp(l.FONT_FAMILY),
				e = this._resolveStyleProp(l.FONT_SIZE),
				f = this._resolveStyleProp(l.FONT_STYLE),
				g = this._resolveStyleProp(l.FONT_WEIGHT),
				i = this._resolveStyleProp(l.OPACITY),
				j = this._resolveStyleProp(l.ROTATION),
				k = this._resolveStyleProp(l.TEXT_ALIGN),
				m = {
					alignment: k,
					fill: c,
					font: {
						fontFamily: d,
						fontSize: e,
						fontStyle: f,
						fontWeight: g
					},
					opacity: i,
					rotation: j,
					x: b,
					y: a
				};
			if (this._isCurrentRenderForMeasure) {
				this._wrapUnits = this._computeWrapUnits();
				k = this._wrapUnits.map(function(a, b) {
					b = "" + p + b;
					return h.createElement(o, babelHelpers["extends"]({}, m, {
						key: b,
						ref: b
					}), a)
				});
				c = h.createElement(o, babelHelpers["extends"]({}, m, {
					key: s,
					ref: s
				}), q);
				k.push(c);
				return h.jsx(n, {
					opacity: 0,
					children: k
				})
			} else {
				d = this.state.textToRender;
				return h.jsx(n, {
					children: h.createElement(o, babelHelpers["extends"]({}, m, {
						key: r,
						ref: r
					}), d)
				})
			}
		}
	});
	e.exports = d
}), null);