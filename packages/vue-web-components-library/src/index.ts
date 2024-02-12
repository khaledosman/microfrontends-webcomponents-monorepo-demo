import Counter from './components/Counter/Counter.ce.vue'
import { defineCustomElement } from 'vue'

const CounterElement = defineCustomElement(Counter)


export { CounterElement }

export function register() {
  customElements.define('counter-element', CounterElement)
}

// register global typings
declare module 'vue' {
  export interface GlobalComponents {
    'Counter': typeof Counter,
  }
}

register()
