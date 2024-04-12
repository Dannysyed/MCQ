// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ question, onSelect, onNext }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsAnswered(true);
    };

    const handleNext = () => {
        setSelectedOption(null);
        setIsAnswered(false);
        onNext();
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">{question.text}</h2>
            {question.options.map((option) => (
                <button
                    key={option}
                    className={`w-full py-2 px-4 mb-2 rounded-md ${isAnswered
                        ? question.answer === option
                            ? 'bg-green-500 text-white'
                            : selectedOption === option
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-200 text-gray-800'
                        : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleSelect(option)}
                    disabled={isAnswered}
                >
                    {option}
                </button>
            ))}
            {isAnswered && (
                <p className={`mt-2 ${question.answer === selectedOption ? 'text-green-500' : 'text-red-500'}`}>
                    {question.answer === selectedOption
                        ? 'Correct!'
                        : `Incorrect. The correct answer is: ${question.answer}`}
                </p>
            )}
            {isAnswered && (
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Question;
