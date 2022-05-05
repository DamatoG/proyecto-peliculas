<template>
  <div class="home">
    
  <ListComponent/>
  
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
  .home{
    display: flex;
  }
</style>