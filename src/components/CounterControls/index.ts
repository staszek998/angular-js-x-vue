import { defineComponent } from 'vue'

export const CounterControls = defineComponent<{ count: number }>({
  name: 'CounterControls',
  props: ['count'],
  emits: ['decrementCount', 'incrementCount'],
  template: `
    <p>
      <strong>Current count is: {{ count }}</strong>{{ ' ' }}
      <slot name="after-count" />
      <br><br>
      <button @click="$emit('decrementCount')" title="Decrement the counter">-</button>
      <button @click="$emit('incrementCount')" title="Increment the counter">+</button>
    </p>
  `
})
