const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.thenetninja.co.uk', 
      showBooks: true,
      books: [
        { title: 'Easter on the Hell-Forest Road', author: 'Keira Moore', img: 'assets/img_1.png', isFav: true },
        { title: 'Progratic Programmer', author: 'David Thomas', img: 'assets/img_2.png', isFav: false },
        { title: 'Ruby for Dummies', author: 'Christopher Haupt', img: 'assets/img_3.png', isFav: true },
  
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav( book ) {
      console.log( 'event' ),
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(( book ) => book.isFav )
    }
  }
})

app.mount( '#app' )

// Challenge - Add to Favs
// - attach a click event to each li-tag (for each book)
// - when a user clicks on li, toggle the 'isFav' property of that book