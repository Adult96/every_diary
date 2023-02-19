import React from 'react';
import styled from 'styled-components';

export default function DiaryItem({ diary }) {
  return (
    <Item>
      <p>{diary.title}</p>
      <p>{diary.content}</p>
    </Item>
  );
}

const Item = styled.li`
  height: 15rem;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 1rem;
  padding: 1rem;
  transition: all 300ms ease-in-out;
`;
