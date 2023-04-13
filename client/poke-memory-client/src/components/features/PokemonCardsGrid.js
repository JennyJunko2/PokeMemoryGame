import { useCallback, useEffect, useState } from "react"
import Confetti from 'react-confetti'
import PokemonCard from "./PokemonCard"

const PokemonCardsGrid = ({shuffledCards, hasAllCardsMatched, setHasAllCardsMatched}) => {
  const [cardsStatus, setCardsStatus] = useState(shuffledCards)
  const [flippedCards, setFlippedCards] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)

  const manageCardsState = useCallback((key, newStatus) => {
    let copyState = [...cardsStatus]
    const targetCardIndex = cardsStatus.findIndex(item => item.cardKey === key)
    copyState[targetCardIndex]['status'] = newStatus
    setCardsStatus(copyState)
  },[cardsStatus])

  const checkIfGameIsCompleted = useCallback((cards) => {
    return cards.every((card) => card.status === 'finish')
  }, [])

  useEffect(() => {
    if(showConfetti) {
      setTimeout(()=> {
        setShowConfetti(false)
      }, 7000)
    }
  }, [showConfetti])

  useEffect(() => {
    if (flippedCards.length === 2) { // When the pair is ready to judge
      if (flippedCards[0].id === flippedCards[1].id) { // When the pair is a match
        setTimeout(() => {
          manageCardsState(flippedCards[0].cardKey, 'finish')
          manageCardsState(flippedCards[1].cardKey, 'finish')
          setFlippedCards([])

          if (checkIfGameIsCompleted(cardsStatus)) {
            setShowConfetti(true)
            setHasAllCardsMatched(true)
          }
        }, 500)
      } else { // When the pair is not a match
        setTimeout(() => {
          manageCardsState(flippedCards[0].cardKey, 'back')
          manageCardsState(flippedCards[1].cardKey, 'back')
          setFlippedCards([])
        }, 500)
      }
    }
  }, [cardsStatus, checkIfGameIsCompleted, flippedCards, manageCardsState, setHasAllCardsMatched])

  const flipCard = (card, key) => {
    if (flippedCards.length < 2) {
      manageCardsState(key, 'front')
      setFlippedCards((currentCards) => [...currentCards, card])
    }
  }

  return (
    <>
    {(hasAllCardsMatched && showConfetti) && <Confetti />}    
    {cardsStatus?.map((item) => {
        return(
        <PokemonCard
          item={item}
          index={item.cardKey}
          key={item.cardKey}
          flippedCards={flippedCards}
          setFlippedCards={setFlippedCards}
          flipCard={flipCard}
          cardStatus={item.status}
        />)
      })}
    </>
  )
}

export default PokemonCardsGrid