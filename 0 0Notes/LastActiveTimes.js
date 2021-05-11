__d("LastActiveTimes", ["fbt", "ServerTime"], (function(a, b, c, d, e, f, g) {
	f.update = a;
	f.getShortDisplay = c;
	f.get = d;
	f.getDebugData = e;
	var h = {};

	function i(a) {
		if (!a || a < 0) return null;
		a = b("ServerTime").get() / 1e3 - a;
		a = Math.floor(a / 60);
		var c = Math.floor(a / 60),
			d = Math.floor(c / 24);
		if (a <= 1) return g._({
			"*": "{count} ph\u00fat"
		}, [g._param("count", 1, [0])]);
		else if (a < 60) return g._({
			"*": "{count} ph\u00fat"
		}, [g._param("count", a, [0])]);
		else if (c < 24) return g._({
			"*": "{count} gi\u1edd"
		}, [g._param("count", c, [0])]);
		else if (d < 3) return g._({
			"*": "{count}ng\u00e0y"
		}, [g._param("count", d, [0])]);
		else return null
	}

	function j(a, b) {
		(!(a in h) || h[a] < b) && (h[a] = b)
	}

	function k(a) {
		if (a in h) return h[a];
		else return 0
	}

	function a(a) {
		for (var b in a) j(b, a[b])
	}

	function c(a) {
		return i(k(a))
	}

	function d(a) {
		return k(a)
	}

	function e() {
		return h
	}
}), null);