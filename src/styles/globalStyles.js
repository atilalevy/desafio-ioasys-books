import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {

  // Variáveis de cor
  --white: #ffffff;
  --black: #000000;
  --black-transparent: rgba(0, 0, 0, 0.32);
  --firebrick-variation: #B22E6F;
}

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    transition: all ease .5s;
  }

  button {
    outline: none;
    border: none;
  }

  input {
    border: none;

    :focus {
      border: none;
      outline: none;
    }
  }
`

export default GlobalStyle
