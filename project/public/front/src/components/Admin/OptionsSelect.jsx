import React from 'react';

const OptionsSelect = ({data}) => {
  return (
    <div className='ContainerInputProduct' >
    <div className='InputProduct'>
    <select>
    <option>choisis une option</option>
    </select>
    </div>
    <div className='InputProduct'>
    <select className='InputProduct' >
    <option>choisis une valeur</option>
    </select>
    </div>
    </div>
  );
}

export default OptionsSelect;
