<template>
  <v-app-bar app :elevation="4">
    <v-toolbar-title>Fórum</v-toolbar-title>

    <v-btn to="/" text>Home</v-btn>
    <v-btn to="/topics" text>Topics</v-btn>
    <v-btn to="/register" text>Register</v-btn>
    <v-btn to="/login" text>Login</v-btn>

    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>


<script>
export default {
  name: 'v-header'
}
</script>