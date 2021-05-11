__d("CometMediaEditorViewer.react", ["CometComposerVideoPreview.react", 
	"CometImage.react", "CometMediaEditorDisableMask.react", 
	"CometMediaEditorStage.react", "CometPhotoEditorImageWrapper.react",
	 "CometPhotoEditorLayersRenderer.react", "CometPhotoEditorProductTagInstructionBanner.react", 
	 "CometPhotoEditorTagInstructionBanner.react", "CometPlaceholder.react", 
	 "CometVideoEditorUtils.react", "CometVideoThumbnailFramesPreview.react", 
	 "MediaEditorViewStateContext", "React", "stylex", "unrecoverableViolation", 
	 "updateCurrentIndexReducer", "updateImageDimensionsReducer", "updateSaveStatusReducer", "useMediaEditorReducer", "useMediaEditorViewStateDispatcher", "withComposerViewStatePart"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			layer: {
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4"
			},
			noActiveLayer: {
				cursor: "bnpdmtie"
			},
			videoHeight: {
				height: "rikhs25o"
			}
		};

	function a(a) {
		var c, d = a.containerRef,
			e = a.hasNext;
		e = e === void 0 ? !0 : e;
		var f = a.isOnVideoLiteComposer,
			j = a.knownAIProductTags,
			k = a.mediaAttachment,
			l = a.nextMediaAttachment,
			m = a.onNavigateAway,
			n = a.origSrc,
			o = a.prevMediaAttachment,
			p = a.showVideoFrames,
			q = p === void 0 ? !1 : p,
			r = a.unknownAIProductTags;
		p = a.videoAttachmentMetadata;
		a = h.useContext(b("MediaEditorViewStateContext"));
		b("useMediaEditorReducer")(b("updateCurrentIndexReducer"));
		b("useMediaEditorReducer")(b("updateSaveStatusReducer"));
		b("useMediaEditorReducer")(b("updateImageDimensionsReducer"));
		var s = b("useMediaEditorViewStateDispatcher")();
		if (a == null) throw b("unrecoverableViolation")("Must provide a valid photo", "comet_composer");
		var t = a.activeTool,
			u = a.clientImageHeight,
			v = a.clientImageWidth,
			w = a.index,
			x = a.isSaving;
		x = x === void 0 ? !1 : x;
		var y = (p == null ? void 0 : p.isGeneratingThumbnails) || !1;
		p = p == null ? void 0 : p.generatedThumbnails;
		var z = h.useCallback(function (a, b, c) {
				return s({
					productTagInfo: new Map().set(a, {
						image: b,
						price: c
					}),
					type: "ADD_PRODUCT_TAG"
				})
			}, [s]),
			A = (c = k == null ? void 0 : (c = k.data) == null ? void 0 : c.id) != null ? c : "",
			B = h.useCallback(function () {
				var a, b;
				a = (a = ((a = j) != null ? a : new Map()).get(A)) != null ? a : [];
				b = (b = ((b = r) != null ? b : new Map()).get(A)) != null ? b : [];
				a.forEach(function (a) {
					s({
						newAISuggestedProductTag: a,
						type: "ADD_KNOWN_AI_SUGGESTED_PRODUCT_TAG"
					}), a.taggee.id != null && a.taggee.image_uri != null && a.taggee.product_price != null && z(a.taggee.id, a.taggee.image_uri, a.taggee.product_price)
				});
				b.forEach(function (a) {
					s({
						newUnknownSuggestedProductTag: a,
						type: "ADD_UNKNOWN_AI_SUGGESTED_PRODUCT_TAG"
					})
				})
			}, [j, A, r, s, z]);
		h.useEffect(function () {
			B()
		}, [k, B]);
		c = h.useCallback(function () {
			m(function () {
				var a;
				return s({
					nextKnownAIProductTags: j == null ? void 0 : j.get((a = l == null ? void 0 : l.data.id) != null ? a : ""),
					nextMediaAttachment: l,
					nextUnknownAIProductTags: r == null ? void 0 : r.get((a = l == null ? void 0 : l.data.id) != null ? a : ""),
					type: "INCREMENT_INDEX"
				})
			})
		}, [m, s, l, j, r]);
		var C = h.useCallback(function () {
				m(function () {
					var a;
					return s({
						prevKnownAIProductTags: j == null ? void 0 : j.get((a = o == null ? void 0 : o.data.id) != null ? a : ""),
						prevMediaAttachment: o,
						prevUnknownAIProductTags: r == null ? void 0 : r.get((a = o == null ? void 0 : o.data.id) != null ? a : ""),
						type: "DECREMENT_INDEX"
					})
				})
			}, [m, s, o, j, r]),
			D = n != null && n !== "" ? {
				backgroundSrc: n
			} : null;
		f === !0 && (p == null ? void 0 : p.length) && (D = D || {}, D = {
			backgroundSrc: p[0].getURL()
		});
		var E = k.fileType === "VIDEO" && k.file && k.file.type !== "image/gif",
			F = h.useRef(null),
			G = F.current;
		p = (p = F.current) == null ? void 0 : p.getBoundingClientRect();
		var H = p == null ? void 0 : p.height,
			I = p == null ? void 0 : p.width;
		p = h.useState();
		var J = p[0],
			K = p[1];
		h.useEffect(function () {
			if (G != null) {
				if (H == null || I == null || H === 0 || I === 0) return;
				s({
					height: H,
					type: "SET_CLIENT_IMAGE_DIMENSIONS",
					width: I
				})
			}
		}, [G, s, H, I, t]);
		var L = h.useCallback(function () {
			if (G != null && u != null && v != null) {
				var a = G.getBoundingClientRect();
				if (a.height === 0 || a.width === 0) return;
				s({
					height: a.height,
					type: "SET_CLIENT_IMAGE_DIMENSIONS",
					width: a.width
				})
			}
		}, [u, v, G, s]);
		h.useEffect(function () {
			if (F.current != null) {
				window.addEventListener("resize", L);
				L();
				return function () {
					window.removeEventListener("resize", L)
				}
			}
		}, [L]);
		p = t === "PRODUCT_TAG" ? h.jsx(b("CometPhotoEditorProductTagInstructionBanner.react"), {}) : t === "XY_TAG" && a.tags != null && a.tags.length === 0 ? h.jsx(b("CometPhotoEditorTagInstructionBanner.react"), {}) : null;
		a = x === !0 || y === !0;
		return h.jsxs(b("CometMediaEditorStage.react"), babelHelpers["extends"]({
			bottomInstructionBanner: p,
			navigateBack: w > 0 ? C : null,
			navigateForward: e ? c : null,
			showMerchantEducation: t === "PRODUCT_TAG"
		}, D, {
			children: [a ? h.jsx(b("CometMediaEditorDisableMask.react"), {
				showOverlay: !0,
				showProgressIndicator: !0
			}) : null, h.jsx(b("CometPhotoEditorImageWrapper.react").CometPhotoEditorImageWrapper, {
				imageComponent: function (a) {
					return h.jsxs(h.Fragment, {
						children: [E === !0 ? null : h.jsx(b("CometImage.react"), {
							src: n,
							testid: void 0,
							xstyle: a
						}, n), h.jsx(b("CometPlaceholder.react"), {
							fallback: null,
							children: h.jsx("div", {
								className: (g || (g = b("stylex")))(i.layer, t === null && i.noActiveLayer),
								ref: F,
								children: h.jsx(b("CometPhotoEditorLayersRenderer.react"), {
									mediaAttachment: k,
									containerRef: d
								})
							})
						}), E === !0 ? h.jsxs("div", {
							children: [h.jsx(b("CometComposerVideoPreview.react"), {
								isPlayablePreview: f,
								mediaAttachment: k,
								setVideoRef: K,
								videoStyle: i.videoHeight
							}), q ? h.jsx(b("CometVideoThumbnailFramesPreview.react"), {
								videoRef: J
							}) : null]
						}) : null]
					})
				},
				imageUri: n
			})]
		}))
	}
	c = b("withComposerViewStatePart")(a, function (a) {
		return {
			knownAIProductTags: a.knownAIProductTags,
			unknownAIProductTags: a.unknownAIProductTags,
			videoAttachmentMetadata: b("CometVideoEditorUtils.react").getVideoAttachmentMetaDataFromComposerState(a)
		}
	});
	e.exports = c
}), null);