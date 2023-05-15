const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'Easter on the Hell-Forest Road', author: 'Keira Moore' },
        { title: 'Progratic Programmer', author: 'David Thomas' },
        { title: 'Ruby for Dummies', author: 'Christopher Haupt' },
  
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },

  }
})

app.mount( '#app' )