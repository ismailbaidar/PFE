import React, { useId, useRef, useState,useEffect, useMemo } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import ItemSliderMnagement from "./ItemSliderMnagement";
const SliderContentManagement = ({ name }) => {
    const [slider,setSlider] = useState([])
    const sliderItem = useMemo(()=>   slider?.find(e=>e.name==name) ,[slider])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getSliders')
        .then(res=>setSlider(res.data.sliders))
    },[])
    const id = useId()
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState();
    const handelModification = (e) => {
        setItems([URL.createObjectURL(e.target.files[0]), ...items]);
        const form = new FormData();
        form.append("name", name);
        form.append("imageSlider", e.target.files[0]);
        axios
            .post("http://localhost:8000/api/AddSliderImage", form)
            .then((res) => console.log(res.data))
            .catch(err=>err);
    };
    const deleteItems = (id) => {
        setItems((prev) => {
            let n = prev;
            n = n.filter((e, i) => i !== id);
            return n;
        });
    };

    return (
        <div className="SliderContainerM"  >
            <div className="SliderContentManagement">
                <div className="sliderItemsManagement">
                    {sliderItem?.sliderimages?.map((e, i) => (
                        <ItemSliderMnagement
                            deleteItem={() => deleteItems(i)}
                            id={i}
                            selected={selected}
                            setSelected={setSelected}
                            img={e}
                        />
                    ))}
                    {items.map((e,i)=>(
                        <ItemSliderMnagement
                        deleteItem={() => deleteItems(i)}
                        id={i}
                        selected={selected}
                        setSelected={setSelected}
                        img={e}
                        isFile={true}
                    />
                    ))}
                </div>
            </div>
            <div className="AddPicSlider">
                <label htmlFor={id}>
                    <FontAwesomeIcon icon={faPlus} />
                </label>
                <input
                    id={id}
                    onChange={(e) => handelModification(e)}
                    type="file"
                />
            </div>
        </div>
    );
};

export default SliderContentManagement;
