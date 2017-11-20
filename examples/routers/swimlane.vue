<template>
  <div class="swimlane">
    <Swimlane :words="wordsArray" :circular="circular" :rows="rows" :scale="scale" :transitionDuration="duration" :transitionDelay="delay" :transition="transition" :pauseOnHover="true"></Swimlane>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        wordsArray: ['ccccc', 'aaaaa', 'ddddd'],
        circular: true,
        rows: 1,
        scale: 1,
        duration: 500,
        delay: 250,
        transition: 'ease-out'
      }
    }
  }
</script>
<style scoped>
.swimlane {
  background-color: #4582ec;
  border-radius: 4px;
  color: #fff;
} 
</style>
