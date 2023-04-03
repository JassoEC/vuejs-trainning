<template>
  <div class="cards">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :class="{ opace: selectedId && selectedId !== pokemon.id }"
      @click="click(pokemon)"
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>
      <template v-slot:content>
        <img :src="pokemon.sprite" alt="" />
      </template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
  props: {
    pokemons: {
      type: Array,
      default: [],
    },
    selectedId: {
      type: Number,
      default: null,
    },
  },
  methods: {
    click(pokemon) {
      this.$emit('chosen', pokemon)
    },
  },
}
</script>

<style scoped>
img {
  width: 100%;
}
.opace {
  opacity: 0.5;
}

.card:hover {
  opacity: 1;
}
.cards {
  display: flex;
}
</style>
