__d("PagesFeedCometOnboardingDialog.react", ["fbt", "ix", "CometBackgroundImage.react", "CometColumn.react", "CometColumnItem.react", "CometMultiStepDialog.react", "CometPlaceholder.react", "CometProgressIndicator.react", "CometProgressStepper.react", "CometRelay", "CometRow.react", "CometRowItem.react", "GraphQLGender", "PagesFeedCometOnboardingDialogQuery.graphql", "PagesFeedCometUpdateOnboardingEventMutation", "SPFCometConnectionsDialogFollowSection.react", "TetraButton.react", "TetraText.react", "TetraTextPairing.react", "react", "stylex", "unrecoverableViolation"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j, k, l = j || b("react"),
		m = 3,
		n = l.createContext({
			name: "",
			onClose: function() {},
			onOnboardingShown: function() {},
			referrer: "NONE",
			reloadFeed: function() {},
			surface: "TAB"
		}),
		o = {
			backgroundImage: {
				bottom: "i09qtzwb",
				boxSizing: "rq0escxv",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				zIndex: "enjifjd9"
			},
			card: {
				width: "rbmczful"
			},
			context: {
				paddingTop: "discj3wi",
				paddingEnd: "hv4rvrfc",
				paddingBottom: "ihqw7lf3",
				paddingStart: "dati1w0a"
			},
			footer: {
				borderTopColor: "t51s4qs2",
				borderEndColor: "bv6zxntz",
				borderBottomColor: "qc3rp1z7",
				borderStartColor: "rj06g9kl",
				borderTopStyle: "goun2846",
				borderTopWidth: "frvqaej8",
				boxShadow: "e2wq8zo2"
			},
			tutorialContainer: {
				paddingBottom: "dlck6cen",
				width: "k4urcfbm"
			},
			tutorialContent: {
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				marginBottom: "c9zspvje",
				marginEnd: "gupp8or6",
				marginStart: "frluczxc",
				position: "pmk7jnqg",
				start: "j9ispegn"
			}
		};

	function p(a) {
		switch (a) {
			case 0:
				return h("1474433");
			case 1:
				return h("1474434");
			case 2:
				return h("1474435");
			default:
				throw b("unrecoverableViolation")("unknown pages feed onboarding step", "pages_feed")
		}
	}

	function q(a, c) {
		switch (a) {
			case 0:
				return g._({
					"*": "Gi\u1edbi thi\u1ec7u B\u1ea3ng tin d\u00e0nh ri\u00eang cho {name}"
				}, [g._name("name", c, new(b("GraphQLGender"))("NEUTER").toIntlVariationsEnum())]);
			case 1:
				return g._("Ch\u1ecdn ng\u01b0\u1eddi \u0111\u1ec3 theo d\u00f5i");
			case 2:
				return g._("T\u00ecm c\u1ea3m h\u1ee9ng t\u1eeb c\u00e1c Trang v\u00e0 ng\u01b0\u1eddi c\u1ee7a c\u00f4ng ch\u00fang kh\u00e1c");
			default:
				throw b("unrecoverableViolation")("unknown pages feed onboarding step", "pages_feed")
		}
	}

	function r(a) {
		switch (a) {
			case 0:
				return g._("T\u01b0\u01a1ng t\u00e1c b\u1eb1ng t\u00ean Trang trong kh\u00f4ng gian ri\u00eang bi\u1ec7t, nh\u01b0 tr\u00ean trang c\u00e1 nh\u00e2n.");
			case 1:
				return g._("H\u00e3y theo d\u00f5i c\u00e1c Trang v\u00e0 ng\u01b0\u1eddi c\u1ee7a c\u00f4ng ch\u00fang ph\u00f9 h\u1ee3p \u0111\u1ec3 xem th\u00eam n\u1ed9i dung h\u1eefu \u00edch.");
			case 2:
				return g._("B\u1ea1n s\u1ebd th\u1ea5y b\u00e0i vi\u1ebft v\u00e0 th\u00f4ng tin m\u1edbi t\u1eeb c\u00e1c Trang v\u00e0 ng\u01b0\u1eddi c\u1ee7a c\u00f4ng ch\u00fang c\u00f3 li\u00ean quan \u0111\u1ec3 t\u00ecm c\u1ea3m h\u1ee9ng ph\u00e1t tri\u1ec3n Trang c\u1ee7a ch\u00ednh m\u00ecnh.");
			default:
				throw b("unrecoverableViolation")("unknown pages feed onboarding step", "pages_feed")
		}
	}

	function s(a) {
		var c = l.useContext(n),
			d = c.referrer,
			e = c.surface,
			f = b("CometRelay").useRelayEnvironment();
		l.useEffect(function() {
			b("PagesFeedCometUpdateOnboardingEventMutation").commitUpdateOnboardingEventMutation(f, a, e, d)
		}, [f, a, d, e])
	}

	function t(a) {
		var c = a.name,
			d = a.onBack,
			e = a.onNext;
		a = a.step;
		return l.jsxs(b("CometColumn.react"), {
			xstyle: o.card,
			children: [l.jsx(b("CometColumnItem.react"), {
				children: l.jsxs("div", {
					className: (k || (k = b("stylex")))(o.tutorialContainer),
					children: [l.jsx("div", {
						className: k(o.backgroundImage),
						children: l.jsx(b("CometBackgroundImage.react"), {
							src: p(a)
						})
					}), l.jsx("div", {
						className: k(o.tutorialContent),
						children: l.jsx(b("TetraTextPairing.react"), {
							body: r(a),
							bodyColor: "white",
							headline: q(a, c),
							headlineColor: "white",
							level: 1
						})
					})]
				})
			}), l.jsx(b("CometColumnItem.react"), {
				children: l.jsx(b("CometProgressStepper.react"), {
					step: a + 1,
					totalSteps: m
				})
			}), l.jsx(b("CometColumnItem.react"), {
				children: l.jsxs(b("CometRow.react"), {
					align: "end",
					direction: "backward",
					paddingHorizontal: 16,
					paddingVertical: 12,
					spacingHorizontal: 12,
					verticalAlign: "center",
					children: [l.jsx(b("CometRowItem.react"), {
						children: l.jsx(b("TetraButton.react"), {
							label: g._("Ti\u1ebfp"),
							onPress: e,
							padding: "wide"
						})
					}), d == null || d === void 0 ? null : l.jsx(b("CometRowItem.react"), {
						children: l.jsx(b("TetraButton.react"), {
							label: g._("Quay l\u1ea1i"),
							onPress: d,
							reduceEmphasis: !0,
							type: "secondary"
						})
					})]
				})
			})]
		})
	}

	function u(a) {
		var b = a.pushPage;
		a = l.useContext(n);
		var c = a.name,
			d = a.onOnboardingShown;
		s("VIEW_TUTORIAL_0");
		l.useEffect(function() {
			d()
		}, [d]);
		return t({
			name: c,
			onNext: function() {
				b(function(a) {
					a = a.onReturn;
					return l.jsx(v, {
						onReturn: a,
						pushPage: b
					})
				})
			},
			step: 0
		})
	}

	function v(a) {
		var b = a.onReturn,
			c = a.pushPage;
		s("VIEW_TUTORIAL_1");
		return t({
			onBack: b,
			onNext: function() {
				c(function(a) {
					a = a.onReturn;
					return l.jsx(w, {
						onReturn: a,
						pushPage: c
					})
				})
			},
			step: 1
		})
	}

	function w(a) {
		var b = a.onReturn,
			c = a.pushPage;
		s("VIEW_TUTORIAL_2");
		return t({
			onBack: b,
			onNext: function() {
				c(function(a) {
					a.onReturn;
					return l.jsx(x, {})
				}, {
					title: g._("Trang v\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a c\u00f4ng ch\u00fang n\u00ean theo d\u00f5i")
				})
			},
			step: 2
		})
	}

	function x() {
		var a = l.useContext(n),
			c = a.name,
			d = a.onClose,
			e = a.referrer,
			f = a.reloadFeed,
			h = a.surface;
		a = a.user$key;
		var i = b("CometRelay").useRelayEnvironment();
		if (a == null) throw b("unrecoverableViolation")("user key cannot be nullish for pages news feed onboarding process", "pages_feed");
		s("VIEW_FOLLOW_SECTION");
		var j = l.useState(0),
			m = j[0],
			p = j[1];
		j = l.useCallback(function() {
			p(m + 1)
		}, [m]);
		var q = l.useCallback(function() {
			p(m - 1)
		}, [m]);
		return l.jsxs(b("CometColumn.react"), {
			children: [l.jsx(b("CometColumnItem.react"), {
				children: l.jsx("div", {
					className: (k || (k = b("stylex")))(o.context),
					children: l.jsx(b("TetraText.react"), {
						type: "body2",
						children: g._({
							"*": "Th\u00f4ng tin m\u1edbi t\u1eeb c\u00e1c Trang v\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a c\u00f4ng ch\u00fang m\u00e0 {name} theo d\u00f5i s\u1ebd xu\u1ea5t hi\u1ec7n tr\u00ean B\u1ea3ng tin c\u1ee7a Trang n\u00e0y."
						}, [g._name("name", c, new(b("GraphQLGender"))("NEUTER").toIntlVariationsEnum())])
					})
				})
			}), l.jsxs(b("CometColumnItem.react"), {
				expanding: !0,
				children: [l.jsx(b("CometPlaceholder.react"), {
					fallback: l.jsx(b("CometProgressIndicator.react"), {}),
					children: l.jsx(b("SPFCometConnectionsDialogFollowSection.react"), {
						followLocation: "PAGES_FEED_ONBOARDING",
						onFollow: j,
						onUnfollow: q,
						spfUser$key: a
					})
				}), l.jsx(b("CometColumnItem.react"), {
					children: l.jsx("div", {
						className: k(o.footer),
						children: l.jsx(b("CometRow.react"), {
							align: "end",
							direction: "backward",
							paddingHorizontal: 16,
							paddingVertical: 12,
							spacingHorizontal: 12,
							verticalAlign: "center",
							children: l.jsx(b("CometRowItem.react"), {
								children: l.jsx(b("TetraButton.react"), {
									label: g._("\u0110i t\u1edbi B\u1ea3ng tin"),
									onPress: function() {
										b("PagesFeedCometUpdateOnboardingEventMutation").commitUpdateOnboardingEventMutation(i, "FINISH_TUTORIAL", h, e), d(), m > 0 && f()
									},
									padding: "wide",
									reduceEmphasis: !0
								})
							})
						})
					})
				})]
			})]
		})
	}

	function a(a) {
		var c = a.props;
		a = a.queries;
		a = b("CometRelay").usePreloadedQuery(i !== void 0 ? i : i = b("PagesFeedCometOnboardingDialogQuery.graphql"), a.queryReference);
		a = a.page;
		if (!a) throw b("unrecoverableViolation")("cannot get current viewer info", "pages_feed");
		s("START_ONBOARDING");
		return l.jsx(n.Provider, {
			value: {
				name: c.pageName,
				onClose: c.onClose,
				onOnboardingShown: c.onOnboardingShown,
				referrer: c.referrer,
				reloadFeed: c.reloadFeed,
				surface: c.surface,
				user$key: a
			},
			children: l.jsx(b("CometMultiStepDialog.react"), {
				onClose: c.onClose,
				size: "small",
				children: function(a) {
					return l.jsx(u, {
						pushPage: a
					})
				}
			})
		})
	}
}), null);