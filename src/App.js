import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className = "App">
      <Card title = "Title 1" />
      <Card text = "Text 2" />
      <Card title = "Title 3" text = "Text 3" />
    </div>
  );
}

export default App;

