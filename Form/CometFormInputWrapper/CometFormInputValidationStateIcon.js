__d("CometFormInputValidationStateIcon", ["ix", "CometProgressRingIndeterminate.react", "React", "TetraIcon.react", "fbicon"], (function (a, b, c, d, e, f, g) {
	"use strict";
	a = b("React");
	c = {
		CORRECT: a.jsx(b("TetraIcon.react"), {
			color: "positive",
			icon: b("fbicon")._(g("498146"), 20),
			testid: void 0
		}),
		ERROR: a.jsx(b("TetraIcon.react"), {
			color: "negative",
			icon: b("fbicon")._(g("502062"), 20),
			testid: void 0
		}),
		LOADING: a.jsx(b("CometProgressRingIndeterminate.react"), {
			color: "disabled",
			size: 20
		}),
		WARN: a.jsx(b("TetraIcon.react"), {
			color: "warning",
			icon: b("fbicon")._(g("502062"), 20),
			testid: void 0
		})
	};
	e.exports = c
}), null);