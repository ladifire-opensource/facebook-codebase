__d("CandelaGuides.react", ["invariant", "CandelaConstants", "CandelaGuideUtils", "CandelaInteractiveRect.react", "CandelaPureRenderMixin", "CandelaResizeScalesMixin", "CandelaStructs", "CandelaTheme", "CandelaUtils", "React", "ReactART", "createReactClass_DEPRECATED", "immutable", "prop-types", "debounceCore", "getObjectValues"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = (a = b("CandelaConstants")).GuideXValueAlignment,
		j = a.PseudoClass,
		k = a.ShapeType,
		l = a.Visibility,
		m = b("ReactART").Group,
		n = a.EventSource,
		o = a.Placement;
	c = b("immutable").Map;
	d = b("immutable").OrderedSet;
	var p = b("immutable").Set;
	f = b("CandelaStructs").Threshold;
	a = b("CandelaUtils").data;
	var q = a.classNamesToSelector,
		r = a.getClassNamesFromInputString;

	function s(a, b, c) {
		var d = c[a];
		return b.toArray().map(function(b) {
			return d.convert(b[a])
		})
	}
	c = b("createReactClass_DEPRECATED")({
		displayName: "CandelaGuides",
		mixins: [b("CandelaResizeScalesMixin"), b("CandelaPureRenderMixin")],
		_isLongPressing: !1,
		_handleShapeHideDebounce: function() {},
		_xValues: null,
		contextTypes: {
			data: (a = b("prop-types")).instanceOf(d),
			scales: a.object,
			schema: a.instanceOf(c),
			theme: a.instanceOf(b("CandelaTheme"))
		},
		propTypes: {
			guideXValueAlignment: a.string,
			constrain: a.bool,
			guideX: a.oneOfType([a.element, a.array, a.object]),
			guideY: a.oneOfType([a.element, a.array, a.object]),
			includeNullValueInEvent: a.bool,
			markFormatterFactory: a.func,
			onHide: a.func,
			placement: a.oneOf(b("getObjectValues")(o)),
			plotX: a.string.isRequired,
			plotY: a.instanceOf(d).isRequired,
			regionID: a.string,
			surfaceMouseOutTimeout: a.number.isRequired,
			threshold: a.instanceOf(f)
		},
		getDefaultProps: function() {
			return {
				guideXValueAlignment: i.CLOSEST,
				constrain: !1,
				markFormatterFactory: function(a) {
					return function(a) {
						return String(a)
					}
				},
				placement: o.NONE,
				surfaceMouseOutTimeout: 300
			}
		},
		getInitialState: function() {
			return {
				activeCacheKey: null,
				activeSeries: null,
				coords: null
			}
		},
		UNSAFE_componentWillMount: function() {
			var a = this.props,
				c = a.plotX;
			a = a.surfaceMouseOutTimeout;
			var d = this.context.data;
			this._xValues = s(c, d, this.scales);
			this._handleShapeHideDebounce = b("debounceCore")(this._hide, a)
		},
		UNSAFE_componentWillUpdate: function(a, b, c) {
			b = a.plotX;
			a = c.data;
			this._xValues = s(b, a, this.scales)
		},
		componentWillUnmount: function() {
			this._handleShapeHideDebounce.reset()
		},
		_getTargetCoords: function(a, b) {
			b.target && b.target.coords ? b = a.union(b.target.coords) : b = a;
			return b.map(function(a) {
				var b = a.series,
					c = a.x;
				a = a.y;
				return {
					series: b,
					x: c,
					y: a
				}
			})
		},
		_handleShapeClick: function(a, c) {
			var d = this.props,
				e = d.guideXValueAlignment,
				f = d.includeNullValueInEvent,
				g = d.markFormatterFactory,
				h = d.placement,
				i = d.plotX,
				j = d.plotY,
				k = d.width;
			d = d.x;
			if (c.x < d || c.x > d + k) return;
			d = b("CandelaGuideUtils").getHits(c.x, this._xValues, d, d + k, e);
			k = b("CandelaGuideUtils").getCoordsAndEventData(this.context.data.toArray(), g, d, i, j, this.scales, f);
			e = k.coords;
			g = k.eventData;
			c.target = babelHelpers["extends"]({}, c.target, a);
			h !== o.CENTER && (c.target.coords = this._getTargetCoords(e, c));
			c.data = babelHelpers["extends"]({}, c.data, g)
		},
		_handleShapeHover: function(a, c) {
			var d = this.props,
				e = d.guideXValueAlignment,
				f = d.includeNullValueInEvent,
				g = d.markFormatterFactory,
				h = d.placement,
				i = d.plotX,
				j = d.plotY,
				k = d.width;
			d = d.x;
			if (c.x < d || c.x > d + k) return;
			if (c.source === n.TOUCH && !this._isLongPressing) return;
			d = b("CandelaGuideUtils").getHits(c.x, this._xValues, d, d + k, e);
			k = b("CandelaGuideUtils").createActiveCacheKey(d);
			e = b("CandelaGuideUtils").getCoordsAndEventData(this.context.data.toArray(), g, d, i, j, this.scales, f);
			g = e.coords;
			d = e.eventData;
			c.data = babelHelpers["extends"]({}, c.data, d);
			i = b("CandelaGuideUtils").createActiveSeries(g, c.y);
			if (k === this.state.activeCacheKey && i === this.state.activeSeries) {
				c.stopPropagation();
				return
			}
			this.setState({
				coords: g,
				activeCacheKey: k,
				activeSeries: i
			});
			c.target = babelHelpers["extends"]({}, c.target, a);
			h !== o.CENTER && (c.target.coords = this._getTargetCoords(g, c))
		},
		_handleShapeLongPress: function(a, b) {
			b.source === n.TOUCH && (this._isLongPressing = !0, this._handleShapeHideDebounce.reset(), this._handleShapeHover(a, b))
		},
		_handleShapeUp: function(a) {
			a.source === n.TOUCH && this._handleShapeLeave(a)
		},
		_handleShapeEnter: function() {
			this._handleShapeHideDebounce && this._handleShapeHideDebounce.reset()
		},
		_handleShapeLeave: function(a) {
			this._isLongPressing = !1, this._handleShapeHideDebounce()
		},
		_hide: function() {
			var a = this;
			this.setState({
				activeCacheKey: null,
				activeSeries: null,
				coords: null
			}, function() {
				a.props.onHide != null && a.props.onHide()
			})
		},
		_renderGuides: function(a, b) {
			var c = this,
				d = this.props,
				e = d.placement,
				f = d.threshold;
			d = this.context;
			var i = d.schema,
				m = d.theme,
				n = this.state.coords;
			return n && n.size ? h.Children.map(a, function(a, d) {
				var o = a.type;
				o.className || g(0, 4891);
				return n && n.map(function(d) {
					var g = d.content,
						n = d.data,
						s = d.series,
						t = d.x,
						u = d.y;
					if (i.get(s) === void 0) return null;
					var v = r(i.get(s).className),
						w = f ? r(f.get("className")) : p(),
						x = j.NONE;
					f && (n[s] > f.get("value") ? x = j.GREATER_THAN : n[s] === f.get("value") ? x = j.EQUAL_TO : x = j.LESS_THAN);
					n = i.get(s).comparisonFor || s;
					v = k.GUIDE + ('[placement="' + e + '"]>' + o.className) + q(v.union(w)) + ('[series="' + n + '"]') + x;
					w = s === c.state.activeSeries ? m.getActiveStyle(v) : m.getStyle(v);
					if (w.visibility === l.HIDDEN) return null;
					w.radius && (w.height = w.width = w.radius);
					b ? (n = t, x = n + w.width, s = c.props.y, v = s + c.props.height, w.height && (s = u, v = s + w.height)) : (s = u, v = s + w.height, n = c.props.x, x = n + c.props.width, w.width && (n = t, x = n + w.width));
					v -= w.marginBottom - w.marginTop;
					n += w.marginLeft - w.marginRight;
					x -= w.marginRight - w.marginLeft;
					s += w.marginTop - w.marginBottom;
					if (c.props.constrain) {
						u = 0;
						t = 0;
						n < c.props.x ? u = c.props.x - n : x > c.props.x + c.props.width && (u = c.props.x + c.props.width - x);
						s < c.props.y ? t = c.props.y - s : v > c.props.y + c.props.height && (t = c.props.y + c.props.height - v);
						v += t;
						n += u;
						s += t;
						x += u
					}
					return h.cloneElement(a, babelHelpers["extends"]({}, w, {
						bottom: v,
						content: g,
						left: n,
						right: x,
						top: s,
						key: d.series + "-" + o.className + "-" + String(!!b)
					}))
				})
			}) : null
		},
		render: function() {
			var a = this.props,
				c = a.guideX,
				d = a.guideY,
				e = a.height,
				f = a.placement,
				g = a.regionID,
				i = a.width,
				j = a.x;
			a = a.y;
			var l = this.context.theme;
			f = 'guide[placement="' + f + '"]';
			var n = l.getStyle(f);
			l = l.getHoverStyle(f);
			f = {
				shapeType: k.GUIDE
			};
			return h.jsxs(m, {
				children: [h.jsx(b("CandelaInteractiveRect.react"), {
					height: e,
					hoverStyle: l,
					onShapeClick: this._handleShapeClick.bind(this, f),
					onShapeEnter: this._handleShapeEnter,
					onShapeHover: this._handleShapeHover.bind(this, f),
					onShapeLeave: this._handleShapeLeave,
					onShapeLongPress: this._handleShapeLongPress.bind(this, f),
					onShapeUp: this._handleShapeUp,
					regionID: g,
					style: n,
					width: i,
					x: j,
					y: a
				}), c && this._renderGuides(c, !0), d && this._renderGuides(d)]
			})
		}
	});
	e.exports = c
}), null);