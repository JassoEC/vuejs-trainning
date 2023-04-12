<template>
  <h4>Post</h4>
  <router-link to="/posts/new">New Post</router-link>
  <ul>
    <li v-for="(post, index) in posts" :key="`post-${index}`">
      <router-link :to="`/posts/${post.id}`" class="link">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
  <router-view />
</template>
<script>
import { usePosts } from '../composables/usePost'
export default {
  setup() {
    const { posts } = usePosts()
    return {
      posts,
    }
  },
}
</script>
<style scoped>
li {
  list-style: none;
}
.link {
  margin-right: 10px;
  margin-bottom: 5px;
}
</style>
