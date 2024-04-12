// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import questions from './questions.json';
import './index.css'; // Add Tailwind CSS styles

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <Quiz questions={questions} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
