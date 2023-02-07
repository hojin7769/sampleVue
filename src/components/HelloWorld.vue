<script setup>
import { ref } from "vue";
import axios from "axios";

function apiCall() {
  axios
    .get("http://112.169.9.175:8080/api/hello")
    .then((res) => (apiData.value = res.data));
}
apiCall();
const apiData = ref("");

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>젠킨스 배포 확인 용123123</code>
    </p>
    <p>
      {{ apiData }}
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
