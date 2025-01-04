<template>
  <v-app-bar app :elevation="4">
    <v-toolbar-title>Fórum</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon to="/manage/1">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>


<script>
export default {
  name: 'v-header'
}
</script>