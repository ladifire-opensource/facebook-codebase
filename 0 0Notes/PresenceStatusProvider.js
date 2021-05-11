__d("PresenceStatusProvider.react", ["Actor", "AvailableListConstants", "CometPlaceholder.react", "PresenceStatusContext", "React", "deferredLoadComponent", "requireDeferred"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("deferredLoadComponent")(b("requireDeferred")("PresenceStatusProviderSubscriptionComponent.react"));

	function a(a) {
		var c = g.useRef({}),
			d = g.useRef(!1),
			e = g.useRef({}),
			f = g.useCallback(function() {
				Object.keys(e.current).forEach(function(a) {
					a = e.current[a];
					typeof a === "function" && a()
				})
			}, []),
			i = g.useRef(1),
			j = b("Actor").useActor(),
			k = j[0];
		j = g.useMemo(function() {
			return {
				addListener: function(a) {
					var b = i.current + "";
					e.current[b] = a;
					i.current += 1;
					return function() {
						delete e.current[b]
					}
				},
				get: function(a) {
					return d.current ? (a = (a = c.current[a]) == null ? void 0 : a.status) != null ? a : null : b("AvailableListConstants").OFFLINE
				},
				getChatVisibility: function() {
					return d.current
				},
				getOnlineIDs: function() {
					return d.current ? Object.keys(c.current).filter(function(a) {
						return k !== a && ((a = c.current[a]) == null ? void 0 : a.status) === b("AvailableListConstants").ACTIVE
					}) : []
				},
				getStatus: function(a) {
					return d.current ? c.current[a] : null
				}
			}
		}, [k]);
		return g.jsxs(b("PresenceStatusContext").Provider, {
			value: j,
			children: [g.jsx(b("CometPlaceholder.react"), {
				fallback: null,
				children: g.jsx(h, {
					chatVisibilityRef: d,
					presenceInformer: f,
					presenceMap: c
				})
			}), a.children]
		})
	}
}), null);