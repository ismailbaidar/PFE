import React from "react";
import InputItem from "./InputItem";

const OptionsSelect = ({ data,setdata,id,setUsed }) => {
    const spects = data()
    return (
        <div className="ContainerInputProduct">
            <div className="InputProduct">
                <select  onChange={(e)=>setdata(prev=>{
                    let ndata = prev
                    let value = e.target.options[e.target.selectedIndex].value
                    ndata[id]={...ndata[id],key:value}
                    setUsed((old)=>{
                        let nd=old
                        if(value===''){
                            nd=nd.filter((e,i)=>i!==id)
                            return nd
                        }
                        nd[id]=value
                        return nd
                    })
                    return [...ndata]
                })} >
                    <option value='' >choisis une option</option>
                    {spects.map(e=><option value={e.id} >{e.name}</option>)}
                </select>
            </div>
            <div className="InputProduct">
                <input  onChange={(e)=>setdata(prev=>{
                    let ndata = prev
                    ndata[id] = {...ndata[id],value:e.target.value}
                    return [...ndata]
                })} />
            </div>
        </div>
    );
};

export default OptionsSelect;
