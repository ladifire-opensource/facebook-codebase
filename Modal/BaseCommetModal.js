__d("BaseCometModal.react", [
	"BaseHeadingContext", 
	"BasePortal.react", 
	"CometContextualLayerAnchorRoot.react", 
	"CometDocumentScrollView.react", 
	"CometHeroInteractionContextPassthrough.react", 
	"CometHeroInteractionWithDiv.react", 
	"CometLayerKeyCommandWrapper.react", 
	"FocusRegion.react", 
	"HiddenSubtreeContext", 
	"React", 
	"focusScopeQueries", 
	"stylex", 
	"useCometVisualChangeTracker", 
	"useStable"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			content: {
				minHeight: "h3gjbzrl",
				position: "l9j0dhe7"
			},
			hidden: {
				visibility: "kr9hpln1"
			},
			mask: {
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				position: "poy2od1o",
				start: "j9ispegn",
				top: "kr520xx4"
			},
			maskBackgroundOverlay: {
				backgroundColor: "ms7hmo2b"
			},
			root: {
				position: "l9j0dhe7"
			},
			rootStatic: {
				position: "hwddc3l5"
			}
		},
		j = {
			"above-everything": {
				zIndex: "tkr6xdv7"
			},
			normal: {
				zIndex: "du4w35lb"
			}
		};

	function a(a) {
		var c = a.blockKeyCommands;
		c = c === void 0 ? !1 : c;
		var d = a.children,
			e = a.contextKey,
			f = a.hidden;
		f = f === void 0 ? !1 : f;
		var k = a.interactionDesc,
			l = a.interactionUUID,
			m = a.showMaskOverlay;
		m = m === void 0 ? !0 : m;
		a = a.stackingBehavior;
		a = a === void 0 ? "auto" : a;
		var n = h.useContext(b("HiddenSubtreeContext"));
		n = n.hidden;
		var o = b("useStable")(function () {
				return l !== void 0
			}),
			p = b("useCometVisualChangeTracker")();
		m = h.jsxs(h.Fragment, {
			children: [h.jsx("div", {
				className: (g || (g = b("stylex")))(i.mask, m ? i.maskBackgroundOverlay : null)
			}), h.jsx(b("CometContextualLayerAnchorRoot.react"), {
				children: h.jsx(b("FocusRegion.react").FocusRegion, {
					autoFocusQuery: b("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
					autoRestoreFocus: !0,
					containFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
					recoverFocusQuery: b("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
					children: c ? d : h.jsx(b("CometLayerKeyCommandWrapper.react"), {
						debugName: "modal layer",
						children: d
					})
				})
			})]
		});
		c = n ? "normal" : a;
		return h.jsx(b("BasePortal.react"), {
			hidden: n,
			xstyle: [c === "auto" ? i.rootStatic : i.root, f && i.hidden, c !== "auto" && j[c]],
			children: h.jsx(b("CometDocumentScrollView.react"), {
				contextKey: e,
				hiddenWhenDetached: f,
				children: h.jsx(b("BaseHeadingContext").Provider, {
					value: 1,
					children: o ? h.jsx(b("CometHeroInteractionContextPassthrough.react"), {
						clear: !0,
						children: h.jsx(b("CometHeroInteractionWithDiv.react"), {
							interactionDesc: k,
							interactionUUID: l,
							ref: p,
							xstyle: i.content,
							children: m
						})
					}) : h.jsx("div", {
						className: (g || (g = b("stylex")))(i.content),
						ref: p,
						children: m
					})
				})
			})
		})
	}
}), null);