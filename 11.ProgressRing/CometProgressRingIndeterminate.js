__d("CometProgressRingIndeterminate.react", [
	"CometProgressRingUtils", 
	"FocusWithinHandler.react", 
	"React", "ariaGlimmerProps", 
	"gkx", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			animationFillModeAndTimingFn: {
				animationFillMode: "ev399l9o",
				animationTimingFunction: "stwyh623"
			},
			foregroundCircle: {
				animationDuration: "r7fvqmod",
				animationFillMode: "ev399l9o",
				animationIterationCount: "ee40wjg4",
				animationTimingFunction: "emdzj9jj",
				transformOrigin: "pf5603km"
			},
			foregroundCircle12: {
				animationName: "b1vxuzj9"
			},
			foregroundCircle12Optimized: {
				strokeDashoffset: "o8db26up"
			},
			foregroundCircle16: {
				animationName: "iikcx86x"
			},
			foregroundCircle16Optimized: {
				strokeDashoffset: "amj4pb01"
			},
			foregroundCircle20: {
				animationName: "l496fsh7"
			},
			foregroundCircle20Optimized: {
				strokeDashoffset: "bvatxa5b"
			},
			foregroundCircle24: {
				animationName: "nbzcv6qa"
			},
			foregroundCircle24Optimized: {
				strokeDashoffset: "b0y9j6xv"
			},
			foregroundCircle32: {
				animationName: "d34kznaq"
			},
			foregroundCircle32Optimized: {
				strokeDashoffset: "n6n0ax8n"
			},
			foregroundCircle48: {
				animationName: "gr1pdu1k"
			},
			foregroundCircle48Optimized: {
				strokeDashoffset: "donnqsds"
			},
			foregroundCircle60: {
				animationName: "im1og7op"
			},
			foregroundCircle60Optimized: {
				strokeDashoffset: "ex6xesns"
			},
			foregroundCircle72: {
				animationName: "dxlomfw1"
			},
			foregroundCircle72Optimized: {
				strokeDashoffset: "mrmd1ia6"
			},
			hideOutline: {
				outline: "lzcic4wl"
			},
			rotationCircle: {
				animationDuration: "r7fvqmod",
				animationIterationCount: "ee40wjg4",
				animationName: "ega7oslk",
				animationTimingFunction: "ku44ohm1",
				transformOrigin: "pf5603km"
			}
		},
		j = 2;

	function a(a) {
		var c = a.color,
			d = a.size;
		a = b("CometProgressRingUtils").getRingColor(c);
		var e = a.foregroundColor,
			f = (d - j) * Math.PI;
		return h.jsx(b("FocusWithinHandler.react"), {
			children: function (a, c) {
				return h.jsx("svg", babelHelpers["extends"]({
					className: (g || (g = b("stylex")))(i.rotationCircle, !b("gkx")("1773564") && i.animationFillModeAndTimingFn, !c && i.hideOutline),
					height: d,
					viewBox: "0 0 " + d + " " + d,
					width: d
				}, b("ariaGlimmerProps"), {
					children: h.jsx("circle", {
						className: g(b("gkx")("1773564") ? [d === 12 && i.foregroundCircle12Optimized, d === 16 && i.foregroundCircle16Optimized, d === 20 && i.foregroundCircle20Optimized, d === 24 && i.foregroundCircle24Optimized, d === 32 && i.foregroundCircle32Optimized, d === 48 && i.foregroundCircle48Optimized, d === 60 && i.foregroundCircle60Optimized, d === 72 && i.foregroundCircle72Optimized] : [i.foregroundCircle, d === 12 && i.foregroundCircle12, d === 16 && i.foregroundCircle16, d === 20 && i.foregroundCircle20, d === 24 && i.foregroundCircle24, d === 32 && i.foregroundCircle32, d === 48 && i.foregroundCircle48, d === 60 && i.foregroundCircle60, d === 72 && i.foregroundCircle72]),
						cx: d / 2,
						cy: d / 2,
						fill: "none",
						r: (d - j) / 2,
						stroke: e,
						strokeDasharray: f,
						strokeWidth: j
					})
				}))
			}
		})
	}
}), null);