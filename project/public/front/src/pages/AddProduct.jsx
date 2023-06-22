import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import "../styles/AddProduct.css";
import OptionsSelect from "../components/Admin/OptionsSelect";
import InputItem from "../components/Admin/InputItem";
import FileIntem from "../components/Admin/FileIntem";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/productSlice";
import { getCategories } from "../features/CategorieSlice";
import { getSpects } from "../features/SpectSlice";
import { getBrands } from "../features/BrandSlice";
import FlashCard from "../components/Flash card/FlashCard";
import MiniLoading from "../components/mini-loading/MiniLoading";

const AddProduct = () => {
    let option = { key: "", value: "" };
    const [options, setOptions] = useState([option]);
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);
    const [categorie, setCategorie] = useState(null);
    const [brand, setBrand] = useState(null);
    const AddFile = (e) => {
        setFiles([...files, e.target.files[0]]);
    };
    const [showError, setError] = useState(false);
    const [isPending, setPending] = useState(false);
    const dispatch = useDispatch();
    const [titre, setTitre] = useState(null);
    const [price, setPrice] = useState(null);
    const [qte, setQte] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [dateRelease, setDateRelease] = useState(null);
    const [used, setUsed] = useState([]);
    console.log(new Date(dateRelease) > new Date());

    const config = {
        readonly: false,
        placeholder: "Start typings...",
    };
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getSpects());
    }, []);

    const categorieOption = useSelector((state) => state.Categorie.categories);
    const statusProduct = useSelector((state) => state.productReducer.status);
    const Spects = useSelector((state) => state.Spect.spects);
    const brands = useSelector((state) => state.Brand.brands);
    console.log("brands", brands);
    const navigate = useNavigate();

    function getCurrentDateTime(now) {
        // Get the year, month, and day
        var year = now.getFullYear();
        var month = padZero(now.getMonth() + 1); // Months are zero-indexed
        var day = padZero(now.getDate());

        // Get the hours, minutes, and seconds
        var hours = padZero(now.getHours());
        var minutes = padZero(now.getMinutes());
        var seconds = padZero(now.getSeconds());

        // Concatenate the date and time parts
        var dateTime =
            year +
            "-" +
            month +
            "-" +
            day +
            " " +
            hours +
            ":" +
            minutes +
            ":" +
            seconds;

        return dateTime;
    }

    // Helper function to pad a number with leading zeros if necessary
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    const filterByUsedSpects = (index) => {
        let ns = used.filter((e, i) => i !== index);
        let nd = Spects.filter((e, i) => !ns.includes(String(e.id)));
        return nd;
    };

    const ajouterProduct = (e) => {
        e.preventDefault();
        const obj = {
            name: titre,
            price: price,
            discount: discount,
            stock: qte,
            description: content,
            images: files,
            options: options,
            categorie: categorie,
            date:
                dateRelease == null
                    ? ""
                    : getCurrentDateTime(new Date(dateRelease)),
            brand: brand,
        };
        if (
            Object.entries(obj).some(([key, value]) => {
                if (key === "options") {
                    if (value.key === "" || value.value == "") return true;
                } else if (key != "date" && (value === "" || value == []))
                    return true;
                return dateRelease != null
                    ? new Date(dateRelease) < Date.now()
                    : false;
            })
        ) {
            return setError(true);
        }
        dispatch(addProduct(obj))
            .unwrap()
            .then((res) =>
                navigate("/admin/products", { state: { message: res.status } })
            )
            .catch((err) => console.log(err), "dfghhgfdfghjjhgfd");
        console.log("added");
    };

    return (
        <div className="Addproduct">
            <form
                onSubmit={ajouterProduct}
                method="post"
                encType="multipart/form-data"
            >
                <div className="HProduct">Ajouter Produit</div>

                <InputItem
                    input={(e) => setTitre(e.target.value)}
                    placeholder={"Titre"}
                    type={"text"}
                />

                <div className="ContainerInputProduct">
                    <InputItem
                        input={(e) => setPrice(e.target.value)}
                        placeholder={"Price"}
                        type={"text"}
                    />
                    <InputItem
                        input={(e) => setQte(e.target.value)}
                        placeholder={"Qte"}
                        type={"number"}
                    />
                </div>
                <div className="ContainerInputProduct">
                    <InputItem
                        placeholder={"Brand"}
                        type={"select"}
                        options={brands}
                        input={(v) => setBrand(v)}
                    />
                </div>
                <div className="ContainerInputProduct">
                    <InputItem
                        input={(v) => setCategorie(v)}
                        options={categorieOption}
                        placeholder={"Categorie"}
                        type={"select"}
                    />
                    <InputItem
                        input={(e) => setDiscount(e.target.value)}
                        placeholder={"Discount"}
                        type={"number"}
                    />
                </div>

                <div className="options">
                    <span className="placeholderPI">Options</span>
                    <div className="OptionsContainer">
                        {options.map((e, i) => (
                            <OptionsSelect
                                setUsed={setUsed}
                                setdata={setOptions}
                                id={i}
                                item={options[i]}
                                data={() => filterByUsedSpects(i)}
                            />
                        ))}
                    </div>

                    <div
                        className="AddBtnOption"
                        onClick={() => {
                            console.log(options[options.length - 1]);
                            if (
                                options[options.length - 1].key !== "" &&
                                options.length < Spects.length
                            ) {
                                setOptions([...options, option]);
                            }
                        }}
                    >
                        + Ajouter une autre option
                    </div>
                </div>
                <InputItem
                    input={(e) => setDateRelease(e.target.value)}
                    value={dateRelease}
                    placeholder={"Date Release"}
                    type={"datetime-local"}
                />

                <FileIntem
                    placeholder={"poduct images"}
                    files={files}
                    delFiles={setFiles}
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
                <button type="submit" className="AjouterProduit">
                    Ajouter Produit
                    {statusProduct === "pending" && (
                        <div className="pendinglayer">
                            <MiniLoading />
                        </div>
                    )}
                </button>
            </form>
            <div className="errorDi">
                {showError && (
                    <FlashCard
                        toogle={setError}
                        type="error"
                        content="tous les champ doivent etre plein"
                        title="Error"
                    />
                )}
            </div>
        </div>
    );
};

export default AddProduct;
