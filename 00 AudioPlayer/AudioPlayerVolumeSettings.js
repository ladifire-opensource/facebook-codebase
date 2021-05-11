__d("AudioPlayerVolumeSettings", ["WebStorage", "keyMirror"], (function(a, b, c, d, e, f) {
	var g, h = b("keyMirror")({
		AUDIO_PLAYER_CONTROLLER_VOLUME_BEFORE_MUTE: "",
		AUDIO_PLAYER_CONTROLLER_VOLUME: ""
	});
	a = function() {
		function a() {
			this.$1 = 1, this.$2 = 1, this.$3 = (g || (g = b("WebStorage"))).getLocalStorage()
		}
		var c = a.prototype;
		c.getVolume = function() {
			if (this.$3) {
				var a = this.$3.getItem(h.AUDIO_PLAYER_CONTROLLER_VOLUME);
				if (a !== null && !isNaN(+a)) return +a
			}
			return this.$1
		};
		c.saveVolume = function(a) {
			this.$3 && this.$3.setItem(h.AUDIO_PLAYER_CONTROLLER_VOLUME, String(a)), this.$1 = a
		};
		c.getLastVolumeBeforeMute = function() {
			if (this.$3) {
				var a = this.$3.getItem(h.AUDIO_PLAYER_CONTROLLER_VOLUME_BEFORE_MUTE);
				if (a !== null && !isNaN(+a)) return +a
			}
			return this.$2
		};
		c.saveLastVolumeBeforeMute = function(a) {
			this.$3 && this.$3.setItem(h.AUDIO_PLAYER_CONTROLLER_VOLUME_BEFORE_MUTE, String(a)), this.$2 = a
		};
		return a
	}();
	c = new a();
	e.exports = c
}), null);