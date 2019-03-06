<template>
  <div class="about">
    <h1>PROFESOR: </h1>
<div id="output"></div>
    <div class="container mt-5" id="app">
      <h3>gysm</h3>
      <profesor></profesor>
    </div>
    <button type="button" class="btn btn-primary"></button>
  </div>
</template>

<script>
  import profesor from '@/components/Profesor.vue'
  export default {
    name: 'app',
    components: {
      profesor
    }
  }

</script>
