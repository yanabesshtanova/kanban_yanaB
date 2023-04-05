import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import TaskContent from './components/task-content/TaskContent'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/tasks/:taskId' element={<TaskContent />} />
        </Route>
        <Route path='*' element={<main style={{padding: "1rem"}}><p>There's nothing never!</p></main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
