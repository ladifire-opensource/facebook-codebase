__d("useTopNavigationLogging", ["React", "WebSession", "requireDeferred", "useVisibilityObserver"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("requireDeferred")("CometTopnavItemClickFalcoEvent"),
		i = b("requireDeferred")("CometTopnavItemImpressionFalcoEvent"),
		j = function (a) {
			var c = a.badgeValue;
			c = c === void 0 ? "" : c;
			var d = a.itemKey,
				e = a.navItemType,
				f = a.position;
			f = f === void 0 ? 0 : f;
			a = a.selected;
			a = a === void 0 ? !1 : a;
			return {
				bt: "number",
				bv: c,
				nii: null,
				nin: d,
				nip: f,
				nit: e,
				sel: a,
				si: b("WebSession").getId()
			}
		},
		k = function (a) {
			var b = g.useCallback(function () {
				h.onReady(function (b) {
					b.log(function () {
						return j(a)
					})
				})
			}, [a]);
			return b
		},
		l = function (a) {
			var c = g.useCallback(function () {
				i.onReady(function (b) {
					b.log(function () {
						return j(a)
					})
				})
			}, [a]);
			return b("useVisibilityObserver")({
				onVisible: c
			})
		},
		m = function (a) {
			var b = a.badgeValue,
				c = b === void 0 ? "" : b,
				d = a.itemKey,
				e = a.navItemType,
				f = a.position;
			b = a.selected;
			var h = b === void 0 ? !1 : b;
			a = g.useMemo(function () {
				return {
					badgeValue: c,
					itemKey: d,
					navItemType: e,
					position: f,
					selected: h
				}
			}, [c, d, e, f, h]);
			return [k(a), l(a)]
		};
	a = function () {
		return m({
			itemKey: "logo",
			navItemType: "logo"
		})
	};
	f.useLogoLoggingCallbacks = a;
	c = function () {
		return m({
			itemKey: "create-button",
			navItemType: "create"
		})
	};
	f.useCreateButtonLoggingCallbacks = c;
	d = function (a, b) {
		return m({
			itemKey: a,
			navItemType: "create",
			position: b
		})
	};
	f.useCreateItemLoggingCallbacks = d;
	e = function () {
		return m({
			itemKey: "settings-button",
			navItemType: "jewel"
		})
	};
	f.useSettingsButtonLoggingCallbacks = e;
	a = function () {
		return m({
			itemKey: "home-link",
			navItemType: "topnav-link"
		})
	};
	f.useHomeLinkLoggingCallbacks = a;
	c = function () {
		return m({
			itemKey: "profile-link",
			navItemType: "topnav-link"
		})
	};
	f.useProfileLinkLoggingCallbacks = c;
	d = function () {
		return m({
			itemKey: "find-friends",
			navItemType: "topnav-link"
		})
	};
	f.useFindFriendsLinkLoggingCallbacks = d;
	e = function (a, b, c) {
		return m({
			itemKey: a,
			navItemType: "settings",
			position: b,
			selected: c
		})
	};
	f.useSettingsItemLoggingCallbacks = e;
	a = function () {
		return m({
			itemKey: "messenger-jewel",
			navItemType: "jewel"
		})
	};
	f.useMessengerButtonLoggingCallbacks = a;
	c = function () {
		return m({
			itemKey: "friends-jewel",
			navItemType: "jewel"
		})
	};
	f.useFriendsButtonLoggingCallbacks = c;
	d = function (a) {
		return m({
			badgeValue: a,
			itemKey: "notifications-jewel",
			navItemType: "jewel"
		})
	};
	f.useNotificationsButtonLoggingCallbacks = d;
	e = function () {
		return m({
			itemKey: "birthdays",
			navItemType: "birthdays"
		})
	};
	f.useBirthdaysButtonLoggingCallbacks = e;
	a = function () {
		return m({
			itemKey: "friends-count-rhc",
			navItemType: "friend_count_rhc"
		})
	};
	f.useFriendRequestsCountRHCLoggingCallbacks = a;
	c = function () {
		return m({
			itemKey: "event",
			navItemType: "events"
		})
	};
	f.useEventsButtonLoggingCallbacks = c
}), null);