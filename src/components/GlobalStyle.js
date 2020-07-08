import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FAFAFA;
  }
  h1 {
    font-size: 3.5rem;
    @media(max-width: 1000px) {
      font-size: 3rem;
    }
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: serif;
    font-weight: bold;
    color: #424242;
  }
  a, p {
    font-size: 1.2rem;
    font-family: sans-serif;
    line-height: 2.5rem;
  }
  hr {
    height: 1.5rem;
    color: transparent;
  }

  p {
    color: #424242;
  }
  a {
    text-decoration: none;
    color: #1E88E5;
    :hover {
      color: #00ACC1;
    }
    :visited {
      color: #1E88E5;
    }
  }
`
