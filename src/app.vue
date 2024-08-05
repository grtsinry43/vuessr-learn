<script setup>
import {ref} from "vue";

const count = ref(0)
const msg = ref('Hello Vue SSR')
</script>

<template>
  <div class="app-container">
    <h1 class="title">Counter: {{ count }}</h1>
    <button class="increase" @click="count++">Increment</button>
    <input class="input" v-model="msg"/>
    <h2 class="msg">{{ msg }}</h2>
    <RouterView/>
    <RouterLink to="/">Home</RouterLink>
    <span>~</span>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<style scoped>
.app-container {
  text-align: center;
}

.app-container .title {
  color: red;
}

.increase {
  margin-top: 20px;
}

.input {
  outline: 2px #f40;
}

.msg {
  color: #ccc;
  font-weight: bold;
}
</style>
