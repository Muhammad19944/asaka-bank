<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_DEPOSIT_ID === null">
				<v-col md="12">
					<v-alert type="error">{{ $t("Dashboard.deposit.deposit_error_alert") }}</v-alert>
				</v-col>
			</template>
		</v-row>

		<app-upload-docs
			:TYPE="TYPE"
			:API_URL="{
                BASE_URL: 'deposit',
                GET_LIST: 'documents'
            }"
			:CREATED_ID="this.$store.state.CREATED_DEPOSIT_ID"
			class="mt-4"
		/>
	</div>
</template>

<script>
import AppUploadDocs from "../../../../BaseComponents/AppUploadDocs";

export default {
	name: "DepositDocuments",
	props: {
		TYPE: {
			type: String,
			default: ""
		}
	},
	components: {
		AppUploadDocs
	}
};
</script>

<style></style>
