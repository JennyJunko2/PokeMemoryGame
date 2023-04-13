import StyledPokemonCard from '../../styles/StyledPokemonCard'
import Text from "../ui/Text"
import { makeFirstLetterUpper } from "../../utils/helpers"

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
      <Text size='16px' fontWeight='bold'>
        {makeFirstLetterUpper(item.name)}
      </Text>
    </StyledPokemonCard>
  )
}

export default PokemonCard