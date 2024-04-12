// src/components/QuizResult.js
import React from 'react';

const QuizResult = ({ score, timeLeft, totalQuestions, correctAnswers }) => {
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    let feedback;
    if (percentage === 100) {
        feedback = "Congratulations! You've answered all questions correctly!";
    } else if (percentage >= 80) {
        feedback = 'Well done! You did a great job!';
    } else if (percentage >= 50) {
        feedback = 'Not bad! You can improve with more practice.';
    } else {
        feedback = 'You may need to review the material and try again.';
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-8">Quiz Finished!</h1>
            <p className="text-lg">Score: {score}</p>
            <p className="text-lg">Time Left: {timeLeft} seconds</p>
            <p className="text-lg">Total Questions: {totalQuestions}</p>
            <p className="text-lg">Correct Answers: {correctAnswers}</p>
            <p className="text-lg">Incorrect Answers: {incorrectAnswers}</p>
            <p className="text-lg">Percentage: {percentage}%</p>
            <p className="text-lg mt-4">{feedback}</p>
        </div>
    );
};

export default QuizResult;
