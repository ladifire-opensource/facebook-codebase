__d("Keyframes", ["Bootloader", "KeyframesAsyncSession", "KeyframesDecodedAssetRequest", 
	"KeyframesDownloadTracker", "Promise", "emptyFunction"], (function(a, b, c, d, e, f) {
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
		h[a] || i(a, !0), b("Bootloader").loadModules(["KeyframesRenderer", "FBKeyframesLoggedSession", "KeyframesAssetDecoder"], function() {}, "Keyframes")
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