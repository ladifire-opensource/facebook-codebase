__d("useCometRouterMainTabKey", ["unrecoverableViolation", "useCometRouterState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a() {
		var a = b("useCometRouterState")();
		if (a == null) throw new(b("unrecoverableViolation"))("Attempting to get main tab key without a router state (provided by the CometRouterStateProvider/CometRouterStateContext).", "comet_infra");
		return (a = a.main.route.tabKey) != null ? a : "__main_tab"
	}
}), null);