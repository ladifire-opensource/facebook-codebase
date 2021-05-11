__d("MWChatIncomingGroup.bs", ["fbt", "bs_curry", "React", "MWTheme.bs", "stylex", 
	"bs_belt_Option", "bs_caml_option", "MWChatProfile.bs", "CometLink.react", 
	"useCometUniqueID", "MWChatIntersperse.bs", "CometTooltip.react", "MWChatSeenHeadsRow.bs", "MWMessageElementRefList.bs", "MWChatIncomingMessageRow.bs", "MWChatMessageTableFocusTable.bs", "MWChatIncomingGroupInfoContext.bs", "MWChatIncomingMessageReplyToText.bs", "MWChatIncomingMessageReplyToPhoto.bs", "MWChatIncomingMessageReplyToStory.bs", "MWChatIncomingMessageReplyToSticker.bs", "MWChatIncomingMessageReplyToAttachment.bs", "MWChatIncomingMessageReplyToPhotoGroup.bs", "MWChatIncomingMessageReplyToRemovedMessage.bs"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			root: {
				display: "j83agx80",
				paddingTop: "jwdofwj8",
				paddingBottom: "pby63qed"
			},
			rootMask: {
				paddingTop: "jb3vyjys",
				paddingBottom: "qt6c0cv9"
			},
			profile: {
				flexShrink: "pfnyh3mw",
				alignItems: "aovydwv3",
				display: "j83agx80"
			},
			solid: {
				marginStart: "h676nmdw",
				marginEnd: "oi9244e8",
				marginBottom: "oygrvhab"
			},
			mask: {
				backgroundColor: "nred35xi"
			},
			verticalSep: {
				width: "c9rrlmt1",
				backgroundColor: "nred35xi",
				flexShrink: "pfnyh3mw"
			},
			main: {
				flexBasis: "rj1gh0hx",
				flexGrow: "buofh1pr",
				minWidth: "hpfvmrgz"
			},
			label: {
				paddingStart: "tw6a2znq"
			},
			sep: {
				height: "p3ovkuyr",
				backgroundColor: "nred35xi"
			},
			topSep: {
				height: "p3ovkuyr",
				backgroundColor: "nred35xi"
			},
			bottomSep: {
				height: "pmqtw6m8",
				backgroundColor: "nred35xi"
			},
			labelRoot: {
				display: "j83agx80"
			},
			labelLabel: {
				flexShrink: "pfnyh3mw",
				fontSize: "r9r71o1u",
				color: "m9osqain",
				lineHeight: "fsrhnwul",
				maxWidth: "dkr8dfph"
			},
			profileSpacer: {
				paddingBottom: "a5h7je3r"
			}
		};

	function k(a) {
		a = a._0.status;
		if (typeof a === "number") return null;
		a = a._0;
		var c = a.length;
		if (c !== 1 && c !== 0) return i.jsx(b("MWChatSeenHeadsRow.bs").make, {
			messageSeenBy: a
		});
		else return null
	}

	function l(a) {
		var c = a.original,
			d = a.response,
			e = a.replyToOther,
			f = a.pos,
			g = a.dispatch,
			h = a.buildSharedMediaViewerURL;
		a = a.messageElementRef;
		var j = i.useState(function() {
				return !1
			}),
			k = j[1];
		j = j[0];
		var l = function(a) {
				return b("bs_curry")._1(k, function(a) {
					return !0
				})
			},
			m = function(a) {
				return b("bs_curry")._1(k, function(a) {
					return !1
				})
			},
			n;
		if (typeof c === "number") n = c === 0 ? i.jsx(b("MWChatIncomingMessageReplyToRemovedMessage.bs").make, {
			pos: f,
			response: d,
			dispatch: g,
			replyToOther: e,
			hovered: j,
			buildSharedMediaViewerURL: h
		}) : i.jsx(b("MWChatIncomingMessageRow.bs").make, {
			content: d,
			first: !0,
			last: !0,
			dispatch: g,
			hovered: j,
			buildSharedMediaViewerURL: h
		});
		else switch (c.TAG | 0) {
			case 0:
				n = i.jsx(b("MWChatIncomingMessageReplyToText.bs").make, {
					pos: f,
					originalMessage: c._0,
					response: d,
					dispatch: g,
					replyToOther: e,
					hovered: j,
					buildSharedMediaViewerURL: h
				});
				break;
			case 1:
				n = i.jsx(b("MWChatIncomingMessageReplyToSticker.bs").make, {
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: h
				});
				break;
			case 2:
				n = i.jsx(b("MWChatIncomingMessageReplyToPhoto.bs").make, {
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: h
				});
				break;
			case 3:
				n = i.jsx(b("MWChatIncomingMessageReplyToPhotoGroup.bs").make, {
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: h
				});
				break;
			case 4:
				n = i.jsx(b("MWChatIncomingMessageReplyToAttachment.bs").make, {
					pos: f,
					response: d,
					dispatch: g,
					replyToOther: e,
					hovered: j,
					buildSharedMediaViewerURL: h
				});
				break;
			case 5:
				n = i.jsx(b("MWChatIncomingMessageReplyToStory.bs").make, {
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: h
				});
				break
		}
		f = {
			children: n,
			onMouseEnter: l,
			onMouseLeave: m
		};
		a !== void 0 && (f.ref = b("bs_caml_option").valFromOption(a));
		return i.jsx("div", f)
	}
	c = {
		make: l
	};

	function m(a) {
		switch (a.TAG | 0) {
			case 0:
				return a._1.reactions;
			case 1:
			case 2:
				return
		}
	}

	function n(a) {
		switch (a.TAG | 0) {
			case 1:
				return [a._0.timestamp, a._1.removedTimestamp];
			case 0:
			case 2:
				return [a._0.timestamp, void 0]
		}
	}

	function o(a) {
		var c = a.content,
			d = a.first,
			e = a.last,
			f = a.setCovidSheet,
			g = a.dispatch,
			h = a.buildSharedMediaViewerURL;
		a = a.messageElementRef;
		var j = i.useState(function() {
				return !1
			}),
			k = j[1],
			l = function(a) {
				return b("bs_curry")._1(k, function(a) {
					return !0
				})
			},
			m = function(a) {
				return b("bs_curry")._1(k, function(a) {
					return !1
				})
			};
		c = {
			children: i.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Row.make, {
				children: i.jsx(b("MWChatIncomingMessageRow.bs").make, {
					content: c,
					first: d,
					last: e,
					setCovidSheet: f,
					dispatch: g,
					hovered: j[0],
					buildSharedMediaViewerURL: h
				})
			}),
			role: "row",
			onMouseEnter: l,
			onMouseLeave: m
		};
		a !== void 0 && (c.ref = b("bs_caml_option").valFromOption(a));
		return i.jsx("div", c)
	}
	d = {
		make: o
	};

	function a(a) {
		var c = a.pos,
			d = a.image,
			e = a.title,
			f = a.profileHref,
			p = a.authorName,
			q = a.messages,
			r = a.setCovidSheet,
			s = a.dispatch,
			t = a.buildSharedMediaViewerURL,
			u = a.messageElementRefs;
		a = b("MWTheme.bs").useTheme(void 0);
		var v = q.length - 1 | 0,
			w = {
				contents: void 0
			},
			x = {
				contents: !1
			},
			y = {
				contents: [0, void 0]
			},
			z = {
				contents: !1
			};
		q = q.map(function(d, e) {
			var f = e === 0,
				g = e === v;
			switch (d.TAG | 0) {
				case 0:
					var h = d._0,
						j = k(h);
					g && (w.contents = b("bs_caml_option").some(j), x.contents = m(h) !== void 0, y.contents = n(h));
					return i.jsxs(i.Fragment, {
						children: [i.jsx(o, {
							content: h,
							first: f,
							last: g,
							setCovidSheet: r,
							dispatch: s,
							buildSharedMediaViewerURL: t,
							messageElementRef: b("bs_belt_Option").map(b("MWMessageElementRefList.bs").messageIdFromContent(h), function(a) {
								return b("bs_curry")._1(u.set, a)
							})
						}), g ? null : j]
					}, String(e));
				case 2:
					f = d._1;
					h = k(f);
					g && (w.contents = b("bs_caml_option").some(h), x.contents = m(f) !== void 0, y.contents = n(f));
					z.contents = !0;
					var a;
					switch (f.TAG | 0) {
						case 0:
							j = f._0.messageID;
							if (typeof j === "number") a = void 0;
							else if (j.TAG) {
								var p = j._0.messageId;
								a = b("bs_caml_option").some(b("bs_curry")._1(u.set, p))
							} else {
								p = j._0.offlineThreadingId;
								a = b("bs_caml_option").some(b("bs_curry")._1(u.set, p))
							}
							break;
						case 1:
							j = f._0.messageID;
							if (typeof j === "number") a = void 0;
							else if (j.TAG) {
								p = j._0.messageId;
								a = b("bs_caml_option").some(b("bs_curry")._1(u.set, p))
							} else {
								p = j._0.offlineThreadingId;
								a = b("bs_caml_option").some(b("bs_curry")._1(u.set, p))
							}
							break;
						case 2:
							j = f._0.messageID;
							if (typeof j === "number") a = void 0;
							else if (j.TAG) {
								p = j._0.messageId;
								a = b("bs_caml_option").some(b("bs_curry")._1(u.set, p))
							} else {
								p = j._0.offlineThreadingId;
								a = b("bs_caml_option").some(b("bs_curry")._1(u.set, p))
							}
							break
					}
					return i.jsxs(i.Fragment, {
						children: [i.jsx(l, {
							original: d._0,
							response: f,
							replyToOther: !1,
							pos: c,
							dispatch: s,
							buildSharedMediaViewerURL: t,
							messageElementRef: a
						}), g ? null : h]
					}, String(e));
				case 1:
				case 3:
					break
			}
			j = d._1;
			p = k(j);
			g && (w.contents = b("bs_caml_option").some(p), x.contents = m(j) !== void 0, y.contents = n(j));
			z.contents = !0;
			return i.jsxs(i.Fragment, {
				children: [i.jsx(l, {
					original: d._0,
					response: j,
					replyToOther: !0,
					pos: c,
					dispatch: s,
					buildSharedMediaViewerURL: t,
					messageElementRef: b("bs_belt_Option").map(b("MWMessageElementRefList.bs").messageIdFromContent(j), function(a) {
						return b("bs_curry")._1(u.set, a)
					})
				}), g ? null : p]
			}, String(e))
		});
		var A = b("useCometUniqueID")();
		if (f !== void 0) {
			var B = p !== void 0 ? p : g._("Ng\u01b0\u1eddi tham gia"),
				C = {
					size: 28,
					isActiveNow: !1
				};
			d !== void 0 && (C.src = b("bs_caml_option").valFromOption(d));
			B = i.jsx(b("CometLink.react"), {
				href: f,
				label: B,
				id: A,
				children: i.jsx(b("MWChatProfile.bs").make, C)
			})
		} else {
			C = {
				size: 28,
				isActiveNow: !1
			};
			d !== void 0 && (C.src = b("bs_caml_option").valFromOption(d));
			B = i.jsx(b("MWChatProfile.bs").make, C)
		}
		d = p !== void 0 ? b("bs_caml_option").some(p) : void 0;
		C = d !== void 0 ? i.jsx(b("CometTooltip.react"), {
			tooltip: b("bs_caml_option").valFromOption(d),
			align: "middle",
			position: "start",
			children: B
		}) : B;
		d = y.contents;
		B = b("useCometUniqueID")();
		var D = z.contents;
		f = f !== void 0 ? A : void 0;
		A = d[0];
		d = d[1];
		D = e !== void 0 && D ? B : void 0;
		p = {
			authorName: p,
			profileLinkID: f,
			timestamp: A,
			removedTimestamp: d,
			titleID: D
		};
		f = a.TAG ? b("MWChatIntersperse.bs").intersperse(q, function(a) {
			return i.jsx("div", {
				className: (h || (h = b("stylex")))(j.sep)
			}, "sep_" + String(a))
		}) : q;
		A = {
			children: i.jsxs(b("MWChatIncomingGroupInfoContext.bs").Provider.make, b("MWChatIncomingGroupInfoContext.bs").Provider.makeProps(p, [b("MWTheme.bs").isGradient(a) ? i.jsx("div", {
				className: (h || (h = b("stylex")))(j.verticalSep)
			}) : null, i.jsx("div", {
				children: C,
				className: (h || (h = b("stylex")))(j.profile, b("MWTheme.bs").isGradient(a) ? j.mask : j.solid, x.contents ? j.profileSpacer : !1)
			}), b("MWTheme.bs").isGradient(a) ? i.jsx("div", {
				className: (h || (h = b("stylex")))(j.verticalSep)
			}) : null, i.jsxs("div", {
				children: [e !== void 0 ? i.jsx("div", {
					children: i.jsx("div", {
						children: i.jsx("div", {
							children: b("bs_caml_option").valFromOption(e),
							className: (h || (h = b("stylex")))(j.labelLabel)
						}),
						className: (h || (h = b("stylex")))(j.labelRoot)
					}),
					"aria-hidden": !z.contents,
					className: (h || (h = b("stylex")))(j.label, b("MWTheme.bs").isGradient(a) ? j.mask : !1),
					id: B
				}) : null, f],
				className: h(j.main)
			})], void 0)),
			className: h(j.root, b("MWTheme.bs").isGradient(a) ? j.rootMask : !1)
		};
		return i.jsxs(i.Fragment, {
			children: [b("MWTheme.bs").isGradient(a) ? i.jsx("div", {
				className: (h || (h = b("stylex")))(j.topSep)
			}) : null, (A["data-testid"] = "incoming_group", i.jsx("div", A)), b("bs_belt_Option").getWithDefault(w.contents, null), b("MWTheme.bs").isGradient(a) ? i.jsx("div", {
				className: (h || (h = b("stylex")))(j.bottomSep)
			}) : null]
		})
	}
	e = a;
	f.styles = j;
	f.getSeenHeadRow = k;
	f.ReplyTo = c;
	f.getReaction = m;
	f.getTimestamps = n;
	f.NormalRow = d;
	f.make = e
}), null);