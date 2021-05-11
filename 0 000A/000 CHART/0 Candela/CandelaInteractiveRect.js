__d("CandelaInteractiveRect.react", ["CandelaConstants", "CandelaInteractiveMixin", "CandelaPlatformConstants", "React", "ReactART", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("CandelaConstants").Event,
		i = b("CandelaConstants").Style,
		j = b("ReactART").Group,
		k = b("ReactART").Shape,
		l = b("CandelaPlatformConstants").IMAGE_PATTERN;
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaInteractiveRect",
		boundingBoxFillOverride: !0,
		mixins: [b("CandelaInteractiveMixin")],
		propTypes: {
			height: (a = b("prop-types")).number.isRequired,
			hoverStyle: a.object,
			proximityStyle: a.object,
			style: a.object.isRequired,
			width: a.number.isRequired,
			x: a.number.isRequired,
			y: a.number.isRequired
		},
		getDefaultProps: function() {
			return {
				height: 0,
				style: {},
				width: 0,
				x: 0,
				y: 0
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
			else return d[a]
		},
		_getCirclePoints: function(a) {
			var b = [];
			if (a) {
				var c = 1,
					d = 0;
				while (d < c) b.push({
					x: c,
					y: d
				}), c -= .5 / a, d = Math.sin(Math.acos(c));
				for (var c = b.length - 1; c >= 0; c--) b.push({
					x: b[c].y,
					y: b[c].x
				})
			}
			return b
		},
		_buildPathImpl: function() {
			var a = this.props,
				b = a.height,
				c = a.width,
				d = a.x;
			a = a.y;
			var e = this._resolveStyleProp(i.BORDER_RADIUS_HORIZONTAL),
				f = this._resolveStyleProp(i.BORDER_RADIUS_VERTICAL);
			typeof f !== "number" && (f = 0);
			typeof e !== "number" && (e = 0);
			var g = this._getCirclePoints(f),
				h = this._getCirclePoints(e);
			this.addCommand("moveTo", d, a).addCommand("line", c, 0);
			d = c >= 0 ? 1 : -1;
			for (var a = 1; a < h.length; a++) this.addCommand("line", d * e * (h[a].y - h[a - 1].y), -e * (h[a].x - h[a - 1].x));
			this.addCommand("line", 0, b - e - e);
			for (var a = h.length - 2; a >= 0; a--) this.addCommand("line", d * e * (h[a].y - h[a + 1].y), e * (h[a].x - h[a + 1].x));
			a = b >= 0 ? 1 : -1;
			for (var h = 1; h < g.length; h++) this.addCommand("line", f * (g[h].x - g[h - 1].x), a * f * (g[h].y - g[h - 1].y));
			this.addCommand("line", -c + f + f, 0);
			for (var e = g.length - 2; e >= 0; e--) this.addCommand("line", -f * (g[e].x - g[e + 1].x), a * f * (g[e].y - g[e + 1].y));
			this.addCommand("close")
		},
		_renderPath: function() {
			var a = this._resolveStyleProp(i.FILL),
				b = this._resolveStyleProp(i.OPACITY),
				c = this._resolveStyleProp(i.STROKE),
				d = this._resolveStyleProp(i.STROKE_DASHARRAY),
				e = this._resolveStyleProp(i.STROKE_WIDTH);
			if (l && a instanceof l) {
				var f = this.props,
					h = f.x;
				f = f.y;
				a.adjustOffsetX(h);
				a.adjustOffsetY(f)
			}
			return g.jsx(k, {
				d: this.getPath(),
				fill: a,
				opacity: b,
				stroke: c,
				strokeDash: d,
				strokeWidth: e
			})
		},
		render: function() {
			return g.jsx(j, {
				children: this._renderPath()
			})
		}
	});
	e.exports = c
}), null);