__d("CometMediaSetViewerRenderer.react", ["CometMediaViewerLayout.react", "CometRelay", "React", "useCometMediaURL", "CometMediaSetViewerRenderer_media.graphql", "CometMediaSetViewerRenderer_mediaset.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h, i = b("React"),
		j = g !== void 0 ? g : g = b("CometMediaSetViewerRenderer_media.graphql"),
		k = h !== void 0 ? h : h = b("CometMediaSetViewerRenderer_mediaset.graphql");

	function a(a) {
		var c, d, e, f = a.media,
			g = a.mediaset,
			h = a.mediasetToken,
			l = a.prefetchForId;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["media", "mediaset", "mediasetToken", "prefetchForId"]);
		f = b("CometRelay").useFragment(j, f);
		g = b("CometRelay").useFragment(k, g);
		c = (c = g == null ? void 0 : (c = g.prevMedia) == null ? void 0 : c.edges) != null ? c : [];
		d = c == null ? void 0 : (d = c[c.length - 1]) == null ? void 0 : d.node;
		g = (g = g == null ? void 0 : (g = g.nextMedia) == null ? void 0 : g.edges) != null ? g : [];
		e = g == null ? void 0 : (e = g[0]) == null ? void 0 : e.node;
		d = d;
		var m = c;
		c = b("useCometMediaURL")(d, h);
		d = e;
		var n = g;
		e = b("useCometMediaURL")(d, h);
		i.useEffect(function () {
			m.forEach(function (a) {
				a = a == null ? void 0 : (a = a.node) == null ? void 0 : a.id;
				a != null && (l && l(a))
			}), n.forEach(function (a) {
				a = a == null ? void 0 : (a = a.node) == null ? void 0 : a.id;
				a != null && (l && l(a))
			})
		}, [n, l, m]);
		return i.jsx(b("CometMediaViewerLayout.react"), babelHelpers["extends"]({
			media: f,
			nextMediaURI: e,
			prevMediaURI: c
		}, a))
	}
}), null);