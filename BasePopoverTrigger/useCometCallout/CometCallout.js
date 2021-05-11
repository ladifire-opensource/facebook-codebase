__d("CometCallout.react", ["ix", "fbt", "BaseContextualLayerOrientationContext", "BaseRow.react", "BaseRowItem.react", "BaseView.react", "CometCalloutEdge.react", "CometCalloutInset.react", "CometPressable.react", "React", "TetraIcon.react", "TetraText.react", "fbicon", "stylex", "useOnOutsideClick"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i = b("React"),
		j = {
			container: {
				display: "j83agx80"
			},
			content: {
				backgroundColor: "ms7hmo2b",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				borderTopWidth: "frvqaej8",
				borderEndWidth: "ed0hlay0",
				borderBottomWidth: "afxsp9o4",
				borderStartWidth: "jcgfde61",
				boxShadow: "rdkkywzo",
				paddingEnd: "d1544ag0",
				paddingStart: "tw6a2znq",
				paddingTop: "discj3wi",
				paddingBottom: "ihqw7lf3"
			},
			crossoutButton: {
				marginEnd: "dlv3wnog",
				marginTop: "sv5sfqaa"
			},
			item: {
				paddingEnd: "p8fzw8mz",
				paddingStart: "pcp91wgn",
				paddingTop: "ipjc6fyt",
				paddingBottom: "iuny7tx3"
			}
		},
		k = {
			accent: {
				backgroundColor: "is6700om"
			},
			"default": {
				backgroundColor: "hn33210v"
			}
		},
		l = {
			above: {
				marginBottom: "tvmbv18p"
			},
			below: {
				marginTop: "aahdfvyu"
			}
		};

	function a(a) {
		var c = a.arrowStyle;
		c = c === void 0 ? "none" : c;
		var d = a.hasCloseButton;
		d = d === void 0 ? !1 : d;
		var e = a.label,
			f = a.onClose,
			m = a.onHide,
			n = a.onOutsideClick,
			o = a.onPressCallout_experimentalDONOTUSE,
			p = a.onShow,
			q = a.profilePhoto_experimentalDONOTUSE,
			r = a.type;
		r = r === void 0 ? "default" : r;
		a = a.xstyle;
		var s = i.useContext(b("BaseContextualLayerOrientationContext"));
		s = s.position;
		i.useEffect(function () {
			p && p();
			return function () {
				m && m()
			}
		}, [p, m]);
		var t = b("useOnOutsideClick")(n);
		q = i.jsxs(i.Fragment, {
			children: [q != null && i.jsx(b("BaseRowItem.react"), {
				verticalAlign: "start",
				children: q
			}), i.jsx(b("BaseRowItem.react"), {
				expanding: !0,
				verticalAlign: "center",
				xstyle: j.item,
				children: i.jsx(b("TetraText.react"), {
					color: r === "default" ? "primary" : "white",
					type: "headline4",
					children: e
				})
			}), d && i.jsx(b("BaseRowItem.react"), {
				xstyle: [j.crossoutButton, j.item],
				children: i.jsx(b("TetraIcon.react"), {
					"aria-label": h._("\u0110\u00f3ng"),
					color: r === "default" ? "secondary" : "white",
					icon: b("fbicon")._(g("478232"), 16),
					onPress: f,
					size: 16
				})
			})]
		});
		e = o ? i.jsx(b("BaseRowItem.react"), {
			children: i.jsx(b("CometPressable.react"), {
				onPress: o,
				overlayDisabled: !0,
				children: q
			})
		}) : q;
		if (c === "inset") return i.jsx(b("CometCalloutInset.react"), {
			onOutsideClick: n,
			type: r,
			xstyle: a,
			children: e
		});
		return c === "edge" ? i.jsx(b("CometCalloutEdge.react"), {
			onOutsideClick: n,
			type: r,
			xstyle: a,
			children: e
		}) : i.jsx(b("BaseView.react"), {
			xstyle: j.container,
			children: i.jsx(b("BaseRow.react"), {
				ref: t,
				xstyle: [j.content, k[r], c === "none" && l[s], a],
				children: e
			})
		})
	}
}), null);