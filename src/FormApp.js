// FormApp.js
import React, { useState } from 'react';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage'; // Import the ResultPage component

const questions = [
  {
    question: 'Question 1: India Prime-Minister Currently?',
    options: ['Narendra Modi', 'Barack Obama', 'Xi Jinping', 'Yogi Adityanath'],
    correctAnswer: 'Narendra Modi', // Add correct answer here
  },
  {
    question: 'Question 2: Which State is Somanath Mandir in?',
    options: ['Uttarakhand', 'Meghalaya', 'Kerala', 'Gujarat'],
    correctAnswer: 'Gujarat', // Add correct answer here
  },
  {
    question: 'Question 3: In which place is the Taj Mahal located?',
    options: ['Agra', 'Mathura', 'Punjab', 'Ayodhya'],
    correctAnswer: 'Agra', // Add correct answer here
  },
];

const FormApp = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false); // Track if the form has been submitted

  const handleOptionChange = (event) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentPage] = event.target.value;
    setSelectedOptions(updatedOptions);
  };

  const nextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, questions.length - 1));
  };

  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 0));
  };

  const handleSubmit = () => {
    setSubmitted(true); // Set submitted to true when the form is submitted
  };

  return (
    <div>
      {submitted ? (
        // If form is submitted, show the result page
        <ResultPage selectedOptions={selectedOptions} questions={questions} />
      ) : (
        // If form is not submitted, show the question page
        <>
          <QuestionPage
            question={questions[currentPage].question}
            options={questions[currentPage].options}
            selectedOption={selectedOptions[currentPage]}
            handleChange={handleOptionChange}
          />
        <br/>
          <button className='prebtn' onClick={prevPage} disabled={currentPage === 0}>
            Previous
          </button>
          &nbsp;
          {currentPage < questions.length - 1 && (
            <button className='nextbtn' onClick={nextPage}>
              Next
            </button>
          )}
          {currentPage === questions.length - 1 && (
            <button className='submitbtn' onClick={handleSubmit}>
              Submit
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default FormApp;
