import styled from 'styled-components';

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
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #7c7979;
    background-color: ${props => props.theme.calrendarBg};
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

export default CalendarContainer;
