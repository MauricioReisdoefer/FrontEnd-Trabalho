<template>
  <v-app>
    <vHeader></vHeader>
    <v-main>
      <vSidebar></vSidebar>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import vSidebar from './components/sidebar.vue';
import vHeader from './components/header.vue'

export default {
  name: 'App',
  components: {
    vSidebar,
    vHeader
  }
}
</script>