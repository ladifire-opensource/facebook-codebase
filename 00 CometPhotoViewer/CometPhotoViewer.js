__d("CometPhotoViewer.react", ["fbt", "Actor", 
	"CometAIProductTagSuggestionsUtil.react", 
	"CometHero.react", "CometImage.react", 
	"CometMediaViewerStage.react",
	 "CometPagelet.react", 
	 "CometPhotoTaggingConstants", 
	 "CometPhotoViewerImageSuspense", 
	 "CometPhotoViewerResponsiveInnerWrapper.react", 
	 "CometPhotoViewerViewStateContext", 
	 "CometPhotoViewerViewStateDispatcherContext",
	  "CometPlaceholder.react", "CometRelay", 
	  "CometRouteParams", "CometRouteRenderType", 
	  "CometTheme.react", "CometVisualCompletionAttributes", 
	  "CometWarningScreenContext", 
	  "JSResourceForInteraction", "React", 
	  "TetraButton.react", "TetraText.react",
	   "WebSession", "deferredLoadComponent", 
	   "gkx", "recoverableViolation", "requireCond", 
	   "requireDeferred", "requireDeferredForDisplay", 
	   "stylex", "useCometLazyDialog", "useCurrentRoute", 
	   "useMediaViewerVPVDLogger", "useMergeRefs", 
	   "useStoryViewabilityLogger", "cr:1685690", 
	   "cr:1685691", "CometPhotoViewer_photo.graphql", 
	   "NumAiSuggestionsBubbleImpressionFalcoEvent", 
	   "ProductTagPhotoViewerDoneClickFalcoEvent"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = b("requireDeferred")("CometMediaTagFalcoEvent");
	c = b("requireDeferred")("CometPhotoTagLayer.react");
	d = b("requireDeferredForDisplay")("CometPhotoViewerTopRightIcons.react");
	var k = b("deferredLoadComponent")(c),
		l = b("deferredLoadComponent")(d),
		m = b("JSResourceForInteraction")("CometPhotoViewerProductTagEducationDialog.react").__setRef("CometPhotoViewer.react");

	function n(a) {
		return (a || []).some(function (a) {
			a = a.projection_type;
			return a === "tiled_cubemap"
		})
	}

	function o(a) {
		return (a || []).some(function (a) {
			a = a.projection_type;
			return a === "three_d"
		})
	}
	var p = h !== void 0 ? h : h = b("CometPhotoViewer_photo.graphql");

	function a(a) {
		var c, d, e, f, h, q, r, s, t, u = i.useContext(b("CometPhotoViewerViewStateDispatcherContext")),
			v = i.useContext(b("CometPhotoViewerViewStateContext")),
			w = b("useCometLazyDialog")(m),
			x = w[0];
		w = b("Actor").useActor();
		var y = w[0];
		w[1];
		w = a.origHeight;
		var z = a.origSrc,
			A = a.origWidth,
			B = a.photo,
			C = a.photoTagLayerQueryReference,
			D = a.showTag,
			E = D === void 0 ? !1 : D;
		D = a.storyRenderLocation;
		var F = babelHelpers.objectWithoutPropertiesLoose(a, ["origHeight", "origSrc", "origWidth", "photo", "photoTagLayerQueryReference", "showTag", "storyRenderLocation"]),
			G = b("CometRelay").useFragment(p, B);
		B = i.useCallback(function () {
			u({
				tagData: {
					isProductTagging: !1,
					tagModeEnabled: !1
				},
				type: "UPDATE_TAG_DATA"
			})
		}, [u]);
		var H = G == null ? void 0 : (c = G.image) == null ? void 0 : c.uri,
			I = G == null ? void 0 : G.id,
			J = G == null ? void 0 : (c = G.owner) == null ? void 0 : c.id;
		c = (c = G == null ? void 0 : (c = G.tags) == null ? void 0 : c.edges) != null ? c : [];
		var K = i.useRef(new Set(c.map(function (a) {
				return a == null ? void 0 : (a = a.node) == null ? void 0 : a.name
			}))),
			L = G == null ? void 0 : G.created_time,
			M = G == null ? void 0 : (c = G.container_story) == null ? void 0 : c.post_id;
		c = (G == null ? void 0 : G.can_viewer_add_tags) === !0;
		d = G == null ? void 0 : (d = G.cix_screen) == null ? void 0 : d.view_model;
		var N = i.useMemo(function () {
			return {
				authorId: J,
				createdTime: L,
				fbid: I,
				source: 6,
				storyContainerId: M
			}
		}, [J, L, I, M]);
		N = b("useMediaViewerVPVDLogger")(N);
		var O = N[0],
			P = N[1];
		N = G == null ? void 0 : (N = G.container_story) == null ? void 0 : N.encrypted_tracking;
		e = G == null ? void 0 : (e = G.container_story) == null ? void 0 : e.viewability_config;
		f = (f = G == null ? void 0 : G.container_story) != null ? f : {};
		f = f.client_view_config;
		f = {
			can_delay_log_impression: f == null ? void 0 : f.can_delay_log_impression,
			use_banzai_signal_imp: f == null ? void 0 : f.use_banzai_signal_imp,
			use_banzai_vital_imp: f == null ? void 0 : f.use_banzai_vital_imp
		};
		f = b("useStoryViewabilityLogger")({
			clientViewConfig: f,
			disabledViewabilityEventTypes: [5],
			encryptedTracking: N,
			position: 0,
			viewabilityConfig: e
		});
		N = f.ref;
		e = b("useMergeRefs")(O, N);
		f = b("CometPhotoViewerResponsiveInnerWrapper.react").useCometPhotoViewerContainerStyles();
		var Q = b("CometWarningScreenContext").useIsOverlayShown();
		O = b("CometAIProductTagSuggestionsUtil.react").getUntaggedKnownTags(G, v.knownAITags);
		N = b("CometAIProductTagSuggestionsUtil.react").getUntaggedUnknownTags(G, v.unknownAITags);
		var R = O.length + N.length,
			S = i.useRef(function () {
				b("NumAiSuggestionsBubbleImpressionFalcoEvent").log(function () {
					var a;
					return {
						creator_id: G == null ? void 0 : (a = G.owner) == null ? void 0 : a.page_id,
						media_id: I,
						media_type: "photo",
						platform: "comet",
						referral_source: "post_viewer"
					}
				})
			});
		i.useEffect(function () {
			R > 0 && (S.current && S.current())
		}, [R]);
		O = function () {
			var a;
			u({
				tagData: {
					isProductTagging: !1,
					tagModeEnabled: !1
				},
				type: "UPDATE_TAG_DATA"
			});
			if (I == null) {
				b("recoverableViolation")("photo id can not be null", "comet_feed");
				return
			}
			a = (a = G == null ? void 0 : (a = G.tags) == null ? void 0 : a.edges) != null ? a : [];
			a = a.map(function (a) {
				return a == null ? void 0 : (a = a.node) == null ? void 0 : a.name
			});
			var c = b("WebSession").getId(),
				d = K.current.size ? a.filter(function (a) {
					return !K.current.has(a)
				}) : a;
			T ? b("ProductTagPhotoViewerDoneClickFalcoEvent").log(function () {
				return {
					container_post_id: M,
					creator_id: y,
					media_id: I,
					media_type: "photo",
					platform: "comet",
					referral_source: "post_viewer"
				}
			}) : j.onReady(function (a) {
				a.log(function () {
					return {
						media_fbid: I,
						num_users_tagged: d.length,
						session_id: c
					}
				})
			});
			K.current = new Set(a)
		};
		N = Boolean(G == null ? void 0 : (N = G.tags) == null ? void 0 : N.edges.some(function (a) {
			return !(a == null ? void 0 : (a = a.tag) == null ? void 0 : a.is_product_tag)
		}));
		h = ((G == null ? void 0 : (h = G.photo_product_tags) == null ? void 0 : h.length) || 0) > 0;
		q = Boolean(G == null ? void 0 : (q = G.owner) == null ? void 0 : q.page_shop_has_taggable_products) && Boolean(G == null ? void 0 : (q = G.owner) == null ? void 0 : q.is_viewer_admin);
		r = G == null ? void 0 : (r = G.owner) == null ? void 0 : r.additional_profile_has_taggable_products;
		r = r !== null && r !== void 0 && b("gkx")("1733965") ? Boolean(r) && y === (G == null ? void 0 : (r = G.owner) == null ? void 0 : r.user_id) : q && Boolean((G == null ? void 0 : (r = G.owner) == null ? void 0 : r.page_id) != null) && y === (G == null ? void 0 : (r = G.owner) == null ? void 0 : r.page_id);
		h = N || !h && !N && !q;
		var T = r && !N;
		q = b("CometRouteParams").useRouteParams();
		r = b("useCurrentRoute")();
		r = (N = r == null ? void 0 : r.transparent) != null ? N : !1;
		var U = q.aymt_channel !== null && q.aymt_channel !== void 0,
			V = i.useRef(!1);
		i.useEffect(function () {
			U && b("gkx")("1818047") && (V.current || x({})), V.current = !0
		});
		N = b("CometRouteRenderType").useIsPushView();
		q = b("CometWarningScreenContext").useParentRenderInstructions();
		var W = G == null ? void 0 : (s = G.image) == null ? void 0 : s.width,
			X = G == null ? void 0 : (s = G.image) == null ? void 0 : s.height;
		s = i.useMemo(function () {
			if (G == null || H == null || W == null || X == null) return null;
			var a = i.jsx(b("CometImage.react"), {
				height: X,
				src: H,
				width: W
			}, b("gkx")("1778518") ? void 0 : H);
			if (b("cr:1685690") != null && b("gkx")("1680758") && n(G == null ? void 0 : G.immersive_photo_encodings)) return i.jsx(b("cr:1685690"), {
				fallback: a,
				photo: G
			});
			else if (b("cr:1685691") != null && b("gkx")("1680759") && o(G == null ? void 0 : G.immersive_photo_encodings)) return i.jsx(b("cr:1685691"), {
				fallback: a,
				photo: G
			})
		}, [H, X, G, W]);
		if (H == null) {
			b("recoverableViolation")("Error loading media. More investigation is needed, might be an invalid photo, a special type of MediaSet, or something else.", "comet_ui");
			return g._("Kh\u00f4ng c\u00f3 \u1ea3nh n\u00e0o h\u1ee3p l\u1ec7 \u0111\u1ec3 hi\u1ec3n th\u1ecb.")
		}
		t = !r || !N ? (t = z) != null ? t : H : null;
		t = t != null && t !== "" ? {
			backgroundSrc: t
		} : null;
		var Y = q === "CLIP_TO_MEDIA",
			Z = d != null ? i.jsx(b("CometRelay").MatchContainer, {
				match: d,
				props: {
					alwaysShowDetails: !0,
					data: d,
					isFullScreenMediaPlayerStyle: !0,
					mediaUri: H,
					surface: "photo_viewer"
				}
			}) : null;
		q = i.jsx(b("CometPagelet.react").Placeholder, {
			className: f,
			fallback: z != null ? i.jsx(b("CometPhotoViewerResponsiveInnerWrapper.react").CometPhotoViewerPlaceholderWrapper, {
				height: w,
				imageUri: z,
				ref: e,
				showPlaceholderImage: z != null && A != null && w != null && !Q,
				width: A
			}) : i.jsx("div", {
				className: f,
				ref: e,
				children: i.jsx(b("CometPhotoViewerResponsiveInnerWrapper.react").CometPhotoViewerImageWrapper, {
					imageComponentWithXStyle: function (a) {
						return i.jsxs(i.Fragment, {
							children: [P, !Q && i.jsx(b("CometImage.react"), {
								src: H,
								testid: void 0,
								xstyle: a
							}, b("gkx")("1778518") ? void 0 : H)]
						})
					}
				})
			}),
			name: "MediaViewerPhoto",
			pageletType: "media",
			ref: e,
			children: s != null ? s : i.jsx(b("CometPhotoViewerResponsiveInnerWrapper.react").CometPhotoViewerImageWrapper, {
				imageComponent: function (a) {
					return i.jsxs(i.Fragment, {
						children: [P, i.jsx(b("CometHero.react"), {
							description: "MainPhoto"
						}), i.jsx(b("CometPhotoViewerImageSuspense"), {
							className: a,
							"data-testid": void 0,
							src: H
						}, b("gkx")("1778518") ? void 0 : H), Y && Z, E && C != null ? i.jsx(b("CometPlaceholder.react"), {
							fallback: null,
							children: i.jsx("div", babelHelpers["extends"]({}, b("CometVisualCompletionAttributes").IGNORE, {
								className: "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 i09qtzwb" + (v.tagModeEnabled ? "" : " hzruof5a"),
								children: i.jsx(k, {
									isTaggingProducts: v.isProductTagging,
									photoTagLayerQueryReference: C,
									tagBoxSize: b("CometPhotoTaggingConstants").TAGGING_BOX_SIZE,
									tagModeEnabled: v.tagModeEnabled
								})
							}))
						}) : null]
					})
				}
			})
		}, b("gkx")("1778518") ? void 0 : H);
		d = v.isProductTagging ? "btwxx1t3 j83agx80 bp9cbjyn" : "cj5g2342 kfkz5moi pmk7jnqg";
		z = v.isProductTagging ? g._("Nh\u1ea5p v\u00e0o \u1ea3nh \u0111\u1ec3 b\u1eaft \u0111\u1ea7u g\u1eafn th\u1ebb s\u1ea3n ph\u1ea9m") : g._("Nh\u1ea5p v\u00e0o \u1ea3nh \u0111\u1ec3 b\u1eaft \u0111\u1ea7u g\u1eafn th\u1ebb");
		w = E && C != null && c === !0 && !s;
		return i.jsxs("div", {
			className: "l9j0dhe7 buofh1pr cbu4d94t j83agx80",
			"data-testid": void 0,
			children: [i.jsx(b("CometMediaViewerStage.react"), babelHelpers["extends"]({}, t, {
				backgroundColor: r && N ? "dark" : "default",
				initialTracePolicy: a.initialTracePolicy,
				onNavigatePhoto: B,
				storyRenderLocation: D,
				subOrigin: a.subOrigin
			}, F, {
				children: q
			})), Q ? null : i.jsx(l, {
				authorId: J,
				canTag: w,
				fromAYMTRetroTagNotification: U,
				numNewAISuggestions: R,
				photoID: I,
				shouldShowPeopleTagButton: h,
				shouldShowProductTagButton: T,
				storyContainerId: M
			}), w && v.tagModeEnabled ? i.jsx(b("CometTheme.react"), {
				className: "k4urcfbm pmk7jnqg hzruof5a jfpizvyy taijpn5t fdipuqhw j83agx80 i09qtzwb kpb67iw4 aovydwv3",
				element: "div",
				theme: "dark",
				children: i.jsxs("div", {
					className: d,
					children: [i.jsx("div", {
						className: "rv4hoivh j83agx80 bp9cbjyn",
						children: i.jsx("div", {
							className: T !== !0 ? "ihqw7lf3" : null,
							children: i.jsx(b("TetraText.react"), {
								color: "primary",
								numberOfLines: 1,
								type: "headline4",
								children: z
							})
						})
					}), i.jsx("div", {
						className: "oqq733wu",
						children: i.jsx(b("TetraButton.react"), {
							label: g._("G\u1eafn th\u1ebb xong"),
							onPress: O,
							type: "primary"
						})
					})]
				})
			}) : null, !Y && Z]
		})
	}
}), null);