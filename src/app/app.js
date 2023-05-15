const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk', 
      showBooks: true,
      books: [
        { title: 'Easter on the Hell-Forest Road', author: 'Keira Moore', img: 'assets/img_1.png' },
        { title: 'Progratic Programmer', author: 'David Thomas', img: 'assets/img_2.png' },
        { title: 'Ruby for Dummies', author: 'Christopher Haupt', img: 'assets/img_3.png' },
  
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