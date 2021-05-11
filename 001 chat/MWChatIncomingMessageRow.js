__d("MWChatIncomingMessageRow.bs", ["bs_curry", "React", "MWMessage.bs", "MWUIBlockStatus.bs", 
	"MWChatIncomingErrorRow.bs", "MWChatIncomingMessageFileRow.bs", 
	"MWChatIncomingMessageTextRow.bs", "MWChatIncomingMessageAudioRow.bs", 
	"MWChatIncomingMessageEmojiRow.bs", "MWChatIncomingMessageFilesRow.bs", 
	"MWChatIncomingMessagePhotoRow.bs", "MWChatIncomingMessageVideoRow.bs", 
	"MWChatIncomingMessagePhotosRow.bs", "MWChatIncomingMessageStickerRow.bs", 
	"CometTransientDialogProvider.react", "MWChatIncomingMessageLightspeedXMARow.bs", 
	"MWChatIncomingMessageEphemeralMediaRow.bs", "MWChatIncomingRemovedMessageTombstoneRow.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.content,
			d = a.first,
			e = a.last,
			f = a.hasRepliedToMessage,
			h = a.setCovidSheet,
			i = a.dispatch,
			j = a.hovered;
		a = a.buildSharedMediaViewerURL;
		f = f !== void 0 ? f : !1;
		var k = b("bs_curry")._1(b("MWUIBlockStatus.bs").useIsThreadBlocked, void 0);
		k = k !== void 0 && !k ? !1 : !0;
		var l;
		switch (c.TAG | 0) {
			case 0:
				var m = c._2,
					n = c._1,
					o = c._0;
				if (m.TAG) {
					var p = m._1,
						q = m._0;
					switch (q.TAG | 0) {
						case 0:
							l = g.jsx(b("MWChatIncomingMessageStickerRow.bs").make, {
								content: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								showActions: j,
								hasRepliedToMessage: f,
								first: d,
								isBlocked: k,
								setCovidSheet: h,
								dispatch: i
							});
							break;
						case 1:
							l = g.jsx(b("MWChatIncomingMessagePhotoRow.bs").make, {
								content: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								first: d,
								hasRepliedToMessage: f,
								showActions: j,
								isBlocked: k,
								setCovidSheet: h,
								dispatch: i,
								buildSharedMediaViewerURL: a
							});
							break;
						case 2:
							l = g.jsx(b("MWChatIncomingMessagePhotosRow.bs").make, {
								content: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								first: d,
								showActions: j,
								hasRepliedToMessage: f,
								setCovidSheet: h,
								dispatch: i,
								buildSharedMediaViewerURL: a
							});
							break;
						case 3:
							l = g.jsx(b("MWChatIncomingMessageEphemeralMediaRow.bs").make, {
								attachment: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								first: d,
								last: e,
								hasRepliedToMessage: f,
								showActions: j,
								isBlocked: k,
								setCovidSheet: h,
								dispatch: i
							});
							break;
						case 4:
							l = g.jsx(b("MWChatIncomingMessageFileRow.bs").make, {
								content: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								first: d,
								showActions: j,
								isBlocked: k,
								hasRepliedToMessage: f,
								setCovidSheet: h,
								dispatch: i
							});
							break;
						case 5:
							l = g.jsx(b("MWChatIncomingMessageFilesRow.bs").make, {
								content: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								first: d,
								showActions: j,
								isBlocked: k,
								hasRepliedToMessage: f,
								setCovidSheet: h,
								dispatch: i
							});
							break;
						case 6:
							l = g.jsx(b("MWChatIncomingMessageAudioRow.bs").make, {
								content: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								first: d,
								showActions: j,
								isBlocked: k,
								hasRepliedToMessage: f,
								setCovidSheet: h,
								dispatch: i
							});
							break;
						case 7:
							l = g.jsx(b("MWChatIncomingMessageVideoRow.bs").make, {
								content: q._0,
								visibleMessageData: n,
								commonMessageData: o,
								messageBody: p,
								showActions: j,
								first: d,
								hasRepliedToMessage: f,
								isBlocked: k,
								setCovidSheet: h,
								dispatch: i,
								buildSharedMediaViewerURL: a
							});
							break;
						case 8:
							l = g.jsx(b("MWChatIncomingMessageLightspeedXMARow.bs").make, {
								visibleMessageData: n,
								commonMessageData: o,
								xma: q._0,
								messageBody: p,
								first: d,
								last: e,
								hasRepliedToMessage: f,
								showActions: j,
								isBlocked: k,
								setCovidSheet: h,
								dispatch: i
							});
							break;
						case 9:
							l = g.jsx(b("MWChatIncomingRemovedMessageTombstoneRow.bs").make, {
								removedMessageData: q._0,
								commonMessageData: o,
								first: d,
								dispatch: i,
								showActions: j
							});
							break
					}
				} else {
					a = m._0;
					l = a.isEmojiOnly ? g.jsx(b("MWChatIncomingMessageEmojiRow.bs").make, {
						visibleMessageData: n,
						commonMessageData: o,
						content: a,
						showActions: j,
						isBlocked: k,
						first: d,
						hasRepliedToMessage: f,
						setCovidSheet: h,
						dispatch: i
					}) : g.jsx(b("MWChatIncomingMessageTextRow.bs").make, {
						visibleMessageData: n,
						commonMessageData: o,
						content: a,
						showActions: j,
						first: d,
						last: e,
						isBlocked: k,
						hasRepliedToMessage: f,
						setCovidSheet: h,
						dispatch: i
					})
				}
				break;
			case 1:
				l = g.jsx(b("MWChatIncomingRemovedMessageTombstoneRow.bs").make, {
					removedMessageData: c._1,
					commonMessageData: c._0,
					first: d,
					dispatch: i,
					showActions: j
				});
				break;
			case 2:
				p = c._0;
				l = g.jsx(b("MWChatIncomingErrorRow.bs").make, {
					status: p.status,
					timestamp: p.timestamp,
					first: d
				});
				break
		}
		q = c._0.messageID;
		return g.jsx(b("MWMessage.bs").make, {
			id: q,
			children: g.jsx(b("CometTransientDialogProvider.react"), {
				children: l
			})
		}, b("MWMessage.bs").key(q))
	}
	c = a;
	f.make = c
}), null);