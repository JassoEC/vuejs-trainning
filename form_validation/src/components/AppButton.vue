<template>
  <button
    v-bind:disabled="disabled"
    v-bind:style="{ background, color }"
    :type="type"
  >
    App Button
  </button>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
    },
    color: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style scoped>
button:disabled {
  opacity: 0.5;
}
button {
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>
