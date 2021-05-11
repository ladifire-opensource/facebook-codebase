__d("CometPhotoEditorCropLayer.react", ["CometPhotoEditorCropDragButton.react", 
	"CometPhotoEditorCropWindow.react", "CometPhotoEditorCropWindowShadow.react",
	 "CometRelay", "React",
	  "cometPhotoEditorCropSaver",
	   "stylex", 
	   "useCoordinateTransforms.react",
	    "useMediaEditorSaver",
	     "usePhotoEditorMouseEventTracker.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 18,
		i = 8;

	function a(a) {
		var c = a.clientImageHeight,
			d = a.clientImageWidth;
		a = a.containerRef;
		var e = g.useRef(null),
			f = g.useState(null),
			j = f[0],
			k = f[1],
			l = b("useCoordinateTransforms.react")();
		f = g.useCallback(function (a) {
			a.preventDefault();
			if (e.current != null) {
				var b = e.current.getBoundingClientRect(),
					f = b.left;
				b = b.top;
				a = l({
					clientWindowX: a.clientX,
					clientWindowY: a.clientY,
					imageLeftPosition: f,
					imageTopPosition: b
				});
				f = a.intermediateX;
				b = a.intermediateY;
				a = b - h;
				b = f - i;
				f = a + h < 0 ? -h : a > c - h ? c - h : a;
				a = b + i < 0 ? -i : b > d - i ? d - i : b;
				switch (j) {
					case "TOP_LEFT":
						o(f);
						q(a);
						break;
					case "TOP_RIGHT":
						o(f);
						u(a);
						break;
					case "BOTTOM_LEFT":
						s(f);
						q(a);
						break;
					case "BOTTOM_RIGHT":
						s(f);
						u(a);
						break
				}
			}
		}, [c, d, l, j]);
		var m = g.useState(0 - h),
			n = m[0],
			o = m[1];
		m = g.useState(0 - i);
		var p = m[0],
			q = m[1];
		m = g.useState(((m = c) != null ? m : 0) - h);
		var r = m[0],
			s = m[1];
		m = g.useState(((m = d) != null ? m : 0) - i);
		var t = m[0],
			u = m[1];
		g.useEffect(function () {
			s(c - h), u(d - i)
		}, [c, d]);
		m = b("CometRelay").useRelayEnvironment();
		b("useMediaEditorSaver")(b("cometPhotoEditorCropSaver"), {
			dimensions: {
				clientImageHeight: c,
				clientImageWidth: d,
				newHeight: r - n,
				newWidth: t - p,
				x: p + i,
				y: n + h
			},
			environment: m,
			type: "CROP"
		}, 5);
		b("usePhotoEditorMouseEventTracker.react")(a, f, function () {
			return k(null)
		});
		return g.jsxs("div", {
			className: "k4urcfbm datstx6m rq0escxv",
			ref: e,
			children: [g.jsx(b("CometPhotoEditorCropWindowShadow.react"), {
				bottom: c - r - h,
				left: p + i,
				right: d - t - i,
				top: n + h
			}), g.jsx(b("CometPhotoEditorCropWindow.react"), {
				height: r - n,
				left: p + i,
				top: n + h,
				width: t - p
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "TOP_LEFT",
				left: p,
				setIsPressed: k,
				top: n
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "TOP_RIGHT",
				left: t,
				setIsPressed: k,
				top: n
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "BOTTOM_LEFT",
				left: p,
				setIsPressed: k,
				top: r
			}), g.jsx(b("CometPhotoEditorCropDragButton.react"), {
				cropCorner: "BOTTOM_RIGHT",
				left: t,
				setIsPressed: k,
				top: r
			})]
		})
	}
}), null);