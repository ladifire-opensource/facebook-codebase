__d("CometCardedDialog.react", ["ix", "fbt", "BaseDialog.react", "BaseHeadingContextWrapper.react", "CometTrackingNodeProvider.react", "React", "TetraCircleButton.react", "TetraText.react", "TetraTextPairing.react", "fbicon", "stylex", "useCometUniqueID"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = {
			backButton: {
				position: "pmk7jnqg",
				start: "re5koujm",
				top: "fcg2cn6m",
				zIndex: "tkr6xdv7"
			},
			card: {
				backgroundColor: "cwj9ozl2",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "nwpbqux9"
			},
			closeButton: {
				end: "cypi58rs",
				position: "pmk7jnqg",
				top: "fcg2cn6m",
				zIndex: "tkr6xdv7"
			},
			header: {
				borderBottom: "linmgsc8",
				boxSizing: "rq0escxv",
				height: "cb02d2ww"
			},
			headerWithBackButton: {
				paddingStart: "bjjun2dj"
			},
			headerWithCloseButton: {
				paddingEnd: "clqubjjj"
			},
			headerWithPadding: {
				paddingEnd: "clqubjjj",
				paddingStart: "bjjun2dj"
			},
			titleWrapper: {
				alignItems: "bp9cbjyn",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				height: "datstx6m",
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a"
			}
		},
		l = {
			content: {},
			medium: {
				maxWidth: "pwh3vvf2",
				width: "k4urcfbm"
			},
			small: {
				maxWidth: "gc7gaz0o",
				width: "k4urcfbm"
			}
		},
		m = {
			center: {
				justifyContent: "taijpn5t"
			},
			start: {
				justifyContent: "jifvfom9"
			}
		};

	function a(a) {
		var c, d, e = a.anchorUntilHeight;
		e = e === void 0 ? 0 : e;
		var f = a.children,
			n = a.header,
			o = a.onBack;
		o = o === void 0 ? function () {} : o;
		var p = a.onClose;
		p = p === void 0 ? function () {} : p;
		var q = a.disableClosingWithMask;
		q = q === void 0 ? !1 : q;
		var r = a.labelledBy,
			s = a.isLoadingState,
			t = a.size;
		t = t === void 0 ? "small" : t;
		var u = a.testid;
		u = a.title;
		var v = a.titleWithEntities,
			w = a.subtitle,
			x = a.titleHorizontalAlignment;
		x = x === void 0 ? "center" : x;
		var y = a.withBackButton;
		y = y === void 0 ? !1 : y;
		a = a.withCloseButton;
		a = a === void 0 ? !1 : a;
		c = (c = u) != null ? c : v;
		var z = b("useCometUniqueID")();
		d = u == null && ((d = n) != null ? d : v) != null ? z : void 0;
		return j.jsxs(b("BaseDialog.react"), {
			anchorUntilHeight: e,
			disableClosingWithMask: q,
			isLoadingState: s,
			label: r != null ? void 0 : (v = u) != null ? v : void 0,
			labelledBy: (z = r) != null ? z : d,
			onClose: p,
			testid: void 0,
			xstyle: [k.card, l[t]],
			children: [n != null && j.jsx("div", {
				className: (i || (i = b("stylex")))(k.header, a && k.headerWithCloseButton, y && k.headerWithBackButton, (a || y) && x === "center" && k.headerWithPadding),
				id: d,
				children: n
			}), c != null && n == null && j.jsx("div", {
				className: (i || (i = b("stylex")))(k.header, a && k.headerWithCloseButton, y && k.headerWithBackButton, (a || y) && x === "center" && k.headerWithPadding),
				id: d,
				children: j.jsx("div", {
					className: (i || (i = b("stylex")))(k.titleWrapper, m[x]),
					children: w != null ? j.jsx(b("TetraTextPairing.react"), {
						body: w,
						bodyLineLimit: 2,
						headline: c,
						headlineLineLimit: 1,
						isSemanticHeading: !0,
						level: 2,
						textAlign: "center"
					}) : j.jsx(b("TetraText.react"), {
						isSemanticHeading: !0,
						numberOfLines: 1,
						type: "headlineEmphasized2",
						children: c
					})
				})
			}), a ? j.jsx(b("CometTrackingNodeProvider.react"), {
				trackingNode: 141,
				children: j.jsx("div", {
					className: (i || (i = b("stylex")))(k.closeButton),
					"data-testid": void 0,
					children: j.jsx(b("TetraCircleButton.react"), {
						color: "secondary",
						icon: b("fbicon")._(g("478233"), 20),
						label: h._("\u0110\u00f3ng"),
						onPress: p,
						size: 36
					})
				})
			}) : null, y ? j.jsx("div", {
				className: (i || (i = b("stylex")))(k.backButton),
				children: j.jsx(b("TetraCircleButton.react"), {
					color: "secondary",
					icon: b("fbicon")._(g("512647"), 20),
					label: h._("Quay l\u1ea1i"),
					onPress: o,
					size: 36
				})
			}) : null, j.jsx(b("BaseHeadingContextWrapper.react"), {
				children: f
			})]
		})
	}
}), null);