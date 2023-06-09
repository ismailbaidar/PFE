import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputItem from "../components/Admin/InputItem";
import OptionsSelect from "../components/Admin/OptionsSelect";
import JoditEditor from "jodit-react";
import FileIntem from "../components/Admin/FileIntem";
import "../styles/AddProduct.css";
import MiniLoading from "../components/mini-loading/MiniLoading";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/CategorieSlice";
import { getSpects } from "../features/SpectSlice";
import { getBrands } from "../features/BrandSlice";
import { getoneproduct, ModifierProduct } from "../features/productSlice";

const ModifierProduit = () => {
    let option = { key: "", value: "" };
    const [options, setOptions] = useState([option]);
    const editor = useRef(null);
    const [content, setContent] = useState();
    const config = {
        readonly: false,
        placeholder: "Start typings...",
    };
    const dispatch = useDispatch();
    {
        /*files---------*/
    }
    const [files, setFiles] = useState([]);
    const [images, setImages] = useState([]);

    {
        /*id---------*/
    }

    const { id } = useParams();

    {
        /*items inputs---------*/
    }
    const [brand, setBrand] = useState(null);
    const [categorie, setCategorie] = useState(null);
    const [titre, setTitre] = useState(null);
    const [price, setPrice] = useState(null);
    const [qte, setQte] = useState(null);
    const [discount, setDiscount] = useState(null);

    {
        /*function pour ajouter img---------*/
    }

    const AddFile = (e) => {
        setFiles([...files, e.target.files[0]]);
    };

    const categorieOption = useSelector((state) => state.Categorie.categories);
    const Spects = useSelector((state) => state.Spect.spects);
    const brands = useSelector((state) => state.Brand.brands);
    const main = useSelector((state) => state.Product.main);
    const [used, setUsed] = useState([]);
    useEffect(() => {
        dispatch(getoneproduct(id))
            .unwrap()
            .then((data) => {
                setUsed(data.produit.spects.map((e) => e.id));
                setOptions(
                    data.produit.spects.map((e) => ({
                        key: e.id,
                        value: e.pivot.value,
                    }))
                );
                setCategorie(data.produit.categorie.id);
                setBrand(data.produit.brand.id);
                setTitre(data.produit.name);
                setPrice(data.produit.price);
                setQte(data.produit.stock);
                setDiscount(data.produit.discount);
                setContent(data.produit.description);
                setImages(data.produit.images);
            });
        dispatch(getCategories());
        dispatch(getSpects());
        dispatch(getBrands());
    }, []);

    {
        /*pour chaque item de options on va filter les option deja exist dans used array ---------*/
    }

    const filterByUsedSpects = (index) => {
        let ns = used.filter((e, i) => i !== index);
        let nd = Spects.filter((e, i) => !ns.includes(e.id));
        return nd;
    };

    const navigate = useNavigate();

    const modify = () => {
        const obj = {
            id: id,
            name: titre,
            price: price,
            discount: discount,
            stock: qte,
            description: content,
            Oldimages: images,
            Newimages: files,
            options: options,
            categorie: categorie,
            brand: brand,
        };
        dispatch(ModifierProduct(obj))
            .unwrap()
            .then((res) => navigate("/admin/products"));
    };
    const statusProduct = useSelector((state) => state.Product.status);

    return (
        <div className="Addproduct">
            <div className="HProduct">Modifier Produit</div>

            <InputItem
                placeholder={"Titre"}
                value={titre}
                input={(e) => setTitre(e.target.value)}
                type={"text"}
            />

            <div className="ContainerInputProduct">
                <InputItem
                    placeholder={"Price"}
                    value={price}
                    input={(e) => setPrice(e.target.value)}
                    type={"number"}
                />
                <InputItem
                    placeholder={"Qte"}
                    value={qte}
                    input={(e) => setQte(e.target.value)}
                    type={"number"}
                />
            </div>
            <InputItem
                placeholder={"Brand"}
                type={"select"}
                options={brands}
                value={brand}
                input={(v) => setBrand(v)}
            />
            <div className="ContainerInputProduct">
                <InputItem
                    placeholder={"Categorie"}
                    type={"select"}
                    value={categorie}
                    options={categorieOption}
                    input={(v) => setCategorie(v)}
                />
                <InputItem
                    placeholder={"Discount"}
                    value={discount}
                    input={(e) => setDiscount(e.target.value)}
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
                    onClick={() => setOptions([...options, option])}
                >
                    + Ajouter une autre option
                </div>
            </div>

            <FileIntem
                placeholder={"poduct images"}
                files={files}
                AddFile={AddFile}
                images={images}
                delFiles={setFiles}
                delImages={setImages}
            />

            <div className="descriptionAddProduct">
                <div className="placeholderPI">Description</div>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) => {}}
                />
            </div>
            <div className="AjouterProduit" onClick={modify}>
                Modifier Produit
                {statusProduct === "pending" && (
                    <div className="pendinglayer">
                        <MiniLoading />
                    </div>
                )}
            </div>
        </div>
    );
};
export default ModifierProduit;
