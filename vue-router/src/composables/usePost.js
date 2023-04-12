import { ref } from 'vue'
import { testPosts } from '../../testPosts.js'

export const usePosts = () => {
  const posts = ref(testPosts)

  const addPost = (post) => {
    posts.value.push(post)
  }

  return {
    posts,
    addPost
  }
}