import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 3.5rem;
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
  a, p {
    font-size: 1.2rem;
    font-family: sans-serif;
    line-height: 2.5rem;
  }
  hr {
    height: 1.5rem;
    color: transparent;
  }
  a {
    text-decoration: none;
  }
`
