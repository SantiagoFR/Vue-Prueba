<template>
  <div id="app">
    <b-row cols="1" cols-md="2" cols-lg="4"  cols-xl="5">
      <b-col v-for="(photo,i) in photos" :key="i" class="mt-5">
        <b-card :title="'Photo '+photo.id" :img-src="photo.url" >
          <b-button pill size="sm" href="#"  v-b-toggle="'accordion-' + photo.id" variant="outline-info">Show/hide description</b-button>
          <b-collapse :id="'accordion-'+photo.id">
            <br>
            <b-card-text>{{photo.title}}</b-card-text>
          </b-collapse>          
          <template v-slot:footer>
            <b-button pill size="sm" variant="outline-danger" @click="deleteItem(i,photo.id)">Delete photo</b-button>
          </template>          
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      photos:[]
    }
  },
  methods: {
    getPhotos: function(){
        console.log("hola")
      const baseURI = 'http://jsonplaceholder.typicode.com/photos'
      this.$http.get(baseURI)
      .then((result) => {
        console.log(result)
        result.data.splice(0,4900)
        console.log(result.data.length)
        this.photos = result.data
      })
    },
    deleteItem: function(key,id){
      this.photos.splice(key,1)
      this.toastCount++
      this.$bvToast.toast(`La imagen ${id} ha sido eliminada`, {
        title: 'Imagen eliminada',
        variant: 'success',
        autoHideDelay: 5000,
        appendToast: true
      })
    },
    makeToast(append = false) {
      
    }
  },
  created:function(){
    this.getPhotos();
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
