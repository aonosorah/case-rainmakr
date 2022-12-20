import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
    max-width: 100vw;
    min-height: 100vh;
     background: linear-gradient(20.86deg, #ED1E79 -7.25%, #12CCE4 119.82%);
  }
`;
