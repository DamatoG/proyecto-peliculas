<template>
  <div class="sobre">
    <p>Esta es la pagina de about</p>
    {{ msg }}


  
        
    
    </div>
</template>

<script> 
export default {
  data(){
    return{
      msg: this.msg
    }
  },
  name: 'AboutComponent',
  props: {
    msg: String
  }
}
</script>