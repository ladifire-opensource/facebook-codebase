__d("useFeedPressEventHandler", ["React", "gkx", "requireDeferred", "useStoryClickEventLogger", "uuid"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("requireDeferred")("Banzai");

	function a(a, c) {
		var d = b("useStoryClickEventLogger")();
		return g.useCallback(function (e) {
			a && a(e);
			var f = e.buttons,
				g = e.timeStamp;
			e = e.type;
			if (e === "click" || e === "press" || e === "contextmenu" || e === "pressstart" && f === 4) {
				var i = e === "contextmenu" ? 2 : f === 4 ? 1 : 0,
					j = b("uuid")();
				// b("gkx")("1245813") && h.loadImmediately(function (a) {
				// 	var b = babelHelpers["extends"]({}, a.VITAL, {
				// 		signal: !0
				// 	});
				// 	a.post("comet_metrics:click_audit", {
				// 		click_type: i === 1 ? "middle_click" : i === 2 ? "right_click" : "",
				// 		client_trace_id: j,
				// 		href: c,
				// 		ts: g
				// 	}, b)
				// });
				d(g, i, c, j)
			}
		}, [a, d, c])
	}
}), null);