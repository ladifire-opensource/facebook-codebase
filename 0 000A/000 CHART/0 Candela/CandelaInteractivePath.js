__d("CandelaInteractivePath.react", ["invariant", "CandelaConstants", "CandelaInteractiveMixin", "React", "ReactART", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = b("CandelaConstants").Event,
		j = b("ReactART").Group,
		k = b("ReactART").Shape;
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaInteractivePath",
		mixins: [b("CandelaInteractiveMixin")],
		propTypes: {
			closePath: (a = b("prop-types")).bool,
			points: a.array,
			hoverStyle: a.object,
			proximityStyle: a.object,
			style: a.object.isRequired
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
			b && (this._attachSelfListener(i.SHAPE_ENTER, this._handleShapeEnter), this._attachSelfListener(i.SHAPE_LEAVE, this._handleShapeLeave));
			a && (this._attachSelfListener(i.SHAPE_ENTER_PROXIMITY, this._handleShapeEnterProximity), this._attachSelfListener(i.SHAPE_LEAVE_PROXIMITY, this._handleShapeLeaveProximity))
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
			else return d[a]
		},
		_buildPathImpl: function() {
			var a = this,
				b = this.props,
				c = b.closePath;
			b = b.points;
			b != null || g(0, 1328);
			b.forEach(function(b, c) {
				c === 0 ? a.addCommand("moveTo", b.x, b.y) : a.addCommand("lineTo", b.x, b.y)
			});
			c && this.addCommand("close")
		},
		_renderPath: function() {
			var a = this._resolveStyleProp("fill"),
				b = this._resolveStyleProp("opacity"),
				c = this._resolveStyleProp("stroke"),
				d = this._resolveStyleProp("strokeDasharray"),
				e = this._resolveStyleProp("strokeWidth");
			return h.jsx(k, {
				d: this.getPath(),
				fill: a,
				opacity: b,
				stroke: c,
				strokeDash: d,
				strokeWidth: e
			})
		},
		render: function() {
			return h.jsx(j, {
				children: this._renderPath()
			})
		}
	});
	e.exports = c
}), null);