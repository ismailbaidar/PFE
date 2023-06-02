import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "../styles/AddProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import ImageCard from "../components/Admin/ImageCard";
import OptionsSelect from "../components/Admin/OptionsSelect";
import InputItem from "../components/Admin/InputItem";
import FileIntem from "../components/Admin/FileIntem";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/Products";
const AddProduct = () => {
    let option = { key: "", value: "" };
    const [options, setOptions] = useState([option]);
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);
    const AddFile = (e) => {
        setFiles([...files, e.target.files]);
    };
    const dispatch = useDispatch();
    const name = useRef();
    const price = useRef();
    const discount = useRef();
    const stock = useRef();
    const config = {
        readonly: false,
        placeholder: "Start typings...",
    };

    const ajouterProduct = () => {
        console.log(files);
        dispatch(
            addProduct({
                name: name.current.value,
                price: price.current.value,
                discount: discount.current.value,
                stock: stock.current.value,
                description: content,
                images: files,
            })
        );
    };

    return (
        <div className="Addproduct">
            <form encType="multipart/form-data">
                <div className="HProduct">Ajouter Produit</div>

                <InputItem input={name} placeholder={"Titre"} type={"text"} />

                <div className="ContainerInputProduct">
                    <InputItem
                        input={price}
                        placeholder={"Price"}
                        type={"text"}
                    />
                    <InputItem
                        input={stock}
                        placeholder={"Qte"}
                        type={"number"}
                    />
                </div>
                <div className="ContainerInputProduct">
                    <InputItem placeholder={"Categorie"} type={"select"} />
                    <InputItem
                        input={discount}
                        placeholder={"Discount"}
                        type={"number"}
                    />
                </div>

                <div className="options">
                    <span className="placeholderPI">Options</span>
                    <div className="OptionsContainer">
                        {options.map((e) => (
                            <OptionsSelect />
                        ))}
                    </div>

                    <div
                        className="AddBtnOption"
                        onClick={() => setOptions([...options, option])}
                    >
                        + Ajouter une autre option
                    </div>
                </div>

                <FileIntem
                    placeholder={"poduct images"}
                    files={files}
                    AddFile={AddFile}
                />

                <div className="descriptionAddProduct">
                    <div className="placeholderPI">Description</div>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        tabIndex={1}
                        onBlur={(newContent) => setContent(newContent)}
                        onChange={(newContent) => {
                            console.log(newContent);
                        }}
                    />
                </div>
                <button
                    type="button"
                    onClick={ajouterProduct}
                    className="AjouterProduit"
                >
                    Ajouter Produit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
