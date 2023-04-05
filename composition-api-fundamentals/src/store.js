import { reactive } from "vue"


class Store {
  constructor() {
    this.state = reactive({
      posts: [
        { id: 1, title: 'Composition Api', content: 'Learning VueJs' }
      ]
    })
  }
}

export const store = new Store()