__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], (function(a, b, c, d, e, f) {
	var g, h = {
		getID: function() {
			return (g || (g = b("CurrentUserInitialData"))).USER_ID
		},
		getAccountID: function() {
			return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID
		},
		getEmployeeWorkUserID: function() {
			return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID
		},
		getName: function() {
			return (g || (g = b("CurrentUserInitialData"))).NAME
		},
		getShortName: function() {
			return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME
		},
		isLoggedIn: function() {
			return (g || (g = b("CurrentUserInitialData"))).USER_ID !== "0"
		},
		isLoggedInNow: function() {
			var a;
			if (!h.isLoggedIn()) return !1;
			if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
			if ((g || (g = b("CurrentUserInitialData"))).IS_WORK_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER) return !0;
			return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != "" ? (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID === b("Cookie").get("c_user") : (g || (g = b("CurrentUserInitialData"))).USER_ID === ((a = b("Cookie").get("i_user")) != null ? a : b("Cookie").get("c_user"))
		},
		isEmployee: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE
		},
		isTestUser: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER
		},
		hasWorkUser: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER
		},
		isWorkUser: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER
		},
		isGray: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY
		},
		isUnderage: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE
		},
		isMessengerOnlyUser: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER
		},
		isDeactivatedAllowedOnMessenger: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER
		},
		isMessengerCallGuestUser: function() {
			return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER
		},
		isBusinessPersonAccount: function() {
			return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT
		},
		hasSecondaryBusinessPerson: function() {
			return (g || (g = b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON
		},
		getAppID: function() {
			return (g || (g = b("CurrentUserInitialData"))).APP_ID
		}
	};
	e.exports = h
}), null);