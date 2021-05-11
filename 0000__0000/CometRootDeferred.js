__d("CometRootDeferred", ["CometBootloaderLoggerUtil", 
	"requireCond", "CometErrorRoot.react", 
	"CometFullPageCompatRoot.react", 
	"CometVirtualCursorStatus", "CometVCTracker",
	 "DeferredCookie", "DetectBrokenProxyCache", 
	 "ErrorGuard", "JSScheduler", "cr:1201738", "cr:1813330",
	  "CometTimezoneUpdater", "CometNetworkStatusToast",
	   "SimplePageLoadLogger", "SketchComet", 
	   "WebStorageMonster", "cr:1332233", "cr:1516609", "cr:1632385"], (function (a, b, c, d, e, f) {
	"use strict";
	f.initDeferred = a;
	var g;
	b("CometErrorRoot.react");
	b("CometFullPageCompatRoot.react");
	var h = b("CometVCTracker").CometVisualCompletionTraceObserver;

	function a(a) {
		var c = a.blLoggingCavalryFields,
			d = a.deferredCookies,
			e = a.sketchInfo,
			f = a.userID;
		e != null && b("JSScheduler").scheduleSpeculativeCallback(function () {
			b("SketchComet").solveAllPrimitivesAndCallAsyncController(e.seed1, e.seed2, e.rounds)
		});
		b("cr:1632385") != null && (g || (g = b("ErrorGuard"))).applyWithGuard(function () {
			return b("cr:1632385").init()
		}, null, []);
		(g || (g = b("ErrorGuard"))).applyWithGuard(function () {
			return b("CometBootloaderLoggerUtil").initLogging(c)
		}, null, []);
		g.applyWithGuard(function () {
			return b("CometVirtualCursorStatus").initLogging()
		}, null, []);
		g.applyWithGuard(function () {
			return b("CometNetworkStatusToast").subscribe()
		}, null, []);
		g.applyWithGuard(function () {
			return b("SimplePageLoadLogger").logPageNavigationType()
		}, null, []);
		b("JSScheduler").scheduleSpeculativeCallback(function () {
			b("WebStorageMonster").schedule()
		});
		b("JSScheduler").scheduleSpeculativeCallback(function () {
			b("DetectBrokenProxyCache").run(f, "c_user")
		});
		b("cr:1201738") && h.subscribe(function (a) {
			a.interactionType === "INITIAL_LOAD" && b("cr:1201738").init()
		});
		Object.keys(d).forEach(function (a) {
			var c = d[a],
				e = c.expiration_for_js,
				f = c.first_party_only,
				g = c.path,
				h = c.secure;
			c = c.value;
			b("DeferredCookie").addToQueue(a, c, e, g, f, !1, h)
		});
		b("cr:1332233") && (g || (g = b("ErrorGuard"))).applyWithGuard(function () {
			return b("cr:1332233")()
		}, null, []);
		b("cr:1516609") != null && (g || (g = b("ErrorGuard"))).applyWithGuard(function () {
			return b("cr:1516609").initSignalCollection()
		}, null, []);
		b("cr:1813330") && (g || (g = b("ErrorGuard"))).applyWithGuard(function () {
			return b("cr:1813330").init()
		}, null, []);
		b("CometTimezoneUpdater").updateTimezoneIfNecessary()
	}
}), null);