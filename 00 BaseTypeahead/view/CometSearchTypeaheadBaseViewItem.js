__d("CometSearchTypeaheadBaseViewItem.react", ["BaseListItem.react", 
	"CometPressable.react", "React", "emptyFunction", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			roundedBorders: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi"
			}
		},
		j = {
			contentRoot: {
				alignItems: "bp9cbjyn",
				cursor: "nhd2j8a9",
				display: "j83agx80",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "l9j0dhe7",
				":hover": {
					backgroundColor: "dwzzwef6"
				}
			},
			contentRootActive: {
				backgroundColor: "rnr61an3"
			},
			contentRootDisabled: {
				bottom: "i09qtzwb",
				cursor: "rj84mg9z",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4"
			},
			itemIcon: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			},
			itemRoot: {
				color: "oo9gr5id",
				flexGrow: "buofh1pr",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				paddingTop: "cxgpxx05",
				paddingEnd: "dflh9lhu",
				paddingBottom: "sj5x9vvc",
				paddingStart: "scb9dxdr"
			},
			pressable: {
				width: "k4urcfbm"
			},
			root: {
				width: "k4urcfbm"
			}
		};

	function a(a) {
		var c = a.children,
			d = a.entry,
			e = a.isActive,
			f = a.isDisabled;
		f = f === void 0 ? !1 : f;
		var k = a.itemEndContent,
			l = a.itemStartContent,
			m = a.linkProps;
		a.onHighlightEntry;
		var n = a.onPressEntry,
			o = a.onPressEntryIn,
			p = a.role,
			q = p === void 0 ? "option" : p;
		p = a.testid;
		p = a.xstyle;
		a = p === void 0 ? i.roundedBorders : p;
		p = h.useCallback(function (a) {
			n && n(d, a)
		}, [d, n]);
		var r = h.useCallback(function (a) {
				o && o(d, a)
			}, [d, o]),
			s = h.useMemo(function () {
				var a = {
					role: q
				};
				q === "option" && (a["aria-selected"] = e);
				q === "row" && (a.childAriaProps = {
					role: "gridcell"
				});
				return a
			}, [e, q]),
			t = s.childAriaProps;
		s = babelHelpers.objectWithoutPropertiesLoose(s, ["childAriaProps"]);
		return h.jsx("li", babelHelpers["extends"]({
			className: (g || (g = b("stylex")))(j.root),
			"data-testid": void 0,
			id: d.getKey()
		}, s, {
			children: h.jsxs("div", babelHelpers["extends"]({
				className: g([j.contentRoot, e && j.contentRootActive, a])
			}, t, {
				children: [h.jsx(b("CometPressable.react"), {
					disabled: f,
					display: "block",
					focusable: !1,
					label: d.getLabel(),
					linkProps: m,
					onPress: f ? b("emptyFunction") : p,
					onPressIn: f ? b("emptyFunction") : r,
					overlayDisabled: !0,
					role: "none",
					xstyle: j.pressable,
					children: h.jsx(b("BaseListItem.react"), {
						addon: l != null ? h.jsx("div", {
							className: (g || (g = b("stylex")))(j.itemIcon),
							children: l
						}) : null,
						className: g(j.itemRoot),
						right: k,
						children: c
					})
				}), h.jsx("div", {
					className: g(f ? j.contentRootDisabled : null)
				})]
			}))
		}))
	}
}), null);