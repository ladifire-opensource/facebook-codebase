__d("CometAspectRatioContainer.react", ["React", "stylex", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			container: {
				height: "do00u71z",
				position: "l9j0dhe7",
				width: "k4urcfbm"
			},
			content: {
				alignItems: "gs1a9yip",
				borderStyle: "ow4ym5g4",
				borderWidth: "auili1gw",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				justifyContent: "i1fnvgqd",
				marginBottom: "oygrvhab",
				marginEnd: "cxmmr5t8",
				marginStart: "hcukyx3x",
				marginTop: "kvgmc6g5",
				minHeight: "tgvbjcpo",
				minWidth: "hpfvmrgz",
				paddingBottom: "qt6c0cv9",
				paddingEnd: "rz4wbd8a",
				paddingStart: "a8nywdso",
				paddingTop: "jb3vyjys",
				zIndex: "du4w35lb",
				bottom: "i09qtzwb",
				boxSizing: "rq0escxv",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4"
			}
		};

	function a(a) {
		var c = a.aspectRatio,
			d = a.children,
			e = a.style,
			f = a.testid;
		f = a.xstyle;
		if (c <= 0) throw b("unrecoverableViolation")("Aspect ratio must be a non-zero, positive number: " + c, "comet_ui");
		return h.jsx("div", {
			className: (g || (g = b("stylex")))(i.container, f),
			"data-testid": void 0,
			style: babelHelpers["extends"]({}, e, {
				paddingTop: 100 / c + "%"
			}),
			children: d != null && h.jsx("div", {
				className: (g || (g = b("stylex")))(i.content),
				children: d
			})
		})
	}
}), null);