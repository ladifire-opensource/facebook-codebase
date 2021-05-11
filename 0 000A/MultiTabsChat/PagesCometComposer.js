__d("PagesCometComposer.react", ["ix", "fbt", "BaseMultiStepContainer.react", 
	"CometAIProductTagEvaluationLoggingUtils", "CometComposer.react", "CometComposerAMAAttachmentAreaResource", 
	"CometComposerAttachmentArea.react", "CometComposerBloodDonationsAttachmentArea.react", 
	"CometComposerDialogLayout.react", "CometComposerFooterAttachmentArea.react", 
	"CometComposerFooterAttachmentPluginTypes", 
	"CometComposerLivingRoomAttachmentAreaContainerResource", 
	"CometComposerMediaAttachmentAreaResource", "CometComposerMediaDropTarget.react", 
	"CometComposerMinutiaeBar.react", "CometComposerMinutiaeBarLoading.react", 
	"CometComposerPushPageContext", "CometComposerSavingIndicatorMask.react", 
	"CometComposerServerErrorMessage.react", "CometComposerStatusAreaRelayWithSwatches.react",
	 "CometComposerSubmitButton.react", "CometComposerViewOnlyFeedAttachmentAreaResource", 
	 "CometComposerWoodhengeSupportAttachmentAreaResource", "CometPagePostEditFalcoEvent", 
	 "CometPhotoEditorAIProductTagSuggestionTrigger.react", "CometPlaceholder.react", 
	 "CometRelay", "CometRouteParams", "CometVideoEditorUploadProgress.react", 
	 "ComposerLinkAttachmentAreaResource", "ComposerLocationAttachmentAreaResource",
	  "ComposerPhoto3dAttachmentAreaResource", "FeedComposerCometAnimatedImageAttachmentAreaResource",
	  "FeedComposerCometFormattedTextArea.react", "FundraiserForStoryAttachmentAreaResource",
	   "JSResourceForInteraction", "LWICometComposerUtils", "PagesCometAdminCompletionMeterUtils", 
	   "PagesCometAdminOnboardingConstants", "PagesCometAdminOnboardingUtils", 
	   "PagesCometComposerFooterToggle.react", "PagesCometComposerPostPropagationWarningBanner.react", 
	   "PagesCometComposerPrivacySelector.react", "PagesCometComposerPublishingToolBanner.react",
	    "PagesCometComposerToolbarRelay3d.react", "PagesCometSocialLearningComposerModuleTitleInput.react",
	     "PagesMediaEligibilityChecker", "QuiltsCometComposerAttachmentAreaResource", "React", 
	     "SilenceableErrorMessageUtils", "TCometComposerTarget", "TetraIcon.react",
	      "XCometPageCommunityTabControllerRouteBuilder", "cometComposerAttachmentsEligibilityChecker",
	       "cometComposerEditingEligibilityChecker", "cometComposerFooterAttachmentsEligibilityChecker", 
	       "cometComposerFormattedTextEligibilityChecker", "cometComposerTaggerEligibilityChecker", 
	       "cometComposerValidateNoMediaCurrentlyUploading", "cometComposerValidatePhoto3dAttachment", 
	       "cometPushToast", "composerValidateGetMessagesMustContainMedia",
	        "composerValidateGetShowtimesMustContainMedia", "createComposerDeferredPlugin", 
	        "decorateMultiStepContainerPushPage", "fbicon", "getDeferredComposerLogger", 
	        "getDeferredComposerTransformer", "gkx", "lazyLoadComponent", "recoverableViolation",
	         "reduceComposerViewStateToCreationData", "requireCond", "requireDeferred", 
	         "socialLearningModuleTitleValidator", "stylex", "useCometRouterDispatcher", 
	         "useHashtagComposerDraftJSPlugin.react", "uuid", "cr:1384013", "cr:1772245",
	          "cr:1772246", "PagesCometComposer_page.graphql", "PagesCometComposer_profile.graphql",
	           "PagesCometComposer_query.graphql", "PagesCometComposer_autoBoostQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i, j, k, l, m, n, o = b("React"),
		aa = (c = b("requireDeferred"))("ComposerStoryCreateMutation"),
		ba = c("ComposerStoryEditMutation"),
		ca = c("cometComposerAMACreationLogger"),
		da = c("cometComposerLogger"),
		ea = c("cometComposerQuiltsCreationLogger");
	d = c("composerActivityMinutiaeTransform");
	f = c("composerAttachmentAreaFeedTransform");
	var p = c("composerAudienceFeedTransform"),
		q = c("composerBrandedContentTransform"),
		r = c("composerBreakingNewsTransform"),
		s = c("composerFeedAMATransform"),
		t = c("composerFooterAttachmentAreaFeedTransform"),
		u = c("composerFormattedTextTransform"),
		v = c("composerGetMessagesTransform"),
		w = c("composerGetShowtimesTransform"),
		x = c("composerGetWhatsAppMessagesTransform"),
		y = c("composerLocalAlertTransform"),
		z = c("composerLocationMinutiaeTransform"),
		A = c("composerMessageFeedTransform"),
		B = c("composerQuiltsPostTransform"),
		C = c("composerScheduledPostsTransform"),
		D = c("composerTargetedPrivacyTransform"),
		E = c("composerTrackingTransform"),
		F = c("composerWithTagTransform"),
		G = c("composerWoodhengeSupportTransform"),
		H = c("fundraiserForStoryTransform"),
		I = c("socialLearningModuleForStoryTransform"),
		fa = (m = b("lazyLoadComponent"))(b("JSResourceForInteraction")("ComposerGetShowtimesAttachmentArea.react").__setRef("PagesCometComposer.react")),
		ga = m(b("CometComposerMediaAttachmentAreaResource")),
		ha = m(b("JSResourceForInteraction")("CometComposerGetMessagesAttachmentArea.react").__setRef("PagesCometComposer.react")),
		ia = m(b("JSResourceForInteraction")("CometComposerGetWhatsAppMessagesAttachmentArea.react").__setRef("PagesCometComposer.react")),
		ja = m(b("FeedComposerCometAnimatedImageAttachmentAreaResource")),
		ka = m(b("FundraiserForStoryAttachmentAreaResource")),
		la = m(b("ComposerLocationAttachmentAreaResource")),
		ma = m(b("ComposerPhoto3dAttachmentAreaResource")),
		na = m(b("CometComposerLivingRoomAttachmentAreaContainerResource")),
		oa = m(b("CometComposerAMAAttachmentAreaResource")),
		pa = m(b("ComposerLinkAttachmentAreaResource")),
		qa = (n = b("createComposerDeferredPlugin"))(c("FeedComposerCometMentionsPlugin.react")),
		ra = n(c("CometComposerLinksPlugin.react")),
		sa = n(c("CometComposerMisinformationLinkDetectorPlugin.react")),
		ta = m(b("CometComposerViewOnlyFeedAttachmentAreaResource")),
		ua = m(b("CometComposerWoodhengeSupportAttachmentAreaResource")),
		va = m(b("QuiltsCometComposerAttachmentAreaResource")),
		wa = n(c("PagesComposerCometInterceptionPlugin.react")),
		J = [(m = b("getDeferredComposerTransformer"))(E), m(G), m(f), m(t), m(p), m(A), m(C), m(v), m(w), m(x), m(F), m(d), m(z), m(u), m(q), m(H), m(D), m(y), m(s), m(B), m(r), m(I)];

	function a(a, c) {
		var d = a.actorID,
			e = a.askMeAnythingVisibleOnLoad,
			f = e === void 0 ? !1 : e;
		e = a.autoBoostQuery$key;
		var m = a.beginningViewState,
			n = a.composerEntrypointRef,
			p = a.composerType,
			q = a.feelingTaggerVisibleOnLoad,
			r = q === void 0 ? !1 : q;
		q = a.friendTaggerVisibleOnLoad;
		var s = q === void 0 ? !1 : q,
			t = a.headerComponent,
			u = a.isViewerFeed;
		q = a.localAlertTaggerVisibleOnLoad;
		var v = q === void 0 ? !1 : q;
		q = a.locationTaggerVisibleOnLoad;
		var w = q === void 0 ? !1 : q,
			x = a.mediaUploadLoggingMetadata,
			y = a.onClose,
			z = a.onSave;
		q = a.page$key;
		var A = a.pageID,
			B = a.productTaggerVisibleOnLoad,
			C = B === void 0 ? !1 : B;
		B = a.profile$key;
		var D = a.query$key;
		a = a.votingAlertTaggerVisibleOnLoad;
		var E = a === void 0 ? !1 : a,
			F = b("CometRelay").useRelayEnvironment();
		a = b("CometRouteParams").useRouteParams();
		var G = o.useState(!1),
			H = G[0],
			I = G[1];
		G = o.useState(null);
		var xa = G[0],
			K = G[1];
		G = o.useState(b("uuid")());
		var L = G[0],
			M = G[1];
		G = o.useState(a.coupon_offer_id != null);
		var N = G[0],
			ya = G[1];
		a = o.useState(!1);
		var O = a[0],
			za = a[1],
			P = b("useCometRouterDispatcher")();
		G = {
			isGetMessagesPost: b("composerValidateGetMessagesMustContainMedia"),
			mediaAttachment: b("cometComposerValidateNoMediaCurrentlyUploading"),
			movieInfo: b("composerValidateGetShowtimesMustContainMedia"),
			photo3dAttachment: b("cometComposerValidatePhoto3dAttachment"),
			titleValidator: b("socialLearningModuleTitleValidator")
		};
		var Q = p === "edit";
		a = o.useCallback(function() {
			I(!1)
		}, []);
		var Aa = o.useCallback(function() {
				I(!1)
			}, []),
			R = b("CometRelay").useFragment(i !== void 0 ? i : i = b("PagesCometComposer_page.graphql"), q),
			Ba = b("CometRelay").useFragment(j !== void 0 ? j : j = b("PagesCometComposer_profile.graphql"), B),
			Ca = b("CometRelay").useFragment(k !== void 0 ? k : k = b("PagesCometComposer_query.graphql"), D),
			Da = b("CometRelay").useFragment(l !== void 0 ? l : l = b("PagesCometComposer_autoBoostQuery.graphql"), e),
			S = o.useMemo(function() {
				switch (n) {
					case "pages_news_feed":
						return {
							UFI2CommentsProvider_commentsKey: "PagesNewsFeedCometRootQuery", feedLocation: "PAGE", feedbackSource: 0, renderLocation: "pages_feed"
						};
					case "pages_social_learning":
						return {
							UFI2CommentsProvider_commentsKey: "CometSinglePageSocialLearningConsumptionRootQuery", feedLocation: "GROUP_LEARNING_COURSE_UNIT_FEED", feedbackSource: 0, renderLocation: "group_units"
						};
					default:
						return {
							UFI2CommentsProvider_commentsKey: "CometSinglePageContentContainerFeedQuery", feedLocation: "PAGE_TIMELINE", feedbackSource: 22, renderLocation: "timeline"
						}
				}
			}, [n]),
			T = R.can_viewer_create_content === !0 && d === A,
			Ea = R.is_page_faith_giving_eligible,
			U = T && n === "pages_feed" && b("gkx")("1584413"),
			Fa = U && b("gkx")("1859967"),
			V = o.useCallback(function() {
				b("cometPushToast").cometPushToast({
					action: {
						label: h._("Xem b\u00e0i vi\u1ebft"),
						onPress: function() {
							if (P != null) {
								var a;
								P.go(b("XCometPageCommunityTabControllerRouteBuilder").buildURL({
									vanity: (a = R.uri_token) != null ? a : ""
								}), {})
							}
						}
					},
					icon: o.jsx(b("TetraIcon.react"), {
						color: "positive",
						icon: b("fbicon")._(g("498146"), 20),
						size: 20
					}),
					message: h._("B\u1ea1n \u0111\u00e3 vi\u1ebft l\u00ean Trang c\u1ee7a {page-name}.", [h._param("page-name", R.name)])
				})
			}, [R.name, R.uri_token, P]),
			W = function(a, c, d, e, f) {
				c = b("CometRelay").ConnectionHandler.getConnection(c, e, f);
				if (c == null) return;
				e = a.getLinkedRecord(d);
				if (e == null) {
					c.invalidateRecord();
					return
				}
				b("CometRelay").ConnectionHandler.insertEdgeBefore(c, e)
			},
			X = b("cr:1772246")(),
			Y = o.useCallback(function(a, b, c, d) {
				var e;
				if (X && U && ((e = a.mediaAttachments) == null ? void 0 : e.length) === 1 && a.mediaAttachments[0].fileType === "VIDEO") {
					var f, g;
					a = (e = c == null ? void 0 : c.attachments) != null ? e : [];
					a = (e = a[0]) == null ? void 0 : e.video;
					e = a == null ? void 0 : a.additional_video_metadata;
					f = (f = a == null ? void 0 : a.id) != null ? f : "";
					e = {
						description: (g = c == null ? void 0 : (g = c.message) == null ? void 0 : g.text) != null ? g : "",
						isScheduled: (c == null ? void 0 : (g = c.unpublished_content_data) == null ? void 0 : g.unpublished_content_type) === "SCHEDULED" ? "1" : "0",
						tags: (c = JSON.stringify(e == null ? void 0 : e.videoTags)) != null ? c : "",
						thumbnail_file_id: (g = e == null ? void 0 : e.thumbnailFileID) != null ? g : "",
						thumbnail_type: (c = e == null ? void 0 : e.thumbnailType) != null ? c : "",
						title: (g = a == null ? void 0 : a.title) != null ? g : ""
					};
					c = X.logEvent;
					d ? c(b, {
						error_message: d.message,
						extraData: e,
						videoID: f
					}) : c(b, {
						extraData: e,
						videoID: f
					})
				}
			}, [X, U]);
		q = o.useCallback(function(a) {
			var c = a.storyID;
			b("CometPagePostEditFalcoEvent").log(function() {
				return {
					page_id: A
				}
			});
			var d = a.creationSessionID != null ? {
				logging: {
					composer_session_id: a.creationSessionID
				}
			} : void 0;
			Q && c != null ? b("reduceComposerViewStateToCreationData")(a, J, babelHelpers["extends"]({
				story_id: c
			}, d), function(a) {
				ba.onReady(function(c) {
					c = c.commit;
					c(F, a, {
						onCompleted: function() {
							I(!1), M(b("uuid")()), y && y(), z && z()
						},
						onError: function(a) {
							K(b("SilenceableErrorMessageUtils").getMetadataFromError(a)), I(!1)
						},
						variables: {
							feedLocation: S.feedLocation,
							renderLocation: S.renderLocation
						}
					})
				})
			}) : (b("CometAIProductTagEvaluationLoggingUtils").logAIProductTagsEvaluationData(A, a, !1), b("reduceComposerViewStateToCreationData")(a, J, babelHelpers["extends"]({
				source: "WWW"
			}, d), function(c) {
				var d = babelHelpers["extends"]({}, c);
				T || (d = babelHelpers["extends"]({}, d, {
					audience: {
						to_id: A
					}
				}));
				aa.onReady(function(c) {
					c = c.commit;
					b("cr:1772245") && Y(a, b("cr:1772245").POST_PUBLISH_ATTEMPT, d);
					c(F, d, {
						onCompleted: function(c) {
							var e;
							b("cr:1772245") && Y(a, b("cr:1772245").POST_SUCCESS, d);
							T || V();
							I(!1);
							M(b("uuid")());
							e = (e = c.story_create) == null ? void 0 : (e = e.story) == null ? void 0 : e.id;
							y && y(a, e);
							z && z();
							if (N || O) {
								var f;
								e = !1;
								f = (f = c.story_create) == null ? void 0 : (f = f.story) == null ? void 0 : f.legacy_story_hideable_id;
								if (f == null) {
									f = (c = c.story_create) == null ? void 0 : c.post_id;
									f != null && (e = !0)
								}
								f == null ? b("recoverableViolation")("No postID/story when boosting from composer!", "pages_lwi") : N ? b("LWICometComposerUtils").boostFromComposer(P, A, f, e) : O && b("LWICometComposerUtils").markPostEligibleForAutoBoost(F, A, f)
							}
						},
						onError: function(c) {
							K(b("SilenceableErrorMessageUtils").getMetadataFromError(c)), b("cr:1772245") && Y(a, b("cr:1772245").POST_FAILURE, d, c), I(!1)
						},
						updater: function(a) {
							var c = a.getRootField("story_create");
							if (c == null) return;
							var d = a.get(A);
							if (d == null) return;
							W(c, d, "timeline_feed_units_edge", "CometModernPageFeed_page_timeline_feed_units");
							W(c, d, "pages_news_feed_edge", "CometPagesNewsFeed_page_news_feed", {
								referrer: "NONE",
								surface: "TAB"
							});
							b("PagesCometAdminCompletionMeterUtils").updateStatusForItemType(a, {
								actionType: "create_welcome_post",
								newStatus: "completed",
								pageID: A
							});
							b("PagesCometAdminOnboardingUtils").updateOnboardingStatusForField(a, {
								actionItemField: b("PagesCometAdminOnboardingConstants").PAGE_ONBOARDING_MAKE_POST_GRAPHQL_FIELD,
								newValue: !0,
								pageID: A
							})
						},
						variables: babelHelpers["extends"]({
							creationSessionID: L
						}, S)
					})
				})
			}))
		}, [N, F, S, T, Q, Y, O, y, z, V, A, P, L]);
		B = {
			attachments: b("cometComposerAttachmentsEligibilityChecker"),
			footerAttachments: b("cometComposerFooterAttachmentsEligibilityChecker").cometComposerFooterAttachmentsEligibilityChecker,
			formattedText: b("cometComposerFormattedTextEligibilityChecker"),
			tagger: b("cometComposerTaggerEligibilityChecker")
		};
		D = [b("getDeferredComposerLogger")(da), b("getDeferredComposerLogger")(ca), b("getDeferredComposerLogger")(ea)];
		var Z = p === "page" || p === "edit";
		e = o.useCallback(function() {
			I(!0)
		}, []);
		d = b("useHashtagComposerDraftJSPlugin.react")(R);
		var Ga = d ? o.jsx(d, {}) : null;
		Q && (B = babelHelpers["extends"]({}, B, {
			edit: b("cometComposerEditingEligibilityChecker"),
			mediaOnEdit: b("PagesMediaEligibilityChecker")
		}));
		var Ha = m == null ? void 0 : (d = m.attachmentArea) == null ? void 0 : d.activeAttachmentType,
			$ = n === "pages_social_learning",
			Ia = ((m == null ? void 0 : m.mediaAttachments) || []).length > 0;
		return o.jsx(b("CometComposer.react"), {
			beginningViewState: m,
			eligibilityCheckers: B,
			loggers: D,
			onSubmitCommit: q,
			onSubmitHalt: a,
			onSubmitStart: e,
			onValidationErrors: Aa,
			ref: c,
			target: {
				id: A,
				type: b("TCometComposerTarget").ComposerTargetType.Page
			},
			validators: G,
			children: function(a) {
				return o.jsx(b("BaseMultiStepContainer.react"), {
					fitContentWidth: !0,
					children: function(c) {
						return o.jsx(b("CometComposerPushPageContext").Provider, {
							value: b("decorateMultiStepContainerPushPage")(c),
							children: o.jsxs(b("CometComposerMediaDropTarget.react"), {
								children: [o.jsxs("div", {
									className: "l9j0dhe7",
									children: [o.jsx(b("CometVideoEditorUploadProgress.react"), {}), t]
								}), o.jsx(b("CometComposerDialogLayout.react"), {
									header: o.jsxs(o.Fragment, {
										children: [o.jsx(b("CometPlaceholder.react"), {
											fallback: o.jsx(b("CometComposerMinutiaeBarLoading.react"), {}),
											children: o.jsx(b("CometComposerMinutiaeBar.react"), {
												privacySelector: o.jsx(b("PagesCometComposerPrivacySelector.react"), {
													canViewerSeeTargetingUI: (c = R.can_viewer_see_targeting_ui) != null ? c : !1,
													data: Ca,
													disabled: Q
												}),
												profile$key: Ba
											})
										}), T && $ && o.jsx(b("PagesCometSocialLearningComposerModuleTitleInput.react"), {})]
									}),
									body: o.jsx("div", {
										className: "l9j0dhe7 ss3p3tc4 cbu4d94t j83agx80",
										children: o.jsxs(b("FeedComposerCometFormattedTextArea.react"), {
											children: [o.jsx(b("CometComposerStatusAreaRelayWithSwatches.react"), {
												autoFocus: !$,
												isViewerFeed: u,
												onClose: y,
												profile$key: R
											}), o.jsx(qa, {}), Ga, o.jsx(ra, {}), o.jsx(sa, {
												composerType: (c = p) != null ? c : "page"
											}), T ? o.jsx(wa, {
												page$key: R,
												pageID: A,
												sessionID: L,
												submitForm: a
											}) : null, o.jsx("div", {
												className: "scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys",
												children: o.jsx(b("CometComposerAttachmentArea.react"), {
													isEditing: Q,
													children: function(a) {
														switch (a) {
															case "AMA":
																return o.jsx(oa, {});
															case "ANIMATED_IMAGE":
																return o.jsx(ja, {});
															case "GET_MESSAGES":
																return o.jsx(ha, {
																	mediaUploadLoggingMetadata: x,
																	pageCategoryName: R.category_name,
																	pageName: R.name
																});
															case "GET_WHATSAPP_MESSAGES":
																return o.jsx(ia, {
																	mediaUploadLoggingMetadata: x,
																	pageCategoryName: R.category_name,
																	pageName: R.name
																});
															case "LOCATION":
																return o.jsx(la, {});
															case "LINK":
															case "SHARE":
																return o.jsx(pa, {});
															case "LIVING_ROOM":
																return o.jsx(na, {
																	pageID: A
																});
															case "MEDIA":
																return o.jsxs(o.Fragment, {
																	children: [o.jsx(ga, {
																		mediaUploadLoggingMetadata: {
																			composerEntrypoint: "pages_feed",
																			source: "composer"
																		},
																		videoLiteComposerEligible: U
																	}), b("gkx")("1555354") && o.jsx(b("CometPhotoEditorAIProductTagSuggestionTrigger.react"), {
																		isProfileComposer: !1
																	})]
																});
															case "NONPROFIT":
																return o.jsx(ka, {
																	isPageFaithGivingEligible: Ea
																});
															case "PHOTO3D":
																return o.jsx(ma, {});
															case "QUILT":
																return o.jsx(va, {
																	mediaUploadLoggingMetadata: x
																});
															case "WOODHENGE_SUPPORT":
																return o.jsx(ua, {
																	pageID: A
																});
															case "VIEW_ONLY_FEED_ATTACHMENT":
																return o.jsx(ta, {
																	feedLocation: "PAGE"
																});
															case "GET_SHOWTIMES":
																return o.jsx(fa, {
																	mediaUploadLoggingMetadata: x
																})
														}
														return null
													}
												})
											}), T && o.jsx(b("CometComposerFooterAttachmentArea.react"), {
												children: function(a) {
													switch (a) {
														case b("CometComposerFooterAttachmentPluginTypes").BLOOD_DONATIONS:
															return o.jsx(b("CometComposerBloodDonationsAttachmentArea.react"), {
																page: R
															});
														default:
															return null
													}
												}
											})]
										})
									}),
									footer: o.jsxs(o.Fragment, {
										children: [Z ? o.jsx(b("PagesCometComposerToolbarRelay3d.react"), {
											askMeAnythingVisibleOnLoad: f,
											feelingTaggerVisibleOnLoad: r,
											friendTaggerVisibleOnLoad: s,
											hasMediaAttachment: Ia,
											isActorAdmin: T,
											isEditing: Q,
											localAlertTaggerVisibleOnLoad: v,
											locationTaggerVisibleOnLoad: w,
											onClose: y,
											page$key: R,
											productTaggerVisibleOnLoad: C,
											sessionID: L,
											votingAlertTaggerVisibleOnLoad: E
										}) : null, T && Ha !== "SHARE" && o.jsx(b("PagesCometComposerFooterToggle.react"), {
											boostAfterPosting: N,
											markEligibleForBoosting: O,
											query$key: Da,
											setBoostAfterPosting: ya,
											setMarkEligibleForBoosting: za,
											videoLiteComposerBoostEnabled: Fa,
											videoLiteComposerEligible: U
										}), T && n !== "pages_social_learning" && o.jsx(b("PagesCometComposerPublishingToolBanner.react"), {
											page: R,
											videoLiteComposerEligible: U
										}), o.jsx(b("PagesCometComposerPostPropagationWarningBanner.react"), {
											page$key: R
										}), o.jsx("div", {
											className: "k4urcfbm dati1w0a hv4rvrfc i1fnvgqd rq0escxv" + (Z && !T ? " discj3wi" : ""),
											children: o.jsx(b("CometComposerSubmitButton.react"), {
												disabled: H,
												label: (c = m == null ? void 0 : m.submitText) != null ? c : h._("\u0110\u0103ng"),
												onPress: a,
												videoLiteComposerEligible: U
											})
										}), H ? o.jsx(b("CometComposerSavingIndicatorMask.react"), {}) : null, o.jsx("div", {
											className: "dhix69tm wkznzc2l",
											children: o.jsx(b("CometComposerServerErrorMessage.react"), {
												errorMetadata: xa
											})
										}), T && b("cr:1384013") != null && o.jsx(b("cr:1384013"), {
											sessionID: L
										})]
									})
								})]
							})
						})
					}
				})
			}
		}, L)
	}
	n = o.forwardRef(a);
	e.exports = n
}), null);