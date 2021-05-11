requireLazy(["JSScheduler", "ServerJS", "ScheduledApplyEach"], function (JSScheduler, ServerJS, ScheduledApplyEach) {
	qpl_inl("6892302315725016032", "tierOneBeforeScheduler");
	JSScheduler.runWithPriority(3, function () {
		qpl_inl("6892302315725016032", "tierOneInsideScheduler");
		(new ServerJS()).handleWithCustomApplyEach(ScheduledApplyEach, {
			"define": [
				["cr:683059", ["CometVisualCompletion"], {
					"__rc": ["CometVisualCompletion", "Aa17udtJ4e2ga0BG7-2ythtGYyrGbAGMQWq0eSvdEP3Q5kwGF6oP3INDIvn5SAmvDqpVAw4URloLLsFozAAkBU6sh2mUzcUq69MNRNuT"]
				}, -1],
				["cr:696703", ["JSScheduler"], {
					"__rc": ["JSScheduler", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:717822", ["TimeSliceSham"], {
					"__rc": ["TimeSliceSham", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:719780", [], {
					"__rc": [null, "Aa0BluMt3kzRPl0pZYMC7A_2ZHoJdhvGrX9qKssMl-crY_GuX8OR2usOiBMJMd9SOdvupFm85RnKBvQ"]
				}, -1],
				["cr:724654", ["clearTimeoutComet"], {
					"__rc": ["clearTimeoutComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:724655", ["setTimeoutComet"], {
					"__rc": ["setTimeoutComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:806696", ["clearTimeoutComet"], {
					"__rc": ["clearTimeoutComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:807042", ["setTimeoutComet"], {
					"__rc": ["setTimeoutComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:840411", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:844180", ["TimeSpentImmediateActiveSecondsLoggerComet"], {
					"__rc": ["TimeSpentImmediateActiveSecondsLoggerComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:869493", ["CometChromeDome"], {
					"__rc": ["CometChromeDome", "Aa27-eiZ0nKD04QAlwLJvy0uXOC5mSFzMpg2kCeWowCHLOUbqhKpmbSAScumvf6DVSSifTrv"]
				}, -1],
				["cr:888908", ["warningComet"], {
					"__rc": ["warningComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:896462", ["setIntervalComet"], {
					"__rc": ["setIntervalComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:899007", [], {
					"__rc": [null, "Aa2kS-dHaDmRVt8sGZhx0mx4QvG_q9NCxSjt9rJuSCfI7-0N5IfRqskBVPkebGddIkDgK7ZR-j0bYnTIV3s"]
				}, -1],
				["cr:925100", ["RunComet"], {
					"__rc": ["RunComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:947162", ["useCometConfirmationDialogComet"], {
					"__rc": ["useCometConfirmationDialogComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:955714", [], {
					"__rc": [null, "Aa3MTp8Im4DrEVDjlIx7_YrQNp5uMGkOTbF2NyFbf_fbRtiagRuLW3I6D-Rt8lno7OAmwOeRfv6D8QMG"]
				}, -1],
				["cr:986633", ["setTimeoutComet"], {
					"__rc": ["setTimeoutComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:994756", ["BaseCometModal.react"], {
					"__rc": ["BaseCometModal.react", "Aa24XlAHZgLpE2oFh4OGkJbcysyPHAyp0VkMpcWYhmkTeNtL2muZYs4qwe8clIDX6p3z8rooglHs6Ak"]
				}, -1],
				["cr:1003267", ["clearIntervalComet"], {
					"__rc": ["clearIntervalComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1062779", [], {
					"__rc": [null, "Aa3Mj5iUvF9TJ1G2ScQHKaMSCB8B6LO94-WbnThkK-vCrRvUMbe5vdgapv7Qns1FOIV61Nciag"]
				}, -1],
				["cr:1064332", [], {
					"__rc": [null, "Aa2dbjqn6W-95Y3QqrAj6cGYFfm_xwzOqi2bWS18fjT82TW0mXw5SPdasjod1LnLLij1GKiginQ"]
				}, -1],
				["cr:1088443", [], {
					"__rc": [null, "Aa0TedK4GyiEjIEQBuUg2gAW2sPQfn7zNSsodqDVZljvmEQ4fIZy0fW6EpxQ6n6cSjAHsqcIb0DWGdVQNQ"]
				}, -1],
				["cr:1094133", [], {
					"__rc": [null, "Aa14E092XNygMGIiXUXTSzaP8RtT_thAumsIp7fC3-y3ciAzxkLao0p3vdo6mdz7hMmL427jtP0Ze9SuYNthULM"]
				}, -1],
				["cr:1105154", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1106516", [], {
					"__rc": [null, "Aa3EGeYjnKBvK-uwHeKPbh-kP3yA-tWjiXTV3V3cBSPLKkNdBcm3CDCndPk9o8e6GfjigtQk3JP_"]
				}, -1],
				["cr:1108857", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1110430", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1121434", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1132918", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1183579", ["InlineFbtResultImplComet"], {
					"__rc": ["InlineFbtResultImplComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1221377", ["CometDarkMode"], {
					"__rc": ["CometDarkMode", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["cr:1267207", [], {
					"__rc": [null, "Aa1THkBFvUcSAcFgWqkTl-NdBS-fi99KKDztnjQv0DQpuNo9JGaVjgpoBNK6A1x3hoZBaWOxeCFI9mljvCA"]
				}, -1],
				["cr:1292369", ["SchedulerTracing-prod.classic"], {
					"__rc": ["SchedulerTracing-prod.classic", "Aa0trt0m0t1jzCmfqUjLkPJnwqI95I_nC19hF8em8dmyM1gbzc9lQt7eD-8HYjBGFgk73w6C35hCJl9ZaPELVwdtURGq2g"]
				}, -1],
				["cr:1292596", [], {
					"__rc": [null, "Aa3Rl0A-C2Gaqv3YHTLdCmlfJrXzqyOuMY5YCGwvYgrTHH2AnNrYHPQhbh-OBLXTFJFvDctObp3C-VXDmxtaDWtt"]
				}, -1],
				["cr:1294158", ["React.classic"], {
					"__rc": ["React.classic", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["cr:1294159", ["ReactDOM.classic"], {
					"__rc": ["ReactDOM.classic", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["cr:1345926", ["handleCometErrorCodeSideEffects"], {
					"__rc": ["handleCometErrorCodeSideEffects", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1353431", [], {
					"__rc": [null, "Aa01lCXor4bHuH5WabidVP0Kb2bm-oo8hqrETfJVMXBiWpJe9UJOwi4kRlytJYp2tv_OinWhtqRCBnEptPHSpS4H_J5apQGewJlB"]
				}, -1],
				["cr:1367102", [], {
					"__rc": [null, "Aa2F8j0TUZDYxby0rSVxo5gbUrldoGlFJRy7I-cH3vWFhcH8S6gLVQWvh7HdLzEc0zW9so-bo1HvcVewpuDB"]
				}, -1],
				["cr:1385201", ["CometRelayEnvironment"], {
					"__rc": ["CometRelayEnvironment", "Aa0J6GwKZSdp9nLEt6QRvLFs-5FWXbb8Y2YkH3kDXQpuhflKDWYahGTK2yesYAsqOHWkHBXL1N68sNN3GUwkHO6F5A"]
				}, -1],
				["cr:1401519", [], {
					"__rc": [null, "Aa1jwkM8hlR5Wo2-iZwK2ZP2kx-1jnuSQE4IT7sFrbCJNcp4V3vCb7Z4PT9jakaWugmkfsPH0RJ4G4QM_A3gcgjGhLPJ94lNG14"]
				}, -1],
				["cr:1445039", [], {
					"__rc": [null, "Aa2pzUi0XoHRYSPZx6bITQGXH5gI8MGD0Uuf6ay5sad-nsyiScL8tOK0bqhOLAInYQWD9nJoOB-k2zuzqJ5KfpcWM7Bct-34zVc"]
				}, -1],
				["cr:1467370", ["CometRelayScheduler"], {
					"__rc": ["CometRelayScheduler", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1486287", ["CometDarkMode"], {
					"__rc": ["CometDarkMode", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["cr:1503634", ["CometStartupQuickLogModule"], {
					"__rc": ["CometStartupQuickLogModule", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["cr:1522191", ["CometLinkTrackingUtils.facebook"], {
					"__rc": ["CometLinkTrackingUtils.facebook", "Aa3dyOW2QIXM_8ahNoDCbQs-PSehKuM1B7gz8CiWiovNqkWnV01hvFI8J9mx_B17rESBMGokopgq8Gwk8zQ4TG8zqwaFyXVeog"]
				}, -1],
				["cr:1540330", [], {
					"__rc": [null, "Aa3umEKDfYT1FaT8V5At4cVhteSHQoTtwn2StajtVrUlyLuexkk11VA-tlrlD03su2_Z3fSQKU1ebD-dc4MHeAyAkxJ8py-Qgi-xpLB3gtGSEw"]
				}, -1],
				["cr:1579863", ["cometPrefetchVideoDash"], {
					"__rc": ["cometPrefetchVideoDash", "Aa1gUVt7OI0dC-J5b4NmjcftdnLKbHlu682jbU9anXiABcBIm6vfXHfL9HMkXbowTMFESybfKQdqkUbc29jWO1qjpUp1nZ8wZIRx"]
				}, -1],
				["cr:1604175", [], {
					"__rc": [null, "Aa2OoMLPX7SYN_0fuJ5InmffSJd6ZCCcHnn9aapb0alvunHvNwIQMQRM5tOyGssB26e51A36sCVHxflgzqHeb7YPhJQ"]
				}, -1],
				["cr:1637900", ["CometDarkModeContext"], {
					"__rc": ["CometDarkModeContext", "Aa3CLhPbG182lmFOH38msNJfRIHx-LHORCfpWlJxWKk_hDUQGEzq6TbCGjsTqRrxKDG72cU"]
				}, -1],
				["cr:1642790", ["vc-tracker.WWW"], {
					"__rc": ["vc-tracker.WWW", "Aa3xOkye2Q6zMc96mzBNZwK-tr99CHPfbEEGcy6CAOdO_17tgQ2xHZQP5VYHpSssyJWZgT9tKRHBgA"]
				}, -1],
				["cr:1642797", ["BanzaiComet"], {
					"__rc": ["BanzaiComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1645510", [], {
					"__rc": [null, "Aa0KVFNonACs_xGEr0xo2A-9QMC8gX4ri8f2NilSnKdlVD_gVvvm4R3pf0isiyPR43dZc2ZtA8HkbzuNMoXKdjwBPw"]
				}, -1],
				["cr:1651548", ["useCometPreloaderImpl"], {
					"__rc": ["useCometPreloaderImpl", "Aa1x83yr0LdQim57VumyR3pN2kSxC8NuJhnbUsZREH53MSUTbmPnHu3GQlqWJfIYKoid9ofagLCaKrVw_nw1XqWM4fGkUoc"]
				}, -1],
				["cr:1654107", ["emptyFunction"], {
					"__rc": ["emptyFunction", "Aa08V2L-qgeWOVP8DXgIZb7e5nOSPOKU5gBg_qRxvmZYAnenx86wqLUG2G_FfpCYlA28GM4xO8vTELmYkDlfZX0r5eAFi6A"]
				}, -1],
				["cr:1661072", [], {
					"__rc": [null, "Aa0zqsqVIym81foAyWg597TJCKHJ5Rb60r-ld9jr5aGZXKSXh5AYhAMQY3wX9Vvcl8ORKDpDboEh-KImL5avvsS00rRq"]
				}, -1],
				["cr:1703077", [], {
					"__rc": [null, "Aa3rdjQ9kDhsxjotXl4jRngfU6yjxIyFpqkhE3HAFn3U_DIMAVNWxXLiRV_kiiKxVnFMTazLgZfc78OudszJ3Ocj3w"]
				}, -1],
				["cr:1707460", ["BuildCometRootLoggedIn"], {
					"__rc": ["BuildCometRootLoggedIn", "Aa2xNnj9vLEUJVc4b-Uiy29QG4pUtxqse_e32RAWxRy_K7ZgaF6bH4k2anqZGccCY3gu0jBg"]
				}, -1],
				["cr:1725317", [], {
					"__rc": [null, "Aa3Mj5iUvF9TJ1G2ScQHKaMSCB8B6LO94-WbnThkK-vCrRvUMbe5vdgapv7Qns1FOIV61Nciag"]
				}, -1],
				["cr:1767111", [], {
					"__rc": [null, "Aa1hmkPZe26QfqPbLt_lSRhdj3Li66h1NBbJj8vN9S2tozyWtpOGx4KnornKwM1lQeN8li7FXk8cuspW_eUFGUJXUWw"]
				}, -1],
				["cr:1789196", [], {
					"__rc": [null, "Aa39za5DthhrDnguHt9dfSNMgssYny2geZPDCOukrGA7XeUGJwxjUN922G1d3o-71y0VNuV2t7MkndavkNKulXaP8QgBdNysP_Oi05vPlQBwAuynhw8"]
				}, -1],
				["cr:1791018", ["CometInteractionVC"], {
					"__rc": ["CometInteractionVC", "Aa17udtJ4e2ga0BG7-2ythtGYyrGbAGMQWq0eSvdEP3Q5kwGF6oP3INDIvn5SAmvDqpVAw4URloLLsFozAAkBU6sh2mUzcUq69MNRNuT"]
				}, -1],
				["cr:894130", [], {
					"__rc": [null, "Aa30vNOifnB9XjXYnp8sgcdSO6due-u-n4jICECCBSbXk7qWu4N0YiDQd8qVaOXDYql-K91Wg2oYE4QssZ3UrQ"]
				}, -1],
				["cr:896461", ["setIntervalComet"], {
					"__rc": ["setIntervalComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1393064", [], {
					"__rc": [null, "Aa2MRSD8X1orpLTafVE0-qFO1x0-DJDWuQbfqa8hL_gh6WwESZqk1vhQuHOfKAwajY4qA6mRGw4276URFLabRYGWekDt-mh5KuCa-Y3RVvE37_Oxu_d9"]
				}, -1],
				["cr:1619204", ["CometDirectionalDockingView.sticky.react"], {
					"__rc": ["CometDirectionalDockingView.sticky.react", "Aa2zoGMqXvCfw1OtSrP7TG6BK833oMbwAxKcEPeLS5vsawvjcdiWClt5yaq2Ln2aCDMPolxgJwHBzEgqhK451PuvIA"]
				}, -1],
				["cr:860400", ["CometDialogContextComet"], {
					"__rc": ["CometDialogContextComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1073372", ["useOnBeforeUnloadComet"], {
					"__rc": ["useOnBeforeUnloadComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["BootloaderConfig", [], {
					"deferBootloads": false,
					"highPriBootloads": true,
					"jsRetries": [200, 500],
					"jsRetryAbortNum": 2,
					"jsRetryAbortTime": 5,
					"retryQueuedBootloads": true,
					"silentDups": true
				}, 329],
				["CSSLoaderConfig", [], {
					"timeout": 5000,
					"modulePrefix": "BLCSS:",
					"loadEventSupported": true
				}, 619],
				["CookieCoreConfig", [], {
					"a11y": {
						"s": "None"
					},
					"c_user": {
						"s": "None"
					},
					"cppo": {
						"t": 86400,
						"s": "None"
					},
					"dpr": {
						"t": 604800,
						"s": "None"
					},
					"fbl_ci": {
						"t": 31536000,
						"s": "None"
					},
					"fbl_cs": {
						"t": 31536000,
						"s": "None"
					},
					"fbl_st": {
						"t": 31536000,
						"s": "Strict"
					},
					"i_user": {
						"s": "None"
					},
					"js_ver": {
						"t": 604800,
						"s": "None"
					},
					"locale": {
						"t": 604800,
						"s": "None"
					},
					"m_pixel_ratio": {
						"t": 604800,
						"s": "None"
					},
					"noscript": {
						"s": "None"
					},
					"presence": {
						"t": 2592000,
						"s": "None"
					},
					"sfau": {
						"s": "None"
					},
					"vpd": {
						"t": 5184000,
						"s": "Lax"
					},
					"wd": {
						"t": 604800,
						"s": "Lax"
					},
					"x-referer": {
						"s": "None"
					},
					"x-src": {
						"t": 1,
						"s": "None"
					}
				}, 2104],
				["CurrentCommunityInitialData", [], {}, 490],
				["CurrentEnvironment", [], {
					"facebookdotcom": true,
					"messengerdotcom": false,
					"workplacedotcom": false
				}, 827],
				["CurrentUserInitialData", [], {
					"USER_ID": "100001258748155",
					"ACCOUNT_ID": "100001258748155",
					"NAME": "Nguy\u1ec5n V\u0103n C\u00f4ng",
					"SHORT_NAME": "Nguy\u1ec5n",
					"IS_BUSINESS_PERSON_ACCOUNT": false,
					"HAS_SECONDARY_BUSINESS_PERSON": false,
					"IS_MESSENGER_ONLY_USER": false,
					"IS_DEACTIVATED_ALLOWED_ON_MESSENGER": false,
					"IS_MESSENGER_CALL_GUEST_USER": false,
					"IS_WORK_MESSENGER_CALL_GUEST_USER": false,
					"APP_ID": "2220391788200892"
				}, 270],
				["DTSGInitialData", [], {
					"token": "AQEtBYcEdg__:AQFyCyGGuC07"
				}, 258],
				["FbtResultGK", [], {
					"shouldReturnFbtResult": true,
					"inlineMode": "NO_INLINE"
				}, 876],
				["ISB", [], {}, 330],
				["IntlPhonologicalRules", [], {
					"meta": {},
					"patterns": {}
				}, 1496],
				["IntlViewerContext", [], {
					"GENDER": 1
				}, 772],
				["LSD", [], {}, 323],
				["LocaleInitialData", [], {
					"locale": "vi_VN",
					"language": "Ti\u1ebfng Vi\u1ec7t"
				}, 273],
				["NumberFormatConfig", [], {
					"decimalSeparator": ",",
					"numberDelimiter": ".",
					"minDigitsForThousandsSeparator": 4,
					"standardDecimalPatternInfo": {
						"primaryGroupSize": 3,
						"secondaryGroupSize": 3
					},
					"numberingSystemData": null
				}, 54],
				["RTISubscriptionManagerConfig", [], {
					"config": {
						"max_subscriptions": 150,
						"www_idle_unsubscribe_min_time_ms": 600000,
						"www_idle_unsubscribe_times_ms": {
							"feedback_like_subscribe": 600000,
							"comment_like_subscribe": 600000,
							"feedback_typing_subscribe": 600000,
							"comment_create_subscribe": 1800000,
							"video_tip_jar_payment_event_subscribe": 14400000
						},
						"www_unevictable_topic_regexes": ["^(graphql|gqls)\/web_notification_receive_subscribe", "^www\/sr\/hot_reload\/"],
						"autobot_tiers": {
							"latest": "realtime.skywalker.autobot.latest",
							"intern": "realtime.skywalker.autobot.intern",
							"sb": "realtime.skywalker.autobot.sb"
						},
						"max_subscription_flush_batch_size": 100
					},
					"autobot": {},
					"assimilator": {},
					"unsubscribe_release": true,
					"bladerunner_www_sandbox": null,
					"is_intern": false
				}, 1081],
				["RelayAPIConfigDefaults", [], {
					"accessToken": "",
					"actorID": "100001258748155",
					"customHeaders": {},
					"enableNetworkLogger": false,
					"fetchTimeout": 30000,
					"graphBatchURI": "\/api\/graphqlbatch\/",
					"graphURI": "\/api\/graphql\/",
					"retryDelays": [1000, 3000],
					"useXController": true,
					"xhrEncoding": null,
					"subscriptionTopicURI": "\/dlite\/skywalker_topic\/",
					"withCredentials": false,
					"isProductionEndpoint": false
				}, 926],
				["ServerNonce", [], {
					"ServerNonce": "J6KfCps4TNsgTWwh4xKU0K"
				}, 141],
				["SiteData", [], {
					"server_revision": 1002938545,
					"client_revision": 1002938545,
					"tier": "",
					"push_phase": "C3",
					"pkg_cohort": "EXP2:comet_pkg",
					"pr": 1,
					"haste_site": "www",
					"be_one_ahead": false,
					"ir_on": true,
					"is_rtl": false,
					"is_comet": true,
					"is_experimental_tier": false,
					"is_jit_warmed_up": true,
					"hsi": "6892302315725016032-0",
					"semr_host_bucket": "6",
					"spin": 4,
					"__spin_r": 1002938545,
					"__spin_b": "trunk",
					"__spin_t": 1604739184,
					"vip": "157.240.199.35"
				}, 317],
				["SprinkleConfig", [], {
					"param_name": "jazoest",
					"version": 2,
					"should_randomize": false
				}, 2111],
				["UserAgentData", [], {
					"browserArchitecture": "64",
					"browserFullVersion": "86.0.4240.111",
					"browserMinorVersion": 0,
					"browserName": "Chrome",
					"browserVersion": 86,
					"deviceName": "Unknown",
					"engineName": "WebKit",
					"engineVersion": "537.36",
					"platformArchitecture": "64",
					"platformName": "Linux",
					"platformVersion": null,
					"platformFullVersion": null
				}, 527],
				["ZeroCategoryHeader", [], {}, 1127],
				["ZeroRewriteRules", [], {
					"rewrite_rules": {},
					"whitelist": {
						"\/hr\/r": 1,
						"\/hr\/p": 1,
						"\/zero\/unsupported_browser\/": 1,
						"\/zero\/policy\/optin": 1,
						"\/zero\/optin\/write\/": 1,
						"\/zero\/optin\/legal\/": 1,
						"\/zero\/optin\/free\/": 1,
						"\/about\/privacy\/": 1,
						"\/about\/privacy\/update\/": 1,
						"\/about\/privacy\/update": 1,
						"\/zero\/toggle\/welcome\/": 1,
						"\/zero\/toggle\/nux\/": 1,
						"\/fup\/interstitial\/": 1,
						"\/work\/landing": 1,
						"\/work\/login\/": 1,
						"\/work\/email\/": 1,
						"\/ai.php": 1,
						"\/js_dialog_resources\/dialog_descriptions_android.json": 0,
						"\/connect\/jsdialog\/MPlatformAppInvitesJSDialog\/": 0,
						"\/connect\/jsdialog\/MPlatformOAuthShimJSDialog\/": 0,
						"\/connect\/jsdialog\/MPlatformLikeJSDialog\/": 0,
						"\/qp\/interstitial\/": 1,
						"\/qp\/action\/redirect\/": 1,
						"\/qp\/action\/close\/": 1,
						"\/zero\/support\/ineligible\/": 1,
						"\/zero_balance_redirect\/": 1,
						"\/zero_balance_redirect": 1,
						"\/zero_balance_redirect\/l\/": 1,
						"\/l.php": 1,
						"\/lsr.php": 1,
						"\/ajax\/dtsg\/": 1,
						"\/checkpoint\/block\/": 1,
						"\/exitdsite": 1,
						"\/zero\/balance\/pixel\/": 1,
						"\/zero\/balance\/": 1,
						"\/zero\/balance\/carrier_landing\/": 1,
						"\/zero\/flex\/logging\/": 1,
						"\/tr": 1,
						"\/tr\/": 1,
						"\/sem_campaigns\/sem_pixel_test\/": 1,
						"\/bookmarks\/flyout\/body\/": 1,
						"\/zero\/subno\/": 1,
						"\/confirmemail.php": 1,
						"\/policies\/": 1,
						"\/mobile\/internetdotorg\/classifier\/": 1,
						"\/zero\/dogfooding": 1,
						"\/xti.php": 1,
						"\/zero\/fblite\/config\/": 1,
						"\/hr\/zsh\/wc\/": 1,
						"\/ajax\/bootloader-endpoint\/": 1,
						"\/4oh4.php": 1,
						"\/autologin.php": 1,
						"\/birthday_help.php": 1,
						"\/checkpoint\/": 1,
						"\/contact-importer\/": 1,
						"\/cr.php": 1,
						"\/legal\/terms\/": 1,
						"\/login.php": 1,
						"\/login\/": 1,
						"\/mobile\/account\/": 1,
						"\/n\/": 1,
						"\/remote_test_device\/": 1,
						"\/upsell\/buy\/": 1,
						"\/upsell\/buyconfirm\/": 1,
						"\/upsell\/buyresult\/": 1,
						"\/upsell\/promos\/": 1,
						"\/upsell\/continue\/": 1,
						"\/upsell\/h\/promos\/": 1,
						"\/upsell\/loan\/learnmore\/": 1,
						"\/upsell\/purchase\/": 1,
						"\/upsell\/promos\/upgrade\/": 1,
						"\/upsell\/buy_redirect\/": 1,
						"\/upsell\/loan\/buyconfirm\/": 1,
						"\/upsell\/loan\/buy\/": 1,
						"\/upsell\/sms\/": 1,
						"\/wap\/a\/channel\/reconnect.php": 1,
						"\/wap\/a\/nux\/wizard\/nav.php": 1,
						"\/wap\/appreg.php": 1,
						"\/wap\/birthday_help.php": 1,
						"\/wap\/c.php": 1,
						"\/wap\/confirmemail.php": 1,
						"\/wap\/cr.php": 1,
						"\/wap\/login.php": 1,
						"\/wap\/r.php": 1,
						"\/zero\/datapolicy": 1,
						"\/a\/timezone.php": 1,
						"\/a\/bz": 1,
						"\/bz\/reliability": 1,
						"\/r.php": 1,
						"\/mr\/": 1,
						"\/reg\/": 1,
						"\/registration\/log\/": 1,
						"\/terms\/": 1,
						"\/f123\/": 1,
						"\/expert\/": 1,
						"\/experts\/": 1,
						"\/terms\/index.php": 1,
						"\/terms.php": 1,
						"\/srr\/": 1,
						"\/msite\/redirect\/": 1,
						"\/fbs\/pixel\/": 1,
						"\/contactpoint\/preconfirmation\/": 1,
						"\/contactpoint\/cliff\/": 1,
						"\/contactpoint\/confirm\/submit\/": 1,
						"\/contactpoint\/confirmed\/": 1,
						"\/contactpoint\/login\/": 1,
						"\/preconfirmation\/contactpoint_change\/": 1,
						"\/help\/contact\/": 1,
						"\/survey\/": 1,
						"\/upsell\/loyaltytopup\/accept\/": 1,
						"\/settings\/": 1,
						"\/lite\/": 1,
						"\/zero_status_update\/": 1,
						"\/operator_store\/": 1,
						"\/mobile\/zero\/carrier_page\/": 1,
						"\/upsell\/": 1
					}
				}, 1478],
				["PromiseUsePolyfillSetImmediateGK", [], {
					"www_always_use_polyfill_setimmediate": false
				}, 2190],
				["KSConfig", [], {
					"killed": {
						"__set": ["EO_DISABLE_SYSTEM_SERIAL_NUMBER_FREE_TYPING_IN_CPE_NON_CLIENT", "POCKET_MONSTERS_CREATE", "POCKET_MONSTERS_DELETE", "VIDEO_DIMENSIONS_FROM_PLAYER_IN_UPLOAD_DIALOG", "POCKET_MONSTERS_UPDATE_NAME", "ADS_PLACEMENT_FIX_PUBLISHER_PLATFORMS_MUTATION", "MOBILITY_KILL_OLD_VISIBILITY_POSITION_SETTING", "WORKPLACE_DISPLAY_TEXT_EVIDENCE_REPORTING", "DYNAMIC_ADS_SET_CATALOG_AND_PRODUCT_SET_TOGETHER", "BUSINESS_GRAPH_SETTING_APP_ASSIGNED_USERS_NEW_API", "BUSINESS_GRAPH_SETTING_WABA_ASSIGNED_USERS_NEW_API", "BUSINESS_GRAPH_SETTING_ESG_ASSIGNED_USERS_NEW_API", "BUSINESS_GRAPH_SETTING_PRODUCT_CATALOG_ASSIGNED_USERS_NEW_API", "BUSINESS_GRAPH_SETTING_BU_ASSIGNED_USERS_NEW_API", "BUSINESS_GRAPH_SETTING_SESG_ASSIGNED_USERS_NEW_API", "WORKPLACE_PLATFORM_SECURE_APPS_MAILBOXES", "LAB_NET_NEW_UI_RELEASE", "EO_SRT_HELPDESK_DASHBOARD_DISABLE_UNUSED_TAB_IN_RIGHT_PANEL", "BUSINESS_INVITE_FLOW_WITH_SELLER_PROFILE", "HELPDESK_USE_XDS_SEARCHABLE_INPUT_FOR_WORKFLOW", "MLHUB_FLOW_AUTOREFRESH_SEARCH", "AD_DRAFT_ENABLE_SYNCRHONOUS_FRAGMENT_VALIDATION", "NEKO_DISABLE_CREATE_FOR_SAP", "SIMPL_SAMPLING_HEALTH_CARD", "NEKO_ENABLE_RESET_SAP_FOR_CREATE_AD_SET_CONTEXTUAL"]
					},
					"ko": {
						"__set": ["9NpkGYwzrPG", "acrJTh9WGdp", "1oOE64fL4wO", "2dhqRnqXGLQ", "7r6mSP7ofr2", "1ntjZ2zgf03", "3oh5Mw86USj", "8NAceEy9JZo", "5mNEXob0nTj", "4j36SVzvP3w", "8PlKuowafe8", "53gCxKq281G", "3yzzwBY7Npj", "4NSq3ZC4ScE", "1onzIv0jH6H", "5XCz1h9Iaw3", "DDZhogI19W", "6fHw06UmAMW", "7FOIzos6XJX", "aDayprn6pbH", "3OsLvnSHNTt", "8rDvN9vWdAK", "1G7wJ6bJt9K", "4MzX0ipjWq", "9cL5o2kjfZo"]
					}
				}, 2580],
				["JSErrorLoggingConfig", [], {
					"appId": 2220391788200892,
					"extra": [],
					"reportInterval": 50,
					"sampleWeight": null,
					"sampleWeightKey": "__jssesw"
				}, 2776],
				["IntlHoldoutGK", [], {
					"inIntlHoldout": false
				}, 2827],
				["CookieCoreLoggingConfig", [], {
					"maximumIgnorableStallMs": 16.67,
					"sampleRate": 9.7e-5,
					"sampleRateClassic": 1.0e-10,
					"sampleRateFastStale": 1.0e-8
				}, 3401],
				["IntlNumberTypeConfig", [], {
					"impl": "return IntlVariations.NUMBER_OTHER;"
				}, 3405],
				["QuickLogConfig", [], {
					"qpl_events": {
						"393276": {
							"sampleRate": 50
						},
						"470653": {
							"sampleRate": 400
						},
						"473017": {
							"sampleRate": 400
						},
						"483251": {
							"sampleRate": 400
						},
						"655575": {
							"sampleRate": 1
						},
						"655576": {
							"sampleRate": 5000
						},
						"655584": {
							"sampleRate": 1
						},
						"655653": {
							"sampleRate": 250
						},
						"917556": {
							"sampleRate": 100
						},
						"917557": {
							"sampleRate": 1000
						},
						"920349": {
							"sampleRate": 100
						},
						"924733": {
							"sampleRate": 100
						},
						"1916714": {
							"sampleRate": 250
						},
						"3473463": {
							"sampleRate": 10000
						},
						"3473464": {
							"sampleRate": 10000
						},
						"3473465": {
							"sampleRate": 10
						},
						"3735589": {
							"sampleRate": 100
						},
						"3735590": {
							"sampleRate": 1000
						},
						"3735591": {
							"sampleRate": 100
						},
						"3735592": {
							"sampleRate": 1000
						},
						"3735593": {
							"sampleRate": 1000
						},
						"3735594": {
							"sampleRate": 1000
						},
						"3735595": {
							"sampleRate": 100
						},
						"3735596": {
							"sampleRate": 1000
						},
						"3735597": {
							"sampleRate": 1000
						},
						"3735598": {
							"sampleRate": 100
						},
						"3735599": {
							"sampleRate": 1000
						},
						"3735600": {
							"sampleRate": 100
						},
						"3735601": {
							"sampleRate": 100
						},
						"3735602": {
							"sampleRate": 10000
						},
						"3735603": {
							"sampleRate": 10000
						},
						"3735604": {
							"sampleRate": 100
						},
						"3735605": {
							"sampleRate": 100
						},
						"3735606": {
							"sampleRate": 1
						},
						"3735608": {
							"sampleRate": 250
						},
						"3735609": {
							"sampleRate": 250
						},
						"3735610": {
							"sampleRate": 250
						},
						"3735611": {
							"sampleRate": 250
						},
						"3735612": {
							"sampleRate": 250
						},
						"3735613": {
							"sampleRate": 250
						},
						"3735614": {
							"sampleRate": 250
						},
						"3735615": {
							"sampleRate": 250
						},
						"3735616": {
							"sampleRate": 250
						},
						"3735617": {
							"sampleRate": 250
						},
						"3735618": {
							"sampleRate": 50
						},
						"3735619": {
							"sampleRate": 50
						},
						"3735620": {
							"sampleRate": 50
						},
						"3735622": {
							"sampleRate": 50
						},
						"3735623": {
							"sampleRate": 500
						},
						"3735624": {
							"sampleRate": 500
						},
						"3735625": {
							"sampleRate": 1
						},
						"3735626": {
							"sampleRate": 50
						},
						"3735627": {
							"sampleRate": 50
						},
						"3735628": {
							"sampleRate": 250
						},
						"7077894": {
							"sampleRate": 1
						},
						"7079140": {
							"sampleRate": 1
						},
						"7079214": {
							"sampleRate": 100
						},
						"7079632": {
							"sampleRate": 1
						},
						"7079838": {
							"sampleRate": 1
						},
						"7079895": {
							"sampleRate": 1
						},
						"7079940": {
							"sampleRate": 1
						},
						"7081379": {
							"sampleRate": 100
						},
						"7081993": {
							"sampleRate": 1
						},
						"7081995": {
							"sampleRate": 1
						},
						"7083693": {
							"sampleRate": 100
						},
						"7083971": {
							"sampleRate": 1
						},
						"7084033": {
							"sampleRate": 100
						},
						"7084444": {
							"sampleRate": 1
						},
						"7084665": {
							"sampleRate": 100
						},
						"7084786": {
							"sampleRate": 1
						},
						"7085268": {
							"sampleRate": 100
						},
						"7086190": {
							"sampleRate": 100
						},
						"7086630": {
							"sampleRate": 100
						},
						"7087889": {
							"sampleRate": 1
						},
						"7088719": {
							"sampleRate": 1
						},
						"7088916": {
							"sampleRate": 1
						},
						"7088929": {
							"sampleRate": 1
						},
						"7088932": {
							"sampleRate": 1
						},
						"7088956": {
							"sampleRate": 1
						},
						"7089119": {
							"sampleRate": 100
						},
						"7089521": {
							"sampleRate": 100
						},
						"7089869": {
							"sampleRate": 100
						},
						"7090129": {
							"sampleRate": 1
						},
						"7091307": {
							"sampleRate": 1
						},
						"7092490": {
							"sampleRate": 1
						},
						"7092951": {
							"sampleRate": 1
						},
						"7093431": {
							"sampleRate": 100
						},
						"7093594": {
							"sampleRate": 100
						},
						"7093622": {
							"sampleRate": 1
						},
						"7093901": {
							"sampleRate": 1
						},
						"7094174": {
							"sampleRate": 100
						},
						"7733271": {
							"sampleRate": 1
						},
						"7747339": {
							"sampleRate": 100
						},
						"7995400": {
							"sampleRate": 1
						},
						"7995408": {
							"sampleRate": 100
						},
						"11075649": {
							"sampleRate": 1
						},
						"11075654": {
							"sampleRate": 1
						},
						"11075669": {
							"sampleRate": 1
						},
						"11075674": {
							"sampleRate": 1
						},
						"12451850": {
							"sampleRate": 1
						},
						"12451854": {
							"sampleRate": 1
						},
						"12451859": {
							"sampleRate": 1
						},
						"12451868": {
							"sampleRate": 1
						},
						"12451869": {
							"sampleRate": 1
						},
						"12451873": {
							"sampleRate": 10000
						},
						"12453291": {
							"sampleRate": 1
						},
						"12457943": {
							"sampleRate": 10000
						},
						"12463624": {
							"sampleRate": 1
						},
						"13238313": {
							"sampleRate": 100
						},
						"13238314": {
							"sampleRate": 100
						},
						"13238353": {
							"sampleRate": 100
						},
						"13238354": {
							"sampleRate": 100
						},
						"13238355": {
							"sampleRate": 100
						},
						"13238356": {
							"sampleRate": 100
						},
						"13238392": {
							"sampleRate": 100
						},
						"13238398": {
							"sampleRate": 100
						},
						"13238399": {
							"sampleRate": 100
						},
						"13238400": {
							"sampleRate": 100
						},
						"13240890": {
							"sampleRate": 100
						},
						"13252240": {
							"sampleRate": 100
						},
						"17825794": {
							"sampleRate": 250
						},
						"19216409": {
							"sampleRate": 100
						},
						"20578320": {
							"sampleRate": 1000000
						},
						"22347782": {
							"sampleRate": 100
						},
						"22609921": {
							"sampleRate": 10000
						},
						"22675460": {
							"sampleRate": 250
						},
						"23265284": {
							"sampleRate": 1
						},
						"23265285": {
							"sampleRate": 1
						},
						"23265286": {
							"sampleRate": 1
						},
						"23281892": {
							"sampleRate": 1
						},
						"23285466": {
							"sampleRate": 1
						},
						"23461896": {
							"sampleRate": 1
						},
						"23461897": {
							"sampleRate": 1
						},
						"23461898": {
							"sampleRate": 1
						},
						"23461899": {
							"sampleRate": 1
						},
						"23461900": {
							"sampleRate": 1
						},
						"23461901": {
							"sampleRate": 1
						},
						"23461902": {
							"sampleRate": 1
						},
						"23473227": {
							"sampleRate": 1
						},
						"23491362": {
							"sampleRate": 1
						},
						"23855114": {
							"sampleRate": 1
						},
						"25296897": {
							"sampleRate": 1
						},
						"25296900": {
							"sampleRate": 10000
						},
						"25296901": {
							"sampleRate": 1
						},
						"25296902": {
							"sampleRate": 1
						},
						"25296903": {
							"sampleRate": 10000
						},
						"25296904": {
							"sampleRate": 10000
						},
						"25296905": {
							"sampleRate": 10000
						},
						"25296906": {
							"sampleRate": 10000
						},
						"25305590": {
							"sampleRate": 1000
						},
						"26869761": {
							"sampleRate": 1
						},
						"26869762": {
							"sampleRate": 1
						},
						"26869763": {
							"sampleRate": 1
						},
						"26869764": {
							"sampleRate": 1
						},
						"26869766": {
							"sampleRate": 1
						},
						"26869768": {
							"sampleRate": 1
						},
						"26869770": {
							"sampleRate": 1
						},
						"26869771": {
							"sampleRate": 1
						},
						"26869772": {
							"sampleRate": 1
						},
						"26898960": {
							"sampleRate": 1
						},
						"27459588": {
							"sampleRate": 5000
						},
						"27459589": {
							"sampleRate": 1
						},
						"27459590": {
							"sampleRate": 10
						},
						"27459591": {
							"sampleRate": 1
						},
						"27787270": {
							"sampleRate": 100000
						},
						"27787271": {
							"sampleRate": 10000
						},
						"27787276": {
							"sampleRate": 1
						},
						"27983873": {
							"sampleRate": 1
						},
						"27983874": {
							"sampleRate": 1
						},
						"27983875": {
							"sampleRate": 1
						},
						"27983876": {
							"sampleRate": 1
						},
						"27983877": {
							"sampleRate": 1
						},
						"29047276": {
							"sampleRate": 10000
						},
						"29818881": {
							"sampleRate": 1
						},
						"29818882": {
							"sampleRate": 1
						},
						"29818883": {
							"sampleRate": 1
						},
						"29818884": {
							"sampleRate": 1
						},
						"29949953": {
							"sampleRate": 1
						},
						"29949955": {
							"sampleRate": 1
						},
						"30408705": {
							"sampleRate": 1
						},
						"30408706": {
							"sampleRate": 1
						},
						"30408707": {
							"sampleRate": 1
						},
						"30408708": {
							"sampleRate": 1
						},
						"30408709": {
							"sampleRate": 1
						},
						"30408710": {
							"sampleRate": 1
						},
						"30408711": {
							"sampleRate": 1
						},
						"30408712": {
							"sampleRate": 1
						},
						"30605313": {
							"sampleRate": 100
						},
						"30605314": {
							"sampleRate": 100
						},
						"30605315": {
							"sampleRate": 100
						},
						"30605316": {
							"sampleRate": 1
						},
						"30605317": {
							"sampleRate": 1
						},
						"30605319": {
							"sampleRate": 1
						},
						"30605320": {
							"sampleRate": 1
						},
						"30605321": {
							"sampleRate": 1
						},
						"30605322": {
							"sampleRate": 1
						},
						"30605323": {
							"sampleRate": 1
						},
						"30605324": {
							"sampleRate": 1
						},
						"30605325": {
							"sampleRate": 1
						},
						"30605326": {
							"sampleRate": 1
						},
						"30605328": {
							"sampleRate": 1
						},
						"30605329": {
							"sampleRate": 1
						},
						"30605330": {
							"sampleRate": 1
						},
						"30605331": {
							"sampleRate": 1
						},
						"30605333": {
							"sampleRate": 1
						},
						"30605334": {
							"sampleRate": 1
						},
						"30605335": {
							"sampleRate": 1
						},
						"30605336": {
							"sampleRate": 1
						},
						"30605337": {
							"sampleRate": 1
						},
						"30605338": {
							"sampleRate": 1
						},
						"30605339": {
							"sampleRate": 1
						},
						"30605340": {
							"sampleRate": 1
						},
						"30605341": {
							"sampleRate": 1
						},
						"30605342": {
							"sampleRate": 1
						},
						"30605343": {
							"sampleRate": 1
						},
						"30605344": {
							"sampleRate": 1
						},
						"30605345": {
							"sampleRate": 1
						},
						"30605346": {
							"sampleRate": 1
						},
						"30605347": {
							"sampleRate": 1
						},
						"30605348": {
							"sampleRate": 1
						},
						"30605349": {
							"sampleRate": 1
						},
						"30605350": {
							"sampleRate": 1
						},
						"30605351": {
							"sampleRate": 1
						},
						"30605352": {
							"sampleRate": 1
						},
						"30605353": {
							"sampleRate": 1
						},
						"30605354": {
							"sampleRate": 1
						},
						"30605355": {
							"sampleRate": 1
						},
						"30605356": {
							"sampleRate": 1
						},
						"30605357": {
							"sampleRate": 1
						},
						"30605358": {
							"sampleRate": 1
						},
						"30605360": {
							"sampleRate": 1
						},
						"30605361": {
							"sampleRate": 1
						},
						"30605362": {
							"sampleRate": 1
						},
						"30605363": {
							"sampleRate": 1
						},
						"30605364": {
							"sampleRate": 1
						},
						"30605366": {
							"sampleRate": 1
						},
						"30605367": {
							"sampleRate": 1
						},
						"30605368": {
							"sampleRate": 1
						},
						"30605369": {
							"sampleRate": 1
						},
						"30605370": {
							"sampleRate": 1
						},
						"30605371": {
							"sampleRate": 1
						},
						"30605373": {
							"sampleRate": 1
						},
						"30605374": {
							"sampleRate": 1
						},
						"30605375": {
							"sampleRate": 1
						},
						"30605376": {
							"sampleRate": 1
						},
						"30605378": {
							"sampleRate": 1
						},
						"30605380": {
							"sampleRate": 1
						},
						"30605381": {
							"sampleRate": 1
						},
						"30605382": {
							"sampleRate": 1
						},
						"30605384": {
							"sampleRate": 1
						},
						"30605386": {
							"sampleRate": 1
						},
						"30605387": {
							"sampleRate": 1
						},
						"30605389": {
							"sampleRate": 1
						},
						"30605390": {
							"sampleRate": 1
						},
						"30605391": {
							"sampleRate": 1
						},
						"30605392": {
							"sampleRate": 1
						},
						"30605393": {
							"sampleRate": 1
						},
						"30608244": {
							"sampleRate": 1
						},
						"30613596": {
							"sampleRate": 1
						},
						"30615365": {
							"sampleRate": 1
						},
						"30615438": {
							"sampleRate": 1
						},
						"30616610": {
							"sampleRate": 1
						},
						"30618398": {
							"sampleRate": 1
						},
						"30620813": {
							"sampleRate": 1
						},
						"30621572": {
							"sampleRate": 1
						},
						"30632331": {
							"sampleRate": 1
						},
						"32312156": {
							"sampleRate": 1
						},
						"32374785": {
							"sampleRate": 10000
						},
						"32702465": {
							"sampleRate": 1
						},
						"33488897": {
							"sampleRate": 1
						},
						"33488898": {
							"sampleRate": 1
						},
						"33488900": {
							"sampleRate": 1
						},
						"33488901": {
							"sampleRate": 1800
						},
						"33488902": {
							"sampleRate": 1
						},
						"33488903": {
							"sampleRate": 1
						},
						"33488904": {
							"sampleRate": 1
						},
						"33488905": {
							"sampleRate": 1
						},
						"33494245": {
							"sampleRate": 1
						},
						"33619969": {
							"sampleRate": 1
						},
						"35586051": {
							"sampleRate": 10
						},
						"35586052": {
							"sampleRate": 1000
						},
						"35586053": {
							"sampleRate": 1000
						},
						"35651585": {
							"sampleRate": 1
						},
						"35651586": {
							"sampleRate": 1
						},
						"35651587": {
							"sampleRate": 1
						},
						"35651588": {
							"sampleRate": 1
						},
						"35651589": {
							"sampleRate": 1
						},
						"35651590": {
							"sampleRate": 1
						},
						"35651591": {
							"sampleRate": 1
						},
						"35651593": {
							"sampleRate": 1
						},
						"35651594": {
							"sampleRate": 1
						},
						"35651595": {
							"sampleRate": 1
						},
						"35651596": {
							"sampleRate": 1
						},
						"36110337": {
							"sampleRate": 1
						},
						"36110338": {
							"sampleRate": 1
						},
						"36110339": {
							"sampleRate": 1
						},
						"36241413": {
							"sampleRate": 1
						},
						"36241422": {
							"sampleRate": 1
						},
						"36241423": {
							"sampleRate": 1
						},
						"36241434": {
							"sampleRate": 1
						},
						"36243184": {
							"sampleRate": 1
						},
						"36244063": {
							"sampleRate": 1
						},
						"36246584": {
							"sampleRate": 1
						},
						"36247076": {
							"sampleRate": 1
						},
						"36247834": {
							"sampleRate": 1
						},
						"36249481": {
							"sampleRate": 1
						},
						"36250226": {
							"sampleRate": 1
						},
						"36251818": {
							"sampleRate": 1
						},
						"36256069": {
							"sampleRate": 1
						},
						"36257380": {
							"sampleRate": 1
						},
						"36306945": {
							"sampleRate": 1
						},
						"36306946": {
							"sampleRate": 1
						},
						"36306948": {
							"sampleRate": 1
						},
						"36306951": {
							"sampleRate": 1000
						},
						"36306952": {
							"sampleRate": 1
						},
						"36306955": {
							"sampleRate": 1
						},
						"36306958": {
							"sampleRate": 1
						},
						"37096251": {
							"sampleRate": 10000
						},
						"37101248": {
							"sampleRate": 10000
						},
						"37158913": {
							"sampleRate": 1
						},
						"37158914": {
							"sampleRate": 1
						},
						"37158915": {
							"sampleRate": 1
						},
						"37158916": {
							"sampleRate": 1
						},
						"37224449": {
							"sampleRate": 10000
						},
						"37224450": {
							"sampleRate": 10000
						},
						"37224451": {
							"sampleRate": 10000
						},
						"37224452": {
							"sampleRate": 10000
						},
						"37224453": {
							"sampleRate": 10000
						},
						"37224454": {
							"sampleRate": 10000
						},
						"37224455": {
							"sampleRate": 10000
						},
						"37224456": {
							"sampleRate": 10000
						},
						"37224457": {
							"sampleRate": 10000
						},
						"37289985": {
							"sampleRate": 1
						},
						"37289986": {
							"sampleRate": 1
						},
						"37289987": {
							"sampleRate": 1
						},
						"37289990": {
							"sampleRate": 1
						},
						"37289991": {
							"sampleRate": 1
						},
						"37289992": {
							"sampleRate": 1
						},
						"37814273": {
							"sampleRate": 1
						},
						"37814274": {
							"sampleRate": 1
						},
						"37814275": {
							"sampleRate": 1
						},
						"38209779": {
							"sampleRate": 100
						},
						"38212112": {
							"sampleRate": 100
						},
						"38212473": {
							"sampleRate": 100
						},
						"38220042": {
							"sampleRate": 100
						},
						"38338561": {
							"sampleRate": 10000
						},
						"38338562": {
							"sampleRate": 10000
						},
						"38338563": {
							"sampleRate": 10000
						},
						"38338564": {
							"sampleRate": 1
						},
						"38928385": {
							"sampleRate": 1
						},
						"39976964": {
							"sampleRate": 2
						},
						"39976965": {
							"sampleRate": 2
						},
						"39976966": {
							"sampleRate": 1
						},
						"39976967": {
							"sampleRate": 2
						},
						"40173575": {
							"sampleRate": 1000
						},
						"40501249": {
							"sampleRate": 1
						},
						"40501250": {
							"sampleRate": 1
						},
						"40501251": {
							"sampleRate": 1
						},
						"40501252": {
							"sampleRate": 1
						},
						"40501253": {
							"sampleRate": 1
						},
						"40501254": {
							"sampleRate": 1
						},
						"40501255": {
							"sampleRate": 1
						},
						"40828935": {
							"sampleRate": 1
						},
						"40840748": {
							"sampleRate": 1
						},
						"40841422": {
							"sampleRate": 1
						},
						"40843772": {
							"sampleRate": 1
						},
						"40894467": {
							"sampleRate": 1
						},
						"40894468": {
							"sampleRate": 1
						},
						"40894469": {
							"sampleRate": 1
						},
						"40894470": {
							"sampleRate": 1
						},
						"40894471": {
							"sampleRate": 1
						},
						"40894472": {
							"sampleRate": 1
						},
						"40894473": {
							"sampleRate": 1
						},
						"40894474": {
							"sampleRate": 1
						},
						"40894475": {
							"sampleRate": 1
						},
						"40894483": {
							"sampleRate": 1
						},
						"40894484": {
							"sampleRate": 1
						},
						"40894485": {
							"sampleRate": 1
						},
						"40894486": {
							"sampleRate": 1
						},
						"40894487": {
							"sampleRate": 1
						},
						"40894490": {
							"sampleRate": 1
						},
						"40894491": {
							"sampleRate": 1
						},
						"40894492": {
							"sampleRate": 1
						},
						"40894493": {
							"sampleRate": 1
						},
						"40894494": {
							"sampleRate": 1
						},
						"40894495": {
							"sampleRate": 1
						},
						"40894496": {
							"sampleRate": 1
						},
						"40894497": {
							"sampleRate": 1
						},
						"40894498": {
							"sampleRate": 1
						},
						"40894499": {
							"sampleRate": 1
						},
						"40894500": {
							"sampleRate": 1
						},
						"40894501": {
							"sampleRate": 1
						},
						"40894502": {
							"sampleRate": 1
						},
						"40905691": {
							"sampleRate": 1
						},
						"40910623": {
							"sampleRate": 1
						},
						"40913765": {
							"sampleRate": 1
						},
						"40919892": {
							"sampleRate": 1
						},
						"41484289": {
							"sampleRate": 2
						},
						"41484290": {
							"sampleRate": 100
						},
						"41484291": {
							"sampleRate": 100
						},
						"41484292": {
							"sampleRate": 100
						},
						"41484293": {
							"sampleRate": 100
						},
						"41484294": {
							"sampleRate": 200
						},
						"41484295": {
							"sampleRate": 100
						},
						"41484296": {
							"sampleRate": 100
						},
						"41484297": {
							"sampleRate": 100
						},
						"41484298": {
							"sampleRate": 100
						},
						"41484299": {
							"sampleRate": 100
						},
						"41484300": {
							"sampleRate": 100
						},
						"41484301": {
							"sampleRate": 1
						},
						"41484302": {
							"sampleRate": 100
						},
						"41484303": {
							"sampleRate": 100
						},
						"41484304": {
							"sampleRate": 100
						},
						"41484306": {
							"sampleRate": 100
						},
						"41484307": {
							"sampleRate": 100
						},
						"41484308": {
							"sampleRate": 100
						},
						"41484309": {
							"sampleRate": 10
						},
						"41484310": {
							"sampleRate": 10
						},
						"41484311": {
							"sampleRate": 1
						},
						"41484312": {
							"sampleRate": 1
						},
						"41484313": {
							"sampleRate": 1
						},
						"41484314": {
							"sampleRate": 1
						},
						"41484315": {
							"sampleRate": 100
						},
						"41484317": {
							"sampleRate": 100
						},
						"41484318": {
							"sampleRate": 20
						},
						"41488847": {
							"sampleRate": 1
						},
						"41490105": {
							"sampleRate": 1
						},
						"41490310": {
							"sampleRate": 100
						},
						"41491369": {
							"sampleRate": 10
						},
						"41491493": {
							"sampleRate": 1
						},
						"41491663": {
							"sampleRate": 2
						},
						"41492048": {
							"sampleRate": 1
						},
						"41494292": {
							"sampleRate": 100
						},
						"41495493": {
							"sampleRate": 1
						},
						"41497784": {
							"sampleRate": 100
						},
						"41500090": {
							"sampleRate": 1
						},
						"41500162": {
							"sampleRate": 100
						},
						"41506813": {
							"sampleRate": 250
						},
						"41549825": {
							"sampleRate": 1
						},
						"41811969": {
							"sampleRate": 1
						},
						"41811970": {
							"sampleRate": 1
						},
						"41811971": {
							"sampleRate": 1
						},
						"42532865": {
							"sampleRate": 1000
						},
						"42532866": {
							"sampleRate": 10000
						},
						"42729476": {
							"sampleRate": 1
						},
						"42729477": {
							"sampleRate": 1
						},
						"42729478": {
							"sampleRate": 1
						},
						"42738840": {
							"sampleRate": 1
						},
						"44040193": {
							"sampleRate": 1
						},
						"44040194": {
							"sampleRate": 1
						},
						"44040198": {
							"sampleRate": 1
						},
						"44433409": {
							"sampleRate": 1
						},
						"44433410": {
							"sampleRate": 1
						},
						"44433411": {
							"sampleRate": 1
						},
						"44892162": {
							"sampleRate": 1
						},
						"44892163": {
							"sampleRate": 1
						},
						"44892165": {
							"sampleRate": 5
						},
						"44892166": {
							"sampleRate": 5
						},
						"44957701": {
							"sampleRate": 1
						},
						"44957702": {
							"sampleRate": 1
						},
						"45088770": {
							"sampleRate": 1
						},
						"45613057": {
							"sampleRate": 1
						},
						"45613058": {
							"sampleRate": 1
						},
						"45613059": {
							"sampleRate": 1
						},
						"45678593": {
							"sampleRate": 1
						},
						"45678594": {
							"sampleRate": 100
						},
						"46596097": {
							"sampleRate": 1
						},
						"47841281": {
							"sampleRate": 1
						},
						"47841282": {
							"sampleRate": 1
						},
						"47841283": {
							"sampleRate": 1
						},
						"48496641": {
							"sampleRate": 1
						},
						"48758785": {
							"sampleRate": 1
						},
						"48758786": {
							"sampleRate": 1
						},
						"49283073": {
							"sampleRate": 1
						},
						"49283075": {
							"sampleRate": 1
						},
						"49479681": {
							"sampleRate": 1
						},
						"49479683": {
							"sampleRate": 1
						},
						"49479684": {
							"sampleRate": 1
						},
						"49479685": {
							"sampleRate": 1
						},
						"49481946": {
							"sampleRate": 1
						},
						"49490667": {
							"sampleRate": 1
						},
						"49493231": {
							"sampleRate": 1
						},
						"50003969": {
							"sampleRate": 1
						},
						"50003970": {
							"sampleRate": 1
						},
						"50003971": {
							"sampleRate": 1
						},
						"50003972": {
							"sampleRate": 1
						},
						"50003973": {
							"sampleRate": 1
						},
						"50003974": {
							"sampleRate": 1
						},
						"50135041": {
							"sampleRate": 10000
						},
						"50135049": {
							"sampleRate": 1
						},
						"50987009": {
							"sampleRate": 1
						},
						"50987010": {
							"sampleRate": 1
						},
						"52035585": {
							"sampleRate": 1
						},
						"52690945": {
							"sampleRate": 1
						},
						"52690946": {
							"sampleRate": 1
						},
						"52690947": {
							"sampleRate": 1
						},
						"52690948": {
							"sampleRate": 1
						},
						"52690949": {
							"sampleRate": 1
						},
						"52690950": {
							"sampleRate": 1
						},
						"52694580": {
							"sampleRate": 1
						},
						"52698112": {
							"sampleRate": 1
						},
						"52705483": {
							"sampleRate": 1
						},
						"52706253": {
							"sampleRate": 1
						},
						"52709001": {
							"sampleRate": 1
						},
						"52710195": {
							"sampleRate": 1
						},
						"52711372": {
							"sampleRate": 1
						},
						"52711928": {
							"sampleRate": 1
						},
						"52712329": {
							"sampleRate": 1
						},
						"52717731": {
							"sampleRate": 1
						},
						"52719193": {
							"sampleRate": 1
						},
						"52720775": {
							"sampleRate": 1
						},
						"52722738": {
							"sampleRate": 1
						},
						"52756481": {
							"sampleRate": 1
						},
						"52887553": {
							"sampleRate": 1
						},
						"52887555": {
							"sampleRate": 1
						},
						"52887556": {
							"sampleRate": 1
						},
						"52887557": {
							"sampleRate": 1
						},
						"52887559": {
							"sampleRate": 1
						},
						"52887560": {
							"sampleRate": 1
						},
						"52887561": {
							"sampleRate": 1
						},
						"52887562": {
							"sampleRate": 1
						},
						"52887563": {
							"sampleRate": 1
						},
						"52887564": {
							"sampleRate": 1
						},
						"52887565": {
							"sampleRate": 1
						},
						"52887566": {
							"sampleRate": 1
						},
						"52887567": {
							"sampleRate": 1
						},
						"52887568": {
							"sampleRate": 1
						},
						"52887569": {
							"sampleRate": 1
						},
						"52887570": {
							"sampleRate": 1
						},
						"52887571": {
							"sampleRate": 1
						},
						"52887572": {
							"sampleRate": 1
						},
						"52887573": {
							"sampleRate": 1
						},
						"52887574": {
							"sampleRate": 1
						},
						"52887575": {
							"sampleRate": 1
						},
						"52887579": {
							"sampleRate": 1
						},
						"52887580": {
							"sampleRate": 1
						},
						"52887581": {
							"sampleRate": 1
						},
						"52887582": {
							"sampleRate": 1
						},
						"52887583": {
							"sampleRate": 1
						},
						"52887584": {
							"sampleRate": 1
						},
						"52887585": {
							"sampleRate": 1
						},
						"52887586": {
							"sampleRate": 1
						},
						"52887587": {
							"sampleRate": 1
						},
						"52887588": {
							"sampleRate": 1
						},
						"52890296": {
							"sampleRate": 1
						},
						"52890564": {
							"sampleRate": 1
						},
						"52891463": {
							"sampleRate": 1
						},
						"52892246": {
							"sampleRate": 1
						},
						"52892954": {
							"sampleRate": 1
						},
						"52893703": {
							"sampleRate": 1
						},
						"52894986": {
							"sampleRate": 1
						},
						"52895164": {
							"sampleRate": 1
						},
						"52898655": {
							"sampleRate": 1
						},
						"52899201": {
							"sampleRate": 1
						},
						"52899465": {
							"sampleRate": 1
						},
						"52900325": {
							"sampleRate": 1
						},
						"52901539": {
							"sampleRate": 1
						},
						"52901642": {
							"sampleRate": 1
						},
						"52903160": {
							"sampleRate": 1
						},
						"52903222": {
							"sampleRate": 1
						},
						"52910634": {
							"sampleRate": 1
						},
						"53018625": {
							"sampleRate": 1
						},
						"53346305": {
							"sampleRate": 1
						},
						"53346306": {
							"sampleRate": 1
						},
						"53346307": {
							"sampleRate": 1
						},
						"53346308": {
							"sampleRate": 1
						},
						"53346309": {
							"sampleRate": 1
						},
						"53346310": {
							"sampleRate": 1
						},
						"53346311": {
							"sampleRate": 1
						},
						"53346312": {
							"sampleRate": 1
						},
						"53346313": {
							"sampleRate": 1
						},
						"53346314": {
							"sampleRate": 1
						},
						"53346315": {
							"sampleRate": 1
						},
						"53348255": {
							"sampleRate": 1
						},
						"53349360": {
							"sampleRate": 1
						},
						"53350227": {
							"sampleRate": 1
						},
						"53351604": {
							"sampleRate": 1
						},
						"53354745": {
							"sampleRate": 1
						},
						"53359547": {
							"sampleRate": 1
						},
						"53359965": {
							"sampleRate": 1
						},
						"53361379": {
							"sampleRate": 1
						},
						"53542913": {
							"sampleRate": 1
						},
						"53542914": {
							"sampleRate": 1
						},
						"53542915": {
							"sampleRate": 1
						},
						"53542916": {
							"sampleRate": 1
						},
						"53608449": {
							"sampleRate": 1
						},
						"53608450": {
							"sampleRate": 1
						},
						"53608451": {
							"sampleRate": 1
						},
						"53739521": {
							"sampleRate": 10000
						},
						"53805057": {
							"sampleRate": 1
						},
						"53805058": {
							"sampleRate": 1
						},
						"53805059": {
							"sampleRate": 1
						},
						"53805060": {
							"sampleRate": 1
						},
						"53817004": {
							"sampleRate": 1
						},
						"54132737": {
							"sampleRate": 100
						},
						"54198273": {
							"sampleRate": 1
						},
						"54198274": {
							"sampleRate": 1
						},
						"54263809": {
							"sampleRate": 1
						},
						"54263810": {
							"sampleRate": 1
						},
						"54263811": {
							"sampleRate": 1
						},
						"54263812": {
							"sampleRate": 1
						},
						"54263813": {
							"sampleRate": 1
						},
						"54263814": {
							"sampleRate": 1
						},
						"54263815": {
							"sampleRate": 1
						},
						"54263816": {
							"sampleRate": 1
						},
						"54263817": {
							"sampleRate": 1
						},
						"54263818": {
							"sampleRate": 1
						},
						"54263819": {
							"sampleRate": 1
						},
						"54263820": {
							"sampleRate": 1
						},
						"54266075": {
							"sampleRate": 1
						},
						"54266141": {
							"sampleRate": 1
						},
						"54285047": {
							"sampleRate": 1
						},
						"54287428": {
							"sampleRate": 1
						},
						"54525953": {
							"sampleRate": 2
						},
						"54525954": {
							"sampleRate": 1
						},
						"54525955": {
							"sampleRate": 1
						},
						"54525956": {
							"sampleRate": 1
						},
						"54525957": {
							"sampleRate": 1
						},
						"54525958": {
							"sampleRate": 1
						},
						"54525959": {
							"sampleRate": 1
						},
						"54657025": {
							"sampleRate": 10000
						},
						"54657026": {
							"sampleRate": 10000
						},
						"54657027": {
							"sampleRate": 10000
						},
						"54657028": {
							"sampleRate": 10000
						},
						"54657029": {
							"sampleRate": 10000
						},
						"54657030": {
							"sampleRate": 10000
						},
						"54853633": {
							"sampleRate": 1
						},
						"54853634": {
							"sampleRate": 1
						},
						"54856934": {
							"sampleRate": 1
						},
						"54919169": {
							"sampleRate": 1
						},
						"54919170": {
							"sampleRate": 1
						},
						"54919171": {
							"sampleRate": 1
						},
						"54919172": {
							"sampleRate": 1
						},
						"54919173": {
							"sampleRate": 1
						},
						"54919174": {
							"sampleRate": 1
						},
						"54919175": {
							"sampleRate": 1
						},
						"54919176": {
							"sampleRate": 1
						},
						"54919177": {
							"sampleRate": 1
						},
						"54919178": {
							"sampleRate": 1
						},
						"54919179": {
							"sampleRate": 1
						},
						"54919180": {
							"sampleRate": 1
						},
						"54919181": {
							"sampleRate": 1
						},
						"54919182": {
							"sampleRate": 1
						},
						"54919183": {
							"sampleRate": 1
						},
						"54919184": {
							"sampleRate": 1
						},
						"54919185": {
							"sampleRate": 1
						},
						"54919186": {
							"sampleRate": 1
						},
						"54919187": {
							"sampleRate": 1
						},
						"54919188": {
							"sampleRate": 1
						},
						"54919189": {
							"sampleRate": 1
						},
						"54919190": {
							"sampleRate": 1
						},
						"54919191": {
							"sampleRate": 1
						},
						"54919192": {
							"sampleRate": 1
						},
						"54919193": {
							"sampleRate": 1
						},
						"54919194": {
							"sampleRate": 1
						},
						"54919195": {
							"sampleRate": 1
						},
						"54919196": {
							"sampleRate": 1
						},
						"54919197": {
							"sampleRate": 1
						},
						"54919198": {
							"sampleRate": 1
						},
						"54919199": {
							"sampleRate": 1
						},
						"54920986": {
							"sampleRate": 1
						},
						"54928841": {
							"sampleRate": 1
						},
						"55181313": {
							"sampleRate": 1
						},
						"55181314": {
							"sampleRate": 1
						},
						"55181315": {
							"sampleRate": 1
						},
						"55181316": {
							"sampleRate": 1
						},
						"55181317": {
							"sampleRate": 1
						},
						"55246849": {
							"sampleRate": 1
						},
						"55246850": {
							"sampleRate": 1000000000
						},
						"55312385": {
							"sampleRate": 1
						},
						"55312386": {
							"sampleRate": 1
						},
						"55312388": {
							"sampleRate": 1
						},
						"55325709": {
							"sampleRate": 1
						},
						"55443457": {
							"sampleRate": 1
						},
						"55443458": {
							"sampleRate": 1
						},
						"55443459": {
							"sampleRate": 1
						},
						"55443460": {
							"sampleRate": 1
						},
						"55447349": {
							"sampleRate": 1
						},
						"55465642": {
							"sampleRate": 1
						},
						"55508994": {
							"sampleRate": 1
						},
						"55508995": {
							"sampleRate": 1
						},
						"55508996": {
							"sampleRate": 1
						},
						"55517182": {
							"sampleRate": 1
						},
						"55574529": {
							"sampleRate": 10000
						},
						"55574530": {
							"sampleRate": 10000
						},
						"55836673": {
							"sampleRate": 1
						},
						"55836674": {
							"sampleRate": 1000000000
						},
						"55836675": {
							"sampleRate": 1000000000
						},
						"55836676": {
							"sampleRate": 1000000000
						},
						"55836677": {
							"sampleRate": 1000000000
						},
						"55836678": {
							"sampleRate": 10000
						},
						"55838299": {
							"sampleRate": 10000
						},
						"55838475": {
							"sampleRate": 10000
						},
						"55838751": {
							"sampleRate": 10000
						},
						"55839297": {
							"sampleRate": 10000
						},
						"55967745": {
							"sampleRate": 1
						},
						"55967746": {
							"sampleRate": 1
						},
						"55967747": {
							"sampleRate": 1
						},
						"55967748": {
							"sampleRate": 1
						},
						"56360961": {
							"sampleRate": 1
						},
						"57344001": {
							"sampleRate": 1
						},
						"57344002": {
							"sampleRate": 10
						},
						"57344003": {
							"sampleRate": 1
						},
						"57344004": {
							"sampleRate": 1
						},
						"57344005": {
							"sampleRate": 10000
						},
						"57409537": {
							"sampleRate": 100000000
						},
						"57409538": {
							"sampleRate": 100000000
						},
						"57409539": {
							"sampleRate": 100000000
						},
						"57618043": {
							"sampleRate": 1
						},
						"57630710": {
							"sampleRate": 1
						},
						"57671681": {
							"sampleRate": 1
						},
						"57671682": {
							"sampleRate": 1
						},
						"57671683": {
							"sampleRate": 1
						},
						"57671684": {
							"sampleRate": 1
						},
						"57671685": {
							"sampleRate": 1
						},
						"57933825": {
							"sampleRate": 1
						},
						"57999361": {
							"sampleRate": 1
						},
						"57999362": {
							"sampleRate": 1
						},
						"58195969": {
							"sampleRate": 1
						},
						"58195970": {
							"sampleRate": 1
						},
						"58195971": {
							"sampleRate": 1
						},
						"58197575": {
							"sampleRate": 1
						},
						"58198230": {
							"sampleRate": 1
						},
						"58198910": {
							"sampleRate": 1
						},
						"58199413": {
							"sampleRate": 1
						},
						"58200119": {
							"sampleRate": 1
						},
						"58203187": {
							"sampleRate": 1
						},
						"58203836": {
							"sampleRate": 1
						},
						"58204719": {
							"sampleRate": 1
						},
						"58205292": {
							"sampleRate": 1
						},
						"58207372": {
							"sampleRate": 1
						},
						"58207791": {
							"sampleRate": 1
						},
						"58208772": {
							"sampleRate": 1
						},
						"58209083": {
							"sampleRate": 1
						},
						"58209723": {
							"sampleRate": 1
						},
						"58209742": {
							"sampleRate": 1
						},
						"58210323": {
							"sampleRate": 1
						},
						"58210485": {
							"sampleRate": 1
						},
						"58211715": {
							"sampleRate": 1
						},
						"58211900": {
							"sampleRate": 1
						},
						"58458114": {
							"sampleRate": 1
						},
						"58458115": {
							"sampleRate": 1
						},
						"58471621": {
							"sampleRate": 1
						},
						"58654721": {
							"sampleRate": 1
						},
						"58654722": {
							"sampleRate": 1
						},
						"58654723": {
							"sampleRate": 1
						},
						"59244545": {
							"sampleRate": 1
						},
						"59244546": {
							"sampleRate": 1
						},
						"59249609": {
							"sampleRate": 1
						},
						"59255771": {
							"sampleRate": 1
						},
						"59506689": {
							"sampleRate": 10000
						},
						"59899905": {
							"sampleRate": 1
						},
						"59899906": {
							"sampleRate": 1
						},
						"59899907": {
							"sampleRate": 1
						},
						"59899908": {
							"sampleRate": 1
						},
						"59899909": {
							"sampleRate": 1
						},
						"60358658": {
							"sampleRate": 10000
						},
						"61276161": {
							"sampleRate": 1
						},
						"61276162": {
							"sampleRate": 1
						},
						"61276163": {
							"sampleRate": 1
						},
						"61276164": {
							"sampleRate": 1
						},
						"61407233": {
							"sampleRate": 10000
						},
						"61931524": {
							"sampleRate": 10000
						},
						"62128129": {
							"sampleRate": 1
						},
						"62128130": {
							"sampleRate": 1
						},
						"62128131": {
							"sampleRate": 1
						},
						"62128132": {
							"sampleRate": 1
						},
						"62128133": {
							"sampleRate": 1
						},
						"62128134": {
							"sampleRate": 1
						},
						"62128135": {
							"sampleRate": 1
						},
						"62134670": {
							"sampleRate": 1
						},
						"62324737": {
							"sampleRate": 1
						},
						"62324738": {
							"sampleRate": 1
						},
						"62324739": {
							"sampleRate": 1
						},
						"62455809": {
							"sampleRate": 1
						},
						"62455810": {
							"sampleRate": 1
						},
						"62455811": {
							"sampleRate": 1
						},
						"62521345": {
							"sampleRate": 10
						},
						"62521346": {
							"sampleRate": 10
						},
						"62521347": {
							"sampleRate": 10
						},
						"62521348": {
							"sampleRate": 10
						},
						"62521349": {
							"sampleRate": 10
						},
						"62521350": {
							"sampleRate": 10
						},
						"62532802": {
							"sampleRate": 10
						},
						"62586881": {
							"sampleRate": 10
						},
						"62914562": {
							"sampleRate": 1
						},
						"62980097": {
							"sampleRate": 10000
						},
						"63373313": {
							"sampleRate": 1
						},
						"63438849": {
							"sampleRate": 1
						},
						"63444114": {
							"sampleRate": 1
						},
						"63504385": {
							"sampleRate": 1
						},
						"63504386": {
							"sampleRate": 1
						},
						"63504387": {
							"sampleRate": 1
						},
						"63569921": {
							"sampleRate": 1
						},
						"63635457": {
							"sampleRate": 1
						},
						"63700993": {
							"sampleRate": 1
						},
						"63700994": {
							"sampleRate": 1
						},
						"63700995": {
							"sampleRate": 1
						},
						"63700996": {
							"sampleRate": 1
						},
						"63700997": {
							"sampleRate": 1
						},
						"63832066": {
							"sampleRate": 10000
						},
						"63832067": {
							"sampleRate": 10000
						},
						"63963137": {
							"sampleRate": 1
						},
						"64044054": {
							"sampleRate": 10000
						},
						"64225281": {
							"sampleRate": 1
						},
						"64225283": {
							"sampleRate": 10000
						},
						"81599639": {
							"sampleRate": 10000
						},
						"81601374": {
							"sampleRate": 10000
						},
						"81602848": {
							"sampleRate": 10000
						},
						"81607290": {
							"sampleRate": 10000
						},
						"96997416": {
							"sampleRate": 10000
						},
						"101652143": {
							"sampleRate": 1
						},
						"127468755": {
							"sampleRate": 1
						},
						"127468795": {
							"sampleRate": 1
						},
						"127469845": {
							"sampleRate": 1
						},
						"127470924": {
							"sampleRate": 1
						},
						"127471679": {
							"sampleRate": 1
						},
						"127474327": {
							"sampleRate": 1
						},
						"127477457": {
							"sampleRate": 1
						},
						"127481618": {
							"sampleRate": 1
						},
						"127483160": {
							"sampleRate": 1
						},
						"134488117": {
							"sampleRate": 10
						},
						"134493437": {
							"sampleRate": 10
						},
						"137428993": {
							"sampleRate": 10000
						},
						"137428994": {
							"sampleRate": 10000
						},
						"141492225": {
							"sampleRate": 1
						},
						"141502565": {
							"sampleRate": 1
						},
						"157419241": {
							"sampleRate": 10000
						},
						"159779919": {
							"sampleRate": 1
						},
						"159785008": {
							"sampleRate": 1
						},
						"183762945": {
							"sampleRate": 1
						},
						"195626194": {
							"sampleRate": 10000
						},
						"195639692": {
							"sampleRate": 1
						},
						"205198634": {
							"sampleRate": 1
						},
						"205207410": {
							"sampleRate": 1
						},
						"209979636": {
							"sampleRate": 1
						},
						"209989735": {
							"sampleRate": 1
						},
						"216401752": {
							"sampleRate": 1
						},
						"216401890": {
							"sampleRate": 1
						},
						"218956945": {
							"sampleRate": 1
						},
						"218957184": {
							"sampleRate": 1
						},
						"218960427": {
							"sampleRate": 1
						},
						"218961094": {
							"sampleRate": 1
						},
						"218961347": {
							"sampleRate": 1
						},
						"218962996": {
							"sampleRate": 1
						},
						"218965173": {
							"sampleRate": 1
						},
						"218966113": {
							"sampleRate": 1
						},
						"218966226": {
							"sampleRate": 10
						},
						"218969087": {
							"sampleRate": 1
						},
						"218969883": {
							"sampleRate": 1
						},
						"218970026": {
							"sampleRate": 1
						},
						"218970632": {
							"sampleRate": 1
						},
						"218971974": {
							"sampleRate": 1
						},
						"221778284": {
							"sampleRate": 1
						},
						"221779419": {
							"sampleRate": 1
						},
						"221786123": {
							"sampleRate": 1
						},
						"232726078": {
							"sampleRate": 1
						},
						"241569419": {
							"sampleRate": 1
						},
						"270205944": {
							"sampleRate": 1
						},
						"270206071": {
							"sampleRate": 1
						},
						"270206145": {
							"sampleRate": 1
						},
						"270206168": {
							"sampleRate": 1
						},
						"270206214": {
							"sampleRate": 1
						},
						"270206216": {
							"sampleRate": 1
						},
						"270206224": {
							"sampleRate": 1
						},
						"270206259": {
							"sampleRate": 1
						},
						"270206315": {
							"sampleRate": 1
						},
						"270206696": {
							"sampleRate": 1
						},
						"270206744": {
							"sampleRate": 1
						},
						"270206832": {
							"sampleRate": 1
						},
						"270206870": {
							"sampleRate": 1
						},
						"270207073": {
							"sampleRate": 1
						},
						"270207098": {
							"sampleRate": 1
						},
						"270207136": {
							"sampleRate": 1
						},
						"270207296": {
							"sampleRate": 1
						},
						"270207420": {
							"sampleRate": 1
						},
						"270207600": {
							"sampleRate": 1
						},
						"270207618": {
							"sampleRate": 1
						},
						"270207797": {
							"sampleRate": 1
						},
						"270207843": {
							"sampleRate": 1
						},
						"270207912": {
							"sampleRate": 1
						},
						"270207953": {
							"sampleRate": 1
						},
						"270208148": {
							"sampleRate": 1
						},
						"270208178": {
							"sampleRate": 1
						},
						"270208265": {
							"sampleRate": 1
						},
						"270208269": {
							"sampleRate": 1
						},
						"270208286": {
							"sampleRate": 1
						},
						"270208333": {
							"sampleRate": 1
						},
						"270208406": {
							"sampleRate": 1
						},
						"270208527": {
							"sampleRate": 1
						},
						"270208656": {
							"sampleRate": 1
						},
						"270208826": {
							"sampleRate": 1
						},
						"270208920": {
							"sampleRate": 1
						},
						"270209003": {
							"sampleRate": 1
						},
						"270209052": {
							"sampleRate": 1
						},
						"270209091": {
							"sampleRate": 1
						},
						"270209102": {
							"sampleRate": 1
						},
						"270209148": {
							"sampleRate": 1
						},
						"270209274": {
							"sampleRate": 1
						},
						"270209329": {
							"sampleRate": 1
						},
						"270209402": {
							"sampleRate": 1
						},
						"270209445": {
							"sampleRate": 1
						},
						"270209519": {
							"sampleRate": 1
						},
						"270209660": {
							"sampleRate": 1
						},
						"270209661": {
							"sampleRate": 1
						},
						"270209760": {
							"sampleRate": 1
						},
						"270209775": {
							"sampleRate": 1
						},
						"270209815": {
							"sampleRate": 1
						},
						"270209843": {
							"sampleRate": 1
						},
						"270209902": {
							"sampleRate": 1
						},
						"270209991": {
							"sampleRate": 1
						},
						"270210074": {
							"sampleRate": 1
						},
						"270210163": {
							"sampleRate": 1
						},
						"270210164": {
							"sampleRate": 1
						},
						"270210235": {
							"sampleRate": 1
						},
						"270210288": {
							"sampleRate": 1
						},
						"270210332": {
							"sampleRate": 1
						},
						"270210419": {
							"sampleRate": 1
						},
						"270210475": {
							"sampleRate": 1
						},
						"270210517": {
							"sampleRate": 1
						},
						"270210724": {
							"sampleRate": 1
						},
						"270210806": {
							"sampleRate": 1
						},
						"270210841": {
							"sampleRate": 1
						},
						"270210869": {
							"sampleRate": 1
						},
						"270211138": {
							"sampleRate": 1
						},
						"270211171": {
							"sampleRate": 1
						},
						"270211202": {
							"sampleRate": 1
						},
						"270211281": {
							"sampleRate": 1
						},
						"270211347": {
							"sampleRate": 1
						},
						"270211419": {
							"sampleRate": 1
						},
						"270211435": {
							"sampleRate": 1
						},
						"270211506": {
							"sampleRate": 1
						},
						"270211692": {
							"sampleRate": 1
						},
						"270211722": {
							"sampleRate": 1
						},
						"270211753": {
							"sampleRate": 1
						},
						"270211772": {
							"sampleRate": 1
						},
						"270211803": {
							"sampleRate": 1
						},
						"270211869": {
							"sampleRate": 1
						},
						"270212138": {
							"sampleRate": 1
						},
						"270212216": {
							"sampleRate": 1
						},
						"270212238": {
							"sampleRate": 1
						},
						"270212273": {
							"sampleRate": 1
						},
						"270212277": {
							"sampleRate": 1
						},
						"270212441": {
							"sampleRate": 1
						},
						"270212554": {
							"sampleRate": 1
						},
						"270212656": {
							"sampleRate": 1
						},
						"270212696": {
							"sampleRate": 1
						},
						"270212843": {
							"sampleRate": 1
						},
						"270212857": {
							"sampleRate": 1
						},
						"270212893": {
							"sampleRate": 1
						},
						"270213015": {
							"sampleRate": 1
						},
						"270213135": {
							"sampleRate": 1
						},
						"270213161": {
							"sampleRate": 1
						},
						"270213250": {
							"sampleRate": 1
						},
						"270213359": {
							"sampleRate": 1
						},
						"270213374": {
							"sampleRate": 1
						},
						"270213486": {
							"sampleRate": 1
						},
						"270213512": {
							"sampleRate": 1
						},
						"270213572": {
							"sampleRate": 1
						},
						"270213649": {
							"sampleRate": 1
						},
						"270213707": {
							"sampleRate": 1
						},
						"270213723": {
							"sampleRate": 1
						},
						"270213749": {
							"sampleRate": 1
						},
						"270213786": {
							"sampleRate": 1
						},
						"270214027": {
							"sampleRate": 1
						},
						"270214035": {
							"sampleRate": 1
						},
						"270214052": {
							"sampleRate": 1
						},
						"270214189": {
							"sampleRate": 1
						},
						"270214320": {
							"sampleRate": 1
						},
						"270214400": {
							"sampleRate": 1
						},
						"270214409": {
							"sampleRate": 1
						},
						"270214580": {
							"sampleRate": 1
						},
						"270214602": {
							"sampleRate": 1
						},
						"270214612": {
							"sampleRate": 1
						},
						"270214705": {
							"sampleRate": 1
						},
						"270214707": {
							"sampleRate": 1
						},
						"270214731": {
							"sampleRate": 1
						},
						"270214784": {
							"sampleRate": 1
						},
						"270214832": {
							"sampleRate": 1
						},
						"270215065": {
							"sampleRate": 1
						},
						"270215070": {
							"sampleRate": 1
						},
						"270215101": {
							"sampleRate": 1
						},
						"270215116": {
							"sampleRate": 1
						},
						"270215140": {
							"sampleRate": 1
						},
						"270215230": {
							"sampleRate": 1
						},
						"270215347": {
							"sampleRate": 1
						},
						"270215397": {
							"sampleRate": 1
						},
						"270215542": {
							"sampleRate": 1
						},
						"270215690": {
							"sampleRate": 1
						},
						"270215709": {
							"sampleRate": 1
						},
						"270215792": {
							"sampleRate": 1
						},
						"270215979": {
							"sampleRate": 1
						},
						"270216000": {
							"sampleRate": 1
						},
						"270216098": {
							"sampleRate": 1
						},
						"270216182": {
							"sampleRate": 1
						},
						"270216200": {
							"sampleRate": 1
						},
						"270216416": {
							"sampleRate": 1
						},
						"270216713": {
							"sampleRate": 1
						},
						"270216791": {
							"sampleRate": 1
						},
						"270216793": {
							"sampleRate": 1
						},
						"270216818": {
							"sampleRate": 1
						},
						"270216896": {
							"sampleRate": 1
						},
						"270216915": {
							"sampleRate": 1
						},
						"270216928": {
							"sampleRate": 1
						},
						"270216941": {
							"sampleRate": 1
						},
						"270216996": {
							"sampleRate": 1
						},
						"270217026": {
							"sampleRate": 1
						},
						"270217057": {
							"sampleRate": 1
						},
						"270217068": {
							"sampleRate": 1
						},
						"270217210": {
							"sampleRate": 1
						},
						"270217236": {
							"sampleRate": 1
						},
						"270217283": {
							"sampleRate": 1
						},
						"270217313": {
							"sampleRate": 1
						},
						"270217401": {
							"sampleRate": 1
						},
						"270217479": {
							"sampleRate": 1
						},
						"270217492": {
							"sampleRate": 1
						},
						"270217539": {
							"sampleRate": 1
						},
						"270217616": {
							"sampleRate": 1
						},
						"270217631": {
							"sampleRate": 1
						},
						"270217722": {
							"sampleRate": 1
						},
						"270217749": {
							"sampleRate": 1
						},
						"270217779": {
							"sampleRate": 1
						},
						"270217787": {
							"sampleRate": 1
						},
						"270217798": {
							"sampleRate": 1
						},
						"270217820": {
							"sampleRate": 1
						},
						"270217862": {
							"sampleRate": 1
						},
						"270217900": {
							"sampleRate": 1
						},
						"270218007": {
							"sampleRate": 1
						},
						"270218053": {
							"sampleRate": 1
						},
						"270218090": {
							"sampleRate": 1
						},
						"270218102": {
							"sampleRate": 1
						},
						"270218163": {
							"sampleRate": 1
						},
						"270218166": {
							"sampleRate": 1
						},
						"270218204": {
							"sampleRate": 1
						},
						"270218572": {
							"sampleRate": 1
						},
						"270218586": {
							"sampleRate": 1
						},
						"270218605": {
							"sampleRate": 1
						},
						"270218622": {
							"sampleRate": 1
						},
						"270218660": {
							"sampleRate": 1
						},
						"270218696": {
							"sampleRate": 1
						},
						"270218731": {
							"sampleRate": 1
						},
						"270218991": {
							"sampleRate": 1
						},
						"270219017": {
							"sampleRate": 1
						},
						"270219019": {
							"sampleRate": 1
						},
						"270219051": {
							"sampleRate": 1
						},
						"270219139": {
							"sampleRate": 1
						},
						"270219169": {
							"sampleRate": 1
						},
						"270219188": {
							"sampleRate": 1
						},
						"270219248": {
							"sampleRate": 1
						},
						"270219249": {
							"sampleRate": 1
						},
						"270219303": {
							"sampleRate": 1
						},
						"270219320": {
							"sampleRate": 1
						},
						"270219404": {
							"sampleRate": 1
						},
						"270219449": {
							"sampleRate": 1
						},
						"270219483": {
							"sampleRate": 1
						},
						"270219531": {
							"sampleRate": 1
						},
						"270219562": {
							"sampleRate": 1
						},
						"270219870": {
							"sampleRate": 1
						},
						"270219914": {
							"sampleRate": 1
						},
						"270219926": {
							"sampleRate": 1
						},
						"270220074": {
							"sampleRate": 1
						},
						"270220108": {
							"sampleRate": 1
						},
						"270220262": {
							"sampleRate": 1
						},
						"270220333": {
							"sampleRate": 1
						},
						"270220347": {
							"sampleRate": 1
						},
						"270220481": {
							"sampleRate": 1
						},
						"270220499": {
							"sampleRate": 1
						},
						"270220550": {
							"sampleRate": 1
						},
						"270220595": {
							"sampleRate": 1
						},
						"270220640": {
							"sampleRate": 1
						},
						"270220731": {
							"sampleRate": 1
						},
						"270220850": {
							"sampleRate": 1
						},
						"270220865": {
							"sampleRate": 1
						},
						"270220879": {
							"sampleRate": 1
						},
						"270220889": {
							"sampleRate": 1
						},
						"270220944": {
							"sampleRate": 1
						},
						"270220997": {
							"sampleRate": 1
						},
						"270221024": {
							"sampleRate": 1
						},
						"270221065": {
							"sampleRate": 1
						},
						"270221124": {
							"sampleRate": 1
						},
						"270221133": {
							"sampleRate": 1
						},
						"270221175": {
							"sampleRate": 1
						},
						"270221177": {
							"sampleRate": 1
						},
						"270223583": {
							"sampleRate": 1
						},
						"270224526": {
							"sampleRate": 1
						},
						"270228232": {
							"sampleRate": 1
						},
						"270230590": {
							"sampleRate": 1
						},
						"270230814": {
							"sampleRate": 1
						},
						"270230822": {
							"sampleRate": 1
						},
						"270232559": {
							"sampleRate": 1
						},
						"270233440": {
							"sampleRate": 1
						},
						"273481729": {
							"sampleRate": 1
						},
						"295437299": {
							"sampleRate": 1
						},
						"295437333": {
							"sampleRate": 1
						},
						"295437392": {
							"sampleRate": 1
						},
						"295438195": {
							"sampleRate": 1
						},
						"295438980": {
							"sampleRate": 1
						},
						"295439522": {
							"sampleRate": 1
						},
						"295440518": {
							"sampleRate": 1
						},
						"295441165": {
							"sampleRate": 1
						},
						"295442359": {
							"sampleRate": 1
						},
						"295442443": {
							"sampleRate": 1
						},
						"295442568": {
							"sampleRate": 1
						},
						"295443659": {
							"sampleRate": 1
						},
						"295443660": {
							"sampleRate": 1
						},
						"295444086": {
							"sampleRate": 1
						},
						"295444872": {
							"sampleRate": 1
						},
						"295444992": {
							"sampleRate": 1
						},
						"295445045": {
							"sampleRate": 1
						},
						"295445259": {
							"sampleRate": 1
						},
						"295445408": {
							"sampleRate": 1
						},
						"295446153": {
							"sampleRate": 1
						},
						"295446230": {
							"sampleRate": 1
						},
						"295446251": {
							"sampleRate": 1
						},
						"295446586": {
							"sampleRate": 1
						},
						"295447532": {
							"sampleRate": 1
						},
						"295447763": {
							"sampleRate": 1
						},
						"295449023": {
							"sampleRate": 1
						},
						"295449229": {
							"sampleRate": 1
						},
						"295449938": {
							"sampleRate": 1
						},
						"295450853": {
							"sampleRate": 1
						},
						"295450962": {
							"sampleRate": 1
						},
						"295451974": {
							"sampleRate": 1
						},
						"295451977": {
							"sampleRate": 1
						},
						"316804194": {
							"sampleRate": 10
						},
						"316804412": {
							"sampleRate": 10
						},
						"316805991": {
							"sampleRate": 10
						},
						"316806070": {
							"sampleRate": 10
						},
						"316806359": {
							"sampleRate": 10
						},
						"316806850": {
							"sampleRate": 10
						},
						"316810886": {
							"sampleRate": 10
						},
						"316812351": {
							"sampleRate": 10
						},
						"316812736": {
							"sampleRate": 10
						},
						"316814957": {
							"sampleRate": 10
						},
						"316816142": {
							"sampleRate": 10
						},
						"316816299": {
							"sampleRate": 10
						},
						"320809182": {
							"sampleRate": 1
						},
						"341835776": {
							"sampleRate": 1
						},
						"341835777": {
							"sampleRate": 1
						},
						"341848280": {
							"sampleRate": 1
						},
						"351537509": {
							"sampleRate": 1
						},
						"351539528": {
							"sampleRate": 1
						},
						"351539711": {
							"sampleRate": 1
						},
						"351539882": {
							"sampleRate": 1
						},
						"351540413": {
							"sampleRate": 1
						},
						"351541595": {
							"sampleRate": 1
						},
						"351542287": {
							"sampleRate": 1
						},
						"351543111": {
							"sampleRate": 1
						},
						"351544664": {
							"sampleRate": 1
						},
						"351548245": {
							"sampleRate": 1
						},
						"351548391": {
							"sampleRate": 1
						},
						"359138377": {
							"sampleRate": 10000
						},
						"359143250": {
							"sampleRate": 10000
						},
						"359149373": {
							"sampleRate": 10000
						},
						"368647392": {
							"sampleRate": 1
						},
						"377357808": {
							"sampleRate": 1
						},
						"377358784": {
							"sampleRate": 1000
						},
						"377359040": {
							"sampleRate": 1
						},
						"377359367": {
							"sampleRate": 1
						},
						"377359743": {
							"sampleRate": 1
						},
						"377360139": {
							"sampleRate": 1000
						},
						"377360510": {
							"sampleRate": 1
						},
						"377361415": {
							"sampleRate": 1
						},
						"377362087": {
							"sampleRate": 5
						},
						"377362266": {
							"sampleRate": 1
						},
						"377363484": {
							"sampleRate": 1
						},
						"377364678": {
							"sampleRate": 1
						},
						"377364955": {
							"sampleRate": 1
						},
						"377364984": {
							"sampleRate": 1
						},
						"377367558": {
							"sampleRate": 1
						},
						"377367763": {
							"sampleRate": 5
						},
						"377369626": {
							"sampleRate": 1
						},
						"377370025": {
							"sampleRate": 1
						},
						"377370203": {
							"sampleRate": 1
						},
						"377370433": {
							"sampleRate": 1
						},
						"377371065": {
							"sampleRate": 1
						},
						"377371646": {
							"sampleRate": 1
						},
						"382468096": {
							"sampleRate": 1
						},
						"382468097": {
							"sampleRate": 1
						},
						"382468098": {
							"sampleRate": 1
						},
						"382468099": {
							"sampleRate": 1
						},
						"382482261": {
							"sampleRate": 1
						},
						"398591833": {
							"sampleRate": 1
						},
						"398592311": {
							"sampleRate": 1
						},
						"398592899": {
							"sampleRate": 1
						},
						"398594779": {
							"sampleRate": 1
						},
						"398601326": {
							"sampleRate": 1
						},
						"398604674": {
							"sampleRate": 1
						},
						"398605840": {
							"sampleRate": 1
						},
						"403271918": {
							"sampleRate": 1
						},
						"432676234": {
							"sampleRate": 1
						},
						"432679263": {
							"sampleRate": 1
						},
						"432683819": {
							"sampleRate": 1
						},
						"459277372": {
							"sampleRate": 10000
						},
						"459280844": {
							"sampleRate": 10000
						},
						"459283386": {
							"sampleRate": 10000
						},
						"459283488": {
							"sampleRate": 10000
						},
						"459285749": {
							"sampleRate": 10000
						},
						"459292159": {
							"sampleRate": 10000
						},
						"459292291": {
							"sampleRate": 10000
						},
						"460468818": {
							"sampleRate": 1
						},
						"463013863": {
							"sampleRate": 10
						},
						"463015185": {
							"sampleRate": 10
						},
						"463015362": {
							"sampleRate": 1
						},
						"463015568": {
							"sampleRate": 1
						},
						"463015875": {
							"sampleRate": 10
						},
						"463016139": {
							"sampleRate": 1
						},
						"463016713": {
							"sampleRate": 10
						},
						"463016767": {
							"sampleRate": 1
						},
						"463018037": {
							"sampleRate": 1
						},
						"463018233": {
							"sampleRate": 10
						},
						"463018876": {
							"sampleRate": 1
						},
						"463018912": {
							"sampleRate": 10
						},
						"463018943": {
							"sampleRate": 1
						},
						"463019974": {
							"sampleRate": 10
						},
						"463020161": {
							"sampleRate": 10
						},
						"463020176": {
							"sampleRate": 1
						},
						"463020766": {
							"sampleRate": 1
						},
						"463021570": {
							"sampleRate": 10
						},
						"463021813": {
							"sampleRate": 1
						},
						"463022130": {
							"sampleRate": 10
						},
						"463022146": {
							"sampleRate": 10
						},
						"463022516": {
							"sampleRate": 10
						},
						"463022924": {
							"sampleRate": 1
						},
						"463023032": {
							"sampleRate": 10
						},
						"463023725": {
							"sampleRate": 1
						},
						"463024020": {
							"sampleRate": 1
						},
						"463024072": {
							"sampleRate": 10
						},
						"463024364": {
							"sampleRate": 1
						},
						"463024522": {
							"sampleRate": 10
						},
						"463024556": {
							"sampleRate": 1
						},
						"463025126": {
							"sampleRate": 1
						},
						"463025159": {
							"sampleRate": 10
						},
						"463025650": {
							"sampleRate": 1
						},
						"463026246": {
							"sampleRate": 10
						},
						"463027530": {
							"sampleRate": 10
						},
						"520225911": {
							"sampleRate": 1
						},
						"520226562": {
							"sampleRate": 1
						},
						"520226803": {
							"sampleRate": 1
						},
						"520226859": {
							"sampleRate": 1
						},
						"520227779": {
							"sampleRate": 1
						},
						"520231860": {
							"sampleRate": 1
						},
						"520231903": {
							"sampleRate": 1
						},
						"520233760": {
							"sampleRate": 1
						},
						"520234221": {
							"sampleRate": 1
						},
						"520234245": {
							"sampleRate": 1
						},
						"520234918": {
							"sampleRate": 1
						},
						"520235197": {
							"sampleRate": 1
						},
						"520239363": {
							"sampleRate": 1
						},
						"531301737": {
							"sampleRate": 10000
						},
						"531312344": {
							"sampleRate": 10000
						},
						"532165955": {
							"sampleRate": 1
						},
						"532167327": {
							"sampleRate": 1
						},
						"532883550": {
							"sampleRate": 1
						},
						"532888709": {
							"sampleRate": 1
						},
						"538512187": {
							"sampleRate": 1
						},
						"538522688": {
							"sampleRate": 1
						},
						"538523041": {
							"sampleRate": 1
						},
						"565709499": {
							"sampleRate": 1
						},
						"565710427": {
							"sampleRate": 100
						},
						"565717739": {
							"sampleRate": 1
						},
						"588713587": {
							"sampleRate": 1
						},
						"592582133": {
							"sampleRate": 10000
						},
						"593303128": {
							"sampleRate": 100
						},
						"593303848": {
							"sampleRate": 100
						},
						"597497308": {
							"sampleRate": 10000
						},
						"597501298": {
							"sampleRate": 10000
						},
						"603855120": {
							"sampleRate": 100
						},
						"612961719": {
							"sampleRate": 1
						},
						"612970753": {
							"sampleRate": 1
						},
						"612973892": {
							"sampleRate": 1
						},
						"641272127": {
							"sampleRate": 10000
						},
						"641272881": {
							"sampleRate": 10000
						},
						"658310259": {
							"sampleRate": 1
						},
						"658311000": {
							"sampleRate": 1
						},
						"658311653": {
							"sampleRate": 1
						},
						"658312030": {
							"sampleRate": 1
						},
						"658312503": {
							"sampleRate": 1
						},
						"658313937": {
							"sampleRate": 1
						},
						"658314754": {
							"sampleRate": 1
						},
						"658319560": {
							"sampleRate": 1
						},
						"658320532": {
							"sampleRate": 1
						},
						"658323570": {
							"sampleRate": 1
						},
						"658325194": {
							"sampleRate": 1
						},
						"663618882": {
							"sampleRate": 1
						},
						"663621158": {
							"sampleRate": 1
						},
						"663621340": {
							"sampleRate": 1
						},
						"663621548": {
							"sampleRate": 1
						},
						"663622595": {
							"sampleRate": 1
						},
						"663622603": {
							"sampleRate": 1
						},
						"663622613": {
							"sampleRate": 1
						},
						"663622990": {
							"sampleRate": 1
						},
						"663624058": {
							"sampleRate": 1
						},
						"663625914": {
							"sampleRate": 1
						},
						"663626399": {
							"sampleRate": 1
						},
						"663627363": {
							"sampleRate": 1
						},
						"663627729": {
							"sampleRate": 1
						},
						"663627771": {
							"sampleRate": 1
						},
						"663628202": {
							"sampleRate": 1
						},
						"663629149": {
							"sampleRate": 1
						},
						"663629736": {
							"sampleRate": 1
						},
						"663630260": {
							"sampleRate": 1
						},
						"663631213": {
							"sampleRate": 1
						},
						"663631390": {
							"sampleRate": 1
						},
						"663631507": {
							"sampleRate": 1
						},
						"663631670": {
							"sampleRate": 1
						},
						"663632060": {
							"sampleRate": 1
						},
						"663632194": {
							"sampleRate": 1
						},
						"667166687": {
							"sampleRate": 10000
						},
						"688919680": {
							"sampleRate": 10000
						},
						"688924705": {
							"sampleRate": 10000
						},
						"688926599": {
							"sampleRate": 1
						},
						"688930365": {
							"sampleRate": 100
						},
						"691799027": {
							"sampleRate": 10000
						},
						"691809443": {
							"sampleRate": 10000
						},
						"696780884": {
							"sampleRate": 1
						},
						"696782251": {
							"sampleRate": 1
						},
						"696782870": {
							"sampleRate": 1
						},
						"716966485": {
							"sampleRate": 1
						},
						"716966647": {
							"sampleRate": 1
						},
						"716970587": {
							"sampleRate": 1
						},
						"716979633": {
							"sampleRate": 1
						},
						"719323137": {
							"sampleRate": 1
						},
						"719323138": {
							"sampleRate": 1
						},
						"719326647": {
							"sampleRate": 1
						},
						"719327653": {
							"sampleRate": 1
						},
						"719332537": {
							"sampleRate": 1
						},
						"719334544": {
							"sampleRate": 1
						},
						"725430792": {
							"sampleRate": 10000
						},
						"725614593": {
							"sampleRate": 1
						},
						"747445299": {
							"sampleRate": 1
						},
						"747454106": {
							"sampleRate": 1
						},
						"755959842": {
							"sampleRate": 1
						},
						"755965148": {
							"sampleRate": 1
						},
						"755968561": {
							"sampleRate": 1
						},
						"782908389": {
							"sampleRate": 1
						},
						"789446657": {
							"sampleRate": 1
						},
						"821831905": {
							"sampleRate": 1000
						},
						"821836711": {
							"sampleRate": 1000
						},
						"821836802": {
							"sampleRate": 1000
						},
						"869731149": {
							"sampleRate": 10
						},
						"869732577": {
							"sampleRate": 10
						},
						"869735402": {
							"sampleRate": 10
						},
						"869735433": {
							"sampleRate": 10
						},
						"869741371": {
							"sampleRate": 10
						},
						"869744918": {
							"sampleRate": 10
						},
						"869746656": {
							"sampleRate": 10
						},
						"876881256": {
							"sampleRate": 1
						},
						"876885126": {
							"sampleRate": 1
						},
						"876885178": {
							"sampleRate": 1
						},
						"876885490": {
							"sampleRate": 1
						},
						"876885997": {
							"sampleRate": 1
						},
						"876887495": {
							"sampleRate": 1
						},
						"891686230": {
							"sampleRate": 10000
						},
						"892211987": {
							"sampleRate": 10000
						},
						"892215753": {
							"sampleRate": 10000
						},
						"892216533": {
							"sampleRate": 10000
						},
						"896140808": {
							"sampleRate": 200
						},
						"896147113": {
							"sampleRate": 10000
						},
						"896148353": {
							"sampleRate": 50000
						},
						"896152749": {
							"sampleRate": 10000
						},
						"899355574": {
							"sampleRate": 10
						},
						"901855609": {
							"sampleRate": 1
						},
						"916591346": {
							"sampleRate": 10000
						},
						"916594868": {
							"sampleRate": 10000
						},
						"916596786": {
							"sampleRate": 10000
						},
						"916599023": {
							"sampleRate": 10000
						},
						"916602249": {
							"sampleRate": 10000
						},
						"919603227": {
							"sampleRate": 100
						},
						"919603854": {
							"sampleRate": 10000
						},
						"919623711": {
							"sampleRate": 10000
						},
						"941884945": {
							"sampleRate": 1
						},
						"941885000": {
							"sampleRate": 1
						},
						"941886063": {
							"sampleRate": 1
						},
						"941886335": {
							"sampleRate": 1
						},
						"941889130": {
							"sampleRate": 1
						},
						"941889802": {
							"sampleRate": 1
						},
						"941890651": {
							"sampleRate": 1
						},
						"941892412": {
							"sampleRate": 1
						},
						"941893166": {
							"sampleRate": 1
						},
						"941896080": {
							"sampleRate": 1
						},
						"941896715": {
							"sampleRate": 1
						},
						"941896722": {
							"sampleRate": 1
						},
						"941899484": {
							"sampleRate": 1
						},
						"949157888": {
							"sampleRate": 100
						},
						"979310688": {
							"sampleRate": 1
						},
						"979316809": {
							"sampleRate": 1
						},
						"981407973": {
							"sampleRate": 1
						},
						"981414956": {
							"sampleRate": 1
						},
						"981415915": {
							"sampleRate": 1
						},
						"1007559649": {
							"sampleRate": 1000
						},
						"1505636832": {
							"sampleRate": 1
						},
						"1823672625": {
							"sampleRate": 10000
						},
						"1823673606": {
							"sampleRate": 10000
						},
						"1823673927": {
							"sampleRate": 10000
						},
						"1823686608": {
							"sampleRate": 10000
						},
						"1823690287": {
							"sampleRate": 10000
						},
						"1823691028": {
							"sampleRate": 10000
						}
					},
					"killswitch": false
				}, 3504],
				["ImmediateImplementationExperiments", [], {
					"prefer_message_channel": true
				}, 3419],
				["WebDevicePerfClassData", [], {
					"deviceLevel": "high",
					"yearClass": null
				}, 3665],
				["GQLSHeartbeatConfig", [], {
					"heartbeat_interval": 5000
				}, 3674],
				["DTSGInitData", [], {
					"token": "AQEtBYcEdg__:AQFyCyGGuC07",
					"async_get_token": "AQzoZD-dGX1HXrgROW97lIb6uB-GYjBxgmmoMIlyPKxFdA:AQxTgTk0KHiYeSgyLIGgMPs2Zk-LIUS26AVg0IIUuScc1g"
				}, 3515],
				["FBDomainsSVConfig", [], {
					"domains": {
						"__map": [
							["www.facebook.com", 1],
							["tfbnw.net", 1],
							["m.beta.facebook.com", 1],
							["touch.beta.facebook.com", 1],
							["www.dev.facebook.com", 1],
							["fb.me", 1],
							["s.fb.com", 1],
							["m.fbjs.facebook.com", 1],
							["facebook.com.es", 1],
							["www.fbjs.facebook.com", 1],
							["m.facebook.com", 1],
							["facebook.fr", 1],
							["fbsbx.com", 1],
							["attachment.fbsbx.com", 1],
							["lookaside.fbsbx.com", 1],
							["web.facebook.com", 1],
							["fb.com", 1],
							["messenger.com", 1]
						]
					}
				}, 3828],
				["ClickIDDomainBlacklistSVConfig", [], {
					"domains": ["craigslist", "tfbnw.net", "flashtalking.com", "canadiantire.ca", "o2.co.uk", "archive.org", "reddit.com", "redd.it", "gmail.com", "cvk.gov.ua", "electoralsearch.in", "yahoo.com", "cve.mitre.org", "usenix.org", "ky.gov", "voteohio.gov", "oversightboard.com", "wi.gov", "pbs.twimg.com", "media.discordapp.net", "vastadeal.com", "theaustralian.com.au", "alloygator.com", "elsmannimmobilien.de", "news.com.au", "dennisbonnen.com", "stoett.com", "investorhour.com", "perspectivasur.com", "bonnegueule.fr", "firstent.org", "twitpic.com", "kollosche.com.au", "nau.edu", "arcourts.gov", "lomberg.de", "network4.hu", "balloonrace.com", "awstrack.me", "ic3.gov", "sos.wyo.gov"]
				}, 3829],
				["LiveQueryEnvironment", [], {
					"sandboxDomain": null,
					"isIntern": false,
					"enableRequestStreamLogging": false
				}, 3874],
				["UriNeedRawQuerySVConfig", [], {
					"uris": ["dms.netmng.com", "doubleclick.net", "r.msn.com", "watchit.sky.com", "graphite.instagram.com", "www.kfc.co.th", "learn.pantheon.io", "www.landmarkshops.in", "www.ncl.com", "s0.wp.com", "www.tatacliq.com", "bs.serving-sys.com", "kohls.com", "lazada.co.th", "xg4ken.com", "technopark.ru", "officedepot.com.mx", "bestbuy.com.mx", "booking.com"]
				}, 3871],
				["WebLoomConfig", [], {
					"adaptive_config": {
						"interactions": {
							"modules": {
								"455": 1,
								"467": 1,
								"744": 1
							},
							"events": {
								"29818881.comet.TVCastWebAppComet": 28.1,
								"29818881.comet.compat.messenger": 11.8,
								"29818881.comet.error": 5.6,
								"29818881.comet.friending": 2.8,
								"29818881.comet.group": 22.9,
								"29818881.comet.group.permalink": 8.7,
								"29818881.comet.home": 635.5,
								"29818881.comet.marketplace.item": 7.8,
								"29818881.comet.mediaviewer.photo": 19.3,
								"29818881.comet.page": 32.8,
								"29818881.comet.page.admin.new_inbox_design": 3.7,
								"29818881.comet.page.admin.self_view": 10.1,
								"29818881.comet.page.posts": 13.6,
								"29818881.comet.post.single": 19.7,
								"29818881.comet.profile.contextual_profile": 4.1,
								"29818881.comet.profile.timeline.list": 76.9,
								"29818881.comet.videos.tahoe": 2.4,
								"29818881.comet.watch.feed": 1.5,
								"29818881.comet.watch.injection": 6.9,
								"29818882.comet.ActivityLog.CometActivityLogMainContentRoute": 1.6,
								"29818882.comet.birthday": 3.1,
								"29818882.comet.bookmarks": 2.1,
								"29818882.comet.compat.XCometInstantGamesHubPlayController": 10,
								"29818882.comet.compat.XCometSettingsController": 8.7,
								"29818882.comet.compat.messenger": 121.4,
								"29818882.comet.event.public.about": 1.1,
								"29818882.comet.friending": 14.4,
								"29818882.comet.gaming.games": 1.3,
								"29818882.comet.gaming.video": 1.9,
								"29818882.comet.group": 57.2,
								"29818882.comet.group.about": 1.8,
								"29818882.comet.group.for_sale": 5.2,
								"29818882.comet.group.media.photos": 2.4,
								"29818882.comet.group.member_requests": 1.1,
								"29818882.comet.group.permalink": 16.8,
								"29818882.comet.groups.feed": 14.8,
								"29818882.comet.groups.pending_posts": 2.2,
								"29818882.comet.home": 448.7,
								"29818882.comet.marketplace.category": 5.9,
								"29818882.comet.marketplace.home": 21.9,
								"29818882.comet.marketplace.home.hoisted_pdp": 2.3,
								"29818882.comet.marketplace.item": 27,
								"29818882.comet.marketplace.search": 17,
								"29818882.comet.marketplace.you.selling": 1.2,
								"29818882.comet.mediaviewer.photo": 801.4,
								"29818882.comet.mediaviewer.video": 5.7,
								"29818882.comet.memories": 2.7,
								"29818882.comet.page": 39.2,
								"29818882.comet.page.admin.new_inbox_design": 3.3,
								"29818882.comet.page.admin.new_notification_design": 1.7,
								"29818882.comet.page.admin.self_view": 14.7,
								"29818882.comet.page.admin.settings": 1.9,
								"29818882.comet.page.channels": 1.2,
								"29818882.comet.page.photos": 8.8,
								"29818882.comet.page.posts": 8.3,
								"29818882.comet.page.yourpages": 4.3,
								"29818882.comet.photos.album": 2.9,
								"29818882.comet.post.single": 51.6,
								"29818882.comet.profile.collection.about": 6.3,
								"29818882.comet.profile.collection.about_contact_and_basic_info": 1.5,
								"29818882.comet.profile.collection.friends": 12.8,
								"29818882.comet.profile.collection.photos": 32.9,
								"29818882.comet.profile.collection.photos_albums": 3.9,
								"29818882.comet.profile.collection.photos_all": 14.6,
								"29818882.comet.profile.contextual_profile": 10,
								"29818882.comet.profile.media_set": 8,
								"29818882.comet.profile.timeline.list": 201.3,
								"29818882.comet.save.saveDashboard": 1.7,
								"29818882.comet.search_results.default_tab": 7.3,
								"29818882.comet.search_results.entity_scoped": 4.4,
								"29818882.comet.search_results.photos_tab": 1.4,
								"29818882.comet.search_results.top_tab": 47.6,
								"29818882.comet.sharedmediaviewer.media": 26.1,
								"29818882.comet.stories.create": 1.2,
								"29818882.comet.stories.viewer": 26.1,
								"29818882.comet.videos.tahoe": 53.3,
								"29818882.comet.watch.feed": 19.5,
								"29818882.comet.watch.injection": 7.5,
								"29818882.comet.watch.live.injection": 1.9,
								"29818882.comet.watch.playlist": 2.8,
								"29818882.comet.watch.search": 2.4,
								"30605313.comet.home": 2752.3,
								"30605314.comet.app": 30.5,
								"30605315.comet.friending": 8.7,
								"30605315.comet.profile.timeline.list": 471.1,
								"30605317.comet.page": 3.6,
								"30605322.comet.stories.viewer": 29.6,
								"30605326.comet.profile.timeline.list": 1.6,
								"30605331.comet.page.admin.photos": 4.2,
								"30605331.comet.page.photos": 51.6,
								"30605332.comet.group": 201.6,
								"30605332.comet.group.for_sale": 34.9,
								"30605332.comet.group.jobs": 2.9,
								"30605333.comet.page.admin.self_view": 4.2,
								"30605340.comet.group": 9.8,
								"30605343.comet.marketplace.category": 14.2,
								"30605343.comet.marketplace.search": 44.3,
								"30605354.comet.app": 711.2,
								"30605360.comet.profile.timeline.list": 8.1,
								"30605361.comet.ActivityLog.CometActivityLogMainContentRoute": 1.1,
								"30605361.comet.app": 44.6,
								"30605361.comet.composer.feed": 8.5,
								"30605361.comet.composer.profile": 8.3,
								"30605361.comet.composer.shareFeedToFeed": 5.1,
								"30605361.comet.composer.shareMemory": 1.2,
								"30605361.comet.emojipicker": 5.8,
								"30605361.comet.feed.story.menu": 50.3,
								"30605361.comet.group": 16.4,
								"30605361.comet.home": 26.6,
								"30605361.comet.jewel.messenger": 340.1,
								"30605361.comet.jewel.notification": 358.8,
								"30605361.comet.jewel.settings": 91.8,
								"30605361.comet.marketplace.item": 1.8,
								"30605361.comet.marketplace.you.selling": 1.4,
								"30605361.comet.mediaviewer.photo": 7.5,
								"30605361.comet.page": 2.7,
								"30605361.comet.page.admin.self_view": 13.3,
								"30605361.comet.popover": 218.9,
								"30605361.comet.post.single": 3.8,
								"30605361.comet.profile.collection.friends": 4.9,
								"30605361.comet.profile.timeline.list": 27.1,
								"30605361.comet.search_scoped.group": 1.7,
								"30605361.comet.ufi.share_menu": 2.2,
								"30605361.comet.ufi.share_menu_redesign_3D": 49.6,
								"30605366.comet.profile.collection.about": 39.3,
								"30605366.comet.profile.collection.about_contact_and_basic_info": 1.4,
								"30605366.comet.profile.collection.friends": 49.2,
								"30605366.comet.profile.collection.friends_mutual": 4.6,
								"30605366.comet.profile.collection.friends_recent": 2.7,
								"30605366.comet.profile.collection.photos": 101.1,
								"30605366.comet.profile.collection.photos_albums": 6,
								"30605366.comet.profile.collection.photos_all": 5.7,
								"30605366.comet.profile.collection.videos": 5.2,
								"30605374.comet.home": 4.2,
								"30605374.comet.mediaviewer.photo": 3.2,
								"30605374.comet.post.single": 1.9,
								"30605374.comet.profile.timeline.list": 5.1,
								"30605376.comet.profile.collection.archive": 1.1,
								"30605376.comet.profile.collection.friends": 71.1,
								"30605376.comet.profile.collection.friends_all": 3.7,
								"30605376.comet.profile.collection.photos": 97.9,
								"30605376.comet.profile.collection.photos_albums": 3.2,
								"30605376.comet.profile.collection.photos_all": 65.3,
								"30605376.comet.profile.collection.photos_of": 1.5,
								"30605378.comet.friending": 8.6,
								"30605378.comet.profile.timeline.list": 224.1,
								"30605380.comet.app": 232.7,
								"30605380.comet.home": 51.9,
								"30605380.comet.marketplace.item": 1.3,
								"30605380.comet.page": 15,
								"30605380.comet.profile.timeline.list": 9.2,
								"30605384.comet.app": 953.2,
								"30605391.comet.page.channels": 4.3,
								"30605391.comet.watch.playlist": 4.3,
								"30605393.comet.ufi.load_more_comments": 56,
								"30615365.comet.profile.timeline.list": 7.9,
								"30615438.comet.home": 1.1,
								"30618398.comet.home": 10.1
							}
						},
						"qpl": {
							"modules": {},
							"events": {}
						},
						"modules": null,
						"events": null
					}
				}, 4171],
				["InitialCookieConsent", [], {
					"deferCookies": false,
					"initialConsent": {
						"__set": [1, 2]
					},
					"noCookies": false,
					"shouldShowCookieBanner": false
				}, 4328],
				["TrustedTypesConfig", [], {
					"useTrustedTypes": false,
					"reportOnly": false
				}, 4548],
				["CometRelayConfig", [], {
					"gc_release_buffer_size": 50
				}, 4685],
				["TimeSpentWWWCometConfig", [], {
					"CONFIG": {
						"0_delay": 0,
						"0_timeout": 8,
						"delay": 1000,
						"timeout": 64
					}
				}, 4748],
				["CometMaxEnqueuedToastsSitevarConfig", [], {
					"max": 2
				}, 4763],
				["CometAltpayJsSdkIframeAllowedDomains", [], {
					"allowed_domains": ["https:\/\/live.adyen.com", "https:\/\/integration-facebook.payu.in", "https:\/\/facebook.payulatam.com", "https:\/\/secure.payu.com", "https:\/\/facebook.dlocal.com", "https:\/\/buy2.boku.com", "https:\/\/altpay-pe-test.herokuapp.com"]
				}, 4920],
				["QuickMarkersConfig", [], {
					"pageLoadEventId": "6892302315725016032",
					"pageLoadScriptPath": "XCometProfileVanityController",
					"sampleWeight": null
				}, 4953],
				["MqttWebDeviceID", [], {
					"clientID": "636f867e-0589-47e3-b468-404799ef7634"
				}, 5003],
				["LiveQueryWebRelayKillList", [], {
					"liveQueryWebRelayKillList": ["test_example_config_id_to_be_killed"]
				}, 5050],
				["BootloaderEndpointConfig", [], {
					"batchOnlyAfterFirstSkipRef": null,
					"debugNoBatching": false,
					"endpointURI": "https:\/\/www.facebook.com\/ajax\/bootloader-endpoint\/"
				}, 5094],
				["FalcoFabricJavaScriptEvents", [], {
					"map": {
						"ab_coupon_tool_event": {
							"r": 10000
						},
						"account_recovery_code_entry_illustration_click": {
							"r": 1,
							"s": 1
						},
						"accountquality_aqaction_augl": {
							"r": 1
						},
						"accountquality_aqlink_augl": {
							"r": 1
						},
						"accountquality_aqpagerender_augl": {
							"r": 1
						},
						"accountquality_aqrenderguidanceitem_augl": {
							"r": 1
						},
						"accountquality_aqviewpanetab_augl": {
							"r": 1
						},
						"accountquality_aqviewpanetabended_augl": {
							"r": 1
						},
						"accountquality_coreappexperience_augl": {
							"r": 1
						},
						"accountquality_coreappexperienceended_augl": {
							"r": 1
						},
						"accountquality_coreinteractionbutton_augl": {
							"r": 1
						},
						"accountquality_coreinteractioncheckbox_augl": {
							"r": 1
						},
						"accountquality_coreinteractioncollapse_augl": {
							"r": 1
						},
						"accountquality_coreinteractiondropdown_augl": {
							"r": 1
						},
						"accountquality_coreinteractiondropdownended_augl": {
							"r": 1
						},
						"accountquality_coreinteractionexpand_augl": {
							"r": 1
						},
						"accountquality_coreinteractionmouseover_augl": {
							"r": 1
						},
						"accountquality_coreinteractionmouseoverended_augl": {
							"r": 1
						},
						"accountquality_coreinteractionpanetab_augl": {
							"r": 1
						},
						"accountquality_coreuserinteraction_augl": {
							"r": 1
						},
						"accountquality_coreuserinteractionended_augl": {
							"r": 1
						},
						"activity_log_experiment_data": {
							"r": 100
						},
						"ad_limits_unit": {
							"r": 1
						},
						"ad_metrics_dhl_front_end": {
							"r": 1
						},
						"ad_portable_preview": {
							"r": 1
						},
						"ad_preferences_hub": {
							"r": 1
						},
						"ad_preferences_hub_survey": {
							"r": 1
						},
						"ad_proposal_copy_draft": {
							"r": 1
						},
						"ad_proposal_exception": {
							"r": 1
						},
						"ad_proposal_impressions": {
							"r": 1
						},
						"ad_validate_image": {
							"r": 1
						},
						"add_collaborative_post_initial_contribution_caption": {
							"r": 1,
							"s": 1
						},
						"add_initial_contribution_media": {
							"r": 1,
							"s": 1
						},
						"admin_edit_session": {
							"r": 1
						},
						"admin_saw_hcp_ed_interstitial": {
							"r": 1
						},
						"ads_ad_builder": {
							"r": 100,
							"s": 1
						},
						"ads_ad_limits_page_tool": {
							"r": 1
						},
						"ads_agp_experiment_logging": {
							"r": 1
						},
						"ads_campaign_default_unified_attribution_window": {
							"r": 1
						},
						"ads_campaign_planning_estimates_data": {
							"r": 1
						},
						"ads_campaign_unified_attribution_window_click": {
							"r": 1
						},
						"ads_growth_coupon": {
							"r": 1,
							"s": 1
						},
						"ads_guidance_feedback_activity_logging": {
							"r": 1,
							"s": 1
						},
						"ads_lwi_intelligence": {
							"r": 1
						},
						"ads_manager_ad_appeal_send_failure": {
							"r": 1
						},
						"ads_manager_ad_appeal_send_success": {
							"r": 1
						},
						"ads_manager_appeal_send_pressed": {
							"r": 1
						},
						"ads_manager_confirm_appeal_dialog_cancel": {
							"r": 1
						},
						"ads_midflight_lever_limited_recommendation": {
							"r": 1,
							"s": 1
						},
						"ads_midflight_recommendation": {
							"r": 1,
							"s": 1
						},
						"adsadbuilder_amadbuilderapirequestended_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderapirequeststarted_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuildercomponentrenderended_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuildercomponentrenderstarted_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuildercreateadfrommockup_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuildercreationpageopened_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderdraftdeleted_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderduplicatemockupended_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderduplicatemockupstarted_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderinviteflow_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuildermockupdeletion_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuildermockupreadystatuschanged_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuildernavigatedtoanotherpage_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderopened_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderoptinstarted_augl": {
							"r": 1
						},
						"adsadbuilder_amadbuilderoptoutstarted_augl": {
							"r": 1
						},
						"adsadbuilder_coreappexperience_augl": {
							"r": 1
						},
						"adsadbuilder_coreuserinteraction_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewassetupdated_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewerror_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewerrorloaded_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewerrorresolveractivated_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewfinish_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewinitialrender_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewpageletfinish_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewpageletstart_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewresponsecancel_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewresponseerror_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewresponsesuccess_augl": {
							"r": 1
						},
						"adsadpreview_amadpreviewstart_augl": {
							"r": 1
						},
						"adsadpreview_coreappexperience_augl": {
							"r": 1
						},
						"adsadpreview_coreappexperienceended_augl": {
							"r": 1
						},
						"adsadpreview_coreuserinteraction_augl": {
							"r": 1
						},
						"adsadpreview_coreuserinteractionended_augl": {
							"r": 1
						},
						"adsamincubator_coreappexperience_augl": {
							"r": 1
						},
						"adsamincubator_coreappexperienceended_augl": {
							"r": 1
						},
						"adsamincubator_coreuserinteraction_augl": {
							"r": 1
						},
						"adsamincubator_coreuserinteractionended_augl": {
							"r": 1
						},
						"adscometflytrap_afcometselectadscategory_augl": {
							"r": 1
						},
						"adscometflytrap_afcometselectproduct_augl": {
							"r": 1
						},
						"adscometflytrap_afcometsendfeedback_augl": {
							"r": 1
						},
						"adscometflytrap_coreappexperience_augl": {
							"r": 1
						},
						"adscometflytrap_coreappexperienceended_augl": {
							"r": 1
						},
						"adscometflytrap_coreinteractionbutton_augl": {
							"r": 1
						},
						"adscometflytrap_coreinteractiontextinput_augl": {
							"r": 1
						},
						"adscometflytrap_coreinteractiontextinputended_augl": {
							"r": 1
						},
						"adscometflytrap_coreuserinteraction_augl": {
							"r": 1
						},
						"adscometflytrap_coreuserinteractionended_augl": {
							"r": 1
						},
						"adsexperiments_adexinteractionlevelbutton_augl": {
							"r": 1
						},
						"adsexperiments_coreappexperience_augl": {
							"r": 1
						},
						"adsexperiments_coreinteractionmouseover_augl": {
							"r": 1
						},
						"adsexperiments_coreinteractionmouseoverended_augl": {
							"r": 1
						},
						"adsexperiments_coreinteractionpanetab_augl": {
							"r": 1
						},
						"adsexperiments_coreuserinteraction_augl": {
							"r": 1
						},
						"adsexperiments_coreviewcomponent_augl": {
							"r": 1
						},
						"adsexperiments_coreviewcomponentended_augl": {
							"r": 1
						},
						"adsexperiments_coreviewcomponentloading_augl": {
							"r": 1
						},
						"adsexperiments_coreviewcomponentloadingended_augl": {
							"r": 1
						},
						"adsflytrap_afsendfeedback_augl": {
							"r": 1
						},
						"adsflytrap_coreappexperience_augl": {
							"r": 1
						},
						"adsflytrap_coreappexperienceended_augl": {
							"r": 1
						},
						"adsflytrap_coreinteractionbutton_augl": {
							"r": 1
						},
						"adsflytrap_coreinteractiondropdown_augl": {
							"r": 1
						},
						"adsflytrap_coreinteractiondropdownended_augl": {
							"r": 1
						},
						"adsflytrap_coreinteractiontextinput_augl": {
							"r": 1
						},
						"adsflytrap_coreinteractiontextinputended_augl": {
							"r": 1
						},
						"adsflytrap_coreuserinteraction_augl": {
							"r": 1
						},
						"adsflytrap_coreuserinteractionended_augl": {
							"r": 1
						},
						"adsflytrap_coreviewmodal_augl": {
							"r": 1
						},
						"adsflytrap_coreviewmodalended_augl": {
							"r": 1
						},
						"adsmanager_amaccountoverview_augl": {
							"r": 1
						},
						"adsmanager_amaccountoverviewended_augl": {
							"r": 1
						},
						"adsmanager_amadbuilderimportflowmockupconfirmed_augl": {
							"r": 1
						},
						"adsmanager_amadbuilderimportflowmockupselected_augl": {
							"r": 1
						},
						"adsmanager_amadbuilderimportflowstarted_augl": {
							"r": 1
						},
						"adsmanager_amadobjectcreateflow_augl": {
							"r": 1
						},
						"adsmanager_amadobjectcreateflowended_augl": {
							"r": 1
						},
						"adsmanager_amadobjectduplicateflow_augl": {
							"r": 1
						},
						"adsmanager_amadobjectduplicateflowended_augl": {
							"r": 1
						},
						"adsmanager_amadobjecteditflow_augl": {
							"r": 1
						},
						"adsmanager_amadobjecteditflowended_augl": {
							"r": 1
						},
						"adsmanager_amadobjectexportflow_augl": {
							"r": 1
						},
						"adsmanager_amadobjectexportflowended_augl": {
							"r": 1
						},
						"adsmanager_amadobjectimportflow_augl": {
							"r": 1
						},
						"adsmanager_amadobjectimportflowended_augl": {
							"r": 1
						},
						"adsmanager_amadobjectimportfrommockup_augl": {
							"r": 1
						},
						"adsmanager_amadobjectreviewandpublishflow_augl": {
							"r": 1
						},
						"adsmanager_amadobjectreviewandpublishflowended_augl": {
							"r": 1
						},
						"adsmanager_amadobjectsetbuyingtype_augl": {
							"r": 1
						},
						"adsmanager_amadobjectsetobjective_augl": {
							"r": 1
						},
						"adsmanager_amadscopyerror_augl": {
							"r": 1
						},
						"adsmanager_amapierror_augl": {
							"r": 1
						},
						"adsmanager_amautonamingclicktosave_augl": {
							"r": 1
						},
						"adsmanager_ambackgrounderaserdialogclose_augl": {
							"r": 1
						},
						"adsmanager_amconvergencecontextualmenuclick_augl": {
							"r": 1
						},
						"adsmanager_amconvergenceexternalcreationdialogclick_augl": {
							"r": 1
						},
						"adsmanager_amconvergencefocusmode_augl": {
							"r": 1
						},
						"adsmanager_amconvergencefocusmodeended_augl": {
							"r": 1
						},
						"adsmanager_amconvergencefocusmodetoggleclick_augl": {
							"r": 1
						},
						"adsmanager_amconvergencepublishflow_augl": {
							"r": 1
						},
						"adsmanager_amconvergencepublishflowended_augl": {
							"r": 1
						},
						"adsmanager_amconvergencepublishpreviewdialogselection_augl": {
							"r": 1
						},
						"adsmanager_amcrash_augl": {
							"r": 1
						},
						"adsmanager_amcreateflow_augl": {
							"r": 1
						},
						"adsmanager_amcreateflowended_augl": {
							"r": 1
						},
						"adsmanager_amcreateflowfocusframework_augl": {
							"r": 1
						},
						"adsmanager_amcreateflowfocusframeworkclicktoedit_augl": {
							"r": 1
						},
						"adsmanager_amcreateflowfocusframeworkended_augl": {
							"r": 1
						},
						"adsmanager_amcreateflowmutableoption_augl": {
							"r": 1
						},
						"adsmanager_amcreateflowpage_augl": {
							"r": 1
						},
						"adsmanager_amcreateflowpageended_augl": {
							"r": 1
						},
						"adsmanager_amcriticalexception_augl": {
							"r": 1
						},
						"adsmanager_amdraftfragmentloaderror_augl": {
							"r": 1
						},
						"adsmanager_amdraftloaderror_augl": {
							"r": 1
						},
						"adsmanager_ameditflow_augl": {
							"r": 1
						},
						"adsmanager_ameditflowended_augl": {
							"r": 1
						},
						"adsmanager_amemojiclicktoedit_augl": {
							"r": 1
						},
						"adsmanager_amemojiselectedemoji_augl": {
							"r": 1
						},
						"adsmanager_amexception_augl": {
							"r": 1
						},
						"adsmanager_amfatalerror_augl": {
							"r": 1
						},
						"adsmanager_amhomeview_augl": {
							"r": 1
						},
						"adsmanager_amhomeviewended_augl": {
							"r": 1
						},
						"adsmanager_amimporterror_augl": {
							"r": 1
						},
						"adsmanager_aminit_augl": {
							"r": 1
						},
						"adsmanager_aminstantcheckoutdropdown_augl": {
							"r": 1
						},
						"adsmanager_aminstantcheckoutsection_augl": {
							"r": 1
						},
						"adsmanager_aminstantcheckoutsectionended_augl": {
							"r": 1
						},
						"adsmanager_amnamingtypeaheadselect_augl": {
							"r": 1
						},
						"adsmanager_ampoliticaladbuying_augl": {
							"r": 1
						},
						"adsmanager_ampublisherror_augl": {
							"r": 1
						},
						"adsmanager_amsmartbackgrounddialog_augl": {
							"r": 1
						},
						"adsmanager_amsmartbackgrounddialogclosed_augl": {
							"r": 1
						},
						"adsmanager_amsmartbackgrounderror_augl": {
							"r": 1
						},
						"adsmanager_amsmartbackgroundimagesave_augl": {
							"r": 1
						},
						"adsmanager_amtableadobject_augl": {
							"r": 1
						},
						"adsmanager_amtableadobjectended_augl": {
							"r": 1
						},
						"adsmanager_amurltypeahead_augl": {
							"r": 1
						},
						"adsmanager_amvalidationerror_augl": {
							"r": 1
						},
						"adsmanager_coreappexperience_augl": {
							"r": 1
						},
						"adsmanager_coreappexperienceended_augl": {
							"r": 1
						},
						"adsmanager_coreinteractiontoggle_augl": {
							"r": 1
						},
						"adsmanager_coreuserinteraction_augl": {
							"r": 1
						},
						"adsmanager_coreuserinteractionended_augl": {
							"r": 1
						},
						"adstextoptimization_amadstextsuggestionsapplysuggestion_augl": {
							"r": 1
						},
						"adstextoptimization_amadstextsuggestionshidesuggestion_augl": {
							"r": 1
						},
						"adstextoptimization_amadstextsuggestionsimpressionend_augl": {
							"r": 1
						},
						"adstextoptimization_amadstextsuggestionsimpressionstart_augl": {
							"r": 1
						},
						"adstextoptimization_amadstextsuggestionspopoverclose_augl": {
							"r": 1
						},
						"adstextoptimization_amadstextsuggestionspopoveropen_augl": {
							"r": 1
						},
						"adstextoptimization_coreappexperience_augl": {
							"r": 1
						},
						"adstextoptimization_coreappexperienceended_augl": {
							"r": 1
						},
						"adstextoptimization_coreinteractionbutton_augl": {
							"r": 1
						},
						"adstextoptimization_coreinteractionmouseover_augl": {
							"r": 1
						},
						"adstextoptimization_coreinteractionmouseoverended_augl": {
							"r": 1
						},
						"adstextoptimization_coreuserinteraction_augl": {
							"r": 1
						},
						"adstextoptimization_coreuserinteractionended_augl": {
							"r": 1
						},
						"adswaittimespinners_awtspinners_augl": {
							"r": 1
						},
						"adswaittimespinners_coreappexperience_augl": {
							"r": 1
						},
						"adswaittimespinners_coreappexperienceended_augl": {
							"r": 1
						},
						"adswaittimespinners_coreuserinteraction_augl": {
							"r": 1
						},
						"adswaittimespinners_coreuserinteractionended_augl": {
							"r": 1
						},
						"ae_optimal_sizing": {
							"r": 10000
						},
						"al_dialog_shown": {
							"r": 1
						},
						"altpay2_ui_event": {
							"r": 1
						},
						"ama_card_impression": {
							"r": 1
						},
						"ama_card_tap_ask_question": {
							"r": 1
						},
						"ama_card_vpvd": {
							"r": 10000
						},
						"ama_cards_stack_impression": {
							"r": 1
						},
						"ama_create_attachment": {
							"r": 1
						},
						"ama_end_qna_tap": {
							"r": 10000
						},
						"ama_hit_max_character_limit": {
							"r": 1
						},
						"ama_remove_attachment": {
							"r": 1
						},
						"app_rereview_use_alternative_url": {
							"r": 1
						},
						"ar_hub_creator_profile_action": {
							"r": 1,
							"s": 1
						},
						"ar_hub_creator_profile_consumption_action": {
							"r": 1,
							"s": 1
						},
						"assistant_annotation_warnings_log": {
							"r": 1,
							"s": 1
						},
						"assistant_ayi_activity": {
							"r": 1
						},
						"assistant_smart_replies_logger": {
							"r": 1
						},
						"assistantactivitylogger": {
							"r": 1
						},
						"attempt_to_send_reply": {
							"r": 1
						},
						"attribution_cta_banner_clicked": {
							"r": 1
						},
						"attribution_cta_banner_impression": {
							"r": 1
						},
						"attribution_window_deprecation_usage_banner_dismiss": {
							"r": 1,
							"s": 1
						},
						"attribution_window_deprecation_usage_banner_impression": {
							"r": 1,
							"s": 1
						},
						"attribution_window_deprecation_usage_click_banner_learn_more": {
							"r": 1,
							"s": 1
						},
						"auglexplorer_augleupdatefilter_augl": {
							"r": 1
						},
						"auglexplorer_coreappexperience_augl": {
							"r": 1
						},
						"auglexplorer_coreappexperienceended_augl": {
							"r": 1
						},
						"auglexplorer_coreuserinteraction_augl": {
							"r": 1
						},
						"auglexplorer_coreuserinteractionended_augl": {
							"r": 1
						},
						"automated_ads_auto_boost": {
							"r": 1,
							"s": 1
						},
						"b8_aloha_workrooms": {
							"r": 1,
							"s": 1
						},
						"bd_mobile_signals": {
							"r": 1
						},
						"bd_operation": {
							"r": 1,
							"s": 1
						},
						"bd_pdc_signals": {
							"r": 1,
							"s": 1
						},
						"bi_mlex_ad_history_click": {
							"r": 1
						},
						"bi_mlex_ad_history_impression": {
							"r": 1
						},
						"bi_mlex_feedback_survey_evolution_response": {
							"r": 1
						},
						"bi_pre_approval_ui_events": {
							"r": 1,
							"s": 1
						},
						"bic_engagement_event": {
							"r": 1
						},
						"bic_entry_point_events": {
							"r": 1
						},
						"billing1_workplace_event": {
							"r": 1
						},
						"billing_interface_debug": {
							"r": 1
						},
						"billing_interface_error": {
							"r": 1
						},
						"billing_interface_event": {
							"r": 1
						},
						"billing_interface_surface_debug": {
							"r": 1
						},
						"billing_interface_surface_error": {
							"r": 1
						},
						"billing_interface_surface_event": {
							"r": 1
						},
						"billing_mi_error": {
							"r": 1
						},
						"billing_mi_event": {
							"r": 1
						},
						"biz_core_diode_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_diode_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_global_scope_selector_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_local_nav_tab_item_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_local_nav_tab_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_local_scope_selector_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_log_out_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_more_tools_item_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_more_tools_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_nav_bar_hover": {
							"r": 1,
							"s": 1
						},
						"biz_core_nav_footer_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_notification_item_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_notification_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_notifications_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_null_state_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_null_state_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_optin_optout_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_optin_optout_enter_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_optin_optout_exit_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_optin_optout_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_overlay_item_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_overlay_item_enter_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_overlay_item_exit_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_overlay_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_presence_switcher_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_presence_switcher_enter_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_presence_switcher_exit_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_presence_switcher_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_presence_switcher_render_view": {
							"r": 1,
							"s": 1
						},
						"biz_core_presence_switcher_update_value": {
							"r": 1,
							"s": 1
						},
						"biz_core_tab_item_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_tab_item_enter_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_tab_item_exit_flow": {
							"r": 1,
							"s": 1
						},
						"biz_core_tab_item_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_tab_item_update": {
							"r": 1,
							"s": 1
						},
						"biz_core_tool_diode_upsell_banner_click": {
							"r": 1,
							"s": 1
						},
						"biz_core_tool_diode_upsell_banner_dismiss": {
							"r": 1,
							"s": 1
						},
						"biz_core_tool_diode_upsell_banner_impression": {
							"r": 1,
							"s": 1
						},
						"biz_core_tool_outcome": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_ads_card_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_ads_card_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_alerts_card_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_alerts_card_dismiss": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_alerts_card_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_entry_point_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_entry_point_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_guidance_card_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_guidance_card_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_header_card_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_header_card_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_home_header_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_home_header_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_insights_card_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_insights_card_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_posts_card_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_posts_card_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_updates_card_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_updates_card_impression": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_welcome_tour_click": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_welcome_tour_dismiss": {
							"r": 1,
							"s": 1
						},
						"biz_home_tab_welcome_tour_impression": {
							"r": 1,
							"s": 1
						},
						"biz_kit_settings_client": {
							"r": 1,
							"s": 1
						},
						"biz_suite_quality_loading_error_root_query_init_render": {
							"r": 1,
							"s": 1
						},
						"biz_suite_quality_loading_error_root_query_receive_request": {
							"r": 1,
							"s": 1
						},
						"biz_suite_quality_loading_error_root_query_receive_response": {
							"r": 1,
							"s": 1
						},
						"biz_suite_quality_loading_error_root_query_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"biz_suite_quality_loading_error_root_query_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"biz_suite_quality_loading_error_root_query_send_request": {
							"r": 1,
							"s": 1
						},
						"biz_suite_quality_loading_error_root_query_send_response": {
							"r": 1,
							"s": 1
						},
						"bizapp_tool_outcome": {
							"r": 1,
							"s": 1
						},
						"bizkit_activities_list_exception": {
							"r": 1000
						},
						"bizkit_activities_overlay_exception": {
							"r": 1000
						},
						"bizkit_activity_item_exception": {
							"r": 1000
						},
						"blood_donation_page_insights_click": {
							"r": 1
						},
						"blood_donation_partner_client_event": {
							"r": 1
						},
						"boosted_jobs_client_event": {
							"r": 1
						},
						"bop_ui_event": {
							"r": 1
						},
						"business_app_store_activity": {
							"r": 10000
						},
						"business_composer_biz_config_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"business_composer_biz_config_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"business_composer_biz_config_send_request": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_click": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_enter_flow": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_submit_flow": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_upload": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_upload_failure": {
							"r": 1,
							"s": 1
						},
						"business_composer_composer_upload_success": {
							"r": 1,
							"s": 1
						},
						"business_composer_media_editor_button_click": {
							"r": 1,
							"s": 1
						},
						"business_composer_media_editor_button_impression": {
							"r": 1,
							"s": 1
						},
						"business_composer_media_editor_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"business_composer_media_editor_enter_flow": {
							"r": 1,
							"s": 1
						},
						"business_composer_media_editor_submit_flow": {
							"r": 1,
							"s": 1
						},
						"business_composer_page_business_composer_switch_button_click": {
							"r": 1,
							"s": 1
						},
						"business_composer_typeahead_search_click": {
							"r": 1,
							"s": 1
						},
						"business_content_preview": {
							"r": 100
						},
						"business_inbox_appointment_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_appointment_enter_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_appointment_exit_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_appointment_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_appointment_submit_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_attachment_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_attachment_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_boost_post_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_boost_post_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_admin_assignment_action_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_admin_assignment_dialog_submit": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_delete_action_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_delete_dialog_submit": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_label_action_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_label_dialog_submit": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_mark_as_unread_action_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_move_to_folder_action_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_reply_action_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_bulk_reply_dialog_submit": {
							"r": 1,
							"s": 1
						},
						"business_inbox_comment_reaction_list_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_comment_reaction_list_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_comment_reply_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_comment_submit": {
							"r": 1,
							"s": 1
						},
						"business_inbox_contact_card_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_content_search_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_content_search_result_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_content_search_result_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_delete_comment_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_header_view_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_inbox_root_init_render": {
							"r": 1,
							"s": 1
						},
						"business_inbox_inbox_root_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_js_error_debug": {
							"r": 1,
							"s": 1
						},
						"business_inbox_label_search_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_label_search_result_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_label_search_result_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_like_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_like_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_mark_all_comments_read_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_message_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_message_composer_focus_acquired": {
							"r": 1,
							"s": 1
						},
						"business_inbox_message_composer_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_message_list_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_message_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_message_send_request": {
							"r": 1,
							"s": 1
						},
						"business_inbox_multi_admin_assignment_update": {
							"r": 1,
							"s": 1
						},
						"business_inbox_nux_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_nux_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_payment_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_payment_enter_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_payment_exit_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_payment_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_payment_submit_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_people_search_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_people_search_result_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_people_search_result_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_platform_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_post_folder_update": {
							"r": 1,
							"s": 1
						},
						"business_inbox_private_reply_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_private_reply_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_product_picker_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_product_picker_enter_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_product_picker_exit_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_product_picker_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_saved_reply_create": {
							"r": 1,
							"s": 1
						},
						"business_inbox_saved_reply_delete": {
							"r": 1,
							"s": 1
						},
						"business_inbox_saved_reply_enter_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_saved_reply_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_saved_reply_submit_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_saved_reply_update": {
							"r": 1,
							"s": 1
						},
						"business_inbox_search_cancel_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_search_focus_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_search_result_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_status_toggle_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_sticker_picker_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_sticker_picker_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_suggested_label_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_suggested_label_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_switch_folder_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_checkbox_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_checkbox_impression": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_checkbox_update_value": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_delete_header_button_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_delete_header_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_delete_header_button_submit_flow": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_folder_update": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_followup_header_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_list_render_view": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_list_update": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_mark_followup_thread_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_mark_read_unread_header_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_move_to_done_header_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_move_to_done_thread_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_move_to_main_header_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_move_to_main_thread_button_click": {
							"r": 1,
							"s": 1
						},
						"business_inbox_thread_move_to_spam_header_button_click": {
							"r": 1,
							"s": 1
						},
						"business_integrity_business_banhammer": {
							"r": 1,
							"s": 1
						},
						"business_integrity_commerce_manager_disapproval": {
							"r": 1,
							"s": 1
						},
						"business_overwatch": {
							"r": 1
						},
						"business_scoping_error": {
							"r": 1
						},
						"business_suggested_reply_action": {
							"r": 1,
							"s": 1
						},
						"business_suggested_reply_impression": {
							"r": 1,
							"s": 1
						},
						"businessmanager_bmadreviewtoolreportdownload_augl": {
							"r": 1
						},
						"businessmanager_bmadreviewtoolrequestactiondialogconfirm_augl": {
							"r": 1
						},
						"businessmanager_bmassetinfoextraaction_augl": {
							"r": 1
						},
						"businessmanager_bmassetpermissionaccordianmenuinteraction_augl": {
							"r": 1
						},
						"businessmanager_bmassetpermissiondelete_augl": {
							"r": 1
						},
						"businessmanager_bmassetpermissiondeletecancel_augl": {
							"r": 1
						},
						"businessmanager_bmassetpermissiondeleteconfirm_augl": {
							"r": 1
						},
						"businessmanager_bmassetpermissionedit_augl": {
							"r": 1
						},
						"businessmanager_bmassettabaddasset_augl": {
							"r": 1
						},
						"businessmanager_bmassettabaddpeople_augl": {
							"r": 1
						},
						"businessmanager_bmassettabassignpartner_augl": {
							"r": 1
						},
						"businessmanager_bmchangetabinteraction_augl": {
							"r": 1
						},
						"businessmanager_bmlistrowimpression_augl": {
							"r": 1
						},
						"businessmanager_bmlistviewinteraction_augl": {
							"r": 1
						},
						"businessmanager_bmlistviewtoggle_augl": {
							"r": 1
						},
						"businessmanager_bmnavigationlevel_augl": {
							"r": 1
						},
						"businessmanager_bmnavigationlevelended_augl": {
							"r": 1
						},
						"businessmanager_bmopenassetintoolaction_augl": {
							"r": 1
						},
						"businessmanager_bmpaneload_augl": {
							"r": 1
						},
						"businessmanager_bmpaneloadended_augl": {
							"r": 1
						},
						"businessmanager_bmpaneopen_augl": {
							"r": 1
						},
						"businessmanager_bmpaneopenended_augl": {
							"r": 1
						},
						"businessmanager_bmpartnercenteradsaction_augl": {
							"r": 1
						},
						"businessmanager_bmpartnercenterknowledgecentercardclick_augl": {
							"r": 1
						},
						"businessmanager_bmpartnercenterpolicyinsightsraiicolumnchartclick_augl": {
							"r": 1
						},
						"businessmanager_bmpartnercentersearchfilter_augl": {
							"r": 1
						},
						"businessmanager_bmpartnercentersortabletableheaderclick_augl": {
							"r": 1
						},
						"businessmanager_bmpartnercentertimerangefilter_augl": {
							"r": 1
						},
						"businessmanager_bmserverexception_augl": {
							"r": 1
						},
						"businessmanager_bmusertabaddasset_augl": {
							"r": 1
						},
						"businessmanager_bmvalidationerror_augl": {
							"r": 1
						},
						"businessmanager_bmvettingpageinitialload_augl": {
							"r": 1
						},
						"businessmanager_bmvettingpageinitialloadended_augl": {
							"r": 1
						},
						"businessmanager_coreappexperience_augl": {
							"r": 1
						},
						"businessmanager_coreappexperienceended_augl": {
							"r": 1
						},
						"businessmanager_coreinteractionaccordianmenu_augl": {
							"r": 1
						},
						"businessmanager_coreinteractionbutton_augl": {
							"r": 1
						},
						"businessmanager_coreinteractioncheckbox_augl": {
							"r": 1
						},
						"businessmanager_coreinteractiondropdown_augl": {
							"r": 1
						},
						"businessmanager_coreinteractiondropdownended_augl": {
							"r": 1
						},
						"businessmanager_coreinteractionradiobutton_augl": {
							"r": 1
						},
						"businessmanager_coreinteractiontextinput_augl": {
							"r": 1
						},
						"businessmanager_coreinteractiontextinputended_augl": {
							"r": 1
						},
						"businessmanager_coreinteractiontoggle_augl": {
							"r": 1
						},
						"businessmanager_coreuserinteraction_augl": {
							"r": 1
						},
						"businessmanager_coreuserinteractionended_augl": {
							"r": 1
						},
						"businessmanager_coreviewmodal_augl": {
							"r": 1
						},
						"businessmanager_coreviewmodalended_augl": {
							"r": 1
						},
						"c2c_transaction_survey": {
							"r": 1,
							"s": 1
						},
						"calendar_blacklist_defrag_suggestion": {
							"r": 1
						},
						"camera_roll_cancelled": {
							"r": 1,
							"s": 1
						},
						"camera_roll_finished": {
							"r": 1,
							"s": 1
						},
						"camera_roll_folder_in_dropdown_clicked": {
							"r": 1,
							"s": 1
						},
						"camera_roll_header_camera_clicked": {
							"r": 1,
							"s": 1
						},
						"camera_roll_header_cancel_button_clicked": {
							"r": 1,
							"s": 1
						},
						"camera_roll_header_folder_clicked": {
							"r": 1,
							"s": 1
						},
						"camera_roll_header_next_button_clicked": {
							"r": 1,
							"s": 1
						},
						"camera_roll_magnifying_glass_button_clicked": {
							"r": 1,
							"s": 1
						},
						"camera_roll_media_item_clicked": {
							"r": 1,
							"s": 1
						},
						"camera_roll_opened": {
							"r": 1,
							"s": 1
						},
						"campus_actions_core": {
							"r": 1
						},
						"cancel_exit_stripe_kyc_onboarding_screen": {
							"r": 1
						},
						"candidate_portal_give_feedback_v2": {
							"r": 1
						},
						"candidate_portal_product_logging": {
							"r": 1
						},
						"candidate_scout_input_modification": {
							"r": 1
						},
						"candidate_scout_scour": {
							"r": 1
						},
						"cases_mobile": {
							"r": 1
						},
						"cases_user_events": {
							"r": 1
						},
						"catalog_localization_template_builder_flow": {
							"r": 1,
							"s": 1
						},
						"catalog_mobile_delete_product_entrypoint_click": {
							"r": 1,
							"s": 1
						},
						"catalog_mobile_delete_product_entrypoint_impression": {
							"r": 1,
							"s": 1
						},
						"catalog_mobile_edit_product_entrypoint_click": {
							"r": 1,
							"s": 1
						},
						"catalog_mobile_edit_product_entrypoint_impression": {
							"r": 1,
							"s": 1
						},
						"category_feed_first_page_fetched": {
							"r": 1
						},
						"ccompassion_resources_mental_hub_click_unit": {
							"r": 10000
						},
						"change_beneficiary": {
							"r": 1
						},
						"change_category": {
							"r": 1
						},
						"change_charity": {
							"r": 1
						},
						"change_cover_photo": {
							"r": 1
						},
						"change_currency": {
							"r": 1
						},
						"change_description": {
							"r": 1
						},
						"change_end_date": {
							"r": 1
						},
						"change_goal_amount": {
							"r": 1
						},
						"change_title": {
							"r": 1
						},
						"chatroom_attachment_chat_button_tapped": {
							"r": 1
						},
						"chatroom_join_request_cancelled": {
							"r": 1
						},
						"chatroom_join_request_submitted": {
							"r": 1
						},
						"chatroom_story_vpv": {
							"r": 1
						},
						"chex_checkout_success": {
							"r": 1
						},
						"civic_action_log_event": {
							"r": 1
						},
						"cix_account_status_vpvd": {
							"r": 1
						},
						"cix_warning_screens": {
							"r": 1
						},
						"click_collaborative_post_card_cta": {
							"r": 1
						},
						"click_collaborative_post_sentence_fragment": {
							"r": 1,
							"s": 1
						},
						"click_done_in_collaborative_post_creation": {
							"r": 1,
							"s": 1
						},
						"click_name_change_details_entry_point": {
							"r": 1,
							"s": 1
						},
						"click_stripe_kyc_onboarding_cancel_prefill_button": {
							"r": 1
						},
						"click_stripe_kyc_onboarding_input_field": {
							"r": 1
						},
						"click_stripe_kyc_onboarding_prefill_button": {
							"r": 1
						},
						"click_submit_button_stripe_kyc_onboarding": {
							"r": 1
						},
						"click_transparency_entry_point": {
							"r": 1,
							"s": 1
						},
						"clicked_add_note_hcp_stats": {
							"r": 1
						},
						"clicked_edit_note_hcp_stats": {
							"r": 1
						},
						"client_consistency": {
							"r": 1,
							"s": 1
						},
						"clo_figg_view_visit_count": {
							"r": 1
						},
						"close_story": {
							"r": 1
						},
						"cloud_gaming_devsite_js_events": {
							"r": 1,
							"s": 1
						},
						"cloud_gaming_events": {
							"r": 1
						},
						"cloud_gaming_session_event": {
							"r": 1
						},
						"cloud_gaming_webrtc_stats": {
							"r": 1
						},
						"cm_event": {
							"r": 1,
							"s": 1
						},
						"cm_mailing_list_ui_events": {
							"r": 1,
							"s": 1
						},
						"codex_events": {
							"r": 1,
							"s": 1
						},
						"comet_feed_attachment_combinations": {
							"r": 1
						},
						"comet_feed_story_menu_action": {
							"r": 1
						},
						"comet_feed_vpvd_test": {
							"r": 1
						},
						"comet_group_mall_page_visit": {
							"r": 1
						},
						"comet_media_options_click": {
							"r": 1
						},
						"comet_media_remove_tag": {
							"r": 1
						},
						"comet_media_tag": {
							"r": 1
						},
						"comet_media_vpvd": {
							"r": 1
						},
						"comet_news_feed_eof": {
							"r": 1
						},
						"comet_news_feed_eof_unmounted": {
							"r": 1
						},
						"comet_news_feed_loaded": {
							"r": 1
						},
						"comet_notifications_ranking_error": {
							"r": 1
						},
						"comet_opt_in_upsell_interaction": {
							"r": 1
						},
						"comet_opt_out_survey": {
							"r": 1
						},
						"comet_page_post_edit": {
							"r": 1
						},
						"comet_redblock": {
							"r": 100,
							"s": 1
						},
						"comet_rhc_widget_action": {
							"r": 1
						},
						"comet_scroll_latency": {
							"r": 10000
						},
						"comet_story_attachments": {
							"r": 1
						},
						"comet_topnav_item_click": {
							"r": 1
						},
						"comet_topnav_item_impression": {
							"r": 1
						},
						"comment_inline_seen": {
							"r": 1
						},
						"comment_inline_xout": {
							"r": 1
						},
						"comment_insights_event": {
							"r": 1
						},
						"comment_moderation_filters_enter_flow": {
							"r": 10000,
							"s": 1
						},
						"comment_ordering_mode": {
							"r": 1
						},
						"commerce_experimental_component_click": {
							"r": 1
						},
						"commerce_feed_story_click": {
							"r": 1
						},
						"commerce_feed_story_impression": {
							"r": 1
						},
						"commerce_manager_client": {
							"r": 1
						},
						"commerce_manager_ui": {
							"r": 1,
							"s": 1
						},
						"commerce_pdp_product_tag_click": {
							"r": 1
						},
						"commerce_platform_email_clickthrough": {
							"r": 1,
							"s": 1
						},
						"commerce_platform_tracking_number_validation": {
							"r": 1,
							"s": 1
						},
						"commerce_post_outbound_click": {
							"r": 1
						},
						"commerce_product_tag_alert_click": {
							"r": 1
						},
						"commerce_product_tag_alert_dismiss": {
							"r": 1
						},
						"commerce_product_tag_alert_impression": {
							"r": 1
						},
						"commerce_product_tag_dot_click": {
							"r": 1
						},
						"commerce_product_tag_dot_imp": {
							"r": 1
						},
						"commerce_product_tag_media_click": {
							"r": 1
						},
						"commerce_see_more_from_shop_card_click": {
							"r": 1
						},
						"commerce_shop_landing": {
							"r": 1
						},
						"commerce_shop_product_card_vpv": {
							"r": 1
						},
						"commerce_shop_product_details_imp": {
							"r": 1
						},
						"commerce_shoppable_content_landing_scroll": {
							"r": 1
						},
						"commerce_view_product_details": {
							"r": 1
						},
						"commerce_view_product_tag": {
							"r": 1
						},
						"commerce_view_product_tag_hscroll": {
							"r": 1
						},
						"commerce_view_product_tag_overlapped": {
							"r": 1
						},
						"commerce_view_product_tag_pill": {
							"r": 1
						},
						"commerce_view_product_tag_pill_dwelled": {
							"r": 1
						},
						"commerce_view_product_tag_post": {
							"r": 1
						},
						"commerce_view_product_tag_product": {
							"r": 1
						},
						"commerce_view_product_tagged_post": {
							"r": 1
						},
						"commerce_view_see_more_from_shop": {
							"r": 1
						},
						"commerce_view_shoppable_collection_landing": {
							"r": 1
						},
						"commerce_view_shoppable_content_landing": {
							"r": 1
						},
						"commercial_break_end": {
							"r": 1
						},
						"commercial_break_starting_indicator": {
							"r": 1
						},
						"community_moderation_event": {
							"r": 1
						},
						"community_resources_click_link_mobile": {
							"r": 1
						},
						"community_resources_share_link_mobile": {
							"r": 1
						},
						"community_view_actions_sr_core": {
							"r": 1
						},
						"community_view_actions_sr_low": {
							"r": 1
						},
						"compass_qp_primary_click_event": {
							"r": 1
						},
						"compass_qp_secondary_click_event": {
							"r": 1
						},
						"compass_qp_unit_impression_event": {
							"r": 1
						},
						"compass_unit_click": {
							"r": 1
						},
						"compass_unit_vpvd": {
							"r": 1
						},
						"compassion_resource_view": {
							"r": 1
						},
						"compassion_resources_mental_hub_select_unit": {
							"r": 10000
						},
						"compassion_resources_mental_hub_view_unit": {
							"r": 10000
						},
						"composer_cancel": {
							"r": 1
						},
						"composer_collaborative_post_add_prompt_text": {
							"r": 1,
							"s": 1
						},
						"composer_collaborative_post_change_background_color": {
							"r": 1,
							"s": 1
						},
						"composer_collaborative_post_click_next": {
							"r": 1,
							"s": 1
						},
						"composer_collaborative_post_tap_response_card": {
							"r": 1,
							"s": 1
						},
						"composer_entry": {
							"r": 1
						},
						"composer_feature_intent": {
							"r": 1
						},
						"composer_focus_acquired": {
							"r": 1
						},
						"composer_focus_lost": {
							"r": 1
						},
						"composer_init": {
							"r": 1
						},
						"composer_post": {
							"r": 1
						},
						"composer_post_cancel": {
							"r": 1
						},
						"composer_post_failure": {
							"r": 1
						},
						"composer_post_mutation_start": {
							"r": 1
						},
						"composer_post_server_content_rendered": {
							"r": 1
						},
						"composer_post_success": {
							"r": 1
						},
						"composer_post_terminal": {
							"r": 1
						},
						"composer_publish_flow": {
							"r": 1,
							"s": 1
						},
						"confirm_exit_stripe_kyc_onboarding_screen": {
							"r": 1
						},
						"confirm_fundraiser_match_view_interstitial": {
							"r": 1
						},
						"consent_flow_interactions": {
							"r": 1
						},
						"content_access_and_control": {
							"r": 1
						},
						"content_manager_boost_button_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_boost_button_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_columns_customizer_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_columns_customizer_enter_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_columns_customizer_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_columns_customizer_update_value": {
							"r": 1,
							"s": 1
						},
						"content_manager_confirmation_dialog_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_confirmation_dialog_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"content_manager_confirmation_dialog_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_config_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_config_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_config_send_request": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_enter_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_exit_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_section_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_section_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_detail_view_send_request": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_item_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_content_item_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_filter_selector_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_filter_selector_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_filter_selector_update_value": {
							"r": 1,
							"s": 1
						},
						"content_manager_nux_dismiss": {
							"r": 1,
							"s": 1
						},
						"content_manager_nux_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_container_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_container_enter_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_container_exit_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_container_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_modal_enter_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_modal_exit_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_modal_submit": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_modal_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"content_manager_permission_authorize_modal_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"content_manager_tab_item_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_tab_item_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_typeahead_submit": {
							"r": 1,
							"s": 1
						},
						"content_manager_view_switcher_presence_selector_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_view_switcher_presence_selector_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_view_switcher_tab_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_view_switcher_tab_enter_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_view_switcher_tab_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_workspace_click": {
							"r": 1,
							"s": 1
						},
						"content_manager_workspace_enter_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_workspace_exit_flow": {
							"r": 1,
							"s": 1
						},
						"content_manager_workspace_impression": {
							"r": 1,
							"s": 1
						},
						"content_manager_workspace_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"content_manager_workspace_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"content_manager_workspace_send_request": {
							"r": 1,
							"s": 1
						},
						"continuous_close_logger_event": {
							"r": 1,
							"s": 1
						},
						"cookie_consent_dialog": {
							"r": 1,
							"s": 1
						},
						"copy_nonprofit_fundraiser_creation_short_url": {
							"r": 1
						},
						"coworker_groups_invite_via_link": {
							"r": 1,
							"s": 1
						},
						"coworker_opt_out_flow": {
							"r": 1
						},
						"cpas_brand_page_assignment": {
							"r": 1,
							"s": 1
						},
						"cpas_producer_hub_event": {
							"r": 1,
							"s": 1
						},
						"create_flow_change_actor": {
							"r": 1
						},
						"create_fundraiser_begin": {
							"r": 1
						},
						"create_fundraiser_match_view_interstitial": {
							"r": 1
						},
						"create_fundraiser_open": {
							"r": 1
						},
						"create_fundraiser_profile_frame_begin": {
							"r": 1
						},
						"create_fundraiser_profile_frame_complete": {
							"r": 1
						},
						"create_living_room_action_link_impression": {
							"r": 1
						},
						"created_hcp_note": {
							"r": 1
						},
						"creator_monetization_overview_tool_perf_event": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_feed_unit_dismiss": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_feed_unit_vpv": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_follow_all": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_follow_page": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_page_click": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_story_click": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_story_media_click": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_story_vpv": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_unfollow_all": {
							"r": 1,
							"s": 1
						},
						"credible_election_info_unfollow_page": {
							"r": 1,
							"s": 1
						},
						"crisis_click_unit": {
							"r": 1
						},
						"crisis_tool_view_page": {
							"r": 1
						},
						"crisis_view_module": {
							"r": 1
						},
						"crisis_view_unit": {
							"r": 1
						},
						"crm_destination_audience_advertisement_click": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_creation_click": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_creation_dismiss": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_creation_enter_flow": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_creation_impression": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_creation_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_creation_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_creation_submit_flow": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_list_scroll": {
							"r": 1,
							"s": 1
						},
						"crm_destination_audience_tab_click": {
							"r": 1,
							"s": 1
						},
						"crm_destination_contact_click": {
							"r": 1,
							"s": 1
						},
						"crm_destination_contact_submit_flow": {
							"r": 1,
							"s": 1
						},
						"crm_destination_contact_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"crm_destination_contacts_list_click": {
							"r": 1,
							"s": 1
						},
						"crm_destination_contacts_list_impression": {
							"r": 1,
							"s": 1
						},
						"crm_destination_partner_integration_click": {
							"r": 1,
							"s": 1
						},
						"crm_destination_partner_integration_enter_flow": {
							"r": 1,
							"s": 1
						},
						"crm_destination_partner_integration_impression": {
							"r": 1,
							"s": 1
						},
						"crm_destination_partner_integration_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"crm_destination_partner_integration_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"crm_destination_saved_filter_click": {
							"r": 1,
							"s": 1
						},
						"crm_destination_saved_filter_submit_flow": {
							"r": 1,
							"s": 1
						},
						"crm_destination_saved_filter_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"crm_destination_saved_filters_list_impression": {
							"r": 1,
							"s": 1
						},
						"crm_destination_saved_filters_list_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"crm_destination_saved_filters_list_receive_response_success": {
							"r": 1,
							"s": 1
						},
						"crm_destination_saved_filters_list_send_request": {
							"r": 1,
							"s": 1
						},
						"crowdsourcing_graph_editor_waterfall": {
							"r": 100,
							"s": 1
						},
						"crowdsourcing_session": {
							"r": 1
						},
						"ctm_multi_photo_carousel_am_multi_photo_carousel_automated_response_create": {
							"r": 1,
							"s": 1
						},
						"ctm_multi_photo_carousel_am_multi_photo_carousel_automated_response_impression": {
							"r": 1,
							"s": 1
						},
						"ctm_multi_photo_carousel_am_multi_photo_carousel_button_click": {
							"r": 1,
							"s": 1
						},
						"ctm_multi_photo_carousel_am_multi_photo_carousel_button_impression": {
							"r": 1,
							"s": 1
						},
						"ctm_multi_photo_carousel_am_multi_photo_carousel_option_click": {
							"r": 1,
							"s": 1
						},
						"ctm_multi_photo_carousel_am_multi_photo_carousel_option_impression": {
							"r": 1,
							"s": 1
						},
						"ctm_multi_photo_carousel_msgr_multi_photo_carousel_click": {
							"r": 1,
							"s": 1
						},
						"ctm_multi_photo_carousel_msgr_multi_photo_carousel_impression": {
							"r": 1,
							"s": 1
						},
						"curation_tool_errors": {
							"r": 1,
							"s": 1
						},
						"curation_tool_trending": {
							"r": 1,
							"s": 1
						},
						"customer_feedback_end": {
							"r": 1
						},
						"customer_feedback_open": {
							"r": 1
						},
						"data_for_good_partner_portal": {
							"r": 1,
							"s": 1
						},
						"deal_review_creation": {
							"r": 1
						},
						"deal_review_exception": {
							"r": 1
						},
						"deferred_feedback_experience": {
							"r": 1
						},
						"delete_media_attempted": {
							"r": 1
						},
						"deleted_hcp_note": {
							"r": 1
						},
						"developer_bulk_self_certification_logger_event": {
							"r": 1,
							"s": 1
						},
						"developer_capability_accept_button_clicked": {
							"r": 1
						},
						"developer_capability_decline_button_clicked": {
							"r": 1
						},
						"developer_capability_decline_modal_confirmed": {
							"r": 1
						},
						"developer_capability_decline_modal_shown": {
							"r": 1
						},
						"developer_capability_mini_duc_accept_button_clicked": {
							"r": 1
						},
						"developer_capability_mini_duc_modal_shown": {
							"r": 1
						},
						"developer_capability_removal_modal_confirmed": {
							"r": 1
						},
						"developer_capability_remove_button_clicked": {
							"r": 1
						},
						"developer_capability_remove_modal_shown": {
							"r": 1
						},
						"developer_capability_report_bug_button_clicked": {
							"r": 1
						},
						"developer_capability_table_shown": {
							"r": 1
						},
						"developer_community_click_activity": {
							"r": 10000,
							"s": 1
						},
						"developer_registration_account_verification_shown": {
							"r": 1
						},
						"developer_registration_email_verification_shown": {
							"r": 1
						},
						"developer_registration_role_selection_shown": {
							"r": 1
						},
						"developer_registration_term_shown": {
							"r": 1
						},
						"devsupport_recognition_event": {
							"r": 10000
						},
						"dgw_client": {
							"r": 1
						},
						"dialog_before_unload": {
							"r": 1
						},
						"dialog_cancel": {
							"r": 1
						},
						"dialog_confirm": {
							"r": 1
						},
						"dialog_unload": {
							"r": 1
						},
						"dialog_validation_error": {
							"r": 1
						},
						"discard_fundraiser_draft": {
							"r": 1
						},
						"discovery_hub_click_content": {
							"r": 1
						},
						"discovery_hub_click_unit": {
							"r": 1
						},
						"discovery_hub_follow_hub": {
							"r": 1
						},
						"discovery_hub_share_hub": {
							"r": 1
						},
						"discovery_hub_unfollow_hub": {
							"r": 1
						},
						"discovery_hub_view_content": {
							"r": 1
						},
						"discovery_hub_view_unit": {
							"r": 1
						},
						"donation_thank_you_comment_dialog_open": {
							"r": 1
						},
						"downgrade_collaborative_post": {
							"r": 1,
							"s": 1
						},
						"e2e_deletion_requests": {
							"r": 1
						},
						"edge_insights": {
							"r": 1,
							"s": 1
						},
						"edit_collaborative_post_attachment": {
							"r": 1,
							"s": 1
						},
						"edit_fundraiser_begin": {
							"r": 1
						},
						"effect_auto_upgrade_events": {
							"r": 1,
							"s": 1
						},
						"enforcement_dashboard_logging": {
							"r": 1
						},
						"enterpriseevents_coreappexperience_augl": {
							"r": 1
						},
						"enterpriseevents_coreappexperienceended_augl": {
							"r": 1
						},
						"enterpriseevents_coreinteractionbutton_augl": {
							"r": 1
						},
						"enterpriseevents_coreinteractiondropdown_augl": {
							"r": 1
						},
						"enterpriseevents_coreinteractiondropdownended_augl": {
							"r": 1
						},
						"enterpriseevents_coreinteractiontextinput_augl": {
							"r": 1
						},
						"enterpriseevents_coreinteractiontextinputended_augl": {
							"r": 1
						},
						"enterpriseevents_coreuserinteraction_augl": {
							"r": 1
						},
						"enterpriseevents_coreuserinteractionended_augl": {
							"r": 1
						},
						"enterpriseevents_coreviewmodal_augl": {
							"r": 1
						},
						"enterpriseevents_coreviewmodalended_augl": {
							"r": 1
						},
						"enterpriseevents_epbusinessaddpeople_augl": {
							"r": 1
						},
						"enterpriseevents_eppaneload_augl": {
							"r": 1
						},
						"enterpriseevents_eppaneloadended_augl": {
							"r": 1
						},
						"event_nit": {
							"r": 1,
							"s": 1
						},
						"event_target": {
							"r": 1
						},
						"exit_collaborative_post_creation": {
							"r": 1,
							"s": 1
						},
						"external_metric_consumption_validation_event": {
							"r": 1
						},
						"external_share_tracking_event": {
							"r": 1
						},
						"facebook_partner_program": {
							"r": 1
						},
						"faq_view_answer": {
							"r": 1
						},
						"fb_form_instance_commit_stream": {
							"r": 1,
							"s": 1
						},
						"fb_mini_shop_send_onboarding_email_flow": {
							"r": 1
						},
						"fbe_fb_app_store_event": {
							"r": 1
						},
						"fbpay_vas_hub_entry_point_button_click": {
							"r": 1
						},
						"fbpay_vas_offer_card_claim_click": {
							"r": 1
						},
						"fbpay_vas_offer_card_share_click": {
							"r": 1
						},
						"fbpay_vas_offer_card_shop_click": {
							"r": 1
						},
						"fbpay_vas_offer_share_send_event": {
							"r": 1
						},
						"fbpay_vas_payhub_offer_upsell_click": {
							"r": 1
						},
						"fbpay_vas_show_ineligible_offer_detail_card": {
							"r": 1
						},
						"fbpay_vas_show_offer_detail_card": {
							"r": 1
						},
						"fbt_impressions_batch": {
							"r": 1
						},
						"feature_limited": {
							"r": 1
						},
						"feed_challenges_cta": {
							"r": 1
						},
						"feed_friend_request_confirm": {
							"r": 1
						},
						"feed_friend_request_delete": {
							"r": 1
						},
						"feed_friend_request_imp": {
							"r": 1
						},
						"feed_friend_request_profile": {
							"r": 1
						},
						"filter_page_fundraisers_tab": {
							"r": 1
						},
						"flx_dialog_shown": {
							"r": 1
						},
						"flx_feature_limited": {
							"r": 1
						},
						"foa_3pd": {
							"r": 1,
							"s": 1
						},
						"for_sale_item_message_seller_button_clicked": {
							"r": 1
						},
						"franchise_program_national_events": {
							"r": 1,
							"s": 1
						},
						"friending_comet_friends_tab_interaction": {
							"r": 1
						},
						"friends_center_opened": {
							"r": 1
						},
						"frtp_survey_response": {
							"r": 1
						},
						"fundraiser_add_organizers": {
							"r": 1
						},
						"fundraiser_change_p4p_country": {
							"r": 1
						},
						"fundraiser_change_p4p_currency": {
							"r": 1
						},
						"fundraiser_creation_search_beneficiaries": {
							"r": 1
						},
						"fundraiser_hub_charity_search_load_more": {
							"r": 1
						},
						"fundraiser_hub_charity_search_results": {
							"r": 1
						},
						"fundraiser_match_delete_begin": {
							"r": 1
						},
						"fundraiser_match_delete_complete": {
							"r": 1
						},
						"fundraiser_match_review_view_interstitial": {
							"r": 1
						},
						"fundraiser_onboarding_application_initialization": {
							"r": 1
						},
						"fx_identity_product": {
							"r": 1
						},
						"games_service_developer_event": {
							"r": 1,
							"s": 1
						},
						"games_service_game_invite": {
							"r": 1,
							"s": 1
						},
						"games_video_stream_highlights": {
							"r": 1,
							"s": 1
						},
						"gaming_arena": {
							"r": 1
						},
						"gaming_coplay_discovery": {
							"r": 1,
							"s": 1
						},
						"gaming_coplay_falco_event": {
							"r": 1
						},
						"gaming_video_level_up_qp": {
							"r": 1
						},
						"gemini_opt_out_survey": {
							"r": 1
						},
						"generic_alert_card_tap": {
							"r": 1
						},
						"generic_xma_template_click": {
							"r": 1,
							"s": 1
						},
						"geodesic_redblock": {
							"r": 1,
							"s": 1
						},
						"goodwill_camera_roll_open": {
							"r": 1
						},
						"goodwill_campaign_view": {
							"r": 1
						},
						"goodwill_content_click": {
							"r": 1
						},
						"goodwill_content_view": {
							"r": 1
						},
						"goodwill_edit_button_click": {
							"r": 1
						},
						"goodwill_friend_selector_open": {
							"r": 1
						},
						"goodwill_overflow_button_click": {
							"r": 1
						},
						"goodwill_permalink_subpage_view": {
							"r": 1
						},
						"goodwill_photo_picker_open": {
							"r": 1
						},
						"goodwill_product_system_share_menu_open": {
							"r": 1
						},
						"goodwill_screen_next": {
							"r": 1
						},
						"goodwill_screen_previous": {
							"r": 1
						},
						"goodwill_story_view": {
							"r": 1
						},
						"goodwill_throwback_share_composer_cancel": {
							"r": 1
						},
						"gpymi_add": {
							"r": 1
						},
						"gpymi_feed_unit": {
							"r": 1
						},
						"gpymi_imp": {
							"r": 1
						},
						"graphql_live_query_event": {
							"r": 1
						},
						"griffin_tab_open": {
							"r": 1
						},
						"group_forum_opt_in_actions": {
							"r": 1,
							"s": 1
						},
						"group_forums_privacy_education_actions": {
							"r": 1
						},
						"group_hashtag": {
							"r": 1,
							"s": 1
						},
						"group_integrity_inform_cta_click": {
							"r": 1
						},
						"group_leaders_engagement": {
							"r": 1
						},
						"group_quality_actions": {
							"r": 10000
						},
						"group_visit_action": {
							"r": 1
						},
						"groups_comment_sort_switcher_event": {
							"r": 1,
							"s": 1
						},
						"groups_discovery_exception": {
							"r": 1
						},
						"groups_discovery_filter_selected": {
							"r": 1
						},
						"groups_discovery_group_join_requested": {
							"r": 1
						},
						"groups_discovery_group_visit": {
							"r": 1
						},
						"groups_discovery_page_load": {
							"r": 1
						},
						"groups_integrity_join_friction_cancel": {
							"r": 1
						},
						"groups_integrity_join_friction_impression": {
							"r": 1
						},
						"groups_integrity_warning_card_impression": {
							"r": 1
						},
						"groups_mall_activation_pymi": {
							"r": 1
						},
						"groups_my_content_action": {
							"r": 1,
							"s": 1
						},
						"groups_post_insights": {
							"r": 1
						},
						"groups_sole_admin_confirm_go_back": {
							"r": 1
						},
						"groups_sole_admin_confirm_interstitial_impression": {
							"r": 1
						},
						"groups_sole_admin_interstitial_done": {
							"r": 1
						},
						"groups_sole_admin_invite_interstitial_cancel": {
							"r": 1
						},
						"groups_sole_admin_invite_interstitial_impression": {
							"r": 1
						},
						"groups_sole_admin_launch_invite_dialog": {
							"r": 1
						},
						"groups_viewed_rules": {
							"r": 1
						},
						"gysj_join": {
							"r": 1
						},
						"gysj_profile": {
							"r": 1
						},
						"gysj_unjoin": {
							"r": 1
						},
						"gysj_xout": {
							"r": 1
						},
						"health_click": {
							"r": 1
						},
						"help_center": {
							"r": 1,
							"s": 1
						},
						"helpdesk_kms": {
							"r": 1
						},
						"holy_diver_client_request": {
							"r": 1
						},
						"horizon_2d_surface_creations_hub": {
							"r": 1,
							"s": 1
						},
						"ias_uts_client_debugging": {
							"r": 1
						},
						"icc_ux": {
							"r": 1,
							"s": 1
						},
						"inbox_ad_bundling_error_with_key_country_targeting": {
							"r": 1,
							"s": 1
						},
						"instant_games_events_falco": {
							"r": 1,
							"s": 1
						},
						"instant_games_interactive_poll_event": {
							"r": 1
						},
						"instant_games_shareable_link_event": {
							"r": 1
						},
						"instant_games_tournaments_events": {
							"r": 1
						},
						"instant_games_update_comment": {
							"r": 1
						},
						"instant_games_web_funnel_event": {
							"r": 1
						},
						"instant_games_web_hub_events": {
							"r": 1,
							"s": 1
						},
						"intern_cases_left_nav_click_add_subcase_button": {
							"r": 1
						},
						"intern_cases_left_nav_click_inline_more_button": {
							"r": 1
						},
						"intern_cases_select_case_type_entry": {
							"r": 1
						},
						"intern_cases_select_existing_task_entry": {
							"r": 1
						},
						"intern_cases_top_bar_logo": {
							"r": 1
						},
						"intern_cases_top_bar_search_button": {
							"r": 1
						},
						"intl_commitment_warning": {
							"r": 1,
							"s": 1
						},
						"intl_stcv2_create_edit_clone_logger_config": {
							"r": 1,
							"s": 1
						},
						"invite_user_dialog_open": {
							"r": 1
						},
						"keyboard_shortcut_viewer_activity": {
							"r": 1,
							"s": 1
						},
						"knowledge_notes": {
							"r": 1
						},
						"kp_analytics_event": {
							"r": 1,
							"s": 1
						},
						"labnet_event": {
							"r": 1
						},
						"laminardevtools_coreappexperience_augl": {
							"r": 1
						},
						"laminardevtools_coreappexperienceended_augl": {
							"r": 1
						},
						"laminardevtools_coreuserinteraction_augl": {
							"r": 1
						},
						"laminardevtools_coreuserinteractionended_augl": {
							"r": 1
						},
						"laminardevtools_ldtactionselected_augl": {
							"r": 1
						},
						"laminardevtools_ldtdispatchinfoviewchange_augl": {
							"r": 1
						},
						"laminardevtools_ldtinit_augl": {
							"r": 1
						},
						"laminardevtools_ldtsearchfilter_augl": {
							"r": 1
						},
						"laminardevtools_ldttabchange_augl": {
							"r": 1
						},
						"launch_message_seller_dialog": {
							"r": 1
						},
						"ldp_touchpoint_logger": {
							"r": 10000
						},
						"lead_ads_tools_redirection_card_click": {
							"r": 1,
							"s": 1
						},
						"lead_ads_tools_redirection_card_impression": {
							"r": 1,
							"s": 1
						},
						"lead_ads_tools_tab_click": {
							"r": 1,
							"s": 1
						},
						"lead_ads_tools_tab_enter_flow": {
							"r": 1,
							"s": 1
						},
						"lead_ads_tools_tab_exit_flow": {
							"r": 1,
							"s": 1
						},
						"lead_ads_tools_tab_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_audience_expansion_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_audience_expansion_create": {
							"r": 1,
							"s": 1
						},
						"leads_center_audience_expansion_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_audience_expansion_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_audience_expansion_submit": {
							"r": 1,
							"s": 1
						},
						"leads_center_bulk_action_submit": {
							"r": 1,
							"s": 1
						},
						"leads_center_crm_stage_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_download_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_download_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_import_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_import_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_import_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_import_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_import_upload": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_import_upload_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_csv_import_upload_success": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_button_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_setting_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tab_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_thread_list_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_auto_reply_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_auto_reply_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_auto_reply_submit_flow_cancel": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_auto_reply_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_auto_reply_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_business_send_email_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_business_send_email_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_business_send_email_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_business_send_email_submit_flow_cancel": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_business_send_email_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_business_send_email_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_confirmation_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_confirmation_submit": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_confirmation_submit_flow_cancel": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_confirmation_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_confirmation_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_scheduled_email_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_scheduled_email_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_scheduled_email_submit": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_scheduled_email_submit_flow_cancel": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_scheduled_email_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_email_tool_scheduled_email_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"leads_center_filter_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_filter_create": {
							"r": 1,
							"s": 1
						},
						"leads_center_filter_delete": {
							"r": 1,
							"s": 1
						},
						"leads_center_filter_send_request": {
							"r": 1,
							"s": 1
						},
						"leads_center_filter_update": {
							"r": 1,
							"s": 1
						},
						"leads_center_in_surface_notification_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_in_surface_notification_dismiss": {
							"r": 1,
							"s": 1
						},
						"leads_center_inbox_segmentation_card_upsell_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_inbox_segmentation_card_upsell_dismiss": {
							"r": 1,
							"s": 1
						},
						"leads_center_inbox_segmentation_card_upsell_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_inbox_segmentation_card_upsell_reject": {
							"r": 1,
							"s": 1
						},
						"leads_center_inbox_segmentation_card_upsell_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_label_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_label_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_lead_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_lead_list_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_lead_list_receive_response": {
							"r": 1,
							"s": 1
						},
						"leads_center_lead_list_receive_response_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_lead_list_send_request": {
							"r": 1,
							"s": 1
						},
						"leads_center_note_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_note_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_onboarding_dismiss": {
							"r": 1,
							"s": 1
						},
						"leads_center_onboarding_enter_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_onboarding_exit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_reminder_submit_flow": {
							"r": 1,
							"s": 1
						},
						"leads_center_reminder_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_saved_audience_click": {
							"r": 1,
							"s": 1
						},
						"leads_center_saved_audience_dismiss": {
							"r": 1,
							"s": 1
						},
						"leads_center_saved_audience_failure": {
							"r": 1,
							"s": 1
						},
						"leads_center_saved_audience_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_saved_audience_send_request": {
							"r": 1,
							"s": 1
						},
						"leads_center_tos_dismiss": {
							"r": 1,
							"s": 1
						},
						"leads_center_tos_impression": {
							"r": 1,
							"s": 1
						},
						"leads_center_tos_submit_flow": {
							"r": 1,
							"s": 1
						},
						"learning_click_component": {
							"r": 1
						},
						"learning_exception": {
							"r": 1
						},
						"learning_view_component": {
							"r": 1
						},
						"lh_digest_logging": {
							"r": 1
						},
						"lightweight_negative_feedback_hide": {
							"r": 1
						},
						"live_ads": {
							"r": 1,
							"s": 1
						},
						"live_event_frontend": {
							"r": 1,
							"s": 1
						},
						"live_join_group_cta_click": {
							"r": 1
						},
						"live_producer_events": {
							"r": 1,
							"s": 1
						},
						"live_shopping_composer_first_open": {
							"r": 1
						},
						"live_shopping_composer_skipped": {
							"r": 1
						},
						"live_shopping_first_time_seller_nux": {
							"r": 1
						},
						"live_shopping_viewer": {
							"r": 1
						},
						"live_trace_www": {
							"r": 1
						},
						"live_trace_www_video_player": {
							"r": 1
						},
						"live_video_frame_displayed": {
							"r": 1
						},
						"live_video_rewind": {
							"r": 1,
							"s": 1
						},
						"live_video_segment_download": {
							"r": 1
						},
						"living_room": {
							"r": 1
						},
						"locationmanager_coreappexperience_augl": {
							"r": 1
						},
						"locationmanager_coreappexperienceended_augl": {
							"r": 1
						},
						"locationmanager_coreinteractionaccordianmenu_augl": {
							"r": 1
						},
						"locationmanager_coreinteractionbutton_augl": {
							"r": 1
						},
						"locationmanager_coreinteractioncheckbox_augl": {
							"r": 1
						},
						"locationmanager_coreinteractiondropdown_augl": {
							"r": 1
						},
						"locationmanager_coreinteractiondropdownended_augl": {
							"r": 1
						},
						"locationmanager_coreinteractionradiobutton_augl": {
							"r": 1
						},
						"locationmanager_coreinteractiontextinput_augl": {
							"r": 1
						},
						"locationmanager_coreinteractiontextinputended_augl": {
							"r": 1
						},
						"locationmanager_coreinteractiontoggle_augl": {
							"r": 1
						},
						"locationmanager_coreuserinteraction_augl": {
							"r": 1
						},
						"locationmanager_coreuserinteractionended_augl": {
							"r": 1
						},
						"locationmanager_coreviewmodal_augl": {
							"r": 1
						},
						"locationmanager_coreviewmodalended_augl": {
							"r": 1
						},
						"log_candidate_code_evaluation_event": {
							"r": 1
						},
						"log_cms_editor_session": {
							"r": 10000
						},
						"log_cms_editor_subsession": {
							"r": 10000
						},
						"log_comet_canvas_app_time_spent": {
							"r": 1
						},
						"log_messenger_frx_events_in_cix_screen": {
							"r": 1
						},
						"login_forgot_password_click": {
							"r": 1,
							"s": 1
						},
						"loyalty_third_party_events": {
							"r": 1,
							"s": 1
						},
						"ls_bot_composer_quick_reply_bubble_tapped": {
							"r": 1
						},
						"ls_bot_composer_quick_reply_displayed": {
							"r": 1
						},
						"ls_bot_composer_quick_reply_tapped": {
							"r": 1
						},
						"ls_business_icebreaker_displayed": {
							"r": 1
						},
						"ls_business_icebreaker_displayed_ib_sheet": {
							"r": 1
						},
						"ls_business_icebreaker_displayed_owc": {
							"r": 1
						},
						"ls_business_icebreaker_tapped": {
							"r": 1
						},
						"ls_business_icebreaker_tapped_ib_sheet": {
							"r": 1
						},
						"ls_business_icebreaker_tapped_owc": {
							"r": 1
						},
						"ls_business_welcome_page_composer_hided": {
							"r": 1
						},
						"ls_business_welcome_page_get_started_button_impression": {
							"r": 1
						},
						"ls_business_welcome_page_get_started_button_tapped": {
							"r": 1
						},
						"ls_business_welcome_page_impression": {
							"r": 1
						},
						"ls_business_welcome_page_start": {
							"r": 1
						},
						"ls_cta_click_client_handling_success": {
							"r": 1
						},
						"ls_cta_displayed_button_tapped": {
							"r": 1
						},
						"ls_data_trace": {
							"r": 1
						},
						"ls_did_tap_call_to_action": {
							"r": 1
						},
						"ls_message_click": {
							"r": 1
						},
						"ls_messenger_integrity_block_facebook_confirmed": {
							"r": 1
						},
						"ls_messenger_integrity_block_facebook_failed": {
							"r": 1
						},
						"ls_messenger_integrity_block_facebook_succeeded": {
							"r": 1
						},
						"ls_messenger_integrity_block_facebook_tapped": {
							"r": 1
						},
						"ls_messenger_integrity_block_messages_confirmed": {
							"r": 1
						},
						"ls_messenger_integrity_block_messages_failed": {
							"r": 1
						},
						"ls_messenger_integrity_block_messages_succeeded": {
							"r": 1
						},
						"ls_messenger_integrity_block_messages_tapped": {
							"r": 1
						},
						"ls_messenger_integrity_block_view_enter": {
							"r": 1
						},
						"ls_messenger_integrity_learn_more_tapped": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_facebook_confirmed": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_facebook_failed": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_facebook_succeeded": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_facebook_tapped": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_messages_confirmed": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_messages_failed": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_messages_succeeded": {
							"r": 1
						},
						"ls_messenger_integrity_unblock_messages_tapped": {
							"r": 1
						},
						"ls_persistent_menu_client_handling_success": {
							"r": 1
						},
						"ls_persistent_menu_icon_tapped": {
							"r": 1
						},
						"ls_persistent_menu_is_set_up": {
							"r": 1
						},
						"ls_reply_canceled": {
							"r": 1
						},
						"ls_reply_click": {
							"r": 1
						},
						"ls_reply_complete": {
							"r": 1
						},
						"ls_reply_rendered": {
							"r": 1
						},
						"ls_reply_sent": {
							"r": 1
						},
						"ls_rtc_call_summary": {
							"r": 1
						},
						"ls_rtc_connection_start": {
							"r": 1
						},
						"ls_rtc_end_call_survey": {
							"r": 1
						},
						"ls_rtc_peer_connection_summary": {
							"r": 1
						},
						"ls_rtc_star_rating": {
							"r": 1
						},
						"ls_rtc_star_rating_shown": {
							"r": 1
						},
						"ls_rtc_tslog": {
							"r": 1,
							"s": 1
						},
						"lynx_async_callback": {
							"r": 1
						},
						"manage_friends_entry_point_click": {
							"r": 1
						},
						"manage_friends_entry_point_dismissal": {
							"r": 1
						},
						"manage_friends_entry_point_impression": {
							"r": 1
						},
						"manage_friends_friend_impression": {
							"r": 1
						},
						"manage_friends_friend_profile_click": {
							"r": 1
						},
						"manage_friends_friend_unfriend_cancel": {
							"r": 1
						},
						"manage_friends_friend_unfriend_click": {
							"r": 1
						},
						"manage_friends_friend_unfriend_confirm": {
							"r": 1
						},
						"manage_friends_visitation": {
							"r": 1
						},
						"managedlift_coreappexperience_augl": {
							"r": 1
						},
						"managedlift_coreappexperienceended_augl": {
							"r": 1
						},
						"managedlift_coreinteractionbutton_augl": {
							"r": 1
						},
						"managedlift_coreinteractioncheckbox_augl": {
							"r": 1
						},
						"managedlift_coreinteractioncollapse_augl": {
							"r": 1
						},
						"managedlift_coreinteractionexpand_augl": {
							"r": 1
						},
						"managedlift_coreinteractionmouseover_augl": {
							"r": 1
						},
						"managedlift_coreinteractionmouseoverended_augl": {
							"r": 1
						},
						"managedlift_coreinteractionpanetab_augl": {
							"r": 1
						},
						"managedlift_coreinteractionradiobutton_augl": {
							"r": 1
						},
						"managedlift_coreinteractionsearchbar_augl": {
							"r": 1
						},
						"managedlift_coreinteractionsearchbarended_augl": {
							"r": 1
						},
						"managedlift_coreuserinteraction_augl": {
							"r": 1
						},
						"managedlift_coreuserinteractionended_augl": {
							"r": 1
						},
						"managedlift_coreviewmodal_augl": {
							"r": 1
						},
						"managedlift_coreviewmodalended_augl": {
							"r": 1
						},
						"managedlift_mlapierror_augl": {
							"r": 1
						},
						"managedlift_mlerror_augl": {
							"r": 1
						},
						"managedlift_mlfieldset_augl": {
							"r": 1
						},
						"managedlift_mllink_augl": {
							"r": 1
						},
						"managedlift_mlsurveyrespond_augl": {
							"r": 1
						},
						"managedlift_mltypeaheadselect_augl": {
							"r": 1
						},
						"managedlift_mlvalidationerror_augl": {
							"r": 1
						},
						"managedlift_mlviewcomponent_augl": {
							"r": 1
						},
						"managedlift_mlviewcomponentended_augl": {
							"r": 1
						},
						"marketplace_click": {
							"r": 1
						},
						"marketplace_feed_load": {
							"r": 1
						},
						"marketplace_first_scroll": {
							"r": 1
						},
						"marketplace_impression": {
							"r": 1
						},
						"marketplace_long_click": {
							"r": 1
						},
						"marketplace_modify": {
							"r": 1
						},
						"marketplace_pdp_tracking_data_tracker": {
							"r": 1
						},
						"marketplace_photo_sync": {
							"r": 1,
							"s": 1
						},
						"marketplace_pre_recorded_video_upload_error": {
							"r": 1
						},
						"marketplace_pre_recorded_video_upload_finish": {
							"r": 1
						},
						"marketplace_pre_recorded_video_upload_start": {
							"r": 1
						},
						"marketplace_seo_crawler_page": {
							"r": 1
						},
						"marketplace_structured_composer_post_created": {
							"r": 1
						},
						"marketplace_structured_composer_post_failed": {
							"r": 1
						},
						"marketplace_surface_enter": {
							"r": 1
						},
						"marketplace_surface_exit": {
							"r": 1
						},
						"media_cancelled_post_flow": {
							"r": 1
						},
						"media_failed_post_flow": {
							"r": 1
						},
						"media_finished_post_flow": {
							"r": 1
						},
						"media_started_post_flow": {
							"r": 1
						},
						"media_upload_cancel": {
							"r": 1
						},
						"media_upload_failure": {
							"r": 1
						},
						"media_upload_flow_cancel": {
							"r": 1
						},
						"media_upload_flow_fatal": {
							"r": 1
						},
						"media_upload_flow_giveup": {
							"r": 1
						},
						"media_upload_flow_incomplete": {
							"r": 1
						},
						"media_upload_flow_start": {
							"r": 1
						},
						"media_upload_flow_success": {
							"r": 1
						},
						"media_upload_init_failure": {
							"r": 1
						},
						"media_upload_init_start": {
							"r": 1
						},
						"media_upload_init_success": {
							"r": 1
						},
						"media_upload_process_cancel": {
							"r": 1
						},
						"media_upload_process_failure": {
							"r": 1
						},
						"media_upload_process_skipped": {
							"r": 1
						},
						"media_upload_process_start": {
							"r": 1
						},
						"media_upload_process_success": {
							"r": 1
						},
						"media_upload_start": {
							"r": 1
						},
						"media_upload_success": {
							"r": 1
						},
						"media_upload_transfer_cancel": {
							"r": 1
						},
						"media_upload_transfer_failure": {
							"r": 1
						},
						"media_upload_transfer_start": {
							"r": 1
						},
						"media_upload_transfer_success": {
							"r": 1
						},
						"member_accepted_hcp_historical_content_dialog": {
							"r": 1
						},
						"member_accepted_hcp_message_request": {
							"r": 1
						},
						"member_clicked_hcp_message_profile_button": {
							"r": 1
						},
						"member_clicked_hcp_reply_in_messenger": {
							"r": 1
						},
						"member_continued_hcp_ed_bottom_sheet": {
							"r": 1
						},
						"member_continued_hcp_ed_interstitial": {
							"r": 1
						},
						"member_continued_hcp_messaging_warning": {
							"r": 1
						},
						"member_exited_hcp_ed_interstitial": {
							"r": 1
						},
						"member_exited_hcp_historical_content_dialog": {
							"r": 1
						},
						"member_rejected_hcp_message_request": {
							"r": 1
						},
						"member_saw_hcp_accepted_message": {
							"r": 1
						},
						"member_saw_hcp_ed_bottom_sheet": {
							"r": 1
						},
						"member_saw_hcp_ed_interstitial": {
							"r": 1
						},
						"member_saw_hcp_historical_content_dialog": {
							"r": 1
						},
						"member_saw_hcp_message_request": {
							"r": 1
						},
						"member_saw_hcp_message_request_composer": {
							"r": 1
						},
						"member_saw_hcp_messaging_warning": {
							"r": 1
						},
						"member_sent_hcp_message_request": {
							"r": 1
						},
						"member_typed_hcp_message_request_composer": {
							"r": 1
						},
						"mental_health_hub_click_unit": {
							"r": 1
						},
						"mental_health_hub_select_unit": {
							"r": 1
						},
						"mental_health_hub_view_unit": {
							"r": 1
						},
						"mentorship": {
							"r": 1
						},
						"mentorship_cohort": {
							"r": 1
						},
						"mentorship_user": {
							"r": 1
						},
						"messenger_ads_link_click": {
							"r": 1
						},
						"messenger_ads_link_click_cta": {
							"r": 1
						},
						"messenger_ads_message_seen_inbox": {
							"r": 1
						},
						"messenger_ads_message_seen_thread": {
							"r": 1
						},
						"messenger_business_composer_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_composer_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_faq_setting_add_question_button_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_faq_setting_delete_question_button_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_faq_setting_entry_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_faq_setting_save_question_button_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_faq_setting_turn_on_or_off_messenger_button_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_faq_tip_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_inbox_action_menu_button_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_inbox_action_menu_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_inbox_action_menu_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_menu_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_menu_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_message_send_request": {
							"r": 1,
							"s": 1
						},
						"messenger_business_message_sent_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notif_push_handler_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_extension_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_handle_action_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_intent_handler_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_message_sending_by_quick_action_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_message_sent_by_quick_action_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_tray_action_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_trigger_quick_action_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_notification_wrapper_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_profile_badge_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_snapshot_notification_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_suggested_reply_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_suggested_reply_dismiss": {
							"r": 1,
							"s": 1
						},
						"messenger_business_suggested_reply_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_sync_notification_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_thread_click": {
							"r": 1,
							"s": 1
						},
						"messenger_business_thread_loaded_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_business_thread_update_value": {
							"r": 1,
							"s": 1
						},
						"messenger_business_threadview_impression": {
							"r": 1,
							"s": 1
						},
						"messenger_desktop_promo": {
							"r": 1
						},
						"messenger_integrity_block_facebook_tapped": {
							"r": 1
						},
						"messenger_integrity_unblock_facebook_tapped": {
							"r": 1
						},
						"messenger_integrity_unignore_facebook_failed": {
							"r": 1
						},
						"messenger_integrity_unignore_facebook_succeeded": {
							"r": 1
						},
						"messenger_integrity_unignore_facebook_tapped": {
							"r": 1
						},
						"messenger_interop_reachability_setting_client_interaction": {
							"r": 1
						},
						"messenger_peek_state": {
							"r": 1
						},
						"messenger_pin_thread": {
							"r": 100,
							"s": 1
						},
						"messenger_psuedo_block_warning_dialog_shown": {
							"r": 1
						},
						"messenger_shops_element_click": {
							"r": 1
						},
						"messenger_shops_element_impression": {
							"r": 1
						},
						"messenger_shops_xma_click": {
							"r": 1
						},
						"messenger_shops_xma_render": {
							"r": 1
						},
						"messenger_unignore_failed": {
							"r": 1
						},
						"messenger_unignore_succeeded": {
							"r": 1
						},
						"messenger_unignore_tapped": {
							"r": 1
						},
						"messenger_web_update_emoji_color_event": {
							"r": 1,
							"s": 1
						},
						"mib_message_send": {
							"r": 1
						},
						"microaggressions_highlight": {
							"r": 1
						},
						"mini_shop_element_click": {
							"r": 1
						},
						"mini_shop_element_impression": {
							"r": 1
						},
						"mini_shop_error": {
							"r": 1
						},
						"mini_shop_save_product": {
							"r": 1
						},
						"mini_shop_surface_enter": {
							"r": 1
						},
						"mini_shop_surface_exit": {
							"r": 1
						},
						"mini_shop_unsave_product": {
							"r": 1
						},
						"misinfo_frontend": {
							"r": 1
						},
						"mk_client_event": {
							"r": 1
						},
						"mn_cowatch_rtc_event": {
							"r": 1
						},
						"mn_rtc_cowatch_time_spent": {
							"r": 1
						},
						"mqtt_unified_client_connect": {
							"r": 5000,
							"s": 1
						},
						"mqtt_unified_client_disconnect": {
							"r": 5000,
							"s": 1
						},
						"mqtt_unified_client_incoming_publish": {
							"r": 5000,
							"s": 1
						},
						"mqtt_unified_client_outgoing_publish": {
							"r": 5000,
							"s": 1
						},
						"msite_myanmar_zawgyi_detection": {
							"r": 1000,
							"s": 1
						},
						"news_contributions_lma_donation": {
							"r": 1
						},
						"news_digest_content_impression_event": {
							"r": 1
						},
						"news_digest_outbound_click_event": {
							"r": 1
						},
						"news_digest_primary_click_event": {
							"r": 1
						},
						"news_digest_secondary_click_event": {
							"r": 1
						},
						"news_digest_unit_impression_event": {
							"r": 1
						},
						"notif_list_bottom_collision": {
							"r": 10000
						},
						"notification_permalink_time_spent": {
							"r": 1
						},
						"npe_event": {
							"r": 1
						},
						"npe_test_event": {
							"r": 1,
							"s": 1
						},
						"num_ai_suggestions_bubble_impression": {
							"r": 1,
							"s": 1
						},
						"ob_ccs_submission": {
							"r": 1,
							"s": 1
						},
						"ob_uga_submission": {
							"r": 1,
							"s": 1
						},
						"oc_quick_login_on_oc_browser": {
							"r": 1
						},
						"oculus_dev_web_client_behavior": {
							"r": 1
						},
						"oculus_dev_web_client_debug": {
							"r": 1
						},
						"oculus_experiences_fb_media_pdp": {
							"r": 1
						},
						"oculus_media_studio_client": {
							"r": 1,
							"s": 1
						},
						"oculus_twilight_voice_activity": {
							"r": 10000
						},
						"offer_notifications": {
							"r": 10000
						},
						"onboarding_mobile": {
							"r": 1,
							"s": 1
						},
						"onevc_camera_video_quality_limitation": {
							"r": 1
						},
						"open_charity_beneficiary_selector": {
							"r": 1
						},
						"open_friend_beneficiary_selector": {
							"r": 1
						},
						"open_media": {
							"r": 1
						},
						"open_seen_summary": {
							"r": 1
						},
						"open_story": {
							"r": 1
						},
						"outgoing_request_cancel_click": {
							"r": 1
						},
						"outgoing_request_impression": {
							"r": 1
						},
						"outgoing_request_profile_click": {
							"r": 1
						},
						"outgoing_requests_visitation": {
							"r": 1
						},
						"overlays_tos_accept": {
							"r": 1
						},
						"ownership_integration_event": {
							"r": 1,
							"s": 1
						},
						"ownership_oncall_rotation_schedule_visit": {
							"r": 1
						},
						"ownership_primary_reporting_team_assignment": {
							"r": 1
						},
						"ownership_suggested_actions": {
							"r": 1,
							"s": 1
						},
						"ownership_tab_visit": {
							"r": 1
						},
						"oxsights_report_migration": {
							"r": 1,
							"s": 1
						},
						"page_admin_gypsj": {
							"r": 1,
							"s": 1
						},
						"page_admin_replied": {
							"r": 1
						},
						"page_family_of_apps_link": {
							"r": 1
						},
						"page_family_of_apps_unlink": {
							"r": 1
						},
						"page_give_tab_learn_more_link_tapped": {
							"r": 1
						},
						"page_insights_mobile_exception": {
							"r": 1
						},
						"page_private_reply_action_flow": {
							"r": 1
						},
						"page_whatsapp_linking_syncing": {
							"r": 1
						},
						"pages_composer_composer_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_composer_enter_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_composer_focus_acquired": {
							"r": 1,
							"s": 1
						},
						"pages_composer_composer_focus_lost": {
							"r": 1,
							"s": 1
						},
						"pages_composer_composer_impression": {
							"r": 1,
							"s": 1
						},
						"pages_composer_composer_submit_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_composer_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"pages_composer_composer_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"pages_composer_consolidated_entry_click": {
							"r": 1,
							"s": 1
						},
						"pages_composer_draft_post_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_draft_post_edit_enter_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_draft_post_edit_submit_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_draft_post_enter_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_draft_post_submit_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_draft_reminder_card_impression": {
							"r": 1,
							"s": 1
						},
						"pages_composer_draft_reminder_unit_impression": {
							"r": 1,
							"s": 1
						},
						"pages_composer_footer_setting_button_click": {
							"r": 1,
							"s": 1
						},
						"pages_composer_media_attachment_button_click": {
							"r": 1,
							"s": 1
						},
						"pages_composer_media_attachment_button_impression": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_enter_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_photo_uploader_submit_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_photo_uploader_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_photo_uploader_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_submit_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_submit_flow_failure": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_submit_flow_success": {
							"r": 1,
							"s": 1
						},
						"pages_composer_offer_composer_update_value": {
							"r": 1,
							"s": 1
						},
						"pages_composer_preview_button_click": {
							"r": 1,
							"s": 1
						},
						"pages_composer_schedule_post_cancel_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_schedule_post_enter_flow": {
							"r": 1,
							"s": 1
						},
						"pages_composer_schedule_post_submit_flow": {
							"r": 1,
							"s": 1
						},
						"pages_inbox_impression": {
							"r": 1,
							"s": 1
						},
						"pages_launchpoint_pages_you_manage_click": {
							"r": 1,
							"s": 1
						},
						"pages_launchpoint_view_message_click": {
							"r": 1,
							"s": 1
						},
						"pages_launchpoint_view_notification_click": {
							"r": 1,
							"s": 1
						},
						"pages_message_thread_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_action_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_action_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_address_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_bookmark_launchpoint_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_card_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_card_see_all_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_completion_meter_action_item_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_completion_meter_cta_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_completion_meter_entry_point_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_completion_meter_menu_option_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_completion_meter_menu_option_row_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_cover_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_cover_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_email_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_get_directions_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_like_chaining_unit_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_map_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_message_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_notification_menu_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_photo_album_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_photo_album_create": {
							"r": 1,
							"s": 1
						},
						"pages_page_photo_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_settings_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_similar_pages_trending_posts_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_similar_pages_trending_posts_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_surface_impression": {
							"r": 1,
							"s": 1
						},
						"pages_page_video_click": {
							"r": 1,
							"s": 1
						},
						"pages_page_website_click": {
							"r": 1,
							"s": 1
						},
						"pages_permalink_impression": {
							"r": 1,
							"s": 1
						},
						"partner_home_error_boundary": {
							"r": 1,
							"s": 1
						},
						"partner_home_favorite_org": {
							"r": 1
						},
						"partner_home_lookup_asset": {
							"r": 1
						},
						"partner_home_page_hit": {
							"r": 1
						},
						"partner_home_unfavorite_org": {
							"r": 1
						},
						"partner_home_view_partner": {
							"r": 1
						},
						"partner_home_work_chat_clicked": {
							"r": 1
						},
						"paycheck_protection_program_engagement": {
							"r": 1
						},
						"payments_flows_log": {
							"r": 1,
							"s": 1
						},
						"people_you_may_follow": {
							"r": 1
						},
						"perf": {
							"r": 1,
							"s": 1
						},
						"personalized_privacy_education_events": {
							"r": 1,
							"s": 1
						},
						"pfh_integration_event": {
							"r": 1,
							"s": 1
						},
						"photo_review_photo_render_event": {
							"r": 1
						},
						"photo_review_user_engagement_event": {
							"r": 1
						},
						"pii_action_flow": {
							"r": 1
						},
						"pinned_comment_event": {
							"r": 1,
							"s": 1
						},
						"play_inline_media": {
							"r": 1
						},
						"pmv_interruptions_events": {
							"r": 1
						},
						"political_ads_infosheet": {
							"r": 1
						},
						"portfolio_pgf_feature_usage": {
							"r": 10000
						},
						"post_debugger_usage": {
							"r": 1
						},
						"power_search_results_shown": {
							"r": 1
						},
						"preventive_health_client_event": {
							"r": 1,
							"s": 1
						},
						"price_outlier_adoption": {
							"r": 1
						},
						"price_outlier_score_available": {
							"r": 1
						},
						"price_outlier_warning_available": {
							"r": 1
						},
						"price_range_adoption": {
							"r": 1
						},
						"price_range_available": {
							"r": 1
						},
						"prim_action_flow": {
							"r": 1
						},
						"privacy_checkup_event": {
							"r": 1
						},
						"privacy_shortcuts": {
							"r": 1,
							"s": 1
						},
						"product_tag_ai_accept_high_confidence_suggestion_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_apux_dialog_click_button": {
							"r": 1,
							"s": 1
						},
						"product_tag_apux_dialog_close": {
							"r": 1,
							"s": 1
						},
						"product_tag_apux_dialog_impression": {
							"r": 1,
							"s": 1
						},
						"product_tag_catalog_typeahead_consecutive_backspace": {
							"r": 1,
							"s": 1
						},
						"product_tag_catalog_typeahead_escape": {
							"r": 1,
							"s": 1
						},
						"product_tag_catalog_typeahead_select_catalog": {
							"r": 1,
							"s": 1
						},
						"product_tag_composer_icon_click_null_state": {
							"r": 1,
							"s": 1
						},
						"product_tag_composer_icon_click_photo_redirect": {
							"r": 1,
							"s": 1
						},
						"product_tag_composer_icon_click_video_redirect": {
							"r": 1,
							"s": 1
						},
						"product_tag_composer_photo_hover_product_icon_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_create_post_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_page_home_insights_card_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_page_home_insights_card_imp": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_post_detail_imp": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_post_inline_metrics_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_post_inline_metrics_imp": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_tagged_post_tab_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_tagged_posts_section_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_insights_tagged_products_section_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_null_state_close_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_null_state_photo_redirect": {
							"r": 1,
							"s": 1
						},
						"product_tag_null_state_upload_button_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_null_state_upload_error": {
							"r": 1,
							"s": 1
						},
						"product_tag_null_state_video_redirect": {
							"r": 1,
							"s": 1
						},
						"product_tag_page_composer_suggestion_tooltip_impression": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_click_to_tag": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_product_suggestion_high_confidence_impression": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_product_suggestion_low_confidence_impression": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_remove_product_tag": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_save_tags": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_suggestion_define_low_confidence_product_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_suggestion_remove_product_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_editor_tab_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_viewer_done_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_viewer_icon_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_photo_viewer_open_typeahead_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_post_click": {
							"r": 1
						},
						"product_tag_post_detail_insights_click": {
							"r": 1,
							"s": 1
						},
						"product_tag_tokenizer_select_product": {
							"r": 1,
							"s": 1
						},
						"product_tag_typeahead_consecutive_backspace": {
							"r": 1,
							"s": 1
						},
						"product_tag_typeahead_escape": {
							"r": 1,
							"s": 1
						},
						"product_tag_typeahead_select_product": {
							"r": 1,
							"s": 1
						},
						"product_tag_typeahead_sort_by_alphabetical_asc": {
							"r": 1,
							"s": 1
						},
						"product_tag_typeahead_sort_by_price_asc": {
							"r": 1,
							"s": 1
						},
						"product_tag_typeahead_sort_by_recent": {
							"r": 1,
							"s": 1
						},
						"product_tagging_ai_evaluation": {
							"r": 1
						},
						"profile_engagement": {
							"r": 1
						},
						"profile_engagement_dating_event": {
							"r": 1
						},
						"profile_plus_admin_activities": {
							"r": 1,
							"s": 1
						},
						"profile_plus_cross_profile_notification": {
							"r": 1
						},
						"profile_plus_insights_events": {
							"r": 1
						},
						"promote_listing_cta": {
							"r": 1
						},
						"prompt_text_exceeds_char_limit": {
							"r": 1,
							"s": 1
						},
						"proton_lint": {
							"r": 1,
							"s": 1
						},
						"public_connections_notif_jewel": {
							"r": 1,
							"s": 1
						},
						"pyma_click": {
							"r": 1
						},
						"pyma_impression": {
							"r": 1
						},
						"pymk_add": {
							"r": 1
						},
						"pymk_imp": {
							"r": 1
						},
						"pymk_profile": {
							"r": 1
						},
						"pymk_xout": {
							"r": 1
						},
						"qe_metric_ranking_usage_logs": {
							"r": 1,
							"s": 1
						},
						"qp_action": {
							"r": 1
						},
						"qp_client_logs": {
							"r": 1
						},
						"qp_impression": {
							"r": 1
						},
						"quilt_try_it_cta": {
							"r": 1,
							"s": 1
						},
						"real_estate_features_usage": {
							"r": 1,
							"s": 1
						},
						"realtime_frameworks_counter": {
							"r": 100,
							"s": 1
						},
						"recoil_usage_log": {
							"r": 1,
							"s": 1
						},
						"redblock": {
							"r": 1,
							"s": 1
						},
						"regular_pymk_add": {
							"r": 1
						},
						"regular_pymk_imp": {
							"r": 1
						},
						"regular_pymk_profile": {
							"r": 1
						},
						"regular_pymk_xout": {
							"r": 1
						},
						"remove_collaborative_post_attachment": {
							"r": 1,
							"s": 1
						},
						"remove_collaborative_post_initial_contribution": {
							"r": 1,
							"s": 1
						},
						"reposition_cover_photo": {
							"r": 1
						},
						"request_click": {
							"r": 1
						},
						"request_seen": {
							"r": 1
						},
						"reshare_warning_bottom_sheet_close": {
							"r": 1
						},
						"reshare_warning_bottom_sheet_open": {
							"r": 1
						},
						"reshare_warning_cancel_click": {
							"r": 1
						},
						"reshare_warning_continue_click": {
							"r": 1
						},
						"reshare_warning_other_click": {
							"r": 1
						},
						"resource_center_state_change": {
							"r": 1
						},
						"rhc_friend_request_seen": {
							"r": 1
						},
						"ri_transparency_pigeon_event": {
							"r": 1
						},
						"rights_manager_copyright_banner_viewed": {
							"r": 1
						},
						"rights_manager_interaction": {
							"r": 100,
							"s": 1
						},
						"robotics_ui_events": {
							"r": 1,
							"s": 1
						},
						"room_activity_tap": {
							"r": 1
						},
						"room_app_switch_tap": {
							"r": 1
						},
						"room_audience_mode_tap": {
							"r": 1
						},
						"room_button_tap": {
							"r": 1
						},
						"room_call_tap": {
							"r": 1
						},
						"room_cancel_tap": {
							"r": 1
						},
						"room_card_impression": {
							"r": 1
						},
						"room_card_long_press_menu_sheet_impression": {
							"r": 1
						},
						"room_card_long_press_menu_sheet_tap": {
							"r": 1
						},
						"room_card_tap": {
							"r": 1
						},
						"room_copy_link_tap": {
							"r": 1
						},
						"room_create_tap": {
							"r": 1
						},
						"room_create_tap_shadow": {
							"r": 1
						},
						"room_create_update_failure": {
							"r": 1
						},
						"room_creation_fail": {
							"r": 1
						},
						"room_creation_flow_start": {
							"r": 1
						},
						"room_creation_flow_success": {
							"r": 1
						},
						"room_description_sheet_impression": {
							"r": 1
						},
						"room_dialog_impression": {
							"r": 1
						},
						"room_dismiss_sheet": {
							"r": 1
						},
						"room_does_not_exist_view_impression": {
							"r": 1
						},
						"room_empty_card_sheet_button_tap": {
							"r": 1
						},
						"room_empty_card_sheet_impression": {
							"r": 1
						},
						"room_end_tap": {
							"r": 1
						},
						"room_external_link_share_tap": {
							"r": 1
						},
						"room_group_room_list_view_impression": {
							"r": 1
						},
						"room_group_room_list_view_item_tap": {
							"r": 1
						},
						"room_group_room_rhc_impression": {
							"r": 1
						},
						"room_interest_tap": {
							"r": 1
						},
						"room_invite_friends_impression": {
							"r": 1
						},
						"room_join_button_impression": {
							"r": 1,
							"s": 1
						},
						"room_join_permission_denied": {
							"r": 1
						},
						"room_join_tap": {
							"r": 1
						},
						"room_join_tap_zr": {
							"r": 1
						},
						"room_join_tap_zr_interstitial": {
							"r": 1
						},
						"room_lobby_grouped_join_requests_section_impression": {
							"r": 1,
							"s": 1
						},
						"room_lobby_join_requests_section_impression": {
							"r": 1,
							"s": 1
						},
						"room_lobby_participants_update": {
							"r": 1,
							"s": 1
						},
						"room_lobby_sheet_impression": {
							"r": 1
						},
						"room_lobby_subscribe_to_participants_update": {
							"r": 1,
							"s": 1
						},
						"room_login_fb_account_prompt_sheet_impression": {
							"r": 1
						},
						"room_login_fb_account_success_sheet_impression": {
							"r": 1
						},
						"room_login_fb_client_link_prompt_sheet_impression": {
							"r": 1
						},
						"room_login_fb_client_link_start": {
							"r": 1
						},
						"room_login_fb_client_link_success": {
							"r": 1
						},
						"room_management_options_sheet_impression": {
							"r": 1
						},
						"room_management_options_sheet_tap": {
							"r": 1
						},
						"room_management_sheet_impression": {
							"r": 1
						},
						"room_message_tap": {
							"r": 1
						},
						"room_promotion_unit_impression": {
							"r": 1
						},
						"room_promotion_unit_tap": {
							"r": 1
						},
						"room_regen_link_tap": {
							"r": 1
						},
						"room_schedule_tap": {
							"r": 1
						},
						"room_screen_sharing_tap": {
							"r": 1
						},
						"room_self_card_button_tap": {
							"r": 1
						},
						"room_self_card_tap": {
							"r": 1
						},
						"room_setting_sheet_content_tap": {
							"r": 1
						},
						"room_setting_sheet_impression": {
							"r": 1
						},
						"room_share_sheet_impression": {
							"r": 1
						},
						"room_share_tap": {
							"r": 1
						},
						"room_skip_tap": {
							"r": 1
						},
						"room_style_tap": {
							"r": 1
						},
						"room_tab_impression": {
							"r": 1
						},
						"room_tray_impression": {
							"r": 1
						},
						"room_tray_scroll": {
							"r": 1
						},
						"room_tray_tap": {
							"r": 1
						},
						"room_update_tap": {
							"r": 1
						},
						"rooms_chat_user_actions": {
							"r": 1
						},
						"rp_web_infra_actions_logger_event": {
							"r": 1,
							"s": 1
						},
						"rtc_call_action": {
							"r": 1
						},
						"rtc_infra_reliability": {
							"r": 1,
							"s": 1
						},
						"rtc_web_user_actions": {
							"r": 1,
							"s": 1
						},
						"rtc_web_user_actions_debug": {
							"r": 1,
							"s": 1
						},
						"rti_request_stream_pulsar_client": {
							"r": 1
						},
						"sandwich_survey": {
							"r": 1,
							"s": 1
						},
						"save_click": {
							"r": 1
						},
						"save_fundraiser_draft": {
							"r": 1
						},
						"save_item_impression": {
							"r": 1
						},
						"save_surface_impression": {
							"r": 1
						},
						"saved_collection_ego_item_image_clicked": {
							"r": 1
						},
						"saved_dashboard_imp": {
							"r": 1
						},
						"saved_dashboard_list_landing_imp": {
							"r": 1
						},
						"saved_hcp_note": {
							"r": 1
						},
						"saved_see_all_lists_view_imp": {
							"r": 1
						},
						"sbg_boost_up_qe_debug": {
							"r": 1,
							"s": 1
						},
						"sc_audio_messages_event": {
							"r": 1
						},
						"sc_user_activity": {
							"r": 1,
							"s": 1
						},
						"scp_event": {
							"r": 1
						},
						"search_charities": {
							"r": 1
						},
						"search_result_page_logging_inline_action": {
							"r": 1
						},
						"search_result_page_logging_item_clicked": {
							"r": 1
						},
						"search_result_page_logging_results_loaded": {
							"r": 1
						},
						"search_result_page_logging_viewport_view": {
							"r": 1
						},
						"search_results_logging_module_unit_data": {
							"r": 1
						},
						"search_results_logging_result_unit_data": {
							"r": 1
						},
						"search_typeahead_logging_session": {
							"r": 1
						},
						"selfharm_promotion_option_clicked": {
							"r": 1
						},
						"send_story_post_failed_notification": {
							"r": 1
						},
						"services_consumer_client_side_events": {
							"r": 1
						},
						"services_consumer_sensitive_events": {
							"r": 1
						},
						"services_local_business_online_events_falco_event": {
							"r": 1
						},
						"services_social_rex_cross_post_client_events": {
							"r": 1
						},
						"set_fundraiser_draft": {
							"r": 1
						},
						"sextortion_victim_support_option_clicked": {
							"r": 1
						},
						"share_dialog_unified_composer": {
							"r": 1
						},
						"share_nonprofit_post": {
							"r": 1
						},
						"shift_cover_coverage_button_clicked": {
							"r": 1
						},
						"shift_cover_detail_screen_opened": {
							"r": 1
						},
						"shift_cover_message_button_clicked": {
							"r": 1
						},
						"shops_ads_data_use_user_events": {
							"r": 1,
							"s": 1
						},
						"shops_sharing_tools_seller_side_logging": {
							"r": 1,
							"s": 1
						},
						"sims_infra_ops_alert_command": {
							"r": 1,
							"s": 1
						},
						"sims_map_node": {
							"r": 1
						},
						"sims_search": {
							"r": 1
						},
						"sims_ui_event": {
							"r": 1
						},
						"sims_vm_command": {
							"r": 1
						},
						"single_key_shortcuts_disabled": {
							"r": 1,
							"s": 1
						},
						"skewer_click": {
							"r": 1
						},
						"smart_compose_candidates_generated": {
							"r": 1
						},
						"smart_compose_candidates_queried": {
							"r": 1
						},
						"smart_compose_matching_suggestion": {
							"r": 1
						},
						"smart_compose_suggestion_clicked": {
							"r": 1
						},
						"smart_compose_suggestion_displayed": {
							"r": 1
						},
						"smart_keyboard_suggestion_displayed": {
							"r": 1
						},
						"smbas_marketing_expert_event": {
							"r": 1,
							"s": 1
						},
						"social_vr_user_action_web": {
							"r": 1,
							"s": 1
						},
						"social_wifi_config_event": {
							"r": 1,
							"s": 1
						},
						"spf": {
							"r": 1,
							"s": 1
						},
						"sponsored_story_view_hierarchy": {
							"r": 1
						},
						"sticker_store": {
							"r": 100,
							"s": 1
						},
						"stonehenge_account_linking_screen_confirm_click": {
							"r": 1
						},
						"stonehenge_account_linking_screen_dismiss_click": {
							"r": 1
						},
						"stonehenge_account_linking_screen_impression": {
							"r": 1
						},
						"stonehenge_account_linking_screen_unlink_click": {
							"r": 1
						},
						"stonehenge_cta_click": {
							"r": 1
						},
						"stonehenge_cta_impression": {
							"r": 1
						},
						"stonehenge_digest_appear": {
							"r": 1
						},
						"stonehenge_digest_article_click": {
							"r": 1
						},
						"stonehenge_digest_disappear": {
							"r": 1
						},
						"stonehenge_digest_header_click": {
							"r": 1
						},
						"stonehenge_digest_impression": {
							"r": 1
						},
						"stonehenge_digest_see_more_click": {
							"r": 1
						},
						"stonehenge_settings_screen_impression": {
							"r": 1
						},
						"stonehenge_settings_unlink_click": {
							"r": 1
						},
						"stonehenge_welcome_screen_impression": {
							"r": 1
						},
						"stonehenge_welcome_unlink_click": {
							"r": 1
						},
						"stories_interactive_feedback": {
							"r": 1
						},
						"story_card_impression": {
							"r": 1
						},
						"story_card_timespent": {
							"r": 1
						},
						"story_header_follow_profile": {
							"r": 1
						},
						"story_interactive_item_click": {
							"r": 1
						},
						"story_interactive_item_rendering": {
							"r": 1
						},
						"story_level_cta_event": {
							"r": 1,
							"s": 1
						},
						"story_media_view": {
							"r": 1
						},
						"story_navigation": {
							"r": 1
						},
						"story_profile_impression": {
							"r": 1
						},
						"streaming_sdk_engine_log": {
							"r": 1
						},
						"streaming_sdk_event": {
							"r": 1
						},
						"streaming_sdk_heartbeat": {
							"r": 1
						},
						"streaming_sdk_metadata": {
							"r": 1
						},
						"streaming_sdk_session_summary": {
							"r": 1
						},
						"string_manager_click": {
							"r": 1,
							"s": 1
						},
						"string_manager_exit": {
							"r": 1,
							"s": 1
						},
						"string_manager_opt_out": {
							"r": 1,
							"s": 1
						},
						"string_manager_page_load": {
							"r": 1,
							"s": 1
						},
						"suicidal_admission_support_option_clicked": {
							"r": 1
						},
						"suicidal_promotion_option_clicked": {
							"r": 1
						},
						"supplier_connect_quotes": {
							"r": 1,
							"s": 1
						},
						"support_reaction_interstitial_impression": {
							"r": 1
						},
						"support_reaction_interstitial_okay_pressed": {
							"r": 1
						},
						"survey_platform_simon_tool_event": {
							"r": 1,
							"s": 1
						},
						"swipe_collaborative_post_card": {
							"r": 1
						},
						"talent_scout_click": {
							"r": 1
						},
						"talent_scout_create_form": {
							"r": 1
						},
						"talent_scout_impression": {
							"r": 1
						},
						"tap_add_to_pages_story": {
							"r": 1
						},
						"tap_collaborative_post_card": {
							"r": 1
						},
						"tap_collaborative_post_card_author_info": {
							"r": 1
						},
						"tap_nonprofit_post": {
							"r": 1
						},
						"tap_select_page": {
							"r": 1
						},
						"task_plugin_load_logger": {
							"r": 10000
						},
						"task_similarity_plugin_logger": {
							"r": 10000
						},
						"tdui_upload_modal": {
							"r": 10000
						},
						"tdui_usage": {
							"r": 10000
						},
						"ufi_share_menu_copy_link": {
							"r": 1
						},
						"ufix_ig_ixt_trigger": {
							"r": 1,
							"s": 1
						},
						"ufix_ixt_trigger": {
							"r": 1,
							"s": 1
						},
						"ufix_reshare_warning_bottom_sheet_close": {
							"r": 1,
							"s": 1
						},
						"ufix_reshare_warning_cancel": {
							"r": 1,
							"s": 1
						},
						"ufix_reshare_warning_continue": {
							"r": 1,
							"s": 1
						},
						"ui_feature_confirmation_confirm": {
							"r": 1
						},
						"ui_feature_confirmation_dismiss": {
							"r": 1
						},
						"ui_feature_confirmation_failure_actionable": {
							"r": 1
						},
						"ui_feature_confirmation_failure_actionable_dismiss": {
							"r": 1
						},
						"ui_feature_confirmation_failure_unactionable": {
							"r": 1
						},
						"ui_feature_confirmation_ig_login_failure": {
							"r": 1
						},
						"ui_feature_confirmation_ig_login_start": {
							"r": 1
						},
						"ui_feature_confirmation_ig_login_success": {
							"r": 1
						},
						"ui_feature_confirmation_start": {
							"r": 1
						},
						"ui_feature_confirmation_success": {
							"r": 1
						},
						"ui_feature_confirmation_try_again": {
							"r": 1
						},
						"ui_feature_permission_disclosure_alert_click": {
							"r": 1
						},
						"ui_feature_permission_disclosure_alert_start": {
							"r": 1
						},
						"uim_search_request": {
							"r": 1,
							"s": 1
						},
						"unified_interception_intercept_accept": {
							"r": 1,
							"s": 1
						},
						"unified_interception_intercept_create": {
							"r": 1,
							"s": 1
						},
						"unified_interception_intercept_reject": {
							"r": 1,
							"s": 1
						},
						"unified_interception_intercept_undo": {
							"r": 1,
							"s": 1
						},
						"upgrade_to_collaborative_post": {
							"r": 1
						},
						"upload_cover_photo": {
							"r": 1
						},
						"used_js_modules": {
							"r": 1,
							"s": 1
						},
						"user_click_credential_atomic": {
							"r": 1,
							"s": 1
						},
						"user_pay_news": {
							"r": 1
						},
						"vehicle_entity_page_user_action_event": {
							"r": 1
						},
						"video_action_source_event": {
							"r": 1
						},
						"video_composer_dialog_ui": {
							"r": 1,
							"s": 1
						},
						"video_cue_generic": {
							"r": 1
						},
						"video_search_relevancy_feedback": {
							"r": 1
						},
						"video_sharing_option_clicked": {
							"r": 1
						},
						"video_sharing_option_impression": {
							"r": 1
						},
						"video_sharing_permalink_landing": {
							"r": 1
						},
						"vidwalla_live_producer_graphics_overlay_url_copied": {
							"r": 1
						},
						"vidwalla_live_producer_graphics_package_selected": {
							"r": 1
						},
						"vidwalla_live_producer_graphics_workbench_tab_mounted": {
							"r": 1
						},
						"vidwalla_live_producer_obs_link_dragged": {
							"r": 1
						},
						"view_beneficiary_selector": {
							"r": 1
						},
						"view_collaborative_post_card": {
							"r": 1
						},
						"view_collaborative_post_sentence_fragment_sheet": {
							"r": 1,
							"s": 1
						},
						"view_create_outro_dialog": {
							"r": 1
						},
						"view_fundraiser": {
							"r": 1
						},
						"view_location_details_entry_point": {
							"r": 1,
							"s": 1
						},
						"view_name_change_details": {
							"r": 1,
							"s": 1
						},
						"view_name_change_details_entry_point": {
							"r": 1,
							"s": 1
						},
						"view_stripe_kyc_onboarding_screen": {
							"r": 1
						},
						"view_transparency": {
							"r": 1,
							"s": 1
						},
						"view_transparency_entry_point": {
							"r": 1,
							"s": 1
						},
						"viewed_hcp_note": {
							"r": 1
						},
						"viewed_hcp_stats": {
							"r": 1
						},
						"vod_pnc_messenger_cta_click": {
							"r": 1
						},
						"vod_pnc_people_sheet_impression": {
							"r": 1
						},
						"vod_pnc_people_sheet_thumbnail_impression": {
							"r": 1
						},
						"vod_pnc_see_all_reactions_click": {
							"r": 1
						},
						"voice_search_settings_page": {
							"r": 1,
							"s": 1
						},
						"voice_switcher_change_voice": {
							"r": 1,
							"s": 1
						},
						"voice_switcher_visible": {
							"r": 1,
							"s": 1
						},
						"volunteering_click_unit": {
							"r": 1
						},
						"volunteering_view_page": {
							"r": 1
						},
						"volunteering_view_unit": {
							"r": 1
						},
						"voodoo_request": {
							"r": 1,
							"s": 1
						},
						"voter_registration_attachment_tap_change_state": {
							"r": 1
						},
						"voter_registration_post_impression": {
							"r": 1
						},
						"voter_registration_post_tap_register": {
							"r": 1
						},
						"voter_registration_qp_tap_edit_location": {
							"r": 1
						},
						"voter_registration_state_selector_tap_state": {
							"r": 1
						},
						"was_live_deletion_event": {
							"r": 1
						},
						"wayfinder_mapbox_data_load": {
							"r": 1,
							"s": 1
						},
						"weather_bookmark_forecast_scrolled": {
							"r": 1
						},
						"weather_bookmark_impression": {
							"r": 1
						},
						"weather_bookmark_scroll_forecast": {
							"r": 1
						},
						"weather_bookmark_settings_tapped": {
							"r": 1
						},
						"weather_bookmark_tap_city_tab": {
							"r": 1
						},
						"weather_bookmark_tap_future_day": {
							"r": 1
						},
						"weather_bookmark_tap_hourly_forecast": {
							"r": 1
						},
						"weather_bookmark_tap_nowcast": {
							"r": 1
						},
						"weather_daily_notifications_mutation_error": {
							"r": 1
						},
						"weather_daily_notifications_turned_off": {
							"r": 1
						},
						"weather_daily_notifications_turned_on": {
							"r": 1
						},
						"weather_live_alerts_mutation_error": {
							"r": 1
						},
						"weather_live_alerts_turned_off": {
							"r": 1
						},
						"weather_live_alerts_turned_on": {
							"r": 1
						},
						"weather_settings_add_city": {
							"r": 1
						},
						"weather_settings_daily_notification_use_current_location": {
							"r": 1
						},
						"weather_settings_delete_city": {
							"r": 1
						},
						"weather_settings_error_state_dismissed": {
							"r": 1
						},
						"weather_settings_error_state_fixed": {
							"r": 1
						},
						"weather_settings_impression": {
							"r": 1
						},
						"weather_settings_notification_location_tapped": {
							"r": 1
						},
						"weather_settings_tap_city_row": {
							"r": 1
						},
						"weather_settings_temperature_unit_changed": {
							"r": 1
						},
						"web_comment_composer_interaction_tracking_comment_submitted": {
							"r": 1,
							"s": 1
						},
						"webauthn_authenticator_login_failure": {
							"r": 1
						},
						"webauthn_authenticator_login_success": {
							"r": 1
						},
						"webauthn_authenticator_register_failure": {
							"r": 1
						},
						"webauthn_authenticator_register_success": {
							"r": 1
						},
						"whats_app_rooms_logged_out_actions_event": {
							"r": 1
						},
						"why_covered_ccs_link_followed": {
							"r": 1
						},
						"why_covered_ccs_snippet_viewed": {
							"r": 1
						},
						"why_covered_error_generating_cms": {
							"r": 1
						},
						"why_covered_how_snippet_viewed": {
							"r": 1
						},
						"work_activation_vc_rooms_landing_page_chat_channel_item_dismiss": {
							"r": 1
						},
						"work_activation_vc_rooms_landing_page_entity_impression": {
							"r": 1
						},
						"work_admin_workplace_for_good_verification_events": {
							"r": 1,
							"s": 1
						},
						"work_all_hands_video_analytics": {
							"r": 1,
							"s": 1
						},
						"work_global_create_menu": {
							"r": 1
						},
						"work_hedge_highlight": {
							"r": 10000
						},
						"work_meeting": {
							"r": 1
						},
						"work_meeting_assistant_logger_events": {
							"r": 1,
							"s": 1
						},
						"work_navigation": {
							"r": 1,
							"s": 1
						},
						"work_platform_login_oauth_event": {
							"r": 1
						},
						"work_plugin": {
							"r": 1
						},
						"work_redblock": {
							"r": 100,
							"s": 1
						},
						"work_rooms_www_picture_in_picture": {
							"r": 1,
							"s": 1
						},
						"work_safety_client_error": {
							"r": 1
						},
						"work_thanks_mobile_ui_confirm_button_clicked": {
							"r": 1
						},
						"work_thanks_mobile_ui_dialog_opened": {
							"r": 1
						},
						"work_video_recommendations_events": {
							"r": 1,
							"s": 1
						},
						"work_web_signup_flow_change": {
							"r": 1
						},
						"work_web_signup_flow_click": {
							"r": 1
						},
						"work_web_signup_flow_focus": {
							"r": 1
						},
						"work_web_signup_flow_view": {
							"r": 1
						},
						"workbench_all_events": {
							"r": 1,
							"s": 1
						},
						"workplace_settings_nub_click": {
							"r": 1,
							"s": 1
						},
						"workstream_log_event": {
							"r": 1,
							"s": 1
						},
						"www_comet_video_autoplay": {
							"r": 10000
						},
						"xwf_partner_alerts": {
							"r": 1,
							"s": 1
						},
						"zenon_redblock": {
							"r": 1,
							"s": 1
						}
					}
				}, 5519],
				["TimeSliceInteractionSV", [], {
					"on_demand_reference_counting": true,
					"on_demand_profiling_counters": true,
					"default_rate": 1000,
					"lite_default_rate": 100,
					"interaction_to_lite_coinflip": {
						"ADS_INTERFACES_INTERACTION": 0,
						"ads_perf_scenario": 0,
						"ads_wait_time": 0,
						"Event": 1
					},
					"interaction_to_coinflip": {
						"ADS_INTERFACES_INTERACTION": 1,
						"ads_perf_scenario": 1,
						"ads_wait_time": 1,
						"Event": 100
					},
					"enable_heartbeat": true,
					"maxBlockMergeDuration": 0,
					"maxBlockMergeDistance": 0,
					"enable_banzai_stream": true,
					"user_timing_coinflip": 50,
					"banzai_stream_coinflip": 1,
					"compression_enabled": true,
					"ref_counting_fix": false,
					"ref_counting_cont_fix": false,
					"also_record_new_timeslice_format": false,
					"force_async_request_tracing_on": false
				}, 2609],
				["cr:983844", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1072546", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1072547", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1072549", [], {
					"__rc": [null, "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1011783", ["CometHeroInteractionImpl.react"], {
					"__rc": ["CometHeroInteractionImpl.react", "Aa1T1oHgb3k_9k6SCz_uECs_veGS0Wn52dSaOdqXW1V2udYOd9jrzi5U2NKp5PyMpS1-6Qgg4Q0"]
				}, -1],
				["cr:1292365", ["React-prod.classic"], {
					"__rc": ["React-prod.classic", "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1344485", ["ReactDOM.classic.prod-or-profiling"], {
					"__rc": ["ReactDOM.classic.prod-or-profiling", "Aa2LdoWEXNuKuJXZDextWUMavxllxHAh_aX91gxa-Q1ijzxaS82wNLNiEwyniZBrg-Uuegj2_pVuLA"]
				}, -1],
				["cr:1209197", [], {
					"__rc": [null, "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1209198", ["RunComet"], {
					"__rc": ["RunComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:692209", ["cancelIdleCallbackComet"], {
					"__rc": ["cancelIdleCallbackComet", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1268629", ["setTimeoutCometLoggingPri"], {
					"__rc": ["setTimeoutCometLoggingPri", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1268630", ["setTimeoutCometSpeculative"], {
					"__rc": ["setTimeoutCometSpeculative", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1707461", ["LoggedInFBBuildRoot"], {
					"__rc": ["LoggedInFBBuildRoot", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["CometDarkModeSetting", [], {
					"initialSetting": "DISABLED"
				}, 4414],
				["VideoPlayerPrefetchExperiments", [], {
					"maxPrefetchVideosNum": 0,
					"consolidateFragmentedPrefetchRequest": false,
					"fixPrefetchCacheAbort": true,
					"disablePrefetchCache": false,
					"enableGlobalSchedulerForPrefetch": false,
					"prefetchPriority": 1,
					"disableShakaBandwidthEstimator": true,
					"switchPrefetchTaskToHighPriWhenPlayed": false,
					"useFetch": true
				}, 2906],
				["BanzaiConfig", [], {
					"MAX_SIZE": 10000,
					"MAX_WAIT": 150000,
					"RESTORE_WAIT": 150000,
					"blacklist": ["time_spent"],
					"gks": {
						"boosted_pagelikes": true,
						"mercury_send_error_logging": true,
						"platform_oauth_client_events": true,
						"visibility_tracking": true,
						"graphexplorer": true,
						"sticker_search_ranking": true
					}
				}, 7],
				["BanzaiDataConfig", [], {
					"ROUTE_LIMIT": 2000,
					"DATA_LIMIT": 20000
				}, 4370],
				["cr:1031180", [], {
					"__rc": [null, "Aa1XFdoSohKqRHNE2ZybOSaG3eeN8Sg-_DEKoK7VsLLS8GoWYYk3rue0fUAWcSsDYao62aXQSC58V_4DDfoXIQ"]
				}, -1],
				["cr:1344486", ["ReactDOM.classic.prod"], {
					"__rc": ["ReactDOM.classic.prod", "Aa0trt0m0t1jzCmfqUjLkPJnwqI95I_nC19hF8em8dmyM1gbzc9lQt7eD-8HYjBGFgk73w6C35hCJl9ZaPELVwdtURGq2g"]
				}, -1],
				["cr:881053", [], {
					"__rc": [null, "Aa3UB2khpldL5KIZKSB4Bi_JK2UCmn0HeaN_N4Ix58cpXxZibnsKa5n_7pz8NcQyzb1wQ8BjWH38lA"]
				}, -1],
				["cr:919864", [], {
					"__rc": [null, "Aa01F-EsFVSydpneOGssnzSft39HiOXQ8DGLd2gq63knnmoB3bCG3xwRajjQ8Vmm5GZyJ2IrV4hKov4"]
				}, -1],
				["cr:956931", ["useCometPrerendererImpl"], {
					"__rc": ["useCometPrerendererImpl", "Aa1x83yr0LdQim57VumyR3pN2kSxC8NuJhnbUsZREH53MSUTbmPnHu3GQlqWJfIYKoid9ofagLCaKrVw_nw1XqWM4fGkUoc"]
				}, -1],
				["cr:980962", ["emptyFunction"], {
					"__rc": ["emptyFunction", "Aa3Mj5iUvF9TJ1G2ScQHKaMSCB8B6LO94-WbnThkK-vCrRvUMbe5vdgapv7Qns1FOIV61Nciag"]
				}, -1],
				["cr:992073", [], {
					"__rc": [null, "Aa0zygeJ6OHOg19SrCuHhAO8YxDh-SAqw05f3xushAOfx0BbcE_KOprUXgauBlRiPTgfJkzQ16ON9om0n0Dz_xxtxzXJ"]
				}, -1],
				["cr:1032515", ["CometJSSemPixelsContainerWrapper.react"], {
					"__rc": ["CometJSSemPixelsContainerWrapper.react", "Aa1FacS5E4eImHm_YZuN6jfFIi-TWNEcUrcjf4cZUrJsb45goA4ygXq-DbiPuFHsLJrfF8MORu53oKE"]
				}, -1],
				["cr:1069930", ["cometAsyncFetch"], {
					"__rc": ["cometAsyncFetch", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1083116", [], {
					"__rc": [null, "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1083117", ["recoverableViolation"], {
					"__rc": ["recoverableViolation", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1119068", [], {
					"__rc": [null, "Aa13kBJOYQ2NYS2a56RRDzd_8HNK9vDWiq1PomEJfAc7Me7u0nzt-0Lu08WaTQF7pzjLVr6rcNi6vqkOOAGAMA"]
				}, -1],
				["cr:1266079", ["CometNotificationsDropdownTrigger.react"], {
					"__rc": ["CometNotificationsDropdownTrigger.react", "Aa2Q_VE_HzXX3AdluXVIZP9AF4mlLMwDoYYcuBMnbSTWaafzMcAXjSFyEHV64hjXwWJ4jf5ypAy1mpP_t_0BU3uK5sqkB0a2eK40Cw"]
				}, -1],
				["cr:1273258", [], {
					"__rc": [null, "Aa1HrzKLk_pMkApWHNoxLk--8I7bznjGsQmCuski-4QU_c48emluLynZdlPEqnT6ijZfMHBSAWniddMI5KyPwcnzfkdvDBVxOzCy"]
				}, -1],
				["cr:1427198", [], {
					"__rc": [null, "Aa3g0stZk7F5V0mwDatwb75EL7ALeccxNUkZq-FjwBaxd7iQub_-jOFhVJcMY1RDuhdsuL6q0mJ_fZHYusaMKrzTvOUGyvOLzIqk3V43_x7KG6TJKg"]
				}, -1],
				["cr:1434325", ["CometRouteRootWrapper.react"], {
					"__rc": ["CometRouteRootWrapper.react", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["cr:1448738", ["CometHomeCreateJewel.react"], {
					"__rc": ["CometHomeCreateJewel.react", "Aa2Q_VE_HzXX3AdluXVIZP9AF4mlLMwDoYYcuBMnbSTWaafzMcAXjSFyEHV64hjXwWJ4jf5ypAy1mpP_t_0BU3uK5sqkB0a2eK40Cw"]
				}, -1],
				["cr:1465733", ["emptyFunction"], {
					"__rc": ["emptyFunction", "Aa13VLgnDHoZdjMz67_IAK6frkVNnkKp57IGHMZJyGHF4j368fpo_nyiQOXGh-7cCFnhFa6YQycy-jDam2JAufJBow"]
				}, -1],
				["cr:1528736", ["CometAppLoggedInNavigationSearchSection.react"], {
					"__rc": ["CometAppLoggedInNavigationSearchSection.react", "Aa2Q_VE_HzXX3AdluXVIZP9AF4mlLMwDoYYcuBMnbSTWaafzMcAXjSFyEHV64hjXwWJ4jf5ypAy1mpP_t_0BU3uK5sqkB0a2eK40Cw"]
				}, -1],
				["cr:1567348", ["CometAppNavigationTabBarContent.react"], {
					"__rc": ["CometAppNavigationTabBarContent.react", "Aa1n5csdVcXTS0CR1692WtjKOKM6dy_ZGSAJikq6n434htzOqoZIEXAF7jcXp0IlkbHytIIgFuqAtYW3Xg6US8E2xA"]
				}, -1],
				["cr:1583595", ["CometAudioManager.react"], {
					"__rc": ["CometAudioManager.react", "Aa1i0yDzcDNPLomFlL_jT5lrOAyAFvrEMJ4OHJjU4zRdA9yjI0AqnEiKrH3DwZzeWcyqEx7TE1EZOmw1Uw94"]
				}, -1],
				["cr:1599331", ["CometBrowserPushRoot.react"], {
					"__rc": ["CometBrowserPushRoot.react", "Aa2DsZt6u4QRe01NUqbu128wTRhnthyOCDFE88kwn6o9OX_mohmHR_ZLM1KGHECC7U-fYayERfaFOwlCU6qRHodR3dhd0SLT2H36WcNErGv_"]
				}, -1],
				["cr:1604228", [], {
					"__rc": [null, null]
				}, -1],
				["cr:1604319", [], {
					"__rc": [null, null]
				}, -1],
				["cr:1618366", ["MWChatMultiTabProvider.react"], {
					"__rc": ["MWChatMultiTabProvider.react", "Aa3Oycojbl2w6-FiEhat_iEv6UcYx0G54i51MFxBltu-flvQx4qyCaSW3wgMrEMgiLBlYC19URaNuRTHEqE9"]
				}, -1],
				["cr:1634616", ["CometUserActivity"], {
					"__rc": ["CometUserActivity", "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1638253", ["emptyFunction"], {
					"__rc": ["emptyFunction", "Aa1Gk6Ra1EYBR8jsnON8rPffZ8Do0_Oy4Yx3MB7pF9_Gdu6ccvygOCYu_Rn__ILueU9S8FxIHM90CehzeuYL47m5ddZ4tg"]
				}, -1],
				["cr:1653853", [], {
					"__rc": [null, "Aa1YxtSLkbSoQ4Cdjs7ILD5Zeb0n9SxoaGgLeh_ANf-XfjSLE5EaqfLe6sfUzwXJ5yPg1_6bfHuntEylgvv7SM-TfmwZbDMf"]
				}, -1],
				["cr:1697455", [], {
					"__rc": [null, "Aa2bwtONUW-CpqxXbpxlDd8BOfZ6I5x_3j7S928xUAH680EkzvRpequGrA1Ds6cW3RZ5Vzt6t9gw6h1z-SjknF4"]
				}, -1],
				["cr:1735834", ["CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react"], {
					"__rc": ["CometSettingsBadgedDropdownTriggerMWJewelDropdownEntrypoint.react", "Aa0kQiUImACn462ZRAmGo8xR0NdYF5_TX4AFJjFz98PHY7yN3QFrzRyiV9NlPy09dt5FpTytNbsY4ke3wx26-mAMXcejnFqz"]
				}, -1],
				["cr:1738904", [], {
					"__rc": [null, "Aa1HkYCBsQwUxKRKz1jLTy5XXGWRQzYqh9cJljHzKJwrw1axHfhC9Ae_rIrdUEM6f1x3G8Dh7IkqjCrEwH52q7nV9G29n1qi4YJYvV76cw"]
				}, -1],
				["InitialServerTime", [], {
					"serverTime": 1604739184439
				}, 204],
				["ProfilePlusMessaging", [], {
					"shouldRedirectMessagesForAP": false,
					"shouldArchiveInboxForProfessionalProfile": false,
					"mailboxID": null,
					"delegatePageID": null
				}, 5072],
				["cr:1344487", ["ReactDOM-prod.classic"], {
					"__rc": ["ReactDOM-prod.classic", "Aa38tcvikaKsguNdEyLw8BWUlFiveHRapPAxKZlrujF_D-HoDfzHTt-aUujhvhE9q-QHL_yrV0OezYwH7YqGUaqUOCFTUjWy-_M3"]
				}, -1],
				["cr:1080422", [], {
					"__rc": [null, "Aa3wMujkcALx6iFuFUn3yT-29VpIGXIoCYtnobyTMqS5_OB3hUVkfxonpEIvAsxl8cw7v-XuAUaPuvqe-EklwdL8ZPVeofqVO1MX"]
				}, -1],
				["cr:1627084", ["CometEntryPointPopoverTriggerModern.react"], {
					"__rc": ["CometEntryPointPopoverTriggerModern.react", "Aa0jHJOwU2uRtSILJiz1n9fo4gd05ak3MAnoyg88FkizcscrkrS4Gq3cSZl_dAmtjxaVhjQ5C3D3ZLNwBG9vzX1dMu12tAHDVuJjoNKgpPPS_Sw"]
				}, -1],
				["cr:1810733", ["useFeedComposerCometDialogImplementation"], {
					"__rc": ["useFeedComposerCometDialogImplementation", "Aa2pzTy7nmx2e8mQK05Z076wyZF2KYXYIO2HAV_qbt55PhVfA73dY8Tjewseo-q7siG9Trp4UctTef50oXGbxryT"]
				}, -1],
				["cr:947993", ["CometWatchBadgeCountDeferred.react"], {
					"__rc": ["CometWatchBadgeCountDeferred.react", "Aa0MbYkpF6AwfK6UszzwFH-UV2N97ps7HK5SGnxE3Hf-lRfYtcMHCjCFK1FcjsEz15Hh5XtCIUkQZa9OEsLwUi6C6Q"]
				}, -1],
				["cr:1118765", ["CometMarketplaceBadgeCountDeferred.react"], {
					"__rc": ["CometMarketplaceBadgeCountDeferred.react", "Aa3BEOnzp4xhuK_TXObGJGsF4Vd-4jkQd61DDK5ds4qZeq9fBHPx1hFCXLri2bMR9JaBeUVaIsGIDLm_MXxIBESLWy7lALhP6g"]
				}, -1],
				["cr:1389798", ["CometGamingBadgeCountDeferred.react"], {
					"__rc": ["CometGamingBadgeCountDeferred.react", "Aa1YOot6c062iDWQoClKMqY_tSsgq15oJj1vTt-mt8NzX3k-aRjwQmV5pmcaUAdDJOdYLu-RdQxH-21hHO2PfQ2CaBA"]
				}, -1],
				["MessengerWebPresenceCookieData", [], {
					"cookie": null
				}, 4664],
				["cr:1353359", ["CometEventListener"], {
					"__rc": ["CometEventListener", "Aa1AHNWRuFOKbPvVnr7zuiWfTNu2df0ARo0MgrTZV6OaZG4zujeZM0FuNxdRIhjBGutBqdGplQ9yENUjWl_GaJ0mPOJl4w"]
				}, -1],
				["FbtQTOverrides", [], {
					"overrides": {
						"1_223705315b72db2fa982b7e71471bbc2": "Tin b\u1ea1n \u0111\u0103ng v\u00e0o ng\u00e0y {date} \u0111\u00e3 c\u00f3 {number} ng\u01b0\u1eddi xem. H\u00e3y t\u1ea1o tin kh\u00e1c \u0111\u1ec3 chia s\u1ebb th\u00eam nhi\u1ec1u kho\u1ea3nh kh\u1eafc v\u1edbi b\u1ea1n b\u00e8 nh\u00e9.",
						"1_367ea8e1cb288c8cfe79e1dd1a7e54ce": "Chia s\u1ebb l\u00ean tin",
						"1_7b08a269ceb048ddd1c9af034e8c58b3": "{name1}, {name2} v\u00e0 {name count others} \u0111\u00e3 xem tin c\u1ee7a b\u1ea1n. H\u00e3y xem tin \u0111\u00f3 trong kho l\u01b0u tr\u1eef.",
						"1_f14fee2d112a0e63ecd7b0342a116b7a": "{name1}, {name2} v\u00e0 {others} \u0111\u00e3 th\u00eam v\u00e0o tin c\u1ee7a h\u1ecd.",
						"1_f91f62308e132a9d963f9187b7e25359": "C\u00f3 {number} l\u01b0\u1ee3t xem b\u00e0i ni\u00eam y\u1ebft n\u00e0y {name}. H\u00e3y th\u1eed \u0111\u0103ng m\u1ed9t b\u00e0i ni\u00eam y\u1ebft \u1edf nhi\u1ec1u n\u01a1i."
					}
				}, 551],
				["AnalyticsCoreData", [], {
					"device_id": "fd.AcawG1ZM7OmQ7nYzP4_DJgKSeN9__ryiWSxWPTM0ro356y6wDdPF50vDljpJoFX44GePBU-S_nKLgAXY9cxrqCXG",
					"app_id": "2220391788200892"
				}, 5237],
				["CometCustomKeyCommands", [], {
					"customCommands": [],
					"areSingleKeysDisabled": null
				}, 4521],
				["PresencePrivacyInitialData", [], {
					"onlinePolicy": 1,
					"privacyData": {},
					"visibility": 0
				}, 58],
				["CometTabBarProfileIconConfig", [], {
					"src": "https:\/\/scontent.fhan5-6.fna.fbcdn.net\/v\/t1.0-1\/cp0\/p50x50\/96226248_3046236648761597_9163499123301679104_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=sUqT0ss00k0AX8X7dlQ&_nc_ht=scontent.fhan5-6.fna&tp=27&oh=3f915fcb764a99a8a9707481fe8682da&oe=5FCC93C9",
					"short_name": "Nguy\u1ec5n"
				}, 4353],
				["CometDenseModeSetting", [], {
					"initialSetting": "DEFAULT"
				}, 4999],
				["cr:1682444", [], {
					"__rc": [null, "Aa08Frexwo0w0451_73e4QuKXg5SjQZSLbY6R2RrRfmf1p54qxTGFLSo5TZWZbatvnfXpC2f0MDWNh262AiHuvne2Rs"]
				}, -1],
				["cr:1694459", [], {
					"__rc": [null, null]
				}, -1],
				["CometLoggedInEligibleTabsList", [], {
					"eligible_tabs": [4748854339, 250100865708545, 2392950137, 1606854132932955, 2361831622]
				}, 5195],
				["LinkshimHandlerConfig", [], {
					"supports_meta_referrer": true,
					"default_meta_referrer_policy": "origin-when-crossorigin",
					"switched_meta_referrer_policy": "origin",
					"non_linkshim_lnfb_mode": null,
					"link_react_default_hash": "AT23kCoB5EEnY27-8aKG7cHg7q_5dmP_AQVrcp9zBpGlKz1RfCN1oEacdTUWrAbnG780OkfqTy43xyeRl76B8mcyY_lTmvH7cn6uwFqoGqT6ur0J0nLpA3o9aW5t4Q",
					"untrusted_link_default_hash": "AT2cJN8lPMGf-1jBnO0mGmzurz1Vys7ROlO0UTX8Djxe1BU1ottf2nFUXONxEnjUaFRFcCBe-aclKVphRjKLyt2R0wGBg96N6h0AEwkLtzqaTmGNZyg2POE9LGcpLQ",
					"linkshim_host": "l.facebook.com",
					"use_rel_no_opener": true,
					"always_use_https": true,
					"onion_always_shim": true,
					"middle_click_requires_event": true,
					"www_safe_js_mode": "asynclazy",
					"m_safe_js_mode": "MLynx_asynclazy",
					"ghl_param_link_shim": false,
					"click_ids": ["IwAR3wID424foLJtF6yfVxZl3p78xvCtxYfV8rtaQewwkEbzdAaLKuG7NoQ7E", "IwAR10YwcdhTxIo3zJS-Nhlb8V2vuco0Qnf2QyXLYKYjW3EI55cuxjz7Po30g", "IwAR0EYdTBoNsHARXY9_L1spQ67kJpGGgvI-aCRnth4YMf6F9gTrfHF1ZcnOc", "IwAR1oxWg-VlIJSpAGb5rMnBAFDkrD_0UBN-vOgvZfgxQDjVNJg3GBUtkoAYs", "IwAR3mWztJgvgjWSAdY2Dv3NuxE37Yneu8d-Efe3Ll3NLXvTbtWhuqBtxU_Qk", "IwAR2gIEP9H7CYKTjA7n16ozZff5t37yeVmQ70sLrzZAZmfwtdx3H07W08u_0", "IwAR1lfdFYhN4WJGW7lS5m2j9v-4gMSAbjkYyUJPfypLeGVB2gFLhA879Ksd4", "IwAR1tF_LsIn8C_kSCQGFPn9N2SNH95mcI5ZX-da5HHII9SVo5vocJH_Y1G9c", "IwAR1_Si_36SHVOF2kwvUlmJdgdsvtt_pDdK9WYGyT7x7zBUCHooDJxnRhQ8I", "IwAR3Iffkv6G7zzkwndCqaBz6xb0KrCgLZl45h2bdrBBX8tS6HyNbpijSpqBE", "IwAR32T8W4iedmJnZWKwxBvkMREKa0GyVghPE-A0bjHfKDn8Rb_DUSh13L_rQ", "IwAR0vLV0L0HClDuZ5n9N0ehhE8ZzWvnMEUFAFdvm9TTBJVq5k7AH31Vt9f9A", "IwAR36aS1P7SHzaY2xGXR-3pwhx5E19fZUbbn_1XdbwoH-Ti4CwxbF2IP4ILg", "IwAR1-vQTgCpyu45NMb71iKy-gU79OONZtLJk2YrNU0ypb77F8y6vUFOz3BJ4", "IwAR3HGIgJTDS7oj4IR8-j7w_kGriUOUz3cHKMWiBNQlmBC61HRwxnAZK-NrE", "IwAR0Y3tvg8OR_sEQXC_nD8l2sAs6HqXTduWb5l-hlfxAQSB7sTm8SJTMoDns", "IwAR3JFybDv_Quo69Lqpee2zW-ydBIiM4-RlqAREVQqRlwPHFSuY1yTxtL42U", "IwAR3nLP04Zjy4XNAPoVo9ANNGqBdt654u9DY1fshMoeyRzyadx8DYOxVoLoM", "IwAR2K2X6zMLTSMebmWaH7SXok_alz5cCNec6RnCAo9bp62YUvN3R6SwyAFwA", "IwAR0VzWPIb8-tEvC8B4oNzop4SeC4zziBZoTmoitmBxCzZhG7SNTXMjaZ0PY", "IwAR2yTR7exJjIqXjPia8Ripd4E37_2Ks1sI3Q7vKZMf69c92XZ4MV5PjXsv0", "IwAR2NjFIvYPouB26Y8vltoi58aDV1KcQOG4hIQsB8x6DYzSE0W-qmuMBtW5I", "IwAR1_Y56stJXWe8byt8VGbn_AnfRP3VYvXXg8JmNxvd0xBbIQEfaFQqdxCSI", "IwAR3YD9nJtqEreyzNTfGkQiD9VgpdXD5jrlOeMBBgW6HwmlmLrRAfVJVeRhs", "IwAR2rH9aZm-HFrN_hmOCbXfgJr0TXXBxiK2U97BRPw3gbxBiBHrznta_7H18", "IwAR2ykLqBTg-RXDboJySbg-SZhnSEMyEYiNcqCn--dR4DuYk88xmyX2sKbbs", "IwAR1KHjX_KwibWXKsqJFNgnDvK1JFnI0jhRJB1HuIH56IvCjld4ZkR8S_EAE", "IwAR3HeOWYFSNUMRYzQuaCxqMikYWDcfdbiYZ7lTL8rNoz88w8dnCoP33KBsg", "IwAR14WAjQJuGnTcVqqqdWjzLA182TNVinLNnbpbrTp1nB45LOEkiR7g1-MGE", "IwAR28B8QGBrXs1uhjlDbES7LOJ-StahH9zKpeUjdRJJwEFeXel4iZBHcZtD8", "IwAR1YUNtZ_fIncrXrL4bLEOjXpaO5IoDnlNKvs81BcpG-d03sOSFV6nNIRMM", "IwAR0KJJYk2WeD0oXxqE_1uT_TlBFEJs8vPbH614NtNDcXA-wkMQLI1mAkDaM", "IwAR0sA0-YPFCBPrAfTzig9pxjXYFXe4M7irZ4xbsVMfKBLxKPsOb9qV04910", "IwAR3hDuBVz354995HhM5Rr_4RD1mdczwQg7MSj8wAdJ82_j-CjA5ju8IEwWc", "IwAR0VKS_2yNiIKd-fnWxA3PfkKbjjAERjUU8KOJXGWN2TIgvGFzNoXE-ftPc", "IwAR3K6xlefChSznYKUDxSHY2wT10du6S1XUErO_5cOHGI7eIp3uQwQZoMwLA", "IwAR2KSIqZ6o3f8sHmh8rmarMlBLIOQkRNqktgprLhSoP5NI_1QaBD4c6cEaM", "IwAR0TpW2SroIGFlt2zHZT_g15UsqA9C5muIwXjdb-kdzMsAFjkPv3DGuo7Y4", "IwAR1ebHY98ihnCNDDrUgPbXjcEWV9jOYaItdZ1bDXrjmr8DsWwcl8DDbWpj8", "IwAR2cXL7WVQOcC9oAkzmgL7VLYRMfiI2M_JFnuTOS5phJdqcXMoymjut5L5I", "IwAR2gnkhAJhJZeLHaV904l2__170zvCW6Hle9c8lIqFoDDJ_3iIi6dOaZBbk", "IwAR01OeWGTu1ygIa4dC_3cNLSIlI53eDY4vlvj8kfq3Nqxi6e8uWn3pG_G0o", "IwAR0sUrUxmRGEDahDBffaJVHScyzhTcbjOu-PnigkTdNuD1JpeyBBFGy4j_s", "IwAR2fN_2T84EL1wqFzclMSnQlR7Ya2VGdhpvB2ciOWuxVZenCf05YvzwZZfk", "IwAR0_UjufuhyohjBP7_xU4vpVzPBoyTQqlA6nJtlxtgTHXjnCVTlc8ak5e2o", "IwAR1pYFVW5ZBcVKO0YPUVqDeG5oHqU424hxwhScW0uhryMEAqz1awgWVmsyo", "IwAR0IBEJ2R3ff4M44TmDOt3RUS8G1Gh8E1JAsqMuSy3dGQC31G09adrtpcp0", "IwAR3xLur2y4O_tQ3cPmm1Vfhg83Hq9tTwiVYcQJIdanSHIjjE27u2AARP-Sw", "IwAR0G0KYQlfC_f1rgyPQEa0GUa9hn_eReRJRRgYalTk74-HYeCUTyhsq7xms", "IwAR3p4LEhia3z_O8MpWpgnY-KJH7TuEFkWUZjQpeFmEKjmDhHM7bbR_NmG64"],
					"is_linkshim_supported": true,
					"current_domain": "facebook.com"
				}, 27],
				["AvailableListInitialData", [], {
					"activeList": ["100008144314102", "1208143767", "100003738818275", "100007844172793", "100006433052004", "100003148272118", "100004440965005", "100003107016620", "100003663727379", "100003282830157", "100000942902115", "100004279840301", "100000174710278", "100002878594193", "100001793173052", "100004405200250", "100004102386154"],
					"lastActiveTimes": {
						"100008144314102": 1604739184,
						"1208143767": 1604739121,
						"1598642598": 1604737647,
						"100004429171885": 1604737964,
						"100003738818275": 1604739184,
						"100007913075992": 1604735969,
						"100007844172793": 1604739184,
						"100001857294396": 1604735696,
						"100030458989028": 1604733745,
						"100004771667468": 1604738489,
						"100006433052004": 1604739107,
						"100001848977720": 1604738580,
						"100024497319566": 1604730696,
						"100056326473627": 1604739009,
						"100006401956423": 1604731109,
						"1823959197": 1604738943,
						"815700829": 1604733194,
						"100003148272118": 1604739184,
						"100006328861462": 1604738188,
						"100004714361829": 1604714178,
						"100000245675425": 1604735867,
						"100022372993055": 1604737067,
						"100014050697078": 1604668877,
						"100008819550260": 1604739064,
						"100003831087534": 1604734954,
						"100027224587819": 1604676426,
						"100049869782728": 1604720166,
						"100004440965005": 1604739167,
						"100049983940671": 1604676465,
						"100047072550987": 1604711176,
						"100003916849461": 1604727782,
						"100015536523420": 1604719527,
						"100003107016620": 1604739184,
						"100008589570365": 1604733138,
						"100003663727379": 1604739184,
						"100000287540232": 1604737675,
						"100012278654983": 1604737554,
						"100007208718904": 1604736065,
						"100022517741616": 1604732663,
						"100003282830157": 1604739183,
						"100001571966541": 1604738909,
						"100000321706393": 1604737081,
						"100001546060881": 1604734472,
						"100003196235618": 1604738667,
						"100000942902115": 1604739116,
						"100004279840301": 1604739184,
						"100000174710278": 1604739184,
						"100002919973279": 1604735606,
						"100003246690329": 1604731105,
						"100002127469869": 1604734020,
						"100002878594193": 1604739177,
						"100009594377139": 1604738105,
						"100001740417268": 1604734622,
						"100006175179006": 1604730626,
						"100010605096078": 1604732590,
						"100008800390946": 1604727896,
						"100006883485931": 1604736590,
						"100000324073944": 1604733636,
						"100003859036050": 1604732802,
						"100001807342009": 1604732634,
						"100000127785326": 1604712984,
						"100000273562463": 1604737736,
						"100015611857893": 1604737968,
						"100017171589404": 1604737681,
						"100002375582542": 1604729190,
						"100002693556411": 1604725815,
						"100004310835217": 1604678617,
						"1383972127": 1604738391,
						"100008204134272": 1604704559,
						"100041441169425": 1604736393,
						"100007754505995": 1604724387,
						"100008301726254": 1604737261,
						"100001446061680": 1604736715,
						"100002389832360": 1604738835,
						"100032899160623": 1604737455,
						"100001793173052": 1604739184,
						"100000271933345": 1604738037,
						"100000227770742": 1604736172,
						"100006427024868": 1604727188,
						"100004405200250": 1604739184,
						"100004102386154": 1604739184
					},
					"chatNotif": 0,
					"playingNow": []
				}, 166],
				["WebConnectionClassServerGuess", [], {
					"connectionClass": "EXCELLENT"
				}, 4705]
			],
			"require": [
				["ProfileCometTimelineListViewRoot.react"],
				["ProfileCometTimelineListViewRouteRoot.entrypoint"],
				["ProfileCometRoot.react"],
				["CometRoot", "initRoute", ["RequireDeferredReference"],
					["mount_0_0", "6892302315725016032", {
							"actorID": "100001258748155",
							"rootView": {
								"allResources": [{
									"__dr": "ProfileCometTimelineListViewRoot.react"
								}, {
									"__dr": "ProfileCometTimelineListViewRouteRoot.entrypoint"
								}, {
									"__dr": "ProfileCometRoot.react"
								}],
								"resource": {
									"__dr": "ProfileCometTimelineListViewRoot.react"
								},
								"props": {
									"viewerID": "100001258748155",
									"userVanity": "cacom2012",
									"userID": "100001258748155"
								},
								"entryPoint": {
									"__dr": "ProfileCometTimelineListViewRouteRoot.entrypoint"
								}
							},
							"tracePolicy": "comet.profile.timeline.list",
							"meta": {
								"title": "Nguy\u1ec5n V\u0103n C\u00f4ng",
								"accessory": null
							},
							"timeSpentConfig": {
								"has_profile_session_id": true
							},
							"entityKeyConfig": {
								"entity_type": {
									"source": "constant",
									"value": "profile"
								},
								"entity_id": {
									"source": "prop",
									"value": "userID"
								},
								"section": {
									"source": "constant",
									"value": "timeline"
								}
							},
							"hostableView": {
								"allResources": [{
									"__dr": "ProfileCometTimelineListViewRoot.react"
								}, {
									"__dr": "ProfileCometTimelineListViewRouteRoot.entrypoint"
								}, {
									"__dr": "ProfileCometRoot.react"
								}],
								"resource": {
									"__dr": "ProfileCometTimelineListViewRoot.react"
								},
								"props": {
									"viewerID": "100001258748155",
									"userVanity": "cacom2012",
									"userID": "100001258748155"
								},
								"entryPoint": {
									"__dr": "ProfileCometTimelineListViewRouteRoot.entrypoint"
								}
							},
							"tabKey": "profile",
							"productAttributionId": "190055527696468",
							"url": "\/cacom2012\/",
							"params": {
								"vanity": "cacom2012",
								"sk": null,
								"viewas": null
							},
							"routePath": "\/{vanity}\/"
						},
						[{
							"actorID": null,
							"preloaderID": "adp_useGroupsCometTabBadgeCountQueryRelayPreloader_5fa660705e7161425138287",
							"queryID": "3176011502485440",
							"variables": {
								"find": "2361831622"
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_useCometMarketplaceBadgeCountQueryRelayPreloader_5fa660705e7302607283735",
							"queryID": "4089516081122659",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_useCometPagesBadgeCountQueryRelayPreloader_5fa660705e7389f21658895",
							"queryID": "3125837897504293",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometSettingsBadgeQueryRelayPreloader_5fa660705e73e2e28998008",
							"queryID": "3134177003323250",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_MWChatBadgeCountQueryRelayPreloader_5fa660705e74a6881971995",
							"queryID": "2624866337557498",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometNotificationsBadgeCountQueryRelayPreloader_5fa660705e74f4a62805344",
							"queryID": "3410744965662225",
							"variables": {
								"environment": "MAIN_SURFACE"
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_useCometWatchBadgeCountQueryRelayPreloader_5fa660705e7562f85515006",
							"queryID": "3074858979266201",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometProfileNavigationLinkRelayQueryRelayPreloader_5fa660705e7626a43155144",
							"queryID": "3142026525836820",
							"variables": {
								"scale": 1
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometLogoutHandlerQueryRelayPreloader_5fa660705e7684b09600724",
							"queryID": "3683275191691115",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometActorGatewayHandlerQueryRelayPreloader_5fa660705e7718e87734179",
							"queryID": "3715216938596561",
							"variables": {
								"scale": 1
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_MWChatSyncEnvironmentQueryRelayPreloader_5fa660705e77a6279486873",
							"queryID": "2450076258362322",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_MWChatBlockListQueryRelayPreloader_5fa660705e77f1110926896",
							"queryID": "2502740699819425",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_MWChatVideoAutoplaySettingContextQueryRelayPreloader_5fa660705e7849493544626",
							"queryID": "2722612934516084",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometSettingsDropdownListQueryRelayPreloader_5fa660705e79b4a09913298",
							"queryID": "3114557815333936",
							"variables": {
								"scale": 1,
								"inProfileSwitcherEntry": false
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometWelcomeViewQueryRelayPreloader_5fa660705e7a43265139861",
							"queryID": "2806073992831675",
							"variables": {
								"ignore_nux": false
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometRoomsInterstitialPromotionQueryRelayPreloader_5fa660705e7ab5799112055",
							"queryID": "2975470482500644",
							"variables": {
								"scale": 1
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometSearchBootstrapKeywordsDataSourceQueryRelayPreloader_5fa660705e7b38709360712",
							"queryID": "3612299668800665",
							"variables": {
								"first": 2000
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometSearchRecentDataSourceQueryRelayPreloader_5fa660705e7bb2633364666",
							"queryID": "3295737507111647",
							"variables": {
								"filter": "all",
								"first": 16,
								"scale": 1
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_useCometLogInFormQueryRelayPreloader_5fa660705e7c35d36900794",
							"queryID": "2814703468577299",
							"variables": {}
						}, {
							"actorID": null,
							"preloaderID": "adp_PresenceStatusProviderSubscriptionComponentQueryRelayPreloader_5fa660705e7ca8d53721092",
							"queryID": "3061548450534867",
							"variables": {
								"scale": 1
							}
						}, {
							"actorID": null,
							"preloaderID": "adp_CometSettingsDropdownTriggerQueryRelayPreloader_5fa660705e7d40e69337621",
							"queryID": "4634348143249726",
							"variables": {
								"pageManagementNuxId": 8191,
								"profileSwitcherNuxId": 8150,
								"coreAppAdminProfileSwitcherNuxId": 8189
							}
						}, {
							"actorID": "100001258748155",
							"preloaderID": "adp_ProfileCometHeaderQueryRelayPreloader_5fa660706408e9661569489",
							"queryID": "3390978664349285",
							"variables": {
								"scale": 1,
								"userID": "100001258748155"
							}
						}, {
							"actorID": "100001258748155",
							"preloaderID": "adp_ProfileCometTimelineFeedQueryRelayPreloader_5fa66070640c67985991054",
							"queryID": "3438716022831993",
							"variables": {
								"UFI2CommentsProvider_commentsKey": "ProfileCometTimelineRoute",
								"feedLocation": "TIMELINE",
								"feedbackSource": 0,
								"omitPinnedPost": true,
								"privacySelectorRenderLocation": "COMET_STREAM",
								"renderLocation": "timeline",
								"scale": 1,
								"userID": "100001258748155"
							}
						}, {
							"actorID": "100001258748155",
							"preloaderID": "adp_ProfileCometTimelineListViewRootQueryRelayPreloader_5fa66070640da0789321770",
							"queryID": "3623147384409861",
							"variables": {
								"scale": 1,
								"userID": "100001258748155"
							}
						}], {
							"profile_session_id": "687ef4a7-446c-4ff7-88b6-a2bd5cf8eeaf",
							"container_id": "100001258748155"
						}
					]
				],
				["Bootloader", "markComponentsAsImmediate", [],
					[
						["ProfileCometTimelineListViewRoot.react", "ProfileCometTimelineListViewRouteRoot.entrypoint", "ProfileCometRoot.react"]
					]
				]
			]
		});
	});
});