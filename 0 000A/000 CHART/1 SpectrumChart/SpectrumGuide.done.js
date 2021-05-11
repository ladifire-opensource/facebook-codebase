__d("SpectrumGuide.react", ["React", "ReactART", "createReactClass_DEPRECATED", "prop-types", 
	"SpectrumDataVisualization", "SpectrumUtilities"], (function(a, b, c, d, e, f) {
	var g = b("React"),
		h = b("ReactART").Path,
		i = b("ReactART").Shape;
	a = b("createReactClass_DEPRECATED")({
		displayName: "SpectrumGuide",
		mixins: [b("SpectrumDataVisualization").Mixin],
		propTypes: {
			x: b("prop-types").number.isRequired,
			color: b("prop-types").string
		},
		getX: function() {
			return b("SpectrumDataVisualization").getX(this.props.scaleX, this.props.x)
		},
		render: function() {
			var a = this.props.theme.guide,
				c = b("SpectrumUtilities").getOuterRange(this.props.scaleY),
				d = c[0];
			c = c[1];
			var e = this.getX();
			d = h().moveTo(e, d).lineTo(e, c);
			return g.jsx(i, {
				d: d,
				stroke: this.props.color || a.color,
				strokeWidth: a.width
			})
		}
	});
	e.exports = a
}), null);