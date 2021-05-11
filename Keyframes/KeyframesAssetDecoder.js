__d("KeyframesAssetDecoder", ["Promise", "BlobFactory", "KeyframesPluginsLoader", 
	"KeyframesSchema", "KeyframesVideoUtils", "flatbuffers", 
	"promiseDone", "requestIdleCallback"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("KeyframesSchema").Document,
		h = "medium",
		i = a.URL || a.webkitURL || {};

	function j(a) {
		a = new(b("flatbuffers").ByteBuffer)(a);
		return g.bufferHasIdentifier(a) ? g.getRootAsDocument(a) : null
	}

	function k(a) {
		return new(b("Promise"))(function(b, c) {
			var d = new Image();
			d.onload = function() {
				return b(d)
			};
			d.onerror = function(b) {
				return c("Decode: error requesting image uri " + a)
			};
			d.src = a
		})
	}

	function l(a) {
		a = b("KeyframesVideoUtils").createVideo(a);
		return b("KeyframesVideoUtils").loadVideo(a, 0)
	}

	function m(b, c, d) {
		return a.createImageBitmap ? b.width < c || b.height < d ? o(b, c, d).then(function(b) {
			return a.createImageBitmap(b, 0, 0, c, d)["catch"](function(a) {
				return b
			})
		}) : a.createImageBitmap(b, 0, 0, b.width, b.height, {
			resizeWidth: c,
			resizeHeight: d,
			rezizeQuality: h
		})["catch"](function(a) {
			return o(b, c, d)
		}) : o(b, c, d)
	}

	function n(a, c, d) {
		a.width = c;
		a.height = d;
		return b("Promise").resolve(a)
	}

	function o(a, c, d) {
		return new(b("Promise"))(function(b) {
			var e = document.createElement("canvas");
			e.width = c;
			e.height = d;
			var f = e.getContext("2d");
			f.drawImage(a, 0, 0, c, d);
			b(e)
		})
	}

	function p(a, b) {
		var c = [];
		for (var d = 0; d < a.length; d++) {
			var e = a[d],
				f = b[d].size().width(),
				g = b[d].size().height();
			if (f !== e.width || g !== e.height) {
				var h = document.createElement("canvas");
				h.width = f;
				h.height = g;
				var i = h.getContext("2d");
				i.drawImage(e, 0, 0, f, g);
				c.push(h)
			} else c.push(e)
		}
		return c
	}

	function q(a, c, d) {
		if (!i.createObjectURL) return b("Promise").reject("URL API not supported");
		var e = i.createObjectURL(a);
		c = k(e);
		b("promiseDone")(c, function() {
			return b("requestIdleCallback")(function() {
				return i.revokeObjectURL(e)
			})
		});
		return c
	}

	function r(c) {
		if (b("BlobFactory").isSupported()) {
			var d = c.contentArray();
			if (!d) return b("Promise").reject("Decode: tried to decode a null bitmap");
			var e = b("BlobFactory").getBlob([d]),
				f = c.size().width(),
				g = c.size().height();
			return a.createImageBitmap ? a.createImageBitmap(e, 0, 0, f, g)["catch"](function(a) {
				return q(e, f, g)
			}) : q(e, f, g)
		}
		return b("Promise").reject("Decode: browser does not support bitmap creation")
	}

	function s(a) {
		if (b("BlobFactory").isSupported()) {
			var c = a.size();
			a = a.contentArray();
			if (!a) return b("Promise").reject("Decode: tried to decode a null video");
			a = b("BlobFactory").getBlob([a]);
			if (!i.createObjectURL) return b("Promise").reject("URL API not supported");
			var d = i.createObjectURL(a);
			a = l(d).then(function(a) {
				return n(a, c.width(), c.height())
			});
			b("promiseDone")(a, function() {
				b("requestIdleCallback")(function() {
					return i.revokeObjectURL(d)
				})
			});
			return a
		}
		return b("Promise").reject("Decode: browser does not support video creation")
	}

	function t(a) {
		var b = [];
		for (var c = a.pluginsLength() - 1; c >= 0; c--) b.unshift(a.plugins(c));
		return b.length ? b : null
	}

	function u(a) {
		var b = [];
		for (var c = a.bitmapsLength() - 1; c >= 0; c--) b.unshift(a.bitmaps(c));
		return b
	}

	function v(a) {
		var b = [];
		for (var c = a.videosLength() - 1; c >= 0; c--) b.unshift(a.videos(c));
		return b
	}

	function w(a) {
		var b = {};
		for (var c = 0; c < a.length; c++) {
			var d = a[c].name();
			d && (b[d] = {
				index: c,
				width: a[c].size().width(),
				height: a[c].size().height()
			})
		}
		return b
	}

	function x(a) {
		var b = {};
		for (var c = 0; c < a.length; c++) {
			var d = a[c].name();
			d && (b[d] = {
				index: c,
				width: a[c].size().width(),
				height: a[c].size().height()
			})
		}
		return b
	}

	function y(a) {
		var b = [];
		for (var c, d = a.subdocumentsLength() - 1; d >= 0; d--) c = a.subdocuments(d), b.unshift(c);
		return b
	}

	function z(a) {
		a = j(a);
		return !a ? b("Promise").reject("Decode: could not create flatbuffer doc") : A(a)
	}

	function A(a) {
		var c = u(a),
			d = x(c),
			e = v(a),
			f = w(e),
			g = c.filter(function(a) {
				return a.contentLength() || !a.name()
			}).map(r);
		e = e.filter(function(a) {
			return a.contentLength() || !a.name()
		}).map(s);
		var h = y(a).map(A),
			i = t(a);
		i = i ? b("KeyframesPluginsLoader").fromPluginTable(i) : b("Promise").resolve(null);
		return b("Promise").all([b("Promise").all(g), b("Promise").all(e), i, b("Promise").all(h)]).then(function(b) {
			var e = b[0],
				g = b[1],
				h = b[2];
			b = b[3];
			return {
				bitmaps: p(e, c),
				bitmapNames: d,
				videos: g,
				videoNames: f,
				doc: a,
				pluginsLoader: h,
				subassets: b
			}
		})
	}

	function B(a) {
		return !Uint8Array ? b("Promise").reject("Decode: typed arrays not supported") : b("Promise").resolve(new Uint8Array(a))
	}

	function C(a, c) {
		var d = {},
			e = [],
			f = Object.entries(a);
		a = function() {
			var a = f[g],
				h = a[0];
			a = a[1];
			a = c(a, h);
			e.push(a);
			b("promiseDone")(a, function(a) {
				return d[h] = a
			})
		};
		for (var g = 0; g < f.length; g++) a();
		return b("Promise").all(e).then(function() {
			return d
		})
	}

	function D(a, c, d) {
		if (!a.bitmapNames[c]) {
			var e = Object.keys(a.bitmapNames).join(",");
			return b("Promise").reject("Decode: missing replacement bitmap name " + c + ", available names: " + e)
		}
		e = a.bitmapNames[c];
		var f = e.index;
		c = e.width;
		e = e.height;
		return m(d, c, e).then(function(b) {
			a.bitmaps[f] = b
		})
	}

	function E(a, c, d) {
		if (!a.videoNames[c]) {
			var e = Object.keys(a.videoNames).join(",");
			return b("Promise").reject("Decode: missing replacement video name " + c + ", available names: " + e)
		}
		e = a.videoNames[c];
		var f = e.index;
		c = e.width;
		e = e.height;
		return n(d, c, e).then(function(b) {
			a.videos[f] = b
		})
	}

	function F(a) {
		var b = babelHelpers["extends"]({}, a);
		b.bitmaps = a.bitmaps.slice();
		return b
	}
	var G = {
		fromDocumentBytes: function(a) {
			if (a instanceof ArrayBuffer) return B(a).then(z);
			else if (a instanceof Uint8Array) return z(a);
			return b("Promise").reject("Decode: unsupported byte container passed")
		},
		replaceBitmapsWithURIs: function(a, b) {
			return C(b, function(a) {
				return k(a)
			}).then(function(b) {
				return G.replaceBitmapsWithImageSources(a, b)
			})
		},
		replaceBitmapsWithImageSources: function(a, b) {
			var c = F(a);
			return C(b, function(a, b) {
				return D(c, b, a)
			}).then(function() {
				return c
			})
		},
		replaceVideosWithURIs: function(a, b) {
			return C(b, l).then(function(b) {
				return G.replaceVideosWithVideoSources(a, b)
			})
		},
		replaceVideosWithVideoSources: function(a, b) {
			var c = F(a);
			return C(b, function(a, b) {
				return E(c, b, a)
			}).then(function() {
				return c
			})
		}
	};
	e.exports = G
}), null);