const { RESTDataSource } = require('@apollo/datasource-rest')

const MAX = 500
const MIN = 1

class PokemonAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/' 
  }

  getPokemons(offset = 1, limit = 5){
    return this.get(`pokemon?offset=${offset}&limit=${limit}'`).then(res =>  res.results)
  }

  getRandomPokemon(){
    const randomNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    return this.get(`pokemon/${randomNum}`)
  }

  getPokemonByIdOrName(idOrName){
    return this.get(`pokemon/${idOrName}`)
  }

}

module.exports = PokemonAPI