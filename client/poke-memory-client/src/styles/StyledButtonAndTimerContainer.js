import styled from "styled-components"
import { Colors } from "./colors"

const StyledButtonAndTimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 65%;

  .timer {
    position: absolute;
    right: 0;
    font-size: 1rem;
    color: ${Colors.pokeRed};
    font-family: system-ui, sans-serif;
    font-weight: bold;
  }
`

export default StyledButtonAndTimerContainer