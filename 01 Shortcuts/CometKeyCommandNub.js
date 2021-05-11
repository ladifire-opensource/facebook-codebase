__d("CometKeyCommandNub.react", ["fbt", 
	"CometCompactKeyCommandDisplay.react", "CometHideLayerOnEscape.react", 
	"CometKeyCommandSettingsContext", "CometSearchKeyCommandWrapper.react", 
	"FocusManager", "FocusRegion.react", "FocusWithinHandler.react", 
	"JSResourceForInteraction", "React", "cometGetKeyCommandConfig", 
	"focusScopeQueries", "useCometLazyDialog", "useGlobalKeyCommands"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React"),
		i = b("JSResourceForInteraction")("CometKeyShortcutDialog.react").__setRef("CometKeyCommandNub.react"),
		j = JSON.stringify({
			"/": g._("T\u00ecm ki\u1ebfm tr\u00ean Facebook"),
			"?": g._("Hi\u1ec3n th\u1ecb ho\u1eb7c \u1ea9n tr\u1ee3 gi\u00fap b\u00e0n ph\u00edm"),
			c: g._("B\u00ecnh lu\u1eadn v\u1ec1 b\u00e0i vi\u1ebft hi\u1ec7n t\u1ea1i"),
			enter: g._("Xem th\u00eam b\u00e0i vi\u1ebft hi\u1ec7n t\u1ea1i"),
			f: g._("B\u1eadt\/t\u1eaft ch\u1ebf \u0111\u1ed9 to\u00e0n m\u00e0n h\u00ecnh"),
			j: g._("\u0110i \u0111\u1ebfn b\u00e0i vi\u1ebft ti\u1ebfp theo tr\u00ean b\u1ea3ng tin ho\u1eb7c \u1ea3nh ti\u1ebfp theo trong tr\u00ecnh xem \u1ea3nh"),
			k: g._("Chuy\u1ec3n v\u1ec1 b\u00e0i vi\u1ebft tr\u01b0\u1edbc \u0111\u00f3 tr\u00ean b\u1ea3ng tin ho\u1eb7c \u1ea3nh tr\u01b0\u1edbc \u0111\u00f3 trong tr\u00ecnh xem \u1ea3nh"),
			l: g._("Th\u00edch ho\u1eb7c b\u00e0y t\u1ecf c\u1ea3m x\u00fac v\u1ec1 b\u00e0i vi\u1ebft hi\u1ec7n t\u1ea1i tr\u00ean b\u1ea3ng tin ho\u1eb7c \u1ea3nh trong tr\u00ecnh xem \u1ea3nh"),
			o: g._("M\u1edf file \u0111\u00ednh k\u00e8m trong b\u00e0i vi\u1ebft hi\u1ec7n t\u1ea1i"),
			p: g._("T\u1ea1o b\u00e0i vi\u1ebft m\u1edbi"),
			q: g._("T\u00ecm ki\u1ebfm ng\u01b0\u1eddi li\u00ean h\u1ec7 tr\u00ean Messenger"),
			s: g._("Chia s\u1ebb b\u00e0i vi\u1ebft hi\u1ec7n t\u1ea1i")
		});

	function a() {
		var a = h.useContext(b("CometKeyCommandSettingsContext")),
			c = a.isViewerShowing,
			d = a.setViewerInfo,
			e = a.viewerType;
		a = b("useCometLazyDialog")(i);
		var f = a[0],
			g = h.useRef(null),
			k = h.useRef(!1),
			l = h.useCallback(function () {
				d(!1, e), e === "pinned" && k.current && g.current != null && b("FocusManager").focusElement(g.current, !0)
			}, [d, e]),
			m = h.useCallback(function () {
				d(!0, "see_all"), f({}, function () {})
			}, [d, f]);
		a = h.useMemo(function () {
			return [b("cometGetKeyCommandConfig")("global", "toggleNub", function () {
				!c ? e === "see_all" ? m() : (g.current = document.activeElement, d(!0, e)) : e === "pinned" && l()
			})]
		}, [c, l, d, m, e]);
		b("useGlobalKeyCommands")(a);
		a = c && e === "pinned" ? h.jsx(b("CometCompactKeyCommandDisplay.react"), {
			onExpand: m,
			onHide: l
		}) : null;
		return h.jsx(b("FocusRegion.react").FocusRegion, {
			containFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
			id: "KeyboardShortcutNubRegion",
			children: h.jsx(b("CometSearchKeyCommandWrapper.react"), {
				children: h.jsx(b("FocusWithinHandler.react"), {
					onBlurWithin: function () {
						k.current = !1
					},
					onFocusWithin: function () {
						k.current = !0
					},
					children: h.jsxs(b("CometHideLayerOnEscape.react"), {
						debugName: "KeyCommandNubESC",
						onHide: l,
						children: [a, h.jsx("div", {
							"data-at-shortcutkeys": j
						})]
					})
				})
			})
		})
	}
}), null);