__d("TetraLineClamp.react", ["React", "TetraTextContext", "TetraTextTypography", "gkx", "requireCond", "stylex", "cr:1789196"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");
	d = (c = b("cr:1789196")) != null ? c : {
		useTranslationFixKeyForTextParent: function () {
			return ""
		}
	};
	var i = d.useTranslationFixKeyForTextParent,
		j = {
			ellipsis: {
				end: "n7fi1qx3",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "pmk7jnqg"
			},
			oneLine: {
				textOverflow: "ltmttdrg",
				whiteSpace: "g0qnabr5"
			},
			root: {
				display: "a8c37x1j",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7"
			}
		};

	function a(a, c) {
		var d = a.children,
			e = a.id,
			f = a.lines,
			l = a.testid;
		l = a.useAutomaticTextDirection;
		l = l === void 0 ? !1 : l;
		a = a.xstyle;
		var m = h.useContext(b("TetraTextContext")),
			n = i();
		d = d;
		var o;
		if (f > 1) {
			var p = b("gkx")("1105608");
			if (p) o = {
				WebkitBoxOrient: "vertical",
				WebkitLineClamp: f,
				display: "-webkit-box"
			};
			else {
				p = k(m == null ? void 0 : m.type);
				o = {
					maxHeight: p * f + .1
				};
				m = {
					maxHeight: "calc((100% - " + p * f + "px) * 999)",
					top: p * (f - 1)
				};
				d = h.jsxs(h.Fragment, {
					children: [d, h.jsx("span", {
						"aria-hidden": !0,
						className: (g || (g = b("stylex")))(j.ellipsis),
						style: m,
						children: "\u2026"
					})]
				})
			}
		}
		return h.jsx("span", {
			className: (g || (g = b("stylex")))(j.root, f === 1 && j.oneLine, a),
			"data-testid": void 0,
			dir: l ? "auto" : void 0,
			id: e,
			ref: c,
			style: o,
			children: d
		}, n)
	}

	function k(a) {
		return a != null && a in b("TetraTextTypography") ? b("TetraTextTypography")[a].lineHeight : 16
	}
	f = h.forwardRef(a);
	e.exports = f
}), null);