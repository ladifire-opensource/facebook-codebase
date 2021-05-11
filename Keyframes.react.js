if (self.CavalryLogger) {
	CavalryLogger.start_js(["avYgD"]);
}

__d("KeyframesAsyncSession", ["Promise", "promiseDone", "requireDeferred"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("requireDeferred")("FBKeyframesLoggedSession");
	a = function () {
		function a(c) {
			var d = this;
			this.$3 = function () {
				var c = a.timestamp();
				b("promiseDone")(d.$1, function (a) {
					return a.error(c)
				})
			};
			this.$1 = g.load().then(function (a) {
				return new a(c)
			});
			this.$2 = this.$1.then(function (a) {
				return a.getPerformanceLogIfEnabled()
			})
		}
		a.timestamp = function () {
			return {
				value: Date.now()
			}
		};
		var c = a.prototype;
		c.scheduleDecode = function (c, d) {
			var e = c.then(function () {
					return a.timestamp()
				}),
				f = c.then(function () {
					return d
				}).then(function () {
					return a.timestamp()
				}),
				g = d.then(function (a) {
					return a && a.pluginsLoader != null && a.pluginsLoader.getPluginTable instanceof Function ? a.pluginsLoader.getPluginTable() : []
				});
			c = b("Promise").all([this.$1, e]).then(function (a) {
				var c = a[0];
				a = a[1];
				c = c.startDecode(a);
				return b("Promise").all([c, f, g])
			});
			b("promiseDone")(c, function (a) {
				var b = a[0],
					c = a[1];
				a = a[2];
				return b(c, a)
			}, this.$3)
		};
		c.maybeGetPerformanceLog = function () {
			return this.$2
		};
		return a
	}();
	e.exports = a
}), null);
__d("KeyframesDownloadTracker", ["Promise", "NetworkStatus", "XHRRequest", "setTimeout"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = 2,
		h = 250;

	function a(a) {
		return new(b("Promise"))(function (c, d) {
			var e = 0,
				f, i = function f() {
					e++, new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function (a) {
						var c = e <= g;
						c ? b("setTimeout")(f, h) : d(a)
					}).setAbortHandler(function (a) {
						d(a)
					}).setResponseHandler(function (a) {
						c(a)
					}).send()
				};
			if (b("NetworkStatus").isOnline()) i();
			else {
				var j = function (a) {
					a = a.online;
					a && (i(), f.remove())
				};
				f = b("NetworkStatus").onChange(j)
			}
		})
	}
}), null);
__d("KeyframesDecodedAssetRequest", ["Promise", "KeyframesDownloadTracker", "promiseDone", "requireDeferred"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("requireDeferred")("KeyframesAssetDecoder"),
		h = b("requireDeferred")("KeyframesRenderer");

	function i(a) {
		return !a || typeof a !== "string" ? b("Promise").reject("Request: invalid uri " + a) : b("KeyframesDownloadTracker")(a)
	}
	a = function () {
		function a(a, c) {
			var d = this;
			this.$1 = !1;
			a = b("Promise").all([typeof a === "string" ? i(a) : a, g.load()]);
			this.$2 = a.then(function (a) {
				var b = a[0];
				a = a[1];
				return a.fromDocumentBytes(b)
			});
			c.scheduleDecode(a, this.$2);
			b("promiseDone")(this.$2, function () {
				return d.$1 = !0
			}, function () {
				return d.$1 = !0
			})
		}
		var c = a.prototype;
		c.isDone = function () {
			return this.$1
		};
		c.getAsset = function () {
			return this.$2
		};
		c.getRenderer = function (a) {
			return b("Promise").all([this.$2, h.load(), a.maybeGetPerformanceLog()]).then(function (a) {
				var b = a[0],
					c = a[1];
				a = a[2];
				return new c(b, a)
			})
		};
		return a
	}();
	e.exports = a
}), null);
__d("Keyframes", ["Promise", "Bootloader", "KeyframesAsyncSession", "KeyframesDecodedAssetRequest", "KeyframesDownloadTracker", "emptyFunction"], (function (a, b, c, d, e, f) {
	"use strict";
	f.requestRenderer = a;
	f.preload = c;
	f.load = d;
	f.requestRendererFromBytes = e;
	f.loadFromBytes = j;
	f.hasLoaded = k;
	f.clearCache = l;
	var g = {},
		h = {};

	function i(a, c) {
		if (!a || typeof a !== "string") return b("Promise").reject("Request: invalid uri " + a);
		var d = g[a];
		if (d) return d;
		d = b("KeyframesDownloadTracker")(a);
		c === !0 && (g[a] = d);
		return d
	}

	function a(a, c) {
		c = new(b("KeyframesAsyncSession"))(c);
		h[a] || (h[a] = new(b("KeyframesDecodedAssetRequest"))(a, c));
		return h[a].getRenderer(c)
	}

	function c(a) {
		h[a] || i(a, !0), b("Bootloader").preloadModules(["KeyframesRenderer", "FBKeyframesLoggedSession", "KeyframesAssetDecoder"])
	}

	function d(a, c) {
		if (!h[a]) {
			c = new(b("KeyframesAsyncSession"))(c);
			h[a] = new(b("KeyframesDecodedAssetRequest"))(a, c)
		}
		return b("Promise").all([h[a].getAsset()]).then(b("emptyFunction"))
	}

	function e(a, c) {
		c = new(b("KeyframesAsyncSession"))(c);
		return new(b("KeyframesDecodedAssetRequest"))(a, c).getRenderer(c)
	}

	function j(a, c) {
		c = new(b("KeyframesAsyncSession"))(c);
		return new(b("KeyframesDecodedAssetRequest"))(a, c).getAsset()
	}

	function k(a) {
		return !!(h[a] && h[a].isDone())
	}

	function l() {
		h = {}, g = {}
	}
}), null);
__d("Keyframes.react", ["FBLogger", "Keyframes", "React", "createCancelableFunction", "promiseDone", "testID"], (function (a, b, c, d, e, f) {
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
__d("FBKeyframesXHPBootstrap.react", ["Keyframes.react", "OnVisible.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
				playing: c.props.playing === "always"
			}, c.$1 = function () {
				return c.setState({
					playing: !0
				})
			}, c.$2 = function () {
				return c.setState({
					playing: !1
				})
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.render = function () {
			var a = this.props;
			a.playing;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["playing"]);
			a = g.jsx(b("Keyframes.react"), babelHelpers["extends"]({}, a, {
				playing: this.state.playing
			}));
			return this.props.playing === "onvisible" ? g.jsx(b("OnVisible.react"), {
				onVisible: this.$1,
				onHidden: this.$2,
				children: a
			}) : a
		};
		return c
	}(g.Component);
	e.exports = a
}), null);