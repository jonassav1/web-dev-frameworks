import { readonly, ref } from 'vue';

interface errorObject {
  message: string;
}
const error = ref<errorObject | null>(null);

export const errorCurrent = readonly(error);

export function setError(errorObject: errorObject) {
  error.value = errorObject;
}
