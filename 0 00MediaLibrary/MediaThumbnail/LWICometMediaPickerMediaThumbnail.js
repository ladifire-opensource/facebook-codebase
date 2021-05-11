__d("LWICometMediaPickerMediaThumbnail.react", ["fbt", "CometRelay", "LWICometMediaPickerThumbnail.react", "React", "formatDurationSeconds", "useLWICometMediaPickerContext", "LWICometMediaPickerMediaThumbnail_assetBankMedia.graphql", "LWICometMediaPickerMediaThumbnail_media.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j = b("React");

	function a(a) {
		var c = a.assetBankMediaRef;
		c = c === void 0 ? null : c;
		var d = a.mediaRef;
		a = a.showImageName;
		a = a === void 0 ? !1 : a;
		var e = b("useLWICometMediaPickerContext")();
		c = b("CometRelay").useFragment(h !== void 0 ? h : h = b("LWICometMediaPickerMediaThumbnail_assetBankMedia.graphql"), c);
		d = b("CometRelay").useFragment(i !== void 0 ? i : i = b("LWICometMediaPickerMediaThumbnail_media.graphql"), d);
		var f, k, l, m, n, o;
		if (c != null) {
			o = c.__typename === "Video";
			if (o) {
				var p, q;
				f = b("formatDurationSeconds")((p = c.playable_duration) != null ? p : 0);
				p = (p = c.thumbnail) == null ? void 0 : p.uri;
				q = (q = c.video_thumbnail) == null ? void 0 : q.uri;
				n = c.id
			} else {
				var r;
				k = (r = c.image) == null ? void 0 : r.width;
				l = (r = c.image) == null ? void 0 : r.height;
				q = (r = c.image) == null ? void 0 : r.uri;
				p = (r = c.image) == null ? void 0 : r.uri
			}
		} else {
			if (d == null) return null;
			o = d.__typename === "Video";
			if (o) {
				f = b("formatDurationSeconds")((c = d.playable_duration) != null ? c : 0);
				p = (r = d.thumbnail) == null ? void 0 : r.uri;
				q = (c = d.video_thumbnail) == null ? void 0 : c.uri;
				n = d.id
			} else if (d.__typename === "Photo") {
				k = (r = d.image) == null ? void 0 : r.width;
				l = (c = d.image) == null ? void 0 : c.height;
				q = (r = d.image) == null ? void 0 : r.uri;
				p = (c = d.best_effort_thumbnail) == null ? void 0 : c.uri
			} else if (d.__typename === "InstagramMedia") {
				k = (r = d.image) == null ? void 0 : r.width;
				l = (c = d.image) == null ? void 0 : c.height;
				q = d.image_url;
				p = d.thumbnail_url
			} else k = d.width, l = d.height, m = d.image_hash === "" ? null : d.image_hash, q = d.image_url, p = d.thumbnail_url
		}
		if (q == null || p == null || q === "" || p === "") return null;
		!o && Number.isInteger(k) && Number.isInteger(l) && (f = g._("{width of image} x {height of image}", [g._param("width of image", k), g._param("height of image", l)]));
		var s = o ? {
			imageHash: m,
			imageUrl: q,
			key: (r = n) != null ? r : "",
			mediaType: "video",
			videoID: (c = n) != null ? c : ""
		} : {
			imageHash: m,
			imageUrl: q,
			key: (o = m) != null ? o : q,
			mediaType: "image"
		};
		return j.jsx(b("LWICometMediaPickerThumbnail.react"), {
			currentImage: s,
			isSelected: e.selectedMedia[s.key] != null,
			maskContent: f,
			mediaNumber: Object.keys(e.selectedMedia).length,
			name: (r = d == null ? void 0 : d.name) != null ? r : "",
			selectedIndex: ((c = e.config) == null ? void 0 : c.isMultipleMedia) === !0 ? Object.keys(e.selectedMedia).findIndex(function(a) {
				return a === s.key
			}) + 1 : void 0,
			showImageName: a,
			thumbnailUrl: p
		})
	}
}), null);