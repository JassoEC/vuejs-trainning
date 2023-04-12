<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.content }}</p>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '../composables/usePost'
export default {
  setup() {
    const route = useRoute()
    const postsStore = usePosts()

    const post = computed(() =>
      postsStore.posts.value.find(
        (item) => item.id === parseInt(route.params.id, 10),
      ),
    )

    return { post }
  },
}
</script>

<style scoped></style>
