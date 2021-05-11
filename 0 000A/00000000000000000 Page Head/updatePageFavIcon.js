__d("updatePageFavIcon", ["ErrorGuard", "recoverableViolation"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g;

	function a(a, c) {
		a != null && a instanceof HTMLLinkElement && (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
			var d = a.href,
				e = a.dataset,
				f = e.badgedIcon;
			e = e.defaultIcon;
			e != null && f != null ? !c && d === f ? a.href = e : c && d === e && (a.href = f) : b("recoverableViolation")("Unable to update favicon. icon href was not found on the favicon element, please set data-default-icon and data-badged-icon attributes.", "comet_ui")
		}, null, [])
	}
}), null);