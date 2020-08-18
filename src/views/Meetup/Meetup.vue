<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
          <h4 class="primary--text">{{ meetup.title }}</h4>
          </v-card-title>
          <v-img
          :src="meetup.imageUrl"
          height="400px"
          ></v-img>
          <v-card-text>
            <div class="light blue--text">{{ meetup.date }} - New York (Where it takes place)</div>
            <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>

<style>

</style>
