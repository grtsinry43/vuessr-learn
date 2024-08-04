<script setup>
import {ref} from "vue";

const count = ref(0)
</script>

<template>
  <div class="app-container">
    <h1>Counter: {{ count }}</h1>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>

</style>
