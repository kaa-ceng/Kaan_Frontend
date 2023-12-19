import React, { useState } from 'react';

const HowManyTablesComponent = ({ onNext, onBack }) => {
  const [numberOfTables, setNumberOfTables] = useState('');

  const handleNext = () => {
    if (/^[1-9]\d*$/.test(numberOfTables)) {
      onNext(Number(numberOfTables));
    } else {
      alert('Please enter a valid positive integer for the number of tables.');
    }
  };

  return (
    <div>
      <form>
        <div className="NumberOfTable-input" style={{ textAlign: 'center' }}>
          <h1>How many tables do you have? </h1>
          <input
            type="text"
            value={numberOfTables}
            onChange={(e) => setNumberOfTables(e.target.value)}
          />
        </div>
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default HowManyTablesComponent;
