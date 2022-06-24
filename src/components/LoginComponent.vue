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
  mounted (){console.log(this.$axios)},
  methods:{
    async iniciarSesion()
    {
      var payload = {
        username: this.user.username,
        password: this.user.password
      };
      //Payload es la forma de llamar a los datos de carga
      await this.$axios.post('login', payload)
      .then(response => {
        if(response.status == 200){
          this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
          localStorage.setItem('username', response.data.user)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id_user', response.data.id_user)
          this.$router.push('/');
          console.log(response)
        }else {
          alert("Usuario o contraseña incorrecta")
        }
      })
    }
  }

}
</script>


<style scoped>

</style>
