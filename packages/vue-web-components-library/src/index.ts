import Counter from './components/Counter/Counter.ce.vue'
import { defineCustomElement } from 'vue'

export const CounterElement = defineCustomElement(Counter)


// register global typings
declare module 'vue' {
  export interface GlobalComponents {
    'Counter': typeof Counter,
  }
}

export function register() {
  customElements.define('counter-element', CounterElement)
}

register()
