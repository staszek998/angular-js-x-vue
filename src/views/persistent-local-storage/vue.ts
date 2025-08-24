import { useStorage } from '@vueuse/core'
import { createApp, ref, type Ref } from 'vue'

import { CounterControls } from '../../components/CounterControls'

const INITIAL_COUNT: number = 0 as const
const LOCAL_STORAGE_KEY: string = 'app.views.persistent:local-storage.count' as const

export const initializeVueComponent = (): void => {
  createApp({
    components: { CounterControls },

    setup () {
      const isCurrentValueFromLocalStorage: Ref<boolean> = ref(
        window.localStorage.getItem(LOCAL_STORAGE_KEY) !== null
      )

      const markAsDirty = (): void => {
        isCurrentValueFromLocalStorage.value = false
      }

      const count: Ref<number> = useStorage(LOCAL_STORAGE_KEY, INITIAL_COUNT)

      const onIncrementCount = (): void => {
        count.value = count.value + 1
        markAsDirty()
      }

      const onDecrementCount = (): void => {
        count.value = count.value - 1
        markAsDirty()
      }

      return { count, INITIAL_COUNT, isCurrentValueFromLocalStorage, onIncrementCount, onDecrementCount }
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
          That's because the state of the counter is being kept in the browser's local storage
          and when the component gets mounted, it reads the last saved value.
        </em>
      </p>

      <CounterControls
          v-bind="{ count }"
          @decrement-count="onDecrementCount"
          @increment-count="onIncrementCount"
      >
        <template #after-count>
          <span :style="{ textDecoration: isCurrentValueFromLocalStorage ? 'none' : 'line-through' }">
            (read from local storage)
          </span>
        </template>
      </CounterControls>
    `
  }).mount('#vue')
}
