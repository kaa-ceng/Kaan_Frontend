import React from 'react';

const WelcomeToTemplate = ({ onNext }) => {
  return (
    <div>
      <form>
        <div className="NumberOfTable-input" style={{ textAlign: 'center' }}>
          <h1>You are in the Template Page now. Press "Next" to Start </h1>
        </div>
        <button type="button" onClick={onNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default WelcomeToTemplate;
