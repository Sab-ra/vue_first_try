const app = Vue.createApp({
  // template: "<h2>I'm the template</h2>"
  data() {
    return {
      showBooks: true,
      title: "Easter on the Hell-Forest Road",
      author: "Keira Moore",
      age: "44",
      x: 0,
      y: 0 
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent( e, data ) {
      console.log( e, e.type )
      if( data ) {
        console.log( data )
      }
    },
    handleMousemove( e ) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
    
  }

}) 

app.mount( '#app' )
 