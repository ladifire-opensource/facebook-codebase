__d("BootloaderEvents", ["Arbiter"], (function (a, b, c, d, e, f) {
	f.notifyBootloadStart = a;
	f.notifyBootload = c;
	f.notifyDeferTimeout = d;
	f.onBootload = e;
	f.onDeferTimeout = k;
	f.getActiveBootloads = l;
	var g = "bootloader/bootload",
		h = "bootloader/defer_timeout",
		i = new(b("Arbiter"))(),
		j = new Set();

	function a(a) {
		j.add(a)
	}

	function c(a) {
		j["delete"](a), i.inform(g, a, "persistent")
	}

	function d(a) {
		i.inform(h, a, "persistent")
	}

	function e(a) {
		return i.subscribe(g, function (b, c) {
			return a(c)
		})
	}

	function k(a) {
		return i.subscribe(h, function (b, c) {
			return a(c)
		})
	}

	function l() {
		return new Set(j)
	}
}), null);