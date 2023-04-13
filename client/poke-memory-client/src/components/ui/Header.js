import styled from "styled-components"
import { Colors } from "../../styles/colors"

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Poke Memory Game</HeaderTitle>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${Colors.pokeBlue};
  min-height: 80px;
`

const HeaderTitle = styled.div`
  font-size: 2rem;
  font-family: system-ui, sans-serif;
`

export default Header