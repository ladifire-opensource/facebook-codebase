__d("VideoPlayerCaptionsDisplay.react", ["React", "recoverableViolation", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			captionsCenterAlign: {
				justifyContent: "taijpn5t",
				textAlign: "oqcyycmt"
			},
			captionsContainer: {
				bottom: "lhzng9rx",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				justifyContent: "taijpn5t",
				paddingLeft: "k2nzzd71",
				paddingRight: "cnyvn6ex",
				position: "pmk7jnqg",
				textAlign: "oqcyycmt",
				transitionDuration: "pc15xi3s",
				transitionProperty: "flx89l3n",
				transitionTimingFunction: "eloblzlw",
				width: "k4urcfbm"
			},
			captionsDefault: {
				backgroundColor: "d6rk862h",
				color: "ljqsnud1",
				fontSize: "a5q79mjw",
				fontWeight: "ekzkrbhg",
				lineHeight: "j8p27hm0",
				marginTop: "kvgmc6g5",
				marginEnd: "nw5zvenu",
				marginBottom: "oygrvhab",
				marginStart: "pbhxczp3",
				paddingTop: "debrwdc1",
				paddingEnd: "m4n6deaq",
				paddingBottom: "pwvavz3a",
				paddingStart: "n1w2zk5c"
			},
			captionsLeftAlign: {
				justifyContent: "jifvfom9",
				textAlign: "hzawbc8m"
			},
			captionsRightAlign: {
				justifyContent: "bkfpd7mw",
				textAlign: "ftzlm3b6"
			}
		};

	function j(a) {
		switch (a) {
			case "center":
				return i.captionsCenterAlign;
			case "left":
				return i.captionsLeftAlign;
			case "right":
				return i.captionsRightAlign;
			default:
				b("recoverableViolation")("Unsupported captions text alignment: " + a, "comet_video_player")
		}
	}

	function a(a) {
		var c = a.activeCaptions;
		a = a.adjustments;
		var d = c == null ? void 0 : c.rows;
		if (d != null && d.length > 0) {
			d = d.map(function(a) {
				return a.trim()
			}).filter(function(a) {
				return !!a
			});
			return d.length > 0 ? h.jsx("div", {
				className: (g || (g = b("stylex")))(i.captionsContainer, j((c = c == null ? void 0 : (c = c.styles) == null ? void 0 : c.textAlignment) != null ? c : "center")),
				style: {
					paddingLeft: a.left,
					paddingRight: a.right,
					transform: "translateY(" + -a.bottom + "px)"
				},
				children: h.jsx("div", {
					className: (g || (g = b("stylex")))(i.captionsDefault),
					children: d.map(function(a, b) {
						return h.jsxs("span", {
							children: [a, h.jsx("br", {})]
						}, b)
					})
				})
			}) : null
		}
		return null
	}
	c = h.memo(a);
	d = c;
	e.exports = d
}), null);