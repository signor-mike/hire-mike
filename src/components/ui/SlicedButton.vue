<template>
    <router-link
        custom
        :to="`?page=${link.query}`"
        v-slot="{ navigate, isActive, isExactActive, href }"
    >
        <a
            class="ma-auto text-center primary--text text-truncate"
            style="max-width: 100%"
            :class="[
                isActive && 'router-link-active text-button',
                isExactActive && 'router-link-exact-active text-h6',
            ]"
            @click="navigate"
            :href="href"
        >
            {{ link.slug }}
        </a>
    </router-link>
</template>

<script>
    export default {
        props: {
            link: { query: String },
        },
    };
</script>

<style scoped>
    .router-link-active,
    .router-link-exact-active {
        cursor: pointer;
        display: block;
    }

    .router-link-active:before,
    .router-link-active:after {
        content: "";
        width: 100%;
        height: 1px;
        display: block;
        background-color: var(--v-primary-base);
        position: relative;
        left: 0;
        transition: all 1000ms cubic-bezier(0.89, -0.17, 0.14, 1.225);
    }
    .router-link-exact-active:before,
    .router-link-exact-active:after {
        width: 0px;
        left: 50%;
    }
</style>
