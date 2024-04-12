// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Question from './components/Question';
import Results from './components/Results';
import questionsData from './data/questions.json';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (selectedAnswer) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (currentQuestion + 1 < questionsData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    // Calculate correct answers
    const correctAnswersCount = userAnswers.reduce((count, userAnswer, index) => {
      const correctAnswer = questionsData.questions[index].correctAnswer;
      return userAnswer === correctAnswer ? count + 1 : count;
    }, 0);

    // Navigate to results page
    history.push({
      pathname: '/results',
      state: {
        userAnswers,
        correctAnswersCount,
        totalQuestions: questionsData.questions.length,
      },
    });
  };

  return (
    <Router>
      <div className="container mx-auto mt-8">
        <Switch>
          <Route exact path="/">
            <Question
              question={questionsData.questions[currentQuestion]}
              onAnswerSelect={handleAnswerSelect}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleSubmit}
            >
              Next
            </button>
          </Route>
          <Route path="/results" component={Results} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
