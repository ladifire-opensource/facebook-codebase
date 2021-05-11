__d("MWChatOutgoingGroup.bs", ["bs_curry", "React", "MWTheme.bs", "stylex", "bs_belt_Option", 
	"bs_caml_option", "useCometUniqueID", "MWChatIntersperse.bs", "MWChatSeenHeadsRow.bs", 
	"MWMessageElementRefList.bs", "MWChatOutgoingMessageRow.bs", "MWChatMessageTableFocusTable.bs", 
	"MWChatOutgoingGroupInfoContext.bs", "MWChatOutgoingMessageReplyToText.bs", 
	"MWChatOutgoingMessageReplyToPhoto.bs", "MWChatOutgoingMessageReplyToStory.bs", 
	"MWChatOutgoingMessageReplyToSticker.bs", "MWChatOutgoingMessageReplyToAttachment.bs", 
	"MWChatOutgoingMessageReplyToPhotoGroup.bs", "MWChatOutgoingMessageReplyToRemovedMessage.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			root: {
				backgroundColor: "g5ia77u1",
				paddingTop: "jwdofwj8",
				paddingBottom: "pby63qed"
			},
			rootMask: {
				paddingTop: "jb3vyjys",
				paddingBottom: "qt6c0cv9"
			},
			labelRoot: {
				display: "j83agx80"
			},
			mask: {
				backgroundColor: "nred35xi"
			},
			labelSpacer: {
				flexBasis: "rj1gh0hx",
				flexGrow: "buofh1pr"
			},
			labelLabel: {
				flexShrink: "pfnyh3mw",
				fontSize: "r9r71o1u",
				color: "m9osqain",
				lineHeight: "fsrhnwul",
				maxWidth: "dkr8dfph"
			},
			labelMargin: {
				flexShrink: "pfnyh3mw",
				width: "la0tivve"
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
			}
		};

	function j(a) {
		a = a._0.status;
		if (typeof a === "number") return null;
		a = a._0;
		var c = a.length;
		if (c !== 1 && c !== 0) return h.jsx(b("MWChatSeenHeadsRow.bs").make, {
			messageSeenBy: a
		});
		else return null
	}

	function k(a) {
		var c = a.original,
			d = a.response,
			e = a.replyToOther,
			f = a.pos,
			g = a.dispatch,
			i = a.buildSharedMediaViewerURL;
		a = a.messageElementRef;
		var j = h.useState(function() {
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
		if (typeof c === "number") n = c === 0 ? h.jsx(b("MWChatOutgoingMessageReplyToRemovedMessage.bs").make, {
			pos: f,
			response: d,
			dispatch: g,
			replyToOther: e,
			hovered: j,
			buildSharedMediaViewerURL: i
		}) : h.jsx(b("MWChatOutgoingMessageRow.bs").make, {
			content: d,
			first: !0,
			last: !0,
			pos: f,
			dispatch: g,
			hovered: j,
			buildSharedMediaViewerURL: i
		});
		else switch (c.TAG | 0) {
			case 0:
				n = h.jsx(b("MWChatOutgoingMessageReplyToText.bs").make, {
					pos: f,
					originalMessage: c._0,
					response: d,
					dispatch: g,
					replyToOther: e,
					hovered: j,
					buildSharedMediaViewerURL: i
				});
				break;
			case 1:
				n = h.jsx(b("MWChatOutgoingMessageReplyToSticker.bs").make, {
					pos: f,
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: i
				});
				break;
			case 2:
				n = h.jsx(b("MWChatOutgoingMessageReplyToPhoto.bs").make, {
					pos: f,
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: i
				});
				break;
			case 3:
				n = h.jsx(b("MWChatOutgoingMessageReplyToPhotoGroup.bs").make, {
					pos: f,
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: i
				});
				break;
			case 4:
				n = h.jsx(b("MWChatOutgoingMessageReplyToAttachment.bs").make, {
					pos: f,
					response: d,
					dispatch: g,
					replyToOther: e,
					hovered: j,
					buildSharedMediaViewerURL: i
				});
				break;
			case 5:
				n = h.jsx(b("MWChatOutgoingMessageReplyToStory.bs").make, {
					pos: f,
					response: d,
					content: c._0,
					dispatch: g,
					hovered: j,
					buildSharedMediaViewerURL: i
				});
				break
		}
		e = {
			children: n,
			onMouseEnter: l,
			onMouseLeave: m
		};
		a !== void 0 && (e.ref = b("bs_caml_option").valFromOption(a));
		return h.jsx("div", e)
	}
	c = {
		make: k
	};

	function l(a) {
		var c = a.message,
			d = a.first,
			e = a.last,
			f = a.pos,
			g = a.setCovidSheet,
			i = a.dispatch,
			j = a.buildSharedMediaViewerURL;
		a = a.messageElementRef;
		var k = h.useState(function() {
				return !1
			}),
			l = k[1],
			m = function(a) {
				return b("bs_curry")._1(l, function(a) {
					return !0
				})
			},
			n = function(a) {
				return b("bs_curry")._1(l, function(a) {
					return !1
				})
			};
		c = {
			children: h.jsx(b("MWChatMessageTableFocusTable.bs").Table_.Row.make, {
				children: h.jsx(b("MWChatOutgoingMessageRow.bs").make, {
					content: c,
					first: d,
					last: e,
					pos: f,
					setCovidSheet: g,
					dispatch: i,
					hovered: k[0],
					buildSharedMediaViewerURL: j
				})
			}),
			role: "row",
			onMouseEnter: m,
			onMouseLeave: n
		};
		a !== void 0 && (c.ref = b("bs_caml_option").valFromOption(a));
		d = c;
		d["data-testid"] = "mwchat_outgoing_row";
		return h.jsx("div", d)
	}
	d = {
		make: l
	};

	function m(a) {
		switch (a.TAG | 0) {
			case 1:
				return [a._0.timestamp, a._1.removedTimestamp];
			case 0:
			case 2:
				return [a._0.timestamp, void 0]
		}
	}

	function a(a) {
		var c = a.pos,
			d = a.messages,
			e = a.title,
			f = a.setCovidSheet,
			n = a.dispatch,
			o = a.buildSharedMediaViewerURL,
			p = a.messageElementRefs;
		a = b("MWTheme.bs").useTheme(void 0);
		var q = d.length - 1 | 0,
			r = {
				contents: void 0
			},
			s = {
				contents: [0, void 0]
			},
			t = {
				contents: !1
			};
		d = d.map(function(a, d) {
			var e = d === 0,
				g = d === q;
			switch (a.TAG | 0) {
				case 0:
					var i = a._0,
						u = j(i);
					g && (r.contents = b("bs_caml_option").some(u), s.contents = m(i));
					return h.jsxs(h.Fragment, {
						children: [h.jsx(l, {
							message: i,
							first: e,
							last: g,
							pos: c,
							setCovidSheet: f,
							dispatch: n,
							buildSharedMediaViewerURL: o,
							messageElementRef: b("bs_belt_Option").map(b("MWMessageElementRefList.bs").messageIdFromContent(i), function(a) {
								return b("bs_curry")._1(p.set, a)
							})
						}), g ? null : u]
					}, String(d));
				case 2:
					e = a._1;
					i = j(e);
					g && (r.contents = b("bs_caml_option").some(i), s.contents = m(e));
					t.contents = !0;
					var v;
					switch (e.TAG | 0) {
						case 0:
							u = e._0.messageID;
							if (typeof u === "number") v = void 0;
							else if (u.TAG) {
								var w = u._0.messageId;
								v = b("bs_caml_option").some(b("bs_curry")._1(p.set, w))
							} else {
								w = u._0.offlineThreadingId;
								v = b("bs_caml_option").some(b("bs_curry")._1(p.set, w))
							}
							break;
						case 1:
							u = e._0.messageID;
							if (typeof u === "number") v = void 0;
							else if (u.TAG) {
								w = u._0.messageId;
								v = b("bs_caml_option").some(b("bs_curry")._1(p.set, w))
							} else {
								w = u._0.offlineThreadingId;
								v = b("bs_caml_option").some(b("bs_curry")._1(p.set, w))
							}
							break;
						case 2:
							u = e._0.messageID;
							if (typeof u === "number") v = void 0;
							else if (u.TAG) {
								w = u._0.messageId;
								v = b("bs_caml_option").some(b("bs_curry")._1(p.set, w))
							} else {
								w = u._0.offlineThreadingId;
								v = b("bs_caml_option").some(b("bs_curry")._1(p.set, w))
							}
							break
					}
					return h.jsxs(h.Fragment, {
						children: [h.jsx(k, {
							original: a._0,
							response: e,
							replyToOther: !1,
							pos: c,
							dispatch: n,
							buildSharedMediaViewerURL: o,
							messageElementRef: v
						}), g ? null : i]
					}, String(d));
				case 1:
				case 3:
					break
			}
			u = a._1;
			w = j(u);
			g && (r.contents = b("bs_caml_option").some(w), s.contents = m(u));
			t.contents = !0;
			return h.jsxs(h.Fragment, {
				children: [h.jsx(k, {
					original: a._0,
					response: u,
					replyToOther: !0,
					pos: c,
					dispatch: n,
					buildSharedMediaViewerURL: o,
					messageElementRef: b("bs_belt_Option").map(b("MWMessageElementRefList.bs").messageIdFromContent(u), function(a) {
						return b("bs_curry")._1(p.set, a)
					})
				}), g ? null : w]
			}, String(d))
		});
		var u = s.contents,
			v = b("useCometUniqueID")(),
			w = t.contents;
		u = u[0];
		w = e !== void 0 && w ? v : void 0;
		u = {
			timestamp: u,
			titleID: w
		};
		w = a.TAG ? b("MWChatIntersperse.bs").intersperse(d, function(a) {
			return h.jsx("div", {
				className: (g || (g = b("stylex")))(i.sep)
			}, "sep_" + String(a))
		}) : d;
		d = {
			children: h.jsxs(b("MWChatOutgoingGroupInfoContext.bs").Provider.make, b("MWChatOutgoingGroupInfoContext.bs").Provider.makeProps(u, [e !== void 0 ? h.jsxs("div", {
				children: [h.jsx("div", {
					className: (g || (g = b("stylex")))(i.labelSpacer)
				}), h.jsx("div", {
					children: b("bs_caml_option").valFromOption(e),
					className: (g || (g = b("stylex")))(i.labelLabel)
				}), h.jsx("div", {
					className: (g || (g = b("stylex")))(i.labelMargin)
				})],
				"aria-hidden": !t.contents,
				className: (g || (g = b("stylex")))(i.labelRoot, b("MWTheme.bs").isGradient(a) ? i.mask : !1),
				id: v
			}) : null, h.jsx(h.Fragment, {
				children: w
			})], void 0)),
			className: (g || (g = b("stylex")))(i.root, b("MWTheme.bs").isGradient(a) ? i.rootMask : !1)
		};
		return h.jsxs(h.Fragment, {
			children: [b("MWTheme.bs").isGradient(a) ? h.jsx("div", {
				className: (g || (g = b("stylex")))(i.topSep)
			}) : null, (d["data-testid"] = "outgoing_group", h.jsx("div", d)), b("bs_belt_Option").getWithDefault(r.contents, null), b("MWTheme.bs").isGradient(a) ? h.jsx("div", {
				className: (g || (g = b("stylex")))(i.bottomSep)
			}) : null]
		})
	}
	e = a;
	f.styles = i;
	f.getSeenHeadRow = j;
	f.ReplyTo = c;
	f.NormalRow = d;
	f.getTimestamps = m;
	f.make = e
}), null);