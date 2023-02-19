import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CalendarPage from './pages/Calendar';
import App from './App';
import Diary from './pages/Diary';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import DiaryDetail from './components/DiaryDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CalendarPage />,
      },
      {
        path: '/diary/:id',
        element: <Diary />,
      },
      {
        path: '/diary/:id/:id',
        element: <DiaryDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
