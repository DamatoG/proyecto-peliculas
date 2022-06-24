<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Pelispedia</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li v-if="verificarSesion" class="nav-item">
            <router-link class="nav-link" to="/profile">Perfil</router-link>
          </li>
          <li v-else>
            <router-link class="nav-link" to="/login">Iniciar sesion</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <router-view/>
</template>

<script>


export default {
    data() {
        return{
          registrado:false,
        }
        },
    methods:{
      // verificarSesion(){
      //   if(localStorage.getItem('token') != null){
      //     console.log(localStorage.getItem('username'))
      //     console.log(localStorage.getItem('token'))
          
      //     this.registrado=true
      //     return this.registrado
      //   }}
      },
    computed:{
      verificarSesion: function (){return localStorage.getItem('token') != null}
    },
    mounted(){
      console.log(this.verificarSesion)
      
    }}
    

      

    
        
</script>


<style>
body{
  margin: 0px;
  background-color: black;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background-color: black;
  display: flex;  
  justify-content: space-between;
  width: 100%;
}

.enlases {
  text-align: left;
  justify-content: left;
  flex: 10;
  margin-left: 60px;  
  display: flex;
  align-items: center;

}
.titulo{
  text-align: center;
  color: #0b6aca;
  flex: 1;
  font-size: x-large;
  
}



nav a {
  font-weight: bold;
  color: #0b6aca;}

.redes{
  display: flex;
  flex: 3;
  justify-content: space-around;
}


</style>
