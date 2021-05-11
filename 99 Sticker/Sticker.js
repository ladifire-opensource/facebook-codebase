__d("Sticker.react", ["cx", "fbt", "Arbiter", "CurrentUser", "MessengerHotLikeIconSVGM4React.bs", 
	"MessengerHotLikeSVGReact.re", "PaddedStickerConfig", "React", "StickerConstants", "clearInterval", 
	"emptyFunction", "getElementPosition", "gkx", "joinClasses", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f, g, h) {
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
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.__stopIntervalID = null, c.$1 = !1, c.$2 = i.createRef(), c.state = {
				index: 0,
				isHovered: !1,
				hasAnimated: !1,
				unsubscribeID: null
			}, c.toggleAnimation = function() {
				c.isAnimating() ? c.stopAnimation() : c.startAnimation()
			}, c.incrementFrameIndex = function() {
				c.shouldStopAnimating() ? c.stopAnimation() : c.setState({
					index: c.state.index + 1
				})
			}, c.onStickerClick = function() {
				if (!c.$3(c.props.packID)) return;
				c.props.onStickerClick && c.props.onStickerClick(c.props.packID, c.props.stickerID)
			}, c.mouseLeft = function() {
				c.setState({
					isHovered: !1
				})
			}, c.mouseEntered = function() {
				c.setState({
					isHovered: !0
				}), c.isAnimating() || c.startAnimation()
			}, c.tabFocusSelected = function() {
				c.setState({
					isHovered: !0
				}), c.isAnimating() || c.startAnimation()
			}, c.tabFocusUnselected = function() {
				c.setState({
					isHovered: !1
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			this.$1 = !0;
			this.props.onAttachmentLoad && this.props.onAttachmentLoad();
			this.__stopIntervalID = null;
			(this.props.animationTrigger === l.LOAD_AND_HOVER || this.props.animationTrigger === l.ANIMATE_FOREVER) && this.props.frameCount && this.props.frameCount > 1 && this.props.spriteURI && this.startAnimation();
			if (this.props.subscribedThreadID && this.props.frameCount && this.props.frameCount > 1) {
				var a = b("Arbiter").subscribe(this.props.subscribedThreadID, function(a, b) {
					this.isScrolledIntoView(b.scrollTop, b.viewHeight, b.top)
				}.bind(this));
				this.setState({
					unsubscribeID: a
				})
			}
		};
		d.componentWillUnmount = function() {
			this.$1 = !1, this.state.unsubscribeID && b("Arbiter").unsubscribe(this.state.unsubscribeID), this.isAnimating() && b("clearInterval")(this.__stopIntervalID)
		};
		d.isAnimating = function() {
			return !!this.__stopIntervalID
		};
		d.getWidth = function() {
			var a;
			return Math.floor((a = this.props.sourceWidth) != null ? a : 0)
		};
		d.getHeight = function() {
			var a;
			return Math.floor((a = this.props.sourceHeight) != null ? a : 0)
		};
		d.preloadSprite = function() {
			var a = new window.Image();
			a.onload = function() {
				this.$1 && !this.state.hasAnimated && (this.setState({
					hasAnimated: !0
				}), this.__stopIntervalID = b("setIntervalAcrossTransitions")(this.incrementFrameIndex, this.props.frameRate))
			}.bind(this);
			b("PaddedStickerConfig").ChatPaddedAnimatedStickerGK && this.props.paddedSpriteURI ? a.src = this.props.paddedSpriteURI : a.src = this.props.spriteURI
		};
		d.isScrolledIntoView = function(a, c, d) {
			var e = b("getElementPosition")(this.$2.current);
			d = a + e.y - d;
			c = a + c;
			e = d + e.height;
			this.props.frameCount && this.props.frameCount > 1 && !this.state.hasAnimated && e - k <= c && d + k >= a && this.startAnimation()
		};
		d.startAnimation = function() {
			!this.state.hasAnimated && this.props.spriteURI ? this.preloadSprite() : this.isAnimating() || (this.setState({
				hasAnimated: !0
			}), this.__stopIntervalID = b("setIntervalAcrossTransitions")(this.incrementFrameIndex, this.props.frameRate))
		};
		d.stopAnimation = function() {
			this.setState({
				index: 0
			}), b("clearInterval")(this.__stopIntervalID), this.__stopIntervalID = null
		};
		d.shouldStopAnimating = function() {
			var a;
			if (!this.props.frameCount) return !0;
			var b = this.state.index % this.props.frameCount;
			if (this.props.animationTrigger === l.ANIMATE_FOREVER) return !1;
			a = (a = this.props.frameRate) != null ? a : j;
			if (!(b === 0 && this.state.index * a > this.props.animationTime)) return !1;
			return this.props.animationTrigger === l.CLICK ? !0 : !this.state.isHovered
		};
		d.getStyle = function() {
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
		d.$3 = function(a) {
			return a && a != b("StickerConstants").MOBILE_LIKE_STICKER_PACK_ID && a != b("StickerConstants").GRAVEYARD_PACK_ID
		};
		d.getAriaLabel = function() {
			var a;
			return h._("Nh\u00e3n d\u00e1n {pack name} {sticker name}", [h._param("pack name", (a = this.props.packName) != null ? a : ""), h._param("sticker name", this.props.accessibilityLabel)])
		};
		d.render = function() {
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
		d.$4 = function() {
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