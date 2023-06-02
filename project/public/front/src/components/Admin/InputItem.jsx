import React from "react";

const InputItem = ({ placeholder, type, value, input }) => {
    return (
        <div className="InputProduct">
            <div className="placeholderPI">{placeholder}</div>
            {type != "select" ? (
                <input value={value} ref={input} type={type} />
            ) : (
                <select></select>
            )}
        </div>
    );
};

export default InputItem;
