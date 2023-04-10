<template>
  <div class="wrapper">
    <input :value="currentTag" @input="setHashTag" />
    <div class="flex">
      .
      <card v-for="post in filteredPosts" :key="post.id">
        <template #title>
          {{ post.title }}
        </template>
        <template #content>
          {{ post.content }}
        </template>
        <template #description>
          <controls :post="post" />
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { store } from './store.js'
import Card from './components/Card.vue'
import Controls from './components/Controls.vue'
export default {
  components: { Card, Controls },
  setup() {
    const setHashTag = ($event) => {
      store.setHashTag($event.target.value)
    }

    return {
      filteredPosts: computed(() => store.filteredPost),
      currentTag: computed(() => store.state.currentTag),
      setHashTag,
    }
  },
}
</script>

<style scoped>
.wrapper {
  padding: 20px;
}
input {
  margin-bottom: 10px;
}
.flex {
  display: flex;
}
</style>
