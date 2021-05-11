__d("CometCompositeItemFocusIndicator.react", ["ix", "CometCompositeFocusIndicatorContext", "React", "TetraIcon.react", "fbicon", "gkx", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React"),
		i = b("gkx")("1721477");

	function a() {
		var a = h.useContext(b("CometCompositeFocusIndicatorContext"));
		return !i || a.hideArrowSignifiers === !0 ? null : h.jsxs(h.Fragment, {
			children: [a.horizontal === !0 ? h.jsxs(h.Fragment, {
				children: [h.jsx("div", {
					className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c rk01pc8j q07s4n64 sv5sfqaa",
					children: h.jsx(b("TetraIcon.react"), {
						color: "primary",
						icon: b("fbicon")._(g("1739808"), 8)
					})
				}), h.jsx("div", {
					className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c rk01pc8j sv5sfqaa a58uzkus",
					children: h.jsx(b("TetraIcon.react"), {
						color: "primary",
						icon: b("fbicon")._(g("897949"), 8)
					})
				})]
			}) : null, a.vertical === !0 ? h.jsxs(h.Fragment, {
				children: [h.jsx("div", {
					className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c dsccnyo6 kfkz5moi s7znr9ec",
					children: h.jsx(b("TetraIcon.react"), {
						color: "primary",
						icon: b("fbicon")._(g("702721"), 8)
					})
				}), h.jsx("div", {
					className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c kfkz5moi s7znr9ec fu951ksr",
					children: h.jsx(b("TetraIcon.react"), {
						color: "primary",
						icon: b("fbicon")._(g("701592"), 8)
					})
				})]
			}) : null]
		})
	}
}), null);