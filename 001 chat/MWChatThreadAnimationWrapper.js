__d("MWChatThreadAnimationWrapper.bs", ["bs_curry", "React", "gkx", "MWTheme.bs", "UserAgent", "stylex", "bs_caml_option", "MWChatUnsendNUX.bs", "useResizeObserver", "MWChatThreadContext.bs", "MWChatTabContentStyles.bs", "MWChatComposerMediaDropTarget.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");

	function a(a) {
		var c = a.composer,
			d = a.threadView,
			e = a.animationEnabled,
			f = a.ensureScrolledToBottom,
			i = a.covidSheet,
			j = a.mediaDropDisabled,
			k = a.id,
			l = a.contextBannerData,
			m = a.welcomePageData,
			n = a.shouldInitiallyOpenActionTray;
		a = a.senderUnsendNUXEnabled;
		i = i !== void 0 ? b("bs_caml_option").valFromOption(i) : null;
		n = n !== void 0 ? n : !1;
		a = a !== void 0 ? a : !1;
		var o = b("MWTheme.bs").useTheme(void 0),
			p = b("MWTheme.bs").isGradient(o),
			q = h.useState(function() {
				return -1
			}),
			r = q[1],
			s = q[0];
		q = b("useResizeObserver")(function(a) {
			return b("bs_curry")._1(r, function(b) {
				return a.height
			})
		});
		n = h.useReducer(function(a, b) {
			if (!e) return a;
			switch (b) {
				case 0:
					return {
						actionTrayOpen: !0, actionTrayFullyOpen: !1, shouldAnimateThread: !0, triggerCloseTrayStart: !1, shouldRenderContextOverlay: s > 44
					};
				case 1:
					return {
						actionTrayOpen: !0, actionTrayFullyOpen: !0, shouldAnimateThread: !1, triggerCloseTrayStart: !1, shouldRenderContextOverlay: !1
					};
				case 2:
					return {
						actionTrayOpen: !0, actionTrayFullyOpen: !1, shouldAnimateThread: !1, triggerCloseTrayStart: !0, shouldRenderContextOverlay: s > 0
					};
				case 3:
					return {
						actionTrayOpen: !1, actionTrayFullyOpen: !1, shouldAnimateThread: !0, triggerCloseTrayStart: !1, shouldRenderContextOverlay: s > 0
					};
				case 4:
					return {
						actionTrayOpen: !1, actionTrayFullyOpen: !1, shouldAnimateThread: !1, triggerCloseTrayStart: !1, shouldRenderContextOverlay: !1
					}
			}
		}, {
			actionTrayOpen: n,
			actionTrayFullyOpen: n,
			shouldAnimateThread: !1,
			triggerCloseTrayStart: !1,
			shouldRenderContextOverlay: !1
		});
		var t = n[1],
			u = n[0];
		h.useEffect(function() {
			u.triggerCloseTrayStart && b("bs_curry")._1(t, 3)
		}, [u, t]);
		n = function(a) {
			if (u.actionTrayFullyOpen) return b("bs_curry")._1(t, 2);
			else if (u.actionTrayOpen) return b("bs_curry")._1(t, 3);
			else return
		};
		var v = function(a) {
				if (!u.actionTrayOpen) return b("bs_curry")._1(t, 0)
			},
			w = h.useRef(null);
		o = o.TAG ? {
			backgroundImage: b("MWTheme.bs").gradient(void 0, void 0, o._0.colors)
		} : void 0;
		d = {
			children: [h.jsxs("div", {
				children: [h.jsx("div", {
					children: b("bs_curry")._1(d, q),
					className: (g || (g = b("stylex")))(b("MWChatTabContentStyles.bs").styles.thread),
					onLoadedData: function(a) {
						return b("bs_curry")._1(f, void 0)
					},
					onLoad: function(a) {
						return b("bs_curry")._1(f, void 0)
					},
					onTransitionEnd: function(a) {
						a.stopPropagation()
					}
				}), e && !b("UserAgent").isBrowser("Firefox") && p ? h.jsx("div", {
					className: (g || (g = b("stylex")))(b("MWChatTabContentStyles.bs").styles.whitespace)
				}) : null],
				className: g(b("MWChatTabContentStyles.bs").styles.threadContainer, u.shouldAnimateThread ? b("MWChatTabContentStyles.bs").styles.threadAnimation : !1, u.actionTrayFullyOpen ? !1 : u.actionTrayOpen && !b("gkx")("1620337") ? b("MWChatTabContentStyles.bs").styles.threadActionTrayOpen : b("MWChatTabContentStyles.bs").styles.threadActionTrayClosed),
				onTransitionEnd: function(a) {
					if (u.actionTrayOpen) return b("bs_curry")._1(t, 1);
					else return b("bs_curry")._1(t, 4)
				}
			}), h.jsx("div", {
				className: g(u.actionTrayFullyOpen ? b("MWChatTabContentStyles.bs").styles.actionTrayPlaceholder : !1)
			}), u.shouldRenderContextOverlay ? h.jsx("div", {
				children: h.jsx(b("MWChatThreadContext.bs").make, {
					id: k,
					contextBannerData: l,
					welcomePageData: m,
					isOverlay: !0
				}),
				className: (g || (g = b("stylex")))(b("MWChatTabContentStyles.bs").styles.contextOverlay)
			}) : null],
			className: g(b("MWChatTabContentStyles.bs").styles.gradient)
		};
		o !== void 0 && (d.style = b("bs_caml_option").valFromOption(o));
		return h.jsxs("div", {
			children: [i, h.jsx(b("MWChatUnsendNUX.bs").make, {
				senderUnsendNUXEnabled: a
			}), h.jsxs(b("MWChatComposerMediaDropTarget.bs").make, {
				children: [h.jsxs("div", d), h.jsx("div", {
					children: b("bs_curry")._4(c, v, n, w, u.actionTrayOpen),
					className: g(b("MWChatTabContentStyles.bs").styles.composer)
				})],
				disabled: j,
				fileUploadHandler: b("bs_caml_option").nullable_to_opt(w.current),
				xstyle: b("MWChatTabContentStyles.bs").styles.dropTarget
			})],
			className: g(b("MWChatTabContentStyles.bs").styles.main)
		})
	}
	c = b("MWChatTabContentStyles.bs").styles;
	d = a;
	f.styles = c;
	f.make = d
}), null);