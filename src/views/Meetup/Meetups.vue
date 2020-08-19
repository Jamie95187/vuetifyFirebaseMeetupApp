<template>
  <v-container>
    <v-layout  v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex >
        <v-card color="#ffff1a">
          <v-container>
            <v-layout>
              <v-flex xs5 sm4 md3>
                <v-img pl15
                :src="meetup.imageUrl"
                height="130px"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title>
                  <div>
                    <h3 class="grey--text">{{ meetup.title }}</h3>
                    <div>{{ meetup.date | date }}</div>
                  </div>
              </v-card-title>
              <v-card-action>
                <v-btn color="white--text" text  :to="/meetups/ + meetup.id">
                  <v-icon left>arrow_forward</v-icon>
                  View Meetup
                </v-btn>
              </v-card-action>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Meetups',
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>

<style>

</style>
