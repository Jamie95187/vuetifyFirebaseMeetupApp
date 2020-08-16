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
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id">
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
    data: () => ({
      meetups: [
        { imageUrl: 'https://cdn.vox-cdn.com/thumbor/_Azul93vJ6T8m1jEoxgCNl-x1Dw=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66907018/shutterstock_1701722863.0.jpg', id: 'asdasdags12312', title: "Meet up in New York"},
        { imageUrl: 'https://images.theconversation.com/files/349143/original/file-20200723-35-1x7it1t.jpg?ixlib=rb-1.1.0&rect=136%2C157%2C6853%2C4485&q=45&auto=format&w=926&fit=clip', id: 'asdasdags12343', title: "Meet up in Hong Kong"}
      ]
    })
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
