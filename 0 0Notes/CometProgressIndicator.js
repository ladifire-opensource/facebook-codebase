__d("CometProgressIndicator.react", ["CometVisualCompletionAttributes", "FocusWithinHandler.react", "React", "ariaGlimmerProps", "stylex", "useCometLoadingStateTracker"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			animateDot: {
				animationDuration: "r7fvqmod",
				animationIterationCount: "ee40wjg4",
				animationName: "omtukq3v",
				animationTimingFunction: "q0a5ri7c",
				opacity: "lyadkbl6",
				transform: "d8domg9s"
			},
			animationDelay300: {
				animationDelay: "oeefd0zo"
			},
			animationDelay600: {
				animationDelay: "ftwn7utp"
			},
			hideOutline: {
				outline: "lzcic4wl"
			},
			root: {
				display: "j83agx80",
				flexDirection: "btwxx1t3"
			}
		},
		j = {
			"default": {
				borderTopStartRadius: "jk6sbkaj",
				borderTopEndRadius: "kdgqqoy6",
				borderBottomEndRadius: "ihh4hy1g",
				borderBottomStartRadius: "qttc61fc",
				height: "t6na6p9t",
				marginEnd: "kady6ibp",
				marginStart: "dwxx2s2f",
				width: "c9rrlmt1"
			},
			small: {
				borderTopStartRadius: "s8bnoagg",
				borderTopEndRadius: "bn9qtmzc",
				borderBottomEndRadius: "hp05c5td",
				borderBottomStartRadius: "b6jg2yqc",
				height: "mw227v9j",
				marginEnd: "ditlmg2l",
				marginStart: "nvdbi5me",
				width: "loos5mxf"
			}
		},
		k = {
			media: {
				backgroundColor: "q2y6ezfg"
			},
			primary: {
				backgroundColor: "rsyf18zc"
			}
		};

	function a(a) {
		var c = a.noLoadingStateTracker,
			d = a.overrideBGColorContext;
		d = d === void 0 ? "primary" : d;
		a = a.size;
		a = a === void 0 ? "default" : a;
		var e = b("useCometLoadingStateTracker")(),
			f = e[0],
			l = e[1];
		c === !0 && (f = b("CometVisualCompletionAttributes").IGNORE, l = null);
		var m = [i.animateDot, j[a], k[d]];
		return h.jsx(b("FocusWithinHandler.react"), {
			children: function(a, c) {
				return h.jsxs("div", babelHelpers["extends"]({
					className: (g || (g = b("stylex")))(i.root, !c && i.hideOutline),
					ref: l
				}, b("ariaGlimmerProps"), f, {
					children: [h.jsx("div", {
						className: g(m)
					}), h.jsx("div", {
						className: g.apply(void 0, m.concat([i.animationDelay300]))
					}), h.jsx("div", {
						className: g.apply(void 0, m.concat([i.animationDelay600]))
					})]
				}))
			}
		})
	}
}), null);