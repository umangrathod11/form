import React from 'react';

const QuestionPage = ({ question, options, selectedOption, handleChange }) => {
  return (
    <div>
      <h2>{question}</h2>
      <form>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </form>
    </div>
  );
};

export default QuestionPage;
