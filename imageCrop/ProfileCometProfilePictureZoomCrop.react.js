__d("ProfileCometProfilePictureZoomCrop.react", ["ProfileCometProfilePictureZoomControl.react", "ProfileCometProfilePictureZoomCropImage.react", "React", "clamp", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			"default": {
				height: "cmsa8f9s",
				width: "f36cnskx"
			}
		},
		j = 5,
		k = 180;

	function l(a) {
		return Number(a.toFixed(j))
	}

	function m(a, b) {
		b = Math.max(a[0] / b[0], a[1] / b[1]);
		a = Math.max(Math.min(a[0] / k, a[1] / k), b);
		return [l(b), l(a)]
	}

	function n(a) {
		return a[0] / a[1] === 1
	}

	function a(a) {
		var c = a.cropShape;
		c = c === void 0 ? "circle" : c;
		var d = a.cropSize,
			e = a.disabled;
		e = e === void 0 ? !1 : e;
		var f = a.imageSize,
			j = a.imageSrc,
			k = a.onChange,
			o = a.showCropped;
		o = o === void 0 ? !1 : o;
		a = a.xstyle;
		var p = m(d, f),
			q = h.useState(p[0]),
			r = q[0],
			s = q[1];
		q = h.useState([.5, .5]);
		var t = q[0],
			u = q[1];
		q = !(r === p[0] && n(f));
		var v = h.useCallback(function (a) {
				u(a)
			}, []),
			w = h.useCallback(function (a) {
				s(a)
			}, []);
		h.useEffect(function () {
			var a, c = d[1] / (f[1] * r),
				e = d[0] / (f[0] * r),
				g = t[0] - e / 2,
				h = t[1] - c / 2;
			c = l((a = b("clamp"))(c, 0, 1));
			e = l(a(e, 0, 1));
			k({
				height: c,
				width: e,
				x: l(a(g, 0, 1 - e)),
				y: l(a(h, 0, 1 - c))
			})
		}, [t, d, f, k, r]);
		return h.jsxs("div", {
			children: [h.jsx("div", {
				className: (g || (g = b("stylex")))((a = a) != null ? a : i["default"]),
				children: h.jsx(b("ProfileCometProfilePictureZoomCropImage.react"), {
					center: t,
					cropShape: c,
					cropSize: d,
					disabled: e || !q,
					imageSize: f,
					imageSrc: j,
					onMove: v,
					showCropped: o,
					zoom: r
				})
			}), h.jsx(b("ProfileCometProfilePictureZoomControl.react"), {
				disabled: e,
				max: p[1],
				min: p[0],
				onChange: w,
				step: .1,
				value: r
			})]
		})
	}
}), null);