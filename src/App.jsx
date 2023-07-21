import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components';
import {
  HomePage,
  PhotoPage,
  TodoPage,
  UsersPage,
  TodoSinglePage,
  UserSinglePage,
} from './pages';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos" element={<PhotoPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/todos/:id" element={<TodoSinglePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserSinglePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
