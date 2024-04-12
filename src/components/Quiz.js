// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import QuizResult from './QuizResult';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft((prevTime) => prevTime - 1);
            } else {
                finishQuiz();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleSelect = (index, option) => {
        const newAnswers = [...answers];
        newAnswers[index] = option;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        let newScore = 0;
        answers.forEach((selectedAnswer, index) => {
            if (selectedAnswer === questions[index].answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setIsFinished(true);
    };

    if (isFinished) {
        return <QuizResult score={score} timeLeft={timeLeft} totalQuestions={questions.length} correctAnswers={score} />;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-8">Quiz</h1>
            <div className="mb-4">
                <p className="text-lg">Question {currentQuestion + 1} of {questions.length}</p>
                <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-200 h-2 rounded-md">
                        <div
                            className="bg-blue-500 h-full rounded-md"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <p className="ml-2">{Math.floor(((currentQuestion + 1) / questions.length) * 100)}%</p>
                </div>
            </div>
            <Question
                question={questions[currentQuestion]}
                onSelect={handleSelect}
                onNext={handleNext}
                isLastQuestion={currentQuestion === questions.length - 1}
            />
            <div className="mt-4">
                <p>Time Left: {timeLeft} seconds</p>
            </div>
        </div>
    );
};

export default Quiz;
