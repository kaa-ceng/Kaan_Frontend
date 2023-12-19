import React, { useState } from 'react';

const ChooseLanguage = ({ onNext }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleNext = () => {
    if (selectedLanguage) {
      onNext(selectedLanguage);
    } else {
      alert('Please choose a language.');
    }
  };

  return (
    <div>
      <h1>Choose a Language</h1>
      <div>
        <label>
          <input
            type="radio"
            name="language"
            value="Turkish"
            checked={selectedLanguage === 'Turkish'}
            onChange={() => setSelectedLanguage('Turkish')}
          />
          Turkish
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="language"
            value="English"
            checked={selectedLanguage === 'English'}
            onChange={() => setSelectedLanguage('English')}
          />
          English
        </label>
      </div>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ChooseLanguage;
