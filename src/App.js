import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

const Main = styled.main`
  width: 70vw;
  height: 100%;
  margin: auto;
`;

export default App;
