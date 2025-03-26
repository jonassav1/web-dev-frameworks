<!-- shopping list -->

<script setup>
import { ref } from 'vue';
import TodoItem from '../components/TodoItem.vue';

const list = ref([
  { id: 1, product: 'apple' },
  { id: 2, product: 'pear' },
  { id: 3, product: 'sausage' },
]);
</script>

<template>
  <div>
    <h1>exercise5</h1>
    <ol>
      <TodoItem v-for="item in list" :todo="item" :key="item.id"></TodoItem>
    </ol>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
