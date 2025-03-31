<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'nasaFavorites'
const favorites = ref([])

// Load favorites from localStorage on page load
onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY)
  favorites.value = stored ? JSON.parse(stored) : []
})

// Remove an item by date
function removeFromFavorites(date) {
  favorites.value = favorites.value.filter((item) => item.date !== date)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
}
</script>

<template>
  <div>
    <h1>My Favorite Space Images 🚀</h1>

    <div v-if="favorites.length === 0">
      <p>No favorites yet! Go save some cool APODs 😄</p>
    </div>

    <div v-else class="favorites-grid">
      <div v-for="item in favorites" :key="item.date" class="favorite-card">
        <p>{{ item.title }}</p>
        <img v-if="item.media_type === 'image'" :src="item.url" alt="Favorite image" />
        <iframe
          v-if="item.media_type === 'video'"
          :src="item.url"
          width="500"
          height="300"
        ></iframe>
        <p>{{ item.date }}</p>
        <button @click="removeFromFavorites(item.date)">Remove</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.favorites-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.favorite-card {
  flex: 1 1 300px;
  max-width: 100%;
  padding: 1rem;
}

/* Add mobile-specific tweaks */
@media (max-width: 600px) {
  .favorite-card {
    padding: 0.5rem;
    text-align: center;
  }

  iframe,
  img {
    width: 100%;
    height: auto;
  }

  button {
    width: 100%;
    font-size: 1rem;
  }
}
</style>
