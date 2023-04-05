<template>
  <button @click="increase">{{ count }}</button>
  <button @click="increment('a')">{{ numbers.a }}</button>
  <button @click="increment('b')">{{ numbers.b }}</button>
  <p>{{ total }}</p>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const increase = () => {
      count.value++
    }

    const increment = (index) => {
      numbers[index]++
    }

    const numbers = reactive({ a: 2, b: 8 })

    const total = computed(() => count.value + numbers.a + numbers.b)

    watch(total, (newTotal, oldTotal) => {
      console.log(`${oldTotal} => new total value ${newTotal}`)
    })

    watchEffect(() => {
      console.log(`count ${count.value}`)
      console.log(`total ${total.value}`)
    })

    return {
      count,
      numbers,
      total,
      increase,
      increment,
    }
  },
}
</script>

<style scoped>
button {
  width: 100px;
  height: 100px;
}
</style>
