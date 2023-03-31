<template>
  <div class="card">
    <div class="title">
      title
    </div>
    <div class="content">
      Content
    </div>
    <div class="description">
      description
    </div>
  </div>
  <button @click="fetchData">Fetch</button>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'

export default {
  data() {
    return {
      pokemon: null,
    }
  },
  methods: {
    async fetchData() {
      const reponse = await window.fetch(`${api}/1`)
      const data = await reponse.json()
      this.pokemon = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.other['official-artwork'].front_default,
        types: data.types.map((type) => type.type.name),
      }
      console.log(this.pokemon)
    },
  },
}
</script>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title,
.content,
.description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title,
.content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>
