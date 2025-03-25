<!-- conditionals and loops -->
<script setup>
import { ref } from 'vue';

const numbers = ref([1, 2, 3]);
const showList = ref(true);
const message = ref('');
function toggler() {
  showList.value = !showList.value;
  if (!showList.value) {
    mess();
  }
}
function pusher() {
  const newNumber = numbers.value.length + 1;
  console.log(newNumber);
  numbers.value.push(newNumber);
}
function popper() {
  numbers.value.pop();
}
function reverser() {
  numbers.value = [...numbers.value].reverse();
}
function mess() {
  if (numbers.value.length > 0) {
    return (message.value = 'List is not empty, but hidden.');
  } else {
    return (message.value = 'List is empty');
  }
}
</script>

<template>
  <div class="centeryy">
    <h1>exercise3</h1>
    <button @click="toggler" type="button">Toggle list</button>
    <button @click="pusher" type="button">Add number</button>
    <button @click="popper" type="button">Pop last number</button>
    <button @click="reverser" type="button">Reverse list</button>
    <div v-if="showList">{{ numbers.join(', ') }}</div>
    <div v-else="">{{ message }}</div>
  </div>
</template>

<style scoped>
.centeryy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
