__d("PageCometCreationFormBodyStepOne.react", ["CometFormTextArea.react", 
	"CometFormTextInput.react", "CometRow.react", "CometRowItem.react", 
	"PageCometCreationCategoryTokenizer.react", "PageCometCreationFormBodyStepTwo.react", 
	"PageCometCreationPageInfoHeader.react", "PageCreationNameChecker", "PagesCometCreationStringUtils", 
	"React", "TetraText.react", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.dispatch,
			d = a.page,
			e = a.pageCreateLogger;
		a = d.category;
		var f = d.description,
			h = d.helperText,
			i = d.isLoading,
			j = d.name,
			k = d.pageNameHelperText,
			l = d.pageNameValidate,
			m = function(a) {
				e("name"), c({
					type: "SET_NAME",
					value: a
				})
			},
			n = function(a) {
				e("category"), c({
					type: "SET_CATEGORY",
					value: a
				})
			},
			o = function(a) {
				e("description"), c({
					type: "SET_DESCRIPTION",
					value: a
				})
			},
			p = function(a) {
				return c({
					type: "SET_PAGE_NAME_VALIDATE",
					value: a
				})
			},
			q = function(a) {
				return c({
					type: "SET_HELPER_TEXT",
					value: a
				})
			},
			r = function(a) {
				return c({
					type: "SET_PAGE_NAME_HELPER_TEXT",
					value: a
				})
			},
			s = function() {
				q("name")
			},
			t = function() {
				q("description")
			},
			u = function() {
				if (j.length > 0 && j.charAt(0) !== j.charAt(0).toUpperCase()) {
					var a = j.charAt(0).toUpperCase() + j.slice(1);
					m(a)
				}
				a = new(b("PageCreationNameChecker"))(j);
				a.checkPageName();
				a = a.getErrorMessage();
				j == null || j === "" ? (p(null), r(null)) : a != null && a !== "" ? (p("ERROR"), r(a)) : (p("CORRECT"), r(null))
			};
		return g.jsxs("div", {
			children: [g.jsx(b("CometRow.react"), {
				paddingHorizontal: 16,
				children: g.jsxs(b("CometRowItem.react"), {
					expanding: !0,
					children: [g.jsx(b("PageCometCreationPageInfoHeader.react"), {}), g.jsx(b("CometFormTextInput.react"), {
						autoComplete: "off",
						autoFocus: !0,
						disabled: !!i,
						label: b("PagesCometCreationStringUtils").PAGE_NAME,
						onBlur: u,
						onFocus: s,
						onValueChange: m,
						validationState: l,
						value: j
					}), k != null && g.jsx("div", {
						className: "cxgpxx05",
						children: g.jsx(b("TetraText.react"), {
							color: "negative",
							type: "meta3",
							children: k
						})
					}), g.jsx("div", {
						className: "cxgpxx05",
						children: g.jsx(b("TetraText.react"), {
							type: "meta3",
							children: b("PagesCometCreationStringUtils").PAGE_NAME_HELPER_TEXT
						})
					})]
				})
			}), g.jsx(b("CometRow.react"), {
				paddingHorizontal: 16,
				children: g.jsxs(b("CometRowItem.react"), {
					expanding: !0,
					children: [g.jsx(b("PageCometCreationCategoryTokenizer.react"), {
						category: a,
						disabled: !!i,
						label: b("PagesCometCreationStringUtils").CATEGORY,
						onChangeCategory: n,
						updateExplanation: q
					}), g.jsx("div", {
						className: "cxgpxx05",
						children: g.jsx(b("TetraText.react"), {
							type: "meta3",
							children: b("PagesCometCreationStringUtils").CATEGORY_HELPER_TEXT
						})
					})]
				})
			}), g.jsx(b("CometRow.react"), {
				paddingHorizontal: 16,
				children: g.jsxs(b("CometRowItem.react"), {
					expanding: !0,
					children: [g.jsx(b("CometFormTextArea.react"), {
						disabled: !!i,
						label: b("PagesCometCreationStringUtils").DESCRIPTION,
						maxLength: 255,
						minRows: 4,
						onFocus: t,
						onValueChange: o,
						value: f
					}), h === "description" && g.jsxs("div", {
						className: "cxgpxx05",
						children: [g.jsx(b("TetraText.react"), {
							type: "meta3",
							children: b("PagesCometCreationStringUtils").DESCRIPTION_HELPER_TEXT
						}), g.jsx("div", {
							className: "discj3wi",
							children: g.jsx(b("TetraText.react"), {
								type: "meta3",
								children: b("PagesCometCreationStringUtils").DESCRIPTION_CHARACTER_LIMIT
							})
						})]
					})]
				})
			}), g.jsx(b("PageCometCreationFormBodyStepTwo.react"), {
				dispatch: c,
				page: d,
				pageCreateLogger: e
			})]
		})
	}
}), null);