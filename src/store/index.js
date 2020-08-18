import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meetups: [
      { imageUrl: 'https://cdn.vox-cdn.com/thumbor/_Azul93vJ6T8m1jEoxgCNl-x1Dw=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66907018/shutterstock_1701722863.0.jpg',
        id: 'asdasdags12312',
        title: "Meet up in New York",
        date: '2020-08-29'
      },
      {
        imageUrl: 'https://images.theconversation.com/files/349143/original/file-20200723-35-1x7it1t.jpg?ixlib=rb-1.1.0&rect=136%2C157%2C6853%2C4485&q=45&auto=format&w=926&fit=clip',
        id: 'asdasdags12343',
        title: "Meet up in Hong Kong",
        date: '2020-08-31'
      }
    ],
    user: {
      id: 'asd123123',
      registeredMeetups: ['asdfasdffsdf']
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    loadedMeetups (state) {
      return state.meetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.meetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
