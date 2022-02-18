<template>
    <v-container fluid class="not-found">
        <v-row no-gutters class="align-center">
            <v-col cols="12" sm="12" md="6" xl="6">
                <div class="ma-16 pa-16">
                    <h1 class="black--text font-700">Ошибка 404</h1>
                    <h3 class="black--text">Страница не найдена</h3>
                    <hr />
                    <p>Запрашиваемая вами страница не существует или у вас оказалась неверная ссылка.</p>
                    <v-btn
                        to="/"
                        class="font-700"
                        color="rgba(var(--main-primary), 1)"
                        min-width="192"
                        min-height="50"
                        depressed
                        dark
                        rounded
                    >
                        На главную
                    </v-btn>
                </div>
            </v-col>
            <v-col class="d-sm-none d-xl-block d-md-block pa-16" md="6">
                <div class="image-404">
                    <img src="/images/404.png" alt="Страница не найдена" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'NotFound',
    }
</script>
