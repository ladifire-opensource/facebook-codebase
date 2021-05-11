__d("Sound", ["SoundInitialData", "SoundPlayer", "SoundRPC", "SoundSynchronizer", "URI", "UserAgent_DEPRECATED", "Visibility", "isFacebookURI"], (function(a, b, c, d, e, f) {
	f.init = a;
	f.play = c;
	f.hasPlayedSoundBefore = d;
	f.playOnlyIfImmediate = e;
	f.stop = j;
	var g, h = null,
		i = !1;

	function a(a) {}

	function c(a, c, d, e) {
		h ? b("SoundRPC").playRemote(h.contentWindow, a, c, !1) : b("SoundRPC").playLocal(a, c, d, e), i = !0
	}

	function d() {
		return i
	}

	function e(a, c, d) {
		if (!i && b("Visibility").isHidden()) return;
		this.play(a, c, d)
	}

	function j(a) {
		h || b("SoundPlayer").stop(a)
	}
	a = new(g || b("URI"))(location.href);
	a.getSubdomain() && a.getSubdomain() !== "comet" && a.getSubdomain() !== "www" && a.setSubdomain("www");
	c = a.getDomain();

	function k() {
		if (b("UserAgent_DEPRECATED").ie() < 9) return !1;
		return b("SoundInitialData").RPC_DISABLED ? !1 : b("SoundSynchronizer").isSupported() && b("SoundRPC").supportsRPC()
	}
	b("isFacebookURI")(a) && location.host !== c && k() && (h = document.createElement("iframe"), h.setAttribute("src", "//" + c + "/sound_iframe.php"), h.style.display = "none", document.body && document.body.appendChild(h))
}), null);