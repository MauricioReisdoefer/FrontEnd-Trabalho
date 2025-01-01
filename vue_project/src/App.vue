<template>
  <v-app>
    <!-- Barra de navegação ou qualquer outro componente pode ir aqui -->
    <v-main>
      <Sidebar></Sidebar>
      <v-container>
        <h1>Bem-vindo ao Vuetify!</h1>
        <p>Esta é a sua aplicação Vue com Vuetify.</p>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import Sidebar from './components/sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>