import React from "react";

const ItemMethod = ({ name, img ,setMethod}) => {
    return (
        <div className="ItemMethod">
            <div className="methodChois">
            <div className="customRadio" >
            <input type="radio" name='item' onChange={()=>setMethod(name)}  />
            <div className="radB" ></div>
            </div>
                <div className="methodName">{name}</div>
            </div>
            <img src={img} />
        </div>
    );
};

export default ItemMethod;
