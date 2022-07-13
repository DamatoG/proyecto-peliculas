<template>

<div class="listado">
    
    <!-- <div class="card d-flex position-relative" v-for="m in movies" :key="m.id_movie" style="width: 250px; height:530px" >
         <div class="imgagen">
            <img :src="m.url_img" class="card-img-top" alt="..." style="width: 100px; height:200px">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ m.name_movie }}</h5>
            <p class="card-text" id="sinopsis">Sinopsis: {{ m.sinopsis }}</p>
            <p class="card-title">Director: {{ m.director }}</p>
            <p class="card-title">Fecha estreno: {{ m.fecha_estreno }}</p>
            <p class="card-title">Genero: {{ m.genero }}</p>
            <router-link to='/detalle/5'>
                <button type="button" class="btn btn-dark">Ver mas</button> 
            </router-link>
            
        </div>  
        

    </div> -->
   <CardComponent  v-for="m in movies" 
   :key="m.id_movie" 
   :name= "m.name_movie" 
   :sinopsis="m.sinopsis"
   :fecha_estreno= "m.fecha_estreno" 
   :director="m.director"
   :img= "m.url_img" 
   :genero="m.genero"
   :id_movie="m.id_movie"
   />
</div>
<router-view/>
    

</template>

<script>
import CardComponentVue from './CardComponent.vue';

//import axios from "axios"

export default {
    data() {
        return{
             movies:[
                
            ]
        };
        
    },
    components:{
        name: CardComponentVue
    },
    methods:{
        async getMovie(){
            try {
                const response = await this.axios.get('http://127.0.0.1:5000/movies', { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
                console.log(response)
                console.log(response.data)
                this.movies = response.data
                return response.data;
            } catch (err) {
                console.log(err);
            }
}
    },
    mounted(){
        // fetch('http://127.0.0.1:5000/movies')
        // .then((res) => res.json())
        // .then ((res) => this.movies=res)
        // console.log(res)
        //this.getMovie()
    
        // this.axios.get('http://127.0.0.1:5000/movies')
        // .then((res) => res.json())
        // .then((res) => this.movies=res)
        this.getMovie()
  }
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
