import { gql, useQuery } from '@apollo/client'
import PokemonCard from './PokemonCard';
import StyledGameContentContainer from '../styles/StyledGameContentContainer';

const RANDOM_POKEMONS = gql`
  query RandomPokemons($number: Int) {
    randomPokemons(number: $number) {
      id
      name
      image
    }
  }
`

const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

const GameContent = () => {
  const { loading, error, data } = useQuery(RANDOM_POKEMONS, {
    variables: { number: 5 }
  })

  const originalCards = data?.randomPokemons.slice() ?? []
  const doubledCards = [...originalCards, ...originalCards]
  const shuffledCards = shuffleCards(doubledCards)

  console.log(shuffledCards)

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <StyledGameContentContainer>
      {shuffledCards?.map((item, index) => {
        console.log('index:', index)
        return <PokemonCard item={item} key={index}/>
      })}
    </StyledGameContentContainer>
  )
}

export default GameContent