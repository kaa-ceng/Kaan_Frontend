import React from 'react';

const VisualizeTables = ({ tableNames }) => {
  const tablesPerRow = 5;

  const renderTables = () => {
    const rows = [];
    for (let i = 0; i < tableNames.length; i += tablesPerRow) {
      const rowTables = tableNames.slice(i, i + tablesPerRow);
      const tableRow = (
        <div className="table-row" key={i}>
          {rowTables.map((tableName, index) => (
            <div className="table" key={index}>
              <h4>{tableName}</h4>
              {/* Render your table content here */}
            </div>
          ))}
        </div>
      );
      rows.push(tableRow);
    }
    return rows;
  };

  return (
    <div>
      <h1>Visualized Tables</h1>
      {renderTables()}
    </div>
  );
};

export default VisualizeTables;
