import React from 'react';

const DefinitionsList = ({ data }) => {
  return (
    <dl>
      {data.map(item => (
        <div key={item.id}>
          <dt>{item.dt}</dt>
          <dd>{item.dd}</dd>
        </div>
      ))}
    </dl>
  );
};

export default DefinitionsList;
