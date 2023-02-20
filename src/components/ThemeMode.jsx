import React from 'react';
import styled from 'styled-components';
import Button from '../element/Button';

function ThemeMode({ theme, darkMode, onDarkMode }) {
  const handleStyleMode = () => {
    onDarkMode(mode => !mode);
  };

  return (
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
  );
}

export default ThemeMode;

const StyleMode = styled.div`
  position: absolute;
  width: 12vw;
  height: 5vh;
  border-radius: 1rem;
  background-color: #dadada;
  transform: translateX(10px);
`;
