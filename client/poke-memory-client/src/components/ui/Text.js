import styled from "styled-components"
import { Colors } from "../../styles/colors"

const Text = ({size, fontWeight, children}) => {
  return (
    <StyledText size={size} fontWeight={fontWeight}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.p`
  font-size: ${({size}) => size ? size : '14px'};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 'normal'};
  color: ${({color}) => color ? color : Colors.textColor };
  font-family: system-ui, sans-serif;
`

export default Text