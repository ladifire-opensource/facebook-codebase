__d("CometTopNavLogoWithBackButton.react", ["ix", "fbt", "CometIconLogo.react", "CometPressable.react", "CometTooltip.react", "Locale", "React", "TetraCircleButton.react", "XCometHomeControllerRouteBuilder", "fbicon", "gkx", "stylex", "useTopNavigationLogging"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("XCometHomeControllerRouteBuilder").buildURL({}),
		l = b("Locale").isRTL(),
		m = 40,
		n = {
			backButton: {
				opacity: "pedkr2u6",
				position: "pmk7jnqg",
				start: "kp4lslxn",
				transform: "lxek4yd6",
				transitionDuration: "ms05siws",
				transitionProperty: "pnx7fd3z",
				transitionTimingFunction: "nf1dmkjp"
			},
			backButtonHidden: {
				opacity: "b5wmifdl",
				pointerEvents: "hzruof5a"
			},
			backButtonVisibleLTR: {
				transform: "s0qqerhg"
			},
			backButtonVisibleRTL: {
				transform: "s9nbj7gl"
			},
			logo: {
				opacity: "pedkr2u6",
				transitionDuration: "ms05siws",
				transitionProperty: "pnx7fd3z",
				transitionTimingFunction: "nf1dmkjp"
			},
			logoHidden: {
				opacity: "b5wmifdl",
				pointerEvents: "hzruof5a"
			},
			logoWithBackButtonLTR: {
				transform: "s0qqerhg"
			},
			logoWithBackButtonRTL: {
				transform: "s9nbj7gl"
			}
		};

	function a(a) {
		var c = a.logoHidden;
		c = c === void 0 ? !1 : c;
		var d = a.logoWithShadow;
		d = d === void 0 ? !1 : d;
		var e = a.onPressBackButton,
			f = a.shouldUseCloseButton;
		f = f === void 0 ? !1 : f;
		a = a.showBackButton;
		a = a === void 0 ? !1 : a;
		var o = b("useTopNavigationLogging").useLogoLoggingCallbacks(),
			p = o[0];
		o = o[1];
		return j.jsxs(j.Fragment, {
			children: [j.jsx("div", {
				"aria-hidden": !a,
				className: (i || (i = b("stylex")))([n.backButton, a ? l ? n.backButtonVisibleRTL : n.backButtonVisibleLTR : n.backButtonHidden]),
				children: j.jsx(b("CometTooltip.react"), {
					position: "below",
					tooltip: h._("Nh\u1ea5n Esc \u0111\u1ec3 \u0111\u00f3ng"),
					children: j.jsx(b("TetraCircleButton.react"), {
						color: "primary",
						icon: f ? b("fbicon")._(g("478233"), 20) : l ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
						label: f ? h._("\u0110\u00f3ng") : h._("Quay l\u1ea1i trang tr\u01b0\u1edbc"),
						onPress: e,
						size: m,
						testid: void 0
					})
				})
			}), j.jsx(b("CometPressable.react"), {
				"aria-label": h._("Facebook"),
				expanding: !0,
				linkProps: {
					prefetchQueries: b("gkx")("1811937"),
					productAttribution: {
						tap_point: "logo"
					},
					traceParams: {
						navigation_source: "logo_click"
					},
					url: k
				},
				onPress: p,
				overlayDisabled: !0,
				ref: o,
				testid: void 0,
				xstyle: [n.logo, c && n.logoHidden, a && (l ? n.logoWithBackButtonRTL : n.logoWithBackButtonLTR)],
				children: j.jsx(b("CometIconLogo.react"), {
					shadow: d,
					size: 40
				})
			})]
		})
	}
}), null);