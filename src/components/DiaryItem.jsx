import React from 'react';
import styled from 'styled-components';

export default function DiaryItem({ diary }) {
  return (
    <Item>
      <TextBox>
        <Title>{diary.title}</Title>
        <Content>{diary.content}</Content>
      </TextBox>
    </Item>
  );
}

const Item = styled.li`
  height: 15rem;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
`;

const TextBox = styled.div`
  height: 90%;
  /* gird박스의 width가 동적이기 때문에 
    word-wrap과 word-break로 박스 밖을 넘어가지 않게 설정
  */
  word-wrap: break-word;
  word-break: break-all;
`;

const Title = styled.div`
  display: -webkit-box;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  white-space: normal;
  -webkit-line-clamp: 1; /* 텍스트를 자를 때 원하는 단위 ex) 3줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Content = styled.div`
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 9; /* 텍스트를 자를 때 원하는 단위 ex) 3줄 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
