__d("BaseImage_DEPRECATED.react", ["React", "RecoverableViolationWithComponentStack.react", "coerceImageishSprited", "coerceImageishURL", "joinClasses", "mergeRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function h(a) {
		return a != null && typeof a === "string" && a !== "" && a !== "[object Object]"
	}

	function a(a, c) {
		var d = a.alt,
			e = a.testid;
		e = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "testid"]);
		var f = e.onLoad;
		a = e.src;
		var i = g.useRef(null),
			j = g.useMemo(function () {
				return b("mergeRefs")(i, c)
			}, [i, c]),
			k = b("coerceImageishSprited")(a),
			l = b("coerceImageishURL")(a);
		g.useEffect(function () {
			var a;
			f != null && i.current instanceof HTMLImageElement && ((a = i.current) == null ? void 0 : a.complete) && f()
		}, [f, a]);
		if (l != null && l.uri != null) {
			return !h(l.uri) ? g.jsx(b("RecoverableViolationWithComponentStack.react"), {
				errorMessage: "Invalid src provided as imageish uri",
				projectName: "comet_ui"
			}) : g.jsx("img", babelHelpers["extends"]({}, e, {
				alt: (a = d) != null ? a : "",
				"data-testid": void 0,
				height: e.height != null ? e.height : l.height,
				ref: j,
				src: l.uri,
				width: e.width != null ? e.width : l.width
			}))
		} else if (k != null) {
			k._spi;
			a = k.spriteCssClass;
			l = k.spriteMapCssClass;
			e.height;
			e.src;
			e.width;
			k = babelHelpers.objectWithoutPropertiesLoose(e, ["height", "src", "width"]);
			return g.jsx("i", babelHelpers["extends"]({}, k, {
				"aria-label": d === "" ? null : d,
				className: b("joinClasses")(e.className, l, a),
				"data-testid": void 0,
				ref: j,
				role: d === "" ? null : "img"
			}))
		}
		if (!h(e.src)) return g.jsx(b("RecoverableViolationWithComponentStack.react"), {
			errorMessage: "Invalid src provided to image",
			projectName: "comet_ui"
		});
		var m;
		if (typeof e.src === "string") {
			k = e.src.match(/[?&]cb=([^&]+).*$/);
			k && k.length > 1 && (m = k[1])
		}
		return g.jsx("img", babelHelpers["extends"]({}, e, {
			alt: (l = d) != null ? l : "",
			"data-testid": void 0,
			elementtiming: m,
			ref: j
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);