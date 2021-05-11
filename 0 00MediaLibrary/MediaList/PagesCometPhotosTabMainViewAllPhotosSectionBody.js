__d("PagesCometPhotosTabMainViewAllPhotosSectionBody.react", ["fbt", "CometFlexibleGrid.react", "CometInfiniteScrollTrigger.react", "CometRelay", "PagesCometPageContext.react", "PagesCometPhotosTabMainViewAllPhotosPhotoItem.react", "ProfileCometAppCollectionPhotosGlimmer.react", "React", "TetraText.react", "getRoundedCorners", "stylex", "useCometInteractionTracing", "PagesCometPhotosTabMainViewAllPhotosSectionBody_photo.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = 5,
		k = 10,
		l = 300,
		m = 210;

	function a(a) {
		var c = a.hasNext,
			d = a.isLoadingNext,
			e = a.loadNext,
			f = a.location,
			n = a.mediaSetToken;
		a = a.photoEdges$key;
		a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("PagesCometPhotosTabMainViewAllPhotosSectionBody_photo.graphql"), a);
		var o = i.useContext(b("PagesCometPageContext.react").PagesCometPageContext),
			p = o.pageID,
			q = b("useCometInteractionTracing")(30605331, "responsive", "INTERACTION");
		o = function() {
			f === "PHOTOS_TAB" ? q(function() {
				e(k)
			}) : e(k)
		};
		var r = a != null ? b("getRoundedCorners")((a == null ? void 0 : a.length) + (c ? k : 0), j) : [];
		return a == null || a.length === 0 ? i.jsx("div", {
			className: "a8nywdso t6zp5p5o rz4wbd8a bagit248",
			children: i.jsx(b("TetraText.react"), {
				align: "center",
				color: "secondary",
				type: "body3",
				children: g._("No photos to show")
			})
		}) : i.jsxs(i.Fragment, {
			children: [i.jsx(b("CometFlexibleGrid.react"), {
				columnMaxWidth: l,
				columnMinWidth: m,
				minItems: a.length,
				children: a.map(function(a, c) {
					return !a ? null : i.jsx("div", {
						className: "cbu4d94t j83agx80 bp9cbjyn",
						children: i.jsx(b("PagesCometPhotosTabMainViewAllPhotosPhotoItem.react"), {
							mediaSetToken: n,
							pageID: p,
							photo: a,
							roundCorner: r[c]
						}, a.id)
					}, c)
				})
			}), c ? i.jsx(b("CometInfiniteScrollTrigger.react"), {
				hasMore: c,
				isLoading: d,
				onLoadMore: o,
				rootMargin: 250,
				children: i.jsx(b("ProfileCometAppCollectionPhotosGlimmer.react"), {
					itemCount: k
				})
			}, "loader") : null]
		})
	}
}), null);