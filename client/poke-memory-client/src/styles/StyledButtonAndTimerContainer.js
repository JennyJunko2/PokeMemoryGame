import styled from "styled-components"

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
    color: #E54222;
    font-family: system-ui, sans-serif;
    font-weight: bold;
  }
`

export default StyledButtonAndTimerContainer