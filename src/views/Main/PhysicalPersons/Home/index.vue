<template>
	<section class="main-section">
		<!-- HERO SLIDER -->
		<app-hero-slider />
		<!-- END HERO SLIDER -->

		<!-- BEST OFFERS SECTION -->
		<section class="best-offers-view section">
			<v-container class="p-relative">
				<div class="view-title" data-pull="left">
					<h1 class="font-600 dark-text align-self-center mb-3">
                        <I18nVue t='Home.BestProposals.header'/>
                    </h1>

					<div class="d-flex flex-wrap flex-sm-nowrap align-center justify-space-between">
						<p class="text--h3 font-400 dark-text mb-0">
                            <I18nVue t='Home.BestProposals.header_sub'/>
                        </p>

						<div class="slide-arrows d-flex mt-4 mt-sm-0">
							<button
								@click.prevent="slidePrev"
								class="slide-arrow d-flex align-center justify-center outline-transparent mr-5"
							>
								<chevron-left-icon size="1.5x" class="custom-class"></chevron-left-icon>
							</button>

							<button
								@click.prevent="slideNext"
								class="slide-arrow d-flex align-center justify-center outline-transparent"
							>
								<chevron-right-icon size="1.5x" class="custom-class"></chevron-right-icon>
							</button>
						</div>
					</div>
				</div>
			</v-container>

			<div class="drag-left-space" data-pull="content">
				<hooper :settings="hooperSettings" ref="carousel" class="outline-transparent">
					<slide>
						<router-link
							:to="{ name: 'Deposits' }"
							class="app-slide-card pa-8 mx-4 my-8 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative"
						>
							<svg class="mb-3" id="icon-open-account" viewBox="0 0 52.4 54.2">
								<path
									d="M9.4,43.1c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1 C8.9,42,9.4,42.5,9.4,43.1L9.4,43.1z M9.4,43.1"
								/>
								<path
									d="M50,30.5c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1 C49.5,29.4,50,29.9,50,30.5L50,30.5z M50,30.5"
								/>
								<path
									d="M36.6,22.5H35c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h1.8 c0.4,0,0.8,0.3,0.8,0.8c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1c0-1.6-1.3-2.8-2.8-2.9v-0.9c0-0.6-0.5-1.1-1.1-1.1 c-0.6,0-1.1,0.5-1.1,1.1v0.9c-1.6,0.1-2.8,1.4-2.8,3v0.9c0,1.7,1.4,3.1,3.1,3.1h1.6c0.5,0,0.9,0.4,0.9,0.9v0.9 c0,0.5-0.4,0.9-0.9,0.9h-1.8c-0.4,0-0.8-0.3-0.8-0.8c0-0.6-0.5-1.1-1.1-1.1c-0.6,0-1.1,0.5-1.1,1.1c0,1.6,1.3,2.8,2.8,2.9v0.9 c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1v-0.9c1.6-0.1,2.8-1.4,2.8-3v-0.9C39.7,23.9,38.3,22.5,36.6,22.5L36.6,22.5z M36.6,22.5"
								/>
								<path
									d="M52,35.9c-0.4-1-1.2-1.7-2.2-2.1c-1-0.4-2.1-0.4-3.1,0.1c0,0,0,0,0,0L40,36.9 c-0.5,0.2-0.8,0.9-0.5,1.4c0.2,0.5,0.9,0.8,1.4,0.5l6.7-3.1c0.5-0.2,1-0.2,1.5,0c0.5,0.2,0.9,0.5,1.1,1c0.2,0.5,0.2,1,0,1.5 c-0.2,0.5-0.5,0.9-1,1.1l-13.7,6c-2.2,1-4.6,0.9-6.7-0.2l-5-2.5c-2.7-1.3-5.8-1.4-8.5-0.2l-0.1,0l-3.7-8.4l5.2-2.3 c2.5-1.1,5.2-1.2,7.7-0.2l10.1,3.7c0.9,0.3,1.4,1.3,1.1,2.2c-0.3,0.9-1.3,1.4-2.2,1.1L25.5,36c-0.6-0.2-1.2,0.1-1.3,0.7 c-0.2,0.6,0.1,1.2,0.7,1.3l7.8,2.6c0.4,0.1,0.8,0.2,1.2,0.2c1.6,0,3.1-1,3.7-2.6c0.7-2-0.4-4.2-2.3-4.9l-10.1-3.7 c-0.7-0.2-1.4-0.4-2.1-0.6v-5.9c0-5.8,4.7-10.5,10.5-10.5h3.9c5.8,0,10.5,4.7,10.5,10.5V26c0,0.6,0.5,1.1,1.1,1.1 c0.6,0,1.1-0.5,1.1-1.1v-2.8c0-6.1-4.4-11.2-10.2-12.4V7.7l2.7-4.6c0.2-0.3,0.2-0.6,0.1-0.9c-0.1-0.3-0.3-0.5-0.6-0.6l-3.3-1.5 c-0.3-0.1-0.5-0.1-0.8,0l-2.4,0.9l-2.2-0.9c-0.2-0.1-0.5-0.1-0.8,0l-3.4,1.3c-0.3,0.1-0.5,0.3-0.6,0.6c-0.1,0.3-0.1,0.6,0.1,0.9 l2.6,4.8v3.2c-5.8,1.1-10.3,6.2-10.3,12.4v5.7c-1.8,0-3.5,0.3-5.1,1.1l-5.2,2.3c-0.3-0.4-0.7-0.8-1.2-1c-0.7-0.3-1.4-0.2-2,0 l-6.7,2.9c-0.4,0.2-0.6,0.5-0.6,1v18c0,0.4,0.2,0.7,0.5,0.9c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.3,0,0.5-0.1l13-6.6 c0.6-0.3,1.1-0.8,1.4-1.4c0.2-0.5,0.2-1.1,0.1-1.6l0.1,0c2.2-1,4.6-0.9,6.7,0.2l5,2.5c2.7,1.3,5.8,1.4,8.5,0.2l13.7-6 c1-0.4,1.7-1.2,2.1-2.2C52.5,38,52.5,36.9,52,35.9L52,35.9z M37.7,10.6h-4.4V8.4h4.4V10.6z M31,2.9l1.9-0.7l2.1,0.9 c0.2,0.1,0.5,0.1,0.8,0l2.4-0.9L40,3l-1.9,3.3h-5.2L31,2.9z M13.7,45.6C13.7,45.6,13.6,45.6,13.7,45.6L2.1,51.5v-4.3l3-1.5 c0.5-0.3,0.7-0.9,0.5-1.4c-0.3-0.5-0.9-0.7-1.4-0.5l-2,1v-8.9l6.1-2.7c0.2-0.1,0.3,0,0.4,0c0.1,0,0.2,0.1,0.3,0.3L9.1,34 c0,0,0,0,0,0l0,0L13.9,45C14,45.2,13.9,45.5,13.7,45.6L13.7,45.6z M13.7,45.6"
								/>
							</svg>

							<div class="pr-6 pr-sm-16 mt-auto">
								<h3 class="font-600 dark-text my-2">
                                    <I18nVue t='Home.BestProposals.header1'/>
                                </h3>

								<p class="mb-0 main-grey">
                                    <I18nVue t='Home.BestProposals.header11'/>
								</p>
							</div>

							<div class="slide-card-angle d-flex align-center justify-center">
								<chevron-right-icon size="2x" class="text-white"></chevron-right-icon>
							</div>
						</router-link>
					</slide>

					<slide>
						<router-link
                            :to="{ name: 'Cards' }"
							class="app-slide-card pa-8 mx-4 my-8 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative"
						>
							<svg class="mb-3" id="icon-credit-card" viewBox="0 0 512 512">
								<path
									d="M469.334,170.671h-5.926l-73.272-127.99c-5.677-9.896-14.844-16.969-25.813-19.906     c-4.078-1.089-8.225-1.558-12.331-1.422c-6.885,0.229-13.652,2.161-19.773,5.724L21.157,208.171     C7.546,216.092-0.063,230.539,0,245.339c0.03,7.152,1.865,14.387,5.656,21.009L64,368.257v79.747     c0,23.531,19.135,42.667,42.667,42.667h362.667c23.531,0,42.667-19.135,42.667-42.667V213.337 C512,189.806,492.865,170.671,469.334,170.671z M64,325.302l-8.147-14.232L64,306.327V325.302z M64,281.643l-18.747,10.914 l-10.531-18.396L64,257.117V281.643z M64,213.337v19.096l-39.858,23.203c-5.762-10.172-2.306-23.173,7.743-29.029l32.698-19.035 C64.323,209.477,64,211.363,64,213.337z M438.817,170.671H296.998l106.366-61.928L438.817,170.671z M392.765,90.229 l-138.163,80.441h-42.124l169.758-98.833L392.765,90.229z M342.959,45.514c4.833-2.813,10.458-3.594,15.844-2.135 c5.448,1.458,9.99,4.979,12.813,9.906l0.022,0.039L170.081,170.671h-42.109L342.959,45.514z M490.667,448.004 c0,11.76-9.573,21.333-21.333,21.333H106.667c-11.76,0-21.333-9.573-21.333-21.333V213.337c0-11.76,9.573-21.333,21.333-21.333     h362.667c11.76,0,21.333,9.573,21.333,21.333V448.004z"
								></path>
								<path
									d="M404,341.337c-7,0-13.802,1.625-20,4.75c-6.198-3.125-13-4.75-20-4.75c-24.26,0-44,19.135-44,42.667 s19.74,42.667,44,42.667c7,0,13.802-1.625,20-4.75c6.198,3.125,13,4.75,20,4.75c24.26,0,44-19.135,44-42.667 S428.261,341.337,404,341.337z M404,405.337c-4.927,0-9.667-1.563-13.74-4.51c-1.865-1.354-4.063-2.031-6.26-2.031 c-2.198,0-4.396,0.677-6.26,2.031c-4.073,2.948-8.813,4.51-13.74,4.51c-12.5,0-22.667-9.573-22.667-21.333 S351.5,362.671,364,362.671c4.927,0,9.667,1.563,13.74,4.51c3.729,2.708,8.792,2.708,12.521,0c4.073-2.948,8.813-4.51,13.74-4.51 c12.5,0,22.667,9.573,22.667,21.333S416.5,405.337,404,405.337z"
								></path>
								<path
									d="M138.667,362.671h106.667c5.896,0,10.667-4.771,10.667-10.667s-4.771-10.667-10.667-10.667H138.667 c-5.896,0-10.667,4.771-10.667,10.667S132.771,362.671,138.667,362.671z"
								></path>
								<path
									d="M288,405.337H138.667c-5.896,0-10.667,4.771-10.667,10.667s4.771,10.667,10.667,10.667H288 c5.896,0,10.667-4.771,10.667-10.667S293.896,405.337,288,405.337z"
								></path>
							</svg>

							<div class="pr-16 mt-auto">
								<h3 class="font-600 dark-text my-2"><I18nVue t='Home.BestProposals.header2'/></h3>

								<p class="mb-0 main-grey"><I18nVue t='Home.BestProposals.header21'/></p>
							</div>

							<div class="slide-card-angle d-flex align-center justify-center">
								<chevron-right-icon size="2x" class="text-white"></chevron-right-icon>
							</div>
						</router-link>
					</slide>

<!--					<slide>-->
<!--						<router-link-->
<!--                            :to="{ name: 'P2PMoneyTransfer' }"-->
<!--							class="app-slide-card pa-8 mx-4 my-8 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative"-->
<!--						>-->
<!--							<svg class="mb-3" id="icon-card-to-card-transfer" viewBox="0 0 475.7 474">-->
<!--								<path-->
<!--									d="M265.3,271.3c13.9,0,25.2,11.3,25.2,25.2v135.4c0,13.9-11.3,25.2-25.2,25.2H42.2 C28.3,457,17,445.7,17,431.8V296.5c0-13.9,11.3-25.2,25.2-25.2H265.3 M265.3,254.3H42.2C19,254.3,0,273.3,0,296.5v135.4 C0,455,19,474,42.2,474h223.1c23.2,0,42.2-19,42.2-42.2V296.5C307.4,273.3,288.5,254.3,265.3,254.3L265.3,254.3z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M233.4,371.4c-4.8,0-9.5,1.1-13.7,3.3c-4.2-2.1-8.9-3.3-13.7-3.3c-16.6,0-30.2,13.1-30.2,29.2 c0,16.1,13.5,29.2,30.2,29.2c4.8,0,9.5-1.1,13.7-3.3c4.2,2.1,8.9,3.3,13.7,3.3c16.6,0,30.2-13.1,30.2-29.2 C263.6,384.5,250,371.4,233.4,371.4z M233.4,415.3c-3.4,0-6.6-1.1-9.4-3.1c-1.3-0.9-2.8-1.4-4.3-1.4c-1.5,0-3,0.5-4.3,1.4 c-2.8,2-6,3.1-9.4,3.1c-8.6,0-15.5-6.6-15.5-14.6c0-8.1,7-14.6,15.5-14.6c3.4,0,6.6,1.1,9.4,3.1c2.6,1.9,6,1.9,8.6,0 c2.8-2,6-3.1,9.4-3.1c8.6,0,15.5,6.6,15.5,14.6C249,408.7,242,415.3,233.4,415.3z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M51.5,386h73.1c4,0,7.3-3.3,7.3-7.3c0-4-3.3-7.3-7.3-7.3H51.5c-4,0-7.3,3.3-7.3,7.3 C44.2,382.8,47.5,386,51.5,386z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M153.9,415.3H51.5c-4,0-7.3,3.3-7.3,7.3c0,4,3.3,7.3,7.3,7.3h102.4c4,0,7.3-3.3,7.3-7.3 C161.2,418.5,157.9,415.3,153.9,415.3z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M433.5,17c13.9,0,25.2,11.3,25.2,25.2v135.4c0,13.9-11.3,25.2-25.2,25.2H210.4 c-13.9,0-25.2-11.3-25.2-25.2V42.2c0-13.9,11.3-25.2,25.2-25.2H433.5 M433.5,0H210.4c-23.2,0-42.2,19-42.2,42.2v135.4 c0,23.2,19,42.2,42.2,42.2h223.1c23.2,0,42.2-19,42.2-42.2V42.2C475.7,19,456.7,0,433.5,0L433.5,0z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M401.6,117.1c-4.8,0-9.5,1.1-13.7,3.3c-4.2-2.1-8.9-3.3-13.7-3.3c-16.6,0-30.2,13.1-30.2,29.2 s13.5,29.2,30.2,29.2c4.8,0,9.5-1.1,13.7-3.3c4.2,2.1,8.9,3.3,13.7,3.3c16.6,0,30.2-13.1,30.2-29.2S418.3,117.1,401.6,117.1z M401.6,161c-3.4,0-6.6-1.1-9.4-3.1c-1.3-0.9-2.8-1.4-4.3-1.4c-1.5,0-3,0.5-4.3,1.4c-2.8,2-6,3.1-9.4,3.1 c-8.6,0-15.5-6.6-15.5-14.6s7-14.6,15.5-14.6c3.4,0,6.6,1.1,9.4,3.1c2.6,1.9,6,1.9,8.6,0c2.8-2,6-3.1,9.4-3.1 c8.6,0,15.5,6.6,15.5,14.6S410.2,161,401.6,161z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M219.7,131.7h73.1c4,0,7.3-3.3,7.3-7.3c0-4-3.3-7.3-7.3-7.3h-73.1c-4,0-7.3,3.3-7.3,7.3 C212.4,128.5,215.7,131.7,219.7,131.7z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M322.1,161H219.7c-4,0-7.3,3.3-7.3,7.3s3.3,7.3,7.3,7.3h102.4c4,0,7.3-3.3,7.3-7.3S326.2,161,322.1,161z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M154,135.5c0-0.8-0.2-1.6-0.5-2.3c0-0.1-0.1-0.3-0.1-0.4c-0.3-0.6-0.6-1.3-1-1.9c-0.1-0.2-0.2-0.4-0.4-0.5 c0,0,0-0.1-0.1-0.1l-20-23.5c-1.5-1.7-3.6-2.8-5.8-2.8c-2.2,0-4.3,0.9-5.9,2.7c-2.9,3.3-2.9,8.4-0.1,11.7l4.6,5.4 c-12.2-0.2-22.4,1.9-23.5,2.1c-49.8,9-85,55.1-78.5,102.8c0.6,4.3,3.9,7.3,7.9,7.3c0.4,0,0.8,0,1.2-0.1c0.1,0,0.1,0,0.2,0 c4.3-0.8,7.2-5.1,6.5-9.7c-5.3-38.5,24.2-75.9,65.6-83.4c0,0,0.1,0,0.1,0c1.1-0.2,8.3-1.7,17.2-1.8l-5.5,3.3 c-3.7,2.2-5.1,7.1-3.3,11.2c1,2.2,2.8,3.8,4.9,4.5c2.1,0.7,4.2,0.4,6.1-0.7l26.2-15.6c0.7-0.4,1.3-0.9,1.8-1.5c0,0,0.1-0.1,0.1-0.1 c0.6-0.7,1.1-1.4,1.5-2.4c0.1-0.2,0.2-0.4,0.2-0.7c0,0,0-0.1,0-0.1c0.2-0.7,0.3-1.3,0.4-2c0-0.1,0-0.3,0-0.5c0-0.1,0-0.3,0-0.4 C154,135.7,154,135.6,154,135.5z M146,135.9L146,135.9c0,0.2,0,0.3,0,0.4c0,0,0,0.1,0,0.2l0,0c0,0.1-0.1,0.2-0.1,0.2L120,152.1 c-0.2-0.5,0-1,0.1-1l16.6-9.9c1.5-0.9,2.2-2.5,1.9-4.2c-0.3-1.6-1.6-2.9-3.3-3.2c-15.1-2.4-30.9,0.8-32.6,1.1 c-35.5,6.4-63,33-70.7,64.7c7.5-32.3,35.1-59.3,70.7-65.8c0,0,0.1,0,0.1,0c0.5-0.1,9.2-2,20.1-2c3.4,0,6.9,0.2,10.5,0.7 c1.6,0.2,3.2-0.6,4-2c0.8-1.5,0.6-3.3-0.5-4.5l-10.8-12.7c-0.2-0.2-0.2-0.6-0.2-0.9l19.5,22.9c0.1,0.1,0.1,0.2,0.2,0.3 c0.1,0.1,0.1,0.2,0.1,0.2C145.9,135.8,146,135.8,146,135.9C146,135.9,146,135.9,146,135.9z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M146,135.9C146,135.9,146,135.9,146,135.9L146,135.9c0,0.2,0,0.3,0,0.4c0,0,0,0.1,0,0.2l0,0 c0,0.1-0.1,0.2-0.1,0.2L120,152.1c-0.2-0.5,0-1,0.1-1l16.6-9.9c1.5-0.9,2.2-2.5,1.9-4.2c-0.3-1.6-1.6-2.9-3.3-3.2 c-15.1-2.4-30.9,0.8-32.6,1.1c-35.5,6.4-63,33-70.7,64.7c7.5-32.3,35.1-59.3,70.7-65.8c0,0,0.1,0,0.1,0c0.5-0.1,9.2-2,20.1-2 c3.4,0,6.9,0.2,10.5,0.7c1.6,0.2,3.2-0.6,4-2c0.8-1.5,0.6-3.3-0.5-4.5l-10.8-12.7c-0.2-0.2-0.2-0.6-0.2-0.9l19.5,22.9 c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.1,0.2C145.9,135.8,146,135.8,146,135.9z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M456.2,244.3c-0.6-4.2-3.9-7.3-7.9-7.3c-0.4,0-0.9,0-1.3,0.1c-4.3,0.8-7.2,5-6.5,9.7 c5.3,38.5-24.2,75.9-65.6,83.4c0,0-0.1,0-0.2,0c-0.1,0-7.7,1.7-17.2,1.8l5.5-3.3c3.7-2.2,5.1-7.1,3.3-11.2c-1-2.2-2.8-3.8-4.9-4.5 c-2.1-0.7-4.2-0.4-6.2,0.7l-26.2,15.6c-0.7,0.4-1.3,0.9-1.8,1.5c-0.1,0.1-0.2,0.2-0.2,0.3c-0.5,0.6-1,1.4-1.3,2.3 c-0.1,0.3-0.2,0.6-0.3,0.8c-0.2,0.7-0.3,1.4-0.4,2c0,0.2,0,0.3,0,0.5c0,0.2,0,0.4,0,0.6c0,0.8,0.2,1.6,0.5,2.3 c0.1,0.2,0.1,0.4,0.2,0.5c0.2,0.6,0.6,1.2,1,1.8c0.1,0.2,0.2,0.3,0.4,0.5c0,0,0.1,0.1,0.1,0.1l20,23.5c1.5,1.7,3.6,2.8,5.8,2.8h0.1 c2.2,0,4.3-1,5.8-2.7c2.9-3.2,2.9-8.4,0.1-11.7l-4.6-5.4c12.3,0.2,22.4-1.9,23.5-2.1C427.5,338,462.7,291.9,456.2,244.3z M376.2,339.2c0,0-0.1,0-0.1,0c-0.2,0-15.4,3.3-30.5,1.3c-1.7-0.2-3.3,0.6-4,2c-0.8,1.5-0.6,3.3,0.5,4.5l10.8,12.7 c0.2,0.2,0.2,0.6,0.2,0.9l-19.5-22.9c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.1-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2v-0.1l0-0.1l0-0.1 c0-0.1,0-0.1,0.1-0.3l0-0.1c0.1-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0,0l25.8-15.3c0.2,0.5,0,1-0.1,1l-16.6,9.9c-1.5,0.9-2.2,2.5-1.9,4.2 c0.3,1.6,1.6,2.9,3.3,3.2c15.1,2.4,30.9-0.8,32.6-1.1c35.6-6.5,63.1-33.1,70.7-64.8C439.5,305.6,412,332.8,376.2,339.2z"-->
<!--								></path>-->
<!--								<path-->
<!--									d="M447,273.3c-7.5,32.3-35,59.5-70.8,66c0,0-0.1,0-0.1,0c-0.2,0-15.4,3.3-30.5,1.3c-1.7-0.2-3.3,0.6-4,2 c-0.8,1.5-0.6,3.3,0.5,4.5l10.8,12.7c0.2,0.2,0.2,0.6,0.2,0.9l-19.5-22.9c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.1-0.1-0.1 c0-0.1-0.1-0.1-0.1-0.2v-0.1l0-0.1l0-0.1c0-0.1,0-0.1,0.1-0.3l0-0.1c0.1-0.1,0.1-0.2,0.1-0.2c0,0,0,0,0,0l25.8-15.3 c0.2,0.5,0,1-0.1,1l-16.6,9.9c-1.5,0.9-2.2,2.5-1.9,4.2c0.3,1.6,1.6,2.9,3.3,3.2c15.1,2.4,30.9-0.8,32.6-1.1 C411.9,331.6,439.4,304.9,447,273.3z"-->
<!--								></path>-->
<!--							</svg>-->

<!--							<div class="pr-16 mt-auto">-->
<!--								<h3 class="font-600 dark-text my-2"><I18nVue t='Home.BestProposals.header3'/></h3>-->

<!--								<p class="mb-0 main-grey"><I18nVue t='Home.BestProposals.header31'/></p>-->
<!--							</div>-->

<!--							<div class="slide-card-angle d-flex align-center justify-center">-->
<!--								<chevron-right-icon size="2x" class="text-white"></chevron-right-icon>-->
<!--							</div>-->
<!--						</router-link>-->
<!--					</slide>-->

					<slide>
						<router-link
                            :to="{ name: 'MoneyTransfer' }"
							class="app-slide-card pa-8 mx-4 my-8 rounded-lg overflow-hidden d-flex flex-column text-decoration-none p-relative"
						>
							<svg class="mb-3" id="icon-money-transfer" viewBox="0 0 490.1 490.1">
								<path
									d="M385.9,14.2H104.3c-28.2,0-51.1,22.9-51.1,51.1v233.1l-32.3-32.3c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l53.3,53.3    c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l53.3-53.3c4.8-4.8,4.8-12.5,0-17.3c-4.8-4.8-12.5-4.8-17.3,0l-32.4,32.4V65.3    c0-14.7,11.9-26.6,26.6-26.6H386c14.7,0,26.6,11.9,26.6,26.6v34c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-34    C436.9,37.2,414,14.2,385.9,14.2z"
								></path>
								<path
									d="M416,153.5l-53.3,53.3c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l32.4-32.4v233.1    c0,14.7-11.9,26.6-26.6,26.6H104.3c-14.7,0-26.6-11.9-26.6-26.6v-34c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v34    c0,28.2,22.9,51.1,51.1,51.1h281.5c28.2,0,51.1-22.9,51.1-51.1V191.7l32.4,32.4c4.8,4.8,12.5,4.8,17.3,0s4.8-12.5,0-17.3    l-53.3-53.3C428.8,148.9,420.6,148.9,416,153.5z"
								></path>
								<path
									d="M245.1,136.7c-6.8,0-12.3,5.5-12.3,12.3v18.8h-1.6c-23.4,0-42.5,20.1-42.5,44.7s19.1,44.7,42.5,44.7h27.6    c9.9,0,18,9.1,18,20.2c0,11.2-8.1,20.2-18,20.2h-49.6c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h23.6v19.1    c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-19.2h1.8c0.1,0,0.2,0,0.3,0c23.2-0.3,41.9-20.3,41.9-44.7    c0-24.7-19.1-44.7-42.5-44.7h-27.6c-9.9,0-18-9.1-18-20.2s8.1-20.2,18-20.2H280c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3    h-22.6v-18.8C257.3,142.2,251.9,136.7,245.1,136.7z"
								></path>
							</svg>

							<div class="pr-16 mt-auto">
								<h3 class="font-600 dark-text my-2"><I18nVue t='Home.BestProposals.header4'/></h3>

								<p class="mb-0 main-grey"><I18nVue t='Home.BestProposals.header41'/></p>
							</div>

							<div class="slide-card-angle d-flex align-center justify-center">
								<chevron-right-icon size="2x" class="text-white"></chevron-right-icon>
							</div>
						</router-link>
					</slide>
				</hooper>
			</div>
		</section>
		<!-- END BEST OFFERS SECTION -->

		<!-- ONLINE CREDIT SECTION -->
		<section class="section px-4">
			<app-online-credit-calc @emit:up="generateTable" />
		</section>
		<!-- END ONLINE CREDIT SECTION -->

		<!-- ORPHAN CAROUSEL -->
		<mobile-slide />
		<!-- END ORPHAN CAROUSEL -->

		<!-- EXCHANGE RATES -->
		<app-exchange-rates />
		<!-- END EXCHANGE RATES -->

		<!-- CREDIT GENERATED TABLE -->
		<transition name="fade">
			<template v-if="generateTableModel.isTableGenerated">
				<div class="generated-table-modal p-fixed w-100 h-100 d-flex align-center justify-center">
					<div class="generated-table w-100 overflow-y-auto rounded">
						<div class="generated-table-content pa-8">
							<div class="d-flex align-center justify-space-between mb-5">
								<h2 class="font-600">
									<I18nVue t='CreditCalculator.payment_table'/>
								</h2>

								<v-btn @click="generateTableModel.isTableGenerated = false" icon depressed color="danger" large>
									<x-icon size="2x" class="custom-class"></x-icon>
								</v-btn>
							</div>

							<div class="app-table mb-7">
								<v-simple-table class="app-table app-table__border">
									<template v-slot:default>
										<tbody>
										<tr>
											<td class="text-left py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.credit_type'/>:</h5>
											</td>
											<td class="text-left py-4">
												<template v-if="$i18n.locale === 'uz'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_uz }}</h5>
												</template>

												<template v-if="$i18n.locale === 'ru'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_ru }}</h5>
												</template>

												<template v-if="$i18n.locale === 'en'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditType.title_en }}</h5>
												</template>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.credit_period'/>:</h5>
											</td>
											<td class="py-4">
												<template v-if="$i18n.locale === 'uz'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} oy</h5>
												</template>

												<template v-if="$i18n.locale === 'ru'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} месяц</h5>
												</template>

												<template v-if="$i18n.locale === 'en'">
													<h5 class="font-600">{{ generateTableModel.tableHeader.creditPeriod.month }} month</h5>
												</template>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.annual_rate'/>:</h5>
											</td>
											<td class="py-4">
												<h5 v-if='generateTableModel.tableHeader.interestRate.percent' class="font-600">{{ generateTableModel.tableHeader.interestRate.percent }}%</h5>
                                                <h5 v-else class="font-600">{{ generateTableModel.tableHeader.generalPercent }}%</h5>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.initial_payment'/>:</h5>
											</td>
											<td class="py-4">
												<h5 v-if='generateTableModel.tableHeader.initialPayment.value' class="font-600">{{ generateTableModel.tableHeader.initialPayment.value }}%</h5>
                                                <h5 v-else>-</h5>
											</td>
										</tr>
										<tr>
											<td class="py-4">
												<h5 class="font-600"><I18nVue t='CreditCalculator.privilege_period'/>:</h5>
											</td>
											<td class="py-4">
												<template v-if="$i18n.locale === 'uz'">
													<h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} oy</h5>
                                                    <h5 v-else>Mavjud emas</h5>
												</template>

												<template v-if="$i18n.locale === 'ru'">
													<h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} месяц</h5>
                                                    <h5 v-else>Недоступен</h5>
												</template>

												<template v-if="$i18n.locale === 'en'">
													<h5 v-if='generateTableModel.tableHeader.gracePeriod.month' class="font-600">{{ generateTableModel.tableHeader.gracePeriod.month }} month</h5>
                                                    <h5 v-else>Not available</h5>
												</template>
											</td>
										</tr>
										</tbody>
									</template>
								</v-simple-table>
							</div>

							<div class="app-table">
								<v-simple-table class="app-table app-table__border text-center">
									<template v-slot:default>
										<thead>
											<tr>
												<th width="75" class="text-center py-4">
													<h5 class="font-600">№</h5>
												</th>
												<th width="200" class="text-center py-4">
													<h5 class="font-600"><I18nVue t='CreditCalculator.payment_period'/></h5>
												</th>
												<th width="150" class="text-center py-4">
													<h5 class="font-600"><I18nVue t='CreditCalculator.date'/></h5>
												</th>
												<th width="375" class="text-center py-4">
													<h5 class="font-600"><I18nVue t='CreditCalculator.base_debt_payment'/></h5>
												</th>
												<th width="325"  class="text-center py-4">
													<h5 class="font-600"><I18nVue t='CreditCalculator.interest_rate_payment'/> </h5>
												</th>
<!--												<template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
<!--													<th width="325"  class="text-center py-4">-->
<!--														<h5 class="font-600"><I18nVue t='CreditCalculator.privilege_period'/></h5>-->
<!--													</th>-->
<!--												</template>-->
												<th width="250" class="text-center py-4">
													<h5 class="font-600"><I18nVue t='CreditCalculator.total_payment'/></h5>
												</th>
												<th width="275" class="text-center py-4">
													<h5 class="font-600"><I18nVue t='CreditCalculator.debt'/></h5>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(item, index) in generateTableModel.tableContent">
												<td class="py-4">
													<h5 class="font-600">{{ index + 1 }}</h5>
												</td>
												<td class="py-4">
													<h5 class="font-600">{{ item.dateFormat }}</h5>
												</td>
												<td class="py-4">
													<h5 class="font-600">{{ item.date }}</h5>
												</td>
												<td class="py-4">
													<h5 class="font-600">{{ item.loanPayment }}</h5>
												</td>
												<td class="py-4">
													<h5 class="font-600">{{ item.interestPayment }}</h5>
												</td>
<!--												<template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
<!--													<td class="py-4">-->
<!--														<h5 class="font-600">{{ item.gracePeriodPayment }}</h5>-->
<!--													</td>-->
<!--												</template>-->
												<td class="py-4">
													<h5 class="font-600">{{ item.total }}</h5>
												</td>
												<td class="py-4">
													<h5 class="font-600">{{ item.amountPayment }}</h5>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td></td>
												<td class="py-4 text-left" colspan="2">
													<h4 class="font-700"><I18nVue t='CreditCalculator.total'/>:</h4>
												</td>
												<td class="py-4">
													<h4 class="font-700">
														{{ generateTableModel.tableFooter.amountPayment }}
													</h4>
												</td>
												<td class="py-4">
													<h4 class="font-700">
														{{ generateTableModel.tableFooter.additionalPayment }}
													</h4>
												</td>
<!--												<template v-if='generateTableModel.tableHeader.gracePeriod.month'>-->
<!--													<td></td>-->
<!--												</template>-->
												<td class="py-4">
													<h4 class="font-700">
														{{ generateTableModel.tableFooter.total }}
													</h4>
												</td>
												<td></td>
											</tr>
										</tfoot>
									</template>
								</v-simple-table>
<!--								<div class="d-flex justify-center align-center mt-16">-->
<!--									<send-button-->
<!--										@emit:up="generatePDF2"-->
<!--										:text="$t('download_pdf')"-->
<!--									>-->
<!--										<download-icon size="1.3x" class="text-white"/>-->
<!--									</send-button>-->
<!--								</div>-->
							</div>
						</div>
					</div>
				</div>
			</template>
		</transition>
		<!-- END CREDIT GENERATED TABLE -->

		<!-- PDF GENERATED TABLE -->
		<template v-if="generateTableModel.isTableGenerated">
			<div id="element-to-print">
				<template>
					<section id="after1" class="pdf-item">
						<div class="pdf-item__content">
							<div style="display: flex; align-items: center; margin-bottom: 20px">
								<img src="/logo2.png" alt="" style="width: 90px; height: 90px">

								<div style="margin-left: 15px">
									<h4 class="font-600">Asakabank</h4>
									<hr style="margin: 4px 0" />

									<span class="font-600">Aksiyadorlik jamiyati</span>
								</div>
							</div>
							<div style="margin-bottom: 20px; margin-top: 20px">
								<h2 class="font-600 text-center">
									Kreditning asosiy shartlari to'g'risidagi axborot<br>
									VARAQASI *
								</h2>
							</div>
							<div>
								<table class="app-table__border pdf-table">
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												Tijorat bankining nomi:
											</h5>
										</td>
										<td class="text-left">
											<h5 class="font-600">
												“Asakabank” AJ
											</h5>
										</td>
									</tr>
									<tr>
										<td class="py-4">
											<h5 class="font-600">
												Rasmiy veb-sayti:
											</h5>
										</td>
										<td class="py-4">
											<h5 class="font-600">
												www.asakabank.uz
											</h5>
										</td>
									</tr>
									<tr>
										<td class="py-4">
											<h5 class="font-600">
												Telefon raqamlari:
											</h5>
										</td>
										<td class="py-4">
											<h5 class="font-600">
												(+99871) 200-55-22<br>
												Qisqa raqam: 1152
											</h5>
										</td>
									</tr>
								</table>
							</div>
							<div style="margin-bottom: 20px; margin-top: 20px">
								<h3 class="font-600 text-center">
									1-bo'lim. Kredit bo'yicha ma'lumotlar
								</h3>
							</div>
							<div>
								<table class="app-table__border pdf-table">
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												1. Kreditning turi
											</h5>
										</td>
										<td class="text-center" colspan="2" width="600">
											<h5 class="font-600">
												{{ generateTableModel.tableHeader.creditType.title_uz }}
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												2. Kreditning maqsadi
											</h5>
										</td>
										<td class="text-center" colspan="2" width="600">
											<h5 class="font-600">
												{{ credit.creditPurpose.uz }}
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												3. Kreditning miqdori
											</h5>
										</td>
										<td class="text-center" colspan="2" width="600">
											<h5 class="font-600">
												{{ generateTableModel.tableFooter.amountPayment }}
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												4. Kreditdan foydalanish muddati
											</h5>
										</td>
										<td class="text-center" colspan="2" width="600">
											<h5 class="font-600">
												{{ generateTableModel.tableHeader.creditPeriod.month }} oy
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												5. Kreditdan foydalanish muddati davomidagi foiz stavkasi (nominal miqdorda) va ushbu foiz miqdori bo'yicha to'lanishi lozim bo'lgan summa
											</h5>
										</td>
										<td class="text-center">
											<h5 class="font-600">
												<span v-if="generateTableModel.tableHeader.interestRate.percent">{{ generateTableModel.tableHeader.interestRate.percent }} %</span>
												<span v-if="generateTableModel.tableHeader.generalPercent">{{ generateTableModel.tableHeader.generalPercent }} %</span>
											</h5>
										</td>
										<td class="text-center"  width="150">
											<h5 class="font-600">
												{{ generateTableModel.tableFooter.additionalPayment }}
											</h5>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<h5 class="font-600" style="margin-bottom: 10px">
												6. Kreditning to'liq foydalanish muddati davomida to'lanadigan jami summa
											</h5>
											<v-row>
												<v-col md="3" class="text-center">
													<h5 class="font-600">
														{{ generateTableModel.tableFooter.amountPayment }}
													</h5>
														<v-divider class="divider" style="border: 1px solid rgba(var(--grey-light-2), 0.25);" />
													<h6 class="font-600">
														(kreditning miqdori)
													</h6>
												</v-col>
												<v-col md="1" class="text-center">
													+
												</v-col>
												<v-col md="3" class="text-center">
													<h5 class="font-600">
														{{ generateTableModel.tableFooter.additionalPayment }}
													</h5>
														<v-divider class="divider" style="border: 1px solid rgba(var(--grey-light-2), 0.25);" />
													<h6 class="font-600">
														(hisoblanadigan foizlar)
													</h6>
												</v-col>
												<v-col md="1" class="text-center">
													=
												</v-col>
												<v-col md="3" class="text-center">
													<h5 class="font-600">
														{{ generateTableModel.tableFooter.total }}
													</h5>
														<v-divider class="divider" style="border: 1px solid rgba(var(--grey-light-2), 0.25);" />
													<h6 class="font-600">
														(jami to'lanadigan summa)
													</h6>
												</v-col>
											</v-row>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												7. Kreditning imtiyozli davri (agar mavjud bo'lsa)
											</h5>
										</td>
										<td class="text-center" colspan="2" width="600">
											<h5 class="font-600">
												<span v-if="generateTableModel.tableHeader.gracePeriod.month">{{ generateTableModel.tableHeader.gracePeriod.month }} oy</span>
												<span v-else>Ko'zda tutilmagan</span>
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												8. To'lovlarning davriyligi<br>
												(har oyda, har chorakda va h.k.)
											</h5>
										</td>
										<td class="text-center" colspan="2" width="600">
											<h5 class="font-600">
												har oyda
											</h5>
										</td>
									</tr>
								</table>
								<div class="html2pdf__page-break"></div>
								<table class="app-table__border pdf-table" style="margin-top: 32px">
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												9. Kreditni so'ndirish usuli<br>
												(annuitet usulida (teng miqdorlarda), differentsial usulida)
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												{{ this.generateTableModel.tableHeader.refundSchema.title_uz }}
											</h5>
										</td>
									</tr>
									<tr>
										<td colspan="3">
											<h5 class="font-600" style="margin-bottom: 10px">
												10. To'lovlarning davrida bir martalik to'lov summasi:
											</h5>
											<v-row>
												<v-col md="6" class="text-center">
													<h5 class="font-600">
														<span v-if="generateTableModel.tableHeader.refundSchema.value === 'annuity'">{{ generateTableModel.tableContent[0].total }}</span>
														<span v-else>0</span>
														<v-divider class="divider" style="border: 1px solid rgba(var(--grey-light-2), 0.25);" />
														(annuitet usulida)
													</h5>
												</v-col>
												<v-col md="6" class="text-center">
													<h5 class="font-600">
														<span v-if="generateTableModel.tableHeader.refundSchema.value === 'differential'">{{ generateTableModel.tableContent[0].total }}</span>
														<span v-else>0</span>
														<v-divider class="divider" style="border: 1px solid rgba(var(--grey-light-2), 0.25);" />
														(differentsial usulida	)
													</h5>
												</v-col>
											</v-row>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												11. Kreditni ajratish shakli<br>
												(mahsulot/xizmat ta'minotchisi hisobvarag'iga pul o'tkazish, naqd pul, bank kartasiga o'tkazish, va h.k).
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												{{ credit.creditAllocationForm.uz }}
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												12. Kredit bilan bog'liq qo'shimcha xarajatlar, jumladan (agar bunday xarajatlar mavjud bo'lsa):
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												Ko'zda tutilmagan<br>
												(kreditning to'liq muddatiga
												pul ko'rinishida, jami)
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												- Turlari bo'yicha bankning komissiya va yig'imlari<br>
												(alohida ko'rsatilsin)
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												Ko'zda tutilmagan<br>
												(kreditning to'liq muddatiga
												pul ko'rinishida)
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												- uchinchi shaxslar xizmati <br>
												(alohida ko'rsatilsin)
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												Ko'zda tutilmagan
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												13. Kreditning to'liq qiymati<br>
												(nominal foiz stavkasini va kreditga xizmat ko'rsatish xarajatlarini o'z ichiga oladi).
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												Веб-сайтдаги маълумот
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												14. Kredit olish bo'yicha taqdim qilingan arizani ko'rib chiqish muddati
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												{{ credit.creditApplicationPeriod.uz }}
											</h5>
										</td>
									</tr>
								</table>
							</div>
							<div class="html2pdf__page-break"></div>
							<div style="margin-bottom: 20px; margin-top: 32px">
								<h3 class="font-600 text-center">
									2-bo'lim. Boshqa moliyaviy majburiyatlar bilan bog'liq muhim shartlar.
								</h3>
							</div>
							<div>
								<table class="app-table__border pdf-table">
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												1. Kredit bo'yicha qarzdorlik o'z vaqtida so'ndirilmaganligi uchun shartnomada ko'zda tutilayotgan to'lashi lozim bo'lgan neustoyka (jarima, penya) (agar bunday shart mavjud bo'lsa)
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												Ko'zda tutilmagan <br>
												(foiz yoki qat`iy belgilangan summa ko'rsatiladi, shuningdek neustoyka (jarima, penya) hisoblash uchun asos bo'luvchi shartnoma shartlari keltiriladi)
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												2. Kredit bo'yicha qarzdorlik o'z vaqtida so'ndirilmaganligi uchun kredit summasidan to'lanadigan oshirilgan foiz stavkasi miqdori (agar bunday shart mavjud bo'lsa)
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												Asosiy foiz stavkani
												1.3 barobari miqdorida
												(foizda)
											</h5>
										</td>
									</tr>
									<tr>
										<td class="text-left">
											<h5 class="font-600">
												3. Kreditning ta'minoti<br>
												(ta'minot predmetiga qo'yiladigan minimal talablar, garovning minimal qiymati)
											</h5>
										</td>
										<td class="text-center" width="300">
											<h5 class="font-600">
												{{ credit.creditCollateral.uz }}
											</h5>
										</td>
									</tr>
								</table>
							</div>
							<div style="margin-bottom: 20px; margin-top: 20px">
								<h3 class="font-600 text-center">
									Kredit olishga rozi bo'lishdan oldin diqqat bilan o'rganib chiqing!
								</h3>
							</div>
							<p class="font-600" style="text-indent: 50px">
								Siz kreditning shartlari va qiymati to'g'risida, to'lovlar va hisob-kitoblar tartibi to'g'risida (foizlar, jarima va penyalar),
								kredit shartnomasi bo'yicha Sizning huquqlaringiz va majburiyatlaringiz to'g'risida, kredit shartnomasi bo'yicha yuzaga kelishi
								mumkin bo'lgan xatarlar va javobgarliklar to'g'risida, shuningdek Sizga tushunarsiz bo'lgan boshqa masalalar yuzasidan bankdan
								to'liq va batafsil ma'lumot olishga haqlisiz.
							</p>
							<p class="font-600" style="text-indent: 50px; margin-top: 10px">
								Agar Sizda shikoyatlar mavjud bo'lsa, u holda Siz murojaatingizni +99871 200-55-22, 1152 raqamli telefoniga yoki Toshkent shahar,
								Nukus ko'chasi, 67-uy manziliga yoki office@asakabank.uz elektron manziliga jo'natishingiz mumkin.
							</p>
							<v-row style="margin-bottom: 50px;">
								<v-col md="7">
									<div style="margin-bottom: 20px; margin-top: 20px">
										<h3 class="font-600 text-center">
											AXBOROT VARAQASINING TO'G'RILIGI
											VA HAQIQIYLIGI TASDIQLANADI.
										</h3>
									</div>
								</v-col>
								<v-col md="5">

								</v-col>
							</v-row>
							<v-row>
								<v-col md="7">
									<v-divider class="divider" style="border: 1px solid rgba(var(--grey-light-2), 1);" />
									<h5 class="font-600 text-center">
										(bank mutaxassisining F.I.SH. va lavozimi)
									</h5>
								</v-col>
								<v-col md="1">

								</v-col>
								<v-col md="3">
									<v-divider class="divider" style="border: 1px solid rgba(var(--grey-light-2), 1);" />
									<h5 class="font-600 text-center">
										(to'ldirilgan sana)
									</h5>
								</v-col>
							</v-row>
							<p class="font-600" style="margin-top: 30px">
								* Mazkur varaqa kredit shartnomasi yoki kredit olish uchun buyurtmanoma o'rnini bosmaydi, aksincha turli banklarning
								kreditlash shartlarini taqqoslashga va kerakli tanlovni amalga oshirishga yordam beradi.
							</p>
						</div>
					</section>
				</template>
			</div>
		</template>
		<!-- END PDF GENERATED TABLE -->



	</section>
</template>

<script>
import AppHeroSlider from "@/components/AppHeroSlider";
import AppExchangeRates from "@/components/AppExchangeRates";
import MobileSlide from "./components/MobileSlide";
import AppOnlineCreditCalc from "@/components/AppOnlineCreditCalc";
import { ChevronRightIcon, ChevronLeftIcon, MapPinIcon, XIcon, DownloadIcon } from "vue-feather-icons";
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import I18nVue from '@/I18nVue'
import SendButton from "@/views/Admin/BaseComponents/SendButton";
import html2pdf from "html2pdf.js/src";

export default {
	name: "index",
	components: {
		AppHeroSlider,
		MobileSlide,
		AppOnlineCreditCalc,
		AppExchangeRates,
		ChevronRightIcon,
		ChevronLeftIcon,
		MapPinIcon,
		XIcon,
		Hooper,
		Slide,
		DownloadIcon,
        I18nVue,
		SendButton
	},
	data() {
		return {
			credit: {
				creditPurpose: {
					uz: ""
				},
				creditAllocationForm: {
					uz: ""
				},
				creditApplicationPeriod: {
					uz: ""
				},
				creditCollateral: {
					uz: ""
				}
			},
			hooperSettings: {
				itemsToShow: 4,
				wheelControl: false,
				infiniteScroll: true,
				breakpoints: {
					1350: {
						itemsToShow: 4
					},
					650: {
						itemsToShow: 2
					},
					0: {
						itemsToShow: 1
					},
				},
				autoPlay: true,
				playSpeed: 5000
			},
			generateTableModel: {
				isTableGenerated: false,
				creditTypeText: null,
				tableHeader: {},
				tableContent: []
			}
		};
	},
	mounted() {
		const $left = document.querySelector('[data-pull="left"]').getBoundingClientRect();
		const $content = document.querySelector('[data-pull="content"]')

		$content.style.paddingLeft = `${$left.left}px`
	},
	methods: {
		generatePDF2(){

			this.getCreditDetails(this.generateTableModel.tableHeader.creditTypeText)

			const element = document.getElementById('element-to-print');

			const opt = {
				margin: 0,
				filename: 'Credit Information.pdf',
				image: {type: 'jpeg', quality: 0.98},
				html2canvas: {scale: 2},
				jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'}
			};

			html2pdf().set(opt).from(element).save();
		},
		/*
		*
		* */
		slidePrev() {
			this.$refs.carousel.slidePrev();
		},

		/*
		*
		* */
		slideNext() {
			this.$refs.carousel.slideNext();
		},
		/*
		*
		* */
		generateTable(arg) {
			this.generateTableModel.isTableGenerated = arg.isTableGenerated
			this.generateTableModel.tableHeader = arg.tableHeader
			this.generateTableModel.tableContent = arg.tableContent
			this.generateTableModel.tableFooter = arg.tableFooter
			this.creditTypeText = arg.creditTypeText
		},
		/*
		*
		* */
		getCreditDetails(value){
			switch (value){
				case "mortgage_market":
					this.credit.creditPurpose.uz = "Uy-joy sotib olish uchun";
					this.credit.creditAllocationForm.uz = "Pudrat tashkilotining hisobvarag'iga pul o'tkazish yoki mahsulot/xizmat ta'minotchisi hisobvarag'iga pul o'tkazish/bank kartasiga o'tkazish";
					this.credit.creditApplicationPeriod.uz = "3 bank ish kuni";
					this.credit.creditCollateral.uz = "Kredit hisobiga sotib olinayotgan uy-joy, uchinchi shaxs kafilligi, kredit qaytmaslik xatari uchun sug'urta polisi va boshqa turdagi qonunda taqiqlanmagan ta'minot turlari";
					break;
				case "car_loan":
					this.credit.creditPurpose.uz = "Avtotransport vositasini sotib olish uchun";
					this.credit.creditAllocationForm.uz = "Ishlab chiqaruvchi korxona rasmiy dilleri hisobvarag'iga pul o'tkazish";
					this.credit.creditApplicationPeriod.uz = "30 daqiqa";
					this.credit.creditCollateral.uz = "Kredit hisobiga sotib olinayotgan avtotransport vositasi";
					break;
				case "microloans":
					this.credit.creditPurpose.uz = "Maqsadsiz";
					this.credit.creditAllocationForm.uz = "Naqd pul yoki bank kartasiga o'tkazish";
					this.credit.creditApplicationPeriod.uz = "15 daqiqa";
					this.credit.creditCollateral.uz = "Uchinchi shaxs kafilligi yoki kredit qaytmaslik xatari uchun sug'urta polisi";
					break;
				case "overdraft":
					this.credit.creditPurpose.uz = "Maqsadsiz";
					this.credit.creditAllocationForm.uz = "Bank oylik ish haqi/pensiya doirasidagi bank kartalariga o'tkazish";
					this.credit.creditApplicationPeriod.uz = "5 daqiqa";
					this.credit.creditCollateral.uz = "Mijozning oylik plastik kartasiga kelajakda tushadigan pul mablag'lari";
					break;
				case "education_credit":
					this.credit.creditPurpose.uz = "Oliy ta'lim muassasida ta'lim olish uchun";
					this.credit.creditAllocationForm.uz = "Oliy ta'lim muassasasining hisobvarag'iga o'tkazish";
					this.credit.creditApplicationPeriod.uz = "15 daqiqa";
					this.credit.creditCollateral.uz = "Uchinchi shaxs kafilligi yoki kredit qaytmaslik xatari uchun sug'urta polisi";
					break;
			}
		}
	}
};
</script>

<style></style>
