<template>
  <div class="perfil">
    <body>
        <ul>
            <li>Nombre</li>
            <li>Usuario</li>
            <li>Peliculas cargadas</li>
        </ul>
        <SaveComponent/>
    </body>
        

  </div>
</template>

<script> 
import SaveComponent from "@/components/Movies/SaveComponent.vue"
export default {
  name: 'ProfileComponent',
  component:{
    SaveComponent,
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>