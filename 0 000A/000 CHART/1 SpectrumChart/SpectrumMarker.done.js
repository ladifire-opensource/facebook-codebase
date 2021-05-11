__d("SpectrumMarker", ["Circle.art", "React", "ReactART", "SpectrumDataVisualization", "SpectrumUtilities", "createReactClass_DEPRECATED", "getObjectValues", "keyMirror", "prop-types"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = (a = b("ReactART")).Group,
		i = a.Path,
		j = a.Shape,
		k = a.Text,
		l = 2,
		m = b("keyMirror")({
			VERTICAL: null,
			HORIZONTAL: null
		});
	d = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumMarker",
		mixins: [b("SpectrumDataVisualization").Mixin],
		statics: {
			Orientation: m
		},
		propTypes: {
			content: (c = b("prop-types")).string,
			x: c.number,
			y: c.number,
			activeOffset: c.number,
			markerOrientation: c.oneOf(b("getObjectValues")(m))
		},
		getDefaultProps: function() {
			return {
				activeOffset: 10,
				markerOrientation: m.VERTICAL
			}
		},
		getInitialState: function() {
			return {
				tooltip: null
			}
		},
		getTop: function() {
			var a = b("SpectrumUtilities").getOuterRange(this.props.scaleY);
			return a[1] - 5
		},
		getLeft: function() {
			var a = b("SpectrumUtilities").getOuterRange(this.props.scaleX);
			return a[0] - 5
		},
		getX: function() {
			if (this.props.markerOrientation === m.VERTICAL) return b("SpectrumDataVisualization").getX(this.props.scaleX, this.props.x);
			else return this.props.scaleX(this.props.x)
		},
		getY: function() {
			return this.props.scaleY(this.props.y)
		},
		handleEvent: function(a) {
			if (a.type != "mousemove") return;
			if (this.props.markerOrientation === m.VERTICAL && this.props.y == null || this.props.markerOrientation === m.HORIZONTAL && this.props.x == null) return;
			var b = this.getX(),
				c = this.getY(),
				d = this.props.markerOrientation === m.VERTICAL && a.x > b - this.props.activeOffset && a.x < b + this.props.activeOffset,
				e = this.props.markerOrientation === m.HORIZONTAL && a.y > c - this.props.activeOffset && a.y < c + this.props.activeOffset;
			if (d || e) {
				d = {
					rect: {
						left: b,
						right: b,
						top: c,
						bottom: c
					},
					valueX: this.props.x,
					valueY: this.props.y
				};
				this.props.onRequestFocus && this.props.onRequestFocus(d);
				a.stopPropagation()
			} else this.props.onRequestFocus && this.props.onRequestFocus(null)
		},
		render: function() {
			var a = this.props.focus;
			a = a && a.valueX === this.props.x && a.valueY === this.props.y && this.props.x != null && this.props.y != null || !1;
			return g.jsxs(h, {
				children: [this._renderLine(a), this._renderCircle(a), this._renderLabel(a)]
			})
		},
		_getXDomain: function() {
			if (this.props.markerOrientation === m.VERTICAL) {
				var a = Math.floor(this.props.scaleX(this.props.x)) + .5;
				return [a, a]
			} else {
				a = this.getLeft();
				var c = b("SpectrumUtilities").getOuterRange(this.props.scaleX)[1];
				return [a, c]
			}
		},
		_getYDomain: function() {
			if (this.props.markerOrientation === m.VERTICAL) {
				var a = this.getTop(),
					c = b("SpectrumUtilities").getOuterRange(this.props.scaleY)[0];
				return [a, c]
			} else {
				a = Math.floor(this.props.scaleY(this.props.y)) + .5;
				return [a, a]
			}
		},
		_renderLine: function(a) {
			var b = this._getXDomain(),
				c = this._getYDomain(),
				d = i().moveTo(b[0], c[0]),
				e = this.props.theme.markers,
				f = e.lineColor,
				h = e.lineWidth;
			if (a) f = e.highlightColor, h = e.highlightWidth, d = d.lineTo(b[1], c[1]);
			else {
				a = this.props.markerOrientation === m.VERTICAL ? (c[1] - c[0]) / 4 : (b[1] - b[0]) / 4;
				e = this.props.markerOrientation === m.VERTICAL ? 0 : 2;
				c = this.props.markerOrientation === m.VERTICAL ? 2 : 0;
				for (var b = 0; b < a; b++) d.line(e, c).move(e, c)
			}
			return g.jsx(j, {
				d: d,
				stroke: f,
				strokeWidth: h
			})
		},
		_renderCircle: function(a) {
			var c = null;
			if (a) {
				a = this.props.theme.markers;
				var d = a.highlightColor,
					e = a.highlightWidth;
				c = g.jsxs(h, {
					children: [g.jsx(b("Circle.art"), {
						radius: l,
						stroke: d,
						strokeWidth: e * 2,
						x: this.getX(),
						y: this.getY()
					}), g.jsx(b("Circle.art"), {
						radius: l,
						fill: a.dotColor,
						x: this.getX(),
						y: this.getY()
					})]
				})
			}
			return c
		},
		_renderLabel: function(a) {
			var b = this.props.children;
			if (typeof b === "string") {
				var c = this.props.theme.markers,
					d = {
						fontFamily: c.fontFamily,
						fontSize: c.fontSize
					},
					e = this.props.markerOrientation === m.VERTICAL ? .5 : this._getXDomain()[1] - this._getXDomain()[0],
					f = this.props.markerOrientation === m.VERTICAL ? "center" : "right";
				a = a ? c.highlightColor : c.labelColor;
				b = g.jsx(k, {
					x: e,
					y: -d.fontSize - 2,
					alignment: f,
					font: d,
					fill: a,
					children: b
				})
			}
			return g.jsx(h, {
				x: this._getXDomain()[0],
				y: this._getYDomain()[0],
				children: b
			})
		}
	});
	e.exports = d
}), null);