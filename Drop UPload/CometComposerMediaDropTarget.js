__d("CometComposerMediaDropTarget.react", ["fbt", "React", 
	"TetraText.react", "stylex", 
	"useFileDragEvents", 
	"useHandleSideloadedMedia"
	], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.children;
		a = a.disableVideo;
		a = a === void 0 ? !1 : a;
		var d = b("useHandleSideloadedMedia")(a),
			e = h.useCallback(function (a) {
				switch (a) {
					case "text/plain":
					case "text/html":
					case "text/uri-list":
						return !0;
					default:
						return !1
				}
			}, []);
		a = h.useCallback(function (a) {
			a = ((a = a.dataTransfer) == null ? void 0 : a.items) || [];
			return a.length > 0 && !Array.from(a).find(function (a) {
				return e(a.type)
			})
		}, [e]);
		var f = b("useFileDragEvents")(function (a) {
				return !1
			}, document.documentElement, a),
			i = h.useRef(null);
		b("useFileDragEvents")(function (a) {
			d(Array.from(a))
		}, i.current, a);
		return h.jsxs("div", {
			className: "k4urcfbm l9j0dhe7 datstx6m rq0escxv",
			ref: i,
			children: [c, f ? h.jsx("div", {
				className: "kr520xx4 j9ispegn pmk7jnqg taijpn5t n7fi1qx3 j83agx80 i09qtzwb rnr61an3 bp9cbjyn",
				children: h.jsx("div", {
					className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
					children: h.jsx(b("TetraText.react"), {
						type: "body1",
						children: g._("Th\u1ea3 \u1ea3nh ho\u1eb7c video")
					})
				})
			}) : null]
		})
	}
}), null);