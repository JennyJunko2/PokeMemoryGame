import styled, { css } from "styled-components";

const StyledPokemonCard = styled.div`
  width: calc(100%/5 - 1em);
  height: 330px;
  margin-top: 0.5rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  border: 10px solid #3761A8;

  ${({temp}) => temp === 'back' && css`
    background-color: #FECA1B;
    img {
      visibility: hidden;
    }
    p {
      visibility: hidden;
    }
  `}

  ${({temp}) => temp === 'front' && css`
    background-color: white;
  `}

  ${({temp}) => temp === 'finish' && css`
    background-color: #c0c0c0;
    opacity: 0.5;
  `}

  img {
    width: 80%;
    height: 60%;
    padding: 2rem;
  }
`

export default StyledPokemonCard