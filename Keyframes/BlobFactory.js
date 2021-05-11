__d("BlobFactory", ["emptyFunction"], (function(a, b, c, d, e, f) {
	var g;

	function h() {
		try {
			new a.Blob(), g = !0
		} catch (a) {
			g = !1
		}
	}
	var i = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder;
	a.Blob ? c = {
		getBlob: function(b, c) {
			b = b || [];
			c = c || {};
			g === void 0 && h();
			if (g) return new a.Blob(b, c);
			else {
				var d = new i();
				for (var e = 0; e < b.length; e++) d.append(b[e]);
				return d.getBlob(c.type)
			}
		},
		isSupported: b("emptyFunction").thatReturnsTrue
	} : c = {
		getBlob: function() {},
		isSupported: b("emptyFunction").thatReturnsFalse
	};
	e.exports = c
}), null);