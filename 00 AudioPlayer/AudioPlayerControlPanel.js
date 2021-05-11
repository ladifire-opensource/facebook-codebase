__d("AudioPlayerControlPanel.react", ["ix", "cx", "AudioPlayerControlButton.react", 
	"AudioPlayerControls", "React", "asset"], (function(a, b, c, d, e, f, g, h) {
	"use strict";
	var i = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.render = function() {
			var a = this;
			return i.jsx("div", {
				className: "_zwm",
				children: this.props.controlPanelButtons.map(function(c) {
					var d, e;
					switch (c.typeName) {
						case b("AudioPlayerControls").PLAY_PAUSE:
							d = a.props.playing ? g("417657") : g("417688");
							e = a.props.playing ? g("417661") : g("417687");
							break;
						case b("AudioPlayerControls").SKIP_BACK:
							d = g("478171");
							e = g("478172");
							break;
						case b("AudioPlayerControls").SKIP_BACK_INCREMENTAL:
							d = g("478173");
							e = g("478174");
							break;
						case b("AudioPlayerControls").SKIP_FORWARD:
							d = g("478169");
							e = g("478170");
							break;
						case b("AudioPlayerControls").SKIP_FORWARD_INCREMENTAL:
							d = g("478175");
							e = g("478176");
							break
					}
					return d ? i.jsx(b("AudioPlayerControlButton.react"), {
						imageURI: d,
						imageOnHoverURI: e,
						onClick: c.onClick
					}, c.typeName) : null
				})
			})
		};
		return c
	}(i.Component);
	e.exports = a
}), null);