import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
    const location = useLocation();
    const { userAnswers, correctAnswersCount, totalQuestions } = location.state;

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Results</h1>
            <p className="mb-4">You got {correctAnswersCount} out of {totalQuestions} correct.</p>
            <p className="mb-4">Your answers:</p>
            <ul>
                {userAnswers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ul>
        </div>
    );
}

export default Results;