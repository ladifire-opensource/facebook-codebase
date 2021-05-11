__d("Keyframes.react", ["FBLogger", "Keyframes", "React", 
	"createCancelableFunction", "promiseDone", "testID"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function h(a) {
		var b = a.width;
		a = a.height;
		b = {
			width: b || 0,
			height: a || 0
		};
		return g.jsx("div", {
			style: b
		})
	}

	function i(a) {
		var b = a.width;
		a = a.height;
		return g.jsx(h, {
			width: b,
			height: a
		})
	}
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				error: !1,
				renderer: null
			}, c.$6 = function (a) {
				c.setState({
					renderer: a,
					error: !1
				}), c.props.onLoad && c.props.onLoad(a)
			}, c.$7 = function (a) {
				c.setState({
					renderer: null,
					error: !0
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.seekToProgress = function (a) {
			this.state.renderer && this.state.renderer.seekToProgress(a)
		};
		d.componentDidMount = function () {
			this.$4(this.props.source)
		};
		d.componentWillUnmount = function () {
			this.state.renderer && this.state.renderer.pause(), this.$2 && this.$2.cancel(), this.$3 && this.$3.cancel()
		};
		d.componentDidUpdate = function (a, b) {
			if (this.props.source !== a.source || this.props.projectName !== a.projectName || this.props.assetName != null && a.assetName != null && this.props.assetName !== a.assetName || a.assetID != null && this.props.assetID != null && this.props.assetID !== a.assetID) this.$4(this.props.source);
			else {
				var c = this.state.renderer;
				c !== b.renderer ? this.$5(b.renderer, c) : c && ((a.width !== this.props.width || a.height !== this.props.height) && (c.resetDimensions(), this.props.width && c.setWidth(this.props.width), this.props.height && c.setHeight(this.props.height)), a.muted !== this.props.muted && (this.props.muted ? c.mute() : c.unMute()), a.startAt !== this.props.startAt && a.endAt !== this.props.endAt && c.setStartAndEndAt(this.props.startAt, this.props.endAt), a.startAt !== this.props.startAt && c.setStartAt(this.props.startAt), a.endAt !== this.props.endAt && c.setEndAt(this.props.endAt), a.repeatCount !== this.props.repeatCount && c.repeatCount(this.props.repeatCount), a.onError !== this.props.onError && c.onError(this.props.onError), a.onRepeatEnd !== this.props.onRepeatEnd && c.onRepeatEnd(this.props.onRepeatEnd), a.onProgress !== this.props.onProgress && c.onProgress(this.props.onProgress), a.initialProgress !== this.props.initialProgress && c.seekToProgress(this.props.initialProgress), a.playing !== this.props.playing && (this.props.playing ? c.play() : (c.pause(), this.props.resetOnPause && c.repeatCount(this.props.repeatCount).seekToProgress(this.props.initialProgress))), c.redrawIfNeeded())
			}
		};
		d.$5 = function (a, b) {
			if (!this.$1) return;
			b && (b.onError(this.props.onError).onRepeatEnd(this.props.onRepeatEnd).onProgress(this.props.onProgress).setStartAt(this.props.startAt).setEndAt(this.props.endAt).repeatCount(this.props.repeatCount), this.props.width && b.setWidth(this.props.width), this.props.height && b.setHeight(this.props.height), this.props.initialProgress && b.seekToProgress(this.props.initialProgress), this.props.muted ? b.mute() : b.unMute(), this.props.playing ? b.play() : b.pause(), b.redrawIfNeeded());
			a && b ? this.$1.replaceChild(b.getElement(), a.getElement()) : (a && this.$1.removeChild(a.getElement()), b && this.$1.appendChild(b.getElement()));
			a = this.props.canvasRef;
			if (a) {
				b = (b = b == null ? void 0 : b.getElement()) != null ? b : null;
				typeof a === "function" ? a(b) : a.current = b
			}
		};
		d.$8 = function (a) {
			return a instanceof ArrayBuffer ? b("Keyframes").requestRendererFromBytes(a, this.$9()) : b("Keyframes").requestRenderer(a, this.$9())
		};
		d.$4 = function (a) {
			this.$2 && this.$2.cancel(), this.$3 && this.$3.cancel(), !a ? this.$7() : (this.$2 = b("createCancelableFunction")(this.$6), this.$3 = b("createCancelableFunction")(this.$7), b("promiseDone")(this.$8(a), this.$2, this.$3))
		};
		d.$9 = function () {
			return this.props.assetID ? {
				projectName: this.props.projectName,
				assetID: this.props.assetID
			} : {
				projectName: this.props.projectName,
				assetName: this.props.assetName || "__FIXME__missing_react_asset_name"
			}
		};
		d.render = function () {
			var a = this,
				c = this.props,
				d = c.className,
				e = c.height,
				f = c.style;
			c = c.width;
			c = this.state.renderer ? null : this.state.error ? this.props.errorPlaceholder || g.jsx(i, {
				width: c,
				height: e
			}) : this.props.placeholder || g.jsx(h, {
				width: c,
				height: e
			});
			e = this.props.mutator && this.state.renderer && g.cloneElement(this.props.mutator, {
				__renderer: this.state.renderer
			});
			return g.jsxs("div", babelHelpers["extends"]({
				className: d
			}, b("testID")(this.props.testid), {
				ref: function (b) {
					return a.$1 = b
				},
				style: babelHelpers["extends"]({
					display: "inline-block",
					lineHeight: 0,
					fontSize: 0
				}, f),
				children: [c, e]
			}))
		};
		return c
	}(g.Component);
	e.exports = a;
	a.defaultProps = {
		initialProgress: 0,
		resetOnPause: !1,
		playing: !0,
		repeatCount: Infinity,
		startAt: 0,
		endAt: 1
	}
}), null);