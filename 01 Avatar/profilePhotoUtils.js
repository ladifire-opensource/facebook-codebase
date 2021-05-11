__d("profilePhotoUtils", ["Locale", "memoizeWithArgs"], (function (a, b, c, d, e, f) {
	"use strict";
	a = b("memoizeWithArgs")(function (a, c) {
		c === void 0 && (c = !1);
		a = Math.sqrt(2 * a * a) - a;
		a = Math.round(Math.sqrt(a * a / 2));
		if (c)
			if (b("Locale").isRTL()) return {
				left: a,
				top: a,
				transform: "translate(-50%, -50%)"
			};
			else return {
				right: a,
				top: a,
				transform: "translate(50%, -50%)"
			};
		else if (b("Locale").isRTL()) return {
			bottom: a,
			left: a,
			transform: "translate(-50%, 50%)"
		};
		else return {
			bottom: a,
			right: a,
			transform: "translate(50%, 50%)"
		}
	}, function (a, b) {
		return String(b) + String(a)
	});
	f.getBadgePosition = a;
	c = b("memoizeWithArgs")(function (a) {
		switch (a) {
			case 32:
			case 36:
			case 40:
				return 2;
			case 48:
			case 56:
			case 60:
				return 3;
			case 132:
			default:
				return 4
		}
	}, function (a) {
		return String(a)
	});
	f.getStoryRingSize = c;
	d = b("memoizeWithArgs")(function (a, b) {
		if (b === "availabilityBadge") switch (a) {
			case 16:
			case 20:
			case 24:
				return [6, 1.5];
			case 28:
				return [7, 2];
			case 32:
			case 36:
				return [8, 2];
			case 40:
			case 48:
				return [9, 2];
			case 56:
			case 60:
				return [10, 2];
			case 72:
				return [12, 2];
			case 80:
			case 88:
				return [14, 2];
			case 96:
			case 100:
				return [15, 2];
			case 132:
			case 168:
				return [20, 4];
			default:
				a;
				return [8, 2]
		}
		switch (a) {
			case 16:
			case 20:
			case 24:
				return [6, 1.5];
			case 28:
				return [7, 1.5];
			case 32:
				return [8, 2];
			case 36:
				return [9, 2];
			case 40:
				return [10, 2];
			case 48:
				return [12, 2];
			case 56:
				return [14, 2];
			case 60:
				return [15, 2];
			case 72:
				return [18, 2];
			case 80:
				return [20, 4];
			case 88:
				return [22, 4];
			case 96:
			case 100:
				return [24, 4];
			case 132:
				return [32, 4];
			case 168:
				return [41, 4];
			default:
				a;
				return [8, 2]
		}
	}, function (a, b) {
		return String(a) + b
	});
	f.getBadgeSizeAndStrokeWidth = d
}), null);