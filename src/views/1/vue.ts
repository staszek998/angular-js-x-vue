import { createApp, type Ref, ref } from 'vue'

const INITIAL_COUNT: number = 0

export const initializeVueComponent = (): void => {
  createApp({
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
      <p>
        <strong>This part is rendered with Vue.</strong>
        <br><br>
        It only renders a simple counter, with increment/decrement controls.
        <br><br>
        <em>
          Notice that when you'll change the view currently rendered by Angular, you'll loose the current state of the counter.
          Every time this view is rendered, it will show the same, initial count ({{ INITIAL_COUNT }}).
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
