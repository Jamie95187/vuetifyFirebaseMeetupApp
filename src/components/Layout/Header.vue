<template>
  <div>
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      temporary
      >
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-app-bar app class="primary">
        <v-toolbar-title class="white--text">MeetUp</v-toolbar-title>
        <v-app-bar-nav-icon
          @click.native.stop="sideNav = !sideNav"
          ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn text class="white--text" v-for="item in menuItems" :key="item.title">
          <v-icon left>
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-app-bar>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data: () => ({
      sideNav: false,
      menuItems: [
        { icon: 'supervisor_account', title: 'View Meetups'},
        { icon: 'room', title: 'Organize Meetup'},
        { icon: 'person', title: 'Profile'},
        { icon: 'face', title: 'Sign up'},
        { icon: 'lock_open', title: 'Sign in'}
      ]
    })
  }

</script>
