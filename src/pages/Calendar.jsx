import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';

function App() {
  const [value, onChange] = useState(new Date());

  const [mark, setMark] = useState(['2023-02-16', '2023-02-17']);

  const show = ({ date, view }) => {
    if (view === 'month') {
      if (mark.find(x => x === moment(date).format('YYYY-MM-DD'))) {
        return (
          <DotBox className='dotBox'>
            <Dot className='dot'></Dot>
          </DotBox>
        );
      }
    }
    return null;
  };

  return (
    <Calendar
      onChange={onChange}
      formatDay={(locale, date) => moment(date).format('DD')}
      value={value}
      tileContent={show}
    />
  );
}

const DotBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  position: absolute;
  top: 1px;
  height: 8px;
  width: 8px;
  background-color: #f87171;
  border-radius: 50%;
  display: flex;
  margin-left: 1px;
`;

export default App;
