<template>
    
    <div class="container">
        <div class="detalle bg-light border">
            <div class="imagen">
                <img :src="movie.url_img" style="width: 200px; height:300px">
            </div>
        
            <div class="contenido" >
                <div class= "Titulo"> 
                    <h2>{{ movie.name_movie }}</h2>
                </div>
                <div class="genero"> 
                    <h4> Genero: {{ movie.genero }}</h4>
                </div>
                <div class="Director"> 
                    <h4> Director: {{ movie.director }} </h4>
                </div>
                <div class="fecha"> 
                    <h4> Fecha estreno: {{ movie.fecha_estreno }} </h4>
                </div>
                <div class="sinopsis" > 
                    <h4> Sinopsis: {{ movie.sinopsis }}</h4>
                </div>
            </div>
        </div>

    


        <div class="comentarios bg-light border">
            
            <h3>Comentarios:</h3>

            <div class="comentario bg-white border" v-for="c in comentarios" v-bind:key="c.id"> {{ c.body }}</div>
            
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
            e.preventDefault();

            const coment = {
                "id_movie": this.$route.params.idMovie,
                "id_user": localStorage.getItem('id_user'),
                "body": this.nuevoComentario.body
            }

            this.insert(coment)
            this.nuevoComentario.body = ""
        },
        async insert(data){
            try{
                let res= await this.$axios.post("/movie/"+ this.$route.params.idMovie+"/comentario", data)
                this.comentarios.push(data)
                alert("Comentario creado")

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
.imagen{
    margin-right: 15px;
}

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

 .comentario{
    margin-top: 10px;
    padding: 10px;
    
 }

.detalle{
    display: flex;
}

@media (max-width: 600px){
    .detalle{
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    }



</style>