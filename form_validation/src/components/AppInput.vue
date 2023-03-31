<template>
  <div class="input-wrapper">
    <div class="label">
      <label :for="name">{{ customName }}</label>
      <div class="error">
        {{ error }}
      </div>
    </div>
    <input :id="name" :value="value" @input="input" :type="type" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    error: {
      type: String,
    },
    rules: {
      type: Object,
      default: {},
    },
    type: {
      type: String,
      default: 'text',
    },
  },

  created() {
    this.$emit('update', {
      name: this.name,
      value: this.value,
      error: this.validate(this.value),
    })
  },

  methods: {
    input($event) {
      this.$emit('update', {
        name: this.name,
        value: $event.target.value,
        error: this.validate($event.target.value),
      })
    },
    validate(value) {
      if (this.rules.required && value.length === 0) {
        return 'Value is required'
      }
      if (this.rules.min && value.length < this.rules.min) {
        return `Value should be ${this.rules.min} at least`
      }
      return ''
    },
  },
  computed: {
    customName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1)
    },
  },

  emits: ['update'],
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 20px 40px;
  border-radius: 5px;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.error {
  color: red;
}
.label {
  display: flex;
  justify-content: space-between;
}
</style>
