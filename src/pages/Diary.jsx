import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getDiray } from '../redux/module/diraySlice';

export default function Diary() {
  const [showType, setShowType] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, diary, isError } = useSelector(state => state.diraySlice);

  useEffect(() => {
    dispatch(__getDiray());
  }, []);

  const showDiray = () => {
    const item = diary.filter(item => item.date === id).length;
    if (item) {
      return diary
        .filter(item => item.date === id)
        .map((item, index) => (
          <li key={index}>
            <p>{item.title}</p>
          </li>
        ));
    } else {
      return '일기를 추가하세요';
    }
  };

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>에러</div>;
  return <ul>{showDiray()}</ul>;
}
