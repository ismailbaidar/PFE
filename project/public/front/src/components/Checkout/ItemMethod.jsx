import React from "react";

const ItemMethod = ({ name, img }) => {
    return (
        <div className="ItemMethod">
            <div className="methodChois">
            <div className="customRadio" >
            <input type="radio"  />
            <div className="radB" ></div>
            </div>
                <div className="methodName">{name}</div>
            </div>
            <img src={img} />
        </div>
    );
};

export default ItemMethod;
