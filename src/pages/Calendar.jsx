import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState(['2023-02-16', '2023-02-17']);
  const navigate = useNavigate();

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

  const handleCalendarDay = e => {
    const day = moment(e).format('YYYY-MM-DD');
    navigate(`/diary/${day}`);
  };

  return (
    <CalendarContainer>
      <Calendar
        onChange={onChange}
        onClickDay={handleCalendarDay}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={value}
        tileContent={show}
      />
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  .react-calendar {
    width: 100%;
    max-width: 100%;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    border-radius: 0 0 1rem 1rem;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${props => props.theme.bgHover};
  }
  .react-calendar__navigation button[disabled] {
    background-color: ${props => props.theme.bgHover};
  }

  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__month-view__days {
    height: 65vh;
  }

  .react-calendar__month-view__days__day {
    color: ${props => props.theme.text};
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${props => props.theme.bgHover};
    color: #6f48eb;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: ${props => props.theme.bgHover};
  }
  .react-calendar__tile--active {
    background: #6f48eb;
    border-radius: 6px;
    font-weight: bold;
    color: ${props => props.theme.text};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #6f48eb;
    color: ${props => props.theme.text};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${props => props.theme.bg};
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #6f48eb;
    color: ${props => props.theme.text};
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #6f48eb;
    color: ${props => props.theme.text};
  }
`;

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

export default CalendarPage;
