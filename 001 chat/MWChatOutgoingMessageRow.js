__d("MWChatOutgoingMessageRow.bs", ["bs_curry", "React", "MWMessage.bs", "MWUIBlockStatus.bs",
 "recoverableViolation", "MWChatOutgoingErrorRow.bs", "MWChatOutgoingMessageFileRow.bs", 
 "MWChatOutgoingMessageTextRow.bs", "MWChatOutgoingMessageAudioRow.bs", 
 "MWChatOutgoingMessageEmojiRow.bs", "MWChatOutgoingMessageFilesRow.bs", 
 "MWChatOutgoingMessagePhotoRow.bs", "MWChatOutgoingMessageVideoRow.bs", 
 "MWChatOutgoingMessagePhotosRow.bs", "MWChatOutgoingMessageStickerRow.bs", 
 "CometTransientDialogProvider.react", "MWChatOutgoingMessageLightspeedXMARow.bs", 
 "MWChatOutgoingRemovedMessageTombstone.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.content,
			d = a.first,
			e = a.last,
			f = a.hasRepliedToMessage,
			h = a.pos,
			i = a.setCovidSheet,
			j = a.dispatch,
			k = a.hovered;
		a = a.buildSharedMediaViewerURL;
		f = f !== void 0 ? f : !1;
		var l = b("bs_curry")._1(b("MWUIBlockStatus.bs").useIsThreadBlocked, void 0);
		l = l !== void 0 && !l ? !1 : !0;
		var m;
		switch (c.TAG | 0) {
			case 0:
				var n = c._2,
					o = c._1,
					p = c._0;
				if (n.TAG) {
					var q = n._1,
						r = n._0;
					switch (r.TAG | 0) {
						case 0:
							m = g.jsx(b("MWChatOutgoingMessageStickerRow.bs").make, {
								content: r._0,
								visibleMessageData: o,
								commonMessageData: p,
								messageBody: q,
								showActions: k,
								isBlocked: l,
								hasRepliedToMessage: f,
								setCovidSheet: i,
								dispatch: j,
								first: d
							});
							break;
						case 1:
							m = g.jsx(b("MWChatOutgoingMessagePhotoRow.bs").make, {
								visibleMessageData: o,
								commonMessageData: p,
								content: r._0,
								messageBody: q,
								first: d,
								last: e,
								pos: h,
								showActions: k,
								isBlocked: l,
								hasRepliedToMessage: f,
								setCovidSheet: i,
								dispatch: j,
								buildSharedMediaViewerURL: a
							});
							break;
						case 2:
							m = g.jsx(b("MWChatOutgoingMessagePhotosRow.bs").make, {
								content: r._0,
								visibleMessageData: o,
								commonMessageData: p,
								messageBody: q,
								first: d,
								last: e,
								pos: h,
								showActions: k,
								isBlocked: l,
								hasRepliedToMessage: f,
								setCovidSheet: i,
								dispatch: j,
								buildSharedMediaViewerURL: a
							});
							break;
						case 3:
							b("recoverableViolation")("Outgoing ephemeral messages aren't supported yet", "messenger_web_product");
							m = null;
							break;
						case 4:
							m = g.jsx(b("MWChatOutgoingMessageFileRow.bs").make, {
								content: r._0,
								visibleMessageData: o,
								commonMessageData: p,
								messageBody: q,
								pos: h,
								first: d,
								showActions: k,
								isBlocked: l,
								setCovidSheet: i,
								dispatch: j,
								hasRepliedToMessage: f
							});
							break;
						case 5:
							m = g.jsx(b("MWChatOutgoingMessageFilesRow.bs").make, {
								content: r._0,
								visibleMessageData: o,
								commonMessageData: p,
								messageBody: q,
								pos: h,
								first: d,
								showActions: k,
								isBlocked: l,
								setCovidSheet: i,
								dispatch: j,
								hasRepliedToMessage: f
							});
							break;
						case 6:
							m = g.jsx(b("MWChatOutgoingMessageAudioRow.bs").make, {
								content: r._0,
								visibleMessageData: o,
								commonMessageData: p,
								messageBody: q,
								first: d,
								last: e,
								pos: h,
								showActions: k,
								isBlocked: l,
								hasRepliedToMessage: f,
								setCovidSheet: i,
								dispatch: j
							});
							break;
						case 7:
							m = g.jsx(b("MWChatOutgoingMessageVideoRow.bs").make, {
								content: r._0,
								visibleMessageData: o,
								commonMessageData: p,
								messageBody: q,
								showActions: k,
								isBlocked: l,
								hasRepliedToMessage: f,
								pos: h,
								first: d,
								setCovidSheet: i,
								dispatch: j,
								buildSharedMediaViewerURL: a
							});
							break;
						case 8:
							m = g.jsx(b("MWChatOutgoingMessageLightspeedXMARow.bs").make, {
								visibleMessageData: o,
								commonMessageData: p,
								messageBody: q,
								xma: r._0,
								first: d,
								last: e,
								pos: h,
								hasRepliedToMessage: f,
								showActions: k,
								isBlocked: l,
								setCovidSheet: i,
								dispatch: j
							});
							break;
						case 9:
							m = g.jsx(b("MWChatOutgoingRemovedMessageTombstone.bs").make, {
								removedMessageData: r._0,
								commonMessageData: p,
								first: d,
								dispatch: j,
								showActions: k
							});
							break
					}
				} else {
					a = n._0;
					m = a.isEmojiOnly ? g.jsx(b("MWChatOutgoingMessageEmojiRow.bs").make, {
						visibleMessageData: o,
						commonMessageData: p,
						content: a,
						showActions: k,
						isBlocked: l,
						setCovidSheet: i,
						hasRepliedToMessage: f,
						dispatch: j,
						first: d
					}) : g.jsx(b("MWChatOutgoingMessageTextRow.bs").make, {
						visibleMessageData: o,
						commonMessageData: p,
						content: a,
						first: d,
						last: e,
						hasRepliedToMessage: f,
						showActions: k,
						isBlocked: l,
						setCovidSheet: i,
						dispatch: j,
						pos: h
					})
				}
				break;
			case 1:
				m = g.jsx(b("MWChatOutgoingRemovedMessageTombstone.bs").make, {
					removedMessageData: c._1,
					commonMessageData: c._0,
					first: d,
					dispatch: j,
					showActions: k
				});
				break;
			case 2:
				q = c._0;
				m = g.jsx(b("MWChatOutgoingErrorRow.bs").make, {
					status: q.status,
					timestamp: q.timestamp
				});
				break
		}
		r = c._0.messageID;
		return g.jsx(b("MWMessage.bs").make, {
			id: r,
			children: g.jsx(b("CometTransientDialogProvider.react"), {
				children: m
			})
		}, b("MWMessage.bs").key(r))
	}
	c = a;
	f.make = c
}), null);