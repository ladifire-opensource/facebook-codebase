__d("CometNotificationsDropdown.react", ["fbt", "CometErrorBoundary.react", 
	"CometHero.react", "CometNotificationsContext", "CometNotificationsInteractionLogger", 
	"CometNotificationsInteractionLoggingContext", "CometNotificationsListWrapper.react", 
	"CometNotificationsRenderLocations", "CometRelay", "CometTopNavListDropdown.react", 
	"QPLUserFlow", "React", "unrecoverableViolation", "CometNotificationsDropdownQuery.graphql"], (function(a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React"),
		j = h !== void 0 ? h : h = b("CometNotificationsDropdownQuery.graphql"),
		k = 12e5,
		l = function() {
			var a = i.useContext(b("CometNotificationsInteractionLoggingContext").CometNotificationsInteractionLoggingContext),
				c = a.notifsLoadCompleteRef;
			b("CometNotificationsInteractionLogger").start("dropdown");
			var d = k++;
			b("QPLUserFlow").start(30605361, {
				instanceKey: d
			});
			i.useEffect(function() {
				var a = c.current;
				return function() {
					a !== !0 ? (b("CometNotificationsInteractionLogger").cancel(), b("QPLUserFlow").endCancel(30605361, {
						instanceKey: d
					})) : b("QPLUserFlow").endSuccess(30605361, {
						instanceKey: d
					})
				}
			}, [d, c])
		};

	function m(a) {
		l();
		var c = b("CometRelay").usePreloadedQuery(j, a.queries.notificationsDropdownQueryReference);
		c = c == null ? void 0 : c.viewer;
		if (c == null) throw b("unrecoverableViolation")("viewer cannot be null when querying for notifications", "comet_notifications");
		var d = i.useMemo(function() {
			return {
				renderLocation: b("CometNotificationsRenderLocations").DROPDOWN
			}
		}, []);
		return i.jsxs(b("CometTopNavListDropdown.react"), {
			label: g._("Th\u00f4ng b\u00e1o"),
			name: "NotificationList",
			children: [i.jsx(b("CometHero.react"), {
				description: "NotificationList"
			}), i.jsx(b("CometNotificationsContext").Provider, {
				value: d,
				children: i.jsx(b("CometNotificationsListWrapper.react"), {
					onClose: a.props.onClose,
					viewer: c
				})
			})]
		})
	}

	function a(a) {
		var c = b("CometNotificationsInteractionLoggingContext").useInteractionLoggingRefs();
		return i.jsx(b("CometErrorBoundary.react"), {
			onError: function(a) {
				c.notifsLoadCompleteRef && (c.notifsLoadCompleteRef.current = !0), b("CometNotificationsInteractionLogger").error(a)
			},
			children: i.jsx(b("CometNotificationsInteractionLoggingContext").CometNotificationsInteractionLoggingContext.Provider, {
				value: c,
				children: i.jsx(m, babelHelpers["extends"]({}, a))
			})
		})
	}
}), null);