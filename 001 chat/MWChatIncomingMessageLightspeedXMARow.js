__d("MWChatIncomingMessageLightspeedXMARow.bs", ["MWXMA.bs", "React", "stylex", "bs_caml_option", "MWChatActions.bs", "MWXMAComponent.bs", "CurrentEnvironment", "MessengerSurfaceType.bs", "MWChatTextBubbleSolid.bs", "WorkGalahadMWChatTabContext.bs", "MWChatIncomingMessageDefaultRenderer.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			content: {
				maxWidth: "gwyu0f6a"
			},
			contentLarge: {
				maxWidth: "nqmqzb3c"
			},
			hscrollContent: {
				maxWidth: "r2nqfv2r"
			},
			workChatContent: {
				maxWidth: "rirtxc74"
			}
		};

	function a(a) {
		var c = a.visibleMessageData,
			d = a.commonMessageData,
			e = a.xma,
			f = a.messageBody,
			j = a.first,
			k = a.last,
			l = a.hasRepliedToMessage,
			m = a.showActions,
			n = a.isBlocked,
			o = a.setCovidSheet;
		a = a.dispatch;
		l = l !== void 0 ? l : !1;
		n = n !== void 0 ? n : !1;
		var p = b("CurrentEnvironment").messengerdotcom ? i.contentLarge : i.content,
			q = h.useContext(b("WorkGalahadMWChatTabContext.bs").context);
		q = q.surface === b("MessengerSurfaceType.bs").workChat;
		var r;
		switch (e.TAG | 0) {
			case 0:
				r = !0;
				break;
			case 1:
			case 2:
				r = !1;
				break
		}
		m = {
			outgoing: !1,
			showActions: m,
			messageID: d.messageID,
			isPinned: d.isPinned,
			isSaved: d.isSaved,
			setCovidSheet: o,
			dispatch: a,
			selectedReaction: c.selectedReaction
		};
		o = n ? b("MWXMA.bs").canForward(e) ? {
			TAG: 2,
			showForward: !0
		} : {
			TAG: 2,
			showForward: !1
		} : b("MWXMA.bs").canForward(e) ? {
			TAG: 1,
			showReactions: !0,
			showReply: !0
		} : {
			TAG: 0,
			showReactions: !0,
			showReply: !0,
			showForward: !1
		};
		o !== void 0 && (m.enabledActions = b("bs_caml_option").valFromOption(o));
		return h.jsx(b("MWChatIncomingMessageDefaultRenderer.bs").make, {
			messageActions: h.jsx(b("MWChatActions.bs").make, m),
			isSaved: d.isSaved,
			isPinned: d.isPinned,
			renderAttachment: f === void 0,
			children: h.jsx("div", {
				children: f !== void 0 ? h.jsxs(h.Fragment, {
					children: [h.jsx(b("MWChatTextBubbleSolid.bs").make, {
						text: f.text,
						first: j,
						last: !1,
						outgoing: !1,
						ranges: f.ranges,
						isForwarded: f.isForwarded,
						dispatch: a,
						mergeNext: !r
					}), h.jsx(b("MWXMAComponent.bs").make, {
						xma: e,
						first: j,
						last: k,
						outgoing: !0,
						dispatch: a,
						hasText: !0
					})]
				}) : h.jsx(b("MWXMAComponent.bs").make, {
					xma: e,
					first: j,
					last: k,
					outgoing: !1,
					dispatch: a,
					hasText: !1
				}),
				className: (g || (g = b("stylex")))(q ? i.workChatContent : r ? i.hscrollContent : p)
			}),
			first: j,
			status: d.status,
			reactions: c.reactions,
			hasRepliedToMessage: l,
			isHscroll: r
		})
	}
	c = a;
	f.styles = i;
	f.make = c
}), null);