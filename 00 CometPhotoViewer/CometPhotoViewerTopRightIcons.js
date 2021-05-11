__d("CometPhotoViewerTopRightIcons.react", ["ix", "fbt", "CometFullScreen", 
	"CometPhotoViewerViewStateContext", "CometPhotoViewerViewStateDispatcherContext", 
	"CometProductTagLoggingUtils", "CometRouteParams", "CometRow.react", 
	"CometRowItem.react", "CometTooltip.react", "CometTrackingNodeProvider.react", 
	"React", "TetraIcon.react", "WebSession", "fbicon", "gkx", "requireCond", "stylex", 
	"useCometCallout", "cr:1809732", "cr:1809733", "ProductTagPhotoViewerIconClickFalcoEvent"], (function (a, b, c, d, e, f, g, h) {
	"use strict";
	e.exports = a;
	var i, j = b("React"),
		k = {
			aiProductTagBadge: {
				display: "j83agx80",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				top: "kr520xx4",
				zIndex: "tkr6xdv7"
			},
			iconButtons: {
				end: "n7fi1qx3",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				position: "pmk7jnqg",
				top: "kr520xx4",
				zIndex: "tkr6xdv7"
			},
			productTagCallout: {
				maxWidth: "gtvx26ai"
			}
		};

	function a(a) {
		var c = a.authorId,
			d = a.canTag,
			e = a.fromAYMTRetroTagNotification,
			f = a.numNewAISuggestions,
			l = a.photoID,
			m = a.shouldShowPeopleTagButton,
			n = a.shouldShowProductTagButton,
			o = a.storyContainerId;
		a = j.useState(b("CometFullScreen").isFullScreen());
		var p = a[0],
			q = a[1],
			r = j.useContext(b("CometPhotoViewerViewStateDispatcherContext"));
		a = j.useState(n && e);
		var s = a[0],
			t = a[1];
		a = h._("B\u1ea1n c\u00f3 th\u1ec3 g\u1eafn th\u1ebb s\u1ea3n ph\u1ea9m trong danh m\u1ee5c \u0111\u1ec3 m\u1ecdi ng\u01b0\u1eddi mua s\u1eafm qua b\u00e0i vi\u1ebft d\u1ec5 d\u00e0ng h\u01a1n.");
		var u = b("CometRouteParams").useRouteParams(),
			v = e ? b("CometProductTagLoggingUtils").getAYMTChannelName(u.aymt_channel) : null;
		e = {
			align: "end",
			arrowStyle: "edge",
			label: a,
			position: "below",
			type: "accent",
			xstyle: k.productTagCallout
		};
		u = b("useCometCallout")(e, s);
		a = j.useCallback(function () {
			if (!p) {
				var a = document.documentElement;
				a != null && (b("CometFullScreen").requestFullScreen(a), q(!0))
			} else b("CometFullScreen").exitFullScreen(), q(!1)
		}, [p]);
		e = j.useContext(b("CometPhotoViewerViewStateContext"));
		s = p ? h._("Tho\u00e1t ch\u1ebf \u0111\u1ed9 to\u00e0n m\u00e0n h\u00ecnh") : h._("Chuy\u1ec3n sang to\u00e0n m\u00e0n h\u00ecnh");
		var w = null;
		n ? w = j.jsxs(b("CometRowItem.react"), {
			children: [b("cr:1809733") && j.jsx(b("cr:1809733"), {
				photoID: l
			}), j.jsxs(b("CometTooltip.react"), {
				position: "below",
				tooltip: f > 0 && b("gkx")("1809734") ? h._("Xem th\u1ebb s\u1ea3n ph\u1ea9m g\u1ee3i \u00fd") : h._("G\u1eafn th\u1ebb s\u1ea3n ph\u1ea9m"),
				children: [f !== 0 && j.jsx("div", {
					className: (i || (i = b("stylex")))(k.aiProductTagBadge),
					children: b("cr:1809732") != null && j.jsx(b("cr:1809732"), {
						color: "blue",
						value: f
					})
				}), j.jsx(b("TetraIcon.react"), {
					"aria-label": h._("G\u1eafn th\u1ebb s\u1ea3n ph\u1ea9m"),
					color: "white",
					hideHoverOverlay: !0,
					icon: b("fbicon")._(g("1649781"), 32),
					onPress: function () {
						b("ProductTagPhotoViewerIconClickFalcoEvent").log(function () {
							return {
								container_post_id: o,
								creation_session_id: b("WebSession").getId(),
								creator_id: c,
								media_id: l,
								media_type: "photo",
								platform: "comet",
								referral_code: v,
								referral_source: "post_viewer"
							}
						}), r({
							tagModeEnabled: !0,
							type: "SET_TAG_MODE_ENABLED"
						}), r({
							isProductTagging: !0,
							type: "SET_IS_PRODUCT_TAGGING"
						}), t(!1)
					},
					ref: u
				})]
			})]
		}) : m && (w = j.jsx(b("CometRowItem.react"), {
			children: j.jsx(b("CometTrackingNodeProvider.react"), {
				trackingNode: 140,
				children: j.jsx(b("CometTooltip.react"), {
					position: "below",
					tooltip: h._("G\u1eafn th\u1ebb \u1ea3nh"),
					children: j.jsx(b("TetraIcon.react"), {
						"aria-label": b("gkx")("1224637") ? h._("g\u1eafn th\u1ebb \u0111\u1ed3ng nghi\u1ec7p") : h._("g\u1eafn th\u1ebb b\u1ea1n b\u00e8"),
						color: "white",
						hideHoverOverlay: !0,
						icon: b("fbicon")._(g("674580"), 32),
						onPress: function () {
							r({
								tagModeEnabled: !0,
								type: "SET_TAG_MODE_ENABLED"
							})
						},
						testid: void 0
					})
				})
			})
		}));
		return j.jsx("div", {
			className: (i || (i = b("stylex")))(k.iconButtons),
			children: j.jsxs(b("CometRow.react"), {
				align: "end",
				children: [d && !e.tagModeEnabled && !e.isProductTagging ? w : null, j.jsx(b("CometRowItem.react"), {
					children: j.jsx(b("CometTooltip.react"), {
						position: "below",
						tooltip: s,
						children: j.jsx(b("TetraIcon.react"), {
							"aria-label": s,
							color: "white",
							hideHoverOverlay: !0,
							icon: p ? b("fbicon")._(g("1250223"), 32) : b("fbicon")._(g("1250245"), 32),
							onPress: a,
							size: 32
						})
					})
				})]
			})
		})
	}
}), null);