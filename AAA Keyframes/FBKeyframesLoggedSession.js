__d("FBKeyframesLoggedSession", ["BanzaiLogger", "CurrentUser", "FacebookAppIDs", "FunnelLogger", "KeyframesPerformanceLog", "KeyframesPluginsLoader", "KeyframesVersion", "gkx", "once", "performanceNow", "uuid"], (function(a, b, c, d, e, f) {
	"use strict";
	var g;
	a = !1;
	var h = b("gkx")("1136485"),
		i = "KEYFRAMES_FUNNEL",
		j = "KeyframesFramePerfLoggerConfig",
		k = 2,
		l = 9e18,
		m = {
			appid: b("FacebookAppIDs").WWW,
			appversion: null,
			connection_class: null,
			country: null,
			deviceid: null,
			extras: null,
			isemployee: b("CurrentUser").isEmployee() ? 1 : 0,
			name: "keyframes_frame_perf_report",
			vc: null,
			year_class: null
		};

	function n(a) {
		return parseInt(a.match(/[a-f0-9]+$/gi), 16)
	}

	function o() {
		var a = (g || (g = b("performanceNow")))();
		return function() {
			return Math.floor((g || (g = b("performanceNow")))() - a)
		}
	}

	function p() {
		return {
			value: Date.now()
		}
	}
	c = function() {
		function a(c, d) {
			var e = this;
			this.$2 = !1;
			this.$3 = 0;
			this.$5 = 1;
			this.$11 = b("KeyframesVersion").getCurrentVersion();
			this.$15 = function(b) {
				e.$13("play_ended");
				e.$3++;
				if (e.$3 === e.$5) {
					b = Object.assign({}, b, m, {
						animation_duration: String(b.animation_duration),
						asset_id: e.$6.assetID || null,
						asset_name: e.$6.assetID ? null : e.$6.assetName,
						display_refresh_rate: String(b.display_refresh_rate),
						keyframes_version: e.$11,
						project_name: e.$6.projectName,
						session_id: e.$9
					});
					a.performanceLoggingMethod(b);
					e.$5 < l && (e.$5 *= k)
				}
			};
			this.$16 = function(a) {
				switch (a) {
					case "start":
						e.$13("play_started");
						return;
					case "pause":
						e.$13("play_ended");
						return
				}
			};
			this.$10 = d || p();
			this.$6 = c;
			this.$9 = b("uuid")();
			this.$4 = n(this.$9)
		}
		a.performanceLoggingMethod = function(a) {
			b("BanzaiLogger").log(j, a)
		};
		var c = a.prototype;
		c.startDecode = function(a) {
			var c = this;
			if (!this.$1) {
				this.$12();
				this.$13("asset_decode_started", a);
				var d = o();
				this.$1 = b("once")(function(a, b) {
					c.$13("asset_decode_ended", a, {
						"time_since:asset_decode_started": d(),
						plugins_decoded: b || []
					})
				})
			}
			return this.$1
		};
		c.error = function(a) {
			this.$12(), this.$1 ? this.$14("asset_decode_failed", a) : this.$14("asset_request_failed", a)
		};
		c.getUUID = function() {
			return this.$9
		};
		c.getInstanceID = function() {
			return this.$4
		};
		c.getPerformanceLogIfEnabled = function() {
			var a = this;
			if (h) {
				if (!this.$7) {
					var c = this.$12(),
						d = new(b("KeyframesPerformanceLog"))(this.$15, this.$16);
					d.onNextFrame(function() {
						return a.$13("first_frame_rendered", p(), {
							"time_since:session_started": c()
						})
					});
					this.$7 = d
				}
				return this.$7
			}
			return null
		};
		c.$12 = function() {
			this.$8 || (h && (b("FunnelLogger").startFunnelAtTime(i, this.$10.value, this.$4), this.$13("session_started", this.$10, {
				supported_plugins: Object.keys(b("KeyframesPluginsLoader").getSupportedPlugins())
			})), this.$8 = o());
			return this.$8
		};
		c.$13 = function(a, c, d) {
			c = c || p(), h && (this.$2 || b("FunnelLogger").appendActionAtTimeWithPayload(i, c.value, this.$4, a, Object.assign({}, this.$17(), d)))
		};
		c.$14 = function(a, c) {
			c = c || p(), h && (this.$2 || (this.$13("session_failed", c, {
				fail_reason: a
			}), b("FunnelLogger").endFunnelAtTime(i, c.value, this.$4), this.$2 = !0))
		};
		c.$17 = function() {
			return {
				asset_id: this.$6.assetID || null,
				asset_name: this.$6.assetID ? null : this.$6.assetName,
				asset_source: "network",
				keyframes_version: this.$11,
				project_name: this.$6.projectName,
				session_id: this.$9
			}
		};
		return a
	}();
	e.exports = c
}), null);