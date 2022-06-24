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
   :edit="false"
   />

   
</div>
<router-view/>
    

</template>

<script>
import CardComponentVue from './CardComponent.vue';


export default {
    data() {
        return{
             movies:[
            ],
            
        };
        
    },
    components:{
        name: CardComponentVue
    },
    methods:{
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
    },

    mounted(){
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
