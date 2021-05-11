__d("MWChatIncomingMessageStickerRow.bs", ["React", "bs_caml_option", "MWChatActions.bs", "MWChatSticker.bs", "recoverableViolation", "MWChatIncomingMessageDefaultRenderer.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.content,
			d = a.visibleMessageData,
			e = a.commonMessageData,
			f = a.messageBody,
			h = a.showActions,
			i = a.hasRepliedToMessage,
			j = a.first,
			k = a.isBlocked,
			l = a.setCovidSheet;
		a = a.dispatch;
		h = h !== void 0 ? h : !1;
		i = i !== void 0 ? i : !1;
		k = k !== void 0 ? k : !1;
		var m = f !== void 0;
		g.useEffect(function() {
			m && b("recoverableViolation")("Unrendered message body", "messenger_comet")
		}, [m]);
		f = {
			outgoing: !1,
			showActions: h,
			messageID: e.messageID,
			isPinned: e.isPinned,
			isSaved: e.isSaved,
			setCovidSheet: l,
			dispatch: a,
			selectedReaction: d.selectedReaction
		};
		h = k ? {
			TAG: 2,
			showForward: !0
		} : void 0;
		h !== void 0 && (f.enabledActions = b("bs_caml_option").valFromOption(h));
		return g.jsx(b("MWChatIncomingMessageDefaultRenderer.bs").make, {
			messageActions: g.jsx(b("MWChatActions.bs").make, f),
			isSaved: e.isSaved,
			isPinned: e.isPinned,
			renderAttachment: !0,
			children: g.jsx(b("MWChatSticker.bs").make, {
				sticker: c
			}),
			first: j,
			status: e.status,
			reactions: d.reactions,
			hasRepliedToMessage: i,
			testid: "messenger_incoming_sticker_row"
		})
	}
	c = a;
	f.make = c
}), null);