__d("CandelaInteractiveMixin", ["invariant", "CandelaAnimationManager", "CandelaConstants", "CandelaEventEmitter", "CandelaRegionManager", "CandelaUtils", "React", "ReactART", "prop-types"], (function(a, b, c, d, e, f, g) {
	"use strict";
	b("React");
	a = b("CandelaConstants").Event;
	var h = b("ReactART").Path,
		i = {},
		j = Object.keys(a).map(function(a) {
			var c = b("CandelaUtils").events.toHandlerName(a);
			i[c] = a;
			return c
		}),
		k = function() {
			var a = 0;
			return function() {
				return "interactive-" + a++
			}
		}();
	d = {
		id: "",
		uid: "",
		subscriptions: [],
		commands: [],
		contextTypes: {
			animationManager: (c = b("prop-types")).instanceOf(b("CandelaAnimationManager")),
			emitter: c.instanceOf(b("CandelaEventEmitter")),
			interactive: c.bool,
			regionManager: c.instanceOf(b("CandelaRegionManager"))
		},
		propTypes: {
			addHitRegion: c.bool,
			hoverStyle: c.object,
			hoverThreshold: c.number.isRequired,
			onShapeClick: c.func,
			onShapeDown: c.func,
			onShapeDrag: c.func,
			onShapeDragEnd: c.func,
			onShapeDragStart: c.func,
			onShapeEnter: c.func,
			onShapeEnterProximity: c.func,
			onShapeHover: c.func,
			onShapeInProximity: c.func,
			onShapeLeave: c.func,
			onShapeLeaveProximity: c.func,
			proximityThreshold: c.number.isRequired,
			proximityStyle: c.object,
			regionID: c.string,
			style: c.object
		},
		getDefaultProps: function() {
			return {
				addHitRegion: !0,
				animating: !1,
				hoverThreshold: 5,
				proximityThreshold: 10
			}
		},
		UNSAFE_componentWillUpdate: function() {
			var a = this.props.animating;
			a || this._reset()
		},
		UNSAFE_componentWillMount: function() {
			var a = this.props.regionID;
			this.commands = [];
			this.subscriptions = [];
			this.uid = k();
			this.id = a ? a : this.uid
		},
		componentDidMount: function() {
			this._updateInteraction()
		},
		componentDidUpdate: function() {
			this._updateInteraction()
		},
		componentWillUnmount: function() {
			this._reset()
		},
		_updateInteraction: function() {
			var a = this.props,
				b = a.addHitRegion;
			a = a.animating;
			var c = this.context.interactive;
			if (c && !a) {
				this.buildPath();
				if (!this.commands.length) return;
				b && this._addHitRegion();
				this._attachPropsListeners();
				this._attachListeners && this._attachListeners()
			}
		},
		addCommand: function(a) {
			for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
			this.commands.push({
				name: a,
				args: c
			});
			return this
		},
		getPath: function() {
			this.buildPath();
			return this.commands.reduce(function(a, b) {
				var c = b.name;
				b = b.args;
				return a[c].apply(a, b)
			}, new h())
		},
		buildPath: function() {
			if (this.commands.length) return;
			this._buildPathImpl || g(0, 5836);
			this._buildPathImpl()
		},
		_addHitRegion: function() {
			var a = this.context.regionManager,
				b = this.props,
				c = b.hoverThreshold,
				d = b.proximityThreshold,
				e = b.style,
				f = b.hoverStyle;
			b = b.proximityStyle;
			var g = this.boundingBoxFillOverride || e && !!e.fill || f && !!f.fill || b && !!b.fill;
			e = e && !!e.stroke || f && !!f.stroke || b && !!b.stroke;
			b = f && f.cursor;
			a.addHitRegion({
				commands: this.commands,
				fill: g,
				hoverCursor: b,
				hoverThreshold: c,
				id: this.id,
				proximityThreshold: d,
				stroke: e,
				uid: this.uid
			})
		},
		_attachPropsListeners: function() {
			for (var a = 0, b; b = j[a]; ++a) this.props[b] && this._attachSelfListener(i[b], this.props[b])
		},
		_attachSelfListener: function(a, b) {
			var c = this.context.emitter,
				d = this.id,
				e = this.subscriptions;
			if (c) {
				c = c.addListenerToRegion(a, d, b, this);
				e.push(c)
			}
		},
		_reset: function() {
			var a = this.context,
				b = a.interactive;
			a = a.regionManager;
			this.commands = [];
			if (b) {
				a.removeHitRegion(this.uid);
				for (var b = 0, a; a = this.subscriptions[b]; ++b) a.remove();
				this.subscriptions = []
			}
		}
	};
	e.exports = d
}), null);