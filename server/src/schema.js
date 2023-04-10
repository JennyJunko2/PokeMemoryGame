const gql = require('graphql-tag')

const typeDefs = gql`
  type Query {
    pokemons: [Pokemon!]!
    randomPokemons(number: Int): [PokemonDetails!]!
  }

  type Pokemon {
    name: String!
    url: String!
    details: PokemonDetails
  }

  type PokemonDetails {
    id: ID!
    name: String!
    height: Int!
    image: String!
  }
`

module.exports = typeDefs