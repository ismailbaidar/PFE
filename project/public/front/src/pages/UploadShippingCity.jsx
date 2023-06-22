import React, { useState, useRef, useEffect } from "react";
import { read, utils } from "xlsx";
import axios from "axios";
import FlashCard from "../components/Flash card/FlashCard";
const UploadShippingCity = () => {
    const [data, setData] = useState([]);
    const [file, setFile] = useState();
    const [success, setSuccess] = useState(false);
    const [Error, setError] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handelAddCities = () => {
        if (data.length > 0) {
            axios
                .post("http://localhost:8000/api/addShippingcities", data)
                .then((res) => {
                    if (res.status == 200) {
                        setSuccess(true);
                    } else {
                        setError(true);
                    }
                });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const arrayBuffer = e.target.result;
                    const workbook = read(arrayBuffer, { type: "array" });
                    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = utils.sheet_to_json(worksheet, {
                        header: 1,
                    });
                    const headers = jsonData[0];
                    const rows = jsonData.slice(1);
                    const parsedData = rows.map((row) => {
                        const obj = {};
                        row.forEach((value, index) => {
                            obj[headers[index]] = value;
                        });
                        return obj;
                    });
                    setData(parsedData);
                };
                reader.readAsArrayBuffer(file);
            }
        };
        fetchData();
        console.log(data);
    }, [file]);

    return (
        <div className="UploadShippingCity">
            <p className="SlidersContentManagement">Shipping cities</p>
            <div className="c-cities">
                <input type="file" onChange={handleFileUpload} />
                <button className="ajouterShipping" onClick={handelAddCities}>
                    ADD Shipping cities
                </button>
            </div>
            <div className="errorDi">
                {success && (
                    <FlashCard
                        type="success"
                        content={"shipping cities bien ajouter"}
                        title={"shipping cities actions"}
                        toogle={() => setSuccess(null)}
                    />
                )}
                {Error && (
                    <FlashCard
                        type="error"
                        content={"somthing went wrong "}
                        title={"shipping cities actions"}
                        toogle={() => setError(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default UploadShippingCity;
