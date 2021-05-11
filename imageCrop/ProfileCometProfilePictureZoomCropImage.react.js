__d("ProfileCometProfilePictureZoomCropImage.react", ["ix", "CometImage.react", "ProfileCometProfilePictureEditStrings", "React", "TetraIcon.react", "TetraText.react", "clamp", "fbicon", "stylex", "useGlobalEventListener"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function i(a, b, c) {
		var d = (.5 - a[0]) * b[0] * c;
		a = (.5 - a[1]) * b[1] * c;
		return {
			transform: "translate3d(" + d + "px, " + a + "px, 0) scale(" + c + ")"
		}
	}

	function j(a) {
		switch (a) {
			case "circle":
				return {
					WebkitMaskImage: "-webkit-radial-gradient(white, black)",
					borderRadius: "50%"
				};
			case "rect":
			default:
				return {}
		}
	}

	function k(a) {
		return {
			height: a[1] + "px",
			width: a[0] + "px"
		}
	}

	function l(a, b) {
		var c = -(b[0] - a[0]) / 2;
		b = -(b[1] - a[1]) / 2;
		return {
			transform: "translate(" + c + "px, " + b + "px)"
		}
	}

	function m(a, c, d, e) {
		var f = c[0] / 2 / (d[0] * e);
		c = c[1] / 2 / (d[1] * e);
		return [b("clamp")(a[0], f, 1 - f), b("clamp")(a[1], c, 1 - c)]
	}

	function a(a) {
		var c = a.center,
			d = a.cropShape;
		d = d === void 0 ? "circle" : d;
		var e = a.cropSize,
			f = a.disabled,
			n = f === void 0 ? !1 : f,
			o = a.imageSize;
		f = a.imageSrc;
		var p = a.onMove,
			q = a.showCropped;
		q = q === void 0 ? !1 : q;
		a = a.zoom;
		var r = a === void 0 ? 1 : a,
			s = h.useRef([0, 0]),
			t = h.useRef([0, 0]),
			u = h.useRef(1);
		a = h.useState(!1);
		var v = a[0],
			w = a[1];
		a = h.useState(!0);
		var x = a[0],
			y = a[1];
		a = h.useCallback(function (a) {
			a.preventDefault()
		}, []);
		var z = h.useCallback(function (a) {
				if (n) return;
				w(!0);
				y(!1);
				s.current = [a.clientX, a.clientY];
				t.current = c
			}, [c, n]),
			A = h.useCallback(function (a) {
				w(!1), a.stopPropagation()
			}, []),
			B = h.useCallback(function (a) {
				if (!v) return;
				var b = a.clientX - s.current[0];
				a = a.clientY - s.current[1];
				b = [t.current[0] - b / (o[0] * u.current), t.current[1] - a / (o[1] * u.current)];
				p(m(b, e, o, u.current))
			}, [e, o, v, p]);
		h.useEffect(function () {
			r !== u.current && (u.current = r, p(m(c, e, o, r)))
		}, [c, e, o, p, r]);
		b("useGlobalEventListener")("mousemove", v ? B : null, {
			capture: !0
		});
		b("useGlobalEventListener")("mouseup", v ? A : null, {
			capture: !0
		});
		return h.jsxs("div", {
			className: "k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 datstx6m",
			children: [h.jsxs("div", {
				className: "ke6wolob rk01pc8j l9j0dhe7 f9o22wc5 ad2k81qe" + (q ? " stjgntxs ni8dbmo4" : ""),
				style: k(e),
				children: [h.jsx("div", {
					className: "l9j0dhe7 stjgntxs ni8dbmo4",
					style: babelHelpers["extends"]({}, j(d), k(e)),
					children: h.jsx("div", {
						className: "pmk7jnqg soycq5t1",
						style: l(e, o),
						children: h.jsx("div", {
							style: i(c, o, u.current),
							children: h.jsx(b("CometImage.react"), {
								src: f
							})
						})
					})
				}), h.jsx("div", {
					className: "kr520xx4 pmk7jnqg akz8cqyu soycq5t1",
					style: l(e, o),
					children: h.jsx("div", {
						className: "a7woen2v",
						onDragStart: a,
						onMouseDown: z,
						style: i(c, o, u.current),
						children: h.jsx(b("CometImage.react"), {
							src: f
						})
					})
				})]
			}), !n && x && h.jsxs("div", {
				className: "cj5g2342 adce92kx kfkz5moi pmk7jnqg cxgpxx05 tw6a2znq d1544ag0 sj5x9vvc j83agx80 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 ora8z2hr bp9cbjyn",
				children: [h.jsx("div", {
					className: "oi9244e8 j83agx80",
					children: h.jsx(b("TetraIcon.react"), {
						color: "white",
						icon: b("fbicon")._(g("697185"), 20)
					})
				}), h.jsx(b("TetraText.react"), {
					color: "white",
					type: "headlineEmphasized4",
					children: b("ProfileCometProfilePictureEditStrings").DRAG_INSTRUCTIONS
				})]
			})]
		})
	}
}), null);