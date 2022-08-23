import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30',
    important: true,
    categories: ['sports', 'hobby']
  },
  {
    id: 2,
    content: 'amore',
    date: '2020-05-30',
    important: true
  },
  {
    id: 3,
    content: 'queso',
    date: '2021-05-30',
    important: false
  }
]

const notes_api = [
  {
    id: 1,
    title: 'asdasasdadsasddasdasd',
    body: '131232131231',
  },
  {
    id: 2,
    title: 'asdasasdadsasddasdasd',
    body: '131232131231',
  },
  {
    id: 3,
    title: 'asdasasdadsasddasdasd',
    body: '131232131231',
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App notes={notes} notes_api={notes_api} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
