<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const message = ref('')
const error = ref('')

function submit(e: Event): void {
  e.preventDefault()
  if (!passwordValid(password.value)) {
    error.value = 'Password is weak'
    message.value = ''
    return
  }
  error.value = ''
  message.value = 'Welcome!'
}
function passwordValid(password: string): boolean {
  return password.length >= 8
}
</script>

<template>
  <main>
    <div class="login-bar">
      <form class="login-form" @submit="submit">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" id="email" placeholder="abc@gmail.com" />
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button>Sign in</button>
      </form>
      <div v-if="error">{{ error }}</div>
      <div v-else-if="message">{{ message }}</div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 2rem;
}
.login-bar {
  width: 100%;
}
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
}
.login-form input,
button {
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: solid 1px black;
}
button {
  background-color: azure;
}
</style>
