<template>
	<vue-html2pdf
		:html-to-pdf-options="pdfOptions"
		:show-layout="false"
		:float-layout="true"
		:enable-download="true"
		:preview-modal="false"
		:paginate-elements-by-height="1100"
		:pdf-quality="2"
		pdf-format="a4"
		pdf-orientation="portrait"
		pdf-content-width="800px"
		:manual-pagination="false"
		ref="html2Pdf"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<section slot="pdf-content">
			<slot />
		</section>
	</vue-html2pdf>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";

export default {
	name: "GeneratePDF",
	props: {
		documentName: {
			type: String,
			default: "application.pdf"
		}
	},
	data() {
		return {
			pdfOptions: {
				image: {
					type: 'jpg',
					quality: 0.98,
					useCORS: false
				},
				filename: this.documentName
			},
		}
	},
	components: {
		VueHtml2pdf
	}
};
</script>

<style>
.pdf-item * {
	font-family: var(--font-regular);
	font-size: 16px;
}

.pdf-item__content {
	padding: 32px;
}
</style>
