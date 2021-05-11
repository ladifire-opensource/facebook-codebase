__d("VideoPlayerImplementationReactVideoElement.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var b = a.implementationController,
			c = a.implementationExposedState,
			d = a.renderWithVideoImplementationStates,
			e = a.src,
			f = a.videoElementCallbacks;
		a = a.videoElementRefCallback;
		f = g.jsxs(g.Fragment, {
			children: [g.jsx("video", babelHelpers["extends"]({
				className: "k4urcfbm datstx6m a8c37x1j",
				controls: !1,
				muted: !0
			}, f, {
				ref: a,
				src: e
			})), d({
				implementationController: b,
				videoState: c
			})]
		});
		return f
	}
}), null);