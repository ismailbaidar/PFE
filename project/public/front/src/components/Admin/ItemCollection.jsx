import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useState } from 'react';

const ItemCollection = (e) => {
    console.log(e)
    const page=Math.ceil(e.items.length/4)
    const [index,setIndex]=useState(0)
    const Data = useMemo(()=>  e.items && e.items.slice(index*4,index*4+4) ,[index])
  return (
    <div className="itemCollection">
           <div className="headCollection" ><p>{e.name}</p> <div className="actionCollection" > <FontAwesomeIcon  className='edite' icon={faEdit} /> <FontAwesomeIcon  className='delete' icon={faTrash} />  </div>  </div>
            <div className="itemsCollection" >
            {Data.map(e=><div className="ItemImg" ><img src={'http://localhost:8000/storage/images/'+e.images[0].url} /></div>)}
            </div>
            <div className='PaginationCollection' >
            { e.items.length>4 && Array.from(Array(page)).map((e,i)=><div  onClick={()=>setIndex(i)} className={`  ${i===index?'activeBullet':''} bulletPagination`}></div>)}
            </div>
    </div>
  );
}

export default ItemCollection;
