__d("useToolChangeHandler", ["fbt", "CometMediaEditorSaverContext", 
	"CometMediaEditorUtils", "MediaEditorViewStateContext", "React",
	 "getOnNavigateAwayHandler", "gkx", 
	 "triggerUnsavedChangesDialogForConcurrentToolMode",
	  "updateActiveLayersReducer", 
	  "updateCometPhotoEditorTagsOnNavigation",
	   "useCometConfirmationDialog", 
	   "useMediaEditorReducer", 
	   "useMediaEditorViewStateDispatcher"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React"),
		i = b("gkx")("1643886");

	function a(a, c) {
		var d = b("useCometConfirmationDialog")(),
			e = d[0],
			f = h.useContext(b("MediaEditorViewStateContext")),
			k = b("useMediaEditorViewStateDispatcher")(),
			l = h.useContext(b("CometMediaEditorSaverContext"));
		b("useMediaEditorReducer")(b("updateActiveLayersReducer"));
		return function (d) {
			var h = f.activeTool,
				m = f.index,
				n = b("CometMediaEditorUtils").getToolsWithChanges(l, m, a, f);
			m = j(d, h, n, a, m, k, babelHelpers["extends"]({}, c));
			!i && h == null && m();
			if (d !== h) {
				h = i ? function () {
					return b("triggerUnsavedChangesDialogForConcurrentToolMode")(d, n)
				} : function () {
					return b("CometMediaEditorUtils").checkForChanges(l, a, f)
				};
				h = b("getOnNavigateAwayHandler")({
					getShouldTriggerWarning: h,
					showConfirmationDialog: e
				});
				h(m, g._("H\u00e3y l\u01b0u c\u00e1c thay \u0111\u1ed5i tr\u01b0\u1edbc khi th\u1ef1c hi\u1ec7n th\u00eam."))
			}
		}
	}

	function j(a, c, d, e, f, g, h) {
		var i = h.knownAIProductTags,
			j = h.unknownAIProductTags,
			k = (h = e !== void 0 && e !== null ? (h = e[f]) == null ? void 0 : (h = h.data) == null ? void 0 : h.id : "") != null ? h : "";
		return function (h) {
			a != null && g({
				deletePendingChanges: h === !0,
				layer: a,
				type: "ADD_ACTIVE_LAYER"
			});
			var l = c != null ? d.has(c) : !1;
			h !== !0 && c != null && !l && g({
				layer: c,
				type: "REMOVE_ACTIVE_LAYER"
			});
			g(babelHelpers["extends"]({}, b("updateCometPhotoEditorTagsOnNavigation")(e, f, i == null ? void 0 : i.get(k), j == null ? void 0 : j.get(k)), {
				tool: a,
				type: "SET_ACTIVE_TOOL"
			}))
		}
	}
}), null);