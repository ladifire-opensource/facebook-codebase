__d("CometFileSelector.react", ["React", "recoverableViolation", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		return a.map(function (a) {
			if (a.indexOf("/") !== -1 || a[0] === ".") return a;
			b("recoverableViolation")('Accept parameter "' + a + '" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)', "profile_comet");
			return "." + a
		}).join(",")
	}

	function a(a) {
		var b = a.accept,
			c = a.children,
			d = a.multiple;
		d = d === void 0 ? !1 : d;
		var e = a.onFilesSelected,
			f = g.useRef(null);
		g.useEffect(function () {
			var a = f.current;
			if (a != null) {
				var b = function (a) {
					a.stopPropagation()
				};
				a.addEventListener("click", b);
				return function () {
					a.removeEventListener("click", b)
				}
			}
		});
		a = g.useCallback(function () {
			f.current != null && f.current.click()
		}, []);
		var i = g.useCallback(function (a) {
			e(a.currentTarget.files), a.currentTarget.value = ""
		}, [e]);
		return g.jsxs(g.Fragment, {
			children: [g.jsx("input", {
				accept: b != null ? h(b) : void 0,
				className: "mkhogb32",
				multiple: d,
				onChange: i,
				ref: f,
				type: "file"
			}), c(a)]
		})
	}
}), null);