__d("MWChatReactionsAction.bs", ["fbt", "ODS", "bs_curry", "React", "CometKeys", 
	"CometRelay", "stylex", "bs_belt_Option", "bs_caml_option", "MWChatColors.bs", 
	"CometTooltip.react", "MWChatReactionsMenu.bs", "CometPressable.react", 
	"KeyCommandHandler.react", "BasePopoverTrigger.react", 
	"MWChatSolidReactionSettingQuery", "CometComponentWithKeyCommands.react"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React");
	c = {
		remove: "REMOVE_REACTION",
		add: "ADD_REACTION"
	};
	var j = b("MWChatColors.bs").MessageActions.styles,
		k = i.jsxs("svg", {
			children: [i.jsx("circle", {
				className: (h || (h = b("stylex")))(j.svgStroke),
				cx: "11",
				cy: "11",
				r: "7",
				strokeWidth: "1.5px"
			}), i.jsx("path", {
				className: h(j.svgStroke),
				d: "M8,13Q11,16,14,13",
				strokeWidth: "1.5px"
			}), i.jsx("circle", {
				className: h(j.svgFill),
				cx: "9",
				cy: "10",
				r: "1.2"
			}), i.jsx("circle", {
				className: h(j.svgFill),
				cx: "13",
				cy: "10",
				r: "1.2"
			})],
			height: "22px",
			width: "22px",
			viewBox: "0 0 22 22"
		});

	function l(a) {
		var c = a.isSolidQueryRef;
		if (c === void 0) return null;
		var d = b("bs_caml_option").valFromOption(c),
			e = a.setCovidSheet;
		c = e !== void 0 ? function(c) {
			b("bs_curry")._1(e, {
				sheet: 1,
				isSolidQueryRef: b("bs_caml_option").some(d)
			});
			return a.onClose()
		} : void 0;
		var f = {
			onSelect: function(b) {
				var c = a.selectedReaction;
				c = c !== void 0 ? c === b : !1;
				a.sendReaction(b, c);
				a.onClose();
				return a.closeActionsMenu()
			},
			selectedReaction: a.selectedReaction,
			isSolidQueryRef: d,
			onClose: function(b) {
				return a.onClose()
			},
			closeActionsMenu: function(b) {
				return a.closeActionsMenu()
			}
		};
		c !== void 0 && (f.showSolidReactionSheet = b("bs_caml_option").valFromOption(c));
		return i.jsx(b("MWChatReactionsMenu.bs").make, f)
	}
	d = {
		key: b("CometKeys").UP
	};
	e = {
		key: b("CometKeys").DOWN
	};
	var m = [{
		command: d,
		description: g._("M\u1edf menu ph\u1ee5 v\u1ec1 c\u1ea3m x\u00fac"),
		handler: function(a) {}
	}, {
		command: e,
		description: g._("M\u1edf menu ph\u1ee5 v\u1ec1 c\u1ea3m x\u00fac"),
		handler: function(a) {}
	}];

	function a(a) {
		var c = a.onVisibilityChange,
			d = a.sendReaction,
			e = a.setCovidSheet,
			f = a.align,
			n = a.selectedReaction;
		a = a.closeActionsMenu;
		var o = g._("B\u00e0y t\u1ecf c\u1ea3m x\u00fac"),
			p = i.useState(function() {}),
			q = p[1],
			r = b("CometRelay").useRelayEnvironment();
		return i.jsx(b("BasePopoverTrigger.react"), {
			align: function() {
				switch (b("bs_belt_Option").getWithDefault(f, "middle")) {
					case "start":
						return "start";
					case "middle":
						return "middle";
					case "end_":
						return "end";
					case "stretch":
						return "stretch"
				}
			}(),
			position: "above",
			popover: l,
			popoverProps: {
				isSolidQueryRef: p[0],
				setCovidSheet: e,
				sendReaction: d,
				selectedReaction: n,
				closeActionsMenu: a
			},
			popoverType: "menu",
			onVisibilityChange: c,
			children: function(a, c, d) {
				var e = function(a) {
					b("bs_curry")._1(q, function(a) {
						return b("bs_caml_option").some(b("MWChatSolidReactionSettingQuery").preload(r))
					}), b("bs_curry")._1(c, void 0), b("ODS").bumpEntityKey(3185, "mwchat_actions", "reaction")
				};
				d = function(a) {
					var b = a.key;
					if (b === "ArrowUp" || b === "ArrowDown") {
						e(void 0);
						a.preventDefault();
						return
					}
				};
				return i.jsx(b("CometTooltip.react"), {
					tooltip: o,
					align: "middle",
					position: "above",
					children: i.jsx(b("CometComponentWithKeyCommands.react"), {
						commandConfigs: m,
						xstyle: !1,
						children: i.jsx(b("KeyCommandHandler.react"), {
							children: i.jsx(b("CometPressable.react"), {
								"aria-label": o,
								role: "menuitem",
								ref: a,
								testid: "messenger_reactions_menu_button",
								onPress: e,
								overlayDisabled: !0,
								children: i.jsx("div", {
									children: i.jsx("div", {
										children: k,
										className: (h || (h = b("stylex")))(j.icon)
									}),
									className: h(j.action)
								})
							}),
							onKeyDown: d
						})
					})
				})
			}
		})
	}
	a = a;
	f.Action = c;
	f.styles = j;
	f.reactionIcon = k;
	f.popoverResource = l;
	f.keyUp = d;
	f.keyDown = e;
	f.commandConfigs = m;
	f.make = a
}), null);