__d("PagesManagerInboxThreadLabelContainer.react", ["cx", "fbt", "FDSPopover.react", "PagesManagerInboxLabel.react", "React"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this,
				c = [],
				d = [],
				e = 12,
				f = 2,
				g = !1;
			this.props.labels.forEach(function(j, k) {
				if (!j) return;
				var l = c;
				k >= f && (l = d, g || (g = !0, c.push(i.jsx("div", {
					className: "_6yv3",
					children: h._("+{number of labels on this thread that are not shown} more", [h._param("number of labels on this thread that are not shown", a.props.labels.length - k)])
				}, a.props.labels.length), i.jsx("div", {
					className: "_7136",
					ref: a.props.setupHoverContextRef
				}, k))));
				l.push(i.jsx(b("PagesManagerInboxLabel.react"), {
					className: "_6yv3",
					color: j.color,
					id: j.id,
					isToken: !1,
					name: j.name.length > e ? j.name.substring(0, e - 3) + "..." : j.name,
					toolTipString: l !== d && !a.props.shouldShowCometNewDesign ? j.name : ""
				}, k))
			});
			return i.jsxs("div", {
				className: "_6yv4",
				children: [c, i.jsx(b("FDSPopover.react"), {
					contentWidthUseSparingly: 100,
					hoverContextRef: this.props.hoverContextRef,
					children: d
				})]
			})
		};
		return c
	}(i.PureComponent);
	e.exports = a
}), null);