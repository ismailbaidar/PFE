import React, { useState, useRef, useMemo,useEffect } from "react";
import JoditEditor from "jodit-react";
import "../styles/AddProduct.css";
import OptionsSelect from "../components/Admin/OptionsSelect";
import InputItem from "../components/Admin/InputItem";
import FileIntem from "../components/Admin/FileIntem";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../features/Products";
import { getCategories } from "../features/CategorieSlice";
import { getSpects } from "../features/SpectSlice";
import { getBrands } from "../features/BrandSlice";
import FlashCard from '../components/Flash card/FlashCard'
const AddProduct = () => {
    let option = { key: "", value: "" };
    const [options, setOptions] = useState([option]);
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);
    const [categorie,setCategorie]=useState(null)
    const [brand,setBrand]=useState(null)
    const AddFile = (e) => {
        setFiles([...files, e.target.files[0]]);
    };
    const [showError,setError] = useState(false)
    const dispatch = useDispatch();
    const name = useRef();
    const price = useRef();
    const discount = useRef();
    const stock = useRef();
    const [used,setUsed]=useState([])
    const config = {
        readonly: false,
        placeholder: "Start typings...",
    };

    const categorieOption = useSelector(state=>state.Categorie.categories)
    const Spects = useSelector(state=>state.Spect.spects)
    const brands = useSelector(state=>state.Brand.brands)

    useEffect(()=>{
        dispatch(getCategories())
        dispatch(getSpects())
        dispatch(getBrands())
    },[])



    const filterByUsedSpects=(index)=>{
        let ns = used.filter((e,i)=>i!==index)
        let nd = Spects.filter((e,i)=> !ns.includes(String(e.id)   ))
        return nd
    }

    const ajouterProduct = (e) => {
        e.preventDefault()
        const obj = {
            name: name.current.value,
            price: price.current.value,
            discount: discount.current.value,
            stock: stock.current.value,
            description: content,
            images: files,
            options:options,
            categorie:categorie,
            brand:brand
        }
        if(Object.entries(obj).some(([key,value])=>{
            if(key==='options'){
                if(value.key==='' || value.value=='') return true
            }
            else if(value==='' || value==[]) return true
        }))
        {
            return setError(true)
        }
        dispatch(
            addProduct({
                name: name.current.value,
                price: price.current.value,
                discount: discount.current.value,
                stock: stock.current.value,
                description: content,
                images: files,
                options:options,
                categorie:categorie,
                brand:brand
            })
        );
    };

    return (
        <div className="Addproduct">
            <form   onSubmit={ajouterProduct} method='post'  encType='multipart/form-data'>
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
                    <InputItem
                        placeholder={"Brand"}
                        type={"select"}
                        options={brands}
                        input={(v)=>setBrand(v)}
                    />
                </div>
                <div className="ContainerInputProduct">
                    <InputItem  input={(v)=>setCategorie(v)} options={categorieOption} placeholder={"Categorie"} type={"select"} />
                    <InputItem
                        input={discount}
                        placeholder={"Discount"}
                        type={"number"}
                    />
                </div>

                <div className="options">
                    <span className="placeholderPI">Options</span>
                    <div className="OptionsContainer">
                        {options.map((e,i) => (
                            <OptionsSelect setUsed={setUsed} setdata={setOptions} id={i} data={()=>filterByUsedSpects(i)} />
                        ))}
                    </div>

                    <div
                        className="AddBtnOption"
                        onClick={() =>{
                            console.log(options[options.length-1])
                            if(options[options.length-1].key!=='' && options.length<Spects.length){
                                setOptions([...options, option])
                            }
                            }}
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
                    type="submit"
                    className="AjouterProduit"
                >
                    Ajouter Produit
                </button>
            </form>
            <div className='errorDi' >
            {showError && <FlashCard toogle={setError} type='error' content='tous les champ doivent etre plein' title='Error' />}
            </div>
        </div>
    );
};

export default AddProduct;
