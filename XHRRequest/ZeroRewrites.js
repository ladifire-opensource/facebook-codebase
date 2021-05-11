__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], (function(a, b, c, d, e, f) {
	var g, h = {
		rewriteURI: function(a) {
			if (!b("isFacebookURI")(a) || h._isWhitelisted(a)) return a;
			var c = h._getRewrittenSubdomain(a);
			c !== null && c !== void 0 && (a = a.setSubdomain(c));
			return a
		},
		getTransportBuilderForURI: function(a) {
			return h.isRewritten(a) ? b("getCrossOriginTransport").withCredentials : b("getSameOriginTransport")
		},
		isRewriteSafe: function(a) {
			if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a)) return !1;
			var c = h._getCurrentURI().getDomain(),
				d = new(g || (g = b("URI")))(a).qualify().getDomain();
			return c === d || h.isRewritten(a)
		},
		isRewritten: function(a) {
			a = a.getQualifiedURI();
			if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a) || h._isWhitelisted(a)) return !1;
			var c = a.getSubdomain(),
				d = h._getCurrentURI(),
				e = h._getRewrittenSubdomain(d);
			return a.getDomain() !== d.getDomain() && c === e
		},
		_isWhitelisted: function(a) {
			a = a.getPath();
			a.endsWith("/") || (a += "/");
			return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1
		},
		_getRewrittenSubdomain: function(a) {
			a = a.getQualifiedURI().getSubdomain();
			return b("ZeroRewriteRules").rewrite_rules[a]
		},
		_getCurrentURI: function() {
			return new(g || (g = b("URI")))("/").qualify()
		}
	};
	e.exports = h
}), null);