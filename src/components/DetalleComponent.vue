<template>
    
    <div class="container">
        <div class="detalle  bg-light border">
            <div class="imgagen">
            <img :src="movie.url_img" style="width: 100px; height:200px">
            </div>
            
            <div class= "Titulo"> {{ movie.name_movie }} </div>
            <div class="genero"> Genero: {{ movie.genero }}</div>
            <div class="Director"> Director: {{ movie.director }} </div>
            <div class="fecha"> Fecha estreno: {{ movie.fecha_estreno }} </div>
            <div class="sinopsis"> Sinopsis {{ movie.sinopsis }}</div>
        </div>

    


        <div class="comentarios bg-light border">
            
            <h3>Comentarios:</h3>

            <div class="comentario bg-light border" v-for="c in comentarios"> {{ c.body }}</div>
        </div>

        <form class="nuevoComent bg-light border" >

                <div class="mb-3">
                    <label class="form-label">Nuevo comentario</label>
                    <input class="form-control" type="text" v-model="nuevoComentario.body">
                </div>

                <button class="btn btn-dark" @click="sendComent">Comentar</button>
        </form>    
        
    </div>

    

</template>



<script>
export default {
    data() {
        return{
             movie:[],
             comentarios:[],
             nuevoComentario:{
                body:""
        }
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
            } catch (err) {console.log(err);}
            },
        async getComents(){
            try {
                const response = await this.axios.get('http://127.0.0.1:5000/comentarios/'+this.$route.params.idMovie);
                console.log(response)
                console.log(response.data)
                this.comentarios = response.data
                return response.data;
            } catch (err) {
                console.log(err);
            }
            },
        sendComent(e){
            //e.preventDefault();

            const coment = {
                "id_movie": this.$route.params.idMovie,
                "id_user": localStorage.getItem('id_user'),
                "body": this.nuevoComentario.body


            }

            this.insert(coment)
        },
        async insert(data){
            try{
            
                console.log(JSON.stringify(data))
                let res= await this.$axios.post("/movie/"+ this.$route.params.idMovie+"/comentario", data)
                console.log("La respuesta del servidor es", res)
                this.creada = true
                alert("Comentario creado")
                console.log("La respuesta del servidor es", res)

            } catch(error){
                alert("No se pudo enviar el comentario")
                console.log('No se pudo enviar el comentario')
            }
        }

    },
    mounted(){
        this.getMovie()
        this.getComents()
        
  }
  }


</script>

<style>
 .container{
    margin-top: 20px;
    padding-top: 20px
 }

 .nuevoComent{
    margin-top: 20px;
    padding-top: 20px
 }
 
 .comentarios{
    margin-top: 20px;
    padding-top: 20px
 }

 .bg-light{
    padding: 30px;
    
 }
</style>