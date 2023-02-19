import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { __deleteDiary } from '../redux/module/diarySlice';

export default function DiaryItem({ diary }) {
  return (
    <Item>
      <TextBox>
        <p>{diary.title}</p>
        <p>{diary.content}</p>
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
`;
