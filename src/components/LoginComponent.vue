<template>
  <div class="border container">
    <form class="form" @submit.prevent="iniciarSesion">
      <div class="mb-3">
          <label class="form-label">USUARIO</label>
          <input class="form-control" type="text" v-model="user.username" placeholder="Ingrese su nombre de usuario">
      </div>

      <div class="mb-3">
          <label class="form-label">CONTRASEÑA</label>
          <input class="form-control" type="password" v-model="user.password" placeholder="Ingrese su contraseña">
      </div>

      <button class="btn btn-dark" type="submit">Iniciar sesion</button>
      
      <button class="btn btn-dark"><router-link class="link" to='/'>Ingreso sin registro</router-link></button>
    </form>
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
          this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
          localStorage.setItem('username', response.data.user)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id_user', response.data.id_user)
          this.$router.push('/');
          console.log(response)
  
      })
    }
  }

}
</script>


<style scoped>
.form{
  display: flex;
  flex-flow:column;
  

}
.container{
  max-width: 300px;
  padding: 10px;
  height: 100%;
}

button{
margin-top: 10px;
}

a {
  color: white;
}


</style>
