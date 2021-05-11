__d("SpectrumSurface", ["React", "ReactART", "ReactDOM", "SpectrumEnvironment", "SpectrumUtilities", "emptyFunction", "throttle"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("ReactART").Surface,
		i = "mouseup";
	window.navigator.msPointerEnabled && (i = "MSPointerUp");
	var j = 500,
		k = 25,
		l = {
			type: "",
			shouldStop: !1,
			stopPropagation: function() {
				l.shouldStop = !0
			},
			x: 0,
			y: 0,
			hitRegionTop: 0,
			hitRegionLeft: 0,
			hitRegionBottom: 0,
			hitRegionRight: 0
		},
		m = {
			left: 0,
			right: "auto",
			top: 0,
			position: "absolute"
		};
	a = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {
				cursor: "",
				focus: null,
				timer: null
			}, d.clearTimer = function() {
				d.state.timer && clearTimeout(d.state.timer)
			}, d.blurIfNothingHappens = function() {
				d.state.timer = setTimeout(d.setState.bind(babelHelpers.assertThisInitialized(d), {
					focus: null
				}, null), j)
			}, d.requestFocus = function(a) {
				d.clearTimer();
				if (a == null) return d.blurIfNothingHappens();
				d.setState({
					focus: a
				});
				d.props.onRequestFocus && d.props.onRequestFocus(a)
			}, d.attachDragEvent = function() {
				var a;
				window.addEventListener ? (a = window, a.addEventListener("mousemove", d.handleWindowEvent, !0), a.addEventListener(i, d.handleWindowEvent, !0)) : (a = document.body, a.attachEvent("onmousemove", d.handleWindowEvent), a.attachEvent("mouseup", d.handleWindowEvent))
			}, d.detachDragEvent = function() {
				var a;
				window.addEventListener ? (a = window, a.removeEventListener("mousemove", d.handleWindowEvent, !0), a.removeEventListener(i, d.handleWindowEvent, !0)) : (a = document.body, a.detachEvent("onmousemove", d.handleWindowEvent), a.detachEvent("mouseup", d.handleWindowEvent))
			}, d.handleWindowEvent = function(a) {
				var b = a.type;
				b == "MSPointerUp" && (b = "mouseup");
				d.handleEvent(b, a)
			}, d.handleEvent = function(a, c) {
				c.preventDefault && c.preventDefault();
				c = c.nativeEvent || c;
				if (c.targetTouches) {
					c = c.targetTouches[0];
					if (!c) return
				}
				var e = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)),
					f = e.getBoundingClientRect();
				l.x = c.clientX - f.left - e.clientLeft;
				l.y = c.clientY - f.top - e.clientTop;
				a === "mousemove" ? d.throttledHandleEvent(a) : d.actuallyHandleEvent(a)
			}, d.actuallyHandleEvent = function(a) {
				d.clearTimer();
				a == "mouseleave" && d.blurIfNothingHappens();
				a == "mousedown" && d.attachDragEvent();
				d.type = "mousedown";
				a == "mouseup" && d.detachDragEvent();
				a == "mouseup" && d.type == "mousedown" && (a = "click");
				a == "mousemove" && d.props.onMouseMove(l);
				a == "mouseout" && d.props.onMouseOut(l);
				l.type = a;
				l.cursor = d.state.cursor;
				l.shouldStop = !1;
				l.hitRegionTop = -Infinity;
				l.hitRegionLeft = -Infinity;
				l.hitRegionBottom = +Infinity;
				l.hitRegionRight = +Infinity;
				a = d.eventChannel;
				for (var b = a.length; b--;) {
					var c = a[b];
					if (!c || !c.handleEvent) continue;
					c.handleEvent(l);
					if (l.shouldStop) break
				}
				l.cursor !== d.state.cursor && d.setState({
					cursor: l.cursor
				})
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.UNSAFE_componentWillMount = function() {
			this.eventChannel = [], this.throttledHandleEvent = b("throttle")(this.actuallyHandleEvent, k, this)
		};
		d.componentWillUnmount = function() {
			this.clearTimer()
		};
		d.render = function() {
			var a = this.props.width,
				c = this.props.height,
				d = {
					width: a,
					height: c,
					scaleX: this.props.scaleX,
					scaleY: this.props.scaleY,
					theme: this.props.theme,
					focus: this.state.focus,
					eventChannel: this.eventChannel,
					onRequestFocus: this.requestFocus
				};
			g.Children.forEach(this.props.children, function(b) {
				if (!b) return;
				var a = babelHelpers["extends"]({}, b.props, d);
				b.type.getAdjustedScaleY && (d.scaleY = b.type.getAdjustedScaleY(a));
				b.type.getAdjustedScaleX && (d.scaleX = b.type.getAdjustedScaleX(a))
			});
			var e = g.Children.map(this.props.children, function(a, c) {
					return !a || a.type.isChartLayer ? null : b("SpectrumUtilities").mergeProps(a, d, {
						eventIndex: c
					})
				}),
				f = g.Children.map(this.props.children, function(a, c) {
					return !a || !a.type.isChartLayer ? null : b("SpectrumUtilities").mergeProps(a, d, {
						eventIndex: c
					})
				}),
				i = {
					style: {
						cursor: this.state.cursor,
						height: c,
						position: "relative",
						textAlign: "left",
						width: a
					}
				};
			b("SpectrumEnvironment").ignoreUserEvents || (i.onMouseMove = this.handleEvent.bind(this, "mousemove"), i.onMouseOut = this.handleEvent.bind(this, "mouseout"), i.onMouseLeave = this.handleEvent.bind(this, "mouseleave"), i.onMouseDown = this.handleEvent.bind(this, "mousedown"), i.onTouchMove = this.handleEvent.bind(this, "mousemove"), i.onTouchStart = this.handleEvent.bind(this, "mousedown"), i.onTouchCancel = this.handleEvent.bind(this, "mouseup"), i.onTouchEnd = this.handleEvent.bind(this, "mouseup"));
			return g.jsxs("div", babelHelpers["extends"]({}, i, {
				"data-testid": void 0,
				children: [g.jsx("div", {
					style: {
						left: 0,
						height: c,
						overflow: "hidden",
						position: "absolute",
						top: 0,
						width: a
					},
					children: g.jsx(h, {
						height: c,
						width: a,
						style: m,
						children: e
					})
				}), f]
			}))
		};
		return c
	}(g.Component);
	a.defaultProps = {
		onMouseMove: b("emptyFunction"),
		onMouseOut: b("emptyFunction")
	};
	e.exports = a
}), null);