__d("CometFeedVideoPlayer.react", ["CometAspectRatioContainer.react", "CometFeedStoryFeedLocationContext", "CometFeedStoryViewportMaxHeightMediaLayout.react", "CometFeedVideoPlayer_video.graphql", "CometRelay", "CometVisualCompletionAttributes", "VideoPlayerHooks", "VideoPlayerRelay.react", "VideoPlayerSurface.react", "react", "stylex", "unrecoverableViolation", "useVideoOriginalDimensionsRelay"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i, j = h || b("react"),
		k = ["COMET_CORONAVIRUS_HUB_WYSSH", "SERVICES_LOCAL_BUSINESS_DISCOVERY"],
		l = ["COMET_RACIAL_JUSTICE_HUB_POST_CAROUSEL"];

	function m(a) {
		var c = a.hasPlayScheduled,
			d = j.useRef(!1),
			e = b("VideoPlayerHooks").useController();
		j.useEffect(function() {
			if (c && !d.current) {
				var a = window.requestAnimationFrame(function() {
					return e.play("user_initiated")
				});
				d.current = !0;
				return function() {
					window.cancelAnimationFrame(a)
				}
			}
		}, [e, c]);
		return null
	}
	var n = {
		root: {
			position: "l9j0dhe7"
		},
		video: {
			bottom: "i09qtzwb",
			end: "n7fi1qx3",
			height: "datstx6m",
			position: "pmk7jnqg",
			start: "j9ispegn",
			top: "kr520xx4",
			width: "k4urcfbm"
		}
	};

	function a(a) {
		var c = a.children,
			d = a.portalingRenderPlaceholder,
			e = a.silenceHydrationMutationReporting;
		e = e === void 0 ? !1 : e;
		var f = a.video,
			h = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "portalingRenderPlaceholder", "silenceHydrationMutationReporting", "video", "xstyle"]);
		var o = j.useState(function() {
				return !1
			}),
			p = o[0],
			q = o[1];
		j.useEffect(function() {
			q(!0)
		}, []);
		o = j.useState(!1);
		var r = o[0],
			s = o[1];
		o = j.useCallback(function() {
			p || s(!0)
		}, [p]);
		f = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedVideoPlayer_video.graphql"), f);
		var t = j.useContext(b("CometFeedStoryFeedLocationContext")),
			u = b("useVideoOriginalDimensionsRelay")(f),
			v = u.originalAspectRatio,
			w = u.originalHeight;
		u = u.originalWidth;
		var x = j.useMemo(function() {
			return d != null ? function() {
				return d(null)
			} : void 0
		}, [d]);
		a = j.jsx(b("VideoPlayerRelay.react"), babelHelpers["extends"]({}, a, {
			portalingRenderPlaceholder: x,
			video: f,
			children: j.jsxs(b("VideoPlayerSurface.react"), {
				children: [j.jsx(m, {
					hasPlayScheduled: r
				}), c]
			})
		}));
		x = e ? b("CometVisualCompletionAttributes").IGNORE : {};
		r = p ? j.jsx("div", babelHelpers["extends"]({
			className: (i || (i = b("stylex")))(n.video)
		}, x, {
			children: a
		})) : d && d(o);
		c = l.includes(t);
		e = k.includes(t);
		if (e || c) {
			if (c) x = 1;
			else {
				o = f.height != null && f.width != null ? f.width / f.height : (a = v) != null ? a : 1;
				t = o < 1;
				x = t ? 1 : (e = v) != null ? e : o
			}
			return j.jsx("div", {
				className: (i || (i = b("stylex")))(n.root, h),
				children: j.jsx(b("CometAspectRatioContainer.react"), {
					aspectRatio: x,
					children: r
				})
			})
		}
		c = u;
		(c == null || c === 0) && (c = f.width);
		a = w;
		(a == null || a === 0) && (a = f.height);
		if (c == null || a == null) throw b("unrecoverableViolation")("Cannot render video attachment without information about its size", "comet_feed");
		return j.jsxs("div", {
			className: (i || (i = b("stylex")))(n.root, h),
			children: [j.jsx(b("CometFeedStoryViewportMaxHeightMediaLayout.react"), {
				backgroundColor: "#000000",
				mediaHeight: a,
				mediaWidth: c,
				minContainAspectRatio: 1
			}), r]
		})
	}
}), null);