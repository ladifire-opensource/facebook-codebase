__d("SimpleList.react", ["cx", "DOMEventListener", "IntegerBufferSet", 
	"LayoutHelper", "React", "ReactDOM", "Scrollbar.react", "joinClasses", 
	"normalizeWheel", "prop-types", "requestPersistentAnimationFrame", 
	"translateDOMPositionXY"], (function(a, b, c, d, e, f, g) {
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.$3 = null;
			d.$2 = null;
			d.$4 = null;
			d.$5 = null;
			d.$6 = !1;
			d.$10 = function() {
				d.setState({
					isScrolling: !0
				})
			};
			d.$11 = function() {
				d.$4 = !1, d.setState({
					isScrolling: !1
				})
			};
			d.$12 = function() {
				if (!d.$6) {
					d.$6 = !0;
					var a = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d));
					a && b("DOMEventListener").add(a, "wheel", d.$13, {
						passive: !1
					})
				}
			};
			d.$9 = function() {
				d.$6 = !1;
				var a = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d));
				a && b("DOMEventListener").remove(a, "wheel", d.$13, {
					passive: !1
				})
			};
			d.$13 = function(a) {
				a.deliberateSync = !0;
				var c = b("normalizeWheel")(a);
				c = Math.round(c.pixelY);
				d.$14(c, a);
				d.props.containWheelEvent && a.preventDefault()
			};
			d.$16 = function(a) {
				d.$1 = a.touches ? a.touches[0].clientY : a.clientY, d.setState({
					isDragging: !0
				})
			};
			d.$17 = function(a) {
				d.setState({
					isDragging: !1
				})
			};
			d.$18 = function(a) {
				if (!d.state.isDragging) return;
				var b = a.touches ? a.touches[0].clientY : a.clientY;
				b = b - d.$1;
				d.$14(-b, a)
			};
			d.$7 = function(a) {
				var b;
				a[0] !== void 0 ? (b = a[0].index, a = b + a.length - 1) : (b = 0, a = 0);
				return {
					firstIndex: b,
					lastIndex: a
				}
			};
			d.$8 = function(a, b) {
				b || (b = d.state.itemPositioning);
				b = d.$7(b);
				a = d.$7(a);
				d.props.onRangeChange && (a.firstIndex !== b.firstIndex || a.lastIndex !== b.lastIndex) && d.props.onRangeChange(a.firstIndex, a.lastIndex)
			};
			d.$19 = function(a) {
				d.$3.scrollTo(Math.round(a)), d.$15()
			};
			d.$15 = function() {
				var a = d.$3.getLayout();
				d.$8(a.items);
				d.setState({
					contentHeight: a.contentHeight,
					itemPositioning: a.items,
					scrollbarPosition: a.position
				})
			};
			d.$20 = function(a, b, c) {
				var e = d.$2.getValuePosition(a),
					f = c - b + 1;
				f = f + 2;
				e === null && d.$2.getSize() >= f && (e = d.$2.replaceFurthestValuePosition(b, c, a));
				e === null && (e = d.$2.getNewPositionForValue(a));
				return e
			};
			d.$2 = new(b("IntegerBufferSet"))();
			var e = c.height;
			d.$3 = new(b("LayoutHelper"))(c.rowCount, c.rowHeight, e);
			c = d.$3.getLayout();
			d.state = {
				contentHeight: c.contentHeight,
				itemPositioning: c.items,
				isScrolling: !1,
				isDragging: !1,
				scrollbarPosition: 0,
				viewportHeight: c.viewportHeight
			};
			return d
		}
		var d = c.prototype;
		d.UNSAFE_componentWillReceiveProps = function(a) {
			if (this.props.height !== a.height || this.props.rowCount !== a.rowCount || this.props.rowHeight !== a.rowHeight || this.props.rowHeightTracker != null || this.props.rowHeightTracker !== a.rowHeightTracker || this.props.goToRowIndex !== a.goToRowIndex) {
				var b = a.height;
				a.rowCount === 0 && (b = 0);
				this.$3.updateLayout(a.rowCount, a.rowHeight, b, null, a.rowHeightTracker, a.goToRowIndex);
				b = this.$3.getLayout();
				this.setState({
					contentHeight: b.contentHeight,
					itemPositioning: b.items,
					scrollbarPosition: b.position,
					viewportHeight: b.viewportHeight
				})
			}
		};
		d.componentDidUpdate = function(a) {
			if (this.props.goToRowIndex !== a.goToRowIndex) {
				a = this.state.itemPositioning;
				a = this.$7(a);
				this.props.onRangeChange && this.props.onRangeChange(a.firstIndex, a.lastIndex)
			}
		};
		d.componentDidMount = function() {
			this.$8(this.state.itemPositioning, [])
		};
		d.componentWillUnmount = function() {
			this.$9()
		};
		d.$14 = function(a, c) {
			this.$3.canHandleScrollBy(a) && (this.$4 || (this.$4 = !0, b("requestPersistentAnimationFrame")(this.$10)), this.$3.scrollBy(a), c.preventDefault(), c.stopPropagation(), this.$15()), this.$4 && (window.clearTimeout(this.$5), this.$5 = window.setTimeout(this.$11, 100))
		};
		d.$21 = function() {
			var a = this.state.itemPositioning,
				c = [],
				d = this.$7(a);
			for (var e = 0; e < a.length; e++) {
				var f = a[e],
					g = {
						position: "absolute",
						height: f.rowHeight,
						width: "100%",
						pointerEvents: this.state.isScrolling ? "none" : "auto"
					};
				b("translateDOMPositionXY")(g, 0, Math.round(f.offset));
				var i = {
						height: f.rowHeight,
						rowIndex: f.index,
						top: f.offset,
						width: this.props.width
					},
					j;
				typeof this.props.item === "function" ? j = this.props.item(i) : j = h.cloneElement(this.props.item, i);
				i = this.$20(f.index, d.firstIndex, d.lastIndex);
				c.push(h.jsx("div", {
					style: g,
					children: j
				}, i))
			}
			return c
		};
		d.render = function() {
			var a = {
					height: this.state.viewportHeight,
					width: this.props.width
				},
				c = this.$21(),
				d;
			!this.props.hideScrollShadow && this.state.scrollbarPosition && (d = h.jsx("div", {
				className: "_24tv",
				style: {
					top: 0
				}
			}));
			var e;
			!this.props.hideScrollShadow && this.state.scrollbarPosition < this.state.contentHeight - this.props.height && (e = h.jsx("div", {
				className: "_24tw",
				style: {
					top: this.state.viewportHeight
				}
			}));
			return h.jsxs("div", {
				onMouseEnter: this.$12,
				onMouseLeave: this.$9,
				onTouchStart: this.$16,
				onTouchMove: this.$18,
				onTouchEnd: this.$17,
				style: a,
				className: b("joinClasses")("_24tx", this.props.className),
				children: [c, d, e, h.jsx("div", {
					className: this.props.scrollbarOnHoverOnly ? "_5-dk" : "",
					children: h.jsx(b("Scrollbar.react"), {
						contentSize: this.state.contentHeight,
						onScroll: this.$19,
						size: this.props.height,
						position: this.state.scrollbarPosition
					})
				})]
			})
		};
		return c
	}(h.Component);
	e.exports = a;
	a.propTypes = {
		className: (c = b("prop-types")).string,
		width: c.number,
		rowCount: c.number.isRequired,
		height: c.number.isRequired,
		hideScrollShadow: c.bool.isRequired,
		rowHeight: c.number.isRequired,
		scrollbarOnHoverOnly: c.bool.isRequired,
		item: c.oneOfType([c.element, c.func]).isRequired,
		onRangeChange: c.func,
		rowHeightTracker: c.object,
		goToRowIndex: c.number,
		containWheelEvent: c.bool.isRequired
	};
	a.defaultProps = {
		hideScrollShadow: !1,
		scrollbarOnHoverOnly: !1,
		containWheelEvent: !1
	}
}), null);