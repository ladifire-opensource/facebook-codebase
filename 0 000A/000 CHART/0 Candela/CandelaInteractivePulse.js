__d("CandelaInteractivePulse.react", ["CandelaConstants", "CandelaInteractiveMixin", "Circle.art", "React", "createReactClass_DEPRECATED", "prop-types", "ReactART", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaConstants").Event,
		i = b("ReactART").Group,
		j = 21,
		k = 3,
		l = 80;
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaInteractivePulse",
		mixins: [b("CandelaInteractiveMixin")],
		propTypes: {
			hoverStyle: (a = b("prop-types")).object,
			proximityStyle: a.object,
			maxRadius: a.number.isRequired,
			minRadius: a.number.isRequired,
			style: a.object,
			x: a.number.isRequired,
			y: a.number.isRequired
		},
		_shouldAnimate: !0,
		_frameLastUpdated: null,
		getDefaultProps: function() {
			return {
				style: {},
				maxRadius: j,
				minRadius: k
			}
		},
		getInitialState: function() {
			var a = this.props.maxRadius;
			return {
				radius1: a,
				radius2: 2 * a / 3,
				radius3: a / 3,
				hover: !1,
				proximity: !1
			}
		},
		componentWillUnmount: function() {
			this._shouldAnimate = !1
		},
		componentDidMount: function() {
			b("requestAnimationFrame")(this._animate)
		},
		render: function() {
			var a = String(this._resolveStyleProp("fill"));
			return !a ? null : g.jsxs(i, {
				children: [this._renderCircle(this.state.radius1, a), this._renderCircle(this.state.radius2, a), this._renderCircle(this.state.radius3, a)]
			})
		},
		_attachListeners: function() {
			var a = this.props,
				b = a.hoverStyle;
			a = a.proximityStyle;
			b && (this._attachSelfListener(h.SHAPE_ENTER, this._handleShapeEnter), this._attachSelfListener(h.SHAPE_LEAVE, this._handleShapeLeave));
			a && (this._attachSelfListener(h.SHAPE_ENTER_PROXIMITY, this._handleShapeEnterProximity), this._attachSelfListener(h.SHAPE_LEAVE_PROXIMITY, this._handleShapeLeaveProximity))
		},
		_handleShapeEnter: function(a) {
			this.setState({
				hover: !0
			})
		},
		_handleShapeEnterProximity: function(a) {
			this.setState({
				proximity: !0
			})
		},
		_handleShapeLeave: function(a) {
			this.setState({
				hover: !1
			})
		},
		_handleShapeLeaveProximity: function(a) {
			this.setState({
				proximity: !1
			})
		},
		_resolveStyleProp: function(a) {
			var b = this.state,
				c = b.hover;
			b = b.proximity;
			var d = this.props,
				e = d.hoverStyle,
				f = d.proximityStyle;
			d = d.style;
			if (c && e && e[a] !== void 0) return e[a];
			else if (b && f && f[a] !== void 0) return f[a];
			else if (d) return d[a];
			else return null
		},
		_buildPathImpl: function() {
			var a = this.props,
				b = a.minRadius,
				c = a.x;
			a = a.y;
			b = b || Number(this._resolveStyleProp("radius"));
			this.addCommand("ellipse", c, a, b, b)
		},
		_calculateNextRadius: function(a) {
			return a >= this.props.maxRadius ? this.props.minRadius : a + 1
		},
		_animate: function() {
			if (!this._shouldAnimate) return;
			var a = Date.now();
			(this._frameLastUpdated == null || a - this._frameLastUpdated >= l) && (this.setState({
				radius1: this._calculateNextRadius(this.state.radius1),
				radius2: this._calculateNextRadius(this.state.radius2),
				radius3: this._calculateNextRadius(this.state.radius3)
			}), this._frameLastUpdated = a);
			b("requestAnimationFrame")(this._animate)
		},
		_renderCircle: function(a, c) {
			var d = this.props,
				e = d.x,
				f = d.y,
				h = d.maxRadius;
			d = d.minRadius;
			h = (h - a) / (h - d);
			return g.jsx(b("Circle.art"), {
				fill: c,
				opacity: h,
				radius: a,
				x: e,
				y: f
			})
		}
	});
	e.exports = c
}), null);