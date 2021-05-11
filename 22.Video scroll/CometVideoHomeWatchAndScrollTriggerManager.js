__d("CometVideoHomeWatchAndScrollTriggerManager.react", ["CometSetWatchAndScrollVideoContext", 
	"CometVideoHomeWatchAndScrollTriggerContext", "CometWatchAndScrollVideoContext",
	 "React", "qex", "requireDeferred", "useCometRouterMainTabKey", "usePrevious"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("requireDeferred")("VideoHomeTypedLoggerLite");

	function a(a) {
		a = a.children;
		var c = g.useState(null),
			d = c[0],
			e = c[1];
		c = g.useState(!1);
		var f = c[0],
			i = c[1],
			j = d == null ? void 0 : d.portableVideoID,
			k = g.useCallback(function (a, b) {
				j === a && i(b)
			}, [j]),
			l = g.useContext(b("CometSetWatchAndScrollVideoContext")),
			m = g.useContext(b("CometWatchAndScrollVideoContext")),
			n = b("useCometRouterMainTabKey")(),
			o = b("usePrevious")(n);
		c = g.useMemo(function () {
			return {
				setIsTriggerVideoEligible: k,
				setWatchAndScrollTriggerVideo: e
			}
		}, [k]);
		g.useEffect(function () {
			o === "watch" && n !== "watch" && m == null && d != null && f && !!b("qex")._("1785180") && (l(d), e(null), i(!1), h.onReady(function (a) {
				a.log({
					event: "watch_and_scroll_trigger_from_watch",
					event_target_info: n
				})
			}))
		}, [m, o, l, f, n, d]);
		return g.jsx(b("CometVideoHomeWatchAndScrollTriggerContext").Provider, {
			value: c,
			children: a
		})
	}
}), null);