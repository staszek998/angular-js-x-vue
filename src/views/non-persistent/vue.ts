import { createApp, type Ref, ref } from 'vue'

import { CounterControls } from '../../components/CounterControls'

const INITIAL_COUNT: number = 0

export const initializeVueComponent = (): void => {
  createApp({
    components: { CounterControls },

    setup () {
      const count: Ref<number> = ref(INITIAL_COUNT)

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
          Notice that <strong>when you'll change the view currently rendered by Angular (or refresh the page),
          you'll <u>loose</u> the current state of the counter</strong>.
          Every time this view is rendered, it will show the same, initial count&nbsp;({{ INITIAL_COUNT }}).
        </em>
      </p>

      <CounterControls v-bind="{ count }" @decrement-count="decrementCount" @increment-count="incrementCount" />
    `
  }).mount('#vue')
}
