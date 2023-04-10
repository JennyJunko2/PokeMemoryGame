const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const PokemonAPI = require('./dataSources/pokemon-api')

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  const { url } = await startStandaloneServer(server, {
    context: async() => {
      return {
        dataSources: {
          pokemonAPI: new PokemonAPI()
        }
      }
    }
  });

  console.log(`Server is running at ${url}`);
}

startApolloServer();