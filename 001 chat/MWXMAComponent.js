__d("MWXMAComponent.bs", ["fbt", "React", "qex", "ReactStyle.bs", "stylex", "MWXMAContent.bs", 
	"CurrentEnvironment", "MessengerSurfaceType.bs", "TetraishHScroll.react", "WorkGalahadMWChatTabContext.bs"], (function(a, b, c, d, e, f, g) {
	"use strict";
	var h, i = b("React"),
		j = {
			card: {
				verticalAlign: "sf5mxxl7",
				backgroundColor: "b3i9ofy5",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				height: "datstx6m"
			},
			incoming: {
				borderTopEndRadius: "qlfml3jp",
				borderBottomEndRadius: "inkptoze"
			},
			incomingFirst: {
				borderTopStartRadius: "e72ty7fz"
			},
			incomingLast: {
				borderBottomStartRadius: "qmr60zad"
			},
			outgoing: {
				borderTopStartRadius: "e72ty7fz",
				borderBottomStartRadius: "qmr60zad"
			},
			outgoingFirst: {
				borderTopEndRadius: "qlfml3jp"
			},
			outgoingLast: {
				borderBottomEndRadius: "inkptoze"
			},
			centered: {
				marginTop: "km676qkl",
				marginEnd: "ad2k81qe",
				marginBottom: "myj7ivm5",
				marginStart: "f9o22wc5"
			},
			hasText: {
				borderTopStartRadius: "monazrh9",
				borderTopEndRadius: "h905i5nu"
			}
		};

	function k(a) {
		var c = a.outgoing,
			d = a.first,
			e = a.last,
			f = a.children,
			g = a.centered;
		a = a.hasText;
		g = g !== void 0 ? g : !1;
		var k = i.useMemo(function() {
			if (b("CurrentEnvironment").messengerdotcom) return b("ReactStyle.bs").unsafeAddProp({}, "--secondary-button-background", "rgba(0,0,0,.06)");
			else return {}
		}, []);
		return i.jsx("div", {
			children: f,
			className: (h || (h = b("stylex")))(j.card, c ? j.outgoing : j.incoming, d ? c ? j.outgoingFirst : j.incomingFirst : !1, e ? c ? j.outgoingLast : j.incomingLast : !1, g ? j.centered : !1, a ? j.hasText : !1),
			style: k
		})
	}
	c = {
		make: k
	};
	var l = {
		scroller: {
			position: "l9j0dhe7",
			start: "cvthrh62",
			width: "bsget9wy",
			marginBottom: "quq7zyon"
		},
		scrollerThinTab: {
			width: "k4urcfbm"
		},
		scrollerWorkplace: {
			start: "j9ispegn",
			width: "k4urcfbm"
		},
		cardWrapper: {
			backgroundColor: "hybvsw6c",
			height: "datstx6m",
			width: "k4urcfbm"
		},
		spacer: {
			marginTop: "pcgkmkmd"
		}
	};

	function m(a) {
		var c = a.items,
			d = a.hasText;
		a = i.useContext(b("WorkGalahadMWChatTabContext.bs").context);
		a = a.surface === b("MessengerSurfaceType.bs").workChat || a.surface === b("MessengerSurfaceType.bs").workQuickchat;
		return i.jsx("div", {
			children: i.jsx(b("TetraishHScroll.react"), {
				children: c.map(function(a, e) {
					var f = e === 0,
						g = e === (c.length - 1 | 0);
					return i.jsx("div", {
						children: i.jsx("div", {
							children: a,
							className: (h || (h = b("stylex")))(j.card, f ? j.incomingFirst : !1, f ? j.incomingLast : !1, f && d ? j.hasText : !1, g ? j.outgoingFirst : !1, g ? j.outgoingLast : !1, d ? l.spacer : !1)
						}),
						className: h(l.cardWrapper)
					}, e.toString())
				}),
				accessibilityLabel: g._("Message containing multiple sub messages"),
				baseCardWidth: 300,
				maxWidth: 200,
				peek: !0,
				peekPadding: a ? 0 : 44,
				peekPaddingEnd: a ? 0 : 36
			}),
			className: (h || (h = b("stylex")))(l.scroller, b("qex")._("1586109") ? l.scrollerThinTab : !1, a ? l.scrollerWorkplace : !1)
		})
	}
	d = {
		styles: l,
		make: m
	};

	function a(a) {
		var c = a.xma,
			d = a.first,
			e = a.last,
			f = a.outgoing,
			g = a.dispatch;
		a = a.hasText;
		a = a !== void 0 ? a : !1;
		switch (c.TAG | 0) {
			case 0:
				var h = c._2,
					j = c._1;
				return i.jsx(m, {
					items: c._0.map(function(a, c) {
						return i.jsx(b("MWXMAContent.bs").make, {
							content: a,
							messageId: h,
							dispatch: g,
							attribution: j
						}, c.toString())
					}),
					hasText: a
				});
			case 1:
				return i.jsx(k, {
					outgoing: f,
					first: d,
					last: e,
					children: i.jsx(b("MWXMAContent.bs").make, {
						content: c._0,
						messageId: c._2,
						dispatch: g,
						attribution: c._1
					}),
					hasText: a
				});
			case 2:
				return i.jsx(k, {
					outgoing: f,
					first: d,
					last: e,
					children: i.jsx(b("MWXMAContent.bs").make, {
						content: c._0,
						messageId: c._2,
						dispatch: g,
						attribution: c._1
					}),
					centered: !0,
					hasText: a
				})
		}
	}
	e = a;
	f.common = j;
	f.VerticalLayout = c;
	f.HorizontalLayout = d;
	f.make = e
}), null);