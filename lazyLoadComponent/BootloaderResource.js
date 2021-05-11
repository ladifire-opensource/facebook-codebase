__d("BootloaderResource", [], (function (a, b, c, d, e, f) {
	f.preload = a;
	f.read = b;
	var g = {};

	function a(a) {
		a.load()
	}

	function b(b) {
		var a = b.getModuleIfRequireable();
		if (a == null) {
			var c = b.getModuleId();
			if (!g[c]) {
				b = g[c] = b.load();
				b["finally"](function () {
					delete g[c]
				})
			}
			throw g[c]
		}
		return a
	}
}), null);



////
"PromiseAnnotate"