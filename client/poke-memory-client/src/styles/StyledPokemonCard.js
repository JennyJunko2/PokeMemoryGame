import styled, { css } from "styled-components";
import { Colors } from "./colors";

const StyledPokemonCard = styled.div`
  width: calc(100%/5 - 1em);
  height: 300px;
  margin-top: 0.5rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  border: 10px solid ${Colors.pokeBlue};

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
    background-color: ${Colors.grayBackground};
    opacity: 0.5;
  `}

  img {
    width: 80%;
    height: 60%;
    padding: 2rem;
  }
`

export default StyledPokemonCard