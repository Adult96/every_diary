import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';

import Button from './element/Button';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const handleStyleMode = () => {
    setDarkMode(mode => !mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyleMode>
        <Button
          width='6vw'
          height='5vh'
          mode={darkMode ? 'true' : ''}
          click={handleStyleMode}
        >
          {theme.innerText}
        </Button>
      </StyleMode>
      <Main>
        <Banner>
          <Img src='/img/diaryBanner.png' alt='' />
        </Banner>
        <Outlet />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  width: 70vw;
  height: 100%;
  margin: auto;
  /* transition: all 300ms ease-in-out; */
`;

const StyleMode = styled.div`
  position: absolute;
  width: 12vw;
  height: 5vh;
  border-radius: 1rem;
  background-color: #dadada;
  transform: translateX(10px);
`;

const Banner = styled.div`
  width: 100%;
  height: 20vh;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 1rem 1rem 0 0;
`;

export default App;
