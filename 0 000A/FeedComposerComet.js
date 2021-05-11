__d("FeedComposerComet.react", ["ix", "fbt", "BaseMultiStepContainer.react", "CometComposer.react", "CometComposerIPSPlugin.react", "CometComposerMediaDropTarget.react", "CometComposerMinutiaeBar.react", "CometComposerMinutiaeBarLoading.react", "CometComposerPreAttachmentArea.react", "CometComposerPrivacyScope.react", "CometComposerPushPageContext", "CometComposerSavingIndicatorMask.react", "CometComposerServerErrorMessage.react", "CometComposerSubmitButton.react", "CometComposerSubmitButtonLayout.react", "CometDefaultPrivacyNux.react", "CometHero.react", "CometPlaceholder.react", "CometRelay", "CometToasterStateManager", "CometTrackingNodeProvider.react", "ComposerDefaultPrivacyUtils", "FeedComposerCometBody.react", "FeedComposerCometToolbar.react", "JSResourceForInteraction", "React", "ServerHTML.react", "SilenceableErrorMessageUtils", "TCometComposerTarget", "TetraIcon.react", "cometComposerAttachmentsEligibilityChecker", "cometComposerEditingEligibilityChecker", "cometComposerFooterAttachmentsEligibilityChecker", "cometComposerFormattedTextEligibilityChecker", "cometComposerTaggerEligibilityChecker", "cometComposerValidateMediaLimit", "cometComposerValidateMediaUploadSuccess", "cometComposerValidatePhoto3dAttachment", "cometComposerValidateStatusTextLength", "cometPushToast", "decorateMultiStepContainerPushPage", "fbicon", "feedStoryLiveInsertUpdater", "filterNulls", "getDeferredComposerLogger", "getDeferredComposerTransformer", "gkx", "lazyLoadComponent", "requireCond", "requireDeferred", "stylex", "useFeedComposerCometDialog", "useHandleErrorBySettingState", "useIPSCometComposerCallout", "useResumableComposerViewState", "uuid", "cr:1748165", "cr:1606271", "cr:1575126", "cr:1252280", "cr:1575921", "cr:1823764", "FeedComposerComet_profile.graphql", "FeedComposerComet_composer.graphql", "FeedComposerComet_scope.graphql", "FeedComposerComet_defaultprivacy.graphql", "FeedComposerComet_viewer.graphql"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j, k, l, m, n, o = b("React"),
		p = (c = b("requireDeferred"))("cometComposerAMACreationLogger"),
		q = c("cometComposerLogger"),
		r = c("cometComposerMediaUploadLogger"),
		s = c("cometComposerQuiltsCreationLogger");
	d = c("composerActivityMinutiaeTransform");
	f = c("composerAttachmentAreaFeedTransform");
	var t = c("composerAudienceFeedTransform"),
		u = c("composerBrandedContentTransform"),
		v = c("composerFooterAttachmentAreaFeedTransform"),
		w = c("composerFormattedTextTransform"),
		x = c("composerLocationMinutiaeTransform"),
		y = c("composerMessageFeedTransform"),
		z = c("composerPreAttachmentAreaFeedTransform"),
		A = c("composerTrackingTransform"),
		B = c("composerWithTagTransform"),
		C = c("composerWoodhengeSupportTransform");
	c = c("fundraiserForStoryTransform");
	var D = b("lazyLoadComponent")(b("JSResourceForInteraction")("ProfileCometComposerFunFactsAttachmentArea.react").__setRef("FeedComposerComet.react")),
		E = 4e3,
		F = {
			error: {
				marginBottom: "fi9g468h",
				marginEnd: "wkznzc2l",
				marginStart: "dhix69tm"
			}
		},
		G = b("filterNulls")([(n = b("getDeferredComposerTransformer"))(A), n(t), n(y), n(B), n(d), n(x), n(w), n(z), n(C), n(v), n(c), b("cr:1575921")]),
		H = [n(f), n(u)].concat(G),
		aa = {
			mediaAttachment: b("cr:1252280"),
			mediaLimit: b("cometComposerValidateMediaLimit"),
			mediaUpload: b("cometComposerValidateMediaUploadSuccess"),
			photo3dAttachment: b("cometComposerValidatePhoto3dAttachment"),
			textLimit: b("cometComposerValidateStatusTextLength")
		};

	function a(a, c) {
		var d, e, f = a.askMeAnythingVisibleOnLoad,
			n = f === void 0 ? !1 : f,
			t = a.beginningViewState;
		f = a.composer$key;
		var u = a.composerType,
			v = a.defaultprivacy$key,
			w = a.feelingTaggerVisibleOnLoad,
			x = w === void 0 ? !1 : w,
			y = a.headerComponent,
			z = a.isViewerFeed;
		w = a.locationTaggerVisibleOnLoad;
		var A = w === void 0 ? !1 : w;
		w = a.onBeforeViewStateChange;
		var B = a.onClose,
			C = a.onSave,
			I = a.onSaveError,
			J = a.onSubmit,
			ba = a.privacySelectorRenderLocation,
			K = a.profile$key,
			L = a.quiltsComposerVisibleOnLoad,
			ca = L === void 0 ? !1 : L;
		L = a.renderLocation;
		L = L === void 0 ? "homepage_stream" : L;
		var M = a.scope$key,
			da = a.unalteredBeginningViewState,
			N = a.viewer$key;
		a = a.withTaggerVisibleOnLoad;
		var ea = a === void 0 ? !1 : a,
			O = b("CometRelay").useFragment(i !== void 0 ? i : i = b("FeedComposerComet_profile.graphql"), K),
			fa = b("CometRelay").useFragment(j !== void 0 ? j : j = b("FeedComposerComet_composer.graphql"), f);
		a = O.id;
		var P = b("CometRelay").useFragment(k !== void 0 ? k : k = b("FeedComposerComet_scope.graphql"), M);
		K = b("CometRelay").useRefetchableFragment(l !== void 0 ? l : l = b("FeedComposerComet_defaultprivacy.graphql"), v);
		f = K[0];
		var ga = K[1];
		M = b("CometRelay").useFragment(m !== void 0 ? m : m = b("FeedComposerComet_viewer.graphql"), N);
		var ha = b("ComposerDefaultPrivacyUtils").isDefaultPrivacyEnabled && (f == null ? void 0 : (v = f.default_privacy_user) == null ? void 0 : v.has_opt_in) === !1;
		K = o.useState(!1);
		var Q = K[0],
			R = K[1];
		N = b("useHandleErrorBySettingState")();
		var S = N[0],
			ia = N[1],
			ja = o.useRef(null);
		f = o.useTransition();
		var ka = f[0],
			la = function(a) {
				ka(function() {
					ga({}, {
						fetchPolicy: "network-only"
					})
				})
			},
			T = o.useRef(b("gkx")("1000924"));
		v = b("useResumableComposerViewState")();
		var U = v.clearResumableViewState,
			V = v.getResumableViewState,
			W = v.saveResumableViewState;
		K = o.useCallback(function(a) {
			W(a)
		}, [W]);
		N = b("useFeedComposerCometDialog")({
			composerType: "feed",
			onBeforeClose: K,
			onSave: C,
			tracePolicy: "comet.composer.editFeedPost"
		});
		var X = N[0],
			Y = o.useCallback(function(a, b) {
				var c;
				c = (c = V()) != null ? c : void 0;
				U();
				X({
					beginningViewState: c
				});
				a != null && (b != null && b !== "" && a.expire(b))
			}, [U, V, X]);
		f = o.useCallback(function() {
			R(!1)
		}, []);
		v = o.useCallback(function() {
			R(!1)
		}, []);
		K = o.useCallback(function(a, b) {
			(!T.current === !0 || (b == null ? void 0 : b.disableOptimisticMediaPost) === !0) && (B && B());
			(a.story_create && a.story_create.story == null && a.story_create.story_id != null || a != null && a.story_edit != null && ((b = a.story_edit) == null ? void 0 : b.story) == null) && na();
			C && C()
		}, [B, C]);

		function ma(a, c) {
			a = a == null ? h._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. H\u00e3y th\u1eed \u0111\u0103ng l\u1ea1i sau.") : o.jsx(b("ServerHTML.react"), {
				blob: a
			});
			W(c);
			var d = b("CometToasterStateManager").getInstance();
			c = o.jsx(b("TetraIcon.react"), {
				"aria-label": h._("Ch\u1ec9nh s\u1eeda"),
				color: "white",
				icon: b("fbicon")._(g("477826"), 20),
				onPress: function() {
					return Y(d, e)
				}
			});
			var e = b("cometPushToast").cometPushToast({
				icon: c,
				message: a,
				onPress: function() {
					return Y(d, e)
				},
				testid: "CometStoriesReshareToast",
				truncateText: !1
			}, Infinity, d)
		}

		function na() {
			var a = h._("B\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n \u0111ang \u0111\u01b0\u1ee3c x\u1eed l\u00fd. Ch\u00fang t\u00f4i s\u1ebd th\u00f4ng b\u00e1o khi c\u00f3 th\u1ec3 xem b\u00e0i vi\u1ebft."),
				c = b("CometToasterStateManager").getInstance();
			ja.current = b("cometPushToast").cometPushToast({
				message: a,
				testid: "FeedCometVideoOptimisticPostingToast"
			}, E, c)
		}
		N = function(a, c) {
			ia(a), I && I(), !T.current === !0 || (c == null ? void 0 : c.disableOptimisticMediaPost) === !0 ? R(!1) : S && !b("SilenceableErrorMessageUtils").shouldHideErrorMessage(S) && ma(S.message, c)
		};
		d = (d = t == null ? void 0 : t.creationSessionID) != null ? d : b("uuid")();
		var Z = b("cr:1823764")({
			actorID: a,
			composerEntryPoint: "inline_composer",
			composerSourceSurface: "newsfeed",
			composerType: u,
			creationSessionID: d,
			onCompleted: K,
			onError: N,
			optimisticTransformers: G,
			optimisticUpdater: function(a, c) {
				return b("feedStoryLiveInsertUpdater")(a, c)
			},
			requestType: "FEED",
			transformers: H,
			updater: b("feedStoryLiveInsertUpdater"),
			variables: {
				UFI2CommentsProvider_commentsKey: "CometModernHomeFeedQuery",
				creationSessionID: d,
				feedLocation: "NEWSFEED",
				feedbackSource: 1,
				renderLocation: L
			}
		});
		K = o.useCallback(function(a) {
			R(!0), J && J(), T.current === !0 && a.disableOptimisticMediaPost !== !0 && (B && B()), Z(a)
		}, [B, Z, J]);
		N = function() {
			return R(!0)
		};
		L = {
			attachments: b("cometComposerAttachmentsEligibilityChecker"),
			footerAttachments: b("cometComposerFooterAttachmentsEligibilityChecker").cometComposerFooterAttachmentsEligibilityChecker,
			formattedText: b("cometComposerFormattedTextEligibilityChecker"),
			tagger: b("cometComposerTaggerEligibilityChecker")
		};
		!b("gkx")("1749453") && u === "edit" && (L = babelHelpers["extends"]({}, L, {
			edit: b("cometComposerEditingEligibilityChecker")
		}));
		var $ = b("gkx")("1663744") ? !0 : u !== "share",
			oa = [b("getDeferredComposerLogger")(q), b("getDeferredComposerLogger")(r), b("getDeferredComposerLogger")(p), b("getDeferredComposerLogger")(s)],
			pa = (e = b("cr:1575126")) != null ? e : o.Fragment;
		e = b("useIPSCometComposerCallout")();
		var qa = e.calloutRef;
		e = e.handleIPSResult;
		var ra = [o.jsx(b("CometComposerIPSPlugin.react"), {
			cometComposerIPSPlugin_viewer$key: M,
			onIPSClosedWithSelection: e,
			scopeRef: P
		}, "ipsPlugin")];
		return o.jsx(b("CometComposer.react"), {
			beginningViewState: babelHelpers["extends"]({}, t, {
				creationSessionID: d
			}),
			eligibilityCheckers: L,
			loggers: oa,
			onBeforeViewStateChange: w,
			onSubmitCommit: K,
			onSubmitHalt: f,
			onSubmitStart: N,
			onValidationErrors: v,
			ref: c,
			target: {
				id: a,
				type: b("TCometComposerTarget").ComposerTargetType.Feed
			},
			testid: void 0,
			unalteredBeginningViewState: da,
			validators: aa,
			children: function(a) {
				return o.jsx(b("BaseMultiStepContainer.react"), {
					fitContentWidth: !0,
					children: function(c) {
						return o.jsx(b("CometComposerPushPageContext").Provider, {
							value: b("decorateMultiStepContainerPushPage")(c),
							children: o.jsx(b("CometComposerMediaDropTarget.react"), {
								children: o.jsxs(pa, {
									children: [o.jsx(b("CometHero.react"), {
										description: "Composer",
										event: 30605316
									}), o.jsx(b("cr:1606271"), {
										header: o.jsxs(o.Fragment, {
											children: [y, o.jsxs(b("CometPlaceholder.react"), {
												fallback: o.jsx(b("CometComposerMinutiaeBarLoading.react"), {}),
												children: [o.jsx(b("CometHero.react"), {
													description: "MinutiaeBar",
													event: 30605316
												}), o.jsx(b("CometComposerMinutiaeBar.react"), {
													privacySelector: o.jsx("div", {
														ref: qa,
														children: o.jsx(b("CometComposerPrivacyScope.react"), {
															plugins: ra,
															privacySelectorRenderLocation: ba,
															scope: P,
															title: b("ComposerDefaultPrivacyUtils").isDefaultPrivacyEnabled ? h._("\u0110\u1ed1i t\u01b0\u1ee3ng c\u1ee7a b\u00e0i vi\u1ebft") : null
														})
													}),
													profile$key: O
												})]
											}), ha ? o.jsx(b("CometDefaultPrivacyNux.react"), {
												onClose: B,
												onPrivacyChange: la,
												scopeRef: P
											}) : null, o.jsx(b("CometComposerPreAttachmentArea.react"), {
												children: function(a) {
													switch (a) {
														case "FUN_FACT":
															return o.jsx(D, {})
													}
													return null
												}
											})]
										}),
										body: o.jsx(b("FeedComposerCometBody.react"), {
											composerType: u,
											isViewerFeed: z,
											onClose: B,
											placeholderText: t == null ? void 0 : t.placeholderTextOverride,
											profile$key: O
										}),
										footer: o.jsxs(o.Fragment, {
											children: [$ ? o.jsx(b("FeedComposerCometToolbar.react"), {
												askMeAnythingVisibleOnLoad: n,
												composer: fa,
												composerType: u,
												feelingTaggerVisibleOnLoad: x,
												locationTaggerVisibleOnLoad: A,
												onClose: B,
												quiltsComposerVisibleOnLoad: ca,
												withTaggerVisibleOnLoad: ea
											}) : null, O.publishing_tool_banner_profile != null ? o.jsx(b("CometPlaceholder.react"), {
												fallback: null,
												children: o.jsx(b("CometRelay").MatchContainer, {
													match: O.publishing_tool_banner_profile,
													props: {
														mediaAttachments: {},
														page: O.publishing_tool_banner_profile,
														videoLiteComposerEligible: !1
													}
												})
											}) : null, o.jsx(b("CometComposerSubmitButtonLayout.react"), {
												hasTopMargin: $,
												children: o.jsx(b("CometTrackingNodeProvider.react"), {
													trackingNode: 156,
													children: o.jsx(b("CometComposerSubmitButton.react"), {
														disabled: Q,
														label: (t == null ? void 0 : t.storyID) != null ? h._("L\u01b0u") : h._("\u0110\u0103ng"),
														onPress: a,
														testid: void 0
													})
												})
											}), o.jsx(b("CometComposerServerErrorMessage.react"), {
												errorMetadata: S,
												xstyle: F.error
											}), b("cr:1748165") != null && o.jsx(b("cr:1748165"), {
												xstyle: F.error
											})]
										})
									}), Q ? o.jsx(b("CometComposerSavingIndicatorMask.react"), {
										body: (t == null ? void 0 : t.storyID) ? h._("\u0110ang l\u01b0u") : h._("\u0110ang \u0111\u0103ng")
									}) : null]
								})
							})
						})
					}
				})
			}
		}, d)
	}
	A = o.forwardRef(a);
	e.exports = A
}), null);