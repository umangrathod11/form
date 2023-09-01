import React, { useState } from 'react';
import QuestionPage from './QuestionPage';

const questions = [
  {
    question: 'Question 1: India Prime-Minister Currentley?',
    options: ['Narendra Modi', 'Barak Obama', 'Zin-Ping', 'Yogi-Adityanath'],
  },
  {
    question: 'Question 2: Which State in Somanath Mandir ?',
    options: ['Uttrakhand', 'Meghalay', 'kerala', 'Gujarat'],
  },
  {
    question: 'Question 3: Which place Taj-mahal are Located ?',
    options: ['Agara', 'Mathura', 'Punjab', 'Ayodhya'],
  },
];

const FormApp = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

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
    // You can handle the form submission here
    console.log(selectedOptions);
  };

  return (
    <div>
      <QuestionPage
        question={questions[currentPage].question}
        options={questions[currentPage].options}
        selectedOption={selectedOptions[currentPage]}
        handleChange={handleOptionChange}
      />
      <button className='prebtn' onClick={prevPage} disabled={currentPage === 0}>
        Previous
      </button>
      &nbsp;
      {currentPage < questions.length - 1 && (
        <button className='nextbtn' onClick={nextPage}>Next</button>
      )}
      {currentPage === questions.length - 1 && (
        <button className='submitbtn' onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default FormApp;
