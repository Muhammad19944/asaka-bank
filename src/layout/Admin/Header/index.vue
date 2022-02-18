<template>
    <!--	src="@/assets/img/hero-slide-img-3.png"-->
    <v-app-bar class="app-toolbar" app>
        <v-app-bar-nav-icon @click.stop="$emit('emit:up')">
            <align-left-icon color="#E41D32" size="1.5x" class="custom-class" />
        </v-app-bar-nav-icon>

        <v-toolbar-title class="ml-0 pl-2">
            <div class="text-capitalize" v-if="$vuetify.breakpoint.smAndUp">
                <!--					{{ computedTitleContent }}-->
            </div>
        </v-toolbar-title>

<!--        <v-spacer v-if="getUser">{{ getUser }}</v-spacer>-->
<!--        <v-spacer v-else></v-spacer>-->
        <v-spacer></v-spacer>

		<app-language />

		<v-btn
			@click="setMode"
			icon
		>
			<moon-icon v-if="!isDark" size="1.5x"></moon-icon>
			<sun-icon v-else size="1.5x"></sun-icon>
		</v-btn>

<!--        <v-menu offset-y min-width="323" :auto="true" content-class="notification-dropdown">-->
<!--            <template v-slot:activator="{ on, attrs }">-->
<!--                <v-btn icon v-bind="attrs" v-on="on">-->
<!--                    <v-badge dot overlap bordered color="pink">-->
<!--                        <v-icon>mdi-bell-outline</v-icon>-->
<!--                    </v-badge>-->
<!--                </v-btn>-->
<!--            </template>-->

<!--            <v-list>-->
<!--                <v-list-item>-->
<!--                    <v-list-item-title class="d-flex align-center justify-space-between px-1">-->
<!--                        <span class="text-small">Notifications</span>-->
<!--                        <span class="text-small text-secondary-dark-2"> 4 </span>-->
<!--                    </v-list-item-title>-->
<!--                </v-list-item>-->

<!--                <v-list-item link class="py-1">-->
<!--                    <v-list-item-title class="d-flex align-center px-1">-->
<!--                        <div class="list-item-shape p-absolute w-100 h-100"></div>-->
<!--                        <div class="mr-4 p-relative">-->
<!--                            &lt;!&ndash;								<img src="/images/bell.svg" alt="">&ndash;&gt;-->
<!--                        </div>-->
<!--                        <div class="p-relative">-->
<!--                            <h1 class="font-700 text-small">Payment status notification</h1>-->
<!--                            <span class="text-secondary-dark-2 xs-text">25 min ago</span>-->
<!--                        </div>-->
<!--                        <v-spacer></v-spacer>-->
<!--                        <div class="notification-notice rounded-circle p-relative"></div>-->
<!--                    </v-list-item-title>-->
<!--                </v-list-item>-->
<!--            </v-list>-->
<!--        </v-menu>-->

	    <v-menu
		    offset-y
		    min-width="150"
		    auto
	    >
		    <template v-slot:activator="{ on, attrs }">
			    <v-btn
				    :ripple="false"
				    depressed
				    v-bind="attrs"
				    v-on="on"
				    plain
				    class="reset-size text-transform-reset px-0"
			    >
				    <div class="app-toolbar__user d-flex align-center ml-4 text-decoration-none color-inherit">
					    <div class="user-avatar d-flex align-center rounded-circle overflow-hidden">
						    <v-img width="32" height="32" class="rounded-circle" src="/images/hero-slide-img-3.png"></v-img>
					    </div>
					    <p class="text-small font-600 mb-0 ml-3 mr-6" v-if="getUser">
						    {{ getUser.username }}
					    </p>
				    </div>
			    </v-btn>
		    </template>

		    <v-list>
			    <v-list-item @click="logout" class="py-1">
				    <v-list-item-title class="d-flex align-center px-1">
					    <div class="mr-4 p-relative">
						    <log-out-icon size="1.25x" class="d-block"></log-out-icon>
					    </div>
					    <div class="p-relative">
						    <h5 class="font-600">{{ $t("Dashboard.sidebar.log_out") }}</h5>
					    </div>
				    </v-list-item-title>
			    </v-list-item>
		    </v-list>
	    </v-menu>
    </v-app-bar>
</template>

<script>
import AppLanguage from "../../../components/AppLanguage";
import { AlignLeftIcon, MoonIcon, SunIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";
import { LogOutIcon } from 'vue-feather-icons'
import { removeAllTokens } from "../../../services/TokenService";

export default {
	name: "Header",
	components: {
		AppLanguage,
		AlignLeftIcon,
		MoonIcon,
		SunIcon,
		LogOutIcon
	},
	data() {
		return {
			isDark: false
		}
	},
	computed: {
		...mapGetters(['getUser'])
	},
	mounted() {
		const modeStorage = localStorage.getItem('mode') || 'light'

		if( modeStorage === 'light' ) {
			this.isDark = false
			document.querySelector('body').classList.remove('dark-mode')
		} else {
			this.isDark = true
			document.querySelector('body').classList.add('dark-mode')
		}
	},
	methods: {
		setMode() {
			this.isDark = !this.isDark

			if(!this.isDark) {
				localStorage.setItem('mode', 'light')
				document.querySelector('body').classList.remove('dark-mode')
			}
			else {
				localStorage.setItem('mode', 'dark')
				document.querySelector('body').classList.add('dark-mode')
			}
		},

		/*
		*
		* */
		logout() {
			if (!confirm(`Tizimdan chiqishni xoxlaysizmi ?`)) {
				return void 0;
			}

			removeAllTokens();
			this.$store.state.currentUserData = {};
			this.$store.state.auth.COMPANY_ID = null;
			this.$router.push({ name: "Login" });
			this.$toast.warning(`Chiqildi!`);
		}
	}
};
</script>

<style>
.app-toolbar {
	box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%) !important;
	background: var(--theme-layout) !important;
}
</style>
