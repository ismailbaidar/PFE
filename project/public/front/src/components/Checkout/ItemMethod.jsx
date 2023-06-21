import React from "react";
import { useId } from "react";

const ItemMethod = ({ name, img, setMethod }) => {
    const id = useId();
    return (
        <label htmlFor={id} className="ItemMethod">
            <div className="methodChois">
                <div className="customRadio">
                    <input
                        type="radio"
                        name="item"
                        id={id}
                        onChange={() => setMethod(name)}
                    />
                    <div className="radB"></div>
                </div>
                <div className="methodName">{name}</div>
            </div>
            <img src={img} />
        </label>
    );
};

export default ItemMethod;
