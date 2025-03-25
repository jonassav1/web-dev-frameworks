<!-- hanndle clicking events -->

<script setup>
import { ref } from 'vue';

const text = 'Hello World!';

const heading = ref(text);

function reverseText() {
  heading.value = heading.value.split('').reverse().join('');
}

function resetText() {
  heading.value = text;
}
</script>

<template>
  <div class="bomber">
    <h1 style="color: red">exercise1</h1>
    <h1>{{ heading }}</h1>
    <div class="bugger">
      <button @click="reverseText" type="button">Reverse</button>
      <button @click="heading += '!'">Add exclamation</button>
      <button @click="resetText">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.bomber {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bugger {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
