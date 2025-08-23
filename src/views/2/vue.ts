import { useStorage } from '@vueuse/core'
import { createApp, type Ref } from 'vue'

const INITIAL_COUNT: number = 0

export const initializeVueComponent = (): void => {
  createApp({
    setup () {
      const count: Ref<number> = useStorage('app.views.2.count', INITIAL_COUNT);

      const incrementCount = (): void => {
        count.value = count.value + 1
      }

      const decrementCount = (): void => {
        count.value = count.value - 1
      }

      return { count, INITIAL_COUNT, incrementCount, decrementCount }
    },

    template: `
      <p>
        <strong>This part is rendered with Vue.</strong>
        <br><br>
        It only renders a simple counter, with increment/decrement controls.
        <br><br>
        <em>
          Notice that when this view will load for the first time, the counter will show its initial value
          ({{ INITIAL_COUNT }}), but <strong>with every subsequent (re)render, it will <u>maintain</u> its previous state</strong>.
        </em>
      </p>

      <p>
        <strong>Current count is: {{ count }}</strong>
        <br><br>
        <button @click="decrementCount" title="Decrement the counter">-</button>
        <button @click="incrementCount" title="Increment the counter">+</button>
      </p>
    `
  }).mount('#vue')
}
