<template>
    <v-navigation-drawer
    expand-on-hover
        rail>
        <v-list>
            <v-list-item title="Meus Tópicos" subtitle="Maurício Reisdoefer"></v-list-item>
            <v-divider></v-divider>
            <v-list-item><v-btn block>Tópico 1</v-btn></v-list-item>
            <v-list-item><v-btn block>Tópico 2</v-btn></v-list-item>
            <v-list-item><v-btn block>Tópico 3</v-btn></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>