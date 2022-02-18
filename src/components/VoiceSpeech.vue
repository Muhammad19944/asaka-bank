<template>
	<transition name="fade">
		<div ref="voiceContainer" id="voice-container" class="voice-container">
			<v-btn @click="speech" icon depressed>
				<volume2-icon color="#fff" size="20" />
			</v-btn>
		</div>
	</transition>
</template>

<script>
import { Volume2Icon } from "vue-feather-icons";

export default {
	name: "VoiceSpeech",
	components: {
		Volume2Icon
	},
	mounted() {
		document.addEventListener("dblclick", (event) => {
			const { clientX, clientY } = event;
			const { voiceContainer } = this.$refs;

			voiceContainer.style.top = `${clientY}px`;
			voiceContainer.style.left = `${clientX}px`;
			voiceContainer.classList.add("active");
		});

		const { voiceContainer } = this.$refs;

		document.addEventListener("click", function(evt) {
			let targetElement = evt.target;  // clicked element

			do {
				if (targetElement === voiceContainer) {
					// This is a click inside. Do nothing, just return.
					return;
				}
				// Go up the DOM
				targetElement = targetElement.parentNode;
			} while (targetElement);

			// This is a click outside.
			voiceContainer.classList.remove("active");
		});
	},
	methods: {
		speech() {
			const message = new SpeechSynthesisUtterance();
			let locale = localStorage.getItem("locale");

			if (locale === "ru") message.lang = "ru-RU";
			if (locale === "en") message.lang = "en-US";
			if (locale === "uz") message.lang = "uz-UZ";

			message.text = window.getSelection();
			window.speechSynthesis.speak(message);
		}
	}
};
</script>

<style scoped>
.voice-container {
	display: none;
	position: fixed;
	z-index: 1;
	background: rgba(var(--main-primary), 1);
	color: #fff;
	border-radius: 4px;
}

.voice-container.active {
	display: block;
}
</style>
