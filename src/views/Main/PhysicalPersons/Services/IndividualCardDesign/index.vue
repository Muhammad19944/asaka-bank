<template>
	<div class="individual-card-design-view">
		<v-container>
			<div class="card-design-content">
				<v-row>
					<v-col md="6">
						<div class="card-template-container p-relative">
							<div
								id="canvas-container"
								data-card="image"
								class="card-template-wrap card-wrap-canvas p-relative rounded-xl overflow-hidden"
							>
								<div class="canvas-ratio pa-6 p-absolute w-100 h-100">
									<h2
										class="font-700 text-white"
										:class="{
										'right' : $store.state.INDIVIDUAL_CARD_DESIGN.logoPositionValue === 'top_right',
										'text-black' : $store.state.INDIVIDUAL_CARD_DESIGN.textColorValue === 'black'
									}"
										data-card="title"
									>ASAKA BANK</h2>

									<template v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'white'">
										<img src="/images/card-design/uzcard-1.png" alt="Uzcard Logo" data-card="logo" />
									</template>

									<template v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'black_white'">
										<img src="/images/card-design/uzcard-2.png" alt="Uzcard Logo" data-card="logo" />
									</template>

									<template v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'black'">
										<img src="/images/card-design/uzcard-3.png" alt="Uzcard Logo" data-card="logo" />
									</template>

									<template v-if="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue === 'colorful'">
										<img src="/images/card-design/uzcard-4.png" alt="Uzcard Logo" data-card="logo" />
									</template>
								</div>
							</div>

							<!-- Hike -->
							<div
								data-gallery="hike"
								class="card-generation-dropdown w-100 rounded-lg pa-5 p-absolute transition-all"
							>
								<v-row>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100"
										>
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/hike-1.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden  d-block w-100 h-100 "
										>
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/hike-2.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/hike-3.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/hike-4.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/hike-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
								</v-row>
							</div>
							<!-- End Hike -->

							<!-- Travel -->
							<div data-gallery="travel"
							     class="card-generation-dropdown w-100 rounded-lg pa-5 p-absolute transition-all">
								<v-row>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/travel-1.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/travel-2.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/travel-3.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/travel-4.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/travel-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/travel-6.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100"
										>
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/travel-7.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
								</v-row>
							</div>
							<!-- End Travel -->

							<!-- Landscape -->
							<div data-gallery="landscapes"
							     class="card-generation-dropdown w-100 rounded-lg pa-5 p-absolute transition-all">
								<v-row>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/landscape-1.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/landscape-2.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/landscape-3.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/landscape-4.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/landscape-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/landscape-6.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/landscape-7.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
								</v-row>
							</div>
							<!-- End Landscape -->

							<!-- Animals -->
							<div data-gallery="animals"
								class="card-generation-dropdown w-100 rounded-lg pa-5 p-absolute transition-all"
							>
								<v-row>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-1.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-2.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-3.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-4.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-6.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-7.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-8.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/animals-9.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
								</v-row>
							</div>
							<!-- End Animals -->

							<!-- Family -->
							<div data-gallery="family"
							     class="card-generation-dropdown w-100 rounded-lg pa-5 p-absolute transition-all">
								<v-row>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/family-1.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100"
										>
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/family-2.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100"
										>
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/family-3.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100"
										>
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/family-4.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/family-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-itemsoutline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/family-6.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
								</v-row>
							</div>
							<!-- End Family -->

							<!-- Texture -->
							<div data-gallery="texture"
							     class="card-generation-dropdown w-100 rounded-lg pa-5 p-absolute transition-all">
								<v-row>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/texture-1.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/texture-2.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/texture-3.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/texture-4.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/texture-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
									<v-col md="4">
										<button
											type="button"
											data-gallery="items"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2">
												<img
													src="/images/texture-6.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>
											</v-responsive>
										</button>
									</v-col>
								</v-row>
							</div>
							<!-- End Texture -->

							<div class="card-generator-wrap mt-15">
								<v-row>
									<v-col md="4">
										<button
											@click="openCardTemplateModal('hike')"
											type="button"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2.25">
												<img
													src="/images/hike-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>

												<div class="h-100 d-flex align-center justify-center">
													<div class="item-caption py-2 px-4 rounded-xl">
														<h5 class="dark-text font-600 line-base">{{ $t('hike') }}</h5>
													</div>
												</div>
											</v-responsive>
										</button>
									</v-col>

									<v-col md="4">
										<button
											@click="openCardTemplateModal('travel')"
											type="button"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2.25">
												<img
													src="/images/travel-5.jpg"
													alt="Travel"
													class="img-cover p-absolute transition-all"
													style="left: 0"
												/>

												<div class="h-100 d-flex align-center justify-center">
													<div class="item-caption py-2 px-4 rounded-xl">
														<h5 class="dark-text font-600 line-base">{{ $t('journey') }}</h5>
													</div>
												</div>
											</v-responsive>
										</button>
									</v-col>

									<v-col md="4">
										<button
											@click="openCardTemplateModal('landscapes')"
											type="button"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2.25">
												<img
													src="/images/landscape-6.jpg"
													alt="Travel"
													class="img-cover p-absolute pointer transition-all"
													style="left: 0"
												/>

												<div class="h-100 d-flex align-center justify-center">
													<div class="item-caption py-2 px-4 rounded-xl">
														<h5 class="dark-text font-600 line-base">{{ $t('landscapes') }}</h5>
													</div>
												</div>
											</v-responsive>
										</button>
									</v-col>

									<v-col md="4">
										<button
											@click="openCardTemplateModal('animals')"
											type="button"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2.25">
												<img
													src="/images/animals-9.jpg"
													alt="Travel"
													class="img-cover p-absolute pointer transition-all"
													style="left: 0"
												/>

												<div class="h-100 d-flex align-center justify-center">
													<div class="item-caption py-2 px-4 rounded-xl">
														<h5 class="dark-text font-600 line-base">{{ $t('animals') }}</h5>
													</div>
												</div>
											</v-responsive>
										</button>
									</v-col>

									<v-col md="4">
										<button
											@click="openCardTemplateModal('family')"
											type="button"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100">
											<v-responsive :aspect-ratio="3 / 2.25">
												<img
													src="/images/family-2.jpg"
													alt="Travel"
													class="img-cover p-absolute pointer transition-all"
													style="left: 0"
												/>

												<div class="h-100 d-flex align-center justify-center">
													<div class="item-caption py-2 px-4 rounded-xl">
														<h5 class="dark-text font-600 line-base">{{ $t('family') }}</h5>
													</div>
												</div>
											</v-responsive>
										</button>
									</v-col>

									<v-col md="4">
										<button
											@click="openCardTemplateModal('texture')"
											type="button"
											class="card-gallery-items outline-transparent rounded overflow-hidden d-block w-100 h-100"
										>
											<v-responsive :aspect-ratio="3 / 2.25">
												<img
													src="/images/texture-2.jpg"
													alt="Travel"
													class="img-cover p-absolute pointer transition-all"
													style="left: 0"
												/>

												<div class="h-100 d-flex align-center justify-center">
													<div class="item-caption py-2 px-4 rounded-xl">
														<h5 class="dark-text font-600 line-base">{{ $t('texture') }}</h5>
													</div>
												</div>
											</v-responsive>
										</button>
									</v-col>
								</v-row>
							</div>
						</div>
					</v-col>

					<v-col md="6">
						<form class="app-form pa-10 rounded-lg">
							<div class="app-form-group mb-8">
								<h4 class="font-600 dark-text">
									{{ $t('upload_image') }}
								</h4>

								<v-divider class="mt-3 mb-7" style="border-color: rgba(var(--border-color), 1)" />

								<v-file-input
									@change="uploadFile"
									append-icon="mdi-camera"
									prepend-icon=""
									outlined
									hide-details
									:placeholder="$t('Services.OpenCard.documents_sub')"
								></v-file-input>

								<h6 class="mt-3">
									{{ $t('upload_image_text') }}
								</h6>
							</div>

							<v-row>
								<v-col md="6">
									<div class="app-form-group mb-8">
										<h4 class="font-600 dark-text">{{ $t('payment_system') }}</h4>

										<v-divider
											class="mt-3 mb-7"
											style="border-color: rgba(var(--border-color), 1)"
										/>

										<v-select
											v-model="$store.state.INDIVIDUAL_CARD_DESIGN.cardValue"
											:items="$store.state.INDIVIDUAL_CARD_DESIGN.card"
											item-text="title"
											item-value="value"
											outlined
											hide-details
											:placeholder="$t('payment_system')"
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
											</template>
										</v-select>
									</div>
								</v-col>

								<v-col md="6">
									<div class="app-form-group mb-8">
										<h4 class="font-600 dark-text">{{ $t('logo_color') }}</h4>

										<v-divider
											class="mt-3 mb-7"
											style="border-color: rgba(var(--border-color), 1)"
										/>

										<v-select
											v-model="$store.state.INDIVIDUAL_CARD_DESIGN.logoColorValue"
											:items="$store.state.INDIVIDUAL_CARD_DESIGN.logoColor"
											:item-text="
												$i18n.locale === 'uz' ? 'title_uz'
												: $i18n.locale === 'ru' ? 'title_ru'
												: 'title_en'
											"
											item-value="value"
											outlined
											hide-details
											:placeholder="$t('logo_color')"
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
											</template>
										</v-select>
									</div>
								</v-col>

								<v-col md="6">
									<div class="app-form-group mb-8">
										<h4 class="font-600 dark-text">{{ $t('location_logo') }}</h4>

										<v-divider
											class="mt-3 mb-7"
											style="border-color: rgba(var(--border-color), 1)"
										/>

										<v-select
											v-model="$store.state.INDIVIDUAL_CARD_DESIGN.logoPositionValue"
											:items="$store.state.INDIVIDUAL_CARD_DESIGN.logoPosition"
											:item-text="
												$i18n.locale === 'uz' ? 'title_uz'
												: $i18n.locale === 'ru' ? 'title_ru'
												: 'title_en'
											"
											item-value="value"
											outlined
											hide-details
											:placeholder="$t('location_logo')"
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
											</template>
										</v-select>
									</div>
								</v-col>

								<v-col md="6">
									<div class="app-form-group mb-8">
										<h4 class="font-600 dark-text">{{ $t('color_text') }}</h4>

										<v-divider
											class="mt-3 mb-7"
											style="border-color: rgba(var(--border-color), 1)"
										/>

										<v-select
											v-model="$store.state.INDIVIDUAL_CARD_DESIGN.textColorValue"
											:items="$store.state.INDIVIDUAL_CARD_DESIGN.textColor"
											:item-text="
											$i18n.locale === 'uz' ? 'title_uz'
											: $i18n.locale === 'ru' ? 'title_ru'
											: 'title_en'
										"
											item-value="value"
											outlined
											hide-details
											:placeholder="$t('color_text')"
										>
											<template v-slot:append>
												<chevron-down-icon size="1.5x" class="grey--text"></chevron-down-icon>
											</template>
										</v-select>
									</div>
								</v-col>

								<v-col md="12">
									<v-btn
										@click="continueForm"
										:disabled="disabled"
										depressed
										color="danger"
										rounded
										min-width="192"
										min-height="50"
									>
										<span class="font-700 text-white">{{ $t('continue') }}</span>
									</v-btn>
								</v-col>
							</v-row>
						</form>
					</v-col>
				</v-row>
			</div>
		</v-container>

		<template v-if="isLoaded">
			<div class="app-loader-client">
				<v-progress-circular
					indeterminate
					color="red"
				></v-progress-circular>
			</div>
		</template>
	</div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons";

export default {
	name: "index",
	components: {
		ChevronDownIcon
	},
	data() {
		return {
			isLoaded: false,
			disabled: true
		};
	},
	watch: {
		'$store.state.INDIVIDUAL_CARD_DESIGN': {
			deep: true,
			handler(val) {
				if(val.logoColorValue && val.logoPositionValue && val.textColorValue) {
					this.disabled = false
				}
			}
		}
	},
	methods: {
		/*
		*
		* */
		continueForm() {
			this.$router.push({name: 'IndividualDesignCardID', query: { individual: "yes" }})
		},

		/*
		*
		* */
		uploadFile(file) {
			let formData = new FormData()
			formData.append('card_image', file)

			this.$http
				.post('/upload/', formData)
				.then(({data}) => {
					console.log(data);
					this.$toast.success(`Rasm yuklandi`)

					const $cardImage = document.querySelector("[data-card='image']");

					$cardImage.style.backgroundImage = `url(${this.$http.defaults.baseURL + data.url})`;

					this.$store.state.INDIVIDUAL_CARD_DESIGN.imageId = data.id
					this.$store.state.INDIVIDUAL_CARD_DESIGN.imagePath = data.url
				})
				.catch((err) => {
					this.$toast.error(`Yuklashda xatolik`)
				})
		},

		/*
		*
		* */
		openCardTemplateModal(val) {
			const $cardImage = document.querySelector("[data-card='image']");
			const $items = [...document.querySelectorAll("[data-gallery]")];
			const $galleryItems = document.querySelectorAll("[data-gallery='items'] img");

			const currentModal = $items.find((items) => items.dataset.gallery === val);

			$items.forEach((item) => item.classList.remove("active"));
			currentModal.classList.add("active");
			$cardImage.classList.add("active");

			$galleryItems.forEach((item) => {
				item.addEventListener("click", () => {
					this.$store.state.INDIVIDUAL_CARD_DESIGN.imagePath = item.src
					this.$store.state.INDIVIDUAL_CARD_DESIGN.imageId = null

					$cardImage.style.backgroundImage = `url(${item.src})`;

					currentModal.classList.remove("active");
					$cardImage.classList.remove("active");
				});
			});
		}
	}
};
</script>

<style></style>
