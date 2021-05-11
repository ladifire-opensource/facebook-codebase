__d("CometLoadingAnimation.react", ["cssVar", "React", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = 38,
		k = 62,
		l = 42,
		m = 2,
		n = 3,
		o = 4,
		p = j / 2,
		q = k / 2,
		r = l / 2,
		s = p - 2,
		t = q - 2,
		u = r - 2;

	function a(a) {
		var c = a.animationPaused;
		c = c === void 0 ? !1 : c;
		a = a.size;
		var d, e, f;
		switch (a) {
			case 36:
				d = j;
				e = p;
				f = s;
				break;
			case 40:
				d = l;
				e = r;
				f = u;
				break;
			case 60:
			default:
				d = k;
				e = q;
				f = t;
				break
		}
		return i.jsx("svg", {
			className: (h || (h = b("stylex"))).dedupe({
				"position-1": "pmk7jnqg"
			}, a === 36 ? {
				"start-1": "fuin34xk",
				"top-1": "l59n7fsa"
			} : null, a === 60 ? {
				"start-1": "fuin34xk",
				"top-1": "l59n7fsa"
			} : null, a === 40 ? {
				"start-1": "fuin34xk",
				"top-1": "l59n7fsa"
			} : null),
			height: d,
			width: d,
			children: i.jsx("g", {
				className: "pf5603km a5zjgiyk koppk0rk ee40wjg4 l10wm3d9" + (c ? " sb3519qa" : ""),
				children: i.jsx("circle", {
					className: h.dedupe({
						"animation-direction-1": "lqhrf7f0",
						"animation-duration-1": "l248sb3c",
						"animation-iteration-count-1": "ee40wjg4",
						"animation-timing-function-1": "a5zjgiyk",
						"transform-origin-1": "pf5603km"
					}, a === 36 ? {
						"animation-direction-1": "lqhrf7f0",
						"animation-duration-1": "l10wm3d9",
						"animation-iteration-count-1": "ee40wjg4",
						"animation-name-1": "suagjxr3",
						"animation-timing-function-1": "a5zjgiyk",
						"stroke-width-1": "s6kb5r3f"
					} : null, a === 40 ? {
						"animation-direction-1": "lqhrf7f0",
						"animation-duration-1": "l10wm3d9",
						"animation-iteration-count-1": "ee40wjg4",
						"animation-name-1": "lx74ahqj",
						"animation-timing-function-1": "a5zjgiyk",
						"stroke-width-1": "ggutxrqb"
					} : null, a === 60 ? {
						"animation-direction-1": "lqhrf7f0",
						"animation-duration-1": "l10wm3d9",
						"animation-iteration-count-1": "ee40wjg4",
						"animation-name-1": "btit5cxg",
						"animation-timing-function-1": "a5zjgiyk",
						"stroke-width-1": "gjkn0k4t"
					} : null, c ? {
						"animation-play-state-1": "sb3519qa"
					} : null),
					cx: e,
					cy: e,
					fill: "none",
					r: f,
					stroke: "#1877F2",
					strokeWidth: a === 36 ? m : a === 40 ? n : o
				})
			})
		})
	}
}), null);