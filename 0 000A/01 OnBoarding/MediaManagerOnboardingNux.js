__d("MediaManagerOnboardingNux.react", ["cssVar", "fbt", "GeoBaseText.react", "GeoButton.react", "MediaManagerGeneralNuxContainer.react", "MediaManagerOnboardingFlowActions", "React", "SUILink.react", "SUIMediaManagerTheme", "SUITheme", "cxMargin", "ge", "geoMargin"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React"),
		j = new(b("SUITheme"))({
			id: "media-manager-onboarding-nux-back-button",
			components: babelHelpers["extends"]({}, b("SUIMediaManagerTheme"), {
				SUILink: babelHelpers["extends"]({}, b("SUIMediaManagerTheme").SUILink, {
					normalColor: "#FFFFFF",
					hoverColor: "transparent"
				})
			})
		});
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.state = {}, d.$1 = function() {
				d.props.currentPosition === d.props.totalCount - 1 ? b("MediaManagerOnboardingFlowActions").finishOnboardingNux(d.props.currentPosition) : b("MediaManagerOnboardingFlowActions").moveToNextNux(d.props.currentPosition)
			}, d.$2 = function() {
				b("MediaManagerOnboardingFlowActions").finishOnboardingNux(d.props.totalCount - 1)
			}, d.$3 = function() {
				b("MediaManagerOnboardingFlowActions").goBackToPreviousNux(d.props.currentPosition)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		c.getDerivedStateFromProps = function(a, c) {
			if (a !== c) {
				if (b("ge")(a.contextDOMID) != null) {
					c = b("ge")(a.contextDOMID).getBoundingClientRect();
					c = c.top + window.pageYOffset;
					c = c - window.innerHeight / 2;
					window.scrollTo(0, c)
				}
				return {
					contextDOMID: a.contextDOMID
				}
			}
			return null
		};
		var d = c.prototype;
		d.componentDidMount = function() {
			b("MediaManagerOnboardingFlowActions").logOnboardingFirstNuxImpression(this.props.currentPosition)
		};
		d.render = function() {
			var a = i.jsx(b("GeoBaseText.react"), {
					color: "inverted",
					size: "accent",
					children: h._("{current position of the nux}\/{total count of all nuxs}", [h._param("current position of the nux", this.props.currentPosition + 1), h._param("total count of all nuxs", this.props.totalCount)])
				}),
				c = this.props.canSkip ? i.jsx(b("GeoButton.react"), {
					"data-testid": void 0,
					label: h._("B\u1ecf qua"),
					xstyle: b("geoMargin").end8,
					onClick: this.$2
				}) : this.props.shouldShowGoBackButton ? i.jsx(b("SUILink.react"), {
					margin: "_3-91",
					theme: j,
					onClick: this.$3,
					children: i.jsx(b("GeoBaseText.react"), {
						color: "inverted",
						size: "accent",
						children: h._("Quay l\u1ea1i")
					})
				}) : null;
			return i.jsx(b("MediaManagerGeneralNuxContainer.react"), {
				alignment: this.props.alignment,
				buttonAction: this.$1,
				buttonLabel: this.props.currentPosition === this.props.totalCount - 1 ? h._("Xong") : h._("Ti\u1ebfp"),
				content: this.props.content,
				contextDOMID: this.props.contextDOMID,
				footerLeftSection: a,
				isArrowOfNuxLight: this.props.isArrowOfNuxLight,
				isOnboardingNUX: !0,
				leftButton: c,
				offsetX: this.props.offsetX,
				offsetY: this.props.offsetY,
				position: this.props.position,
				title: this.props.title
			})
		};
		return c
	}(i.Component);
	e.exports = a
}), null);