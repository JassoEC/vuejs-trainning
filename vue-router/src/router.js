import {
  createWebHistory,
  createRouter
} from 'vue-router'

import Post from './components/Post.vue'
import Posts from './components/Posts.vue'
import NewPost from './components/NewPost.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/posts', component: Posts, children: [
        { path: 'new', component: NewPost },
        { path: ':id', component: Post },
      ]
    },
  ]
})
export { router }