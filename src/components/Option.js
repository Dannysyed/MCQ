import React from 'react';

function Option({ option, onSelect }) {
    return <li className="cursor-pointer hover:bg-gray-200 rounded p-2" onClick={onSelect}>{option}</li>;
}

export default Option;
