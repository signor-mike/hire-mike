<template>
    <Wrapper :title="$store.state['projects-title']">
        <v-row justify="center" align="center">
            <v-col
                v-for="prj in $store.state.projects"
                :key="prj.image"
                :cols="prj.vertical ? '6' : '4'"
                :md="prj.vertical ? '8' : '4'"
            >
                <Project :project="prj" />
            </v-col>
        </v-row>
    </Wrapper>
</template>

<script>
    export default {
        components: {
            Wrapper: () => import("@/layouts/ViewWrapper"),
            Project: () => import("@/components/Project"),
        },
    };
</script>
