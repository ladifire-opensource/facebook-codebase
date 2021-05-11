__d("KeyframesDecodedAssetRequest", ["Promise", "KeyframesDownloadTracker", "promiseDone", "requireDeferred"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("requireDeferred")("KeyframesAssetDecoder"),
		h = b("requireDeferred")("KeyframesRenderer");

	function i(a) {
		return !a || typeof a !== "string" ? b("Promise").reject("Request: invalid uri " + a) : b("KeyframesDownloadTracker")(a)
	}
	a = function() {
		function a(a, c) {
			var d = this;
			this.$1 = !1;
			a = b("Promise").all([typeof a === "string" ? i(a) : a, g.load()]);
			this.$2 = a.then(function(a) {
				var b = a[0];
				a = a[1];
				return a.fromDocumentBytes(b)
			});
			c.scheduleDecode(a, this.$2);
			b("promiseDone")(this.$2, function() {
				return d.$1 = !0
			}, function() {
				return d.$1 = !0
			})
		}
		var c = a.prototype;
		c.isDone = function() {
			return this.$1
		};
		c.getAsset = function() {
			return this.$2
		};
		c.getRenderer = function(a) {
			return b("Promise").all([this.$2, h.load(), a.maybeGetPerformanceLog()]).then(function(a) {
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