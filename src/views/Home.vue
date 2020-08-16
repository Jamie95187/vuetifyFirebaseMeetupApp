<template>
  <v-app>
    <Header />
    <v-content>
      <v-layout>
        <v-flex xs1 >
    <router-view />
  </v-flex>
</v-layout>
</v-content>
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
