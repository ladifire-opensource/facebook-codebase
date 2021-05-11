__d("CometPhoneCountrySelect.react", ["CometLeadGenNativeFormSingleSelect.react", "PhoneCodes", "TetraTextPairing.react", "react"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react");

	function i() {
		return Object.keys(b("PhoneCodes")).map(function(a) {
			var c = b("PhoneCodes")[a];
			return {
				primaryText: c.country_name,
				secondaryText: a + "+" + c.phone_code,
				value: a
			}
		})
	}

	function j(a, b) {
		return a.filter(function(a) {
			return !b.has(a.primaryText.toString().toLowerCase())
		})
	}

	function k(a, c) {
		var d = c.replace("+", "").trim().toLowerCase(),
			e = parseInt(d, 10);
		return a.filter(function(a) {
			if (isNaN(e)) return a.primaryText.toString().toLowerCase().startsWith(d);
			else return b("PhoneCodes")[a.value].phone_code === e
		})
	}

	function l(a, c) {
		var d;
		a = (d = (d = a == null ? void 0 : a.secondaryText) != null ? d : a == null ? void 0 : a.primaryText) != null ? d : c;
		return h.jsx(b("TetraTextPairing.react"), {
			body: a,
			level: 3
		})
	}

	function a(a) {
		var c = a.buttonLabel;
		c = c === void 0 ? "-" : c;
		var d = a.hasError;
		d = d === void 0 ? !1 : d;
		var e = a.isDisabled;
		e = e === void 0 ? !1 : e;
		var f = a.isExpanded;
		f = f === void 0 ? !1 : f;
		var g = a.onChange,
			m = a.unsupportedCountries;
		a = a.value;
		var n = h.useState(""),
			o = n[0];
		n = n[1];
		var p = h.useMemo(function() {
				return i()
			}, []),
			q = h.useMemo(function() {
				return m ? j(p, m) : p
			}, [p, m]);
		o = o !== "" ? k(q, o) : q;
		return h.jsx("div", {
			className: d ? "jcgfde61 afxsp9o4 ed0hlay0 frvqaej8 mk2mc5f4 s44p3ltw ccm00jje goun2846 kzx2olss aot14ch1 p86d2i9g beltcj47 a64ryyup ku5f423u hmw3o7ox jw3uvs1e" : void 0,
			children: h.jsx(b("CometLeadGenNativeFormSingleSelect.react"), {
				defaultButtonLabel: c,
				disabled: e,
				isExpanded: f,
				onChange: g,
				onQueryChange: n,
				options: p,
				renderButtonLabel: l,
				selectableOptions: o,
				selectedValue: a
			})
		})
	}
}), null);