__d("CometToast.react", ["ix", "fbt", "CometPressable.react", 
	"CometRow.react", "CometRowItem.react", 
	"CometTheme.react", "React",
	 "TetraCircleButton.react", 
	 "TetraIcon.react", "TetraProfilePhoto.react", 
	 "TetraText.react", "fbicon", "stylex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = {
			icon: {
				minWidth: "s3zjy1r9"
			},
			pressable: {
				display: "a8c37x1j"
			},
			root: {
				backgroundColor: "cwj9ozl2",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "m1ttxjm6",
				maxWidth: "d2edcug0",
				minWidth: "p01isnhg"
			}
		};

	function a(a) {
		var c = a.action,
			d = a.href,
			e = a.icon,
			f = a.impressionLoggingRef,
			l = a.message,
			m = a.onDismiss,
			n = a.size,
			o = a.supressCloseButton;
		o = o === void 0 ? !1 : o;
		var p = a.target,
			q = a.testid;
		a.title;
		q = a.truncateText;
		q = q === void 0 ? !0 : q;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["action", "href", "icon", "impressionLoggingRef", "message", "onDismiss", "size", "supressCloseButton", "target", "testid", "title", "truncateText"]);
		var r = j.useMemo(function () {
			return d != null ? {
				target: p,
				url: d
			} : void 0
		}, [d, p]);
		f = j.jsxs(b("CometRow.react"), {
			paddingHorizontal: n === "small" ? 8 : 16,
			paddingVertical: n === "small" ? 8 : 16,
			ref: f,
			spacing: 12,
			testid: void 0,
			verticalAlign: "center",
			children: [e != null ? j.jsx(b("CometRowItem.react"), {
				xstyle: k.icon,
				children: e
			}) : null, j.jsx(b("CometRowItem.react"), {
				"aria-atomic": !0,
				expanding: !0,
				role: "alert",
				children: j.jsx(b("TetraText.react"), {
					color: "primary",
					numberOfLines: q ? 1 : void 0,
					type: n === "small" ? "body4" : "body3",
					children: l
				})
			}), c != null ? j.jsx(b("CometRowItem.react"), {
				children: j.jsx(b("CometPressable.react"), {
					onPress: function (a) {
						m(), c.onPress(a)
					},
					testid: void 0,
					children: j.jsx(b("TetraText.react"), {
						color: "blueLink",
						numberOfLines: 1,
						type: "body3",
						children: c.label
					})
				})
			}) : null, o !== !0 && j.jsx(b("CometRowItem.react"), {
				children: j.jsx(b("TetraCircleButton.react"), {
					icon: b("fbicon")._(g("478231"), 12),
					label: h._("\u0110\u00f3ng"),
					onPress: m,
					size: 24
				})
			})]
		});
		(a.onPress != null || r != null) && (f = j.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
			expanding: !0,
			linkProps: r,
			xstyle: k.pressable,
			children: f
		})));
		return j.jsx(b("CometTheme.react"), {
			className: (i || (i = b("stylex")))(k.root),
			"data-testid": void 0,
			element: "div",
			theme: "invert",
			children: f
		})
	}
}), null);