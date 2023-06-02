import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IFile = ({ AddFile }) => {
    return (
        <div className="InputFileProductAd">
            <label htmlFor="file">
                <FontAwesomeIcon id="uploadIcon" icon={faCloudArrowUp} /> Upload
                File
            </label>
            <input type="file" onChange={AddFile} id="file" />
        </div>
    );
};

export default IFile;
