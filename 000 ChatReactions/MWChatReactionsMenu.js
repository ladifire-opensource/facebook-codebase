__d("MWChatReactionsMenu.bs", ["fbt", "bs_curry", "React", "qex", "CometKeys", "CometEmoji.bs", "stylex", "requireCond", "LongpressHook.bs", "focusScopeQueries", "MWChatReactionEmoji.bs", "CometPressable.react", "MessengerReactionsUtil.bs", "KeyCommandHandler.react", "MWChatSolidReactionSetting", "MWChatMessageCellFocusTable.bs", "CometComponentWithKeyCommands.react", "cr:1843690"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			menu: {
				borderTop: "qu0x051f",
				borderEnd: "esr5mh6w",
				borderBottom: "e9989ue4",
				borderStart: "r7d6kgcz",
				backgroundColor: "hybvsw6c",
				borderTopStartRadius: "orhb3f3m",
				borderTopEndRadius: "czkt41v7",
				borderBottomEndRadius: "fmqxjp7s",
				borderBottomStartRadius: "emzo65vh",
				boxShadow: "nwpbqux9",
				display: "j83agx80",
				paddingTop: "fdg1wqfs",
				paddingEnd: "jxrgncrl",
				paddingBottom: "ae35evdt",
				paddingStart: "qnrpqo6b"
			},
			item: {
				display: "q9uorilb",
				paddingTop: "jwdofwj8",
				paddingEnd: "n8tt0mok",
				paddingBottom: "r8blr3vg",
				paddingStart: "hyh9befq"
			},
			selected: {
				backgroundColor: "g6srhlxm",
				borderTopStartRadius: "taou7zlu",
				borderTopEndRadius: "lchaixk1",
				borderBottomEndRadius: "ij3lxc49",
				borderBottomStartRadius: "nxzu77ck"
			}
		};

	function k(a) {
		var c = a.selected,
			d = a.emoji,
			e = a.onSelect;
		a = a.showSolidReactionSheet;
		a = b("LongpressHook.bs").useLongPress(function(a) {
			return b("bs_curry")._1(e, d)
		}, a, 750);
		return i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Cell.make, {
			children: i.jsx(b("CometPressable.react"), {
				role: "menuitem",
				onHoverOut: a[2],
				onPressIn: a[0],
				onPressOut: a[1],
				overlayDisabled: !0,
				xstyle: function(a) {
					return [j.item, c ? j.selected : !1]
				},
				children: i.jsx(b("CometEmoji.bs").make, {
					emoji: [d],
					size: 32,
					testid: "reactions_emoji_" + d
				})
			})
		})
	}
	c = {
		make: k
	};

	function l(a) {
		var c = a.selected,
			d = a.emoji,
			e = a.onSelect;
		return i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Cell.make, {
			children: i.jsx(b("CometPressable.react"), {
				role: "menuitem",
				onPress: function(a) {
					return b("bs_curry")._1(e, d)
				},
				overlayDisabled: !0,
				xstyle: function(a) {
					return [j.item, c ? j.selected : !1]
				},
				children: b("cr:1843690") == null ? i.jsx(b("MWChatReactionEmoji.bs").make, {
					emoji: [d],
					size: 32,
					testid: "reactions_emoji_" + d
				}) : i.jsx(b("cr:1843690").make, {
					emoji: [d],
					hasTooltip: !0,
					size: 32,
					testid: "reactions_emoji_" + d
				})
			})
		})
	}
	d = {
		make: l
	};
	e = {
		key: b("CometKeys").UP
	};
	var m = {
			key: b("CometKeys").DOWN
		},
		n = [{
			command: e,
			description: g._("\u0110\u00f3ng menu ph\u1ee5 c\u1ea3m x\u00fac"),
			handler: function(a) {}
		}, {
			command: m,
			description: g._("\u0110\u00f3ng menu ph\u1ee5 c\u1ea3m x\u00fac"),
			handler: function(a) {}
		}];

	function a(a) {
		var c = a.onSelect,
			d = a.selectedReaction,
			e = a.showSolidReactionSheet,
			f = a.isSolidQueryRef,
			m = a.onClose,
			o = a.closeActionsMenu;
		a = function(a) {
			var c = a.key;
			if (c === "Escape") return b("bs_curry")._1(o, void 0);
			else if (c === "ArrowUp" || c === "ArrowDown") {
				b("bs_curry")._1(m, void 0);
				a.stopPropagation();
				return
			} else if (c === "ArrowLeft" || c === "ArrowRight" || c === "PageUp" || c === "PageDown" || c === "Home" || c === "End") {
				a.stopPropagation();
				return
			} else return
		};
		f = b("MWChatSolidReactionSetting").useIsSolid(f);
		f = f ? b("MessengerReactionsUtil.bs").solidReactions : b("MessengerReactionsUtil.bs").defaultReactions;
		var p = g._("C\u1ea3m x\u00fac v\u1ec1 tin nh\u1eafn");
		return i.jsx(b("CometComponentWithKeyCommands.react"), {
			commandConfigs: n,
			xstyle: !1,
			children: i.jsx(b("KeyCommandHandler.react"), {
				children: i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Table.make, {
					tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
					wrapX: !0,
					children: i.jsx(b("MWChatMessageCellFocusTable.bs").Table_.Row.make, {
						children: i.createElement("div", {
							role: "menu",
							"aria-orientation": "horizontal",
							"aria-label": p,
							className: (h || (h = b("stylex")))(j.menu)
						}, f.map(function(a, f) {
							f = f === b("MessengerReactionsUtil.bs").loveEmojiIndex && b("qex")._("1415783");
							var g = d !== void 0 ? d === a : !1;
							return e !== void 0 && f ? i.jsx(k, {
								selected: g,
								emoji: a,
								onSelect: function(d) {
									return b("bs_curry")._1(c, a)
								},
								showSolidReactionSheet: e
							}, a) : i.jsx(l, {
								selected: g,
								emoji: a,
								onSelect: function(d) {
									return b("bs_curry")._1(c, a)
								}
							}, a)
						}))
					})
				}),
				onKeyDown: a
			})
		})
	}
	var o = b("cr:1843690");
	a = a;
	f.styles = j;
	f.$ChatGeminiReactionImageWithTooltip$OR$null$requireCond = b("cr:1843690");
	f.chatGeminiReactionImageWithTooltip = o;
	f.EmojiButtonLongpress = c;
	f.EmojiButton = d;
	f.keyUp = e;
	f.keyDown = m;
	f.commandConfigs = n;
	f.make = a
}), null);