import React from "react";

const InputItem = ({placeholder,type,value,options=[],input}) => {
    if(type=='textarea'){
        return (
            <div className="InputProduct">
            <div className="placeholderPI">{placeholder}</div>
            <textarea  style={
                {width:'100%',resize:'none',border: '1px solid rgb(219, 216, 216)',
                borderRadius: '5px',padding:'5px'}}
                rows={8}
              value={value} onChange={input}  ></textarea>
            </div>
        )
    }

    return (
        <div className="InputProduct">
            <div className="placeholderPI">{placeholder}</div>

            {type != "select" ? (
                <input value={value} onChange={input} type={type} />
            ) : (
                <select
                    onChange={(e) =>
                        input(e.target.options[e.target.selectedIndex].value)
                    }
                >
                    <option value={""}>choisir une categorie ---</option>
                    {options.map((e) => (
                        <option
                            selected={value}
                            value={e.id}
                        >{`${e.name}`}</option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default InputItem;
