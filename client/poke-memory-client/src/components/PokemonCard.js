import StyledPokemonCard from "../styles/StyledPokemonCard"

const makeFirstLetterUpper = (words) => {
  return words.charAt(0).toUpperCase() + words.slice(1)
}

const PokemonCard = ({
  item,
  flipCard,
  cardStatus,
  index
}) => {

  const handleFlip = () => {
    if (cardStatus === 'back') {
      flipCard(item, index)
    }
  }

  return (
    <StyledPokemonCard temp={cardStatus} onClick={handleFlip}>
      <img src={item.image} alt={item.name}/>
      <p>{makeFirstLetterUpper(item.name)}</p>
    </StyledPokemonCard>
  )
}

export default PokemonCard