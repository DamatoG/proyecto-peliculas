<template>
    
    <div class="container">
        <div class="detalle">
            <div class="imgagen">
            <img :src="movie.url_img" style="width: 100px; height:200px">
            </div>
            
            <div class= "Titulo"> {{ movie.name_movie }} </div>
            <div class="genero"> Genero: {{ movie.genero }}</div>
            <div class="Director"> Director: {{ movie.director }} </div>
            <div class="fecha"> Fecha estreno: {{ movie.fecha_estreno }} </div>
            <div class="sinopsis"> Sinopsis {{ movie.sinopsis }}</div>
        </div>
    </div>

</template>



<script>
export default {
    data() {
        return{
             movie:{
                name_movie:"",
                genero:"",
                director:"",
                fecha_estreno:"",
                sinopsis:"",
                url_img:""
             },
        };
        
    },   
    methods:{
        async getMovie(){
            try {
                const response = await this.axios.get('http://127.0.0.1:5000/movie/'+this.$route.params.idMovie);
                console.log(response)
                console.log(response.data)
                this.movie = response.data
                return response.data;
            } catch (err) {
                console.log(err);
            }
}
    },
    mounted(){
        this.getMovie()
        console.log(this.movie)
  }
  }


</script>