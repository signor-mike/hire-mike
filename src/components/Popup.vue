<template>
  <!-- dialog / popup -->
  <div>
    <v-dialog v-model="dialog" max-width="50%">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" text class="success px-2">
          Add new project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add new project</h2>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
