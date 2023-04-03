<template>
  <pokemon-cards
    :pokemons="pokemons"
    @chosen="fetchEvolution"
    :selectedId="selectedId"
  />
  <pokemon-cards :pokemons="evolutions" />
</template>

<script>
import PokemonCards from './components/PokemonCards.vue'
const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
  components: { PokemonCards },
  data() {
    return {
      pokemons: [],
      evolutions: [],
      selectedId: null,
    }
  },
  methods: {
    async fetchEvolution(pokemon) {
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
      this.selectedId = pokemon.id
    },
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`)),
      )
      const data = await Promise.all(
        responses.map((response) => response.json()),
      )

      return data.map((datum) => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map((type) => type.type.name),
      }))
    },
  },
  async created() {
    this.pokemons = await this.fetchData(IDS)
  },
}
</script>

<style scoped></style>
