__d("getSameOriginTransport", ["ExecutionEnvironment", "ex"], (function (a, b, c, d, e, f) {
	function c() {
		if (!b("ExecutionEnvironment").canUseDOM) throw new Error(b("ex")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment."));
		try {
			return new a.XMLHttpRequest()
		} catch (a) {
			throw new Error(b("ex")("getSameOriginTransport: %s", a.message))
		}
	}
	e.exports = c
}), null);