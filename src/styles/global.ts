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
  }

  ::-webkit-scrollbar{
    width: 8px
  }

  ::-webkit-scrollbar-track{
    background-color: #414141
  }

  ::-webkit-scrollbar-thumb{
    background-color: rgb(2, 212, 99);
    border-radius: 8px
  }
`

export default GlobalStyle