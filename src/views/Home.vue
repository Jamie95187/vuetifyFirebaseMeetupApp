<template>
  <v-app>
    <Header />
    <v-spacer></v-spacer>
    <router-view />
  </v-app>
</template>

<script>
import Header from '../components/Layout/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }

};
</script>
