import styled from "styled-components"
import { Colors } from "../../styles/colors"

const Button = ({title, onClick}) => {
  return (
    <StyledButton onClick={onClick}>{title}</StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: ${Colors.pokeRed};
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-family: system-ui, sans-serif;
  border: none;
`

export default Button