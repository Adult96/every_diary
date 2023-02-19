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
  height: 200px;
  border: 1px solid ${props => props.theme.borderColor};
`;
