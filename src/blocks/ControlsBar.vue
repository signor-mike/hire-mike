<template>
    <v-app-bar app fixed flat color="secondary">
        <v-row
            align="center"
            justify="space-between"
            class="mx-auto text-center"
        >
            <v-col cols="3">
                <v-btn
                    aria-label="go-to-homepage"
                    icon
                    @click="$router.push('/')"
                    color="primary"
                >
                    <v-icon large> home </v-icon>
                </v-btn>
            </v-col>

            <v-col cols="3">
                <SeeMoreButton
                    :ariaLabel="'privacy'"
                    :body="$store.state.gdpr"
                    buttonIcon="privacy_tip"
                    :bodyLength="0"
                    wrapperClass="d-flex justify-center"
                />
            </v-col>

            <v-col cols="3">
                <SeeMoreButton
                    :ariaLabel="'project-description'"
                    :body="$store.state.appInfo"
                    buttonIcon="info"
                    :bodyLength="0"
                    wrapperClass="d-flex justify-center"
                />
            </v-col>

            <v-col cols="3">
                <ThemeToggler />
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
    export default {
        components: {
            ThemeToggler: () => import("@/components/ThemeToggler"),
            SeeMoreButton: () => import("@/components/ui/SeeMoreButton"),
        },
    };
</script>

<style></style>
