__d("CometAlbumLeftRail.react", ["CometAlbumDeleteButton.react", 
	"CometAlbumUploadFileButton.react", "CometComposerAlbumContributorsTokenizer.react", 
	"CometComposerAlbumDescriptionEditor.react", "CometComposerAlbumTitleEditor.react", 
	"CometComposerSubmitButton.react", "CometLeftRailComponent.react", 
	"CometLeftRailHeader.react", "CometRelay", "React", "requireCond", "stylex", "cr:1724027", "cr:1710790", "cr:1827109", "CometAlbumLeftRail_album.graphql"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function a(a) {
		var c = a.album,
			d = a.disableVideo,
			e = a.isDescriptionHidden;
		e = e === void 0 ? !1 : e;
		var f = a.isSaving,
			i = a.isSharedAlbumSupported;
		i = i === void 0 ? !1 : i;
		var j = a.isTitleHidden;
		j = j === void 0 ? !1 : j;
		var k = a.privacyScope;
		k = k === void 0 ? null : k;
		var l = a.submitForm,
			m = a.submitTitle,
			n = a.title;
		a = a.viewType;
		c = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometAlbumLeftRail_album.graphql"), c);
		var o = (c == null ? void 0 : c.can_edit_caption) === !1;
		return h.jsx(b("CometLeftRailComponent.react"), {
			footer: h.jsx("div", {
				className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi dwg5866k",
				children: h.jsx(b("CometComposerSubmitButton.react"), {
					"aria-label": m,
					disabled: f,
					label: m,
					onPress: l,
					testid: void 0
				})
			}),
			header: h.jsx(b("CometLeftRailHeader.react"), {
				title: n
			}),
			primaryNav: h.jsxs(h.Fragment, {
				children: [k, !j && h.jsx(b("CometComposerAlbumTitleEditor.react"), {
					isDisabled: o
				}), !e && h.jsx(b("CometComposerAlbumDescriptionEditor.react"), {}), i && (b("cr:1827109") !== null ? h.jsx(b("cr:1827109"), {}) : h.jsx(b("CometComposerAlbumContributorsTokenizer.react"), {})), h.jsx(b("CometAlbumUploadFileButton.react"), {
					album: c,
					disableVideo: d,
					viewType: a
				}), b("cr:1710790") !== null && a !== "edit" && h.jsx(b("cr:1710790"), {}), b("cr:1724027") !== null && a !== "edit" && h.jsx(b("cr:1724027"), {}), c && h.jsx(b("CometAlbumDeleteButton.react"), {
					album: c
				})]
			})
		})
	}
}), null);