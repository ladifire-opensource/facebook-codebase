__d("CometSSRReplaceContentOnHydrationAndBreakEventReplaying.react", [
	"CometPlaceholder.react", 
	"CometSSRSuspendOnServer.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children;
		a = a.useSuspenseDirectlyForSVG;
		a = a === !0 ? g.Suspense : b("CometPlaceholder.react");
		return g.jsx(a, {
			fallback: c,
			children: g.jsx(b("CometSSRSuspendOnServer.react"), {
				children: c
			})
		})
	}
}), null);