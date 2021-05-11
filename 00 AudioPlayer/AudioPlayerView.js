__d("AudioPlayerView.react", ["cx", "AudioPlayerControlPanel.react", 
	"AudioPlayerPlayPauseButton.react", "AudioPlayerScrubber.react", 
	"AudioPlayerTimestamp.react", "AudioPlayerVolumeControl.react", 
	"DateConsts", "FlexLayout.react", "React", "SoundCollectionDownloadButton.react", "cxMargin"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			return a.apply(this, arguments) || this
		}
		var d = c.prototype;
		d.calculateScrubberWidth = function(a) {
			var c = this.props,
				d = c.duration,
				e = c.simplePlayPauseButton,
				f = c.showDownload;
			c = c.showVolume;
			f && (a -= 32);
			c && (a -= 32);
			e && (a -= 32);
			if (d > 10 * b("DateConsts").SEC_PER_HOUR) return a - 152;
			if (d > b("DateConsts").SEC_PER_HOUR) return a - 142;
			return d > 10 * b("DateConsts").SEC_PER_MIN ? a - 122 : a - 100
		};
		d.render = function() {
			var a = this.props,
				c = a.className,
				d = a.controlPanelButtons,
				e = a.containerRef,
				f = a.duration,
				g = a.iconSize,
				i = a.isPlaying,
				j = a.onVolumeChange,
				k = a.onDownload,
				l = a.progress,
				m = a.showDownload,
				n = a.showVolume,
				o = a.showScrubber,
				p = a.simplePlayPauseButton,
				q = a.src,
				r = a.timestampPosition,
				s = a.title,
				t = a.theme,
				u = a.togglePlayPause,
				v = a.volume;
			a = a.width;
			p = p ? h.jsx(b("AudioPlayerPlayPauseButton.react"), {
				className: "_6595",
				iconSize: g,
				onClick: u,
				playing: i,
				theme: t
			}) : null;
			u = d.length > 0 ? h.jsx(b("AudioPlayerControlPanel.react"), {
				controlPanelButtons: d,
				playing: i
			}) : null;
			return h.jsxs("div", {
				className: c,
				style: {
					width: a
				},
				ref: e,
				children: [u, h.jsxs(b("FlexLayout.react"), {
					justify: "center",
					align: "center",
					children: [p, h.jsx(b("AudioPlayerTimestamp.react"), {
						progress: l,
						duration: f,
						location: "left",
						position: r,
						theme: t
					}), o ? h.jsx(b("AudioPlayerScrubber.react"), babelHelpers["extends"]({}, this.props, {
						width: this.calculateScrubberWidth(a)
					})) : null, h.jsx(b("AudioPlayerTimestamp.react"), {
						progress: l,
						duration: f,
						location: "right",
						position: r,
						theme: t
					}), n ? h.jsx(b("AudioPlayerVolumeControl.react"), {
						iconSize: g,
						theme: t,
						onVolumeChange: j,
						volume: v,
						tabIndex: "0"
					}) : null, m ? h.jsx(b("SoundCollectionDownloadButton.react"), {
						href: q,
						margin: "_3-8r",
						onDownload: k,
						title: s
					}) : null]
				})]
			})
		};
		return c
	}(h.Component);
	e.exports = a;
	a.defaultProps = {
		showDownload: !1,
		showScrubber: !0,
		showVolume: !1
	}
}), null);