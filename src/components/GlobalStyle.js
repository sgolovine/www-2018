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
  h1,h2,h3,h4 {
    font-family: serif;
    font-weight: bold;
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

export const LightTheme = createGlobalStyle`
  body {
    background-color: #FAFAFA;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #424242;
  }
  p {
    color: #424242;
  }
  a {
    color: #1E88E5;
    :hover {
      color: #00ACC1;
    }
    :visited {
      color: #5E35B1;
    }
  }
`

export const DarkTheme = createGlobalStyle`
  body {
    background-color: #212121;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #F7F7FF;
  }
  p {
    color: #F7F7FF;
  }
  a {
    color: #FA9F42;
    :hover {
      color: #EF7A06;
    }
    :visited {
      color: #FAA34C;
    }
  }
`
