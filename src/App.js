import React, { useState } from 'react';
import ChooseLanguage from './components/ChooseLanguage';
import WelcomeToTemplate from './components/WelcomeToTemplate';
import HowManyTablesComponent from './components/HowManyTablesComponent';
import TableNames from './components/TableNames';
import VisualizeTables from './components/VisualizeTables';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [numberOfTables, setNumberOfTables] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [tableNames, setTableNames] = useState([]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNumberOfTablesInput = (value) => {
    setNumberOfTables(value);
    handleNext();
  };

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
    handleNext();
  };

  const handleTableNamesInput = (names) => {
    setTableNames(names);
    handleNext();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ChooseLanguage onNext={handleLanguageSelection} />;
      case 2:
        return <WelcomeToTemplate onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <HowManyTablesComponent onNext={handleNumberOfTablesInput} onBack={handleBack} />;
      case 4:
        return <TableNames numberOfTables={numberOfTables} onNext={handleTableNamesInput} onBack={handleBack} />;
      case 5:
        return <VisualizeTables tableNames={tableNames} />;
      default:
        return null;
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h4>Website Creation Process</h4>
      {renderStep()}
    </div>
  );
}

export default App;
