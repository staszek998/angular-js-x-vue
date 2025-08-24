import { useStorage } from '@vueuse/core'
import { createApp, type Ref } from 'vue'

import { CounterControls } from '../../components/CounterControls'

const INITIAL_COUNT: number = 0

export const initializeVueComponent = (): void => {
  createApp({
    components: { CounterControls },

    setup () {
      const count: Ref<number> = useStorage('app.views.persistent:local-storage.count', INITIAL_COUNT)

      const incrementCount = (): void => {
        count.value = count.value + 1
      }

      const decrementCount = (): void => {
        count.value = count.value - 1
      }

      return { count, INITIAL_COUNT, incrementCount, decrementCount }
    },

    template: `
      <p class="text-container">
        <strong>This part is rendered with Vue.</strong>
        <br><br>
        It only renders a simple counter, with increment/decrement controls.
        <br><br>
        <em>
          Notice that when this view will load for the first time, the counter will show its initial value
          ({{ INITIAL_COUNT }}), but <strong>with every subsequent (re)render, it will
          <u>maintain</u> its previous state (even after refreshing the&nbsp;page!)</strong>.
          <!-- TODO: Add a note when the current state of the counter has been read from the local storage -->
        </em>
      </p>

      <CounterControls v-bind="{ count }" @decrement-count="decrementCount" @increment-count="incrementCount" />
    `
  }).mount('#vue')
}
