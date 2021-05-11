__d("CometAlbumGridLayout.react", ["fbt", "CometAlbumGridLayoutChild_photo.graphql", 
	"CometAlbumGridLayoutChild_video.graphql", "CometFeedAlbumGridWarningScreen.react", 
	"CometFeedFocusImage.react", "CometFeedUnitQueryVariablesContext", 
	"CometFeedVideoPlayerPlaceholder.react", "CometPressable.react", 
	"CometProductTagFunnelIDContext", "CometProductTagLoggingUtils", "CometRelay", 
	"CometTrackingCodeContext", "CometTrackingNodeProvider.react", "CometTrackingNodesContext", 
	"CometVisualCompletionAttributes", "ReactComposerCollageLayoutSelection", 
	"VideoPlayerDefaultControls.react", "VideoPlayerInteractionOverlay.react", 
	"VideoPlayerPortalingPlaceInfoProvider.react", "VideoPlayerRelay.react", 
	"VideoPlayerSurface.react", "getAggregatedStoryTrackingNodeIndex", "gkx", 
	"react", "stylex", "useCometPhotoViewerPlaceholderPassthroughProps"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j, k, l = j || b("react"),
		m = {
			grid: {
				position: "l9j0dhe7"
			},
			gridCell: {
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "pmk7jnqg"
			},
			imageButton: {
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				":active": {
					transform: "tm8avpzi"
				}
			},
			mediaPressed: {
				backgroundColor: "r9n4d945"
			},
			overlay: {
				alignItems: "bp9cbjyn",
				backgroundColor: "d6rk862h",
				bottom: "i09qtzwb",
				display: "j83agx80",
				end: "n7fi1qx3",
				flexDirection: "cbu4d94t",
				justifyContent: "taijpn5t",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4"
			},
			overlayText: {
				color: "qrtewk5h",
				fontSize: "mhxlubs3",
				fontWeight: "lrazzd5p",
				textAlign: "oqcyycmt"
			},
			root: {
				position: "l9j0dhe7"
			}
		},
		n = 2,
		o = b("gkx")("708253");

	function a(a) {
		var c = a.adID,
			d = a.attachments,
			e = a.firstItemRef,
			f = a.hasProductMatch,
			g = a.hasProductTags,
			h = a.initialTracePolicy,
			i = a.isUser;
		i = i === void 0 ? !0 : i;
		var j = a.subOrigin,
			n = a.totalNumItems,
			o = a.urls;
		a = d.reduce(function(a, b, c) {
			a.set(c, [b.width, b.height]);
			return a
		}, new Map());
		var p = a.size;
		i = i || p < 2 ? b("ReactComposerCollageLayoutSelection").getBestUserCollageLayout(a) : b("ReactComposerCollageLayoutSelection").getBestPageCollageLayout(a);
		var r = Array.from(i.entries()).map(function(a) {
				var b = a[0];
				a = a[1];
				return {
					attachment: d[b],
					columnSpan: a.getWidth(),
					columnStart: a.getLeft(),
					rowSpan: a.getHeight(),
					rowStart: a.getTop()
				}
			}),
			s = n === r.length ? 0 : n - r.length + 1,
			t = r.reduce(function(a, b) {
				return Math.max(a, b.columnStart + b.columnSpan)
			}, 0),
			u = r.reduce(function(a, b) {
				return Math.max(a, b.rowStart + b.rowSpan)
			}, 0);
		return l.jsx("div", {
			className: (k || (k = b("stylex")))(m.root),
			"data-testid": void 0,
			children: l.jsx("div", {
				className: k(m.grid),
				style: {
					paddingTop: "calc(" + u * 100 + "% / " + t + ")"
				},
				children: l.jsx(b("CometTrackingNodeProvider.react"), {
					trackingNode: 110,
					children: r.map(function(a, b) {
						return l.jsx(q, {
							adID: c,
							cell: a,
							gridCellLength: r.length,
							hasProductMatch: f,
							hasProductTags: g,
							i: b,
							initialTracePolicy: h,
							numColumns: t,
							numItemsNotShown: s,
							numRows: u,
							ref: b === 0 ? e : void 0,
							subOrigin: j,
							urls: o
						}, (b = a.attachment) == null ? void 0 : b.id)
					})
				})
			})
		})
	}

	function p(a) {
		var c = a.setPortableVideoID;
		a = b("VideoPlayerPortalingPlaceInfoProvider.react").useVideoPlayerPortalingPlaceInfo();
		var d = a.currentVideoID;
		l.useLayoutEffect(function() {
			c(d)
		}, [d, c]);
		return l.jsxs(b("VideoPlayerSurface.react"), {
			children: [l.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay, {}), l.jsx(b("VideoPlayerDefaultControls.react"), {})]
		})
	}

	function c(a, c) {
		var d, e, f, j = a.adID,
			q = a.cell,
			r = a.gridCellLength,
			s = a.hasProductMatch,
			t = a.hasProductTags,
			u = a.i,
			v = a.initialTracePolicy,
			w = a.numColumns,
			x = a.numItemsNotShown,
			y = a.numRows,
			z = a.subOrigin;
		a = a.urls;
		var A = l.useContext(b("CometTrackingCodeContext")),
			B = l.useContext(b("CometTrackingNodesContext")),
			C = l.useContext(b("CometFeedUnitQueryVariablesContext")),
			D = l.useContext(b("CometProductTagFunnelIDContext"));
		B = b("getAggregatedStoryTrackingNodeIndex")(B);
		d = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometAlbumGridLayoutChild_photo.graphql"), (d = q.attachment) == null ? void 0 : d.photo);
		var E = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometAlbumGridLayoutChild_video.graphql"), (e = q.attachment) == null ? void 0 : e.video);
		e = b("useCometPhotoViewerPlaceholderPassthroughProps")({
			photo: d,
			placeholderImageSrc: (e = q.attachment) == null ? void 0 : e.uri
		});
		var F = l.useState(null),
			G = F[0];
		F = F[1];
		var H = l.useState(!1),
			I = H[0],
			J = H[1];
		l.useEffect(function() {
			J(!0)
		}, []);
		H = l.useCallback(function() {
			return E != null && l.jsx(b("CometFeedVideoPlayerPlaceholder.react"), {
				video: E
			})
		}, [E]);
		var K = q.attachment;
		if (K == null) return null;
		var L = K.accessibilityCaption,
			M = K.focusX,
			N = K.focusY,
			O = K.height,
			P = K.id,
			Q = K.uri,
			R = K.url;
		K = K.width;
		L = (L = L) != null ? L : g._("H\u00ecnh \u1ea3nh trong album");
		var S = d != null ? d == null ? void 0 : d.id : E == null ? void 0 : E.id;
		d = d != null ? d : E;
		f = (E == null ? void 0 : (f = E.cix_screen) == null ? void 0 : f.view_model) == null ? "respect_user_settings" : "do_not_autoplay";
		I = E != null ? I ? l.jsx("span", babelHelpers["extends"]({}, b("CometVisualCompletionAttributes").IGNORE, {
			children: l.jsx(b("VideoPlayerRelay.react"), {
				canAutoplay: f,
				portalingEnabled: !0,
				portalingRenderPlaceholder: H,
				subOrigin: (I = z) != null ? I : "media_collage",
				video: E,
				children: l.jsx(p, {
					setPortableVideoID: F
				})
			})
		})) : l.jsx(b("CometFeedVideoPlayerPlaceholder.react"), {
			video: E
		}) : l.jsx(b("CometFeedFocusImage.react"), {
			focusX: (f = M) != null ? f : .5,
			focusY: (H = N) != null ? H : .5,
			imageHeight: O,
			imageWidth: K,
			src: Q,
			viewportAspectRatio: q.columnSpan / q.rowSpan
		});
		F = q.columnSpan;
		M = q.columnStart;
		f = q.rowSpan;
		N = q.rowStart;
		H = x > 0 && u === r - 1;
		O = n / 2 + .01;
		K = function() {
			if ((t === !0 || s === !0) && S != null) {
				var a = s === !0 ? "unconnected_commerce_product_match_on_newsfeed_" + S : "product_tag_on_newsfeed_" + S;
				b("CometProductTagLoggingUtils").logProductTagPostClick(j, "CometAlbumGridLayout", D, "newsfeed", S, a)
			}
		};
		return l.jsxs("div", {
			className: (k || (k = b("stylex")))(m.gridCell),
			"data-testid": void 0,
			style: {
				bottom: "calc((" + (y - (N + f)) * 100 + "% / " + y + ") + " + (N + f < y ? O : 0) + "px)",
				left: "calc((" + M * 100 + "% / " + w + ") + " + (M > 0 ? O : 0) + "px)",
				right: "calc((" + (w - (M + F)) * 100 + "% / " + w + ") + " + (M + F < w ? O : 0) + "px)",
				top: "calc((" + N * 100 + "% / " + y + ") + " + (N > 0 ? O : 0) + "px)"
			},
			children: [l.jsxs(b("CometPressable.react"), {
				"aria-label": E != null ? g._("Video trong album") : L,
				display: "block",
				hideHoverOverlay: !0,
				linkProps: {
					passthroughProps: babelHelpers["extends"]({
						index: B,
						initialTracePolicy: v,
						portableVideoID: G,
						productTagFunnelID: D,
						storyRenderLocation: C == null ? void 0 : C.renderLocation,
						subOrigin: z,
						trackingCode: A
					}, e),
					rel: o ? void 0 : "theater",
					url: a ? u < a.length ? a[u] : R : R
				},
				onPress: K,
				overlayPressedStyle: m.mediaPressed,
				ref: c,
				xstyle: m.imageButton,
				children: [I, H ? l.jsx("div", {
					className: (k || (k = b("stylex")))(m.overlay),
					children: l.jsx("div", {
						className: (k || (k = b("stylex")))(m.overlayText),
						children: g._("+{num}", [g._param("num", x)])
					})
				}) : null]
			}), d && S != null && l.jsx(b("CometFeedAlbumGridWarningScreen.react"), {
				media: d,
				mediaUrl: R
			}), l.jsx(b("CometRelay").MatchContainer, {
				match: d == null ? void 0 : d.copyright_banner_info
			})]
		}, P)
	}
	var q = l.forwardRef(c)
}), null);