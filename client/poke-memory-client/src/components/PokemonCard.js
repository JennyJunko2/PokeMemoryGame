import StyledPokemonCard from "../styles/StyledPokemonCard"

const PokemonCard = ({item}) => {
  console.log()
  return (
    <StyledPokemonCard>
      <img src={item.image} alt={item.name}/>
      <p>{item.name}</p>
    </StyledPokemonCard>
  )
}

export default PokemonCard