__d("MWChatMessageList.bs", ["React", "MWTheme.bs", "bs_caml_array", "stylex", 
	"bs_caml_option", "MWChatMessage.bs", "MWChatAdminItem.bs", 
	"MWChatDateBreak.bs", "MWChatIntersperse.bs", "MWChatIncomingGroup.bs", 
	"MWChatOutgoingGroup.bs", "MWChatUnreadIndicator.bs", 
	"BaseHeadingContextWrapper.re", "MWChatMessageListTabbableRow.bs"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			sep: {
				height: "mw227v9j",
				backgroundColor: "nred35xi"
			}
		};

	function j(a, c, d) {
		var e;
		if (typeof a === "number") e = void 0;
		else switch (a.TAG | 0) {
			case 0:
				e = "date_break_" + a._0.toString();
				break;
			case 1:
				e = void 0;
				break;
			case 2:
				e = "unread_indicator";
				break;
			case 3:
				var f = a._0;
				e = f.length !== 0 ? b("MWChatMessage.bs").getMessageID(b("bs_caml_array").get(f, 0)) : void 0;
				break;
			case 4:
				f = a._0;
				e = c < (d - 3 | 0) && f.length !== 0 ? b("MWChatMessage.bs").getMessageID(b("bs_caml_array").get(f, 0)) : void 0;
				break
		}
		if (e !== void 0) return e;
		else return String(c)
	}

	function a(a) {
		var c = a.pos,
			d = a.items,
			e = a.managePageMessagesLink,
			f = a.dispatch,
			k = a.setCovidSheet,
			l = a.buildSharedMediaViewerURL,
			m = a.messageElementRefs;
		a = b("MWTheme.bs").useTheme(void 0);
		var n = d.map(function(a, g) {
			var i;
			if (typeof a === "number") i = null;
			else switch (a.TAG | 0) {
				case 0:
					i = h.jsx(b("MWChatMessageListTabbableRow.bs").make, {
						children: h.jsx(b("BaseHeadingContextWrapper.re").make, {
							children: h.jsx(b("MWChatDateBreak.bs").make, {
								timestamp: a._0
							})
						})
					});
					break;
				case 1:
					i = h.jsx(b("MWChatMessageListTabbableRow.bs").make, {
						children: h.jsx(b("MWChatAdminItem.bs").make, {
							content: a._0,
							adminMessageCta: a._1,
							managePageMessagesLink: e,
							dispatch: f
						})
					});
					break;
				case 2:
					i = h.jsx(b("MWChatMessageListTabbableRow.bs").make, {
						children: h.jsx(b("MWChatUnreadIndicator.bs").make, {
							dispatch: f,
							unreadCount: a._0
						})
					});
					break;
				case 3:
					i = h.jsx(b("BaseHeadingContextWrapper.re").make, {
						children: h.jsx(b("MWChatIncomingGroup.bs").make, {
							pos: c,
							image: a._2,
							title: a._1,
							profileHref: a._3,
							authorName: a._4,
							messages: a._0,
							setCovidSheet: k,
							dispatch: f,
							buildSharedMediaViewerURL: l,
							messageElementRefs: m
						})
					});
					break;
				case 4:
					var n = {
						pos: c,
						messages: a._0,
						setCovidSheet: k,
						dispatch: f,
						buildSharedMediaViewerURL: l,
						messageElementRefs: m
					};
					a._1 !== void 0 && (n.title = b("bs_caml_option").valFromOption(a._1));
					i = h.jsx(b("BaseHeadingContextWrapper.re").make, {
						children: h.jsx(b("MWChatOutgoingGroup.bs").make, n)
					});
					break
			}
			return h.jsx(h.Fragment, {
				children: i
			}, j(a, g, d.length))
		});
		if (a.TAG) return b("MWChatIntersperse.bs").intersperse(n, function(a) {
			return h.jsx("div", {
				className: (g || (g = b("stylex")))(i.sep)
			}, "sep_" + String(a))
		});
		else return n
	}
	c = a;
	f.styles = i;
	f.getItemKey = j;
	f.make = c
}), null);