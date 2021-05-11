__d("BaseDialog.react", ["CometHideLayerOnEscape.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			anchor: {
				alignItems: "ll8tlv6m",
				display: "j83agx80",
				justifyContent: "taijpn5t",
				pointerEvents: "hzruof5a"
			},
			dialog: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				outline: "lzcic4wl",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				pointerEvents: "oqq733wu",
				position: "l9j0dhe7",
				zIndex: "du4w35lb"
			},
			root: {
				alignItems: "gs1a9yip",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				justifyContent: "taijpn5t",
				minHeight: "h3gjbzrl",
				paddingEnd: "dflh9lhu",
				paddingStart: "scb9dxdr",
				paddingTop: "ir0402vp",
				paddingBottom: "n7vda9r4"
			}
		};

	function a(a) {
		var c = a.anchorUntilHeight;
		c = c === void 0 ? 0 : c;
		var d = a.children,
			e = a.disableClosingWithMask,
			f = e === void 0 ? !1 : e;
		e = a.isLoadingState;
		e = e === void 0 ? !1 : e;
		var j = a.label,
			k = a.labelledBy,
			l = a.onClose,
			m = a.testid;
		m = a.xstyle;
		var n = h.useRef(null),
			o = h.useRef(null),
			p = function (a) {
				return o.current != null && n.current != null && a instanceof Node && !o.current.contains(a) && n.current.contains(a)
			},
			q = h.useRef(!1);
		a = function (a) {
			q.current = p(a.target)
		};
		var r = function (a) {
				q.current && p(a.target) && !f && l()
			},
			s = h.useRef(!1),
			t = function (a) {
				s.current = p(a.target)
			},
			u = function () {
				s.current = !1
			},
			v = function (a) {
				s.current && p(a.target) && !f && l()
			};
		return h.jsx(b("CometHideLayerOnEscape.react"), {
			onHide: l,
			children: h.jsx("div", {
				className: (g || (g = b("stylex")))(i.root),
				onMouseDown: a,
				onMouseUp: r,
				onTouchEnd: v,
				onTouchMove: u,
				onTouchStart: t,
				ref: n,
				children: h.jsx("div", {
					className: g(i.anchor),
					style: {
						minHeight: c
					},
					children: h.jsx("div", {
						"aria-busy": e ? !0 : void 0,
						"aria-label": j,
						"aria-labelledby": k,
						className: g(i.dialog, m),
						"data-testid": void 0,
						ref: o,
						role: "dialog",
						children: d
					})
				})
			})
		})
	}
}), null);