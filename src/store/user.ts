import { defineStore } from 'pinia'

export const useCounterStore = defineStore('app.user', {
  state() {
    return { count: 0 }
  }
  // could also be defined as
  // state: () => ({ count: 0 })
})