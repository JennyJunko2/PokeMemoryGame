import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import StyledGameContentContainer from '../../styles/StyledGameContentContainer';
import { shuffleCards } from '../../utils/helpers';
import Text from '../ui/Text';
import GameTopSection from './GameTopSection';
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

const GameContent = () => {
  const { loading, data } = useQuery(RANDOM_POKEMONS, {
    variables: { number: 5 }
  })

  const originalCards = data?.randomPokemons.slice() ?? []
  const doubledCards = [...originalCards, ...originalCards]
  const shuffledCards = shuffleCards(doubledCards)

  const [counter, setCounter] = useState(null)
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [hasAllCardsMatched, setHasAllCardsMatched] = useState(false)

  const readyToPlay = !hasGameStarted && !hasAllCardsMatched
  const overlayType= counter === null ? 'initialOverlay' : (
    (counter <= 0 && !hasAllCardsMatched) ? 'gameOverOverlay'
    : null
  )

  useEffect(() => {
    if (counter && counter > 0) {
      setTimeout(() => {
        setCounter(counter - 1)
      }, 1000)
    }  
  }, [counter])
  
  const onGameStart = () => {
    setCounter(30)
    setHasGameStarted(true)
  }

  const onPlayAgain = () => {
    window.location.reload();
  }

  if (loading) {
    return <Text>Shuffling Pokemon cards...</Text>
  }

  return (
    <>
      <GameTopSection
        readyToPlay={readyToPlay}
        counter={counter}
        hasAllCardsMatched={hasAllCardsMatched}
        onGameStart={onGameStart}
        onPlayAgain={onPlayAgain}
      />
      {
        <StyledGameContentContainer disabled={overlayType}>
          {overlayType === 'gameOverOverlay' && <p className='gameOverText'>Game Over</p>}          
          <PokemonCardsGrid
            shuffledCards={shuffledCards.map((card, index) => {
              return {
                cardKey: index,
                ...card,
                status: 'back'
              }
            })}
            hasAllCardsMatched={hasAllCardsMatched}
            setHasAllCardsMatched={setHasAllCardsMatched}
          />
        </StyledGameContentContainer>
      }
    </>
  )
}

export default GameContent