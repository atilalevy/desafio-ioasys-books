import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {

  // Variáveis de cor
  --white: #ffffff;
  --white-transparent: rgba(255, 255, 255, 0.4);
  --spanish-gray: #999999;
  --dark-gray: #333333;
  --black: #000000;
  --black-transparent: rgba(0, 0, 0, 0.32);
  --firebrick-variation: #B22E6F;
  --fandango: #AB2680;
}

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p, span {
    margin: 0;
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

  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
