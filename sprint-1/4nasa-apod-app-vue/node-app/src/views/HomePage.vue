<script setup>
import { ref } from 'vue'
import { watch } from 'vue'

const key = import.meta.env.VITE_API_KEY
const date = ref(new Date().toISOString().split('T')[0])
const image = ref(null)
watch(date, () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date.value}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      image.value = data
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })
})

function saveToFavorites() {
  const STORAGE_KEY = 'nasaFavorites'

  if (!image.value) return

  // Get current list from localStorage (or start with empty array)
  const favorites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

  // Check if this image (by its date) is already in favorites
  const alreadyExists = favorites.some((item) => item.date === image.value.date)

  if (!alreadyExists) {
    favorites.push(image.value)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    console.log('Saved to favorites!')
  } else {
    console.log('Already in favorites.')
  }
}
</script>
;
<template>
  <div>
    <input type="date" name="" id="" v-model="date" />
    <p>Selected {{ date }}</p>
    <div v-if="image">
      <p>{{ image.title }}</p>
      <img v-if="image.media_type === 'image'" :src="image.url" alt="nasa image of the day" />
      <iframe
        v-if="image.media_type === 'video'"
        :src="image.url"
        width="550"
        height="310"
      ></iframe>
    </div>
    <button @click="saveToFavorites">Favorite!</button>
  </div>
</template>

<style scoped>
div {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

input[type='date'] {
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
}

p {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

img,
iframe {
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 8px;
}

button {
  padding: 0.75rem 1.25rem;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  max-width: 200px;
}

button:hover {
  background-color: #005fa3;
}

/* Optional: center text for mobile */
@media (max-width: 600px) {
  div {
    text-align: center;
  }

  button {
    font-size: 1.1rem;
  }
}
</style>
