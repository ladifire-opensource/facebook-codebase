// TODO: LSD ",[],{},323],["

__d("XHRRequest", ["invariant", "DTSG", "DTSGUtils", "DTSG_ASYNC", "Env", 
	"ErrorGuard", "FBLogger", "LSD", "Log", "NetworkStatus", "ResourceTimingsStore", 
	"ResourceTypes", "SprinkleConfig", "TimeSlice", "URI", "XHRHttpError", "ZeroRewrites",
	 "fb-error", "getAsyncHeaders ---", "xhrSimpleDataSerializer ---"], (function(a, b, c, d, e, f, g) {
	var h, i, j, k = b("fb-error").ErrorXFBDebug,
		l = !1,
		m = {
			loadedBytes: 0,
			totalBytes: 0
		};

	function n(a) {
		return b("ZeroRewrites").rewriteURI(new(h || (h = b("URI")))(a))
	}
	a = function() {
		"use strict";

		function a(a) {
			this.$3 = function() {
				return null
			}, this.$19 = n(a), this.$7 = "POST", this.$6 = {}, this.setResponseType(null), this.setTransportBuilder(b("ZeroRewrites").getTransportBuilderForURI(this.getURI())), this.setDataSerializer(b("xhrSimpleDataSerializer")), this.$11 = b("ResourceTimingsStore").getUID(b("ResourceTypes").XHR, a != null ? a.toString() : "")
		}
		var c = a.prototype;
		c.setURI = function(a) {
			this.$19 = n(a);
			return this
		};
		c.getURI = function() {
			return this.$19
		};
		c.setResponseType = function(a) {
			this.$13 = a;
			return this
		};
		c.setMethod = function(a) {
			this.$7 = a;
			return this
		};
		c.getMethod = function() {
			return this.$7
		};
		c.setData = function(a) {
			this.$2 = a;
			return this
		};
		c.getData = function() {
			return this.$2
		};
		c.setRawData = function(a) {
			this.$10 = a;
			return this
		};
		c.setRequestHeader = function(a, b) {
			this.$6[a] = b;
			return this
		};
		c.setTimeout = function(a) {
			this.$14 = a;
			return this
		};
		c.getTimeout = function() {
			return this.$14
		};
		c.setResponseHandler = function(a) {
			this.$12 = a;
			return this
		};
		c.getResponseHandler = function() {
			return this.$12
		};
		c.setErrorHandler = function(a) {
			this.$5 = a;
			return this
		};
		c.getErrorHandler = function() {
			return this.$5
		};
		c.setNetworkFailureHandler = function(a) {
			this.$8 = a;
			return this
		};
		c.getNetworkFailureHandler = function() {
			return this.$8
		};
		c.getResponseHeader = function(a) {
			var b = this.$9;
			return b ? b.getResponseHeader(a) : null
		};
		c.setAbortHandler = function(a) {
			this.$1 = a;
			return this
		};
		c.getAbortHandler = function() {
			return this.$1
		};
		c.setTimeoutHandler = function(a) {
			this.$15 = a;
			return this
		};
		c.getTimeoutHandler = function() {
			return this.$15
		};
		c.setUploadProgressHandler = function(a) {
			this.$18 = a;
			return this
		};
		c.setDownloadProgressHandler = function(a) {
			this.$4 = a;
			return this
		};
		c.setTransportBuilder = function(a) {
			!this.$17 || !b("ZeroRewrites").isRewritten(this.$19) ? this.$17 = a : b("FBLogger")("iorg-FOS").blameToPreviousFile().mustfix("can not set new TransportBuilder for the request %s", String(this.getURI()));
			return this
		};
		c.setDataSerializer = function(a) {
			this.$3 = a;
			return this
		};
		c.send = function() {
			var a = this.$14,
				c = this.$17;
			if (!c) return;
			var d = c();
			c = this.getURI();
			if (c.toString().includes("/../") || c.toString().includes("/..\\") || c.toString().includes("\\../") || c.toString().includes("\\..\\")) {
				b("Log").error("XHRRequest.send(): path traversal is not allowed.");
				return !1
			}
			if (l === !0) return;
			var e = new(h || (h = b("URI")))(c).getQualifiedURI().toString(),
				f = this.$11;
			b("ResourceTimingsStore").updateURI(b("ResourceTypes").XHR, f, e);
			b("ResourceTimingsStore").measureRequestSent(b("ResourceTypes").XHR, f);
			this.$9 = d;
			this.$7 === "POST" || !this.$10 || g(0, 2346, this.$10, c);
			e = (i || (i = b("Env"))).force_param;
			e && (this.$2 = babelHelpers["extends"]({}, this.getData() || {}, e));
			if (this.$7 === "GET" && b("DTSGUtils").shouldAppendToken(c)) {
				e = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
				e && (this.$2 ? this.$2.fb_dtsg_ag = e : this.$2 = {
					fb_dtsg_ag: e
				}, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)))
			}
			if (this.$7 === "POST" && b("DTSGUtils").shouldAppendToken(c)) {
				e = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
				e && (this.$2 ? this.$2.fb_dtsg = e : this.$2 = {
					fb_dtsg: e
				}, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)));
				b("LSD").token && (this.$2 ? this.$2.lsd = b("LSD").token : this.$2 = {
					lsd: b("LSD").token
				}, b("SprinkleConfig").param_name && !e && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
			}
			this.$7 === "GET" || this.$10 ? (c.addQueryData(this.$2), e = this.$10) : e = this.$3(this.$2);

			function j(a) {
				b("ResourceTimingsStore").measureResponseReceived(b("ResourceTypes").XHR, f);
				for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
				a.apply(this, d)
			}
			j = b("TimeSlice").guard(j, "XHRRequest response received", {
				propagationType: b("TimeSlice").PropagationType.CONTINUATION
			});
			d.onreadystatechange = this.$21(j);
			d.onerror = this.$22(j);
			d.upload && this.$18 && (d.upload.onprogress = this.$23.bind(this));
			this.$4 && (d.onprogress = this.$24.bind(this));
			a && (this.$16 = setTimeout(this.$25.bind(this), a));
			this.$20 != null && (d.withCredentials = this.$20);
			d.open(this.$7, c.toString(), !0);
			j = !1;
			if (this.$6)
				for (var k in this.$6) k.toLowerCase() === "content-type" && (j = !0), d.setRequestHeader(k, this.$6[k]);
			this.$7 == "POST" && !this.$10 && !j && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			var m = b("getAsyncHeaders")(c);
			Object.keys(m).forEach(function(a) {
				d.setRequestHeader(a, m[a])
			});
			this.$13 === "arraybuffer" && ("responseType" in d ? d.responseType = "arraybuffer" : "overrideMimeType" in d ? d.overrideMimeType("text/plain; charset=x-user-defined") : "setRequestHeader" in d && d.setRequestHeader("Accept-Charset", "x-user-defined"));
			this.$13 === "blob" && (d.responseType = this.$13);
			d.send(e)
		};
		c.abort = function(a) {
			this.$26(), this.$1 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$1, null, [a], {
				name: "XHRRequest:_abortHandler"
			})
		};
		c.$26 = function() {
			var a = this.$9;
			a && (a.onreadystatechange = null, a.abort());
			this.$27()
		};
		c.$25 = function() {
			this.$26(), this.$15 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$15, null, [], {
				name: "XHRRequest:_abortHandler"
			})
		};
		c.$28 = function(a) {
			if (this.$13)
				if ("response" in a) return a.response;
				else if (this.$13 === "arraybuffer" && window.VBArray) return window.VBArray(a.responseBody).toArray();
			return a.responseText
		};
		c.$22 = function(a) {
			var c = this,
				d = this.$9;
			return function() {
				var e;
				e = {
					errorCode: b("XHRHttpError").HTTP_TRANSPORT_ERROR,
					errorMsg: "Network Failure.",
					errorType: "Network",
					errorRawResponseHeaders: null,
					errorRawTransport: d == null ? void 0 : (e = d.constructor) == null ? void 0 : e.name,
					errorRawTransportStatus: 0
				};
				c.$8 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$8), null, [e], {
					name: "XHRRequest:_networkFailureHandler"
				}) : a(function() {});
				b("NetworkStatus").reportError()
			}
		};
		c.$21 = function(a) {
			var c = this,
				d = b("TimeSlice").guard(function(a) {
					for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
					return a.apply(this, c)
				}, "XHRRequest onreadystatechange", {
					propagationType: b("TimeSlice").PropagationType.EXECUTION
				});
			return function() {
				var e = c.$9;
				if (e == null) return;
				var f = e.readyState;
				if (f >= 2) {
					var g = f === 4;
					g && k.addFromXHR(e);
					var h = c.getURI();
					h = b("XHRHttpError").getErrorCode(h, e.status);
					var i = c.$12;
					if (h != null) {
						if (g) {
							var l = {
								errorCode: h,
								errorMsg: c.$28(e),
								errorRawTransport: e.constructor.name,
								errorRawTransportStatus: e.status,
								errorRawResponseHeaders: i && i.includeHeaders ? e.getAllResponseHeaders() : null,
								errorType: e.status ? "HTTP " + e.status : "HTTP"
							};
							c.$5 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$5), null, [l], {
								name: "XHRRequest:_errorHandler"
							}) : a(function() {})
						}
					} else if (i) {
						if (g || i.parseStreaming && f === 3) {
							l = g ? a : d;
							f = (i == null ? void 0 : i.includeHeaders) ? e.getAllResponseHeaders() : null;
							(j || (j = b("ErrorGuard"))).applyWithGuard(l.bind(void 0, i), null, [c.$28(e), f, g], {
								name: "XHRRequest:handler"
							})
						}
					} else g && a(function() {});
					g && (h != "HTTP_TRANSPORT_ERROR" && b("NetworkStatus").reportSuccess(), c.$27())
				}
			}
		};
		c.$23 = function(a) {
			m.loadedBytes = a.loaded, m.totalBytes = a.total, this.$18 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$18, null, [m], {
				name: "XHRRequest:_uploadProgressHandler"
			})
		};
		c.$24 = function(a) {
			a = {
				loadedBytes: a.loaded,
				totalBytes: a.total
			};
			this.$4 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$4, null, [a], {
				name: "XHRRequest:_downloadProgressHandler"
			})
		};
		c.$27 = function() {
			clearTimeout(this.$16), delete this.$9
		};
		a.disable = function() {
			l = !0
		};
		return a
	}();
	e.exports = a
}), null);