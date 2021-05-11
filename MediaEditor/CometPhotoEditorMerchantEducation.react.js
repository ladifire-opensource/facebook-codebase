__d("CometPhotoEditorMerchantEducation.react", ["ix", "fbt", "CometPhotoEditorMerchantEducationCard.react", "CometProductTaggingConstants", "CometTintedIcon.react", "MediaEditorViewStateContext", "React", "fbicon"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React");

	function a() {
		var a = i.useContext(b("MediaEditorViewStateContext"));
		a = (a == null ? void 0 : a.tags) || [];
		var c = i.useState(0),
			d = c[0];
		c = c[1];
		var e = a.length,
			f = i.useState(!0),
			l = f[0];
		f = f[1];
		var m = i.useState([]),
			n = m[0],
			o = m[1];
		e !== d && (c(e), e > 6 && l && (o(n.concat([{
			educationBody: h._("Ng\u01b0\u1eddi b\u00e1n th\u01b0\u1eddng thu \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 t\u1ed1t nh\u1ea5t khi d\u00f9ng h\u00ecnh \u1ea3nh c\u00f3 kh\u00f4ng qu\u00e1 6 th\u1ebb"),
			educationTitle: h._("Qu\u00e1 nhi\u1ec1u th\u1ebb s\u1ea3n ph\u1ea9m"),
			icon: i.jsx(b("CometTintedIcon.react"), {
				color: "fds-yellow-20",
				icon: b("fbicon")._(g("502063"), 24)
			})
		}])), f(!1)), j(a) && o(n.concat([{
			educationBody: h._("C\u00e1c th\u1ebb g\u1ea7n \u0111\u01b0\u1eddng vi\u1ec1n th\u01b0\u1eddng b\u1ecb b\u1ecf l\u1ee1 v\u00e0 g\u00e2y ra v\u1ea5n \u0111\u1ec1 v\u1ec1 kh\u1ea3 n\u0103ng ti\u00eau th\u1ee5."),
			educationTitle: h._("Qu\u00e1 g\u1ea7n v\u1edbi \u0111\u01b0\u1eddng vi\u1ec1n c\u1ee7a h\u00ecnh \u1ea3nh"),
			icon: i.jsx(b("CometTintedIcon.react"), {
				color: "fds-yellow-20",
				icon: b("fbicon")._(g("697271"), 24)
			})
		}])), k(a) && o(n.concat([{
			educationBody: h._("C\u00e1c th\u1ebb g\u1ea7n nhau c\u00f3 th\u1ec3 g\u00e2y ra v\u1ea5n \u0111\u1ec1 v\u1ec1 kh\u1ea3 n\u0103ng ti\u00eau th\u1ee5."),
			educationTitle: h._("C\u00e1c th\u1ebb qu\u00e1 g\u1ea7n nhau"),
			icon: i.jsx(b("CometTintedIcon.react"), {
				color: "fds-yellow-20",
				icon: b("fbicon")._(g("517759"), 24)
			})
		}])));
		var p = function (a) {
			o(n == null ? void 0 : n.slice(0, a).concat(n == null ? void 0 : n.slice(a + 1)))
		};
		return i.jsx(i.Fragment, {
			children: n.map(function (a, c) {
				return i.jsx(b("CometPhotoEditorMerchantEducationCard.react"), {
					educationBody: a.educationBody,
					educationTitle: a.educationTitle,
					icon: a.icon,
					index: c,
					onDismiss: p
				}, c)
			})
		})
	}

	function j(a) {
		if (a === null) return !1;
		var b = a == null ? void 0 : a.length;
		if (b > 0) {
			a = a[b - 1];
			b = a == null ? void 0 : a.x;
			a = a == null ? void 0 : a.y;
			if (b <= 10 || b >= 90 || a <= 10 || a >= 90) return !0
		}
		return !1
	}

	function k(a) {
		if (a === null) return !1;
		var c = a == null ? void 0 : a.length;
		if (c > 1) {
			c = a[c - 1];
			var d = c == null ? void 0 : c.x;
			c = c == null ? void 0 : c.y;
			var e = (b("CometProductTaggingConstants").DOT_HINT_DOT_SIZE + b("CometProductTaggingConstants").DOT_HINT_BORDER_SIZE) / 2;
			e = 1.2 * e;
			a = [].concat(a).slice(0, -1);
			for (var a = a, f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var h;
				if (f) {
					if (g >= a.length) break;
					h = a[g++]
				} else {
					g = a.next();
					if (g.done) break;
					h = g.value
				}
				h = h;
				h = Math.sqrt(Math.pow(h.x - d, 2) + Math.pow(h.y - c, 2));
				if (h < e) return !0
			}
		}
		return !1
	}
}), null);