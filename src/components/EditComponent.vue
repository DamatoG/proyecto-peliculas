<template>
    <div class="container"> 
        <form @submit="sendForm">

                  <div class="mb-3">
                      <label class="form-label">Nombre pelicula:</label>
                      <input class="form-control" type="text" v-model="movie.name_movie">
                  </div>

                  <div class="mb-3">
                      <label class="form-label">Director</label>
                      <select class="form-select" v-model="movie.director">
                          <option selected> {{ movie.director }}  </option>
                          <option v-for="d in directores" :key="d.id" :value="d.name">
                              {{ d.name }}
                          </option>
                      </select>
                  </div>

                  <div class="mb-3">
                      <label class="form-label">Genero</label>
                      <select class="form-select" v-model="movie.genero">
                        <option selected> {{ movie.genero }}  </option>
                          <option  v-for="g in generos" :key="g.id" :value="g.name">
                              {{ g.name }}
                          </option>
                      </select>
                  </div>

                  <div class="mb-3">
                      <label class="form-label">Fecha de estreno</label>
                      <input class="form-control" type="date" v-model="movie.fecha_estreno">
                  </div>

                  <div class="mb-3">
                      <label class="form-label">Sinopsis:</label>
                      <textarea class="form-control" v-model="movie.sinopsis" id="" rows="3"></textarea>
                  </div>

                  <div class="mb-3">
                      <label class="form-label">URL Imagen:</label>
                      <input class="form-control" type="text" v-model="movie.url_img">
                  </div>

                  <!-- <Boton crear que envia la informacion a la consola> -->
                  
                  <button class="btn btn-dark" v-on:click="editMovie">Editar</button>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return{
             movie:{
              name_movie:"",
              director:"",
              url_img:"",
              sinopsis:"",
              fecha_estreno:"",
              id_user: localStorage.getItem('id_user'),
              genero:"",
              director:"",
              id_movie:""
             },
              directores:[],
              generos:[]
        }
        
    },   
    methods:{
        async getMovie(){
            try {
                const response = await this.axios.get('http://127.0.0.1:5000/movie/'+this.$route.params.idMovie);
                
                console.log(response.data)
                this.movie.name_movie = response.data.name_movie
                this.movie.fecha_estreno = response.data.fecha_estreno
                this.movie.director = response.data.director
                this.movie.genero = response.data.genero
                this.movie.url_img = response.data.url_img
                this.movie.sinopsis = response.data.sinopsis
                this.movie.id_movie = response.data.id_movie

                return response.data;
            } catch (err) {console.log(err);}
        },
        async getDirectores(){
            try {
                const response = await this.axios.get('http://127.0.0.1:5000/directores');
                let directoresFiltrados = []
                directoresFiltrados = response.data.filter(director => director.name != this.movie.director)
                this.directores = directoresFiltrados
                return directoresFiltrados;
            } catch (err) {console.log(err);}
        },
        async getGeneros(){
            try {
                const response = await this.axios.get('http://127.0.0.1:5000/genero');
                let generosFiltrados = []
                generosFiltrados = response.data.filter(genero => genero.name != this.movie.genero)
                this.generos = generosFiltrados
                return generosFiltrados;
            } catch (err) {console.log(err);}
        },
        editMovie(e){    
            e.preventDefault();
            const movie = this.movie
            this.insert(movie)
        },
        async insert(data){
            try{
                let res= await this.$axios.put("http://127.0.0.1:5000/movie/" + this.$route.params.idMovie, data, {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
                console.log("pelicula editada correctamente")
                alert("pelicula editada correctamente")
                this.$router.push('/')
            } catch(error){
                alert("No se pudo editar la pelicula")
                console.log('No se puedo editar la pelicula')
            }
        },

    },    
    mounted(){
        this.getMovie(),
        this.getDirectores(),
        this.getGeneros()
        }
  }
  


</script>