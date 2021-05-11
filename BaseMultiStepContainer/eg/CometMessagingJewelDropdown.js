__d("CometMessagingJewelDropdown.react", ["fbt", "BaseMultiStepContainer.react", "CometErrorBoundary.react", "CometMessagingJewelDropdownQPBannerContainer.react", "CometPlaceholder.react", "CometScrollView.react", "CometTopNavListDropdown.react", "MWJewelDropdownHeader.react", "MWJewelMessageRequestsDropdown.react", "MWJewelMessengerLink.react", "MWJewelSpamMessagesDropdown.react", "MWUIJewelPreloadThreadFolder.re", "React", "ReactMemoCond", "XCometMessengerControllerRouteBuilder", "gkx", "recoverableViolation", "requireCond", "stylex", "useCallbackCond", "useMWJewelThreadListSearchTypeahead.react", "cr:1716992", "cr:1525945"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = b("cr:1716992") ? b("cr:1716992").useHook : function () {
			return function () {}
		};

	function k(a) {
		b("recoverableViolation")("CometMessagingJewelDropdownQPBannerContainer failed to render", "messenger_web_product", {
			error: a
		})
	}
	var l = b("ReactMemoCond")(b("gkx")("1827034"), function (a) {
		var c = a.onClose,
			d = a.pushPage;
		a = a.qpBannerContainerQueryRef;
		var e = j(),
			f = i.useCallback(function () {
				e(), c()
			}, [c, e]);
		i.useEffect(function () {
			return e
		}, [e]);
		var h = i.useState(!1),
			l = h[0];
		h = h[1];
		var m = i.useState(""),
			n = m[0];
		m = m[1];
		var o = b("XCometMessengerControllerRouteBuilder").buildURL({});
		h = b("useMWJewelThreadListSearchTypeahead.react")(h, m, n, f);
		var p = b("MWUIJewelPreloadThreadFolder.re").useHook(),
			q = b("useCallbackCond")(b("gkx")("1827034"), function () {
				return d(function (a) {
					a = a.onReturn;
					return i.jsx(b("MWJewelSpamMessagesDropdown.react"), {
						onClose: f,
						onReturn: a
					})
				})
			}, [f, d]);
		m = b("useCallbackCond")(b("gkx")("1827034"), function () {
			p("other"), d(function (a) {
				a = a.onReturn;
				return i.jsx(b("MWJewelMessageRequestsDropdown.react"), {
					onClose: f,
					onOpenSpamMessages: q,
					onReturn: a
				})
			})
		}, [f, q, p, d]);
		return i.jsxs(b("CometTopNavListDropdown.react").Card, {
			useMaxHeight: !0,
			children: [i.jsxs(b("CometScrollView.react"), {
				showsHorizontalScrollIndicator: !1,
				showsVerticalScrollIndicator: !l && n === "",
				children: [i.jsx(b("MWJewelDropdownHeader.react"), {
					inboxUrl: o,
					onClose: f,
					onOpenMessageRequests: m,
					title: g._("Messenger")
				}), i.jsx(b("CometErrorBoundary.react"), {
					onError: k,
					children: i.jsx(b("CometPlaceholder.react"), {
						fallback: null,
						children: i.jsx(b("CometMessagingJewelDropdownQPBannerContainer.react"), {
							queryRef: a
						})
					})
				}), i.jsx(b("cr:1525945"), {
					folder: "inbox",
					onClose: f,
					onOpenMessageRequests: m,
					searchTypeahead: h
				})]
			}), i.jsx(b("MWJewelMessengerLink.react"), {
				onClick: f,
				url: o
			})]
		})
	});

	function a(a) {
		var c = a.props.onClose,
			d = a.queries.qpBannerContainerQueryRef;
		a = i.jsx("div", {
			className: (h || (h = b("stylex")))([b("CometTopNavListDropdown.react").styles.cardWidth]),
			children: i.jsx(b("BaseMultiStepContainer.react"), {
				fitContentWidth: !0,
				children: function (a) {
					return i.jsx(l, {
						onClose: c,
						pushPage: a,
						qpBannerContainerQueryRef: d
					})
				}
			})
		});
		return i.jsx(b("CometTopNavListDropdown.react"), {
			label: g._("Messenger"),
			name: "MWJewelDropdown",
			children: a
		})
	}
}), null);