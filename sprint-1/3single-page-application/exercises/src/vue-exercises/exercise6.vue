<!-- markdown editor -->

<script setup>
import { ref } from 'vue';
import { marked } from 'marked';
import { computed } from 'vue';

const markdown = ref('# Some Text! *italic* **bold**');
const renderedMarkdown = computed(() => {
  return marked(markdown.value);
});
</script>

<template>
  <div class="popopopo">
    <h1>exercise6</h1>

    <div class="split">
      <div><textarea v-model="markdown" placeholder="Enter text Here"></textarea></div>
      <div v-html="renderedMarkdown"></div>
    </div>
  </div>
</template>

<style scoped>
.popopopo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
textarea {
  font-family: monospace;
}
</style>
