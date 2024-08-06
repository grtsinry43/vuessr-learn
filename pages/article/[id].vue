<script setup lang="ts">
const validate = (params: any) => {
  return {
    id: Number(params.id)
  }
}

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>

<template>
  <div>
    <h1>Article {{ route.params.id }}</h1>
    <p>This is the article page</p>
    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<style scoped>

</style>
