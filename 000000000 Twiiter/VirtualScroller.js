(window.webpackJsonp = window.webpackJsonp || []).push([
	[0], {
		"+0pD": function(e, t) {
			var n = "[object Arguments]" == function() {
				return Object.prototype.toString.call(arguments)
			}();

			function o(e) {
				return "[object Arguments]" == Object.prototype.toString.call(e)
			}

			function i(e) {
				return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
			}(t = e.exports = n ? o : i).supported = o, t.unsupported = i
		},
		"+Tpo": function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("xrkw"),
				s = n("wwsH");
			const l = r.a.dedf22f3,
				c = {
					viewType: "analytics"
				};
			t.a = ({
				activeColor: e,
				color: t,
				isDisabled: n,
				isFaded: i,
				iconSize: r,
				onPress: d,
				style: h,
				tweetLink: u
			}) => o.createElement(s.a, {
				Icon: a.a,
				accessibilityLabel: l,
				activeColor: e,
				clientEventContext: c,
				color: t,
				iconSize: r,
				isDisabled: n,
				isFaded: i,
				link: u && !n ? u + "/analytics" : void 0,
				onPress: d,
				style: h
			})
		},
		"0+qk": function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("JyI6"),
				r = n("3XMw"),
				a = n.n(r),
				s = n("jwTb");
			const l = a.a.ee8589ad,
				c = a.a.b1547095,
				d = a.a.bea869b3;
			t.a = ({
				getLocationState: e,
				history: t
			}) => o.createElement(i.a, {
				accessibilityLabel: l,
				getLocationState: e,
				history: t,
				icon: o.createElement(s.a, null),
				label: d,
				scribeComponent: "floating_compose_button",
				shortLabel: c
			})
		},
		"06eB": function(e, t, n) {
			var o = Array.prototype.slice,
				i = n("kgfz"),
				r = n("+0pD"),
				a = e.exports = function(e, t, n) {
					return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : function(e, t, n) {
						var c, d;
						if (s(e) || s(t)) return !1;
						if (e.prototype !== t.prototype) return !1;
						if (r(e)) return !!r(t) && (e = o.call(e), t = o.call(t), a(e, t, n));
						if (l(e)) {
							if (!l(t)) return !1;
							if (e.length !== t.length) return !1;
							for (c = 0; c < e.length; c++)
								if (e[c] !== t[c]) return !1;
							return !0
						}
						try {
							var h = i(e),
								u = i(t)
						} catch (e) {
							return !1
						}
						if (h.length != u.length) return !1;
						for (h.sort(), u.sort(), c = h.length - 1; c >= 0; c--)
							if (h[c] != u[c]) return !1;
						for (c = h.length - 1; c >= 0; c--)
							if (d = h[c], !a(e[d], t[d], n)) return !1;
						return typeof e == typeof t
					}(e, t, n))
				};

			function s(e) {
				return null == e
			}

			function l(e) {
				return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(e.length > 0 && "number" != typeof e[0]))
			}
		},
		"0GBF": function(e, t, n) {
			"use strict";
			n("DZ+c"), n("x4t0"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("l0/+"),
				l = n("xa7s"),
				c = n("ERkP"),
				d = n("CHgo"),
				h = n("t62R"),
				u = n("py1r"),
				p = n("I4+6"),
				m = n("cm6r"),
				b = n("7nmT"),
				g = n.n(b),
				f = n("rHpw"),
				_ = n("PIdE"),
				y = n("lzTJ"),
				w = Object(_.a)({
					palette: y.a.light,
					key: "light-blue-normal",
					highContrastEnabled: !1,
					scale: "normal"
				}),
				v = n("shC7"),
				C = n("7ep7"),
				E = n("MWbm");
			const T = Object.freeze({
					Start: "start",
					End: "end"
				}),
				x = w.spaces.small,
				k = w.spacesPx.small,
				I = w.spaces.large,
				S = (w.spacesPx.large - k) / 2;
			class P extends c.Component {
				constructor(e, t) {
					super(e, t), a()(this, "_sliderVisibleLength", 1), a()(this, "_activeThumb", null), a()(this, "_keyPressValueDelta", 1), a()(this, "_renderInteractiveMarkers", ({
						cssColor: e,
						positionStyleDirection: t,
						solidBackgroundColorStyle: n,
						dimmedBackgroundColorStyle: o
					}) => {
						const i = p.a.generate({
								backgroundColor: f.a.theme.colors.transparent,
								color: e
							}),
							r = this._shouldOverrideRTL(),
							a = this._getThumbButtonStyles(r),
							s = this._getMarkers(t, n, o);
						return c.createElement(c.Fragment, null, s.map(e => c.createElement(m.a, {
							accessibilityRole: "none",
							interactiveStyles: i,
							key: e.value,
							style: [a, e.style]
						}, c.createElement(E.a, {
							style: [R.markerThumb, e.thumbStyle]
						}))))
					}), a()(this, "_renderIcon", e => {
						const {
							isVertical: t,
							minIcon: n,
							maxIcon: o
						} = this.props;
						if (!n && !o) return null;
						const i = e ? t ? o : n : t ? n : o,
							r = e ? R.maxIconVerticalMargin : R.minIconVerticalMargin,
							a = e ? R.minIconHorizontalMarginOverrideRTL : R.maxIconHorizontalMarginOverrideRTL,
							s = this._shouldOverrideRTL() ? a : e ? R.minIconHorizontalMargin : R.maxIconHorizontalMargin,
							l = t ? r : s;
						return c.createElement(E.a, {
							style: l
						}, i)
					}), a()(this, "_renderThumb", (e, {
						solidBackgroundColorStyle: t,
						isTrackHovered: n
					}) => {
						const {
							startThumbAccessibilityLabel: o,
							startThumbAccessibilityLabelValueText: i,
							endThumbAccessibilityLabel: r,
							endThumbAccessibilityLabelValueText: a,
							min: s,
							max: l,
							value: [d, m],
							color: b,
							withHidingThumb: g,
							isVertical: _,
							startThumbLabel: y,
							endThumbLabel: w,
							isSingleSlider: v
						} = this.props;
						if (v && e) return null;
						const C = e ? i : a,
							x = e ? o : r,
							k = e ? d : m,
							I = this._shouldOverrideRTL(),
							S = f.a.theme.colors[b],
							P = p.a.generate({
								backgroundColor: f.a.theme.colors.transparent,
								color: S
							}),
							O = _ ? "bottom" : I ? "right" : "left",
							A = (this.state.focusedThumb || this._activeThumb) === (e ? T.Start : T.End),
							M = this._isRTL(),
							L = g && !n && !A,
							D = this._getThumbButtonStyles(I),
							{
								positionStyle: j
							} = this._getPositionStyleForValue({
								value: k,
								positionStyleDirection: O
							}),
							N = e ? y : w,
							F = e ? this._handleFocusRingGainedStart : this._handleFocusRingGainedEnd;
						return c.createElement(u.a, {
							onFocusRingGained: F,
							onFocusRingLost: this._handleFocusRingLost
						}, ({
							isHovered: n,
							isPressed: o,
							isFocused: i
						}) => c.createElement(E.a, {
							accessibilityLabel: x,
							accessibilityRole: "adjustable",
							accessibilityValue: {
								max: l,
								min: s,
								now: k,
								text: C || k.toString()
							},
							accessible: !0,
							onKeyUp: this._handleKeyUp,
							onMouseDown: this._handleMouseDown,
							ref: this._handleThumbRef(e),
							style: [D, P.transitionStyle, (i || n) && P.hoverStyle, A && P.pressedStyle, i && P.focusedStyle, j]
						}, c.createElement(E.a, {
							style: [R.thumb, L && R.thumbHidden, A && R.thumbActive, t]
						}), N ? c.createElement(h.c, {
							size: "small",
							style: [R.thumbLabel, M ? R.thumbLabelLeftRTL : R.thumbLabelLeft]
						}, N) : null))
					}), a()(this, "_getPositionStyleForValue", ({
						value: e,
						positionStyleDirection: t
					}) => {
						const {
							min: n,
							max: o
						} = this.props, i = (e - n) / (o - n), r = {};
						return r[t] = `calc(${100*i}% - ${x} * ${i})`, {
							valuePosition: i,
							positionStyle: r
						}
					}), a()(this, "_markerValueIsInsideRange", e => {
						const {
							value: t
						} = this.props, [n, o] = t;
						return e >= n && e <= o
					}), a()(this, "_getThumbButtonStyles", e => {
						const {
							isVertical: t
						} = this.props;
						return [R.thumbButton, t ? R.verticalThumbButton : e ? R.horizontalThumbButtonOverrideRTL : R.horizontalThumbButton]
					}), a()(this, "_shouldOverrideRTL", () => v.a.isRTL && this.props.keepLTR), a()(this, "_isRTL", () => v.a.isRTL && !this.props.keepLTR), a()(this, "_handleRootRef", e => {
						e && (this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), this._removeTouchMoveToScrollListener = Object(d.a)(e, this._handleTouchMoveToScroll, !1))
					}), a()(this, "_handleThumbRef", e => t => {
						this._removeHandlerIfExists(e, e ? this._startThumbRef : this._endThumbRef), e ? this._startThumbRef = t : this._endThumbRef = t;
						const n = g.a.findDOMNode(t);
						n && (e ? (this._existingKeyDownStartHandler = this._handleKeyDown(e), n.addEventListener("keydown", this._existingKeyDownStartHandler)) : (this._existingKeyDownEndHandler = this._handleKeyDown(e), n.addEventListener("keydown", this._existingKeyDownEndHandler)))
					}), a()(this, "_removeHandlerIfExists", (e, t) => {
						if (!t) return;
						const n = g.a.findDOMNode(t);
						if (n) {
							const t = e ? this._existingKeyDownStartHandler : this._existingKeyDownEndHandler;
							n.removeEventListener("keydown", t)
						}
					}), a()(this, "_existingKeyDownStartHandler", null), a()(this, "_existingKeyDownEndHandler", null), a()(this, "_handleLayout", e => {
						const {
							isVertical: t
						} = this.props;
						this._sliderVisibleLength = e.nativeEvent.layout[t ? "height" : "width"]
					}), a()(this, "_resetKeyPressValueDelta", () => {
						const {
							min: e,
							max: t,
							step: n
						} = this.props;
						this._keyPressValueDelta = "number" == typeof n ? n : .001 * (t - e)
					}), a()(this, "_handleKeyUp", e => {
						this._resetKeyPressValueDelta()
					}), a()(this, "_handleKeyDown", e => t => {
						const {
							keyboardStep: n,
							min: o,
							max: i,
							step: r,
							value: a
						} = this.props, [s, l] = a, c = e ? s : l, {
							altKey: d,
							ctrlKey: h,
							metaKey: u
						} = t;
						if (d || h || u) return;
						const p = this._isRTL(),
							m = "ArrowUp" === t.key || t.key === (p ? "ArrowLeft" : "ArrowRight"),
							b = "ArrowDown" === t.key || t.key === (p ? "ArrowRight" : "ArrowLeft");
						if (m || b) {
							let s = a;
							if (n) s = this._normalizeValue(c + n * (m ? 1 : -1));
							else {
								let e = .05 * (i - o);
								"number" == typeof r && e < r && (e = r);
								const t = Math.min(this._keyPressValueDelta, e) * (m ? 1 : -1);
								this._keyPressValueDelta *= 1.4, s = this._normalizeValue(c + t)
							}
							this._triggerChange(e, s), s !== o && s !== i || this._resetKeyPressValueDelta(), t.preventDefault()
						}
					}), a()(this, "_handleMouseDown", e => {
						e.preventDefault()
					}), a()(this, "_normalizeValue", e => {
						const {
							min: t,
							max: n
						} = this.props, o = this._roundToMultipleOfStep(e);
						return Math.max(t, Math.min(o, n))
					}), a()(this, "_roundToMultipleOfStep", e => {
						const {
							step: t
						} = this.props;
						return "number" == typeof t ? t * Math.round(e / t) : e
					}), a()(this, "_triggerChange", (e, t) => {
						const {
							onChange: n
						} = this.props;
						n(this._getNewRangeValues(e, t), e)
					}), a()(this, "_getNewRangeValues", (e, t) => {
						const {
							value: n
						} = this.props, [o, i] = n, [r, a] = this._calculateNewRangeValuesWithoutConstraint(e, t, [o, i]);
						return [Math.min(r, i), Math.max(o, a)]
					}), a()(this, "_calculateNewRangeValuesWithoutConstraint", (e, t, n) => {
						const [o, i] = n, r = this._normalizeValue(t);
						return e ? [r, i] : [o, r]
					}), a()(this, "_handleStartShouldSetPanResponder", (e, t) => !0), a()(this, "_handleMoveShouldSetPanResponder", (e, t) => !0), a()(this, "_handlePanResponderGrant", (e, t) => {
						const {
							isVertical: n,
							min: o
						} = this.props, i = n ? this._getLocationY(e) : this._getLocationX(e), r = this._normalizeValue(o + this._scaleLengthByMinMaxRatio(i)), a = this._isValueClosestToRangeStart(r);
						this._setPanResponderSelected(a), this._triggerChange(a, r), this._valueOnGrant = r, this._setActive(!0, a)
					}), a()(this, "_getSliderInteractiveLength", () => this._sliderVisibleLength - k), a()(this, "_scaleLengthByMinMaxRatio", e => {
						const {
							min: t,
							max: n
						} = this.props;
						return e / this._getSliderInteractiveLength() * (n - t)
					}), a()(this, "_getLocationX", e => {
						const t = e.currentTarget,
							n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
								left: 0
							},
							o = e.nativeEvent.pageX - window.pageXOffset - (n && n.left || 0) - S;
						return this._isRTL() ? this._getSliderInteractiveLength() - o : o
					}), a()(this, "_getLocationY", e => {
						const t = e.currentTarget,
							n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
								top: 0
							},
							o = e.nativeEvent.pageY - window.pageYOffset - (n && n.top || 0) - S;
						return this._getSliderInteractiveLength() - o
					}), a()(this, "_setActive", (e, t) => {
						const {
							onActive: n
						} = this.props;
						this._activeThumb = e ? t ? T.Start : T.End : null, n && n(!!this._activeThumb)
					}), a()(this, "_setPanResponderSelected", e => {
						this._panResponderFocusedRangeStart = e
					}), a()(this, "_handleTouchMoveToScroll", e => {
						e.preventDefault()
					}), a()(this, "_handlePanResponderChange", e => {
						const {
							isVertical: t
						} = this.props;
						let n = 0;
						n = t ? -1 * e.dy : (this._isRTL() ? -1 : 1) * e.dx, this._triggerChange(this._panResponderFocusedRangeStart, this._valueOnGrant + this._scaleLengthByMinMaxRatio(n))
					}), a()(this, "_handlePanResponderMove", (e, t) => {
						this._handlePanResponderChange(t)
					}), a()(this, "_handlePanResponderEnd", (e, t) => {
						this._handlePanResponderChange(t), this._setActive(!1, !1)
					}), a()(this, "_handleFocusRingGainedStart", () => {
						this.setState({
							focusedThumb: T.Start
						})
					}), a()(this, "_handleFocusRingGainedEnd", () => {
						this.setState({
							focusedThumb: T.End
						})
					}), a()(this, "_handleFocusRingLost", () => {
						this.setState({
							focusedThumb: null
						})
					}), this.state = {
						focusedThumb: null
					}, this._resetKeyPressValueDelta(), this._panResponder = C.a.create({
						onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
						onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
						onPanResponderGrant: this._handlePanResponderGrant,
						onPanResponderMove: this._handlePanResponderMove,
						onPanResponderRelease: this._handlePanResponderEnd,
						onPanResponderTerminate: this._handlePanResponderEnd
					})
				}
				componentDidMount() {
					const {
						autoFocus: e,
						isSingleSlider: t
					} = this.props;
					var n, o;
					e && (t ? null == (n = this._endThumbRef) || n.focus() : null == (o = this._startThumbRef) || o.focus())
				}
				componentWillUnmount() {
					this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener()
				}
				render() {
					const {
						color: e,
						isVertical: t,
						withHidingThumb: n,
						value: o,
						startThumbLabel: r,
						endThumbLabel: a
					} = this.props, [d, h] = o, p = f.a.theme.colors[e], m = l.b(p), b = s.c({
						color: m,
						percent: .33,
						replace: !0
					}), g = l.e(b), _ = "white" === e ? s.a({
						color: m,
						coefficient: .4
					}) : s.b({
						color: m,
						coefficient: .5
					}), y = l.e(_), w = {
						backgroundColor: p
					}, v = {
						backgroundColor: y
					}, C = {
						backgroundColor: g
					}, T = this._shouldOverrideRTL(), x = this.props.isVertical ? "bottom" : T ? "right" : "left";
					return c.createElement(E.a, {
						style: [R.root, t && R.verticalRoot, T && R.ltr]
					}, this._renderIcon(!0), c.createElement(u.a, null, ({
						isHovered: o
					}) => {
						const s = this.state.focusedThumb || this._activeThumb,
							l = n && !o && !s,
							{
								valuePosition: u
							} = this._getPositionStyleForValue({
								value: d,
								positionStyleDirection: x
							}),
							{
								valuePosition: m
							} = this._getPositionStyleForValue({
								value: h,
								positionStyleDirection: x
							}),
							b = {
								flexGrow: u
							},
							g = {
								flexGrow: m - u
							};
						return c.createElement(E.a, i()({}, this._panResponder.panHandlers, {
							onLayout: this._handleLayout,
							ref: this._handleRootRef,
							style: [R.slider, t ? R.verticalSlider : R.horizontalSlider, t || !r && !a ? null : R.horizontalSliderWithLabel]
						}), c.createElement(E.a, {
							style: [R.track, t ? R.verticalTrack : R.horizontalTrack, l && (t ? R.verticalTrackWithHiddenThumb : R.horizontalTrackWithHiddenThumb), "white" === e ? C : v]
						}, c.createElement(E.a, {
							style: [R.hiddenTrack, b]
						}), c.createElement(E.a, {
							style: [R.progress, w, g]
						}), this._renderThumb(!0, {
							solidBackgroundColorStyle: w,
							isTrackHovered: o
						}), this._renderThumb(!1, {
							solidBackgroundColorStyle: w,
							isTrackHovered: o
						}), this._renderInteractiveMarkers({
							cssColor: p,
							positionStyleDirection: x,
							solidBackgroundColorStyle: w,
							dimmedBackgroundColorStyle: v
						})))
					}), this._renderIcon(!1))
				}
				_getMarkers(e, t, n) {
					const {
						min: o,
						max: i,
						step: r,
						value: a,
						withMarkers: s,
						isSingleSlider: l
					} = this.props;
					if (!s || "number" != typeof r) return [];
					const c = i - o / r + 1;
					return Array.from({
						length: c
					}).map((e, t) => t * r + o).filter(e => l ? a[1] !== e : !a.includes(e)).map(o => {
						const {
							positionStyle: i
						} = this._getPositionStyleForValue({
							value: o,
							positionStyleDirection: e
						});
						return {
							value: o,
							style: i,
							thumbStyle: this._markerValueIsInsideRange(o) ? t : n
						}
					})
				}
				_isValueClosestToRangeStart(e) {
					const {
						value: t,
						isSingleSlider: n
					} = this.props, [o, i] = t;
					if (n) return !1;
					if (o === i && o === this.props.min) return !1;
					if (o === i && e === this.props.max) return !0;
					if (e < o) return !0;
					if (e > i) return !1;
					return Math.abs(e - o) < Math.abs(e - i)
				}
			}
			a()(P, "defaultProps", {
				color: "primary",
				step: 1
			});
			const R = f.a.create(e => ({
				root: {
					userSelect: "none",
					flexDirection: "row",
					alignItems: "center"
				},
				ltr: {
					writingDirection: "ltr"
				},
				verticalRoot: {
					flexDirection: "column",
					flexGrow: 1
				},
				minIconHorizontalMargin: {
					marginRight: e.spaces.xSmall
				},
				maxIconHorizontalMargin: {
					marginLeft: e.spaces.xSmall
				},
				minIconHorizontalMarginOverrideRTL: {
					marginLeft: e.spaces.xSmall
				},
				maxIconHorizontalMarginOverrideRTL: {
					marginRight: e.spaces.xSmall
				},
				maxIconVerticalMargin: {
					marginBottom: e.spaces.xSmall
				},
				minIconVerticalMargin: {
					marginTop: e.spaces.xSmall
				},
				slider: {
					cursor: "pointer",
					flexGrow: 1,
					alignItems: "center"
				},
				verticalSlider: {
					width: e.spaces.medium,
					flexDirection: "column"
				},
				horizontalSlider: {
					height: e.spaces.medium,
					flexDirection: "row"
				},
				horizontalSliderWithLabel: {
					marginTop: e.spaces.large
				},
				track: {
					backgroundColor: e.colors.gray200,
					borderRadius: e.borderRadii.medium,
					flexGrow: 1,
					alignItems: "center"
				},
				verticalTrack: {
					width: e.spaces.xxSmall,
					flexDirection: "column-reverse",
					justifyContent: "flex-start"
				},
				horizontalTrack: {
					height: e.spaces.xxSmall,
					flexDirection: "row"
				},
				hiddenTrack: {
					opacity: 0
				},
				verticalTrackWithHiddenThumb: {
					width: `calc(${e.spaces.xxSmall} / 2)`
				},
				horizontalTrackWithHiddenThumb: {
					height: `calc(${e.spaces.xxSmall} / 2)`
				},
				progress: {
					backgroundColor: e.colors.primary,
					borderRadius: e.borderRadii.medium,
					alignSelf: "stretch"
				},
				thumbButton: {
					borderRadius: e.borderRadii.infinite,
					cursor: "pointer",
					height: I,
					width: I,
					alignItems: "center",
					justifyContent: "center",
					position: "absolute"
				},
				verticalThumbButton: {
					marginBottom: `calc(-1 * ${S}px)`
				},
				horizontalThumbButton: {
					marginLeft: `calc(-1 * ${S}px)`
				},
				horizontalThumbButtonOverrideRTL: {
					marginRight: `calc(-1 * ${S}px)`
				},
				thumb: {
					backgroundColor: e.colors.white,
					height: x,
					width: x,
					borderRadius: e.borderRadii.infinite,
					transitionProperty: "transform",
					transitionDuration: "0.1s",
					transform: [{
						scale: 1
					}],
					boxShadow: e.boxShadows.xSmall
				},
				thumbLabel: {
					position: "absolute",
					top: S - e.spacesPx.xxSmall + "px",
					transform: "translate(-50%,-100%)",
					whiteSpace: "nowrap",
					pointerEvents: "none"
				},
				thumbLabelLeft: {
					left: "50%"
				},
				thumbLabelLeftRTL: {
					right: "50%"
				},
				markerThumb: {
					height: 12,
					width: 12,
					borderRadius: e.borderRadii.infinite,
					boxShadow: e.boxShadows.xSmall
				},
				thumbActive: {
					transform: [{
						scale: 1.2
					}]
				},
				thumbHidden: {
					transform: [{
						scale: 0
					}]
				}
			}));
			t.a = P
		},
		"0PHd": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("zfvc"),
				s = n("t62R"),
				l = n("MAI/"),
				c = n("cm6r"),
				d = n("rHpw"),
				h = n("MWbm"),
				u = n("3XMw"),
				p = n.n(u);
			const m = p.a.a35a5b10,
				b = p.a.fc8cd112,
				g = e => r.createElement(s.c, {
					weight: "normal"
				}, e);
			class f extends r.Component {
				render() {
					const {
						displayFacepileInline: e,
						knownFollowersAvatarUrls: t,
						knownFollowersCount: n,
						userScreenName: o
					} = this.props, i = this._renderMessage();
					return r.createElement(a.b, {
						duration: "long",
						show: void 0 !== n,
						type: "fade"
					}, n ? r.createElement(c.a, {
						accessibilityLabel: m,
						interactiveStyles: null,
						link: o ? (d = o, `/${d}/followers_you_follow`) : void 0
					}, ({
						isHovered: n,
						isPressed: a
					}) => r.createElement(h.a, {
						style: _.content
					}, e ? null : r.createElement(l.a, {
						userAvatarUrls: t
					}), r.createElement(s.c, {
						color: "gray600",
						size: "small",
						style: [!e && _.message, (n || a) && !!o && _.underline]
					}, e ? r.createElement(l.a, {
						style: _.inlineFacepile,
						userAvatarUrls: t
					}) : null, i))) : r.createElement(h.a, {
						style: _.content
					}, r.createElement(s.c, {
						color: "gray600",
						size: "small"
					}, i)));
					var d
				}
				_renderMessage() {
					const {
						knownFollowersCount: e = 0,
						knownFollowersNames: t
					} = this.props;
					return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : b
				}
				_renderOneUsername(e) {
					return r.createElement(p.a.I18NFormatMessage, {
						$i18n: "c9e6167d"
					}, g(e[0]))
				}
				_renderTwoUsernames(e) {
					return r.createElement(p.a.I18NFormatMessage, {
						$i18n: "ha91d1ea"
					}, g(e[0]), g(e[1]))
				}
				_renderThreeUsernames(e) {
					return r.createElement(p.a.I18NFormatMessage, {
						$i18n: "f1069f9a"
					}, g(e[0]), g(e[1]), g(e[2]))
				}
				_renderUsernamesWithOthers(e, t) {
					const n = t - 2;
					return r.createElement(p.a.I18NFormatMessage, {
						$i18n: "e8404c1e"
					}, g(e[0]), g(e[1]), n)
				}
			}
			i()(f, "defaultProps", {
				displayFacepileInline: !1
			});
			const _ = d.a.create(e => ({
				content: {
					flexDirection: "row"
				},
				message: {
					flexShrink: 1,
					marginLeft: e.spaces.xSmall
				},
				underline: {
					textDecorationLine: "underline"
				},
				inlineFacepile: {
					textAlignVertical: "middle",
					marginRight: e.spaces.xxSmall
				}
			}))
		},
		"0mK8": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return y
			}));
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("MWbm"),
				s = n("jV+4"),
				l = n("t62R"),
				c = n("rHpw"),
				d = n("GcQN"),
				h = n("PU7B"),
				u = n("/WPq"),
				p = n("78ol");
			const m = ({
					author: e,
					color: t = "normal",
					size: n = "small",
					style: i,
					withLink: r = !1,
					withScreenName: a = !1,
					withHoverCard: l = !0
				}) => o.createElement(s.a, {
					avatarSize: "normal" === n ? "medium" : n,
					color: t,
					isProtected: e.protected,
					isVerified: e.verified,
					name: e.name,
					nameSize: n,
					profileImageUrl: e.profile_image_url_https,
					screenName: e.screen_name,
					screenNameSize: n,
					style: [w.authorUserName, i],
					withHoverCard: l,
					withLink: r,
					withScreenName: a
				}),
				b = ({
					style: e
				}) => o.createElement(a.a, {
					style: [w.lightningBadge, e]
				}, o.createElement(d.a, {
					style: w.lightningIcon
				})),
				g = r.a.abb022cc,
				f = ({
					color: e = "gray600",
					totalLikes: t
				}) => {
					const n = t > 0,
						i = r.a.ia24dc8c(t);
					return n ? o.createElement(l.c, {
						color: e
					}, g({
						formattedTotalLikes: i,
						totalLikes: t
					})) : null
				},
				_ = ({
					color: e = "gray600"
				}) => o.createElement(l.c, {
					"aria-hidden": "true",
					color: e,
					style: w.middot
				}, "·"),
				y = ({
					icon: e
				}) => o.createElement(a.a, {
					style: w.placeholderIconContainer
				}, "news" === e ? o.createElement(h.a, {
					style: w.placeholderIcon
				}) : "lists" === e ? o.createElement(u.a, {
					style: w.placeholderIcon
				}) : o.createElement(p.a, {
					style: w.placeholderIcon
				})),
				w = c.a.create(e => ({
					authorUserName: {
						alignItems: "center"
					},
					lightningBadge: {
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						borderRadius: e.borderRadii.small,
						position: "absolute"
					},
					lightningIcon: {
						boxSizing: "border-box",
						color: e.colors.white,
						height: e.spaces.medium,
						paddingVertical: "0.25rem",
						paddingHorizontal: "0.2rem"
					},
					middot: {
						paddingHorizontal: e.spaces.xxSmall
					},
					placeholderIcon: {
						color: e.colors.gray600,
						height: "2em"
					},
					placeholderIconContainer: {
						alignItems: "center",
						borderWidth: e.borderWidths.small,
						borderStyle: "solid",
						borderColor: e.colors.borderColor,
						borderRadius: e.borderRadii.xLarge,
						backgroundColor: e.colors.gray0,
						height: "100%",
						justifyContent: "center"
					}
				}))
		},
		"0mVX": function(e, t, n) {
			"use strict";
			n("plBw"), Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o = function(e, t) {
				var n = t.defaultWeight,
					o = t.ranges,
					i = n,
					r = e.charCodeAt(0);
				if (Array.isArray(o))
					for (var a = 0, s = o.length; a < s; a++) {
						var l = o[a];
						if (r >= l.start && r <= l.end) {
							i = l.weight;
							break
						}
					}
				return i
			};
			t.default = o, e.exports = t.default
		},
		"0pUJ": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("XOJV"),
				i = n("G6rE"),
				r = n("WA1W");
			const a = e => (t, n, {
				api: a
			}) => t(i.e.mute(e)).then(() => {
				const i = n(),
					a = Object.values(o.a.selectAll(i)).reduce((t, n) => {
						if (n.user === e) t[n.id_str] = !0;
						else if (n.retweeted_status) {
							o.a.select(i, n.retweeted_status).user === e && (t[n.id_str] = !0)
						}
						return t
					}, {});
				return t([r.b.removeTweets(a), r.a.removeTweets(a)])
			})
		},
		"0rY8": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M20.954 4.678c.29.3.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.32-1.32-1.33 1.32c-.15.15-.34.22-.53.22-.2 0-.39-.07-.53-.22-.3-.29-.3-.76 0-1.06l1.33-1.32-1.33-1.33c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l1.33 1.33 1.32-1.33c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.32 1.33 1.32 1.32z"
			}), o.createElement("path", {
				d: "M20.49 9.45c.04 1.97-.6 3.9-1.79 5.43-.27.36-1.12 1.4-1.12 1.4l-5.34 6.69c-.15.18-.37.28-.59.28-.08 0-.17-.01-.25-.04-.3-.11-.5-.39-.5-.71v-4.13c-2.07-.17-4-1.06-5.49-2.55-3.44-3.44-3.44-9.04 0-12.48C7.3 1.44 9.93.52 12.59.8c.41.04.71.41.66.82-.04.42-.42.72-.82.67-2.22-.23-4.39.53-5.96 2.11-2.86 2.85-2.86 7.5 0 10.36 1.38 1.38 3.22 2.14 5.18 2.14.41 0 .75.34.75.75v2.71l4.01-5.02c.01 0 .84-1.03 1.11-1.38.98-1.26 1.5-2.85 1.47-4.48 0-.42.33-.76.74-.77h.01c.41 0 .75.33.75.74z"
			}), o.createElement("path", {
				d: "M15.21 8.7h-7.1c-.413 0-.75-.335-.75-.75 0-.413.337-.75.75-.75h7.1c.413 0 .75.337.75.75 0 .415-.337.75-.75.75zm-3.05 3.24H8.11c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h4.05c.414 0 .75.336.75.75s-.336.75-.75.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"0weh": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("circle", {
				cx: "12.025",
				cy: "16.437",
				r: "1.281"
			}), o.createElement("path", {
				d: "M14.39 7.194c-.094-.127-.242-.2-.4-.2h-3.928c-.158 0-.307.073-.4.2-.096.126-.125.29-.08.442l1.814 6.098c.063.212.258.357.48.357h.298c.222 0 .416-.145.48-.356l1.813-6.098c.047-.152.017-.316-.077-.442z"
			}), o.createElement("path", {
				d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"0yYu": function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("rHpw"),
				s = n("MWbm");
			class l extends r.PureComponent {
				render() {
					const {
						withBottomBorder: e,
						withTopBorder: t
					} = this.props;
					return r.createElement(s.a, {
						style: [c.root, e && c.bottomBorder, t && c.topBorder]
					})
				}
			}
			i()(l, "defaultProps", {
				withBottomBorder: !0,
				withTopBorder: !0
			});
			const c = a.a.create(e => ({
				root: {
					backgroundColor: e.colors.gray0,
					height: e.spaces.xSmall
				},
				bottomBorder: {
					borderBottomWidth: e.borderWidths.small,
					borderBottomColor: e.colors.borderColor,
					borderBottomStyle: "solid"
				},
				topBorder: {
					borderTopWidth: e.borderWidths.small,
					borderTopColor: e.colors.borderColor,
					borderTopStyle: "solid"
				}
			}));
			t.a = l
		},
		"180P": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("DZ+c"), n("Ysgh");
			const o = e => {
					const t = (JSON.stringify(e) || "").split("");
					t.sort();
					const n = t.join("");
					return i(n, 0).toString()
				},
				i = (e, t) => {
					const n = "string" == typeof e ? e : String(e);
					let o = t;
					for (let e = 0; e < n.length; e++) {
						o = (o << 5) - o + n.charCodeAt(e), o &= o
					}
					return o
				}
		},
		"1AUC": function(e, t, n) {
			"use strict";
			n("jQ/y"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = (n("IAdD"), n("LdEA")),
				s = n.n(a),
				l = n("iPch"),
				c = n("1YZw"),
				d = n("rxPX"),
				h = n("0KEI"),
				u = n("wrlS"),
				p = n("kHBp"),
				m = n("P1r1"),
				b = n("G6rE"),
				g = n("wqZ5");
			const f = (e, {
					listId: t
				}) => t ? p.a.select(e, t) : void 0,
				_ = (e, t) => {
					const n = f(e, t);
					return n ? b.e.select(e, n.user) : void 0
				},
				y = (e, t) => {
					const n = u.b.isTrue("list_management_page_urt_timeline_enabled"),
						o = f(e, t);
					if (o) {
						const t = o.id_str;
						return n ? null == o ? void 0 : o.pinning : Object(g.g)(e, t)
					}
					return !1
				},
				w = e => u.b.isTrue("list_management_page_urt_timeline_enabled") ? p.a.updateOnePin(e) : Object(g.a)(e),
				v = e => u.b.isTrue("list_management_page_urt_timeline_enabled") ? p.a.updateOnePin(e) : Object(g.e)(e),
				C = (e, t) => {
					const n = s()(e, ["user"]);
					return Object.assign({}, n, {
						user: t
					})
				},
				E = (e, {
					listId: t
				}) => l.h(e, t);
			var T = Object(d.a)().propsFromState(() => ({
					list: f,
					user: _,
					isPinned: y,
					dataSaverMode: m.k,
					couldPinList: g.b,
					media: E
				})).adjustStateProps(({
					list: e,
					user: t,
					isPinned: n,
					dataSaverMode: o,
					couldPinList: i,
					media: r
				}) => ({
					list: e && t ? C(e, t) : void 0,
					media: r,
					isPinned: n,
					dataSaverMode: o,
					couldPinList: i
				})).propsFromActions(() => ({
					pinList: w,
					unpinList: v,
					createLocalApiErrorHandler: Object(h.d)("LIST_CELL"),
					addToast: c.b,
					subscribe: p.a.subscribe,
					unsubscribe: p.a.unsubscribe
				})).withAnalytics(),
				x = n("f5/l"),
				k = n("3XMw"),
				I = n.n(k),
				S = n("mN6z"),
				P = n("0mK8"),
				R = n("v6aA"),
				O = n("xZmF"),
				A = n("2My+"),
				M = n("Tp1h"),
				L = n("Jkc4"),
				D = n("MWbm"),
				j = n("t62R"),
				N = n("/yvb"),
				F = n("CGyZ"),
				B = n("htQn"),
				U = n("rHpw"),
				H = n("IMYl"),
				z = n("a5gf");
			I.a.d58baa7e;
			const W = {
				follow: I.a.ab0deccf,
				following: I.a.bc8baa07,
				unfollow: I.a.j2b5f5db
			};
			class V extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_shouldUseThumbnail", this.context.featureSwitches.isTrue("home_timeline_spheres_list_cell_thumbnail_enabled")), i()(this, "_shouldShowDescription", this.context.featureSwitches.isTrue("search_channels_description_enabled")), i()(this, "_shouldShowHoverCard", this.context.featureSwitches.isTrue("responsive_web_list_hover_cards_enabled")), i()(this, "_copyFSValue", this.context.featureSwitches.getStringValue("home_timeline_spheres_copy_variant")), i()(this, "_renderHoverCard", e => {
						const {
							listId: t
						} = this.props, n = "/i/lists/" + t;
						return this._shouldShowHoverCard && e ? r.createElement(A.a, {
							basePath: n,
							listId: t
						}, e) : e
					}), i()(this, "_renderName", () => {
						const {
							name: e
						} = this.props;
						return r.createElement(D.a, {
							style: K.name
						}, r.createElement(j.c, {
							weight: "bold"
						}, e), this._renderPrivateIcon())
					}), i()(this, "_renderDescription", () => {
						const {
							description: e,
							withDescription: t
						} = this.props;
						return this._shouldShowDescription && t && e ? r.createElement(j.c, {
							color: "gray600",
							numberOfLines: 2,
							size: "small",
							style: K.description
						}, e) : null
					}), i()(this, "_renderThumbnail", () => {
						const {
							dataSaverMode: e,
							media: t
						} = this.props;
						return this._shouldUseThumbnail && t ? r.createElement(D.a, {
							style: K.thumbnailImage
						}, r.createElement(O.a, {
							cropCandidates: t.crop,
							dataSaverMode: e,
							icon: "lists",
							image: t.image,
							type: "fixed"
						})) : null
					}), i()(this, "_renderRightControl", () => {
						const {
							isSelected: e,
							isFollowing: t,
							icon: n,
							withSubscribe: o,
							user: i,
							name: a,
							onIconClick: s,
							onFollow: l,
							onUnfollow: c
						} = this.props;
						return e ? r.createElement(H.a, {
							style: K.iconCheckmark
						}) : n ? r.createElement(N.a, {
							icon: n,
							onPress: s,
							type: "text"
						}) : o ? r.createElement(L.a, {
							customText: a,
							displayMode: M.a.subscribe,
							userFullName: i ? i.name : void 0
						}, e => r.createElement(F.a, {
							buttonText: "list_subscribe" === this._copyFSValue ? W : void 0,
							isFollowing: t,
							onFollow: e(l),
							onUnfollow: e(c),
							showRelationshipChangeConfirmation: !1,
							size: "normalCompact",
							style: K.followButton,
							type: "list"
						})) : void 0
					}), i()(this, "_renderPrivateIcon", () => {
						const {
							mode: e
						} = this.props;
						return "private" === e ? r.createElement(j.c, {
							size: "normal",
							style: K.icon
						}, r.createElement(z.a, {
							accessibilityLabel: "channel_follow" === this._copyFSValue ? I.a.b30efd20 : I.a.j681933d,
							style: K.iconLock
						})) : null
					})
				}
				render() {
					const {
						onClick: e,
						listId: t,
						user: n,
						withHoverCard: o,
						withBottomBorder: i
					} = this.props, a = "/i/lists/" + t;
					return r.createElement(B.a, {
						link: a,
						onPress: e,
						style: [K.root, i && K.bottomBorder]
					}, r.createElement(D.a, {
						style: K.listContainer
					}, r.createElement(D.a, {
						style: K.leftColumn
					}, this._renderHoverCard(this._renderThumbnail()), r.createElement(D.a, {
						style: K.listAttribution
					}, this._renderHoverCard(this._renderName()), this._renderDescription(), n ? r.createElement(P.a, {
						author: n,
						size: "small",
						withHoverCard: o,
						withLink: !0,
						withScreenName: !0
					}) : null)), r.createElement(D.a, {
						style: K.rightColumn
					}, this._renderRightControl())))
				}
			}
			i()(V, "contextType", R.a), i()(V, "defaultProps", {
				withSubscribe: !1
			});
			const K = U.a.create(e => ({
				root: {
					backgroundColor: e.colors.cellBackground,
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				bottomBorder: {
					borderBottomColor: e.colors.borderColor,
					borderBottomWidth: e.borderWidths.small
				},
				followButton: {
					marginLeft: e.spaces.xSmall
				},
				listContainer: {
					flexDirection: "row"
				},
				leftColumn: {
					alignItems: "center",
					flexDirection: "row",
					flex: 1,
					flexShrink: 1
				},
				rightColumn: {
					flexShrink: 0,
					justifyContent: "center"
				},
				iconCheckmark: {
					color: e.colors.primary,
					paddingHorizontal: e.spaces.xSmall
				},
				iconLock: {
					color: e.colors.text
				},
				listAttribution: {
					flex: 1,
					alignItems: "flex-start"
				},
				name: {
					marginBottom: e.spaces.micro,
					flexDirection: "row"
				},
				description: {
					marginBottom: e.spaces.micro
				},
				icon: {
					paddingLeft: e.spaces.xxSmall
				},
				thumbnailImage: {
					alignItems: "flex-start",
					height: "100%",
					marginRight: e.spaces.small
				}
			}));
			var G = n("sYiQ"),
				q = n("LtQU"),
				X = n("FITr"),
				Y = n("ShJ/");
			let Q = I.a.b01c0d14,
				J = I.a.fa816a0a,
				$ = I.a.ac832ae4,
				Z = I.a.cdb33880;
			"channel_follow" === u.b.getStringValue("home_timeline_spheres_copy_variant") && (Q = I.a.b7e36da0, J = I.a.cc984eb4, $ = I.a.h20a67e7, Z = I.a.ebe6423a);
			class ee extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderIcon", () => {
						const {
							isPinned: e,
							mode: t
						} = this.props;
						return t === G.a.Reordering ? r.createElement(q.a, {
							accessibilityLabel: J
						}) : t === G.a.Pinning ? e ? r.createElement(X.a, {
							accessibilityLabel: Z
						}) : r.createElement(Y.a, {
							accessibilityLabel: $
						}) : void 0
					}), i()(this, "_handleClick", e => {
						const {
							list: t,
							onClick: n
						} = this.props;
						t && (this._scribeAction("click"), n && n(e, t))
					}), i()(this, "_handleFollowClick", () => {
						const {
							list: e,
							subscribe: t,
							unsubscribe: n,
							createLocalApiErrorHandler: o
						} = this.props;
						if (e) {
							const {
								id_str: i,
								following: r
							} = e;
							Object(x.a)(o, r, i, t, n), this._scribeAction(r ? "unfollow" : "follow")
						}
					}), i()(this, "_scribeAction", e => {
						const {
							analytics: t
						} = this.props;
						t.contextualScribeNamespace.element ? t.scribeAction(e) : t.scribe({
							component: "list",
							action: e
						})
					}), i()(this, "_handlePinClick", e => {
						const {
							addToast: t,
							analytics: n,
							pinList: o,
							couldPinList: i,
							list: r,
							isPinned: a,
							unpinList: s
						} = this.props;
						e.preventDefault(), r && (a ? (n.scribe({
							element: "unpin_button",
							action: "click"
						}), s(r.id_str)) : i ? (n.scribe({
							element: "pin_button",
							action: "click"
						}), o(r.id_str)) : (t({
							text: Q
						}), n.scribe({
							element: "unpinnable_button",
							action: "click"
						})))
					})
				}
				shouldComponentUpdate(e, t) {
					return !Object(S.a)(e, this.props) || !Object(S.a)(t, this.state)
				}
				render() {
					const {
						dataSaverMode: e,
						mode: t,
						media: n,
						list: o,
						withBottomBorder: i,
						withUserInfo: a,
						withThumbnail: s,
						withSubscribe: l,
						withDescription: c,
						getIsSelected: d
					} = this.props, h = t === G.a.Pinning ? this._handlePinClick : void 0, {
						name: u,
						description: p,
						id_str: m,
						user: b,
						mode: g,
						following: f
					} = o || {}, _ = d && d(m);
					return o ? r.createElement(V, {
						dataSaverMode: e,
						description: p,
						icon: this._renderIcon(),
						isFollowing: f || !1,
						isSelected: _,
						listId: m,
						media: s ? n : void 0,
						mode: g,
						name: u,
						onClick: this._handleClick,
						onFollow: this._handleFollowClick,
						onIconClick: h,
						onUnfollow: this._handleFollowClick,
						user: a ? b : void 0,
						withBottomBorder: i,
						withDescription: c,
						withSubscribe: l
					}) : null
				}
			}
			i()(ee, "defaultProps", {
				withUserInfo: !0
			});
			const te = T(ee);
			t.a = te
		},
		"1bnC": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("3XMw");
			const i = n.n(o).a.gf5e9ea6
		},
		"21Tw": function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("Qwev"),
				s = n("QX9J"),
				l = n("3XMw"),
				c = n.n(l),
				d = (n("IAdD"), n("Lsrn")),
				h = n("k/Ka");
			const u = (e = {}) => Object(h.a)("svg", Object.assign({}, e, {
				style: [d.a.root, e.style],
				viewBox: "0 0 30 72"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M28.414 38.586c-.78-.78-2.046-.78-2.828 0L17 47.172V22c0-1.106-.894-2-2-2s-2 .894-2 2v25.172l-8.586-8.586c-.78-.78-2.046-.78-2.828 0s-.78 2.046 0 2.828l12 12c.39.39.9.586 1.414.586s1.024-.196 1.414-.586l12-12c.78-.78.78-2.046 0-2.828z"
			})));
			u.metadata = {
				width: 30,
				height: 72
			};
			var p = u,
				m = n("7nmT"),
				b = n.n(m),
				g = n("rHpw"),
				f = n("rOXj"),
				_ = n("aITJ");
			var y = n("Enqy"),
				w = n("KDev"),
				v = n("MWbm");
			const C = c.a.gdd51574;
			class E extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_unmounted", !1), i()(this, "_inPTR", !1), i()(this, "_pullHeight", 0), i()(this, "state", {
						pull: 0,
						pullDistance: 0
					}), i()(this, "_onScroll", () => window.requestAnimationFrame(() => this._handleScroll())), i()(this, "_getListViewRef", e => {
						this._listView = e
					}), i()(this, "_getPullViewRef", e => {
						this._pullView = e
					}), i()(this, "_enablePTRIfNeeded", () => {
						if (!this._unmounted) {
							this._getScrollTop() <= 0 && this._enablePTR()
						}
					}), i()(this, "_handleTouchStart", e => {
						this._pullInfo.startY = e.touches[0].clientY
					}), i()(this, "_handleTouchMove", e => {
						if ("number" != typeof this._pullInfo.startY) return;
						const t = e.touches[0].clientY,
							n = Math.round(.4 * (t - this._pullInfo.startY));
						n <= 0 && 0 === this.state.pullDistance || (n > 0 && e.preventDefault(), this._updatePullPosition(n), this._updatePullState(this.state.pullDistance, n), this.setState({
							pullDistance: n
						}))
					}), i()(this, "_handleTouchEnd", e => {
						const {
							moved: t
						} = this._pullInfo;
						t && this.state.pullDistance > this._pullHeight ? (e.preventDefault(), this._release()) : this._resetPullInfo()
					})
				}
				render() {
					const {
						children: e,
						isRefreshing: t
					} = this.props, {
						pullDistance: n
					} = this.state, o = t && n ? r.createElement(a.a, null) : r.createElement(p, {
						accessibilityLabel: C,
						style: [T.refreshArrow, 1 === this.state.pull ? T.refreshArrowReady : null]
					}), i = {
						pullDistance: Object(y.spring)(n, y.presets.stiff)
					};
					return r.createElement(v.a, {
						style: T.root
					}, r.createElement(y.Motion, {
						style: i
					}, ({
						pullDistance: t
					}) => r.createElement(v.a, {
						ref: this._getListViewRef,
						style: [t && {
							transform: [{
								translate3d: `0,${t}px,0`
							}]
						}]
					}, r.createElement(v.a, {
						ref: this._getPullViewRef,
						style: T.ptrCell
					}, o), r.createElement(v.a, {
						style: t ? T.children : void 0
					}, e))))
				}
				componentDidMount() {
					this._unmounted = !1, this._pullView && (this._pullHeight = this._pullView.getBoundingClientRect().height), this._listView instanceof HTMLElement && (this._listParent = this._listView);
					const e = this._getScrollParent();
					e && e.addEventListener("scroll", this._onScroll), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded)
				}
				componentWillUnmount() {
					this._unmounted = !0;
					const e = this._getScrollParent();
					e && e.removeEventListener("scroll", this._onScroll)
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.isRefreshing && !e.isRefreshing && (this._disablePTR(), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded))
				}
				_getScrollParent() {
					return this._scrollParent = this._scrollParent || function(e) {
						let t = window,
							n = e;
						if (n !== window)
							for (; n && n !== document.body;) {
								const {
									overflowY: e
								} = window.getComputedStyle(n) || {};
								if (!("auto" !== e && "scroll" !== e || n instanceof Text)) {
									t = n;
									break
								}
								n = n.parentElement
							}
						return t
					}(b.a.findDOMNode(this)), this._scrollParent
				}
				_getScrollTop() {
					const e = this._getScrollParent();
					return e ? (t = e) === window ? t.pageYOffset : t.scrollTop : 0;
					var t
				}
				_enablePTR() {
					if (!this._inPTR) {
						this._inPTR = !0;
						const e = this._listParent;
						e && (e.addEventListener("touchend", this._handleTouchEnd), e.addEventListener("touchmove", this._handleTouchMove), e.addEventListener("touchstart", this._handleTouchStart), e.style.overflow = "visible")
					}
				}
				_disablePTR() {
					if (this._pullInfo.moved = !1, this._inPTR) {
						this._inPTR = !1, this.setState({
							pull: 0,
							pullDistance: 0
						});
						const e = this._listParent;
						e && (e.removeEventListener("touchend", this._handleTouchEnd), e.removeEventListener("touchmove", this._handleTouchMove), e.removeEventListener("touchstart", this._handleTouchStart))
					}
				}
				_updatePullState(e, t) {
					const {
						lastPull: n
					} = this._pullInfo;
					if (t > this._pullHeight) return 0 === this.state.pull && (_.a.isFirefox() || w.a.vibrate(5), this.setState({
						pull: 1
					})), void(this._pullInfo.lastPull = t);
					e > 0 && e < n && 1 === this.state.pull && this.setState({
						pull: 0
					})
				}
				_updatePullPosition(e) {
					this._pullInfo.moved = !0, this.setState({
						pullDistance: e
					})
				}
				_release() {
					this.state.pullDistance > this._pullHeight && (this._disablePTR(), this.props.isRefreshing || this.props.onRefresh(), this.setState({
						pullDistance: this._pullHeight
					})), this.setState({
						pull: 0
					})
				}
				_handleScroll() {
					this._getScrollTop() <= 0 ? this._enablePTR() : this._disablePTR()
				}
				_resetPullInfo() {
					this._pullInfo = {
						lastPull: 0,
						moved: !1,
						startY: null
					}, this.setState({
						pullDistance: 0
					})
				}
			}
			const T = g.a.create(e => ({
				root: {
					display: "block",
					position: "relative"
				},
				ptrCell: {
					alignItems: "center",
					borderBottomWidth: "1px",
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor,
					height: "4rem",
					justifyContent: "center",
					left: "0",
					position: "absolute",
					right: "0",
					top: "-4rem"
				},
				children: {
					transform: [{
						translate3d: "0, 0, 0"
					}]
				},
				refreshArrow: {
					height: "2rem",
					color: e.colors.gray300,
					transitionProperty: "transform",
					transitionDuration: "250ms"
				},
				refreshArrowReady: {
					transform: [{
						rotate: "180deg"
					}]
				}
			}));
			t.a = function({
				canRefresh: e = !0,
				children: t,
				isRefreshing: n = !1,
				onRefresh: o
			}) {
				const i = f.a.isTouchSupported(),
					a = s.a.useLogger();
				return i && e ? r.createElement(E, {
					canRefresh: e,
					children: t,
					isRefreshing: n,
					onRefresh: () => {
						o(), a("pullToRefresh")
					}
				}) : Array.isArray(t) ? r.createElement("div", null, t) : t
			}
		},
		"2My+": function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("ZUOq"),
				s = (n("JtPf"), n("zb92")),
				l = Object(s.a)({
					loader: () => Promise.all([n.e(0), n.e(168)]).then(n.bind(null, "ehWl"))
				}),
				c = n("MWbm"),
				d = n("E4xM"),
				h = n("rHpw");
			class u extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_renderContent", () => {
						const {
							basePath: e,
							listId: t
						} = this.props;
						return r.createElement(c.a, {
							style: p.root
						}, r.createElement(l, {
							basePath: e,
							listId: t,
							withEditButton: !1,
							withRoundedCorners: !0
						}))
					})
				}
				render() {
					const {
						children: e,
						wrapperStyle: t
					} = this.props;
					return r.createElement(d.a, {
						renderContent: this._renderContent,
						wrapperStyle: t
					}, e)
				}
			}
			const p = h.a.create(e => ({
				root: {
					minHeight: 130,
					width: a.a.cardWidth.normal
				}
			}));
			t.a = u
		},
		"2qJZ": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			}));
			var o = n("8jkQ");
			const i = "twitter.com",
				r = "mobile.twitter.com";

			function a(e) {
				if (e.isTrue("responsive_web_fake_root_twitter_domain_for_testing")) return !0;
				const t = o.b.get();
				return Boolean(t && t.hostname === i)
			}
		},
		"2qZs": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12.212 22.298c-.304 0-.61-.014-.918-.04-.51-.047-1.01-.14-1.43-.223-1.125-.213-2.223-.665-3.343-1.377l-1.363.566c-.778.322-1.554.643-2.327.967-.024.015-.085.037-.167.063-.28.09-.605.012-.802-.207s-.265-.526-.148-.796c.03-.093.052-.146.077-.195l.038-.1c.485-1.176.97-2.352 1.46-3.526-.594-.93-1.03-1.925-1.304-2.97-.313-1.177-.418-2.384-.312-3.586.205-2.404 1.132-4.52 2.756-6.282C5.74 3.162 7.36 2.158 9.24 1.61c1.49-.438 2.992-.543 4.466-.31 3.7.598 6.413 2.617 8.067 6 .665 1.36.997 2.856.986 4.445-.022 2.817-1.013 5.28-2.947 7.32-1.16 1.226-2.587 2.135-4.24 2.703-.602.204-1.26.346-2.07.445-.423.057-.855.085-1.29.085zm-5.64-3.217c.187 0 .385.063.562.188 1.015.677 2.007 1.104 3.016 1.295.39.078.838.16 1.277.2.638.057 1.273.043 1.885-.036.715-.09 1.278-.208 1.778-.377 1.418-.488 2.642-1.268 3.636-2.315 1.663-1.756 2.517-3.875 2.534-6.3.01-1.354-.27-2.624-.834-3.774-1.428-2.92-3.77-4.662-6.956-5.178-1.247-.196-2.53-.106-3.808.27-1.615.468-3.003 1.328-4.13 2.555-1.394 1.514-2.19 3.33-2.364 5.396-.09 1.03 0 2.064.267 3.073.257.98.68 1.905 1.255 2.752.102.142.264.467.102.897-.346.823-.684 1.638-1.02 2.448l.812-.335 1.62-.67c.11-.058.236-.087.367-.087zm.255 1.45l-.063.026c.022-.006.043-.015.063-.026zm-.543-.026l.018.012-.018-.012zm-2.837-2.837c.004.007.01.013.013.02-.004-.007-.01-.013-.013-.02z"
			}), o.createElement("path", {
				d: "M12.19 5.47c-3.45 0-6.27 2.82-6.27 6.27 0 3.46 2.82 6.27 6.27 6.27 3.46 0 6.27-2.81 6.27-6.27 0-3.45-2.81-6.27-6.27-6.27zm3.85 6.1c-.23.99-1.62 1.04-1.91.06l-.01-.02c-.14-.5-.42-.95-.78-1.32-.86-.87-1.92-1.14-2.86-1.02-.32.05-.52-.33-.32-.58.74-.9 1.92-1.4 3.2-1.18 1.39.25 2.51 1.39 2.71 2.77.08.45.06.88-.03 1.29z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"3JQt": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M21 16.25H4.81l3.22-3.22c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4.5 4.5c-.293.292-.293.767 0 1.06l4.5 4.5c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.22-3.22H21c.414 0 .75-.337.75-.75s-.336-.75-.75-.75zM3 7.75h16.19l-3.22 3.22c-.294.293-.294.768 0 1.06.145.147.337.22.53.22s.383-.072.53-.22l4.5-4.5c.292-.292.292-.767 0-1.06l-4.5-4.5c-.294-.293-.77-.293-1.062 0s-.293.768 0 1.06l3.22 3.22H3c-.414 0-.75.336-.75.75s.336.75.75.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"3Lh0": function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("zb92");
			t.a = Object(o.a)({
				loader: () => Promise.all([n.e(0), n.e(144)]).then(n.bind(null, "iT+n"))
			})
		},
		"3dad": function(e, t, n) {
			"use strict";
			var o = n("n4Eu");
			t.a = {
				getBackgroundColor: e => {
					const t = e.ext_media_color && e.ext_media_color.palette,
						n = t && o.a.get(t);
					return n ? n.rgb : void 0
				},
				getCropCandidates: e => e.original_info && e.original_info.focus_rects,
				getOriginalImage: e => e.original_info ? {
					url: e.media_url_https,
					width: e.original_info.width,
					height: e.original_info.height
				} : void 0
			}
		},
		"3nOA": function(e, t, n) {
			"use strict";
			var o = n("t0aI");
			t.a = (e, t) => [e, t].sort(o.a).join("-")
		},
		"3rWK": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"
			}), o.createElement("path", {
				d: "M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"3wZR": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			}));
			var o = n("euJ+");
			var i = Object.freeze({
					BOOKMARK: "BOOKMARK",
					MOMENT: "MOMENT",
					DEBUG: "DEBUG",
					ERROR: "ERROR",
					FOLLOW: "FOLLOW",
					UNFOLLOW: "UNFOLLOW",
					SMILE: "SMILE",
					FROWN: "FROWN",
					HELP: "HELP",
					LINK: "LINK",
					MESSAGE: "MESSAGE",
					NO: "NO",
					OUTGOING: "OUTGOING",
					PIN: "PIN",
					RETWEET: "RETWEET",
					SPEAKER: "SPEAKER",
					SPEAKER_OFF: "SPEAKER_OFF",
					TOPIC: "TOPIC",
					TOPIC_CLOSE: "TOPIC_CLOSE",
					TOPIC_FILLED: "TOPIC_FILLED",
					TRASHCAN: "TRASHCAN",
					FEEDBACK: "FEEDBACK",
					FEEDBACK_CLOSE: "FEEDBACK_CLOSE",
					EYE_OFF: "EYE_OFF",
					MODERATION: "MODERATION",
					FLAG: "FLAG",
					PERSON: "PERSON",
					NOTIFICATIONS_FOLLOW: "NOTIFICATIONS_FOLLOW"
				}),
				r = (n("IAdD"), n("ERkP")),
				a = n("Lsrn"),
				s = n("k/Ka");
			const l = (e = {}) => Object(s.a)("svg", Object.assign({}, e, {
				style: [a.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M20.13 10.54v6.96c0 1.18-.96 2.14-2.14 2.14h-4.21l-2.39 3.19c-.14.19-.36.3-.6.3-.23 0-.46-.11-.6-.3L7.8 19.64H3.6c-1.18 0-2.14-.96-2.14-2.14V5.43c0-1.18.96-2.14 2.14-2.14h9.13c.42 0 .75.33.75.75 0 .41-.33.75-.75.75H3.6c-.36 0-.64.29-.64.64V17.5c0 .36.28.64.64.64h4.58c.15 0 .31.05.44.15.03.01.05.03.07.06.04.02.06.06.09.09l.02.03 1.99 2.66 2.01-2.69c.15-.18.37-.3.6-.3h4.59c.35 0 .64-.28.64-.64v-6.96c0-.42.34-.75.75-.75s.75.33.75.75z"
			}), r.createElement("path", {
				d: "M7.39 11.7c0 .7-.57 1.27-1.27 1.27-.71 0-1.28-.57-1.28-1.27 0-.71.57-1.28 1.28-1.28.7 0 1.27.57 1.27 1.28zm4.51 0c0 .7-.58 1.27-1.28 1.27-.71 0-1.28-.57-1.28-1.27 0-.71.57-1.28 1.28-1.28.7 0 1.28.57 1.28 1.28zm4.5 0c0 .7-.57 1.27-1.28 1.27-.7 0-1.27-.57-1.27-1.27 0-.71.57-1.28 1.27-1.28.71 0 1.28.57 1.28 1.28zm5.93-5.78c.29.29.29.77 0 1.06-.15.15-.34.22-.54.22-.19 0-.38-.07-.53-.22L19.38 5.1 17.5 6.98c-.15.15-.34.22-.53.22-.2 0-.39-.07-.53-.22-.3-.29-.3-.77 0-1.06l1.88-1.88-1.88-1.89c-.3-.29-.3-.76 0-1.06.29-.29.76-.29 1.06 0l1.88 1.88 1.88-1.88c.3-.29.77-.29 1.07 0 .29.3.29.77 0 1.06l-1.88 1.89 1.88 1.88z"
			})));
			l.metadata = {
				width: 24,
				height: 24
			};
			var c = l,
				d = n("Xzpq"),
				h = n("bAIc"),
				u = n("pNJr"),
				p = n("5cUs"),
				m = n("+1/s"),
				b = n("0rY8"),
				g = n("zIWA"),
				f = n("pu5c"),
				_ = n("w02m"),
				y = n("qz6Z");
			const w = {
					[i.FEEDBACK_CLOSE]: c,
					[i.FEEDBACK]: d.a,
					[i.FROWN]: h.a,
					[i.SMILE]: u.a,
					[i.MODERATION]: p.a,
					[i.TOPIC]: m.a,
					[i.TOPIC_CLOSE]: b.a,
					[i.FLAG]: g.a,
					[i.NO]: f.a,
					[i.SPEAKER]: _.a,
					[i.SPEAKER_OFF]: y.a
				},
				v = {
					[o.e.SeeFewer]: h.a,
					[o.e.SeeMore]: u.a,
					[o.e.DontLike]: h.a
				},
				C = e => {
					const {
						feedbackType: t,
						icon: n
					} = e;
					return n && w[n] || v[t]
				},
				E = e => e && w[e.toUpperCase()]
		},
		"3zeG": function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("zb92");
			const i = Object(o.a)({
				loader: () => Promise.all([n.e(0), n.e(148)]).then(n.bind(null, "MzK7"))
			});
			t.a = i
		},
		"4bW+": function(e, t, n) {
			"use strict";
			t.a = {
				reply: "reply",
				like: "like",
				unlike: "unlike",
				retweet: "retweet",
				unretweet: "unretweet",
				retweetConfirm: "retweetConfirm",
				unretweetConfirm: "unretweetConfirm",
				caret: "caret"
			}
		},
		"4hQ9": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = ({
				tweet: e,
				loggedInUserId: t
			}) => {
				const n = e.retweeted_status || e;
				return !(n.user.id_str !== t || !n.self_thread && n.in_reply_to_status_id_str)
			}
		},
		"4zmP": function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = n("5mJL"),
				l = n("VHqd"),
				c = n("rHpw"),
				d = n("j7Bv"),
				h = n("shC7"),
				u = n("MWbm");
			const p = Object.freeze({
				primary: {
					primaryBackgroundColor: "primary",
					backgroundColor50: "primary50",
					accessibilityRole: "text"
				},
				danger: {
					primaryBackgroundColor: "red500",
					backgroundColor50: "red50",
					accessibilityRole: "alert"
				}
			});
			class m extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "state", {
						contentMidpoint: void 0
					}), i()(this, "_handleLayout", () => {
						if (this._contentNode) {
							const {
								left: e,
								width: t
							} = this._contentNode.getBoundingClientRect(), n = e + t / 2;
							this.setState({
								contentMidpoint: n
							})
						}
					}), i()(this, "_setContentNode", e => {
						this._contentNode = e
					})
				}
				render() {
					const {
						arrowPositionStart: e,
						headline: t,
						type: n,
						withPrimaryBackground: o
					} = this.props, i = p[n], {
						accessibilityRole: a,
						backgroundColor50: d,
						primaryBackgroundColor: h
					} = i, m = o ? h : d, g = c.a.theme.colors[m];
					return r.createElement(r.Fragment, null, r.createElement(u.a, {
						accessibilityRole: a,
						onLayout: this._handleLayout,
						ref: this._setContentNode,
						style: [b.root, {
							backgroundColor: g
						}, t && b.extraVerticalPadding]
					}, r.createElement(s.a, {
						avatarCell: this._renderThumbnail(),
						avatarCellStyle: [b.thumbnail, t && b.extraRightPadding]
					}, this._renderHeadline(), this._renderSubtext())), e ? r.createElement(l.a, {
						style: [{
							color: g
						}, this._getArrowStyle()]
					}) : null)
				}
				_renderThumbnail() {
					const {
						Icon: e,
						headline: t,
						type: n
					} = this.props;
					if (e) return r.createElement(d.a, {
						Icon: e,
						color: "danger" === n ? "danger" : void 0,
						size: t ? "large" : "medium"
					})
				}
				_renderHeadline() {
					const {
						headline: e,
						shouldCenterText: t
					} = this.props;
					if (e) return r.createElement(a.c, {
						align: t ? "center" : void 0,
						color: this._getTextColor(),
						weight: "bold"
					}, e)
				}
				_renderSubtext() {
					const {
						nativeID: e,
						shouldCenterText: t,
						text: n
					} = this.props;
					return r.createElement(u.a, {
						style: [b.subtext, t && b.centerText]
					}, r.createElement(a.c, {
						color: this._getTextColor(),
						nativeID: e
					}, this._renderLabel(), n), this._renderActionLabel())
				}
				_renderLabel() {
					const {
						label: e
					} = this.props;
					if (e) return r.createElement(a.c, {
						color: this._getTextColor(),
						style: b.label,
						weight: "bold"
					}, e)
				}
				_renderActionLabel() {
					const {
						action: e
					} = this.props;
					if (e) return r.createElement(a.c, {
						children: e.label,
						color: this._getTextColor(),
						link: e.link,
						style: b.actionText,
						withInteractiveStyling: !0,
						withUnderline: !0
					})
				}
				_getTextColor() {
					const {
						withPrimaryBackground: e
					} = this.props;
					return e ? "whiteOnColor" : "black"
				}
				_getArrowStyle() {
					const {
						arrowPositionStart: e
					} = this.props, {
						contentMidpoint: t
					} = this.state, n = h.a.isRTL, o = [b.arrow];
					if (e && t) {
						const i = e - t;
						o.push({
							left: n ? void 0 : i,
							right: n ? i : void 0
						})
					}
					return o
				}
			}
			i()(m, "defaultProps", {
				shouldCenterText: !1,
				withPrimaryBackground: !1,
				type: "primary"
			});
			const b = c.a.create(e => ({
				root: {
					borderRadius: e.borderRadii.large,
					paddingHorizontal: e.spaces.small,
					paddingVertical: e.spaces.xSmall
				},
				extraVerticalPadding: {
					paddingVertical: e.spaces.small
				},
				extraRightPadding: {
					marginRight: e.spaces.small
				},
				thumbnail: {
					justifyContent: "center",
					flexBasis: "auto"
				},
				subtext: {
					alignItems: "center",
					flexDirection: "row"
				},
				centerText: {
					justifyContent: "center",
					textAlign: "center"
				},
				label: {
					marginRight: e.spaces.xxSmall
				},
				actionText: {
					marginLeft: e.spaces.xxSmall,
					whiteSpace: "nowrap",
					flexShrink: 0
				},
				arrow: {
					marginBottom: "-" + e.spaces.small,
					top: `calc(-${e.spaces.xxSmall} - ${e.spaces.nano})`
				}
			}));
			t.a = m
		},
		"5MgL": function(e, t, n) {
			"use strict";
			var o = n("IGGJ");
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i = o(n("WM5v")),
				r = (0, o(n("AYyr")).default)(/[#{invalidCharsGroup}]/, {
					invalidCharsGroup: i.default
				});
			t.default = r, e.exports = t.default
		},
		"5Y9N": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ezF+"),
				i = n("8UdT"),
				r = n("b1wW");
			var a = (e, t, n, o, a, s) => ({
					type: s === r.a.GridCarousel ? i.a.ModuleGridCarouselTimeline : i.a.ModuleCarouselTimeline,
					entryId: e,
					sortIndex: o,
					content: {
						items: n
					},
					itemMetadata: t,
					moduleClientEventView: a
				}),
				s = n("wrlS");
			var l = (e, t, n, o, r) => ({
				type: i.a.ModuleFooter,
				entryId: "footer-" + e,
				content: t,
				itemMetadata: n,
				sortIndex: o,
				moduleClientEventView: r
			});
			var c = (e, t, n, o, r) => ({
				type: i.a.ModuleHeader,
				entryId: "header-" + e,
				content: {
					header: t,
					timelineModule: n
				},
				itemMetadata: n.itemMetadata || {},
				sortIndex: o,
				moduleClientEventView: r
			});
			const d = e => t => {
				var n;
				const {
					entryId: o,
					content: {
						displayType: i,
						items: r,
						header: d,
						footer: h
					},
					itemMetadata: u,
					sortIndex: p
				} = t, m = [], b = !0 === s.b.getValueWithoutScribeImpression("responsive_web_new_client_events_enabled") ? {
					viewType: i,
					entityToken: null == (n = u.clientEventInfo) ? void 0 : n.entityToken
				} : void 0;
				return d && m.push(c(o, d, t, p, b)), m.push(a(o, u, r, p, b, e)), h && m.push(l(o, h, u, p, b)), m
			};
			var h = e => o.e({
					splice: d(e),
					divider: {
						top: !0,
						bottom: !0
					}
				}),
				u = n("ERkP"),
				p = n("KEM+"),
				m = n.n(p),
				b = (n("JtPf"), n("zb92")),
				g = n("RuTB"),
				f = Object(b.a)({
					loader: () => n.e(160).then(n.bind(null, "jRFH")),
					renderPlaceholder: (e, t) => u.createElement(g.a, {
						hasError: e,
						onRetry: t
					})
				}),
				_ = n("MDbM"),
				y = n("eXtP"),
				w = n("3XMw"),
				v = n.n(w),
				C = n("fs1G"),
				E = n("JfS+"),
				T = n("VPAj"),
				x = n("yDHe"),
				k = n("rpbw"),
				I = n("TEXq");
			const S = Object.freeze({
				ScoreCard: "scoreCard",
				Standard: "standard",
				Broadcast: "broadcast",
				CallToAction: "callToAction"
			});
			var P = n("GliE"),
				R = n("caTy"),
				O = n("NeVM"),
				A = n("zh9S"),
				M = n("Rp9C"),
				L = n("G6rE"),
				D = n("jUPy"),
				j = n("iSF/"),
				N = n("tod0");
			const F = v.a.f2382014,
				B = Object(T.a)({
					scribe: A.c
				}),
				U = e => {
					const {
						clientEventInfo: t
					} = e.itemMetadata, n = M.a.getAllSurfaceDetails(t);
					return n ? {
						items: [n]
					} : void 0
				},
				H = ({
					scribeNamespace: e,
					actions: {
						scribe: t
					},
					entry: n
				}) => {
					const o = U(n);
					t(Object.assign({}, e, {
						element: "tile",
						action: "impression"
					}), o)
				},
				z = ({
					scribeNamespace: e,
					scribe: t,
					entry: n
				}) => () => {
					const o = U(n);
					t(Object.assign({}, e, {
						element: "tile",
						action: "click"
					}), o)
				},
				W = o.f({
					bindActions: B,
					component: D.a,
					createProps: ({
						entry: e,
						scribeNamespace: t,
						actions: {
							scribe: n
						}
					}) => {
						if (!(e && e.content && e.content.content && e.content.content.scoreCard && e.content.content.scoreCard.scoreEventSummary && e.content.content.scoreCard.scoreEventSummary.scoreEvent)) return null;
						const {
							content: {
								url: o,
								content: i
							}
						} = e, {
							category: r,
							eventState: a,
							gameClock: s,
							gameClockPeriod: l,
							startTimeMillis: c,
							participants: d,
							winnerId: h
						} = i.scoreCard.scoreEventSummary.scoreEvent;
						return {
							accessibilityLabel: Object(P.a)(r, a, d, l, h),
							category: r,
							gameState: a,
							gameClock: s,
							gameClockPeriod: l,
							startTimeMillis: c,
							teams: d,
							winnerId: h,
							link: o ? Object(R.b)(o) : "",
							onClick: z({
								scribeNamespace: t,
								scribe: n,
								entry: e
							})
						}
					},
					shouldDisplayBorder: Object(T.a)(!1),
					isFocusable: Object(T.a)(!0),
					onImpression: H
				}),
				V = o.f({
					bindActions: B,
					component: j.a,
					createProps: ({
						entry: e,
						feedbackItems: t,
						actions: {
							scribe: n
						},
						scribeNamespace: o
					}) => {
						if (!(e && e.content && e.content.content && e.content.content.standard)) return null;
						const {
							content: {
								url: i,
								image: r,
								content: a
							}
						} = e, {
							standard: {
								title: s,
								badge: l
							}
						} = a, c = U(e);
						return {
							accessibilityLabel: s,
							liveLabel: l ? F : void 0,
							description: s,
							image: r,
							link: i ? Object(R.b)(i) : "",
							onClick: z({
								scribeNamespace: o,
								scribe: n,
								entry: e
							}),
							rightControl: Object(O.a)({
								feedbackItems: t,
								scribe: n,
								scribeData: c,
								scribeNamespace: o
							})
						}
					},
					shouldDisplayBorder: Object(T.a)(!1),
					onImpression: H
				}),
				K = o.f({
					bindActions: B,
					component: j.a,
					selectData: ({
						entry: e
					}) => {
						if (!(e && e.content && e.content.content && e.content.content.broadcast)) return {};
						const {
							userId: t
						} = e.content.content.broadcast;
						return {
							user: t ? e => L.e.select(e, t) : Object(T.a)(void 0)
						}
					},
					createProps: ({
						actions: {
							scribe: e
						},
						data: {
							user: t
						},
						entry: n,
						scribeNamespace: o
					}) => {
						if (!(n && n.content && n.content.content && n.content.content.broadcast && t)) return null;
						const {
							content: {
								url: i,
								image: r,
								content: a
							}
						} = n, {
							broadcast: {
								badge: s
							}
						} = a, {
							name: l,
							screen_name: c
						} = t;
						return {
							accessibilityLabel: `${l} ${c}`,
							liveLabel: s ? F : void 0,
							attribution: t,
							image: r,
							link: i ? Object(R.b)(i) : "",
							onClick: z({
								scribeNamespace: o,
								scribe: e,
								entry: n
							})
						}
					},
					shouldDisplayBorder: Object(T.a)(!1),
					onImpression: H
				}),
				G = o.f({
					bindActions: B,
					component: N.a,
					createProps: ({
						actions: {
							scribe: e
						},
						entry: t,
						scribeNamespace: n
					}) => {
						if (!(t && t.content && t.content.content && t.content.content.callToAction)) return null;
						const o = t.content.url,
							i = t.content.content.callToAction.text,
							r = o && Object(R.b)(o);
						return i && r ? {
							link: r,
							text: i,
							onClick: z({
								entry: t,
								scribe: e,
								scribeNamespace: n
							})
						} : null
					},
					shouldDisplayBorder: Object(T.a)(!1),
					onImpression: H
				});
			var q = o.b({
					selectDisplayType: e => Object(I.a)(e.content.content) || "",
					handlers: {
						[S.Standard]: V,
						[S.ScoreCard]: W,
						[S.Broadcast]: K,
						[S.CallToAction]: G
					}
				}),
				X = n("67iF");
			const Y = {
					[i.b.Tile]: q,
					[i.b.Topic]: X.a,
					[i.b.TwitterList]: Object(k.a)({})
				},
				Q = {
					[i.a.Tombstone]: o.d(o.c({
						render: ({
							content: {
								dismissedEntry: e,
								feedbackKeys: t
							}
						}, {
							module: n
						}) => u.createElement(x.a, {
							carousel: !0,
							entry: e,
							feedbackKeys: t,
							module: n
						}),
						shouldDisplayBorder: Object(T.a)(!1)
					}))
				};
			var J = Y,
				$ = n("7N4s"),
				Z = n("FIs5");
			const ee = C.a,
				te = v.a.afb4c24a;
			class ne extends u.PureComponent {
				render() {
					const {
						dismissedEntries: e,
						items: t,
						module: n,
						renderEmptyState: o,
						scribe: i,
						scribeNamespace: r,
						scrollerDisplayType: a
					} = this.props;
					return u.createElement(y.a, {
						additionalConfiguration: Q,
						dismissedEntries: e,
						entries: t,
						entryConfiguration: J
					}, (e, t) => u.createElement($.a.Consumer, null, ({
						isModal: s
					}) => u.createElement(E.a, {
						clearActiveCover: C.a,
						entries: t,
						handlerRegistry: e,
						initialFetchStatus: _.a.LOADED,
						module: n,
						onAtTop: C.a,
						onRef: C.a,
						processCallback: ee,
						refreshControl: null,
						removeAlert: C.a,
						renderEmptyState: o,
						richScribeAction: C.a,
						scribeAction: i,
						scribeNamespace: r,
						scroller: f,
						scrollerDisplayType: a,
						timelineId: "",
						title: "Carousel",
						withKeyboardShortcuts: !1
					})))
				}
			}
			m()(ne, "defaultProps", {
				renderEmptyState: () => u.createElement(Z.a, {
					message: te
				}),
				scrollerDisplayType: r.a.Vertical
			});
			var oe = ne;
			var ie = e => o.d(o.f({
					bindActions: Object(T.a)({
						scribe: A.c
					}),
					component: oe,
					selectData: ({
						entry: e,
						module: t
					}) => ({
						dismissedEntries: e => t.selectDismissedEntries(e)
					}),
					createProps: ({
						data: {
							dismissedEntries: t = {}
						},
						entry: {
							content: {
								items: n
							}
						},
						scribeNamespace: o,
						actions: {
							scribe: i
						},
						module: r
					}) => ({
						dismissedEntries: t,
						items: n || [],
						module: r,
						scribeNamespace: o,
						scribe: i,
						scrollerDisplayType: e
					}),
					onImpression: ({
						actions: {
							scribe: e
						},
						entry: t,
						scribeNamespace: n
					}) => {
						const {
							clientEventInfo: o
						} = t.itemMetadata, i = M.a.getAllSurfaceDetails(o), r = i ? {
							items: [i]
						} : void 0;
						e(Object.assign({}, n, {
							action: "impression"
						}), r)
					},
					isFocusable: Object(T.a)(!0),
					getClientEventViewOverride: C.a
				})),
				re = n("EnM6");
			const ae = v.a.i569ff3e,
				se = v.a.c837fca9;
			var le = e => {
					const {
						isSelfThread: t,
						url: n,
						onImpression: o,
						onClick: i
					} = e;
					return u.useEffect(() => {
						o({
							isSelfThreadGap: t
						})
					}, [o, t]), u.createElement(re.a, {
						label: t ? ae : se,
						link: n,
						onClick: () => {
							i({
								isSelfThreadGap: t
							})
						}
					})
				},
				ce = n("XOJV"),
				de = n("xN10"),
				he = o.d(o.f({
					bindActions: Object(T.a)({
						scribeAction: A.c
					}),
					component: le,
					defaultScribeNamespace: {
						component: "timeline_conversation"
					},
					selectData: ({
						entry: e,
						module: t
					}) => ({
						isSelfThread: t => {
							let n;
							return Object(de.a)(e.content.allTweetIds, (e, o) => {
								const i = ce.a.select(t, e);
								return !i || (0 === o ? (n = i.id_str, !0) : !!i.self_thread && i.self_thread.id_str === n)
							})
						}
					}),
					createProps: ({
						data: {
							isSelfThread: e
						},
						entry: t,
						actions: {
							scribeAction: n
						},
						scribeNamespace: o
					}) => ({
						isSelfThread: e,
						onClick: ({
							isSelfThreadGap: e
						}) => {
							n(Object.assign({}, o, {
								element: e ? "see_more" : "gap",
								action: "click"
							}))
						},
						onImpression: ({
							isSelfThreadGap: e
						}) => {
							n(Object.assign({}, o, {
								element: e ? "see_more" : "gap",
								action: "impression"
							}))
						},
						url: "/i/status/" + t.content.focalTweetId
					}),
					shouldDisplayBorder: Object(T.a)(!1)
				})),
				ue = n("LdEA"),
				pe = n.n(ue);
			n("kYxP"), n("SrIh");
			class me {
				constructor(e) {
					var t, n;
					m()(this, "depth", 1), m()(this, "isAnchorChild", !1), m()(this, "hasAnchorChild", !1), m()(this, "isIndented", !1), this.entry = e, this.parent = null, this.children = [], this.id = this.entry.entryId, this.conversationTreeMetadata = {
						ancestorConnector: null,
						depth: this.depth,
						descendantConnector: !1,
						indents: []
					}, this.isAnchorChild = !!(null == (t = e.treeDisplay) ? void 0 : t.isAnchorChild), this.isIndented = !!(null == (n = e.treeDisplay) ? void 0 : n.indentFromParent)
				}
				addChild(e) {
					let t;
					this.hasAnchorChild = this.hasAnchorChild || e.isAnchorChild, e.isIndented && this.children.forEach((e, n) => {
						void 0 !== t || e.isIndented || (t = n)
					}), void 0 === t ? this.children.push(e) : this.children.splice(t, 0, e)
				}
				removeChild(e) {
					const t = this.children.indexOf(e);
					this.children.splice(t, 1)
				}
				addParent(e) {
					this.depth = e.depth + 1, this.parent = e
				}
			}
			class be {
				constructor({
					entries: e,
					maxIndent: t,
					selectedTweetId: n,
					isRootEntryPresent: o
				}) {
					m()(this, "_roots", []), this._lookup = {}, this._maxIndent = t, this._isRootEntryPresent = o, e.forEach((e, t) => {
						this._lookup[e.entryId] = new me(e)
					}), e.forEach((t, r) => {
						const a = (e => e.treeDisplay && e.treeDisplay.parentModuleItemEntryId)(t);
						if (a) {
							const r = this._lookup[a];
							if (!r) return void this._roots.push(this._lookup[t.entryId]);
							const s = this._lookup[t.entryId];
							(!(e => e.type === i.b.TimelineCursor && ("ShowMoreThreads" === e.content.cursorType || "ShowMoreThreadsPrompt" === e.content.cursorType))(s.entry) || n && ((e, t) => e.type === i.b.Tweet && e.content.id === t)(r.entry, n) || o && a === e[0].entryId) && (s.addParent(r), r.addChild(s))
						} else this._roots.push(this._lookup[t.entryId])
					})
				}
				toArray() {
					const e = [];
					return this._roots.forEach(t => fe(t, n => {
						ge(n, this._isRootEntryPresent ? t : void 0, this._maxIndent), (n.conversationTreeMetadata.indents.length < this._maxIndent || n.conversationTreeMetadata.indents.length === this._maxIndent && n.parent && n.parent.conversationTreeMetadata.indents.length < n.conversationTreeMetadata.indents.length) && e.push(n)
					})), e
				}
			}
			const ge = (e, t, n) => {
					const {
						parent: o,
						entry: i
					} = e, {
						treeDisplay: r
					} = i;
					if (o) {
						if (r) {
							const i = o.children[o.children.length - 1] !== e ? "line" : "gap",
								a = o.id,
								{
									indentFromParent: s,
									isAnchorChild: l
								} = r;
							let c = !0;
							c = "boolean" == typeof s ? s : o === t ? o.hasAnchorChild : o.children.length > 1;
							const {
								conversationTreeMetadata: d
							} = e;
							d.indents = [...o.conversationTreeMetadata.indents], c ? (d.indents.push({
								parentId: a,
								displayType: i
							}), d.ancestorConnector = "side") : d.ancestorConnector = o === t ? void 0 === l ? o.hasAnchorChild ? "top" : null : l ? "top" : null : "top", d.showDeepThreadButton = d.indents.length === n && e.children.length > 0, e === o.children[0] && o.conversationTreeMetadata.indents.length < n && (o.conversationTreeMetadata.descendantConnector = !!d.ancestorConnector), e.conversationTreeMetadata.depth = e.depth
						}
					} else if (e !== t) {
						const {
							conversationTreeMetadata: t,
							isAnchorChild: n
						} = e;
						n && (t.ancestorConnector = "top")
					}
				},
				fe = (e, t) => {
					t(e), e.children.forEach(e => fe(e, t))
				};
			var _e = n("JXal"),
				ye = n("RgK2"),
				we = n.n(ye);
			var ve = (e, t, n, o) => ({
				type: i.a.ModuleImpressionPlaceholder,
				entryId: "impressionPlaceholder-" + e,
				content: we.a,
				itemMetadata: t,
				sortIndex: n,
				moduleClientEventView: o
			});
			var Ce = o.e({
				splice: (e, t = {}) => {
					const {
						entryId: n,
						referringContext: o,
						content: {
							items: r,
							selectedTweet: a,
							showSmallAvatars: s,
							isRootEntryPresent: l = !0
						},
						itemMetadata: {
							clientEventInfo: c
						},
						sortIndex: d
					} = e, h = r.reduceRight((e, n, o) => ((e.length > 0 || !t[n.entryId]) && e.unshift(n), e), []), u = [];
					if (0 === h.length) return u;
					const p = Object(_e.a)(),
						m = new be({
							entries: h,
							maxIndent: null != p ? p : 1 / 0,
							selectedTweetId: a ? a.selectedTweetId : void 0,
							isRootEntryPresent: l
						}).toArray();
					let b = !0;
					return m.forEach((e, t) => {
						const {
							entry: n,
							conversationTreeMetadata: r
						} = e, c = o && n.content.id && o.focalTweetId === n.content.id;
						c && (b = !1);
						const h = Object.assign({}, r, {
								selectedTweet: a,
								showSmallAvatars: s
							}),
							p = {
								isStart: l && 0 === t,
								isEnd: t === m.length - 1,
								position: c ? "focal" : b ? "ancestor" : "descendant",
								showReplyContext: t > 0 || !l
							},
							g = n.type === i.b.Tweet ? Te({
								entry: n,
								referringContext: o && o.focalTweetId === n.content.id ? o : void 0,
								conversationPosition: p,
								conversationTreeMetadata: h,
								sortIndex: d
							}) : Ee({
								entry: n,
								conversationPosition: p,
								conversationTreeMetadata: h,
								sortIndex: d
							});
						u.push(g)
					}), u.push(ve(n, {
						clientEventInfo: c
					}, d)), u
				}
			});
			const Ee = ({
					entry: e,
					conversationPosition: t,
					conversationTreeMetadata: n,
					sortIndex: o
				}) => Object.assign({}, e, {
					conversationPosition: t,
					conversationTreeMetadata: n,
					sortIndex: o
				}),
				Te = ({
					entry: e,
					referringContext: t,
					conversationPosition: n,
					conversationTreeMetadata: o,
					sortIndex: i
				}) => {
					const r = e.content,
						{
							socialContext: a
						} = r,
						s = pe()(r, ["socialContext"]);
					return Object.assign({}, e, {
						referringContext: t,
						content: Object.assign({}, s, a && n.isStart ? {
							socialContext: a
						} : null),
						conversationPosition: n,
						conversationTreeMetadata: o,
						sortIndex: i
					})
				};
			var xe = n("rC8y"),
				ke = n("ywYn");
			const Ie = Object(T.a)(!1),
				Se = {
					viewType: "module_footer"
				};
			var Pe = ({
					isInSidebar: e
				}) => o.d(o.f({
					shouldDisplayBorder: e ? Ie : void 0,
					component: xe.a,
					bindActions: Object(T.a)({
						scribe: A.c
					}),
					createProps: ({
						entry: {
							content: {
								text: t,
								url: n,
								landingUrl: o
							}
						},
						actions: {
							scribe: i
						},
						scribeNamespace: r
					}) => {
						const a = o || n && {
							urlType: ke.a.DeepLink,
							url: n
						};
						return {
							text: t,
							link: a && Object(R.b)(a),
							onPress: () => {
								i(Object.assign({}, r, {
									element: "footer",
									action: "click"
								}))
							},
							withDarkerInteractiveBackground: e
						}
					},
					isFocusable: Object(T.a)(!0),
					getClientEventViewOverride: () => Se
				})),
				Re = n("6vad");
			const Oe = {
				viewType: "module_header"
			};
			var Ae = o.d(o.f({
				component: Re.b,
				selectData: Object(T.a)(we.a),
				bindActions: ({
					module: e
				}) => ({
					scribe: A.c
				}),
				feedbackEntrySelector: e => e.content.timelineModule,
				createProps: ({
					entry: e,
					actions: {
						scribe: t
					},
					feedbackItems: n,
					module: {
						selectFeedbackActions: o
					},
					scribeNamespace: i
				}) => {
					const {
						icon: r,
						socialContext: a,
						text: s,
						renderCustomControl: l
					} = e.content.header, c = a && a.generalContext && a.generalContext.text, d = l ? l() : Object(O.a)({
						feedbackItems: n,
						scribe: t,
						scribeNamespace: i
					});
					return c || s ? {
						icon: r,
						rightControl: d,
						subtext: c,
						text: s,
						withBottomBorder: !1
					} : null
				},
				shouldDisplayBorder: e => !!e.content.header.text,
				getClientEventViewOverride: () => Oe
			}));
			const Me = Object(T.a)(!1),
				Le = Object(T.a)(null),
				De = {
					viewType: "module"
				};
			var je = o.d(o.f({
					component: Le,
					bindActions: Object(T.a)({
						scribe: A.c
					}),
					createProps: Object(T.a)(we.a),
					onImpression: ({
						actions: {
							scribe: e
						},
						entry: t,
						scribeNamespace: n,
						scribeData: o
					}) => {
						e(Object.assign({}, n, {
							action: "impression"
						}), o)
					},
					getScribeDataItem: e => M.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo),
					shouldDisplayBorder: Me,
					defaultScribeNamespace: {
						component: "module"
					},
					getClientEventViewOverride: () => De,
					isEmpty: !0
				})),
				Ne = n("zrc3");
			const Fe = o.e({
					splice: (e, t = {}) => {
						const {
							entryId: n,
							content: {
								items: o
							},
							itemMetadata: {
								moduleMetadata: i,
								clientEventInfo: r
							},
							sortIndex: a
						} = e, s = i && i.conversationMetadata && i.conversationMetadata.allTweetIds || [], l = o.reduceRight((e, n, o) => ((e.length > 0 || !t[n.entryId]) && e.unshift(n), e), []), c = [];
						if (0 === l.length) return c;
						c.push(ve(n, {
							clientEventInfo: r
						}, a));
						const d = l.some(e => e.treeDisplay);
						return c.concat(d ? Ue(l, a) : Be(l, s, e))
					}
				}),
				Be = (e, t, n) => {
					const o = [],
						r = n.sortIndex;
					return e.forEach((a, s) => {
						const l = 0 === s,
							c = l ? void 0 : e[s - 1];
						let d = !1;
						c && c.type === i.b.Tweet && a.type === i.b.Tweet && (d = He(c, a, t), d && o.push(Ke(n, t, c.content.id)));
						const h = {
								isStart: l,
								isEnd: s === e.length - 1,
								position: "descendant",
								showReplyContext: l || d
							},
							u = a.type === i.b.Tweet ? We({
								item: a,
								conversationPosition: h,
								conversationTreeMetadata: void 0,
								isFirst: l,
								sortIndex: r
							}) : ze({
								item: a,
								conversationPosition: h,
								sortIndex: r
							});
						o.push(u)
					}), o
				},
				Ue = (e, t) => {
					const n = new be({
							entries: e.map(e => (e.treeDisplay && (e.treeDisplay.isAnchorChild = !0), e)),
							maxIndent: 1 / 0,
							selectedTweetId: void 0,
							isRootEntryPresent: !0
						}),
						o = [];
					return n.toArray().forEach((n, r) => {
						const {
							entry: a,
							conversationTreeMetadata: s
						} = n, l = 0 === r, c = Object.assign({}, s, {
							showSmallAvatars: !1
						}), d = {
							isStart: !1,
							isEnd: r === e.length - 1
						}, h = a.type === i.b.Tweet ? We({
							isFirst: l,
							item: a,
							conversationPosition: d,
							conversationTreeMetadata: c,
							sortIndex: t
						}) : ze({
							item: a,
							conversationPosition: d,
							conversationTreeMetadata: c,
							sortIndex: t
						});
						o.push(h)
					}), o
				},
				He = (e, t, n) => {
					const o = Object(Ne.a)(n, t => t === e.content.id),
						i = o >= 0 && o < n.length - 1 && n[o + 1];
					return !!i && i !== t.content.id
				},
				ze = ({
					item: e,
					conversationPosition: t,
					conversationTreeMetadata: n,
					sortIndex: o
				}) => Object.assign({}, e, {
					conversationPosition: t,
					conversationTreeMetadata: n,
					sortIndex: o
				}),
				We = ({
					item: e,
					conversationPosition: t,
					conversationTreeMetadata: n,
					isFirst: o,
					sortIndex: i
				}) => {
					const r = e.content,
						{
							socialContext: a
						} = r,
						s = pe()(r, ["socialContext"]);
					return Object.assign({}, e, {
						conversationPosition: t,
						conversationTreeMetadata: n,
						content: Object.assign({}, s, a && o ? {
							socialContext: a
						} : null),
						sortIndex: i
					})
				},
				Ve = {},
				Ke = (e, t, n) => ({
					entryId: `${e.entryId}-gap-${n}`,
					type: i.a.ConversationModuleGap,
					content: {
						allTweetIds: t,
						focalTweetId: n
					},
					itemMetadata: Ve,
					sortIndex: e.sortIndex
				});
			var Ge = Fe;
			var qe = o.e({
				splice: e => {
					var t;
					const {
						entryId: n,
						content: {
							displayType: o,
							items: i,
							header: r,
							footer: a
						},
						sortIndex: d,
						itemMetadata: h
					} = e, u = [], p = !0 === s.b.getValueWithoutScribeImpression("responsive_web_new_client_events_enabled") ? {
						viewType: o,
						entityToken: null == (t = h.clientEventInfo) ? void 0 : t.entityToken
					} : void 0;
					return u.push(ve(n, e.itemMetadata, d, p)), r && u.push(c(n, r, e, d, p)), u.push(...i.map(e => Object.assign({}, e, {
						sortIndex: d,
						moduleClientEventView: p
					}))), a && u.push(l(n, a, e.itemMetadata, d, p)), u
				},
				divider: {
					top: !0,
					bottom: !0
				}
			});
			const Xe = ({
				customHandlers: e,
				customSelectDisplayType: t,
				withCarouselTimelineModule: n
			}) => o.b({
				selectDisplayType: t || (e => e.content.displayType),
				handlers: Object.assign({}, e, {
					Carousel: n ? h(r.a.Carousel) : o.a(),
					GridCarousel: h(r.a.GridCarousel),
					ConversationTree: Ce,
					Vertical: qe,
					VerticalConversation: Ge
				})
			});
			t.a = ({
				customHandlers: e,
				customSelectDisplayType: t,
				isInSidebar: n = !1,
				withCarouselTimelineModule: o
			} = {}) => ({
				[i.b.TimelineModule]: Xe({
					customHandlers: e,
					customSelectDisplayType: t,
					withCarouselTimelineModule: o
				}),
				[i.a.ModuleImpressionPlaceholder]: je,
				[i.a.ModuleHeader]: Ae,
				[i.a.ModuleFooter]: Pe({
					isInSidebar: n
				}),
				[i.a.ConversationModuleGap]: he,
				[i.a.ModuleCarouselTimeline]: ie(r.a.Carousel),
				[i.a.ModuleGridCarouselTimeline]: ie(r.a.GridCarousel)
			})
		},
		"5bSN": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("MWbm"),
				s = n("htQn"),
				l = n("Qwev"),
				c = n("t62R"),
				d = n("rHpw");
			const h = r.a.ee8c6c61,
				u = r.a.i8005e73;

			function p(e) {
				const {
					children: t = h,
					isLoading: n,
					link: i,
					onClick: r
				} = e;
				return o.createElement(s.a, {
					link: i,
					onClick: r,
					style: m.root
				}, o.createElement(a.a, {
					style: m.inner
				}, n ? o.createElement(l.a, {
					accessibilityLabel: u
				}) : o.createElement(c.c, {
					align: "center",
					children: t,
					color: "link"
				})))
			}
			const m = d.a.create(e => ({
				root: {
					justifyContent: "center",
					minHeight: e.spaces.xxLarge,
					width: "100%"
				},
				inner: {
					flexGrow: 1,
					flexShrink: 1,
					justifyContent: "center"
				}
			}))
		},
		"5cUs": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M11.384 5.976c-.2 0-.39-.08-.53-.22s-.22-.34-.22-.53c0-.2.08-.4.22-.532.27-.28.78-.28 1.06 0 .14.14.22.33.22.53 0 .19-.08.39-.22.532-.14.14-.34.22-.53.22zm3.486 16.309c0-.41.34-.75.75-.75.42 0 .75.34.75.75 0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75zm-3.045 0c0-.41.33-.75.75-.75.412 0 .752.34.752.75 0 .42-.34.75-.75.75-.422 0-.752-.33-.752-.75zm-3.054 0c0-.41.33-.75.752-.75.41 0 .75.34.75.75 0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75zm-3.052 0c0-.41.34-.75.75-.75.422 0 .752.34.752.75 0 .42-.33.75-.75.75-.412 0-.752-.33-.752-.75zm-3.054 0c0-.41.34-.75.75-.75.422 0 .752.34.752.75 0 .42-.33.75-.75.75-.412 0-.752-.33-.752-.75zm15.368-.06c-.35-.22-.47-.68-.25-1.03.22-.36.68-.472 1.03-.25.36.22.472.68.25 1.03-.14.23-.39.36-.64.36-.13 0-.27-.04-.39-.11zM.822 20.453c0-.42.34-.75.75-.75s.752.33.752.75c0 .41-.34.75-.75.75s-.752-.34-.752-.75zm17.07-1.883c0-.41.33-.75.75-.75.41 0 .752.34.752.75 0 .42-.34.75-.75.75-.42 0-.752-.33-.752-.75zM.822 17.398c0-.41.34-.75.75-.75s.752.34.752.75c0 .42-.34.75-.75.75S.82 17.82.82 17.4zm17.07-1.87c0-.422.33-.762.75-.762.41 0 .752.34.752.76 0 .41-.34.752-.75.752-.42 0-.752-.342-.752-.75zM.822 14.344c0-.41.34-.75.75-.75s.752.34.752.75c0 .42-.34.75-.75.75s-.752-.33-.752-.75zm0-3.044c0-.42.34-.75.75-.75s.752.33.752.75c0 .412-.34.752-.75.752s-.752-.34-.752-.75zm0-3.052c0-.41.34-.75.75-.75s.752.34.752.75-.34.75-.75.75S.82 8.66.82 8.25zm.81-2.414c-.22-.35-.11-.81.24-1.03.35-.22.822-.11 1.042.24.21.35.11.82-.25 1.03h.01c-.13.08-.27.12-.4.12-.25 0-.5-.13-.64-.36zm5.948-.61c0-.42.34-.75.75-.75.422 0 .752.33.752.75 0 .412-.33.752-.75.752-.412 0-.752-.342-.752-.75zm-3.054 0c0-.42.34-.75.75-.75.422 0 .752.33.752.75 0 .412-.33.752-.75.752-.41 0-.752-.342-.752-.75zm14.117 7.979c-.2 0-.39-.08-.53-.21-.14-.14-.22-.34-.22-.53 0-.2.08-.4.22-.542.28-.28.78-.28 1.06 0 .14.14.22.34.22.542 0 .19-.08.38-.22.53-.14.13-.34.21-.53.21zm-5.393-2.491H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.337.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.336.75.75 0 .416-.335.752-.75.752zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.305 6.41h-3.012c-.414 0-.75-.337-.75-.752 0-.414.335-.75.75-.75h3.012c.414 0 .75.335.75.75s-.335.75-.75.75z"
			}), o.createElement("path", {
				d: "M18.64 10.292c-2.577 0-4.674-2.096-4.674-4.675 0-2.578 2.097-4.675 4.675-4.675 2.58 0 4.676 2.097 4.676 4.675s-2.098 4.675-4.675 4.675zm0-7.848c-1.75 0-3.172 1.423-3.172 3.173S16.89 8.79 18.64 8.79s3.174-1.423 3.174-3.173-1.424-3.173-3.173-3.173z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"6/0d": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("Resy"),
				i = n("zrc3"),
				r = n("qdp+");
			class a {
				constructor({
					viewportRectangle: e,
					list: t,
					rectangles: n,
					sliceStart: o,
					sliceEnd: i
				}) {
					this._viewportRectangle = e, this._list = t, this._rectangles = n, this._sliceStart = o, this._sliceEnd = i
				}
				getForViewport() {
					return this._viewportRectangle
				}
				getForList() {
					const e = this._list;
					if (0 === e.length) return new o.a(0, 0); {
						const t = this._rectangles,
							n = e[0].id,
							i = e[e.length - 1].id,
							r = t[n].getTop(),
							a = t[i].getBottom() - r;
						return new o.a(r, a)
					}
				}
				getForAllItems() {
					return this._list.map(({
						id: e
					}) => ({
						id: e,
						rectangle: this._rectangles[e]
					}))
				}
				getList() {
					return this._list
				}
				getListLength() {
					return this._list.length
				}
				getForItem(e) {
					return this._rectangles[e]
				}
				findVisibleItems() {
					const e = this._viewportRectangle,
						t = this._rectangles,
						n = Object(i.a)(this._list, ({
							id: n
						}) => t[n].doesIntersectWith(e));
					if (n < 0) return [];
					let o = Object(i.a)(this._list, ({
						id: n
					}) => !t[n].doesIntersectWith(e), n);
					return -1 === o && (o = this._list.length), this._list.slice(n, o).filter(({
						id: e
					}) => this.isRendered(e)).map(({
						id: e
					}) => ({
						id: e,
						rectangle: t[e]
					}))
				}
				getRenderedItems() {
					const e = this._rectangles;
					return this._list.slice(this._sliceStart, this._sliceEnd).map(({
						id: t
					}) => ({
						id: t,
						rectangle: e[t]
					}))
				}
				findTopmostVisibleId() {
					return Object(r.a)(this.getRenderedItems(), e => e.rectangle.getTop() >= this._viewportRectangle.getTop() ? e.id : void 0)
				}
				isRendered(e) {
					return this._getRenderedIdSet().hasOwnProperty(e)
				}
				_getRenderedIdSet() {
					if (!this._renderedIdSet) {
						const e = {};
						for (let t = this._sliceStart; t < this._sliceEnd; t++) e[this._list[t].id] = !0;
						this._renderedIdSet = e
					}
					return this._renderedIdSet
				}
			}
		},
		"64vW": function(e, t, n) {
			"use strict";
			var o = n("ERkP");
			const i = o.createContext({
				heightsReady: !0
			});
			t.a = i
		},
		"67iF": function(e, t, n) {
			"use strict";
			var o = n("ezF+"),
				i = (n("IAdD"), n("VPAj")),
				r = n("zh9S"),
				a = n("Rp9C"),
				s = n("Zejx"),
				l = n("XcJG"),
				c = ({
					component: e,
					shouldDisplayBorder: t = !0,
					treatmentAWithNoIcon: n = !1
				}) => o.f({
					component: e,
					bindActions: () => ({
						scribe: r.c
					}),
					selectData: ({
						entry: e
					}) => ({
						topic: t => s.a.select(t, e.content.topicId)
					}),
					createProps: ({
						actions: e,
						data: t,
						entry: n,
						feedbackItems: o
					}) => {
						const {
							topic: i
						} = t;
						if (!i) return null;
						const {
							content: r
						} = n, a = r.topicDisplayType === l.a.NoIcon, s = r.topicFunctionalityType === l.b.Pivot, c = r.topicFunctionalityType === l.b.Recommendation, d = 1 === o.length ? o[0].onClick : void 0;
						return {
							notInterestedOnClick: !i.not_interested && !i.following && c && !!d ? d : void 0,
							topic: i,
							treatmentAWithNoIcon: a,
							treatmentBWithPivot: s
						}
					},
					isFocusable: Object(i.a)(!0),
					getScribeDataItem: e => a.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo),
					onImpression: ({
						actions: {
							scribe: e
						},
						scribeData: t,
						scribeNamespace: n
					}) => {
						e(Object.assign({}, n, {
							action: "impression"
						}), t)
					},
					shouldDisplayBorder: Object(i.a)(t)
				}),
				d = n("fRsM"),
				h = (n("kYxP"), n("KEM+")),
				u = n.n(h),
				p = n("ERkP"),
				m = n("v6aA"),
				b = n("rxPX"),
				g = n("0KEI");
			var f = Object(b.a)().propsFromActions(() => ({
					createLocalApiErrorHandler: Object(g.d)("TOPIC_PILL_CONTEXT"),
					follow: s.a.follow,
					unfollow: s.a.unfollow
				})).withAnalytics(),
				_ = n("3XMw"),
				y = n.n(_),
				w = n("Tp1h"),
				v = n("Jkc4"),
				C = n("aV/s"),
				E = n("rHpw");
			const T = y.a.ge8f3043,
				x = y.a.aa576cbf;
			class k extends p.Component {
				constructor(...e) {
					super(...e), u()(this, "_handleFollow", () => {
						const {
							analytics: e,
							createLocalApiErrorHandler: t,
							follow: n,
							topic: o
						} = this.props;
						n(o.id).catch(t()), e.scribeAction("follow")
					}), u()(this, "_handleUnfollow", () => {
						const {
							analytics: e,
							createLocalApiErrorHandler: t,
							unfollow: n,
							topic: o
						} = this.props;
						n(o.id).catch(t()), e.scribeAction("unfollow")
					})
				}
				render() {
					const {
						notInterestedOnClick: e,
						topic: t
					} = this.props, {
						loggedInUserId: n
					} = this.context, {
						following: o,
						id: i,
						name: r,
						not_interested: a
					} = t;
					return p.createElement(v.a, {
						customText: r,
						displayMode: w.a.topic
					}, t => p.createElement(C.a, {
						accessibilityLabel: o ? x({
							topicName: r
						}) : T({
							topicName: r
						}),
						disabled: a,
						key: i,
						mode: a ? void 0 : o ? "active" : "expand",
						onClick: t(o ? this._handleUnfollow : this._handleFollow),
						onDismissClick: n && e || void 0,
						selected: o,
						style: I.pill,
						text: r
					}))
				}
			}
			u()(k, "contextType", m.a);
			const I = E.a.create(e => ({
				pill: {
					marginLeft: e.spaces.xSmall,
					marginVertical: e.spaces.xxSmall,
					textOverflow: "ellipsis"
				}
			}));
			var S = f(k);
			const P = c({
					component: d.a
				}),
				R = c({
					component: S,
					shouldDisplayBorder: !1
				});
			t.a = o.b({
				selectDisplayType: e => e.content.topicDisplayType || l.a.Basic,
				handlers: {
					[l.a.Basic]: P,
					[l.a.Pill]: R,
					[l.a.NoIcon]: P
				}
			})
		},
		"68+r": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("k49u"),
				i = n("3XMw");
			const r = n.n(i).a.ed428a75,
				a = {
					[o.a.NotMutingTargetUser]: {
						toast: {
							text: r
						}
					},
					showToast: !0
				}
		},
		"6OUF": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			n("IAdD"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = (n("aWzz"), n("ERkP")),
				d = n("t62R"),
				h = n("/yvb"),
				u = n("Lsrn"),
				p = n("k/Ka");
			const m = (e = {}) => Object(p.a)("svg", Object.assign({}, e, {
				style: [u.a.root, e.style],
				viewBox: "0 0 15 15"
			}), c.createElement("g", null, c.createElement("path", {
				d: "M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"
			})));
			m.metadata = {
				width: 15,
				height: 15
			};
			var b = m,
				g = n("oQhu"),
				f = n("rHpw"),
				_ = n("aITJ"),
				y = n("MWbm"),
				w = n("ioan");
			class v extends c.Component {
				constructor(...e) {
					super(...e), l()(this, "_blurOnBackspaceKeyUpForKaiOS", !1), l()(this, "state", {
						isFocused: !1
					}), l()(this, "getContainerStyle", () => {
						const {
							styleType: e,
							multiline: t,
							invalid: n
						} = this.props, {
							isFocused: o
						} = this.state;
						return "pill" === e ? [!n && !o && E.transparent, !o && S.fadedGrayColor, !t && C.infinite, S.root, n && E.invalid, !n && o && E.focused, o && S.transparentColor, t && C.round] : [E.none, S.root, S.fadedGrayColor]
					}), l()(this, "_getTextInputStyle", Object(g.a)(e => [T.root, e])), l()(this, "_handleBlur", e => {
						const {
							onBlur: t
						} = this.props;
						this.setState({
							isFocused: !1
						}), t && t(e)
					}), l()(this, "_handleClear", e => {
						this.props.focusOnClear && this.focus(), this._textInput && this._textInput.clear()
					}), l()(this, "_handleChange", e => {
						const {
							onChange: t
						} = this.props, {
							isFocused: n
						} = this.state;
						n || this.setState({
							isFocused: !0
						}), t && t(e)
					}), l()(this, "_handleFocus", e => {
						const {
							onFocus: t
						} = this.props;
						this.setState({
							isFocused: !0
						}), t && t(e)
					}), l()(this, "_handleKeyPress", e => {
						const {
							multiline: t,
							onKeyPress: n,
							onSubmitEditing: o
						} = this.props;
						n && n(e), e.isDefaultPrevented() || "Enter" !== e.key || e.shiftKey || t || !o || (e.preventDefault(), o(e))
					}), l()(this, "_handleKeyDown", e => {
						const {
							onKeyDown: t
						} = this.props, n = 0 === this.getValue().length;
						_.a.isKaiOS() && "Backspace" === e.key && n ? this._blurOnBackspaceKeyUpForKaiOS = n : t && t(e)
					}), l()(this, "_handleKeyUp", e => {
						const {
							onKeyUp: t
						} = this.props;
						_.a.isKaiOS() && "Backspace" === e.key && this._blurOnBackspaceKeyUpForKaiOS && (e.preventDefault(), this.blur()), t && t(e)
					}), l()(this, "_setTextInputRef", e => {
						this._textInput = e
					}), l()(this, "_setRichTextInputRef", e => {
						this._richTextInput = e
					})
				}
				render() {
					const {
						appTextSize: e,
						emojiPickerButton: t,
						onLayout: n,
						contentAbove: o,
						contentBelow: i,
						editable: r,
						style: a,
						richTextInputContext: s,
						withClearButton: l
					} = this.props;
					return c.createElement(y.a, {
						onBlur: this._handleBlur,
						onFocus: this._handleFocus,
						onLayout: n,
						style: [this.getContainerStyle(), !r && S.disabled, a]
					}, o, c.createElement(y.a, {
						style: S.textInput
					}, this._renderIcon(), c.createElement(d.c, {
						size: e,
						style: S.appText
					}, s ? this._renderRichTextInput() : this._renderTextInput()), c.createElement(y.a, {
						style: [I.root, t && I.withEmojiPicker]
					}, this._renderCloseButton(), this._renderEmojiPicker(), l && this._renderClearButton())), i)
				}
				_renderIcon() {
					const {
						Icon: e,
						iconStyle: t
					} = this.props, {
						isFocused: n
					} = this.state, o = [x.root, n && x.focused, t];
					return e ? c.createElement(y.a, {
						style: I.leftIcon
					}, c.createElement(e, {
						style: o
					})) : null
				}
				_renderTextInput() {
					const e = this.props,
						{
							inputStyle: t
						} = e,
						n = a()(e, ["Icon", "appTextSize", "focusOnClear", "handleReturn", "iconStyle", "inputStyle", "invalid", "keyCommandHandlers", "onLayout", "onSubmitEditing", "closeButton", "contentAbove", "contentBelow", "emojiPickerButton", "richTextInputContext", "style", "styleType", "withClearButton"]);
					return c.createElement(c.Fragment, null, _.a.isEdge() ? c.createElement("style", null, "input[type=text]::-ms-clear { display: none; }") : null, c.createElement(w.a, i()({}, n, {
						onBlur: this._handleBlur,
						onChange: this._handleChange,
						onFocus: this._handleFocus,
						onKeyDown: this._handleKeyDown,
						onKeyPress: this._handleKeyPress,
						onKeyUp: this._handleKeyUp,
						placeholderTextColor: f.a.theme.colors.gray600,
						ref: this._setTextInputRef,
						style: this._getTextInputStyle(t)
					})))
				}
				_renderRichTextInput() {
					const {
						ariaAutocomplete: e,
						ariaControls: t,
						ariaActiveDescendant: n,
						autoFocus: o,
						ariaLabel: i,
						inputStyle: r,
						keyCommandHandlers: a,
						numberOfLines: s,
						maxNumberOfLines: l,
						multiline: d,
						onFilesAdded: h,
						placeholder: u,
						positionCursorAtEnd: p,
						richTextInputContext: m,
						handleReturn: b,
						testID: g
					} = this.props, {
						dismissComposerCommandName: _,
						editorState: w,
						element: v,
						sendTweetCommandName: C
					} = m || {}, E = [T.root, T.rich];
					return v && w ? c.createElement(y.a, {
						style: [T.richContainer, r]
					}, c.createElement(v, {
						ariaActiveDescendant: n,
						ariaAutocomplete: e,
						ariaControls: t,
						ariaLabel: i,
						autoFocus: o,
						dismissComposerCommandName: _,
						editorState: w,
						handleReturn: b,
						keyCommandHandlers: a,
						maxNumberOfLines: l,
						multiline: d,
						numberOfLines: s,
						onBlur: this._handleBlur,
						onChange: this._handleChange,
						onFilesAdded: h,
						onFocus: this._handleFocus,
						onKeyDown: this._handleKeyDown,
						onKeyPress: this._handleKeyPress,
						onKeyUp: this._handleKeyUp,
						placeholder: u,
						placeholderTextColor: f.a.theme.colors.gray600,
						positionCursorAtEnd: p,
						ref: this._setRichTextInputRef,
						sendTweetCommandName: C,
						style: E,
						testID: g
					})) : null
				}
				_renderClearButton() {
					const e = c.createElement(h.a, {
						accessible: !1,
						icon: c.createElement(b, {
							style: k.icon
						}),
						onPress: this._handleClear,
						size: "smallCompact",
						style: k.root,
						type: "primary"
					});
					return this.getValue() ? e : c.createElement(y.a, null)
				}
				_renderEmojiPicker() {
					const {
						emojiPickerButton: e
					} = this.props;
					return e ? c.createElement(y.a, null, e) : null
				}
				_renderCloseButton() {
					const {
						closeButton: e
					} = this.props;
					return e ? c.createElement(y.a, {
						style: I.closeButton
					}, e) : null
				}
				applyFinalValue(e) {
					this.focus(), window.requestAnimationFrame(() => {
						this.blur(), e(this.getValue())
					})
				}
				blur() {
					this._richTextInput && this._richTextInput.blur(), this._textInput && this._textInput.blur()
				}
				focus() {
					this._richTextInput && this._richTextInput.focus(), this._textInput && this._textInput.focus()
				}
				getValue() {
					const {
						richTextInputContext: e,
						value: t
					} = this.props;
					return e ? this._richTextInput && this._richTextInput.value() || t || "" : this._textInput && this._textInput.getValue() || t || ""
				}
				getTextInputHeight() {
					const {
						richTextInputContext: e
					} = this.props, t = 2 * f.a.theme.spacesPx.xSmall, n = 2 * f.a.theme.borderWidthsPx.small;
					return e ? this._richTextInput && this._richTextInput.getOffsetHeight() + t + n : this._textInput && this._textInput.getOffsetHeight() + n
				}
			}
			l()(v, "defaultProps", {
				appTextSize: "normal",
				autoComplete: "on",
				styleType: "pill",
				autoCorrect: !0,
				editable: !0,
				focusOnClear: !0,
				withClearButton: !1
			}), v.propTypes = {};
			const C = f.a.create(e => ({
					infinite: {
						borderRadius: e.borderRadii.infinite
					},
					round: {
						borderRadius: e.borderRadii.xLarge
					},
					none: {
						borderRadius: e.borderRadii.none
					}
				})),
				E = f.a.create(e => ({
					transparent: {
						borderColor: e.colors.transparent,
						borderStyle: "solid",
						borderWidth: e.borderWidths.small
					},
					focused: {
						borderColor: e.colors.primary,
						borderStyle: "solid",
						borderWidth: e.borderWidths.small
					},
					invalid: {
						borderColor: e.colors.red500,
						borderStyle: "solid",
						borderWidth: e.borderWidths.small
					},
					none: {
						borderWidth: e.borderWidths.none
					}
				})),
				T = f.a.create(e => ({
					root: {
						backgroundColor: "transparent",
						borderRadius: e.borderRadii.none,
						borderWidth: e.borderWidths.none,
						boxSizing: "border-box",
						color: "inherit",
						outlineStyle: "none",
						fontFamily: "inherit",
						fontSize: "inherit",
						padding: e.spaces.xSmall,
						textAlign: "inherit"
					},
					richContainer: {
						width: "100%",
						padding: e.spaces.xSmall
					},
					rich: {
						padding: 0
					}
				})),
				x = f.a.create(e => ({
					root: {
						color: e.colors.gray600,
						minWidth: e.spaces.large,
						paddingLeft: e.spaces.xSmall
					},
					focused: {
						color: e.colors.primary
					}
				})),
				k = f.a.create(e => ({
					root: {
						borderWidth: e.borderWidths.none,
						marginRight: e.spaces.xSmall
					},
					icon: {
						width: "10px",
						height: "10px",
						color: e.colors.cellBackground
					}
				})),
				I = f.a.create(e => ({
					root: {
						display: "flex",
						justifyContent: "center"
					},
					withEmojiPicker: {
						display: "flex",
						justifyContent: "flex-end",
						flexDirection: "column"
					},
					closeButton: {
						flexGrow: 1
					},
					leftIcon: {
						display: "flex",
						justifyContent: "center"
					}
				})),
				S = f.a.create(e => ({
					root: {
						flexDirection: "column",
						flexGrow: 1,
						flexShrink: 1,
						justifyContent: "center"
					},
					disabled: {
						cursor: "default",
						opacity: .8
					},
					fadedGrayColor: {
						backgroundColor: e.colors.gray50
					},
					transparentColor: {
						backgroundColor: "transparent"
					},
					textInput: {
						flexDirection: "row"
					},
					appText: {
						display: "flex",
						flexGrow: 1
					}
				}))
		},
		"6bZg": function(e, t, n) {
			"use strict";
			var o = n("OIC0");
			t.a = {
				[o.a.CASHTAG]: void 0,
				[o.a.EMOJI]: void 0,
				[o.a.HASHTAG]: "hashtag_click",
				[o.a.MEDIA]: void 0,
				[o.a.MENTION]: "mention_click",
				[o.a.TEXT]: void 0,
				[o.a.URL]: "open_link"
			}
		},
		"6rlp": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			}));
			n("IAdD"), n("JtPf");
			var o = n("zrOZ"),
				i = n("Ssj5"),
				r = n("oEOe"),
				a = n("cFuS");
			const s = Object(r.a)("rweb/promotedContent", "LOG"),
				l = {},
				c = Object(o.a)([a.b.IMPRESSION, a.b.DWELL]),
				d = Object(o.a)([a.d.TREND_VIEW, a.d.SPOTLIGHT_IMPRESSION]);
			const h = (e, t) => !!e.promotedContent[t],
				u = e => (t, n, {
					api: o
				}) => {
					const {
						promoted_trend_id: i,
						event: a,
						impression_id: l
					} = e, c = `trend-${i}-${a}`;
					if (d.has(a) && h(n(), c)) return Promise.resolve();
					const u = {
						promoted_trend_id: i,
						event: a,
						impression_id: l
					};
					return Object(r.b)(t, {
						params: u,
						request: o.PromotedContent.log
					})({
						actionTypes: s,
						context: "APP_PROMOTED_CONTENT_LOG",
						meta: u
					}, (e, t) => {
						if (!t && d.has(a)) return [m(c)]
					})
				},
				p = "rweb/promotedContent/" + "LOG_UNIQUE_EVENT";
			const m = e => ({
					payload: {
						eventKey: e
					},
					type: p
				}),
				b = ({
					disclosureType: e,
					itemId: t,
					itemType: n,
					params: o
				}) => (i, a, {
					api: l
				}) => {
					const {
						impression_id: d,
						event: u
					} = o, p = `${n}-${t}-${d}-${u}`;
					if (c.has(u) && h(a(), p)) return Promise.resolve();
					const b = e && "earned" === e.toLowerCase() ? "1" : null,
						g = Object.assign({}, o, {
							earned: b,
							epoch_ms: Date.now()
						});
					return Object(r.b)(i, {
						params: g,
						request: l.PromotedContent.log
					})({
						actionTypes: s,
						context: "APP_PROMOTED_CONTENT_LOG",
						meta: g
					}, (e, t) => {
						if (!t && c.has(u)) return [m(p)]
					})
				},
				g = e => (t, n, {
					api: o
				}) => Object(r.b)(t, {
					params: e,
					request: o.PromotedContent.log
				})({
					actionTypes: s,
					context: "APP_PROMOTED_CONTENT_LOG",
					meta: e
				});
			i.a.register({
				promotedContent: function(e = l, t = {}) {
					switch (t.type) {
						case p: {
							const {
								eventKey: n
							} = t.payload;
							return Object.assign({}, e, {
								[n]: !0
							})
						}
						default:
							return e
					}
				}
			})
		},
		"6s7X": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z"
			}), o.createElement("circle", {
				cx: "12",
				cy: "8.042",
				r: "1.25"
			}), o.createElement("path", {
				d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"6vad": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("ERkP"),
				i = n("t62R"),
				r = n("EHV7"),
				a = n("rHpw");
			const s = a.a.create(e => ({
				icon: {
					color: e.colors.primary,
					height: e.fontSizes.xLarge,
					paddingRight: e.spaces.xSmall,
					width: e.fontSizes.xLarge
				}
			}));
			var l = n("MWbm");
			const c = Object.freeze({
				TopicsFilled: "TOPIC_FILLED"
			});
			const d = a.a.create(e => ({
				root: {
					justifyContent: "space-between",
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				mainContent: {
					flexDirection: "row"
				},
				withBottomBorder: {
					borderBottomWidth: 1,
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor
				},
				middleContainer: {
					flexShrink: 1,
					flexGrow: 1,
					height: "100%",
					justifyContent: "center",
					alignItems: "flex-start"
				},
				withRightControl: {
					marginRight: "0.5em"
				},
				sideControl: {
					alignSelf: "flex-start",
					height: e.spaces.medium,
					justifyContent: "center",
					marginTop: e.spaces.micro
				}
			}));
			t.b = function({
				icon: e,
				rightControl: t,
				subtext: n,
				text: a,
				withBottomBorder: h = !0,
				style: u,
				testID: p
			}) {
				const m = (e => {
					switch (e) {
						case c.TopicsFilled:
							return o.createElement(r.a, {
								style: s.icon
							});
						default:
							return null
					}
				})(e);
				return o.createElement(l.a, {
					style: [d.root, h && d.withBottomBorder, u],
					testID: p
				}, o.createElement(l.a, {
					accessibilityRole: "heading",
					"aria-level": "2",
					style: d.mainContent
				}, o.createElement(l.a, {
					style: d.sideControl
				}, m), o.createElement(i.c, {
					numberOfLines: 3,
					size: "large",
					style: !!t && d.withRightControl && d.middleContainer,
					weight: "heavy",
					withHashflags: !0
				}, a), t ? o.createElement(l.a, {
					style: d.sideControl
				}, t) : null), n ? o.createElement(i.c, {
					color: "gray600",
					numberOfLines: 2,
					size: "small",
					withHashflags: !0
				}, n) : null)
			}
		},
		"6xIQ": function(e, t, n) {
			"use strict";
			var o = n("pQ3Z"),
				i = n.n(o),
				r = n("hqKg");
			const a = Object(r.createSelectorCreator)(r.defaultMemoize, i.a);
			t.a = a
		},
		"78ol": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M8.98 22.698c-.103 0-.205-.02-.302-.063-.31-.135-.49-.46-.44-.794l1.228-8.527H6.542c-.22 0-.43-.098-.573-.266-.144-.17-.204-.393-.167-.61L7.49 2.5c.062-.36.373-.625.74-.625h6.81c.23 0 .447.105.59.285.142.18.194.415.14.64l-1.446 6.075H19c.29 0 .553.166.678.428.124.262.087.57-.096.796L9.562 22.42c-.146.18-.362.276-.583.276zM7.43 11.812h2.903c.218 0 .425.095.567.26.142.164.206.382.175.598l-.966 6.7 7.313-8.995h-4.05c-.228 0-.445-.105-.588-.285-.142-.18-.194-.415-.14-.64l1.446-6.075H8.864L7.43 11.812z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"7ep7": function(e, t, n) {
			"use strict";
			var o = n("M6BN"),
				i = {
					centroidDimension: function(e, t, n, o) {
						var r = e.touchBank,
							a = 0,
							s = 0,
							l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
						if (null !== l) l.touchActive && l.currentTimeStamp > t && (a += o && n ? l.currentPageX : o && !n ? l.currentPageY : !o && n ? l.previousPageX : l.previousPageY, s = 1);
						else
							for (var c = 0; c < r.length; c++) {
								var d = r[c];
								if (null != d && d.touchActive && d.currentTimeStamp >= t) {
									a += o && n ? d.currentPageX : o && !n ? d.currentPageY : !o && n ? d.previousPageX : d.previousPageY, s++
								}
							}
						return s > 0 ? a / s : i.noCentroid
					},
					currentCentroidXOfTouchesChangedAfter: function(e, t) {
						return i.centroidDimension(e, t, !0, !0)
					},
					currentCentroidYOfTouchesChangedAfter: function(e, t) {
						return i.centroidDimension(e, t, !1, !0)
					},
					previousCentroidXOfTouchesChangedAfter: function(e, t) {
						return i.centroidDimension(e, t, !0, !1)
					},
					previousCentroidYOfTouchesChangedAfter: function(e, t) {
						return i.centroidDimension(e, t, !1, !1)
					},
					currentCentroidX: function(e) {
						return i.centroidDimension(e, 0, !0, !0)
					},
					currentCentroidY: function(e) {
						return i.centroidDimension(e, 0, !1, !0)
					},
					noCentroid: -1
				},
				r = i,
				a = r.currentCentroidXOfTouchesChangedAfter,
				s = r.currentCentroidYOfTouchesChangedAfter,
				l = r.previousCentroidXOfTouchesChangedAfter,
				c = r.previousCentroidYOfTouchesChangedAfter,
				d = r.currentCentroidX,
				h = r.currentCentroidY,
				u = {
					_initializeGestureState: function(e) {
						e.moveX = 0, e.moveY = 0, e.x0 = 0, e.y0 = 0, e.dx = 0, e.dy = 0, e.vx = 0, e.vy = 0, e.numberActiveTouches = 0, e._accountsForMovesUpTo = 0
					},
					_updateGestureStateOnMove: function(e, t) {
						e.numberActiveTouches = t.numberActiveTouches, e.moveX = a(t, e._accountsForMovesUpTo), e.moveY = s(t, e._accountsForMovesUpTo);
						var n = e._accountsForMovesUpTo,
							o = l(t, n),
							i = a(t, n),
							r = c(t, n),
							d = s(t, n),
							h = e.dx + (i - o),
							u = e.dy + (d - r),
							p = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
						e.vx = (h - e.dx) / p, e.vy = (u - e.dy) / p, e.dx = h, e.dy = u, e._accountsForMovesUpTo = t.mostRecentTimeStamp
					},
					create: function(e) {
						var t = {
								handle: null,
								shouldCancelClick: !1,
								timeout: null
							},
							n = {
								stateID: Math.random(),
								moveX: 0,
								moveY: 0,
								x0: 0,
								y0: 0,
								dx: 0,
								dy: 0,
								vx: 0,
								vy: 0,
								numberActiveTouches: 0,
								_accountsForMovesUpTo: 0
							};
						return {
							panHandlers: {
								onStartShouldSetResponder: function(t) {
									return null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n)
								},
								onMoveShouldSetResponder: function(t) {
									return null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n)
								},
								onStartShouldSetResponderCapture: function(t) {
									return 1 === t.nativeEvent.touches.length && u._initializeGestureState(n), n.numberActiveTouches = t.touchHistory.numberActiveTouches, null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)
								},
								onMoveShouldSetResponderCapture: function(t) {
									var o = t.touchHistory;
									return u._updateGestureStateOnMove(n, o), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n)
								},
								onResponderGrant: function(i) {
									return t.handle || (t.handle = o.a.createInteractionHandle()), t.timeout && function(e) {
										clearTimeout(e.timeout)
									}(t), t.shouldCancelClick = !0, n.x0 = d(i.touchHistory), n.y0 = h(i.touchHistory), n.dx = 0, n.dy = 0, e.onPanResponderGrant && e.onPanResponderGrant(i, n), null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(i, n)
								},
								onResponderReject: function(o) {
									p(t, e.onPanResponderReject, o, n)
								},
								onResponderRelease: function(o) {
									p(t, e.onPanResponderRelease, o, n), m(t), u._initializeGestureState(n)
								},
								onResponderStart: function(t) {
									var o = t.touchHistory;
									n.numberActiveTouches = o.numberActiveTouches, e.onPanResponderStart && e.onPanResponderStart(t, n)
								},
								onResponderMove: function(t) {
									var o = t.touchHistory;
									u._updateGestureStateOnMove(n, o), e.onPanResponderMove && e.onPanResponderMove(t, n)
								},
								onResponderEnd: function(o) {
									var i = o.touchHistory;
									n.numberActiveTouches = i.numberActiveTouches, p(t, e.onPanResponderEnd, o, n)
								},
								onResponderTerminate: function(o) {
									p(t, e.onPanResponderTerminate, o, n), m(t), u._initializeGestureState(n)
								},
								onResponderTerminationRequest: function(t) {
									return null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n)
								},
								onClickCapture: function(e) {
									!0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault())
								}
							},
							getInteractionHandle: function() {
								return t.handle
							}
						}
					}
				};

			function p(e, t, n, i) {
				e.handle && (o.a.clearInteractionHandle(e.handle), e.handle = null), t && t(n, i)
			}

			function m(e) {
				e.timeout = setTimeout((function() {
					e.shouldCancelClick = !1
				}), 250)
			}
			var b = u;
			t.a = b
		},
		"7oQY": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM18.575 22H4.25C3.01 22 2 20.99 2 19.75V5.5c0-1.24 1.01-2.25 2.25-2.25h8.947c.414 0 .75.336.75.75s-.336.75-.75.75H4.25c-.413 0-.75.336-.75.75v14.25c0 .414.337.75.75.75h14.325c.413 0 .75-.336.75-.75v-8.872c0-.414.336-.75.75-.75s.75.336.75.75v8.872c0 1.24-1.01 2.25-2.25 2.25z"
			}), o.createElement("path", {
				d: "M16.078 9.583H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.336.75.75s-.336.75-.75.75zm0 3.867H6.673c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.335.75.75s-.336.75-.75.75zm-4.703 3.866H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.702c.414 0 .75.336.75.75s-.336.75-.75.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"7wqI": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			}));
			var o = n("ipry");
			t.a = ({
				displaySensitiveMedia: e,
				isNotFound: t,
				isSuspended: n,
				isWithheld: o,
				loggedInUserId: r,
				user: a,
				userProfileInterstitialType: s
			}) => {
				const l = !!r && r === a.id_str,
					c = a.blocked_by,
					d = a.blocking,
					h = i({
						displaySensitiveMedia: e,
						isOwnProfile: l,
						user: a,
						userProfileInterstitialType: s
					}),
					u = (l || !o) && !n;
				return {
					avatar: l || !h && !t && !n && !o,
					badges: l || !o,
					description: l || !d && !c && !h && !n && !o,
					followButton: !(l || c || h || t || n || o),
					followersYouKnow: !l && !c && !d && !h && !t && !n && !o && (a.following || !a.protected),
					followIndicator: !o,
					fullName: u,
					label: u,
					stats: l || !c && !h && !n && !o
				}
			};
			const i = ({
					displaySensitiveMedia: e,
					isOwnProfile: t,
					user: n,
					userProfileInterstitialType: i
				}) => (i === o.a.SensitiveMedia || i === o.a.OffensiveProfileContent) && !(t || n.following || e),
				r = ({
					isOwnProfile: e,
					user: t
				}) => {
					const n = t.blocked_by,
						o = t.protected && !t.following;
					return e || !o && !n
				}
		},
		"88ay": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "a", (function() {
				return D
			}));
			n("jQ/y"), n("IAdD"), n("kYxP");
			var o = n("LdEA"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("97Jx"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("v6aA"),
				h = n("rxPX"),
				u = n("0KEI"),
				p = n("6rlp"),
				m = n("zh9S"),
				b = n("G6rE");
			const g = (e, t) => b.e.select(e, t.userId),
				f = (e, t) => t.promotedContent;
			var _ = Object(h.a)().propsFromState(() => ({
					promotedContent: f,
					user: g
				})).adjustStateProps(({
					promotedContent: e,
					user: t
				}) => ({
					promotedContent: e || (t ? t.promoted_content : void 0),
					user: t
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(u.d)("USER_CELL_CONTAINER"),
					log: p.a,
					scribeAction: m.c
				})),
				y = n("7JQg"),
				w = n("I57f"),
				v = n("uIZp"),
				C = n("mN6z"),
				E = n("caTy"),
				T = (n("AxOO"), n("Re5t")),
				x = n("TnY3"),
				k = n("hxu0"),
				I = (n("aWzz"), n("cFuS")),
				S = n("IMA+"),
				P = n("rHpw");
			const R = e => {
				const {
					user: t
				} = e;
				return t && t.profile_image_url_https ? c.createElement(M, l()({}, e, {
					avatarUri: t.profile_image_url_https,
					description: t.description,
					entities: t.entities,
					followRequestReceived: t.follow_request_received,
					highlightedLabel: t.highlightedLabel,
					isBlockedBy: t.blocked_by,
					isBlocking: t.blocking,
					isDeviceFollowing: t.notifications,
					isFollowedBy: t.followed_by,
					isFollowing: t.following,
					isProtected: t.protected,
					isVerified: t.verified,
					name: t.name,
					screenName: t.screen_name,
					translatorType: t.translator_type,
					user: t,
					withheldDescription: t.withheld_description,
					withheldEntities: t.withheld_entities
				})) : null
			};
			R.defaultProps = {
				cellClickable: !0,
				decoration: null,
				displayMode: T.a.UserCompact,
				followRequestReceived: !1,
				hideBlocked: !1,
				promotedItemType: I.c.USER,
				shouldScribe: !0,
				withBottomBorder: !1,
				withFollowsYou: !1
			};
			const O = ({
					isDeviceFollowing: e,
					userId: t
				}) => c.createElement(w.a, {
					isFollowing: e,
					style: L.followButton,
					userId: t
				}),
				A = ({
					loggedInUserId: e,
					promotedContent: t,
					userId: n
				}) => e !== n ? c.createElement(v.a, {
					promotedContent: t,
					size: "normalCompact",
					style: L.followButton,
					userId: n
				}) : null;
			class M extends c.Component {
				constructor(...e) {
					super(...e), a()(this, "_handleAvatarClick", () => {
						const {
							scribeAction: e,
							scribeNamespace: t,
							shouldScribe: n
						} = this.props;
						n && e(Object.assign({}, t, {
							element: "avatar",
							action: "profile_click"
						})), this._handleAsyncPromotedEvent(I.b.PROFILE_IMAGE_CLICK)
					}), a()(this, "_handleCellClick", () => {
						const {
							history: e,
							onClick: t,
							screenName: n,
							user: o
						} = this.props, i = this._getPromotedTweetState();
						this._handleScreenNameClick(), t ? t({
							user: o,
							state: i
						}) : e.push({
							pathname: "/" + n,
							state: i || void 0
						})
					}), a()(this, "_handleScreenNameClick", () => {
						const {
							scribeAction: e,
							scribeNamespace: t,
							shouldScribe: n
						} = this.props;
						n && e(Object.assign({}, t, {
							action: "profile_click"
						})), this._handleAsyncPromotedEvent(I.b.SCREEN_NAME_CLICK)
					})
				}
				componentDidMount() {
					this._shouldRender() && this._handleImpression()
				}
				shouldComponentUpdate(e) {
					return !Object(C.a)(this.props, e)
				}
				render() {
					const e = this.props,
						{
							cellClickable: t,
							isInSidebar: n,
							socialContext: o
						} = e,
						r = i()(e, ["bottomControl", "createLocalApiErrorHandler", "decoration", "followRequestReceived", "history", "location", "hideBlocked", "isBlocking", "isBlockedBy", "isDeviceFollowing", "isFollowing", "log", "onClick", "promotedItemId", "scribeAction", "scribeData", "scribeNamespace", "shouldScribe", "user", "cellClickable", "isInSidebar", "socialContext"]);
					return this._shouldRender() ? c.createElement(S.a, l()({}, r, {
						bottomControl: this._renderBottomControl(),
						decoration: this._renderDecoration(),
						onAvatarClick: this._handleAvatarClick,
						onCellClick: t ? this._handleCellClick : void 0,
						onScreenNameClick: this._handleScreenNameClick,
						socialContext: o ? {
							contextType: o.contextType,
							text: o.text,
							link: o.landingUrl ? Object(E.b)(o.landingUrl) : void 0
						} : void 0,
						withDarkerInteractiveBackground: n
					})) : null
				}
				_renderBottomControl() {
					return this._renderControl(this.props.bottomControl || null)
				}
				_renderDecoration() {
					return this._renderControl(this.props.decoration)
				}
				_renderControl(e) {
					const {
						loggedInUserId: t
					} = this.context, {
						displayMode: n,
						followRequestReceived: o,
						isBlocking: i,
						isDeviceFollowing: r,
						isFollowing: a,
						promotedContent: s,
						screenName: l,
						userId: c
					} = this.props;
					return "function" == typeof e ? e({
						displayMode: n,
						followRequestReceived: o,
						isBlocking: i,
						isDeviceFollowing: !!r,
						isFollowing: !!a,
						loggedInUserId: t,
						promotedContent: s,
						screenName: l,
						userId: c
					}) : e
				}
				_shouldRender() {
					const {
						hideBlocked: e,
						isBlockedBy: t,
						isBlocking: n,
						screenName: o,
						userId: i
					} = this.props;
					return i && o && !(e && (t || n))
				}
				_getPromotedTweetState() {
					const {
						promotedContent: e,
						promotedItemType: t
					} = this.props;
					return e && t === I.c.TWEET ? {
						promotedTweetState: e
					} : null
				}
				_handleAsyncPromotedEvent(e) {
					const {
						createLocalApiErrorHandler: t,
						log: n,
						promotedContent: o,
						promotedItemId: i,
						promotedItemType: r,
						userId: a
					} = this.props;
					if (o) {
						const {
							disclosure_type: s,
							impression_id: l
						} = o;
						n({
							disclosureType: s,
							itemId: i || a,
							itemType: r,
							params: {
								event: e,
								impression_id: l
							}
						}).catch(t())
					}
				}
				_handleImpression() {
					const {
						createLocalApiErrorHandler: e,
						log: t,
						promotedContent: n,
						promotedItemType: o,
						userId: i
					} = this.props;
					if (n && o === I.c.USER) {
						const {
							disclosure_type: o,
							impression_id: r
						} = n;
						t({
							disclosureType: o,
							itemId: i,
							itemType: I.c.USER,
							params: {
								event: I.b.IMPRESSION,
								impression_id: r
							}
						}).catch(e())
					}
				}
			}
			a()(M, "contextType", d.a), a()(M, "defaultProps", R.defaultProps);
			const L = P.a.create(e => ({
					followButton: {
						marginLeft: e.spaces.xSmall
					}
				})),
				D = Object(x.a)(Object(k.a)(_(R)));
			t.b = Object(y.c)({
				element: "user"
			})(D)
		},
		"8Clt": function(e, t) {},
		"8Lfv": function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("MDbM");
			t.a = (e, t) => (n, i, r) => {
				if (e.selectInitialFetchStatus(i()) === o.a.LOADING) return Promise.resolve();
				const a = e.selectTimeline(i());
				return n(e.deleteTimeline()), n(e.fetchInitial(t)).catch(t => {
					if (!a || e.selectUnavailableReason(i())) return Promise.reject(t);
					n(e.restoreTimeline(a))
				})
			}
		},
		"9RkS": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("LdEA"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("0GBF");
			t.a = e => {
				let {
					accessibilityLabel: t,
					accessibilityLabelValueText: n,
					thumbLabel: o,
					value: s,
					onChange: l
				} = e, c = i()(e, ["accessibilityLabel", "accessibilityLabelValueText", "thumbLabel", "value", "onChange"]);
				const d = Object.assign({}, c, {
					endThumbAccessibilityLabel: t,
					endThumbAccessibilityLabelValueText: n,
					endThumbLabel: o,
					value: [c.min, s],
					onChange: e => l(e[1]),
					isSingleSlider: !0
				});
				return r.createElement(a.a, d)
			}
		},
		"9YUM": function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("dPJJ"),
				c = n("zrc3"),
				d = (n("8Clt"), n("A9rn")),
				h = n("pQ3Z"),
				u = n.n(h),
				p = n("VY6S"),
				m = n("Resy");
			class b {
				constructor(e) {
					a()(this, "_trackScroll", () => {
						this._programmaticScroll ? this._programmaticScroll = !1 : this._lastScrollTs = Date.now()
					}), a()(this, "_normalize", () => {
						this._wrapperNode && 0 !== this._transform && this._viewport && (this._wrapperNode.style.transform = "", this._viewport.scrollBy(-1 * this._transform), this._transform = 0)
					}), a()(this, "_normalizeIfNeeded", () => {
						if (!this._wrapperNode || !this._viewport || 0 === this._transform) return;
						const e = this._viewport,
							{
								top: t,
								height: n
							} = this._wrapperNode.getBoundingClientRect(),
							o = new m.a(t, n),
							i = o.translateBy(-1 * this._transform),
							r = e.getRect();
						r.contains(i.getTop()) || r.contains(i.getBottom()) || r.contains(o.getTop()) || r.contains(o.getBottom()) ? this._normalize() : this._debouncedNormalize()
					}), this._transform = 0, this._viewport = e, this._lastScrollTs = 0, this._debouncedNormalize = Object(p.a)(this._normalize, 500), this._removeScrollListener = e.addScrollListener(this._normalizeIfNeeded), this._removeScrollTracker = e.addScrollListener(this._trackScroll)
				}
				setWrapperNode(e) {
					this._wrapperNode = e
				}
				teardown() {
					this._removeScrollListener(), this._removeScrollTracker(), delete this._viewport
				}
				offsetBy(e) {
					if (Math.abs(e) <= .5) return;
					const t = this._wrapperNode,
						n = Date.now() - this._lastScrollTs;
					!t || n >= 500 ? (this._programmaticScroll = !0, this._viewport && this._viewport.scrollBy(e)) : (this._transform = this._transform - e, t.style.transform = `translateY(${this._transform}px)`, this._normalizeIfNeeded())
				}
			}

			// =============>>>> HERE1
			class g extends s.Component {
				constructor(e, t) {
					super(e, t), a()(this, "_updatesSuspended", !1), a()(this, "_handleHeightsUpdate", (e, t) => {
						const {
							anchoring: n
						} = this.props;
						this._scrollBy(n.offsetCorrection(e, t))
					}), a()(this, "_receiveWrapperNode", e => this._offsetHandler.setWrapperNode(e)), a()(this, "_handleRefUpdate", e => {
						this._ref = e
					}), a()(this, "_handleEnterFullscreen", () => {
						this._updatesSuspended = !0, this._ref && this._ref.freezeUpdates()
					}), a()(this, "_handleExitFullscreen", () => {
						this._updatesSuspended = !1, this.forceUpdate(), this._ref && this._ref.resumeUpdates()
					});
					const n = this._findInitialAnchor(e.initialAnchors || []);
					this._initialItemIndex = n ? n.anchorIndex : 0, this._initialAnchor = n && n.anchor, this._offsetHandler = new b(e.viewport)
				}
				UNSAFE_componentWillMount() {
					const {
						viewport: e,
						anchoring: t
					} = this.props;
					this.setState({
						scrollHeadroom: t.initialScrollHeadroom(e)
					})
				}
				shouldComponentUpdate(e, t) {
					const n = !u()(this.props, e) || !u()(this.state, t);
					return !this._updatesSuspended && n
				}
				componentDidMount() {
					this._initialAnchor && this._scrollToAnchor(this._initialAnchor), this._requestAnimationFrame(() => {
						const {
							retryPositionRestoration: e,
							list: t,
							onPositionRestored: n
						} = this.props;
						if (e && this._initialAnchor) {
							!!t.find(({
								id: e
							}) => this._initialAnchor && e === this._initialAnchor.id) && this._initialAnchor && this._scrollToAnchor(this._initialAnchor)
						}
						n(), this._requestAnimationFrame(() => {
							this._relaxScrollHeadroom()
						})
					}), this._unlistenFullscreenEnter = l.a(this._handleEnterFullscreen), this._unlistenFullscreenExit = l.b(this._handleExitFullscreen)
				}
				getAnchors(e) {
					const t = e || this._ref && this._ref.getPositioning();
					return t ? this.props.anchoring.anchorCandidates(t) : []
				}
				getPositioning() {
					return this._ref && this._ref.getPositioning()
				}
				componentWillUnmount() {
					this._unmounted = !0, this._offsetHandler.teardown(), this._unlistenFullscreenEnter && this._unlistenFullscreenEnter(), this._unlistenFullscreenExit && this._unlistenFullscreenExit()
				}
				render() {
					const {
						list: e,
						renderItem: t,
						renderList: n
					} = this.props, {
						scrollHeadroom: o
					} = this.state;
					return s.createElement("div", {
						ref: this._receiveWrapperNode,
						style: {
							paddingBottom: o
						}
					}, n({
						initialItemIndex: this._initialItemIndex,
						list: e,
						renderItem: t,
						ref: this._handleRefUpdate,
						onHeightsUpdate: this._handleHeightsUpdate
					}))
				}
				_scrollToAnchor(e) {
					const {
						anchoring: t
					} = this.props, n = this._ref && this._ref.getPositioning();
					n && this._scrollBy(t.offsetToAnchor(n, e))
				}
				_findInitialAnchor(e) {
					const {
						list: t
					} = this.props;
					return e.map(e => {
						const n = Object(c.a)(t, ({
							id: t
						}) => t === e.id);
						return n >= 0 ? {
							anchorIndex: n,
							anchor: e
						} : null
					}).find(e => e)
				}
				_relaxScrollHeadroom() {
					const e = this._ref && this._ref.getPositioning();
					if (e) {
						const {
							anchoring: t
						} = this.props, n = t.scrollHeadroom(e), {
							scrollHeadroom: o
						} = this.state;
						n < o && this.setState({
							scrollHeadroom: n
						})
					}
				}
				_scrollBy(e) {
					this._offsetHandler.offsetBy(e)
				}
				_requestAnimationFrame(e) {
					return window.requestAnimationFrame(() => {
						this._unmounted || e()
					})
				}
			}
			a()(g, "defaultProps", {
				anchoring: d.a
			});
			var f = n("AOWc"),
				_ = n("180P"),
				y = n("I7xG"),
				w = n("Ey+e"),
				v = n("fs1G"),
				C = (n("IAdD"), n("6/0d")),
				E = n("64vW"),
				T = n("QFTV");
			const x = (e, t, n) => {
				if (t < 0 || t >= e.length) return -1;
				if (n(e[t])) return t;
				for (let o = 1;; o++) {
					const i = t - o,
						r = t + o,
						a = i < 0,
						s = r >= e.length;
					if (a && s) break;
					if (!s && n(e[r])) return r;
					if (!a && n(e[i])) return i
				}
				return -1
			};
			var k = ({
					list: e,
					nextList: t,
					sliceStart: n,
					sliceEnd: o
				}) => {
					const i = t.reduce((e, {
							id: t
						}) => (e[t] = !0, e), {}),
						r = x(e, n, ({
							id: e
						}) => !Object(T.a)(e) && i.hasOwnProperty(e) && i[e]);
					if (-1 === r) return null;
					let a = Object(c.a)(t, ({
						id: t
					}) => e[r].id === t);
					Object(f.a)(a >= 0, "newSliceStart should be defined if we found a common item");
					return r > 0 && Object(T.a)(e[r - 1].id) && a > 0 && Object(T.a)(t[a - 1].id) && (a -= 1), {
						sliceStart: a,
						sliceEnd: Math.min(t.length, a + o - n)
					}
				},
				I = n("jHwr"),
				S = n("+d3d"),
				P = n("jat/");
			const R = {
				heightsReady: !0
			};
			class O extends s.PureComponent {
				constructor(e, t) {
					super(e, t), a()(this, "_updatesSuspended", !1), a()(this, "freezeUpdates", () => {
						this._updatesSuspended = !0
					}), a()(this, "resumeUpdates", () => {
						this._updatesSuspended = !1, this._scheduleUpdate()
					}), a()(this, "_handleHeightsChange", e => {
						this._postRenderProcessing({
							hasListChanged: !1,
							newHeights: e
						})
					}), a()(this, "_handleRefUpdate", e => {
						this._ref = e
					}), a()(this, "_setNecessarySlice", (e, t) => {
						const {
							sliceStart: n,
							sliceEnd: o
						} = this.state, i = {
							start: n,
							end: o
						}, r = {
							start: e,
							end: t
						}, {
							start: a,
							end: s
						} = ((e, t) => {
							if (t.start >= e.start && t.end <= e.end) return e;
							if (t.start >= e.end || t.end <= e.start) return t; {
								const n = Math.max(e.start - t.start, t.end - e.end);
								return {
									start: Math.min(e.start + n, t.start),
									end: Math.max(e.end - n, t.end)
								}
							}
						})(i, r);
						this._setSlice(a, s)
					}), a()(this, "_setSlice", (e, t) => {
						if (this._updatesSuspended) return;
						const {
							sliceStart: n,
							sliceEnd: o
						} = this.state;
						e === n && t === o || this.setState({
							sliceStart: e,
							sliceEnd: t
						})
					});
					const {
						list: n,
						initialItemIndex: o
					} = this.props;
					this._assumedItemHeight = e.assumedItemHeight, this._getSlice = Object(y.a)(this, e => e.list, (e, t) => t.sliceStart, (e, t) => t.sliceEnd, (e, t, n) => e.slice(t, n)), this._getRectangles = Object(y.a)(this, e => e.list, (e, t, n) => n._heights, (e, t, n) => n._assumedItemHeight, A), this._heights = {};
					const {
						cacheKey: i,
						heightCache: r
					} = this.props;
					i && r.hasOwnProperty(i) && (this._heights = r[i]), this.state = this._getDefaultSlice(n, o);
					const s = Object(I.a)(() => this._criticalUpdate(), window.requestAnimationFrame);
					this._scheduleUpdate = window.requestIdleCallback ? Object(I.a)(() => this._criticalUpdate(), window.requestIdleCallback) : s, this._schedulePositioningNotification = Object(I.a)(() => this._notifyPositioning(), window.requestIdleCallback ? e => window.requestIdleCallback(e, {
						timeout: 500
					}) : window.requestAnimationFrame), this._handleScroll = Object(S.a)(s, 100, {
						trailing: !0
					}), this._scheduleDebouncedUpdate = Object(p.a)(() => {
						window.requestAnimationFrame(() => {
							this._debouncedUpdate()
						})
					}, 500), this._removeDebouncedListener = e.viewport.addScrollListener(this._scheduleDebouncedUpdate)
				}
				componentDidMount() {
					this._unlistenScroll = this.props.viewport.addScrollListener(this._handleScroll), this._postRenderProcessing({
						hasListChanged: !0
					})
				}
				componentWillUnmount() {
					this._unmounted = !0, this._unlistenScroll && this._unlistenScroll(), this._removeDebouncedListener();
					const {
						cacheKey: e,
						heightCache: t
					} = this.props;
					e && (t[e] = this._heights)
				}
				componentDidUpdate(e) {
					this._postRenderProcessing({
						hasListChanged: e.list !== this.props.list
					})
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						list: t
					} = this.props, {
						sliceStart: n,
						sliceEnd: o
					} = this.state, i = e.list;
					if (i !== t) {
						const e = k({
							list: t,
							nextList: i,
							sliceStart: n,
							sliceEnd: o
						}) || this._getDefaultSlice(i);
						this._setSlice(e.sliceStart, e.sliceEnd)
					}
				}
				UNSAFE_componentWillUpdate() {
					this._prevPositioning = this.getPositioning()
				}
				getPositioning() {
					const {
						sliceStart: e,
						sliceEnd: t
					} = this.state;
					return new C.a({
						viewportRectangle: this._getRelativeViewportRect(),
						list: this.props.list,
						rectangles: this._getRectangles(),
						sliceStart: e,
						sliceEnd: t
					})
				}
				render() {
					const {
						renderList: e,
						renderItem: t
					} = this.props, {
						blankSpaceAbove: n,
						blankSpaceBelow: o
					} = this._computeBlankSpace();
					return s.createElement(E.a.Provider, {
						value: R
					}, e({
						ref: this._handleRefUpdate,
						list: this._getSlice(),
						blankSpaceAbove: n,
						blankSpaceBelow: o,
						renderItem: t,
						onHeightsChange: this._handleHeightsChange
					}))
				}
				_computeBlankSpace() {
					const {
						list: e
					} = this.props, {
						sliceStart: t,
						sliceEnd: n
					} = this.state, o = this._getRectangles(), i = 0 === e.length ? 0 : o[e[t].id].getTop() - o[e[0].id].getTop(), r = Object(P.a)(e);
					return {
						blankSpaceAbove: i,
						blankSpaceBelow: n >= e.length || !r ? 0 : o[r.id].getBottom() - o[e[n].id].getTop()
					}
				}
				_postRenderProcessing({
					hasListChanged: e,
					newHeights: t
				}) {
					const {
						wasHeightChange: n
					} = this._recordHeights(t);
					if (n || e) {
						const e = this._prevPositioning;
						if (e) {
							const {
								onHeightsUpdate: t
							} = this.props;
							t(e, this.getPositioning())
						}
					}
					const {
						minimumOffscreenToViewportRatio: o,
						preferredOffscreenToViewportRatio: i
					} = this.props;
					e || !this._sliceIncludesScaledViewport(o) ? this._scheduleUpdate() : this._sliceIncludesScaledViewport(i) || this._scheduleDebouncedUpdate(), this._schedulePositioningNotification()
				}
				_sliceIncludesScaledViewport(e) {
					const {
						sliceStart: t,
						sliceEnd: n
					} = this._computeSlice({
						offscreenToViewportRatio: e
					});
					return t >= this.state.sliceStart && n <= this.state.sliceEnd
				}
				_recordHeights(e) {
					if (!this._ref) return {
						heightDelta: 0,
						wasHeightChange: !1
					};
					const t = e || this._ref.getItemHeights();
					let n = !1;
					const o = Object.keys(t).reduce((e, o) => {
						const i = this._heights.hasOwnProperty(o) ? this._heights[o] : this._assumedItemHeight,
							r = t[o];
						return n = n || i !== r, e + (r - i)
					}, 0);
					return n && (this._heights = Object.assign(Object.assign({}, this._heights), t)), {
						wasHeightChange: n,
						heightDelta: o
					}
				}
				_criticalUpdate() {
					const {
						sliceStart: e,
						sliceEnd: t
					} = this._computeSlice({
						offscreenToViewportRatio: this.props.minimumOffscreenToViewportRatio
					});
					"number" == typeof e && "number" == typeof t && this._setNecessarySlice(e, t)
				}
				_debouncedUpdate() {
					const {
						sliceStart: e,
						sliceEnd: t
					} = this._computeSlice({
						offscreenToViewportRatio: this.props.preferredOffscreenToViewportRatio
					});
					"number" == typeof e && "number" == typeof t && this._setSlice(e, t)
				}
				_computeSlice({
					offscreenToViewportRatio: e
				}) {
					const {
						list: t
					} = this.props;
					if (this._unmounted || 0 === t.length) return {};
					const n = this._getRelativeViewportRect(),
						o = n.getHeight() * e,
						i = n.getTop() - o,
						r = n.getBottom() + o,
						a = this._getRectangles(),
						s = Object(c.a)(t, ({
							id: e
						}) => a[e].getBottom() > i),
						l = s >= 0 ? s : t.length - 1,
						d = Object(c.a)(t, ({
							id: e
						}) => a[e].getTop() >= r, l),
						h = d >= 0 ? d : t.length;
					return this._schedulePositioningNotification(), {
						sliceStart: l,
						sliceEnd: h
					}
				}
				_notifyPositioning() {
					if (!this._unmounted) {
						const {
							onPositioningUpdate: e
						} = this.props;
						e(this.getPositioning())
					}
				}
				_getRelativeViewportRect() {
					if (!this._ref) return new m.a(0, 0);
					const e = this._ref.getWrapperNode();
					if (!e) return new m.a(0, 0);
					const t = Math.ceil(e.getBoundingClientRect().top);
					return this.props.viewport.getRect().translateBy(-t)
				}
				_getDefaultSlice(e, t = 0) {
					const {
						viewport: n
					} = this.props, o = n.getRect().getHeight(), i = Object.assign({}, this, {
						props: Object.assign({}, this.props, {
							list: e
						}),
						state: Object.assign({}, this.state),
						context: Object.assign({}, this.context),
						refs: null
					}), r = this._getRectangles(i), {
						id: a
					} = e[t], s = r[a].getBottom(), l = Object(c.a)(e, ({
						id: e
					}) => r[e].getTop() - s >= o, t), d = l >= 0 ? l : e.length;
					return {
						sliceStart: t,
						sliceEnd: Math.min(e.length, d)
					}
				}
			}
			a()(O, "defaultProps", {
				assumedItemHeight: 400,
				heightCache: {},
				initialItemIndex: 0,
				minimumOffscreenToViewportRatio: .5,
				preferredOffscreenToViewportRatio: 2.5
			});
			const A = (e, t, n) => {
				const o = {};
				return e.reduce((e, {
					id: i
				}) => {
					const r = t.hasOwnProperty(i) ? t[i] : n,
						a = new m.a(e, r);
					return o[i] = a, a.getBottom()
				}, 0), o
			};
			var M = O,
				L = n("SrIh"),
				D = n("b1wW"),
				j = n("E6XO"),
				N = n("v6aA"),
				F = n("06eB"),
				B = n.n(F),
				U = n("aITJ");
			const H = () => window.performance ? window.performance.now() : Date.now();
			class z extends s.Component {
				constructor(e, t) {
					super(e, t), a()(this, "_perfReported", !1), a()(this, "_observeElement", e => {
						const t = this._resizeObserver;
						t && (t.disconnect(), t.observe(e))
					}), a()(this, "_handleResize", e => {
						const {
							onHeightChanged: t,
							id: n
						} = this.props, [o] = e;
						this._isResizeObserverHeightUpdatesEnabled && o && o.contentRect.height !== this._currentHeight && (this._currentHeight = o.contentRect.height, t(n, o.contentRect.height)), this._perfReported || (this.props.onVisible(n, H() - this._perfStart), this._perfReported = !0)
					}), a()(this, "_setRef", e => {
						const {
							id: t,
							setAPI: n
						} = this.props;
						e ? (this._element = e, n(t, this), this._observeElement(e)) : (n(t, void 0), this._element = void 0)
					}), this._isResizeObserverHeightUpdatesEnabled = this.context.featureSwitches.isTrue("responsive_web_vs_config_resize_observer_enabled") && U.a.isDesktopOS() && U.a.isSafari(), this._resizeObserver = new window.ResizeObserver(this._handleResize), this._perfStart = H()
				}
				shouldComponentUpdate(e) {
					const {
						render: t,
						data: n
					} = this.props;
					return t !== e.render || !B()(n, e.data)
				}
				componentWillUnmount() {
					this._resizeObserver && this._resizeObserver.disconnect()
				}
				componentDidUpdate(e) {
					const {
						id: t,
						setAPI: n
					} = this.props;
					e.id !== t && (n(e.id, void 0), n(t, this))
				}
				measureHeight() {
					return this._currentHeight = this._element ? this._element.getBoundingClientRect().height : 0, this._currentHeight
				}
				render() {
					const {
						data: e,
						render: t
					} = this.props;
					return s.createElement("div", {
						ref: this._setRef
					}, t(e))
				}
			}
			a()(z, "contextType", N.a);
			var W = n("iChn");
			class V extends s.PureComponent {
				constructor(...e) {
					super(...e), a()(this, "_cells", new Map), a()(this, "_heightUpdates", {}), a()(this, "_visibilityMeasurements", new Map), a()(this, "_handleItemVisible", (e, t) => {
						this._visibilityMeasurements.has(e) || this._visibilityMeasurements.set(e, t)
					}), a()(this, "_reportVisibilityMeasurements", () => {
						if (!this._visibilityMeasurements.size) return;
						let e = 0;
						this._visibilityMeasurements.forEach(t => e += t);
						const t = Math.round(e / this._visibilityMeasurements.size),
							n = U.a.isDesktopOS() ? "scroller_legacy" : "scroller_legacy_mobile";
						j.c("rweb:scroller:ttfv:" + n, {
							duration_ms: t
						}), this._visibilityMeasurements.clear()
					}), a()(this, "_handleCellHeightChanged", (e, t) => {
						this._heightUpdates[e] = t, this._flushHeightUpdates()
					}), a()(this, "_flushHeightUpdates", Object(S.a)(() => {
						const {
							onHeightsChange: e
						} = this.props;
						e(this._heightUpdates), this._heightUpdates = {}
					}, 100, {
						trailing: !0
					})), a()(this, "_setCellRef", (e, t) => {
						t ? this._cells.set(e, t) : this._cells.delete(e)
					}), a()(this, "_handleDivRefUpdate", e => {
						this._div = e
					})
				}
				getWrapperNode() {
					return this._div
				}
				getItemHeights() {
					const {
						list: e
					} = this.props;
					return Object(W.a)(e, e => e.id, e => {
						const t = this._cells.get(e.id);
						return t ? t.measureHeight() : 0
					})
				}
				componentWillUnmount() {
					this._reportVisibilityMeasurements()
				}
				render() {
					const {
						blankSpaceAbove: e,
						blankSpaceBelow: t
					} = this.props;
					return s.createElement("div", {
						ref: this._handleDivRefUpdate,
						style: {
							paddingTop: e,
							paddingBottom: t
						}
					}, this._renderContent())
				}
				_renderContent() {
					const {
						renderItem: e,
						list: t
					} = this.props;
					return t.map(({
						data: t,
						id: n
					}) => s.createElement(z, {
						data: t,
						id: n,
						key: n,
						onHeightChanged: this._handleCellHeightChanged,
						onVisible: this._handleItemVisible,
						render: e,
						setAPI: this._setCellRef
					}))
				}
			}











			var K = n("nfVA"),
				G = n("aWzz"),
				q = n("Lqdf");
			const X = e => (Object(L.a)(`Fallback to slow hashing in VirtualScroller (type = ${e?e.type:""})`), Object(_.a)(e));
			class Y extends s.Component {
				constructor(e, t) {
					super(e, t), a()(this, "_onDemandRenderer", e => {
						const {
							minimumOffscreenToViewportRatio: t,
							preferredOffscreenToViewportRatio: n
						} = this.props;
						return s.createElement(M, i()({}, e, {
							assumedItemHeight: this.props.assumedItemHeight,
							cacheKey: this.props.cacheKey,
							minimumOffscreenToViewportRatio: t,
							onPositioningUpdate: this._handlePositioningUpdate,
							preferredOffscreenToViewportRatio: n,
							renderList: this._viewRenderer,
							viewport: this._viewport
						}))
					}), a()(this, "_viewRenderer", e => s.createElement(V, e)), a()(this, "_getItemRenderer", Object(y.a)(this, e => e.renderer, e => t => t ? t.presentational ? t.renderNode() : e(t.data) : null)), a()(this, "_handleAnchorRendererRefUpdate", e => {
						this._anchorRenderer = e
					}), a()(this, "_handlePositionRestored", () => {
						const {
							onPositionRestored: e
						} = this.props;
						e(), this._edgeProximity = this._createEdgeProximity();
						const t = this._anchorRenderer && this._anchorRenderer.getPositioning();
						t && this._edgeProximity.handlePositioningUpdate(t)
					}), a()(this, "_handlePositioningUpdate", e => {
						this._edgeProximity && this._edgeProximity.handlePositioningUpdate(e);
						const {
							onItemsRendered: t
						} = this.props;
						t && t({
							positions: e.getRenderedItems(),
							viewport: e.getForViewport()
						})
					}), a()(this, "_getList", Object(y.a)(this, e => e.items, e => e.header, e => e.footer, (e, t, n) => {
						const o = {},
							i = e.reduce((e, t) => {
								const n = this._getId(t);
								return o.hasOwnProperty(n) ? Object(L.a)("Duplicate item id generated in VirtualScroller. Latter item will be discarded", {
									extra: {
										id: n
									}
								}) : (e.push({
									data: {
										data: t
									},
									id: n
								}), o[n] = !0), e
							}, []),
							r = t ? {
								id: T.c,
								data: {
									presentational: !0,
									renderNode: () => t
								}
							} : null,
							a = n ? {
								id: T.b,
								data: {
									presentational: !0,
									renderNode: () => n
								}
							} : null;
						return i.length ? [...r ? [r] : [], ...i, ...a ? [a] : []] : []
					})), this._viewport = e.viewport || t.viewport || K.a.root()
				}
				scrollToTop() {
					this._viewport.scrollToTop()
				}
				isAtTop() {
					const e = this._anchorRenderer && this._anchorRenderer.getPositioning();
					return (e && e.getForViewport().getTop() || 0) < 50
				}
				findTopmostVisibleId() {
					const e = this._anchorRenderer && this._anchorRenderer.getPositioning();
					return e ? e.findTopmostVisibleId() : void 0
				}
				UNSAFE_componentWillMount() {
					this._isManualScrollRestoration = window.history && "manual" === window.history.scrollRestoration, this._loadStoredPosition(this.props)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						cacheKey: t
					} = this.props;
					t !== e.cacheKey && (this._preservePosition(this._customLocation), this._loadStoredPosition(e))
				}
				componentWillUnmount() {
					this._preservePosition(this._customLocation)
				}
				render() {
					const {
						cacheKey: e,
						items: t,
						noItemsRenderer: n,
						anchoring: o
					} = this.props;
					return t.length ? s.createElement(g, { // ===> HERE1
						anchoring: o,
						initialAnchors: this._initialAnchors || [],
						key: e,
						list: this._getList(),
						onPositionRestored: this._handlePositionRestored,
						ref: this._handleAnchorRendererRefUpdate,
						renderItem: this._getItemRenderer(),
						renderList: this._onDemandRenderer,
						retryPositionRestoration: !this._isManualScrollRestoration,
						viewport: this._viewport
					}) : n()
				}
				_getId(e) {
					const {
						identityFunction: t
					} = this.props, n = t(e) || e.id || X(e);
					return Object(f.a)("number" == typeof n || "string" == typeof n, "Item id must not be falsy"), n
				}
				_preservePosition(e) {
					if (this._anchorRenderer && e) {
						const t = this._anchorRenderer.getAnchors();
						e.savePosition(t)
					}
				}
				_createEdgeProximity() {
					const {
						nearStartProximityRatio: e,
						nearEndProximityRatio: t
					} = this.props;
					return new q.b([{
						condition: q.a.nearTop(5),
						callback: e => this.props.onAtStart(e)
					}, {
						condition: q.a.nearTopRatio(e),
						callback: e => this.props.onNearStart(e)
					}, {
						condition: q.a.nearBottomRatio(t),
						callback: e => this.props.onNearEnd(e)
					}, {
						condition: q.a.nearBottom(5),
						callback: e => this.props.onAtEnd(e)
					}])
				}
				_loadStoredPosition(e) {
					const {
						getCustomLocation: t
					} = this.context, {
						initialAnchor: n
					} = e;
					if (this._customLocation = t && t(), this._initialAnchors = n ? [n] : [], this._customLocation) {
						const e = this._customLocation.getSavedPosition();
						e && e.length ? this._initialAnchors = e : this._initialAnchors = n ? [n] : [], this._initialAnchors.length > 0 && this._customLocation && this._customLocation.claimScrollRestoration()
					}
				}
			}
			a()(Y, "displayName", "VirtualScroller"), a()(Y, "contextTypes", {
				viewport: G.object,
				getCustomLocation: G.func
			}), a()(Y, "defaultProps", {
				anchoring: g.defaultProps.anchoring,
				assumedItemHeight: M.defaultProps.assumedItemHeight,
				identityFunction: X,
				minimumOffscreenToViewportRatio: M.defaultProps.minimumOffscreenToViewportRatio,
				nearEndProximityRatio: 1.75,
				nearStartProximityRatio: .25,
				noItemsRenderer: () => null,
				onPositionRestored: v.a,
				onAtEnd: v.a,
				onAtStart: v.a,
				onNearEnd: v.a,
				onNearStart: v.a,
				preferredOffscreenToViewportRatio: M.defaultProps.preferredOffscreenToViewportRatio,
				scrollerDisplayType: D.a.Vertical
			});
			t.a = Object(w.a)(Y)
		},















		A9rn: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("IRWI");
			const i = Object.assign({}, o.a, {
				pinToTopWhenAtTop: !0
			});
			t.a = i
		},
		ACi1: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o = /^https:\/\//i;
			t.default = o, e.exports = t.default
		},
		AOWc: function(e, t, n) {
			"use strict";

			function o(e) {
				this.name = "AssertionError", this.message = e, this.stack = (new Error).stack
			}
			o.prototype = Object.create(Error.prototype), o.prototype.constructor = o;
			t.a = (e, t) => {
				if (!e) throw new o(t ? "Assertion failed: " + t : "Assertion failed (also, no message was provided)")
			}
		},
		AP4B: function(e, t, n) {
			"use strict";
			var o = n("ezF+"),
				i = n("3Lh0");
			var r = o.d(o.f({
				component: i.a,
				bindActions: ({
					module: e
				}) => ({
					removeEntry: e.removeEntry
				}),
				createProps: ({
					actions: {
						removeEntry: e
					},
					entry: t
				}) => ({
					onDismiss: () => {
						e(t.entryId)
					}
				})
			}));
			t.a = {
				push_permission_prompt: r
			}
		},
		AUxQ: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("PiaM"),
				a = n("ERkP"),
				s = n("v6aA"),
				l = n("rxPX");
			const c = (e, t) => t.module.selectInitialFetchStatus(e),
				d = (e, t) => t.module.selectTopFetchStatus(e),
				h = (e, t) => {
					const n = t.module.selectTimeline(e);
					return !!n && n.terminatedStatus.atTop
				},
				u = (e, t) => t.location.state && t.location.state.contextualClientEventInfo;
			var p = Object(l.a)().propsFromState(() => ({
					moduleInitialFetchStatus: c,
					moduleTopFetchStatus: d,
					isTimelineTerminatedAtTop: h,
					contextualClientEventInfo: u
				})),
				m = n("MDbM"),
				b = n("3XMw"),
				g = n.n(b),
				f = n("BV3T"),
				_ = n("VTxf"),
				y = n("SrIh"),
				w = n("fTQJ"),
				v = n("iBK2"),
				C = n("IRWI"),
				E = n("wgnn"),
				T = n("I7xG"),
				x = n("Qwev"),
				k = (n("IAdD"), n("ezF+")),
				I = n("xZXe"),
				S = n("P1oR"),
				P = n("QIgh"),
				R = n("8UdT"),
				O = n("caTy"),
				A = n("NO+D"),
				M = n("ckGq"),
				L = n("zh9S"),
				D = n("gdQ4"),
				j = n("yvCK"),
				N = n("euJ+"),
				F = n("Yy//"),
				B = n("VrCx"),
				U = n("yy6l"),
				H = n("G6rE"),
				z = n("IcAo"),
				W = n("VPAj"),
				V = n("zrc3");
			const K = Object.assign({}, P.b, {
				[R.b.Tweet]: Object(F.a)({
					hideConversationControlsEducationText: !0,
					withMuteConversation: !0
				})
			});
			const G = ({
					entry: e,
					referringContext: t,
					selectedTweet: n,
					isRootEntryPresent: o
				}) => {
					const {
						content: i
					} = e;
					return Object.assign({}, e, {
						referringContext: t,
						content: Object.assign({}, i, {
							selectedTweet: n,
							showSmallAvatars: !0,
							isRootEntryPresent: o
						})
					})
				},
				q = ({
					originalEntry: e,
					contextTweetId: t,
					contextualClientEventInfo: n,
					socialContext: o,
					promotedContent: i,
					conversationPosition: a
				}) => r.h(Object.assign({}, e, {
					conversationPosition: a,
					referringContext: {
						contextTweetId: t,
						contextualClientEventInfo: n,
						socialContext: o,
						promotedContent: i
					}
				}), {
					displayType: B.a.Focal
				}),
				X = ({
					entry: e,
					contextTweetId: t,
					conversationPosition: n,
					socialContext: o
				}) => r.h(Object.assign({}, e, {
					conversationPosition: n,
					referringContext: {
						contextTweetId: t,
						socialContext: o
					}
				}), {
					displayType: "FocalTweetInlineTombstone"
				}),
				Y = ({
					entry: e,
					conversationPosition: t
				}) => Object.assign({}, e, {
					conversationPosition: t
				}),
				Q = (e, t) => Object.assign({}, e, {
					conversationPosition: {
						isStart: t,
						isEnd: !1,
						position: "ancestor",
						showReplyContext: !1
					}
				}),
				J = (e, t) => Object.assign({}, e, {
					conversationPosition: {
						isStart: t,
						isEnd: !1,
						position: "ancestor"
					}
				}),
				$ = g.a.d35d74e3,
				Z = e => {
					switch (e) {
						case E.a.NOT_FOUND:
							return a.createElement(_.a, null);
						case E.a.NOT_ALLOWED:
							return a.createElement(f.a, null);
						default:
							return Object(y.a)("Unhandled timeline unavailable reason: " + e), null
					}
				},
				ee = () => a.createElement(_.a, null);
			class te extends a.Component {
				constructor(...e) {
					super(...e), i()(this, "_isInitialFocusEntry", (e, t) => {
						const {
							focalTweetId: n
						} = this.props;
						return t > 0 && e && e.content && !!e.content.id && e.content.id === n
					}), i()(this, "_getPreprocessor", Object(T.a)(this, e => e.socialContext, e => e.contextTweetId, e => e.contextualClientEventInfo, e => e.promotedContent, e => e.focalTweetId, e => e.selectedTweet, e => e.conversationTreeEnabled, e => e.isTimelineTerminatedAtTop, e => {
						var t;
						return null == (t = e.focalTweet) ? void 0 : t.in_reply_to_status_id_str
					}, e => e.withFocalTweetMedia, (e, t, n, o, i, r, a, s, l, c) => a ? (({
						focalTweetId: e,
						contextTweetId: t,
						contextualClientEventInfo: n,
						socialContext: o,
						selectedTweet: i,
						promotedContent: r,
						isTimelineTerminatedAtTop: a,
						focalInReplyTo: s,
						hideMedia: l
					}) => c => c.map((c, d) => {
						if (c.type === R.b.Tombstone) return c.content.displayType === j.a.Inline ? X({
							contextTweetId: t,
							entry: c,
							socialContext: o
						}) : Y({
							entry: c
						});
						if (c.type === R.b.TimelineModule) {
							return G({
								entry: c,
								referringContext: {
									focalTweetId: e,
									promotedContent: r,
									contextTweetId: t,
									contextualClientEventInfo: n,
									socialContext: o,
									hideMedia: l
								},
								selectedTweet: i,
								isRootEntryPresent: a || !s
							})
						}
						return c
					}).filter(Boolean))({
						focalTweetId: i,
						contextTweetId: t,
						contextualClientEventInfo: n,
						socialContext: e,
						selectedTweet: r,
						promotedContent: o,
						isTimelineTerminatedAtTop: s,
						focalInReplyTo: l,
						hideMedia: !c
					}) : (({
						focalTweetId: e,
						contextTweetId: t,
						contextualClientEventInfo: n,
						socialContext: o,
						promotedContent: i
					}) => {
						const r = t => t.type === R.b.Tweet && t.content.id === e || t.type === R.b.Tombstone && !!t.content && !!t.content.tweet && t.content.tweet.id === e;
						return e => {
							const a = Object(V.a)(e, r);
							let s = !1;
							return e.map((e, r) => {
								const l = r > a;
								if (e.type !== R.b.Tweet && e.type !== R.b.Tombstone || l) return e; {
									const l = !s;
									if (s = !0, r < a) {
										if (e.type === R.b.Tweet) return Q(e, l);
										if (e.type === R.b.Tombstone) return J(e, l)
									} else {
										if (e.type === R.b.Tombstone) {
											const n = {
												isStart: l,
												isEnd: !0
											};
											return e.content.displayType === j.a.Inline ? X({
												contextTweetId: t,
												entry: e,
												socialContext: o,
												conversationPosition: n
											}) : Y({
												entry: e,
												conversationPosition: n
											})
										}
										if (e.type === R.b.Tweet) return q({
											originalEntry: e,
											contextTweetId: t,
											contextualClientEventInfo: n,
											socialContext: o,
											promotedContent: i,
											conversationPosition: {
												isStart: l,
												isEnd: !0,
												position: "focal",
												showReplyContext: !1
											}
										})
									}
								}
							}).filter(Boolean)
						}
					})({
						focalTweetId: i,
						contextTweetId: t,
						contextualClientEventInfo: n,
						socialContext: e,
						promotedContent: o
					}))), i()(this, "_getEntryConfig", Object(T.a)(this, e => !!e.rootTweet && e.rootTweet.user.id_str, (e, t, n) => n.context.loggedInUserId, e => e.withFocalTweetMedia, (e, t, n) => (({
						isCurrentUserRootAuthor: e,
						withFocalTweetMedia: t
					}) => Object(z.a)({}, K, {
						[R.b.Tweet]: {
							handlers: {
								[B.a.Tweet]: Object(U.a)({
									component: I.a,
									hideConversationControlsEducationText: !0,
									createAdditionalProps: (t, n, {
										applyFeedbackAction: o
									}) => {
										const i = {};
										i.withHideReply = e, i.withUnhideReply = !1, i.withViewHiddenReplies = !0;
										const r = !!(t.content && t.content.hasModeratedReplies && t.conversationPosition && t.conversationPosition.isStart);
										return i.hasModeratedReplies = r, e && (i.onTweetDismiss = () => o({
											entry: t,
											feedbackKeys: [N.d]
										})), i
									},
									dismissable: !0,
									withMuteConversation: !0
								}),
								[B.a.Focal]: Object(U.a)({
									component: S.a,
									hideConversationControlsEducationText: !1,
									createAdditionalProps: (n, o, {
										applyFeedbackAction: i
									}) => {
										const {
											content: {
												hasModeratedReplies: r,
												tombstoneInfo: a
											},
											referringContext: s,
											conversationPosition: l
										} = n, {
											contextTweetId: c,
											socialContext: d,
											promotedContent: h
										} = s || {}, u = !!(r && l && l.isStart);
										return Object.assign({
											contextTweetId: c,
											hasModeratedReplies: u,
											socialContext: d,
											promotedContent: h,
											tombstoneInfo: a,
											withHideReply: e,
											withInlineMedia: t
										}, e ? {
											onTweetDismiss: () => i({
												entry: n,
												feedbackKeys: [N.d]
											})
										} : {})
									},
									dismissable: !0,
									divider: e => ({
										top: !1,
										bottom: !1
									}),
									withMuteConversation: !0
								})
							}
						},
						[R.b.Tombstone]: {
							handlers: {
								FocalTweetInlineTombstone: Object(A.a)({
									createAdditionalProps: t => {
										const {
											referringContext: n
										} = t, {
											contextTweetId: o,
											socialContext: i
										} = n || {};
										return {
											contextTweetId: o,
											isFocalTweet: !0,
											socialContext: i,
											withHideReply: e
										}
									},
									shouldDisplayBorder: Object(W.a)(!0)
								}),
								[j.a.Inline]: Object(A.a)({
									createAdditionalProps: (t, {
										applyFeedbackAction: n
									}) => ({
										onTweetDismiss: e ? () => n({
											entry: t,
											feedbackKeys: [N.d]
										}) : void 0,
										withHideReply: e
									}),
									shouldDisplayBorder: e => !e || !e.conversationPosition || !!e.conversationPosition.isStart && !!e.conversationPosition.isEnd
								})
							}
						},
						[R.b.Label]: M.a,
						[R.b.TweetComposer]: k.d(k.f({
							component: D.a,
							bindActions: Object(W.a)({
								scribe: L.c
							}),
							selectData: ({
								entry: e,
								module: t
							}) => ({
								loggedInUser: e => H.e.selectLoggedInUser(e)
							}),
							createProps: ({
								data: {
									loggedInUser: e = {}
								},
								entry: t,
								actions: {
									scribe: n
								},
								scribeNamespace: o
							}) => {
								const i = Object(O.a)(t.content.url.url);
								return {
									avatarUrl: e.profile_image_url_https,
									onClick: () => n(Object.assign({}, o, {
										element: "add_to_thread",
										action: "click"
									})),
									onImpression: () => n(Object.assign({}, o, {
										element: "add_to_thread",
										action: "impression"
									})),
									to: i ? Object.assign({}, i, {
										state: Object.assign({}, i.state || {}, {
											isSelfThreadReply: !0
										})
									}) : void 0,
									userName: e.screen_name,
									withButton: !0,
									withConversationLine: t.withConversationLine
								}
							},
							shouldDisplayBorder: Object(W.a)(!1),
							divider: {
								top: !1,
								bottom: !0
							}
						}))
					}))({
						isCurrentUserRootAuthor: !!(t && e && t === e),
						withFocalTweetMedia: n
					})))
				}
				render() {
					const {
						apiErrorHandlerMap: e,
						fetchOptions: t,
						focalTweet: n,
						module: o,
						moduleInitialFetchStatus: i,
						moduleTopFetchStatus: r,
						onEntriesUpdate: s
					} = this.props, l = (null == n ? void 0 : n.in_reply_to_status_id_str) && i === m.a.LOADING || r === m.a.LOADING;
					return a.createElement(w.a, {
						anchoring: C.a,
						apiErrorHandlerMap: e,
						entryConfiguration: this._getEntryConfig(),
						fetchOptions: t,
						header: l ? a.createElement(x.a, null) : void 0,
						isInitialFocusEntry: this._isInitialFocusEntry,
						module: o,
						nearStartProximityRatio: 2,
						olderAtTop: !0,
						onEntriesUpdate: s,
						preprocessEntryList: this._getPreprocessor(),
						previewEntries: this._previewEntries(),
						refreshControl: null,
						renderEmptyState: ee,
						renderUnavailable: Z,
						title: $
					})
				}
				_previewEntries() {
					const {
						conversationTreeEnabled: e,
						focalTweet: t
					} = this.props, n = (null == t ? void 0 : t.id_str) || "";
					if (e && t) {
						return [r.j({
							tweetId: n,
							sortIndex: v.a
						})]
					}
					return t ? [r.l({
						id: n,
						sortIndex: v.a
					})] : void 0
				}
			}
			i()(te, "defaultProps", {
				withFocalTweetMedia: !0
			}), i()(te, "contextType", s.a);
			const ne = p(te);
			t.a = ne
		},
		AxOO: function(e, t, n) {
			"use strict"
		},
		BLtI: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Nt
			}));
			n("IAdD"), n("DZ+c"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("+/5o"),
				a = n("ERkP"),
				s = n("v6aA"),
				l = n("3XMw"),
				c = n.n(l),
				d = n("iySH"),
				h = n("MWbm"),
				u = n("htQn"),
				p = n("t62R"),
				m = n("rHpw");
			const b = c.a.dc6212cc;
			var g = ({
				to: e,
				name: t,
				onClick: n
			}) => a.createElement(u.a, {
				link: e,
				onClick: n,
				style: f.root
			}, a.createElement(h.a, {
				style: f.label
			}, a.createElement(p.c, {
				color: "gray600",
				style: f.text
			}, b({
				name: t
			})), a.createElement(d.a, {
				style: f.icon
			})));
			const f = m.a.create(e => ({
				root: {
					backgroundColor: e.colors.transparent,
					borderColor: e.colors.borderColor,
					borderWidth: e.borderWidths.small,
					borderRadius: e.borderRadii.xLarge,
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					maxWidth: "100%"
				},
				label: {
					flexGrow: 0,
					flexDirection: "row",
					paddingVertical: e.spaces.xSmall
				},
				text: {
					flexGrow: 1
				},
				icon: {
					alignSelf: "center",
					color: e.colors.gray600,
					flexShrink: 0,
					height: "1em",
					paddingLeft: e.spaces.xSmall
				}
			}));
			var _ = n("PmiK"),
				y = n("LWCC"),
				w = n("F3pd"),
				v = n("rxPX"),
				C = n("G6rE"),
				E = Object(v.a)().propsFromState(() => ({
					loggedInUser: C.e.selectLoggedInUser
				})).adjustStateProps(({
					loggedInUser: e
				}) => ({
					userAvatarURI: e && e.profile_image_url_https,
					userName: e && e.name
				})).withAnalytics(),
				T = n("cm6r"),
				x = n("XP29");
			const k = c.a.fe8a1f7f,
				I = c.a.e349147b;
			class S extends a.Component {
				constructor(...e) {
					super(...e), i()(this, "_handleClick", e => {
						const {
							analytics: t,
							onClick: n
						} = this.props;
						n && n(e), t.scribe({
							component: "inline_compose_prompt",
							action: "click"
						})
					})
				}
				render() {
					const {
						link: e,
						userAvatarURI: t,
						userName: n,
						promptLabel: o
					} = this.props;
					return a.createElement(h.a, {
						style: P.wrapper
					}, a.createElement(T.a, {
						accessibilityLabel: k,
						interactiveStyles: {
							focusedStyle: P.isFocused
						},
						link: e,
						onClick: this._handleClick,
						style: P.fakeInput
					}, a.createElement(x.a, {
						accessibilityLabel: n,
						size: "large",
						uri: t
					}), a.createElement(h.a, {
						style: P.placeholderText
					}, a.createElement(p.c, {
						color: "gray600",
						numberOfLines: 1
					}, o))))
				}
			}
			i()(S, "defaultProps", {
				link: "/compose/tweet",
				promptLabel: I
			});
			const P = m.a.create(e => ({
				wrapper: {
					paddingVertical: e.componentDimensions.gutterVertical,
					flexDirection: "row",
					zIndex: 1
				},
				placeholderText: {
					marginLeft: e.spaces.xSmall
				},
				fakeInput: {
					alignItems: "center",
					backgroundColor: e.colors.gray50,
					borderRadius: e.borderRadii.infinite,
					flexDirection: "row",
					flexGrow: 1,
					flexShrink: 1,
					minWidth: 0,
					paddingHorizontal: e.spaces.xxSmall,
					paddingVertical: e.spaces.xxSmall
				},
				isFocused: {
					boxShadow: `0 0 0 ${e.borderWidths.medium} ${e.colors.primary}`,
					outlineStyle: "none"
				}
			}));
			var R = E(S),
				O = n("Ey+e"),
				A = n("re8v"),
				M = n("fs1G"),
				L = n("YICZ"),
				D = n("caTy");
			const j = c.a.i859a9d3,
				N = "INDIRECT",
				F = "NO_SPONSORSHIP",
				B = "ISSUE";
			class U extends a.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderDisclaimerDetails", () => {
						const {
							promotedContent: e,
							onPoliticalSponsorWebsiteClick: t
						} = this.props;
						if (!e.adMetadataContainer) return null;
						const {
							disclaimerType: n,
							sponsorshipCandidate: o,
							sponsorshipType: i,
							sponsorshipOrganization: r,
							sponsorshipOrganizationWebsite: s
						} = e.adMetadataContainer, l = s && n !== B ? a.createElement(p.c, {
							link: s,
							onClick: t
						}) : a.createElement(p.c, {
							color: "gray600",
							size: "small"
						});
						if (!r) return null;
						const d = a.createElement(c.a.I18NFormatMessage, {
								$i18n: "b59cd817"
							}, a.cloneElement(l, null, c.a.ce051cca({
								sponsorshipOrganization: r
							}))),
							h = a.createElement(c.a.I18NFormatMessage, {
								$i18n: "h2e93473"
							}, a.cloneElement(l, null, c.a.f38cafe7({
								sponsorshipOrganization: r
							}))),
							u = a.createElement(c.a.I18NFormatMessage, {
								$i18n: "d8ec63bf",
								sponsorshipCandidate: o
							}, a.cloneElement(l, null, c.a.ff6d36a5({
								sponsorshipOrganization: r
							})));
						return a.createElement(p.c, {
							color: "gray600",
							size: "small"
						}, n === B ? d : i === F ? h : i === N ? u : d)
					}), i()(this, "_renderLearnMoreLink", () => {
						const {
							promotedContent: e,
							tweet: t,
							onPromotedDisclaimerLearnMoreClick: n
						} = this.props, {
							disclaimerType: o
						} = e.adMetadataContainer || {}, i = o === B ? "issue_ad" : "political_ad", r = `http://ads.twitter.com/transparency/ads/${t.user.screen_name}/tweet/${t.id_str}`;
						return a.createElement(p.c, {
							link: r,
							onClick: n(i),
							size: "small",
							style: H.learnMore
						}, j)
					})
				}
				render() {
					return a.createElement(a.Fragment, null, this._renderDisclaimerDetails(), this._renderLearnMoreLink())
				}
			}
			const H = m.a.create(e => ({
				learnMore: {
					alignSelf: "flex-start"
				}
			}));
			var z = n("P0Hv"),
				W = n("e5HP");
			class V extends a.PureComponent {
				render() {
					const {
						onPromotedDisclaimerLearnMoreClick: e,
						onPoliticalSponsorWebsiteClick: t,
						onPromotedIndicatorClick: n,
						promotedContent: o,
						promotedContentAdvertiser: i,
						style: r,
						tweet: s
					} = this.props, l = o && "earned" !== Object(w.a)(o), c = !!o && (o.adMetadataContainer && ("POLITICAL" === o.adMetadataContainer.disclaimerType || "ISSUE" === o.adMetadataContainer.disclaimerType) || "political" === Object(w.a)(o) || "issue" === Object(w.a)(o));
					return l ? a.createElement(h.a, {
						style: r,
						testID: z.a.promotedIndicator
					}, i && o ? a.createElement(T.a, {
						interactiveStyles: null,
						link: {
							pathname: "/" + i.screen_name,
							state: {
								promotedTweetState: o
							}
						},
						onPress: n
					}, a.createElement(W.a, {
						promotedContent: o
					})) : !!o && a.createElement(W.a, {
						promotedContent: o
					}), c && o ? a.createElement(U, {
						onPoliticalSponsorWebsiteClick: t,
						onPromotedDisclaimerLearnMoreClick: e,
						promotedContent: o,
						tweet: s
					}) : null) : null
				}
			}
			var K = V,
				G = n("rcen"),
				q = n("gdQ4"),
				X = n("Jkc4"),
				Y = n("qbku"),
				Q = n("xM7j"),
				J = n("v/3V"),
				$ = (n("Ysgh"), n("97Jx")),
				Z = n.n($),
				ee = n("LdEA"),
				te = n.n(ee),
				ne = n("0KEI"),
				oe = n("RqPI"),
				ie = n("3zvM"),
				re = n("lMB6"),
				ae = n("iChn");
			const se = Object(ie.e)({
					namespace: "translationsTweets",
					fetchOneContext: "FETCH_TWEET_TRANSLATION",
					fetchOneEndpoint: e => (t, n) => e.Tweets.fetchTranslation(t, n).then(le),
					fetchOneParams: e => ({
						id: e
					})
				}),
				le = e => {
					const t = Array.isArray(e) ? e : [e];
					return {
						entities: {
							translationsTweets: Object(ae.a)(t, e => e.id_str)
						}
					}
				};
			var ce = re.a.register(se);
			const de = (e, t) => ce.select(e, t.tweetId),
				he = (e, t) => ce.selectFetchStatus(e, t.tweetId);
			var ue = Object(v.a)().propsFromState(() => ({
					translation: de,
					translationFetchStatus: he,
					userLanguage: oe.f
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(ne.d)("TRANSLATE_TWEET"),
					fetchTranslation: ce.fetchOneIfNeeded
				})),
				pe = n("oQhu"),
				me = n("PdwO"),
				be = n("I7xG"),
				ge = n("cTG8"),
				fe = n("z4Oz"),
				_e = n("GWvE");
			const ye = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
				we = {
					"en-gb": "en",
					"en-ss": "en",
					fil: "tl",
					he: "iw",
					id: "in",
					msa: "ms",
					"xx-lc": "en"
				},
				ve = e => {
					const t = e.toLowerCase();
					return we[t] || t
				},
				Ce = (e, t) => {
					const n = ve(e);
					return !(ye.indexOf(n) > -1 && t < 20) && !("und" === e)
				},
				Ee = ({
					displayTextRange: e,
					entities: t,
					text: n,
					language: o
				}) => {
					if (!e || !Ce(o, e[1] - e[0])) return !1;
					const i = ((e, t, n) => {
						const {
							accText: o,
							lastIndex: i
						} = n.reduce(({
							lastIndex: n,
							accText: o
						}, i) => i[1] <= n || t[1] <= i[0] ? {
							lastIndex: n,
							accText: o
						} : {
							accText: o + e.slice(n, i[0]),
							lastIndex: i[1]
						}, {
							accText: "",
							lastIndex: t[0]
						});
						return o + e.slice(i, t[1])
					})(n, e, ((e, t) => {
						let n = fe.a.getTwemojiEntities(e).map(e => e.indices);
						for (const e in t) n = n.concat(t[e].map(e => e.indices));
						return n.sort((e, t) => e[0] - t[0]), n
					})(n, t));
					return !Object(_e.a)(i) && Ce(o, i.length)
				},
				Te = c.a.b4947556,
				xe = Object(pe.a)(e => [0, e.length]);
			class ke extends a.Component {
				constructor(...e) {
					super(...e), i()(this, "_fetchTranslation", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchTranslation: t,
							tweetId: n
						} = this.props;
						t(n).catch(e())
					}), i()(this, "_shouldDisableTranslation", Object(be.a)(this, e => e.disableTranslation, e => e.displayTextRange, e => e.entities, e => e.text, e => e.lang, e => e.supplementalLang, e => e.userLanguage, (e, t, n, o, i, r, a) => {
						const s = a && ve(i.split("-")[0]) !== ve(a.split("-")[0]);
						return e || !!r || !s || !Ee({
							displayTextRange: t,
							entities: n,
							text: o,
							language: i
						})
					})), i()(this, "_renderTranslation", () => {
						const e = this.props,
							{
								translation: t
							} = e,
							n = te()(e, ["createLocalApiErrorHandler", "disableTranslation", "fetchTranslation", "header", "style", "supplementalLang", "translation", "translationFetchStatus", "tweetId", "userLanguage", "withOriginalText"]);
						if (t) return a.createElement(ge.a, Z()({}, n, {
							displayTextRange: xe(t.text),
							entities: t.entities,
							lang: t.destinationLanguage,
							text: t.text
						}))
					})
				}
				render() {
					const e = this.props,
						{
							header: t,
							style: n,
							translation: o,
							translationFetchStatus: i,
							tweetId: r,
							withOriginalText: s
						} = e,
						l = te()(e, ["createLocalApiErrorHandler", "disableTranslation", "fetchTranslation", "header", "style", "supplementalLang", "translation", "translationFetchStatus", "tweetId", "userLanguage", "withOriginalText"]);
					return a.createElement(me.a, {
						disableTranslation: this._shouldDisableTranslation(),
						fetchTranslation: this._fetchTranslation,
						header: t,
						key: r,
						originLanguage: o && o.localizedSourceLanguage,
						style: n,
						translateButtonText: Te,
						translatedMessage: this._renderTranslation(),
						translationFetchStatus: i,
						withOriginalText: s
					}, a.createElement(ge.a, l))
				}
			}
			var Ie = ue(ke),
				Se = n("2qZs"),
				Pe = n("wwsH");
			const Re = {
					viewType: "birdwatch"
				},
				Oe = m.a.create(e => ({
					birdwatchIcon: {
						marginLeft: e.spaces.xSmall
					}
				}));
			var Ae = ({
					onPress: e,
					tweetId: t
				}) => {
					const n = {
						pathname: "/i/birdwatch/t/" + t,
						external: !0
					};
					return a.createElement(Pe.a, {
						Icon: Se.a,
						accessibilityLabel: "Birdwatch note",
						activeColor: "primary",
						clientEventContext: Re,
						link: n,
						onPress: e,
						style: Oe.birdwatchIcon
					})
				},
				Me = n("xXop"),
				Le = n("4bW+"),
				De = n("xrkw"),
				je = n("mqpi");
			const Ne = c.a.g1fa869c;
			class Fe extends a.PureComponent {
				render() {
					const {
						loggedInUserId: e,
						onAnalyticsClick: t,
						tweet: n
					} = this.props;
					return !Object(je.a)(n, "view_tweet_activity") && e === n.user.id_str ? a.createElement(u.a, {
						link: n.permalink + "/analytics",
						onPress: t,
						style: [Be.detailItemContainer, Be.detailItem]
					}, a.createElement(De.a, {
						style: Be.analyticsIcon
					}), a.createElement(p.c, {
						color: "gray600"
					}, Ne)) : null
				}
			}
			const Be = m.a.create(e => ({
				analyticsIcon: {
					color: e.colors.gray600,
					paddingRight: e.spaces.xxSmall
				},
				detailItem: {
					paddingVertical: e.spaces.small
				},
				detailItemContainer: {
					borderTopColor: e.colors.borderColor,
					borderTopStyle: "solid",
					borderTopWidth: "1px",
					flexDirection: "row"
				}
			}));
			var Ue = Fe,
				He = n("NnR4"),
				ze = n("b5s6"),
				We = n("E0cF"),
				Ve = n("rOiJ"),
				Ke = n("RT39"),
				Ge = n("/Ikv"),
				qe = n("ZkMC");
			const Xe = c.a.e5990b7d;
			class Ye extends a.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderInlineMedia", () => {
						const {
							displayLocation: e,
							displayMediaMetadata: t,
							enableKeyboardShortcuts: n,
							forwardPivotInfo: o,
							onMediaClick: i,
							preventVideoPlayback: r,
							promotedContent: s,
							tweet: l,
							singleImageMaxAspectRatio: c,
							singleImageMinAspectRatio: d
						} = this.props, h = We.a.getOriginalTweet(l);
						return this.hasMedia ? a.createElement(Ve.a, {
							authorId: h.user.id_str,
							cacheLocationKey: e,
							displayMediaAttribution: !0,
							displayMediaMetadata: t,
							enableKeyboardShortcuts: n,
							forwardPivotInfo: o,
							hasSensitiveMedia: h.possibly_sensitive,
							loggedInUserId: this.context.loggedInUserId,
							mediaDetails: h.extended_entities.media,
							mediaTagsLink: h.permalink + "/media_tags",
							onClick: i,
							preventPlayback: r,
							promotedContent: s,
							shouldShowAltLabelAlways: this.context.featureSwitches.isTrue("responsive_web_alt_text_badge_enabled"),
							singleImageMaxAspectRatio: c,
							singleImageMinAspectRatio: d,
							style: Qe.gap,
							tweetId: h.id_str,
							withMediaTagsIcon: "detail" === e,
							withPostPlayback: !0
						}) : null
					}), i()(this, "_renderForwardPivot", () => {
						const {
							forwardPivotInfo: e,
							tweet: t
						} = this.props;
						if (e && e.displayType === Ke.a.SoftIntervention) {
							const {
								displayType: n,
								landingUrl: o,
								text: i
							} = e;
							return a.createElement(h.a, {
								style: Qe.mediaPivotGap
							}, a.createElement(Ke.b, {
								displayType: n,
								landingUrl: o,
								text: i,
								tweetId: t.id_str
							}))
						}
					}), i()(this, "_maybeRenderSensitiveContent", e => {
						const {
							tweet: t
						} = this.props, n = We.a.getOriginalTweet(t), {
							quoted_status: o,
							possibly_sensitive: i
						} = n;
						return (!(!o || !o.possibly_sensitive) && this.quoteTweetHasMedia || i) && e ? a.createElement(qe.a, {
							revealableTombstoneConfig: qe.b
						}, e) : e
					}), i()(this, "_renderQuoteTweet", () => {
						const {
							quotedTweetTombstoneInfo: e,
							nativeID: t,
							tweet: n,
							displayLocation: o
						} = this.props, i = this.getQuoteTweet();
						return i && e ? a.createElement(qe.a, {
							accessibilityLabel: Xe,
							actionLink: "timeline" === o ? n.permalink : void 0,
							nativeID: t ? r.l : void 0,
							revealableTombstoneConfig: e,
							scribeComponent: "inner_tombstone",
							showAction: !!e.richRevealText
						}, i) : i
					}), i()(this, "getQuoteTweet", () => {
						const {
							withQuoteTweetMedia: e,
							linkableQuotedTweet: t,
							withUserHoverCard: n,
							innerForwardPivotInfo: o,
							nativeID: i,
							displayLocation: s,
							tweet: l
						} = this.props, c = We.a.getOriginalTweet(l);
						var d;
						return c && c.is_quote_status ? a.createElement(ze.a, {
							forwardPivotInfo: o,
							isCondensed: !(!this.hasMedia || "detail" === s),
							nativeID: i ? r.l : void 0,
							tweetId: null == (d = c.quoted_status) ? void 0 : d.id_str,
							withInlineMedia: e,
							withLink: t,
							withUserHoverCard: n
						}) : null
					}), i()(this, "_renderCard", () => {
						const {
							displayLocation: e,
							preventVideoPlayback: t,
							promotedContent: n,
							tweet: o,
							withCardLinks: i,
							nativeID: s,
							onCardLinkClick: l
						} = this.props, {
							loggedInUserId: c
						} = this.context, d = We.a.getOriginalTweet(o);
						return d && d.card && !this.hasMedia && (!i || Ge.a.isPollCard(d.card.name)) && d.card ? a.createElement(He.a, {
							card: {
								name: d.card.name,
								url: d.card.url,
								binding_values: d.card.binding_values,
								users: d.card.users
							},
							cardContext: {
								locationKey: e,
								viewerUserId: c,
								tweetId: d.id_str,
								tweetPermalink: d.permalink,
								tweetUserId: d.user.id_str
							},
							nativeID: s ? r.b : void 0,
							onCardLinkClick: l,
							preventVideoPlayback: t,
							promotedContent: n
						}) : null
					})
				}
				render() {
					const {
						nativeID: e,
						style: t
					} = this.props, n = this._renderInlineMedia(), o = this._renderForwardPivot(), i = this._maybeRenderSensitiveContent(this._renderQuoteTweet() || this._renderCard());
					return n || i || o ? a.createElement(h.a, {
						"aria-labelledby": e ? [r.l, r.b].join(" ") : void 0,
						nativeID: e,
						style: t
					}, n, o, i ? a.createElement(h.a, {
						style: Qe.gap
					}, i) : null) : null
				}
				get hasMedia() {
					const {
						tweet: e
					} = this.props, t = We.a.getOriginalTweet(e);
					return t.extended_entities && t.extended_entities.media && this.props.withTweetMedia
				}
				get quoteTweetHasMedia() {
					const {
						tweet: e
					} = this.props, t = We.a.getOriginalTweet(e);
					return !!(t.quoted_status && t.quoted_status.entities && t.quoted_status.entities.media && t.quoted_status.entities.media.length > 0)
				}
			}
			i()(Ye, "defaultProps", {
				withQuoteTweetMedia: !0,
				withTweetMedia: !0,
				withCardLinks: !1
			}), i()(Ye, "contextType", s.a);
			const Qe = m.a.create(e => ({
				gap: {
					marginTop: e.spaces.xSmall
				},
				mediaPivotGap: {
					marginTop: e.spaces.xxSmall
				}
			}));
			var Je = Ye,
				$e = n("03wC"),
				Ze = n("TuTd");
			const et = (e, t) => Object(Ze.a)(e, t.tweetId);
			var tt = Object(v.a)().propsFromState(() => ({
					liveCounts: et
				})).adjustStateProps(({
					liveCounts: e
				}) => ({
					liveLikeCount: e && e.likeCount,
					liveQuoteCount: e && e.quoteCount,
					liveRetweetCount: e && e.retweetCount
				})),
				nt = n("Irs7"),
				ot = n("MtXG");
			const it = c.a.fd80ffbf,
				rt = c.a.d58baa7e,
				at = m.a.theme.spacesPx.medium;
			class st extends a.PureComponent {
				constructor(e) {
					super(e), i()(this, "_renderQuoteTweetTimelinePivot", () => {
						const {
							permalink: e
						} = this.props;
						return a.createElement(u.a, {
							link: e + "/retweets/with_comments",
							onPress: this._handleQuoteTweetPivotScribeOnClick,
							style: lt.quoteTweetPivot,
							withDarkerInteractiveBackground: !1
						}, a.createElement(p.c, {
							color: "primary"
						}, it))
					}), i()(this, "_updateStateIfChanged", (e, t) => n => {
						const {
							nativeEvent: {
								layout: {
									width: o
								}
							}
						} = n;
						o !== e() && t(o)
					}), i()(this, "_handleQuoteTweetStatLayout", this._updateStateIfChanged(() => this.state.quoteTweetLabelWidth, e => this.setState({
						quoteTweetLabelWidth: e
					}))), i()(this, "_handleRetweetStatLayout", this._updateStateIfChanged(() => this.state.retweetLabelWidth, e => this.setState({
						retweetLabelWidth: e
					}))), i()(this, "_handleLikeStatLayout", this._updateStateIfChanged(() => this.state.likeLabelWidth, e => this.setState({
						likeLabelWidth: e
					}))), i()(this, "_handleStatGroupLayout", this._updateStateIfChanged(() => this.state.groupWidth, e => this.setState({
						groupWidth: e
					}))), i()(this, "_handleRetweetScribeOnClick", () => {
						const {
							analytics: e
						} = this.props;
						e.scribe({
							element: "retweet_stat",
							action: "click"
						})
					}), i()(this, "_handleQuoteTweetScribeOnClick", () => {
						const {
							analytics: e
						} = this.props;
						e.scribe({
							element: "quote_tweet_stat",
							action: "click"
						})
					}), i()(this, "_handleQuoteTweetPivotScribeOnClick", () => {
						const {
							analytics: e
						} = this.props;
						e.scribe({
							element: "quote_tweet_pivot",
							action: "click"
						})
					}), this.state = {
						retweetLabelWidth: void 0,
						likeLabelWidth: void 0,
						quoteTweetLabelWidth: void 0,
						groupWidth: void 0
					}
				}
				componentDidMount() {
					const {
						analytics: e,
						quoteTweetCount: t,
						isNonCompliantTweet: n
					} = this.props;
					n && e.scribe({
						element: "quote_tweet_pivot",
						action: "impression"
					}), t && t > 0 && e.scribe({
						element: "quote_tweet_stat",
						action: "impression"
					})
				}
				render() {
					const {
						isNonCompliantTweet: e
					} = this.props;
					return e ? this._renderQuoteTweetTimelinePivot() : this._renderStats()
				}
				_renderLikesStat(e) {
					const t = rt(e),
						{
							permalink: n
						} = this.props;
					return a.createElement(h.a, {
						onLayout: this._handleLikeStatLayout
					}, a.createElement(X.a, null, o => a.createElement(ot.a, {
						link: n + "/likes",
						onPress: o()
					}, a.createElement(c.a.I18NFormatMessage, {
						$i18n: "e4eeeefe"
					}, a.createElement(ot.a.Value, {
						animated: !0,
						count: e
					}, c.a.ha054943({
						displayCount: t
					})), a.createElement(ot.a.Label, null, c.a.d260af55({
						count: e
					}))))))
				}
				_renderRetweetsStat(e) {
					const t = rt(e),
						{
							permalink: n
						} = this.props;
					return a.createElement(h.a, {
						onLayout: this._handleRetweetStatLayout
					}, a.createElement(X.a, null, o => a.createElement(ot.a, {
						link: n + "/retweets",
						onPress: o(this._handleRetweetScribeOnClick)
					}, a.createElement(c.a.I18NFormatMessage, {
						$i18n: "b07c7c02"
					}, a.createElement(ot.a.Value, {
						animated: !0,
						count: e
					}, c.a.j142cb3f({
						displayCount: t
					})), a.createElement(ot.a.Label, null, c.a.e59a4e90({
						count: e
					}))))))
				}
				_renderQuoteTweetsStat(e) {
					const t = rt(e),
						{
							permalink: n
						} = this.props;
					return a.createElement(h.a, {
						onLayout: this._handleQuoteTweetStatLayout
					}, a.createElement(X.a, null, o => a.createElement(ot.a, {
						link: n + "/retweets/with_comments",
						onPress: o(this._handleQuoteTweetScribeOnClick)
					}, a.createElement(c.a.I18NFormatMessage, {
						$i18n: "f0259953"
					}, a.createElement(ot.a.Value, {
						animated: !0,
						count: e
					}, c.a.f6e12705({
						displayCount: t
					})), a.createElement(ot.a.Label, null, c.a.e2414184({
						count: e
					}))))))
				}
				_renderStats() {
					const {
						likeCount: e,
						quoteTweetCount: t,
						retweetCount: n,
						style: o
					} = this.props, {
						groupWidth: i,
						retweetLabelWidth: r,
						likeLabelWidth: s,
						quoteTweetLabelWidth: l
					} = this.state, c = r && l && s && i && r + at + s + at + l > i;
					return n || e || t ? a.createElement(h.a, {
						onLayout: this._handleStatGroupLayout,
						style: i ? null : lt.hidden
					}, a.createElement(ot.a.Group, {
						style: [lt.detailItemContainer, lt.detailItem, lt.noWrap, o]
					}, n ? this._renderRetweetsStat(n) : null, t ? this._renderQuoteTweetsStat(t) : null, e && !c ? this._renderLikesStat(e) : null), c && e ? a.createElement(ot.a.Group, {
						style: [lt.detailItemContainer, lt.detailItem, o]
					}, this._renderLikesStat(e)) : null) : null
				}
			}
			const lt = m.a.create(e => ({
				detailItem: {
					paddingHorizontal: e.spaces.xxSmall,
					paddingVertical: e.spaces.small
				},
				detailItemContainer: {
					borderTopColor: e.colors.borderColor,
					borderTopStyle: "solid",
					borderTopWidth: "1px",
					flexDirection: "row"
				},
				hidden: {
					visibility: "hidden"
				},
				noWrap: {
					flexWrap: "nowrap"
				},
				quoteTweetPivot: {
					borderTopColor: e.colors.borderColor,
					borderTopStyle: "solid",
					borderTopWidth: "1px",
					paddingVertical: e.spaces.small
				}
			}));
			var ct = Object(nt.a)(st);
			var dt = tt((function(e) {
					const {
						isNonCompliantTweet: t,
						liveQuoteCount: n,
						liveRetweetCount: o,
						liveLikeCount: i,
						tweetLikeCount: r,
						tweetPermalink: s,
						tweetQuoteTweetCount: l,
						tweetRetweetCount: c
					} = e;
					return a.createElement(ct, {
						isNonCompliantTweet: t,
						likeCount: i || r,
						permalink: s,
						quoteTweetCount: n || l,
						retweetCount: o || c
					})
				})),
				ht = n("TIdA"),
				ut = n("DNho"),
				pt = n("oSwX");
			const mt = ht.a.createLayoutCache(),
				bt = ({
					onClick: e,
					onHoverCardScreenNameClick: t,
					promotedContent: n,
					forwardRef: o,
					screenName: i,
					uri: r,
					withHoverCard: s,
					withLink: l
				}) => a.createElement(h.a, {
					style: gt.avatarWrapper
				}, a.createElement(ut.a.Consumer, null, ({
					avatarSize: c
				}) => a.createElement(pt.default, {
					avatarRef: o,
					imageLayoutCache: mt,
					onClick: e,
					onHoverCardScreenNameClick: t,
					promotedContent: n,
					screenName: i,
					size: c,
					style: gt.avatar,
					uri: r,
					withHoverCard: s,
					withLink: l
				})));
			bt.defaultProps = {
				withHoverCard: !0,
				withLink: !0
			};
			const gt = m.a.create(e => ({
				avatar: {
					display: "block",
					width: "100%"
				},
				avatarWrapper: {
					flexShrink: 1,
					flexGrow: 0,
					width: "100%"
				}
			}));
			var ft = a.forwardRef((e, t) => {
					const n = t && "function" == typeof t ? t : void 0;
					return a.createElement(bt, Z()({}, e, {
						forwardRef: n
					}))
				}),
				_t = n("Olb6"),
				yt = n("ir4X"),
				wt = n("jV+4"),
				vt = n("21zW"),
				Ct = n("aA1u"),
				Et = n("4zmP"),
				Tt = n("kY28"),
				xt = n("GBcw"),
				kt = n("eaaO"),
				It = n("8bWS");
			const St = c.a.f277e949,
				Pt = c.a.d2c7a41c,
				Rt = c.a.ee79367a,
				Ot = c.a.cfd94063,
				At = c.a.d58baa7e,
				Mt = c.a.e71f32d0,
				Lt = c.a.e5d2277e,
				Dt = c.a.gf5e9ea6,
				jt = c.a.e2f2b658;
			class Nt extends a.Component {
				constructor(...e) {
					super(...e), i()(this, "state", {
						focused: !1,
						followTopicButtonXMidpoint: void 0
					}), i()(this, "_transformPromotedUrl", J.a.bind(null, this.context.featureSwitches)), i()(this, "_renderInlineConvoControlsEducation", () => {
						const {
							tweet: e,
							hideConversationControlsEducationText: t
						} = this.props, {
							focused: n
						} = this.state, o = We.a.getOriginalTweet(e);
						if (!o.conversation_control) return null;
						const i = o.id_str,
							s = o.conversation_control.policy,
							l = o.conversation_control.conversation_owner.screen_name;
						return !this.context.featureSwitches.isTrue("conversation_controls_notifying_participants_enabled") || o.limited_actions || t ? null : a.createElement(kt.a, {
							canReply: !0,
							screenName: l,
							scribeElement: "conversation_control_context",
							style: Ft.conversationControlsAnchor,
							tweetId: i,
							value: s
						}, a.createElement(kt.c, {
							nativeID: n ? r.e : void 0,
							screenName: l,
							size: "small",
							style: Ft.conversationControlsEducationInline,
							value: s
						}))
					}), i()(this, "_renderDetailConvoControlsEducation", () => {
						const {
							tweet: e
						} = this.props, {
							focused: t
						} = this.state, n = this.context.featureSwitches.isTrue("conversation_controls_notifying_participants_enabled"), o = We.a.getOriginalTweet(e), i = this._getIsTreeRoot();
						if (!o.conversation_control) return null;
						const s = o.conversation_control.policy,
							l = o.conversation_control.conversation_owner.screen_name;
						return a.createElement(kt.b, {
							canReply: n && !o.limited_actions,
							nativeID: t ? r.e : void 0,
							screenName: l,
							size: "normal",
							style: [Ft.conversationControlsEducationBlock, i && Ft.conversationControlsEducationBlockTreeRoot],
							value: s
						})
					}), i()(this, "_renderPromotedDetails", () => {
						const {
							onPromotedDisclaimerLearnMoreClick: e,
							onPoliticalSponsorWebsiteClick: t,
							onPromotedIndicatorClick: n,
							promotedContent: o,
							promotedContentAdvertiser: i,
							tweet: r
						} = this.props;
						return e && t && n ? a.createElement(K, {
							onPoliticalSponsorWebsiteClick: t,
							onPromotedDisclaimerLearnMoreClick: e,
							onPromotedIndicatorClick: n,
							promotedContent: o,
							promotedContentAdvertiser: i,
							style: Ft.topMargin,
							tweet: r
						}) : null
					}), i()(this, "_renderTreeInlineReply", () => {
						const {
							onReply: e
						} = this.props;
						return a.createElement(R, {
							onClick: e,
							promptLabel: Pt
						})
					}), i()(this, "_renderModeratedRepliesIcon", () => {
						const {
							hasModeratedReplies: e,
							onModeratedIconClick: t,
							tweet: n
						} = this.props;
						return e ? a.createElement(_t.a, {
							link: n.permalink + "/hidden",
							onPress: t
						}) : null
					}), i()(this, "_renderBirdwatchNotesIcon", () => {
						const {
							onBirdwatchNotesIconClick: e,
							tweet: t
						} = this.props;
						return t.has_birdwatch_notes && this.context.featureSwitches.isTrue("responsive_web_birdwatch_consumption_enabled") ? a.createElement(Ae, {
							onPress: e,
							tweetId: t.id_str
						}) : null
					}), i()(this, "_handleFocus", () => {
						const {
							onFocus: e
						} = this.props;
						this.setState({
							focused: !0
						}), e && e()
					}), i()(this, "_handleBlur", () => {
						const {
							onBlur: e
						} = this.props;
						this.setState({
							focused: !1
						}), e && e()
					}), i()(this, "_getIsExpanded", () => this._getIsTreeRoot() || this.props.isFocal || this.props.isTweetDetail), i()(this, "_renderTweetText", () => {
						const {
							isFocal: e,
							isTweetDetail: t,
							excludeCardUrl: n,
							onEntityClick: o,
							linkify: i,
							hitHighlights: s,
							tweet: l,
							withCardLinks: c,
							withInlineMedia: d,
							withQuotedTweetLinks: h
						} = this.props, u = We.a.getOriginalTweet(l), p = this._getIsTreeRoot(), m = p || e ? "xLarge" : "normal";
						return e || p || t ? a.createElement(Ie, {
							disableTranslation: u.user.protected,
							displayTextRange: u.display_text_range,
							entities: u.entities,
							excludeCardUrl: n,
							lang: u.lang,
							linkify: !0,
							nativeID: this.state.focused ? r.r : void 0,
							onEntityClick: o,
							quotedTweetId: u.quoted_status && u.quoted_status.id_str,
							quotedTweetPermalink: u.quoted_status_permalink,
							size: m,
							style: Ft.expandedTweetText,
							supplementalLang: u.supplemental_language,
							text: u.text,
							transformUrl: this._transformUrl,
							tweetId: u.id_str,
							withOriginalText: !0,
							withQuoteLinks: We.a.isQuotedTweetUnavailable(u)
						}) : a.createElement(ge.a, {
							displayTextRange: u.display_text_range,
							entities: u.entities,
							excludeCardUrl: n,
							hitHighlights: s,
							lang: u.lang,
							linkify: i,
							nativeID: this.state.focused ? r.r : void 0,
							onEntityClick: this.props.onEntityClick,
							quotedTweetId: u.quoted_status && u.quoted_status.id_str,
							quotedTweetPermalink: u.quoted_status_permalink,
							size: m,
							text: u.text,
							transformUrl: this._transformUrl,
							withCardLinks: c,
							withMediaLinks: !d,
							withQuoteLinks: h || We.a.isQuotedTweetUnavailable(u)
						})
					}), i()(this, "_handleSocialContextLayoutChanged", () => {
						if (this._followTopicButtonRef) {
							const {
								left: e,
								width: t
							} = this._followTopicButtonRef.getBoundingClientRect(), n = e + t / 2;
							this.setState({
								followTopicButtonXMidpoint: n
							})
						}
					}), i()(this, "_setFollowTopicButtonRef", e => {
						e && (this._followTopicButtonRef = e)
					}), i()(this, "_transformUrl", e => {
						var t;
						return this._transformPromotedUrl(e, null == (t = this.props.promotedContent) ? void 0 : t.click_tracking_info)
					})
				}
				render() {
					var e, t;
					const {
						conversationTreeMetadata: n,
						isFocal: o,
						isUnread: i,
						isTweetDetail: s,
						onCaretClick: l,
						onClick: c,
						promotedContent: d,
						renderCurationActionMenu: u,
						to: b,
						tweet: g,
						withActionsDisabled: f
					} = this.props, {
						focused: y
					} = this.state, w = We.a.getOriginalTweet(g), {
						user: v
					} = w, C = this._getConversationPosition(), E = this._getIsConversationStart(), T = !!(w.favorite_count || w.reply_count || w.quote_count || w.retweet_count), x = this._isPromotedContentVisible(), k = d && x ? a.createElement(W.a, {
						contentAuthorId: v.id_str,
						nativeID: this.state.focused ? r.k : void 0,
						promotedContent: d,
						style: Ft.promotedIndicator
					}) : null, I = n && a.createElement(p.c, {
						nativeID: this.state.focused ? r.f : void 0,
						style: m.a.visuallyHidden
					}, Rt({
						conversationTreeDepth: n.depth.toString()
					})), S = s && !!w.in_reply_to_status_id_str || C && !E, P = C && !C.isEnd, R = "string" == typeof b ? {
						pathname: b
					} : b, O = this._getIsTreeRoot(), M = n && n.ancestorConnector, L = n && n.descendantConnector, D = n && n.indents, j = R ? Object.assign({}, R, {
						anchorless: !0
					}) : void 0, N = this._getIsExpanded() ? "detail" : "inline", F = ["community", "by_invitation"].includes(null == (e = w.conversation_control) ? void 0 : e.policy) && !w.limited_actions && (null == (t = w.conversation_control) ? void 0 : t.invite_via_mention);
					return a.createElement(a.Fragment, null, a.createElement($e.b, {
						actionMenu: u ? a.createElement(A.a, {
							isDisabled: f,
							onClick: l,
							renderActionMenu: u,
							style: Ft.caret,
							testID: Le.a.caret
						}) : null,
						avatar: this._renderAvatar(),
						deepThreadButton: this._renderDeepThreadButton(),
						focused: y,
						hasEngagement: T,
						indents: D,
						interactive: !O,
						isTreeRoot: O,
						isTweetDetail: s,
						isUnread: i,
						link: o ? void 0 : j,
						onBlur: this._handleBlur,
						onFocus: this._handleFocus,
						onPress: O ? void 0 : c,
						selfThreadCTA: this._renderSelfThreadCTA(),
						socialContext: this._renderSocialContext(),
						userLabel: v.highlightedLabel ? a.createElement(h.a, {
							style: Ft.row
						}, a.createElement(yt.a, {
							label: v.highlightedLabel
						})) : null,
						userName: this._renderUserName(),
						withBottomLine: D ? L : P,
						withElbow: D ? "side" === M : void 0,
						withTopLine: D ? "top" === M : S
					}, I, this._renderTombstoneOrTweetContent(), this._renderExpandedContent(), "inline" === N ? this._renderInlineConvoControlsEducation() : null, this._renderTweetActions(), O || o || s ? null : k, "detail" === N ? this._renderDetailConvoControlsEducation() : null, F && "detail" === N ? a.createElement(_.b, null) : null))
				}
				_renderUserName() {
					const {
						onAvatarClick: e,
						onScreenNameClick: t,
						promotedContent: n,
						tweet: o,
						withUserHoverCard: i
					} = this.props, s = We.a.getOriginalTweet(o), {
						user: l
					} = s, c = this._getIsExpanded(), d = this._isPromotedContentVisible(), u = a.createElement(wt.a, {
						isProtected: l.protected,
						isVerified: l.verified,
						name: l.name,
						nativeID: this.state.focused ? r.j : void 0,
						onAvatarClick: e,
						onLinkClick: this.props.onScreenNameClick,
						onScreenNameClick: t,
						promotedContent: n,
						screenName: l.screen_name,
						withHoverCard: i,
						withLink: !!this.props.onScreenNameClick,
						withStackedLayout: c
					}), p = a.createElement(h.a, {
						style: Ft.innerRow
					}, u, a.createElement(vt.a, null), this._renderTimestamp());
					return d || c ? u : p
				}
				_renderExpandedContent() {
					const {
						isFocal: e,
						onAnalyticsClick: t,
						tweet: n,
						isTweetDetail: o
					} = this.props, i = this._getIsTreeRoot(), r = We.a.getOriginalTweet(n), {
						created_at: s,
						place: l,
						source: c,
						source_name: d
					} = r;
					return e || i || o ? a.createElement(a.Fragment, null, a.createElement(h.a, {
						style: Ft.footerContainer
					}, a.createElement(h.a, {
						style: Ft.footerContent
					}, a.createElement(Ct.a, {
						linkColor: "gray600",
						place: l && l.full_name,
						placeLink: l && l.id ? "/places/" + l.id : void 0,
						source: c && d ? d : void 0,
						sourceLink: "https://help.twitter.com/using-twitter/how-to-tweet#source-labels",
						style: Ft.timeLocSource,
						timestamp: s,
						timestampLink: r.permalink
					}), a.createElement(h.a, {
						style: Ft.footerIcons
					}, this._renderModeratedRepliesIcon(), this._renderBirdwatchNotesIcon())), this._renderPromotedDetails()), a.createElement(Ue, {
						loggedInUserId: this.context.loggedInUserId,
						onAnalyticsClick: t,
						tweet: r
					}), a.createElement(dt, {
						isNonCompliantTweet: "non_compliant" === r.limited_actions,
						tweetId: r.id_str,
						tweetLikeCount: r.favorite_count,
						tweetPermalink: r.permalink,
						tweetQuoteTweetCount: r.quote_count,
						tweetRetweetCount: r.retweet_count
					})) : null
				}
				_renderSelfThreadCTA() {
					const {
						onSelfThreadClick: e,
						onSelfThreadImpression: t,
						tweet: n
					} = this.props, o = We.a.getOriginalTweet(n), i = this._shouldShowSelfThreadWithAvatar();
					return this._shouldShowSelfThread() ? a.createElement(q.a, {
						avatarUrl: i ? o.user.profile_image_url_https : void 0,
						onClick: e,
						onImpression: t,
						style: Ft.selfThreadCTA,
						to: n.permalink,
						userName: o.user.screen_name,
						withConversationLine: i
					}) : null
				}
				_renderDeepThreadButton() {
					var e;
					const {
						conversationTreeMetadata: t,
						onDeepThreadClick: n,
						tweet: o
					} = this.props;
					if (!(null == t ? void 0 : t.showDeepThreadButton)) return null;
					const i = We.a.getOriginalTweet(o),
						r = ((null == (e = this.context.history.location.state) ? void 0 : e.overflow) || 0) + 1,
						s = {
							pathname: o.permalink,
							state: {
								overflow: r
							}
						};
					return a.createElement(h.a, {
						style: Ft.deepThreadButton
					}, a.createElement(g, {
						name: i.user.name,
						onClick: n,
						to: s
					}))
				}
				_shouldShowSelfThread() {
					const {
						conversationPosition: e,
						tweet: t,
						withSelfThread: n
					} = this.props, o = We.a.getOriginalTweet(t);
					return n && !e && o.self_thread
				}
				_shouldShowSelfThreadWithAvatar() {
					const {
						shouldSelfThreadIncludeAvatar: e,
						tweet: t
					} = this.props, n = We.a.getOriginalTweet(t);
					return this._shouldShowSelfThread() && e && !n.in_reply_to_status_id_str
				}
				_getConversationPosition() {
					return this._shouldShowSelfThreadWithAvatar() ? {
						isStart: !0,
						isEnd: !1
					} : this.props.conversationPosition
				}
				_getIsConversationStart() {
					const {
						tweet: e
					} = this.props, t = this._getConversationPosition(), n = We.a.getOriginalTweet(e);
					return t && (t.isStart || !n.in_reply_to_status_id_str)
				}
				_getIsTreeRoot() {
					const {
						conversationTreeMetadata: e
					} = this.props, t = this._getConversationPosition();
					return !!(t && t.isStart && e && e.indents)
				}
				_isPromotedContentVisible() {
					const {
						promotedContent: e
					} = this.props;
					return e && "earned" !== Object(w.a)(e)
				}
				_renderTopicEducationHeader() {
					const {
						topic: e
					} = this.props, {
						followTopicButtonXMidpoint: t
					} = this.state;
					return e ? a.createElement(Et.a, {
						arrowPositionStart: t,
						headline: Mt,
						nativeID: this.state.focused ? r.h : void 0,
						shouldCenterText: !0,
						text: Lt({
							topicName: e.name
						}),
						withPrimaryBackground: !0
					}) : void 0
				}
				_renderTopicActions(e) {
					var t;
					const {
						injectedFeedbackItem: n,
						topic: o
					} = this.props;
					if (!o) return;
					const i = null == n || null == (t = n.markNotInterestedTopic) ? void 0 : t.onClick,
						s = [Ft.spacingVertical, e && (o.following ? Ft.followingTopicButtonWrapper : Ft.followTopicButtonWrapper)],
						l = e ? Ft.largeNotInterestedButtonWrapper : Ft.notInterestedButtonWrapper;
					return a.createElement(h.a, {
						style: Ft.topicActions
					}, e ? null : a.createElement(vt.a, {
						style: [Ft.topicMiddot, Ft.spacingVertical]
					}), a.createElement(h.a, {
						ref: this._setFollowTopicButtonRef,
						style: s
					}, a.createElement(y.a, {
						ariaDescribedBy: r.h,
						isTransparent: !e,
						showRelationshipChangeConfirmation: !1,
						size: e ? "small" : "smallCompact",
						topic: o,
						useDefaultText: !1
					})), i || e && !o.following ? a.createElement(h.a, {
						style: l
					}, a.createElement(L.a, {
						onPress: i,
						pullRight: !0,
						size: "small",
						topicId: o.id,
						type: e ? "neutral" : "text",
						withIconOnly: !e
					})) : null)
				}
				_renderTopicContextTombstone() {
					const {
						onUndoTopicNotInterestedClick: e
					} = this.props;
					return a.createElement(h.a, {
						style: Ft.socialContextTombstone
					}, a.createElement(Q.a, {
						actionText: Dt,
						children: jt,
						inline: !0,
						onClick: e
					}))
				}
				_renderSocialContext() {
					const {
						conversationPosition: e,
						isTweetDetail: t,
						topic: n,
						socialContext: o,
						withSocialContext: i
					} = this.props;
					if (!i || !o || this._isPromotedContentVisible()) return null;
					const s = e && !this._getIsConversationStart(),
						{
							contextType: l,
							isSelfRetweet: c,
							landingUrl: d,
							name: h,
							screenName: u,
							text: p,
							topicContext: m
						} = o,
						b = this.context.featureSwitches.isTrue("topics_new_social_context_enabled"),
						g = m && Object(It.a)(m),
						f = m && Object(It.b)(m),
						_ = this._getIsExpanded() && g && !f && this.context.featureSwitches.isTrue("topics_tweet_details_recommended_topic_context_enabled");
					if (_ && (null == n ? void 0 : n.not_interested)) return this._renderTopicContextTombstone();
					const y = _ ? "xLarge" : b ? "large" : "small",
						w = _ ? Ft.microTopMargin : b && g ? Ft.topMargin : void 0;
					return a.createElement(Y.a, {
						bottomControl: _ ? this._renderTopicActions(_) : void 0,
						contextType: l,
						iconSize: y,
						iconStyle: w,
						link: d ? Object(D.b)(d) : void 0,
						nativeID: this.state.focused ? r.q : void 0,
						onLayout: this._handleSocialContextLayoutChanged,
						retweetData: {
							name: h,
							screenName: u,
							isSelfRetweet: c
						},
						rightControl: b && g && !_ ? this._renderTopicActions(_) : void 0,
						style: b || _ ? Ft.socialContextExtraPadding : Ft.socialContextPadding,
						testID: z.a.socialContext,
						text: p,
						textColor: _ ? "normal" : "gray600",
						textSize: _ ? "large" : "small",
						topControl: b && f ? this._renderTopicEducationHeader() : void 0,
						topicData: n && !_ ? m : void 0,
						weight: b || _ ? "bold" : "normal",
						withBottomBorder: g && this.context.featureSwitches.isTrue("topics_new_social_context_bottom_border_enabled"),
						withColoredIcon: this.context.featureSwitches.isTrue("topics_new_social_context_icon_color_enabled"),
						withLeftPadding: !s && !t
					})
				}
				_renderReplyContext() {
					const {
						isTweetDetail: e,
						tweet: t
					} = this.props, n = We.a.getOriginalTweet(t), {
						conversationTreeMetadata: o,
						onReplyContextClick: i,
						replyContext: s,
						isFocal: l
					} = this.props;
					if (this._shouldShowSelfThread() || s !== Tt.a.ReplyContextTypes.Isolated || !n.in_reply_to_status_id_str || o && !l) return null;
					const c = this._getIsTreeRoot();
					return a.createElement(Tt.a, {
						displayTextRange: n.display_text_range,
						inReplyToName: n.in_reply_to_name,
						inReplyToScreenName: n.in_reply_to_screen_name,
						inReplyToStatusIdStr: n.in_reply_to_status_id_str,
						inReplyToUserIdStr: n.in_reply_to_user_id_str,
						nativeID: this.state.focused ? r.m : void 0,
						onClick: i,
						style: [Ft.replyContext, (c || l) && Ft.replyContextBig, e && Ft.replyContextTweetDetail],
						tweetPermalink: n.permalink,
						userMentionsEntities: n.entities.user_mentions
					})
				}
				_renderTweetActions() {
					const {
						articleClicked: e,
						contextTweet: t,
						enableKeyboardShortcuts: n,
						forwardPivotInfo: o,
						isInlineReplyEnabled: i,
						isTweetDetail: s,
						onReplyPress: l,
						promotedContent: c,
						tweet: d,
						withActionsDisabled: h,
						withRemoveFromBookmarks: u
					} = this.props, {
						focused: p
					} = this.state, m = this._getIsExpanded();
					return this.props.withActions ? a.createElement(Me.a, {
						actionSize: m ? "large" : void 0,
						articleClicked: e,
						displayStyle: m ? "block" : void 0,
						enableKeyboardShortcuts: n,
						forwardPivotInfo: d.softIntervention || o,
						nativeID: p ? r.t : void 0,
						onReplyPress: l,
						promotedContent: c,
						style: [m && Ft.actionBarTweetDetail, m && !s && Ft.actionBarTreeExpanded, !m && Ft.actionBar, i && Ft.actionBarWithInlineReply],
						tweet: t || d,
						withActionsDisabled: h,
						withAnalyticsAction: !m,
						withCount: !s,
						withRemoveFromBookmarks: u
					}) : null
				}
				_renderTimestamp() {
					const {
						tweet: e,
						withTimestampLink: t,
						promotedContent: n
					} = this.props, {
						focused: o
					} = this.state, i = We.a.getOriginalTweet(e), s = t ? {
						pathname: i.permalink,
						state: {
							contextTweetId: i.id_str,
							promotedContent: n
						}
					} : void 0;
					return a.createElement(xt.a, {
						link: s,
						nativeID: o ? r.s : void 0,
						timestamp: i.created_at
					})
				}
				_renderAvatar() {
					const {
						onAvatarClick: e,
						onScreenNameClick: t,
						promotedContent: n,
						tweet: o,
						withAvatarLink: i,
						withUserHoverCard: r
					} = this.props, s = We.a.getOriginalTweet(o), {
						user: l
					} = s;
					return a.createElement(ft, {
						onClick: e,
						onHoverCardScreenNameClick: t,
						promotedContent: n,
						screenName: l.screen_name,
						uri: l.profile_image_url_https,
						withHoverCard: r,
						withLink: i
					})
				}
				_renderTombstone(e) {
					const {
						conversationTreeMetadata: t,
						onClick: n,
						tweet: o
					} = this.props, i = We.a.getOriginalTweet(o), {
						richText: r
					} = e, s = this._getIsExpanded();
					return i && e && r ? a.createElement(h.a, {
						style: Ft.spacingVertical
					}, a.createElement(Q.a, {
						actionLink: s ? void 0 : i.permalink,
						actionText: s ? void 0 : St,
						conversationTreeMetadata: t,
						inline: !0,
						onClick: s ? void 0 : n
					}, a.createElement(G.c, {
						entities: r.entities,
						rtl: r.rtl,
						text: r.text
					}))) : null
				}
				_renderTombstoneOrTweetContent() {
					const {
						tweet: e
					} = this.props, t = We.a.getOriginalTweet(this.props.tweet).tombstoneInfo || e.tombstoneInfo, n = this._getIsExpanded();
					return a.createElement(a.Fragment, null, t ? this._renderTombstone(t) : null, n || !t ? this._renderTweetContentBody() : null)
				}
				_renderTweetContentBody() {
					return a.createElement(a.Fragment, null, this._renderReplyContext(), a.createElement(h.a, null, this._renderTweetText()), a.createElement(h.a, null, this._renderRichContent()))
				}
				_renderRichContent() {
					const {
						dataSaverMode: e,
						enableKeyboardShortcuts: t,
						forwardPivotInfo: n,
						innerForwardPivotInfo: o,
						linkableQuotedTweet: i,
						onCardLinkClick: s,
						onMediaClick: l,
						preventVideoPlayback: c,
						promotedContent: d,
						quotedTweetTombstoneInfo: h,
						tweet: u,
						withCardLinks: p,
						withInlineMedia: m,
						withUserHoverCard: b
					} = this.props;
					return a.createElement(Je, {
						dataSaverMode: e,
						displayLocation: this._getIsExpanded() ? "detail" : "timeline",
						displayMediaMetadata: this._getIsExpanded(),
						enableKeyboardShortcuts: t,
						forwardPivotInfo: n,
						innerForwardPivotInfo: o,
						linkableQuotedTweet: i,
						nativeID: this.state.focused ? r.n : void 0,
						onCardLinkClick: s,
						onMediaClick: l,
						preventVideoPlayback: c,
						promotedContent: d,
						quotedTweetTombstoneInfo: h,
						singleImageMaxAspectRatio: 10,
						singleImageMinAspectRatio: this._getIsExpanded() ? .1 : 16 / 9,
						tweet: u,
						withCardLinks: p,
						withQuoteTweetMedia: m,
						withTweetMedia: m,
						withUserHoverCard: b
					})
				}
				_renderStat(e, t) {
					const n = At(e);
					return a.createElement(X.a, null, e => a.createElement(p.c, {
						link: t,
						onPress: e(),
						size: "small"
					}, Ot({
						peopleCount: n
					})))
				}
			}
			i()(Nt, "contextType", s.a), i()(Nt, "displayName", "Tweet"), i()(Nt, "defaultProps", {
				displayBlocked: !1,
				isInlineReplyEnabled: !1,
				isTweetDetail: !1,
				linkify: !0,
				onBirdwatchNotesIconClick: M.a,
				onModeratedIconClick: M.a,
				onModeratedIconShown: M.a,
				replyContext: Tt.a.ReplyContextTypes.Isolated,
				withActions: !1,
				withAvatarLink: !0,
				withCardLinks: !1,
				withInlineMedia: !0,
				withQuotedTweetLinks: !1,
				withRemoveFromBookmarks: !1,
				withSocialContext: !1,
				withTimestampLink: !0,
				withUserHoverCard: !0
			});
			const Ft = m.a.create(e => ({
				conversationControlsAnchor: {
					alignSelf: "flex-start",
					display: "inline-flex",
					flexDirection: "row"
				},
				conversationControlsEducationInline: {
					marginTop: e.spaces.xSmall
				},
				conversationControlsEducationBlock: {
					borderTopColor: e.colors.borderColor,
					borderTopWidth: e.borderWidths.small,
					paddingVertical: e.spaces.small
				},
				conversationControlsEducationBlockWithInlineReply: {
					borderTopColor: e.colors.borderColor,
					borderTopWidth: e.borderWidths.small,
					marginTop: e.spaces.xSmall,
					paddingVertical: e.spaces.small
				},
				conversationControlsEducationBlockTreeRoot: {
					borderBottomColor: e.colors.borderColor,
					borderBottomWidth: e.borderWidths.small,
					paddingVertical: e.spaces.small
				},
				row: {
					flexDirection: "row",
					justifyContent: "space-between",
					marginBottom: e.spaces.micro
				},
				replyContextTweetDetail: {
					marginTop: e.spaces.xSmall,
					marginBottom: 0
				},
				replyContextBig: {
					marginBottom: 0
				},
				replyContext: {
					flexDirection: "row",
					justifyContent: "space-between",
					marginBottom: e.spaces.micro
				},
				selfThreadCTA: {
					marginHorizontal: `calc(-1 * ${e.componentDimensions.gutterHorizontal})`
				},
				innerRow: {
					alignItems: "baseline",
					flexDirection: "row",
					flexShrink: 1
				},
				caret: {
					marginStart: e.spaces.medium
				},
				actionBar: {
					marginTop: e.spaces.xSmall
				},
				actionBarTweetDetail: {
					borderTopColor: e.colors.borderColor,
					borderTopStyle: "solid",
					borderTopWidth: "1px",
					height: e.spaces.xxLarge
				},
				actionBarTreeExpanded: {
					justifyContent: "space-between"
				},
				actionsBarNarrow: {
					minWidth: 250,
					marginRight: "auto"
				},
				actionBarWithInlineReply: {
					borderBottomColor: e.colors.borderColor,
					borderBottomStyle: "solid",
					borderBottomWidth: "1px"
				},
				promotedIndicator: {
					marginTop: e.spaces.xSmall
				},
				topMargin: {
					marginTop: e.spaces.xxSmall
				},
				microTopMargin: {
					marginTop: e.spaces.micro
				},
				socialContextExtraPadding: {
					marginBottom: e.spaces.xxSmall
				},
				socialContextPadding: {
					marginBottom: e.spaces.micro
				},
				socialContextTombstone: {
					paddingBottom: e.componentDimensions.gutterVertical
				},
				spacingVertical: {
					marginVertical: e.spaces.xxSmall
				},
				deepThreadButton: {
					flexDirection: "row",
					marginTop: e.spaces.small
				},
				expandedTweetText: {
					marginTop: e.spaces.xSmall
				},
				footerContainer: {
					marginVertical: e.spaces.small
				},
				footerContent: {
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between"
				},
				footerIcons: {
					flexDirection: "row"
				},
				timeLocSource: {
					marginRight: e.spaces.xSmall
				},
				topicActions: {
					flexDirection: "row",
					flexGrow: 1
				},
				topicMiddot: {
					paddingRight: 0
				},
				followTopicButtonWrapper: {
					marginVertical: e.spaces.xxSmall,
					paddingRight: e.spaces.xxSmall,
					width: "50%"
				},
				followingTopicButtonWrapper: {
					marginVertical: e.spaces.xxSmall,
					width: "100%"
				},
				notInterestedButtonWrapper: {
					alignItems: "flex-end",
					flexGrow: 1
				},
				largeNotInterestedButtonWrapper: {
					marginVertical: e.spaces.xxSmall,
					paddingLeft: e.spaces.xxSmall,
					width: "50%"
				}
			}));
			t.b = Object(O.a)(Nt)
		},
		BQZD: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			}));
			var o = n("WpDa"),
				i = n("oQhu"),
				r = n("eR3e"),
				a = n("ZNT5");
			const s = Object(i.a)(e => e.isTrue("responsive_web_graphql_bookmarks") ? Object(a.a)({
				timelineId: "bookmarks",
				getEndpoint: e => e.Bookmarks.fetch,
				getEndpointParams: ({
					count: e,
					cursor: t
				}) => ({
					count: e,
					cursor: "string" == typeof t ? t : void 0
				}),
				formatResponse: o.a,
				context: "FETCH_BOOKMARKS_TIMELINE",
				perfKey: "bookmarksGraphQL"
			}) : Object(a.a)({
				timelineId: "bookmarks",
				getEndpoint: e => e.URT.fetchBookmarks,
				getEndpointParams: e => e,
				context: "FETCH_BOOKMARKS_TIMELINE",
				perfKey: "bookmarks"
			}));
			t.a = s;
			const l = () => (e, t, {
					api: n,
					featureSwitches: o
				}) => n.Tweets.removeAllBookmarks().then(() => e(s(o).deleteTimeline())),
				c = r.p.bind(null, "bookmarks")
		},
		BV3T: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("q9Zt"),
				r = n("3XMw");
			const a = n.n(r).a.b2311b7f;
			class s extends o.PureComponent {
				render() {
					return o.createElement(i.a, {
						onRetry: null,
						title: a
					})
				}
			}
			t.a = s
		},
		BqYg: function(e, t) {
			function n(e, t, n) {
				var o, i, r, a, s;

				function l() {
					var c = Date.now() - a;
					c < t && c >= 0 ? o = setTimeout(l, t - c) : (o = null, n || (s = e.apply(r, i), r = i = null))
				}
				null == t && (t = 100);
				var c = function() {
					r = this, i = arguments, a = Date.now();
					var c = n && !o;
					return o || (o = setTimeout(l, t)), c && (s = e.apply(r, i), r = i = null), s
				};
				return c.clear = function() {
					o && (clearTimeout(o), o = null)
				}, c.flush = function() {
					o && (s = e.apply(r, i), r = i = null, clearTimeout(o), o = null)
				}, c
			}
			n.debounce = n, e.exports = n
		},
		C1yv: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("SrIh");
			class i {
				constructor(e) {
					this.configuration = e, this._alreadyReported = {}
				}
				supportsEntryType(e) {
					return this.configuration.hasOwnProperty(e)
				}
				getDisplayType(e) {
					const t = this.configuration[e.type];
					return t ? t.selectDisplayType(e) : (this._reportMissingEntryType(e.type), null)
				}
				getNeedsLoad(e) {
					const t = this._getHandlerOrLoader(e);
					return !(!t || !t.loader)
				}
				_getHandlerOrLoader(e) {
					const t = this.configuration[e.type];
					if (!t) return this._reportMissingEntryType(e.type), null;
					const n = t.selectDisplayType(e),
						o = t.handlers[n];
					return o || (this._reportMissingDisplayType(e.type, n), null)
				}
				getHandler(e) {
					const t = this._getHandlerOrLoader(e);
					return t ? t.loader ? null : t : null
				}
				_reportMissingEntryType(e) {
					this._alreadyReported[e] || (this._alreadyReported[e] = {}, Object(o.a)("HandlerRegistry: No configuration for entryType=" + e))
				}
				_reportMissingDisplayType(e, t) {
					this._alreadyReported[e] || (this._alreadyReported[e] = {}), this._alreadyReported[e][t] || (this._alreadyReported[e][t] = !0, Object(o.a)(`HandlerRegistry: No configuration for entryType=${e}, displayType=${t}`))
				}
			}
		},
		CGyZ: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return W
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("3XMw"),
				s = n.n(a),
				l = n("pu5c"),
				c = n("Jwn+");
			const d = s.a.i8cfb6e6,
				h = s.a.ea100d69,
				u = s.a.fe40537e,
				p = s.a.a4c5be9b,
				m = r.createElement(l.a, null);
			var b = ({
					disabled: e,
					displayMode: t,
					onUnblock: n,
					showRelationshipChangeConfirmation: o,
					size: i,
					style: a,
					testID: s,
					userScreenName: l
				}) => r.createElement(c.a, {
					buttonDefaultLabel: d,
					buttonHoverLabel: h,
					buttonType: "destructive",
					confirmationSheetConfirmLabel: h,
					confirmationSheetHeadline: u({
						screenName: l
					}),
					confirmationSheetText: p,
					disabled: e,
					displayMode: t,
					icon: m,
					onClick: n,
					showRelationshipChangeConfirmation: o,
					size: i,
					style: a,
					testID: s
				}),
				g = (n("IAdD"), n("Lsrn")),
				f = n("k/Ka");
			const _ = (e = {}) => Object(f.a)("svg", Object.assign({}, e, {
				style: [g.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M19.192 9.3c-.205 0-.403-.085-.546-.236l-2.66-2.824c-.283-.302-.27-.776.032-1.06.303-.286.776-.27 1.06.03L19 7.25 22.157.877c.184-.37.63-.52 1.005-.34.372.185.523.635.34 1.006L19.864 8.88c-.108.22-.318.374-.562.41-.036.006-.073.01-.11.01zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94z"
			})));
			_.metadata = {
				width: 24,
				height: 24
			};
			var y = _,
				w = n("pwey");
			const v = s.a.j6161cab,
				C = s.a.i4bb9ef6,
				E = s.a.ad2be9fb,
				T = s.a.jbfce1d8,
				x = r.createElement(y, null),
				k = r.createElement(w.a, null);
			class I extends r.Component {
				constructor(e, t) {
					super(e, t), i()(this, "_updateText", () => {
						const {
							buttonText: e,
							type: t
						} = this.props;
						this._followLabel = e.follow, this._followingLabel = e.following, this._unfollowLabel = e.unfollow, "user" === t ? this._confirmationSheetText = E : "topic" === t ? this._confirmationSheetText = T : "list" === t && (this._confirmationSheetText = void 0)
					}), i()(this, "_handlePress", () => {
						const {
							isFollowing: e,
							onUnfollow: t,
							onFollow: n
						} = this.props;
						e ? t() : (n(), this.setState({
							hasJustFollowed: !0
						}))
					}), i()(this, "_handleHoverOut", () => {
						this.state.hasJustFollowed && this.setState({
							hasJustFollowed: !1
						})
					}), this.state = {
						hasJustFollowed: !1
					}
				}
				render() {
					const {
						ariaDescribedBy: e,
						style: t,
						disabled: n,
						displayMode: o,
						isFollowing: i,
						isTransparent: a,
						nativeID: s,
						testID: l,
						size: d,
						name: h,
						showRelationshipChangeConfirmation: u,
						withConfirmationSheetText: p,
						type: m
					} = this.props;
					this._updateText();
					const {
						hasJustFollowed: b
					} = this.state, g = "only-text" !== o ? i ? x : k : void 0, f = i ? this._followingLabel : this._followLabel, _ = a ? "text" : i ? "primary" : "secondary";
					let y, w;
					if (i) {
						y = b ? this._followingLabel : this._unfollowLabel;
						const e = a ? "text" : "primary",
							t = a ? "destructiveText" : "destructive";
						w = b ? e : t
					} else y = this._followLabel, w = a ? "text" : "secondary";
					return r.createElement(c.a, {
						ariaDescribedBy: e,
						buttonDefaultLabel: f,
						buttonHoverLabel: y,
						buttonHoverType: w,
						buttonType: _,
						confirmationSheetConfirmLabel: this._unfollowLabel,
						confirmationSheetHeadline: "user" === m ? v({
							screenName: h
						}) : C({
							title: h
						}),
						confirmationSheetText: p ? this._confirmationSheetText : void 0,
						disabled: n,
						displayMode: o,
						icon: g,
						nativeID: s,
						onClick: this._handlePress,
						onHoverOut: this._handleHoverOut,
						showRelationshipChangeConfirmation: i && u,
						size: d,
						style: t,
						testID: l
					})
				}
			}
			var S = I,
				P = n("tI3i"),
				R = n.n(P),
				O = n("fs1G"),
				A = n("upxf");
			const M = s.a.f305840e,
				L = s.a.e23b20af,
				D = s.a.fe04d899,
				j = s.a.i036327c,
				N = s.a.j95e3097,
				F = r.createElement(A.a, null);
			var B = ({
				disabled: e,
				displayMode: t,
				onCancelPendingFollow: n,
				showRelationshipChangeConfirmation: o,
				size: i,
				style: a,
				testID: s,
				userScreenName: l
			}) => r.createElement(c.a, {
				buttonDefaultLabel: M,
				buttonHoverLabel: L,
				buttonType: "primary",
				confirmationSheetCancelLabel: L,
				confirmationSheetConfirmLabel: D,
				confirmationSheetHeadline: j,
				confirmationSheetText: N({
					screenName: l
				}),
				disabled: e,
				displayMode: t,
				icon: F,
				onClick: n,
				showRelationshipChangeConfirmation: o,
				size: i,
				style: a,
				testID: s
			});
			const U = s.a.ec72e2f8,
				H = s.a.c3befdbd,
				z = s.a.d3029dbc;
			class W extends r.Component {
				constructor(e) {
					super(e), this._validateProps()
				}
				componentDidUpdate() {
					this._validateProps()
				}
				render() {
					const {
						ariaDescribedBy: e,
						isBlocking: t,
						isFollowRequestSent: n,
						buttonText: o,
						disabled: i,
						displayMode: a,
						name: s,
						size: l,
						style: c,
						showRelationshipChangeConfirmation: d,
						onUnblock: h,
						isFollowing: u,
						isTransparent: p,
						onUnfollow: m,
						onFollow: g,
						onCancelPendingFollow: f,
						testIDs: _,
						nativeID: y,
						withConfirmationSheetText: w,
						type: v
					} = this.props, C = n;
					return t ? r.createElement(b, {
						disabled: i,
						displayMode: a,
						onUnblock: h,
						showRelationshipChangeConfirmation: d,
						size: l,
						style: c,
						testID: null == _ ? void 0 : _.unblock,
						userScreenName: s
					}) : C ? r.createElement(B, {
						disabled: i,
						displayMode: a,
						onCancelPendingFollow: f,
						showRelationshipChangeConfirmation: d,
						size: l,
						style: c,
						testID: null == _ ? void 0 : _.cancel,
						userScreenName: s
					}) : r.createElement(S, {
						ariaDescribedBy: e,
						buttonText: o,
						disabled: i,
						displayMode: a,
						isFollowing: u,
						isTransparent: p,
						name: s,
						nativeID: y,
						onFollow: g,
						onUnfollow: m,
						showRelationshipChangeConfirmation: d,
						size: l,
						style: c,
						testID: u ? null == _ ? void 0 : _.unfollow : null == _ ? void 0 : _.follow,
						type: v,
						withConfirmationSheetText: w
					})
				}
				_validateProps() {
					const {
						name: e,
						showRelationshipChangeConfirmation: t
					} = this.props, n = t && "string" == typeof e, o = !t;
					R()(n || o, "When showRelationshipChangeConfirmation is true, name must be defined.")
				}
			}
			i()(W, "defaultProps", {
				buttonText: {
					follow: U,
					following: H,
					unfollow: z
				},
				displayMode: "only-text",
				isBlocking: !1,
				isFollowRequestSent: !1,
				isTransparent: !1,
				onCancelPendingFollow: O.a,
				onUnblock: O.a,
				showRelationshipChangeConfirmation: !0,
				withConfirmationSheetText: !0
			})
		},
		"CK8+": function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("k/Ka"),
				c = n("hwrY"),
				d = n("vlSS"),
				h = n("MWbm");

			function u(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? u(Object(n), !0).forEach((function(t) {
						m(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function m(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var g = {},
				f = Object(s.forwardRef)((function(e, t) {
					var n = e.accessibilityLabel,
						o = e.activeThumbColor,
						i = void 0 === o ? "#009688" : o,
						r = e.activeTrackColor,
						a = void 0 === r ? "#A3D3CF" : r,
						u = e.disabled,
						p = void 0 !== u && u,
						m = e.onValueChange,
						f = e.style,
						y = void 0 === f ? g : f,
						w = e.thumbColor,
						v = void 0 === w ? "#FAFAFA" : w,
						C = e.trackColor,
						E = void 0 === C ? "#939393" : C,
						T = e.value,
						x = void 0 !== T && T,
						k = function(e, t) {
							if (null == e) return {};
							var n, o, i = {},
								r = Object.keys(e);
							for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, ["accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"]),
						I = Object(s.useRef)(null);

					function S(e) {
						var t = "focus" === e.nativeEvent.type ? "0px 1px 3px rgba(0,0,0,0.5), 0 0 0 10px rgba(0,0,0,0.1)" : "0px 1px 3px rgba(0,0,0,0.5)";
						null != I.current && (I.current.style.boxShadow = t)
					}
					var P = d.a.flatten(y),
						R = P.height,
						O = P.width,
						A = R || 20,
						M = Object(c.a)(A, 2),
						L = O > M ? O : M,
						D = Object(c.a)(A, .5),
						j = !0 === x ? null != E && "object" == typeof E ? E.true : a : null != E && "object" == typeof E ? E.false : E,
						N = x ? i : v,
						F = A,
						B = F,
						U = [_.root, y, p && _.cursorDefault, {
							height: A,
							width: L
						}],
						H = [_.track, {
							backgroundColor: p ? "#D5D5D5" : j,
							borderRadius: D
						}],
						z = [_.thumb, x && _.thumbActive, {
							backgroundColor: p ? "#BDBDBD" : N,
							height: F,
							marginStart: x ? Object(c.a)(B, -1) : 0,
							width: B
						}],
						W = Object(l.a)("input", {
							accessibilityLabel: n,
							checked: x,
							disabled: p,
							onBlur: S,
							onChange: function(e) {
								null != m && m(e.nativeEvent.target.checked)
							},
							onFocus: S,
							ref: t,
							style: [_.nativeControl, _.cursorInherit],
							type: "checkbox"
						});
					return s.createElement(h.a, b({}, k, {
						style: U
					}), s.createElement(h.a, {
						style: H
					}), s.createElement(h.a, {
						ref: I,
						style: z
					}), W)
				}));
			f.displayName = "Switch";
			var _ = d.a.create({
					root: {
						cursor: "pointer",
						userSelect: "none"
					},
					cursorDefault: {
						cursor: "default"
					},
					cursorInherit: {
						cursor: "inherit"
					},
					track: p({}, d.a.absoluteFillObject, {
						height: "70%",
						margin: "auto",
						transitionDuration: "0.1s",
						width: "100%"
					}),
					thumb: {
						alignSelf: "flex-start",
						borderRadius: "100%",
						boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
						start: "0%",
						transform: [{
							translateZ: 0
						}],
						transitionDuration: "0.1s"
					},
					thumbActive: {
						start: "100%"
					},
					nativeControl: p({}, d.a.absoluteFillObject, {
						height: "100%",
						margin: 0,
						opacity: 0,
						padding: 0,
						width: "100%"
					})
				}),
				y = f,
				w = n("7nmT"),
				v = n.n(w),
				C = n("rHpw");
			class E extends s.Component {
				constructor(...e) {
					super(...e), a()(this, "_updateStyles", e => {
						if (e) {
							const t = v.a.findDOMNode(e);
							t && [...t.childNodes].forEach(e => {
								e instanceof HTMLElement && (e.style.borderColor = "transparent", e.style.borderWidth = "1px")
							})
						}
					})
				}
				render() {
					const {
						colors: e
					} = C.a.theme;
					return s.createElement(y, i()({
						activeThumbColor: e.primary,
						activeTrackColor: e.lightPrimary,
						ref: this._updateStyles
					}, this.props))
				}
			}
			a()(E, "displayName", "@twitter/Switch"), E.propTypes = {};
			t.a = E
		},
		CaKu: function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
				return i
			}));
			var i = function() {
				function e() {}
				return e.isAvailable = function() {
					return void 0 === o && (o = "function" == typeof document.queryCommandSupported && document.queryCommandSupported("copy")), o
				}, e.getString = function() {
					return Promise.resolve("")
				}, e.setString = function(e) {
					var t = !1,
						n = document.body;
					if (n) {
						var o = document.createElement("span");
						o.textContent = e, o.style.opacity = "0", o.style.position = "absolute", o.style.whiteSpace = "pre-wrap", o.style.userSelect = "auto", n.appendChild(o);
						var i = window.getSelection();
						i.removeAllRanges();
						var r = document.createRange();
						r.selectNodeContents(o), i.addRange(r);
						try {
							document.execCommand("copy"), t = !0
						} catch (e) {}
						i.removeAllRanges(), n.removeChild(o)
					}
					return t
				}, e
			}()
		},
		D5n3: function(e, t, n) {
			"use strict";
			var o = n("RqPI"),
				i = n("XOJV"),
				r = n("SRyb");
			t.a = (e, t) => (n, a, {
				api: s,
				featureSwitches: l
			}) => n(i.a.unretweet(e, t)).then(() => {
				const t = Object(o.g)(a()),
					s = i.a.select(a(), e),
					c = s && (s.retweeted_status ? i.a.select(a(), s.retweeted_status) : s);
				if (t && c && (c.user !== t || c.id_str !== e)) return n([Object(r.a)(l, t).removeTweets({
					[e]: !0
				}), Object(r.a)(l, t, !0).removeTweets({
					[e]: !0
				})])
			})
		},
		DQLs: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("IAdD"), n("JtPf"), n("kYxP");
			var o = n("ERkP"),
				i = n("rHpw"),
				r = n("MWbm");

			function a(e) {
				const {
					onAnimationEnd: t,
					onError: n,
					loop: i = !1,
					autoplay: a = !0
				} = e, d = o.useRef({
					animationLoaded: !1
				}), h = o.useRef(null);
				return o.useEffect(() => {
					function o(e, n) {
						"function" == typeof t && t(n), e && e.destroy()
					}
					const {
						animationLoaded: r
					} = d.current;
					r || (d.current.animationLoaded = !0, s.load().then(t => {
						if (t && h.current) {
							const r = Object.assign({
									container: h.current,
									renderer: "svg",
									loop: i,
									autoplay: a
								}, "object" == typeof e.animation ? {
									animationData: e.animation
								} : {
									path: e.animation
								}),
								s = t.loadAnimation(r);
							s.onError = e => {
								const t = new l(e);
								"function" == typeof n && n(t), o(s, t)
							}, s.addEventListener("complete", () => {
								o(s)
							})
						}
					}))
				}), o.createElement(r.a, null, o.createElement(r.a, {
					style: [e.animationContainerStyle, c.centerAnimation]
				}, o.createElement("div", {
					ref: h,
					style: e.animationStyle
				})))
			}
			a.Prepare = function() {
				return o.useEffect(() => {
					s.load()
				}, []), null
			};
			const s = {
				load: () => n.e(171).then(n.t.bind(null, "Ys2B", 7))
			};
			class l extends Error {
				constructor(e, ...t) {
					super(...t), Error.captureStackTrace && Error.captureStackTrace(this, l), this.name = "LottieAnimationError", this.lottieError = e
				}
			}
			const c = i.a.create(e => ({
				centerAnimation: {
					alignItems: "center",
					justifyContent: "center"
				}
			}))
		},
		DtVZ: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("+/5o"),
				i = n("ERkP"),
				r = n("v6aA"),
				a = n("Psss"),
				s = n("MWbm"),
				l = n("yrzJ"),
				c = n("j7Bv"),
				d = n("t62R"),
				h = n("rHpw"),
				u = n("3XMw"),
				p = n.n(u);
			const m = p.a.g6185a9e,
				b = p.a.i004dc43,
				g = Object.freeze({
					followers: ({
						screenName: e
					}) => i.createElement(p.a.I18NFormatMessage, {
						$i18n: "g3e1c82a"
					}, i.createElement(l.a, {
						color: "normal",
						screenName: e
					})),
					community: ({
						screenName: e
					}) => i.createElement(p.a.I18NFormatMessage, {
						$i18n: "bf820456"
					}, i.createElement(l.a, {
						color: "normal",
						screenName: e
					})),
					by_invitation: ({
						screenName: e
					}) => i.createElement(p.a.I18NFormatMessage, {
						$i18n: "gf734b81"
					}, i.createElement(l.a, {
						color: "normal",
						screenName: e
					}))
				}),
				f = Object.freeze({
					followers: ({
						screenName: e
					}) => i.createElement(p.a.I18NFormatMessage, {
						$i18n: "d280d17b"
					}, i.createElement(l.a, {
						color: "normal",
						screenName: e
					})),
					community: ({
						screenName: e
					}) => i.createElement(p.a.I18NFormatMessage, {
						$i18n: "c08958f6"
					}, i.createElement(l.a, {
						color: "normal",
						screenName: e
					})),
					by_invitation: ({
						screenName: e
					}) => i.createElement(p.a.I18NFormatMessage, {
						$i18n: "a3b353a6"
					})
				}),
				_ = e => {
					const {
						nativeID: t,
						size: n,
						text: r,
						title: a,
						Icon: l,
						iconSize: h,
						style: u,
						textStyle: p
					} = e;
					return i.createElement(s.a, {
						style: [w.highlightedEducation, w.root, u]
					}, l && i.createElement(c.a, {
						Icon: l,
						color: "primary",
						size: h || "large"
					}), i.createElement(s.a, {
						style: [w.highlightedEducationText, p]
					}, !!a && i.createElement(d.c, {
						color: "normal",
						nativeID: t,
						weight: "bold"
					}, a), i.createElement(d.c, {
						color: "normal",
						nativeID: t && o.d,
						size: n,
						withInteractiveStyling: !1
					}, r)))
				},
				y = e => {
					const {
						featureSwitches: t
					} = i.useContext(r.a), {
						canReply: n,
						nativeID: o,
						value: s,
						screenName: l,
						size: c
					} = e, d = t.isTrue("conversation_controls_flexible_participation_enabled"), h = a.a[s], u = d ? f[s] : g[s], p = i.createElement(u, {
						screenName: l
					}), y = n ? b : m;
					return i.createElement(_, {
						Icon: h,
						nativeID: o,
						size: c,
						text: p,
						title: y
					})
				};
			y.defaultProps = {
				size: "small"
			}, t.b = y;
			const w = h.a.create(e => ({
				root: {
					flexDirection: "row",
					alignItems: "center"
				},
				educationText: {
					marginLeft: e.spaces.xxSmall
				},
				icon: {
					width: e.spaces.small,
					height: e.spaces.small,
					color: e.colors.gray600
				},
				highlightedEducation: {
					backgroundColor: e.colors.unreadCellBackground,
					borderRadius: e.borderRadii.xLarge,
					marginTop: e.spaces.xSmall,
					marginBottom: e.spaces.small,
					paddingVertical: e.spaces.small,
					paddingLeft: e.spaces.small
				},
				highlightedEducationText: {
					marginHorizontal: e.spaces.small,
					flexDirection: "column",
					width: "80%"
				}
			}))
		},
		E0cF: function(e, t, n) {
			"use strict";
			t.a = {
				isQuotedTweetUnavailable: e => {
					let t = !1;
					return e.quoted_status ? (0 === Object.keys(e.quoted_status).length || e.quoted_status.user.blocking || e.quoted_status.isDeleted) && (t = !0) : e.is_quote_status && (t = !0), t
				},
				getOriginalTweet: e => e.retweeted_status || e
			}
		},
		EJJl: function(e, t, n) {
			"use strict";
			n("IAdD"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("rxPX"),
				h = n("0KEI"),
				u = n("3zvM"),
				p = n("lMB6"),
				m = n("iChn");
			const b = Object(u.e)({
					namespace: "translationsProfiles",
					fetchOneContext: "FETCH_PROFILE_TRANSLATION",
					fetchOneEndpoint: e => (t, n) => e.Users.fetchProfileTranslation(t, n).then(g),
					fetchOneParams: e => ({
						profileUserId: e
					})
				}),
				g = e => {
					const t = Array.isArray(e) ? e : [e];
					return {
						entities: {
							translationsProfiles: Object(m.a)(t, e => e.profileUserId)
						}
					}
				};
			var f = p.a.register(b);
			const _ = (e, t) => f.select(e, t.userId),
				y = (e, t) => f.selectFetchStatus(e, t.userId);
			var w = Object(d.a)().propsFromState(() => ({
					translation: _,
					translationFetchStatus: y
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(h.d)("TRANSLATE_USER_BIO"),
					fetchTranslation: f.fetchOneIfNeeded
				})).withAnalytics(),
				v = n("3XMw"),
				C = n.n(v),
				E = n("PdwO"),
				T = n("pBrB");
			const x = C.a.ad7a451e;
			class k extends c.Component {
				constructor(...e) {
					super(...e), l()(this, "_fetchTranslation", () => {
						const {
							createLocalApiErrorHandler: e,
							fetchTranslation: t,
							userId: n
						} = this.props;
						t(n).catch(e())
					}), l()(this, "_renderTranslation", () => {
						const e = this.props,
							{
								translation: t
							} = e,
							n = a()(e, ["analytics", "createLocalApiErrorHandler", "disableTranslation", "fetchTranslation", "style", "translation", "translationFetchStatus", "withOriginalText"]);
						if (!t) return;
						const o = Object.assign({}, n, {
							description: t.profileTranslation.translation,
							entities: {
								description: t.profileTranslation.entities
							},
							withheldDescription: void 0,
							withheldEntities: void 0
						});
						return c.createElement(T.a, o)
					})
				}
				componentDidMount() {
					const {
						analytics: e,
						disableTranslation: t
					} = this.props;
					!t && e.scribe({
						element: "translate",
						action: "impression"
					})
				}
				render() {
					const e = this.props,
						{
							disableTranslation: t,
							style: n,
							translation: o,
							translationFetchStatus: r,
							userId: s,
							withOriginalText: l
						} = e,
						d = a()(e, ["analytics", "createLocalApiErrorHandler", "disableTranslation", "fetchTranslation", "style", "translation", "translationFetchStatus", "userId", "withOriginalText"]);
					return c.createElement(E.a, {
						disableTranslation: t,
						fetchTranslation: this._fetchTranslation,
						key: s,
						originLanguage: o && o.profileTranslation.localizedSourceLanguage,
						style: n,
						translateButtonText: x,
						translatedMessage: this._renderTranslation(),
						translationFetchStatus: r,
						withOriginalText: l
					}, c.createElement(T.a, i()({}, d, {
						userId: s
					})))
				}
			}
			const I = w(k);
			t.a = I
		},
		EUHl: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = Object.freeze({
				CLIENT: "CLIENT",
				URT: "URT"
			})
		},
		EbOo: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("3XMw");
			const i = {
				defaultToast: {
					text: n.n(o).a.b6878b09
				},
				showToast: !0
			}
		},
		EfHu: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 2.03c-4.792 0-8.692 3.9-8.692 8.692 0 1.9.603 3.707 1.752 5.234 1.628 2.07 6.278 5.757 6.475 5.912.136.108.3.162.465.162s.33-.054.465-.162c.197-.155 4.847-3.84 6.484-5.925 1.14-1.515 1.74-3.32 1.74-5.222 0-4.79-3.9-8.69-8.69-8.69zm0 12c-1.933 0-3.5-1.568-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.566 3.5 3.5-1.567 3.5-3.5 3.5z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		EfWO: function(e, t, n) {
			"use strict";
			var o = n("ssRi"),
				i = n("s+nu");

			function r() {
				this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
			}
			t.parse = y, t.resolve = function(e, t) {
				return y(e, !1, !0).resolve(t)
			}, t.resolveObject = function(e, t) {
				return e ? y(e, !1, !0).resolveObject(t) : t
			}, t.format = function(e) {
				i.isString(e) && (e = y(e));
				return e instanceof r ? e.format() : r.prototype.format.call(e)
			}, t.Url = r;
			var a = /^([a-z0-9.+-]+:)/i,
				s = /:[0-9]*$/,
				l = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
				c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
				d = ["'"].concat(c),
				h = ["%", "/", "?", ";", "#"].concat(d),
				u = ["/", "?", "#"],
				p = /^[+a-z0-9A-Z_-]{0,63}$/,
				m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
				b = {
					javascript: !0,
					"javascript:": !0
				},
				g = {
					javascript: !0,
					"javascript:": !0
				},
				f = {
					http: !0,
					https: !0,
					ftp: !0,
					gopher: !0,
					file: !0,
					"http:": !0,
					"https:": !0,
					"ftp:": !0,
					"gopher:": !0,
					"file:": !0
				},
				_ = n("prCu");

			function y(e, t, n) {
				if (e && i.isObject(e) && e instanceof r) return e;
				var o = new r;
				return o.parse(e, t, n), o
			}
			r.prototype.parse = function(e, t, n) {
				if (!i.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
				var r = e.indexOf("?"),
					s = -1 !== r && r < e.indexOf("#") ? "?" : "#",
					c = e.split(s);
				c[0] = c[0].replace(/\\/g, "/");
				var y = e = c.join(s);
				if (y = y.trim(), !n && 1 === e.split("#").length) {
					var w = l.exec(y);
					if (w) return this.path = y, this.href = y, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? _.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
				}
				var v = a.exec(y);
				if (v) {
					var C = (v = v[0]).toLowerCase();
					this.protocol = C, y = y.substr(v.length)
				}
				if (n || v || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
					var E = "//" === y.substr(0, 2);
					!E || v && g[v] || (y = y.substr(2), this.slashes = !0)
				}
				if (!g[v] && (E || v && !f[v])) {
					for (var T, x, k = -1, I = 0; I < u.length; I++) {
						-1 !== (S = y.indexOf(u[I])) && (-1 === k || S < k) && (k = S)
					} - 1 !== (x = -1 === k ? y.lastIndexOf("@") : y.lastIndexOf("@", k)) && (T = y.slice(0, x), y = y.slice(x + 1), this.auth = decodeURIComponent(T)), k = -1;
					for (I = 0; I < h.length; I++) {
						var S; - 1 !== (S = y.indexOf(h[I])) && (-1 === k || S < k) && (k = S)
					} - 1 === k && (k = y.length), this.host = y.slice(0, k), y = y.slice(k), this.parseHost(), this.hostname = this.hostname || "";
					var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
					if (!P)
						for (var R = this.hostname.split(/\./), O = (I = 0, R.length); I < O; I++) {
							var A = R[I];
							if (A && !A.match(p)) {
								for (var M = "", L = 0, D = A.length; L < D; L++) A.charCodeAt(L) > 127 ? M += "x" : M += A[L];
								if (!M.match(p)) {
									var j = R.slice(0, I),
										N = R.slice(I + 1),
										F = A.match(m);
									F && (j.push(F[1]), N.unshift(F[2])), N.length && (y = "/" + N.join(".") + y), this.hostname = j.join(".");
									break
								}
							}
						}
					this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = o.toASCII(this.hostname));
					var B = this.port ? ":" + this.port : "",
						U = this.hostname || "";
					this.host = U + B, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y))
				}
				if (!b[C])
					for (I = 0, O = d.length; I < O; I++) {
						var H = d[I];
						if (-1 !== y.indexOf(H)) {
							var z = encodeURIComponent(H);
							z === H && (z = escape(H)), y = y.split(H).join(z)
						}
					}
				var W = y.indexOf("#"); - 1 !== W && (this.hash = y.substr(W), y = y.slice(0, W));
				var V = y.indexOf("?");
				if (-1 !== V ? (this.search = y.substr(V), this.query = y.substr(V + 1), t && (this.query = _.parse(this.query)), y = y.slice(0, V)) : t && (this.search = "", this.query = {}), y && (this.pathname = y), f[C] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
					B = this.pathname || "";
					var K = this.search || "";
					this.path = B + K
				}
				return this.href = this.format(), this
			}, r.prototype.format = function() {
				var e = this.auth || "";
				e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
				var t = this.protocol || "",
					n = this.pathname || "",
					o = this.hash || "",
					r = !1,
					a = "";
				this.host ? r = e + this.host : this.hostname && (r = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && i.isObject(this.query) && Object.keys(this.query).length && (a = _.stringify(this.query));
				var s = this.search || a && "?" + a || "";
				return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || f[t]) && !1 !== r ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), o && "#" !== o.charAt(0) && (o = "#" + o), s && "?" !== s.charAt(0) && (s = "?" + s), t + r + (n = n.replace(/[?#]/g, (function(e) {
					return encodeURIComponent(e)
				}))) + (s = s.replace("#", "%23")) + o
			}, r.prototype.resolve = function(e) {
				return this.resolveObject(y(e, !1, !0)).format()
			}, r.prototype.resolveObject = function(e) {
				if (i.isString(e)) {
					var t = new r;
					t.parse(e, !1, !0), e = t
				}
				for (var n = new r, o = Object.keys(this), a = 0; a < o.length; a++) {
					var s = o[a];
					n[s] = this[s]
				}
				if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
				if (e.slashes && !e.protocol) {
					for (var l = Object.keys(e), c = 0; c < l.length; c++) {
						var d = l[c];
						"protocol" !== d && (n[d] = e[d])
					}
					return f[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
				}
				if (e.protocol && e.protocol !== n.protocol) {
					if (!f[e.protocol]) {
						for (var h = Object.keys(e), u = 0; u < h.length; u++) {
							var p = h[u];
							n[p] = e[p]
						}
						return n.href = n.format(), n
					}
					if (n.protocol = e.protocol, e.host || g[e.protocol]) n.pathname = e.pathname;
					else {
						for (var m = (e.pathname || "").split("/"); m.length && !(e.host = m.shift()););
						e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== m[0] && m.unshift(""), m.length < 2 && m.unshift(""), n.pathname = m.join("/")
					}
					if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
						var b = n.pathname || "",
							_ = n.search || "";
						n.path = b + _
					}
					return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
				}
				var y = n.pathname && "/" === n.pathname.charAt(0),
					w = e.host || e.pathname && "/" === e.pathname.charAt(0),
					v = w || y || n.host && e.pathname,
					C = v,
					E = n.pathname && n.pathname.split("/") || [],
					T = (m = e.pathname && e.pathname.split("/") || [], n.protocol && !f[n.protocol]);
				if (T && (n.hostname = "", n.port = null, n.host && ("" === E[0] ? E[0] = n.host : E.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === m[0] ? m[0] = e.host : m.unshift(e.host)), e.host = null), v = v && ("" === m[0] || "" === E[0])), w) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, E = m;
				else if (m.length) E || (E = []), E.pop(), E = E.concat(m), n.search = e.search, n.query = e.query;
				else if (!i.isNullOrUndefined(e.search)) {
					if (T) n.hostname = n.host = E.shift(), (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift());
					return n.search = e.search, n.query = e.query, i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
				}
				if (!E.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
				for (var x = E.slice(-1)[0], k = (n.host || e.host || E.length > 1) && ("." === x || ".." === x) || "" === x, I = 0, S = E.length; S >= 0; S--) "." === (x = E[S]) ? E.splice(S, 1) : ".." === x ? (E.splice(S, 1), I++) : I && (E.splice(S, 1), I--);
				if (!v && !C)
					for (; I--; I) E.unshift("..");
				!v || "" === E[0] || E[0] && "/" === E[0].charAt(0) || E.unshift(""), k && "/" !== E.join("/").substr(-1) && E.push("");
				var P, R = "" === E[0] || E[0] && "/" === E[0].charAt(0);
				T && (n.hostname = n.host = R ? "" : E.length ? E.shift() : "", (P = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = P.shift(), n.host = n.hostname = P.shift()));
				return (v = v || n.host && E.length) && !R && E.unshift(""), E.length ? n.pathname = E.join("/") : (n.pathname = null, n.path = null), i.isNull(n.pathname) && i.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
			}, r.prototype.parseHost = function() {
				var e = this.host,
					t = s.exec(e);
				t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
			}
		},
		EjKN: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"
			}), o.createElement("path", {
				d: "M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		EnM6: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("MWbm"),
				s = n("Qwev"),
				l = n("t62R"),
				c = n("5mJL"),
				d = n("PV92"),
				h = n("htQn"),
				u = n("rHpw");
			const p = r.a.i8005e73,
				m = o.createElement(s.a, {
					accessibilityLabel: p
				}),
				b = u.a.create(e => ({
					gap: {
						overflow: "hidden"
					},
					treeGap: {
						flexDirection: "row",
						paddingLeft: e.spaces.small
					},
					treeGapTopLevel: {
						paddingLeft: 0
					},
					connectors: {
						zIndex: 1
					},
					hoverBox: {
						flexGrow: 1,
						marginLeft: e.spaces.xSmall,
						paddingLeft: e.spaces.xxSmall,
						paddingVertical: e.spaces.xxSmall
					},
					hoverBoxIndented: {
						marginLeft: 0
					},
					hoverBoxTopLevel: {
						marginLeft: 0
					},
					dotGroup: {
						alignItems: "center",
						alignSelf: "center",
						flexGrow: 0,
						justifyContent: "space-between",
						position: "relative",
						height: e.spaces.small
					},
					content: {
						flexGrow: 1,
						paddingVertical: e.spaces.xxSmall
					},
					treeContent: {
						paddingHorizontal: e.spaces.xxSmall
					},
					dot: {
						display: "block",
						backgroundColor: e.colors.gray200,
						height: e.componentDimensions.conversationLineWidth,
						width: e.componentDimensions.conversationLineWidth
					}
				}));
			t.a = ({
				label: e,
				link: t,
				isLoading: n,
				indents: i,
				onClick: r,
				withElbow: s
			}) => {
				const u = o.createElement(l.c, {
						color: "link"
					}, e),
					p = o.createElement(c.a, {
						avatarCell: i ? void 0 : o.createElement(o.Fragment, null, o.createElement(a.a, {
							style: b.dot
						}), o.createElement(a.a, {
							style: b.dot
						}), o.createElement(a.a, {
							style: b.dot
						})),
						avatarCellStyle: b.dotGroup,
						cellStyle: [b.content, i && b.treeContent]
					}, n ? m : u);
				return o.createElement(a.a, {
					style: [b.gap, i && b.treeGap, i && 0 === i.length && b.treeGapTopLevel]
				}, i ? o.createElement(d.a, {
					indents: i,
					paddingTop: 5,
					smallFirstCell: !1,
					style: b.connectors,
					wideElbow: 1 === i.length,
					withElbow: !!s
				}) : null, r || t ? o.createElement(h.a, {
					link: n ? void 0 : t,
					onClick: n ? void 0 : r,
					style: [b.hoverBox, i && 0 === i.length && b.hoverBoxTopLevel, i && i.length > 1 && b.hoverBoxIndented],
					withInteractiveStyling: !n
				}, p) : p)
			}
		},
		"Ey+e": function(e, t, n) {
			"use strict";
			n("IAdD"), n("kYxP"), n("ERkP");
			var o = n("AOWc"),
				i = n("6/RC"),
				r = n("cnVF"),
				a = n("E6XO"),
				s = n("sXY3"),
				l = n("tn7R"),
				c = n("+d3d"),
				d = n("oECP"),
				h = n("fs1G");
			let u = {},
				p = 0;
			const m = {
					mount: ["didMount", "willMount"],
					update: ["didUpdate", "willUpdate"]
				},
				b = () => {
					Object(s.a)(u).forEach(([e, t], n) => {
						const o = Object(l.a)(t),
							i = o.length;
						o.forEach(t => {
							Object(s.a)(m).map(([n, [o, s]]) => {
								(e => 1 === e || Math.random() <= .01)(i) && o in t && s in t && Object(a.c)(((e, t) => `${r.q}:lifecycle:${e.toLowerCase()}:${t}`)(e, n), {
									duration_ms: t[o] - t[s]
								})
							})
						})
					}), Object(a.a)(), u = {}
				},
				g = Object(c.a)(b, 2e4) || b,
				f = (e, t = !1) => {
					const n = e.constructor.displayName;
					Object(o.a)(n, e.constructor.name + ' component has "displayName" set.');
					let i = e.__lifecycleIdentifier;
					return !i && t && (p += 1, i = e.__lifecycleIdentifier = p), u[n] && u[n][i] || (u[n] = Object.assign({}, u[n], {
						[i]: {}
					})), [n, i]
				},
				_ = (e, t, n, o) => {
					u[e][t][n] = o
				};
			t.a = i.canUseDOM ? function(e) {
				const t = {
					UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || h.a,
					componentDidMount: e.prototype.componentDidMount || h.a,
					UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || h.a,
					componentDidUpdate: e.prototype.componentDidUpdate || h.a,
					componentWillUnmount: e.prototype.componentWillUnmount || h.a
				};
				return e.prototype.UNSAFE_componentWillMount = function(...e) {
					const [n, o] = f(this, !0);
					t.UNSAFE_componentWillMount.apply(this, e), _(n, o, "willMount", Date.now())
				}, e.prototype.componentDidMount = function(...e) {
					const [n, o] = f(this);
					t.componentDidMount.apply(this, e), _(n, o, "didMount", Date.now()), g()
				}, e.prototype.UNSAFE_componentWillUpdate = function(...e) {
					const [n, o] = f(this, !0);
					t.UNSAFE_componentWillUpdate.apply(this, e), _(n, o, "willUpdate", Date.now())
				}, e.prototype.componentDidUpdate = function(...e) {
					const [n, o] = f(this);
					t.componentDidUpdate.apply(this, e), _(n, o, "didUpdate", Date.now()), g()
				}, e.prototype.componentWillUnmount = function(...e) {
					t.componentWillUnmount.apply(this, e), g()
				}, e
			} : d.a
		},
		"FG+G": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		FITr: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		FQwk: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("rxPX"),
				s = n("RqPI"),
				l = Object(a.a)().propsFromState(() => ({
					viewerCountry: s.k
				})),
				c = n("wrlS"),
				d = n("dzZ/"),
				h = n("3XMw"),
				u = n.n(h),
				p = n("tuLS"),
				m = n("VIKJ"),
				b = n("MWbm"),
				g = n("mjJ+"),
				f = n("t62R"),
				_ = n("rHpw"),
				y = n("FRoe"),
				w = n("FG+G");
			const v = u.a.b7388a56,
				C = u.a.h63a5c3b,
				E = u.a.jc292da4({
					year: (new Date).getFullYear()
				});
			class T extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderMenu", e => t => r.createElement(g.a, {
						isFixed: !0,
						items: this._renderOverflowItems(e),
						onCloseRequested: t
					})), i()(this, "_filterCountry", ({
						country: e
					}) => !e || this.props.viewerCountry && e.indexOf(this.props.viewerCountry.toLowerCase()) > -1), i()(this, "_renderOverflowItems", e => e.map(e => {
						const {
							text: t,
							internal: n,
							link: o
						} = e;
						return {
							text: t,
							link: {
								pathname: o,
								external: !n
							}
						}
					})), i()(this, "_renderItem", ({
						text: e,
						link: t,
						internal: n
					}) => {
						const {
							align: o,
							textColor: i
						} = this.props, a = t ? {
							pathname: t,
							external: !n
						} : void 0;
						return r.createElement(f.c, {
							color: i,
							key: e,
							link: a,
							size: "small",
							style: [x.item, "center" === o && x.itemAlignCenter]
						}, e)
					})
				}
				render() {
					const {
						align: e,
						textColor: t,
						withOverflow: n
					} = this.props, o = d.a.filter(this._filterCountry), i = n ? o.filter(({
						visibleLoggedIn: e
					}) => e) : o, [a, s] = Object(m.a)(i, ({
						legal: e
					}) => e || !n);
					return r.createElement(b.a, {
						accessibilityLabel: v,
						accessibilityRole: "navigation",
						style: [x.root, "center" === e && x.alignCenter]
					}, a.map(this._renderItem), s.length > 0 ? r.createElement(p.a, {
						renderMenu: this._renderMenu(s),
						style: x.item
					}, r.createElement(f.c, {
						color: t,
						size: "small",
						withInteractiveStyling: !0
					}, C, c.b.isTrue("topics_new_social_context_enabled") ? r.createElement(y.a, {
						style: x.icon
					}) : r.createElement(w.a, {
						style: x.icon
					}))) : null, r.createElement(f.c, {
						color: t,
						size: "small",
						style: [x.item, "center" === e && x.itemAlignCenter]
					}, E))
				}
			}
			i()(T, "defaultProps", {
				textColor: "gray600"
			});
			const x = _.a.create(e => ({
					root: {
						flexDirection: "row",
						flexWrap: "wrap",
						paddingHorizontal: e.componentDimensions.gutterHorizontal
					},
					alignCenter: {
						justifyContent: "center",
						paddingVertical: e.componentDimensions.gutterVertical
					},
					item: {
						marginVertical: e.spaces.micro,
						paddingRight: e.spaces.xSmall
					},
					itemAlignCenter: {
						marginVertical: e.spaces.xxSmall,
						paddingRight: e.spaces.small
					},
					icon: {
						height: "1em",
						paddingHorizontal: e.spaces.micro
					}
				})),
				k = l(T);
			t.a = k
		},
		FRNI: function(e, t, n) {
			"use strict";
			t.a = {
				createList: "FloatingActionButtons_CreateList_Button",
				tweet: "FloatingActionButtons_Tweet_Button",
				message: "FloatingActionButtons_Message_Button"
			}
		},
		Fmkq: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "richScribeAction", (function() {
				return d
			}));
			n("IAdD");
			var o = n("lnti"),
				i = n("Rp9C"),
				r = n("X04g"),
				a = n("XOJV"),
				s = n("G6rE");
			const l = [],
				c = Object.freeze({}),
				d = (e, t = c) => (n, i, {
					scribe: r
				}) => {
					const a = i(),
						s = Array.isArray(t.items) ? Object(o.a)(t.items.map(e => u(e, a))) : l,
						c = Object.assign({}, t, {
							items: s
						});
					r.log(e, c)
				},
				h = e => {
					if (e.disclosure_type && e.impression_id) return {
						disclosure_type: e.disclosure_type,
						impression_id: e.impression_id
					}
				},
				u = (e, t) => {
					if (!e.id) return e;
					switch (e.item_type) {
						case r.a.ItemType.USER: {
							const n = s.e.select(t, e.id),
								o = h(e);
							return n ? Object.assign({}, e, i.a.getUserItem(n, o)) : null
						}
						case r.a.ItemType.TWEET: {
							const n = a.a.selectHydrated(t, e.id),
								o = h(e);
							return n ? Object.assign({}, e, i.a.getTweetItem(n, o, void 0, void 0, e)) : null
						}
						default:
							return e
					}
				}
		},
		G1WX: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("QX9J"),
				s = n("LLQb"),
				l = n("pQ3Z"),
				c = n.n(l),
				d = (n("aWzz"), n("Qwev")),
				h = n("t62R"),
				u = n("rHpw"),
				p = n("MWbm");
			const m = ({
				failureMessage: e
			}) => r.createElement(a.a.ViewImpressor, {
				viewType: "loading_failed"
			}, r.createElement(p.a, {
				style: g.root
			}, r.createElement(h.c, null, e)));
			m.propTypes = {};
			const b = ({
				accessibilityLabel: e,
				loadingMessage: t
			}) => r.createElement(a.a.ViewImpressor, {
				viewType: "loading"
			}, r.createElement(p.a, {
				style: g.root
			}, r.createElement(d.a, {
				accessibilityLabel: e
			}), t ? r.createElement(h.c, {
				align: "center",
				size: "xLarge",
				style: g.loadingText,
				weight: "bold"
			}, t) : null));
			b.propTypes = {};
			const g = u.a.create(e => ({
					root: {
						alignItems: "center",
						flexGrow: 1,
						justifyContent: "center",
						paddingVertical: e.spaces.medium,
						paddingHorizontal: e.spaces.xSmall
					},
					activityIndicator: {
						flexGrow: 1
					},
					loadingText: {
						marginTop: e.spaces.xLarge
					},
					retryText: {
						marginBottom: e.spaces.medium
					}
				})),
				f = "failed",
				_ = "loaded",
				y = "loading",
				w = "none";
			class v extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_render", () => {
						const {
							accessibilityLabel: e,
							failureMessage: t,
							fetchStatus: n,
							icon: o,
							loadingMessage: i,
							onRequestRetry: a,
							render: l,
							renderFailure: c,
							retryMessage: d,
							retryable: h
						} = this.props;
						switch (n) {
							case f:
								return h ? r.createElement(s.a, {
									icon: o,
									onRequestRetry: a,
									retryMessage: d
								}) : t ? r.createElement(m, {
									failureMessage: t
								}) : c();
							case y:
								return r.createElement(b, {
									accessibilityLabel: e,
									loadingMessage: i
								});
							case w:
								return null;
							case _:
							default:
								return l()
						}
					})
				}
				shouldComponentUpdate(e) {
					const t = e.fetchStatus === _,
						n = this.props.fetchStatus !== e.fetchStatus;
					return !(!t && !n) || !c()(e, this.props)
				}
				render() {
					const {
						clientEventContext: e,
						fetchStatus: t
					} = this.props, n = this._render();
					return (null == e ? void 0 : e.viewType) && n ? t === _ ? r.createElement(a.a.ViewImpressor, {
						token: null == e ? void 0 : e.token,
						viewType: null == e ? void 0 : e.viewType
					}, n) : r.createElement(a.a.Provider, {
						token: null == e ? void 0 : e.token,
						viewType: null == e ? void 0 : e.viewType
					}, n) : n
				}
			}
			i()(v, "defaultProps", {
				renderFailure: () => null,
				retryable: !0
			}), v.propTypes = {}
		},
		G41x: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("mjJ+"),
				s = n("3XMw"),
				l = n.n(s),
				c = n("fn9Y"),
				d = n("wD1h"),
				h = n("wwsH");
			const u = l.a.jc9298a8,
				p = {
					viewType: "share"
				};
			class m extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderMenu", e => {
						const {
							actionItems: t,
							actionMenuDescription: n,
							onMenuCancel: o
						} = this.props, i = this._combineHandlers(e, o);
						return r.createElement(a.a, {
							description: n,
							items: t,
							onCloseRequested: i,
							shouldCloseOnClick: !0
						})
					}), i()(this, "_combineHandlers", (e, t) => () => {
						e(), t && t()
					})
				}
				render() {
					const {
						activeColor: e,
						color: t,
						enableKeyboardShortcuts: n,
						iconSize: o,
						isDisabled: i,
						isFaded: a,
						onPress: s,
						style: l,
						withCount: m
					} = this.props;
					return r.createElement(h.a, {
						Icon: c.a,
						accessibilityLabel: u,
						activeColor: e,
						clientEventContext: p,
						color: t,
						enableKeyboardShortcuts: n,
						iconSize: o,
						isDisabled: i,
						isFaded: a,
						keyboardShortcut: d.a.shortcuts.share,
						onPress: s,
						renderMenu: a ? void 0 : this._renderMenu,
						style: l,
						withCount: m
					})
				}
			}
		},
		G8HL: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("IAdD"), n("JtPf"), n("kYxP"), n("ERkP"), n("v6aA");
			const o = n("oECP").a
		},
		GBcw: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("2g+p"),
				s = n("t62R"),
				l = n("3XMw"),
				c = n.n(l),
				d = n("rHpw");
			const h = c.a.ccd32093,
				u = c.a.abfcce0d,
				p = c.a.e8733ed8,
				m = c.a.i3b7a017,
				b = c.a.be59d8c3,
				g = c.a.ie5d110e,
				f = c.a.i3d087da,
				_ = c.a.df5f11b3,
				y = c.a.ga8d18c8,
				w = c.a.a91e7d48,
				v = c.a.id952a68,
				C = c.a.ga09ab65,
				E = c.a.c83b901c,
				T = c.a.a55b9fed,
				x = c.a.ccaa970e,
				k = c.a.jade381b,
				I = c.a.d725a288;
			class S extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_onAppForegrounded", e => {
						"active" === e && this.forceUpdate()
					})
				}
				componentDidMount() {
					a.a.addEventListener("change", this._onAppForegrounded)
				}
				componentWillUnmount() {
					a.a.removeEventListener("change", this._onAppForegrounded)
				}
				render() {
					const {
						color: e,
						cutoff: t,
						humanReadable: n,
						link: o,
						nativeID: i,
						timestamp: a,
						style: l
					} = this.props, c = new Date(a), d = !isNaN(c.getTime());
					if (!d) return null;
					const S = k(c),
						R = `${I(c)} · ${S}`,
						{
							label: O,
							aria: A
						} = d ? ((e, t) => {
							const n = Date.now(),
								o = Math.floor((n - e) / 1e3),
								i = new Date(n).getFullYear(),
								r = new Date(e).getFullYear();
							if (o <= -5) return {
								label: x(e),
								aria: x(e)
							};
							if (o <= 0) return {
								label: h,
								aria: h
							};
							if (o < 60) return {
								label: p(o),
								aria: u({
									amountOfTime: m(o)
								})
							};
							if (o < 3600) {
								const e = Math.floor(o / 60);
								return {
									label: b(e),
									aria: u({
										amountOfTime: g(e)
									})
								}
							}
							if (o < 86400) {
								const e = Math.floor(o / 3600);
								return {
									label: f(e),
									aria: u({
										amountOfTime: _(e)
									})
								}
							}
							if (o < 2592e3 && "years" === t) {
								const e = Math.floor(o / 86400);
								return {
									label: y(e),
									aria: u({
										amountOfTime: w(e)
									})
								}
							}
							if (o < 31449600 && "years" === t) {
								const e = Math.floor(o / 2592e3);
								return {
									label: v(e),
									aria: u({
										amountOfTime: C(e)
									})
								}
							}
							if ("years" === t) {
								const e = Math.floor(o / 31449600);
								return {
									label: E(e),
									aria: u({
										amountOfTime: T(e)
									})
								}
							}
							return r === i ? {
								label: x(e),
								aria: x(e)
							} : {
								label: k(e),
								aria: k(e)
							}
						})(c, t) : {};
					return r.createElement(s.c, {
						accessibilityLabel: A,
						color: e,
						hoverLabel: {
							label: R
						},
						link: o,
						nativeID: i,
						style: [l, P.timestamp],
						withInteractiveStyling: !!o
					}, r.createElement("time", {
						dateTime: c.toISOString()
					}, n ? A : O))
				}
			}
			i()(S, "defaultProps", {
				color: "gray600",
				humanReadable: !1
			});
			const P = d.a.create(e => ({
				timestamp: {
					flexShrink: 0,
					whiteSpace: "nowrap"
				}
			}));
			t.a = S
		},
		GOQE: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("k49u"),
				i = n("LVU8"),
				r = n("fs1G");
			const a = {
				[o.a.AddressBookLookupNotFound]: {
					customAction: i.c
				},
				[o.a.GenericUserNotFound]: {
					customAction: r.a
				},
				[o.a.OtherUserSuspended]: {
					customAction: r.a
				},
				showToast: !0
			}
		},
		GliE: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("ajvb"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("qB1G");
			const s = r.a.a3484d21,
				l = r.a.aab2efa8,
				c = r.a.ba21c289,
				d = e => `${e.fullName||""} ${e.score||""}`,
				h = (e, t, n, i, r) => {
					const h = n && r ? ((e, t) => e && t ? e.find(e => e.id === t) : void 0)(n, r) : void 0,
						u = Object(o.a)(t),
						p = e || "",
						m = n && n[0] ? d(n[0]) : "",
						b = n && n[1] ? d(n[1]) : "",
						g = i || "",
						f = h ? l({
							winner: h.fullName
						}) : "",
						_ = t === a.a.Completed ? h ? f : s : g;
					return c({
						gameCategory: p,
						gameState: u,
						accessibleGameClockPeriod: _,
						teamOneLabel: m,
						teamTwoLabel: b
					})
				}
		},
		GygS: function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "e", (function() {
				return x
			}));
			var o = n("ERkP"),
				i = n("eb3s"),
				r = n("3XMw"),
				a = n.n(r),
				s = n("OrGc"),
				l = n("fs1G"),
				c = (n("IAdD"), n("Lsrn")),
				d = n("k/Ka");
			const h = (e = {}) => Object(d.a)("svg", Object.assign({}, e, {
				style: [c.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm0 20c-2.297 0-4.396-.846-6.015-2.237l4.27-4.27c.294-.294.294-.77 0-1.062-.145-.145-.337-.22-.53-.22s-.383.074-.53.22L4.93 17.95C3.57 16.34 2.75 14.264 2.75 12c0-5.1 4.15-9.25 9.25-9.25 2.265 0 4.34.82 5.95 2.178l-4.267 4.266c-.293.293-.293.768 0 1.06.146.147.338.22.53.22s.384-.072.53-.22l4.27-4.268C20.402 7.604 21.25 9.703 21.25 12c0 5.1-4.15 9.25-9.25 9.25z"
			})));
			h.metadata = {
				width: 24,
				height: 24
			};
			var u = h,
				p = n("pu5c");
			const m = a.a.cfd2f35d,
				b = a.a.f9e45cfb,
				g = a.a.fcd4d489,
				f = a.a.a6450e83,
				_ = a.a.hb279a11,
				y = a.a.j546fb79,
				w = a.a.c9623eeb,
				v = a.a.e133be4e,
				C = a.a.h7f25e2b,
				E = Object.freeze({
					TWEET_CARET: "tweet_caret",
					PROFILE: "user_profile",
					LIST_DETAIL: "list_detail",
					RICH_FEEDBACK: "rich_feedback"
				}),
				T = ({
					user: e,
					source: t,
					testID: n,
					blockAction: o,
					blockSubtext: i,
					unblockAction: r,
					unblockSubtext: a
				}) => {
					let c, d = l.a;
					const h = e.blocking ? I(e.screen_name) : k(e.screen_name);
					return t !== E.TWEET_CARET && t !== E.RICH_FEEDBACK || (c = s.d.block, d = e.blocking ? r : o), t !== E.PROFILE && t !== E.LIST_DETAIL || (d = () => {
						e.blocking ? r(h) : o(h)
					}), {
						confirmation: h,
						onClick: d,
						testID: n,
						shortcutKey: c,
						Icon: e.blocking ? u : p.a,
						text: e.blocking ? w({
							screenName: e.screen_name
						}) : g({
							screenName: e.screen_name
						}),
						subText: e.blocking ? a : i ? i(e.screen_name) : void 0
					}
				},
				x = ({
					confirmation: e,
					onClose: t,
					handleConfirm: n
				}) => {
					const {
						confirmButtonType: r,
						label: a,
						headline: s,
						text: l
					} = e;
					return o.createElement(i.a, {
						cancelButtonLabel: m,
						confirmButtonLabel: a,
						confirmButtonType: r,
						headline: s,
						onCancel: t,
						onConfirm: n,
						text: l
					})
				},
				k = e => ({
					confirmButtonType: "destructive",
					headline: b({
						screenName: e
					}),
					label: f,
					text: _({
						screenName: e
					})
				}),
				I = e => ({
					confirmButtonType: "primary",
					headline: y({
						screenName: e
					}),
					label: v,
					text: C
				})
		},
		HSMM: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("dFWS"),
				s = n("wwsH");
			const l = r.a.hdf72269,
				c = r.a.c9940954,
				d = {
					viewType: "reply"
				};
			t.a = ({
				activeColor: e,
				color: t,
				count: n,
				iconSize: i,
				isDisabled: r,
				isFaded: h,
				onPress: u,
				renderWrapper: p,
				style: m,
				testID: b,
				withCount: g
			}) => {
				const f = g && "number" == typeof n,
					_ = f ? c({
						count: n
					}) : l;
				return o.createElement(s.a, {
					Icon: a.a,
					accessibilityLabel: _,
					activeColor: e,
					clientEventContext: d,
					color: t,
					count: n,
					iconSize: i,
					isDisabled: r,
					isFaded: h,
					onPress: u,
					renderWrapper: p,
					style: m,
					testID: b,
					withCount: f
				})
			}
		},
		Hp3u: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		HwrL: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			}));
			var o = n("wrlS"),
				i = n("RT39");
			const r = {
					like: "like",
					retweet: "retweet",
					share: "share"
				},
				a = (e, t) => !((null == t ? void 0 : t.displayType) !== i.a.SoftIntervention || !(null == t ? void 0 : t.engagementNudge) && o.b.isTrue("soft_interventions_nudge_backend_control_enabled")) && (e === r.retweet && o.b.isTrue("soft_interventions_retweet_nudge_enabled") || e === r.like && o.b.isTrue("soft_interventions_like_nudge_enabled") || e === r.share && o.b.isTrue("soft_interventions_share_nudge_enabled")),
				s = (e, t) => !((null == t ? void 0 : t.displayType) !== i.a.SoftIntervention || !(null == t ? void 0 : t.engagementNudge) && !0 === o.b.getValueWithoutScribeImpression("soft_interventions_nudge_backend_control_enabled")) && (e === r.retweet && !0 === o.b.getValueWithoutScribeImpression("soft_interventions_retweet_nudge_enabled") || e === r.like && !0 === o.b.getValueWithoutScribeImpression("soft_interventions_like_nudge_enabled") || e === r.share && !0 === o.b.getValueWithoutScribeImpression("soft_interventions_share_nudge_enabled"))
		},
		"I/ms": function(e, t, n) {
			"use strict";
			var o = n("rHpw");
			t.a = o.a.create(e => ({
				avatar: {
					width: "25%",
					backgroundColor: e.colors.cellBackground,
					borderRadius: e.borderRadii.infinite,
					marginTop: "-18%",
					marginBottom: e.spaces.xSmall,
					marginStart: 0,
					minWidth: e.spaces.xxLarge,
					borderColor: e.colors.cellBackground,
					borderStyle: "solid"
				},
				narrowAvatar: {
					borderWidth: "2px",
					marginBottom: "-2px",
					marginStart: "-2px"
				},
				wideAvatar: {
					borderWidth: "4px",
					marginBottom: "-4px",
					marginStart: "-4px"
				},
				content: {
					paddingTop: e.componentDimensions.gutterVertical,
					paddingHorizontal: e.componentDimensions.gutterHorizontal
				},
				withheld: {
					paddingBottom: e.spaces.xSmall
				},
				banner: {
					backgroundColor: e.colors.gray200
				},
				avatarAndButton: {
					justifyContent: "space-between",
					flexDirection: "row"
				},
				menuSheetButton: {
					marginEnd: e.spaces.xSmall,
					marginBottom: e.spaces.xSmall
				},
				names: {
					marginTop: e.spaces.xxSmall,
					marginBottom: e.spaces.xSmall
				}
			}))
		},
		I57f: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("/yvb"),
				s = n("vEo5"),
				l = n("rxPX"),
				c = n("0KEI"),
				d = n("G6rE");
			const h = (e, t) => !(!t.allowPromptForPush || !s.selectShouldPromptBrowserPush(e));
			var u = Object(l.a)().propsFromState(() => ({
					shouldPromptPush: h
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(c.d)("DEVICE_FOLLOW_BUTTON_CONTAINER"),
					updateDeviceFollowing: d.e.updateDeviceFollowing
				})).withAnalytics({
					element: "mobile_notifications"
				}),
				p = n("3XMw"),
				m = n.n(p),
				b = n("3Lh0"),
				g = n("xiBm"),
				f = (n("IAdD"), n("Lsrn")),
				_ = n("k/Ka");
			const y = (e = {}) => Object(_.a)("svg", Object.assign({}, e, {
				style: [f.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M23.61.15c-.375-.184-.822-.03-1.006.34L19.74 6.266l-1.703-1.81c-.283-.303-.758-.316-1.06-.032-.302.284-.316.76-.032 1.06l2.443 2.596c.143.15.34.235.546.235.036 0 .073-.003.11-.008.243-.036.452-.19.562-.41l3.342-6.74c.184-.372.032-.822-.34-1.006zm-4.592 16.475c-.083-.064-2.044-1.625-2.01-5.76.022-2.433-.78-4.596-2.256-6.09-1.324-1.34-3.116-2.083-5.046-2.092h-.013c-1.93.01-3.722.75-5.046 2.092C3.172 6.27 2.37 8.433 2.39 10.867 2.426 15 .467 16.56.39 16.62c-.26.193-.367.53-.266.838.102.308.39.515.712.515h4.08c.088 2.57 2.193 4.64 4.785 4.64s4.698-2.07 4.785-4.64h4.082c.32 0 .604-.206.707-.51s-.002-.643-.256-.838zM9.7 20.513c-1.434 0-2.6-1.127-2.684-2.54h5.368c-.085 1.413-1.25 2.54-2.684 2.54z"
			})));
			y.metadata = {
				width: 24,
				height: 24
			};
			var w = y;
			const v = (e = {}) => Object(_.a)("svg", Object.assign({}, e, {
				style: [f.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M23.24 3.26h-2.425V.832c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.26H16.89c-.414 0-.75.335-.75.75s.336.75.75.75h2.426v2.424c0 .414.336.75.75.75s.75-.336.75-.75V4.76h2.425c.415 0 .75-.337.75-.75s-.336-.75-.75-.75zm-6.23 7.606c.02-2.434-.782-4.597-2.258-6.09-1.324-1.342-3.116-2.084-5.046-2.093h-.013c-1.93.01-3.722.75-5.046 2.092C3.172 6.27 2.37 8.433 2.39 10.867 2.426 15 .467 16.56.39 16.62c-.26.193-.367.53-.266.838.102.308.39.515.712.515h4.716c.11 2.226 1.94 4.007 4.194 4.007s4.083-1.78 4.194-4.007h4.625c.32 0 .604-.206.707-.51s0-.643-.255-.838c-.082-.064-2.043-1.625-2.008-5.76zM9.745 20.48c-1.426 0-2.586-1.11-2.694-2.508h5.388c-.108 1.4-1.268 2.507-2.694 2.507zm-7.29-4.007c.702-1.095 1.457-2.904 1.434-5.618-.017-2.062.614-3.8 1.825-5.025C6.757 4.774 8.172 4.19 9.7 4.184c1.527.007 2.943.59 3.985 1.646 1.21 1.226 1.84 2.963 1.823 5.025-.022 2.714.732 4.523 1.437 5.618H2.455z"
			})));
			v.metadata = {
				width: 24,
				height: 24
			};
			var C = v;
			const E = m.a.de128a2f,
				T = m.a.aa6f3ca4,
				x = m.a.c2609309;
			class k extends r.PureComponent {
				constructor(e) {
					super(e), i()(this, "_renderButton", () => {
						const {
							style: e,
							isFollowing: t
						} = this.props;
						return t ? r.createElement(a.a, {
							accessibilityLabel: T,
							icon: r.createElement(w, null),
							onPress: this._handleUnfollow,
							style: e,
							type: "primary"
						}) : r.createElement(a.a, {
							accessibilityLabel: E,
							icon: r.createElement(C, null),
							onPress: this._handleFollow,
							style: e,
							type: "secondary"
						})
					}), i()(this, "_handleFollow", () => {
						const {
							shouldPromptPush: e
						} = this.props;
						e && this.setState({
							showingPushPrompt: !0
						}), this._updateDeviceFollowing(!0).then(e => {
							this._scribeAction("on")
						})
					}), i()(this, "_handleUnfollow", () => {
						this._updateDeviceFollowing(!1).then(e => {
							this._scribeAction("off")
						})
					}), this.state = {
						showingPushPrompt: !1
					}
				}
				render() {
					return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(b.a, {
						fullScreen: !0,
						message: x
					}) : null, this._renderButton())
				}
				_updateDeviceFollowing(e) {
					const {
						createLocalApiErrorHandler: t,
						userId: n,
						updateDeviceFollowing: o
					} = this.props;
					return o(n, {
						device: e
					}).catch(t(g.a))
				}
				_scribeAction(e) {
					const {
						analytics: t
					} = this.props;
					t.scribeAction(e)
				}
			}
			const I = u(k);
			t.a = I
		},
		I8UQ: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("JtPf");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("6/RC");
			const a = "https://abs.twimg.com/sticky/animations/like.2.json";
			t.b = new class {
				constructor() {
					i()(this, "_cache", {})
				}
				get(e) {
					return this._cache[e]
				}
				check(e) {
					const t = this._load(e);
					return !(t instanceof Promise) && !!t
				}
				_reset() {
					this._cache = {}
				}
				_loadCache(e, t) {
					if (this._cache[e]) return this._cache[e];
					const n = t().then(t => {
						this._cache[e] = t
					});
					return this._cache[e] || (this._cache[e] = n), this._cache[e]
				}
				_loadHashflagAnimation(e) {
					return this._loadCache(e, () => new Promise(t => {
						r.canUseDOM && window.fetch ? fetch(e).then(e => e.json()).then(t) : t(!0)
					}))
				}
				_load(e) {
					return e ? this._loadHashflagAnimation(e) : this._loadHashflagAnimation(a)
				}
			}
		},
		IG4P: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("21Tw"),
				h = n("Irs7");
			class u extends c.PureComponent {
				constructor(...e) {
					super(...e), l()(this, "_handleRefresh", () => {
						const {
							onRefresh: e,
							analytics: t
						} = this.props, n = t.contextualScribeNamespace;
						e(), n && n.page && t.scribeAction("pull_to_refresh")
					})
				}
				render() {
					const e = this.props,
						t = a()(e, ["onRefresh", "analytics"]);
					return c.createElement(d.a, i()({}, t, {
						onRefresh: this._handleRefresh
					}))
				}
			}
			t.a = Object(h.a)(u)
		},
		IG7M: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("wwsH"),
				s = n("FRoe"),
				l = n("FG+G");
			const c = r.a.gaeb997d,
				d = {
					viewType: "menu_control"
				};

			function h(e) {
				const {
					Icon: t,
					iconSize: n,
					isDisabled: i,
					onClick: r,
					renderActionMenu: h,
					style: u,
					testID: p,
					useMoreIcon: m,
					withCircle: b
				} = e;
				return o.createElement(a.a, {
					Icon: t || (m ? s.a : l.a),
					accessibilityLabel: c,
					activeColor: b ? "white" : void 0,
					backgroundColor: b ? "translucentBlack77" : "transparent",
					clientEventContext: d,
					color: b ? "white" : "gray600",
					iconSize: n || (m ? "normal" : "small"),
					isDisabled: i,
					onPress: e => {
						e && e.preventDefault(), r && r(e)
					},
					renderMenu: h,
					style: u,
					testID: p
				})
			}
			h.defaultProps = {
				useMoreIcon: !1,
				withCircle: !1
			}, t.a = h
		},
		IJsT: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("htQn"),
				r = n("rHpw"),
				a = n("MWbm");
			t.a = e => {
				const {
					accessibilityLabel: t,
					containerStyle: n,
					onClick: r,
					lower: l,
					link: c,
					stackLayoutLowerStyle: d,
					stackLayoutUpperStyle: h,
					upper: u
				} = e;
				return o.createElement(i.a, {
					accessibilityLabel: t,
					link: c,
					onClick: r,
					style: [s.root, n]
				}, o.createElement(a.a, {
					style: [s.defaultUpperContainerStyle, h]
				}, u), l ? o.createElement(a.a, {
					style: [s.defaultLowerContainerStyle, d]
				}, l) : null)
			};
			const s = r.a.create(e => ({
				root: {
					padding: e.spaces.xSmall,
					borderRadius: e.borderRadii.small
				},
				defaultLowerContainerStyle: {
					marginTop: e.spaces.xSmall,
					justifyContent: "flex-end"
				},
				defaultUpperContainerStyle: {
					height: `calc(${e.spaces.xxLarge}*2)`,
					overflow: "hidden",
					borderRadius: e.borderRadii.small
				}
			}))
		},
		"IMA+": function(e, t, n) {
			"use strict";
			n("jQ/y"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("TIdA"),
				s = n("t62R"),
				l = n("5mJL"),
				c = n("DNho"),
				d = n("QX9J"),
				h = n("ir4X"),
				u = n("htQn"),
				p = n("e5HP"),
				m = n("FBXD"),
				b = n("Nqmc"),
				g = n("rHpw"),
				f = n("oSwX"),
				_ = n("pBrB"),
				y = n("jV+4"),
				w = n("MWbm");
			const v = Object.freeze({
					TWEET: "tweets",
					USER: "users"
				}),
				C = Object.freeze({
					UserCompact: "UserCompact",
					UserConcise: "UserConcise",
					UserDetailed: "UserDetailed"
				}),
				E = a.a.createLayoutCache();
			class T extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_renderUserName", () => {
						const {
							badgeContext: e,
							disabledMessage: t,
							isProtected: n,
							isFollowedBy: o,
							isVerified: i,
							name: a,
							onScreenNameClick: l,
							promotedContent: c,
							promotedItemType: d,
							screenName: h,
							translatorType: u,
							withFollowsYou: p,
							withLink: m
						} = this.props, b = r.createElement(y.a, {
							badgeContext: e,
							isProtected: n,
							isVerified: i,
							name: a,
							onLinkClick: l,
							promotedContent: d === v.TWEET ? c : void 0,
							screenName: h,
							translatorType: u,
							withFollowsYou: p && o,
							withHoverCard: !t && m,
							withLink: !t && m,
							withScreenName: !t,
							withStackedLayout: !0
						});
						return t ? r.createElement(w.a, null, b, r.createElement(s.c, {
							color: "gray600"
						}, t)) : b
					}), i()(this, "_renderHighlightedUserLabel", () => {
						const {
							highlightedLabel: e
						} = this.props;
						return e ? r.createElement(h.a, {
							label: e
						}) : null
					}), i()(this, "_isEligibleForBio", () => {
						const {
							displayMode: e
						} = this.props;
						return -1 !== [C.UserDetailed, C.UserConcise].indexOf(e)
					}), i()(this, "_handleKeyPress", e => {
						e.defaultPrevented || "Enter" !== e.key || this._handleClick(e)
					}), i()(this, "_handleClick", Object(m.a)(e => {
						const {
							onCellClick: t
						} = this.props;
						e.preventDefault(), t && t()
					}))
				}
				render() {
					const {
						accessibilityLabel: e,
						accessibilityRole: t,
						accessibilityState: n,
						avatarSize: o,
						avatarUri: i,
						bottomControl: a,
						decoration: s,
						disabledMessage: h,
						displayMode: m,
						onAvatarClick: g,
						onCellClick: _,
						onScreenNameClick: y,
						promotedContent: T,
						promotedItemType: k,
						screenName: I,
						socialContext: S,
						style: P,
						testID: R,
						userId: O,
						withBottomBorder: A,
						withDarkerInteractiveBackground: M,
						withLink: L
					} = this.props, D = L, j = m === C.UserCompact, N = T && k === v.USER && "earned" !== (T.disclosure_type && T.disclosure_type.toLowerCase()) ? r.createElement(p.a, {
						contentAuthorId: O,
						promotedContent: T,
						style: x.promotedIndicator
					}) : null, F = r.createElement(c.a.Consumer, null, ({
						avatarSize: e
					}) => r.createElement(f.default, {
						imageLayoutCache: E,
						onClick: g,
						onHoverCardScreenNameClick: y,
						promotedContent: T,
						screenName: I,
						size: e,
						style: x.avatar,
						uri: i,
						withHoverCard: D,
						withLink: L
					})), B = _ ? "button" : "listitem", U = this._renderUserName(), H = this._renderHighlightedUserLabel(), z = this._renderBio(), W = H || z || N || a, V = r.createElement(r.Fragment, null, H, z, N, a ? r.createElement(w.a, {
						style: x.bottomControl
					}, a) : null);
					return r.createElement(d.a.Provider, {
						viewType: "user_cell"
					}, r.createElement(u.a, {
						accessibilityLabel: e,
						accessibilityRole: t || B,
						accessibilityState: n,
						accessible: !(!t && !_),
						disabled: !!h,
						onClick: this._handleClick,
						onKeyPress: this._handleKeyPress,
						pointerEvents: h ? "none" : void 0,
						style: [x.root, A && x.bottomBorder, P],
						testID: R,
						withDarkerInteractiveBackground: M,
						withInteractiveStyling: !!_
					}, S ? r.createElement(b.a, {
						avatarSize: o,
						contextType: S.contextType,
						link: S.link,
						style: x.socialContext,
						text: S.text
					}) : null, r.createElement(l.a, {
						avatarCell: F,
						avatarCellStyle: [x.avatarColumn, j && x.bodyColumnCentered],
						avatarSize: o,
						cellStyle: [x.bodyColumn, j && x.bodyColumnCentered]
					}, r.createElement(w.a, {
						style: x.body
					}, U, s), j ? null : V), W && j ? r.createElement(l.a, {
						avatarCell: null,
						avatarCellStyle: x.avatarColumn,
						cellStyle: x.bodyColumn
					}, V) : null))
				}
				_renderBio() {
					const {
						description: e,
						withheldDescription: t,
						withheldEntities: n,
						displayMode: o,
						entities: i,
						userId: a
					} = this.props;
					return i && e && this._isEligibleForBio() ? r.createElement(_.a, {
						description: e,
						entities: i,
						isConcise: o === C.UserConcise,
						style: x.bio,
						userId: a,
						withheldDescription: t,
						withheldEntities: n
					}) : null
				}
			}
			i()(T, "defaultProps", {
				testID: "UserCell",
				withBottomBorder: !1,
				withLink: !0
			});
			const x = g.a.create(e => ({
				root: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				avatarColumn: {
					justifyContent: "flex-start"
				},
				bodyColumn: {
					flexGrow: 1
				},
				bodyColumnCentered: {
					justifyContent: "center"
				},
				avatar: {
					display: "block",
					width: "100%"
				},
				bio: {
					paddingTop: e.spaces.xxSmall,
					whiteSpace: "normal"
				},
				socialContext: {
					marginBottom: e.spaces.micro
				},
				body: {
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between"
				},
				promotedIndicator: {
					margin: 0,
					paddingTop: e.spaces.xxSmall,
					paddingBottom: 0,
					paddingHorizontal: 0
				},
				bottomControl: {
					paddingTop: e.spaces.xxSmall
				},
				bottomBorder: {
					borderBottomColor: e.colors.borderColor,
					borderBottomStyle: "solid",
					borderBottomWidth: e.borderWidths.small
				}
			}));
			t.a = T
		},
		IO7v: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("3XMw");
			const i = {
				defaultToast: {
					text: n.n(o).a.e639775e
				},
				showToast: !0
			}
		},
		IRWI: function(e, t, n) {
			"use strict";
			var o = n("QFTV");
			n("6/0d");
			const i = (e, t, n) => {
					const o = e(t),
						i = e(n);
					return !o && i ? -1 : o && !i ? 1 : 0
				},
				r = (e, t, n) => a(e(n), e(t)),
				a = (e, t) => e < t ? -1 : e > t ? 1 : 0,
				s = (e, t) => {
					if (e.length) return e.reduce((e, n) => t(n, e) > 0 ? n : e)
				};
			var l = ({
				prevPos: e,
				nextPos: t
			}) => {
				const n = e.getForViewport(),
					a = e => e && e.doesIntersectWith(n),
					l = e => e ? Math.abs(n.getTop() - e.getTop()) : 1 / 0,
					c = t.getList().filter(({
						id: n
					}) => !Object(o.a)(n) && e.isRendered(n) && t.isRendered(n)),
					d = c.length > 0 ? s(c, (t, n) => {
						const o = e.getForItem(t.id),
							s = e.getForItem(n.id);
						return i(a, o, s) || r(l, o, s)
					}) : null;
				return d && d.id
			};
			const c = {
				initialScrollHeadroom: e => e.getRect().getHeight(),
				offsetToAnchor: (e, t) => {
					const {
						distanceToViewportBottom: n,
						distanceToViewportTop: o,
						id: i
					} = t;
					if ("number" == typeof o) {
						const t = e.getForViewport().getTop() + o;
						return e.getForItem(i).getTop() - t
					}
					if ("number" == typeof n) {
						const t = e.getForViewport().getBottom() + n;
						return e.getForItem(i).getBottom() - t
					}
					return 0
				},
				scrollHeadroom: e => {
					const t = e.getForList().getBottom(),
						n = e.getForViewport().getBottom();
					return Math.max(0, n - t)
				},
				anchorCandidates: e => {
					const t = e.getForViewport().getTop();
					return e.findVisibleItems().filter(({
						id: e
					}) => !Object(o.a)(e)).map(({
						id: e,
						rectangle: n
					}) => ({
						id: e,
						distanceToViewportTop: n.getTop() - t
					}))
				},
				pinToTopWhenAtTop: !1,
				offsetCorrection(e, t) {
					if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToTopWhenAtTop) return 0;
					const n = l({
						prevPos: e,
						nextPos: t
					});
					if (n) {
						const o = e.getForItem(n).getTop() - e.getForViewport().getTop();
						return t.getForItem(n).getTop() - t.getForViewport().getTop() - o
					}
					return 0
				}
			};
			t.a = c
		},
		J0mu: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"
			}), o.createElement("path", {
				d: "M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"
			}), o.createElement("path", {
				d: "M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"
			}), o.createElement("path", {
				d: "M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		JHm9: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = {
				LIKE: "like",
				REPLY: "reply",
				RETWEET: "retweet",
				SHARE: "share",
				ANALYTICS: "analytics"
			}
		},
		"Je1/": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("ERkP"),
				i = n("t62R"),
				r = n("rHpw");
			class a extends o.PureComponent {
				render() {
					const {
						Icon: e,
						children: t,
						onPress: n,
						link: r
					} = this.props;
					return o.createElement(i.c, {
						color: r ? "primary" : "gray600",
						link: r,
						onPress: n,
						style: s.root,
						withInteractiveStyling: !!r || !!n
					}, o.createElement(e, {
						style: s.icon
					}), t)
				}
			}
			const s = r.a.create(e => ({
				root: {
					display: "inline-block",
					marginEnd: e.spaces.xSmall
				},
				icon: {
					color: e.colors.gray600,
					marginEnd: e.spaces.xxSmall
				}
			}))
		},
		"JfS+": function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("ERkP"),
				i = n("zb92"),
				r = n("RuTB");
			t.a = Object(i.a)({
				loader: () => Promise.all([n.e(0), n.e(147)]).then(n.bind(null, "VeNJ")),
				renderPlaceholder: (e, t) => o.createElement(r.a, {
					hasError: e,
					onRetry: t
				})
			})
		},
		Jkc4: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("v6aA"),
				h = n("RxYA");
			class u extends c.Component {
				constructor(...e) {
					super(...e), l()(this, "state", {
						showLoginPrompt: !1
					}), l()(this, "_getHandler", (e, t) => (n, ...o) => {
						this.props.disabled || this.context.loggedInUserId ? e && e(n, ...o) : (n && n.preventDefault && n.preventDefault(), t && t(), this.setState({
							showLoginPrompt: !0
						}))
					}), l()(this, "_handleClose", () => {
						this.setState({
							showLoginPrompt: !1
						})
					})
				}
				render() {
					const e = this.props,
						{
							children: t
						} = e,
						n = a()(e, ["children", "disabled"]);
					return c.createElement(c.Fragment, null, t(this._getHandler), this.state.showLoginPrompt && c.createElement(h.a, i()({
						onClose: this._handleClose
					}, n)))
				}
			}
			l()(u, "defaultProps", {
				disabled: !1
			}), l()(u, "contextType", d.a), t.a = u
		},
		"Jwn+": function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("/yvb"),
				s = n("eb3s"),
				l = n("py1r"),
				c = n("MWbm");
			Object.freeze({
				onlyText: "only-text",
				iconText: "icon-text"
			});
			class d extends r.Component {
				constructor(e) {
					super(e), i()(this, "_minWidth", 0), i()(this, "_handleLabelMeasure", (e = !1) => {
						this._containerRef && this._containerRef.measure((t, n, o, i) => {
							this._minWidth = Math.max(this._minWidth, o), e && this.forceUpdate()
						})
					}), i()(this, "_handleButtonPress", e => {
						e.preventDefault(), this.props.showRelationshipChangeConfirmation ? this.setState({
							showConfirmation: !0
						}) : (this._minWidth = 0, this.forceUpdate(), this.props.onClick())
					}), i()(this, "_handleConfirm", e => {
						this._minWidth = 0, this.setState({
							showConfirmation: !1
						}), this.props.onClick()
					}), i()(this, "_handleCancel", () => {
						this.setState({
							showConfirmation: !1
						})
					}), i()(this, "_handleHoverIn", () => {
						this._handleLabelMeasure(!0)
					}), i()(this, "_setContainerRef", e => {
						this._containerRef = e, this._handleLabelMeasure()
					}), this.state = {
						showConfirmation: !1
					}
				}
				componentDidUpdate(e) {
					e.buttonDefaultLabel !== this.props.buttonDefaultLabel && this._handleLabelMeasure()
				}
				render() {
					const {
						ariaDescribedBy: e,
						confirmationSheetCancelLabel: t,
						confirmationSheetConfirmLabel: n,
						confirmationSheetText: o,
						confirmationSheetHeadline: i,
						confirmationSheetPrimaryButtonType: d,
						buttonDefaultLabel: h,
						buttonHoverLabel: u,
						buttonType: p,
						buttonHoverType: m,
						disabled: b,
						displayMode: g,
						icon: f,
						nativeID: _,
						onHoverOut: y,
						size: w,
						style: v,
						testID: C
					} = this.props, E = [v, {
						minWidth: this._minWidth
					}];
					return r.createElement(c.a, {
						ref: this._setContainerRef,
						style: E
					}, r.createElement(l.a, {
						onHoverIn: this._handleHoverIn,
						onHoverOut: y
					}, ({
						isHovered: t
					}) => {
						const n = t ? u : h,
							o = t && m ? m : p;
						return r.createElement(a.a, {
							"aria-describedby": e,
							disabled: b,
							icon: "only-text" !== g ? f : void 0,
							nativeID: _,
							onPress: this._handleButtonPress,
							size: w,
							testID: C,
							type: o
						}, n)
					}), this.state.showConfirmation ? r.createElement(s.a, {
						cancelButtonLabel: t,
						confirmButtonLabel: n,
						confirmButtonType: d,
						headline: i,
						onCancel: this._handleCancel,
						onConfirm: this._handleConfirm,
						text: o
					}) : null)
				}
			}
			i()(d, "defaultProps", {
				showRelationshipChangeConfirmation: !1
			}), t.a = d
		},
		JyI6: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("QB0K"),
				s = n("FRNI");
			class l extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_handlePress", e => {
						e.preventDefault();
						const {
							getLocationState: t,
							history: n
						} = this.props, o = {
							pathname: "/compose/tweet",
							state: t && t() || {}
						};
						n.push(o)
					})
				}
				render() {
					const {
						accessibilityLabel: e,
						icon: t,
						label: n,
						scribeComponent: o,
						shortLabel: i
					} = this.props;
					return r.createElement(a.a, {
						accessibilityLabel: e,
						href: "/compose/tweet",
						icon: t,
						label: n,
						onPress: this._handlePress,
						scribeComponent: o,
						shortLabel: i,
						testID: s.a.tweet
					})
				}
			}
			t.a = l
		},
		"K9/a": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("gZV8");
			class s extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_handlePlacementChange", e => {
						const {
							id: t,
							onVisible: n,
							onFullyVisible: o
						} = this.props;
						this._lastVisibleId !== t && e.verticalOverlap() >= 1 && (this._lastVisibleId = t, n(e)), this._lastFullyVisibleId === t || 1 !== e.visibleFraction() && 1 !== e.viewportOccupiedFraction() || (this._lastFullyVisibleId = t, o && o(e))
					}), i()(this, "_handleLayout", e => {
						const {
							nativeEvent: {
								layout: {
									height: t,
									width: n
								}
							}
						} = e, o = {
							width: n,
							height: t
						};
						if (this._prevLayout && (this._prevLayout.width !== n || this._prevLayout.height !== t)) {
							const {
								onResize: e
							} = this.props;
							e && e(this._prevLayout, o)
						}
						this._prevLayout = o
					}), i()(this, "_setPlacementRef", e => {
						this._placementRef = e
					})
				}
				render() {
					const {
						children: e
					} = this.props;
					return r.createElement(a.a, {
						onLayout: this._handleLayout,
						onPlacementChange: this._handlePlacementChange,
						ref: this._setPlacementRef
					}, e)
				}
				componentDidMount() {
					this._inspectCurrentPlacement()
				}
				componentDidUpdate(e) {
					this.props.id !== e.id && this._inspectCurrentPlacement()
				}
				_inspectCurrentPlacement() {
					this._placementRef && this._placementRef.sample(this._handlePlacementChange)
				}
			}
		},
		KDev: function(e, t, n) {
			"use strict";
			var o = function(e) {
					"vibrate" in window.navigator && window.navigator.vibrate(e)
				},
				i = {
					cancel: function() {
						o(0)
					},
					vibrate: function(e) {
						void 0 === e && (e = 400), o(e)
					}
				};
			t.a = i
		},
		Ka9G: function(e, t, n) {
			"use strict";
			var o = n("ezF+"),
				i = (n("ERkP"), n("RgK2")),
				r = n.n(i),
				a = n("cFuS"),
				s = n("Rp9C"),
				l = n("Re5t"),
				c = n("VPAj"),
				d = n("fs1G"),
				h = n("88ay");
			const u = e => e ? {
				disclosure_type: e.disclosureType,
				impression_id: e.impressionId
			} : void 0;
			var p = ({
				decoration: e,
				displayMode: t = l.a.UserCompact,
				withLink: n = !0,
				cellClickable: i = !0,
				shouldScribe: p = !0,
				onClick: m
			}) => {
				const b = e || h.d;
				return o.f({
					component: h.a,
					selectData: Object(c.a)(r.a),
					bindActions: Object(c.a)(r.a),
					defaultScribeNamespace: {
						element: "user"
					},
					createProps: ({
						entry: e,
						scribeData: o,
						scribeNamespace: r
					}) => {
						const {
							content: {
								promotedMetadata: s,
								id: l,
								socialContext: c
							}
						} = e, d = u(s), g = c && c.generalContext || void 0;
						return {
							decoration: b,
							displayMode: t,
							promotedContent: d,
							promotedItemType: a.c.USER,
							scribeData: o,
							scribeNamespace: r,
							userId: l,
							withFollowsYou: b === h.d,
							socialContext: g,
							withLink: n,
							cellClickable: i,
							shouldScribe: p,
							onClick: m
						}
					},
					onImpression: d.a,
					getScribeDataItem(e) {
						const {
							id: t,
							promotedMetadata: n
						} = e.content, o = u(n);
						return s.a.getUserItem({
							id_str: t,
							promoted_content: o
						})
					},
					isFocusable: Object(c.a)(!0)
				})
			};
			t.a = ({
				decoration: e,
				withLink: t,
				cellClickable: n,
				shouldScribe: i,
				onClick: r
			}) => o.b({
				selectDisplayType: e => e.content.displayType,
				handlers: {
					[l.a.User]: p({
						decoration: e,
						displayMode: l.a.UserDetailed,
						withLink: t,
						cellClickable: n,
						shouldScribe: i,
						onClick: r
					}),
					[l.a.ProfileCard]: p({
						decoration: e
					}),
					[l.a.UserCompact]: p({
						decoration: e,
						displayMode: l.a.UserCompact,
						withLink: t,
						cellClickable: n,
						shouldScribe: i,
						onClick: r
					}),
					[l.a.UserConcise]: p({
						decoration: e,
						displayMode: l.a.UserConcise,
						withLink: t,
						cellClickable: n,
						shouldScribe: i,
						onClick: r
					}),
					[l.a.UserDetailed]: p({
						decoration: e,
						displayMode: l.a.UserDetailed,
						withLink: t,
						cellClickable: n,
						shouldScribe: i,
						onClick: r
					})
				}
			})
		},
		KrGU: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"
			}), o.createElement("path", {
				d: "M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		LWCC: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("rxPX"),
				s = n("0KEI"),
				l = n("Zejx");
			var c = Object(a.a)().propsFromActions(() => ({
					createLocalApiErrorHandler: Object(s.d)("FOLLOW_TOPIC_BUTTON"),
					follow: l.a.follow,
					unfollow: l.a.unfollow
				})).withAnalytics(),
				d = n("CGyZ"),
				h = n("3XMw"),
				u = n.n(h),
				p = n("Tp1h"),
				m = n("Jkc4"),
				b = n("TnY3");
			const g = {
				follow: u.a.i79ab12a,
				following: u.a.d960b55b,
				unfollow: u.a.ge1b5a6f
			};
			class f extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_handleOnFollow", () => {
						const {
							createLocalApiErrorHandler: e,
							educateOnFollow: t,
							follow: n,
							history: o,
							topic: i
						} = this.props;
						n(i.id).catch(e()), this._handleScribe("follow"), t && i && o.push({
							pathname: "/i/topics/education",
							state: {
								topicName: i.name
							}
						})
					}), i()(this, "_handleOnUnfollow", () => {
						const {
							createLocalApiErrorHandler: e,
							topic: t,
							unfollow: n
						} = this.props;
						n(t.id).catch(e()), this._handleScribe("unfollow")
					})
				}
				render() {
					const {
						ariaDescribedBy: e,
						isTransparent: t,
						nativeID: n,
						showRelationshipChangeConfirmation: o,
						size: i,
						style: a,
						topic: {
							following: s,
							name: l
						},
						useDefaultText: c
					} = this.props;
					return r.createElement(m.a, {
						customText: l,
						displayMode: p.a.topic
					}, h => r.createElement(d.a, {
						ariaDescribedBy: e,
						buttonText: c ? void 0 : g,
						isFollowing: s,
						isTransparent: t,
						name: l,
						nativeID: n,
						onFollow: h(this._handleOnFollow),
						onUnfollow: h(this._handleOnUnfollow),
						showRelationshipChangeConfirmation: o,
						size: i,
						style: a,
						type: "topic",
						withConfirmationSheetText: !1
					}))
				}
				_handleScribe(e) {
					const {
						analytics: t
					} = this.props;
					t.scribeAction(e)
				}
			}
			i()(f, "defaultProps", {
				size: "normalCompact",
				useDefaultText: !0
			});
			t.a = Object(b.a)(c(f))
		},
		LWld: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("Ysgh"), n("kYxP");
			var o = n("8jkQ"),
				i = n("2DAM"),
				r = n.n(i),
				a = n("Zkey"),
				s = n("3IPs"),
				l = n("prCu");
			const c = e => {
					const t = Object(l.parse)(e);
					let n;
					t.f === s.c.Live ? n = "realtime" : t.f === s.c.User && (n = "users");
					const o = {
						query: t.q,
						src: t.src,
						pt: t.pt,
						searchType: n
					};
					return Object(l.stringify)(Object(a.a)(o))
				},
				d = (e, t = !0) => {
					const n = o.b.parseInternalUrl(e);
					if (!n) return;
					const [i, a] = n.split("?");
					return ((e, t = "", n) => {
						let o, i;
						if ("/search" === e) i = "search?" + c(t);
						else if (o = /^\/(explore.*)/.exec(e)) {
							const [, e] = o;
							i = e
						} else if (o = /^\/(settings.*)/.exec(e)) {
							const [, e] = o;
							i = e
						} else if (o = r()("/i/events/:eventId").exec(e)) {
							const [, e] = o;
							i = "events/timeline/" + e
						} else if (o = r()("/i/lists/:listId").exec(e)) {
							const [, e] = o;
							i = "list?id=" + e
						} else if (o = r()("/:user/status/:tweetId").exec(e)) {
							const [, , e] = o;
							i = "tweet?id=" + e
						} else if (o = r()("/:user").exec(e)) {
							const [, e] = o;
							i = "user?screen_name=" + e
						}
						return i ? `${n?"twitter://":""}${i}` : void 0
					})(i, a, t)
				}
		},
		LhSm: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = (n("IAdD"), n("Lsrn")),
				s = n("shC7"),
				l = n("k/Ka");
			const c = (e = {}) => Object(l.a)("svg", Object.assign({}, e, {
				style: [a.a.root, e.style, s.a.isRTL && a.a.iconRTL],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
			}), o.createElement("circle", {
				cx: "7.032",
				cy: "8.75",
				r: "1.285"
			}), o.createElement("circle", {
				cx: "7.032",
				cy: "13.156",
				r: "1.285"
			}), o.createElement("circle", {
				cx: "16.968",
				cy: "8.75",
				r: "1.285"
			}), o.createElement("circle", {
				cx: "16.968",
				cy: "13.156",
				r: "1.285"
			}), o.createElement("circle", {
				cx: "12",
				cy: "8.75",
				r: "1.285"
			}), o.createElement("circle", {
				cx: "12",
				cy: "13.156",
				r: "1.285"
			}), o.createElement("circle", {
				cx: "7.032",
				cy: "17.486",
				r: "1.285"
			}), o.createElement("circle", {
				cx: "12",
				cy: "17.486",
				r: "1.285"
			})));
			c.metadata = {
				width: 24,
				height: 24
			};
			var d = c,
				h = n("Je1/");
			const u = r.a.cf249088;
			class p extends o.PureComponent {
				render() {
					const {
						joinDate: e
					} = this.props, t = this._getMonthYearJoinDate(e);
					return o.createElement(h.a, {
						Icon: d
					}, t)
				}
				_getMonthYearJoinDate(e) {
					const t = new Date(e),
						n = r.a.g727ddcf;
					return u({
						joinDate: n(t)
					})
				}
			}
		},
		Lqdf: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			}));
			n("Resy");
			var o = Object.freeze({
				MOVEMENT: "movement",
				LIST_UPDATE: "list_update",
				INITIAL_POSITION: "initial_position"
			});
			const i = {
					nearTop: e => (t, n) => n.getTop() - t.getTop() <= e,
					nearBottom: e => (t, n) => t.getBottom() - n.getBottom() <= e,
					nearTopRatio: e => (t, n) => {
						const o = n.getHeight() * e;
						return n.getTop() - t.getTop() <= o
					},
					nearBottomRatio: e => (t, n) => {
						const o = n.getHeight() * e;
						return t.getBottom() - n.getBottom() <= o
					}
				},
				r = Object.freeze({
					INSIDE: "inside",
					OUTSIDE: "outside"
				}),
				a = (e, t, n, i) => ((e, t) => !e && t === r.INSIDE)(e, n) ? o.INITIAL_POSITION : ((e, t) => e === r.OUTSIDE && t === r.INSIDE)(e, n) ? o.MOVEMENT : ((e, t) => e === r.INSIDE && t === r.INSIDE)(e, n) && i !== t ? o.LIST_UPDATE : null;
			class s {
				constructor(e) {
					this._handlers = e.map(e => ({
						zone: e,
						state: {}
					}))
				}
				handlePositioningUpdate(e) {
					this._handlers.forEach(({
						zone: t,
						state: n
					}) => {
						const {
							condition: o,
							callback: i
						} = t, {
							proximity: s,
							listLength: l
						} = n, c = ((e, t) => e(t.getForList(), t.getForViewport()) ? r.INSIDE : r.OUTSIDE)(o, e), d = e.getListLength(), h = a(s, l, c, d);
						n.proximity = c, n.listLength = d, h && i({
							triggerCause: h
						})
					})
				}
			}
		},
		LsPn: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("0FVZ"),
				c = n("rHpw"),
				d = n("+/1j"),
				h = n("MWbm");
			let u = 0;
			const p = [],
				m = {};

			function b() {
				return p.reduce((e, t) => {
					const n = a()(t, ["id"]);
					return Object.assign({}, e, n)
				}, {})
			}

			function g(e) {
				return p.filter(({
					id: t
				}) => t === e)[0]
			}

			function f(e) {
				Object.keys(m).map(e => m[e]).forEach(t => t !== e && t.forceUpdate())
			}
			class _ extends s.PureComponent {
				constructor(e, t) {
					super(e, t), i()(this, "_handleKeyDown", e => {
						const {
							onLeftClick: t,
							onRightClick: n
						} = b();
						"SoftLeft" === e.key && t ? t(e) : "SoftRight" === e.key && n && n(e)
					}), this._id = function(e, t) {
						const n = u;
						return u += 1, p[p.length] = Object.assign({
							id: n
						}, e), m[n] = t, f(t), n
					}(e, this)
				}
				componentDidMount() {
					this._updateHandler()
				}
				componentDidUpdate() {
					this._updateHandler()
				}
				componentWillUnmount() {
					! function(e, t) {
						const n = g(e);
						p.splice(p.indexOf(n), 1), delete m[e], f(t)
					}(this._id, this), this._updateHandler()
				}
				UNSAFE_componentWillReceiveProps(e) {
					! function(e, t, n) {
						const o = g(e),
							i = p.indexOf(o);
						if (-1 === i) return;
						const r = Object.assign({}, t, {
							id: e
						});
						p.splice(i, 1, r), f(n)
					}(this._id, e, this)
				}
				render() {
					if (p.length >= 1 && this._id === p[0].id) {
						const {
							leftText: e,
							rightText: t
						} = b();
						return s.createElement(l.a.FloatingAction, null, s.createElement(h.a, {
							style: y.root
						}, s.createElement(d.a, {
							style: [y.text, y.left]
						}, e), s.createElement(d.a, {
							style: [y.text, y.right]
						}, t)))
					}
					return null
				}
				_updateHandler() {
					p[0] && p[0].id === this._id ? window.document.addEventListener("keydown", this._handleKeyDown) : window.document.removeEventListener("keydown", this._handleKeyDown)
				}
			}
			const y = c.a.create(e => ({
				root: {
					backgroundColor: e.colors.gray900,
					padding: e.spaces.xxSmall,
					flexDirection: "row"
				},
				text: {
					color: e.colors.white
				},
				left: {
					flexBasis: 0,
					flexGrow: 1
				},
				right: {
					flexBasis: 0,
					flexGrow: 1,
					textAlign: "right"
				}
			}));
			t.a = _
		},
		LtQU: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M19 10H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		Lz2T: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("K9/a"),
				c = n("rcen"),
				d = n("MWbm"),
				h = n("t62R"),
				u = n("/yvb"),
				p = n("TIdA"),
				m = n("A91F"),
				b = n("rHpw");
			class g extends s.Component {
				constructor(...e) {
					super(...e), a()(this, "_renderTitle", () => {
						const {
							titleRichText: e,
							titleText: t,
							rightControl: n
						} = this.props, o = {
							accessibilityRole: "heading",
							size: "xLarge",
							withHashflags: !0,
							weight: "bold"
						}, r = [this.styles.title, f.flexGrow, !!n && f.withRightControl];
						return e ? s.createElement(c.c, i()({
							entities: e.entities,
							style: r,
							text: e.text
						}, o)) : t && t.length ? s.createElement(h.c, i()({
							style: r
						}, o), t) : null
					}), a()(this, "_renderBodyText", () => {
						const {
							bodyRichText: e,
							bodyText: t
						} = this.props;
						return e ? s.createElement(c.c, {
							color: "gray600",
							entities: e.entities,
							style: this.styles.body,
							text: e.text
						}) : t ? s.createElement(h.c, {
							color: "gray600",
							style: this.styles.body,
							withHashflags: !0
						}, t) : null
					}), a()(this, "_handleVisible", () => {
						const {
							onImpression: e
						} = this.props;
						e && e()
					}), a()(this, "_renderAction", ({
						action: e,
						buttonType: t
					}) => {
						const {
							link: n,
							onClick: o,
							text: i
						} = e;
						return s.createElement(d.a, {
							style: this.styles.actionContainer
						}, s.createElement(u.a, {
							link: n,
							onPress: o,
							type: t
						}, i))
					})
				}
				render() {
					const {
						entryId: e,
						image: t,
						onImpression: n,
						rightControl: o,
						primaryAction: i,
						secondaryAction: r
					} = this.props, a = s.createElement(d.a, {
						style: [f.root, this.styles.rootPadding, t && f.rootPaddingWithImage]
					}, s.createElement(s.Fragment, null, t ? s.createElement(d.a, {
						style: f.image
					}, s.createElement(p.a, {
						accessibilityLabel: "",
						aspectMode: m.a.exact(t.width / t.height),
						backgroundColor: t.backgroundColor,
						image: t
					})) : null, this._renderTitle(), this._renderBodyText(), i ? this._renderAction({
						action: i,
						buttonType: "primary"
					}) : null, r ? this._renderAction({
						action: r,
						buttonType: "text"
					}) : null), o ? s.createElement(d.a, {
						style: f.rightControl
					}, o) : null);
					return n ? s.createElement(l.a, {
						id: e,
						onVisible: this._handleVisible
					}, a) : a
				}
				get styles() {
					return this.props.isCompact ? y : _
				}
			}
			const f = b.a.create(e => ({
					root: {
						backgroundColor: e.colors.cellBackground
					},
					rootPaddingWithImage: {
						paddingTop: 0
					},
					flexGrow: {
						flexGrow: 1
					},
					image: {
						marginBottom: e.spaces.large
					},
					rightControl: {
						paddingHorizontal: e.componentDimensions.gutterHorizontal,
						paddingVertical: e.componentDimensions.gutterVertical,
						position: "absolute",
						right: 0,
						top: 0
					},
					withRightControl: {
						marginHorizontal: e.spaces.xxSmall
					}
				})),
				_ = b.a.create(e => ({
					rootPadding: {
						paddingVertical: e.spaces.xLarge
					},
					title: {
						textAlign: "center"
					},
					body: {
						marginVertical: e.spaces.xSmall,
						marginHorizontal: e.spaces.xSmall,
						textAlign: "center"
					},
					actionContainer: {
						flexDirection: "row",
						justifyContent: "center",
						marginTop: e.spaces.xSmall,
						marginHorizontal: e.spaces.xSmall
					}
				})),
				y = b.a.create(e => ({
					rootPadding: {
						paddingHorizontal: e.componentDimensions.gutterHorizontal,
						paddingTop: e.componentDimensions.gutterVertical,
						paddingBottom: e.spaces.small
					},
					title: {
						marginTop: e.spaces.micro
					},
					body: {
						marginVertical: e.spaces.micro
					},
					actionContainer: {
						flexDirection: "row",
						marginTop: e.spaces.xxSmall
					}
				}))
		},
		M6BN: function(e, t, n) {
			"use strict";
			var o = n("tI3i"),
				i = n.n(o),
				r = n("6/RC").canUseDOM && void 0 !== window.requestIdleCallback,
				a = r ? window.requestIdleCallback : function(e, t) {
					return setTimeout((function() {
						var t = Date.now();
						e({
							didTimeout: !1,
							timeRemaining: function() {
								return Math.max(0, 50 - (Date.now() - t))
							}
						})
					}), 1)
				},
				s = r ? window.cancelIdleCallback : function(e) {
					clearTimeout(e)
				},
				l = a,
				c = {
					Events: {
						interactionStart: "interactionStart",
						interactionComplete: "interactionComplete"
					},
					runAfterInteractions: function(e) {
						var t, n = new Promise((function(n) {
							t = l((function() {
								e ? n(e()) : n()
							}))
						}));
						return {
							then: n.then.bind(n),
							done: n.then.bind(n),
							cancel: function() {
								s(t)
							}
						}
					},
					createInteractionHandle: function() {
						return 1
					},
					clearInteractionHandle: function(e) {
						i()(!!e, "Must provide a handle to clear.")
					},
					addListener: function() {}
				};
			t.a = c
		},
		"MAI/": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("rHpw"),
				s = n("oSwX"),
				l = n("MWbm");
			class c extends r.Component {
				render() {
					const {
						borderColor: e,
						style: t,
						userAvatarUrls: n,
						userAvatarSize: o
					} = this.props, i = n.length, a = "cellBackground" === e ? d.borderCellBackground : d.borderPrimary;
					return r.createElement(l.a, {
						style: [d.root, t]
					}, n.map((e, t) => r.createElement(s.default, {
						key: t,
						size: o,
						style: [d.avatar, 0 !== t && d.avatarOverlap, {
							zIndex: i - t
						}, a],
						uri: e
					})))
				}
			}
			i()(c, "defaultProps", {
				borderColor: "cellBackground",
				userAvatarSize: "medium"
			});
			const d = a.a.create(e => ({
				avatar: {
					borderWidth: e.borderWidths.small
				},
				avatarOverlap: {
					marginLeft: "-" + e.spaces.xSmall
				},
				borderCellBackground: {
					borderColor: e.colors.cellBackground
				},
				borderPrimary: {
					borderColor: e.colors.primary
				},
				root: {
					flexDirection: "row",
					flexShrink: 0
				}
			}))
		},
		MtXG: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = n("wTX1"),
				l = n("rHpw"),
				c = n("MWbm");
			class d extends r.Component {
				render() {
					return r.createElement(c.a, {
						style: [p.row, this.props.style]
					}, r.Children.toArray(this.props.children).filter(Boolean).map((e, t, n) => r.createElement(c.a, {
						key: t,
						style: t < n.length - 1 && p.groupItemNonLast
					}, e)))
				}
			}
			const h = r.createContext({
				onMedia: !1
			});
			class u extends r.Component {
				render() {
					const {
						children: e,
						link: t,
						onPress: n,
						onMedia: o,
						hoverLabel: i
					} = this.props;
					return r.createElement(a.c, {
						color: o ? "white" : "normal",
						hoverLabel: i,
						link: t,
						onClick: n
					}, r.createElement(h.Provider, {
						value: {
							onMedia: o
						}
					}, e))
				}
			}
			i()(u, "Group", d), i()(u, "Label", ({
				children: e
			}) => r.createElement(h.Consumer, null, ({
				onMedia: t
			}) => r.createElement(a.c, {
				children: e,
				color: t ? "white" : "gray600"
			}))), i()(u, "Value", ({
				animated: e,
				children: t,
				count: n
			}) => r.createElement(h.Consumer, null, ({
				onMedia: o
			}) => e ? r.createElement(s.a, {
				children: t,
				count: n,
				weight: "bold"
			}) : r.createElement(a.c, {
				children: t,
				color: o ? "white" : "normal",
				weight: "bold"
			})));
			const p = l.a.create(e => ({
				row: {
					flexDirection: "row",
					flexWrap: "wrap",
					flex: 1
				},
				groupItemNonLast: {
					marginRight: e.spaces.medium
				}
			}));
			t.a = u
		},
		Mx3A: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			}));
			n("IAdD"), n("Ysgh");
			var o = n("6/RC"),
				i = n("s9SB"),
				r = n.n(i),
				a = n("Hw0q"),
				s = n("mrHL"),
				l = n("YeIG"),
				c = n("8jkQ");
			const d = Object.freeze({
					Web: 0,
					Email: 1,
					Partner: 2,
					Market: 3,
					Access: 4
				}),
				h = Object.freeze({
					"01": "twcamp^share|twsrc^android|twgr^sms",
					"02": "twcamp^share|twsrc^android|twgr^email",
					"03": "twcamp^share|twsrc^android|twgr^gmail",
					"04": "twcamp^share|twsrc^android|twgr^facebook",
					"05": "twcamp^share|twsrc^android|twgr^wechat",
					"06": "twcamp^share|twsrc^android|twgr^line",
					"07": "twcamp^share|twsrc^android|twgr^fbmessenger",
					"08": "twcamp^share|twsrc^android|twgr^whatsapp",
					"09": "twcamp^share|twsrc^android|twgr^other",
					10: "twcamp^share|twsrc^ios|twgr^sms",
					11: "twcamp^share|twsrc^ios|twgr^email",
					12: "twcamp^share|twsrc^ios|twgr^other",
					13: "twcamp^share|twsrc^android|twgr^download",
					14: "twcamp^share|twsrc^ios|twgr^download",
					15: "twcamp^share|twsrc^android|twgr^hangouts",
					16: "twcamp^share|twsrc^android|twgr^twitterdm",
					17: "twcamp^share|twsrc^m5|twgr^email",
					18: "twcamp^share|twsrc^m5|twgr^download",
					19: "twcamp^share|twsrc^android|twgr^copy",
					20: "twcamp^share|twsrc^m5|twgr^copy",
					21: "twcamp^share|twsrc^ios|twgr^copy",
					22: "twcamp^share|twsrc^ios|twgr^snapchat",
					23: "twcamp^share|twsrc^android|twgr^snapchat",
					24: "twcamp^share|twsrc^ios|twgr^whatsapp",
					25: "twcamp^share|twsrc^ios|twgr^fbmessenger",
					26: "twcamp^share|twsrc^ios|twgr^facebook",
					27: "twcamp^share|twsrc^ios|twgr^gmail"
				}),
				u = ({
					query: e = {},
					httpReferer: t = "",
					requestUrl: n = "",
					emptyIfServerRendered: i = !0
				}) => {
					const r = (e => {
							const t = {};
							return ["cn", "iid", "original_referer", "nid", "ref_src", "ref_url", "s", "partner", "uid", "url"].forEach(n => {
								t[n] = Object(a.a)(e[n])
							}), t
						})(e),
						{
							cn: s,
							iid: u,
							original_referer: p,
							nid: m,
							ref_src: b,
							ref_url: g,
							s: f,
							partner: _,
							uid: y,
							url: w
						} = r;
					let v = Object.assign({}, null);
					if (i && !o.canUseDOM) return v;
					if (b) v = {
						referral_type: d.Web,
						referral_details_str: b
					};
					else if (u) {
						let e;
						try {
							e = window.atob(s)
						} catch (t) {
							e = "invalid"
						}
						v = {
							referral_type: d.Email,
							referral_details_str: m && y && `twcamp^email|twsrc^${m}|twcon^${y}|twterm^${u}|twgr^${e}`
						}
					} else if (f) {
						const e = h[f];
						e && (v = {
							referral_type: d.Web,
							referral_details_str: e
						})
					} else _ ? v = {
						referral_type: d.Partner,
						referral_details_str: "twsrc^" + _
					} : t && c.b.isExternalUrl(t) && (v = {
						referral_type: d.Web
					});
					let C = g || p || w || t;
					return C.length > 256 && (C = C.substring(0, 256)), C && (v = Object.assign({}, v, {
						referer: C
					})), Object(l.a)(v) || (v = Object.assign({}, v, {
						url: n
					})), v
				},
				p = e => {
					const t = (e => {
						const t = e && e.encryptedReferralDetails || "",
							n = e && e.encryptedReferer || "",
							o = e && void 0 !== e.referralType ? "" + e.referralType : "";
						if (t || n || o) return `${encodeURIComponent(n)}|${o}|${encodeURIComponent(t)}`
					})(e);
					if (t) return r.a.serialize("external_referer", t, {
						maxAge: 604800,
						path: "/",
						domain: ".twitter.com",
						secure: !0,
						encode: e => e
					})
				},
				m = () => {
					const e = Object(s.a)("external_referer");
					if (e && e.split("|").length > 1) {
						const t = e.split("|");
						return {
							encryptedReferer: t[0],
							referralType: t[1],
							encryptedReferralDetails: t[2]
						}
					}
				}
		},
		N9Vr: function(e, t, n) {
			"use strict";
			n("tQbP"), Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o = function(e, t, n) {
				if (0 !== t.length) {
					var o = 0,
						i = 0;
					t.sort((function(e, t) {
						return e.indices[0] - t.indices[0]
					}));
					for (var r = 0, a = t[0], s = !1; o <= e.length;) {
						if (a.indices[1] === (n ? o : i) && s) {
							if (a.indices[1] = n ? i : o, s = !1, ++r === t.length) break;
							a = t[r]
						}
						a.indices[0] !== (n ? o : i) || s || (a.indices[0] = n ? i : o, s = !0);
						var l = e.charCodeAt(o);
						l >= 55296 && l <= 56319 && o < e.length - 1 && (l = e.charCodeAt(o + 1)) >= 56320 && l <= 57343 && o++, i++, o++
					}
				}
			};
			t.default = o, e.exports = t.default
		},
		"NO+D": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ezF+"),
				i = n("ERkP"),
				r = n("VPAj"),
				a = n("rcen"),
				s = n("KEM+"),
				l = n.n(s),
				c = n("xM7j"),
				d = n("xZXe"),
				h = n("P1oR");
			class u extends i.PureComponent {
				constructor(e, t) {
					super(e, t), l()(this, "_renderTweet", () => {
						const {
							conversationPosition: e,
							conversationTreeMetadata: t,
							contextTweetId: n,
							forwardPivotInfo: o,
							isFocalTweet: r,
							onTweetDismiss: a,
							withHideReply: s,
							socialContext: l,
							tweetId: c
						} = this.props;
						return c ? r ? i.createElement(h.b, {
							contextTweetId: n,
							forwardPivotInfo: o,
							onTweetDismiss: a,
							socialContext: l,
							tweetId: c,
							withHideReply: s
						}) : i.createElement(d.b, {
							conversationPosition: e,
							conversationTreeMetadata: t,
							displayBlocked: !0,
							displayPromotedContent: !0,
							forwardPivotInfo: o,
							onTweetDismiss: a,
							shouldSelfThreadIncludeAvatar: !0,
							tweetId: c,
							withActions: !0,
							withHideReply: s,
							withInlineMedia: !0,
							withSocialContext: !0
						}) : null
					}), l()(this, "_handleClick", () => {
						this.setState({
							hide: !1
						})
					}), this.state = {
						hide: !0
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.tweetId !== e.tweetId && this.setState({
						hide: !0
					})
				}
				render() {
					const {
						actionText: e,
						children: t,
						conversationPosition: n,
						conversationTreeMetadata: o,
						ctaLink: r,
						ctaText: a,
						lang: s,
						tweetId: l
					} = this.props;
					return this.state.hide || !l ? i.createElement(c.a, {
						actionText: e,
						children: t,
						conversationPosition: n,
						conversationTreeMetadata: o,
						ctaLink: r,
						ctaText: a,
						lang: s,
						onClick: this._handleClick
					}) : this._renderTweet()
				}
			}
			var p = u;
			const m = Object(r.a)(!1),
				b = e => {
					const {
						alignment: t,
						entities: n,
						rtl: o,
						text: r
					} = e;
					return i.createElement(a.c, {
						alignment: t,
						entities: n,
						rtl: o,
						text: r
					})
				};
			t.a = ({
				createAdditionalProps: e = Object(r.a)(null),
				shouldDisplayBorder: t = m
			}) => o.f({
				bindActions: ({
					module: e
				}) => ({
					applyFeedbackAction: e.applyFeedbackAction
				}),
				component: p,
				createProps: t => {
					var n, o;
					const {
						entry: i,
						actions: r
					} = t, {
						content: a,
						conversationPosition: s,
						conversationTreeMetadata: l
					} = i, {
						text: c,
						richText: d,
						revealText: h,
						richRevealText: u
					} = a.tombstoneInfo || {};
					return Object.assign({
						actionText: u ? b(u) : h,
						children: d ? b(d) : c,
						conversationPosition: s,
						conversationTreeMetadata: l,
						forwardPivotInfo: null == (n = a.tweet) ? void 0 : n.forwardPivot,
						tweetId: null == (o = a.tweet) ? void 0 : o.id
					}, e(i, r))
				},
				shouldDisplayBorder: e => {
					const {
						conversationPosition: t,
						treeDisplay: n
					} = e;
					return "VerticalConversation" !== (null == n ? void 0 : n.displayType) && (!t || !!t.isEnd)
				}
			})
		},
		NeVM: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = (n("JtPf"), n("zb92"));
			var r = Object(i.a)({
					loader: () => n.e(139).then(n.bind(null, "ACNv"))
				}),
				a = n("re8v"),
				s = n("rHpw"),
				l = n("4bW+");
			t.a = e => {
				const {
					onMedia: t,
					feedbackItems: n,
					scribe: i,
					scribeData: s,
					scribeNamespace: d
				} = e;
				if (n && n.length > 0) {
					const e = e => o.createElement(r, {
							actionItems: n,
							onClose: e
						}),
						h = () => i(Object.assign({}, d, {
							element: "caret",
							action: "click"
						}), s);
					return o.createElement(a.a, {
						onClick: h,
						renderActionMenu: e,
						style: c.curationControl,
						testID: l.a.caret,
						withCircle: t
					})
				}
				return null
			};
			const c = s.a.create(e => ({
				curationControl: {
					marginStart: e.spaces.medium
				}
			}))
		},
		Nhmk: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("k49u"),
				i = n("LVU8");
			const r = {
				[o.a.GenericNotFound]: {
					customAction: i.c
				}
			}
		},
		NnR4: function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("ERkP"),
				i = n("zb92"),
				r = n("RuTB");
			t.a = Object(i.a)({
				loader: () => Promise.all([n.e(0), n.e(141)]).then(n.bind(null, "aX4+")),
				renderPlaceholder: (e, t) => o.createElement(r.a, {
					hasError: e,
					onRetry: t
				})
			})
		},
		Nqmc: function(e, t, n) {
			"use strict";
			var o = n("LdEA"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("t62R"),
				c = n("5mJL"),
				d = n("shC7"),
				h = n("dC06"),
				u = n("rHpw"),
				p = n("3XMw"),
				m = n.n(p),
				b = n("FITr"),
				g = n("yVEN"),
				f = n("uCrx"),
				_ = n("6ZHn"),
				y = n("GcQN"),
				w = n("x0mb"),
				v = n("Hp3u"),
				C = (n("IAdD"), n("Lsrn")),
				E = n("k/Ka");
			const T = (e = {}) => Object(E.a)("svg", Object.assign({}, e, {
				style: [C.a.root, e.style],
				viewBox: "0 0 24 24"
			}), s.createElement("g", null, s.createElement("path", {
				d: "M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z"
			})));
			T.metadata = {
				width: 24,
				height: 24
			};
			var x = T,
				k = n("EHV7"),
				I = n("wpLu"),
				S = n("EfHu");
			const P = m.a.jb767df7,
				R = m.a.bb3323fa,
				O = m.a.db0798ed,
				A = m.a.dc716ec8,
				M = e => s.createElement(l.c, {
					dir: d.a.isRTL ? "rtl" : "ltr",
					withHashflags: !0
				}, e),
				L = (e, t) => t ? P : (e => {
					const t = M(e);
					return s.createElement(m.a.I18NFormatMessage, {
						$i18n: "h99e9c95"
					}, t)
				})(e),
				D = u.a.create(e => ({
					small: {
						width: e.fontSizes.small
					},
					large: {
						width: e.fontSizes.large
					},
					xLarge: {
						width: e.fontSizes.xLarge
					}
				})),
				j = u.a.create(e => ({
					circle: {
						color: e.colors.primary,
						width: "0.5em"
					},
					colorDeepGray: {
						color: e.colors.gray600
					},
					colorBlue: {
						color: e.colors.blue500
					},
					colorGreen: {
						color: e.colors.green500
					},
					colorOrange: {
						color: e.colors.orange500
					},
					colorPrimary: {
						color: e.colors.primary
					},
					colorRed: {
						color: e.colors.red500
					}
				}));
			var N = ({
					iconSize: e,
					link: t,
					retweetData: n,
					topicData: o,
					text: i,
					contextType: r,
					withColoredIcon: a
				}) => {
					const {
						name: l,
						isSelfRetweet: c,
						screenName: d
					} = n || {}, u = ((e, t, n) => {
						const o = [j.colorDeepGray, D[t]],
							i = s.createElement(b.a, {
								style: o
							}),
							r = s.createElement(g.a, {
								style: [o, n && j.colorGreen]
							}),
							a = s.createElement(f.a, {
								style: [o, n && j.colorRed]
							}),
							l = s.createElement(_.a, {
								style: [o, n && j.colorBlue]
							}),
							c = s.createElement(y.a, {
								style: [o, n && j.colorBlue]
							}),
							d = s.createElement(w.a, {
								style: j.circle
							}),
							u = s.createElement(v.a, {
								style: [o, n && j.colorOrange]
							}),
							p = s.createElement(x, {
								style: o
							}),
							m = s.createElement(k.a, {
								style: [o, n && j.colorPrimary]
							}),
							C = s.createElement(I.a, {
								style: o
							}),
							E = s.createElement(S.a, {
								style: o
							});
						switch (e) {
							case h.a.Pin:
								return i;
							case h.a.Retweet:
								return r;
							case h.a.Like:
								return a;
							case h.a.Follow:
								return l;
							case h.a.Moment:
								return c;
							case h.a.NewTweets:
								return d;
							case h.a.Reply:
							case h.a.Conversation:
								return u;
							case h.a.Feedback:
								return p;
							case h.a.Topic:
								return m;
							case h.a.List:
								return C;
							case h.a.Location:
								return E;
							case h.a.TextOnly:
							case h.a.Facepile:
							default:
								return null
						}
					})(r, e, a);
					switch (r) {
						case h.a.Retweet:
							return {
								Icon: u, text: i || L(l, c), link: d ? "/" + d : void 0
							};
						case h.a.Pin:
							return {
								Icon: u, text: i || R
							};
						case h.a.Topic:
							return {
								Icon: u, accessibilityLabel: "Recommendation" === (null == o ? void 0 : o.functionalityType) || "RecWithEducation" === (null == o ? void 0 : o.functionalityType) ? A({
									topicName: i
								}) : O({
									topicName: i
								}), text: i ? M(i) : null, link: t
							};
						default:
							return {
								Icon: u, text: i ? M(i) : null, link: t
							}
					}
				},
				F = n("XIXT"),
				B = n("yDX5"),
				U = n("MWbm");
			class H extends s.PureComponent {
				render() {
					const e = this.props,
						{
							avatarSize: t,
							bottomControl: n,
							iconStyle: o,
							onLayout: r,
							nativeID: a,
							rightControl: d,
							style: h,
							testID: u,
							textColor: p,
							textSize: m,
							topControl: b,
							weight: g,
							withLeftPadding: f
						} = e,
						_ = i()(e, ["avatarSize", "bottomControl", "iconStyle", "onLayout", "nativeID", "rightControl", "style", "testID", "textColor", "textSize", "topControl", "weight", "withBottomBorder", "withLeftPadding"]),
						{
							Icon: y,
							accessibilityLabel: w,
							text: v,
							link: C
						} = N(_),
						E = s.createElement(l.c, {
							accessibilityLabel: w,
							color: p,
							nativeID: a,
							numberOfLines: 2,
							size: m,
							testID: u,
							weight: g
						}, v),
						{
							viewStyle: T,
							cellStyle: x
						} = this._getBottomBorderStyles();
					return v ? s.createElement(s.Fragment, null, b || null, s.createElement(U.a, {
						onLayout: r,
						style: [h, T]
					}, s.createElement(c.a, {
						avatarCell: y || (f ? null : void 0),
						avatarCellStyle: [o, z.socialContextIconColumn, !f && z.unsetIconWidth],
						avatarSize: t,
						cellStyle: x
					}, s.createElement(U.a, {
						style: z.cellWrapper
					}, s.createElement(U.a, {
						style: z.socialContextTextColumn
					}, C ? this._renderLink(C, E) : E), d || null)), n || null)) : null
				}
				_renderLink(e, t) {
					const {
						onClick: n,
						nativeID: o,
						contextType: i,
						retweetData: r,
						textColor: a,
						topicData: c
					} = this.props, {
						screenName: d
					} = r || {}, u = s.createElement(l.c, {
						color: a,
						link: e,
						nativeID: o,
						onClick: n
					}, t);
					return i === h.a.Topic && c ? s.createElement(F.a, {
						topicId: c.topicId
					}, u) : i === h.a.Retweet && d ? s.createElement(B.a, {
						screenName: d
					}, u) : u
				}
				_getBottomBorderStyles() {
					const {
						bottomControl: e,
						withBottomBorder: t
					} = this.props;
					return {
						viewStyle: t ? [z.bottomBorderPadding, e && z.bottomBorder] : void 0,
						cellStyle: t && !e ? z.bottomBorder : void 0
					}
				}
			}
			a()(H, "defaultProps", {
				iconSize: "small",
				textColor: "gray600",
				textSize: "small",
				withBottomBorder: !1,
				withColoredIcon: !1,
				withLeftPadding: !0
			});
			const z = u.a.create(e => ({
				socialContextIconColumn: {
					alignItems: "flex-end"
				},
				bottomBorderPadding: {
					marginBottom: e.componentDimensions.gutterVertical
				},
				cellWrapper: {
					flexDirection: "row"
				},
				bottomBorder: {
					paddingBottom: e.spaces.xxSmall,
					borderBottomStyle: "solid",
					borderBottomWidth: e.borderWidths.small,
					borderBottomColor: e.colors.borderColor
				},
				socialContextTextColumn: {
					alignItems: "flex-start",
					flexShrink: 1,
					justifyContent: "center"
				},
				unsetIconWidth: {
					flexBasis: "unset"
				}
			}));
			t.a = H
		},
		Nxr7: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R");
			var s = n("3XMw"),
				l = n.n(s),
				c = n("pjBI"),
				d = n("gmfB");
			const h = l.a.ccaa970e,
				u = l.a.d725a288,
				p = l.a.db355331,
				m = l.a.a8428d5e,
				b = l.a.a7aad8b9,
				g = l.a.e431f1aa,
				f = l.a.a7391707,
				_ = l.a.d2dbfa91,
				y = l.a.cd734f65,
				w = l.a.c8891d06;
			class v extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderCategory", () => {
						const {
							category: e
						} = this.props;
						return e ? r.createElement(a.c, {
							align: "left",
							numberOfLines: 1,
							size: "small",
							weight: "bold"
						}, e) : null
					}), i()(this, "_renderGameScheduledDateTime", () => {
						const {
							startTimeMillis: e
						} = this.props;
						if (e) {
							const t = new Date(parseInt(e, 10)),
								n = (e => {
									const t = (new Date).setHours(0, 0, 0, 0),
										n = t + 864e5;
									return e >= t && e < n ? 0 : e >= n && e < t + 1728e5 ? 1 : -1
								})(t);
							return -1 === n ? this._renderDateTime(t) : this._renderTodayTomorrow(n, t)
						}
						return null
					}), i()(this, "_renderTodayTomorrow", (e, t) => {
						const n = u(t);
						return r.createElement(c.a, null, r.createElement(a.c, {
							color: "gray600",
							size: "small",
							weight: "bold"
						}, 0 === e ? y : w), r.createElement(a.c, {
							color: "gray600",
							size: "small"
						}, n))
					}), i()(this, "_renderDateTime", e => {
						const t = u(e),
							n = h(e);
						return r.createElement(c.a, null, r.createElement(a.c, {
							color: "gray600",
							size: "small",
							weight: "bold"
						}, n), r.createElement(a.c, {
							color: "gray600",
							size: "small"
						}, t))
					}), i()(this, "_renderGameStateValue", (e, t) => {
						const {
							gameClockPeriod: n
						} = this.props, o = this._getWinnerName(), i = e && o ? p({
							team: o
						}) : t && n ? n : void 0;
						return i ? r.createElement(a.c, {
							color: "gray600",
							numberOfLines: 1,
							size: "small"
						}, i) : null
					}), i()(this, "_getWinnerName", () => {
						const {
							teams: e,
							winnerId: t
						} = this.props, n = e && e.find(e => e.id === t);
						return n && n.shortName
					})
				}
				render() {
					const {
						withCategory: e,
						gameState: t
					} = this.props, n = t === d.a.Scheduled, o = t === d.a.InProgress, i = t === d.a.Completed;
					return r.createElement(r.Fragment, null, n ? this._renderGameScheduledDateTime() : r.createElement(c.a, null, r.createElement(a.c, {
						color: o ? "red500" : "gray600",
						numberOfLines: 1,
						size: "small",
						weight: "bold"
					}, (e => {
						switch (e) {
							case d.a.Scheduled:
								return m;
							case d.a.InProgress:
								return b;
							case d.a.Completed:
								return g;
							case d.a.Postponed:
								return f;
							case d.a.Cancelled:
								return _;
							default:
								return null
						}
					})(t)), this._renderGameStateValue(i, o)), e ? this._renderCategory() : null)
				}
			}
			i()(v, "defaultProps", {
				withCategory: !0
			})
		},
		O6Yq: function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return u
			}));
			n("x4t0"), n("kYxP"), n("Cm4o");
			var o = n("6/RC"),
				i = n("EfWO"),
				r = n("ikiw"),
				a = n("2qJZ");
			const s = {
					"/search": ["q"]
				},
				l = e => o.canUseDOM ? new window.URL(e) : new i.URL(e);

			function c(e, t) {
				const n = l(u(e));
				return null === t ? n.searchParams.delete("lang") : n.searchParams.set("lang", t), n.href
			}

			function d(e, t = r.c) {
				return t.reduce((t, n) => (t[n] = c(e, n), t), {})
			}

			function h(e) {
				return c(e, null)
			}

			function u(e) {
				const t = l(e);
				return (e => {
					try {
						const t = s[e.pathname];
						e.searchParams.forEach((e, n, o) => {
							t && !1 !== t.includes(n) || o.delete(n)
						})
					} catch (e) {}
				})(t), t.hostname = t.hostname === a.a ? a.a : a.b, t.href.toLowerCase()
			}
		},
		OhOQ: function(e, t, n) {
			"use strict";
			var o = n("97Jx"),
				i = n.n(o),
				r = n("ERkP"),
				a = (n("kYxP"), n("KEM+")),
				s = n.n(a),
				l = n("QX9J"),
				c = n("3XMw"),
				d = n.n(c),
				h = n("cm6r"),
				u = n("6/RC");
			let p;
			var m = n("oLZl"),
				b = n("tn7R"),
				g = n("7nmT"),
				f = n.n(g),
				_ = n("rHpw"),
				y = n("aITJ"),
				w = n("shC7"),
				v = n("MWbm"),
				C = (n("IAdD"), n("Lsrn")),
				E = n("k/Ka");
			const T = (e = {}) => Object(E.a)("svg", Object.assign({}, e, {
				style: [C.a.root, e.style, w.a.isRTL && C.a.iconRTL],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M8.914 12l6.793-6.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-7.5 7.5c-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 12z"
			})));
			T.metadata = {
				width: 24,
				height: 24
			};
			var x = T,
				k = n("iySH");
			const I = d.a.gea7aa3c,
				S = d.a.b6462b32,
				P = () => function() {
					if (void 0 !== p || !u.canUseDOM) return p;
					const e = document.createElement("template");
					e.innerHTML = '<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div></div>';
					const t = e.content.firstChild;
					if (!(t && t instanceof window.HTMLElement)) return p;
					document.body && document.body.appendChild(t);
					const n = t.scrollLeft;
					return t.remove(), p = 0 === n, p
				}() || !w.a.isRTL;
			class R extends r.Component {
				constructor(...e) {
					super(...e), s()(this, "_list", r.createRef()), s()(this, "_children", []), s()(this, "_focusedTabIndex", this.props.visibleItemIndex || 0), s()(this, "state", {
						buttonWidth: 0,
						hidePrevButton: !0,
						hideNextButton: !0,
						swipeableHeight: void 0,
						swipeableWidth: void 0
					}), s()(this, "_getButtonTransformStyle", e => {
						const {
							buttonWidth: t
						} = this.state, n = 1.2 * (t || 50);
						return {
							transform: [{
								translateX: e ? -1 * n : n
							}]
						}
					}), s()(this, "_handlePreviousClick", () => {
						this._goToPreviousPage()
					}), s()(this, "_handleNextClick", () => {
						this._goToNextPage()
					}), s()(this, "_handleSwipeableLayout", e => {
						const {
							nativeEvent: {
								layout: {
									height: t,
									width: n
								}
							}
						} = e;
						n !== this.state.swipeableWidth && (this._list.current && this.state.buttonWidth && this._list.current.setNativeProps({
							style: {
								scrollPadding: this.state.buttonWidth
							}
						}), this.setState({
							swipeableWidth: n,
							swipeableHeight: t
						}))
					}), s()(this, "_handleButtonLayout", e => {
						const {
							nativeEvent: {
								layout: {
									width: t
								}
							}
						} = e, {
							buttonWidth: n
						} = this.state;
						t > 0 && t !== n && this.setState({
							buttonWidth: t
						})
					}), s()(this, "_handleItemClick", e => () => {
						this._goToItem(e), this._focusedTabIndex = e
					}), s()(this, "_handleKeyDown", e => {
						const {
							key: t
						} = e, n = this._focusedTabIndex, {
							children: o,
							tabRefs: i
						} = this.props;
						if (t !== m.a.ArrowLeft && t !== m.a.ArrowRight || !i) return;
						e.preventDefault();
						let r = n;
						(!w.a.isRTL && t === m.a.ArrowLeft || w.a.isRTL && t === m.a.ArrowRight) && (r = 0 === n ? o.length - 1 : n - 1), (!w.a.isRTL && t === m.a.ArrowRight || w.a.isRTL && t === m.a.ArrowLeft) && (r = n === o.length - 1 ? 0 : n + 1);
						const a = i[r];
						a && a.focus({
							preventScroll: !0
						}), this._focusedTabIndex = r, this._goToItem(r)
					}), s()(this, "_setupIntersectionObserver", () => {
						if (window.IntersectionObserver) {
							const e = f.a.findDOMNode(this._list.current);
							this._observer = new window.IntersectionObserver(this._handleIntersection, {
								root: e,
								rootMargin: "5px",
								threshold: [.5, 1]
							}), this.props.tabRefs && Object(b.a)(this.props.tabRefs).forEach(e => {
								const t = f.a.findDOMNode(e);
								t && t instanceof window.HTMLElement && this._observer.observe(t.parentNode)
							})
						}
					}), s()(this, "_handleIntersection", (e, t) => {
						const {
							children: n
						} = this.props, {
							onVisibleRangeChange: o
						} = this.props;
						e.forEach(e => {
							const i = Array.from(t.root.children).indexOf(e.target);
							0 === i ? this.setState({
								hidePrevButton: 1 === e.intersectionRatio
							}) : i === n.length - 1 && this.setState({
								hideNextButton: 1 === e.intersectionRatio
							}), -1 !== i && o && o({
								index: i,
								intersectionRatio: e.intersectionRatio
							})
						})
					}), s()(this, "_goToOffset", e => {
						const t = f.a.findDOMNode(this._list.current);
						if (t instanceof window.HTMLElement)
							if (w.a.isRTL)
								if (P()) this._scrollToOffset(-e);
								else {
									const n = t.scrollWidth - (this.state.swipeableWidth || 0);
									this._scrollToOffset(n - e)
								}
						else this._scrollToOffset(e);
						else this._scrollToOffset(e)
					}), s()(this, "_scrollToOffset", e => {
						const t = f.a.findDOMNode(this._list.current);
						t instanceof window.HTMLElement && t.scrollTo({
							left: e,
							behavior: "smooth"
						})
					}), s()(this, "_getLeftOffset", e => {
						const t = this._list.current && f.a.findDOMNode(this._list.current),
							n = t && t instanceof window.HTMLElement ? t.scrollLeft : 0,
							o = t && t instanceof window.HTMLElement ? t.scrollWidth : 0;
						let i = 0;
						return i = w.a.isRTL ? P() && w.a.isRTL ? Math.min(0, n) : Math.min(0, n - (o - e)) : n, Math.ceil(i)
					}), s()(this, "_goToPreviousPage", () => {
						const {
							swipeableWidth: e = 0
						} = this.state;
						this._goToOffset(this._getLeftOffset(e) - e)
					}), s()(this, "_goToNextPage", () => {
						const {
							swipeableWidth: e = 0
						} = this.state;
						this._goToOffset(this._getLeftOffset(e) + e)
					})
				}
				componentDidMount() {
					const {
						visibleItemIndex: e
					} = this.props;
					e && this._goToItem(e), this._setupIntersectionObserver()
				}
				componentDidUpdate(e, t) {
					this._handleSelectedItemChange(e), this.state.buttonWidth !== t.buttonWidth && this._list.current && this._list.current.setNativeProps({
						style: {
							scrollPadding: this.state.buttonWidth
						}
					})
				}
				componentWillUnmount() {
					this._observer && this._observer.disconnect()
				}
				render() {
					const {
						accessibilityLabel: e,
						style: t,
						viewType: n
					} = this.props;
					return r.createElement(l.a.Provider, {
						viewType: n || "segmented_control"
					}, r.createElement(v.a, {
						accessibilityLabel: e,
						accessibilityRole: "navigation",
						onKeyDown: this._handleKeyDown,
						style: [O.root, t]
					}, this._renderChildren()))
				}
				_renderChildren() {
					const {
						children: e,
						stretchChildren: t
					} = this.props, n = w.a.isRTL && y.a.isSafari() && y.a.safariVersion() < 14;
					return r.createElement(v.a, {
						style: O.swipeableContainer
					}, this._renderPreviousButton(), r.createElement(v.a, {
						onLayout: this._handleSwipeableLayout,
						style: O.swipeable
					}, r.createElement(v.a, {
						accessibilityRole: "tablist",
						ref: this._list,
						style: [O.list, n && O.listSafariRtl]
					}, e.map((e, n) => r.createElement(v.a, {
						accessibilityRole: "presentation",
						key: n,
						onClick: this._handleItemClick(n),
						style: [O.item, t ? O.stretchWidthChild : void 0]
					}, e)))), this._renderNextButton())
				}
				_renderPreviousButton() {
					const {
						navButtonStyle: e
					} = this.props, {
						hidePrevButton: t,
						swipeableHeight: n
					} = this.state;
					return r.createElement(l.a.Provider, {
						viewType: "previous"
					}, r.createElement(h.a, {
						accessibilityLabel: S,
						accessibilityRole: "button",
						disabled: t,
						importantForAccessibility: "no-hide-descendants",
						interactiveStyles: null,
						onClick: this._handlePreviousClick,
						onLayout: this._handleButtonLayout,
						style: [O.navButton, {
							height: n
						}, e, t && this._getButtonTransformStyle(!w.a.isRTL)]
					}, r.createElement(x, {
						style: [O.navButtonIcon, t && O.navButtonIconDisabled]
					})))
				}
				_renderNextButton() {
					const {
						navButtonStyle: e
					} = this.props, {
						swipeableHeight: t,
						hideNextButton: n
					} = this.state;
					return r.createElement(l.a.Provider, {
						viewType: "next"
					}, r.createElement(h.a, {
						accessibilityLabel: I,
						accessibilityRole: "button",
						disabled: n,
						importantForAccessibility: "no-hide-descendants",
						interactiveStyles: null,
						onClick: this._handleNextClick,
						onLayout: this._handleButtonLayout,
						style: [O.navButton, O.navButtonNext, {
							height: t
						}, e, n && this._getButtonTransformStyle(w.a.isRTL)]
					}, r.createElement(k.a, {
						style: [O.navButtonIcon, n && O.navButtonIconDisabled]
					})))
				}
				_handleSelectedItemChange(e) {
					const {
						visibleItemIndex: t
					} = this.props;
					"number" == typeof t && e.visibleItemIndex !== t && this._goToItem(t)
				}
				_goToItem(e) {
					const {
						tabRefs: t
					} = this.props;
					if (t && t[e]) {
						const n = f.a.findDOMNode(t[e]);
						if (n && n instanceof window.HTMLElement && n.scrollIntoView) try {
							n.scrollIntoView({
								behavior: "smooth",
								block: "nearest",
								inline: "nearest"
							})
						} catch (e) {
							n.scrollIntoView(!1)
						}
					}
				}
			}
			const O = _.a.create(e => ({
				root: {
					alignItems: "center",
					flexDirection: "row",
					height: e.componentDimensions.appBarHeight
				},
				swipeable: {
					display: "block",
					overflow: "hidden",
					flexGrow: 1,
					flexShrink: 1,
					height: "100%"
				},
				swipeableContainer: {
					alignItems: "center",
					flexGrow: 1,
					flexBasis: "0%",
					flexDirection: "row",
					height: "100%",
					overflow: "hidden"
				},
				list: {
					flexGrow: 1,
					flexDirection: "row",
					flexShrink: 1,
					flexWrap: "nowrap",
					height: "100%",
					transform: [{
						translate3d: "0,0,0"
					}],
					scrollSnapType: "x mandatory",
					scrollbarWidth: "none",
					overflowX: "auto",
					overflowY: "hidden"
				},
				listSafariRtl: {
					scrollSnapType: "none"
				},
				item: {
					paddingHorizontal: "0",
					scrollSnapAlign: "start"
				},
				navButton: {
					backgroundColor: e.colors.cellBackground,
					paddingHorizontal: e.spaces.xSmall,
					paddingVertical: e.spaces.small,
					position: "absolute",
					zIndex: 1,
					transitionProperty: "transform",
					transitionDuration: "0.1s",
					transitionTimingFunction: "ease-out"
				},
				navButtonNext: {
					right: 0
				},
				navButtonIcon: {
					color: e.colors.primary
				},
				navButtonIconDisabled: {
					color: e.colors.gray200
				},
				stretchWidthChild: {
					flexGrow: 1
				}
			}));
			var A = R,
				M = n("t62R"),
				L = n("lHOd"),
				D = n("I4+6"),
				j = n("oQhu"),
				N = n("fs1G");
			const F = Object(j.a)((e, t) => {
				const {
					pathname: n,
					state: o,
					query: i
				} = "string" == typeof e ? {
					pathname: e,
					state: {},
					query: {}
				} : e;
				return {
					pathname: n,
					query: i,
					method: "replace",
					state: Object.assign({}, o, {
						lockScroll: t
					})
				}
			});
			class B extends r.Component {
				constructor(...e) {
					super(...e), s()(this, "_unlisten", this.context ? this.context.listen(e => {
						this.setState({
							location: e
						})
					}) : N.a), s()(this, "state", {
						location: this.context.location
					}), s()(this, "_setRef", e => {
						this._ref = e
					}), s()(this, "_handleClick", e => {
						const {
							onClick: t
						} = this.props;
						t && t(e)
					}), s()(this, "focus", e => {
						this._ref && this._ref.focus(e)
					})
				}
				componentWillUnmount() {
					this._unlisten && this._unlisten()
				}
				render() {
					const {
						accessibilityLabel: e,
						children: t,
						isActive: n,
						retainScrollPosition: o,
						to: i,
						token: a,
						viewType: s
					} = this.props, {
						location: c
					} = this.state, d = F(i, o), u = n ? n() : (null == c ? void 0 : c.pathname) === d.pathname, p = D.a.generate({
						backgroundColor: "transparent",
						color: _.a.theme.colors.primary,
						insetFocusRing: !0
					});
					return r.createElement(l.a.ViewImpressor, {
						token: a,
						viewType: s || "segmented-control-link"
					}, r.createElement(h.a, {
						accessibilityLabel: e,
						accessibilityRole: "tab",
						accessibilityState: {
							selected: u
						},
						accessible: !!u,
						interactiveStyles: p,
						link: d,
						onPress: this._handleClick,
						style: [U.link, u && U.blueBorder],
						viewRef: this._setRef
					}, ({
						isHovered: e,
						isPressed: n
					}) => r.createElement(M.c, {
						style: e || n || u ? U.blue : U.gray600,
						weight: "bold"
					}, t)))
				}
			}
			s()(B, "contextType", L.a), s()(B, "defaultProps", {
				children: [],
				retainScrollPosition: !0
			});
			const U = _.a.create(e => ({
				link: {
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					flexGrow: 1,
					justifyContent: "center",
					borderBottomWidth: e.borderWidths.medium,
					borderBottomStyle: "solid",
					borderBottomColor: "transparent",
					outlineStyle: "none",
					padding: e.spaces.small
				},
				blueBorder: {
					borderBottomColor: e.colors.primary
				},
				blue: {
					color: e.colors.primary
				},
				gray600: {
					color: e.colors.gray600
				}
			}));
			var H = B;

			function z(e) {
				return r.createElement(A, i()({}, e, {
					children: r.Children.toArray(e.children).filter(Boolean)
				}))
			}
			z.defaultProps = {
				children: [],
				onVisibleRangeChange: () => {},
				stretchChildren: !0
			}, z.Link = H;
			t.a = z
		},
		Olb6: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("5cUs"),
				s = n("wwsH");
			const l = r.a.d9fd5570,
				c = {
					viewType: "hidden_replies"
				};
			t.a = ({
				onPress: e,
				link: t
			}) => o.createElement(s.a, {
				Icon: a.a,
				accessibilityLabel: l,
				activeColor: "primary",
				clientEventContext: c,
				link: t,
				onPress: e
			})
		},
		OrGc: function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return p
			}));
			n("jQ/y"), n("LJOr"), n("kYxP");
			var o = n("3XMw"),
				i = n.n(o),
				r = n("wD1h"),
				a = n("oQhu"),
				s = n("aITJ");
			const l = Object.freeze({
					openKeyboardShortcuts: "?",
					swipeLeft: "left",
					swipeRight: "right",
					nextItem: "j",
					previousItem: "k",
					loadNewTweets: ".",
					nightMode: "z",
					bookmark: "b",
					reply: "r",
					block: "x",
					mute: "u",
					newTweet: "n",
					newMessage: "m",
					toggleDMDrawer: "i",
					goHome: "g h",
					goExplore: "g e",
					goNotifications: "g n",
					goMentions: "g r",
					goProfile: "g p",
					goLikes: "g l",
					goLists: "g i",
					goMessages: "g m",
					goSettings: "g s",
					goToUser: "g u",
					goBookmarks: "g b",
					goDisplay: "g d",
					search: "/"
				}),
				c = Object(a.a)(e => [{
					description: i.a.d5696fcb,
					keys: l.openKeyboardShortcuts,
					universal: !0
				}, {
					description: i.a.e722b9d0,
					keys: l.nextItem,
					universal: !0
				}, {
					description: i.a.a86b5194,
					keys: l.previousItem,
					universal: !0
				}, {
					description: i.a.a690c4d0,
					keys: "Space",
					universal: !0
				}, {
					description: i.a.ed90d9ac,
					keys: l.loadNewTweets,
					universal: !1
				}, {
					description: i.a.ha8209bb,
					keys: l.goHome,
					universal: !1
				}, {
					description: i.a.fcf3e54b,
					keys: l.goExplore,
					universal: !0
				}, {
					description: i.a.eb75875d,
					keys: l.goNotifications,
					universal: !1
				}, {
					description: i.a.cdb53d79,
					keys: l.goMentions,
					universal: !1
				}, {
					description: i.a.fa98627a,
					keys: l.goProfile,
					universal: !1
				}, {
					description: i.a.d7b8eba9,
					keys: l.goLikes,
					universal: !1
				}, {
					description: "channel_follow" === e.getStringValue("home_timeline_spheres_copy_variant") ? i.a.da341460 : i.a.b0041756,
					keys: l.goLists,
					universal: !1
				}, {
					description: i.a.d4986f85,
					keys: l.goMessages,
					universal: !1
				}, {
					description: i.a.bb081ea1,
					keys: l.goSettings,
					universal: !0
				}, {
					description: i.a.i3145aa0,
					keys: l.goBookmarks,
					universal: !1
				}, {
					description: i.a.eee2ed92,
					keys: l.goToUser,
					universal: !0
				}, {
					description: i.a.ee5ccf3d,
					keys: l.goDisplay,
					universal: !1
				}]),
				d = s.a.isMac() ? "⌘" : "CTRL",
				h = Object(a.a)(e => [{
					description: i.a.b1547095,
					keys: l.newTweet,
					universal: !1
				}, {
					description: i.a.j9e025aa,
					keys: d + " Enter",
					universal: !1
				}, {
					description: i.a.e736990a,
					keys: l.newMessage,
					universal: !1
				}, {
					description: i.a.a9ae1e78,
					keys: l.search,
					universal: !0
				}, {
					description: i.a.fe731015,
					keys: r.a.shortcuts.like,
					universal: !1
				}, {
					description: i.a.d17df547,
					keys: l.reply,
					universal: !1
				}, {
					description: i.a.bac8f4c1,
					keys: r.a.shortcuts.retweet,
					universal: !1
				}, {
					description: i.a.h7755862,
					keys: r.a.shortcuts.share,
					universal: !0
				}, {
					description: i.a.gb303813,
					keys: l.bookmark,
					universal: !1
				}, {
					description: i.a.c03b1126,
					keys: l.mute,
					universal: !1
				}, {
					description: i.a.ebd2abb2,
					keys: l.block,
					universal: !1
				}, {
					description: i.a.db1e4288,
					keys: "Enter",
					universal: !0
				}, {
					description: i.a.eebdef37,
					keys: r.a.shortcuts.openMediaModal,
					universal: !0
				}, {
					description: i.a.b488758b,
					keys: l.toggleDMDrawer,
					universal: !1
				}]),
				u = Object(a.a)(e => {
					const t = h(e),
						n = c(e),
						o = {};
					return [...t, ...n].forEach(({
						description: e,
						keys: t
					}) => o[t] = e), JSON.stringify(o)
				}),
				p = (e, t) => {
					if (t) return {
						dataSet: {
							"at-shortcutkeys": u(e)
						}
					}
				}
		},
		Ox2E: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("1YZw"),
				i = n("k49u"),
				r = n("3XMw"),
				a = n.n(r);
			const s = a.a.add55942,
				l = a.a.ib8f5f3b,
				c = a.a.e20fc755,
				d = a.a.hae1c933,
				h = {
					customErrorHandler: () => Object(o.b)({
						text: s
					}),
					showToast: !0
				},
				u = {
					customErrorHandler: () => Object(o.b)({
						text: l
					}),
					showToast: !0
				},
				p = {
					customErrorHandler: ({
						errors: e
					}) => {
						if (e) {
							if (e.filter(e => (null == e ? void 0 : e.code) === i.a.ListAdminRightsError).length) return Object(o.b)({
								text: c
							})
						}
						return Object(o.b)({
							text: d
						})
					},
					showToast: !0
				}
		},
		P1oR: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ce
			}));
			n("IAdD"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("v6aA"),
				c = n("6rlp"),
				d = n("RqPI"),
				h = n("P1r1"),
				u = n("1YZw"),
				p = n("rxPX"),
				m = n("0KEI"),
				b = n("F3pd"),
				g = n("x5Pi"),
				f = n("0pUJ"),
				_ = n("SrIh"),
				y = n("Fmkq"),
				w = n("j7tW"),
				v = n("jL08"),
				C = n("Zejx"),
				E = n("XOJV"),
				T = n("G6rE");
			const x = (e, t) => Object(w.b)(e, t.tweetId),
				k = (e, t) => t.tweetId,
				I = (e, t) => t.contextTweetId,
				S = (e, t) => {
					const {
						promotedContent: n,
						tweetId: o
					} = t;
					if (n && n.advertiser) return T.e.select(e, n.advertiser.id_str);
					if (n && "earned" !== Object(b.a)(n)) {
						const {
							advertiser_name: e
						} = n;
						Object(_.a)("No advertiser info for non-URT promoted tweet", {
							extra: {
								advertiser_name: e,
								tweetId: o
							}
						})
					}
				},
				P = (e, t) => t.socialContext,
				R = (e, {
					socialContext: t
				}) => {
					const n = t && t.topicContext;
					return n ? C.a.select(e, n.topicId) : void 0
				};
			var O = Object(p.a)().propsFromState(() => ({
					tweet: E.a.createHydratedTweetSelector(k),
					contextTweet: E.a.createHydratedTweetSelector(I),
					explicitSocialContext: P,
					promotedContentAdvertiser: S,
					isPinned: x,
					loggedInUserId: d.g,
					dataSaverMode: h.k,
					topic: R
				})).adjustStateProps(({
					tweet: e,
					contextTweet: t,
					explicitSocialContext: n,
					promotedContentAdvertiser: o,
					isPinned: i,
					loggedInUserId: r,
					dataSaverMode: a,
					topic: s
				}) => {
					const l = t ? Object(g.c)(t, r) : e ? Object(g.c)(e, r) : void 0;
					return {
						dataSaverMode: a,
						isPinned: i,
						tweet: e,
						contextTweet: t,
						topic: s,
						socialContext: n || l,
						promotedContentAdvertiser: o
					}
				}).propsFromActions(() => ({
					addToast: u.b,
					createLocalApiErrorHandler: Object(m.d)("TWEET_DETAIL_CONTAINER"),
					fetchTopicIfNeeded: C.a.fetchOneIfNeeded,
					log: c.a,
					mute: f.a,
					richScribeAction: y.richScribeAction,
					setArticlesVisited: v.a,
					undoTopicNotInterested: C.a.undoNotInterested,
					unmute: T.e.unmute
				})),
				A = n("6bZg"),
				M = n("3XMw"),
				L = n.n(M),
				D = (n("JtPf"), n("zb92")),
				j = n("RuTB"),
				N = Object(D.a)({
					loader: () => Promise.all([n.e(0), n.e(3), n.e(6), n.e(59)]).then(n.bind(null, "1RVd")),
					renderPlaceholder: (e, t) => s.createElement(j.a, {
						hasError: e,
						onRetry: t
					})
				}),
				F = n("iFPY"),
				B = n("hACr"),
				U = n("jQy5"),
				H = n("7nmT"),
				z = n.n(H),
				W = Object(D.a)({
					loader: () => Promise.all([n.e(0), n.e(3), n.e(8), n.e(6), n.e(63)]).then(n.bind(null, "M5JI")),
					renderPlaceholder: (e, t) => s.createElement(j.a, {
						hasError: e,
						onRetry: t
					})
				}),
				V = n("Rp9C"),
				K = n("mqpi"),
				G = n("fz3c"),
				q = n("xM7j"),
				X = n("BLtI"),
				Y = n("3zeG"),
				Q = n("aITJ"),
				J = n("MWbm"),
				$ = n("TnY3"),
				Z = n("7JQg"),
				ee = n("cFuS"),
				te = n("OIC0"),
				ne = n("qqET"),
				oe = n("oQhu"),
				ie = n("mN6z"),
				re = n("Cqiq");
			const ae = L.a.f277e949,
				se = L.a.f5718548;
			class le extends s.Component {
				constructor(...e) {
					super(...e), a()(this, "state", {
						articleClicked: !1,
						displayReported: !1,
						enableKeyboardShortcuts: !1,
						replyPressToggle: !1
					}), a()(this, "_muteOrUnmuteAction", U.a.bind(null, this.context.featureSwitches)), a()(this, "_isInlineReplyEnabled", this.context.featureSwitches.isTrue("responsive_web_inline_reply_enabled")), a()(this, "_isArticleNudgeEnabled", this.context.featureSwitches.isTrue("responsive_web_article_nudge_enabled")), a()(this, "_getScribeData", Object(oe.a)((e, t, n) => {
						const o = function(e, t, n) {
							const o = V.a.addTweetToItems(n ? n.items : [], e, t);
							return Object.assign({}, n || {}, {
								items: o
							})
						}(e, t, n);
						return this._cachedScribeData && Object(ie.a)(o, this._cachedScribeData) || (this._cachedScribeData = o), this._cachedScribeData
					})), a()(this, "getTweetHeight", () => this._node ? this._node.getBoundingClientRect().height : 0), a()(this, "_setRef", e => {
						const t = z.a.findDOMNode(e);
						t && t instanceof Element && (this._node = t)
					}), a()(this, "_handleReplyPress", () => {
						this.setState({
							replyPressToggle: !this.state.replyPressToggle
						})
					}), a()(this, "_handleModeratedIconClick", () => this._scribeAction({
						element: "moderated_replies_icon",
						action: "click"
					})), a()(this, "_handleModeratedIconShown", () => this._scribeAction({
						element: "moderated_replies_icon",
						action: "impression"
					})), a()(this, "_handleBirdwatchNotesIconClick", () => this._scribeAction({
						element: "birdwatch_notes_icon",
						action: "click"
					})), a()(this, "_handleFocus", () => {
						this.setState({
							enableKeyboardShortcuts: !0
						})
					}), a()(this, "_handleBlur", () => {
						this.setState({
							enableKeyboardShortcuts: !1
						})
					}), a()(this, "_handleShowReportedTweet", () => {
						this.setState({
							displayReported: !0
						})
					}), a()(this, "_getShortcutKeyHandlers", () => {
						const {
							shortcutKey: e,
							onClick: t
						} = this._getMuteOrUnmuteAction();
						return e ? {
							[e]: t
						} : {}
					}), a()(this, "_getMuteOrUnmuteAction", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							mute: n,
							unmute: o,
							tweet: i
						} = this.props;
						if (!i) return {};
						const {
							user: r
						} = i, a = {
							addToast: e,
							createLocalApiErrorHandler: t,
							scribeAction: ({
								element: e
							}) => {
								this._scribeAction({
									element: e,
									action: "click"
								})
							}
						};
						return this._muteOrUnmuteAction(Object.assign({}, a, {
							mute: n,
							unmute: o,
							user: r
						}))
					}), a()(this, "_getRenderCurationActionMenu", Object(oe.a)((e, t, n, o, i, r, a) => l => !!r && s.createElement(Y.a, {
						isPinned: t,
						onClose: l,
						onDeleteTweet: () => {
							const {
								fromApp: t,
								usedFallback: o
							} = n.state || {};
							t && !o ? e.goBack() : e.push("/")
						},
						onTweetDismiss: o,
						promotedContent: i,
						tweet: r,
						withHideReply: a,
						withMuteConversation: !0,
						withViewHiddenReplies: !0
					}))), a()(this, "_scribeAction", (e, t, n) => {
						const {
							promotedContent: o,
							richScribeAction: i,
							scribeNamespace: r,
							tweet: a
						} = this.props, s = a ? [V.a.forTweet(a, o)] : [], l = Object.assign({
							items: s
						}, n && {
							click_tracking_embed_details: n
						}, t);
						i(Object.assign({}, r, e), l)
					}), a()(this, "_handleReplyContextClick", (e, t) => {
						this._scribeAction({
							element: "reply_context",
							action: "click"
						}, {
							event_value: t
						})
					}), a()(this, "_handlePromotedIndicatorClick", () => {
						this._handleAsyncPromotedEvent(ee.b.FOOTER_PROFILE)
					}), a()(this, "_handleMediaClick", () => {
						this._scribeAction({
							element: "platform_photo_card",
							action: "click"
						}), this._handleAsyncPromotedEvent(ee.b.EMBEDDED_MEDIA)
					}), a()(this, "_handleEntityClick", (e, t, n) => {
						const o = ee.a[t],
							i = A.a[t],
							r = V.a.getClickTrackingEmbedDetails(this.props.promotedContent, n);
						o && this._handleAsyncPromotedEvent(o), t === te.a.URL && r && this._scribeAction({
							action: ne.a.CLICK_ID_EMBED
						}, void 0, r), i && this._scribeAction({
							action: i
						})
					}), a()(this, "_handlePromotedDisclaimerLearnMoreClick", e => () => {
						this._scribeAction({
							component: e,
							element: "learn_more",
							action: "click"
						})
					}), a()(this, "_handlePoliticalSponsorWebsiteClick", () => {
						this._scribeAction({
							component: "political_ad",
							element: "organization_website",
							action: "click"
						})
					}), a()(this, "_handleAnalyticsClick", () => {
						this._scribeAction({
							element: "analytics",
							action: "click"
						})
					}), a()(this, "_handleAvatarClick", () => {
						this._scribeAction({
							element: "avatar",
							action: "profile_click"
						}), this._handleAsyncPromotedEvent(ee.b.PROFILE_IMAGE_CLICK)
					}), a()(this, "_handleScreenNameClick", () => {
						this._scribeAction({
							element: "user",
							action: "profile_click"
						}), this._handleAsyncPromotedEvent(ee.b.SCREEN_NAME_CLICK)
					}), a()(this, "_handleCaretClick", () => {
						this._scribeAction({
							element: "caret",
							action: "click"
						})
					}), a()(this, "_handleTopicFetch", () => {
						var e;
						const {
							createLocalApiErrorHandler: t,
							fetchTopicIfNeeded: n,
							socialContext: o
						} = this.props, i = null == o || null == (e = o.topicContext) ? void 0 : e.topicId;
						i && n(i).catch(t())
					}), a()(this, "_handleUndoTopicNotInterested", () => {
						const {
							createLocalApiErrorHandler: e,
							topic: t,
							undoTopicNotInterested: n
						} = this.props;
						this._scribeAction({
							element: "topic",
							action: "un_not_interested"
						}), t && n(t.id).catch(e())
					}), a()(this, "_handleCardLinkClick", () => {
						const {
							setArticlesVisited: e,
							tweet: t
						} = this.props;
						var n;
						this._isArticleNudgeEnabled && (this.setState({
							articleClicked: !0
						}), e(null == t || null == (n = t.card) ? void 0 : n.url))
					})
				}
				componentDidMount() {
					this._handleTopicFetch()
				}
				componentDidUpdate(e) {
					if (this.props.tweet && e.tweet && !e.tweet.user.blocking && this.props.tweet.user.blocking) {
						const {
							history: e
						} = this.props;
						e.goBack({
							backLocation: "/"
						})
					}
				}
				render() {
					const {
						loggedInUserId: e
					} = this.context, {
						tweet: t
					} = this.props;
					if (!t) return null;
					const n = t.user.id_str === e,
						o = Object(re.b)(t.withheld_scope),
						i = Object(G.d)(t) && !this.state.displayReported;
					return s.createElement(s.Fragment, null, o ? s.createElement(J.a, null, this._renderWithheldTweet(), n ? this._renderTweetComponent() : null) : i ? this._renderReportedTombstone() : this._renderTweetComponent(), this._renderIntentPrompt())
				}
				_renderIntentPrompt() {
					const {
						forwardPivotInfo: e,
						history: t,
						tweet: n
					} = this.props;
					if (n && t.location.pathname.indexOf("/intent/") > -1) return s.createElement(F.a, {
						forwardPivotInfo: e,
						history: t,
						location: t.location,
						tweetId: n.id_str
					})
				}
				_renderTweetComponent() {
					const {
						contextTweet: e,
						dataSaverMode: t,
						forwardPivotInfo: n,
						hasModeratedReplies: o,
						history: r,
						innerForwardPivotInfo: a,
						isPinned: l,
						location: c,
						onTweetDismiss: d,
						promotedContent: h,
						promotedContentAdvertiser: u,
						quotedTweetTombstoneInfo: p,
						scribeData: m,
						scribeNamespace: b,
						socialContext: g,
						topic: f,
						tweet: _,
						withActions: y,
						withHideReply: w,
						withInlineMedia: v,
						withSocialContext: C
					} = this.props, E = {
						contextTweet: e,
						dataSaverMode: t,
						forwardPivotInfo: n,
						hasModeratedReplies: o,
						innerForwardPivotInfo: a,
						promotedContent: h,
						promotedContentAdvertiser: u,
						quotedTweetTombstoneInfo: p,
						socialContext: g,
						topic: f,
						tweet: _,
						withActions: y,
						withInlineMedia: v,
						withSocialContext: C
					}, {
						articleClicked: T,
						enableKeyboardShortcuts: x
					} = this.state;
					if (!_) return null;
					const k = Object(ie.a)(this._cachedScribeNamespace, b) ? this._cachedScribeNamespace : this._cachedScribeNamespace = b,
						I = _ && _.card && !_.is_quote_status ? _.card.url : void 0;
					return s.createElement(Z.b, {
						data: this._getScribeData(_.retweeted_status || _, h, m),
						namespace: k
					}, s.createElement(B.a, {
						enabled: !!x,
						handlers: this._getShortcutKeyHandlers()
					}, s.createElement(X.b, i()({}, E, {
						articleClicked: T,
						enableKeyboardShortcuts: x,
						excludeCardUrl: I,
						isFocal: !0,
						isInlineReplyEnabled: this._isInlineReplyEnabled,
						isTweetDetail: !0,
						onAnalyticsClick: this._handleAnalyticsClick,
						onAvatarClick: this._handleAvatarClick,
						onBirdwatchNotesIconClick: this._handleBirdwatchNotesIconClick,
						onBlur: this._handleBlur,
						onCardLinkClick: this._handleCardLinkClick,
						onCaretClick: this._handleCaretClick,
						onEntityClick: this._handleEntityClick,
						onFocus: this._handleFocus,
						onMediaClick: this._handleMediaClick,
						onModeratedIconClick: this._handleModeratedIconClick,
						onModeratedIconShown: this._handleModeratedIconShown,
						onPoliticalSponsorWebsiteClick: this._handlePoliticalSponsorWebsiteClick,
						onPromotedDisclaimerLearnMoreClick: this._handlePromotedDisclaimerLearnMoreClick,
						onPromotedIndicatorClick: this._handlePromotedIndicatorClick,
						onReplyContextClick: this._handleReplyContextClick,
						onReplyPress: this._handleReplyPress,
						onScreenNameClick: this._handleScreenNameClick,
						onUndoTopicNotInterestedClick: this._handleUndoTopicNotInterested,
						ref: this._setRef,
						renderCurationActionMenu: this._getRenderCurationActionMenu(r, l, c, d, h, _, w),
						tweet: _
					})), this._renderInlineReply()))
				}
				_renderInlineReply() {
					const {
						history: e,
						location: t,
						tweetId: n,
						tweet: o
					} = this.props, {
						replyPressToggle: i
					} = this.state, {
						loggedInUserId: r
					} = this.context;
					if (!o) return null;
					const a = this._isInlineReplyEnabled && r && !Object(K.a)(o, "reply"),
						l = Q.a.isMobileOS() ? N : W;
					return a ? s.createElement(l, {
						getTweetHeight: this.getTweetHeight,
						history: e,
						location: t,
						parentTweetId: n,
						replyPressToggle: i
					}) : null
				}
				_renderWithheldTweet() {
					const {
						tweet: e
					} = this.props;
					return !!e && s.createElement(re.a, {
						displayTextRange: e.display_text_range,
						entities: e.withheld_entities || e.entities,
						lang: e.lang,
						text: e.withheld_text || e.text
					})
				}
				_renderReportedTombstone() {
					const {
						tweet: e
					} = this.props;
					return !!e && s.createElement(q.a, {
						actionText: ae,
						lang: e.lang,
						onClick: this._handleShowReportedTweet
					}, se)
				}
				_handleAsyncPromotedEvent(e, t) {
					const {
						createLocalApiErrorHandler: n,
						log: o,
						promotedContent: i,
						tweet: r
					} = this.props;
					if (r && i) {
						const {
							disclosure_type: a,
							impression_id: s
						} = i;
						o({
							disclosureType: a,
							itemId: r.id_str,
							itemType: "tweet",
							params: Object.assign({
								event: e,
								impression_id: s
							}, t)
						}).catch(n())
					}
				}
			}
			a()(le, "contextType", l.a);
			const ce = Object($.a)(O(le));
			t.b = Object(Z.c)({
				component: "tweet"
			})(ce)
		},
		P2xQ: function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return s
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return w
			}));
			var o = n("3XMw"),
				i = n.n(o),
				r = n("w02m"),
				a = n("qz6Z");
			const s = i.a.hb568af3,
				l = i.a.bb1cbeb5,
				c = i.a.h2f62205,
				d = i.a.e67b2d65,
				h = i.a.f05597b2,
				u = e => d({
					screenName: e
				}),
				p = e => h({
					screenName: e
				}),
				m = (e, t, n) => {
					const {
						muting: o,
						screen_name: i
					} = e;
					return {
						text: o ? p(i) : u(i),
						onClick: o ? n : t,
						Icon: o ? r.a : a.a
					}
				},
				b = i.a.h59f52ee,
				g = i.a.eea0cbed,
				f = i.a.i29533b2,
				_ = i.a.h129c3c3,
				y = (e, t) => t && e.isTrue("responsive_web_mute_unmute_toast_with_user_screen_name_enabled") ? (e => f({
					screenName: e
				}))(t) : b,
				w = (e, t) => t && e.isTrue("responsive_web_mute_unmute_toast_with_user_screen_name_enabled") ? (e => _({
					screenName: e
				}))(t) : g
		},
		PSpH: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("k49u"),
				i = n("LVU8"),
				r = n("3XMw"),
				a = n.n(r),
				s = n("fs1G");
			const l = a.a.j4292c23,
				c = a.a.a0ba5842,
				d = a.a.i859a9d3,
				h = a.a.a5202b82,
				u = a.a.f8cbf714,
				p = a.a.f2e66452,
				m = {
					defaultToast: {
						text: h
					},
					[o.a.CurrentUserSuspended]: {
						toast: {
							text: p,
							action: {
								label: d,
								link: "https://support.twitter.com/articles/15790"
							}
						}
					},
					[o.a.DuplicateFollowRequest]: {
						customAction: s.a
					},
					[o.a.FollowBlockedUserError]: {
						toast: {
							text: l
						}
					},
					[o.a.FollowError]: {
						customAction: i.b
					},
					[o.a.FollowRateLimitExceeded]: {
						toast: {
							action: {
								label: d,
								link: "https://support.twitter.com/articles/66885"
							},
							text: c
						}
					},
					[o.a.TargetUserNotFound]: {
						toast: {
							text: u
						}
					}
				}
		},
		PdwO: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("v6aA"),
				s = n("Irs7"),
				l = n("rHpw"),
				c = n("t62R"),
				d = n("G1WX"),
				h = n("3XMw"),
				u = n.n(h),
				p = n("shC7"),
				m = n("MWbm"),
				b = (n("IAdD"), n("Lsrn")),
				g = n("k/Ka");
			const f = (e = {}) => Object(g.a)("svg", Object.assign({}, e, {
				style: [b.a.root, e.style],
				viewBox: "0 0 74 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z"
			})));
			f.metadata = {
				width: 74,
				height: 24
			};
			var _ = f;
			const y = (e = {}) => Object(g.a)("svg", Object.assign({}, e, {
				style: [b.a.root, e.style],
				viewBox: "0 0 74 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M9.833 17.667C5.013 17.667.96 13.74.96 8.92S5.007.173 9.833.173c2.667 0 4.567 1.047 5.993 2.413L14.14 4.273c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.133-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.94.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.1 2.453z",
				fill: "#4285F4"
			}), r.createElement("path", {
				d: "M30.633 12.04c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413s-3.167 1.387-3.167 3.413c0 2.007 1.467 3.413 3.167 3.413s3.167-1.406 3.167-3.413z",
				fill: "#EA4335"
			}), r.createElement("path", {
				d: "M43.3 12.033c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413z",
				fill: "#FBBC05"
			}), r.createElement("path", {
				d: "M55.333 6.747V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zM53.16 12.06c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68-.006 3.007-1.433 3.007-3.393z",
				fill: "#4285F4"
			}), r.createElement("path", {
				d: "M59.807.78v16.553h-2.473V.78h2.473z",
				fill: "#34A853"
			}), r.createElement("path", {
				d: "M69.693 13.893l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z",
				fill: "#EA4335"
			})));
			y.metadata = {
				width: 74,
				height: 24
			};
			var w = y;
			const v = u.a.he9c9633,
				C = u.a.ca1e7e77,
				E = u.a.i73a7d47,
				T = u.a.eeadb766;
			class x extends r.Component {
				constructor(e, t) {
					super(e, t), i()(this, "_handleGetTranslationClick", e => {
						const {
							analytics: t,
							fetchTranslation: n
						} = this.props;
						n(), t.scribeAction("click"), this.setState({
							translationVisible: !0
						})
					}), i()(this, "_handleCollapseTranslation", e => {
						this.setState({
							translationVisible: !1
						})
					}), i()(this, "_renderTranslation", () => {
						const {
							originLanguage: e,
							translatedMessage: t
						} = this.props, n = e ? T({
							originLanguage: e
						}) : E, o = l.a.isDarkMode() ? r.createElement(_, {
							style: k.nightLogo
						}) : r.createElement(w, null), i = {
							company: r.createElement(c.c, {
								accessibilityLabel: n,
								color: "gray600",
								link: "https://translate.google.com",
								size: "small",
								style: k.googleLink,
								withInteractiveStyling: !1
							}, o),
							toggle: r.createElement(c.c, {
								accessibilityLabel: C,
								accessibilityRole: "button",
								"aria-expanded": "true",
								color: "link",
								onPress: this._handleCollapseTranslation,
								size: "small",
								style: k.toggle,
								withInteractiveStyling: !0
							})
						}, a = {
							originLanguage: e
						}, s = r.createElement(c.c, {
							align: "center",
							dir: p.a.isRTL ? "rtl" : "ltr",
							numberOfLines: 1,
							style: k.callout
						}, e ? r.createElement(u.a.I18NFormatMessage, {
							$i18n: "be5322c7"
						}, r.cloneElement(i.toggle, null, u.a.j2862693({
							originLanguage: a.originLanguage
						})), i.company) : r.createElement(u.a.I18NFormatMessage, {
							$i18n: "c5f6ee1d"
						}, r.cloneElement(i.toggle, null, u.a.b7cb4fa9), i.company));
						return r.createElement(r.Fragment, null, s, r.createElement(m.a, {
							style: k.translation
						}, t))
					}), this.state = {
						translationVisible: !1
					}
				}
				render() {
					const {
						children: e,
						disableTranslation: t,
						header: n,
						style: o,
						translateButtonText: i,
						translationFetchStatus: a,
						withOriginalText: s
					} = this.props, {
						translationVisible: l
					} = this.state, {
						loggedInUserId: h
					} = this.context, u = s ? e : null;
					if (!h || t) return u ? r.createElement(m.a, {
						style: o
					}, u) : null;
					let p;
					return p = l ? r.createElement(d.a, {
						fetchStatus: a,
						onRequestRetry: this._handleGetTranslationClick,
						render: this._renderTranslation,
						retryMessage: v
					}) : r.createElement(c.c, {
						accessibilityRole: "button",
						"aria-expanded": "false",
						color: "link",
						onClick: this._handleGetTranslationClick,
						size: "small",
						style: k.callout,
						withInteractiveStyling: !0
					}, i), r.createElement(m.a, {
						style: o
					}, n, u, p)
				}
			}
			i()(x, "contextType", a.a), i()(x, "defaultProps", {
				withOriginalText: !0
			});
			const k = l.a.create(e => ({
				googleLink: {
					marginTop: "0.1em",
					marginHorizontal: e.spaces.xxSmall
				},
				nightLogo: {
					fill: e.colors.white
				},
				callout: {
					display: "flex",
					flexWrap: "wrap",
					marginTop: e.spaces.xxSmall
				},
				toggle: {
					cursor: "pointer"
				},
				translation: {
					marginTop: e.spaces.xxSmall
				}
			}));
			t.a = Object(s.a)(x, {
				element: "translate"
			})
		},
		PmiK: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return T
			}));
			n("kYxP");
			var o = n("ERkP"),
				i = n("wrlS"),
				r = n("3XMw"),
				a = n.n(r),
				s = n("gBde"),
				l = n("rxPX"),
				c = n("HAhZ");
			const d = (e, t) => Object(c.c)(e, "flexible_participation_create"),
				h = (e, t) => Object(c.c)(e, "flexible_participation_reply");
			var u = Object(l.a)().propsFromState(() => ({
					shouldShowCreateEducationTip: d,
					shouldShowReplyEducationTip: h
				})).propsFromActions(() => ({
					addTip: c.a
				})),
				p = n("feu+"),
				m = n("rHpw");
			const b = a.a.cfbcbc3d,
				g = a.a.f25c62d7,
				f = a.a.j24c37b2;
			const _ = m.a.create(e => ({
				icon: {
					height: e.spaces.xxLarge,
					width: e.spaces.xxLarge
				}
			}));
			var y = u((function(e) {
				const {
					shouldShowCreateEducationTip: t,
					addTip: n
				} = e, [r, a] = o.useState(!0), l = () => {
					n({
						flexible_participation_create: !0
					}), a(!1)
				};
				return r && t && i.b.isTrue("conversation_controls_flexible_participation_enabled") ? o.createElement(p.a, {
					actionLabel: f,
					graphic: s.a,
					graphicDisplayMode: "thumbnail",
					graphicStyle: _.icon,
					headline: b,
					onAction: l,
					onClose: l,
					subtext: g
				}) : null
			}));
			const w = a.a.ccf72401,
				v = a.a.f25c62d7,
				C = a.a.j24c37b2;
			const E = m.a.create(e => ({
				icon: {
					height: e.spaces.xxLarge,
					width: e.spaces.xxLarge
				}
			}));
			var T = u((function(e) {
				const {
					shouldShowReplyEducationTip: t,
					addTip: n
				} = e, [r, a] = o.useState(!0), l = () => {
					n({
						flexible_participation_reply: !0
					}), a(!1)
				};
				return r && t && i.b.isTrue("conversation_controls_flexible_participation_reply_enabled") ? o.createElement(p.a, {
					actionLabel: C,
					graphic: s.a,
					graphicDisplayMode: "thumbnail",
					graphicStyle: E.icon,
					headline: w,
					onAction: l,
					onClose: l,
					subtext: v
				}) : null
			}))
		},
		PnFR: function(e, t, n) {
			"use strict";
			var o = n("ezF+"),
				i = n("vWJI"),
				r = (n("IAdD"), n("MDbM")),
				a = n("caTy"),
				s = n("zh9S"),
				l = n("5bSN"),
				c = n("VPAj"),
				d = n("fs1G");
			const h = {
					component: "gap",
					action: "impression"
				},
				u = {
					action: "get_middle"
				};
			var p = ({
					component: e = l.a,
					impressionNamespace: t = h,
					clickNamespace: n = u,
					scribeData: i = {},
					divider: p,
					getChildren: m,
					getActionText: b
				}) => o.f({
					divider: p || {
						top: !0,
						bottom: !0
					},
					component: e,
					isFocusable: Object(c.a)(!0),
					selectData: ({
						entry: e,
						module: t
					}) => ({
						fetchStatus: n => t.selectCursorFetchStatus(n, e)
					}),
					bindActions: ({
						module: e
					}) => ({
						fetchCursor: e.fetchCursor,
						scribe: s.c
					}),
					createProps: ({
						data: {
							fetchStatus: e
						},
						actions: {
							fetchCursor: t,
							scribe: o
						},
						entry: s,
						scribeNamespace: l
					}) => {
						const c = s.content.url && Object(a.b)(s.content.url);
						return {
							conversationTreeMetadata: s.conversationTreeMetadata,
							isLoading: e === r.a.LOADING,
							children: m ? m(s) : void 0,
							actionText: b ? b(s) : void 0,
							onClick: () => {
								c ? o(Object.assign({}, l, n), i) : t(s).then(() => o(Object.assign({}, l, n), i), d.a)
							},
							link: c
						}
					},
					shouldDisplayBorder: e => {
						const {
							conversationTreeMetadata: t
						} = e;
						return !t || !1 === t.descendantConnector && 0 === t.indents.filter(e => "line" === e.displayType).length
					},
					onImpression: ({
						scribeNamespace: e,
						actions: {
							scribe: n
						}
					}) => {
						n(Object.assign({}, e, t), i)
					}
				}),
				m = n("KEM+"),
				b = n.n(m),
				g = n("ERkP"),
				f = n("EnM6"),
				_ = n("3XMw");
			const y = n.n(_).a.ee8c6c61;
			class w extends g.PureComponent {
				render() {
					const {
						conversationTreeMetadata: e,
						children: t,
						isLoading: n,
						onClick: o,
						link: i
					} = this.props, r = e && e.ancestorConnector, a = e && e.indents;
					return g.createElement(f.a, {
						indents: a,
						isLoading: n,
						label: t,
						link: i,
						onClick: o,
						withElbow: a ? "side" === r : void 0
					})
				}
			}
			b()(w, "defaultProps", {
				children: y
			});
			var v = w;
			class C extends g.PureComponent {
				render() {
					const {
						children: e,
						conversationTreeMetadata: t,
						isLoading: n,
						link: o,
						onClick: i
					} = this.props;
					return t ? g.createElement(v, this.props) : g.createElement(l.a, {
						children: e,
						isLoading: n,
						link: o,
						onClick: i
					})
				}
			}
			var E = C,
				T = n("xM7j");
			const x = {
					component: "cursor",
					action: "impression"
				},
				k = {
					component: "cursor",
					action: "click"
				};
			t.a = o.b({
				selectDisplayType: e => e.content.cursorType,
				handlers: {
					[i.CursorType.Top]: o.a(),
					[i.CursorType.Bottom]: o.a(),
					[i.CursorType.Gap]: p({
						getChildren: e => e.content.displayTreatment && e.content.displayTreatment.actionText ? e.content.displayTreatment.actionText : void 0
					}),
					[i.CursorType.ShowMore]: p({
						component: v,
						getChildren: e => e.content.displayTreatment && e.content.displayTreatment.actionText ? e.content.displayTreatment.actionText : void 0,
						divider: {
							top: !1,
							bottom: !1
						},
						impressionNamespace: x,
						clickNamespace: k
					}),
					[i.CursorType.ShowMoreThreads]: p({
						component: E,
						getChildren: e => e.content.displayTreatment && e.content.displayTreatment.actionText ? e.content.displayTreatment.actionText : void 0,
						divider: e => e.conversationTreeMetadata ? {
							top: !1,
							bottom: !1
						} : {
							top: !0,
							bottom: !1
						},
						impressionNamespace: x,
						clickNamespace: k,
						scribeData: {
							event_info: "ShowMoreThreads"
						}
					}),
					[i.CursorType.ShowMoreThreadsPrompt]: p({
						component: T.a,
						getChildren: e => e.content.displayTreatment && e.content.displayTreatment.labelText ? e.content.displayTreatment.labelText : void 0,
						getActionText: e => e.content.displayTreatment && e.content.displayTreatment.actionText ? e.content.displayTreatment.actionText : void 0,
						divider: {
							top: !1,
							bottom: !1
						},
						impressionNamespace: x,
						clickNamespace: k,
						scribeData: {
							event_info: "ShowMoreThreadsPrompt"
						}
					})
				}
			})
		},
		Psss: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var o = n("ERkP"),
				i = n("v6aA"),
				r = n("MWbm"),
				a = n("yrzJ"),
				s = n("j7Bv"),
				l = n("t62R"),
				c = n("/yvb"),
				d = n("rHpw"),
				h = n("3XMw"),
				u = n.n(h),
				p = n("lBmi"),
				m = n("gUPl"),
				b = n("gBde");
			const g = Object.freeze({
					followers: p.a,
					community: m.a,
					by_invitation: b.a
				}),
				f = Object.freeze({
					followers: ({
						screenName: e
					}) => o.createElement(u.a.I18NFormatMessage, {
						$i18n: "g3e1c82a"
					}, o.createElement(a.a, {
						color: "gray600",
						screenName: e
					})),
					community: ({
						screenName: e
					}) => o.createElement(u.a.I18NFormatMessage, {
						$i18n: "bf820456"
					}, o.createElement(a.a, {
						color: "gray600",
						screenName: e
					})),
					by_invitation: ({
						screenName: e
					}) => o.createElement(u.a.I18NFormatMessage, {
						$i18n: "gf734b81"
					}, o.createElement(a.a, {
						color: "gray600",
						screenName: e
					}))
				}),
				_ = Object.freeze({
					followers: ({
						screenName: e
					}) => o.createElement(u.a.I18NFormatMessage, {
						$i18n: "d280d17b"
					}, o.createElement(a.a, {
						color: "gray600",
						screenName: e
					})),
					community: ({
						screenName: e
					}) => o.createElement(u.a.I18NFormatMessage, {
						$i18n: "c08958f6"
					}, o.createElement(a.a, {
						color: "gray600",
						screenName: e
					})),
					by_invitation: ({
						screenName: e
					}) => o.createElement(u.a.I18NFormatMessage, {
						$i18n: "a3b353a6"
					})
				}),
				y = u.a.g6185a9e,
				w = u.a.i004dc43,
				v = u.a.ced4abbe,
				C = u.a.j24c37b2;
			t.b = e => {
				const {
					featureSwitches: t
				} = o.useContext(i.a), {
					analytics: n,
					canReply: a,
					onDismiss: d,
					tweetId: h,
					isModal: u,
					value: p,
					screenName: m
				} = e, b = g[p], T = o.useCallback(() => n.scribe({
					component: "conversation_control_prompt",
					element: "see_conversation",
					action: "click"
				}), [n]), x = o.useCallback(() => {
					n.scribe({
						component: "conversation_control_prompt",
						element: "ok",
						action: "click"
					}), d()
				}, [n, d]), k = t.isTrue("conversation_controls_notifying_participants_enabled"), I = t.isTrue("conversation_controls_flexible_participation_enabled") ? _[p] : f[p];
				return o.createElement(r.a, {
					accessibilityRole: "dialog",
					"aria-describedby": "conversation-controls-education-description",
					"aria-labelledby": "conversation-controls-education-title",
					style: u ? E.modal : E.popover
				}, o.createElement(r.a, {
					style: [E.educationModalText, E.highlightedEducationModalTitle]
				}, o.createElement(s.a, {
					Icon: b,
					color: "primary",
					size: "xxLarge",
					style: E.highlightedEducationIcon
				}), o.createElement(l.c, {
					align: "center",
					nativeID: "conversation-controls-education-title",
					size: "large",
					weight: "bold"
				}, k && a ? w : y), o.createElement(l.c, {
					align: "center",
					color: "gray600",
					nativeID: "conversation-controls-education-description",
					size: "normal"
				}, o.createElement(I, {
					screenName: m
				}))), o.createElement(r.a, {
					style: E.buttonContainer
				}, h ? o.createElement(c.a, {
					key: "button_details",
					link: "/i/status/" + h,
					onClick: T,
					size: "normalLarge",
					style: E.educationModalButton,
					type: "primary"
				}, v) : null, o.createElement(c.a, {
					key: "button_dismiss",
					onClick: x,
					size: "normalLarge",
					style: E.educationModalButton,
					type: "neutral"
				}, C)))
			};
			const E = d.a.create(e => ({
				buttonContainer: {
					marginTop: e.spaces.xxSmall
				},
				educationModalButton: {
					marginTop: e.spaces.xSmall
				},
				highlightedEducationModalTitle: {
					marginBottom: e.spaces.small
				},
				popover: {
					padding: e.spaces.medium,
					borderRadius: e.borderRadii.xLarge,
					maxWidth: 5 * e.spacesPx.jumbo
				},
				modal: {
					padding: e.spaces.small
				},
				educationModalText: {
					alignItems: "center",
					marginBottom: e.spaces.small
				},
				highlightedEducationIcon: {
					marginBottom: e.spaces.medium
				}
			}))
		},
		Q8CU: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return p
			}));
			n("tVqn");
			var o = n("GWvE"),
				i = n("S1qy"),
				r = n.n(i),
				a = n("cjAp"),
				s = n.n(a);
			const l = (e, t, n) => {
					const i = Object(o.a)(e),
						r = n && n.length > 0;
					return i && !r && !t
				},
				c = e => {
					const {
						text: t,
						pollActive: n,
						mediaIds: o
					} = e;
					return l(t, n, o)
				},
				d = e => {
					const {
						text: t,
						pollActive: n,
						media: o
					} = e;
					return l(t, n, o)
				},
				h = (e, t) => {
					const {
						text: n,
						pollActive: i,
						media: r
					} = e;
					return ((e, t, n, i) => {
						const r = Object(o.a)(e) || e === i,
							a = n && n.length > 0;
						return r && !a && !t
					})(n, i, r, t)
				},
				u = (e, t, n, i) => {
					const a = e && r()(e.trim(), s.a.version3).valid,
						l = Object(o.a)(e),
						c = !t || n,
						d = i && i.length > 0;
					return a && c && !l || l && d
				},
				p = e => {
					const {
						text: t,
						pollActive: n,
						pollValid: o,
						media: i
					} = e;
					return u(t, n, o, i)
				}
		},
		QB0K: function(e, t, n) {
			"use strict";
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("v6aA"),
				c = n("LsPn"),
				d = n("Irs7"),
				h = n("aITJ"),
				u = n("MWbm"),
				p = n("0FVZ"),
				m = n("cHvH"),
				b = n("rHpw"),
				g = n("Oe3h"),
				f = n("Vg7n");
			const _ = b.a.create(e => ({
				root: {
					marginHorizontal: "auto",
					width: "100%"
				},
				rootMedium: {
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0
				},
				rootLarge: {
					maxWidth: 1e3
				},
				fab: {
					alignSelf: "flex-end",
					bottom: e.spaces.medium,
					right: e.spaces.medium
				},
				fabLarge: {
					right: e.spaces.medium
				},
				fabMicro: {
					bottom: e.spaces.small,
					right: e.spaces.small
				},
				buttonMicro: {
					height: e.spaces.xLarge,
					width: e.spaces.xLarge
				}
			}));
			t.a = e => {
				const {
					accessibilityLabel: t,
					label: n,
					onPress: o,
					shortLabel: r,
					scribeComponent: y
				} = e, w = a()(e, ["accessibilityLabel", "label", "onPress", "shortLabel", "scribeComponent"]), {
					loggedInUserId: v
				} = s.useContext(l.a), C = Object(d.b)(), E = s.useCallback(e => {
					C.scribe({
						component: y,
						action: "click"
					}), o && o(e)
				}, [C, o, y]);
				return v ? h.a.isKaiOS() ? s.createElement(c.a, {
					onRightClick: o,
					rightText: r || t
				}) : s.createElement(p.a.FloatingAction, null, s.createElement(m.a, null, ({
					windowWidth: e
				}) => {
					const o = e > b.a.theme.breakpoints.large,
						r = e > b.a.theme.breakpoints.medium,
						a = e < b.a.theme.breakpoints.micro,
						l = [_.root, r && _.rootMedium, o && _.rootLarge],
						c = [_.fab, o && _.fabLarge, a && _.fabMicro];
					return s.createElement(u.a, {
						accessibilityLabel: t,
						accessibilityRole: "complementary",
						pointerEvents: "box-none",
						style: l
					}, s.createElement(g.a, {
						id: "FloatingActionButtonBase"
					}, (e, r) => s.createElement(u.a, i()({
						ref: e()
					}, r({
						style: c
					})), s.createElement(f.a, i()({}, w, {
						accessibilityLabel: t,
						label: o ? n : void 0,
						onPress: E,
						style: a && _.buttonMicro
					})))))
				})) : null
			}
		},
		QFTV: function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = "_listHeader",
				i = "_listFooter";

			function r(e) {
				return e === o || e === i
			}
		},
		QIgh: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return V
			}));
			n("IAdD");
			var o = n("PnFR"),
				i = n("wrlS"),
				r = n("rpbw"),
				a = n("S/Qv"),
				s = n("LdEA"),
				l = n.n(s),
				c = n("ezF+"),
				d = n("ERkP"),
				h = n("VPAj"),
				u = n("SrtL"),
				p = n("3XMw"),
				m = n.n(p),
				b = n("zh9S"),
				g = n("5bSN");
			const f = {
					component: "new_tweets_bar"
				},
				_ = m.a.d6917e0c,
				y = m.a.ia24dc8c;
			var w = c.d(c.f({
					divider: {
						top: !0,
						bottom: !0
					},
					component: e => {
						let {
							count: t
						} = e, n = l()(e, ["count"]);
						return d.createElement(d.Fragment, null, d.createElement(u.a.Configure, {
							timelineNewCount: t
						}), d.createElement(g.a, n))
					},
					bindActions: ({
						module: e
					}) => ({
						scribeAction: b.c,
						markAllRevealed: e.markTopEntryRevealed
					}),
					createProps: ({
						actions: {
							markAllRevealed: e,
							scribeAction: t
						},
						entry: n,
						scribeNamespace: o
					}) => {
						const i = n.content.count;
						return {
							children: _({
								count: y(i)
							}),
							count: i,
							onClick: () => {
								t(Object.assign({}, o, {
									action: "click"
								}), {
									event_value: i
								}), e()
							}
						}
					},
					isFocusable: Object(h.a)(!0),
					defaultScribeNamespace: f,
					onImpression: ({
						actions: {
							scribeAction: e
						},
						entry: t,
						scribeData: n,
						scribeNamespace: o
					}) => {
						const i = t.content.count;
						e(Object.assign({}, o, {
							action: "impression"
						}), {
							event_value: i
						})
					},
					shouldDisplayBorder: e => !0,
					getClientEventViewOverride: () => ({
						viewType: "new_tweets_bar"
					})
				})),
				v = n("5Y9N"),
				C = n("xM7j");
			const E = m.a.g0b48670,
				T = m.a.i859a9d3;
			var x = c.f({
					component: C.a,
					createProps: ({
						entry: e
					}) => ({
						children: E,
						ctaLink: "https://support.twitter.com/articles/370610",
						ctaText: T
					}),
					shouldDisplayBorder: Object(h.a)(!1)
				}),
				k = n("NO+D"),
				I = n("yvCK");
			const S = m.a.e4c6c309;
			var P = c.f({
					component: C.a,
					createProps: ({
						entry: e
					}) => {
						const {
							content: t,
							conversationPosition: n,
							conversationTreeMetadata: o
						} = e;
						return {
							children: t.tombstoneInfo && t.tombstoneInfo.text || S,
							conversationPosition: n,
							conversationTreeMetadata: o
						}
					},
					shouldDisplayBorder: e => !e.conversationTreeMetadata
				}),
				R = c.b({
					selectDisplayType: e => e.content.displayType,
					handlers: {
						[I.a.Inline]: Object(k.a)({}),
						[I.a.TweetUnavailable]: P,
						[I.a.DisconnectedRepliesAncestor]: x,
						[I.a.DisconnectedRepliesDescendant]: x
					}
				}),
				O = n("67iF"),
				A = n("Rp9C"),
				M = n("fRsM");
			var L = Object.freeze({
					IncentiveFocus: "IncentiveFocus",
					TopicFocus: "TopicFocus"
				}),
				D = n("MWbm"),
				j = n("t62R");
			var N = e => {
				const {
					displayType: t,
					subtext: n,
					title: o,
					topic: i
				} = e, r = t === L.IncentiveFocus;
				return d.createElement(D.a, {
					style: r && F.incentiveFocus
				}, d.createElement(M.a, {
					educateOnFollow: !0,
					nameWeight: r ? void 0 : "heavy",
					topic: i
				}), o || n ? d.createElement(D.a, {
					style: [F.text, r ? F.noMarginBottom : F.border]
				}, o ? d.createElement(j.c, {
					size: "large",
					weight: "bold"
				}, o) : null, n ? d.createElement(j.c, {
					color: "gray600"
				}, n) : null) : null)
			};
			const F = n("rHpw").a.create(e => ({
				border: {
					borderTopStyle: "solid",
					borderTopWidth: e.borderWidths.small,
					borderTopColor: e.colors.borderColor,
					marginTop: 0,
					paddingTop: e.spaces.xSmall
				},
				incentiveFocus: {
					flexDirection: "column-reverse"
				},
				noMarginBottom: {
					marginBottom: 0
				},
				text: {
					marginHorizontal: e.componentDimensions.gutterHorizontal,
					marginVertical: e.componentDimensions.gutterVertical
				}
			}));
			var B = n("Zejx"),
				U = c.d(c.f({
					component: N,
					bindActions: () => ({
						scribe: b.c
					}),
					selectData: ({
						entry: e
					}) => {
						const {
							content: t
						} = e;
						return {
							topic: e => B.a.select(e, t.topicId)
						}
					},
					createProps: ({
						data: {
							topic: e
						},
						entry: t
					}) => {
						if (!e) return null;
						const {
							content: n
						} = t;
						return {
							displayType: n.displayType,
							subtext: n.followIncentiveText,
							title: n.followIncentiveTitle,
							topic: e
						}
					},
					getScribeDataItem: e => A.a.forTopic(e.content.topicId, e.itemMetadata.clientEventInfo),
					onImpression: ({
						actions: {
							scribe: e
						},
						scribeData: t,
						scribeNamespace: n
					}) => {
						e(Object.assign({}, n, {
							action: "impression"
						}), t)
					}
				})),
				H = n("Yy//");
			var z = n("Ka9G"),
				W = n("8UdT");
			const V = ({
				displayBlocked: e = !1,
				shouldSelfThreadIncludeAvatar: t = !1,
				showWithheldBannerOnMyTweets: n = !0,
				tweetDismissable: s = !1,
				withCarouselTimelineModule: l = !1,
				withMuteConversation: h = !1,
				withRemoveFromBookmarks: u = !1,
				withSelfThreadCTA: p = !1,
				withTweetActionsDisabled: m = !1
			}) => {
				return Object.assign({}, Object(v.a)({
					withCarouselTimelineModule: l
				}), {
					[W.b.Message]: Object(a.a)({}),
					[W.a.NewEntries]: w,
					[W.b.TimelineCursor]: o.a,
					[W.b.Tombstone]: R,
					[W.b.Topic]: O.a,
					[W.b.TopicFollowPrompt]: U,
					[W.b.Tweet]: Object(H.a)({
						displayBlocked: e,
						dismissable: s,
						shouldSelfThreadIncludeAvatar: t,
						showWithheldBannerOnMyTweets: n,
						withActionsDisabled: m,
						withMuteConversation: h,
						withRemoveFromBookmarks: u
					}),
					[W.b.TwitterList]: Object(r.a)({
						withThumbnail: i.b.isTrue("home_timeline_spheres_list_cell_thumbnail_enabled")
					}),
					[W.a.Unsupported]: (b = i.b.isTrue("responsive_web_unsupported_entry_tombstone"), c.d(b ? c.c({
						render: e => d.createElement(C.a, null, d.createElement(j.c, null, (e => {
							let t = "Failed to parse item: " + e.content.displayType;
							return e.content.contentType && (t += "\nof type: " + e.content.contentType), t
						})(e)))
					}) : c.a())),
					[W.b.User]: Object(z.a)({})
				});
				var b
			};
			t.b = V({
				displayBlocked: !1
			})
		},
		Qayx: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("3XMw"),
				s = n.n(a);
			const l = s.a.d58baa7e,
				c = s.a.ia24dc8c;
			class d extends r.PureComponent {
				render() {
					const {
						count: e,
						truncateMaxCount: t,
						type: n
					} = this.props, o = c(e), i = e >= t ? l(e) : o;
					return "likes" === n ? r.createElement(s.a.I18NFormatMessage, {
						$i18n: "eea0a14e",
						formattedCount: i,
						count: e
					}) : "media" === n ? r.createElement(s.a.I18NFormatMessage, {
						$i18n: "ba6a357f",
						formattedCount: i,
						count: e
					}) : r.createElement(s.a.I18NFormatMessage, {
						$i18n: "fdc023d7",
						formattedCount: i,
						count: e
					})
				}
			}
			i()(d, "defaultProps", {
				truncateMaxCount: 1e4
			})
		},
		QbaN: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "i", (function() {
				return b
			}));
			n("Ysgh");
			var o = n("3XMw"),
				i = n.n(o),
				r = n("/NU0");
			const a = Object.freeze({
				CANCELED: "Canceled",
				COMPLETED: "Completed",
				DISMISSED: "Dismissed",
				DRAFT: "Draft",
				FAILED: "Failed",
				PENDING: "Pending",
				SCHEDULED: "Scheduled"
			});

			function s(e) {
				return {
					externalMedia: e.map(e => {
						const t = e && e.media_info,
							n = e && e.media_origin,
							o = n ? function(e) {
								const {
									id: t,
									provider: n
								} = e;
								if (t && "giphy" === n) return `https://media.giphy.com/media/${t}/source.gif`
							}(n) : null,
							i = !(!e || !e.media_key) && "13" === e.media_key.split("_")[0];
						let r, a = 0;
						if (t) switch (t.__typename) {
							case "ApiImage":
								return {
									url: t.original_img_url, altText: t.alt_text
								};
							case "ApiVideo":
								return t.variants.forEach(e => {
									const t = e && e.bit_rate || 0;
									"video/mp4" === e.content_type && t >= a && (r = e, a = t)
								}), r ? {
									url: r.url,
									isAmplify: i
								} : null;
							case "ApiGif":
								return {
									url: o || t.variants[0].url, altText: t.alt_text
								};
							default:
								return
						}
					}).filter(Boolean)
				}
			}

			function l(e) {
				return e && Object(r.a)(e.date.year) && Object(r.a)(e.date.month) && Object(r.a)(e.date.day) && Object(r.a)(e.time.hour) && Object(r.a)(e.time.minute) ? {
					date: {
						year: e.date.year,
						month: e.date.month,
						day: e.date.day
					},
					time: {
						hour: e.time.hour,
						minute: e.time.minute
					}
				} : null
			}

			function c(e) {
				const t = new Date(Date.now());
				return new Date(t.setMonth(t.getMonth() + 18)) < e
			}
			const d = e => new Date(Date.now()) >= e;

			function h(e) {
				return null !== l(e)
			}

			function u(e) {
				const t = l(e);
				return t ? new Date(t.date.year, t.date.month - 1, t.date.day, t.time.hour, t.time.minute) : null
			}

			function p(e) {
				const t = new Date(e);
				return {
					date: {
						year: t.getFullYear(),
						month: t.getMonth() + 1,
						day: t.getDate()
					},
					time: {
						hour: t.getHours(),
						minute: t.getMinutes()
					}
				}
			}
			const m = i.a.aa2aa1a1,
				b = i.a.d725a288
		},
		RCZO: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return w
			}));
			n("IAdD"), n("kYxP");
			var o = n("ERkP"),
				i = n("ZUOq"),
				r = n("n4Eu"),
				a = n("h/wS"),
				s = n("rOXj");
			const l = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
				c = e => {
					const t = e && r.a.getForGallery(e);
					return t ? {
						rgb: _(t),
						rgba: l(t, .9)
					} : u
				},
				d = i.a.columnWidths.primary,
				h = (e, t) => Math.min(t, e),
				u = {
					rgb: "rgb(0, 0, 0)",
					rgba: "rgba(0, 0, 0, 0.9)"
				},
				p = {
					transitionProperty: "background-color",
					transitionDuration: ".5s"
				},
				m = (e, t) => {
					const {
						mediaWidth: n,
						mediaHeight: o,
						containerWidth: i,
						containerHeight: r
					} = e, s = n && o ? n / o : 1, l = s > 1, c = t ? 400 : d, u = l && n <= c ? h(i, c) : i, p = !l && o <= c ? h(r, c) : r;
					return a.a.getContainDimensions({
						width: u,
						height: p
					}, s)
				},
				b = e => {
					const t = e && e.ext_media_color && e.ext_media_color.palette;
					return c(t)
				},
				g = e => {
					const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
					return c(t)
				},
				f = e => {
					const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
					return c(t)
				},
				_ = e => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
				y = (e, t) => {
					var n, o;
					switch (t.type) {
						case "zoom":
							return Object.assign({}, e, {
								isZoomed: null == (n = t.payload) ? void 0 : n.isZoomed,
								showControls: !(null == (o = t.payload) ? void 0 : o.isZoomed)
							});
						case "tap":
							return Object.assign({}, e, {
								showControls: !e.showControls
							});
						default:
							return e
					}
				},
				w = () => {
					const [e, t] = o.useReducer(y, {
						isZoomed: !1,
						showControls: !0
					});
					return {
						hideButtons: e.isZoomed || !e.showControls,
						handleMediaDetailZoomed: function(e) {
							t({
								type: "zoom",
								payload: {
									isZoomed: e
								}
							})
						},
						handleMediaItemTapped: function() {
							s.a.isTouchSupported() && t({
								type: "tap"
							})
						}
					}
				}
		},
		RT39: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("IAdD");
			var o = n("ERkP"),
				i = n("0weh"),
				r = n("SEra"),
				a = n("gK2g"),
				s = n("rHpw"),
				l = n("MWbm"),
				c = n("t62R");
			const d = Object.freeze({
					CommunityNotes: "CommunityNotes",
					LiveEvent: "LiveEvent",
					SoftIntervention: "SoftIntervention"
				}),
				h = {
					element: "forward_pivot"
				},
				u = {
					element: "quoted_forward_pivot"
				},
				p = ({
					inQuoteTweet: e,
					isLinkExternal: t,
					label: n,
					onPress: r,
					pivotLinkObject: a
				}) => o.createElement(c.c, {
					link: a.pathname,
					onPress: r,
					style: [b.softInterventionRoot, e ? b.softInterventionQuoteTweet : b.softInterventionTweet]
				}, o.createElement(l.a, {
					style: b.softInterventionContent
				}, o.createElement(i.a, {
					style: b.iconErrorCircle
				}), n)),
				m = (e, t, n) => ({
					items: [{
						id: n,
						forward_pivot_details: {
							associated_tweet_id: n,
							display_type: e,
							landing_url: t.url
						}
					}]
				}),
				b = s.a.create(e => ({
					iconErrorCircle: {
						alignSelf: "flex-start",
						color: e.colors.primary,
						flexShrink: 0,
						height: e.spaces.large,
						width: e.spaces.large,
						marginRight: e.spaces.xSmall
					},
					softInterventionQuoteTweet: {
						borderTopColor: e.colors.borderColor,
						borderTopStyle: "solid",
						borderTopWidth: e.borderWidths.small,
						paddingHorizontal: e.spaces.small
					},
					softInterventionRoot: {
						paddingVertical: e.componentDimensions.gutterVertical,
						paddingTop: e.componentDimensions.gutterVertical,
						paddingBottom: e.spaces.xxSmall
					},
					softInterventionTweet: {
						borderBottomColor: e.colors.borderColor,
						borderBottomStyle: "solid",
						borderBottomWidth: e.borderWidths.small
					},
					softInterventionContent: {
						alignItems: "center",
						flexDirection: "row",
						flexGrow: 1
					}
				}));
			t.b = ({
				displayType: e,
				inQuoteTweet: t,
				landingUrl: n,
				text: i,
				tweetId: s
			}) => {
				const l = a.a.useAnalytics(),
					b = () => {
						if (n) {
							const o = t ? u : h;
							l.scribe(Object.assign({}, o, {
								action: "click",
								data: m(e, n, s)
							}))
						}
					};
				return o.createElement(r.default.Consumer, null, r => {
					const a = n ? r.getLinkFromUrtUrl(n) : void 0;
					if (!a) return null;
					const s = !a || !!a.external,
						l = o.createElement(c.c, {
							color: c.a.primary,
							numberOfLines: 3
						}, i.text);
					return e === d.SoftIntervention ? o.createElement(p, {
						inQuoteTweet: t,
						isLinkExternal: s,
						label: l,
						onPress: b,
						pivotLinkObject: a
					}) : null
				})
			}
		},
		Re5t: function(e, t, n) {
			"use strict";
			const o = Object.freeze({
				User: "User",
				ProfileCard: "ProfileCard",
				UserCompact: "UserCompact",
				UserConcise: "UserConcise",
				UserDetailed: "UserDetailed"
			});
			t.a = o
		},
		Rp9C: function(e, t, n) {
			"use strict";
			n("IAdD"), n("kYxP");
			var o = n("cnVF"),
				i = n("/Ikv"),
				r = n("LdEA"),
				a = n.n(r),
				s = n("X04g");
			var l = function(e, t) {
					const n = "string" == typeof e ? e : e.id_str;
					let o = {
						item_type: s.a.ItemType.TWEET,
						id: n
					};
					if (t) {
						const e = a()(t, ["click_tracking_info"]);
						o = Object.assign({}, o, e)
					}
					return "string" != typeof e && e.user && e.user.id_str ? Object.assign({}, o, {
						author_id: e.user.id_str
					}) : o
				},
				c = n("F3pd");

			function d(e, t) {
				return {
					card_user_data: {
						binding_values: [{
							name: e,
							value: t
						}]
					}
				}
			}
			var h = function({
					componentType: e,
					cardName: t,
					cardUrl: n,
					ctaIndex: i,
					tweetId: r,
					tweetUserId: a,
					viewingUserId: l,
					isUCAppInstall: c,
					impressionId: h
				}) {
					const u = function(e, t) {
							if (e) return d("viewing_user_id", e);
							if (t) return d("cta_clicked_index", t)
						}(l, i),
						p = {
							item_type: s.a.ItemType.TWEET,
							id: r,
							card_name: t,
							card_url: n,
							card_platform_key: o.c,
							publisher_id: a
						};
					return h && (p.promoted_id = h), u && (p.cardEvent = u), c && (p.uc_event = {
						event: "click",
						component: e,
						destination: "app_store"
					}), p
				},
				u = n("IcAo"),
				p = n("v/3V"),
				m = n("GZwR");
			const {
				CardNames: b
			} = i.a;

			function g(e, t) {
				return l(e, t)
			}

			function f(e) {
				return {
					item_type: s.a.ItemType.USER,
					id: e
				}
			}

			function _(e, t, n, r, a) {
				var s;
				const {
					card: l
				} = e, d = !(!l || !Object.keys(l).length), h = !!(e.extended_entities && e.extended_entities.media && e.extended_entities.media[0]), u = g(e, t), p = t || e.promoted_content;
				p && "earned" !== Object(c.a)(p) && (u.promoted_id = p.impression_id, u.disclosure_type = p.disclosure_type), void 0 !== n && (u.conversation_details = Object.assign({}, u.conversation_details, {
					is_selected: n,
					overflow: r
				})), e.in_reply_to_status_id_str && (u.in_reply_to_tweet_id = e.in_reply_to_status_id_str, u.in_reply_to_author_id = e.in_reply_to_user_id_str), e.quoted_status && (u.quoted_tweet_id = e.quoted_status.id_str, u.quoted_author_id = e.quoted_status.user.id_str), e.retweeted_status ? (u.id = e.retweeted_status.id_str, u.author_id = e.retweeted_status.user.id_str, u.retweeting_tweet_id = e.id_str, u.retweet_author_id = e.user.id_str, u.is_viewer_follows_tweet_author = !!e.retweeted_status.user.following, u.is_tweet_author_follows_viewer = !!e.retweeted_status.user.followed_by, e.retweeted_status.quoted_status && (u.quoted_tweet_id = e.retweeted_status.quoted_status.id_str, u.quoted_author_id = e.retweeted_status.quoted_status.user.id_str)) : "object" == typeof e.user && (u.is_viewer_follows_tweet_author = !!e.user.following, u.is_tweet_author_follows_viewer = !!e.user.followed_by);
				const {
					forward_pivot_details: m,
					quoted_forward_pivot_details: b
				} = y(e.softIntervention, null == (s = e.quoted_status) ? void 0 : s.softIntervention) || {}, f = (null == a ? void 0 : a.forward_pivot_details) || m;
				f && u.id && (u.forward_pivot_details = Object.assign({}, f, {
					associated_tweet_id: u.id
				}));
				const _ = (null == a ? void 0 : a.quoted_forward_pivot_details) || b;
				if (_ && u.quoted_tweet_id && (u.quoted_forward_pivot_details = Object.assign({}, _, {
						associated_tweet_id: u.quoted_tweet_id
					})), e.metadata && "popular" === e.metadata.result_type && (u.is_popular_tweet = !0), l && Object.keys(l).length) {
					const e = l.binding_values;
					u.card_name = l.name, u.card_platform = o.c, u.card_url = i.a.getBindingValue(e, "card_url"), u.vanity_url = i.a.getBindingValue(e, "vanity_url");
					const t = i.a.getBindingValue(e, "site");
					u.publisher_id = (t || {}).id_str
				}
				if (h || d) {
					const t = h ? e.extended_entities.media.filter(e => "photo" === e.type).length : 0;
					u.media_details = {
						photo_count: t,
						content_id: I(e),
						publisher_id: e.user && e.user.id_str,
						media_type: k(e),
						dynamic_ads: S(e)
					}
				}
				return u
			}

			function y(e, t) {
				let n;
				var o;
				e && (n = {
					forward_pivot_details: {
						associated_tweet_id: "",
						display_type: e.displayType,
						landing_url: null == (o = e.landingUrl) ? void 0 : o.url
					}
				});
				if (t) {
					var i;
					const e = {
						associated_tweet_id: "",
						display_type: t.displayType,
						landing_url: null == (i = t.landingUrl) ? void 0 : i.url
					};
					n = n ? Object.assign({}, n, {
						quoted_forward_pivot_details: e
					}) : {
						quoted_forward_pivot_details: e
					}
				}
				return n
			}

			function w(e) {
				let t;
				const n = function(e) {
					const t = e && e.details && e.details.timelinesDetails;
					if (t) return {
						suggestion_details: {
							controller_data: t.controllerData,
							suggestion_type: t.injectionType,
							source_data: t.sourceData
						}
					}
				}(e);
				n && (t = Object.assign({}, t, n));
				const o = function(e) {
					const t = e && e.details && e.details.conversationDetails && e.details.conversationDetails.conversationSection;
					if (t) return {
						conversation_details: {
							conversation_section: t
						}
					}
				}(e);
				o && (t = Object.assign({}, t, o));
				const i = function(e) {
					const t = e && e.details && e.details.guideDetails;
					if (t) return {
						guide_item_details: {
							item_type: t.identifier,
							source_data: t.token,
							transparent_guide_details: t.transparentGuideDetails
						}
					}
				}(e);
				i && (t = Object.assign({}, t, i));
				const r = function(e) {
					var t;
					const n = null == e || null == (t = e.details) ? void 0 : t.notificationDetails;
					if (n) return {
						notification_tab_details: {
							impression_id: n.impressionId,
							metadata: n.metadata
						}
					}
				}(e);
				return r && (t = Object.assign({}, t, r)), t
			}
			const v = {
					video: 1,
					animated_gif: 3,
					photo: 8
				},
				C = {
					[b.AMPLIFY]: 2,
					vine: 4
				},
				E = {
					[b.AMPLIFY]: "amplify_content_id",
					[b.APPPLAYER]: "player_content_id",
					[b.BROADCAST]: "broadcast_media_id",
					[b.PERISCOPE_BROADCAST]: "broadcast_media_key",
					[b.LIVE_EVENT]: "broadcast_media_id",
					[b.POLL_2_CHOICE_VIDEO]: "player_content_id",
					[b.POLL_3_CHOICE_VIDEO]: "player_content_id",
					[b.POLL_4_CHOICE_VIDEO]: "player_content_id",
					[b.PROMO_VIDEO_WEBSITE]: "player_content_id",
					[b.VIDEO_DIRECT_MESSAGE]: "player_content_id"
				},
				T = [b.PERISCOPE_BROADCAST, b.LIVE_EVENT, b.BROADCAST],
				x = e => {
					if (e) return i.a.isVineCard(e) ? "vine" : e.name
				},
				k = e => {
					const t = e.extended_entities && e.extended_entities.media && e.extended_entities.media[0],
						n = t && t.type,
						o = x(e.card);
					return n && v[n] ? v[n] : o && C[o] ? C[o] : -1
				},
				I = e => {
					const t = e.extended_entities && e.extended_entities.media && e.extended_entities.media[0];
					if (t) return t.id_str;
					const {
						card: n
					} = e, o = x(n);
					return o && E[o] && n && i.a.getBindingValue(n.binding_values, E[o]) || ""
				},
				S = e => {
					const t = e.extended_entities && e.extended_entities.media && e.extended_entities.media[0],
						n = t && t.additional_media_info,
						o = e.card && e.card.name;
					if (o) {
						if (-1 !== T.indexOf(o)) return !0;
						if (o === b.AMPLIFY) {
							if (e.card && i.a.getBindingValue(e.card.binding_values, "dynamic_ads")) return !0
						}
					}
					return n && n.monetizable || !1
				};
			t.a = {
				addTweetToItems: function(e = [], t, n, o, i) {
					const r = _(t, n, o, i);
					return r ? e.some(e => e.id === t.id_str) ? e.map(e => e.id === t.id_str ? Object(u.a)({}, e, r) : e) : [...e, r] : e
				},
				forTopic: function(e, t) {
					return Object.assign({
						item_type: s.a.ItemType.TOPIC,
						id: e
					}, w(t))
				},
				forTweet: g,
				forUser: f,
				forList: function(e) {
					return {
						item_type: s.a.ItemType.LIST,
						id: e
					}
				},
				forRecentSearchResult: function(e, t) {
					const n = t + 1;
					return e.user ? {
						item_type: s.a.ItemType.USER,
						id: e.user.id,
						position: n,
						token: m.c.Recent
					} : e.keyword ? {
						item_type: s.a.ItemType.SEARCH,
						name: e.keyword.query,
						position: n,
						token: m.c.Recent
					} : void 0
				},
				forSavedSearchResult: function(e) {
					return {
						query: e
					}
				},
				forTypeaheadResult: function(e, t) {
					const n = t + 1;
					switch (e.type) {
						case m.b.User:
							return {
								item_type: s.a.ItemType.USER, id: e.id, position: n, token: e.src
							};
						case m.b.Event:
							return {
								item_type: s.a.ItemType.EVENT, id: e.id, name: e.data.topic, position: n, token: m.c.Remote
							};
						case m.b.Hashtag:
						case m.b.Topic:
							return {
								item_type: s.a.ItemType.SEARCH, name: e.data.topic, position: n, token: m.c.Remote
							};
						case m.b.NoResult:
							return {
								item_type: "user" === e.data.type ? s.a.ItemType.USER : s.a.ItemType.SEARCH, position: n, token: m.c.Exact
							};
						default:
							return
					}
				},
				getEventItem: function(e) {
					return {
						events_detail: {
							event_id: e
						}
					}
				},
				getAllSurfaceDetails: w,
				getClickTrackingEmbedDetails: function(e, t) {
					if ((null == e ? void 0 : e.click_tracking_info) && t) return {
						original_url: t.originalUrl,
						embedded_url: t.embeddedUrl,
						click_tracking_info: e.click_tracking_info,
						embed_status: Object(p.b)(t.originalUrl, e.click_tracking_info)
					}
				},
				getMomentItem: function(e) {
					return {
						moments_details: {
							moment_id: e
						}
					}
				},
				getTweetItem: _,
				getUserItem: function(e, t) {
					const n = f(e.id_str);
					e.name && (n.is_viewer_follows_user = !!e.following, n.is_user_follows_viewer = !!e.followed_by);
					const o = e.promoted_content || t;
					return o ? Object.assign({}, n, {
						promoted_id: o.impression_id
					}) : n
				},
				getGifSearchItemForTweet: function(e, t) {
					return {
						id: e,
						item_type: s.a.ItemType.TWEET,
						media_details: {
							photo_count: 1,
							found_media_provider: t.found_media_origin.provider
						}
					}
				},
				getSendThreadItem: function(e, t, n) {
					const o = e => !!e.gifMetadata || e.media.find(e => e.mediaFile && e.mediaFile.isGif),
						i = e.filter(e => o(e)).length,
						r = e => !o(e) && e.media.find(e => e.mediaFile && e.mediaFile.isVideo),
						a = e.filter(e => r(e)).length,
						l = e.reduce((e, t) => {
							if ((e => !(!e.media.length || o(e) || r(e)))(t)) {
								return e + t.media.filter(e => e.mediaFile && !(e.mediaFile.isGif && e.mediaFile.isVideo)).length
							}
							return e
						}, 0),
						c = e.filter(e => (e => e.pollActive && e.pollValid)(e)).length;
					return {
						item_type: s.a.ItemType.SELFTHREAD,
						self_thread_details: {
							attempted_tweet_count: e.length,
							successful_tweet_count: t,
							photo_count: l,
							gif_count: i,
							video_count: a,
							poll_count: c,
							is_reply: n
						}
					}
				},
				getHWCardItem: h,
				getPivotDetails: y
			}
		},
		RxYA: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("MWbm"),
				s = n("0FVZ"),
				l = n("t62R"),
				c = n("/yvb"),
				d = n("rHpw");
			class h extends r.PureComponent {
				render() {
					const {
						onSecondaryButtonClick: e,
						onPrimaryButtonClick: t,
						primaryButtonLabel: n,
						primaryText: o,
						secondaryButtonLabel: i,
						secondaryText: d
					} = this.props;
					return r.createElement(s.a.HalfSheet, null, r.createElement(a.a, {
						style: u.sheetContent
					}, r.createElement(a.a, {
						style: u.content
					}, r.createElement(a.a, {
						style: u.header
					}, r.createElement(l.c, {
						color: "white",
						size: "large",
						weight: "bold"
					}, o)), r.createElement(l.c, {
						color: "white",
						style: u.secondaryText
					}, d)), r.createElement(a.a, {
						style: [u.footer]
					}, r.createElement(c.a, {
						onPress: e,
						size: "normal",
						style: u.button,
						type: "invertedSecondary"
					}, r.createElement(l.c, {
						numberOfLines: 1
					}, i)), r.createElement(c.a, {
						onPress: t,
						size: "normal",
						style: u.button,
						type: "invertedPrimary"
					}, r.createElement(l.c, {
						numberOfLines: 1
					}, n)))))
				}
			}
			const u = d.a.create(e => ({
				content: {
					padding: e.spaces.medium
				},
				footer: {
					flexDirection: "row",
					justifyContent: "space-between",
					paddingBottom: e.spaces.xSmall,
					paddingHorizontal: e.spaces.medium,
					flexWrap: "wrap"
				},
				button: {
					marginBottom: e.spaces.xxSmall
				},
				header: {
					flexDirection: "row"
				},
				secondaryText: {
					paddingTop: e.spaces.xSmall
				},
				sheetContent: {
					paddingBottom: d.a.iPhoneOffsetBottom,
					backgroundColor: e.colors.primary
				}
			}));
			var p = h,
				m = n("rxPX"),
				b = n("O0uF"),
				g = n("qlwE"),
				f = n("If64"),
				_ = n("RqPI"),
				y = n("P1r1"),
				w = Object(m.a)().propsFromState(() => ({
					featureSwitchImpressions: b.e,
					loginPromptShown: y.t,
					loginPromptLastShown: g.h,
					startLocation: f.a
				})).propsFromActions(() => ({
					setLoginPromptShown: y.E,
					setLoginReturnPath: _.l,
					updateSettings: y.H
				})).withAnalytics(),
				v = n("wrlS"),
				C = n("q82E"),
				E = n("3XMw"),
				T = n.n(E),
				x = n("feu+"),
				k = n("aITJ"),
				I = (n("LJOr"), n("LWld")),
				S = n("Mx3A"),
				P = n("8jkQ"),
				R = n("Tp1h"),
				O = n("prCu"),
				A = n.n(O);
			const M = Object.freeze({
					useAppPrompt: "USE_APP_PROMPT"
				}),
				L = ({
					displayMode: e,
					startLocation: t,
					experiment: n,
					featureSwitchImpressions: o
				}) => {
					const i = {};
					let r = "https://twitter.app.link/interstitial_switch_to_app";
					switch (e) {
						case R.a.follow:
							i.tags = ["TriggerFollowInt"];
							break;
						case R.a.like:
							i.tags = ["TriggerLikeInt"];
							break;
						case R.a.reply:
							i.tags = ["TriggerReplyInt"];
							break;
						case R.a.retweet:
							i.tags = ["TriggerRetweetInt"];
							break;
						case R.a.dmshare:
							i.tags = ["TriggerDMInt"];
							break;
						default:
							i.tags = ["TriggerLoadHalfCover"]
					}
					t && (t.profile ? i.tags.push("PageProfile") : t.tweet ? i.tags.push("PageTweet") : t.search && i.tags.push("PageSearch"));
					const a = Object(S.c)({
						query: window.location.search,
						httpReferer: document.referrer || "",
						requestUrl: window.location.href
					});
					a && a.referer && (i.external_referrer = a.referer), i.landing_page_url = window.location.href;
					const s = Object(I.a)(window.location.href);
					if (s && (i.$deeplink_path = s), n === M.useAppPrompt) {
						r = "https://twitter.app.link/banner_switch_to_app";
						const e = o.rweb_use_app_prompt_10556;
						i.experiments = e ? `10556^${e.bucket}^${e.version}` : void 0
					}
					return `${r}?${A.a.stringify(i,"&","=",{encodeURIComponent:encodeURI})}`
				};
			const D = T.a.j49fd4e7,
				j = T.a.hd50e063,
				N = T.a.a565833d,
				F = T.a.e919c3bc;
			class B extends r.Component {
				constructor(e) {
					super(e), i()(this, "_shouldRenderPrompt", () => {
						const {
							loginPromptLastShown: e,
							useBottomBanner: t,
							loginPromptShown: n,
							onlyShowOnce: o
						} = this.props, {
							displayInterval: i
						} = this.state;
						if (t && !this._hasMobileAppStore()) return !1;
						if (o) {
							if (n) return !1;
							if (i && Date.now() - e < i) return !1
						}
						return !0
					}), i()(this, "_handleClose", () => {
						this._scribeAction("dismiss"), this.props.onClose()
					}), i()(this, "_handleNotNow", () => {
						this._scribeAction("not_now"), this.props.onClose()
					}), i()(this, "_handleSubmit", e => {
						const {
							postLoginPath: t,
							setLoginReturnPath: n
						} = this.props;
						this._scribeAction("login"), t && n(t)
					}), i()(this, "_handleSignupButtonClick", e => {
						this._scribeAction("signup"), this.props.onClose()
					}), i()(this, "_handleAppInstallButtonClick", e => {
						const {
							displayMode: t,
							featureSwitchImpressions: n,
							startLocation: o,
							useBottomBanner: i
						} = this.props;
						e.preventDefault(), this._scribeAction("download"), (({
							displayMode: e,
							experiment: t,
							featureSwitchImpressions: n,
							startLocation: o
						} = {}) => {
							P.b.navigateTo(L({
								displayMode: e,
								experiment: t,
								startLocation: o,
								featureSwitchImpressions: n
							}))
						})({
							displayMode: t,
							startLocation: o,
							experiment: i ? M.useAppPrompt : void 0,
							featureSwitchImpressions: n
						})
					}), i()(this, "_getSignupState", () => {
						const {
							displayMode: e,
							tweetId: t,
							userId: n
						} = this.props;
						switch (e) {
							case R.a.follow:
								return {
									gatedAction: {
										action: C.f.Follow,
										user_id: n
									}
								};
							case R.a.like:
								return {
									gatedAction: {
										action: C.f.Favorite,
										tweet_id: t,
										user_id: n
									}
								};
							case R.a.reply:
								return {
									gatedAction: {
										action: C.f.Reply,
										tweet_id: t,
										user_id: n
									}
								};
							case R.a.retweet:
								return {
									gatedAction: {
										action: C.f.Retweet,
										tweet_id: t,
										user_id: n
									}
								};
							default:
								return
						}
					}), i()(this, "_hasMobileAppStore", () => k.a.isIOS() || k.a.isAndroid());
					const {
						useBottomBanner: t
					} = this.props;
					this._showTertiaryCTA = this._hasMobileAppStore() && v.b.isTrue("responsive_web_login_signup_sheet_app_install_cta_enabled"), this.state = {
						displayInterval: t ? 6048e5 : 0
					}
				}
				componentDidMount() {
					this._shouldRenderPrompt() && this._scribeAction("impression")
				}
				componentWillUnmount() {
					const {
						setLoginPromptShown: e,
						loginPromptShown: t,
						onlyShowOnce: n,
						updateSettings: o
					} = this.props;
					!t && n && (e(!0), o({
						loginPromptLastShown: Date.now()
					}))
				}
				render() {
					const {
						customText: e,
						displayMode: t,
						userFullName: n,
						hideSignUp: o,
						useBottomBanner: i,
						loginLabel: a
					} = this.props;
					if (!this._shouldRenderPrompt()) return null;
					const {
						icon: s,
						subtext: l,
						text: c,
						iconStyle: d
					} = Object(R.b)(t), h = "function" == typeof c ? c({
						customText: e,
						userFullName: n
					}) : c, u = "function" == typeof l ? l({
						customText: e,
						userFullName: n
					}) : l, m = o ? "" : this.props.signupLabel, b = {
						pathname: "/i/flow/signup",
						state: this._getSignupState()
					};
					return i ? r.createElement(p, {
						onPrimaryButtonClick: this._handleAppInstallButtonClick,
						onSecondaryButtonClick: this._handleNotNow,
						primaryButtonLabel: D,
						primaryText: Object(R.c)(),
						secondaryButtonLabel: j,
						secondaryText: Object(R.d)()
					}) : r.createElement(x.a, {
						actionLabel: a,
						actionLink: "/login",
						graphic: s,
						graphicStyle: d,
						headline: h || "",
						isFullHeightOnMobile: !0,
						onAction: this._handleSubmit,
						onClose: this._handleClose,
						onSecondaryAction: this._handleSignupButtonClick,
						onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0,
						secondaryActionLabel: m,
						secondaryActionLink: b,
						subtext: u || "",
						tertiaryActionLabel: this._showTertiaryCTA ? D : void 0
					})
				}
				_scribeAction(e) {
					const {
						analytics: t,
						displayMode: n,
						useBottomBanner: o
					} = this.props, i = o ? "half_sheet" : n;
					t.scribe({
						component: "login_signup_sheet",
						element: i,
						action: e
					})
				}
			}
			i()(B, "defaultProps", {
				displayMode: R.a.generic,
				hideSignUp: !1,
				useBottomBanner: !1,
				loginLabel: F,
				signupLabel: N,
				onlyShowOnce: !1
			}), i()(B, "displayMode", R.a);
			const U = w(B);
			t.a = U
		},
		"S/Qv": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ezF+"),
				i = n("TEXq"),
				r = (n("ERkP"), n("fs1G")),
				a = n("caTy"),
				s = n("EIk2"),
				l = n("NeVM"),
				c = n("zh9S"),
				d = n("Rp9C"),
				h = n("Lz2T"),
				u = n("ywYn");
			const p = (e, t) => {
				if (!e) return;
				const n = e.action && e.action.url;
				return {
					link: n && Object(a.b)({
						url: n,
						urlType: n.indexOf("twitter://") >= 0 ? u.a.DeepLink : u.a.ExternalUrl
					}),
					onClick: t(e.action ? e.action.onClickCallbacks : [], e.action && e.action.dismissOnClick),
					text: e.text
				}
			};
			var m = ({
				getDisplayTypeSpecificProps: e = r.a,
				withGaps: t
			}) => o.f({
				component: h.a,
				bindActions: ({
					module: e
				}) => ({
					impressEntry: e.impressEntry,
					processCallback: s.a,
					scribe: c.c,
					removeEntry: e.removeEntry
				}),
				createProps: ({
					entry: t,
					feedbackItems: n,
					actions: {
						impressEntry: o,
						removeEntry: i,
						processCallback: r,
						scribe: a
					},
					module: {
						selectFeedbackActions: s
					},
					scribeNamespace: c,
					scribeData: d
				}) => {
					const h = t.content,
						u = h && h.content && (h.content.inlinePrompt || h.content.headerImagePrompt || h.content.compactPrompt),
						m = h && h.impressionCallbacks,
						b = Array.isArray(m) ? () => {
							o({
								entryId: t.entryId,
								callbacks: m
							})
						} : void 0,
						g = h && h.content ? e(h.content) : void 0;
					return Object.assign({
						bodyRichText: u.bodyRichText,
						bodyText: u.bodyText,
						entryId: t.entryId,
						onImpression: b,
						primaryAction: p(u.primaryButtonAction, (e, n) => () => {
							a(Object.assign({}, c, {
								element: c.element || "primary_action",
								action: "click"
							}), d), e && e.forEach(e => {
								r(e)
							}), n && i(t.entryId)
						}),
						rightControl: Object(l.a)({
							feedbackItems: n,
							onMedia: !!(null == g ? void 0 : g.image),
							scribe: a,
							scribeNamespace: c
						}),
						secondaryAction: p(u.secondaryButtonAction, (e, n) => () => {
							a(Object.assign({}, c, {
								element: c.element || "secondary_action",
								action: "click"
							}), d), e && e.forEach(e => {
								r(e)
							}), n && i(t.entryId)
						}),
						titleRichText: u.headerRichText,
						titleText: u.headerText
					}, g)
				},
				onImpression: ({
					scribeNamespace: e,
					scribeData: t,
					actions: {
						scribe: n
					}
				}) => {
					n(Object.assign({}, e, {
						action: "impression"
					}), t)
				},
				getScribeDataItem: ({
					itemMetadata: {
						clientEventInfo: e
					}
				}) => d.a.getAllSurfaceDetails(e),
				divider: {
					bottom: t,
					top: t
				}
			});
			var b = Object.freeze({
				CompactPrompt: "compactPrompt",
				HeaderImagePrompt: "headerImagePrompt",
				InlinePrompt: "inlinePrompt"
			});
			const g = e => ({
					image: e && e.headerImagePrompt && e.headerImagePrompt.headerImage && Object.assign({}, e.headerImagePrompt.headerImage.imageVariants[0], {
						backgroundColor: e.headerImagePrompt.headerImage.backgroundColor
					})
				}),
				f = e => ({
					isCompact: !0
				});
			t.a = ({
				withGaps: e = !0
			}) => o.b({
				selectDisplayType: e => Object(i.a)(e.content.content) || "",
				handlers: {
					[b.CompactPrompt]: m({
						getDisplayTypeSpecificProps: f,
						withGaps: e
					}),
					[b.HeaderImagePrompt]: m({
						getDisplayTypeSpecificProps: g,
						withGaps: e
					}),
					[b.InlinePrompt]: m({
						withGaps: e
					})
				}
			})
		},
		S1qy: function(e, t, n) {
			"use strict";
			var o = n("IGGJ");
			n("KOtZ"), n("+KXO"), Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i = o(n("cjAp")),
				r = o(n("vwfs")),
				a = o(n("0mVX")),
				s = o(n("TM14")),
				l = (o(n("eNqU")), n("4w6w")),
				c = (o(n("ACi1")), function(e) {
					return e.reduce((function(e, t) {
						return e[t.indices[0]] = t, e
					}), {})
				}),
				d = function(e, t) {
					if (t < e.length - 1) {
						var n = e.charCodeAt(t),
							o = e.charCodeAt(t + 1);
						return 55296 <= n && n <= 56319 && 56320 <= o && o <= 57343
					}
					return !1
				},
				h = function() {
					for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default.defaults, n = Object.keys(t).length ? t : i.default.defaults, o = n.defaultWeight, h = n.emojiParsingEnabled, u = n.scale, p = n.maxWeightedTweetLength, m = n.transformedURLLength, b = "function" == typeof String.prototype.normalize ? e.normalize() : e, g = c((0, r.default)(b)), f = h ? c((0, l.parse)(b)) : [], _ = b.length, y = 0, w = 0, v = !0, C = 0; C < _; C++) {
						if (g[C]) {
							var E = g[C],
								T = E.url;
							E.indices;
							y += m * u, C += T.length - 1
						} else if (h && f[C]) {
							var x = f[C],
								k = x.text;
							x.indices;
							y += o, C += k.length - 1
						} else C += d(b, C) ? 1 : 0, y += (0, a.default)(b.charAt(C), n);
						v && (v = !(0, s.default)(b.substring(C, C + 1))), v && y <= p * u && (w = C)
					}
					y /= u, v = v && y > 0 && y <= p;
					var I = Math.floor(y / p * 1e3),
						S = e.length - b.length;
					return {
						weightedLength: y,
						valid: v,
						permillage: I,
						validRangeStart: 0,
						validRangeEnd: w += S,
						displayRangeStart: 0,
						displayRangeEnd: e.length > 0 ? e.length - 1 : 0
					}
				};
			t.default = h, e.exports = t.default
		},
		SRyb: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ZNT5"),
				i = n("WpDa"),
				r = n("oQhu");
			const a = (e, t) => Object(o.a)({
					timelineId: `userTweets-graphql-${e}-${t?"withReplies":"noReplies"}`,
					formatResponse: i.a,
					getEndpoint: e => t ? e.Graphql.fetchUserTweetsAndReplies : e.Graphql.fetchUserTweets,
					getEndpointParams: ({
						count: t,
						cursor: n
					}) => ({
						count: t,
						cursor: "string" == typeof n ? n : void 0,
						userId: e
					}),
					context: "FETCH_USERS_TIMELINE",
					isUserRefreshable: !0,
					perfKey: "userTweetsGraphQL"
				}),
				s = Object(r.a)((e, t, n) => e.isTrue("responsive_web_graphql_profile_timeline") ? a(t, n) : ((e, t) => Object(o.a)({
					timelineId: `userTweets-${e}-${t?"withReplies":"noReplies"}`,
					getEndpoint: e => e.URT.fetchUserTweets,
					getEndpointParams: n => Object.assign({}, n, {
						include_tweet_replies: t,
						userId: e
					}),
					context: "FETCH_USERS_TIMELINE",
					isUserRefreshable: !0,
					perfKey: "userTweets",
					darkReadsModule: a(e, t)
				}))(t, n));
			t.a = s
		},
		"ShJ/": function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		SwJK: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			}));
			var o = n("XnvM");
			const i = (e, t) => {
					const n = o.c(e, t);
					if (void 0 === n) return n;
					const i = o.b(e, t),
						r = o.d(e, t);
					return n - (i.length - r.length)
				},
				r = (e, t) => o.d(e, t).map(({
					profile_image_url_https: e
				}) => e),
				a = (e, t) => o.d(e, t).map(({
					name: e
				}) => e)
		},
		TM14: function(e, t, n) {
			"use strict";
			var o = n("IGGJ");
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e) {
				return i.default.test(e)
			};
			var i = o(n("5MgL"));
			e.exports = t.default
		},
		TW8A: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		Tp1h: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "d", (function() {
				return U
			}));
			var o = n("ERkP"),
				i = n("wrlS"),
				r = n("t62R"),
				a = n("rHpw"),
				s = n("3XMw"),
				l = n.n(s),
				c = n("pwey"),
				d = n("uCrx"),
				h = n("Hp3u"),
				u = n("yVEN"),
				p = n("91AQ"),
				m = n("wpLu"),
				b = n("EHV7"),
				g = n("lUZE");
			const f = l.a.c8f593ef,
				_ = l.a.c5de6fd3,
				y = l.a.b6a43e77,
				w = l.a.b469e406,
				v = l.a.b8505290,
				C = ({
					userFullName: e
				}) => e ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "ib299458"
				}, o.createElement(r.c, null, e)) : void 0,
				E = l.a.cea760d3,
				T = ({
					userFullName: e
				}) => e ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "ef1fd74f"
				}, o.createElement(r.c, null, e)) : void 0,
				x = l.a.b698f80f,
				k = ({
					userFullName: e
				}) => e ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "ced7d5f6"
				}, o.createElement(r.c, null, e)) : void 0,
				I = ({
					userFullName: e
				}) => e ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "b484f9b9"
				}, o.createElement(r.c, null, e)) : void 0,
				S = l.a.a6a267da,
				P = ({
					userFullName: e
				}) => e ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "d1781a33"
				}, o.createElement(r.c, null, e)) : void 0,
				R = "channel_follow" === i.b.getStringValue("home_timeline_spheres_copy_variant") || "list_follow" === i.b.getStringValue("home_timeline_spheres_copy_variant"),
				O = ({
					customText: e
				}) => e ? R ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "i55152d2"
				}, o.createElement(r.c, null, e)) : o.createElement(l.a.I18NFormatMessage, {
					$i18n: "dec764be"
				}, o.createElement(r.c, null, e)) : void 0,
				A = ({
					userFullName: e
				}) => e ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "i8773384"
				}, o.createElement(r.c, null, e)) : void 0,
				M = l.a.g78650fd,
				L = ({
					customText: e
				}) => e ? o.createElement(l.a.I18NFormatMessage, {
					$i18n: "c2de5d7a"
				}, o.createElement(r.c, null, e)) : void 0,
				D = l.a.ea88ce2d,
				j = l.a.ge9eaa86,
				N = Object.freeze({
					follow: "follow",
					like: "like",
					reply: "reply",
					retweet: "retweet",
					generic: "generic",
					dmshare: "dmshare",
					subscribe: "subscribe",
					topic: "topic"
				}),
				F = e => {
					switch (e) {
						case N.follow:
							return {
								icon: c.a, text: I, subtext: S, iconStyle: H.iconOther
							};
						case N.like:
							return {
								icon: d.a, text: x, subtext: k, iconStyle: H.iconLike
							};
						case N.reply:
							return {
								icon: h.a, text: v, subtext: C, iconStyle: H.iconOther
							};
						case N.retweet:
							return {
								icon: u.a, text: E, subtext: T, iconStyle: H.iconRetweet
							};
						case N.dmshare:
							return {
								icon: p.a, text: P, iconStyle: H.iconOther
							};
						case N.subscribe:
							return {
								icon: m.a, text: O, subtext: A, iconStyle: H.iconOther
							};
						case N.topic:
							return {
								icon: b.a, text: M, subtext: L, iconStyle: H.iconTopics
							};
						default:
							return {
								icon: g.a, text: D, subtext: j, iconStyle: H.iconTwitter
							}
					}
				},
				B = () => i.b.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? f : y,
				U = () => i.b.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? _ : w,
				H = a.a.create(e => ({
					iconOther: {
						color: e.colors.blue500
					},
					iconLike: {
						color: e.colors.red500
					},
					iconTwitter: {
						color: e.colors.brandColor
					},
					iconRetweet: {
						color: e.colors.green500
					},
					iconTopics: {
						color: e.colors.blue500
					}
				}))
		},
		TuTd: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			}));
			n("IAdD");
			var o = n("/kEJ"),
				i = n("Ssj5");
			const r = {};
			i.a.register({
				liveTweetCounts: function(e = r, t) {
					switch (t.type) {
						case o.a: {
							var n;
							const o = null == (n = t.payload) ? void 0 : n.tweets;
							if (o) {
								const t = Object.assign({}, e);
								return Object.keys(o).forEach(e => {
									t[e] && delete t[e]
								}), t
							}
							return e
						}
						case "UPDATE":
							return Object.assign({}, e, {
								[t.payload.tweetId]: Object.assign({}, e[t.payload.tweetId], t.payload.liveCounts)
							});
						default:
							return e
					}
				}
			});
			const a = (e, t) => e.liveTweetCounts[t],
				s = e => (t, n) => t((e => ({
					payload: e,
					type: "UPDATE"
				}))(e))
		},
		Ujvi: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("ERkP"),
				i = n("t62R"),
				r = n("zrc3"),
				a = n("6ZHn"),
				s = n("rHpw"),
				l = n("MWbm"),
				c = n("3XMw"),
				d = n.n(c);
			const h = d.a.f8e8e32d;
			class u extends o.Component {
				render() {
					const {
						size: e,
						users: t,
						linkPath: n,
						withIcon: r
					} = this.props, s = this._decodeUserList(), {
						isCurrentUserIncluded: c
					} = s, d = c ? m.withCurrentUser : m.withoutCurrentUser, h = this._selectMessage(d, s), u = t.map(e => e.user_id), p = n && {
						pathname: n,
						state: {
							userIds: u
						}
					};
					return t.length > 0 ? o.createElement(l.a, {
						style: [b.root, this.props.style]
					}, o.createElement(i.c, {
						color: "gray600",
						link: p,
						size: e,
						withInteractiveStyling: !!p
					}, r ? o.createElement(a.a, {
						style: b.icon
					}) : null, h)) : null
				}
				_selectMessage(e, t) {
					const {
						users: n
					} = this.props;
					switch (n.length) {
						case 0:
							return null;
						case 1:
							return e.single(t);
						default:
							return e.multiple(t)
					}
				}
				_decodeUserList() {
					const {
						loggedInUserId: e,
						users: t
					} = this.props, n = e ? Object(r.a)(t, t => t.user_id === e) : -1, o = n >= 0, i = o && t[n] ? t[n] : void 0;
					return {
						isCurrentUserIncluded: o,
						firstName: t.length >= 1 ? o && i ? i.name : t[0].name : void 0,
						secondName: t.length >= 2 ? o && 0 !== n ? t[0].name : t[1].name : void 0,
						otherUsersCount: t.length > 0 ? t.length - 1 : 0
					}
				}
			}
			const p = (e, t = "normal") => o.createElement(i.c, {
					color: "gray600",
					weight: t
				}, e),
				m = {
					withCurrentUser: {
						single: () => p(h, "bold"),
						multiple: ({
							otherUsersCount: e,
							secondName: t
						}) => e && t ? p(o.createElement(d.a.I18NFormatMessage, {
							$i18n: "d7b2c271"
						}, o.createElement(i.c, {
							weight: "bold"
						}, d.a.df6703d2), d.a.c20f7e9e({
							otherUsersCount: e,
							secondName: o.createElement(i.c, null, t)
						}))) : null
					},
					withoutCurrentUser: {
						single: ({
							firstName: e
						}) => e ? p(e) : null,
						multiple: ({
							firstName: e,
							otherUsersCount: t,
							secondName: n
						}) => t ? p(o.createElement(d.a.I18NFormatMessage, {
							$i18n: "b035fe73"
						}, o.createElement(i.c, null, e), d.a.he26f625({
							otherUsersCount: t,
							secondName: o.createElement(i.c, null, n)
						}))) : null
					}
				},
				b = s.a.create(e => ({
					root: {
						flexDirection: "row"
					},
					icon: {
						color: e.colors.gray600,
						marginRight: e.spaces.xxSmall
					}
				}))
		},
		V2ml: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			n("jQ/y");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = (n("IAdD"), n("kYxP"), n("IMYl")),
				l = n("py1r"),
				c = n("I4+6"),
				d = n("cm6r"),
				h = n("rHpw"),
				u = (n("aWzz"), n("k/Ka")),
				p = n("MWbm");
			class m extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_handleChange", e => {
						const {
							onChange: t,
							checked: n
						} = this.props;
						t && !n && t(e.nativeEvent.target.checked)
					}), i()(this, "_setRef", e => {
						this._ref = e
					})
				}
				render() {
					const {
						disabled: e,
						label: t,
						name: n,
						checked: o
					} = this.props, i = c.a.generate({
						backgroundColor: h.a.theme.colors.transparent,
						color: h.a.theme.colors.primary,
						withFocusWithinFocusRing: !0
					}), m = c.a.generate({
						backgroundColor: h.a.theme.colors.transparent,
						color: h.a.theme.colors.gray600,
						withFocusWithinFocusRing: !0
					}), g = o ? i : m;
					return r.createElement(l.a, {
						disabled: e
					}, i => r.createElement(p.a, {
						accessibilityRole: "label",
						style: [b.root, !e && b.interactive]
					}, r.createElement(a.c, null, t), r.createElement(p.a, {
						style: [b.radioContainer]
					}, r.createElement(d.a, {
						interactiveStyles: g,
						interactivityState: i,
						style: b.radioBackground
					}, r.createElement(p.a, {
						style: [b.circle, o && b.circleActive, e && b.circleDisabled, o && e && b.circleCheckedAndDisabled]
					}, o ? r.createElement(s.a, {
						style: b.checkMark
					}) : null)), Object(u.a)("input", {
						checked: o,
						disabled: e,
						name: n,
						onChange: this._handleChange,
						ref: this._setRef,
						style: [b.nativeControl],
						type: "radio"
					}))))
				}
				focus() {
					this._ref && this._ref.focus()
				}
			}
			i()(m, "displayName", "Radio"), i()(m, "defaultProps", {
				disabled: !1,
				checked: !1
			}), m.propTypes = {};
			const b = h.a.create(e => ({
				root: {
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between",
					flexGrow: 1,
					paddingVertical: e.spaces.xxSmall
				},
				interactive: {
					cursor: "pointer"
				},
				circleDisabled: {
					borderColor: e.colors.gray200
				},
				circleCheckedAndDisabled: {
					backgroundColor: e.colors.gray300,
					borderColor: e.colors.gray300
				},
				radioContainer: {
					userSelect: "none",
					marginLeft: e.spaces.medium
				},
				radioBackground: {
					borderRadius: e.borderRadii.infinite,
					margin: "-" + e.spaces.xSmall,
					padding: e.spaces.xSmall
				},
				circle: {
					alignItems: "center",
					backgroundColor: e.colors.cellBackground,
					borderColor: e.colors.gray600,
					borderStyle: "solid",
					borderWidth: e.borderWidths.medium,
					borderRadius: e.spaces.large,
					height: e.spaces.medium,
					justifyContent: "center",
					width: e.spaces.medium
				},
				circleActive: {
					borderColor: e.colors.primary,
					backgroundColor: e.colors.primary
				},
				checkMark: {
					width: "18px",
					height: "18px",
					color: e.colors.whiteOnColor
				},
				nativeControl: Object.assign({}, h.a.absoluteFillObject, {
					cursor: "inherit",
					height: "100%",
					margin: 0,
					opacity: 0,
					padding: 0,
					width: "100%"
				})
			}));
			var g = m;
			let f = 1;
			class _ extends r.Component {
				constructor() {
					super(), i()(this, "_radioRefs", {}), i()(this, "_handleItemChanged", e => () => {
						const {
							name: t,
							onChange: n
						} = this.props;
						n(t, e)
					}), i()(this, "_setRadioRef", (e, t) => n => {
						this._radioRefs[e] = n, t && (this._radioRefs.checked = e)
					}), i()(this, "focus", () => {
						const e = this._radioRefs.checked,
							t = e ? this._radioRefs[e] : this._radioRefs[0];
						t && t.focus()
					}), this._labelId = `RADIO_GROUP_${f}_LABEL`, f += 1
				}
				render() {
					const {
						accessibilityLabel: e,
						description: t,
						disabled: n,
						label: o,
						name: i,
						options: s,
						value: l
					} = this.props;
					return r.createElement(p.a, {
						accessibilityLabel: e,
						accessibilityRole: "group",
						"aria-labelledby": o && !e ? this._labelId : void 0,
						style: n && y.disabled
					}, o ? r.createElement(p.a, {
						accessibilityRole: "label",
						nativeID: this._labelId,
						style: y.header
					}, r.createElement(a.c, {
						style: y.label,
						weight: "bold"
					}, o), t ? r.createElement(a.c, {
						color: "gray600",
						size: "small"
					}, t) : null) : null, s.map((e, t) => r.createElement(g, {
						checked: e.value === l,
						disabled: n,
						key: e.value,
						label: e.label,
						name: i,
						onChange: this._handleItemChanged(e.value),
						ref: this._setRadioRef(t, e.value === l)
					})))
				}
			}
			i()(_, "defaultProps", {
				disabled: !1
			});
			const y = h.a.create(e => ({
				header: {
					alignItems: "flex-start"
				},
				label: {
					paddingTop: e.spaces.xSmall,
					paddingBottom: e.spaces.xxSmall
				},
				disabled: {
					opacity: .5
				}
			}))
		},
		VAyw: function(e, t, n) {
			"use strict";
			var o = n("FLCi"),
				i = n("s1N3");
			const r = e => {
				var t, n;
				return (null == (t = e.features) || null == (n = t.all) ? void 0 : n.tags) || []
			};
			t.a = {
				mergeTaggedUsers: e => {
					const t = Object(o.a)(e, r).filter(e => "user" === e.type);
					return Object(i.a)(t, e => e.user_id)
				}
			}
		},
		VHqd: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M21.938 6.708c-.117-.277-.39-.458-.69-.458h-18.5c-.302 0-.573.18-.69.458-.12.277-.058.598.152.814l9.248 9.53c.14.147.335.23.538.23s.396-.083.538-.23l9.252-9.53c.21-.215.27-.537.152-.814z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		VS6U: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return V
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("HPNB"),
				s = n("3XMw"),
				l = n.n(s),
				c = (n("IAdD"), n("kYxP"), n("97Jx")),
				d = n.n(c),
				h = n("E89d"),
				u = n("v6aA"),
				p = n("xjVt"),
				m = n("2dXj"),
				b = n("MWbm"),
				g = n("xKuM"),
				f = n("rHpw");
			class _ extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_handleBackClick", () => {
						const {
							backLocation: e,
							history: t,
							onBackClick: n
						} = this.props;
						t.goBack({
							backLocation: e,
							onGoBack: n
						})
					}), i()(this, "_handleLayout", e => {
						const {
							withStickyHeader: t
						} = this.props, {
							nativeEvent: {
								layout: {
									height: n
								}
							}
						} = e;
						t && n >= 0 && this.context.viewport.setOffsetTop(n)
					})
				}
				componentWillUnmount() {
					const {
						withStickyHeader: e
					} = this.props;
					e && this.context.viewport.setOffsetTop(0)
				}
				render() {
					const {
						backLocation: e,
						middleControl: t,
						onBackClick: n,
						onTabRefresh: o,
						rightControl: i,
						secondaryBar: a,
						subtitle: s,
						style: l,
						title: c,
						withBackButton: d,
						withSearchBox: u,
						withStickyHeader: p
					} = this.props, m = d && (e || n) ? r.createElement(h.a, {
						onClick: this._handleBackClick
					}) : void 0, f = p && !u ? o : void 0;
					return r.createElement(b.a, {
						onLayout: p ? this._handleLayout : void 0,
						style: [y.root, p && y.stickyHeader, l]
					}, r.createElement(b.a, {
						style: [y.appBarContainer, !!f && y.cursor]
					}, r.createElement(g.a, {
						leftControl: m,
						middleControl: u ? this._renderSearchBox() : t,
						onMiddleControlClick: f,
						rightControl: i,
						subtitle: s,
						title: u ? void 0 : c
					})), a ? r.createElement(b.a, {
						style: y.secondaryContainer
					}, a) : null, this._renderPillControl())
				}
				_renderSearchBox() {
					const {
						searchBoxOptions: e,
						searchBoxRef: t
					} = this.props;
					return r.createElement(b.a, {
						style: y.searchContainer
					}, r.createElement(m.b, d()({}, e, {
						ref: t,
						shouldHandleSearchShortcut: !0
					})))
				}
				_renderPillControl() {
					const {
						withPillControl: e
					} = this.props;
					return e ? r.createElement(b.a, {
						pointerEvents: "box-none",
						style: y.pillControlContainer
					}, r.createElement(p.a, null)) : null
				}
			}
			i()(_, "contextType", u.a), i()(_, "defaultProps", {
				onTabRefresh: () => {
					window.scrollTo(0, 0)
				},
				withBackButton: !1,
				withSearchBox: !1,
				withStickyHeader: !1
			});
			const y = f.a.create(e => ({
				root: {
					backgroundColor: e.colors.navigationBackground,
					borderBottomWidth: e.borderWidths.small,
					borderBottomColor: e.colors.borderColor,
					borderBottomStyle: "solid"
				},
				stickyHeader: {
					backfaceVisibility: "hidden",
					position: "sticky",
					top: 0
				},
				appBarContainer: {
					zIndex: e.componentZIndices.appBarZIndex
				},
				secondaryContainer: {
					backgroundColor: e.colors.cellBackground
				},
				cursor: {
					cursor: "pointer"
				},
				searchContainer: {
					flexDirection: "row",
					flexGrow: 1,
					flexShrink: 1,
					marginHorizontal: e.spaces.xxSmall,
					marginVertical: e.spaces.xSmall
				},
				pillControlContainer: Object.assign({}, f.a.absoluteFillObject, {
					top: null,
					flexDirection: "row",
					justifyContent: "center",
					zIndex: -1
				})
			}));
			var w = n("wiP2"),
				v = n("WPfJ"),
				C = n("ZUOq"),
				E = n("vqbU"),
				T = n("Es6L"),
				x = n("XTNN"),
				k = (n("JtPf"), n("zb92")),
				I = Object(k.a)({
					loader: () => Promise.all([n.e(0), n.e(150)]).then(n.bind(null, "0af8"))
				}),
				S = "primaryColumn",
				P = "sidebarColumn",
				R = n("aITJ"),
				O = n("cHvH"),
				A = n("mw9i"),
				M = n("SyIi");
			class L extends r.Component {
				render() {
					return r.createElement(O.a, null, ({
						windowWidth: e
					}) => {
						const t = a.a.isTwoColumnLayout(e),
							n = !Object(T.a)() && e <= f.a.theme.breakpoints.medium;
						return r.createElement(b.a, {
							style: D.root
						}, r.createElement(b.a, {
							style: this._getContainerStyle(t)
						}, this._renderPrimary(t, n), t ? this._renderSidebar(e) : null))
					})
				}
				_renderPrimary(e, t) {
					const {
						primaryContent: n
					} = this.props;
					return r.createElement(A.a, {
						style: [D.primaryColumn, Object(T.a)() && j.primaryColumn, t && D.primaryColumnMobile],
						testID: S
					}, r.createElement(M.a, {
						showReload: !0
					}, "function" == typeof n ? n({
						isWide: e
					}) : n))
				}
				_renderSidebar(e) {
					const {
						sidebarContent: t
					} = this.props, n = R.a.isFirefox() && D.firefoxOverflowHidden, o = Object(T.a)() ? x.a.getSidebarWidthStyle(e) : N.sidebarColumnWidth, i = [D.sidebarColumn, !Object(T.a)() && N.sidebarColumn, o, n];
					return r.createElement(b.a, {
						style: i,
						testID: P
					}, r.createElement(M.a, null, r.createElement(I, {
						style: o
					}, r.createElement(b.a, {
						style: D.safari10NestingFix
					}, r.createElement(E.a.Provider, {
						value: !0
					}, t)))))
				}
				_getContainerStyle(e) {
					return Object(T.a)() ? [D.container, j.container] : [D.container, N.container, e && N.containerWide]
				}
			}
			i()(L, "contextType", u.a);
			const D = f.a.create(e => ({
					root: {
						backfaceVisibility: "hidden",
						flexGrow: 1
					},
					container: {
						alignItems: "stretch",
						backgroundColor: "transparent",
						flexDirection: "row",
						flexGrow: 1,
						minHeight: "100%",
						width: "100%"
					},
					primaryColumn: {
						backgroundColor: e.colors.cellBackground,
						borderColor: e.colors.borderColor,
						borderLeftWidth: e.borderWidths.small,
						borderRightWidth: e.borderWidths.small,
						borderStyle: "solid",
						width: C.a.columnWidths.primary,
						zIndex: 1
					},
					primaryColumnMobile: {
						borderColor: "transparent"
					},
					sidebarColumn: {
						backfaceVisibility: "hidden",
						marginRight: C.a.columnWidths.gutter.right
					},
					firefoxOverflowHidden: {
						overflow: "hidden"
					},
					safari10NestingFix: {
						display: "block"
					}
				})),
				j = f.a.create(e => ({
					container: {
						justifyContent: "space-between"
					},
					primaryColumn: {
						marginLeft: 0,
						marginRight: 0
					}
				})),
				N = f.a.create(e => ({
					container: {
						marginHorizontal: "auto"
					},
					containerWide: {
						paddingHorizontal: e.spaces.xSmall,
						width: C.a.contentWidths.twoColumn.normal
					},
					sidebarColumn: {
						marginLeft: C.a.columnWidths.gutter.left.small
					},
					sidebarColumnWidth: {
						width: C.a.columnWidths.secondary.normal
					}
				}));
			var F = L,
				B = n("/yvb");
			class U extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_handleSkip", e => {
						const {
							skipToRef: t
						} = this.props;
						t.current && t.current.focus && t.current.focus()
					})
				}
				render() {
					const {
						skipLabel: e
					} = this.props;
					return r.createElement(B.a, {
						accessibilityLabel: e,
						onPress: this._handleSkip,
						style: f.a.visuallyHidden
					})
				}
			}
			var H = n("n+l9");
			const z = l.a.gab492e9,
				W = l.a.a51c1570;
			class V extends r.Component {
				constructor(e) {
					super(e), i()(this, "_renderPrimaryContent", ({
						isWide: e
					}) => {
						const {
							backLocation: t,
							history: n,
							onTabRefresh: o,
							middleControl: i,
							primaryContent: a,
							rightControl: s,
							searchBoxOptions: l,
							searchBoxRef: c,
							secondaryBar: d,
							subtitle: h,
							title: u,
							withBackButton: p,
							withSearchBox: m
						} = this.props, g = "function" == typeof a ? a({
							isWide: e
						}) : a, f = (u || s || d) && Object(T.a)();
						return r.createElement(b.a, {
							ref: this._primaryContentRef
						}, f ? r.createElement(_, {
							backLocation: t,
							history: n,
							middleControl: i,
							onTabRefresh: o,
							rightControl: s,
							searchBoxOptions: l,
							searchBoxRef: c,
							secondaryBar: d,
							style: K.header,
							subtitle: h,
							title: u,
							withBackButton: p,
							withPillControl: !0,
							withSearchBox: m,
							withStickyHeader: Object(H.b)()
						}) : null, g)
					}), this._primaryContentRef = r.createRef(), this._sidebarContentRef = r.createRef()
				}
				render() {
					const {
						backLocation: e,
						composeOptions: t,
						documentTitle: n,
						logoButton: o,
						headerless: i,
						onBackClick: s,
						onTabRefresh: l,
						rightControl: c,
						searchBoxOptions: d,
						searchBoxRef: h,
						secondaryBar: u,
						sidebarContent: p,
						subtitle: m,
						TabBar: g,
						title: f,
						withBottomLoginSignupBar: _,
						withSearchBox: y,
						withTweetButton: v
					} = this.props, C = r.createElement(b.a, {
						ref: this._sidebarContentRef
					}, p), E = [r.createElement(U, {
						skipLabel: z,
						skipToRef: this._primaryContentRef
					}), r.createElement(U, {
						skipLabel: W,
						skipToRef: this._sidebarContentRef
					})];
					return r.createElement(O.a, null, ({
						windowWidth: p
					}) => {
						const b = !a.a.isTwoColumnLayout(p);
						return r.createElement(w.a.Configure, {
							TabBar: g,
							backLocation: e,
							composeOptions: t,
							documentTitle: n,
							headerless: i,
							logoButton: o,
							onBackClick: s,
							onTabRefresh: l,
							rightControl: c,
							searchBoxOptions: d,
							searchBoxRef: h,
							secondaryBar: b ? u : void 0,
							skipButtons: E,
							subtitle: m,
							title: f,
							withBottomLoginSignupBar: _,
							withPillControl: !Object(T.a)(),
							withSearchBox: y,
							withTweetButton: v
						}, r.createElement(F, {
							primaryContent: this._renderPrimaryContent,
							sidebarContent: C
						}))
					})
				}
			}
			i()(V, "defaultProps", {
				withBackButton: !0
			});
			const K = f.a.create(e => ({
				header: {
					zIndex: v.d
				}
			}))
		},
		VY6S: function(e, t, n) {
			"use strict";
			var o = n("BqYg"),
				i = n.n(o);
			t.a = (e, t, n) => i()(e, t, n)
		},
		Vg7n: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("/yvb"),
				s = n("rHpw");
			class l extends r.PureComponent {
				render() {
					const {
						accessibilityLabel: e,
						backgroundColor: t,
						disabled: n,
						href: o,
						icon: i,
						color: s,
						label: l,
						onPress: d,
						style: h,
						testID: u
					} = this.props, p = ((e, t) => "primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t)(t, s);
					return r.createElement(a.a, {
						accessibilityLabel: e,
						backgroundColor: t,
						color: p,
						disabled: n,
						icon: i,
						link: o,
						onPress: d,
						style: [c.root, !l && c.iconOnly, h],
						testID: u
					}, l)
				}
			}
			i()(l, "defaultProps", {
				backgroundColor: "primary",
				color: "white",
				disabled: !1
			});
			const c = s.a.create(e => ({
				root: {
					borderWidth: 0,
					height: e.spaces.xxLarge,
					boxShadow: e.boxShadows.small
				},
				iconOnly: {
					height: e.spaces.jumbo,
					width: e.spaces.jumbo
				}
			}));
			t.a = l
		},
		VrCx: function(e, t, n) {
			"use strict";
			const o = Object.freeze({
				Tweet: "Tweet",
				EmphasizedPromotedTweet: "EmphasizedPromotedTweet",
				DeprecatedMediaFocus: "DeprecatedMediaFocus",
				MomentTimelineTweet: "MomentTimelineTweet",
				SelfThread: "SelfThread",
				TweetFollowOnly: "TweetFollowOnly",
				Media: "Media",
				QuotedTweet: "QuotedTweet",
				Focal: "FocalTweet"
			});
			t.a = o
		},
		W27K: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("XnvM"),
				r = n("SwJK"),
				a = n("rxPX"),
				s = n("0KEI");
			const l = (e, t) => r.a(e, t.userId),
				c = (e, t) => r.b(e, t.userId),
				d = (e, t) => r.c(e, t.userId);
			var h = Object(a.a)().propsFromState(() => ({
					knownFollowersAvatarUrls: l,
					knownFollowersCount: c,
					knownFollowersNames: d
				})).propsFromActions(() => ({
					createLocalApiErrorHandler: Object(s.d)("KNOWN_FOLLOWERS"),
					fetchKnownFollowersIfNeeded: i.a
				})),
				u = n("MWbm"),
				p = n("0PHd");
			const m = n("rHpw").a.create(e => ({
					minHeight: {
						minHeight: e.spaces.medium
					}
				})),
				b = h(e => {
					const {
						userId: t,
						userScreenName: n,
						knownFollowersAvatarUrls: i,
						knownFollowersCount: r,
						knownFollowersNames: a,
						createLocalApiErrorHandler: s,
						fetchKnownFollowersIfNeeded: l
					} = e;
					return o.useEffect(() => {
						l(t).catch(s())
					}, [t, l, s]), o.createElement(u.a, {
						style: m.minHeight
					}, o.createElement(p.a, {
						knownFollowersAvatarUrls: i,
						knownFollowersCount: r,
						knownFollowersNames: a,
						userScreenName: n
					}))
				});
			t.a = b
		},
		W5XZ: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("k49u"),
				i = n("fs1G");
			const r = {
				[o.a.OtherUserSuspended]: {
					customAction: i.a
				},
				[o.a.StatusViewForbidden]: {
					customAction: i.a
				}
			}
		},
		WWyu: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("ERkP");
			const i = (e, t, n) => new Date(e, t, n);
			var r = n("3XMw"),
				a = n.n(r);
			const s = a.a.a46f80ab,
				l = a.a.c7905f88,
				c = a.a.ba2e82a1,
				d = a.a.da44942d,
				h = a.a.d7d71244;
			class u extends o.PureComponent {
				render() {
					const {
						birthdate: {
							day: e,
							month: t,
							year: n
						},
						withBornPrefixText: o
					} = this.props, i = !!n, r = !!t, a = !!e, s = !i && r && a, l = i && (!r || !a);
					return i && r && a ? this._getFullBirthdate(Number(n), Number(t), Number(e), o) : s ? this._getMonthDayBirthdate(Number(t), Number(e), o) : l ? this._getYearOnlyBirthdate(Number(n), o) : null
				}
				_getFullBirthdate(e, t, n, o) {
					const r = i(e, t - 1, n);
					return o ? s({
						birthdate: c(r)
					}) : c(r)
				}
				_getMonthDayBirthdate(e, t, n) {
					const o = i(0, e - 1, t);
					return n ? s({
						birthdate: d(o)
					}) : d(o)
				}
				_getYearOnlyBirthdate(e, t) {
					const n = i(e, 0, 1);
					return t ? l({
						year: h(n)
					}) : h(n)
				}
			}
		},
		Wk1j: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("mjJ+"),
				s = n("3XMw"),
				l = n.n(s),
				c = n("wD1h"),
				d = n("oQhu"),
				h = n("wwsH"),
				u = n("jlPL"),
				p = n("TW8A"),
				m = n("yVEN");
			const b = l.a.d6c85149,
				g = l.a.c9d7235d,
				f = l.a.f3bbbb87,
				_ = l.a.g23ce6f0,
				y = l.a.i769b0ab,
				w = l.a.ea9a1f0c,
				v = {
					viewType: "retweet"
				},
				C = {
					RETWEET: "retweet",
					UNRETWEET: "unretweet",
					QUOTE: "quote"
				};
			class E extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderMenu", e => {
						const {
							actionMenuDescription: t,
							onMenuCancel: n
						} = this.props, o = this._getActions(this.props.isRetweeted, this.props.excludeRetweetAction, this.props.excludeRetweetWithCommentAction, this.props.onQuoteTweetActionSelect, this.props.onRetweetActionSelect, this.props.onUnretweetActionSelect, this.props.retweetWithCommentLink, this.props.testIDs, e), i = this._combineHandlers(e, n);
						return r.createElement(a.a, {
							description: t,
							items: o,
							onCloseRequested: i
						})
					}), i()(this, "_getActions", Object(d.a)((e, t, n, o, i, r, a, s, l) => {
						const c = [];
						return e || t || c.push({
							text: b,
							onClick: this._combineHandlers(l, i),
							testID: null == s ? void 0 : s.retweetConfirm,
							Icon: u.a
						}), e && c.push({
							text: f,
							onClick: this._combineHandlers(l, r),
							testID: null == s ? void 0 : s.unretweetConfirm,
							Icon: u.a
						}), n || c.push({
							text: g,
							onClick: this._combineHandlers(l, o),
							Icon: p.a,
							link: a
						}), c
					})), i()(this, "_combineHandlers", (e, t) => () => {
						e(), t && t()
					})
				}
				render() {
					const {
						activeColor: e,
						color: t,
						count: n,
						enableActionMenu: o,
						enableKeyboardShortcuts: i,
						iconSize: a,
						isDisabled: s,
						isRetweeted: l,
						onPress: d,
						style: p,
						testIDs: g,
						withCount: f
					} = this.props, C = f && "number" == typeof n;
					let E = l ? _ : b;
					return C && (E = l ? w({
						count: n
					}) : y({
						count: n
					})), r.createElement(h.a, {
						ActiveIcon: m.a,
						Icon: u.a,
						accessibilityLabel: E,
						activeColor: e,
						clientEventContext: v,
						color: t,
						count: n,
						enableKeyboardShortcuts: i,
						iconSize: a,
						isActive: l,
						isDisabled: s,
						keyboardShortcut: c.a.shortcuts.retweet,
						onPress: d,
						renderMenu: o ? this._renderMenu : void 0,
						style: p,
						testID: l ? null == g ? void 0 : g.unretweet : null == g ? void 0 : g.retweet,
						withCount: C
					})
				}
			}
			i()(E, "defaultProps", {
				activeColor: "green500"
			})
		},
		X04g: function(e, t, n) {
			"use strict";
			const o = Object.freeze({
				ItemType: {
					TWEET: 0,
					USER: 3,
					ACTIVITY: 5,
					MESSAGE: 6,
					STORY: 7,
					TREND: 8,
					LIST: 11,
					SEARCH: 12,
					SAVED_SEARCH: 13,
					PEOPLE_SEARCH: 14,
					EVENT: 16,
					LIVE_VIDEO_EVENT: 28,
					SELFTHREAD: 33,
					TOPIC: 36
				},
				CardType: {
					PHOTO_TWEET: 1,
					PHOTO_CARD: 2,
					PLAYER_CARD: 3,
					SUMMARY_CARD: 4,
					PROMOTION_CARD: 5,
					PLUS_CARD: 6
				},
				AssociationType: {
					ASSOCIATED_TWEET: 1,
					PLATFORM_CARD_PUBLISHER: 2,
					PLATFORM_CARD_CREATOR: 3,
					CONVERSATION_ORIGIN: 4,
					ASSOCIATED_USER: 5,
					ASSOCIATED_TIMELINE: 6
				},
				EventInitiator: {
					CLIENT_SIDE_USER: 0,
					SERVER_SIDE_USER: 1,
					CLIENT_SIDE_APP: 2,
					SERVER_SIDE_APP: 3
				}
			});
			t.a = o
		},
		XEYr: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("k49u"),
				i = n("3XMw"),
				r = n.n(i);
			const a = r.a.b141cbff,
				s = r.a.e902fd9d,
				l = r.a.bbbfc827,
				c = {
					defaultToast: {
						text: s
					},
					[o.a.BlockedUserError]: {
						toast: {
							text: a
						}
					},
					[o.a.ProtectedStatusFavoriteError]: {
						toast: {
							text: l
						}
					},
					showToast: !0
				}
		},
		XcJG: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			const o = Object.freeze({
					Basic: "Basic",
					Recommendation: "Recommendation",
					Pivot: "Pivot"
				}),
				i = Object.freeze({
					Basic: "Basic",
					Pill: "Pill",
					NoIcon: "NoIcon"
				})
		},
		XiMS: function(e, t, n) {
			"use strict";
			n("IAdD"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("IMYl"),
				h = n("py1r"),
				u = n("I4+6"),
				p = n("cm6r"),
				m = n("rHpw"),
				b = (n("aWzz"), n("k/Ka")),
				g = n("gHc1"),
				f = n("MWbm");
			class _ extends c.Component {
				constructor(...e) {
					super(...e), l()(this, "_handleChange", e => {
						const {
							onChange: t
						} = this.props;
						t && t(e.nativeEvent.target.checked)
					}), l()(this, "_setCheckboxRef", e => {
						this._checkboxElement = e
					})
				}
				blur() {
					this._checkboxElement && g.a.blur(this._checkboxElement)
				}
				focus() {
					this._checkboxElement && g.a.focus(this._checkboxElement)
				}
				render() {
					const e = this.props,
						{
							checked: t,
							disabled: n,
							style: o
						} = e,
						r = a()(e, ["checked", "disabled", "onChange", "style"]),
						s = u.a.generate({
							backgroundColor: m.a.theme.colors.transparent,
							color: m.a.theme.colors.primary,
							withFocusWithinFocusRing: !0
						}),
						l = u.a.generate({
							backgroundColor: m.a.theme.colors.transparent,
							color: m.a.theme.colors.gray600,
							withFocusWithinFocusRing: !0
						}),
						g = t ? s : l,
						_ = Object(b.a)("input", {
							checked: t,
							disabled: n,
							onChange: this._handleChange,
							ref: this._setCheckboxRef,
							style: [y.nativeControl, y.cursorInherit],
							type: "checkbox"
						});
					return c.createElement(h.a, {
						disabled: n
					}, e => {
						return c.createElement(f.a, i()({}, r, {
							style: [y.root, o, n && y.cursorDefault]
						}), (a = e, c.createElement(p.a, {
							interactiveStyles: g,
							interactivityState: a,
							style: y.fakeControlInteractiveStyles
						}, c.createElement(f.a, {
							style: [y.fakeControl, t && y.fakeControlChecked, n && y.fakeControlDisabled, t && n && y.fakeControlCheckedAndDisabled]
						}, t ? c.createElement(d.a, {
							style: y.icon
						}) : null))), _);
						var a
					})
				}
			}
			l()(_, "displayName", "@twitter/Checkbox"), l()(_, "defaultProps", {
				checked: !1,
				disabled: !1
			}), _.propTypes = {};
			const y = m.a.create(e => ({
				root: {
					cursor: "pointer",
					userSelect: "none"
				},
				cursorDefault: {
					cursor: "default"
				},
				cursorInherit: {
					cursor: "inherit"
				},
				fakeControlInteractiveStyles: {
					padding: e.spaces.xSmall,
					margin: "-" + e.spaces.xSmall,
					borderRadius: e.borderRadii.infinite
				},
				fakeControl: {
					alignItems: "center",
					backgroundColor: e.colors.cellBackground,
					borderColor: e.colors.gray600,
					borderRadius: e.borderRadii.small,
					borderStyle: "solid",
					borderWidth: e.borderWidths.medium,
					height: e.spaces.medium,
					justifyContent: "center",
					width: e.spaces.medium
				},
				fakeControlChecked: {
					backgroundColor: e.colors.primary,
					borderColor: e.colors.primary
				},
				fakeControlDisabled: {
					borderColor: e.colors.gray200
				},
				fakeControlCheckedAndDisabled: {
					backgroundColor: e.colors.gray300,
					borderColor: e.colors.gray300
				},
				nativeControl: Object.assign({}, m.a.absoluteFillObject, {
					height: "100%",
					margin: 0,
					opacity: 0,
					padding: 0,
					width: "100%"
				}),
				icon: Object.assign({}, m.a.absoluteFillObject, {
					color: e.colors.whiteOnColor,
					height: e.spaces.medium,
					margin: "auto"
				})
			}));
			t.a = _
		},
		XnvM: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			n("IAdD"), n("JtPf");
			var o = n("/kEJ"),
				i = n("Ssj5");
			var r = n("G6rE"),
				a = n("oEOe");
			const s = Object(a.a)("rweb/knownFollowers", "FETCH_KNOWN_FOLLOWERS"),
				l = {};
			i.a.register({
				knownFollowers: function(e = l, t) {
					switch (t.type) {
						case s.SUCCESS: {
							const n = t.payload || {},
								{
									total_count: o,
									users: i
								} = n && n.result,
								{
									user_id: r
								} = t.meta || {};
							return r ? Object.assign({}, e, {
								[r]: {
									knownFollowersCount: o,
									knownFollowerIds: i
								}
							}) : e
						}
						default:
							return e
					}
				}
			});
			const c = (e, t) => e.knownFollowers[t],
				d = (e, t) => {
					let n = [];
					if (t) {
						const a = p(e, t);
						o = r.e.selectMany(e, a), i = e => !!e, n = o.filter(i)
					}
					var o, i;
					return n
				},
				h = (e, t) => d(e, t).filter(({
					profile_image_url_https: e,
					name: t
				}) => !!(null == e ? void 0 : e.length) && !!(null == t ? void 0 : t.length)),
				u = (e, t) => {
					let n;
					if (t) {
						const o = c(e, t);
						n = null == o ? void 0 : o.knownFollowersCount
					}
					return n
				},
				p = (e, t) => {
					const n = c(e, t);
					return (null == n ? void 0 : n.knownFollowerIds) || []
				},
				m = e => (t, n, {
					api: i
				}) => void 0 !== u(n(), e) ? Promise.resolve() : t((e => (t, n, {
					api: i
				}) => Object(a.b)(t, {
					request: i.Friendships.fetchFollowersYouFollow,
					params: {
						user_id: e,
						count: 3,
						with_total_count: !0
					}
				})({
					actionTypes: s,
					context: "FETCH_KNOWN_FOLLOWERS",
					meta: {
						user_id: e
					}
				}, e => {
					if (e) {
						const {
							entities: t
						} = e;
						return [Object(o.c)(t)]
					}
				}))(e))
		},
		XrEN: function(e, t, n) {
			"use strict";
			n("IAdD"), n("ERkP");
			var o = n("3XMw"),
				i = n.n(o),
				r = n("/NU0"),
				a = n("3dad"),
				s = n("ZvMt");
			const l = Object.freeze({
					ANIMATED_GIF: "animated_gif",
					VIDEO: "video",
					VINE: "vine"
				}),
				c = Object.values(l),
				d = i.a.fc45ccc5,
				h = e => e.additional_media_info && e.additional_media_info.call_to_actions ? u(e.additional_media_info.call_to_actions) : void 0,
				u = e => e.visit_site ? {
					type: "url",
					url: e.visit_site.url
				} : e.watch_now ? {
					type: "watch",
					url: e.watch_now.url
				} : void 0,
				p = e => m(e.mediaStats && e.mediaStats.viewCount),
				m = e => {
					const t = e && parseInt(e, 10);
					return t && Object(r.a)(t) && t >= 0 ? t : void 0
				};
			t.a = {
				extractVideoProps: (e, t, n, o) => {
					const {
						duration_millis: i,
						variants: r
					} = t.video_info || {};
					let l = {
						accessibilityLabel: t.ext_alt_text || d,
						aspectRatio: s.a.getAspectRatio(t.video_info, 1),
						backgroundColor: a.a.getBackgroundColor(t),
						cta: h(t),
						durationMs: i,
						poster: a.a.getOriginalImage(t),
						source: {
							eventId: n,
							contentId: t.id_str,
							variants: r,
							videoId: e
						},
						videoType: t.type,
						viewCount: p(t)
					};
					return o && (l = Object.assign({}, l, {
						forwardPivotInfo: o
					})), l
				},
				getVideoFromCoverMedia: e => e && "photo" !== e.type ? e : void 0,
				isVideo: e => !!e && -1 !== c.indexOf(e.type),
				VIDEO_TYPES: c
			}
		},
		Xrkv: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("kYxP");
			var o = n("3XMw"),
				i = n.n(o);
			const r = {
				listTwo: i.a.b4f19b96,
				listItems: i.a.i0135403,
				listEnd: i.a.f1574a4a
			};

			function a(e, t = !1) {
				const n = e.length,
					[o, i] = e;
				switch (n) {
					case 0:
						return "";
					case 1:
						return o;
					case 2:
						return t ? r.listItems({
							listItem1: o,
							listItem2: i
						}) : r.listTwo({
							listItem1: o,
							listItem2: i
						});
					default:
						return function e(t, n) {
							if (2 === t.length) {
								const [e, o] = t;
								return (e => e ? r.listItems : r.listEnd)(n)({
									listItem1: e,
									listItem2: o
								})
							}
							const [o, ...i] = t;
							return r.listItems({
								listItem1: o,
								listItem2: e(i, n)
							})
						}(e, t)
				}
			}
		},
		Xzpq: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 23.253c-.236 0-.458-.11-.6-.3l-2.59-3.45H4.25c-1.24 0-2.25-1.01-2.25-2.25V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v13.003c0 1.24-1.01 2.25-2.25 2.25h-4.563l-2.588 3.45c-.142.19-.364.3-.6.3zm-2.194-4.925L12 21.253l2.213-2.95c.142-.188.363-.3.6-.3h4.938c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25c-.413 0-.75.337-.75.75v13.003c0 .413.337.75.75.75h4.867c.235-.02.448.06.608.228.03.03.057.064.08.098z"
			}), o.createElement("circle", {
				cx: "6.963",
				cy: "11",
				r: "1.375"
			}), o.createElement("circle", {
				cx: "11.813",
				cy: "11",
				r: "1.375"
			}), o.createElement("circle", {
				cx: "16.663",
				cy: "11",
				r: "1.375"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		YICZ: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("rxPX"),
				r = n("0KEI"),
				a = n("Zejx");
			var s = Object(i.a)().propsFromActions(() => ({
					createLocalApiErrorHandler: Object(r.d)("TOPIC_NOT_INTERESTED_CONTEXT"),
					setNotInterested: a.a.notInterested
				})),
				l = n("3XMw"),
				c = n.n(l),
				d = n("hOZg"),
				h = n("Irs7"),
				u = n("/yvb"),
				p = n("rHpw");
			const m = c.a.d9b417c4,
				b = c.a.c29d6806,
				g = e => {
					const {
						createLocalApiErrorHandler: t,
						nativeID: n,
						onPress: i,
						pullRight: r,
						setNotInterested: a,
						size: s,
						style: l,
						topicId: c,
						type: d,
						withIconOnly: p
					} = e, g = Object(h.b)(), f = o.useCallback(e => {
						e.preventDefault(), i ? i(e) : (g.scribe({
							element: "topic",
							action: "not_interested"
						}), a(c).catch(t()))
					}, [g, t, i, a, c]);
					return o.createElement(u.a, {
						accessibilityLabel: m,
						icon: p ? _ : void 0,
						nativeID: n,
						onPress: f,
						pullRight: r,
						size: s,
						style: l,
						type: d
					}, p ? null : b)
				};
			g.defaultProps = {
				size: "small",
				type: "text",
				withIconOnly: !0
			};
			const f = p.a.create(e => ({
					closeIcon: {
						color: e.colors.gray600
					}
				})),
				_ = o.createElement(d.a, {
					style: f.closeIcon
				}),
				y = s(g);
			t.a = y
		},
		YUdS: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 6.75c-1.792 0-3.25 1.607-3.25 3.583 0 .553-.447 1-1 1s-1-.447-1-1C6.75 7.255 9.105 4.75 12 4.75c.553 0 1 .447 1 1s-.447 1-1 1z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		YjVx: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ZNT5");
			t.a = e => Object(o.a)({
				timelineId: "userMedia-" + e,
				getEndpoint: e => e.URT.fetchUserMedia,
				getEndpointParams: t => Object.assign({
					userId: e
				}, t),
				context: "FETCH_MEDIA_TIMELINE",
				perfKey: "userMedia"
			})
		},
		"Yy//": function(e, t, n) {
			"use strict";
			var o = n("ezF+"),
				i = n("xZXe"),
				r = n("ERkP"),
				a = n("3XMw"),
				s = n.n(a),
				l = n("6vad"),
				c = n("MWbm");
			const d = s.a.e25a0c3a;
			var h = e => r.createElement(c.a, null, r.createElement(l.b, {
					text: d
				}), r.createElement(i.a, e)),
				u = n("VrCx"),
				p = n("yy6l");
			t.a = ({
				displayBlocked: e,
				dismissable: t = !1,
				hideConversationControlsEducationText: n = !1,
				shouldSelfThreadIncludeAvatar: r = !1,
				showWithheldBannerOnMyTweets: a = !0,
				withActionsDisabled: s = !1,
				withMuteConversation: l = !1,
				withRemoveFromBookmarks: c = !1,
				withSelfThread: d = !0
			}) => o.b({
				selectDisplayType: e => e.content.displayType,
				handlers: {
					[u.a.Tweet]: Object(p.a)({
						component: i.a,
						displayBlocked: e,
						dismissable: t,
						hideConversationControlsEducationText: n,
						shouldSelfThreadIncludeAvatar: r,
						showWithheldBannerOnMyTweets: a,
						withMuteConversation: l,
						withRemoveFromBookmarks: c,
						withSelfThread: d
					}),
					[u.a.EmphasizedPromotedTweet]: Object(p.a)({
						component: h,
						displayBlocked: e,
						dismissable: t,
						divider: {
							bottom: !0,
							top: !0
						},
						hideConversationControlsEducationText: n
					}),
					[u.a.MomentTimelineTweet]: Object(p.a)({
						component: i.a,
						displayBlocked: e,
						dismissable: t,
						hideConversationControlsEducationText: n,
						shouldSelfThreadIncludeAvatar: r,
						showWithheldBannerOnMyTweets: a,
						withActionsDisabled: s,
						withRemoveFromBookmarks: c,
						withSelfThread: d,
						divider: {
							bottom: !0,
							top: !0
						}
					}),
					[u.a.SelfThread]: Object(p.a)({
						component: i.a,
						displayBlocked: e,
						dismissable: t,
						hideConversationControlsEducationText: n,
						shouldSelfThreadIncludeAvatar: r,
						withMuteConversation: l,
						withSelfThread: d
					})
				}
			})
		},
		"Z8+W": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("mjJ+"),
				s = n("3XMw"),
				l = n.n(s),
				c = n("wD1h"),
				d = n("I8UQ"),
				h = n("wwsH"),
				u = n("aITJ"),
				p = n("KDev"),
				m = (n("IAdD"), n("Lsrn")),
				b = n("k/Ka");
			const g = (e = {}) => Object(b.a)("svg", Object.assign({}, e, {
				style: [m.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
			})));
			g.metadata = {
				width: 24,
				height: 24
			};
			var f = g,
				_ = n("uCrx");
			const y = l.a.d636ebc6,
				w = l.a.a4ae22fa,
				v = l.a.a0af935b,
				C = l.a.dac92b0c,
				E = l.a.aa650427,
				T = {
					viewType: "like"
				};
			class x extends r.PureComponent {
				constructor(e, t) {
					super(e, t), i()(this, "_getTestID", () => {
						const {
							isLiked: e,
							testIDs: t
						} = this.props;
						if (t) return e ? t.unlike : t.like
					}), i()(this, "_renderMenu", e => {
						const {
							actionMenuDescription: t,
							onLikeActionSelect: n,
							onMenuCancel: o,
							testIDs: i
						} = this.props, s = this._combineHandlers(e, o), l = [{
							text: w,
							onClick: this._combineHandlers(e, n),
							testID: null == i ? void 0 : i.like,
							Icon: f
						}];
						return r.createElement(a.a, {
							description: t,
							items: l,
							onCloseRequested: s
						})
					}), i()(this, "_handlePress", () => {
						const {
							onPress: e
						} = this.props;
						u.a.isFirefox() || p.a.vibrate(5), e && e()
					}), i()(this, "_handleAnimationEnd", () => {
						this.setState({
							showLikeAnimation: !1
						})
					}), i()(this, "_combineHandlers", (e, t) => () => {
						e(), t && t()
					}), this.state = {
						showLikeAnimation: !1,
						wasLiked: this.props.isLiked || !1
					}
				}
				static getDerivedStateFromProps(e, t) {
					const {
						wasLiked: n
					} = t, {
						isLiked: o,
						likeTransitionAnimation: i
					} = e;
					return ("object" == typeof i || d.b.check(i)) && n !== o ? {
						showLikeAnimation: o,
						wasLiked: o
					} : null
				}
				render() {
					const {
						activeColor: e,
						color: t,
						count: n,
						enableActionMenu: o,
						enableKeyboardShortcuts: i,
						iconSize: a,
						isDisabled: s,
						isFaded: l,
						isLiked: d,
						likeTransitionAnimation: u,
						onError: p,
						style: m,
						withCount: b
					} = this.props, {
						showLikeAnimation: g
					} = this.state, w = b && "number" == typeof n;
					let x = d ? v : y;
					return w && (x = d ? E({
						count: n
					}) : C({
						count: n
					})), r.createElement(h.a, {
						ActiveIcon: _.a,
						Icon: f,
						accessibilityLabel: x,
						activeColor: e,
						clientEventContext: T,
						color: t,
						count: n,
						enableKeyboardShortcuts: i,
						iconSize: a,
						isActive: d,
						isDisabled: s,
						isFaded: l,
						keyboardShortcut: c.a.shortcuts.like,
						onAnimationEnd: this._handleAnimationEnd,
						onError: p,
						onPress: this._handlePress,
						renderMenu: o ? this._renderMenu : void 0,
						showAnimation: g,
						style: m,
						testID: this._getTestID(),
						transitionAnimationUrl: u,
						withCount: w
					})
				}
			}
			i()(x, "defaultProps", {
				activeColor: "red500",
				enableActionMenu: !1
			})
		},
		Zejx: function(e, t, n) {
			"use strict";
			n("IAdD"), n("JtPf"), n("kYxP");
			var o = n("lMB6"),
				i = n("3zvM");
			const r = Object(i.e)({
					namespace: "topics"
				}),
				a = Object(i.b)(r, {
					context: "FETCH_TOPIC",
					endpoint: e => e.Topics.fetchOneTopic,
					params: ([e], t) => ({
						topicId: e
					})
				}),
				s = {
					updateFollowingStatus: (e, t) => (n, o) => (n(r.updateOne(e, {
						following: t
					})), Promise.resolve())
				},
				l = (e, t, n) => {
					const {
						entityId: o
					} = t.meta, i = e.entities[o];
					return i ? ((e, t, n, o) => /_REQUEST$/.test(t.type) ? Object.assign({}, e, {
						entities: Object.assign({}, e.entities, {
							[n.id]: Object.assign({}, n, o())
						})
					}) : e)(e, t, i, n) : e
				},
				c = {
					follow: Object(i.c)(r, "follow", {
						getParams: e => ({
							topicId: e
						}),
						getApiMethod: e => e.Topics.follow,
						reducer: (e, t) => l(e, t, () => ({
							following: !0,
							not_interested: !1
						})),
						context: "FOLLOW_TOPIC"
					}),
					unfollow: Object(i.c)(r, "unfollow", {
						getParams: e => ({
							topicId: e
						}),
						getApiMethod: e => e.Topics.unfollow,
						reducer: (e, t) => l(e, t, () => ({
							following: !1
						})),
						context: "UNFOLLOW_TOPIC"
					}),
					notInterested: Object(i.c)(r, "notInterested", {
						getParams: e => ({
							topicId: e
						}),
						getApiMethod: e => e.Topics.notInterested,
						reducer: (e, t) => l(e, t, () => ({
							following: !1,
							not_interested: !0
						})),
						context: "NOT_INTERESTED_TOPIC"
					}),
					undoNotInterested: Object(i.c)(r, "undoNotInterested", {
						getParams: e => ({
							topicId: e
						}),
						getApiMethod: e => e.Topics.undoNotInterested,
						reducer: (e, t) => l(e, t, () => ({
							not_interested: !1
						})),
						context: "UNDO_NOT_INTERESTED_TOPIC"
					})
				},
				d = Object.assign({}, r, a, s, c, {
					customActionTypes: Object(i.d)(c)
				});
			t.a = o.a.register(d)
		},
		ZvMt: function(e, t, n) {
			"use strict";
			n("kYxP");
			t.a = {
				getAspectRatio: (e = {}, t = 16 / 9) => {
					const {
						aspect_ratio: [n, o] = []
					} = e;
					if (n && o) {
						const e = n / o,
							i = e < t;
						return n > o && !i ? e : t
					}
					return t
				}
			}
		},
		aA1u: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("21zW"),
				s = n("rHpw"),
				l = n("t62R"),
				c = n("3XMw"),
				d = n.n(c);
			const h = d.a.jade381b,
				u = d.a.d725a288;
			class p extends r.Component {
				render() {
					const {
						style: e
					} = this.props;
					return r.createElement(l.c, {
						color: l.a.gray600,
						style: e
					}, this._renderTimestampAndMaybePlace(), this._maybeRenderSource())
				}
				_renderTimestampAndMaybePlace() {
					const {
						linkColor: e,
						onPlaceClick: t,
						onTimestampClick: n,
						place: o,
						placeLink: i,
						timestamp: a,
						timestampLink: s
					} = this.props, c = (e => {
						const t = new Date(e),
							n = h(t);
						return `${u(t)} · ${n}`
					})(a);
					return o ? r.createElement(d.a.I18NFormatMessage, {
						$i18n: "ba64a3b2"
					}, r.createElement(l.c, {
						color: s ? e : void 0,
						link: s,
						onClick: n
					}, d.a.e9c24489({
						date: c
					})), r.createElement(l.c, {
						color: i ? e : void 0,
						link: i,
						onClick: t
					}, d.a.a16de8a4({
						place: o
					}))) : r.createElement(l.c, {
						color: s ? e : void 0,
						link: s,
						onClick: n
					}, c)
				}
				_maybeRenderSource() {
					const {
						linkColor: e,
						onSourceClick: t,
						source: n,
						sourceLink: o
					} = this.props;
					return n ? r.createElement(r.Fragment, null, r.createElement(a.a, null), r.createElement(l.c, {
						color: o ? e : void 0,
						link: o,
						onClick: t,
						style: m.source
					}, n)) : null
				}
			}
			i()(p, "defaultProps", {
				linkColor: l.a.link
			});
			const m = s.a.create(e => ({
				source: {
					whiteSpace: "normal"
				}
			}));
			t.a = p
		},
		aFQM: function(e, t, n) {
			"use strict";
			n("tVqn"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("xZmF"),
				s = n("iPch"),
				l = n("rxPX"),
				c = n("kHBp"),
				d = n("P1r1");
			const h = (e, t) => t.listId,
				u = (e, t) => c.a.select(e, h(0, t)),
				p = (e, t) => s.h(e, t.listId);
			var m = Object(l.a)().propsFromState(() => ({
					list: u,
					listId: h,
					dataSaverMode: d.k,
					media: p
				})).adjustStateProps(({
					list: e,
					listId: t,
					dataSaverMode: n,
					media: o
				}) => ({
					name: null == e ? void 0 : e.name,
					isPrivate: "private" === (null == e ? void 0 : e.mode),
					listId: t,
					dataSaverMode: n,
					media: o
				})),
				b = n("wrlS"),
				g = n("3XMw"),
				f = n.n(g),
				_ = n("a5gf"),
				y = n("2My+"),
				w = n("MWbm"),
				v = n("htQn"),
				C = n("t62R"),
				E = n("rHpw");
			const T = f.a.j681933d;
			class x extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_shouldShowHoverCard", b.b.isTrue("responsive_web_list_hover_cards_enabled")), i()(this, "_renderThumbnail", () => {
						const {
							media: e,
							dataSaverMode: t,
							name: n,
							listId: o,
							onClick: i,
							isPrivate: s
						} = this.props, l = "/i/lists/" + o;
						return r.createElement(v.a, {
							link: l,
							onPress: i,
							style: k.root
						}, r.createElement(a.a, {
							cropCandidates: e.crop,
							dataSaverMode: t,
							icon: "lists",
							image: e.image
						}), r.createElement(w.a, {
							style: k.name
						}, r.createElement(C.c, {
							align: "center",
							numberOfLines: 1,
							size: "small"
						}, n ? n.trim() : null), s ? r.createElement(_.a, {
							accessibilityLabel: T,
							style: k.iconLock
						}) : null))
					})
				}
				render() {
					var e;
					const {
						media: t,
						name: n,
						listId: o
					} = this.props;
					if (!((null == t || null == (e = t.image) ? void 0 : e.url) && n && o)) return null;
					const i = "/i/lists/" + o;
					return this._shouldShowHoverCard ? r.createElement(y.a, {
						basePath: i,
						listId: o
					}, this._renderThumbnail()) : this._renderThumbnail()
				}
			}
			const k = E.a.create(e => ({
					root: {
						alignItems: "center",
						backgroundColor: e.colors.cellBackground,
						padding: e.spaces.xSmall
					},
					name: {
						alignSelf: "stretch",
						paddingTop: e.spaces.xxSmall,
						flexDirection: "row",
						justifyContent: "center"
					},
					iconLock: {
						color: e.colors.text,
						marginHorizontal: e.spaces.xxSmall
					}
				})),
				I = m(x);
			t.a = I
		},
		"aV/s": function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = n("3XMw"),
				l = n.n(s),
				c = n("I4+6"),
				d = n("cm6r"),
				h = n("rHpw"),
				u = n("oSwX"),
				p = n("MWbm"),
				m = (n("aWzz"), n("hOZg")),
				b = n("iY63"),
				g = n("IMYl");
			const f = l.a.e3fcbdba;
			class _ extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_handleDismissClick", () => {
						const {
							onDismissClick: e
						} = this.props;
						e && e()
					})
				}
				render() {
					const {
						accessibilityLabel: e,
						compact: t,
						disabled: n,
						onClick: o,
						onDismissClick: i,
						selected: s,
						style: l,
						text: u,
						userAvatarURI: b
					} = this.props, g = this._renderIcon(), _ = [y.root, t && y.compact, n && y.disabled, s && y.selected, l], w = [y.content, g && y.withIcon, b && (t && y.withAvatarImageCompact || y.withAvatarImage)], v = c.a.generate({
						backgroundColor: s ? h.a.theme.colors.primary : "transparent",
						color: s ? h.a.theme.colors.white : h.a.theme.colors.primary
					});
					return r.createElement(p.a, {
						style: _
					}, r.createElement(d.a, {
						accessibilityLabel: e,
						disabled: n,
						interactiveStyles: v,
						onPress: o,
						style: w
					}, this._renderUserAvatar(), r.createElement(a.c, {
						color: s ? "whiteOnColor" : "normal",
						numberOfLines: 1,
						selectable: !1,
						style: y.text,
						weight: "bold"
					}, u), g), i ? r.createElement(d.a, {
						accessibilityLabel: f,
						disabled: n || s,
						interactiveStyles: v,
						onPress: this._handleDismissClick,
						style: y.dismissControl
					}, r.createElement(p.a, {
						style: y.dismissBorder
					}, r.createElement(m.a, {
						style: [y.dismissIcon, s && y.iconSelected]
					}))) : null)
				}
				_renderIcon() {
					const {
						mode: e,
						selected: t
					} = this.props, n = [y.icon, t && y.iconSelected];
					switch (e) {
						case "remove":
							return r.createElement(m.a, {
								style: n
							});
						case "expand":
							return r.createElement(b.a, {
								style: n
							});
						case "active":
							return r.createElement(g.a, {
								style: n
							});
						default:
							return null
					}
				}
				_renderUserAvatar() {
					const {
						compact: e,
						userAvatarURI: t
					} = this.props;
					return t ? r.createElement(p.a, {
						style: y.avatarContainer
					}, r.createElement(u.default, {
						size: "custom",
						style: [e && y.avatarCompact || y.avatar],
						uri: t
					})) : null
				}
			}
			i()(_, "defaultProps", {
				compact: !1,
				disabled: !1,
				selected: !1
			}), _.propTypes = {};
			const y = h.a.create(e => ({
				root: {
					backgroundColor: e.colors.cellBackground,
					borderColor: e.colors.gray200,
					borderRadius: e.borderRadii.infinite,
					borderStyle: "solid",
					borderWidth: "1px",
					flexDirection: "row",
					minHeight: e.spaces.xLarge,
					overflow: "hidden"
				},
				content: {
					alignItems: "center",
					flexDirection: "row",
					flexGrow: 1,
					flexShrink: 1,
					paddingHorizontal: e.spaces.small
				},
				text: {
					width: "100%"
				},
				compact: {
					minHeight: e.spaces.large
				},
				disabled: {
					borderColor: e.colors.gray50
				},
				selected: {
					backgroundColor: e.colors.primary,
					borderColor: e.colors.primary
				},
				avatar: {
					height: `calc(${e.spaces.large} + ${e.spaces.micro})`,
					width: `calc(${e.spaces.large} + ${e.spaces.micro})`
				},
				avatarCompact: {
					height: `calc(${e.spaces.medium} + ${e.spaces.micro} * 2)`,
					width: `calc(${e.spaces.medium} + ${e.spaces.micro} * 2)`
				},
				avatarContainer: {
					paddingRight: e.spaces.xxSmall
				},
				withAvatarImage: {
					paddingLeft: `calc(${e.spaces.micro} * 2)`
				},
				withAvatarImageCompact: {
					paddingLeft: `calc(${e.spaces.nano} * 3)`
				},
				icon: {
					color: e.colors.primary,
					flexShrink: 0,
					marginLeft: e.spaces.xSmall
				},
				iconSelected: {
					color: e.colors.whiteOnColor
				},
				withIcon: {
					paddingRight: e.spaces.xSmall
				},
				dismissIcon: {
					color: e.colors.gray300
				},
				dismissControl: {
					flexShrink: 0,
					justifyContent: "center"
				},
				dismissBorder: {
					borderLeftColor: e.colors.borderColor,
					borderLeftWidth: e.borderWidths.small,
					paddingHorizontal: e.spaces.small
				}
			}));
			t.a = _
		},
		ajvb: function(e, t, n) {
			"use strict";
			var o = n("3XMw"),
				i = n.n(o),
				r = n("qB1G");
			const a = i.a.f178e38c,
				s = i.a.b6da6b01,
				l = i.a.i9f615c8,
				c = i.a.f897267a,
				d = i.a.f93c4b69;
			t.a = e => {
				switch (e) {
					case r.a.Scheduled:
						return a;
					case r.a.InProgress:
						return s;
					case r.a.Completed:
						return l;
					case r.a.Postponed:
						return c;
					case r.a.Cancelled:
						return d;
					default:
						return ""
				}
			}
		},
		b1wW: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("ERkP");
			const o = Object.freeze({
				Carousel: "Carousel",
				GridCarousel: "GridCarousel",
				Vertical: "Vertical"
			})
		},
		b5s6: function(e, t, n) {
			"use strict";
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("v6aA"),
				c = n("rxPX"),
				d = n("XOJV");
			const h = (e, t) => t.tweetId;
			var u = Object(c.a)().propsFromState(() => ({
					hydratedTweet: d.a.createHydratedTweetSelector(h)
				})),
				p = n("uCxL");
			const m = u(e => {
				let {
					hydratedTweet: t
				} = e, n = a()(e, ["hydratedTweet", "tweetId"]);
				const {
					featureSwitches: o,
					loggedInUserId: r
				} = s.useContext(l.a), c = o.isTrue("responsive_web_alt_text_badge_enabled");
				return s.createElement(p.a, i()({}, n, {
					loggedInUserId: r,
					shouldShowAltLabelAlways: c,
					tweet: t
				}))
			});
			t.a = m
		},
		b8qQ: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("MWbm");
			class s extends r.Component {
				scrollToTop() {}
				isAtTop() {
					return !0
				}
				findTopmostVisibleId() {}
				componentDidMount() {
					const {
						onPositionRestored: e
					} = this.props;
					e && e()
				}
				componentDidUpdate(e) {
					const {
						cacheKey: t,
						onPositionRestored: n
					} = this.props;
					t !== e.cacheKey && n && n()
				}
				_getItemRenderer(e) {
					const {
						renderer: t
					} = this.props;
					return r.createElement(r.Fragment, null, t(e))
				}
				render() {
					const {
						items: e,
						identityFunction: t,
						noItemsRenderer: n,
						footer: o,
						header: i
					} = this.props;
					return r.createElement(a.a, null, i, 0 === e.length ? n() : e.map(e => r.cloneElement(this._getItemRenderer(e), {
						key: t(e)
					})), o)
				}
			}
			i()(s, "defaultProps", {
				noItemsRenderer: () => null,
				footer: null,
				header: null
			}), i()(s, "displayName", "SimpleScroller"), t.a = s
		},
		bAIc: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
			}), o.createElement("path", {
				d: "M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		bVhu: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("t62R"),
				r = n("gK2g"),
				a = n("jV+4"),
				s = n("MWbm"),
				l = n("3XMw"),
				c = n.n(l);
			const d = c.a.f4393d0f,
				h = {
					element: "screen_name",
					action: "profile_click"
				};
			t.a = ({
				size: e,
				style: t,
				userIsProtected: n,
				userIsVerified: l,
				userName: u,
				userScreenName: p
			}) => {
				const m = r.a.useAnalytics(),
					b = o.createElement(a.a, {
						isProtected: n,
						isVerified: l,
						name: u,
						onLinkClick: () => {
							m.scribe(h)
						},
						screenName: p,
						withHoverCard: !0,
						withLink: !0,
						withScreenName: !1
					});
				return o.createElement(s.a, {
					accessibilityLabel: d({
						name: u
					}),
					style: t
				}, o.createElement(i.c, {
					color: "gray600",
					size: e
				}, o.createElement(c.a.I18NFormatMessage, {
					$i18n: "dbf19261"
				}, b)))
			}
		},
		bwko: function(e, t) {
			e.exports = function(e, t, n, o) {
				function i(e, t, n, o) {
					return e < 20 ? t & n | ~t & o : e < 40 ? t ^ n ^ o : e < 60 ? t & n | t & o | n & o : t ^ n ^ o
				}

				function r(e) {
					return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
				}

				function a(e, t) {
					var n = (65535 & e) + (65535 & t);
					return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
				}

				function s(e, t) {
					return e << t | e >>> 32 - t
				}

				function l(e, t) {
					e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
					for (var n = [80], o = 1732584193, l = -271733879, c = -1732584194, d = 271733878, h = -1009589776, u = 0; u < e.length; u += 16) {
						for (var p = o, m = l, b = c, g = d, f = h, _ = 0; _ < 80; _++) {
							n[_] = _ < 16 ? e[u + _] : s(n[_ - 3] ^ n[_ - 8] ^ n[_ - 14] ^ n[_ - 16], 1);
							var y = a(a(s(o, 5), i(_, l, c, d)), a(a(h, n[_]), r(_)));
							h = d, d = c, c = s(l, 30), l = o, o = y
						}
						o = a(o, p), l = a(l, m), c = a(c, b), d = a(d, g), h = a(h, f)
					}
					return [o, l, c, d, h]
				}

				function c(e) {
					for (var t = [], n = (1 << o) - 1, i = 0; i < e.length * o; i += o) t[i >> 5] |= (e.charCodeAt(i / 8) & n) << 32 - o - i % 32;
					return t
				}
				return n || (n = "="), o || (o = 8),
					function(e, t) {
						return function(e) {
							for (var t = "", o = 0; o < 4 * e.length; o += 3)
								for (var i = (e[o >> 2] >> 8 * (3 - o % 4) & 255) << 16 | (e[o + 1 >> 2] >> 8 * (3 - (o + 1) % 4) & 255) << 8 | e[o + 2 >> 2] >> 8 * (3 - (o + 2) % 4) & 255, r = 0; r < 4; r++) 8 * o + 6 * r > 32 * e.length ? t += n : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - r) & 63);
							return t
						}(function(e, t) {
							var n = c(e);
							n.length > 16 && (n = l(n, e.length * o));
							for (var i = [16], r = [16], a = 0; a < 16; a++) i[a] = 909522486 ^ n[a], r[a] = 1549556828 ^ n[a];
							var s = l(i.concat(c(t)), 512 + t.length * o);
							return l(r.concat(s), 672)
						}(e, t))
					}(e, t)
			}
		},
		cCdp: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = n("XiMS"),
				l = n("3XMw"),
				c = n.n(l),
				d = n("rHpw"),
				h = n("CK8+"),
				u = n("MWbm");
			const p = c.a.d7e50a66;
			class m extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_handleChange", e => {
						const {
							disabled: t,
							name: n,
							onChange: o
						} = this.props;
						t || o(n, e)
					}), i()(this, "_renderLearnMore", () => {
						const {
							learnMoreLabel: e,
							learnMoreLink: t
						} = this.props;
						if (!t) return null;
						const n = e || p;
						return r.createElement(a.c, {
							link: t
						}, n)
					})
				}
				render() {
					const {
						checked: e,
						disabled: t,
						label: n,
						withBackground: o,
						withBottomBorder: i,
						withPaddingHorizontal: l,
						helpText: c,
						testID: d,
						type: p
					} = this.props, m = !!t;
					return r.createElement(u.a, {
						style: [b.root, o && b.background, i && b.bottomBorder, l && b.paddingHorizontal, m && b.disabled],
						testID: d
					}, r.createElement(u.a, {
						accessibilityRole: "label",
						style: b.labelContainer
					}, r.createElement(a.c, null, n), "checkbox" === p ? r.createElement(s.a, {
						checked: !!e,
						disabled: m,
						onChange: this._handleChange,
						style: b.checkbox
					}) : r.createElement(h.a, {
						onValueChange: this._handleChange,
						value: !!e
					})), c ? r.createElement(a.c, {
						color: "gray600",
						size: "small",
						style: b.helpText
					}, c, " ", this._renderLearnMore()) : null)
				}
			}
			i()(m, "defaultProps", {
				type: "checkbox",
				withBackground: !0,
				withBottomBorder: !0,
				withPaddingHorizontal: !0
			});
			const b = d.a.create(e => ({
				bottomBorder: {
					borderBottomColor: e.colors.borderColor,
					borderBottomStyle: "solid",
					borderBottomWidth: e.borderWidths.small
				},
				paddingHorizontal: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal
				},
				background: {
					backgroundColor: e.colors.cellBackground
				},
				root: {
					paddingVertical: e.spaces.small
				},
				labelContainer: {
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between"
				},
				checkbox: {
					paddingLeft: e.spaces.medium
				},
				helpText: {
					paddingTop: e.spaces.xSmall
				},
				disabled: {
					opacity: .5
				}
			}))
		},
		cTG8: function(e, t, n) {
			"use strict";
			n("IAdD"), n("MvUL"), n("tVqn"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("t62R"),
				h = n("OIC0"),
				u = n("rHpw"),
				p = n("Q0VY"),
				m = (n("aWzz"), n("FiRh"));
			class b extends c.Component {
				constructor(...e) {
					super(...e), l()(this, "_getTextParts", () => {
						const {
							displayTextRange: e,
							entities: t,
							entityBaseUrl: n,
							linkify: o,
							hitHighlights: i,
							quotedTweetPermalink: r,
							text: a,
							withQuoteLinks: s
						} = this.props;
						let l = a,
							c = t;
						const d = t && t.urls && t.urls.length;
						if (r && !d && s && (l = `${a} ${o?r.url:r.display}`, o)) {
							const e = [...a].length + 1;
							c = Object.assign({
								media: []
							}, t, {
								urls: [{
									display_url: r.display,
									expanded_url: r.expanded,
									url: r.url,
									indices: [e, e + r.url.length]
								}]
							})
						}
						const h = [0, l.length],
							u = [(e || h)[0], l.length],
							m = i || [];
						return p.a.tweetTextParts(l, u, c, {
							useHashtagUrl: !0,
							hitHighlights: m,
							baseUrl: n
						})
					})
				}
				render() {
					const e = this.props,
						{
							displayTextRange: t,
							excludeCardUrl: n,
							lang: o,
							linkColor: r,
							linkify: s,
							nativeID: l,
							numberOfLines: u,
							onEntityClick: p,
							quotedTweetId: b,
							style: f,
							transformUrl: _,
							underlineLinks: y,
							withCardLinks: w,
							withMediaLinks: v,
							withQuoteLinks: C
						} = e,
						E = a()(e, ["displayTextRange", "entities", "entityBaseUrl", "excludeCardUrl", "hitHighlights", "lang", "linkColor", "linkify", "nativeID", "numberOfLines", "onEntityClick", "quotedTweetId", "quotedTweetPermalink", "style", "text", "transformUrl", "underlineLinks", "withCardLinks", "withMediaLinks", "withQuoteLinks"]),
						T = this._getTextParts(),
						x = T.some(e => e.entityType === h.a.MEDIA),
						k = x && !v,
						I = b && !C,
						S = T.map((e, o) => {
							const i = o === T.length - 1,
								r = !!e.tweetId && e.tweetId === b;
							if (!v && e.entityType === h.a.MEDIA) return null;
							if (r && x && e.indices && t[1] === e.indices[1]) return null;
							if (i) {
								if (r && I && !k) return null;
								if (!k && !I && !w && n && (n === e.url || n === e.expandedUrl)) return null
							}
							return e
						}).filter(Boolean),
						P = S.map((e, t) => {
							const n = t === S.length - 1;
							if (e.entityType === h.a.TEXT) {
								let o = e;
								const i = `${e.prefix}${e.text}`.trim();
								return !n && 0 !== t || i ? (n && (o = Object.assign({}, e, {
									text: e.text.replace(/(\s+$)/g, "")
								})), c.createElement(m.b, {
									key: t,
									linkColor: r,
									linkify: s,
									onClick: p,
									part: o,
									transformUrl: _,
									underlineLinks: y
								})) : null
							}
							return c.createElement(m.b, {
								key: t,
								linkColor: r,
								linkify: s,
								onClick: p,
								part: e,
								transformUrl: _,
								underlineLinks: y
							})
						}).filter(Boolean);
					return P.length ? c.createElement(d.c, i()({}, E, {
						children: P,
						lang: o,
						nativeID: l,
						numberOfLines: u,
						style: [g.root, f]
					})) : null
				}
			}
			l()(b, "defaultProps", {
				linkColor: "link",
				linkify: m.a.linkify,
				underlineLinks: !1,
				withCardLinks: !1,
				withMediaLinks: !1,
				withQuoteLinks: !1
			}), b.propTypes = {};
			const g = u.a.create(e => ({
				root: {
					position: "relative"
				}
			}));
			t.a = b
		},
		cjAp: function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			t.default = {
				version1: {
					version: 1,
					maxWeightedTweetLength: 140,
					scale: 1,
					defaultWeight: 1,
					transformedURLLength: 23,
					ranges: []
				},
				version2: {
					version: 2,
					maxWeightedTweetLength: 280,
					scale: 100,
					defaultWeight: 200,
					transformedURLLength: 23,
					ranges: [{
						start: 0,
						end: 4351,
						weight: 100
					}, {
						start: 8192,
						end: 8205,
						weight: 100
					}, {
						start: 8208,
						end: 8223,
						weight: 100
					}, {
						start: 8242,
						end: 8247,
						weight: 100
					}]
				},
				version3: {
					version: 3,
					maxWeightedTweetLength: 280,
					scale: 100,
					defaultWeight: 200,
					emojiParsingEnabled: !0,
					transformedURLLength: 23,
					ranges: [{
						start: 0,
						end: 4351,
						weight: 100
					}, {
						start: 8192,
						end: 8205,
						weight: 100
					}, {
						start: 8208,
						end: 8223,
						weight: 100
					}, {
						start: 8242,
						end: 8247,
						weight: 100
					}]
				},
				defaults: {
					version: 3,
					maxWeightedTweetLength: 280,
					scale: 100,
					defaultWeight: 200,
					emojiParsingEnabled: !0,
					transformedURLLength: 23,
					ranges: [{
						start: 0,
						end: 4351,
						weight: 100
					}, {
						start: 8192,
						end: 8205,
						weight: 100
					}, {
						start: 8208,
						end: 8223,
						weight: 100
					}, {
						start: 8242,
						end: 8247,
						weight: 100
					}]
				}
			}, e.exports = t.default
		},
		cjZk: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"
			}), o.createElement("circle", {
				cx: "8.868",
				cy: "8.309",
				r: "1.542"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		ckGq: function(e, t, n) {
			"use strict";
			var o = n("ezF+"),
				i = (n("ERkP"), n("6vad"));
			t.a = o.d(o.f({
				divider: {
					top: !0,
					bottom: !1
				},
				component: i.b,
				createProps: ({
					entry: e
				}) => {
					const {
						content: {
							text: t,
							subtext: n
						}
					} = e;
					return {
						text: t,
						subtext: n,
						withBottomBorder: !1
					}
				}
			}))
		},
		csss: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			n("jQ/y");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = n("htQn"),
				l = n("rHpw"),
				c = n("MWbm"),
				d = (n("IAdD"), n("Lsrn")),
				h = n("shC7"),
				u = n("k/Ka");
			const p = (e = {}) => Object(u.a)("svg", Object.assign({}, e, {
				style: [d.a.root, e.style, h.a.isRTL && d.a.iconRTL],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M17 6H8.43c-.554 0-1 .447-1 1s.446 1 1 1h6.156l-9.293 9.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L16 9.414v6.157c0 .554.447 1 1 1s1-.446 1-1V7c0-.553-.447-1-1-1z"
			})));
			p.metadata = {
				width: 24,
				height: 24
			};
			var m = p,
				b = n("iySH");
			class g extends r.Component {
				render() {
					const {
						description: e,
						disabled: t,
						isActive: n,
						label: o,
						link: i,
						onPress: l,
						renderRightContent: d,
						testID: h,
						thumbnail: u,
						thumbnailSize: p,
						withBottomBorder: g,
						withPaddingHorizontal: _
					} = this.props, y = [f.thumbnailContainer, "medium" === p && f.thumbnailContainerMedium], w = "string" == typeof o ? r.createElement(a.c, null, o) : o, v = "object" == typeof i && i.external && !i.openInSameFrame, C = e ? "string" == typeof e ? r.createElement(a.c, {
						color: "gray600",
						size: "small"
					}, e) : e : null;
					return r.createElement(s.a, {
						accessibilityRole: "tab",
						accessibilityState: {
							selected: n
						},
						disabled: t,
						link: t ? void 0 : i,
						onPress: l,
						style: [f.root, g && f.bottomBorder, _ && f.paddingHorizontal, t && f.disabled],
						testID: h,
						withInteractiveStyling: !!i
					}, r.createElement(c.a, {
						style: f.contentContainer
					}, u ? r.createElement(c.a, {
						style: y
					}, u) : null, r.createElement(c.a, {
						style: f.content
					}, w, C), d ? d() : null, i && !t ? v ? r.createElement(m, {
						style: f.icon
					}) : r.createElement(b.a, {
						style: f.icon
					}) : null))
				}
			}
			i()(g, "defaultProps", {
				disabled: !1,
				isActive: !1,
				withBottomBorder: !0,
				withPaddingHorizontal: !0
			});
			const f = l.a.create(e => ({
				root: {
					justifyContent: "space-between",
					paddingVertical: e.componentDimensions.gutterVertical,
					minHeight: `calc(${l.a.theme.lineHeight} * ${l.a.theme.fontSizes.large} + 2 * ${e.componentDimensions.gutterVertical})`
				},
				disabled: {
					opacity: .5
				},
				contentContainer: {
					alignItems: "center",
					flexDirection: "row",
					flexGrow: 1
				},
				content: {
					flexGrow: 1,
					flexShrink: 1
				},
				bottomBorder: {
					borderBottomWidth: 1,
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor
				},
				icon: {
					color: e.colors.gray600,
					paddingLeft: e.spaces.xSmall,
					flexShrink: 0
				},
				thumbnailContainer: {
					alignItems: "center",
					justifyContent: "center",
					height: e.spaces.xxLarge,
					width: e.spaces.xxLarge,
					marginRight: e.spaces.small
				},
				thumbnailContainerMedium: {
					height: e.spaces.large,
					width: e.spaces.large
				},
				paddingHorizontal: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal
				}
			}))
		},
		d4kb: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("3XMw"),
				i = n.n(o),
				r = n("7oQY");
			const a = (e, t, n) => {
				const o = "channel_follow" === e.getStringValue("home_timeline_spheres_copy_variant") ? i.a.bddacab4 : i.a.a599bbf9;
				return {
					Icon: r.a,
					text: o,
					link: {
						pathname: "/i/lists/add_member",
						state: {
							userId: t.id_str
						}
					},
					onClick: n
				}
			}
		},
		dC06: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("ERkP");
			const o = Object.freeze({
				Pin: "Pin",
				Retweet: "Retweet",
				Like: "Like",
				Follow: "Follow",
				Moment: "Moment",
				NewTweets: "NewTweets",
				Reply: "Reply",
				Conversation: "Conversation",
				TextOnly: "TextOnly",
				Facepile: "Facepile",
				Feedback: "Feedback",
				Topic: "Topic",
				List: "List",
				Location: "Location"
			})
		},
		dFWS: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		dPJJ: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return c
			}));
			n("kYxP");
			var o = n("6/RC");
			const i = new Set,
				r = new Set;
			let a = !1;

			function s() {
				if (o.canUseDOM && !a) {
					const e = ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"];
					["webkitfullscreenchange", "mozfullscreenchange", "fullscreenchange", "msfullscreenchange"].forEach(t => {
						document.addEventListener(t, () => {
							const t = e.map(e => document[e]).filter(Boolean)[0];
							t ? i.forEach(e => e(t)) : r.forEach(e => e())
						})
					})
				}
				a = !0
			}
			const l = e => (a || s(), i.add(e), () => i.delete(e)),
				c = e => (a || s(), r.add(e), () => r.delete(e))
		},
		dwig: function(e, t, n) {
			"use strict";
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("Es6L"),
				c = n("rHpw"),
				d = n("MWbm");
			const h = e => {
				let {
					children: t,
					component: n,
					fab: o,
					shouldRenderFab: r,
					style: c
				} = e, d = a()(e, ["children", "component", "fab", "shouldRenderFab", "style"]);
				const h = n,
					p = r && !Object(l.a)();
				return s.createElement(h, i()({}, d, {
					style: [p && u.root, c]
				}), t, p ? o : null)
			};
			h.defaultProps = {
				component: d.a,
				shouldRenderFab: !0
			};
			const u = c.a.create(e => ({
				root: {
					paddingBottom: `calc(${e.spaces.jumbo} + ${e.spaces.medium} * 2)`
				}
			}));
			t.a = h
		},
		"dzZ/": function(e, t, n) {
			"use strict";
			var o = n("3XMw"),
				i = n.n(o);
			const r = [{
				text: i.a.b721eb37,
				visibleLoggedIn: !0,
				link: "https://about.twitter.com"
			}, {
				text: i.a.f66d24be,
				link: "https://help.twitter.com"
			}, {
				text: i.a.hdabc3fb,
				visibleLoggedIn: !0,
				legal: !0,
				link: "https://twitter.com/tos"
			}, {
				text: i.a.bc6efc72,
				visibleLoggedIn: !0,
				legal: !0,
				link: "https://twitter.com/privacy"
			}, {
				text: i.a.h3161191,
				visibleLoggedIn: !0,
				legal: !0,
				link: "https://support.twitter.com/articles/20170514"
			}, {
				country: ["de"],
				text: i.a.aeede019,
				visibleLoggedIn: !0,
				legal: !0,
				link: "https://legal.twitter.com/imprint"
			}, {
				text: i.a.a7de64dd,
				visibleLoggedIn: !0,
				legal: !0,
				link: "https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html"
			}, {
				text: i.a.jb0a4c35,
				link: "https://blog.twitter.com"
			}, {
				text: i.a.cf3709d9,
				visibleLoggedIn: !0,
				link: "https://status.twitterstat.us"
			}, {
				text: i.a.ce6d095a,
				link: "https://careers.twitter.com"
			}, {
				text: i.a.e0adec81,
				link: "https://about.twitter.com/press/brand-assets"
			}, {
				text: i.a.a4cf866d,
				link: "https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise"
			}, {
				text: i.a.df1b7550,
				link: "https://marketing.twitter.com"
			}, {
				text: i.a.b97cd51b,
				visibleLoggedIn: !0,
				link: "https://business.twitter.com"
			}, {
				text: i.a.c6f58084,
				visibleLoggedIn: !0,
				link: "https://developer.twitter.com"
			}, {
				text: i.a.d83f18d2,
				link: "https://twitter.com/i/directory/profiles"
			}, {
				text: i.a.bb081ea1,
				internal: !0,
				link: "/settings",
				excludeOnSettingsPage: !0
			}];
			t.a = r
		},
		e5HP: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = n("3XMw"),
				l = n.n(s),
				c = (n("IAdD"), n("Lsrn")),
				d = n("k/Ka");
			const h = (e = {}) => Object(d.a)("svg", Object.assign({}, e, {
				style: [c.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z"
			})));
			h.metadata = {
				width: 24,
				height: 24
			};
			var u = h,
				p = n("rHpw"),
				m = n("MWbm");
			n("aWzz");
			const b = l.a.f1a1b790,
				g = l.a.if2bf8b3,
				f = l.a.f3624b5c,
				_ = l.a.b4b3b113,
				y = l.a.be22205f,
				w = l.a.hcbbe447;
			class v extends r.Component {
				render() {
					const {
						color: e,
						nativeID: t,
						style: n
					} = this.props;
					return r.createElement(m.a, {
						style: [C.root, n]
					}, r.createElement(u, {
						style: [C.icon, e && C[e]]
					}), r.createElement(a.c, {
						color: e,
						nativeID: t,
						size: "small"
					}, this._getPromotedLabel()))
				}
				_getPromotedLabel() {
					const {
						contentAuthorId: e,
						label: t,
						promotedContent: n
					} = this.props, {
						advertiser: o,
						advertiser_name: i,
						adMetadataContainer: r,
						disclosure_type: a
					} = n, s = e && o && e === o.id_str, l = "string" == typeof a && "political" === a.toLowerCase(), c = "string" == typeof a && "issue" === a.toLowerCase(), d = !(!r || "POLITICAL" !== r.disclaimerType) || l, h = !(!r || "ISSUE" !== r.disclaimerType) || c, {
						removePromotedAttributionForPreroll: u
					} = r || {};
					let p;
					return p = t || (!i || s || u ? d ? f : h ? y : g : d ? _({
						fullName: i
					}) : h ? w({
						fullName: i
					}) : b({
						fullName: i
					})), p
				}
			}
			i()(v, "defaultProps", {
				color: "gray600"
			}), v.propTypes = {};
			const C = p.a.create(e => ({
				root: {
					alignItems: "center",
					flexDirection: "row"
				},
				icon: {
					color: e.colors.gray600,
					height: "1em",
					marginRight: e.spaces.xxSmall,
					flexShrink: 0
				},
				gray600: {
					color: e.colors.gray600
				},
				white: {
					color: e.colors.white
				}
			}))
		},
		eNqU: function(e, t, n) {
			"use strict";
			var o = n("IGGJ");
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function(e, t) {
				(0, i.default)(e, t, !0)
			};
			var i = o(n("N9Vr"));
			e.exports = t.default
		},
		eXtP: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			n("IAdD"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("8UdT");
			const s = {};
			var l = ({
				handlerRegistry: e,
				entries: t,
				dismissedEntries: n,
				pinnedEntry: o
			}) => {
				const i = new h,
					r = t => {
						const o = e.getHandler(t),
							s = o && (o.splice || o.render);
						if (o && s) {
							let e = o.divider || c;
							"function" == typeof e && (e = e(t)), e.top && i.addDividerFor(t, d.TOP);
							const s = n[t.entryId];
							s && s.length ? i.addEntry((({
								entry: e,
								feedbackKeys: t
							}) => ({
								type: a.a.Tombstone,
								entryId: e.entryId,
								content: {
									dismissedEntry: e,
									feedbackKeys: t
								},
								conversationPosition: e.conversationPosition,
								conversationTreeMetadata: e.conversationTreeMetadata,
								sortIndex: e.sortIndex || "-1",
								itemMetadata: {}
							}))({
								entry: t,
								feedbackKeys: s
							})) : o.splice ? o.splice(t).forEach(r) : o.isEmpty ? i.addEmptyEntry(t) : i.addEntry(t), e.bottom && i.addDividerFor(t, d.BOTTOM)
						}
					};
				return o && (r(o), i.addDividerFor(o, d.BOTTOM)), t.forEach(r), i.list
			};
			const c = {
					top: !1,
					bottom: !1
				},
				d = {
					TOP: "top",
					BOTTOM: "bottom"
				};
			class h {
				constructor() {
					this.list = [], this._pendingDividerEntryId = null, this._pendingDividerOrientation = null
				}
				addEntry(e) {
					this._flushDivider(), this.list.push(e)
				}
				addEmptyEntry(e) {
					this.list.push(e)
				}
				addDividerFor(e, t) {
					this.list.length > 0 && !this._pendingDividerEntryId && (this._pendingDividerEntryId = e.entryId, this._pendingDividerOrientation = t)
				}
				_flushDivider() {
					this._pendingDividerEntryId && this._pendingDividerOrientation && (this.list.push(this._newDivider(this._pendingDividerEntryId, this._pendingDividerOrientation)), this._pendingDividerEntryId = null, this._pendingDividerOrientation = null)
				}
				_newDivider(e, t) {
					return (e => ({
						itemMetadata: {},
						sortIndex: "-1",
						type: a.a.Divider,
						entryId: e,
						content: s
					}))(`$divider-${t}-${e}`)
				}
			}
			var u = n("C1yv"),
				p = n("oQhu");
			const m = Object(p.a)((e, t) => new u.a(Object.assign({}, e, t))),
				b = Object(p.a)((e, t, n, o, i) => (({
					entries: e,
					preprocessEntryList: t,
					dismissedEntries: n,
					pinnedEntry: o,
					handlerRegistry: i
				}) => l({
					entries: t(e),
					handlerRegistry: i,
					dismissedEntries: n,
					pinnedEntry: o
				}))({
					handlerRegistry: e,
					entries: n,
					dismissedEntries: t,
					pinnedEntry: o,
					preprocessEntryList: i
				}));
			class g extends r.Component {
				render() {
					const {
						children: e,
						dismissedEntries: t,
						entries: n,
						pinnedEntry: o,
						preprocessEntryList: i,
						entryConfiguration: r,
						additionalConfiguration: a
					} = this.props, s = m(r, a);
					return e(s, b(s, t, n, o, i))
				}
			}
			i()(g, "defaultProps", {
				preprocessEntryList: e => e
			})
		},
		eaaO: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o.b
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return _
			}));
			var o = n("DtVZ"),
				i = n("+/5o"),
				r = n("ERkP"),
				a = n("Psss"),
				s = n("3XMw"),
				l = n.n(s),
				c = n("MWbm"),
				d = n("j7Bv"),
				h = n("t62R"),
				u = n("rHpw");
			const p = l.a.g1c74eb3;
			var m = e => {
				const {
					nativeID: t,
					value: n
				} = e, o = a.a[n];
				return r.createElement(c.a, {
					style: b.root
				}, r.createElement(d.a, {
					Icon: o,
					color: "primary",
					size: "medium",
					style: b.highlightedEducationIcon
				}), r.createElement(h.c, {
					color: "gray600",
					nativeID: t && i.d
				}, p))
			};
			const b = u.a.create(e => ({
				root: {
					flexDirection: "row",
					alignItems: "center",
					marginTop: e.spaces.xxSmall
				},
				highlightedEducationIcon: {
					marginTop: e.spaces.micro,
					marginRight: e.spaces.xxSmall
				}
			}));
			var g = n("efqG"),
				f = n("Irs7");
			var _ = Object(f.a)(e => {
				const {
					analytics: t,
					canReply: n,
					children: o,
					screenName: i,
					scribeElement: s,
					tweetId: l,
					value: d
				} = e, h = r.useCallback(e => {
					e.stopPropagation(), t.scribe({
						element: s,
						action: "click"
					})
				}, [t, s]), u = r.useCallback((e, o) => r.createElement(a.b, {
					analytics: t,
					canReply: "popover" === o && n,
					isModal: "sheet" === o,
					onDismiss: e,
					screenName: i,
					tweetId: l,
					value: d
				}), [t, n, i, l, d]);
				return r.createElement(c.a, {
					onClick: h,
					onKeyPress: h,
					style: e.style
				}, r.createElement(g.a, {
					renderContent: u
				}, o))
			})
		},
		eb3s: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("t62R"),
				s = n("/yvb"),
				l = n("w9LO"),
				c = n("3XMw"),
				d = n.n(c),
				h = n("sgih"),
				u = n("rHpw"),
				p = n("MWbm");
			const m = d.a.e23b20af,
				b = d.a.bb5d8cd1;
			class g extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_handleConfirmPress", e => t => {
						const {
							withForwardFocusOnConfirm: n,
							onConfirm: o
						} = this.props;
						n && e(), o(t)
					}), i()(this, "_handleButtonRefUpdate", e => {
						e && !this._wasFocused && (e.focus(), this._wasFocused = !0)
					}), i()(this, "_renderLearnMoreLink", () => {
						const {
							learnMoreLink: e,
							learnMoreText: t
						} = this.props;
						return e && t ? r.createElement(a.c, {
							link: e
						}, t) : null
					})
				}
				render() {
					const {
						allowBackNavigation: e,
						cancelButtonLabel: t,
						cancelButtonLink: n,
						confirmButtonLabel: o,
						enableMaskForDismiss: i,
						headline: c,
						Icon: d,
						iconStyle: u,
						onCancel: m,
						confirmButtonLink: b,
						onMaskClick: _,
						confirmButtonType: y,
						withCancelButton: w,
						text: v
					} = this.props;
					return r.createElement(h.a, {
						accessibilityRole: "alertdialog",
						allowBackNavigation: e,
						enableMaskForDismiss: i,
						onMaskClick: _ || m,
						style: f.container,
						type: "center",
						withMask: !0
					}, d ? r.createElement(d, {
						style: [f.icon, u]
					}) : null, c && r.createElement(a.c, {
						align: "center",
						color: "normal",
						size: "large",
						style: f.headlineText,
						weight: "bold"
					}, c), r.createElement(a.c, {
						align: "center",
						color: "gray600",
						style: f.labelText
					}, v, " ", this._renderLearnMoreLink()), r.createElement(p.a, {
						style: f.buttons
					}, w && r.createElement(s.a, {
						link: n,
						onPress: m,
						style: f.cancelButton,
						testID: g.testIDs.cancel,
						type: "neutral"
					}, t), r.createElement(l.a.Context.Consumer, null, ({
						disableFocusingPreviousActiveElement: e
					}) => r.createElement(s.a, {
						link: b,
						onPress: this._handleConfirmPress(e),
						ref: this._handleButtonRefUpdate,
						style: f.confirmButton,
						testID: g.testIDs.confirm,
						type: y
					}, o))))
				}
			}
			i()(g, "defaultProps", {
				cancelButtonLabel: m,
				confirmButtonLabel: b,
				confirmButtonType: "primary",
				enableMaskForDismiss: !0,
				withCancelButton: !0,
				withForwardFocusOnConfirm: !1
			}), i()(g, "testIDs", {
				confirm: "confirmationSheetConfirm",
				cancel: "confirmationSheetCancel"
			});
			const f = u.a.create(e => ({
				container: {
					alignItems: "center",
					paddingVertical: e.spaces.large,
					paddingHorizontal: e.spaces.medium
				},
				icon: {
					marginBottom: e.spaces.small,
					fontSize: e.spaces.large
				},
				headlineText: {
					marginBottom: e.spaces.xSmall
				},
				labelText: {
					marginBottom: e.spaces.medium,
					width: "100%"
				},
				buttons: {
					width: "100%",
					flexDirection: "row"
				},
				confirmButton: {
					flexGrow: 1
				},
				cancelButton: {
					marginRight: e.spaces.small,
					flexGrow: 1
				}
			}));
			t.a = g
		},
		es0u: function(e, t, n) {
			"use strict";
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("v6aA"),
				s = (n("JtPf"), n("zb92")),
				l = Object(s.a)({
					loader: () => Promise.all([n.e(0), n.e(11), n.e(138)]).then(n.bind(null, "A+RP"))
				}),
				c = n("FQwk"),
				d = n("2dXj"),
				h = n("Es6L"),
				u = n("XTNN"),
				p = Object(s.a)({
					loader: () => Promise.all([n.e(0), n.e(146)]).then(n.bind(null, "sojc"))
				}),
				m = n("MWbm"),
				b = Object(s.a)({
					loader: () => Promise.all([n.e(0), n.e(150)]).then(n.bind(null, "LHcr"))
				}),
				g = n("cHvH"),
				f = n("SyIi"),
				_ = n("rHpw");
			class y extends r.Component {
				render() {
					const {
						profileUserId: e
					} = this.props, t = [w.module], n = [t, w.exploreWtfModule];
					return r.createElement(m.a, {
						style: w.root
					}, this._renderSearchBox(), this._renderSignupOrLoginModule(t), this._renderAdditionalModules(t), e ? r.createElement(r.Fragment, null, this._renderWhoToFollow(n), this._renderExploreSidebar(n)) : r.createElement(r.Fragment, null, this._renderExploreSidebar(n), this._renderWhoToFollow(n)), this._renderFooter())
				}
				_renderSearchBox() {
					return Object(h.a)() && this.props.withSearchBox ? r.createElement(r.Fragment, null, r.createElement(g.a, null, ({
						windowWidth: e
					}) => r.createElement(m.a, {
						style: [w.searchContainer, u.a.getSidebarWidthStyle(e)]
					}, r.createElement(d.b, {
						shouldHandleSearchShortcut: !0
					}))), r.createElement(m.a, {
						style: w.searchPlaceholder
					})) : null
				}
				_renderSignupOrLoginModule(e) {
					return this.context.loggedInUserId ? null : r.createElement(f.a, {
						hideOnError: !0
					}, r.createElement(m.a, {
						style: e
					}, r.createElement(p, null)))
				}
				_renderAdditionalModules(e) {
					const {
						children: t
					} = this.props;
					return r.Children.map(t, t => t ? r.createElement(f.a, {
						hideOnError: !0
					}, r.createElement(m.a, {
						style: e
					}, t)) : null)
				}
				_renderExploreSidebar(e) {
					const {
						profileUserId: t,
						withTrends: n
					} = this.props;
					return n ? r.createElement(f.a, {
						hideOnError: !0
					}, r.createElement(m.a, {
						style: e
					}, r.createElement(l, {
						profileUserId: t
					}))) : null
				}
				_renderWhoToFollow(e) {
					const {
						profileUserId: t,
						withWhoToFollow: n
					} = this.props, o = t || this.context.loggedInUserId;
					return n && o ? r.createElement(f.a, {
						hideOnError: !0
					}, r.createElement(b, {
						style: e,
						userId: o,
						withProfileHeaderText: !!t
					})) : null
				}
				_renderFooter() {
					return r.createElement(m.a, {
						style: [w.module, w.transparentModule]
					}, r.createElement(c.a, {
						textColor: "gray600",
						withOverflow: !0
					}))
				}
			}
			i()(y, "contextType", a.a), i()(y, "defaultProps", {
				children: null,
				withSearchBox: !0,
				withTrends: !0,
				withWhoToFollow: !0
			});
			const w = _.a.create(e => ({
				root: {
					paddingBottom: e.spaces.jumbo,
					paddingTop: e.spaces.xSmall
				},
				module: {
					backgroundColor: e.colors.cellBackground,
					borderWidth: e.borderWidths.small,
					borderColor: e.colors.borderColor,
					borderStyle: "solid",
					borderRadius: e.borderRadii.xLarge,
					marginBottom: e.spaces.small,
					overflow: "hidden"
				},
				transparentModule: {
					backgroundColor: "transparent",
					borderWidth: 0
				},
				searchContainer: {
					alignItems: "center",
					backfaceVisibility: "hidden",
					backgroundColor: e.colors.cellBackground,
					flexDirection: "row",
					height: e.componentDimensions.appBarHeight,
					marginBottom: e.spaces.xSmall,
					minHeight: e.spaces.large,
					position: "fixed",
					top: 0,
					zIndex: e.componentZIndices.appBarZIndex
				},
				searchPlaceholder: {
					height: e.componentDimensions.appBarHeight
				},
				exploreWtfModule: {
					backgroundColor: e.colors.gray0,
					borderColor: e.colors.gray0
				}
			}));
			t.a = y
		},
		"ezF+": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return ve
			})), n.d(t, "d", (function() {
				return Ce
			})), n.d(t, "f", (function() {
				return Se
			})), n.d(t, "c", (function() {
				return Pe
			})), n.d(t, "e", (function() {
				return Re
			})), n.d(t, "a", (function() {
				return Oe
			}));
			n("IAdD");
			var o = n("LdEA"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("ZNx0"),
				s = n("htQn");
			const l = n("rHpw").a.create(e => ({
				item: {
					display: "block"
				},
				bottomBorder: {
					borderBottomColor: e.colors.borderColor,
					borderBottomWidth: 1
				}
			}));
			var c = (e, {
					isClickable: t,
					shouldDisplayBorder: n,
					isFocusable: o
				}) => (i, c) => {
					const d = e(i, c);
					if (!d) return null;
					const {
						entryId: h,
						moduleClientEventView: u
					} = i, p = o(i) ? e => c.entryRef(h, e) : null, m = r.createElement(s.a, {
						ref: p,
						style: [l.item, n(i) && l.bottomBorder],
						withInteractiveStyling: t(i)
					}, d);
					return u ? r.createElement(a.a, {
						token: u.entityToken,
						viewType: u.viewType
					}, m) : m
				},
				d = (n("kYxP"), n("KEM+")),
				h = n.n(d),
				u = n("E2gn"),
				p = n("1YZw"),
				m = n("9OUN"),
				b = n("Qyxo"),
				g = n("/MKj"),
				f = n("0KEI"),
				_ = n("6xIQ"),
				y = n("hqKg"),
				w = n("kHBp"),
				v = n("SrIh"),
				C = n("Fmkq"),
				E = n("Zejx"),
				T = n("G6rE");
			const x = () => ({}),
				k = () => ({}),
				I = [],
				S = (e, t) => {
					var n, o;
					const {
						config: i,
						entry: r,
						module: a
					} = t, s = (null == (n = (i.feedbackEntrySelector ? i.feedbackEntrySelector(r) : r).itemMetadata) || null == (o = n.feedbackInfo) ? void 0 : o.feedbackKeys) || I, l = a.selectFeedbackActions(e, t);
					return Object(b.a)(s, e => l[e] ? e : (Object(v.a)("Feedback key has no backing action " + e), null))
				},
				P = (e, t) => {
					const n = t.module.selectFeedbackActions(e, t);
					return S(e, t).map(e => n[e])
				},
				R = (e, t) => {
					let n;
					return P(e, t).forEach(t => {
						var o;
						(null == (o = t.richBehavior) ? void 0 : o.toggleMuteList) && (n = w.a.select(e, t.richBehavior.toggleMuteList.listId))
					}), n
				},
				O = (e, t) => {
					let n;
					return P(e, t).forEach(t => {
						var o, i;
						(null == (o = t.richBehavior) ? void 0 : o.toggleFollowTopic) ? n = E.a.select(e, t.richBehavior.toggleFollowTopic.topicId): (null == (i = t.richBehavior) ? void 0 : i.markNotInterestedTopic) && (n = E.a.select(e, t.richBehavior.markNotInterestedTopic.topicId))
					}), n
				},
				A = (e, t) => {
					const n = ((e, t) => {
						const n = P(e, t),
							o = [];
						return n.forEach(e => {
							var t;
							(null == (t = e.richBehavior) ? void 0 : t.blockUser) && o.push(e.richBehavior.blockUser.userId)
						}), o
					})(e, t);
					return T.e.selectMany(e, n)
				},
				M = (e, t) => (t.config.bindActions || k)(t),
				L = (e, t) => ({
					applyFeedbackAction: t.module.applyFeedbackAction,
					undoFeedbackAction: t.module.undoFeedbackAction
				}),
				D = (e, t) => e;
			var j = Object(g.b)((e, t) => {
					const n = (t.config.selectData || x)(t),
						o = Object(y.createStructuredSelector)(n),
						i = Object(_.a)(A, e => e),
						r = Object(_.a)(S, P, (e, t) => t.map((t, n) => Object.assign({}, t, {
							feedbackKey: e[n]
						})));
					return Object(y.createStructuredSelector)({
						data: o,
						richFeedbackList: R,
						richFeedbackTopic: O,
						richFeedbackUsers: i,
						feedbackActions: r
					})
				}, () => {
					const e = Object(_.a)(M, D, L, (e, t, n) => ({
						actions: Object(m.b)(e, t),
						createLocalApiErrorHandler: Object(f.d)("FEEDBACK_ACTIONS_ENTRY_CONTAINER"),
						feedbackMethods: Object(m.b)(n, t),
						addToast: Object(m.b)(p.b, t),
						block: Object(m.b)(T.e.block, t),
						unblock: Object(m.b)(T.e.unblock, t),
						scribe: Object(m.b)(C.richScribeAction, t),
						setTopicNotInterested: Object(m.b)(E.a.notInterested, t),
						toggleListMuting: Object(m.b)(w.a.toggleMute, t),
						topicFollow: Object(m.b)(E.a.follow, t),
						topicUnfollow: Object(m.b)(E.a.unfollow, t),
						undoTopicNotInterested: Object(m.b)(E.a.undoNotInterested, t)
					}));
					return (t, n) => e(t, n)
				}),
				N = n("3wZR"),
				F = n("EbOo"),
				B = n("RgK2"),
				U = n.n(B),
				H = n("8UdT"),
				z = n("3XMw"),
				W = n.n(z),
				V = n("vCw9"),
				K = n("XcJG"),
				G = n("u0B7"),
				q = n("GygS"),
				X = n("0rY8"),
				Y = n("+1/s"),
				Q = n("euJ+");
			const J = W.a.e43138c5,
				$ = W.a.be65f2e6,
				Z = W.a.a649d336,
				ee = W.a.e2f2b658,
				te = W.a.b51f7ede,
				ne = W.a.gac366b2,
				oe = W.a.gf5e9ea6,
				ie = W.a.gf5e9ea6,
				re = (e, t, n) => {
					const o = n || {},
						r = i()(o, ["details", "entityToken"]),
						{
							element: a,
							component: s,
							action: l
						} = r;
					return {
						page: t.page,
						section: t.section,
						component: s || t.component,
						element: a || t.element || e,
						action: l || t.action || "click"
					}
				};
			var ae = ({
					addToast: e,
					block: t,
					createLocalApiErrorHandler: n,
					feedbackActions: o,
					feedbackEntry: i,
					feedbackMethods: r,
					history: a,
					richList: s,
					richTopic: l,
					richUsers: c,
					scribe: d,
					scribeData: h,
					scribeNamespace: u,
					setTopicNotInterested: p,
					toggleListMuting: m,
					topicFollow: b,
					topicUnfollow: g,
					unblock: f,
					undoTopicNotInterested: _
				}) => o.map(o => {
					const {
						clientEventInfo: y,
						excludeFromActionMenu: w,
						feedbackKey: v,
						feedbackType: C,
						prompt: E,
						subprompt: T
					} = o, x = (({
						addToast: e,
						block: t,
						createLocalApiErrorHandler: n,
						feedbackAction: o,
						feedbackEntry: i,
						feedbackKey: r,
						history: a,
						richList: s,
						richTopic: l,
						richUsers: c,
						scribe: d,
						scribeData: h,
						scribeNamespace: u,
						setTopicNotInterested: p,
						toggleListMuting: m,
						topicFollow: b,
						topicUnfollow: g,
						unblock: f,
						undoTopicNotInterested: _
					}) => {
						var y;
						if (!o.richBehavior) return U.a;
						if (null == (y = o.richBehavior) ? void 0 : y.blockUser) {
							var w, v;
							const e = null == (w = o.richBehavior) || null == (v = w.blockUser) ? void 0 : v.userId,
								i = c.find(t => t.id_str === e);
							if (!i || !e) return U.a;
							const a = {
									user: i,
									source: q.f.RICH_FEEDBACK,
									blockAction: () => {
										t(e).catch(n(F.a)), d(Object.assign({}, u, {
											action: "block"
										}), h)
									},
									blockSubtext: () => o.subprompt,
									unblockAction: () => {
										f(e).catch(n(G.a)), d(Object.assign({}, u, {
											action: "unblock"
										}), h)
									}
								},
								s = Object(q.d)(a);
							return Object.assign({}, s, {
								feedbackKey: r,
								willScribe: !0
							})
						}
						if (o.richBehavior.reportList) {
							const {
								listId: e
							} = o.richBehavior.reportList, t = {
								pathname: "/i/report/list/" + e,
								state: {
									clientReferer: window.location.pathname,
									scribeNamespace: u
								}
							};
							return {
								feedbackKey: r,
								onClick: () => a.push(t)
							}
						}
						if (o.richBehavior.toggleMuteList && s) {
							const t = Object(V.a)({
								hideSubtext: !0,
								list: s,
								addToast: e,
								toggleMute: m,
								scribe: e => d(Object.assign({}, u, e), h)
							});
							return Object.assign({}, t, {
								feedbackKey: r,
								skipDefaultAction: !0,
								willScribe: !0
							})
						}
						if (o.richBehavior.toggleFollowTopic && l) {
							const {
								following: t,
								name: n,
								id: o
							} = l;
							return {
								text: t ? $({
									name: n
								}) : J({
									name: n
								}),
								Icon: t ? X.a : Y.a,
								onClick: () => {
									(t ? g(o) : b(o)).then(() => {
										e({
											text: t ? te({
												name: n
											}) : ne({
												name: n
											})
										}), d(Object.assign({}, u, {
											element: t ? "unfollow_topic" : "follow_topic",
											action: "click"
										}), h)
									})
								},
								feedbackKey: r,
								skipDefaultAction: !0,
								willScribe: !0
							}
						}
						if (o.richBehavior.markNotInterestedTopic && l) {
							var C;
							const {
								name: t,
								id: n
							} = l, a = i.type === H.b.Topic && (null == (C = i.content) ? void 0 : C.topicDisplayType) === K.a.Pill, s = Object(Q.f)(o), c = () => {
								_(n), a && d(Object.assign({}, u, {
									element: s,
									action: Object(Q.g)(o)
								}), h)
							};
							return {
								text: Z({
									name: t
								}),
								Icon: X.a,
								onClick: () => {
									p(n).then(() => {
										d(Object.assign({}, u, {
											element: s,
											action: "not_interested"
										}), h), a && e({
											text: ee,
											action: {
												label: oe,
												onAction: c
											}
										})
									})
								},
								onUndo: c,
								feedbackKey: r,
								skipDefaultAction: a,
								willScribe: !0
							}
						}
						return U.a
					})({
						addToast: e,
						block: t,
						createLocalApiErrorHandler: n,
						feedbackAction: o,
						feedbackEntry: i,
						feedbackKey: v,
						history: a,
						richList: s,
						richTopic: l,
						richUsers: c,
						scribe: d,
						scribeData: h,
						scribeNamespace: u,
						setTopicNotInterested: p,
						toggleListMuting: m,
						topicFollow: b,
						topicUnfollow: g,
						unblock: f,
						undoTopicNotInterested: _
					});
					return Object.assign({
						text: E || "",
						subText: T,
						Icon: Object(N.a)(o),
						excludeFromActionMenu: !!w
					}, x, {
						onClick: () => {
							const t = C !== Q.e.SeeMore,
								n = {
									entry: i,
									feedbackKeys: [v],
									isDismissibleFeedback: t
								},
								a = Object(Q.f)(o);
							if ((a || y) && !x.willScribe) {
								const e = re(a, u, y);
								d(e, h)
							}
							C === Q.e.RichBehavior && (x.onClick && x.onClick(), x.skipDefaultAction && (n.isDismissibleFeedback = !1)), r.applyFeedbackAction(n).then(() => {
								if (!t) {
									let t;
									o.hasUndoAction && (t = {
										label: ie,
										onAction: () => {
											r.undoFeedbackAction(n)
										}
									}), e({
										action: t,
										text: o.confirmation || ""
									})
								}
							})
						}
					})
				}),
				se = n("lHOd"),
				le = n("pQ3Z"),
				ce = n.n(le),
				de = n("7JQg"),
				he = n("oQhu"),
				ue = n("mN6z"),
				pe = n("fs1G");
			const me = {},
				be = Object.create(null);
			class ge extends r.Component {
				constructor(...e) {
					super(...e), h()(this, "_getSynthesizedProps", Object(he.a)((e, t) => e(t))), h()(this, "_getSynthesizedFeedbackItems", () => {
						const e = this.context,
							{
								addToast: t,
								block: n,
								config: o,
								entry: i,
								feedbackMethods: r,
								feedbackActions: a,
								richFeedbackUsers: s,
								richFeedbackList: l,
								richFeedbackTopic: c,
								scribe: d,
								scribeNamespace: h,
								createLocalApiErrorHandler: u,
								setTopicNotInterested: p,
								toggleListMuting: m,
								topicFollow: b,
								topicUnfollow: g,
								unblock: f,
								undoTopicNotInterested: _
							} = this.props,
							y = o.feedbackEntrySelector ? o.feedbackEntrySelector(i) : i,
							w = this._getEntryScribeData(i, o.getScribeDataItem),
							v = this._getEntryScribeNamespace(h, i, o.defaultScribeNamespace);
						return this._getMemoizedFeedbackItems(t, n, u, a, y, r, e, l, c, s, d, w, v, p, m, b, g, f, _)
					}), h()(this, "_getMemoizedFeedbackItems", Object(he.a)((e, t, n, o, i, r, a, s, l, c, d, h, u, p, m, b, g, f, _) => ae({
						addToast: e,
						block: t,
						createLocalApiErrorHandler: n,
						feedbackActions: o,
						feedbackEntry: i,
						feedbackMethods: r,
						history: a,
						richList: s,
						richTopic: l,
						richUsers: c,
						scribe: d,
						scribeData: h,
						scribeNamespace: u,
						setTopicNotInterested: p,
						toggleListMuting: m,
						topicFollow: b,
						topicUnfollow: g,
						unblock: f,
						undoTopicNotInterested: _
					}))), h()(this, "_getHandlerAPI", () => {
						const {
							actions: e,
							config: t,
							data: n,
							entry: o,
							module: i,
							renderEntry: r,
							scribeNamespace: a
						} = this.props, s = this._getEntryScribeData(o, t.getScribeDataItem), l = this._getEntryScribeNamespace(a, o, t.defaultScribeNamespace), c = this._getSynthesizedFeedbackItems();
						return this._getMemoizedHandlerAPI(o, n, e, s, l, i, r, c)
					}), h()(this, "_getMemoizedHandlerAPI", Object(he.a)((e, t, n, o, i, r, a, s) => ({
						entry: e,
						data: t,
						actions: n,
						scribeData: o,
						scribeNamespace: i,
						module: r,
						renderEntry: a,
						feedbackItems: s
					}))), h()(this, "_getEntryScribeData", Object(he.a)((e, t) => {
						const {
							scribeData: n
						} = this.props;
						if (t) {
							const o = t(e);
							return o ? Object.assign({}, n, {
								items: [...(null == n ? void 0 : n.items) ? n.items : [], o]
							}) : n
						}
					})), h()(this, "_getEntryScribeNamespace", Object(he.a)((e, t, n) => {
						const o = fe(t),
							i = o && Object.assign({}, o) || n || me;
						return Object.assign({}, e, i)
					}))
				}
				shouldComponentUpdate(e) {
					const t = this.props;
					return e.data !== this.props.data || e.actions !== this.props.actions || e.feedbackActions !== this.props.feedbackActions || e.richFeedbackUsers !== this.props.richFeedbackUsers || e.richFeedbackList !== this.props.richFeedbackList || e.richFeedbackTopic !== this.props.richFeedbackTopic || !Object(ue.a)(t.entry, e.entry) || !ce()(t.config, e.config)
				}
				componentDidMount() {
					this._handleImpression()
				}
				componentDidUpdate(e) {
					Object(ue.a)(e.entry, this.props.entry) || this._handleImpression()
				}
				render() {
					const e = this._getCachedSynthesizedProps();
					if (e) {
						const t = this.getClientEventView(),
							n = this._renderInner(e);
						return t ? r.createElement(u.a, t, n) : n
					}
					return null
				}
				getClientEventView() {
					var e, t;
					const {
						entry: n,
						config: o
					} = this.props;
					return o.getClientEventViewOverride ? o.getClientEventViewOverride(n) : {
						viewType: n.type,
						token: null == (e = n.itemMetadata) || null == (t = e.clientEventInfo) ? void 0 : t.entityToken
					}
				}
				_renderInner(e) {
					const {
						config: t,
						entry: n,
						scribeNamespace: o
					} = this.props, {
						component: i
					} = t;
					return r.createElement(de.b, {
						data: this._getEntryScribeData(n, t.getScribeDataItem),
						namespace: this._getEntryScribeNamespace(o, n, t.defaultScribeNamespace)
					}, r.createElement(i, e))
				}
				_getCachedSynthesizedProps() {
					const {
						config: e
					} = this.props, t = this._getHandlerAPI(), n = this._getSynthesizedProps(e.createProps, t);
					if (n && n !== this._synthesizedProps) {
						const e = this._synthesizedProps || be;
						Object.entries(n).forEach(([t, o]) => {
							if ("function" == typeof o) {
								const i = e[t];
								"function" == typeof i && "function" == typeof i.update ? (i.update(o), n[t] = i) : n[t] = (e => {
									let t = e;
									const n = (...e) => t(...e);
									return n.update = e => {
										t = e
									}, n
								})(o)
							}
						})
					}
					return this._synthesizedProps = n, n
				}
				_handleImpression() {
					const {
						config: e
					} = this.props, t = this._getHandlerAPI();
					if (!!this._getSynthesizedProps(e.createProps, t)) {
						const {
							onImpression: t
						} = e;
						t && t(this._getHandlerAPI())
					}
				}
			}
			h()(ge, "contextType", se.a), h()(ge, "defaultProps", {
				onImpression: pe.a
			});
			const fe = e => {
				const {
					itemMetadata: t
				} = e;
				if (t && t.clientEventInfo) {
					const {
						component: e,
						element: n
					} = t.clientEventInfo, o = {};
					return e && (o.component = e), n && (o.element = n), o.component || o.element ? o : null
				}
				return null
			};
			var _e = Object(de.c)()(j(ge)),
				ye = n("FgXs"),
				we = n("VPAj");
			const ve = ({
					selectDisplayType: e,
					common: t = {},
					handlers: n
				}) => ({
					selectDisplayType: e,
					handlers: Object(ye.a)(n, e => Object.assign({}, t, e))
				}),
				Ce = e => ({
					selectDisplayType: () => "defaultDisplayType",
					handlers: {
						defaultDisplayType: e
					}
				}),
				Ee = pe.a,
				Te = {
					top: !1,
					bottom: !1
				},
				xe = Object(we.a)(!0),
				ke = Object(we.a)(!1),
				Ie = Object(we.a)(!1),
				Se = e => {
					let {
						divider: t,
						shouldDisplayBorder: n = xe,
						isClickable: o = ke,
						isFocusable: a = Ie,
						isEmpty: s
					} = e, l = i()(e, ["divider", "shouldDisplayBorder", "isClickable", "isFocusable", "isEmpty"]);
					return {
						render: c((e, {
							module: t,
							renderEntry: n
						}) => r.createElement(_e, {
							config: l,
							entry: e,
							module: t,
							renderEntry: n
						}), {
							isClickable: o,
							shouldDisplayBorder: n,
							isFocusable: a
						}),
						splice: void 0,
						divider: t || Te,
						getScribeDataItem: l.getScribeDataItem || Ee,
						isEmpty: s
					}
				},
				Pe = ({
					render: e,
					divider: t,
					shouldDisplayBorder: n = xe,
					isClickable: o = ke,
					getScribeDataItem: i = Ee,
					isFocusable: r = Ie,
					isEmpty: a
				}) => ({
					render: c(e, {
						shouldDisplayBorder: n,
						isClickable: o,
						isFocusable: r
					}),
					splice: void 0,
					divider: t || Te,
					getScribeDataItem: i,
					isEmpty: a
				}),
				Re = ({
					splice: e,
					divider: t,
					getScribeDataItem: n = Ee
				}) => ({
					render: void 0,
					splice: e,
					divider: t || Te,
					getScribeDataItem: n
				}),
				Oe = Object(we.a)({
					render: void 0,
					splice: void 0,
					divider: Te,
					getScribeDataItem: Ee
				})
		},
		"f5/l": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("Ox2E");
			const i = (e, t, n, i, r, a) => {
					t ? (r({
						listId: n
					}).catch(e(o.c)), a && a({
						element: "unsubscribed",
						action: "click"
					})) : (i({
						listId: n
					}).catch(e(o.b)), a && a({
						element: "subscribed",
						action: "click"
					}))
				},
				r = (e, t) => e && e.id_str === t || !1
		},
		fRsM: function(e, t, n) {
			"use strict";
			n("jQ/y"), n("IAdD");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("v6aA"),
				s = n("LWCC"),
				l = n("3XMw"),
				c = n.n(l),
				d = n("EHV7"),
				h = n("YICZ"),
				u = n("MWbm"),
				p = n("Irs7"),
				m = n("cm6r"),
				b = n("j7Bv"),
				g = n("t62R"),
				f = n("csss"),
				_ = n("rHpw");
			const y = c.a.a2a3824a;
			let w = 0;
			class v extends r.Component {
				constructor(e, t) {
					super(e, t), i()(this, "_topicLink", this.context.featureSwitches.isTrue("topic_landing_page_enabled") ? {
						pathname: "/i/topics/" + this.props.topic.id,
						state: {
							referringScribeNamespace: Object.assign({}, this.props.analytics.contextualScribeNamespace, {
								action: "click"
							})
						}
					} : void 0), i()(this, "_handleOnClick", () => this._handleScribe("click")), this._topicDomId = "topic" + w, this._nameDomId = "topic-name" + w, this._descriptionDomId = "topic-description" + w, this._notInterestedButtonDomId = "topic-not-interested-button" + w, this._followButtonDomId = "topic-follow-button" + w, w += 1
				}
				render() {
					const {
						treatmentBWithPivot: e
					} = this.props;
					return e ? this._renderTopicWithPivot() : this._renderTopicWithButton()
				}
				_renderTopicWithButton() {
					const {
						educateOnFollow: e,
						nameWeight: t,
						notInterestedOnClick: n,
						topic: o,
						treatmentAWithNoIcon: i,
						treatmentBWithPivot: a
					} = this.props, {
						description: l,
						name: c
					} = o, {
						loggedInUserId: p
					} = this.context, f = i ? "xLarge" : null, _ = i ? "normal" : null;
					return r.createElement(m.a, {
						"aria-labelledby": [this._topicDomId, this._nameDomId, this._descriptionDomId, this._notInterestedButtonDomId, this._followButtonDomId].join(" "),
						interactiveStyles: this._topicLink ? void 0 : null,
						link: this._topicLink,
						onClick: this._topicLink ? this._handleOnClick : void 0,
						style: [C.root, C.flexStart]
					}, r.createElement(u.a, {
						style: C.topic
					}, r.createElement(u.a, {
						accessibilityLabel: y,
						nativeID: this._topicDomId
					}), i || a ? null : r.createElement(b.a, {
						Icon: d.a,
						size: "large",
						style: C.icon
					}), r.createElement(u.a, {
						style: C.text
					}, r.createElement(g.c, {
						nativeID: this._nameDomId,
						size: f,
						weight: t,
						withInteractiveStyling: !!this._topicLink
					}, c), l ? r.createElement(g.c, {
						color: "gray600",
						nativeID: this._descriptionDomId,
						numberOfLines: 2,
						size: _
					}, l) : null)), r.createElement(u.a, {
						style: C.buttons
					}, p && n ? r.createElement(h.a, {
						nativeID: this._notInterestedButtonDomId,
						onPress: n,
						style: C.marginRight,
						topicId: o.id
					}) : null, r.createElement(s.a, {
						educateOnFollow: e,
						nativeID: this._followButtonDomId,
						topic: o
					})))
				}
				_renderTopicWithPivot() {
					const {
						topic: {
							description: e,
							name: t
						}
					} = this.props, n = r.createElement(g.c, {
						color: "gray600",
						nativeID: this._descriptionDomId,
						numberOfLines: 2,
						size: "normal"
					}, e), o = r.createElement(g.c, {
						size: "xLarge",
						weight: "bold"
					}, t);
					return r.createElement(u.a, {
						accessibilityLabel: y
					}, r.createElement(f.a, {
						description: n,
						label: o,
						link: this._topicLink,
						withBottomBorder: !1
					}))
				}
				_handleScribe(e) {
					const {
						analytics: t
					} = this.props;
					t.scribeAction(e)
				}
			}
			i()(v, "contextType", a.a), i()(v, "defaultProps", {
				nameWeight: "bold"
			});
			const C = _.a.create(e => ({
				root: {
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				},
				flexStart: {
					alignItems: "flex-start"
				},
				icon: {
					alignSelf: "flex-start",
					marginRight: e.spaces.xSmall
				},
				text: {
					flexShrink: 1
				},
				buttons: {
					flexDirection: "row",
					alignSelf: "center"
				},
				marginRight: {
					marginRight: e.spaces.xxSmall
				},
				topic: {
					alignItems: "center",
					flexDirection: "row",
					flexShrink: 1,
					paddingRight: e.spaces.xxSmall
				}
			}));
			t.a = Object(p.a)(v)
		},
		fTQJ: function(e, t, n) {
			"use strict";
			n("IAdD"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("v6aA"),
				h = n("oEGd"),
				u = n("0KEI"),
				p = n("hqKg"),
				m = n("MDbM"),
				b = n("EUHl"),
				g = n("Fmkq"),
				f = n("zh9S"),
				_ = n("yr4d");
			const y = [],
				w = (e, {
					module: t
				}) => t.selectEntries(e) || y,
				v = (e, {
					previewEntries: t
				}) => t || y,
				C = (e, {
					module: t
				}) => t.selectInitialFetchStatus(e) || m.a.LOADING,
				E = (e, {
					module: t
				}) => t.selectBottomFetchStatus(e),
				T = (e, {
					module: t
				}) => t.selectTopFetchStatus(e),
				x = (e, {
					module: t
				}) => t.selectCanRefresh(e),
				k = (e, {
					module: t
				}) => t.timelineId,
				I = (e, {
					module: t
				}) => t.selectUnavailableReason(e),
				S = (e, {
					module: t
				}) => t.selectDismissedEntries(e),
				P = (e, {
					module: t
				}) => t.selectPinnedEntry(e),
				R = (e, {
					module: t
				}) => t.selectAlert(e),
				O = (e, {
					module: t
				}) => t.selectActiveCover(e),
				A = (e, {
					module: t
				}) => !!t.selectInitialFetchStatus(e),
				M = (e, {
					module: t,
					newTweetsPillMode: n
				}) => n === b.a.CLIENT ? t.selectTopUnreadCount(e) : 0,
				L = (e, {
					module: t,
					pollingIntervalMsOverride: n
				}) => n || t.selectPollingIntervalMs(e);
			var D = Object(h.f)(() => Object(p.createSelector)(w, M, v, C, E, I, T, x, k, S, P, O, R, A, L, (e, t, n, o, i, r, a, s, l, c, d, h, u, p, b) => {
					const g = o === m.a.FAILED && r,
						f = o !== m.a.LOADED && !g && n.length > 0;
					return {
						entries: f ? n : e,
						initialFetchStatus: f ? m.a.LOADED : o,
						bottomFetchStatus: f ? o : i,
						shouldFetchInitialOnBottomRetry: f,
						unavailableReason: r,
						topFetchStatus: a,
						canRefresh: s,
						timelineId: l,
						dismissedEntries: c,
						pinnedEntry: d,
						activeCover: h,
						alert: u,
						timelineExist: p,
						topUnseenCount: t,
						pollingIntervalMs: b
					}
				}), ({
					module: e
				}) => ({
					applyReactionInstructions: e.applyReactionInstructions,
					clearActiveCover: e.clearActiveCover,
					removeAlert: e.removeAlert,
					createLocalApiErrorHandler: Object(u.d)("RICH_TIMELINE"),
					fetchBottom: e.fetchBottom,
					fetchInitial: e.fetchInitial,
					fetchInitialOrTop: e.fetchInitialOrTop,
					markAllRead: e.markTopEntrySeen,
					processCallback: e.processCallback,
					richScribeAction: g.richScribeAction,
					scribeAction: f.c,
					updateInstreamVideoEntries: _.c
				})),
				j = n("7JQg"),
				N = n("vWJI"),
				F = n("8UdT"),
				B = n("QIgh"),
				U = n("Nhmk"),
				H = n("wrlS"),
				z = n("ezF+"),
				W = n("VPAj"),
				V = n("0yYu"),
				K = z.d(z.c({
					shouldDisplayBorder: Object(W.a)(!1),
					render: Object(W.a)(c.createElement(V.a, {
						withTopBorder: !1
					}))
				})),
				G = n("v//M"),
				q = n("eXtP"),
				X = n("3XMw"),
				Y = n.n(X),
				Q = n("fs1G"),
				J = n("iBK2"),
				$ = n("X04g"),
				Z = n("JfS+"),
				ee = n("B5iK"),
				te = n("yDHe");
			var ne = z.d(z.f({
					component: te.a,
					createProps: ({
						entry: e,
						feedbackItems: t,
						scribeData: n,
						scribeNamespace: o,
						module: i
					}) => {
						const {
							content: {
								dismissedEntry: r,
								feedbackKeys: a
							},
							conversationPosition: s,
							conversationTreeMetadata: l
						} = e, c = a[0] && t.find(e => e.feedbackKey === a[0]);
						let d;
						return c && c.onUndo && (d = c.onUndo), {
							conversationPosition: s,
							conversationTreeMetadata: l,
							entry: r,
							feedbackKeys: a,
							onUndoRichAction: d,
							module: i
						}
					},
					feedbackEntrySelector: e => e.content.dismissedEntry,
					shouldDisplayBorder: e => {
						const {
							conversationPosition: t
						} = e;
						return !t || !!t.isEnd
					},
					getClientEventViewOverride: e => {
						var t, n;
						return {
							viewType: "tombstone",
							token: null == (t = e.content.dismissedEntry.itemMetadata) || null == (n = t.clientEventInfo) ? void 0 : n.entityToken
						}
					}
				})),
				oe = n("G8HL"),
				ie = n("2g+p"),
				re = n("MWbm"),
				ae = n("7N4s"),
				se = n("FIs5");
			const le = Y.a.d6e2f9bd,
				ce = Y.a.afb4c24a,
				de = {},
				he = {
					[F.a.Divider]: K,
					[F.a.Tombstone]: ne
				};
			class ue extends c.PureComponent {
				constructor(e, t) {
					super(e, t), l()(this, "_render", () => {
						const e = this.props,
							{
								bottomFetchStatus: t,
								entryConfiguration: n,
								entries: o,
								dismissedEntries: r,
								pinnedEntry: s,
								preprocessEntryList: l
							} = e,
							d = a()(e, ["apiErrorHandlerMap", "bottomFetchStatus", "createLocalApiErrorHandler", "entryConfiguration", "entries", "dismissedEntries", "fetchBottom", "fetchInitial", "fetchInitialOrTop", "fetchOptions", "fetchTopOptions", "loadingAccessibilityLabel", "markAllRead", "olderAtTop", "onEntriesUpdate", "pinnedEntry", "preprocessEntryList", "processCallback", "renderUnavailable", "scribeData", "shouldFetchInitialOnBottomRetry", "timelineExist", "timelineRef", "unavailableReason", "updateInstreamVideoEntries", "withInstreamVideo"]);
						return c.createElement(q.a, {
							additionalConfiguration: he,
							dismissedEntries: r,
							entries: o,
							entryConfiguration: n,
							pinnedEntry: s || void 0,
							preprocessEntryList: l
						}, (e, n) => c.createElement(ae.a.Consumer, null, ({
							isModal: o
						}) => c.createElement(Z.a, i()({}, d, {
							bottomFetchStatus: t || void 0,
							entries: n,
							handlerRegistry: e,
							isModal: o,
							onAtBottom: this._handleAtBottom,
							onAtTop: this._handleAtTop,
							onBottomRetry: this._handleBottomRetry,
							onNearBottom: this._handleNearBottom,
							onNearTop: this._handleNearTop,
							onRef: this._handleTimelineRendererRef,
							onRefresh: this._handleRefresh,
							processCallback: this._processCallback
						}))))
					}), l()(this, "_processCallback", e => {
						const {
							processCallback: t,
							createLocalApiErrorHandler: n
						} = this.props;
						t(e).catch(n())
					}), l()(this, "_handleTimelineRendererRef", e => {
						this._timelineRenderer = e
					}), l()(this, "_renderUnavailable", () => {
						const {
							renderUnavailable: e,
							unavailableReason: t
						} = this.props;
						return e && t ? e(t) : null
					}), l()(this, "_getForegroundPoller", e => {
						const {
							onTimelinePoll: t
						} = this.props;
						return new ee.b(e).interval(() => {
							"active" === ie.a.currentState && (this._fetchInitialOrTop({
								polling: !0
							}), t && t())
						})
					}), l()(this, "_getBackgroundPoller", e => {
						const {
							onTimelinePoll: t
						} = this.props;
						return new ee.b(e).interval(() => {
							"background" === ie.a.currentState && (this._fetchInitialOrTop({
								onlyIfStale: !0,
								polling: !0
							}), t && t())
						})
					}), l()(this, "_handleInitialRetry", () => {
						this._fetchInitial()
					}), l()(this, "_handleBottomRetry", () => {
						const {
							shouldFetchInitialOnBottomRetry: e
						} = this.props;
						e ? this._fetchInitial() : this._fetchBottom()
					}), l()(this, "_handleAtTop", () => {
						const {
							markAllRead: e,
							onAtTop: t
						} = this.props;
						t && t(), e()
					}), l()(this, "_handleNearTop", () => {
						const {
							olderAtTop: e
						} = this.props;
						this._fetchInitialOrTop({
							onlyIfStale: !e
						})
					}), l()(this, "_handleAtBottom", () => {
						const {
							scribeAction: e,
							scribeNamespace: t,
							scribeData: n
						} = this.props;
						e(Object.assign({}, t, {
							action: "bottom"
						}), n)
					}), l()(this, "_handleNearBottom", () => {
						this._fetchBottom()
					}), l()(this, "_handleRefresh", () => this._fetchInitialOrTop()), this._timelineAPI = {
						fetchTop: e => this._fetchInitialOrTop(e),
						refreshOrGoTop: () => this._refreshOrGoTop()
					}, Z.a.preload()
				}
				componentDidMount() {
					this._initialize();
					const {
						timelineRef: e
					} = this.props;
					e(this._timelineAPI)
				}
				componentWillUnmount() {
					const {
						timelineRef: e
					} = this.props;
					e(null), this._cleanupTimelinePolling()
				}
				componentDidUpdate(e) {
					const {
						entries: t,
						pollingIntervalMs: n,
						timelineId: o,
						timelineExist: i
					} = this.props;
					o !== e.timelineId || n !== e.pollingIntervalMs || e.timelineExist && !i ? this._initialize() : t !== e.entries && this._onEntriesUpdate()
				}
				render() {
					const {
						initialFetchStatus: e,
						loadingAccessibilityLabel: t,
						unavailableReason: n,
						clientEventContext: o,
						renderUnavailable: i
					} = this.props, r = Object.assign({
						viewType: "timeline"
					}, o);
					return c.createElement(re.a, null, c.createElement(G.a, {
						accessibilityLabel: t,
						clientEventContext: r,
						fetchStatus: e,
						onRequestRetry: this._handleInitialRetry,
						render: this._render,
						renderFailure: n && i ? this._renderUnavailable : void 0,
						retryable: !n
					}))
				}
				_initialize() {
					this._fetchInitialOrTop({
						onlyIfStale: !0
					}), this._onEntriesUpdate(), this._maybeInitializeTimelinePolling()
				}
				_onEntriesUpdate() {
					const {
						entries: e,
						initialFetchStatus: t,
						onEntriesUpdate: n,
						updateInstreamVideoEntries: o,
						withInstreamVideo: i
					} = this.props;
					i && o(e), n({
						entries: e,
						fetchStatus: t
					})
				}
				_maybeInitializeTimelinePolling() {
					const {
						pollingIntervalMs: e
					} = this.props;
					if (this._cleanupTimelinePolling(), e && e > 0) this._timelinePoller = this._getForegroundPoller(e), this._timelinePoller.start();
					else {
						const e = H.b.getNumberValue("responsive_web_settings_timeline_refresh_background_interval", 0);
						e > 5e3 && (this._timelinePoller = this._getBackgroundPoller(e), this._timelinePoller.start())
					}
				}
				_cleanupTimelinePolling() {
					this._timelinePoller && this._timelinePoller.stop(), this._timelinePoller = void 0
				}
				_fetchInitialOrTop(e) {
					const {
						fetchInitialOrTop: t,
						scribeAction: n,
						scribeNamespace: o,
						fetchOptions: i,
						fetchTopOptions: r
					} = this.props, a = Object.assign(Object.assign({}, e), i);
					return t(Object.assign({}, a, {
						top: r
					})).then(({
						performed: t,
						cursorType: i
					}) => {
						if (t && !(null == e ? void 0 : e.polling)) {
							const t = i === N.CursorType.Top ? "get_newer" : "get_initial";
							n(Object.assign({}, o, {
								action: t
							}), {
								event_initiator: (null == e ? void 0 : e.polling) ? $.a.EventInitiator.CLIENT_SIDE_APP : $.a.EventInitiator.CLIENT_SIDE_USER
							})
						}
					}, this._createLocalApiErrorHandler())
				}
				_fetchInitial() {
					const {
						fetchInitial: e,
						scribeAction: t,
						scribeNamespace: n,
						fetchOptions: o
					} = this.props;
					return e(o).then(({
						performed: e
					}) => {
						e && t(Object.assign({}, n, {
							action: "get_initial"
						}))
					}, this._createLocalApiErrorHandler())
				}
				_fetchBottom() {
					const {
						fetchBottom: e,
						scribeAction: t,
						scribeNamespace: n,
						fetchOptions: o
					} = this.props;
					e(o).then(({
						performed: e
					}) => {
						e && t(Object.assign({}, n, {
							action: "get_older"
						}))
					}, this._createLocalApiErrorHandler())
				}
				_createLocalApiErrorHandler() {
					const {
						createLocalApiErrorHandler: e,
						apiErrorHandlerMap: t
					} = this.props, {
						customErrorHandler: n,
						defaultToast: o,
						showToast: i
					} = t, r = a()(t, ["customErrorHandler", "defaultToast", "showToast"]), s = {
						customErrorHandler: n || U.a.customErrorHandler,
						defaultToast: o || U.a.defaultToast,
						showToast: i || U.a.showToast
					};
					return e(Object.assign({}, s, r))
				}
				_refreshOrGoTop() {
					this._timelineRenderer ? this._timelineRenderer.refreshOrGoTop() : this._handleRefresh()
				}
			}
			l()(ue, "defaultProps", {
				apiErrorHandlerMap: {},
				fetchOptions: de,
				fetchTopOptions: de,
				entryConfiguration: B.b,
				loadingAccessibilityLabel: le,
				olderAtTop: !1,
				onEntriesUpdate: Q.a,
				preprocessEntryList: e => e,
				renderEmptyState: () => c.createElement(se.a, {
					message: ce
				}),
				scroller: J.b,
				showFooter: !0,
				timelineRef: Q.a,
				withInstreamVideo: !0
			}), l()(ue, "contextType", d.a);
			t.a = Object(j.c)()(D(Object(oe.a)(ue)))
		},
		feOz: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("Xrkv"),
				c = n("PxJJ"),
				d = n("3XMw"),
				h = n.n(d),
				u = n("cHvH"),
				p = n("rHpw"),
				m = n("+Tpo"),
				b = n("Z8+W"),
				g = n("HSMM"),
				f = n("Wk1j"),
				_ = n("G41x"),
				y = n("MWbm");
			const w = h.a.b03835c7,
				v = h.a.hb7b0cea,
				C = h.a.e089b42d,
				E = h.a.a0af935b,
				T = h.a.g23ce6f0;
			class x extends s.Component {
				constructor(...e) {
					super(...e), a()(this, "_render", ({
						windowWidth: e
					}) => {
						const {
							actionSize: t,
							displayStyle: n,
							color: o,
							nativeID: i,
							style: r,
							withActionsDisabled: a
						} = this.props, l = [k.container, k[n + "Container"], r], c = 5 === this._getNumberOfActionsToRender(e), d = {
							color: o,
							iconSize: t,
							isDisabled: a,
							style: "block" === n && k.blockAction
						};
						return s.createElement(y.a, {
							accessibilityLabel: this._tweetActionsA11yLabel(),
							accessibilityRole: "group",
							nativeID: i,
							style: l
						}, this._renderReply(d), this._renderRetweet(d), this._renderLike(d), this._renderShare(c, d), this._renderAnalytics(c, d))
					}), a()(this, "_tweetActionsA11yLabel", () => {
						const {
							actionReplyProps: e,
							actionLikeProps: t,
							actionRetweetProps: n,
							withCount: o
						} = this.props;
						if (!o) return;
						return Object(l.a)([e.count ? w({
							replyCount: e.count
						}) : null, n.count ? v({
							retweetCount: n.count
						}) : null, n.isRetweeted ? T : null, t.count ? C({
							likeCount: t.count
						}) : null, t.isLiked ? E : null].filter(Boolean), !0)
					})
				}
				render() {
					return s.createElement(u.a, null, this._render)
				}
				_renderReply(e) {
					const {
						actionReplyProps: {
							count: t,
							isFaded: n,
							onPress: o,
							renderWrapper: r
						},
						activeColor: a,
						testIDs: l,
						withCount: c
					} = this.props;
					return s.createElement(g.a, i()({}, e, {
						activeColor: a,
						count: t,
						isFaded: n,
						onPress: o,
						renderWrapper: r,
						testID: l ? l.reply : void 0,
						withCount: c
					}))
				}
				_renderRetweet(e) {
					const {
						actionRetweetProps: {
							actionMenuDescription: t,
							count: n,
							enableActionMenu: o,
							excludeRetweetWithCommentAction: r,
							isDisabled: a,
							isRetweeted: l,
							onMenuCancel: c,
							onPress: d,
							onQuoteTweetActionSelect: h,
							onRetweetActionSelect: u,
							onUnretweetActionSelect: p,
							retweetWithCommentLink: m
						},
						activeColor: b,
						enableKeyboardShortcuts: g,
						isFromProtectedAccount: _,
						testIDs: y,
						withActionsDisabled: w,
						withCount: v
					} = this.props, C = y ? {
						retweet: y.retweet,
						retweetConfirm: y.retweetConfirm,
						unretweetConfirm: y.unretweetConfirm,
						unretweet: y.unretweet
					} : void 0;
					return s.createElement(f.b, i()({}, e, {
						actionMenuDescription: t,
						activeColor: b,
						count: n,
						enableActionMenu: o,
						enableKeyboardShortcuts: g,
						excludeRetweetAction: a || _,
						excludeRetweetWithCommentAction: r || _,
						isDisabled: w || !l && _,
						isRetweeted: l,
						onMenuCancel: c,
						onPress: d,
						onQuoteTweetActionSelect: h,
						onRetweetActionSelect: u,
						onUnretweetActionSelect: p,
						retweetWithCommentLink: m,
						testIDs: C,
						withCount: v
					}))
				}
				_renderLike(e) {
					const {
						actionLikeProps: {
							actionMenuDescription: t,
							count: n,
							enableActionMenu: o,
							isFaded: r,
							isLiked: a,
							likeTransitionAnimation: l,
							onLikeActionSelect: c,
							onMenuCancel: d,
							onPress: h
						},
						activeColor: u,
						enableKeyboardShortcuts: p,
						testIDs: m,
						withCount: g
					} = this.props;
					return s.createElement(b.a, i()({}, e, {
						actionMenuDescription: t,
						activeColor: u,
						count: n,
						enableActionMenu: o,
						enableKeyboardShortcuts: p,
						isFaded: r,
						isLiked: a,
						likeTransitionAnimation: l,
						onError: this._handleError,
						onLikeActionSelect: c,
						onMenuCancel: d,
						onPress: h,
						testIDs: m ? {
							like: m.like,
							unlike: m.unlike
						} : void 0,
						withCount: g
					}))
				}
				_renderShare(e, t) {
					const {
						actionShareProps: {
							actionItems: n,
							actionMenuDescription: o,
							isDisabled: r,
							isFaded: a,
							onMenuCancel: l,
							onPress: c
						},
						activeColor: d,
						enableKeyboardShortcuts: h,
						withActionsDisabled: u,
						withCount: p
					} = this.props;
					return s.createElement(_.a, i()({}, t, {
						actionItems: n,
						actionMenuDescription: o,
						activeColor: d,
						enableKeyboardShortcuts: h,
						isDisabled: (r || u) && !a,
						isFaded: a,
						onMenuCancel: l,
						onPress: c,
						withCount: e ? p : void 0
					}))
				}
				_renderAnalytics(e, t) {
					const {
						actionAnalyticsProps: {
							isFaded: n,
							onPress: o,
							tweetLink: r
						}
					} = this.props;
					return e ? s.createElement(m.a, i()({}, t, {
						isFaded: n,
						onPress: o,
						tweetLink: n ? void 0 : r
					})) : null
				}
				_handleError(e) {
					const t = e || new Error("TweetActionLike.onError");
					c.a.report(t)
				}
				_getNumberOfActionsToRender(e) {
					return this.props.withAnalytics && e >= 425 ? 5 : 4
				}
			}
			a()(x, "defaultProps", {
				actionSize: "normal",
				color: "gray600",
				displayStyle: "inline",
				enableKeyboardShortcuts: !0,
				isFromProtectedAccount: !1,
				withCount: !1
			});
			const k = p.a.create(e => ({
				container: {
					flexDirection: "row"
				},
				analyticsContainer: {
					width: e.spaces.large
				},
				inlineContainer: {
					justifyContent: "space-between",
					marginTop: e.spaces.small,
					maxWidth: 425
				},
				blockContainer: {
					alignItems: "stretch",
					height: "100%",
					justifyContent: "space-around"
				},
				blockAction: {
					minHeight: "1.875rem",
					paddingVertical: 0,
					paddingHorizontal: e.spaces.xxSmall
				}
			}));
			t.a = x
		},
		fn9Y: function(e, t, n) {
			"use strict";
			var o = n("aITJ"),
				i = (n("IAdD"), n("ERkP")),
				r = n("Lsrn"),
				a = n("k/Ka");
			const s = (e = {}) => Object(a.a)("svg", Object.assign({}, e, {
				style: [r.a.root, e.style],
				viewBox: "0 0 24 24"
			}), i.createElement("g", null, i.createElement("path", {
				d: "M18.466 14.928c-1.118 0-2.106.525-2.765 1.328l-6.587-3.358c.066-.27.11-.55.11-.842 0-.287-.042-.562-.106-.83l6.575-3.32c.658.81 1.65 1.34 2.774 1.34 1.978 0 3.586-1.606 3.586-3.58s-1.608-3.58-3.586-3.58-3.586 1.606-3.586 3.58c0 .314.054.614.13.904L8.463 9.876c-.656-.846-1.672-1.4-2.824-1.4-1.98 0-3.588 1.606-3.588 3.58s1.61 3.58 3.587 3.58c1.146 0 2.158-.55 2.815-1.39l6.56 3.343c-.08.294-.135.598-.135.918 0 1.974 1.608 3.58 3.586 3.58s3.586-1.606 3.586-3.58-1.61-3.58-3.586-3.58zm0-11.34c1.15 0 2.086.932 2.086 2.078s-.936 2.08-2.086 2.08-2.086-.934-2.086-2.08.935-2.08 2.086-2.08zM5.64 14.134c-1.15 0-2.088-.933-2.088-2.08s.937-2.08 2.087-2.08 2.085.935 2.085 2.08-.936 2.08-2.086 2.08zm12.826 6.452c-1.15 0-2.086-.933-2.086-2.08s.936-2.08 2.086-2.08 2.086.935 2.086 2.08-.936 2.08-2.086 2.08z"
			})));
			s.metadata = {
				width: 24,
				height: 24
			};
			var l = s;
			const c = (e = {}) => Object(a.a)("svg", Object.assign({}, e, {
				style: [r.a.root, e.style],
				viewBox: "0 0 24 24"
			}), i.createElement("g", null, i.createElement("path", {
				d: "M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
			}), i.createElement("path", {
				d: "M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
			})));
			c.metadata = {
				width: 24,
				height: 24
			};
			var d = c;
			t.a = o.a.isAndroid() ? l : d
		},
		foB5: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("k49u"),
				i = n("3XMw");
			const r = n.n(i).a.ee87e71c,
				a = {
					[o.a.SelfMuteError]: {
						toast: {
							text: r
						}
					},
					showToast: !0
				}
		},
		gUPl: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M14.893 22.5H4.213c-.69 0-1.3-.29-1.72-.82-.44-.56-.6-1.32-.42-2.05.87-3.68 4.25-5.82 8.23-5.82.47 0 .93.03 1.38.09-.11.08-.21.17-.31.26-1.31 1.23-1.37 3.29-.14 4.6l3.06 3.24c.18.19.38.36.6.5zm-4.59-10.42c-1.34 0-2.85-.15-3.81-1.25-.8-.92-1.06-2.35-.79-4.35.37-2.81 2.1-4.48 4.6-4.48 2.51 0 4.23 1.67 4.61 4.48.27 2.01.01 3.43-.8 4.36-.96 1.09-2.46 1.24-3.81 1.24z"
			}), o.createElement("path", {
				d: "M21.893 11.8l-4.22 8.51c-.06.12-.14.23-.24.32-.04.04-.09.08-.14.11-.03.02-.05.04-.08.05-.11.07-.23.11-.35.13-.06.01-.13.02-.2.02-.08 0-.17-.01-.25-.03-.08-.02-.16-.05-.23-.08-.06-.03-.11-.06-.16-.09-.06-.05-.12-.1-.18-.16l-.07-.07-3.02-3.2c-.43-.45-.4-1.18.05-1.6.45-.43 1.17-.41 1.6.04l1.97 2.09 3.49-7.04c.28-.56.96-.8 1.52-.51.55.27.78.96.51 1.51z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		gZV8: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("1QmG"),
				s = n("aWzz"),
				l = n("u+Xj"),
				c = n("4m92"),
				d = "placementTracking",
				h = n("+d3d"),
				u = n("MWbm");
			class p extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_setElementRef", e => {
						this._element = e || void 0
					})
				}
				sample(e) {
					window.requestAnimationFrame(() => {
						const t = this._getPlacement();
						t && e(t)
					})
				}
				render() {
					const {
						children: e,
						style: t,
						onLayout: n
					} = this.props;
					return r.createElement(u.a, {
						onLayout: n,
						ref: this._setElementRef,
						style: t,
						testID: d
					}, e)
				}
				componentDidMount() {
					this._unlistenToScroll = this.context.viewport.addScrollListener(Object(h.a)(() => this._schedulePositionSampling(), 150, {
						trailing: !0
					}))
				}
				componentWillUnmount() {
					this._unlistenToScroll && this._unlistenToScroll()
				}
				_schedulePositionSampling() {
					const {
						onPlacementChange: e
					} = this.props;
					this.sample(e)
				}
				_getPlacement() {
					if (this._element) {
						const {
							viewport: e
						} = this.context, t = this._element.getBoundingClientRect(), n = e instanceof a.a ? e.getDomNodeRect2D() : e.getRect2D(), o = e.scrollY();
						return new l.a(c.a.fromClientRect(t), n, o)
					}
				}
			}
			i()(p, "contextTypes", {
				viewport: s.object
			})
		},
		gdQ4: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("3XMw"),
				s = n.n(a),
				l = n("MWbm"),
				c = n("htQn"),
				d = n("5mJL"),
				h = n("oSwX"),
				u = n("/yvb"),
				p = n("t62R"),
				m = n("rHpw");
			const b = s.a.e3a24e4b,
				g = s.a.i569ff3e;
			class f extends r.PureComponent {
				componentDidMount() {
					const {
						onImpression: e
					} = this.props;
					e && e()
				}
				render() {
					const {
						avatarUrl: e,
						onClick: t,
						style: n,
						to: o,
						userName: i,
						withButton: a,
						withConversationLine: s
					} = this.props, m = e && i;
					return r.createElement(c.a, {
						link: o,
						onClick: t,
						style: [_.root, n]
					}, r.createElement(d.a, {
						avatarCell: m ? r.createElement(l.a, {
							style: [_.avatarColumn, !s && _.avatarColumnWithoutLine]
						}, s ? r.createElement(l.a, {
							style: _.conversationLine
						}) : null, r.createElement(h.default, {
							size: "large",
							uri: e
						})) : null,
						avatarCellStyle: _.conversationConnector,
						cellStyle: a ? _.buttonContainer : m ? _.labelWithAvatar : _.label
					}, a ? r.createElement(u.a, {
						accessibilityRole: "none",
						size: "small",
						style: _.button,
						type: "secondary"
					}, b) : r.createElement(p.c, {
						color: "link"
					}, g)))
				}
			}
			i()(f, "defaultProps", {
				withButton: !1,
				withConversationLine: !1
			});
			const _ = m.a.create(e => ({
				root: {
					overflow: "hidden",
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.spaces.micro
				},
				avatarColumn: {
					flexDirection: "column",
					flexGrow: 0,
					alignItems: "center",
					paddingBottom: e.spaces.xxSmall
				},
				avatarColumnWithoutLine: {
					paddingTop: e.spaces.xSmall
				},
				conversationConnector: {
					alignItems: "center",
					display: "flex",
					position: "relative"
				},
				label: {
					flexGrow: 1,
					paddingVertical: e.spaces.xSmall
				},
				labelWithAvatar: {
					flexGrow: 1,
					justifyContent: "center"
				},
				conversationLine: {
					backgroundColor: e.colors.gray200,
					flexGrow: 1,
					flexShrink: 1,
					width: e.componentDimensions.conversationLineWidth,
					marginBottom: e.spaces.xxSmall
				},
				buttonContainer: {
					paddingVertical: e.spaces.xxSmall,
					flexDirection: "row",
					flexGrow: 1
				},
				button: {
					marginVertical: e.spaces.xxSmall
				}
			}))
		},
		ge3j: function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return F
			})), n.d(t, "n", (function() {
				return B
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "o", (function() {
				return H
			})), n.d(t, "k", (function() {
				return z
			})), n.d(t, "q", (function() {
				return W
			})), n.d(t, "p", (function() {
				return V
			})), n.d(t, "w", (function() {
				return K
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "c", (function() {
				return X
			})), n.d(t, "a", (function() {
				return Y
			})), n.d(t, "h", (function() {
				return Q
			})), n.d(t, "v", (function() {
				return $
			})), n.d(t, "t", (function() {
				return ee
			})), n.d(t, "i", (function() {
				return ie
			})), n.d(t, "u", (function() {
				return ae
			})), n.d(t, "s", (function() {
				return le
			})), n.d(t, "d", (function() {
				return ue
			})), n.d(t, "f", (function() {
				return pe
			})), n.d(t, "g", (function() {
				return me
			})), n.d(t, "j", (function() {
				return be
			})), n.d(t, "e", (function() {
				return ge
			})), n.d(t, "r", (function() {
				return fe
			}));
			n("IAdD"), n("JtPf"), n("kYxP");
			var o = n("oEOe"),
				i = n("PiaM"),
				r = n("/kEJ"),
				a = n("vjRr"),
				s = n("rU/Q"),
				l = n("wrlS"),
				c = n("zhf3");
			var d = n("iChn"),
				h = n("Q8CU"),
				u = n("Ssj5"),
				p = n("SrIh"),
				m = n("XOJV"),
				b = n("SRyb"),
				g = (n("tVqn"), n("GWvE")),
				f = n("AspN"),
				_ = n("S1qy"),
				y = n.n(_),
				w = n("cjAp"),
				v = n.n(w);
			const C = (e, t, n) => [...e.slice(0, t), E(Object.assign({}, e[t], n)), ...e.slice(t + 1)],
				E = e => {
					const {
						mediaIds: t,
						text: n,
						pollActive: o,
						pollValid: i
					} = e, r = n && y()(n.trim(), v.a.version3).valid, a = "string" != typeof n || Object(g.a)(n), s = !o || i, l = t.length > 0;
					return Object.assign({}, e, {
						isEmpty: a && !l && !o,
						isValid: r && s && !a || a && l
					})
				};
			var T = n("ymux"),
				x = n("QbaN"),
				k = n("WA1W");
			const I = e => "rweb/draft/" + e,
				S = o.a("rweb/draft", "SCHEDULE"),
				P = o.a("rweb/draft", "DRAFT"),
				R = o.a("rweb/draft", "SEND"),
				O = Object.freeze({
					text: "",
					cardUrl: void 0,
					mediaIds: [],
					mediaMetadata: void 0,
					mediaTags: [],
					gifMetadata: void 0,
					pollActive: !1,
					initialPollChoices: void 0,
					initialPollDuration: void 0,
					pollValid: !1,
					scheduledFor: void 0,
					scheduledTweetId: void 0,
					draftTweetId: void 0,
					isEmpty: !0,
					isValid: !1
				});
			let A = 0;
			const M = () => {
					const e = Object.assign({}, O, {
						key: "composer-" + A
					});
					return A += 1, e
				},
				L = e => ({
					activeComposerIndex: 0,
					composerData: [e || M()],
					conversationControlsValue: "all",
					isSending: !1,
					excludedRecipients: [],
					sentTweetsCount: 0
				}),
				D = L(),
				j = Object.freeze({
					SINGLE_TWEET: "off",
					FIRST_TWEET: "first",
					SUBSEQUENT_TWEET: "subsequent"
				});
			const N = (e, t) => {
					const n = t || e.draft.activeParentKey || c.a.modal;
					return e.draft[n] || D
				},
				F = (e, t) => N(e, t).composerData,
				B = (e, t) => N(e, t).excludedRecipients,
				U = (e, t) => N(e, t).conversationControlsValue,
				H = (e, t) => N(e, t).isSending,
				z = (e, t) => N(e, t).activeComposerIndex,
				W = e => {
					const t = F(e),
						n = (e => N(e).sentTweetsCount)(e),
						o = t.length;
					return (n + (n < o ? ((e, t) => t.length ? Object(f.h)(e, t) : 1)(e, t[n].mediaIds) : 0)) / o
				},
				V = e => {
					const t = z(e),
						n = F(e)[t],
						o = e.scheduledTweets && e.scheduledTweets.scheduledTweets;
					return o && n && !(null == n ? void 0 : n.scheduledFor) ? ((e, t) => {
						const n = t.find(t => t.rest_id === e && t.scheduling_info && n.scheduling_info.execute_at);
						if (n) return Object(x.e)(n.scheduling_info.execute_at)
					})(n.scheduledTweetId, o) : n && n.scheduledFor
				},
				K = ({
					updates: e,
					index: t,
					parentKey: n
				}) => (o, i) => {
					const r = void 0 !== t ? t : z(i(), n);
					o(ne(C(F(i(), n), r, e), n))
				},
				G = ({
					from: e,
					to: t
				}) => (n, o) => {
					n(ne(C(F(o(), e), 0, {}), t))
				},
				q = () => (e, t) => {
					G({
						from: c.a.homeTimeline,
						to: c.a.modal
					})(e, t), e(ae(U(t(), c.a.homeTimeline), c.a.modal)), e(le(c.a.modal)), e(Y()), e({
						type: oe,
						parentKey: c.a.homeTimeline
					})
				},
				X = e => (t, n) => {
					G({
						from: e,
						to: c.a.modal
					})(t, n), t({
						type: oe,
						parentKey: e
					})
				},
				Y = () => (e, t) => {
					const n = z(t());
					let o;
					const i = F(t()).reduce((e, t, i) => (Object(h.a)(t) || e.push(t), i === n && (e.push(M()), o = e.length - 1), e), []);
					e([ne(i), ee(o)])
				},
				Q = () => (e, t) => {
					const n = F(t()),
						o = z(t()),
						i = Math.max(0, o - 1);
					e([ee(i), ne([...n.slice(0, o), ...n.slice(o + 1)])])
				},
				J = I("UPDATE_EXCLUDED_RECIPIENTS"),
				$ = e => ({
					payload: e,
					type: J
				}),
				Z = I("UPDATE_ACTIVE_COMPOSER_INDEX"),
				ee = e => ({
					type: Z,
					payload: e
				}),
				te = I("SAVE_COMPOSER_DATA"),
				ne = (e, t) => ({
					type: te,
					payload: e,
					parentKey: t
				}),
				oe = I("RESET_DRAFT"),
				ie = e => (t, n) => {
					F(n(), e).forEach(e => {
						e.mediaIds.length && t(Object(f.e)(e.mediaIds))
					}), t({
						type: oe,
						parentKey: e
					})
				},
				re = I("UPDATE_CONVERSATION_CONTROLS_VALUE"),
				ae = (e, t) => ({
					type: re,
					payload: e,
					parentKey: t
				}),
				se = I("SET_ACTIVE_PARENT_KEY"),
				le = e => ({
					type: se,
					payload: e
				}),
				ce = I("UPDATE_SENT_TWEETS_COUNT"),
				de = (e, t) => {
					if (t && t.length) {
						const n = t.length > 1 ? i.k({
								sortIndex: t[t.length - 1].id_str,
								tweetIds: t.map(e => e.id_str)
							}) : i.l({
								id: t[0].id_str,
								sortIndex: t[0].id_str
							}),
							o = t[0].in_reply_to_status_id_str;
						if (o) {
							const n = Object(T.a)({
								focalTweetId: o
							});
							e(Object(T.d)(n, o, t.map(e => e.id_str))), e(Object(T.c)(o, t.map(e => e.id_str)))
						}
						return [k.b.injectEntry(n), k.a.injectEntry(n)]
					}
				};

			function he(e, t, n) {
				const {
					cardUrl: o,
					mediaTags: i = [],
					quotedStatus: r = {},
					text: s
				} = t, {
					batchMode: c = j.SINGLE_TWEET,
					composeSemanticCoreId: h,
					conversationControlsValue: u,
					excludedRecipients: m = [],
					inReplyToStatusIdStr: b,
					nudge_enabled: g,
					nudge_types: _,
					nudge_testing_keyword_enabled: y,
					previous_nudge_id: w,
					promotedContent: v
				} = n, C = function(e, {
					gifMetadata: t = {},
					media: n = [],
					mediaMetadata: o = {},
					mediaTags: i = []
				}) {
					const {
						found_media_origin: r
					} = t, a = e(Object(f.k)(n.map(e => e.id))), s = n.every(e => {
						var t;
						return null == (t = e.mediaFile) ? void 0 : t.isImage
					}) ? i : [];
					return a.then(t => {
						const n = t.map(e => e.uploadId),
							i = Object(d.a)(n, e => e, e => s.map(e => ({
								type: e.type,
								user_id: e.id
							}))),
							a = t.map(t => {
								var n, i;
								const a = (null == (n = o[t.id]) ? void 0 : n.altText) || (null == (i = o[t.id]) ? void 0 : i.defaultAltText),
									s = !!a;
								return s || r ? e(Object(f.i)(Object.assign({
									found_media_origin: r,
									media_id: t.uploadId
								}, !!s && {
									alt_text: {
										text: a
									}
								}))) : Promise.resolve()
							});
						return Promise.all(a).then(() => ({
							uploadedMedia: t,
							uploadedMediaIds: n,
							uploadedMediaTags: i
						}))
					})
				}(e, t), E = function(e, {
					pollDuration: t,
					pollChoices: n
				}) {
					const o = (e => {
						if (!e) return null;
						return 60 * (24 * e.days + e.hours) + e.minutes
					})(t);
					return t && n ? e(a.a.createPoll(null, {
						choices: n,
						durationMinutes: o
					})).then(e => {
						if ("OK" !== e.status || !e.card_uri) {
							const t = new Error("Poll create response was not OK");
							throw t.type = "CREATE_POLL_ERROR", Object(p.a)(t, {
								extra: e
							}), t
						}
						return e
					}, e => {
						throw Object(p.a)(e), e.type = "CREATE_POLL_ERROR", e
					}) : Promise.resolve()
				}(e, t), T = !0 === l.b.getValueWithoutScribeImpression("conversation_controls_flexible_participation_enabled");
				return Promise.all([C, E]).then(([{
					uploadedMedia: e,
					uploadedMediaIds: t,
					uploadedMediaTags: n
				}, a]) => ({
					attachment_url: r.permalink && "https://twitter.com" + r.permalink,
					auto_populate_reply_metadata: !!b,
					batch_mode: c,
					card_uri: o || a && a.card_uri,
					conversation_control: u,
					conversation_control_invite_via_mention: !!u && T || void 0,
					exclude_reply_user_ids: !!b && m.length && m.join(",") || void 0,
					in_reply_to_status_id: b,
					media_ids: t.join(","),
					media_tags: i.length ? JSON.stringify(n) : void 0,
					nudge_enabled: g,
					nudge_types: _,
					nudge_testing_keyword_enabled: y,
					previous_nudge_id: w,
					promotedContent: v,
					semantic_annotation_ids: h,
					status: s
				}))
			}
			const ue = (e, t, n) => (o, i, {
					api: r
				}) => r.Tweets.createNudge({
					tweet_text: e,
					in_reply_to_tweet_id: t,
					conversation_id: n,
					enable_nudge_testing_keyword: !0 === l.b.getValueWithoutScribeImpression("responsive_web_second_degree_replies_nudge_force_enabled")
				}),
				pe = ({
					nudgeId: e,
					nudgeActionType: t
				}) => (n, o, {
					api: i
				}) => i.Tweets.recordNudgeAction({
					nudge_id: e,
					nudge_action_type: t
				}),
				me = ({
					nudgeId: e,
					nudgeResultType: t,
					tweetId: n
				}) => (o, i, {
					api: r
				}) => r.Tweets.recordNudgeResult({
					created_tweet_id: n,
					nudge_id: e,
					nudge_result_type: t
				}),
				be = e => (t, n, {
					api: i
				}) => {
					const r = o.b(t, {
							params: e,
							request: e => {
								const {
									excludedRecipients: n,
									inReplyToStatus: o = {},
									scheduleData: i
								} = e;
								return t(((e, t = {}) => (n, o, {
									api: i
								}) => {
									const {
										scheduledFor: r,
										scheduledTweetId: a,
										draftTweetId: s
									} = e, l = Object(x.c)(r);
									if (!l) {
										const e = new Error("Invalid `scheduledFor`");
										return e.scheduledFor = r, Promise.reject(e)
									}
									return he(n, e, t).then(({
										actAsUserId: e,
										attachment_url: t,
										auto_populate_reply_metadata: n,
										exclude_reply_user_ids: o,
										in_reply_to_status_id: r,
										media_ids: c,
										media_tags: d,
										promotedContent: h,
										semantic_annotation_ids: u,
										status: p
									}) => {
										const m = a || s,
											b = m ? "editScheduledTweet" : "scheduleTweet";
										return i.Scheduling[b]({
											actAsUserId: e,
											attachment_url: t,
											auto_populate_reply_metadata: n,
											exclude_reply_user_ids: o,
											in_reply_to_status_id: r,
											media_ids: c,
											media_tags: d,
											promotedContent: h,
											semantic_annotation_ids: u,
											status: p,
											executeAt: l,
											scheduledTweetId: m
										})
									})
								})(i, {
									excludedRecipients: n,
									inReplyToStatusIdStr: o.id_str
								})).then(e => Object.assign({}, i, {
									scheduled_id_str: e
								}), e => (e.scheduledTweet = i, Promise.reject(e)))
							}
						}),
						{
							scheduleData: {
								scheduledTweetId: a
							} = {}
						} = e;
					return r({
						actionTypes: S,
						context: a ? "SCHEDULE_TWEET_EDIT" : "SCHEDULE_TWEET",
						meta: {
							scheduleParams: e
						}
					})
				},
				ge = e => (t, n, {
					api: i
				}) => {
					const r = o.b(t, {
							params: e,
							request: e => {
								const {
									actAsUserId: n,
									excludedRecipients: o,
									inReplyToStatus: i = {},
									draftData: r
								} = e;
								return t(((e, t = {}) => (n, o, {
									api: i
								}) => {
									const {
										draftTweetId: r
									} = e;
									return he(n, e, t).then(({
										actAsUserId: e,
										attachment_url: t,
										auto_populate_reply_metadata: n,
										exclude_reply_user_ids: o,
										in_reply_to_status_id: a,
										media_ids: s,
										media_tags: l,
										promotedContent: c,
										semantic_annotation_ids: d,
										status: h
									}) => {
										const u = {
											actAsUserId: e,
											attachment_url: t,
											auto_populate_reply_metadata: n,
											exclude_reply_user_ids: o,
											in_reply_to_status_id: a,
											media_ids: s,
											media_tags: l,
											promotedContent: c,
											semantic_annotation_ids: d,
											status: h
										};
										return r ? i.Drafts.editDraftTweet(Object.assign({}, u, {
											draftTweetId: r
										})) : i.Drafts.createDraftTweet(u)
									})
								})(r, {
									actAsUserId: n,
									excludedRecipients: o,
									inReplyToStatusIdStr: i.id_str
								})).then(e => Object.assign({}, r, {
									draft_id_str: e
								}), e => (e.draftTweet = r, Promise.reject(e)))
							}
						}),
						{
							draftData: {
								draftTweetId: a
							} = {}
						} = e;
					return r({
						actionTypes: P,
						context: a ? "DRAFT_TWEET_EDIT" : "DRAFT_TWEET",
						meta: {
							draftParams: e
						}
					})
				},
				fe = e => (t, n, {
					api: a
				}) => o.b(t, {
					params: e,
					request: e => {
						const {
							composeSemanticCoreId: n,
							conversationControlsValue: o,
							sendData: a = [],
							excludedRecipients: c,
							inReplyToStatus: d = {},
							isSelfThreadReply: h = !1,
							nudge_enabled: u,
							nudge_types: p,
							nudge_testing_keyword_enabled: g,
							previous_nudge_id: f,
							promotedContent: _
						} = e, y = (({
							conversationControlsValue: e,
							inReplyToStatus: t,
							isSelfThreadReply: n
						}) => {
							const o = !0 === l.b.getValueWithoutScribeImpression("conversation_controls_limited_replies_creation_enabled"),
								i = !!t.id_str || n;
							if (o && !i && "all" !== e) return e
						})({
							conversationControlsValue: o,
							inReplyToStatus: d,
							isSelfThreadReply: h
						});
						return a.reduce((e, o, l) => {
							const w = 0 === l;
							return e.then(e => {
								const v = d.conversation_id_str,
									C = w ? d.id_str : e[l - 1].id_str,
									E = w ? c : [],
									T = w ? _ : void 0,
									x = w ? y : void 0,
									k = w && !h ? 1 === a.length ? j.SINGLE_TWEET : j.FIRST_TWEET : j.SUBSEQUENT_TWEET;
								return t(((e, t = {}) => (n, o, {
									api: a,
									featureSwitches: l
								}) => he(n, e, t).then(c => a.Tweets.sendTweet(c).then(a => {
									const c = (a.entities.tweets || {})[a.result];
									c.conversation_id_str = t.conversationId;
									const d = i.l({
											id: c.id_str,
											sortIndex: c.id_str
										}),
										h = c.in_reply_to_user_id_str && c.in_reply_to_user_id_str !== c.user;
									n([Object(r.c)(a.entities), Object(b.a)(l, c.user, h).injectEntry(d), e.draftTweetId && Object(s.a)(e.draftTweetId)]);
									return m.a.selectHydrated(o(), c.id_str)
								})))(o, {
									batchMode: k,
									conversationId: v,
									conversationControlsValue: x,
									composeSemanticCoreId: n,
									excludedRecipients: E,
									inReplyToStatusIdStr: C,
									promotedContent: T,
									nudge_enabled: u,
									nudge_types: p,
									nudge_testing_keyword_enabled: g,
									previous_nudge_id: f
								})).then(n => {
									const o = [...e, n];
									return t({
										type: ce,
										payload: o.length
									}), o
								}, t => (t.sentTweets = e, Promise.reject(t)))
							})
						}, Promise.resolve([]))
					}
				})({
					actionTypes: R,
					context: "SEND_SELF_THREAD",
					meta: {
						sendParams: e
					}
				}, (e, n) => {
					if (e) return de(t, e);
					if (n) {
						const {
							sentTweets: e = []
						} = n;
						return de(t, e)
					}
				});
			u.a.register({
				draft: function(e = (() => ({
					[c.a.homeTimeline]: L(),
					[c.a.modal]: L()
				}))(), t) {
					const n = t.parentKey || e.activeParentKey || c.a.modal;
					switch (t.type) {
						case S.REQUEST:
						case P.REQUEST:
						case R.REQUEST:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n], {
									isSending: !0
								})
							});
						case S.FAILURE:
						case S.SUCCESS:
						case P.FAILURE:
						case P.SUCCESS:
						case R.SUCCESS:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n], {
									isSending: !1
								})
							});
						case R.FAILURE:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n], {
									isSending: !1,
									composerData: [...e[n].composerData.slice(t.payload.sentTweets.length)],
									sentTweetsCount: 0
								})
							});
						case oe:
							return Object.assign({}, e, {
								[n]: L()
							});
						case te:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n] || D, {
									composerData: t.payload
								})
							});
						case se:
							return Object.assign({}, e, {
								activeParentKey: t.payload,
								[t.payload]: e[t.payload] || L()
							});
						case ce:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n], {
									sentTweetsCount: t.payload
								})
							});
						case Z:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n], {
									activeComposerIndex: t.payload
								})
							});
						case J:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n], {
									excludedRecipients: t.payload
								})
							});
						case re:
							return Object.assign({}, e, {
								[n]: Object.assign({}, e[n], {
									conversationControlsValue: t.payload
								})
							});
						default:
							return e
					}
				}
			})
		},
		gmfB: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = Object.freeze({
				Scheduled: "Scheduled",
				InProgress: "InProgress",
				Completed: "Completed",
				Postponed: "Postponed",
				Cancelled: "Cancelled",
				Unused6: "_Unused6",
				Unused7: "_Unused7"
			})
		},
		"h/wS": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const o = (e, t) => {
					const {
						width: n,
						height: o
					} = e;
					let i, r;
					return t >= 1 ? (r = o, i = r * t, n > i && (i = n, r = i / t)) : (i = n, r = i / t, o > r && (r = o, i = o * t)), {
						width: i,
						height: r
					}
				},
				i = (e, t) => {
					const {
						width: n,
						height: o
					} = e;
					let i, r;
					return t >= 1 ? (i = n, r = i / t, r > o && (r = o, i = o * t)) : (r = o, i = r * t, i > n && (i = n, r = n / t)), {
						width: i,
						height: r
					}
				};
			t.a = {
				getCoverDimensions: o,
				getContainDimensions: i
			}
		},
		hxu0: function(e, t, n) {
			"use strict";
			var o = n("97Jx"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("vqbU");
			t.a = e => t => r.createElement(a.a.Consumer, null, n => r.createElement(e, i()({}, t, {
				isInSidebar: n
			})))
		},
		i7AQ: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("t62R"),
				s = n("rHpw");
			const l = ({
				groupedTrends: e,
				textColor: t
			}) => {
				const n = c(e);
				return n ? o.createElement(a.c, {
					color: t,
					numberOfLines: 2,
					size: "small",
					style: p.root
				}, n) : null
			};
			l.defaultProps = {
				textColor: "gray600"
			};
			const c = e => e.length >= 2 ? h(e) : 1 === e.length ? d(e[0]) : null,
				d = e => o.createElement(r.a.I18NFormatMessage, {
					$i18n: "g1e704c3"
				}, u(e, !0)),
				h = e => o.createElement(r.a.I18NFormatMessage, {
					$i18n: "i7bba09d"
				}, u(e[0], !0), u(e[1])),
				u = (e, t = !1) => o.createElement(a.c, {
					link: e.link,
					size: "small",
					style: t && p.paddingLeft,
					withHashflags: !0
				}, e.name),
				p = s.a.create(e => ({
					root: {
						marginTop: e.spaces.xxSmall
					},
					paddingLeft: {
						paddingLeft: e.spaces.micro
					}
				}));
			t.a = l
		},
		iBK2: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("97Jx"),
				i = n.n(o),
				r = n("ERkP"),
				a = (n("JtPf"), n("zb92")),
				s = n("RuTB");
			var l = Object(a.a)({
					loader: () => n.e(133).then(n.bind(null, "FwSR")),
					renderPlaceholder: (e, t) => r.createElement(s.a, {
						hasError: e,
						onRetry: t
					})
				}),
				c = n("v6aA"),
				d = n("15eg"),
				h = (n("b8qQ"), n("9YUM"));
			const u = "stable_sort_index",
				p = r.forwardRef((e, t) => {
					const {
						featureSwitches: n
					} = r.useContext(c.a);
					const {
						isEnabled: o
					} = Object(d.a)(n);
					return o ? r.createElement(l, i()({
						ref: t
					}, e)) : r.createElement(h.a, i()({
						ref: t
					}, e))
				});
			t.b = p
		},
		iFPY: function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("zb92");
			t.a = Object(o.a)({
				loader: () => Promise.all([n.e(0), n.e(170)]).then(n.bind(null, "57t6"))
			})
		},
		iPch: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "i", (function() {
				return k
			}));
			n("WNMA");
			var o = n("qKWj"),
				i = n("wrlS"),
				r = n("tI3i"),
				a = n.n(r),
				s = n("kHBp"),
				l = n("gNWl"),
				c = n("G6rE");
			const d = {
					url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png",
					width: 1125,
					height: 375
				},
				h = (e, t) => {
					const n = b(e, t),
						o = y(e, t),
						i = w(e, t);
					return n ? "/i/lists/" + n : o && i ? `/${o}/lists/${i}` : ""
				},
				u = (e, t) => t.match.params.listId || void 0,
				p = (e, t) => {
					const n = t.match.params.listId;
					return a()(n, "listId should always be specified"), n
				},
				m = (e, t) => {
					const n = g(e, t);
					return n && n.id_str
				},
				b = (e, t) => u(0, t) || m(e, t),
				g = (e, t) => {
					const n = u(0, t);
					return n ? s.a.select(e, n) : s.a.selectByKey(e, v(e, t))
				},
				f = (e, t) => {
					const n = g(e, t);
					return n && n.following
				},
				_ = (e, t) => {
					const n = g(e, t);
					return n && n.name
				},
				y = (e, t) => {
					const n = u(0, t);
					return t.match.params.screenName || void 0 || n && s.a.selectListAuthorScreenName(e, n)
				},
				w = (e, t) => {
					const n = g(e, t);
					return t.match.params.slug || n && n.slug
				},
				v = (e, t) => {
					const n = t.match.params.slug,
						i = t.match.params.screenName;
					return n && i ? Object(o.a)(i, n) : ""
				},
				C = (e, t) => {
					const n = b(e, t) || ((e, t) => {
						const n = w(e, t),
							i = y(e, t);
						return n && i ? Object(o.a)(i, n) : ""
					})(e, t);
					return s.a.selectFetchStatus(e, n)
				},
				E = (e, t) => {
					const n = y(e, t);
					return n ? c.e.selectByScreenName(e, n) : void 0
				},
				T = (e, t) => {
					const n = b(e, t),
						o = Object(l.b)(e);
					return n && o[n] && o[n].useRanked || !1
				},
				x = (e, t) => {
					const n = s.a.select(e, t);
					if (n && i.b.isTrue("home_timeline_spheres_custom_banner_image_reads_enabled")) {
						const e = n.customBanner;
						return e || n.defaultBanner
					}
					return {
						crop: [],
						image: d
					}
				},
				k = (e, t) => {
					const n = g(e, t);
					return null == n ? void 0 : n.mode
				}
		},
		"iSF/": function(e, t, n) {
			"use strict";
			n("jQ/y"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("TIdA"),
				s = n("t62R"),
				l = n("A91F"),
				c = n("IJsT"),
				d = n("a6qo"),
				h = n("rHpw"),
				u = n("oSwX"),
				p = n("jV+4"),
				m = n("MWbm");
			class b extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderTileLower", () => {
						const {
							attribution: e
						} = this.props;
						return e ? this._renderUserAvatar() : this._renderEventDescription()
					}), i()(this, "_renderTileUpper", () => {
						const {
							accessibilityLabel: e,
							liveLabel: t,
							image: n
						} = this.props;
						return n ? r.createElement(r.Fragment, null, r.createElement(a.a, {
							accessibilityLabel: e,
							aspectMode: l.a.COVER,
							image: n
						}), t ? r.createElement(d.a, {
							align: "left",
							type: "live"
						}, t) : null) : null
					}), i()(this, "_renderUserAvatar", () => {
						const {
							attribution: e
						} = this.props;
						return e ? r.createElement(m.a, {
							style: g.accountContainer
						}, r.createElement(m.a, {
							style: g.avatarContainer
						}, r.createElement(u.default, {
							size: "xLarge",
							uri: e.profile_image_url_https,
							withLink: !1
						})), r.createElement(m.a, {
							style: g.groupContainer
						}, r.createElement(p.a, {
							isVerified: e.verified,
							name: e.name,
							nameSize: "small",
							screenName: e.screen_name,
							weight: "bold",
							withLink: !1,
							withScreenName: !0,
							withStackedLayout: !0
						}))) : null
					}), i()(this, "_renderEventDescription", () => {
						const {
							description: e,
							rightControl: t
						} = this.props;
						return e ? r.createElement(m.a, {
							style: g.eventDescription
						}, r.createElement(s.c, {
							numberOfLines: 2,
							size: "small",
							style: {
								width: "100%"
							},
							weight: "bold"
						}, e), r.createElement(m.a, {
							style: g.rightControl
						}, t || null)) : null
					})
				}
				render() {
					const {
						accessibilityLabel: e,
						link: t,
						onClick: n
					} = this.props;
					return r.createElement(c.a, {
						accessibilityLabel: e,
						link: t,
						lower: this._renderTileLower(),
						onClick: n,
						upper: this._renderTileUpper()
					})
				}
			}
			const g = h.a.create(e => ({
				accountContainer: {
					flexDirection: "row"
				},
				avatarContainer: {
					marginRight: e.spaces.xxSmall
				},
				rightControl: {
					marginTop: e.spaces.micro
				},
				groupContainer: {
					flexDirection: "row",
					flexShrink: 1
				},
				eventDescription: {
					flexDirection: "row"
				}
			}));
			t.a = b
		},
		iY63: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		ioan: function(e, t, n) {
			"use strict";
			n("IAdD"), n("x4t0"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("97Jx"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("cxan"),
				c = n("+wNj"),
				d = n("pWxA"),
				h = n("BFfR"),
				u = (n("aWzz"), !!document.documentElement.currentStyle),
				p = {
					"min-height": "0",
					"max-height": "none",
					height: "0",
					visibility: "hidden",
					overflow: "hidden",
					position: "absolute",
					"z-index": "-1000",
					top: "0",
					right: "0"
				},
				m = ["letter-spacing", "line-height", "font-family", "font-weight", "font-size", "font-style", "tab-size", "text-rendering", "text-transform", "width", "text-indent", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "box-sizing"],
				b = {},
				g = document.createElement("textarea"),
				f = function(e) {
					Object.keys(p).forEach((function(t) {
						e.style.setProperty(t, p[t], "important")
					}))
				};

			function _(e, t, n, o, i) {
				void 0 === n && (n = !1), void 0 === o && (o = null), void 0 === i && (i = null), null === g.parentNode && document.body.appendChild(g);
				var r = function(e, t, n) {
					void 0 === n && (n = !1);
					if (n && b[t]) return b[t];
					var o = window.getComputedStyle(e);
					if (null === o) return null;
					var i = m.reduce((function(e, t) {
							return e[t] = o.getPropertyValue(t), e
						}), {}),
						r = i["box-sizing"];
					if ("" === r) return null;
					u && "border-box" === r && (i.width = parseFloat(i.width) + parseFloat(o["border-right-width"]) + parseFloat(o["border-left-width"]) + parseFloat(o["padding-right"]) + parseFloat(o["padding-left"]) + "px");
					var a = parseFloat(i["padding-bottom"]) + parseFloat(i["padding-top"]),
						s = parseFloat(i["border-bottom-width"]) + parseFloat(i["border-top-width"]),
						l = {
							sizingStyle: i,
							paddingSize: a,
							borderSize: s,
							boxSizing: r
						};
					n && (b[t] = l);
					return l
				}(e, t, n);
				if (null === r) return null;
				var a = r.paddingSize,
					s = r.borderSize,
					l = r.boxSizing,
					c = r.sizingStyle;
				Object.keys(c).forEach((function(e) {
					g.style[e] = c[e]
				})), f(g), g.value = e.value || e.placeholder || "x";
				var d = -1 / 0,
					h = 1 / 0,
					p = g.scrollHeight;
				"border-box" === l ? p += s : "content-box" === l && (p -= a), g.value = "x";
				var _ = g.scrollHeight - a,
					y = Math.floor(p / _);
				return null !== o && (d = _ * o, "border-box" === l && (d = d + a + s), p = Math.max(d, p)), null !== i && (h = _ * i, "border-box" === l && (h = h + a + s), p = Math.min(h, p)), {
					height: p,
					minHeight: d,
					maxHeight: h,
					rowCount: Math.floor(p / _),
					valueRowCount: y
				}
			}
			g.setAttribute("tab-index", "-1"), g.setAttribute("aria-hidden", "true"), f(g);
			var y = function() {},
				w = 0,
				v = function(e) {
					function t(t) {
						var n;
						return (n = e.call(this, t) || this)._onRef = function(e) {
							n._ref = e;
							var t = n.props.inputRef;
							"function" != typeof t ? t.current = e : t(e)
						}, n._onChange = function(e) {
							n._controlled || n._resizeComponent(), n.props.onChange(e, Object(d.a)(n))
						}, n._resizeComponent = function(e) {
							void 0 === e && (e = y);
							var t = _(n._ref, n._uid, n.props.useCacheForDOMMeasurements, n.props.minRows, n.props.maxRows);
							if (null !== t) {
								var o = t.height,
									i = t.minHeight,
									r = t.maxHeight,
									a = t.rowCount,
									s = t.valueRowCount;
								n.rowCount = a, n.valueRowCount = s, n.state.height === o && n.state.minHeight === i && n.state.maxHeight === r ? e() : n.setState({
									height: o,
									minHeight: i,
									maxHeight: r
								}, e)
							} else e()
						}, n.state = {
							height: t.style && t.style.height || 0,
							minHeight: -1 / 0,
							maxHeight: 1 / 0
						}, n._uid = w++, n._controlled = void 0 !== t.value, n._resizeLock = !1, n
					}
					Object(h.a)(t, e);
					var n = t.prototype;
					return n.render = function() {
						var e = this.props,
							t = (e.inputRef, e.maxRows, e.minRows, e.onHeightChange, e.useCacheForDOMMeasurements, Object(c.a)(e, ["inputRef", "maxRows", "minRows", "onHeightChange", "useCacheForDOMMeasurements"]));
						return t.style = Object(l.a)({}, t.style, {
							height: this.state.height
						}), Math.max(t.style.maxHeight || 1 / 0, this.state.maxHeight) < this.state.height && (t.style.overflow = "hidden"), Object(s.createElement)("textarea", Object(l.a)({}, t, {
							onChange: this._onChange,
							ref: this._onRef
						}))
					}, n.componentDidMount = function() {
						var e = this;
						this._resizeComponent(), this._resizeListener = function() {
							e._resizeLock || (e._resizeLock = !0, e._resizeComponent((function() {
								e._resizeLock = !1
							})))
						}, window.addEventListener("resize", this._resizeListener)
					}, n.componentDidUpdate = function(e, t) {
						e !== this.props && this._resizeComponent(), this.state.height !== t.height && this.props.onHeightChange(this.state.height, this)
					}, n.componentWillUnmount = function() {
						window.removeEventListener("resize", this._resizeListener),
							function(e) {
								delete b[e]
							}(this._uid)
					}, t
				}(s.Component);
			v.defaultProps = {
				inputRef: y,
				onChange: y,
				onHeightChange: y,
				useCacheForDOMMeasurements: !1
			};
			var C = v,
				E = n("QX9J"),
				T = n("k/Ka"),
				x = n("tI3i"),
				k = n.n(x),
				I = n("7nmT"),
				S = n.n(I),
				P = n("rHpw");
			t.a = s.forwardRef((e, t) => {
				const n = E.a.useLogger(),
					{
						onFocus: o
					} = e,
					i = s.useCallback(e => {
						o && o(e), n("focus")
					}, [o, n]);
				return s.createElement(R, a()({}, e, {
					onFocus: i,
					ref: t
				}))
			});
			class R extends s.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_onPaste", e => {
						const {
							onFilesAdded: t,
							onPaste: n
						} = this.props;
						if (t) {
							const n = e.nativeEvent && e.nativeEvent.clipboardData || {};
							let o = [];
							if (n.items) {
								o = Array.prototype.slice.call(n.items).filter(e => "file" === e.kind).map(e => e.getAsFile())
							} else n.files && (o = Array.prototype.slice.call(n.files));
							if (o.length > 0) return e.preventDefault(), t(o)
						}
						return n && n(e)
					}), i()(this, "_setTextInputRef", e => {
						this._textInputRef = e
					}), i()(this, "_checkForRenderProps", () => {
						const e = !Object.keys(this.props).some(e => e.includes("render"));
						k()(e, "Must have no render props. See comment at top of file and RWEB-23660 for details.")
					})
				}
				componentDidMount() {
					const {
						autoFocus: e,
						positionCursorAtBeginning: t,
						positionCursorAtEnd: n
					} = this.props, o = this._getTextInputDOMNode();
					if (e && o)
						if (o.focus(), n) {
							const e = o.value.length;
							o.setSelectionRange(e, e)
						} else t && o.setSelectionRange(0, 0);
					this._checkForRenderProps()
				}
				componentDidUpdate() {
					this._checkForRenderProps()
				}
				render() {
					const {
						ariaActiveDescendant: e,
						ariaAutocomplete: t,
						ariaControls: n,
						ariaExpanded: o,
						ariaLabel: i,
						ariaOwns: r,
						ariaRole: a,
						autoCapitalize: s,
						autoComplete: l,
						autoCorrect: c,
						autoFocus: d,
						defaultValue: h,
						editable: u,
						inputMode: p,
						max: m,
						maxLength: b,
						maxNumberOfLines: g,
						min: f,
						multiline: _,
						name: y,
						numberOfLines: w,
						onBlur: v,
						onChange: E,
						onFocus: x,
						onInput: k,
						onKeyDown: I,
						onKeyPress: S,
						onKeyUp: P,
						pattern: R,
						placeholder: A,
						placeholderTextColor: M,
						returnKeyType: L,
						spellCheck: D,
						style: j,
						testID: N,
						type: F,
						useCacheForDOMMeasurements: B,
						value: U
					} = this.props, H = {
						"aria-activedescendant": e,
						"aria-autocomplete": t,
						"aria-controls": n,
						"aria-expanded": o,
						"aria-label": i,
						"aria-owns": r,
						autoCapitalize: s,
						autoComplete: l,
						autoCorrect: c ? "on" : "off",
						autoFocus: d,
						defaultValue: h,
						disabled: !u,
						inputMode: p,
						max: m,
						maxLength: b,
						min: f,
						name: y,
						onBlur: v,
						onChange: E,
						onFocus: x,
						onInput: k,
						onKeyDown: I,
						onKeyPress: S,
						onKeyUp: P,
						pattern: R,
						placeholder: A,
						role: a,
						spellCheck: D,
						style: j,
						testID: N,
						value: U
					}, z = {
						maxRows: g || w,
						minRows: w,
						useCacheForDOMMeasurements: B
					}, W = {
						enterkeyhint: L,
						type: F
					}, V = [O.alignLeft], K = _ ? z : W, G = _ ? [] : V, q = Object.assign({}, Object.assign({}, H, K, {
						dir: "auto",
						onChange: E,
						onPaste: this._onPaste,
						ref: this._setTextInputRef,
						style: [O.root, j, {
							placeholderTextColor: M
						}, ...G]
					})), X = _ ? C : "input";
					return Object(T.a)(X, q)
				}
				_getTextInputDOMNode() {
					if (!this._textInputNode) {
						const e = S.a.findDOMNode(this._textInputRef);
						this._textInputNode = e && (e instanceof window.HTMLInputElement || e instanceof window.HTMLTextAreaElement) ? e : void 0
					}
					return this._textInputNode
				}
				blur() {
					const e = this._getTextInputDOMNode();
					e && e.blur()
				}
				focus() {
					const e = this._getTextInputDOMNode();
					e && e.focus()
				}
				clear() {
					const {
						onClear: e
					} = this.props;
					(this._getTextInputDOMNode() || {}).value = "", e && e()
				}
				getValue() {
					const e = this._getTextInputDOMNode(),
						{
							value: t = ""
						} = e || {};
					return t
				}
				getOffsetHeight() {
					const e = this._getTextInputDOMNode();
					return e && e.offsetHeight || 0
				}
			}
			i()(R, "defaultProps", {
				autoComplete: "off",
				autoCapitalize: "sentences",
				editable: !0,
				numberOfLines: 2,
				positionCursorAtEnd: !1,
				spellCheck: "true",
				type: "text",
				useCacheForDOMMeasurements: !0
			});
			const O = P.a.create(e => ({
				root: {
					appearance: "none",
					boxSizing: "border-box",
					resize: "none",
					width: "100%"
				},
				alignLeft: {
					textAlign: "left"
				}
			}))
		},
		ipry: function(e, t, n) {
			"use strict";
			t.a = Object.freeze({
				FakeAccount: "fake_account",
				OffensiveProfileContent: "offensive_profile_content",
				SensitiveMedia: "sensitive_media",
				Timeout: "timeout"
			})
		},
		ir4X: function(e, t, n) {
			"use strict";
			n("jQ/y"), n("IAdD");
			var o = n("SEra"),
				i = n("ERkP"),
				r = n("t62R"),
				a = n("9Xij"),
				s = n("cm6r"),
				l = n("gK2g");
			var c = e => e && e.url ? {
					url: e.url,
					urlType: 0 === e.url.indexOf("twitter://") ? "DeepLink" : "ExternalUrl"
				} : void 0,
				d = n("rHpw"),
				h = n("U+bB"),
				u = n("MWbm");
			const p = {
					element: "highlighted_user_label",
					action: "click"
				},
				m = d.a.create(e => ({
					root: {
						alignItems: "flex-start",
						flexShrink: 1
					},
					withTopMargin: {
						marginTop: e.spaces.xxSmall
					},
					link: {
						alignItems: "flex-start",
						flexDirection: "row",
						maxWidth: "100%"
					},
					withUnderline: {
						textDecorationLine: "underline"
					},
					imageContainer: {
						height: e.fontSizes.normal,
						marginRight: e.spaces.xxSmall,
						marginTop: 2,
						width: e.fontSizes.normal
					},
					image: {
						height: "100%",
						width: "100%"
					}
				}));
			t.a = ({
				label: e,
				onClick: t,
				shouldTruncate: n = !0,
				withTopMargin: d = !0
			}) => {
				const b = l.a.useAnalytics(),
					{
						badge: g,
						description: f,
						url: _
					} = e,
					y = c(_);
				return i.createElement(o.Consumer, null, e => {
					const o = y ? e.getLinkFromUrtUrl(y) : void 0;
					return i.createElement(u.a, {
						style: [m.root, d && m.withTopMargin]
					}, i.createElement(s.a, {
						interactiveStyles: null,
						link: o,
						onPress: e => {
							t && t(e);
							const n = o && "string" == typeof o.pathname ? {
								url: o.pathname
							} : void 0;
							b.scribe(Object.assign({}, p, {
								data: n
							}))
						},
						style: m.link
					}, ({
						isHovered: e,
						isPressed: t,
						isFocused: o
					}) => i.createElement(i.Fragment, null, g ? i.createElement(u.a, {
						style: m.imageContainer
					}, i.createElement(a.a, {
						ratio: 1
					}, i.createElement(h.a, {
						source: g.url,
						style: m.image
					}))) : null, i.createElement(r.c, {
						color: "gray600",
						numberOfLines: n ? 1 : void 0,
						style: (e || t || o) && m.withUnderline
					}, f))))
				})
			}
		},
		iu0J: function(e, t, n) {
			"use strict";
			var o = n("ezF+"),
				i = (n("IAdD"), n("6rlp")),
				r = n("VPAj"),
				a = n("0KEI"),
				s = Object.freeze({
					Cell: "Cell",
					Hero: "Hero",
					CellWithProminentSocialContext: "CellWithProminentSocialContext"
				}),
				l = n("x5Pi"),
				c = n("Fg8X"),
				d = n("caTy"),
				h = n("cFuS"),
				u = n("NeVM"),
				p = n("zh9S"),
				m = n("Rp9C"),
				b = n("P1r1"),
				g = n("Zejx"),
				f = n("XOJV"),
				_ = n("G6rE");
			var y = (e, t, n) => o.f({
					isFocusable: Object(r.a)(!0),
					component: e,
					bindActions: ({
						module: e
					}) => ({
						logTrend: i.c,
						scribe: p.c,
						createLocalApiErrorHandler: Object(a.d)(n)
					}),
					selectData: ({
						entry: e
					}) => {
						const {
							content: t
						} = e, n = t.media && t.media.mediaEntity.tweetMedia && t.media.mediaEntity.tweetMedia.tweetId, o = t.media && t.media.mediaEntity.tweetMedia && t.media.mediaEntity.tweetMedia.momentId, i = t.socialContext && t.socialContext.topicContext && t.socialContext.topicContext.topicId;
						return {
							advertiser: e => t.promotedMetadata ? _.e.select(e, t.promotedMetadata.advertiserId) : void 0,
							dataSaverMode: b.k,
							publisher: e => t.publisherId ? _.e.select(e, t.publisherId) : void 0,
							tweet: e => n ? f.a.select(e, n) : void 0,
							moment: e => c.a.select(e, o),
							topic: e => i ? g.a.select(e, i) : void 0
						}
					},
					createProps: ({
						data: {
							advertiser: e,
							publisher: n,
							tweet: o,
							topic: i,
							moment: r,
							dataSaverMode: a
						},
						entry: c,
						feedbackItems: p,
						actions: {
							logTrend: m,
							scribe: b,
							createLocalApiErrorHandler: g
						},
						scribeData: f,
						scribeNamespace: _
					}) => {
						const {
							content: y
						} = c, {
							groupedTrends: w,
							promotedMetadata: v,
							richContext: C
						} = y, E = y.url && Object(d.b)(y.url), T = y.displayType === s.CellWithProminentSocialContext, x = Object(l.b)({
							isCellWithProminentSocialContext: T,
							socialContext: y.socialContext,
							topic: i
						}), k = (w || []).map(e => ({
							name: e.name,
							link: Object(d.b)(e.url)
						}));
						return Object.assign({
							badge: y.badge,
							groupedTrends: k,
							promotedContent: v ? {
								advertiser: {
									id_str: v.advertiserId
								},
								advertiser_name: e ? e.name : null,
								impression_id: v.impressionId,
								disclosure_type: "NoDisclosure"
							} : void 0,
							promotedTrendDescription: v ? v.promotedTrendDescription : void 0,
							publisher: n,
							socialContext: x,
							supportingText: y.supportingText,
							timeString: y.timeString,
							link: E,
							curationMenu: Object(u.a)({
								feedbackItems: p,
								onMedia: !("Hero" !== c.content.displayType || "eventSummary" !== c.type),
								scribe: b,
								scribeNamespace: _
							}),
							onClick: () => {
								b(Object.assign({}, _, {
									action: "click"
								}), f), v && v.promotedTrendId && m({
									promoted_trend_id: v.promotedTrendId,
									impression_id: v.impressionId,
									event: h.d.SPOTLIGHT_CLICK
								}).catch(g())
							},
							title: y.title,
							topic: i,
							richContext: C
						}, t({
							eventSummary: y,
							tweet: o,
							moment: r,
							scribe: b,
							scribeNamespace: _,
							entry: c,
							dataSaverMode: a
						}))
					},
					getScribeDataItem: e => (e => {
						const {
							promotedMetadata: t
						} = e.content, n = e.content.id, o = Object.assign({
							event_details: {
								event_id: n
							}
						}, m.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo));
						return t && (o.disclosure_type = t.disclosureType, o.promoted_id = t.impressionId), o
					})(e),
					onImpression: ({
						actions: {
							logTrend: e,
							scribe: t,
							createLocalApiErrorHandler: n
						},
						entry: o,
						scribeData: i,
						scribeNamespace: r
					}) => {
						const {
							promotedMetadata: a
						} = o.content;
						t(Object.assign({}, r, {
							action: "impression"
						}), i), a && a.promotedTrendId && e({
							promoted_trend_id: a.promotedTrendId,
							impression_id: a.impressionId,
							event: h.d.SPOTLIGHT_IMPRESSION
						}).catch(n())
					}
				}),
				w = n("ERkP"),
				v = n("xZmF"),
				C = (n("WNMA"), n("MvUL"), n("0mK8")),
				E = n("i7AQ"),
				T = n("rcen"),
				x = n("zOwA"),
				k = n("MWbm"),
				I = n("pjBI"),
				S = n("t62R"),
				P = n("e5HP"),
				R = n("jV+4"),
				O = n("Nxr7"),
				A = n("Wms4"),
				M = n("rHpw");
			const L = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,
				D = ({
					badge: e,
					publisher: t,
					textColor: n,
					timeString: o
				}) => {
					const i = w.createElement(R.a, {
						isProtected: t.protected,
						isVerified: t.verified,
						name: t.name,
						profileImageUrl: t.profile_image_url_https
					});
					return w.createElement(I.a, {
						style: F.publisherRow
					}, i, N(o, e, n))
				},
				j = e => {
					const {
						category: t,
						eventState: n,
						gameClock: o,
						gameClockPeriod: i,
						startTimeMillis: r,
						participants: a,
						winnerId: s
					} = e;
					return w.createElement(O.a, {
						category: t,
						gameClock: o,
						gameClockPeriod: i,
						gameState: n,
						startTimeMillis: r,
						teams: a,
						winnerId: s,
						withCategory: !1
					})
				},
				N = (e, t, n) => t && t.text ? w.createElement(A.a, {
					type: "live"
				}, t.text) : e ? w.createElement(k.a, {
					style: F.timestamp
				}, w.createElement(S.c, {
					color: n,
					numberOfLines: 1,
					size: "small"
				}, e)) : null,
				F = M.a.create(e => ({
					aboveTitle: {
						alignItems: "center",
						flexDirection: "row"
					},
					promotedIndicator: {
						marginTop: e.spaces.xSmall
					},
					publisherRow: {
						alignItems: "center"
					},
					timestamp: {
						maxWidth: "50%"
					},
					title: {
						marginVertical: e.spaces.micro
					}
				}));
			var B = ({
					badge: e,
					groupedTrends: t,
					hasProminentSocialContext: n,
					promotedContent: o,
					promotedTrendDescription: i,
					publisher: r,
					publisherTitleColor: a = "normal",
					richContext: s,
					shouldTruncateTitle: l,
					style: c,
					scoreEvent: d,
					socialContext: h,
					supportingText: u,
					textColor: p = "gray600",
					timeString: m,
					title: b,
					titleFontSize: g = "normal",
					titleWeight: f = "bold"
				}) => {
					const _ = b.replace("#", "").charAt(0).match(L) ? "rtl" : "ltr",
						{
							contextImageUrls: y
						} = h || {},
						v = y && y[0];
					return w.createElement(k.a, {
						style: c
					}, n ? null : w.createElement(I.a, {
						color: p,
						style: F.aboveTitle
					}, u ? w.createElement(S.c, {
						color: p,
						numberOfLines: 1,
						size: "small"
					}, u) : null, r ? w.createElement(C.a, {
						author: r,
						color: a,
						size: "small"
					}) : null, e || m ? N(m, e, p) : null), w.createElement(S.c, {
						color: a,
						dir: _,
						numberOfLines: l ? 3 : void 0,
						size: g,
						style: F.title,
						weight: f,
						withHashflags: !0
					}, b), w.createElement(E.a, {
						groupedTrends: t,
						textColor: p
					}), d ? j(d) : (e || m) && n ? r && D({
						badge: e,
						publisher: r,
						textColor: p,
						timeString: m
					}) || N(m, e, p) : null, o && o.advertiser ? w.createElement(w.Fragment, null, w.createElement(S.c, {
						color: p
					}, i), w.createElement(P.a, {
						color: "white",
						promotedContent: o,
						style: F.promotedIndicator
					})) : null, s ? w.createElement(T.c, {
						color: p,
						entities: s.entities,
						rtl: s.rtl,
						size: "small",
						text: s.text
					}) : h && h.text && !n ? w.createElement(x.a, {
						color: p,
						image: v,
						label: h.text,
						textSize: "small"
					}) : null)
				},
				U = n("LWCC"),
				H = n("8bWS"),
				z = n("qbku"),
				W = n("hxu0"),
				V = n("PbQQ"),
				K = n("htQn"),
				G = n("5mJL"),
				q = n("21zW");
			const X = ({
					socialContext: e,
					topic: t
				}) => {
					const {
						text: n,
						contextType: o,
						landingUrl: i,
						topicContext: r
					} = e, a = r && Object(H.a)(r), s = t && w.createElement(w.Fragment, null, w.createElement(q.a, {
						style: Y.topicMiddot
					}), w.createElement(U.a, {
						isTransparent: !0,
						size: "smallCompact",
						topic: t,
						useDefaultText: !1
					}));
					return w.createElement(z.a, {
						contextType: o,
						link: i ? Object(d.b)(i) : void 0,
						rightControl: a ? s : void 0,
						text: n,
						topicData: t ? r : void 0,
						withLeftPadding: !1
					})
				},
				Y = M.a.create(e => ({
					details: {
						flex: 1,
						marginRight: e.spaces.xSmall
					},
					topicMiddot: {
						alignSelf: "center",
						paddingRight: 0
					},
					rootLink: {
						paddingHorizontal: e.componentDimensions.gutterHorizontal,
						paddingVertical: e.componentDimensions.gutterVertical
					},
					row: {
						flexDirection: "row"
					},
					socialContextRow: {
						justifyContent: "space-between",
						marginBottom: e.spaces.xxSmall
					}
				}));
			var Q = Object(W.a)(({
				badge: e,
				curationMenu: t,
				dataSaverMode: n,
				groupedTrends: o,
				hasProminentSocialContext: i,
				link: r,
				image: a,
				isInSidebar: s,
				onClick: l,
				publisher: c,
				richContext: d,
				scoreEvent: h,
				socialContext: u,
				supportingText: p,
				timeString: m,
				title: b,
				topic: g
			}) => w.createElement(V.a.Consumer, null, f => w.createElement(K.a, {
				link: f.withAnchorless(r),
				onClick: l,
				style: Y.rootLink,
				withDarkerInteractiveBackground: s
			}, i && u ? w.createElement(G.a, {
				rightControl: t || null,
				style: Y.socialContextRow
			}, X({
				socialContext: u,
				topic: g
			})) : null, w.createElement(k.a, {
				style: Y.row
			}, w.createElement(B, {
				badge: e,
				groupedTrends: o,
				hasProminentSocialContext: i,
				publisher: c,
				richContext: d,
				scoreEvent: h,
				socialContext: u,
				style: Y.details,
				supportingText: p,
				timeString: m,
				title: b
			}), w.createElement(v.a, {
				dataSaverMode: n,
				icon: "news",
				image: a,
				scoreEvent: h
			})))));
			const J = e => ({
					image: e.eventSummary.image,
					dataSaverMode: e.dataSaverMode
				}),
				$ = e => {
					const {
						category: t,
						eventState: n,
						gameClock: o,
						gameClockPeriod: i,
						startTimeMillis: r,
						participants: a,
						winnerId: s
					} = e.eventSummary.scoreEvent || {};
					return Object.assign({}, J(e), {
						hasProminentSocialContext: !0,
						scoreEvent: e.eventSummary.scoreEvent ? {
							category: t,
							eventState: n,
							gameClock: o,
							gameClockPeriod: i,
							startTimeMillis: r,
							participants: a,
							winnerId: s
						} : void 0
					})
				};
			var Z = ({
					errorContext: e,
					hasProminentSocialContext: t = !1
				}) => {
					let n = J;
					return t && (n = $), y(Q, n, e)
				},
				ee = n("97Jx"),
				te = n.n(ee),
				ne = n("prG5"),
				oe = n("Modb"),
				ie = n("lklz"),
				re = n("9Xij"),
				ae = n("XrEN"),
				se = n("3dad"),
				le = n("A91F");
			const ce = {
				red: 0,
				green: 0,
				blue: 0
			};
			class de extends w.Component {
				render() {
					const e = M.a.theme.aspectRatios.landscape;
					return w.createElement(re.a, {
						ratio: e
					}, w.createElement(k.a, {
						style: [he.maxHeightWidth, this._getBackgroundColorStyle()]
					}, this._renderCover()), w.createElement(k.a, {
						style: [M.a.absoluteFill, this._getGradientColorStyle()]
					}))
				}
				_renderCover() {
					const {
						coverMediaFromTweet: e,
						image: t,
						tweetId: n,
						promotedContent: o
					} = this.props;
					if (n && e && "photo" !== e.type) {
						const t = ae.a.extractVideoProps(ie.b.forTweet(n), e),
							i = {
								objectFitVideo: "cover",
								hideLeftBadges: !0,
								hidePosterImage: !0
							};
						return w.createElement(oe.a, te()({}, t, {
							aspectRatio: M.a.theme.aspectRatios.landscape,
							displayOptions: i,
							forceLoop: !0,
							hideDataSaverAcceptOverlay: !0,
							hidePreviewPlayButton: !0,
							promotedContent: o,
							showControls: !1
						}))
					}
					if (e) {
						const t = e.ext_alt_text || "",
							n = se.a.getOriginalImage(e);
						return this._renderCoverImage(n, t)
					}
					return this._renderCoverImage(t)
				}
				_renderCoverImage(e, t = "") {
					return e ? w.createElement(ne.a, {
						accessibilityLabel: t,
						aspectMode: le.a.exact(M.a.theme.aspectRatios.landscape),
						cropCandidates: this._getCropCandidates(),
						hideAcceptOverlay: !0,
						image: e
					}) : null
				}
				_getBackgroundColorStyle() {
					const e = this._getDominantColor();
					return {
						backgroundColor: e ? `rgb(${e.red},${e.green},${e.blue})` : M.a.theme.colors.primary
					}
				}
				_getGradientColorStyle() {
					return {
						backgroundImage: `linear-gradient(transparent 0%, transparent 25%, ${`rgba(${ce.red},${ce.green},${ce.blue}, 0.70)`} 75%, ${`rgba(${ce.red},${ce.green},${ce.blue}, 0.80)`} 100%)`
					}
				}
				_getCropCandidates() {
					const {
						manualCrops: e,
						coverMediaFromTweet: t
					} = this.props;
					return e || t && se.a.getCropCandidates(t)
				}
				_getDominantColor() {
					const {
						coverMediaFromTweet: e
					} = this.props;
					return e && se.a.getBackgroundColor(e)
				}
			}
			const he = M.a.create(e => ({
				maxHeightWidth: {
					height: "100%",
					width: "100%"
				}
			}));
			var ue = "eventHero",
				pe = n("cm6r");
			class me extends w.Component {
				componentDidMount() {
					const {
						onImpression: e
					} = this.props;
					e && e()
				}
				render() {
					const {
						badge: e,
						groupedTrends: t,
						image: n,
						link: o,
						coverMediaFromTweet: i,
						onClick: r,
						manualCrops: a,
						curationMenu: s,
						promotedContent: l,
						promotedTrendDescription: c,
						publisher: d,
						richContext: h,
						socialContext: u,
						supportingText: p,
						timeString: m,
						title: b,
						tweetId: g
					} = this.props, f = b.length > 80 ? "large" : "xLarge";
					return w.createElement(V.a.Consumer, null, _ => w.createElement(w.Fragment, null, w.createElement(pe.a, {
						link: _.withAnchorless(o),
						onClick: r,
						testID: ue
					}, w.createElement(de, {
						coverMediaFromTweet: i,
						image: n,
						manualCrops: a,
						promotedContent: l,
						tweetId: g
					}), w.createElement(k.a, {
						style: [M.a.absoluteFill, be.details]
					}, w.createElement(B, {
						badge: e,
						groupedTrends: t,
						promotedContent: l,
						promotedTrendDescription: c,
						publisher: d,
						publisherTitleColor: "white",
						richContext: h,
						shouldTruncateTitle: !0,
						socialContext: u,
						supportingText: p,
						textColor: "white",
						timeString: m,
						title: b,
						titleFontSize: f,
						titleWeight: "heavy"
					}))), s ? w.createElement(k.a, {
						style: be.menuContainer
					}, s) : null))
				}
			}
			const be = M.a.create(e => ({
				coverContainer: {
					width: "100%"
				},
				menuContainer: {
					position: "absolute",
					top: e.spaces.xSmall,
					right: e.spaces.small
				},
				details: {
					justifyContent: "flex-end",
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.componentDimensions.gutterVertical
				}
			}));
			var ge = me,
				fe = n("29/U");
			const _e = ({
					eventSummary: e,
					tweet: t
				}) => {
					if (t) {
						const n = e.media && e.media.mediaKey && e.media.mediaKey.id;
						return t.extended_entities && t.extended_entities.media && t.extended_entities.media.find(e => e.id_str === n)
					}
				},
				ye = e => {
					return {
						coverMediaFromTweet: _e(e),
						image: (t = e.eventSummary, t.media && t.media.mediaEntity.image ? t.media.mediaEntity.image : t.image),
						manualCrops: Object(fe.e)(e.moment),
						tweetId: e.tweet && e.tweet.id_str
					};
					var t
				};
			var we = e => y(ge, ye, e);
			t.a = ({
				errorContext: e
			}) => o.b({
				selectDisplayType: e => e.content.displayType,
				handlers: {
					[s.Hero]: we(e),
					[s.Cell]: Z({
						errorContext: e
					}),
					[s.CellWithProminentSocialContext]: Z({
						errorContext: e,
						hasProminentSocialContext: !0
					})
				}
			})
		},
		iySH: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("shC7"),
				a = n("k/Ka");
			const s = (e = {}) => Object(a.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style, r.a.isRTL && i.a.iconRTL],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"
			})));
			s.metadata = {
				width: 24,
				height: 24
			}, t.a = s
		},
		j7tW: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			n("kYxP");
			var o = n("oEOe"),
				i = n("PiaM");
			var r = n("x5Pi"),
				a = n("RqPI"),
				s = n("G6rE"),
				l = n("SRyb");
			const c = o.a("rweb/pinnedTweets", "PIN"),
				d = o.a("rweb/pinnedTweets", "UNPIN"),
				h = e => (t, n, {
					api: a,
					featureSwitches: d
				}) => {
					const h = s.e.selectLoggedInUser(n()),
						u = h.id_str,
						p = h.pinned_tweet_ids_str && h.pinned_tweet_ids_str[0];
					return o.c(t, {
						params: {
							id: e
						},
						request: a.Tweets.pin
					})({
						actionTypes: c,
						context: "ACTION_PIN_TWEET",
						meta: {
							tweetId: e
						}
					}, n => {
						t(s.e.patchUser(u, {
							pinned_tweet_ids_str: [e]
						}));
						const o = Object(l.a)(d, u);
						return [...p ? [o.removeTweets({
							[p]: !0
						}), o.injectEntry(i.l({
							id: p,
							sortIndex: p
						}), {
							atTop: !1
						})] : [], o.removeTweets({
							[e]: !0
						}), o.injectEntry(i.l({
							id: e,
							content: {
								socialContext: {
									generalContext: r.a
								}
							}
						}))]
					})
				},
				u = e => (t, n, {
					api: r,
					featureSwitches: c
				}) => {
					const h = Object(a.g)(n());
					return o.c(t, {
						params: {
							id: e
						},
						request: r.Tweets.unpin
					})({
						actionTypes: d,
						context: "ACTION_UNPIN_TWEET",
						meta: {
							tweetId: e
						}
					}, n => (t(s.e.patchUser(h, {
						pinned_tweet_ids_str: []
					})), [Object(l.a)(c, h).removeTweets({
						[e]: !0
					}), Object(l.a)(c, h).injectEntry(i.l({
						id: e,
						sortIndex: e
					}), {
						atTop: !1
					})]))
				},
				p = (e, t) => {
					const n = s.e.selectLoggedInUser(e);
					return !!n && (!!n.pinned_tweet_ids_str && n.pinned_tweet_ids_str[0] === t)
				}
		},
		jHwr: function(e, t, n) {
			"use strict";
			t.a = (e, t) => {
				let n = null;
				const o = () => {
					n = null, e()
				};
				return () => (n || (n = t(o)), n)
			}
		},
		jL08: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return l
			}));
			n("JtPf"), n("x4t0"), n("MvUL"), n("kYxP");
			var o = n("bwko"),
				i = n.n(o);
			const r = e => (t, n, {
					userPersistence: o
				}) => {
					a(e, o)
				},
				a = (e, t) => t.get("rweb.articlesVisited").then(n => {
					const o = (null == n ? void 0 : n.articles) || new Set,
						r = i()("", e);
					o.add(r);
					const a = (null == n ? void 0 : n.lastSeenMap) || {},
						s = Date.now();
					a[r] = s;
					for (const [e, t] of Object.entries(a)) s - Number(t) > 6048e5 && (o.delete(e), delete a[e]);
					t.set("rweb.articlesVisited", {
						articles: o,
						lastSeenMap: a
					})
				}),
				s = (e, t) => e.get("rweb.articleDomains").then(n => {
					const o = null == n ? void 0 : n.domains,
						i = null == n ? void 0 : n.updatedTime,
						r = Date.now();
					return !i || r - i > 864e5 ? t.ArticleDomains.fetchArticleDomainsGraphQL().then(t => (e.set("rweb.articleDomains", {
						domains: t || [],
						updatedTime: r
					}), o)) : o
				}),
				l = ({
					url: e,
					domain: t
				}) => (n, o, {
					userPersistence: i,
					api: r
				}) => c(e, t, i, r),
				c = (e, t, n, o) => Promise.all([s(n, o), n.get("rweb.articlesVisited")]).then(([n, o]) => {
					if (e && n && n.includes((t || "").replace("www.", ""))) {
						const t = (null == o ? void 0 : o.articles) || new Set,
							n = i()("", e);
						return !t.has(n)
					}
					return !1
				})
		},
		jQy5: function(e, t, n) {
			"use strict";
			var o = n("OrGc"),
				i = n("foB5"),
				r = n("1bnC"),
				a = n("68+r"),
				s = n("P2xQ");
			t.a = (e, {
				addToast: t,
				createLocalApiErrorHandler: n,
				dismissUserFromConversation: l,
				mute: c,
				scribeAction: d,
				unmute: h,
				user: u
			}) => {
				const p = () => {
						h(u.id_str).then(() => {
							t({
								text: Object(s.d)(e, u.screen_name)
							})
						}, n(a.a)), d({
							element: "unmute"
						})
					},
					{
						Icon: m,
						text: b,
						onClick: g
					} = Object(s.a)(u, () => {
						c(u.id_str).then(() => {
							l && l({
								userId: u.id_str,
								feedbackKeys: ["UnfollowEntity"]
							}), t({
								action: {
									label: r.a,
									onAction: p
								},
								text: Object(s.b)(e, u.screen_name)
							})
						}, n(i.a)), d({
							element: "mute"
						})
					}, p);
				return {
					Icon: m,
					text: b,
					onClick: g,
					shortcutKey: o.d.mute
				}
			}
		},
		jS2K: function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("zb92");
			t.a = Object(o.a)({
				loader: () => Promise.all([n.e(0), n.e(173)]).then(n.bind(null, "hIbf"))
			})
		},
		jUPy: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("IJsT"),
				s = n("Nxr7"),
				l = n("TIdA"),
				c = n("t62R"),
				d = n("A91F"),
				h = n("gmfB"),
				u = n("rHpw"),
				p = n("MWbm");
			const m = Object.freeze({
				SCORE: "score",
				SECONDARY_SCORE: "secondaryScore"
			});
			class b extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "state", {
						imageError: !1
					}), i()(this, "_renderTeamName", () => {
						const {
							team: {
								shortName: e
							}
						} = this.props;
						return r.createElement(p.a, {
							style: g.teamNameContainer
						}, r.createElement(c.c, {
							color: "white",
							numberOfLines: 1,
							weight: "heavy"
						}, e))
					}), i()(this, "_renderImage", () => {
						const {
							isCompact: e,
							team: {
								imageUrl: t,
								logo: n
							}
						} = this.props, {
							imageError: o
						} = this.state, i = !n && !t || o ? g.translucent : {}, a = n ? d.a.exact(n.width / n.height) : d.a.SQUARE;
						return r.createElement(p.a, {
							style: [g.imageContainer, i, e && g.compactImageContainer]
						}, r.createElement(l.a, {
							accessibilityLabel: "",
							aspectMode: a,
							image: n || t || "",
							onError: this._handleImageError,
							rounded: !n
						}))
					}), i()(this, "_handleImageError", () => {
						this.setState({
							imageError: !0
						})
					}), i()(this, "_renderScore", () => {
						const {
							winnerId: e,
							gameState: t,
							team: n
						} = this.props, {
							id: o,
							score: i,
							secondaryScore: a
						} = n, s = o === e, l = !e, d = t === h.a.Completed && !s && !l, u = t === h.a.Completed || t === h.a.InProgress, b = this._getTeamScoreSize(m.SCORE), f = a ? this._getTeamScoreSize(m.SECONDARY_SCORE) : void 0;
						return u ? r.createElement(p.a, {
							style: [g.teamScore, d && g.losingTeamScore]
						}, r.createElement(c.c, {
							color: "white",
							numberOfLines: 1,
							size: b,
							weight: "heavy"
						}, i), a ? r.createElement(c.c, {
							color: "white",
							numberOfLines: 1,
							size: f,
							weight: "bold"
						}, a) : null) : null
					}), i()(this, "_getTeamScoreSize", e => {
						const {
							isCompact: t,
							team: {
								secondaryScore: n
							}
						} = this.props;
						if (!!!n) return t ? "large" : "xLarge";
						switch (e) {
							case m.SCORE:
								return t ? "small" : "large";
							case m.SECONDARY_SCORE:
								return t ? "xSmall" : "normal";
							default:
								return
						}
					})
				}
				render() {
					const {
						withTeamName: e,
						team: {
							color: t
						},
						fallbackColor: n
					} = this.props, o = {
						backgroundColor: t && `rgb(${t.red}, ${t.green}, ${t.blue})` || u.a.theme.colors[n]
					};
					return r.createElement(p.a, {
						style: [g.root, o]
					}, this._renderImage(), e ? this._renderTeamName() : null, this._renderScore())
				}
			}
			i()(b, "defaultProps", {
				isCompact: !1,
				withTeamName: !0
			});
			const g = u.a.create(e => ({
				root: {
					flexDirection: "row",
					height: e.spaces.xxLarge,
					paddingHorizontal: e.spaces.xSmall
				},
				imageContainer: {
					alignSelf: "center",
					width: e.spaces.large,
					marginRight: e.spaces.xSmall
				},
				compactImageContainer: {
					width: e.spaces.medium
				},
				losingTeamScore: {
					opacity: .5
				},
				teamNameContainer: {
					alignSelf: "center"
				},
				teamScore: {
					flexGrow: 2,
					alignItems: "flex-end",
					alignSelf: "center"
				},
				translucent: {
					borderRadius: e.borderRadii.infinite,
					backgroundColor: e.colors.white,
					opacity: .4
				}
			}));
			var f = b;
			class _ extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderGameStatus", () => {
						const {
							category: e,
							gameClock: t,
							gameClockPeriod: n,
							gameState: o,
							isCompact: i,
							startTimeMillis: a,
							teams: l,
							winnerId: c
						} = this.props;
						return r.createElement(s.a, {
							category: e,
							gameClock: t,
							gameClockPeriod: n,
							gameState: o,
							startTimeMillis: a,
							teams: l,
							winnerId: c,
							withCategory: !i
						})
					}), i()(this, "_renderTeamRow", (e, t) => {
						const {
							isCompact: n,
							winnerId: o,
							gameState: i
						} = this.props, {
							id: a
						} = e;
						return r.createElement(f, {
							fallbackColor: t % 2 == 0 ? "gray300" : "gray600",
							gameState: i,
							isCompact: n,
							key: a,
							team: e,
							winnerId: o,
							withTeamName: !n
						})
					})
				}
				render() {
					const {
						accessibilityLabel: e,
						isCompact: t,
						link: n,
						teams: o,
						onClick: i,
						containerStyles: s
					} = this.props;
					if (o) {
						const l = o && o.map(this._renderTeamRow);
						return r.createElement(a.a, {
							accessibilityLabel: e,
							containerStyle: s,
							link: n,
							lower: t ? void 0 : this._renderGameStatus(),
							onClick: i,
							upper: l
						})
					}
					return null
				}
			}
			i()(_, "defaultProps", {
				isCompact: !1
			})
		},
		jlPL: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		jwTb: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"k/OQ": function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("OhOQ"),
				s = n("rHpw");
			class l extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_tabRefs", {}), i()(this, "_setTabRef", e => t => {
						this._tabRefs[e] = t
					})
				}
				render() {
					const {
						accessibilityLabel: e,
						links: t,
						visibleItemIndex: n,
						style: o
					} = this.props;
					return r.createElement(a.a, {
						accessibilityLabel: e,
						key: t.map(e => e.label).join("-"),
						style: [c.segmentedControl, o],
						tabRefs: this._tabRefs,
						viewType: "tab_bar",
						visibleItemIndex: n
					}, this._renderLinks())
				}
				_renderLinks() {
					return this.props.links.map(({
						accessibilityLabel: e,
						isActive: t,
						key: n,
						label: o,
						onClick: i,
						retainScrollPosition: s,
						to: l,
						token: c
					}, d) => {
						const h = n || ("string" == typeof o ? o : void 0);
						return r.createElement(a.a.Link, {
							accessibilityLabel: e,
							isActive: t,
							key: h,
							onClick: i,
							ref: this._setTabRef(d),
							retainScrollPosition: s,
							to: l,
							token: c,
							viewType: "tab"
						}, o)
					})
				}
			}
			const c = s.a.create(e => ({
				segmentedControl: {
					borderBottomWidth: e.borderWidths.small,
					borderBottomStyle: "solid",
					borderBottomColor: e.colors.borderColor
				}
			}));
			t.a = l
		},
		kY28: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("rHpw"),
				s = n("MWbm"),
				l = n("t62R"),
				c = n("3XMw"),
				d = n.n(c),
				h = n("yDX5");
			const u = d.a.ga629a8b,
				p = (e, t, n) => e ? r.createElement(h.a, {
					screenName: t
				}, r.createElement(l.c, {
					link: "/" + t,
					onClick: n
				}, "@" + t)) : "@" + t,
				m = ({
					children: e,
					onClick: t,
					viewMorePath: n
				}) => r.createElement(l.c, {
					accessibilityLabel: u,
					link: n,
					onClick: t
				}, e);
			var b = n("s1N3");
			const g = e => e && e.screen_name || "",
				f = (e, t) => e.find(({
					id_str: e
				}) => e === t),
				_ = "NotIncluded",
				y = "DirectReply",
				w = "NonDirectReply",
				v = ({
					displayTextRange: e,
					inReplyToName: t,
					inReplyToScreenName: n,
					inReplyToUserIdStr: o,
					userMentionsEntities: i
				}) => {
					const r = [...i.filter(t => t.indices[0] < e[0] || t.id_str === o)];
					let a = f(i, o);
					const s = t || n;
					return !a && o && s && n && (a = {
						id_str: o,
						name: s,
						screen_name: n,
						indices: []
					}, r.push(a)), Object(b.a)(r, e => e.id_str)
				},
				C = ({
					displayTextRange: e,
					inReplyToName: t,
					inReplyToScreenName: n,
					inReplyToUserIdStr: o,
					linkify: i,
					loggedInUserId: a,
					onClick: s,
					tweetPermalink: c,
					userMentionsEntities: h
				}) => {
					const u = o,
						b = v({
							displayTextRange: e,
							inReplyToName: t,
							inReplyToScreenName: n,
							inReplyToUserIdStr: o,
							userMentionsEntities: h
						}),
						C = f(b, u),
						E = ((e, t, n) => {
							const o = e ? r.createElement(m, {
									onClick: n,
									viewMorePath: t
								}) : r.createElement("span", null),
								i = e ? r.createElement(l.c, {
									color: "link"
								}) : r.createElement("span", null);
							return {
								replyToOne({
									userName: t
								}) {
									const o = p(e, t, n);
									return r.createElement(d.a.I18NFormatMessage, {
										$i18n: "h5970807"
									}, o)
								},
								replyToTwo({
									userOneName: t,
									userTwoName: o
								}) {
									const a = p(e, t, n),
										s = p(e, o, n);
									return r.createElement(d.a.I18NFormatMessage, {
										$i18n: "ge01e6a2"
									}, a, r.cloneElement(i, null, d.a.f34e6516), s)
								},
								replyToMany({
									userName: t,
									othersCount: i
								}) {
									const a = p(e, t, n);
									return r.createElement(d.a.I18NFormatMessage, {
										$i18n: "f5a069ab"
									}, a, r.cloneElement(o, null, d.a.ff31714c({
										othersCount: i
									})))
								},
								indirectReplyToThree({
									userOneName: t,
									userTwoName: o,
									userThreeName: a
								}) {
									const s = p(e, t, n),
										l = p(e, o, n),
										c = p(e, a, n);
									return r.createElement(d.a.I18NFormatMessage, {
										$i18n: "hd7dd197"
									}, s, l, r.cloneElement(i, null, d.a.e06c99b6), c)
								},
								indirectReplyToMany({
									userOneName: t,
									userTwoName: i,
									othersCount: a
								}) {
									const s = p(e, t, n),
										l = p(e, i, n);
									return r.createElement(d.a.I18NFormatMessage, {
										$i18n: "g4eb2847"
									}, s, l, r.cloneElement(o, null, d.a.i4e2f96b({
										othersCount: a
									})))
								}
							}
						})(i, c + "/people", s),
						T = a === u,
						x = b.some(({
							id_str: e
						}) => e === a);
					switch (T ? y : x ? w : _) {
						case y:
						case _:
							switch (b.length) {
								case 1:
									return E.replyToOne({
										userName: g(C)
									});
								case 2: {
									const e = b.find(e => e !== C);
									return E.replyToTwo({
										userOneName: g(C),
										userTwoName: g(e)
									})
								}
								case 3: {
									const [e, t] = b.filter(e => e !== C);
									return E.indirectReplyToThree({
										userOneName: g(C),
										userTwoName: g(e),
										userThreeName: g(t)
									})
								}
								default: {
									const e = b.find(e => e !== C);
									return E.indirectReplyToMany({
										userOneName: g(C),
										userTwoName: g(e),
										othersCount: b.length - 2
									})
								}
							}
							case w:
								switch (b.length) {
									case 1:
										return null;
									case 2: {
										const e = b.find(e => e !== C);
										return E.replyToTwo({
											userOneName: g(C),
											userTwoName: g(e)
										})
									}
									case 3: {
										const e = b.find(({
											id_str: e
										}) => e !== a && e !== u);
										return E.indirectReplyToThree({
											userOneName: g(C),
											userTwoName: g(f(b, a)),
											userThreeName: g(e)
										})
									}
									default:
										return E.indirectReplyToMany({
											userOneName: g(C),
											userTwoName: g(f(b, a)),
											othersCount: b.length - 2
										})
								}
								default:
									return null
					}
				},
				E = Object.freeze({
					Threaded: "threaded",
					Isolated: "isolated",
					None: "none"
				}),
				T = [E.Threaded, E.Isolated, E.None],
				x = Object.freeze({
					all: "all",
					name: "name",
					none: "none"
				});
			class k extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_handleClick", e => {
						const {
							onClick: t,
							displayTextRange: n,
							inReplyToName: o,
							inReplyToScreenName: i,
							inReplyToUserIdStr: r,
							userMentionsEntities: a
						} = this.props;
						t && t(e, v({
							displayTextRange: n,
							inReplyToName: o,
							inReplyToScreenName: i,
							inReplyToUserIdStr: r,
							userMentionsEntities: a
						}).length)
					})
				}
				render() {
					const {
						displayTextRange: e,
						inReplyToName: t,
						inReplyToScreenName: n,
						inReplyToStatusIdStr: o,
						inReplyToUserIdStr: i,
						linkColor: a,
						linkType: c,
						loggedInUserId: d,
						nativeID: h,
						tweetPermalink: u,
						size: p,
						style: m,
						userMentionsEntities: b
					} = this.props, g = C({
						displayTextRange: e,
						inReplyToName: t,
						inReplyToScreenName: n,
						inReplyToUserIdStr: i,
						tweetPermalink: u,
						loggedInUserId: d,
						linkify: c === x.name,
						onClick: this._handleClick,
						userMentionsEntities: b
					});
					if (c === x.all) {
						const e = o && `/${n||"i"}/status/${o}`;
						return r.createElement(l.c, {
							color: a,
							link: e,
							nativeID: h,
							size: p,
							style: m
						}, g)
					}
					return c === x.name ? r.createElement(s.a, {
						style: [I.root, m]
					}, r.createElement(l.c, {
						color: "gray600",
						nativeID: h,
						size: p
					}, g)) : r.createElement(l.c, {
						color: "gray600",
						nativeID: h,
						size: p,
						style: m
					}, g)
				}
			}
			i()(k, "getReplyContextParticipants", v), i()(k, "ReplyContextTypes", E), i()(k, "TweetReplyContextTypes", T), i()(k, "ReplyContextLinkTypes", x), i()(k, "defaultProps", {
				linkColor: l.a.link,
				linkType: x.name,
				size: "normal",
				userMentionsEntities: []
			});
			const I = a.a.create(e => ({
				root: {
					display: "inline-block"
				}
			}));
			t.a = k
		},
		kgfz: function(e, t) {
			function n(e) {
				var t = [];
				for (var n in e) t.push(n);
				return t
			}(e.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
		},
		lBmi: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M23.885 19.5c-.762-3.064-3.72-5.206-7.19-5.206-1.17 0-2.27.265-3.258.707 1.246 1.08 2.157 2.5 2.564 4.138.252 1.004.052 2.03-.52 2.86h6.48c.627 0 1.2-.27 1.57-.744.38-.49.51-1.13.355-1.753zm-9.695 1.755c.38-.49.512-1.13.356-1.754-.375-1.506-1.284-2.785-2.52-3.7-1.278-.95-2.905-1.507-4.67-1.507-3.47 0-6.428 2.142-7.19 5.208-.156.626-.025 1.266.356 1.755.37.473.94.744 1.567.744h10.533c.627 0 1.197-.272 1.567-.745zm2.505-8.218c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.235 1.766 0 3.023.718 3.846.858.98 2.184 1.11 3.368 1.11zm-9.34 0c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.235 1.766 0 3.023.718 3.846.858.98 2.184 1.11 3.368 1.11z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		ll3R: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		mhlb: function(e, t, n) {
			"use strict";
			t.a = Object.freeze({
				Cell: "Cell",
				Hero: "Hero",
				Tile: "Tile"
			})
		},
		mkhj: function(e, t, n) {
			"use strict";
			t.a = {
				unmuteLink: "unmuteLink",
				userActions: "userActions",
				sendDMFromProfile: "sendDMFromProfile",
				profileHeaderItems: "UserProfileHeader_Items",
				userDescription: "UserDescription"
			}
		},
		mqpi: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("wrlS");
			const i = ["reply", "retweet", "quote_tweet", "like", "send_via_dm", "add_to_bookmarks", "add_to_moment", "pin_to_profile", "view_tweet_activity"],
				r = Object.freeze({
					enabled: "tweet_limited_actions_config_enabled",
					non_compliant: "tweet_limited_actions_config_non_compliant"
				}),
				a = (e, t) => {
					const n = (e => {
							const {
								limited_actions: t
							} = e;
							if ("limited_replies" === t) return ["reply"];
							if (t) {
								if (!r.hasOwnProperty(t)) return [];
								const e = r[t];
								return o.b.getArrayValue(e, [])
							}
						})(e),
						a = o.b.isTrue("tweet_limited_actions_config_enabled"),
						s = "" !== o.b.getValueWithoutScribeImpression("conversation_controls_limited_replies_consumption_configuration");
					if (n) {
						if (a && 0 === n.length) return i.indexOf(t) > -1;
						if (a || s) return n.indexOf(t) > -1
					}
					return !1
				}
		},
		"n+l9": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("shC7"),
				i = n("aITJ");
			const r = () => !(i.a.isIE() || i.a.isEdge() && o.a.isRTL),
				a = () => r() && (i.a.isFirefox() || i.a.isEdge())
		},
		pBrB: function(e, t, n) {
			"use strict";
			n("jQ/y");
			var o = n("ERkP"),
				i = n("t62R"),
				r = n("Ui1x"),
				a = n("FiRh"),
				s = n("Q0VY");
			t.a = ({
				description: e,
				withheldDescription: t,
				entities: n,
				withheldEntities: l,
				isConcise: c,
				style: d,
				userId: h,
				testID: u
			}) => {
				const {
					description: p,
					entities: m
				} = Object(r.getOriginalDescriptionWithEntities)({
					description: e,
					entities: n,
					withheldDescription: t,
					withheldEntities: l
				}), b = s.a.descriptionTextParts(p, m);
				return b.length ? o.createElement(i.c, {
					dir: "auto",
					numberOfLines: c ? 2 : void 0,
					style: d,
					testID: u
				}, b.map((e, t) => o.createElement(a.b, {
					key: `user_${h}_textpart_${t}`,
					linkify: !0,
					part: e
				}))) : null
			}
		},
		pNJr: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
			}), o.createElement("path", {
				d: "M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"
			}), o.createElement("circle", {
				cx: "14.738",
				cy: "9.458",
				r: "1.478"
			}), o.createElement("circle", {
				cx: "9.262",
				cy: "9.458",
				r: "1.478"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		pWxA: function(e, t, n) {
			"use strict";

			function o(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		plBw: function(e, t, n) {
			n("ax0f")({
				target: "Array",
				stat: !0
			}, {
				isArray: n("xt6W")
			})
		},
		pnqf: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("ERkP"),
				i = n("6/RC"),
				r = n("oXkQ"),
				a = n.n(r),
				s = n("z0MJ"),
				l = n.n(s);

			function c(e) {
				class t extends o.Component {
					constructor(e, t) {
						super(e, t), this.state = {
							shouldRender: !i.canUseDOM
						}, this._mounted = !0
					}
					componentWillUnmount() {
						this._mounted = !1
					}
					componentDidMount() {
						l()(() => {
							this._mounted && this.setState({
								shouldRender: !0
							})
						})
					}
					render() {
						return this.state.shouldRender ? o.createElement(e, this.props) : null
					}
				}
				return a()(t, e)
			}
		},
		prG5: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("nT9l"),
				h = n("3XMw"),
				u = n.n(h),
				p = "image",
				m = n("TIdA"),
				b = n("a6qo");
			const g = u.a.f93bb3ee;
			class f extends c.Component {
				constructor(...e) {
					super(...e), l()(this, "_renderContent", ({
						useMinimumData: e,
						resourceSelectionHandler: t
					}) => {
						const n = this.props,
							{
								shouldShowAltLabel: o
							} = n,
							r = a()(n, ["hideAcceptOverlay", "shouldShowAltLabel"]);
						return c.createElement(c.Fragment, null, c.createElement(m.a, i()({}, r, {
							onVariantSelection: t,
							previewMode: e,
							testID: p
						})), o ? c.createElement(b.a, {
							align: "left",
							bold: !0
						}, "ALT") : null)
					})
				}
				render() {
					const {
						image: e,
						hideAcceptOverlay: t
					} = this.props;
					return c.createElement(d.a, {
						acceptLabel: g,
						hideAcceptOverlay: t,
						renderContent: this._renderContent,
						resourceId: "string" == typeof e ? e : e.url
					})
				}
			}
		},
		pu5c: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm0 1.5c2.28 0 4.368.834 5.982 2.207L4.957 17.982C3.584 16.368 2.75 14.282 2.75 12c0-5.1 4.15-9.25 9.25-9.25zm0 18.5c-2.28 0-4.368-.834-5.982-2.207L19.043 6.018c1.373 1.614 2.207 3.7 2.207 5.982 0 5.1-4.15 9.25-9.25 9.25z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		pwey: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M23.152 3.483h-2.675V.81c0-.415-.336-.75-.75-.75s-.75.335-.75.75v2.674H16.3c-.413 0-.75.336-.75.75s.337.75.75.75h2.677V7.66c0 .413.336.75.75.75s.75-.337.75-.75V4.982h2.675c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.646-4.513S4.15 3.342 3.77 6.168c-.27 2.025-.007 3.462.807 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		q82E: function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "n", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "o", (function() {
				return w
			}));
			var o = n("zrOZ");
			const i = Object.freeze({
					Abort: "abort",
					ChromelessWeb: "chromeless_web_link",
					Deeplink: "deep_link",
					DeeplinkAndAbort: "deep_link_and_abort",
					DeeplinkInPlace: "deep_link_in_place",
					Finish: "finish",
					Subtask: "subtask",
					Task: "task",
					Web: "web_link",
					WeblinkAndAbort: "web_link_and_abort"
				}),
				r = Object.freeze({
					Allow: "allow",
					HideExplicitCta: "hide_explicit_cta",
					Disallow: "disallow"
				}),
				a = Object.freeze({
					DestructiveSecondary: "destructive_secondary",
					Primary: "primary",
					Text: "text"
				}),
				s = Object.freeze({
					Toolbar: "toolbar"
				}),
				l = Object.freeze({
					Success: "success",
					Failure: "failure",
					Cancel: "cancel"
				}),
				c = Object.freeze({
					PhoneOnly: "phone_only",
					EmailOnly: "email_only",
					PhoneThenEmail: "phone_then_email",
					EmailThenPhone: "email_then_phone"
				}),
				d = Object.freeze({
					AlertDialog: "ALERT_DIALOG",
					AlertDialogSupressClientEvents: "ALERT_DIALOG_SUPRESS_CLIENT_EVENTS",
					AppDownloadCTA: "APP_DOWNLOAD_CTA",
					CallToAction: "CALL_TO_ACTION",
					ChoiceSelection: "CHOICE_SELECTION",
					ContactsLiveSyncPermissionPrompt: "CONTACTS_LIVE_SYNC_PERMISSION_PROMPT",
					EmailContactsSync: "EMAIL_CONTACTS_SYNC",
					EmailVerification: "EMAIL_VERIFICATION",
					EnterEmail: "ENTER_EMAIL",
					EnterPassword: "ENTER_PASSWORD",
					EnterPhone: "ENTER_PHONE",
					EnterText: "ENTER_TEXT",
					EnterUsername: "ENTER_USERNAME",
					EndFlow: "END_FLOW",
					FetchPassword: "FETCH_PASSWORD",
					InterestPicker: "INTEREST_PICKER",
					MenuDialog: "MENU_DIALOG",
					NotificationsPermissionPrompt: "NOTIFICATIONS_PERMISSION_PROMPT",
					OpenAccount: "OPEN_ACCOUNT",
					OpenHomeTimeline: "OPEN_HOME_TIMELINE",
					OpenLink: "OPEN_LINK",
					PhoneVerification: "PHONE_VERIFICATION",
					PrivacyOptions: "PRIVACY_OPTIONS",
					Recaptcha: "RECAPTCHA",
					SelectAvatar: "SELECT_AVATAR",
					SelectBanner: "SELECT_BANNER",
					SettingsList: "SETTINGS_LIST",
					Signup: "SIGNUP",
					SignupReview: "SIGNUP_REVIEW",
					TopicsSelector: "TOPICS_SELECTOR",
					UploadMedia: "UPLOAD_MEDIA",
					UpdateUsers: "UPDATE_USERS",
					UserRecommendations: "USER_RECOMMENDATIONS_LIST",
					UserRecommendationsURT: "USER_RECOMMENDATIONS_URT",
					WaitSpinner: "WAIT_SPINNER"
				}),
				h = Object.freeze({
					Centered: "centered",
					Left: "left"
				}),
				u = Object(o.a)([d.EndFlow, d.FetchPassword, d.OpenAccount, d.OpenHomeTimeline, d.OpenLink, d.NotificationsPermissionPrompt, d.UploadMedia, d.WaitSpinner]),
				p = Object.freeze({
					Action: "action",
					Boolean: "boolean",
					DestructiveAction: "destructive_action",
					PreciseLocation: "precise_location",
					SettingsGroup: "settings_group",
					StaticText: "static_text"
				}),
				m = "setting_responses",
				b = Object.freeze({
					Avatar: "avatar",
					Banner: "banner"
				}),
				g = Object.freeze({
					Success: "success",
					NotFound: "not_found",
					Error: "error"
				}),
				f = Object.freeze({
					Favorite: "favorite",
					Follow: "follow",
					Reply: "reply",
					Retweet: "retweet"
				}),
				_ = Object.freeze({
					Checkbox: "checkbox",
					Follow: "follow"
				}),
				y = (Object.freeze({
					Always: "always",
					Never: "never",
					Preprompt: "preprompt"
				}), Object.freeze({
					Email: "email",
					Number: "number",
					Password: "password",
					Telephone: "telephone",
					Text: "text"
				})),
				w = Object.freeze({
					ResendSms: "resend_sms",
					ResendVoice: "resend_voice",
					ResendEmail: "resend_email"
				})
		},
		qB1G: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("mhlb");
			const o = Object.freeze({
				Scheduled: "Scheduled",
				InProgress: "InProgress",
				Completed: "Completed",
				Postponed: "Postponed",
				Cancelled: "Cancelled"
			})
		},
		qbku: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("rxPX"),
				c = Object(l.a)().withAnalytics({
					element: "social_proof"
				}),
				d = n("aTAq"),
				h = n("Nqmc");
			const u = c(e => {
				const {
					link: t,
					analytics: n
				} = e, o = a()(e, ["link", "analytics"]), r = t && !Object(d.a)(t) ? Object.assign({}, t, {
					state: Object.assign({}, t.state, {
						referringScribeNamespace: Object.assign({}, n.contextualScribeNamespace, {
							action: "click"
						})
					})
				}) : t;
				return s.createElement(h.a, i()({}, o, {
					link: r,
					onClick: function() {
						const {
							analytics: t
						} = e;
						t.scribeAction("click")
					}
				}))
			});
			t.a = u
		},
		qz6Z: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M1.75 22.354c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.395 1.898c.293-.294.768-.294 1.06 0s.294.767 0 1.06L2.28 22.135c-.146.146-.338.22-.53.22zm1.716-5.577c-.134 0-.27-.036-.392-.11-.67-.413-1.07-1.13-1.07-1.917v-5.5c0-1.24 1.01-2.25 2.25-2.25H6.74l7.047-5.588c.225-.18.533-.215.792-.087.258.125.423.387.423.675v3.28c0 .415-.336.75-.75.75s-.75-.335-.75-.75V3.553L7.47 8.338c-.134.104-.298.162-.467.162h-2.75c-.413 0-.75.337-.75.75v5.5c0 .263.134.5.356.64.353.216.462.678.245 1.03-.14.23-.387.357-.64.357zm10.787 5.973c-.166 0-.33-.055-.466-.162l-4.795-3.803c-.325-.258-.38-.73-.122-1.054.258-.322.73-.38 1.054-.12l3.58 2.838v-7.013c0-.414.335-.75.75-.75s.75.336.75.75V22c0 .288-.166.55-.425.675-.104.05-.216.075-.327.075z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		rC8y: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("t62R"),
				r = n("htQn");
			const a = n("rHpw").a.create(e => ({
				root: {
					paddingHorizontal: e.componentDimensions.gutterHorizontal,
					paddingVertical: e.spaces.small
				},
				withBottomRadius: {
					borderBottomLeftRadius: e.borderRadii.xLarge,
					borderBottomRightRadius: e.borderRadii.xLarge
				}
			}));
			t.a = function({
				withBottomRadius: e,
				withDarkerInteractiveBackground: t,
				link: n,
				onPress: s,
				text: l
			}) {
				return o.createElement(r.a, {
					link: n,
					onPress: s,
					style: [a.root, e && a.withBottomRadius],
					withDarkerInteractiveBackground: t
				}, o.createElement(i.c, {
					color: "primary"
				}, l))
			}
		},
		rJoH: function(e, t, n) {
			"use strict";
			n("jQ/y");
			var o = n("ERkP"),
				i = n("muX9");
			t.a = ({
				type: e,
				canonical: t,
				title: n,
				image: r,
				description: a
			}) => o.createElement(i.a, null, e ? o.createElement("meta", {
				content: e,
				property: "og:type"
			}) : null, t ? o.createElement("meta", {
				content: t,
				property: "og:url"
			}) : null, n ? o.createElement("meta", {
				content: n,
				property: "og:title"
			}) : null, r ? o.createElement("meta", {
				content: r,
				property: "og:image"
			}) : null, a ? o.createElement("meta", {
				content: a,
				property: "og:description"
			}) : null)
		},
		rOiJ: function(e, t, n) {
			"use strict";
			n("jQ/y"), n("kYxP");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("I7xG"),
				c = n("3XMw"),
				d = n.n(c),
				h = n("I4+6"),
				u = n("cm6r"),
				p = n("wD1h"),
				m = n("bVhu"),
				b = n("3dad"),
				g = n("Ujvi"),
				f = n("VAyw"),
				_ = n("XrEN"),
				y = n("k2KP"),
				w = n("Sp5X"),
				v = n("gK2g"),
				C = n("rHpw"),
				E = n("t62R"),
				T = n("MWbm");
			var x = ({
				title: e,
				description: t
			}) => e || t ? s.createElement(T.a, {
				style: k.metadataContainer
			}, e ? s.createElement(E.c, {
				style: k.metadata,
				weight: "bold",
				withHashflags: !0
			}, e) : null, t ? s.createElement(E.c, {
				style: k.metadata
			}, t) : null) : null;
			const k = C.a.create(e => ({
				metadata: {
					marginBottom: e.spaces.xxSmall
				},
				metadataContainer: {
					flex: 1,
					flexDirection: "column",
					paddingBottom: e.spaces.xxSmall,
					paddingHorizontal: e.spaces.xSmall,
					paddingTop: e.spaces.xSmall
				}
			}));
			var I = n("wnTO"),
				S = n("lklz"),
				P = n("diSD"),
				R = n("Qyxo"),
				O = n("mN6z");
			const A = d.a.b74bf8b7;
			class M extends s.Component {
				constructor(...e) {
					super(...e), a()(this, "_getPhotos", Object(l.a)(this, e => e.mediaDetails, e => e.authorId, e => e.forwardPivotInfo, e => e.loggedInUserId, e => e.shouldShowAltLabelAlways, (e, t, n, o, i) => Object(R.a)(e, e => {
						const r = {
								pathname: e.expanded_url,
								state: {
									forwardPivotInfo: n
								}
							},
							a = "photo" === e.type && e.original_info,
							s = b.a.getOriginalImage(e);
						return a && s && {
							accessibilityLabel: e.ext_alt_text || A,
							width: s.width,
							height: s.height,
							url: s.url,
							expandedUrl: r,
							backgroundColor: b.a.getBackgroundColor(e),
							cropCandidates: b.a.getCropCandidates(e),
							shouldShowAltLabel: !(!e.ext_alt_text || t !== o && !i)
						}
					}))), a()(this, "_getSourceUser", () => {
						const {
							mediaDetails: e
						} = this.props;
						return e && e[0] && e[0].additional_media_info && e[0].additional_media_info.source_user
					}), a()(this, "_openPhotoModal", () => {
						const {
							onClick: e
						} = this.props, t = this._getPhotos(), n = "string" == typeof t[0].expandedUrl ? t[0].expandedUrl : t[0].expandedUrl.pathname;
						e && e(), w.a && w.a.push(n)
					})
				}
				shouldComponentUpdate(e, t) {
					return !Object(O.a)(this.props, e) || !Object(O.a)(this.state, t)
				}
				render() {
					const {
						hasSensitiveMedia: e,
						displayMediaAttribution: t,
						displayMediaTags: n,
						loggedInUserId: o,
						mediaDetails: i,
						mediaTagsLink: r,
						style: a,
						withMediaTagsIcon: l
					} = this.props, c = this._renderContent(), d = f.a.mergeTaggedUsers(i), h = this._getSourceUser();
					return s.createElement(v.a.Provider, {
						namespace: {
							element: "media"
						}
					}, s.createElement(T.a, null, e ? s.createElement(y.a, {
						revealableTombstoneConfig: y.a.sensitiveMediaTombstoneConfig,
						style: a
					}, c) : c, n && r && d.length ? s.createElement(g.a, {
						linkPath: r,
						loggedInUserId: o,
						size: l ? "normal" : "small",
						style: L.mediaTags,
						users: d,
						withIcon: l
					}) : null, t && h ? s.createElement(m.a, {
						size: l ? "normal" : "small",
						style: L.mediaAttribution,
						userIsProtected: h.protected,
						userIsVerified: h.verified,
						userName: h.name,
						userScreenName: h.screen_name
					}) : null))
				}
				_isVideo() {
					const {
						mediaDetails: e
					} = this.props;
					return e[0] && _.a.isVideo(e[0])
				}
				_renderContent() {
					const {
						cacheLocationKey: e,
						containerAspectRatio: t,
						hideAcceptOverlay: n,
						enableKeyboardShortcuts: o,
						onClick: i,
						singleImageMaxAspectRatio: r,
						singleImageMinAspectRatio: a,
						showBorder: l,
						showRoundCorners: c,
						style: d,
						withLink: m
					} = this.props, b = l && (this._getPhotos().length >= 1 || this._isVideo()), g = this._getPhotos(), f = g.length ? h.a.generate({
						backgroundColor: "transparent",
						color: C.a.theme.colors.primary,
						withFocusWithinFocusRing: !0
					}) : null;
					let _ = null;
					return g.length >= 1 ? _ = s.createElement(p.a, {
						enabled: o,
						handlers: {
							[p.a.shortcuts.openMediaModal]: this._openPhotoModal
						}
					}, s.createElement(I.a, {
						cacheLocationKey: e,
						containerAspectRatio: t,
						hideAcceptOverlay: n,
						images: g,
						onClick: i,
						singleImageMaxAspectRatio: r,
						singleImageMinAspectRatio: a,
						withLink: m
					})) : this._isVideo() && (_ = this._renderVideo()), _ ? s.createElement(u.a, {
						interactiveStyles: f,
						style: [d, b && L.itemWithBorder, c && L.itemWithRoundCorners]
					}, _, this._renderMediaMetadata()) : null
				}
				_renderMediaMetadata() {
					const {
						displayMediaMetadata: e,
						mediaDetails: t
					} = this.props, [{
						additional_media_info: n
					}] = t, {
						title: o,
						description: i
					} = n || {};
					return e ? s.createElement(x, {
						description: i,
						title: o
					}) : null
				}
				_renderVideo() {
					const {
						forwardPivotInfo: e,
						hideAcceptOverlay: t,
						withPostPlayback: n,
						tweetId: o,
						mediaDetails: r,
						promotedContent: a,
						preventPlayback: l,
						videoAspectRatio: c,
						videoOptions: d
					} = this.props, h = r[0], u = h && "photo" !== h.type ? h : void 0, p = u && _.a.extractVideoProps(S.b.forTweet(o), u, void 0, e);
					return u && p ? s.createElement(P.a, i()({}, p, d, {
						aspectRatio: c || p.aspectRatio,
						hideDataSaverAcceptOverlay: t,
						preventPlayback: l,
						promotedContent: a,
						withPostPlayback: n
					})) : null
				}
			}
			a()(M, "defaultProps", {
				displayMediaAttribution: !1,
				displayMediaTags: !0,
				enableKeyboardShortcuts: !1,
				hasSensitiveMedia: !1,
				singleImageMaxAspectRatio: 16 / 9,
				mediaDetails: [],
				singleImageMinAspectRatio: 16 / 9,
				showBorder: !0,
				showRoundCorners: !0,
				withLink: !0,
				withMediaTagsIcon: !1
			});
			const L = C.a.create(e => ({
				itemWithBorder: {
					borderWidth: "1px",
					borderStyle: "solid",
					borderColor: e.colors.nestedBorderColor
				},
				itemWithRoundCorners: {
					borderRadius: e.borderRadii.xLarge,
					overflow: "hidden"
				},
				mediaAttribution: {
					marginTop: e.spaces.xxSmall
				},
				mediaTags: {
					marginTop: e.spaces.xxSmall
				}
			}));
			t.a = M
		},
		"rU/Q": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			n("IAdD");
			var o = n("oEOe"),
				i = n("kGix"),
				r = n("Ssj5");
			const a = {
					fetchStatus: i.a.NONE,
					draftTweets: []
				},
				s = "FETCH_DRAFT_TWEETS",
				l = Object.freeze({
					REQUEST: "rweb/draftTweets/FETCH_DRAFT_TWEETS_REQUEST",
					SUCCESS: "rweb/draftTweets/FETCH_DRAFT_TWEETS_SUCCESS",
					FAILURE: "rweb/draftTweets/FETCH_DRAFT_TWEETS_FAILURE"
				}),
				c = "DELETE_DRAFT_TWEET",
				d = Object.freeze({
					REQUEST: "rweb/draftTweets/DELETE_DRAFT_TWEET_REQUEST",
					SUCCESS: "rweb/draftTweets/DELETE_DRAFT_TWEET_SUCCESS",
					FAILURE: "rweb/draftTweets/DELETE_DRAFT_TWEET_FAILURE"
				});

			function h(e = a, t) {
				switch (t.type) {
					case l.SUCCESS:
						return Object.assign({}, e, {
							fetchStatus: i.a.LOADED,
							draftTweets: t.payload || e.draftTweets
						});
					case l.FAILURE:
						return Object.assign({}, e, {
							fetchStatus: i.a.FAILED
						});
					case l.REQUEST:
						return Object.assign({}, e, {
							fetchStatus: i.a.LOADING
						});
					case d.SUCCESS: {
						const {
							meta: n
						} = t, o = (null == n ? void 0 : n.draftTweetId) && e.draftTweets.filter(e => e.rest_id !== n.draftTweetId);
						return o ? Object.assign({}, e, {
							draftTweets: o
						}) : e
					}
					default:
						return e
				}
			}
			r.a.register({
				draftTweets: h
			});
			const u = e => e.draftTweets.draftTweets,
				p = e => e.draftTweets.fetchStatus,
				m = () => (e, t, {
					api: n
				}) => Object(o.b)(e, {
					request: n.Drafts.fetchDraftTweets,
					params: {}
				})({
					actionTypes: l,
					context: s
				}),
				b = e => (t, n, {
					api: i
				}) => Object(o.b)(t, {
					request: i.Drafts.deleteDraftTweet,
					params: {
						draftTweetId: e
					}
				})({
					actionTypes: d,
					context: c,
					meta: {
						draftTweetId: e
					}
				})
		},
		re8v: function(e, t, n) {
			"use strict";
			var o = n("97Jx"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("v6aA"),
				s = n("IG7M");
			t.a = e => {
				const {
					featureSwitches: t
				} = r.useContext(a.a), n = t.isTrue("topics_new_social_context_enabled");
				return r.createElement(s.a, i()({
					useMoreIcon: n
				}, e))
			}
		},
		rkhm: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("k49u"),
				i = n("fs1G"),
				r = n("LVU8");
			const a = (e = "") => ({
				[o.a.GenericNotFound]: {
					customAction: i.a
				},
				[o.a.NotAuthorizedToViewUser]: {
					customAction: () => {
						Object(r.d)("/" + e, {
							statusCode: 401
						})
					}
				},
				[o.a.StatusViewForbidden]: {
					customAction: () => {
						Object(r.d)("/" + e)
					}
				},
				showToast: !0
			})
		},
		rpbw: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("LdEA"),
				i = n.n(o),
				r = n("ezF+"),
				a = (n("ERkP"), n("VPAj")),
				s = n("1AUC"),
				l = n("aFQM"),
				c = n("KePI"),
				d = n("sYiQ"),
				h = n("Rp9C");
			t.a = e => {
				let {
					shouldDisplayPin: t = !1,
					withThumbnail: n = !1,
					withSubscribe: o = !1,
					withDescription: a = !0
				} = e, s = i()(e, ["shouldDisplayPin", "withThumbnail", "withSubscribe", "withDescription"]);
				const l = Object.assign({
					shouldDisplayPin: t,
					withThumbnail: n,
					withSubscribe: o,
					withDescription: a
				}, s);
				return r.b({
					selectDisplayType: e => e.content.displayType || c.b.List,
					handlers: {
						[c.b.ListTile]: u(),
						[c.b.List]: p(Object.assign({}, l)),
						[c.b.ListWithSubscribe]: p(Object.assign({}, l, {
							withSubscribe: !0
						})),
						[c.b.ListWithPin]: p(Object.assign({}, l, {
							shouldDisplayPin: !0
						}))
					}
				})
			};
			const u = () => r.f({
					component: l.a,
					createProps: ({
						entry: e
					}) => ({
						listId: e.content.id
					}),
					isFocusable: Object(a.a)(!0),
					getScribeDataItem(e) {
						const {
							id: t
						} = e.content;
						return h.a.forList(t)
					}
				}),
				p = e => r.f({
					component: s.a,
					createProps: ({
						entry: t
					}) => {
						const {
							shouldDisplayPin: n
						} = e, o = i()(e, ["shouldDisplayPin"]), r = n ? d.a.Pinning : void 0;
						return Object.assign({
							listId: t.content.id,
							mode: r
						}, o)
					},
					isFocusable: Object(a.a)(!0),
					getScribeDataItem(e) {
						const {
							id: t
						} = e.content;
						return h.a.forList(t)
					}
				})
		},
		rx9x: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			n("IAdD");
			var o = n("Ssj5");
			const i = {
				misinfo: {}
			};
			o.a.register({
				engagementNudges: function(e = i, t) {
					switch (t.type) {
						case "rweb/engagementNudges/SET_TWEET_MISINFO_ACTION_TAKEN":
							return t.payload ? Object.assign({}, e, {
								misinfo: Object.assign({}, e.misinfo, {
									[t.payload]: !0
								})
							}) : e;
						default:
							return e
					}
				}
			});
			const r = (e, t) => !!e.engagementNudges.misinfo[t],
				a = e => ({
					type: "rweb/engagementNudges/SET_TWEET_MISINFO_ACTION_TAKEN",
					payload: e
				})
		},
		"s+nu": function(e, t, n) {
			"use strict";
			e.exports = {
				isString: function(e) {
					return "string" == typeof e
				},
				isObject: function(e) {
					return "object" == typeof e && null !== e
				},
				isNull: function(e) {
					return null === e
				},
				isNullOrUndefined: function(e) {
					return null == e
				}
			}
		},
		s14A: function(e, t, n) {
			"use strict";
			var o = n("pnqf"),
				i = n("MWbm");
			t.a = Object(o.a)(i.a)
		},
		s4rk: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("muX9"),
				r = n("ikiw"),
				a = n("O6Yq");
			class s extends o.PureComponent {
				render() {
					const {
						canonical: e
					} = this.props, t = Object(a.c)(e), n = Object(a.b)(e);
					return o.createElement(i.a, null, o.createElement("link", {
						href: n,
						hrefLang: "x-default",
						rel: "alternate"
					}), r.c.map(e => o.createElement("link", {
						href: t[e],
						hrefLang: e,
						key: e,
						rel: "alternate"
					})))
				}
			}
			t.a = s
		},
		sYiQ: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = Object.freeze({
				Pinning: "Pinning",
				Reordering: "Reordering"
			})
		},
		tJZD: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("3XMw");
			const i = {
				defaultToast: {
					text: n.n(o).a.e1a0aaca
				},
				showToast: !0
			}
		},
		tOzk: function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("zb92");
			t.a = Object(o.a)({
				loader: () => n.e(158).then(n.bind(null, "6N3x"))
			})
		},
		tocL: function(e, t, n) {
			"use strict";
			t.a = Object.freeze({
				Pin: "Pin",
				Retweet: "Retweet",
				Like: "Like",
				Follow: "Follow",
				Moment: "Moment",
				NewTweets: "NewTweets",
				Reply: "Reply",
				Conversation: "Conversation",
				TextOnly: "TextOnly",
				Facepile: "Facepile",
				Feedback: "Feedback",
				Topic: "Topic",
				List: "List",
				Location: "Location"
			})
		},
		tod0: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("t62R"),
				r = n("IJsT"),
				a = (n("IAdD"), n("Lsrn")),
				s = n("shC7"),
				l = n("k/Ka");
			const c = (e = {}) => Object(l.a)("svg", Object.assign({}, e, {
				style: [a.a.root, e.style, s.a.isRTL && a.a.iconRTL],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M22.75 12c0-5.928-4.822-10.75-10.75-10.75S1.25 6.072 1.25 12 6.072 22.75 12 22.75 22.75 17.928 22.75 12zm-10.203 3.85c-.146-.147-.22-.34-.22-.53s.073-.385.22-.53l2.038-2.04H7.813c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.772l-2.038-2.038c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l3.32 3.317c.292.29.292.765 0 1.06l-3.32 3.316c-.293.294-.767.294-1.06 0v.003z"
			})));
			c.metadata = {
				width: 24,
				height: 24
			};
			var d = c;
			const h = n("rHpw").a.create(e => {
				const t = `calc(2 * ${e.spaces.large})`;
				return {
					upper: {
						height: t,
						justifyContent: "flex-end"
					},
					lower: {
						height: t,
						justifyContent: "flex-start"
					},
					container: {
						alignItems: "center"
					},
					arrow: {
						color: e.colors.primary,
						height: e.spaces.large,
						width: e.spaces.large
					}
				}
			});
			t.a = ({
				text: e,
				link: t,
				onClick: n
			}) => o.createElement(r.a, {
				accessibilityLabel: e,
				containerStyle: h.container,
				link: t,
				lower: o.createElement(i.c, {
					color: "primary"
				}, e),
				onClick: n,
				stackLayoutLowerStyle: h.lower,
				stackLayoutUpperStyle: h.upper,
				upper: o.createElement(d, {
					style: h.arrow
				})
			})
		},
		tuLS: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("ERkP"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("MWbm");
			const s = r.a.h63a5c3b;
			t.a = ({
				accessibilityLabel: e = s,
				children: t,
				onClick: n,
				renderMenu: i,
				shouldMountMenu: r,
				style: l,
				testID: c
			}) => {
				const [d, h] = o.useState(!1), u = r || d, p = !d;
				return o.createElement(a.a, {
					accessibilityLabel: e,
					accessibilityRole: "button",
					"aria-expanded": d ? "true" : "false",
					"aria-haspopup": "true",
					onClick: function(e) {
						n && n(e), h(!0)
					},
					style: l,
					testID: c
				}, t, u ? i((function() {
					h(!1)
				}), p) : null)
			}
		},
		txMZ: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("IAdD"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("v6aA"),
				s = n("oQhu"),
				l = n("Rp9C"),
				c = n("7JQg");
			class d extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_getScribeData", Object(s.a)(e => e ? {
						items: [l.a.getUserItem({
							id_str: e
						})],
						profile_id: e
					} : void 0)), i()(this, "_getScribeNamespace", Object(s.a)((e, t) => {
						const n = t ? {
							section: t
						} : void 0;
						return e ? Object.assign({
							page: "me"
						}, n) : Object.assign({
							page: "profile"
						}, n)
					}))
				}
				render() {
					const {
						children: e,
						scribeSection: t,
						userId: n
					} = this.props, o = !!this.context.loggedInUserId && n === this.context.loggedInUserId, i = this._getScribeNamespace(o, t);
					return r.createElement(c.b, {
						data: this._getScribeData(n),
						namespace: i
					}, "function" == typeof e ? e({
						scribeNamespace: i
					}) : e)
				}
			}
			i()(d, "contextType", a.a)
		},
		"u+Xj": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("ylrv");
			class i {
				constructor(e, t, n) {
					this.item = e, this.viewport = t, this.scrollY = n, this._visiblePart = null
				}
				isInViewport() {
					const {
						left: e,
						right: t,
						top: n,
						bottom: o
					} = this.item;
					return e <= this.viewport.right && t >= this.viewport.left && n <= this.viewport.bottom && o >= this.viewport.top
				}
				visibleFraction() {
					return r(this.visiblePart(), this.item)
				}
				viewportOccupiedFraction() {
					return r(this.visiblePart(), this.viewport)
				}
				verticalDistanceToViewportCenter() {
					return Math.abs(s(this.item) - s(this.viewport))
				}
				verticalDistanceToViewportTop() {
					return Math.abs(this.item.top - this.viewport.top)
				}
				verticalOverlap() {
					const e = this.visiblePart();
					return e ? e.height : 0
				}
				visiblePart() {
					return null === this._visiblePart && (this._visiblePart = o.a.intersection(this.item, this.viewport)), this._visiblePart
				}
			}
			const r = (e, t) => e ? a(o.a.area(e), o.a.area(t)) : 0,
				a = (e, t) => 0 !== t ? e / t : 0,
				s = e => e.top + e.height / 2
		},
		u0B7: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("3XMw");
			const i = {
				defaultToast: {
					text: n.n(o).a.ca96fe6e
				},
				showToast: !0
			}
		},
		uCrx: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		uCxL: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("97Jx"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("t62R"),
				c = n("/Ikv"),
				d = n("ir4X"),
				h = n("3XMw"),
				u = n.n(h),
				p = n("mN6z"),
				m = n("htQn"),
				b = n("GBcw"),
				g = n("rHpw"),
				f = n("rOiJ"),
				_ = n("kY28"),
				y = n("cTG8"),
				w = n("UzHQ"),
				v = n("E0cF"),
				C = n("jV+4"),
				E = n("Y6la"),
				T = n("RT39"),
				x = n("shC7"),
				k = n("MWbm");
			const I = u.a.c9d7235d,
				S = u.a.a8b58cf3,
				P = u.a.i5f742fd;
			t.a = e => {
				const {
					tweet: t
				} = e, n = !!t && !v.a.isQuotedTweetUnavailable({
					is_quote_status: !0,
					quoted_status: t
				});
				return t && n ? s.createElement(R, a()({}, e, {
					tweet: t
				})) : s.createElement(w.a, null)
			};
			class R extends s.Component {
				constructor(...e) {
					super(...e), i()(this, "_renderForwardPivot", () => {
						const {
							forwardPivotInfo: e,
							tweet: t
						} = this.props, n = t.softIntervention || e;
						if (n && n.displayType === T.a.SoftIntervention) {
							const {
								displayType: e,
								landingUrl: o,
								text: i
							} = n;
							return s.createElement(T.b, {
								displayType: e,
								inQuoteTweet: !0,
								landingUrl: o,
								text: i,
								tweetId: t.id_str
							})
						}
					}), i()(this, "_handlePress", () => {
						const {
							onPress: e
						} = this.props;
						e && e()
					})
				}
				shouldComponentUpdate(e) {
					return !Object(p.a)(e, this.props)
				}
				render() {
					const {
						tweet: e
					} = this.props;
					return this._isWithheldTweet(e) ? this._renderWithheldTweet() : this._renderTweet()
				}
				_renderTweet() {
					const {
						nativeID: e,
						style: t,
						tweet: n,
						withLink: o
					} = this.props;
					return s.createElement(k.a, {
						nativeID: e
					}, s.createElement(l.c, {
						style: g.a.visuallyHidden
					}, I), s.createElement(m.a, {
						link: o ? {
							pathname: n.permalink,
							anchorless: !0
						} : void 0,
						onPress: this._handlePress,
						style: [O.quoteTweetContainer, t],
						withInteractiveStyling: !!o,
						withOutsetFocusRing: !0
					}, this._renderTweetContent(), this._renderForwardPivot()))
				}
				_renderTweetContent() {
					const {
						isCondensed: e
					} = this.props;
					return s.createElement(k.a, null, this._renderHeader(), e ? this._renderTweetContentCondensed() : this._renderTweetContentExpanded())
				}
				_renderTweetContentCondensed() {
					return s.createElement(k.a, {
						style: O.condensedContentBody
					}, this.shouldRenderMedia ? s.createElement(k.a, {
						style: [O.marginTopXXSmall, O.condensedMediaSide]
					}, this._renderTweetMedia(!0)) : null, s.createElement(k.a, {
						style: O.condensedContentSide
					}, this._renderTextContent(!0)))
				}
				_renderTweetContentExpanded() {
					return s.createElement(s.Fragment, null, this._renderTextContent(!1), this.shouldRenderMedia ? s.createElement(k.a, {
						style: [O.marginTopXXSmall]
					}, this._renderTweetMedia(!1)) : null)
				}
				_renderHeader() {
					const {
						tweet: e
					} = this.props, t = e.user || {};
					return s.createElement(k.a, {
						style: [t.highlightedLabel ? O.attributionWrapperFlexStart : O.attributionWrapperCenter, O.attributionWrapper]
					}, this._renderUserName(t), s.createElement(l.c, {
						color: "gray600",
						dir: x.a.isRTL ? "rtl" : "ltr",
						style: O.timestampWrapper
					}, " ", "· ", this._renderTimestamp(e.created_at)))
				}
				_renderTextContent(e) {
					const {
						tweet: t
					} = this.props;
					return s.createElement(k.a, {
						style: O.textContentPadding
					}, t.self_thread ? null : this._renderReplyContext(), this._renderTweetText(e), this._renderShowLinks())
				}
				_renderShowLinks() {
					const {
						tweet: e
					} = this.props;
					return this.shouldRenderShowPollText ? this._renderShowText(P) : e.self_thread ? this._renderShowText(S) : null
				}
				_renderTweetText(e) {
					const {
						tweet: t,
						withInlineMedia: n
					} = this.props, o = e ? 5 : void 0;
					return s.createElement(y.a, {
						displayTextRange: t.display_text_range,
						entities: t.entities,
						lang: t.lang,
						numberOfLines: o,
						quotedTweetPermalink: t.quoted_status_permalink,
						style: O.marginTopXXSmall,
						text: t.text,
						withCardLinks: !0,
						withMediaLinks: !n || t.possibly_sensitive,
						withQuoteLinks: !0
					})
				}
				_renderUserName(e) {
					const {
						withUserHoverCard: t
					} = this.props;
					return s.createElement(k.a, {
						style: O.userNameRoot
					}, s.createElement(k.a, {
						style: O.userNameWrapper
					}, s.createElement(C.a, {
						isProtected: e.protected,
						isVerified: e.verified,
						name: e.name,
						profileImageUrl: e.profile_image_url_https,
						screenName: e.screen_name,
						withHoverCard: t
					})), e.highlightedLabel ? s.createElement(d.a, {
						label: e.highlightedLabel
					}) : null)
				}
				_renderTweetMedia(e) {
					const {
						forwardPivotInfo: t,
						loggedInUserId: n,
						shouldShowAltLabelAlways: o,
						tweet: i,
						withLink: r
					} = this.props, a = e ? 1 : 16 / 9, l = e ? 1 : void 0, c = {
						displayOptions: {
							badgeConfiguration: e ? {
								hideDuration: !1,
								hideDataSize: !0,
								hideViewCount: !0
							} : void 0
						},
						hidePreviewPlayButton: e
					};
					return s.createElement(f.a, {
						authorId: i.user.id_str,
						cacheLocationKey: "quote_tweet",
						containerAspectRatio: a,
						displayMediaTags: !1,
						forwardPivotInfo: i.softIntervention || t,
						hasSensitiveMedia: i.possibly_sensitive,
						hideAcceptOverlay: e,
						loggedInUserId: n,
						mediaDetails: i.extended_entities.media,
						mediaTagsLink: i.permalink + "/media_tags",
						preventPlayback: e,
						shouldShowAltLabelAlways: o,
						showBorder: !1,
						showRoundCorners: !1,
						singleImageMaxAspectRatio: l,
						singleImageMinAspectRatio: l,
						tweetId: i.id_str,
						videoAspectRatio: a,
						videoOptions: c,
						withLink: r,
						withPostPlayback: !0
					})
				}
				_renderTimestamp(e) {
					return s.createElement(b.a, {
						timestamp: e
					})
				}
				_renderReplyContext() {
					const {
						tweet: e
					} = this.props;
					return e.in_reply_to_status_id_str ? s.createElement(_.a, {
						displayTextRange: e.display_text_range,
						inReplyToName: e.in_reply_to_name,
						inReplyToScreenName: e.in_reply_to_screen_name,
						inReplyToUserIdStr: e.in_reply_to_user_id_str,
						linkType: _.a.ReplyContextLinkTypes.none,
						style: O.marginTopXXSmall,
						tweetPermalink: e.permalink,
						userMentionsEntities: e.entities.user_mentions
					}) : null
				}
				_renderShowText(e) {
					return s.createElement(l.c, {
						color: "link",
						style: O.marginTopXXSmall
					}, e)
				}
				_renderWithheldTweet() {
					const {
						style: e,
						tweet: t
					} = this.props;
					return s.createElement(k.a, {
						style: e
					}, s.createElement(E.a, {
						displayTextRange: t.display_text_range,
						entities: t.withheld_entities || t.entities,
						inline: !0,
						lang: t.lang,
						text: t.withheld_text || t.text
					}))
				}
				get shouldRenderMedia() {
					const {
						tweet: e
					} = this.props;
					return this._hasMedia(e) && !e.possibly_sensitive
				}
				get shouldRenderShowPollText() {
					const {
						tweet: e
					} = this.props;
					return e.card && c.a.isPollCard(e.card.name)
				}
				_hasMedia(e) {
					const {
						extended_entities: t
					} = e, {
						withInlineMedia: n
					} = this.props;
					return !!(n && t && t.media && t.media.length)
				}
				_isWithheldTweet(e) {
					return !!e.withheld_scope
				}
			}
			i()(R, "defaultProps", {
				onPress: void 0,
				withInlineMedia: !0,
				withLink: !0,
				withUserHoverCard: !0
			});
			const O = g.a.create(e => ({
				marginTopXXSmall: {
					marginTop: e.spaces.xxSmall
				},
				quoteTweetContainer: {
					overflow: "hidden",
					minHeight: e.spaces.jumbo,
					borderColor: e.colors.nestedBorderColor,
					borderWidth: e.borderWidths.small,
					borderRadius: e.borderRadii.xLarge
				},
				userNameRoot: {
					flexShrink: 1,
					overflow: "hidden"
				},
				userNameWrapper: {
					alignItems: "flex-start",
					maxWidth: "100%"
				},
				attributionWrapper: {
					flexShrink: 1,
					flexDirection: "row",
					marginHorizontal: e.spaces.xSmall,
					marginTop: e.spaces.xSmall
				},
				attributionWrapperCenter: {
					alignItems: "center"
				},
				attributionWrapperFlexStart: {
					alignItems: "flex-start"
				},
				timestampWrapper: {
					flexShrink: 0,
					whiteSpace: "pre"
				},
				textContentPadding: {
					marginHorizontal: e.spaces.xSmall,
					marginBottom: e.spaces.xSmall
				},
				condensedMediaSide: {
					flex: 2,
					alignSelf: "flex-start",
					marginVertical: e.spaces.xSmall,
					marginLeft: e.spaces.xSmall,
					overflow: "hidden",
					borderRadius: e.borderRadii.xLarge,
					borderStyle: "solid",
					borderColor: "transparent"
				},
				condensedContentSide: {
					flex: 8,
					flexBasis: "0%"
				},
				condensedContentBody: {
					flexDirection: "row"
				}
			}))
		},
		uIZp: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("k49u"),
				s = n("1YZw"),
				l = n("rxPX"),
				c = n("0KEI"),
				d = n("RqPI"),
				h = n("G6rE");
			const u = (e, t) => h.e.select(e, t.userId);
			var p = Object(l.a)().propsFromState(() => ({
					isLoggedIn: d.e,
					user: u
				})).propsFromActions(() => ({
					addToast: s.b,
					cancelPendingFollow: h.e.cancelPendingFollow,
					createLocalApiErrorHandler: Object(c.d)("FOLLOW_USER_BUTTON"),
					follow: h.e.follow,
					unblock: h.e.unblock,
					unfollow: h.e.unfollow
				})).withAnalytics(),
				m = n("3XMw"),
				b = n.n(m),
				g = n("Tp1h"),
				f = n("Rp9C"),
				_ = n("Jkc4"),
				y = e => e + "-follow",
				w = e => e + "-unfollow",
				v = e => e + "-unblock",
				C = e => e + "-cancel",
				E = n("u0B7"),
				T = n("tJZD"),
				x = n("PSpH"),
				k = n("TnY3"),
				I = n("eb3s"),
				S = n("CGyZ");
			const P = b.a.hbe4feb4,
				R = b.a.df4c86bf,
				O = b.a.bba40ffa,
				A = b.a.f558829d,
				M = b.a.a6941096,
				L = b.a.j24c37b2,
				D = b.a.if8cd2a3,
				j = b.a.b597226f;
			class N extends r.Component {
				constructor(e) {
					super(e), i()(this, "_handleClose", () => {
						this.setState({
							showDialog: !1,
							dialogText: void 0,
							dialogHeadline: void 0
						})
					}), i()(this, "_handleCancelPendingFollow", () => {
						const {
							cancelPendingFollow: e,
							createLocalApiErrorHandler: t,
							user: n
						} = this.props;
						n && e(n.id_str).catch(t({
							defaultToast: {
								text: j
							},
							showToast: !0
						}))
					}), i()(this, "_handleLoggedInFollow", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							follow: n,
							user: o,
							promotedContent: i
						} = this.props;
						o && n(o.id_str, {
							promotedContent: i
						}).then(() => (o.protected && e({
							text: P({
								screenName: o.screen_name
							})
						}), this._scribeAction("follow")), t(Object.assign({}, this._followApiErrorHandlingConfiguration, {
							showToast: !0
						})))
					}), i()(this, "_handleLoggedOutFollow", () => {
						this._scribeAction("follow_attempt")
					}), i()(this, "_handleUnblock", () => {
						const {
							createLocalApiErrorHandler: e,
							unblock: t,
							user: n,
							promotedContent: o
						} = this.props;
						n && t(n.id_str, {
							promotedContent: o
						}).catch(e(E.a))
					}), i()(this, "_handleUnfollow", () => {
						const {
							createLocalApiErrorHandler: e,
							unfollow: t,
							user: n,
							promotedContent: o
						} = this.props;
						if (n) return t(n.id_str, {
							promotedContent: o
						}).catch(e(T.a)), this._scribeAction("unfollow")
					}), this.state = {
						showDialog: !1
					}
				}
				componentDidMount() {
					this._followApiErrorHandlingConfiguration = Object.assign({}, x.a, {
						[a.a.UserMustBeAlcoholAgeScreened]: {
							customAction: () => {
								this.setState({
									showDialog: !0,
									dialogText: D,
									dialogHeadline: O
								})
							}
						},
						[a.a.CannotFollowFromCountry]: {
							customAction: () => {
								this.setState({
									showDialog: !0,
									dialogText: M,
									dialogHeadline: O
								})
							}
						},
						[a.a.BirthdateRequired]: {
							customAction: () => {
								this.setState({
									showDialog: !0,
									dialogText: A,
									dialogHeadline: R
								})
							}
						}
					})
				}
				render() {
					const {
						isLoggedIn: e,
						size: t,
						style: n,
						user: o,
						showRelationshipChangeConfirmation: i,
						userId: a
					} = this.props, {
						showDialog: s,
						dialogText: l,
						dialogHeadline: c
					} = this.state, d = null == o ? void 0 : o.screen_name, h = d ? "/" + d : "", u = {
						follow: y(a),
						unfollow: w(a),
						cancel: C(a),
						unblock: v(a)
					};
					return !!o && r.createElement(r.Fragment, null, s ? r.createElement(I.a, {
						confirmButtonLabel: L,
						headline: c,
						onCancel: this._handleClose,
						onConfirm: this._handleClose,
						text: l,
						withCancelButton: !1
					}) : null, r.createElement(_.a, {
						displayMode: g.a.follow,
						postLoginPath: h,
						userFullName: o.name,
						userId: a
					}, a => r.createElement(S.a, {
						isBlocking: o.blocking,
						isFollowRequestSent: o.follow_request_sent,
						isFollowing: o.following,
						name: d,
						onCancelPendingFollow: a(this._handleCancelPendingFollow),
						onFollow: a(this._handleLoggedInFollow, this._handleLoggedOutFollow),
						onUnblock: a(this._handleUnblock),
						onUnfollow: a(this._handleUnfollow),
						showRelationshipChangeConfirmation: e && i,
						size: t,
						style: n,
						testIDs: u,
						type: "user"
					})))
				}
				_scribeAction(e) {
					const {
						analytics: t,
						location: n,
						promotedContent: o,
						user: i
					} = this.props, r = i ? [f.a.getUserItem(i, o)] : [], a = n.query && n.query.screen_name ? {
						items: r,
						context: "profile_intent"
					} : {
						items: r
					};
					return t.scribe({
						action: e,
						data: a
					})
				}
			}
			t.a = Object(k.a)(p(N))
		},
		upxf: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M15.857 12.015l-3.28-.483V6.417c0-.414-.335-.75-.75-.75s-.75.336-.75.75v5.755c0 .364.26.667.604.735.014.005.293.052.293.052l3.666.54c.036.004.073.007.11.007.365 0 .685-.268.74-.64.06-.41-.223-.792-.633-.852z"
			}), o.createElement("path", {
				d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"v//M": function(e, t, n) {
			"use strict";
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("3XMw"),
				c = n.n(l),
				d = n("4WF4"),
				h = n("ZjLa"),
				u = n("G1WX"),
				p = n("rHpw");
			const m = c.a.aa6e330f,
				b = p.a.create(e => ({
					icon: {
						color: e.colors.gray600,
						fontSize: e.spaces.large
					}
				}));
			t.a = e => {
				let {
					retryMessage: t
				} = e, n = a()(e, ["retryMessage"]);
				const o = h.a.isOnline();
				return s.createElement(u.a, i()({}, n, {
					icon: o ? void 0 : s.createElement(d.a, {
						style: b.icon
					}),
					retryMessage: o ? t : m
				}))
			}
		},
		"v/3V": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			n("3voH"), n("kYxP"), n("Cm4o");
			const o = Object.freeze({
				success: "success",
				failure: "failure",
				skipParamCollision: "skip_param_collision"
			});
			var i = n("IRHH");

			function r(e, t) {
				try {
					var n;
					const i = new URL(e),
						r = Object.entries(null != (n = null == t ? void 0 : t.urlParams) ? n : {}).some(([e, t]) => i.searchParams.has(e) && i.searchParams.get(e) !== t);
					return r ? o.skipParamCollision : e.startsWith("http") ? o.success : o.failure
				} catch (e) {
					return o.failure
				}
			}

			function a(e, t, n) {
				const a = e.isTrue("responsive_web_promoted_tweet_param_append_enabled"),
					s = e.isTrue("responsive_web_promoted_tweet_url_rewrite_enabled"),
					l = Object(i.a)(t),
					c = r(l, n);
				if ((a || s) && c !== o.failure) {
					const e = new URL(l);
					if (a && c === o.success) {
						var d;
						const t = Object.entries(null != (d = null == n ? void 0 : n.urlParams) ? d : {});
						for (const [n, o] of t) "string" == typeof o && e.searchParams.set(n, o)
					}
					return s && "DCM" === (null == n ? void 0 : n.urlOverrideType) ? function(e, t) {
						return e.startsWith("http") && t && t.urlOverride ? `${t.urlOverride}?${e}` : e
					}(e.href, n) : e.href
				}
				return l
			}
		},
		vCw9: function(e, t, n) {
			"use strict";
			var o = n("wrlS"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("6Rrp"),
				s = (n("IAdD"), n("ERkP")),
				l = n("Lsrn"),
				c = n("k/Ka");
			const d = (e = {}) => Object(c.a)("svg", Object.assign({}, e, {
				style: [l.a.root, e.style],
				viewBox: "0 0 24 24"
			}), s.createElement("g", null, s.createElement("path", {
				d: "M13.06 12l2.796-2.795c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0L12 10.938 9.205 8.144c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06L10.938 12l-2.796 2.795c-.293.293-.293.768 0 1.06.146.147.338.22.53.22s.384-.072.53-.22L12 13.062l2.795 2.796c.146.146.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L13.06 12z"
			}), s.createElement("path", {
				d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
			})));
			d.metadata = {
				width: 24,
				height: 24
			};
			var h = d;
			const u = r.a.a7d8afea;
			let p = r.a.f0caa1a9,
				m = r.a.eaf63156;
			const b = r.a.aa6fcee5;
			let g = r.a.cf6b3e21,
				f = r.a.b7fbb4c0,
				_ = r.a.d90efe06,
				y = r.a.d1e92eba;
			"channel_follow" === o.b.getStringValue("home_timeline_spheres_copy_variant") && (p = r.a.ef212543, g = r.a.fd454a1f, m = r.a.b8a57c36, f = r.a.e707c2b7, _ = r.a.g15ff34f, y = r.a.ab46658a);
			t.a = e => {
				const {
					list: t,
					hideSubtext: n = !1
				} = e, o = t.muting, i = {
					text: o ? b : u,
					Icon: o ? a.a : h,
					onClick: () => w(e),
					subText: o ? f : m
				};
				return n && (i.text = o ? g : p, i.subText = void 0), i
			};
			const w = e => {
				const {
					addToast: t,
					scribe: n,
					list: o,
					toggleMute: i
				} = e;
				if (!o || !o.id_str) return;
				const {
					muting: r,
					id_str: a
				} = o, s = r ? _ : y, l = r ? "unmute_list" : "mute_list";
				i({
					listId: a,
					mute: !r
				}).then(() => {
					t({
						text: s
					})
				}), n({
					action: "click",
					element: l
				})
			}
		},
		vMjK: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Y
			})), n.d(t, "c", (function() {
				return Q
			}));
			n("jQ/y"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("v6aA"),
				s = n("EbOo"),
				l = n("CaKu"),
				c = n("1YZw"),
				d = n("rxPX"),
				h = n("0KEI"),
				u = n("0pUJ"),
				p = n("RqPI"),
				m = n("G6rE");
			var b = Object(d.a)().propsFromState(() => ({
					perspective: p.g
				})).propsFromActions(() => ({
					addToast: c.b,
					block: m.e.block,
					createLocalApiErrorHandler: Object(h.d)("USER_ACTION_SHEET_CONTAINER"),
					disableRetweets: m.e.disableRetweets,
					enableRetweets: m.e.enableRetweets,
					mute: u.a,
					unblock: m.e.unblock,
					unmute: m.e.unmute
				})).withAnalytics(),
				g = n("3XMw"),
				f = n.n(g),
				_ = n("gUG0"),
				y = n("Rp9C"),
				w = n("u0B7"),
				v = n("1bnC"),
				C = n("xiBm"),
				E = n("d4kb"),
				T = n("P2xQ"),
				x = "block",
				k = "mute",
				I = n("fn9Y"),
				S = n("mjJ+"),
				P = n("GygS"),
				R = n("I/9y"),
				O = n("/WPq"),
				A = n("78ol"),
				M = n("+1/s"),
				L = n("zIWA"),
				D = n("jlPL");
			const j = f.a.hef5960b,
				N = f.a.ibd0b841,
				F = f.a.c645618c,
				B = f.a.b9c26480,
				U = f.a.b2e20eab,
				H = f.a.b62e432d,
				z = f.a.iac556df,
				W = f.a.b21ccfa9,
				V = f.a.j7bb1a42;
			class K extends r.Component {
				constructor(e, t) {
					super(e, t), i()(this, "_getAddOrRemoveFromListAction", E.a.bind(null, this.context.featureSwitches)), i()(this, "_viewListsLabel", "channel_follow" === this.context.featureSwitches.getStringValue("home_timeline_spheres_copy_variant") ? f.a.e9a77815 : f.a.h5ef9bc8), i()(this, "_getShareAction", () => ({
						Icon: I.a,
						text: j,
						onClick: () => {
							this.props.onClose(), this.props.onShare()
						}
					})), i()(this, "_getCopyAction", () => ({
						Icon: R.a,
						text: N,
						onClick: () => {
							this.props.onClose(), this.props.onCopyLink()
						}
					})), i()(this, "_getPinAction", () => ({
						text: z,
						onClick: () => {
							this.props.onClose(), this.props.onPinUser && this.props.onPinUser()
						}
					})), i()(this, "_getUnpinAction", () => ({
						text: W,
						onClick: () => {
							this.props.onClose(), this.props.onUnpinUser && this.props.onUnpinUser()
						}
					})), i()(this, "_viewLists", () => {
						this.props.onClose(), this.props.onViewLists()
					}), i()(this, "_viewMoments", () => {
						this.props.onClose(), this.props.onViewMoments()
					}), i()(this, "_addToRemoveFromList", () => {
						this.props.onClose(), this.props.onAddToRemoveFromList()
					}), i()(this, "_muteUser", () => {
						this.props.onMuteUser(), this.props.onClose()
					}), i()(this, "_unmuteUser", () => {
						this.props.onUnmuteUser(), this.props.onClose()
					}), i()(this, "_blockUser", e => {
						this.setState({
							confirmationContext: "block",
							confirmation: e
						})
					}), i()(this, "_unblockUser", e => {
						this.setState({
							confirmationContext: "unblock",
							confirmation: e
						})
					}), i()(this, "_handleConfirm", () => {
						switch (this.state.confirmationContext) {
							case "block":
								this.props.onBlockUser();
								break;
							case "unblock":
								this.props.onUnblockUser()
						}
						this.props.onClose()
					}), this._shareSupported = void 0 !== window.navigator.share, this.state = {
						confirmation: void 0
					}
				}
				render() {
					const {
						isFixed: e,
						onClose: t
					} = this.props, {
						confirmation: n,
						confirmationContext: o
					} = this.state;
					return n && o ? Object(P.e)({
						confirmation: n,
						onClose: t,
						handleConfirm: this._handleConfirm
					}) : r.createElement(S.a, {
						isFixed: e,
						items: this._getActionItems(),
						onCloseRequested: t
					})
				}
				_getActionItems() {
					const {
						onPinUser: e,
						onUnpinUser: t,
						perspective: n,
						user: o
					} = this.props, i = [];
					return o.blocked_by || (!o.following && o.id_str !== n && o.protected || (i.unshift(this._getAddOrRemoveFromListAction(o, this._addToRemoveFromList)), i.push(this._getViewListsAction(), this._getViewMomentsAction()), i.unshift(this._getTopicsAction())), o.protected || o.blocking || (this._shareSupported && i.push(this._getShareAction()), l.a.isAvailable() && i.push(this._getCopyAction()))), o.id_str !== n && (e && i.push(this._getPinAction()), t && i.push(this._getUnpinAction()), o.following && i.unshift(this._getRetweetsAction()), !o.blocking && i.push(this._getMuteOrUnmuteAction()), i.push(this._getBlockAction()), i.push(this._getReportAction())), i
				}
				_getBlockAction() {
					const {
						user: e
					} = this.props, t = {
						user: e,
						source: P.f.PROFILE,
						testID: x,
						blockAction: this._blockUser,
						unblockAction: this._unblockUser
					}, {
						onClick: n,
						testID: o,
						Icon: i,
						text: r
					} = Object(P.d)(t);
					return {
						Icon: i,
						text: r,
						onClick: n,
						testID: o
					}
				}
				_getViewListsAction() {
					const {
						user: e
					} = this.props;
					return {
						Icon: O.a,
						text: this._viewListsLabel,
						onClick: this._viewLists,
						link: `/${e.screen_name}/lists`
					}
				}
				_getViewMomentsAction() {
					const {
						user: e
					} = this.props;
					return {
						Icon: A.a,
						text: F,
						onClick: this._viewMoments,
						link: `/${e.screen_name}/moments`
					}
				}
				_getTopicsAction() {
					const {
						user: e
					} = this.props;
					return {
						Icon: M.a,
						text: B,
						link: `/${e.screen_name}/topics`
					}
				}
				_getMuteOrUnmuteAction() {
					const {
						user: e
					} = this.props, {
						Icon: t,
						text: n,
						onClick: o
					} = Object(T.a)(e, this._muteUser, this._unmuteUser);
					return {
						Icon: t,
						text: n,
						onClick: o,
						testID: k
					}
				}
				_getReportAction() {
					const {
						user: e
					} = this.props;
					return {
						Icon: L.a,
						text: V({
							screenName: e.screen_name
						}),
						onClick: () => {
							this.props.onClose(), this.props.onReportUser()
						}
					}
				}
				_getRetweetsAction() {
					const {
						user: e
					} = this.props;
					return {
						Icon: D.a,
						text: e.want_retweets ? H : U,
						onClick: () => {
							e.want_retweets ? this._disableRetweets() : this._enableRetweets()
						}
					}
				}
				_enableRetweets() {
					this.props.onEnableRetweets(), this.props.onClose()
				}
				_disableRetweets() {
					this.props.onDisableRetweets(), this.props.onClose()
				}
			}
			i()(K, "contextType", a.a);
			var G = K,
				q = n("TnY3"),
				X = n("KdqI");
			const Y = f.a.a9fd20be,
				Q = f.a.e133be4e,
				J = f.a.b3e6e1e6,
				$ = f.a.f88553c8,
				Z = f.a.e6b88aba,
				ee = f.a.c6ea308b,
				te = f.a.c1eb0fe5;
			class ne extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "_getMuteSuccessMessage", T.b.bind(null, this.context.featureSwitches)), i()(this, "_getUnmuteSuccessMessage", T.d.bind(null, this.context.featureSwitches)), i()(this, "_handleAddToRemoveFromList", () => {
						this._scribeAction("add_to_list")
					}), i()(this, "_handleReportUser", () => {
						const {
							analytics: e,
							history: t,
							promotedContent: n,
							user: o
						} = this.props;
						this._scribeAction("report"), t.push({
							pathname: "/i/report/user/" + o.id_str,
							state: {
								clientReferer: window.location.pathname,
								promotedContent: n,
								scribeNamespace: e.contextualScribeNamespace
							}
						})
					}), i()(this, "_handleBlockUser", () => {
						const {
							addToast: e,
							block: t,
							createLocalApiErrorHandler: n,
							promotedContent: o,
							user: i
						} = this.props;
						t(i.id_str, {
							promotedContent: o
						}).then(() => {
							e({
								action: {
									label: Q,
									onAction: this._handleUnblockUser
								},
								text: Y
							})
						}, n(s.a)), this._scribeAction("block")
					}), i()(this, "_handleUnblockUser", () => {
						const {
							createLocalApiErrorHandler: e,
							promotedContent: t,
							unblock: n,
							user: o
						} = this.props;
						n(o.id_str, {
							promotedContent: t
						}).catch(e(w.a)), this._scribeAction("unblock")
					}), i()(this, "_handleMuteUser", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							mute: n,
							user: o
						} = this.props;
						n(o.id_str).then(() => {
							e({
								action: {
									label: v.a,
									onAction: this._handleUnmuteUser
								},
								text: this._getMuteSuccessMessage(o.screen_name)
							})
						}, t({
							showToast: !0
						})), this._scribeAction("mute_user")
					}), i()(this, "_handleUnmuteUser", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							unmute: n,
							user: o
						} = this.props;
						n(o.id_str).then(() => {
							e({
								text: this._getUnmuteSuccessMessage(o.screen_name)
							})
						}, t({
							showToast: !0
						})), this._scribeAction("unmute_user")
					}), i()(this, "_handleViewLists", () => {
						this._scribeAction("view_lists")
					}), i()(this, "_handleViewMoments", () => {
						this._scribeAction("view_moments")
					}), i()(this, "_handleDisableRetweets", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							disableRetweets: n,
							user: o
						} = this.props, {
							name: i
						} = o;
						n(o.id_str).then(() => {
							e({
								text: J({
									name: i
								})
							})
						}, t(C.a)), this._scribeAction("disable_retweets")
					}), i()(this, "_handleEnableRetweets", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							enableRetweets: n,
							user: o
						} = this.props, {
							name: i
						} = o;
						n(o.id_str).then(() => {
							e({
								text: Z({
									name: i
								})
							})
						}, t(C.a)), this._scribeAction("enable_retweets")
					}), i()(this, "_handleShare", () => {
						const {
							user: e
						} = this.props, t = `https://twitter.com/${e.screen_name}?s=20`, n = {
							title: ee({
								fullName: e.name,
								screenName: e.screen_name
							}),
							text: te({
								fullName: e.name,
								bio: e.description
							}),
							url: t
						};
						window.navigator.share && window.navigator.share(n).then(() => {
							this._scribeAction("share")
						}).catch(() => {
							this._scribeAction("share_error")
						})
					}), i()(this, "_handleCopyLink", () => {
						const {
							user: e
						} = this.props;
						l.a.setString(`https://twitter.com/${e.screen_name}?s=20`), this.props.addToast({
							text: $
						}), this._scribeAction("copy_link")
					}), i()(this, "_handlePinUser", () => {
						const {
							user: e
						} = this.props;
						Object(_.a)().then(({
							default: t
						}) => t.pinnedTiles.pinUser(e).then(() => this._scribeAction("pin")))
					}), i()(this, "_handleUnpinUser", () => {
						const {
							user: e
						} = this.props;
						Object(_.a)().then(({
							default: t
						}) => t.pinnedTiles.unpinUser(e).then(() => this._scribeAction("unpin")))
					})
				}
				render() {
					const {
						analytics: e,
						isFixed: t,
						onClose: n,
						perspective: o,
						promotedContent: i,
						user: a
					} = this.props;
					return r.createElement(G, {
						isFixed: t,
						onAddToRemoveFromList: this._handleAddToRemoveFromList,
						onBlockUser: this._handleBlockUser,
						onClose: n,
						onCopyLink: this._handleCopyLink,
						onDisableRetweets: this._handleDisableRetweets,
						onEnableRetweets: this._handleEnableRetweets,
						onMuteUser: this._handleMuteUser,
						onPinUser: Object(X.e)() && !Object(X.c)(a) ? this._handlePinUser : void 0,
						onReportUser: this._handleReportUser,
						onShare: this._handleShare,
						onUnblockUser: this._handleUnblockUser,
						onUnmuteUser: this._handleUnmuteUser,
						onUnpinUser: Object(X.e)() && Object(X.c)(a) ? this._handleUnpinUser : void 0,
						onViewLists: this._handleViewLists,
						onViewMoments: this._handleViewMoments,
						perspective: o,
						promotedContent: i,
						scribeNamespace: e.contextualScribeNamespace,
						user: a
					})
				}
				_scribeAction(e, t = "user_action") {
					const {
						analytics: n,
						user: o
					} = this.props, i = {
						items: [y.a.getUserItem(o)]
					};
					return n.scribe({
						component: t,
						action: e,
						data: i
					})
				}
			}
			i()(ne, "contextType", a.a);
			t.b = Object(q.a)(b(ne))
		},
		vYiB: function(e, t, n) {
			"use strict";
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("fs1G"),
				s = n("gZV8");
			class l extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "state", {
						isOffscreen: !1
					}), i()(this, "_handlePlacementChange", e => {
						const {
							onOffscreenChange: t,
							visibleThreshold: n
						} = this.props, o = e.visibleFraction() <= n;
						this.setState({
							isOffscreen: o
						}), t && t({
							isOffscreen: o
						})
					}), i()(this, "_setPlacementRef", e => {
						this._placementRef = e, this._placementRef && this._placementRef.sample(this._handlePlacementChange)
					})
				}
				render() {
					const {
						children: e,
						isDisabled: t,
						style: n
					} = this.props, {
						isOffscreen: o
					} = this.state, i = "function" == typeof e ? e({
						isOffscreen: o
					}) : e;
					return r.createElement(s.a, {
						onPlacementChange: t ? a.a : this._handlePlacementChange,
						ref: this._setPlacementRef,
						style: n
					}, i)
				}
			}
			i()(l, "defaultProps", {
				visibleThreshold: 0
			}), t.a = l
		},
		vbWy: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("k49u"),
				i = n("3XMw"),
				r = n.n(i),
				a = n("fs1G");
			const s = r.a.c730cd08,
				l = r.a.f1d600ab,
				c = r.a.d80d33c5,
				d = r.a.j3403c05,
				h = {
					defaultToast: {
						text: l
					},
					[o.a.BlockedUserError]: {
						toast: {
							text: s
						}
					},
					[o.a.DuplicateStatusError]: {
						customAction: a.a
					},
					[o.a.InvalidRetweetForStatus]: {
						toast: {
							text: c
						}
					},
					[o.a.OverStatusUpdateLimit]: {
						toast: {
							text: d
						}
					},
					showToast: !0
				}
		},
		vqbU: function(e, t, n) {
			"use strict";
			var o = n("ERkP");
			const i = o.createContext(!1);
			t.a = i
		},
		w02m: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M17.253 22.75c-.166 0-.33-.055-.466-.162L9.74 17H7.254c-1.24 0-2.25-1.01-2.25-2.25v-5.5c0-1.24 1.01-2.25 2.25-2.25H9.74l7.047-5.588c.225-.18.534-.215.792-.087.258.125.423.387.423.675v20c0 .288-.165.55-.424.675-.104.05-.216.075-.327.075zm-10-14.25c-.413 0-.75.337-.75.75v5.5c0 .413.337.75.75.75h2.75c.17 0 .333.058.466.162l6.033 4.786V3.552L10.47 8.338c-.134.104-.298.162-.467.162h-2.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		"wCd/": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("MtXG"),
				s = n("3XMw"),
				l = n.n(s);
			const c = {
				truncateNumber: l.a.d58baa7e,
				formatNumber: l.a.ia24dc8c
			};
			class d extends r.PureComponent {
				render() {
					const {
						onPress: e,
						followersCount: t,
						friendsCount: n,
						screenName: o,
						style: i,
						withLink: s
					} = this.props, d = e => c.formatNumber(e), h = e => e >= 1e4 ? c.truncateNumber(e) : c.formatNumber(e);
					return r.createElement(a.a.Group, {
						style: i
					}, r.createElement(a.a, {
						hoverLabel: {
							label: d(n)
						},
						link: s ? `/${o}/following` : void 0,
						onPress: e
					}, r.createElement(l.a.I18NFormatMessage, {
						$i18n: "g3ed1dd4"
					}, r.createElement(a.a.Value, null, l.a.e8d6014e({
						formattedCount: h(n)
					})), r.createElement(a.a.Label, null, l.a.ab7f3895({
						count: n
					})))), r.createElement(a.a, {
						hoverLabel: {
							label: d(t)
						},
						link: s ? `/${o}/followers` : void 0,
						onPress: e
					}, r.createElement(l.a.I18NFormatMessage, {
						$i18n: "i06724fa"
					}, r.createElement(a.a.Value, null, l.a.b53c61a0({
						formattedCount: h(t)
					})), r.createElement(a.a.Label, null, l.a.a81dc154({
						count: t
					})))))
				}
			}
			i()(d, "defaultProps", {
				withLink: !0
			})
		},
		wTX1: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("LdEA"),
				a = n.n(r),
				s = n("KEM+"),
				l = n.n(s),
				c = n("ERkP"),
				d = n("38/B"),
				h = n("t62R"),
				u = n("BcsE"),
				p = (n("aWzz"), n("rHpw")),
				m = n("MWbm");
			const b = "up",
				g = "down";
			class f extends c.Component {
				constructor(e, t) {
					super(e, t), l()(this, "_setupAnimation", () => {
						this.setState((e, t) => {
							const n = Object(u.a)(e.pendingCount) ? e.pendingCount > (e.count || 0) ? b : g : b;
							return {
								count: e.pendingCount,
								oldText: e.text,
								pendingCount: null,
								pendingText: null,
								text: e.pendingText,
								transitionDirection: n
							}
						})
					}), l()(this, "_animationFinished", () => {
						this._mounted && this.setState((e, t) => ({
							animating: !1,
							oldText: null
						}))
					}), this.state = {
						animating: !1,
						count: e.count,
						pendingCount: null,
						pendingText: null,
						oldText: null,
						text: e.children,
						transitionDirection: b
					}
				}
				componentDidMount() {
					this._mounted = !0
				}
				componentDidUpdate(e, t) {
					!1 === t.animating && !0 === this.state.animating ? setTimeout(this._animationFinished, 800) : null === t.oldText && this.state.oldText ? window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
						this._mounted && this.setState((e, t) => ({
							animating: !0
						}))
					})) : !0 === t.animating && !1 === this.state.animating && this.state.pendingText && this._setupAnimation()
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (e.children !== this.state.pendingText) {
						e.children === this.state.text || Object(u.a)(e.count) && this.state.count === e.count ? this.setState((e, t) => ({
							pendingCount: null,
							pendingText: null
						})) : (this.setState((t, n) => ({
							pendingCount: e.count,
							pendingText: e.children
						})), this.state.animating || this._setupAnimation())
					}
				}
				componentWillUnmount() {
					this._mounted = !1
				}
				shouldComponentUpdate(e, t) {
					return this.state !== t
				}
				render() {
					const e = this.props,
						{
							containerStyle: t,
							style: n
						} = e,
						o = a()(e, ["children", "containerStyle", "count", "style"]),
						{
							animating: r
						} = this.state,
						s = _[this.state.transitionDirection],
						l = this.state.oldText && !d.a.reducedMotionEnabled,
						u = !r && this.state.oldText && !d.a.reducedMotionEnabled;
					return c.createElement(m.a, {
						style: [y.root, t]
					}, l ? c.createElement(h.c, i()({}, o, {
						style: [y.oldText, r ? s.post : s.active, n]
					}), this.state.oldText) : null, c.createElement(h.c, i()({}, o, {
						style: [u ? s.pre : s.active, n]
					}), this.state.text))
				}
			}
			l()(f, "displayName", "@twitter/SlidingAppText"), f.propTypes = {};
			const _ = {};
			[b, g].forEach(e => {
				_[e] = p.a.create(t => ({
					active: {
						transitionProperty: "transform",
						transitionDuration: "0.3s",
						transform: [{
							translate3d: "0, 0, 0"
						}]
					},
					pre: {
						transform: [{
							translate3d: `0, ${e===b?"":"-"}${t.lineHeight}em, 0`
						}]
					},
					post: {
						transform: [{
							translate3d: `0, ${e===b?"-":""}${t.lineHeight}em, 0`
						}],
						transitionProperty: "transform",
						transitionDuration: "0.3s"
					}
				}))
			});
			const y = p.a.create({
				root: {
					overflow: "hidden"
				},
				oldText: {
					position: "absolute"
				}
			});
			t.a = f
		},
		wwsH: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("38/B"),
				s = n("t62R"),
				l = n("QX9J"),
				c = n("I8UQ"),
				d = n("3XMw"),
				h = n.n(d),
				u = n("I4+6"),
				p = n("cm6r"),
				m = n("DQLs"),
				b = n("cHvH"),
				g = n("wTX1"),
				f = n("rHpw"),
				_ = n("shC7"),
				y = n("MWbm");
			const w = h.a.d58baa7e,
				v = h.a.e8d93005;
			class C extends r.PureComponent {
				constructor(...e) {
					super(...e), i()(this, "_renderButton", e => {
						const {
							activeColor: t,
							ActiveIcon: n,
							backgroundColor: o,
							iconSize: i,
							isActive: s,
							isDisabled: l,
							isFaded: d,
							onAnimationEnd: h,
							onError: b,
							showAnimation: g,
							transitionAnimationUrl: _
						} = this.props, w = s && n ? n : this.props.Icon, v = u.a.generate({
							backgroundColor: f.a.theme.colors[o],
							color: f.a.theme.colors[t],
							insetFocusRing: !0
						});
						let C;
						return C = !a.a.reducedMotionEnabled && n && g ? r.createElement(m.a, {
							animation: _ || c.a,
							animationContainerStyle: E[i],
							animationStyle: k,
							onAnimationEnd: h,
							onError: b
						}) : r.createElement(w, {
							style: [E[i], !l && d && x.iconFaded]
						}), r.createElement(y.a, null, r.createElement(p.a, {
							interactiveStyles: v,
							interactivityState: e,
							style: [f.a.absoluteFill, T[o], !l && x.iconBackground, "small" === i && x.iconSmallBoundingBox]
						}), C)
					}), i()(this, "_renderCount", () => {
						const {
							count: e,
							withCount: t
						} = this.props;
						return t ? r.createElement(b.a, null, ({
							windowWidth: t
						}) => r.createElement(g.a, {
							count: e,
							size: "small",
							style: [x.count, t < 320 && x.countMicro]
						}, e > 0 ? t < 320 ? v(e) : w(e) : "")) : null
					}), i()(this, "_handlePress", e => {
						const {
							onPress: t,
							renderWrapper: n
						} = this.props;
						n || (e.stopPropagation(), t && t(e))
					})
				}
				render() {
					const {
						accessibilityLabel: e,
						accessible: t,
						activeColor: n,
						clientEventContext: o,
						color: i,
						enableKeyboardShortcuts: c,
						isActive: d,
						isDisabled: h,
						keyboardShortcut: u,
						link: b,
						renderMenu: g,
						renderWrapper: f = r.Fragment,
						style: w,
						testID: v
					} = this.props, C = !a.a.reducedMotionEnabled;
					return r.createElement(l.a.Provider, {
						token: null == o ? void 0 : o.token,
						viewType: null == o ? void 0 : o.viewType
					}, r.createElement(y.a, {
						style: [x.root, w]
					}, r.createElement(f, null, r.createElement(p.a, {
						accessibilityLabel: e,
						accessible: t,
						"aria-haspopup": g ? "true" : void 0,
						disabled: h,
						enableKeyboardShortcuts: c,
						interactiveStyles: null,
						keyboardShortcut: u,
						link: b,
						onClick: this._handlePress,
						renderMenu: g,
						style: [x.triggerAreaRoot, x.outlineNone],
						testID: v
					}, e => {
						const {
							isHovered: t,
							isPressed: o,
							isFocused: a
						} = e, l = d || t || o || a;
						return r.createElement(s.c, {
							color: l ? n : i,
							dir: _.a.isRTL ? "rtl" : "ltr",
							style: [x.inner, l && "blue500" === n && x.blue500]
						}, this._renderButton(e), this._renderCount())
					})), C ? r.createElement(m.a.Prepare, null) : null))
				}
			}
			i()(C, "defaultProps", {
				activeColor: "blue500",
				backgroundColor: "transparent",
				color: "gray600",
				count: 0,
				isDisabled: !1,
				iconSize: "normal"
			});
			const E = f.a.create(e => ({
					small: {
						height: "1em",
						width: "1em"
					},
					normal: {
						height: "1.25em",
						width: "1.25em"
					},
					large: {
						height: "1.5em",
						width: "1.5em"
					}
				})),
				T = f.a.create(e => ({
					transparent: {
						backgroundColor: e.colors.transparent
					},
					translucentBlack77: {
						backgroundColor: e.colors.translucentBlack77
					}
				})),
				x = f.a.create(e => ({
					root: {
						flexDirection: "row",
						justifyContent: "flex-start"
					},
					triggerAreaRoot: {
						justifyContent: "center",
						minHeight: e.lineHeight,
						overflow: "visible",
						userSelect: "none"
					},
					inner: {
						alignItems: "center",
						display: "flex",
						justifyContent: "flex-start",
						transitionProperty: "color",
						transitionDuration: "0.2s",
						whiteSpace: "nowrap"
					},
					count: {
						paddingHorizontal: e.spaces.xSmall,
						minWidth: `calc(1em + 2 * ${e.spaces.xSmall})`
					},
					countMicro: {
						marginLeft: e.spaces.micro
					},
					iconFaded: {
						opacity: .4
					},
					iconBackground: {
						borderRadius: e.borderRadii.infinite,
						margin: -8
					},
					iconSmallBoundingBox: {
						margin: -6
					},
					outlineNone: {
						outlineStyle: "none"
					},
					blue500: {
						color: e.colors.blue500
					},
					white: {
						color: e.colors.white
					}
				})),
				k = {
					width: "224.5%",
					height: "224.5%"
				}
		},
		x0mb: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		x5Pi: function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			}));
			var o = n("tocL");
			const i = (e, t) => e.retweeted_status ? r(e, t) : void 0,
				r = (e, t) => {
					if (e.retweeted_status) return {
						contextType: o.a.Retweet,
						isSelfRetweet: e.user.id_str === t,
						name: e.user.name,
						screenName: e.user.screen_name
					}
				},
				a = ({
					isCellWithProminentSocialContext: e,
					socialContext: t,
					topic: n
				}) => {
					const {
						generalContext: i,
						topicContext: r
					} = t || {};
					return r && !i ? {
						contextType: e ? o.a.TextOnly : o.a.Topic,
						landingUrl: {
							url: "twitter://topics_timeline?id=" + r.topicId,
							urlType: "DeepLink"
						},
						text: null == n ? void 0 : n.name,
						topicContext: r
					} : i
				},
				s = {
					contextType: o.a.Pin
				}
		},
		xXop: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("0JOx"),
				s = n("3XMw"),
				l = n.n(s),
				c = n("cm6r"),
				d = n("t62R"),
				h = n("rHpw"),
				u = n("Lsrn"),
				p = n("k/Ka");
			const m = (e = {}) => Object(p.a)("svg", Object.assign({}, e, {
				style: [u.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M23.2 9.75h-1.588c-.777-1.352-2.22-2.275-3.888-2.275-1.41 0-2.654.664-3.48 1.682-.652-.41-1.418-.657-2.244-.657s-1.592.247-2.245.656c-.826-1.017-2.07-1.682-3.48-1.682-1.668 0-3.11.923-3.888 2.275H.8c-.414 0-.75.335-.75.75s.336.75.75.75h1.05c-.04.236-.074.476-.074.724 0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5c0-.536-.11-1.043-.283-1.52.433-.285.95-.454 1.507-.454s1.074.17 1.507.454c-.173.477-.283.984-.283 1.52 0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5c0-.248-.034-.487-.073-.725h1.05c.414 0 .75-.337.75-.75s-.336-.75-.75-.75zM6.275 14.975c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm8.45-3c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z"
			})));
			m.metadata = {
				width: 24,
				height: 24
			};
			var b = m,
				g = n("6s7X");
			const f = l.a.ibd021f1,
				_ = ({
					link: e,
					onClick: t
				}) => r.createElement(c.a, {
					link: e,
					onClick: t,
					style: [y.container, y.containerCondensed]
				}, ({
					isHovered: e
				}) => r.createElement(r.Fragment, null, r.createElement(b, {
					style: y.glassIcon
				}), r.createElement(d.c, null, f), r.createElement(g.a, {
					style: [e ? y.iconPrimaryColor : y.iconGrayColor, y.rightIcon]
				}))),
				y = h.a.create(e => ({
					container: {
						alignItems: "center",
						backgroundColor: e.colors.gray0,
						borderRadius: e.borderRadii.small,
						margin: e.spaces.xSmall
					},
					containerCondensed: {
						flexDirection: "row",
						padding: e.spaces.xSmall
					},
					glassIcon: {
						alignSelf: "center",
						borderRadius: "100%",
						backgroundColor: e.colors.primary,
						color: "white",
						fontSize: 13,
						marginRight: 7,
						padding: 2
					},
					iconPrimaryColor: {
						color: e.colors.primary
					},
					iconGrayColor: {
						color: e.colors.gray300
					},
					rightIcon: {
						fontSize: e.fontSizes.normal,
						marginLeft: e.spaces.xxSmall,
						paddingLeft: e.spaces.xxSmall
					}
				}));
			var w = n("v6aA"),
				v = n("k49u");
			const C = l.a.ae5c603c,
				E = l.a.h5634a0b,
				T = {
					defaultToast: {
						text: l.a.b657101c
					},
					[v.a.DuplicateBookmark]: {
						toast: {
							text: E
						}
					},
					[v.a.ProtectedTweetBookmarkError]: {
						toast: {
							text: C
						}
					},
					showToast: !0
				};
			var x = n("6/RC"),
				k = n("CaKu"),
				I = n("ge3j"),
				S = n("1YZw"),
				P = n("rxPX"),
				R = n("0KEI"),
				O = n("Q8CU"),
				A = n("BQZD"),
				M = n("P1r1"),
				L = n("XOJV"),
				D = n("D5n3"),
				j = n("LQyW"),
				N = n("rx9x"),
				F = n("TuTd"),
				B = n("jL08");
			const U = e => I.l(e, ""),
				H = (e, t) => Object(F.a)(e, t.tweet.id_str),
				z = (e, t) => Object(N.a)(e, t.tweet.id_str);
			var W = Object(P.a)().propsFromState(() => ({
					dataSaverMode: M.k,
					composerData: U,
					liveCounts: H,
					hashflags: j.c,
					misinfoNudgeActionTaken: z
				})).adjustStateProps(({
					dataSaverMode: e,
					composerData: t,
					liveCounts: n,
					hashflags: o,
					misinfoNudgeActionTaken: i
				}, {
					tweet: r
				}) => ({
					dataSaverMode: e,
					liveCounts: n,
					misinfoNudgeActionTaken: i,
					composerHasData: t.length > 0 && !Object(O.a)(t[0]),
					likeTransitionAnimation: Object(j.b)(r, o)
				})).propsFromActions(() => ({
					addToast: S.b,
					createLocalApiErrorHandler: Object(R.d)("TWEET_ACTIONS_BAR_CONTAINER"),
					wasArticleVisited: B.b,
					onBookmark: L.a.bookmark,
					onLike: L.a.like,
					onRetweet: L.a.retweet,
					onUnbookmark: L.a.unbookmark,
					onUnlike: L.a.unlike,
					onUnretweet: D.a,
					removeTweetsFromBookmarksTimeline: A.c,
					updateCounts: L.a.updateCounts,
					resetDraft: I.i,
					setArticlesVisited: B.a,
					setTweetMisinfoActionTaken: N.b,
					updateLiveCounts: F.b
				})).withAnalytics(),
				V = n("7JQg"),
				K = n("eaaO"),
				G = n("wrlS"),
				q = n("MWbm"),
				X = n("/yvb"),
				Y = n("0weh"),
				Q = n("iySH");
			const J = ({
					buttonLabel: e,
					condensedText: t,
					expanded: n,
					heading: o,
					link: i,
					onPress: a,
					subheading: s
				}) => n ? r.createElement(q.a, {
					style: [$.container, $.containerExpanded]
				}, r.createElement(Y.a, {
					style: [$.iconPrimaryColor, $.iconExpanded]
				}), r.createElement(d.c, {
					align: "center",
					size: "xLarge",
					style: $.text,
					weight: "bold"
				}, o), r.createElement(d.c, {
					align: "center",
					color: "gray600",
					style: $.text
				}, s), r.createElement(X.a, {
					link: i,
					onPress: a,
					type: "primary"
				}, e)) : r.createElement(c.a, {
					link: i,
					onPress: a,
					style: [$.container, $.containerCondensed]
				}, ({
					isHovered: e
				}) => r.createElement(r.Fragment, null, r.createElement(Y.a, {
					style: [$.iconPrimaryColor, $.iconCondensed]
				}), r.createElement(d.c, null, t), r.createElement(Q.a, {
					style: [e ? $.iconPrimaryColor : $.iconGrayColor, $.rightIcon]
				}))),
				$ = h.a.create(e => ({
					container: {
						alignItems: "center",
						backgroundColor: e.colors.gray0,
						borderRadius: e.borderRadii.small,
						margin: e.spaces.xSmall
					},
					containerExpanded: {
						paddingBottom: e.spaces.small,
						paddingHorizontal: e.spaces.small,
						paddingTop: e.spaces.medium
					},
					containerCondensed: {
						flexDirection: "row",
						padding: e.spaces.xSmall
					},
					iconPrimaryColor: {
						color: e.colors.primary
					},
					iconGrayColor: {
						color: e.colors.gray300
					},
					iconExpanded: {
						fontSize: e.fontSizes.xLarge,
						paddingBottom: e.spaces.xSmall
					},
					iconCondensed: {
						fontSize: e.fontSizes.large,
						paddingRight: e.spaces.xxSmall
					},
					rightIcon: {
						fontSize: e.fontSizes.normal,
						paddingLeft: e.spaces.xxSmall
					},
					text: {
						paddingBottom: e.spaces.small
					}
				}));
			var Z = n("4hQ9"),
				ee = n("OrGc"),
				te = n("XEYr"),
				ne = n("RxYA"),
				oe = n("oQhu"),
				ie = n("vbWy"),
				re = n("Rp9C"),
				ae = n("mqpi"),
				se = n("4bW+");
			const le = {
					defaultToast: {
						text: l.a.fda78a70
					},
					showToast: !0
				},
				ce = {
					defaultToast: {
						text: l.a.j10ec2a0
					},
					showToast: !0
				};
			var de = n("IO7v"),
				he = n("TnY3"),
				ue = n("feu+"),
				pe = n("Wk1j"),
				me = n("E0cF"),
				be = n("JHm9"),
				ge = n("fn9Y"),
				fe = n("wD1h"),
				_e = n("feOz"),
				ye = n("eb3s"),
				we = n("HwrL");
			const ve = (e = {}) => Object(p.a)("svg", Object.assign({}, e, {
				style: [u.a.root, e.style],
				viewBox: "0 0 24 24"
			}), r.createElement("g", null, r.createElement("path", {
				d: "M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z"
			})));
			ve.metadata = {
				width: 24,
				height: 24
			};
			var Ce = ve,
				Ee = n("SOvA"),
				Te = n("I/9y"),
				xe = n("Tp1h");
			const ke = l.a.dc356a23,
				Ie = l.a.b6f822b9,
				Se = l.a.f14df406,
				Pe = l.a.f61c4bbf,
				Re = l.a.d9837138,
				Oe = l.a.ff9348b8,
				Ae = l.a.ebad846b,
				Me = l.a.h438b014,
				Le = l.a.d91695cb,
				De = l.a.b59d8d10,
				je = l.a.h5d6c720,
				Ne = l.a.ba370e34,
				Fe = l.a.d9034c72,
				Be = l.a.f6c7249b,
				Ue = l.a.f67de45a,
				He = l.a.f277e949,
				ze = l.a.f88553c8,
				We = l.a.b5b36724,
				Ve = l.a.g449dfaa,
				Ke = l.a.cf7a1b47,
				Ge = l.a.ha753208,
				qe = l.a.d17df547,
				Xe = l.a.bac8f4c1,
				Ye = l.a.f755f71f,
				Qe = l.a.d9203a89,
				Je = l.a.dd87d328,
				$e = l.a.af5cd00d,
				Ze = l.a.acbeb6e0,
				et = l.a.afe7ba26,
				tt = l.a.ae2c8a1e,
				nt = l.a.jead3bc1,
				ot = l.a.ff25aba5,
				it = e => {
					switch (e) {
						case "reply":
							return tt;
						case "like":
							return et;
						case "share":
							return nt;
						case "analytics":
							return ot;
						default:
							return ""
					}
				},
				rt = () => r.createElement(l.a.I18NFormatMessage, {
					$i18n: "a205d98e"
				}, r.createElement(d.c, {
					color: "blue500",
					link: "https://help.twitter.com/en/rules-and-policies/enforcement-options",
					withInteractiveStyling: !0
				}, l.a.c6bf718b)),
				at = {
					component: "soft_intervention_nudge"
				},
				st = e => {
					const t = document.createElement("textarea");
					return t.innerHTML = e, t.value
				};
			class lt extends r.PureComponent {
				constructor(e, t) {
					super(e, t), i()(this, "_renderEngagementNudge", Object(oe.a)((e, t, n) => {
						if (n && Object(we.c)(e, n)) {
							const o = $e,
								i = Ze,
								a = n.text.text,
								s = n.landingUrl.url,
								l = this._handleSetMisinfoActionTaken(e),
								c = e === we.a.like ? Qe : Je;
							return r.createElement(J, {
								buttonLabel: o,
								condensedText: i,
								expanded: t,
								heading: a,
								key: "engagement_nudge",
								link: s,
								onPress: l,
								subheading: c
							})
						}
						return null
					})), i()(this, "_handleMenuCancel", e => () => {
						this._scribeNudgeAction({
							tweetActionName: e,
							action: "cancel"
						})
					}), i()(this, "_handleSetMisinfoActionTaken", e => () => {
						const {
							addToast: t,
							misinfoNudgeActionTaken: n,
							setTweetMisinfoActionTaken: o,
							tweet: i
						} = this.props;
						this._scribeNudgeAction({
							tweetActionName: e,
							element: "read_article",
							action: "click"
						}), n || (o(i.id_str), t({
							text: Ze
						}))
					}), i()(this, "_handleHideConfirmation", () => {
						this.setState({
							showReplyDiscardTweetConfirmation: !1,
							showRetweetDiscardTweetConfirmation: !1
						})
					}), i()(this, "_renderNonCompliantEducation", () => {
						const {
							showNonCompliantActionsEducation: e,
							nonCompliantEducationAction: t
						} = this.state;
						return e ? r.createElement(ue.a, {
							actionLabel: Ye,
							graphicDisplayMode: "none",
							headline: it(t),
							onAction: this._handleCloseEducationPrompt,
							onClose: this._handleCloseEducationPrompt,
							subtext: r.createElement(rt, null)
						}) : null
					}), i()(this, "_handleCloseEducationPrompt", () => {
						this.setState({
							showNonCompliantActionsEducation: !1
						})
					}), i()(this, "_handleOpenEducationPrompt", e => () => {
						this.setState({
							showNonCompliantActionsEducation: !0,
							nonCompliantEducationAction: e
						})
					}), i()(this, "_handleRetweetPress", () => {
						const {
							misinfoNudgeActionTaken: e
						} = this.props, {
							showArticleNudge: t
						} = this.state;
						if (!this.context.loggedInUserId) return this._scribeAction(pe.a.RETWEET), void this._showLoginSignupSheet(xe.a.retweet);
						const n = me.a.getOriginalTweet(this.props.tweet),
							o = G.b.isTrue("project_friday_enabled");
						n.retweeted || !o || this._shouldMisinfoNudgeForceActionMenu(we.a.retweet) || t || this._handleQuoteTweet(), this._scribeNudgeAction({
							tweetActionName: we.a.retweet,
							element: e ? "after_read" : void 0,
							action: "impression"
						})
					}), i()(this, "_handleRetweet", () => {
						const {
							createLocalApiErrorHandler: e,
							misinfoNudgeActionTaken: t,
							onRetweet: n,
							promotedContent: o,
							tweet: i
						} = this.props;
						this._scribeAction(pe.a.RETWEET), this._scribeNudgeAction({
							tweetActionName: we.a.retweet,
							element: t ? "retweet_after_read" : "retweet",
							action: "click"
						}), this._modRetweets(1), n(i.id_str, {
							promotedContent: o
						}).then(() => {
							this.props.addToast({
								ariaOnly: !0,
								text: Be
							})
						}).catch(t => {
							this._modRetweets(-1), e(ie.a)(t)
						})
					}), i()(this, "_handleUnretweet", () => {
						const {
							createLocalApiErrorHandler: e,
							onUnretweet: t,
							promotedContent: n,
							tweet: o
						} = this.props;
						this._scribeAction(pe.a.UNRETWEET), this._modRetweets(-1), t(o.id_str, {
							promotedContent: n
						}).then(() => {
							this.props.addToast({
								ariaOnly: !0,
								text: Ue
							})
						}).catch(t => {
							this._modRetweets(1), e(de.a)(t)
						})
					}), i()(this, "_handleQuoteTweet", () => {
						const {
							composerHasData: e,
							misinfoNudgeActionTaken: t,
							promotedContent: n,
							tweet: o,
							history: i
						} = this.props;
						if (this._scribeAction(pe.a.QUOTE), this._scribeNudgeAction({
								tweetActionName: we.a.retweet,
								element: t ? "retweet_with_comment_after_read" : "retweet_with_comment",
								action: "click"
							}), e) this.setState({
							showRetweetDiscardTweetConfirmation: !0
						});
						else if (this._prioritizeQuoteTweetEnabled && !this._shouldMisinfoNudgeForceActionMenu(we.a.retweet)) {
							const e = me.a.getOriginalTweet(o);
							i.push({
								pathname: "/compose/tweet",
								state: {
									quotedStatus: e,
									promotedContent: n
								}
							})
						}
					}), i()(this, "_handleConfirmQuoteTweet", () => {
						const {
							resetDraft: e
						} = this.props;
						e(), this._handleHideConfirmation()
					}), i()(this, "_handleLikeMenuPress", () => {
						const {
							misinfoNudgeActionTaken: e
						} = this.props;
						this._scribeNudgeAction({
							tweetActionName: we.a.like,
							element: e ? "after_read" : void 0,
							action: "impression"
						})
					}), i()(this, "_handleLike", () => {
						const {
							loggedInUserId: e
						} = this.context, {
							createLocalApiErrorHandler: t,
							misinfoNudgeActionTaken: n,
							onLike: o,
							onUnlike: i,
							promotedContent: r,
							tweet: a
						} = this.props, s = !me.a.getOriginalTweet(a).favorited;
						e ? s ? (this._scribeNudgeAction({
							tweetActionName: we.a.like,
							element: n ? "like_after_read" : "like",
							action: "click"
						}), this._modLikes(1), o(a.id_str, {
							promotedContent: r
						}).then(() => {
							this.props.addToast({
								ariaOnly: !0,
								text: Ne
							})
						}).catch(e => {
							this._modLikes(-1), t(te.a)(e)
						})) : (this._modLikes(-1), i(a.id_str, {
							promotedContent: r
						}).then(() => {
							this.props.addToast({
								ariaOnly: !0,
								text: Fe
							})
						}).catch(e => {
							this._modLikes(1), t(ce)(e)
						})) : this._showLoginSignupSheet(xe.a.like), this._scribeAction(s ? "favorite" : "unfavorite")
					}), i()(this, "_handleBookmarkTweet", () => {
						const {
							createLocalApiErrorHandler: e,
							tweet: t
						} = this.props, n = me.a.getOriginalTweet(t);
						this.props.onBookmark(n.id_str).then(() => {
							this.props.addToast({
								action: {
									label: He,
									onAction: this._handleViewBookmarks
								},
								text: De
							})
						}, t => {
							e(T)(t), this._scribeAction("bookmark_error")
						}), this._scribeAction("bookmark")
					}), i()(this, "_handleUnbookmarkTweet", () => {
						const {
							createLocalApiErrorHandler: e,
							tweet: t
						} = this.props, n = me.a.getOriginalTweet(t);
						this.props.onUnbookmark(n.id_str).then(() => {
							this.props.removeTweetsFromBookmarksTimeline({
								[n.id_str]: !0
							}), this.props.addToast({
								text: je
							})
						}, t => {
							e(le)(t), this._scribeAction("unbookmark_error")
						}), this._scribeAction("unbookmark")
					}), i()(this, "_handleViewBookmarks", () => {
						const {
							history: e
						} = this.props;
						e.push({
							pathname: "/i/bookmarks"
						})
					}), i()(this, "_handleAnalyticsPress", () => {
						this._scribeAction(be.a.ANALYTICS)
					}), i()(this, "_handleReplyPress", () => {
						const {
							onReplyPress: e
						} = this.props;
						this._showReplyComposer(), e && e()
					}), i()(this, "_showReplyComposer", () => {
						const {
							loggedInUserId: e
						} = this.context, {
							history: t,
							promotedContent: n,
							tweet: o
						} = this.props;
						this._scribeAction("reply"), e ? t.push({
							state: {
								inReplyToStatusId: o.id_str,
								isSelfThreadReply: Object(Z.a)({
									tweet: o,
									loggedInUserId: e
								}),
								promotedContent: n
							},
							pathname: "/compose/tweet"
						}) : this._showLoginSignupSheet(xe.a.reply)
					}), i()(this, "_handleConfirmReplyTweet", () => {
						const {
							resetDraft: e
						} = this.props;
						e(), this._handleHideConfirmation(), this._showReplyComposer()
					}), i()(this, "_handleDMShare", () => {
						const {
							loggedInUserId: e
						} = this.context, {
							history: t,
							misinfoNudgeActionTaken: n,
							tweet: o
						} = this.props;
						this._scribeAction("share_via_dm"), this._scribeNudgeAction({
							tweetActionName: we.a.share,
							element: n ? "share_tweet_after_read" : "share_tweet",
							action: "click"
						}), e ? t.push({
							state: {
								tweetAttachment: me.a.getOriginalTweet(o)
							},
							pathname: "/messages/compose"
						}) : this._showLoginSignupSheet(xe.a.dmshare)
					}), i()(this, "_handleCopyLink", () => {
						const {
							misinfoNudgeActionTaken: e
						} = this.props;
						k.a.setString(`https://twitter.com${this.props.tweet.permalink}?s=20`), this.props.addToast({
							text: ze
						}), this._scribeAction("copy_link"), this._scribeNudgeAction({
							tweetActionName: we.a.share,
							element: e ? "share_tweet_after_read" : "share_tweet",
							action: "click"
						})
					}), i()(this, "_handleSharePress", () => {
						const {
							misinfoNudgeActionTaken: e
						} = this.props;
						this._scribeAction("share_menu_click"), this._scribeNudgeAction({
							tweetActionName: we.a.share,
							element: e ? "after_read" : void 0,
							action: "impression"
						})
					}), i()(this, "_handleShare", () => {
						const {
							misinfoNudgeActionTaken: e,
							tweet: t
						} = this.props, n = me.a.getOriginalTweet(t), o = `https://twitter.com${n.permalink}?s=20`, i = {
							title: Me({
								fullName: n.user.name,
								screenName: n.user.screen_name
							}),
							text: Le({
								fullName: n.user.name,
								screenName: n.user.screen_name,
								tweet: st(n.text)
							}),
							url: o
						};
						navigator.share(i).then(() => {
							this._scribeAction("share"), this._scribeNudgeAction({
								tweetActionName: we.a.share,
								element: e ? "share_tweet_after_read" : "share_tweet",
								action: "click"
							})
						}).catch(() => {
							this._scribeAction("share_error")
						})
					}), i()(this, "_replyWrapper", ({
						children: e
					}) => {
						const {
							displayStyle: t,
							tweet: n
						} = this.props, o = me.a.getOriginalTweet(n);
						if ("limited_replies" !== o.limited_actions || !o.conversation_control) return e;
						const i = o.conversation_control.policy,
							a = o.conversation_control.conversation_owner.screen_name,
							s = "block" !== t;
						return r.createElement(K.a, {
							screenName: a,
							scribeElement: "disabled_reply",
							style: ct.conversationControlsAnchor,
							tweetId: s ? o.id_str : void 0,
							value: i
						}, e)
					}), i()(this, "_handleCloseLoginSignupSheet", () => {
						this.setState({
							showLoginSignupSheet: !1
						})
					}), i()(this, "_handleArticleClicked", () => {
						var e;
						const {
							setArticlesVisited: t,
							tweet: n
						} = this.props;
						t(null == n || null == (e = n.card) ? void 0 : e.url), this.setState({
							showArticleNudge: !1
						})
					}), i()(this, "_getShareMenuActionItems", Object(oe.a)((e, t, n) => {
						const {
							loggedInUserId: o
						} = this.context, i = e.retweeted_status || e, {
							user: r
						} = i, a = [];
						return !r.protected && !Object(ae.a)(e, "send_via_dm") && a.push(this._getDmShareAction()), o && (n || i.isBookmarked ? a.push(this._getUnbookmarkTweetAction()) : Object(ae.a)(e, "add_to_bookmarks") || a.push(this._getBookmarkTweetAction())), !r.protected && x.canUseDOM && k.a.isAvailable() && !Object(ae.a)(e, "share_tweet_via") && a.push(this._getCopyLinkAction(t)), !r.protected && !Object(ae.a)(e, "share_tweet_via") && this._shareSupported && a.push(this._getShareAction(t)), a
					})), i()(this, "_getShareAction", Object(oe.a)(e => ({
						text: e ? Oe : Ae,
						onClick: this._handleShare,
						Icon: ge.a
					}))), i()(this, "_getBookmarkTweetAction", Object(oe.a)(() => ({
						text: ke,
						onClick: this._handleBookmarkTweet,
						Icon: Ce
					}))), i()(this, "_getUnbookmarkTweetAction", Object(oe.a)(() => ({
						text: Re,
						onClick: this._handleUnbookmarkTweet,
						Icon: Ce
					}))), i()(this, "_getDmShareAction", Object(oe.a)(() => ({
						text: Pe,
						onClick: this._handleDMShare,
						Icon: Ee.a
					}))), i()(this, "_getCopyLinkAction", Object(oe.a)(e => ({
						text: e ? Se : Ie,
						onClick: this._handleCopyLink,
						Icon: Te.a
					}))), i()(this, "_getRetweetWithCommentLink", Object(oe.a)((e, t) => ({
						pathname: "/compose/tweet",
						state: {
							quotedStatus: e,
							promotedContent: t
						}
					}))), i()(this, "_showLoginSignupSheet", e => {
						this.setState({
							showLoginSignupSheet: !0,
							loginSignupSheetDisplayMode: e
						})
					}), i()(this, "_modLikes", e => {
						const {
							liveCounts: t,
							updateLiveCounts: n,
							tweet: o
						} = this.props;
						t.likeCount && n({
							tweetId: o.id_str,
							liveCounts: {
								likeCount: t.likeCount + e
							}
						})
					}), i()(this, "_modRetweets", e => {
						const {
							liveCounts: t,
							updateLiveCounts: n,
							tweet: o
						} = this.props;
						t.retweetCount && n({
							tweetId: o.id_str,
							liveCounts: {
								retweetCount: t.retweetCount + e
							}
						})
					}), i()(this, "_handleLivePipelineUpdate", e => {
						const {
							like_count: t,
							quote_count: n,
							retweet_count: o,
							reply_count: i
						} = e.tweet_engagement, {
							liveCounts: r,
							updateLiveCounts: a
						} = this.props, s = Object.assign({}, r);
						t && (s.likeCount = Math.max(r.likeCount || 0, parseInt(t, 10))), n && (s.quoteCount = Math.max(r.quoteCount || 0, parseInt(n, 10))), o && (s.retweetCount = Math.max(r.retweetCount || 0, parseInt(o, 10))), i && (s.replyCount = Math.max(r.replyCount || 0, parseInt(i, 10))), a({
							tweetId: this.props.tweet.id_str,
							liveCounts: s
						})
					}), i()(this, "_saveStateCounts", () => {
						const {
							tweet: {
								id_str: e
							},
							updateCounts: t,
							liveCounts: n
						} = this.props, {
							likeCount: o,
							retweetCount: i,
							replyCount: r
						} = n;
						(o || i || r) && t(e, n)
					}), this.state = {
						loginSignupSheetDisplayMode: void 0,
						showArticleNudge: !1,
						showLoginSignupSheet: !1,
						showReplyDiscardTweetConfirmation: !1,
						showRetweetDiscardTweetConfirmation: !1,
						showNonCompliantActionsEducation: !1,
						nonCompliantEducationAction: void 0
					}, this._shareSupported = x.canUseDOM && void 0 !== window.navigator.share, this._prioritizeQuoteTweetEnabled = !0 === G.b.getValueWithoutScribeImpression("project_friday_enabled"), this._articleNudgeEnabled = G.b.isTrue("responsive_web_article_nudge_enabled")
				}
				componentDidMount() {
					const {
						wasArticleVisited: e,
						tweet: t
					} = this.props;
					if (this._initializeLivePipeline(), this._articleNudgeEnabled && e) {
						var n, o, i, r;
						const a = null == t || null == (n = t.card) || null == (o = n.binding_values) || null == (i = o.domain) ? void 0 : i.string_value;
						e({
							url: null == t || null == (r = t.card) ? void 0 : r.url,
							domain: a
						}).then(e => {
							this.setState({
								showArticleNudge: !!e
							})
						})
					}
				}
				componentDidUpdate(e, t) {
					e.tweet.id_str !== this.props.tweet.id_str && (this._livePipelineSubscription && this._livePipelineSubscription.teardown(), this._initializeLivePipeline()), e.articleClicked !== this.props.articleClicked && this.setState({
						showArticleNudge: !1
					})
				}
				componentWillUnmount() {
					this._livePipelineSubscription && this._livePipelineSubscription.teardown(), this._saveStateCounts()
				}
				render() {
					const {
						actionSize: e,
						activeColor: t,
						color: n,
						composerHasData: o,
						displayStyle: i,
						enableKeyboardShortcuts: a,
						forwardPivotInfo: s,
						likeTransitionAnimation: l,
						misinfoNudgeActionTaken: c,
						nativeID: d,
						promotedContent: h,
						style: u,
						tweet: p,
						withActionsDisabled: m,
						withAnalyticsAction: b,
						withRemoveFromBookmarks: g,
						withCount: f,
						liveCounts: _
					} = this.props, {
						loggedInUserId: y
					} = this.context, {
						showArticleNudge: w,
						showLoginSignupSheet: v,
						showRetweetDiscardTweetConfirmation: C,
						showReplyDiscardTweetConfirmation: E
					} = this.state, T = me.a.getOriginalTweet(p), x = this._getRetweetWithCommentLink(T, h), k = Object(ae.a)(T, "view_tweet_activity"), I = Object(ae.a)(T, "reply"), S = !T.favorited && Object(ae.a)(T, "like"), P = Object(ae.a)(T, "retweet"), R = I && "limited_replies" === T.limited_actions, O = this._getShareMenuActionItems(p, h, g), A = O.length < 1, M = A && "non_compliant" === T.limited_actions, L = !T.retweeted && this._prioritizeQuoteTweetEnabled, D = T.retweeted && this._prioritizeQuoteTweetEnabled, j = this._shouldMisinfoNudgeForceActionMenu(we.a.retweet), N = this._shouldMisinfoNudgeForceActionMenu(we.a.like) && !T.favorited, F = {
						[ee.d.bookmark]: g ? this._handleUnbookmarkTweet : this._handleBookmarkTweet,
						[ee.d.reply]: this._handleReplyPress
					};
					return r.createElement(r.Fragment, null, r.createElement(fe.a, {
						enabled: a,
						handlers: F
					}), r.createElement(_e.a, {
						actionAnalyticsProps: {
							isFaded: k,
							onPress: k ? this._handleOpenEducationPrompt("analytics") : this._handleAnalyticsPress,
							tweetLink: T.permalink
						},
						actionLikeProps: {
							actionMenuDescription: this._renderEngagementNudge(we.a.like, !c, s),
							count: _.likeCount || T.favorite_count,
							enableActionMenu: !S && N,
							isFaded: S,
							isLiked: T.favorited,
							likeTransitionAnimation: l,
							onMenuCancel: this._handleMenuCancel(we.a.like),
							onPress: S ? this._handleOpenEducationPrompt("like") : N ? this._handleLikeMenuPress : this._handleLike,
							onLikeActionSelect: this._handleLike
						},
						actionReplyProps: {
							count: _.replyCount || T.reply_count,
							isFaded: I,
							onPress: I ? this._handleOpenEducationPrompt("reply") : this._handleReplyPress,
							renderWrapper: R ? this._replyWrapper : void 0
						},
						actionRetweetProps: {
							actionMenuDescription: s && Object(we.c)(we.a.retweet, s) ? this._renderEngagementNudge(we.a.retweet, !c, s) : this._renderArticleNudge(),
							count: (_.quoteCount || T.quote_count || 0) + (_.retweetCount || T.retweet_count),
							enableActionMenu: !!y && (!L || j || w),
							excludeRetweetWithCommentAction: D,
							isDisabled: P || L && (j || w),
							isRetweeted: T.retweeted,
							onMenuCancel: this._handleMenuCancel(we.a.retweet),
							onPress: this._handleRetweetPress,
							onQuoteTweetActionSelect: this._handleQuoteTweet,
							onRetweetActionSelect: this._handleRetweet,
							onUnretweetActionSelect: this._handleUnretweet,
							retweetWithCommentLink: o ? void 0 : x
						},
						actionShareProps: {
							actionMenuDescription: this._renderEngagementNudge(we.a.share, !c, s),
							actionItems: O,
							isDisabled: A && !M,
							isFaded: M,
							onMenuCancel: this._handleMenuCancel(we.a.share),
							onPress: M ? this._handleOpenEducationPrompt("share") : this._handleSharePress
						},
						actionSize: e,
						activeColor: t,
						color: n,
						displayStyle: i,
						enableKeyboardShortcuts: a,
						isFromProtectedAccount: T.user.protected && T.user.id_str !== y,
						nativeID: d,
						style: u,
						testIDs: se.a,
						withActionsDisabled: m,
						withAnalytics: T.user.id_str === y && !!b,
						withCount: f
					}), v ? r.createElement(ne.a, {
						displayMode: this.state.loginSignupSheetDisplayMode,
						onClose: this._handleCloseLoginSignupSheet,
						tweetId: T.id_str,
						userFullName: T.user.name,
						userId: T.user.id_str
					}) : null, E ? r.createElement(ye.a, {
						confirmButtonLabel: qe,
						confirmButtonType: "destructive",
						headline: We,
						onCancel: this._handleHideConfirmation,
						onConfirm: this._handleConfirmReplyTweet,
						text: Ke
					}) : null, C ? r.createElement(ye.a, {
						confirmButtonLabel: Xe,
						confirmButtonLink: {
							pathname: "/compose/tweet",
							state: {
								quotedStatus: T,
								promotedContent: h
							}
						},
						confirmButtonType: "destructive",
						headline: Ve,
						onCancel: this._handleHideConfirmation,
						onConfirm: this._handleConfirmQuoteTweet,
						text: Ge
					}) : null, this._renderNonCompliantEducation())
				}
				_renderArticleNudge() {
					var e, t, n, o, i, a, s;
					const {
						tweet: l
					} = this.props, {
						showArticleNudge: c
					} = this.state, d = null == l || null == (e = l.card) ? void 0 : e.url, h = null == l || null == (t = l.card) || null == (n = t.binding_values) || null == (o = n.domain) ? void 0 : o.string_value, u = null == l || null == (i = l.card) || null == (a = i.binding_values) || null == (s = a.vanity_url) ? void 0 : s.string_value;
					return c ? r.createElement(_, {
						domain: h,
						link: d,
						onClick: this._handleArticleClicked,
						vanityUrl: u
					}) : null
				}
				_scribeAction(e) {
					const {
						loggedInUserId: t
					} = this.context, {
						promotedContent: n,
						analytics: o,
						tweet: i
					} = this.props, r = t ? e : e + "_attempt", a = o.contextualScribeData, s = a && a.items ? a : Object.assign({}, a || {}, {
						items: [re.a.getTweetItem(i, n)]
					});
					o.scribe({
						action: r,
						data: s
					})
				}
				_scribeNudgeAction({
					tweetActionName: e,
					element: t,
					action: n
				}) {
					const {
						analytics: o,
						forwardPivotInfo: i
					} = this.props;
					Object(we.b)(e, i) && o.scribe(Object.assign({}, at, {
						element: t,
						action: n
					}))
				}
				_shouldMisinfoNudgeForceActionMenu(e) {
					const {
						forwardPivotInfo: t
					} = this.props;
					return Object(we.c)(e, t)
				}
				_initializeLivePipeline() {
					const {
						dataSaverMode: e,
						tweet: t
					} = this.props, n = me.a.getOriginalTweet(t);
					if (this.context.loggedInUserId) return Object(a.h)().then(({
						LivePipeline: t
					}) => {
						!e && t.isSupportedAndReady(G.b) && G.b.isTrue("livepipeline_tweetengagement_enabled") && !this._livePipelineSubscription && (this._livePipelineSubscription = t && t.get().subscribeTopic("/tweet_engagement/" + n.id_str, this._handleLivePipelineUpdate))
					})
				}
			}
			i()(lt, "contextType", w.a), i()(lt, "defaultProps", {
				actionSize: "normal",
				color: "gray600",
				displayStyle: "inline",
				enableKeyboardShortcuts: !1,
				withCount: !1,
				withRemoveFromBookmarks: !1,
				liveCounts: {
					replyCount: void 0,
					likeCount: void 0,
					retweetCount: void 0
				}
			});
			t.a = Object(he.a)(Object(V.c)()(W(lt)));
			const ct = h.a.create({
				conversationControlsAnchor: {
					justifyContent: "center"
				}
			})
		},
		xZXe: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ge
			}));
			n("IAdD"), n("DZ+c");
			var o = n("97Jx"),
				i = n.n(o),
				r = n("KEM+"),
				a = n.n(r),
				s = n("ERkP"),
				l = n("ZyXd"),
				c = n("v6aA"),
				d = n("RqPI"),
				h = n("P1r1"),
				u = n("1YZw"),
				p = n("rxPX"),
				m = n("0KEI"),
				b = n("x5Pi"),
				g = n("6rlp"),
				f = n("0pUJ"),
				_ = n("Fmkq"),
				y = n("j7tW"),
				w = n("jL08"),
				v = n("Zejx"),
				C = n("XOJV"),
				E = n("D5n3"),
				T = n("G6rE");
			const x = (e, {
					tweetId: t
				}) => Object(y.b)(e, t),
				k = (e, t) => t.tweetId,
				I = (e, {
					referringPromotedContent: t,
					urtPromotedContent: n,
					urtAdvertiser: o
				}) => {
					if (e && n) {
						const t = e.promoted_content;
						return Object.assign({}, e, {
							promoted_content: Object.assign({
								adMetadataContainer: n.adMetadataContainer,
								disclosure_type: n.disclosureType,
								experiment_values: n.experimentValues,
								impression_id: n.impressionId,
								advertiser: o ? {
									id_str: o.id_str
								} : void 0,
								advertiser_name: (null == o ? void 0 : o.name) || void 0,
								click_tracking_info: n.clickTrackingInfo
							}, t)
						})
					}
					return e && t ? Object.assign({}, e, {
						promoted_content: t
					}) : e
				},
				S = (e, {
					socialContext: t
				}) => t,
				P = (e, {
					socialContext: t
				}) => {
					const n = t && t.topicContext;
					return n ? v.a.select(e, n.topicId) : void 0
				},
				R = (e, {
					forwardPivotInfo: t
				}) => t,
				O = (e, {
					urtPromotedContent: t
				}) => t,
				A = (e, {
					urtPromotedContent: t
				}) => t ? T.e.select(e, t.advertiserId) : null,
				M = (e, {
					promotedContent: t
				}) => t,
				L = (e, {
					promotedContent: t
				}) => t && t.advertiser ? T.e.select(e, t.advertiser.id_str) : null,
				D = (e, t) => t.contextTweetId;
			var j = Object(p.a)().propsFromState(() => ({
					tweet: C.a.createHydratedTweetSelector(k),
					contextTweet: C.a.createHydratedTweetSelector(D),
					dataSaverMode: h.k,
					forwardPivotInfo: R,
					loggedInUserId: d.g,
					urtPromotedContent: O,
					urtAdvertiser: A,
					referringPromotedContent: M,
					referringAdvertiser: L,
					isPinned: x,
					explicitSocialContext: S,
					topic: P
				})).adjustStateProps(({
					tweet: e,
					contextTweet: t,
					dataSaverMode: n,
					forwardPivotInfo: o,
					loggedInUserId: i,
					urtPromotedContent: r,
					urtAdvertiser: a,
					referringPromotedContent: s,
					referringAdvertiser: l,
					isPinned: c,
					explicitSocialContext: d,
					topic: h
				}) => {
					const u = e && Object(b.c)(e, i);
					return {
						contextTweet: t,
						dataSaverMode: n,
						forwardPivotInfo: (null == e ? void 0 : e.softIntervention) || o,
						isPinned: c,
						socialContext: d || u,
						topic: h,
						tweet: I(e, {
							referringPromotedContent: s,
							urtPromotedContent: r,
							urtAdvertiser: a
						}),
						promotedContentAdvertiser: a || l || void 0
					}
				}).propsFromActions(() => ({
					addToast: u.b,
					createLocalApiErrorHandler: Object(m.d)("TWEET_CONTAINER_CONTEXT"),
					log: g.a,
					fetchTopicIfNeeded: v.a.fetchOneIfNeeded,
					mute: f.a,
					onUnretweet: E.a,
					richScribeAction: _.richScribeAction,
					setArticlesVisited: w.a,
					undoTopicNotInterested: v.a.undoNotInterested,
					unmute: T.e.unmute
				})).withAnalytics(),
				N = n("6bZg"),
				F = n("F3pd"),
				B = n("4hQ9"),
				U = n("3XMw"),
				H = n.n(U),
				z = n("iFPY"),
				W = n("hACr"),
				V = n("jQy5"),
				K = n("Rp9C"),
				G = n("uArA"),
				q = n("xM7j"),
				X = n("BLtI"),
				Y = n("3zeG"),
				Q = n("IO7v"),
				J = n("MWbm"),
				$ = n("7JQg"),
				Z = n("cFuS"),
				ee = n("E0cF"),
				te = n("OIC0"),
				ne = n("qqET"),
				oe = n("lHOd"),
				ie = n("K9/a"),
				re = n("oQhu"),
				ae = n("mN6z"),
				se = n("fz3c"),
				le = n("Cqiq");
			const ce = H.a.f277e949,
				de = H.a.f5718548,
				he = H.a.e4c6c309;
			class ue extends s.Component {
				constructor(e, t) {
					super(e, t), a()(this, "_muteOrUnmuteAction", V.a.bind(null, this.context.featureSwitches)), a()(this, "_shouldLogPromotedImpression", me.bind(null, this.context.featureSwitches)), a()(this, "_isProbablyRemovedByAdBlocker", pe.bind(null, this.context.featureSwitches)), a()(this, "_isArticleNudgeEnabled", this.context.featureSwitches.isTrue("responsive_web_article_nudge_enabled")), a()(this, "_isCompatibilityScribeEnabled", this.context.featureSwitches.isTrue("responsive_web_extension_compatibility_scribe")), a()(this, "_handleShowReportedTweet", () => {
						this.setState({
							displayReported: !0,
							enableKeyboardShortcuts: !1
						})
					}), a()(this, "_handleUnretweet", () => {
						const {
							createLocalApiErrorHandler: e,
							onUnretweet: t,
							tweet: n
						} = this.props;
						t(ee.a.getOriginalTweet(n).id_str, {
							promotedContent: n.promoted_content
						}).catch(e(Q.a))
					}), a()(this, "_getShortcutKeyHandlers", () => {
						const {
							shortcutKey: e,
							onClick: t
						} = this._getMuteOrUnmuteAction();
						return e ? {
							[e]: t
						} : {}
					}), a()(this, "_getMuteOrUnmuteAction", () => {
						const {
							addToast: e,
							createLocalApiErrorHandler: t,
							mute: n,
							unmute: o,
							tweet: i
						} = this.props, {
							user: r
						} = i, a = {
							addToast: e,
							createLocalApiErrorHandler: t,
							scribeAction: ({
								element: e
							}) => {
								this._scribeAction({
									element: e,
									action: "click"
								})
							}
						};
						return this._muteOrUnmuteAction(Object.assign({}, a, {
							mute: n,
							unmute: o,
							user: r
						}))
					}), a()(this, "_getRenderCurationActionMenu", Object(re.a)((e, t, n, o, i, r, a, l, c, d, h) => n => s.createElement(Y.a, {
						feedbackItems: e,
						isPinned: t,
						onClose: n,
						onTweetDismiss: o,
						promotedContent: i,
						tweet: r,
						withHideReply: a,
						withMuteConversation: l,
						withUnhideReply: c,
						withViewHiddenReplies: d
					}))), a()(this, "_getDefaultScribeData", Object(re.a)((e, t, n, o, i, r) => {
						const a = (({
							tweet: e,
							promotedContent: t,
							scribeData: n,
							isSelected: o,
							overflow: i,
							contextualScribeData: r,
							clickTrackingEmbedDetails: a
						}) => {
							const s = K.a.addTweetToItems(n ? n.items : [], e, t, o, i);
							return Object.assign({}, r || {}, n || {}, a && {
								click_tracking_embed_details: a
							}, {
								items: s
							})
						})({
							tweet: e,
							promotedContent: t,
							scribeData: n,
							overflow: o,
							isSelected: this._isSelected(),
							contextualScribeData: i,
							clickTrackingEmbedDetails: r
						});
						return this._cachedFinalScribeData && Object(ae.a)(a, this._cachedFinalScribeData) || (this._cachedFinalScribeData = a), this._cachedFinalScribeData
					})), a()(this, "_scribeAction", (e, t = {}, n) => {
						var o;
						const {
							analytics: i,
							history: r,
							richScribeAction: a,
							scribeData: s,
							scribeNamespace: l,
							tweet: c
						} = this.props, d = null == (o = r.location.state) ? void 0 : o.overflow, h = this._getDefaultScribeData(ee.a.getOriginalTweet(c), this._getPromotedContent(), s, d, i.contextualScribeData, n);
						a(Object.assign({}, l, e), Object.assign({}, h, t))
					}), a()(this, "_handlePoliticalSponsorWebsiteClick", () => {
						this._scribeAction({
							component: "political_ad",
							element: "organization_website",
							action: "click"
						})
					}), a()(this, "_handlePromotedDisclaimerLearnMoreClick", e => () => {
						this._scribeAction({
							component: e,
							element: "learn_more",
							action: "click"
						})
					}), a()(this, "_handlePromotedIndicatorClick", () => {
						this._handleAsyncPromotedEvent(Z.b.FOOTER_PROFILE)
					}), a()(this, "_handleFocus", () => {
						this.setState({
							enableKeyboardShortcuts: !0
						})
					}), a()(this, "_handleBlur", () => {
						this.setState({
							enableKeyboardShortcuts: !1
						})
					}), a()(this, "_getPromotedContent", () => {
						const {
							displayPromotedContent: e,
							tweet: t
						} = this.props;
						return e ? t.promoted_content : void 0
					}), a()(this, "_handleImpression", e => {
						this._shouldLogPromotedImpression(e) && this._handleAsyncPromotedEvent(Z.b.IMPRESSION)
					}), a()(this, "_handleFullyVisible", e => {
						this._shouldLogPromotedImpression(e) && this._handleAsyncPromotedEvent(Z.b.DWELL)
					}), a()(this, "_handleResize", (e, t) => {
						!this._isProbablyRemovedByAdBlocker(e) && this._isProbablyRemovedByAdBlocker(t) && (l.a.recordAdBlockerPresence(), this._isCompatibilityScribeEnabled && this._scribeAction({
							action: "blocked_ad"
						}))
					}), a()(this, "_handleInlineReplyClick", e => {
						const {
							loggedInUserId: t
						} = this.context, {
							history: n,
							promotedContent: o,
							tweet: i
						} = this.props;
						e.preventDefault(), this._scribeAction({
							element: "inline_reply",
							action: "reply"
						}), n.push({
							state: {
								inReplyToStatusId: i.id_str,
								isSelfThreadReply: !!t && Object(B.a)({
									tweet: i,
									loggedInUserId: t
								}),
								promotedContent: o
							},
							pathname: "/compose/tweet"
						})
					}), a()(this, "_handleReplyContextClick", (e, t) => this._scribeAction({
						element: "reply_context",
						action: "click"
					}, {
						event_value: t
					})), a()(this, "_handleAsyncPromotedEvent", (e, t) => {
						const {
							createLocalApiErrorHandler: n,
							log: o,
							tweet: i
						} = this.props, r = this._getPromotedContent();
						if (r) {
							const {
								disclosure_type: a,
								impression_id: s
							} = r;
							o({
								disclosureType: a,
								itemId: i.id_str,
								itemType: Z.c.TWEET,
								params: Object.assign({
									event: e,
									impression_id: s
								}, t)
							}).catch(n())
						}
					}), a()(this, "_handleModeratedIconClick", () => this._scribeAction({
						element: "moderated_replies_icon",
						action: "click"
					})), a()(this, "_handleModeratedIconShown", () => this._scribeAction({
						element: "moderated_replies_icon",
						action: "impression"
					})), a()(this, "_handleBirdwatchNotesIconClick", () => this._scribeAction({
						element: "birdwatch_notes_icon",
						action: "click"
					})), a()(this, "_handleAnalyticsClick", () => {
						this._scribeAction({
							element: "analytics",
							action: "click"
						})
					}), a()(this, "_handleAvatarClick", () => {
						this._scribeAction({
							element: "avatar",
							action: "profile_click"
						}), this._handleAsyncPromotedEvent(Z.b.PROFILE_IMAGE_CLICK)
					}), a()(this, "_handleCaretClick", () => this._scribeAction({
						element: "caret",
						action: "click"
					})), a()(this, "_handleClick", Object(G.a)(e => {
						if (!e.defaultPrevented) {
							if (e.stopPropagation(), window.getSelection().toString().length) return;
							this._scribeAction({
								element: "tweet",
								action: "click"
							}), this._handleAsyncPromotedEvent(Z.b.VIEW_DETAILS)
						}
					})), a()(this, "_handleDeepThreadClick", Object(G.a)(e => {
						this._scribeAction({
							component: "cursor",
							action: "click"
						}, {
							event_info: "Overflow"
						})
					})), a()(this, "_handleEmbeddedMediaClick", () => {
						this._scribeAction({
							element: "platform_photo_card",
							action: "click"
						}), this._handleAsyncPromotedEvent(Z.b.EMBEDDED_MEDIA)
					}), a()(this, "_handleEntityClick", (e, t, n) => {
						const o = Z.a[t],
							i = N.a[t],
							r = this._getPromotedContent(),
							a = K.a.getClickTrackingEmbedDetails(r, n);
						if (o) {
							const t = "url_click" === o && e.target instanceof window.HTMLElement ? {
								url: e.target.href
							} : void 0;
							this._handleAsyncPromotedEvent(o, t)
						}
						if ("media" === t) return this._handleClick(e);
						t === te.a.URL && a && this._scribeAction({
							action: ne.a.CLICK_ID_EMBED
						}, {}, a), i && this._scribeAction({
							action: i
						})
					}), a()(this, "_handleScreenNameClick", () => {
						this._scribeAction({
							element: "user",
							action: "profile_click"
						}), this._handleAsyncPromotedEvent(Z.b.SCREEN_NAME_CLICK)
					}), a()(this, "_handleSelfThreadClick", () => this._scribeAction({
						element: "self_thread",
						action: "click"
					})), a()(this, "_handleSelfThreadImpression", () => this._scribeAction({
						element: "self_thread",
						action: "impression"
					})), a()(this, "_handleTopicFetch", () => {
						var e;
						const {
							createLocalApiErrorHandler: t,
							fetchTopicIfNeeded: n,
							socialContext: o
						} = this.props, i = o && (null == (e = o.topicContext) ? void 0 : e.topicId);
						i && n(i).catch(t())
					}), a()(this, "_handleUndoTopicNotInterested", () => {
						const {
							createLocalApiErrorHandler: e,
							topic: t,
							undoTopicNotInterested: n
						} = this.props;
						this._scribeAction({
							element: "topic",
							action: "un_not_interested"
						}), t && n(t.id).catch(e())
					}), a()(this, "_handleCardLinkClick", () => {
						const {
							setArticlesVisited: e,
							tweet: t
						} = this.props;
						var n;
						this._isArticleNudgeEnabled && e(null == t || null == (n = t.card) ? void 0 : n.url)
					}), a()(this, "_isSelected", () => {
						const {
							conversationTreeMetadata: e,
							tweet: t
						} = this.props, {
							selectedTweet: n
						} = e || {};
						return n && t.id_str === n.selectedTweetId
					}), this.state = {
						displayReported: !1,
						enableKeyboardShortcuts: !1
					};
					const n = this._getPromotedContent();
					this._shouldHidePromotedTweet = !!n && "earned" !== Object(F.a)(n) && l.a.shouldHidePromotedTweets(this.context.featureSwitches)
				}
				shouldComponentUpdate(e, t) {
					return !Object(ae.a)(this.props, e) || !Object(ae.a)(this.state, t)
				}
				componentDidMount() {
					this._shouldHidePromotedTweet && this._isCompatibilityScribeEnabled && this._scribeAction({
						action: "hide_promoted"
					}), this._handleTopicFetch()
				}
				render() {
					const {
						loggedInUserId: e
					} = this.context, {
						conversationPosition: t,
						conversationTreeMetadata: n,
						showWithheldBannerOnMyTweets: o,
						tweet: i
					} = this.props;
					if (!this._shouldRender()) return n ? s.createElement(q.a, {
						conversationPosition: t,
						conversationTreeMetadata: n
					}, he) : null;
					const r = i.user.id_str === e,
						a = Object(le.b)(ee.a.getOriginalTweet(i).withheld_scope),
						l = r && !i.retweeted_status,
						c = l && "user" === ee.a.getOriginalTweet(i).withheld_scope && !o,
						d = Object(se.d)(i) && !this.state.displayReported;
					return s.createElement(s.Fragment, null, a ? s.createElement(J.a, null, c ? null : this._renderWithheldTweet(), l ? this._renderContent() : null) : d ? this._renderReportedTombstone() : this._renderContent(), this._renderIntentPrompt())
				}
				_renderIntentPrompt() {
					const {
						contextualClientEventInfo: e,
						forwardPivotInfo: t,
						history: n,
						tweet: o
					} = this.props;
					if (o && "focal_module" === (null == e ? void 0 : e.component) && n.location.pathname.indexOf("/intent/") > -1) return s.createElement(z.a, {
						forwardPivotInfo: t,
						history: n,
						location: n.location,
						tweetId: o.id_str
					})
				}
				_renderWithheldTweet() {
					const {
						conversationPosition: e,
						conversationTreeMetadata: t,
						tweet: n
					} = this.props, o = n.user.id_str, i = ee.a.getOriginalTweet(n), {
						loggedInUserId: r
					} = this.context, a = !!r && r === o && i.retweeted, l = i.withheld_text || i.text, c = i.withheld_entities || i.entities, d = n.user.id_str === r;
					return s.createElement(le.a, {
						conversationPosition: e,
						conversationTreeMetadata: d ? void 0 : t,
						displayTextRange: i.display_text_range,
						entities: c,
						lang: i.lang,
						onUnretweet: a ? this._handleUnretweet : void 0,
						showUnretweetButton: a,
						text: l
					})
				}
				_renderReportedTombstone() {
					const {
						conversationTreeMetadata: e,
						conversationPosition: t,
						tweet: n
					} = this.props, o = ee.a.getOriginalTweet(n);
					return s.createElement(q.a, {
						actionText: ce,
						conversationPosition: t,
						conversationTreeMetadata: e,
						lang: o.lang,
						onClick: this._handleShowReportedTweet
					}, de)
				}
				_renderContent() {
					var e;
					const {
						analytics: t,
						contextTweet: n,
						contextualClientEventInfo: o,
						conversationPosition: r,
						conversationTreeMetadata: a,
						dataSaverMode: l,
						displayBlocked: c,
						focalTweetId: d,
						forwardPivotInfo: h,
						hasModeratedReplies: u,
						hideConversationControlsEducationText: p,
						history: m,
						hitHighlights: b,
						injectedFeedbackItem: g,
						innerForwardPivotInfo: f,
						isUnread: _,
						linkify: y,
						promotedContentAdvertiser: w,
						quotedTweetTombstoneInfo: v,
						replyContext: C,
						ruxContext: E,
						scribeData: T,
						scribeNamespace: x,
						shouldSelfThreadIncludeAvatar: k,
						socialContext: I,
						topic: S,
						tweet: P,
						withActions: R,
						withActionsDisabled: O,
						withCardLinks: A,
						withInlineMedia: M,
						withQuotedTweetLinks: L,
						withRemoveFromBookmarks: D,
						withSelfThread: j,
						withSocialContext: N,
						feedbackItems: F,
						isPinned: B,
						onTweetDismiss: U,
						withCurationMenu: H,
						withHideReply: z,
						withMuteConversation: V,
						withUnhideReply: K,
						withViewHiddenReplies: G
					} = this.props, {
						enableKeyboardShortcuts: q
					} = this.state, Y = {
						contextTweet: n,
						conversationPosition: r,
						conversationTreeMetadata: a,
						dataSaverMode: l,
						displayBlocked: c,
						enableKeyboardShortcuts: q,
						forwardPivotInfo: h,
						hasModeratedReplies: u,
						hideConversationControlsEducationText: p,
						hitHighlights: b,
						injectedFeedbackItem: g,
						innerForwardPivotInfo: f,
						isUnread: _,
						linkify: y,
						promotedContentAdvertiser: w,
						quotedTweetTombstoneInfo: v,
						replyContext: C,
						shouldSelfThreadIncludeAvatar: k,
						socialContext: I,
						topic: S,
						tweet: P,
						withActions: R,
						withActionsDisabled: O,
						withQuotedTweetLinks: L,
						withRemoveFromBookmarks: D,
						withSelfThread: j,
						withSocialContext: N
					}, Q = ee.a.getOriginalTweet(P), J = this._getPromotedContent(), Z = T.items && T.items[0] && T.items[0].suggestion_details, te = this._isSelected(), ne = Q && Q.card && !P.is_quote_status ? Q.card.url : void 0, oe = Object(ae.a)(this._cachedScribeNamespace, x) ? this._cachedScribeNamespace : this._cachedScribeNamespace = x, re = null == (e = m.location.state) ? void 0 : e.overflow, se = s.createElement($.b, {
						data: this._getDefaultScribeData(Q, J, T, re, t.contextualScribeData, void 0),
						namespace: oe
					}, s.createElement(W.a, {
						enabled: !!q,
						handlers: this._getShortcutKeyHandlers()
					}, s.createElement(X.b, i()({}, Y, {
						excludeCardUrl: ne,
						isFocal: d === P.id_str,
						onAnalyticsClick: this._handleAnalyticsClick,
						onAvatarClick: this._handleAvatarClick,
						onBirdwatchNotesIconClick: this._handleBirdwatchNotesIconClick,
						onBlur: this._handleBlur,
						onCardLinkClick: this._handleCardLinkClick,
						onCaretClick: this._handleCaretClick,
						onClick: this._handleClick,
						onDeepThreadClick: this._handleDeepThreadClick,
						onEntityClick: this._handleEntityClick,
						onFocus: this._handleFocus,
						onMediaClick: this._handleEmbeddedMediaClick,
						onModeratedIconClick: this._handleModeratedIconClick,
						onModeratedIconShown: this._handleModeratedIconShown,
						onPoliticalSponsorWebsiteClick: this._handlePoliticalSponsorWebsiteClick,
						onPromotedDisclaimerLearnMoreClick: this._handlePromotedDisclaimerLearnMoreClick,
						onPromotedIndicatorClick: this._handlePromotedIndicatorClick,
						onReply: this._handleInlineReplyClick,
						onReplyContextClick: this._handleReplyContextClick,
						onScreenNameClick: this._handleScreenNameClick,
						onSelfThreadClick: this._handleSelfThreadClick,
						onSelfThreadImpression: this._handleSelfThreadImpression,
						onUndoTopicNotInterestedClick: this._handleUndoTopicNotInterested,
						promotedContent: J,
						renderCurationActionMenu: H ? this._getRenderCurationActionMenu(F, B, te, U, J, Q, z, V, K, G, a) : void 0,
						to: {
							state: {
								focal: Q.id_str,
								socialContext: I,
								contextualClientEventInfo: o,
								contextTweetId: P.id_str,
								promotedContent: J,
								suggestionDetails: Z
							},
							pathname: Q.permalink,
							query: E ? {
								cxt: E
							} : void 0
						},
						withCardLinks: A,
						withInlineMedia: M
					}))));
					return J ? s.createElement(ie.a, {
						id: P.id_str,
						onFullyVisible: this._handleFullyVisible,
						onResize: this._handleResize,
						onVisible: this._handleImpression
					}, se) : se
				}
				_shouldRender() {
					const {
						tweet: e
					} = this.props;
					return !(this._shouldHidePromotedTweet || this._tweetIsDeleted() || this._shouldHideBlockedTweet() || Object(se.c)(e))
				}
				_tweetIsDeleted() {
					const {
						tweet: e
					} = this.props, {
						retweeted_status: t
					} = e;
					return e.isDeleted || t && t.isDeleted
				}
				_shouldHideBlockedTweet() {
					const {
						displayBlocked: e,
						focalTweetId: t,
						tweet: n
					} = this.props, o = ee.a.getOriginalTweet(n), i = n && n.user.blocking || o && o.user.blocking;
					return t !== n.id_str && (!e && i)
				}
			}
			a()(ue, "defaultProps", {
				displayBlocked: !1,
				shouldSelfThreadIncludeAvatar: !1,
				showWithheldBannerOnMyTweets: !0,
				withCardLinks: !1,
				withCurationMenu: !0,
				withRemoveFromBookmarks: !1,
				withMuteConversation: !1
			}), a()(ue, "contextType", c.a);
			const pe = (e, t) => t.height <= e.getNumberValue("responsive_web_extension_compatibility_size_threshold", 50),
				me = (e, t) => !(e.isTrue("responsive_web_extension_compatibility_impression_guard") && pe(e, t.item)),
				be = e => {
					const t = s.useContext(oe.a);
					return e.tweet ? s.createElement(ue, i()({}, e, {
						history: t,
						tweet: e.tweet
					})) : null
				};
			be.defaultProps = ue.defaultProps;
			const ge = j(be);
			t.b = Object($.c)({
				component: "tweet"
			})(ge)
		},
		xZmF: function(e, t, n) {
			"use strict";
			var o = n("0mK8"),
				i = n("ERkP"),
				r = n("GliE"),
				a = n("YeIG"),
				s = n("MWbm"),
				l = n("TIdA"),
				c = n("A91F"),
				d = n("9Xij"),
				h = n("jUPy"),
				u = n("rHpw");
			const p = e => {
					const {
						dataSaverMode: t,
						image: n,
						icon: r,
						cropCandidates: h,
						scoreEvent: u,
						type: p
					} = e, b = f[p];
					return i.createElement(s.a, {
						style: [f.coverContainer, b]
					}, u ? m(u) : !n || Object(a.a)(n) || t ? t || Object(a.a)(n) ? i.createElement(d.a, {
						ratio: 1
					}, i.createElement(o.e, {
						icon: r
					})) : null : i.createElement(l.a, {
						accessibilityLabel: "",
						aspectMode: c.a.SQUARE,
						cropCandidates: h,
						image: n
					}))
				},
				m = e => {
					const {
						category: t,
						eventState: n,
						gameClock: o,
						gameClockPeriod: a,
						startTimeMillis: s,
						participants: l,
						winnerId: c
					} = e, d = Object(r.a)(t, n, l, a, c);
					return i.createElement(h.a, {
						accessibilityLabel: d,
						category: t,
						containerStyles: f.scoreCardTile,
						gameClock: o,
						gameClockPeriod: a,
						gameState: n,
						isCompact: !0,
						startTimeMillis: s,
						teams: l,
						winnerId: c
					})
				};
			p.defaultProps = {
				type: "variable"
			};
			const b = `calc(${u.a.theme.spaces.xxLarge} * 2)`,
				g = `calc(${u.a.theme.spaces.xxLarge} + ${u.a.theme.spaces.medium})`,
				f = u.a.create(e => ({
					coverContainer: {
						backgroundColor: e.colors.gray200,
						borderRadius: e.borderRadii.large,
						overflow: "hidden"
					},
					fixed: {
						height: e.spaces.xxLarge,
						width: e.spaces.xxLarge
					},
					scoreCardTile: {
						padding: 0
					},
					variable: {
						maxHeight: b,
						maxWidth: b,
						minHeight: g,
						minWidth: g,
						height: "15%",
						width: "15%"
					}
				}));
			t.a = p
		},
		xiBm: function(e, t, n) {
			"use strict";
			var o = n("k49u"),
				i = n("LVU8");
			const r = {
				[o.a.FollowError]: {
					customAction: i.b
				}
			};
			t.a = r
		},
		xrkw: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		yDHe: function(e, t, n) {
			"use strict";
			n("JtPf");
			var o = n("ERkP"),
				i = n("zb92"),
				r = n("RuTB");
			const a = n("rHpw").a.create(e => ({
				root: {
					minHeight: 200
				}
			}));
			var s = function({
				hasError: e,
				onRetry: t
			}) {
				return o.createElement(r.a, {
					hasError: e,
					onRetry: t,
					style: a.root
				})
			};
			const l = Object(i.a)({
				loader: () => n.e(140).then(n.bind(null, "6l+S")),
				renderPlaceholder: (e, t) => o.createElement(s, {
					hasError: e,
					onRetry: t
				})
			});
			t.a = l
		},
		yVEN: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		yr4d: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			}));
			n("IAdD"), n("JtPf");
			var o = n("wrlS"),
				i = n("8UdT"),
				r = (n("kYxP"), n("k49u")),
				a = n("0KEI");
			var s = n("fs1G"),
				l = n("oEOe");
			const c = Object(l.a)("rweb/instreamVideo", "FETCH_PREROLLS");

			function d(e, t, n, o) {
				if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
				let i = [];
				const d = [i];
				return e.forEach(e => {
					10 === i.length && (i = [], d.push(i)), i.push(e)
				}), Promise.all(d.map(e => function(e, t, n, o) {
					if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
					const i = {
						eligibleTweets: e
					};
					t && (i.trigger_preroll = t);
					const d = Object(l.b)(n, {
							request: o.Prerolls.fetch,
							params: i
						}),
						h = n(Object(a.d)("FETCH_PREROLLS")({
							showToast: !1,
							[r.a.AccessDeniedByBouncer]: {
								customAction: s.a
							}
						}));
					return d({
						actionTypes: c,
						context: "FETCH_PREROLLS"
					}).catch(h)
				}(e, t, n, o))).then(e => {
					let t = {};
					e.forEach(e => {
						e && e.prerolls && (t = Object.assign({}, t, function(e) {
							const t = {},
								n = {};
							return Array.isArray(e.video_analytics_scribe) && e.video_analytics_scribe.length && e.video_analytics_scribe.forEach(e => {
								t[e.tweet_id] = e.video_analytics_scribe_passthrough
							}), Array.isArray(e.prerolls) && e.prerolls.length && e.prerolls.forEach(e => {
								e.media_info && (n[e.tweet_id] = Object.assign({}, e, {
									videoAnalyticsScribePassthrough: t[e.tweet_id]
								}))
							}), n
						}(e)))
					}), n({
						type: f,
						payload: {
							dynamicIVCollection: t
						}
					})
				})
			}
			var h = n("kGix"),
				u = n("/Ikv");

			function p(e) {
				if (null == e) return null;
				const t = function(e) {
						const {
							card: t,
							extended_entities: n
						} = e;
						return {
							hasMonetizableMedia: Array.isArray(null == n ? void 0 : n.media) && (null == n ? void 0 : n.media.length) > 0 && n.media.some(e => {
								const t = e.additional_media_info;
								return t && t.monetizable
							}),
							hasAmplifyCard: !!t && t.name === u.a.CardNames.AMPLIFY && !0 === u.a.getBindingValue(t.binding_values, "dynamic_ads"),
							hasPeriscopeCard: (null == t ? void 0 : t.name) === u.a.CardNames.PERISCOPE_BROADCAST,
							hasBroadcastCard: (null == t ? void 0 : t.name) === u.a.CardNames.BROADCAST,
							hasEventCard: !!t && t.name === u.a.CardNames.LIVE_EVENT && ("video" === u.a.getBindingValue(t.binding_values, "media_type") || "broadcast" === u.a.getBindingValue(t.binding_values, "media_type"))
						}
					}(e),
					n = (o = t).hasMonetizableMedia || o.hasAmplifyCard || o.hasPeriscopeCard || o.hasBroadcastCard || o.hasEventCard;
				var o;
				return {
					legacy: n,
					redesign: n && function(e) {
						const t = e.hasAmplifyCard || e.hasPeriscopeCard || e.hasBroadcastCard || e.hasEventCard;
						return e.hasMonetizableMedia && !t
					}(t)
				}
			}
			var m = n("Ssj5"),
				b = n("XOJV");
			const g = {
					fetchStatus: h.a.NONE,
					eligibleTweets: [],
					promotedMetadataCollection: {},
					prerollMetadataCollection: {},
					dynamicIVCollection: {},
					prerollEligibilityCollection: {}
				},
				f = "rweb/instreamVideo/DYNAMIC_STORE";
			m.a.register({
				instreamVideo: function(e = g, t) {
					switch (t.type) {
						case "rweb/instreamVideo/STORE_METADATA":
							if (t.payload) {
								const {
									eligibleTweets: n,
									prerollMetadataCollection: o,
									promotedMetadataCollection: i,
									prerollEligibilityCollection: r
								} = t.payload;
								return Object.assign({}, e, {
									eligibleTweets: n,
									prerollMetadataCollection: o,
									promotedMetadataCollection: i,
									prerollEligibilityCollection: r
								})
							}
							break;
						case f:
							if (t.payload) {
								const {
									dynamicIVCollection: n
								} = t.payload;
								return Object.assign({}, e, {
									dynamicIVCollection: n
								})
							}
							break;
						case "rweb/instreamVideo/DYNAMIC_RESET":
							return Object.assign({}, e, {
								dynamicIVCollection: {}
							});
						default:
							return e
					}
					return e
				}
			});

			function _(e) {
				return (t, n, {
					api: o
				}) => {
					if (!Array.isArray(e)) throw new Error("unable to fetch prerolls without timeline entries");
					if (e.length < 1) return Promise.resolve();
					const r = n(),
						a = [],
						s = {},
						l = {},
						c = {};
					return e.forEach(e => {
						if (!e.content || e.type !== i.b.Tweet) return;
						const t = e.content,
							n = b.a.selectHydrated(r, t.id);
						if (!n) return;
						const o = n,
							{
								promotedMetadata: d,
								prerollMetadata: h
							} = t;
						if (d) {
							const {
								adMetadataContainer: e,
								disclosureType: t,
								impressionId: n
							} = d;
							o.promoted_content = {
								adMetadataContainer: e,
								disclosure_type: t,
								impression_id: n
							}, l[o.id_str] = d
						}
						var u;
						h && ((null == (u = h.preroll) ? void 0 : u.mediaInfo) ? s[o.id_str] = h : a.push(o));
						const m = p(o);
						c[o.id_str] = m, (null == m ? void 0 : m.legacy) && a.push(o)
					}), t({
						type: "rweb/instreamVideo/STORE_METADATA",
						payload: {
							eligibleTweets: a,
							prerollMetadataCollection: s,
							promotedMetadataCollection: l,
							prerollEligibilityCollection: c
						}
					}), d(a, null, t, o)
				}
			}

			function y(e) {
				return (t, n, {
					api: i
				}) => {
					if (e) {
						const {
							dynamicIVCollection: r,
							eligibleTweets: a,
							prerollMetadataCollection: s,
							promotedMetadataCollection: l,
							prerollEligibilityCollection: c
						} = n().instreamVideo, h = r[e], u = l[e], p = c[e];
						if (h) {
							t({
								type: "rweb/instreamVideo/DYNAMIC_RESET"
							});
							const {
								preroll_id: e,
								dynamic_preroll_type: n
							} = h;
							return d(a, {
									preroll_id: e,
									dynamic_preroll_type: n
								}, t, i),
								function(e, t, n) {
									const i = {
										adId: e.preroll_id,
										advertiserName: null,
										advertiserProfileImageUrl: null,
										mediaInfo: {
											call_to_action: null,
											duration_millis: e.media_info.duration_millis,
											publisher_id_str: e.media_info.publisher_id_str,
											variants: e.media_info.variants
										},
										promotedContent: {
											impressionId: void 0,
											disclosureType: void 0
										},
										videoAnalyticsScribePassthrough: e.videoAnalyticsScribePassthrough
									};
									if (e.promoted_content && !t && (i.promotedContent.impressionId = e.promoted_content.impression_id, i.promotedContent.disclosureType = e.promoted_content.disclosure_type), e.media_info.call_to_action) {
										const {
											type: t,
											url: n
										} = e.media_info.call_to_action;
										i.mediaInfo.call_to_action = {
											type: t,
											url: n
										}
									}
									if (e.media_info.render_ad_by_advertiser_name) {
										const {
											advertiser_name: t,
											advertiser_profile_image_url: n
										} = e.media_info;
										i.advertiserName = t, i.advertiserProfileImageUrl = n
									}
									if ((null == n ? void 0 : n.redesign) && o.b.isTrue("responsive_web_instream_video_redesign_enabled")) {
										i.shouldAutoAdvance = !1, i.useRedesignedPrerollUx = !0;
										const {
											advertiser_name: t,
											advertiser_profile_image_url: n
										} = e.media_info;
										i.advertiserName = t, i.advertiserProfileImageUrl = n
									}
									return i
								}(h, u, p)
						}
						const m = s[e];
						if (m) {
							const e = function(e, t) {
								if (!e.preroll || !e.preroll.mediaInfo) return null;
								const {
									mediaInfo: n,
									prerollId: i
								} = e.preroll, r = n.videoVariants.map(e => ({
									url: e.url,
									content_type: e.contentType,
									bitrate: e.bitrate
								})), a = {
									adId: i,
									advertiserName: null,
									advertiserProfileImageUrl: null,
									mediaInfo: {
										call_to_action: void 0,
										duration_millis: n.durationMillis,
										publisher_id_str: n.publisherId,
										variants: r
									},
									promotedContent: {
										impressionId: void 0,
										disclosureType: void 0
									},
									videoAnalyticsScribePassthrough: null
								};
								if (n.callToAction) {
									const {
										type: e,
										url: t
									} = n.callToAction;
									a.mediaInfo.call_to_action = {
										type: e,
										url: t
									}
								}
								if (n.renderAdByAdvertiserName) {
									const {
										advertiserName: e,
										advertiserProfileImageUrl: t
									} = n;
									a.advertiserName = e, a.advertiserProfileImageUrl = t
								}
								if ((null == t ? void 0 : t.redesign) && o.b.isTrue("responsive_web_instream_video_redesign_enabled")) {
									a.shouldAutoAdvance = !1, a.useRedesignedPrerollUx = !0;
									const {
										advertiserName: e,
										advertiserProfileImageUrl: t
									} = n;
									a.advertiserName = e, a.advertiserProfileImageUrl = t
								}
								return a
							}(m, p);
							if (e) return e
						}
					}
					return {}
				}
			}
		},
		yy6l: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("Fmkq"),
				i = n("ezF+"),
				r = n("euJ+"),
				a = (n("ERkP"), n("VPAj")),
				s = n("Df4Q"),
				l = n("x5Pi"),
				c = n("Rp9C"),
				d = n("Zejx"),
				h = n("kY28");
			const u = {
					component: "tweet"
				},
				p = ({
					entry: e,
					scribe: t,
					applyFeedbackAction: n,
					scribeData: o,
					scribeNamespace: i
				}) => () => {
					n({
						entry: e,
						feedbackKeys: [r.b]
					}), t(Object.assign({}, i, {
						element: r.f(r.a),
						action: "click"
					}), o)
				},
				m = (e, t) => {
					const {
						id: n,
						forwardPivot: o,
						innerForwardPivot: i,
						promotedMetadata: r
					} = e.content, a = r ? {
						disclosure_type: r.disclosureType,
						impression_id: r.impressionId
					} : e.referringContext && e.referringContext.promotedContent || void 0, {
						clientEventInfo: s
					} = e.itemMetadata;
					let l = c.a.forTweet(n, a);
					const d = c.a.getAllSurfaceDetails(t || s);
					d && (l = Object.assign({}, l, d));
					const h = c.a.getPivotDetails(o, i);
					return h && (l = Object.assign({}, l, h)), l
				};
			t.a = ({
				component: e,
				displayBlocked: t,
				dismissable: n = !1,
				createAdditionalProps: r = Object(a.a)({}),
				divider: c,
				hideConversationControlsEducationText: b = !1,
				selectData: g,
				shouldSelfThreadIncludeAvatar: f = !1,
				showWithheldBannerOnMyTweets: _ = !0,
				withActionsDisabled: y = !1,
				withRemoveFromBookmarks: w = !1,
				withSelfThread: v = !0,
				withMuteConversation: C = !1
			}) => i.f({
				component: e,
				bindActions: ({
					module: e
				}) => ({
					scribe: o.richScribeAction,
					applyFeedbackAction: e.applyFeedbackAction
				}),
				createProps: ({
					data: e,
					entry: o,
					feedbackItems: i,
					scribeData: a,
					scribeNamespace: c,
					actions: d,
					module: u
				}) => {
					const {
						scribe: m,
						applyFeedbackAction: g
					} = d, {
						conversationPosition: E,
						conversationTreeMetadata: T,
						content: {
							promotedMetadata: x,
							id: k,
							forwardPivot: I,
							hasModeratedReplies: S,
							innerForwardPivot: P,
							ruxContext: R
						},
						referringContext: O
					} = o, A = !!o.conversationPosition && !o.conversationPosition.isStart, M = Object(l.b)({
						socialContext: o.content.socialContext,
						topic: e.topic
					}), L = E ? E.showReplyContext ? h.a.ReplyContextTypes.Isolated : h.a.ReplyContextTypes.None : void 0, D = o.content.innerTombstoneInfo, j = null == O ? void 0 : O.contextualClientEventInfo, N = i.length > 0, F = n && !N;
					return Object.assign({
						contextTweetId: null == O ? void 0 : O.contextTweetId,
						contextualClientEventInfo: o.itemMetadata.clientEventInfo,
						conversationPosition: E,
						conversationTreeMetadata: T,
						displayBlocked: t,
						displayPromotedContent: !0,
						feedbackItems: i,
						focalTweetId: null == O ? void 0 : O.focalTweetId,
						forwardPivotInfo: I,
						hasModeratedReplies: S,
						hideConversationControlsEducationText: b || A,
						hitHighlights: o.content.highlights && o.content.highlights.textHighlights,
						injectedFeedbackItem: i ? {
							markNotInterestedTopic: i.find(e => e.feedbackKey === Object(s.b)(o.entryId))
						} : void 0,
						innerForwardPivotInfo: P,
						onTweetDismiss: F ? p({
							entry: o,
							scribe: m,
							applyFeedbackAction: g,
							scribeData: a,
							scribeNamespace: c
						}) : void 0,
						promotedContent: null == O ? void 0 : O.promotedContent,
						quotedTweetTombstoneInfo: D,
						replyContext: L,
						ruxContext: R,
						scribeData: a,
						scribeNamespace: Object.assign({}, c, {
							section: "descendant" === (null == E ? void 0 : E.position) ? "conversation_descendants" : "ancestor" === (null == E ? void 0 : E.position) ? "conversation_ancestors" : c.section,
							component: (null == j ? void 0 : j.component) || c.component,
							action: (null == j ? void 0 : j.action) || c.action,
							element: (null == j ? void 0 : j.element) || c.element
						}),
						shouldSelfThreadIncludeAvatar: f,
						showWithheldBannerOnMyTweets: _,
						socialContext: M || (null == O ? void 0 : O.socialContext),
						tweetId: k,
						urtPromotedContent: x,
						withActions: !0,
						withActionsDisabled: y,
						withInlineMedia: !(null == O ? void 0 : O.hideMedia),
						withMuteConversation: C,
						withRemoveFromBookmarks: w,
						withSelfThread: v,
						withSocialContext: !0
					}, r(o, e, d))
				},
				divider: c || {},
				defaultScribeNamespace: u,
				selectData: ({
					entry: e,
					module: t
				}) => {
					const n = g ? g({
						entry: e,
						module: t
					}) : {};
					return Object.assign({}, n, {
						topic: t => e.content.socialContext && e.content.socialContext.topicContext ? d.a.select(t, e.content.socialContext.topicContext.topicId) : void 0
					})
				},
				shouldDisplayBorder: e => {
					const {
						conversationPosition: t,
						conversationTreeMetadata: n
					} = e;
					return !t || !!t.isEnd || !!n && !1 === n.descendantConnector && 0 === n.indents.filter(e => "line" === e.displayType).length
				},
				getScribeDataItem: e => {
					var t;
					return m(e, null == (t = e.referringContext) ? void 0 : t.contextualClientEventInfo)
				},
				isFocusable: Object(a.a)(!0)
			})
		},
		zI2C: function(e, t, n) {
			"use strict";
			var o = n("ERkP"),
				i = n("muX9"),
				r = n("3XMw"),
				a = n.n(r),
				s = n("cnVF");
			const l = a.a.d2fb334b;
			t.a = ({
				deepLink: e
			}) => {
				const t = l;
				return e ? o.createElement(i.a, null, o.createElement("meta", {
					content: e,
					property: "al:ios:url"
				}), o.createElement("meta", {
					content: s.m,
					property: "al:ios:app_store_id"
				}), o.createElement("meta", {
					content: t,
					property: "al:ios:app_name"
				}), o.createElement("meta", {
					content: e,
					property: "al:android:url"
				}), o.createElement("meta", {
					content: "com.twitter.android",
					property: "al:android:package"
				}), o.createElement("meta", {
					content: t,
					property: "al:android:app_name"
				})) : null
			}
		},
		zIWA: function(e, t, n) {
			"use strict";
			n("IAdD");
			var o = n("ERkP"),
				i = n("Lsrn"),
				r = n("k/Ka");
			const a = (e = {}) => Object(r.a)("svg", Object.assign({}, e, {
				style: [i.a.root, e.style],
				viewBox: "0 0 24 24"
			}), o.createElement("g", null, o.createElement("path", {
				d: "M19.25 2c-.414 0-.75.336-.75.75v.09c-.695-.245-1.423-.38-2.21-.38-1.453 0-2.876.417-4.25.82-1.334.39-2.592.76-3.83.76-.948 0-1.792-.225-2.58-.688-.234-.135-.52-.136-.753-.002-.233.132-.377.38-.377.65v9.77c0 .267.14.513.37.647 1.025.6 2.117.893 3.34.893 1.453 0 2.876-.417 4.25-.82 1.334-.39 2.592-.76 3.83-.76.802 0 1.527.17 2.21.5v7.02c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75zm-2.96 10.23c-1.453 0-2.876.416-4.25.82-1.333.39-2.592.76-3.83.76-.802 0-1.528-.162-2.21-.49V5.174c.694.245 1.425.366 2.21.366 1.453 0 2.875-.417 4.25-.82 1.333-.39 2.592-.76 3.83-.76.802 0 1.528.16 2.21.49v8.145c-.694-.244-1.425-.366-2.21-.366z"
			})));
			a.metadata = {
				width: 24,
				height: 24
			}, t.a = a
		},
		zOwA: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("9Xij"),
				s = n("t62R"),
				l = n("rHpw"),
				c = n("U+bB"),
				d = n("MWbm");
			class h extends r.PureComponent {
				render() {
					const {
						color: e,
						image: t,
						label: n,
						textSize: o
					} = this.props;
					return r.createElement(d.a, {
						style: u.root
					}, t ? r.createElement(d.a, {
						style: u.imageContainer
					}, r.createElement(a.a, {
						ratio: 1
					}, r.createElement(c.a, {
						source: t,
						style: u.image
					}))) : null, r.createElement(s.c, {
						color: e,
						size: o
					}, n))
				}
			}
			i()(h, "defaultProps", {
				color: "gray600",
				textSize: "normal"
			});
			const u = l.a.create(e => ({
				root: {
					alignItems: "center",
					flexDirection: "row"
				},
				imageContainer: {
					alignSelf: "flex-start",
					backgroundColor: e.colors.gray200,
					flexShrink: 0,
					height: e.fontSizes.large,
					marginRight: e.spaces.xxSmall,
					width: e.fontSizes.large,
					borderRadius: e.borderRadii.infinite
				},
				image: {
					height: "100%",
					width: "100%",
					borderRadius: e.borderRadii.infinite
				}
			}))
		},
		zfvc: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			n("IAdD"), n("kYxP");
			var o = n("KEM+"),
				i = n.n(o),
				r = n("ERkP"),
				a = n("k/Ka"),
				s = n("vlSS"),
				l = n("MWbm");
			const c = Object.freeze({
					normal: 100,
					long: 250,
					longer: 500
				}),
				d = Object.freeze({
					animate: "animate",
					static: "static",
					prep: "prep"
				}),
				h = {
					height: "auto",
					opacity: 1
				},
				u = {
					height: 0,
					opacity: 0
				};
			class p extends r.Component {
				constructor(...e) {
					super(...e), i()(this, "state", {
						animateStage: d.static,
						animateProps: this.props.show && !this.props.animateMount ? h : u,
						renderChildren: this.props.children,
						componentHeight: 0,
						props: Object.assign({}, this.props, {
							show: !this.props.animateMount && this.props.show
						})
					}), i()(this, "_transitionStart", ({
						componentHeight: e
					}) => {
						const {
							props: {
								show: t,
								type: n
							}
						} = this.state, o = "fade" === n;
						t ? this.setState({
							animateProps: {
								height: o ? "auto" : 0,
								opacity: 0
							},
							animateStage: d.animate,
							componentHeight: e
						}, this._requestNewFrame(() => {
							this.setState({
								animateProps: {
									height: o ? "auto" : e,
									opacity: 1
								}
							})
						})) : this.setState({
							animateProps: {
								height: o ? "auto" : e,
								opacity: 1
							},
							animateStage: d.animate,
							componentHeight: e
						}, this._requestNewFrame(() => {
							this.setState({
								animateProps: {
									height: o ? "auto" : 0,
									opacity: 0
								}
							})
						}))
					}), i()(this, "_handleTransitionEnd", e => {
						const {
							onAnimateComplete: t,
							show: n
						} = this.props;
						e.target instanceof window.HTMLElement && e.target === this._animationNode && this.setState({
							animateProps: n ? h : u,
							animateStage: d.static
						}, () => t && t())
					}), i()(this, "_requestNewFrame", e => {
						window.requestAnimationFrame(() => {
							window.requestAnimationFrame(() => {
								this._mounted && e()
							})
						})
					}), i()(this, "_setAnimationNode", e => {
						this._animationNode = e
					}), i()(this, "_setMeasurementNode", e => {
						this._measurementNode = e
					}), i()(this, "_measureComponentHeight", () => this._measurementNode instanceof window.HTMLElement ? this._measurementNode.getBoundingClientRect().height : null), i()(this, "_measureAndAnimate", () => {
						const e = this._measureComponentHeight();
						e && this._transitionStart({
							componentHeight: e
						})
					})
				}
				componentDidMount() {
					this._mounted = !0, this.props.animateMount && this._measureAndAnimate()
				}
				componentWillUnmount() {
					this._mounted = !1
				}
				static getDerivedStateFromProps(e, t) {
					return e.show !== t.props.show ? t.animateStage === d.static ? {
						animateStage: d.prep,
						renderChildren: e.show ? e.children : t.props.children,
						props: e
					} : {
						animateStage: d.animate,
						animateProps: e.show ? Object.assign({}, h, {
							height: t.componentHeight
						}) : u,
						props: e
					} : {
						props: e,
						renderChildren: e.children
					}
				}
				componentDidUpdate() {
					this.state.animateStage === d.prep && this._measureAndAnimate()
				}
				render() {
					const {
						animateProps: e,
						animateStage: t,
						renderChildren: n,
						props: {
							show: o,
							duration: i,
							type: s
						}
					} = this.state, h = t === d.static, u = t === d.animate, p = "fade" === s;
					if (h && !o) return null;
					const b = [!h && {
						willChange: "opacity, height"
					}, u && m.transitionStyles, u && {
						transitionDuration: c[i] + "ms"
					}, u && !p && m.overflowHidden, !h && e];
					return Object(a.a)("div", {
						onTransitionEnd: this._handleTransitionEnd,
						ref: this._setAnimationNode,
						style: b,
						children: r.createElement(l.a, {
							ref: this._setMeasurementNode
						}, "function" == typeof n ? n({
							isAnimating: u
						}) : n)
					})
				}
			}
			i()(p, "defaultProps", {
				duration: "normal",
				type: "slide"
			});
			const m = s.a.create({
				transitionStyles: {
					transitionProperty: "opacity, height",
					transitionTimingFunction: "ease"
				},
				overflowHidden: {
					overflow: "hidden"
				}
			});
			t.b = p
		},
		zhf3: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = Object.freeze({
				homeTimeline: "homeTimeline",
				modal: "modal"
			})
		}
	}
]);