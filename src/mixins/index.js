import Vue from "vue";
import can from "./can";
import userActiveSession from "./userActiveSession";

Vue.mixin({
	methods: {
		can
	}
});

// Vue.mixin(userActiveSession)
