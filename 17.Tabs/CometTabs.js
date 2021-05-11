__d("CometTabs.react", ["ix", "fbt", "CometComponentWithKeyCommands.react", 
	"CometDeferredPopoverTrigger.react", "CometFocusGroup.react", "CometKeys", 
	"CometTab.react", "React", "fbicon", "focusScopeQueries", "mergeRefs", 
	"requireDeferred", "stylex"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = b("requireDeferred")("CometTabMenu.react"),
		l = {
			heightGetter: {
				lineHeight: "soycq5t1",
				position: "l9j0dhe7"
			},
			heightSetter: {
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				visibility: "kr9hpln1"
			},
			moreTab: {
				height: "cb02d2ww",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4"
			},
			moreWrapper: {
				display: "q9uorilb",
				height: "cb02d2ww",
				position: "l9j0dhe7",
				verticalAlign: "j1lvzwm4",
				width: "t4ae4g2e"
			},
			moreWrapperAdaptive: {
				height: "r9glsfau",
				maxHeight: "gbic8f20",
				minHeight: "tgvbjcpo",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs"
			},
			root: {
				height: "cb02d2ww",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7",
				width: "k4urcfbm",
				zIndex: "du4w35lb"
			},
			tab: {
				display: "pq6dq46d",
				"float": "bzsjyuwj",
				height: "cb02d2ww",
				verticalAlign: "j1lvzwm4"
			},
			tabsContainer: {
				bottom: "i09qtzwb",
				boxSizing: "rq0escxv",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4"
			}
		};

	function a(a) {
		var c = a.tabs,
			d = a.maxTabs,
			e = d === void 0 ? c.length : d,
			f = a.menuSize,
			o = a.moreTabStyles,
			p = a.moreTabXStyle,
			q = a.tabsContainerStyle,
			r = a.onMoreTabPress,
			s = j.useRef(null),
			t = j.useRef([]),
			u = j.useRef(null);
		d = j.useState(function () {
			return Array.from({
				length: c.length
			}).map(function (a, b) {
				return b
			}).filter(function (a) {
				return a >= e
			})
		});
		var v = d[0],
			w = d[1],
			x = e < c.length ? c.slice(0, e) : c,
			y = e >= c.length,
			z = j.useMemo(function () {
				return v.some(function (a) {
					return (a = c[a]) == null ? void 0 : a.selected
				})
			}, [v, c]),
			A = j.useCallback(function (a, c) {
				a = b("mergeRefs")(a, u, function (a) {
					(a == null ? void 0 : a.parentElement) != null && a.parentElement instanceof HTMLElement && (a.parentElement.tabIndex = 1)
				});
				var d = [{
					command: {
						key: b("CometKeys").DOWN
					},
					description: h._("M\u1edf menu"),
					handler: c
				}];
				return j.jsx(b("CometComponentWithKeyCommands.react"), {
					commandConfigs: d,
					xstyle: [l.moreWrapper, y && l.moreWrapperAdaptive],
					children: j.jsx(b("CometTab.react"), babelHelpers["extends"]({}, o, {
						"aria-haspopup": "menu",
						icon: b("fbicon")._(g("481882"), 16),
						label: h._("Xem th\u00eam"),
						onPress: function () {
							c(), r && r()
						},
						pressableXStyle: l.moreTab,
						ref: a,
						role: "tab",
						selected: z,
						testid: void 0,
						xstyle: p
					}))
				})
			}, [y, z, o, p, r]);
		return j.jsx(b("CometFocusGroup.react"), {
			hideArrowSignifiers: !0,
			orientation: "horizontal",
			preventScrollOnFocus: !0,
			tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
			wrap: !0,
			children: function (a) {
				return j.jsx("div", {
					className: (i || (i = b("stylex")))(l.root, a),
					role: "tablist",
					children: j.jsxs("div", {
						className: i(l.heightGetter),
						children: [y && j.jsx("div", {
							className: (i || (i = b("stylex")))(l.heightSetter),
							children: x.map(function (a, c) {
								a.linkProps;
								a.onPress;
								a = babelHelpers.objectWithoutPropertiesLoose(a, ["linkProps", "onPress"]);
								return j.createElement(b("CometTab.react"), babelHelpers["extends"]({}, a, {
									key: c + "tab",
									ref: function (a) {
										return t.current[c] = a
									},
									role: "tab",
									selected: a.selected,
									xstyle: [l.tab, a.xstyle]
								}))
							})
						}), j.jsxs("div", {
							className: i(l.tabsContainer, q),
							children: [j.jsx(b("CometDeferredPopoverTrigger.react"), {
								popoverProps: {
									menuItems: v.map(function (a) {
										return c[a]
									}).filter(Boolean),
									menuSize: f
								},
								popoverResource: k,
								children: A
							}), x.map(function (a, c) {
								return j.createElement(b("CometTab.react"), babelHelpers["extends"]({}, a, {
									containerRef: s,
									key: c + "tab",
									onHidden: function (a) {
										w(function (b) {
											return a ? m(b, c) : n(b, c)
										})
									},
									pressableXStyle: l.tab,
									ref: function (a) {
										return t.current[c] = a
									},
									role: "tab",
									selected: a.selected
								}))
							})]
						})]
					})
				})
			}
		})
	}

	function m(a, b) {
		return a.includes(b) ? a : [].concat(a, [b]).sort(function (a, b) {
			return a - b
		})
	}

	function n(a, b) {
		return a.includes(b) ? a.filter(function (a) {
			return a !== b
		}) : a
	}
}), null);