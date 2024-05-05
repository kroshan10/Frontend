import React, { useState } from 'react';
import './Form.css'; 
import axios from 'axios';

function HeartDisease() {
  const [questions, setQuestions] = useState([
    { 
      id: 1, 
      text: 'Please enter your age?', 
      answer: '', 
      type: 'number'
    },
    { 
      id: 2, 
      text: 'Select your gender:', 
      answer: '', 
      type: 'select', 
      options: [
        { key: 'Male', value: 1 }, 
        { key: 'Female', value: 0 }
      ]
    },
    { 
      id: 3, 
      text: "Select the type of chest pain you're experiencing", 
      answer: '', 
      type: 'select', 
      options: [
        { key: "Typical angina", value: 0 }, 
        { key: "Atypical angina", value: 1 }, 
        { key: "Non-anginal pain", value: 2 }, 
        { key: "Asymptomatic", value: 3}
      ]
    },
    { 
      id: 4, 
      text: 'Please enter your resting blood pressure (mm Hg)', 
      answer: '', 
      type: 'number' 
    },
    {
      id: 5,
      text: "Please enter your serum cholesterol level (mg/dl):",
      answer:'',
      type:'number'
    },
    {
      id: 6,
      text: "Do you have fasting blood sugar > 120 mg/dl?",
      answer:'',
      type:'select',
      options: [
        { key: 'Yes', value: 1 }, 
        { key: 'No', value: 0 }
      ]
    },
    {
      id: 7,
      text: "Select your resting electrocardiographic results:",
      answer:'',
      type:'select',
      options: [
        { key: 'Normal', value: 0 }, 
        { key: 'Having ST-T wave abnormality', value: 1 },
        { key: 'Left ventricular hypertrophy', value: 2 }
      ]
    },
    {
      id: 8,
      text: "Please enter your maximum heart rate achieved",
      answer: '',
      type: 'number'
    },
    {
      id: 9,
      text: "Select if you experience exercise-induced angina:",
      answer: '',
      type: 'select',
      options: [
        { key: 'Yes', value: 1 }, 
        { key: 'No', value: 0 }
      ]
    },
    {
      id: 10,
      text: "Please enter your ST depression induced by exercise relative to rest",
      answer: '',
      type: 'number'
    },
    {
      id: 11,
      text: "Select the slope of the peak exercise ST segment:",
      answer: '',
      type: 'select',
      options: [
        { key: 'Up-sloping', value: 0 }, 
        { key: 'Flat', value: 1 },
        { key: 'Down-sloping', value: 2 }
      ]
    },
    {
      id: 12,
      text: "Select the number of major vessels colored by flourosopy (0-3):",
      answer: '',
      type: 'select',
      options: [
        { key: '0', value: '0' }, 
        { key: '1', value: '1' },
        { key: '2', value: '2' },
        { key: '3', value: '3' }
      ]
    },
    {
      id: 13,
      text: "Select the thalassemia Type:",
      answer: '',
      type: 'select',
      options: [
        { key: 'Normal', value: 1}, 
        { key: 'Fixed defect', value: 2 },
        { key: 'Reversable defect', value: 3 }
      ]
    }
  ]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleInputChange = (e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answer = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const formData = questions.map(question => question.answer);
    axios.post('http://127.0.0.1:8000/predict', formData)
    .then(response => {
      console.log('Success:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const renderInputField = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.type === 'number') {
      return (
        <input
          type="number"
          className="input-field"
          value={currentQuestion.answer}
          onChange={handleInputChange}
        />
      );
    } else if (currentQuestion.type === 'select') {
      return (
        <select
          className="input-field"
          value={currentQuestion.answer}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          {currentQuestion.options.map((option, index) => (
            <option key={index} value={option.value}>{option.key}</option>
          ))}
        </select>
      );
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (currentQuestionIndex < questions.length - 1) {
        handleNextQuestion();
      } else {
        handleSubmit();
      }
    }
  };

  return (
    <div className="container" onKeyDown={handleKeyDown}>
      <p className="question-text">{currentQuestionIndex+1}.{questions[currentQuestionIndex].text}</p>
      {renderInputField()}
      <br />
      {currentQuestionIndex > 0 && (
        <button className="previous-button button" onClick={handlePreviousQuestion}>Previous</button>
      )}
      {currentQuestionIndex < questions.length - 1 ? (
        <button className="next-button button" onClick={handleNextQuestion}>Next</button>
      ) : (
        <button className="submit-button button" onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default HeartDisease;
