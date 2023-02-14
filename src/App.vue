<script setup>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

function test() {
  axios.get("/api/test").then((res) => {
    console.dir(res);
  });
}
function test2() {
  axios.get("/api/test2").then((res) => {
    console.dir(res);
  });
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <button @click="test()">shell 실행</button>
    <button @click="test2()">shell 실행2</button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
