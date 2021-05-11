__d("MWChatIncomingMessageDefaultRenderer.bs", ["fbt", "bs_curry", "React", "bs_js_dict", "MWTheme.bs", "ReactData.bs", "JSResource", "stylex", "bs_caml_option", "useServerTime", "MWChatReactions.bs", "MWChatGutterItem.bs", "useCometUniqueID", "BaseHeading.react", "FocusRegion.react", "focusScopeQueries", "BootloaderResource", "MWChatIncomingError.bs", "CometTimestamp.react", "MWChatMessageTooltip.bs", "CometErrorBoundary.re", "FocusWithinHandler.react", "MWChatMessageCellFocusTable.bs", "BaseHeadingContextWrapper.re", "MWChatMessageTableFocusTable.bs", "MWChatIncomingGroupInfoContext.bs"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = b("JSResource")("MWWorkChatSavedBadge.bs").__setRef("MWChatIncomingMessageDefaultRenderer.bs");

	function a(a) {
		return {}
	}

	function k(a) {
		return i.createElement(b("BootloaderResource").read(j).make, a)
	}
	e = {
		reasonResource: j,
		makeProps: a,
		make: k
	};
	var l = b("JSResource")("MWWorkChatPinnedBadge.bs").__setRef("MWChatIncomingMessageDefaultRenderer.bs");

	function c(a) {
		return {}
	}

	function m(a) {
		return i.createElement(b("BootloaderResource").read(l).make, a)
	}
	a = {
		reasonResource: l,
		makeProps: c,
		make: m
	};
	var n = {
		row: {
			display: "j83agx80",
			flexDirection: "cbu4d94t"
		},
		root: {
			display: "j83agx80"
		},
		solid: {
			paddingTop: "jwdofwj8"
		},
		message: {
			overflowX: "ni8dbmo4",
			overflowY: "stjgntxs",
			backgroundColor: "g5ia77u1",
			whiteSpace: "ii04i59q"
		},
		mask: {
			backgroundColor: "nred35xi"
		},
		withAttachment: {
			display: "j83agx80",
			alignItems: "fsy3e5b7",
			flexDirection: "cbu4d94t"
		},
		action: {
			flexShrink: "pfnyh3mw",
			order: "ewlkfwdl",
			alignItems: "bp9cbjyn",
			display: "j83agx80",
			paddingStart: "qnrpqo6b"
		},
		actionWithPadding: {
			paddingBottom: "a5h7je3r"
		},
		spacer: {
			order: "h9e7qa53",
			flexBasis: "rj1gh0hx",
			flexGrow: "buofh1pr"
		},
		reactionSpacer: {
			height: "jnigpg78"
		},
		reactionSpacerOverlapping: {
			height: "ed3p1gfi"
		},
		messageContainer: {
			order: "jn8vp64t",
			position: "l9j0dhe7",
			minWidth: "hpfvmrgz"
		},
		focusNotVisible: {
			outline: "lzcic4wl"
		},
		gutterItem: {
			order: "iyic8zgw"
		},
		reactionRoot: {
			bottom: "be3nqp5n",
			position: "pmk7jnqg",
			alignItems: "bp9cbjyn",
			display: "j83agx80",
			justifyContent: "bkfpd7mw"
		},
		reactionEndAnchor: {
			end: "b5fwa0m2"
		},
		reactionStartAnchor: {
			start: "j9ispegn"
		},
		accessibleElem: {
			clip: "svngc6pa",
			height: "ay7djpcl",
			overflowX: "ni8dbmo4",
			overflowY: "stjgntxs",
			position: "pmk7jnqg",
			whiteSpace: "g0qnabr5",
			width: "rfua0xdk"
		}
	};

	function d(a) {
		var c = a.messageActions,
			d = a.isSaved,
			e = a.isPinned,
			f = a.renderAttachment,
			j = a.children,
			l = a.first,
			o = a.status,
			p = a.reactions,
			q = a.showReactionsWithOverlapping,
			r = a.hasRepliedToMessage,
			s = a.isHscroll;
		a = a.testid;
		p = p !== void 0 ? b("bs_caml_option").valFromOption(p) : void 0;
		q = q !== void 0 ? q : !0;
		r = r !== void 0 ? r : !1;
		s = s !== void 0 ? s : !1;
		var t = b("MWTheme.bs").useTheme(void 0),
			u = i.useState(function() {
				return !1
			}),
			v = u[1],
			w = u[0];
		u = function(a) {
			return b("bs_curry")._1(v, function(a) {
				return !0
			})
		};
		t = b("MWTheme.bs").isGradient(t);
		var x = typeof o === "number" ? !1 : o._0.length === 1,
			y = b("useCometUniqueID")(),
			z = i.useState(function() {
				return n.reactionEndAnchor
			}),
			A = z[1],
			B = i.useRef(null),
			C = i.useRef(null);
		i.useLayoutEffect(function() {
			var a = B.current,
				c = C.current;
			if (!(a == null) && !(c == null)) {
				var d = a.clientWidth;
				a = c.clientWidth;
				if (a > 0) {
					var e = a + 8;
					b("bs_curry")._1(A, function(a) {
						if (d < e) return n.reactionStartAnchor;
						else return n.reactionEndAnchor
					})
				}
			}
		}, [p, A]);
		var D = i.useContext(b("MWChatIncomingGroupInfoContext.bs").context),
			E = D.authorName,
			F = D.timestamp,
			G = D.profileLinkID,
			H = D.removedTimestamp;
		D = D.titleID;
		var I = b("CometTimestamp.react").getTimestamp(b("useServerTime")(), new Date(F)),
			J, K = 0,
			L;
		E !== void 0 ? r ? J = i.jsx("div", {
			children: g._("Tin tr\u1ea3 l\u1eddi c\u1ee7a {Reply's author}:", [g._param("Reply's author", E)])
		}) : D !== void 0 ? K = 1 : G !== void 0 && l ? J = i.jsx("div", {
			children: g._("{Author's name of the incoming message} \u0111\u00e3 g\u1eedi {timestamp of the incoming message, it can be 'Today at 13:14', 'Yesterday at 13:14', '22 August at 13:14' or '15 May, 2018'}", [g._param("Author's name of the incoming message", i.jsx("div", {
				"aria-owns": G
			})), g._param("timestamp of the incoming message, it can be 'Today at 13:14', 'Yesterday at 13:14', '22 August at 13:14' or '15 May, 2018'", I)])
		}) : (L = E, K = 2) : D !== void 0 ? K = 1 : J = null;
		switch (K) {
			case 1:
				J = i.jsxs("div", {
					children: [i.jsx("span", {
						"aria-labelledby": D
					}), I]
				});
				break;
			case 2:
				J = i.jsx("div", {
					children: g._("{Author's name of the incoming message} \u0111\u00e3 g\u1eedi {timestamp of the incoming message, it can be 'Today at 13:14', 'Yesterday at 13:14', '22 August at 13:14' or '15 May, 2018'}", [g._param("Author's name of the incoming message", L), g._param("timestamp of the incoming message, it can be 'Today at 13:14', 'Yesterday at 13:14', '22 August at 13:14' or '15 May, 2018'", I)])
				});
				break
		}
		G = b("ReactData.bs").set({
			children: i.jsx(b("CometErrorBoundary.re").make, {
				fallback: function(a) {
					return i.jsx(b("MWChatIncomingError.bs").make, {})
				},
				children: j
			}),
			ref: B,
			className: (h || (h = b("stylex")))(n.message, t && !r ? n.mask : !1, f ? n.withAttachment : !1)
		}, b("bs_js_dict").fromArray(x ? [
			["aria-owns", y]
		] : []));
		var M;
		E = 0;
		p !== void 0 || d || e ? E = 1 : M = null;
		E === 1 && (M = i.jsxs(i.Fragment, {
			children: [i.jsxs("div", {
				children: [d ? i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Cell.make, {
					children: i.jsx("div", {
						children: i.jsx(k, {}),
						role: "gridcell"
					})
				}) : null, e ? i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Cell.make, {
					children: i.jsx("div", {
						children: i.jsx(m, {}),
						role: "gridcell"
					})
				}) : null, p !== void 0 ? i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Cell.make, {
					children: i.jsx("div", {
						children: i.jsx(b("MWChatReactions.bs").make, {
							reactions: b("bs_caml_option").valFromOption(p)
						}),
						role: "gridcell"
					})
				}) : null],
				ref: C,
				className: (h || (h = b("stylex")))(n.reactionRoot, z[0])
			}), i.jsx("div", {
				className: h(q ? n.reactionSpacerOverlapping : n.reactionSpacer, t ? n.mask : !1)
			})]
		}));
		var N = i.jsxs(i.Fragment, {
			children: [i.jsx("span", {
				children: l && !r ? i.jsx(b("BaseHeadingContextWrapper.re").make, {
					children: i.jsx(b("BaseHeading.react"), {
						children: J
					})
				}) : J,
				className: h(n.accessibleElem)
			}), (a !== void 0 ? (G["data-testid"] = a, void 0) : void 0, i.jsx("div", G)), M]
		});
		K = s ? null : i.jsx("div", {
			children: c,
			className: (h || (h = b("stylex")))(n.action, t && !r ? n.mask : !1, p !== void 0 || d || e ? n.actionWithPadding : !1)
		});
		return i.jsx(b("MWChatMessageCellFocusTable.bs").keyCommands, {
			onEscape: w ? function(a) {
				return b("bs_curry")._1(v, function(a) {
					return !1
				})
			} : void 0,
			onEnter: w ? void 0 : u,
			onSpace: w ? void 0 : u,
			children: i.jsx("div", {
				children: i.jsxs("div", {
					children: [i.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Cell.make, {
						children: i.jsx("div", {
							children: i.jsx(b("MWChatMessageTooltip.bs").make, {
								removedTimestamp: H,
								timestamp: F,
								children: i.jsx(b("FocusWithinHandler.react"), {
									onFocusChange: function(a) {
										if (!a) return b("bs_curry")._1(v, function(a) {
											return !1
										})
									},
									children: function(a, c) {
										a = b("ReactData.bs").set({
											children: w ? i.jsx(b("FocusRegion.react").FocusRegion, {
												autoFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
												autoRestoreFocus: !0,
												containFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
												recoverFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
												children: i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Table.make, {
													tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
													wrapX: !0,
													children: i.jsx("div", {
														children: i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Row.make, {
															children: i.jsx("div", {
																children: N,
																role: "row"
															})
														}),
														role: "grid"
													})
												})
											}) : N,
											className: (h || (h = b("stylex")))(c ? !1 : n.focusNotVisible),
											role: "gridcell",
											tabIndex: 0
										}, b("bs_js_dict").fromArray([
											["data-scope", b("MWChatMessageTableFocusTable.bs").scopeID],
											["data-recover", "true"]
										]));
										return i.jsx("div", a)
									}
								}),
								position: "start"
							}),
							className: h(n.messageContainer)
						})
					}), K, i.jsx("div", {
						className: h(n.spacer, t && !r ? n.mask : !1)
					}), i.jsx(b("MWChatGutterItem.bs").make, {
						status: x ? o : 0,
						incoming: !0,
						hasRepliedToMessage: r,
						xstyle: n.gutterItem,
						id: y
					})],
					className: h(n.root, t || l ? !1 : n.solid)
				}),
				className: h(n.row)
			})
		})
	}
	c = d;
	f.LazyMWWorkChatSavedBadge = e;
	f.LazyMWWorkChatPinnedBadge = a;
	f.styles = n;
	f.make = c
}), null);