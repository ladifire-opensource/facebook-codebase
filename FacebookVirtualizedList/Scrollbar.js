__d("Scrollbar.react", ["cssVar", "cx", "DOMEventListener", "DOMMouseMoveTracker", 
	"Keys", "React", "ReactDOM", "ReactWheelHandler", "emptyFunction", "prop-types", "translateDOMPositionXY"], (function(a, b, c, d, e, f, g, h) {
	var i = b("React"),
		j = {
			position: 0,
			scrollable: !1
		},
		k = parseInt("4px", 10),
		l = k * 2,
		m = 30,
		n = 40,
		o = 1,
		p = {
			DRAG: "drag",
			KEYBOARD: "keyboard",
			MOUSEWHEEL: "mousewheel",
			TRACK_CLICK: "track_click"
		};
	a = {
		defaultPosition: 0,
		isOpaque: !1,
		onScroll: b("emptyFunction"),
		orientation: "vertical",
		zIndex: 99
	};
	var q = null;
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.$2 = !1;
			d.$5 = null;
			d.$19 = function(a) {
				return d.props.orientation === "horizontal" ? d.$25(a) : !1
			};
			d.$20 = function(a) {
				return d.props.orientation !== "horizontal" ? d.$25(a) : !1
			};
			d.$15 = function() {
				if (!d.$1) {
					d.$1 = !0;
					var a = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d));
					a && d.$8 && b("DOMEventListener").add(a, "wheel", d.$8.onWheel, {
						passive: !1
					})
				}
			};
			d.$16 = function() {
				d.$1 = !1;
				var a = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d));
				a && d.$8 && b("DOMEventListener").remove(a, "wheel", d.$8.onWheel, {
					passive: !1
				})
			};
			d.$18 = function(a, b) {
				d.$24(b)
			};
			d.$17 = function(a, b) {
				d.$24(a)
			};
			d.$14 = function(a) {
				if (a.target !== b("ReactDOM").findDOMNode(d.refs.face)) {
					var c = a.nativeEvent;
					c = d.state.isHorizontal === !0 ? c.offsetX || c.layerX : c.offsetY || c.layerY;
					d.state.isHorizontal && d.props.isRTL && (c = d.props.size - c);
					if (!d.state.scrollable) return;
					var e = d.props;
					c /= d.state.scale;
					c = d.$9(c - d.state.faceSize * .5 / d.state.scale, e.size, e.contentSize, e.orientation, d.state.isDragging ? p.DRAG : p.TRACK_CLICK)
				} else c = {};
				c.focused = !0;
				d.$10(c);
				d.$3 && d.$3.captureMouseMoves(a);
				b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)).focus({
					preventScroll: !0
				})
			};
			d.$21 = function(a, b) {
				if (!d.state.scrollable) return;
				var c = d.props;
				a = d.state.isHorizontal ? a : b;
				d.state.isHorizontal && d.props.isRTL && (a *= -1);
				a /= d.state.scale;
				d.$10(d.$9(d.state.position + a, c.size, c.contentSize, c.orientation, p.DRAG))
			};
			d.$22 = function() {
				d.$4 = null, d.$3 && d.$3.releaseMouseMoves(), d.setState({
					isDragging: !1
				})
			};
			d.$13 = function(a) {
				var c = a.keyCode;
				if (c === b("Keys").TAB) return;
				var e = n,
					f = 0;
				if (d.state.isHorizontal) switch (c) {
					case b("Keys").HOME:
						f = -1;
						e = d.props.contentSize;
						break;
					case b("Keys").LEFT:
						f = d.props.isRTL ? 1 : -1;
						break;
					case b("Keys").RIGHT:
						f = d.props.isRTL ? -1 : 1;
						break;
					default:
						return
				}
				if (!d.state.isHorizontal) switch (c) {
					case b("Keys").SPACE:
						a.shiftKey ? f = -1 : f = 1;
						break;
					case b("Keys").HOME:
						f = -1;
						e = d.props.contentSize;
						break;
					case b("Keys").UP:
						f = -1;
						break;
					case b("Keys").DOWN:
						f = 1;
						break;
					case b("Keys").PAGE_UP:
						f = -1;
						e = d.props.size;
						break;
					case b("Keys").PAGE_DOWN:
						f = 1;
						e = d.props.size;
						break;
					default:
						return
				}
				a.preventDefault();
				c = d.props;
				d.$10(d.$9(d.state.position + e * f, c.size, c.contentSize, c.orientation, p.KEYBOARD))
			};
			d.$11 = function() {
				d.setState({
					focused: !0
				})
			};
			d.$12 = function() {
				d.setState({
					focused: !1
				})
			};
			d.$23 = function() {
				d.props.onScroll(d.state.position, d.state.scrollSource)
			};
			d.state = d.getInitialState();
			return d
		}
		var d = c.prototype;
		d.getInitialState = function() {
			var a = this.props;
			return this.$9(a.position || a.defaultPosition || 0, a.size, a.contentSize, a.orientation, null)
		};
		d.UNSAFE_componentWillReceiveProps = function(a) {
			var b = a.position;
			b === void 0 ? this.$10(this.$9(this.state.position, a.size, a.contentSize, a.orientation, null)) : this.$5 !== b && (this.$5 = b, this.$10(this.$9(b, a.size, a.contentSize, a.orientation, null), a))
		};
		d.render = function() {
			if (!this.state.scrollable) return null;
			var a = this.props.size,
				c = this.state.isHorizontal,
				d = !c,
				e = this.state.focused || this.state.isDragging,
				f = this.state.faceSize,
				g = this.props.isOpaque,
				h = this.props.verticalTop || 0,
				j = this.props.className,
				m = this.state.position * this.state.scale + k;
			g = "_1t0r" + (d ? " _1t0s" : "") + (c ? " _1t0t" : "") + " _4jdr" + (g ? " _1t0u" : "") + (e ? " _1t0v" : "");
			j && (g += " " + j);
			j = "_1t0w" + (c ? " _1t0y" : "") + (d ? " _1t0z" : "") + (e ? " _1t0-" : "") + " _1t0_";
			d = {};
			c ? (d.width = a, e = {
				width: f - l
			}, m = this.props.isRTL ? -m : m, b("translateDOMPositionXY")(e, m, 0)) : (d.top = h, d.height = a, e = {
				height: f - l
			}, b("translateDOMPositionXY")(e, 0, m));
			d.zIndex = this.props.zIndex;
			this.props.trackColor === "gray" && (d.backgroundColor = "#f6f7f9");
			return i.jsx("div", {
				"data-testid": void 0,
				onFocus: this.$11,
				onBlur: this.$12,
				onKeyDown: this.$13,
				onMouseDown: this.$14,
				onMouseOver: this.$15,
				onMouseLeave: this.$16,
				className: g,
				style: d,
				tabIndex: 0,
				children: i.jsx("div", {
					ref: "face",
					className: j,
					style: e
				})
			})
		};
		d.UNSAFE_componentWillMount = function() {
			var a = this.props.orientation === "horizontal";
			a = a ? this.$17 : this.$18;
			this.$8 = new(b("ReactWheelHandler"))(a, this.$19, this.$20)
		};
		d.componentDidMount = function() {
			this.$2 = !0, this.$3 = new(b("DOMMouseMoveTracker"))(this.$21, this.$22, document.documentElement), this.props.position !== void 0 && this.state.position !== this.props.position && this.$23()
		};
		d.componentWillUnmount = function() {
			this.$4 = null, this.$3 && this.$3.releaseMouseMoves(), q === this && (q = null), delete this.$3, this.$16(), this.$2 = !1
		};
		d.scrollBy = function(a) {
			this.$24(a)
		};
		d.$25 = function(a) {
			this.props.orientation === "horizontal" && this.props.isRTL && (a *= -1);
			a = this.$9(this.state.position + a, this.props.size, this.props.contentSize, this.props.orientation);
			return a.position !== this.state.position
		};
		d.$9 = function(a, b, c, d, e) {
			if (b < 1 || c <= b) return j;
			var f = a + "_" + b + "_" + c + "_" + d;
			if (this.$7 === f && this.$6) {
				e && (this.$6.scrollSource = e);
				return this.$6
			}
			d = d === "horizontal";
			var g = b / c,
				h = b * g;
			h < m && (g = (b - m) / (c - b), h = m);
			c = c - b;
			a < 0 ? a = 0 : a > c && (a = c);
			b = this.$3 ? this.$3.isDragging() : !1;
			h = {
				faceSize: h,
				isDragging: b,
				isHorizontal: d,
				position: a,
				scale: g,
				scrollable: !0,
				scrollSource: e || ((c = this.state) == null ? void 0 : c.scrollSource)
			};
			this.$7 = f;
			this.$6 = h;
			return h
		};
		d.$24 = function(a) {
			var b = this.props;
			b.orientation === "horizontal" && b.isRTL && (a *= -1);
			this.$10(this.$9(this.state.position + a, b.size, b.contentSize, b.orientation, p.MOUSEWHEEL))
		};
		d.$26 = function() {
			if (this.$2) try {
				this.$12(), b("ReactDOM").findDOMNode(this).blur()
			} catch (a) {}
		};
		d.$10 = function(a, b) {
			b = b || this.props;
			var c = b.position,
				d = this.state.position !== a.position;
			b = d || b.onScroll.length > o && a.scrollSource ? this.$23 : void 0;
			if (c === void 0 || c === a.position) this.setState(a, b);
			else {
				a.position !== void 0 && a.position !== this.state.position && this.props.onScroll(a.position, a.scrollSource);
				return
			}
			d && q !== this && (q && q.$26(), q = this)
		};
		return c
	}(i.PureComponent);
	e.exports = c;
	c.KEYBOARD_SCROLL_AMOUNT = n;
	c.SIZE = parseInt("15px", 10);
	c.ScrollSource = p;
	c.propTypes = {
		contentSize: (d = b("prop-types")).number.isRequired,
		className: d.string,
		"data-testid": d.string,
		defaultPosition: d.number,
		isOpaque: d.bool,
		isRTL: d.bool,
		orientation: d.oneOf(["vertical", "horizontal"]),
		onScroll: d.func,
		position: d.number,
		size: d.number.isRequired,
		trackColor: d.oneOf(["gray"]),
		zIndex: d.number,
		verticalTop: d.number
	};
	c.defaultProps = a
}), null);