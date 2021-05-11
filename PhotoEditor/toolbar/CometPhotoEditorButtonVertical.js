__d("CometPhotoEditorButtonVertical.react", ["CometMediaEditorEligibilityContext", 
	"CometTooltip.react", "React", "TetraAccessoryListCell.react", 
	"useToolChangeHandler", "withComposerViewStatePart"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		var c = a.canToolToggle,
			d = c === void 0 ? !0 : c;
		c = a.enabled;
		c = c === void 0 ? !1 : c;
		var e = a.icon,
			f = a.isActive,
			h = f === void 0 ? !1 : f;
		f = a.label;
		var i = a.onClick,
			j = i === void 0 ? null : i,
			k = a.toolName;
		i = a.knownAIProductTags;
		var l = a.mediaAttachments;
		a = a.unknownAIProductTags;
		var m = g.useContext(b("CometMediaEditorEligibilityContext")),
			n = Object.prototype.hasOwnProperty.call(m, k);
		m = n === !1 ? null : m[k];
		var o = b("useToolChangeHandler")(l, {
			knownAIProductTags: i,
			unknownAIProductTags: a
		});
		l = function () {
			d && h ? o(null) : o(k), j && j()
		};
		return g.jsx(b("CometTooltip.react"), {
			tooltip: m,
			children: g.jsx(b("TetraAccessoryListCell.react"), {
				addOnPrimary: {
					color: h ? "blue" : "gray",
					icon: e,
					size: 48,
					type: "contained-icon"
				},
				disabled: !c || n,
				headline: f,
				onPress: l,
				paddingHorizontal: 0,
				selected: h
			})
		})
	}
	c = b("withComposerViewStatePart")(a, function (a) {
		return {
			knownAIProductTags: a.knownAIProductTags,
			mediaAttachments: a.mediaAttachments,
			unknownAIProductTags: a.unknownAIProductTags
		}
	});
	e.exports = c
}), null);