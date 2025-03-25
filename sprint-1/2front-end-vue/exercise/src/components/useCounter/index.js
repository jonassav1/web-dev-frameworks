import { ref } from 'vue';

export default function useCounter() {
  const count = ref(0);
  function setCount(action) {
    if (action === 'increment') {
      count.value++;
    } else if (action === 'decrement') {
      count.value--;
    } else if (action === 'reset') {
      count.value = 0;
    }
  }
  return { count, setCount };
}
