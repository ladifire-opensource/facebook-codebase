__d("AdsPEMessageBarContainer.react", ["cx", "AdsApplicationUtils", 
	"AdsCFAutoFixTargetingContainer.react", "AdsFluxContainer", 
	"AdsInterfacesLogEvents", "AdsMgmtDimensionSelectors", "deepEquals", 
	"requireCond", "cr:1689542", "AdsInterfacesLogger", "AdsMgmtMessageActions", 
	"AdsMgmtMessageBarModernV2.react", "AdsMgmtQPLLogger", "cr:1745203", "AdsPEMegaphoneTipStore", 
	"React", "gkx"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("AdsInterfacesLogEvents").Event,
		i = b("AdsInterfacesLogEvents").EventCategory,
		j = b("React"),
		k = b("gkx")("1685524");
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c(c) {
			var d;
			d = a.call(this, c) || this;
			d.$3 = function () {
				b("AdsInterfacesLogger").logOnce({
					eventName: h.ADS_MANAGER_BANNER_MESSAGES_SHOW_MORE,
					eventCategory: i.USER_ACTION,
					data: {
						item_count: d.$5()
					}
				})
			};
			d.$2 = function () {
				var a = b("gkx")("1784009") ? b("cr:1745203") ? b("cr:1745203").getTableHeight() : b("AdsMgmtDimensionSelectors").tableHeightSelector() : d.state.tableHeight;
				b("AdsInterfacesLogger").logOnce({
					eventName: h.ADS_MANAGER_BANNER_MESSAGES_RENDERED,
					data: {
						item_count: d.$5(),
						new_value: a
					}
				})
			};
			b("AdsMgmtQPLLogger").addPoint(41484289, "MESSAGE_BAR_CONTAINER_MOUNT_START");
			return d
		}
		c.getStores = function () {
			return [b("AdsPEMegaphoneTipStore")].concat(k ? b("AdsMgmtDimensionSelectors").tableHeightSelector.getStores() : [b("cr:1745203")]).filter(Boolean)
		};
		c.calculateState = function () {
			var a = b("AdsPEMegaphoneTipStore").getMessages(),
				c = b("gkx")("1784009") ? null : b("cr:1745203") ? b("cr:1745203").getTableHeight() : b("AdsMgmtDimensionSelectors").tableHeightSelector();
			return {
				messages: a,
				tableHeight: c
			}
		};
		var d = c.prototype;
		d.componentDidMount = function () {
			b("AdsMgmtQPLLogger").addPoint(41484289, "MESSAGE_BAR_CONTAINER_MOUNT_END")
		};
		d.shouldComponentUpdate = function (a, c) {
			return !b("deepEquals")(this.state.messages, c.messages)
		};
		d.render = function () {
			return j.jsxs("div", {
				className: "_1saj",
				children: [j.jsx(b("AdsCFAutoFixTargetingContainer.react"), {
					bannerType: "overview_banner"
				}), j.jsx(b("AdsMgmtMessageBarModernV2.react"), {
					messages: this.state.messages,
					onDismissMessage: this.$1,
					onRender: this.$2,
					onShowAll: this.$3,
					onShowLess: this.$4
				}), b("cr:1689542") != null && b("AdsApplicationUtils").isPowerEditor() && j.jsx(b("cr:1689542"), {})]
			})
		};
		d.$5 = function () {
			return this.state.messages.filter(function (a) {
				a = a.isBinding;
				return !a
			}).length
		};
		d.$4 = function () {
			b("AdsInterfacesLogger").log({
				eventName: h.ADS_MANAGER_BANNER_MESSAGES_SHOW_LESS,
				eventCategory: i.USER_ACTION
			})
		};
		d.$1 = function (a) {
			b("AdsMgmtMessageActions").dismissMessage(a)
		};
		return c
	}(j.Component);
	c = b("AdsFluxContainer").create(a, {
		pure: !b("gkx")("1784009"),
		name: e.id
	});
	e.exports = c
}), null);