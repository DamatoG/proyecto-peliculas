<template>
    <h1>Listado de peliculas</h1>

    <div v-for="m in movie" :key="m.id">
        <h2>Nombre: {{ m.name_movie }}</h2>
        <h2>director: {{ m.director }}</h2>
        <h2>Fecha de estreno: {{ m.fecha_estreno }}</h2>
        <h2>Sinopsis: {{ m.sinopsis }}</h2>
        <h2>genero: {{ m.genero }}</h2>

        <img :src="m.url_img">
    </div>


</template>

<script>
import SaveComponent from './SaveComponent'



export default {
    data() {
        return{
            movie:[]
        };
    },
    mounted(){
    fetch('http://127.0.0.1:5000/movies')
    .then((res) => res.json())
    .then ((res) => this.movie=res)
    

  },
  components: {
      SaveComponent

  }
}
</script>

<style scoped>

    h1{
        color: red;
    }
    div{
        height: 100%;
        width: 300px;
        padding-bottom: 50px;
        border: 2px solid black;
    }
    h2{
        font-size: 20px;
    }
</style>
