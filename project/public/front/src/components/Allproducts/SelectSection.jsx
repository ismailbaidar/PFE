import React from 'react';
import ItemSelect from './ItemSelect';

const SelectSection = ({pushItem,items}) => {
  return (
    <div className='SelectSection' >
    <ItemSelect name={'CPU'} items={items} pushItem={pushItem} />
    <ItemSelect name={'GPU'} items={items} pushItem={pushItem}/>
    <ItemSelect name={'RAM'} items={items} pushItem={pushItem}/>
    <ItemSelect name={'PIXEL'} items={items} pushItem={pushItem}/>
    <ItemSelect name={'STROTAGE'} items={items} pushItem={pushItem}/>
    </div>
  );
}

export default SelectSection;
