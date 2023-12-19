import React, { useState } from 'react';

const TableNames = ({ numberOfTables, onNext, onBack }) => {
  const [tableNames, setTableNames] = useState(Array.from({ length: numberOfTables }, () => ''));

  const handleNext = () => {
    if (tableNames.every((name) => name.trim() !== '')) {
      onNext(tableNames);
    } else {
      alert('Please enter a name for each table.');
    }
  };

  return (
    <div>
      <form>
        {tableNames.map((tableName, index) => (
          <div className="table-input" key={index} style={{ textAlign: 'center' }}>
            <h4>{`Name of the ${ordinalNumber(index + 1)} table: `}</h4>
            <input
              type="text"
              value={tableName}
              onChange={(e) => {
                const newTableNames = [...tableNames];
                newTableNames[index] = e.target.value;
                setTableNames(newTableNames);
              }}
            />
          </div>
        ))}
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

const ordinalNumber = (num) => {
  const suffix = ['th', 'st', 'nd', 'rd'];
  const remainder10 = num % 10;
  const remainder100 = num % 100;

  return num + (suffix[(remainder10 <= 3 && remainder100 >= 10 && remainder100 <= 20) ? 0 : remainder10] || suffix[0]);
};

export default TableNames;
