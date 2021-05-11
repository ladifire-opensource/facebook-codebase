__d("CometBackgroundImage.react", ["BaseImage_DEPRECATED.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		return g.jsx(b("BaseImage_DEPRECATED.react"), babelHelpers["extends"]({
			alt: a.alt,
			className: "k4urcfbm bixrwtb6 datstx6m",
			draggable: a.draggable,
			onError: a.onError,
			onLoad: a.onLoad
		}, a.loading ? {
			loading: a.loading
		} : {}, {
			src: a.src
		}))
	}
}), null);