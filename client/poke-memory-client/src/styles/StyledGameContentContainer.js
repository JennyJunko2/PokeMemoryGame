import styled, { css } from "styled-components"

const StyledGameContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-between ;

  ${({disabled}) => disabled === 'initialOverlay'  && css`
    pointer-events: none;
    opacity: 0.8;
  `}

  ${({disabled}) => disabled === 'gameOverOverlay'  && css`
    pointer-events: none;
    opacity: 0.7;
    content: attr('Game Over');
  `}

  .gameOverText {
    position: absolute;
    z-index:2;
    color: red;
    top: 40%;
    left: 40%;
    font-size: 5rem;
    font-family: system-ui
  }
`

export default StyledGameContentContainer