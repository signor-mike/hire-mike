<template>
    <v-container
        fluid
        fill-height
        flex-column
        class="primary--text"
        @click.self="goAhead"
    >
        <v-fab-transition mode="in-out">
            <v-card
                :max-width="$vuetify.breakpoint.mdAndDown ? '90%' : '25%'"
                outlined
                loading
                shaped
                v-if="isRunning"
                class="ma-auto"
            >
                <v-card-title class="primary--text"> Mike K. </v-card-title>
                <v-card-subtitle class="font-italic">/ˈmaɪ.ki/</v-card-subtitle>
                <v-card-text>
                    Hello and Welcome to my App
                    <v-divider class="my-2" />
                    <p class="text-caption text-center">
                        tap somewhere to skip this whole thing.
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined color="primary" block @click.once="goAhead">
                        meet me in {{ timeout }}
                        <v-icon right>keyboard_double_arrow_right</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-fab-transition>
    </v-container>
</template>

<script>
    export default {
        components: {},
        data: () => ({
            timeout: 5,
            isRunning: false,
        }),
        methods: {
            goAhead() {
                this.isRunning = false;
                this.timeout = 0;
                this.$router.push("/view?page=about");
                this.$store.commit("SET_NAV_VISIBILITY", true);
            },
        },
        beforeMount() {
            document.title = "Hire Mike";
        },
        mounted: function () {
            this.isRunning = true;
            if (this.$store.state.isNavVisible)
                this.$store.commit("SET_NAV_VISIBILITY", false);
            const countdown = setInterval(() => {
                this.timeout -= 1;
                if (this.timeout === 0) {
                    clearInterval(countdown);
                    this.goAhead();
                }
            }, 1000);
        },
    };
</script>
