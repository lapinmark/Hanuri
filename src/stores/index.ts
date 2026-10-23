import { createPinia } from 'pinia'
import { defineStore as defineQuasarStore } from '#q-app/wrappers'

export default defineQuasarStore(() => {
  const pinia = createPinia()
  return pinia
})
