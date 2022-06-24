<template>

        <div class="listado">
    

        <CardComponent v-for="m in movies" 
        key="m.id_movie" 
        :name= "m.name_movie" 
        :sinopsis="m.sinopsis"
        :fecha_estreno= "m.fecha_estreno" 
        :director="m.director"
        :img= "m.url_img" 
        :genero="m.genero"
        :id_movie="m.id_movie"
        :profile="true"
        :edit="editar"
        />

   
        </div>
        <router-view/>
        
       
        <div class=".container-md w-50 p-" >
            
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
    

</template>

<script>

import CardComponentVue from './CardComponent.vue';

export default {
    
    data() {
        return {
        editar:false,
        directores:[],
        generos:[],
        movie:{
            name_movie:"",
            fecha_estreno:"",
            director:"",
            genero:"",
            sinopsis:"",
            url_img:"",
        },
        movies:[
            ],
        }
    },
    props:{
        edit: Boolean
    },
    methods: {
        
        sendForm(e){
            //el metodo preventDefault evita recargar la pagina luego de escuchar el evento sendForm
            //ademas ejecuta el metodo async insert que le asigna al objeto data los valores del objeto movie
            //e.preventDefault();
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
                         
            this.insert(data)   
        },
        async getMovie(){
            try {
                const response = await this.axios.get('http://127.0.0.1:5000/movie_by_user/' + localStorage.getItem('id_user'), { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
                console.log(response)
                console.log(response.data)
                this.movies = response.data
                return response.data;
            } catch (err) {
                console.log(err);
            }
        },

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
        }
    },
    name: 'SaveComponent',
    mounted(){
        
        fetch('http://127.0.0.1:5000/directores')
        .then((res) => res.json())
        .then ((res) => this.directores=res)
    

        fetch('http://127.0.0.1:5000/genero')
        .then((res) => res.json())
        .then ((res) => this.generos=res)


        this.getMovie()
    },
    components:{
        name: CardComponentVue
    },
}
</script>

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

</style>


