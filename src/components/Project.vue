<template>
    <v-card outlined @click="dialog = true">
        <v-card-subtitle class="text-center">
            {{ project.title }}
        </v-card-subtitle>
        <v-img width="auto" :src="project.image" class="img">
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </v-row>
            </template>
        </v-img>
        <v-dialog v-model="dialog" width="1200">
            <v-sheet>
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col cols="12">
                            <v-row
                                align="center"
                                :class="{
                                    'text-center':
                                        $vuetify.breakpoint.smAndDown,
                                }"
                            >
                                <v-col cols="12" md="8">
                                    <span class="text-h6 primary--text">
                                        {{ project.data.header }}
                                    </span>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <span
                                        v-for="tech in project.data.techs"
                                        :key="tech"
                                        class="text-overline font-weight-thin"
                                    >
                                        {{ tech }}
                                    </span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col :cols="cols.image">
                            <v-img
                                :max-height="
                                    $vuetify.breakpoint.smAndDown
                                        ? '600'
                                        : '800'
                                "
                                contain
                                :src="project.image"
                            ></v-img>
                        </v-col>
                        <v-col :cols="cols.text">
                            <p class="text-md-left text-center">
                                {{ project.data.description }}
                            </p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-dialog>
    </v-card>
</template>
<script>
    export default {
        components: {},
        props: {
            project: Object,
        },
        data: () => ({
            dialog: false,
        }),
        computed: {
            cols() {
                let OUT = {
                    image: "6",
                    text: "6",
                };
                if (this.$vuetify.breakpoint.smAndDown) {
                    OUT.image = "12";
                    OUT.text = "12";
                }
                return OUT;
            },
        },
    };
</script>

<style scoped>
    .img {
        filter: blur(2px);
    }
    .img:hover,
    .img:active {
        filter: blur(0);
    }
</style>
