<template>

    <div class="affiliates-view">
        <v-container>
            <div class="app-content-view">
                <v-simple-table class="app-table app-table__border">
                    <template v-slot:default>
                        <tbody>
                            <template v-for="item in $t('AboutBank.affiliates.table')">
                                <tr>
                                    <td class="py-4">
                                        <h5 class="font-600">
                                            {{item.td1}}
                                        </h5>
                                    </td>
                                    <td width="600" class="py-4">
                                        <h5 class="font-600">
                                            {{item.td2}}
                                        </h5>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'index',
    }
</script>