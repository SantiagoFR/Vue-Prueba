<template>
  <div id="app">
    <b-row>
      <b-col v-for="(photo,i) in photos" :key="i" xl="2" lg="3" md="6" class="mt-5">
        <b-card :title="'Image '+photo.id" :img-src="photo.url" @click="deleteItem(i)"></b-card>
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
        this.photos = result.data
      })
    },
    deleteItem: function(key){
      this.photos.splice(key,1)
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
