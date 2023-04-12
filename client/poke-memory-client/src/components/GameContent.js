import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import StyledButtonAndTimerContainer from '../styles/StyledButtonAndTimerContainer';
import StyledGameContentContainer from '../styles/StyledGameContentContainer';
import PokemonCardsGrid from './PokemonCardsGrid';
import Button from './ui/Button';

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
    return <p style={{ fontSize: '1rem', fontFamily: 'system-ui'}}>Shuffling Pokemon cards...</p>
  }

  return (
    <>
      {
        readyToPlay
        ? <Button title={'START GAME'} onClick={onGameStart}/>
        : <StyledButtonAndTimerContainer>
          <Button title={'TRY AGAIN'} onClick={onPlayAgain}/>
          <div className='timer'>{(counter && !hasAllCardsMatched) ? `Time Left: ${counter}` : null}</div>
        </StyledButtonAndTimerContainer>
      }
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