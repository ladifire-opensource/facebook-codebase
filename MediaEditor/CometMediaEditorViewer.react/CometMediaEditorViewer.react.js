__d("CometMediaEditorViewer.react", ["CometComposerVideoPreview.react", "CometImage.react", "CometMediaEditorDisableMask.react", "CometMediaEditorStage.react", "CometPhotoEditorImageWrapper.react", "CometPhotoEditorProductTagInstructionBanner.react", "CometPhotoEditorProductTagLayer.react", "CometPhotoEditorTagInstructionBanner.react", "CometPhotoEditorTagLayer.react", "CometPlaceholder.react", "CometVideoEditorUtils.react", "CometVideoThumbnailFramesPreview.react", "JSResource", "MediaEditorViewStateContext", "React", "lazyLoadComponent", "requireCond", "stylex", "updateCurrentIndexReducer", "updateImageDimensionsReducer", "updateSaveStatusReducer", "useMediaEditorReducer", "useMediaEditorViewStateDispatcher", "withComposerViewStatePart", "cr:1750150", "unrecoverableViolation"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = b("lazyLoadComponent")(b("JSResource")("CometPhotoEditorRotateLayer.react").__setRef("CometMediaEditorViewer.react")),
		j = b("lazyLoadComponent")(b("JSResource")("CometPhotoEditorCropLayer.react").__setRef("CometMediaEditorViewer.react")),
		k = b("lazyLoadComponent")(b("JSResource")("CometPhotoEditorTextOverlayLayer.react").__setRef("CometMediaEditorViewer.react")),
		l = {
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
			m = a.knownAIProductTags,
			n = a.mediaAttachment,
			o = a.nextMediaAttachment,
			p = a.onNavigateAway,
			q = a.origSrc,
			r = a.prevMediaAttachment,
			s = a.showVideoFrames,
			t = s === void 0 ? !1 : s,
			u = a.surfacedKnownAIProductTags,
			v = a.surfacedUnknownAIProductTags,
			w = a.unknownAIProductTags;
		s = a.videoAttachmentMetadata;
		a = h.useContext(b("MediaEditorViewStateContext"));
		b("useMediaEditorReducer")(b("updateCurrentIndexReducer"));
		b("useMediaEditorReducer")(b("updateSaveStatusReducer"));
		b("useMediaEditorReducer")(b("updateImageDimensionsReducer"));
		var x = b("useMediaEditorViewStateDispatcher")();
		if (a == null) throw b("unrecoverableViolation")("Must provide a valid photo", "comet_composer");
		var y = a.activeTool,
			z = a.clientImageHeight,
			A = a.clientImageWidth,
			B = a.index,
			C = a.isSaving;
		C = C === void 0 ? !1 : C;
		var D = (s == null ? void 0 : s.isGeneratingThumbnails) || !1;
		s = s == null ? void 0 : s.generatedThumbnails;
		var E = h.useCallback(function (a, b, c) {
				return x({
					productTagInfo: new Map().set(a, {
						image: b,
						price: c
					}),
					type: "ADD_PRODUCT_TAG"
				})
			}, [x]),
			F = (c = n == null ? void 0 : (c = n.data) == null ? void 0 : c.id) != null ? c : "",
			G = h.useCallback(function () {
				var a, b;
				a = (a = ((a = m) != null ? a : new Map()).get(F)) != null ? a : [];
				b = (b = ((b = w) != null ? b : new Map()).get(F)) != null ? b : [];
				a.forEach(function (a) {
					x({
						newAISuggestedProductTag: a,
						type: "ADD_KNOWN_AI_SUGGESTED_PRODUCT_TAG"
					}), a.taggee.id != null && a.taggee.image_uri != null && a.taggee.product_price != null && E(a.taggee.id, a.taggee.image_uri, a.taggee.product_price)
				});
				b.forEach(function (a) {
					x({
						newUnknownSuggestedProductTag: a,
						type: "ADD_UNKNOWN_AI_SUGGESTED_PRODUCT_TAG"
					})
				})
			}, [m, F, w, x, E]);
		h.useEffect(function () {
			G()
		}, [n, G]);
		c = h.useCallback(function () {
			p(function () {
				var a;
				return x({
					nextKnownAIProductTags: m == null ? void 0 : m.get((a = o == null ? void 0 : o.data.id) != null ? a : ""),
					nextMediaAttachment: o,
					nextUnknownAIProductTags: w == null ? void 0 : w.get((a = o == null ? void 0 : o.data.id) != null ? a : ""),
					type: "INCREMENT_INDEX"
				})
			})
		}, [p, x, o, m, w]);
		var H = h.useCallback(function () {
				p(function () {
					var a;
					return x({
						prevKnownAIProductTags: m == null ? void 0 : m.get((a = r == null ? void 0 : r.data.id) != null ? a : ""),
						prevMediaAttachment: r,
						prevUnknownAIProductTags: w == null ? void 0 : w.get((a = r == null ? void 0 : r.data.id) != null ? a : ""),
						type: "DECREMENT_INDEX"
					})
				})
			}, [p, x, r, m, w]),
			I = q != null && q !== "" ? {
				backgroundSrc: q
			} : null;
		f === !0 && (s == null ? void 0 : s.length) && (I = I || {}, I = {
			backgroundSrc: s[0].getURL()
		});
		var J = n.fileType === "VIDEO" && n.file && n.file.type !== "image/gif",
			K = h.useRef(null),
			L = K.current;
		s = (s = K.current) == null ? void 0 : s.getBoundingClientRect();
		var M = s == null ? void 0 : s.height,
			N = s == null ? void 0 : s.width;
		s = h.useState();
		var O = s[0],
			P = s[1];
		h.useEffect(function () {
			if (L != null) {
				if (M == null || N == null || M === 0 || N === 0) return;
				x({
					height: M,
					type: "SET_CLIENT_IMAGE_DIMENSIONS",
					width: N
				})
			}
		}, [L, x, M, N, y]);
		var Q = h.useCallback(function () {
			if (L != null && z != null && A != null) {
				var a = L.getBoundingClientRect();
				if (a.height === 0 || a.width === 0) return;
				x({
					height: a.height,
					type: "SET_CLIENT_IMAGE_DIMENSIONS",
					width: a.width
				})
			}
		}, [z, A, L, x]);
		h.useEffect(function () {
			if (K.current != null) {
				window.addEventListener("resize", Q);
				Q();
				return function () {
					window.removeEventListener("resize", Q)
				}
			}
		}, [Q]);
		s = y === "PRODUCT_TAG" ? h.jsx(b("CometPhotoEditorProductTagInstructionBanner.react"), {}) : y === "XY_TAG" && a.tags != null && a.tags.length === 0 ? h.jsx(b("CometPhotoEditorTagInstructionBanner.react"), {}) : null;
		a = C === !0 || D === !0;
		return h.jsxs(b("CometMediaEditorStage.react"), babelHelpers["extends"]({
			bottomInstructionBanner: s,
			navigateBack: B > 0 ? H : null,
			navigateForward: e ? c : null,
			showMerchantEducation: y === "PRODUCT_TAG"
		}, I, {
			children: [a ? h.jsx(b("CometMediaEditorDisableMask.react"), {
				showOverlay: !0,
				showProgressIndicator: !0
			}) : null, h.jsx(b("CometPhotoEditorImageWrapper.react").CometPhotoEditorImageWrapper, {
				imageComponent: function (a) {
					return h.jsxs(h.Fragment, {
						children: [J === !0 ? null : h.jsx(b("CometImage.react"), {
							src: q,
							testid: void 0,
							xstyle: a
						}, q), h.jsx(b("CometPlaceholder.react"), {
							fallback: null,
							children: h.jsxs("div", {
								className: (g || (g = b("stylex")))(l.layer, y === null && l.noActiveLayer),
								ref: K,
								children: [y === "XY_TAG" ? h.jsxs(h.Fragment, {
									children: [b("cr:1750150") != null ? h.jsx(b("cr:1750150"), {}) : null, h.jsx(b("CometPhotoEditorTagLayer.react"), {
										isEnabled: y === "XY_TAG",
										mediaAttachment: n
									})]
								}) : null, y === "PRODUCT_TAG" && (n == null ? void 0 : (a = n.data) == null ? void 0 : a.id) != null ? h.jsx(b("CometPhotoEditorProductTagLayer.react"), {
									isEnabled: !0,
									mediaAttachment: n,
									surfacedKnownAIProductTags: (a = u) != null ? a : new Map(),
									surfacedUnknownAIProductTags: (a = v) != null ? a : new Map()
								}) : null, y !== "CROP" || z == null || A == null || z === 0 || A === 0 ? null : h.jsx(j, {
									clientImageHeight: z,
									clientImageWidth: A,
									containerRef: d
								}), y === "ROTATE" ? h.jsx(i, {}) : null, y === "TEXT_OVERLAY" && z != null && A != null ? h.jsx(k, {
									clientImageHeight: z,
									clientImageWidth: A
								}) : null]
							})
						}), J === !0 ? h.jsxs("div", {
							children: [h.jsx(b("CometComposerVideoPreview.react"), {
								isPlayablePreview: f,
								mediaAttachment: n,
								setVideoRef: P,
								videoStyle: l.videoHeight
							}), t ? h.jsx(b("CometVideoThumbnailFramesPreview.react"), {
								videoRef: O
							}) : null]
						}) : null]
					})
				},
				imageUri: q
			})]
		}))
	}
	c = b("withComposerViewStatePart")(a, function (a) {
		return {
			knownAIProductTags: a.knownAIProductTags,
			surfacedKnownAIProductTags: a.surfacedKnownAIProductTags,
			surfacedUnknownAIProductTags: a.surfacedUnknownAIProductTags,
			unknownAIProductTags: a.unknownAIProductTags,
			videoAttachmentMetadata: b("CometVideoEditorUtils.react").getVideoAttachmentMetaDataFromComposerState(a)
		}
	});
	e.exports = c
}), null);