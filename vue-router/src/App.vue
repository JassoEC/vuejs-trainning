<template>
  <router-link
    v-for="(route, index) in routes"
    :key="index"
    class="link"
    :to="route.path"
  >
    {{ route.label }}
  </router-link>
  <router-view />
</template>

<script>
export default {
  setup() {
    const routes = [{ path: '/posts', label: 'Posts' }]

    return {
      routes,
    }
  },
}
</script>
<style scoped>
.link {
  margin-right: 10px;
}
</style>
