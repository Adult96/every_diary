import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DiaryItem from '../components/DiaryItem';
import { __getDiary } from '../redux/module/diarySlice';

export default function Diary() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, diary, isError } = useSelector(state => state.diary);

  useEffect(() => {
    dispatch(__getDiary());
  }, []);

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;
  return (
    <>
      <Ul>
        {diary
          .filter(item => item.date === id)
          .map((item, index) => (
            <DiaryItem key={index} diary={item} />
          ))}
        <ItemAdd>
          <p>{diary.title}</p>
          <p>{diary.content}</p>
        </ItemAdd>
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
  height: 65vh;
  padding: 1rem;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 0 0 1rem 1rem;
  overflow-y: scroll;
`;

const ItemAdd = styled.li`
  height: 200px;
  border: 1px solid ${props => props.theme.borderColor};
`;
