<script setup>
const props = defineProps({
  todo: Object,
});
</script>

<template>
  <li>{{ todo.product }}</li>
</template>
