import { gql, useQuery } from '@apollo/client'
import StyledGameContentContainer from '../styles/StyledGameContentContainer';
import PokemonCardsGrid from './PokemonCardsGrid';

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

  if (loading) {
    return <p>loading...</p>
  }

  return (
    <StyledGameContentContainer>
      {/* {shuffledCards?.map((item, index) => {
        console.log('index:', index)
        return(
        <PokemonCard
          item={item} 
          key={index}
          flippedCards={flippedCards}
          setFlippedCards={setFlippedCards}
        />)
      })} */}
      <PokemonCardsGrid shuffledCards={shuffledCards}/>
    </StyledGameContentContainer>
  )
}

export default GameContent