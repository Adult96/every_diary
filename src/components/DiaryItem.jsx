import React from 'react';
import styled from 'styled-components';

export default function DiaryItem({ diary }) {
  return (
    <li>
      <p>{diary.title}</p>
      <p>{diary.content}</p>
    </li>
  );
}
