import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoAreaChart = () => {
  return (
    <div className='InfoAreaChart' >
        <p className='H-InfoAreaChart' >Trafic</p>
        <p className='C-InfoAreaChart' >450,250</p>
        <p className='P-InfoAreaChart' ><FontAwesomeIcon  id='iconeUD' icon={faCaretUp} /> +10%</p>
    </div>
  );
}

export default InfoAreaChart;
