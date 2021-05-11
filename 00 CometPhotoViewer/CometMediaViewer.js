__d("CometMediaViewer.react", ["CometMediaViewerDispatcherContext", 
	"CometMediaViewerReducer", "CometMediaViewerStage.react", 
	"CometMediaViewerVideoPlayerSurface.react", "CometMediaViewerViewStateContext", 
	"CometPhotoViewer.react", "CometRelay", "CometRouteRenderType", "CometWarningScreenContext", 
	"React", "VideoPlayerRelay.react", "stylex", "useCometDisplayTimingTracker",
	 "useCurrentRoute", "useRoutePassthroughProps", "CometMediaViewer_media.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = b("React"),
		j = [b("CometMediaViewerReducer")],
		k = function (a, b) {
			a = a;
			for (var c = 0; c < j.length; c++) {
				var d = j[c];
				a = d(a, b)
			}
			return a
		};

	function a(a) {
		var c, d = b("CometRouteRenderType").useIsPushView(),
			e = a.media,
			f = a.origHeight,
			j = a.origOverlayShown,
			l = a.origSrc,
			m = a.origWidth,
			n = a.photoTagLayerQueryReference,
			o = a.storyRenderLocation,
			p = babelHelpers.objectWithoutPropertiesLoose(a, ["media", "origHeight", "origOverlayShown", "origSrc", "origWidth", "photoTagLayerQueryReference", "storyRenderLocation"]);
		e = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometMediaViewer_media.graphql"), e);
		var q = i.useReducer(k, {
				isHovered: !1
			}),
			r = q[0];
		q = q[1];
		var s = b("useCometDisplayTimingTracker")("MediaViewerVideo"),
			t = b("useRoutePassthroughProps")(),
			u = t == null ? void 0 : t.subOrigin,
			v = (t == null ? void 0 : t.initialTracePolicy) != null ? String(t == null ? void 0 : t.initialTracePolicy) : null;
		t = t == null ? void 0 : t.portableVideoID;
		c = ((c = e.cix_screen) == null ? void 0 : (c = c.view_model) == null ? void 0 : c.__typename) != null;
		var w = (e == null ? void 0 : e.is_playable) === !0,
			x = b("useCurrentRoute")();
		x = (x = x == null ? void 0 : x.transparent) != null ? x : !1;
		if (w) {
			x = i.jsx("div", {
				className: "l9j0dhe7 datstx6m buofh1pr cbu4d94t j83agx80",
				"data-testid": void 0,
				children: i.jsx(b("CometMediaViewerStage.react"), babelHelpers["extends"]({}, p, {
					backgroundColor: x ? "dark" : "default",
					initialTracePolicy: v,
					isPlayable: !0,
					storyRenderLocation: o,
					subOrigin: u,
					children: i.jsx("div", {
						className: (h || (h = b("stylex"))).dedupe({
							"align-items-1": "bp9cbjyn",
							"display-1": "j83agx80",
							"flex-grow-1": "buofh1pr",
							"justify-content-1": "taijpn5t",
							"width-1": "k4urcfbm"
						}, d ? {
							"height-1": "datstx6m"
						} : null, d ? null : {
							"height-1": "mqzoxkkh"
						}),
						ref: s,
						children: i.jsx(b("VideoPlayerRelay.react"), {
							canAutoplay: c ? "do_not_autoplay" : "respect_user_settings",
							portalingEnabled: !0,
							portalingFromVideoID: t,
							portalingPlaceMetaData: {
								placeDescription: "media_viewer"
							},
							subOrigin: (w = u) != null ? w : "media_viewer",
							video: e,
							children: i.jsx(b("CometMediaViewerVideoPlayerSurface.react"), {
								data: e
							})
						})
					})
				}))
			})
		} else x = i.jsx(b("CometPhotoViewer.react"), babelHelpers["extends"]({
			initialTracePolicy: v,
			origHeight: f,
			origSrc: l,
			origWidth: m,
			photo: e,
			photoTagLayerQueryReference: n,
			showTag: !0,
			storyRenderLocation: o,
			subOrigin: u
		}, p));
		return i.jsx(b("CometWarningScreenContext").CometWarningScreenContextProvider, {
			identifier: (d = a.prevMediaURI) != null ? d : "no_prev_uri",
			overlayExists: c,
			overlayShownOverride: j,
			children: i.jsx(b("CometMediaViewerViewStateContext").Provider, {
				value: r,
				children: i.jsx(b("CometMediaViewerDispatcherContext").Provider, {
					value: q,
					children: x
				})
			})
		})
	}
}), null);