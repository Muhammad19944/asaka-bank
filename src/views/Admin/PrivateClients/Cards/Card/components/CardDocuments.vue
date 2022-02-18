<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_CARD_ID === null">
				<v-col md="12">
					<v-alert type="error">
						{{ $t("Dashboard.cards.card_error_alert") }}
					</v-alert>
				</v-col>
			</template>
		</v-row>

		<app-upload-docs
			:TYPE="TYPE"
			:API_URL="{
                BASE_URL: 'plastic_cards',
                GET_LIST: 'required_documents'
            }"
			:CREATED_ID="$store.state.CREATED_CARD_ID"
			class="mt-4"
		/>
	</div>
</template>

<script>
import AppUploadDocs from "../../../../BaseComponents/AppUploadDocs";

export default {
	name: "CardDocuments",
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
