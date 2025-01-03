<template>
    <v-navigation-drawer
    expand-on-hover
        rail>
        <v-list>
            <v-list-item title="Meus Tópicos" subtitle="Maurício Reisdoefer"></v-list-item>
            <v-divider></v-divider>
            <v-list-item><v-btn to="/" block>Home</v-btn></v-list-item>
            <v-list-item><v-btn to="/topics" block>Topics</v-btn></v-list-item>
            <v-list-item><v-btn to="/regsLog" block>Register/Login</v-btn></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'v-sidebar'
}
</script>