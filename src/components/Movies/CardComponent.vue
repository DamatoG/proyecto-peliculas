<template>

    <div class="card d-flex position-relative " style="width: 250px; max-height:600px" >
        <div class="imgagen">
            <img :src="img" class="card-img-top" alt="..." style="width: 100px; height:200px">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text" id="sinopsis">Sinopsis: {{ sinopsis }}</p>
            <p class="card-title">Director: {{ director }}</p>
            <p class="card-title">Fecha estreno: {{ fecha_estreno }}</p>
            <p class="card-title">Genero: {{ genero }}</p>
            <div class="d-flex justify-content-between ">
                <router-link :to=" { name: 'detalle', params: {idMovie: id_movie}}"><button type="button" class="btn btn-dark">Ver mas</button> 
                </router-link>
                <button v-if="profile" type="button" class="btn btn-dark" >Editar</button>
                <button v-if="profile" type="button" class="btn btn-dark" >Eliminar</button>
            </div>
        </div>
        
    </div>

<router-view/>
    

</template>

<script>

//import axios from "axios"

export default {
    data() {
        return{
        
    }},
    props:{
        edit:false,
        profile: false,
        name: String,
        img: String,
        sinopsis:String,
        genero:String,
        director:String,
        fecha_estreno: String,
        id_movie:Number
    },
    methods:{
        delete: function(){
            console.log("eliminar")
        }}
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