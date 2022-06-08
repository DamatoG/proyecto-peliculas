<template>
    <div>
        <h1>Registrar Pelicula</h1>

    <form @submit="sendForm">

        <label for="">Nombre pelicula: </label>
        <input type="text" v-model="movie.name_movie">

        <br>
        

        <label for="">Director: </label>
        <select v-model="movie.director">
            <option v-for="d in directores" :key="d.id" :value="d.name">
                {{ d.name }}
            </option>
        </select>

        <br>
        
        <label for="">Sinopsis: </label>
        <textarea v-model="movie.sinopsis" id="" cols="30" rows="10"></textarea>

        <br>
        <label for="">fecha_estreno: </label>
        <input type="text" v-model="movie.fecha_estreno"/>
        <br>
        <label for="">genero: </label>
        <select v-model="movie.genero">
            <option v-for="g in generos" :key="g.id" :value="g.name">
                {{ g.name }}
            </option>
        </select>

        <br>
        <label for="">url_imagen: </label>
        <input type="text" v-model="movie.url_img"/>

        <br>
        <!--Boton crear que envia la informacion a la consola-->
        <!--input type="submit" value="Crear"-->

        <button @click="clic">Crear</button>


        
    </form>
    </div>
    

</template>

<script>


export default {
    data() {
        return {
        creado: false,
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
        creado: false
        }
    },
    methods: {
        clic(){
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
                this.insert(data)   
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
    }
}
</script>