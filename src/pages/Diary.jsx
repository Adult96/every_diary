import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    <ul>
      {diary
        .filter(item => item.date === id)
        .map((item, index) => (
          <DiaryItem key={index} diary={item} />
        ))}
    </ul>
  );
}
