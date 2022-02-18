import { token } from "../services/TokenService";

export default {
	data() {
		return {
			mixinInterval: 0,
			mixinCounter: 0
		}
	},
	mounted() {
		if(token.get()) {
			document.addEventListener("visibilitychange", () => {
				if(document.hidden) {
					this.mixinInterval = setInterval(() => {
						this.mixinCounter ++
						console.log(this.mixinCounter);

						if(this.mixinCounter === 10) {
							token.remove()
							this.$router.push({
								name: "Login"
							})

							setTimeout(() => {
								document.location.reload()
							}, 2000)
						}
					}, 1000)
				}
				else {
					this.mixinCounter = 0
					clearInterval(this.mixinInterval)
				}
			});
		}
	},
	beforeDestroy() {
		this.mixinCounter = 0
		clearInterval(this.mixinInterval)
	}
}
