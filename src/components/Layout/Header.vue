<template>
  <div>
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      temporary
      >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-app-bar app class="primary">
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-toolbar-title class="white--text">
            MeetUp
          </v-toolbar-title>
        </router-link>
        <v-app-bar-nav-icon
          @click.stop="sideNav = !sideNav"
          ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn
          text class="white--text"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
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
    }),
    // Show different page for authenticated vs unauthenticated users
    computed: {
      menuItems() {
        // default case when not logged in
        let menuItems = [
          { icon: 'face', title: 'Sign up', link: '/signup'},
          { icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            { icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
            { icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }

</script>
