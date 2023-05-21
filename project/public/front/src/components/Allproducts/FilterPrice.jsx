import React, { useEffect, useState } from 'react';

const FilterPrice = ({min,max,pushItem,items}) => {

    const [minV,setMin]=useState(min)
    const [maxV,setMax]=useState(max)
    useEffect(()=>{
        if(!items['filter']){
            setMin(min)
            setMax(max)
        }
    },[items])

    const push=()=>
    {
        pushItem((prev)=>{
            return {...prev,filter:[minV+' - '+maxV]}
        })
    }

    const filter=(e)=>{
        push()
        if(Number(minV)<(Number(maxV)+50)){
            console.log('yep',Number(minV)<(Number(maxV)+1),minV,maxV)
            if(e.target.id==='min'){
               setMin(e.target.value)
            }
            else{
                setMax(e.target.value)
            }
        }
        else{
            if(e.target.id==='min'){
                setMin(Number(minV)-50)
            }
            else{
                setMax(Number(maxV)+50)
            }
        }
    }

  return (
    <div className='FilterPrice' >
        <p>Filtrer par prix</p>
        <div className='range' >
        <div className="progress"  style={{left:(((minV-min))*100)/(max-min)+'%'  , right:(((max-maxV))*100)/(max-min)+'%' }}    > </div>
        <input type='range' id='min'  onInput={(e)=>filter(e)} min={min} max={max} value={minV} />
        <input type='range'  onChange={(e)=>filter(e)} min={min} max={max} value={maxV} />
        </div>
        <div className='rangeNumber' >{minV+' - '+maxV}</div>
    </div>
  );
}

export default FilterPrice;
