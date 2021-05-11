__d("AbstractCalendar.react", ["fbt", "DateFormatConfig", 
	"DateHelpers", "List.react", "LocalDate", "React", "RTLKeys", "joinClasses", "prop-types"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = b("React"),
		i = 7,
		j = 6,
		k = "start",
		l = "mid",
		m = "end",
		n = "only";
	a = function (a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var b, c;
			for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
			return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = function (a) {
				c.props.onCursorChange && c.props.onCursorChange(a)
			}, c.$2 = function (a) {
				if (!c.props.interactive) return;
				(c.props.allowDuplicateSelection || !c.isDateSelected(a)) && c.isDateValid(a) && (c.props.onSelectDateChange && c.props.onSelectDateChange(a))
			}, c.isDateSelected = function (a) {
				return !!c.props.selectDate && a.equals(c.props.selectDate)
			}, c.isDateHighlighted = function (a) {
				return !!c.props.highlightedDates && c.props.highlightedDates.some(function (b) {
					return a.equals(b)
				})
			}, c.isDateValid = function (a) {
				return !c.props.dateRestraints || c.props.dateRestraints.every(function (b) {
					return b(a)
				})
			}, c.$3 = function (a, b, d) {
				c.props.showWeekNumbers && b.unshift(c.$4(d)), a.push(b)
			}, b) || babelHelpers.assertThisInitialized(c)
		}
		var d = c.prototype;
		d.isDateHovered = function (a) {
			return !!this.props.hoveredDates && this.props.hoveredDates.some(function (b) {
				return a.equals(b)
			})
		};
		d.$4 = function (a) {
			a.getDayOfWeek() === 0 && (a = a.addDays(1));
			var c = this.props.classNames || {};
			a = b("DateHelpers").getISOWeekNumber(a);
			return h.jsx("div", {
				className: c.weekNumber,
				role: "rowheader",
				children: a
			}, "weekNumber")
		};
		d.render = function () {
			var a = this.props.focusDate,
				c = this.props.weeklyView,
				d = this.props.weekStart;
			a = c ? a.startOfWeek().addDays((d + 1) % 7) : a.startOfMonth();
			var e = this.props.selectDate,
				f = null,
				p = null;
			this.props.rangeSelectDate !== null && (f = this.props.rangeSelectDate);
			var q = !1;
			if (e && f) {
				var r = e.min(f);
				e = e.max(f);
				p = {
					minDate: r,
					maxDate: e,
					hasDuration: !r.equals(e)
				}
			} else this.props.selectedWeekStart && this.props.selectedWeekEnd && (p = {
				minDate: this.props.selectedWeekStart,
				maxDate: this.props.selectedWeekEnd,
				hasDuration: !this.props.selectedWeekStart.equals(this.props.selectedWeekEnd)
			}, q = !0);
			f = [];
			r = [];
			e = c ? 0 : (a.getDayOfWeek() + 6 - d) % 7;
			var s = this.props.classNames || {};
			for (var t = 0; t < e; ++t) r.push(h.jsx("span", {
				className: s.spacer,
				role: "gridcell"
			}, t));
			e = c ? a.addWeeks(1) : a.addMonths(1);
			while (a.isBefore(e)) {
				t = a;
				a = a.addDays(1);
				var u = a.getMonth() > t.getMonth() || t.getMonth() === 12 && a.getMonth() === 1,
					v = (r.length + 1) % 7,
					w = v === 1 || !c && t.getDayOfMonth() === 1;
				v = v === 0 || !c && u;
				u = null;
				var x = null;
				p && (t.isAfter(p.minDate) && t.isBefore(p.maxDate) ? u = l : t.equals(p.minDate) ? u = k : t.equals(p.maxDate) && (u = m), !p.hasDuration ? x = n : v ? x = w || u == k ? n : m : w ? x = u == m ? n : k : x = l);
				var y = this.props.defaultCursor && this.props.defaultCursor.equals(t);
				r.push(h.jsx(o, {
					date: t,
					dayClassNames: this.props.dayClassNames,
					dayInnerClassNames: this.props.dayInnerClassNames,
					dayInnerFormatter: this.props.dayInnerFormatter,
					dayRenderer: this.props.dayRenderer,
					focused: t.equals(this.props.focusDate),
					highlighted: this.isDateHighlighted(t),
					hovered: this.isDateHovered(t),
					isRowStart: w,
					isRowEnd: v,
					isSelectedWeekRange: q,
					onCursorChange: this.$1,
					onMouseOver: this.props.onMouseOverDay,
					onMouseOut: this.props.onMouseOutDay,
					onSelect: this.$2,
					rangePosition: u,
					setupFocusRef: y ? this.props.setupFocusRef : void 0,
					rowPosition: x,
					selected: this.isDateSelected(t),
					tabIndex: y ? 0 : -1,
					valid: this.isDateValid(t)
				}, t));
				if (v && !c) {
					if (r.length < i) {
						w = i - r.length;
						for (var u = 0; u < w; u++) r.push(h.jsx("span", {
							className: s.spacer,
							role: "gridcell"
						}, u))
					}
					this.$3(f, r, t);
					r = []
				}
			}
			r.length && this.$3(f, r, a);
			if (!this.props.allowVariableRowCount)
				for (var x = f.length; x < j; ++x) f.push(h.jsx("span", {
					className: s.spacer,
					role: "gridcell"
				}, x));
			f = f.map(function (a, b) {
				return h.jsx("div", {
					className: s.row,
					role: "row",
					children: a
				}, b)
			});
			y = [];
			this.props.showWeekNumbers && y.push(h.jsx("li", {
				"aria-label": g._("S\u1ed1 tu\u1ea7n"),
				className: s.weekNumberHeading,
				role: "columnheader",
				children: g._("Tu\u1ea7n")
			}, "title"));
			for (var v = 0; v < i; ++v) y.push(h.jsx("li", {
				className: s.dayName,
				role: "columnheader",
				style: this.props.dayNameStyle,
				children: b("DateFormatConfig").shortDayNames[(d + v) % 7]
			}, v));
			u = Object.assign({}, this.props);
			delete u.allowVariableRowCount;
			delete u.allowDuplicateSelection;
			delete u.classNames;
			delete u.dayClassNames;
			delete u.dayInnerClassNames;
			delete u.dayInnerFormatter;
			delete u.dayNameStyle;
			delete u.dayRenderer;
			delete u.dateRestraints;
			delete u.defaultCursor;
			delete u.focusDate;
			delete u.highlightedDates;
			delete u.interactive;
			delete u.isRowStart;
			delete u.isRowEnd;
			delete u.onCursorChange;
			delete u.onSelectDateChange;
			delete u.rangeSelectDate;
			delete u.selectDate;
			delete u.selectedWeekStart;
			delete u.selectedWeekEnd;
			delete u.setupFocusRef;
			delete u.showWeekNumbers;
			delete u.hoveredDates;
			delete u.weeklyView;
			delete u.weekStart;
			delete u.onMouseOverDay;
			delete u.onMouseOutDay;
			delete u.onFocusDateChange;
			delete u.highlightedTimes;
			return h.jsxs("div", babelHelpers["extends"]({}, u, {
				className: b("joinClasses")(this.props.className, s.root, this.props.interactive ? s.interactive : null, this.props.showWeekNumbers ? s.weekNumbers : null),
				role: "grid",
				children: [h.jsx(b("List.react"), {
					className: s.dayNames,
					border: "none",
					direction: "horizontal",
					role: "row",
					spacing: "none",
					children: y
				}), h.jsx("div", {
					className: s.monthViewDayGrid,
					children: f
				})]
			}))
		};
		return c
	}(h.Component);
	a.propTypes = {
		allowVariableRowCount: (c = b("prop-types")).bool,
		allowDuplicateSelection: c.bool,
		classNames: c.shape({
			dayName: c.string,
			dayNames: c.string,
			interactive: c.string,
			monthViewDayGrid: c.string,
			root: c.string,
			row: c.string,
			spacer: c.string
		}),
		dayClassNames: c.shape({
			day: c.string,
			dayInRange: c.string,
			dayRangeEndpoint: c.string,
			dayRangeLeft: c.string,
			dayRangeOnly: c.string,
			dayRangeRight: c.string,
			dayValid: c.string,
			dayInvalid: c.string
		}),
		dayInnerClassNames: c.shape({
			dayInner: c.string,
			dayInnerFocused: c.string,
			dayInnerHighlighted: c.string,
			dayInnerHovered: c.string,
			dayInnerSelected: c.string,
			dayInnerNotSelected: c.string
		}),
		dayInnerFormatter: c.func,
		dayNameStyle: c.object,
		dayRenderer: c.func,
		dateRestraints: c.arrayOf(c.func),
		defaultCursor: c.instanceOf(d = b("LocalDate")),
		focusDate: c.instanceOf(d).isRequired,
		highlightedDates: c.arrayOf(c.instanceOf(d)),
		hoveredDates: c.arrayOf(c.instanceOf(d)),
		interactive: c.bool,
		onCursorChange: c.func,
		onMouseOverDay: c.func,
		onMouseOutDay: c.func,
		onSelectDateChange: c.func,
		rangeSelectDate: c.instanceOf(d),
		selectDate: c.instanceOf(d),
		selectedWeekStart: c.instanceOf(d),
		selectedWeekEnd: c.instanceOf(d),
		setupFocusRef: c.func,
		showWeekNumbers: c.bool,
		weeklyView: c.bool
	};
	a.defaultProps = {
		allowDuplicateSelection: !1,
		allowVariableRowCount: !0,
		classNames: {},
		dayClassNames: {},
		dayInnerClassNames: {},
		interactive: !0,
		rangeSelectDate: null,
		showWeekNumbers: !1,
		weeklyView: !1,
		weekStart: b("DateFormatConfig").weekStart
	};
	var o = function (c) {
		babelHelpers.inheritsLoose(a, c);

		function a() {
			var a, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (a = d = c.call.apply(c, [this].concat(f)) || this, d.$1 = function (a) {
				return b("joinClasses").apply(babelHelpers.assertThisInitialized(d), Object.keys(a).filter(function (b) {
					return b != "undefined" && a[b]
				}))
			}, d.$2 = function (a) {
				switch (a.keyCode) {
					case b("RTLKeys").RETURN:
					case b("RTLKeys").SPACE:
						a.preventDefault();
						d.$3();
						break;
					case b("RTLKeys").getLeft():
						a.preventDefault();
						d.$4(-1);
						break;
					case b("RTLKeys").getRight():
						a.preventDefault();
						d.$4(1);
						break;
					case b("RTLKeys").UP:
						a.preventDefault();
						d.$4(-7);
						break;
					case b("RTLKeys").DOWN:
						a.preventDefault();
						d.$4(7);
						break;
					case b("RTLKeys").HOME:
						a.preventDefault();
						d.$5(d.props.date.startOfMonth());
						break;
					case b("RTLKeys").END:
						a.preventDefault();
						d.$5(d.props.date.startOfMonth().addMonths(1).subtractDays(1));
						break;
					case b("RTLKeys").PAGE_UP:
						a.preventDefault();
						d.$6(a.ctrlKey || a.altKey ? -12 : -1);
						break;
					case b("RTLKeys").PAGE_DOWN:
						a.preventDefault();
						d.$6(a.ctrlKey || a.altKey ? 12 : 1);
						break
				}
			}, d.$5 = function (a) {
				d.props.onCursorChange(a)
			}, d.$4 = function (a) {
				d.$5(d.props.date.addDays(a))
			}, d.$6 = function (a) {
				d.$5(d.props.date.addMonths(a))
			}, d.$7 = function (a) {
				a.preventDefault()
			}, d.$8 = function (a) {
				d.props.onMouseOut && d.props.onMouseOut(d.props.date)
			}, d.$9 = function (a) {
				d.props.onMouseOver && d.props.onMouseOver(d.props.date)
			}, d.$3 = function () {
				d.props.valid && d.props.onSelect(d.props.date)
			}, a) || babelHelpers.assertThisInitialized(d)
		}
		var d = a.prototype;
		d.render = function () {
			var a, b = this.props,
				c = b.dayRenderer,
				d = b.isRowStart,
				e = b.isRowEnd;
			b = babelHelpers.objectWithoutPropertiesLoose(b, ["dayRenderer", "isRowStart", "isRowEnd"]);
			var f = b.rowPosition,
				g = b.rangePosition,
				i = b.isSelectedWeekRange;
			if (c != null) return c({
				date: b.date,
				focusRef: b.setupFocusRef,
				isHighlighted: b.highlighted,
				isRowStart: d,
				isRowEnd: e,
				isSelected: b.selected,
				isValid: b.valid,
				onClick: this.$3,
				onKeydown: this.$2,
				rangePosition: g,
				tabIndex: b.tabIndex
			});
			c = b.dayClassNames;
			d = b.dayInnerClassNames;
			e = g == k || g == l && f == k;
			var j = g == m || g == l && f == m;
			f = f == n;
			i = (g == k || g == m) && !i;
			e = (a = {}, a[c.day] = !0, a[c.dayInRange] = g, a[c.dayRangeEndpoint] = i, a[c.dayRangeLeft] = e, a[c.dayRangeOnly] = f, a[c.dayRangeRight] = j, a[c.dayValid] = b.valid, a[c.dayInvalid] = !b.valid, a);
			j = (f = {}, f[d.dayInner] = !0, f[d.dayInnerSelected] = b.selected, f[d.dayInnerNotSelected] = !b.selected && !i, f[d.dayInnerFocused] = b.focused, f[d.dayInnerHighlighted] = b.highlighted, f[d.dayInnerHovered] = b.hovered, f[d.dayInnerRangeEndpoint] = i, f);
			c = {};
			b.dayInnerFormatter && (c = b.dayInnerFormatter(b.date, {
				focused: b.focused,
				highlighted: b.highlighted,
				hovered: b.hovered,
				rangePosition: b.rangePosition,
				selected: b.selected,
				valid: b.valid
			}));
			return h.jsx("span", {
				"aria-selected": b.selected || g != null,
				className: this.$1(e),
				"data-sigil": b.valid ? "touchable" : null,
				role: "gridcell",
				style: c,
				children: h.jsx("span", {
					"aria-disabled": !b.valid,
					"aria-pressed": b.selected ? !0 : void 0,
					className: this.$1(j),
					onMouseDown: this.$7,
					onMouseOver: this.$9,
					onMouseOut: this.$8,
					onClick: this.$3,
					onKeyDown: this.$2,
					ref: this.props.setupFocusRef,
					role: "button",
					tabIndex: b.tabIndex,
					children: this.props.date.getDayOfMonth()
				})
			})
		};
		return a
	}(h.Component);
	o.propTypes = {
		date: c.instanceOf(d).isRequired,
		dayInnerFormatter: c.func,
		dayRenderer: c.func,
		focused: c.bool,
		highlighted: c.bool,
		hovered: c.bool,
		isRowStart: c.bool,
		isRowEnd: c.bool,
		isSelectedWeekRange: c.bool,
		onCursorChange: c.func.isRequired,
		onSelect: c.func.isRequired,
		rangePosition: c.oneOf([k, l, m]),
		rowPosition: c.oneOf([k, l, m, n]),
		selected: c.bool,
		setupFocusRef: c.func,
		tabIndex: c.number,
		valid: c.bool
	};
	e.exports = a
}), null);