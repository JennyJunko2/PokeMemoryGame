const resolvers = {
  Query: {
    pokemons: (_, __, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemons()
    },
    randomPokemons: async(_, { number }, { dataSources }) => {
      let results = []
      for (let index = 0; index < number; index++) {
        try {
          const item = await dataSources.pokemonAPI.getRandomPokemon()
          results.push(item)
        } catch (error) {
            continue
        }
      }

      return results
    }
  },
  Pokemon: {
    details: ({name}, _, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemonByIdOrName(name)
    }
  },
  PokemonDetails: {
    image: ({sprites}) => {
      return sprites.other.dream_world.front_default
    }
  }
}

module.exports = resolvers