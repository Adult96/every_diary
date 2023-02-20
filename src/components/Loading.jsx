import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

export default function Loading() {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    return () => {
      setSpinner(false);
    };
  }, []);

  return (
    <LoadingBox>
      <LoadingSpinner spinner={spinner} />
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  padding: 1rem;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 0 0 1rem 1rem;

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid white;
  border-color: ${props => props.theme.text} transparent
    ${props => props.theme.text} transparent;
  border-radius: 50%;
  ${props =>
    props.spinner &&
    css`
      animation: lds-dual-ring 1.2s linear infinite;
    `}
`;
