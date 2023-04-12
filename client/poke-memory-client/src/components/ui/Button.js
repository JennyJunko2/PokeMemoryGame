import styled from "styled-components"

const Button = ({title, onClick}) => {
  return (
    <StyledButton onClick={onClick}>{title}</StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: #E54222;
  color: white;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
`

export default Button