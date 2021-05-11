__d("CandelaInteractivePoint.react", ["CandelaConstants", "CandelaInteractiveMixin", "Circle.art", "React", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaConstants").Event;
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaInteractivePoint",
		mixins: [b("CandelaInteractiveMixin")],
		propTypes: {
			hoverStyle: (a = b("prop-types")).object,
			proximityStyle: a.object,
			radius: a.number,
			style: a.object,
			x: a.number.isRequired,
			y: a.number.isRequired
		},
		getDefaultProps: function() {
			return {
				style: {}
			}
		},
		getInitialState: function() {
			return {
				hover: !1,
				proximity: !1
			}
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
				b = a.radius,
				c = a.x;
			a = a.y;
			b = b || Number(this._resolveStyleProp("radius"));
			this.addCommand("ellipse", c, a, b, b)
		},
		render: function() {
			var a = this.props,
				c = a.radius,
				d = a.x;
			a = a.y;
			c = c || Number(this._resolveStyleProp("radius"));
			var e = this._resolveStyleProp("fill"),
				f = this._resolveStyleProp("opacity"),
				h = this._resolveStyleProp("stroke"),
				i = this._resolveStyleProp("strokeWidth");
			return !e && !h ? null : g.jsx(b("Circle.art"), {
				fill: e,
				opacity: f,
				radius: c,
				stroke: h,
				strokeWidth: i,
				x: d,
				y: a
			})
		}
	});
	e.exports = c
}), null);