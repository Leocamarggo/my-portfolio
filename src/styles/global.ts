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
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1A1A1A;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #02d463;
    border-radius: 8px;
    box-shadow: 0 0 6px rgba(2, 212, 99, 0.5);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glowPulse {
    0%, 100% {
      text-shadow: 0 0 8px rgba(2, 212, 99, 0.4), 0 0 20px rgba(2, 212, 99, 0.2);
    }
    50% {
      text-shadow: 0 0 16px rgba(2, 212, 99, 0.8), 0 0 40px rgba(2, 212, 99, 0.4);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-14px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes borderGlow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(2, 212, 99, 0.2);
    }
    50% {
      box-shadow: 0 0 18px rgba(2, 212, 99, 0.6);
    }
  }
`

export default GlobalStyle
