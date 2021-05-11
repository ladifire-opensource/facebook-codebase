__d("Clipboard", ["Promise", "UserAgent"], (function(a, b, c, d, e, f) {
	f.isSupported = a;
	f.copy = g;
	f.copyAsync = c;

	function a() {
		return window.document.queryCommandSupported instanceof Function && window.document.queryCommandSupported("copy") && !(b("UserAgent").isBrowser("Firefox < 41") || b("UserAgent").isPlatform("iOS < 10.3")) || b("UserAgent").isBrowser("Chrome >= 43")
	}

	function g(a, c) {
		c = c || document.body;
		if (!c) return !1;
		var d = !0,
			e = document.createElement("textarea");
		c.appendChild(e);
		e.value = a;
		if (b("UserAgent").isPlatform("iOS >= 10.3")) {
			a = document.createRange();
			a.selectNodeContents(e);
			var f = window.getSelection();
			f.removeAllRanges();
			f.addRange(a);
			e.setSelectionRange(0, 999999)
		} else e.select();
		try {
			d = document.execCommand("copy")
		} catch (a) {
			d = !1
		}
		c.removeChild(e);
		return d
	}

	function c(a) {
		var c = window.navigator;
		if (c && c.clipboard && typeof c.clipboard.writeText === "function") return c.clipboard.writeText(a);
		return g(a) ? b("Promise").resolve() : b("Promise").reject()
	}
}), null);