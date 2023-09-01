// ResultPage.js
import React from 'react';

const ResultPage = ({ selectedOptions, questions }) => {
  const calculateResults = () => {
    let correctCount = 0;
    let wrongCount = 0;

    const results = questions.map((question, index) => {
      const isCorrect = selectedOptions[index] === question.correctAnswer;
      if (isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }

      return {
        question: question.question,
        selectedOption: selectedOptions[index],
        correctAnswer: question.correctAnswer,
        isCorrect,
      };
    });

    return { correctCount, wrongCount, results };
  };

  const { correctCount, wrongCount, results } = calculateResults();

  return (
    <div className="result-container">
      <h2>Results</h2>
      <p>Correct Answers: {correctCount}</p>
      <p>Wrong Answers: {wrongCount}</p>
      <ul>
        {results.map((result, index) => (
          <li key={index} className="result-item">
            <strong>Question:</strong> {result.question}
            <br />
            <strong>Your Answer:</strong> {result.selectedOption}
            <br />
            <strong>Correct Answer:</strong> {result.correctAnswer}
            <br />
            <span className={result.isCorrect ? 'correct-answer' : 'wrong-answer'}>
              {result.isCorrect ? 'Correct' : 'Wrong'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPage;