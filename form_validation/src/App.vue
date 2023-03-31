<template>
  <form @submit.prevent="submit">
    <app-input
      name="username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
    />
    <app-input
      name="password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
      :error="password.error"
      @update="update"
      type="password"
    />
    <app-button
      background="darkslateblue"
      color="white"
      :disabled="!valid"
      type="submit"
    />
  </form>
</template>

<script>
import AppButton from './components/AppButton.vue'
import AppInput from './components/AppInput.vue'
export default {
  components: {
    AppButton,
    AppInput,
  },
  data() {
    return {
      username: {
        value: 'user',
        error: 'false',
      },
      password: {
        value: 'pass',
        error: 'false',
      },
    }
  },
  methods: {
    update({ name, value, error }) {
      this[name].value = value
      this[name].error = error
    },
    submit() {
      console.log(
        'name: ',
        this.username.value,
        'password: ',
        this.password.value,
      )
    },
  },
  computed: {
    valid() {
      return !this.username.error && !this.password.error
    },
  },
}
</script>

<style scoped></style>
