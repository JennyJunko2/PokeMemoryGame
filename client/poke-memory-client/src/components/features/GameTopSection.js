import StyledButtonAndTimerContainer from "../../styles/StyledButtonAndTimerContainer"
import Button from "../ui/Button"

const GameTopSection = ({
  readyToPlay,
  counter,
  hasAllCardsMatched,
  onGameStart,
  onPlayAgain
}) => {

  if (readyToPlay) {
    return <Button title={'START GAME'} onClick={onGameStart}/>
  }

  return (
    <StyledButtonAndTimerContainer>
      <Button title='TRY AGAIN' onClick={onPlayAgain}/>
      <div className='timer'>{(counter && !hasAllCardsMatched) ? `Time Left: ${counter}` : null}</div>
    </StyledButtonAndTimerContainer>
  )
}

export default GameTopSection