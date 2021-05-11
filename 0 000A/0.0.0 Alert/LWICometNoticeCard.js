__d("LWICometNoticeCard.react", ["fbt", "ix", "CometLink.react", "CometRow.react", "CometRowItem.react", "IconSource", "LWICometLoadingOverlay.react", "LWICometUXQualityUtils", "LWIOmniText.react", "TetraButtonGroup.react", "TetraCircleButton.react", "TetraIcon.react", "TetraListCell.react", "fbicon", "react", "stylex", "useIsDarkMode", "useResizeObserver"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k = i || b("react"),
		l = {
			8: {
				marginBottom: "bi6gxh9e",
				marginTop: "aov4n071"
			},
			16: {
				marginBottom: "sjgh65i0",
				marginTop: "tr9rh885"
			}
		},
		m = {
			action: {
				display: "pq6dq46d",
				end: "swmj3c3o",
				position: "pmk7jnqg",
				top: "fcg2cn6m",
				transitionDuration: "ms05siws",
				transitionProperty: "flx89l3n",
				transitionTimingFunction: "b7h9ocf4"
			},
			actionIconCollapsed: {
				transform: "j9x3uwb8"
			},
			activeFeedbackColor: {
				borderStart: "l7v4humb"
			},
			body: {
				maxHeight: "qowsmv63",
				transitionDuration: "ms05siws",
				transitionProperty: "s7jxhap5",
				transitionTimingFunction: "b7h9ocf4"
			},
			bodyCollapsed: {
				opacity: "b5wmifdl"
			},
			border: {
				borderTopStartRadius: "jk6sbkaj",
				borderTopEndRadius: "kdgqqoy6",
				borderBottomEndRadius: "ihh4hy1g",
				borderBottomStartRadius: "qttc61fc",
				borderStart: "g7rslnd4",
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexWrap: "lhclo0ds",
				paddingBottom: "ihqw7lf3"
			},
			control: {
				marginTop: "muag1w35",
				marginEnd: "cxmmr5t8",
				marginBottom: "b20td4e0",
				marginStart: "rl04r1d5"
			},
			controlDivider: {
				borderTop: "l6v480f0",
				marginTop: "n1l5q3vz",
				marginEnd: "wkznzc2l",
				marginBottom: "oygrvhab",
				marginStart: "ozuftl9m"
			},
			errorColor: {
				borderStart: "hrsnp83r"
			},
			flatBackgroundColor: {
				backgroundColor: "i94ygzvd"
			},
			headerTitle: {
				marginEnd: "gupp8or6"
			},
			minWidthButtons: {
				display: "pq6dq46d"
			},
			newFeatureColor: {
				borderStart: "l5nhp0y1"
			},
			offerWalletColor: {
				borderStart: "l5nhp0y1"
			},
			offsetMargin: {
				marginBottom: "dicw6rsg"
			},
			policyUpdateColor: {
				borderStart: "gpjzfueq"
			},
			recommendationColor: {
				borderStart: "t020ofpe"
			},
			root: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "de7wkltx",
				boxSizing: "rq0escxv",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7",
				width: "k4urcfbm"
			},
			successColor: {
				borderStart: "i6pe0elc"
			},
			surfaceBackgroundColor: {
				backgroundColor: "hybvsw6c"
			},
			warningColor: {
				borderStart: "sc4hzhdu"
			}
		},
		n = {
			ACTIVE_FEEDBACK: new(b("IconSource"))("FB", h("489747"), 20),
			ERROR: new(b("IconSource"))("FB", h("503374"), 20),
			NEW_FEATURE: new(b("IconSource"))("FB", h("701054"), 20),
			OFFER_WALLET: new(b("IconSource"))("FB", h("1771128"), 20),
			POLICY_UPDATE: b("fbicon")._(h("506963"), 16),
			RECOMMENDATION: new(b("IconSource"))("FB", h("701038"), 20),
			SUCCESS: new(b("IconSource"))("FB", h("506111"), 20),
			WARNING: new(b("IconSource"))("FB", h("480790"), 20)
		};

	function o(a, b) {
		switch (a) {
			case "ERROR":
				return b ? g._("Show Error Details") : g._("Hide Error Details");
			case "WARNING":
				return b ? g._("Show Warning Details") : g._("Hide Warning Details");
			default:
				return b ? g._("Show More Info") : g._("Hide Info")
		}
	}

	function a(a) {
		var c = k.useState(!1),
			d = c[0],
			e = c[1];
		c = k.useState(0);
		var f = c[0],
			i = c[1];
		c = k.useState(!1);
		var p = c[0],
			q = c[1];
		c = k.useCallback(function() {
			e(function(a) {
				return !a
			})
		}, []);
		var r = a.body,
			s = a.category,
			t = a.ctaButton,
			u = a.ctaLink,
			v = a.header,
			w = a.items,
			x = a.marginVertical;
		x = x === void 0 ? 8 : x;
		var y = k.useCallback(function(a) {
				return a != null && i(a.width)
			}, []),
			z = b("useResizeObserver")(y);
		y = k.useCallback(function(a) {
			a != null && i(a.scrollHeight), z(a)
		}, [z]);
		var A = b("useIsDarkMode")();
		return p ? null : k.jsxs("div", {
			className: (j || (j = b("stylex")))([m.root, l[x], A && b("LWICometUXQualityUtils").shouldShowFix2020H2() ? m.flatBackgroundColor : m.surfaceBackgroundColor]),
			"data-testid": void 0,
			children: [k.jsxs("div", {
				className: (j || (j = b("stylex")))(m.border, s === "ACTIVE_FEEDBACK" && m.activeFeedbackColor, s === "ERROR" && m.errorColor, s === "NEW_FEATURE" && m.newFeatureColor, s === "OFFER_WALLET" && m.offerWalletColor, s === "POLICY_UPDATE" && m.policyUpdateColor, s === "RECOMMENDATION" && m.recommendationColor, s === "SUCCESS" && m.successColor, s === "WARNING" && m.warningColor),
				children: [k.jsxs(b("CometRow.react"), {
					children: [k.jsx(b("CometRowItem.react"), {
						children: k.jsx(b("TetraIcon.react"), {
							icon: n[s]
						})
					}), k.jsxs(b("CometRowItem.react"), {
						expanding: !0,
						children: [k.jsx("div", {
							className: (j || (j = b("stylex")))(m.offsetMargin)
						}), k.jsx("div", {
							className: (j || (j = b("stylex")))(m.headerTitle),
							children: k.jsx(b("LWIOmniText.react"), {
								numberOfLines: 3,
								type: "bodyLink3",
								children: v
							})
						})]
					})]
				}), k.jsxs("div", {
					className: (j || (j = b("stylex")))(d && m.bodyCollapsed, m.body),
					ref: y,
					style: {
						maxHeight: d ? 0 : f
					},
					children: [r != null && k.jsx(b("CometRow.react"), {
						children: k.jsx(b("CometRowItem.react"), {
							children: k.jsx(b("LWIOmniText.react"), {
								type: "body4",
								children: r
							})
						})
					}), w && w.length > 0 && k.jsxs(k.Fragment, {
						children: [k.jsx("div", {
							className: (j || (j = b("stylex")))(m.controlDivider)
						}), k.jsx("div", {
							className: (j || (j = b("stylex")))(m.control),
							children: w.map(function(a, c) {
								return k.jsxs(k.Fragment, {
									children: [k.jsx(b("TetraListCell.react"), {
										addOnSecondary: a.addOnSecondary.type === "switch" ? babelHelpers["extends"]({}, a.addOnSecondary, {
											size: "small"
										}) : a.addOnSecondary,
										body: a.body,
										headline: a.headline,
										level: 4
									}), a.addOnSecondary.value === !0 && a.cellOnPart]
								}, c)
							})
						})]
					}), u && k.jsx(b("CometRow.react"), {
						children: k.jsx(b("CometRowItem.react"), {
							children: k.jsx(b("CometLink.react"), {
								href: u.href,
								onClick: u.onClick,
								target: u.target,
								children: k.jsx(b("LWIOmniText.react"), {
									color: "blueLink",
									type: "bodyLink4",
									children: u.label
								})
							})
						})
					}), t && k.jsx("div", {
						className: (j || (j = b("stylex")))(t.forceMinWidthButton === !0 && m.minWidthButtons),
						children: k.jsx(b("TetraButtonGroup.react"), {
							primary: t.primaryButton,
							secondary: t.secondaryButton,
							wrap: "forward"
						})
					})]
				}), a.showButton === !1 ? k.jsx("div", {}) : a.dismissable === !0 || a.forceDismissable === !0 ? k.jsx("div", {
					className: (j || (j = b("stylex")))(m.action),
					children: k.jsx(b("TetraCircleButton.react"), {
						color: "primary",
						icon: b("fbicon")._(h("478231"), 12),
						label: g._("Dismiss"),
						onPress: function() {
							q(!0), a.onDismiss && a.onDismiss()
						},
						size: 24
					})
				}) : r != null || t || u || w ? k.jsx("div", {
					className: (j || (j = b("stylex")))(m.action, d && m.actionIconCollapsed),
					children: k.jsx(b("TetraCircleButton.react"), {
						color: "primary",
						icon: b("fbicon")._(h("505563"), 12),
						label: o(s, d),
						onPress: c,
						size: 24
					})
				}) : a.onClick && k.jsx("div", {
					className: (j || (j = b("stylex")))(m.action),
					children: k.jsx(b("TetraCircleButton.react"), {
						color: "primary",
						icon: b("fbicon")._(h("492530"), 12),
						label: a.accessibilityLabel,
						onPress: a.onClick,
						size: 24
					})
				})]
			}), a.showOverlay === !0 && k.jsx(b("LWICometLoadingOverlay.react"), {})]
		})
	}
}), null);