import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getDiary } from '../redux/module/diarySlice';

export default function Diary() {
  const [showType, setShowType] = useState(false);
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
          <li key={index}>
            <p>{item.title}</p>
          </li>
        ))}
    </ul>
  );
}
