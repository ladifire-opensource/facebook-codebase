__d("SoundPlayer", ["ODS", "URI", "createArrayFromMixed"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = new Map();

	function i(a) {
		var c = new(g || (g = b("URI")))(a);
		return c.getDomain() ? a : new(g || (g = b("URI")))(window.location.href).setPath(c.getPath()).toString()
	}

	function j(a) {
		a = new(g || (g = b("URI")))(a).getPath();
		if (/\.mp3$/.test(a)) return "audio/mpeg";
		return /\.og[ga]$/.test(a) ? "audio/ogg" : ""
	}
	var k = function(a, c) {
		for (var a = b("createArrayFromMixed")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var f;
			if (d) {
				if (e >= a.length) break;
				f = a[e++]
			} else {
				e = a.next();
				if (e.done) break;
				f = e.value
			}
			f = f;
			if (h.has(f)) return;
			var g = document.createElement("audio");
			if (!g || !g.canPlayType || !g.canPlayType(j(f))) continue;
			g.preload = "auto";
			g.src = i(f);
			document.body && document.body.appendChild(g);
			h.set(f, g);
			(c == null ? void 0 : c.onPreload) != null && c.onPreload(g);
			return
		}
	};
	f.preload = k;
	a = function(a, c) {
		c === void 0 && (c = {});
		for (var a = b("createArrayFromMixed")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var f;
			if (d) {
				if (e >= a.length) break;
				f = a[e++]
			} else {
				e = a.next();
				if (e.done) break;
				f = e.value
			}
			f = f;
			h.has(f) || k(f, c.callbacks);
			f = h.get(f);
			if (!f) continue;
			c.loop && f.setAttribute("loop", "");
			c.volume && (f.volume = c.volume);
			f = f.play();
			f != null && typeof f.then === "function" ? f.then(function(a) {
				b("ODS").bumpEntityKey(2966, "sound_player", "play.success")
			})["catch"](function(a) {
				b("ODS").bumpEntityKey(2966, "sound_player", "play.error")
			}) : b("ODS").bumpEntityKey(2966, "sound_player", "non_promise");
			return
		}
	};
	f.play = a;
	c = function(a) {
		for (var a = b("createArrayFromMixed")(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var e;
			if (c) {
				if (d >= a.length) break;
				e = a[d++]
			} else {
				d = a.next();
				if (d.done) break;
				e = d.value
			}
			e = e;
			e = h.get(e);
			if (e) {
				e.pause();
				return
			}
		}
	};
	f.pause = c;
	d = function(a) {
		for (var a = b("createArrayFromMixed")(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var e;
			if (c) {
				if (d >= a.length) break;
				e = a[d++]
			} else {
				d = a.next();
				if (d.done) break;
				e = d.value
			}
			e = e;
			var f = h.get(e);
			f && (f.pause(), f.removeAttribute("src"), f.src = i(e))
		}
	};
	f.stop = d
}), null);