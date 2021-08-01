import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 12px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #ccc;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

@media (max-width: 1700px) {
  html {
    font-size: 11px;
  }
}

@media (max-width: 1600px) {
  html {
    font-size: 10px;
  }
}

@media (max-width: 1500px) {
  html {
    font-size: 9.5px;
  }
}

@media (max-width: 1430px) {
  html {
    font-size: 9px;
  }
}

@media (max-width: 1300px) {
  html {
    font-size: 8.5px;
  }
}

@media (max-width: 1230px) {
  html {
    font-size: 8px;
  }
}

@media (max-width: 1150px) {
  html {
    font-size: 7.5px;
  }
}

@media (max-width: 1100px) {
  html {
    font-size: 7px;
  }
}

@media (max-width: 1024px) and (orientation: portrait) {
  html {
    font-size: 10px;
  }
}

@media (max-width: 830px) {
  html {
    font-size: 10px;
  }
}

@media (max-width: 540px) {
  html {
    font-size: 9px;
  }
}

@media (max-width: 367px) {
  html {
    font-size: 8px;
  }
}

@media (max-width: 320px) {
  html {
    font-size: 7px;
  }
}

@media (max-width: 830px) and (orientation: landscape) {
  html {
    font-size: 9px;
  }
}
`;