__d("KeyInfo.react", ["fbt", "CometKeyCommandSettingsContext", "CometKeys", "CometScreenReaderText.react", "Locale", "UserAgent", "isSingleCharKey", "react", "stylex", "translateKey"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i, j = h || b("react"),
		k = String.fromCodePoint(8594),
		l = String.fromCodePoint(8592),
		m = String.fromCodePoint(8593),
		n = String.fromCodePoint(8595);

	function a(a) {
		var c = j.useContext(b("CometKeyCommandSettingsContext"));
		c = (c == null ? void 0 : c.getAreSingleKeysDisabled()) || !1;
		var d = j.useRef(),
			e = a.command,
			f = a.description,
			h = a.displayType,
			o = a.index,
			p = a.isActive,
			q = a.isEndOfList;
		a = a.keyCommand;
		var r;
		switch (e.key) {
			case b("CometKeys").SPACE:
				r = "space";
				break;
			case b("CometKeys").LEFT:
				r = b("Locale").isRTL() ? k : l;
				break;
			case b("CometKeys").RIGHT:
				r = b("Locale").isRTL() ? l : k;
				break;
			case b("CometKeys").UP:
				r = m;
				break;
			case b("CometKeys").DOWN:
				r = n;
				break;
			case b("CometKeys").QUESTION:
				r = j.jsxs(j.Fragment, {
					children: [j.jsx("span", {
						"aria-hidden": "true",
						children: e.key
					}), j.jsx(b("CometScreenReaderText.react"), {
						text: g._("D\u1ea5u ch\u1ea5m h\u1ecfi")
					})]
				});
				break;
			case b("CometKeys").SLASH:
				r = j.jsxs(j.Fragment, {
					children: [j.jsx("span", {
						"aria-hidden": "true",
						children: e.key
					}), j.jsx(b("CometScreenReaderText.react"), {
						text: g._("D\u1ea5u g\u1ea1ch ch\u00e9o")
					})]
				});
				break;
			default:
				r = e.key
		}
		p = "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05 hytbnt81 j5wkysh0 fo6rh5oj q9uorilb kzx2olss aot14ch1 p86d2i9g beltcj47 aypy0576 s1tcr66n maa8sdkg l6v480f0" + (p === !0 ? " bwm1u5wc s1i5eluu" : "");
		var s = b("isSingleCharKey")(a);
		p = j.jsxs("span", {
			className: "ggphbty4",
			children: [e.shift === !0 ? j.jsxs(j.Fragment, {
				children: [j.jsx("span", {
					className: p,
					children: b("translateKey")("shift")
				}), "+"]
			}) : null, e.alt === !0 ? b("UserAgent").isPlatform("Mac OS X") ? j.jsxs(j.Fragment, {
				children: [j.jsx("span", {
					className: p,
					children: b("translateKey")("opt")
				}), "+"]
			}) : j.jsxs(j.Fragment, {
				children: [j.jsx("span", {
					className: p,
					children: b("translateKey")("alt")
				}), "+"]
			}) : null, e.command === !0 ? b("UserAgent").isPlatform("Mac OS X") ? j.jsxs(j.Fragment, {
				children: [j.jsx("span", {
					className: p,
					children: b("translateKey")("cmd")
				}), "+"]
			}) : j.jsxs(j.Fragment, {
				children: [j.jsx("span", {
					className: p,
					children: b("translateKey")("ctrl")
				}), "+"]
			}) : null, j.jsx("span", {
				className: p,
				children: r
			})]
		});
		c = c && s;
		s = a != null && o != null ? a + "_" + o + "_" + (c ? "1" : "0") : e.key;
		switch (h) {
			case "list":
				return j.jsxs("li", {
					className: (i || (i = b("stylex"))).dedupe({
						"align-items-1": "bp9cbjyn",
						"display-1": "j83agx80",
						"flex-wrap-1": "owycx6da",
						"white-space-1": "g0qnabr5"
					}, {
						"margin-bottom-1": "bi6gxh9e",
						"padding-end-1": "hv4rvrfc"
					}, c ? {
						"color-1": "erlsw9ld"
					} : null, c ? null : {
						"color-1": "oo9gr5id"
					}),
					ref: d,
					children: [j.jsx("span", {
						children: f
					}), p, q ? null : ","]
				}, s);
			case "table":
				return j.jsxs("tr", {
					className: (i || (i = b("stylex"))).dedupe({
						"padding-top-1": "jb3vyjys",
						"padding-end-1": "rz4wbd8a",
						"padding-bottom-1": "qt6c0cv9",
						"padding-start-1": "a8nywdso",
						"text-align-1": "hzawbc8m"
					}, c ? {
						"color-1": "erlsw9ld"
					} : null, c ? null : {
						"color-1": "oo9gr5id"
					}),
					ref: d,
					children: [j.jsx("th", {
						className: "jwdofwj8 e5nlhep0 p1ri9a11 jq4qci2q rqr5e5pd",
						children: f
					}), j.jsx("td", {
						className: "jwdofwj8 e5nlhep0 p1ri9a11 jq4qci2q jfs9rjsd g0qnabr5 ftzlm3b6",
						children: p
					})]
				}, s);
			default:
				return j.jsxs("div", {
					className: "g0qnabr5 owycx6da j83agx80 bp9cbjyn",
					ref: d,
					children: [j.jsx("span", {
						children: f
					}), p]
				})
		}
	}
}), null);