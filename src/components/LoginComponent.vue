<template>
  <div class="login">
    <form @submit.prevent="iniciarSesion">
      <label for="">Username</label>
      <br>
      <input type="text" v-model="user.username" placeholder="Ingrese su nombre de usuario">
      <br>
      <label for="">Password</label>
      <br>
      <input type="password" v-model="user.password">
      <br>

      <input type="submit" value="Iniciar sesion">
    </form>
    <br>
    <br>
    <button><router-link to='/'>Ingreso sin registro</router-link></button>

  </div>
</template>

<script> 
import axios from "axios"

export default {
  data(){
    return{
      user:{
        username:"",
        password:"",
      }
    }
    
  },
  name: 'Login',
  methods:{
    async iniciarSesion()
    {
      var payload = {
        username: this.user.username,
        password: this.user.password
      };
      //Payload es la forma de llamar a los datos de carga
      await axios.post('http://127.0.0.1:5000/login', payload)
      .then(response => {
        axios.defaults.headers.common['Authotization'] = 'Bearer ' + response.data;
        this.$router.push('/');
        console.log(response)
      });
      //Ver como recibir el msj de error cuando el username o password es incorrecto.
      // .catch(error => {
      //   var data = response;
      //   console.log(data.msg)
      // })
    }
  }

}
</script>


<style scoped>

</style>
