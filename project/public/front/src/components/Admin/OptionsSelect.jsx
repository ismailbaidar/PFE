import React from "react";
import InputItem from "./InputItem";

const OptionsSelect = ({ data }) => {
    return (
        <div className="ContainerInputProduct">
            <div className="InputProduct">
                <select>
                    <option>choisis une option</option>
                </select>
            </div>
            <div className="InputProduct">
                <input />
            </div>
        </div>
    );
};

export default OptionsSelect;
