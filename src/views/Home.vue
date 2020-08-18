<template>
  <v-container>
    <v-layout row wrap class="text-center">
      <v-col>
        <v-flex>
          <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
        </v-flex>
      </v-col>
      <v-col>
        <v-flex>
          <v-btn large router to="/meetup/new" class="info">Organise Meetups</v-btn>
        </v-flex>
      </v-col>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout class="mt-2">
      <v-flex xs12 class="text-center">
        <p>Join our meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id);
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
