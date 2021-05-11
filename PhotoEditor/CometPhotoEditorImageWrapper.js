__d("CometPhotoEditorImageWrapper.react", ["React", "stylex", "useCometPhotoEditorAppliedStyles"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			backgroundContainer: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				flexGrow: "buofh1pr",
				height: "rdhft8ur",
				justifyContent: "taijpn5t",
				maxWidth: "d8a6gfzh",
				minHeight: "qywhw6cw",
				width: "k4urcfbm"
			},
			imageHeight: {
				height: "bipmatt0",
				maxHeight: "l6x6gq6f",
				maxWidth: "d8a6gfzh",
				width: "iyyx5f41"
			},
			pageWithAnimations: {
				animationDuration: "ipxafjjy",
				animationFillMode: "j1l0snac",
				animationIterationCount: "h9pa7xm5",
				animationName: "sbevj9st"
			},
			photoWrapper: {
				alignItems: "bp9cbjyn",
				display: "j83agx80",
				justifyContent: "taijpn5t",
				maxHeight: "nwf6jgls",
				opacity: "b5wmifdl",
				position: "l9j0dhe7"
			}
		};

	function a(a, c) {
		var d = a.imageComponent;
		a = a.imageUri;
		var e = b("useCometPhotoEditorAppliedStyles")(),
			f = e.image;
		e = e.wrapper;
		return h.jsx("div", {
			className: (g || (g = b("stylex")))(i.backgroundContainer),
			ref: (c = c) != null ? c : null,
			children: h.jsx("div", {
				className: g(i.photoWrapper, i.pageWithAnimations, e),
				children: d([i.imageHeight, f])
			})
		}, a)
	}
	c = h.forwardRef(a);
	f.CometPhotoEditorImageWrapper = c
}), null);