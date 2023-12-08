<template>
    <v-bottom-navigation app flat color="secondary">
        <v-row justify="space-around" align="center">
            <v-col
                cols="3"
                v-for="link in $store.state.navLinks"
                :key="link.id"
            >
                <SlicedButton :link="link" />
            </v-col>
        </v-row>
    </v-bottom-navigation>
</template>

<script>
    export default {
        components: {
            SlicedButton: () => import("@/components/ui/SlicedButton"),
        },
    };
</script>
