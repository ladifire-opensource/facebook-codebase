__d("KeyframesRenderer", ["invariant", "Promise", "regeneratorRuntime", "ErrorGuard", 
	"KeyframesCanvasPolyfills", "KeyframesCanvasPool", 
	"KeyframesCanvasUtils", "KeyframesDimensions", "KeyframesLoop", 
	"KeyframesTrackMattes", "KeyframesTween", "KeyframesVideoManager", 
	"gkx", "nullthrows", "performanceNow", "promiseDone"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i, j = b("KeyframesCanvasPolyfills").addGetTransformPolyfill,
		k = (a = b("KeyframesCanvasUtils")).drawPath,
		l = a.getCanvasLineCap,
		m = a.getCanvasStyle,
		n = a.LINE_JOINS,
		o = (c = b("KeyframesTween")).maybeTweenColor,
		p = c.maybeTweenColorArray,
		q = c.maybeTweenPath,
		r = c.maybeTweenPoint2,
		s = c.maybeTweenScalar,
		t = c.maybeTweenScalarArray,
		u = c.tweenPointOnPath,
		v = 1,
		w = {
			ERROR_FRAMEDROP: "ERROR_FRAMEDROP"
		};
	d = 60;
	var x = 1e3 / d,
		y = 1,
		z = "source-over";

	function A(a, c) {
		return b("gkx")("801076") ? (h || (h = b("ErrorGuard"))).guard(a, {
			name: c
		}) : a
	}
	var B = function () {
		function a(a, b) {
			b === void 0 && (b = 100), this.$3 = !1, this.$4 = 0, this.$1 = a, this.$2 = b
		}
		var c = a.prototype;
		c.callOrIgnoreThrottled = function () {
			if ((i || (i = b("performanceNow")))() >= this.$4) {
				for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
				this.$5(c)
			} else this.$3 = !0
		};
		c.callIfIgnored = function () {
			if (this.$3) {
				for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
				this.$5(b)
			}
		};
		c.callImmediately = function () {
			for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
			this.$5(b)
		};
		c.resetThrottling = function () {
			this.$4 = 0
		};
		c.$5 = function (a) {
			this.$3 = !1, this.$4 = (i || (i = b("performanceNow")))() + this.$2, this.$1.apply(null, a)
		};
		return a
	}();

	function C(a, b) {
		if (a.pluginsLoader) {
			a.pluginsLoader.instances.forEach(b);
			for (var c = a.subassets.length - 1; 0 <= c; c--) C(a.subassets[c], b)
		}
	}

	function D(a, b, c, d) {
		if (a.pluginsLoader) {
			for (var e = a.pluginsLoader.instances.length - 1; 0 <= e; e--) a.pluginsLoader.instances[e].animationWillRenderLayer(b, c, d);
			for (var e = a.subassets.length - 1; 0 <= e; e--) D(a.subassets[e], b, c, d)
		}
	}

	function E(a, b, c, d) {
		a.save(), a.beginPath(), a.arc(b, c, d, 0, 2 * Math.PI, !0), a.closePath(), a.clip(), a.clearRect(b - d, c - d, d * 2, d * 2), a.restore()
	}

	function F(a, b, c, d) {
		d = r(a, b.rampStart());
		var e = r(a, b.rampEnd()),
			f = b.colors(),
			g = b.positions();
		f && g ? (f = p(a, f), g = t(a, g)) : (f = [o(a, b.colorStart()), o(a, b.colorEnd())], g = [0, 1]);
		if (b.type() === v) {
			var h = b.highlightLength();
			h = h !== null ? s(a, h) : 0;
			var i = b.highlightAngle();
			i = i !== null ? s(a, b.highlightAngle()) : 0;
			a = d.x;
			b = d.y;
			var j = Math.sqrt(Math.pow(d.x - e.x, 2) + Math.pow(d.y - e.y, 2)),
				k = Math.acos((e.x - a) / j),
				l = a + j * h * Math.cos(k - i);
			k = b - j * h * Math.sin(k - i);
			i = 0;
			h !== 0 && (c.clip(), c.fillStyle = m(f[f.length - 1]), c.fill(), E(c, a, b, j));
			h = c.createRadialGradient(l, k, i, a, b, j)
		} else h = c.createLinearGradient(d.x, d.y, e.x, e.y);
		for (var l = 0, k = f.length; l < k; l++) h.addColorStop(g[l], m(f[l]));
		return h
	}

	function G(a, c, d, e, f, g, h, i, j) {
		j === void 0 && (j = y);
		if (h < Math.max(g.fromProgress(), 0) || h > Math.min(g.toProgress(), 1)) return;
		try {
			i && i.maybeInstantiatePluginsForLayer(g)
		} catch (a) {}
		a = a;
		var p, t = g.isTrackMatte(),
			v = g.trackMatteType();
		if (t || v !== 0) {
			var w = a.getTransform();
			p = c.getCanvas();
			p.ctx.setTransform(w.a, w.b, w.c, w.d, w.e, w.f);
			p.isTrackMatte = t;
			p.trackMatteType = v;
			p.ctx.globalCompositeOperation = z;
			a = p.ctx
		}
		a.save();
		w = g.position();
		if (w) {
			t = u(h, w);
			v = t.x;
			w = t.y;
			a.translate(v, w)
		} else {
			t = g.xPosition();
			t && a.translate(s(h, t), 0);
			v = g.yPosition();
			v && a.translate(0, s(h, v))
		}
		w = g.rotation();
		w && a.rotate(s(h, w));
		t = g.scale();
		if (t) {
			v = r(h, t);
			w = v.x;
			t = v.y;
			a.scale(w, t)
		}
		v = g.anchorPoint();
		if (v) {
			w = r(h, v);
			t = w.x;
			v = w.y;
			a.translate(-t, -v)
		}
		w = g.opacity();
		w = w != null ? s(h, w) : 1;
		a.globalAlpha = w * j;
		t = !1;
		if (i) {
			v = i.getPluginsForLayer(g.id());
			if (v)
				for (var x = 0; x < v.length; x++) v[x].render(a, h), t = t || v[x].rendersLayer
		}
		g.clippingPath() && (k(a, q(h, g.clippingPath())), a.clip());
		if (!t && g.path()) {
			k(a, q(h, g.path()));
			x = g.gradient();
			v = g.fillColor();
			t = !1;
			var A = !1;
			x ? (a.fillStyle = F(h, x, a), t = !0) : v && (a.fillStyle = m(o(h, v)), t = !0);
			if (g.strokeWidth()) {
				x = s(h, g.strokeWidth());
				x > 0 && (a.strokeStyle = m(o(h, g.strokeColor())), a.lineJoin = n[g.strokeLineJoin()], a.lineCap = l(g.strokeLineCap()), a.lineWidth = x, A = !0)
			}
			g.vectorCompositeOrder() === 0 ? (t && a.fill(), A && a.stroke()) : (A && a.stroke(), t && a.fill())
		}
		v = g.bitmapIndex();
		x = d[v];
		x && x.width !== 0 && x.height !== 0 && a.drawImage(x, 0, 0);
		A = g.videoIndex();
		t = e[A];
		t != null && a.drawImage(t, 0, 0, t.width, t.height);
		v = g.subdocumentIndex();
		if (f[v]) {
			x = f[v].doc.size();
			a.save();
			a.beginPath();
			a.rect(0, 0, x.width(), x.height());
			a.clip();
			G(a, c, f[v].bitmaps, f[v].videos, f[v].subassets, f[v].doc.rootLayer(), h - g.progressOffset(), f[v].pluginsLoader, w * j);
			a.restore()
		}
		var B;
		for (var A = 0; A < g.sublayersLength(); A++) {
			t = G(a, c, d, e, f, g.sublayers(A), h, i, w * j);
			if (!B && t && t.trackMatteType !== void 0) B = t;
			else if (B && t && t.isTrackMatte !== void 0) {
				x = a.getTransform();
				a.setTransform(1, 0, 0, 1, 0, 0);
				B.ctx.setTransform(1, 0, 0, 1, 0, 0);
				v = t;
				B.ctx.globalCompositeOperation = b("KeyframesTrackMattes")[B.trackMatteType === void 0 ? 1 : B.trackMatteType];
				B.ctx.drawImage(v.canvas, 0, 0);
				a.drawImage(B.canvas, 0, 0);
				a.setTransform(x.a, x.b, x.c, x.d, x.e, x.f);
				B = void 0;
				v = void 0
			} else B && !t ? (a.drawImage(B.canvas, 0, 0), B = void 0, v = void 0) : t && t.isTrackMatte !== void 0 && (B = void 0, v = void 0)
		}
		a.restore();
		return p
	}
	f = function () {
		function a(a, c) {
			var d = this;
			this.$5 = 0;
			this.$6 = 0;
			this.$8 = !1;
			this.$9 = !1;
			this.$10 = !1;
			this.$11 = 0;
			this.$16 = !1;
			this.$17 = 0;
			this.$18 = 1;
			this.$19 = 1;
			this.$21 = 1;
			this.$22 = 0;
			this.$26 = function (a) {
				(d.$12 || d.$15) && d.$34(a), !d.$16 ? d.redrawIfNeeded() : (d.$10 && d.$32(), d.$24.renderProgress(d.$11), d.$33(d.$11), d.$11 += a / d.$5, d.$14 && d.$14.callOrIgnoreThrottled(d.$17), d.$11 >= d.$21 && (d.$11 %= d.$21, d.$19 = Math.max(0, d.$19 - 1), d.$15 && d.$15.finish(), d.$19 === 0 ? d.pause() : (d.$24.seekToProgress(0), d.$15 && d.$15.start(), d.$11 += d.$22), d.$13 && d.$13(d.$19), d.$30()))
			};
			this.$33 = A(function (a) {
				a >= 0 && a <= 1 || g(0, 750, a), this.$3.clearRect(0, 0, this.$23.width.intrinsic, this.$23.height.intrinsic), this.$1.pluginsLoader && D(this.$1, a, this.$16, this.$8), this.$4.clearAllAllocated(), this.$4.freeAll(), G(this.$3, this.$4, this.$1.bitmaps, this.$1.videos, this.$1.subassets, this.$20, a, this.$1.pluginsLoader), this.$17 = a, this.$9 = !1, this.$15 && this.$15.addFrame()
			}, "KeyframesRenderer: _renderProgress()");
			this.$32 = A(function () {
				this.$2.width = this.$23.width.physical, this.$2.height = this.$23.height.physical, this.$2.style.width = this.$23.width.logical + "px", this.$2.style.height = this.$23.height.logical + "px", this.$3.setTransform(1, 0, 0, 1, 0, 0), this.$3.scale(this.$23.width.getPhysicalChangeRatio(), this.$23.height.getPhysicalChangeRatio()), this.$4.resizeAll(), this.$10 = !1, this.$9 = !0
			}, "KeyframesRenderer: _resize()");
			this.$23 = new(b("KeyframesDimensions"))(a.doc.size().width(), a.doc.size().height());
			this.$4 = new(b("KeyframesCanvasPool"))(this.$23);
			this.$2 = document.createElement("canvas");
			this.$3 = b("nullthrows")(this.$2.getContext("2d"));
			j(this.$3);
			this.$7 = new(b("KeyframesLoop"))(this.$26);
			this.$15 = c;
			this.$24 = new(b("KeyframesVideoManager"))(a);
			this.setDecodedAsset(a);
			this.$27();
			this.$25 = b("Promise").resolve()
		}
		var c = a.prototype;
		c.play = function () {
			this.$16 || (this.$16 = !0, this.isFinished() && (this.$19 = this.$18, this.$11 = this.$22), this.$15 && this.$15.start(), this.$7.start());
			return this
		};
		c.pause = function () {
			this.$16 && (this.$16 = !1, this.$15 && this.$15.pause(), this.$9 ? this.$28() : (this.$7.cancel(), this.$14 && this.$14.callIfIgnored(this.$17)));
			this.$24.pause();
			this.$29(this.$24.seekToProgress(this.$17));
			D(this.$1, this.$17, this.$16, this.$8);
			return this
		};
		c.isPlaying = function () {
			return this.$16
		};
		c.isFinished = function () {
			return this.$19 === 0
		};
		c.isMuted = function () {
			return this.$8
		};
		c.mute = function () {
			this.$8 = !0, this.$24.mute()
		};
		c.unMute = function () {
			this.$8 = !1, this.$24.unMute()
		};
		c.repeatCount = function (a) {
			this.$18 = this.$19 = Math.max(1, a);
			return this
		};
		c.repeatForever = function () {
			return this.repeatCount(Infinity)
		};
		c.getRepeatsRemaining = function () {
			return this.$19
		};
		c.seekToProgress = function (a) {
			var b = this;
			a >= 0 && a <= 1 || g(0, 749, a);
			this.$14 && this.$14.resetThrottling();
			this.$17 = this.$11 = a;
			this.$29(this.$24.seekToProgress(a).then(function () {
				return b.$28()
			}));
			a === 0 && this.$30();
			this.$28();
			return this
		};
		c.setStartAndEndAt = function (a, b) {
			if (a >= b) throw new Error("Cannot set the start time before the end time.");
			else if (b <= a) throw new Error("Cannot set the end time before the start time.");
			this.$22 = a;
			this.$21 = b;
			return this
		};
		c.setStartAt = function (a) {
			if (a >= this.$21) throw new Error("Cannot set the start time before the end time.");
			this.$22 = a;
			return this
		};
		c.setEndAt = function (a) {
			if (a <= this.$22) throw new Error("Cannot set the end time before the start time.");
			this.$21 = a;
			return this
		};
		c.getDuration = function () {
			return this.$5
		};
		c.getFrameRate = function () {
			return this.$6
		};
		c.getIntrinsicSize = function () {
			return [this.$23.width.intrinsic, this.$23.height.intrinsic]
		};
		c.getWidth = function () {
			return this.$23.width.logical
		};
		c.getHeight = function () {
			return this.$23.height.logical
		};
		c.setWidth = function (a) {
			this.$23.setWidth(a);
			this.$27();
			return this
		};
		c.setHeight = function (a) {
			this.$23.setHeight(a);
			this.$27();
			return this
		};
		c.getDecodedAsset = function () {
			return babelHelpers["extends"]({}, this.$1)
		};
		c.setDecodedAsset = function (a) {
			this.$1 = a;
			this.$5 = a.doc.duration() * 1e3;
			this.$6 = a.doc.frameRate();
			this.$20 = a.doc.rootLayer();
			this.$24 = new(b("KeyframesVideoManager"))(a);
			this.$28();
			this.$31();
			return this
		};
		c.resetDimensions = function () {
			this.$23.reset();
			this.$27();
			return this
		};
		c.onError = function (a) {
			this.$12 = a;
			return this
		};
		c.onRepeatEnd = function (a) {
			this.$13 = a;
			return this
		};
		c.onProgress = function (a, b) {
			this.$14 = a && new B(a, b);
			return this
		};
		c.getProgress = function () {
			return this.$17
		};
		c.getElement = function () {
			return this.$2
		};
		c.hasPerformanceLogging = function () {
			return !!this.$15
		};
		c.redrawIfNeeded = function () {
			(this.$10 || this.$9) && (this.$10 && this.$32(), this.$9 && this.$33(this.$17), this.$14 && this.$14.callImmediately(this.$17));
			return this
		};
		c.waitForVideoUpdate = function () {
			return b("regeneratorRuntime").async(function (a) {
				while (1) switch (a.prev = a.next) {
					case 0:
						a.next = 2;
						return b("regeneratorRuntime").awrap(this.$25);
					case 2:
					case "end":
						return a.stop()
				}
			}, null, this)
		};
		c.$29 = function (a) {
			this.$25 = a, b("promiseDone")(a)
		};
		c.$27 = function () {
			this.$10 = !0, this.$28()
		};
		c.$28 = function () {
			this.$9 = !0, this.$7.isRunning() || this.$7.start(1)
		};
		c.$31 = function () {
			C(this.$1, function (a) {
				return a.animationDidLoad()
			})
		};
		c.$30 = function () {
			var a = this;
			C(this.$1, function (b) {
				return b.animationWillRepeat(a.$11, a.$19)
			})
		};
		c.$34 = function (a) {
			a = Math.round(a / x - 1);
			a > 0 && (this.$15 && this.$15.addFrameDrop(a), this.$12 && this.$12(w.ERROR_FRAMEDROP, a))
		};
		return a
	}();
	e.exports = f
}), null);