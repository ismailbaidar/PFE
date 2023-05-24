import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import InputItem from './InputItem';

const AdressItem = () => {
  return (
    <div className='AdressItem itemSideP ' >
    <div className='itemHead' >
        <div className='HTitle' >
        <FontAwesomeIcon  id={'iconeSuccess'} icon={faCircleCheck} />
        <span className='titleHead' >1-Adresse</span>
        </div>
    </div>
    <div className='itemContent' >
        <InputItem   placeholder={'Nom'} />
        <InputItem   placeholder={'Prenom'} />
        <InputItem full  placeholder={'Adress'} />
        <InputItem   placeholder={'Postal code'} />
        <InputItem   placeholder={'Ville'} />
        <InputItem full   placeholder={'Province'} />
        <InputItem full   placeholder={'Tele'} />
    </div>
    <button className='Confirm' >
    Confirm
    </button>
    </div>
  );
}

export default AdressItem;
