__d("KeyframesVideoManager", ["KeyframesVideoUtils", "Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = .2,
		h = 100,
		i = [.85, 1.15];
	e.exports = function() {
		function a(a) {
			this.$1 = a, this.$3 = 1 / a.doc.frameRate(), this.$2 = l(a.doc.rootLayer(), a), this.$4 = this.$5()
		}
		var c = a.prototype;
		c.getVideos = function() {
			return this.$1.videos
		};
		c.getTimeWindows = function() {
			return this.$2
		};
		c.forEach = function(a) {
			this.getVideos().forEach(a)
		};
		c.pause = function() {
			this.forEach(function(a) {
				a.pause()
			})
		};
		c.mute = function() {
			this.forEach(function(a) {
				a.muted = !0
			})
		};
		c.unMute = function() {
			this.forEach(function(a) {
				a.muted = !1
			})
		};
		c.renderProgress = function(a) {
			var b = this;
			this.$2.forEach(function(c, d) {
				var e = c.video,
					f = k(c, a),
					h = j(c, a);
				h = b.$1.doc.duration() * h;
				var l = Math.abs(h - e.currentTime);
				c = b.$1.doc.duration() * (c.toProgress - c.fromProgress);
				if (l > g && e.currentTime < c && h < c) {
					l = (c - e.currentTime) / (c - h);
					l >= i[0] && l <= i[1] && b.changeVideoPlaybackRate(d, l)
				}
				f && e.paused ? e.play() : f == !1 && e.paused == !1 && (e.pause(), e.currentTime = 0)
			})
		};
		c.$5 = function() {
			return this.$2.map(function(a) {
				var b = a.video;
				return n(function(a) {
					b.playbackRate = a
				}, h, !0)
			})
		};
		c.changeVideoPlaybackRate = function(a, b) {
			this.$4[a](b)
		};
		c.seekToProgress = function(a) {
			var c = this,
				d;
			return b("regeneratorRuntime").async(function(e) {
				while (1) switch (e.prev = e.next) {
					case 0:
						d = this.$2.map(function(d) {
							var e, f, g;
							return b("regeneratorRuntime").async(function(h) {
								while (1) switch (h.prev = h.next) {
									case 0:
										e = d.video;
										f = 0;
										k(d, a) && (g = j(d, a), f = m(c.$1.doc.duration() * g));
										e.pause();
										e.currentTime = f;
										h.next = 7;
										return b("regeneratorRuntime").awrap(b("KeyframesVideoUtils").loadVideo(e, f));
									case 7:
									case "end":
										return h.stop()
								}
							}, null, this)
						});
						e.next = 3;
						return b("regeneratorRuntime").awrap(b("Promise").all(d));
					case 3:
					case "end":
						return e.stop()
				}
			}, null, this)
		};
		return a
	}();

	function j(a, b) {
		return b - a.fromProgress
	}

	function k(a, b) {
		return b >= a.fromProgress && b <= a.toProgress
	}

	function l(a, b) {
		var c = [],
			d = a.videoIndex();
		if (d != -1) {
			var e = b.videos[d];
			d = b.doc.videos(d);
			e != null && c.push({
				fromProgress: a.fromProgress(),
				toProgress: a.toProgress(),
				name: d != null ? d.name() : null,
				video: e
			})
		}
		for (var d = 0; d < a.sublayersLength(); d++) c = c.concat(l(a.sublayers(d), b));
		return c
	}

	function m(a) {
		return Math.round(a * 100) / 100
	}

	function n(a, b, c) {
		b === void 0 && (b = 100);
		c === void 0 && (c = !1);
		var d;
		return function() {
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			var h = function() {
					d = null, c || a.apply(void 0, f)
				},
				i = c && !d;
			clearTimeout(d);
			d = setTimeout(h, b);
			i && a.apply(void 0, f)
		}
	}
}), null);