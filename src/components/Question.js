// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ question, index, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(index, option);
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">{question.text}</h2>
            {question.options.map((option) => (
                <button
                    key={option}
                    className={`w-full py-2 px-4 mb-2 rounded-md ${selectedOption === option
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                    onClick={() => handleSelect(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Question;
