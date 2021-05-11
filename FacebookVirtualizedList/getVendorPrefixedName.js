__d("getVendorPrefixedName", ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"], (function(a, b, c, d, e, f, g) {
	e.exports = a;
	var h = {},
		i = ["Webkit", "ms", "Moz", "O"],
		j = new RegExp("^(" + i.join("|") + ")"),
		k = b("ExecutionEnvironment").canUseDOM ? document.createElement("div").style : {};

	function l(a) {
		for (var b = 0; b < i.length; b++) {
			var c = i[b] + a;
			if (c in k) return c
		}
		return null
	}

	function m(a) {
		switch (a) {
			case "lineClamp":
				return b("UserAgent").isEngine("WebKit >= 315.14.2") ? "WebkitLineClamp" : null;
			default:
				return null
		}
	}

	function a(a) {
		var c = b("camelize")(a);
		if (h[c] === void 0) {
			var d = c.charAt(0).toUpperCase() + c.slice(1);
			j.test(d) && g(0, 957, a);
			b("ExecutionEnvironment").canUseDOM ? h[c] = c in k ? c : l(d) : h[c] = m(c)
		}
		return h[c]
	}
}), null);