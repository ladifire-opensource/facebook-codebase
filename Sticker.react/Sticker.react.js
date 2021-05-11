if (self.CavalryLogger) {
	CavalryLogger.start_js(["54I9D"]);
}

__d("MessengerColors", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.makeRadialGradient = a;
	f.makeLinearGradient = b;

	function a(a, b) {
		b === void 0 && (b = !1);
		var c = 100 / (a.length - 1);
		b = b ? a.slice() : a.slice().reverse();
		a = b.map(function (a, b) {
			return a + " " + b * c + "%"
		}).join(",");
		return "radial-gradient(circle at center 75%, " + a + ")"
	}

	function b(a, b, c) {
		var d = {};
		if (a) {
			b != null && b !== "" ? d.backgroundColor = b : d.backgroundColor = c;
			if (a.length && a.length > 0)
				if (a.length === 1) d.backgroundColor = a[0];
				else if (a.length === 2) d.backgroundImage = "linear-gradient(" + a[0] + ", " + a[1] + ")";
			else {
				var e = a.length,
					f = 100 / (e - 1);
				e = a.map(function (a, b) {
					return a + " " + b * f + "%"
				}).join(", ");
				d.backgroundImage = "linear-gradient(" + e + ")"
			}
		} else b != null && b !== "" ? d.backgroundColor = b : d.backgroundColor = c;
		return d
	}
}), null);
__d("MessengerCustomColorUtils.bs", ["cssVar", "CurrentUser"], (function (a, b, c, d, e, f, g) {
	"use strict";

	function h(a) {
		if (b("CurrentUser").isWorkUser()) return "#373e4c";
		else return "#0099ff"
	}

	function a(a) {
		a = a.solid_color;
		if (a == null) return h(0);
		else return a
	}
	f.defaultColor = h;
	f.customColorOrBlue = a
}), null);
__d("ReactStyle.bs", [], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, b, c) {
		var d = {};
		d[b] = c;
		return Object.assign({}, a, d)
	}
	f.unsafeAddProp = a
}), null);
__d("MessengerHotLikeIconSVGM4React.bs", ["cx", "React", "gkx", "uniqueID", "ReactStyle.bs", "CurrentUser", "MessengerColors", "MessengerEnvironment", "MessengerCustomColorUtils.bs"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");

	function i(a) {
		return h.jsx("path", {
			d: "M10,30 L7.75,30 C6.625,30 6,27.7515306 6,23.3673469 C6,18.9831633 6.625,16.7346939 7.75,16.7346939 L10,16.7346939 C10.552,16.7346939 11,17.1918367 11,17.755102 L11,28.9795918 C11,29.5428571 10.552,30 10,30 M17,6.02040816 C17,5.44540816 17.4195,5.00255102 18,5 C19.2035,5 22,5.79081633 22,10.6122449 C22,12.2443878 21.8015,13.130102 21.7195,13.7163265 C21.719,13.7183673 21.719,13.7204082 21.7185,13.722449 C21.6865,13.9566327 21.872,14.1647959 22.113,14.1647959 C26.908,14.1647959 29.469,15.4336735 29.469,16.7290816 C29.469,17.3612245 29.211,17.9321429 28.7975,18.3535714 C29.513,18.7591837 30,19.5091837 30,20.3780612 C30,21.3642857 29.4255,22.2045918 28.5475,22.5515306 C28.821,22.9326531 28.9845,23.3954082 28.9845,23.8969388 C28.9845,24.9704082 28.3395,25.8653061 27.3365,26.1438776 C27.4285,26.377551 27.4845,26.6290816 27.4845,26.8943878 C27.4845,28.0459184 25.5485,28.9795918 21,28.9795918 C17.675,28.9795918 15.3815,28.3857143 14.5,27.9591837 C13.851,27.6454082 13,27.0770408 13,25.4081633 L13,18.7755102 C13,15.0403061 17.25,13.7760204 17.25,10.1020408 C17.25,7.78826531 17,6.81326531 17,6.02040816",
			fill: a
		})
	}

	function a(a) {
		a = a.color;
		a = i(a);
		if (b("MessengerEnvironment").messengerui && !b("CurrentUser").isWorkUser() || b("gkx")("1072568")) return h.jsx("svg", {
			children: a,
			className: "_7oal",
			height: "36px",
			width: "36px",
			viewBox: "0 1 36 36"
		});
		else return h.jsx("svg", {
			children: a,
			height: "32px",
			width: "32px",
			viewBox: "0 0 36 36"
		})
	}

	function c(a) {
		var c;
		a = a.thread;
		var d = h.useState(function () {
			return b("uniqueID")()
		});
		d = d[0];
		var e = i("black");
		c = (c = b("ReactStyle.bs")).unsafeAddProp(c.unsafeAddProp(c.unsafeAddProp(c.unsafeAddProp(b("MessengerColors").makeLinearGradient(a.gradient_colors, a.solid_color, b("MessengerCustomColorUtils.bs").defaultColor(0)), "backgroundAttachment", "fixed"), "height", "95%"), "width", "95%"), "margin", "auto");
		return h.jsxs(h.Fragment, {
			children: [h.jsxs("svg", {
				children: [h.jsxs("mask", {
					children: [h.jsx("rect", {
						height: "100%",
						width: "100%",
						fill: "white",
						x: "0",
						y: "0"
					}), e],
					id: d
				}), h.jsx("rect", {
					className: "_8rsr",
					height: "100%",
					width: "100%",
					fill: "white",
					mask: "url(#" + (String(d) + ")")
				})],
				style: {
					height: "100%",
					position: "absolute",
					width: "100%"
				},
				viewBox: "0 0 36 36"
			}), h.jsx("div", {
				style: c
			})]
		})
	}
	d = a;
	e = c;
	f.pathHotLike = i;
	f.make = d;
	f.makeWithGradient = e
}), null);
__d("MessengerHotLikeSVGReact.bs", ["cx", "fbt", "cssVar", "React", "uniqueID", "bs_belt_Option", "CurrentUser", "joinClasses", "MessengerEnvironment"], (function (a, b, c, d, e, f, g, h, i) {
	"use strict";
	var j = b("React"),
		k = "transparent",
		l = h._("K\u00fd hi\u1ec7u gi\u01a1 ng\u00f3n tay c\u00e1i");

	function a(a) {
		var c = a.className;
		a = a.color;
		var d = j.useState(function () {
			return b("uniqueID")()
		});
		d = d[0];
		var e, f = 0;
		a == null || a === "" ? f = 1 : e = a;
		f === 1 && (e = b("CurrentUser").isWorkUser() ? "#373e4c" : b("MessengerEnvironment").messengerui ? "#0084ff" : "#4080ff");
		a = {
			children: j.jsxs("svg", {
				children: [j.jsx("title", {
					children: l,
					id: d
				}), j.jsx("g", {
					children: j.jsxs("g", {
						children: [j.jsx("polyline", {
							fill: k,
							points: "256,0 258,256 2,258 "
						}), j.jsx("path", {
							d: "M254,147.1c0-12.7-4.4-16.4-9-20.1c2.6-4.2,5.1-10.2,5.1-18c0-15.8-12.3-25.7-32-25.7h-52c-0.5,0-1-0.5-0.9-1\n                 c1.4-8.6,3-24,3-31.7c0-16.7-4-37.5-19.3-45.7c-4.5-2.4-8.3-3.7-14.1-3.7c-8.8,0-14.6,3.6-16.7,5.9c-1.3,1.4-1.9,3.3-1.8,5.2\n                 l1.3,34.6c0.2,2.8-0.3,5.4-1.6,7.7l-24,47.8c-1.7,3.5-4.2,6.6-7.6,8.5c-3.5,2-6.5,5.9-6.5,9.5v94.8C78,230,94,238,112.3,238h86.1\n                 c13.5,0,22.4-4.5,27.2-13.5c4.4-8.2,3.2-15.8,1.4-21.5c7.4-2.3,14.8-8,16.9-18.3c1.3-6.6-0.7-12.1-2.9-16.2\n                 C247.5,165,254,159.8,254,147.1z",
							fill: e,
							stroke: k,
							strokeLinecap: "round",
							strokeWidth: "5%"
						}), j.jsx("path", {
							d: "M56.2,100H13.8C7.3,100,2,105.3,2,111.8v128.5c0,6.5,5.3,11.8,11.8,11.8h42.4c6.5,0,11.8-5.3,11.8-11.8V111.8\n                 C68,105.3,62.7,100,56.2,100z",
							fill: e
						})]
					})
				})],
				"aria-labelledby": d,
				role: "img",
				height: "100%",
				width: "100%",
				version: "1.1",
				viewBox: "0 0 256 256",
				x: "0px",
				y: "0px"
			}),
			className: b("joinClasses")(b("bs_belt_Option").getWithDefault(c, ""), "_1i1j")
		};
		a["data-testid"] = "messenger_hotlike_svg";
		return j.jsx("div", a)
	}
	c = a;
	f.cTRANSPARENT = k;
	f.label = l;
	f.make = c
}), null);
__d("MessengerHotLikeSVGReact.re", ["MessengerHotLikeSVGReact.bs"], (function (a, b, c, d, e, f) {
	(function (a) {
		return null
	});
	a = b("MessengerHotLikeSVGReact.bs").make;
	f.make = a
}), null);
__d("WIGIcon.react", ["React", "TetraIcon.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, a))
	}
}), null);
__d("Sticker.react", ["cx", "fbt", "Arbiter", "CurrentUser", "MessengerHotLikeIconSVGM4React.bs", "MessengerHotLikeSVGReact.re", "PaddedStickerConfig", "React", "StickerConstants", "clearInterval", "emptyFunction", "getElementPosition", "gkx", "joinClasses", "setIntervalAcrossTransitions"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = 83;
	a = 5e3;
	var k = 10,
		l = {
			CLICK: "click",
			HOVER: "hover",
			LOAD_AND_HOVER: "load_and_hover",
			ANIMATE_FOREVER: "animate_forever"
		};
	c = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.__stopIntervalID = null, c.$1 = !1, c.$2 = i.createRef(), c.state = {
				index: 0,
				isHovered: !1,
				hasAnimated: !1,
				unsubscribeID: null
			}, c.toggleAnimation = function () {
				c.isAnimating() ? c.stopAnimation() : c.startAnimation()
			}, c.incrementFrameIndex = function () {
				c.shouldStopAnimating() ? c.stopAnimation() : c.setState({
					index: c.state.index + 1
				})
			}, c.onStickerClick = function () {
				if (!c.$3(c.props.packID)) return;
				c.props.onStickerClick && c.props.onStickerClick(c.props.packID, c.props.stickerID)
			}, c.mouseLeft = function () {
				c.setState({
					isHovered: !1
				})
			}, c.mouseEntered = function () {
				c.setState({
					isHovered: !0
				}), c.isAnimating() || c.startAnimation()
			}, c.tabFocusSelected = function () {
				c.setState({
					isHovered: !0
				}), c.isAnimating() || c.startAnimation()
			}, c.tabFocusUnselected = function () {
				c.setState({
					isHovered: !1
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.componentDidMount = function () {
			this.$1 = !0;
			this.props.onAttachmentLoad && this.props.onAttachmentLoad();
			this.__stopIntervalID = null;
			(this.props.animationTrigger === l.LOAD_AND_HOVER || this.props.animationTrigger === l.ANIMATE_FOREVER) && this.props.frameCount && this.props.frameCount > 1 && this.props.spriteURI && this.startAnimation();
			if (this.props.subscribedThreadID && this.props.frameCount && this.props.frameCount > 1) {
				var a = b("Arbiter").subscribe(this.props.subscribedThreadID, function (a, b) {
					this.isScrolledIntoView(b.scrollTop, b.viewHeight, b.top)
				}.bind(this));
				this.setState({
					unsubscribeID: a
				})
			}
		};
		d.componentWillUnmount = function () {
			this.$1 = !1, this.state.unsubscribeID && b("Arbiter").unsubscribe(this.state.unsubscribeID), this.isAnimating() && b("clearInterval")(this.__stopIntervalID)
		};
		d.isAnimating = function () {
			return !!this.__stopIntervalID
		};
		d.getWidth = function () {
			var a;
			return Math.floor((a = this.props.sourceWidth) != null ? a : 0)
		};
		d.getHeight = function () {
			var a;
			return Math.floor((a = this.props.sourceHeight) != null ? a : 0)
		};
		d.preloadSprite = function () {
			var a = new window.Image();
			a.onload = function () {
				this.$1 && !this.state.hasAnimated && (this.setState({
					hasAnimated: !0
				}), this.__stopIntervalID = b("setIntervalAcrossTransitions")(this.incrementFrameIndex, this.props.frameRate))
			}.bind(this);
			b("PaddedStickerConfig").ChatPaddedAnimatedStickerGK && this.props.paddedSpriteURI ? a.src = this.props.paddedSpriteURI : a.src = this.props.spriteURI
		};
		d.isScrolledIntoView = function (a, c, d) {
			var e = b("getElementPosition")(this.$2.current);
			d = a + e.y - d;
			c = a + c;
			e = d + e.height;
			this.props.frameCount && this.props.frameCount > 1 && !this.state.hasAnimated && e - k <= c && d + k >= a && this.startAnimation()
		};
		d.startAnimation = function () {
			!this.state.hasAnimated && this.props.spriteURI ? this.preloadSprite() : this.isAnimating() || (this.setState({
				hasAnimated: !0
			}), this.__stopIntervalID = b("setIntervalAcrossTransitions")(this.incrementFrameIndex, this.props.frameRate))
		};
		d.stopAnimation = function () {
			this.setState({
				index: 0
			}), b("clearInterval")(this.__stopIntervalID), this.__stopIntervalID = null
		};
		d.shouldStopAnimating = function () {
			var a;
			if (!this.props.frameCount) return !0;
			var b = this.state.index % this.props.frameCount;
			if (this.props.animationTrigger === l.ANIMATE_FOREVER) return !1;
			a = (a = this.props.frameRate) != null ? a : j;
			if (!(b === 0 && this.state.index * a > this.props.animationTime)) return !1;
			return this.props.animationTrigger === l.CLICK ? !0 : !this.state.isHovered
		};
		d.getStyle = function () {
			var a, c = 0,
				d = this.props.spriteURI;
			a = (a = this.props.scale) != null ? a : 1;
			var e = this.getHeight() * a;
			a = this.getWidth() * a;
			if (b("PaddedStickerConfig").ChatPaddedAnimatedStickerGK && this.props.paddedSpriteURI) {
				d = this.props.paddedSpriteURI;
				var f = 240 / Math.min(e, a);
				c = Math.floor(parseInt(b("StickerConstants").SPRITE_PADDING, 10) / f)
			}
			f = this.props.frameCount ? this.state.index % this.props.frameCount : 0;
			var g = this.props.framesPerRow ? f % this.props.framesPerRow * (a + c * 2) + c : 0;
			f = this.props.framesPerRow ? Math.floor(f / this.props.framesPerRow) * (e + c * 2) + c : 0;
			var h = this.props.frameCount && this.props.frameCount > 1 && this.props.animationTrigger === l.CLICK || this.$3(this.props.packID);
			h = this.props.forceCursorPointer || h ? "pointer" : "default";
			if (!this.state.hasAnimated || !this.props.spriteURI || !d || !this.props.framesPerRow || !this.props.framesPerCol) return {
				backgroundImage: this.$4() || !this.props.sourceURI ? null : "url(" + this.props.sourceURI.toString() + ")",
				backgroundRepeat: "no-repeat",
				backgroundSize: a + "px " + e + "px",
				cursor: h,
				height: e,
				width: a
			};
			else return {
				backgroundSize: (a + c * 2) * this.props.framesPerRow + "px " + (e + c * 2) * this.props.framesPerCol + "px",
				backgroundImage: "url(" + d.toString() + ")",
				backgroundPosition: -g + "px " + -f + "px",
				cursor: h,
				height: e,
				width: a,
				imageRendering: "-webkit-optimize-contrast"
			}
		};
		d.$3 = function (a) {
			return a && a != b("StickerConstants").MOBILE_LIKE_STICKER_PACK_ID && a != b("StickerConstants").GRAVEYARD_PACK_ID
		};
		d.getAriaLabel = function () {
			var a;
			return h._("Nh\u00e3n d\u00e1n {pack name} {sticker name}", [h._param("pack name", (a = this.props.packName) != null ? a : ""), h._param("sticker name", this.props.accessibilityLabel)])
		};
		d.render = function () {
			var a, c;
			this.props.animationTrigger === l.CLICK && this.props.frameCount && this.props.frameCount > 1 && this.props.spriteURI ? a = !0 : (this.props.animationTrigger === l.HOVER || this.props.animationTrigger === l.LOAD_AND_HOVER) && this.props.frameCount && this.props.frameCount > 1 && this.props.spriteURI && (c = !0);
			var d = a ? this.toggleAnimation : null;
			this.props.packID && (d = this.onStickerClick);
			var e = this.props.className,
				f = null;
			this.$4() && (e = b("joinClasses")(e, "_576q"), (!b("CurrentUser").isWorkUser() || b("gkx")("1072568")) && this.props.thread != null ? f = i.jsx(b("MessengerHotLikeIconSVGM4React.bs").makeWithGradient, {
				thread: this.props.thread
			}) : f = i.jsx(b("MessengerHotLikeSVGReact.re").make, {
				color: this.props.customColor
			}));
			return i.jsx("div", {
				"aria-label": this.getAriaLabel(),
				className: e,
				"data-testid": void 0,
				onBlur: this.tabFocusUnselected,
				onClick: d,
				onFocus: this.tabFocusSelected,
				onMouseEnter: c ? this.mouseEntered : null,
				onMouseLeave: c ? this.mouseLeft : null,
				role: "img",
				style: this.getStyle(),
				tabIndex: this.props.tabIndex,
				ref: this.$2,
				children: f
			})
		};
		d.$4 = function () {
			return !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect ? this.props.stickerID === b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID || this.props.stickerID === b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID || this.props.stickerID === b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID : !1
		};
		return c
	}(i.Component);
	e.exports = c;
	c.defaultProps = {
		animationTime: a,
		accessibilityLabel: "",
		forceCursorPointer: !1,
		frameRate: j,
		onStickerClick: b("emptyFunction"),
		packID: null,
		packName: "",
		tabIndex: 0
	}
}), null);