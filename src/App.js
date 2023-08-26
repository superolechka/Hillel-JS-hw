import React from 'react';
import DefinitionsList from './Definitions';

const App = () => {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];

  return (
    <div className="App">
      <h1>Definitions List</h1>
      <DefinitionsList data={definitions} />
    </div>
  );
};

export default App;

