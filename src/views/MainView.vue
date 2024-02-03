<template>
    <v-slide-x-transition mode="out-in" :appear="true">
        <About v-if="$route.query.page === 'about'" />
        <MyWork v-else-if="$route.query.page === 'projects'" />
        <MyStack v-else-if="$route.query.page === 'stack'" />
        <Contacts v-else-if="$route.query.page === 'contact'" />
        <NotFound v-else />
    </v-slide-x-transition>
</template>

<script>
    export default {
        components: {
            About: () => import("@/blocks/About"),
            MyWork: () => import("@/blocks/MyWork"),
            MyStack: () => import("@/blocks/MyStack"),
            Contacts: () => import("@/blocks/Contacts"),
            NotFound: () => import("@/views/NotFound"),
        },
        mounted: function () {
            this.updateTitle();
            if (!this.$store.state.isNavVisible)
                this.$store.commit("SET_NAV_VISIBILITY", true);
        },
        updated() {
            this.updateTitle();
        },
        methods: {
            updateTitle() {
                document.title = `Mike | ${this.$route.query.page.toUpperCase()}`;
            },
        },
    };
</script>

<style></style>
