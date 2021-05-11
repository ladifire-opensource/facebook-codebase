__d("JobsCometComposerSalaryInput.react", ["fbt", "CometFormTextInput.react", "JobsCometComposerActions", "JobsCometComposerDispatchContext", "JobsCometComposerInputWrapper.react", "JobsCometComposerSalaryHelpers", "JobsCometComposerViewStateContext", "intlNumUtils", "qex", "react"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = h || b("react");

	function a(a) {
		var c = a.defaultValue;
		a = a.isMaximumSalaryField;
		var d = i.useContext(b("JobsCometComposerViewStateContext")),
			e = d.errors,
			f = d.logger,
			h = d.salary;
		d = Boolean(e == null ? void 0 : e.hasInvalidMinimumSalaryError);
		var j = b("qex")._("1859325") === !0,
			k = Boolean(e == null ? void 0 : e.hasEmptySalaryError) && j && (h == null ? void 0 : h.amountMax) === null && (h == null ? void 0 : h.amount) === null,
			l = Boolean(e == null ? void 0 : e.hasInvalidMaximumSalaryError),
			m = i.useContext(b("JobsCometComposerDispatchContext")),
			n = m.dispatch;
		m = null;
		k && a ? m = g._("H\u00e3y th\u00eam m\u1ee9c l\u01b0\u01a1ng t\u1ed1i \u0111a ho\u1eb7c kho\u1ea3ng l\u01b0\u01a1ng v\u00e0o tin tuy\u1ec3n d\u1ee5ng.") : k && !a ? m = g._("H\u00e3y th\u00eam m\u1ee9c l\u01b0\u01a1ng t\u1ed1i thi\u1ec3u ho\u1eb7c kho\u1ea3ng l\u01b0\u01a1ng v\u00e0o tin tuy\u1ec3n d\u1ee5ng.") : a && l ? m = g._("H\u00e3y nh\u1eadp m\u1ee9c l\u01b0\u01a1ng t\u1ed1i \u0111a h\u1ee3p l\u1ec7 r\u1ed3i th\u1eed l\u1ea1i") : !a && d && (m = g._("H\u00e3y nh\u1eadp m\u1ee9c l\u01b0\u01a1ng t\u1ed1i thi\u1ec3u h\u1ee3p l\u1ec7 r\u1ed3i th\u1eed l\u1ea1i"));
		var o = a ? function(a) {
			var c = h == null ? void 0 : h.amount;
			n(b("JobsCometComposerActions").setSalary(babelHelpers["extends"]({}, h, {
				amountMax: a
			})));
			n(b("JobsCometComposerActions").setErrors(babelHelpers["extends"]({}, e, {
				hasEmptySalaryError: !Boolean(a),
				hasInvalidMaximumSalaryError: a != null && (a < 0 || c != null && a < c)
			})))
		} : function(a) {
			var c = h == null ? void 0 : h.amountMax;
			n(b("JobsCometComposerActions").setSalary(babelHelpers["extends"]({}, h, {
				amount: a
			})));
			n(b("JobsCometComposerActions").setErrors(babelHelpers["extends"]({}, e, {
				hasEmptySalaryError: !Boolean(a),
				hasInvalidMaximumSalaryError: c != null && (c < 0 || a != null && c < a),
				hasInvalidMinimumSalaryError: a != null && a < 0
			})))
		};
		c = i.useState(b("JobsCometComposerSalaryHelpers").formatCurrency(c != null ? c / 100 : null, h.currency));
		var p = c[0],
			q = c[1];
		c = i.useCallback(function() {
			f.logSalaryEdited();
			var a = b("intlNumUtils").parseNumber(p);
			if (a == null) {
				q("");
				o(null);
				return
			}
			a = +a.toFixed(2);
			var c = b("JobsCometComposerSalaryHelpers").formatCurrency(a, h.currency);
			q(c);
			o(a * 100)
		}, [p, f, o, h.currency]);
		var r = j ? a ? g._("M\u1ee9c l\u01b0\u01a1ng t\u1ed1i \u0111a") : g._("M\u1ee9c l\u01b0\u01a1ng t\u1ed1i thi\u1ec3u") : a ? g._("M\u1ee9c l\u01b0\u01a1ng t\u1ed1i \u0111a (kh\u00f4ng b\u1eaft bu\u1ed9c)") : g._("M\u1ee9c l\u01b0\u01a1ng t\u1ed1i thi\u1ec3u (kh\u00f4ng b\u1eaft bu\u1ed9c)");
		j = j ? a && l || !a && d || k ? "ERROR" : void 0 : a && l || !a && d ? "ERROR" : void 0;
		return i.jsx(b("JobsCometComposerInputWrapper.react"), {
			children: i.jsx(b("CometFormTextInput.react"), {
				helperText: m,
				label: r,
				onBlur: c,
				onValueChange: q,
				validationState: j,
				value: p
			})
		})
	}
}), null);