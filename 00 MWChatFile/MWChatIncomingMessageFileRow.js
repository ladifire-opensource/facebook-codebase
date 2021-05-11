__d("MWChatIncomingMessageFileRow.bs", ["React", "MWChatFile.bs", "stylex", "bs_caml_option", "MWChatActions.bs", "MWChatBubbleSolid.bs", "MWChatTextBubbleSolid.bs", "MWChatIncomingMessageDefaultRenderer.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			spacer: {
				height: "ay7djpcl",
				width: "k4urcfbm",
				backgroundColor: "g5ia77u1"
			}
		};

	function a(a) {
		var c = a.content,
			d = a.visibleMessageData,
			e = a.commonMessageData,
			f = a.messageBody,
			j = a.first,
			k = a.showActions,
			l = a.isBlocked,
			m = a.hasRepliedToMessage,
			n = a.setCovidSheet;
		a = a.dispatch;
		k = k !== void 0 ? k : !1;
		l = l !== void 0 ? l : !1;
		m = m !== void 0 ? m : !1;
		var o = {
			url: c.url
		};
		c.fileName !== void 0 && (o.fileName = b("bs_caml_option").valFromOption(c.fileName));
		c = h.jsx(b("MWChatFile.bs").make, o);
		o = {
			outgoing: !1,
			showActions: k,
			messageID: e.messageID,
			isPinned: e.isPinned,
			isSaved: e.isSaved,
			setCovidSheet: n,
			dispatch: a,
			selectedReaction: d.selectedReaction
		};
		k = l ? {
			TAG: 2,
			showForward: !0
		} : {
			TAG: 1,
			showReactions: !0,
			showReply: !0
		};
		k !== void 0 && (o.enabledActions = b("bs_caml_option").valFromOption(k));
		return h.jsx(b("MWChatIncomingMessageDefaultRenderer.bs").make, {
			messageActions: h.jsx(b("MWChatActions.bs").make, o),
			isSaved: e.isSaved,
			isPinned: e.isPinned,
			renderAttachment: f === void 0,
			children: f !== void 0 ? h.jsxs(h.Fragment, {
				children: [h.jsx(b("MWChatTextBubbleSolid.bs").make, {
					text: f.text,
					first: j,
					last: !1,
					outgoing: !1,
					ranges: f.ranges,
					isForwarded: f.isForwarded,
					dispatch: a
				}), h.jsx("div", {
					className: (g || (g = b("stylex")))(i.spacer)
				}), h.jsx(b("MWChatBubbleSolid.bs").make, {
					content: c,
					first: !1,
					last: !0,
					outgoing: !1
				})]
			}) : h.jsx(b("MWChatBubbleSolid.bs").make, {
				content: c,
				first: !0,
				last: !0,
				outgoing: !1
			}),
			first: j,
			status: e.status,
			reactions: d.reactions,
			hasRepliedToMessage: m
		})
	}
	c = a;
	f.styles = i;
	f.make = c
}), null);