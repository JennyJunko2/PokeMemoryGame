import styled from "styled-components"

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
  background-color: #3761A8;
  min-height: 80px;
`

const HeaderTitle = styled.div`
  font-size: 2rem;
  font-family: system-ui, sans-serif;
`

export default Header

// red: #E54222
// blue: #3761A8
// yellow: #FECA1B