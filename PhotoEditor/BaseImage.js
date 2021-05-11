__d("BaseImage.react", ["React", 
	"RecoverableViolationWithComponentStack.react", 
	"mergeRefs", "stylex", "testID"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			contain: {
				objectFit: "r0294ipz"
			},
			cover: {
				objectFit: "bixrwtb6"
			},
			fill: {
				objectFit: "r50dw9up"
			}
		};

	function a(a, c) {
		var d = a.alt;
		d = d === void 0 ? "" : d;
		var e = a["aria-labelledby"],
			f = a.objectFit;
		f = f === void 0 ? "none" : f;
		var j = a.onLoad,
			k = a.src,
			l = a.testid,
			m = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "aria-labelledby", "objectFit", "onLoad", "src", "testid", "xstyle"]);
		var n = h.useRef(null),
			o = h.useMemo(function () {
				return b("mergeRefs")(n, c)
			}, [n, c]);
		h.useEffect(function () {
			var a = n.current;
			j != null && a != null && a.complete && j()
		}, [j]);
		if (k === "") return h.jsx(b("RecoverableViolationWithComponentStack.react"), {
			errorMessage: "Invalid src provided to image",
			projectName: "comet_ui"
		});
		var p, q = k.match(/[?&]cb=([^&]+).*$/);
		q && q.length > 1 && (p = q[1]);
		return h.jsx("img", babelHelpers["extends"]({}, a, b("testID")(l), {
			alt: d,
			"aria-labelledby": e,
			className: f === "none" && m == null ? void 0 : (g || (g = b("stylex")))(f !== "none" && i[f], m),
			elementtiming: p,
			onLoad: j,
			ref: o,
			src: k
		}))
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);