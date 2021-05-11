__d("CometRoot", ["cx", "BuildCometRoot", 
	"CometRootSSRClient", "ExecutionEnvironment", "requireDeferred"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.initDeferred = a;
	f.initRoute = c;
	var h = b("requireDeferred")("CometRootDeferred");

	function a(a) {
		h.onReady(function (b) {
			b.initDeferred(a)
		})
	}

	function c(a, c, d, e, f) {
		if (!b("ExecutionEnvironment").canUseDOM) return;
		b("CometRootSSRClient").initRoute({
			buildRootComponent: b("BuildCometRoot").buildRootComponent
		}, a, c, d, e, f)
	}
}), null);