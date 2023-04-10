import { reactive } from "vue"
import { testPosts } from "./testPosts"


class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null
    })
  }

  setHashTag = (hashtag) => {
    this.state.currentTag = hashtag
  }

  likePost = (postId) => {
    this.state.posts.map(post => post.id === postId ? post.likes++ : post)
  }

  get filteredPost() {
    if (!store.state.currentTag) {
      return store.state.posts
    }
    return store.state.posts.filter((post) =>
      post.hashtags.includes(store.state.currentTag),
    )

  }
}

export const store = new Store()