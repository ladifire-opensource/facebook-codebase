__d("CometPhotoEditorCropLayer.react", ["CometPhotoEditorCropDragButton.react", "CometPhotoEditorCropWindow.react", "CometPhotoEditorCropWindowShadow.react", "CometRelay", "React", "cometPhotoEditorCropSaver", "stylex", "useMediaEditorSaver"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 18,
		i = 8;

	function a(a) {
		var c = a.clientImageHeight,
			d = a.clientImageWidth,
			e = a.containerRef,
			f = g.useRef(null);
		a = g.useState(null);
		var j = a[0],
			k = a[1],
			l = g.useCallback(function (a) {
				a.preventDefault();
				if (f.current != null) {
					var b = f.current.getBoundingClientRect(),
						e = b.left;
					b = b.top;
					b = a.clientY - b - h;
					a = a.clientX - e - i;
					e = b + h < 0 ? -h : b > c - h ? c - h : b;
					b = a + i < 0 ? -i : a > d - i ? d - i : a;
					switch (j) {
						case "TOP_LEFT":
							n(e);
							p(b);
							break;
						case "TOP_RIGHT":
							n(e);
							t(b);
							break;
						case "BOTTOM_LEFT":
							r(e);
							p(b);
							break;
						case "BOTTOM_RIGHT":
							r(e);
							t(b);
							break
					}
				}
			}, [c, d, j]);
		a = g.useState(0 - h);
		var m = a[0],
			n = a[1];
		a = g.useState(0 - i);
		var o = a[0],
			p = a[1];
		a = g.useState(((a = c) != null ? a : 0) - h);
		var q = a[0],
			r = a[1];
		a = g.useState(((a = d) != null ? a : 0) - i);
		var s = a[0],
			t = a[1];
		g.useEffect(function () {
			r(c - h), t(d - i)
		}, [c, d]);
		a = b("CometRelay").useRelayEnvironment();
		b("useMediaEditorSaver")(b("cometPhotoEditorCropSaver"), {
			dimensions: {
				clientImageHeight: c,
				clientImageWidth: d,
				newHeight: q - m,
				newWidth: s - o,
				x: o + i,
				y: m + h
			},
			environment: a,
			type: "CROP"
		}, 3);
		g.useEffect(function () {
			var a = function () {
				k(null)
			};
			window.addEventListener("mousemove", l);
			window.addEventListener("mouseup", a);
			e.current != null && e.current.addEventListener("mouseup", a);
			var b = function () {
				window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", a), e.current != null && e.current.removeEventListener("mouseup", a)
			};
			return function () {
				return b()
			}
		}, [e, l, j]);
		return g.jsxs("div", {
			className: "k4urcfbm datstx6m rq0escxv",
			ref: f,
			children: [g.jsx(b("CometPhotoEditorCropWindowShadow.react"), {
				bottom: c - q - h,
				left: o + i,
				right: d - s - i,
				top: m + h
			}), g.jsx(b("CometPhotoEditorCropWindow.react"), {
				height: q - m,
				left: o + i,
				top: m + h,
				width: s - o
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "TOP_LEFT",
				left: o,
				setIsPressed: k,
				top: m
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "TOP_RIGHT",
				left: s,
				setIsPressed: k,
				top: m
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "BOTTOM_LEFT",
				left: o,
				setIsPressed: k,
				top: q
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "BOTTOM_RIGHT",
				left: s,
				setIsPressed: k,
				top: q
			})]
		})
	}
}), null);