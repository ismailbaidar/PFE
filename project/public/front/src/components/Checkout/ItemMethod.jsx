import React from "react";
import { useId } from "react";

const ItemMethod = ({ name, img }) => {
    const id = useId();
    return (
        <label htmlFor={id} className="ItemMethod">
            <div className="methodChois">
                <div className="customRadio">
                    <input type="radio" name="item" id={id} />
                    <div className="radB"></div>
                </div>
                <div className="methodName">{name}</div>
            </div>
            <img src={img} />
        </label>
    );
};

export default ItemMethod;
