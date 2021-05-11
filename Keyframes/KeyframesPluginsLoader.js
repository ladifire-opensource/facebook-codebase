__d("KeyframesPluginsLoader", ["Promise", "Bootloader", "flatbuffers"], (function(a, b, c, d, e, f) {
	"use strict";
	var g = {
		DynamicProperties: function(a) {
			return b("Bootloader").loadModules(["KeyframesPluginDynamicProperties", "KeyframesPluginDynamicPropertiesSchema"], a, "KeyframesPluginsLoader")
		},
		LayerName: function(a) {
			return b("Bootloader").loadModules(["KeyframesPluginLayerName", "KeyframesPluginLayerNameSchema"], a, "KeyframesPluginsLoader")
		},
		LayerTags: function(a) {
			return b("Bootloader").loadModules(["KeyframesPluginLayerTags", "KeyframesPluginLayerTagsSchema"], a, "KeyframesPluginsLoader")
		},
		RandomSubdocument: function(a) {
			return b("Bootloader").loadModules(["KeyframesPluginRandomSubdocument", "KeyframesPluginRandomSubdocumentSchema"], a, "KeyframesPluginsLoader")
		},
		Sound: function(a) {
			return b("Bootloader").loadModules(["KeyframesPluginSound", "KeyframesPluginSoundSchema"], a, "KeyframesPluginsLoader")
		},
		SubdocumentSwap: function(a) {
			return b("Bootloader").loadModules(["KeyframesPluginSubdocumentSwap", "KeyframesPluginSubdocumentSwapSchema"], a, "KeyframesPluginsLoader")
		},
		TrimPath: function(a) {
			return b("Bootloader").loadModules(["KeyframesPluginTrimPath", "KeyframesPluginTrimPathSchema"], a, "KeyframesPluginsLoader")
		}
	};

	function h(a, b) {
		return g[a] ? g[a](b) : null
	}

	function i(a) {
		a = a.map(function(a) {
			return new(b("Promise"))(function(b, c) {
				var d = h(a, function() {
					for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
					b(c)
				});
				d || c("Unknown plugin " + a)
			})
		});
		return b("Promise").all(a)
	}
	a = function() {
		a.fromPluginTable = function(b) {
			return i(b).then(function(c) {
				return new a(b, c)
			})
		};
		a.getSupportedPlugins = function() {
			return g
		};

		function a(a, b) {
			this.instances = [], this.$1 = {}, this.$2 = {}, this.$4 = a, this.$3 = b
		}
		var c = a.prototype;
		c.getPluginTable = function() {
			return this.$4
		};
		c.getPluginsForLayer = function(a) {
			return this.$1[a]
		};
		c.maybeInstantiatePluginsForLayer = function(a) {
			var c = a.id();
			if (!this.$2[c]) {
				var d = a.pluginsLength();
				if (d)
					for (var e = 0; e < d; e++) {
						var f = a.plugins(e),
							g = new(b("flatbuffers").ByteBuffer)(f.contentArray());
						f = f.index();
						if (this.$3[f]) {
							var h = this.$3[f],
								i = h[0];
							h = h[1];
							f = "getRootAsPlugin" + this.$4[f];
							h = h[f](g);
							f = new i(h, a);
							this.$1[c] || (this.$1[c] = []);
							this.$1[c].push(f);
							this.instances.push(f);
							f.animationDidLoad()
						}
					}
				this.$2[c] = !0
			}
		};
		return a
	}();
	e.exports = a
}), null);