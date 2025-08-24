import { createApp, ref, type Ref } from 'vue'

import { CounterControls } from '../../components/CounterControls'

const INITIAL_COUNT: number = 0

export const app = createApp({
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
        This component is different from the previous one (persistent state - in local storage), in a way that
        it keeps the Vue's state inside the JS' internal memory. It means that
        <strong>the state of the counter will be <u>kept intact</u> when switching between the particular Angular
          views</strong>, and <strong>it will be <u>cleared</u> only when the page gets refreshed</strong>.
      </em>
    </p>

    <CounterControls v-bind="{ count }" @decrement-count="decrementCount" @increment-count="incrementCount" />
  `
})
