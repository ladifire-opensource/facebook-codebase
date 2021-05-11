__d("VideoPlayerCaptionsArea.react", ["React", "VideoPlayerCaptions.react", 
	"VideoPlayerContexts", "VideoPlayerHooks"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a, b) {
		switch (b.type) {
			case "reserve":
				return a.concat(b.reservation);
			case "release":
				return a.filter(function(a) {
					return a !== b.reservation
				});
			default:
				return a
		}
	}

	function a(a) {
		a = a.children;
		var c = g.useReducer(h, []),
			d = c[0],
			e = c[1];
		c = g.useState({
			release: function(a) {
				e({
					reservation: a,
					type: "release"
				})
			},
			reserve: function(a) {
				e({
					reservation: a,
					type: "reserve"
				});
				return a
			}
		});
		c = c[0];
		var f = b("VideoPlayerHooks").useCaptionsVisible();
		return g.jsx(b("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext.Provider, {
			value: c,
			children: g.jsxs(b("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext.Provider, {
				value: d,
				children: [f ? g.jsx(b("VideoPlayerCaptions.react"), {}) : null, a]
			})
		})
	}
}), null);