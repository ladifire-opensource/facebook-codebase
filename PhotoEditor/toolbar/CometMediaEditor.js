__d("CometMediaEditor.react", ["fbt", "BaseMultiStepContainer.react", 
	"CometComposerHeader.react", "CometMediaEditorEligibilityContext", 
	"CometMediaEditorSaverContext", "CometMediaEditorUtils", "CometMediaEditorViewer.react", 
	"CometMediaViewerLayoutSkeleton.react", "CometPhotoEditorEditedPhotoViewer.react",
	 "CometPhotoEditorToolbar.react", "CometPlaceholder.react", "CometVideoEditorToolbar.react",
	  "CometVideoEditorUtils.react", "MediaEditorViewStateContext", 
	  "MediaEditorViewStateDispatcherContext", "MediaEditorViewStateReducerContext",
	   "React", "basicCoordinateTransform", "cometMediaEditorCanEditWithAnyToolEligibilityChecker",
	    "cometMediaEditorCaptionEligibilityChecker", "cometMediaEditorRotateEligibilityChecker", 
	    "cometMediaEditorUploadingEligibilityChecker", "getCometMediaEditorEligibility",
	     "getOnNavigateAwayHandler", "reduceMediaEditorViewState", "shallowEqual", "stylex",
	      "unrecoverableViolation", "updateCometPhotoEditorTagsOnNavigation",
	       "updateCometVideoEditorTags", "useCometConfirmationDialog", "useOnBeforeUnload",
	        "withComposerViewStatePart"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			dialog: {
				height: "n57nqv57",
				width: "slwcbde0"
			},
			fullscreen: {
				height: "nznu9b0o",
				width: "ina5je9e"
			},
			photoEditorDialogContainer: {
				minHeight: "qywhw6cw"
			},
			photoEditorFullscreenContainer: {
				minHeight: "jgljxmt5"
			}
		};

	function a(a) {
		var c = a.initialTool,
			d = a.isDialog;
		d = d === void 0 ? !1 : d;
		var e = a.mediaAttachments,
			f = a.onBack,
			k = a.videoAttachmentMetadata;
		k = k === void 0 ? {} : k;
		var l = a.isOnVideoLiteComposer,
			m = l === void 0 ? !1 : l;
		l = babelHelpers.objectWithoutPropertiesLoose(a, ["initialTool", 
			"isDialog", "mediaAttachments", "onBack", "videoAttachmentMetadata", "isOnVideoLiteComposer"]);
		var n = i.useRef(new Map());
		c = babelHelpers["extends"]({
			activeTool: c,
			index: (a = l.index) != null ? a : 0
		}, b("updateCometPhotoEditorTagsOnNavigation")(e, l.index, [], []), b("updateCometVideoEditorTags")(e, l.index), {
			clickEventCoordinateTransforms: [b("basicCoordinateTransform")]
		});
		a = k == null ? void 0 : k.thumbnailType;
		l = i.useReducer(function (a, c) {
			a = b("reduceMediaEditorViewState")(n, a, c);
			return a
		}, c);
		var o = l[0],
			p = l[1];
		k = i.useState();
		c = k[0];
		l = k[1];
		var q = i.useRef(new Map());
		b("useOnBeforeUnload")(function () {
			if (b("CometMediaEditorUtils").checkForChanges(q, e, o)) return {
				warnMessage: g._("B\u1ea1n ch\u01b0a l\u01b0u ph\u1ea7n ch\u1ec9nh s\u1eeda")
			}
		});
		if (e == null) throw b("unrecoverableViolation")("Must provide a valid photo/video", "comet_composer");
		var r = ((k = e == null ? void 0 : e.length) != null ? k : 0 <= o.index) ? e[o.index] : e[0],
			s;
		(r.state === "UPLOADING" || r.state === "UPLOADED") && r.fileType === "VIDEO" && (s = r.entID);
		var t;
		r.state !== "PREEXISTING" && (t = r.file.uploadID);
		k = i.useRef(null);
		k.current !== t && (k.current = t, l(r.fileObjectURL));
		k = b("useCometConfirmationDialog")();
		l = k[0];
		var u = b("getOnNavigateAwayHandler")({
				getShouldTriggerWarning: function () {
					return b("CometMediaEditorUtils").checkForChanges(q, e, o)
				},
				showConfirmationDialog: l
			}),
			v = function () {
				u(f)
			};
		k = i.useRef(null);
		l = o.index < e.length - 1 ? e[o.index + 1] : null;
		var w = o.index - 1 >= 0 ? e[o.index - 1] : null;
		c = c != null ? i.jsx(b("CometMediaEditorViewer.react"), {
			containerRef: k,
			hasNext: o.index < e.length - 1,
			isOnVideoLiteComposer: m,
			mediaAttachment: r,
			nextMediaAttachment: l,
			onNavigateAway: u,
			origSrc: c,
			prevMediaAttachment: w,
			showVideoFrames: m && a === "scrubber_selected"
		}) : null;
		i.useEffect(function () {
			p({
				height: r.height,
				type: "SET_ORIGINAL_IMAGE_DIMENSIONS",
				width: r.width
			})
		}, [r.height, r.width]);
		a = m ? i.jsx(b("CometComposerHeader.react"), {
			onBack: v,
			title: g._("Ch\u1ecdn c\u00e1ch \u0111\u0103ng"),
			withBackButton: !0
		}) : o.activeTool === "PRODUCT_TAG" ? i.jsx(b("CometComposerHeader.react"), {
			onBack: v,
			title: g._("G\u1eafn th\u1ebb s\u1ea3n ph\u1ea9m"),
			withBackButton: !1
		}) : i.jsx(b("CometComposerHeader.react"), {
			onBack: v,
			title: g._("Chi ti\u1ebft \u1ea3nh"),
			withBackButton: !0
		});
		var x = i.useRef(new Set()),
			y = i.useMemo(function () {
				var a = {
					ALL_PHOTO_TOOLS: b("cometMediaEditorCanEditWithAnyToolEligibilityChecker").cometMediaEditorCanEditWithAnyToolEligibilityChecker,
					CAPTION: b("cometMediaEditorCaptionEligibilityChecker"),
					PREEXISTING: b("cometMediaEditorRotateEligibilityChecker"),
					UPLOADING: b("cometMediaEditorUploadingEligibilityChecker").cometMediaEditorUploadingEligibilityChecker
				};
				return b("getCometMediaEditorEligibility")(a, o, e)
			}, [o, e]);
		b("shallowEqual")(x.current, y) || (x.current = y);
		return i.jsxs("div", {
			className: (h || (h = b("stylex")))([d && j.dialog, !d && j.fullscreen]),
			ref: k,
			children: [a, i.jsx("div", {
				className: h([d && j.photoEditorDialogContainer, !d && j.photoEditorFullscreenContainer]),
				children: i.jsx(b("CometMediaEditorEligibilityContext").Provider, {
					value: x.current,
					children: i.jsx(b("CometMediaEditorSaverContext").Provider, {
						value: q,
						children: i.jsx(b("MediaEditorViewStateReducerContext").Provider, {
							value: n,
							children: i.jsx(b("MediaEditorViewStateContext").Provider, {
								value: o,
								children: i.jsx(b("MediaEditorViewStateDispatcherContext").Provider, {
									value: p,
									children: i.jsx(b("CometMediaViewerLayoutSkeleton.react"), {
										leftRail: i.jsx(b("BaseMultiStepContainer.react"), {
											children: function (a) {
												return m ? i.jsx(b("CometVideoEditorToolbar.react"), {
													afterSaveCallBack: f,
													onBack: function () {
														v()
													},
													pushPage: a,
													videoID: s
												}) : i.jsx(b("CometPhotoEditorToolbar.react"), {
													onBack: v,
													onForceBack: f,
													photoID: r.data.id,
													pushPage: a
												})
											}
										}),
										children: r.useCDNPreview && r.fileType !== "VIDEO" ? i.jsx(b("CometPlaceholder.react"), {
											fallback: c,
											children: i.jsx(b("CometPhotoEditorEditedPhotoViewer.react"), {
												containerRef: k,
												hasNext: o.index < e.length - 1,
												id: r.data.id,
												mediaAttachment: r,
												nextMediaAttachment: l,
												onNavigateAway: u,
												prevMediaAttachment: w
											})
										}) : c
									})
								})
							})
						})
					})
				})
			})]
		}, o.index)
	}
	c = b("withComposerViewStatePart")(a, function (a) {
		return {
			mediaAttachments: a.mediaAttachments,
			videoAttachmentMetadata: b("CometVideoEditorUtils.react").getVideoAttachmentMetaDataFromComposerState(a)
		}
	});
	e.exports = c
}), null);