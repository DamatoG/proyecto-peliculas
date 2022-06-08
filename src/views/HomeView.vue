<template>
  <div class="home">
    <main>
      <div class="subtitulo">
        <h1>Recomendaciones</h1>
      </div>
      
    <ListComponent/>
    </main>

  
  </div>
</template>

<script>
// @ is an alias to /src
import ListComponentns from '@/components/Movies/ListComponent.vue'

export default {
  name: 'HomeView',
  components: {
    ListComponentns,
  },
}
</script>

<style scoped>
  main .subtitulo h1{
    color: rgb(0, 0, 0);
    
  }

  .subtitulo{
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  template{
    height: 100%;
  }
</style>