__d("AudioPlayer.react", ["AudioPlayerControls", "AudioPlayerView.react", 
	"AudioPlayerVolumeSettings", "Event", "React", "SubscriptionsHandler", 
	"emptyFunction"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = 250,
		i = !0,
		j = !1;
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.forceUpdateInterval = null;
			d.onCanPlay = function() {
				d.props.onReadyToPlay && (d.props.onReadyToPlay(), d.forceUpdate())
			};
			d.onPlay = function() {
				d.playing = !0, d.forceUpdateInterval === null && (d.forceUpdateInterval = window.setInterval(function() {
					d.forceUpdate()
				}, h)), d.props.onTogglePlayPause(i)
			};
			d.onPause = function() {
				d.playing = !1, d.forceUpdate(), d.props.onTogglePlayPause(j), d.$1()
			};
			d.togglePlayPause = function() {
				var a = !d.isPlaying();
				d.props.onTogglePlayPause(a);
				d.setPlayPauseTo(a)
			};
			d.playAudio = function() {
				if (d.getDuration() === 0) return;
				d.playing = !0;
				d.audioElement.play()
			};
			d.pauseAudio = function() {
				if (d.getDuration() === 0) return;
				d.playing = !1;
				d.audioElement.pause()
			};
			d.setVolume = function(a) {
				b("AudioPlayerVolumeSettings").saveVolume(a), d.audioElement.volume = a, d.forceUpdate()
			};
			d.onSeekStart = function(a) {
				d.wasPlaying = d.isPlaying(), d.setPlayPauseTo(j), d.setProgress(a)
			};
			d.onSeekUpdate = function(a) {
				d.setProgress(a)
			};
			d.onSeekEnd = function() {
				d.wasPlaying && !d.isTrackCompleted() && d.setPlayPauseTo(i)
			};
			d.containerRef = g.createRef();
			return d
		}
		var d = c.prototype;
		d.reset = function() {
			this.setPlayPauseTo(j), this.onPause(), this.getDuration() > 0 && this.getProgress() !== 0 && (this.audioElement.currentTime = 0, this.forceUpdate())
		};
		d.setProgress = function(a) {
			this.audioElement.currentTime = Math.min(Math.max(a, 0), this.getDuration()), this.forceUpdate()
		};
		d.getProgress = function() {
			return this.audioElement && this.audioElement.currentTime ? this.audioElement.currentTime : 0
		};
		d.getDuration = function() {
			return this.audioElement && this.audioElement.duration ? this.audioElement.duration : 0
		};
		d.getVolume = function() {
			return this.audioElement && this.audioElement.volume ? this.audioElement.volume : 0
		};
		d.isPlaying = function() {
			return this.audioElement !== void 0 && !this.audioElement.paused
		};
		d.isTrackCompleted = function() {
			return this.getDuration() === this.getProgress()
		};
		d.setPlayPauseTo = function(a) {
			this.isPlaying() !== a && this.playing !== a && (a ? this.playAudio() : this.pauseAudio())
		};
		d.moveProgressBySec = function(a) {
			this.setProgress(this.getProgress() + a)
		};
		d.componentDidMount = function() {
			var a;
			this.audioElement = document.createElement("audio");
			this.subscriptionsHandler = new(b("SubscriptionsHandler"))();
			this.subscriptionsHandler.addSubscriptions((a = b("Event")).listen(this.audioElement, "canplay", this.onCanPlay), a.listen(this.audioElement, "play", this.onPlay), a.listen(this.audioElement, "pause", this.onPause), a.listen(this.containerRef.current, "audio-play", this.playAudio), a.listen(this.containerRef.current, "audio-pause", this.pauseAudio), a.listen(this.audioElement, "ended", this.props.onTrackEnded));
			this.audioElement.src = this.props.src;
			this.audioElement.loop = this.props.loop;
			this.setVolume(this.props.defaultVolume);
			this.audioElement.autoplay = this.props.autoplay;
			this.audioElement.load()
		};
		d.componentDidUpdate = function(a) {
			this.props.src !== a.src && (this.audioElement.src = this.props.src, this.audioElement.load(), this.forceUpdate())
		};
		d.$1 = function() {
			this.forceUpdateInterval !== null && (window.clearInterval(this.forceUpdateInterval), this.forceUpdateInterval = null)
		};
		d.componentWillUnmount = function() {
			this.audioElement && (this.audioElement.pause(), this.audioElement.remove()), this.subscriptionsHandler.release(), this.$1()
		};
		d.getOnClickFunctionForControlPanelButton = function(a) {
			var c = this;
			switch (a) {
				case b("AudioPlayerControls").PLAY_PAUSE:
					return this.togglePlayPause;
				case b("AudioPlayerControls").SKIP_BACK_INCREMENTAL:
					return function() {
						c.moveProgressBySec(-10)
					};
				case b("AudioPlayerControls").SKIP_FORWARD_INCREMENTAL:
					return function() {
						c.moveProgressBySec(10)
					};
				case b("AudioPlayerControls").SKIP_FORWARD:
					return this.props.onSkipToNext ? this.props.onSkipToNext : function() {
						c.setProgress(c.getDuration())
					};
				case b("AudioPlayerControls").SKIP_BACK:
					return this.props.onRewindToPrevious && this.getProgress() <= 1 ? this.props.onRewindToPrevious : function() {
						c.setProgress(0), c.setPlayPauseTo(i)
					};
				default:
					return function() {}
			}
		};
		d.render = function() {
			var a = this,
				c = this.props.controlPanelSelection.map(function(b) {
					return {
						typeName: b,
						onClick: a.getOnClickFunctionForControlPanelButton(b)
					}
				});
			return g.jsx(b("AudioPlayerView.react"), babelHelpers["extends"]({}, this.state, this.props, {
				controlPanelButtons: c,
				containerRef: this.containerRef,
				isPlaying: this.isPlaying(),
				duration: this.getDuration(),
				progress: this.getProgress(),
				volume: this.getVolume(),
				onSeekEnd: this.onSeekEnd,
				onSeekStart: this.onSeekStart,
				onSeekUpdate: this.onSeekUpdate,
				togglePlayPause: this.togglePlayPause,
				onVolumeChange: this.setVolume
			}))
		};
		return c
	}(g.Component);
	e.exports = a;
	a.defaultProps = {
		autoplay: !1,
		defaultVolume: .7,
		controlPanelSelection: [],
		iconSize: "MEDIUM",
		loop: !1,
		simplePlayPauseButton: !0,
		timestampPosition: "left",
		theme: "DARK",
		width: 400,
		onDownload: c = b("emptyFunction"),
		onTogglePlayPause: c,
		onReadyToPlay: c,
		onTrackEnded: c
	}
}), null);