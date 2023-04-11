import { useCallback, useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"
import Confetti from 'react-confetti'

const PokemonCardsGrid = ({shuffledCards}) => {
  const [cardsStatus, setCardsStatus] = useState(shuffledCards.map((card, index) => {
    return {
      cardKey: index,
      ...card,
      status: 'back'
    }
  }))
  const [flippedCards, setFlippedCards] = useState([])
  const [message, setMessage] = useState('')
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
      }, 5000)
    }
  }, [showConfetti])

  useEffect(() => {
    if (flippedCards.length === 2) { // When the pair is ready to judge
      if (flippedCards[0].id === flippedCards[1].id) { // When the pair is a match
        setMessage('Match')
        setTimeout(() => {
          manageCardsState(flippedCards[0].cardKey, 'finish')
          manageCardsState(flippedCards[1].cardKey, 'finish')
          setFlippedCards([])

          if (checkIfGameIsCompleted(cardsStatus)) {
            setShowConfetti(true)
          }
        }, 500)
        console.log('cardsStatus:::',cardsStatus)

      } else { // When the pair is not a match
        setMessage('Wrong...')
        setTimeout(() => {
          manageCardsState(flippedCards[0].cardKey, 'back')
          manageCardsState(flippedCards[1].cardKey, 'back')
          setFlippedCards([])
        }, 500)
      }
    }
  }, [cardsStatus, checkIfGameIsCompleted, flippedCards, manageCardsState, setMessage])

  const flipCard = (card, key) => {
    setFlippedCards((currentCards) => [...currentCards, card])
    manageCardsState(key, 'front')
  }

  return (
    <>
    {showConfetti && <Confetti />}    
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
      <div>{message}</div>
    </>
  )
}

export default PokemonCardsGrid