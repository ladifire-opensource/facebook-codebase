__d("SpectrumBrush", ["fbt", "React", "ReactART", "SpectrumDataVisualization", "SpectrumUtilities", "createReactClass_DEPRECATED", "keyMirror", "prop-types", "EventListener", "d3-old/time/day"], (function(a, b, c, d, e, f, g) {
	var h = b("React"),
		i = b("ReactART").Path,
		j = b("ReactART").Group,
		k = b("ReactART").Shape,
		l = i().move(0, 0).line(1, 0).line(0, 1).line(-1, 0).close(),
		m = i().moveTo(-3.5, -7.5).arc(2, -2).line(4, 0).arc(2, 2).line(0, 16).arc(-2, 2).line(-4, 0).arc(-2, -2).close(),
		n = i().moveTo(-.5, -5.5).line(0, 13).moveTo(1.5, -5.5).line(0, 13),
		o = b("keyMirror")({
			NORMAL: null,
			HOVER: null,
			PRESSED: null,
			DRAGGING: null,
			MOVING: null
		}),
		p = 10;
	a = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumBrush",
		propTypes: {
			onBrush: b("prop-types").func,
			onSelection: b("prop-types").func
		},
		timeoutID: null,
		boundaries: [],
		distance: 0,
		UNSAFE_componentWillMount: function() {
			this.props.eventChannel[this.props.eventIndex] = this;
			var a = window.addEventListener ? window : document.body;
			this.releaseHandler = b("EventListener").listen(a, "mouseup", this.release);
			this.boundaries = b("SpectrumUtilities").getOuterRange(this.props.scaleX)
		},
		componentWillUnmount: function() {
			delete this.props.eventChannel[this.props.eventIndex]
		},
		getInitialState: function() {
			return {
				anchor: 0,
				focus: 0,
				mode: o.NORMAL,
				move: 0
			}
		},
		getHitType: function(a) {
			var b = this.getLeftPosition(),
				c = this.getRightPosition();
			if (Math.abs(a - b) < p) return "dragLeft";
			if (Math.abs(a - c) < p) return "dragRight";
			return a > b && a < c ? "move" : "outside"
		},
		getSelection: function() {
			if (this.props.selection !== void 0) {
				var a = this.props.selection[1];
				this.props.scaleX.interval && this.props.scaleX.interval() && (a = this.props.scaleX.interval().offset(a, -1));
				return [this.props.selection[0], a]
			}
			return this.props.focus ? this.props.focus.rangeX : null
		},
		hasSelection: function() {
			return this.isDraggingOrMoving() || !!this.getSelection()
		},
		isDraggingOrMoving: function() {
			return this.state.mode == o.DRAGGING || this.state.mode == o.MOVING
		},
		shouldUseSelectionFromProps: function() {
			return !this.isDraggingOrMoving() && this.getSelection()
		},
		getLeftPosition: function() {
			return this.shouldUseSelectionFromProps() ? this.props.scaleX(this.getSelection()[0]) : Math.min(this.state.focus, this.state.anchor)
		},
		getRightPosition: function() {
			return this.shouldUseSelectionFromProps() ? this.props.scaleX(this.getSelection()[1]) : Math.max(this.state.focus, this.state.anchor)
		},
		dragLeave: function() {
			this.distance !== 0 && this.invokeChangeEvent(), !this.timeoutID ? this.timeoutID = setTimeout(this.dragLeave, 1e3 / Math.abs(this.distance)) : (this.cancelDragLeave(), this.timeoutID = setTimeout(this.dragLeave, 1e3 / Math.abs(this.distance)))
		},
		cancelDragLeave: function() {
			this.timeoutID !== null && (clearTimeout(this.timeoutID), this.timeoutID = null)
		},
		hover: function(a) {
			var c = this.state.mode,
				d = this.props.scaleX;
			if (c == o.NORMAL || c == o.HOVER) {
				var e = d(d.invert(a));
				this.setState({
					anchor: e,
					focus: e,
					mode: o.HOVER
				});
				return
			}
			a < this.boundaries[0] ? this.distance = a - this.boundaries[0] : a > this.boundaries[1] ? this.distance = a - this.boundaries[1] : this.distance = 0;
			if (this.distance !== 0) {
				e = ~~(3e3 / Math.abs(this.distance));
				this.timeoutID === null ? this.timeoutID = setTimeout(this.dragLeave, e) : (this.cancelDragLeave(), this.timeoutID = setTimeout(this.dragLeave, e))
			} else this.cancelDragLeave();
			if (c == o.MOVING) {
				e = this.state.move;
				c = this.state.focus;
				var f = this.state.anchor,
					g = f - c;
				c = d(d.invert(a - e));
				f = d(d.invert(c + g));
				c = f - g;
				this.setState({
					anchor: f,
					focus: c
				}, this.invokeChangeEvent)
			} else {
				e = d(d.invert(a));
				if (this.props.minDays) {
					g = Math.min(e, this.state.anchor);
					f = Math.max(e, this.state.anchor);
					g = d.invert(g);
					f = d.invert(f);
					if (b("d3-old/time/day").range(g, f).length + 1 < this.props.minDays) return
				}
				this.setState({
					focus: e,
					mode: o.DRAGGING
				}, this.invokeChangeEvent)
			}
		},
		unhover: function() {
			this.state.mode == o.HOVER && this.setState({
				mode: o.NORMAL
			})
		},
		press: function(a, b) {
			if (this.hasSelection()) {
				if (b == "move") {
					this.setState({
						anchor: this.getLeftPosition(),
						focus: this.getRightPosition(),
						mode: o.MOVING,
						move: a - this.getRightPosition()
					});
					return
				}
				if (b == "dragLeft") {
					this.setState({
						anchor: this.getRightPosition(),
						focus: this.getLeftPosition(),
						mode: o.DRAGGING
					});
					return
				}
				if (b == "dragRight") {
					this.setState({
						anchor: this.getLeftPosition(),
						focus: this.getRightPosition(),
						mode: o.DRAGGING
					});
					return
				}
			}
			b = this.props.scaleX;
			b = b(b.invert(a));
			this.setState({
				anchor: b,
				focus: b,
				mode: o.PRESSED
			})
		},
		release: function() {
			this.cancelDragLeave();
			if (this.state.mode == o.PRESSED) {
				var a = this.state.focus,
					b = this.getLeftPosition(),
					c = this.getRightPosition(),
					d = c - b,
					e = this.props.scaleX;
				b = e(e.invert(a - d / 2));
				c = e(e.invert(b + d));
				b = c - d;
				this.setState({
					anchor: c,
					focus: b,
					mode: o.NORMAL
				});
				this.invokeChangeEvent();
				return
			}
			if (!this.isDraggingOrMoving()) return;
			this.setState({
				mode: o.NORMAL
			});
			this.invokeChangeEvent();
			this.distance = 0
		},
		getHighlightRect: function(a, c) {
			var d = this.props.scaleX;
			d = d.rangeBand ? d.rangeBand() : 0;
			var e = b("SpectrumUtilities").getOuterRange(this.props.scaleY);
			return {
				left: a,
				top: e[1],
				right: c + d,
				bottom: e[0]
			}
		},
		invokeChangeEvent: function() {
			var a = !this.isDraggingOrMoving() && this.props.onSelection ? this.props.onSelection : this.props.onBrush,
				b = Math.min(this.state.focus, this.state.anchor),
				c = Math.max(this.state.focus, this.state.anchor);
			this.distance > 0 ? c += this.distance : this.distance < 0 && (b += this.distance);
			var d = this.props.scaleX.invert(b),
				e = this.props.scaleX.invert(c);
			this.props.onRequestFocus && this.props.onRequestFocus({
				fixed: !this.isDraggingOrMoving(),
				title: g._("\u0110ang ch\u1ecdn"),
				rangeX: [d, e],
				rect: this.getHighlightRect(b, c)
			});
			b = this.props.scaleX.interval;
			a && a([d, b && b() ? b().offset(e, 1) : e])
		},
		getCursor: function(a) {
			if (!this.isDraggingOrMoving() && this.hasSelection()) return a == "dragLeft" || a == "dragRight" ? "col-resize" : a == "move" ? "move" : "pointer";
			else {
				a = this.state.mode == o.DRAGGING;
				var b = this.state.mode == o.MOVING;
				return a ? "col-resize" : b ? "move" : "pointer"
			}
		},
		handleEvent: function(a) {
			var b = this.getHitType(a.x);
			a.cursor = this.getCursor(b);
			var c = this.props.onSelection || this.props.onBrush;
			switch (a.type) {
				case "mousemove":
					this.hover(a.x);
					break;
				case "mouseleave":
					this.unhover();
					break;
				case "mousedown":
					c && (this.press(a.x, b), a.stopPropagation());
					break;
				case "mouseup":
					c && (a.stopPropagation(), this.release());
					break
			}
			this.hasSelection() && a.stopPropagation()
		},
		render: function() {
			var a = this.state.mode;
			if (a == o.NORMAL && !this.hasSelection()) return h.jsx(j, {});
			a = b("SpectrumDataVisualization").getScaleX(this.props);
			var c = a.rangeBand ? a.rangeBand() : 0;
			a = b("SpectrumUtilities").getOuterRange(a);
			if (this.getLeftPosition() < a[0] || this.getRightPosition() + c > a[1]) return h.jsx(j, {});
			var d = this.props.theme.brush,
				e = this.getHighlightRect(this.getLeftPosition(), this.getRightPosition());

			function f(a) {
				var b = (e.top + e.bottom) * .5,
					c = i().move(.5, 0).line(0, e.bottom - e.top);
				return h.jsxs(j, {
					x: Math.round(a),
					children: [h.jsx(k, {
						d: c,
						stroke: "#ccc",
						y: e.top
					}), h.jsx(k, {
						d: m,
						fill: "#fff",
						stroke: "#ccc",
						y: Math.round(b)
					}), h.jsx(k, {
						d: n,
						stroke: "#6382ad",
						y: Math.round(b)
					})]
				})
			}

			function g(a, b) {
				return h.jsx(k, {
					d: l,
					fill: d.fadeColor,
					scaleX: b - a,
					scaleY: e.bottom - e.top,
					x: a,
					y: e.top
				})
			}
			c = h.jsx(k, {
				d: l,
				fill: d.color,
				scaleX: e.right - e.left,
				scaleY: e.bottom - e.top,
				x: e.left,
				y: e.top
			});
			return h.jsxs(j, {
				children: [c, g(this.boundaries[0], e.left), g(e.right, this.boundaries[1]), d.handleBars && f(e.left), d.handleBars && f(e.right)]
			})
		}
	});
	e.exports = a
}), null);