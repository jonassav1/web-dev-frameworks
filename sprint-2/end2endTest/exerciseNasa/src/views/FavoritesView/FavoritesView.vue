<script setup lang="ts">
import { favoritesList } from '@/stores/favorites';
import FavoriteImage from './FavoriteImage.vue';
import type { Apod } from '@/stores/apod';
</script>

<template>
  <main>
    <h1>Favorites</h1>
    <div class="favorites">
      <FavoriteImage
        v-for="apod in favoritesList"
        :key="apod.date"
        :apod="apod as Apod"
      />
    </div>
  </main>
</template>

<style scoped>
.favorites {
  grid-gap: 2em;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 3em;
}

@media (width >= 1024px) {
  .favorites {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
