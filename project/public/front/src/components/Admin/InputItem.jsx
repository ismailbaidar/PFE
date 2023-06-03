import React from "react";

const InputItem = ({ placeholder, type, value, input ,options}) => {
    return (
        <div className="InputProduct">
            <div className="placeholderPI">{placeholder}</div>
            {type != "select" ? (
                <input value={value} ref={input}  type={type} />
            ) : (
                <select  onChange={(e)=>console.log(e.target.options[e.target.selectedIndex].value)} >
                <option value={''} >choisir une categorie ---</option>
                {options.map(e=><option value={e.id} >{`${e.name} (${e.products_count})`}</option>)}
                </select>
            )}
        </div>
    );
};

export default InputItem;
