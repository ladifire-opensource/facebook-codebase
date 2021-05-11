__d("CometWatchAndScrollProvider.react", ["CometSetWatchAndScrollVideoContext", 
	"CometVideoHomeWatchAndScrollTriggerManager.react", 
	"CometWatchAndScrollSetStoryViewabilityLoggerContext", 
	"CometWatchAndScrollSoundContext", 
	"CometWatchAndScrollStoryViewabilityLoggerContext", 
	"CometWatchAndScrollVideoContext", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = a.children;
		var c = g.useState(null),
			d = c[0];
		c = c[1];
		var e = g.useState(null),
			f = e[0];
		e = e[1];
		var h = g.useState(null),
			i = h[0],
			j = h[1];
		h = g.useState(null);
		var k = h[0],
			l = h[1];
		h = g.useMemo(function () {
			return {
				muted: k,
				setMuted: l,
				setVolume: j,
				volume: i
			}
		}, [k, l, j, i]);
		return g.jsx(b("CometWatchAndScrollVideoContext").Provider, {
			value: d,
			children: g.jsx(b("CometSetWatchAndScrollVideoContext").Provider, {
				value: c,
				children: g.jsx(b("CometWatchAndScrollStoryViewabilityLoggerContext").Provider, {
					value: f,
					children: g.jsx(b("CometWatchAndScrollSetStoryViewabilityLoggerContext").Provider, {
						value: e,
						children: g.jsx(b("CometVideoHomeWatchAndScrollTriggerManager.react"), {
							children: g.jsx(b("CometWatchAndScrollSoundContext").Provider, {
								value: h,
								children: a
							})
						})
					})
				})
			})
		})
	}
}), null);