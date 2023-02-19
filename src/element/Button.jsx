import React from 'react';
import styled from 'styled-components';

export default function Button({ width, height, fontSize, children }) {
  return (
    <Btn width={width} height={height} fontSize={fontSize}>
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.theme.text};
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 1rem;
  outline: none;
  font-size: ${props => props.fontSize};
  cursor: pointer;
`;
