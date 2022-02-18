<template>
	<div class="form-wrap-body">
		<v-row>
			<template v-if="$store.state.CREATED_CREDIT_ID === null">
				<v-col md="12">
					<v-alert type="error"> Birinchi kredit yaratilishi shart</v-alert>
				</v-col>
			</template>
		</v-row>

		<app-upload-docs
			:TYPE="TYPE"
			:API_URL="{
                BASE_URL: 'credit',
                GET_LIST: 'documents'
            }"
			:CREATED_ID="$store.state.CREATED_CREDIT_ID"
			class="mt-4"
		/>
	</div>
</template>

<script>
import AppUploadDocs from "../../../../BaseComponents/AppUploadDocs";

export default {
	name: "CreditDocuments",
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
