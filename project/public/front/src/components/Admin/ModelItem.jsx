import React from 'react';
import ModelData from './ModelData';

const ModelItem = ({setIdNull}) => {
  return (
    <div className='ModelItemProduct' onClick={setIdNull}  >
        <ModelData/>
    </div>
  );
}

export default ModelItem;
