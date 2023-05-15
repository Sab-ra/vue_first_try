const app = Vue.createApp({
  // template: "<h2>I'm the template</h2>"
  data() {
    return {
      showBooks: true,
      title: "Easter on the Hell-Forest Road",
      author: "Keira Moore",
      age: "44"
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
    
  }


}) 

app.mount( '#app' )
 