import React from "react";
import "../../styles/suremsg.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faX } from "@fortawesome/free-solid-svg-icons";
function SureMsg({ close, func }) {
    return (
        <div className="full-display">
            <div className="suremsg">
                <div className="msg-icon">
                    <FontAwesomeIcon icon={faX} />
                </div>
                <div className="containe">
                    <div className="icon-close">
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </div>
                    <h1>Are you sure?</h1>
                    <p>
                        Do you really want to delete these records? This process
                        cannot be undone.
                    </p>
                    <div className="buttons">
                        <button className="cancel-button" onClick={close}>
                            Cancel
                        </button>
                        <button className="delete-button" onClick={func}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SureMsg;
