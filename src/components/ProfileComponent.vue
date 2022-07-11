<template>
  <div class="perfil container">
    <body>
        <h3>
        Este es el perfil de {{ name_user }}
        </h3>

        <!--Listo las peliculas segun id_user  -->

        <div class="listado">
        
          <div class="card d-flex position-relative" v-for="m in movies" v-bind:key="m.id_movie" style="width: 250px; max-height:600px" >
            <div class="imgagen">
                <img :src="m.url_img" class="card-img-top" alt="..." style="width: 100px; height:200px">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ m.name_movie }}</h5>
                <p class="card-text" id="sinopsis">Sinopsis: {{ m.sinopsis }}</p>
                <p class="card-title">Director: {{ m.director }}</p>
                <p class="card-title">Fecha estreno: {{ m.fecha_estreno }}</p>
                <p class="card-title">Genero: {{ m.genero }}</p>
                <div class="d-flex justify-content-between ">
                    <router-link :to=" { name: 'detalle', params: {idMovie: m.id_movie}}"><button type="button" class="btn btn-dark">Ver mas</button> 
                    </router-link>
                    <router-link :to=" { name: 'edit', params: {idMovie: m.id_movie}}"><button type="button" class="btn btn-dark">Editar</button> 
                    </router-link>
                    <!-- <button type="button" class="btn btn-dark" @click="editarMovie">Editar</button> -->
                    <button type="button" class="btn btn-dark" v-on:click="deleteMovie">Eliminar</button>
                </div>
            </div>
        
          </div>
        </div>

        <!-- Finl listado  -->

        <div class="crearPelicula">
          <div class="sub-crearPelicula">
          <h3>    
          CARGAR NUEVA PELICULA
          </h3>
          
          <!--Formulario para cargar/editar peliculas -->
          <div class="formulario" >
              
              <form @submit="sendForm">

                  <div class="mb-3">
                      <label class="form-label">Nombre pelicula:</label>
                      <input class="form-control" type="text" v-model="movie.name_movie">
                  </div>

                  <div class="mb-3">
                      <label class="form-label">Director</label>
                      <select class="form-select" v-model="movie.director">
                          <option v-for="d in directores" :key="d.id" :value="d.name">
                              {{ d.name }}
                          </option>
                      </select>
                  </div>

                  <div class="mb-3">
                      <label class="form-label">Genero</label>
                      <select class="form-select" v-model="movie.director">
                          <option  v-for="g in generos" :key="g.id" :value="g.name">
                              {{ g.name }}
                          </option>
                      </select>
                  </div>

                  <div class="mb-3">
                      <label class="form-label">Fecha de estreno</label>
                      <input class="form-control" type="text" v-model="movie.fecha_estreno">
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
                  
                  <button class="btn btn-dark">Crear</button>
                  

              </form>
                  
          
        
          </div>
          </div>
        <!-- Fin seccion formulario -->
        </div>
    </body>
        
  </div>
</template>

<script>

export default {
  data(){
          return{
            movies:[],
            name_user:"",
            directores:[],
            generos:[],
            movie:{
              name_movie:"",
              director:"",
              url_img:"",
              sinopsis:"",
              fecha_estreno:"",
              id_user: localStorage.getItem('id_user'),
              genero:"",
              director:""
              },
            }
        },
    
  name: 'ProfileComponent',
    
  methods:{
    
    
    deleteMovie: function() {

      const response = this.axios.delete('http://127.0.0.1:5000/movie/' + localStorage.getItem('id_user') + '/' + 1, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} })
      try{ console.log(response)
      console.log("Pelicula eliminada")
      }catch(error) {
        element.parentElement.innerHTML = `Error: ${error.message}`;
        console.error('There was an error!', error)};
        },
    sendForm(e){
      //el metodo preventDefault evita recargar la pagina luego de escuchar el evento sendForm
      //ademas ejecuta el metodo async insert que le asigna al objeto data los valores del objeto movie
      e.preventDefault();
      console.log(this.movie);

      const data = {
        "name_movie": this.movie.name_movie,
        "fecha_estreno": this.movie.fecha_estreno,
        "director": this.movie.director,
        "genero": this.movie.genero,
        "sinopsis": this.movie.sinopsis,
        "url_img": this.movie.url_img,
        "id_user": localStorage.getItem('id_user')
        }             
        this.insert(data)},

    async insert(data){
      try{    
        console.log(JSON.stringify(data))
        let res= await this.$axios.post("/movie", data)
        console.log("La respuesta del servidor es", res)
            
        alert("Pelicula creada con exito")
        console.log("La respuesta del servidor es", res)
        } catch(error){
            alert("Pelicula no pudo crearse")
            console.log('No pudo crearse una nueva pelicla')
        }
        },

    async getMovie(){
      try {
        const response = await this.axios.get('http://127.0.0.1:5000/movie_by_user/' + localStorage.getItem('id_user'), { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
        console.log(response)
        console.log(response.data)
        this.movies = response.data
        return response.data;
        } catch (err) {
          console.log(err)
          alert("Estuviste demaciado tiempo inactivo, volve a iniciar sesion")
          this.$router.push('/login')
          }},

    getNameUser(){
      this.name_user = localStorage.getItem('username')}
    },
        
    
  mounted(){
    this.getMovie(),
    this.getNameUser(),

    fetch('http://127.0.0.1:5000/directores')
    .then((res) => res.json())
    .then ((res) => this.directores=res)
    

    fetch('http://127.0.0.1:5000/genero')
    .then((res) => res.json())
    .then ((res) => this.generos=res)

  }}

</script>  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .imgagen{
        display: flex;
        justify-content: center;
    }
    
    .listado{
        display: flex;
        flex-flow: row wrap;
        justify-content: center ;
    }

    .card {
        margin: 40px;
        
    }

    #sinopsis{ overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 4; /* number of lines to show */ -webkit-box-orient: vertical;
    }

    .card-img-top{
        object-fit: contain;
    }

    .button{
        margin-bottom: 5px;
    }

    .crearPelicula{
      display: flex;
      flex-flow: row;
      max-width:80%;
    }
  
    .sub-crearPelicula{
      width: 100%;
    }

    
</style>