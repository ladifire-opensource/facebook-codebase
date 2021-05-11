__d("PagesCometPhotosTabMainViewAllPhotosPhotoItem.react", ["fbt", "CometImage.react", "CometLink.react", "CometProductTagPagePhotoAffordance.react", "CometRelay", "PagesLogger", "PagesLoggerEventEnum", "PagesPagePhotoClickFalcoEvent", "ProductTaggingBuyerTypedLogger", "React", "getRoundedCorners", "gkx", "recoverableViolation", "stylex", "useCometMediaURL", "useCometPhotoViewerPlaceholderPassthroughProps", "useNullthrowsViolation", "PagesCometPhotosTabMainViewAllPhotosPhotoItem_photo.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j = b("React"),
		k = b("getRoundedCorners").CORNERS,
		l = b("getRoundedCorners").hasCorner,
		m = 203,
		n = {
			borderBottomEndRadius: {
				borderBottomEndRadius: "uo3d90p7"
			},
			borderBottomStartRadius: {
				borderBottomStartRadius: "l82x9zwi"
			},
			borderTopEndRadius: {
				borderTopEndRadius: "pw54ja7n"
			},
			borderTopStartRadius: {
				borderTopStartRadius: "ue3kfks5"
			},
			image: {
				borderTop: "opwvks06",
				borderEnd: "hop1g133",
				borderBottom: "linmgsc8",
				borderStart: "t63ysoy8",
				objectFit: "bixrwtb6"
			},
			imageContainer: {
				position: "l9j0dhe7"
			},
			imagePlaceholder: {
				alignItems: "bp9cbjyn",
				backgroundColor: "g6srhlxm",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				height: "muar4hno",
				justifyContent: "taijpn5t",
				paddingTop: "pybr56ya",
				paddingEnd: "d1544ag0",
				paddingBottom: "f10w8fjw",
				paddingStart: "tw6a2znq",
				textAlign: "oqcyycmt",
				width: "pg0el4gn"
			},
			root: {
				display: "a8c37x1j",
				height: "gq8dxoea",
				marginBottom: "bi6gxh9e",
				width: "lyjsgrqv"
			}
		},
		o = "product_tag_on_page_photos_",
		p = "#";

	function a(a) {
		var c, d = a.mediaSetToken,
			e = a.pageID,
			f = a.photo;
		a = a.roundCorner;
		f = b("CometRelay").useFragment(h !== void 0 ? h : h = b("PagesCometPhotosTabMainViewAllPhotosPhotoItem_photo.graphql"), f);
		var q = j.useState(!1),
			r = q[0],
			s = q[1];
		q = j.useCallback(function() {
			return s(!0)
		}, []);
		var t = (f == null ? void 0 : f.accessibility_caption) || g._("Xem \u1ea3nh");
		a = (a = a) != null ? a : k.NONE;
		c = f == null ? void 0 : (c = f.image) == null ? void 0 : c.uri;
		var u = b("useNullthrowsViolation")(f.id),
			v = ((f == null ? void 0 : f.product_tags) || []).length > 0,
			w = v && b("gkx")("1069716");
		v = Date.now();
		var x = w ? o + u + p + v : null;
		v = b("useCometPhotoViewerPlaceholderPassthroughProps")({
			photo: f,
			placeholderImageSrc: c,
			productTagReferralCode: x
		});
		var y = function() {
			if (e != null) {
				b("PagesPagePhotoClickFalcoEvent").log(function() {
					return {
						event_data: {},
						event_location: "page__photo_tab__main_view",
						page_id: e
					}
				});
				b("PagesLogger").log(e, b("PagesLoggerEventEnum").CLICK, "page_photo", "pages__photo_tab__all_photos", ["page_consumer_experience"], {});
				if (w) {
					var a = new(b("ProductTaggingBuyerTypedLogger"))();
					a.updateData({
						component: "PagesCometPhotosTabMainViewAllPhotosPhotoItem",
						creator_id: e,
						post_id: u,
						referral_code: x,
						surface: "page_photos_tab",
						unresolved_event: "Actn_PostClick"
					}).log()
				}
			} else b("recoverableViolation")("Page ID is null, photo click logging failed.", "pages_consumer_experience_www")
		};
		f = b("useCometMediaURL")(f, d);
		return j.jsx(b("CometLink.react"), {
			href: f,
			onClick: y,
			passthroughProps: babelHelpers["extends"]({}, v),
			xstyle: n.root,
			children: c != null && !r ? j.jsxs("div", {
				className: (i || (i = b("stylex")))(n.imageContainer),
				children: [w && j.jsx(b("CometProductTagPagePhotoAffordance.react"), {}), j.jsx("div", {
					children: j.jsx(b("CometImage.react"), {
						alt: t,
						height: m,
						onError: q,
						src: c,
						testid: void 0,
						width: m,
						xstyle: [n.image, l(a, k.TOP_START) && n.borderTopStartRadius, l(a, k.TOP_END) && n.borderTopEndRadius, l(a, k.BOTTOM_START) && n.borderBottomStartRadius, l(a, k.BOTTOM_END) && n.borderBottomEndRadius]
					})
				})]
			}) : j.jsx("div", {
				className: (i || (i = b("stylex")))(n.image, n.imagePlaceholder),
				children: t
			})
		})
	}
}), null);