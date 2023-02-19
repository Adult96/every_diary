import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/Theme';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
