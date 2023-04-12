<template>
  <form @submit.prevent="submit">
    <h3>New Post</h3>
    <input placeholder="title" v-model="newPost.title" />
    <br />
    <textarea v-model="newPost.content" cols="30" rows="10"></textarea>
    <button type="submit">Save post</button>
  </form>
</template>
<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts } from '../composables/usePost'

export default {
  setup() {
    const postStore = usePosts()

    const router = useRouter()

    const newPost = reactive({
      title: '',
      content: '',
    })

    const submit = () => {
      const id = postStore.posts.value.length + 1

      postStore.addPost({
        ...newPost,
        id,
      })

      router.push(`/posts/${id}`)
    }

    return {
      newPost,
      submit,
    }
  },
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
button {
  margin-top: 10px;
}
</style>
