<template>
    <Wrapper :title="$store.state['contact-title']">
        <v-row :dense="$vuetify.breakpoint.smAndDown">
            <v-col
                cols="12"
                md="6"
                v-for="c in $store.state.contacts.data"
                :key="c.title"
            >
                <Contact :contact="c" />
            </v-col>
        </v-row>
        <v-divider class="my-5" />
        <Contact :contact="$store.state.contacts.footer" />
    </Wrapper>
</template>

<script>
    export default {
        components: {
            Wrapper: () => import("@/layouts/ViewWrapper"),
            Contact: () => import("@/components/Contact"),
        },
    };
</script>
