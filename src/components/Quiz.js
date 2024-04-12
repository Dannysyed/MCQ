// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft((prevTime) => prevTime - 1);
            } else {
                setIsFinished(true);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleSelect = (index, option) => {
        const newAnswers = [...answers];
        newAnswers[index] = option;
        setAnswers(newAnswers);
    };

    const handleFinish = () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (question.answer === answers[index]) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setIsFinished(true);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-8">Quiz</h1>
            {isFinished ? (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Quiz Finished!</h2>
                    <p className="text-lg">Score: {score}</p>
                    <p className="text-lg">Time Left: {timeLeft} seconds</p>
                    <Link to="/" className="text-blue-500 hover:underline block mt-4">
                        Go Back to Home
                    </Link>
                </div>
            ) : (
                <>
                    <Question question={questions[currentQuestion]} onSelect={handleSelect} />
                    <div className="flex justify-between mt-8">
                        {currentQuestion > 0 && (
                            <button
                                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md"
                                onClick={() => setCurrentQuestion((prev) => prev - 1)}
                            >
                                Previous
                            </button>
                        )}
                        {currentQuestion < questions.length - 1 && (
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                                onClick={() => setCurrentQuestion((prev) => prev + 1)}
                            >
                                Next
                            </button>
                        )}
                        {currentQuestion === questions.length - 1 && (
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                                onClick={handleFinish}
                            >
                                Finish
                            </button>
                        )}
                    </div>
                    <div className="mt-4">
                        <p>Time Left: {timeLeft} seconds</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;
