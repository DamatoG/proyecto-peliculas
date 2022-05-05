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
        <input type="text" v-model="movie.genero"/>

        <br>
        <label for="">url_imagen: </label>
        <input type="text" v-model="movie.url_imagen"/>

        <br>
        <!--Boton crear que envia la informacion a la consola-->
        <input type="submit" value="Crear">
    </form>
    </div>
    

</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
        directores:[],
        movie:{
            name_movie:"",
            fecha_estreno:"",
            director:"",
            genero:"",
            sinopsis:"",
            url_img:""
        }
        }
    },
    methods: {
        sendForm(e){
            e.preventDefault();
            console.log(this.movie);
                
            //const formData = FormData();

            const data = {
                "name_movie": this.movie.name_movie,
                "fecha_estreno": this.movie.fecha_estreno,
                "director": this.movie.director,
                "genero": this.movie.genero,
                "sinopsis": this.movie.sinopsis,
                "url_img": this.movie.url_img,

            }

                //formData.append("name_movie", this.movie.name_movie)
                //formData.append("fecha_estreno", this.movie.fecha_estreno)
                //formData.append("director", this.movie.director)
                //formData.append("genero", this.movie.genero)
                //formData.append("sinopsis", this.movie.sinopsis)
                //formData.append("url_img", this.movie.url_img)                
                this.insert(data)
        },

        async insert(data){
            console.log(JSON.stringify(data))
            let res= await axios.post("/movie", data)
            console.log(res)

            // fetch("http://127.0.0.1:5000/movie",{mode: 'cors'},{
            // method:'POST',
            // body: JSON.stringify(data)
            // }).then((res) => res.json())
            // .then ((res) => console.log(res))
        }
    },
        name: 'SaveComponent',
        mounted(){
        fetch('http://127.0.0.1:5000/directores')
        .then((res) => res.json())
        .then ((res) => this.directores=res)
    
    },
}
</script>