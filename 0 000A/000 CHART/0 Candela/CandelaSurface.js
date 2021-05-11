__d("CandelaSurface.react", ["invariant", 
	"CandelaAnimationManager", 
	"CandelaConstants", 
	"CandelaEventEmitter", 
	"CandelaPanel.react", 
	"CandelaPlatformConstants", 
	"CandelaPureRenderMixin", 
	"CandelaRegionManager", 
	"CandelaRegionManagerDebugger.react", 
	"CandelaUtils", "React", 
	"ReactART", 
	"createReactClass_DEPRECATED", 
	"prop-types", 
	"debounceCore", 
	"forEachObject", 
	"throttle"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = (a = b("CandelaConstants")).CHART_ELEMENT_CLASS_NAME,
		j = a.CHART_HOVER_CARD_ANCHOR_CLASS_NAME,
		k = a.Event,
		l = a.EventSource,
		m = b("ReactART").Surface,
		n = (c = b("CandelaPlatformConstants")).REACT_DOM,
		o = c.REACT_NATIVE,
		p = c.SURFACE_STYLE,
		q = c.SURFACE_WRAPPER,
		r = b("CandelaUtils").functions.crossPlatformCopy;
	d = b("CandelaUtils").sets;
	var s = d.intersection,
		t = d.subtract;

	function u(a) {
		return o || a.type.indexOf("touch") !== -1 ? l.TOUCH : l.MOUSE
	}
	a = b("createReactClass_DEPRECATED")({
		displayName: "CandelaSurface",
		mixins: [b("CandelaPureRenderMixin")],
		_debouncedDragStart: null,
		_debouncedLongPress: null,
		_isLongPressing: !1,
		_didTouch: !1,
		_didEndDrag: !1,
		_locationX: 0,
		_locationY: 0,
		_pageX: 0,
		_pageY: 0,
		animationManager: new(b("CandelaAnimationManager"))(),
		emitter: new(b("CandelaEventEmitter"))(),
		regionManager: new(b("CandelaRegionManager"))(),
		dragRegions: new Set(),
		hoverRegions: new Set(),
		proximityRegions: new Set(),
		subscriptions: {},
		childContextTypes: {
			animationManager: (f = b("prop-types")).instanceOf(b("CandelaAnimationManager")),
			emitter: f.instanceOf(b("CandelaEventEmitter")),
			interactive: f.bool,
			regionManager: f.instanceOf(b("CandelaRegionManager"))
		},
		propTypes: {
			anchorRect: f.object,
			debug: f.object,
			dragPreventDefault: f.bool,
			dragStartTimeout: f.number.isRequired,
			interactive: f.bool,
			height: f.number.isRequired,
			longPressPreventDefault: f.bool,
			longPressSlop: f.number,
			longPressTimeout: f.number.isRequired,
			onShapeEvent: f.func,
			pointermoveThrottle: f.number,
			style: f.object.isRequired,
			width: f.number.isRequired
		},
		UNSAFE_componentWillMount: function() {
			this.emitter = new(b("CandelaEventEmitter"))(), this.animationManager = new(b("CandelaAnimationManager"))(), this.regionManager = new(b("CandelaRegionManager"))(), this.dragRegions = new Set(), this.hoverRegions = new Set(), this.proximityRegions = new Set()
		},
		componentDidMount: function() {
			this.animationManager.start()
		},
		componentWillUnmount: function() {
			this.animationManager.destroy(), this.regionManager.clearHitRegions(), b("forEachObject")(this.subscriptions, function(a, b) {
				a.forEach(function(a, b) {
					return a.remove()
				})
			})
		},
		getChildContext: function() {
			return {
				animationManager: this.animationManager,
				emitter: this.emitter,
				interactive: this.props.interactive,
				regionManager: this.regionManager
			}
		},
		getDefaultProps: function() {
			return {
				height: 0,
				dragPreventDefault: !0,
				dragStartTimeout: 150,
				interactive: !0,
				longPressPreventDefault: !0,
				longPressTimeout: 150,
				longPressSlop: 5,
				pointermoveThrottle: 0,
				style: {},
				width: 0
			}
		},
		getInitialState: function() {
			return {
				cursor: "default"
			}
		},
		_getTranslatedXY: function(a) {
			a = a.nativeEvent || a;
			if (o) return this._computeTranslatedNativeXY(a);
			else return this._computeTranslatedXY(a)
		},
		_computeTranslatedXY: function(a) {
			var b = this.props.height,
				c = a.clientX,
				d;
			n || g(0, 5746);
			var e = n.findDOMNode(this),
				f = e.getBoundingClientRect();
			a.touches && a.touches.length ? (a = a.touches[0], (a.clientY > f.top - e.clientTop + b || a.clientY < f.top - e.clientTop) && (d = e.clientTop + f.top + b / 2)) : a.changedTouches && a.changedTouches.length && (a = a.changedTouches[0], (a.clientY > f.top - e.clientTop + b || a.clientY < f.top - e.clientTop) && (d = e.clientTop + f.top + b / 2));
			d === void 0 && (d = a.clientY);
			return {
				x: c - f.left - e.clientLeft,
				y: d - f.top - e.clientTop
			}
		},
		_computeTranslatedNativeXY: function(a) {
			a.locationX += a.pageX - this._pageX - (a.locationX - this._locationX);
			a.locationY += a.pageY - this._pageY - (a.locationY - this._locationY);
			return {
				x: a.locationX,
				y: a.locationY
			}
		},
		_handlePointerClick: function(a) {
			if (this._didEndDrag) {
				this._didEndDrag = !1;
				return
			}
			var b = this._getTranslatedXY(a),
				c = b.x;
			b = b.y;
			c = this.regionManager.query(c, b);
			this._fireEventForEachRegion(k.SHAPE_CLICK, c.hover, a)
		},
		_handlePointerDown: function(a) {
			u(a) === l.TOUCH && (this._didTouch = !0);
			if (o) {
				var b = a.nativeEvent,
					c = b.locationX,
					d = b.locationY,
					e = b.pageX;
				b = b.pageY;
				this._locationX = c;
				this._locationY = d;
				this._pageX = e;
				this._pageY = b
			}
			c = this._getTranslatedXY(a);
			d = c.x;
			e = c.y;
			b = this.regionManager.query(d, e);
			this._fireEventForEachRegion(k.SHAPE_DOWN, b.hover, a);
			c = r(a);
			this._handleDragStart(c);
			this._handleLongPress(c)
		},
		_handlePointerUp: function(a) {
			this._didTouch && u(a) === l.MOUSE && (this._didTouch = !1);
			this._isLongPressing = !1;
			this._debouncedLongPress && (this._debouncedLongPress.reset(), this._debouncedLongPress = null);
			this._debouncedDragStart && (this._debouncedDragStart.reset(), this._debouncedDragStart = null);
			if (this.dragRegions.size) {
				var b = Array.from(this.dragRegions);
				this._fireEventForEachRegion(k.SHAPE_DRAG_END, b, a);
				this.dragRegions.clear();
				this._didEndDrag = !0;
				if (this.props.dragPreventDefault) return
			}
			b = this._getTranslatedXY(a);
			var c = b.x;
			b = b.y;
			c = this.regionManager.query(c, b);
			this._fireEventForEachRegion(k.SHAPE_UP, c.hover, a);
			if (u(a) === l.TOUCH) {
				if (this.proximityRegions.size) {
					b = Array.from(this.proximityRegions);
					this._fireEventForEachRegion(k.SHAPE_LEAVE_PROXIMITY, b, a);
					this.proximityRegions.clear()
				}
				if (this.hoverRegions.size) {
					c = Array.from(this.hoverRegions);
					this._fireEventForEachRegion(k.SHAPE_LEAVE, c, a);
					this.hoverRegions.clear()
				}
				this._locationX = 0;
				this._locationY = 0;
				this._pageX = 0;
				this._pageY = 0
			}
		},
		_inMoveBuffer: function(a) {
			a = a.nativeEvent;
			var b = a.pageX;
			a = a.pageY;
			var c = this.props.longPressSlop || 0;
			return Math.abs(b - this._pageX) < c && Math.abs(a - this._pageY) < c
		},
		_handlePointerMove: function(a) {
			if (this._debouncedLongPress) {
				if (o && this._inMoveBuffer(a)) return;
				this._debouncedLongPress.reset();
				this._debouncedLongPress = null
			}
			if (u(a) === l.TOUCH && !this._isLongPressing) return;
			this._isLongPressing && this.props.longPressPreventDefault && a.preventDefault();
			if (this._didTouch && u(a) === l.MOUSE) return;
			if (this.dragRegions.size) {
				var b = Array.from(this.dragRegions);
				this._fireEventForEachRegion(k.SHAPE_DRAG, b, a);
				if (this.props.dragPreventDefault) return
			}
			b = this._getTranslatedXY(a);
			var c = b.x;
			b = b.y;
			c = this.regionManager.query(c, b);
			this._processPointerMoveHits(c, a)
		},
		_handlePointerLeave: function(a) {
			this._isLongPressing = !1;
			this._debouncedLongPress && (this._debouncedLongPress.reset(), this._debouncedLongPress = null);
			this._debouncedDragStart && (this._debouncedDragStart.reset(), this._debouncedDragStart = null);
			if (this.proximityRegions.size) {
				var b = Array.from(this.proximityRegions);
				this._fireEventForEachRegion(k.SHAPE_LEAVE_PROXIMITY, b, a);
				this.proximityRegions.clear()
			}
			if (this.hoverRegions.size) {
				b = Array.from(this.hoverRegions);
				this._fireEventForEachRegion(k.SHAPE_LEAVE, b, a);
				this.hoverRegions.clear()
			}
			if (this.dragRegions.size) {
				b = Array.from(this.dragRegions);
				this._fireEventForEachRegion(k.SHAPE_DRAG_END, b, a, {
					defaultPrevented: !0
				});
				this.dragRegions.clear()
			}
			this.setState({
				cursor: "default"
			})
		},
		_handleDragStart: function(a) {
			var c = this;
			if (this._debouncedDragStart) return;
			var d = function() {
				var b = c._getTranslatedXY(a),
					d = b.x;
				b = b.y;
				d = c.regionManager.query(d, b);
				c._fireEventForEachRegion(k.SHAPE_DRAG_START, d.hover, a);
				b = d.hover.reduce(function(a, b) {
					return a === "default" ? b.getHoverCursor() : a
				}, "default");
				c.setState({
					cursor: b
				});
				c._debouncedDragStart = null
			};
			this._debouncedDragStart = b("debounceCore")(d, this.props.dragStartTimeout);
			this._debouncedDragStart()
		},
		_handleLongPress: function(a) {
			var c = this;
			if (this._debouncedLongPress) return;
			var d = function() {
				var b = c._getTranslatedXY(a),
					d = b.x;
				b = b.y;
				d = c.regionManager.query(d, b);
				b = d.hover;
				d = d.proximity;
				c._fireEventForEachRegion(k.SHAPE_LONG_PRESS, b, a);
				if (o) {
					var e = c.hoverRegions,
						f = c.proximityRegions;
					f = t(d, f, function(a) {
						return a.getUID()
					});
					e = t(b, e, function(a) {
						return a.getUID()
					});
					c._fireEventForEachRegion(k.SHAPE_ENTER_PROXIMITY, f, a);
					c._fireEventForEachRegion(k.SHAPE_ENTER, e, a);
					c.hoverRegions = new Set(b);
					c.proximityRegions = new Set(d)
				}
				c._isLongPressing = !0;
				c._debouncedLongPress = null
			};
			this._debouncedLongPress = b("debounceCore")(d, this.props.longPressTimeout);
			this._debouncedLongPress()
		},
		_fireEventForEachRegion: function(a, b, c, d) {
			var e = this;
			if (!b.length) return;
			var f = this.emitter,
				g = this._getTranslatedXY(c),
				h = u(c);
			b.every(function(b) {
				var i = d || {};
				i = r(c, i);
				i = f.emitAndReturnEvent(a, babelHelpers["extends"]({
					originalEvent: i,
					region: b,
					source: h,
					type: a
				}, g));
				a === k.SHAPE_DRAG_START && i.data && (e.dragRegions.size || e._handlePointerLeave(c), e.dragRegions.add(b));
				e.props.onShapeEvent && e.props.onShapeEvent(i);
				return i.shouldContinue()
			})
		},
		_processPointerMoveHits: function(a, b) {
			var c = a.hover,
				d = a.proximity,
				e = this.hoverRegions,
				f = this.proximityRegions,
				g = t(f, d, function(a) {
					return a.getUID()
				}),
				h = t(e, c, function(a) {
					return a.getUID()
				});
			this._fireEventForEachRegion(k.SHAPE_LEAVE_PROXIMITY, g, b);
			this._fireEventForEachRegion(k.SHAPE_LEAVE, h, b);
			g = t(d, f, function(a) {
				return a.getUID()
			});
			h = t(c, e, function(a) {
				return a.getUID()
			});
			this._fireEventForEachRegion(k.SHAPE_ENTER_PROXIMITY, g, b);
			this._fireEventForEachRegion(k.SHAPE_ENTER, h, b);
			g = s(d, f, function(a) {
				return a.getUID()
			});
			h = s(c, e, function(a) {
				return a.getUID()
			});
			this._fireEventForEachRegion(k.SHAPE_IN_PROXIMITY, g, b);
			this._fireEventForEachRegion(k.SHAPE_HOVER, h, b);
			if (!this.dragRegions.size) {
				f = a.hover.reduce(function(a, b) {
					return a === "default" ? b.getHoverCursor() : a
				}, "default");
				this.setState({
					cursor: f
				})
			}
			this.hoverRegions = new Set(c);
			this.proximityRegions = new Set(d)
		},
		_renderDebug: function() {
			var a = this.props.debug;
			return a && a.regions ? h.jsx(b("CandelaRegionManagerDebugger.react"), {}) : null
		},
		render: function() {
			var a = this.props,
				c = a.anchorRect,
				d = a.height,
				e = a.interactive,
				f = a.pointermoveThrottle,
				g = a.style;
			a = a.width;
			var j = this.state.cursor,
				k = g.backgroundColor;
			g = babelHelpers.objectWithoutPropertiesLoose(g, ["backgroundColor"]);
			var l = {};
			l.style = {
				backgroundColor: k,
				cursor: j,
				height: d,
				position: "relative",
				textAlign: "left",
				width: a
			};
			e && (l.onMouseDown = this._handlePointerDown, l.onMouseEnter = this._handlePointerMove, l.onMouseLeave = this._handlePointerLeave, l.onMouseMove = this._handlePointerMove, l.onMouseUp = this._handlePointerUp, ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch) && (l.onTouchEnd = this._handlePointerUp, l.onTouchMove = this._handlePointerMove, l.onTouchStart = this._handlePointerDown), l.onClick = this._handlePointerClick, o && (l.onResponderGrant = this._handlePointerDown, l.onResponderMove = this._handlePointerMove, l.onResponderRelease = this._handlePointerUp, l.onResponderTerminate = this._handlePointerUp), f && (l.onMouseMove = b("throttle").withBlocking(this._handlePointerMove, f, this)));
			k = h.jsxs(m, {
				className: i,
				height: d,
				style: p,
				width: a,
				children: [h.jsx(b("CandelaPanel.react"), {
					height: d,
					style: g,
					width: a,
					x: 0,
					y: 0,
					children: this.props.children
				}), this._renderDebug()]
			});
			return h.jsxs(q, babelHelpers["extends"]({}, l, {
				children: [k, h.jsx(v, {
					anchorRect: c
				})]
			}))
		}
	});

	function v(a) {
		a = a.anchorRect;
		if (!a || o) return null;
		a = a && {
			height: a.height,
			left: a.x,
			top: a.y,
			width: a.width
		};
		return h.jsx(q, {
			className: j,
			style: a
		})
	}
	e.exports = a
}), null);