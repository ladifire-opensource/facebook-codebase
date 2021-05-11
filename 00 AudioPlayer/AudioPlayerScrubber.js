__d("AudioPlayerScrubber.react", ["cx", "AudioPlayerScrubberBar.react", 
	"AudioPlayerScrubberBarHandle.react", "Event", "React", "SubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React");
	a = {
		scrubberBarHeight: 2,
		scrubberHandleRadius: 6,
		showScrubberHandle: !0
	};
	c = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.subscriptionsHandler = new(b("SubscriptionsHandler"))();
			d.$1 = function(a) {
				a.stopPropagation();
				var c = d.scrubberRef.current;
				c = (c = c == null ? void 0 : c.getBoundingClientRect().left) != null ? c : 0;
				c = a.pageX - c;
				d.props.onSeekStart(c / d.props.width * d.props.duration);
				d.isMouseDown = !0;
				d.onMouseMoveHandlerRef = d.$2(a.pageX, c);
				d.subscriptionsHandler.addSubscriptions(b("Event").listen(document, "mousemove", d.onMouseMoveHandlerRef), b("Event").listen(document, "mouseup", d.$3))
			};
			d.$3 = function() {
				d.isMouseDown = !1, d.props.onSeekEnd(), d.releaseSubscriptions()
			};
			d.isMouseDown = !1;
			d.onMouseMoveHandlerRef = null;
			d.scrubberRef = h.createRef();
			return d
		}
		var d = c.prototype;
		d.componentWillUnmount = function() {
			this.releaseSubscriptions()
		};
		d.releaseSubscriptions = function() {
			this.subscriptionsHandler.release(), this.subscriptionsHandler.engage()
		};
		d.$2 = function(a, b) {
			var c = this;
			return function(d) {
				if (c.isMouseDown) {
					d = d.pageX - a + b;
					c.props.onSeekUpdate(d / c.props.width * c.props.duration)
				}
			}
		};
		d.render = function() {
			var a = 0;
			this.props.duration > 0 && (a = this.props.width / this.props.duration);
			a = this.props.progress * a;
			var c = this.props.showScrubberHandle ? this.props.scrubberHandleRadius : 0,
				d = Math.max(this.props.scrubberBarHeight, c * 2);
			return h.jsx("div", {
				className: "_65da",
				ref: this.scrubberRef,
				style: {
					width: this.props.width - c
				},
				children: h.jsx(b("AudioPlayerScrubberBar.react"), {
					backgroundColor: this.props.scrubberBackgroundColor,
					barHeight: this.props.scrubberBarHeight,
					cornerRadius: this.props.cornerRadius,
					height: d,
					lapsedColor: this.props.scrubberLapsedColor,
					onMouseDown: this.$1,
					translate: a,
					theme: this.props.theme,
					width: this.props.width,
					children: this.props.showScrubberHandle ? h.jsx(b("AudioPlayerScrubberBarHandle.react"), {
						color: this.props.scrubberHandleColor,
						onMouseDown: this.$1,
						radius: this.props.scrubberHandleRadius,
						translate: "translate(" + (a - this.props.scrubberHandleRadius) + ")"
					}) : null
				})
			})
		};
		return c
	}(h.Component);
	e.exports = c;
	c.defaultProps = a
}), null);