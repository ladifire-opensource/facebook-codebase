__d("SpectrumDataVisualization", ["React", "SpectrumUtilities", "d3-old/core/interpolate", "prop-types"], (function(a, b, c, d, e, f) {
	b("React");
	var g = 0,
		h = {
			Mixin: {
				UNSAFE_componentWillMount: function() {
					this.props.eventChannel && (this.props.eventChannel[this.props.eventIndex] = this), this.uid = g++ + ":"
				},
				componentWillUnmount: function() {
					this.props.eventChannel && delete this.props.eventChannel[this.props.eventIndex]
				},
				hasDimensionsChanged: function(a) {
					return this.props.width != a.width || this.props.height != a.height ? !0 : !1
				},
				hasDataChanged: function(a) {
					return this.props.data !== a.data ? !0 : !1
				},
				hasFocusChanged: function(a) {
					var b = this.props.focus;
					a = a.focus;
					if (b === a) return !1;
					if (!b || !a) return !0;
					var c = b.target === this,
						d = a.target === this;
					if (c !== d) return !0;
					return d ? this.hasHighlightDetailsChanged(b, a) : !1
				},
				contextTypes: {
					insightsEnvironmentConfig: b("prop-types").object
				}
			},
			getDefaultValueXAccessor: function(a) {
				if (!a.scaleX) return function(a, b) {
					return b
				};
				var c = a.data[0].length,
					d = a.scaleX.domain();
				if (!a.scaleX.interpolate && d.length == c) return function(a, b) {
					return d[b]
				};
				var e = d[1];
				a.scaleX.interval && a.scaleX.interval() && (e = a.scaleX.interval().offset(e, -1));
				var f = b("d3-old/core/interpolate")(d[0], e);
				return d[0] instanceof Date ? function(a, b) {
					return new Date(f(b / (c - 1)))
				} : function(a, b) {
					return f(b / (c - 1))
				}
			},
			getDefaultValueYAccessor: function() {
				return b("SpectrumUtilities").identity
			},
			getValueXAccessor: function(a) {
				return a.valueX || h.getDefaultValueXAccessor(a)
			},
			getValueYAccessor: function(a) {
				return a.valueY || h.getDefaultValueYAccessor(a)
			},
			getDefaultExtentX: function(a) {
				return h.getExtentHelper(a, h.getValueXAccessor(a))
			},
			getDefaultExtentY: function(a) {
				return h.getExtentHelper(a, h.getValueYAccessor(a))
			},
			getExtentHelper: function(a, b) {
				var c = function(a) {
						if (!Array.isArray(a)) return b(a);
						else if (b) return Math.min.apply(null, a.map(b));
						return Math.min.apply(null, a)
					},
					d = function(a) {
						if (!Array.isArray(a)) return b(a);
						else if (b) return Math.max.apply(null, a.map(b));
						return Math.max.apply(null, a)
					};
				return [Math.min.apply(null, a.data.map(c)), Math.max.apply(null, a.data.map(d))]
			},
			getScaleX: function(a) {
				a = a.scaleX.copy();
				a.clamp && a.clamp(!1);
				return a
			},
			getX: function(a, b) {
				var c = a.rangeBand ? a.rangeBand() : 0;
				return a(b) + c / 2
			},
			getClippingRectangleDimensions: function(a) {
				var c = b("SpectrumUtilities").getOuterRange(a.scaleX);
				a = b("SpectrumUtilities").getOuterRange(a.scaleY);
				return {
					x: Math.min(c[0], c[1]),
					y: Math.min(a[0], a[1]),
					width: Math.abs(c[0] - c[1]),
					height: Math.abs(a[0] - a[1])
				}
			}
		};
	e.exports = h
}), null);