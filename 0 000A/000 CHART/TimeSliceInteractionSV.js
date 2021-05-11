export const aaa = {
	on_demand_reference_counting: true,
	on_demand_profiling_counters: true,
	default_rate: 1000,
	lite_default_rate: 100,
	interaction_to_lite_coinflip: {
		ADS_INTERFACES_INTERACTION: 0,
		ads_perf_scenario: 0,
		ads_wait_time: 0,
		Event: 1
	},
	interaction_to_coinflip: {
		ADS_INTERFACES_INTERACTION: 1,
		ads_perf_scenario: 1,
		ads_wait_time: 1,
		Event: 100
	},
	enable_heartbeat: true,
	maxBlockMergeDuration: 0,
	maxBlockMergeDistance: 0,
	enable_banzai_stream: true,
	user_timing_coinflip: 50,
	banzai_stream_coinflip: 0,
	compression_enabled: true,
	ref_counting_fix: false,
	ref_counting_cont_fix: false,
	also_record_new_timeslice_format: false,
	force_async_request_tracing_on: false
}