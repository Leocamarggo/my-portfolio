import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Century';
    src: url('/assets/fonts/century-gothic.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    color: #fff;
    font-family: 'Century';
    background-color: ${({ theme }) => theme.colors.gray};
  }

`

export default GlobalStyle