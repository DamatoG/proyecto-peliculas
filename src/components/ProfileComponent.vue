<template>
  <div class="perfil">
    <body>
        <h3>
        ESTE ES EL PERFIL DE {{name_user }}
        </h3>
        <h3>    
        Peliculas cargadas
        </h3>
        <ListMyMovies/>
        <SaveComponent/>
        
    </body>
        

  </div>
</template>

<script> 
import SaveComponent from "@/components/Movies/SaveComponent.vue"
import ListMyMovies from "@/components/Movies/ListMyMovies.vue"

export default {
  name: 'ProfileComponent',
  component:{
    SaveComponent,
    ListMyMovies
    
  },
  methods: {
    getNameUser(){
      this.name_user = localStorage.getItem('username')
    },
    
  },
  mounted(){
    this.getNameUser()
  },
  data(){
    return{
      name_user:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>