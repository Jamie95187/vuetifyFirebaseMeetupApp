<template>
  <v-container>
    <v-layout>
      <v-flex >
        <v-card color="#ffff1a">
          <v-container>
            <v-layout>
              <v-flex xs5 sm4 md3>
                <v-img pl15 src="https://cdn.vox-cdn.com/thumbor/_Azul93vJ6T8m1jEoxgCNl-x1Dw=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66907018/shutterstock_1701722863.0.jpg" height="130px"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title>
                  <div>
                    <h3 class="grey--text">My Meetup</h3>
                    <div>31st August 2020</div>
                  </div>
              </v-card-title>
              <v-card-action>
                <v-btn flat>
                  <v-icon left light>arrow_forward</v-icon>
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
  }
</script>

<style>

</style>
